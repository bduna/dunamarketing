// main.js — Velvet Fig. Mobile nav · header rule on scroll · scroll reveal ·
// offset anchors · the reservation request · footer year.
(function () {
  "use strict";

  /* ---- mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---- the header draws its brass rule only once the page has moved ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var stuck = false;
    var onScroll = function () {
      var should = window.pageYOffset > 8;
      if (should !== stuck) { stuck = should; header.classList.toggle("is-stuck", should); }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (document.querySelector(".cta-bar")) document.body.classList.add("has-cta-bar");

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- in-page anchors clear the sticky header ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href").slice(1);
      var target = id && document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      var offset = header ? header.offsetHeight + 16 : 0;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: "smooth"
      });
      var first = target.querySelector("input, select, textarea");
      if (first && target.classList.contains("reserve")) {
        window.setTimeout(function () { first.focus({ preventScroll: true }); }, 450);
      }
    });
  });

  /* ---- the reservation request --------------------------------------------
     Static host, no server. The form is real: it validates, it rejects bots,
     and on submit it hands the visitor a pre-addressed email with the date, the
     time and the party size already written into it. The note under the button
     says so, so nobody is told a table is booked when it isn't. With JS off the
     form still posts to the same mailto: address. */
  document.querySelectorAll("form[data-mailto]").forEach(function (form) {
    var done = document.getElementById(form.getAttribute("data-done"));

    form.addEventListener("submit", function (e) {
      if (!form.checkValidity()) return;        // let the browser do the telling
      e.preventDefault();

      var el = form.elements;
      if (el["website"] && el["website"].value) return;   // honeypot: silently drop

      var val = function (n) { return el[n] && el[n].value ? el[n].value.trim() : ""; };
      var name = val("fullname");
      var body = [
        "Name: " + name,
        "Email: " + val("email"),
        "Phone: " + (val("phone") || "—"),
        "For: " + val("occasion"),
        "Date: " + (val("resdate") || "not set yet"),
        "Time: " + (val("restime") || "not set yet"),
        "Party size: " + (val("party") || "not sure yet"),
        "",
        val("message") || "(no message)",
        "",
        "— sent from velvetfig.com"
      ].join("\n");

      window.location.href = "mailto:" + form.getAttribute("data-mailto") +
        "?subject=" + encodeURIComponent("Reservation request — " + (name || "website")) +
        "&body=" + encodeURIComponent(body);

      if (done) {
        form.hidden = true;
        done.hidden = false;
        done.setAttribute("tabindex", "-1");
        done.focus({ preventScroll: true });
      }
    });
  });

  /* ---- footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
