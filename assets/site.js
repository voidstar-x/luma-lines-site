/* Luma Lines site motion — anime.js v4.5.0 (vendored). Per DESIGN.md:
   spring settle, gentle reveals, ONE ambient loop, reduced-motion disables all.
   Progressive enhancement: without JS (or without IntersectionObserver) all
   content renders visible and static — the hidden state only exists under
   html.js and is only driven when the observer path is available. */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  function showAll() {
    reveals.forEach(function (el) {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }

  // No JS engine, no IntersectionObserver, or reduced motion: static page.
  if (reduced || typeof anime === "undefined" || !("IntersectionObserver" in window)) {
    showAll();
    return;
  }

  // Scroll reveals: rise 24px + fade, staggered per element as it enters.
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      io.unobserve(el);
      anime.animate(el, {
        opacity: [0, 1],
        translateY: [24, 0],
        duration: 600,
        ease: "out(3)",
        delay: (parseInt(el.dataset.stagger || "0", 10)) * 90
      });
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".features, .shots").forEach(function (group) {
    Array.prototype.forEach.call(group.querySelectorAll(":scope > .reveal, :scope > figure"), function (el, i) {
      el.dataset.stagger = i;
    });
  });
  reveals.forEach(function (el) { io.observe(el); });

  // Hero entrance: damped settle (no overshoot) — blessed in DESIGN.md.
  var heroKids = document.querySelectorAll(".hero-inner > *");
  heroKids.forEach(function (el, i) {
    anime.animate(el, {
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 700,
      ease: "out(4)",
      delay: 120 + i * 110
    });
  });

  // The ONE ambient loop: hero glow breathes, opacity only.
  anime.animate("#heroGlow", {
    opacity: [0.35, 0.75],
    duration: 6000,
    ease: "inOut(2)",
    loop: true,
    alternate: true
  });
})();
