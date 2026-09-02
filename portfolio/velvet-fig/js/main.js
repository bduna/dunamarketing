// main.js — Velvet Fig. Mobile nav · header rule on scroll · scroll reveal ·
// offset anchors · footer year.
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
    });
  });

  /* ---- footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
