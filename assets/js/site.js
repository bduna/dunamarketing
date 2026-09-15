/* Duna Marketing: navigation, text/call links, copy-the-number, section reveals and
   back-to-top. No dependencies. Every feature is wrapped so one failure can never take
   the others down, and nothing on the page depends on this file to be readable. */
(function () {
  "use strict";

  var root = document.documentElement;
  var PHONE = "+17073855673";
  var SMS_BODY = "Hi Barrett, I run an agency and I’d like to talk about white-label websites.";

  function safely(fn) {
    try { fn(); } catch (e) { if (window.console) console.error(e); }
  }

  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  function track(name) {
    try { if (window.fbq) window.fbq("track", "Contact", { content_name: name }); } catch (e) {}
  }

  // Text links arrive with the message already written; texts and calls both count as a Contact.
  safely(function () {
    document.querySelectorAll('a[href^="sms:"]').forEach(function (a) {
      a.href = "sms:" + PHONE + "?&body=" + encodeURIComponent(SMS_BODY);
      a.addEventListener("click", function () { track("text"); });
    });
    document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
      a.addEventListener("click", function () { track("call"); });
    });
  });

  // A mouse can't place a call, so on those devices the number is a button that copies itself.
  safely(function () {
    var status = document.getElementById("copy-status");

    function fallbackCopy(text) {
      var t = document.createElement("textarea");
      t.value = text;
      t.setAttribute("readonly", "");
      t.style.position = "fixed";
      t.style.opacity = "0";
      document.body.appendChild(t);
      t.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(t);
    }

    document.querySelectorAll(".js-copy").forEach(function (el) {
      el.addEventListener("click", function () {
        var num = el.getAttribute("data-num") || "";
        var done = function () {
          el.classList.add("is-copied");
          if (status) status.textContent = "Copied " + num + " to your clipboard.";
          window.setTimeout(function () { el.classList.remove("is-copied"); }, 2200);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(num).then(done, function () { fallbackCopy(num); done(); });
        } else {
          fallbackCopy(num);
          done();
        }
      });
    });
  });

  // Phone and tablet menu.
  safely(function () {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      root.classList.toggle("nav-open", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && root.classList.contains("nav-open")) { setOpen(false); toggle.focus(); }
    });
    var wide = window.matchMedia("(min-width: 900px)");
    var onChange = function () { if (wide.matches) setOpen(false); };
    if (wide.addEventListener) wide.addEventListener("change", onChange);
    else if (wide.addListener) wide.addListener(onChange);
  });

  // Header gains a rule once the page has scrolled.
  safely(function () {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var ticking = false;
    var update = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  });

  // Sections ease in as they arrive. Content is only hidden once this has actually started,
  // so a script failure or an old browser shows everything immediately.
  safely(function () {
    var items = document.querySelectorAll(".reveal");
    if (!items.length || prefersReducedMotion() || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    root.classList.add("reveal-ready");
    items.forEach(function (el) { io.observe(el); });
  });

  safely(function () {
    document.querySelectorAll(".js-top").forEach(function (btn) {
      btn.addEventListener("click", function () {
        try { window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" }); }
        catch (e) { window.scrollTo(0, 0); }
      });
    });
  });

  safely(function () {
    var year = String(new Date().getFullYear());
    document.querySelectorAll(".js-year").forEach(function (el) { el.textContent = year; });
  });
})();
