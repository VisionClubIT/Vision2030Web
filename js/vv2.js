(() => {
    "use strict";
    var e,
      r,
      t,
      o = {
        8989: (e, r, t) => {
          var o;
          t.d(r, { qA: () => s, rx: () => i, oh: () => d, Pm: () => l }),
            (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var a,
            n,
            s = 768,
            i = 783,
            d = 960,
            l = 1260;
          (a =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (a.register(
              s,
              "MEDIUM_BREAKPOINT",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/config/options.js"
            ),
            a.register(
              i,
              "WP_ADMIN_BAR_BREAKPOINT",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/config/options.js"
            ),
            a.register(
              d,
              "DESKTOP_BREAKPOINT",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/config/options.js"
            ),
            a.register(
              l,
              "LARGE_SCREEN_BREAKPOINT",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/config/options.js"
            )),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && n(e);
        },
        9823: (e, r, t) => {
          var o;
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var a,
            n,
            s = {
              desktop_initialized: !1,
              is_desktop: !1,
              is_tablet: !1,
              is_mobile: !1,
              is_desktop_masthead: !1,
              is_tablet_masthead: !1,
              is_mobile_masthead: !1,
              masthead_height: 0,
              masthead_offset: 0,
              mobile_initialized: !1,
              v_height: 0,
              v_width: 0,
              wpadmin_offset: 0,
            };
          (r.Z = s),
            (a =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              a.register(
                s,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/config/state.js"
              ),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && n(e);
        },
        6822: (e, r, t) => {
          var o;
          t.d(r, { kw: () => l }),
            (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var a,
            n,
            s = window.modern_tribe_config,
            i = s.images_url,
            d = s.template_url,
            l = s.hmr_dev || 0,
            c = s.block_theme_service_worker || !1,
            h = s.script_debug || 0;
          (a =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (a.register(
              s,
              "wp",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/config/wp-settings.js"
            ),
            a.register(
              i,
              "IMAGES_URL",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/config/wp-settings.js"
            ),
            a.register(
              d,
              "TEMPLATE_URL",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/config/wp-settings.js"
            ),
            a.register(
              l,
              "HMR_DEV",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/config/wp-settings.js"
            ),
            a.register(
              c,
              "BLOCK_THEME_SERVICE_WORKER",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/config/wp-settings.js"
            ),
            a.register(
              h,
              "SCRIPT_DEBUG",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/config/wp-settings.js"
            )),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && n(e);
        },
        1755: (e, r, t) => {
          t.d(r, { Z: () => d });
          var o,
            a = t(3038),
            n = t.n(a);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          var s, i;
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          function d() {
            var e = 1,
              r = "an-on-viewport-full",
              t = 0.3,
              o = "an-on-viewport-mid",
              a = [0, t, e],
              s = "an-will-animate",
              i = [
                ".c-block.b-herosplit",
                ".c-block--width-grid:not(.c-block--layout-center) .b-timeline__container",
                ".b-featured-stories__slider",
              ].join(", "),
              d = [
                ".c-block:not(.list_layout) .g-3-up > *",
                ".c-block:not(.list_layout) .g-2-up > *",
                ".b-timeline__container > *",
                ".b-link-list__container > *",
                ".b-stats__list .b-stats__list-item",
                ".b-interstitial__container",
                ".b-media-text .b-media-text__media",
                ".b-media-text .b-media-text__content",
                ".c-quote > *",
              ].join(", "),
              l = [].join(", "),
              c = new IntersectionObserver(
                function (a) {
                  a.forEach(function (a) {
                    a.intersectionRatio > 0
                      ? (a.target.classList.add("an-on-viewport"),
                        a.target.classList.add("an-was-on-viewport"),
                        a.intersectionRatio === e
                          ? a.target.classList.add(r)
                          : a.intersectionRatio >= t && a.target.classList.add(o))
                      : (a.target.classList.remove("an-on-viewport"),
                        a.target.classList.remove(r),
                        a.target.classList.remove(o));
                  });
                },
                { threshold: a, rootMargin: "30px" }
              );
            [
              [i, []],
              [d, [s]],
              [l, [s, "an-will-animate--left"]],
            ].forEach(function (e) {
              var r = n()(e, 2),
                t = r[0],
                o = r[1];
              t &&
                document.querySelectorAll(t).forEach(function (e) {
                  e.closest(".no-animate") ||
                    (o.forEach(function (r) {
                      return e.classList.add(r);
                    }),
                    c.observe(e));
                });
            });
          }
          (s =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (s.register(
              ".no-animate",
              "NO_ANIMATE_SELECTOR",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/animations-on-viewport.js"
            ),
            s.register(
              d,
              "animationsOnViewport",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/animations-on-viewport.js"
            )),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && i(e);
        },
        9870: (e, r, t) => {
          var o,
            a = t(3075),
            n = t(3579),
            s = t(2422),
            i = t(8606),
            d = t(1814),
            l = t(5393),
            c = t(4929),
            h = t(6192),
            u = t(4828),
            p = t(8743),
            f = t(1006),
            v = t(9347),
            g = t(8202),
            m = t(8720),
            b = t(6083),
            w = t(9051),
            j = t(3479),
            L = t(1442),
            y = t(7371);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var k,
            H,
            G = {
              masthead: a.v$("site-header")[0],
              navigation: a.v$("site-nav")[0],
              searchFormLanding: a.v$("landing-search-form")[0],
              follower: a.v$("follower")[0],
              secondaryNavigation: a.v$("secondary-nav")[0],
              secondaryNavigationMobile: a.v$("secondary-nav-mobile")[0],
              inFocusLoop: a.v$("in-focus-loop")[0],
              searchResults: a.v$("gsc-wrapper")[0],
              categoryScrollTo: a.v$("category-filter")[0],
            },
            _ = function () {
              (0, s.Z)(),
                (0, b.Z)(),
                (0, w.Z)(),
                (0, n.Z)(),
                (0, i.Z)(),
                (0, d.Z)(),
                (0, l.Z)(),
                (0, c.Z)(),
                (0, h.Z)(),
                (0, u.Z)(),
                (0, p.Z)(),
                (0, f.Z)(),
                (0, v.Z)(),
                (0, g.Z)(),
                (0, m.Z)(),
                (0, j.default)(),
                (0, L.default)(),
                (0, y.Z)(),
                G.masthead &&
                  Promise.all([t.e(687), t.e(1)])
                    .then(t.bind(t, 4761))
                    .then(function (e) {
                      e.default();
                    }),
                G.navigation &&
                  Promise.all([t.e(736), t.e(687), t.e(584)])
                    .then(t.bind(t, 6313))
                    .then(function (e) {
                      e.default();
                    }),
                G.searchFormLanding &&
                  Promise.resolve()
                    .then(t.bind(t, 3479))
                    .then(function (e) {
                      e.default();
                    }),
                G.follower &&
                  t
                    .e(427)
                    .then(t.bind(t, 9740))
                    .then(function (e) {
                      e.default();
                    }),
                G.inFocusLoop &&
                  Promise.all([t.e(736), t.e(869)])
                    .then(t.bind(t, 8806))
                    .then(function (e) {
                      e.default();
                    }),
                (G.secondaryNavigation || G.secondaryNavigationMobile) &&
                  t
                    .e(421)
                    .then(t.bind(t, 2951))
                    .then(function (e) {
                      e.default();
                    }),
                G.searchResults &&
                  Promise.resolve()
                    .then(t.bind(t, 1442))
                    .then(function (e) {
                      e.default();
                    }),
                G.categoryScrollTo &&
                  t
                    .e(293)
                    .then(t.bind(t, 8644))
                    .then(function (e) {
                      e.default();
                    });
            },
            E = _;
          (r.Z = E),
            (k =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (k.register(
                G,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/components.js"
              ),
              k.register(
                _,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/components.js"
              ),
              k.register(
                E,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/components.js"
              )),
            (H =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && H(e);
        },
        9742: (e, r, t) => {
          var o,
            a = t(13);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/integrations.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/integrations.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        6190: (e, r, t) => {
          var o;
          t(7090), t(5507), t(1770), t(3501), t(9145);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var a,
            n,
            s = function () {},
            i = s;
          (r.Z = i),
            (a =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (a.register(
                s,
                "plugins",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/plugins.js"
              ),
              a.register(
                i,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/plugins.js"
              )),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && n(e);
        },
        8311: (e, r, t) => {
          t.d(r, { Z: () => l });
          var o,
            a = t(3075);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          var n, s;
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          function i() {
            if (
              window.location !== window.parent.location &&
              (0, a.v$)("program-browser").length > 0
            ) {
              document.querySelector(".site-header").remove(),
                document.querySelector(".site-footer").remove(),
                document.body.classList.add("program-browser-loop-detail"),
                Array.from(document.querySelectorAll("a")).map(function (e) {
                  return e.setAttribute("target", "_parent");
                }),
                (document.querySelector("html").style.height = "100%"),
                document
                  .querySelector("html")
                  .style.setProperty("margin-top", "0px", "important"),
                (0, a.v$)("program-browser-loop-detail-related-programs")[0] &&
                  document.body.classList.add(
                    "program-browser-loop-detail--with-related-programs-end"
                  );
              var e = document.querySelector(".a11y-skip-link");
              null == e || e.remove();
              for (
                var r = 0,
                  t = Array.from((0, a.v$)("program-browser-single-exclude"));
                r < t.length;
                r++
              ) {
                t[r].remove();
              }
            }
          }
          function d() {
            var e = document.location.hash.replace("#", "");
            if (e) {
              var r = document.querySelector('[data-js-degree="'.concat(e, '"]'));
              if (r) {
                var t,
                  o = r.closest(".c-accordion__row");
                null == o ||
                  null === (t = o.querySelector("button")) ||
                  void 0 === t ||
                  t.click();
              }
            }
          }
          function l() {
            i(), d();
          }
          (n =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (n.register(
              i,
              "hideElementsOnIframe",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/program-browser-single.js"
            ),
            n.register(
              d,
              "openAccordionIfParam",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/program-browser-single.js"
            ),
            n.register(
              l,
              "programBrowserSingle",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/program-browser-single.js"
            )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        2551: (e, r, t) => {
          var o,
            a = t(3279),
            n = t.n(a),
            s = t(8094),
            i = t(9364),
            d = t(3075),
            l = t(6822),
            c = t(2864),
            h = t(2806),
            u = t(6190),
            p = t(5855),
            f = t(3235),
            v = t(7517),
            g = t(9870),
            m = t(9742),
            b = t(8311),
            w = t(1755);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var j,
            L,
            y = {
              filters: d.v$("filters-app")[0],
              appTooltip: d.v$("app-tooltip")[0],
            },
            k = function () {
              (0, s.on)(window, "resize", n()(c.Z, 200, !1)),
                (0, s.on)(window, "scroll", n()(h.Z, 50, { leading: !0 }));
            },
            H = function () {
              (0, i.Z)(),
                (0, u.Z)(),
                (0, p.Z)(),
                (0, f.Z)(),
                (0, v.Z)(),
                k(),
                (0, g.Z)(),
                (0, m.Z)(),
                (0, b.Z)(),
                (0, w.Z)(),
                y.filters &&
                  !l.kw &&
                  Promise.all([t.e(736), t.e(907), t.e(596)]).then(
                    t.bind(t, 7286)
                  ),
                y.appTooltip &&
                  !l.kw &&
                  Promise.all([t.e(736), t.e(907), t.e(207)]).then(
                    t.bind(t, 2667)
                  );
            },
            G = function () {
              (0, s.C)(H);
            },
            _ = G;
          (r.Z = _),
            (j =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (j.register(
                y,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/ready.js"
              ),
              j.register(
                k,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/ready.js"
              ),
              j.register(
                H,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/ready.js"
              ),
              j.register(
                G,
                "domReady",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/ready.js"
              ),
              j.register(
                _,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/ready.js"
              )),
            (L =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && L(e);
        },
        2864: (e, r, t) => {
          var o,
            a = t(8094),
            n = t(7517);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var s,
            i,
            d = function () {
              (0, n.Z)(),
                (0, a.X)({ event: "modern_tribe/resize_executed", native: !1 });
            },
            l = d;
          (r.Z = l),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (s.register(
                d,
                "resize",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/resize.js"
              ),
              s.register(
                l,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/resize.js"
              )),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && i(e);
        },
        2806: (e, r, t) => {
          var o,
            a = t(8094);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = { lastScrollTop: 0 },
            d = function () {
              var e = window.pageYOffset || document.documentElement.scrollTop,
                r = e > i.lastScrollTop ? "down" : "up";
              (i.lastScrollTop = e),
                (0, a.X)({
                  event: "modern_tribe/scroll_executed",
                  native: !1,
                  data: { dir: r },
                });
            },
            l = d;
          (r.Z = l),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "state",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/scroll.js"
              ),
              n.register(
                d,
                "scroll",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/scroll.js"
              ),
              n.register(
                l,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/scroll.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        7517: (e, r, t) => {
          var o,
            a = t(6133),
            n = t.n(a),
            s = t(9823),
            i = t(8989);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var d,
            l,
            c = function () {
              (s.Z.v_height = n().viewportH()),
                (s.Z.v_width = n().viewportW()),
                s.Z.v_width >= i.oh
                  ? ((s.Z.is_desktop = !0),
                    (s.Z.is_tablet = !1),
                    (s.Z.is_mobile = !1))
                  : s.Z.v_width >= i.qA
                  ? ((s.Z.is_desktop = !1),
                    (s.Z.is_tablet = !0),
                    (s.Z.is_mobile = !1))
                  : ((s.Z.is_desktop = !1),
                    (s.Z.is_tablet = !1),
                    (s.Z.is_mobile = !0));
            },
            h = c;
          (r.Z = h),
            (d =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (d.register(
                c,
                "viewportDims",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/viewport-dims.js"
              ),
              d.register(
                h,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/theme/core/viewport-dims.js"
              )),
            (l =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && l(e);
        },
        673: (e, r, t) => {
          var o = t(2551);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          (0, o.Z)();
        },
        8055: (e, r, t) => {
          var o;
          t.d(r, { jB: () => i, kz: () => l }),
            (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var a,
            n,
            s = function (e, r) {
              e.setAttribute("aria-expanded", "true"),
                e.setAttribute("aria-selected", "true"),
                r.setAttribute("aria-hidden", "false");
            },
            i = function (e, r) {
              e.setAttribute("aria-expanded", "true"),
                r.setAttribute("aria-hidden", "false");
            },
            d = function (e, r) {
              e.setAttribute("aria-expanded", "false"),
                e.setAttribute("aria-selected", "false"),
                r.setAttribute("aria-hidden", "true");
            },
            l = function (e, r) {
              e.setAttribute("aria-expanded", "false"),
                r.setAttribute("aria-hidden", "true");
            };
          (a =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (a.register(
              s,
              "setAccActiveAttributes",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/accessibility.js"
            ),
            a.register(
              i,
              "setAccActiveAttributesAccordion",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/accessibility.js"
            ),
            a.register(
              d,
              "setAccInactiveAttributes",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/accessibility.js"
            ),
            a.register(
              l,
              "setAccInactiveAttributesAccordion",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/accessibility.js"
            )),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && n(e);
        },
        9364: (e, r, t) => {
          var o,
            a = t(3451);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              var e = a.iC(),
                r = document.body.classList;
              e.android ? r.add("device-android") : e.ios && r.add("device-ios"),
                e.edge
                  ? r.add("browser-edge")
                  : e.chrome
                  ? r.add("browser-chrome")
                  : e.firefox
                  ? r.add("browser-firefox")
                  : e.ie
                  ? r.add("browser-ie")
                  : e.opera
                  ? r.add("browser-opera")
                  : e.safari && r.add("browser-safari");
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "applyBrowserClasses",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/apply-browser-classes.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/apply-browser-classes.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        2095: (e, r, t) => {
          var o;
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var a,
            n,
            s = function (e) {
              var r = e.clientWidth,
                t = e;
              (t.style.visibility = "hidden"),
                (t.style.height = "auto"),
                (t.style.maxHeight = "none"),
                (t.style.position = "fixed"),
                (t.style.width = "".concat(r, "px"));
              var o = t.offsetHeight;
              return (
                (t.style.visibility = ""),
                (t.style.height = ""),
                (t.style.maxHeight = ""),
                (t.style.width = ""),
                (t.style.position = ""),
                (t.style.zIndex = ""),
                o
              );
            },
            i = s;
          (r.Z = i),
            (a =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (a.register(
                s,
                "getHiddenHeight",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/get-hidden-height.js"
              ),
              a.register(
                i,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/get-hidden-height.js"
              )),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && n(e);
        },
        786: (e, r, t) => {
          var o,
            a = t(7154),
            n = t.n(a),
            s = t(4486),
            i = t.n(s);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var d,
            l,
            c = function (e) {
              var r = n()(
                {
                  event: null,
                  url: "",
                  center: !0,
                  name: "_blank",
                  specs: {
                    menubar: 0,
                    scrollbars: 0,
                    status: 1,
                    titlebar: 1,
                    toolbar: 0,
                    top: 100,
                    left: 100,
                    width: 500,
                    height: 300,
                  },
                },
                e
              );
              if (
                (r.event &&
                  (r.event.preventDefault(),
                  r.url.length || (r.url = r.event.currentTarget.href)),
                r.url.length)
              ) {
                r.center &&
                  ((r.specs.top = screen.height / 2 - r.specs.height / 2),
                  (r.specs.left = screen.width / 2 - r.specs.width / 2));
                var t = [];
                i()(r.specs, function (e, r) {
                  var o = "".concat(r, "=").concat(e);
                  t.push(o);
                }),
                  window.open(r.url, r.name, t.join());
              }
            },
            h = c;
          (r.Z = h),
            (d =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (d.register(
                c,
                "popup",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/popup.js"
              ),
              d.register(
                h,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/popup.js"
              )),
            (l =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && l(e);
        },
        7364: (e, r, t) => {
          var o,
            a = t(7154),
            n = t.n(a);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var s,
            i,
            d = function (e) {
              var r,
                t,
                o = n()(
                  {
                    auto: !1,
                    autoCoefficient: 2.5,
                    afterScroll: function () {},
                    duration: 1e3,
                    easing: "linear",
                    offset: 0,
                    $target: $(),
                    $scrollContainer: $("html, body"),
                  },
                  e
                );
              o.$target.length &&
                ((r = o.$target.offset().top + o.offset),
                o.auto &&
                  ((t = $("html").scrollTop()),
                  (o.duration =
                    r > t
                      ? (r - t) / o.autoCoefficient
                      : (t - r) / o.autoCoefficient)),
                o.$scrollContainer.animate(
                  { scrollTop: r },
                  o.duration,
                  o.easing,
                  o.afterScroll
                ));
            },
            l = d;
          (r.Z = l),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (s.register(
                d,
                "scrollTo",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/scroll-to.js"
              ),
              s.register(
                l,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/scroll-to.js"
              )),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && i(e);
        },
        3235: (e, r, t) => {
          var o,
            a = t(3075),
            n = t(3451);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var s,
            i,
            d = function (e) {
              return (
                a.wB(
                  e,
                  "button:enabled, input:enabled, textarea:enabled, select:enabled, a[href], area[href], object, [tabindex]"
                ) && !n.GF(e)
              );
            },
            l = function e(r) {
              r.removeAttribute("tabindex"),
                r.removeEventListener("blur", e),
                r.removeEventListener("focusout", e);
            },
            c = function (e) {
              var r = document.getElementById(e);
              r &&
                (d(r) ||
                  (r.setAttribute("tabindex", "-1"),
                  r.addEventListener("blur", function () {
                    return l(r);
                  }),
                  r.addEventListener("focusout", function () {
                    return l(r);
                  })),
                r.focus());
            },
            h = function () {
              c(window.location.hash.substring(1));
            },
            u = function () {
              window.addEventListener("hashchange", h, !1),
                document.addEventListener(
                  "modern_tribe/trigger_smooth_anchor",
                  h
                );
            },
            p = function () {
              window.location.hash && c(window.location.hash.substring(1)), u();
            },
            f = p;
          (r.Z = f),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (s.register(
                d,
                "elementIsFocusable",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/skip-links.js"
              ),
              s.register(
                l,
                "handleBlurFocusOut",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/skip-links.js"
              ),
              s.register(
                c,
                "handleElementFocus",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/skip-links.js"
              ),
              s.register(
                h,
                "handleHashChange",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/skip-links.js"
              ),
              s.register(
                u,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/skip-links.js"
              ),
              s.register(
                p,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/skip-links.js"
              ),
              s.register(
                f,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/skip-links.js"
              )),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && i(e);
        },
        5225: (e, r, t) => {
          t.d(r, { z: () => f, up: () => v });
          var o,
            a = t(8066),
            n = t.n(a),
            s = t(2095);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var i,
            d,
            l = { timeoutDelay: 25 },
            c = [],
            h = function (e) {
              return e < 0.2074
                ? -3.8716 * e * e * e + 6.137 * e * e + 0.4 * e
                : 1.1317 * (e - 1) * (e - 1) * (e - 1) -
                    0.1975 * (e - 1) * (e - 1) +
                    1;
            },
            u = function (e) {
              c[e] || (c[e] = { up: null, down: null });
            },
            p = function (e) {
              c[e].up && (window.cancelAnimationFrame(c[e].up), (c[e].up = null)),
                c[e].down &&
                  (window.cancelAnimationFrame(c[e].down), (c[e].down = null));
            },
            f = function (e, r) {
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 400,
                o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : null,
                a = e.offsetHeight,
                i = (0, s.Z)(e),
                d = null;
              (e.style.maxHeight = "0"), u(r), p(r);
              var f = function n(s) {
                d || (d = s);
                var l = s - d,
                  u = h(l / t) * (i - a) + a;
                (e.style.maxHeight = "".concat(u, "px")),
                  l < t
                    ? (c[r].down = window.requestAnimationFrame(n))
                    : ((c[r].down = null),
                      (e.style.maxHeight = "none"),
                      o && o());
              };
              n()(function () {
                c[r].down = window.requestAnimationFrame(f);
              }, l.timeoutDelay);
            },
            v = function (e, r) {
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 400,
                o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : null,
                a = e.offsetHeight,
                s = 0,
                i = null;
              (e.style.maxHeight = "".concat(a, "px")), u(r), p(r);
              var d = function n(d) {
                i || (i = d);
                var l = d - i,
                  u = h(l / t) * (s - a) + a;
                (e.style.maxHeight = "".concat(u, "px")),
                  l < t
                    ? (c[r].up = window.requestAnimationFrame(n))
                    : ((c[r].up = null), (e.style.maxHeight = "0"), o && o());
              };
              n()(function () {
                c[r].up = window.requestAnimationFrame(d);
              }, l.timeoutDelay);
            };
          (i =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (i.register(
              l,
              "options",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/slide.js"
            ),
            i.register(
              c,
              "requestIds",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/slide.js"
            ),
            i.register(
              h,
              "easeFxn",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/slide.js"
            ),
            i.register(
              u,
              "checkRequestIds",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/slide.js"
            ),
            i.register(
              p,
              "cancelAnimations",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/slide.js"
            ),
            i.register(
              f,
              "down",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/slide.js"
            ),
            i.register(
              v,
              "up",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/slide.js"
            )),
            (d =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && d(e);
        },
        5855: (e, r, t) => {
          var o,
            a = t(3075),
            n = t(7364),
            s = t(9823),
            i = t(8094);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var d,
            l,
            c = function (e) {
              var r = e.currentTarget,
                t = r.hash.substring(1),
                o = document.getElementById(t);
              if (o) {
                e.preventDefault(), history.pushState(null, null, e.target.hash);
                var a =
                  o.offsetTop > r.offsetTop
                    ? s.Z.wpadmin_offset
                    : s.Z.masthead_height + s.Z.wpadmin_offset;
                (0, n.Z)({
                  offset: -a,
                  duration: 300,
                  $target: $(o),
                  afterScroll: function () {
                    (0, i.X)({
                      event: "modern_tribe/trigger_smooth_anchor",
                      native: !1,
                    });
                  },
                });
              }
            },
            h = function () {
              var e = a.aC(
                document.querySelectorAll('a[href^="#"]:not([href="#"])')
              );
              e.length &&
                e.forEach(function (e) {
                  return e.addEventListener("click", c);
                });
            },
            u = function () {
              h();
            },
            p = u;
          (r.Z = p),
            (d =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (d.register(
                c,
                "handleAnchorClick",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/smooth-anchors.js"
              ),
              d.register(
                h,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/smooth-anchors.js"
              ),
              d.register(
                u,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/smooth-anchors.js"
              ),
              d.register(
                p,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/smooth-anchors.js"
              )),
            (l =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && l(e);
        },
        5735: (e, r, t) => {
          var o;
          t.d(r, { w: () => s, t: () => i }),
            (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var a,
            n,
            s = function () {
              return window.pageYOffset || document.documentElement.scrollTop;
            },
            i = function () {
              return window.pageXOffset || document.documentElement.scrollLeft;
            };
          (a =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (a.register(
              s,
              "top",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/win-position.js"
            ),
            a.register(
              i,
              "left",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/dom/win-position.js"
            )),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && n(e);
        },
        8094: (e, r, t) => {
          t.d(r, { on: () => d, C: () => l, X: () => c });
          var o,
            a = t(8583),
            n = t.n(a);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var s,
            i,
            d = function (e, r, t) {
              e.addEventListener
                ? e.addEventListener(r, t)
                : e.attachEvent("on".concat(r), function () {
                    t.call(e);
                  });
            },
            l = function (e) {
              "loading" !== document.readyState
                ? e()
                : document.addEventListener
                ? document.addEventListener("DOMContentLoaded", e)
                : document.attachEvent("onreadystatechange", function () {
                    "loading" !== document.readyState && e();
                  });
            },
            c = function (e) {
              var r,
                t = n()({ data: {}, el: document, event: "", native: !0 }, e);
              if (t.native)
                (r = document.createEvent("HTMLEvents")).initEvent(
                  t.event,
                  !0,
                  !1
                );
              else
                try {
                  r = new CustomEvent(t.event, { detail: t.data });
                } catch (e) {
                  (r = document.createEvent("CustomEvent")).initCustomEvent(
                    t.event,
                    !0,
                    !0,
                    t.data
                  );
                }
              t.el.dispatchEvent(r);
            };
          (s =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (s.register(
              d,
              "on",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/events.js"
            ),
            s.register(
              l,
              "ready",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/events.js"
            ),
            s.register(
              c,
              "trigger",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/events.js"
            )),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && i(e);
        },
        3451: (e, r, t) => {
          var o;
          t.d(r, { sO: () => a, iC: () => g, GF: () => j }),
            (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var a = function (e) {
              try {
                JSON.parse(e);
              } catch (e) {
                return !1;
              }
              return !0;
            },
            n = function () {
              var e,
                r = !1;
              try {
                return (
                  (e = new Date()),
                  localStorage.setItem(e, e.toString()),
                  (r = localStorage.getItem(e) === e.toString()),
                  localStorage.removeItem(e),
                  r
                );
              } catch (e) {
                return r;
              }
            },
            s = /(android)/i.test(navigator.userAgent),
            i = !!window.chrome,
            d = "undefined" != typeof InstallTrigger,
            l = document.documentMode || !1,
            c = !l && !!window.StyleMedia,
            h = !!navigator.userAgent.match(/(iPod|iPhone|iPad)/i),
            u = !!navigator.userAgent.match(/(iPod|iPhone)/i),
            p = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
            f =
              Object.prototype.toString
                .call(window.HTMLElement)
                .indexOf("Constructor") > 0 ||
              (!i && !p && "undefined" !== window.webkitAudioContext),
            v = navigator.platform;
          function g() {
            return {
              android: s,
              chrome: i,
              edge: c,
              firefox: d,
              ie: l,
              ios: h,
              iosMobile: u,
              opera: p,
              safari: f,
              os: v,
            };
          }
          var m,
            b,
            w = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            },
            j = function (e) {
              return !w(e);
            };
          (m =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (m.register(
              a,
              "isJson",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tests.js"
            ),
            m.register(
              n,
              "canLocalStore",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tests.js"
            ),
            m.register(
              s,
              "android",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tests.js"
            ),
            m.register(
              i,
              "chrome",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tests.js"
            ),
            m.register(
              d,
              "firefox",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tests.js"
            ),
            m.register(
              l,
              "ie",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tests.js"
            ),
            m.register(
              c,
              "edge",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tests.js"
            ),
            m.register(
              h,
              "ios",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tests.js"
            ),
            m.register(
              u,
              "iosMobile",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tests.js"
            ),
            m.register(
              p,
              "opera",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tests.js"
            ),
            m.register(
              f,
              "safari",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tests.js"
            ),
            m.register(
              v,
              "os",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tests.js"
            ),
            m.register(
              g,
              "browserTests",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tests.js"
            ),
            m.register(
              w,
              "isElementVisible",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tests.js"
            ),
            m.register(
              j,
              "isElementHidden",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tests.js"
            )),
            (b =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && b(e);
        },
        3075: (e, r, t) => {
          var o;
          t.d(r, {
            cn: () => s,
            pv: () => d,
            IV: () => l,
            og: () => c,
            aC: () => p,
            v$: () => f,
            oq: () => v,
            wB: () => g,
            Vt: () => b,
            TE: () => w,
            rP: () => j,
          }),
            (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var a,
            n,
            s = function (e) {
              var r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                t = e;
              return !!t && (t.classList.add(r), t);
            },
            i = function (e) {
              for (var r = [], t = e.children.length; t--; )
                8 !== e.children[t].nodeType && r.unshift(e.children[t]);
              return r;
            },
            d = function (e) {
              var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
              return !!e && e.classList.contains(r);
            },
            l = function (e, r) {
              var t = e;
              return !!t && (t.classList.remove(r), t);
            },
            c = function (e, r) {
              var t = e;
              return !!t && (d(e, r) ? l(e, r) : s(e, r), t);
            },
            h = function (e) {
              for (
                var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  t = 0;
                t < e.classList.length;
                t++
              )
                -1 !== e.classList.item(t).indexOf(r) &&
                  e.classList.remove(e.classList.item(t));
            },
            u = function (e) {
              var r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "",
                o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : "";
              return r.some(function (r) {
                return e.classList.contains("".concat(t).concat(r).concat(o));
              });
            },
            p = function () {
              for (
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  r = [],
                  t = e.length;
                t--;
                r.unshift(e[t])
              );
              return r;
            },
            f = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                r =
                  arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : document,
                o =
                  arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                a = o ? e : '[data-js="'.concat(e, '"]'),
                n = t.querySelectorAll(a);
              return r && (n = p(n)), n;
            },
            v = function (e, r) {
              var t, o;
              for (
                [
                  "matches",
                  "webkitMatchesSelector",
                  "mozMatchesSelector",
                  "msMatchesSelector",
                  "oMatchesSelector",
                ].some(function (e) {
                  return "function" == typeof document.body[e] && ((t = e), !0);
                });
                e;
  
              ) {
                if ((o = e.parentElement) && o[t](r)) return o;
                e = o;
              }
              return null;
            },
            g = function (e, r) {
              return (
                e.matches ||
                e.matchesSelector ||
                e.msMatchesSelector ||
                e.mozMatchesSelector ||
                e.webkitMatchesSelector ||
                e.oMatchesSelector
              ).call(e, r);
            },
            m = function (e, r) {
              r.parentNode.insertBefore(e, r.nextElementSibling);
            },
            b = function (e, r) {
              r.parentNode.insertBefore(e, r);
            },
            w = function (e) {
              var r = document.createElement("input");
              (r.type = "text"),
                (r.value = e),
                document.body.appendChild(r),
                r.select(),
                r.setSelectionRange(0, 999999),
                document.execCommand("copy"),
                r.remove();
            },
            j = function () {
              return window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches;
            };
          (a =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (a.register(
              s,
              "addClass",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tools.js"
            ),
            a.register(
              i,
              "getChildren",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tools.js"
            ),
            a.register(
              d,
              "hasClass",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tools.js"
            ),
            a.register(
              l,
              "removeClass",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tools.js"
            ),
            a.register(
              c,
              "toggleClass",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tools.js"
            ),
            a.register(
              h,
              "removeClassThatContains",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tools.js"
            ),
            a.register(
              u,
              "hasClassFromArray",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tools.js"
            ),
            a.register(
              p,
              "convertElements",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tools.js"
            ),
            a.register(
              f,
              "getNodes",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tools.js"
            ),
            a.register(
              v,
              "closest",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tools.js"
            ),
            a.register(
              g,
              "matches",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tools.js"
            ),
            a.register(
              m,
              "insertAfter",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tools.js"
            ),
            a.register(
              b,
              "insertBefore",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tools.js"
            ),
            a.register(
              w,
              "copyTextToClipboard",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tools.js"
            ),
            a.register(
              j,
              "isReducedMotion",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/assets/js/src/utils/tools.js"
            )),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && n(e);
        },
        3579: (e, r, t) => {
          var o,
            a = t(1484);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/accordion/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/accordion/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        1484: (e, r, t) => {
          var o,
            a = t(8066),
            n = t.n(a),
            s = t(9438),
            i = t.n(s),
            d = t(8055),
            l = t(5225),
            c = t(3075),
            h = t(8094);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var u,
            p,
            f = c.v$("site-wrap")[0],
            v = document.getElementById("panel-navigation"),
            g = { speed: 300 },
            m = function () {
              (g.offset = -20),
                c.pv(document.body, "admin-bar") && (g.offset = -60),
                v && (g.offset = -10 - v.offsetHeight);
            },
            b = function (e, r) {
              var t = c.oq(e, ".c-accordion__row");
              c.cn(t, "active"),
                (0, d.jB)(e, r),
                r.removeAttribute("hidden"),
                m(),
                l.z(r, r.id, g.speed);
            },
            w = function (e, r) {
              var t = c.oq(e, ".c-accordion__row");
              c.IV(t, "active"),
                (0, d.kz)(e, r),
                l.up(r, r.id, g.speed),
                n()(function () {
                  r.setAttribute("hidden", "true"),
                    h.X({ event: "modern_tribe/accordion_animated", native: !1 });
                }, g.speed);
            },
            j = function (e) {
              var r = document.querySelectorAll(
                '.site-panel--accordion[class*="collection-preview__active"]'
              )[0];
              if (r) {
                var t = c.v$(
                  '.c-accordion__header[data-index="'.concat(
                    e.detail.rowIndex,
                    '"]'
                  ),
                  !1,
                  r,
                  !0
                )[0];
                b(t, t.nextElementSibling);
              }
            },
            L = function (e) {
              var r = e.delegateTarget,
                t = c.oq(r, ".c-accordion__row"),
                o = t.querySelector(".c-accordion__content");
              c.pv(t, "active") ? w(r, o) : b(r, o);
            },
            y = function () {
              i()(f, ".c-accordion__header", "click", L),
                document.addEventListener(
                  "modular_content/repeater_row_activated",
                  j
                ),
                document.addEventListener(
                  "modular_content/repeater_row_added",
                  j
                );
            },
            k = function () {
              m(), y();
            },
            H = k;
          (r.Z = H),
            (u =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (u.register(
                f,
                "siteWrap",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/accordion/js/accordion.js"
              ),
              u.register(
                v,
                "pn",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/accordion/js/accordion.js"
              ),
              u.register(
                g,
                "options",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/accordion/js/accordion.js"
              ),
              u.register(
                m,
                "setOffset",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/accordion/js/accordion.js"
              ),
              u.register(
                b,
                "openAccordion",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/accordion/js/accordion.js"
              ),
              u.register(
                w,
                "closeAccordion",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/accordion/js/accordion.js"
              ),
              u.register(
                j,
                "handlePanelEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/accordion/js/accordion.js"
              ),
              u.register(
                L,
                "toggleItem",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/accordion/js/accordion.js"
              ),
              u.register(
                y,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/accordion/js/accordion.js"
              ),
              u.register(
                k,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/accordion/js/accordion.js"
              ),
              u.register(
                H,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/accordion/js/accordion.js"
              )),
            (p =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && p(e);
        },
        1006: (e, r, t) => {
          var o,
            a = t(776);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/card_grid/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/card_grid/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        776: (e, r, t) => {
          var o,
            a = t(8433),
            n = t(3075);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var s,
            i,
            d = n.v$("site-wrap")[0],
            l = { container: n.v$(".b-card-grid.query_type_auto", !0, d, !0) },
            c = function () {
              l.container.length &&
                l.container.forEach(function (e) {
                  var r = n.v$(".c-card__description p", !0, e, !0);
                  (0, a.Z)(r, 140, { character: "..." });
                });
            },
            h = function () {
              l.container && c();
            },
            u = h;
          (r.Z = u),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (s.register(
                d,
                "siteWrap",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/card_grid/js/truncate-text.js"
              ),
              s.register(
                l,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/card_grid/js/truncate-text.js"
              ),
              s.register(
                c,
                "shaveExcerpt",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/card_grid/js/truncate-text.js"
              ),
              s.register(
                h,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/card_grid/js/truncate-text.js"
              ),
              s.register(
                u,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/card_grid/js/truncate-text.js"
              )),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && i(e);
        },
        7371: (e, r, t) => {
          var o,
            a = t(2987);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        2987: (e, r, t) => {
          var o;
          t(9438);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var a = "b-featured-stories__mouse-left",
            n = "b-featured-stories__mouse-right",
            s = '[data-js="b-featured-stories-cta"]',
            i = {
              swiperDomList: document.querySelectorAll('[data-js="c-slider"]'),
            };
          function d(e, r, t) {
            return function (o) {
              var a = !!o.target.closest("button"),
                n = !!o.target.closest("a");
              if (["BUTTON", "A"].includes(o.target.tagName) || a || n)
                return null;
              if (o.x < e.el.clientWidth / 2) {
                var s = 0 === e.activeIndex;
                t(e, s);
              } else {
                var i = e.activeIndex === e.slides.length - 1;
                r(e, i);
              }
            };
          }
          function l(e) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            e.el.classList.remove(n), e.el.classList.add(a);
            var t = e.isDarkTheme ? "arrow-left-dark" : "arrow-left";
            e.el.style.cursor = r
              ? "default"
              : "url(/wp-content/themes/core/assets/img/theme/featured-stories/".concat(
                  t,
                  ".svg) 30 30, w-resize"
                );
          }
          function c(e) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            e.el.classList.remove(a), e.el.classList.add(n);
            var t = e.isDarkTheme ? "arrow-right-dark" : "arrow-right";
            e.el.style.cursor = r
              ? "default"
              : "url(/wp-content/themes/core/assets/img/theme/featured-stories/".concat(
                  t,
                  ".svg) 30 30, e-resize"
                );
          }
          function h(e) {
            return d(e, c, l);
          }
          function u(e) {
            return d(
              e,
              function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                c(e, t),
                  t ||
                    (e.slideNext(),
                    e.activeIndex >= e.slides.length - 1 &&
                      (e.el.style.cursor = "default"));
              },
              function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                l(e, t),
                  t ||
                    (e.slidePrev(),
                    e.activeIndex <= 0 && (e.el.style.cursor = "default"));
              }
            );
          }
          function p(e) {
            var r = !1,
              t = !1,
              o = !1;
            e.el.addEventListener("keydown", function (a) {
              var n,
                s,
                i =
                  null === (n = document.activeElement) ||
                  void 0 === n ||
                  null === (s = n.classList) ||
                  void 0 === s
                    ? void 0
                    : s.contains("c-tooltip__btn"),
                d = e.slides[e.activeIndex].querySelector(".c-tooltip__btn");
              "Tab" === a.key &&
                (a.shiftKey
                  ? e.activeIndex > 0
                    ? (!d || (d && i)) &&
                      (!o && e.slidePrev(),
                      a.preventDefault(),
                      (r = !0),
                      (t = !0))
                    : e.slideTo(0)
                  : e.activeIndex < e.slides.length - 1
                  ? i ||
                    (!o && e.slideNext(), a.preventDefault(), (r = !0), (t = !1))
                  : e.slideTo(e.slides.length - 1));
            }),
              e.on("slideChangeTransitionStart", function () {
                o = !0;
              }),
              e.on("slideChangeTransitionEnd", function () {
                if (document.activeElement.closest('[data-js="c-slider"]') && r) {
                  var a,
                    n = e.slides[e.activeIndex].querySelector(".c-tooltip__btn");
                  if (n && !t) n.focus();
                  else
                    null === (a = e.slides[e.activeIndex].querySelector(s)) ||
                      void 0 === a ||
                      a.focus();
                }
                (r = !1), (o = !1), (t = !1);
              }),
              (function () {
                var r, t;
                function o(r) {
                  return function () {
                    e.slideTo(r);
                  };
                }
                null === (r = e.slides[0].querySelector(s)) ||
                  void 0 === r ||
                  r.addEventListener("focus", o(0)),
                  null === (t = e.slides[e.slides.length - 1].querySelector(s)) ||
                    void 0 === t ||
                    t.addEventListener("focus", o(e.slides.length - 1));
              })();
          }
          function f(e) {
            function r(e) {
              var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              e.parentElement.children[r].classList.remove(
                "swiper-button-disabled"
              );
            }
            function t(t) {
              "next" === t.target.dataset.swiperDirection
                ? (e.slideNext(),
                  e.activeIndex >= e.slides.length - 1 &&
                    t.target.classList.add("swiper-button-disabled"),
                  r(t.target, 0),
                  t.preventDefault())
                : (e.slidePrev(),
                  e.activeIndex <= 0 &&
                    t.target.classList.add("swiper-button-disabled"),
                  r(t.target, 1),
                  t.preventDefault());
            }
            e.el.parentElement
              .querySelectorAll(".c-slider__button")
              .forEach(function (e) {
                var r = e.cloneNode(!0);
                e.parentNode.replaceChild(r, e), r.addEventListener("click", t);
              });
          }
          function v(e) {
            var r;
            null === (r = e.target.closest(".b-featured-stories__wrapper")) ||
              void 0 === r ||
              r.classList.add("b-featured-stories__wrapper--with-focus");
          }
          function g(e) {
            var r;
            null === (r = e.target.closest(".b-featured-stories__wrapper")) ||
              void 0 === r ||
              r.classList.remove("b-featured-stories__wrapper--with-focus");
          }
          var m,
            b,
            w = function (e) {
              var r = e.swiper;
              (r.isDarkTheme = !!e.closest(".b-featured-stories.t-theme--light")),
                e.addEventListener("mousemove", h(r)),
                e.addEventListener("click", u(r)),
                e.querySelectorAll(s).forEach(function (e) {
                  return e.addEventListener("focus", v);
                }),
                e.querySelectorAll(s).forEach(function (e) {
                  return e.addEventListener("blur", g);
                }),
                p(r),
                f(r),
                setTimeout(function () {
                  return r.update();
                }, 1e3);
            },
            j = function () {
              i.swiperDomList &&
                i.swiperDomList.forEach(function (e) {
                  w(e);
                });
            },
            L = j;
          (r.Z = L),
            (m =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (m.register(
                '[data-js="c-slider"]',
                "TARGET_SWIPERS",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                a,
                "CLASS_MOUSE_LEFT",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                n,
                "CLASS_MOUSE_RIGHT",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                s,
                "CTA_SELECTOR",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                "c-tooltip__btn",
                "MORE_TO_EXPLORE_CLASS",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                ".c-tooltip__btn",
                "MORE_TO_EXPLORE_SELECTOR",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                ".b-featured-stories__wrapper",
                "SLIDE_WRAPPER_SELECTOR",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                "b-featured-stories__wrapper--with-focus",
                "SLIDE_WRAPPER_FOCUS_CLASS",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                i,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                d,
                "createMouseEventHandler",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                l,
                "showMouseLeft",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                c,
                "showMouseRight",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                h,
                "onMouseMoveForSwiper",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                u,
                "onClickForSwiper",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                p,
                "listenTabs",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                f,
                "replaceNavButtons",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                v,
                "onFocusCTA",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                g,
                "onBlurCTA",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                w,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                j,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              ),
              m.register(
                L,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/featured_stories/js/featured-stories.js"
              )),
            (b =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && b(e);
        },
        9347: (e, r, t) => {
          var o,
            a = t(2602),
            n = t(178);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var s,
            i,
            d = function () {
              (0, a.Z)(), (0, n.Z)();
            },
            l = d;
          (r.Z = l),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (s.register(
                d,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/index.js"
              ),
              s.register(
                l,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/index.js"
              )),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && i(e);
        },
        178: (e, r, t) => {
          var o,
            a = t(5541),
            n = t.n(a),
            s = t(3075);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var i,
            d,
            l = { container: s.v$(".b-gallery", !0, document, !0)[0] },
            c = { mobile: !1, offset: 50, live: !1 },
            h = function () {
              (window.wow = new (n().WOW)(c)), window.wow.init();
            },
            u = function () {
              l.container && h();
            },
            p = u;
          (r.Z = p),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                l,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/js/animations.js"
              ),
              i.register(
                c,
                "options",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/js/animations.js"
              ),
              i.register(
                h,
                "initWow",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/js/animations.js"
              ),
              i.register(
                u,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/js/animations.js"
              ),
              i.register(
                p,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/js/animations.js"
              )),
            (d =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && d(e);
        },
        2602: (e, r, t) => {
          var o,
            a = t(7154),
            n = t.n(a),
            s = t(9899),
            i = t.n(s),
            d = t(3075),
            l = t(3451),
            c = t(8094);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var h,
            u,
            p = {
              containers: d.v$('[data-js="dialog-trigger"]', !0, document, !0),
            },
            f = { dialogs: {} },
            v = {
              dialog: {
                appendTarget: '[data-js="site-wrap"]',
                wrapperClasses: "c-dialog",
                closeButtonClasses: "icon icon-close c-dialog__close-button",
              },
            },
            g = function (e) {
              d.v$("c-slider", !1, e)[0] &&
                (0, c.X)({
                  event: "modern_tribe/component_dialog_rendered",
                  native: !1,
                });
            },
            m = function (e) {
              e.on("render", g),
                e.on("hide", function () {
                  var e = document.body.classList.contains("site-scrolling--up");
                  (0,
                  c.X)({ event: "modern_tribe/masthead_scrolled_up_kick", native: !1, data: { stuck: e } });
                });
            },
            b = function (e) {
              var r = v.dialog;
              return (
                e.dataset.dialogOptions &&
                  l.sO(e.dataset.dialogOptions) &&
                  n()(r, JSON.parse(e.dataset.dialogOptions)),
                r
              );
            },
            w = function () {
              p.containers.forEach(function (e) {
                var r = e.getAttribute("data-content");
                (v.dialog.trigger =
                  '[data-js="dialog-trigger"][data-content="'.concat(r, '"]')),
                  (f.dialogs[r] = new (i())(b(e))),
                  m(f.dialogs[r]);
              });
            },
            j = function () {
              p.containers.length && (g(), w());
            },
            L = j;
          (r.Z = L),
            (h =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (h.register(
                p,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/js/dialog.js"
              ),
              h.register(
                f,
                "instances",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/js/dialog.js"
              ),
              h.register(
                v,
                "options",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/js/dialog.js"
              ),
              h.register(
                g,
                "initSwiper",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/js/dialog.js"
              ),
              h.register(
                m,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/js/dialog.js"
              ),
              h.register(
                b,
                "getOptionsDialog",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/js/dialog.js"
              ),
              h.register(
                w,
                "initDialogs",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/js/dialog.js"
              ),
              h.register(
                j,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/js/dialog.js"
              ),
              h.register(
                L,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/gallery/js/dialog.js"
              )),
            (u =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && u(e);
        },
        8743: (e, r, t) => {
          var o,
            a = t(8760);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        8760: (e, r, t) => {
          t.d(r, { d: () => h });
          var o,
            a = t(9438),
            n = t.n(a),
            s = t(3075);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var i,
            d,
            l = s.v$("site-wrap")[0],
            c = {
              container: s.v$(".b-hero .b-hero__bg-video", !1, l, !0)[0],
              videos: s.v$(".b-hero video.b-hero__bg-video", !1, l, !0),
            },
            h = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = e.videos,
                t = void 0 === r ? [] : r,
                o = e.parentSelector,
                a = void 0 === o ? ".b-hero" : o,
                n = e.buttonSelector,
                i = void 0 === n ? '[data-js="video-trigger"]' : n,
                d = e.pauseClass,
                l = void 0 === d ? "video-paused" : d;
              t.forEach(function (e) {
                var r = s.oq(e, a),
                  t = s.v$(i, !1, r, !0)[0];
                s.rP() || e.play(),
                  e.paused
                    ? (r.classList.add(l),
                      null == t || t.setAttribute("aria-label", "Play the video"))
                    : (r.classList.remove(l),
                      null == t ||
                        t.setAttribute("aria-label", "Pause the video"));
              });
            },
            u = function (e) {
              var r = e.delegateTarget,
                t = s.oq(r, ".b-hero"),
                o = s.v$(".b-hero__bg-video", !1, t, !0)[0];
              o &&
                (o.paused
                  ? (t.classList.remove("video-paused"),
                    r.setAttribute("aria-label", "Pause the video"),
                    o.play())
                  : (t.classList.add("video-paused"),
                    r.setAttribute("aria-label", "Play the video"),
                    o.pause()));
            },
            p = function () {
              n()(l, '[data-js="video-trigger"]', "click", u);
            },
            f = function () {
              c.container && (p(), h({ videos: c.videos }));
            },
            v = f;
          (r.Z = v),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                l,
                "siteWrap",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero/js/video.js"
              ),
              i.register(
                c,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero/js/video.js"
              ),
              i.register(
                "video-paused",
                "PAUSE_CLASS",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero/js/video.js"
              ),
              i.register(
                h,
                "initBackgroundVideos",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero/js/video.js"
              ),
              i.register(
                u,
                "videoTrigger",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero/js/video.js"
              ),
              i.register(
                p,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero/js/video.js"
              ),
              i.register(
                f,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero/js/video.js"
              ),
              i.register(
                v,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero/js/video.js"
              )),
            (d =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && d(e);
        },
        8202: (e, r, t) => {
          var o,
            a = t(3634);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero_split/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero_split/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        3634: (e, r, t) => {
          var o,
            a = t(9438),
            n = t.n(a),
            s = t(3075),
            i = t(8760);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var d,
            l,
            c = s.v$("site-wrap")[0],
            h = {
              container: s.v$(
                ".b-herosplit .b-herosplit__bg-video",
                !1,
                c,
                !0
              )[0],
              videos: s.v$(".b-herosplit video.b-herosplit__bg-video", !1, c, !0),
            },
            u = function (e) {
              var r = e.delegateTarget,
                t = s.oq(r, ".b-herosplit"),
                o = s.v$(".b-herosplit__bg-video--mobile", !1, t, !0)[0],
                a = s.v$(".b-herosplit__bg-video--desktop", !1, t, !0)[0];
              o &&
                a &&
                (o.paused && a.paused
                  ? (t.classList.remove("video-paused"),
                    r.setAttribute("aria-label", "Pause the video"),
                    o.play(),
                    a.play())
                  : (t.classList.add("video-paused"),
                    r.setAttribute("aria-label", "Play the video"),
                    o.pause(),
                    a.pause()));
            },
            p = function () {
              n()(c, '[data-js="video-trigger-split"]', "click", u);
            },
            f = function () {
              h.container &&
                (p(),
                (0, i.d)({
                  videos: h.videos,
                  parentSelector: ".b-herosplit",
                  buttonSelector: '[data-js="video-trigger-split"]',
                }));
            },
            v = f;
          (r.Z = v),
            (d =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (d.register(
                c,
                "siteWrap",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero_split/js/video_split.js"
              ),
              d.register(
                h,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero_split/js/video_split.js"
              ),
              d.register(
                u,
                "videoTrigger",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero_split/js/video_split.js"
              ),
              d.register(
                p,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero_split/js/video_split.js"
              ),
              d.register(
                f,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero_split/js/video_split.js"
              ),
              d.register(
                v,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/blocks/hero_split/js/video_split.js"
              )),
            (l =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && l(e);
        },
        8606: (e, r, t) => {
          var o,
            a = t(4194);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/comments/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/comments/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        4194: (e, r, t) => {
          var o,
            a = t(9438),
            n = t.n(a),
            s = t(3075);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var i,
            d,
            l = { container: s.v$("comment-form")[0] },
            c = function (e) {
              var r = s.aC(
                l.container.querySelectorAll(
                  'textarea, input[name="author"], input[name="email"]'
                )
              );
              r.length &&
                r.forEach(function (r) {
                  0 === (r.value ? r.value.trim() : "").length &&
                    e.preventDefault();
                });
            },
            h = function () {
              n()(l.container, 'input[type="submit"]', "click", c);
            },
            u = function () {
              l.container && h();
            },
            p = u;
          (r.Z = p),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                l,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/comments/js/comments.js"
              ),
              i.register(
                c,
                "validateCommentSubmit",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/comments/js/comments.js"
              ),
              i.register(
                h,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/comments/js/comments.js"
              ),
              i.register(
                u,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/comments/js/comments.js"
              ),
              i.register(
                p,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/comments/js/comments.js"
              )),
            (d =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && d(e);
        },
        2422: (e, r, t) => {
          var o,
            a = t(3234);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        3234: (e, r, t) => {
          var o,
            a = t(9438),
            n = t.n(a),
            s = t(3075);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var i,
            d,
            l = s.v$("site-wrap")[0],
            c = {
              dropdowns: Array.from(s.v$("dropdown-container")),
              toggleButtons: Array.from(s.v$("dropdown-toggle-button")),
              lists: Array.from(s.v$("dropdown-list")),
            },
            h = "c-dropdown--open",
            u = function (e) {
              var r = c.dropdowns.indexOf(e);
              return c.lists[r];
            },
            p = function (e) {
              var r = c.dropdowns.indexOf(e);
              return c.toggleButtons[r];
            },
            f = function (e) {
              g(),
                s.cn(e, h),
                u(e).setAttribute("aria-hidden", "false"),
                p(e).setAttribute("aria-expanded", "true");
            },
            v = function (e) {
              e &&
                (s.IV(e, h),
                u(e).setAttribute("aria-hidden", "true"),
                p(e).setAttribute("aria-expanded", "false"));
            },
            g = function () {
              c.dropdowns.map(function (e) {
                return v(e);
              });
            },
            m = function (e) {
              s.oq(e.target, ".c-dropdown") || g();
            },
            b = function (e) {
              return function () {
                var r = e.parentElement;
                s.pv(r, h) ? v(r) : f(r);
              };
            },
            w = function (e) {
              return function (r) {
                if (["Escape"].includes(r.code)) {
                  var t = s.oq(e, ".c-dropdown");
                  v(t), p(t).focus();
                }
              };
            },
            j = function (e) {
              return function (r) {
                if (["Tab"].includes(r.code) && !r.shiftKey) {
                  var t = s.oq(e, ".c-dropdown");
                  v(t);
                }
              };
            },
            L = function () {
              n()(l, "body", "click", m),
                c.toggleButtons.map(function (e) {
                  e.addEventListener("keydown", w(e)),
                    e.addEventListener("click", b(e));
                }),
                c.lists.map(function (e) {
                  Array.from(e.children).map(function (r) {
                    r.addEventListener("keydown", w(e));
                  }),
                    e.lastElementChild.addEventListener("keydown", j(e));
                });
            },
            y = function () {
              c.dropdowns && L();
            },
            k = y;
          (r.Z = k),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                l,
                "siteWrap",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              ),
              i.register(
                c,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              ),
              i.register(
                ".c-dropdown",
                "DROPDOWN_SELECTOR",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              ),
              i.register(
                h,
                "CLASS_OPEN",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              ),
              i.register(
                u,
                "getListFromDropdown",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              ),
              i.register(
                p,
                "getButtonFromDropdown",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              ),
              i.register(
                f,
                "openDropdown",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              ),
              i.register(
                v,
                "closeDropdown",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              ),
              i.register(
                g,
                "closeDropdowns",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              ),
              i.register(
                m,
                "onClickOutside",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              ),
              i.register(
                b,
                "toggleDropdown",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              ),
              i.register(
                w,
                "handleEscapeKey",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              ),
              i.register(
                j,
                "handleTabOnLastElement",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              ),
              i.register(
                L,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              ),
              i.register(
                y,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              ),
              i.register(
                k,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/dropdown/js/dropdown.js"
              )),
            (d =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && d(e);
        },
        9051: (e, r, t) => {
          var o,
            a = t(3276),
            n = t(2440);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var s,
            i,
            d = function () {
              (0, a.Z)(), (0, n.Z)();
            },
            l = d;
          (r.Z = l),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (s.register(
                d,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/index.js"
              ),
              s.register(
                l,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/index.js"
              )),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && i(e);
        },
        2440: (e, r, t) => {
          var o,
            a = t(3075),
            n = t(8094);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var s = {
            navWrapper: (0, a.v$)("subsite-search-nav-wrapper")[0],
            navListOl: document.querySelector(".subsite-header__nav-list"),
            subMenus: [],
          };
          function i() {
            s.navListOl.querySelectorAll("li > a").forEach(function (e) {
              e.innerHTML = "<span>".concat(e.innerHTML, "</span>");
            });
          }
          function d(e) {
            i(),
              s.navListOl.classList.add("subsite-header__nav-list--has-submenu"),
              e.forEach(function (e) {
                var r = e.parentNode;
                r.classList.add("subsite_primary__item--has-submenu");
                var t = r.querySelector(":scope > a"),
                  o = { menuItem: r, subMenu: e, button: t },
                  a = r.querySelector("a");
                a.removeAttribute("href"),
                  a.setAttribute("role", "button"),
                  a.setAttribute("tabindex", "0"),
                  r.setAttribute("aria-expanded", "false"),
                  s.subMenus.push(o);
              });
          }
          function l(e) {
            return (
              e.getBoundingClientRect().right >
              (window.innerWidth || document.documentElement.clientWidth)
            );
          }
          function c(e) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            if (
              (u(),
              e.classList.add("sub-menu--is-open"),
              e.setAttribute("aria-expanded", "true"),
              r)
            ) {
              var t = e.offsetWidth,
                o = r.offsetWidth;
              r.style.left = "".concat(t / 2 - o / 2, "px");
              var a = l(r);
              a && (r.style.left = "".concat(t - o + 20, "px"));
            }
          }
          function h(e) {
            e.classList.remove("sub-menu--is-open"),
              e.setAttribute("aria-expanded", "false");
          }
          function u() {
            s.subMenus.forEach(function (e) {
              h(e.menuItem);
            });
          }
          function p(e) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            e.classList.contains("sub-menu--is-open") ? h(e) : c(e, r);
          }
          function f(e) {
            return function () {
              setTimeout(function () {
                e.contains(document.activeElement) || h(e);
              }, 100);
            };
          }
          var v,
            g,
            m = function () {
              s.subMenus.forEach(function (e) {
                var r = e.menuItem,
                  t = e.subMenu,
                  o = e.button;
                (0, n.on)(o, "click", function () {
                  p(r, t);
                }),
                  (0, n.on)(o, "keydown", function (e) {
                    "Enter" === e.key || " " === e.key
                      ? (e.preventDefault(), p(r, t))
                      : "Escape" === e.code && h(r);
                  });
                var a = f(r);
                (0, n.on)(t, "focusout", a), (0, n.on)(o, "focusout", a);
              });
            },
            b = function () {
              if (s.navWrapper && s.navListOl) {
                var e = s.navListOl.querySelectorAll(".sub-menu");
                e.length > 0 && (d(e), m());
              }
            },
            w = b;
          (r.Z = w),
            (v =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (v.register(
                "subsite-header__nav-list--has-submenu",
                "CLASS_LIST_WITH_SUBMENU",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-dropdown-nav.js"
              ),
              v.register(
                "subsite_primary__item--has-submenu",
                "CLASS_ITEM_WITH_SUBMENU",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-dropdown-nav.js"
              ),
              v.register(
                "sub-menu--is-open",
                "CLASS_SUBMNEU_OPEN",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-dropdown-nav.js"
              ),
              v.register(
                s,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-dropdown-nav.js"
              ),
              v.register(
                i,
                "addSpans",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-dropdown-nav.js"
              ),
              v.register(
                d,
                "processSubmenus",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-dropdown-nav.js"
              ),
              v.register(
                l,
                "isOutOfViewport",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-dropdown-nav.js"
              ),
              v.register(
                c,
                "openMenu",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-dropdown-nav.js"
              ),
              v.register(
                h,
                "closeMenu",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-dropdown-nav.js"
              ),
              v.register(
                u,
                "closeAllMenus",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-dropdown-nav.js"
              ),
              v.register(
                p,
                "toggleMenu",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-dropdown-nav.js"
              ),
              v.register(
                f,
                "closeMenuIfFocusOut",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-dropdown-nav.js"
              ),
              v.register(
                m,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-dropdown-nav.js"
              ),
              v.register(
                b,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-dropdown-nav.js"
              ),
              v.register(
                w,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-dropdown-nav.js"
              )),
            (g =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && g(e);
        },
        3276: (e, r, t) => {
          var o,
            a = t(3075),
            n = t(8094);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var s,
            i,
            d = {
              navWrapper: (0, a.v$)("subsite-search-nav-wrapper")[0],
              toggleButton: (0, a.v$)("subsite-nav-trigger-toggle")[0],
              navList: (0, a.v$)("subsite-nav-resizable")[0],
              desktopNavScrollable: null,
            },
            l = "c-childmasthead__nav--mobile-nav-open",
            c = function (e) {
              return function (r) {
                var t = ["Space", "Enter"].includes(r.code);
                (r.code && !t) || ((0, a.og)(e, l), r.preventDefault());
              };
            },
            h = function () {
              if (d.desktopNavScrollable && d.navWrapper) {
                var e = d.navWrapper.parentElement.offsetWidth,
                  r = d.navWrapper.parentElement.firstElementChild.offsetWidth,
                  t = "100%";
                e > 959 && (t = "".concat(e - r - 120, "px")),
                  (d.desktopNavScrollable.style.maxWidth = t);
              }
            },
            u = function (e) {
              var r = d.navWrapper.parentElement.offsetWidth,
                t =
                  d.desktopNavScrollable.firstElementChild.getBoundingClientRect(),
                o =
                  d.desktopNavScrollable.lastElementChild.getBoundingClientRect(),
                a = d.desktopNavScrollable.getBoundingClientRect(),
                n = t.x < a.x,
                s = o.x + o.width > a.x + a.width;
              if (
                !(
                  "wheel" != e.type ||
                  r < 959 ||
                  Math.abs(e.deltaX) > 0 ||
                  (!s && !n)
                )
              ) {
                var i = (e.deltaY || -e.wheelDelta || e.detail) >> 10 || 1;
                (i *= -20),
                  (d.desktopNavScrollable.scrollLeft -= i),
                  e.preventDefault();
              }
            },
            p = function () {
              var e, r;
              null === (e = d.toggleButton) ||
                void 0 === e ||
                e.addEventListener("click", c(d.navWrapper)),
                null === (r = d.toggleButton) ||
                  void 0 === r ||
                  r.addEventListener("keydown", c(d.navWrapper)),
                (d.desktopNavScrollable =
                  d.navList &&
                  d.navList.firstElementChild &&
                  d.navList.firstElementChild.firstElementChild),
                d.desktopNavScrollable &&
                  ((0, n.on)(window, "resize", h),
                  h(),
                  d.desktopNavScrollable.addEventListener("wheel", u));
            },
            f = function () {
              d.navWrapper && p();
            },
            v = f;
          (r.Z = v),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (s.register(
                d,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-nav.js"
              ),
              s.register(
                l,
                "CLASS_OPEN",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-nav.js"
              ),
              s.register(
                c,
                "toggleSubsiteNav",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-nav.js"
              ),
              s.register(
                h,
                "resize",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-nav.js"
              ),
              s.register(
                u,
                "horizontalScrollOnMouseWheel",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-nav.js"
              ),
              s.register(
                p,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-nav.js"
              ),
              s.register(
                f,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-nav.js"
              ),
              s.register(
                v,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/childmasthead/js/subsite-nav.js"
              )),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && i(e);
        },
        8720: (e, r, t) => {
          var o,
            a = t(3600);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        3600: (e, r, t) => {
          var o,
            a = t(9438),
            n = t.n(a),
            s = t(3075),
            i = t(8760);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var d,
            l,
            c = s.v$("site-wrap")[0],
            h = {
              container: s.v$(".c-secondary-subheader", !1, c, !0)[0],
              videos: s.v$("video.c-secondary-subheader__bg-video", !1, c, !0),
            },
            u = function (e) {
              var r = e.delegateTarget,
                t = s.oq(r, ".c-secondary-subheader");
              s.v$(".c-secondary-subheader__bg-video", !1, t, !0).forEach(
                function (e) {
                  e &&
                    (e.paused
                      ? (t.classList.remove("video-paused"),
                        r.setAttribute("aria-label", "Pause the video"),
                        e.play())
                      : (t.classList.add("video-paused"),
                        r.setAttribute("aria-label", "Play the video"),
                        e.pause()));
                }
              );
            },
            p = function () {
              n()(c, '[data-js="video-trigger-secondary"]', "click", u);
            },
            f = function () {
              h.container &&
                (p(),
                (0, i.d)({
                  videos: h.videos,
                  parentSelector: ".c-secondary-subheader",
                  buttonSelector: '[data-js="video-trigger-secondary"]',
                }));
            },
            v = f;
          (r.Z = v),
            (d =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (d.register(
                c,
                "siteWrap",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/js/video.js"
              ),
              d.register(
                h,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/js/video.js"
              ),
              d.register(
                u,
                "videoTrigger",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/js/video.js"
              ),
              d.register(
                p,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/js/video.js"
              ),
              d.register(
                f,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/js/video.js"
              ),
              d.register(
                v,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/js/video.js"
              )),
            (l =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && l(e);
        },
        3479: (e, r, t) => {
          t.r(r);
          var o,
            a = t(4393);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.default = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/search_subheader/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/search_subheader/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        4393: (e, r, t) => {
          var o,
            a = t(3075),
            n = t(8094);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var s,
            i,
            d = { container: a.v$("landing-search-form")[0] },
            l = function () {
              var e = d.container.querySelector(".c-gsc__container"),
                r = e.querySelector('.gsc-input input[type="text"]'),
                t = e.querySelector("button.gsc-search-button"),
                o = e.querySelector("div.gsc-clear-button"),
                a = document.createElement("label");
              a.classList.add("screen-reader-text"),
                a.setAttribute("for", r.getAttribute("id")),
                (a.innerHTML = e.getAttribute("data-searchLabel")),
                r.parentNode.insertBefore(a, r),
                r.setAttribute(
                  "placeholder",
                  e.getAttribute("data-searchPlaceholder")
                ),
                t.setAttribute("aria-label", e.getAttribute("data-searchButton")),
                r.value.length > 0 && e.classList.add("active"),
                r.addEventListener("keyup", function () {
                  r.value.length > 0
                    ? e.classList.add("active")
                    : e.classList.remove("active");
                }),
                o.addEventListener("click", function () {
                  e.classList.remove("active");
                }),
                o.addEventListener("keyup", function (t) {
                  ("Enter" !== t.key && 13 !== t.keyCode) ||
                    ((r.value = ""), e.classList.remove("active"));
                }),
                o.setAttribute("aria-label", "Clear Form"),
                o.setAttribute("tabindex", 0),
                o.setAttribute("role", "button");
            },
            c = function () {
              (0, n.on)(document, "google_custom_search_loaded", l);
            },
            h = function () {
              d.container && c();
            },
            u = h;
          (r.Z = u),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (s.register(
                d,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/search_subheader/js/searchform.js"
              ),
              s.register(
                l,
                "modifyCSEForm",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/search_subheader/js/searchform.js"
              ),
              s.register(
                c,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/search_subheader/js/searchform.js"
              ),
              s.register(
                h,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/search_subheader/js/searchform.js"
              ),
              s.register(
                u,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/search_subheader/js/searchform.js"
              )),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && i(e);
        },
        6083: (e, r, t) => {
          var o,
            a = t(6137);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        6137: (e, r, t) => {
          var o,
            a = t(3075);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = {
              navWrapper: (0, a.v$)("subsite-search-nav-wrapper")[0],
              open: (0, a.v$)("subsite-search-trigger-open")[0],
              close: (0, a.v$)("subsite-search-trigger-close")[0],
              clear: (0, a.v$)("subsite-search-trigger-clear")[0],
              input: (0, a.v$)("subsite-search-input")[0],
              form: (0, a.v$)("subsite-search-form")[0],
            },
            d = "c-childmasthead__nav--search-open",
            l = "c-subsite-search__form__input--focus",
            c = function (e) {
              return function (r) {
                var t = ["Space", "Enter"].includes(r.code);
                (r.code && !t) ||
                  ((0, a.cn)(e, d),
                  e.setAttribute("aria-expanded", "true"),
                  setTimeout(function () {
                    i.input.focus(), t && (0, a.cn)(i.input, l);
                  }, 200));
              };
            },
            h = function (e) {
              return function (r) {
                (r.code && !["Space", "Enter"].includes(r.code)) ||
                  ((0, a.IV)(e, d), e.setAttribute("aria-expanded", "false"));
              };
            },
            u = function (e) {
              ["Tab"].includes(e.code) && (0, a.og)(i.input, l), f();
            },
            p = function (e) {
              ["Tab"].includes(e.code) && (0, a.og)(i.input, l),
                ["Enter"].includes(e.code) && i.form.submit(),
                f();
            },
            f = function () {
              i.input.value
                ? (0, a.cn)(
                    i.navWrapper,
                    "c-childmasthead__nav--input-has-content"
                  )
                : (0, a.IV)(
                    i.navWrapper,
                    "c-childmasthead__nav--input-has-content"
                  );
            },
            v = function () {
              (0, a.IV)(i.input, l),
                (0, a.IV)(i.navWrapper, "c-childmasthead__nav--input-has-focus");
            },
            g = function () {
              (0, a.cn)(i.navWrapper, "c-childmasthead__nav--input-has-focus");
            },
            m = function (e) {
              (e.code && !["Space", "Enter"].includes(e.code)) ||
                ((i.input.value = ""), i.input.focus(), f(), e.preventDefault());
            },
            b = function () {
              return (
                i.open.addEventListener("click", c(i.navWrapper)),
                i.open.addEventListener("keydown", c(i.navWrapper)),
                i.close.addEventListener("click", h(i.navWrapper)),
                i.close.addEventListener("keydown", h(i.navWrapper)),
                i.clear.addEventListener("click", m),
                i.clear.addEventListener("keydown", m),
                i.input.addEventListener("keyup", u),
                i.input.addEventListener("keydown", p),
                i.input.addEventListener("focusout", v),
                i.input.addEventListener("focus", g),
                f(),
                !0
              );
            },
            w = function () {
              i.navWrapper && i.open && b();
            },
            j = w;
          (r.Z = j),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              ),
              n.register(
                d,
                "CLASS_OPEN",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              ),
              n.register(
                l,
                "CLASS_INPUT_FOCUS",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              ),
              n.register(
                "c-childmasthead__nav--input-has-content",
                "CLASS_INPUT_HAS_CONTENT",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              ),
              n.register(
                "c-childmasthead__nav--input-has-focus",
                "CLASS_NAV_INPUT_FOCUS",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              ),
              n.register(
                c,
                "openMenu",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              ),
              n.register(
                h,
                "closeMenu",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              ),
              n.register(
                u,
                "keydownUpInput",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              ),
              n.register(
                p,
                "keydownDownInput",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              ),
              n.register(
                f,
                "showClearButtonIfContent",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              ),
              n.register(
                v,
                "focusOutOnInput",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              ),
              n.register(
                g,
                "onFocusInput",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              ),
              n.register(
                m,
                "clearInput",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              ),
              n.register(
                b,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              ),
              n.register(
                w,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              ),
              n.register(
                j,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/header/subsite_search/js/subsite-search.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        1442: (e, r, t) => {
          t.r(r);
          var o,
            a = t(2264);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.default = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/routes/google_custom_search_results/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/routes/google_custom_search_results/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        2264: (e, r, t) => {
          var o,
            a = t(3075),
            n = t(8094),
            s = t(7364);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var i,
            d,
            l = { container: "", pagination: "" },
            c = function (e) {
              var r = l.container;
              (0, s.Z)({ offset: -90, duration: 300, $target: $(r) });
            },
            h = function () {
              (l.container = a.v$("#gsc-results", !1, document, !0)[0]),
                (l.pagination = a.v$(".gsc-cursor-page", !1, document, !0)),
                l.container &&
                  l.pagination.forEach(function (e) {
                    return e.addEventListener("click", c);
                  });
            },
            u = function () {
              (0, n.on)(document, "google_custom_search_results_rendered", h);
            },
            p = function () {
              u();
            },
            f = p;
          (r.Z = f),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                l,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/routes/google_custom_search_results/js/searchresults.js"
              ),
              i.register(
                c,
                "handleClick",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/routes/google_custom_search_results/js/searchresults.js"
              ),
              i.register(
                h,
                "updatePagination",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/routes/google_custom_search_results/js/searchresults.js"
              ),
              i.register(
                u,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/routes/google_custom_search_results/js/searchresults.js"
              ),
              i.register(
                p,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/routes/google_custom_search_results/js/searchresults.js"
              ),
              i.register(
                f,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/routes/google_custom_search_results/js/searchresults.js"
              )),
            (d =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && d(e);
        },
        1814: (e, r, t) => {
          var o,
            a = t(6882);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/share/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/share/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        6882: (e, r, t) => {
          var o,
            a = t(9438),
            n = t.n(a),
            s = t(3075),
            i = t(786),
            d = t(5735);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var l,
            c,
            h = { container: s.v$("social-share-networks")[0] },
            u = function (e) {
              (0, i.Z)({
                event: e,
                url: e.delegateTarget.href,
                specs: {
                  width: parseInt(
                    e.delegateTarget.getAttribute("data-width"),
                    10
                  ),
                  height: parseInt(
                    e.delegateTarget.getAttribute("data-height"),
                    10
                  ),
                },
              });
            },
            p = function (e) {
              e.preventDefault();
              var r = e.delegateTarget.href,
                t = e.delegateTarget.dataset.tooltip || "";
              (0, s.TE)(r);
              var o = document.createElement("div");
              (o.className = "social-share__copytooltip fadeIn"),
                (o.innerText = t),
                e.delegateTarget.appendChild(o),
                e.delegateTarget.focus();
              var a = {
                top: e.delegateTarget.getBoundingClientRect().y + (0, d.w)() - 40,
                left:
                  e.delegateTarget.getBoundingClientRect().x +
                  (0, d.t)() -
                  o.offsetWidth / 2 +
                  8,
              };
              (o.style.top = "".concat(a.top, "px")),
                (o.style.left = "".concat(a.left, "px")),
                setTimeout(function () {
                  o.remove();
                }, 3e3);
            },
            f = function () {
              n()(h.container, '[data-js="social-share-popup"]', "click", u),
                n()(h.container, '[data-js="social-share-copylink"]', "click", p);
            },
            v = function () {
              h.container && f();
            },
            g = v;
          (r.Z = g),
            (l =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (l.register(
                h,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/share/js/share.js"
              ),
              l.register(
                u,
                "launchSocialPopup",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/share/js/share.js"
              ),
              l.register(
                p,
                "launchCopylink",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/share/js/share.js"
              ),
              l.register(
                f,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/share/js/share.js"
              ),
              l.register(
                v,
                "socialShare",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/share/js/share.js"
              ),
              l.register(
                g,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/share/js/share.js"
              )),
            (c =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e);
        },
        5393: (e, r, t) => {
          var o,
            a = t(1388);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        6968: (e, r, t) => {
          t.d(r, { P: () => y });
          var o,
            a = t(7757),
            n = t.n(a),
            s = t(8926),
            i = t.n(s);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          var d, l;
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          function c(e, r) {
            var t =
              arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            if (r && e && !e.value && ((e.value = r), t)) {
              var o = e.closest(".acf-image-uploader");
              null == o || o.classList.add("has-value");
              var a = null == o ? void 0 : o.querySelector("img");
              a && (a.src = t);
            }
          }
          function h(e) {
            var r = e.button,
              t = e.title,
              o = e.description,
              a = e.imageId,
              n = e.imgSrc,
              s = r.closest(".acf-row"),
              i = s.querySelector('[name*="field_custom_title"]'),
              d = s.querySelector('[name*="field_custom_content"]'),
              l = s.querySelector('[name*="field_custom_image"]');
            c(i, t), c(d, o), c(l, a, n);
          }
          function u(e, r) {
            return p.apply(this, arguments);
          }
          function p() {
            return (p = i()(
              n().mark(function e(r, t) {
                var o,
                  a,
                  s,
                  i = arguments;
                return n().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = i.length > 2 && void 0 !== i[2] ? i[2] : {}),
                            (a = r.innerHTML),
                            (e.prev = 2),
                            (r.innerHTML = "Downloading ..."),
                            (e.next = 6),
                            window.wp.apiFetch({ path: t })
                          );
                        case 6:
                          (s = e.sent),
                            h({
                              button: r,
                              title: s[o.title],
                              description: s[o.description],
                              imageId: s[o.imageId],
                              imgSrc: s[o.imageSrc],
                            }),
                            (r.innerHTML = a),
                            (e.next = 16);
                          break;
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(2)),
                            (r.innerHTML = a),
                            alert("There was an error pulling external data.");
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 11]]
                );
              })
            )).apply(this, arguments);
          }
          function f(e, r) {
            return v.apply(this, arguments);
          }
          function v() {
            return (v = i()(
              n().mark(function e(r, t) {
                var o, a, s;
                return n().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        (a =
                          null === (o = document.querySelector("#post_ID")) ||
                          void 0 === o
                            ? void 0
                            : o.value),
                          (s = "/tribe-core/v1/gazette-single-opengraph?url="
                            .concat(t, "&post_ID=")
                            .concat(a)),
                          u(r, s, {
                            title: "og:title",
                            description: "og:description",
                            imageId: "image_id",
                            imageSrc: "og:image",
                          });
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function g(e, r) {
            return m.apply(this, arguments);
          }
          function m() {
            return (m = i()(
              n().mark(function e(r, t) {
                var o;
                return n().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        (o = "/tribe-core/v1/gazette-single-post?post_ID=".concat(
                          t
                        )),
                          u(r, o, {
                            title: "title",
                            description: "description",
                            imageId: "image_id",
                            imageSrc: "image",
                          });
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function b() {
            var e = document.createElement("button");
            return (
              e.classList.add(
                "button",
                "button-secondary",
                "button-small",
                "pull-remote-button"
              ),
              (e.style.marginTop = "5px"),
              (e.innerHTML =
                '<span class="dashicons dashicons-download"></span> Freeze remote content'),
              e
            );
          }
          function w(e, r, t) {
            e.each(function (e, o) {
              o.querySelectorAll(r).forEach(function (e) {
                if (!e.parentNode.querySelector(".pull-remote-button")) {
                  var r = b();
                  r.addEventListener("click", function () {
                    t(r, e.value);
                  }),
                    e.parentNode.appendChild(r);
                }
              });
            });
          }
          function j(e) {
            w(
              e,
              '.acf-row:not(.acf-clone) [type="url"][name*="field_featuredstories_gazette_url"]',
              f
            );
          }
          function L(e) {
            w(e, '.acf-row:not(.acf-clone) select[name*="field_other_posts"]', g);
          }
          function y() {
            window.acf &&
              window.acf.addAction("append", function (e) {
                j(e), L(e);
              });
          }
          (d =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (d.register(
              c,
              "softUpdateField",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/gazette-rest.js"
            ),
            d.register(
              h,
              "overrideEmptyFields",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/gazette-rest.js"
            ),
            d.register(
              u,
              "pullGeneric",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/gazette-rest.js"
            ),
            d.register(
              f,
              "pullOpengraph",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/gazette-rest.js"
            ),
            d.register(
              g,
              "pullPost",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/gazette-rest.js"
            ),
            d.register(
              b,
              "createRemoteButton",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/gazette-rest.js"
            ),
            d.register(
              w,
              "addGenericPullButtons",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/gazette-rest.js"
            ),
            d.register(
              j,
              "addGazettePullButtons",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/gazette-rest.js"
            ),
            d.register(
              L,
              "addPostPullButtons",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/gazette-rest.js"
            ),
            d.register(
              y,
              "gazetteRestInit",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/gazette-rest.js"
            )),
            (l =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && l(e);
        },
        524: (e, r, t) => {
          var o;
          t.d(r, { j: () => c, A: () => u }),
            (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var a,
            n,
            s = { "acf/featuredstories": { fieldTitle: "field_custom_title" } };
          function i(e, r) {
            var t = e.name;
            if (s[t]) {
              var o = s[t].fieldTitle,
                a = "tr:nth-child("
                  .concat(r + 1, ') [data-key="')
                  .concat(o, '"] input'),
                n = document.querySelector(a),
                i = null == n ? void 0 : n.closest('[data-type="accordion"]');
              d(
                null == i
                  ? void 0
                  : i.parentElement.closest('[data-type="accordion"]')
              ),
                d(i),
                n &&
                  setTimeout(function () {
                    n.focus();
                  }, 200);
            }
          }
          function d(e) {
            if (e) {
              var r = e.querySelector(".acf-accordion-title");
              !e.classList.contains("-open") && r && r.click();
            }
          }
          function l(e) {
            for (
              var r = e.parentElement.children, t = 0, o = 0;
              o < r.length;
              o++
            )
              if (r[o] === e) {
                t = o;
                break;
              }
            return t;
          }
          function c(e, r) {
            var t;
            if (window.acf && e) {
              var o =
                null === (t = document.activeElement) || void 0 === t
                  ? void 0
                  : t.closest(".acf-row");
              if (o) {
                var a = l(o);
                e.slideTo(a, !1, !1);
              } else {
                var n = localStorage.getItem("slider-current-slide-".concat(r));
                n && e.slideTo(n, !1, !1);
              }
              e.update();
            }
          }
          function h(e, r) {
            e &&
              r &&
              e.on("slideChange", function () {
                var t = e.activeIndex;
                localStorage.setItem("slider-current-slide-".concat(r), t);
              });
          }
          function u(e, r) {
            var t =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            window.acf &&
              e &&
              (h(e, r.id),
              e.slides.each(function (o, a) {
                var n = document.createElement("button");
                (n.innerHTML =
                  '<span class="dashicons dashicons-edit" style="margin-right: 5px;"></span> Edit Slide ' +
                  (o + 1)),
                  n.addEventListener("click", function () {
                    i(r, o), e.update(), t && e.slideTo(o);
                  }),
                  (n.style.position = "absolute"),
                  (n.style.top = "0px"),
                  (n.style.left = "-20px"),
                  (n.style.zIndex = 10),
                  n.classList.add("components-button"),
                  n.classList.add("is-primary"),
                  a.append(n);
              }));
          }
          (a =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (a.register(
              s,
              "FIELD_NAMES",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider-admin-sync.js"
            ),
            a.register(
              i,
              "goToACFRow",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider-admin-sync.js"
            ),
            a.register(
              d,
              "openACFAccordion",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider-admin-sync.js"
            ),
            a.register(
              l,
              "getChildNumber",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider-admin-sync.js"
            ),
            a.register(
              c,
              "adminAutoSlideToFocusRowInput",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider-admin-sync.js"
            ),
            a.register(
              h,
              "trackCurrentSlide",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider-admin-sync.js"
            ),
            a.register(
              u,
              "addEditButtons",
              "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider-admin-sync.js"
            )),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && n(e);
        },
        1388: (e, r, t) => {
          var o,
            a = t(7154),
            n = t.n(a),
            s = t(7361),
            i = t.n(s),
            d = t(8066),
            l = t.n(d),
            c = t(3955),
            h = t.n(c),
            u = t(5768),
            p = t(3075),
            f = t(3451),
            v = t(524),
            g = t(6968);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          u.tq.use([u.W_, u.tl, u.s5, u.pt, u.oM, u.N1]);
          var m,
            b,
            w = { swipers: {} },
            j = {
              swiperMain: function () {
                return {
                  lazy: !0,
                  a11y: !0,
                  watchSlidesVisibility: !0,
                  watchOverflow: !0,
                };
              },
              swiperThumbs: function () {
                return {
                  a11y: !0,
                  slidesPerView: "auto",
                  touchRatio: 0.2,
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                };
              },
            },
            L = function (e, r) {
              var t = p.v$("c-slider-pagination", !1, e)[0];
              t && t.setAttribute("data-id", r);
            },
            y = function (e, r, t) {
              e.classList.add("initialized"),
                e.setAttribute("data-id", t),
                e.setAttribute("data-controls", r);
            },
            k = function (e) {
              var r = j.swiperThumbs();
              return (
                e.dataset.swiperOptions &&
                  f.sO(e.dataset.swiperOptions) &&
                  n()(r, JSON.parse(e.dataset.swiperOptions)),
                r
              );
            },
            H = function (e, r) {
              var t = j.swiperMain();
              if (
                (e.classList.contains("c-slider__main--has-arrows") &&
                  ((t.navigation = {}),
                  (t.navigation.nextEl = ".c-slider__button--next"),
                  (t.navigation.prevEl = ".c-slider__button--prev")),
                e.classList.contains("c-slider__main--has-pagination") &&
                  ((t.pagination = {}),
                  (t.pagination.el = '.c-slider__pagination[data-id="'.concat(
                    r,
                    '"]'
                  )),
                  (t.pagination.clickable = !0),
                  L(e, r)),
                e.classList.contains("c-slider__main--has-carousel"))
              ) {
                var o = e.nextElementSibling;
                if (o) {
                  var a = h()("swiper-carousel-");
                  (w.swipers[a] = new u.tq(o, k(o))),
                    (t.thumbs = {}),
                    (t.thumbs.swiper = w.swipers[a]),
                    y(o, r, a);
                }
              }
              return (
                e.dataset.swiperOptions &&
                  f.sO(e.dataset.swiperOptions) &&
                  n()(t, JSON.parse(e.dataset.swiperOptions)),
                t
              );
            },
            G = function (e, r, t) {
              var o = '[data-js="panel"][data-index="'.concat(
                  e,
                  '"] [data-js="c-slider"]'
                ),
                a = p.v$(o, !1, document, !0)[0];
              if (a && a.swiper) {
                var n = a.swiper.params.speed;
                t && (n = 0), a.swiper.slideTo(r, n);
              }
            },
            _ = function (e) {
              var r = h()("swiper-");
              e.classList.add("initialized");
              var t = new u.tq(e, H(e, r));
              return (w.swipers[r] = t), e.setAttribute("data-id", r), t;
            },
            E = function () {
              p.v$(
                '[data-js="c-slider"]:not(.initialized)',
                !0,
                document,
                !0
              ).forEach(function (e) {
                return _(e);
              });
            },
            M = function (e, r) {
              p.v$(
                '[data-js="c-slider"]:not(.initialized)',
                !0,
                e[0],
                !0
              ).forEach(function (e) {
                var t = _(e);
                (0, v.j)(t, r.id), (0, v.A)(t, r, !0);
              });
            },
            S = function (e) {
              "modular_content/panel_preview_updated" === e.type && E(),
                l()(function () {
                  var r = i()(e, "detail.parent.data", {});
                  void 0 !== r.index && void 0 !== r.childIndex
                    ? G(r.index, r.childIndex, !0)
                    : void 0 !== e.detail.index &&
                      void 0 !== e.detail.rowIndex &&
                      ("modular_content/repeater_row_deactivated" === e.type
                        ? G(e.detail.index, 0)
                        : G(e.detail.index, e.detail.rowIndex));
                }, 50);
            },
            A = function () {
              document.addEventListener(
                "modular_content/panel_preview_updated",
                S
              ),
                document.addEventListener(
                  "modular_content/repeater_row_activated",
                  S
                ),
                document.addEventListener(
                  "modular_content/repeater_row_deactivated",
                  S
                ),
                document.addEventListener(
                  "modular_content/repeater_row_added",
                  S
                ),
                document.addEventListener(
                  "modern_tribe/component_dialog_rendered",
                  E
                ),
                window.acf &&
                  ((0, g.P)(),
                  window.acf.addAction(
                    "render_block_preview/type=featuredstories",
                    M
                  ));
            },
            x = function () {
              u.tq && (E(), A());
            },
            T = x;
          (r.Z = T),
            (m =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (m.register(
                w,
                "instances",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider.js"
              ),
              m.register(
                j,
                "options",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider.js"
              ),
              m.register(
                L,
                "updatePagination",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider.js"
              ),
              m.register(
                y,
                "updateCarousel",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider.js"
              ),
              m.register(
                k,
                "getMainOptsForCarousel",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider.js"
              ),
              m.register(
                H,
                "getMainOptsForSlider",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider.js"
              ),
              m.register(
                G,
                "focusRow",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider.js"
              ),
              m.register(
                _,
                "initSlider",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider.js"
              ),
              m.register(
                E,
                "initSliders",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider.js"
              ),
              m.register(
                M,
                "initSliderPreview",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider.js"
              ),
              m.register(
                S,
                "previewChangeHandler",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider.js"
              ),
              m.register(
                A,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider.js"
              ),
              m.register(
                x,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider.js"
              ),
              m.register(
                T,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/slider/js/slider.js"
              )),
            (b =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && b(e);
        },
        6192: (e, r, t) => {
          var o,
            a = t(482);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        482: (e, r, t) => {
          var o,
            a = t(9438),
            n = t.n(a),
            s = t(9823),
            i = t(8094),
            d = t(3075);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var l,
            c,
            h = { isMobile: s.Z.is_mobile },
            u = {
              tabsComponents: d.v$("c-tabs", !0),
              tablistDropdowns: d.v$("c-tabs__tablist-dropdown", !0),
              mobileToggles: d.v$("c-tabs__tablist-toggle", !0),
            },
            p = function (e, r) {
              e.removeAttribute("hidden"),
                r.setAttribute("aria-selected", "true"),
                r.removeAttribute("tabindex");
            },
            f = function (e, r) {
              e.setAttribute("hidden", !0),
                r.setAttribute("aria-selected", "false"),
                r.setAttribute("tabindex", "-1");
            },
            v = function (e, r) {
              var t = r.querySelector('[data-js="c-tabs__tablist-toggle"]');
              t && (t.innerHTML = e.innerHTML);
            },
            g = function (e) {
              var r = d.oq(e, '[data-js="c-tabs"]'),
                t = d.v$('[role="tabpanel"]', !0, r, !0),
                o = e.getAttribute("aria-controls");
              o &&
                (t.forEach(function (e) {
                  var t = r.querySelector(
                    "#".concat(e.getAttribute("aria-labelledby"))
                  );
                  e.id === o ? p(e, t) : f(e, t);
                }),
                v(e, r));
            },
            m = function (e) {
              return (
                "false" === e.target.getAttribute("aria-selected") && g(e.target)
              );
            },
            b = function (e) {
              var r = d.oq(e.target, '[data-js="c-tabs"]'),
                t = ["ArrowLeft", "ArrowRight"];
              if (
                ("vertical" ===
                  r
                    .querySelector('[role="tablist"]')
                    .getAttribute("aria-orientation") &&
                  (t.push("ArrowUp"), t.push("ArrowDown")),
                t.includes(e.key))
              ) {
                var o = d.v$('[role="tab"]', !0, r, !0),
                  a = o.indexOf(document.activeElement),
                  n = o.length - 1;
                if ("ArrowRight" === e.key || "ArrowDown" === e.key) {
                  var s = a + 1 > n ? 0 : a + 1;
                  g(o[s]), o[s].focus();
                }
                if ("ArrowLeft" === e.key || "ArrowUp" === e.key) {
                  var i = a - 1 < 0 ? n : a - 1;
                  g(o[i]), o[i].focus();
                }
              }
            },
            w = function (e) {
              (document.getElementById(
                e.getAttribute("aria-controls")
              ).style.display = "block"),
                e.setAttribute("aria-expanded", "true");
            },
            j = function (e) {
              (document.getElementById(
                e.getAttribute("aria-controls")
              ).style.display = "none"),
                e.setAttribute("aria-expanded", "false");
            },
            L = function (e) {
              s.Z.is_desktop ||
                ("false" === e.target.getAttribute("aria-expanded")
                  ? w(e.target)
                  : j(e.target));
            },
            y = function (e) {
              s.Z.is_desktop ||
                d.oq(e.target, '[data-js="c-tabs__tablist-wrapper"]') ||
                u.mobileToggles.forEach(function (e) {
                  return j(e);
                });
            },
            k = function (e) {
              if (["Tab", "Escape"].includes(e.key) && !s.Z.is_desktop) {
                e.preventDefault();
                var r = d.oq(e.target, '[role="tablist"]');
                if ("Escape" === e.key && r) {
                  var t = r.querySelector('[data-js="c-tabs__tablist-toggle"]');
                  t && (j(t), t.focus());
                }
                "Tab" !== e.key ||
                  r ||
                  u.mobileToggles.forEach(function (e) {
                    return j(e);
                  });
              }
            },
            H = function () {
              u.tablistDropdowns.forEach(function (e) {
                "horizontal" ===
                  d.oq(e, '[data-js="c-tabs"]').getAttribute("data-layout") &&
                  e.classList.toggle(
                    "is-scrollable",
                    e.scrollWidth > e.clientWidth
                  );
              });
            },
            G = function () {
              h.isMobile &&
                s.Z.is_desktop &&
                (u.mobileToggles.forEach(function (e) {
                  return w(e);
                }),
                (h.isMobile = s.Z.is_mobile)),
                h.isMobile ||
                  s.Z.is_desktop ||
                  (u.mobileToggles.forEach(function (e) {
                    return j(e);
                  }),
                  (h.isMobile = s.Z.is_mobile)),
                H();
            },
            _ = function () {
              n()(u.tabsComponents, '[role="tab"]', "click", m),
                n()(u.tabsComponents, '[role="tablist"]', "keydown", b),
                n()(
                  u.tabsComponents,
                  '[data-js="c-tabs__tablist-toggle"]',
                  "click",
                  L
                ),
                (0, i.on)(document, "click", y),
                (0, i.on)(document, "keyup", k),
                (0, i.on)(document, "modern_tribe/resize_executed", G);
            },
            E = function () {},
            M = function () {
              u.tabsComponents && (_(), H());
            },
            S = M;
          (r.Z = S),
            (l =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (l.register(
                h,
                "componentState",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                u,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                p,
                "showTabPanel",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                f,
                "hideTabPanel",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                v,
                "updateMobileTriggerLabel",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                g,
                "switchTabs",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                m,
                "handleTabClick",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                b,
                "handleTabListKeyDown",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                w,
                "showTabsDropDown",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                j,
                "hideTabsDropDown",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                L,
                "handleTabsMobileToggle",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                y,
                "handleTabsMobileClickOut",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                k,
                "handleTabsMobileKeyDown",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                H,
                "handleScrollableTabsFit",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                G,
                "handleResize",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                _,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                E,
                "cacheElements",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                M,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              ),
              l.register(
                S,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tabs/js/tabs.js"
              )),
            (c =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e);
        },
        4929: (e, r, t) => {
          var o,
            a = t(1178);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tooltip/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tooltip/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        1178: (e, r, t) => {
          var o,
            a = t(9438),
            n = t.n(a),
            s = t(3075);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var i,
            d,
            l = document.body.classList.contains("wp-admin")
              ? s.v$(".block-editor", !0, document, !0)[0]
              : s.v$("site-wrap")[0],
            c = function (e) {
              e.preventDefault();
              var r = e.delegateTarget,
                t = s.oq(r, ".c-tooltip").querySelector(".c-tooltip__content");
              t.classList.contains("open")
                ? (t.classList.remove("open"),
                  t.setAttribute("aria-hidden", "true"),
                  r.setAttribute("aria-expanded", "false"))
                : (t.classList.add("open"),
                  t.setAttribute("aria-hidden", "false"),
                  r.setAttribute("aria-expanded", "true"));
            },
            h = function (e) {
              e.preventDefault();
              var r = e.delegateTarget,
                t = s.oq(r, ".c-tooltip__content");
              t.classList.contains("open") &&
                (t.classList.remove("open"),
                t.setAttribute("aria-hidden", "true"),
                r.setAttribute("aria-expanded", "false"));
            },
            u = function () {
              var e = s.v$(".c-tooltip__content", !0, l, !0),
                r = s.v$(".c-tooltip__btn", !0, l, !0);
              e.forEach(function (e) {
                e.classList.remove("open"), e.setAttribute("aria-hidden", "true");
              }),
                r.forEach(function (e) {
                  e.setAttribute("aria-expanded", "false");
                });
            },
            p = function (e) {
              s.oq(e.target, ".c-tooltip")
                ? "A" !== e.target.tagName && e.preventDefault()
                : u();
            },
            f = function () {
              n()(l, "body", "click", p),
                n()(l, ".c-tooltip__btn", "click", c),
                n()(l, '[data-js="tooltip-close"]', "click", h);
            },
            v = function () {
              f();
            },
            g = v;
          (r.Z = g),
            (i =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                l,
                "siteWrap",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tooltip/js/tooltip.js"
              ),
              i.register(
                c,
                "toggleTooltip",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tooltip/js/tooltip.js"
              ),
              i.register(
                h,
                "closeTooltip",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tooltip/js/tooltip.js"
              ),
              i.register(
                u,
                "closeAllTooltips",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tooltip/js/tooltip.js"
              ),
              i.register(
                p,
                "onClickOutside",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tooltip/js/tooltip.js"
              ),
              i.register(
                f,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tooltip/js/tooltip.js"
              ),
              i.register(
                v,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tooltip/js/tooltip.js"
              ),
              i.register(
                g,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/tooltip/js/tooltip.js"
              )),
            (d =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && d(e);
        },
        4828: (e, r, t) => {
          var o,
            a = t(9040);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/video/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/video/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        9040: (e, r, t) => {
          var o,
            a = t(8066),
            n = t.n(a),
            s = t(9438),
            i = t.n(s),
            d = t(3075),
            l = t(8094);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var c,
            h,
            u = { container: d.v$("site-wrap")[0], embeds: [] },
            p = function (e) {
              var r = d.v$("p", !0, e, !0);
              r.length &&
                r.forEach(function (e) {
                  e.parentNode.removeChild(e);
                });
            },
            f = function () {
              u.embeds.forEach(function (e) {
                p(e),
                  e.offsetWidth >= 500
                    ? e.classList.remove("c-video--is-small")
                    : e.classList.add("c-video--is-small");
              });
            },
            v = function () {
              var e = document.getElementsByClassName("c-video--is-playing")[0];
              if (e) {
                var r = e.querySelector(".c-video__trigger"),
                  t = e.querySelector("iframe");
                t &&
                  r &&
                  (e.removeChild(t),
                  e.classList.remove("c-video--is-playing"),
                  r.classList.remove("u-hidden"));
              }
            },
            g = function (e) {
              e.preventDefault(),
                document.getElementsByClassName("c-video--is-playing").length &&
                  v();
              var r = e.delegateTarget,
                t = d.oq(r, ".c-video"),
                o = t.getAttribute("data-embed-id"),
                a =
                  "YouTube" === t.getAttribute("data-embed-provider")
                    ? "https://www.youtube.com/embed/".concat(
                        o,
                        "?autoplay=1&autohide=1&fs=1&modestbranding=1&showinfo=0&controls=2&autoplay=1&rel=0&theme=light&vq=hd720"
                      )
                    : "//player.vimeo.com/video/".concat(o, "?autoplay=1"),
                s = document.createElement("iframe");
              (s.id = o),
                (s.frameBorder = 0),
                (s.src = a),
                (s.width = 1280),
                (s.height = 720),
                (s.tabIndex = 0),
                (s.allow = "autoplay; fullscreen"),
                (s.title = t.getAttribute("data-embed-title")),
                t.classList.add("c-video--is-playing"),
                d.Vt(s, r),
                s.focus(),
                n()(function () {
                  r.classList.add("u-hidden");
                }, 250);
            },
            m = function () {
              f();
            },
            b = function () {
              u.embeds && (u.embeds = d.v$("c-video", !0, u.container));
            },
            w = function () {
              i()(u.container, '[data-js="c-video-trigger"]', "click", g),
                (0, l.on)(document, "modern_tribe/resize_executed", m);
            },
            j = function () {
              u.container && (b(), u.embeds.length && (w(), f()));
            },
            L = j;
          (r.Z = L),
            (c =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (c.register(
                u,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/video/js/video.js"
              ),
              c.register(
                p,
                "removeErrantPTags",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/video/js/video.js"
              ),
              c.register(
                f,
                "setupOembeds",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/video/js/video.js"
              ),
              c.register(
                v,
                "resetEmbed",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/video/js/video.js"
              ),
              c.register(
                g,
                "playEmbed",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/video/js/video.js"
              ),
              c.register(
                m,
                "executeResize",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/video/js/video.js"
              ),
              c.register(
                b,
                "cacheElements",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/video/js/video.js"
              ),
              c.register(
                w,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/video/js/video.js"
              ),
              c.register(
                j,
                "videoEmbeds",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/video/js/video.js"
              ),
              c.register(
                L,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/components/video/js/video.js"
              )),
            (h =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && h(e);
        },
        13: (e, r, t) => {
          var o,
            a = t(7603);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var n,
            s,
            i = function () {
              (0, a.Z)();
            },
            d = i;
          (r.Z = d),
            (n =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (n.register(
                i,
                "init",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/integrations/gravity-forms/index.js"
              ),
              n.register(
                d,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/integrations/gravity-forms/index.js"
              )),
            (s =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e);
        },
        7603: (e, r, t) => {
          var o,
            a = t(1035),
            n = t(9438),
            s = t.n(n),
            i = t(9823),
            d = t(3075),
            l = t(7364);
          (e = t.hmd(e)),
            (o =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e);
          "undefined" != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature;
          var c,
            h,
            u,
            p = { container: d.v$("site-wrap")[0] },
            f = !1,
            v = function (e) {
              (0, l.Z)({
                duration: 300,
                offset: -i.Z.masthead_offset,
                $target: window.$(e),
              });
            },
            g = function () {
              f = !0;
            },
            m = function (e, r) {
              f &&
                (c.stop(),
                (f = !1),
                v(document.getElementById("gform_wrapper_".concat(r))));
            },
            b = function (e, r) {
              v(
                document.getElementById("gforms_confirmation_message_".concat(r))
              );
            },
            w = function (e) {
              c.spin(e.delegateTarget.parentNode);
            },
            j = function () {
              window
                .$(document)
                .on("submit", ".gform_wrapper form", g)
                .on("gform_post_render", m)
                .on("gform_confirmation_loaded", b),
                s()(p.container, ".gform_button", "click", w);
            },
            L = function () {
              p.container &&
                ((c = new a.$({
                  lines: 11,
                  length: 6,
                  width: 2,
                  radius: 5,
                  color: "#333333",
                  speed: 1.2,
                })),
                j());
            },
            y = L;
          (r.Z = y),
            (h =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (h.register(
                p,
                "el",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/integrations/gravity-forms/js/gravity-forms.js"
              ),
              h.register(
                c,
                "spinner",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/integrations/gravity-forms/js/gravity-forms.js"
              ),
              h.register(
                f,
                "submitting",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/integrations/gravity-forms/js/gravity-forms.js"
              ),
              h.register(
                v,
                "scrollSubmit",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/integrations/gravity-forms/js/gravity-forms.js"
              ),
              h.register(
                g,
                "gravityFormSubmit",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/integrations/gravity-forms/js/gravity-forms.js"
              ),
              h.register(
                m,
                "gravityFormPostRender",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/integrations/gravity-forms/js/gravity-forms.js"
              ),
              h.register(
                b,
                "gravityFormConfirmationLoaded",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/integrations/gravity-forms/js/gravity-forms.js"
              ),
              h.register(
                w,
                "spinOn",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/integrations/gravity-forms/js/gravity-forms.js"
              ),
              h.register(
                j,
                "bindEvents",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/integrations/gravity-forms/js/gravity-forms.js"
              ),
              h.register(
                L,
                "gravityForms",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/integrations/gravity-forms/js/gravity-forms.js"
              ),
              h.register(
                y,
                "default",
                "/home/runner/work/harvard-flagship/harvard-flagship/build/wp-content/themes/core/integrations/gravity-forms/js/gravity-forms.js"
              )),
            (u =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && u(e);
        },
      },
      a = {};
    function n(e) {
      if (a[e]) return a[e].exports;
      var r = (a[e] = { id: e, loaded: !1, exports: {} });
      return o[e].call(r.exports, r, r.exports, n), (r.loaded = !0), r.exports;
    }
    (n.m = o),
      (n.x = (e) => {}),
      (n.n = (e) => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return n.d(r, { a: r }), r;
      }),
      (n.d = (e, r) => {
        for (var t in r)
          n.o(r, t) &&
            !n.o(e, t) &&
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
      }),
      (n.f = {}),
      (n.e = (e) =>
        Promise.all(Object.keys(n.f).reduce((r, t) => (n.f[t](e, r), r), []))),
      (n.u = (e) =>
        (({
          1: "component-site-masthead",
          207: "app-tooltip",
          293: "component-category",
          421: "component-secondary-navigation",
          427: "component-the-follower",
          584: "component-site-nav",
          596: "filters",
          869: "component-in-focus",
        }[e] || e) + ".min.js")),
      (n.miniCssF = (e) =>
        "../../../css/dist/theme/" +
        ({
          1: "component-site-masthead",
          207: "app-tooltip",
          293: "component-category",
          421: "component-secondary-navigation",
          427: "component-the-follower",
          584: "component-site-nav",
          596: "filters",
          736: "vendor",
          787: "scripts",
          869: "component-in-focus",
        }[e] || e) +
        ".min.css"),
      (n.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (n.hmd = (e) => (
        (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id
            );
          },
        }),
        e
      )),
      (n.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
      (e = {}),
      (n.l = (r, t, o) => {
        if (e[r]) e[r].push(t);
        else {
          var a, s;
          if (void 0 !== o)
            for (
              var i = document.getElementsByTagName("script"), d = 0;
              d < i.length;
              d++
            ) {
              var l = i[d];
              if (
                l.getAttribute("src") == r ||
                l.getAttribute("data-webpack") == "square-one-build:" + o
              ) {
                a = l;
                break;
              }
            }
          a ||
            ((s = !0),
            ((a = document.createElement("script")).charset = "utf-8"),
            (a.timeout = 120),
            n.nc && a.setAttribute("nonce", n.nc),
            a.setAttribute("data-webpack", "square-one-build:" + o),
            (a.src = r)),
            (e[r] = [t]);
          var c = (t, o) => {
              (a.onerror = a.onload = null), clearTimeout(h);
              var n = e[r];
              if (
                (delete e[r],
                a.parentNode && a.parentNode.removeChild(a),
                n && n.forEach((e) => e(o)),
                t)
              )
                return t(o);
            },
            h = setTimeout(
              c.bind(null, void 0, { type: "timeout", target: a }),
              12e4
            );
          (a.onerror = c.bind(null, a.onerror)),
            (a.onload = c.bind(null, a.onload)),
            s && document.head.appendChild(a);
        }
      }),
      (n.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
      (n.p = "/wp-content/themes/core/assets/js/dist/theme/"),
      (r = (e) =>
        new Promise((r, t) => {
          var o = n.miniCssF(e),
            a = n.p + o;
          if (
            ((e, r) => {
              for (
                var t = document.getElementsByTagName("link"), o = 0;
                o < t.length;
                o++
              ) {
                var a =
                  (s = t[o]).getAttribute("data-href") || s.getAttribute("href");
                if ("stylesheet" === s.rel && (a === e || a === r)) return s;
              }
              var n = document.getElementsByTagName("style");
              for (o = 0; o < n.length; o++) {
                var s;
                if ((a = (s = n[o]).getAttribute("data-href")) === e || a === r)
                  return s;
              }
            })(o, a)
          )
            return r();
          ((e, r, t, o) => {
            var a = document.createElement("link");
            (a.rel = "stylesheet"),
              (a.type = "text/css"),
              (a.onerror = a.onload =
                (n) => {
                  if (((a.onerror = a.onload = null), "load" === n.type)) t();
                  else {
                    var s = n && ("load" === n.type ? "missing" : n.type),
                      i = (n && n.target && n.target.href) || r,
                      d = new Error(
                        "Loading CSS chunk " + e + " failed.\n(" + i + ")"
                      );
                    (d.code = "CSS_CHUNK_LOAD_FAILED"),
                      (d.type = s),
                      (d.request = i),
                      a.parentNode.removeChild(a),
                      o(d);
                  }
                }),
              (a.href = r),
              document.head.appendChild(a);
          })(e, a, r, t);
        })),
      (t = { 787: 0 }),
      (n.f.miniCss = (e, o) => {
        t[e]
          ? o.push(t[e])
          : 0 !== t[e] &&
            { 596: 1 }[e] &&
            o.push(
              (t[e] = r(e).then(
                () => {
                  t[e] = 0;
                },
                (r) => {
                  throw (delete t[e], r);
                }
              ))
            );
      }),
      (() => {
        var e = { 787: 0 },
          r = [[673, 736]];
        n.f.j = (r, t) => {
          var o = n.o(e, r) ? e[r] : void 0;
          if (0 !== o)
            if (o) t.push(o[2]);
            else {
              var a = new Promise((t, a) => {
                o = e[r] = [t, a];
              });
              t.push((o[2] = a));
              var s = n.p + n.u(r),
                i = new Error();
              n.l(
                s,
                (t) => {
                  if (n.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
                    var a = t && ("load" === t.type ? "missing" : t.type),
                      s = t && t.target && t.target.src;
                    (i.message =
                      "Loading chunk " + r + " failed.\n(" + a + ": " + s + ")"),
                      (i.name = "ChunkLoadError"),
                      (i.type = a),
                      (i.request = s),
                      o[1](i);
                  }
                },
                "chunk-" + r
              );
            }
        };
        var t = (e) => {},
          o = (o, a) => {
            for (
              var s, i, d = a[0], l = a[1], c = a[2], h = a[3], u = 0, p = [];
              u < d.length;
              u++
            )
              (i = d[u]), n.o(e, i) && e[i] && p.push(e[i][0]), (e[i] = 0);
            for (s in l) n.o(l, s) && (n.m[s] = l[s]);
            for (c && c(n), o && o(a); p.length; ) p.shift()();
            return h && r.push.apply(r, h), t();
          },
          a = (self.webpackChunksquare_one_build =
            self.webpackChunksquare_one_build || []);
        function s() {
          for (var t, o = 0; o < r.length; o++) {
            for (var a = r[o], s = !0, i = 1; i < a.length; i++) {
              var d = a[i];
              0 !== e[d] && (s = !1);
            }
            s && (r.splice(o--, 1), (t = n((n.s = a[0]))));
          }
          return 0 === r.length && (n.x(), (n.x = (e) => {})), t;
        }
        a.forEach(o.bind(null, 0)), (a.push = o.bind(null, a.push.bind(a)));
        var i = n.x;
        n.x = () => ((n.x = i || ((e) => {})), (t = s)());
      })(),
      n.x();
  })();
  