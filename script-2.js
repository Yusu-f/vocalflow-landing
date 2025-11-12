(self.webpackChunk = self.webpackChunk || []).push([
  ["810"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new D.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function i(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function r() {}
        function a(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var i = n;
          return (
            Q.test(e) || !q.test(e)
              ? (i = parseInt(e, 10))
              : q.test(e) && (i = 1e3 * parseFloat(e)),
            0 > i && (i = 0),
            i == i ? i : n
          );
        }
        function o(e) {
          X.debug && window && window.console.warn(e);
        }
        var u,
          l,
          c,
          s = (function (e, t, n) {
            function i(e) {
              return "object" == typeof e;
            }
            function r(e) {
              return "function" == typeof e;
            }
            function a() {}
            return function o(u, l) {
              function c() {
                var e = new s();
                return r(e.init) && e.init.apply(e, arguments), e;
              }
              function s() {}
              l === n && ((l = u), (u = Object)), (c.Bare = s);
              var d,
                f = (a[e] = u[e]),
                p = (s[e] = c[e] = new a());
              return (
                (p.constructor = c),
                (c.mixin = function (t) {
                  return (s[e] = c[e] = o(c, t)[e]), c;
                }),
                (c.open = function (e) {
                  if (
                    ((d = {}),
                    r(e) ? (d = e.call(c, p, f, c, u)) : i(e) && (d = e),
                    i(d))
                  )
                    for (var n in d) t.call(d, n) && (p[n] = d[n]);
                  return r(p.init) || (p.init = u), c;
                }),
                c.open(l)
              );
            };
          })("prototype", {}.hasOwnProperty),
          d = {
            ease: [
              "ease",
              function (e, t, n, i) {
                var r = (e /= i) * e,
                  a = r * e;
                return (
                  t +
                  n *
                    (-2.75 * a * r + 11 * r * r + -15.5 * a + 8 * r + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, i) {
                var r = (e /= i) * e,
                  a = r * e;
                return t + n * (-1 * a * r + 3 * r * r + -3 * a + 2 * r);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, i) {
                var r = (e /= i) * e,
                  a = r * e;
                return (
                  t +
                  n *
                    (0.3 * a * r + -1.6 * r * r + 2.2 * a + -1.8 * r + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, i) {
                var r = (e /= i) * e,
                  a = r * e;
                return t + n * (2 * a * r + -5 * r * r + 2 * a + 2 * r);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, i) {
                return (n * e) / i + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, i) {
                return n * (e /= i) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, i) {
                return -n * (e /= i) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, i) {
                return -n * ((e = e / i - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, i) {
                return -n * Math.cos((e / i) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, i) {
                return n * Math.sin((e / i) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, i) {
                return (-n / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, i) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, i) {
                return e === i
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / i) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, i) {
                return 0 === e
                  ? t
                  : e === i
                  ? t + n
                  : (e /= i / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, i) {
                return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, i) {
                return n * Math.sqrt(1 - (e = e / i - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, i, r) {
                return (
                  void 0 === r && (r = 1.70158),
                  n * (e /= i) * e * ((r + 1) * e - r) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, i, r) {
                return (
                  void 0 === r && (r = 1.70158),
                  n * ((e = e / i - 1) * e * ((r + 1) * e + r) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, i, r) {
                return (
                  void 0 === r && (r = 1.70158),
                  (e /= i / 2) < 1
                    ? (n / 2) * e * e * (((r *= 1.525) + 1) * e - r) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          E = "bkwld-tram",
          g = /[\-\.0-9]/g,
          h = /[A-Z]/,
          m = "number",
          y = /^(rgb|#)/,
          I = /(em|cm|mm|in|pt|pc|px)$/,
          v = /(em|cm|mm|in|pt|pc|px|%)$/,
          T = /(deg|rad|turn)$/,
          b = "unitless",
          _ = /(all|none) 0s ease 0s/,
          O = /^(width|height)$/,
          A = document.createElement("a"),
          w = ["Webkit", "Moz", "O", "ms"],
          R = ["-webkit-", "-moz-", "-o-", "-ms-"],
          N = function (e) {
            if (e in A.style) return { dom: e, css: e };
            var t,
              n,
              i = "",
              r = e.split("-");
            for (t = 0; t < r.length; t++)
              i += r[t].charAt(0).toUpperCase() + r[t].slice(1);
            for (t = 0; t < w.length; t++)
              if ((n = w[t] + i) in A.style) return { dom: n, css: R[t] + e };
          },
          C = (t.support = {
            bind: Function.prototype.bind,
            transform: N("transform"),
            transition: N("transition"),
            backface: N("backface-visibility"),
            timing: N("transition-timing-function"),
          });
        if (C.transition) {
          var L = C.timing.dom;
          if (((A.style[L] = d["ease-in-back"][0]), !A.style[L]))
            for (var S in f) d[S][0] = f[S];
        }
        var F = (t.frame =
            (u =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && C.bind
              ? u.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          P = (t.now =
            (c =
              (l = p.performance) &&
              (l.now || l.webkitNow || l.msNow || l.mozNow)) && C.bind
              ? c.bind(l)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          M = s(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                    var r = e[t];
                    r && i.push(r);
                  }
                  return i;
                })(("" + e).split(" ")),
                i = n[0];
              t = t || {};
              var r = Y[i];
              if (!r) return o("Unsupported property: " + i);
              if (!t.weak || !this.props[i]) {
                var a = r[0],
                  u = this.props[i];
                return (
                  u || (u = this.props[i] = new a.Bare()),
                  u.init(this.$el, n, r, t),
                  u
                );
              }
            }
            function i(e, t, i) {
              if (e) {
                var o = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == o && t)
                )
                  return (
                    (this.timer = new B({
                      duration: e,
                      context: this,
                      complete: r,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == o && t) {
                  switch (e) {
                    case "hide":
                      l.call(this);
                      break;
                    case "stop":
                      u.call(this);
                      break;
                    case "redraw":
                      c.call(this);
                      break;
                    default:
                      n.call(this, e, i && i[1]);
                  }
                  return r.call(this);
                }
                if ("function" == o) return void e.call(this, this);
                if ("object" == o) {
                  var f = 0;
                  d.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = a(e.wait, 0));
                    }
                  ),
                    s.call(this),
                    f > 0 &&
                      ((this.timer = new B({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = r));
                  var p = this,
                    E = !1,
                    g = {};
                  F(function () {
                    d.call(p, e, function (e) {
                      e.active && ((E = !0), (g[e.name] = e.nextStyle));
                    }),
                      E && p.$el.css(g);
                  });
                }
              }
            }
            function r() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                i.call(this, e.options, !0, e.args);
              }
            }
            function u(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                d.call(this, t, f),
                s.call(this);
            }
            function l() {
              u.call(this), (this.el.style.display = "none");
            }
            function c() {
              this.el.offsetHeight;
            }
            function s() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              (n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[C.transition.dom] = n));
            }
            function d(e, t, i) {
              var r,
                a,
                o,
                u,
                l = t !== f,
                c = {};
              for (r in e)
                (o = e[r]),
                  r in $
                    ? (c.transform || (c.transform = {}), (c.transform[r] = o))
                    : (h.test(r) &&
                        (r = r.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      r in Y ? (c[r] = o) : (u || (u = {}), (u[r] = o)));
              for (r in c) {
                if (((o = c[r]), !(a = this.props[r]))) {
                  if (!l) continue;
                  a = n.call(this, r);
                }
                t.call(this, a, o);
              }
              i && u && i.call(this, u);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function g(e) {
              this.$el.css(e);
            }
            function m(e, n) {
              t[e] = function () {
                return this.children
                  ? y.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function y(e, t) {
              var n,
                i = this.children.length;
              for (n = 0; i > n; n++) e.apply(this.children[n], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                X.keepInherited && !X.fallback)
              ) {
                var n = H(this.el, "transition");
                n && !_.test(n) && (this.upstream = n);
              }
              C.backface &&
                X.hideBackface &&
                W(this.el, C.backface.css, "hidden");
            }),
              m("add", n),
              m("start", i),
              m("wait", function (e) {
                (e = a(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new B({
                        duration: e,
                        context: this,
                        complete: r,
                      })),
                      (this.active = !0));
              }),
              m("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = r))
                  : o(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              m("next", r),
              m("stop", u),
              m("set", function (e) {
                u.call(this, e), d.call(this, e, p, g);
              }),
              m("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              m("hide", l),
              m("redraw", c),
              m("destroy", function () {
                u.call(this),
                  e.removeData(this.el, E),
                  (this.$el = this.el = null);
              });
          }),
          D = s(M, function (t) {
            function n(t, n) {
              var i = e.data(t, E) || e.data(t, E, new M.Bare());
              return i.el || i.init(t), n ? i.start(n) : i;
            }
            t.init = function (t, i) {
              var r = e(t);
              if (!r.length) return this;
              if (1 === r.length) return n(r[0], i);
              var a = [];
              return (
                r.each(function (e, t) {
                  a.push(n(t, i));
                }),
                (this.children = a),
                this
              );
            };
          }),
          k = s(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            (e.init = function (e, t, n, i) {
              (this.$el = e), (this.el = e[0]);
              var r,
                o,
                u,
                l = t[0];
              n[2] && (l = n[2]),
                z[l] && (l = z[l]),
                (this.name = l),
                (this.type = n[1]),
                (this.duration = a(t[1], this.duration, 500)),
                (this.ease =
                  ((r = t[2]),
                  (o = this.ease),
                  (u = "ease"),
                  void 0 !== o && (u = o),
                  r in d ? r : u)),
                (this.delay = a(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = O.test(this.name)),
                (this.unit = i.unit || this.unit || X.defaultUnit),
                (this.angle = i.angle || this.angle || X.defaultAngle),
                X.fallback || i.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + d[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new U({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return H(this.el, this.name);
              }),
              (e.update = function (e) {
                W(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  W(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  r,
                  a = "number" == typeof e,
                  u = "string" == typeof e;
                switch (t) {
                  case m:
                    if (a) return e;
                    if (u && "" === e.replace(g, "")) return +e;
                    r = "number(unitless)";
                    break;
                  case y:
                    if (u) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? i(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    r = "hex or rgb string";
                    break;
                  case I:
                    if (a) return e + this.unit;
                    if (u && t.test(e)) return e;
                    r = "number(px) or string(unit)";
                    break;
                  case v:
                    if (a) return e + this.unit;
                    if (u && t.test(e)) return e;
                    r = "number(px) or string(unit or %)";
                    break;
                  case T:
                    if (a) return e + this.angle;
                    if (u && t.test(e)) return e;
                    r = "number(deg) or string(angle)";
                    break;
                  case b:
                    if (a || (u && v.test(e))) return e;
                    r = "number(unitless) or string(unit or %)";
                }
                return (
                  o(
                    "Type warning: Expected: [" +
                      r +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          x = s(k, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), y));
            };
          }),
          V = s(k, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          G = s(k, function (e, t) {
            function n(e, t) {
              var n, i, r, a, o;
              for (n in e)
                (r = (a = $[n])[0]),
                  (i = a[1] || n),
                  (o = this.convert(e[n], r)),
                  t.call(this, i, o, r);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  $.perspective &&
                    X.perspective &&
                    ((this.current.perspective = X.perspective),
                    W(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  W(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new j({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  i = {};
                for (n in this.current) i[n] = n in t ? t[n] : this.current[n];
                (this.active = !0), (this.nextStyle = this.style(i));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new j({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                W(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  i = {};
                return (
                  n.call(this, e, function (e, n, r) {
                    (i[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, r)));
                  }),
                  i
                );
              });
          }),
          U = s(function (t) {
            function a() {
              var e,
                t,
                n,
                i = l.length;
              if (i)
                for (F(a), t = P(), e = i; e--; ) (n = l[e]) && n.render(t);
            }
            var u = { ease: d.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || u.ease;
              d[t] && (t = d[t][1]),
                "function" != typeof t && (t = u.ease),
                (this.ease = t),
                (this.update = e.update || r),
                (this.complete = e.complete || r),
                (this.context = e.context || this),
                (this.name = e.name);
              var n = e.from,
                i = e.to;
              void 0 === n && (n = u.from),
                void 0 === i && (i = u.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof i
                  ? ((this.begin = n), (this.change = i - n))
                  : this.format(i, n),
                (this.value = this.begin + this.unit),
                (this.start = P()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = P()),
                  (this.active = !0),
                  1 === l.push(this) && F(a));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, l)) >= 0 &&
                    ((t = l.slice(n + 1)),
                    (l.length = n),
                    t.length && (l = l.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var r,
                    a,
                    o = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((r = this.startRGB),
                        (a = this.endRGB),
                        i(
                          r[0] + o * (a[0] - r[0]),
                          r[1] + o * (a[1] - r[1]),
                          r[2] + o * (a[2] - r[2])
                        ))
                      : Math.round((this.begin + o * this.change) * c) / c),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var i = t.replace(g, "");
                  i !== e.replace(g, "") &&
                    o("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = i);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = r);
              });
            var l = [],
              c = 1e3;
          }),
          B = s(U, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || r),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          j = s(U, function (e, t) {
            (e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new U({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  i = this.tweens.length,
                  r = !1;
                for (t = i; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (r = !0));
                return r
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          X = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !C.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!C.transition) return (X.fallback = !0);
          X.agentTests.push("(" + e + ")");
          var t = RegExp(X.agentTests.join("|"), "i");
          X.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new U(e);
          }),
          (t.delay = function (e, t, n) {
            return new B({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var W = e.style,
          H = e.css,
          z = { transform: C.transform && C.transform.css },
          Y = {
            color: [x, y],
            background: [x, y, "background-color"],
            "outline-color": [x, y],
            "border-color": [x, y],
            "border-top-color": [x, y],
            "border-right-color": [x, y],
            "border-bottom-color": [x, y],
            "border-left-color": [x, y],
            "border-width": [k, I],
            "border-top-width": [k, I],
            "border-right-width": [k, I],
            "border-bottom-width": [k, I],
            "border-left-width": [k, I],
            "border-spacing": [k, I],
            "letter-spacing": [k, I],
            margin: [k, I],
            "margin-top": [k, I],
            "margin-right": [k, I],
            "margin-bottom": [k, I],
            "margin-left": [k, I],
            padding: [k, I],
            "padding-top": [k, I],
            "padding-right": [k, I],
            "padding-bottom": [k, I],
            "padding-left": [k, I],
            "outline-width": [k, I],
            opacity: [k, m],
            top: [k, v],
            right: [k, v],
            bottom: [k, v],
            left: [k, v],
            "font-size": [k, v],
            "text-indent": [k, v],
            "word-spacing": [k, v],
            width: [k, v],
            "min-width": [k, v],
            "max-width": [k, v],
            height: [k, v],
            "min-height": [k, v],
            "max-height": [k, v],
            "line-height": [k, b],
            "scroll-top": [V, m, "scrollTop"],
            "scroll-left": [V, m, "scrollLeft"],
          },
          $ = {};
        C.transform &&
          ((Y.transform = [G]),
          ($ = {
            x: [v, "translateX"],
            y: [v, "translateY"],
            rotate: [T],
            rotateX: [T],
            rotateY: [T],
            scale: [m],
            scaleX: [m],
            scaleY: [m],
            skew: [T],
            skewX: [T],
            skewY: [T],
          })),
          C.transform &&
            C.backface &&
            (($.z = [v, "translateZ"]),
            ($.rotateZ = [T]),
            ($.scaleZ = [m]),
            ($.perspective = [I]));
        var Q = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var i,
        r,
        a,
        o,
        u,
        l,
        c,
        s,
        d,
        f,
        p,
        E,
        g,
        h,
        m,
        y,
        I,
        v,
        T,
        b,
        _ = window.$,
        O = n(5487) && _.tram;
      ((i = {}).VERSION = "1.6.0-Webflow"),
        (r = {}),
        (a = Array.prototype),
        (o = Object.prototype),
        (u = Function.prototype),
        a.push,
        (l = a.slice),
        a.concat,
        o.toString,
        (c = o.hasOwnProperty),
        (s = a.forEach),
        (d = a.map),
        a.reduce,
        a.reduceRight,
        (f = a.filter),
        a.every,
        (p = a.some),
        (E = a.indexOf),
        a.lastIndexOf,
        (g = Object.keys),
        u.bind,
        (h =
          i.each =
          i.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (s && e.forEach === s) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var a = 0, o = e.length; a < o; a++)
                  if (t.call(n, e[a], a, e) === r) return;
              } else
                for (var u = i.keys(e), a = 0, o = u.length; a < o; a++)
                  if (t.call(n, e[u[a]], u[a], e) === r) return;
              return e;
            }),
        (i.map = i.collect =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : d && e.map === d
              ? e.map(t, n)
              : (h(e, function (e, r, a) {
                  i.push(t.call(n, e, r, a));
                }),
                i);
          }),
        (i.find = i.detect =
          function (e, t, n) {
            var i;
            return (
              m(e, function (e, r, a) {
                if (t.call(n, e, r, a)) return (i = e), !0;
              }),
              i
            );
          }),
        (i.filter = i.select =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : f && e.filter === f
              ? e.filter(t, n)
              : (h(e, function (e, r, a) {
                  t.call(n, e, r, a) && i.push(e);
                }),
                i);
          }),
        (m =
          i.some =
          i.any =
            function (e, t, n) {
              t || (t = i.identity);
              var a = !1;
              return null == e
                ? a
                : p && e.some === p
                ? e.some(t, n)
                : (h(e, function (e, i, o) {
                    if (a || (a = t.call(n, e, i, o))) return r;
                  }),
                  !!a);
            }),
        (i.contains = i.include =
          function (e, t) {
            return (
              null != e &&
              (E && e.indexOf === E
                ? -1 != e.indexOf(t)
                : m(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (i.delay = function (e, t) {
          var n = l.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (i.defer = function (e) {
          return i.delay.apply(i, [e, 1].concat(l.call(arguments, 1)));
        }),
        (i.throttle = function (e) {
          var t, n, i;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (i = this),
              O.frame(function () {
                (t = !1), e.apply(i, n);
              }));
          };
        }),
        (i.debounce = function (e, t, n) {
          var r,
            a,
            o,
            u,
            l,
            c = function () {
              var s = i.now() - u;
              s < t
                ? (r = setTimeout(c, t - s))
                : ((r = null), n || ((l = e.apply(o, a)), (o = a = null)));
            };
          return function () {
            (o = this), (a = arguments), (u = i.now());
            var s = n && !r;
            return (
              r || (r = setTimeout(c, t)),
              s && ((l = e.apply(o, a)), (o = a = null)),
              l
            );
          };
        }),
        (i.defaults = function (e) {
          if (!i.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var r = arguments[t];
            for (var a in r) void 0 === e[a] && (e[a] = r[a]);
          }
          return e;
        }),
        (i.keys = function (e) {
          if (!i.isObject(e)) return [];
          if (g) return g(e);
          var t = [];
          for (var n in e) i.has(e, n) && t.push(n);
          return t;
        }),
        (i.has = function (e, t) {
          return c.call(e, t);
        }),
        (i.isObject = function (e) {
          return e === Object(e);
        }),
        (i.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (i.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (y = /(.)^/),
        (I = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (v = /\\|'|\r|\n|\u2028|\u2029/g),
        (T = function (e) {
          return "\\" + I[e];
        }),
        (b = /^\s*(\w|\$)+\s*$/),
        (i.template = function (e, t, n) {
          !t && n && (t = n);
          var r,
            a = RegExp(
              [
                ((t = i.defaults({}, t, i.templateSettings)).escape || y)
                  .source,
                (t.interpolate || y).source,
                (t.evaluate || y).source,
              ].join("|") + "|$",
              "g"
            ),
            o = 0,
            u = "__p+='";
          e.replace(a, function (t, n, i, r, a) {
            return (
              (u += e.slice(o, a).replace(v, T)),
              (o = a + t.length),
              n
                ? (u += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : i
                ? (u += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                : r && (u += "';\n" + r + "\n__p+='"),
              t
            );
          }),
            (u += "';\n");
          var l = t.variable;
          if (l) {
            if (!b.test(l))
              throw Error("variable is not a bare identifier: " + l);
          } else (u = "with(obj||{}){\n" + u + "}\n"), (l = "obj");
          u =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            u +
            "return __p;\n";
          try {
            r = Function(t.variable || "obj", "_", u);
          } catch (e) {
            throw ((e.source = u), e);
          }
          var c = function (e) {
            return r.call(this, e, i);
          };
          return (c.source = "function(" + l + "){\n" + u + "}"), c;
        }),
        (e.exports = i);
    },
    9461: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            r = document,
            a = e("html"),
            o = e("body"),
            u = window.location,
            l = /PhantomJS/i.test(navigator.userAgent),
            c =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function s() {
            var n =
              r.fullScreen ||
              r.mozFullScreen ||
              r.webkitIsFullScreen ||
              r.msFullscreenElement ||
              !!r.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          function d() {
            return
            var e = o.children(".w-webflow-badge"),
              n = e.length && e.get(0) === t,
              r = i.env("editor");
            if (n) {
              r && e.remove();
              return;
            }
            e.length && e.remove(), r || o.append(t);
          }
          return (
            (n.ready = function () {
              var n,
                i,
                o,
                f = a.attr("data-wf-status"),
                p = a.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(p) && u.hostname !== p && (f = !0),
                f &&
                  !l &&
                  ((t =
                    t ||
                    ((n = e('<a class="w-webflow-badge"></a>').attr(
                      "href",
                      "https://webflow.com?utm_campaign=brandjs"
                    )),
                    (i = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
                      )
                      .attr("alt", "")
                      .css({ marginRight: "4px", width: "26px" })),
                    (o = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                      )
                      .attr("alt", "Made in Webflow")),
                    n.append(i, o),
                    n[0])),
                  d(),
                  setTimeout(d, 500),
                  e(r).off(c, s).on(c, s));
            }),
            n
          );
        })
      );
    },
    322: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (i.env("test") || i.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var r,
            a = e(window),
            o = e(document.documentElement),
            u = document.location,
            l = "hashchange",
            c =
              n.load ||
              function () {
                var t, n, i;
                (r = !0),
                  (window.WebflowEditor = !0),
                  a.off(l, d),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: o.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var i, r, a;
                          if (!t)
                            return void console.error(
                              "Could not load editor data"
                            );
                          (t.thirdPartyCookiesSupported = n),
                            (r =
                              (i = t.scriptPath).indexOf("//") >= 0
                                ? i
                                : p("https://editor-api.webflow.com" + i)),
                            (a = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: r,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(a, f);
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (i = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (E(n, i), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (E(n, i), t(!0));
                  }),
                  (n.onerror = function () {
                    E(n, i), t(!1);
                  }),
                  window.addEventListener("message", i, !1),
                  window.document.body.appendChild(n);
              },
            s = !1;
          try {
            s =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function d() {
            !r && /\?edit/.test(u.hash) && c();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function E(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return (
            s
              ? c()
              : u.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) ||
                  /\?edit$/.test(u.href)) &&
                c()
              : a.on(l, d).triggerHandler(l),
            {}
          );
        })
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      i = null,
                      r = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function a(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function o(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function u() {
                      t = !1;
                    }
                    function l() {
                      document.addEventListener("mousemove", c),
                        document.addEventListener("mousedown", c),
                        document.addEventListener("mouseup", c),
                        document.addEventListener("pointermove", c),
                        document.addEventListener("pointerdown", c),
                        document.addEventListener("pointerup", c),
                        document.addEventListener("touchmove", c),
                        document.addEventListener("touchstart", c),
                        document.addEventListener("touchend", c);
                    }
                    function c(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", c),
                        document.removeEventListener("mousedown", c),
                        document.removeEventListener("mouseup", c),
                        document.removeEventListener("pointermove", c),
                        document.removeEventListener("pointerdown", c),
                        document.removeEventListener("pointerup", c),
                        document.removeEventListener("touchmove", c),
                        document.removeEventListener("touchstart", c),
                        document.removeEventListener("touchend", c));
                    }
                    document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (a(e.activeElement) && o(e.activeElement), (t = !0));
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", u, !0),
                      document.addEventListener("pointerdown", u, !0),
                      document.addEventListener("touchstart", u, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), l());
                        },
                        !0
                      ),
                      l(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (a(e.target)) {
                            var n, i, u;
                            (t ||
                              ((i = (n = e.target).type),
                              ("INPUT" === (u = n.tagName) &&
                                r[i] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === u && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              o(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            a(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            (n = !0),
                              window.clearTimeout(i),
                              (i = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible"
                              ) && t.removeAttribute("data-wf-focus-visible");
                          }
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function r(n) {
            var i, r;
            (r = (i = n.target).tagName),
              ((/^a$/i.test(r) && null != i.href) ||
                (/^(button|textarea)$/i.test(r) && !0 !== i.disabled) ||
                (/^input$/i.test(r) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(i.type) &&
                  !i.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(r) &&
                  !Number.isNaN(Number.parseFloat(i.tabIndex))) ||
                /^audio$/i.test(r) ||
                (/^video$/i.test(r) && !0 === i.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var i = e.pop();
                    i.target.dispatchEvent(new MouseEvent(i.type, i));
                  }
                }, 0));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                i.env.safari &&
                (document.addEventListener("mousedown", r, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        i = [],
        r = ".w-ix",
        a = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, i) {
            i.__wf_intro ||
              ((i.__wf_intro = !0), t(i).triggerHandler(n.types.INTRO));
          },
          outro: function (e, i) {
            i.__wf_intro &&
              ((i.__wf_intro = null), t(i).triggerHandler(n.types.OUTRO));
          },
        };
      (n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + r, OUTRO: "w-ix-outro" + r }),
        (n.init = function () {
          for (var e = i.length, r = 0; r < e; r++) {
            var o = i[r];
            o[0](0, o[1]);
          }
          (i = []), t.extend(n.triggers, a);
        }),
        (n.async = function () {
          for (var e in a) {
            var t = a[e];
            a.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                i.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n);
    },
    5134: function (e, t, n) {
      "use strict";
      var i = n(7199);
      function r(e, t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
      }
      var a = window.jQuery,
        o = {},
        u = ".w-ix";
      (o.triggers = {}),
        (o.types = { INTRO: "w-ix-intro" + u, OUTRO: "w-ix-outro" + u }),
        a.extend(o.triggers, {
          reset: function (e, t) {
            i.triggers.reset(e, t);
          },
          intro: function (e, t) {
            i.triggers.intro(e, t), r(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            i.triggers.outro(e, t), r(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = o);
    },
    941: function (e, t, n) {
      "use strict";
      var i = n(3949),
        r = n(6011);
      r.setEnv(i.env),
        i.define(
          "ix2",
          (e.exports = function () {
            return r;
          })
        );
    },
    3949: function (e, t, n) {
      "use strict";
      var i,
        r,
        a = {},
        o = {},
        u = [],
        l = window.Webflow || [],
        c = window.jQuery,
        s = c(window),
        d = c(document),
        f = c.isFunction,
        p = (a._ = n(5756)),
        E = (a.tram = n(5487) && c.tram),
        g = !1,
        h = !1;
      function m(e) {
        a.env() &&
          (f(e.design) && s.on("__wf_design", e.design),
          f(e.preview) && s.on("__wf_preview", e.preview)),
          f(e.destroy) && s.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (g) return e.ready();
              p.contains(u, e.ready) || u.push(e.ready);
            })(e);
      }
      function y(e) {
        var t;
        f(e.design) && s.off("__wf_design", e.design),
          f(e.preview) && s.off("__wf_preview", e.preview),
          f(e.destroy) && s.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (u = p.filter(u, function (e) {
              return e !== t.ready;
            })));
      }
      (E.config.hideBackface = !1),
        (E.config.keepInherited = !0),
        (a.define = function (e, t, n) {
          o[e] && y(o[e]);
          var i = (o[e] = t(c, p, n) || {});
          return m(i), i;
        }),
        (a.require = function (e) {
          return o[e];
        }),
        (a.push = function (e) {
          if (g) {
            f(e) && e();
            return;
          }
          l.push(e);
        }),
        (a.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
              ? n && !t
              : "slug" === e
              ? n && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : n;
        });
      var I = navigator.userAgent.toLowerCase(),
        v = (a.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        T = (a.env.chrome =
          /chrome/.test(I) &&
          /Google/.test(navigator.vendor) &&
          parseInt(I.match(/chrome\/(\d+)\./)[1], 10)),
        b = (a.env.ios = /(ipod|iphone|ipad)/.test(I));
      (a.env.safari = /safari/.test(I) && !T && !b),
        v &&
          d.on("touchstart mousedown", function (e) {
            i = e.target;
          }),
        (a.validClick = v
          ? function (e) {
              return e === i || c.contains(e, i);
            }
          : function () {
              return !0;
            });
      var _ = "resize.webflow orientationchange.webflow load.webflow",
        O = "scroll.webflow " + _;
      function A(e, t) {
        var n = [],
          i = {};
        return (
          (i.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, i.up),
          (i.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (i.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          i
        );
      }
      function w(e) {
        f(e) && e();
      }
      function R() {
        r && (r.reject(), s.off("load", r.resolve)),
          (r = new c.Deferred()),
          s.on("load", r.resolve);
      }
      (a.resize = A(s, _)),
        (a.scroll = A(s, O)),
        (a.redraw = A()),
        (a.location = function (e) {
          window.location = e;
        }),
        a.env() && (a.location = function () {}),
        (a.ready = function () {
          (g = !0),
            h ? ((h = !1), p.each(o, m)) : p.each(u, w),
            p.each(l, w),
            a.resize.up();
        }),
        (a.load = function (e) {
          r.then(e);
        }),
        (a.destroy = function (e) {
          (e = e || {}),
            (h = !0),
            s.triggerHandler("__wf_destroy"),
            null != e.domready && (g = e.domready),
            p.each(o, y),
            a.resize.off(),
            a.scroll.off(),
            a.redraw.off(),
            (u = []),
            (l = []),
            "pending" === r.state() && R();
        }),
        c(a.ready),
        R(),
        (e.exports = window.Webflow = a);
    },
    7624: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            r,
            a,
            o = {},
            u = e(window),
            l = i.env(),
            c = window.location,
            s = document.createElement("a"),
            d = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function E() {
            var e = u.scrollTop(),
              n = u.height();
            t.each(r, function (t) {
              if (!t.link.attr("hreflang")) {
                var i = t.link,
                  r = t.sec,
                  a = r.offset().top,
                  o = r.outerHeight(),
                  u = 0.5 * n,
                  l = r.is(":visible") && a + o - u >= e && a + u <= e + n;
                t.active !== l && ((t.active = l), g(i, d, l));
              }
            });
          }
          function g(e, t, n) {
            var i = e.hasClass(t);
            (!n || !i) && (n || i) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (o.ready =
              o.design =
              o.preview =
                function () {
                  (n = l && i.env("design")),
                    (a = i.env("slug") || c.pathname || ""),
                    i.scroll.off(E),
                    (r = []);
                  for (var t = document.links, o = 0; o < t.length; ++o)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var i =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((s.href = i), !(i.indexOf(":") >= 0))) {
                          var o = e(t);
                          if (
                            s.hash.length > 1 &&
                            s.host + s.pathname === c.host + c.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var u = e(s.hash);
                            u.length && r.push({ link: o, sec: u, active: !1 });
                            return;
                          }
                          "#" !== i &&
                            "" !== i &&
                            g(
                              o,
                              d,
                              (!l && s.href === c.href) ||
                                i === a ||
                                (f.test(i) && p.test(a))
                            );
                        }
                      }
                    })(t[o]);
                  r.length && (i.scroll.on(E), E());
                }),
            o
          );
        })
      );
    },
    286: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            r = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            a = e(window),
            o = e(document),
            u = e(document.body),
            l =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            c = i.env("editor") ? ".w-editor-body" : "body",
            s =
              "header, " +
              c +
              " > .header, " +
              c +
              " > .w-nav:not([data-no-scroll])",
            d = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var E = /^#[a-zA-Z0-9][\w:.-]*$/;
          let g =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function h(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function m(t) {
            var o = t.currentTarget;
            if (
              !(
                i.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))
              )
            ) {
              var c =
                E.test(o.hash) && o.host + o.pathname === n.host + n.pathname
                  ? o.hash
                  : "";
              if ("" !== c) {
                var d,
                  f = e(c);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (d = c),
                  n.hash !== d &&
                    r &&
                    r.pushState &&
                    !(i.env.chrome && "file:" === n.protocol) &&
                    (r.state && r.state.hash) !== d &&
                    r.pushState({ hash: d }, "", d),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var i = a.scrollTop(),
                        r = (function (t) {
                          var n = e(s),
                            i =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            r = t.offset().top - i;
                          if ("mid" === t.data("scroll")) {
                            var o = a.height() - i,
                              u = t.outerHeight();
                            u < o && (r -= Math.round((o - u) / 2));
                          }
                          return r;
                        })(t);
                      if (i !== r) {
                        var o = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion"
                                ) ||
                              g.matches
                            )
                              return 0;
                            var i = 1;
                            return (
                              u.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(n) && n >= 0 && (i = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                i
                            );
                          })(t, i, r),
                          c = Date.now(),
                          d = function () {
                            var e,
                              t,
                              a,
                              u,
                              s,
                              f = Date.now() - c;
                            window.scroll(
                              0,
                              ((e = i),
                              (t = r),
                              (a = f) > (u = o)
                                ? t
                                : e +
                                  (t - e) *
                                    ((s = a / u) < 0.5
                                      ? 4 * s * s * s
                                      : (s - 1) * (2 * s - 2) * (2 * s - 2) +
                                        1))
                            ),
                              f <= o ? l(d) : "function" == typeof n && n();
                          };
                        l(d);
                      }
                    })(f, function () {
                      h(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        h(f, "remove");
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              o.on(n, f, m),
                o.on(e, d, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function i(t) {
            var i,
              r,
              a = !1,
              o = !1,
              u = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function l(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((a = !0),
                t ? ((o = !0), (i = t[0].clientX)) : (i = e.clientX),
                (r = i));
            }
            function c(t) {
              if (a) {
                if (o && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var i,
                  l,
                  c,
                  s,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  E = p - r;
                (r = p),
                  Math.abs(E) > u &&
                    n &&
                    "" === String(n()) &&
                    ((i = "swipe"),
                    (l = t),
                    (c = { direction: E > 0 ? "right" : "left" }),
                    (s = e.Event(i, { originalEvent: l })),
                    e(l.target).trigger(s, c),
                    d());
              }
            }
            function s(e) {
              if (a && ((a = !1), o && "mouseup" === e.type)) {
                e.preventDefault(), e.stopPropagation(), (o = !1);
                return;
              }
            }
            function d() {
              a = !1;
            }
            t.addEventListener("touchstart", l, !1),
              t.addEventListener("touchmove", c, !1),
              t.addEventListener("touchend", s, !1),
              t.addEventListener("touchcancel", d, !1),
              t.addEventListener("mousedown", l, !1),
              t.addEventListener("mousemove", c, !1),
              t.addEventListener("mouseup", s, !1),
              t.addEventListener("mouseout", d, !1),
              (this.destroy = function () {
                t.removeEventListener("touchstart", l, !1),
                  t.removeEventListener("touchmove", c, !1),
                  t.removeEventListener("touchend", s, !1),
                  t.removeEventListener("touchcancel", d, !1),
                  t.removeEventListener("mousedown", l, !1),
                  t.removeEventListener("mousemove", c, !1),
                  t.removeEventListener("mouseup", s, !1),
                  t.removeEventListener("mouseout", d, !1),
                  (t = null);
              });
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new i(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    9858: function (e, t, n) {
      "use strict";
      var i = n(3949),
        r = n(5134);
      let a = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          ESCAPE: 27,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35,
        },
        o = /^#[a-zA-Z0-9\-_]+$/;
      i.define(
        "dropdown",
        (e.exports = function (e, t) {
          var n,
            u,
            l = t.debounce,
            c = {},
            s = i.env(),
            d = !1,
            f = i.env.touch,
            p = ".w-dropdown",
            E = "w--open",
            g = r.triggers,
            h = "focusout" + p,
            m = "keydown" + p,
            y = "mouseenter" + p,
            I = "mousemove" + p,
            v = "mouseleave" + p,
            T = (f ? "click" : "mouseup") + p,
            b = "w-close" + p,
            _ = "setting" + p,
            O = e(document);
          function A() {
            (n = s && i.env("design")), (u = O.find(p)).each(w);
          }
          function w(t, r) {
            var u,
              c,
              d,
              f,
              g,
              I,
              v,
              A,
              w,
              F,
              P = e(r),
              M = e.data(r, p);
            M ||
              (M = e.data(r, p, {
                open: !1,
                el: P,
                config: {},
                selectedIdx: -1,
              })),
              (M.toggle = M.el.children(".w-dropdown-toggle")),
              (M.list = M.el.children(".w-dropdown-list")),
              (M.links = M.list.find("a:not(.w-dropdown .w-dropdown a)")),
              (M.complete =
                ((u = M),
                function () {
                  u.list.removeClass(E),
                    u.toggle.removeClass(E),
                    u.manageZ && u.el.css("z-index", "");
                })),
              (M.mouseLeave =
                ((c = M),
                function () {
                  (c.hovering = !1), c.links.is(":focus") || L(c);
                })),
              (M.mouseUpOutside =
                ((d = M).mouseUpOutside && O.off(T, d.mouseUpOutside),
                l(function (t) {
                  if (d.open) {
                    var n = e(t.target);
                    if (!n.closest(".w-dropdown-toggle").length) {
                      var r = -1 === e.inArray(d.el[0], n.parents(p)),
                        a = i.env("editor");
                      if (r) {
                        if (a) {
                          var o =
                              1 === n.parents().length &&
                              1 === n.parents("svg").length,
                            u = n.parents(
                              ".w-editor-bem-EditorHoverControls"
                            ).length;
                          if (o || u) return;
                        }
                        L(d);
                      }
                    }
                  }
                }))),
              (M.mouseMoveOutside =
                ((f = M),
                l(function (t) {
                  if (f.open) {
                    var n = e(t.target);
                    if (-1 === e.inArray(f.el[0], n.parents(p))) {
                      var i = n.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length,
                        r = n.parents(".w-editor-bem-RTToolbar").length,
                        a = e(".w-editor-bem-EditorOverlay"),
                        o =
                          a.find(".w-editor-edit-outline").length ||
                          a.find(".w-editor-bem-RTToolbar").length;
                      if (i || r || o) return;
                      (f.hovering = !1), L(f);
                    }
                  }
                }))),
              R(M);
            var D = M.toggle.attr("id"),
              k = M.list.attr("id");
            D || (D = "w-dropdown-toggle-" + t),
              k || (k = "w-dropdown-list-" + t),
              M.toggle.attr("id", D),
              M.toggle.attr("aria-controls", k),
              M.toggle.attr("aria-haspopup", "menu"),
              M.toggle.attr("aria-expanded", "false"),
              M.toggle
                .find(".w-icon-dropdown-toggle")
                .attr("aria-hidden", "true"),
              "BUTTON" !== M.toggle.prop("tagName") &&
                (M.toggle.attr("role", "button"),
                M.toggle.attr("tabindex") || M.toggle.attr("tabindex", "0")),
              M.list.attr("id", k),
              M.list.attr("aria-labelledby", D),
              M.links.each(function (e, t) {
                t.hasAttribute("tabindex") || t.setAttribute("tabindex", "0"),
                  o.test(t.hash) &&
                    t.addEventListener("click", L.bind(null, M));
              }),
              M.el.off(p),
              M.toggle.off(p),
              M.nav && M.nav.off(p);
            var x = N(M, !0);
            n &&
              M.el.on(
                _,
                ((g = M),
                function (e, t) {
                  (t = t || {}),
                    R(g),
                    !0 === t.open && C(g),
                    !1 === t.open && L(g, { immediate: !0 });
                })
              ),
              n ||
                (s && ((M.hovering = !1), L(M)),
                M.config.hover &&
                  M.toggle.on(
                    y,
                    ((I = M),
                    function () {
                      (I.hovering = !0), C(I);
                    })
                  ),
                M.el.on(b, x),
                M.el.on(
                  m,
                  ((v = M),
                  function (e) {
                    if (!n && v.open)
                      switch (
                        ((v.selectedIdx = v.links.index(
                          document.activeElement
                        )),
                        e.keyCode)
                      ) {
                        case a.HOME:
                          if (!v.open) return;
                          return (v.selectedIdx = 0), S(v), e.preventDefault();
                        case a.END:
                          if (!v.open) return;
                          return (
                            (v.selectedIdx = v.links.length - 1),
                            S(v),
                            e.preventDefault()
                          );
                        case a.ESCAPE:
                          return L(v), v.toggle.focus(), e.stopPropagation();
                        case a.ARROW_RIGHT:
                        case a.ARROW_DOWN:
                          return (
                            (v.selectedIdx = Math.min(
                              v.links.length - 1,
                              v.selectedIdx + 1
                            )),
                            S(v),
                            e.preventDefault()
                          );
                        case a.ARROW_LEFT:
                        case a.ARROW_UP:
                          return (
                            (v.selectedIdx = Math.max(-1, v.selectedIdx - 1)),
                            S(v),
                            e.preventDefault()
                          );
                      }
                  })
                ),
                M.el.on(
                  h,
                  ((A = M),
                  l(function (e) {
                    var { relatedTarget: t, target: n } = e,
                      i = A.el[0];
                    return (
                      i.contains(t) || i.contains(n) || L(A),
                      e.stopPropagation()
                    );
                  }))
                ),
                M.toggle.on(T, x),
                M.toggle.on(
                  m,
                  ((F = N((w = M), !0)),
                  function (e) {
                    if (!n) {
                      if (!w.open)
                        switch (e.keyCode) {
                          case a.ARROW_UP:
                          case a.ARROW_DOWN:
                            return e.stopPropagation();
                        }
                      switch (e.keyCode) {
                        case a.SPACE:
                        case a.ENTER:
                          return F(), e.stopPropagation(), e.preventDefault();
                      }
                    }
                  })
                ),
                (M.nav = M.el.closest(".w-nav")),
                M.nav.on(b, x));
          }
          function R(e) {
            var t = Number(e.el.css("z-index"));
            (e.manageZ = 900 === t || 901 === t),
              (e.config = {
                hover: "true" === e.el.attr("data-hover") && !f,
                delay: e.el.attr("data-delay"),
              });
          }
          function N(e, t) {
            return l(function (n) {
              if (e.open || (n && "w-close" === n.type))
                return L(e, { forceClose: t });
              C(e);
            });
          }
          function C(t) {
            if (!t.open) {
              (r = t.el[0]),
                u.each(function (t, n) {
                  var i = e(n);
                  i.is(r) || i.has(r).length || i.triggerHandler(b);
                }),
                (t.open = !0),
                t.list.addClass(E),
                t.toggle.addClass(E),
                t.toggle.attr("aria-expanded", "true"),
                g.intro(0, t.el[0]),
                i.redraw.up(),
                t.manageZ && t.el.css("z-index", 901);
              var r,
                a = i.env("editor");
              n || O.on(T, t.mouseUpOutside),
                t.hovering && !a && t.el.on(v, t.mouseLeave),
                t.hovering && a && O.on(I, t.mouseMoveOutside),
                window.clearTimeout(t.delayId);
            }
          }
          function L(e, { immediate: t, forceClose: n } = {}) {
            if (e.open && (!e.config.hover || !e.hovering || n)) {
              e.toggle.attr("aria-expanded", "false"), (e.open = !1);
              var i = e.config;
              if (
                (g.outro(0, e.el[0]),
                O.off(T, e.mouseUpOutside),
                O.off(I, e.mouseMoveOutside),
                e.el.off(v, e.mouseLeave),
                window.clearTimeout(e.delayId),
                !i.delay || t)
              )
                return e.complete();
              e.delayId = window.setTimeout(e.complete, i.delay);
            }
          }
          function S(e) {
            e.links[e.selectedIdx] && e.links[e.selectedIdx].focus();
          }
          return (
            (c.ready = A),
            (c.design = function () {
              d &&
                O.find(p).each(function (t, n) {
                  e(n).triggerHandler(b);
                }),
                (d = !1),
                A();
            }),
            (c.preview = function () {
              (d = !0), A();
            }),
            c
          );
        })
      );
    },
    1655: function (e, t, n) {
      "use strict";
      var i = n(3949),
        r = n(5134);
      let a = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      i.define(
        "navbar",
        (e.exports = function (e, t) {
          var n,
            o,
            u,
            l,
            c = {},
            s = e.tram,
            d = e(window),
            f = e(document),
            p = t.debounce,
            E = i.env(),
            g = ".w-nav",
            h = "w--open",
            m = "w--nav-dropdown-open",
            y = "w--nav-dropdown-toggle-open",
            I = "w--nav-dropdown-list-open",
            v = "w--nav-link-open",
            T = r.triggers,
            b = e();
          function _() {
            i.resize.off(O);
          }
          function O() {
            o.each(M);
          }
          function A(n, i) {
            var r,
              o,
              c,
              s,
              p,
              E = e(i),
              h = e.data(i, g);
            h ||
              (h = e.data(i, g, {
                open: !1,
                el: E,
                config: {},
                selectedIdx: -1,
              })),
              (h.menu = E.find(".w-nav-menu")),
              (h.links = h.menu.find(".w-nav-link")),
              (h.dropdowns = h.menu.find(".w-dropdown")),
              (h.dropdownToggle = h.menu.find(".w-dropdown-toggle")),
              (h.dropdownList = h.menu.find(".w-dropdown-list")),
              (h.button = E.find(".w-nav-button")),
              (h.container = E.find(".w-container")),
              (h.overlayContainerId = "w-nav-overlay-" + n),
              (h.outside =
                ((r = h).outside && f.off("click" + g, r.outside),
                function (t) {
                  var n = e(t.target);
                  (l && n.closest(".w-editor-bem-EditorOverlay").length) ||
                    P(r, n);
                }));
            var m = E.find(".w-nav-brand");
            m &&
              "/" === m.attr("href") &&
              null == m.attr("aria-label") &&
              m.attr("aria-label", "home"),
              h.button.attr("style", "-webkit-user-select: text;"),
              null == h.button.attr("aria-label") &&
                h.button.attr("aria-label", "menu"),
              h.button.attr("role", "button"),
              h.button.attr("tabindex", "0"),
              h.button.attr("aria-controls", h.overlayContainerId),
              h.button.attr("aria-haspopup", "menu"),
              h.button.attr("aria-expanded", "false"),
              h.el.off(g),
              h.button.off(g),
              h.menu.off(g),
              N(h),
              u
                ? (R(h),
                  h.el.on(
                    "setting" + g,
                    ((o = h),
                    function (e, n) {
                      n = n || {};
                      var i = d.width();
                      N(o),
                        !0 === n.open && V(o, !0),
                        !1 === n.open && U(o, !0),
                        o.open &&
                          t.defer(function () {
                            i !== d.width() && L(o);
                          });
                    })
                  ))
                : ((c = h).overlay ||
                    ((c.overlay = e(
                      '<div class="w-nav-overlay" data-wf-ignore />'
                    ).appendTo(c.el)),
                    c.overlay.attr("id", c.overlayContainerId),
                    (c.parent = c.menu.parent()),
                    U(c, !0)),
                  h.button.on("click" + g, S(h)),
                  h.menu.on("click" + g, "a", F(h)),
                  h.button.on(
                    "keydown" + g,
                    ((s = h),
                    function (e) {
                      switch (e.keyCode) {
                        case a.SPACE:
                        case a.ENTER:
                          return (
                            S(s)(), e.preventDefault(), e.stopPropagation()
                          );
                        case a.ESCAPE:
                          return U(s), e.preventDefault(), e.stopPropagation();
                        case a.ARROW_RIGHT:
                        case a.ARROW_DOWN:
                        case a.HOME:
                        case a.END:
                          if (!s.open)
                            return e.preventDefault(), e.stopPropagation();
                          return (
                            e.keyCode === a.END
                              ? (s.selectedIdx = s.links.length - 1)
                              : (s.selectedIdx = 0),
                            C(s),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                      }
                    })
                  ),
                  h.el.on(
                    "keydown" + g,
                    ((p = h),
                    function (e) {
                      if (p.open)
                        switch (
                          ((p.selectedIdx = p.links.index(
                            document.activeElement
                          )),
                          e.keyCode)
                        ) {
                          case a.HOME:
                          case a.END:
                            return (
                              e.keyCode === a.END
                                ? (p.selectedIdx = p.links.length - 1)
                                : (p.selectedIdx = 0),
                              C(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case a.ESCAPE:
                            return (
                              U(p),
                              p.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case a.ARROW_LEFT:
                          case a.ARROW_UP:
                            return (
                              (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                              C(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case a.ARROW_RIGHT:
                          case a.ARROW_DOWN:
                            return (
                              (p.selectedIdx = Math.min(
                                p.links.length - 1,
                                p.selectedIdx + 1
                              )),
                              C(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    })
                  )),
              M(n, i);
          }
          function w(t, n) {
            var i = e.data(n, g);
            i && (R(i), e.removeData(n, g));
          }
          function R(e) {
            e.overlay && (U(e, !0), e.overlay.remove(), (e.overlay = null));
          }
          function N(e) {
            var n = {},
              i = e.config || {},
              r = (n.animation = e.el.attr("data-animation") || "default");
            (n.animOver = /^over/.test(r)),
              (n.animDirect = /left$/.test(r) ? -1 : 1),
              i.animation !== r && e.open && t.defer(L, e),
              (n.easing = e.el.attr("data-easing") || "ease"),
              (n.easing2 = e.el.attr("data-easing2") || "ease");
            var a = e.el.attr("data-duration");
            (n.duration = null != a ? Number(a) : 400),
              (n.docHeight = e.el.attr("data-doc-height")),
              (e.config = n);
          }
          function C(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              t.focus(), F(t);
            }
          }
          function L(e) {
            e.open && (U(e, !0), V(e, !0));
          }
          function S(e) {
            return p(function () {
              e.open ? U(e) : V(e);
            });
          }
          function F(t) {
            return function (n) {
              var r = e(this).attr("href");
              if (!i.validClick(n.currentTarget))
                return void n.preventDefault();
              r && 0 === r.indexOf("#") && t.open && U(t);
            };
          }
          (c.ready =
            c.design =
            c.preview =
              function () {
                (u = E && i.env("design")),
                  (l = i.env("editor")),
                  (n = e(document.body)),
                  (o = f.find(g)).length && (o.each(A), _(), i.resize.on(O));
              }),
            (c.destroy = function () {
              (b = e()), _(), o && o.length && o.each(w);
            });
          var P = p(function (e, t) {
            if (e.open) {
              var n = t.closest(".w-nav-menu");
              e.menu.is(n) || U(e);
            }
          });
          function M(t, n) {
            var i = e.data(n, g),
              r = (i.collapsed = "none" !== i.button.css("display"));
            if ((!i.open || r || u || U(i, !0), i.container.length)) {
              var a,
                o =
                  ("none" === (a = i.container.css(D)) && (a = ""),
                  function (t, n) {
                    (n = e(n)).css(D, ""), "none" === n.css(D) && n.css(D, a);
                  });
              i.links.each(o), i.dropdowns.each(o);
            }
            i.open && G(i);
          }
          var D = "max-width";
          function k(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function x(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function V(e, t) {
            if (!e.open) {
              (e.open = !0),
                e.menu.each(k),
                e.links.addClass(v),
                e.dropdowns.addClass(m),
                e.dropdownToggle.addClass(y),
                e.dropdownList.addClass(I),
                e.button.addClass(h);
              var n = e.config;
              ("none" === n.animation ||
                !s.support.transform ||
                n.duration <= 0) &&
                (t = !0);
              var r = G(e),
                a = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                l = e.el.height(),
                c = e.el[0];
              if (
                (M(0, c),
                T.intro(0, c),
                i.redraw.up(),
                u || f.on("click" + g, e.outside),
                t)
              )
                return void p();
              var d = "transform " + n.duration + "ms " + n.easing;
              if (
                (e.overlay &&
                  ((b = e.menu.prev()), e.overlay.show().append(e.menu)),
                n.animOver)
              ) {
                s(e.menu)
                  .add(d)
                  .set({ x: n.animDirect * o, height: r })
                  .start({ x: 0 })
                  .then(p),
                  e.overlay && e.overlay.width(o);
                return;
              }
              s(e.menu)
                .add(d)
                .set({ y: -(l + a) })
                .start({ y: 0 })
                .then(p);
            }
            function p() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function G(e) {
            var t = e.config,
              i = t.docHeight ? f.height() : n.height();
            return (
              t.animOver
                ? e.menu.height(i)
                : "fixed" !== e.el.css("position") &&
                  (i -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(i),
              i
            );
          }
          function U(e, t) {
            if (e.open) {
              (e.open = !1), e.button.removeClass(h);
              var n = e.config;
              if (
                (("none" === n.animation ||
                  !s.support.transform ||
                  n.duration <= 0) &&
                  (t = !0),
                T.outro(0, e.el[0]),
                f.off("click" + g, e.outside),
                t)
              ) {
                s(e.menu).stop(), u();
                return;
              }
              var i = "transform " + n.duration + "ms " + n.easing2,
                r = e.menu.outerHeight(!0),
                a = e.menu.outerWidth(!0),
                o = e.el.height();
              if (n.animOver)
                return void s(e.menu)
                  .add(i)
                  .start({ x: a * n.animDirect })
                  .then(u);
              s(e.menu)
                .add(i)
                .start({ y: -(o + r) })
                .then(u);
            }
            function u() {
              e.menu.height(""),
                s(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(x),
                e.links.removeClass(v),
                e.dropdowns.removeClass(m),
                e.dropdownToggle.removeClass(y),
                e.dropdownList.removeClass(I),
                e.overlay &&
                  e.overlay.children().length &&
                  (b.length
                    ? e.menu.insertAfter(b)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false");
            }
          }
          return c;
        })
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        actionListPlaybackChanged: function () {
          return H;
        },
        animationFrameChanged: function () {
          return G;
        },
        clearRequested: function () {
          return D;
        },
        elementStateChanged: function () {
          return W;
        },
        eventListenerAdded: function () {
          return k;
        },
        eventStateChanged: function () {
          return V;
        },
        instanceAdded: function () {
          return B;
        },
        instanceRemoved: function () {
          return X;
        },
        instanceStarted: function () {
          return j;
        },
        mediaQueriesDefined: function () {
          return Y;
        },
        parameterChanged: function () {
          return U;
        },
        playbackRequested: function () {
          return P;
        },
        previewRequested: function () {
          return F;
        },
        rawDataImported: function () {
          return N;
        },
        sessionInitialized: function () {
          return C;
        },
        sessionStarted: function () {
          return L;
        },
        sessionStopped: function () {
          return S;
        },
        stopRequested: function () {
          return M;
        },
        testFrameRendered: function () {
          return x;
        },
        viewportWidthChanged: function () {
          return z;
        },
      };
      for (var r in i)
        Object.defineProperty(t, r, { enumerable: !0, get: i[r] });
      let a = n(7087),
        o = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: u,
          IX2_SESSION_INITIALIZED: l,
          IX2_SESSION_STARTED: c,
          IX2_SESSION_STOPPED: s,
          IX2_PREVIEW_REQUESTED: d,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: E,
          IX2_EVENT_LISTENER_ADDED: g,
          IX2_TEST_FRAME_RENDERED: h,
          IX2_EVENT_STATE_CHANGED: m,
          IX2_ANIMATION_FRAME_CHANGED: y,
          IX2_PARAMETER_CHANGED: I,
          IX2_INSTANCE_ADDED: v,
          IX2_INSTANCE_STARTED: T,
          IX2_INSTANCE_REMOVED: b,
          IX2_ELEMENT_STATE_CHANGED: _,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: O,
          IX2_VIEWPORT_WIDTH_CHANGED: A,
          IX2_MEDIA_QUERIES_DEFINED: w,
        } = a.IX2EngineActionTypes,
        { reifyState: R } = o.IX2VanillaUtils,
        N = (e) => ({ type: u, payload: { ...R(e) } }),
        C = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: l,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        L = () => ({ type: c }),
        S = () => ({ type: s }),
        F = ({ rawData: e, defer: t }) => ({
          type: d,
          payload: { defer: t, rawData: e },
        }),
        P = ({
          actionTypeId: e = a.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: i,
          allowEvents: r,
          immediate: o,
          testManual: u,
          verbose: l,
          rawData: c,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: u,
            eventId: i,
            allowEvents: r,
            immediate: o,
            verbose: l,
            rawData: c,
          },
        }),
        M = (e) => ({ type: p, payload: { actionListId: e } }),
        D = () => ({ type: E }),
        k = (e, t) => ({ type: g, payload: { target: e, listenerParams: t } }),
        x = (e = 1) => ({ type: h, payload: { step: e } }),
        V = (e, t) => ({ type: m, payload: { stateKey: e, newState: t } }),
        G = (e, t) => ({ type: y, payload: { now: e, parameters: t } }),
        U = (e, t) => ({ type: I, payload: { key: e, value: t } }),
        B = (e) => ({ type: v, payload: { ...e } }),
        j = (e, t) => ({ type: T, payload: { instanceId: e, time: t } }),
        X = (e) => ({ type: b, payload: { instanceId: e } }),
        W = (e, t, n, i) => ({
          type: _,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: i },
        }),
        H = ({ actionListId: e, isPlaying: t }) => ({
          type: O,
          payload: { actionListId: e, isPlaying: t },
        }),
        z = ({ width: e, mediaQueries: t }) => ({
          type: A,
          payload: { width: e, mediaQueries: t },
        }),
        Y = () => ({ type: w });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        r = {
          actions: function () {
            return c;
          },
          destroy: function () {
            return E;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return d;
          },
        };
      for (var a in r)
        Object.defineProperty(t, a, { enumerable: !0, get: r[a] });
      let o = n(9516),
        u = (i = n(7243)) && i.__esModule ? i : { default: i },
        l = n(1970),
        c = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, a, o)
                : (i[a] = e[a]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(3946));
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      let d = (0, o.createStore)(u.default);
      function f(e) {
        e() && (0, l.observeRequests)(d);
      }
      function p(e) {
        E(), (0, l.startEngine)({ store: d, rawData: e, allowEvents: !0 });
      }
      function E() {
        (0, l.stopEngine)(d);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        elementContains: function () {
          return I;
        },
        getChildElements: function () {
          return T;
        },
        getClosestElement: function () {
          return _;
        },
        getProperty: function () {
          return E;
        },
        getQuerySelector: function () {
          return h;
        },
        getRefType: function () {
          return O;
        },
        getSiblingElements: function () {
          return b;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return m;
        },
        isSiblingNode: function () {
          return v;
        },
        matchSelector: function () {
          return g;
        },
        queryDocument: function () {
          return y;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var r in i)
        Object.defineProperty(t, r, { enumerable: !0, get: i[r] });
      let a = n(9468),
        o = n(7087),
        { ELEMENT_MATCHES: u } = a.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: l,
          HTML_ELEMENT: c,
          PLAIN_OBJECT: s,
          WF_PAGE: d,
        } = o.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function E(e, t) {
        return e[t];
      }
      function g(e) {
        return (t) => t[u](e);
      }
      function h({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(l)) {
            let n = e.split(l),
              i = n[0];
            if (((t = n[1]), i !== document.documentElement.getAttribute(d)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function m(e) {
        return null == e || e === document.documentElement.getAttribute(d)
          ? document
          : null;
      }
      function y(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function I(e, t) {
        return e.contains(t);
      }
      function v(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function T(e) {
        let t = [];
        for (let n = 0, { length: i } = e || []; n < i; n++) {
          let { children: i } = e[n],
            { length: r } = i;
          if (r) for (let e = 0; e < r; e++) t.push(i[e]);
        }
        return t;
      }
      function b(e = []) {
        let t = [],
          n = [];
        for (let i = 0, { length: r } = e; i < r; i++) {
          let { parentNode: r } = e[i];
          if (!r || !r.children || !r.children.length || -1 !== n.indexOf(r))
            continue;
          n.push(r);
          let a = r.firstElementChild;
          for (; null != a; )
            -1 === e.indexOf(a) && t.push(a), (a = a.nextElementSibling);
        }
        return t;
      }
      let _ = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[u] && n[u](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function O(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? c
            : s
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return eE;
        },
        startEngine: function () {
          return ei;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return er;
        },
      };
      for (var r in i)
        Object.defineProperty(t, r, { enumerable: !0, get: i[r] });
      let a = y(n(9777)),
        o = y(n(4738)),
        u = y(n(4659)),
        l = y(n(3452)),
        c = y(n(6633)),
        s = y(n(3729)),
        d = y(n(2397)),
        f = y(n(5082)),
        p = n(7087),
        E = n(9468),
        g = n(3946),
        h = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = I(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, a, o)
                : (i[a] = e[a]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(5012)),
        m = y(n(8955));
      function y(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function I(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (I = function (e) {
          return e ? n : t;
        })(e);
      }
      let v = Object.keys(p.QuickEffectIds),
        T = (e) => v.includes(e),
        {
          COLON_DELIMITER: b,
          BOUNDARY_SELECTOR: _,
          HTML_ELEMENT: O,
          RENDER_GENERAL: A,
          W_MOD_IX: w,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: R,
          getElementId: N,
          getDestinationValues: C,
          observeStore: L,
          getInstanceId: S,
          renderHTMLElement: F,
          clearAllStyles: P,
          getMaxDurationItemIndex: M,
          getComputedStyle: D,
          getInstanceOrigin: k,
          reduceListToGroup: x,
          shouldNamespaceEventParameter: V,
          getNamespacedParameterId: G,
          shouldAllowMediaQuery: U,
          cleanupHTMLElement: B,
          clearObjectCache: j,
          stringifyTarget: X,
          mediaQueriesEqual: W,
          shallowEqual: H,
        } = E.IX2VanillaUtils,
        {
          isPluginType: z,
          createPluginInstance: Y,
          getPluginDuration: $,
        } = E.IX2VanillaPlugins,
        Q = navigator.userAgent,
        q = Q.match(/iPad/i) || Q.match(/iPhone/);
      function K(e) {
        L({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          L({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          L({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          L({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en });
      }
      function Z({ rawData: e, defer: t }, n) {
        let i = () => {
          ei({ store: n, rawData: e, allowEvents: !0 }), J();
        };
        t ? setTimeout(i, 0) : i();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: i,
            actionItemId: r,
            eventId: a,
            allowEvents: o,
            immediate: u,
            testManual: l,
            verbose: c = !0,
          } = e,
          { rawData: s } = e;
        if (i && r && s && u) {
          let e = s.actionLists[i];
          e && (s = x({ actionList: e, actionItemId: r, rawData: s }));
        }
        if (
          (ei({ store: t, rawData: s, allowEvents: o, testManual: l }),
          (i && n === p.ActionTypeConsts.GENERAL_START_ACTION) || T(n))
        ) {
          ep({ store: t, actionListId: i }),
            ed({ store: t, actionListId: i, eventId: a });
          let e = eE({
            store: t,
            eventId: a,
            actionListId: i,
            immediate: u,
            verbose: c,
          });
          c &&
            e &&
            t.dispatch(
              (0, g.actionListPlaybackChanged)({
                actionListId: i,
                isPlaying: !u,
              })
            );
        }
      }
      function et({ actionListId: e }, t) {
        e ? ep({ store: t, actionListId: e }) : ef({ store: t }), er(t);
      }
      function en(e, t) {
        er(t), P({ store: t, elementApi: h });
      }
      function ei({ store: e, rawData: t, allowEvents: n, testManual: i }) {
        let { ixSession: r } = e.getState();
        if ((t && e.dispatch((0, g.rawDataImported)(t)), !r.active)) {
          (e.dispatch(
            (0, g.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(_),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              eu(e),
                (0, d.default)(n, (t, n) => {
                  let i = m.default[n];
                  if (!i)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!q) return;
                      let t = {},
                        n = "";
                      for (let i in e) {
                        let { eventTypeId: r, target: a } = e[i],
                          o = h.getQuerySelector(a);
                        t[o] ||
                          ((r === p.EventTypeConsts.MOUSE_CLICK ||
                            r === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[o] = !0),
                            (n +=
                              o +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        (e.textContent = n), document.body.appendChild(e);
                      }
                    })(n);
                    let { types: i, handler: r } = e,
                      { ixData: l } = t.getState(),
                      { actionLists: c } = l,
                      s = el(n, es);
                    if (!(0, u.default)(s)) return;
                    (0, d.default)(s, (e, i) => {
                      let r = n[i],
                        {
                          action: u,
                          id: s,
                          mediaQueries: d = l.mediaQueryKeys,
                        } = r,
                        { actionListId: f } = u.config;
                      W(d, l.mediaQueryKeys) ||
                        t.dispatch((0, g.mediaQueriesDefined)()),
                        u.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(r.config)
                            ? r.config
                            : [r.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: i } = n,
                              r = (0, o.default)(
                                c,
                                `${f}.continuousParameterGroups`,
                                []
                              ),
                              u = (0, a.default)(r, ({ id: e }) => e === i),
                              l = (n.smoothing || 0) / 100,
                              d = (n.restingState || 0) / 100;
                            u &&
                              e.forEach((e, i) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: i,
                                  eventConfig: r,
                                  actionListId: a,
                                  parameterGroup: u,
                                  smoothing: l,
                                  restingValue: c,
                                }) {
                                  let { ixData: s, ixSession: d } =
                                      e.getState(),
                                    { events: f } = s,
                                    E = f[i],
                                    { eventTypeId: g } = E,
                                    m = {},
                                    y = {},
                                    I = [],
                                    { continuousActionGroups: v } = u,
                                    { id: T } = u;
                                  V(g, r) && (T = G(t, T));
                                  let O =
                                    d.hasBoundaryNodes && n
                                      ? h.getClosestElement(n, _)
                                      : null;
                                  v.forEach((e) => {
                                    let { keyframe: t, actionItems: i } = e;
                                    i.forEach((e) => {
                                      let { actionTypeId: i } = e,
                                        { target: r } = e.config;
                                      if (!r) return;
                                      let a = r.boundaryMode ? O : null,
                                        o = X(r) + b + i;
                                      if (
                                        ((y[o] = (function (e = [], t, n) {
                                          let i,
                                            r = [...e];
                                          return (
                                            r.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((i = n), !0)
                                            ),
                                            null == i &&
                                              ((i = r.length),
                                              r.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            r[i].actionItems.push(n),
                                            r
                                          );
                                        })(y[o], t, e)),
                                        !m[o])
                                      ) {
                                        m[o] = !0;
                                        let { config: t } = e;
                                        R({
                                          config: t,
                                          event: E,
                                          eventTarget: n,
                                          elementRoot: a,
                                          elementApi: h,
                                        }).forEach((e) => {
                                          I.push({ element: e, key: o });
                                        });
                                      }
                                    });
                                  }),
                                    I.forEach(({ element: t, key: n }) => {
                                      let r = y[n],
                                        u = (0, o.default)(
                                          r,
                                          "[0].actionItems[0]",
                                          {}
                                        ),
                                        { actionTypeId: s } = u,
                                        d = (
                                          s === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                u.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : z(s)
                                        )
                                          ? Y(s)?.(t, u)
                                          : null,
                                        f = C(
                                          {
                                            element: t,
                                            actionItem: u,
                                            elementApi: h,
                                          },
                                          d
                                        );
                                      eg({
                                        store: e,
                                        element: t,
                                        eventId: i,
                                        actionListId: a,
                                        actionItem: u,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: T,
                                        actionGroups: r,
                                        smoothing: l,
                                        restingValue: c,
                                        pluginInstance: d,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: s + b + i,
                                  eventTarget: e,
                                  eventId: s,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: u,
                                  smoothing: l,
                                  restingValue: d,
                                });
                              });
                          }),
                        (u.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          T(u.actionTypeId)) &&
                          ed({ store: t, actionListId: f, eventId: s });
                    });
                    let E = (e) => {
                        let { ixSession: i } = t.getState();
                        ec(s, (a, o, u) => {
                          let c = n[o],
                            s = i.eventState[u],
                            { action: d, mediaQueries: f = l.mediaQueryKeys } =
                              c;
                          if (!U(f, i.mediaQueryKey)) return;
                          let E = (n = {}) => {
                            let i = r(
                              {
                                store: t,
                                element: a,
                                event: c,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: u,
                              },
                              s
                            );
                            H(i, s) ||
                              t.dispatch((0, g.eventStateChanged)(u, i));
                          };
                          d.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(c.config)
                                ? c.config
                                : [c.config]
                              ).forEach(E)
                            : E();
                        });
                      },
                      m = (0, f.default)(E, 12),
                      y = ({ target: e = document, types: n, throttle: i }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let r = i ? m : E;
                            e.addEventListener(n, r),
                              t.dispatch((0, g.eventListenerAdded)(e, [n, r]));
                          });
                      };
                    Array.isArray(i)
                      ? i.forEach(y)
                      : "string" == typeof i && y(e);
                  })({ logic: i, store: e, events: t });
                });
              let { ixSession: i } = e.getState();
              i.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    eu(e);
                  };
                  eo.forEach((n) => {
                    window.addEventListener(n, t),
                      e.dispatch((0, g.eventListenerAdded)(window, [n, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(w) && (e.className += ` ${w}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              L({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  er(e),
                    P({ store: e, elementApi: h }),
                    ei({ store: e, allowEvents: !0 }),
                    J();
                },
              }));
          e.dispatch((0, g.sessionStarted)()),
            (function (e, t) {
              let n = (i) => {
                let { ixSession: r, ixParameters: a } = e.getState();
                if (r.active)
                  if ((e.dispatch((0, g.animationFrameChanged)(i, a)), t)) {
                    let t = L({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        n(e), t();
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, i);
        }
      }
      function er(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          n.forEach(ea), j(), e.dispatch((0, g.sessionStopped)());
        }
      }
      function ea({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let eo = ["resize", "orientationchange"];
      function eu(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          i = window.innerWidth;
        if (i !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, g.viewportWidthChanged)({ width: i, mediaQueries: t })
          );
        }
      }
      let el = (e, t) => (0, l.default)((0, s.default)(e, t), c.default),
        ec = (e, t) => {
          (0, d.default)(e, (e, n) => {
            e.forEach((e, i) => {
              t(e, n, n + b + i);
            });
          });
        },
        es = (e) =>
          R({
            config: { target: e.target, targets: e.targets },
            elementApi: h,
          });
      function ed({ store: e, actionListId: t, eventId: n }) {
        let { ixData: i, ixSession: r } = e.getState(),
          { actionLists: a, events: u } = i,
          l = u[n],
          c = a[t];
        if (c && c.useFirstGroupAsInitialState) {
          let a = (0, o.default)(c, "actionItemGroups[0].actionItems", []);
          if (
            !U(
              (0, o.default)(l, "mediaQueries", i.mediaQueryKeys),
              r.mediaQueryKey
            )
          )
            return;
          a.forEach((i) => {
            let { config: r, actionTypeId: a } = i,
              o = R({
                config:
                  r?.target?.useEventTarget === !0 &&
                  r?.target?.objectId == null
                    ? { target: l.target, targets: l.targets }
                    : r,
                event: l,
                elementApi: h,
              }),
              u = z(a);
            o.forEach((r) => {
              let o = u ? Y(a)?.(r, i) : null;
              eg({
                destination: C({ element: r, actionItem: i, elementApi: h }, o),
                immediate: !0,
                store: e,
                element: r,
                eventId: n,
                actionItem: i,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, d.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: i } = t;
            eh(t, e),
              i &&
                e.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: r,
      }) {
        let { ixInstances: a, ixSession: u } = e.getState(),
          l = u.hasBoundaryNodes && n ? h.getClosestElement(n, _) : null;
        (0, d.default)(a, (n) => {
          let a = (0, o.default)(n, "actionItem.config.target.boundaryMode"),
            u = !i || n.eventStateKey === i;
          if (n.actionListId === r && n.eventId === t && u) {
            if (l && a && !h.elementContains(l, n.element)) return;
            eh(n, e),
              n.verbose &&
                e.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: r,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: r,
        groupIndex: a = 0,
        immediate: u,
        verbose: l,
      }) {
        let { ixData: c, ixSession: s } = e.getState(),
          { events: d } = c,
          f = d[t] || {},
          { mediaQueries: p = c.mediaQueryKeys } = f,
          { actionItemGroups: E, useFirstGroupAsInitialState: g } = (0,
          o.default)(c, `actionLists.${r}`, {});
        if (!E || !E.length) return !1;
        a >= E.length && (0, o.default)(f, "config.loop") && (a = 0),
          0 === a && g && a++;
        let m =
            (0 === a || (1 === a && g)) && T(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          y = (0, o.default)(E, [a, "actionItems"], []);
        if (!y.length || !U(p, s.mediaQueryKey)) return !1;
        let I = s.hasBoundaryNodes && n ? h.getClosestElement(n, _) : null,
          v = M(y),
          b = !1;
        return (
          y.forEach((o, c) => {
            let { config: s, actionTypeId: d } = o,
              p = z(d),
              { target: E } = s;
            E &&
              R({
                config: s,
                event: f,
                eventTarget: n,
                elementRoot: E.boundaryMode ? I : null,
                elementApi: h,
              }).forEach((s, f) => {
                let E = p ? Y(d)?.(s, o) : null,
                  g = p ? $(d)(s, o) : null;
                b = !0;
                let y = D({ element: s, actionItem: o }),
                  I = C({ element: s, actionItem: o, elementApi: h }, E);
                eg({
                  store: e,
                  element: s,
                  actionItem: o,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: i,
                  actionListId: r,
                  groupIndex: a,
                  isCarrier: v === c && 0 === f,
                  computedStyle: y,
                  destination: I,
                  immediate: u,
                  verbose: l,
                  pluginInstance: E,
                  pluginDuration: g,
                  instanceDelay: m,
                });
              });
          }),
          b
        );
      }
      function eg(e) {
        let t,
          { store: n, computedStyle: i, ...r } = e,
          {
            element: a,
            actionItem: o,
            immediate: u,
            pluginInstance: l,
            continuous: c,
            restingValue: s,
            eventId: d,
          } = r,
          f = S(),
          { ixElements: E, ixSession: m, ixData: y } = n.getState(),
          I = N(E, a),
          { refState: v } = E[I] || {},
          T = h.getRefType(a),
          b = m.reducedMotion && p.ReducedMotionTypes[o.actionTypeId];
        if (b && c)
          switch (y.events[d]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = s;
              break;
            default:
              t = 0.5;
          }
        let _ = k(a, v, i, o, h, l);
        if (
          (n.dispatch(
            (0, g.instanceAdded)({
              instanceId: f,
              elementId: I,
              origin: _,
              refType: T,
              skipMotion: b,
              skipToValue: t,
              ...r,
            })
          ),
          em(document.body, "ix2-animation-started", f),
          u)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            e.dispatch((0, g.instanceStarted)(t, 0)),
              e.dispatch((0, g.animationFrameChanged)(performance.now(), n));
            let { ixInstances: i } = e.getState();
            ey(i[t], e);
          })(n, f);
        L({ store: n, select: ({ ixInstances: e }) => e[f], onChange: ey }),
          c || n.dispatch((0, g.instanceStarted)(f, m.tick));
      }
      function eh(e, t) {
        em(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: i } = e,
          { ixElements: r } = t.getState(),
          { ref: a, refType: o } = r[n] || {};
        o === O && B(a, i, h), t.dispatch((0, g.instanceRemoved)(e.id));
      }
      function em(e, t, n) {
        let i = document.createEvent("CustomEvent");
        i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i);
      }
      function ey(e, t) {
        let {
            active: n,
            continuous: i,
            complete: r,
            elementId: a,
            actionItem: o,
            actionTypeId: u,
            renderType: l,
            current: c,
            groupIndex: s,
            eventId: d,
            eventTarget: f,
            eventStateKey: p,
            actionListId: E,
            isCarrier: m,
            styleProp: y,
            verbose: I,
            pluginInstance: v,
          } = e,
          { ixData: T, ixSession: b } = t.getState(),
          { events: _ } = T,
          { mediaQueries: w = T.mediaQueryKeys } = _ && _[d] ? _[d] : {};
        if (U(w, b.mediaQueryKey) && (i || n || r)) {
          if (c || (l === A && r)) {
            t.dispatch((0, g.elementStateChanged)(a, u, c, o));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: i, refState: r } = e[a] || {},
              s = r && r[u];
            (i === O || z(u)) && F(n, r, s, d, o, y, h, l, v);
          }
          if (r) {
            if (m) {
              let e = eE({
                store: t,
                eventId: d,
                eventTarget: f,
                eventStateKey: p,
                actionListId: E,
                groupIndex: s + 1,
                verbose: I,
              });
              I &&
                !e &&
                t.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: E,
                    isPlaying: !1,
                  })
                );
            }
            eh(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let i;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        });
      let r = d(n(5801)),
        a = d(n(4738)),
        o = d(n(3789)),
        u = n(7087),
        l = n(1970),
        c = n(3946),
        s = n(9468);
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: E,
          MOUSE_UP: g,
          MOUSE_OVER: h,
          MOUSE_OUT: m,
          DROPDOWN_CLOSE: y,
          DROPDOWN_OPEN: I,
          SLIDER_ACTIVE: v,
          SLIDER_INACTIVE: T,
          TAB_ACTIVE: b,
          TAB_INACTIVE: _,
          NAVBAR_CLOSE: O,
          NAVBAR_OPEN: A,
          MOUSE_MOVE: w,
          PAGE_SCROLL_DOWN: R,
          SCROLL_INTO_VIEW: N,
          SCROLL_OUT_OF_VIEW: C,
          PAGE_SCROLL_UP: L,
          SCROLLING_IN_VIEW: S,
          PAGE_FINISH: F,
          ECOMMERCE_CART_CLOSE: P,
          ECOMMERCE_CART_OPEN: M,
          PAGE_START: D,
          PAGE_SCROLL: k,
        } = u.EventTypeConsts,
        x = "COMPONENT_ACTIVE",
        V = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: G } = u.IX2EngineConstants,
        { getNamespacedParameterId: U } = s.IX2VanillaUtils,
        B = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        j = B(({ element: e, nativeEvent: t }) => e === t.target),
        X = B(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        W = (0, r.default)([j, X]),
        H = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: i } = n,
              r = i[t];
            if (r && !ee[r.eventTypeId]) return r;
          }
          return null;
        },
        z = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: i } = n.config;
          return !!H(e, i);
        },
        Y = ({ store: e, event: t, element: n, eventStateKey: i }, r) => {
          let { action: o, id: u } = t,
            { actionListId: c, autoStopEventId: s } = o.config,
            d = H(e, s);
          return (
            d &&
              (0, l.stopActionGroup)({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: s + G + i.split(G)[1],
                actionListId: (0, a.default)(d, "action.config.actionListId"),
              }),
            (0, l.stopActionGroup)({
              store: e,
              eventId: u,
              eventTarget: n,
              eventStateKey: i,
              actionListId: c,
            }),
            (0, l.startActionGroup)({
              store: e,
              eventId: u,
              eventTarget: n,
              eventStateKey: i,
              actionListId: c,
            }),
            r
          );
        },
        $ = (e, t) => (n, i) => !0 === e(n, i) ? t(n, i) : i,
        Q = { handler: $(W, Y) },
        q = { ...Q, types: [x, V].join(" ") },
        K = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: K },
        ee = { PAGE_START: D, PAGE_FINISH: F },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, o.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ei = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: i, relatedTarget: r } = t,
            a = e.contains(i);
          if ("mouseover" === n && a) return !0;
          let o = e.contains(r);
          return "mouseout" === n && !!a && !!o;
        },
        er = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: i, clientHeight: r } = et(),
            a = n.scrollOffsetValue,
            o = "PX" === n.scrollOffsetUnit ? a : (r * (a || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: o,
            right: i,
            bottom: r - o,
          });
        },
        ea = (e) => (t, n) => {
          let { type: i } = t.nativeEvent,
            r = -1 !== [x, V].indexOf(i) ? i === x : n.isActive,
            a = { ...n, isActive: r };
          return ((!n || a.isActive !== n.isActive) && e(t, a)) || a;
        },
        eo = (e) => (t, n) => {
          let i = { elementHovered: ei(t) };
          return (
            ((n ? i.elementHovered !== n.elementHovered : i.elementHovered) &&
              e(t, i)) ||
            i
          );
        },
        eu =
          (e) =>
          (t, n = {}) => {
            let i,
              r,
              { stiffScrollTop: a, scrollHeight: o, innerHeight: u } = et(),
              {
                event: { config: l, eventTypeId: c },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: d } = l,
              f = o - u,
              p = Number((a / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let E = ("PX" === d ? s : (u * (s || 0)) / 100) / f,
              g = 0;
            n &&
              ((i = p > n.percentTop),
              (g = (r = n.scrollingDown !== i) ? p : n.anchorTop));
            let h = c === R ? p >= g + E : p <= g - E,
              m = {
                ...n,
                percentTop: p,
                inBounds: h,
                anchorTop: g,
                scrollingDown: i,
              };
            return (n && h && (r || m.inBounds !== n.inBounds) && e(t, m)) || m;
          },
        el = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        ec =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let i = { clickCount: (n.clickCount % 2) + 1 };
            return (i.clickCount !== n.clickCount && e(t, i)) || i;
          },
        es = (e = !0) => ({
          ...q,
          handler: $(
            e ? W : j,
            ea((e, t) => (t.isActive ? Q.handler(e, t) : t))
          ),
        }),
        ed = (e = !0) => ({
          ...q,
          handler: $(
            e ? W : j,
            ea((e, t) => (t.isActive ? t : Q.handler(e, t)))
          ),
        }),
        ef = {
          ...J,
          handler:
            ((i = (e, t) => {
              let { elementVisible: n } = t,
                { event: i, store: r } = e,
                { ixData: a } = r.getState(),
                { events: o } = a;
              return !o[i.action.config.autoStopEventId] && t.triggered
                ? t
                : (i.eventTypeId === N) === n
                ? (Y(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: er(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  i(e, n)) ||
                n
              );
            }),
        },
        ep = {
          [v]: es(),
          [T]: ed(),
          [I]: es(),
          [y]: ed(),
          [A]: es(!1),
          [O]: ed(!1),
          [b]: es(),
          [_]: ed(),
          [M]: { types: "ecommerce-cart-open", handler: $(W, Y) },
          [P]: { types: "ecommerce-cart-close", handler: $(W, Y) },
          [f]: {
            types: "click",
            handler: $(
              W,
              ec((e, { clickCount: t }) => {
                z(e) ? 1 === t && Y(e) : Y(e);
              })
            ),
          },
          [p]: {
            types: "click",
            handler: $(
              W,
              ec((e, { clickCount: t }) => {
                2 === t && Y(e);
              })
            ),
          },
          [E]: { ...Q, types: "mousedown" },
          [g]: { ...Q, types: "mouseup" },
          [h]: {
            types: Z,
            handler: $(
              W,
              eo((e, t) => {
                t.elementHovered && Y(e);
              })
            ),
          },
          [m]: {
            types: Z,
            handler: $(
              W,
              eo((e, t) => {
                t.elementHovered || Y(e);
              })
            ),
          },
          [w]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: i,
                eventStateKey: r,
              },
              a = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: l,
                  continuousParameterGroupId: s,
                  reverse: d,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = a.clientX,
                  clientY: E = a.clientY,
                  pageX: g = a.pageX,
                  pageY: h = a.pageY,
                } = i,
                m = "X_AXIS" === l,
                y = "mouseout" === i.type,
                I = f / 100,
                v = s,
                T = !1;
              switch (o) {
                case u.EventBasedOn.VIEWPORT:
                  I = m
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                case u.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: i,
                  } = et();
                  I = m ? Math.min(e + g, n) / n : Math.min(t + h, i) / i;
                  break;
                }
                case u.EventBasedOn.ELEMENT:
                default: {
                  v = U(r, s);
                  let e = 0 === i.type.indexOf("mouse");
                  if (e && !0 !== W({ element: t, nativeEvent: i })) break;
                  let n = t.getBoundingClientRect(),
                    { left: a, top: o, width: u, height: l } = n;
                  if (!e && !el({ left: p, top: E }, n)) break;
                  (T = !0), (I = m ? (p - a) / u : (E - o) / l);
                }
              }
              return (
                y && (I > 0.95 || I < 0.05) && (I = Math.round(I)),
                (o !== u.EventBasedOn.ELEMENT || T || T !== a.elementHovered) &&
                  ((I = d ? 1 - I : I),
                  e.dispatch((0, c.parameterChanged)(v, I))),
                {
                  elementHovered: T,
                  clientX: p,
                  clientY: E,
                  pageX: g,
                  pageY: h,
                }
              );
            },
          },
          [k]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: i } = t,
                { scrollTop: r, scrollHeight: a, clientHeight: o } = et(),
                u = r / (a - o);
              (u = i ? 1 - u : u), e.dispatch((0, c.parameterChanged)(n, u));
            },
          },
          [S]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: i },
              r = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: a,
                  scrollTop: o,
                  scrollWidth: l,
                  scrollHeight: s,
                  clientHeight: d,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: E,
                  startsEntering: g,
                  startsExiting: h,
                  addEndOffset: m,
                  addStartOffset: y,
                  addOffsetValue: I = 0,
                  endOffsetValue: v = 0,
                } = n;
              if (f === u.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? a / l : o / s;
                return (
                  e !== r.scrollPercent &&
                    t.dispatch((0, c.parameterChanged)(E, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = U(i, E),
                  a = e.getBoundingClientRect(),
                  o = (y ? I : 0) / 100,
                  u = (m ? v : 0) / 100;
                (o = g ? o : 1 - o), (u = h ? u : 1 - u);
                let l = a.top + Math.min(a.height * o, d),
                  f = Math.min(d + (a.top + a.height * u - l), s),
                  p = Math.min(Math.max(0, d - l), f) / f;
                return (
                  p !== r.scrollPercent &&
                    t.dispatch((0, c.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [N]: ef,
          [C]: ef,
          [R]: {
            ...J,
            handler: eu((e, t) => {
              t.scrollingDown && Y(e);
            }),
          },
          [L]: {
            ...J,
            handler: eu((e, t) => {
              t.scrollingDown || Y(e);
            }),
          },
          [F]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: $(j, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return n.finished && !(t && t.finshed) && Y(e), n;
            }),
          },
          [D]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: $(j, (e, t) => (t || Y(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: i } = n(7087).IX2EngineActionTypes,
        r = (e = Object.freeze({}), t) =>
          t.type === i ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return T;
          },
        });
      let i = n(7087),
        r = n(9468),
        a = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: u,
          IX2_INSTANCE_ADDED: l,
          IX2_INSTANCE_STARTED: c,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: d,
        } = i.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: E,
        } = r.IX2EasingUtils,
        { RENDER_GENERAL: g } = i.IX2EngineConstants,
        {
          getItemConfigByKey: h,
          getRenderType: m,
          getStyleProp: y,
        } = r.IX2VanillaUtils,
        I = (e, t) => {
          let n,
            i,
            r,
            o,
            {
              position: u,
              parameterId: l,
              actionGroups: c,
              destinationKeys: s,
              smoothing: d,
              restingValue: E,
              actionTypeId: g,
              customEasingFn: m,
              skipMotion: y,
              skipToValue: I,
            } = e,
            { parameters: v } = t.payload,
            T = Math.max(1 - d, 0.01),
            b = v[l];
          null == b && ((T = 1), (b = E));
          let _ = f((Math.max(b, 0) || 0) - u),
            O = y ? I : f(u + _ * T),
            A = 100 * O;
          if (O === u && e.current) return e;
          for (let e = 0, { length: t } = c; e < t; e++) {
            let { keyframe: t, actionItems: a } = c[e];
            if ((0 === e && (n = a[0]), A >= t)) {
              n = a[0];
              let u = c[e + 1],
                l = u && A !== t;
              (i = l ? u.actionItems[0] : null),
                l && ((r = t / 100), (o = (u.keyframe - t) / 100));
            }
          }
          let w = {};
          if (n && !i)
            for (let e = 0, { length: t } = s; e < t; e++) {
              let t = s[e];
              w[t] = h(g, t, n.config);
            }
          else if (n && i && void 0 !== r && void 0 !== o) {
            let e = (O - r) / o,
              t = p(n.config.easing, e, m);
            for (let e = 0, { length: r } = s; e < r; e++) {
              let r = s[e],
                a = h(g, r, n.config),
                o = (h(g, r, i.config) - a) * t + a;
              w[r] = o;
            }
          }
          return (0, a.merge)(e, { position: O, current: w });
        },
        v = (e, t) => {
          let {
              active: n,
              origin: i,
              start: r,
              immediate: o,
              renderType: u,
              verbose: l,
              actionItem: c,
              destination: s,
              destinationKeys: d,
              pluginDuration: E,
              instanceDelay: h,
              customEasingFn: m,
              skipMotion: y,
            } = e,
            I = c.config.easing,
            { duration: v, delay: T } = c.config;
          null != E && (v = E),
            (T = null != h ? h : T),
            u === g ? (v = 0) : (o || y) && (v = T = 0);
          let { now: b } = t.payload;
          if (n && i) {
            let t = b - (r + T);
            if (l) {
              let t = v + T,
                n = f(Math.min(Math.max(0, (b - r) / t), 1));
              e = (0, a.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / v), 1)),
              o = p(I, n, m),
              u = {},
              c = null;
            return (
              d.length &&
                (c = d.reduce((e, t) => {
                  let n = s[t],
                    r = parseFloat(i[t]) || 0,
                    a = parseFloat(n) - r;
                  return (e[t] = a * o + r), e;
                }, {})),
              (u.current = c),
              (u.position = n),
              1 === n && ((u.active = !1), (u.complete = !0)),
              (0, a.merge)(e, u)
            );
          }
          return e;
        },
        T = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case u:
              return Object.freeze({});
            case l: {
              let {
                  instanceId: n,
                  elementId: i,
                  actionItem: r,
                  eventId: o,
                  eventTarget: u,
                  eventStateKey: l,
                  actionListId: c,
                  groupIndex: s,
                  isCarrier: d,
                  origin: f,
                  destination: p,
                  immediate: g,
                  verbose: h,
                  continuous: I,
                  parameterId: v,
                  actionGroups: T,
                  smoothing: b,
                  restingValue: _,
                  pluginInstance: O,
                  pluginDuration: A,
                  instanceDelay: w,
                  skipMotion: R,
                  skipToValue: N,
                } = t.payload,
                { actionTypeId: C } = r,
                L = m(C),
                S = y(L, C),
                F = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: P } = r.config;
              return (0, a.set)(e, n, {
                id: n,
                elementId: i,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: F,
                immediate: g,
                verbose: h,
                current: null,
                actionItem: r,
                actionTypeId: C,
                eventId: o,
                eventTarget: u,
                eventStateKey: l,
                actionListId: c,
                groupIndex: s,
                renderType: L,
                isCarrier: d,
                styleProp: S,
                continuous: I,
                parameterId: v,
                actionGroups: T,
                smoothing: b,
                restingValue: _,
                pluginInstance: O,
                pluginDuration: A,
                instanceDelay: w,
                skipMotion: R,
                skipToValue: N,
                customEasingFn:
                  Array.isArray(P) && 4 === P.length ? E(P) : void 0,
              });
            }
            case c: {
              let { instanceId: n, time: i } = t.payload;
              return (0, a.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: i,
              });
            }
            case s: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let i = {},
                r = Object.keys(e),
                { length: a } = r;
              for (let t = 0; t < a; t++) {
                let a = r[t];
                a !== n && (i[a] = e[a]);
              }
              return i;
            }
            case d: {
              let n = e,
                i = Object.keys(e),
                { length: r } = i;
              for (let o = 0; o < r; o++) {
                let r = i[o],
                  u = e[r],
                  l = u.continuous ? I : v;
                n = (0, a.set)(n, r, l(u, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: i,
          IX2_SESSION_STOPPED: r,
          IX2_PARAMETER_CHANGED: a,
        } = n(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case i:
              return t.payload.ixParameters || {};
            case r:
              return {};
            case a: {
              let { key: n, value: i } = t.payload;
              return (e[n] = i), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(9516),
        r = n(4609),
        a = n(628),
        o = n(5862),
        u = n(9468),
        l = n(7718),
        c = n(1540),
        { ixElements: s } = u.IX2ElementsReducer,
        d = (0, i.combineReducers)({
          ixData: r.ixData,
          ixRequest: a.ixRequest,
          ixSession: o.ixSession,
          ixElements: s,
          ixInstances: l.ixInstances,
          ixParameters: c.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(7087),
        r = n(1185),
        {
          IX2_PREVIEW_REQUESTED: a,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: u,
          IX2_CLEAR_REQUESTED: l,
        } = i.IX2EngineActionTypes,
        c = { preview: {}, playback: {}, stop: {}, clear: {} },
        s = Object.create(null, {
          [a]: { value: "preview" },
          [o]: { value: "playback" },
          [u]: { value: "stop" },
          [l]: { value: "clear" },
        }),
        d = (e = c, t) => {
          if (t.type in s) {
            let n = [s[t.type]];
            return (0, r.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return h;
          },
        });
      let i = n(7087),
        r = n(1185),
        {
          IX2_SESSION_INITIALIZED: a,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: u,
          IX2_SESSION_STOPPED: l,
          IX2_EVENT_LISTENER_ADDED: c,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: d,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: E,
        } = i.IX2EngineActionTypes,
        g = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        h = (e = g, t) => {
          switch (t.type) {
            case a: {
              let { hasBoundaryNodes: n, reducedMotion: i } = t.payload;
              return (0, r.merge)(e, { hasBoundaryNodes: n, reducedMotion: i });
            }
            case o:
              return (0, r.set)(e, "active", !0);
            case u: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, r.set)(e, "tick", e.tick + n);
            }
            case l:
              return g;
            case d: {
              let {
                payload: { now: n },
              } = t;
              return (0, r.set)(e, "tick", n);
            }
            case c: {
              let n = (0, r.addLast)(e.eventListeners, t.payload);
              return (0, r.set)(e, "eventListeners", n);
            }
            case s: {
              let { stateKey: n, newState: i } = t.payload;
              return (0, r.setIn)(e, ["eventState", n], i);
            }
            case f: {
              let { actionListId: n, isPlaying: i } = t.payload;
              return (0, r.setIn)(e, ["playbackState", n], i);
            }
            case p: {
              let { width: n, mediaQueries: i } = t.payload,
                a = i.length,
                o = null;
              for (let e = 0; e < a; e++) {
                let { key: t, min: r, max: a } = i[e];
                if (n >= r && n <= a) {
                  o = t;
                  break;
                }
              }
              return (0, r.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case E:
              return (0, r.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return s;
        },
        createPluginInstance: function () {
          return l;
        },
        getPluginConfig: function () {
          return r;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return a;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return c;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let r = (e) => e.value,
        a = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        o = (e) => e || { value: 0 },
        u = (e) => ({ value: e.value }),
        l = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n;
        },
        c = (e, t, n) => {
          if (!e) return;
          let i = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * i);
        },
        s = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let r = "--wf-rive-fit",
        a = "--wf-rive-alignment",
        o = (e) => document.querySelector(`[data-w-id="${e}"]`),
        u = () => window.Webflow.require("rive"),
        l = (e, t) => e.value.inputs[t],
        c = () => null,
        s = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: i = {} } = t.config.value;
          for (let e in i) null == i[e] && (n[e] = 0);
          return n;
        },
        d = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? o(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let i = u();
          if (!i) return;
          let o = i.getInstance(e),
            l = i.rive.StateMachineInputType,
            { name: c, inputs: s = {} } = n.config.value || {};
          function d(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                n(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(c);
              if (null != n) {
                if ((e.isPlaying || e.play(c, !1), r in s || a in s)) {
                  let t = e.layout,
                    n = s[r] ?? t.fit,
                    i = s[a] ?? t.alignment;
                  (n !== t.fit || i !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: i }));
                }
                for (let e in s) {
                  if (e === r || e === a) continue;
                  let i = n.find((t) => t.name === e);
                  if (null != i)
                    switch (i.type) {
                      case l.Boolean:
                        null != s[e] && (i.value = !!s[e]);
                        break;
                      case l.Number: {
                        let n = t[e];
                        null != n && (i.value = n);
                        break;
                      }
                      case l.Trigger:
                        s[e] && i.fire();
                    }
                }
              }
            }
          }
          o?.rive ? d(o.rive) : i.setLoadHandler(e, d);
        },
        E = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return u;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let r = (e) => document.querySelector(`[data-w-id="${e}"]`),
        a = () => window.Webflow.require("spline"),
        o = (e, t) => e.filter((e) => !t.includes(e)),
        u = (e, t) => e.value[t],
        l = () => null,
        c = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        s = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = o(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = c[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = c[t]), e), {});
        },
        d = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? r(n) : null;
        },
        p = (e, t, n) => {
          let i = a();
          if (!i) return;
          let r = i.getInstance(e),
            o = n.config.target.objectId,
            u = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = o && e.findObjectById(o);
              if (!n) return;
              let { PLUGIN_SPLINE: i } = t;
              null != i.positionX && (n.position.x = i.positionX),
                null != i.positionY && (n.position.y = i.positionY),
                null != i.positionZ && (n.position.z = i.positionZ),
                null != i.rotationX && (n.rotation.x = i.rotationX),
                null != i.rotationY && (n.rotation.y = i.rotationY),
                null != i.rotationZ && (n.rotation.z = i.rotationZ),
                null != i.scaleX && (n.scale.x = i.scaleX),
                null != i.scaleY && (n.scale.y = i.scaleY),
                null != i.scaleZ && (n.scale.z = i.scaleZ);
            };
          r ? u(r.spline) : i.setLoadHandler(e, u);
        },
        E = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var r in i)
        Object.defineProperty(t, r, { enumerable: !0, get: i[r] });
      let a = n(380),
        o = (e, t) => e.value[t],
        u = () => null,
        l = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            i = t.config.target.objectId,
            r = getComputedStyle(document.documentElement).getPropertyValue(i);
          return null != n.size
            ? { size: parseInt(r, 10) }
            : "%" === n.unit || "-" === n.unit
            ? { size: parseFloat(r) }
            : null != n.red && null != n.green && null != n.blue
            ? (0, a.normalizeColor)(r)
            : void 0;
        },
        c = (e) => e.value,
        s = () => null,
        d = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: i }) =>
              [e, t, n, i].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: i }) =>
              `rgba(${e}, ${t}, ${n}, ${i})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: i },
              value: { unit: r },
            } = n.config,
            a = t.PLUGIN_VARIABLE,
            o = Object.values(d).find((e) => e.match(a, r));
          o && document.documentElement.style.setProperty(i, o.getValue(a, r));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = n(7087),
        r = c(n(7377)),
        a = c(n(2866)),
        o = c(n(2570)),
        u = c(n(1407));
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = l(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, a, o)
              : (i[a] = e[a]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
      let s = new Map([
        [i.ActionTypeConsts.PLUGIN_LOTTIE, { ...r }],
        [i.ActionTypeConsts.PLUGIN_SPLINE, { ...a }],
        [i.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
        [i.ActionTypeConsts.PLUGIN_VARIABLE, { ...u }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return v;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return E;
        },
        IX2_CLEAR_REQUESTED: function () {
          return d;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return I;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return h;
        },
        IX2_INSTANCE_REMOVED: function () {
          return y;
        },
        IX2_INSTANCE_STARTED: function () {
          return m;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return b;
        },
        IX2_PARAMETER_CHANGED: function () {
          return g;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return c;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return l;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return r;
        },
        IX2_SESSION_INITIALIZED: function () {
          return a;
        },
        IX2_SESSION_STARTED: function () {
          return o;
        },
        IX2_SESSION_STOPPED: function () {
          return u;
        },
        IX2_STOP_REQUESTED: function () {
          return s;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return _;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return T;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let r = "IX2_RAW_DATA_IMPORTED",
        a = "IX2_SESSION_INITIALIZED",
        o = "IX2_SESSION_STARTED",
        u = "IX2_SESSION_STOPPED",
        l = "IX2_PREVIEW_REQUESTED",
        c = "IX2_PLAYBACK_REQUESTED",
        s = "IX2_STOP_REQUESTED",
        d = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        E = "IX2_ANIMATION_FRAME_CHANGED",
        g = "IX2_PARAMETER_CHANGED",
        h = "IX2_INSTANCE_ADDED",
        m = "IX2_INSTANCE_STARTED",
        y = "IX2_INSTANCE_REMOVED",
        I = "IX2_ELEMENT_STATE_CHANGED",
        v = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        T = "IX2_VIEWPORT_WIDTH_CHANGED",
        b = "IX2_MEDIA_QUERIES_DEFINED",
        _ = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return W;
        },
        BACKGROUND: function () {
          return V;
        },
        BACKGROUND_COLOR: function () {
          return x;
        },
        BAR_DELIMITER: function () {
          return Y;
        },
        BORDER_COLOR: function () {
          return G;
        },
        BOUNDARY_SELECTOR: function () {
          return l;
        },
        CHILDREN: function () {
          return $;
        },
        COLON_DELIMITER: function () {
          return z;
        },
        COLOR: function () {
          return U;
        },
        COMMA_DELIMITER: function () {
          return H;
        },
        CONFIG_UNIT: function () {
          return h;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return c;
        },
        CONFIG_Y_UNIT: function () {
          return E;
        },
        CONFIG_Y_VALUE: function () {
          return s;
        },
        CONFIG_Z_UNIT: function () {
          return g;
        },
        CONFIG_Z_VALUE: function () {
          return d;
        },
        DISPLAY: function () {
          return B;
        },
        FILTER: function () {
          return P;
        },
        FLEX: function () {
          return j;
        },
        FONT_VARIATION_SETTINGS: function () {
          return M;
        },
        HEIGHT: function () {
          return k;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return Q;
        },
        IX2_ID_DELIMITER: function () {
          return r;
        },
        OPACITY: function () {
          return F;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ei;
        },
        RENDER_PLUGIN: function () {
          return ea;
        },
        RENDER_STYLE: function () {
          return er;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return w;
        },
        ROTATE_Y: function () {
          return R;
        },
        ROTATE_Z: function () {
          return N;
        },
        SCALE_3D: function () {
          return A;
        },
        SCALE_X: function () {
          return b;
        },
        SCALE_Y: function () {
          return _;
        },
        SCALE_Z: function () {
          return O;
        },
        SIBLINGS: function () {
          return q;
        },
        SKEW: function () {
          return C;
        },
        SKEW_X: function () {
          return L;
        },
        SKEW_Y: function () {
          return S;
        },
        TRANSFORM: function () {
          return m;
        },
        TRANSLATE_3D: function () {
          return T;
        },
        TRANSLATE_X: function () {
          return y;
        },
        TRANSLATE_Y: function () {
          return I;
        },
        TRANSLATE_Z: function () {
          return v;
        },
        WF_PAGE: function () {
          return a;
        },
        WIDTH: function () {
          return D;
        },
        WILL_CHANGE: function () {
          return X;
        },
        W_MOD_IX: function () {
          return u;
        },
        W_MOD_JS: function () {
          return o;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let r = "|",
        a = "data-wf-page",
        o = "w-mod-js",
        u = "w-mod-ix",
        l = ".w-dyn-item",
        c = "xValue",
        s = "yValue",
        d = "zValue",
        f = "value",
        p = "xUnit",
        E = "yUnit",
        g = "zUnit",
        h = "unit",
        m = "transform",
        y = "translateX",
        I = "translateY",
        v = "translateZ",
        T = "translate3d",
        b = "scaleX",
        _ = "scaleY",
        O = "scaleZ",
        A = "scale3d",
        w = "rotateX",
        R = "rotateY",
        N = "rotateZ",
        C = "skew",
        L = "skewX",
        S = "skewY",
        F = "opacity",
        P = "filter",
        M = "font-variation-settings",
        D = "width",
        k = "height",
        x = "backgroundColor",
        V = "background",
        G = "borderColor",
        U = "color",
        B = "display",
        j = "flex",
        X = "willChange",
        W = "AUTO",
        H = ",",
        z = ":",
        Y = "|",
        $ = "CHILDREN",
        Q = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ei = "RENDER_GENERAL",
        er = "RENDER_STYLE",
        ea = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return a;
        },
        ActionTypeConsts: function () {
          return r;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let r = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        a = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        ActionTypeConsts: function () {
          return o.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return u;
        },
        IX2EngineConstants: function () {
          return l;
        },
        QuickEffectIds: function () {
          return a.QuickEffectIds;
        },
      };
      for (var r in i)
        Object.defineProperty(t, r, { enumerable: !0, get: i[r] });
      let a = c(n(1833), t),
        o = c(n(262), t);
      c(n(8704), t), c(n(3213), t);
      let u = d(n(8023)),
        l = d(n(2686));
      function c(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      function d(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = s(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, a, o)
              : (i[a] = e[a]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
    },
    3213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let {
          TRANSFORM_MOVE: i,
          TRANSFORM_SCALE: r,
          TRANSFORM_ROTATE: a,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: u,
          STYLE_FILTER: l,
          STYLE_FONT_VARIATION: c,
        } = n(262).ActionTypeConsts,
        s = { [i]: !0, [r]: !0, [a]: !0, [o]: !0, [u]: !0, [l]: !0, [c]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return a;
        },
        EventBasedOn: function () {
          return o;
        },
        EventContinuousMouseAxes: function () {
          return u;
        },
        EventLimitAffectedElements: function () {
          return l;
        },
        EventTypeConsts: function () {
          return r;
        },
        QuickEffectDirectionConsts: function () {
          return s;
        },
        QuickEffectIds: function () {
          return c;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let r = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        a = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        o = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        u = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        l = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        c = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        s = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function i(e) {
        let t,
          i,
          r,
          a = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          u = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
        if (u.startsWith("#")) {
          let e = u.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (i = parseInt(e[1] + e[1], 16)),
              (r = parseInt(e[2] + e[2], 16)),
              4 === e.length && (a = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (i = parseInt(e.substring(2, 4), 16)),
              (r = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (a = parseInt(e.substring(6, 8), 16) / 255));
        } else if (u.startsWith("rgba")) {
          let e = u.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (r = parseInt(e[2], 10)),
            (a = parseFloat(e[3]));
        } else if (u.startsWith("rgb")) {
          let e = u.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (r = parseInt(e[2], 10));
        } else if (u.startsWith("hsla")) {
          let e,
            n,
            o,
            l = u.match(/hsla\(([^)]+)\)/)[1].split(","),
            c = parseFloat(l[0]),
            s = parseFloat(l[1].replace("%", "")) / 100,
            d = parseFloat(l[2].replace("%", "")) / 100;
          a = parseFloat(l[3]);
          let f = (1 - Math.abs(2 * d - 1)) * s,
            p = f * (1 - Math.abs(((c / 60) % 2) - 1)),
            E = d - f / 2;
          c >= 0 && c < 60
            ? ((e = f), (n = p), (o = 0))
            : c >= 60 && c < 120
            ? ((e = p), (n = f), (o = 0))
            : c >= 120 && c < 180
            ? ((e = 0), (n = f), (o = p))
            : c >= 180 && c < 240
            ? ((e = 0), (n = p), (o = f))
            : c >= 240 && c < 300
            ? ((e = p), (n = 0), (o = f))
            : ((e = f), (n = 0), (o = p)),
            (t = Math.round((e + E) * 255)),
            (i = Math.round((n + E) * 255)),
            (r = Math.round((o + E) * 255));
        } else if (u.startsWith("hsl")) {
          let e,
            n,
            a,
            o = u.match(/hsl\(([^)]+)\)/)[1].split(","),
            l = parseFloat(o[0]),
            c = parseFloat(o[1].replace("%", "")) / 100,
            s = parseFloat(o[2].replace("%", "")) / 100,
            d = (1 - Math.abs(2 * s - 1)) * c,
            f = d * (1 - Math.abs(((l / 60) % 2) - 1)),
            p = s - d / 2;
          l >= 0 && l < 60
            ? ((e = d), (n = f), (a = 0))
            : l >= 60 && l < 120
            ? ((e = f), (n = d), (a = 0))
            : l >= 120 && l < 180
            ? ((e = 0), (n = d), (a = f))
            : l >= 180 && l < 240
            ? ((e = 0), (n = f), (a = d))
            : l >= 240 && l < 300
            ? ((e = f), (n = 0), (a = d))
            : ((e = d), (n = 0), (a = f)),
            (t = Math.round((e + p) * 255)),
            (i = Math.round((n + p) * 255)),
            (r = Math.round((a + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(r))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: i, blue: r, alpha: a };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        IX2BrowserSupport: function () {
          return a;
        },
        IX2EasingUtils: function () {
          return u;
        },
        IX2Easings: function () {
          return o;
        },
        IX2ElementsReducer: function () {
          return l;
        },
        IX2VanillaPlugins: function () {
          return c;
        },
        IX2VanillaUtils: function () {
          return s;
        },
      };
      for (var r in i)
        Object.defineProperty(t, r, { enumerable: !0, get: i[r] });
      let a = f(n(2662)),
        o = f(n(8686)),
        u = f(n(3767)),
        l = f(n(5861)),
        c = f(n(1799)),
        s = f(n(4124));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, a, o)
              : (i[a] = e[a]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        r = {
          ELEMENT_MATCHES: function () {
            return c;
          },
          FLEX_PREFIXED: function () {
            return s;
          },
          IS_BROWSER_ENV: function () {
            return u;
          },
          TRANSFORM_PREFIXED: function () {
            return d;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return l;
          },
        };
      for (var a in r)
        Object.defineProperty(t, a, { enumerable: !0, get: r[a] });
      let o = (i = n(9777)) && i.__esModule ? i : { default: i },
        u = "undefined" != typeof window,
        l = (e, t) => (u ? e() : t),
        c = l(() =>
          (0, o.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        s = l(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        d = l(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = d.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        r = {
          applyEasing: function () {
            return d;
          },
          createBezierEasing: function () {
            return s;
          },
          optimizeFloat: function () {
            return c;
          },
        };
      for (var a in r)
        Object.defineProperty(t, a, { enumerable: !0, get: r[a] });
      let o = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = l(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, a, o)
                : (i[a] = e[a]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(8686)),
        u = (i = n(1361)) && i.__esModule ? i : { default: i };
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t = 5, n = 10) {
        let i = Math.pow(n, t),
          r = Number(Math.round(e * i) / i);
        return Math.abs(r) > 1e-4 ? r : 0;
      }
      function s(e) {
        return (0, u.default)(...e);
      }
      function d(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : n
          ? c(t > 0 ? n(t) : t)
          : c(t > 0 && e && o[e] ? o[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        r = {
          bounce: function () {
            return j;
          },
          bouncePast: function () {
            return X;
          },
          ease: function () {
            return u;
          },
          easeIn: function () {
            return l;
          },
          easeInOut: function () {
            return s;
          },
          easeOut: function () {
            return c;
          },
          inBack: function () {
            return P;
          },
          inCirc: function () {
            return C;
          },
          inCubic: function () {
            return E;
          },
          inElastic: function () {
            return k;
          },
          inExpo: function () {
            return w;
          },
          inOutBack: function () {
            return D;
          },
          inOutCirc: function () {
            return S;
          },
          inOutCubic: function () {
            return h;
          },
          inOutElastic: function () {
            return V;
          },
          inOutExpo: function () {
            return N;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return I;
          },
          inOutQuint: function () {
            return b;
          },
          inOutSine: function () {
            return A;
          },
          inQuad: function () {
            return d;
          },
          inQuart: function () {
            return m;
          },
          inQuint: function () {
            return v;
          },
          inSine: function () {
            return _;
          },
          outBack: function () {
            return M;
          },
          outBounce: function () {
            return F;
          },
          outCirc: function () {
            return L;
          },
          outCubic: function () {
            return g;
          },
          outElastic: function () {
            return x;
          },
          outExpo: function () {
            return R;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return y;
          },
          outQuint: function () {
            return T;
          },
          outSine: function () {
            return O;
          },
          swingFrom: function () {
            return U;
          },
          swingFromTo: function () {
            return G;
          },
          swingTo: function () {
            return B;
          },
        };
      for (var a in r)
        Object.defineProperty(t, a, { enumerable: !0, get: r[a] });
      let o = (i = n(1361)) && i.__esModule ? i : { default: i },
        u = (0, o.default)(0.25, 0.1, 0.25, 1),
        l = (0, o.default)(0.42, 0, 1, 1),
        c = (0, o.default)(0, 0, 0.58, 1),
        s = (0, o.default)(0.42, 0, 0.58, 1);
      function d(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function E(e) {
        return Math.pow(e, 3);
      }
      function g(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function h(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function m(e) {
        return Math.pow(e, 4);
      }
      function y(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function I(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function v(e) {
        return Math.pow(e, 5);
      }
      function T(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function b(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function _(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function O(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function A(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function w(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function R(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function N(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function C(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function L(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function S(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function F(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function P(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function M(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function D(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function k(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            -(
              i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n)
            ));
      }
      function x(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            i * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
              1);
      }
      function V(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            e < 1)
          ? -0.5 *
            (i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n))
          : i *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n) *
              0.5 +
            1;
      }
      function G(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function U(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function B(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function j(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function X(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return s;
        },
        isPluginType: function () {
          return u;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var r in i)
        Object.defineProperty(t, r, { enumerable: !0, get: i[r] });
      let a = n(2662),
        o = n(3690);
      function u(e) {
        return o.pluginMethodMap.has(e);
      }
      let l = (e) => (t) => {
          if (!a.IS_BROWSER_ENV) return () => null;
          let n = o.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let i = n[e];
          if (!i) throw Error(`IX2 invalid plugin method: ${e}`);
          return i;
        },
        c = l("getPluginConfig"),
        s = l("getPluginOrigin"),
        d = l("getPluginDuration"),
        f = l("getPluginDestination"),
        p = l("createPluginInstance"),
        E = l("renderPlugin"),
        g = l("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        cleanupHTMLElement: function () {
          return eH;
        },
        clearAllStyles: function () {
          return ej;
        },
        clearObjectCache: function () {
          return ed;
        },
        getActionListProgress: function () {
          return eQ;
        },
        getAffectedElements: function () {
          return ev;
        },
        getComputedStyle: function () {
          return eT;
        },
        getDestinationValues: function () {
          return eC;
        },
        getElementId: function () {
          return eg;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eA;
        },
        getItemConfigByKey: function () {
          return eN;
        },
        getMaxDurationItemIndex: function () {
          return e$;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eL;
        },
        getStyleProp: function () {
          return eS;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return ey;
        },
        reduceListToGroup: function () {
          return eq;
        },
        reifyState: function () {
          return eh;
        },
        renderHTMLElement: function () {
          return eF;
        },
        shallowEqual: function () {
          return s.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var r in i)
        Object.defineProperty(t, r, { enumerable: !0, get: i[r] });
      let a = g(n(4075)),
        o = g(n(1455)),
        u = g(n(5720)),
        l = n(1185),
        c = n(7087),
        s = g(n(7164)),
        d = n(3767),
        f = n(380),
        p = n(1799),
        E = n(2662);
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: h,
          TRANSFORM: m,
          TRANSLATE_3D: y,
          SCALE_3D: I,
          ROTATE_X: v,
          ROTATE_Y: T,
          ROTATE_Z: b,
          SKEW: _,
          PRESERVE_3D: O,
          FLEX: A,
          OPACITY: w,
          FILTER: R,
          FONT_VARIATION_SETTINGS: N,
          WIDTH: C,
          HEIGHT: L,
          BACKGROUND_COLOR: S,
          BORDER_COLOR: F,
          COLOR: P,
          CHILDREN: M,
          IMMEDIATE_CHILDREN: D,
          SIBLINGS: k,
          PARENT: x,
          DISPLAY: V,
          WILL_CHANGE: G,
          AUTO: U,
          COMMA_DELIMITER: B,
          COLON_DELIMITER: j,
          BAR_DELIMITER: X,
          RENDER_TRANSFORM: W,
          RENDER_GENERAL: H,
          RENDER_STYLE: z,
          RENDER_PLUGIN: Y,
        } = c.IX2EngineConstants,
        {
          TRANSFORM_MOVE: $,
          TRANSFORM_SCALE: Q,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ei,
          STYLE_TEXT_COLOR: er,
          GENERAL_DISPLAY: ea,
          OBJECT_VALUE: eo,
        } = c.ActionTypeConsts,
        eu = (e) => e.trim(),
        el = Object.freeze({ [en]: S, [ei]: F, [er]: P }),
        ec = Object.freeze({
          [E.TRANSFORM_PREFIXED]: m,
          [S]: h,
          [w]: w,
          [R]: R,
          [C]: C,
          [L]: L,
          [N]: N,
        }),
        es = new Map();
      function ed() {
        es.clear();
      }
      let ef = 1;
      function ep() {
        return "i" + ef++;
      }
      let eE = 1;
      function eg(e, t) {
        for (let n in e) {
          let i = e[n];
          if (i && i.ref === t) return i.id;
        }
        return "e" + eE++;
      }
      function eh({ events: e, actionLists: t, site: n } = {}) {
        let i = (0, o.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          r = n && n.mediaQueries,
          a = [];
        return (
          r
            ? (a = r.map((e) => e.key))
            : ((r = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: i,
              mediaQueries: r,
              mediaQueryKeys: a,
            },
          }
        );
      }
      let em = (e, t) => e === t;
      function ey({ store: e, select: t, onChange: n, comparator: i = em }) {
        let { getState: r, subscribe: a } = e,
          o = a(function () {
            let a = t(r());
            if (null == a) return void o();
            i(a, u) || n((u = a), e);
          }),
          u = t(r());
        return o;
      }
      function eI(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: r,
            appliesTo: a,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: r,
            appliesTo: a,
            useEventTarget: o,
          };
        }
        return {};
      }
      function ev({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: i,
        elementApi: r,
      }) {
        let a, o, u;
        if (!r) throw Error("IX2 missing elementApi");
        let { targets: l } = e;
        if (Array.isArray(l) && l.length > 0)
          return l.reduce(
            (e, a) =>
              e.concat(
                ev({
                  config: { target: a },
                  event: t,
                  eventTarget: n,
                  elementRoot: i,
                  elementApi: r,
                })
              ),
            []
          );
        let {
            getValidDocument: s,
            getQuerySelector: d,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: g,
            matchSelector: h,
            elementContains: m,
            isSiblingNode: y,
          } = r,
          { target: I } = e;
        if (!I) return [];
        let {
          id: v,
          objectId: T,
          selector: b,
          selectorGuids: _,
          appliesTo: O,
          useEventTarget: A,
        } = eI(I);
        if (T) return [es.has(T) ? es.get(T) : es.set(T, {}).get(T)];
        if (O === c.EventAppliesTo.PAGE) {
          let e = s(v);
          return e ? [e] : [];
        }
        let w = (t?.action?.config?.affectedElements ?? {})[v || b] || {},
          R = !!(w.id || w.selector),
          N = t && d(eI(t.target));
        if (
          (R
            ? ((a = w.limitAffectedElements), (o = N), (u = d(w)))
            : (o = u = d({ id: v, selector: b, selectorGuids: _ })),
          t && A)
        ) {
          let e = n && (u || !0 === A) ? [n] : f(N);
          if (u) {
            if (A === x) return f(u).filter((t) => e.some((e) => m(t, e)));
            if (A === M) return f(u).filter((t) => e.some((e) => m(e, t)));
            if (A === k) return f(u).filter((t) => e.some((e) => y(e, t)));
          }
          return e;
        }
        return null == o || null == u
          ? []
          : E.IS_BROWSER_ENV && i
          ? f(u).filter((e) => i.contains(e))
          : a === M
          ? f(o, u)
          : a === D
          ? p(f(o)).filter(h(u))
          : a === k
          ? g(f(o)).filter(h(u))
          : f(u);
      }
      function eT({ element: e, actionItem: t }) {
        if (!E.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ei:
          case er:
          case ea:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let eb = /px/,
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eM[t.type]), e),
            e || {}
          ),
        eO = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eD[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function eA(e, t = {}, n = {}, i, r) {
        let { getStyle: o } = r,
          { actionTypeId: u } = i;
        if ((0, p.isPluginType)(u)) return (0, p.getPluginOrigin)(u)(t[u], i);
        switch (i.actionTypeId) {
          case $:
          case Q:
          case q:
          case K:
            return t[i.actionTypeId] || eP[i.actionTypeId];
          case J:
            return e_(t[i.actionTypeId], i.config.filters);
          case ee:
            return eO(t[i.actionTypeId], i.config.fontVariations);
          case Z:
            return { value: (0, a.default)(parseFloat(o(e, w)), 1) };
          case et: {
            let t,
              r = o(e, C),
              u = o(e, L);
            return {
              widthValue:
                i.config.widthUnit === U
                  ? eb.test(r)
                    ? parseFloat(r)
                    : parseFloat(n.width)
                  : (0, a.default)(parseFloat(r), parseFloat(n.width)),
              heightValue:
                i.config.heightUnit === U
                  ? eb.test(u)
                    ? parseFloat(u)
                    : parseFloat(n.height)
                  : (0, a.default)(parseFloat(u), parseFloat(n.height)),
            };
          }
          case en:
          case ei:
          case er:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: i,
            }) {
              let r = el[t],
                o = i(e, r),
                u = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eG, eV.test(o) ? o : n[r]).split(B);
              return {
                rValue: (0, a.default)(parseInt(u[0], 10), 255),
                gValue: (0, a.default)(parseInt(u[1], 10), 255),
                bValue: (0, a.default)(parseInt(u[2], 10), 255),
                aValue: (0, a.default)(parseFloat(u[3]), 1),
              };
            })({
              element: e,
              actionTypeId: i.actionTypeId,
              computedStyle: n,
              getStyle: o,
            });
          case ea:
            return { value: (0, a.default)(o(e, V), n.display) };
          case eo:
            return t[i.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let ew = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eR = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eN = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, u.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, u.default)(
                n.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eC({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case $:
          case Q:
          case q:
          case K: {
            let { xValue: e, yValue: n, zValue: i } = t.config;
            return { xValue: e, yValue: n, zValue: i };
          }
          case et: {
            let { getStyle: i, setStyle: r, getProperty: a } = n,
              { widthUnit: o, heightUnit: u } = t.config,
              { widthValue: l, heightValue: c } = t.config;
            if (!E.IS_BROWSER_ENV) return { widthValue: l, heightValue: c };
            if (o === U) {
              let t = i(e, C);
              r(e, C, ""), (l = a(e, "offsetWidth")), r(e, C, t);
            }
            if (u === U) {
              let t = i(e, L);
              r(e, L, ""), (c = a(e, "offsetHeight")), r(e, L, t);
            }
            return { widthValue: l, heightValue: c };
          }
          case en:
          case ei:
          case er: {
            let {
              rValue: i,
              gValue: r,
              bValue: a,
              aValue: o,
              globalSwatchId: u,
            } = t.config;
            if (u && u.startsWith("--")) {
              let { getStyle: t } = n,
                i = t(e, u),
                r = (0, f.normalizeColor)(i);
              return {
                rValue: r.red,
                gValue: r.green,
                bValue: r.blue,
                aValue: r.alpha,
              };
            }
            return { rValue: i, gValue: r, bValue: a, aValue: o };
          }
          case J:
            return t.config.filters.reduce(ew, {});
          case ee:
            return t.config.fontVariations.reduce(eR, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eL(e) {
        return /^TRANSFORM_/.test(e)
          ? W
          : /^STYLE_/.test(e)
          ? z
          : /^GENERAL_/.test(e)
          ? H
          : /^PLUGIN_/.test(e)
          ? Y
          : void 0;
      }
      function eS(e, t) {
        return e === z ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eF(e, t, n, i, r, a, u, l, c) {
        switch (l) {
          case W:
            var s = e,
              d = t,
              f = n,
              g = r,
              h = u;
            let m = ex
                .map((e) => {
                  let t = eP[e],
                    {
                      xValue: n = t.xValue,
                      yValue: i = t.yValue,
                      zValue: r = t.zValue,
                      xUnit: a = "",
                      yUnit: o = "",
                      zUnit: u = "",
                    } = d[e] || {};
                  switch (e) {
                    case $:
                      return `${y}(${n}${a}, ${i}${o}, ${r}${u})`;
                    case Q:
                      return `${I}(${n}${a}, ${i}${o}, ${r}${u})`;
                    case q:
                      return `${v}(${n}${a}) ${T}(${i}${o}) ${b}(${r}${u})`;
                    case K:
                      return `${_}(${n}${a}, ${i}${o})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: w } = h;
            eU(s, E.TRANSFORM_PREFIXED, h),
              w(s, E.TRANSFORM_PREFIXED, m),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: i }
              ) {
                return (
                  (e === $ && void 0 !== i) ||
                  (e === Q && void 0 !== i) ||
                  (e === q && (void 0 !== t || void 0 !== n))
                );
              })(g, f) && w(s, E.TRANSFORM_STYLE_PREFIXED, O);
            return;
          case z:
            return (function (e, t, n, i, r, a) {
              let { setStyle: u } = a;
              switch (i.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: r = "" } = i.config,
                    { widthValue: o, heightValue: l } = n;
                  void 0 !== o &&
                    (t === U && (t = "px"), eU(e, C, a), u(e, C, o + t)),
                    void 0 !== l &&
                      (r === U && (r = "px"), eU(e, L, a), u(e, L, l + r));
                  break;
                }
                case J:
                  var l = i.config;
                  let c = (0, o.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${ek(n, l)})`,
                      ""
                    ),
                    { setStyle: s } = a;
                  eU(e, R, a), s(e, R, c);
                  break;
                case ee:
                  i.config;
                  let d = (0, o.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      []
                    ).join(", "),
                    { setStyle: f } = a;
                  eU(e, N, a), f(e, N, d);
                  break;
                case en:
                case ei:
                case er: {
                  let t = el[i.actionTypeId],
                    r = Math.round(n.rValue),
                    o = Math.round(n.gValue),
                    l = Math.round(n.bValue),
                    c = n.aValue;
                  eU(e, t, a),
                    u(
                      e,
                      t,
                      c >= 1
                        ? `rgb(${r},${o},${l})`
                        : `rgba(${r},${o},${l},${c})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = i.config;
                  eU(e, r, a), u(e, r, n.value + t);
                }
              }
            })(e, 0, n, r, a, u);
          case H:
            var S = e,
              F = r,
              P = u;
            let { setStyle: M } = P;
            if (F.actionTypeId === ea) {
              let { value: e } = F.config;
              M(S, V, e === A && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
            }
            return;
          case Y: {
            let { actionTypeId: e } = r;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(c, t, r);
          }
        }
      }
      let eP = {
          [$]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [Q]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eM = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eD = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        ek = (e, t) => {
          let n = (0, u.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        ex = Object.keys(eP),
        eV = /^rgb/,
        eG = RegExp("rgba?\\(([^)]+)\\)");
      function eU(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let i = ec[t];
        if (!i) return;
        let { getStyle: r, setStyle: a } = n,
          o = r(e, G);
        if (!o) return void a(e, G, i);
        let u = o.split(B).map(eu);
        -1 === u.indexOf(i) && a(e, G, u.concat(i).join(B));
      }
      function eB(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let i = ec[t];
        if (!i) return;
        let { getStyle: r, setStyle: a } = n,
          o = r(e, G);
        o &&
          -1 !== o.indexOf(i) &&
          a(
            e,
            G,
            o
              .split(B)
              .map(eu)
              .filter((e) => e !== i)
              .join(B)
          );
      }
      function ej({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: i = {}, actionLists: r = {} } = n;
        Object.keys(i).forEach((e) => {
          let n = i[e],
            { config: a } = n.action,
            { actionListId: o } = a,
            u = r[o];
          u && eX({ actionList: u, event: n, elementApi: t });
        }),
          Object.keys(r).forEach((e) => {
            eX({ actionList: r[e], elementApi: t });
          });
      }
      function eX({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: i, continuousParameterGroups: r } = e;
        i &&
          i.forEach((e) => {
            eW({ actionGroup: e, event: t, elementApi: n });
          }),
          r &&
            r.forEach((e) => {
              let { continuousActionGroups: i } = e;
              i.forEach((e) => {
                eW({ actionGroup: e, event: t, elementApi: n });
              });
            });
      }
      function eW({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: i } = e;
        i.forEach((e) => {
          let i,
            { actionTypeId: r, config: a } = e;
          (i = (0, p.isPluginType)(r)
            ? (t) => (0, p.clearPlugin)(r)(t, e)
            : ez({ effect: eY, actionTypeId: r, elementApi: n })),
            ev({ config: a, event: t, elementApi: n }).forEach(i);
        });
      }
      function eH(e, t, n) {
        let { setStyle: i, getStyle: r } = n,
          { actionTypeId: a } = t;
        if (a === et) {
          let { config: n } = t;
          n.widthUnit === U && i(e, C, ""), n.heightUnit === U && i(e, L, "");
        }
        r(e, G) && ez({ effect: eB, actionTypeId: a, elementApi: n })(e);
      }
      let ez =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (i) => {
          switch (t) {
            case $:
            case Q:
            case q:
            case K:
              e(i, E.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(i, R, n);
              break;
            case ee:
              e(i, N, n);
              break;
            case Z:
              e(i, w, n);
              break;
            case et:
              e(i, C, n), e(i, L, n);
              break;
            case en:
            case ei:
            case er:
              e(i, el[t], n);
              break;
            case ea:
              e(i, V, n);
          }
        };
      function eY(e, t, n) {
        let { setStyle: i } = n;
        eB(e, t, n),
          i(e, t, ""),
          t === E.TRANSFORM_PREFIXED && i(e, E.TRANSFORM_STYLE_PREFIXED, "");
      }
      function e$(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, i) => {
            let { config: r } = e,
              a = r.delay + r.duration;
            a >= t && ((t = a), (n = i));
          }),
          n
        );
      }
      function eQ(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: i } = e,
          { actionItem: r, verboseTimeElapsed: a = 0 } = t,
          o = 0,
          u = 0;
        return (
          n.forEach((e, t) => {
            if (i && 0 === t) return;
            let { actionItems: n } = e,
              l = n[e$(n)],
              { config: c, actionTypeId: s } = l;
            r.id === l.id && (u = o + a);
            let d = eL(s) === H ? 0 : c.duration;
            o += c.delay + d;
          }),
          o > 0 ? (0, d.optimizeFloat)(u / o) : 0
        );
      }
      function eq({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: i, continuousParameterGroups: r } = e,
          a = [],
          o = (e) => (
            a.push((0, l.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          i && i.some(({ actionItems: e }) => e.some(o)),
          r &&
            r.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(o));
            }),
          (0, l.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: a }] },
          })
        );
      }
      function eK(e, { basedOn: t }) {
        return (
          (e === c.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === c.EventBasedOn.ELEMENT || null == t)) ||
          (e === c.EventTypeConsts.MOUSE_MOVE && t === c.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + j + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, s.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + X + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: i = "" } = e;
        return t + X + n + X + i;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let i = Object.keys(e),
          r = Object.keys(t);
        if (i.length !== r.length) return !1;
        for (let r = 0; r < i.length; r++)
          if (!Object.hasOwn(t, i[r]) || !n(e[i[r]], t[i[r]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        createElementState: function () {
          return _;
        },
        ixElements: function () {
          return b;
        },
        mergeActionState: function () {
          return O;
        },
      };
      for (var r in i)
        Object.defineProperty(t, r, { enumerable: !0, get: i[r] });
      let a = n(1185),
        o = n(7087),
        {
          HTML_ELEMENT: u,
          PLAIN_OBJECT: l,
          ABSTRACT_NODE: c,
          CONFIG_X_VALUE: s,
          CONFIG_Y_VALUE: d,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: E,
          CONFIG_Y_UNIT: g,
          CONFIG_Z_UNIT: h,
          CONFIG_UNIT: m,
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: y,
          IX2_INSTANCE_ADDED: I,
          IX2_ELEMENT_STATE_CHANGED: v,
        } = o.IX2EngineActionTypes,
        T = {},
        b = (e = T, t = {}) => {
          switch (t.type) {
            case y:
              return T;
            case I: {
              let {
                  elementId: n,
                  element: i,
                  origin: r,
                  actionItem: o,
                  refType: u,
                } = t.payload,
                { actionTypeId: l } = o,
                c = e;
              return (
                (0, a.getIn)(c, [n, i]) !== i && (c = _(c, i, u, n, o)),
                O(c, n, l, r, o)
              );
            }
            case v: {
              let {
                elementId: n,
                actionTypeId: i,
                current: r,
                actionItem: a,
              } = t.payload;
              return O(e, n, i, r, a);
            }
            default:
              return e;
          }
        };
      function _(e, t, n, i, r) {
        let o =
          n === l ? (0, a.getIn)(r, ["config", "target", "objectId"]) : null;
        return (0, a.mergeIn)(e, [i], { id: i, ref: t, refId: o, refType: n });
      }
      function O(e, t, n, i, r) {
        let o = (function (e) {
          let { config: t } = e;
          return A.reduce((e, n) => {
            let i = n[0],
              r = n[1],
              a = t[i],
              o = t[r];
            return null != a && null != o && (e[r] = o), e;
          }, {});
        })(r);
        return (0, a.mergeIn)(e, [t, "refState", n], i, o);
      }
      let A = [
        [s, E],
        [d, g],
        [f, h],
        [p, m],
      ];
    },
    379: function () {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-407",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "953a3ef5-f13b-eed2-7aed-ac6a2dba9042",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "953a3ef5-f13b-eed2-7aed-ac6a2dba9042",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17aa2bde60b,
          },
          "e-2": {
            id: "e-2",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-590",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "953a3ef5-f13b-eed2-7aed-ac6a2dba9042",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "953a3ef5-f13b-eed2-7aed-ac6a2dba9042",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17aa2bde60b,
          },
          "e-5": {
            id: "e-5",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-6",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "e1552a5e-7c84-dba4-6bd5-8a1e3f06002a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e1552a5e-7c84-dba4-6bd5-8a1e3f06002a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19441a20d75,
          },
          "e-6": {
            id: "e-6",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-5",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "e1552a5e-7c84-dba4-6bd5-8a1e3f06002a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e1552a5e-7c84-dba4-6bd5-8a1e3f06002a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19441a20d75,
          },
          "e-7": {
            id: "e-7",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-8",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "e1552a5e-7c84-dba4-6bd5-8a1e3f060029",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e1552a5e-7c84-dba4-6bd5-8a1e3f060029",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19441aa383e,
          },
          "e-8": {
            id: "e-8",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-7",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "e1552a5e-7c84-dba4-6bd5-8a1e3f060029",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e1552a5e-7c84-dba4-6bd5-8a1e3f060029",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19441aa383e,
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-10",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "691218dd6e6cc06bef3b5f3f|39059d9a-b4ee-b797-1ea8-6954dee4baed",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "691218dd6e6cc06bef3b5f3f|39059d9a-b4ee-b797-1ea8-6954dee4baed",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944b804b48,
          },
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-12",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "691218dd6e6cc06bef3b5f3f|0571cf39-4d4a-4a9f-55e8-9b791b9afa80",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "691218dd6e6cc06bef3b5f3f|0571cf39-4d4a-4a9f-55e8-9b791b9afa80",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944b81f7d6,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-14",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "691218dd6e6cc06bef3b5f3f|fe0069dd-e760-4708-d837-e942b7eb0acc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "691218dd6e6cc06bef3b5f3f|fe0069dd-e760-4708-d837-e942b7eb0acc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944b82654f,
          },
          "e-15": {
            id: "e-15",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-16",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "691218dd6e6cc06bef3b5f3f|7c80cfa8-1efe-67d9-cb6b-aa1a37fab4e0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "691218dd6e6cc06bef3b5f3f|7c80cfa8-1efe-67d9-cb6b-aa1a37fab4e0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944b82d376,
          },
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-18",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "691218dd6e6cc06bef3b5f3f|5d6a46c6-61cc-cd38-256f-3d038a98b568",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "691218dd6e6cc06bef3b5f3f|5d6a46c6-61cc-cd38-256f-3d038a98b568",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944b8334c7,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-20",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "691218dd6e6cc06bef3b5f3f|c1ff5a39-bff6-42d0-a9cc-876383ab1d1a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "691218dd6e6cc06bef3b5f3f|c1ff5a39-bff6-42d0-a9cc-876383ab1d1a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944b834abf,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-22",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "691218dd6e6cc06bef3b5f3f|7051c5c4-f4cf-773c-4816-6d456f1d6aa7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "691218dd6e6cc06bef3b5f3f|7051c5c4-f4cf-773c-4816-6d456f1d6aa7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944b83aa9e,
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-32",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "691218dd6e6cc06bef3b5f3f|2f98f199-efdc-ad7f-6681-8fdb848d6299",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "691218dd6e6cc06bef3b5f3f|2f98f199-efdc-ad7f-6681-8fdb848d6299",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944b8f8c06,
          },
          "e-33": {
            id: "e-33",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-34",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "691218dd6e6cc06bef3b5f3f|5c69058c-310c-ee1a-a18b-4874e0033ac2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "691218dd6e6cc06bef3b5f3f|5c69058c-310c-ee1a-a18b-4874e0033ac2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944b8fadd7,
          },
          "e-35": {
            id: "e-35",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-36",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "691218dd6e6cc06bef3b5f3f|8eaa5e36-f6cd-b312-660c-69aea3cbeb84",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "691218dd6e6cc06bef3b5f3f|8eaa5e36-f6cd-b312-660c-69aea3cbeb84",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944b8fd677,
          },
          "e-37": {
            id: "e-37",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-38",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".home_work_item",
              originalId:
                "691218dd6e6cc06bef3b5f3f|aff7a404-a6d4-ebe0-d2ac-e588586a7bc6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".home_work_item",
                originalId:
                  "691218dd6e6cc06bef3b5f3f|aff7a404-a6d4-ebe0-d2ac-e588586a7bc6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944b948eb8,
          },
          "e-38": {
            id: "e-38",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-37",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".home_work_item",
              originalId:
                "691218dd6e6cc06bef3b5f3f|aff7a404-a6d4-ebe0-d2ac-e588586a7bc6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".home_work_item",
                originalId:
                  "691218dd6e6cc06bef3b5f3f|aff7a404-a6d4-ebe0-d2ac-e588586a7bc6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944b948eb8,
          },
          "e-41": {
            id: "e-41",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-42",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "e1552a5e-7c84-dba4-6bd5-8a1e3f060029",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e1552a5e-7c84-dba4-6bd5-8a1e3f060029",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944b9e450e,
          },
          "e-43": {
            id: "e-43",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-44",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "691218dd6e6cc06bef3b5f3f|93ac464c-1346-1fd1-f23b-2391fd00917c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "691218dd6e6cc06bef3b5f3f|93ac464c-1346-1fd1-f23b-2391fd00917c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944b9f448f,
          },
          "e-52": {
            id: "e-52",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-51",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "691218dd6e6cc06bef3b5f3f",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "691218dd6e6cc06bef3b5f3f",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1944baaabe1,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "Navbar menu [Close]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-middle",
                        selectorGuids: ["50bb5f63-e6cd-0784-9600-209737573e54"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-bottom",
                        selectorGuids: ["50bb5f63-e6cd-0784-9600-209737573e56"],
                      },
                      yValue: -8,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-top",
                        selectorGuids: ["50bb5f63-e6cd-0784-9600-209737573e53"],
                      },
                      yValue: 8,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-top",
                        selectorGuids: ["50bb5f63-e6cd-0784-9600-209737573e53"],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-bottom",
                        selectorGuids: ["50bb5f63-e6cd-0784-9600-209737573e56"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17a9f3042c6,
          },
          "a-2": {
            id: "a-2",
            title: "Navbar menu [Open]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-bottom",
                        selectorGuids: ["50bb5f63-e6cd-0784-9600-209737573e56"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-top",
                        selectorGuids: ["50bb5f63-e6cd-0784-9600-209737573e53"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-bottom",
                        selectorGuids: ["50bb5f63-e6cd-0784-9600-209737573e56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-top",
                        selectorGuids: ["50bb5f63-e6cd-0784-9600-209737573e53"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 400,
                      easing: "inOutQuint",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon_line-middle",
                        selectorGuids: ["50bb5f63-e6cd-0784-9600-209737573e54"],
                      },
                      widthValue: 24,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17a9f363110,
          },
          "a-5": {
            id: "a-5",
            title: "Home services FAQ [opens]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_accordion-pane",
                        selectorGuids: ["61a5f0f6-945a-4898-a599-a0b2b566782d"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-5-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_accordion-pane",
                        selectorGuids: ["61a5f0f6-945a-4898-a599-a0b2b566782d"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_accordion-pane",
                        selectorGuids: ["61a5f0f6-945a-4898-a599-a0b2b566782d"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_accordion-pane",
                        selectorGuids: ["61a5f0f6-945a-4898-a599-a0b2b566782d"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-5-n-8",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_icon-wrapper",
                        selectorGuids: ["7999d138-e861-d09a-3fd3-7120777469bc"],
                      },
                      globalSwatchId: "--base-color-brand--blue",
                      rValue: 45,
                      bValue: 236,
                      gValue: 41,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-5-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_icon",
                        selectorGuids: ["be68df64-a0a7-4534-0451-527bd3e99b62"],
                      },
                      xValue: 0.35,
                      yValue: 0.35,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-5-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_title",
                        selectorGuids: ["d5c6a357-f04b-f370-7033-4b84f0ad2afc"],
                      },
                      globalSwatchId: "--base-color-brand--blue",
                      rValue: 45,
                      bValue: 236,
                      gValue: 41,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19441a21b5d,
          },
          "a-6": {
            id: "a-6",
            title: "Home services FAQ [close]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_accordion-pane",
                        selectorGuids: ["61a5f0f6-945a-4898-a599-a0b2b566782d"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-5",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_icon-wrapper",
                        selectorGuids: ["7999d138-e861-d09a-3fd3-7120777469bc"],
                      },
                      globalSwatchId: "--base-color-neutral--transparent",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0,
                    },
                  },
                  {
                    id: "a-6-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_icon",
                        selectorGuids: ["be68df64-a0a7-4534-0451-527bd3e99b62"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-6-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_title",
                        selectorGuids: ["d5c6a357-f04b-f370-7033-4b84f0ad2afc"],
                      },
                      globalSwatchId: "--base-color-brand--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-6-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_accordion-pane",
                        selectorGuids: ["61a5f0f6-945a-4898-a599-a0b2b566782d"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19441a21b5d,
          },
          "a-3": {
            id: "a-3",
            title: "Home services hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-3-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_image",
                        selectorGuids: ["9ad733ae-bad4-202b-df62-a769a81f36ec"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-3-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_image",
                        selectorGuids: ["9ad733ae-bad4-202b-df62-a769a81f36ec"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-3-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_image",
                        selectorGuids: ["9ad733ae-bad4-202b-df62-a769a81f36ec"],
                      },
                      xValue: 0.75,
                      yValue: 0.75,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-3-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_image",
                        selectorGuids: ["9ad733ae-bad4-202b-df62-a769a81f36ec"],
                      },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-3-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_image",
                        selectorGuids: ["9ad733ae-bad4-202b-df62-a769a81f36ec"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-3-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_image",
                        selectorGuids: ["9ad733ae-bad4-202b-df62-a769a81f36ec"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x194419e2f05,
          },
          "a-4": {
            id: "a-4",
            title: "Home services hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-4-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_image",
                        selectorGuids: ["9ad733ae-bad4-202b-df62-a769a81f36ec"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-4-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_image",
                        selectorGuids: ["9ad733ae-bad4-202b-df62-a769a81f36ec"],
                      },
                      xValue: 0.75,
                      yValue: 0.75,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-4-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_services_image",
                        selectorGuids: ["9ad733ae-bad4-202b-df62-a769a81f36ec"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x194419e2f05,
          },
          "a-7": {
            id: "a-7",
            title: "Slide from bottom x0.1",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "691218dd6e6cc06bef3b5f3f|39059d9a-b4ee-b797-1ea8-6954dee4baed",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-7-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "691218dd6e6cc06bef3b5f3f|39059d9a-b4ee-b797-1ea8-6954dee4baed",
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "691218dd6e6cc06bef3b5f3f|39059d9a-b4ee-b797-1ea8-6954dee4baed",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-7-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "691218dd6e6cc06bef3b5f3f|39059d9a-b4ee-b797-1ea8-6954dee4baed",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1944b80641f,
          },
          "a-8": {
            id: "a-8",
            title: "Slide from bottom x0.2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "691218dd6e6cc06bef3b5f3f|39059d9a-b4ee-b797-1ea8-6954dee4baed",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-8-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "691218dd6e6cc06bef3b5f3f|39059d9a-b4ee-b797-1ea8-6954dee4baed",
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-8-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "691218dd6e6cc06bef3b5f3f|39059d9a-b4ee-b797-1ea8-6954dee4baed",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-8-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "691218dd6e6cc06bef3b5f3f|39059d9a-b4ee-b797-1ea8-6954dee4baed",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1944b80641f,
          },
          "a-9": {
            id: "a-9",
            title: "Slide from bottom x0.3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "691218dd6e6cc06bef3b5f3f|39059d9a-b4ee-b797-1ea8-6954dee4baed",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-9-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "691218dd6e6cc06bef3b5f3f|39059d9a-b4ee-b797-1ea8-6954dee4baed",
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-9-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "691218dd6e6cc06bef3b5f3f|39059d9a-b4ee-b797-1ea8-6954dee4baed",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-9-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "691218dd6e6cc06bef3b5f3f|39059d9a-b4ee-b797-1ea8-6954dee4baed",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1944b80641f,
          },
          "a-11": {
            id: "a-11",
            title: "Home works [hover]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-11-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_work_icon",
                        selectorGuids: ["30a8a25c-61ba-a52a-9ddf-9e26d716c189"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-11-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image-default-cover",
                        selectorGuids: ["8f1af95c-3ee1-5d13-7213-3af97148e2b0"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-11-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_work_title-wrap",
                        selectorGuids: ["c2fd9ed4-7b76-34e7-094f-dcc745960bed"],
                      },
                      globalSwatchId: "--text-color--text-primary",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-11-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_work_icon-wrapper",
                        selectorGuids: ["ea33ec4a-1ae6-6d5b-8dd5-d4eeb6819b50"],
                      },
                      globalSwatchId: "--base-color-neutral--transparent",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-11-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 650,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_work_icon",
                        selectorGuids: ["30a8a25c-61ba-a52a-9ddf-9e26d716c189"],
                      },
                      xValue: 0.35,
                      yValue: 0.35,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-11-n-4",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 650,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_work_icon-wrapper",
                        selectorGuids: ["ea33ec4a-1ae6-6d5b-8dd5-d4eeb6819b50"],
                      },
                      globalSwatchId:
                        "--background-color--background-alternate",
                      rValue: 45,
                      bValue: 236,
                      gValue: 41,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-11-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 650,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_work_title-wrap",
                        selectorGuids: ["c2fd9ed4-7b76-34e7-094f-dcc745960bed"],
                      },
                      globalSwatchId: "--text-color--text-secondary",
                      rValue: 45,
                      bValue: 236,
                      gValue: 41,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-11-n-8",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 650,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image-default-cover",
                        selectorGuids: ["8f1af95c-3ee1-5d13-7213-3af97148e2b0"],
                      },
                      xValue: 1.15,
                      yValue: 1.15,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1944b94aee7,
          },
          "a-12": {
            id: "a-12",
            title: "Home works [hover out]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-12-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 650,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_work_icon",
                        selectorGuids: ["30a8a25c-61ba-a52a-9ddf-9e26d716c189"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-12-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 650,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image-default-cover",
                        selectorGuids: ["8f1af95c-3ee1-5d13-7213-3af97148e2b0"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-12-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 650,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_work_title-wrap",
                        selectorGuids: ["c2fd9ed4-7b76-34e7-094f-dcc745960bed"],
                      },
                      globalSwatchId: "--text-color--text-primary",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-12-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 650,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".home_work_icon-wrapper",
                        selectorGuids: ["ea33ec4a-1ae6-6d5b-8dd5-d4eeb6819b50"],
                      },
                      globalSwatchId: "--base-color-neutral--transparent",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1944b94aee7,
          },
          "a-15": {
            id: "a-15",
            title: "Page load finishes",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-15-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e4,
                      target: {
                        id: "691218dd6e6cc06bef3b5f3f|8fef85f7-e723-1511-dd46-274e13a266c0",
                      },
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-15-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "691218dd6e6cc06bef3b5f3f|8fef85f7-e723-1511-dd46-274e13a266c0",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1944baab98f,
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
