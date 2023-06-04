/*!jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license*/ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = [],
        i = Object.getPrototypeOf,
        s = n.slice,
        o = n.flat ? function(e) {
            return n.flat.call(e)
        } : function(e) {
            return n.concat.apply([], e)
        },
        r = n.push,
        a = n.indexOf,
        l = {},
        c = l.toString,
        d = l.hasOwnProperty,
        u = d.toString,
        p = u.call(Object),
        h = {},
        f = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        m = function(e) {
            return null != e && e === e.window
        },
        g = e.document,
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var i, s, o = (n = n || g).createElement("script");
        if (o.text = e, t)
            for (i in v)(s = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, s);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var w = "3.6.0",
        x = function(e, t) {
            return new x.fn.init(e, t)
        };

    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !f(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: w,
        constructor: x,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return x.each(this, e)
        },
        map: function(e) {
            return this.pushStack(x.map(this, (function(t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(x.grep(this, (function(e, t) {
                return (t + 1) % 2
            })))
        },
        odd: function() {
            return this.pushStack(x.grep(this, (function(e, t) {
                return t % 2
            })))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: r,
        sort: n.sort,
        splice: n.splice
    }, x.extend = x.fn.extend = function() {
        var e, t, n, i, s, o, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || f(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = e[t], "__proto__" !== t && r !== i && (c && i && (x.isPlainObject(i) || (s = Array.isArray(i))) ? (n = r[t], o = s && !Array.isArray(n) ? [] : s || x.isPlainObject(n) ? n : {}, s = !1, r[t] = x.extend(c, o, i)) : void 0 !== i && (r[t] = i));
        return r
    }, x.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e) || (t = i(e)) && ("function" != typeof(n = d.call(t, "constructor") && t.constructor) || u.call(n) !== p))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            y(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (C(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : r.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : a.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, s = e.length; i < n; i++) e[s++] = t[i];
            return e.length = s, e
        },
        grep: function(e, t, n) {
            for (var i = [], s = 0, o = e.length, r = !n; s < o; s++) !t(e[s], s) !== r && i.push(e[s]);
            return i
        },
        map: function(e, t, n) {
            var i, s, r = 0,
                a = [];
            if (C(e))
                for (i = e.length; r < i; r++) null != (s = t(e[r], r, n)) && a.push(s);
            else
                for (r in e) null != (s = t(e[r], r, n)) && a.push(s);
            return o(a)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }));
    var $ = function(e) {
        var t, n, i, s, o, r, a, l, c, d, u, p, h, f, m, g, v, y, b, w = "sizzle" + 1 * new Date,
            x = e.document,
            C = 0,
            $ = 0,
            T = le(),
            E = le(),
            S = le(),
            _ = le(),
            M = function(e, t) {
                return e === t && (u = !0), 0
            },
            k = {}.hasOwnProperty,
            P = [],
            A = P.pop,
            z = P.push,
            D = P.push,
            L = P.slice,
            I = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            j = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            H = "\\[" + j + "*(" + q + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + j + "*\\]",
            N = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            R = new RegExp(j + "+", "g"),
            B = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
            F = new RegExp("^" + j + "*," + j + "*"),
            W = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            Y = new RegExp(j + "|>"),
            G = new RegExp(N),
            X = new RegExp("^" + q + "$"),
            V = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
            },
            U = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            se = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                p()
            },
            re = we((function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            D.apply(P = L.call(x.childNodes), x.childNodes), P[x.childNodes.length].nodeType
        } catch (t) {
            D = {
                apply: P.length ? function(e, t) {
                    z.apply(e, L.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, i, s) {
            var o, a, c, d, u, f, v, y = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;
            if (!s && (p(t), t = t || h, m)) {
                if (11 !== x && (u = J.exec(e)))
                    if (o = u[1]) {
                        if (9 === x) {
                            if (!(c = t.getElementById(o))) return i;
                            if (c.id === o) return i.push(c), i
                        } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i
                    } else {
                        if (u[2]) return D.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = u[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(i, t.getElementsByClassName(o)), i
                    }
                if (n.qsa && !_[e + " "] && (!g || !g.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === x && (Y.test(e) || W.test(e))) {
                        for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((d = t.getAttribute("id")) ? d = d.replace(ie, se) : t.setAttribute("id", d = w)), a = (f = r(e)).length; a--;) f[a] = (d ? "#" + d : ":scope") + " " + be(f[a]);
                        v = f.join(",")
                    }
                    try {
                        return D.apply(i, y.querySelectorAll(v)), i
                    } catch (t) {
                        _(e, !0)
                    } finally {
                        d === w && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(B, "$1"), t, i, s)
        }

        function le() {
            var e = [];
            return function t(n, s) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = s
            }
        }

        function ce(e) {
            return e[w] = !0, e
        }

        function de(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), s = n.length; s--;) i.attrHandle[n[s]] = t
        }

        function pe(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function he(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function fe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function me(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ge(e) {
            return ce((function(t) {
                return t = +t, ce((function(n, i) {
                    for (var s, o = e([], n.length, t), r = o.length; r--;) n[s = o[r]] && (n[s] = !(i[s] = n[s]))
                }))
            }))
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = ae.support = {}, o = ae.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !U.test(t || n && n.nodeName || "HTML")
            }, p = ae.setDocument = function(e) {
                var t, s, r = e ? e.ownerDocument || e : x;
                return r != h && 9 === r.nodeType && r.documentElement && (f = (h = r).documentElement, m = !o(h), x != h && (s = h.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", oe, !1) : s.attachEvent && s.attachEvent("onunload", oe)), n.scope = de((function(e) {
                    return f.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                })), n.attributes = de((function(e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = de((function(e) {
                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = K.test(h.getElementsByClassName), n.getById = de((function(e) {
                    return f.appendChild(e).id = w, !h.getElementsByName || !h.getElementsByName(w).length
                })), n.getById ? (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n, i, s, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (s = t.getElementsByName(e), i = 0; o = s[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        s = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[s++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, v = [], g = [], (n.qsa = K.test(h.querySelectorAll)) && (de((function(e) {
                    var t;
                    f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + j + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                })), de((function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + j + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                }))), (n.matchesSelector = K.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && de((function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", N)
                })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(f.compareDocumentPosition), b = t || K.test(f.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, M = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == h || e.ownerDocument == x && b(x, e) ? -1 : t == h || t.ownerDocument == x && b(x, t) ? 1 : d ? I(d, e) - I(d, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n, i = 0,
                        s = e.parentNode,
                        o = t.parentNode,
                        r = [e],
                        a = [t];
                    if (!s || !o) return e == h ? -1 : t == h ? 1 : s ? -1 : o ? 1 : d ? I(d, e) - I(d, t) : 0;
                    if (s === o) return pe(e, t);
                    for (n = e; n = n.parentNode;) r.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; r[i] === a[i];) i++;
                    return i ? pe(r[i], a[i]) : r[i] == x ? -1 : a[i] == x ? 1 : 0
                }), h
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if (p(e), n.matchesSelector && m && !_[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    _(t, !0)
                }
                return 0 < ae(t, h, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) != h && p(e), b(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) != h && p(e);
                var s = i.attrHandle[t.toLowerCase()],
                    o = s && k.call(i.attrHandle, t.toLowerCase()) ? s(e, t, !m) : void 0;
                return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(ie, se)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, i = [],
                    s = 0,
                    o = 0;
                if (u = !n.detectDuplicates, d = !n.sortStable && e.slice(0), e.sort(M), u) {
                    for (; t = e[o++];) t === e[o] && (s = i.push(o));
                    for (; s--;) e.splice(i[s], 1)
                }
                return d = null, e
            }, s = ae.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += s(t);
                return n
            }, (i = ae.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = r(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && T(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var s = ae.attr(i, e);
                            return null == s ? "!=" === t : !t || (s += "", "=" === t ? s === n : "!=" === t ? s !== n : "^=" === t ? n && 0 === s.indexOf(n) : "*=" === t ? n && -1 < s.indexOf(n) : "$=" === t ? n && s.slice(-n.length) === n : "~=" === t ? -1 < (" " + s.replace(R, " ") + " ").indexOf(n) : "|=" === t && (s === n || s.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, s) {
                        var o = "nth" !== e.slice(0, 3),
                            r = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === s ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, d, u, p, h, f, m = o !== r ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (p = t; p = p[m];)
                                            if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? g.firstChild : g.lastChild], r && y) {
                                    for (b = (h = (c = (d = (u = (p = g)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], p = h && g.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop();)
                                        if (1 === p.nodeType && ++b && p === t) {
                                            d[e] = [C, h, b];
                                            break
                                        }
                                } else if (y && (b = h = (c = (d = (u = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === C && c[1]), !1 === b)
                                    for (;
                                        (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((d = (u = p[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [C, b]), p !== t)););
                                return (b -= s) === i || b % i == 0 && 0 <= b / i
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, s = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return s[w] ? s(t) : 1 < s.length ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                            for (var i, o = s(e, t), r = o.length; r--;) e[i = I(e, o[r])] = !(n[i] = o[r])
                        })) : function(e) {
                            return s(e, 0, n)
                        }) : s
                    }
                },
                pseudos: {
                    not: ce((function(e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(B, "$1"));
                        return i[w] ? ce((function(e, t, n, s) {
                            for (var o, r = i(e, null, s, []), a = e.length; a--;)(o = r[a]) && (e[a] = !(t[a] = o))
                        })) : function(e, s, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    })),
                    has: ce((function(e) {
                        return function(t) {
                            return 0 < ae(e, t).length
                        }
                    })),
                    contains: ce((function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return -1 < (t.textContent || s(t)).indexOf(e)
                            }
                    })),
                    lang: ce((function(e) {
                        return X.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === f
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: me(!1),
                    disabled: me(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Z.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge((function() {
                        return [0]
                    })),
                    last: ge((function(e, t) {
                        return [t - 1]
                    })),
                    eq: ge((function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    })),
                    even: ge((function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })),
                    odd: ge((function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })),
                    lt: ge((function(e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    })),
                    gt: ge((function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    }))
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = he(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = fe(t);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function we(e, t, n) {
            var i = t.dir,
                s = t.next,
                o = s || i,
                r = n && "parentNode" === o,
                a = $++;
            return t.first ? function(t, n, s) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, s);
                return !1
            } : function(t, n, l) {
                var c, d, u, p = [C, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r)
                            if (d = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), s && s === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = d[o]) && c[0] === C && c[1] === a) return p[2] = c[2];
                                if ((d[o] = p)[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function xe(e) {
            return 1 < e.length ? function(t, n, i) {
                for (var s = e.length; s--;)
                    if (!e[s](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function Ce(e, t, n, i, s) {
            for (var o, r = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, s) || (r.push(o), c && t.push(a)));
            return r
        }

        function $e(e, t, n, i, s, o) {
            return i && !i[w] && (i = $e(i)), s && !s[w] && (s = $e(s, o)), ce((function(o, r, a, l) {
                var c, d, u, p = [],
                    h = [],
                    f = r.length,
                    m = o || function(e, t, n) {
                        for (var i = 0, s = t.length; i < s; i++) ae(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    g = !e || !o && t ? m : Ce(m, p, e, a, l),
                    v = n ? s || (o ? e : f || i) ? [] : r : g;
                if (n && n(g, v, a, l), i)
                    for (c = Ce(v, h), i(c, [], a, l), d = c.length; d--;)(u = c[d]) && (v[h[d]] = !(g[h[d]] = u));
                if (o) {
                    if (s || e) {
                        if (s) {
                            for (c = [], d = v.length; d--;)(u = v[d]) && c.push(g[d] = u);
                            s(null, v = [], c, l)
                        }
                        for (d = v.length; d--;)(u = v[d]) && -1 < (c = s ? I(o, u) : p[d]) && (o[c] = !(r[c] = u))
                    }
                } else v = Ce(v === r ? v.splice(f, v.length) : v), s ? s(null, r, v, l) : D.apply(r, v)
            }))
        }

        function Te(e) {
            for (var t, n, s, o = e.length, r = i.relative[e[0].type], a = r || i.relative[" "], l = r ? 1 : 0, d = we((function(e) {
                    return e === t
                }), a, !0), u = we((function(e) {
                    return -1 < I(t, e)
                }), a, !0), p = [function(e, n, i) {
                    var s = !r && (i || n !== c) || ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                    return t = null, s
                }]; l < o; l++)
                if (n = i.relative[e[l].type]) p = [we(xe(p), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (s = ++l; s < o && !i.relative[e[s].type]; s++);
                        return $e(1 < l && xe(p), 1 < l && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, l < s && Te(e.slice(l, s)), s < o && Te(e = e.slice(s)), s < o && be(e))
                    }
                    p.push(n)
                }
            return xe(p)
        }
        return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, r = ae.tokenize = function(e, t) {
            var n, s, o, r, a, l, c, d = E[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (a = e, l = [], c = i.preFilter; a;) {
                for (r in n && !(s = F.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = W.exec(a)) && (n = s.shift(), o.push({
                        value: n,
                        type: s[0].replace(B, " ")
                    }), a = a.slice(n.length)), i.filter) !(s = V[r].exec(a)) || c[r] && !(s = c[r](s)) || (n = s.shift(), o.push({
                    value: n,
                    type: r,
                    matches: s
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ae.error(e) : E(e, l).slice(0)
        }, a = ae.compile = function(e, t) {
            var n, s, o, a, l, d, u = [],
                f = [],
                g = S[e + " "];
            if (!g) {
                for (t || (t = r(e)), n = t.length; n--;)(g = Te(t[n]))[w] ? u.push(g) : f.push(g);
                (g = S(e, (s = f, a = 0 < (o = u).length, l = 0 < s.length, d = function(e, t, n, r, d) {
                    var u, f, g, v = 0,
                        y = "0",
                        b = e && [],
                        w = [],
                        x = c,
                        $ = e || l && i.find.TAG("*", d),
                        T = C += null == x ? 1 : Math.random() || .1,
                        E = $.length;
                    for (d && (c = t == h || t || d); y !== E && null != (u = $[y]); y++) {
                        if (l && u) {
                            for (f = 0, t || u.ownerDocument == h || (p(u), n = !m); g = s[f++];)
                                if (g(u, t || h, n)) {
                                    r.push(u);
                                    break
                                }
                            d && (C = T)
                        }
                        a && ((u = !g && u) && v--, e && b.push(u))
                    }
                    if (v += y, a && y !== v) {
                        for (f = 0; g = o[f++];) g(b, w, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--;) b[y] || w[y] || (w[y] = A.call(r));
                            w = Ce(w)
                        }
                        D.apply(r, w), d && !e && 0 < w.length && 1 < v + o.length && ae.uniqueSort(r)
                    }
                    return d && (C = T, c = x), b
                }, a ? ce(d) : d))).selector = e
            }
            return g
        }, l = ae.select = function(e, t, n, s) {
            var o, l, c, d, u, p = "function" == typeof e && e,
                h = !s && r(e = p.selector || e);
            if (n = n || [], 1 === h.length) {
                if (2 < (l = h[0] = h[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = V.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[d = c.type]);)
                    if ((u = i.find[d]) && (s = u(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = s.length && be(l))) return D.apply(n, s), n;
                        break
                    }
            }
            return (p || a(e, h))(s, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = w.split("").sort(M).join("") === w, n.detectDuplicates = !!u, p(), n.sortDetached = de((function(e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        })), de((function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || ue("type|href|height|width", (function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), n.attributes && de((function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || ue("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), de((function(e) {
            return null == e.getAttribute("disabled")
        })) || ue(O, (function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        })), ae
    }(e);
    x.find = $, x.expr = $.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = $.uniqueSort, x.text = $.getText, x.isXMLDoc = $.isXML, x.contains = $.contains, x.escapeSelector = $.escape;
    var T = function(e, t, n) {
            for (var i = [], s = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (s && x(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        E = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        S = x.expr.match.needsContext;

    function _(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function k(e, t, n) {
        return f(t) ? x.grep(e, (function(e, i) {
            return !!t.call(e, i, e) !== n
        })) : t.nodeType ? x.grep(e, (function(e) {
            return e === t !== n
        })) : "string" != typeof t ? x.grep(e, (function(e) {
            return -1 < a.call(t, e) !== n
        })) : x.filter(t, e, n)
    }
    x.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, (function(e) {
            return 1 === e.nodeType
        })))
    }, x.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                s = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter((function() {
                for (t = 0; t < i; t++)
                    if (x.contains(s[t], this)) return !0
            })));
            for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, s[t], n);
            return 1 < i ? x.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(k(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(k(this, e || [], !0))
        },
        is: function(e) {
            return !!k(this, "string" == typeof e && S.test(e) ? x(e) : e || [], !1).length
        }
    });
    var P, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function(e, t, n) {
        var i, s;
        if (!e) return this;
        if (n = n || P, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : A.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), M.test(i[1]) && x.isPlainObject(t))
                    for (i in t) f(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (s = g.getElementById(i[2])) && (this[0] = s, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : f(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
    }).prototype = x.fn, P = x(g);
    var z = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function L(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    x.fn.extend({
        has: function(e) {
            var t = x(e, this),
                n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (x.contains(this, t[e])) return !0
            }))
        },
        closest: function(e, t) {
            var n, i = 0,
                s = this.length,
                o = [],
                r = "string" != typeof e && x(e);
            if (!S.test(e))
                for (; i < s; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? x.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? a.call(x(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return E((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return E(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (_(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
        }
    }, (function(e, t) {
        x.fn[e] = function(n, i) {
            var s = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (s = x.filter(i, s)), 1 < this.length && (D[e] || x.uniqueSort(s), z.test(e) && s.reverse()), this.pushStack(s)
        }
    }));
    var I = /[^\x20\t\r\n\f]+/g;

    function O(e) {
        return e
    }

    function j(e) {
        throw e
    }

    function q(e, t, n, i) {
        var s;
        try {
            e && f(s = e.promise) ? s.call(e).done(t).fail(n) : e && f(s = e.then) ? s.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    x.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, x.each(t.match(I) || [], (function(e, t) {
            n[t] = !0
        })), n) : x.extend({}, e);
        var i, s, o, r, a = [],
            l = [],
            c = -1,
            d = function() {
                for (r = r || e.once, o = i = !0; l.length; c = -1)
                    for (s = l.shift(); ++c < a.length;) !1 === a[c].apply(s[0], s[1]) && e.stopOnFalse && (c = a.length, s = !1);
                e.memory || (s = !1), i = !1, r && (a = s ? [] : "")
            },
            u = {
                add: function() {
                    return a && (s && !i && (c = a.length - 1, l.push(s)), function t(n) {
                        x.each(n, (function(n, i) {
                            f(i) ? e.unique && u.has(i) || a.push(i) : i && i.length && "string" !== b(i) && t(i)
                        }))
                    }(arguments), s && !i && d()), this
                },
                remove: function() {
                    return x.each(arguments, (function(e, t) {
                        for (var n; - 1 < (n = x.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
                    })), this
                },
                has: function(e) {
                    return e ? -1 < x.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = l = [], a = s = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = l = [], s || i || (a = s = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, t) {
                    return r || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || d()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return u
    }, x.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                    ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return x.Deferred((function(t) {
                            x.each(n, (function(n, i) {
                                var s = f(e[i[4]]) && e[i[4]];
                                o[i[1]]((function() {
                                    var e = s && s.apply(this, arguments);
                                    e && f(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, s ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function(t, i, s) {
                        var o = 0;

                        function r(t, n, i, s) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(t < o)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, f(c) ? s ? c.call(e, r(o, n, O, s), r(o, n, j, s)) : (o++, c.call(e, r(o, n, O, s), r(o, n, j, s), r(o, n, O, n.notifyWith))) : (i !== O && (a = void 0, l = [e]), (s || n.resolveWith)(a, l))
                                        }
                                    },
                                    d = s ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, d.stackTrace), o <= t + 1 && (i !== j && (a = void 0, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? d() : (x.Deferred.getStackHook && (d.stackTrace = x.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        return x.Deferred((function(e) {
                            n[0][3].add(r(0, e, f(s) ? s : O, e.notifyWith)), n[1][3].add(r(0, e, f(t) ? t : O)), n[2][3].add(r(0, e, f(i) ? i : j))
                        })).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, s) : s
                    }
                },
                o = {};
            return x.each(n, (function(e, t) {
                var r = t[2],
                    a = t[5];
                s[t[1]] = r.add, a && r.add((function() {
                    i = a
                }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), r.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = r.fireWith
            })), s.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                o = s.call(arguments),
                r = x.Deferred(),
                a = function(e) {
                    return function(n) {
                        i[e] = this, o[e] = 1 < arguments.length ? s.call(arguments) : n, --t || r.resolveWith(i, o)
                    }
                };
            if (t <= 1 && (q(e, r.done(a(n)).resolve, r.reject, !t), "pending" === r.state() || f(o[n] && o[n].then))) return r.then();
            for (; n--;) q(o[n], a(n), r.reject);
            return r.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && H.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, x.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }))
    };
    var N = x.Deferred();

    function R() {
        g.removeEventListener("DOMContentLoaded", R), e.removeEventListener("load", R), x.ready()
    }
    x.fn.ready = function(e) {
        return N.then(e).catch((function(e) {
            x.readyException(e)
        })), this
    }, x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0) !== e && 0 < --x.readyWait || N.resolveWith(g, [x])
        }
    }), x.ready.then = N.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? e.setTimeout(x.ready) : (g.addEventListener("DOMContentLoaded", R), e.addEventListener("load", R));
    var B = function(e, t, n, i, s, o, r) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === b(n))
                for (a in s = !0, n) B(e, t, a, n[a], !0, o, r);
            else if (void 0 !== i && (s = !0, f(i) || (r = !0), c && (r ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(x(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
            return s ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        F = /^-ms-/,
        W = /-([a-z])/g;

    function Y(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(F, "ms-").replace(W, Y)
    }
    var X = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function V() {
        this.expando = x.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, s = this.cache(e);
            if ("string" == typeof t) s[G(t)] = n;
            else
                for (i in t) s[G(i)] = t[i];
            return s
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in i ? [t] : t.match(I) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var U = new V,
        Q = new V,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function J(e, t, n) {
        var i, s;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (s = n) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : Z.test(s) ? JSON.parse(s) : s)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    x.extend({
        hasData: function(e) {
            return Q.hasData(e) || U.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return U.access(e, t, n)
        },
        _removeData: function(e, t) {
            U.remove(e, t)
        }
    }), x.fn.extend({
        data: function(e, t) {
            var n, i, s, o = this[0],
                r = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (s = Q.get(o), 1 === o.nodeType && !U.get(o, "hasDataAttrs"))) {
                    for (n = r.length; n--;) r[n] && 0 === (i = r[n].name).indexOf("data-") && (i = G(i.slice(5)), J(o, i, s[i]));
                    U.set(o, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each((function() {
                Q.set(this, e)
            })) : B(this, (function(t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = Q.get(o, e)) || void 0 !== (n = J(o, e)) ? n : void 0;
                this.each((function() {
                    Q.set(this, e, t)
                }))
            }), null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                Q.remove(this, e)
            }))
        }
    }), x.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = U.get(e, t), n && (!i || Array.isArray(n) ? i = U.access(e, t, x.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                i = n.length,
                s = n.shift(),
                o = x._queueHooks(e, t);
            "inprogress" === s && (s = n.shift(), i--), s && ("fx" === t && n.unshift("inprogress"), delete o.stop, s.call(e, (function() {
                x.dequeue(e, t)
            }), o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return U.get(e, n) || U.access(e, n, {
                empty: x.Callbacks("once memory").add((function() {
                    U.remove(e, [t + "queue", n])
                }))
            })
        }
    }), x.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                x.dequeue(this, e)
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                s = x.Deferred(),
                o = this,
                r = this.length,
                a = function() {
                    --i || s.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(n = U.get(o[r], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), s.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = g.documentElement,
        se = function(e) {
            return x.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    ie.getRootNode && (se = function(e) {
        return x.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var re = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === x.css(e, "display")
    };

    function ae(e, t, n, i) {
        var s, o, r = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return x.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (x.cssNumber[t] ? "" : "px"),
            d = e.nodeType && (x.cssNumber[t] || "px" !== c && +l) && te.exec(x.css(e, t));
        if (d && d[3] !== c) {
            for (l /= 2, c = c || d[3], d = +l || 1; r--;) x.style(e, t, d + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (r = 0), d /= o;
            d *= 2, x.style(e, t, d + c), n = n || []
        }
        return n && (d = +d || +l || 0, s = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = s)), s
    }
    var le = {};

    function ce(e, t) {
        for (var n, i, s, o, r, a, l, c = [], d = 0, u = e.length; d < u; d++)(i = e[d]).style && (n = i.style.display, t ? ("none" === n && (c[d] = U.get(i, "display") || null, c[d] || (i.style.display = "")), "" === i.style.display && re(i) && (c[d] = (l = r = o = void 0, r = (s = i).ownerDocument, a = s.nodeName, (l = le[a]) || (o = r.body.appendChild(r.createElement(a)), l = x.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), le[a] = l)))) : "none" !== n && (c[d] = "none", U.set(i, "display", n)));
        for (d = 0; d < u; d++) null != c[d] && (e[d].style.display = c[d]);
        return e
    }
    x.fn.extend({
        show: function() {
            return ce(this, !0)
        },
        hide: function() {
            return ce(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                re(this) ? x(this).show() : x(this).hide()
            }))
        }
    });
    var de, ue, pe = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        fe = /^$|^module$|\/(?:java|ecma)script/i;
    de = g.createDocumentFragment().appendChild(g.createElement("div")), (ue = g.createElement("input")).setAttribute("type", "radio"), ue.setAttribute("checked", "checked"), ue.setAttribute("name", "t"), de.appendChild(ue), h.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue, de.innerHTML = "<option></option>", h.option = !!de.lastChild;
    var me = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ge(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && _(e, t) ? x.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) U.set(e[n], "globalEval", !t || U.get(t[n], "globalEval"))
    }
    me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, h.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;

    function be(e, t, n, i, s) {
        for (var o, r, a, l, c, d, u = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === b(o)) x.merge(p, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
            for (r = r || u.appendChild(t.createElement("div")), a = (he.exec(o) || ["", ""])[1].toLowerCase(), l = me[a] || me._default, r.innerHTML = l[1] + x.htmlPrefilter(o) + l[2], d = l[0]; d--;) r = r.lastChild;
            x.merge(p, r.childNodes), (r = u.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (u.textContent = "", h = 0; o = p[h++];)
            if (i && -1 < x.inArray(o, i)) s && s.push(o);
            else if (c = se(o), r = ge(u.appendChild(o), "script"), c && ve(r), n)
            for (d = 0; o = r[d++];) fe.test(o.type || "") && n.push(o);
        return u
    }
    var we = /^([^.]*)(?:\.(.+)|)/;

    function xe() {
        return !0
    }

    function Ce() {
        return !1
    }

    function $e(e, t) {
        return e === function() {
            try {
                return g.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Te(e, t, n, i, s, o) {
        var r, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) Te(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == s ? (s = n, i = n = void 0) : null == s && ("string" == typeof n ? (s = i, i = void 0) : (s = i, i = n, n = void 0)), !1 === s) s = Ce;
        else if (!s) return e;
        return 1 === o && (r = s, (s = function(e) {
            return x().off(e), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = x.guid++)), e.each((function() {
            x.event.add(this, t, s, i, n)
        }))
    }

    function Ee(e, t, n) {
        n ? (U.set(e, t, !1), x.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var i, o, r = U.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (r.length)(x.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), U.set(this, t, r), i = n(this, t), this[t](), r !== (o = U.get(this, t)) || i ? U.set(this, t, !1) : o = {}, r !== o) return e.stopImmediatePropagation(), e.preventDefault(), o && o.value
                } else r.length && (U.set(this, t, {
                    value: x.event.trigger(x.extend(r[0], x.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === U.get(e, t) && x.event.add(e, t, xe)
    }
    x.event = {
        global: {},
        add: function(e, t, n, i, s) {
            var o, r, a, l, c, d, u, p, h, f, m, g = U.get(e);
            if (X(e))
                for (n.handler && (n = (o = n).handler, s = o.selector), s && x.find.matchesSelector(ie, s), n.guid || (n.guid = x.guid++), (l = g.events) || (l = g.events = Object.create(null)), (r = g.handle) || (r = g.handle = function(t) {
                        return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(I) || [""]).length; c--;) h = m = (a = we.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), h && (u = x.event.special[h] || {}, h = (s ? u.delegateType : u.bindType) || h, u = x.event.special[h] || {}, d = x.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: s,
                    needsContext: s && x.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, o), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, f, r) || e.addEventListener && e.addEventListener(h, r)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), s ? p.splice(p.delegateCount++, 0, d) : p.push(d), x.event.global[h] = !0)
        },
        remove: function(e, t, n, i, s) {
            var o, r, a, l, c, d, u, p, h, f, m, g = U.hasData(e) && U.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(I) || [""]).length; c--;)
                    if (h = m = (a = we.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), h) {
                        for (u = x.event.special[h] || {}, p = l[h = (i ? u.delegateType : u.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = p.length; o--;) d = p[o], !s && m !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(o, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                        r && !p.length && (u.teardown && !1 !== u.teardown.call(e, f, g.handle) || x.removeEvent(e, h, g.handle), delete l[h])
                    } else
                        for (h in l) x.event.remove(e, h + t[c], n, i, !0);
                x.isEmptyObject(l) && U.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, s, o, r, a = new Array(arguments.length),
                l = x.event.fix(e),
                c = (U.get(this, "events") || Object.create(null))[l.type] || [],
                d = x.event.special[l.type] || {};
            for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
            if (l.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
                for (r = x.event.handlers.call(this, l, c), t = 0;
                    (s = r[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = s.elem, n = 0;
                        (o = s.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((x.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, l), l.result
            }
        },
        handlers: function(e, t) {
            var n, i, s, o, r, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], r = {}, n = 0; n < l; n++) void 0 === r[s = (i = t[n]).selector + " "] && (r[s] = i.needsContext ? -1 < x(s, this).index(c) : x.find(s, this, null, [c]).length), r[s] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(x.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: f(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && _(t, "input") && Ee(t, "click", xe), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && _(t, "input") && Ee(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && _(t, "input") && U.get(t, "click") || _(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, x.Event = function(e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, x.event.addProp), x.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        x.event.special[e] = {
            setup: function() {
                return Ee(this, e, $e), !1
            },
            trigger: function() {
                return Ee(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    })), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    s = e.handleObj;
                return i && (i === this || x.contains(this, i)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), x.fn.extend({
        on: function(e, t, n, i) {
            return Te(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Te(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, t, e[s]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each((function() {
                x.event.remove(this, e, n, t)
            }))
        }
    });
    var Se = /<script|<style|<link/i,
        _e = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function ke(e, t) {
        return _(e, "table") && _(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ae(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function ze(e, t) {
        var n, i, s, o, r, a;
        if (1 === t.nodeType) {
            if (U.hasData(e) && (a = U.get(e).events))
                for (s in U.remove(t, "handle events"), a)
                    for (n = 0, i = a[s].length; n < i; n++) x.event.add(t, s, a[s][n]);
            Q.hasData(e) && (o = Q.access(e), r = x.extend({}, o), Q.set(t, r))
        }
    }

    function De(e, t, n, i) {
        t = o(t);
        var s, r, a, l, c, d, u = 0,
            p = e.length,
            m = p - 1,
            g = t[0],
            v = f(g);
        if (v || 1 < p && "string" == typeof g && !h.checkClone && _e.test(g)) return e.each((function(s) {
            var o = e.eq(s);
            v && (t[0] = g.call(this, s, o.html())), De(o, t, n, i)
        }));
        if (p && (r = (s = be(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === s.childNodes.length && (s = r), r || i)) {
            for (l = (a = x.map(ge(s, "script"), Pe)).length; u < p; u++) c = s, u !== m && (c = x.clone(c, !0, !0), l && x.merge(a, ge(c, "script"))), n.call(e[u], c, u);
            if (l)
                for (d = a[a.length - 1].ownerDocument, x.map(a, Ae), u = 0; u < l; u++) c = a[u], fe.test(c.type || "") && !U.access(c, "globalEval") && x.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && !c.noModule && x._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }, d) : y(c.textContent.replace(Me, ""), c, d))
        }
        return e
    }

    function Le(e, t, n) {
        for (var i, s = t ? x.filter(t, e) : e, o = 0; null != (i = s[o]); o++) n || 1 !== i.nodeType || x.cleanData(ge(i)), i.parentNode && (n && se(i) && ve(ge(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    x.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, s, o, r, a, l, c, d = e.cloneNode(!0),
                u = se(e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (r = ge(d), i = 0, s = (o = ge(e)).length; i < s; i++) a = o[i], "input" === (c = (l = r[i]).nodeName.toLowerCase()) && pe.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || ge(e), r = r || ge(d), i = 0, s = o.length; i < s; i++) ze(o[i], r[i]);
                else ze(e, d);
            return 0 < (r = ge(d, "script")).length && ve(r, !u && ge(e, "script")), d
        },
        cleanData: function(e) {
            for (var t, n, i, s = x.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (X(n)) {
                    if (t = n[U.expando]) {
                        if (t.events)
                            for (i in t.events) s[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                        n[U.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), x.fn.extend({
        detach: function(e) {
            return Le(this, e, !0)
        },
        remove: function(e) {
            return Le(this, e)
        },
        text: function(e) {
            return B(this, (function(e) {
                return void 0 === e ? x.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function() {
            return De(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
            }))
        },
        prepend: function() {
            return De(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ke(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function() {
            return De(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return De(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(ge(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return x.clone(this, e, t)
            }))
        },
        html: function(e) {
            return B(this, (function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !me[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return De(this, arguments, (function(t) {
                var n = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(ge(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        x.fn[e] = function(e) {
            for (var n, i = [], s = x(e), o = s.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), x(s[a])[t](n), r.apply(i, n.get());
            return this.pushStack(i)
        }
    }));
    var Ie = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Oe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        je = function(e, t, n) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            for (s in i = n.call(e), t) e.style[s] = o[s];
            return i
        },
        qe = new RegExp(ne.join("|"), "i");

    function He(e, t, n) {
        var i, s, o, r, a = e.style;
        return (n = n || Oe(e)) && ("" !== (r = n.getPropertyValue(t) || n[t]) || se(e) || (r = x.style(e, t)), !h.pixelBoxStyles() && Ie.test(r) && qe.test(t) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r
    }

    function Ne(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (d) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(c).appendChild(d);
                var t = e.getComputedStyle(d);
                i = "1%" !== t.top, l = 12 === n(t.marginLeft), d.style.right = "60%", r = 36 === n(t.right), s = 36 === n(t.width), d.style.position = "absolute", o = 12 === n(d.offsetWidth / 3), ie.removeChild(c), d = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, s, o, r, a, l, c = g.createElement("div"),
            d = g.createElement("div");
        d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === d.style.backgroundClip, x.extend(h, {
            boxSizingReliable: function() {
                return t(), s
            },
            pixelBoxStyles: function() {
                return t(), r
            },
            pixelPosition: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), o
            },
            reliableTrDimensions: function() {
                var t, n, i, s;
                return null == a && (t = g.createElement("table"), n = g.createElement("tr"), i = g.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", ie.appendChild(t).appendChild(n).appendChild(i), s = e.getComputedStyle(n), a = parseInt(s.height, 10) + parseInt(s.borderTopWidth, 10) + parseInt(s.borderBottomWidth, 10) === n.offsetHeight, ie.removeChild(t)), a
            }
        }))
    }();
    var Re = ["Webkit", "Moz", "ms"],
        Be = g.createElement("div").style,
        Fe = {};

    function We(e) {
        return x.cssProps[e] || Fe[e] || (e in Be ? e : Fe[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Re.length; n--;)
                if ((e = Re[n] + t) in Be) return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ue(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Qe(e, t, n, i, s, o) {
        var r = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; r < 4; r += 2) "margin" === n && (l += x.css(e, n + ne[r], !0, s)), i ? ("content" === n && (l -= x.css(e, "padding" + ne[r], !0, s)), "margin" !== n && (l -= x.css(e, "border" + ne[r] + "Width", !0, s))) : (l += x.css(e, "padding" + ne[r], !0, s), "padding" !== n ? l += x.css(e, "border" + ne[r] + "Width", !0, s) : a += x.css(e, "border" + ne[r] + "Width", !0, s));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
    }

    function Ze(e, t, n) {
        var i = Oe(e),
            s = (!h.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, i),
            o = s,
            r = He(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ie.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return (!h.boxSizingReliable() && s || !h.reliableTrDimensions() && _(e, "tr") || "auto" === r || !parseFloat(r) && "inline" === x.css(e, "display", !1, i)) && e.getClientRects().length && (s = "border-box" === x.css(e, "boxSizing", !1, i), (o = a in e) && (r = e[a])), (r = parseFloat(r) || 0) + Qe(e, t, n || (s ? "border" : "content"), o, i, r) + "px"
    }

    function Ke(e, t, n, i, s) {
        return new Ke.prototype.init(e, t, n, i, s)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = He(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, o, r, a = G(t),
                    l = Ge.test(t),
                    c = e.style;
                if (l || (t = We(a)), r = x.cssHooks[t] || x.cssHooks[a], void 0 === n) return r && "get" in r && void 0 !== (s = r.get(e, !1, i)) ? s : c[t];
                "string" == (o = typeof n) && (s = te.exec(n)) && s[1] && (n = ae(e, t, s), o = "number"), null != n && n == n && ("number" !== o || l || (n += s && s[3] || (x.cssNumber[a] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var s, o, r, a = G(t);
            return Ge.test(t) || (t = We(a)), (r = x.cssHooks[t] || x.cssHooks[a]) && "get" in r && (s = r.get(e, !0, n)), void 0 === s && (s = He(e, t, i)), "normal" === s && t in Ve && (s = Ve[t]), "" === n || n ? (o = parseFloat(s), !0 === n || isFinite(o) ? o || 0 : s) : s
        }
    }), x.each(["height", "width"], (function(e, t) {
        x.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !Ye.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, i) : je(e, Xe, (function() {
                    return Ze(e, t, i)
                }))
            },
            set: function(e, n, i) {
                var s, o = Oe(e),
                    r = !h.scrollboxSize() && "absolute" === o.position,
                    a = (r || i) && "border-box" === x.css(e, "boxSizing", !1, o),
                    l = i ? Qe(e, t, i, a, o) : 0;
                return a && r && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Qe(e, t, "border", !1, o) - .5)), l && (s = te.exec(n)) && "px" !== (s[3] || "px") && (e.style[t] = n, n = x.css(e, t)), Ue(0, n, l)
            }
        }
    })), x.cssHooks.marginLeft = Ne(h.reliableMarginLeft, (function(e, t) {
        if (t) return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - je(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, s = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) s[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
                return s
            }
        }, "margin" !== e && (x.cssHooks[e + t].set = Ue)
    })), x.fn.extend({
        css: function(e, t) {
            return B(this, (function(e, t, n) {
                var i, s, o = {},
                    r = 0;
                if (Array.isArray(t)) {
                    for (i = Oe(e), s = t.length; r < s; r++) o[t[r]] = x.css(e, t[r], !1, i);
                    return o
                }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
            }), e, t, 1 < arguments.length)
        }
    }), ((x.Tween = Ke).prototype = {
        constructor: Ke,
        init: function(e, t, n, i, s, o) {
            this.elem = e, this.prop = n, this.easing = s || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }).init.prototype = Ke.prototype, (Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[We(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, x.fx = Ke.prototype.init, x.fx.step = {};
    var Je, et, tt, nt, it = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;

    function ot() {
        et && (!1 === g.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ot) : e.setTimeout(ot, x.fx.interval), x.fx.tick())
    }

    function rt() {
        return e.setTimeout((function() {
            Je = void 0
        })), Je = Date.now()
    }

    function at(e, t) {
        var n, i = 0,
            s = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) s["margin" + (n = ne[i])] = s["padding" + n] = e;
        return t && (s.opacity = s.width = e), s
    }

    function lt(e, t, n) {
        for (var i, s = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), o = 0, r = s.length; o < r; o++)
            if (i = s[o].call(n, t, e)) return i
    }

    function ct(e, t, n) {
        var i, s, o = 0,
            r = ct.prefilters.length,
            a = x.Deferred().always((function() {
                delete l.elem
            })),
            l = function() {
                if (s) return !1;
                for (var t = Je || rt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, r = c.tweens.length; o < r; o++) c.tweens[o].run(i);
                return a.notifyWith(e, [c, i, n]), i < 1 && r ? n : (r || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Je || rt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = x.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            d = c.props;
        for (function(e, t) {
                var n, i, s, o, r;
                for (n in e)
                    if (s = t[i = G(n)], o = e[n], Array.isArray(o) && (s = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (r = x.cssHooks[i]) && "expand" in r)
                        for (n in o = r.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = s);
                    else t[i] = s
            }(d, c.opts.specialEasing); o < r; o++)
            if (i = ct.prefilters[o].call(c, e, d, c.opts)) return f(i.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return x.map(d, lt, c), f(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    x.Animation = x.extend(ct, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ae(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            f(e) ? (t = e, e = ["*"]) : e = e.match(I);
            for (var n, i = 0, s = e.length; i < s; i++) n = e[i], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, s, o, r, a, l, c, d, u = "width" in t || "height" in t,
                p = this,
                h = {},
                f = e.style,
                m = e.nodeType && re(e),
                g = U.get(e, "fxshow");
            for (i in n.queue || (null == (r = x._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() {
                    r.unqueued || a()
                }), r.unqueued++, p.always((function() {
                    p.always((function() {
                        r.unqueued--, x.queue(e, "fx").length || r.empty.fire()
                    }))
                }))), t)
                if (s = t[i], it.test(s)) {
                    if (delete t[i], o = o || "toggle" === s, s === (m ? "hide" : "show")) {
                        if ("show" !== s || !g || void 0 === g[i]) continue;
                        m = !0
                    }
                    h[i] = g && g[i] || x.style(e, i)
                }
            if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(h))
                for (i in u && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = U.get(e, "display")), "none" === (d = x.css(e, "display")) && (c ? d = c : (ce([e], !0), c = e.style.display || c, d = x.css(e, "display"), ce([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === x.css(e, "float") && (l || (p.done((function() {
                        f.display = c
                    })), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always((function() {
                        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                    }))), l = !1, h) l || (g ? "hidden" in g && (m = g.hidden) : g = U.access(e, "fxshow", {
                    display: c
                }), o && (g.hidden = !m), m && ce([e], !0), p.done((function() {
                    for (i in m || ce([e]), U.remove(e, "fxshow"), h) x.style(e, i, h[i])
                }))), l = lt(m ? g[i] : 0, i, p), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
        }
    }), x.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || f(e) && e,
            duration: e,
            easing: n && t || t && !f(t) && t
        };
        return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            f(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue)
        }, i
    }, x.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var s = x.isEmptyObject(e),
                o = x.speed(t, n, i),
                r = function() {
                    var t = ct(this, x.extend({}, e), o);
                    (s || U.get(this, "finish")) && t.stop(!0)
                };
            return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                var t = !0,
                    s = null != e && e + "queueHooks",
                    o = x.timers,
                    r = U.get(this);
                if (s) r[s] && r[s].stop && i(r[s]);
                else
                    for (s in r) r[s] && r[s].stop && st.test(s) && i(r[s]);
                for (s = o.length; s--;) o[s].elem !== this || null != e && o[s].queue !== e || (o[s].anim.stop(n), t = !1, o.splice(s, 1));
                !t && n || x.dequeue(this, e)
            }))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each((function() {
                var t, n = U.get(this),
                    i = n[e + "queue"],
                    s = n[e + "queueHooks"],
                    o = x.timers,
                    r = i ? i.length : 0;
                for (n.finish = !0, x.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < r; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            }))
        }
    }), x.each(["toggle", "show", "hide"], (function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, i, s) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(at(t, !0), e, i, s)
        }
    })), x.each({
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        x.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    })), x.timers = [], x.fx.tick = function() {
        var e, t = 0,
            n = x.timers;
        for (Je = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || x.fx.stop(), Je = void 0
    }, x.fx.timer = function(e) {
        x.timers.push(e), x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        et || (et = !0, ot())
    }, x.fx.stop = function() {
        et = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fn.delay = function(t, n) {
        return t = x.fx && x.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, i) {
            var s = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(s)
            }
        }))
    }, tt = g.createElement("input"), nt = g.createElement("select").appendChild(g.createElement("option")), tt.type = "checkbox", h.checkOn = "" !== tt.value, h.optSelected = nt.selected, (tt = g.createElement("input")).value = "t", tt.type = "radio", h.radioValue = "t" === tt.value;
    var dt, ut = x.expr.attrHandle;
    x.fn.extend({
        attr: function(e, t) {
            return B(this, x.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each((function() {
                x.removeAttr(this, e)
            }))
        }
    }), x.extend({
        attr: function(e, t, n) {
            var i, s, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === o && x.isXMLDoc(e) || (s = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : s && "get" in s && null !== (i = s.get(e, t)) ? i : null == (i = x.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && _(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                s = t && t.match(I);
            if (s && 1 === e.nodeType)
                for (; n = s[i++];) e.removeAttribute(n)
        }
    }), dt = {
        set: function(e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = ut[t] || x.find.attr;
        ut[t] = function(e, t, i) {
            var s, o, r = t.toLowerCase();
            return i || (o = ut[r], ut[r] = s, s = null != n(e, t, i) ? r : null, ut[r] = o), s
        }
    }));
    var pt = /^(?:input|select|textarea|button)$/i,
        ht = /^(?:a|area)$/i;

    function ft(e) {
        return (e.match(I) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function gt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
    }
    x.fn.extend({
        prop: function(e, t) {
            return B(this, x.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[x.propFix[e] || e]
            }))
        }
    }), x.extend({
        prop: function(e, t, n) {
            var i, s, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && x.isXMLDoc(e) || (t = x.propFix[t] || t, s = x.propHooks[t]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : e[t] = n : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), h.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        x.propFix[this.toLowerCase()] = this
    })), x.fn.extend({
        addClass: function(e) {
            var t, n, i, s, o, r, a, l = 0;
            if (f(e)) return this.each((function(t) {
                x(this).addClass(e.call(this, t, mt(this)))
            }));
            if ((t = gt(e)).length)
                for (; n = this[l++];)
                    if (s = mt(n), i = 1 === n.nodeType && " " + ft(s) + " ") {
                        for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s !== (a = ft(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, s, o, r, a, l = 0;
            if (f(e)) return this.each((function(t) {
                x(this).removeClass(e.call(this, t, mt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((t = gt(e)).length)
                for (; n = this[l++];)
                    if (s = mt(n), i = 1 === n.nodeType && " " + ft(s) + " ") {
                        for (r = 0; o = t[r++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        s !== (a = ft(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : f(e) ? this.each((function(n) {
                x(this).toggleClass(e.call(this, n, mt(this), t), t)
            })) : this.each((function() {
                var t, s, o, r;
                if (i)
                    for (s = 0, o = x(this), r = gt(e); t = r[s++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = mt(this)) && U.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : U.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + ft(mt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var vt = /\r/g;
    x.fn.extend({
        val: function(e) {
            var t, n, i, s = this[0];
            return arguments.length ? (i = f(e), this.each((function(n) {
                var s;
                1 === this.nodeType && (null == (s = i ? e.call(this, n, x(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = x.map(s, (function(e) {
                    return null == e ? "" : e + ""
                }))), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
            }))) : s ? (t = x.valHooks[s.type] || x.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(s, "value")) ? n : "string" == typeof(n = s.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : ft(x.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, s = e.options,
                        o = e.selectedIndex,
                        r = "select-one" === e.type,
                        a = r ? null : [],
                        l = r ? o + 1 : s.length;
                    for (i = o < 0 ? l : r ? o : 0; i < l; i++)
                        if (((n = s[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !_(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), r) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, s = e.options, o = x.makeArray(t), r = s.length; r--;)((i = s[r]).selected = -1 < x.inArray(x.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), x.each(["radio", "checkbox"], (function() {
        x.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < x.inArray(x(e).val(), t)
            }
        }, h.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), h.focusin = "onfocusin" in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        bt = function(e) {
            e.stopPropagation()
        };
    x.extend(x.event, {
        trigger: function(t, n, i, s) {
            var o, r, a, l, c, u, p, h, v = [i || g],
                y = d.call(t, "type") ? t.type : t,
                b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (r = h = a = i = i || g, 3 !== i.nodeType && 8 !== i.nodeType && !yt.test(y + x.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[x.expando] ? t : new x.Event(y, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : x.makeArray(n, [t]), p = x.event.special[y] || {}, s || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                if (!s && !p.noBubble && !m(i)) {
                    for (l = p.delegateType || y, yt.test(l + y) || (r = r.parentNode); r; r = r.parentNode) v.push(r), a = r;
                    a === (i.ownerDocument || g) && v.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (r = v[o++]) && !t.isPropagationStopped();) h = r, t.type = 1 < o ? l : p.bindType || y, (u = (U.get(r, "events") || Object.create(null))[t.type] && U.get(r, "handle")) && u.apply(r, n), (u = c && r[c]) && u.apply && X(r) && (t.result = u.apply(r, n), !1 === t.result && t.preventDefault());
                return t.type = y, s || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), n) || !X(i) || c && f(i[y]) && !m(i) && ((a = i[c]) && (i[c] = null), x.event.triggered = y, t.isPropagationStopped() && h.addEventListener(y, bt), i[y](), t.isPropagationStopped() && h.removeEventListener(y, bt), x.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0
            });
            x.event.trigger(i, null, t)
        }
    }), x.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                x.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return x.event.trigger(e, t, n, !0)
        }
    }), h.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e))
        };
        x.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this.document || this,
                    s = U.access(i, t);
                s || i.addEventListener(e, n, !0), U.access(i, t, (s || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this.document || this,
                    s = U.access(i, t) - 1;
                s ? U.access(i, t, s) : (i.removeEventListener(e, n, !0), U.remove(i, t))
            }
        }
    }));
    var wt = e.location,
        xt = {
            guid: Date.now()
        },
        Ct = /\?/;
    x.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return i = n && n.getElementsByTagName("parsererror")[0], n && !i || x.error("Invalid XML: " + (i ? x.map(i.childNodes, (function(e) {
            return e.textContent
        })).join("\n") : t)), n
    };
    var $t = /\[\]$/,
        Tt = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

    function _t(e, t, n, i) {
        var s;
        if (Array.isArray(t)) x.each(t, (function(t, s) {
            n || $t.test(e) ? i(e, s) : _t(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, n, i)
        }));
        else if (n || "object" !== b(t)) i(e, t);
        else
            for (s in t) _t(e + "[" + s + "]", t[s], n, i)
    }
    x.param = function(e, t) {
        var n, i = [],
            s = function(e, t) {
                var n = f(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, (function() {
            s(this.name, this.value)
        }));
        else
            for (n in e) _t(n, e[n], t, s);
        return i.join("&")
    }, x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && St.test(this.nodeName) && !Et.test(e) && (this.checked || !pe.test(e))
            })).map((function(e, t) {
                var n = x(this).val();
                return null == n ? null : Array.isArray(n) ? x.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Tt, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(Tt, "\r\n")
                }
            })).get()
        }
    });
    var Mt = /%20/g,
        kt = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        zt = /^(?:GET|HEAD)$/,
        Dt = /^\/\//,
        Lt = {},
        It = {},
        Ot = "*/".concat("*"),
        jt = g.createElement("a");

    function qt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, s = 0,
                o = t.toLowerCase().match(I) || [];
            if (f(n))
                for (; i = o[s++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Ht(e, t, n, i) {
        var s = {},
            o = e === It;

        function r(a) {
            var l;
            return s[a] = !0, x.each(e[a] || [], (function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            })), l
        }
        return r(t.dataTypes[0]) || !s["*"] && r("*")
    }

    function Nt(e, t) {
        var n, i, s = x.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
        return i && x.extend(!0, e, i), e
    }
    jt.href = wt.href, x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ot,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Nt(Nt(e, x.ajaxSettings), t) : Nt(x.ajaxSettings, e)
        },
        ajaxPrefilter: qt(Lt),
        ajaxTransport: qt(It),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, s, o, r, a, l, c, d, u, p, h = x.ajaxSetup({}, n),
                f = h.context || h,
                m = h.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                v = x.Deferred(),
                y = x.Callbacks("once memory"),
                b = h.statusCode || {},
                w = {},
                C = {},
                $ = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!r)
                                for (r = {}; t = At.exec(o);) r[t[1].toLowerCase() + " "] = (r[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = r[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) T.always(e[T.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || $;
                        return i && i.abort(t), E(0, t), this
                    }
                };
            if (v.promise(T), h.url = ((t || h.url || wt.href) + "").replace(Dt, wt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [""], null == h.crossDomain) {
                l = g.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = jt.protocol + "//" + jt.host != l.protocol + "//" + l.host
                } catch (t) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = x.param(h.data, h.traditional)), Ht(Lt, h, n, T), c) return T;
            for (u in (d = x.event && h.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !zt.test(h.type), s = h.url.replace(kt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Mt, "+")) : (p = h.url.slice(s.length), h.data && (h.processData || "string" == typeof h.data) && (s += (Ct.test(s) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (s = s.replace(Pt, "$1"), p = (Ct.test(s) ? "&" : "?") + "_=" + xt.guid++ + p), h.url = s + p), h.ifModified && (x.lastModified[s] && T.setRequestHeader("If-Modified-Since", x.lastModified[s]), x.etag[s] && T.setRequestHeader("If-None-Match", x.etag[s])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : h.accepts["*"]), h.headers) T.setRequestHeader(u, h.headers[u]);
            if (h.beforeSend && (!1 === h.beforeSend.call(f, T, h) || c)) return T.abort();
            if ($ = "abort", y.add(h.complete), T.done(h.success), T.fail(h.error), i = Ht(It, h, n, T)) {
                if (T.readyState = 1, d && m.trigger("ajaxSend", [T, h]), c) return T;
                h.async && 0 < h.timeout && (a = e.setTimeout((function() {
                    T.abort("timeout")
                }), h.timeout));
                try {
                    c = !1, i.send(w, E)
                } catch (t) {
                    if (c) throw t;
                    E(-1, t)
                }
            } else E(-1, "No Transport");

            function E(t, n, r, l) {
                var u, p, g, w, C, $ = n;
                c || (c = !0, a && e.clearTimeout(a), i = void 0, o = l || "", T.readyState = 0 < t ? 4 : 0, u = 200 <= t && t < 300 || 304 === t, r && (w = function(e, t, n) {
                    for (var i, s, o, r, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (s in a)
                            if (a[s] && a[s].test(i)) {
                                l.unshift(s);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (s in n) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                                o = s;
                                break
                            }
                            r || (r = s)
                        }
                        o = o || r
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(h, T, r)), !u && -1 < x.inArray("script", h.dataTypes) && x.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), w = function(e, t, n, i) {
                    var s, o, r, a, l, c = {},
                        d = e.dataTypes.slice();
                    if (d[1])
                        for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                    for (o = d.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = d.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(r = c[l + " " + o] || c["* " + o]))
                            for (s in c)
                                if ((a = s.split(" "))[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === r ? r = c[s] : !0 !== c[s] && (o = a[0], d.unshift(a[1]));
                                    break
                                }
                        if (!0 !== r)
                            if (r && e.throws) t = r(t);
                            else try {
                                t = r(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: r ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, w, T, u), u ? (h.ifModified && ((C = T.getResponseHeader("Last-Modified")) && (x.lastModified[s] = C), (C = T.getResponseHeader("etag")) && (x.etag[s] = C)), 204 === t || "HEAD" === h.type ? $ = "nocontent" : 304 === t ? $ = "notmodified" : ($ = w.state, p = w.data, u = !(g = w.error))) : (g = $, !t && $ || ($ = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || $) + "", u ? v.resolveWith(f, [p, $, T]) : v.rejectWith(f, [T, $, g]), T.statusCode(b), b = void 0, d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [T, h, u ? p : g]), y.fireWith(f, [T, $]), d && (m.trigger("ajaxComplete", [T, h]), --x.active || x.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return x.get(e, void 0, t, "script")
        }
    }), x.each(["get", "post"], (function(e, t) {
        x[t] = function(e, n, i, s) {
            return f(n) && (s = s || i, i = n, n = void 0), x.ajax(x.extend({
                url: e,
                type: t,
                dataType: s,
                data: n,
                success: i
            }, x.isPlainObject(e) && e))
        }
    })), x.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    })), x._evalUrl = function(e, t, n) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                x.globalEval(e, t, n)
            }
        })
    }, x.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (f(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function(e) {
            return f(e) ? this.each((function(t) {
                x(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = f(e);
            return this.each((function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                x(this).replaceWith(this.childNodes)
            })), this
        }
    }), x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e)
    }, x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, x.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Rt = {
            0: 200,
            1223: 204
        },
        Bt = x.ajaxSettings.xhr();
    h.cors = !!Bt && "withCredentials" in Bt, h.ajax = Bt = !!Bt, x.ajaxTransport((function(t) {
        var n, i;
        if (h.cors || Bt && !t.crossDomain) return {
            send: function(s, o) {
                var r, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) a[r] = t.xhrFields[r];
                for (r in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) a.setRequestHeader(r, s[r]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Rt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout((function() {
                        n && i()
                    }))
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (s) {
                    if (n) throw s
                }
            },
            abort: function() {
                n && n()
            }
        }
    })), x.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    })), x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), x.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(i, s) {
                t = x("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && s("error" === e.type ? 404 : 200, e.type)
                }), g.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    }));
    var Ft, Wt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Wt.pop() || x.expando + "_" + xt.guid++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", (function(t, n, i) {
        var s, o, r, a = !1 !== t.jsonp && (Yt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return s = t.jsonpCallback = f(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Yt, "$1" + s) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function() {
            return r || x.error(s + " was not called"), r[0]
        }, t.dataTypes[0] = "json", o = e[s], e[s] = function() {
            r = arguments
        }, i.always((function() {
            void 0 === o ? x(e).removeProp(s) : e[s] = o, t[s] && (t.jsonpCallback = n.jsonpCallback, Wt.push(s)), r && f(o) && o(r[0]), r = o = void 0
        })), "script"
    })), h.createHTMLDocument = ((Ft = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), x.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((i = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, t.head.appendChild(i)) : t = g), o = !n && [], (s = M.exec(e)) ? [t.createElement(s[1])] : (s = be([e], t, o), o && o.length && x(o).remove(), x.merge([], s.childNodes)));
        var i, s, o
    }, x.fn.load = function(e, t, n) {
        var i, s, o, r = this,
            a = e.indexOf(" ");
        return -1 < a && (i = ft(e.slice(a)), e = e.slice(0, a)), f(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < r.length && x.ajax({
            url: e,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            o = arguments, r.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        })).always(n && function(e, t) {
            r.each((function() {
                n.apply(this, o || [e.responseText, t, e])
            }))
        }), this
    }, x.expr.pseudos.animated = function(e) {
        return x.grep(x.timers, (function(t) {
            return e === t.elem
        })).length
    }, x.offset = {
        setOffset: function(e, t, n) {
            var i, s, o, r, a, l, c = x.css(e, "position"),
                d = x(e),
                u = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), o = x.css(e, "top"), l = x.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (r = (i = d.position()).top, s = i.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), f(t) && (t = t.call(e, n, x.extend({}, a))), null != t.top && (u.top = t.top - a.top + r), null != t.left && (u.left = t.left - a.left + s), "using" in t ? t.using.call(e, u) : d.css(u)
        }
    }, x.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                x.offset.setOffset(this, e, t)
            }));
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    s = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === x.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((s = x(e).offset()).top += x.css(e, "borderTopWidth", !0), s.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - s.top - x.css(i, "marginTop", !0),
                    left: t.left - s.left - x.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                return e || ie
            }))
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        x.fn[e] = function(i) {
            return B(this, (function(e, i, s) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === s) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : s, n ? s : o.pageYOffset) : e[i] = s
            }), e, i, arguments.length)
        }
    })), x.each(["top", "left"], (function(e, t) {
        x.cssHooks[t] = Ne(h.pixelPosition, (function(e, n) {
            if (n) return n = He(e, t), Ie.test(n) ? x(e).position()[t] + "px" : n
        }))
    })), x.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        x.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, i) {
            x.fn[i] = function(s, o) {
                var r = arguments.length && (n || "boolean" != typeof s),
                    a = n || (!0 === s || !0 === o ? "margin" : "border");
                return B(this, (function(t, n, s) {
                    var o;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === s ? x.css(t, n, a) : x.style(t, n, s, a)
                }), t, r ? s : void 0, r)
            }
        }))
    })), x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), x.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        x.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }));
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    x.proxy = function(e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), f(e)) return i = s.call(arguments, 2), (o = function() {
            return e.apply(t || this, i.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || x.guid++, o
    }, x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0)
    }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = _, x.isFunction = f, x.isWindow = m, x.camelCase = G, x.type = b, x.now = Date.now, x.isNumeric = function(e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, x.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return x
    }));
    var Xt = e.jQuery,
        Vt = e.$;
    return x.noConflict = function(t) {
        return e.$ === x && (e.$ = Vt), t && e.jQuery === x && (e.jQuery = Xt), x
    }, void 0 === t && (e.jQuery = e.$ = x), x
})),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, (function() {
    return function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var s = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return e[i].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0)
    }([function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            o = (i(n(1)), n(6)),
            r = i(o),
            a = i(n(7)),
            l = i(n(8)),
            c = i(n(9)),
            d = i(n(10)),
            u = i(n(11)),
            p = i(n(14)),
            h = [],
            f = !1,
            m = document.all && !window.atob,
            g = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            },
            v = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e && (f = !0), f) return h = (0, u.default)(h, g), (0, d.default)(h, g.once), h
            },
            y = function() {
                h = (0, p.default)(), v()
            };
        e.exports = {
            init: function(e) {
                return g = s(g, e), h = (0, p.default)(),
                    function(e) {
                        return !0 === e || "mobile" === e && c.default.mobile() || "phone" === e && c.default.phone() || "tablet" === e && c.default.tablet() || "function" == typeof e && !0 === e()
                    }(g.disable) || m ? void h.forEach((function(e, t) {
                        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                    })) : (document.querySelector("body").setAttribute("data-aos-easing", g.easing), document.querySelector("body").setAttribute("data-aos-duration", g.duration), document.querySelector("body").setAttribute("data-aos-delay", g.delay), "DOMContentLoaded" === g.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? v(!0) : "load" === g.startEvent ? window.addEventListener(g.startEvent, (function() {
                        v(!0)
                    })) : document.addEventListener(g.startEvent, (function() {
                        v(!0)
                    })), window.addEventListener("resize", (0, a.default)(v, g.debounceDelay, !0)), window.addEventListener("orientationchange", (0, a.default)(v, g.debounceDelay, !0)), window.addEventListener("scroll", (0, r.default)((function() {
                        (0, d.default)(h, g.once)
                    }), g.throttleDelay)), g.disableMutationObserver || (0, l.default)("[data-aos]", y), h)
            },
            refresh: v,
            refreshHard: y
        }
    }, function(e, t) {}, , , , , function(e, t) {
        (function(t) {
            "use strict";

            function n(e, t, n) {
                function s(t) {
                    var n = p,
                        i = h;
                    return p = h = void 0, y = t, m = e.apply(i, n)
                }

                function r(e) {
                    return y = e, g = setTimeout(c, t), C ? s(e) : m
                }

                function l(e) {
                    var n = e - v;
                    return void 0 === v || n >= t || n < 0 || $ && e - y >= f
                }

                function c() {
                    var e = x();
                    return l(e) ? d(e) : void(g = setTimeout(c, function(e) {
                        var n = t - (e - v);
                        return $ ? w(n, f - (e - y)) : n
                    }(e)))
                }

                function d(e) {
                    return g = void 0, T && p ? s(e) : (p = h = void 0, m)
                }

                function u() {
                    var e = x(),
                        n = l(e);
                    if (p = arguments, h = this, v = e, n) {
                        if (void 0 === g) return r(v);
                        if ($) return g = setTimeout(c, t), s(v)
                    }
                    return void 0 === g && (g = setTimeout(c, t)), m
                }
                var p, h, f, m, g, v, y = 0,
                    C = !1,
                    $ = !1,
                    T = !0;
                if ("function" != typeof e) throw new TypeError(a);
                return t = o(t) || 0, i(n) && (C = !!n.leading, f = ($ = "maxWait" in n) ? b(o(n.maxWait) || 0, t) : f, T = "trailing" in n ? !!n.trailing : T), u.cancel = function() {
                    void 0 !== g && clearTimeout(g), y = 0, p = v = h = g = void 0
                }, u.flush = function() {
                    return void 0 === g ? m : d(x())
                }, u
            }

            function i(e) {
                var t = void 0 === e ? "undefined" : r(e);
                return !!e && ("object" == t || "function" == t)
            }

            function s(e) {
                return "symbol" == (void 0 === e ? "undefined" : r(e)) || function(e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : r(e))
                }(e) && y.call(e) == c
            }

            function o(e) {
                if ("number" == typeof e) return e;
                if (s(e)) return l;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(d, "");
                var n = p.test(e);
                return n || h.test(e) ? f(e.slice(2), n ? 2 : 8) : u.test(e) ? l : +e
            }
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                a = "Expected a function",
                l = NaN,
                c = "[object Symbol]",
                d = /^\s+|\s+$/g,
                u = /^[-+]0x[0-9a-f]+$/i,
                p = /^0b[01]+$/i,
                h = /^0o[0-7]+$/i,
                f = parseInt,
                m = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
                g = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                v = m || g || Function("return this")(),
                y = Object.prototype.toString,
                b = Math.max,
                w = Math.min,
                x = function() {
                    return v.Date.now()
                };
            e.exports = function(e, t, s) {
                var o = !0,
                    r = !0;
                if ("function" != typeof e) throw new TypeError(a);
                return i(s) && (o = "leading" in s ? !!s.leading : o, r = "trailing" in s ? !!s.trailing : r), n(e, t, {
                    leading: o,
                    maxWait: t,
                    trailing: r
                })
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        (function(t) {
            "use strict";

            function n(e) {
                var t = void 0 === e ? "undefined" : o(e);
                return !!e && ("object" == t || "function" == t)
            }

            function i(e) {
                return "symbol" == (void 0 === e ? "undefined" : o(e)) || function(e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : o(e))
                }(e) && v.call(e) == l
            }

            function s(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return a;
                if (n(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = n(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(c, "");
                var s = u.test(e);
                return s || p.test(e) ? h(e.slice(2), s ? 2 : 8) : d.test(e) ? a : +e
            }
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r = "Expected a function",
                a = NaN,
                l = "[object Symbol]",
                c = /^\s+|\s+$/g,
                d = /^[-+]0x[0-9a-f]+$/i,
                u = /^0b[01]+$/i,
                p = /^0o[0-7]+$/i,
                h = parseInt,
                f = "object" == (void 0 === t ? "undefined" : o(t)) && t && t.Object === Object && t,
                m = "object" == ("undefined" == typeof self ? "undefined" : o(self)) && self && self.Object === Object && self,
                g = f || m || Function("return this")(),
                v = Object.prototype.toString,
                y = Math.max,
                b = Math.min,
                w = function() {
                    return g.Date.now()
                };
            e.exports = function(e, t, i) {
                function o(t) {
                    var n = p,
                        i = h;
                    return p = h = void 0, x = t, m = e.apply(i, n)
                }

                function a(e) {
                    return x = e, g = setTimeout(c, t), C ? o(e) : m
                }

                function l(e) {
                    var n = e - v;
                    return void 0 === v || n >= t || n < 0 || $ && e - x >= f
                }

                function c() {
                    var e = w();
                    return l(e) ? d(e) : void(g = setTimeout(c, function(e) {
                        var n = t - (e - v);
                        return $ ? b(n, f - (e - x)) : n
                    }(e)))
                }

                function d(e) {
                    return g = void 0, T && p ? o(e) : (p = h = void 0, m)
                }

                function u() {
                    var e = w(),
                        n = l(e);
                    if (p = arguments, h = this, v = e, n) {
                        if (void 0 === g) return a(v);
                        if ($) return g = setTimeout(c, t), o(v)
                    }
                    return void 0 === g && (g = setTimeout(c, t)), m
                }
                var p, h, f, m, g, v, x = 0,
                    C = !1,
                    $ = !1,
                    T = !0;
                if ("function" != typeof e) throw new TypeError(r);
                return t = s(t) || 0, n(i) && (C = !!i.leading, f = ($ = "maxWait" in i) ? y(s(i.maxWait) || 0, t) : f, T = "trailing" in i ? !!i.trailing : T), u.cancel = function() {
                    void 0 !== g && clearTimeout(g), x = 0, p = v = h = g = void 0
                }, u.flush = function() {
                    return void 0 === g ? m : d(w())
                }, u
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        "use strict";

        function n(e) {
            e && e.forEach((function(e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                    n = Array.prototype.slice.call(e.removedNodes),
                    i = t.concat(n).filter((function(e) {
                        return e.hasAttribute && e.hasAttribute("data-aos")
                    })).length;
                i && o()
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = window.document,
            s = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            o = function() {};
        t.default = function(e, t) {
            var r = new s(n);
            o = t, r.observe(i.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })
        }
    }, function(e, t) {
        "use strict";

        function n() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            o = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            l = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return i(e, [{
                    key: "phone",
                    value: function() {
                        var e = n();
                        return !(!s.test(e) && !o.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var e = n();
                        return !(!r.test(e) && !a.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t.default = new l
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e, t) {
            var n = window.pageYOffset,
                i = window.innerHeight;
            e.forEach((function(e, s) {
                ! function(e, t, n) {
                    var i = e.node.getAttribute("data-aos-once");
                    t > e.position ? e.node.classList.add("aos-animate") : void 0 !== i && ("false" === i || !n && "true" !== i) && e.node.classList.remove("aos-animate")
                }(e, i + n, t)
            }))
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(12));
        t.default = function(e, t) {
            return e.forEach((function(e, n) {
                e.node.classList.add("aos-init"), e.position = (0, i.default)(e.node, t.offset)
            })), e
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(13));
        t.default = function(e, t) {
            var n = 0,
                s = 0,
                o = window.innerHeight,
                r = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                };
            switch (r.offset && !isNaN(r.offset) && (s = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), n = (0, i.default)(e).top, r.anchorPlacement) {
                case "top-bottom":
                    break;
                case "center-bottom":
                    n += e.offsetHeight / 2;
                    break;
                case "bottom-bottom":
                    n += e.offsetHeight;
                    break;
                case "top-center":
                    n += o / 2;
                    break;
                case "bottom-center":
                    n += o / 2 + e.offsetHeight;
                    break;
                case "center-center":
                    n += o / 2 + e.offsetHeight / 2;
                    break;
                case "top-top":
                    n += o;
                    break;
                case "bottom-top":
                    n += e.offsetHeight + o;
                    break;
                case "center-top":
                    n += e.offsetHeight / 2 + o
            }
            return r.anchorPlacement || r.offset || isNaN(t) || (s = t), n + s
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: n,
                left: t
            }
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e) {
            return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, (function(e) {
                return {
                    node: e
                }
            }))
        }
    }])
})),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function(t, n) {
        return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(n), n
    } : e(jQuery)
}((function(e) {
    var t = function() {
            if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
            var n, i, s, o, r, a, l, c, d, u, p, h, f, m, g, v;

            function y(e, t) {
                return f.call(e, t)
            }

            function b(e, t) {
                var n, i, s, o, r, a, l, c, d, u, h, f = t && t.split("/"),
                    m = p.map,
                    v = m && m["*"] || {};
                if (e) {
                    for (r = (e = e.split("/")).length - 1, p.nodeIdCompat && g.test(e[r]) && (e[r] = e[r].replace(g, "")), "." === e[0].charAt(0) && f && (e = f.slice(0, f.length - 1).concat(e)), d = 0; d < e.length; d++)
                        if ("." === (h = e[d])) e.splice(d, 1), --d;
                        else if (".." === h) {
                        if (0 === d || 1 === d && ".." === e[2] || ".." === e[d - 1]) continue;
                        0 < d && (e.splice(d - 1, 2), d -= 2)
                    }
                    e = e.join("/")
                }
                if ((f || v) && m) {
                    for (d = (n = e.split("/")).length; 0 < d; --d) {
                        if (i = n.slice(0, d).join("/"), f)
                            for (u = f.length; 0 < u; --u)
                                if (s = (s = m[f.slice(0, u).join("/")]) && s[i]) {
                                    o = s, a = d;
                                    break
                                }
                        if (o) break;
                        !l && v && v[i] && (l = v[i], c = d)
                    }!o && l && (o = l, a = c), o && (n.splice(0, a, o), e = n.join("/"))
                }
                return e
            }

            function w(e, t) {
                return function() {
                    var n = m.call(arguments, 0);
                    return "string" != typeof n[0] && 1 === n.length && n.push(null), a.apply(o, n.concat([e, t]))
                }
            }

            function x(e) {
                return function(t) {
                    d[e] = t
                }
            }

            function C(e) {
                if (y(u, e)) {
                    var t = u[e];
                    delete u[e], h[e] = !0, r.apply(o, t)
                }
                if (!y(d, e) && !y(h, e)) throw new Error("No " + e);
                return d[e]
            }

            function T(e) {
                var t, n = e ? e.indexOf("!") : -1;
                return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
            }

            function E(e) {
                return e ? T(e) : []
            }
            return t && t.requirejs || (t ? i = t : t = {}, d = {}, u = {}, p = {}, h = {}, f = Object.prototype.hasOwnProperty, m = [].slice, g = /\.js$/, l = function(e, t) {
                var n, i, s = T(e),
                    o = s[0],
                    r = t[1];
                return e = s[1], o && (n = C(o = b(o, r))), o ? e = n && n.normalize ? n.normalize(e, (i = r, function(e) {
                    return b(e, i)
                })) : b(e, r) : (o = (s = T(e = b(e, r)))[0], e = s[1], o && (n = C(o))), {
                    f: o ? o + "!" + e : e,
                    n: e,
                    pr: o,
                    p: n
                }
            }, c = {
                require: function(e) {
                    return w(e)
                },
                exports: function(e) {
                    var t = d[e];
                    return void 0 !== t ? t : d[e] = {}
                },
                module: function(e) {
                    return {
                        id: e,
                        uri: "",
                        exports: d[e],
                        config: (t = e, function() {
                            return p && p.config && p.config[t] || {}
                        })
                    };
                    var t
                }
            }, r = function(e, t, n, i) {
                var s, r, a, p, f, m, g, v = [],
                    b = typeof n;
                if (m = E(i = i || e), "undefined" == b || "function" == b) {
                    for (t = !t.length && n.length ? ["require", "exports", "module"] : t, f = 0; f < t.length; f += 1)
                        if ("require" === (r = (p = l(t[f], m)).f)) v[f] = c.require(e);
                        else if ("exports" === r) v[f] = c.exports(e), g = !0;
                    else if ("module" === r) s = v[f] = c.module(e);
                    else if (y(d, r) || y(u, r) || y(h, r)) v[f] = C(r);
                    else {
                        if (!p.p) throw new Error(e + " missing " + r);
                        p.p.load(p.n, w(i, !0), x(r), {}), v[f] = d[r]
                    }
                    a = n ? n.apply(d[e], v) : void 0, e && (s && s.exports !== o && s.exports !== d[e] ? d[e] = s.exports : a === o && g || (d[e] = a))
                } else e && (d[e] = n)
            }, n = i = a = function(e, t, n, i, s) {
                if ("string" == typeof e) return c[e] ? c[e](t) : C(l(e, E(t)).f);
                if (!e.splice) {
                    if ((p = e).deps && a(p.deps, p.callback), !t) return;
                    t.splice ? (e = t, t = n, n = null) : e = o
                }
                return t = t || function() {}, "function" == typeof n && (n = i, i = s), i ? r(o, e, t, n) : setTimeout((function() {
                    r(o, e, t, n)
                }), 4), a
            }, a.config = function(e) {
                return a(e)
            }, n._defined = d, (s = function(e, t, n) {
                if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                t.splice || (n = t, t = []), y(d, e) || y(u, e) || (u[e] = [e, t, n])
            }).amd = {
                jQuery: !0
            }, t.requirejs = n, t.require = i, t.define = s), t.define("almond", (function() {})), t.define("jquery", [], (function() {
                var t = e || $;
                return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
            })), t.define("select2/utils", ["jquery"], (function(e) {
                var t = {};

                function n(e) {
                    var t = e.prototype,
                        n = [];
                    for (var i in t) "function" == typeof t[i] && "constructor" !== i && n.push(i);
                    return n
                }

                function i() {
                    this.listeners = {}
                }
                t.Extend = function(e, t) {
                    var n = {}.hasOwnProperty;

                    function i() {
                        this.constructor = e
                    }
                    for (var s in t) n.call(t, s) && (e[s] = t[s]);
                    return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
                }, t.Decorate = function(e, t) {
                    var i = n(t),
                        s = n(e);

                    function o() {
                        var n = Array.prototype.unshift,
                            i = t.prototype.constructor.length,
                            s = e.prototype.constructor;
                        0 < i && (n.call(arguments, e.prototype.constructor), s = t.prototype.constructor), s.apply(this, arguments)
                    }
                    t.displayName = e.displayName, o.prototype = new function() {
                        this.constructor = o
                    };
                    for (var r = 0; r < s.length; r++) {
                        var a = s[r];
                        o.prototype[a] = e.prototype[a]
                    }

                    function l(e) {
                        var n = function() {};
                        e in o.prototype && (n = o.prototype[e]);
                        var i = t.prototype[e];
                        return function() {
                            return Array.prototype.unshift.call(arguments, n), i.apply(this, arguments)
                        }
                    }
                    for (var c = 0; c < i.length; c++) {
                        var d = i[c];
                        o.prototype[d] = l(d)
                    }
                    return o
                }, i.prototype.on = function(e, t) {
                    this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                }, i.prototype.trigger = function(e) {
                    var t = Array.prototype.slice,
                        n = t.call(arguments, 1);
                    this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                }, i.prototype.invoke = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t)
                }, t.Observable = i, t.generateChars = function(e) {
                    for (var t = "", n = 0; n < e; n++) t += Math.floor(36 * Math.random()).toString(36);
                    return t
                }, t.bind = function(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }, t._convertData = function(e) {
                    for (var t in e) {
                        var n = t.split("-"),
                            i = e;
                        if (1 !== n.length) {
                            for (var s = 0; s < n.length; s++) {
                                var o = n[s];
                                (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}), s == n.length - 1 && (i[o] = e[t]), i = i[o]
                            }
                            delete e[t]
                        }
                    }
                    return e
                }, t.hasScroll = function(t, n) {
                    var i = e(n),
                        s = n.style.overflowX,
                        o = n.style.overflowY;
                    return (s !== o || "hidden" !== o && "visible" !== o) && ("scroll" === s || "scroll" === o || i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth)
                }, t.escapeMarkup = function(e) {
                    var t = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, (function(e) {
                        return t[e]
                    }))
                }, t.appendMany = function(t, n) {
                    if ("1.7" === e.fn.jquery.substr(0, 3)) {
                        var i = e();
                        e.map(n, (function(e) {
                            i = i.add(e)
                        })), n = i
                    }
                    t.append(n)
                }, t.__cache = {};
                var s = 0;
                return t.GetUniqueElementId = function(e) {
                    var t = e.getAttribute("data-select2-id");
                    return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++s), t = s.toString())), t
                }, t.StoreData = function(e, n, i) {
                    var s = t.GetUniqueElementId(e);
                    t.__cache[s] || (t.__cache[s] = {}), t.__cache[s][n] = i
                }, t.GetData = function(n, i) {
                    var s = t.GetUniqueElementId(n);
                    return i ? t.__cache[s] && null != t.__cache[s][i] ? t.__cache[s][i] : e(n).data(i) : t.__cache[s]
                }, t.RemoveData = function(e) {
                    var n = t.GetUniqueElementId(e);
                    null != t.__cache[n] && delete t.__cache[n], e.removeAttribute("data-select2-id")
                }, t
            })), t.define("select2/results", ["jquery", "./utils"], (function(e, t) {
                function n(e, t, i) {
                    this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)
                }
                return t.Extend(n, t.Observable), n.prototype.render = function() {
                    var t = e('<ul class="select2-results__options" role="listbox"></ul>');
                    return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t
                }, n.prototype.clear = function() {
                    this.$results.empty()
                }, n.prototype.displayMessage = function(t) {
                    var n = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading();
                    var i = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
                        s = this.options.get("translations").get(t.message);
                    i.append(n(s(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
                }, n.prototype.hideMessages = function() {
                    this.$results.find(".select2-results__message").remove()
                }, n.prototype.append = function(e) {
                    this.hideLoading();
                    var t = [];
                    if (null != e.results && 0 !== e.results.length) {
                        e.results = this.sort(e.results);
                        for (var n = 0; n < e.results.length; n++) {
                            var i = e.results[n],
                                s = this.option(i);
                            t.push(s)
                        }
                        this.$results.append(t)
                    } else 0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    })
                }, n.prototype.position = function(e, t) {
                    t.find(".select2-results").append(e)
                }, n.prototype.sort = function(e) {
                    return this.options.get("sorter")(e)
                }, n.prototype.highlightFirstItem = function() {
                    var e = this.$results.find(".select2-results__option[aria-selected]"),
                        t = e.filter("[aria-selected=true]");
                    0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                }, n.prototype.setClasses = function() {
                    var n = this;
                    this.data.current((function(i) {
                        var s = e.map(i, (function(e) {
                            return e.id.toString()
                        }));
                        n.$results.find(".select2-results__option[aria-selected]").each((function() {
                            var n = e(this),
                                i = t.GetData(this, "data"),
                                o = "" + i.id;
                            null != i.element && i.element.selected || null == i.element && -1 < e.inArray(o, s) ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false")
                        }))
                    }))
                }, n.prototype.showLoading = function(e) {
                    this.hideLoading();
                    var t = {
                            disabled: !0,
                            loading: !0,
                            text: this.options.get("translations").get("searching")(e)
                        },
                        n = this.option(t);
                    n.className += " loading-results", this.$results.prepend(n)
                }, n.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove()
                }, n.prototype.option = function(n) {
                    var i = document.createElement("li");
                    i.className = "select2-results__option";
                    var s = {
                            role: "option",
                            "aria-selected": "false"
                        },
                        o = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                    for (var r in (null != n.element && o.call(n.element, ":disabled") || null == n.element && n.disabled) && (delete s["aria-selected"], s["aria-disabled"] = "true"), null == n.id && delete s["aria-selected"], null != n._resultId && (i.id = n._resultId), n.title && (i.title = n.title), n.children && (s.role = "group", s["aria-label"] = n.text, delete s["aria-selected"]), s) {
                        var a = s[r];
                        i.setAttribute(r, a)
                    }
                    if (n.children) {
                        var l = e(i),
                            c = document.createElement("strong");
                        c.className = "select2-results__group", e(c), this.template(n, c);
                        for (var d = [], u = 0; u < n.children.length; u++) {
                            var p = n.children[u],
                                h = this.option(p);
                            d.push(h)
                        }
                        var f = e("<ul></ul>", {
                            class: "select2-results__options select2-results__options--nested"
                        });
                        f.append(d), l.append(c), l.append(f)
                    } else this.template(n, i);
                    return t.StoreData(i, "data", n), i
                }, n.prototype.bind = function(n, i) {
                    var s = this,
                        o = n.id + "-results";
                    this.$results.attr("id", o), n.on("results:all", (function(e) {
                        s.clear(), s.append(e.data), n.isOpen() && (s.setClasses(), s.highlightFirstItem())
                    })), n.on("results:append", (function(e) {
                        s.append(e.data), n.isOpen() && s.setClasses()
                    })), n.on("query", (function(e) {
                        s.hideMessages(), s.showLoading(e)
                    })), n.on("select", (function() {
                        n.isOpen() && (s.setClasses(), s.options.get("scrollAfterSelect") && s.highlightFirstItem())
                    })), n.on("unselect", (function() {
                        n.isOpen() && (s.setClasses(), s.options.get("scrollAfterSelect") && s.highlightFirstItem())
                    })), n.on("open", (function() {
                        s.$results.attr("aria-expanded", "true"), s.$results.attr("aria-hidden", "false"), s.setClasses(), s.ensureHighlightVisible()
                    })), n.on("close", (function() {
                        s.$results.attr("aria-expanded", "false"), s.$results.attr("aria-hidden", "true"), s.$results.removeAttr("aria-activedescendant")
                    })), n.on("results:toggle", (function() {
                        var e = s.getHighlightedResults();
                        0 !== e.length && e.trigger("mouseup")
                    })), n.on("results:select", (function() {
                        var e = s.getHighlightedResults();
                        if (0 !== e.length) {
                            var n = t.GetData(e[0], "data");
                            "true" == e.attr("aria-selected") ? s.trigger("close", {}) : s.trigger("select", {
                                data: n
                            })
                        }
                    })), n.on("results:previous", (function() {
                        var e = s.getHighlightedResults(),
                            t = s.$results.find("[aria-selected]"),
                            n = t.index(e);
                        if (!(n <= 0)) {
                            var i = n - 1;
                            0 === e.length && (i = 0);
                            var o = t.eq(i);
                            o.trigger("mouseenter");
                            var r = s.$results.offset().top,
                                a = o.offset().top,
                                l = s.$results.scrollTop() + (a - r);
                            0 === i ? s.$results.scrollTop(0) : a - r < 0 && s.$results.scrollTop(l)
                        }
                    })), n.on("results:next", (function() {
                        var e = s.getHighlightedResults(),
                            t = s.$results.find("[aria-selected]"),
                            n = t.index(e) + 1;
                        if (!(n >= t.length)) {
                            var i = t.eq(n);
                            i.trigger("mouseenter");
                            var o = s.$results.offset().top + s.$results.outerHeight(!1),
                                r = i.offset().top + i.outerHeight(!1),
                                a = s.$results.scrollTop() + r - o;
                            0 === n ? s.$results.scrollTop(0) : o < r && s.$results.scrollTop(a)
                        }
                    })), n.on("results:focus", (function(e) {
                        e.element.addClass("select2-results__option--highlighted")
                    })), n.on("results:message", (function(e) {
                        s.displayMessage(e)
                    })), e.fn.mousewheel && this.$results.on("mousewheel", (function(e) {
                        var t = s.$results.scrollTop(),
                            n = s.$results.get(0).scrollHeight - t + e.deltaY,
                            i = 0 < e.deltaY && t - e.deltaY <= 0,
                            o = e.deltaY < 0 && n <= s.$results.height();
                        i ? (s.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (s.$results.scrollTop(s.$results.get(0).scrollHeight - s.$results.height()), e.preventDefault(), e.stopPropagation())
                    })), this.$results.on("mouseup", ".select2-results__option[aria-selected]", (function(n) {
                        var i = e(this),
                            o = t.GetData(this, "data");
                        "true" !== i.attr("aria-selected") ? s.trigger("select", {
                            originalEvent: n,
                            data: o
                        }) : s.options.get("multiple") ? s.trigger("unselect", {
                            originalEvent: n,
                            data: o
                        }) : s.trigger("close", {})
                    })), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", (function(n) {
                        var i = t.GetData(this, "data");
                        s.getHighlightedResults().removeClass("select2-results__option--highlighted"), s.trigger("results:focus", {
                            data: i,
                            element: e(this)
                        })
                    }))
                }, n.prototype.getHighlightedResults = function() {
                    return this.$results.find(".select2-results__option--highlighted")
                }, n.prototype.destroy = function() {
                    this.$results.remove()
                }, n.prototype.ensureHighlightVisible = function() {
                    var e = this.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = this.$results.find("[aria-selected]").index(e),
                            n = this.$results.offset().top,
                            i = e.offset().top,
                            s = this.$results.scrollTop() + (i - n),
                            o = i - n;
                        s -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(s)
                    }
                }, n.prototype.template = function(t, n) {
                    var i = this.options.get("templateResult"),
                        s = this.options.get("escapeMarkup"),
                        o = i(t, n);
                    null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = s(o) : e(n).append(o)
                }, n
            })), t.define("select2/keys", [], (function() {
                return {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                }
            })), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function(e, t, n) {
                function i(e, t) {
                    this.$element = e, this.options = t, i.__super__.constructor.call(this)
                }
                return t.Extend(i, t.Observable), i.prototype.render = function() {
                    var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0, null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), n.attr("title", this.$element.attr("title")), n.attr("tabindex", this._tabindex), n.attr("aria-disabled", "false"), this.$selection = n
                }, i.prototype.bind = function(e, t) {
                    var i = this,
                        s = e.id + "-results";
                    this.container = e, this.$selection.on("focus", (function(e) {
                        i.trigger("focus", e)
                    })), this.$selection.on("blur", (function(e) {
                        i._handleBlur(e)
                    })), this.$selection.on("keydown", (function(e) {
                        i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                    })), e.on("results:focus", (function(e) {
                        i.$selection.attr("aria-activedescendant", e.data._resultId)
                    })), e.on("selection:update", (function(e) {
                        i.update(e.data)
                    })), e.on("open", (function() {
                        i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", s), i._attachCloseHandler(e)
                    })), e.on("close", (function() {
                        i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.trigger("focus"), i._detachCloseHandler(e)
                    })), e.on("enable", (function() {
                        i.$selection.attr("tabindex", i._tabindex), i.$selection.attr("aria-disabled", "false")
                    })), e.on("disable", (function() {
                        i.$selection.attr("tabindex", "-1"), i.$selection.attr("aria-disabled", "true")
                    }))
                }, i.prototype._handleBlur = function(t) {
                    var n = this;
                    window.setTimeout((function() {
                        document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                    }), 1)
                }, i.prototype._attachCloseHandler = function(n) {
                    e(document.body).on("mousedown.select2." + n.id, (function(n) {
                        var i = e(n.target).closest(".select2");
                        e(".select2.select2-container--open").each((function() {
                            this != i[0] && t.GetData(this, "element").select2("close")
                        }))
                    }))
                }, i.prototype._detachCloseHandler = function(t) {
                    e(document.body).off("mousedown.select2." + t.id)
                }, i.prototype.position = function(e, t) {
                    t.find(".selection").append(e)
                }, i.prototype.destroy = function() {
                    this._detachCloseHandler(this.container)
                }, i.prototype.update = function(e) {
                    throw new Error("The `update` method must be defined in child classes.")
                }, i.prototype.isEnabled = function() {
                    return !this.isDisabled()
                }, i.prototype.isDisabled = function() {
                    return this.options.get("disabled")
                }, i
            })), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function(e, t, n, i) {
                function s() {
                    s.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(s, t), s.prototype.render = function() {
                    var e = s.__super__.render.call(this);
                    return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                }, s.prototype.bind = function(e, t) {
                    var n = this;
                    s.__super__.bind.apply(this, arguments);
                    var i = e.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", (function(e) {
                        1 === e.which && n.trigger("toggle", {
                            originalEvent: e
                        })
                    })), this.$selection.on("focus", (function(e) {})), this.$selection.on("blur", (function(e) {})), e.on("focus", (function(t) {
                        e.isOpen() || n.$selection.trigger("focus")
                    }))
                }, s.prototype.clear = function() {
                    var e = this.$selection.find(".select2-selection__rendered");
                    e.empty(), e.removeAttr("title")
                }, s.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t))
                }, s.prototype.selectionContainer = function() {
                    return e("<span></span>")
                }, s.prototype.update = function(e) {
                    if (0 !== e.length) {
                        var t = e[0],
                            n = this.$selection.find(".select2-selection__rendered"),
                            i = this.display(t, n);
                        n.empty().append(i);
                        var s = t.title || t.text;
                        s ? n.attr("title", s) : n.removeAttr("title")
                    } else this.clear()
                }, s
            })), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function(e, t, n) {
                function i(e, t) {
                    i.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(i, t), i.prototype.render = function() {
                    var e = i.__super__.render.call(this);
                    return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                }, i.prototype.bind = function(t, s) {
                    var o = this;
                    i.__super__.bind.apply(this, arguments), this.$selection.on("click", (function(e) {
                        o.trigger("toggle", {
                            originalEvent: e
                        })
                    })), this.$selection.on("click", ".select2-selection__choice__remove", (function(t) {
                        if (!o.isDisabled()) {
                            var i = e(this).parent(),
                                s = n.GetData(i[0], "data");
                            o.trigger("unselect", {
                                originalEvent: t,
                                data: s
                            })
                        }
                    }))
                }, i.prototype.clear = function() {
                    var e = this.$selection.find(".select2-selection__rendered");
                    e.empty(), e.removeAttr("title")
                }, i.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t))
                }, i.prototype.selectionContainer = function() {
                    return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                }, i.prototype.update = function(e) {
                    if (this.clear(), 0 !== e.length) {
                        for (var t = [], i = 0; i < e.length; i++) {
                            var s = e[i],
                                o = this.selectionContainer(),
                                r = this.display(s, o);
                            o.append(r);
                            var a = s.title || s.text;
                            a && o.attr("title", a), n.StoreData(o[0], "data", s), t.push(o)
                        }
                        var l = this.$selection.find(".select2-selection__rendered");
                        n.appendMany(l, t)
                    }
                }, i
            })), t.define("select2/selection/placeholder", ["../utils"], (function(e) {
                function t(e, t, n) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                }
                return t.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, t.prototype.createPlaceholder = function(e, t) {
                    var n = this.selectionContainer();
                    return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                }, t.prototype.update = function(e, t) {
                    var n = 1 == t.length && t[0].id != this.placeholder.id;
                    if (1 < t.length || n) return e.call(this, t);
                    this.clear();
                    var i = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(i)
                }, t
            })), t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], (function(e, t, n) {
                function i() {}
                return i.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", (function(e) {
                        i._handleClear(e)
                    })), t.on("keypress", (function(e) {
                        i._handleKeyboardClear(e, t)
                    }))
                }, i.prototype._handleClear = function(e, t) {
                    if (!this.isDisabled()) {
                        var i = this.$selection.find(".select2-selection__clear");
                        if (0 !== i.length) {
                            t.stopPropagation();
                            var s = n.GetData(i[0], "data"),
                                o = this.$element.val();
                            this.$element.val(this.placeholder.id);
                            var r = {
                                data: s
                            };
                            if (this.trigger("clear", r), r.prevented) this.$element.val(o);
                            else {
                                for (var a = 0; a < s.length; a++)
                                    if (r = {
                                            data: s[a]
                                        }, this.trigger("unselect", r), r.prevented) return void this.$element.val(o);
                                this.$element.trigger("input").trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }
                }, i.prototype._handleKeyboardClear = function(e, n, i) {
                    i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)
                }, i.prototype.update = function(t, i) {
                    if (t.call(this, i), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === i.length)) {
                        var s = this.options.get("translations").get("removeAllItems"),
                            o = e('<span class="select2-selection__clear" title="' + s() + '">&times;</span>');
                        n.StoreData(o[0], "data", i), this.$selection.find(".select2-selection__rendered").prepend(o)
                    }
                }, i
            })), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function(e, t, n) {
                function i(e, t, n) {
                    e.call(this, t, n)
                }
                return i.prototype.render = function(t) {
                    var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
                    this.$searchContainer = n, this.$search = n.find("input");
                    var i = t.call(this);
                    return this._transferTabIndex(), i
                }, i.prototype.bind = function(e, i, s) {
                    var o = this,
                        r = i.id + "-results";
                    e.call(this, i, s), i.on("open", (function() {
                        o.$search.attr("aria-controls", r), o.$search.trigger("focus")
                    })), i.on("close", (function() {
                        o.$search.val(""), o.$search.removeAttr("aria-controls"), o.$search.removeAttr("aria-activedescendant"), o.$search.trigger("focus")
                    })), i.on("enable", (function() {
                        o.$search.prop("disabled", !1), o._transferTabIndex()
                    })), i.on("disable", (function() {
                        o.$search.prop("disabled", !0)
                    })), i.on("focus", (function(e) {
                        o.$search.trigger("focus")
                    })), i.on("results:focus", (function(e) {
                        e.data._resultId ? o.$search.attr("aria-activedescendant", e.data._resultId) : o.$search.removeAttr("aria-activedescendant")
                    })), this.$selection.on("focusin", ".select2-search--inline", (function(e) {
                        o.trigger("focus", e)
                    })), this.$selection.on("focusout", ".select2-search--inline", (function(e) {
                        o._handleBlur(e)
                    })), this.$selection.on("keydown", ".select2-search--inline", (function(e) {
                        if (e.stopPropagation(), o.trigger("keypress", e), o._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === o.$search.val()) {
                            var i = o.$searchContainer.prev(".select2-selection__choice");
                            if (0 < i.length) {
                                var s = t.GetData(i[0], "data");
                                o.searchRemoveChoice(s), e.preventDefault()
                            }
                        }
                    })), this.$selection.on("click", ".select2-search--inline", (function(e) {
                        o.$search.val() && e.stopPropagation()
                    }));
                    var a = document.documentMode,
                        l = a && a <= 11;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", (function(e) {
                        l ? o.$selection.off("input.search input.searchcheck") : o.$selection.off("keyup.search")
                    })), this.$selection.on("keyup.search input.search", ".select2-search--inline", (function(e) {
                        if (l && "input" === e.type) o.$selection.off("input.search input.searchcheck");
                        else {
                            var t = e.which;
                            t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && o.handleSearch(e)
                        }
                    }))
                }, i.prototype._transferTabIndex = function(e) {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                }, i.prototype.createPlaceholder = function(e, t) {
                    this.$search.attr("placeholder", t.text)
                }, i.prototype.update = function(e, t) {
                    var n = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.trigger("focus")
                }, i.prototype.handleSearch = function() {
                    if (this.resizeSearch(), !this._keyUpPrevented) {
                        var e = this.$search.val();
                        this.trigger("query", {
                            term: e
                        })
                    }
                    this._keyUpPrevented = !1
                }, i.prototype.searchRemoveChoice = function(e, t) {
                    this.trigger("unselect", {
                        data: t
                    }), this.$search.val(t.text), this.handleSearch()
                }, i.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var e = "";
                    e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").width() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", e)
                }, i
            })), t.define("select2/selection/eventRelay", ["jquery"], (function(e) {
                function t() {}
                return t.prototype.bind = function(t, n, i) {
                    var s = this,
                        o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                        r = ["opening", "closing", "selecting", "unselecting", "clearing"];
                    t.call(this, n, i), n.on("*", (function(t, n) {
                        if (-1 !== e.inArray(t, o)) {
                            n = n || {};
                            var i = e.Event("select2:" + t, {
                                params: n
                            });
                            s.$element.trigger(i), -1 !== e.inArray(t, r) && (n.prevented = i.isDefaultPrevented())
                        }
                    }))
                }, t
            })), t.define("select2/translation", ["jquery", "require"], (function(e, t) {
                function n(e) {
                    this.dict = e || {}
                }
                return n.prototype.all = function() {
                    return this.dict
                }, n.prototype.get = function(e) {
                    return this.dict[e]
                }, n.prototype.extend = function(t) {
                    this.dict = e.extend({}, t.all(), this.dict)
                }, n._cache = {}, n.loadPath = function(e) {
                    if (!(e in n._cache)) {
                        var i = t(e);
                        n._cache[e] = i
                    }
                    return new n(n._cache[e])
                }, n
            })), t.define("select2/diacritics", [], (function() {
                return {
                    "Ⓐ": "A",
                    "Ａ": "A",
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ầ": "A",
                    "Ấ": "A",
                    "Ẫ": "A",
                    "Ẩ": "A",
                    "Ã": "A",
                    "Ā": "A",
                    "Ă": "A",
                    "Ằ": "A",
                    "Ắ": "A",
                    "Ẵ": "A",
                    "Ẳ": "A",
                    "Ȧ": "A",
                    "Ǡ": "A",
                    "Ä": "A",
                    "Ǟ": "A",
                    "Ả": "A",
                    "Å": "A",
                    "Ǻ": "A",
                    "Ǎ": "A",
                    "Ȁ": "A",
                    "Ȃ": "A",
                    "Ạ": "A",
                    "Ậ": "A",
                    "Ặ": "A",
                    "Ḁ": "A",
                    "Ą": "A",
                    "Ⱥ": "A",
                    "Ɐ": "A",
                    "Ꜳ": "AA",
                    "Æ": "AE",
                    "Ǽ": "AE",
                    "Ǣ": "AE",
                    "Ꜵ": "AO",
                    "Ꜷ": "AU",
                    "Ꜹ": "AV",
                    "Ꜻ": "AV",
                    "Ꜽ": "AY",
                    "Ⓑ": "B",
                    "Ｂ": "B",
                    "Ḃ": "B",
                    "Ḅ": "B",
                    "Ḇ": "B",
                    "Ƀ": "B",
                    "Ƃ": "B",
                    "Ɓ": "B",
                    "Ⓒ": "C",
                    "Ｃ": "C",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "Ç": "C",
                    "Ḉ": "C",
                    "Ƈ": "C",
                    "Ȼ": "C",
                    "Ꜿ": "C",
                    "Ⓓ": "D",
                    "Ｄ": "D",
                    "Ḋ": "D",
                    "Ď": "D",
                    "Ḍ": "D",
                    "Ḑ": "D",
                    "Ḓ": "D",
                    "Ḏ": "D",
                    "Đ": "D",
                    "Ƌ": "D",
                    "Ɗ": "D",
                    "Ɖ": "D",
                    "Ꝺ": "D",
                    "Ǳ": "DZ",
                    "Ǆ": "DZ",
                    "ǲ": "Dz",
                    "ǅ": "Dz",
                    "Ⓔ": "E",
                    "Ｅ": "E",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ề": "E",
                    "Ế": "E",
                    "Ễ": "E",
                    "Ể": "E",
                    "Ẽ": "E",
                    "Ē": "E",
                    "Ḕ": "E",
                    "Ḗ": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ë": "E",
                    "Ẻ": "E",
                    "Ě": "E",
                    "Ȅ": "E",
                    "Ȇ": "E",
                    "Ẹ": "E",
                    "Ệ": "E",
                    "Ȩ": "E",
                    "Ḝ": "E",
                    "Ę": "E",
                    "Ḙ": "E",
                    "Ḛ": "E",
                    "Ɛ": "E",
                    "Ǝ": "E",
                    "Ⓕ": "F",
                    "Ｆ": "F",
                    "Ḟ": "F",
                    "Ƒ": "F",
                    "Ꝼ": "F",
                    "Ⓖ": "G",
                    "Ｇ": "G",
                    "Ǵ": "G",
                    "Ĝ": "G",
                    "Ḡ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ǧ": "G",
                    "Ģ": "G",
                    "Ǥ": "G",
                    "Ɠ": "G",
                    "Ꞡ": "G",
                    "Ᵹ": "G",
                    "Ꝿ": "G",
                    "Ⓗ": "H",
                    "Ｈ": "H",
                    "Ĥ": "H",
                    "Ḣ": "H",
                    "Ḧ": "H",
                    "Ȟ": "H",
                    "Ḥ": "H",
                    "Ḩ": "H",
                    "Ḫ": "H",
                    "Ħ": "H",
                    "Ⱨ": "H",
                    "Ⱶ": "H",
                    "Ɥ": "H",
                    "Ⓘ": "I",
                    "Ｉ": "I",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "İ": "I",
                    "Ï": "I",
                    "Ḯ": "I",
                    "Ỉ": "I",
                    "Ǐ": "I",
                    "Ȉ": "I",
                    "Ȋ": "I",
                    "Ị": "I",
                    "Į": "I",
                    "Ḭ": "I",
                    "Ɨ": "I",
                    "Ⓙ": "J",
                    "Ｊ": "J",
                    "Ĵ": "J",
                    "Ɉ": "J",
                    "Ⓚ": "K",
                    "Ｋ": "K",
                    "Ḱ": "K",
                    "Ǩ": "K",
                    "Ḳ": "K",
                    "Ķ": "K",
                    "Ḵ": "K",
                    "Ƙ": "K",
                    "Ⱪ": "K",
                    "Ꝁ": "K",
                    "Ꝃ": "K",
                    "Ꝅ": "K",
                    "Ꞣ": "K",
                    "Ⓛ": "L",
                    "Ｌ": "L",
                    "Ŀ": "L",
                    "Ĺ": "L",
                    "Ľ": "L",
                    "Ḷ": "L",
                    "Ḹ": "L",
                    "Ļ": "L",
                    "Ḽ": "L",
                    "Ḻ": "L",
                    "Ł": "L",
                    "Ƚ": "L",
                    "Ɫ": "L",
                    "Ⱡ": "L",
                    "Ꝉ": "L",
                    "Ꝇ": "L",
                    "Ꞁ": "L",
                    "Ǉ": "LJ",
                    "ǈ": "Lj",
                    "Ⓜ": "M",
                    "Ｍ": "M",
                    "Ḿ": "M",
                    "Ṁ": "M",
                    "Ṃ": "M",
                    "Ɱ": "M",
                    "Ɯ": "M",
                    "Ⓝ": "N",
                    "Ｎ": "N",
                    "Ǹ": "N",
                    "Ń": "N",
                    "Ñ": "N",
                    "Ṅ": "N",
                    "Ň": "N",
                    "Ṇ": "N",
                    "Ņ": "N",
                    "Ṋ": "N",
                    "Ṉ": "N",
                    "Ƞ": "N",
                    "Ɲ": "N",
                    "Ꞑ": "N",
                    "Ꞥ": "N",
                    "Ǌ": "NJ",
                    "ǋ": "Nj",
                    "Ⓞ": "O",
                    "Ｏ": "O",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Ồ": "O",
                    "Ố": "O",
                    "Ỗ": "O",
                    "Ổ": "O",
                    "Õ": "O",
                    "Ṍ": "O",
                    "Ȭ": "O",
                    "Ṏ": "O",
                    "Ō": "O",
                    "Ṑ": "O",
                    "Ṓ": "O",
                    "Ŏ": "O",
                    "Ȯ": "O",
                    "Ȱ": "O",
                    "Ö": "O",
                    "Ȫ": "O",
                    "Ỏ": "O",
                    "Ő": "O",
                    "Ǒ": "O",
                    "Ȍ": "O",
                    "Ȏ": "O",
                    "Ơ": "O",
                    "Ờ": "O",
                    "Ớ": "O",
                    "Ỡ": "O",
                    "Ở": "O",
                    "Ợ": "O",
                    "Ọ": "O",
                    "Ộ": "O",
                    "Ǫ": "O",
                    "Ǭ": "O",
                    "Ø": "O",
                    "Ǿ": "O",
                    "Ɔ": "O",
                    "Ɵ": "O",
                    "Ꝋ": "O",
                    "Ꝍ": "O",
                    "Œ": "OE",
                    "Ƣ": "OI",
                    "Ꝏ": "OO",
                    "Ȣ": "OU",
                    "Ⓟ": "P",
                    "Ｐ": "P",
                    "Ṕ": "P",
                    "Ṗ": "P",
                    "Ƥ": "P",
                    "Ᵽ": "P",
                    "Ꝑ": "P",
                    "Ꝓ": "P",
                    "Ꝕ": "P",
                    "Ⓠ": "Q",
                    "Ｑ": "Q",
                    "Ꝗ": "Q",
                    "Ꝙ": "Q",
                    "Ɋ": "Q",
                    "Ⓡ": "R",
                    "Ｒ": "R",
                    "Ŕ": "R",
                    "Ṙ": "R",
                    "Ř": "R",
                    "Ȑ": "R",
                    "Ȓ": "R",
                    "Ṛ": "R",
                    "Ṝ": "R",
                    "Ŗ": "R",
                    "Ṟ": "R",
                    "Ɍ": "R",
                    "Ɽ": "R",
                    "Ꝛ": "R",
                    "Ꞧ": "R",
                    "Ꞃ": "R",
                    "Ⓢ": "S",
                    "Ｓ": "S",
                    "ẞ": "S",
                    "Ś": "S",
                    "Ṥ": "S",
                    "Ŝ": "S",
                    "Ṡ": "S",
                    "Š": "S",
                    "Ṧ": "S",
                    "Ṣ": "S",
                    "Ṩ": "S",
                    "Ș": "S",
                    "Ş": "S",
                    "Ȿ": "S",
                    "Ꞩ": "S",
                    "Ꞅ": "S",
                    "Ⓣ": "T",
                    "Ｔ": "T",
                    "Ṫ": "T",
                    "Ť": "T",
                    "Ṭ": "T",
                    "Ț": "T",
                    "Ţ": "T",
                    "Ṱ": "T",
                    "Ṯ": "T",
                    "Ŧ": "T",
                    "Ƭ": "T",
                    "Ʈ": "T",
                    "Ⱦ": "T",
                    "Ꞇ": "T",
                    "Ꜩ": "TZ",
                    "Ⓤ": "U",
                    "Ｕ": "U",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ũ": "U",
                    "Ṹ": "U",
                    "Ū": "U",
                    "Ṻ": "U",
                    "Ŭ": "U",
                    "Ü": "U",
                    "Ǜ": "U",
                    "Ǘ": "U",
                    "Ǖ": "U",
                    "Ǚ": "U",
                    "Ủ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ǔ": "U",
                    "Ȕ": "U",
                    "Ȗ": "U",
                    "Ư": "U",
                    "Ừ": "U",
                    "Ứ": "U",
                    "Ữ": "U",
                    "Ử": "U",
                    "Ự": "U",
                    "Ụ": "U",
                    "Ṳ": "U",
                    "Ų": "U",
                    "Ṷ": "U",
                    "Ṵ": "U",
                    "Ʉ": "U",
                    "Ⓥ": "V",
                    "Ｖ": "V",
                    "Ṽ": "V",
                    "Ṿ": "V",
                    "Ʋ": "V",
                    "Ꝟ": "V",
                    "Ʌ": "V",
                    "Ꝡ": "VY",
                    "Ⓦ": "W",
                    "Ｗ": "W",
                    "Ẁ": "W",
                    "Ẃ": "W",
                    "Ŵ": "W",
                    "Ẇ": "W",
                    "Ẅ": "W",
                    "Ẉ": "W",
                    "Ⱳ": "W",
                    "Ⓧ": "X",
                    "Ｘ": "X",
                    "Ẋ": "X",
                    "Ẍ": "X",
                    "Ⓨ": "Y",
                    "Ｙ": "Y",
                    "Ỳ": "Y",
                    "Ý": "Y",
                    "Ŷ": "Y",
                    "Ỹ": "Y",
                    "Ȳ": "Y",
                    "Ẏ": "Y",
                    "Ÿ": "Y",
                    "Ỷ": "Y",
                    "Ỵ": "Y",
                    "Ƴ": "Y",
                    "Ɏ": "Y",
                    "Ỿ": "Y",
                    "Ⓩ": "Z",
                    "Ｚ": "Z",
                    "Ź": "Z",
                    "Ẑ": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "Ẓ": "Z",
                    "Ẕ": "Z",
                    "Ƶ": "Z",
                    "Ȥ": "Z",
                    "Ɀ": "Z",
                    "Ⱬ": "Z",
                    "Ꝣ": "Z",
                    "ⓐ": "a",
                    "ａ": "a",
                    "ẚ": "a",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ầ": "a",
                    "ấ": "a",
                    "ẫ": "a",
                    "ẩ": "a",
                    "ã": "a",
                    "ā": "a",
                    "ă": "a",
                    "ằ": "a",
                    "ắ": "a",
                    "ẵ": "a",
                    "ẳ": "a",
                    "ȧ": "a",
                    "ǡ": "a",
                    "ä": "a",
                    "ǟ": "a",
                    "ả": "a",
                    "å": "a",
                    "ǻ": "a",
                    "ǎ": "a",
                    "ȁ": "a",
                    "ȃ": "a",
                    "ạ": "a",
                    "ậ": "a",
                    "ặ": "a",
                    "ḁ": "a",
                    "ą": "a",
                    "ⱥ": "a",
                    "ɐ": "a",
                    "ꜳ": "aa",
                    "æ": "ae",
                    "ǽ": "ae",
                    "ǣ": "ae",
                    "ꜵ": "ao",
                    "ꜷ": "au",
                    "ꜹ": "av",
                    "ꜻ": "av",
                    "ꜽ": "ay",
                    "ⓑ": "b",
                    "ｂ": "b",
                    "ḃ": "b",
                    "ḅ": "b",
                    "ḇ": "b",
                    "ƀ": "b",
                    "ƃ": "b",
                    "ɓ": "b",
                    "ⓒ": "c",
                    "ｃ": "c",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "ç": "c",
                    "ḉ": "c",
                    "ƈ": "c",
                    "ȼ": "c",
                    "ꜿ": "c",
                    "ↄ": "c",
                    "ⓓ": "d",
                    "ｄ": "d",
                    "ḋ": "d",
                    "ď": "d",
                    "ḍ": "d",
                    "ḑ": "d",
                    "ḓ": "d",
                    "ḏ": "d",
                    "đ": "d",
                    "ƌ": "d",
                    "ɖ": "d",
                    "ɗ": "d",
                    "ꝺ": "d",
                    "ǳ": "dz",
                    "ǆ": "dz",
                    "ⓔ": "e",
                    "ｅ": "e",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ề": "e",
                    "ế": "e",
                    "ễ": "e",
                    "ể": "e",
                    "ẽ": "e",
                    "ē": "e",
                    "ḕ": "e",
                    "ḗ": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ë": "e",
                    "ẻ": "e",
                    "ě": "e",
                    "ȅ": "e",
                    "ȇ": "e",
                    "ẹ": "e",
                    "ệ": "e",
                    "ȩ": "e",
                    "ḝ": "e",
                    "ę": "e",
                    "ḙ": "e",
                    "ḛ": "e",
                    "ɇ": "e",
                    "ɛ": "e",
                    "ǝ": "e",
                    "ⓕ": "f",
                    "ｆ": "f",
                    "ḟ": "f",
                    "ƒ": "f",
                    "ꝼ": "f",
                    "ⓖ": "g",
                    "ｇ": "g",
                    "ǵ": "g",
                    "ĝ": "g",
                    "ḡ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ǧ": "g",
                    "ģ": "g",
                    "ǥ": "g",
                    "ɠ": "g",
                    "ꞡ": "g",
                    "ᵹ": "g",
                    "ꝿ": "g",
                    "ⓗ": "h",
                    "ｈ": "h",
                    "ĥ": "h",
                    "ḣ": "h",
                    "ḧ": "h",
                    "ȟ": "h",
                    "ḥ": "h",
                    "ḩ": "h",
                    "ḫ": "h",
                    "ẖ": "h",
                    "ħ": "h",
                    "ⱨ": "h",
                    "ⱶ": "h",
                    "ɥ": "h",
                    "ƕ": "hv",
                    "ⓘ": "i",
                    "ｉ": "i",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "ï": "i",
                    "ḯ": "i",
                    "ỉ": "i",
                    "ǐ": "i",
                    "ȉ": "i",
                    "ȋ": "i",
                    "ị": "i",
                    "į": "i",
                    "ḭ": "i",
                    "ɨ": "i",
                    "ı": "i",
                    "ⓙ": "j",
                    "ｊ": "j",
                    "ĵ": "j",
                    "ǰ": "j",
                    "ɉ": "j",
                    "ⓚ": "k",
                    "ｋ": "k",
                    "ḱ": "k",
                    "ǩ": "k",
                    "ḳ": "k",
                    "ķ": "k",
                    "ḵ": "k",
                    "ƙ": "k",
                    "ⱪ": "k",
                    "ꝁ": "k",
                    "ꝃ": "k",
                    "ꝅ": "k",
                    "ꞣ": "k",
                    "ⓛ": "l",
                    "ｌ": "l",
                    "ŀ": "l",
                    "ĺ": "l",
                    "ľ": "l",
                    "ḷ": "l",
                    "ḹ": "l",
                    "ļ": "l",
                    "ḽ": "l",
                    "ḻ": "l",
                    "ſ": "l",
                    "ł": "l",
                    "ƚ": "l",
                    "ɫ": "l",
                    "ⱡ": "l",
                    "ꝉ": "l",
                    "ꞁ": "l",
                    "ꝇ": "l",
                    "ǉ": "lj",
                    "ⓜ": "m",
                    "ｍ": "m",
                    "ḿ": "m",
                    "ṁ": "m",
                    "ṃ": "m",
                    "ɱ": "m",
                    "ɯ": "m",
                    "ⓝ": "n",
                    "ｎ": "n",
                    "ǹ": "n",
                    "ń": "n",
                    "ñ": "n",
                    "ṅ": "n",
                    "ň": "n",
                    "ṇ": "n",
                    "ņ": "n",
                    "ṋ": "n",
                    "ṉ": "n",
                    "ƞ": "n",
                    "ɲ": "n",
                    "ŉ": "n",
                    "ꞑ": "n",
                    "ꞥ": "n",
                    "ǌ": "nj",
                    "ⓞ": "o",
                    "ｏ": "o",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "ồ": "o",
                    "ố": "o",
                    "ỗ": "o",
                    "ổ": "o",
                    "õ": "o",
                    "ṍ": "o",
                    "ȭ": "o",
                    "ṏ": "o",
                    "ō": "o",
                    "ṑ": "o",
                    "ṓ": "o",
                    "ŏ": "o",
                    "ȯ": "o",
                    "ȱ": "o",
                    "ö": "o",
                    "ȫ": "o",
                    "ỏ": "o",
                    "ő": "o",
                    "ǒ": "o",
                    "ȍ": "o",
                    "ȏ": "o",
                    "ơ": "o",
                    "ờ": "o",
                    "ớ": "o",
                    "ỡ": "o",
                    "ở": "o",
                    "ợ": "o",
                    "ọ": "o",
                    "ộ": "o",
                    "ǫ": "o",
                    "ǭ": "o",
                    "ø": "o",
                    "ǿ": "o",
                    "ɔ": "o",
                    "ꝋ": "o",
                    "ꝍ": "o",
                    "ɵ": "o",
                    "œ": "oe",
                    "ƣ": "oi",
                    "ȣ": "ou",
                    "ꝏ": "oo",
                    "ⓟ": "p",
                    "ｐ": "p",
                    "ṕ": "p",
                    "ṗ": "p",
                    "ƥ": "p",
                    "ᵽ": "p",
                    "ꝑ": "p",
                    "ꝓ": "p",
                    "ꝕ": "p",
                    "ⓠ": "q",
                    "ｑ": "q",
                    "ɋ": "q",
                    "ꝗ": "q",
                    "ꝙ": "q",
                    "ⓡ": "r",
                    "ｒ": "r",
                    "ŕ": "r",
                    "ṙ": "r",
                    "ř": "r",
                    "ȑ": "r",
                    "ȓ": "r",
                    "ṛ": "r",
                    "ṝ": "r",
                    "ŗ": "r",
                    "ṟ": "r",
                    "ɍ": "r",
                    "ɽ": "r",
                    "ꝛ": "r",
                    "ꞧ": "r",
                    "ꞃ": "r",
                    "ⓢ": "s",
                    "ｓ": "s",
                    "ß": "s",
                    "ś": "s",
                    "ṥ": "s",
                    "ŝ": "s",
                    "ṡ": "s",
                    "š": "s",
                    "ṧ": "s",
                    "ṣ": "s",
                    "ṩ": "s",
                    "ș": "s",
                    "ş": "s",
                    "ȿ": "s",
                    "ꞩ": "s",
                    "ꞅ": "s",
                    "ẛ": "s",
                    "ⓣ": "t",
                    "ｔ": "t",
                    "ṫ": "t",
                    "ẗ": "t",
                    "ť": "t",
                    "ṭ": "t",
                    "ț": "t",
                    "ţ": "t",
                    "ṱ": "t",
                    "ṯ": "t",
                    "ŧ": "t",
                    "ƭ": "t",
                    "ʈ": "t",
                    "ⱦ": "t",
                    "ꞇ": "t",
                    "ꜩ": "tz",
                    "ⓤ": "u",
                    "ｕ": "u",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ũ": "u",
                    "ṹ": "u",
                    "ū": "u",
                    "ṻ": "u",
                    "ŭ": "u",
                    "ü": "u",
                    "ǜ": "u",
                    "ǘ": "u",
                    "ǖ": "u",
                    "ǚ": "u",
                    "ủ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ǔ": "u",
                    "ȕ": "u",
                    "ȗ": "u",
                    "ư": "u",
                    "ừ": "u",
                    "ứ": "u",
                    "ữ": "u",
                    "ử": "u",
                    "ự": "u",
                    "ụ": "u",
                    "ṳ": "u",
                    "ų": "u",
                    "ṷ": "u",
                    "ṵ": "u",
                    "ʉ": "u",
                    "ⓥ": "v",
                    "ｖ": "v",
                    "ṽ": "v",
                    "ṿ": "v",
                    "ʋ": "v",
                    "ꝟ": "v",
                    "ʌ": "v",
                    "ꝡ": "vy",
                    "ⓦ": "w",
                    "ｗ": "w",
                    "ẁ": "w",
                    "ẃ": "w",
                    "ŵ": "w",
                    "ẇ": "w",
                    "ẅ": "w",
                    "ẘ": "w",
                    "ẉ": "w",
                    "ⱳ": "w",
                    "ⓧ": "x",
                    "ｘ": "x",
                    "ẋ": "x",
                    "ẍ": "x",
                    "ⓨ": "y",
                    "ｙ": "y",
                    "ỳ": "y",
                    "ý": "y",
                    "ŷ": "y",
                    "ỹ": "y",
                    "ȳ": "y",
                    "ẏ": "y",
                    "ÿ": "y",
                    "ỷ": "y",
                    "ẙ": "y",
                    "ỵ": "y",
                    "ƴ": "y",
                    "ɏ": "y",
                    "ỿ": "y",
                    "ⓩ": "z",
                    "ｚ": "z",
                    "ź": "z",
                    "ẑ": "z",
                    "ż": "z",
                    "ž": "z",
                    "ẓ": "z",
                    "ẕ": "z",
                    "ƶ": "z",
                    "ȥ": "z",
                    "ɀ": "z",
                    "ⱬ": "z",
                    "ꝣ": "z",
                    "Ά": "Α",
                    "Έ": "Ε",
                    "Ή": "Η",
                    "Ί": "Ι",
                    "Ϊ": "Ι",
                    "Ό": "Ο",
                    "Ύ": "Υ",
                    "Ϋ": "Υ",
                    "Ώ": "Ω",
                    "ά": "α",
                    "έ": "ε",
                    "ή": "η",
                    "ί": "ι",
                    "ϊ": "ι",
                    "ΐ": "ι",
                    "ό": "ο",
                    "ύ": "υ",
                    "ϋ": "υ",
                    "ΰ": "υ",
                    "ώ": "ω",
                    "ς": "σ",
                    "’": "'"
                }
            })), t.define("select2/data/base", ["../utils"], (function(e) {
                function t(e, n) {
                    t.__super__.constructor.call(this)
                }
                return e.Extend(t, e.Observable), t.prototype.current = function(e) {
                    throw new Error("The `current` method must be defined in child classes.")
                }, t.prototype.query = function(e, t) {
                    throw new Error("The `query` method must be defined in child classes.")
                }, t.prototype.bind = function(e, t) {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, n) {
                    var i = t.id + "-result-";
                    return i += e.generateChars(4), null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4), i
                }, t
            })), t.define("select2/data/select", ["./base", "../utils", "jquery"], (function(e, t, n) {
                function i(e, t) {
                    this.$element = e, this.options = t, i.__super__.constructor.call(this)
                }
                return t.Extend(i, e), i.prototype.current = function(e) {
                    var t = [],
                        i = this;
                    this.$element.find(":selected").each((function() {
                        var e = n(this),
                            s = i.item(e);
                        t.push(s)
                    })), e(t)
                }, i.prototype.select = function(e) {
                    var t = this;
                    if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("input").trigger("change");
                    if (this.$element.prop("multiple")) this.current((function(i) {
                        var s = [];
                        (e = [e]).push.apply(e, i);
                        for (var o = 0; o < e.length; o++) {
                            var r = e[o].id; - 1 === n.inArray(r, s) && s.push(r)
                        }
                        t.$element.val(s), t.$element.trigger("input").trigger("change")
                    }));
                    else {
                        var i = e.id;
                        this.$element.val(i), this.$element.trigger("input").trigger("change")
                    }
                }, i.prototype.unselect = function(e) {
                    var t = this;
                    if (this.$element.prop("multiple")) {
                        if (e.selected = !1, n(e.element).is("option")) return e.element.selected = !1, void this.$element.trigger("input").trigger("change");
                        this.current((function(i) {
                            for (var s = [], o = 0; o < i.length; o++) {
                                var r = i[o].id;
                                r !== e.id && -1 === n.inArray(r, s) && s.push(r)
                            }
                            t.$element.val(s), t.$element.trigger("input").trigger("change")
                        }))
                    }
                }, i.prototype.bind = function(e, t) {
                    var n = this;
                    (this.container = e).on("select", (function(e) {
                        n.select(e.data)
                    })), e.on("unselect", (function(e) {
                        n.unselect(e.data)
                    }))
                }, i.prototype.destroy = function() {
                    this.$element.find("*").each((function() {
                        t.RemoveData(this)
                    }))
                }, i.prototype.query = function(e, t) {
                    var i = [],
                        s = this;
                    this.$element.children().each((function() {
                        var t = n(this);
                        if (t.is("option") || t.is("optgroup")) {
                            var o = s.item(t),
                                r = s.matches(e, o);
                            null !== r && i.push(r)
                        }
                    })), t({
                        results: i
                    })
                }, i.prototype.addOptions = function(e) {
                    t.appendMany(this.$element, e)
                }, i.prototype.option = function(e) {
                    var i;
                    e.children ? (i = document.createElement("optgroup")).label = e.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = e.text : i.innerText = e.text, void 0 !== e.id && (i.value = e.id), e.disabled && (i.disabled = !0), e.selected && (i.selected = !0), e.title && (i.title = e.title);
                    var s = n(i),
                        o = this._normalizeItem(e);
                    return o.element = i, t.StoreData(i, "data", o), s
                }, i.prototype.item = function(e) {
                    var i = {};
                    if (null != (i = t.GetData(e[0], "data"))) return i;
                    if (e.is("option")) i = {
                        id: e.val(),
                        text: e.text(),
                        disabled: e.prop("disabled"),
                        selected: e.prop("selected"),
                        title: e.prop("title")
                    };
                    else if (e.is("optgroup")) {
                        i = {
                            text: e.prop("label"),
                            children: [],
                            title: e.prop("title")
                        };
                        for (var s = e.children("option"), o = [], r = 0; r < s.length; r++) {
                            var a = n(s[r]),
                                l = this.item(a);
                            o.push(l)
                        }
                        i.children = o
                    }
                    return (i = this._normalizeItem(i)).element = e[0], t.StoreData(e[0], "data", i), i
                }, i.prototype._normalizeItem = function(e) {
                    return e !== Object(e) && (e = {
                        id: e,
                        text: e
                    }), null != (e = n.extend({}, {
                        text: ""
                    }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, {
                        selected: !1,
                        disabled: !1
                    }, e)
                }, i.prototype.matches = function(e, t) {
                    return this.options.get("matcher")(e, t)
                }, i
            })), t.define("select2/data/array", ["./select", "../utils", "jquery"], (function(e, t, n) {
                function i(e, t) {
                    this._dataToConvert = t.get("data") || [], i.__super__.constructor.call(this, e, t)
                }
                return t.Extend(i, e), i.prototype.bind = function(e, t) {
                    i.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert))
                }, i.prototype.select = function(e) {
                    var t = this.$element.find("option").filter((function(t, n) {
                        return n.value == e.id.toString()
                    }));
                    0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
                }, i.prototype.convertToOptions = function(e) {
                    var i = this,
                        s = this.$element.find("option"),
                        o = s.map((function() {
                            return i.item(n(this)).id
                        })).get(),
                        r = [];

                    function a(e) {
                        return function() {
                            return n(this).val() == e.id
                        }
                    }
                    for (var l = 0; l < e.length; l++) {
                        var c = this._normalizeItem(e[l]);
                        if (0 <= n.inArray(c.id, o)) {
                            var d = s.filter(a(c)),
                                u = this.item(d),
                                p = n.extend(!0, {}, c, u),
                                h = this.option(p);
                            d.replaceWith(h)
                        } else {
                            var f = this.option(c);
                            if (c.children) {
                                var m = this.convertToOptions(c.children);
                                t.appendMany(f, m)
                            }
                            r.push(f)
                        }
                    }
                    return r
                }, i
            })), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function(e, t, n) {
                function i(e, t) {
                    this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)
                }
                return t.Extend(i, e), i.prototype._applyDefaults = function(e) {
                    var t = {
                        data: function(e) {
                            return n.extend({}, e, {
                                q: e.term
                            })
                        },
                        transport: function(e, t, i) {
                            var s = n.ajax(e);
                            return s.then(t), s.fail(i), s
                        }
                    };
                    return n.extend({}, t, e, !0)
                }, i.prototype.processResults = function(e) {
                    return e
                }, i.prototype.query = function(e, t) {
                    var i = this;
                    null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    var s = n.extend({
                        type: "GET"
                    }, this.ajaxOptions);

                    function o() {
                        var o = s.transport(s, (function(s) {
                            var o = i.processResults(s, e);
                            i.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(o)
                        }), (function() {
                            "status" in o && (0 === o.status || "0" === o.status) || i.trigger("results:message", {
                                message: "errorLoading"
                            })
                        }));
                        i._request = o
                    }
                    "function" == typeof s.url && (s.url = s.url.call(this.$element, e)), "function" == typeof s.data && (s.data = s.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(o, this.ajaxOptions.delay)) : o()
                }, i
            })), t.define("select2/data/tags", ["jquery"], (function(e) {
                function t(t, n, i) {
                    var s = i.get("tags"),
                        o = i.get("createTag");
                    void 0 !== o && (this.createTag = o);
                    var r = i.get("insertTag");
                    if (void 0 !== r && (this.insertTag = r), t.call(this, n, i), e.isArray(s))
                        for (var a = 0; a < s.length; a++) {
                            var l = s[a],
                                c = this._normalizeItem(l),
                                d = this.option(c);
                            this.$element.append(d)
                        }
                }
                return t.prototype.query = function(e, t, n) {
                    var i = this;
                    this._removeOldTags(), null != t.term && null == t.page ? e.call(this, t, (function e(s, o) {
                        for (var r = s.results, a = 0; a < r.length; a++) {
                            var l = r[a],
                                c = null != l.children && !e({
                                    results: l.children
                                }, !0);
                            if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || c) return !o && (s.data = r, void n(s))
                        }
                        if (o) return !0;
                        var d = i.createTag(t);
                        if (null != d) {
                            var u = i.option(d);
                            u.attr("data-select2-tag", !0), i.addOptions([u]), i.insertTag(r, d)
                        }
                        s.results = r, n(s)
                    })) : e.call(this, t, n)
                }, t.prototype.createTag = function(t, n) {
                    var i = e.trim(n.term);
                    return "" === i ? null : {
                        id: i,
                        text: i
                    }
                }, t.prototype.insertTag = function(e, t, n) {
                    t.unshift(n)
                }, t.prototype._removeOldTags = function(t) {
                    this.$element.find("option[data-select2-tag]").each((function() {
                        this.selected || e(this).remove()
                    }))
                }, t
            })), t.define("select2/data/tokenizer", ["jquery"], (function(e) {
                function t(e, t, n) {
                    var i = n.get("tokenizer");
                    void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
                }
                return t.prototype.bind = function(e, t, n) {
                    e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                }, t.prototype.query = function(t, n, i) {
                    var s = this;
                    n.term = n.term || "";
                    var o = this.tokenizer(n, this.options, (function(t) {
                        var n, i = s._normalizeItem(t);
                        if (!s.$element.find("option").filter((function() {
                                return e(this).val() === i.id
                            })).length) {
                            var o = s.option(i);
                            o.attr("data-select2-tag", !0), s._removeOldTags(), s.addOptions([o])
                        }
                        n = i, s.trigger("select", {
                            data: n
                        })
                    }));
                    o.term !== n.term && (this.$search.length && (this.$search.val(o.term), this.$search.trigger("focus")), n.term = o.term), t.call(this, n, i)
                }, t.prototype.tokenizer = function(t, n, i, s) {
                    for (var o = i.get("tokenSeparators") || [], r = n.term, a = 0, l = this.createTag || function(e) {
                            return {
                                id: e.term,
                                text: e.term
                            }
                        }; a < r.length;) {
                        var c = r[a];
                        if (-1 !== e.inArray(c, o)) {
                            var d = r.substr(0, a),
                                u = l(e.extend({}, n, {
                                    term: d
                                }));
                            null != u ? (s(u), r = r.substr(a + 1) || "", a = 0) : a++
                        } else a++
                    }
                    return {
                        term: r
                    }
                }, t
            })), t.define("select2/data/minimumInputLength", [], (function() {
                function e(e, t, n) {
                    this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : e.call(this, t, n)
                }, e
            })), t.define("select2/data/maximumInputLength", [], (function() {
                function e(e, t, n) {
                    this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : e.call(this, t, n)
                }, e
            })), t.define("select2/data/maximumSelectionLength", [], (function() {
                function e(e, t, n) {
                    this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                }
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("select", (function() {
                        i._checkIfMaximumSelected()
                    }))
                }, e.prototype.query = function(e, t, n) {
                    var i = this;
                    this._checkIfMaximumSelected((function() {
                        e.call(i, t, n)
                    }))
                }, e.prototype._checkIfMaximumSelected = function(e, t) {
                    var n = this;
                    this.current((function(e) {
                        var i = null != e ? e.length : 0;
                        0 < n.maximumSelectionLength && i >= n.maximumSelectionLength ? n.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: n.maximumSelectionLength
                            }
                        }) : t && t()
                    }))
                }, e
            })), t.define("select2/dropdown", ["jquery", "./utils"], (function(e, t) {
                function n(e, t) {
                    this.$element = e, this.options = t, n.__super__.constructor.call(this)
                }
                return t.Extend(n, t.Observable), n.prototype.render = function() {
                    var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return t.attr("dir", this.options.get("dir")), this.$dropdown = t
                }, n.prototype.bind = function() {}, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() {
                    this.$dropdown.remove()
                }, n
            })), t.define("select2/dropdown/search", ["jquery", "../utils"], (function(e, t) {
                function n() {}
                return n.prototype.render = function(t) {
                    var n = t.call(this),
                        i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                    return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
                }, n.prototype.bind = function(t, n, i) {
                    var s = this,
                        o = n.id + "-results";
                    t.call(this, n, i), this.$search.on("keydown", (function(e) {
                        s.trigger("keypress", e), s._keyUpPrevented = e.isDefaultPrevented()
                    })), this.$search.on("input", (function(t) {
                        e(this).off("keyup")
                    })), this.$search.on("keyup input", (function(e) {
                        s.handleSearch(e)
                    })), n.on("open", (function() {
                        s.$search.attr("tabindex", 0), s.$search.attr("aria-controls", o), s.$search.trigger("focus"), window.setTimeout((function() {
                            s.$search.trigger("focus")
                        }), 0)
                    })), n.on("close", (function() {
                        s.$search.attr("tabindex", -1), s.$search.removeAttr("aria-controls"), s.$search.removeAttr("aria-activedescendant"), s.$search.val(""), s.$search.trigger("blur")
                    })), n.on("focus", (function() {
                        n.isOpen() || s.$search.trigger("focus")
                    })), n.on("results:all", (function(e) {
                        null != e.query.term && "" !== e.query.term || (s.showSearch(e) ? s.$searchContainer.removeClass("select2-search--hide") : s.$searchContainer.addClass("select2-search--hide"))
                    })), n.on("results:focus", (function(e) {
                        e.data._resultId ? s.$search.attr("aria-activedescendant", e.data._resultId) : s.$search.removeAttr("aria-activedescendant")
                    }))
                }, n.prototype.handleSearch = function(e) {
                    if (!this._keyUpPrevented) {
                        var t = this.$search.val();
                        this.trigger("query", {
                            term: t
                        })
                    }
                    this._keyUpPrevented = !1
                }, n.prototype.showSearch = function(e, t) {
                    return !0
                }, n
            })), t.define("select2/dropdown/hidePlaceholder", [], (function() {
                function e(e, t, n, i) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
                }
                return e.prototype.append = function(e, t) {
                    t.results = this.removePlaceholder(t.results), e.call(this, t)
                }, e.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, e.prototype.removePlaceholder = function(e, t) {
                    for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
                        var s = t[i];
                        this.placeholder.id === s.id && n.splice(i, 1)
                    }
                    return n
                }, e
            })), t.define("select2/dropdown/infiniteScroll", ["jquery"], (function(e) {
                function t(e, t, n, i) {
                    this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                }
                return t.prototype.append = function(e, t) {
                    this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded())
                }, t.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("query", (function(e) {
                        i.lastParams = e, i.loading = !0
                    })), t.on("query:append", (function(e) {
                        i.lastParams = e, i.loading = !0
                    })), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
                }, t.prototype.loadMoreIfNeeded = function() {
                    var t = e.contains(document.documentElement, this.$loadingMore[0]);
                    if (!this.loading && t) {
                        var n = this.$results.offset().top + this.$results.outerHeight(!1);
                        this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= n + 50 && this.loadMore()
                    }
                }, t.prototype.loadMore = function() {
                    this.loading = !0;
                    var t = e.extend({}, {
                        page: 1
                    }, this.lastParams);
                    t.page++, this.trigger("query:append", t)
                }, t.prototype.showLoadingMore = function(e, t) {
                    return t.pagination && t.pagination.more
                }, t.prototype.createLoadingMore = function() {
                    var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
                        n = this.options.get("translations").get("loadingMore");
                    return t.html(n(this.lastParams)), t
                }, t
            })), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function(e, t) {
                function n(t, n, i) {
                    this.$dropdownParent = e(i.get("dropdownParent") || document.body), t.call(this, n, i)
                }
                return n.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("open", (function() {
                        i._showDropdown(), i._attachPositioningHandler(t), i._bindContainerResultHandlers(t)
                    })), t.on("close", (function() {
                        i._hideDropdown(), i._detachPositioningHandler(t)
                    })), this.$dropdownContainer.on("mousedown", (function(e) {
                        e.stopPropagation()
                    }))
                }, n.prototype.destroy = function(e) {
                    e.call(this), this.$dropdownContainer.remove()
                }, n.prototype.position = function(e, t, n) {
                    t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                        position: "absolute",
                        top: -999999
                    }), this.$container = n
                }, n.prototype.render = function(t) {
                    var n = e("<span></span>"),
                        i = t.call(this);
                    return n.append(i), this.$dropdownContainer = n
                }, n.prototype._hideDropdown = function(e) {
                    this.$dropdownContainer.detach()
                }, n.prototype._bindContainerResultHandlers = function(e, t) {
                    if (!this._containerResultsHandlersBound) {
                        var n = this;
                        t.on("results:all", (function() {
                            n._positionDropdown(), n._resizeDropdown()
                        })), t.on("results:append", (function() {
                            n._positionDropdown(), n._resizeDropdown()
                        })), t.on("results:message", (function() {
                            n._positionDropdown(), n._resizeDropdown()
                        })), t.on("select", (function() {
                            n._positionDropdown(), n._resizeDropdown()
                        })), t.on("unselect", (function() {
                            n._positionDropdown(), n._resizeDropdown()
                        })), this._containerResultsHandlersBound = !0
                    }
                }, n.prototype._attachPositioningHandler = function(n, i) {
                    var s = this,
                        o = "scroll.select2." + i.id,
                        r = "resize.select2." + i.id,
                        a = "orientationchange.select2." + i.id,
                        l = this.$container.parents().filter(t.hasScroll);
                    l.each((function() {
                        t.StoreData(this, "select2-scroll-position", {
                            x: e(this).scrollLeft(),
                            y: e(this).scrollTop()
                        })
                    })), l.on(o, (function(n) {
                        var i = t.GetData(this, "select2-scroll-position");
                        e(this).scrollTop(i.y)
                    })), e(window).on(o + " " + r + " " + a, (function(e) {
                        s._positionDropdown(), s._resizeDropdown()
                    }))
                }, n.prototype._detachPositioningHandler = function(n, i) {
                    var s = "scroll.select2." + i.id,
                        o = "resize.select2." + i.id,
                        r = "orientationchange.select2." + i.id;
                    this.$container.parents().filter(t.hasScroll).off(s), e(window).off(s + " " + o + " " + r)
                }, n.prototype._positionDropdown = function() {
                    var t = e(window),
                        n = this.$dropdown.hasClass("select2-dropdown--above"),
                        i = this.$dropdown.hasClass("select2-dropdown--below"),
                        s = null,
                        o = this.$container.offset();
                    o.bottom = o.top + this.$container.outerHeight(!1);
                    var r = {
                        height: this.$container.outerHeight(!1)
                    };
                    r.top = o.top, r.bottom = o.top + r.height;
                    var a = this.$dropdown.outerHeight(!1),
                        l = t.scrollTop(),
                        c = t.scrollTop() + t.height(),
                        d = l < o.top - a,
                        u = c > o.bottom + a,
                        p = {
                            left: o.left,
                            top: r.bottom
                        },
                        h = this.$dropdownParent;
                    "static" === h.css("position") && (h = h.offsetParent());
                    var f = {
                        top: 0,
                        left: 0
                    };
                    (e.contains(document.body, h[0]) || h[0].isConnected) && (f = h.offset()), p.top -= f.top, p.left -= f.left, n || i || (s = "below"), u || !d || n ? !d && u && n && (s = "below") : s = "above", ("above" == s || n && "below" !== s) && (p.top = r.top - f.top - a), null != s && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + s), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + s)), this.$dropdownContainer.css(p)
                }, n.prototype._resizeDropdown = function() {
                    var e = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                }, n.prototype._showDropdown = function(e) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                }, n
            })), t.define("select2/dropdown/minimumResultsForSearch", [], (function() {
                function e(e, t, n, i) {
                    this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
                }
                return e.prototype.showSearch = function(e, t) {
                    return !(function e(t) {
                        for (var n = 0, i = 0; i < t.length; i++) {
                            var s = t[i];
                            s.children ? n += e(s.children) : n++
                        }
                        return n
                    }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
                }, e
            })), t.define("select2/dropdown/selectOnClose", ["../utils"], (function(e) {
                function t() {}
                return t.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("close", (function(e) {
                        i._handleSelectOnClose(e)
                    }))
                }, t.prototype._handleSelectOnClose = function(t, n) {
                    if (n && null != n.originalSelect2Event) {
                        var i = n.originalSelect2Event;
                        if ("select" === i._type || "unselect" === i._type) return
                    }
                    var s = this.getHighlightedResults();
                    if (!(s.length < 1)) {
                        var o = e.GetData(s[0], "data");
                        null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {
                            data: o
                        })
                    }
                }, t
            })), t.define("select2/dropdown/closeOnSelect", [], (function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("select", (function(e) {
                        i._selectTriggered(e)
                    })), t.on("unselect", (function(e) {
                        i._selectTriggered(e)
                    }))
                }, e.prototype._selectTriggered = function(e, t) {
                    var n = t.originalEvent;
                    n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
                        originalEvent: n,
                        originalSelect2Event: t
                    })
                }, e
            })), t.define("select2/i18n/en", [], (function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function(e) {
                        var t = e.input.length - e.maximum,
                            n = "Please delete " + t + " character";
                        return 1 != t && (n += "s"), n
                    },
                    inputTooShort: function(e) {
                        return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                    },
                    loadingMore: function() {
                        return "Loading more results…"
                    },
                    maximumSelected: function(e) {
                        var t = "You can only select " + e.maximum + " item";
                        return 1 != e.maximum && (t += "s"), t
                    },
                    noResults: function() {
                        return "No results found"
                    },
                    searching: function() {
                        return "Searching…"
                    },
                    removeAllItems: function() {
                        return "Remove all items"
                    }
                }
            })), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], (function(e, t, n, i, s, o, r, a, l, c, d, u, p, h, f, m, g, v, y, b, w, x, C, $, T, E, S, _, M) {
                function k() {
                    this.reset()
                }
                return k.prototype.apply = function(d) {
                    if (null == (d = e.extend(!0, {}, this.defaults, d)).dataAdapter) {
                        if (null != d.ajax ? d.dataAdapter = f : null != d.data ? d.dataAdapter = h : d.dataAdapter = p, 0 < d.minimumInputLength && (d.dataAdapter = c.Decorate(d.dataAdapter, v)), 0 < d.maximumInputLength && (d.dataAdapter = c.Decorate(d.dataAdapter, y)), 0 < d.maximumSelectionLength && (d.dataAdapter = c.Decorate(d.dataAdapter, b)), d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, m)), null == d.tokenSeparators && null == d.tokenizer || (d.dataAdapter = c.Decorate(d.dataAdapter, g)), null != d.query) {
                            var u = t(d.amdBase + "compat/query");
                            d.dataAdapter = c.Decorate(d.dataAdapter, u)
                        }
                        if (null != d.initSelection) {
                            var M = t(d.amdBase + "compat/initSelection");
                            d.dataAdapter = c.Decorate(d.dataAdapter, M)
                        }
                    }
                    if (null == d.resultsAdapter && (d.resultsAdapter = n, null != d.ajax && (d.resultsAdapter = c.Decorate(d.resultsAdapter, $)), null != d.placeholder && (d.resultsAdapter = c.Decorate(d.resultsAdapter, C)), d.selectOnClose && (d.resultsAdapter = c.Decorate(d.resultsAdapter, S))), null == d.dropdownAdapter) {
                        if (d.multiple) d.dropdownAdapter = w;
                        else {
                            var k = c.Decorate(w, x);
                            d.dropdownAdapter = k
                        }
                        if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, E)), d.closeOnSelect && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, _)), null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                            var P = t(d.amdBase + "compat/dropdownCss");
                            d.dropdownAdapter = c.Decorate(d.dropdownAdapter, P)
                        }
                        d.dropdownAdapter = c.Decorate(d.dropdownAdapter, T)
                    }
                    if (null == d.selectionAdapter) {
                        if (d.multiple ? d.selectionAdapter = s : d.selectionAdapter = i, null != d.placeholder && (d.selectionAdapter = c.Decorate(d.selectionAdapter, o)), d.allowClear && (d.selectionAdapter = c.Decorate(d.selectionAdapter, r)), d.multiple && (d.selectionAdapter = c.Decorate(d.selectionAdapter, a)), null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                            var A = t(d.amdBase + "compat/containerCss");
                            d.selectionAdapter = c.Decorate(d.selectionAdapter, A)
                        }
                        d.selectionAdapter = c.Decorate(d.selectionAdapter, l)
                    }
                    d.language = this._resolveLanguage(d.language), d.language.push("en");
                    for (var z = [], D = 0; D < d.language.length; D++) {
                        var L = d.language[D]; - 1 === z.indexOf(L) && z.push(L)
                    }
                    return d.language = z, d.translations = this._processTranslations(d.language, d.debug), d
                }, k.prototype.reset = function() {
                    function t(e) {
                        return e.replace(/[^\u0000-\u007E]/g, (function(e) {
                            return u[e] || e
                        }))
                    }
                    this.defaults = {
                        amdBase: "./",
                        amdLanguageBase: "./i18n/",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: c.escapeMarkup,
                        language: {},
                        matcher: function n(i, s) {
                            if ("" === e.trim(i.term)) return s;
                            if (s.children && 0 < s.children.length) {
                                for (var o = e.extend(!0, {}, s), r = s.children.length - 1; 0 <= r; r--) null == n(i, s.children[r]) && o.children.splice(r, 1);
                                return 0 < o.children.length ? o : n(i, o)
                            }
                            var a = t(s.text).toUpperCase(),
                                l = t(i.term).toUpperCase();
                            return -1 < a.indexOf(l) ? s : null
                        },
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        scrollAfterSelect: !1,
                        sorter: function(e) {
                            return e
                        },
                        templateResult: function(e) {
                            return e.text
                        },
                        templateSelection: function(e) {
                            return e.text
                        },
                        theme: "default",
                        width: "resolve"
                    }
                }, k.prototype.applyFromElement = function(e, t) {
                    var n = e.language,
                        i = this.defaults.language,
                        s = t.prop("lang"),
                        o = t.closest("[lang]").prop("lang"),
                        r = Array.prototype.concat.call(this._resolveLanguage(s), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(o));
                    return e.language = r, e
                }, k.prototype._resolveLanguage = function(t) {
                    if (!t) return [];
                    if (e.isEmptyObject(t)) return [];
                    if (e.isPlainObject(t)) return [t];
                    var n;
                    n = e.isArray(t) ? t : [t];
                    for (var i = [], s = 0; s < n.length; s++)
                        if (i.push(n[s]), "string" == typeof n[s] && 0 < n[s].indexOf("-")) {
                            var o = n[s].split("-")[0];
                            i.push(o)
                        }
                    return i
                }, k.prototype._processTranslations = function(t, n) {
                    for (var i = new d, s = 0; s < t.length; s++) {
                        var o = new d,
                            r = t[s];
                        if ("string" == typeof r) try {
                            o = d.loadPath(r)
                        } catch (t) {
                            try {
                                r = this.defaults.amdLanguageBase + r, o = d.loadPath(r)
                            } catch (t) {
                                n && window.console && console.warn && console.warn('Select2: The language file for "' + r + '" could not be automatically loaded. A fallback will be used instead.')
                            }
                        } else o = e.isPlainObject(r) ? new d(r) : r;
                        i.extend(o)
                    }
                    return i
                }, k.prototype.set = function(t, n) {
                    var i = {};
                    i[e.camelCase(t)] = n;
                    var s = c._convertData(i);
                    e.extend(!0, this.defaults, s)
                }, new k
            })), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], (function(e, t, n, i) {
                function s(t, s) {
                    if (this.options = t, null != s && this.fromElement(s), null != s && (this.options = n.applyFromElement(this.options, s)), this.options = n.apply(this.options), s && s.is("input")) {
                        var o = e(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o)
                    }
                }
                return s.prototype.fromElement = function(e) {
                    var n = ["select2"];
                    null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), i.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), i.StoreData(e[0], "data", i.GetData(e[0], "select2Tags")), i.StoreData(e[0], "tags", !0)), i.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", i.GetData(e[0], "ajaxUrl")), i.StoreData(e[0], "ajax-Url", i.GetData(e[0], "ajaxUrl")));
                    var s = {};

                    function o(e, t) {
                        return t.toUpperCase()
                    }
                    for (var r = 0; r < e[0].attributes.length; r++) {
                        var a = e[0].attributes[r].name,
                            l = "data-";
                        if (a.substr(0, l.length) == l) {
                            var c = a.substring(l.length),
                                d = i.GetData(e[0], c);
                            s[c.replace(/-([a-z])/g, o)] = d
                        }
                    }
                    t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset && (s = t.extend(!0, {}, e[0].dataset, s));
                    var u = t.extend(!0, {}, i.GetData(e[0]), s);
                    for (var p in u = i._convertData(u)) - 1 < t.inArray(p, n) || (t.isPlainObject(this.options[p]) ? t.extend(this.options[p], u[p]) : this.options[p] = u[p]);
                    return this
                }, s.prototype.get = function(e) {
                    return this.options[e]
                }, s.prototype.set = function(e, t) {
                    this.options[e] = t
                }, s
            })), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function(e, t, n, i) {
                var s = function(e, i) {
                    null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), i = i || {}, this.options = new t(i, e), s.__super__.constructor.call(this);
                    var o = e.attr("tabindex") || 0;
                    n.StoreData(e[0], "old-tabindex", o), e.attr("tabindex", "-1");
                    var r = this.options.get("dataAdapter");
                    this.dataAdapter = new r(e, this.options);
                    var a = this.render();
                    this._placeContainer(a);
                    var l = this.options.get("selectionAdapter");
                    this.selection = new l(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, a);
                    var c = this.options.get("dropdownAdapter");
                    this.dropdown = new c(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, a);
                    var d = this.options.get("resultsAdapter");
                    this.results = new d(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                    var u = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current((function(e) {
                        u.trigger("selection:update", {
                            data: e
                        })
                    })), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), n.StoreData(e[0], "select2", this), e.data("select2", this)
                };
                return n.Extend(s, n.Observable), s.prototype._generateId = function(e) {
                    return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                }, s.prototype._placeContainer = function(e) {
                    e.insertAfter(this.$element);
                    var t = this._resolveWidth(this.$element, this.options.get("width"));
                    null != t && e.css("width", t)
                }, s.prototype._resolveWidth = function(e, t) {
                    var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == t) {
                        var i = this._resolveWidth(e, "style");
                        return null != i ? i : this._resolveWidth(e, "element")
                    }
                    if ("element" == t) {
                        var s = e.outerWidth(!1);
                        return s <= 0 ? "auto" : s + "px"
                    }
                    if ("style" != t) return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width;
                    var o = e.attr("style");
                    if ("string" != typeof o) return null;
                    for (var r = o.split(";"), a = 0, l = r.length; a < l; a += 1) {
                        var c = r[a].replace(/\s/g, "").match(n);
                        if (null !== c && 1 <= c.length) return c[1]
                    }
                    return null
                }, s.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                }, s.prototype._registerDomEvents = function() {
                    var e = this;
                    this.$element.on("change.select2", (function() {
                        e.dataAdapter.current((function(t) {
                            e.trigger("selection:update", {
                                data: t
                            })
                        }))
                    })), this.$element.on("focus.select2", (function(t) {
                        e.trigger("focus", t)
                    })), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                    var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != t ? (this._observer = new t((function(t) {
                        e._syncA(), e._syncS(null, t)
                    })), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1
                    })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
                }, s.prototype._registerDataEvents = function() {
                    var e = this;
                    this.dataAdapter.on("*", (function(t, n) {
                        e.trigger(t, n)
                    }))
                }, s.prototype._registerSelectionEvents = function() {
                    var t = this,
                        n = ["toggle", "focus"];
                    this.selection.on("toggle", (function() {
                        t.toggleDropdown()
                    })), this.selection.on("focus", (function(e) {
                        t.focus(e)
                    })), this.selection.on("*", (function(i, s) {
                        -1 === e.inArray(i, n) && t.trigger(i, s)
                    }))
                }, s.prototype._registerDropdownEvents = function() {
                    var e = this;
                    this.dropdown.on("*", (function(t, n) {
                        e.trigger(t, n)
                    }))
                }, s.prototype._registerResultsEvents = function() {
                    var e = this;
                    this.results.on("*", (function(t, n) {
                        e.trigger(t, n)
                    }))
                }, s.prototype._registerEvents = function() {
                    var e = this;
                    this.on("open", (function() {
                        e.$container.addClass("select2-container--open")
                    })), this.on("close", (function() {
                        e.$container.removeClass("select2-container--open")
                    })), this.on("enable", (function() {
                        e.$container.removeClass("select2-container--disabled")
                    })), this.on("disable", (function() {
                        e.$container.addClass("select2-container--disabled")
                    })), this.on("blur", (function() {
                        e.$container.removeClass("select2-container--focus")
                    })), this.on("query", (function(t) {
                        e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, (function(n) {
                            e.trigger("results:all", {
                                data: n,
                                query: t
                            })
                        }))
                    })), this.on("query:append", (function(t) {
                        this.dataAdapter.query(t, (function(n) {
                            e.trigger("results:append", {
                                data: n,
                                query: t
                            })
                        }))
                    })), this.on("keypress", (function(t) {
                        var n = t.which;
                        e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(t), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
                    }))
                }, s.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                }, s.prototype._isChangeMutation = function(t, n) {
                    var i = !1,
                        s = this;
                    if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                        if (n)
                            if (n.addedNodes && 0 < n.addedNodes.length)
                                for (var o = 0; o < n.addedNodes.length; o++) n.addedNodes[o].selected && (i = !0);
                            else n.removedNodes && 0 < n.removedNodes.length ? i = !0 : e.isArray(n) && e.each(n, (function(e, t) {
                                if (s._isChangeMutation(e, t)) return !(i = !0)
                            }));
                        else i = !0;
                        return i
                    }
                }, s.prototype._syncSubtree = function(e, t) {
                    var n = this._isChangeMutation(e, t),
                        i = this;
                    n && this.dataAdapter.current((function(e) {
                        i.trigger("selection:update", {
                            data: e
                        })
                    }))
                }, s.prototype.trigger = function(e, t) {
                    var n = s.__super__.trigger,
                        i = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting",
                            clear: "clearing"
                        };
                    if (void 0 === t && (t = {}), e in i) {
                        var o = i[e],
                            r = {
                                prevented: !1,
                                name: e,
                                args: t
                            };
                        if (n.call(this, o, r), r.prevented) return void(t.prevented = !0)
                    }
                    n.call(this, e, t)
                }, s.prototype.toggleDropdown = function() {
                    this.isDisabled() || (this.isOpen() ? this.close() : this.open())
                }, s.prototype.open = function() {
                    this.isOpen() || this.isDisabled() || this.trigger("query", {})
                }, s.prototype.close = function(e) {
                    this.isOpen() && this.trigger("close", {
                        originalEvent: e
                    })
                }, s.prototype.isEnabled = function() {
                    return !this.isDisabled()
                }, s.prototype.isDisabled = function() {
                    return this.options.get("disabled")
                }, s.prototype.isOpen = function() {
                    return this.$container.hasClass("select2-container--open")
                }, s.prototype.hasFocus = function() {
                    return this.$container.hasClass("select2-container--focus")
                }, s.prototype.focus = function(e) {
                    this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                }, s.prototype.enable = function(e) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                    var t = !e[0];
                    this.$element.prop("disabled", t)
                }, s.prototype.data = function() {
                    this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var e = [];
                    return this.dataAdapter.current((function(t) {
                        e = t
                    })), e
                }, s.prototype.val = function(t) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                    var n = t[0];
                    e.isArray(n) && (n = e.map(n, (function(e) {
                        return e.toString()
                    }))), this.$element.val(n).trigger("input").trigger("change")
                }, s.prototype.destroy = function() {
                    this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), n.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                }, s.prototype.render = function() {
                    var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), n.StoreData(t[0], "element", this.$element), t
                }, s
            })), t.define("select2/compat/utils", ["jquery"], (function(e) {
                return {
                    syncCssClasses: function(t, n, i) {
                        var s, o, r = [];
                        (s = e.trim(t.attr("class"))) && e((s = "" + s).split(/\s+/)).each((function() {
                            0 === this.indexOf("select2-") && r.push(this)
                        })), (s = e.trim(n.attr("class"))) && e((s = "" + s).split(/\s+/)).each((function() {
                            0 !== this.indexOf("select2-") && null != (o = i(this)) && r.push(o)
                        })), t.attr("class", r.join(" "))
                    }
                }
            })), t.define("select2/compat/containerCss", ["jquery", "./utils"], (function(e, t) {
                function n(e) {
                    return null
                }

                function i() {}
                return i.prototype.render = function(i) {
                    var s = i.call(this),
                        o = this.options.get("containerCssClass") || "";
                    e.isFunction(o) && (o = o(this.$element));
                    var r = this.options.get("adaptContainerCssClass");
                    if (r = r || n, -1 !== o.indexOf(":all:")) {
                        o = o.replace(":all:", "");
                        var a = r;
                        r = function(e) {
                            var t = a(e);
                            return null != t ? t + " " + e : e
                        }
                    }
                    var l = this.options.get("containerCss") || {};
                    return e.isFunction(l) && (l = l(this.$element)), t.syncCssClasses(s, this.$element, r), s.css(l), s.addClass(o), s
                }, i
            })), t.define("select2/compat/dropdownCss", ["jquery", "./utils"], (function(e, t) {
                function n(e) {
                    return null
                }

                function i() {}
                return i.prototype.render = function(i) {
                    var s = i.call(this),
                        o = this.options.get("dropdownCssClass") || "";
                    e.isFunction(o) && (o = o(this.$element));
                    var r = this.options.get("adaptDropdownCssClass");
                    if (r = r || n, -1 !== o.indexOf(":all:")) {
                        o = o.replace(":all:", "");
                        var a = r;
                        r = function(e) {
                            var t = a(e);
                            return null != t ? t + " " + e : e
                        }
                    }
                    var l = this.options.get("dropdownCss") || {};
                    return e.isFunction(l) && (l = l(this.$element)), t.syncCssClasses(s, this.$element, r), s.css(l), s.addClass(o), s
                }, i
            })), t.define("select2/compat/initSelection", ["jquery"], (function(e) {
                function t(e, t, n) {
                    n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = n.get("initSelection"), this._isInitialized = !1, e.call(this, t, n)
                }
                return t.prototype.current = function(t, n) {
                    var i = this;
                    this._isInitialized ? t.call(this, n) : this.initSelection.call(null, this.$element, (function(t) {
                        i._isInitialized = !0, e.isArray(t) || (t = [t]), n(t)
                    }))
                }, t
            })), t.define("select2/compat/inputData", ["jquery", "../utils"], (function(e, t) {
                function n(e, t, n) {
                    this._currentData = [], this._valueSeparator = n.get("valueSeparator") || ",", "hidden" === t.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), e.call(this, t, n)
                }
                return n.prototype.current = function(t, n) {
                    function i(t, n) {
                        var s = [];
                        return t.selected || -1 !== e.inArray(t.id, n) ? (t.selected = !0, s.push(t)) : t.selected = !1, t.children && s.push.apply(s, i(t.children, n)), s
                    }
                    for (var s = [], o = 0; o < this._currentData.length; o++) {
                        var r = this._currentData[o];
                        s.push.apply(s, i(r, this.$element.val().split(this._valueSeparator)))
                    }
                    n(s)
                }, n.prototype.select = function(t, n) {
                    if (this.options.get("multiple")) {
                        var i = this.$element.val();
                        i += this._valueSeparator + n.id, this.$element.val(i), this.$element.trigger("input").trigger("change")
                    } else this.current((function(t) {
                        e.map(t, (function(e) {
                            e.selected = !1
                        }))
                    })), this.$element.val(n.id), this.$element.trigger("input").trigger("change")
                }, n.prototype.unselect = function(e, t) {
                    var n = this;
                    t.selected = !1, this.current((function(e) {
                        for (var i = [], s = 0; s < e.length; s++) {
                            var o = e[s];
                            t.id != o.id && i.push(o.id)
                        }
                        n.$element.val(i.join(n._valueSeparator)), n.$element.trigger("input").trigger("change")
                    }))
                }, n.prototype.query = function(e, t, n) {
                    for (var i = [], s = 0; s < this._currentData.length; s++) {
                        var o = this._currentData[s],
                            r = this.matches(t, o);
                        null !== r && i.push(r)
                    }
                    n({
                        results: i
                    })
                }, n.prototype.addOptions = function(n, i) {
                    var s = e.map(i, (function(e) {
                        return t.GetData(e[0], "data")
                    }));
                    this._currentData.push.apply(this._currentData, s)
                }, n
            })), t.define("select2/compat/matcher", ["jquery"], (function(e) {
                return function(t) {
                    return function(n, i) {
                        var s = e.extend(!0, {}, i);
                        if (null == n.term || "" === e.trim(n.term)) return s;
                        if (i.children) {
                            for (var o = i.children.length - 1; 0 <= o; o--) {
                                var r = i.children[o];
                                t(n.term, r.text, r) || s.children.splice(o, 1)
                            }
                            if (0 < s.children.length) return s
                        }
                        return t(n.term, i.text, i) ? s : null
                    }
                }
            })), t.define("select2/compat/query", [], (function() {
                function e(e, t, n) {
                    n.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    t.callback = n, this.options.get("query").call(null, t)
                }, e
            })), t.define("select2/dropdown/attachContainer", [], (function() {
                function e(e, t, n) {
                    e.call(this, t, n)
                }
                return e.prototype.position = function(e, t, n) {
                    n.find(".dropdown-wrapper").append(t), t.addClass("select2-dropdown--below"), n.addClass("select2-container--below")
                }, e
            })), t.define("select2/dropdown/stopPropagation", [], (function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    e.call(this, t, n), this.$dropdown.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), (function(e) {
                        e.stopPropagation()
                    }))
                }, e
            })), t.define("select2/selection/stopPropagation", [], (function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    e.call(this, t, n), this.$selection.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), (function(e) {
                        e.stopPropagation()
                    }))
                }, e
            })), v = function(e) {
                var t, n, i = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                    s = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                    o = Array.prototype.slice;
                if (e.event.fixHooks)
                    for (var r = i.length; r;) e.event.fixHooks[i[--r]] = e.event.mouseHooks;
                var a = e.event.special.mousewheel = {
                    version: "3.1.12",
                    setup: function() {
                        if (this.addEventListener)
                            for (var t = s.length; t;) this.addEventListener(s[--t], l, !1);
                        else this.onmousewheel = l;
                        e.data(this, "mousewheel-line-height", a.getLineHeight(this)), e.data(this, "mousewheel-page-height", a.getPageHeight(this))
                    },
                    teardown: function() {
                        if (this.removeEventListener)
                            for (var t = s.length; t;) this.removeEventListener(s[--t], l, !1);
                        else this.onmousewheel = null;
                        e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
                    },
                    getLineHeight: function(t) {
                        var n = e(t),
                            i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                        return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
                    },
                    getPageHeight: function(t) {
                        return e(t).height()
                    },
                    settings: {
                        adjustOldDeltas: !0,
                        normalizeOffset: !0
                    }
                };

                function l(i) {
                    var s, r = i || window.event,
                        l = o.call(arguments, 1),
                        u = 0,
                        p = 0,
                        h = 0,
                        f = 0,
                        m = 0;
                    if ((i = e.event.fix(r)).type = "mousewheel", "detail" in r && (h = -1 * r.detail), "wheelDelta" in r && (h = r.wheelDelta), "wheelDeltaY" in r && (h = r.wheelDeltaY), "wheelDeltaX" in r && (p = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (p = -1 * h, h = 0), u = 0 === h ? p : h, "deltaY" in r && (u = h = -1 * r.deltaY), "deltaX" in r && (p = r.deltaX, 0 === h && (u = -1 * p)), 0 !== h || 0 !== p) {
                        if (1 === r.deltaMode) {
                            var g = e.data(this, "mousewheel-line-height");
                            u *= g, h *= g, p *= g
                        } else if (2 === r.deltaMode) {
                            var v = e.data(this, "mousewheel-page-height");
                            u *= v, h *= v, p *= v
                        }
                        if (s = Math.max(Math.abs(h), Math.abs(p)), (!n || s < n) && d(r, n = s) && (n /= 40), d(r, s) && (u /= 40, p /= 40, h /= 40), u = Math[1 <= u ? "floor" : "ceil"](u / n), p = Math[1 <= p ? "floor" : "ceil"](p / n), h = Math[1 <= h ? "floor" : "ceil"](h / n), a.settings.normalizeOffset && this.getBoundingClientRect) {
                            var y = this.getBoundingClientRect();
                            f = i.clientX - y.left, m = i.clientY - y.top
                        }
                        return i.deltaX = p, i.deltaY = h, i.deltaFactor = n, i.offsetX = f, i.offsetY = m, i.deltaMode = 0, l.unshift(i, u, p, h), t && clearTimeout(t), t = setTimeout(c, 200), (e.event.dispatch || e.event.handle).apply(this, l)
                    }
                }

                function c() {
                    n = null
                }

                function d(e, t) {
                    return a.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
                }
                e.fn.extend({
                    mousewheel: function(e) {
                        return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                    },
                    unmousewheel: function(e) {
                        return this.unbind("mousewheel", e)
                    }
                })
            }, "function" == typeof t.define && t.define.amd ? t.define("jquery-mousewheel", ["jquery"], v) : "object" == typeof exports ? module.exports = v : v(e), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], (function(e, t, n, i, s) {
                if (null == e.fn.select2) {
                    var o = ["open", "close", "destroy"];
                    e.fn.select2 = function(t) {
                        if ("object" == typeof(t = t || {})) return this.each((function() {
                            var i = e.extend(!0, {}, t);
                            new n(e(this), i)
                        })), this;
                        if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
                        var i, r = Array.prototype.slice.call(arguments, 1);
                        return this.each((function() {
                            var e = s.GetData(this, "select2");
                            null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = e[t].apply(e, r)
                        })), -1 < e.inArray(t, o) ? this : i
                    }
                }
                return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
            })), {
                define: t.define,
                require: t.require
            }
        }(),
        n = t.require("jquery.select2");
    return e.fn.select2.amd = t, n
})),
function(e, t, n, i) {
    function s(t, n) {
        this.settings = null, this.options = e.extend({}, s.Defaults, n), this.$element = e(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, e.each(["onResize", "onThrottledResize"], e.proxy((function(t, n) {
            this._handlers[n] = e.proxy(this[n], this)
        }), this)), e.each(s.Plugins, e.proxy((function(e, t) {
            this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
        }), this)), e.each(s.Workers, e.proxy((function(t, n) {
            this._pipe.push({
                filter: n.filter,
                run: e.proxy(n.run, this)
            })
        }), this)), this.setup(), this.initialize()
    }
    s.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: t,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, s.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, s.Type = {
        Event: "event",
        State: "state"
    }, s.Plugins = {}, s.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = this.settings.margin || "",
                n = !this.settings.autoWidth,
                i = this.settings.rtl,
                s = {
                    width: "auto",
                    "margin-left": i ? t : "",
                    "margin-right": i ? "" : t
                };
            !n && this.$stage.children().css(s), e.css = s
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                n = null,
                i = this._items.length,
                s = !this.settings.autoWidth,
                o = [];
            for (e.items = {
                    merge: !1,
                    width: t
                }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, e.items.merge = n > 1 || e.items.merge, o[i] = s ? t * n : this._items[i].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = [],
                n = this._items,
                i = this.settings,
                s = Math.max(2 * i.items, 4),
                o = 2 * Math.ceil(n.length / 2),
                r = i.loop && n.length ? i.rewind ? s : Math.max(s, o) : 0,
                a = "",
                l = "";
            for (r /= 2; r > 0;) t.push(this.normalize(t.length / 2, !0)), a += n[t[t.length - 1]][0].outerHTML, t.push(this.normalize(n.length - 1 - (t.length - 1) / 2, !0)), l = n[t[t.length - 1]][0].outerHTML + l, r -= 1;
            this._clones = t, e(a).addClass("cloned").appendTo(this.$stage), e(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, n = -1, i = 0, s = 0, o = []; ++n < t;) i = o[n - 1] || 0, s = this._widths[this.relative(n)] + this.settings.margin, o.push(i + s * e);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e = this.settings.stagePadding,
                t = this._coordinates,
                n = {
                    width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                    "padding-left": e || "",
                    "padding-right": e || ""
                };
            this.$stage.css(n)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = this._coordinates.length,
                n = !this.settings.autoWidth,
                i = this.$stage.children();
            if (n && e.items.merge)
                for (; t--;) e.css.width = this._widths[this.relative(t)], i.eq(t).css(e.css);
            else n && (e.css.width = e.items.width, i.css(e.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var e, t, n, i, s = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o,
                a = r + this.width() * s,
                l = [];
            for (n = 0, i = this._coordinates.length; n < i; n++) e = this._coordinates[n - 1] || 0, t = Math.abs(this._coordinates[n]) + o * s, (this.op(e, "<=", r) && this.op(e, ">", a) || this.op(t, "<", r) && this.op(t, ">", a)) && l.push(n);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], s.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = e("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(e("<div/>", {
            class: this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()))
    }, s.prototype.initializeItems = function() {
        var t = this.$element.find(".owl-item");
        if (t.length) return this._items = t.get().map((function(t) {
            return e(t)
        })), this._mergers = this._items.map((function() {
            return 1
        })), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, s.prototype.initialize = function() {
        var e, t, n;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (e = this.$element.find("img"), t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, n = this.$element.children(t).width(), e.length && n <= 0 && this.preloadAutoWidthImages(e));
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, s.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, s.prototype.setup = function() {
        var t = this.viewport(),
            n = this.options.responsive,
            i = -1,
            s = null;
        n ? (e.each(n, (function(e) {
            e <= t && e > i && (i = Number(e))
        })), "function" == typeof(s = e.extend({}, this.options, n[i])).stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : s = e.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: s
            }
        }), this._breakpoint = i, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, s.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, s.prototype.prepare = function(t) {
        var n = this.trigger("prepare", {
            content: t
        });
        return n.data || (n.data = e("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
            content: n.data
        }), n.data
    }, s.prototype.update = function() {
        for (var t = 0, n = this._pipe.length, i = e.proxy((function(e) {
                return this[e]
            }), this._invalidated), s = {}; t < n;)(this._invalidated.all || e.grep(this._pipe[t].filter, i).length > 0) && this._pipe[t].run(s), t++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, s.prototype.width = function(e) {
        switch (e = e || s.Width.Default) {
            case s.Width.Inner:
            case s.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, s.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, s.prototype.onThrottledResize = function() {
        t.clearTimeout(this.resizeTimer), this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, s.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, s.prototype.registerEventHandlers = function() {
        e.support.transition && this.$stage.on(e.support.transition.end + ".owl.core", e.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(t, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", (function() {
            return !1
        }))), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", e.proxy(this.onDragEnd, this)))
    }, s.prototype.onDragStart = function(t) {
        var i = null;
        3 !== t.which && (e.support.transform ? i = {
            x: (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === i.length ? 12 : 4],
            y: i[16 === i.length ? 13 : 5]
        } : (i = this.$stage.position(), i = {
            x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
            y: i.top
        }), this.is("animating") && (e.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = e(t.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(t), e(n).on("mouseup.owl.core touchend.owl.core", e.proxy(this.onDragEnd, this)), e(n).one("mousemove.owl.core touchmove.owl.core", e.proxy((function(t) {
            var i = this.difference(this._drag.pointer, this.pointer(t));
            e(n).on("mousemove.owl.core touchmove.owl.core", e.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }), this)))
    }, s.prototype.onDragMove = function(e) {
        var t = null,
            n = null,
            i = null,
            s = this.difference(this._drag.pointer, this.pointer(e)),
            o = this.difference(this._drag.stage.start, s);
        this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - t, o.x = ((o.x - t) % n + n) % n + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * s.x / 5 : 0, o.x = Math.max(Math.min(o.x, t + i), n + i)), this._drag.stage.current = o, this.animate(o.x))
    }, s.prototype.onDragEnd = function(t) {
        var i = this.difference(this._drag.pointer, this.pointer(t)),
            s = this._drag.stage.current,
            o = i.x > 0 ^ this.settings.rtl ? "left" : "right";
        e(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== i.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", (function() {
            return !1
        }))), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, s.prototype.closest = function(t, n) {
        var s = -1,
            o = this.width(),
            r = this.coordinates();
        return this.settings.freeDrag || e.each(r, e.proxy((function(e, a) {
            return "left" === n && t > a - 30 && t < a + 30 ? s = e : "right" === n && t > a - o - 30 && t < a - o + 30 ? s = e + 1 : this.op(t, "<", a) && this.op(t, ">", r[e + 1] !== i ? r[e + 1] : a - o) && (s = "left" === n ? e + 1 : e), -1 === s
        }), this)), this.settings.loop || (this.op(t, ">", r[this.minimum()]) ? s = t = this.minimum() : this.op(t, "<", r[this.maximum()]) && (s = t = this.maximum())), s
    }, s.prototype.animate = function(t) {
        var n = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), e.support.transform3d && e.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : n ? this.$stage.animate({
            left: t + "px"
        }, this.speed(), this.settings.fallbackEasing, e.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: t + "px"
        })
    }, s.prototype.is = function(e) {
        return this._states.current[e] && this._states.current[e] > 0
    }, s.prototype.current = function(e) {
        if (e === i) return this._current;
        if (0 === this._items.length) return i;
        if (e = this.normalize(e), this._current !== e) {
            var t = this.trigger("change", {
                property: {
                    name: "position",
                    value: e
                }
            });
            t.data !== i && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, s.prototype.invalidate = function(t) {
        return "string" === e.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), e.map(this._invalidated, (function(e, t) {
            return t
        }))
    }, s.prototype.reset = function(e) {
        (e = this.normalize(e)) !== i && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
    }, s.prototype.normalize = function(e, t) {
        var n = this._items.length,
            s = t ? 0 : this._clones.length;
        return !this.isNumeric(e) || n < 1 ? e = i : (e < 0 || e >= n + s) && (e = ((e - s / 2) % n + n) % n + s / 2), e
    }, s.prototype.relative = function(e) {
        return e -= this._clones.length / 2, this.normalize(e, !0)
    }, s.prototype.maximum = function(e) {
        var t, n, i, s = this.settings,
            o = this._coordinates.length;
        if (s.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (s.autoWidth || s.merge) {
            if (t = this._items.length)
                for (n = this._items[--t].width(), i = this.$element.width(); t-- && !((n += this._items[t].width() + this.settings.margin) > i););
            o = t + 1
        } else o = s.center ? this._items.length - 1 : this._items.length - s.items;
        return e && (o -= this._clones.length / 2), Math.max(o, 0)
    }, s.prototype.minimum = function(e) {
        return e ? 0 : this._clones.length / 2
    }, s.prototype.items = function(e) {
        return e === i ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
    }, s.prototype.mergers = function(e) {
        return e === i ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
    }, s.prototype.clones = function(t) {
        var n = this._clones.length / 2,
            s = n + this._items.length,
            o = function(e) {
                return e % 2 == 0 ? s + e / 2 : n - (e + 1) / 2
            };
        return t === i ? e.map(this._clones, (function(e, t) {
            return o(t)
        })) : e.map(this._clones, (function(e, n) {
            return e === t ? o(n) : null
        }))
    }, s.prototype.speed = function(e) {
        return e !== i && (this._speed = e), this._speed
    }, s.prototype.coordinates = function(t) {
        var n, s = 1,
            o = t - 1;
        return t === i ? e.map(this._coordinates, e.proxy((function(e, t) {
            return this.coordinates(t)
        }), this)) : (this.settings.center ? (this.settings.rtl && (s = -1, o = t + 1), n = this._coordinates[t], n += (this.width() - n + (this._coordinates[o] || 0)) / 2 * s) : n = this._coordinates[o] || 0, n = Math.ceil(n))
    }, s.prototype.duration = function(e, t, n) {
        return 0 === n ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, s.prototype.to = function(e, t) {
        var n = this.current(),
            i = null,
            s = e - this.relative(n),
            o = (s > 0) - (s < 0),
            r = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(s) > r / 2 && (s += -1 * o * r), (i = (((e = n + s) - a) % r + r) % r + a) !== e && i - s <= l && i - s > 0 && (n = i - s, e = i, this.reset(n))) : this.settings.rewind ? e = (e % (l += 1) + l) % l : e = Math.max(a, Math.min(l, e)), this.speed(this.duration(n, e, t)), this.current(e), this.isVisible() && this.update()
    }, s.prototype.next = function(e) {
        e = e || !1, this.to(this.relative(this.current()) + 1, e)
    }, s.prototype.prev = function(e) {
        e = e || !1, this.to(this.relative(this.current()) - 1, e)
    }, s.prototype.onTransitionEnd = function(e) {
        if (e !== i && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, s.prototype.viewport = function() {
        var i;
        return this.options.responsiveBaseElement !== t ? i = e(this.options.responsiveBaseElement).width() : t.innerWidth ? i = t.innerWidth : n.documentElement && n.documentElement.clientWidth ? i = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), i
    }, s.prototype.replace = function(t) {
        this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : e(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter((function() {
            return 1 === this.nodeType
        })).each(e.proxy((function(e, t) {
            t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }), this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, s.prototype.add = function(t, n) {
        var s = this.relative(this._current);
        n = n === i ? this._items.length : this.normalize(n, !0), t = t instanceof jQuery ? t : e(t), this.trigger("add", {
            content: t,
            position: n
        }), t = this.prepare(t), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[n - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(t), this._items.splice(n, 0, t), this._mergers.splice(n, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: n
        })
    }, s.prototype.remove = function(e) {
        (e = this.normalize(e, !0)) !== i && (this.trigger("remove", {
            content: this._items[e],
            position: e
        }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: e
        }))
    }, s.prototype.preloadAutoWidthImages = function(t) {
        t.each(e.proxy((function(t, n) {
            this.enter("pre-loading"), n = e(n), e(new Image).one("load", e.proxy((function(e) {
                n.attr("src", e.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }), this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
        }), this))
    }, s.prototype.destroy = function() {
        for (var i in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), e(n).off(".owl.core"), !1 !== this.settings.responsive && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[i].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, s.prototype.op = function(e, t, n) {
        var i = this.settings.rtl;
        switch (t) {
            case "<":
                return i ? e > n : e < n;
            case ">":
                return i ? e < n : e > n;
            case ">=":
                return i ? e <= n : e >= n;
            case "<=":
                return i ? e >= n : e <= n
        }
    }, s.prototype.on = function(e, t, n, i) {
        e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
    }, s.prototype.off = function(e, t, n, i) {
        e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n)
    }, s.prototype.trigger = function(t, n, i, o, r) {
        var a = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            l = e.camelCase(e.grep(["on", t, i], (function(e) {
                return e
            })).join("-").toLowerCase()),
            c = e.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), e.extend({
                relatedTarget: this
            }, a, n));
        return this._supress[t] || (e.each(this._plugins, (function(e, t) {
            t.onTrigger && t.onTrigger(c)
        })), this.register({
            type: s.Type.Event,
            name: t
        }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
    }, s.prototype.enter = function(t) {
        e.each([t].concat(this._states.tags[t] || []), e.proxy((function(e, t) {
            this._states.current[t] === i && (this._states.current[t] = 0), this._states.current[t]++
        }), this))
    }, s.prototype.leave = function(t) {
        e.each([t].concat(this._states.tags[t] || []), e.proxy((function(e, t) {
            this._states.current[t]--
        }), this))
    }, s.prototype.register = function(t) {
        if (t.type === s.Type.Event) {
            if (e.event.special[t.name] || (e.event.special[t.name] = {}), !e.event.special[t.name].owl) {
                var n = e.event.special[t.name]._default;
                e.event.special[t.name]._default = function(e) {
                    return !n || !n.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
                }, e.event.special[t.name].owl = !0
            }
        } else t.type === s.Type.State && (this._states.tags[t.name] ? this._states.tags[t.name] = this._states.tags[t.name].concat(t.tags) : this._states.tags[t.name] = t.tags, this._states.tags[t.name] = e.grep(this._states.tags[t.name], e.proxy((function(n, i) {
            return e.inArray(n, this._states.tags[t.name]) === i
        }), this)))
    }, s.prototype.suppress = function(t) {
        e.each(t, e.proxy((function(e, t) {
            this._supress[t] = !0
        }), this))
    }, s.prototype.release = function(t) {
        e.each(t, e.proxy((function(e, t) {
            delete this._supress[t]
        }), this))
    }, s.prototype.pointer = function(e) {
        var n = {
            x: null,
            y: null
        };
        return (e = (e = e.originalEvent || e || t.event).touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e).pageX ? (n.x = e.pageX, n.y = e.pageY) : (n.x = e.clientX, n.y = e.clientY), n
    }, s.prototype.isNumeric = function(e) {
        return !isNaN(parseFloat(e))
    }, s.prototype.difference = function(e, t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        }
    }, e.fn.owlCarousel = function(t) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each((function() {
            var i = e(this),
                o = i.data("owl.carousel");
            o || (o = new s(this, "object" == typeof t && t), i.data("owl.carousel", o), e.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], (function(t, n) {
                o.register({
                    type: s.Type.Event,
                    name: n
                }), o.$element.on(n + ".owl.carousel.core", e.proxy((function(e) {
                    e.namespace && e.relatedTarget !== this && (this.suppress([n]), o[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
                }), o))
            }))), "string" == typeof t && "_" !== t.charAt(0) && o[t].apply(o, n)
        }))
    }, e.fn.owlCarousel.Constructor = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var s = function(t) {
        this._core = t, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": e.proxy((function(e) {
                e.namespace && this._core.settings.autoRefresh && this.watch()
            }), this)
        }, this._core.options = e.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, s.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(), this._interval = t.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, s.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, s.prototype.destroy = function() {
        var e, n;
        for (e in t.clearInterval(this._interval), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var s = function(t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy((function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                    var n = this._core.settings,
                        i = n.center && Math.ceil(n.items / 2) || n.items,
                        s = n.center && -1 * i || 0,
                        o = (t.property && undefined !== t.property.value ? t.property.value : this._core.current()) + s,
                        r = this._core.clones().length,
                        a = e.proxy((function(e, t) {
                            this.load(t)
                        }), this);
                    for (n.lazyLoadEager > 0 && (i += n.lazyLoadEager, n.loop && (o -= n.lazyLoadEager, i++)); s++ < i;) this.load(r / 2 + this._core.relative(o)), r && e.each(this._core.clones(this._core.relative(o)), a), o++
                }
            }), this)
        }, this._core.options = e.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, s.prototype.load = function(n) {
        var i = this._core.$stage.children().eq(n),
            s = i && i.find(".owl-lazy");
        !s || e.inArray(i.get(0), this._loaded) > -1 || (s.each(e.proxy((function(n, i) {
            var s, o = e(i),
                r = t.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
            this._core.trigger("load", {
                element: o,
                url: r
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", e.proxy((function() {
                o.css("opacity", 1), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }), this)).attr("src", r) : o.is("source") ? o.one("load.owl.lazy", e.proxy((function() {
                this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }), this)).attr("srcset", r) : ((s = new Image).onload = e.proxy((function() {
                o.css({
                    "background-image": 'url("' + r + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }), this), s.src = r)
        }), this)), this._loaded.push(i.get(0)))
    }, s.prototype.destroy = function() {
        var e, t;
        for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Lazy = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var s = function(n) {
        this._core = n, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": e.proxy((function(e) {
                e.namespace && this._core.settings.autoHeight && this.update()
            }), this),
            "changed.owl.carousel": e.proxy((function(e) {
                e.namespace && this._core.settings.autoHeight && "position" === e.property.name && this.update()
            }), this),
            "loaded.owl.lazy": e.proxy((function(e) {
                e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }), this)
        }, this._core.options = e.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var i = this;
        e(t).on("load", (function() {
            i._core.settings.autoHeight && i.update()
        })), e(t).resize((function() {
            i._core.settings.autoHeight && (null != i._intervalId && clearTimeout(i._intervalId), i._intervalId = setTimeout((function() {
                i.update()
            }), 250))
        }))
    };
    s.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, s.prototype.update = function() {
        var t = this._core._current,
            n = t + this._core.settings.items,
            i = this._core.settings.lazyLoad,
            s = this._core.$stage.children().toArray().slice(t, n),
            o = [],
            r = 0;
        e.each(s, (function(t, n) {
            o.push(e(n).height())
        })), (r = Math.max.apply(null, o)) <= 1 && i && this._previousHeight && (r = this._previousHeight), this._previousHeight = r, this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    }, s.prototype.destroy = function() {
        var e, t;
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var s = function(t) {
        this._core = t, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": e.proxy((function(e) {
                e.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }), this),
            "resize.owl.carousel": e.proxy((function(e) {
                e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
            }), this),
            "refreshed.owl.carousel": e.proxy((function(e) {
                e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }), this),
            "changed.owl.carousel": e.proxy((function(e) {
                e.namespace && "position" === e.property.name && this._playing && this.stop()
            }), this),
            "prepared.owl.carousel": e.proxy((function(t) {
                if (t.namespace) {
                    var n = e(t.content).find(".owl-video");
                    n.length && (n.css("display", "none"), this.fetch(n, e(t.content)))
                }
            }), this)
        }, this._core.options = e.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy((function(e) {
            this.play(e)
        }), this))
    };
    s.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, s.prototype.fetch = function(e, t) {
        var n = e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube",
            i = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
            s = e.attr("data-width") || this._core.settings.videoWidth,
            o = e.attr("data-height") || this._core.settings.videoHeight,
            r = e.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if ((i = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) n = "youtube";
        else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
        else {
            if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            n = "vzaar"
        }
        i = i[6], this._videos[r] = {
            type: n,
            id: i,
            width: s,
            height: o
        }, t.attr("data-video", r), this.thumbnail(e, this._videos[r])
    }, s.prototype.thumbnail = function(t, n) {
        var i, s, o = n.width && n.height ? "width:" + n.width + "px;height:" + n.height + "px;" : "",
            r = t.find("img"),
            a = "src",
            l = "",
            c = this._core.settings,
            d = function(n) {
                '<div class="owl-video-play-icon"></div>',
                i = c.lazyLoad ? e("<div/>", {
                    class: "owl-video-tn " + l,
                    srcType: n
                }) : e("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + n + ")"
                }),
                t.after(i),
                t.after('<div class="owl-video-play-icon"></div>')
            };
        if (t.wrap(e("<div/>", {
                class: "owl-video-wrapper",
                style: o
            })), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), r.length) return d(r.attr(a)), r.remove(), !1;
        "youtube" === n.type ? (s = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", d(s)) : "vimeo" === n.type ? e.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(e) {
                s = e[0].thumbnail_large, d(s)
            }
        }) : "vzaar" === n.type && e.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(e) {
                s = e.framegrab_url, d(s)
            }
        })
    }, s.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, s.prototype.play = function(t) {
        var n, i = e(t.target).closest("." + this._core.settings.itemClass),
            s = this._videos[i.attr("data-video")],
            o = s.width || "100%",
            r = s.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), (n = e('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", r), n.attr("width", o), "youtube" === s.type ? n.attr("src", "//www.youtube.com/embed/" + s.id + "?autoplay=1&rel=0&v=" + s.id) : "vimeo" === s.type ? n.attr("src", "//player.vimeo.com/video/" + s.id + "?autoplay=1") : "vzaar" === s.type && n.attr("src", "//view.vzaar.com/" + s.id + "/player?autoplay=true"), e(n).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
    }, s.prototype.isInFullScreen = function() {
        var t = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
        return t && e(t).parent().hasClass("owl-video-frame")
    }, s.prototype.destroy = function() {
        var e, t;
        for (e in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var s = function(t) {
        this.core = t, this.core.options = e.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
            "change.owl.carousel": e.proxy((function(e) {
                e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
            }), this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy((function(e) {
                e.namespace && (this.swapping = "translated" == e.type)
            }), this),
            "translate.owl.carousel": e.proxy((function(e) {
                e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }), this)
        }, this.core.$element.on(this.handlers)
    };
    s.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, s.prototype.swap = function() {
        if (1 === this.core.settings.items && e.support.animation && e.support.transition) {
            this.core.speed(0);
            var t, n = e.proxy(this.clear, this),
                i = this.core.$stage.children().eq(this.previous),
                s = this.core.$stage.children().eq(this.next),
                o = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(e.support.animation.end, n).css({
                left: t + "px"
            }).addClass("animated owl-animated-out").addClass(r)), o && s.one(e.support.animation.end, n).addClass("animated owl-animated-in").addClass(o))
        }
    }, s.prototype.clear = function(t) {
        e(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, s.prototype.destroy = function() {
        var e, t;
        for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Animate = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var s = function(t) {
        this._core = t, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": e.proxy((function(e) {
                e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._paused && (this._time = 0)
            }), this),
            "initialized.owl.carousel": e.proxy((function(e) {
                e.namespace && this._core.settings.autoplay && this.play()
            }), this),
            "play.owl.autoplay": e.proxy((function(e, t, n) {
                e.namespace && this.play(t, n)
            }), this),
            "stop.owl.autoplay": e.proxy((function(e) {
                e.namespace && this.stop()
            }), this),
            "mouseover.owl.autoplay": e.proxy((function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }), this),
            "mouseleave.owl.autoplay": e.proxy((function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }), this),
            "touchstart.owl.core": e.proxy((function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }), this),
            "touchend.owl.core": e.proxy((function() {
                this._core.settings.autoplayHoverPause && this.play()
            }), this)
        }, this._core.$element.on(this._handlers), this._core.options = e.extend({}, s.Defaults, this._core.options)
    };
    s.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, s.prototype._next = function(i) {
        this._call = t.setTimeout(e.proxy(this._next, this, i), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || n.hidden || this._core.next(i || this._core.settings.autoplaySpeed)
    }, s.prototype.read = function() {
        return (new Date).getTime() - this._time
    }, s.prototype.play = function(n, i) {
        var s;
        this._core.is("rotating") || this._core.enter("rotating"), n = n || this._core.settings.autoplayTimeout, s = Math.min(this._time % (this._timeout || n), n), this._paused ? (this._time = this.read(), this._paused = !1) : t.clearTimeout(this._call), this._time += this.read() % n - s, this._timeout = n, this._call = t.setTimeout(e.proxy(this._next, this, i), n - s)
    }, s.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, t.clearTimeout(this._call), this._core.leave("rotating"))
    }, s.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, t.clearTimeout(this._call))
    }, s.prototype.destroy = function() {
        var e, t;
        for (e in this.stop(), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.autoplay = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    var s = function(t) {
        this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": e.proxy((function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }), this),
            "added.owl.carousel": e.proxy((function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
            }), this),
            "remove.owl.carousel": e.proxy((function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
            }), this),
            "changed.owl.carousel": e.proxy((function(e) {
                e.namespace && "position" == e.property.name && this.draw()
            }), this),
            "initialized.owl.carousel": e.proxy((function(e) {
                e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }), this),
            "refreshed.owl.carousel": e.proxy((function(e) {
                e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }), this)
        }, this._core.options = e.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    s.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, s.prototype.initialize = function() {
        var t, n = this._core.settings;
        for (t in this._controls.$relative = (n.navContainer ? e(n.navContainer) : e("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = e("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", e.proxy((function(e) {
                this.prev(n.navSpeed)
            }), this)), this._controls.$next = e("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", e.proxy((function(e) {
                this.next(n.navSpeed)
            }), this)), n.dotsData || (this._templates = [e('<button role="button">').addClass(n.dotClass).append(e("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? e(n.dotsContainer) : e("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", e.proxy((function(t) {
                var i = e(t.target).parent().is(this._controls.$absolute) ? e(t.target).index() : e(t.target).parent().index();
                t.preventDefault(), this.to(i, n.dotsSpeed)
            }), this)), this._overrides) this._core[t] = e.proxy(this[t], this)
    }, s.prototype.destroy = function() {
        var e, t, n, i, s;
        for (e in s = this._core.settings, this._handlers) this.$element.off(e, this._handlers[e]);
        for (t in this._controls) "$relative" === t && s.navContainer ? this._controls[t].html("") : this._controls[t].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, s.prototype.update = function() {
        var e, t, n = this._core.clones().length / 2,
            i = n + this._core.items().length,
            s = this._core.maximum(!0),
            o = this._core.settings,
            r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
            for (this._pages = [], e = n, t = 0, 0; e < i; e++) {
                if (t >= r || 0 === t) {
                    if (this._pages.push({
                            start: Math.min(s, e - n),
                            end: e - n + r - 1
                        }), Math.min(s, e - n) === s) break;
                    t = 0
                }
                t += this._core.mergers(this._core.relative(e))
            }
    }, s.prototype.draw = function() {
        var t, n = this._core.settings,
            i = this._core.items().length <= n.items,
            s = this._core.relative(this._core.current()),
            o = n.loop || n.rewind;
        this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !o && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (t = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : t > 0 ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"))
    }, s.prototype.onTrigger = function(t) {
        var n = this._core.settings;
        t.page = {
            index: e.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
        }
    }, s.prototype.current = function() {
        var t = this._core.relative(this._core.current());
        return e.grep(this._pages, e.proxy((function(e, n) {
            return e.start <= t && e.end >= t
        }), this)).pop()
    }, s.prototype.getPosition = function(t) {
        var n, i, s = this._core.settings;
        return "page" == s.slideBy ? (n = e.inArray(this.current(), this._pages), i = this._pages.length, t ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, t ? n += s.slideBy : n -= s.slideBy), n
    }, s.prototype.next = function(t) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }, s.prototype.prev = function(t) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }, s.prototype.to = function(t, n, i) {
        var s;
        !i && this._pages.length ? (s = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(t % s + s) % s].start, n)) : e.proxy(this._overrides.to, this._core)(t, n)
    }, e.fn.owlCarousel.Constructor.Plugins.Navigation = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    var s = function(n) {
        this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": e.proxy((function(n) {
                n.namespace && "URLHash" === this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation")
            }), this),
            "prepared.owl.carousel": e.proxy((function(t) {
                if (t.namespace) {
                    var n = e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!n) return;
                    this._hashes[n] = t.content
                }
            }), this),
            "changed.owl.carousel": e.proxy((function(n) {
                if (n.namespace && "position" === n.property.name) {
                    var i = this._core.items(this._core.relative(this._core.current())),
                        s = e.map(this._hashes, (function(e, t) {
                            return e === i ? t : null
                        })).join();
                    if (!s || t.location.hash.slice(1) === s) return;
                    t.location.hash = s
                }
            }), this)
        }, this._core.options = e.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), e(t).on("hashchange.owl.navigation", e.proxy((function(e) {
            var n = t.location.hash.substring(1),
                i = this._core.$stage.children(),
                s = this._hashes[n] && i.index(this._hashes[n]);
            undefined !== s && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
        }), this))
    };
    s.Defaults = {
        URLhashListener: !1
    }, s.prototype.destroy = function() {
        var n, i;
        for (n in e(t).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Hash = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    function s(t, n) {
        var i = !1,
            s = t.charAt(0).toUpperCase() + t.slice(1);
        return e.each((t + " " + a.join(s + " ") + s).split(" "), (function(e, t) {
            if (undefined !== r[t]) return i = !n || t, !1
        })), i
    }

    function o(e) {
        return s(e, !0)
    }
    var r = e("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        l = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        c = function() {
            return !!s("transform")
        },
        d = function() {
            return !!s("perspective")
        },
        u = function() {
            return !!s("animation")
        };
    (function() {
        return !!s("transition")
    })() && (e.support.transition = new String(o("transition")), e.support.transition.end = l.transition.end[e.support.transition]), u() && (e.support.animation = new String(o("animation")), e.support.animation.end = l.animation.end[e.support.animation]), c() && (e.support.transform = new String(o("transform")), e.support.transform3d = d())
}(window.Zepto || window.jQuery, window, document),
function(e, t, n) {
    function i(e, t) {
        return typeof e === t
    }

    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function o(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function r(e, t, n) {
        var s;
        for (var r in e)
            if (e[r] in t) return !1 === n ? e[r] : i(s = t[e[r]], "function") ? o(s, n || t) : s;
        return !1
    }

    function a() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function l(e) {
        return e.replace(/([a-z])-([a-z])/g, (function(e, t, n) {
            return t + n.toUpperCase()
        })).replace(/^-/, "")
    }

    function c(e) {
        return e.replace(/([A-Z])/g, (function(e, t) {
            return "-" + t.toLowerCase()
        })).replace(/^ms-/, "-ms-")
    }

    function d(t, n, i) {
        var s;
        if ("getComputedStyle" in e) {
            s = getComputedStyle.call(e, t, n);
            var o = e.console;
            if (null !== s) i && (s = s.getPropertyValue(i));
            else if (o) {
                o[o.error ? "error" : "log"].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else s = !n && t.currentStyle && t.currentStyle[i];
        return s
    }

    function u(e, n, i, s) {
        var o, r, l, c, d = "modernizr",
            u = a("div"),
            p = function() {
                var e = t.body;
                return e || ((e = a(x ? "svg" : "body")).fake = !0), e
            }();
        if (parseInt(i, 10))
            for (; i--;)(l = a("div")).id = s ? s[i] : d + (i + 1), u.appendChild(l);
        return (o = a("style")).type = "text/css", o.id = "s" + d, (p.fake ? p : u).appendChild(o), p.appendChild(u), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), u.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = w.style.overflow, w.style.overflow = "hidden", w.appendChild(p)), r = n(u, e), p.fake ? (p.parentNode.removeChild(p), w.style.overflow = c, w.offsetHeight) : u.parentNode.removeChild(u), !!r
    }

    function p(t, i) {
        var s = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; s--;)
                if (e.CSS.supports(c(t[s]), i)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; s--;) o.push("(" + c(t[s]) + ":" + i + ")");
            return u("@supports (" + (o = o.join(" or ")) + ") { #modernizr { position: absolute; } }", (function(e) {
                return "absolute" == d(e, null, "position")
            }))
        }
        return n
    }

    function h(e, t, o, r) {
        function c() {
            u && (delete S.style, delete S.modElem)
        }
        if (r = !i(r, "undefined") && r, !i(o, "undefined")) {
            var d = p(e, o);
            if (!i(d, "undefined")) return d
        }
        for (var u, h, f, m, g, v = ["modernizr", "tspan", "samp"]; !S.style && v.length;) u = !0, S.modElem = a(v.shift()), S.style = S.modElem.style;
        for (f = e.length, h = 0; f > h; h++)
            if (m = e[h], g = S.style[m], s(m, "-") && (m = l(m)), S.style[m] !== n) {
                if (r || i(o, "undefined")) return c(), "pfx" != t || m;
                try {
                    S.style[m] = o
                } catch (e) {}
                if (S.style[m] != g) return c(), "pfx" != t || m
            }
        return c(), !1
    }

    function f(e, t, n, s, o) {
        var a = e.charAt(0).toUpperCase() + e.slice(1),
            l = (e + " " + $.join(a + " ") + a).split(" ");
        return i(t, "string") || i(t, "undefined") ? h(l, t, s, o) : r(l = (e + " " + T.join(a + " ") + a).split(" "), t, n)
    }

    function m(e, t, i) {
        return f(e, n, n, t, i)
    }
    var g = [],
        v = [],
        y = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout((function() {
                    t(n[e])
                }), 0)
            },
            addTest: function(e, t, n) {
                v.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                v.push({
                    name: null,
                    fn: e
                })
            }
        },
        b = function() {};
    b.prototype = y, b = new b;
    var w = t.documentElement,
        x = "svg" === w.nodeName.toLowerCase(),
        C = "Moz O ms Webkit",
        $ = y._config.usePrefixes ? C.split(" ") : [];
    y._cssomPrefixes = $;
    var T = y._config.usePrefixes ? C.toLowerCase().split(" ") : [];
    y._domPrefixes = T;
    var E = {
        elem: a("modernizr")
    };
    b._q.push((function() {
        delete E.elem
    }));
    var S = {
        style: E.elem.style
    };
    b._q.unshift((function() {
        delete S.style
    })), y.testAllProps = f, y.testAllProps = m, b.addTest("backgroundsize", m("backgroundSize", "100%", !0));
    var _ = y._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    y._prefixes = _;
    var M = y.testStyles = u;
    b.addTest("touchevents", (function() {
            var n;
            if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
            else {
                var i = ["@media (", _.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                M(i, (function(e) {
                    n = 9 === e.offsetTop
                }))
            }
            return n
        })),
        function() {
            var e, t, n, s, o, r;
            for (var a in v)
                if (v.hasOwnProperty(a)) {
                    if (e = [], (t = v[a]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                        for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                    for (s = i(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) 1 === (r = e[o].split(".")).length ? b[r[0]] = s : (!b[r[0]] || b[r[0]] instanceof Boolean || (b[r[0]] = new Boolean(b[r[0]])), b[r[0]][r[1]] = s), g.push((s ? "" : "no-") + r.join("-"))
                }
        }(),
        function(e) {
            var t = w.className,
                n = b._config.classPrefix || "";
            if (x && (t = t.baseVal), b._config.enableJSClass) {
                var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(i, "$1" + n + "js$2")
            }
            b._config.enableClasses && (t += " " + n + e.join(" " + n), x ? w.className.baseVal = t : w.className = t)
        }(g), delete y.addTest, delete y.addAsyncTest;
    for (var k = 0; k < b._q.length; k++) b._q[k]();
    e.Modernizr = b
}(window, document),
function(e, t, n, i) {
    "use strict";

    function s(e, t) {
        var i, s, o, r = [],
            a = 0;
        e && e.isDefaultPrevented() || (e.preventDefault(), t = t || {}, e && e.data && (t = h(e.data.options, t)), i = t.$target || n(e.currentTarget).trigger("blur"), (o = n.fancybox.getInstance()) && o.$trigger && o.$trigger.is(i) || (t.selector ? r = n(t.selector) : (s = i.attr("data-fancybox") || "") ? r = (r = e.data ? e.data.items : []).length ? r.filter('[data-fancybox="' + s + '"]') : n('[data-fancybox="' + s + '"]') : r = [i], (a = n(r).index(i)) < 0 && (a = 0), (o = n.fancybox.open(r, t, a)).$trigger = i))
    }
    if (e.console = e.console || {
            info: function(e) {}
        }, n) {
        if (n.fn.fancybox) return void console.info("fancyBox already initialized");
        var o = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 3e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function(e, t) {
                    return "image" === e.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function(e, t) {
                        return "image" === e.type && "toggleControls"
                    },
                    clickSlide: function(e, t) {
                        return "image" === e.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function(e, t) {
                        return "image" === e.type && "zoom"
                    },
                    dblclickSlide: function(e, t) {
                        return "image" === e.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern"
                    }
                }
            },
            r = n(e),
            a = n(t),
            l = 0,
            c = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                return e.setTimeout(t, 1e3 / 60)
            },
            d = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function(t) {
                e.clearTimeout(t)
            },
            u = function() {
                var e, n = t.createElement("fakeelement"),
                    i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (e in i)
                    if (void 0 !== n.style[e]) return i[e];
                return "transitionend"
            }(),
            p = function(e) {
                return e && e.length && e[0].offsetHeight
            },
            h = function(e, t) {
                var i = n.extend(!0, {}, e, t);
                return n.each(t, (function(e, t) {
                    n.isArray(t) && (i[e] = t)
                })), i
            },
            f = function(e) {
                var i, s;
                return !(!e || e.ownerDocument !== t) && (n(".fancybox-container").css("pointer-events", "none"), i = {
                    x: e.getBoundingClientRect().left + e.offsetWidth / 2,
                    y: e.getBoundingClientRect().top + e.offsetHeight / 2
                }, s = t.elementFromPoint(i.x, i.y) === e, n(".fancybox-container").css("pointer-events", ""), s)
            },
            m = function(e, t, i) {
                var s = this;
                s.opts = h({
                    index: i
                }, n.fancybox.defaults), n.isPlainObject(t) && (s.opts = h(s.opts, t)), n.fancybox.isMobile && (s.opts = h(s.opts, s.opts.mobile)), s.id = s.opts.id || ++l, s.currIndex = parseInt(s.opts.index, 10) || 0, s.prevIndex = null, s.prevPos = null, s.currPos = 0, s.firstRun = !0, s.group = [], s.slides = {}, s.addContent(e), s.group.length && s.init()
            };
        n.extend(m.prototype, {
                init: function() {
                    var i, s, o = this,
                        r = o.group[o.currIndex].opts;
                    r.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && t.body.scrollHeight > e.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (e.innerWidth - t.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), s = "", n.each(r.buttons, (function(e, t) {
                        s += r.btnTpl[t] || ""
                    })), i = n(o.translate(o, r.baseTpl.replace("{{buttons}}", s).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + o.id).addClass(r.baseClass).data("FancyBox", o).appendTo(r.parentEl), o.$refs = {
                        container: i
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach((function(e) {
                        o.$refs[e] = i.find(".fancybox-" + e)
                    })), o.trigger("onInit"), o.activate(), o.jumpTo(o.currIndex)
                },
                translate: function(e, t) {
                    var n = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
                    return t.replace(/\{\{(\w+)\}\}/g, (function(e, t) {
                        return void 0 === n[t] ? e : n[t]
                    }))
                },
                addContent: function(e) {
                    var t, i = this,
                        s = n.makeArray(e);
                    n.each(s, (function(e, t) {
                        var s, o, r, a, l, c = {},
                            d = {};
                        n.isPlainObject(t) ? (c = t, d = t.opts || t) : "object" === n.type(t) && n(t).length ? (d = (s = n(t)).data() || {}, (d = n.extend(!0, {}, d, d.options)).$orig = s, c.src = i.opts.src || d.src || s.attr("href"), c.type || c.src || (c.type = "inline", c.src = t)) : c = {
                            type: "html",
                            src: t + ""
                        }, c.opts = n.extend(!0, {}, i.opts, d), n.isArray(d.buttons) && (c.opts.buttons = d.buttons), n.fancybox.isMobile && c.opts.mobile && (c.opts = h(c.opts, c.opts.mobile)), o = c.type || c.opts.type, a = c.src || "", !o && a && ((r = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (o = "video", c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? o = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? (o = "iframe", c = n.extend(!0, c, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: !1
                                }
                            }
                        })) : "#" === a.charAt(0) && (o = "inline")), o ? c.type = o : i.trigger("objectNeedsType", c), c.contentType || (c.contentType = n.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type), c.index = i.group.length, "auto" == c.opts.smallBtn && (c.opts.smallBtn = n.inArray(c.type, ["html", "inline", "ajax"]) > -1), "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn), c.$thumb = c.opts.$thumb || null, c.opts.$trigger && c.index === i.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"), c.$thumb.length && (c.opts.$orig = c.opts.$trigger)), c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")), c.$thumb && !c.$thumb.length && (c.$thumb = null), c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null), "function" === n.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(t, [i, c])), "function" === n.type(i.opts.caption) && (c.opts.caption = i.opts.caption.apply(t, [i, c])), c.opts.caption instanceof n || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""), "ajax" === c.type && ((l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.filter = l.shift())), c.opts.modal && (c.opts = n.extend(!0, c.opts, {
                            trapFocus: !0,
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), i.group.push(c)
                    })), Object.keys(i.slides).length && (i.updateControls(), (t = i.Thumbs) && t.isActive && (t.create(), t.focus()))
                },
                addEvents: function() {
                    var t = this;
                    t.removeEvents(), t.$refs.container.on("click.fb-close", "[data-fancybox-close]", (function(e) {
                        e.stopPropagation(), e.preventDefault(), t.close(e)
                    })).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", (function(e) {
                        e.stopPropagation(), e.preventDefault(), t.previous()
                    })).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", (function(e) {
                        e.stopPropagation(), e.preventDefault(), t.next()
                    })).on("click.fb", "[data-fancybox-zoom]", (function(e) {
                        t[t.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                    })), r.on("orientationchange.fb resize.fb", (function(e) {
                        e && e.originalEvent && "resize" === e.originalEvent.type ? (t.requestId && d(t.requestId), t.requestId = c((function() {
                            t.update(e)
                        }))) : (t.current && "iframe" === t.current.type && t.$refs.stage.hide(), setTimeout((function() {
                            t.$refs.stage.show(), t.update(e)
                        }), n.fancybox.isMobile ? 600 : 250))
                    })), a.on("keydown.fb", (function(e) {
                        var i = (n.fancybox ? n.fancybox.getInstance() : null).current,
                            s = e.keyCode || e.which;
                        if (9 != s) return !i.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || n(e.target).is("input,textarea,video,audio,select") ? void 0 : 8 === s || 27 === s ? (e.preventDefault(), void t.close(e)) : 37 === s || 38 === s ? (e.preventDefault(), void t.previous()) : 39 === s || 40 === s ? (e.preventDefault(), void t.next()) : void t.trigger("afterKeydown", e, s);
                        i.opts.trapFocus && t.focus(e)
                    })), t.group[t.currIndex].opts.idleTime && (t.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", (function(e) {
                        t.idleSecondsCounter = 0, t.isIdle && t.showControls(), t.isIdle = !1
                    })), t.idleInterval = e.setInterval((function() {
                        ++t.idleSecondsCounter >= t.group[t.currIndex].opts.idleTime && !t.isDragging && (t.isIdle = !0, t.idleSecondsCounter = 0, t.hideControls())
                    }), 1e3))
                },
                removeEvents: function() {
                    var t = this;
                    r.off("orientationchange.fb resize.fb"), a.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), t.idleInterval && (e.clearInterval(t.idleInterval), t.idleInterval = null)
                },
                previous: function(e) {
                    return this.jumpTo(this.currPos - 1, e)
                },
                next: function(e) {
                    return this.jumpTo(this.currPos + 1, e)
                },
                jumpTo: function(e, t) {
                    var i, s, o, r, a, l, c, d, u, h = this,
                        f = h.group.length;
                    if (!(h.isDragging || h.isClosing || h.isAnimating && h.firstRun)) {
                        if (e = parseInt(e, 10), !(o = h.current ? h.current.opts.loop : h.opts.loop) && (e < 0 || e >= f)) return !1;
                        if (i = h.firstRun = !Object.keys(h.slides).length, a = h.current, h.prevIndex = h.currIndex, h.prevPos = h.currPos, r = h.createSlide(e), f > 1 && ((o || r.index < f - 1) && h.createSlide(e + 1), (o || r.index > 0) && h.createSlide(e - 1)), h.current = r, h.currIndex = r.index, h.currPos = r.pos, h.trigger("beforeShow", i), h.updateControls(), r.forcedDuration = void 0, n.isNumeric(t) ? r.forcedDuration = t : t = r.opts[i ? "animationDuration" : "transitionDuration"], t = parseInt(t, 10), s = h.isMoved(r), r.$slide.addClass("fancybox-slide--current"), i) return r.opts.animationEffect && t && h.$refs.container.css("transition-duration", t + "ms"), h.$refs.container.addClass("fancybox-is-open").trigger("focus"), h.loadSlide(r), void h.preload("image");
                        l = n.fancybox.getTranslate(a.$slide), c = n.fancybox.getTranslate(h.$refs.stage), n.each(h.slides, (function(e, t) {
                            n.fancybox.stop(t.$slide, !0)
                        })), a.pos !== r.pos && (a.isComplete = !1), a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), s ? (u = l.left - (a.pos * l.width + a.pos * a.opts.gutter), n.each(h.slides, (function(e, i) {
                            i.$slide.removeClass("fancybox-animated").removeClass((function(e, t) {
                                return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                            }));
                            var s = i.pos * l.width + i.pos * i.opts.gutter;
                            n.fancybox.setTranslate(i.$slide, {
                                top: 0,
                                left: s - c.left + u
                            }), i.pos !== r.pos && i.$slide.addClass("fancybox-slide--" + (i.pos > r.pos ? "next" : "previous")), p(i.$slide), n.fancybox.animate(i.$slide, {
                                top: 0,
                                left: (i.pos - r.pos) * l.width + (i.pos - r.pos) * i.opts.gutter
                            }, t, (function() {
                                i.$slide.css({
                                    transform: "",
                                    opacity: ""
                                }).removeClass("fancybox-slide--next fancybox-slide--previous"), i.pos === h.currPos && h.complete()
                            }))
                        }))) : t && r.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect, a.$slide.addClass("fancybox-slide--" + (a.pos > r.pos ? "next" : "previous")), n.fancybox.animate(a.$slide, d, t, (function() {
                            a.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")
                        }), !1)), r.isLoaded ? h.revealContent(r) : h.loadSlide(r), h.preload("image")
                    }
                },
                createSlide: function(e) {
                    var t, i, s = this;
                    return i = (i = e % s.group.length) < 0 ? s.group.length + i : i, !s.slides[e] && s.group[i] && (t = n('<div class="fancybox-slide"></div>').appendTo(s.$refs.stage), s.slides[e] = n.extend(!0, {}, s.group[i], {
                        pos: e,
                        $slide: t,
                        isLoaded: !1
                    }), s.updateSlide(s.slides[e])), s.slides[e]
                },
                scaleToActual: function(e, t, i) {
                    var s, o, r, a, l, c = this,
                        d = c.current,
                        u = d.$content,
                        p = n.fancybox.getTranslate(d.$slide).width,
                        h = n.fancybox.getTranslate(d.$slide).height,
                        f = d.width,
                        m = d.height;
                    c.isAnimating || c.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (c.isAnimating = !0, n.fancybox.stop(u), e = void 0 === e ? .5 * p : e, t = void 0 === t ? .5 * h : t, (s = n.fancybox.getTranslate(u)).top -= n.fancybox.getTranslate(d.$slide).top, s.left -= n.fancybox.getTranslate(d.$slide).left, a = f / s.width, l = m / s.height, o = .5 * p - .5 * f, r = .5 * h - .5 * m, f > p && ((o = s.left * a - (e * a - e)) > 0 && (o = 0), o < p - f && (o = p - f)), m > h && ((r = s.top * l - (t * l - t)) > 0 && (r = 0), r < h - m && (r = h - m)), c.updateCursor(f, m), n.fancybox.animate(u, {
                        top: r,
                        left: o,
                        scaleX: a,
                        scaleY: l
                    }, i || 366, (function() {
                        c.isAnimating = !1
                    })), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
                },
                scaleToFit: function(e) {
                    var t, i = this,
                        s = i.current,
                        o = s.$content;
                    i.isAnimating || i.isMoved() || !o || "image" != s.type || !s.isLoaded || s.hasError || (i.isAnimating = !0, n.fancybox.stop(o), t = i.getFitPos(s), i.updateCursor(t.width, t.height), n.fancybox.animate(o, {
                        top: t.top,
                        left: t.left,
                        scaleX: t.width / o.width(),
                        scaleY: t.height / o.height()
                    }, e || 366, (function() {
                        i.isAnimating = !1
                    })))
                },
                getFitPos: function(e) {
                    var t, i, s, o, r = e.$content,
                        a = e.$slide,
                        l = e.width || e.opts.width,
                        c = e.height || e.opts.height,
                        d = {};
                    return !!(e.isLoaded && r && r.length) && (t = n.fancybox.getTranslate(this.$refs.stage).width, i = n.fancybox.getTranslate(this.$refs.stage).height, t -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), i -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && c || (l = t, c = i), (l *= s = Math.min(1, t / l, i / c)) > t - .5 && (l = t), (c *= s) > i - .5 && (c = i), "image" === e.type ? (d.top = Math.floor(.5 * (i - c)) + parseFloat(a.css("paddingTop")), d.left = Math.floor(.5 * (t - l)) + parseFloat(a.css("paddingLeft"))) : "video" === e.contentType && (c > l / (o = e.opts.width && e.opts.height ? l / c : e.opts.ratio || 16 / 9) ? c = l / o : l > c * o && (l = c * o)), d.width = l, d.height = c, d)
                },
                update: function(e) {
                    var t = this;
                    n.each(t.slides, (function(n, i) {
                        t.updateSlide(i, e)
                    }))
                },
                updateSlide: function(e, t) {
                    var i = this,
                        s = e && e.$content,
                        o = e.width || e.opts.width,
                        r = e.height || e.opts.height,
                        a = e.$slide;
                    i.adjustCaption(e), s && (o || r || "video" === e.contentType) && !e.hasError && (n.fancybox.stop(s), n.fancybox.setTranslate(s, i.getFitPos(e)), e.pos === i.currPos && (i.isAnimating = !1, i.updateCursor())), i.adjustLayout(e), a.length && (a.trigger("refresh"), e.pos === i.currPos && i.$refs.toolbar.add(i.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)), i.trigger("onUpdate", e, t)
                },
                centerSlide: function(e) {
                    var t = this,
                        i = t.current,
                        s = i.$slide;
                    !t.isClosing && i && (s.siblings().css({
                        transform: "",
                        opacity: ""
                    }), s.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(s, {
                        top: 0,
                        left: 0,
                        opacity: 1
                    }, void 0 === e ? 0 : e, (function() {
                        s.css({
                            transform: "",
                            opacity: ""
                        }), i.isComplete || t.complete()
                    }), !1))
                },
                isMoved: function(e) {
                    var t, i, s = e || this.current;
                    return !!s && (i = n.fancybox.getTranslate(this.$refs.stage), t = n.fancybox.getTranslate(s.$slide), !s.$slide.hasClass("fancybox-animated") && (Math.abs(t.top - i.top) > .5 || Math.abs(t.left - i.left) > .5))
                },
                updateCursor: function(e, t) {
                    var i, s, o = this,
                        r = o.current,
                        a = o.$refs.container;
                    r && !o.isClosing && o.Guestures && (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), s = !!(i = o.canPan(e, t)) || o.isZoomable(), a.toggleClass("fancybox-is-zoomable", s), n("[data-fancybox-zoom]").prop("disabled", !s), i ? a.addClass("fancybox-can-pan") : s && ("zoom" === r.opts.clickContent || n.isFunction(r.opts.clickContent) && "zoom" == r.opts.clickContent(r)) ? a.addClass("fancybox-can-zoomIn") : r.opts.touch && (r.opts.touch.vertical || o.group.length > 1) && "video" !== r.contentType && a.addClass("fancybox-can-swipe"))
                },
                isZoomable: function() {
                    var e, t = this,
                        n = t.current;
                    if (n && !t.isClosing && "image" === n.type && !n.hasError) {
                        if (!n.isLoaded) return !0;
                        if ((e = t.getFitPos(n)) && (n.width > e.width || n.height > e.height)) return !0
                    }
                    return !1
                },
                isScaledDown: function(e, t) {
                    var i = !1,
                        s = this.current,
                        o = s.$content;
                    return void 0 !== e && void 0 !== t ? i = e < s.width && t < s.height : o && (i = (i = n.fancybox.getTranslate(o)).width < s.width && i.height < s.height), i
                },
                canPan: function(e, t) {
                    var i = this.current,
                        s = null,
                        o = !1;
                    return "image" === i.type && (i.isComplete || e && t) && !i.hasError && (o = this.getFitPos(i), void 0 !== e && void 0 !== t ? s = {
                        width: e,
                        height: t
                    } : i.isComplete && (s = n.fancybox.getTranslate(i.$content)), s && o && (o = Math.abs(s.width - o.width) > 1.5 || Math.abs(s.height - o.height) > 1.5)), o
                },
                loadSlide: function(e) {
                    var t, i, s, o = this;
                    if (!e.isLoading && !e.isLoaded) {
                        if (e.isLoading = !0, !1 === o.trigger("beforeLoad", e)) return e.isLoading = !1, !1;
                        switch (t = e.type, (i = e.$slide).off("refresh").trigger("onReset").addClass(e.opts.slideClass), t) {
                            case "image":
                                o.setImage(e);
                                break;
                            case "iframe":
                                o.setIframe(e);
                                break;
                            case "html":
                                o.setContent(e, e.src || e.content);
                                break;
                            case "video":
                                o.setContent(e, e.opts.video.tpl.replace(/\{\{src\}\}/gi, e.src).replace("{{format}}", e.opts.videoFormat || e.opts.video.format || "").replace("{{poster}}", e.thumb || ""));
                                break;
                            case "inline":
                                n(e.src).length ? o.setContent(e, n(e.src)) : o.setError(e);
                                break;
                            case "ajax":
                                o.showLoading(e), s = n.ajax(n.extend({}, e.opts.ajax.settings, {
                                    url: e.src,
                                    success: function(t, n) {
                                        "success" === n && o.setContent(e, t)
                                    },
                                    error: function(t, n) {
                                        t && "abort" !== n && o.setError(e)
                                    }
                                })), i.one("onReset", (function() {
                                    s.abort()
                                }));
                                break;
                            default:
                                o.setError(e)
                        }
                        return !0
                    }
                },
                setImage: function(e) {
                    var i, s = this;
                    setTimeout((function() {
                        var t = e.$image;
                        s.isClosing || !e.isLoading || t && t.length && t[0].complete || e.hasError || s.showLoading(e)
                    }), 50), s.checkSrcset(e), e.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")), !1 !== e.opts.preload && e.opts.width && e.opts.height && e.thumb && (e.width = e.opts.width, e.height = e.opts.height, (i = t.createElement("img")).onerror = function() {
                        n(this).remove(), e.$ghost = null
                    }, i.onload = function() {
                        s.afterLoad(e)
                    }, e.$ghost = n(i).addClass("fancybox-image").appendTo(e.$content).attr("src", e.thumb)), s.setBigImage(e)
                },
                checkSrcset: function(t) {
                    var n, i, s, o, r = t.opts.srcset || t.opts.image.srcset;
                    if (r) {
                        s = e.devicePixelRatio || 1, o = e.innerWidth * s, i = r.split(",").map((function(e) {
                            var t = {};
                            return e.trim().split(/\s+/).forEach((function(e, n) {
                                var i = parseInt(e.substring(0, e.length - 1), 10);
                                if (0 === n) return t.url = e;
                                i && (t.value = i, t.postfix = e[e.length - 1])
                            })), t
                        })), i.sort((function(e, t) {
                            return e.value - t.value
                        }));
                        for (var a = 0; a < i.length; a++) {
                            var l = i[a];
                            if ("w" === l.postfix && l.value >= o || "x" === l.postfix && l.value >= s) {
                                n = l;
                                break
                            }
                        }!n && i.length && (n = i[i.length - 1]), n && (t.src = n.url, t.width && t.height && "w" == n.postfix && (t.height = t.width / t.height * n.value, t.width = n.value), t.opts.srcset = r)
                    }
                },
                setBigImage: function(e) {
                    var i = this,
                        s = t.createElement("img"),
                        o = n(s);
                    e.$image = o.one("error", (function() {
                        i.setError(e)
                    })).one("load", (function() {
                        var t;
                        e.$ghost || (i.resolveImageSlideSize(e, this.naturalWidth, this.naturalHeight), i.afterLoad(e)), i.isClosing || (e.opts.srcset && ((t = e.opts.sizes) && "auto" !== t || (t = (e.width / e.height > 1 && r.width() / r.height() > 1 ? "100" : Math.round(e.width / e.height * 100)) + "vw"), o.attr("sizes", t).attr("srcset", e.opts.srcset)), e.$ghost && setTimeout((function() {
                            e.$ghost && !i.isClosing && e.$ghost.hide()
                        }), Math.min(300, Math.max(1e3, e.height / 1600))), i.hideLoading(e))
                    })).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content), (s.complete || "complete" == s.readyState) && o.naturalWidth && o.naturalHeight ? o.trigger("load") : s.error && o.trigger("error")
                },
                resolveImageSlideSize: function(e, t, n) {
                    var i = parseInt(e.opts.width, 10),
                        s = parseInt(e.opts.height, 10);
                    e.width = t, e.height = n, i > 0 && (e.width = i, e.height = Math.floor(i * n / t)), s > 0 && (e.width = Math.floor(s * t / n), e.height = s)
                },
                setIframe: function(e) {
                    var t, i = this,
                        s = e.opts.iframe,
                        o = e.$slide;
                    e.$content = n('<div class="fancybox-content' + (s.preload ? " fancybox-is-hidden" : "") + '"></div>').css(s.css).appendTo(o), o.addClass("fancybox-slide--" + e.contentType), e.$iframe = t = n(s.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(s.attr).appendTo(e.$content), s.preload ? (i.showLoading(e), t.on("load.fb error.fb", (function(t) {
                        this.isReady = 1, e.$slide.trigger("refresh"), i.afterLoad(e)
                    })), o.on("refresh.fb", (function() {
                        var n, i = e.$content,
                            r = s.css.width,
                            a = s.css.height;
                        if (1 === t[0].isReady) {
                            try {
                                n = t.contents().find("body")
                            } catch (e) {}
                            n && n.length && n.children().length && (o.css("overflow", "visible"), i.css({
                                width: "100%",
                                "max-width": "100%",
                                height: "9999px"
                            }), void 0 === r && (r = Math.ceil(Math.max(n[0].clientWidth, n.outerWidth(!0)))), i.css("width", r || "").css("max-width", ""), void 0 === a && (a = Math.ceil(Math.max(n[0].clientHeight, n.outerHeight(!0)))), i.css("height", a || ""), o.css("overflow", "auto")), i.removeClass("fancybox-is-hidden")
                        }
                    }))) : i.afterLoad(e), t.attr("src", e.src), o.one("onReset", (function() {
                        try {
                            n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                        } catch (e) {}
                        n(this).off("refresh.fb").empty(), e.isLoaded = !1, e.isRevealed = !1
                    }))
                },
                setContent: function(e, t) {
                    var i = this;
                    i.isClosing || (i.hideLoading(e), e.$content && n.fancybox.stop(e.$content), e.$slide.empty(), function(e) {
                        return e && e.hasOwnProperty && e instanceof n
                    }(t) && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"), e.$placeholder = n("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === n.type(t) && (t = n("<div>").append(n.trim(t)).contents()), e.opts.filter && (t = n("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", (function() {
                        n(this).find("video,audio").trigger("pause"), e.$placeholder && (e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (n(this).empty(), e.isLoaded = !1, e.isRevealed = !1)
                    })), n(t).appendTo(e.$slide), n(t).is("video,audio") && (n(t).addClass("fancybox-video"), n(t).wrap("<div></div>"), e.contentType = "video", e.opts.width = e.opts.width || n(t).attr("width"), e.opts.height = e.opts.height || n(t).attr("height")), e.$content = e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), e.$content.siblings().hide(), e.$content.length || (e.$content = e.$slide.wrapInner("<div></div>").children().first()), e.$content.addClass("fancybox-content"), e.$slide.addClass("fancybox-slide--" + e.contentType), i.afterLoad(e))
                },
                setError: function(e) {
                    e.hasError = !0, e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"), e.contentType = "html", this.setContent(e, this.translate(e, e.opts.errorTpl)), e.pos === this.currPos && (this.isAnimating = !1)
                },
                showLoading: function(e) {
                    var t = this;
                    (e = e || t.current) && !e.$spinner && (e.$spinner = n(t.translate(t, t.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"))
                },
                hideLoading: function(e) {
                    (e = e || this.current) && e.$spinner && (e.$spinner.stop().remove(), delete e.$spinner)
                },
                afterLoad: function(e) {
                    var t = this;
                    t.isClosing || (e.isLoading = !1, e.isLoaded = !0, t.trigger("afterLoad", e), t.hideLoading(e), !e.opts.smallBtn || e.$smallBtn && e.$smallBtn.length || (e.$smallBtn = n(t.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", (function(e) {
                        return 2 == e.button && e.preventDefault(), !0
                    })), "image" === e.type && n('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), t.adjustCaption(e), t.adjustLayout(e), e.pos === t.currPos && t.updateCursor(), t.revealContent(e))
                },
                adjustCaption: function(e) {
                    var t, n = this,
                        i = e || n.current,
                        s = i.opts.caption,
                        o = i.opts.preventCaptionOverlap,
                        r = n.$refs.caption,
                        a = !1;
                    r.toggleClass("fancybox-caption--separate", o), o && s && s.length && (i.pos !== n.currPos ? ((t = r.clone().appendTo(r.parent())).children().eq(0).empty().html(s), a = t.outerHeight(!0), t.empty().remove()) : n.$caption && (a = n.$caption.outerHeight(!0)), i.$slide.css("padding-bottom", a || ""))
                },
                adjustLayout: function(e) {
                    var t, n, i, s, o = e || this.current;
                    o.isLoaded && !0 !== o.opts.disableLayoutFix && (o.$content.css("margin-bottom", ""), o.$content.outerHeight() > o.$slide.height() + .5 && (i = o.$slide[0].style["padding-bottom"], s = o.$slide.css("padding-bottom"), parseFloat(s) > 0 && (t = o.$slide[0].scrollHeight, o.$slide.css("padding-bottom", 0), Math.abs(t - o.$slide[0].scrollHeight) < 1 && (n = s), o.$slide.css("padding-bottom", i))), o.$content.css("margin-bottom", n))
                },
                revealContent: function(e) {
                    var t, i, s, o, r = this,
                        a = e.$slide,
                        l = !1,
                        c = !1,
                        d = r.isMoved(e),
                        u = e.isRevealed;
                    return e.isRevealed = !0, t = e.opts[r.firstRun ? "animationEffect" : "transitionEffect"], s = e.opts[r.firstRun ? "animationDuration" : "transitionDuration"], s = parseInt(void 0 === e.forcedDuration ? s : e.forcedDuration, 10), !d && e.pos === r.currPos && s || (t = !1), "zoom" === t && (e.pos === r.currPos && s && "image" === e.type && !e.hasError && (c = r.getThumbPos(e)) ? l = r.getFitPos(e) : t = "fade"), "zoom" === t ? (r.isAnimating = !0, l.scaleX = l.width / c.width, l.scaleY = l.height / c.height, "auto" == (o = e.opts.zoomOpacity) && (o = Math.abs(e.width / e.height - c.width / c.height) > .1), o && (c.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), c), p(e.$content), void n.fancybox.animate(e.$content, l, s, (function() {
                        r.isAnimating = !1, r.complete()
                    }))) : (r.updateSlide(e), t ? (n.fancybox.stop(a), i = "fancybox-slide--" + (e.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + t, a.addClass(i).removeClass("fancybox-slide--current"), e.$content.removeClass("fancybox-is-hidden"), p(a), "image" !== e.type && e.$content.hide().show(0), void n.fancybox.animate(a, "fancybox-slide--current", s, (function() {
                        a.removeClass(i).css({
                            transform: "",
                            opacity: ""
                        }), e.pos === r.currPos && r.complete()
                    }), !0)) : (e.$content.removeClass("fancybox-is-hidden"), u || !d || "image" !== e.type || e.hasError || e.$content.hide().fadeIn("fast"), void(e.pos === r.currPos && r.complete())))
                },
                getThumbPos: function(e) {
                    var t, i, s, o, r, a = !1,
                        l = e.$thumb;
                    return !(!l || !f(l[0])) && (t = n.fancybox.getTranslate(l), i = parseFloat(l.css("border-top-width") || 0), s = parseFloat(l.css("border-right-width") || 0), o = parseFloat(l.css("border-bottom-width") || 0), r = parseFloat(l.css("border-left-width") || 0), a = {
                        top: t.top + i,
                        left: t.left + r,
                        width: t.width - s - r,
                        height: t.height - i - o,
                        scaleX: 1,
                        scaleY: 1
                    }, t.width > 0 && t.height > 0 && a)
                },
                complete: function() {
                    var e, t = this,
                        i = t.current,
                        s = {};
                    !t.isMoved() && i.isLoaded && (i.isComplete || (i.isComplete = !0, i.$slide.siblings().trigger("onReset"), t.preload("inline"), p(i.$slide), i.$slide.addClass("fancybox-slide--complete"), n.each(t.slides, (function(e, i) {
                        i.pos >= t.currPos - 1 && i.pos <= t.currPos + 1 ? s[i.pos] = i : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove())
                    })), t.slides = s), t.isAnimating = !1, t.updateCursor(), t.trigger("afterShow"), i.opts.video.autoStart && i.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", (function() {
                        Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), t.next()
                    })), i.opts.autoFocus && "html" === i.contentType && ((e = i.$content.find("input[autofocus]:enabled:visible:first")).length ? e.trigger("focus") : t.focus(null, !0)), i.$slide.scrollTop(0).scrollLeft(0))
                },
                preload: function(e) {
                    var t, n, i = this;
                    i.group.length < 2 || (n = i.slides[i.currPos + 1], (t = i.slides[i.currPos - 1]) && t.type === e && i.loadSlide(t), n && n.type === e && i.loadSlide(n))
                },
                focus: function(e, i) {
                    var s, o, r = this,
                        a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                    r.isClosing || ((s = (s = !e && r.current && r.current.isComplete ? r.current.$slide.find("*:visible" + (i ? ":not(.fancybox-close-small)" : "")) : r.$refs.container.find("*:visible")).filter(a).filter((function() {
                        return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
                    }))).length ? (o = s.index(t.activeElement), e && e.shiftKey ? (o < 0 || 0 == o) && (e.preventDefault(), s.eq(s.length - 1).trigger("focus")) : (o < 0 || o == s.length - 1) && (e && e.preventDefault(), s.eq(0).trigger("focus"))) : r.$refs.container.trigger("focus"))
                },
                activate: function() {
                    var e = this;
                    n(".fancybox-container").each((function() {
                        var t = n(this).data("FancyBox");
                        t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                    })), e.isVisible = !0, (e.current || e.isIdle) && (e.update(), e.updateControls()), e.trigger("onActivate"), e.addEvents()
                },
                close: function(e, t) {
                    var i, s, o, r, a, l, d, u = this,
                        h = u.current,
                        f = function() {
                            u.cleanUp(e)
                        };
                    return !(u.isClosing || (u.isClosing = !0, !1 === u.trigger("beforeClose", e) ? (u.isClosing = !1, c((function() {
                        u.update()
                    })), 1) : (u.removeEvents(), o = h.$content, i = h.opts.animationEffect, s = n.isNumeric(t) ? t : i ? h.opts.animationDuration : 0, h.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== e ? n.fancybox.stop(h.$slide) : i = !1, h.$slide.siblings().trigger("onReset").remove(), s && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", s + "ms"), u.hideLoading(h), u.hideControls(!0), u.updateCursor(), "zoom" !== i || o && s && "image" === h.type && !u.isMoved() && !h.hasError && (d = u.getThumbPos(h)) || (i = "fade"), "zoom" === i ? (n.fancybox.stop(o), r = n.fancybox.getTranslate(o), l = {
                        top: r.top,
                        left: r.left,
                        scaleX: r.width / d.width,
                        scaleY: r.height / d.height,
                        width: d.width,
                        height: d.height
                    }, a = h.opts.zoomOpacity, "auto" == a && (a = Math.abs(h.width / h.height - d.width / d.height) > .1), a && (d.opacity = 0), n.fancybox.setTranslate(o, l), p(o), n.fancybox.animate(o, d, s, f), 0) : (i && s ? n.fancybox.animate(h.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, s, f) : !0 === e ? setTimeout(f, s) : f(), 0))))
                },
                cleanUp: function(t) {
                    var i, s, o, r = this,
                        a = r.current.opts.$orig;
                    r.current.$slide.trigger("onReset"), r.$refs.container.empty().remove(), r.trigger("afterClose", t), r.current.opts.backFocus && (a && a.length && a.is(":visible") || (a = r.$trigger), a && a.length && (s = e.scrollX, o = e.scrollY, a.trigger("focus"), n("html, body").scrollTop(o).scrollLeft(s))), r.current = null, (i = n.fancybox.getInstance()) ? i.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
                },
                trigger: function(e, t) {
                    var i, s = Array.prototype.slice.call(arguments, 1),
                        o = this,
                        r = t && t.opts ? t : o.current;
                    if (r ? s.unshift(r) : r = o, s.unshift(o), n.isFunction(r.opts[e]) && (i = r.opts[e].apply(r, s)), !1 === i) return i;
                    "afterClose" !== e && o.$refs ? o.$refs.container.trigger(e + ".fb", s) : a.trigger(e + ".fb", s)
                },
                updateControls: function() {
                    var e = this,
                        i = e.current,
                        s = i.index,
                        o = e.$refs.container,
                        r = e.$refs.caption,
                        a = i.opts.caption;
                    i.$slide.trigger("refresh"), a && a.length ? (e.$caption = r, r.children().eq(0).html(a)) : e.$caption = null, e.hasHiddenControls || e.isIdle || e.showControls(), o.find("[data-fancybox-count]").html(e.group.length), o.find("[data-fancybox-index]").html(s + 1), o.find("[data-fancybox-prev]").prop("disabled", !i.opts.loop && s <= 0), o.find("[data-fancybox-next]").prop("disabled", !i.opts.loop && s >= e.group.length - 1), "image" === i.type ? o.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", i.opts.image.src || i.src).show() : i.opts.toolbar && o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(t.activeElement).is(":hidden,[disabled]") && e.$refs.container.trigger("focus")
                },
                hideControls: function(e) {
                    var t = ["infobar", "toolbar", "nav"];
                    !e && this.current.opts.preventCaptionOverlap || t.push("caption"), this.$refs.container.removeClass(t.map((function(e) {
                        return "fancybox-show-" + e
                    })).join(" ")), this.hasHiddenControls = !0
                },
                showControls: function() {
                    var e = this,
                        t = e.current ? e.current.opts : e.opts,
                        n = e.$refs.container;
                    e.hasHiddenControls = !1, e.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && e.group.length > 1)).toggleClass("fancybox-show-caption", !!e.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && e.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal)
                },
                toggleControls: function() {
                    this.hasHiddenControls ? this.showControls() : this.hideControls()
                }
            }), n.fancybox = {
                version: "3.5.7",
                defaults: o,
                getInstance: function(e) {
                    var t = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        i = Array.prototype.slice.call(arguments, 1);
                    return t instanceof m && ("string" === n.type(e) ? t[e].apply(t, i) : "function" === n.type(e) && e.apply(t, i), t)
                },
                open: function(e, t, n) {
                    return new m(e, t, n)
                },
                close: function(e) {
                    var t = this.getInstance();
                    t && (t.close(), !0 === e && this.close(e))
                },
                destroy: function() {
                    this.close(!0), a.add("body").off("click.fb-start", "**")
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: function() {
                    var n = t.createElement("div");
                    return e.getComputedStyle && e.getComputedStyle(n) && e.getComputedStyle(n).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11)
                }(),
                getTranslate: function(e) {
                    var t;
                    return !(!e || !e.length) && {
                        top: (t = e[0].getBoundingClientRect()).top || 0,
                        left: t.left || 0,
                        width: t.width,
                        height: t.height,
                        opacity: parseFloat(e.css("opacity"))
                    }
                },
                setTranslate: function(e, t) {
                    var n = "",
                        i = {};
                    if (e && t) return void 0 === t.left && void 0 === t.top || (n = (void 0 === t.left ? e.position().left : t.left) + "px, " + (void 0 === t.top ? e.position().top : t.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== t.scaleX && void 0 !== t.scaleY ? n += " scale(" + t.scaleX + ", " + t.scaleY + ")" : void 0 !== t.scaleX && (n += " scaleX(" + t.scaleX + ")"), n.length && (i.transform = n), void 0 !== t.opacity && (i.opacity = t.opacity), void 0 !== t.width && (i.width = t.width), void 0 !== t.height && (i.height = t.height), e.css(i)
                },
                animate: function(e, t, i, s, o) {
                    var r, a = this;
                    n.isFunction(i) && (s = i, i = null), a.stop(e), r = a.getTranslate(e), e.on(u, (function(l) {
                        (!l || !l.originalEvent || e.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (a.stop(e), n.isNumeric(i) && e.css("transition-duration", ""), n.isPlainObject(t) ? void 0 !== t.scaleX && void 0 !== t.scaleY && a.setTranslate(e, {
                            top: t.top,
                            left: t.left,
                            width: r.width * t.scaleX,
                            height: r.height * t.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        }) : !0 !== o && e.removeClass(t), n.isFunction(s) && s(l))
                    })), n.isNumeric(i) && e.css("transition-duration", i + "ms"), n.isPlainObject(t) ? (void 0 !== t.scaleX && void 0 !== t.scaleY && (delete t.width, delete t.height, e.parent().hasClass("fancybox-slide--image") && e.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(e, t)) : e.addClass(t), e.data("timer", setTimeout((function() {
                        e.trigger(u)
                    }), i + 33))
                },
                stop: function(e, t) {
                    e && e.length && (clearTimeout(e.data("timer")), t && e.trigger(u), e.off(u).css("transition-duration", ""), e.parent().removeClass("fancybox-is-scaling"))
                }
            }, n.fn.fancybox = function(e) {
                var t;
                return (t = (e = e || {}).selector || !1) ? n("body").off("click.fb-start", t).on("click.fb-start", t, {
                    options: e
                }, s) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: e
                }, s), this
            }, a.on("click.fb-start", "[data-fancybox]", s), a.on("click.fb-start", "[data-fancybox-trigger]", (function(e) {
                n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                    $trigger: n(this)
                })
            })),
            function() {
                var e = null;
                a.on("mousedown mouseup focus blur", ".fancybox-button", (function(t) {
                    switch (t.type) {
                        case "mousedown":
                            e = n(this);
                            break;
                        case "mouseup":
                            e = null;
                            break;
                        case "focusin":
                            n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(e) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            n(".fancybox-button").removeClass("fancybox-focus")
                    }
                }))
            }()
    }
}(window, document, jQuery),
function(e) {
    "use strict";
    var t = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(e) {
                    return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && e[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(e) {
                    return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        },
        n = function(t, n, i) {
            if (t) return i = i || "", "object" === e.type(i) && (i = e.param(i, !0)), e.each(n, (function(e, n) {
                t = t.replace("$" + e, n || "")
            })), i.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + i), t
        };
    e(document).on("objectNeedsType.fb", (function(i, s, o) {
        var r, a, l, c, d, u, p, h = o.src || "",
            f = !1;
        r = e.extend(!0, {}, t, o.opts.media), e.each(r, (function(t, i) {
            if (l = h.match(i.matcher)) {
                if (f = i.type, p = t, u = {}, i.paramPlace && l[i.paramPlace]) {
                    "?" == (d = l[i.paramPlace])[0] && (d = d.substring(1)), d = d.split("&");
                    for (var s = 0; s < d.length; ++s) {
                        var r = d[s].split("=", 2);
                        2 == r.length && (u[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")))
                    }
                }
                return c = e.extend(!0, {}, i.params, o.opts[t], u), h = "function" === e.type(i.url) ? i.url.call(this, l, c, o) : n(i.url, l, c), a = "function" === e.type(i.thumb) ? i.thumb.call(this, l, c, o) : n(i.thumb, l), "youtube" === t ? h = h.replace(/&t=((\d+)m)?(\d+)s/, (function(e, t, n, i) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
                })) : "vimeo" === t && (h = h.replace("&%23", "#")), !1
            }
        })), f ? (o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = a), "iframe" === f && (o.opts = e.extend(!0, o.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), e.extend(o, {
            type: f,
            src: h,
            origSrc: o.src,
            contentSource: p,
            contentType: "image" === f ? "image" : "gmap_place" == p || "gmap_search" == p ? "map" : "video"
        })) : h && (o.type = o.opts.defaultType)
    }));
    var i = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function(e) {
            var t, n = this;
            this[e].loaded ? setTimeout((function() {
                n.done(e)
            })) : this[e].loading || (this[e].loading = !0, (t = document.createElement("script")).type = "text/javascript", t.src = this[e].src, "youtube" === e ? window.onYouTubeIframeAPIReady = function() {
                n[e].loaded = !0, n.done(e)
            } : t.onload = function() {
                n[e].loaded = !0, n.done(e)
            }, document.body.appendChild(t))
        },
        done: function(t) {
            var n, i;
            "youtube" === t && delete window.onYouTubeIframeAPIReady, (n = e.fancybox.getInstance()) && (i = n.current.$content.find("iframe"), "youtube" === t && void 0 !== YT && YT ? new YT.Player(i.attr("id"), {
                events: {
                    onStateChange: function(e) {
                        0 == e.data && n.next()
                    }
                }
            }) : "vimeo" === t && void 0 !== Vimeo && Vimeo && new Vimeo.Player(i).on("ended", (function() {
                n.next()
            })))
        }
    };
    e(document).on({
        "afterShow.fb": function(e, t, n) {
            t.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource)
        }
    })
}(jQuery),
function(e, t, n) {
    "use strict";
    var i = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
            return e.setTimeout(t, 1e3 / 60)
        },
        s = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function(t) {
            e.clearTimeout(t)
        },
        o = function(t) {
            var n = [];
            for (var i in t = (t = t.originalEvent || t || e.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t]) t[i].pageX ? n.push({
                x: t[i].pageX,
                y: t[i].pageY
            }) : t[i].clientX && n.push({
                x: t[i].clientX,
                y: t[i].clientY
            });
            return n
        },
        r = function(e, t, n) {
            return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
        },
        a = function(e) {
            if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(e.get(0).onclick) || e.data("selectable")) return !0;
            for (var t = 0, i = e[0].attributes, s = i.length; t < s; t++)
                if ("data-fancybox-" === i[t].nodeName.substr(0, 14)) return !0;
            return !1
        },
        l = function(t) {
            var n = e.getComputedStyle(t)["overflow-y"],
                i = e.getComputedStyle(t)["overflow-x"],
                s = ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight,
                o = ("scroll" === i || "auto" === i) && t.scrollWidth > t.clientWidth;
            return s || o
        },
        c = function(e) {
            for (var t = !1; !(t = l(e.get(0))) && ((e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body")););
            return t
        },
        d = function(e) {
            var t = this;
            t.instance = e, t.$bg = e.$refs.bg, t.$stage = e.$refs.stage, t.$container = e.$refs.container, t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(t, "ontouchstart"))
        };
    d.prototype.destroy = function() {
        var e = this;
        e.$container.off(".fb.touch"), n(t).off(".fb.touch"), e.requestId && (s(e.requestId), e.requestId = null), e.tapped && (clearTimeout(e.tapped), e.tapped = null)
    }, d.prototype.ontouchstart = function(i) {
        var s = this,
            l = n(i.target),
            d = s.instance,
            u = d.current,
            p = u.$slide,
            h = u.$content,
            f = "touchstart" == i.type;
        if (f && s.$container.off("mousedown.fb.touch"), (!i.originalEvent || 2 != i.originalEvent.button) && p.length && l.length && !a(l) && !a(l.parent()) && (l.is("img") || !(i.originalEvent.clientX > l[0].clientWidth + l.offset().left))) {
            if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return i.stopPropagation(), void i.preventDefault();
            s.realPoints = s.startPoints = o(i), s.startPoints.length && (u.touch && i.stopPropagation(), s.startEvent = i, s.canTap = !0, s.$target = l, s.$content = h, s.opts = u.opts.touch, s.isPanning = !1, s.isSwiping = !1, s.isZooming = !1, s.isScrolling = !1, s.canPan = d.canPan(), s.startTime = (new Date).getTime(), s.distanceX = s.distanceY = s.distance = 0, s.canvasWidth = Math.round(p[0].clientWidth), s.canvasHeight = Math.round(p[0].clientHeight), s.contentLastPos = null, s.contentStartPos = n.fancybox.getTranslate(s.$content) || {
                top: 0,
                left: 0
            }, s.sliderStartPos = n.fancybox.getTranslate(p), s.stagePos = n.fancybox.getTranslate(d.$refs.stage), s.sliderStartPos.top -= s.stagePos.top, s.sliderStartPos.left -= s.stagePos.left, s.contentStartPos.top -= s.stagePos.top, s.contentStartPos.left -= s.stagePos.left, n(t).off(".fb.touch").on(f ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(s, "ontouchend")).on(f ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(s, "ontouchmove")), n.fancybox.isMobile && t.addEventListener("scroll", s.onscroll, !0), ((s.opts || s.canPan) && (l.is(s.$stage) || s.$stage.find(l).length) || (l.is(".fancybox-image") && i.preventDefault(), n.fancybox.isMobile && l.parents(".fancybox-caption").length)) && (s.isScrollable = c(l) || c(l.parent()), n.fancybox.isMobile && s.isScrollable || i.preventDefault(), (1 === s.startPoints.length || u.hasError) && (s.canPan ? (n.fancybox.stop(s.$content), s.isPanning = !0) : s.isSwiping = !0, s.$container.addClass("fancybox-is-grabbing")), 2 === s.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (s.canTap = !1, s.isSwiping = !1, s.isPanning = !1, s.isZooming = !0, n.fancybox.stop(s.$content), s.centerPointStartX = .5 * (s.startPoints[0].x + s.startPoints[1].x) - n(e).scrollLeft(), s.centerPointStartY = .5 * (s.startPoints[0].y + s.startPoints[1].y) - n(e).scrollTop(), s.percentageOfImageAtPinchPointX = (s.centerPointStartX - s.contentStartPos.left) / s.contentStartPos.width, s.percentageOfImageAtPinchPointY = (s.centerPointStartY - s.contentStartPos.top) / s.contentStartPos.height, s.startDistanceBetweenFingers = r(s.startPoints[0], s.startPoints[1]))))
        }
    }, d.prototype.onscroll = function(e) {
        this.isScrolling = !0, t.removeEventListener("scroll", this.onscroll, !0)
    }, d.prototype.ontouchmove = function(e) {
        var t = this;
        return void 0 !== e.originalEvent.buttons && 0 === e.originalEvent.buttons ? void t.ontouchend(e) : t.isScrolling ? void(t.canTap = !1) : (t.newPoints = o(e), void((t.opts || t.canPan) && t.newPoints.length && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || e.preventDefault(), t.distanceX = r(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = r(t.newPoints[0], t.startPoints[0], "y"), t.distance = r(t.newPoints[0], t.startPoints[0]), t.distance > 0 && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))))
    }, d.prototype.onSwipe = function(t) {
        var o, r = this,
            a = r.instance,
            l = r.isSwiping,
            c = r.sliderStartPos.left || 0;
        if (!0 !== l) "x" == l && (r.distanceX > 0 && (r.instance.group.length < 2 || 0 === r.instance.current.index && !r.instance.current.opts.loop) ? c += Math.pow(r.distanceX, .8) : r.distanceX < 0 && (r.instance.group.length < 2 || r.instance.current.index === r.instance.group.length - 1 && !r.instance.current.opts.loop) ? c -= Math.pow(-r.distanceX, .8) : c += r.distanceX), r.sliderLastPos = {
            top: "x" == l ? 0 : r.sliderStartPos.top + r.distanceY,
            left: c
        }, r.requestId && (s(r.requestId), r.requestId = null), r.requestId = i((function() {
            r.sliderLastPos && (n.each(r.instance.slides, (function(e, t) {
                var i = t.pos - r.instance.currPos;
                n.fancybox.setTranslate(t.$slide, {
                    top: r.sliderLastPos.top,
                    left: r.sliderLastPos.left + i * r.canvasWidth + i * t.opts.gutter
                })
            })), r.$container.addClass("fancybox-is-sliding"))
        }));
        else if (Math.abs(r.distance) > 10) {
            if (r.canTap = !1, a.group.length < 2 && r.opts.vertical ? r.isSwiping = "y" : a.isDragging || !1 === r.opts.vertical || "auto" === r.opts.vertical && n(e).width() > 800 ? r.isSwiping = "x" : (o = Math.abs(180 * Math.atan2(r.distanceY, r.distanceX) / Math.PI), r.isSwiping = o > 45 && o < 135 ? "y" : "x"), "y" === r.isSwiping && n.fancybox.isMobile && r.isScrollable) return void(r.isScrolling = !0);
            a.isDragging = r.isSwiping, r.startPoints = r.newPoints, n.each(a.slides, (function(e, t) {
                var i, s;
                n.fancybox.stop(t.$slide), i = n.fancybox.getTranslate(t.$slide), s = n.fancybox.getTranslate(a.$refs.stage), t.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass((function(e, t) {
                    return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                })), t.pos === a.current.pos && (r.sliderStartPos.top = i.top - s.top, r.sliderStartPos.left = i.left - s.left), n.fancybox.setTranslate(t.$slide, {
                    top: i.top - s.top,
                    left: i.left - s.left
                })
            })), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop()
        }
    }, d.prototype.onPan = function() {
        var e = this;
        r(e.newPoints[0], e.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? e.startPoints = e.newPoints : (e.canTap = !1, e.contentLastPos = e.limitMovement(), e.requestId && s(e.requestId), e.requestId = i((function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })))
    }, d.prototype.limitMovement = function() {
        var e, t, n, i, s, o, r = this,
            a = r.canvasWidth,
            l = r.canvasHeight,
            c = r.distanceX,
            d = r.distanceY,
            u = r.contentStartPos,
            p = u.left,
            h = u.top,
            f = u.width,
            m = u.height;
        return s = f > a ? p + c : p, o = h + d, e = Math.max(0, .5 * a - .5 * f), t = Math.max(0, .5 * l - .5 * m), n = Math.min(a - f, .5 * a - .5 * f), i = Math.min(l - m, .5 * l - .5 * m), c > 0 && s > e && (s = e - 1 + Math.pow(-e + p + c, .8) || 0), c < 0 && s < n && (s = n + 1 - Math.pow(n - p - c, .8) || 0), d > 0 && o > t && (o = t - 1 + Math.pow(-t + h + d, .8) || 0), d < 0 && o < i && (o = i + 1 - Math.pow(i - h - d, .8) || 0), {
            top: o,
            left: s
        }
    }, d.prototype.limitPosition = function(e, t, n, i) {
        var s = this.canvasWidth,
            o = this.canvasHeight;
        return n > s ? e = (e = e > 0 ? 0 : e) < s - n ? s - n : e : e = Math.max(0, s / 2 - n / 2), i > o ? t = (t = t > 0 ? 0 : t) < o - i ? o - i : t : t = Math.max(0, o / 2 - i / 2), {
            top: t,
            left: e
        }
    }, d.prototype.onZoom = function() {
        var t = this,
            o = t.contentStartPos,
            a = o.width,
            l = o.height,
            c = o.left,
            d = o.top,
            u = r(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
            p = Math.floor(a * u),
            h = Math.floor(l * u),
            f = (a - p) * t.percentageOfImageAtPinchPointX,
            m = (l - h) * t.percentageOfImageAtPinchPointY,
            g = (t.newPoints[0].x + t.newPoints[1].x) / 2 - n(e).scrollLeft(),
            v = (t.newPoints[0].y + t.newPoints[1].y) / 2 - n(e).scrollTop(),
            y = g - t.centerPointStartX,
            b = {
                top: d + (m + (v - t.centerPointStartY)),
                left: c + (f + y),
                scaleX: u,
                scaleY: u
            };
        t.canTap = !1, t.newWidth = p, t.newHeight = h, t.contentLastPos = b, t.requestId && s(t.requestId), t.requestId = i((function() {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        }))
    }, d.prototype.ontouchend = function(e) {
        var i = this,
            r = i.isSwiping,
            a = i.isPanning,
            l = i.isZooming,
            c = i.isScrolling;
        if (i.endPoints = o(e), i.dMs = Math.max((new Date).getTime() - i.startTime, 1), i.$container.removeClass("fancybox-is-grabbing"), n(t).off(".fb.touch"), t.removeEventListener("scroll", i.onscroll, !0), i.requestId && (s(i.requestId), i.requestId = null), i.isSwiping = !1, i.isPanning = !1, i.isZooming = !1, i.isScrolling = !1, i.instance.isDragging = !1, i.canTap) return i.onTap(e);
        i.speed = 100, i.velocityX = i.distanceX / i.dMs * .5, i.velocityY = i.distanceY / i.dMs * .5, a ? i.endPanning() : l ? i.endZooming() : i.endSwiping(r, c)
    }, d.prototype.endSwiping = function(e, t) {
        var i = this,
            s = !1,
            o = i.instance.group.length,
            r = Math.abs(i.distanceX),
            a = "x" == e && o > 1 && (i.dMs > 130 && r > 10 || r > 50);
        i.sliderLastPos = null, "y" == e && !t && Math.abs(i.distanceY) > 50 ? (n.fancybox.animate(i.instance.current.$slide, {
            top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
            opacity: 0
        }, 200), s = i.instance.close(!0, 250)) : a && i.distanceX > 0 ? s = i.instance.previous(300) : a && i.distanceX < 0 && (s = i.instance.next(300)), !1 !== s || "x" != e && "y" != e || i.instance.centerSlide(200), i.$container.removeClass("fancybox-is-sliding")
    }, d.prototype.endPanning = function() {
        var e, t, i, s = this;
        s.contentLastPos && (!1 === s.opts.momentum || s.dMs > 350 ? (e = s.contentLastPos.left, t = s.contentLastPos.top) : (e = s.contentLastPos.left + 500 * s.velocityX, t = s.contentLastPos.top + 500 * s.velocityY), (i = s.limitPosition(e, t, s.contentStartPos.width, s.contentStartPos.height)).width = s.contentStartPos.width, i.height = s.contentStartPos.height, n.fancybox.animate(s.$content, i, 366))
    }, d.prototype.endZooming = function() {
        var e, t, i, s, o = this,
            r = o.instance.current,
            a = o.newWidth,
            l = o.newHeight;
        o.contentLastPos && (e = o.contentLastPos.left, s = {
            top: t = o.contentLastPos.top,
            left: e,
            width: a,
            height: l,
            scaleX: 1,
            scaleY: 1
        }, n.fancybox.setTranslate(o.$content, s), a < o.canvasWidth && l < o.canvasHeight ? o.instance.scaleToFit(150) : a > r.width || l > r.height ? o.instance.scaleToActual(o.centerPointStartX, o.centerPointStartY, 150) : (i = o.limitPosition(e, t, a, l), n.fancybox.animate(o.$content, i, 150)))
    }, d.prototype.onTap = function(t) {
        var i, s = this,
            r = n(t.target),
            a = s.instance,
            l = a.current,
            c = t && o(t) || s.startPoints,
            d = c[0] ? c[0].x - n(e).scrollLeft() - s.stagePos.left : 0,
            u = c[0] ? c[0].y - n(e).scrollTop() - s.stagePos.top : 0,
            p = function(e) {
                var i = l.opts[e];
                if (n.isFunction(i) && (i = i.apply(a, [l, t])), i) switch (i) {
                    case "close":
                        a.close(s.startEvent);
                        break;
                    case "toggleControls":
                        a.toggleControls();
                        break;
                    case "next":
                        a.next();
                        break;
                    case "nextOrClose":
                        a.group.length > 1 ? a.next() : a.close(s.startEvent);
                        break;
                    case "zoom":
                        "image" == l.type && (l.isLoaded || l.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(d, u) : a.group.length < 2 && a.close(s.startEvent))
                }
            };
        if ((!t.originalEvent || 2 != t.originalEvent.button) && (r.is("img") || !(d > r[0].clientWidth + r.offset().left))) {
            if (r.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) i = "Outside";
            else if (r.is(".fancybox-slide")) i = "Slide";
            else {
                if (!a.current.$content || !a.current.$content.find(r).addBack().filter(r).length) return;
                i = "Content"
            }
            if (s.tapped) {
                if (clearTimeout(s.tapped), s.tapped = null, Math.abs(d - s.tapX) > 50 || Math.abs(u - s.tapY) > 50) return this;
                p("dblclick" + i)
            } else s.tapX = d, s.tapY = u, l.opts["dblclick" + i] && l.opts["dblclick" + i] !== l.opts["click" + i] ? s.tapped = setTimeout((function() {
                s.tapped = null, a.isAnimating || p("click" + i)
            }), 500) : p("click" + i);
            return this
        }
    }, n(t).on("onActivate.fb", (function(e, t) {
        t && !t.Guestures && (t.Guestures = new d(t))
    })).on("beforeClose.fb", (function(e, t) {
        t && t.Guestures && t.Guestures.destroy()
    }))
}(window, document, jQuery),
function(e, t) {
    "use strict";
    t.extend(!0, t.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    var n = function(e) {
        this.instance = e, this.init()
    };
    t.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var e = this,
                n = e.instance,
                i = n.group[n.currIndex].opts.slideShow;
            e.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", (function() {
                e.toggle()
            })), n.group.length < 2 || !i ? e.$button.hide() : i.progress && (e.$progress = t('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
        },
        set: function(e) {
            var n = this,
                i = n.instance,
                s = i.current;
            s && (!0 === e || s.opts.loop || i.currIndex < i.group.length - 1) ? n.isActive && "video" !== s.contentType && (n.$progress && t.fancybox.animate(n.$progress.show(), {
                scaleX: 1
            }, s.opts.slideShow.speed), n.timer = setTimeout((function() {
                i.current.opts.loop || i.current.index != i.group.length - 1 ? i.next() : i.jumpTo(0)
            }), s.opts.slideShow.speed)) : (n.stop(), i.idleSecondsCounter = 0, i.showControls())
        },
        clear: function() {
            var e = this;
            clearTimeout(e.timer), e.timer = null, e.$progress && e.$progress.removeAttr("style").hide()
        },
        start: function() {
            var e = this,
                t = e.instance.current;
            t && (e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), e.isActive = !0, t.isComplete && e.set(!0), e.instance.trigger("onSlideShowChange", !0))
        },
        stop: function() {
            var e = this,
                t = e.instance.current;
            e.clear(), e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), e.isActive = !1, e.instance.trigger("onSlideShowChange", !1), e.$progress && e.$progress.removeAttr("style").hide()
        },
        toggle: function() {
            var e = this;
            e.isActive ? e.stop() : e.start()
        }
    }), t(e).on({
        "onInit.fb": function(e, t) {
            t && !t.SlideShow && (t.SlideShow = new n(t))
        },
        "beforeShow.fb": function(e, t, n, i) {
            var s = t && t.SlideShow;
            i ? s && n.opts.slideShow.autoStart && s.start() : s && s.isActive && s.clear()
        },
        "afterShow.fb": function(e, t, n) {
            var i = t && t.SlideShow;
            i && i.isActive && i.set()
        },
        "afterKeydown.fb": function(n, i, s, o, r) {
            var a = i && i.SlideShow;
            !a || !s.opts.slideShow || 80 !== r && 32 !== r || t(e.activeElement).is("button,a,input") || (o.preventDefault(), a.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(e, t) {
            var n = t && t.SlideShow;
            n && n.stop()
        }
    }), t(e).on("visibilitychange", (function() {
        var n = t.fancybox.getInstance(),
            i = n && n.SlideShow;
        i && i.isActive && (e.hidden ? i.clear() : i.set())
    }))
}(document, jQuery),
function(e, t) {
    "use strict";
    var n = function() {
        for (var t = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], n = {}, i = 0; i < t.length; i++) {
            var s = t[i];
            if (s && s[1] in e) {
                for (var o = 0; o < s.length; o++) n[t[0][o]] = s[o];
                return n
            }
        }
        return !1
    }();
    if (n) {
        var i = {
            request: function(t) {
                (t = t || e.documentElement)[n.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                e[n.exitFullscreen]()
            },
            toggle: function(t) {
                t = t || e.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
            },
            isFullscreen: function() {
                return Boolean(e[n.fullscreenElement])
            },
            enabled: function() {
                return Boolean(e[n.fullscreenEnabled])
            }
        };
        t.extend(!0, t.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), t(e).on(n.fullscreenchange, (function() {
            var e = i.isFullscreen(),
                n = t.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", e), n.$refs.container.toggleClass("fancybox-is-fullscreen", e), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !e).toggleClass("fancybox-button--fsexit", e))
        }))
    }
    t(e).on({
        "onInit.fb": function(e, t) {
            n ? t && t.group[t.currIndex].opts.fullScreen ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", (function(e) {
                e.stopPropagation(), e.preventDefault(), i.toggle()
            })), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && i.request(), t.FullScreen = i) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        },
        "afterKeydown.fb": function(e, t, n, i, s) {
            t && t.FullScreen && 70 === s && (i.preventDefault(), t.FullScreen.toggle())
        },
        "beforeClose.fb": function(e, t) {
            t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit()
        }
    })
}(document, jQuery),
function(e, t) {
    "use strict";
    var n = "fancybox-thumbs";
    t.fancybox.defaults = t.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, t.fancybox.defaults);
    var i = function(e) {
        this.init(e)
    };
    t.extend(i.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(e) {
            var t = this,
                n = e.group,
                i = 0;
            t.instance = e, t.opts = n[e.currIndex].opts.thumbs, e.Thumbs = t, t.$button = e.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var s = 0, o = n.length; s < o && (n[s].thumb && i++, !(i > 1)); s++);
            i > 1 && t.opts ? (t.$button.removeAttr("style").on("click", (function() {
                t.toggle()
            })), t.isActive = !0) : t.$button.hide()
        },
        create: function() {
            var e, i = this,
                s = i.instance,
                o = i.opts.parentEl,
                r = [];
            i.$grid || (i.$grid = t('<div class="' + n + " " + n + "-" + i.opts.axis + '"></div>').appendTo(s.$refs.container.find(o).addBack().filter(o)), i.$grid.on("click", "a", (function() {
                s.jumpTo(t(this).attr("data-index"))
            }))), i.$list || (i.$list = t('<div class="' + n + '__list">').appendTo(i.$grid)), t.each(s.group, (function(t, n) {
                (e = n.thumb) || "image" !== n.type || (e = n.src), r.push('<a href="javascript:;" tabindex="0" data-index="' + t + '"' + (e && e.length ? ' style="background-image:url(' + e + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            })), i.$list[0].innerHTML = r.join(""), "x" === i.opts.axis && i.$list.width(parseInt(i.$grid.css("padding-right"), 10) + s.group.length * i.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(e) {
            var t, n, i = this,
                s = i.$list,
                o = i.$grid;
            i.instance.current && (n = (t = s.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + i.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === i.opts.axis && (n.top < 0 || n.top > s.height() - t.outerHeight()) ? s.stop().animate({
                scrollTop: s.scrollTop() + n.top
            }, e) : "x" === i.opts.axis && (n.left < o.scrollLeft() || n.left > o.scrollLeft() + (o.width() - t.outerWidth())) && s.parent().stop().animate({
                scrollLeft: n.left
            }, e))
        },
        update: function() {
            var e = this;
            e.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), e.isVisible ? (e.$grid || e.create(), e.instance.trigger("onThumbsShow"), e.focus(0)) : e.$grid && e.instance.trigger("onThumbsHide"), e.instance.update()
        },
        hide: function() {
            this.isVisible = !1, this.update()
        },
        show: function() {
            this.isVisible = !0, this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update()
        }
    }), t(e).on({
        "onInit.fb": function(e, t) {
            var n;
            t && !t.Thumbs && ((n = new i(t)).isActive && !0 === n.opts.autoStart && n.show())
        },
        "beforeShow.fb": function(e, t, n, i) {
            var s = t && t.Thumbs;
            s && s.isVisible && s.focus(i ? 0 : 250)
        },
        "afterKeydown.fb": function(e, t, n, i, s) {
            var o = t && t.Thumbs;
            o && o.isActive && 71 === s && (i.preventDefault(), o.toggle())
        },
        "beforeClose.fb": function(e, t) {
            var n = t && t.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, jQuery),
function(e, t) {
    "use strict";
    t.extend(!0, t.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function(e, t) {
                return !e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), t(e).on("click", "[data-fancybox-share]", (function() {
        var e, n, i = t.fancybox.getInstance(),
            s = i.current || null;
        s && ("function" === t.type(s.opts.share.url) && (e = s.opts.share.url.apply(s, [i, s])), n = s.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === s.type ? encodeURIComponent(s.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, function(e) {
            var t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            return String(e).replace(/[&<>"'`=\/]/g, (function(e) {
                return t[e]
            }))
        }(e)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), t.fancybox.open({
            src: i.translate(i, n),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function(e, t) {
                    i.$refs.container.one("beforeClose.fb", (function() {
                        e.close(null, 0)
                    })), t.$content.find(".fancybox-share__button").click((function() {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    }))
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    }))
}(document, jQuery),
function(e, t, n) {
    "use strict";

    function i() {
        var t = e.location.hash.substr(1),
            n = t.split("-"),
            i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
        return {
            hash: t,
            index: i < 1 ? 1 : i,
            gallery: n.join("-")
        }
    }

    function s(e) {
        "" !== e.gallery && n("[data-fancybox='" + n.escapeSelector(e.gallery) + "']").eq(e.index - 1).focus().trigger("click.fb-start")
    }

    function o(e) {
        var t, n;
        return !!e && ("" !== (n = (t = e.current ? e.current.opts : e.opts).hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && n)
    }
    n.escapeSelector || (n.escapeSelector = function(e) {
        return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }))
    }), n((function() {
        !1 !== n.fancybox.defaults.hash && (n(t).on({
            "onInit.fb": function(e, t) {
                var n, s;
                !1 !== t.group[t.currIndex].opts.hash && (n = i(), (s = o(t)) && n.gallery && s == n.gallery && (t.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(n, i, s, r) {
                var a;
                s && !1 !== s.opts.hash && (a = o(i)) && (i.currentHash = a + (i.group.length > 1 ? "-" + (s.index + 1) : ""), e.location.hash !== "#" + i.currentHash && (r && !i.origHash && (i.origHash = e.location.hash), i.hashTimer && clearTimeout(i.hashTimer), i.hashTimer = setTimeout((function() {
                    "replaceState" in e.history ? (e.history[r ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + i.currentHash), r && (i.hasCreatedHistory = !0)) : e.location.hash = i.currentHash, i.hashTimer = null
                }), 300)))
            },
            "beforeClose.fb": function(n, i, s) {
                s && !1 !== s.opts.hash && (clearTimeout(i.hashTimer), i.currentHash && i.hasCreatedHistory ? e.history.back() : i.currentHash && ("replaceState" in e.history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + (i.origHash || "")) : e.location.hash = i.origHash), i.currentHash = null)
            }
        }), n(e).on("hashchange.fb", (function() {
            var e = i(),
                t = null;
            n.each(n(".fancybox-container").get().reverse(), (function(e, i) {
                var s = n(i).data("FancyBox");
                if (s && s.currentHash) return t = s, !1
            })), t ? t.currentHash === e.gallery + "-" + e.index || 1 === e.index && t.currentHash == e.gallery || (t.currentHash = null, t.close()) : "" !== e.gallery && s(e)
        })), setTimeout((function() {
            n.fancybox.getInstance() || s(i())
        }), 50))
    }))
}(window, document, jQuery),
function(e, t) {
    "use strict";
    var n = (new Date).getTime();
    t(e).on({
        "onInit.fb": function(e, t, i) {
            t.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", (function(e) {
                var i = t.current,
                    s = (new Date).getTime();
                t.group.length < 2 || !1 === i.opts.wheel || "auto" === i.opts.wheel && "image" !== i.type || (e.preventDefault(), e.stopPropagation(), i.$slide.hasClass("fancybox-animated") || (e = e.originalEvent || e, s - n < 250 || (n = s, t[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())))
            }))
        }
    })
}(document, jQuery),
function(e, t) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], (function(n) {
        return t(e, n)
    })) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
}(window, (function(e, t) {
    "use strict";

    function n(n, o, a) {
        function l(e, t, i) {
            var s, o = "$()." + n + '("' + t + '")';
            return e.each((function(e, l) {
                var c = a.data(l, n);
                if (c) {
                    var d = c[t];
                    if (d && "_" != t.charAt(0)) {
                        var u = d.apply(c, i);
                        s = void 0 === s ? u : s
                    } else r(o + " is not a valid method")
                } else r(n + " not initialized. Cannot call methods, i.e. " + o)
            })), void 0 !== s ? s : e
        }

        function c(e, t) {
            e.each((function(e, i) {
                var s = a.data(i, n);
                s ? (s.option(t), s._init()) : (s = new o(i, t), a.data(i, n, s))
            }))
        }(a = a || t || e.jQuery) && (o.prototype.option || (o.prototype.option = function(e) {
            a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e))
        }), a.fn[n] = function(e) {
            if ("string" == typeof e) {
                var t = s.call(arguments, 1);
                return l(this, e, t)
            }
            return c(this, e), this
        }, i(a))
    }

    function i(e) {
        !e || e && e.bridget || (e.bridget = n)
    }
    var s = Array.prototype.slice,
        o = e.console,
        r = void 0 === o ? function() {} : function(e) {
            o.error(e)
        };
    return i(t || e.jQuery), n
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, (function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var n = this._events = this._events || {},
                i = n[e] = n[e] || [];
            return -1 == i.indexOf(t) && i.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[e] = n[e] || {})[t] = !0, this
        }
    }, t.off = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = n.indexOf(t);
            return -1 != i && n.splice(i, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            n = n.slice(0), t = t || [];
            for (var i = this._onceEvents && this._onceEvents[e], s = 0; s < n.length; s++) {
                var o = n[s];
                i && i[o] && (this.off(e, o), delete i[o]), o.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, (function() {
    "use strict";

    function e(e) {
        var t = parseFloat(e);
        return -1 == e.indexOf("%") && !isNaN(t) && t
    }

    function t(e) {
        var t = getComputedStyle(e);
        return t || o("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
    }

    function n() {
        if (!l) {
            l = !0;
            var n = document.createElement("div");
            n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style.boxSizing = "border-box";
            var o = document.body || document.documentElement;
            o.appendChild(n);
            var r = t(n);
            s = 200 == Math.round(e(r.width)), i.isBoxSizeOuter = s, o.removeChild(n)
        }
    }

    function i(i) {
        if (n(), "string" == typeof i && (i = document.querySelector(i)), i && "object" == typeof i && i.nodeType) {
            var o = t(i);
            if ("none" == o.display) return function() {
                for (var e = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, t = 0; t < a; t++) e[r[t]] = 0;
                return e
            }();
            var l = {};
            l.width = i.offsetWidth, l.height = i.offsetHeight;
            for (var c = l.isBorderBox = "border-box" == o.boxSizing, d = 0; d < a; d++) {
                var u = r[d],
                    p = o[u],
                    h = parseFloat(p);
                l[u] = isNaN(h) ? 0 : h
            }
            var f = l.paddingLeft + l.paddingRight,
                m = l.paddingTop + l.paddingBottom,
                g = l.marginLeft + l.marginRight,
                v = l.marginTop + l.marginBottom,
                y = l.borderLeftWidth + l.borderRightWidth,
                b = l.borderTopWidth + l.borderBottomWidth,
                w = c && s,
                x = e(o.width);
            !1 !== x && (l.width = x + (w ? 0 : f + y));
            var C = e(o.height);
            return !1 !== C && (l.height = C + (w ? 0 : m + b)), l.innerWidth = l.width - (f + y), l.innerHeight = l.height - (m + b), l.outerWidth = l.width + g, l.outerHeight = l.height + v, l
        }
    }
    var s, o = "undefined" == typeof console ? function() {} : function(e) {
            console.error(e)
        },
        r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        a = r.length,
        l = !1;
    return i
})),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, (function() {
    "use strict";
    var e = function() {
        var e = window.Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
            var i = t[n] + "MatchesSelector";
            if (e[i]) return i
        }
    }();
    return function(t, n) {
        return t[e](n)
    }
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], (function(n) {
        return t(e, n)
    })) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
}(window, (function(e, t) {
    var n = {
            extend: function(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            },
            modulo: function(e, t) {
                return (e % t + t) % t
            }
        },
        i = Array.prototype.slice;
    n.makeArray = function(e) {
        return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? i.call(e) : [e]
    }, n.removeFrom = function(e, t) {
        var n = e.indexOf(t); - 1 != n && e.splice(n, 1)
    }, n.getParent = function(e, n) {
        for (; e.parentNode && e != document.body;)
            if (e = e.parentNode, t(e, n)) return e
    }, n.getQueryElement = function(e) {
        return "string" == typeof e ? document.querySelector(e) : e
    }, n.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, n.filterFindElements = function(e, i) {
        e = n.makeArray(e);
        var s = [];
        return e.forEach((function(e) {
            if (e instanceof HTMLElement) {
                if (!i) return void s.push(e);
                t(e, i) && s.push(e);
                for (var n = e.querySelectorAll(i), o = 0; o < n.length; o++) s.push(n[o])
            }
        })), s
    }, n.debounceMethod = function(e, t, n) {
        n = n || 100;
        var i = e.prototype[t],
            s = t + "Timeout";
        e.prototype[t] = function() {
            var e = this[s];
            clearTimeout(e);
            var t = arguments,
                o = this;
            this[s] = setTimeout((function() {
                i.apply(o, t), delete o[s]
            }), n)
        }
    }, n.docReady = function(e) {
        var t = document.readyState;
        "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
    }, n.toDashed = function(e) {
        return e.replace(/(.)([A-Z])/g, (function(e, t, n) {
            return t + "-" + n
        })).toLowerCase()
    };
    var s = e.console;
    return n.htmlInit = function(t, i) {
        n.docReady((function() {
            var o = n.toDashed(i),
                r = "data-" + o,
                a = document.querySelectorAll("[" + r + "]"),
                l = document.querySelectorAll(".js-" + o),
                c = n.makeArray(a).concat(n.makeArray(l)),
                d = r + "-options",
                u = e.jQuery;
            c.forEach((function(e) {
                var n, o = e.getAttribute(r) || e.getAttribute(d);
                try {
                    n = o && JSON.parse(o)
                } catch (t) {
                    return void(s && s.error("Error parsing " + r + " on " + e.className + ": " + t))
                }
                var a = new t(e, n);
                u && u.data(e, i, a)
            }))
        }))
    }, n
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, (function(e, t) {
    "use strict";

    function n(e, t) {
        e && (this.element = e, this.layout = t, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    var i = document.documentElement.style,
        s = "string" == typeof i.transition ? "transition" : "WebkitTransition",
        o = "string" == typeof i.transform ? "transform" : "WebkitTransform",
        r = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[s],
        a = {
            transform: o,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay"
        },
        l = n.prototype = Object.create(e.prototype);
    l.constructor = n, l._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, l.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, l.getSize = function() {
        this.size = t(this.element)
    }, l.css = function(e) {
        var t = this.element.style;
        for (var n in e) {
            t[a[n] || n] = e[n]
        }
    }, l.getPosition = function() {
        var e = getComputedStyle(this.element),
            t = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            i = e[t ? "left" : "right"],
            s = e[n ? "top" : "bottom"],
            o = parseFloat(i),
            r = parseFloat(s),
            a = this.layout.size; - 1 != i.indexOf("%") && (o = o / 100 * a.width), -1 != s.indexOf("%") && (r = r / 100 * a.height), o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r, o -= t ? a.paddingLeft : a.paddingRight, r -= n ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = r
    }, l.layoutPosition = function() {
        var e = this.layout.size,
            t = {},
            n = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            s = n ? "paddingLeft" : "paddingRight",
            o = n ? "left" : "right",
            r = n ? "right" : "left",
            a = this.position.x + e[s];
        t[o] = this.getXValue(a), t[r] = "";
        var l = i ? "paddingTop" : "paddingBottom",
            c = i ? "top" : "bottom",
            d = i ? "bottom" : "top",
            u = this.position.y + e[l];
        t[c] = this.getYValue(u), t[d] = "", this.css(t), this.emitEvent("layout", [this])
    }, l.getXValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
    }, l.getYValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
    }, l._transitionTo = function(e, t) {
        this.getPosition();
        var n = this.position.x,
            i = this.position.y,
            s = e == this.position.x && t == this.position.y;
        if (this.setPosition(e, t), !s || this.isTransitioning) {
            var o = e - n,
                r = t - i,
                a = {};
            a.transform = this.getTranslate(o, r), this.transition({
                to: a,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        } else this.layoutPosition()
    }, l.getTranslate = function(e, t) {
        return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (t = this.layout._getOption("originTop") ? t : -t) + "px, 0)"
    }, l.goTo = function(e, t) {
        this.setPosition(e, t), this.layoutPosition()
    }, l.moveTo = l._transitionTo, l.setPosition = function(e, t) {
        this.position.x = parseFloat(e), this.position.y = parseFloat(t)
    }, l._nonTransition = function(e) {
        for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this)
    }, l.transition = function(e) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var t = this._transn;
            for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
            for (n in e.to) t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0);
            if (e.from) {
                this.css(e.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
        } else this._nonTransition(e)
    };
    var c = "opacity," + function(e) {
        return e.replace(/([A-Z])/g, (function(e) {
            return "-" + e.toLowerCase()
        }))
    }(o);
    l.enableTransition = function() {
        if (!this.isTransitioning) {
            var e = this.layout.options.transitionDuration;
            e = "number" == typeof e ? e + "ms" : e, this.css({
                transitionProperty: c,
                transitionDuration: e,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(r, this, !1)
        }
    }, l.onwebkitTransitionEnd = function(e) {
        this.ontransitionend(e)
    }, l.onotransitionend = function(e) {
        this.ontransitionend(e)
    };
    var d = {
        "-webkit-transform": "transform"
    };
    l.ontransitionend = function(e) {
        if (e.target === this.element) {
            var t = this._transn,
                n = d[e.propertyName] || e.propertyName;
            if (delete t.ingProperties[n], function(e) {
                    for (var t in e) return !1;
                    return !0
                }(t.ingProperties) && this.disableTransition(), n in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[n]), n in t.onEnd) t.onEnd[n].call(this), delete t.onEnd[n];
            this.emitEvent("transitionEnd", [this])
        }
    }, l.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1
    }, l._removeStyles = function(e) {
        var t = {};
        for (var n in e) t[n] = "";
        this.css(t)
    };
    var u = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return l.removeTransitionStyles = function() {
        this.css(u)
    }, l.stagger = function(e) {
        e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
    }, l.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, l.remove = function() {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
            this.removeElem()
        })), void this.hide()) : void this.removeElem()
    }, l.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: e.hiddenStyle,
            to: e.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, l.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, l.getHideRevealTransitionEndProperty = function(e) {
        var t = this.layout.options[e];
        if (t.opacity) return "opacity";
        for (var n in t) return n
    }, l.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: e.visibleStyle,
            to: e.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, l.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, l.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, n
})),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], (function(n, i, s, o) {
        return t(e, n, i, s, o)
    })) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
}(window, (function(e, t, n, i, s) {
    "use strict";

    function o(e, t) {
        var n = i.getQueryElement(e);
        if (n) {
            this.element = n, l && (this.$element = l(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(t);
            var s = ++d;
            this.element.outlayerGUID = s, u[s] = this, this._create(), this._getOption("initLayout") && this.layout()
        } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (n || e))
    }

    function r(e) {
        function t() {
            e.apply(this, arguments)
        }
        return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t
    }
    var a = e.console,
        l = e.jQuery,
        c = function() {},
        d = 0,
        u = {};
    o.namespace = "outlayer", o.Item = s, o.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var p = o.prototype;
    i.extend(p, t.prototype), p.option = function(e) {
        i.extend(this.options, e)
    }, p._getOption = function(e) {
        var t = this.constructor.compatOptions[e];
        return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
    }, o.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, p._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, p.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, p._itemize = function(e) {
        for (var t = this._filterFindItemElements(e), n = this.constructor.Item, i = [], s = 0; s < t.length; s++) {
            var o = new n(t[s], this);
            i.push(o)
        }
        return i
    }, p._filterFindItemElements = function(e) {
        return i.filterFindElements(e, this.options.itemSelector)
    }, p.getItemElements = function() {
        return this.items.map((function(e) {
            return e.element
        }))
    }, p.layout = function() {
        this._resetLayout(), this._manageStamps();
        var e = this._getOption("layoutInstant"),
            t = void 0 !== e ? e : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, p._init = p.layout, p._resetLayout = function() {
        this.getSize()
    }, p.getSize = function() {
        this.size = n(this.element)
    }, p._getMeasurement = function(e, t) {
        var i, s = this.options[e];
        s ? ("string" == typeof s ? i = this.element.querySelector(s) : s instanceof HTMLElement && (i = s), this[e] = i ? n(i)[t] : s) : this[e] = 0
    }, p.layoutItems = function(e, t) {
        e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
    }, p._getItemsForLayout = function(e) {
        return e.filter((function(e) {
            return !e.isIgnored
        }))
    }, p._layoutItems = function(e, t) {
        if (this._emitCompleteOnItems("layout", e), e && e.length) {
            var n = [];
            e.forEach((function(e) {
                var i = this._getItemLayoutPosition(e);
                i.item = e, i.isInstant = t || e.isLayoutInstant, n.push(i)
            }), this), this._processLayoutQueue(n)
        }
    }, p._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, p._processLayoutQueue = function(e) {
        this.updateStagger(), e.forEach((function(e, t) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, t)
        }), this)
    }, p.updateStagger = function() {
        var e = this.options.stagger;
        return null == e ? void(this.stagger = 0) : (this.stagger = function(e) {
            if ("number" == typeof e) return e;
            var t = e.match(/(^\d*\.?\d*)(\w*)/),
                n = t && t[1],
                i = t && t[2];
            return n.length ? (n = parseFloat(n)) * (h[i] || 1) : 0
        }(e), this.stagger)
    }, p._positionItem = function(e, t, n, i, s) {
        i ? e.goTo(t, n) : (e.stagger(s * this.stagger), e.moveTo(t, n))
    }, p._postLayout = function() {
        this.resizeContainer()
    }, p.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, p._getContainerSize = c, p._setContainerMeasure = function(e, t) {
        if (void 0 !== e) {
            var n = this.size;
            n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
        }
    }, p._emitCompleteOnItems = function(e, t) {
        function n() {
            s.dispatchEvent(e + "Complete", null, [t])
        }

        function i() {
            ++r == o && n()
        }
        var s = this,
            o = t.length;
        if (t && o) {
            var r = 0;
            t.forEach((function(t) {
                t.once(e, i)
            }))
        } else n()
    }, p.dispatchEvent = function(e, t, n) {
        var i = t ? [t].concat(n) : n;
        if (this.emitEvent(e, i), l)
            if (this.$element = this.$element || l(this.element), t) {
                var s = l.Event(t);
                s.type = e, this.$element.trigger(s, n)
            } else this.$element.trigger(e, n)
    }, p.ignore = function(e) {
        var t = this.getItem(e);
        t && (t.isIgnored = !0)
    }, p.unignore = function(e) {
        var t = this.getItem(e);
        t && delete t.isIgnored
    }, p.stamp = function(e) {
        (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
    }, p.unstamp = function(e) {
        (e = this._find(e)) && e.forEach((function(e) {
            i.removeFrom(this.stamps, e), this.unignore(e)
        }), this)
    }, p._find = function(e) {
        if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), i.makeArray(e)
    }, p._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, p._getBoundingRect = function() {
        var e = this.element.getBoundingClientRect(),
            t = this.size;
        this._boundingRect = {
            left: e.left + t.paddingLeft + t.borderLeftWidth,
            top: e.top + t.paddingTop + t.borderTopWidth,
            right: e.right - (t.paddingRight + t.borderRightWidth),
            bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
        }
    }, p._manageStamp = c, p._getElementOffset = function(e) {
        var t = e.getBoundingClientRect(),
            i = this._boundingRect,
            s = n(e);
        return {
            left: t.left - i.left - s.marginLeft,
            top: t.top - i.top - s.marginTop,
            right: i.right - t.right - s.marginRight,
            bottom: i.bottom - t.bottom - s.marginBottom
        }
    }, p.handleEvent = i.handleEvent, p.bindResize = function() {
        e.addEventListener("resize", this), this.isResizeBound = !0
    }, p.unbindResize = function() {
        e.removeEventListener("resize", this), this.isResizeBound = !1
    }, p.onresize = function() {
        this.resize()
    }, i.debounceMethod(o, "onresize", 100), p.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, p.needsResizeLayout = function() {
        var e = n(this.element);
        return this.size && e && e.innerWidth !== this.size.innerWidth
    }, p.addItems = function(e) {
        var t = this._itemize(e);
        return t.length && (this.items = this.items.concat(t)), t
    }, p.appended = function(e) {
        var t = this.addItems(e);
        t.length && (this.layoutItems(t, !0), this.reveal(t))
    }, p.prepended = function(e) {
        var t = this._itemize(e);
        if (t.length) {
            var n = this.items.slice(0);
            this.items = t.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n)
        }
    }, p.reveal = function(e) {
        if (this._emitCompleteOnItems("reveal", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach((function(e, n) {
                e.stagger(n * t), e.reveal()
            }))
        }
    }, p.hide = function(e) {
        if (this._emitCompleteOnItems("hide", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach((function(e, n) {
                e.stagger(n * t), e.hide()
            }))
        }
    }, p.revealItemElements = function(e) {
        var t = this.getItems(e);
        this.reveal(t)
    }, p.hideItemElements = function(e) {
        var t = this.getItems(e);
        this.hide(t)
    }, p.getItem = function(e) {
        for (var t = 0; t < this.items.length; t++) {
            var n = this.items[t];
            if (n.element == e) return n
        }
    }, p.getItems = function(e) {
        e = i.makeArray(e);
        var t = [];
        return e.forEach((function(e) {
            var n = this.getItem(e);
            n && t.push(n)
        }), this), t
    }, p.remove = function(e) {
        var t = this.getItems(e);
        this._emitCompleteOnItems("remove", t), t && t.length && t.forEach((function(e) {
            e.remove(), i.removeFrom(this.items, e)
        }), this)
    }, p.destroy = function() {
        var e = this.element.style;
        e.height = "", e.position = "", e.width = "", this.items.forEach((function(e) {
            e.destroy()
        })), this.unbindResize();
        var t = this.element.outlayerGUID;
        delete u[t], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, o.data = function(e) {
        var t = (e = i.getQueryElement(e)) && e.outlayerGUID;
        return t && u[t]
    }, o.create = function(e, t) {
        var n = r(o);
        return n.defaults = i.extend({}, o.defaults), i.extend(n.defaults, t), n.compatOptions = i.extend({}, o.compatOptions), n.namespace = e, n.data = o.data, n.Item = r(s), i.htmlInit(n, e), l && l.bridget && l.bridget(e, n), n
    };
    var h = {
        ms: 1,
        s: 1e3
    };
    return o.Item = s, o
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
}(window, (function(e) {
    "use strict";

    function t() {
        e.Item.apply(this, arguments)
    }
    var n = t.prototype = Object.create(e.Item.prototype),
        i = n._create;
    n._create = function() {
        this.id = this.layout.itemGUID++, i.call(this), this.sortData = {}
    }, n.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var e = this.layout.options.getSortData,
                t = this.layout._sorters;
            for (var n in e) {
                var i = t[n];
                this.sortData[n] = i(this.element, this)
            }
        }
    };
    var s = n.destroy;
    return n.destroy = function() {
        s.apply(this, arguments), this.css({
            display: ""
        })
    }, t
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
}(window, (function(e, t) {
    "use strict";

    function n(e) {
        this.isotope = e, e && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
    }
    var i = n.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach((function(e) {
        i[e] = function() {
            return t.prototype[e].apply(this.isotope, arguments)
        }
    })), i.needsVerticalResizeLayout = function() {
        var t = e(this.isotope.element);
        return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
    }, i._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, i.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, i.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, i.getSegmentSize = function(e, t) {
        var n = e + t,
            i = "outer" + t;
        if (this._getMeasurement(n, i), !this[n]) {
            var s = this.getFirstItemSize();
            this[n] = s && s[i] || this.isotope.size["inner" + t]
        }
    }, i.getFirstItemSize = function() {
        var t = this.isotope.filteredItems[0];
        return t && t.element && e(t.element)
    }, i.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, i.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, n.modes = {}, n.create = function(e, t) {
        function s() {
            n.apply(this, arguments)
        }
        return s.prototype = Object.create(i), s.prototype.constructor = s, t && (s.options = t), s.prototype.namespace = e, n.modes[e] = s, s
    }, n
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, (function(e, t) {
    var n = e.create("masonry");
    n.compatOptions.fitWidth = "isFitWidth";
    var i = n.prototype;
    return i._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var e = 0; e < this.cols; e++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, i.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var e = this.items[0],
                n = e && e.element;
            this.columnWidth = n && t(n).outerWidth || this.containerWidth
        }
        var i = this.columnWidth += this.gutter,
            s = this.containerWidth + this.gutter,
            o = s / i,
            r = i - s % i;
        o = Math[r && r < 1 ? "round" : "floor"](o), this.cols = Math.max(o, 1)
    }, i.getContainerWidth = function() {
        var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
            n = t(e);
        this.containerWidth = n && n.innerWidth
    }, i._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = e.size.outerWidth % this.columnWidth,
            n = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, e), s = {
                x: this.columnWidth * i.col,
                y: i.y
            }, o = i.y + e.size.outerHeight, r = n + i.col, a = i.col; a < r; a++) this.colYs[a] = o;
        return s
    }, i._getTopColPosition = function(e) {
        var t = this._getTopColGroup(e),
            n = Math.min.apply(Math, t);
        return {
            col: t.indexOf(n),
            y: n
        }
    }, i._getTopColGroup = function(e) {
        if (e < 2) return this.colYs;
        for (var t = [], n = this.cols + 1 - e, i = 0; i < n; i++) t[i] = this._getColGroupY(i, e);
        return t
    }, i._getColGroupY = function(e, t) {
        if (t < 2) return this.colYs[e];
        var n = this.colYs.slice(e, e + t);
        return Math.max.apply(Math, n)
    }, i._getHorizontalColPosition = function(e, t) {
        var n = this.horizontalColIndex % this.cols;
        n = e > 1 && n + e > this.cols ? 0 : n;
        var i = t.size.outerWidth && t.size.outerHeight;
        return this.horizontalColIndex = i ? n + e : this.horizontalColIndex, {
            col: n,
            y: this._getColGroupY(n, e)
        }
    }, i._manageStamp = function(e) {
        var n = t(e),
            i = this._getElementOffset(e),
            s = this._getOption("originLeft") ? i.left : i.right,
            o = s + n.outerWidth,
            r = Math.floor(s / this.columnWidth);
        r = Math.max(0, r);
        var a = Math.floor(o / this.columnWidth);
        a -= o % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var l = (this._getOption("originTop") ? i.top : i.bottom) + n.outerHeight, c = r; c <= a; c++) this.colYs[c] = Math.max(l, this.colYs[c])
    }, i._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
    }, i._getContainerFitWidth = function() {
        for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
        return (this.cols - e) * this.columnWidth - this.gutter
    }, i.needsResizeLayout = function() {
        var e = this.containerWidth;
        return this.getContainerWidth(), e != this.containerWidth
    }, n
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
}(window, (function(e, t) {
    "use strict";
    var n = e.create("masonry"),
        i = n.prototype,
        s = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var o in t.prototype) s[o] || (i[o] = t.prototype[o]);
    var r = i.measureColumns;
    i.measureColumns = function() {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = i._getOption;
    return i._getOption = function(e) {
        return "fitWidth" == e ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, n
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, (function(e) {
    "use strict";
    var t = e.create("fitRows"),
        n = t.prototype;
    return n._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, n._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = e.size.outerWidth + this.gutter,
            n = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && t + this.x > n && (this.x = 0, this.y = this.maxY);
        var i = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += t, i
    }, n._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, t
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, (function(e) {
    "use strict";
    var t = e.create("vertical", {
            horizontalAlignment: 0
        }),
        n = t.prototype;
    return n._resetLayout = function() {
        this.y = 0
    }, n._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
            n = this.y;
        return this.y += e.size.outerHeight, {
            x: t,
            y: n
        }
    }, n._getContainerSize = function() {
        return {
            height: this.y
        }
    }, t
})),
function(e, t) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], (function(n, i, s, o, r, a) {
        return t(e, n, i, s, o, r, a)
    })) : "object" == typeof module && module.exports ? module.exports = t(e, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : e.Isotope = t(e, e.Outlayer, e.getSize, e.matchesSelector, e.fizzyUIUtils, e.Isotope.Item, e.Isotope.LayoutMode)
}(window, (function(e, t, n, i, s, o, r) {
    var a = e.jQuery,
        l = String.prototype.trim ? function(e) {
            return e.trim()
        } : function(e) {
            return e.replace(/^\s+|\s+$/g, "")
        },
        c = t.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    c.Item = o, c.LayoutMode = r;
    var d = c.prototype;
    d._create = function() {
        for (var e in this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(e)
    }, d.reloadItems = function() {
        this.itemGUID = 0, t.prototype.reloadItems.call(this)
    }, d._itemize = function() {
        for (var e = t.prototype._itemize.apply(this, arguments), n = 0; n < e.length; n++) {
            var i = e[n];
            i.id = this.itemGUID++
        }
        return this._updateItemsSortData(e), e
    }, d._initLayoutMode = function(e) {
        var t = r.modes[e],
            n = this.options[e] || {};
        this.options[e] = t.options ? s.extend(t.options, n) : n, this.modes[e] = new t(this)
    }, d.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, d._layout = function() {
        var e = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0
    }, d.arrange = function(e) {
        this.option(e), this._getIsInstant();
        var t = this._filter(this.items);
        this.filteredItems = t.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout()
    }, d._init = d.arrange, d._hideReveal = function(e) {
        this.reveal(e.needReveal), this.hide(e.needHide)
    }, d._getIsInstant = function() {
        var e = this._getOption("layoutInstant"),
            t = void 0 !== e ? e : !this._isLayoutInited;
        return this._isInstant = t, t
    }, d._bindArrangeComplete = function() {
        function e() {
            t && n && i && s.dispatchEvent("arrangeComplete", null, [s.filteredItems])
        }
        var t, n, i, s = this;
        this.once("layoutComplete", (function() {
            t = !0, e()
        })), this.once("hideComplete", (function() {
            n = !0, e()
        })), this.once("revealComplete", (function() {
            i = !0, e()
        }))
    }, d._filter = function(e) {
        var t = this.options.filter;
        t = t || "*";
        for (var n = [], i = [], s = [], o = this._getFilterTest(t), r = 0; r < e.length; r++) {
            var a = e[r];
            if (!a.isIgnored) {
                var l = o(a);
                l && n.push(a), l && a.isHidden ? i.push(a) : l || a.isHidden || s.push(a)
            }
        }
        return {
            matches: n,
            needReveal: i,
            needHide: s
        }
    }, d._getFilterTest = function(e) {
        return a && this.options.isJQueryFiltering ? function(t) {
            return a(t.element).is(e)
        } : "function" == typeof e ? function(t) {
            return e(t.element)
        } : function(t) {
            return i(t.element, e)
        }
    }, d.updateSortData = function(e) {
        var t;
        e ? (e = s.makeArray(e), t = this.getItems(e)) : t = this.items, this._getSorters(), this._updateItemsSortData(t)
    }, d._getSorters = function() {
        var e = this.options.getSortData;
        for (var t in e) {
            var n = e[t];
            this._sorters[t] = u(n)
        }
    }, d._updateItemsSortData = function(e) {
        for (var t = e && e.length, n = 0; t && n < t; n++) {
            e[n].updateSortData()
        }
    };
    var u = function(e) {
        if ("string" != typeof e) return e;
        var t = l(e).split(" "),
            n = t[0],
            i = n.match(/^\[(.+)\]$/),
            s = function(e, t) {
                return e ? function(t) {
                    return t.getAttribute(e)
                } : function(e) {
                    var n = e.querySelector(t);
                    return n && n.textContent
                }
            }(i && i[1], n),
            o = c.sortDataParsers[t[1]];
        return o ? function(e) {
            return e && o(s(e))
        } : function(e) {
            return e && s(e)
        }
    };
    c.sortDataParsers = {
        parseInt: function(e) {
            return parseInt(e, 10)
        },
        parseFloat: function(e) {
            return parseFloat(e)
        }
    }, d._sort = function() {
        if (this.options.sortBy) {
            var e = s.makeArray(this.options.sortBy);
            this._getIsSameSortBy(e) || (this.sortHistory = e.concat(this.sortHistory));
            var t = function(e, t) {
                return function(n, i) {
                    for (var s = 0; s < e.length; s++) {
                        var o = e[s],
                            r = n.sortData[o],
                            a = i.sortData[o];
                        if (r > a || r < a) return (r > a ? 1 : -1) * ((void 0 !== t[o] ? t[o] : t) ? 1 : -1)
                    }
                    return 0
                }
            }(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(t)
        }
    }, d._getIsSameSortBy = function(e) {
        for (var t = 0; t < e.length; t++)
            if (e[t] != this.sortHistory[t]) return !1;
        return !0
    }, d._mode = function() {
        var e = this.options.layoutMode,
            t = this.modes[e];
        if (!t) throw new Error("No layout mode: " + e);
        return t.options = this.options[e], t
    }, d._resetLayout = function() {
        t.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, d._getItemLayoutPosition = function(e) {
        return this._mode()._getItemLayoutPosition(e)
    }, d._manageStamp = function(e) {
        this._mode()._manageStamp(e)
    }, d._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, d.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, d.appended = function(e) {
        var t = this.addItems(e);
        if (t.length) {
            var n = this._filterRevealAdded(t);
            this.filteredItems = this.filteredItems.concat(n)
        }
    }, d.prepended = function(e) {
        var t = this._itemize(e);
        if (t.length) {
            this._resetLayout(), this._manageStamps();
            var n = this._filterRevealAdded(t);
            this.layoutItems(this.filteredItems), this.filteredItems = n.concat(this.filteredItems), this.items = t.concat(this.items)
        }
    }, d._filterRevealAdded = function(e) {
        var t = this._filter(e);
        return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
    }, d.insert = function(e) {
        var t = this.addItems(e);
        if (t.length) {
            var n, i, s = t.length;
            for (n = 0; n < s; n++) i = t[n], this.element.appendChild(i.element);
            var o = this._filter(t).matches;
            for (n = 0; n < s; n++) t[n].isLayoutInstant = !0;
            for (this.arrange(), n = 0; n < s; n++) delete t[n].isLayoutInstant;
            this.reveal(o)
        }
    };
    var p = d.remove;
    return d.remove = function(e) {
        e = s.makeArray(e);
        var t = this.getItems(e);
        p.call(this, e);
        for (var n = t && t.length, i = 0; n && i < n; i++) {
            var o = t[i];
            s.removeFrom(this.filteredItems, o)
        }
    }, d.shuffle = function() {
        for (var e = 0; e < this.items.length; e++) {
            this.items[e].sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, d._noTransition = function(e, t) {
        var n = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var i = e.apply(this, t);
        return this.options.transitionDuration = n, i
    }, d.getFilteredItemElements = function() {
        return this.filteredItems.map((function(e) {
            return e.element
        }))
    }, c
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, (function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var n = this._events = this._events || {},
                i = n[e] = n[e] || [];
            return -1 == i.indexOf(t) && i.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[e] = n[e] || {})[t] = !0, this
        }
    }, t.off = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = n.indexOf(t);
            return -1 != i && n.splice(i, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            n = n.slice(0), t = t || [];
            for (var i = this._onceEvents && this._onceEvents[e], s = 0; s < n.length; s++) {
                var o = n[s];
                i && i[o] && (this.off(e, o), delete i[o]), o.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
})),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], (function(n) {
        return t(e, n)
    })) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, (function(e, t) {
    function n(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function i(e, t, s) {
        if (!(this instanceof i)) return new i(e, t, s);
        var o = e;
        return "string" == typeof e && (o = document.querySelectorAll(e)), o ? (this.elements = function(e) {
            return Array.isArray(e) ? e : "object" == typeof e && "number" == typeof e.length ? l.call(e) : [e]
        }(o), this.options = n({}, this.options), "function" == typeof t ? s = t : n(this.options, t), s && this.on("always", s), this.getImages(), r && (this.jqDeferred = new r.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (o || e))
    }

    function s(e) {
        this.img = e
    }

    function o(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var r = e.jQuery,
        a = e.console,
        l = Array.prototype.slice;
    i.prototype = Object.create(t.prototype), i.prototype.options = {}, i.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, i.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && c[t]) {
            for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                var s = n[i];
                this.addImage(s)
            }
            if ("string" == typeof this.options.background) {
                var o = e.querySelectorAll(this.options.background);
                for (i = 0; i < o.length; i++) {
                    var r = o[i];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    };
    var c = {
        1: !0,
        9: !0,
        11: !0
    };
    return i.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
                var s = i && i[2];
                s && this.addBackground(s, e), i = n.exec(t.backgroundImage)
            }
    }, i.prototype.addImage = function(e) {
        var t = new s(e);
        this.images.push(t)
    }, i.prototype.addBackground = function(e, t) {
        var n = new o(e, t);
        this.images.push(n)
    }, i.prototype.check = function() {
        function e(e, n, i) {
            setTimeout((function() {
                t.progress(e, n, i)
            }))
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach((function(t) {
            t.once("progress", e), t.check()
        })) : void this.complete()
    }, i.prototype.progress = function(e, t, n) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + n, e, t)
    }, i.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, s.prototype = Object.create(t.prototype), s.prototype.check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, s.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, s.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, s.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, s.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, s.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, o.prototype = Object.create(s.prototype), o.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, o.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, o.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, i.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) && ((r = t).fn.imagesLoaded = function(e, t) {
            return new i(this, e, t).jqDeferred.promise(r(this))
        })
    }, i.makeJQueryPlugin(), i
})),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(n = {}, i = {}) {
        Object.keys(i).forEach((s => {
            void 0 === n[s] ? n[s] = i[s] : e(i[s]) && e(n[s]) && Object.keys(i[s]).length > 0 && t(n[s], i[s])
        }))
    }
    const n = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function i() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, n), e
    }
    const s = {
        document: n,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function o() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, s), e
    }
    class r extends Array {
        constructor(e) {
            super(...e || []),
                function(e) {
                    const t = e.__proto__;
                    Object.defineProperty(e, "__proto__", {
                        get: () => t,
                        set(e) {
                            t.__proto__ = e
                        }
                    })
                }(this)
        }
    }

    function a(e = []) {
        const t = [];
        return e.forEach((e => {
            Array.isArray(e) ? t.push(...a(e)) : t.push(e)
        })), t
    }

    function l(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function c(e, t) {
        const n = o(),
            s = i();
        let a = [];
        if (!t && e instanceof r) return e;
        if (!e) return new r(a);
        if ("string" == typeof e) {
            const n = e.trim();
            if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                let e = "div";
                0 === n.indexOf("<li") && (e = "ul"), 0 === n.indexOf("<tr") && (e = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (e = "tr"), 0 === n.indexOf("<tbody") && (e = "table"), 0 === n.indexOf("<option") && (e = "select");
                const t = s.createElement(e);
                t.innerHTML = n;
                for (let e = 0; e < t.childNodes.length; e += 1) a.push(t.childNodes[e])
            } else a = function(e, t) {
                if ("string" != typeof e) return [e];
                const n = [],
                    i = t.querySelectorAll(e);
                for (let e = 0; e < i.length; e += 1) n.push(i[e]);
                return n
            }(e.trim(), t || s)
        } else if (e.nodeType || e === n || e === s) a.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof r) return e;
            a = e
        }
        return new r(function(e) {
            const t = [];
            for (let n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }(a))
    }
    c.fn = r.prototype;
    const d = {
        addClass: function(...e) {
            const t = a(e.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.add(...t)
            })), this
        },
        removeClass: function(...e) {
            const t = a(e.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.remove(...t)
            })), this
        },
        hasClass: function(...e) {
            const t = a(e.map((e => e.split(" "))));
            return l(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function(...e) {
            const t = a(e.map((e => e.split(" "))));
            this.forEach((e => {
                t.forEach((t => {
                    e.classList.toggle(t)
                }))
            }))
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let n = 0; n < this.length; n += 1)
                if (2 === arguments.length) this[n].setAttribute(e, t);
                else
                    for (const t in e) this[n][t] = e[t], this[n].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        },
        on: function(...e) {
            let [t, n, i, s] = e;

            function o(e) {
                const t = e.target;
                if (!t) return;
                const s = e.target.dom7EventData || [];
                if (s.indexOf(e) < 0 && s.unshift(e), c(t).is(n)) i.apply(t, s);
                else {
                    const e = c(t).parents();
                    for (let t = 0; t < e.length; t += 1) c(e[t]).is(n) && i.apply(e[t], s)
                }
            }

            function r(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t)
            }
            "function" == typeof e[1] && ([t, i, s] = e, n = void 0), s || (s = !1);
            const a = t.split(" ");
            let l;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (n)
                    for (l = 0; l < a.length; l += 1) {
                        const e = a[l];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: i,
                            proxyListener: o
                        }), t.addEventListener(e, o, s)
                    } else
                        for (l = 0; l < a.length; l += 1) {
                            const e = a[l];
                            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                listener: i,
                                proxyListener: r
                            }), t.addEventListener(e, r, s)
                        }
            }
            return this
        },
        off: function(...e) {
            let [t, n, i, s] = e;
            "function" == typeof e[1] && ([t, i, s] = e, n = void 0), s || (s = !1);
            const o = t.split(" ");
            for (let e = 0; e < o.length; e += 1) {
                const t = o[e];
                for (let e = 0; e < this.length; e += 1) {
                    const o = this[e];
                    let r;
                    if (!n && o.dom7Listeners ? r = o.dom7Listeners[t] : n && o.dom7LiveListeners && (r = o.dom7LiveListeners[t]), r && r.length)
                        for (let e = r.length - 1; e >= 0; e -= 1) {
                            const n = r[e];
                            i && n.listener === i || i && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === i ? (o.removeEventListener(t, n.proxyListener, s), r.splice(e, 1)) : i || (o.removeEventListener(t, n.proxyListener, s), r.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function(...e) {
            const t = o(),
                n = e[0].split(" "),
                i = e[1];
            for (let s = 0; s < n.length; s += 1) {
                const o = n[s];
                for (let n = 0; n < this.length; n += 1) {
                    const s = this[n];
                    if (t.CustomEvent) {
                        const n = new t.CustomEvent(o, {
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        });
                        s.dom7EventData = e.filter(((e, t) => t > 0)), s.dispatchEvent(n), s.dom7EventData = [], delete s.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", (function n(i) {
                i.target === this && (e.call(this, i), t.off("transitionend", n))
            })), this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            const e = o();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                const e = o(),
                    t = i(),
                    n = this[0],
                    s = n.getBoundingClientRect(),
                    r = t.body,
                    a = n.clientTop || r.clientTop || 0,
                    l = n.clientLeft || r.clientLeft || 0,
                    c = n === e ? e.scrollY : n.scrollTop,
                    d = n === e ? e.scrollX : n.scrollLeft;
                return {
                    top: s.top + c - a,
                    left: s.left + d - l
                }
            }
            return null
        },
        css: function(e, t) {
            const n = o();
            let i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (const t in e) this[i].style[t] = e[t];
                    return this
                }
                if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach(((t, n) => {
                e.apply(t, [t, n])
            })), this) : this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = o(),
                n = i(),
                s = this[0];
            let a, l;
            if (!s || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (s.matches) return s.matches(e);
                if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
                if (s.msMatchesSelector) return s.msMatchesSelector(e);
                for (a = c(e), l = 0; l < a.length; l += 1)
                    if (a[l] === s) return !0;
                return !1
            }
            if (e === n) return s === n;
            if (e === t) return s === t;
            if (e.nodeType || e instanceof r) {
                for (a = e.nodeType ? [e] : e, l = 0; l < a.length; l += 1)
                    if (a[l] === s) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return c([]);
            if (e < 0) {
                const n = t + e;
                return c(n < 0 ? [] : [this[n]])
            }
            return c([this[e]])
        },
        append: function(...e) {
            let t;
            const n = i();
            for (let i = 0; i < e.length; i += 1) {
                t = e[i];
                for (let e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        const i = n.createElement("div");
                        for (i.innerHTML = t; i.firstChild;) this[e].appendChild(i.firstChild)
                    } else if (t instanceof r)
                    for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
                else this[e].appendChild(t)
            }
            return this
        },
        prepend: function(e) {
            const t = i();
            let n, s;
            for (n = 0; n < this.length; n += 1)
                if ("string" == typeof e) {
                    const i = t.createElement("div");
                    for (i.innerHTML = e, s = i.childNodes.length - 1; s >= 0; s -= 1) this[n].insertBefore(i.childNodes[s], this[n].childNodes[0])
                } else if (e instanceof r)
                for (s = 0; s < e.length; s += 1) this[n].insertBefore(e[s], this[n].childNodes[0]);
            else this[n].insertBefore(e, this[n].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && c(this[0].nextElementSibling).is(e) ? c([this[0].nextElementSibling]) : c([]) : this[0].nextElementSibling ? c([this[0].nextElementSibling]) : c([]) : c([])
        },
        nextAll: function(e) {
            const t = [];
            let n = this[0];
            if (!n) return c([]);
            for (; n.nextElementSibling;) {
                const i = n.nextElementSibling;
                e ? c(i).is(e) && t.push(i) : t.push(i), n = i
            }
            return c(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && c(t.previousElementSibling).is(e) ? c([t.previousElementSibling]) : c([]) : t.previousElementSibling ? c([t.previousElementSibling]) : c([])
            }
            return c([])
        },
        prevAll: function(e) {
            const t = [];
            let n = this[0];
            if (!n) return c([]);
            for (; n.previousElementSibling;) {
                const i = n.previousElementSibling;
                e ? c(i).is(e) && t.push(i) : t.push(i), n = i
            }
            return c(t)
        },
        parent: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? c(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
            return c(t)
        },
        parents: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
                let i = this[n].parentNode;
                for (; i;) e ? c(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
            }
            return c(t)
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? c([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
                const i = this[n].querySelectorAll(e);
                for (let e = 0; e < i.length; e += 1) t.push(i[e])
            }
            return c(t)
        },
        children: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
                const i = this[n].children;
                for (let n = 0; n < i.length; n += 1) e && !c(i[n]).is(e) || t.push(i[n])
            }
            return c(t)
        },
        filter: function(e) {
            return c(l(this, e))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function u(e, t = 0) {
        return setTimeout(e, t)
    }

    function p() {
        return Date.now()
    }

    function h(e, t = "x") {
        const n = o();
        let i, s, r;
        const a = function(e) {
            const t = o();
            let n;
            return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
        }(e);
        return n.WebKitCSSMatrix ? (s = a.transform || a.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map((e => e.replace(",", "."))).join(", ")), r = new n.WebKitCSSMatrix("none" === s ? "" : s)) : (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), "x" === t && (s = n.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = n.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
    }

    function f(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function m(...e) {
        const t = Object(e[0]),
            n = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < e.length; s += 1) {
            const o = e[s];
            if (null != o && (i = o, !("undefined" != typeof window && void 0 !== window.HTMLElement ? i instanceof HTMLElement : i && (1 === i.nodeType || 11 === i.nodeType)))) {
                const e = Object.keys(Object(o)).filter((e => n.indexOf(e) < 0));
                for (let n = 0, i = e.length; n < i; n += 1) {
                    const i = e[n],
                        s = Object.getOwnPropertyDescriptor(o, i);
                    void 0 !== s && s.enumerable && (f(t[i]) && f(o[i]) ? o[i].__swiper__ ? t[i] = o[i] : m(t[i], o[i]) : !f(t[i]) && f(o[i]) ? (t[i] = {}, o[i].__swiper__ ? t[i] = o[i] : m(t[i], o[i])) : t[i] = o[i])
                }
            }
        }
        var i;
        return t
    }

    function g(e, t, n) {
        e.style.setProperty(t, n)
    }

    function v({
        swiper: e,
        targetPosition: t,
        side: n
    }) {
        const i = o(),
            s = -e.translate;
        let r, a = null;
        const l = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);
        const c = t > s ? "next" : "prev",
            d = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
            u = () => {
                r = (new Date).getTime(), null === a && (a = r);
                const o = Math.max(Math.min((r - a) / l, 1), 0),
                    c = .5 - Math.cos(o * Math.PI) / 2;
                let p = s + c * (t - s);
                if (d(p, t) && (p = t), e.wrapperEl.scrollTo({
                        [n]: p
                    }), d(p, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [n]: p
                    })
                })), void i.cancelAnimationFrame(e.cssModeFrameID);
                e.cssModeFrameID = i.requestAnimationFrame(u)
            };
        u()
    }
    let y, b, w;

    function x() {
        return y || (y = function() {
            const e = o(),
                t = i();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function() {
                    let t = !1;
                    try {
                        const n = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, n)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), y
    }

    function C(e = {}) {
        return b || (b = function({
            userAgent: e
        } = {}) {
            const t = x(),
                n = o(),
                i = n.navigator.platform,
                s = e || n.navigator.userAgent,
                r = {
                    ios: !1,
                    android: !1
                },
                a = n.screen.width,
                l = n.screen.height,
                c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = s.match(/(iPad).*OS\s([\d_]+)/);
            const u = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === i;
            let f = "MacIntel" === i;
            return !d && f && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${l}`) >= 0 && (d = s.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), f = !1), c && !h && (r.os = "android", r.android = !0), (d || p || u) && (r.os = "ios", r.ios = !0), r
        }(e)), b
    }

    function $() {
        return w || (w = function() {
            const e = o();
            return {
                isSafari: function() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), w
    }
    Object.keys(d).forEach((e => {
        Object.defineProperty(c.fn, e, {
            value: d[e],
            writable: !0
        })
    }));
    var T = {
        on(e, t, n) {
            const i = this;
            if ("function" != typeof t) return i;
            const s = n ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
            })), i
        },
        once(e, t, n) {
            const i = this;
            if ("function" != typeof t) return i;

            function s(...n) {
                i.off(e, s), s.__emitterProxy && delete s.__emitterProxy, t.apply(i, n)
            }
            return s.__emitterProxy = t, i.on(e, s, n)
        },
        onAny(e, t) {
            const n = this;
            if ("function" != typeof e) return n;
            const i = t ? "unshift" : "push";
            return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
        },
        offAny(e) {
            const t = this;
            if (!t.eventsAnyListeners) return t;
            const n = t.eventsAnyListeners.indexOf(e);
            return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
        },
        off(e, t) {
            const n = this;
            return n.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(((i, s) => {
                    (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[e].splice(s, 1)
                }))
            })), n) : n
        },
        emit(...e) {
            const t = this;
            if (!t.eventsListeners) return t;
            let n, i, s;
            return "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], i = e.slice(1, e.length), s = t) : (n = e[0].events, i = e[0].data, s = e[0].context || t), i.unshift(s), (Array.isArray(n) ? n : n.split(" ")).forEach((e => {
                t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                    t.apply(s, [e, ...i])
                })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                    e.apply(s, i)
                }))
            })), t
        }
    };

    function E({
        swiper: e,
        runCallbacks: t,
        direction: n,
        step: i
    }) {
        const {
            activeIndex: s,
            previousIndex: o
        } = e;
        let r = n;
        if (r || (r = s > o ? "next" : s < o ? "prev" : "reset"), e.emit(`transition${i}`), t && s !== o) {
            if ("reset" === r) return void e.emit(`slideResetTransition${i}`);
            e.emit(`slideChangeTransition${i}`), "next" === r ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`)
        }
    }

    function S(e) {
        const t = this,
            n = i(),
            s = o(),
            r = t.touchEventsData,
            {
                params: a,
                touches: l,
                enabled: d
            } = t;
        if (!d) return;
        if (t.animating && a.preventInteractionOnTransition) return;
        !t.animating && a.cssMode && a.loop && t.loopFix();
        let u = e;
        u.originalEvent && (u = u.originalEvent);
        let h = c(u.target);
        if ("wrapper" === a.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
        if (r.isTouchEvent = "touchstart" === u.type, !r.isTouchEvent && "which" in u && 3 === u.which) return;
        if (!r.isTouchEvent && "button" in u && u.button > 0) return;
        if (r.isTouched && r.isMoved) return;
        a.noSwipingClass && "" !== a.noSwipingClass && u.target && u.target.shadowRoot && e.path && e.path[0] && (h = c(e.path[0]));
        const f = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
            m = !(!u.target || !u.target.shadowRoot);
        if (a.noSwiping && (m ? function(e, t = this) {
                return function t(n) {
                    return n && n !== i() && n !== o() ? (n.assignedSlot && (n = n.assignedSlot), n.closest(e) || t(n.getRootNode().host)) : null
                }(t)
            }(f, u.target) : h.closest(f)[0])) return void(t.allowClick = !0);
        if (a.swipeHandler && !h.closest(a.swipeHandler)[0]) return;
        l.currentX = "touchstart" === u.type ? u.targetTouches[0].pageX : u.pageX, l.currentY = "touchstart" === u.type ? u.targetTouches[0].pageY : u.pageY;
        const g = l.currentX,
            v = l.currentY,
            y = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
            b = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
        if (y && (g <= b || g >= s.innerWidth - b)) {
            if ("prevent" !== y) return;
            e.preventDefault()
        }
        if (Object.assign(r, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), l.startX = g, l.startY = v, r.touchStartTime = p(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== u.type) {
            let e = !0;
            h.is(r.focusableElements) && (e = !1), n.activeElement && c(n.activeElement).is(r.focusableElements) && n.activeElement !== h[0] && n.activeElement.blur();
            const i = e && t.allowTouchMove && a.touchStartPreventDefault;
            !a.touchStartForcePreventDefault && !i || h[0].isContentEditable || u.preventDefault()
        }
        t.emit("touchStart", u)
    }

    function _(e) {
        const t = i(),
            n = this,
            s = n.touchEventsData,
            {
                params: o,
                touches: r,
                rtlTranslate: a,
                enabled: l
            } = n;
        if (!l) return;
        let d = e;
        if (d.originalEvent && (d = d.originalEvent), !s.isTouched) return void(s.startMoving && s.isScrolling && n.emit("touchMoveOpposite", d));
        if (s.isTouchEvent && "touchmove" !== d.type) return;
        const u = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
            h = "touchmove" === d.type ? u.pageX : d.pageX,
            f = "touchmove" === d.type ? u.pageY : d.pageY;
        if (d.preventedByNestedSwiper) return r.startX = h, void(r.startY = f);
        if (!n.allowTouchMove) return n.allowClick = !1, void(s.isTouched && (Object.assign(r, {
            startX: h,
            startY: f,
            currentX: h,
            currentY: f
        }), s.touchStartTime = p()));
        if (s.isTouchEvent && o.touchReleaseOnEdges && !o.loop)
            if (n.isVertical()) {
                if (f < r.startY && n.translate <= n.maxTranslate() || f > r.startY && n.translate >= n.minTranslate()) return s.isTouched = !1, void(s.isMoved = !1)
            } else if (h < r.startX && n.translate <= n.maxTranslate() || h > r.startX && n.translate >= n.minTranslate()) return;
        if (s.isTouchEvent && t.activeElement && d.target === t.activeElement && c(d.target).is(s.focusableElements)) return s.isMoved = !0, void(n.allowClick = !1);
        if (s.allowTouchCallbacks && n.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
        r.currentX = h, r.currentY = f;
        const m = r.currentX - r.startX,
            g = r.currentY - r.startY;
        if (n.params.threshold && Math.sqrt(m ** 2 + g ** 2) < n.params.threshold) return;
        if (void 0 === s.isScrolling) {
            let e;
            n.isHorizontal() && r.currentY === r.startY || n.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : m * m + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(m)) / Math.PI, s.isScrolling = n.isHorizontal() ? e > o.touchAngle : 90 - e > o.touchAngle)
        }
        if (s.isScrolling && n.emit("touchMoveOpposite", d), void 0 === s.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (s.startMoving = !0)), s.isScrolling) return void(s.isTouched = !1);
        if (!s.startMoving) return;
        n.allowClick = !1, !o.cssMode && d.cancelable && d.preventDefault(), o.touchMoveStopPropagation && !o.nested && d.stopPropagation(), s.isMoved || (o.loop && !o.cssMode && n.loopFix(), s.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, !o.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", d)), n.emit("sliderMove", d), s.isMoved = !0;
        let v = n.isHorizontal() ? m : g;
        r.diff = v, v *= o.touchRatio, a && (v = -v), n.swipeDirection = v > 0 ? "prev" : "next", s.currentTranslate = v + s.startTranslate;
        let y = !0,
            b = o.resistanceRatio;
        if (o.touchReleaseOnEdges && (b = 0), v > 0 && s.currentTranslate > n.minTranslate() ? (y = !1, o.resistance && (s.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + s.startTranslate + v) ** b)) : v < 0 && s.currentTranslate < n.maxTranslate() && (y = !1, o.resistance && (s.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - s.startTranslate - v) ** b)), y && (d.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), n.allowSlidePrev || n.allowSlideNext || (s.currentTranslate = s.startTranslate), o.threshold > 0) {
            if (!(Math.abs(v) > o.threshold || s.allowThresholdMove)) return void(s.currentTranslate = s.startTranslate);
            if (!s.allowThresholdMove) return s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, void(r.diff = n.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
        }
        o.followFinger && !o.cssMode && ((o.freeMode && o.freeMode.enabled && n.freeMode || o.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && o.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(s.currentTranslate), n.setTranslate(s.currentTranslate))
    }

    function M(e) {
        const t = this,
            n = t.touchEventsData,
            {
                params: i,
                touches: s,
                rtlTranslate: o,
                slidesGrid: r,
                enabled: a
            } = t;
        if (!a) return;
        let l = e;
        if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
        i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const c = p(),
            d = c - n.touchStartTime;
        if (t.allowClick) {
            const e = l.path || l.composedPath && l.composedPath();
            t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), d < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
        }
        if (n.lastClickTime = p(), u((() => {
                t.destroyed || (t.allowClick = !0)
            })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === s.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
        let h;
        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, h = i.followFinger ? o ? t.translate : -t.translate : -n.currentTranslate, i.cssMode) return;
        if (t.params.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: h
        });
        let f = 0,
            m = t.slidesSizesGrid[0];
        for (let e = 0; e < r.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
            const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            void 0 !== r[e + t] ? h >= r[e] && h < r[e + t] && (f = e, m = r[e + t] - r[e]) : h >= r[e] && (f = e, m = r[r.length - 1] - r[r.length - 2])
        }
        const g = (h - r[f]) / m,
            v = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (d > i.longSwipesMs) {
            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(f + v) : t.slideTo(f)), "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(f + v) : t.slideTo(f))
        } else {
            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
            !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(f + v), "prev" === t.swipeDirection && t.slideTo(f)) : l.target === t.navigation.nextEl ? t.slideTo(f + v) : t.slideTo(f)
        }
    }

    function k() {
        const e = this,
            {
                params: t,
                el: n
            } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: i,
            allowSlidePrev: s,
            snapGrid: o
        } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow()
    }

    function P(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function A() {
        const e = this,
            {
                wrapperEl: t,
                rtlTranslate: n,
                enabled: i
            } = e;
        if (!i) return;
        let s;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const o = e.maxTranslate() - e.minTranslate();
        s = 0 === o ? 0 : (e.translate - e.minTranslate()) / o, s !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }
    let z = !1;

    function D() {}
    const L = (e, t) => {
            const n = i(),
                {
                    params: s,
                    touchEvents: o,
                    el: r,
                    wrapperEl: a,
                    device: l,
                    support: c
                } = e,
                d = !!s.nested,
                u = "on" === t ? "addEventListener" : "removeEventListener",
                p = t;
            if (c.touch) {
                const t = !("touchstart" !== o.start || !c.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                r[u](o.start, e.onTouchStart, t), r[u](o.move, e.onTouchMove, c.passiveListener ? {
                    passive: !1,
                    capture: d
                } : d), r[u](o.end, e.onTouchEnd, t), o.cancel && r[u](o.cancel, e.onTouchEnd, t)
            } else r[u](o.start, e.onTouchStart, !1), n[u](o.move, e.onTouchMove, d), n[u](o.end, e.onTouchEnd, !1);
            (s.preventClicks || s.preventClicksPropagation) && r[u]("click", e.onClick, !0), s.cssMode && a[u]("scroll", e.onScroll), s.updateOnWindowResize ? e[p](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k, !0) : e[p]("observerUpdate", k, !0)
        },
        I = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var O = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
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
        resistanceRatio: .85,
        watchSlidesProgress: !1,
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
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function j(e, t) {
        return function(n = {}) {
            const i = Object.keys(n)[0],
                s = n[i];
            "object" == typeof s && null !== s ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {
                auto: !0
            }), i in e && "enabled" in s ? (!0 === e[i] && (e[i] = {
                enabled: !0
            }), "object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
                enabled: !1
            }), m(t, n)) : m(t, n)) : m(t, n)
        }
    }
    const q = {
            eventsEmitter: T,
            update: {
                updateSize: function() {
                    const e = this;
                    let t, n;
                    const i = e.$el;
                    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), n = n - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
                        width: t,
                        height: n,
                        size: e.isHorizontal() ? t : n
                    }))
                },
                updateSlides: function() {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t]
                    }

                    function n(e, n) {
                        return parseFloat(e.getPropertyValue(t(n)) || 0)
                    }
                    const i = e.params,
                        {
                            $wrapperEl: s,
                            size: o,
                            rtlTranslate: r,
                            wrongRTL: a
                        } = e,
                        l = e.virtual && i.virtual.enabled,
                        c = l ? e.virtual.slides.length : e.slides.length,
                        d = s.children(`.${e.params.slideClass}`),
                        u = l ? e.virtual.slides.length : d.length;
                    let p = [];
                    const h = [],
                        f = [];
                    let m = i.slidesOffsetBefore;
                    "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
                    let v = i.slidesOffsetAfter;
                    "function" == typeof v && (v = i.slidesOffsetAfter.call(e));
                    const y = e.snapGrid.length,
                        b = e.slidesGrid.length;
                    let w = i.spaceBetween,
                        x = -m,
                        C = 0,
                        $ = 0;
                    if (void 0 === o) return;
                    "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * o), e.virtualSize = -w, r ? d.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : d.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), i.centeredSlides && i.cssMode && (g(e.wrapperEl, "--swiper-centered-offset-before", ""), g(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const T = i.grid && i.grid.rows > 1 && e.grid;
                    let E;
                    T && e.grid.initSlides(u);
                    const S = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((e => void 0 !== i.breakpoints[e].slidesPerView)).length > 0;
                    for (let s = 0; s < u; s += 1) {
                        E = 0;
                        const r = d.eq(s);
                        if (T && e.grid.updateSlide(s, r, u, t), "none" !== r.css("display")) {
                            if ("auto" === i.slidesPerView) {
                                S && (d[s].style[t("width")] = "");
                                const o = getComputedStyle(r[0]),
                                    a = r[0].style.transform,
                                    l = r[0].style.webkitTransform;
                                if (a && (r[0].style.transform = "none"), l && (r[0].style.webkitTransform = "none"), i.roundLengths) E = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
                                else {
                                    const e = n(o, "width"),
                                        t = n(o, "padding-left"),
                                        i = n(o, "padding-right"),
                                        s = n(o, "margin-left"),
                                        a = n(o, "margin-right"),
                                        l = o.getPropertyValue("box-sizing");
                                    if (l && "border-box" === l) E = e + s + a;
                                    else {
                                        const {
                                            clientWidth: n,
                                            offsetWidth: o
                                        } = r[0];
                                        E = e + t + i + s + a + (o - n)
                                    }
                                }
                                a && (r[0].style.transform = a), l && (r[0].style.webkitTransform = l), i.roundLengths && (E = Math.floor(E))
                            } else E = (o - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (E = Math.floor(E)), d[s] && (d[s].style[t("width")] = `${E}px`);
                            d[s] && (d[s].swiperSlideSize = E), f.push(E), i.centeredSlides ? (x = x + E / 2 + C / 2 + w, 0 === C && 0 !== s && (x = x - o / 2 - w), 0 === s && (x = x - o / 2 - w), Math.abs(x) < .001 && (x = 0), i.roundLengths && (x = Math.floor(x)), $ % i.slidesPerGroup == 0 && p.push(x), h.push(x)) : (i.roundLengths && (x = Math.floor(x)), ($ - Math.min(e.params.slidesPerGroupSkip, $)) % e.params.slidesPerGroup == 0 && p.push(x), h.push(x), x = x + E + w), e.virtualSize += E + w, C = E, $ += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, o) + v, r && a && ("slide" === i.effect || "coverflow" === i.effect) && s.css({
                            width: `${e.virtualSize+i.spaceBetween}px`
                        }), i.setWrapperSize && s.css({
                            [t("width")]: `${e.virtualSize+i.spaceBetween}px`
                        }), T && e.grid.updateWrapperSize(E, p, t), !i.centeredSlides) {
                        const t = [];
                        for (let n = 0; n < p.length; n += 1) {
                            let s = p[n];
                            i.roundLengths && (s = Math.floor(s)), p[n] <= e.virtualSize - o && t.push(s)
                        }
                        p = t, Math.floor(e.virtualSize - o) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - o)
                    }
                    if (0 === p.length && (p = [0]), 0 !== i.spaceBetween) {
                        const n = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
                        d.filter(((e, t) => !i.cssMode || t !== d.length - 1)).css({
                            [n]: `${w}px`
                        })
                    }
                    if (i.centeredSlides && i.centeredSlidesBounds) {
                        let e = 0;
                        f.forEach((t => {
                            e += t + (i.spaceBetween ? i.spaceBetween : 0)
                        })), e -= i.spaceBetween;
                        const t = e - o;
                        p = p.map((e => e < 0 ? -m : e > t ? t + v : e))
                    }
                    if (i.centerInsufficientSlides) {
                        let e = 0;
                        if (f.forEach((t => {
                                e += t + (i.spaceBetween ? i.spaceBetween : 0)
                            })), e -= i.spaceBetween, e < o) {
                            const t = (o - e) / 2;
                            p.forEach(((e, n) => {
                                p[n] = e - t
                            })), h.forEach(((e, n) => {
                                h[n] = e + t
                            }))
                        }
                    }
                    if (Object.assign(e, {
                            slides: d,
                            snapGrid: p,
                            slidesGrid: h,
                            slidesSizesGrid: f
                        }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                        g(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), g(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            n = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + n))
                    }
                    u !== c && e.emit("slidesLengthChange"), p.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset()
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        n = [],
                        i = t.virtual && t.params.virtual.enabled;
                    let s, o = 0;
                    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const r = e => i ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides) t.visibleSlides.each((e => {
                            n.push(e)
                        }));
                        else
                            for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                                const e = t.activeIndex + s;
                                if (e > t.slides.length && !i) break;
                                n.push(r(e))
                            } else n.push(r(t.activeIndex));
                    for (s = 0; s < n.length; s += 1)
                        if (void 0 !== n[s]) {
                            const e = n[s].offsetHeight;
                            o = e > o ? e : o
                        }(o || 0 === o) && t.$wrapperEl.css("height", `${o}px`)
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides;
                    for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
                },
                updateSlidesProgress: function(e = this && this.translate || 0) {
                    const t = this,
                        n = t.params,
                        {
                            slides: i,
                            rtlTranslate: s,
                            snapGrid: o
                        } = t;
                    if (0 === i.length) return;
                    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                    let r = -e;
                    s && (r = e), i.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let e = 0; e < i.length; e += 1) {
                        const a = i[e];
                        let l = a.swiperSlideOffset;
                        n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
                        const c = (r + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                            d = (r - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                            u = -(r - l),
                            p = u + t.slidesSizesGrid[e];
                        (u >= 0 && u < t.size - 1 || p > 1 && p <= t.size || u <= 0 && p >= t.size) && (t.visibleSlides.push(a), t.visibleSlidesIndexes.push(e), i.eq(e).addClass(n.slideVisibleClass)), a.progress = s ? -c : c, a.originalProgress = s ? -d : d
                    }
                    t.visibleSlides = c(t.visibleSlides)
                },
                updateProgress: function(e) {
                    const t = this;
                    if (void 0 === e) {
                        const n = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * n || 0
                    }
                    const n = t.params,
                        i = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: s,
                        isBeginning: o,
                        isEnd: r
                    } = t;
                    const a = o,
                        l = r;
                    0 === i ? (s = 0, o = !0, r = !0) : (s = (e - t.minTranslate()) / i, o = s <= 0, r = s >= 1), Object.assign(t, {
                        progress: s,
                        isBeginning: o,
                        isEnd: r
                    }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), o && !a && t.emit("reachBeginning toEdge"), r && !l && t.emit("reachEnd toEdge"), (a && !o || l && !r) && t.emit("fromEdge"), t.emit("progress", s)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: n,
                            $wrapperEl: i,
                            activeIndex: s,
                            realIndex: o
                        } = e,
                        r = e.virtual && n.virtual.enabled;
                    let a;
                    t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), a = r ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${s}"]`) : t.eq(s), a.addClass(n.slideActiveClass), n.loop && (a.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass));
                    let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
                    n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass));
                    let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
                    n.loop && 0 === c.length && (c = t.eq(-1), c.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        n = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: i,
                            snapGrid: s,
                            params: o,
                            activeIndex: r,
                            realIndex: a,
                            snapIndex: l
                        } = t;
                    let c, d = e;
                    if (void 0 === d) {
                        for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2 ? d = e : n >= i[e] && n < i[e + 1] && (d = e + 1) : n >= i[e] && (d = e);
                        o.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                    }
                    if (s.indexOf(n) >= 0) c = s.indexOf(n);
                    else {
                        const e = Math.min(o.slidesPerGroupSkip, d);
                        c = e + Math.floor((d - e) / o.slidesPerGroup)
                    }
                    if (c >= s.length && (c = s.length - 1), d === r) return void(c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
                    const u = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                    Object.assign(t, {
                        snapIndex: c,
                        realIndex: u,
                        previousIndex: r,
                        activeIndex: d
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this,
                        n = t.params,
                        i = c(e).closest(`.${n.slideClass}`)[0];
                    let s, o = !1;
                    if (i)
                        for (let e = 0; e < t.slides.length; e += 1)
                            if (t.slides[e] === i) {
                                o = !0, s = e;
                                break
                            }
                    if (!i || !o) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(c(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = s, n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
                    const {
                        params: t,
                        rtlTranslate: n,
                        translate: i,
                        $wrapperEl: s
                    } = this;
                    if (t.virtualTranslate) return n ? -i : i;
                    if (t.cssMode) return i;
                    let o = h(s[0], e);
                    return n && (o = -o), o || 0
                },
                setTranslate: function(e, t) {
                    const n = this,
                        {
                            rtlTranslate: i,
                            params: s,
                            $wrapperEl: o,
                            wrapperEl: r,
                            progress: a
                        } = n;
                    let l, c = 0,
                        d = 0;
                    n.isHorizontal() ? c = i ? -e : e : d = e, s.roundLengths && (c = Math.floor(c), d = Math.floor(d)), s.cssMode ? r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -c : -d : s.virtualTranslate || o.transform(`translate3d(${c}px, ${d}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? c : d;
                    const u = n.maxTranslate() - n.minTranslate();
                    l = 0 === u ? 0 : (e - n.minTranslate()) / u, l !== a && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e = 0, t = this.params.speed, n = !0, i = !0, s) {
                    const o = this,
                        {
                            params: r,
                            wrapperEl: a
                        } = o;
                    if (o.animating && r.preventInteractionOnTransition) return !1;
                    const l = o.minTranslate(),
                        c = o.maxTranslate();
                    let d;
                    if (d = i && e > l ? l : i && e < c ? c : e, o.updateProgress(d), r.cssMode) {
                        const e = o.isHorizontal();
                        if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
                        else {
                            if (!o.support.smoothScroll) return v({
                                swiper: o,
                                targetPosition: -d,
                                side: e ? "left" : "top"
                            }), !0;
                            a.scrollTo({
                                [e ? "left" : "top"]: -d,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (o.setTransition(0), o.setTranslate(d), n && (o.emit("beforeTransitionStart", t, s), o.emit("transitionEnd"))) : (o.setTransition(t), o.setTranslate(d), n && (o.emit("beforeTransitionStart", t, s), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(e) {
                        o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, n && o.emit("transitionEnd"))
                    }), o.$wrapperEl[0].addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    const n = this;
                    n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
                },
                transitionStart: function(e = !0, t) {
                    const n = this,
                        {
                            params: i
                        } = n;
                    i.cssMode || (i.autoHeight && n.updateAutoHeight(), E({
                        swiper: n,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e = !0, t) {
                    const n = this,
                        {
                            params: i
                        } = n;
                    n.animating = !1, i.cssMode || (n.setTransition(0), E({
                        swiper: n,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: {
                slideTo: function(e = 0, t = this.params.speed, n = !0, i, s) {
                    if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" == typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const o = this;
                    let r = e;
                    r < 0 && (r = 0);
                    const {
                        params: a,
                        snapGrid: l,
                        slidesGrid: c,
                        previousIndex: d,
                        activeIndex: u,
                        rtlTranslate: p,
                        wrapperEl: h,
                        enabled: f
                    } = o;
                    if (o.animating && a.preventInteractionOnTransition || !f && !i && !s) return !1;
                    const m = Math.min(o.params.slidesPerGroupSkip, r);
                    let g = m + Math.floor((r - m) / o.params.slidesPerGroup);
                    g >= l.length && (g = l.length - 1), (u || a.initialSlide || 0) === (d || 0) && n && o.emit("beforeSlideChangeStart");
                    const y = -l[g];
                    if (o.updateProgress(y), a.normalizeSlideIndex)
                        for (let e = 0; e < c.length; e += 1) {
                            const t = -Math.floor(100 * y),
                                n = Math.floor(100 * c[e]),
                                i = Math.floor(100 * c[e + 1]);
                            void 0 !== c[e + 1] ? t >= n && t < i - (i - n) / 2 ? r = e : t >= n && t < i && (r = e + 1) : t >= n && (r = e)
                        }
                    if (o.initialized && r !== u) {
                        if (!o.allowSlideNext && y < o.translate && y < o.minTranslate()) return !1;
                        if (!o.allowSlidePrev && y > o.translate && y > o.maxTranslate() && (u || 0) !== r) return !1
                    }
                    let b;
                    if (b = r > u ? "next" : r < u ? "prev" : "reset", p && -y === o.translate || !p && y === o.translate) return o.updateActiveIndex(r), a.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== a.effect && o.setTranslate(y), "reset" !== b && (o.transitionStart(n, b), o.transitionEnd(n, b)), !1;
                    if (a.cssMode) {
                        const e = o.isHorizontal(),
                            n = p ? y : -y;
                        if (0 === t) {
                            const t = o.virtual && o.params.virtual.enabled;
                            t && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = n, t && requestAnimationFrame((() => {
                                o.wrapperEl.style.scrollSnapType = "", o._swiperImmediateVirtual = !1
                            }))
                        } else {
                            if (!o.support.smoothScroll) return v({
                                swiper: o,
                                targetPosition: n,
                                side: e ? "left" : "top"
                            }), !0;
                            h.scrollTo({
                                [e ? "left" : "top"]: n,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return o.setTransition(t), o.setTranslate(y), o.updateActiveIndex(r), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, i), o.transitionStart(n, b), 0 === t ? o.transitionEnd(n, b) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(e) {
                        o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(n, b))
                    }), o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function(e = 0, t = this.params.speed, n = !0, i) {
                    const s = this;
                    let o = e;
                    return s.params.loop && (o += s.loopedSlides), s.slideTo(o, t, n, i)
                },
                slideNext: function(e = this.params.speed, t = !0, n) {
                    const i = this,
                        {
                            animating: s,
                            enabled: o,
                            params: r
                        } = i;
                    if (!o) return i;
                    let a = r.slidesPerGroup;
                    "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                    const l = i.activeIndex < r.slidesPerGroupSkip ? 1 : a;
                    if (r.loop) {
                        if (s && r.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }
                    return r.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + l, e, t, n)
                },
                slidePrev: function(e = this.params.speed, t = !0, n) {
                    const i = this,
                        {
                            params: s,
                            animating: o,
                            snapGrid: r,
                            slidesGrid: a,
                            rtlTranslate: l,
                            enabled: c
                        } = i;
                    if (!c) return i;
                    if (s.loop) {
                        if (o && s.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }

                    function d(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const u = d(l ? i.translate : -i.translate),
                        p = r.map((e => d(e)));
                    let h = r[p.indexOf(u) - 1];
                    if (void 0 === h && s.cssMode) {
                        let e;
                        r.forEach(((t, n) => {
                            u >= t && (e = n)
                        })), void 0 !== e && (h = r[e > 0 ? e - 1 : e])
                    }
                    let f = 0;
                    return void 0 !== h && (f = a.indexOf(h), f < 0 && (f = i.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (f = f - i.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), s.rewind && i.isBeginning ? i.slideTo(i.slides.length - 1, e, t, n) : i.slideTo(f, e, t, n)
                },
                slideReset: function(e = this.params.speed, t = !0, n) {
                    return this.slideTo(this.activeIndex, e, t, n)
                },
                slideToClosest: function(e = this.params.speed, t = !0, n, i = .5) {
                    const s = this;
                    let o = s.activeIndex;
                    const r = Math.min(s.params.slidesPerGroupSkip, o),
                        a = r + Math.floor((o - r) / s.params.slidesPerGroup),
                        l = s.rtlTranslate ? s.translate : -s.translate;
                    if (l >= s.snapGrid[a]) {
                        const e = s.snapGrid[a];
                        l - e > (s.snapGrid[a + 1] - e) * i && (o += s.params.slidesPerGroup)
                    } else {
                        const e = s.snapGrid[a - 1];
                        l - e <= (s.snapGrid[a] - e) * i && (o -= s.params.slidesPerGroup)
                    }
                    return o = Math.max(o, 0), o = Math.min(o, s.slidesGrid.length - 1), s.slideTo(o, e, t, n)
                },
                slideToClickedSlide: function() {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: n
                        } = e,
                        i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let s, o = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        s = parseInt(c(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? o < e.loopedSlides - i / 2 || o > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), o = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), u((() => {
                            e.slideTo(o)
                        }))) : e.slideTo(o) : o > e.slides.length - i ? (e.loopFix(), o = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), u((() => {
                            e.slideTo(o)
                        }))) : e.slideTo(o)
                    } else e.slideTo(o)
                }
            },
            loop: {
                loopCreate: function() {
                    const e = this,
                        t = i(),
                        {
                            params: n,
                            $wrapperEl: s
                        } = e,
                        o = s.children().length > 0 ? c(s.children()[0].parentNode) : s;
                    o.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
                    let r = o.children(`.${n.slideClass}`);
                    if (n.loopFillGroupWithBlank) {
                        const e = n.slidesPerGroup - r.length % n.slidesPerGroup;
                        if (e !== n.slidesPerGroup) {
                            for (let i = 0; i < e; i += 1) {
                                const e = c(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                                o.append(e)
                            }
                            r = o.children(`.${n.slideClass}`)
                        }
                    }
                    "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
                    const a = [],
                        l = [];
                    r.each(((t, n) => {
                        const i = c(t);
                        n < e.loopedSlides && l.push(t), n < r.length && n >= r.length - e.loopedSlides && a.push(t), i.attr("data-swiper-slide-index", n)
                    }));
                    for (let e = 0; e < l.length; e += 1) o.append(c(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
                    for (let e = a.length - 1; e >= 0; e -= 1) o.prepend(c(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass))
                },
                loopFix: function() {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: n,
                        loopedSlides: i,
                        allowSlidePrev: s,
                        allowSlideNext: o,
                        snapGrid: r,
                        rtlTranslate: a
                    } = e;
                    let l;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const c = -r[t] - e.getTranslate();
                    t < i ? (l = n.length - 3 * i + t, l += i, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)) : t >= n.length - i && (l = -n.length + t + i, l += i, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)), e.allowSlidePrev = s, e.allowSlideNext = o, e.emit("loopFix")
                },
                loopDestroy: function() {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: n
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function(e) {
                    const t = this;
                    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function() {
                    const e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            },
            events: {
                attachEvents: function() {
                    const e = this,
                        t = i(),
                        {
                            params: n,
                            support: s
                        } = e;
                    e.onTouchStart = S.bind(e), e.onTouchMove = _.bind(e), e.onTouchEnd = M.bind(e), n.cssMode && (e.onScroll = A.bind(e)), e.onClick = P.bind(e), s.touch && !z && (t.addEventListener("touchstart", D), z = !0), L(e, "on")
                },
                detachEvents: function() {
                    L(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: n,
                            loopedSlides: i = 0,
                            params: s,
                            $el: o
                        } = e,
                        r = s.breakpoints;
                    if (!r || r && 0 === Object.keys(r).length) return;
                    const a = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                    if (!a || e.currentBreakpoint === a) return;
                    const l = (a in r ? r[a] : void 0) || e.originalParams,
                        c = I(e, s),
                        d = I(e, l),
                        u = s.enabled;
                    c && !d ? (o.removeClass(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && d && (o.addClass(`${s.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === s.grid.fill) && o.addClass(`${s.containerModifierClass}grid-column`), e.emitContainerClasses());
                    const p = l.direction && l.direction !== s.direction,
                        h = s.loop && (l.slidesPerView !== s.slidesPerView || p);
                    p && n && e.changeDirection(), m(e.params, l);
                    const f = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), u && !f ? e.disable() : !u && f && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", l), h && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                },
                getBreakpoint: function(e, t = "window", n) {
                    if (!e || "container" === t && !n) return;
                    let i = !1;
                    const s = o(),
                        r = "window" === t ? s.innerHeight : n.clientHeight,
                        a = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: r * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < a.length; e += 1) {
                        const {
                            point: o,
                            value: r
                        } = a[e];
                        "window" === t ? s.matchMedia(`(min-width: ${r}px)`).matches && (i = o) : r <= n.clientWidth && (i = o)
                    }
                    return i || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this,
                        {
                            isLocked: t,
                            params: n
                        } = e,
                        {
                            slidesOffsetBefore: i
                        } = n;
                    if (i) {
                        const t = e.slides.length - 1,
                            n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                        e.isLocked = e.size > n
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    const e = this,
                        {
                            classNames: t,
                            params: n,
                            rtl: i,
                            $el: s,
                            device: o,
                            support: r
                        } = e,
                        a = function(e, t) {
                            const n = [];
                            return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((i => {
                                    e[i] && n.push(t + i)
                                })) : "string" == typeof e && n.push(t + e)
                            })), n
                        }(["initialized", n.direction, {
                            "pointer-events": !r.touch
                        }, {
                            "free-mode": e.params.freeMode && n.freeMode.enabled
                        }, {
                            autoheight: n.autoHeight
                        }, {
                            rtl: i
                        }, {
                            grid: n.grid && n.grid.rows > 1
                        }, {
                            "grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill
                        }, {
                            android: o.android
                        }, {
                            ios: o.ios
                        }, {
                            "css-mode": n.cssMode
                        }, {
                            centered: n.cssMode && n.centeredSlides
                        }], n.containerModifierClass);
                    t.push(...a), s.addClass([...t].join(" ")), e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            },
            images: {
                loadImage: function(e, t, n, i, s, r) {
                    const a = o();
                    let l;

                    function d() {
                        r && r()
                    }
                    c(e).parent("picture")[0] || e.complete && s ? d() : t ? (l = new a.Image, l.onload = d, l.onerror = d, i && (l.sizes = i), n && (l.srcset = n), t && (l.src = t)) : d()
                },
                preloadImages: function() {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                        const i = e.imagesToLoad[n];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        H = {};
    class N {
        constructor(...e) {
            let t, n;
            if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? n = e[0] : [t, n] = e, n || (n = {}), n = m({}, n), t && !n.el && (n.el = t), n.el && c(n.el).length > 1) {
                const e = [];
                return c(n.el).each((t => {
                    const i = m({}, n, {
                        el: t
                    });
                    e.push(new N(i))
                })), e
            }
            const i = this;
            i.__swiper__ = !0, i.support = x(), i.device = C({
                userAgent: n.userAgent
            }), i.browser = $(), i.eventsListeners = {}, i.eventsAnyListeners = [], i.modules = [...i.__modules__], n.modules && Array.isArray(n.modules) && i.modules.push(...n.modules);
            const s = {};
            i.modules.forEach((e => {
                e({
                    swiper: i,
                    extendParams: j(n, s),
                    on: i.on.bind(i),
                    once: i.once.bind(i),
                    off: i.off.bind(i),
                    emit: i.emit.bind(i)
                })
            }));
            const o = m({}, O, s);
            return i.params = m({}, o, H, n), i.originalParams = m({}, i.params), i.passedParams = m({}, n), i.params && i.params.on && Object.keys(i.params.on).forEach((e => {
                i.on(e, i.params.on[e])
            })), i.params && i.params.onAny && i.onAny(i.params.onAny), i.$ = c, Object.assign(i, {
                enabled: i.params.enabled,
                el: t,
                classNames: [],
                slides: c(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === i.params.direction,
                isVertical: () => "vertical" === i.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: i.params.allowSlideNext,
                allowSlidePrev: i.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return i.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, i.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, i.support.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: i.params.focusableElements,
                    lastClickTime: p(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: i.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), i.emit("_swiper"), i.params.init && i.init(), i
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
            const n = this;
            e = Math.min(Math.max(e, 0), 1);
            const i = n.minTranslate(),
                s = (n.maxTranslate() - i) * e + i;
            n.translateTo(s, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((n => {
                const i = e.getSlideClasses(n);
                t.push({
                    slideEl: n,
                    classNames: i
                }), e.emit("_slideClass", n, i)
            })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e = "current", t = !1) {
            const {
                params: n,
                slides: i,
                slidesGrid: s,
                slidesSizesGrid: o,
                size: r,
                activeIndex: a
            } = this;
            let l = 1;
            if (n.centeredSlides) {
                let e, t = i[a].swiperSlideSize;
                for (let n = a + 1; n < i.length; n += 1) i[n] && !e && (t += i[n].swiperSlideSize, l += 1, t > r && (e = !0));
                for (let n = a - 1; n >= 0; n -= 1) i[n] && !e && (t += i[n].swiperSlideSize, l += 1, t > r && (e = !0))
            } else if ("current" === e)
                for (let e = a + 1; e < i.length; e += 1)(t ? s[e] + o[e] - s[a] < r : s[e] - s[a] < r) && (l += 1);
            else
                for (let e = a - 1; e >= 0; e -= 1) s[a] - s[e] < r && (l += 1);
            return l
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: n
            } = e;

            function i() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let s;
            n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (s = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), s || i()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t = !0) {
            const n = this,
                i = n.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${i}`).addClass(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.each((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), n.emit("changeDirection"), t && n.update()), n
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const n = c(e || t.params.el);
            if (!(e = n[0])) return !1;
            e.swiper = t;
            const s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
            let o = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = c(e.shadowRoot.querySelector(s()));
                    return t.children = e => n.children(e), t
                }
                return n.children(s())
            })();
            if (0 === o.length && t.params.createElements) {
                const e = i().createElement("div");
                o = c(e), e.className = t.params.wrapperClass, n.append(e), n.children(`.${t.params.slideClass}`).each((e => {
                    o.append(e)
                }))
            }
            return Object.assign(t, {
                $el: n,
                el: e,
                $wrapperEl: o,
                wrapperEl: o[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
                wrongRTL: "-webkit-box" === o.css("display")
            }), !0
        }
        init(e) {
            const t = this;
            return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }
        destroy(e = !0, t = !0) {
            const n = this,
                {
                    params: i,
                    $el: s,
                    $wrapperEl: o,
                    slides: r
                } = n;
            return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), s.removeAttr("style"), o.removeAttr("style"), r && r.length && r.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
                n.off(e)
            })), !1 !== e && (n.$el[0].swiper = null, function(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            }(n)), n.destroyed = !0), null
        }
        static extendDefaults(e) {
            m(H, e)
        }
        static get extendedDefaults() {
            return H
        }
        static get defaults() {
            return O
        }
        static installModule(e) {
            N.prototype.__modules__ || (N.prototype.__modules__ = []);
            const t = N.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => N.installModule(e))), N) : (N.installModule(e), N)
        }
    }

    function R(e, t, n, s) {
        const o = i();
        return e.params.createElements && Object.keys(s).forEach((i => {
            if (!n[i] && !0 === n.auto) {
                let r = e.$el.children(`.${s[i]}`)[0];
                r || (r = o.createElement("div"), r.className = s[i], e.$el.append(r)), n[i] = r, t[i] = r
            }
        })), n
    }

    function B(e = "") {
        return `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
    }

    function F(e) {
        const t = this,
            {
                $wrapperEl: n,
                params: i
            } = t;
        if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
            for (let t = 0; t < e.length; t += 1) e[t] && n.append(e[t]);
        else n.append(e);
        i.loop && t.loopCreate(), i.observer || t.update()
    }

    function W(e) {
        const t = this,
            {
                params: n,
                $wrapperEl: i,
                activeIndex: s
            } = t;
        n.loop && t.loopDestroy();
        let o = s + 1;
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && i.prepend(e[t]);
            o = s + e.length
        } else i.prepend(e);
        n.loop && t.loopCreate(), n.observer || t.update(), t.slideTo(o, 0, !1)
    }

    function Y(e, t) {
        const n = this,
            {
                $wrapperEl: i,
                params: s,
                activeIndex: o
            } = n;
        let r = o;
        s.loop && (r -= n.loopedSlides, n.loopDestroy(), n.slides = i.children(`.${s.slideClass}`));
        const a = n.slides.length;
        if (e <= 0) return void n.prependSlide(t);
        if (e >= a) return void n.appendSlide(t);
        let l = r > e ? r + 1 : r;
        const c = [];
        for (let t = a - 1; t >= e; t -= 1) {
            const e = n.slides.eq(t);
            e.remove(), c.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
            l = r > e ? r + t.length : r
        } else i.append(t);
        for (let e = 0; e < c.length; e += 1) i.append(c[e]);
        s.loop && n.loopCreate(), s.observer || n.update(), s.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1)
    }

    function G(e) {
        const t = this,
            {
                params: n,
                $wrapperEl: i,
                activeIndex: s
            } = t;
        let o = s;
        n.loop && (o -= t.loopedSlides, t.loopDestroy(), t.slides = i.children(`.${n.slideClass}`));
        let r, a = o;
        if ("object" == typeof e && "length" in e) {
            for (let n = 0; n < e.length; n += 1) r = e[n], t.slides[r] && t.slides.eq(r).remove(), r < a && (a -= 1);
            a = Math.max(a, 0)
        } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < a && (a -= 1), a = Math.max(a, 0);
        n.loop && t.loopCreate(), n.observer || t.update(), n.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1)
    }

    function X() {
        const e = this,
            t = [];
        for (let n = 0; n < e.slides.length; n += 1) t.push(n);
        e.removeSlide(t)
    }

    function V(e) {
        const {
            effect: t,
            swiper: n,
            on: i,
            setTranslate: s,
            setTransition: o,
            overwriteParams: r,
            perspective: a
        } = e;
        i("beforeInit", (() => {
            if (n.params.effect !== t) return;
            n.classNames.push(`${n.params.containerModifierClass}${t}`), a && a() && n.classNames.push(`${n.params.containerModifierClass}3d`);
            const e = r ? r() : {};
            Object.assign(n.params, e), Object.assign(n.originalParams, e)
        })), i("setTranslate", (() => {
            n.params.effect === t && s()
        })), i("setTransition", ((e, i) => {
            n.params.effect === t && o(i)
        }))
    }

    function U(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }

    function Q({
        swiper: e,
        duration: t,
        transformEl: n,
        allSlides: i
    }) {
        const {
            slides: s,
            activeIndex: o,
            $wrapperEl: r
        } = e;
        if (e.params.virtualTranslate && 0 !== t) {
            let t, a = !1;
            t = i ? n ? s.find(n) : s : n ? s.eq(o).find(n) : s.eq(o), t.transitionEnd((() => {
                if (a) return;
                if (!e || e.destroyed) return;
                a = !0, e.animating = !1;
                const t = ["webkitTransitionEnd", "transitionend"];
                for (let e = 0; e < t.length; e += 1) r.trigger(t[e])
            }))
        }
    }

    function Z(e, t, n) {
        const i = "swiper-slide-shadow" + (n ? `-${n}` : ""),
            s = e.transformEl ? t.find(e.transformEl) : t;
        let o = s.children(`.${i}`);
        return o.length || (o = c(`<div class="swiper-slide-shadow${n?`-${n}`:""}"></div>`), s.append(o)), o
    }
    Object.keys(q).forEach((e => {
        Object.keys(q[e]).forEach((t => {
            N.prototype[t] = q[e][t]
        }))
    })), N.use([function({
        swiper: e,
        on: t,
        emit: n
    }) {
        const i = o();
        let s = null;
        const r = () => {
                e && !e.destroyed && e.initialized && (n("beforeResize"), n("resize"))
            },
            a = () => {
                e && !e.destroyed && e.initialized && n("orientationchange")
            };
        t("init", (() => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver ? e && !e.destroyed && e.initialized && (s = new ResizeObserver((t => {
                const {
                    width: n,
                    height: i
                } = e;
                let s = n,
                    o = i;
                t.forEach((({
                    contentBoxSize: t,
                    contentRect: n,
                    target: i
                }) => {
                    i && i !== e.el || (s = n ? n.width : (t[0] || t).inlineSize, o = n ? n.height : (t[0] || t).blockSize)
                })), s === n && o === i || r()
            })), s.observe(e.el)) : (i.addEventListener("resize", r), i.addEventListener("orientationchange", a))
        })), t("destroy", (() => {
            s && s.unobserve && e.el && (s.unobserve(e.el), s = null), i.removeEventListener("resize", r), i.removeEventListener("orientationchange", a)
        }))
    }, function({
        swiper: e,
        extendParams: t,
        on: n,
        emit: i
    }) {
        const s = [],
            r = o(),
            a = (e, t = {}) => {
                const n = new(r.MutationObserver || r.WebkitMutationObserver)((e => {
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const t = function() {
                        i("observerUpdate", e[0])
                    };
                    r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0)
                }));
                n.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), s.push(n)
            };
        t({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), n("init", (() => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) a(t[e])
                }
                a(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }), a(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        })), n("destroy", (() => {
            s.forEach((e => {
                e.disconnect()
            })), s.splice(0, s.length)
        }))
    }]);
    const K = [function({
        swiper: e,
        extendParams: t,
        on: n
    }) {
        let i;

        function s(t, n) {
            const i = e.params.virtual;
            if (i.cache && e.virtual.cache[n]) return e.virtual.cache[n];
            const s = i.renderSlide ? c(i.renderSlide.call(e, t, n)) : c(`<div class="${e.params.slideClass}" data-swiper-slide-index="${n}">${t}</div>`);
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", n), i.cache && (e.virtual.cache[n] = s), s
        }

        function o(t) {
            const {
                slidesPerView: n,
                slidesPerGroup: i,
                centeredSlides: o
            } = e.params, {
                addSlidesBefore: r,
                addSlidesAfter: a
            } = e.params.virtual, {
                from: l,
                to: c,
                slides: d,
                slidesGrid: u,
                offset: p
            } = e.virtual;
            e.params.cssMode || e.updateActiveIndex();
            const h = e.activeIndex || 0;
            let f, m, g;
            f = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top", o ? (m = Math.floor(n / 2) + i + a, g = Math.floor(n / 2) + i + r) : (m = n + (i - 1) + a, g = i + r);
            const v = Math.max((h || 0) - g, 0),
                y = Math.min((h || 0) + m, d.length - 1),
                b = (e.slidesGrid[v] || 0) - (e.slidesGrid[0] || 0);

            function w() {
                e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load()
            }
            if (Object.assign(e.virtual, {
                    from: v,
                    to: y,
                    offset: b,
                    slidesGrid: e.slidesGrid
                }), l === v && c === y && !t) return e.slidesGrid !== u && b !== p && e.slides.css(f, `${b}px`), void e.updateProgress();
            if (e.params.virtual.renderExternal) return e.params.virtual.renderExternal.call(e, {
                offset: b,
                from: v,
                to: y,
                slides: function() {
                    const e = [];
                    for (let t = v; t <= y; t += 1) e.push(d[t]);
                    return e
                }()
            }), void(e.params.virtual.renderExternalUpdate && w());
            const x = [],
                C = [];
            if (t) e.$wrapperEl.find(`.${e.params.slideClass}`).remove();
            else
                for (let t = l; t <= c; t += 1)(t < v || t > y) && e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();
            for (let e = 0; e < d.length; e += 1) e >= v && e <= y && (void 0 === c || t ? C.push(e) : (e > c && C.push(e), e < l && x.push(e)));
            C.forEach((t => {
                e.$wrapperEl.append(s(d[t], t))
            })), x.sort(((e, t) => t - e)).forEach((t => {
                e.$wrapperEl.prepend(s(d[t], t))
            })), e.$wrapperEl.children(".swiper-slide").css(f, `${b}px`), w()
        }
        t({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }), e.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        }, n("beforeInit", (() => {
            e.params.virtual.enabled && (e.virtual.slides = e.params.virtual.slides, e.classNames.push(`${e.params.containerModifierClass}virtual`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, e.params.initialSlide || o())
        })), n("setTranslate", (() => {
            e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(i), i = setTimeout((() => {
                o()
            }), 100)) : o())
        })), n("init update resize", (() => {
            e.params.virtual.enabled && e.params.cssMode && g(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`)
        })), Object.assign(e.virtual, {
            appendSlide: function(t) {
                if ("object" == typeof t && "length" in t)
                    for (let n = 0; n < t.length; n += 1) t[n] && e.virtual.slides.push(t[n]);
                else e.virtual.slides.push(t);
                o(!0)
            },
            prependSlide: function(t) {
                const n = e.activeIndex;
                let i = n + 1,
                    s = 1;
                if (Array.isArray(t)) {
                    for (let n = 0; n < t.length; n += 1) t[n] && e.virtual.slides.unshift(t[n]);
                    i = n + t.length, s = t.length
                } else e.virtual.slides.unshift(t);
                if (e.params.virtual.cache) {
                    const t = e.virtual.cache,
                        n = {};
                    Object.keys(t).forEach((e => {
                        const i = t[e],
                            o = i.attr("data-swiper-slide-index");
                        o && i.attr("data-swiper-slide-index", parseInt(o, 10) + s), n[parseInt(e, 10) + s] = i
                    })), e.virtual.cache = n
                }
                o(!0), e.slideTo(i, 0)
            },
            removeSlide: function(t) {
                if (null == t) return;
                let n = e.activeIndex;
                if (Array.isArray(t))
                    for (let i = t.length - 1; i >= 0; i -= 1) e.virtual.slides.splice(t[i], 1), e.params.virtual.cache && delete e.virtual.cache[t[i]], t[i] < n && (n -= 1), n = Math.max(n, 0);
                else e.virtual.slides.splice(t, 1), e.params.virtual.cache && delete e.virtual.cache[t], t < n && (n -= 1), n = Math.max(n, 0);
                o(!0), e.slideTo(n, 0)
            },
            removeAllSlides: function() {
                e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), o(!0), e.slideTo(0, 0)
            },
            update: o
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n,
        emit: s
    }) {
        const r = i(),
            a = o();

        function l(t) {
            if (!e.enabled) return;
            const {
                rtlTranslate: n
            } = e;
            let i = t;
            i.originalEvent && (i = i.originalEvent);
            const o = i.keyCode || i.charCode,
                l = e.params.keyboard.pageUpDown,
                c = l && 33 === o,
                d = l && 34 === o,
                u = 37 === o,
                p = 39 === o,
                h = 38 === o,
                f = 40 === o;
            if (!e.allowSlideNext && (e.isHorizontal() && p || e.isVertical() && f || d)) return !1;
            if (!e.allowSlidePrev && (e.isHorizontal() && u || e.isVertical() && h || c)) return !1;
            if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || r.activeElement && r.activeElement.nodeName && ("input" === r.activeElement.nodeName.toLowerCase() || "textarea" === r.activeElement.nodeName.toLowerCase()))) {
                if (e.params.keyboard.onlyInViewport && (c || d || u || p || h || f)) {
                    let t = !1;
                    if (e.$el.parents(`.${e.params.slideClass}`).length > 0 && 0 === e.$el.parents(`.${e.params.slideActiveClass}`).length) return;
                    const i = e.$el,
                        s = i[0].clientWidth,
                        o = i[0].clientHeight,
                        r = a.innerWidth,
                        l = a.innerHeight,
                        c = e.$el.offset();
                    n && (c.left -= e.$el[0].scrollLeft);
                    const d = [
                        [c.left, c.top],
                        [c.left + s, c.top],
                        [c.left, c.top + o],
                        [c.left + s, c.top + o]
                    ];
                    for (let e = 0; e < d.length; e += 1) {
                        const n = d[e];
                        if (n[0] >= 0 && n[0] <= r && n[1] >= 0 && n[1] <= l) {
                            if (0 === n[0] && 0 === n[1]) continue;
                            t = !0
                        }
                    }
                    if (!t) return
                }
                e.isHorizontal() ? ((c || d || u || p) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), ((d || p) && !n || (c || u) && n) && e.slideNext(), ((c || u) && !n || (d || p) && n) && e.slidePrev()) : ((c || d || h || f) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (d || f) && e.slideNext(), (c || h) && e.slidePrev()), s("keyPress", o)
            }
        }

        function d() {
            e.keyboard.enabled || (c(r).on("keydown", l), e.keyboard.enabled = !0)
        }

        function u() {
            e.keyboard.enabled && (c(r).off("keydown", l), e.keyboard.enabled = !1)
        }
        e.keyboard = {
            enabled: !1
        }, t({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }), n("init", (() => {
            e.params.keyboard.enabled && d()
        })), n("destroy", (() => {
            e.keyboard.enabled && u()
        })), Object.assign(e.keyboard, {
            enable: d,
            disable: u
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n,
        emit: i
    }) {
        const s = o();
        let r;
        t({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }), e.mousewheel = {
            enabled: !1
        };
        let a, l = p();
        const d = [];

        function h() {
            e.enabled && (e.mouseEntered = !0)
        }

        function f() {
            e.enabled && (e.mouseEntered = !1)
        }

        function m(t) {
            return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && p() - l < e.params.mousewheel.thresholdTime || !(t.delta >= 6 && p() - l < 60) && (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(), i("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(), i("scroll", t.raw)), l = (new s.Date).getTime(), 1))
        }

        function g(t) {
            let n = t,
                s = !0;
            if (!e.enabled) return;
            const o = e.params.mousewheel;
            e.params.cssMode && n.preventDefault();
            let l = e.$el;
            if ("container" !== e.params.mousewheel.eventsTarget && (l = c(e.params.mousewheel.eventsTarget)), !e.mouseEntered && !l[0].contains(n.target) && !o.releaseOnEdges) return !0;
            n.originalEvent && (n = n.originalEvent);
            let h = 0;
            const f = e.rtlTranslate ? -1 : 1,
                g = function(e) {
                    let t = 0,
                        n = 0,
                        i = 0,
                        s = 0;
                    return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, s = 10 * n, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = s, s = 0), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !n && (n = s < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: n,
                        pixelX: i,
                        pixelY: s
                    }
                }(n);
            if (o.forceToAxis)
                if (e.isHorizontal()) {
                    if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
                    h = -g.pixelX * f
                } else {
                    if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
                    h = -g.pixelY
                }
            else h = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * f : -g.pixelY;
            if (0 === h) return !0;
            o.invert && (h = -h);
            let v = e.getTranslate() + h * o.sensitivity;
            if (v >= e.minTranslate() && (v = e.minTranslate()), v <= e.maxTranslate() && (v = e.maxTranslate()), s = !!e.params.loop || !(v === e.minTranslate() || v === e.maxTranslate()), s && e.params.nested && n.stopPropagation(), e.params.freeMode && e.params.freeMode.enabled) {
                const t = {
                        time: p(),
                        delta: Math.abs(h),
                        direction: Math.sign(h)
                    },
                    s = a && t.time < a.time + 500 && t.delta <= a.delta && t.direction === a.direction;
                if (!s) {
                    a = void 0, e.params.loop && e.loopFix();
                    let l = e.getTranslate() + h * o.sensitivity;
                    const c = e.isBeginning,
                        p = e.isEnd;
                    if (l >= e.minTranslate() && (l = e.minTranslate()), l <= e.maxTranslate() && (l = e.maxTranslate()), e.setTransition(0), e.setTranslate(l), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!c && e.isBeginning || !p && e.isEnd) && e.updateSlidesClasses(), e.params.freeMode.sticky) {
                        clearTimeout(r), r = void 0, d.length >= 15 && d.shift();
                        const n = d.length ? d[d.length - 1] : void 0,
                            i = d[0];
                        if (d.push(t), n && (t.delta > n.delta || t.direction !== n.direction)) d.splice(0);
                        else if (d.length >= 15 && t.time - i.time < 500 && i.delta - t.delta >= 1 && t.delta <= 6) {
                            const n = h > 0 ? .8 : .2;
                            a = t, d.splice(0), r = u((() => {
                                e.slideToClosest(e.params.speed, !0, void 0, n)
                            }), 0)
                        }
                        r || (r = u((() => {
                            a = t, d.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (s || i("scroll", n), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), l === e.minTranslate() || l === e.maxTranslate()) return !0
                }
            } else {
                const n = {
                    time: p(),
                    delta: Math.abs(h),
                    direction: Math.sign(h),
                    raw: t
                };
                d.length >= 2 && d.shift();
                const i = d.length ? d[d.length - 1] : void 0;
                if (d.push(n), i ? (n.direction !== i.direction || n.delta > i.delta || n.time > i.time + 150) && m(n) : m(n), function(t) {
                        const n = e.params.mousewheel;
                        if (t.direction < 0) {
                            if (e.isEnd && !e.params.loop && n.releaseOnEdges) return !0
                        } else if (e.isBeginning && !e.params.loop && n.releaseOnEdges) return !0;
                        return !1
                    }(n)) return !0
            }
            return n.preventDefault ? n.preventDefault() : n.returnValue = !1, !1
        }

        function v(t) {
            let n = e.$el;
            "container" !== e.params.mousewheel.eventsTarget && (n = c(e.params.mousewheel.eventsTarget)), n[t]("mouseenter", h), n[t]("mouseleave", f), n[t]("wheel", g)
        }

        function y() {
            return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", g), !0) : !e.mousewheel.enabled && (v("on"), e.mousewheel.enabled = !0, !0)
        }

        function b() {
            return e.params.cssMode ? (e.wrapperEl.addEventListener(event, g), !0) : !!e.mousewheel.enabled && (v("off"), e.mousewheel.enabled = !1, !0)
        }
        n("init", (() => {
            !e.params.mousewheel.enabled && e.params.cssMode && b(), e.params.mousewheel.enabled && y()
        })), n("destroy", (() => {
            e.params.cssMode && y(), e.mousewheel.enabled && b()
        })), Object.assign(e.mousewheel, {
            enable: y,
            disable: b
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n,
        emit: i
    }) {
        function s(t) {
            let n;
            return t && (n = c(t), e.params.uniqueNavElements && "string" == typeof t && n.length > 1 && 1 === e.$el.find(t).length && (n = e.$el.find(t))), n
        }

        function o(t, n) {
            const i = e.params.navigation;
            t && t.length > 0 && (t[n ? "addClass" : "removeClass"](i.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = n), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](i.lockClass))
        }

        function r() {
            if (e.params.loop) return;
            const {
                $nextEl: t,
                $prevEl: n
            } = e.navigation;
            o(n, e.isBeginning && !e.params.rewind), o(t, e.isEnd && !e.params.rewind)
        }

        function a(t) {
            t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev()
        }

        function l(t) {
            t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext()
        }

        function d() {
            const t = e.params.navigation;
            if (e.params.navigation = R(e, e.originalParams.navigation, e.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !t.nextEl && !t.prevEl) return;
            const n = s(t.nextEl),
                i = s(t.prevEl);
            n && n.length > 0 && n.on("click", l), i && i.length > 0 && i.on("click", a), Object.assign(e.navigation, {
                $nextEl: n,
                nextEl: n && n[0],
                $prevEl: i,
                prevEl: i && i[0]
            }), e.enabled || (n && n.addClass(t.lockClass), i && i.addClass(t.lockClass))
        }

        function u() {
            const {
                $nextEl: t,
                $prevEl: n
            } = e.navigation;
            t && t.length && (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", a), n.removeClass(e.params.navigation.disabledClass))
        }
        t({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        }), e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        }, n("init", (() => {
            d(), r()
        })), n("toEdge fromEdge lock unlock", (() => {
            r()
        })), n("destroy", (() => {
            u()
        })), n("enable disable", (() => {
            const {
                $nextEl: t,
                $prevEl: n
            } = e.navigation;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), n && n[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
        })), n("click", ((t, n) => {
            const {
                $nextEl: s,
                $prevEl: o
            } = e.navigation, r = n.target;
            if (e.params.navigation.hideOnClick && !c(r).is(o) && !c(r).is(s)) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === r || e.pagination.el.contains(r))) return;
                let t;
                s ? t = s.hasClass(e.params.navigation.hiddenClass) : o && (t = o.hasClass(e.params.navigation.hiddenClass)), i(!0 === t ? "navigationShow" : "navigationHide"), s && s.toggleClass(e.params.navigation.hiddenClass), o && o.toggleClass(e.params.navigation.hiddenClass)
            }
        })), Object.assign(e.navigation, {
            update: r,
            init: d,
            destroy: u
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n,
        emit: i
    }) {
        const s = "swiper-pagination";
        let o;
        t({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${s}-bullet`,
                bulletActiveClass: `${s}-bullet-active`,
                modifierClass: `${s}-`,
                currentClass: `${s}-current`,
                totalClass: `${s}-total`,
                hiddenClass: `${s}-hidden`,
                progressbarFillClass: `${s}-progressbar-fill`,
                progressbarOppositeClass: `${s}-progressbar-opposite`,
                clickableClass: `${s}-clickable`,
                lockClass: `${s}-lock`,
                horizontalClass: `${s}-horizontal`,
                verticalClass: `${s}-vertical`
            }
        }), e.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let r = 0;

        function a() {
            return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
        }

        function l(t, n) {
            const {
                bulletActiveClass: i
            } = e.params.pagination;
            t[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`)
        }

        function d() {
            const t = e.rtl,
                n = e.params.pagination;
            if (a()) return;
            const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                d = e.pagination.$el;
            let u;
            const p = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (u = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), u > s - 1 - 2 * e.loopedSlides && (u -= s - 2 * e.loopedSlides), u > p - 1 && (u -= p), u < 0 && "bullets" !== e.params.paginationType && (u = p + u)) : u = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const i = e.pagination.bullets;
                let s, a, p;
                if (n.dynamicBullets && (o = i.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), d.css(e.isHorizontal() ? "width" : "height", o * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (r += u - (e.previousIndex - e.loopedSlides || 0), r > n.dynamicMainBullets - 1 ? r = n.dynamicMainBullets - 1 : r < 0 && (r = 0)), s = Math.max(u - r, 0), a = s + (Math.min(i.length, n.dynamicMainBullets) - 1), p = (a + s) / 2), i.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${n.bulletActiveClass}${e}`)).join(" ")), d.length > 1) i.each((e => {
                    const t = c(e),
                        i = t.index();
                    i === u && t.addClass(n.bulletActiveClass), n.dynamicBullets && (i >= s && i <= a && t.addClass(`${n.bulletActiveClass}-main`), i === s && l(t, "prev"), i === a && l(t, "next"))
                }));
                else {
                    const t = i.eq(u),
                        o = t.index();
                    if (t.addClass(n.bulletActiveClass), n.dynamicBullets) {
                        const t = i.eq(s),
                            r = i.eq(a);
                        for (let e = s; e <= a; e += 1) i.eq(e).addClass(`${n.bulletActiveClass}-main`);
                        if (e.params.loop)
                            if (o >= i.length) {
                                for (let e = n.dynamicMainBullets; e >= 0; e -= 1) i.eq(i.length - e).addClass(`${n.bulletActiveClass}-main`);
                                i.eq(i.length - n.dynamicMainBullets - 1).addClass(`${n.bulletActiveClass}-prev`)
                            } else l(t, "prev"), l(r, "next");
                        else l(t, "prev"), l(r, "next")
                    }
                }
                if (n.dynamicBullets) {
                    const s = Math.min(i.length, n.dynamicMainBullets + 4),
                        r = (o * s - o) / 2 - p * o,
                        a = t ? "right" : "left";
                    i.css(e.isHorizontal() ? a : "top", `${r}px`)
                }
            }
            if ("fraction" === n.type && (d.find(B(n.currentClass)).text(n.formatFractionCurrent(u + 1)), d.find(B(n.totalClass)).text(n.formatFractionTotal(p))), "progressbar" === n.type) {
                let t;
                t = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                const i = (u + 1) / p;
                let s = 1,
                    o = 1;
                "horizontal" === t ? s = i : o = i, d.find(B(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${o})`).transition(e.params.speed)
            }
            "custom" === n.type && n.renderCustom ? (d.html(n.renderCustom(e, u + 1, p)), i("paginationRender", d[0])) : i("paginationUpdate", d[0]), e.params.watchOverflow && e.enabled && d[e.isLocked ? "addClass" : "removeClass"](n.lockClass)
        }

        function u() {
            const t = e.params.pagination;
            if (a()) return;
            const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                s = e.pagination.$el;
            let o = "";
            if ("bullets" === t.type) {
                let i = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && i > n && (i = n);
                for (let n = 0; n < i; n += 1) t.renderBullet ? o += t.renderBullet.call(e, n, t.bulletClass) : o += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                s.html(o), e.pagination.bullets = s.find(B(t.bulletClass))
            }
            "fraction" === t.type && (o = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, s.html(o)), "progressbar" === t.type && (o = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, s.html(o)), "custom" !== t.type && i("paginationRender", e.pagination.$el[0])
        }

        function p() {
            e.params.pagination = R(e, e.originalParams.pagination, e.params.pagination, {
                el: "swiper-pagination"
            });
            const t = e.params.pagination;
            if (!t.el) return;
            let n = c(t.el);
            0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && (n = e.$el.find(t.el), n.length > 1 && (n = n.filter((t => c(t).parents(".swiper")[0] === e.el)))), "bullets" === t.type && t.clickable && n.addClass(t.clickableClass), n.addClass(t.modifierClass + t.type), n.addClass(t.modifierClass + e.params.direction), "bullets" === t.type && t.dynamicBullets && (n.addClass(`${t.modifierClass}${t.type}-dynamic`), r = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass), t.clickable && n.on("click", B(t.bulletClass), (function(t) {
                t.preventDefault();
                let n = c(this).index() * e.params.slidesPerGroup;
                e.params.loop && (n += e.loopedSlides), e.slideTo(n)
            })), Object.assign(e.pagination, {
                $el: n,
                el: n[0]
            }), e.enabled || n.addClass(t.lockClass))
        }

        function h() {
            const t = e.params.pagination;
            if (a()) return;
            const n = e.pagination.$el;
            n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), n.removeClass(t.modifierClass + e.params.direction), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", B(t.bulletClass))
        }
        n("init", (() => {
            p(), u(), d()
        })), n("activeIndexChange", (() => {
            (e.params.loop || void 0 === e.snapIndex) && d()
        })), n("snapIndexChange", (() => {
            e.params.loop || d()
        })), n("slidesLengthChange", (() => {
            e.params.loop && (u(), d())
        })), n("snapGridLengthChange", (() => {
            e.params.loop || (u(), d())
        })), n("destroy", (() => {
            h()
        })), n("enable disable", (() => {
            const {
                $el: t
            } = e.pagination;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
        })), n("lock unlock", (() => {
            d()
        })), n("click", ((t, n) => {
            const s = n.target,
                {
                    $el: o
                } = e.pagination;
            if (e.params.pagination.el && e.params.pagination.hideOnClick && o.length > 0 && !c(s).hasClass(e.params.pagination.bulletClass)) {
                if (e.navigation && (e.navigation.nextEl && s === e.navigation.nextEl || e.navigation.prevEl && s === e.navigation.prevEl)) return;
                const t = o.hasClass(e.params.pagination.hiddenClass);
                i(!0 === t ? "paginationShow" : "paginationHide"), o.toggleClass(e.params.pagination.hiddenClass)
            }
        })), Object.assign(e.pagination, {
            render: u,
            update: d,
            init: p,
            destroy: h
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n,
        emit: s
    }) {
        const o = i();
        let r, a, l, d, p = !1,
            h = null,
            f = null;

        function m() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {
                scrollbar: t,
                rtlTranslate: n,
                progress: i
            } = e, {
                $dragEl: s,
                $el: o
            } = t, r = e.params.scrollbar;
            let c = a,
                d = (l - a) * i;
            n ? (d = -d, d > 0 ? (c = a - d, d = 0) : -d + a > l && (c = l + d)) : d < 0 ? (c = a + d, d = 0) : d + a > l && (c = l - d), e.isHorizontal() ? (s.transform(`translate3d(${d}px, 0, 0)`), s[0].style.width = `${c}px`) : (s.transform(`translate3d(0px, ${d}px, 0)`), s[0].style.height = `${c}px`), r.hide && (clearTimeout(h), o[0].style.opacity = 1, h = setTimeout((() => {
                o[0].style.opacity = 0, o.transition(400)
            }), 1e3))
        }

        function g() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {
                scrollbar: t
            } = e, {
                $dragEl: n,
                $el: i
            } = t;
            n[0].style.width = "", n[0].style.height = "", l = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, d = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), a = "auto" === e.params.scrollbar.dragSize ? l * d : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = `${a}px` : n[0].style.height = `${a}px`, i[0].style.display = d >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
        }

        function v(t) {
            return e.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY
        }

        function y(t) {
            const {
                scrollbar: n,
                rtlTranslate: i
            } = e, {
                $el: s
            } = n;
            let o;
            o = (v(t) - s.offset()[e.isHorizontal() ? "left" : "top"] - (null !== r ? r : a / 2)) / (l - a), o = Math.max(Math.min(o, 1), 0), i && (o = 1 - o);
            const c = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * o;
            e.updateProgress(c), e.setTranslate(c), e.updateActiveIndex(), e.updateSlidesClasses()
        }

        function b(t) {
            const n = e.params.scrollbar,
                {
                    scrollbar: i,
                    $wrapperEl: o
                } = e,
                {
                    $el: a,
                    $dragEl: l
                } = i;
            p = !0, r = t.target === l[0] || t.target === l ? v(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), o.transition(100), l.transition(100), y(t), clearTimeout(f), a.transition(0), n.hide && a.css("opacity", 1), e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"), s("scrollbarDragStart", t)
        }

        function w(t) {
            const {
                scrollbar: n,
                $wrapperEl: i
            } = e, {
                $el: o,
                $dragEl: r
            } = n;
            p && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, y(t), i.transition(0), o.transition(0), r.transition(0), s("scrollbarDragMove", t))
        }

        function x(t) {
            const n = e.params.scrollbar,
                {
                    scrollbar: i,
                    $wrapperEl: o
                } = e,
                {
                    $el: r
                } = i;
            p && (p = !1, e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), o.transition("")), n.hide && (clearTimeout(f), f = u((() => {
                r.css("opacity", 0), r.transition(400)
            }), 1e3)), s("scrollbarDragEnd", t), n.snapOnRelease && e.slideToClosest())
        }

        function C(t) {
            const {
                scrollbar: n,
                touchEventsTouch: i,
                touchEventsDesktop: s,
                params: r,
                support: a
            } = e, l = n.$el[0], c = !(!a.passiveListener || !r.passiveListeners) && {
                passive: !1,
                capture: !1
            }, d = !(!a.passiveListener || !r.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            if (!l) return;
            const u = "on" === t ? "addEventListener" : "removeEventListener";
            a.touch ? (l[u](i.start, b, c), l[u](i.move, w, c), l[u](i.end, x, d)) : (l[u](s.start, b, c), o[u](s.move, w, c), o[u](s.end, x, d))
        }

        function $() {
            const {
                scrollbar: t,
                $el: n
            } = e;
            e.params.scrollbar = R(e, e.originalParams.scrollbar, e.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const i = e.params.scrollbar;
            if (!i.el) return;
            let s = c(i.el);
            e.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === n.find(i.el).length && (s = n.find(i.el));
            let o = s.find(`.${e.params.scrollbar.dragClass}`);
            0 === o.length && (o = c(`<div class="${e.params.scrollbar.dragClass}"></div>`), s.append(o)), Object.assign(t, {
                $el: s,
                el: s[0],
                $dragEl: o,
                dragEl: o[0]
            }), i.draggable && e.params.scrollbar.el && C("on"), s && s[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        }

        function T() {
            e.params.scrollbar.el && C("off")
        }
        t({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        }), e.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        }, n("init", (() => {
            $(), g(), m()
        })), n("update resize observerUpdate lock unlock", (() => {
            g()
        })), n("setTranslate", (() => {
            m()
        })), n("setTransition", ((t, n) => {
            ! function(t) {
                e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t)
            }(n)
        })), n("enable disable", (() => {
            const {
                $el: t
            } = e.scrollbar;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        })), n("destroy", (() => {
            T()
        })), Object.assign(e.scrollbar, {
            updateSize: g,
            setTranslate: m,
            init: $,
            destroy: T
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n
    }) {
        t({
            parallax: {
                enabled: !1
            }
        });
        const i = (t, n) => {
                const {
                    rtl: i
                } = e, s = c(t), o = i ? -1 : 1, r = s.attr("data-swiper-parallax") || "0";
                let a = s.attr("data-swiper-parallax-x"),
                    l = s.attr("data-swiper-parallax-y");
                const d = s.attr("data-swiper-parallax-scale"),
                    u = s.attr("data-swiper-parallax-opacity");
                if (a || l ? (a = a || "0", l = l || "0") : e.isHorizontal() ? (a = r, l = "0") : (l = r, a = "0"), a = a.indexOf("%") >= 0 ? parseInt(a, 10) * n * o + "%" : a * n * o + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * n + "%" : l * n + "px", null != u) {
                    const e = u - (u - 1) * (1 - Math.abs(n));
                    s[0].style.opacity = e
                }
                if (null == d) s.transform(`translate3d(${a}, ${l}, 0px)`);
                else {
                    const e = d - (d - 1) * (1 - Math.abs(n));
                    s.transform(`translate3d(${a}, ${l}, 0px) scale(${e})`)
                }
            },
            s = () => {
                const {
                    $el: t,
                    slides: n,
                    progress: s,
                    snapGrid: o
                } = e;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    i(e, s)
                })), n.each(((t, n) => {
                    let r = t.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(n / 2) - s * (o.length - 1)), r = Math.min(Math.max(r, -1), 1), c(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                        i(e, r)
                    }))
                }))
            };
        n("beforeInit", (() => {
            e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
        })), n("init", (() => {
            e.params.parallax.enabled && s()
        })), n("setTranslate", (() => {
            e.params.parallax.enabled && s()
        })), n("setTransition", ((t, n) => {
            e.params.parallax.enabled && ((t = e.params.speed) => {
                const {
                    $el: n
                } = e;
                n.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    const n = c(e);
                    let i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || t;
                    0 === t && (i = 0), n.transition(i)
                }))
            })(n)
        }))
    }, function({
        swiper: e,
        extendParams: t,
        on: n,
        emit: i
    }) {
        const s = o();
        t({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), e.zoom = {
            enabled: !1
        };
        let r, a, l, d = 1,
            u = !1;
        const p = {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
            },
            f = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            },
            m = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
        let g = 1;

        function v(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX,
                n = e.targetTouches[0].pageY,
                i = e.targetTouches[1].pageX,
                s = e.targetTouches[1].pageY;
            return Math.sqrt((i - t) ** 2 + (s - n) ** 2)
        }

        function y(t) {
            const n = e.support,
                i = e.params.zoom;
            if (a = !1, l = !1, !n.gestures) {
                if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                a = !0, p.scaleStart = v(t)
            }
            p.$slideEl && p.$slideEl.length || (p.$slideEl = c(t.target).closest(`.${e.params.slideClass}`), 0 === p.$slideEl.length && (p.$slideEl = e.slides.eq(e.activeIndex)), p.$imageEl = p.$slideEl.find(`.${i.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), p.$imageWrapEl = p.$imageEl.parent(`.${i.containerClass}`), p.maxRatio = p.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== p.$imageWrapEl.length) ? (p.$imageEl && p.$imageEl.transition(0), u = !0) : p.$imageEl = void 0
        }

        function b(t) {
            const n = e.support,
                i = e.params.zoom,
                s = e.zoom;
            if (!n.gestures) {
                if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                l = !0, p.scaleMove = v(t)
            }
            p.$imageEl && 0 !== p.$imageEl.length ? (n.gestures ? s.scale = t.scale * d : s.scale = p.scaleMove / p.scaleStart * d, s.scale > p.maxRatio && (s.scale = p.maxRatio - 1 + (s.scale - p.maxRatio + 1) ** .5), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - (i.minRatio - s.scale + 1) ** .5), p.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`)) : "gesturechange" === t.type && y(t)
        }

        function w(t) {
            const n = e.device,
                i = e.support,
                s = e.params.zoom,
                o = e.zoom;
            if (!i.gestures) {
                if (!a || !l) return;
                if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !n.android) return;
                a = !1, l = !1
            }
            p.$imageEl && 0 !== p.$imageEl.length && (o.scale = Math.max(Math.min(o.scale, p.maxRatio), s.minRatio), p.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${o.scale})`), d = o.scale, u = !1, 1 === o.scale && (p.$slideEl = void 0))
        }

        function x(t) {
            const n = e.zoom;
            if (!p.$imageEl || 0 === p.$imageEl.length) return;
            if (e.allowClick = !1, !f.isTouched || !p.$slideEl) return;
            f.isMoved || (f.width = p.$imageEl[0].offsetWidth, f.height = p.$imageEl[0].offsetHeight, f.startX = h(p.$imageWrapEl[0], "x") || 0, f.startY = h(p.$imageWrapEl[0], "y") || 0, p.slideWidth = p.$slideEl[0].offsetWidth, p.slideHeight = p.$slideEl[0].offsetHeight, p.$imageWrapEl.transition(0));
            const i = f.width * n.scale,
                s = f.height * n.scale;
            if (!(i < p.slideWidth && s < p.slideHeight)) {
                if (f.minX = Math.min(p.slideWidth / 2 - i / 2, 0), f.maxX = -f.minX, f.minY = Math.min(p.slideHeight / 2 - s / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, f.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !f.isMoved && !u) {
                    if (e.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void(f.isTouched = !1);
                    if (!e.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void(f.isTouched = !1)
                }
                t.cancelable && t.preventDefault(), t.stopPropagation(), f.isMoved = !0, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8), m.prevPositionX || (m.prevPositionX = f.touchesCurrent.x), m.prevPositionY || (m.prevPositionY = f.touchesCurrent.y), m.prevTime || (m.prevTime = Date.now()), m.x = (f.touchesCurrent.x - m.prevPositionX) / (Date.now() - m.prevTime) / 2, m.y = (f.touchesCurrent.y - m.prevPositionY) / (Date.now() - m.prevTime) / 2, Math.abs(f.touchesCurrent.x - m.prevPositionX) < 2 && (m.x = 0), Math.abs(f.touchesCurrent.y - m.prevPositionY) < 2 && (m.y = 0), m.prevPositionX = f.touchesCurrent.x, m.prevPositionY = f.touchesCurrent.y, m.prevTime = Date.now(), p.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }
        }

        function C() {
            const t = e.zoom;
            p.$slideEl && e.previousIndex !== e.activeIndex && (p.$imageEl && p.$imageEl.transform("translate3d(0,0,0) scale(1)"), p.$imageWrapEl && p.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, d = 1, p.$slideEl = void 0, p.$imageEl = void 0, p.$imageWrapEl = void 0)
        }

        function $(t) {
            const n = e.zoom,
                i = e.params.zoom;
            if (p.$slideEl || (t && t.target && (p.$slideEl = c(t.target).closest(`.${e.params.slideClass}`)), p.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? p.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : p.$slideEl = e.slides.eq(e.activeIndex)), p.$imageEl = p.$slideEl.find(`.${i.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), p.$imageWrapEl = p.$imageEl.parent(`.${i.containerClass}`)), !p.$imageEl || 0 === p.$imageEl.length || !p.$imageWrapEl || 0 === p.$imageWrapEl.length) return;
            let o, r, a, l, u, h, m, g, v, y, b, w, x, C, $, T, E, S;
            e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), p.$slideEl.addClass(`${i.zoomedSlideClass}`), void 0 === f.touchesStart.x && t ? (o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, r = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (o = f.touchesStart.x, r = f.touchesStart.y), n.scale = p.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, d = p.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, t ? (E = p.$slideEl[0].offsetWidth, S = p.$slideEl[0].offsetHeight, a = p.$slideEl.offset().left + s.scrollX, l = p.$slideEl.offset().top + s.scrollY, u = a + E / 2 - o, h = l + S / 2 - r, v = p.$imageEl[0].offsetWidth, y = p.$imageEl[0].offsetHeight, b = v * n.scale, w = y * n.scale, x = Math.min(E / 2 - b / 2, 0), C = Math.min(S / 2 - w / 2, 0), $ = -x, T = -C, m = u * n.scale, g = h * n.scale, m < x && (m = x), m > $ && (m = $), g < C && (g = C), g > T && (g = T)) : (m = 0, g = 0), p.$imageWrapEl.transition(300).transform(`translate3d(${m}px, ${g}px,0)`), p.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${n.scale})`)
        }

        function T() {
            const t = e.zoom,
                n = e.params.zoom;
            p.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? p.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : p.$slideEl = e.slides.eq(e.activeIndex), p.$imageEl = p.$slideEl.find(`.${n.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), p.$imageWrapEl = p.$imageEl.parent(`.${n.containerClass}`)), p.$imageEl && 0 !== p.$imageEl.length && p.$imageWrapEl && 0 !== p.$imageWrapEl.length && (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), t.scale = 1, d = 1, p.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), p.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), p.$slideEl.removeClass(`${n.zoomedSlideClass}`), p.$slideEl = void 0)
        }

        function E(t) {
            const n = e.zoom;
            n.scale && 1 !== n.scale ? T() : $(t)
        }

        function S() {
            const t = e.support;
            return {
                passiveListener: !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !t.passiveListener || {
                    passive: !1,
                    capture: !0
                }
            }
        }

        function _() {
            return `.${e.params.slideClass}`
        }

        function M(t) {
            const {
                passiveListener: n
            } = S(), i = _();
            e.$wrapperEl[t]("gesturestart", i, y, n), e.$wrapperEl[t]("gesturechange", i, b, n), e.$wrapperEl[t]("gestureend", i, w, n)
        }

        function k() {
            r || (r = !0, M("on"))
        }

        function P() {
            r && (r = !1, M("off"))
        }

        function A() {
            const t = e.zoom;
            if (t.enabled) return;
            t.enabled = !0;
            const n = e.support,
                {
                    passiveListener: i,
                    activeListenerWithCapture: s
                } = S(),
                o = _();
            n.gestures ? (e.$wrapperEl.on(e.touchEvents.start, k, i), e.$wrapperEl.on(e.touchEvents.end, P, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, o, y, i), e.$wrapperEl.on(e.touchEvents.move, o, b, s), e.$wrapperEl.on(e.touchEvents.end, o, w, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, o, w, i)), e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, x, s)
        }

        function z() {
            const t = e.zoom;
            if (!t.enabled) return;
            const n = e.support;
            t.enabled = !1;
            const {
                passiveListener: i,
                activeListenerWithCapture: s
            } = S(), o = _();
            n.gestures ? (e.$wrapperEl.off(e.touchEvents.start, k, i), e.$wrapperEl.off(e.touchEvents.end, P, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, o, y, i), e.$wrapperEl.off(e.touchEvents.move, o, b, s), e.$wrapperEl.off(e.touchEvents.end, o, w, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, o, w, i)), e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, x, s)
        }
        Object.defineProperty(e.zoom, "scale", {
            get: () => g,
            set(e) {
                if (g !== e) {
                    const t = p.$imageEl ? p.$imageEl[0] : void 0,
                        n = p.$slideEl ? p.$slideEl[0] : void 0;
                    i("zoomChange", e, t, n)
                }
                g = e
            }
        }), n("init", (() => {
            e.params.zoom.enabled && A()
        })), n("destroy", (() => {
            z()
        })), n("touchStart", ((t, n) => {
            e.zoom.enabled && function(t) {
                const n = e.device;
                p.$imageEl && 0 !== p.$imageEl.length && (f.isTouched || (n.android && t.cancelable && t.preventDefault(), f.isTouched = !0, f.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, f.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
            }(n)
        })), n("touchEnd", ((t, n) => {
            e.zoom.enabled && function() {
                const t = e.zoom;
                if (!p.$imageEl || 0 === p.$imageEl.length) return;
                if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void(f.isMoved = !1);
                f.isTouched = !1, f.isMoved = !1;
                let n = 300,
                    i = 300;
                const s = m.x * n,
                    o = f.currentX + s,
                    r = m.y * i,
                    a = f.currentY + r;
                0 !== m.x && (n = Math.abs((o - f.currentX) / m.x)), 0 !== m.y && (i = Math.abs((a - f.currentY) / m.y));
                const l = Math.max(n, i);
                f.currentX = o, f.currentY = a;
                const c = f.width * t.scale,
                    d = f.height * t.scale;
                f.minX = Math.min(p.slideWidth / 2 - c / 2, 0), f.maxX = -f.minX, f.minY = Math.min(p.slideHeight / 2 - d / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), p.$imageWrapEl.transition(l).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }()
        })), n("doubleTap", ((t, n) => {
            !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && E(n)
        })), n("transitionEnd", (() => {
            e.zoom.enabled && e.params.zoom.enabled && C()
        })), n("slideChange", (() => {
            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && C()
        })), Object.assign(e.zoom, {
            enable: A,
            disable: z,
            in: $,
            out: T,
            toggle: E
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n,
        emit: i
    }) {
        t({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }), e.lazy = {};
        let s = !1,
            r = !1;

        function a(t, n = !0) {
            const s = e.params.lazy;
            if (void 0 === t) return;
            if (0 === e.slides.length) return;
            const o = e.virtual && e.params.virtual.enabled ? e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`) : e.slides.eq(t),
                r = o.find(`.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`);
            !o.hasClass(s.elementClass) || o.hasClass(s.loadedClass) || o.hasClass(s.loadingClass) || r.push(o[0]), 0 !== r.length && r.each((t => {
                const r = c(t);
                r.addClass(s.loadingClass);
                const l = r.attr("data-background"),
                    d = r.attr("data-src"),
                    u = r.attr("data-srcset"),
                    p = r.attr("data-sizes"),
                    h = r.parent("picture");
                e.loadImage(r[0], d || l, u, p, !1, (() => {
                    if (null != e && e && (!e || e.params) && !e.destroyed) {
                        if (l ? (r.css("background-image", `url("${l}")`), r.removeAttr("data-background")) : (u && (r.attr("srcset", u), r.removeAttr("data-srcset")), p && (r.attr("sizes", p), r.removeAttr("data-sizes")), h.length && h.children("source").each((e => {
                                const t = c(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                            })), d && (r.attr("src", d), r.removeAttr("data-src"))), r.addClass(s.loadedClass).removeClass(s.loadingClass), o.find(`.${s.preloaderClass}`).remove(), e.params.loop && n) {
                            const t = o.attr("data-swiper-slide-index");
                            o.hasClass(e.params.slideDuplicateClass) ? a(e.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`).index(), !1) : a(e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(), !1)
                        }
                        i("lazyImageReady", o[0], r[0]), e.params.autoHeight && e.updateAutoHeight()
                    }
                })), i("lazyImageLoad", o[0], r[0])
            }))
        }

        function l() {
            const {
                $wrapperEl: t,
                params: n,
                slides: i,
                activeIndex: s
            } = e, o = e.virtual && n.virtual.enabled, l = n.lazy;
            let d = n.slidesPerView;

            function u(e) {
                if (o) {
                    if (t.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0
                } else if (i[e]) return !0;
                return !1
            }

            function p(e) {
                return o ? c(e).attr("data-swiper-slide-index") : c(e).index()
            }
            if ("auto" === d && (d = 0), r || (r = !0), e.params.watchSlidesProgress) t.children(`.${n.slideVisibleClass}`).each((e => {
                a(o ? c(e).attr("data-swiper-slide-index") : c(e).index())
            }));
            else if (d > 1)
                for (let e = s; e < s + d; e += 1) u(e) && a(e);
            else a(s);
            if (l.loadPrevNext)
                if (d > 1 || l.loadPrevNextAmount && l.loadPrevNextAmount > 1) {
                    const e = l.loadPrevNextAmount,
                        t = d,
                        n = Math.min(s + t + Math.max(e, t), i.length),
                        o = Math.max(s - Math.max(t, e), 0);
                    for (let e = s + d; e < n; e += 1) u(e) && a(e);
                    for (let e = o; e < s; e += 1) u(e) && a(e)
                } else {
                    const e = t.children(`.${n.slideNextClass}`);
                    e.length > 0 && a(p(e));
                    const i = t.children(`.${n.slidePrevClass}`);
                    i.length > 0 && a(p(i))
                }
        }

        function d() {
            const t = o();
            if (!e || e.destroyed) return;
            const n = e.params.lazy.scrollingElement ? c(e.params.lazy.scrollingElement) : c(t),
                i = n[0] === t,
                r = i ? t.innerWidth : n[0].offsetWidth,
                a = i ? t.innerHeight : n[0].offsetHeight,
                u = e.$el.offset(),
                {
                    rtlTranslate: p
                } = e;
            let h = !1;
            p && (u.left -= e.$el[0].scrollLeft);
            const f = [
                [u.left, u.top],
                [u.left + e.width, u.top],
                [u.left, u.top + e.height],
                [u.left + e.width, u.top + e.height]
            ];
            for (let e = 0; e < f.length; e += 1) {
                const t = f[e];
                if (t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= a) {
                    if (0 === t[0] && 0 === t[1]) continue;
                    h = !0
                }
            }
            const m = !("touchstart" !== e.touchEvents.start || !e.support.passiveListener || !e.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (l(), n.off("scroll", d, m)) : s || (s = !0, n.on("scroll", d, m))
        }
        n("beforeInit", (() => {
            e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
        })), n("init", (() => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? d() : l())
        })), n("scroll", (() => {
            e.params.freeMode && e.params.freeMode.enabled && !e.params.freeMode.sticky && l()
        })), n("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? d() : l())
        })), n("transitionStart", (() => {
            e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !r) && (e.params.lazy.checkInView ? d() : l())
        })), n("transitionEnd", (() => {
            e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && (e.params.lazy.checkInView ? d() : l())
        })), n("slideChange", (() => {
            const {
                lazy: t,
                cssMode: n,
                watchSlidesProgress: i,
                touchReleaseOnEdges: s,
                resistanceRatio: o
            } = e.params;
            t.enabled && (n || i && (s || 0 === o)) && l()
        })), Object.assign(e.lazy, {
            load: l,
            loadInSlide: a
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n
    }) {
        function i(e, t) {
            const n = function() {
                let e, t, n;
                return (i, s) => {
                    for (t = -1, e = i.length; e - t > 1;) n = e + t >> 1, i[n] <= s ? t = n : e = n;
                    return e
                }
            }();
            let i, s;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                return e ? (s = n(this.x, e), i = s - 1, (e - this.x[i]) * (this.y[s] - this.y[i]) / (this.x[s] - this.x[i]) + this.y[i]) : 0
            }, this
        }

        function s() {
            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        }
        t({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), e.controller = {
            control: void 0
        }, n("beforeInit", (() => {
            e.controller.control = e.params.controller.control
        })), n("update", (() => {
            s()
        })), n("resize", (() => {
            s()
        })), n("observerUpdate", (() => {
            s()
        })), n("setTranslate", ((t, n, i) => {
            e.controller.control && e.controller.setTranslate(n, i)
        })), n("setTransition", ((t, n, i) => {
            e.controller.control && e.controller.setTransition(n, i)
        })), Object.assign(e.controller, {
            setTranslate: function(t, n) {
                const s = e.controller.control;
                let o, r;
                const a = e.constructor;

                function l(t) {
                    const n = e.rtlTranslate ? -e.translate : e.translate;
                    "slide" === e.params.controller.by && (function(t) {
                        e.controller.spline || (e.controller.spline = e.params.loop ? new i(e.slidesGrid, t.slidesGrid) : new i(e.snapGrid, t.snapGrid))
                    }(t), r = -e.controller.spline.interpolate(-n)), r && "container" !== e.params.controller.by || (o = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()), r = (n - e.minTranslate()) * o + t.minTranslate()), e.params.controller.inverse && (r = t.maxTranslate() - r), t.updateProgress(r), t.setTranslate(r, e), t.updateActiveIndex(), t.updateSlidesClasses()
                }
                if (Array.isArray(s))
                    for (let e = 0; e < s.length; e += 1) s[e] !== n && s[e] instanceof a && l(s[e]);
                else s instanceof a && n !== s && l(s)
            },
            setTransition: function(t, n) {
                const i = e.constructor,
                    s = e.controller.control;
                let o;

                function r(n) {
                    n.setTransition(t, e), 0 !== t && (n.transitionStart(), n.params.autoHeight && u((() => {
                        n.updateAutoHeight()
                    })), n.$wrapperEl.transitionEnd((() => {
                        s && (n.params.loop && "slide" === e.params.controller.by && n.loopFix(), n.transitionEnd())
                    })))
                }
                if (Array.isArray(s))
                    for (o = 0; o < s.length; o += 1) s[o] !== n && s[o] instanceof i && r(s[o]);
                else s instanceof i && n !== s && r(s)
            }
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n
    }) {
        t({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group"
            }
        });
        let i = null;

        function s(e) {
            const t = i;
            0 !== t.length && (t.html(""), t.html(e))
        }

        function o(e) {
            e.attr("tabIndex", "0")
        }

        function r(e) {
            e.attr("tabIndex", "-1")
        }

        function a(e, t) {
            e.attr("role", t)
        }

        function l(e, t) {
            e.attr("aria-roledescription", t)
        }

        function d(e, t) {
            e.attr("aria-label", t)
        }

        function u(e) {
            e.attr("aria-disabled", !0)
        }

        function p(e) {
            e.attr("aria-disabled", !1)
        }

        function h(t) {
            if (13 !== t.keyCode && 32 !== t.keyCode) return;
            const n = e.params.a11y,
                i = c(t.target);
            e.navigation && e.navigation.$nextEl && i.is(e.navigation.$nextEl) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? s(n.lastSlideMessage) : s(n.nextSlideMessage)), e.navigation && e.navigation.$prevEl && i.is(e.navigation.$prevEl) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? s(n.firstSlideMessage) : s(n.prevSlideMessage)), e.pagination && i.is(B(e.params.pagination.bulletClass)) && i[0].click()
        }

        function f() {
            if (e.params.loop || e.params.rewind || !e.navigation) return;
            const {
                $nextEl: t,
                $prevEl: n
            } = e.navigation;
            n && n.length > 0 && (e.isBeginning ? (u(n), r(n)) : (p(n), o(n))), t && t.length > 0 && (e.isEnd ? (u(t), r(t)) : (p(t), o(t)))
        }

        function m() {
            return e.pagination && e.pagination.bullets && e.pagination.bullets.length
        }

        function g() {
            return m() && e.params.pagination.clickable
        }
        const v = (e, t, n) => {
            o(e), "BUTTON" !== e[0].tagName && (a(e, "button"), e.on("keydown", h)), d(e, n),
                function(e, t) {
                    e.attr("aria-controls", t)
                }(e, t)
        };
        n("beforeInit", (() => {
            i = c(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        })), n("afterInit", (() => {
            e.params.a11y.enabled && (function() {
                const t = e.params.a11y;
                e.$el.append(i);
                const n = e.$el;
                t.containerRoleDescriptionMessage && l(n, t.containerRoleDescriptionMessage), t.containerMessage && d(n, t.containerMessage);
                const s = e.$wrapperEl,
                    o = s.attr("id") || `swiper-wrapper-${function(e=16){return"x".repeat(e).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}(16)}`,
                    r = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
                var u;
                u = o, s.attr("id", u),
                    function(e, t) {
                        e.attr("aria-live", t)
                    }(s, r), t.itemRoleDescriptionMessage && l(c(e.slides), t.itemRoleDescriptionMessage), a(c(e.slides), t.slideRole);
                const p = e.params.loop ? e.slides.filter((t => !t.classList.contains(e.params.slideDuplicateClass))).length : e.slides.length;
                let f, m;
                e.slides.each(((n, i) => {
                    const s = c(n),
                        o = e.params.loop ? parseInt(s.attr("data-swiper-slide-index"), 10) : i;
                    d(s, t.slideLabelMessage.replace(/\{\{index\}\}/, o + 1).replace(/\{\{slidesLength\}\}/, p))
                })), e.navigation && e.navigation.$nextEl && (f = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (m = e.navigation.$prevEl), f && f.length && v(f, o, t.nextSlideMessage), m && m.length && v(m, o, t.prevSlideMessage), g() && e.pagination.$el.on("keydown", B(e.params.pagination.bulletClass), h)
            }(), f())
        })), n("toEdge", (() => {
            e.params.a11y.enabled && f()
        })), n("fromEdge", (() => {
            e.params.a11y.enabled && f()
        })), n("paginationUpdate", (() => {
            e.params.a11y.enabled && function() {
                const t = e.params.a11y;
                m() && e.pagination.bullets.each((n => {
                    const i = c(n);
                    e.params.pagination.clickable && (o(i), e.params.pagination.renderBullet || (a(i, "button"), d(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)))), i.is(`.${e.params.pagination.bulletActiveClass}`) ? i.attr("aria-current", "true") : i.removeAttr("aria-current")
                }))
            }()
        })), n("destroy", (() => {
            e.params.a11y.enabled && function() {
                let t, n;
                i && i.length > 0 && i.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && t.off("keydown", h), n && n.off("keydown", h), g() && e.pagination.$el.off("keydown", B(e.params.pagination.bulletClass), h)
            }()
        }))
    }, function({
        swiper: e,
        extendParams: t,
        on: n
    }) {
        t({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides"
            }
        });
        let i = !1,
            s = {};
        const r = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            a = e => {
                const t = o();
                let n;
                n = e ? new URL(e) : t.location;
                const i = n.pathname.slice(1).split("/").filter((e => "" !== e)),
                    s = i.length;
                return {
                    key: i[s - 2],
                    value: i[s - 1]
                }
            },
            l = (t, n) => {
                const s = o();
                if (!i || !e.params.history.enabled) return;
                let a;
                a = e.params.url ? new URL(e.params.url) : s.location;
                const l = e.slides.eq(n);
                let c = r(l.attr("data-history"));
                if (e.params.history.root.length > 0) {
                    let n = e.params.history.root;
                    "/" === n[n.length - 1] && (n = n.slice(0, n.length - 1)), c = `${n}/${t}/${c}`
                } else a.pathname.includes(t) || (c = `${t}/${c}`);
                const d = s.history.state;
                d && d.value === c || (e.params.history.replaceState ? s.history.replaceState({
                    value: c
                }, null, c) : s.history.pushState({
                    value: c
                }, null, c))
            },
            c = (t, n, i) => {
                if (n)
                    for (let s = 0, o = e.slides.length; s < o; s += 1) {
                        const o = e.slides.eq(s);
                        if (r(o.attr("data-history")) === n && !o.hasClass(e.params.slideDuplicateClass)) {
                            const n = o.index();
                            e.slideTo(n, t, i)
                        }
                    } else e.slideTo(0, t, i)
            },
            d = () => {
                s = a(e.params.url), c(e.params.speed, e.paths.value, !1)
            };
        n("init", (() => {
            e.params.history.enabled && (() => {
                const t = o();
                if (e.params.history) {
                    if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    i = !0, s = a(e.params.url), (s.key || s.value) && (c(0, s.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", d))
                }
            })()
        })), n("destroy", (() => {
            e.params.history.enabled && (() => {
                const t = o();
                e.params.history.replaceState || t.removeEventListener("popstate", d)
            })()
        })), n("transitionEnd _freeModeNoMomentumRelease", (() => {
            i && l(e.params.history.key, e.activeIndex)
        })), n("slideChange", (() => {
            i && e.params.cssMode && l(e.params.history.key, e.activeIndex)
        }))
    }, function({
        swiper: e,
        extendParams: t,
        emit: n,
        on: s
    }) {
        let r = !1;
        const a = i(),
            l = o();
        t({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        });
        const d = () => {
                n("hashChange");
                const t = a.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    const n = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                    if (void 0 === n) return;
                    e.slideTo(n)
                }
            },
            u = () => {
                if (r && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && l.history && l.history.replaceState) l.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""), n("hashSet");
                    else {
                        const t = e.slides.eq(e.activeIndex),
                            i = t.attr("data-hash") || t.attr("data-history");
                        a.location.hash = i || "", n("hashSet")
                    }
            };
        s("init", (() => {
            e.params.hashNavigation.enabled && (() => {
                if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
                r = !0;
                const t = a.location.hash.replace("#", "");
                if (t) {
                    const n = 0;
                    for (let i = 0, s = e.slides.length; i < s; i += 1) {
                        const s = e.slides.eq(i);
                        if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                            const t = s.index();
                            e.slideTo(t, n, e.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                e.params.hashNavigation.watchState && c(l).on("hashchange", d)
            })()
        })), s("destroy", (() => {
            e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && c(l).off("hashchange", d)
        })), s("transitionEnd _freeModeNoMomentumRelease", (() => {
            r && u()
        })), s("slideChange", (() => {
            r && e.params.cssMode && u()
        }))
    }, function({
        swiper: e,
        extendParams: t,
        on: n,
        emit: s
    }) {
        let o;

        function r() {
            const t = e.slides.eq(e.activeIndex);
            let n = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(o), o = u((() => {
                let t;
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), s("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? l() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), s("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), s("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), s("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? l() : (t = e.slideTo(0, e.params.speed, !0, !0), s("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), s("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && r()
            }), n)
        }

        function a() {
            return void 0 === o && !e.autoplay.running && (e.autoplay.running = !0, s("autoplayStart"), r(), !0)
        }

        function l() {
            return !!e.autoplay.running && void 0 !== o && (o && (clearTimeout(o), o = void 0), e.autoplay.running = !1, s("autoplayStop"), !0)
        }

        function c(t) {
            e.autoplay.running && (e.autoplay.paused || (o && clearTimeout(o), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].addEventListener(t, p)
            })) : (e.autoplay.paused = !1, r())))
        }

        function d() {
            const t = i();
            "hidden" === t.visibilityState && e.autoplay.running && c(), "visible" === t.visibilityState && e.autoplay.paused && (r(), e.autoplay.paused = !1)
        }

        function p(t) {
            e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].removeEventListener(t, p)
            })), e.autoplay.paused = !1, e.autoplay.running ? r() : l())
        }

        function h() {
            e.params.autoplay.disableOnInteraction ? l() : c(), ["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].removeEventListener(t, p)
            }))
        }

        function f() {
            e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, r())
        }
        e.autoplay = {
            running: !1,
            paused: !1
        }, t({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }), n("init", (() => {
            e.params.autoplay.enabled && (a(), i().addEventListener("visibilitychange", d), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", h), e.$el.on("mouseleave", f)))
        })), n("beforeTransitionStart", ((t, n, i) => {
            e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(n) : l())
        })), n("sliderFirstMove", (() => {
            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? l() : c())
        })), n("touchEnd", (() => {
            e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && r()
        })), n("destroy", (() => {
            e.$el.off("mouseenter", h), e.$el.off("mouseleave", f), e.autoplay.running && l(), i().removeEventListener("visibilitychange", d)
        })), Object.assign(e.autoplay, {
            pause: c,
            run: r,
            start: a,
            stop: l
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n
    }) {
        t({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let i = !1,
            s = !1;

        function o() {
            const t = e.thumbs.swiper;
            if (!t) return;
            const n = t.clickedIndex,
                i = t.clickedSlide;
            if (i && c(i).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
            if (null == n) return;
            let s;
            if (s = t.params.loop ? parseInt(c(t.clickedSlide).attr("data-swiper-slide-index"), 10) : n, e.params.loop) {
                let t = e.activeIndex;
                e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, t = e.activeIndex);
                const n = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${s}"]`).eq(0).index(),
                    i = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${s}"]`).eq(0).index();
                s = void 0 === n ? i : void 0 === i ? n : i - t < t - n ? i : n
            }
            e.slideTo(s)
        }

        function r() {
            const {
                thumbs: t
            } = e.params;
            if (i) return !1;
            i = !0;
            const n = e.constructor;
            if (t.swiper instanceof n) e.thumbs.swiper = t.swiper, Object.assign(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            });
            else if (f(t.swiper)) {
                const i = Object.assign({}, t.swiper);
                Object.assign(i, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), e.thumbs.swiper = new n(i), s = !0
            }
            return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", o), !0
        }

        function a(t) {
            const n = e.thumbs.swiper;
            if (!n) return;
            const i = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView,
                s = e.params.thumbs.autoScrollOffset,
                o = s && !n.params.loop;
            if (e.realIndex !== n.realIndex || o) {
                let r, a, l = n.activeIndex;
                if (n.params.loop) {
                    n.slides.eq(l).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, l = n.activeIndex);
                    const t = n.slides.eq(l).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),
                        i = n.slides.eq(l).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();
                    r = void 0 === t ? i : void 0 === i ? t : i - l == l - t ? n.params.slidesPerGroup > 1 ? i : l : i - l < l - t ? i : t, a = e.activeIndex > e.previousIndex ? "next" : "prev"
                } else r = e.realIndex, a = r > e.previousIndex ? "next" : "prev";
                o && (r += "next" === a ? s : -1 * s), n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(r) < 0 && (n.params.centeredSlides ? r = r > l ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > l && n.params.slidesPerGroup, n.slideTo(r, t ? 0 : void 0))
            }
            let r = 1;
            const a = e.params.thumbs.slideThumbActiveClass;
            if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (r = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), n.slides.removeClass(a), n.params.loop || n.params.virtual && n.params.virtual.enabled)
                for (let t = 0; t < r; t += 1) n.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+t}"]`).addClass(a);
            else
                for (let t = 0; t < r; t += 1) n.slides.eq(e.realIndex + t).addClass(a)
        }
        e.thumbs = {
            swiper: null
        }, n("beforeInit", (() => {
            const {
                thumbs: t
            } = e.params;
            t && t.swiper && (r(), a(!0))
        })), n("slideChange update resize observerUpdate", (() => {
            e.thumbs.swiper && a()
        })), n("setTransition", ((t, n) => {
            const i = e.thumbs.swiper;
            i && i.setTransition(n)
        })), n("beforeDestroy", (() => {
            const t = e.thumbs.swiper;
            t && s && t && t.destroy()
        })), Object.assign(e.thumbs, {
            init: r,
            update: a
        })
    }, function({
        swiper: e,
        extendParams: t,
        emit: n,
        once: i
    }) {
        t({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(e, {
            freeMode: {
                onTouchMove: function() {
                    const {
                        touchEventsData: t,
                        touches: n
                    } = e;
                    0 === t.velocities.length && t.velocities.push({
                        position: n[e.isHorizontal() ? "startX" : "startY"],
                        time: t.touchStartTime
                    }), t.velocities.push({
                        position: n[e.isHorizontal() ? "currentX" : "currentY"],
                        time: p()
                    })
                },
                onTouchEnd: function({
                    currentPos: t
                }) {
                    const {
                        params: s,
                        $wrapperEl: o,
                        rtlTranslate: r,
                        snapGrid: a,
                        touchEventsData: l
                    } = e, c = p() - l.touchStartTime;
                    if (t < -e.minTranslate()) e.slideTo(e.activeIndex);
                    else if (t > -e.maxTranslate()) e.slides.length < a.length ? e.slideTo(a.length - 1) : e.slideTo(e.slides.length - 1);
                    else {
                        if (s.freeMode.momentum) {
                            if (l.velocities.length > 1) {
                                const t = l.velocities.pop(),
                                    n = l.velocities.pop(),
                                    i = t.position - n.position,
                                    o = t.time - n.time;
                                e.velocity = i / o, e.velocity /= 2, Math.abs(e.velocity) < s.freeMode.minimumVelocity && (e.velocity = 0), (o > 150 || p() - t.time > 300) && (e.velocity = 0)
                            } else e.velocity = 0;
                            e.velocity *= s.freeMode.momentumVelocityRatio, l.velocities.length = 0;
                            let t = 1e3 * s.freeMode.momentumRatio;
                            const c = e.velocity * t;
                            let d = e.translate + c;
                            r && (d = -d);
                            let u, h = !1;
                            const f = 20 * Math.abs(e.velocity) * s.freeMode.momentumBounceRatio;
                            let m;
                            if (d < e.maxTranslate()) s.freeMode.momentumBounce ? (d + e.maxTranslate() < -f && (d = e.maxTranslate() - f), u = e.maxTranslate(), h = !0, l.allowMomentumBounce = !0) : d = e.maxTranslate(), s.loop && s.centeredSlides && (m = !0);
                            else if (d > e.minTranslate()) s.freeMode.momentumBounce ? (d - e.minTranslate() > f && (d = e.minTranslate() + f), u = e.minTranslate(), h = !0, l.allowMomentumBounce = !0) : d = e.minTranslate(), s.loop && s.centeredSlides && (m = !0);
                            else if (s.freeMode.sticky) {
                                let t;
                                for (let e = 0; e < a.length; e += 1)
                                    if (a[e] > -d) {
                                        t = e;
                                        break
                                    }
                                d = Math.abs(a[t] - d) < Math.abs(a[t - 1] - d) || "next" === e.swipeDirection ? a[t] : a[t - 1], d = -d
                            }
                            if (m && i("transitionEnd", (() => {
                                    e.loopFix()
                                })), 0 !== e.velocity) {
                                if (t = r ? Math.abs((-d - e.translate) / e.velocity) : Math.abs((d - e.translate) / e.velocity), s.freeMode.sticky) {
                                    const n = Math.abs((r ? -d : d) - e.translate),
                                        i = e.slidesSizesGrid[e.activeIndex];
                                    t = n < i ? s.speed : n < 2 * i ? 1.5 * s.speed : 2.5 * s.speed
                                }
                            } else if (s.freeMode.sticky) return void e.slideToClosest();
                            s.freeMode.momentumBounce && h ? (e.updateProgress(u), e.setTransition(t), e.setTranslate(d), e.transitionStart(!0, e.swipeDirection), e.animating = !0, o.transitionEnd((() => {
                                e && !e.destroyed && l.allowMomentumBounce && (n("momentumBounce"), e.setTransition(s.speed), setTimeout((() => {
                                    e.setTranslate(u), o.transitionEnd((() => {
                                        e && !e.destroyed && e.transitionEnd()
                                    }))
                                }), 0))
                            }))) : e.velocity ? (n("_freeModeNoMomentumRelease"), e.updateProgress(d), e.setTransition(t), e.setTranslate(d), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, o.transitionEnd((() => {
                                e && !e.destroyed && e.transitionEnd()
                            })))) : e.updateProgress(d), e.updateActiveIndex(), e.updateSlidesClasses()
                        } else {
                            if (s.freeMode.sticky) return void e.slideToClosest();
                            s.freeMode && n("_freeModeNoMomentumRelease")
                        }(!s.freeMode.momentum || c >= s.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                    }
                }
            }
        })
    }, function({
        swiper: e,
        extendParams: t
    }) {
        let n, i, s;
        t({
            grid: {
                rows: 1,
                fill: "column"
            }
        }), e.grid = {
            initSlides: t => {
                const {
                    slidesPerView: o
                } = e.params, {
                    rows: r,
                    fill: a
                } = e.params.grid;
                i = n / r, s = Math.floor(t / r), n = Math.floor(t / r) === t / r ? t : Math.ceil(t / r) * r, "auto" !== o && "row" === a && (n = Math.max(n, o * r))
            },
            updateSlide: (t, o, r, a) => {
                const {
                    slidesPerGroup: l,
                    spaceBetween: c
                } = e.params, {
                    rows: d,
                    fill: u
                } = e.params.grid;
                let p, h, f;
                if ("row" === u && l > 1) {
                    const e = Math.floor(t / (l * d)),
                        i = t - d * l * e,
                        s = 0 === e ? l : Math.min(Math.ceil((r - e * d * l) / d), l);
                    f = Math.floor(i / s), h = i - f * s + e * l, p = h + f * n / d, o.css({
                        "-webkit-order": p,
                        order: p
                    })
                } else "column" === u ? (h = Math.floor(t / d), f = t - h * d, (h > s || h === s && f === d - 1) && (f += 1, f >= d && (f = 0, h += 1))) : (f = Math.floor(t / i), h = t - f * i);
                o.css(a("margin-top"), 0 !== f ? c && `${c}px` : "")
            },
            updateWrapperSize: (t, i, s) => {
                const {
                    spaceBetween: o,
                    centeredSlides: r,
                    roundLengths: a
                } = e.params, {
                    rows: l
                } = e.params.grid;
                if (e.virtualSize = (t + o) * n, e.virtualSize = Math.ceil(e.virtualSize / l) - o, e.$wrapperEl.css({
                        [s("width")]: `${e.virtualSize+o}px`
                    }), r) {
                    i.splice(0, i.length);
                    const t = [];
                    for (let n = 0; n < i.length; n += 1) {
                        let s = i[n];
                        a && (s = Math.floor(s)), i[n] < e.virtualSize + i[0] && t.push(s)
                    }
                    i.push(...t)
                }
            }
        }
    }, function({
        swiper: e
    }) {
        Object.assign(e, {
            appendSlide: F.bind(e),
            prependSlide: W.bind(e),
            addSlide: Y.bind(e),
            removeSlide: G.bind(e),
            removeAllSlides: X.bind(e)
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n
    }) {
        t({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }), V({
            effect: "fade",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {
                    slides: t
                } = e, n = e.params.fadeEffect;
                for (let i = 0; i < t.length; i += 1) {
                    const t = e.slides.eq(i);
                    let s = -t[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    let o = 0;
                    e.isHorizontal() || (o = s, s = 0);
                    const r = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    U(n, t).css({
                        opacity: r
                    }).transform(`translate3d(${s}px, ${o}px, 0px)`)
                }
            },
            setTransition: t => {
                const {
                    transformEl: n
                } = e.params.fadeEffect;
                (n ? e.slides.find(n) : e.slides).transition(t), Q({
                    swiper: e,
                    duration: t,
                    transformEl: n,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n
    }) {
        t({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        }), V({
            effect: "cube",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {
                    $el: t,
                    $wrapperEl: n,
                    slides: i,
                    width: s,
                    height: o,
                    rtlTranslate: r,
                    size: a,
                    browser: l
                } = e, d = e.params.cubeEffect, u = e.isHorizontal(), p = e.virtual && e.params.virtual.enabled;
                let h, f = 0;
                d.shadow && (u ? (h = n.find(".swiper-cube-shadow"), 0 === h.length && (h = c('<div class="swiper-cube-shadow"></div>'), n.append(h)), h.css({
                    height: `${s}px`
                })) : (h = t.find(".swiper-cube-shadow"), 0 === h.length && (h = c('<div class="swiper-cube-shadow"></div>'), t.append(h))));
                for (let e = 0; e < i.length; e += 1) {
                    const t = i.eq(e);
                    let n = e;
                    p && (n = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let s = 90 * n,
                        o = Math.floor(s / 360);
                    r && (s = -s, o = Math.floor(-s / 360));
                    const l = Math.max(Math.min(t[0].progress, 1), -1);
                    let h = 0,
                        m = 0,
                        g = 0;
                    n % 4 == 0 ? (h = 4 * -o * a, g = 0) : (n - 1) % 4 == 0 ? (h = 0, g = 4 * -o * a) : (n - 2) % 4 == 0 ? (h = a + 4 * o * a, g = a) : (n - 3) % 4 == 0 && (h = -a, g = 3 * a + 4 * a * o), r && (h = -h), u || (m = h, h = 0);
                    const v = `rotateX(${u?0:-s}deg) rotateY(${u?s:0}deg) translate3d(${h}px, ${m}px, ${g}px)`;
                    if (l <= 1 && l > -1 && (f = 90 * n + 90 * l, r && (f = 90 * -n - 90 * l)), t.transform(v), d.slideShadows) {
                        let e = u ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            n = u ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = c(`<div class="swiper-slide-shadow-${u?"left":"top"}"></div>`), t.append(e)), 0 === n.length && (n = c(`<div class="swiper-slide-shadow-${u?"right":"bottom"}"></div>`), t.append(n)), e.length && (e[0].style.opacity = Math.max(-l, 0)), n.length && (n[0].style.opacity = Math.max(l, 0))
                    }
                }
                if (n.css({
                        "-webkit-transform-origin": `50% 50% -${a/2}px`,
                        "transform-origin": `50% 50% -${a/2}px`
                    }), d.shadow)
                    if (u) h.transform(`translate3d(0px, ${s/2+d.shadowOffset}px, ${-s/2}px) rotateX(90deg) rotateZ(0deg) scale(${d.shadowScale})`);
                    else {
                        const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                            n = d.shadowScale,
                            i = d.shadowScale / t,
                            s = d.shadowOffset;
                        h.transform(`scale3d(${n}, 1, ${i}) translate3d(0px, ${o/2+s}px, ${-o/2/i}px) rotateX(-90deg)`)
                    }
                const m = l.isSafari || l.isWebView ? -a / 2 : 0;
                n.transform(`translate3d(0px,0,${m}px) rotateX(${e.isHorizontal()?0:f}deg) rotateY(${e.isHorizontal()?-f:0}deg)`)
            },
            setTransition: t => {
                const {
                    $el: n,
                    slides: i
                } = e;
                i.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.cubeEffect.shadow && !e.isHorizontal() && n.find(".swiper-cube-shadow").transition(t)
            },
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n
    }) {
        t({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
                transformEl: null
            }
        }), V({
            effect: "flip",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {
                    slides: t,
                    rtlTranslate: n
                } = e, i = e.params.flipEffect;
                for (let s = 0; s < t.length; s += 1) {
                    const o = t.eq(s);
                    let r = o[0].progress;
                    e.params.flipEffect.limitRotation && (r = Math.max(Math.min(o[0].progress, 1), -1));
                    const a = o[0].swiperSlideOffset;
                    let l = -180 * r,
                        c = 0,
                        d = e.params.cssMode ? -a - e.translate : -a,
                        u = 0;
                    if (e.isHorizontal() ? n && (l = -l) : (u = d, d = 0, c = -l, l = 0), o[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, i.slideShadows) {
                        let t = e.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                            n = e.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                        0 === t.length && (t = Z(i, o, e.isHorizontal() ? "left" : "top")), 0 === n.length && (n = Z(i, o, e.isHorizontal() ? "right" : "bottom")), t.length && (t[0].style.opacity = Math.max(-r, 0)), n.length && (n[0].style.opacity = Math.max(r, 0))
                    }
                    const p = `translate3d(${d}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${l}deg)`;
                    U(i, o).transform(p)
                }
            },
            setTransition: t => {
                const {
                    transformEl: n
                } = e.params.flipEffect;
                (n ? e.slides.find(n) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), Q({
                    swiper: e,
                    duration: t,
                    transformEl: n
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n
    }) {
        t({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }), V({
            effect: "coverflow",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {
                    width: t,
                    height: n,
                    slides: i,
                    slidesSizesGrid: s
                } = e, o = e.params.coverflowEffect, r = e.isHorizontal(), a = e.translate, l = r ? t / 2 - a : n / 2 - a, c = r ? o.rotate : -o.rotate, d = o.depth;
                for (let e = 0, t = i.length; e < t; e += 1) {
                    const t = i.eq(e),
                        n = s[e],
                        a = (l - t[0].swiperSlideOffset - n / 2) / n * o.modifier;
                    let u = r ? c * a : 0,
                        p = r ? 0 : c * a,
                        h = -d * Math.abs(a),
                        f = o.stretch;
                    "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(o.stretch) / 100 * n);
                    let m = r ? 0 : f * a,
                        g = r ? f * a : 0,
                        v = 1 - (1 - o.scale) * Math.abs(a);
                    Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(h) < .001 && (h = 0), Math.abs(u) < .001 && (u = 0), Math.abs(p) < .001 && (p = 0), Math.abs(v) < .001 && (v = 0);
                    const y = `translate3d(${g}px,${m}px,${h}px)  rotateX(${p}deg) rotateY(${u}deg) scale(${v})`;
                    if (U(o, t).transform(y), t[0].style.zIndex = 1 - Math.abs(Math.round(a)), o.slideShadows) {
                        let e = r ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            n = r ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = Z(o, t, r ? "left" : "top")), 0 === n.length && (n = Z(o, t, r ? "right" : "bottom")), e.length && (e[0].style.opacity = a > 0 ? a : 0), n.length && (n[0].style.opacity = -a > 0 ? -a : 0)
                    }
                }
            },
            setTransition: t => {
                const {
                    transformEl: n
                } = e.params.coverflowEffect;
                (n ? e.slides.find(n) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0
            })
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n
    }) {
        t({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const i = e => "string" == typeof e ? e : `${e}px`;
        V({
            effect: "creative",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {
                    slides: t,
                    $wrapperEl: n,
                    slidesSizesGrid: s
                } = e, o = e.params.creativeEffect, {
                    progressMultiplier: r
                } = o, a = e.params.centeredSlides;
                if (a) {
                    const t = s[0] / 2 - e.params.slidesOffsetBefore || 0;
                    n.transform(`translateX(calc(50% - ${t}px))`)
                }
                for (let n = 0; n < t.length; n += 1) {
                    const s = t.eq(n),
                        l = s[0].progress,
                        c = Math.min(Math.max(s[0].progress, -o.limitProgress), o.limitProgress);
                    let d = c;
                    a || (d = Math.min(Math.max(s[0].originalProgress, -o.limitProgress), o.limitProgress));
                    const u = s[0].swiperSlideOffset,
                        p = [e.params.cssMode ? -u - e.translate : -u, 0, 0],
                        h = [0, 0, 0];
                    let f = !1;
                    e.isHorizontal() || (p[1] = p[0], p[0] = 0);
                    let m = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    c < 0 ? (m = o.next, f = !0) : c > 0 && (m = o.prev, f = !0), p.forEach(((e, t) => {
                        p[t] = `calc(${e}px + (${i(m.translate[t])} * ${Math.abs(c*r)}))`
                    })), h.forEach(((e, t) => {
                        h[t] = m.rotate[t] * Math.abs(c * r)
                    })), s[0].style.zIndex = -Math.abs(Math.round(l)) + t.length;
                    const g = p.join(", "),
                        v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                        y = d < 0 ? `scale(${1+(1-m.scale)*d*r})` : `scale(${1-(1-m.scale)*d*r})`,
                        b = d < 0 ? 1 + (1 - m.opacity) * d * r : 1 - (1 - m.opacity) * d * r,
                        w = `translate3d(${g}) ${v} ${y}`;
                    if (f && m.shadow || !f) {
                        let e = s.children(".swiper-slide-shadow");
                        if (0 === e.length && m.shadow && (e = Z(o, s)), e.length) {
                            const t = o.shadowPerProgress ? c * (1 / o.limitProgress) : c;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const x = U(o, s);
                    x.transform(w).css({
                        opacity: b
                    }), m.origin && x.css("transform-origin", m.origin)
                }
            },
            setTransition: t => {
                const {
                    transformEl: n
                } = e.params.creativeEffect;
                (n ? e.slides.find(n) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), Q({
                    swiper: e,
                    duration: t,
                    transformEl: n,
                    allSlides: !0
                })
            },
            perspective: () => e.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: n
    }) {
        t({
            cardsEffect: {
                slideShadows: !0,
                transformEl: null
            }
        }), V({
            effect: "cards",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {
                    slides: t,
                    activeIndex: n
                } = e, i = e.params.cardsEffect, {
                    startTranslate: s,
                    isTouched: o
                } = e.touchEventsData, r = e.translate;
                for (let a = 0; a < t.length; a += 1) {
                    const l = t.eq(a),
                        c = l[0].progress,
                        d = Math.min(Math.max(c, -4), 4);
                    let u = l[0].swiperSlideOffset;
                    e.params.centeredSlides && !e.params.cssMode && e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (u -= t[0].swiperSlideOffset);
                    let p = e.params.cssMode ? -u - e.translate : -u,
                        h = 0;
                    const f = -100 * Math.abs(d);
                    let m = 1,
                        g = -2 * d,
                        v = 8 - .75 * Math.abs(d);
                    const y = (a === n || a === n - 1) && d > 0 && d < 1 && (o || e.params.cssMode) && r < s,
                        b = (a === n || a === n + 1) && d < 0 && d > -1 && (o || e.params.cssMode) && r > s;
                    if (y || b) {
                        const e = (1 - Math.abs((Math.abs(d) - .5) / .5)) ** .5;
                        g += -28 * d * e, m += -.5 * e, v += 96 * e, h = -25 * e * Math.abs(d) + "%"
                    }
                    if (p = d < 0 ? `calc(${p}px + (${v*Math.abs(d)}%))` : d > 0 ? `calc(${p}px + (-${v*Math.abs(d)}%))` : `${p}px`, !e.isHorizontal()) {
                        const e = h;
                        h = p, p = e
                    }
                    const w = `\n        translate3d(${p}, ${h}, ${f}px)\n        rotateZ(${g}deg)\n        scale(${d<0?""+(1+(1-m)*d):""+(1-(1-m)*d)})\n      `;
                    if (i.slideShadows) {
                        let e = l.find(".swiper-slide-shadow");
                        0 === e.length && (e = Z(i, l)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(d) - .5) / .5, 0), 1))
                    }
                    l[0].style.zIndex = -Math.abs(Math.round(c)) + t.length, U(i, l).transform(w)
                }
            },
            setTransition: t => {
                const {
                    transformEl: n
                } = e.params.cardsEffect;
                (n ? e.slides.find(n) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), Q({
                    swiper: e,
                    duration: t,
                    transformEl: n
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }];
    return N.use(K), N
}));