(function () {
  var PHONE = "+17073855673";

  // A returning visitor who once started the chat intake still has a saved business name —
  // use it so the prefilled text arrives already knowing who they are.
  var biz = "";
  try {
    var chat = JSON.parse(localStorage.getItem("duna_chat") || "null");
    if (chat && chat.a) biz = (chat.a.business_name || "").trim();
  } catch (e) {}
  var body = "Hi Barrett — I’d like a website" + (biz ? " for " + biz : " for my business") + ".";

  function track(name) { try { if (window.fbq) fbq("track", "Contact", { content_name: name }); } catch (e) {} }
  document.querySelectorAll('a[href^="sms:"]').forEach(function (a) {
    a.href = "sms:" + PHONE + "?&body=" + encodeURIComponent(body);
    a.addEventListener("click", function () { track("text"); });
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
    a.addEventListener("click", function () { track("call"); });
  });

  // The closing CTA and the sticky bars say the same thing, so only one shows at a time.
  var endCta = document.querySelector(".cta-stack--end");
  if (endCta && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      document.body.classList.toggle("cta-visible", entries[0].isIntersecting);
    }, { rootMargin: "0px 0px -60px 0px", threshold: 0 }).observe(endCta);
  }

  var hdr = document.querySelector(".hdr"), burger = document.querySelector(".burger");
  if (hdr && burger) {
    var setMenu = function (open) {
      hdr.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    };
    burger.addEventListener("click", function () { setMenu(!hdr.classList.contains("open")); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
    document.addEventListener("click", function (e) { if (!hdr.contains(e.target)) setMenu(false); });
  }
  if (hdr) {
    var onScroll = function () { hdr.classList.toggle("is-stuck", window.scrollY > 6); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Section reveals. Without IntersectionObserver everything simply stays visible.
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // Optional images (the About photo) hide their slot until the file exists.
  Array.prototype.forEach.call(document.querySelectorAll("[data-optional] img"), function (img) {
    var drop = function () { var f = img.closest("[data-optional]"); if (f) f.hidden = true; };
    if (img.complete && img.naturalWidth === 0) drop(); else img.addEventListener("error", drop);
  });

  var y = document.querySelectorAll("[data-year]");
  Array.prototype.forEach.call(y, function (el) { el.textContent = new Date().getFullYear(); });

  var top = document.getElementById("totop");
  if (top) top.addEventListener("click", function () {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    try { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); }
    catch (e) { window.scrollTo(0, 0); }   // older Safari has no options object
  });
})();
