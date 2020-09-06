!(function () {
    'use strict';
    function e() {}
    const t = (e) => e;
    function i(e) {
        return e();
    }
    function r() {
        return Object.create(null);
    }
    function n(e) {
        e.forEach(i);
    }
    function a(e) {
        return 'function' == typeof e;
    }
    function o(e, t) {
        return e != e ? t == t : e !== t || (e && 'object' == typeof e) || 'function' == typeof e;
    }
    const s = 'undefined' != typeof window;
    let l = s ? () => window.performance.now() : () => Date.now(),
        d = s ? (e) => requestAnimationFrame(e) : e;
    const c = new Set();
    function u(e) {
        c.forEach((t) => {
            t.c(e) || (c.delete(t), t.f());
        }),
            0 !== c.size && d(u);
    }
    function p(e, t) {
        e.appendChild(t);
    }
    function f(e, t, i) {
        e.insertBefore(t, i || null);
    }
    function h(e) {
        e.parentNode.removeChild(e);
    }
    function m(e, t) {
        for (let i = 0; i < e.length; i += 1) e[i] && e[i].d(t);
    }
    function v(e) {
        return document.createElement(e);
    }
    function g(e) {
        return document.createElementNS('http://www.w3.org/2000/svg', e);
    }
    function b(e) {
        return document.createTextNode(e);
    }
    function w() {
        return b(' ');
    }
    function x(e, t, i, r) {
        return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
    }
    function y(e, t, i) {
        null == i ? e.removeAttribute(t) : e.getAttribute(t) !== i && e.setAttribute(t, i);
    }
    function A(e, t, i, r) {
        e.style.setProperty(t, i, r ? 'important' : '');
    }
    function C(e, t, i) {
        e.classList[i ? 'add' : 'remove'](t);
    }
    const T = new Set();
    let S,
        E = 0;
    function k(e, t) {
        const i = (e.style.animation || '').split(', '),
            r = i.filter(t ? (e) => e.indexOf(t) < 0 : (e) => -1 === e.indexOf('__svelte')),
            n = i.length - r.length;
        n &&
            ((e.style.animation = r.join(', ')),
            (E -= n),
            E ||
                d(() => {
                    E ||
                        (T.forEach((e) => {
                            const t = e.__svelte_stylesheet;
                            let i = t.cssRules.length;
                            for (; i--; ) t.deleteRule(i);
                            e.__svelte_rules = {};
                        }),
                        T.clear());
                }));
    }
    function M(e) {
        S = e;
    }
    function P() {
        if (!S) throw new Error('Function called outside component initialization');
        return S;
    }
    const L = [],
        B = [],
        O = [],
        z = [],
        I = Promise.resolve();
    let N = !1;
    function D() {
        N || ((N = !0), I.then(H));
    }
    function j() {
        return D(), I;
    }
    function G(e) {
        O.push(e);
    }
    let $ = !1;
    const F = new Set();
    function H() {
        if (!$) {
            $ = !0;
            do {
                for (let e = 0; e < L.length; e += 1) {
                    const t = L[e];
                    M(t), R(t.$$);
                }
                for (L.length = 0; B.length; ) B.pop()();
                for (let e = 0; e < O.length; e += 1) {
                    const t = O[e];
                    F.has(t) || (F.add(t), t());
                }
                O.length = 0;
            } while (L.length);
            for (; z.length; ) z.pop()();
            (N = !1), ($ = !1), F.clear();
        }
    }
    function R(e) {
        if (null !== e.fragment) {
            e.update(), n(e.before_update);
            const t = e.dirty;
            (e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(G);
        }
    }
    let Y;
    function V(e, t, i) {
        e.dispatchEvent(
            (function (e, t) {
                const i = document.createEvent('CustomEvent');
                return i.initCustomEvent(e, !1, !1, t), i;
            })(`${t ? 'intro' : 'outro'}${i}`)
        );
    }
    const _ = new Set();
    let q;
    function W(e, t) {
        e && e.i && (_.delete(e), e.i(t));
    }
    const U = { duration: 0 };
    function X(i, r, n) {
        let o,
            s,
            p = r(i, n),
            f = !1,
            h = 0;
        function m() {
            o && k(i, o);
        }
        function g() {
            const { delay: r = 0, duration: n = 300, easing: a = t, tick: g = e, css: b } = p || U;
            b &&
                (o = (function (e, t, i, r, n, a, o, s = 0) {
                    const l = 16.666 / r;
                    let d = '{\n';
                    for (let e = 0; e <= 1; e += l) {
                        const r = t + (i - t) * a(e);
                        d += 100 * e + `%{${o(r, 1 - r)}}\n`;
                    }
                    const c = d + `100% {${o(i, 1 - i)}}\n}`,
                        u = `__svelte_${(function (e) {
                            let t = 5381,
                                i = e.length;
                            for (; i--; ) t = ((t << 5) - t) ^ e.charCodeAt(i);
                            return t >>> 0;
                        })(c)}_${s}`,
                        p = e.ownerDocument;
                    T.add(p);
                    const f = p.__svelte_stylesheet || (p.__svelte_stylesheet = p.head.appendChild(v('style')).sheet),
                        h = p.__svelte_rules || (p.__svelte_rules = {});
                    h[u] || ((h[u] = !0), f.insertRule(`@keyframes ${u} ${c}`, f.cssRules.length));
                    const m = e.style.animation || '';
                    return (e.style.animation = `${m ? m + ', ' : ''}${u} ${r}ms linear ${n}ms 1 both`), (E += 1), u;
                })(i, 0, 1, n, r, a, b, h++)),
                g(0, 1);
            const w = l() + r,
                x = w + n;
            s && s.abort(),
                (f = !0),
                G(() => V(i, !0, 'start')),
                (s = (function (e) {
                    let t;
                    return (
                        0 === c.size && d(u),
                        {
                            promise: new Promise((i) => {
                                c.add((t = { c: e, f: i }));
                            }),
                            abort() {
                                c.delete(t);
                            },
                        }
                    );
                })((e) => {
                    if (f) {
                        if (e >= x) return g(1, 0), V(i, !0, 'end'), m(), (f = !1);
                        if (e >= w) {
                            const t = a((e - w) / n);
                            g(t, 1 - t);
                        }
                    }
                    return f;
                }));
        }
        let b = !1;
        return {
            start() {
                b ||
                    (k(i),
                    a(p)
                        ? ((p = p()),
                          (Y ||
                              ((Y = Promise.resolve()),
                              Y.then(() => {
                                  Y = null;
                              })),
                          Y).then(g))
                        : g());
            },
            invalidate() {
                b = !1;
            },
            end() {
                f && (m(), (f = !1));
            },
        };
    }
    function Q(e, t) {
        const i = (t.token = {});
        function r(e, r, a, o) {
            if (t.token !== i) return;
            t.resolved = o;
            let s = t.ctx;
            void 0 !== a && ((s = s.slice()), (s[a] = o));
            const l = e && (t.current = e)(s);
            let d = !1;
            t.block &&
                (t.blocks
                    ? t.blocks.forEach((e, i) => {
                          i !== r &&
                              e &&
                              ((q = { r: 0, c: [], p: q }),
                              (function (e, t, i, r) {
                                  if (e && e.o) {
                                      if (_.has(e)) return;
                                      _.add(e),
                                          q.c.push(() => {
                                              _.delete(e), r && (i && e.d(1), r());
                                          }),
                                          e.o(t);
                                  }
                              })(e, 1, 1, () => {
                                  t.blocks[i] = null;
                              }),
                              q.r || n(q.c),
                              (q = q.p));
                      })
                    : t.block.d(1),
                l.c(),
                W(l, 1),
                l.m(t.mount(), t.anchor),
                (d = !0)),
                (t.block = l),
                t.blocks && (t.blocks[r] = l),
                d && H();
        }
        if ((a = e) && 'object' == typeof a && 'function' == typeof a.then) {
            const i = P();
            if (
                (e.then(
                    (e) => {
                        M(i), r(t.then, 1, t.value, e), M(null);
                    },
                    (e) => {
                        M(i), r(t.catch, 2, t.error, e), M(null);
                    }
                ),
                t.current !== t.pending)
            )
                return r(t.pending, 0), !0;
        } else {
            if (t.current !== t.then) return r(t.then, 1, t.value, e), !0;
            t.resolved = e;
        }
        var a;
    }
    function Z(t, o, s, l, d, c, u = [-1]) {
        const p = S;
        M(t);
        const f = o.props || {},
            m = (t.$$ = { fragment: null, ctx: null, props: c, update: e, not_equal: d, bound: r(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(p ? p.$$.context : []), callbacks: r(), dirty: u, skip_bound: !1 });
        let v = !1;
        if (
            ((m.ctx = s
                ? s(t, f, (e, i, ...r) => {
                      const n = r.length ? r[0] : i;
                      return (
                          m.ctx &&
                              d(m.ctx[e], (m.ctx[e] = n)) &&
                              (!m.skip_bound && m.bound[e] && m.bound[e](n),
                              v &&
                                  (function (e, t) {
                                      -1 === e.$$.dirty[0] && (L.push(e), D(), e.$$.dirty.fill(0)), (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
                                  })(t, e)),
                          i
                      );
                  })
                : []),
            m.update(),
            (v = !0),
            n(m.before_update),
            (m.fragment = !!l && l(m.ctx)),
            o.target)
        ) {
            if (o.hydrate) {
                const e = (function (e) {
                    return Array.from(e.childNodes);
                })(o.target);
                m.fragment && m.fragment.l(e), e.forEach(h);
            } else m.fragment && m.fragment.c();
            o.intro && W(t.$$.fragment),
                (function (e, t, r) {
                    const { fragment: o, on_mount: s, on_destroy: l, after_update: d } = e.$$;
                    o && o.m(t, r),
                        G(() => {
                            const t = s.map(i).filter(a);
                            l ? l.push(...t) : n(t), (e.$$.on_mount = []);
                        }),
                        d.forEach(G);
                })(t, o.target, o.anchor),
                H();
        }
        M(p);
    }
    let K;
    function J(e) {
        return null !== e && 'object' == typeof e && 'constructor' in e && e.constructor === Object;
    }
    function ee(e, t) {
        void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            Object.keys(t).forEach(function (i) {
                void 0 === e[i] ? (e[i] = t[i]) : J(t[i]) && J(e[i]) && Object.keys(t[i]).length > 0 && ee(e[i], t[i]);
            });
    }
    'function' == typeof HTMLElement &&
        (K = class extends HTMLElement {
            constructor() {
                super(), this.attachShadow({ mode: 'open' });
            }
            connectedCallback() {
                for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
            }
            attributeChangedCallback(e, t, i) {
                this[e] = i;
            }
            $destroy() {
                !(function (e, t) {
                    const i = e.$$;
                    null !== i.fragment && (n(i.on_destroy), i.fragment && i.fragment.d(t), (i.on_destroy = i.fragment = null), (i.ctx = []));
                })(this, 1),
                    (this.$destroy = e);
            }
            $on(e, t) {
                const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
                return (
                    i.push(t),
                    () => {
                        const e = i.indexOf(t);
                        -1 !== e && i.splice(e, 1);
                    }
                );
            }
            $set(e) {
                var t;
                this.$$set && ((t = e), 0 !== Object.keys(t).length) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
            }
        });
    var te = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: '' },
        querySelector: function () {
            return null;
        },
        querySelectorAll: function () {
            return [];
        },
        getElementById: function () {
            return null;
        },
        createEvent: function () {
            return { initEvent: function () {} };
        },
        createElement: function () {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                    return [];
                },
            };
        },
        createElementNS: function () {
            return {};
        },
        importNode: function () {
            return null;
        },
        location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
    };
    function ie() {
        var e = 'undefined' != typeof document ? document : {};
        return ee(e, te), e;
    }
    var re = {
        document: te,
        navigator: { userAgent: '' },
        location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
        history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
        CustomEvent: function () {
            return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return '';
                },
            };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
            return {};
        },
        requestAnimationFrame: function (e) {
            return 'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
            'undefined' != typeof setTimeout && clearTimeout(e);
        },
    };
    function ne() {
        var e = 'undefined' != typeof window ? window : {};
        return ee(e, re), e;
    }
    function ae(e) {
        return (ae = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
    }
    function oe(e, t) {
        return (oe =
            Object.setPrototypeOf ||
            function (e, t) {
                return (e.__proto__ = t), e;
            })(e, t);
    }
    function se() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
            return !1;
        }
    }
    function le(e, t, i) {
        return (le = se()
            ? Reflect.construct
            : function (e, t, i) {
                  var r = [null];
                  r.push.apply(r, t);
                  var n = new (Function.bind.apply(e, r))();
                  return i && oe(n, i.prototype), n;
              }).apply(null, arguments);
    }
    function de(e) {
        var t = 'function' == typeof Map ? new Map() : void 0;
        return (de = function (e) {
            if (null === e || ((i = e), -1 === Function.toString.call(i).indexOf('[native code]'))) return e;
            var i;
            if ('function' != typeof e) throw new TypeError('Super expression must either be null or a function');
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r);
            }
            function r() {
                return le(e, arguments, ae(this).constructor);
            }
            return (r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), oe(r, e);
        })(e);
    }
    var ce = (function (e) {
        var t, i;
        function r(t) {
            var i, r, n;
            return (
                (i = e.call.apply(e, [this].concat(t)) || this),
                (r = (function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                })(i)),
                (n = r.__proto__),
                Object.defineProperty(r, '__proto__', {
                    get: function () {
                        return n;
                    },
                    set: function (e) {
                        n.__proto__ = e;
                    },
                }),
                i
            );
        }
        return (i = e), ((t = r).prototype = Object.create(i.prototype)), (t.prototype.constructor = t), (t.__proto__ = i), r;
    })(de(Array));
    function ue(e) {
        void 0 === e && (e = []);
        var t = [];
        return (
            e.forEach(function (e) {
                Array.isArray(e) ? t.push.apply(t, ue(e)) : t.push(e);
            }),
            t
        );
    }
    function pe(e, t) {
        return Array.prototype.filter.call(e, t);
    }
    function fe(e, t) {
        var i = ne(),
            r = ie(),
            n = [];
        if (!t && e instanceof ce) return e;
        if (!e) return new ce(n);
        if ('string' == typeof e) {
            var a = e.trim();
            if (a.indexOf('<') >= 0 && a.indexOf('>') >= 0) {
                var o = 'div';
                0 === a.indexOf('<li') && (o = 'ul'), 0 === a.indexOf('<tr') && (o = 'tbody'), (0 !== a.indexOf('<td') && 0 !== a.indexOf('<th')) || (o = 'tr'), 0 === a.indexOf('<tbody') && (o = 'table'), 0 === a.indexOf('<option') && (o = 'select');
                var s = r.createElement(o);
                s.innerHTML = a;
                for (var l = 0; l < s.childNodes.length; l += 1) n.push(s.childNodes[l]);
            } else
                n = (function (e, t) {
                    if ('string' != typeof e) return [e];
                    for (var i = [], r = t.querySelectorAll(e), n = 0; n < r.length; n += 1) i.push(r[n]);
                    return i;
                })(e.trim(), t || r);
        } else if (e.nodeType || e === i || e === r) n.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof ce) return e;
            n = e;
        }
        return new ce(
            (function (e) {
                for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
                return t;
            })(n)
        );
    }
    fe.fn = ce.prototype;
    var he,
        me,
        ve,
        ge = {
            addClass: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var r = ue(
                    t.map(function (e) {
                        return e.split(' ');
                    })
                );
                return (
                    this.forEach(function (e) {
                        var t;
                        (t = e.classList).add.apply(t, r);
                    }),
                    this
                );
            },
            removeClass: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var r = ue(
                    t.map(function (e) {
                        return e.split(' ');
                    })
                );
                return (
                    this.forEach(function (e) {
                        var t;
                        (t = e.classList).remove.apply(t, r);
                    }),
                    this
                );
            },
            hasClass: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var r = ue(
                    t.map(function (e) {
                        return e.split(' ');
                    })
                );
                return (
                    pe(this, function (e) {
                        return (
                            r.filter(function (t) {
                                return e.classList.contains(t);
                            }).length > 0
                        );
                    }).length > 0
                );
            },
            toggleClass: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var r = ue(
                    t.map(function (e) {
                        return e.split(' ');
                    })
                );
                this.forEach(function (e) {
                    r.forEach(function (t) {
                        e.classList.toggle(t);
                    });
                });
            },
            attr: function (e, t) {
                if (1 === arguments.length && 'string' == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var i = 0; i < this.length; i += 1)
                    if (2 === arguments.length) this[i].setAttribute(e, t);
                    else for (var r in e) (this[i][r] = e[r]), this[i].setAttribute(r, e[r]);
                return this;
            },
            removeAttr: function (e) {
                for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this;
            },
            transform: function (e) {
                for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
                return this;
            },
            transition: function (e) {
                for (var t = 0; t < this.length; t += 1) this[t].style.transition = 'string' != typeof e ? e + 'ms' : e;
                return this;
            },
            on: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var r = t[0],
                    n = t[1],
                    a = t[2],
                    o = t[3];
                function s(e) {
                    var t = e.target;
                    if (t) {
                        var i = e.target.dom7EventData || [];
                        if ((i.indexOf(e) < 0 && i.unshift(e), fe(t).is(n))) a.apply(t, i);
                        else for (var r = fe(t).parents(), o = 0; o < r.length; o += 1) fe(r[o]).is(n) && a.apply(r[o], i);
                    }
                }
                function l(e) {
                    var t = (e && e.target && e.target.dom7EventData) || [];
                    t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t);
                }
                'function' == typeof t[1] && ((r = t[0]), (a = t[1]), (o = t[2]), (n = void 0)), o || (o = !1);
                for (var d, c = r.split(' '), u = 0; u < this.length; u += 1) {
                    var p = this[u];
                    if (n)
                        for (d = 0; d < c.length; d += 1) {
                            var f = c[d];
                            p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({ listener: a, proxyListener: s }), p.addEventListener(f, s, o);
                        }
                    else
                        for (d = 0; d < c.length; d += 1) {
                            var h = c[d];
                            p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[h] || (p.dom7Listeners[h] = []), p.dom7Listeners[h].push({ listener: a, proxyListener: l }), p.addEventListener(h, l, o);
                        }
                }
                return this;
            },
            off: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var r = t[0],
                    n = t[1],
                    a = t[2],
                    o = t[3];
                'function' == typeof t[1] && ((r = t[0]), (a = t[1]), (o = t[2]), (n = void 0)), o || (o = !1);
                for (var s = r.split(' '), l = 0; l < s.length; l += 1)
                    for (var d = s[l], c = 0; c < this.length; c += 1) {
                        var u = this[c],
                            p = void 0;
                        if ((!n && u.dom7Listeners ? (p = u.dom7Listeners[d]) : n && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]), p && p.length))
                            for (var f = p.length - 1; f >= 0; f -= 1) {
                                var h = p[f];
                                (a && h.listener === a) || (a && h.listener && h.listener.dom7proxy && h.listener.dom7proxy === a) ? (u.removeEventListener(d, h.proxyListener, o), p.splice(f, 1)) : a || (u.removeEventListener(d, h.proxyListener, o), p.splice(f, 1));
                            }
                    }
                return this;
            },
            trigger: function () {
                for (var e = ne(), t = arguments.length, i = new Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                for (var n = i[0].split(' '), a = i[1], o = 0; o < n.length; o += 1)
                    for (var s = n[o], l = 0; l < this.length; l += 1) {
                        var d = this[l];
                        if (e.CustomEvent) {
                            var c = new e.CustomEvent(s, { detail: a, bubbles: !0, cancelable: !0 });
                            (d.dom7EventData = i.filter(function (e, t) {
                                return t > 0;
                            })),
                                d.dispatchEvent(c),
                                (d.dom7EventData = []),
                                delete d.dom7EventData;
                        }
                    }
                return this;
            },
            transitionEnd: function (e) {
                var t = this;
                return (
                    e &&
                        t.on('transitionend', function i(r) {
                            r.target === this && (e.call(this, r), t.off('transitionend', i));
                        }),
                    this
                );
            },
            outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue('margin-right')) + parseFloat(t.getPropertyValue('margin-left'));
                    }
                    return this[0].offsetWidth;
                }
                return null;
            },
            outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue('margin-top')) + parseFloat(t.getPropertyValue('margin-bottom'));
                    }
                    return this[0].offsetHeight;
                }
                return null;
            },
            styles: function () {
                var e = ne();
                return this[0] ? e.getComputedStyle(this[0], null) : {};
            },
            offset: function () {
                if (this.length > 0) {
                    var e = ne(),
                        t = ie(),
                        i = this[0],
                        r = i.getBoundingClientRect(),
                        n = t.body,
                        a = i.clientTop || n.clientTop || 0,
                        o = i.clientLeft || n.clientLeft || 0,
                        s = i === e ? e.scrollY : i.scrollTop,
                        l = i === e ? e.scrollX : i.scrollLeft;
                    return { top: r.top + s - a, left: r.left + l - o };
                }
                return null;
            },
            css: function (e, t) {
                var i,
                    r = ne();
                if (1 === arguments.length) {
                    if ('string' != typeof e) {
                        for (i = 0; i < this.length; i += 1) for (var n in e) this[i].style[n] = e[n];
                        return this;
                    }
                    if (this[0]) return r.getComputedStyle(this[0], null).getPropertyValue(e);
                }
                if (2 === arguments.length && 'string' == typeof e) {
                    for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                    return this;
                }
                return this;
            },
            each: function (e) {
                return e
                    ? (this.forEach(function (t, i) {
                          e.apply(t, [t, i]);
                      }),
                      this)
                    : this;
            },
            html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this;
            },
            text: function (e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this;
            },
            is: function (e) {
                var t,
                    i,
                    r = ne(),
                    n = ie(),
                    a = this[0];
                if (!a || void 0 === e) return !1;
                if ('string' == typeof e) {
                    if (a.matches) return a.matches(e);
                    if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
                    if (a.msMatchesSelector) return a.msMatchesSelector(e);
                    for (t = fe(e), i = 0; i < t.length; i += 1) if (t[i] === a) return !0;
                    return !1;
                }
                if (e === n) return a === n;
                if (e === r) return a === r;
                if (e.nodeType || e instanceof ce) {
                    for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) if (t[i] === a) return !0;
                    return !1;
                }
                return !1;
            },
            index: function () {
                var e,
                    t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                    return e;
                }
            },
            eq: function (e) {
                if (void 0 === e) return this;
                var t = this.length;
                if (e > t - 1) return fe([]);
                if (e < 0) {
                    var i = t + e;
                    return fe(i < 0 ? [] : [this[i]]);
                }
                return fe([this[e]]);
            },
            append: function () {
                for (var e, t = ie(), i = 0; i < arguments.length; i += 1) {
                    e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                    for (var r = 0; r < this.length; r += 1)
                        if ('string' == typeof e) {
                            var n = t.createElement('div');
                            for (n.innerHTML = e; n.firstChild; ) this[r].appendChild(n.firstChild);
                        } else if (e instanceof ce) for (var a = 0; a < e.length; a += 1) this[r].appendChild(e[a]);
                        else this[r].appendChild(e);
                }
                return this;
            },
            prepend: function (e) {
                var t,
                    i,
                    r = ie();
                for (t = 0; t < this.length; t += 1)
                    if ('string' == typeof e) {
                        var n = r.createElement('div');
                        for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(n.childNodes[i], this[t].childNodes[0]);
                    } else if (e instanceof ce) for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                return this;
            },
            next: function (e) {
                return this.length > 0 ? (e ? (this[0].nextElementSibling && fe(this[0].nextElementSibling).is(e) ? fe([this[0].nextElementSibling]) : fe([])) : this[0].nextElementSibling ? fe([this[0].nextElementSibling]) : fe([])) : fe([]);
            },
            nextAll: function (e) {
                var t = [],
                    i = this[0];
                if (!i) return fe([]);
                for (; i.nextElementSibling; ) {
                    var r = i.nextElementSibling;
                    e ? fe(r).is(e) && t.push(r) : t.push(r), (i = r);
                }
                return fe(t);
            },
            prev: function (e) {
                if (this.length > 0) {
                    var t = this[0];
                    return e ? (t.previousElementSibling && fe(t.previousElementSibling).is(e) ? fe([t.previousElementSibling]) : fe([])) : t.previousElementSibling ? fe([t.previousElementSibling]) : fe([]);
                }
                return fe([]);
            },
            prevAll: function (e) {
                var t = [],
                    i = this[0];
                if (!i) return fe([]);
                for (; i.previousElementSibling; ) {
                    var r = i.previousElementSibling;
                    e ? fe(r).is(e) && t.push(r) : t.push(r), (i = r);
                }
                return fe(t);
            },
            parent: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? fe(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return fe(t);
            },
            parents: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) for (var r = this[i].parentNode; r; ) e ? fe(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
                return fe(t);
            },
            closest: function (e) {
                var t = this;
                return void 0 === e ? fe([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
            },
            find: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) for (var r = this[i].querySelectorAll(e), n = 0; n < r.length; n += 1) t.push(r[n]);
                return fe(t);
            },
            children: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) for (var r = this[i].children, n = 0; n < r.length; n += 1) (e && !fe(r[n]).is(e)) || t.push(r[n]);
                return fe(t);
            },
            filter: function (e) {
                return fe(pe(this, e));
            },
            remove: function () {
                for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this;
            },
        };
    function be(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function we() {
        return Date.now();
    }
    function xe(e) {
        return 'object' == typeof e && null !== e && e.constructor && e.constructor === Object;
    }
    function ye() {
        for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
            var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            if (null != i)
                for (var r = Object.keys(Object(i)), n = 0, a = r.length; n < a; n += 1) {
                    var o = r[n],
                        s = Object.getOwnPropertyDescriptor(i, o);
                    void 0 !== s && s.enumerable && (xe(e[o]) && xe(i[o]) ? ye(e[o], i[o]) : !xe(e[o]) && xe(i[o]) ? ((e[o] = {}), ye(e[o], i[o])) : (e[o] = i[o]));
                }
        }
        return e;
    }
    function Ae(e, t) {
        Object.keys(t).forEach(function (i) {
            xe(t[i]) &&
                Object.keys(t[i]).forEach(function (r) {
                    'function' == typeof t[i][r] && (t[i][r] = t[i][r].bind(e));
                }),
                (e[i] = t[i]);
        });
    }
    function Ce() {
        return (
            he ||
                (he = (function () {
                    var e = ne(),
                        t = ie();
                    return {
                        touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
                        pointerEvents: !!e.PointerEvent && 'maxTouchPoints' in e.navigator && e.navigator.maxTouchPoints >= 0,
                        observer: 'MutationObserver' in e || 'WebkitMutationObserver' in e,
                        passiveListener: (function () {
                            var t = !1;
                            try {
                                var i = Object.defineProperty({}, 'passive', {
                                    get: function () {
                                        t = !0;
                                    },
                                });
                                e.addEventListener('testPassiveListener', null, i);
                            } catch (e) {}
                            return t;
                        })(),
                        gestures: 'ongesturestart' in e,
                    };
                })()),
            he
        );
    }
    function Te(e) {
        return (
            void 0 === e && (e = {}),
            me ||
                (me = (function (e) {
                    var t = (void 0 === e ? {} : e).userAgent,
                        i = Ce(),
                        r = ne(),
                        n = r.navigator.platform,
                        a = t || r.navigator.userAgent,
                        o = { ios: !1, android: !1 },
                        s = r.screen.width,
                        l = r.screen.height,
                        d = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                        c = a.match(/(iPad).*OS\s([\d_]+)/),
                        u = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                        p = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        f = 'Win32' === n,
                        h = 'MacIntel' === n;
                    return !c && h && i.touch && ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768'].indexOf(s + 'x' + l) >= 0 && ((c = a.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, '13_0_0']), (h = !1)), d && !f && ((o.os = 'android'), (o.android = !0)), (c || p || u) && ((o.os = 'ios'), (o.ios = !0)), o;
                })(e)),
            me
        );
    }
    function Se() {
        return (
            ve ||
                (ve = (function () {
                    var e,
                        t = ne();
                    return { isEdge: !!t.navigator.userAgent.match(/Edge/g), isSafari: ((e = t.navigator.userAgent.toLowerCase()), e.indexOf('safari') >= 0 && e.indexOf('chrome') < 0 && e.indexOf('android') < 0), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent) };
                })()),
            ve
        );
    }
    Object.keys(ge).forEach(function (e) {
        fe.fn[e] = ge[e];
    });
    var Ee = {
        name: 'resize',
        create: function () {
            var e = this;
            ye(e, {
                resize: {
                    resizeHandler: function () {
                        e && !e.destroyed && e.initialized && (e.emit('beforeResize'), e.emit('resize'));
                    },
                    orientationChangeHandler: function () {
                        e && !e.destroyed && e.initialized && e.emit('orientationchange');
                    },
                },
            });
        },
        on: {
            init: function (e) {
                var t = ne();
                t.addEventListener('resize', e.resize.resizeHandler), t.addEventListener('orientationchange', e.resize.orientationChangeHandler);
            },
            destroy: function (e) {
                var t = ne();
                t.removeEventListener('resize', e.resize.resizeHandler), t.removeEventListener('orientationchange', e.resize.orientationChangeHandler);
            },
        },
    };
    function ke() {
        return (ke =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
                }
                return e;
            }).apply(this, arguments);
    }
    var Me = {
            attach: function (e, t) {
                void 0 === t && (t = {});
                var i = ne(),
                    r = this,
                    n = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
                        if (1 !== e.length) {
                            var t = function () {
                                r.emit('observerUpdate', e[0]);
                            };
                            i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0);
                        } else r.emit('observerUpdate', e[0]);
                    });
                n.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), r.observer.observers.push(n);
            },
            init: function () {
                var e = this;
                if (e.support.observer && e.params.observer) {
                    if (e.params.observeParents) for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
                    e.observer.attach(e.$el[0], { childList: e.params.observeSlideChildren }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
                }
            },
            destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect();
                }),
                    (this.observer.observers = []);
            },
        },
        Pe = {
            name: 'observer',
            params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
            create: function () {
                Ae(this, { observer: ke(ke({}, Me), {}, { observers: [] }) });
            },
            on: {
                init: function (e) {
                    e.observer.init();
                },
                destroy: function (e) {
                    e.observer.destroy();
                },
            },
        };
    function Le(e) {
        var t = this,
            i = ie(),
            r = ne(),
            n = t.touchEventsData,
            a = t.params,
            o = t.touches;
        if (!t.animating || !a.preventInteractionOnTransition) {
            var s = e;
            s.originalEvent && (s = s.originalEvent);
            var l = fe(s.target);
            if (('wrapper' !== a.touchEventsTarget || l.closest(t.wrapperEl).length) && ((n.isTouchEvent = 'touchstart' === s.type), (n.isTouchEvent || !('which' in s) || 3 !== s.which) && !((!n.isTouchEvent && 'button' in s && s.button > 0) || (n.isTouched && n.isMoved))))
                if (a.noSwiping && l.closest(a.noSwipingSelector ? a.noSwipingSelector : '.' + a.noSwipingClass)[0]) t.allowClick = !0;
                else if (!a.swipeHandler || l.closest(a.swipeHandler)[0]) {
                    (o.currentX = 'touchstart' === s.type ? s.targetTouches[0].pageX : s.pageX), (o.currentY = 'touchstart' === s.type ? s.targetTouches[0].pageY : s.pageY);
                    var d = o.currentX,
                        c = o.currentY,
                        u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                        p = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                    if (!u || !(d <= p || d >= r.screen.width - p)) {
                        if ((ye(n, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), (o.startX = d), (o.startY = c), (n.touchStartTime = we()), (t.allowClick = !0), t.updateSize(), (t.swipeDirection = void 0), a.threshold > 0 && (n.allowThresholdMove = !1), 'touchstart' !== s.type)) {
                            var f = !0;
                            l.is(n.formElements) && (f = !1), i.activeElement && fe(i.activeElement).is(n.formElements) && i.activeElement !== l[0] && i.activeElement.blur();
                            var h = f && t.allowTouchMove && a.touchStartPreventDefault;
                            (a.touchStartForcePreventDefault || h) && s.preventDefault();
                        }
                        t.emit('touchStart', s);
                    }
                }
        }
    }
    function Be(e) {
        var t = ie(),
            i = this,
            r = i.touchEventsData,
            n = i.params,
            a = i.touches,
            o = i.rtlTranslate,
            s = e;
        if ((s.originalEvent && (s = s.originalEvent), r.isTouched)) {
            if (!r.isTouchEvent || 'touchmove' === s.type) {
                var l = 'touchmove' === s.type && s.targetTouches && (s.targetTouches[0] || s.changedTouches[0]),
                    d = 'touchmove' === s.type ? l.pageX : s.pageX,
                    c = 'touchmove' === s.type ? l.pageY : s.pageY;
                if (s.preventedByNestedSwiper) return (a.startX = d), void (a.startY = c);
                if (!i.allowTouchMove) return (i.allowClick = !1), void (r.isTouched && (ye(a, { startX: d, startY: c, currentX: d, currentY: c }), (r.touchStartTime = we())));
                if (r.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                    if (i.isVertical()) {
                        if ((c < a.startY && i.translate <= i.maxTranslate()) || (c > a.startY && i.translate >= i.minTranslate())) return (r.isTouched = !1), void (r.isMoved = !1);
                    } else if ((d < a.startX && i.translate <= i.maxTranslate()) || (d > a.startX && i.translate >= i.minTranslate())) return;
                if (r.isTouchEvent && t.activeElement && s.target === t.activeElement && fe(s.target).is(r.formElements)) return (r.isMoved = !0), void (i.allowClick = !1);
                if ((r.allowTouchCallbacks && i.emit('touchMove', s), !(s.targetTouches && s.targetTouches.length > 1))) {
                    (a.currentX = d), (a.currentY = c);
                    var u = a.currentX - a.startX,
                        p = a.currentY - a.startY;
                    if (!(i.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(p, 2)) < i.params.threshold)) {
                        var f;
                        if (void 0 === r.isScrolling) (i.isHorizontal() && a.currentY === a.startY) || (i.isVertical() && a.currentX === a.startX) ? (r.isScrolling = !1) : u * u + p * p >= 25 && ((f = (180 * Math.atan2(Math.abs(p), Math.abs(u))) / Math.PI), (r.isScrolling = i.isHorizontal() ? f > n.touchAngle : 90 - f > n.touchAngle));
                        if ((r.isScrolling && i.emit('touchMoveOpposite', s), void 0 === r.startMoving && ((a.currentX === a.startX && a.currentY === a.startY) || (r.startMoving = !0)), r.isScrolling)) r.isTouched = !1;
                        else if (r.startMoving) {
                            (i.allowClick = !1), !n.cssMode && s.cancelable && s.preventDefault(), n.touchMoveStopPropagation && !n.nested && s.stopPropagation(), r.isMoved || (n.loop && i.loopFix(), (r.startTranslate = i.getTranslate()), i.setTransition(0), i.animating && i.$wrapperEl.trigger('webkitTransitionEnd transitionend'), (r.allowMomentumBounce = !1), !n.grabCursor || (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) || i.setGrabCursor(!0), i.emit('sliderFirstMove', s)), i.emit('sliderMove', s), (r.isMoved = !0);
                            var h = i.isHorizontal() ? u : p;
                            (a.diff = h), (h *= n.touchRatio), o && (h = -h), (i.swipeDirection = h > 0 ? 'prev' : 'next'), (r.currentTranslate = h + r.startTranslate);
                            var m = !0,
                                v = n.resistanceRatio;
                            if ((n.touchReleaseOnEdges && (v = 0), h > 0 && r.currentTranslate > i.minTranslate() ? ((m = !1), n.resistance && (r.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + r.startTranslate + h, v))) : h < 0 && r.currentTranslate < i.maxTranslate() && ((m = !1), n.resistance && (r.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - r.startTranslate - h, v))), m && (s.preventedByNestedSwiper = !0), !i.allowSlideNext && 'next' === i.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !i.allowSlidePrev && 'prev' === i.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), n.threshold > 0)) {
                                if (!(Math.abs(h) > n.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
                                if (!r.allowThresholdMove) return (r.allowThresholdMove = !0), (a.startX = a.currentX), (a.startY = a.currentY), (r.currentTranslate = r.startTranslate), void (a.diff = i.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
                            }
                            n.followFinger && !n.cssMode && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), n.freeMode && (0 === r.velocities.length && r.velocities.push({ position: a[i.isHorizontal() ? 'startX' : 'startY'], time: r.touchStartTime }), r.velocities.push({ position: a[i.isHorizontal() ? 'currentX' : 'currentY'], time: we() })), i.updateProgress(r.currentTranslate), i.setTranslate(r.currentTranslate));
                        }
                    }
                }
            }
        } else r.startMoving && r.isScrolling && i.emit('touchMoveOpposite', s);
    }
    function Oe(e) {
        var t = this,
            i = t.touchEventsData,
            r = t.params,
            n = t.touches,
            a = t.rtlTranslate,
            o = t.$wrapperEl,
            s = t.slidesGrid,
            l = t.snapGrid,
            d = e;
        if ((d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit('touchEnd', d), (i.allowTouchCallbacks = !1), !i.isTouched)) return i.isMoved && r.grabCursor && t.setGrabCursor(!1), (i.isMoved = !1), void (i.startMoving = !1);
        r.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var c,
            u = we(),
            p = u - i.touchStartTime;
        if (
            (t.allowClick && (t.updateClickedSlide(d), t.emit('tap click', d), p < 300 && u - i.lastClickTime < 300 && t.emit('doubleTap doubleClick', d)),
            (i.lastClickTime = we()),
            be(function () {
                t.destroyed || (t.allowClick = !0);
            }),
            !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate)
        )
            return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
        if (((i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1), (c = r.followFinger ? (a ? t.translate : -t.translate) : -i.currentTranslate), !r.cssMode))
            if (r.freeMode) {
                if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (c > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                if (r.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        var f = i.velocities.pop(),
                            h = i.velocities.pop(),
                            m = f.position - h.position,
                            v = f.time - h.time;
                        (t.velocity = m / v), (t.velocity /= 2), Math.abs(t.velocity) < r.freeModeMinimumVelocity && (t.velocity = 0), (v > 150 || we() - f.time > 300) && (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= r.freeModeMomentumVelocityRatio), (i.velocities.length = 0);
                    var g = 1e3 * r.freeModeMomentumRatio,
                        b = t.velocity * g,
                        w = t.translate + b;
                    a && (w = -w);
                    var x,
                        y,
                        A = !1,
                        C = 20 * Math.abs(t.velocity) * r.freeModeMomentumBounceRatio;
                    if (w < t.maxTranslate()) r.freeModeMomentumBounce ? (w + t.maxTranslate() < -C && (w = t.maxTranslate() - C), (x = t.maxTranslate()), (A = !0), (i.allowMomentumBounce = !0)) : (w = t.maxTranslate()), r.loop && r.centeredSlides && (y = !0);
                    else if (w > t.minTranslate()) r.freeModeMomentumBounce ? (w - t.minTranslate() > C && (w = t.minTranslate() + C), (x = t.minTranslate()), (A = !0), (i.allowMomentumBounce = !0)) : (w = t.minTranslate()), r.loop && r.centeredSlides && (y = !0);
                    else if (r.freeModeSticky) {
                        for (var T, S = 0; S < l.length; S += 1)
                            if (l[S] > -w) {
                                T = S;
                                break;
                            }
                        w = -(w = Math.abs(l[T] - w) < Math.abs(l[T - 1] - w) || 'next' === t.swipeDirection ? l[T] : l[T - 1]);
                    }
                    if (
                        (y &&
                            t.once('transitionEnd', function () {
                                t.loopFix();
                            }),
                        0 !== t.velocity)
                    ) {
                        if (((g = a ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity)), r.freeModeSticky)) {
                            var E = Math.abs((a ? -w : w) - t.translate),
                                k = t.slidesSizesGrid[t.activeIndex];
                            g = E < k ? r.speed : E < 2 * k ? 1.5 * r.speed : 2.5 * r.speed;
                        }
                    } else if (r.freeModeSticky) return void t.slideToClosest();
                    r.freeModeMomentumBounce && A
                        ? (t.updateProgress(x),
                          t.setTransition(g),
                          t.setTranslate(w),
                          t.transitionStart(!0, t.swipeDirection),
                          (t.animating = !0),
                          o.transitionEnd(function () {
                              t &&
                                  !t.destroyed &&
                                  i.allowMomentumBounce &&
                                  (t.emit('momentumBounce'),
                                  t.setTransition(r.speed),
                                  setTimeout(function () {
                                      t.setTranslate(x),
                                          o.transitionEnd(function () {
                                              t && !t.destroyed && t.transitionEnd();
                                          });
                                  }, 0));
                          }))
                        : t.velocity
                        ? (t.updateProgress(w),
                          t.setTransition(g),
                          t.setTranslate(w),
                          t.transitionStart(!0, t.swipeDirection),
                          t.animating ||
                              ((t.animating = !0),
                              o.transitionEnd(function () {
                                  t && !t.destroyed && t.transitionEnd();
                              })))
                        : t.updateProgress(w),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses();
                } else if (r.freeModeSticky) return void t.slideToClosest();
                (!r.freeModeMomentum || p >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
            } else {
                for (var M = 0, P = t.slidesSizesGrid[0], L = 0; L < s.length; L += L < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                    var B = L < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                    void 0 !== s[L + B] ? c >= s[L] && c < s[L + B] && ((M = L), (P = s[L + B] - s[L])) : c >= s[L] && ((M = L), (P = s[s.length - 1] - s[s.length - 2]));
                }
                var O = (c - s[M]) / P,
                    z = M < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                if (p > r.longSwipesMs) {
                    if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                    'next' === t.swipeDirection && (O >= r.longSwipesRatio ? t.slideTo(M + z) : t.slideTo(M)), 'prev' === t.swipeDirection && (O > 1 - r.longSwipesRatio ? t.slideTo(M + z) : t.slideTo(M));
                } else {
                    if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? (d.target === t.navigation.nextEl ? t.slideTo(M + z) : t.slideTo(M)) : ('next' === t.swipeDirection && t.slideTo(M + z), 'prev' === t.swipeDirection && t.slideTo(M));
                }
            }
    }
    function ze() {
        var e = this,
            t = e.params,
            i = e.el;
        if (!i || 0 !== i.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var r = e.allowSlideNext,
                n = e.allowSlidePrev,
                a = e.snapGrid;
            (e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ('auto' === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), (e.allowSlidePrev = n), (e.allowSlideNext = r), e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
        }
    }
    function Ie(e) {
        var t = this;
        t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
    }
    function Ne() {
        var e = this,
            t = e.wrapperEl,
            i = e.rtlTranslate;
        (e.previousTranslate = e.translate), e.isHorizontal() ? (e.translate = i ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft) : (e.translate = -t.scrollTop), -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        var r = e.maxTranslate() - e.minTranslate();
        (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit('setTranslate', e.translate, !1);
    }
    var De = !1;
    function je() {}
    var Ge = {
        init: !0,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: 'swiper-container-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        runCallbacksOnInit: !0,
        _emitClasses: !1,
    };
    function $e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
    }
    var Fe = {
            modular: {
                useParams: function (e) {
                    var t = this;
                    t.modules &&
                        Object.keys(t.modules).forEach(function (i) {
                            var r = t.modules[i];
                            r.params && ye(e, r.params);
                        });
                },
                useModules: function (e) {
                    void 0 === e && (e = {});
                    var t = this;
                    t.modules &&
                        Object.keys(t.modules).forEach(function (i) {
                            var r = t.modules[i],
                                n = e[i] || {};
                            r.on &&
                                t.on &&
                                Object.keys(r.on).forEach(function (e) {
                                    t.on(e, r.on[e]);
                                }),
                                r.create && r.create.bind(t)(n);
                        });
                },
            },
            eventsEmitter: {
                on: function (e, t, i) {
                    var r = this;
                    if ('function' != typeof t) return r;
                    var n = i ? 'unshift' : 'push';
                    return (
                        e.split(' ').forEach(function (e) {
                            r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][n](t);
                        }),
                        r
                    );
                },
                once: function (e, t, i) {
                    var r = this;
                    if ('function' != typeof t) return r;
                    function n() {
                        r.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
                        for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                        t.apply(r, a);
                    }
                    return (n.__emitterProxy = t), r.on(e, n, i);
                },
                onAny: function (e, t) {
                    var i = this;
                    if ('function' != typeof e) return i;
                    var r = t ? 'unshift' : 'push';
                    return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[r](e), i;
                },
                offAny: function (e) {
                    var t = this;
                    if (!t.eventsAnyListeners) return t;
                    var i = t.eventsAnyListeners.indexOf(e);
                    return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
                },
                off: function (e, t) {
                    var i = this;
                    return i.eventsListeners
                        ? (e.split(' ').forEach(function (e) {
                              void 0 === t
                                  ? (i.eventsListeners[e] = [])
                                  : i.eventsListeners[e] &&
                                    i.eventsListeners[e].forEach(function (r, n) {
                                        (r === t || (r.__emitterProxy && r.__emitterProxy === t)) && i.eventsListeners[e].splice(n, 1);
                                    });
                          }),
                          i)
                        : i;
                },
                emit: function () {
                    var e,
                        t,
                        i,
                        r = this;
                    if (!r.eventsListeners) return r;
                    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                    'string' == typeof a[0] || Array.isArray(a[0]) ? ((e = a[0]), (t = a.slice(1, a.length)), (i = r)) : ((e = a[0].events), (t = a[0].data), (i = a[0].context || r)), t.unshift(i);
                    var s = Array.isArray(e) ? e : e.split(' ');
                    return (
                        s.forEach(function (e) {
                            if (r.eventsListeners && r.eventsListeners[e]) {
                                var n = [];
                                r.eventsListeners[e].forEach(function (e) {
                                    n.push(e);
                                }),
                                    n.forEach(function (e) {
                                        e.apply(i, t);
                                    });
                            }
                        }),
                        r
                    );
                },
            },
            update: {
                updateSize: function () {
                    var e,
                        t,
                        i = this,
                        r = i.$el;
                    (e = void 0 !== i.params.width && null !== i.params.width ? i.params.width : r[0].clientWidth), (t = void 0 !== i.params.height && null !== i.params.width ? i.params.height : r[0].clientHeight), (0 === e && i.isHorizontal()) || (0 === t && i.isVertical()) || ((e = e - parseInt(r.css('padding-left') || 0, 10) - parseInt(r.css('padding-right') || 0, 10)), (t = t - parseInt(r.css('padding-top') || 0, 10) - parseInt(r.css('padding-bottom') || 0, 10)), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), ye(i, { width: e, height: t, size: i.isHorizontal() ? e : t }));
                },
                updateSlides: function () {
                    var e = this,
                        t = ne(),
                        i = e.params,
                        r = e.$wrapperEl,
                        n = e.size,
                        a = e.rtlTranslate,
                        o = e.wrongRTL,
                        s = e.virtual && i.virtual.enabled,
                        l = s ? e.virtual.slides.length : e.slides.length,
                        d = r.children('.' + e.params.slideClass),
                        c = s ? e.virtual.slides.length : d.length,
                        u = [],
                        p = [],
                        f = [];
                    function h(e, t) {
                        return !i.cssMode || t !== d.length - 1;
                    }
                    var m = i.slidesOffsetBefore;
                    'function' == typeof m && (m = i.slidesOffsetBefore.call(e));
                    var v = i.slidesOffsetAfter;
                    'function' == typeof v && (v = i.slidesOffsetAfter.call(e));
                    var g = e.snapGrid.length,
                        b = e.snapGrid.length,
                        w = i.spaceBetween,
                        x = -m,
                        y = 0,
                        A = 0;
                    if (void 0 !== n) {
                        var C, T;
                        'string' == typeof w && w.indexOf('%') >= 0 && (w = (parseFloat(w.replace('%', '')) / 100) * n), (e.virtualSize = -w), a ? d.css({ marginLeft: '', marginTop: '' }) : d.css({ marginRight: '', marginBottom: '' }), i.slidesPerColumn > 1 && ((C = Math.floor(c / i.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / i.slidesPerColumn) * i.slidesPerColumn), 'auto' !== i.slidesPerView && 'row' === i.slidesPerColumnFill && (C = Math.max(C, i.slidesPerView * i.slidesPerColumn)));
                        for (var S, E = i.slidesPerColumn, k = C / E, M = Math.floor(c / i.slidesPerColumn), P = 0; P < c; P += 1) {
                            T = 0;
                            var L = d.eq(P);
                            if (i.slidesPerColumn > 1) {
                                var B = void 0,
                                    O = void 0,
                                    z = void 0;
                                if ('row' === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                                    var I = Math.floor(P / (i.slidesPerGroup * i.slidesPerColumn)),
                                        N = P - i.slidesPerColumn * i.slidesPerGroup * I,
                                        D = 0 === I ? i.slidesPerGroup : Math.min(Math.ceil((c - I * E * i.slidesPerGroup) / E), i.slidesPerGroup);
                                    (B = (O = N - (z = Math.floor(N / D)) * D + I * i.slidesPerGroup) + (z * C) / E), L.css({ '-webkit-box-ordinal-group': B, '-moz-box-ordinal-group': B, '-ms-flex-order': B, '-webkit-order': B, order: B });
                                } else 'column' === i.slidesPerColumnFill ? ((z = P - (O = Math.floor(P / E)) * E), (O > M || (O === M && z === E - 1)) && (z += 1) >= E && ((z = 0), (O += 1))) : (O = P - (z = Math.floor(P / k)) * k);
                                L.css('margin-' + (e.isHorizontal() ? 'top' : 'left'), 0 !== z && i.spaceBetween && i.spaceBetween + 'px');
                            }
                            if ('none' !== L.css('display')) {
                                if ('auto' === i.slidesPerView) {
                                    var j = t.getComputedStyle(L[0], null),
                                        G = L[0].style.transform,
                                        $ = L[0].style.webkitTransform;
                                    if ((G && (L[0].style.transform = 'none'), $ && (L[0].style.webkitTransform = 'none'), i.roundLengths)) T = e.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);
                                    else if (e.isHorizontal()) {
                                        var F = parseFloat(j.getPropertyValue('width') || 0),
                                            H = parseFloat(j.getPropertyValue('padding-left') || 0),
                                            R = parseFloat(j.getPropertyValue('padding-right') || 0),
                                            Y = parseFloat(j.getPropertyValue('margin-left') || 0),
                                            V = parseFloat(j.getPropertyValue('margin-right') || 0),
                                            _ = j.getPropertyValue('box-sizing');
                                        T = _ && 'border-box' === _ ? F + Y + V : F + H + R + Y + V;
                                    } else {
                                        var q = parseFloat(j.getPropertyValue('height') || 0),
                                            W = parseFloat(j.getPropertyValue('padding-top') || 0),
                                            U = parseFloat(j.getPropertyValue('padding-bottom') || 0),
                                            X = parseFloat(j.getPropertyValue('margin-top') || 0),
                                            Q = parseFloat(j.getPropertyValue('margin-bottom') || 0),
                                            Z = j.getPropertyValue('box-sizing');
                                        T = Z && 'border-box' === Z ? q + X + Q : q + W + U + X + Q;
                                    }
                                    G && (L[0].style.transform = G), $ && (L[0].style.webkitTransform = $), i.roundLengths && (T = Math.floor(T));
                                } else (T = (n - (i.slidesPerView - 1) * w) / i.slidesPerView), i.roundLengths && (T = Math.floor(T)), d[P] && (e.isHorizontal() ? (d[P].style.width = T + 'px') : (d[P].style.height = T + 'px'));
                                d[P] && (d[P].swiperSlideSize = T), f.push(T), i.centeredSlides ? ((x = x + T / 2 + y / 2 + w), 0 === y && 0 !== P && (x = x - n / 2 - w), 0 === P && (x = x - n / 2 - w), Math.abs(x) < 0.001 && (x = 0), i.roundLengths && (x = Math.floor(x)), A % i.slidesPerGroup == 0 && u.push(x), p.push(x)) : (i.roundLengths && (x = Math.floor(x)), (A - Math.min(e.params.slidesPerGroupSkip, A)) % e.params.slidesPerGroup == 0 && u.push(x), p.push(x), (x = x + T + w)), (e.virtualSize += T + w), (y = T), (A += 1);
                            }
                        }
                        if (((e.virtualSize = Math.max(e.virtualSize, n) + v), a && o && ('slide' === i.effect || 'coverflow' === i.effect) && r.css({ width: e.virtualSize + i.spaceBetween + 'px' }), i.setWrapperSize && (e.isHorizontal() ? r.css({ width: e.virtualSize + i.spaceBetween + 'px' }) : r.css({ height: e.virtualSize + i.spaceBetween + 'px' })), i.slidesPerColumn > 1 && ((e.virtualSize = (T + i.spaceBetween) * C), (e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween), e.isHorizontal() ? r.css({ width: e.virtualSize + i.spaceBetween + 'px' }) : r.css({ height: e.virtualSize + i.spaceBetween + 'px' }), i.centeredSlides))) {
                            S = [];
                            for (var K = 0; K < u.length; K += 1) {
                                var J = u[K];
                                i.roundLengths && (J = Math.floor(J)), u[K] < e.virtualSize + u[0] && S.push(J);
                            }
                            u = S;
                        }
                        if (!i.centeredSlides) {
                            S = [];
                            for (var ee = 0; ee < u.length; ee += 1) {
                                var te = u[ee];
                                i.roundLengths && (te = Math.floor(te)), u[ee] <= e.virtualSize - n && S.push(te);
                            }
                            (u = S), Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n);
                        }
                        if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween && (e.isHorizontal() ? (a ? d.filter(h).css({ marginLeft: w + 'px' }) : d.filter(h).css({ marginRight: w + 'px' })) : d.filter(h).css({ marginBottom: w + 'px' })), i.centeredSlides && i.centeredSlidesBounds)) {
                            var ie = 0;
                            f.forEach(function (e) {
                                ie += e + (i.spaceBetween ? i.spaceBetween : 0);
                            });
                            var re = (ie -= i.spaceBetween) - n;
                            u = u.map(function (e) {
                                return e < 0 ? -m : e > re ? re + v : e;
                            });
                        }
                        if (i.centerInsufficientSlides) {
                            var ae = 0;
                            if (
                                (f.forEach(function (e) {
                                    ae += e + (i.spaceBetween ? i.spaceBetween : 0);
                                }),
                                (ae -= i.spaceBetween) < n)
                            ) {
                                var oe = (n - ae) / 2;
                                u.forEach(function (e, t) {
                                    u[t] = e - oe;
                                }),
                                    p.forEach(function (e, t) {
                                        p[t] = e + oe;
                                    });
                            }
                        }
                        ye(e, { slides: d, snapGrid: u, slidesGrid: p, slidesSizesGrid: f }), c !== l && e.emit('slidesLengthChange'), u.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')), p.length !== b && e.emit('slidesGridLengthChange'), (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset();
                    }
                },
                updateAutoHeight: function (e) {
                    var t,
                        i = this,
                        r = [],
                        n = 0;
                    if (('number' == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), 'auto' !== i.params.slidesPerView && i.params.slidesPerView > 1))
                        if (i.params.centeredSlides)
                            i.visibleSlides.each(function (e) {
                                r.push(e);
                            });
                        else
                            for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                var a = i.activeIndex + t;
                                if (a > i.slides.length) break;
                                r.push(i.slides.eq(a)[0]);
                            }
                    else r.push(i.slides.eq(i.activeIndex)[0]);
                    for (t = 0; t < r.length; t += 1)
                        if (void 0 !== r[t]) {
                            var o = r[t].offsetHeight;
                            n = o > n ? o : n;
                        }
                    n && i.$wrapperEl.css('height', n + 'px');
                },
                updateSlidesOffset: function () {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
                },
                updateSlidesProgress: function (e) {
                    void 0 === e && (e = (this && this.translate) || 0);
                    var t = this,
                        i = t.params,
                        r = t.slides,
                        n = t.rtlTranslate;
                    if (0 !== r.length) {
                        void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                        var a = -e;
                        n && (a = e), r.removeClass(i.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
                        for (var o = 0; o < r.length; o += 1) {
                            var s = r[o],
                                l = (a + (i.centeredSlides ? t.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + i.spaceBetween);
                            if (i.watchSlidesVisibility || (i.centeredSlides && i.autoHeight)) {
                                var d = -(a - s.swiperSlideOffset),
                                    c = d + t.slidesSizesGrid[o];
                                ((d >= 0 && d < t.size - 1) || (c > 1 && c <= t.size) || (d <= 0 && c >= t.size)) && (t.visibleSlides.push(s), t.visibleSlidesIndexes.push(o), r.eq(o).addClass(i.slideVisibleClass));
                            }
                            s.progress = n ? -l : l;
                        }
                        t.visibleSlides = fe(t.visibleSlides);
                    }
                },
                updateProgress: function (e) {
                    var t = this;
                    if (void 0 === e) {
                        var i = t.rtlTranslate ? -1 : 1;
                        e = (t && t.translate && t.translate * i) || 0;
                    }
                    var r = t.params,
                        n = t.maxTranslate() - t.minTranslate(),
                        a = t.progress,
                        o = t.isBeginning,
                        s = t.isEnd,
                        l = o,
                        d = s;
                    0 === n ? ((a = 0), (o = !0), (s = !0)) : ((o = (a = (e - t.minTranslate()) / n) <= 0), (s = a >= 1)), ye(t, { progress: a, isBeginning: o, isEnd: s }), (r.watchSlidesProgress || r.watchSlidesVisibility || (r.centeredSlides && r.autoHeight)) && t.updateSlidesProgress(e), o && !l && t.emit('reachBeginning toEdge'), s && !d && t.emit('reachEnd toEdge'), ((l && !o) || (d && !s)) && t.emit('fromEdge'), t.emit('progress', a);
                },
                updateSlidesClasses: function () {
                    var e,
                        t = this,
                        i = t.slides,
                        r = t.params,
                        n = t.$wrapperEl,
                        a = t.activeIndex,
                        o = t.realIndex,
                        s = t.virtual && r.virtual.enabled;
                    i.removeClass(r.slideActiveClass + ' ' + r.slideNextClass + ' ' + r.slidePrevClass + ' ' + r.slideDuplicateActiveClass + ' ' + r.slideDuplicateNextClass + ' ' + r.slideDuplicatePrevClass), (e = s ? t.$wrapperEl.find('.' + r.slideClass + '[data-swiper-slide-index="' + a + '"]') : i.eq(a)).addClass(r.slideActiveClass), r.loop && (e.hasClass(r.slideDuplicateClass) ? n.children('.' + r.slideClass + ':not(.' + r.slideDuplicateClass + ')[data-swiper-slide-index="' + o + '"]').addClass(r.slideDuplicateActiveClass) : n.children('.' + r.slideClass + '.' + r.slideDuplicateClass + '[data-swiper-slide-index="' + o + '"]').addClass(r.slideDuplicateActiveClass));
                    var l = e
                        .nextAll('.' + r.slideClass)
                        .eq(0)
                        .addClass(r.slideNextClass);
                    r.loop && 0 === l.length && (l = i.eq(0)).addClass(r.slideNextClass);
                    var d = e
                        .prevAll('.' + r.slideClass)
                        .eq(0)
                        .addClass(r.slidePrevClass);
                    r.loop && 0 === d.length && (d = i.eq(-1)).addClass(r.slidePrevClass), r.loop && (l.hasClass(r.slideDuplicateClass) ? n.children('.' + r.slideClass + ':not(.' + r.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr('data-swiper-slide-index') + '"]').addClass(r.slideDuplicateNextClass) : n.children('.' + r.slideClass + '.' + r.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr('data-swiper-slide-index') + '"]').addClass(r.slideDuplicateNextClass), d.hasClass(r.slideDuplicateClass) ? n.children('.' + r.slideClass + ':not(.' + r.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr('data-swiper-slide-index') + '"]').addClass(r.slideDuplicatePrevClass) : n.children('.' + r.slideClass + '.' + r.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr('data-swiper-slide-index') + '"]').addClass(r.slideDuplicatePrevClass)), t.emitSlidesClasses();
                },
                updateActiveIndex: function (e) {
                    var t,
                        i = this,
                        r = i.rtlTranslate ? i.translate : -i.translate,
                        n = i.slidesGrid,
                        a = i.snapGrid,
                        o = i.params,
                        s = i.activeIndex,
                        l = i.realIndex,
                        d = i.snapIndex,
                        c = e;
                    if (void 0 === c) {
                        for (var u = 0; u < n.length; u += 1) void 0 !== n[u + 1] ? (r >= n[u] && r < n[u + 1] - (n[u + 1] - n[u]) / 2 ? (c = u) : r >= n[u] && r < n[u + 1] && (c = u + 1)) : r >= n[u] && (c = u);
                        o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
                    }
                    if (a.indexOf(r) >= 0) t = a.indexOf(r);
                    else {
                        var p = Math.min(o.slidesPerGroupSkip, c);
                        t = p + Math.floor((c - p) / o.slidesPerGroup);
                    }
                    if ((t >= a.length && (t = a.length - 1), c !== s)) {
                        var f = parseInt(i.slides.eq(c).attr('data-swiper-slide-index') || c, 10);
                        ye(i, { snapIndex: t, realIndex: f, previousIndex: s, activeIndex: c }), i.emit('activeIndexChange'), i.emit('snapIndexChange'), l !== f && i.emit('realIndexChange'), (i.initialized || i.params.runCallbacksOnInit) && i.emit('slideChange');
                    } else t !== d && ((i.snapIndex = t), i.emit('snapIndexChange'));
                },
                updateClickedSlide: function (e) {
                    var t = this,
                        i = t.params,
                        r = fe(e.target).closest('.' + i.slideClass)[0],
                        n = !1;
                    if (r) for (var a = 0; a < t.slides.length; a += 1) t.slides[a] === r && (n = !0);
                    if (!r || !n) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
                    (t.clickedSlide = r), t.virtual && t.params.virtual.enabled ? (t.clickedIndex = parseInt(fe(r).attr('data-swiper-slide-index'), 10)) : (t.clickedIndex = fe(r).index()), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
                },
            },
            translate: {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
                    var t = this,
                        i = t.params,
                        r = t.rtlTranslate,
                        n = t.translate,
                        a = t.$wrapperEl;
                    if (i.virtualTranslate) return r ? -n : n;
                    if (i.cssMode) return n;
                    var o = (function (e, t) {
                        void 0 === t && (t = 'x');
                        var i,
                            r,
                            n,
                            a = ne(),
                            o = a.getComputedStyle(e, null);
                        return (
                            a.WebKitCSSMatrix
                                ? ((r = o.transform || o.webkitTransform).split(',').length > 6 &&
                                      (r = r
                                          .split(', ')
                                          .map(function (e) {
                                              return e.replace(',', '.');
                                          })
                                          .join(', ')),
                                  (n = new a.WebKitCSSMatrix('none' === r ? '' : r)))
                                : (i = (n = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')).toString().split(',')),
                            'x' === t && (r = a.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                            'y' === t && (r = a.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                            r || 0
                        );
                    })(a[0], e);
                    return r && (o = -o), o || 0;
                },
                setTranslate: function (e, t) {
                    var i = this,
                        r = i.rtlTranslate,
                        n = i.params,
                        a = i.$wrapperEl,
                        o = i.wrapperEl,
                        s = i.progress,
                        l = 0,
                        d = 0;
                    i.isHorizontal() ? (l = r ? -e : e) : (d = e), n.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))), n.cssMode ? (o[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = i.isHorizontal() ? -l : -d) : n.virtualTranslate || a.transform('translate3d(' + l + 'px, ' + d + 'px, 0px)'), (i.previousTranslate = i.translate), (i.translate = i.isHorizontal() ? l : d);
                    var c = i.maxTranslate() - i.minTranslate();
                    (0 === c ? 0 : (e - i.minTranslate()) / c) !== s && i.updateProgress(e), i.emit('setTranslate', i.translate, t);
                },
                minTranslate: function () {
                    return -this.snapGrid[0];
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1];
                },
                translateTo: function (e, t, i, r, n) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === r && (r = !0);
                    var a = this,
                        o = a.params,
                        s = a.wrapperEl;
                    if (a.animating && o.preventInteractionOnTransition) return !1;
                    var l,
                        d = a.minTranslate(),
                        c = a.maxTranslate();
                    if (((l = r && e > d ? d : r && e < c ? c : e), a.updateProgress(l), o.cssMode)) {
                        var u,
                            p = a.isHorizontal();
                        if (0 === t) s[p ? 'scrollLeft' : 'scrollTop'] = -l;
                        else if (s.scrollTo) s.scrollTo((((u = {})[p ? 'left' : 'top'] = -l), (u.behavior = 'smooth'), u));
                        else s[p ? 'scrollLeft' : 'scrollTop'] = -l;
                        return !0;
                    }
                    return (
                        0 === t
                            ? (a.setTransition(0), a.setTranslate(l), i && (a.emit('beforeTransitionStart', t, n), a.emit('transitionEnd')))
                            : (a.setTransition(t),
                              a.setTranslate(l),
                              i && (a.emit('beforeTransitionStart', t, n), a.emit('transitionStart')),
                              a.animating ||
                                  ((a.animating = !0),
                                  a.onTranslateToWrapperTransitionEnd ||
                                      (a.onTranslateToWrapperTransitionEnd = function (e) {
                                          a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener('transitionend', a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener('webkitTransitionEnd', a.onTranslateToWrapperTransitionEnd), (a.onTranslateToWrapperTransitionEnd = null), delete a.onTranslateToWrapperTransitionEnd, i && a.emit('transitionEnd'));
                                      }),
                                  a.$wrapperEl[0].addEventListener('transitionend', a.onTranslateToWrapperTransitionEnd),
                                  a.$wrapperEl[0].addEventListener('webkitTransitionEnd', a.onTranslateToWrapperTransitionEnd))),
                        !0
                    );
                },
            },
            transition: {
                setTransition: function (e, t) {
                    var i = this;
                    i.params.cssMode || i.$wrapperEl.transition(e), i.emit('setTransition', e, t);
                },
                transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    var i = this,
                        r = i.activeIndex,
                        n = i.params,
                        a = i.previousIndex;
                    if (!n.cssMode) {
                        n.autoHeight && i.updateAutoHeight();
                        var o = t;
                        if ((o || (o = r > a ? 'next' : r < a ? 'prev' : 'reset'), i.emit('transitionStart'), e && r !== a)) {
                            if ('reset' === o) return void i.emit('slideResetTransitionStart');
                            i.emit('slideChangeTransitionStart'), 'next' === o ? i.emit('slideNextTransitionStart') : i.emit('slidePrevTransitionStart');
                        }
                    }
                },
                transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    var i = this,
                        r = i.activeIndex,
                        n = i.previousIndex,
                        a = i.params;
                    if (((i.animating = !1), !a.cssMode)) {
                        i.setTransition(0);
                        var o = t;
                        if ((o || (o = r > n ? 'next' : r < n ? 'prev' : 'reset'), i.emit('transitionEnd'), e && r !== n)) {
                            if ('reset' === o) return void i.emit('slideResetTransitionEnd');
                            i.emit('slideChangeTransitionEnd'), 'next' === o ? i.emit('slideNextTransitionEnd') : i.emit('slidePrevTransitionEnd');
                        }
                    }
                },
            },
            slide: {
                slideTo: function (e, t, i, r) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var n = this,
                        a = e;
                    a < 0 && (a = 0);
                    var o = n.params,
                        s = n.snapGrid,
                        l = n.slidesGrid,
                        d = n.previousIndex,
                        c = n.activeIndex,
                        u = n.rtlTranslate,
                        p = n.wrapperEl;
                    if (n.animating && o.preventInteractionOnTransition) return !1;
                    var f = Math.min(n.params.slidesPerGroupSkip, a),
                        h = f + Math.floor((a - f) / n.params.slidesPerGroup);
                    h >= s.length && (h = s.length - 1), (c || o.initialSlide || 0) === (d || 0) && i && n.emit('beforeSlideChangeStart');
                    var m,
                        v = -s[h];
                    if ((n.updateProgress(v), o.normalizeSlideIndex)) for (var g = 0; g < l.length; g += 1) -Math.floor(100 * v) >= Math.floor(100 * l[g]) && (a = g);
                    if (n.initialized && a !== c) {
                        if (!n.allowSlideNext && v < n.translate && v < n.minTranslate()) return !1;
                        if (!n.allowSlidePrev && v > n.translate && v > n.maxTranslate() && (c || 0) !== a) return !1;
                    }
                    if (((m = a > c ? 'next' : a < c ? 'prev' : 'reset'), (u && -v === n.translate) || (!u && v === n.translate))) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), 'slide' !== o.effect && n.setTranslate(v), 'reset' !== m && (n.transitionStart(i, m), n.transitionEnd(i, m)), !1;
                    if (o.cssMode) {
                        var b,
                            w = n.isHorizontal(),
                            x = -v;
                        if ((u && (x = p.scrollWidth - p.offsetWidth - x), 0 === t)) p[w ? 'scrollLeft' : 'scrollTop'] = x;
                        else if (p.scrollTo) p.scrollTo((((b = {})[w ? 'left' : 'top'] = x), (b.behavior = 'smooth'), b));
                        else p[w ? 'scrollLeft' : 'scrollTop'] = x;
                        return !0;
                    }
                    return (
                        0 === t
                            ? (n.setTransition(0), n.setTranslate(v), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit('beforeTransitionStart', t, r), n.transitionStart(i, m), n.transitionEnd(i, m))
                            : (n.setTransition(t),
                              n.setTranslate(v),
                              n.updateActiveIndex(a),
                              n.updateSlidesClasses(),
                              n.emit('beforeTransitionStart', t, r),
                              n.transitionStart(i, m),
                              n.animating ||
                                  ((n.animating = !0),
                                  n.onSlideToWrapperTransitionEnd ||
                                      (n.onSlideToWrapperTransitionEnd = function (e) {
                                          n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener('transitionend', n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener('webkitTransitionEnd', n.onSlideToWrapperTransitionEnd), (n.onSlideToWrapperTransitionEnd = null), delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, m));
                                      }),
                                  n.$wrapperEl[0].addEventListener('transitionend', n.onSlideToWrapperTransitionEnd),
                                  n.$wrapperEl[0].addEventListener('webkitTransitionEnd', n.onSlideToWrapperTransitionEnd))),
                        !0
                    );
                },
                slideToLoop: function (e, t, i, r) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var n = this,
                        a = e;
                    return n.params.loop && (a += n.loopedSlides), n.slideTo(a, t, i, r);
                },
                slideNext: function (e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var r = this,
                        n = r.params,
                        a = r.animating,
                        o = r.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
                    if (n.loop) {
                        if (a && n.loopPreventsSlide) return !1;
                        r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
                    }
                    return r.slideTo(r.activeIndex + o, e, t, i);
                },
                slidePrev: function (e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var r = this,
                        n = r.params,
                        a = r.animating,
                        o = r.snapGrid,
                        s = r.slidesGrid,
                        l = r.rtlTranslate;
                    if (n.loop) {
                        if (a && n.loopPreventsSlide) return !1;
                        r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
                    }
                    function d(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                    }
                    var c,
                        u = d(l ? r.translate : -r.translate),
                        p = o.map(function (e) {
                            return d(e);
                        }),
                        f = (o[p.indexOf(u)], o[p.indexOf(u) - 1]);
                    return (
                        void 0 === f &&
                            n.cssMode &&
                            o.forEach(function (e) {
                                !f && u >= e && (f = e);
                            }),
                        void 0 !== f && (c = s.indexOf(f)) < 0 && (c = r.activeIndex - 1),
                        r.slideTo(c, e, t, i)
                    );
                },
                slideReset: function (e, t, i) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
                },
                slideToClosest: function (e, t, i, r) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === r && (r = 0.5);
                    var n = this,
                        a = n.activeIndex,
                        o = Math.min(n.params.slidesPerGroupSkip, a),
                        s = o + Math.floor((a - o) / n.params.slidesPerGroup),
                        l = n.rtlTranslate ? n.translate : -n.translate;
                    if (l >= n.snapGrid[s]) {
                        var d = n.snapGrid[s];
                        l - d > (n.snapGrid[s + 1] - d) * r && (a += n.params.slidesPerGroup);
                    } else {
                        var c = n.snapGrid[s - 1];
                        l - c <= (n.snapGrid[s] - c) * r && (a -= n.params.slidesPerGroup);
                    }
                    return (a = Math.max(a, 0)), (a = Math.min(a, n.slidesGrid.length - 1)), n.slideTo(a, e, t, i);
                },
                slideToClickedSlide: function () {
                    var e,
                        t = this,
                        i = t.params,
                        r = t.$wrapperEl,
                        n = 'auto' === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                        a = t.clickedIndex;
                    if (i.loop) {
                        if (t.animating) return;
                        (e = parseInt(fe(t.clickedSlide).attr('data-swiper-slide-index'), 10)),
                            i.centeredSlides
                                ? a < t.loopedSlides - n / 2 || a > t.slides.length - t.loopedSlides + n / 2
                                    ? (t.loopFix(),
                                      (a = r
                                          .children('.' + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ')')
                                          .eq(0)
                                          .index()),
                                      be(function () {
                                          t.slideTo(a);
                                      }))
                                    : t.slideTo(a)
                                : a > t.slides.length - n
                                ? (t.loopFix(),
                                  (a = r
                                      .children('.' + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ')')
                                      .eq(0)
                                      .index()),
                                  be(function () {
                                      t.slideTo(a);
                                  }))
                                : t.slideTo(a);
                    } else t.slideTo(a);
                },
            },
            loop: {
                loopCreate: function () {
                    var e = this,
                        t = ie(),
                        i = e.params,
                        r = e.$wrapperEl;
                    r.children('.' + i.slideClass + '.' + i.slideDuplicateClass).remove();
                    var n = r.children('.' + i.slideClass);
                    if (i.loopFillGroupWithBlank) {
                        var a = i.slidesPerGroup - (n.length % i.slidesPerGroup);
                        if (a !== i.slidesPerGroup) {
                            for (var o = 0; o < a; o += 1) {
                                var s = fe(t.createElement('div')).addClass(i.slideClass + ' ' + i.slideBlankClass);
                                r.append(s);
                            }
                            n = r.children('.' + i.slideClass);
                        }
                    }
                    'auto' !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = n.length), (e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10))), (e.loopedSlides += i.loopAdditionalSlides), e.loopedSlides > n.length && (e.loopedSlides = n.length);
                    var l = [],
                        d = [];
                    n.each(function (t, i) {
                        var r = fe(t);
                        i < e.loopedSlides && d.push(t), i < n.length && i >= n.length - e.loopedSlides && l.push(t), r.attr('data-swiper-slide-index', i);
                    });
                    for (var c = 0; c < d.length; c += 1) r.append(fe(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    for (var u = l.length - 1; u >= 0; u -= 1) r.prepend(fe(l[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
                },
                loopFix: function () {
                    var e = this;
                    e.emit('beforeLoopFix');
                    var t,
                        i = e.activeIndex,
                        r = e.slides,
                        n = e.loopedSlides,
                        a = e.allowSlidePrev,
                        o = e.allowSlideNext,
                        s = e.snapGrid,
                        l = e.rtlTranslate;
                    (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
                    var d = -s[i] - e.getTranslate();
                    if (i < n) (t = r.length - 3 * n + i), (t += n), e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
                    else if (i >= r.length - n) {
                        (t = -r.length + i + n), (t += n), e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
                    }
                    (e.allowSlidePrev = a), (e.allowSlideNext = o), e.emit('loopFix');
                },
                loopDestroy: function () {
                    var e = this,
                        t = e.$wrapperEl,
                        i = e.params,
                        r = e.slides;
                    t.children('.' + i.slideClass + '.' + i.slideDuplicateClass + ',.' + i.slideClass + '.' + i.slideBlankClass).remove(), r.removeAttr('data-swiper-slide-index');
                },
            },
            grabCursor: {
                setGrabCursor: function (e) {
                    var t = this;
                    if (!(t.support.touch || !t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode)) {
                        var i = t.el;
                        (i.style.cursor = 'move'), (i.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'), (i.style.cursor = e ? '-moz-grabbin' : '-moz-grab'), (i.style.cursor = e ? 'grabbing' : 'grab');
                    }
                },
                unsetGrabCursor: function () {
                    var e = this;
                    e.support.touch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode || (e.el.style.cursor = '');
                },
            },
            manipulation: {
                appendSlide: function (e) {
                    var t = this,
                        i = t.$wrapperEl,
                        r = t.params;
                    if ((r.loop && t.loopDestroy(), 'object' == typeof e && 'length' in e)) for (var n = 0; n < e.length; n += 1) e[n] && i.append(e[n]);
                    else i.append(e);
                    r.loop && t.loopCreate(), (r.observer && t.support.observer) || t.update();
                },
                prependSlide: function (e) {
                    var t = this,
                        i = t.params,
                        r = t.$wrapperEl,
                        n = t.activeIndex;
                    i.loop && t.loopDestroy();
                    var a = n + 1;
                    if ('object' == typeof e && 'length' in e) {
                        for (var o = 0; o < e.length; o += 1) e[o] && r.prepend(e[o]);
                        a = n + e.length;
                    } else r.prepend(e);
                    i.loop && t.loopCreate(), (i.observer && t.support.observer) || t.update(), t.slideTo(a, 0, !1);
                },
                addSlide: function (e, t) {
                    var i = this,
                        r = i.$wrapperEl,
                        n = i.params,
                        a = i.activeIndex;
                    n.loop && ((a -= i.loopedSlides), i.loopDestroy(), (i.slides = r.children('.' + n.slideClass)));
                    var o = i.slides.length;
                    if (e <= 0) i.prependSlide(t);
                    else if (e >= o) i.appendSlide(t);
                    else {
                        for (var s = a > e ? a + 1 : a, l = [], d = o - 1; d >= e; d -= 1) {
                            var c = i.slides.eq(d);
                            c.remove(), l.unshift(c);
                        }
                        if ('object' == typeof t && 'length' in t) {
                            for (var u = 0; u < t.length; u += 1) t[u] && r.append(t[u]);
                            s = a > e ? a + t.length : a;
                        } else r.append(t);
                        for (var p = 0; p < l.length; p += 1) r.append(l[p]);
                        n.loop && i.loopCreate(), (n.observer && i.support.observer) || i.update(), n.loop ? i.slideTo(s + i.loopedSlides, 0, !1) : i.slideTo(s, 0, !1);
                    }
                },
                removeSlide: function (e) {
                    var t = this,
                        i = t.params,
                        r = t.$wrapperEl,
                        n = t.activeIndex;
                    i.loop && ((n -= t.loopedSlides), t.loopDestroy(), (t.slides = r.children('.' + i.slideClass)));
                    var a,
                        o = n;
                    if ('object' == typeof e && 'length' in e) {
                        for (var s = 0; s < e.length; s += 1) (a = e[s]), t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1);
                        o = Math.max(o, 0);
                    } else (a = e), t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1), (o = Math.max(o, 0));
                    i.loop && t.loopCreate(), (i.observer && t.support.observer) || t.update(), i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
                },
                removeAllSlides: function () {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e);
                },
            },
            events: {
                attachEvents: function () {
                    var e = this,
                        t = ie(),
                        i = e.params,
                        r = e.touchEvents,
                        n = e.el,
                        a = e.wrapperEl,
                        o = e.device,
                        s = e.support;
                    (e.onTouchStart = Le.bind(e)), (e.onTouchMove = Be.bind(e)), (e.onTouchEnd = Oe.bind(e)), i.cssMode && (e.onScroll = Ne.bind(e)), (e.onClick = Ie.bind(e));
                    var l = !!i.nested;
                    if (!s.touch && s.pointerEvents) n.addEventListener(r.start, e.onTouchStart, !1), t.addEventListener(r.move, e.onTouchMove, l), t.addEventListener(r.end, e.onTouchEnd, !1);
                    else {
                        if (s.touch) {
                            var d = !('touchstart' !== r.start || !s.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };
                            n.addEventListener(r.start, e.onTouchStart, d), n.addEventListener(r.move, e.onTouchMove, s.passiveListener ? { passive: !1, capture: l } : l), n.addEventListener(r.end, e.onTouchEnd, d), r.cancel && n.addEventListener(r.cancel, e.onTouchEnd, d), De || (t.addEventListener('touchstart', je), (De = !0));
                        }
                        ((i.simulateTouch && !o.ios && !o.android) || (i.simulateTouch && !s.touch && o.ios)) && (n.addEventListener('mousedown', e.onTouchStart, !1), t.addEventListener('mousemove', e.onTouchMove, l), t.addEventListener('mouseup', e.onTouchEnd, !1));
                    }
                    (i.preventClicks || i.preventClicksPropagation) && n.addEventListener('click', e.onClick, !0), i.cssMode && a.addEventListener('scroll', e.onScroll), i.updateOnWindowResize ? e.on(o.ios || o.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', ze, !0) : e.on('observerUpdate', ze, !0);
                },
                detachEvents: function () {
                    var e = this,
                        t = ie(),
                        i = e.params,
                        r = e.touchEvents,
                        n = e.el,
                        a = e.wrapperEl,
                        o = e.device,
                        s = e.support,
                        l = !!i.nested;
                    if (!s.touch && s.pointerEvents) n.removeEventListener(r.start, e.onTouchStart, !1), t.removeEventListener(r.move, e.onTouchMove, l), t.removeEventListener(r.end, e.onTouchEnd, !1);
                    else {
                        if (s.touch) {
                            var d = !('onTouchStart' !== r.start || !s.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };
                            n.removeEventListener(r.start, e.onTouchStart, d), n.removeEventListener(r.move, e.onTouchMove, l), n.removeEventListener(r.end, e.onTouchEnd, d), r.cancel && n.removeEventListener(r.cancel, e.onTouchEnd, d);
                        }
                        ((i.simulateTouch && !o.ios && !o.android) || (i.simulateTouch && !s.touch && o.ios)) && (n.removeEventListener('mousedown', e.onTouchStart, !1), t.removeEventListener('mousemove', e.onTouchMove, l), t.removeEventListener('mouseup', e.onTouchEnd, !1));
                    }
                    (i.preventClicks || i.preventClicksPropagation) && n.removeEventListener('click', e.onClick, !0), i.cssMode && a.removeEventListener('scroll', e.onScroll), e.off(o.ios || o.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', ze);
                },
            },
            breakpoints: {
                setBreakpoint: function () {
                    var e = this,
                        t = e.activeIndex,
                        i = e.initialized,
                        r = e.loopedSlides,
                        n = void 0 === r ? 0 : r,
                        a = e.params,
                        o = e.$el,
                        s = a.breakpoints;
                    if (s && (!s || 0 !== Object.keys(s).length)) {
                        var l = e.getBreakpoint(s);
                        if (l && e.currentBreakpoint !== l) {
                            var d = l in s ? s[l] : void 0;
                            d &&
                                ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (e) {
                                    var t = d[e];
                                    void 0 !== t && (d[e] = 'slidesPerView' !== e || ('AUTO' !== t && 'auto' !== t) ? ('slidesPerView' === e ? parseFloat(t) : parseInt(t, 10)) : 'auto');
                                });
                            var c = d || e.originalParams,
                                u = a.slidesPerColumn > 1,
                                p = c.slidesPerColumn > 1;
                            u && !p ? (o.removeClass(a.containerModifierClass + 'multirow ' + a.containerModifierClass + 'multirow-column'), e.emitContainerClasses()) : !u && p && (o.addClass(a.containerModifierClass + 'multirow'), 'column' === c.slidesPerColumnFill && o.addClass(a.containerModifierClass + 'multirow-column'), e.emitContainerClasses());
                            var f = c.direction && c.direction !== a.direction,
                                h = a.loop && (c.slidesPerView !== a.slidesPerView || f);
                            f && i && e.changeDirection(), ye(e.params, c), ye(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), (e.currentBreakpoint = l), h && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit('breakpoint', c);
                        }
                    }
                },
                getBreakpoint: function (e) {
                    var t = ne();
                    if (e) {
                        var i = !1,
                            r = Object.keys(e).map(function (e) {
                                if ('string' == typeof e && 0 === e.indexOf('@')) {
                                    var i = parseFloat(e.substr(1));
                                    return { value: t.innerHeight * i, point: e };
                                }
                                return { value: e, point: e };
                            });
                        r.sort(function (e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10);
                        });
                        for (var n = 0; n < r.length; n += 1) {
                            var a = r[n],
                                o = a.point;
                            a.value <= t.innerWidth && (i = o);
                        }
                        return i || 'max';
                    }
                },
            },
            checkOverflow: {
                checkOverflow: function () {
                    var e = this,
                        t = e.params,
                        i = e.isLocked,
                        r = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                    t.slidesOffsetBefore && t.slidesOffsetAfter && r ? (e.isLocked = r <= e.size) : (e.isLocked = 1 === e.snapGrid.length), (e.allowSlideNext = !e.isLocked), (e.allowSlidePrev = !e.isLocked), i !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock'), i && i !== e.isLocked && ((e.isEnd = !1), e.navigation && e.navigation.update());
                },
            },
            classes: {
                addClasses: function () {
                    var e = this,
                        t = e.classNames,
                        i = e.params,
                        r = e.rtl,
                        n = e.$el,
                        a = e.device,
                        o = [];
                    o.push('initialized'),
                        o.push(i.direction),
                        i.freeMode && o.push('free-mode'),
                        i.autoHeight && o.push('autoheight'),
                        r && o.push('rtl'),
                        i.slidesPerColumn > 1 && (o.push('multirow'), 'column' === i.slidesPerColumnFill && o.push('multirow-column')),
                        a.android && o.push('android'),
                        a.ios && o.push('ios'),
                        i.cssMode && o.push('css-mode'),
                        o.forEach(function (e) {
                            t.push(i.containerModifierClass + e);
                        }),
                        n.addClass(t.join(' ')),
                        e.emitContainerClasses();
                },
                removeClasses: function () {
                    var e = this,
                        t = e.$el,
                        i = e.classNames;
                    t.removeClass(i.join(' ')), e.emitContainerClasses();
                },
            },
            images: {
                loadImage: function (e, t, i, r, n, a) {
                    var o,
                        s = ne();
                    function l() {
                        a && a();
                    }
                    fe(e).parent('picture')[0] || (e.complete && n) ? l() : t ? (((o = new s.Image()).onload = l), (o.onerror = l), r && (o.sizes = r), i && (o.srcset = i), t && (o.src = t)) : l();
                },
                preloadImages: function () {
                    var e = this;
                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit('imagesReady')));
                    }
                    e.imagesToLoad = e.$el.find('img');
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var r = e.imagesToLoad[i];
                        e.loadImage(r, r.currentSrc || r.getAttribute('src'), r.srcset || r.getAttribute('srcset'), r.sizes || r.getAttribute('sizes'), !0, t);
                    }
                },
            },
        },
        He = {},
        Re = (function () {
            function e() {
                for (var t, i, r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                1 === n.length && n[0].constructor && n[0].constructor === Object ? (i = n[0]) : ((t = n[0]), (i = n[1])), i || (i = {}), (i = ye({}, i)), t && !i.el && (i.el = t);
                var o = this;
                (o.support = Ce()),
                    (o.device = Te({ userAgent: i.userAgent })),
                    (o.browser = Se()),
                    (o.eventsListeners = {}),
                    (o.eventsAnyListeners = []),
                    Object.keys(Fe).forEach(function (t) {
                        Object.keys(Fe[t]).forEach(function (i) {
                            e.prototype[i] || (e.prototype[i] = Fe[t][i]);
                        });
                    }),
                    void 0 === o.modules && (o.modules = {}),
                    Object.keys(o.modules).forEach(function (e) {
                        var t = o.modules[e];
                        if (t.params) {
                            var r = Object.keys(t.params)[0],
                                n = t.params[r];
                            if ('object' != typeof n || null === n) return;
                            if (!(r in i) || !('enabled' in n)) return;
                            !0 === i[r] && (i[r] = { enabled: !0 }), 'object' != typeof i[r] || 'enabled' in i[r] || (i[r].enabled = !0), i[r] || (i[r] = { enabled: !1 });
                        }
                    });
                var s = ye({}, Ge);
                o.useParams(s),
                    (o.params = ye({}, s, He, i)),
                    (o.originalParams = ye({}, o.params)),
                    (o.passedParams = ye({}, i)),
                    o.params &&
                        o.params.on &&
                        Object.keys(o.params.on).forEach(function (e) {
                            o.on(e, o.params.on[e]);
                        }),
                    (o.$ = fe);
                var l = fe(o.params.el);
                if ((t = l[0])) {
                    if (l.length > 1) {
                        var d = [];
                        return (
                            l.each(function (t) {
                                var r = ye({}, i, { el: t });
                                d.push(new e(r));
                            }),
                            d
                        );
                    }
                    var c, u, p;
                    return (
                        (t.swiper = o),
                        t && t.shadowRoot && t.shadowRoot.querySelector
                            ? ((c = fe(t.shadowRoot.querySelector('.' + o.params.wrapperClass))).children = function (e) {
                                  return l.children(e);
                              })
                            : (c = l.children('.' + o.params.wrapperClass)),
                        ye(o, {
                            $el: l,
                            el: t,
                            $wrapperEl: c,
                            wrapperEl: c[0],
                            classNames: [],
                            slides: fe(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function () {
                                return 'horizontal' === o.params.direction;
                            },
                            isVertical: function () {
                                return 'vertical' === o.params.direction;
                            },
                            rtl: 'rtl' === t.dir.toLowerCase() || 'rtl' === l.css('direction'),
                            rtlTranslate: 'horizontal' === o.params.direction && ('rtl' === t.dir.toLowerCase() || 'rtl' === l.css('direction')),
                            wrongRTL: '-webkit-box' === c.css('display'),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: o.params.allowSlideNext,
                            allowSlidePrev: o.params.allowSlidePrev,
                            touchEvents: ((u = ['touchstart', 'touchmove', 'touchend', 'touchcancel']), (p = ['mousedown', 'mousemove', 'mouseup']), o.support.pointerEvents && (p = ['pointerdown', 'pointermove', 'pointerup']), (o.touchEventsTouch = { start: u[0], move: u[1], end: u[2], cancel: u[3] }), (o.touchEventsDesktop = { start: p[0], move: p[1], end: p[2] }), o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop),
                            touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: 'input, select, option, textarea, button, video, label', lastClickTime: we(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 },
                            allowClick: !0,
                            allowTouchMove: o.params.allowTouchMove,
                            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                        o.useModules(),
                        o.emit('_swiper'),
                        o.params.init && o.init(),
                        o
                    );
                }
            }
            var t,
                i,
                r,
                n = e.prototype;
            return (
                (n.emitContainerClasses = function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                        var t = e.el.className.split(' ').filter(function (t) {
                            return 0 === t.indexOf('swiper-container') || 0 === t.indexOf(e.params.containerModifierClass);
                        });
                        e.emit('_containerClasses', t.join(' '));
                    }
                }),
                (n.emitSlidesClasses = function () {
                    var e = this;
                    e.params._emitClasses &&
                        e.el &&
                        e.slides.each(function (t) {
                            var i = t.className.split(' ').filter(function (t) {
                                return 0 === t.indexOf('swiper-slide') || 0 === t.indexOf(e.params.slideClass);
                            });
                            e.emit('_slideClass', t, i.join(' '));
                        });
                }),
                (n.slidesPerViewDynamic = function () {
                    var e = this,
                        t = e.params,
                        i = e.slides,
                        r = e.slidesGrid,
                        n = e.size,
                        a = e.activeIndex,
                        o = 1;
                    if (t.centeredSlides) {
                        for (var s, l = i[a].swiperSlideSize, d = a + 1; d < i.length; d += 1) i[d] && !s && ((o += 1), (l += i[d].swiperSlideSize) > n && (s = !0));
                        for (var c = a - 1; c >= 0; c -= 1) i[c] && !s && ((o += 1), (l += i[c].swiperSlideSize) > n && (s = !0));
                    } else for (var u = a + 1; u < i.length; u += 1) r[u] - r[a] < n && (o += 1);
                    return o;
                }),
                (n.update = function () {
                    var e = this;
                    if (e && !e.destroyed) {
                        var t = e.snapGrid,
                            i = e.params;
                        i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (r(), e.params.autoHeight && e.updateAutoHeight()) : (('auto' === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || r(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit('update');
                    }
                    function r() {
                        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
                    }
                }),
                (n.changeDirection = function (e, t) {
                    void 0 === t && (t = !0);
                    var i = this,
                        r = i.params.direction;
                    return (
                        e || (e = 'horizontal' === r ? 'vertical' : 'horizontal'),
                        e === r ||
                            ('horizontal' !== e && 'vertical' !== e) ||
                            (i.$el.removeClass('' + i.params.containerModifierClass + r).addClass('' + i.params.containerModifierClass + e),
                            i.emitContainerClasses(),
                            (i.params.direction = e),
                            i.slides.each(function (t) {
                                'vertical' === e ? (t.style.width = '') : (t.style.height = '');
                            }),
                            i.emit('changeDirection'),
                            t && i.update()),
                        i
                    );
                }),
                (n.init = function () {
                    var e = this;
                    e.initialized || (e.emit('beforeInit'), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), (e.initialized = !0), e.emit('init'));
                }),
                (n.destroy = function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var i,
                        r = this,
                        n = r.params,
                        a = r.$el,
                        o = r.$wrapperEl,
                        s = r.slides;
                    return (
                        void 0 === r.params ||
                            r.destroyed ||
                            (r.emit('beforeDestroy'),
                            (r.initialized = !1),
                            r.detachEvents(),
                            n.loop && r.loopDestroy(),
                            t && (r.removeClasses(), a.removeAttr('style'), o.removeAttr('style'), s && s.length && s.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index')),
                            r.emit('destroy'),
                            Object.keys(r.eventsListeners).forEach(function (e) {
                                r.off(e);
                            }),
                            !1 !== e &&
                                ((r.$el[0].swiper = null),
                                (i = r),
                                Object.keys(i).forEach(function (e) {
                                    try {
                                        i[e] = null;
                                    } catch (e) {}
                                    try {
                                        delete i[e];
                                    } catch (e) {}
                                })),
                            (r.destroyed = !0)),
                        null
                    );
                }),
                (e.extendDefaults = function (e) {
                    ye(He, e);
                }),
                (e.installModule = function (t) {
                    e.prototype.modules || (e.prototype.modules = {});
                    var i = t.name || Object.keys(e.prototype.modules).length + '_' + we();
                    e.prototype.modules[i] = t;
                }),
                (e.use = function (t) {
                    return Array.isArray(t)
                        ? (t.forEach(function (t) {
                              return e.installModule(t);
                          }),
                          e)
                        : (e.installModule(t), e);
                }),
                (t = e),
                (r = [
                    {
                        key: 'extendedDefaults',
                        get: function () {
                            return He;
                        },
                    },
                    {
                        key: 'defaults',
                        get: function () {
                            return Ge;
                        },
                    },
                ]),
                (i = null) && $e(t.prototype, i),
                r && $e(t, r),
                e
            );
        })();
    function Ye() {
        return (Ye =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
                }
                return e;
            }).apply(this, arguments);
    }
    Re.use([Ee, Pe]);
    var Ve = {
            update: function () {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var i = e.navigation,
                        r = i.$nextEl,
                        n = i.$prevEl;
                    n && n.length > 0 && (e.isBeginning ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](t.lockClass)), r && r.length > 0 && (e.isEnd ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](t.lockClass));
                }
            },
            onPrevClick: function (e) {
                var t = this;
                e.preventDefault(), (t.isBeginning && !t.params.loop) || t.slidePrev();
            },
            onNextClick: function (e) {
                var t = this;
                e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
            },
            init: function () {
                var e,
                    t,
                    i = this,
                    r = i.params.navigation;
                (r.nextEl || r.prevEl) && (r.nextEl && ((e = fe(r.nextEl)), i.params.uniqueNavElements && 'string' == typeof r.nextEl && e.length > 1 && 1 === i.$el.find(r.nextEl).length && (e = i.$el.find(r.nextEl))), r.prevEl && ((t = fe(r.prevEl)), i.params.uniqueNavElements && 'string' == typeof r.prevEl && t.length > 1 && 1 === i.$el.find(r.prevEl).length && (t = i.$el.find(r.prevEl))), e && e.length > 0 && e.on('click', i.navigation.onNextClick), t && t.length > 0 && t.on('click', i.navigation.onPrevClick), ye(i.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
            },
            destroy: function () {
                var e = this,
                    t = e.navigation,
                    i = t.$nextEl,
                    r = t.$prevEl;
                i && i.length && (i.off('click', e.navigation.onNextClick), i.removeClass(e.params.navigation.disabledClass)), r && r.length && (r.off('click', e.navigation.onPrevClick), r.removeClass(e.params.navigation.disabledClass));
            },
        },
        _e = {
            name: 'navigation',
            params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: 'swiper-button-disabled', hiddenClass: 'swiper-button-hidden', lockClass: 'swiper-button-lock' } },
            create: function () {
                Ae(this, { navigation: Ye({}, Ve) });
            },
            on: {
                init: function (e) {
                    e.navigation.init(), e.navigation.update();
                },
                toEdge: function (e) {
                    e.navigation.update();
                },
                fromEdge: function (e) {
                    e.navigation.update();
                },
                destroy: function (e) {
                    e.navigation.destroy();
                },
                click: function (e, t) {
                    var i,
                        r = e.navigation,
                        n = r.$nextEl,
                        a = r.$prevEl;
                    !e.params.navigation.hideOnClick || fe(t.target).is(a) || fe(t.target).is(n) || (n ? (i = n.hasClass(e.params.navigation.hiddenClass)) : a && (i = a.hasClass(e.params.navigation.hiddenClass)), !0 === i ? e.emit('navigationShow') : e.emit('navigationHide'), n && n.toggleClass(e.params.navigation.hiddenClass), a && a.toggleClass(e.params.navigation.hiddenClass));
                },
            },
        };
    function qe() {
        return (qe =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
                }
                return e;
            }).apply(this, arguments);
    }
    var We = {
            update: function () {
                var e = this,
                    t = e.rtl,
                    i = e.params.pagination;
                if (i.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var r,
                        n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        a = e.pagination.$el,
                        o = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if ((e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > n - 1 - 2 * e.loopedSlides && (r -= n - 2 * e.loopedSlides), r > o - 1 && (r -= o), r < 0 && 'bullets' !== e.params.paginationType && (r = o + r)) : (r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0), 'bullets' === i.type && e.pagination.bullets && e.pagination.bullets.length > 0)) {
                        var s,
                            l,
                            d,
                            c = e.pagination.bullets;
                        if ((i.dynamicBullets && ((e.pagination.bulletSize = c.eq(0)[e.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)), a.css(e.isHorizontal() ? 'width' : 'height', e.pagination.bulletSize * (i.dynamicMainBullets + 4) + 'px'), i.dynamicMainBullets > 1 && void 0 !== e.previousIndex && ((e.pagination.dynamicBulletIndex += r - e.previousIndex), e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? (e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1) : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), (s = r - e.pagination.dynamicBulletIndex), (d = ((l = s + (Math.min(c.length, i.dynamicMainBullets) - 1)) + s) / 2)), c.removeClass(i.bulletActiveClass + ' ' + i.bulletActiveClass + '-next ' + i.bulletActiveClass + '-next-next ' + i.bulletActiveClass + '-prev ' + i.bulletActiveClass + '-prev-prev ' + i.bulletActiveClass + '-main'), a.length > 1))
                            c.each(function (e) {
                                var t = fe(e),
                                    n = t.index();
                                n === r && t.addClass(i.bulletActiveClass),
                                    i.dynamicBullets &&
                                        (n >= s && n <= l && t.addClass(i.bulletActiveClass + '-main'),
                                        n === s &&
                                            t
                                                .prev()
                                                .addClass(i.bulletActiveClass + '-prev')
                                                .prev()
                                                .addClass(i.bulletActiveClass + '-prev-prev'),
                                        n === l &&
                                            t
                                                .next()
                                                .addClass(i.bulletActiveClass + '-next')
                                                .next()
                                                .addClass(i.bulletActiveClass + '-next-next'));
                            });
                        else {
                            var u = c.eq(r),
                                p = u.index();
                            if ((u.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                                for (var f = c.eq(s), h = c.eq(l), m = s; m <= l; m += 1) c.eq(m).addClass(i.bulletActiveClass + '-main');
                                if (e.params.loop)
                                    if (p >= c.length - i.dynamicMainBullets) {
                                        for (var v = i.dynamicMainBullets; v >= 0; v -= 1) c.eq(c.length - v).addClass(i.bulletActiveClass + '-main');
                                        c.eq(c.length - i.dynamicMainBullets - 1).addClass(i.bulletActiveClass + '-prev');
                                    } else
                                        f
                                            .prev()
                                            .addClass(i.bulletActiveClass + '-prev')
                                            .prev()
                                            .addClass(i.bulletActiveClass + '-prev-prev'),
                                            h
                                                .next()
                                                .addClass(i.bulletActiveClass + '-next')
                                                .next()
                                                .addClass(i.bulletActiveClass + '-next-next');
                                else
                                    f
                                        .prev()
                                        .addClass(i.bulletActiveClass + '-prev')
                                        .prev()
                                        .addClass(i.bulletActiveClass + '-prev-prev'),
                                        h
                                            .next()
                                            .addClass(i.bulletActiveClass + '-next')
                                            .next()
                                            .addClass(i.bulletActiveClass + '-next-next');
                            }
                        }
                        if (i.dynamicBullets) {
                            var g = Math.min(c.length, i.dynamicMainBullets + 4),
                                b = (e.pagination.bulletSize * g - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                                w = t ? 'right' : 'left';
                            c.css(e.isHorizontal() ? w : 'top', b + 'px');
                        }
                    }
                    if (('fraction' === i.type && (a.find('.' + i.currentClass).text(i.formatFractionCurrent(r + 1)), a.find('.' + i.totalClass).text(i.formatFractionTotal(o))), 'progressbar' === i.type)) {
                        var x;
                        x = i.progressbarOpposite ? (e.isHorizontal() ? 'vertical' : 'horizontal') : e.isHorizontal() ? 'horizontal' : 'vertical';
                        var y = (r + 1) / o,
                            A = 1,
                            C = 1;
                        'horizontal' === x ? (A = y) : (C = y),
                            a
                                .find('.' + i.progressbarFillClass)
                                .transform('translate3d(0,0,0) scaleX(' + A + ') scaleY(' + C + ')')
                                .transition(e.params.speed);
                    }
                    'custom' === i.type && i.renderCustom ? (a.html(i.renderCustom(e, r + 1, o)), e.emit('paginationRender', a[0])) : e.emit('paginationUpdate', a[0]), a[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](i.lockClass);
                }
            },
            render: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        r = e.pagination.$el,
                        n = '';
                    if ('bullets' === t.type) {
                        for (var a = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, o = 0; o < a; o += 1) t.renderBullet ? (n += t.renderBullet.call(e, o, t.bulletClass)) : (n += '<' + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + '>');
                        r.html(n), (e.pagination.bullets = r.find('.' + t.bulletClass));
                    }
                    'fraction' === t.type && ((n = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>'), r.html(n)), 'progressbar' === t.type && ((n = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>'), r.html(n)), 'custom' !== t.type && e.emit('paginationRender', e.pagination.$el[0]);
                }
            },
            init: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = fe(t.el);
                    0 !== i.length &&
                        (e.params.uniqueNavElements && 'string' == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)),
                        'bullets' === t.type && t.clickable && i.addClass(t.clickableClass),
                        i.addClass(t.modifierClass + t.type),
                        'bullets' === t.type && t.dynamicBullets && (i.addClass('' + t.modifierClass + t.type + '-dynamic'), (e.pagination.dynamicBulletIndex = 0), t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                        'progressbar' === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                        t.clickable &&
                            i.on('click', '.' + t.bulletClass, function (t) {
                                t.preventDefault();
                                var i = fe(this).index() * e.params.slidesPerGroup;
                                e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                            }),
                        ye(e.pagination, { $el: i, el: i[0] }));
                }
            },
            destroy: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var i = e.pagination.$el;
                    i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off('click', '.' + t.bulletClass);
                }
            },
        },
        Ue = {
            name: 'pagination',
            params: {
                pagination: {
                    el: null,
                    bulletElement: 'span',
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: 'bullets',
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function (e) {
                        return e;
                    },
                    formatFractionTotal: function (e) {
                        return e;
                    },
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                    modifierClass: 'swiper-pagination-',
                    currentClass: 'swiper-pagination-current',
                    totalClass: 'swiper-pagination-total',
                    hiddenClass: 'swiper-pagination-hidden',
                    progressbarFillClass: 'swiper-pagination-progressbar-fill',
                    progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
                    clickableClass: 'swiper-pagination-clickable',
                    lockClass: 'swiper-pagination-lock',
                },
            },
            create: function () {
                Ae(this, { pagination: qe({ dynamicBulletIndex: 0 }, We) });
            },
            on: {
                init: function (e) {
                    e.pagination.init(), e.pagination.render(), e.pagination.update();
                },
                activeIndexChange: function (e) {
                    (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
                },
                snapIndexChange: function (e) {
                    e.params.loop || e.pagination.update();
                },
                slidesLengthChange: function (e) {
                    e.params.loop && (e.pagination.render(), e.pagination.update());
                },
                snapGridLengthChange: function (e) {
                    e.params.loop || (e.pagination.render(), e.pagination.update());
                },
                destroy: function (e) {
                    e.pagination.destroy();
                },
                click: function (e, t) {
                    e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !fe(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit('paginationShow') : e.emit('paginationHide'), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
                },
            },
        },
        Xe = function (e, t) {
            return function () {
                for (var i = new Array(arguments.length), r = 0; r < i.length; r++) i[r] = arguments[r];
                return e.apply(t, i);
            };
        },
        Qe = Object.prototype.toString;
    function Ze(e) {
        return '[object Array]' === Qe.call(e);
    }
    function Ke(e) {
        return void 0 === e;
    }
    function Je(e) {
        return null !== e && 'object' == typeof e;
    }
    function et(e) {
        if ('[object Object]' !== Qe.call(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype;
    }
    function tt(e) {
        return '[object Function]' === Qe.call(e);
    }
    function it(e, t) {
        if (null != e)
            if (('object' != typeof e && (e = [e]), Ze(e))) for (var i = 0, r = e.length; i < r; i++) t.call(null, e[i], i, e);
            else for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e);
    }
    var rt = {
        isArray: Ze,
        isArrayBuffer: function (e) {
            return '[object ArrayBuffer]' === Qe.call(e);
        },
        isBuffer: function (e) {
            return null !== e && !Ke(e) && null !== e.constructor && !Ke(e.constructor) && 'function' == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
        },
        isFormData: function (e) {
            return 'undefined' != typeof FormData && e instanceof FormData;
        },
        isArrayBufferView: function (e) {
            return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
        },
        isString: function (e) {
            return 'string' == typeof e;
        },
        isNumber: function (e) {
            return 'number' == typeof e;
        },
        isObject: Je,
        isPlainObject: et,
        isUndefined: Ke,
        isDate: function (e) {
            return '[object Date]' === Qe.call(e);
        },
        isFile: function (e) {
            return '[object File]' === Qe.call(e);
        },
        isBlob: function (e) {
            return '[object Blob]' === Qe.call(e);
        },
        isFunction: tt,
        isStream: function (e) {
            return Je(e) && tt(e.pipe);
        },
        isURLSearchParams: function (e) {
            return 'undefined' != typeof URLSearchParams && e instanceof URLSearchParams;
        },
        isStandardBrowserEnv: function () {
            return ('undefined' == typeof navigator || ('ReactNative' !== navigator.product && 'NativeScript' !== navigator.product && 'NS' !== navigator.product)) && 'undefined' != typeof window && 'undefined' != typeof document;
        },
        forEach: it,
        merge: function e() {
            var t = {};
            function i(i, r) {
                et(t[r]) && et(i) ? (t[r] = e(t[r], i)) : et(i) ? (t[r] = e({}, i)) : Ze(i) ? (t[r] = i.slice()) : (t[r] = i);
            }
            for (var r = 0, n = arguments.length; r < n; r++) it(arguments[r], i);
            return t;
        },
        extend: function (e, t, i) {
            return (
                it(t, function (t, r) {
                    e[r] = i && 'function' == typeof t ? Xe(t, i) : t;
                }),
                e
            );
        },
        trim: function (e) {
            return e.replace(/^\s*/, '').replace(/\s*$/, '');
        },
        stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
        },
    };
    function nt(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
    }
    var at = function (e, t, i) {
        if (!t) return e;
        var r;
        if (i) r = i(t);
        else if (rt.isURLSearchParams(t)) r = t.toString();
        else {
            var n = [];
            rt.forEach(t, function (e, t) {
                null != e &&
                    (rt.isArray(e) ? (t += '[]') : (e = [e]),
                    rt.forEach(e, function (e) {
                        rt.isDate(e) ? (e = e.toISOString()) : rt.isObject(e) && (e = JSON.stringify(e)), n.push(nt(t) + '=' + nt(e));
                    }));
            }),
                (r = n.join('&'));
        }
        if (r) {
            var a = e.indexOf('#');
            -1 !== a && (e = e.slice(0, a)), (e += (-1 === e.indexOf('?') ? '?' : '&') + r);
        }
        return e;
    };
    function ot() {
        this.handlers = [];
    }
    (ot.prototype.use = function (e, t) {
        return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
    }),
        (ot.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null);
        }),
        (ot.prototype.forEach = function (e) {
            rt.forEach(this.handlers, function (t) {
                null !== t && e(t);
            });
        });
    var st = ot,
        lt = function (e, t, i) {
            return (
                rt.forEach(i, function (i) {
                    e = i(e, t);
                }),
                e
            );
        },
        dt = function (e) {
            return !(!e || !e.__CANCEL__);
        },
        ct = function (e, t) {
            rt.forEach(e, function (i, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && ((e[t] = i), delete e[r]);
            });
        },
        ut = function (e, t, i, r, n) {
            return (function (e, t, i, r, n) {
                return (
                    (e.config = t),
                    i && (e.code = i),
                    (e.request = r),
                    (e.response = n),
                    (e.isAxiosError = !0),
                    (e.toJSON = function () {
                        return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code };
                    }),
                    e
                );
            })(new Error(e), t, i, r, n);
        },
        pt = rt.isStandardBrowserEnv()
            ? {
                  write: function (e, t, i, r, n, a) {
                      var o = [];
                      o.push(e + '=' + encodeURIComponent(t)), rt.isNumber(i) && o.push('expires=' + new Date(i).toGMTString()), rt.isString(r) && o.push('path=' + r), rt.isString(n) && o.push('domain=' + n), !0 === a && o.push('secure'), (document.cookie = o.join('; '));
                  },
                  read: function (e) {
                      var t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
                      return t ? decodeURIComponent(t[3]) : null;
                  },
                  remove: function (e) {
                      this.write(e, '', Date.now() - 864e5);
                  },
              }
            : {
                  write: function () {},
                  read: function () {
                      return null;
                  },
                  remove: function () {},
              },
        ft = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'],
        ht = rt.isStandardBrowserEnv()
            ? (function () {
                  var e,
                      t = /(msie|trident)/i.test(navigator.userAgent),
                      i = document.createElement('a');
                  function r(e) {
                      var r = e;
                      return t && (i.setAttribute('href', r), (r = i.href)), i.setAttribute('href', r), { href: i.href, protocol: i.protocol ? i.protocol.replace(/:$/, '') : '', host: i.host, search: i.search ? i.search.replace(/^\?/, '') : '', hash: i.hash ? i.hash.replace(/^#/, '') : '', hostname: i.hostname, port: i.port, pathname: '/' === i.pathname.charAt(0) ? i.pathname : '/' + i.pathname };
                  }
                  return (
                      (e = r(window.location.href)),
                      function (t) {
                          var i = rt.isString(t) ? r(t) : t;
                          return i.protocol === e.protocol && i.host === e.host;
                      }
                  );
              })()
            : function () {
                  return !0;
              },
        mt = function (e) {
            return new Promise(function (t, i) {
                var r = e.data,
                    n = e.headers;
                rt.isFormData(r) && delete n['Content-Type'], (rt.isBlob(r) || rt.isFile(r)) && r.type && delete n['Content-Type'];
                var a = new XMLHttpRequest();
                if (e.auth) {
                    var o = e.auth.username || '',
                        s = unescape(encodeURIComponent(e.auth.password)) || '';
                    n.Authorization = 'Basic ' + btoa(o + ':' + s);
                }
                var l,
                    d,
                    c =
                        ((l = e.baseURL),
                        (d = e.url),
                        l && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(d)
                            ? (function (e, t) {
                                  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
                              })(l, d)
                            : d);
                if (
                    (a.open(e.method.toUpperCase(), at(c, e.params, e.paramsSerializer), !0),
                    (a.timeout = e.timeout),
                    (a.onreadystatechange = function () {
                        if (a && 4 === a.readyState && (0 !== a.status || (a.responseURL && 0 === a.responseURL.indexOf('file:')))) {
                            var r,
                                n,
                                o,
                                s,
                                l,
                                d =
                                    'getAllResponseHeaders' in a
                                        ? ((r = a.getAllResponseHeaders()),
                                          (l = {}),
                                          r
                                              ? (rt.forEach(r.split('\n'), function (e) {
                                                    if (((s = e.indexOf(':')), (n = rt.trim(e.substr(0, s)).toLowerCase()), (o = rt.trim(e.substr(s + 1))), n)) {
                                                        if (l[n] && ft.indexOf(n) >= 0) return;
                                                        l[n] = 'set-cookie' === n ? (l[n] ? l[n] : []).concat([o]) : l[n] ? l[n] + ', ' + o : o;
                                                    }
                                                }),
                                                l)
                                              : l)
                                        : null,
                                c = { data: e.responseType && 'text' !== e.responseType ? a.response : a.responseText, status: a.status, statusText: a.statusText, headers: d, config: e, request: a };
                            !(function (e, t, i) {
                                var r = i.config.validateStatus;
                                i.status && r && !r(i.status) ? t(ut('Request failed with status code ' + i.status, i.config, null, i.request, i)) : e(i);
                            })(t, i, c),
                                (a = null);
                        }
                    }),
                    (a.onabort = function () {
                        a && (i(ut('Request aborted', e, 'ECONNABORTED', a)), (a = null));
                    }),
                    (a.onerror = function () {
                        i(ut('Network Error', e, null, a)), (a = null);
                    }),
                    (a.ontimeout = function () {
                        var t = 'timeout of ' + e.timeout + 'ms exceeded';
                        e.timeoutErrorMessage && (t = e.timeoutErrorMessage), i(ut(t, e, 'ECONNABORTED', a)), (a = null);
                    }),
                    rt.isStandardBrowserEnv())
                ) {
                    var u = (e.withCredentials || ht(c)) && e.xsrfCookieName ? pt.read(e.xsrfCookieName) : void 0;
                    u && (n[e.xsrfHeaderName] = u);
                }
                if (
                    ('setRequestHeader' in a &&
                        rt.forEach(n, function (e, t) {
                            void 0 === r && 'content-type' === t.toLowerCase() ? delete n[t] : a.setRequestHeader(t, e);
                        }),
                    rt.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials),
                    e.responseType)
                )
                    try {
                        a.responseType = e.responseType;
                    } catch (t) {
                        if ('json' !== e.responseType) throw t;
                    }
                'function' == typeof e.onDownloadProgress && a.addEventListener('progress', e.onDownloadProgress),
                    'function' == typeof e.onUploadProgress && a.upload && a.upload.addEventListener('progress', e.onUploadProgress),
                    e.cancelToken &&
                        e.cancelToken.promise.then(function (e) {
                            a && (a.abort(), i(e), (a = null));
                        }),
                    r || (r = null),
                    a.send(r);
            });
        },
        vt = { 'Content-Type': 'application/x-www-form-urlencoded' };
    function gt(e, t) {
        !rt.isUndefined(e) && rt.isUndefined(e['Content-Type']) && (e['Content-Type'] = t);
    }
    var bt,
        wt = {
            adapter: (('undefined' != typeof XMLHttpRequest || ('undefined' != typeof process && '[object process]' === Object.prototype.toString.call(process))) && (bt = mt), bt),
            transformRequest: [
                function (e, t) {
                    return ct(t, 'Accept'), ct(t, 'Content-Type'), rt.isFormData(e) || rt.isArrayBuffer(e) || rt.isBuffer(e) || rt.isStream(e) || rt.isFile(e) || rt.isBlob(e) ? e : rt.isArrayBufferView(e) ? e.buffer : rt.isURLSearchParams(e) ? (gt(t, 'application/x-www-form-urlencoded;charset=utf-8'), e.toString()) : rt.isObject(e) ? (gt(t, 'application/json;charset=utf-8'), JSON.stringify(e)) : e;
                },
            ],
            transformResponse: [
                function (e) {
                    if ('string' == typeof e)
                        try {
                            e = JSON.parse(e);
                        } catch (e) {}
                    return e;
                },
            ],
            timeout: 0,
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function (e) {
                return e >= 200 && e < 300;
            },
        };
    (wt.headers = { common: { Accept: 'application/json, text/plain, */*' } }),
        rt.forEach(['delete', 'get', 'head'], function (e) {
            wt.headers[e] = {};
        }),
        rt.forEach(['post', 'put', 'patch'], function (e) {
            wt.headers[e] = rt.merge(vt);
        });
    var xt = wt;
    function yt(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
    }
    var At = function (e) {
            return (
                yt(e),
                (e.headers = e.headers || {}),
                (e.data = lt(e.data, e.headers, e.transformRequest)),
                (e.headers = rt.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers)),
                rt.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (t) {
                    delete e.headers[t];
                }),
                (e.adapter || xt.adapter)(e).then(
                    function (t) {
                        return yt(e), (t.data = lt(t.data, t.headers, e.transformResponse)), t;
                    },
                    function (t) {
                        return dt(t) || (yt(e), t && t.response && (t.response.data = lt(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
                    }
                )
            );
        },
        Ct = function (e, t) {
            t = t || {};
            var i = {},
                r = ['url', 'method', 'data'],
                n = ['headers', 'auth', 'proxy', 'params'],
                a = ['baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress', 'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'],
                o = ['validateStatus'];
            function s(e, t) {
                return rt.isPlainObject(e) && rt.isPlainObject(t) ? rt.merge(e, t) : rt.isPlainObject(t) ? rt.merge({}, t) : rt.isArray(t) ? t.slice() : t;
            }
            function l(r) {
                rt.isUndefined(t[r]) ? rt.isUndefined(e[r]) || (i[r] = s(void 0, e[r])) : (i[r] = s(e[r], t[r]));
            }
            rt.forEach(r, function (e) {
                rt.isUndefined(t[e]) || (i[e] = s(void 0, t[e]));
            }),
                rt.forEach(n, l),
                rt.forEach(a, function (r) {
                    rt.isUndefined(t[r]) ? rt.isUndefined(e[r]) || (i[r] = s(void 0, e[r])) : (i[r] = s(void 0, t[r]));
                }),
                rt.forEach(o, function (r) {
                    r in t ? (i[r] = s(e[r], t[r])) : r in e && (i[r] = s(void 0, e[r]));
                });
            var d = r.concat(n).concat(a).concat(o),
                c = Object.keys(e)
                    .concat(Object.keys(t))
                    .filter(function (e) {
                        return -1 === d.indexOf(e);
                    });
            return rt.forEach(c, l), i;
        };
    function Tt(e) {
        (this.defaults = e), (this.interceptors = { request: new st(), response: new st() });
    }
    (Tt.prototype.request = function (e) {
        'string' == typeof e ? ((e = arguments[1] || {}).url = arguments[0]) : (e = e || {}), (e = Ct(this.defaults, e)).method ? (e.method = e.method.toLowerCase()) : this.defaults.method ? (e.method = this.defaults.method.toLowerCase()) : (e.method = 'get');
        var t = [At, void 0],
            i = Promise.resolve(e);
        for (
            this.interceptors.request.forEach(function (e) {
                t.unshift(e.fulfilled, e.rejected);
            }),
                this.interceptors.response.forEach(function (e) {
                    t.push(e.fulfilled, e.rejected);
                });
            t.length;

        )
            i = i.then(t.shift(), t.shift());
        return i;
    }),
        (Tt.prototype.getUri = function (e) {
            return (e = Ct(this.defaults, e)), at(e.url, e.params, e.paramsSerializer).replace(/^\?/, '');
        }),
        rt.forEach(['delete', 'get', 'head', 'options'], function (e) {
            Tt.prototype[e] = function (t, i) {
                return this.request(Ct(i || {}, { method: e, url: t }));
            };
        }),
        rt.forEach(['post', 'put', 'patch'], function (e) {
            Tt.prototype[e] = function (t, i, r) {
                return this.request(Ct(r || {}, { method: e, url: t, data: i }));
            };
        });
    var St = Tt;
    function Et(e) {
        this.message = e;
    }
    (Et.prototype.toString = function () {
        return 'Cancel' + (this.message ? ': ' + this.message : '');
    }),
        (Et.prototype.__CANCEL__ = !0);
    var kt = Et;
    function Mt(e) {
        if ('function' != typeof e) throw new TypeError('executor must be a function.');
        var t;
        this.promise = new Promise(function (e) {
            t = e;
        });
        var i = this;
        e(function (e) {
            i.reason || ((i.reason = new kt(e)), t(i.reason));
        });
    }
    (Mt.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
    }),
        (Mt.source = function () {
            var e;
            return {
                token: new Mt(function (t) {
                    e = t;
                }),
                cancel: e,
            };
        });
    var Pt = Mt;
    function Lt(e) {
        var t = new St(e),
            i = Xe(St.prototype.request, t);
        return rt.extend(i, St.prototype, t), rt.extend(i, t), i;
    }
    var Bt = Lt(xt);
    (Bt.Axios = St),
        (Bt.create = function (e) {
            return Lt(Ct(Bt.defaults, e));
        }),
        (Bt.Cancel = kt),
        (Bt.CancelToken = Pt),
        (Bt.isCancel = dt),
        (Bt.all = function (e) {
            return Promise.all(e);
        }),
        (Bt.spread = function (e) {
            return function (t) {
                return e.apply(null, t);
            };
        });
    var Ot = Bt,
        zt = Bt;
    Ot.default = zt;
    var It = Ot;
    function Nt(e) {
        const t = e - 1;
        return t * t * t + 1;
    }
    function Dt(e, { delay: i = 0, duration: r = 400, easing: n = t }) {
        const a = +getComputedStyle(e).opacity;
        return { delay: i, duration: r, easing: n, css: (e) => 'opacity: ' + e * a };
    }
    function jt(e, { delay: t = 0, duration: i = 400, easing: r = Nt }) {
        const n = getComputedStyle(e),
            a = +n.opacity,
            o = parseFloat(n.height),
            s = parseFloat(n.paddingTop),
            l = parseFloat(n.paddingBottom),
            d = parseFloat(n.marginTop),
            c = parseFloat(n.marginBottom),
            u = parseFloat(n.borderTopWidth),
            p = parseFloat(n.borderBottomWidth);
        return { delay: t, duration: i, easing: r, css: (e) => `overflow: hidden;opacity: ${Math.min(20 * e, 1) * a};height: ${e * o}px;padding-top: ${e * s}px;padding-bottom: ${e * l}px;margin-top: ${e * d}px;margin-bottom: ${e * c}px;border-top-width: ${e * u}px;border-bottom-width: ${e * p}px;` };
    }
    function Gt(e, t, i) {
        const r = e.slice();
        return (r[43] = t[i]), r;
    }
    function $t(e, t, i) {
        const r = e.slice();
        return (r[15] = t[i]), r;
    }
    function Ft(e, t, i) {
        const r = e.slice();
        return (r[48] = t[i]), r;
    }
    function Ht(t) {
        let i,
            r,
            n,
            a = t[51].message + '';
        return {
            c() {
                (i = v('div')), (r = v('div')), (n = b(a)), y(r, 'class', 'd-flex align-items-center justify-content-center h-100\n          text-danger text-uppercase'), y(i, 'class', 'card-body');
            },
            m(e, t) {
                f(e, i, t), p(i, r), p(r, n);
            },
            p(e, t) {
                2 & t[0] &&
                    a !== (a = e[51].message + '') &&
                    (function (e, t) {
                        (t = '' + t), e.wholeText !== t && (e.data = t);
                    })(n, a);
            },
            i: e,
            o: e,
            d(e) {
                e && h(i);
            },
        };
    }
    function Rt(t) {
        let i,
            r,
            a,
            o,
            s,
            l,
            d,
            c,
            u,
            g,
            b,
            C,
            T,
            S,
            E,
            k,
            M,
            P,
            L,
            B,
            O,
            z = t[3],
            I = [];
        for (let e = 0; e < z.length; e += 1) I[e] = Vt(Ft(t, z, e));
        let N = null;
        z.length || (N = Yt());
        let D = t[4] && _t(t),
            j = t[8],
            $ = [];
        for (let e = 0; e < j.length; e += 1) $[e] = Kt(Gt(t, j, e));
        let F = null;
        j.length || (F = Xt());
        let H = t[5] && t[5] < 100 && Jt(t);
        return {
            c() {
                (i = v('div')), (r = v('div')), (a = v('canvas')), (o = w()), (s = v('div'));
                for (let e = 0; e < I.length; e += 1) I[e].c();
                N && N.c(), (l = w()), D && D.c(), (c = w()), (u = v('div')), (g = v('div')), (b = v('div'));
                for (let e = 0; e < $.length; e += 1) $[e].c();
                F && F.c(),
                    (C = w()),
                    (T = v('div')),
                    (T.innerHTML = '<svg width="1.5rem" height="1.5rem" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1\n                  1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"></path></svg>'),
                    (S = w()),
                    (E = v('div')),
                    (E.innerHTML = '<svg width="1.5rem" height="1.5rem" viewBox="0 0 16 16" class="bi bi-chevron-compact-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3\n                  6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1\n                  .223-.671z"></path></svg>'),
                    (k = w()),
                    (M = v('button')),
                    (M.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41\n                19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>'),
                    (L = w()),
                    H && H.c(),
                    y(a, 'id', 'canvas'),
                    y(s, 'class', 'scene d-flex align-items-center justify-content-center w-100\n            h-100'),
                    y(r, 'class', 'd-flex w-100 h-100 align-items-center justify-content-center\n          position-relative'),
                    A(r, 'overflow-x', 'auto'),
                    y(b, 'class', 'swiper-wrapper'),
                    y(T, 'class', 'swiper-prev-btn btn btn-sm btn-light p-1 border rounded-0\n              shadow-sm'),
                    y(E, 'class', 'swiper-next-btn btn btn-sm btn-light p-1 border rounded-0\n              shadow-sm'),
                    y(g, 'class', 'swiper-container h-100'),
                    y(M, 'type', 'button'),
                    y(M, 'class', 'btn btn-sm btn-dark p-1 rounded-0 btn-visible shadow-sm'),
                    y(u, 'class', 'card-footer carousel-footer bg-dark p-1 rounded-0\n          position-relative'),
                    A(u, 'margin-bottom', t[7] ? 0 : '-100%'),
                    A(u, 'opacity', t[16]),
                    A(u, 'transition', 'all\n          0.5s ease-in-out'),
                    A(u, 'height', '25%'),
                    y(i, 'id', 'wrapper'),
                    y(i, 'class', 'card border-0 rounded-0 overflow-hidden h-100 w-100');
            },
            m(e, n) {
                f(e, i, n), p(i, r), p(r, a), t[20](a), p(r, o), p(r, s);
                for (let e = 0; e < I.length; e += 1) I[e].m(s, null);
                N && N.m(s, null), p(r, l), D && D.m(r, null), p(i, c), p(i, u), p(u, g), p(g, b);
                for (let e = 0; e < $.length; e += 1) $[e].m(b, null);
                F && F.m(b, null), p(g, C), p(g, T), t[25](T), p(g, S), p(g, E), t[26](E), t[27](g), p(u, k), p(u, M), t[29](u), p(i, L), H && H.m(i, null), B || ((O = [x(M, 'click', t[28]), x(u, 'mouseout', ii), x(u, 'mouseover', ri)]), (B = !0));
            },
            p(e, t) {
                if (25 & t[0]) {
                    let i;
                    for (z = e[3], i = 0; i < z.length; i += 1) {
                        const r = Ft(e, z, i);
                        I[i] ? I[i].p(r, t) : ((I[i] = Vt(r)), I[i].c(), I[i].m(s, null));
                    }
                    for (; i < I.length; i += 1) I[i].d(1);
                    (I.length = z.length), z.length ? N && (N.d(1), (N = null)) : N || ((N = Yt()), N.c(), N.m(s, null));
                }
                if ((e[4] ? (D ? D.p(e, t) : ((D = _t(e)), D.c(), D.m(r, null))) : D && (D.d(1), (D = null)), 262401 & t[0])) {
                    let i;
                    for (j = e[8], i = 0; i < j.length; i += 1) {
                        const r = Gt(e, j, i);
                        $[i] ? ($[i].p(r, t), W($[i], 1)) : (($[i] = Kt(r)), $[i].c(), W($[i], 1), $[i].m(b, null));
                    }
                    for (; i < $.length; i += 1) $[i].d(1);
                    ($.length = j.length), j.length ? F && (F.d(1), (F = null)) : F || ((F = Xt()), F.c(), F.m(b, null));
                }
                128 & t[0] && A(u, 'margin-bottom', e[7] ? 0 : '-100%'), e[5] && e[5] < 100 ? (H ? (H.p(e, t), 32 & t[0] && W(H, 1)) : ((H = Jt(e)), H.c(), W(H, 1), H.m(i, null))) : H && (H.d(1), (H = null));
            },
            i(e) {
                d ||
                    G(() => {
                        (d = X(r, Dt, { delay: 250, duration: 250 })), d.start();
                    });
                for (let e = 0; e < j.length; e += 1) W($[e]);
                P ||
                    G(() => {
                        (P = X(u, jt, {})), P.start();
                    }),
                    W(H);
            },
            o: e,
            d(e) {
                e && h(i), t[20](null), m(I, e), N && N.d(), D && D.d(), m($, e), F && F.d(), t[25](null), t[26](null), t[27](null), t[29](null), H && H.d(), (B = !1), n(O);
            },
        };
    }
    function Yt(e) {
        let t;
        return {
            c() {
                (t = v('div')), (t.innerHTML = '<div class="d-flex align-items-center justify-content-center h-100"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div> \n              '), y(t, 'class', 'card-body');
            },
            m(e, i) {
                f(e, t, i);
            },
            d(e) {
                e && h(t);
            },
        };
    }
    function Vt(e) {
        let t, i;
        return {
            c() {
                (t = v('img')), t.src !== (i = e[0] + e[48].image) && y(t, 'src', i), y(t, 'alt', ''), y(t, 'class', 'scene-img'), A(t, 'opacity', e[4] ? 1 : 0);
            },
            m(e, i) {
                f(e, t, i);
            },
            p(e, r) {
                9 & r[0] && t.src !== (i = e[0] + e[48].image) && y(t, 'src', i), 16 & r[0] && A(t, 'opacity', e[4] ? 1 : 0);
            },
            d(e) {
                e && h(t);
            },
        };
    }
    function _t(e) {
        let t;
        function i(e, t) {
            return e[42].hotspots && e[42].hotspots.length ? Wt : qt;
        }
        let r = i(e),
            n = r(e);
        return {
            c() {
                (t = v('div')), n.c(), y(t, 'class', 'hotspots');
            },
            m(e, i) {
                f(e, t, i), n.m(t, null);
            },
            p(e, a) {
                r === (r = i(e)) && n ? n.p(e, a) : (n.d(1), (n = r(e)), n && (n.c(), n.m(t, null)));
            },
            d(e) {
                e && h(t), n.d();
            },
        };
    }
    function qt(t) {
        let i;
        return {
            c() {
                (i = v('div')), (i.innerHTML = '<div class="d-flex align-items-center justify-content-center\n                    h-100 text-danger text-uppercase">layers not found!</div>'), y(i, 'class', 'card-body');
            },
            m(e, t) {
                f(e, i, t);
            },
            p: e,
            d(e) {
                e && h(i);
            },
        };
    }
    function Wt(e) {
        let t,
            i = e[42].hotspots,
            r = [];
        for (let t = 0; t < i.length; t += 1) r[t] = Ut($t(e, i, t));
        return {
            c() {
                for (let e = 0; e < r.length; e += 1) r[e].c();
                t = b('');
            },
            m(e, i) {
                for (let t = 0; t < r.length; t += 1) r[t].m(e, i);
                f(e, t, i);
            },
            p(e, n) {
                if (137730 & n[0]) {
                    let a;
                    for (i = e[42].hotspots, a = 0; a < i.length; a += 1) {
                        const o = $t(e, i, a);
                        r[a] ? r[a].p(o, n) : ((r[a] = Ut(o)), r[a].c(), r[a].m(t.parentNode, t));
                    }
                    for (; a < r.length; a += 1) r[a].d(1);
                    r.length = i.length;
                }
            },
            d(e) {
                m(r, e), e && h(t);
            },
        };
    }
    function Ut(e) {
        let t, i, r, a, o, s, l;
        function d(...t) {
            return e[21](e[15], ...t);
        }
        function c(...t) {
            return e[22](e[15], ...t);
        }
        function u(...t) {
            return e[23](e[15], ...t);
        }
        return {
            c() {
                (t = v('button')), (i = g('svg')), (r = g('path')), (a = g('circle')), (o = w()), y(r, 'd', 'M24 24H0V0h24v24z'), y(r, 'fill', 'none'), y(a, 'cx', '12'), y(a, 'cy', '12'), y(a, 'r', '8'), y(i, 'xmlns', 'http://www.w3.org/2000/svg'), y(i, 'viewBox', '0 0 24 24'), y(i, 'width', '20'), y(i, 'height', '20'), y(i, 'fill', 'currentColor'), y(t, 'type', 'button'), y(t, 'class', 'hotspot btn btn-sm btn-info btn-circle p-1 border-0 '), A(t, 'top', e[15].y / e[12] + 'px'), A(t, 'left', e[15].x / e[11] + 'px'), A(t, 'opacity', e[9][e[15].id] || 1), A(t, 'transition', 'opacity\n                    0.25s ease-in-out'), A(t, 'background-color', '#1f4c79');
            },
            m(e, n) {
                f(e, t, n), p(t, i), p(i, r), p(i, a), p(t, o), s || ((l = [x(t, 'mouseover', d), x(t, 'mouseleave', c), x(t, 'click', u)]), (s = !0));
            },
            p(i, r) {
                (e = i), 4098 & r[0] && A(t, 'top', e[15].y / e[12] + 'px'), 2050 & r[0] && A(t, 'left', e[15].x / e[11] + 'px'), 514 & r[0] && A(t, 'opacity', e[9][e[15].id] || 1);
            },
            d(e) {
                e && h(t), (s = !1), n(l);
            },
        };
    }
    function Xt(e) {
        let t;
        return {
            c() {
                (t = v('div')), (t.innerHTML = '<h5 class="mb-0 text-center text-light">Loading...</h5> \n                '), y(t, 'class', 'd-flex align-items-center justify-content-center w-100\n                  h-100');
            },
            m(e, i) {
                f(e, t, i);
            },
            d(e) {
                e && h(t);
            },
        };
    }
    function Qt(e) {
        let t, i;
        return {
            c() {
                (t = v('img')), t.src !== (i = e[0] + e[43].image) && y(t, 'src', i), y(t, 'alt', ''), y(t, 'loading', 'lazy'), y(t, 'class', 'card-img-top bg-light rounded-0'), A(t, 'object-fit', 'contain'), A(t, 'max-width', '100%'), A(t, 'max-height', '100%');
            },
            m(e, i) {
                f(e, t, i);
            },
            p(e, r) {
                257 & r[0] && t.src !== (i = e[0] + e[43].image) && y(t, 'src', i);
            },
            d(e) {
                e && h(t);
            },
        };
    }
    function Zt(e) {
        let t, i, r, n;
        return {
            c() {
                (t = v('div')), (i = v('a')), (r = b('zum Produkt')), y(i, 'href', (n = e[43].item.link)), y(i, 'target', '_blank'), y(i, 'class', 'btn btn-sm btn-dark btn-block rounded-0 '), A(i, 'background-color', '#1f4c79'), y(t, 'class', 'card-footer border-0 w-100 p-0');
            },
            m(e, n) {
                f(e, t, n), p(t, i), p(i, r);
            },
            p(e, t) {
                256 & t[0] && n !== (n = e[43].item.link) && y(i, 'href', n);
            },
            d(e) {
                e && h(t);
            },
        };
    }
    function Kt(t) {
        let i,
            r,
            n,
            a,
            o,
            s,
            l,
            d,
            c = !t[43].color && Qt(t),
            u = t[43].item.link && Zt(t);
        function m(...e) {
            return t[24](t[43], ...e);
        }
        return {
            c() {
                (i = v('div')), (r = v('div')), c && c.c(), (n = w()), u && u.c(), (a = w()), y(r, 'class', 'card-body p-0 border-0 rounded-0 w-100 h-100'), A(r, 'background-color', t[43].color ? t[43].color : 'white'), y(i, 'class', 'swiper-slide card rounded-0 border-0 d-flex h-100\n                  align-items-center justify-content-center'), y(i, 'variation', (o = JSON.stringify(t[43]))), A(i, 'cursor', 'pointer');
            },
            m(e, t) {
                f(e, i, t), p(i, r), c && c.m(r, null), p(i, n), u && u.m(i, null), p(i, a), l || ((d = x(i, 'click', m)), (l = !0));
            },
            p(e, n) {
                (t = e)[43].color ? c && (c.d(1), (c = null)) : c ? c.p(t, n) : ((c = Qt(t)), c.c(), c.m(r, null)), 256 & n[0] && A(r, 'background-color', t[43].color ? t[43].color : 'white'), t[43].item.link ? (u ? u.p(t, n) : ((u = Zt(t)), u.c(), u.m(i, a))) : u && (u.d(1), (u = null)), 256 & n[0] && o !== (o = JSON.stringify(t[43])) && y(i, 'variation', o);
            },
            i(e) {
                s ||
                    G(() => {
                        (s = X(i, Dt, {})), s.start();
                    });
            },
            o: e,
            d(e) {
                e && h(i), c && c.d(), u && u.d(), (l = !1), d();
            },
        };
    }
    function Jt(t) {
        let i, r, n, a;
        return {
            c() {
                (i = v('div')), (r = v('div')), (n = v('div')), y(n, 'class', 'progress-bar progress-bar-striped progress-bar-animated'), y(n, 'role', 'progressbar'), y(n, 'aria-valuenow', t[5]), y(n, 'aria-valuemin', '0'), y(n, 'aria-valuemax', '100'), A(n, 'width', t[5] + '%'), C(n, 'bg-success', t[5] >= 100), y(r, 'class', 'progress rounded-0'), y(i, 'class', 'card-footer progress-footer');
            },
            m(e, t) {
                f(e, i, t), p(i, r), p(r, n);
            },
            p(e, t) {
                32 & t[0] && y(n, 'aria-valuenow', e[5]), 32 & t[0] && A(n, 'width', e[5] + '%'), 32 & t[0] && C(n, 'bg-success', e[5] >= 100);
            },
            i(e) {
                a ||
                    G(() => {
                        (a = X(i, jt, {})), a.start();
                    });
            },
            o: e,
            d(e) {
                e && h(i);
            },
        };
    }
    function ei(t) {
        let i;
        return {
            c() {
                (i = v('div')), (i.innerHTML = '<div class="d-flex align-items-center justify-content-center h-100"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>'), y(i, 'class', 'card-body');
            },
            m(e, t) {
                f(e, i, t);
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && h(i);
            },
        };
    }
    function ti(t) {
        let i,
            r,
            n,
            a = { ctx: t, current: null, token: null, pending: ei, then: Rt, catch: Ht, value: 42, error: 51 };
        return (
            Q((n = t[1]), a),
            {
                c() {
                    (i = v('main')), (r = v('div')), a.block.c(), (this.c = e), y(r, 'class', 'card rounded-0 border-0 bg-light h-100 '), y(i, 'class', 'position-relative w-100 h-100 height');
                },
                m(e, t) {
                    f(e, i, t), p(i, r), a.block.m(r, (a.anchor = null)), (a.mount = () => r), (a.anchor = null);
                },
                p(e, i) {
                    if (((t = e), (a.ctx = t), 2 & i[0] && n !== (n = t[1]) && Q(n, a)));
                    else {
                        const e = t.slice();
                        (e[42] = a.resolved), a.block.p(e, i);
                    }
                },
                i(e) {
                    W(a.block);
                },
                o: e,
                d(e) {
                    e && h(i), a.block.d(), (a.token = null), (a = null);
                },
            }
        );
    }
    const ii = () => {},
        ri = () => {};
    function ni(e, t, i) {
        let r,
            n,
            a,
            o,
            s,
            l,
            d,
            c,
            u,
            p,
            f,
            h,
            m,
            v,
            { url: g } = t,
            { file: b } = t,
            w = Promise.resolve([]),
            x = [],
            y = !1,
            A = [],
            C = {};
        var T;
        function S() {
            i(11, (f = r.width / r.clientWidth)), i(12, (h = r.height / r.clientHeight)), window.requestAnimationFrame(S);
        }
        async function E(e) {
            if (null == u || u != e) {
                i(7, (c = !0)), i(15, (u = e));
                const t = w.layers.findIndex((t) => parseInt(t.hotspot) === parseInt(e)),
                    r = w.layers[t];
                i(8, (A = []));
                for (let e = 0; e < r.variations.length; e++) i(8, (A = [...A, { ...r.variations[e], layer: r.id }]));
                await j(), d.update();
            } else i(7, (c = !c));
        }
        function k(e) {
            const t = e.variation,
                r = x.findIndex((e) => parseInt(e.layer) === parseInt(t.layer));
            i(3, (x[r] = { ...t }), x);
        }
        (T = async () => {
            setTimeout(async () => {
                i(0, (g = g.replace(/^\/|\/$/g, '') + '/')),
                    (async function () {
                        await j(),
                            setTimeout(() => {
                                Re.use([_e, Ue]),
                                    (d = new Re(p, { slidesPerView: 1, spaceBetween: 15, mousewheel: !0, keyboard: { enabled: !0 }, navigation: { nextEl: v, prevEl: m }, breakpoints: { 576: { slidesPerView: 1, spaceBetween: 15 }, 768: { slidesPerView: 2, spaceBetween: 15 }, 992: { slidesPerView: 3, spaceBetween: 15 }, 1200: { slidesPerView: 4, spaceBetween: 15 } } })),
                                    d.on('slideChange', function () {
                                        const e = d.slides[d.activeIndex];
                                        k({ variation: JSON.parse(e.getAttribute('variation')) });
                                    });
                            });
                    })(),
                    i(
                        1,
                        (w = await (async function () {
                            const e = await self.fetch(g + b);
                            if (e.ok) {
                                const o = await e.json();
                                o.layers = await o.layers.sort((e, t) => (e.order > t.order ? 1 : t.order > e.order ? -1 : 0));
                                const l = await ((a = { image: o.mockup.image }),
                                It.get(g + a.image, {
                                    responseType: 'blob',
                                    onDownloadProgress: (e) => {
                                        a.progress && i(5, (s = Math.round((100 * e.loaded) / e.total / a.total + (a.index / a.total) * 100)));
                                    },
                                })
                                    .then(
                                        (e) =>
                                            new Promise((t, i) => {
                                                var r = new FileReader();
                                                r.readAsDataURL(e.data),
                                                    (r.onload = () => {
                                                        t(r.result);
                                                    });
                                            })
                                    )
                                    .catch((e) => {
                                        console.error(e);
                                    }));
                                return (
                                    await ((t = l),
                                    new Promise((e, a) => {
                                        n = r.getContext('2d');
                                        const o = new Image();
                                        (o.src = t),
                                            o.addEventListener(
                                                'load',
                                                function () {
                                                    i(2, (r.width = o.width), r), i(2, (r.height = o.height), r), n.drawImage(o, 0, 0), e();
                                                },
                                                !1
                                            );
                                    })),
                                    o
                                );
                            }
                            throw new Error(data);
                            var t, a;
                        })())
                    ),
                    i(3, (x = w.layers.map((e) => ({ ...e.variations[0], layer: e.id })))),
                    await j(),
                    setTimeout(() => {
                        i(4, (y = !0)), (a = r.clientWidth), (o = r.clientHeight), i(11, (f = r.width / r.clientWidth)), i(12, (h = r.height / r.clientHeight)), window.requestAnimationFrame(S);
                    }, 1e3);
            });
        }),
            P().$$.on_mount.push(T);
        return (
            (e.$$set = (e) => {
                'url' in e && i(0, (g = e.url)), 'file' in e && i(19, (b = e.file));
            }),
            [
                g,
                w,
                r,
                x,
                y,
                s,
                l,
                c,
                A,
                C,
                p,
                f,
                h,
                m,
                v,
                u,
                1,
                E,
                k,
                b,
                function (e) {
                    B[e ? 'unshift' : 'push'](() => {
                        (r = e), i(2, r);
                    });
                },
                (e) => {
                    i(9, (C[e.id] = 1), C);
                },
                (e) => {
                    i(9, (C[e.id] = 0.5), C);
                },
                (e) => {
                    E(e.id);
                },
                (e) => {
                    k({ variation: e });
                },
                function (e) {
                    B[e ? 'unshift' : 'push'](() => {
                        (m = e), i(13, m);
                    });
                },
                function (e) {
                    B[e ? 'unshift' : 'push'](() => {
                        (v = e), i(14, v);
                    });
                },
                function (e) {
                    B[e ? 'unshift' : 'push'](() => {
                        (p = e), i(10, p);
                    });
                },
                () => {
                    i(7, (c = !1));
                },
                function (e) {
                    B[e ? 'unshift' : 'push'](() => {
                        (l = e), i(6, l);
                    });
                },
            ]
        );
    }
    customElements.define(
        'mockup-studio',
        class extends K {
            constructor(e) {
                super(),
                    (this.shadowRoot.innerHTML =
                        '<style>:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-family-monospace:SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace}*,*::before,*::after{box-sizing:border-box}main{display:block}h5{margin-top:0;margin-bottom:0.5rem}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([class]){color:inherit;text-decoration:none}a:not([href]):not([class]):hover{color:inherit;text-decoration:none}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button{overflow:visible}button{text-transform:none}button,[type="button"]{-webkit-appearance:button}button:not(:disabled),[type="button"]:not(:disabled){cursor:pointer}button::-moz-focus-inner,[type="button"]::-moz-focus-inner{padding:0;border-style:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}h5{margin-bottom:0.5rem;font-weight:500;line-height:1.2}h5{font-size:1.25rem}@media(min-width: 576px){}@media(min-width: 768px){}@media(min-width: 992px){}@media(min-width: 1200px){}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.66667%;max-width:16.66667%}@media(min-width: 576px){.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.66667%;max-width:16.66667%}}@media(min-width: 768px){.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.66667%;max-width:16.66667%}}@media(min-width: 992px){.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.66667%;max-width:16.66667%}}@media(min-width: 1200px){.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.66667%;max-width:16.66667%}}@media(max-width: 575.98px){}@media(max-width: 767.98px){}@media(max-width: 991.98px){}@media(max-width: 1199.98px){}@media(prefers-reduced-motion: reduce){}@media(min-width: 576px){}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;user-select:none;background-color:transparent;border:1px solid transparent;padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;border-radius:0.25rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}@media(prefers-reduced-motion: reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn:focus{outline:0;box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.25)}.btn:disabled{opacity:0.65}.btn:not(:disabled):not(.disabled){cursor:pointer}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info:focus{color:#fff;background-color:#138496;border-color:#117a8b;box-shadow:0 0 0 0.2rem rgba(58, 176, 195, 0.5)}.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled):active{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled):active:focus{box-shadow:0 0 0 0.2rem rgba(58, 176, 195, 0.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light:focus{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;box-shadow:0 0 0 0.2rem rgba(216, 217, 219, 0.5)}.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled):active{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled):active:focus{box-shadow:0 0 0 0.2rem rgba(216, 217, 219, 0.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark:focus{color:#fff;background-color:#23272b;border-color:#1d2124;box-shadow:0 0 0 0.2rem rgba(82, 88, 93, 0.5)}.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled):active{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled):active:focus{box-shadow:0 0 0 0.2rem rgba(82, 88, 93, 0.5)}.btn-sm{padding:0.25rem 0.5rem;font-size:0.875rem;line-height:1.5;border-radius:0.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:0.5rem}@media(prefers-reduced-motion: reduce){}@media(prefers-reduced-motion: reduce){}@media(min-width: 576px){}@media(min-width: 768px){}@media(min-width: 992px){}@media(min-width: 1200px){}.input-group-prepend .btn+.btn,.input-group-prepend .input-group-text+.btn,.input-group-append .btn+.btn,.input-group-append .input-group-text+.btn{margin-left:-1px}@media(prefers-reduced-motion: reduce){}@media(prefers-reduced-motion: reduce){}@media(prefers-reduced-motion: reduce){}@media(prefers-reduced-motion: reduce){}@media(prefers-reduced-motion: reduce){}@media(max-width: 575.98px){}@media(min-width: 576px){}@media(max-width: 767.98px){}@media(min-width: 768px){}@media(max-width: 991.98px){}@media(min-width: 992px){}@media(max-width: 1199.98px){}@media(min-width: 1200px){}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0, 0, 0, 0.125);border-radius:0.25rem}.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.card-footer{padding:0.75rem 1.25rem;background-color:rgba(0, 0, 0, 0.03);border-top:1px solid rgba(0, 0, 0, 0.125)}.card-footer:last-child{border-radius:0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)}.card-img-top{flex-shrink:0;width:100%}.card-img-top{border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px)}@media(min-width: 576px){}@media(min-width: 576px){.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}@media(min-width: 576px){}@media(prefers-reduced-motion: reduce){}@media(min-width: 576px){}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:flex;height:1rem;overflow:hidden;line-height:0;font-size:0.75rem;background-color:#e9ecef;border-radius:0.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width 0.6s ease}@media(prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem}.progress-bar-animated{animation:progress-bar-stripes 1s linear infinite}@media(prefers-reduced-motion: reduce){.progress-bar-animated{animation:none}}@media(min-width: 576px){}@media(min-width: 768px){}@media(min-width: 992px){}@media(min-width: 1200px){}@media(prefers-reduced-motion: reduce){}.modal-footer>*{margin:0.25rem}@media(min-width: 576px){}@media(min-width: 992px){}@media(min-width: 1200px){}@media(prefers-reduced-motion: reduce){}@media(prefers-reduced-motion: reduce){}@media(prefers-reduced-motion: reduce){}@media(prefers-reduced-motion: reduce){}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:0.25em solid currentColor;border-right-color:transparent;border-radius:50%;animation:spinner-border .75s linear infinite}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.bg-success{background-color:#28a745 !important}.bg-light{background-color:#f8f9fa !important}.bg-dark{background-color:#343a40 !important}.border{border:1px solid #dee2e6 !important}.border-0{border:0 !important}.rounded-0{border-radius:0 !important}.d-flex{display:flex !important}@media(min-width: 576px){}@media(min-width: 768px){}@media(min-width: 992px){}@media(min-width: 1200px){}@media print{}.justify-content-center{justify-content:center !important}.align-items-center{align-items:center !important}@media(min-width: 576px){}@media(min-width: 768px){}@media(min-width: 992px){}@media(min-width: 1200px){}@media(min-width: 576px){}@media(min-width: 768px){}@media(min-width: 992px){}@media(min-width: 1200px){}.overflow-hidden{overflow:hidden !important}.position-relative{position:relative !important}@supports (position: sticky){}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.shadow-sm{box-shadow:0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important}.w-100{width:100% !important}.h-100{height:100% !important}.mb-0{margin-bottom:0 !important}.p-0{padding:0 !important}.p-1{padding:0.25rem !important}@media(min-width: 576px){}@media(min-width: 768px){}@media(min-width: 992px){}@media(min-width: 1200px){}.text-center{text-align:center !important}@media(min-width: 576px){}@media(min-width: 768px){}@media(min-width: 992px){}@media(min-width: 1200px){}.text-uppercase{text-transform:uppercase !important}.text-danger{color:#dc3545 !important}.text-light{color:#f8f9fa !important}@media print{*,*::before,*::after{text-shadow:none !important;box-shadow:none !important}a:not(.btn){text-decoration:underline}img{page-break-inside:avoid}@page{size:a3}}@font-face{font-family:\'swiper-icons\';src:url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA") format("woff");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-wrapper{transform:translate3d(0px, 0, 0)}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}#wrapper{width:100%;height:100%;background-color:#404040;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABkCAMAAADqvX3PAAAAKlBMVEUAAADX19fX19fBwcHT09PX19fW1tbT09PW1tbV1dXOzs7Ozs7BwcHV1dX5uIg2AAAADnRSTlMAPQAKH0czAAApFAAAAHys1goAAAHwSURBVHja7ZfdcuMwCEb1GUIDcd//dZuk2n5rZzCKOzuzFzo3+XNOBAIHtQosxwi0XUw/jjh2qN1pVzV43FJwJIDLuq5tvaNmzxeEZI5wWP/p9v0gypgGYhGH8fL28yyM7ycOJkFlJW3tZDHhRdBjIO22JR6a1BGMgTAWopvr6BC1jSB1MDWyXYfvkpDlg4iiV83lITiuoXZL+U4/ltcNq2MhogaYBWMYjYU8HHfSRdTrCIOLYImemrfz8dMO6DlVGYyFMWz3tmuGY6GgO1ikXVM51JDXurBO0nyEcyPTnvOXvmyb0hzqfV64jUUYw47Re9CZe6EbeC+M39+TcfK/gTFZuxZgOSag7aMASwGkrQW1Y2lLwXRMx3RMx3T8Pw67FpSOcA5RCccOcTMNL05aRw7Fn2kizA7+1VNH6ENAOBgOxiIK888dHPVqh+Q/yeknzQfHkhx+nqyjT0QFzDUd2Skp53lp7PdFnEkYIhzQv/KRzJUV0QdDSON5+S14CEW0vqSTiAPWWDknCLsY0BZxnNP0L/Z9YQEO8yznXZ2yNwfgTu7rNFgj9aamvS9eZljMTNOeoybSGNwQkvZ+3XrCU07t4HmWSBjDLBzEwdSzhMYcRPRZNYmgdjA1FyahcKQIqpKZs8N0TMd0TMd0/BvHF8n9f8tHo7HcAAAAAElFTkSuQmCC");box-shadow:0 0 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px 1px rgba(0, 0, 0, 0.25);user-select:none}#canvas{position:absolute;top:0;left:0;min-width:100%;width:auto;height:100%;max-height:100%;display:block;margin:0 auto;transition:opacity 0.25s ease-out;pointer-events:none}.hotspots{position:absolute;top:0;left:0;width:auto;height:100%;max-height:100%;display:block;margin:0 auto;transition:opacity 0.25s ease-out;pointer-events:none}.hotspot{position:absolute;z-index:10;pointer-events:all}.btn-circle{display:flex;justify-content:center;align-items:center;border-radius:50%}svg{pointer-events:none}.carousel-footer{border:none;background-color:transparent}.progress-footer{position:absolute;z-index:30;bottom:0;left:0;right:0;width:100%}.carousel-footer{transition:margin 0.25s ease-in-out}.swiper-container{width:100%;height:100%}.swiper-slide{min-height:100px}.scene-img{position:absolute;top:0;left:0;min-width:100%;height:100%;width:auto;pointer-events:none}.btn-visible{position:absolute;z-index:40;top:0px;right:0px}.swiper-prev-btn,.swiper-next-btn{position:absolute;z-index:50;top:50%;transform:translateY(-50%);display:flex;justify-content:center;align-items:center}.swiper-prev-btn{left:-2px}.swiper-next-btn{right:-2px}.height{margin:0 auto;max-width:1140px;min-height:450px;height:95vh !important}@media(min-width: 576px){.height{height:95vh !important}}@media(min-width: 768px){.height{height:95vh !important}}@media(min-width: 992px){.height{height:75vh !important}}@media(min-width: 1200px){.height{height:75vh !important}}</style>'),
                    Z(this, { target: this.shadowRoot }, ni, ti, o, { url: 0, file: 19 }, [-1, -1]),
                    e && (e.target && f(e.target, this, e.anchor), e.props && (this.$set(e.props), H()));
            }
            static get observedAttributes() {
                return ['url', 'file'];
            }
            get url() {
                return this.$$.ctx[0];
            }
            set url(e) {
                this.$set({ url: e }), H();
            }
            get file() {
                return this.$$.ctx[19];
            }
            set file(e) {
                this.$set({ file: e }), H();
            }
        }
    );
})();
