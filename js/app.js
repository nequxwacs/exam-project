(() => {
  "use strict";
  !(function (e) {
    let t = new Image();
    (t.onload = t.onerror =
      function () {
        !(function (e) {
          let t = !0 === e ? "webp" : "no-webp";
          document.documentElement.classList.add(t);
        })(2 == t.height);
      }),
      (t.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
  })(),
    (function () {
      const e = document.querySelector(".header__burger"),
        t = document.querySelector(".header__menu");
      e &&
        e.addEventListener("click", () => {
          t.classList.contains("menu--active")
            ? (t.classList.remove("menu--active"),
              e.classList.remove("header__burger--active"),
              document.body.classList.remove("locked"))
            : (t.classList.add("menu--active"),
              e.classList.add("header__burger--active"),
              document.body.classList.add("locked"));
        });
    })(),
    (function () {
      const e = document.querySelectorAll("img[data-src], source[data-srcset]"),
        t = document.documentElement.clientHeight;
      let c = [];
      function n() {
        document.querySelectorAll("img[data-src], source[data-srcset]").length >
          0 && o();
      }
      function o() {
        let n = c.findIndex((e) => pageYOffset > e - t);
        n >= 0 &&
          (e[n].dataset.src
            ? ((e[n].src = e[n].dataset.src), e[n].removeAttribute("data-src"))
            : e[n].dataset.srcset &&
              ((e[n].srcset = e[n].dataset.srcset),
              e[n].removeAttribute("data-srcset")),
          delete c[n]);
      }
      e.length > 0 &&
        e.forEach((e) => {
          (e.dataset.src || e.dataset.srcset) &&
            (c.push(e.getBoundingClientRect().top + pageYOffset), o());
        }),
        window.addEventListener("scroll", n),
        n();
    })(),
    (function () {
      const e = document.querySelector(".header");
      function t() {
        window.scrollY > 50
          ? e.classList.add("header__fixed")
          : e.classList.remove("header__fixed");
      }
      window.addEventListener("scroll", t), t();
    })(),
    document.querySelectorAll(".accordian__item").forEach((e) => {
      const t = e.querySelector(".accordian__arrow"),
        c = e.querySelector(".accordian__text");
      e.addEventListener("click", () => {
        t.classList.toggle("accordian__arrow--active"),
          c.classList.toggle("accordian__text--active"),
          e.classList.toggle("accordian__item--active");
      });
    }),
    (function () {
      const e = document.querySelectorAll(".anime");
      if (e.length > 0) {
        function t() {
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              o = n.offsetHeight,
              s = c(n).top,
              a = 4;
            let i = window.innerHeight - o / a;
            o > window.innerHeight &&
              (i = window.innerHeight - window.innerHeight / a),
              pageYOffset > s - i && pageYOffset < s + o
                ? n.classList.add("active")
                : n.classList.remove("active");
          }
        }
        function c(e) {
          const t = e.getBoundingClientRect(),
            c = window.pageXOffset || document.documentElement.scrollLeft,
            n = window.pageYOffset || document.documentElement.scrollTop;
          return { top: t.top + n, left: t.left + c };
        }
        window.addEventListener("scroll", t), t();
      }
    })(),
    new Swiper(".review__slider", {
      loop: !0,
      speed: 600,
      pagination: { el: ".review__pagination" },
    });
})();

var hamburger = document.querySelector(".hamburger");

var nav = document.querySelector(".nav");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");

  nav.classList.toggle("is-active");
});
