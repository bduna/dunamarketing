(function () {
  var PHONE = "+17073855673";

  // A returning visitor who once started the chat intake still has a saved business name —
  // use it so the prefilled text arrives already knowing who they are.
  var biz = "";
  try {
    var chat = JSON.parse(localStorage.getItem("duna_chat") || "null");
    if (chat && chat.a) biz = (chat.a.business_name || "").trim();
  } catch (e) {}
  var body = "Hi Barrett \u2014 I\u2019d like a website" + (biz ? " for " + biz : " for my business") + ".";

  function track(name) { try { if (window.fbq) fbq("track", "Contact", { content_name: name }); } catch (e) {} }
  document.querySelectorAll('a[href^="sms:"]').forEach(function (a) {
    a.href = "sms:" + PHONE + "?&body=" + encodeURIComponent(body);
    a.addEventListener("click", function () { track("text"); });
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
    a.addEventListener("click", function () { track("call"); });
  });

  // The bottom CTA block and the sticky bars say the same thing, so only one shows at a time.
  var endCta = document.querySelector(".cta-stack");
  if (endCta && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      document.body.classList.toggle("cta-visible", entries[0].isIntersecting);
    }, { rootMargin: "0px 0px -60px 0px", threshold: 0 }).observe(endCta);
  }

  var bar = document.querySelector(".topbar"), mb = document.querySelector(".menu-btn");
  if (bar && mb) {
    var setMenu = function (open) { bar.classList.toggle("open", open); mb.setAttribute("aria-expanded", open ? "true" : "false"); };
    mb.addEventListener("click", function () { setMenu(!bar.classList.contains("open")); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
    document.addEventListener("click", function (e) { if (!bar.contains(e.target)) setMenu(false); });
  }
  // Optional images (the About photo) hide their slot until the file exists.
  Array.prototype.forEach.call(document.querySelectorAll("[data-optional] img"), function (img) {
    var drop = function () { var f = img.closest("[data-optional]"); if (f) f.hidden = true; };
    if (img.complete && img.naturalWidth === 0) drop(); else img.addEventListener("error", drop);
  });

  var y = document.querySelector("[data-year]"); if (y) y.textContent = new Date().getFullYear();

  var top = document.getElementById("totop");
  if (top) top.addEventListener("click", function () {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    try { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); }
    catch (e) { window.scrollTo(0, 0); }   // older Safari has no options object
  });
})();
