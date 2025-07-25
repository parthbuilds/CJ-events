!function (t, n) { "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).barba = n() }(this, (function () { function t(t, n) { for (var r = 0; r < n.length; r++) { var e = n[r]; e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e) } } function n(n, r, e) { return r && t(n.prototype, r), e && t(n, e), n } function r() { return (r = Object.assign || function (t) { for (var n = 1; n < arguments.length; n++) { var r = arguments[n]; for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]) } return t }).apply(this, arguments) } function e(t, n) { t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n } function i(t) { return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function o(t, n) { return (o = Object.setPrototypeOf || function (t, n) { return t.__proto__ = n, t })(t, n) } function u(t, n, r) { return (u = function () { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0 } catch (t) { return !1 } }() ? Reflect.construct : function (t, n, r) { var e = [null]; e.push.apply(e, n); var i = new (Function.bind.apply(t, e)); return r && o(i, r.prototype), i }).apply(null, arguments) } function f(t) { var n = "function" == typeof Map ? new Map : void 0; return (f = function (t) { if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== n) { if (n.has(t)) return n.get(t); n.set(t, r) } function r() { return u(t, arguments, i(this).constructor) } return r.prototype = Object.create(t.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), o(r, t) })(t) } function s(t, n) { try { var r = t() } catch (t) { return n(t) } return r && r.then ? r.then(void 0, n) : r } "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))); var c, a = "2.9.7", h = function () { }; !function (t) { t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug" }(c || (c = {})); var v = c.off, l = function () { function t(t) { this.t = t } t.getLevel = function () { return v }, t.setLevel = function (t) { return v = c[t] }; var n = t.prototype; return n.error = function () { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r]; this.i(console.error, c.error, n) }, n.warn = function () { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r]; this.i(console.warn, c.warning, n) }, n.info = function () { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r]; this.i(console.info, c.info, n) }, n.debug = function () { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r]; this.i(console.log, c.debug, n) }, n.i = function (n, r, e) { r <= t.getLevel() && n.apply(console, ["[" + this.t + "] "].concat(e)) }, t }(), d = O, m = E, p = g, w = x, b = T, y = "/", P = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g"); function g(t, n) { for (var r, e = [], i = 0, o = 0, u = "", f = n && n.delimiter || y, s = n && n.whitelist || void 0, c = !1; null !== (r = P.exec(t));) { var a = r[0], h = r[1], v = r.index; if (u += t.slice(o, v), o = v + a.length, h) u += h[1], c = !0; else { var l = "", d = r[2], m = r[3], p = r[4], w = r[5]; if (!c && u.length) { var b = u.length - 1, g = u[b]; (!s || s.indexOf(g) > -1) && (l = g, u = u.slice(0, b)) } u && (e.push(u), u = "", c = !1); var E = m || p, x = l || f; e.push({ name: d || i++, prefix: l, delimiter: x, optional: "?" === w || "*" === w, repeat: "+" === w || "*" === w, pattern: E ? A(E) : "[^" + k(x === f ? x : x + f) + "]+?" }) } } return (u || o < t.length) && e.push(u + t.substr(o)), e } function E(t, n) { return function (r, e) { var i = t.exec(r); if (!i) return !1; for (var o = i[0], u = i.index, f = {}, s = e && e.decode || decodeURIComponent, c = 1; c < i.length; c++)if (void 0 !== i[c]) { var a = n[c - 1]; f[a.name] = a.repeat ? i[c].split(a.delimiter).map((function (t) { return s(t, a) })) : s(i[c], a) } return { path: o, index: u, params: f } } } function x(t, n) { for (var r = new Array(t.length), e = 0; e < t.length; e++)"object" == typeof t[e] && (r[e] = new RegExp("^(?:" + t[e].pattern + ")$", R(n))); return function (n, e) { for (var i = "", o = e && e.encode || encodeURIComponent, u = !e || !1 !== e.validate, f = 0; f < t.length; f++) { var s = t[f]; if ("string" != typeof s) { var c, a = n ? n[s.name] : void 0; if (Array.isArray(a)) { if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but got array'); if (0 === a.length) { if (s.optional) continue; throw new TypeError('Expected "' + s.name + '" to not be empty') } for (var h = 0; h < a.length; h++) { if (c = o(a[h], s), u && !r[f].test(c)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '"'); i += (0 === h ? s.prefix : s.delimiter) + c } } else if ("string" != typeof a && "number" != typeof a && "boolean" != typeof a) { if (!s.optional) throw new TypeError('Expected "' + s.name + '" to be ' + (s.repeat ? "an array" : "a string")) } else { if (c = o(String(a), s), u && !r[f].test(c)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but got "' + c + '"'); i += s.prefix + c } } else i += s } return i } } function k(t) { return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1") } function A(t) { return t.replace(/([=!:$/()])/g, "\\$1") } function R(t) { return t && t.sensitive ? "" : "i" } function T(t, n, r) { for (var e = (r = r || {}).strict, i = !1 !== r.start, o = !1 !== r.end, u = r.delimiter || y, f = [].concat(r.endsWith || []).map(k).concat("$").join("|"), s = i ? "^" : "", c = 0; c < t.length; c++) { var a = t[c]; if ("string" == typeof a) s += k(a); else { var h = a.repeat ? "(?:" + a.pattern + ")(?:" + k(a.delimiter) + "(?:" + a.pattern + "))*" : a.pattern; n && n.push(a), s += a.optional ? a.prefix ? "(?:" + k(a.prefix) + "(" + h + "))?" : "(" + h + ")?" : k(a.prefix) + "(" + h + ")" } } if (o) e || (s += "(?:" + k(u) + ")?"), s += "$" === f ? "$" : "(?=" + f + ")"; else { var v = t[t.length - 1], l = "string" == typeof v ? v[v.length - 1] === u : void 0 === v; e || (s += "(?:" + k(u) + "(?=" + f + "))?"), l || (s += "(?=" + k(u) + "|" + f + ")") } return new RegExp(s, R(r)) } function O(t, n, r) { return t instanceof RegExp ? function (t, n) { if (!n) return t; var r = t.source.match(/\((?!\?)/g); if (r) for (var e = 0; e < r.length; e++)n.push({ name: e, prefix: null, delimiter: null, optional: !1, repeat: !1, pattern: null }); return t }(t, n) : Array.isArray(t) ? function (t, n, r) { for (var e = [], i = 0; i < t.length; i++)e.push(O(t[i], n, r).source); return new RegExp("(?:" + e.join("|") + ")", R(r)) }(t, n, r) : function (t, n, r) { return T(g(t, r), n, r) }(t, n, r) } d.match = function (t, n) { var r = []; return E(O(t, r, n), r) }, d.regexpToFunction = m, d.parse = p, d.compile = function (t, n) { return x(g(t, n), n) }, d.tokensToFunction = w, d.tokensToRegExp = b; var S = { container: "container", history: "history", namespace: "namespace", prefix: "data-barba", prevent: "prevent", wrapper: "wrapper" }, j = new (function () { function t() { this.o = S, this.u = new DOMParser } var n = t.prototype; return n.toString = function (t) { return t.outerHTML }, n.toDocument = function (t) { return this.u.parseFromString(t, "text/html") }, n.toElement = function (t) { var n = document.createElement("div"); return n.innerHTML = t, n }, n.getHtml = function (t) { return void 0 === t && (t = document), this.toString(t.documentElement) }, n.getWrapper = function (t) { return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]') }, n.getContainer = function (t) { return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]') }, n.removeContainer = function (t) { document.body.contains(t) && t.parentNode.removeChild(t) }, n.addContainer = function (t, n) { var r = this.getContainer(); r ? this.s(t, r) : n.appendChild(t) }, n.getNamespace = function (t) { void 0 === t && (t = document); var n = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]"); return n ? n.getAttribute(this.o.prefix + "-" + this.o.namespace) : null }, n.getHref = function (t) { if (t.tagName && "a" === t.tagName.toLowerCase()) { if ("string" == typeof t.href) return t.href; var n = t.getAttribute("href") || t.getAttribute("xlink:href"); if (n) return this.resolveUrl(n.baseVal || n) } return null }, n.resolveUrl = function () { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r]; var e = n.length; if (0 === e) throw new Error("resolveUrl requires at least one argument; got none."); var i = document.createElement("base"); if (i.href = arguments[0], 1 === e) return i.href; var o = document.getElementsByTagName("head")[0]; o.insertBefore(i, o.firstChild); for (var u, f = document.createElement("a"), s = 1; s < e; s++)f.href = arguments[s], i.href = u = f.href; return o.removeChild(i), u }, n.s = function (t, n) { n.parentNode.insertBefore(t, n.nextSibling) }, t }()), M = new (function () { function t() { this.h = [], this.v = -1 } var e = t.prototype; return e.init = function (t, n) { this.l = "barba"; var r = { ns: n, scroll: { x: window.scrollX, y: window.scrollY }, url: t }; this.h.push(r), this.v = 0; var e = { from: this.l, index: 0, states: [].concat(this.h) }; window.history && window.history.replaceState(e, "", t) }, e.change = function (t, n, r) { if (r && r.state) { var e = r.state, i = e.index; n = this.m(this.v - i), this.replace(e.states), this.v = i } else this.add(t, n); return n }, e.add = function (t, n) { var r = this.size, e = this.p(n), i = { ns: "tmp", scroll: { x: window.scrollX, y: window.scrollY }, url: t }; this.h.push(i), this.v = r; var o = { from: this.l, index: r, states: [].concat(this.h) }; switch (e) { case "push": window.history && window.history.pushState(o, "", t); break; case "replace": window.history && window.history.replaceState(o, "", t) } }, e.update = function (t, n) { var e = n || this.v, i = r({}, this.get(e), {}, t); this.set(e, i) }, e.remove = function (t) { t ? this.h.splice(t, 1) : this.h.pop(), this.v-- }, e.clear = function () { this.h = [], this.v = -1 }, e.replace = function (t) { this.h = t }, e.get = function (t) { return this.h[t] }, e.set = function (t, n) { return this.h[t] = n }, e.p = function (t) { var n = "push", r = t, e = S.prefix + "-" + S.history; return r.hasAttribute && r.hasAttribute(e) && (n = r.getAttribute(e)), n }, e.m = function (t) { return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward" }, n(t, [{ key: "current", get: function () { return this.h[this.v] } }, { key: "state", get: function () { return this.h[this.h.length - 1] } }, { key: "previous", get: function () { return this.v < 1 ? null : this.h[this.v - 1] } }, { key: "size", get: function () { return this.h.length } }]), t }()), L = function (t, n) { try { var r = function () { if (!n.next.html) return Promise.resolve(t).then((function (t) { var r = n.next; if (t) { var e = j.toElement(t); r.namespace = j.getNamespace(e), r.container = j.getContainer(e), r.html = t, M.update({ ns: r.namespace }); var i = j.toDocument(t); document.title = i.title } })) }(); return Promise.resolve(r && r.then ? r.then((function () { })) : void 0) } catch (t) { return Promise.reject(t) } }, $ = d, _ = { __proto__: null, update: L, nextTick: function () { return new Promise((function (t) { window.requestAnimationFrame(t) })) }, pathToRegexp: $ }, q = function () { return window.location.origin }, B = function (t) { return void 0 === t && (t = window.location.href), U(t).port }, U = function (t) { var n, r = t.match(/:\d+/); if (null === r) /^http/.test(t) && (n = 80), /^https/.test(t) && (n = 443); else { var e = r[0].substring(1); n = parseInt(e, 10) } var i, o = t.replace(q(), ""), u = {}, f = o.indexOf("#"); f >= 0 && (i = o.slice(f + 1), o = o.slice(0, f)); var s = o.indexOf("?"); return s >= 0 && (u = D(o.slice(s + 1)), o = o.slice(0, s)), { hash: i, path: o, port: n, query: u } }, D = function (t) { return t.split("&").reduce((function (t, n) { var r = n.split("="); return t[r[0]] = r[1], t }), {}) }, F = function (t) { return void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, "") }, H = { __proto__: null, getHref: function () { return window.location.href }, getOrigin: q, getPort: B, getPath: function (t) { return void 0 === t && (t = window.location.href), U(t).path }, parse: U, parseQuery: D, clean: F }; function I(t, n, r) { return void 0 === n && (n = 2e3), new Promise((function (e, i) { var o = new XMLHttpRequest; o.onreadystatechange = function () { if (o.readyState === XMLHttpRequest.DONE) if (200 === o.status) e(o.responseText); else if (o.status) { var n = { status: o.status, statusText: o.statusText }; r(t, n), i(n) } }, o.ontimeout = function () { var e = new Error("Timeout error [" + n + "]"); r(t, e), i(e) }, o.onerror = function () { var n = new Error("Fetch error"); r(t, n), i(n) }, o.open("GET", t), o.timeout = n, o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o.setRequestHeader("x-barba", "yes"), o.send() })) } var C = function (t) { return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then }; function N(t, n) { return void 0 === n && (n = {}), function () { for (var r = arguments.length, e = new Array(r), i = 0; i < r; i++)e[i] = arguments[i]; var o = !1, u = new Promise((function (r, i) { n.async = function () { return o = !0, function (t, n) { t ? i(t) : r(n) } }; var u = t.apply(n, e); o || (C(u) ? u.then(r, i) : r(u)) })); return u } } var X = new (function (t) { function n() { var n; return (n = t.call(this) || this).logger = new l("@barba/core"), n.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], n.registered = new Map, n.init(), n } e(n, t); var r = n.prototype; return r.init = function () { var t = this; this.registered.clear(), this.all.forEach((function (n) { t[n] || (t[n] = function (r, e) { t.registered.has(n) || t.registered.set(n, new Set), t.registered.get(n).add({ ctx: e || {}, fn: r }) }) })) }, r.do = function (t) { for (var n = this, r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)e[i - 1] = arguments[i]; if (this.registered.has(t)) { var o = Promise.resolve(); return this.registered.get(t).forEach((function (t) { o = o.then((function () { return N(t.fn, t.ctx).apply(void 0, e) })) })), o.catch((function (r) { n.logger.debug("Hook error [" + t + "]"), n.logger.error(r) })) } return Promise.resolve() }, r.clear = function () { var t = this; this.all.forEach((function (n) { delete t[n] })), this.init() }, r.help = function () { this.logger.info("Available hooks: " + this.all.join(",")); var t = []; this.registered.forEach((function (n, r) { return t.push(r) })), this.logger.info("Registered hooks: " + t.join(",")) }, n }(h)), z = function () { function t(t) { if (this.P = [], "boolean" == typeof t) this.g = t; else { var n = Array.isArray(t) ? t : [t]; this.P = n.map((function (t) { return $(t) })) } } return t.prototype.checkHref = function (t) { if ("boolean" == typeof this.g) return this.g; var n = U(t).path; return this.P.some((function (t) { return null !== t.exec(n) })) }, t }(), G = function (t) { function n(n) { var r; return (r = t.call(this, n) || this).k = new Map, r } e(n, t); var i = n.prototype; return i.set = function (t, n, r) { return this.k.set(t, { action: r, request: n }), { action: r, request: n } }, i.get = function (t) { return this.k.get(t) }, i.getRequest = function (t) { return this.k.get(t).request }, i.getAction = function (t) { return this.k.get(t).action }, i.has = function (t) { return !this.checkHref(t) && this.k.has(t) }, i.delete = function (t) { return this.k.delete(t) }, i.update = function (t, n) { var e = r({}, this.k.get(t), {}, n); return this.k.set(t, e), e }, n }(z), Q = function () { return !window.history.pushState }, W = function (t) { return !t.el || !t.href }, J = function (t) { var n = t.event; return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey }, K = function (t) { var n = t.el; return n.hasAttribute("target") && "_blank" === n.target }, V = function (t) { var n = t.el; return void 0 !== n.protocol && window.location.protocol !== n.protocol || void 0 !== n.hostname && window.location.hostname !== n.hostname }, Y = function (t) { var n = t.el; return void 0 !== n.port && B() !== B(n.href) }, Z = function (t) { var n = t.el; return n.getAttribute && "string" == typeof n.getAttribute("download") }, tt = function (t) { return t.el.hasAttribute(S.prefix + "-" + S.prevent) }, nt = function (t) { return Boolean(t.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]')) }, rt = function (t) { var n = t.href; return F(n) === F() && B(n) === B() }, et = function (t) { function n(n) { var r; return (r = t.call(this, n) || this).suite = [], r.tests = new Map, r.init(), r } e(n, t); var r = n.prototype; return r.init = function () { this.add("pushState", Q), this.add("exists", W), this.add("newTab", J), this.add("blank", K), this.add("corsDomain", V), this.add("corsPort", Y), this.add("download", Z), this.add("preventSelf", tt), this.add("preventAll", nt), this.add("sameUrl", rt, !1) }, r.add = function (t, n, r) { void 0 === r && (r = !0), this.tests.set(t, n), r && this.suite.push(t) }, r.run = function (t, n, r, e) { return this.tests.get(t)({ el: n, event: r, href: e }) }, r.checkLink = function (t, n, r) { var e = this; return this.suite.some((function (i) { return e.run(i, t, n, r) })) }, n }(z), it = function (t) { function n(r, e) { var i; void 0 === e && (e = "Barba error"); for (var o = arguments.length, u = new Array(o > 2 ? o - 2 : 0), f = 2; f < o; f++)u[f - 2] = arguments[f]; return (i = t.call.apply(t, [this].concat(u)) || this).error = r, i.label = e, Error.captureStackTrace && Error.captureStackTrace(function (t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(i), n), i.name = "BarbaError", i } return e(n, t), n }(f(Error)), ot = function () { function t(t) { void 0 === t && (t = []), this.logger = new l("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{ name: "namespace", type: "strings" }, { name: "custom", type: "function" }], t && (this.all = this.all.concat(t)), this.update() } var n = t.prototype; return n.add = function (t, n) { switch (t) { case "rule": this.A.splice(n.position || 0, 0, n.value); break; case "transition": default: this.all.push(n) }this.update() }, n.resolve = function (t, n) { var r = this; void 0 === n && (n = {}); var e = n.once ? this.once : this.page; e = e.filter(n.self ? function (t) { return t.name && "self" === t.name } : function (t) { return !t.name || "self" !== t.name }); var i = new Map, o = e.find((function (e) { var o = !0, u = {}; return !(!n.self || "self" !== e.name) || (r.A.reverse().forEach((function (n) { o && (o = r.R(e, n, t, u), e.from && e.to && (o = r.R(e, n, t, u, "from") && r.R(e, n, t, u, "to")), e.from && !e.to && (o = r.R(e, n, t, u, "from")), !e.from && e.to && (o = r.R(e, n, t, u, "to"))) })), i.set(e, u), o) })), u = i.get(o), f = []; if (f.push(n.once ? "once" : "page"), n.self && f.push("self"), u) { var s, c = [o]; Object.keys(u).length > 0 && c.push(u), (s = this.logger).info.apply(s, ["Transition found [" + f.join(",") + "]"].concat(c)) } else this.logger.info("No transition found [" + f.join(",") + "]"); return o }, n.update = function () { var t = this; this.all = this.all.map((function (n) { return t.T(n) })).sort((function (t, n) { return t.priority - n.priority })).reverse().map((function (t) { return delete t.priority, t })), this.page = this.all.filter((function (t) { return void 0 !== t.leave || void 0 !== t.enter })), this.once = this.all.filter((function (t) { return void 0 !== t.once })) }, n.R = function (t, n, r, e, i) { var o = !0, u = !1, f = t, s = n.name, c = s, a = s, h = s, v = i ? f[i] : f, l = "to" === i ? r.next : r.current; if (i ? v && v[s] : v[s]) { switch (n.type) { case "strings": default: var d = Array.isArray(v[c]) ? v[c] : [v[c]]; l[c] && -1 !== d.indexOf(l[c]) && (u = !0), -1 === d.indexOf(l[c]) && (o = !1); break; case "object": var m = Array.isArray(v[a]) ? v[a] : [v[a]]; l[a] ? (l[a].name && -1 !== m.indexOf(l[a].name) && (u = !0), -1 === m.indexOf(l[a].name) && (o = !1)) : o = !1; break; case "function": v[h](r) ? u = !0 : o = !1 }u && (i ? (e[i] = e[i] || {}, e[i][s] = f[i][s]) : e[s] = f[s]) } return o }, n.O = function (t, n, r) { var e = 0; return (t[n] || t.from && t.from[n] || t.to && t.to[n]) && (e += Math.pow(10, r), t.from && t.from[n] && (e += 1), t.to && t.to[n] && (e += 2)), e }, n.T = function (t) { var n = this; t.priority = 0; var r = 0; return this.A.forEach((function (e, i) { r += n.O(t, e.name, i + 1) })), t.priority = r, t }, t }(), ut = function () { function t(t) { void 0 === t && (t = []), this.logger = new l("@barba/core"), this.S = !1, this.store = new ot(t) } var r = t.prototype; return r.get = function (t, n) { return this.store.resolve(t, n) }, r.doOnce = function (t) { var n = t.data, r = t.transition; try { var e = function () { i.S = !1 }, i = this, o = r || {}; i.S = !0; var u = s((function () { return Promise.resolve(i.j("beforeOnce", n, o)).then((function () { return Promise.resolve(i.once(n, o)).then((function () { return Promise.resolve(i.j("afterOnce", n, o)).then((function () { })) })) })) }), (function (t) { i.S = !1, i.logger.debug("Transition error [before/after/once]"), i.logger.error(t) })); return Promise.resolve(u && u.then ? u.then(e) : e()) } catch (t) { return Promise.reject(t) } }, r.doPage = function (t) { var n = t.data, r = t.transition, e = t.page, i = t.wrapper; try { var o = function (t) { if (u) return t; f.S = !1 }, u = !1, f = this, c = r || {}, a = !0 === c.sync || !1; f.S = !0; var h = s((function () { function t() { return Promise.resolve(f.j("before", n, c)).then((function () { var t = !1; function r(r) { return t ? r : Promise.resolve(f.remove(n)).then((function () { return Promise.resolve(f.j("after", n, c)).then((function () { })) })) } var o = function () { if (a) return s((function () { return Promise.resolve(f.add(n, i)).then((function () { return Promise.resolve(f.j("beforeLeave", n, c)).then((function () { return Promise.resolve(f.j("beforeEnter", n, c)).then((function () { return Promise.resolve(Promise.all([f.leave(n, c), f.enter(n, c)])).then((function () { return Promise.resolve(f.j("afterLeave", n, c)).then((function () { return Promise.resolve(f.j("afterEnter", n, c)).then((function () { })) })) })) })) })) })) }), (function (t) { if (f.M(t)) throw new it(t, "Transition error [sync]") })); var r = function (r) { return t ? r : s((function () { var t = function () { if (!1 !== o) return Promise.resolve(f.add(n, i)).then((function () { return Promise.resolve(f.j("beforeEnter", n, c)).then((function () { return Promise.resolve(f.enter(n, c, o)).then((function () { return Promise.resolve(f.j("afterEnter", n, c)).then((function () { })) })) })) })) }(); if (t && t.then) return t.then((function () { })) }), (function (t) { if (f.M(t)) throw new it(t, "Transition error [before/after/enter]") })) }, o = !1, u = s((function () { return Promise.resolve(f.j("beforeLeave", n, c)).then((function () { return Promise.resolve(Promise.all([f.leave(n, c), L(e, n)]).then((function (t) { return t[0] }))).then((function (t) { return o = t, Promise.resolve(f.j("afterLeave", n, c)).then((function () { })) })) })) }), (function (t) { if (f.M(t)) throw new it(t, "Transition error [before/after/leave]") })); return u && u.then ? u.then(r) : r(u) }(); return o && o.then ? o.then(r) : r(o) })) } var r = function () { if (a) return Promise.resolve(L(e, n)).then((function () { })) }(); return r && r.then ? r.then(t) : t() }), (function (t) { if (f.S = !1, t.name && "BarbaError" === t.name) throw f.logger.debug(t.label), f.logger.error(t.error), t; throw f.logger.debug("Transition error [page]"), f.logger.error(t), t })); return Promise.resolve(h && h.then ? h.then(o) : o(h)) } catch (t) { return Promise.reject(t) } }, r.once = function (t, n) { try { return Promise.resolve(X.do("once", t, n)).then((function () { return n.once ? N(n.once, n)(t) : Promise.resolve() })) } catch (t) { return Promise.reject(t) } }, r.leave = function (t, n) { try { return Promise.resolve(X.do("leave", t, n)).then((function () { return n.leave ? N(n.leave, n)(t) : Promise.resolve() })) } catch (t) { return Promise.reject(t) } }, r.enter = function (t, n, r) { try { return Promise.resolve(X.do("enter", t, n)).then((function () { return n.enter ? N(n.enter, n)(t, r) : Promise.resolve() })) } catch (t) { return Promise.reject(t) } }, r.add = function (t, n) { try { return j.addContainer(t.next.container, n), X.do("nextAdded", t), Promise.resolve() } catch (t) { return Promise.reject(t) } }, r.remove = function (t) { try { return j.removeContainer(t.current.container), X.do("currentRemoved", t), Promise.resolve() } catch (t) { return Promise.reject(t) } }, r.M = function (t) { return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status }, r.j = function (t, n, r) { try { return Promise.resolve(X.do(t, n, r)).then((function () { return r[t] ? N(r[t], r)(n) : Promise.resolve() })) } catch (t) { return Promise.reject(t) } }, n(t, [{ key: "isRunning", get: function () { return this.S }, set: function (t) { this.S = t } }, { key: "hasOnce", get: function () { return this.store.once.length > 0 } }, { key: "hasSelf", get: function () { return this.store.all.some((function (t) { return "self" === t.name })) } }, { key: "shouldWait", get: function () { return this.store.all.some((function (t) { return t.to && !t.to.route || t.sync })) } }]), t }(), ft = function () { function t(t) { var n = this; this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, 0 !== t.length && (t.forEach((function (t) { n.byNamespace.set(t.namespace, t) })), this.names.forEach((function (t) { X[t](n.L(t)) }))) } return t.prototype.L = function (t) { var n = this; return function (r) { var e = t.match(/enter/i) ? r.next : r.current, i = n.byNamespace.get(e.namespace); return i && i[t] ? N(i[t], i)(r) : Promise.resolve() } }, t }(); Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (t) { var n = this; do { if (n.matches(t)) return n; n = n.parentElement || n.parentNode } while (null !== n && 1 === n.nodeType); return null }); var st = { container: null, html: "", namespace: "", url: { hash: "", href: "", path: "", port: null, query: {} } }; return new (function () { function t() { this.version = a, this.schemaPage = st, this.Logger = l, this.logger = new l("@barba/core"), this.plugins = [], this.hooks = X, this.dom = j, this.helpers = _, this.history = M, this.request = I, this.url = H } var e = t.prototype; return e.use = function (t, n) { var r = this.plugins; r.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, n), r.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.') }, e.init = function (t) { var n = void 0 === t ? {} : t, e = n.transitions, i = void 0 === e ? [] : e, o = n.views, u = void 0 === o ? [] : o, f = n.schema, s = void 0 === f ? S : f, c = n.requestError, a = n.timeout, h = void 0 === a ? 2e3 : a, v = n.cacheIgnore, d = void 0 !== v && v, m = n.prefetchIgnore, p = void 0 !== m && m, w = n.preventRunning, b = void 0 !== w && w, y = n.prevent, P = void 0 === y ? null : y, g = n.debug, E = n.logLevel; if (l.setLevel(!0 === (void 0 !== g && g) ? "debug" : void 0 === E ? "off" : E), this.logger.info(this.version), Object.keys(s).forEach((function (t) { S[t] && (S[t] = s[t]) })), this.$ = c, this.timeout = h, this.cacheIgnore = d, this.prefetchIgnore = p, this.preventRunning = b, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found"); this._.setAttribute("aria-live", "polite"), this.q(); var x = this.data.current; if (!x.container) throw new Error("[@barba/core] No Barba container found"); if (this.cache = new G(d), this.prevent = new et(p), this.transitions = new ut(i), this.views = new ft(u), null !== P) { if ("function" != typeof P) throw new Error("[@barba/core] Prevent should be a function"); this.prevent.add("preventCustom", P) } this.history.init(x.url.href, x.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach((function (t) { return t.init() })); var k = this.data; k.trigger = "barba", k.next = k.current, k.current = r({}, this.schemaPage), this.hooks.do("ready", k), this.once(k), this.q() }, e.destroy = function () { this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = [] }, e.force = function (t) { window.location.assign(t) }, e.go = function (t, n, r) { var e; if (void 0 === n && (n = "barba"), this.transitions.isRunning) this.force(t); else if (!(e = "popstate" === n ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return n = this.history.change(t, n, r), r && (r.stopPropagation(), r.preventDefault()), this.page(t, n, e) }, e.once = function (t) { try { var n = this; return Promise.resolve(n.hooks.do("beforeEnter", t)).then((function () { function r() { return Promise.resolve(n.hooks.do("afterEnter", t)).then((function () { })) } var e = function () { if (n.transitions.hasOnce) { var r = n.transitions.get(t, { once: !0 }); return Promise.resolve(n.transitions.doOnce({ transition: r, data: t })).then((function () { })) } }(); return e && e.then ? e.then(r) : r() })) } catch (t) { return Promise.reject(t) } }, e.page = function (t, n, e) { try { var i = function () { var t = o.data; return Promise.resolve(o.hooks.do("page", t)).then((function () { var n = s((function () { var n = o.transitions.get(t, { once: !1, self: e }); return Promise.resolve(o.transitions.doPage({ data: t, page: u, transition: n, wrapper: o._ })).then((function () { o.q() })) }), (function () { 0 === l.getLevel() && o.force(t.current.url.href) })); if (n && n.then) return n.then((function () { })) })) }, o = this; o.data.next.url = r({ href: t }, o.url.parse(t)), o.data.trigger = n; var u = o.cache.has(t) ? o.cache.update(t, { action: "click" }).request : o.cache.set(t, o.request(t, o.timeout, o.onRequestError.bind(o, n)), "click").request, f = function () { if (o.transitions.shouldWait) return Promise.resolve(L(u, o.data)).then((function () { })) }(); return Promise.resolve(f && f.then ? f.then(i) : i()) } catch (t) { return Promise.reject(t) } }, e.onRequestError = function (t) { this.transitions.isRunning = !1; for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++)r[e - 1] = arguments[e]; var i = r[0], o = r[1], u = this.cache.getAction(i); return this.cache.delete(i), !(this.$ && !1 === this.$(t, u, i, o) || ("click" === u && this.force(i), 1)) }, e.prefetch = function (t) { var n = this; this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch((function (t) { n.logger.error(t) })), "prefetch") }, e.F = function () { !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D) }, e.H = function () { !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D) }, e.B = function (t) { var n = this, r = this.I(t); if (r) { var e = this.dom.getHref(r); this.prevent.checkHref(e) || this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, r)).catch((function (t) { n.logger.error(t) })), "enter") } }, e.U = function (t) { var n = this.I(t); if (n) return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(), void t.stopPropagation()) : void this.go(this.dom.getHref(n), n, t) }, e.D = function (t) { this.go(this.url.getHref(), "popstate", t) }, e.I = function (t) { for (var n = t.target; n && !this.dom.getHref(n);)n = n.parentNode; if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n))) return n }, e.q = function () { var t = this.url.getHref(), n = { container: this.dom.getContainer(), html: this.dom.getHtml(), namespace: this.dom.getNamespace(), url: r({ href: t }, this.url.parse(t)) }; this.C = { current: n, next: r({}, this.schemaPage), trigger: void 0 }, this.hooks.do("reset", this.data) }, n(t, [{ key: "data", get: function () { return this.C } }, { key: "wrapper", get: function () { return this._ } }]), t }()) }));

!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

!function(e,n,t){function o(e,n){return typeof e===n}function A(){var e,n,t,A,a,i,s;for(var r in u)if(u.hasOwnProperty(r)){if(e=[],n=u[r],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(A=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=A:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=A),f.push((A?"":"no-")+s.join("-"))}}function a(e){var n=d.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?d.className.baseVal=n:d.className=n)}function i(e,n){if("object"==typeof e)for(var t in e)m(e,t)&&i(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),A=Modernizr[o[0]];if(2==o.length&&(A=A[o[1]]),"undefined"!=typeof A)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=s(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,A){var a,i,l,f,u="modernizr",c=s("div"),p=r();if(parseInt(o,10))for(;o--;)l=s("div"),l.id=A?A[o]:u+(o+1),c.appendChild(l);return a=s("style"),a.type="text/css",a.id="s"+u,(p.fake?p:c).appendChild(a),p.appendChild(c),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),c.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",f=d.style.overflow,d.style.overflow="hidden",d.appendChild(p)),i=t(c,e),p.fake?(p.parentNode.removeChild(p),d.style.overflow=f,d.offsetHeight):c.parentNode.removeChild(c),!!i}var f=[],u=[],c={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){u.push({name:e,fn:n,options:t})},addAsyncTest:function(e){u.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr;var d=n.documentElement,p="svg"===d.nodeName.toLowerCase(),h=c._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];c._prefixes=h;var m;!function(){var e={}.hasOwnProperty;m=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),c._l={},c.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},c._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){c.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,t){function o(n){var o=n&&"load"===n.type?1==A.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),t&&t(n)}var A=new Image;A.onerror=o,A.onload=o,A.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})});var g=c.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");g(o,function(e){t=9===e.offsetTop})}return t}),A(),a(f),delete c.addTest,delete c.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t||self).Lenis=e()}(this,function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,"symbol"==typeof(n=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key))?n:String(n),o)}var n}function e(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},i.apply(this,arguments)}function o(t,e,i){return Math.max(t,Math.min(e,i))}var n=/*#__PURE__*/function(){function t(){}var e=t.prototype;return e.advance=function(t){var e,i,n,s;if(this.isRunning){var r=!1;if(this.lerp)this.value=(i=this.value,n=this.to,(1-(s=1-Math.exp(-60*this.lerp*t)))*i+s*n),Math.round(this.value)===this.to&&(this.value=this.to,r=!0);else{this.currentTime+=t;var l=o(0,this.currentTime/this.duration,1),h=(r=l>=1)?1:this.easing(l);this.value=this.from+(this.to-this.from)*h}null==(e=this.onUpdate)||e.call(this,this.value,{completed:r}),r&&this.stop()}},e.stop=function(){this.isRunning=!1},e.fromTo=function(t,e,i){var o=i.lerp,n=void 0===o?.1:o,s=i.duration,r=void 0===s?1:s,l=i.easing,h=void 0===l?function(t){return t}:l,a=i.onUpdate;this.from=this.value=t,this.to=e,this.lerp=n,this.duration=r,this.easing=h,this.currentTime=0,this.isRunning=!0,this.onUpdate=a},t}(),s=/*#__PURE__*/function(){function t(t){var e,i,o=this,n=void 0===t?{}:t,s=n.wrapper,r=n.content,l=n.autoResize,h=void 0===l||l;if(this.resize=function(){o.onWrapperResize(),o.onContentResize()},this.onWrapperResize=function(){o.wrapper===window?(o.width=window.innerWidth,o.height=window.innerHeight):(o.width=o.wrapper.clientWidth,o.height=o.wrapper.clientHeight)},this.onContentResize=function(){o.scrollHeight=o.content.scrollHeight,o.scrollWidth=o.content.scrollWidth},this.wrapper=s,this.content=r,h){var a=(e=this.resize,function(){var t=arguments,o=this;clearTimeout(i),i=setTimeout(function(){e.apply(o,t)},250)});this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(a),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(a),this.contentResizeObserver.observe(this.content)}this.resize()}return t.prototype.destroy=function(){var t,e;null==(t=this.wrapperResizeObserver)||t.disconnect(),null==(e=this.contentResizeObserver)||e.disconnect()},e(t,[{key:"limit",get:function(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}]),t}(),r=/*#__PURE__*/function(){function t(){this.events={}}var e=t.prototype;return e.emit=function(t){for(var e=this.events[t]||[],i=0,o=e.length;i<o;i++)e[i].apply(e,[].slice.call(arguments,1))},e.on=function(t,e){var i,o=this;return(null==(i=this.events[t])?void 0:i.push(e))||(this.events[t]=[e]),function(){var i;o.events[t]=null==(i=o.events[t])?void 0:i.filter(function(t){return e!==t})}},e.destroy=function(){this.events={}},t}(),l=/*#__PURE__*/function(){function t(t,e){var i=this,n=e.wheelMultiplier,s=void 0===n?1:n,l=e.touchMultiplier,h=void 0===l?2:l,a=e.normalizeWheel,c=void 0!==a&&a;this.onTouchStart=function(t){var e=t.targetTouches?t.targetTouches[0]:t,o=e.clientY;i.touchStart.x=e.clientX,i.touchStart.y=o,i.lastDelta={x:0,y:0}},this.onTouchMove=function(t){var e=t.targetTouches?t.targetTouches[0]:t,o=e.clientX,n=e.clientY,s=-(o-i.touchStart.x)*i.touchMultiplier,r=-(n-i.touchStart.y)*i.touchMultiplier;i.touchStart.x=o,i.touchStart.y=n,i.lastDelta={x:s,y:r},i.emitter.emit("scroll",{type:"touch",deltaX:s,deltaY:r,event:t})},this.onTouchEnd=function(t){i.emitter.emit("scroll",{type:"touch",inertia:!0,deltaX:i.lastDelta.x,deltaY:i.lastDelta.y,event:t})},this.onWheel=function(t){var e=t.deltaX,n=t.deltaY;i.normalizeWheel&&(e=o(-100,e,100),n=o(-100,n,100)),i.emitter.emit("scroll",{type:"wheel",deltaX:e*=i.wheelMultiplier,deltaY:n*=i.wheelMultiplier,event:t})},this.element=t,this.wheelMultiplier=s,this.touchMultiplier=h,this.normalizeWheel=c,this.touchStart={x:null,y:null},this.emitter=new r,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}var e=t.prototype;return e.on=function(t,e){return this.emitter.on(t,e)},e.destroy=function(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})},t}();/*#__PURE__*/
return function(){function t(t){var e=this,o=void 0===t?{}:t,h=o.wrapper,a=void 0===h?window:h,c=o.content,u=void 0===c?document.documentElement:c,p=o.wheelEventsTarget,d=void 0===p?a:p,v=o.smoothWheel,m=void 0===v||v,f=o.smoothTouch,g=void 0!==f&&f,y=o.syncTouch,S=void 0!==y&&y,w=o.syncTouchLerp,T=void 0===w?.1:w,b=o.__iosNoInertiaSyncTouchLerp,z=void 0===b?.4:b,M=o.touchInertiaMultiplier,E=void 0===M?35:M,L=o.duration,_=o.easing,O=void 0===_?function(t){return Math.min(1,1.001-Math.pow(2,-10*t))}:_,R=o.lerp,W=void 0===R?L&&.1:R,k=o.infinite,x=void 0!==k&&k,H=o.orientation,j=void 0===H?"vertical":H,A=o.gestureOrientation,X=void 0===A?"vertical":A,Y=o.touchMultiplier,D=void 0===Y?1:Y,I=o.wheelMultiplier,P=void 0===I?1:I,C=o.normalizeWheel,U=void 0!==C&&C,N=o.autoResize,V=void 0===N||N;this.onVirtualScroll=function(t){var o=t.type,n=t.inertia,s=t.deltaX,r=t.deltaY,l=t.event;if(!l.ctrlKey){var h="touch"===o,a="wheel"===o;if(!("vertical"===e.options.gestureOrientation&&0===r||"horizontal"===e.options.gestureOrientation&&0===s||h&&"vertical"===e.options.gestureOrientation&&0===e.scroll&&!e.options.infinite&&r<=0||l.composedPath().find(function(t){return(null==t||null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent"))||h&&(null==t||null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent-touch"))||a&&(null==t||null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent-wheel"))})))if(e.isStopped||e.isLocked)l.preventDefault();else{if(e.isSmooth=(e.options.smoothTouch||e.options.syncTouch)&&h||e.options.smoothWheel&&a,!e.isSmooth)return e.isScrolling=!1,void e.animate.stop();l.preventDefault();var c=r;"both"===e.options.gestureOrientation?c=Math.abs(r)>Math.abs(s)?r:s:"horizontal"===e.options.gestureOrientation&&(c=s);var u=h&&e.options.syncTouch,p=h&&n&&Math.abs(c)>1;p&&(c=e.velocity*e.options.touchInertiaMultiplier),e.scrollTo(e.targetScroll+c,i({programmatic:!1},u&&{lerp:p?e.syncTouchLerp:e.options.__iosNoInertiaSyncTouchLerp}))}}},this.onScroll=function(){if(!e.isScrolling){var t=e.animatedScroll;e.animatedScroll=e.targetScroll=e.actualScroll,e.velocity=0,e.direction=Math.sign(e.animatedScroll-t),e.emit()}},window.lenisVersion="1.0.18",a!==document.documentElement&&a!==document.body||(a=window),this.options={wrapper:a,content:u,wheelEventsTarget:d,smoothWheel:m,smoothTouch:g,syncTouch:S,syncTouchLerp:T,__iosNoInertiaSyncTouchLerp:z,touchInertiaMultiplier:E,duration:L,easing:O,lerp:W,infinite:x,gestureOrientation:X,orientation:j,touchMultiplier:D,wheelMultiplier:P,normalizeWheel:U,autoResize:V},this.dimensions=new s({wrapper:a,content:u,autoResize:V}),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=m||g,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new n,this.emitter=new r,this.options.wrapper.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new l(d,{touchMultiplier:D,wheelMultiplier:P,normalizeWheel:U}),this.virtualScroll.on("scroll",this.onVirtualScroll)}var h=t.prototype;return h.destroy=function(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.rootElement.classList.remove("lenis"),this.rootElement.classList.remove("lenis-smooth"),this.rootElement.classList.remove("lenis-scrolling"),this.rootElement.classList.remove("lenis-stopped")},h.on=function(t,e){return this.emitter.on(t,e)},h.off=function(t,e){var i;this.emitter.events[t]=null==(i=this.emitter.events[t])?void 0:i.filter(function(t){return e!==t})},h.setScroll=function(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t},h.resize=function(){this.dimensions.resize()},h.emit=function(){this.emitter.emit("scroll",this)},h.reset=function(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()},h.start=function(){this.isStopped=!1,this.reset()},h.stop=function(){this.isStopped=!0,this.animate.stop(),this.reset()},h.raf=function(t){var e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)},h.scrollTo=function(t,e){var i=this,n=void 0===e?{}:e,s=n.offset,r=void 0===s?0:s,l=n.immediate,h=void 0!==l&&l,a=n.lock,c=void 0!==a&&a,u=n.duration,p=void 0===u?this.options.duration:u,d=n.easing,v=void 0===d?this.options.easing:d,m=n.lerp,f=void 0===m?!p&&this.options.lerp:m,g=n.onComplete,y=void 0===g?null:g,S=n.force,w=n.programmatic,T=void 0===w||w;if(!this.isStopped||void 0!==S&&S){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var b,z;if("string"==typeof t?z=document.querySelector(t):null!=(b=t)&&b.nodeType&&(z=t),z){if(this.options.wrapper!==window){var M=this.options.wrapper.getBoundingClientRect();r-=this.isHorizontal?M.left:M.top}var E=z.getBoundingClientRect();t=(this.isHorizontal?E.left:E.top)+this.animatedScroll}}if("number"==typeof t){if(t+=r,t=Math.round(t),this.options.infinite?T&&(this.targetScroll=this.animatedScroll=this.scroll):t=o(0,t,this.limit),h)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.emit(),void(null==y||y());if(!T){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:p,easing:v,lerp:f,onUpdate:function(t,e){var o=e.completed;c&&(i.isLocked=!0),i.isScrolling=!0,i.velocity=t-i.animatedScroll,i.direction=Math.sign(i.velocity),i.animatedScroll=t,i.setScroll(i.scroll),T&&(i.targetScroll=t),o&&(c&&(i.isLocked=!1),requestAnimationFrame(function(){i.isScrolling=!1}),i.velocity=0,null==y||y()),i.emit()}})}}},e(t,[{key:"rootElement",get:function(){return this.options.wrapper===window?this.options.content:this.options.wrapper}},{key:"limit",get:function(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}},{key:"isHorizontal",get:function(){return"horizontal"===this.options.orientation}},{key:"actualScroll",get:function(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}},{key:"scroll",get:function(){return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll;var t}},{key:"progress",get:function(){return 0===this.limit?1:this.scroll/this.limit}},{key:"isSmooth",get:function(){return this.__isSmooth},set:function(t){this.__isSmooth!==t&&(this.rootElement.classList.toggle("lenis-smooth",t),this.__isSmooth=t)}},{key:"isScrolling",get:function(){return this.__isScrolling},set:function(t){this.__isScrolling!==t&&(this.rootElement.classList.toggle("lenis-scrolling",t),this.__isScrolling=t)}},{key:"isStopped",get:function(){return this.__isStopped},set:function(t){this.__isStopped!==t&&(this.rootElement.classList.toggle("lenis-stopped",t),this.__isStopped=t)}}]),t}()});

!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).LazyLoad=t()}(this,(function(){"use strict";function n(){return n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},n.apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},c=function(t){return n({},r,t)},l=function(n,t){var e,i="LazyLoad::Initialized",o=new n(t);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},u="src",s="srcset",d="sizes",f="poster",_="llOriginalAttrs",g="data",v="loading",b="loaded",p="applied",m="error",h="native",E="data-",I="ll-status",y=function(n,t){return n.getAttribute(E+t)},k=function(n){return y(n,I)},w=function(n,t){return function(n,t,e){var i="data-ll-status";null!==e?n.setAttribute(i,e):n.removeAttribute(i)}(n,0,t)},A=function(n){return w(n,null)},L=function(n){return null===k(n)},O=function(n){return k(n)===h},x=[v,b,p,m],C=function(n,t,e,i){n&&"function"==typeof n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i))},N=function(n,t){o?n.classList.add(t):n.className+=(n.className?" ":"")+t},M=function(n,t){o?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},z=function(n){return n.llTempImage},T=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},R=function(n,t){n&&(n.loadingCount+=t)},G=function(n,t){n&&(n.toLoadCount=t)},j=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e},D=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&j(e).forEach(t)},H=function(n,t){j(n).forEach(t)},V=[u],F=[u,f],B=[u,s,d],J=[g],P=function(n){return!!n[_]},S=function(n){return n[_]},U=function(n){return delete n[_]},$=function(n,t){if(!P(n)){var e={};t.forEach((function(t){e[t]=n.getAttribute(t)})),n[_]=e}},q=function(n,t){if(P(n)){var e=S(n);t.forEach((function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t)}(n,t,e[t])}))}},K=function(n,t,e){N(n,t.class_applied),w(n,p),e&&(t.unobserve_completed&&T(n,t),C(t.callback_applied,n,e))},Q=function(n,t,e){N(n,t.class_loading),w(n,v),e&&(R(e,1),C(t.callback_loading,n,e))},W=function(n,t,e){e&&n.setAttribute(t,e)},X=function(n,t){W(n,d,y(n,t.data_sizes)),W(n,s,y(n,t.data_srcset)),W(n,u,y(n,t.data_src))},Y={IMG:function(n,t){D(n,(function(n){$(n,B),X(n,t)})),$(n,B),X(n,t)},IFRAME:function(n,t){$(n,V),W(n,u,y(n,t.data_src))},VIDEO:function(n,t){H(n,(function(n){$(n,V),W(n,u,y(n,t.data_src))})),$(n,F),W(n,f,y(n,t.data_poster)),W(n,u,y(n,t.data_src)),n.load()},OBJECT:function(n,t){$(n,J),W(n,g,y(n,t.data_src))}},Z=["IMG","IFRAME","VIDEO","OBJECT"],nn=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||C(n.callback_finish,t)},tn=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},en=function(n,t,e){n.removeEventListener(t,e)},on=function(n){return!!n.llEvLisnrs},an=function(n){if(on(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];en(n,e,i)}delete n.llEvLisnrs}},rn=function(n,t,e){!function(n){delete n.llTempImage}(n),R(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),M(n,t.class_loading),t.unobserve_completed&&T(n,e)},cn=function(n,t,e){var i=z(n)||n;on(i)||function(n,t,e){on(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";tn(n,i,t),tn(n,"error",e)}(i,(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_loaded),w(t,b),C(e.callback_loaded,t,i),o||nn(e,i)}(0,n,t,e),an(i)}),(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_error),w(t,m),C(e.callback_error,t,i),e.restore_on_error&&q(t,B),o||nn(e,i)}(0,n,t,e),an(i)}))},ln=function(n,t,e){!function(n){return Z.indexOf(n.tagName)>-1}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),cn(n,t,e),function(n){P(n)||(n[_]={backgroundImage:n.style.backgroundImage})}(n),function(n,t,e){var i=y(n,t.data_bg),o=y(n,t.data_bg_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),z(n).setAttribute(u,r),Q(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_multi),o=y(n,t.data_bg_multi_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage=r,K(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_set);if(i){var o=i.split("|"),a=o.map((function(n){return"image-set(".concat(n,")")}));n.style.backgroundImage=a.join(),""===n.style.backgroundImage&&(a=o.map((function(n){return"-webkit-image-set(".concat(n,")")})),n.style.backgroundImage=a.join()),K(n,t,e)}}(n,t,e)}(n,t,e):function(n,t,e){cn(n,t,e),function(n,t,e){var i=Y[n.tagName];i&&(i(n,t),Q(n,t,e))}(n,t,e)}(n,t,e)},un=function(n){n.removeAttribute(u),n.removeAttribute(s),n.removeAttribute(d)},sn=function(n){D(n,(function(n){q(n,B)})),q(n,B)},dn={IMG:sn,IFRAME:function(n){q(n,V)},VIDEO:function(n){H(n,(function(n){q(n,V)})),q(n,F),n.load()},OBJECT:function(n){q(n,J)}},fn=function(n,t){(function(n){var t=dn[n.tagName];t?t(n):function(n){if(P(n)){var t=S(n);n.style.backgroundImage=t.backgroundImage}}(n)})(n),function(n,t){L(n)||O(n)||(M(n,t.class_entered),M(n,t.class_exited),M(n,t.class_applied),M(n,t.class_loading),M(n,t.class_loaded),M(n,t.class_error))}(n,t),A(n),U(n)},_n=["IMG","IFRAME","VIDEO"],gn=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},vn=function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,i){var o=function(n){return x.indexOf(k(n))>=0}(n);w(n,"entered"),N(n,e.class_entered),M(n,e.class_exited),function(n,t,e){t.unobserve_entered&&T(n,e)}(n,e,i),C(e.callback_enter,n,t,i),o||ln(n,e,i)}(n.target,n,t,e):function(n,t,e,i){L(n)||(N(n,e.class_exited),function(n,t,e,i){e.cancel_on_exit&&function(n){return k(n)===v}(n)&&"IMG"===n.tagName&&(an(n),function(n){D(n,(function(n){un(n)})),un(n)}(n),sn(n),M(n,e.class_loading),R(i,-1),A(n),C(e.callback_cancel,n,t,i))}(n,t,e,i),C(e.callback_exit,n,t,i))}(n.target,n,t,e)}))},bn=function(n){return Array.prototype.slice.call(n)},pn=function(n){return n.container.querySelectorAll(n.elements_selector)},mn=function(n){return function(n){return k(n)===m}(n)},hn=function(n,t){return function(n){return bn(n).filter(L)}(n||pn(t))},En=function(n,e){var o=c(n);this._settings=o,this.loadingCount=0,function(n,t){i&&!gn(n)&&(t._observer=new IntersectionObserver((function(e){vn(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(o,this),function(n,e){t&&(e._onlineHandler=function(){!function(n,t){var e;(e=pn(n),bn(e).filter(mn)).forEach((function(t){M(t,n.class_error),A(t)})),t.update()}(n,e)},window.addEventListener("online",e._onlineHandler))}(o,this),this.update(e)};return En.prototype={update:function(n){var t,o,a=this._settings,r=hn(n,a);G(this,r.length),!e&&i?gn(a)?function(n,t,e){n.forEach((function(n){-1!==_n.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),cn(n,t,e),function(n,t){var e=Y[n.tagName];e&&e(n,t)}(n,t),w(n,h)}(n,t,e)})),G(e,0)}(r,a,this):(o=r,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,o)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),t&&window.removeEventListener("online",this._onlineHandler),pn(this._settings).forEach((function(n){U(n)})),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;hn(n,e).forEach((function(n){T(n,t),ln(n,e,t)}))},restoreAll:function(){var n=this._settings;pn(n).forEach((function(t){fn(t,n)}))}},En.load=function(n,t){var e=c(t);ln(n,e)},En.resetStatus=function(n){A(n)},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)l(n,e);else l(n,t)}(En,window.lazyLoadOptions),En}));

/*!
 * GSAP 3.12.4
 * https://gsap.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return"string"==typeof t}function s(t){return"function"==typeof t}function t(t){return"number"==typeof t}function u(t){return void 0===t}function v(t){return"object"==typeof t}function w(t){return!1!==t}function x(){return"undefined"!=typeof window}function y(t){return s(t)||r(t)}function P(t){return(i=yt(t,ot))&&ze}function Q(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function R(t,e){return!e&&console.warn(t)}function S(t,e){return t&&(ot[t]=e)&&i&&(i[t]=e)||ot}function T(){return 0}function ea(t){var e,r,i=t[0];if(v(i)||s(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=gt.length;r--&&!gt[r].targetTest(i););e=gt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Vt(t[r],e)))||t.splice(r,1);return t}function fa(t){return t._gsap||ea(Mt(t))[0]._gsap}function ga(t,e,r){return(r=t[e])&&s(r)?t[e]():u(r)&&t.getAttribute&&t.getAttribute(e)||r}function ha(t,e){return(t=t.split(",")).forEach(e)||t}function ia(t){return Math.round(1e5*t)/1e5||0}function ja(t){return Math.round(1e7*t)/1e7||0}function ka(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function la(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ma(){var t,e,r=dt.length,i=dt.slice(0);for(ct={},t=dt.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function na(t,e,r,i){dt.length&&!L&&ma(),t.render(e,r,i||L&&e<0&&(t._initted||t._startAt)),dt.length&&!L&&ma()}function oa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:r(t)?t.trim():t}function pa(t){return t}function qa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ta(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=v(e[r])?ta(t[r]||(t[r]={}),e[r]):e[r]);return t}function ua(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function va(t){var e=t.parent||I,r=t.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}(Z(t.keyframes)):qa;if(w(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function xa(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function ya(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function za(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0}function Aa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function Ca(t,e,r,i){return t._startAt&&(L?t._startAt.revert(ht):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))}function Ea(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0}function Ga(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Ha(t){return t._end=ja(t._start+(t._tDur/Math.abs(t._ts||t._rts||X)||0))}function Ia(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ja(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ha(t),r._dirty||Aa(r,t)),t}function Ja(t,e){var r;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(r=Ga(t.rawTime(),e),(!e._dur||Ot(0,e.totalDuration(),r)-e._tTime>X)&&e.render(r,!0)),Aa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-X}}function Ka(e,r,i,n){return r.parent&&za(r),r._start=ja((t(i)?i:i||e!==I?xt(e,i,r):e._time)+r._delay),r._end=ja(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),xa(e,r,"_first","_last",e._sort?"_start":0),bt(r)||(e._recent=r),n||Ja(e,r),e._ts<0&&Ia(e,e._tTime),e}function La(t,e){return(ot.ScrollTrigger||Q("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ma(t,e,r,i,n){return Qt(t,e,n),t._initted?!r&&t._pt&&!L&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Rt.frame?(dt.push(t),t._lazy=[n,i],1):void 0:1}function Ra(t,e,r,i){var n=t._repeat,a=ja(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ja(a*(n+1)+t._rDelay*n):a,0<s&&!i&&Ia(t,t._tTime=t._tDur*s),t.parent&&Ha(t),r||Aa(t.parent,t),t}function Sa(t){return t instanceof Xt?Aa(t):Ra(t,t._dur)}function Va(e,r,i){var n,a,s=t(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=w(a.vars.inherit)&&a.parent;u.immediateRender=w(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new $t(r[0],u,r[1+o])}function Wa(t,e){return t||0===t?e(t):e}function Ya(t,e){return r(t)&&(e=st.exec(t))?e[1]:""}function _a(t,e){return t&&v(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&v(t[0]))&&!t.nodeType&&t!==h}function cb(r){return r=Mt(r)[0]||R("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return Mt(t,e.querySelectorAll?e:e===r?R("Invalid scope")||a.createElement("div"):r)}}function db(t){return t.sort(function(){return.5-Math.random()})}function eb(t){if(s(t))return t;var p=v(t)?t:{each:t},_=jt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,y={},e=0<m&&m<1,T=isNaN(m)||e,b=p.axis,w=m,x=m;return r(m)?w=x={center:.5,edges:.5,end:1}[m]||0:!e&&T&&(w=m[0],x=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||p).length,c=y[d];if(!c){if(!(f="auto"===p.grid?0:(p.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f<d&&f--}for(c=y[d]=[],i=T?Math.min(f,d)*w-.5:m%f,n=f===U?0:T?d*x/f-.5:m/f|0,l=U,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=b?Math.abs("y"===b?s:a):K(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&db(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(p.amount)||parseFloat(p.each)*(d<f?d-1:b?"y"===b?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),c.b=d<0?g-d:g,c.u=Ya(p.amount||p.each)||0,_=_&&d<0?Yt(_):_}return d=(c[t]-c.min)/c.max||0,ja(c.b+(_?_(d):d)*c.v)+c.u}}function fb(i){var n=Math.pow(10,((i+"").split(".")[1]||"").length);return function(e){var r=ja(Math.round(parseFloat(e)/i)*i*n);return(r-r%1)/n+(t(e)?0:Ya(e))}}function gb(h,e){var l,f,r=Z(h);return!r&&v(h)&&(l=r=h.radius||U,h.values?(h=Mt(h.values),(f=!t(h[0]))&&(l*=l)):h=fb(h.increment)),Wa(e,r?s(h)?function(t){return f=h(t),Math.abs(f-t)<=l?f:t}:function(e){for(var r,i,n=parseFloat(f?e.x:e),a=parseFloat(f?e.y:0),s=U,o=0,u=h.length;u--;)(r=f?(r=h[u].x-n)*r+(i=h[u].y-a)*i:Math.abs(h[u]-n))<s&&(s=r,o=u);return o=!l||s<=l?h[o]:e,f||o===e||t(e)?o:o+Ya(e)}:fb(h))}function hb(t,e,r,i){return Wa(Z(t)?!e:!0===r?!!(r=0):!i,function(){return Z(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function lb(e,r,t){return Wa(t,function(t){return e[~~r(t)]})}function ob(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+hb(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function rb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function tb(t){return za(t),t.scrollTrigger&&t.scrollTrigger.kill(!!L),t.progress()<1&&Ct(t,"onInterrupt"),t}function wb(t){if(x()&&t){var e=(t=!t.name&&t.default||t).name,r=s(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:T,render:he,add:Wt,kill:ce,modifier:fe,rawVars:0},a={targetTest:0,get:0,getSetter:ne,aliases:{},register:0};if(Ft(),t!==i){if(pt[e])return;qa(i,qa(ua(t,n),a)),yt(i.prototype,yt(n,ua(t,a))),pt[i.prop=e]=i,t.targetTest&&(gt.push(i),ft[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}S(e,i),t.register&&t.register(ze,i,_e)}else t&&At.push(t)}function zb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*St+.5|0}function Ab(e,r,i){var n,a,s,o,u,h,l,f,d,c,p=e?t(e)?[e>>16,e>>8&St,e&St]:0:zt.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),zt[e])p=zt[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(n=e.charAt(1))+n+(a=e.charAt(2))+a+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&St,p&St,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&St,e&St]}else if("hsl"===e.substr(0,3))if(p=c=e.match(tt),r){if(~e.indexOf("="))return p=e.match(et),i&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,u=p[1]/100,n=2*(h=p[2]/100)-(a=h<=.5?h*(u+1):h+u-h*u),3<p.length&&(p[3]*=1),p[0]=zb(o+1/3,n,a),p[1]=zb(o,n,a),p[2]=zb(o-1/3,n,a);else p=e.match(tt)||zt.transparent;p=p.map(Number)}return r&&!c&&(n=p[0]/St,a=p[1]/St,s=p[2]/St,h=((l=Math.max(n,a,s))+(f=Math.min(n,a,s)))/2,l===f?o=u=0:(d=l-f,u=.5<h?d/(2-l-f):d/(l+f),o=l===n?(a-s)/d+(a<s?6:0):l===a?(s-n)/d+2:(n-a)/d+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*u+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p}function Bb(t){var r=[],i=[],n=-1;return t.split(Et).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function Cb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Et),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=Ab(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=Bb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Et,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Et)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function Fb(t){var e,r=t.join(" ");if(Et.lastIndex=0,Et.test(r))return e=Dt.test(r),t[1]=Cb(t[1],e),t[0]=Cb(t[0],e,Bb(t[1])),!0}function Ob(t){var e=(t+"").split("("),r=Lt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Bt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(oa)):Lt._CE&&It.test(t)?Lt._CE("",t):r}function Qb(t,e){for(var r,i=t._first;i;)i instanceof Xt?Qb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Qb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Sb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ha(t,function(t){for(var e in Lt[t]=ot[t]=a,Lt[n=t.toLowerCase()]=r,a)Lt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Lt[t+"."+e]=a[e]}),a}function Tb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Ub(r,t,e){function Jm(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/N*(Math.asin(1/i)||0),s="out"===r?Jm:"in"===r?function(t){return 1-Jm(1-t)}:Tb(Jm);return n=N/n,s.config=function(t,e){return Ub(r,t,e)},s}function Vb(e,r){function Rm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Rm:"in"===e?function(t){return 1-Rm(1-t)}:Tb(Rm);return t.config=function(t){return Vb(e,t)},t}var F,L,l,I,h,n,a,i,o,f,d,c,p,_,m,g,b,O,k,M,C,A,z,E,D,B,Y,j,q={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},V={duration:.5,overwrite:!1,delay:0},U=1e8,X=1/U,N=2*Math.PI,G=N/4,W=0,K=Math.sqrt,J=Math.cos,H=Math.sin,$="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},Z=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot={},ut={suppressEvents:!0,isStart:!0,kill:!1},ht={suppressEvents:!0,kill:!1},lt={suppressEvents:!0},ft={},dt=[],ct={},pt={},_t={},mt=30,gt=[],vt="",yt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},Tt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},bt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},wt={_start:0,endTime:T,totalDuration:T},xt=function _parsePosition(t,e,i){var n,a,s,o=t.labels,u=t._recent||wt,h=t.duration()>=U?u.endTime(!1):t._dur;return r(e)&&(isNaN(e)||e in o)?(a=e.charAt(0),s="%"===e.substr(-1),n=e.indexOf("="),"<"===a||">"===a?(0<=n&&(e=e.replace(/=/,"")),("<"===a?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(s?(n<0?u:i).totalDuration()/100:1)):n<0?(e in o||(o[e]=h),o[e]):(a=parseFloat(e.charAt(n-1)+e.substr(n+1)),s&&i&&(a=a/100*(Z(i)?i[0]:i).totalDuration()),1<n?_parsePosition(t,e.substr(0,n-1),i)+a:h+a)):null==e?h:+e},Ot=function _clamp(t,e,r){return r<t?t:e<r?e:r},kt=[].slice,Mt=function toArray(t,e,i){return l&&!e&&l.selector?l.selector(t):!r(t)||i||!n&&Ft()?Z(t)?function _flatten(t,e,i){return void 0===i&&(i=[]),t.forEach(function(t){return r(t)&&!e||_a(t,1)?i.push.apply(i,Mt(t)):i.push(t)})||i}(t,i):_a(t)?kt.call(t,0):t?[t]:[]:kt.call((e||a).querySelectorAll(t),0)},Pt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Wa(n,function(t){return r+((t-e)/a*s||0)})},Ct=function _callback(t,e,r){var i,n,a,s=t.vars,o=s[e],u=l,h=t._ctx;if(o)return i=s[e+"Params"],n=s.callbackScope||t,r&&dt.length&&ma(),h&&(l=h),a=i?o.apply(n,i):o.call(n),l=u,a},At=[],St=255,zt={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Et=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in zt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Dt=/hsl[a]?\(/,Rt=(k=Date.now,M=500,C=33,A=k(),z=A,D=E=1e3/240,g={time:0,frame:0,tick:function tick(){yl(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){o&&(!n&&x()&&(h=n=window,a=h.document||{},ot.gsap=ze,(h.gsapVersions||(h.gsapVersions=[])).push(ze.version),P(i||h.GreenSockGlobals||!h.gsap&&h||{}),m=h.requestAnimationFrame,At.forEach(wb)),p&&g.sleep(),_=m||function(t){return setTimeout(t,D-1e3*g.time+1|0)},c=1,yl(2))},sleep:function sleep(){(m?h.cancelAnimationFrame:clearTimeout)(p),c=0,_=T},lagSmoothing:function lagSmoothing(t,e){M=t||1/0,C=Math.min(e||33,M)},fps:function fps(t){E=1e3/(t||240),D=1e3*g.time+E},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),g.remove(a)}:n;return g.remove(n),B[e?"unshift":"push"](a),Ft(),a},remove:function remove(t,e){~(e=B.indexOf(t))&&B.splice(e,1)&&e<=O&&O--},_listeners:B=[]}),Ft=function _wake(){return!c&&Rt.wake()},Lt={},It=/^[\d.\-M][\d.\-,\s]/,Bt=/["']/g,Yt=function _invertEase(e){return function(t){return 1-e(1-t)}},jt=function _parseEase(t,e){return t&&(s(t)?t:Lt[t]||Ob(t))||e};function yl(t){var e,r,i,n,a=k()-z,s=!0===t;if(M<a&&(A+=a-C),(0<(e=(i=(z+=a)-A)-D)||s)&&(n=++g.frame,b=i-1e3*g.time,g.time=i/=1e3,D+=e+(E<=e?4:E-e),r=1),s||(p=_(yl)),r)for(O=0;O<B.length;O++)B[O](i,b,n,t)}function gn(t){return t<j?Y*t*t:t<.7272727272727273?Y*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?Y*(t-=2.25/2.75)*t+.9375:Y*Math.pow(t-2.625/2.75,2)+.984375}ha("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Sb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Lt.Linear.easeNone=Lt.none=Lt.Linear.easeIn,Sb("Elastic",Ub("in"),Ub("out"),Ub()),Y=7.5625,j=1/2.75,Sb("Bounce",function(t){return 1-gn(1-t)},gn),Sb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Sb("Circ",function(t){return-(K(1-t*t)-1)}),Sb("Sine",function(t){return 1===t?1:1-J(t*G)}),Sb("Back",Vb("in"),Vb("out"),Vb()),Lt.SteppedEase=Lt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*Ot(0,.99999999,t)|0)+n)*r}}},V.ease=Lt["quad.out"],ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return vt+=t+","+t+"Params,"});var qt,Vt=function GSCache(t,e){this.id=W++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:ga,this.set=e?e.getSetter:ne},Ut=((qt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},qt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},qt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},qt.totalTime=function totalTime(t,e){if(Ft(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ia(this,t),!r._dp||r.parent||Ja(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ka(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===X||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),na(this,t,e)),this},qt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Ea(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},qt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):0<this.rawTime()?1:0},qt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Ea(this),e):this.duration()?Math.min(1,this._time/this._dur):0<this.rawTime()?1:0},qt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?Tt(this._tTime,r)+1:1},qt.timeScale=function timeScale(t,e){if(!arguments.length)return this._rts===-X?0:this._rts;if(this._rts===t)return this;var r=this.parent&&this._ts?Ga(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-X?0:this._rts,this.totalTime(Ot(-Math.abs(this._delay),this._tDur,r),!1!==e),Ha(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},qt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ft(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==X&&(this._tTime-=X)))),this):this._ps},qt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ka(e,this,t-this._delay),this}return this._start},qt.endTime=function endTime(t){return this._start+(w(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},qt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ga(e.rawTime(t),this):this._tTime:this._tTime},qt.revert=function revert(t){void 0===t&&(t=lt);var e=L;return L=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),L=e,this},qt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(Math.abs(e._ts)||1),e=e._dp;return!this.parent&&this._sat?this._sat.globalTime(t):r},qt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Sa(this)):-2===this._repeat?1/0:this._repeat},qt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Sa(this),e?this.time(e):this}return this._rDelay},qt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},qt.seek=function seek(t,e){return this.totalTime(xt(this,t),w(e))},qt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,w(e))},qt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},qt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},qt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},qt.resume=function resume(){return this.paused(!1)},qt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-X:0)),this):this._rts<0},qt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-X,this},qt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-X))},qt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},qt.then=function then(t){var i=this;return new Promise(function(e){function Co(){var t=i.then;i.then=null,s(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=s(t)?t:pa;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Co():i._prom=Co})},qt.kill=function kill(){tb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,l&&(this._ctx=l).data.push(this),c||Rt.wake()}qa(Ut.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-X,_prom:0,_ps:!1,_rts:1});var Xt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),I&&Ka(t.parent||I,_assertThisInitialized(r),e),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&La(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var e=Timeline.prototype;return e.to=function to(t,e,r){return Va(0,arguments,this),this},e.from=function from(t,e,r){return Va(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Va(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,va(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new $t(t,e,xt(this,r),1),this},e.call=function call(t,e,r){return Ka(this,$t.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new $t(t,r,xt(this,n)),this},e.staggerFrom=function staggerFrom(t,e,r,i,n,a,s){return r.runBackwards=1,va(r).immediateRender=w(r.immediateRender),this.staggerTo(t,e,r,i,n,a,s)},e.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,s,o){return i.startAt=r,va(i).immediateRender=w(i.immediateRender),this.staggerTo(t,e,i,n,a,s,o)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:ja(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==I&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(c=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ja(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=Tt(this._tTime,o),!_&&this._tTime&&d!==s&&this._tTime-d*o-this._dur<=0&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var T=c&&1&d,b=T===(c&&1&s);if(s<d&&(T=!T),_=T?0:v%g?g:v,this._lock=1,this.render(_||(p?0:ja(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Ct(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,_=T?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Qb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ja(_),ja(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&!s&&(Ct(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-X);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r||L&&(n._initted||n._startAt)),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-X:X);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-X)._zTime=_<=i?1:-1,this._ts))return this._start=f,Ha(this),this.render(t,e,r);this._onUpdate&&!e&&Ct(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||za(this,1),e||t<0&&!_||!v&&!_&&m||(Ct(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(e,i){var n=this;if(t(i)||(i=xt(this,i,e)),!(e instanceof Ut)){if(Z(e))return e.forEach(function(t){return n.add(t,i)}),this;if(r(e))return this.addLabel(e,i);if(!s(e))return this;e=$t.delayedCall(0,e)}return this!==e?Ka(this,e,i):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof $t?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return r(t)?this.removeLabel(t):s(t)?this.killTweensOf(t):(ya(this,t),t===this._recent&&(this._recent=this._last),Aa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ja(Rt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=xt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=$t.delayedCall(0,e||T,r);return i.data="isPause",this._hasPause=1,Ka(this,i,xt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=xt(this,t);e;)e._start===t&&"isPause"===e.data&&za(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Nt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(e,r){for(var i,n=[],a=Mt(e),s=this._first,o=t(r);s;)s instanceof $t?la(s._targets,a)&&(o?(!Nt||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&n.push(s):(i=s.getTweensOf(a,r)).length&&n.push.apply(n,i),s=s._next;return n},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=xt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=$t.to(i,qa({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||X,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ra(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,qa({startAt:{time:xt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+X)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return Aa(this)},e.invalidate=function invalidate(t){var e=this._first;for(this._lock=0;e;)e.invalidate(t),e=e._next;return i.prototype.invalidate.call(this,t)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Aa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ka(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ra(a,a===I&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(I._ts&&(na(I,Ga(t,I)),f=Rt.frame),Rt.frame>=mt){mt+=q.autoSleep||120;var e=I._first;if((!e||!e._ts)&&q.autoSleep&&Rt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Rt.sleep()}}},Timeline}(Ut);qa(Xt.prototype,{_lock:0,_hasPause:0,_forcing:0});function ac(t,e,i,n,a,o){var u,h,l,f;if(pt[t]&&!1!==(u=new pt[t]).init(a,u.rawVars?e[t]:function _processVars(t,e,i,n,a){if(s(t)&&(t=Kt(t,a,e,i,n)),!v(t)||t.style&&t.nodeType||Z(t)||$(t))return r(t)?Kt(t,a,e,i,n):t;var o,u={};for(o in t)u[o]=Kt(t[o],a,e,i,n);return u}(e[t],n,a,o,i),i,n,o)&&(i._pt=h=new _e(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==d))for(l=i._ptLookup[i._targets.indexOf(a)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function gc(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if(Z(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Nt,Gt,Wt=function _addPropTween(t,e,i,n,a,o,u,h,l,f){s(n)&&(n=n(a||0,t,o));var d,c=t[e],p="get"!==i?i:s(c)?l?t[e.indexOf("set")||!s(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():c,_=s(c)?l?re:te:Zt;if(r(n)&&(~n.indexOf("random(")&&(n=ob(n)),"="===n.charAt(1)&&(!(d=ka(p,n)+(Ya(p)||0))&&0!==d||(n=d))),!f||p!==n||Gt)return isNaN(p*n)||""===n?(c||e in t||Q(e,n),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new _e(this._pt,t,e,0,1,ue,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=ob(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?ka(d,l)-d:parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,p,n,_,h||q.stringFilter,l)):(d=new _e(this._pt,t,e,+p||0,n-(p||0),"boolean"==typeof c?se:ae,0,_),l&&(d.fp=l),u&&d.modifier(u,this,t),this._pt=d)},Qt=function _initTween(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,x=m.runBackwards,O=m.yoyoEase,k=m.keyframes,M=m.autoRevert,P=t._dur,C=t._startAt,A=t._targets,S=t.parent,z=S&&"nested"===S.data?S.vars.targets:A,E="auto"===t._overwrite&&!F,D=t.timeline;if(!D||k&&g||(g="none"),t._ease=jt(g,V.ease),t._yEase=O?Yt(jt(!0===O?g:O,V.ease)):0,O&&t._yoyo&&!t._repeat&&(O=t._yEase,t._yEase=t._ease,t._ease=O),t._from=!D&&!!m.runBackwards,!D||k&&!m.stagger){if(p=(l=A[0]?fa(A[0]).harness:0)&&m[l.prop],i=ua(m,ft),C&&(C._zTime<0&&C.progress(1),e<0&&x&&y&&!M?C.render(-1,!0):C.revert(x&&P?ht:ut),C._lazy=0),v){if(za(t._startAt=$t.set(A,qa({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!C&&w(T),startAt:null,delay:0,onUpdate:b&&function(){return Ct(t,"onUpdate")},stagger:0},v))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L||!y&&!M)&&t._startAt.revert(ht),y&&P&&e<=0&&r<=0)return void(e&&(t._zTime=e))}else if(x&&P&&!C)if(e&&(y=!1),a=qa({overwrite:!1,data:"isFromStart",lazy:y&&!C&&w(T),immediateRender:y,stagger:0,parent:S},i),p&&(a[l.prop]=p),za(t._startAt=$t.set(A,a)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L?t._startAt.revert(ht):t._startAt.render(-1,!0)),t._zTime=e,y){if(!e)return}else _initTween(t._startAt,X,X);for(t._pt=t._ptCache=0,T=P&&w(T)||T&&!P,n=0;n<A.length;n++){if(h=(o=A[n])._gsap||ea(A)[n]._gsap,t._ptLookup[n]=d={},ct[h.id]&&dt.length&&ma(),c=z===A?n:z.indexOf(o),l&&!1!==(f=new l).init(o,p||i,t,c,z)&&(t._pt=s=new _e(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)pt[a]&&(f=ac(a,i,t,c,o,z))?f.priority&&(u=1):d[a]=s=Wt.call(t,o,a,"get",i[a],c,z,0,m.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),E&&t._pt&&(Nt=t,I.killTweensOf(o,d,t.globalTime(e)),_=!t.parent,Nt=0),t._pt&&T&&(ct[h.id]=1)}u&&pe(t),t._onInit&&t._onInit(t)}t._onUpdate=b,t._initted=(!t._op||t._pt)&&!_,k&&e<=0&&D.render(U,!0,!0)},Kt=function _parseFuncOrString(t,e,i,n,a){return s(t)?t.call(e,i,n,a):r(t)&&~t.indexOf("random(")?ob(t):t},Jt=vt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ht={};ha(Jt+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Ht[t]=1});var $t=function(D){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,u,h,l,f,d,c,p=(a=D.call(this,n?r:va(r))||this).vars,_=p.duration,m=p.delay,g=p.immediateRender,T=p.stagger,b=p.overwrite,x=p.keyframes,O=p.defaults,k=p.scrollTrigger,M=p.yoyoEase,P=r.parent||I,C=(Z(e)||$(e)?t(e[0]):"length"in r)?[e]:Mt(e);if(a._targets=C.length?ea(C):R("GSAP target "+e+" not found. https://gsap.com",!q.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,x||T||y(_)||y(m)){if(r=a.vars,(s=a.timeline=new Xt({data:"nested",defaults:O||{},targets:P&&"nested"===P.data?P.vars.targets:C})).kill(),s.parent=s._dp=_assertThisInitialized(a),s._start=0,T||y(_)||y(m)){if(h=C.length,d=T&&eb(T),v(T))for(l in T)~Jt.indexOf(l)&&((c=c||{})[l]=T[l]);for(o=0;o<h;o++)(u=ua(r,Ht)).stagger=0,M&&(u.yoyoEase=M),c&&yt(u,c),f=C[o],u.duration=+Kt(_,_assertThisInitialized(a),o,f,C),u.delay=(+Kt(m,_assertThisInitialized(a),o,f,C)||0)-a._delay,!T&&1===h&&u.delay&&(a._delay=m=u.delay,a._start+=m,u.delay=0),s.to(f,u,d?d(o,f,C):0),s._ease=Lt.none;s.duration()?_=m=0:a.timeline=0}else if(x){va(qa(s.vars.defaults,{ease:"none"})),s._ease=jt(x.ease||r.ease||"none");var A,S,z,E=0;if(Z(x))x.forEach(function(t){return s.to(C,t,">")}),s.duration();else{for(l in u={},x)"ease"===l||"easeEach"===l||gc(l,x[l],u,x.easeEach);for(l in u)for(A=u[l].sort(function(t,e){return t.t-e.t}),o=E=0;o<A.length;o++)(z={ease:(S=A[o]).e,duration:(S.t-(o?A[o-1].t:0))/100*_})[l]=S.v,s.to(C,z,E),E+=z.duration;s.duration()<_&&s.to({},{duration:_-s.duration()})}}_||a.duration(_=s.duration())}else a.timeline=0;return!0!==b||F||(Nt=_assertThisInitialized(a),I.killTweensOf(C),Nt=0),Ka(P,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(g||!_&&!x&&a._start===ja(P._time)&&w(g)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==P.data)&&(a._tTime=-X,a.render(Math.max(0,-m)||0)),k&&La(_assertThisInitialized(a),k),a}_inheritsLoose(Tween,D);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=t<0,m=c-X<t&&!_?c:t<X?0:t;if(p){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=_){if(i=m,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*s+t,e,r);if(i=ja(m%s),m===c?(a=this._repeat,i=p):((a=~~(m/s))&&a===ja(m/s)&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=Tt(this._tTime,s),i===d&&!r&&this._initted&&a===o)return this._tTime=m,this;a!==o&&(l&&this._yEase&&Qb(l,u),this.vars.repeatRefresh&&!u&&!this._lock&&this._time!==p&&this._initted&&(this._lock=r=1,this.render(ja(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ma(this,_?t:i,r,e,m))return this._tTime=0,this;if(!(d===this._time||r&&this.vars.repeatRefresh&&a!==o))return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!d&&!e&&!a&&(Ct(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-X:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&Ca(this,t,0,r),Ct(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Ct(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(_&&!this._onUpdate&&Ca(this,t,0,!0),!t&&p||!(m===this._tDur&&0<this._ts||!m&&this._ts<0)||za(this,1),e||_&&!d||!(m||d||u)||(Ct(this,m===c?"onComplete":"onReverseComplete",!0),!this._prom||m<c&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!bt(t))||(t._ts<0||t._dp._ts<0)&&!bt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=Ot(0,t._tDur,e),a=Tt(l,h),t._yoyo&&1&a&&(u=1-u),a!==Tt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||L||i||t._zTime===X||!e&&t._zTime){if(!t._initted&&Ma(t,e,i,r,l))return;for(s=t._zTime,t._zTime=e||(r?X:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;e<0&&Ca(t,e,0,!0),t._onUpdate&&!r&&Ct(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Ct(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&za(t,1),r||L||(Ct(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),D.prototype.invalidate.call(this,t)},e.resetTo=function resetTo(t,e,r,i,n){c||Rt.wake(),this._ts||this.play();var a,s=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Qt(this,s),a=this._ease(s/this._dur),function _updatePropTweens(t,e,r,i,n,a,s,o){var u,h,l,f,d=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!d)for(d=t._ptCache[e]=[],l=t._ptLookup,f=t._targets.length;f--;){if((u=l[f][e])&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Gt=1,t.vars[e]="+=0",Qt(t,s),Gt=0,o?R(e+" not eligible for reset"):1;d.push(u)}for(f=d.length;f--;)(u=(h=d[f])._pt||h).s=!i&&0!==i||n?u.s+(i||0)+a*u.c:i,u.c=r-u.s,h.e&&(h.e=ia(r)+Ya(h.e)),h.b&&(h.b=u.s+Ya(h.b))}(this,t,e,r,i,a,s,n)?this.resetTo(t,e,r,i,1):(Ia(this,0),this.parent||xa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?tb(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Nt&&!0!==Nt.vars.overwrite)._first||tb(this),this.parent&&i!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/i,0,1),this}var n,a,s,o,u,h,l,f=this._targets,d=t?Mt(t):f,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),tb(this);for(n=this._op=this._op||[],"all"!==e&&(r(e)&&(u={},ha(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?fa(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=yt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in a=c[l],"all"===e?(n[l]=e,o=a,s={}):(s=n[l]=n[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ya(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&tb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Va(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Va(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return I.killTweensOf(t,e,r)},Tween}(Ut);qa($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ha("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var t=new Xt,e=kt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function oc(t,e,r){return t.setAttribute(e,r)}function wc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Zt=function _setterPlain(t,e,r){return t[e]=r},te=function _setterFunc(t,e,r){return t[e](r)},re=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},ne=function _getSetter(t,e){return s(t[e])?te:u(t[e])&&t.setAttribute?oc:Zt},ae=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},se=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ue=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},he=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},fe=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ce=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ya(this,i,"_pt"):i.dep||(e=1),i=r;return!e},pe=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},_e=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=wc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||ae,this.d=s||this,this.set=o||Zt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ha(vt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ft[t]=1}),ot.TweenMax=ot.TweenLite=$t,ot.TimelineLite=ot.TimelineMax=Xt,I=new Xt({sortChildren:!1,defaults:V,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),q.stringFilter=Fb;function Ec(t){return(ye[t]||Te).map(function(t){return t()})}function Fc(){var t=Date.now(),o=[];2<t-Oe&&(Ec("matchMediaInit"),ge.forEach(function(t){var e,r,i,n,a=t.queries,s=t.conditions;for(r in a)(e=h.matchMedia(a[r]).matches)&&(i=1),e!==s[r]&&(s[r]=e,n=1);n&&(t.revert(),i&&o.push(t))}),Ec("matchMediaRevert"),o.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Oe=t,Ec("matchMedia"))}var me,ge=[],ye={},Te=[],Oe=0,Me=0,Pe=((me=Context.prototype).add=function add(t,i,n){function Gw(){var t,e=l,r=a.selector;return e&&e!==a&&e.data.push(a),n&&(a.selector=cb(n)),l=a,t=i.apply(a,arguments),s(t)&&a._r.push(t),l=e,a.selector=r,a.isReverted=!1,t}s(t)&&(n=i,i=t,t=s);var a=this;return a.last=Gw,t===s?Gw(a,function(t){return a.add(null,t)}):t?a[t]=Gw:Gw},me.ignore=function ignore(t){var e=l;l=null,t(this),l=e},me.getTweens=function getTweens(){var e=[];return this.data.forEach(function(t){return t instanceof Context?e.push.apply(e,t.getTweens()):t instanceof $t&&!(t.parent&&"nested"===t.parent.data)&&e.push(t)}),e},me.clear=function clear(){this._r.length=this.data.length=0},me.kill=function kill(i,t){var n=this;if(i?function(){for(var t,e=n.getTweens(),r=n.data.length;r--;)"isFlip"===(t=n.data[r]).data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return e.splice(e.indexOf(t),1)}));for(e.map(function(t){return{g:t._dur||t._delay||t._sat&&!t._sat.vars.immediateRender?t.globalTime(0):-1/0,t:t}}).sort(function(t,e){return e.g-t.g||-1/0}).forEach(function(t){return t.t.revert(i)}),r=n.data.length;r--;)(t=n.data[r])instanceof Xt?"nested"!==t.data&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):t instanceof $t||!t.revert||t.revert(i);n._r.forEach(function(t){return t(i,n)}),n.isReverted=!0}():this.data.forEach(function(t){return t.kill&&t.kill()}),this.clear(),t)for(var e=ge.length;e--;)ge[e].id===this.id&&ge.splice(e,1)},me.revert=function revert(t){this.kill(t||{})},Context);function Context(t,e){this.selector=e&&cb(e),this.data=[],this._r=[],this.isReverted=!1,this.id=Me++,t&&this.add(t)}var Ce,Ae=((Ce=MatchMedia.prototype).add=function add(t,e,r){v(t)||(t={matches:t});var i,n,a,s=new Pe(0,r||this.scope),o=s.conditions={};for(n in l&&!s.selector&&(s.selector=l.selector),this.contexts.push(s),e=s.add("onMatch",e),s.queries=t)"all"===n?a=1:(i=h.matchMedia(t[n]))&&(ge.indexOf(s)<0&&ge.push(s),(o[n]=i.matches)&&(a=1),i.addListener?i.addListener(Fc):i.addEventListener("change",Fc));return a&&e(s,function(t){return s.add(null,t)}),this},Ce.revert=function revert(t){this.kill(t||{})},Ce.kill=function kill(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},MatchMedia);function MatchMedia(t){this.contexts=[],this.scope=t}var Se={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return wb(t)})},timeline:function timeline(t){return new Xt(t)},getTweensOf:function getTweensOf(t,e){return I.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,n){r(i)&&(i=Mt(i)[0]);var a=fa(i||{}).get,s=e?pa:oa;return"native"===e&&(e=""),i?t?s((pt[t]&&pt[t].get||a)(i,t,e,n)):function(t,e,r){return s((pt[t]&&pt[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Mt(r)).length){var n=r.map(function(t){return ze.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=pt[e],o=fa(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&he(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function $x(t,e,r){return n.resetTo(i,t,e,r)}var r,n=ze.to(t,yt(((r={})[i]="+=0.1",r.paused=!0,r),e||{}));return $x.tween=n,$x},isTweening:function isTweening(t){return 0<I.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=jt(t.ease,V.ease)),ta(V,t||{})},config:function config(t){return ta(q,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!pt[t]&&!ot[t]&&R(i+" effect requires "+t+" plugin.")}),_t[i]=function(t,e,r){return n(Mt(t),qa(e||{},a),r)},r&&(Xt.prototype[i]=function(t,e,r){return this.add(_t[i](t,v(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){Lt[t]=jt(e)},parseEase:function parseEase(t,e){return arguments.length?jt(t,e):Lt},getById:function getById(t){return I.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Xt(t);for(n.smoothChildTiming=w(t.smoothChildTiming),I.remove(n),n._dp=0,n._time=n._tTime=I._time,r=I._first;r;)i=r._next,!e&&!r._dur&&r instanceof $t&&r.vars.onComplete===r._targets[0]||Ka(n,r,r._start-r._delay),r=i;return Ka(I,n,0),n},context:function context(t,e){return t?new Pe(t,e):l},matchMedia:function matchMedia(t){return new Ae(t)},matchMediaRefresh:function matchMediaRefresh(){return ge.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Fc()},addEventListener:function addEventListener(t,e){var r=ye[t]||(ye[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function removeEventListener(t,e){var r=ye[t],i=r&&r.indexOf(e);0<=i&&r.splice(i,1)},utils:{wrap:function wrap(e,t,r){var i=t-e;return Z(e)?lb(e,wrap(0,e.length),t):Wa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return Z(e)?lb(e,wrapYoyo(0,e.length-1),t):Wa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:eb,random:hb,snap:gb,normalize:function normalize(t,e,r){return Pt(t,e,0,1,r)},getUnit:Ya,clamp:function clamp(e,r,t){return Wa(t,function(t){return Ot(e,r,t)})},splitColor:Ab,toArray:Mt,selector:cb,mapRange:Pt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ya(t))}},interpolate:function interpolate(e,i,t,n){var a=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!a){var s,o,u,h,l,f=r(e),d={};if(!0===t&&(n=1)&&(t=null),f)e={p:e},i={p:i};else if(Z(e)&&!Z(i)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=i}else n||(e=yt(Z(e)?[]:{},e));if(!u){for(s in i)Wt.call(d,e,s,"get",i[s]);a=function func(t){return he(t,d)||(f?e.p:e)}}}return Wa(t,a)},shuffle:db},install:P,effects:_t,ticker:Rt,updateRoot:Xt.updateRoot,plugins:pt,globalTimeline:I,core:{PropTween:_e,globals:S,Tween:$t,Timeline:Xt,Animation:Ut,getCache:fa,_removeLinkedListItem:ya,reverting:function reverting(){return L},context:function context(t){return t&&l&&(l.data.push(t),t._ctx=l),l},suppressOverwrites:function suppressOverwrites(t){return F=t}}};ha("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Se[t]=$t[t]}),Rt.add(Xt.updateRoot),d=Se.to({},{duration:0});function Jc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function Lc(t,a){return{name:t,rawVars:1,init:function init(t,n,e){e._onInit=function(t){var e,i;if(r(n)&&(e={},ha(n,function(t){return e[t]=1}),n=e),a){for(i in e={},n)e[i]=a(n[i]);n=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=Jc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,n)}}}}var ze=Se.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s,o;for(a in this.tween=r,e)o=t.getAttribute(a)||"",(s=this.add(t,"setAttribute",(o||0)+"",e[a],i,n,0,0,a)).op=a,s.b=o,this._props.push(a)},render:function render(t,e){for(var r=e._pt;r;)L?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Lc("roundProps",fb),Lc("modifiers"),Lc("snap",gb))||Se;$t.version=Xt.version=ze.version="3.12.4",o=1,x()&&Ft();function vd(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function wd(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function xd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function yd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function zd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Ad(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Bd(t,e,r){return t.style[e]=r}function Cd(t,e,r){return t.style.setProperty(e,r)}function Dd(t,e,r){return t._gsap[e]=r}function Ed(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Fd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function Gd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function Jd(t,e){var r=this,i=this.target,n=i.style,a=i._gsap;if(t in ar&&n){if(this.tfm=this.tfm||{},"transform"===t)return dr.transform.split(",").forEach(function(t){return Jd.call(r,t,e)});if(~(t=dr[t]||t).indexOf(",")?t.split(",").forEach(function(t){return r.tfm[t]=yr(i,t)}):this.tfm[t]=a.x?a[t]:yr(i,t),t===pr&&(this.tfm.zOrigin=a.zOrigin),0<=this.props.indexOf(cr))return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pr,e,"")),t=cr}(n||e)&&this.props.push(t,e,n[t])}function Kd(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}function Ld(){var t,e,r=this.props,i=this.target,n=i.style,a=i._gsap;for(t=0;t<r.length;t+=3)r[t+1]?i[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty("--"===r[t].substr(0,2)?r[t]:r[t].replace(hr,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),(t=Be())&&t.isStart||n[cr]||(Kd(n),a.zOrigin&&n[pr]&&(n[pr]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}}function Md(t,e){var r={target:t,props:[],revert:Ld,save:Jd};return t._gsap||ze.core.getCache(t),e&&e.split(",").forEach(function(t){return r.save(t)}),r}function Od(t,e){var r=De.createElementNS?De.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):De.createElement(t);return r&&r.style?r:De.createElement(t)}function Pd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(hr,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&Pd(t,mr(e)||e,1)||""}function Sd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(Ee=window,De=Ee.document,Re=De.documentElement,Le=Od("div")||{style:{}},Od("div"),cr=mr(cr),pr=cr+"Origin",Le.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ye=!!mr("perspective"),Be=ze.core.reverting,Fe=1)}function Td(t){var e,r=Od("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(Re.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Td}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),Re.removeChild(r),this.style.cssText=a,e}function Ud(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function Vd(e){var r;try{r=e.getBBox()}catch(t){r=Td.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===Td||(r=Td.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+Ud(e,["x","cx","x1"])||0,y:+Ud(e,["y","cy","y1"])||0,width:0,height:0}}function Wd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Vd(t))}function Xd(t,e){if(e){var r,i=t.style;e in ar&&e!==pr&&(e=cr),i.removeProperty?("ms"!==(r=e.substr(0,2))&&"webkit"!==e.substr(0,6)||(e="-"+e),i.removeProperty("--"===r?e:e.replace(hr,"-$1").toLowerCase())):i.removeAttribute(e)}}function Yd(t,e,r,i,n,a){var s=new _e(t._pt,e,r,0,1,a?Ad:zd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function _d(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=Le.style,f=lr.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;if(i===h||!u||gr[i]||gr[h])return u;if("px"===h||p||(u=_d(t,e,r,"px")),o=t.getCTM&&Wd(t),(_||"%"===h)&&(ar[e]||~e.indexOf("adius")))return n=o?t.getBBox()[f?"width":"height"]:t[c],ia(_?u/n*100:u/100*n);if(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==De&&a.appendChild||(a=De.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Rt.time&&!s.uncache)return ia(u/s.width*100);if(!_||"height"!==e&&"width"!==e)!_&&"%"!==h||vr[Pd(a,"display")]||(l.position=Pd(t,"position")),a===t&&(l.position="static"),a.appendChild(Le),n=Le[c],a.removeChild(Le),l.position="absolute";else{var m=t.style[e];t.style[e]=100+i,n=t[c],m?t.style[e]=m:Xd(t,e)}return f&&_&&((s=fa(a)).time=Rt.time,s.width=a[c]),ia(p?n*u/100:n&&u?100/n*u:0)}function be(t,e,r,i){if(!r||"none"===r){var n=mr(e,t,1),a=n&&Pd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=Pd(t,"borderTopColor"))}var s,o,u,h,l,f,d,c,p,_,m,g=new _e(this._pt,t.style,e,0,1,ue),v=0,y=0;if(g.b=r,g.e=i,r+="","auto"===(i+="")&&(f=t.style[e],t.style[e]=i,i=Pd(t,e)||i,f?t.style[e]=f:Xd(t,e)),Fb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===d.charAt(1)&&(d=ka(h,d)+m),c=parseFloat(d),_=d.substr((c+"").length),v=rt.lastIndex-_.length,_||(_=_||q.units[e]||m,v===i.length&&(i+=_,g.e+=_)),m!==_&&(h=_d(t,e,f,_)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:c-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?Ad:zd;return nt.test(i)&&(g.e=0),this._pt=g}function de(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Tr[r]||r,e[1]=Tr[i]||i,e.join(" ")}function ee(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],ar[r]&&(i=1,r="transformOrigin"===r?pr:cr),Xd(a,r);i&&(Xd(a,cr),u&&(u.svg&&a.removeAttribute("transform"),Or(a,1),u.uncache=1,Kd(s)))}}function ie(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function je(t){var e=Pd(t,cr);return ie(e)?wr:e.substr(7).match(et).map(ia)}function ke(t,e){var r,i,n,a,s=t._gsap||fa(t),o=t.style,u=je(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?wr:u:(u!==wr||t.offsetParent||t===Re||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextElementSibling,Re.appendChild(t)),u=je(t),n?o.display=n:Xd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):Re.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function le(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||ke(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==wr&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=Vd(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-d,h.xOffset=c+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[pr]="0px 0px",a&&(Yd(a,h,"xOrigin",f,w),Yd(a,h,"yOrigin",d,x),Yd(a,h,"xOffset",c,h.xOffset),Yd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function oe(t,e,r){var i=Ya(e);return ia(parseFloat(e)+parseFloat(_d(t,"x",r+"px",i)))+i}function ve(t,e,i,n,a){var s,o,u=360,h=r(a),l=parseFloat(a)*(h&&~a.indexOf("rad")?sr:1)-n,f=n+l+"deg";return h&&("short"===(s=a.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===s&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===s&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=o=new _e(t._pt,e,i,n,l,wd),o.e=f,o.u="deg",t._props.push(i),o}function we(t,e){for(var r in e)t[r]=e[r];return t}function xe(t,e,r){var i,n,a,s,o,u,h,l=we({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[cr]=e,i=Or(r,1),Xd(r,cr),r.setAttribute("transform",a)):(a=getComputedStyle(r)[cr],f[cr]=e,i=Or(r,1),f[cr]=a),ar)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ya(a)!==(h=Ya(s))?_d(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new _e(t._pt,i,n,o,u-o,vd),t._pt.u=h||0,t._props.push(n));we(i,l)}var Ee,De,Re,Fe,Le,Ie,Be,Ye,qe=Lt.Power0,Ve=Lt.Power1,Ue=Lt.Power2,Xe=Lt.Power3,Ne=Lt.Power4,Ge=Lt.Linear,We=Lt.Quad,Qe=Lt.Cubic,Ke=Lt.Quart,Je=Lt.Quint,He=Lt.Strong,$e=Lt.Elastic,Ze=Lt.Back,tr=Lt.SteppedEase,er=Lt.Bounce,rr=Lt.Sine,ir=Lt.Expo,nr=Lt.Circ,ar={},sr=180/Math.PI,or=Math.PI/180,ur=Math.atan2,hr=/([A-Z])/g,lr=/(left|right|width|margin|padding|x)/i,fr=/[\s,\(]\S/,dr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cr="transform",pr=cr+"Origin",_r="O,Moz,ms,Ms,Webkit".split(","),mr=function _checkPropPrefix(t,e,r){var i=(e||Le).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(_r[n]+t in i););return n<0?null:(3===n?"ms":0<=n?_r[n]:"")+t},gr={deg:1,rad:1,turn:1},vr={grid:1,flex:1},yr=function _get(t,e,r,i){var n;return Fe||Sd(),e in dr&&"transform"!==e&&~(e=dr[e]).indexOf(",")&&(e=e.split(",")[0]),ar[e]&&"transform"!==e?(n=Or(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:kr(Pd(t,pr))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=br[e]&&br[e](t,e,r)||Pd(t,e)||ga(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?_d(t,e,n,r)+r:n},Tr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},br={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new _e(t._pt,e,r,0,0,ee);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},wr=[1,0,0,1,0,0],xr={},Or=function _parseTransform(t,e){var r=t._gsap||new Vt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w,x,O,k,M,P,C,A,S,z,E,D,R,F=t.style,L=r.scaleX<0,I="deg",B=getComputedStyle(t),Y=Pd(t,pr)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!Wd(t)),B.translate&&("none"===B.translate&&"none"===B.scale&&"none"===B.rotate||(F[cr]=("none"!==B.translate?"translate3d("+(B.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==B.rotate?"rotate("+B.rotate+") ":"")+("none"!==B.scale?"scale("+B.scale.split(" ").join(",")+") ":"")+("none"!==B[cr]?B[cr]:"")),F.scale=F.rotate=F.translate="none"),m=ke(t,r.svg),r.svg&&(M=r.uncache?(P=t.getBBox(),Y=r.xOrigin-P.x+"px "+(r.yOrigin-P.y)+"px",""):!e&&t.getAttribute("data-svg-origin"),le(t,M||Y,!!M||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==wr&&(T=m[0],b=m[1],w=m[2],x=m[3],i=O=m[4],n=k=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?ur(b,T)*sr:0,(f=w||x?ur(w,x)*sr+u:0)&&(o*=Math.abs(Math.cos(f*or))),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(R=m[6],E=m[7],A=m[8],S=m[9],z=m[10],D=m[11],i=m[12],n=m[13],a=m[14],h=(g=ur(R,z))*sr,g&&(M=O*(v=Math.cos(-g))+A*(y=Math.sin(-g)),P=k*v+S*y,C=R*v+z*y,A=O*-y+A*v,S=k*-y+S*v,z=R*-y+z*v,D=E*-y+D*v,O=M,k=P,R=C),l=(g=ur(-w,z))*sr,g&&(v=Math.cos(-g),D=x*(y=Math.sin(-g))+D*v,T=M=T*v-A*y,b=P=b*v-S*y,w=C=w*v-z*y),u=(g=ur(b,T))*sr,g&&(M=T*(v=Math.cos(g))+b*(y=Math.sin(g)),P=O*v+k*y,b=b*v-T*y,k=k*v-O*y,T=M,O=P),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ia(Math.sqrt(T*T+b*b+w*w)),o=ia(Math.sqrt(k*k+R*R)),g=ur(O,k),f=2e-4<Math.abs(g)?g*sr:0,c=D?1/(D<0?-D:D):0),r.svg&&(M=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!ie(Pd(t,cr)),M&&t.setAttribute("transform",M))),90<Math.abs(f)&&Math.abs(f)<270&&(L?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ia(s),r.scaleY=ia(o),r.rotation=ia(u)+I,r.rotationX=ia(h)+I,r.rotationY=ia(l)+I,r.skewX=f+I,r.skewY=d+I,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(Y.split(" ")[2])||!e&&r.zOrigin||0)&&(F[pr]=kr(Y)),r.xOffset=r.yOffset=0,r.force3D=q.force3D,r.renderTransform=r.svg?zr:Ye?Sr:Mr,r.uncache=0,r},kr=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Mr=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Sr(t,e)},Pr="0deg",Cr="0px",Ar=") ",Sr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Pr||h!==Pr)){var b,w=parseFloat(h)*or,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*or,b=Math.cos(w),a=oe(g,a,x*b*-v),s=oe(g,s,-Math.sin(w)*-v),o=oe(g,o,O*b*-v+v)}_!==Cr&&(y+="perspective("+_+Ar),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Cr&&s===Cr&&o===Cr||(y+=o!==Cr||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Ar),u!==Pr&&(y+="rotate("+u+Ar),h!==Pr&&(y+="rotateY("+h+Ar),l!==Pr&&(y+="rotateX("+l+Ar),f===Pr&&d===Pr||(y+="skew("+f+", "+d+Ar),1===c&&1===p||(y+="scale("+c+", "+p+Ar),g.style[cr]=y||"translate(0, 0)"},zr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=or,c*=or,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=or,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ia(r),i=ia(i),n=ia(n),a=ia(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=_d(g,"x",l,"px"),O=_d(g,"y",f,"px")),(v||y||T||b)&&(x=ia(x+v-(v*r+y*n)+T),O=ia(O+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ia(x+u/100*s.width),O=ia(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[cr]=s)};ha("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});br[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return yr(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var Er,Dr,Rr,Fr={name:"css",register:Sd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,i,n,a){var s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w=this._props,x=t.style,O=i.vars.startAt;for(d in Fe||Sd(),this.styles=this.styles||Md(t),b=this.styles.props,this.tween=i,e)if("autoRound"!==d&&(o=e[d],!pt[d]||!ac(d,e,i,n,t,a)))if(l=typeof o,f=br[d],"function"===l&&(l=typeof(o=o.call(i,n,t,a))),"string"===l&&~o.indexOf("random(")&&(o=ob(o)),f)f(this,t,d,o,i)&&(T=1);else if("--"===d.substr(0,2))s=(getComputedStyle(t).getPropertyValue(d)+"").trim(),o+="",Et.lastIndex=0,Et.test(s)||(c=Ya(s),p=Ya(o)),p?c!==p&&(s=_d(t,d,s,p)+p):c&&(o+=c),this.add(x,"setProperty",s,o,n,a,0,0,d),w.push(d),b.push(d,0,x[d]);else if("undefined"!==l){if(O&&d in O?(s="function"==typeof O[d]?O[d].call(i,n,t,a):O[d],r(s)&&~s.indexOf("random(")&&(s=ob(s)),Ya(s+"")||"auto"===s||(s+=q.units[d]||Ya(yr(t,d))||""),"="===(s+"").charAt(1)&&(s=yr(t,d))):s=yr(t,d),h=parseFloat(s),(_="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),d in dr&&("autoAlpha"===d&&(1===h&&"hidden"===yr(t,"visibility")&&u&&(h=0),b.push("visibility",0,x.visibility),Yd(this,x,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==d&&"transform"!==d&&~(d=dr[d]).indexOf(",")&&(d=d.split(",")[0])),m=d in ar)if(this.styles.save(d),g||((v=t._gsap).renderTransform&&!e.parseTransform||Or(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new _e(this._pt,x,cr,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===d)this._pt=new _e(this._pt,v,"scaleY",v.scaleY,(_?ka(v.scaleY,_+u):u)-v.scaleY||0,vd),this._pt.u=0,w.push("scaleY",d),d+="X";else{if("transformOrigin"===d){b.push(pr,0,x[pr]),o=de(o),v.svg?le(t,o,0,y,0,this):((p=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&Yd(this,v,"zOrigin",v.zOrigin,p),Yd(this,x,d,kr(s),kr(o)));continue}if("svgOrigin"===d){le(t,o,1,y,0,this);continue}if(d in xr){ve(this,v,d,h,_?ka(h,_+o):o);continue}if("smoothOrigin"===d){Yd(this,v,"smooth",v.smooth,o);continue}if("force3D"===d){v[d]=o;continue}if("transform"===d){xe(this,o,t);continue}}else d in x||(d=mr(d)||d);if(m||(u||0===u)&&(h||0===h)&&!fr.test(o)&&d in x)u=u||0,(c=(s+"").substr((h+"").length))!==(p=Ya(o)||(d in q.units?q.units[d]:c))&&(h=_d(t,d,s,p)),this._pt=new _e(this._pt,m?v:x,d,h,(_?ka(h,_+u):u)-h,m||"px"!==p&&"zIndex"!==d||!1===e.autoRound?vd:yd),this._pt.u=p||0,c!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=xd);else if(d in x)be.call(this,t,d,s,_?_+o:o);else if(d in t)this.add(t,d,s||t[d],_?_+o:o,n,a);else if("parseTransform"!==d){Q(d,o);continue}m||(d in x?b.push(d,0,x[d]):b.push(d,1,s||t[d])),w.push(d)}T&&pe(this)},render:function render(t,e){if(e.tween._time||!Be())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:yr,aliases:dr,getSetter:function getSetter(t,e,r){var i=dr[e];return i&&i.indexOf(",")<0&&(e=i),e in ar&&e!==pr&&(t._gsap.x||yr(t,"x"))?r&&Ie===r?"scale"===e?Ed:Dd:(Ie=r||{})&&("scale"===e?Fd:Gd):t.style&&!u(t.style[e])?Bd:~e.indexOf("-")?Cd:ne(t,e)},core:{_removeProperty:Xd,_getMatrix:ke}};ze.utils.checkPrefix=mr,ze.core.getStyleSaver=Md,Rr=ha((Er="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(Dr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){ar[t]=1}),ha(Dr,function(t){q.units[t]="deg",xr[t]=1}),dr[Rr[13]]=Er+","+Dr,ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");dr[e[1]]=Rr[e[0]]}),ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){q.units[t]="px"}),ze.registerPlugin(Fr);var Lr=ze.registerPlugin(Fr)||ze,Ir=Lr.core.Tween;e.Back=Ze,e.Bounce=er,e.CSSPlugin=Fr,e.Circ=nr,e.Cubic=Qe,e.Elastic=$e,e.Expo=ir,e.Linear=Ge,e.Power0=qe,e.Power1=Ve,e.Power2=Ue,e.Power3=Xe,e.Power4=Ne,e.Quad=We,e.Quart=Ke,e.Quint=Je,e.Sine=rr,e.SteppedEase=tr,e.Strong=He,e.TimelineLite=Xt,e.TimelineMax=Xt,e.TweenLite=$t,e.TweenMax=Ir,e.default=Lr,e.gsap=Lr;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(){return Ce||"undefined"!=typeof window&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce}function z(e,t){return~Le.indexOf(e)&&Le[Le.indexOf(e)+1][t]}function A(e){return!!~t.indexOf(e)}function B(e,t,r,n,o){return e.addEventListener(t,r,{passive:!1!==n,capture:!!o})}function C(e,t,r,n){return e.removeEventListener(t,r,!!n)}function F(){return De&&De.isPressed||Ie.cache++}function G(r,n){function dd(e){if(e||0===e){o&&(Se.history.scrollRestoration="manual");var t=De&&De.isPressed;e=dd.v=Math.round(e)||(De&&De.iOS?1:0),r(e),dd.cacheID=Ie.cache,t&&i("ss",e)}else(n||Ie.cache!==dd.cacheID||i("ref"))&&(dd.cacheID=Ie.cache,dd.v=r());return dd.v+dd.offset}return dd.offset=0,r&&dd}function J(e,t){return(t&&t._ctx&&t._ctx.selector||Ce.utils.toArray)(e)[0]||("string"==typeof e&&!1!==Ce.config().nullTargetWarn?console.warn("Element not found:",e):null)}function K(t,e){var r=e.s,n=e.sc;A(t)&&(t=ke.scrollingElement||Pe);var o=Ie.indexOf(t),i=n===Fe.sc?1:2;~o||(o=Ie.push(t)-1),Ie[o+i]||B(t,"scroll",F);var a=Ie[o+i],s=a||(Ie[o+i]=G(z(t,r),!0)||(A(t)?n:G(function(e){return arguments.length?t[r]=e:t[r]})));return s.target=t,a||(s.smooth="smooth"===Ce.getProperty(t,"scrollBehavior")),s}function L(e,t,o){function Cd(e,t){var r=ze();t||n<r-s?(a=i,i=e,l=s,s=r):o?i+=e:i=a+(e-a)/(r-l)*(s-l)}var i=e,a=e,s=ze(),l=s,n=t||50,c=Math.max(500,3*n);return{update:Cd,reset:function reset(){a=i=o?0:i,l=s=0},getVelocity:function getVelocity(e){var t=l,r=a,n=ze();return!e&&0!==e||e===i||Cd(e),s===l||c<n-l?0:(i+(o?r:-r))/((o?n:s)-t)*1e3}}}function M(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e}function N(e){var t=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(r)?t:r}function O(){(Ae=Ce.core.globals().ScrollTrigger)&&Ae.core&&function _integrate(){var e=Ae.core,r=e.bridge||{},t=e._scrollers,n=e._proxies;t.push.apply(t,Ie),n.push.apply(n,Le),Ie=t,Le=n,i=function _bridge(e,t){return r[e](t)}}()}function P(e){return Ce=e||r(),!Te&&Ce&&"undefined"!=typeof document&&document.body&&(Se=window,Pe=(ke=document).documentElement,Me=ke.body,t=[Se,ke,Pe,Me],Ce.utils.clamp,Be=Ce.core.context||function(){},Oe="onpointerenter"in Me?"pointer":"mouse",Ee=k.isTouch=Se.matchMedia&&Se.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Se||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints?2:0,Re=k.eventTypes=("ontouchstart"in Pe?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pe?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return o=0},500),O(),Te=1),Te}var Ce,Te,Se,ke,Pe,Me,Ee,Oe,Ae,t,De,Re,Be,o=1,qe=[],Ie=[],Le=[],ze=Date.now,i=function _bridge(e,t){return t},n="scrollLeft",a="scrollTop",Ye={s:n,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:G(function(e){return arguments.length?Se.scrollTo(e,Fe.sc()):Se.pageXOffset||ke[n]||Pe[n]||Me[n]||0})},Fe={s:a,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ye,sc:G(function(e){return arguments.length?Se.scrollTo(Ye.sc(),e):Se.pageYOffset||ke[a]||Pe[a]||Me[a]||0})};Ye.op=Fe,Ie.cache=0;var k=(Observer.prototype.init=function init(e){Te||P(Ce)||console.warn("Please gsap.registerPlugin(Observer)"),Ae||O();var o=e.tolerance,a=e.dragMinimum,t=e.type,i=e.target,r=e.lineHeight,n=e.debounce,s=e.preventDefault,l=e.onStop,c=e.onStopDelay,u=e.ignore,f=e.wheelSpeed,d=e.event,p=e.onDragStart,g=e.onDragEnd,h=e.onDrag,v=e.onPress,b=e.onRelease,m=e.onRight,y=e.onLeft,x=e.onUp,w=e.onDown,_=e.onChangeX,T=e.onChangeY,S=e.onChange,k=e.onToggleX,E=e.onToggleY,D=e.onHover,R=e.onHoverEnd,q=e.onMove,I=e.ignoreCheck,z=e.isNormalizer,Y=e.onGestureStart,H=e.onGestureEnd,X=e.onWheel,W=e.onEnable,V=e.onDisable,U=e.onClick,j=e.scrollSpeed,G=e.capture,Q=e.allowClicks,Z=e.lockAxis,$=e.onLockAxis;function cf(){return xe=ze()}function df(e,t){return(se.event=e)&&u&&~u.indexOf(e.target)||t&&he&&"touch"!==e.pointerType||I&&I(e,t)}function ff(){var e=se.deltaX=N(me),t=se.deltaY=N(ye),r=Math.abs(e)>=o,n=Math.abs(t)>=o;S&&(r||n)&&S(se,e,t,me,ye),r&&(m&&0<se.deltaX&&m(se),y&&se.deltaX<0&&y(se),_&&_(se),k&&se.deltaX<0!=le<0&&k(se),le=se.deltaX,me[0]=me[1]=me[2]=0),n&&(w&&0<se.deltaY&&w(se),x&&se.deltaY<0&&x(se),T&&T(se),E&&se.deltaY<0!=ce<0&&E(se),ce=se.deltaY,ye[0]=ye[1]=ye[2]=0),(ne||re)&&(q&&q(se),re&&(h(se),re=!1),ne=!1),ie&&!(ie=!1)&&$&&$(se),oe&&(X(se),oe=!1),ee=0}function gf(e,t,r){me[r]+=e,ye[r]+=t,se._vx.update(e),se._vy.update(t),n?ee=ee||requestAnimationFrame(ff):ff()}function hf(e,t){Z&&!ae&&(se.axis=ae=Math.abs(e)>Math.abs(t)?"x":"y",ie=!0),"y"!==ae&&(me[2]+=e,se._vx.update(e,!0)),"x"!==ae&&(ye[2]+=t,se._vy.update(t,!0)),n?ee=ee||requestAnimationFrame(ff):ff()}function jf(e){if(!df(e,1)){var t=(e=M(e,s)).clientX,r=e.clientY,n=t-se.x,o=r-se.y,i=se.isDragging;se.x=t,se.y=r,(i||Math.abs(se.startX-t)>=a||Math.abs(se.startY-r)>=a)&&(h&&(re=!0),i||(se.isDragging=!0),hf(n,o),i||p&&p(se))}}function mf(e){return e.touches&&1<e.touches.length&&(se.isGesturing=!0)&&Y(e,se.isDragging)}function nf(){return(se.isGesturing=!1)||H(se)}function of(e){if(!df(e)){var t=fe(),r=de();gf((t-pe)*j,(r-ge)*j,1),pe=t,ge=r,l&&te.restart(!0)}}function pf(e){if(!df(e)){e=M(e,s),X&&(oe=!0);var t=(1===e.deltaMode?r:2===e.deltaMode?Se.innerHeight:1)*f;gf(e.deltaX*t,e.deltaY*t,0),l&&!z&&te.restart(!0)}}function qf(e){if(!df(e)){var t=e.clientX,r=e.clientY,n=t-se.x,o=r-se.y;se.x=t,se.y=r,ne=!0,l&&te.restart(!0),(n||o)&&hf(n,o)}}function rf(e){se.event=e,D(se)}function sf(e){se.event=e,R(se)}function tf(e){return df(e)||M(e,s)&&U(se)}this.target=i=J(i)||Pe,this.vars=e,u=u&&Ce.utils.toArray(u),o=o||1e-9,a=a||0,f=f||1,j=j||1,t=t||"wheel,touch,pointer",n=!1!==n,r=r||parseFloat(Se.getComputedStyle(Me).lineHeight)||22;var ee,te,re,ne,oe,ie,ae,se=this,le=0,ce=0,ue=e.passive||!s,fe=K(i,Ye),de=K(i,Fe),pe=fe(),ge=de(),he=~t.indexOf("touch")&&!~t.indexOf("pointer")&&"pointerdown"===Re[0],ve=A(i),be=i.ownerDocument||ke,me=[0,0,0],ye=[0,0,0],xe=0,we=se.onPress=function(e){df(e,1)||e&&e.button||(se.axis=ae=null,te.pause(),se.isPressed=!0,e=M(e),le=ce=0,se.startX=se.x=e.clientX,se.startY=se.y=e.clientY,se._vx.reset(),se._vy.reset(),B(z?i:be,Re[1],jf,ue,!0),se.deltaX=se.deltaY=0,v&&v(se))},_e=se.onRelease=function(t){if(!df(t,1)){C(z?i:be,Re[1],jf,!0);var e=!isNaN(se.y-se.startY),r=se.isDragging,n=r&&(3<Math.abs(se.x-se.startX)||3<Math.abs(se.y-se.startY)),o=M(t);!n&&e&&(se._vx.reset(),se._vy.reset(),s&&Q&&Ce.delayedCall(.08,function(){if(300<ze()-xe&&!t.defaultPrevented)if(t.target.click)t.target.click();else if(be.createEvent){var e=be.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,Se,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(e)}})),se.isDragging=se.isGesturing=se.isPressed=!1,l&&r&&!z&&te.restart(!0),g&&r&&g(se),b&&b(se,n)}};te=se._dc=Ce.delayedCall(c||.25,function onStopFunc(){se._vx.reset(),se._vy.reset(),te.pause(),l&&l(se)}).pause(),se.deltaX=se.deltaY=0,se._vx=L(0,50,!0),se._vy=L(0,50,!0),se.scrollX=fe,se.scrollY=de,se.isDragging=se.isGesturing=se.isPressed=!1,Be(this),se.enable=function(e){return se.isEnabled||(B(ve?be:i,"scroll",F),0<=t.indexOf("scroll")&&B(ve?be:i,"scroll",of,ue,G),0<=t.indexOf("wheel")&&B(i,"wheel",pf,ue,G),(0<=t.indexOf("touch")&&Ee||0<=t.indexOf("pointer"))&&(B(i,Re[0],we,ue,G),B(be,Re[2],_e),B(be,Re[3],_e),Q&&B(i,"click",cf,!0,!0),U&&B(i,"click",tf),Y&&B(be,"gesturestart",mf),H&&B(be,"gestureend",nf),D&&B(i,Oe+"enter",rf),R&&B(i,Oe+"leave",sf),q&&B(i,Oe+"move",qf)),se.isEnabled=!0,e&&e.type&&we(e),W&&W(se)),se},se.disable=function(){se.isEnabled&&(qe.filter(function(e){return e!==se&&A(e.target)}).length||C(ve?be:i,"scroll",F),se.isPressed&&(se._vx.reset(),se._vy.reset(),C(z?i:be,Re[1],jf,!0)),C(ve?be:i,"scroll",of,G),C(i,"wheel",pf,G),C(i,Re[0],we,G),C(be,Re[2],_e),C(be,Re[3],_e),C(i,"click",cf,!0),C(i,"click",tf),C(be,"gesturestart",mf),C(be,"gestureend",nf),C(i,Oe+"enter",rf),C(i,Oe+"leave",sf),C(i,Oe+"move",qf),se.isEnabled=se.isPressed=se.isDragging=!1,V&&V(se))},se.kill=se.revert=function(){se.disable();var e=qe.indexOf(se);0<=e&&qe.splice(e,1),De===se&&(De=0)},qe.push(se),z&&A(i)&&(De=se),se.enable(d)},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Observer,[{key:"velocityX",get:function get(){return this._vx.getVelocity()}},{key:"velocityY",get:function get(){return this._vy.getVelocity()}}]),Observer);function Observer(e){this.init(e)}k.version="3.12.5",k.create=function(e){return new k(e)},k.register=P,k.getAll=function(){return qe.slice()},k.getById=function(t){return qe.filter(function(e){return e.vars.id===t})[0]},r()&&Ce.registerPlugin(k);function Ca(e,t,r){var n=ct(e)&&("clamp("===e.substr(0,6)||-1<e.indexOf("max"));return(r["_"+t+"Clamp"]=n)?e.substr(6,e.length-7):e}function Da(e,t){return!t||ct(e)&&"clamp("===e.substr(0,6)?e:"clamp("+e+")"}function Fa(){return Ge=1}function Ga(){return Ge=0}function Ha(e){return e}function Ia(e){return Math.round(1e5*e)/1e5||0}function Ja(){return"undefined"!=typeof window}function Ka(){return He||Ja()&&(He=window.gsap)&&He.registerPlugin&&He}function La(e){return!!~l.indexOf(e)}function Ma(e){return("Height"===e?T:Ne["inner"+e])||Je["client"+e]||We["client"+e]}function Na(e){return z(e,"getBoundingClientRect")||(La(e)?function(){return Ot.width=Ne.innerWidth,Ot.height=T,Ot}:function(){return wt(e)})}function Qa(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return Math.max(0,(r="scroll"+n)&&(i=z(e,r))?i()-Na(e)()[o]:La(e)?(Je[r]||We[r])-Ma(n):e[r]-e["offset"+n])}function Ra(e,t){for(var r=0;r<g.length;r+=3)t&&!~t.indexOf(g[r+1])||e(g[r],g[r+1],g[r+2])}function Ta(e){return"function"==typeof e}function Ua(e){return"number"==typeof e}function Va(e){return"object"==typeof e}function Wa(e,t,r){return e&&e.progress(t?0:1)&&r&&e.pause()}function Xa(e,t){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e)}):t(e);r&&r.totalTime&&(e.callbackAnimation=r)}}function mb(e){return Ne.getComputedStyle(e)}function ob(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function qb(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function rb(e){var t,r=[],n=e.labels,o=e.duration();for(t in n)r.push(n[t]/o);return r}function tb(o){var i=He.utils.snap(o),a=Array.isArray(o)&&o.slice(0).sort(function(e,t){return e-t});return a?function(e,t,r){var n;if(void 0===r&&(r=.001),!t)return i(e);if(0<t){for(e-=r,n=0;n<a.length;n++)if(a[n]>=e)return a[n];return a[n-1]}for(n=a.length,e+=r;n--;)if(a[n]<=e)return a[n];return a[0]}:function(e,t,r){void 0===r&&(r=.001);var n=i(e);return!t||Math.abs(n-e)<r||n-e<0==t<0?n:i(t<0?e-o:e+o)}}function vb(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function wb(e,t,r,n,o){return e.addEventListener(t,r,{passive:!n,capture:!!o})}function xb(e,t,r,n){return e.removeEventListener(t,r,!!n)}function yb(e,t,r){(r=r&&r.wheelHandler)&&(e(t,"wheel",r),e(t,"touchmove",r))}function Cb(e,t){if(ct(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in H?H[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function Db(e,t,r,n,o,i,a,s){var l=o.startColor,c=o.endColor,u=o.fontSize,f=o.indent,d=o.fontWeight,p=Xe.createElement("div"),g=La(r)||"fixed"===z(r,"pinType"),h=-1!==e.indexOf("scroller"),v=g?We:r,b=-1!==e.indexOf("start"),m=b?l:c,y="border-color:"+m+";font-size:"+u+";color:"+m+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((h||s)&&g?"fixed;":"absolute;"),!h&&!s&&g||(y+=(n===Fe?q:I)+":"+(i+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=b,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||0===t?e+"-"+t:e,v.children[0]?v.insertBefore(p,v.children[0]):v.appendChild(p),p._offset=p["offset"+n.op.d2],X(p,0,n,b),p}function Ib(){return 34<at()-st&&(D=D||requestAnimationFrame(Z))}function Jb(){v&&v.isPressed&&!(v.startX>We.clientWidth)||(Ie.cache++,v?D=D||requestAnimationFrame(Z):Z(),st||U("scrollStart"),st=at())}function Kb(){y=Ne.innerWidth,m=Ne.innerHeight}function Lb(){Ie.cache++,je||h||Xe.fullscreenElement||Xe.webkitFullscreenElement||b&&y===Ne.innerWidth&&!(Math.abs(Ne.innerHeight-m)>.25*Ne.innerHeight)||c.restart(!0)}function Ob(){return xb(ne,"scrollEnd",Ob)||Pt(!0)}function Rb(e){for(var t=0;t<j.length;t+=5)(!e||j[t+4]&&j[t+4].query===e)&&(j[t].style.cssText=j[t+1],j[t].getBBox&&j[t].setAttribute("transform",j[t+2]||""),j[t+3].uncache=1)}function Sb(e,t){var r;for(Qe=0;Qe<Tt.length;Qe++)!(r=Tt[Qe])||t&&r._ctx!==t||(e?r.kill(1):r.revert(!0,!0));S=!0,t&&Rb(t),t||U("revert")}function Tb(e,t){Ie.cache++,!t&&rt||Ie.forEach(function(e){return Ta(e)&&e.cacheID++&&(e.rec=0)}),ct(e)&&(Ne.history.scrollRestoration=w=e)}function Yb(){We.appendChild(_),T=!v&&_.offsetHeight||Ne.innerHeight,We.removeChild(_)}function Zb(t){return Ve(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})}function gc(e,t,r,n){if(!e._gsap.swappedIn){for(var o,i=$.length,a=t.style,s=e.style;i--;)a[o=$[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[I]=s[q]="auto",a.flexBasis=r.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ft]=qb(e,Ye)+xt,a[dt]=qb(e,Fe)+xt,a[bt]=s[mt]=s.top=s.left="0",Et(n),s[ft]=s.maxWidth=r[ft],s[dt]=s.maxHeight=r[dt],s[bt]=r[bt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}}function jc(e){for(var t=ee.length,r=e.style,n=[],o=0;o<t;o++)n.push(ee[o],r[ee[o]]);return n.t=e,n}function mc(e,t,r,n,o,i,a,s,l,c,u,f,d,p){Ta(e)&&(e=e(s)),ct(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?Cb("0"+e.substr(3),r):0));var g,h,v,b=d?d.time():0;if(d&&d.seek(0),isNaN(e)||(e=+e),Ua(e))d&&(e=He.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&X(a,r,n,!0);else{Ta(t)&&(t=t(s));var m,y,x,w,_=(e||"0").split(" ");v=J(t,s)||We,(m=wt(v)||{})&&(m.left||m.top)||"none"!==mb(v).display||(w=v.style.display,v.style.display="block",m=wt(v),w?v.style.display=w:v.style.removeProperty("display")),y=Cb(_[0],m[n.d]),x=Cb(_[1]||"0",r),e=m[n.p]-l[n.p]-c+y+o-x,a&&X(a,x,n,r-x<20||a._isStart&&20<x),r-=r-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),i){var C=e+r,T=i._isStart;g="scroll"+n.d2,X(i,C,n,T&&20<C||!T&&(u?Math.max(We[g],Je[g]):i.parentNode[g])<=C+1),u&&(l=wt(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+xt))}return d&&v&&(g=wt(v),d.seek(f),h=wt(v),d._caScrollDist=g[n.p]-h[n.p],e=e/d._caScrollDist*f),d&&d.seek(b),d?e:Math.round(e)}function oc(e,t,r,n){if(e.parentNode!==t){var o,i,a=e.style;if(t===We){for(o in e._stOrig=a.cssText,i=mb(e))+o||re.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=r,a.left=n}else a.cssText=e._stOrig;He.core.getCache(e).uncache=1,t.appendChild(e)}}function pc(r,e,n){var o=e,i=o;return function(e){var t=Math.round(r());return t!==o&&t!==i&&3<Math.abs(t-o)&&3<Math.abs(t-i)&&(e=t,n&&n()),i=o,o=e}}function qc(e,t,r){var n={};n[t.p]="+="+r,He.set(e,n)}function rc(c,e){function Ck(e,t,r,n,o){var i=Ck.tween,a=t.onComplete,s={};r=r||u();var l=pc(u,r,function(){i.kill(),Ck.tween=0});return o=n&&o||0,n=n||e-r,i&&i.kill(),t[f]=e,t.inherit=!1,(t.modifiers=s)[f]=function(){return l(r+n*i.ratio+o*i.ratio*i.ratio)},t.onUpdate=function(){Ie.cache++,Ck.tween&&Z()},t.onComplete=function(){Ck.tween=0,a&&a.call(i)},i=Ck.tween=He.to(c,t)}var u=K(c,e),f="_scroll"+e.p2;return(c[f]=u).wheelHandler=function(){return Ck.tween&&Ck.tween.kill()&&(Ck.tween=0)},wb(c,"wheel",u.wheelHandler),ne.isTouch&&wb(c,"touchmove",u.wheelHandler),Ck}var He,s,Ne,Xe,Je,We,l,c,Ve,Ue,Ke,u,je,Ge,f,Qe,d,p,g,Ze,$e,h,v,b,m,y,E,x,w,_,T,S,et,tt,D,rt,nt,ot,it=1,at=Date.now,R=at(),st=0,lt=0,ct=function _isString(e){return"string"==typeof e},ut=Math.abs,q="right",I="bottom",ft="width",dt="height",pt="Right",gt="Left",ht="Top",vt="Bottom",bt="padding",mt="margin",yt="Width",Y="Height",xt="px",wt=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==mb(e)[f]&&He.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},_t={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ct={toggleActions:"play",anticipatePin:0},H={top:0,left:0,center:.5,bottom:1,right:1},X=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?"1px":0,o["border"+i+yt]=1,o["border"+a+yt]=0,o[r.p]=t+"px",He.set(e,o)},Tt=[],St={},W={},V=[],U=function _dispatch(e){return W[e]&&W[e].map(function(e){return e()})||V},j=[],kt=0,Pt=function _refreshAll(e,t){if(!st||e||S){Yb(),rt=ne.isRefreshing=!0,Ie.forEach(function(e){return Ta(e)&&++e.cacheID&&(e.rec=e())});var r=U("refreshInit");Ze&&ne.sort(),t||Sb(),Ie.forEach(function(e){Ta(e)&&(e.smooth&&(e.target.style.scrollBehavior="auto"),e(0))}),Tt.slice(0).forEach(function(e){return e.refresh()}),S=!1,Tt.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?"offsetWidth":"offsetHeight",r=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-r),e.refresh()}}),et=1,Zb(!0),Tt.forEach(function(e){var t=Qa(e.scroller,e._dir),r="max"===e.vars.end||e._endClamp&&e.end>t,n=e._startClamp&&e.start>=t;(r||n)&&e.setPositions(n?t-1:e.start,r?Math.max(n?t:e.start+1,t):e.end,!0)}),Zb(!1),et=0,r.forEach(function(e){return e&&e.render&&e.render(-1)}),Ie.forEach(function(e){Ta(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior="smooth"}),e.rec&&e(e.rec))}),Tb(w,1),c.pause(),kt++,Z(rt=2),Tt.forEach(function(e){return Ta(e.vars.onRefresh)&&e.vars.onRefresh(e)}),rt=ne.isRefreshing=!1,U("refresh")}else wb(ne,"scrollEnd",Ob)},Q=0,Mt=1,Z=function _updateAll(e){if(2===e||!rt&&!S){ne.isUpdating=!0,ot&&ot.update(0);var t=Tt.length,r=at(),n=50<=r-R,o=t&&Tt[0].scroll();if(Mt=o<Q?-1:1,rt||(Q=o),n&&(st&&!Ge&&200<r-st&&(st=0,U("scrollEnd")),Ke=R,R=r),Mt<0){for(Qe=t;0<Qe--;)Tt[Qe]&&Tt[Qe].update(0,n);Mt=1}else for(Qe=0;Qe<t;Qe++)Tt[Qe]&&Tt[Qe].update(0,n);ne.isUpdating=!1}D=0},$=["left","top",I,q,mt+vt,mt+pt,mt+ht,mt+gt,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ee=$.concat([ft,dt,"boxSizing","max"+yt,"max"+Y,"position",mt,bt,bt+ht,bt+pt,bt+vt,bt+gt]),te=/([A-Z])/g,Et=function _setState(e){if(e){var t,r,n=e.t.style,o=e.length,i=0;for((e.t._gsap||He.core.getCache(e.t)).uncache=1;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(te,"-$1").toLowerCase())}},Ot={left:0,top:0},re=/(webkit|moz|length|cssText|inset)/i,ne=(ScrollTrigger.prototype.init=function init(E,O){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),lt){var A,n,p,D,R,B,q,I,L,Y,F,e,H,N,X,W,V,U,t,j,b,G,Q,m,Z,y,$,x,r,w,_,ee,o,g,te,re,ne,C,i,T=(E=ob(ct(E)||Ua(E)||E.nodeType?{trigger:E}:E,Ct)).onUpdate,S=E.toggleClass,a=E.id,k=E.onToggle,oe=E.onRefresh,P=E.scrub,ie=E.trigger,ae=E.pin,se=E.pinSpacing,le=E.invalidateOnRefresh,M=E.anticipatePin,s=E.onScrubComplete,h=E.onSnapComplete,ce=E.once,ue=E.snap,fe=E.pinReparent,l=E.pinSpacer,de=E.containerAnimation,pe=E.fastScrollEnd,ge=E.preventOverlaps,he=E.horizontal||E.containerAnimation&&!1!==E.horizontal?Ye:Fe,ve=!P&&0!==P,be=J(E.scroller||Ne),c=He.core.getCache(be),me=La(be),ye="fixed"===("pinType"in E?E.pinType:z(be,"pinType")||me&&"fixed"),xe=[E.onEnter,E.onLeave,E.onEnterBack,E.onLeaveBack],we=ve&&E.toggleActions.split(" "),_e="markers"in E?E.markers:Ct.markers,Ce=me?0:parseFloat(mb(be)["border"+he.p2+yt])||0,Te=this,Se=E.onRefreshInit&&function(){return E.onRefreshInit(Te)},ke=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=z(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?Ma(o):e["client"+o])||0}}(be,me,he),Pe=function _getOffsetsFunc(e,t){return!t||~Le.indexOf(e)?Na(e):function(){return Ot}}(be,me),Me=0,Ee=0,Oe=0,Ae=K(be,he);if(Te._startClamp=Te._endClamp=!1,Te._dir=he,M*=45,Te.scroller=be,Te.scroll=de?de.time.bind(de):Ae,D=Ae(),Te.vars=E,O=O||E.animation,"refreshPriority"in E&&(Ze=1,-9999===E.refreshPriority&&(ot=Te)),c.tweenScroll=c.tweenScroll||{top:rc(be,Fe),left:rc(be,Ye)},Te.tweenTo=A=c.tweenScroll[he.p],Te.scrubDuration=function(e){(o=Ua(e)&&e)?ee?ee.duration(e):ee=He.to(O,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:o,paused:!0,onComplete:function onComplete(){return s&&s(Te)}}):(ee&&ee.progress(1).kill(),ee=0)},O&&(O.vars.lazy=!1,O._initted&&!Te.isReverted||!1!==O.vars.immediateRender&&!1!==E.immediateRender&&O.duration()&&O.render(0,!0,!0),Te.animation=O.pause(),(O.scrollTrigger=Te).scrubDuration(P),w=0,a=a||O.vars.id),ue&&(Va(ue)&&!ue.push||(ue={snapTo:ue}),"scrollBehavior"in We.style&&He.set(me?[We,Je]:be,{scrollBehavior:"auto"}),Ie.forEach(function(e){return Ta(e)&&e.target===(me?Xe.scrollingElement||Je:be)&&(e.smooth=!1)}),p=Ta(ue.snapTo)?ue.snapTo:"labels"===ue.snapTo?function _getClosestLabel(t){return function(e){return He.utils.snap(rb(t),e)}}(O):"labelsDirectional"===ue.snapTo?function _getLabelAtDirection(r){return function(e,t){return tb(rb(r))(e,t.direction)}}(O):!1!==ue.directional?function(e,t){return tb(ue.snapTo)(e,at()-Ee<500?0:t.direction)}:He.utils.snap(ue.snapTo),g=ue.duration||{min:.1,max:2},g=Va(g)?Ue(g.min,g.max):Ue(g,g),te=He.delayedCall(ue.delay||o/2||.1,function(){var e=Ae(),t=at()-Ee<500,r=A.tween;if(!(t||Math.abs(Te.getVelocity())<10)||r||Ge||Me===e)Te.isActive&&Me!==e&&te.restart(!0);else{var n,o,i=(e-B)/N,a=O&&!ve?O.totalProgress():i,s=t?0:(a-_)/(at()-Ke)*1e3||0,l=He.utils.clamp(-i,1-i,ut(s/2)*s/.185),c=i+(!1===ue.inertia?0:l),u=ue.onStart,f=ue.onInterrupt,d=ue.onComplete;if(n=p(c,Te),Ua(n)||(n=c),o=Math.round(B+n*N),e<=q&&B<=e&&o!==e){if(r&&!r._initted&&r.data<=ut(o-e))return;!1===ue.inertia&&(l=n-i),A(o,{duration:g(ut(.185*Math.max(ut(c-a),ut(n-a))/s/.05||0)),ease:ue.ease||"power3",data:ut(o-e),onInterrupt:function onInterrupt(){return te.restart(!0)&&f&&f(Te)},onComplete:function onComplete(){Te.update(),Me=Ae(),O&&(ee?ee.resetTo("totalProgress",n,O._tTime/O._tDur):O.progress(n)),w=_=O&&!ve?O.totalProgress():Te.progress,h&&h(Te),d&&d(Te)}},e,l*N,o-e-l*N),u&&u(Te,A.tween)}}}).pause()),a&&(St[a]=Te),i=(i=(ie=Te.trigger=J(ie||!0!==ae&&ae))&&ie._gsap&&ie._gsap.stRevert)&&i(Te),ae=!0===ae?ie:J(ae),ct(S)&&(S={targets:ie,className:S}),ae&&(!1===se||se===mt||(se=!(!se&&ae.parentNode&&ae.parentNode.style&&"flex"===mb(ae.parentNode).display)&&bt),Te.pin=ae,(n=He.core.getCache(ae)).spacer?X=n.pinState:(l&&((l=J(l))&&!l.nodeType&&(l=l.current||l.nativeElement),n.spacerIsNative=!!l,l&&(n.spacerState=jc(l))),n.spacer=U=l||Xe.createElement("div"),U.classList.add("pin-spacer"),a&&U.classList.add("pin-spacer-"+a),n.pinState=X=jc(ae)),!1!==E.force3D&&He.set(ae,{force3D:!0}),Te.spacer=U=n.spacer,r=mb(ae),m=r[se+he.os2],j=He.getProperty(ae),b=He.quickSetter(ae,he.a,xt),gc(ae,U,r),V=jc(ae)),_e){e=Va(_e)?ob(_e,_t):_t,Y=Db("scroller-start",a,be,he,e,0),F=Db("scroller-end",a,be,he,e,0,Y),t=Y["offset"+he.op.d2];var u=J(z(be,"content")||be);I=this.markerStart=Db("start",a,u,he,e,t,0,de),L=this.markerEnd=Db("end",a,u,he,e,t,0,de),de&&(C=He.quickSetter([I,L],he.a,xt)),ye||Le.length&&!0===z(be,"fixedMarkers")||(function _makePositionable(e){var t=mb(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"}(me?We:be),He.set([Y,F],{force3D:!0}),y=He.quickSetter(Y,he.a,xt),x=He.quickSetter(F,he.a,xt))}if(de){var f=de.vars.onUpdate,d=de.vars.onUpdateParams;de.eventCallback("onUpdate",function(){Te.update(0,0,1),f&&f.apply(de,d||[])})}if(Te.previous=function(){return Tt[Tt.indexOf(Te)-1]},Te.next=function(){return Tt[Tt.indexOf(Te)+1]},Te.revert=function(e,t){if(!t)return Te.kill(!0);var r=!1!==e||!Te.enabled,n=je;r!==Te.isReverted&&(r&&(re=Math.max(Ae(),Te.scroll.rec||0),Oe=Te.progress,ne=O&&O.progress()),I&&[I,L,Y,F].forEach(function(e){return e.style.display=r?"none":"block"}),r&&(je=Te).update(r),!ae||fe&&Te.isActive||(r?function _swapPinOut(e,t,r){Et(r);var n=e._gsap;if(n.spacerIsNative)Et(n.spacerState);else if(e._gsap.swappedIn){var o=t.parentNode;o&&(o.insertBefore(e,t),o.removeChild(t))}e._gsap.swappedIn=!1}(ae,U,X):gc(ae,U,mb(ae),Z)),r||Te.update(r),je=n,Te.isReverted=r)},Te.refresh=function(e,t,r,n){if(!je&&Te.enabled||t)if(ae&&e&&st)wb(ScrollTrigger,"scrollEnd",Ob);else{!rt&&Se&&Se(Te),je=Te,A.tween&&!r&&(A.tween.kill(),A.tween=0),ee&&ee.pause(),le&&O&&O.revert({kill:!1}).invalidate(),Te.isReverted||Te.revert(!0,!0),Te._subPinOffset=!1;var o,i,a,s,l,c,u,f,d,p,g,h,v,b=ke(),m=Pe(),y=de?de.duration():Qa(be,he),x=N<=.01,w=0,_=n||0,C=Va(r)?r.end:E.end,T=E.endTrigger||ie,S=Va(r)?r.start:E.start||(0!==E.start&&ie?ae?"0 0":"0 100%":0),k=Te.pinnedContainer=E.pinnedContainer&&J(E.pinnedContainer,Te),P=ie&&Math.max(0,Tt.indexOf(Te))||0,M=P;for(_e&&Va(r)&&(h=He.getProperty(Y,he.p),v=He.getProperty(F,he.p));M--;)(c=Tt[M]).end||c.refresh(0,1)||(je=Te),!(u=c.pin)||u!==ie&&u!==ae&&u!==k||c.isReverted||((p=p||[]).unshift(c),c.revert(!0,!0)),c!==Tt[M]&&(P--,M--);for(Ta(S)&&(S=S(Te)),S=Ca(S,"start",Te),B=mc(S,ie,b,he,Ae(),I,Y,Te,m,Ce,ye,y,de,Te._startClamp&&"_startClamp")||(ae?-.001:0),Ta(C)&&(C=C(Te)),ct(C)&&!C.indexOf("+=")&&(~C.indexOf(" ")?C=(ct(S)?S.split(" ")[0]:"")+C:(w=Cb(C.substr(2),b),C=ct(S)?S:(de?He.utils.mapRange(0,de.duration(),de.scrollTrigger.start,de.scrollTrigger.end,B):B)+w,T=ie)),C=Ca(C,"end",Te),q=Math.max(B,mc(C||(T?"100% 0":y),T,b,he,Ae()+w,L,F,Te,m,Ce,ye,y,de,Te._endClamp&&"_endClamp"))||-.001,w=0,M=P;M--;)(u=(c=Tt[M]).pin)&&c.start-c._pinPush<=B&&!de&&0<c.end&&(o=c.end-(Te._startClamp?Math.max(0,c.start):c.start),(u===ie&&c.start-c._pinPush<B||u===k)&&isNaN(S)&&(w+=o*(1-c.progress)),u===ae&&(_+=o));if(B+=w,q+=w,Te._startClamp&&(Te._startClamp+=w),Te._endClamp&&!rt&&(Te._endClamp=q||-.001,q=Math.min(q,Qa(be,he))),N=q-B||(B-=.01)&&.001,x&&(Oe=He.utils.clamp(0,1,He.utils.normalize(B,q,re))),Te._pinPush=_,I&&w&&((o={})[he.a]="+="+w,k&&(o[he.p]="-="+Ae()),He.set([I,L],o)),!ae||et&&Te.end>=Qa(be,he)){if(ie&&Ae()&&!de)for(i=ie.parentNode;i&&i!==We;)i._pinOffset&&(B-=i._pinOffset,q-=i._pinOffset),i=i.parentNode}else o=mb(ae),s=he===Fe,a=Ae(),G=parseFloat(j(he.a))+_,!y&&1<q&&(g={style:g=(me?Xe.scrollingElement||Je:be).style,value:g["overflow"+he.a.toUpperCase()]},me&&"scroll"!==mb(We)["overflow"+he.a.toUpperCase()]&&(g.style["overflow"+he.a.toUpperCase()]="scroll")),gc(ae,U,o),V=jc(ae),i=wt(ae,!0),f=ye&&K(be,s?Ye:Fe)(),se?((Z=[se+he.os2,N+_+xt]).t=U,(M=se===bt?qb(ae,he)+N+_:0)&&(Z.push(he.d,M+xt),"auto"!==U.style.flexBasis&&(U.style.flexBasis=M+xt)),Et(Z),k&&Tt.forEach(function(e){e.pin===k&&!1!==e.vars.pinSpacing&&(e._subPinOffset=!0)}),ye&&Ae(re)):(M=qb(ae,he))&&"auto"!==U.style.flexBasis&&(U.style.flexBasis=M+xt),ye&&((l={top:i.top+(s?a-B:f)+xt,left:i.left+(s?f:a-B)+xt,boxSizing:"border-box",position:"fixed"})[ft]=l.maxWidth=Math.ceil(i.width)+xt,l[dt]=l.maxHeight=Math.ceil(i.height)+xt,l[mt]=l[mt+ht]=l[mt+pt]=l[mt+vt]=l[mt+gt]="0",l[bt]=o[bt],l[bt+ht]=o[bt+ht],l[bt+pt]=o[bt+pt],l[bt+vt]=o[bt+vt],l[bt+gt]=o[bt+gt],W=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(X,l,fe),rt&&Ae(0)),O?(d=O._initted,$e(1),O.render(O.duration(),!0,!0),Q=j(he.a)-G+N+_,$=1<Math.abs(N-Q),ye&&$&&W.splice(W.length-2,2),O.render(0,!0,!0),d||O.invalidate(!0),O.parent||O.totalTime(O.totalTime()),$e(0)):Q=N,g&&(g.value?g.style["overflow"+he.a.toUpperCase()]=g.value:g.style.removeProperty("overflow-"+he.a));p&&p.forEach(function(e){return e.revert(!1,!0)}),Te.start=B,Te.end=q,D=R=rt?re:Ae(),de||rt||(D<re&&Ae(re),Te.scroll.rec=0),Te.revert(!1,!0),Ee=at(),te&&(Me=-1,te.restart(!0)),je=0,O&&ve&&(O._initted||ne)&&O.progress()!==ne&&O.progress(ne||0,!0).render(O.time(),!0,!0),(x||Oe!==Te.progress||de||le)&&(O&&!ve&&O.totalProgress(de&&B<-.001&&!Oe?He.utils.normalize(B,q,0):Oe,!0),Te.progress=x||(D-B)/N===Oe?0:Oe),ae&&se&&(U._pinOffset=Math.round(Te.progress*Q)),ee&&ee.invalidate(),isNaN(h)||(h-=He.getProperty(Y,he.p),v-=He.getProperty(F,he.p),qc(Y,he,h),qc(I,he,h-(n||0)),qc(F,he,v),qc(L,he,v-(n||0))),x&&!rt&&Te.update(),!oe||rt||H||(H=!0,oe(Te),H=!1)}},Te.getVelocity=function(){return(Ae()-R)/(at()-Ke)*1e3||0},Te.endAnimation=function(){Wa(Te.callbackAnimation),O&&(ee?ee.progress(1):O.paused()?ve||Wa(O,Te.direction<0,1):Wa(O,O.reversed()))},Te.labelToScroll=function(e){return O&&O.labels&&(B||Te.refresh()||B)+O.labels[e]/O.duration()*N||0},Te.getTrailing=function(t){var e=Tt.indexOf(Te),r=0<Te.direction?Tt.slice(0,e).reverse():Tt.slice(e+1);return(ct(t)?r.filter(function(e){return e.vars.preventOverlaps===t}):r).filter(function(e){return 0<Te.direction?e.end<=B:e.start>=q})},Te.update=function(e,t,r){if(!de||r||e){var n,o,i,a,s,l,c,u=!0===rt?re:Te.scroll(),f=e?0:(u-B)/N,d=f<0?0:1<f?1:f||0,p=Te.progress;if(t&&(R=D,D=de?Ae():u,ue&&(_=w,w=O&&!ve?O.totalProgress():d)),M&&ae&&!je&&!it&&st&&(!d&&B<u+(u-R)/(at()-Ke)*M?d=1e-4:1===d&&q>u+(u-R)/(at()-Ke)*M&&(d=.9999)),d!==p&&Te.enabled){if(a=(s=(n=Te.isActive=!!d&&d<1)!=(!!p&&p<1))||!!d!=!!p,Te.direction=p<d?1:-1,Te.progress=d,a&&!je&&(o=d&&!p?0:1===d?1:1===p?2:3,ve&&(i=!s&&"none"!==we[o+1]&&we[o+1]||we[o],c=O&&("complete"===i||"reset"===i||i in O))),ge&&(s||c)&&(c||P||!O)&&(Ta(ge)?ge(Te):Te.getTrailing(ge).forEach(function(e){return e.endAnimation()})),ve||(!ee||je||it?O&&O.totalProgress(d,!(!je||!Ee&&!e)):(ee._dp._time-ee._start!==ee._time&&ee.render(ee._dp._time-ee._start),ee.resetTo?ee.resetTo("totalProgress",d,O._tTime/O._tDur):(ee.vars.totalProgress=d,ee.invalidate().restart()))),ae)if(e&&se&&(U.style[se+he.os2]=m),ye){if(a){if(l=!e&&p<d&&u<q+1&&u+1>=Qa(be,he),fe)if(e||!n&&!l)oc(ae,U);else{var g=wt(ae,!0),h=u-B;oc(ae,We,g.top+(he===Fe?h:0)+xt,g.left+(he===Fe?0:h)+xt)}Et(n||l?W:V),$&&d<1&&n||b(G+(1!==d||l?0:Q))}}else b(Ia(G+Q*d));!ue||A.tween||je||it||te.restart(!0),S&&(s||ce&&d&&(d<1||!tt))&&Ve(S.targets).forEach(function(e){return e.classList[n||ce?"add":"remove"](S.className)}),!T||ve||e||T(Te),a&&!je?(ve&&(c&&("complete"===i?O.pause().totalProgress(1):"reset"===i?O.restart(!0).pause():"restart"===i?O.restart(!0):O[i]()),T&&T(Te)),!s&&tt||(k&&s&&Xa(Te,k),xe[o]&&Xa(Te,xe[o]),ce&&(1===d?Te.kill(!1,1):xe[o]=0),s||xe[o=1===d?1:3]&&Xa(Te,xe[o])),pe&&!n&&Math.abs(Te.getVelocity())>(Ua(pe)?pe:2500)&&(Wa(Te.callbackAnimation),ee?ee.progress(1):Wa(O,"reverse"===i?1:!d,1))):ve&&T&&!je&&T(Te)}if(x){var v=de?u/de.duration()*(de._caScrollDist||0):u;y(v+(Y._isFlipped?1:0)),x(v)}C&&C(-u/de.duration()*(de._caScrollDist||0))}},Te.enable=function(e,t){Te.enabled||(Te.enabled=!0,wb(be,"resize",Lb),me||wb(be,"scroll",Jb),Se&&wb(ScrollTrigger,"refreshInit",Se),!1!==e&&(Te.progress=Oe=0,D=R=Me=Ae()),!1!==t&&Te.refresh())},Te.getTween=function(e){return e&&A?A.tween:ee},Te.setPositions=function(e,t,r,n){if(de){var o=de.scrollTrigger,i=de.duration(),a=o.end-o.start;e=o.start+a*e/i,t=o.start+a*t/i}Te.refresh(!1,!1,{start:Da(e,r&&!!Te._startClamp),end:Da(t,r&&!!Te._endClamp)},n),Te.update()},Te.adjustPinSpacing=function(e){if(Z&&e){var t=Z.indexOf(he.d)+1;Z[t]=parseFloat(Z[t])+e+xt,Z[1]=parseFloat(Z[1])+e+xt,Et(Z)}},Te.disable=function(e,t){if(Te.enabled&&(!1!==e&&Te.revert(!0,!0),Te.enabled=Te.isActive=!1,t||ee&&ee.pause(),re=0,n&&(n.uncache=1),Se&&xb(ScrollTrigger,"refreshInit",Se),te&&(te.pause(),A.tween&&A.tween.kill()&&(A.tween=0)),!me)){for(var r=Tt.length;r--;)if(Tt[r].scroller===be&&Tt[r]!==Te)return;xb(be,"resize",Lb),me||xb(be,"scroll",Jb)}},Te.kill=function(e,t){Te.disable(e,t),ee&&!t&&ee.kill(),a&&delete St[a];var r=Tt.indexOf(Te);0<=r&&Tt.splice(r,1),r===Qe&&0<Mt&&Qe--,r=0,Tt.forEach(function(e){return e.scroller===Te.scroller&&(r=1)}),r||rt||(Te.scroll.rec=0),O&&(O.scrollTrigger=null,e&&O.revert({kill:!1}),t||O.kill()),I&&[I,L,Y,F].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),ot===Te&&(ot=0),ae&&(n&&(n.uncache=1),r=0,Tt.forEach(function(e){return e.pin===ae&&r++}),r||(n.spacer=0)),E.onKill&&E.onKill(Te)},Tt.push(Te),Te.enable(!1,!1),i&&i(Te),O&&O.add&&!N){var v=Te.update;Te.update=function(){Te.update=v,B||q||Te.refresh()},He.delayedCall(.01,Te.update),N=.01,B=q=0}else Te.refresh();ae&&function _queueRefreshAll(){if(nt!==kt){var e=nt=kt;requestAnimationFrame(function(){return e===kt&&Pt(!0)})}}()}else this.update=this.refresh=this.kill=Ha},ScrollTrigger.register=function register(e){return s||(He=e||Ka(),Ja()&&window.document&&ScrollTrigger.enable(),s=lt),s},ScrollTrigger.defaults=function defaults(e){if(e)for(var t in e)Ct[t]=e[t];return Ct},ScrollTrigger.disable=function disable(t,r){lt=0,Tt.forEach(function(e){return e[r?"kill":"disable"](t)}),xb(Ne,"wheel",Jb),xb(Xe,"scroll",Jb),clearInterval(u),xb(Xe,"touchcancel",Ha),xb(We,"touchstart",Ha),vb(xb,Xe,"pointerdown,touchstart,mousedown",Fa),vb(xb,Xe,"pointerup,touchend,mouseup",Ga),c.kill(),Ra(xb);for(var e=0;e<Ie.length;e+=3)yb(xb,Ie[e],Ie[e+1]),yb(xb,Ie[e],Ie[e+2])},ScrollTrigger.enable=function enable(){if(Ne=window,Xe=document,Je=Xe.documentElement,We=Xe.body,He&&(Ve=He.utils.toArray,Ue=He.utils.clamp,x=He.core.context||Ha,$e=He.core.suppressOverwrites||Ha,w=Ne.history.scrollRestoration||"auto",Q=Ne.pageYOffset,He.core.globals("ScrollTrigger",ScrollTrigger),We)){lt=1,(_=document.createElement("div")).style.height="100vh",_.style.position="absolute",Yb(),function _rafBugFix(){return lt&&requestAnimationFrame(_rafBugFix)}(),k.register(He),ScrollTrigger.isTouch=k.isTouch,E=k.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),b=1===k.isTouch,wb(Ne,"wheel",Jb),l=[Ne,Xe,Je,We],He.matchMedia?(ScrollTrigger.matchMedia=function(e){var t,r=He.matchMedia();for(t in e)r.add(t,e[t]);return r},He.addEventListener("matchMediaInit",function(){return Sb()}),He.addEventListener("matchMediaRevert",function(){return Rb()}),He.addEventListener("matchMedia",function(){Pt(0,1),U("matchMedia")}),He.matchMedia("(orientation: portrait)",function(){return Kb(),Kb})):console.warn("Requires GSAP 3.11.0 or later"),Kb(),wb(Xe,"scroll",Jb);var e,t,r=We.style,n=r.borderTopStyle,o=He.core.Animation.prototype;for(o.revert||Object.defineProperty(o,"revert",{value:function value(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",e=wt(We),Fe.m=Math.round(e.top+Fe.sc())||0,Ye.m=Math.round(e.left+Ye.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),u=setInterval(Ib,250),He.delayedCall(.5,function(){return it=0}),wb(Xe,"touchcancel",Ha),wb(We,"touchstart",Ha),vb(wb,Xe,"pointerdown,touchstart,mousedown",Fa),vb(wb,Xe,"pointerup,touchend,mouseup",Ga),f=He.utils.checkPrefix("transform"),ee.push(f),s=at(),c=He.delayedCall(.2,Pt).pause(),g=[Xe,"visibilitychange",function(){var e=Ne.innerWidth,t=Ne.innerHeight;Xe.hidden?(d=e,p=t):d===e&&p===t||Lb()},Xe,"DOMContentLoaded",Pt,Ne,"load",Pt,Ne,"resize",Lb],Ra(wb),Tt.forEach(function(e){return e.enable(0,1)}),t=0;t<Ie.length;t+=3)yb(xb,Ie[t],Ie[t+1]),yb(xb,Ie[t],Ie[t+2])}},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(tt=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(u)||(u=t)&&setInterval(Ib,t),"ignoreMobileResize"in e&&(b=1===ScrollTrigger.isTouch&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(Ra(xb)||Ra(wb,e.autoRefreshEvents||"none"),h=-1===(e.autoRefreshEvents+"").indexOf("resize"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=J(e),n=Ie.indexOf(r),o=La(r);~n&&Ie.splice(n,o?6:2),t&&(o?Le.unshift(Ne,t,We,t,Je,t):Le.unshift(r,t))},ScrollTrigger.clearMatchMedia=function clearMatchMedia(t){Tt.forEach(function(e){return e._ctx&&e._ctx.query===t&&e._ctx.kill(!0,!0)})},ScrollTrigger.isInViewport=function isInViewport(e,t,r){var n=(ct(e)?J(e):e).getBoundingClientRect(),o=n[r?ft:dt]*t||0;return r?0<n.right-o&&n.left+o<Ne.innerWidth:0<n.bottom-o&&n.top+o<Ne.innerHeight},ScrollTrigger.positionInViewport=function positionInViewport(e,t,r){ct(e)&&(e=J(e));var n=e.getBoundingClientRect(),o=n[r?ft:dt],i=null==t?o/2:t in H?H[t]*o:~t.indexOf("%")?parseFloat(t)*o/100:parseFloat(t)||0;return r?(n.left+i)/Ne.innerWidth:(n.top+i)/Ne.innerHeight},ScrollTrigger.killAll=function killAll(e){if(Tt.slice(0).forEach(function(e){return"ScrollSmoother"!==e.vars.id&&e.kill()}),!0!==e){var t=W.killAll||[];W={},t.forEach(function(e){return e()})}},ScrollTrigger);function ScrollTrigger(e,t){s||ScrollTrigger.register(He)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),x(this),this.init(e,t)}ne.version="3.12.5",ne.saveStyles=function(e){return e?Ve(e).forEach(function(e){if(e&&e.style){var t=j.indexOf(e);0<=t&&j.splice(t,5),j.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),He.core.getCache(e),x())}}):j},ne.revert=function(e,t){return Sb(!e,t)},ne.create=function(e,t){return new ne(e,t)},ne.refresh=function(e){return e?Lb():(s||ne.register())&&Pt(!0)},ne.update=function(e){return++Ie.cache&&Z(!0===e?2:0)},ne.clearScrollMemory=Tb,ne.maxScroll=function(e,t){return Qa(e,t?Ye:Fe)},ne.getScrollFunc=function(e,t){return K(J(e),t?Ye:Fe)},ne.getById=function(e){return St[e]},ne.getAll=function(){return Tt.filter(function(e){return"ScrollSmoother"!==e.vars.id})},ne.isScrolling=function(){return!!st},ne.snapDirectional=tb,ne.addEventListener=function(e,t){var r=W[e]||(W[e]=[]);~r.indexOf(t)||r.push(t)},ne.removeEventListener=function(e,t){var r=W[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},ne.batch=function(e,t){function Cp(e,t){var r=[],n=[],o=He.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&Ta(t[r])&&"onRefreshInit"!==r?Cp(0,t[r]):t[r];return Ta(a)&&(a=a(),wb(ne,"refresh",function(){return a=t.batchMax()})),Ve(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push(ne.create(t))}),n};function tc(e,t,r,n){return n<t?e(n):t<0&&e(0),n<r?(n-t)/(r-t):r<0?t/(t-r):1}function uc(e,t){!0===t?e.style.removeProperty("touch-action"):e.style.touchAction=!0===t?"auto":t?"pan-"+t+(k.isTouch?" pinch-zoom":""):"none",e===Je&&uc(We,t)}function wc(e){var t,r=e.event,n=e.target,o=e.axis,i=(r.changedTouches?r.changedTouches[0]:r).target,a=i._gsap||He.core.getCache(i),s=at();if(!a._isScrollT||2e3<s-a._isScrollT){for(;i&&i!==We&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!ie[(t=mb(i)).overflowY]&&!ie[t.overflowX]);)i=i.parentNode;a._isScroll=i&&i!==n&&!La(i)&&(ie[(t=mb(i)).overflowY]||ie[t.overflowX]),a._isScrollT=s}!a._isScroll&&"x"!==o||(r.stopPropagation(),r._gsapAllow=!0)}function xc(e,t,r,n){return k.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&wc,onPress:n,onDrag:n,onScroll:n,onEnable:function onEnable(){return r&&wb(Xe,k.eventTypes[0],se,!1,!0)},onDisable:function onDisable(){return xb(Xe,k.eventTypes[0],se,!0)}})}function Bc(e){function zq(){return o=!1}function Cq(){i=Qa(p,Fe),S=Ue(E?1:0,i),f&&(T=Ue(0,Qa(p,Ye))),l=kt}function Dq(){v._gsap.y=Ia(parseFloat(v._gsap.y)+b.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",b.offset=b.cacheID=0}function Jq(){Cq(),a.isActive()&&a.vars.scrollY>i&&(b()>i?a.progress(1)&&b(i):a.resetTo("scrollY",i))}Va(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n,i,l,o,a,c,u,s,f=e.normalizeScrollX,t=e.momentum,r=e.allowNestedScroll,d=e.onRelease,p=J(e.target)||Je,g=He.core.globals().ScrollSmoother,h=g&&g.get(),v=E&&(e.content&&J(e.content)||h&&!1!==e.content&&!h.smooth()&&h.content()),b=K(p,Fe),m=K(p,Ye),y=1,x=(k.isTouch&&Ne.visualViewport?Ne.visualViewport.scale*Ne.visualViewport.width:Ne.outerWidth)/Ne.innerWidth,w=0,_=Ta(t)?function(){return t(n)}:function(){return t||2.8},C=xc(p,e.type,!0,r),T=Ha,S=Ha;return v&&He.set(v,{y:"+=0"}),e.ignoreCheck=function(e){return E&&"touchmove"===e.type&&function ignoreDrag(){if(o){requestAnimationFrame(zq);var e=Ia(n.deltaY/2),t=S(b.v-e);if(v&&t!==b.v+b.offset){b.offset=t-b.v;var r=Ia((parseFloat(v&&v._gsap.y)||0)-b.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+r+", 0, 1)",v._gsap.y=r+"px",b.cacheID=Ie.cache,Z()}return!0}b.offset&&Dq(),o=!0}()||1.05<y&&"touchstart"!==e.type||n.isGesturing||e.touches&&1<e.touches.length},e.onPress=function(){o=!1;var e=y;y=Ia((Ne.visualViewport&&Ne.visualViewport.scale||1)/x),a.pause(),e!==y&&uc(p,1.01<y||!f&&"x"),c=m(),u=b(),Cq(),l=kt},e.onRelease=e.onGestureStart=function(e,t){if(b.offset&&Dq(),t){Ie.cache++;var r,n,o=_();f&&(n=(r=m())+.05*o*-e.velocityX/.227,o*=tc(m,r,n,Qa(p,Ye)),a.vars.scrollX=T(n)),n=(r=b())+.05*o*-e.velocityY/.227,o*=tc(b,r,n,Qa(p,Fe)),a.vars.scrollY=S(n),a.invalidate().duration(o).play(.01),(E&&a.vars.scrollY>=i||i-1<=r)&&He.to({},{onUpdate:Jq,duration:o})}else s.restart(!0);d&&d(e)},e.onWheel=function(){a._ts&&a.pause(),1e3<at()-w&&(l=0,w=at())},e.onChange=function(e,t,r,n,o){if(kt!==l&&Cq(),t&&f&&m(T(n[2]===t?c+(e.startX-e.x):m()+t-n[1])),r){b.offset&&Dq();var i=o[2]===r,a=i?u+e.startY-e.y:b()+r-o[1],s=S(a);i&&a!==s&&(u+=s-a),b(s)}(r||t)&&Z()},e.onEnable=function(){uc(p,!f&&"x"),ne.addEventListener("refresh",Jq),wb(Ne,"resize",Jq),b.smooth&&(b.target.style.scrollBehavior="auto",b.smooth=m.smooth=!1),C.enable()},e.onDisable=function(){uc(p,!0),xb(Ne,"resize",Jq),ne.removeEventListener("refresh",Jq),C.kill()},e.lockAxis=!1!==e.lockAxis,((n=new k(e)).iOS=E)&&!b()&&b(1),E&&He.ticker.add(Ha),s=n._dc,a=He.to(n,{ease:"power4",paused:!0,inherit:!1,scrollX:f?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:pc(b,b(),function(){return a.pause()})},onUpdate:Z,onComplete:s.vars.onComplete}),n}var oe,ie={auto:1,scroll:1},ae=/(input|label|select|textarea)/i,se=function _captureInputs(e){var t=ae.test(e.target.tagName);(t||oe)&&(e._gsapAllow=!0,oe=t)};ne.sort=function(e){return Tt.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},ne.observe=function(e){return new k(e)},ne.normalizeScroll=function(e){if(void 0===e)return v;if(!0===e&&v)return v.enable();if(!1===e)return v&&v.kill(),void(v=e);var t=e instanceof k?e:Bc(e);return v&&v.target===t.target&&v.kill(),La(t.target)&&(v=t),t},ne.core={_getVelocityProp:L,_inputObserver:xc,_scrollers:Ie,_proxies:Le,bridge:{ss:function ss(){st||U("scrollStart"),st=at()},ref:function ref(){return je}}},Ka()&&He.registerPlugin(ne),e.ScrollTrigger=ne,e.default=ne;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

/*!
 * Flip 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function p(t){var e=t.ownerDocument||t;!(w in t.style)&&"msTransform"in t.style&&(k=(w="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(y=window,d=new M,e){a=(g=e).documentElement,b=e.body,(s=g.createElementNS("http://www.w3.org/2000/svg","g")).style.transform="none";var i=e.createElement("div"),n=e.createElement("div"),r=e&&(e.body||e.firstElementChild);r&&r.appendChild&&(r.appendChild(i),i.appendChild(n),i.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),m=n.offsetParent!==i,r.removeChild(i))}return e}function t(){return y.pageYOffset||g.scrollTop||a.scrollTop||b.scrollTop||0}function u(){return y.pageXOffset||g.scrollLeft||a.scrollLeft||b.scrollLeft||0}function v(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)}function x(t,e){if(t.parentNode&&(g||p(t))){var i=v(t),n=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",r=i?e?"rect":"g":"div",a=2!==e?0:100,s=3===e?100:0,o="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",l=g.createElementNS?g.createElementNS(n.replace(/^https/,"http"),r):g.createElement(r);return e&&(i?(f=f||x(t),l.setAttribute("width",.01),l.setAttribute("height",.01),l.setAttribute("transform","translate("+a+","+s+")"),f.appendChild(l)):(c||((c=x(t)).style.cssText=o),l.style.cssText=o+"width:0.1px;height:0.1px;top:"+s+"px;left:"+a+"px",c.appendChild(l))),l}throw"Need document and parent."}function z(t){var e,i=t.getCTM();return i||(e=t.style[w],t.style[w]="none",t.appendChild(s),i=s.getCTM(),t.removeChild(s),e?t.style[w]=e:t.style.removeProperty(w.replace(/([A-Z])/g,"-$1").toLowerCase())),i||d.clone()}function A(t,e){var i,n,r,a,s,o,l=v(t),u=t===l,p=l?C:E,h=t.parentNode;if(t===y)return t;if(p.length||p.push(x(t,1),x(t,2),x(t,3)),i=l?f:c,l)u?(a=-(r=z(t)).e/r.a,s=-r.f/r.d,n=d):t.getBBox?(r=t.getBBox(),a=(n=(n=t.transform?t.transform.baseVal:{}).numberOfItems?1<n.numberOfItems?function _consolidate(t){for(var e=new M,i=0;i<t.numberOfItems;i++)e.multiply(t.getItem(i).matrix);return e}(n):n.getItem(0).matrix:d).a*r.x+n.c*r.y,s=n.b*r.x+n.d*r.y):(n=new M,a=s=0),e&&"g"===t.tagName.toLowerCase()&&(a=s=0),(u?l:h).appendChild(i),i.setAttribute("transform","matrix("+n.a+","+n.b+","+n.c+","+n.d+","+(n.e+a)+","+(n.f+s)+")");else{if(a=s=0,m)for(n=t.offsetParent,r=t;(r=r&&r.parentNode)&&r!==n&&r.parentNode;)4<(y.getComputedStyle(r)[w]+"").length&&(a=r.offsetLeft,s=r.offsetTop,r=0);if("absolute"!==(o=y.getComputedStyle(t)).position&&"fixed"!==o.position)for(n=t.offsetParent;h&&h!==n;)a+=h.scrollLeft||0,s+=h.scrollTop||0,h=h.parentNode;(r=i.style).top=t.offsetTop-s+"px",r.left=t.offsetLeft-a+"px",r[w]=o[w],r[k]=o[k],r.position="fixed"===o.position?"fixed":"absolute",t.parentNode.appendChild(i)}return i}function B(t,e,i,n,r,a,s){return t.a=e,t.b=i,t.c=n,t.d=r,t.e=a,t.f=s,t}var g,y,a,b,c,f,d,s,m,i,w="transform",k=w+"Origin",C=[],E=[],M=((i=Matrix2D.prototype).inverse=function inverse(){var t=this.a,e=this.b,i=this.c,n=this.d,r=this.e,a=this.f,s=t*n-e*i||1e-10;return B(this,n/s,-e/s,-i/s,t/s,(i*a-n*r)/s,-(t*a-e*r)/s)},i.multiply=function multiply(t){var e=this.a,i=this.b,n=this.c,r=this.d,a=this.e,s=this.f,o=t.a,l=t.c,u=t.b,p=t.d,h=t.e,c=t.f;return B(this,o*e+u*n,o*i+u*r,l*e+p*n,l*i+p*r,a+h*e+c*n,s+h*i+c*r)},i.clone=function clone(){return new Matrix2D(this.a,this.b,this.c,this.d,this.e,this.f)},i.equals=function equals(t){var e=this.a,i=this.b,n=this.c,r=this.d,a=this.e,s=this.f;return e===t.a&&i===t.b&&n===t.c&&r===t.d&&a===t.e&&s===t.f},i.apply=function apply(t,e){void 0===e&&(e={});var i=t.x,n=t.y,r=this.a,a=this.b,s=this.c,o=this.d,l=this.e,u=this.f;return e.x=i*r+n*s+l||0,e.y=i*a+n*o+u||0,e},Matrix2D);function Matrix2D(t,e,i,n,r,a){void 0===t&&(t=1),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=1),void 0===r&&(r=0),void 0===a&&(a=0),B(this,t,e,i,n,r,a)}function getGlobalMatrix(e,i,n,r){if(!e||!e.parentNode||(g||p(e)).documentElement===e)return new M;var a=function _forceNonZeroScale(t){for(var e,i;t&&t!==b;)(i=t._gsap)&&i.uncache&&i.get(t,"x"),i&&!i.scaleX&&!i.scaleY&&i.renderTransform&&(i.scaleX=i.scaleY=1e-4,i.renderTransform(1,i),e?e.push(i):e=[i]),t=t.parentNode;return e}(e),s=v(e)?C:E,o=A(e,n),l=s[0].getBoundingClientRect(),h=s[1].getBoundingClientRect(),c=s[2].getBoundingClientRect(),f=o.parentNode,d=!r&&function _isFixed(t){return"fixed"===y.getComputedStyle(t).position||((t=t.parentNode)&&1===t.nodeType?_isFixed(t):void 0)}(e),m=new M((h.left-l.left)/100,(h.top-l.top)/100,(c.left-l.left)/100,(c.top-l.top)/100,l.left+(d?0:u()),l.top+(d?0:t()));if(f.removeChild(o),a)for(l=a.length;l--;)(h=a[l]).scaleX=h.scaleY=0,h.renderTransform(1,h);return i?m.inverse():m}function L(t,e){return t.actions.forEach(function(t){return t.vars[e]&&t.vars[e](t)})}function S(t){return"string"==typeof t?t.split(" ").join("").split(","):t}function V(t){return I(t)[0]||console.warn("Element not found:",t)}function W(t){return Math.round(1e4*t)/1e4||0}function X(t,e,i){return t.forEach(function(t){return t.classList[i](e)})}function $(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}function _(t,e){var i,n={};for(i in t)e[i]||(n[i]=t[i]);return n}function ba(t){var e=st[t]=S(t);return et[t]=e.concat(nt),e}function ea(t,e,i){return t.forEach(function(t){return t.d=function _getDOMDepth(t,e,i){void 0===i&&(i=0);for(var n=t.parentNode,r=1e3*Math.pow(10,i)*(e?-1:1),a=e?900*-r:0;t;)a+=r,t=t.previousSibling;return n?a+_getDOMDepth(n,e,i+1):a}(i?t.element:t.t,e)}),t.sort(function(t,e){return t.d-e.d}),t}function fa(t,e){for(var i,n,r=t.element.style,a=t.css=t.css||[],s=e.length;s--;)n=r[i=e[s]]||r.getPropertyValue(i),a.push(n?i:Y[i]||(Y[i]=$(i)),n);return r}function ga(t){var e=t.css,i=t.element.style,n=0;for(t.cache.uncache=1;n<e.length;n+=2)e[n+1]?i[e[n]]=e[n+1]:i.removeProperty(e[n]);!e[e.indexOf("transform")+1]&&i.translate&&(i.removeProperty("translate"),i.removeProperty("scale"),i.removeProperty("rotate"))}function ha(t,e){t.forEach(function(t){return t.a.cache.uncache=1}),e||t.finalStates.forEach(ga)}function ja(e,i,n){var r,a,s,o=e.element,l=e.width,p=e.height,h=e.uncache,c=e.getProp,f=o.style,d=4;if("object"!=typeof i&&(i=e),tt&&1!==n)return tt._abs.push({t:o,b:e,a:e,sd:0}),tt._final.push(function(){return(e.cache.uncache=1)&&ga(e)}),o;for(a="none"===c("display"),e.isVisible&&!a||(a&&(fa(e,["display"]).display=i.display),e.matrix=i.matrix,e.width=l=e.width||i.width,e.height=p=e.height||i.height),fa(e,R),s=window.getComputedStyle(o);d--;)f[R[d]]=s[R[d]];if(f.gridArea="1 / 1 / 1 / 1",f.transition="none",f.position="absolute",f.width=l+"px",f.height=p+"px",f.top||(f.top="0px"),f.left||(f.left="0px"),h)r=new pt(o);else if((r=_(e,D)).position="absolute",e.simple){var m=o.getBoundingClientRect();r.matrix=new M(1,0,0,1,m.left+u(),m.top+t())}else r.matrix=getGlobalMatrix(o,!1,!1,!0);return r=ot(r,e,!0),e.x=P(r.x,.01),e.y=P(r.y,.01),o}function ka(t,e){return!0!==e&&(e=I(e),t=t.filter(function(t){if(-1!==e.indexOf((t.sd<0?t.b:t.a).element))return!0;t.t._gsap.renderTransform(1),t.b.isVisible&&(t.t.style.width=t.b.width+"px",t.t.style.height=t.b.height+"px")})),t}function la(t){return ea(t,!0).forEach(function(t){return(t.a.isVisible||t.b.isVisible)&&ja(t.sd<0?t.b:t.a,t.b,1)})}function pa(t,e){var i,n=t.style||t;for(i in e)n[i]=e[i]}function ra(t){return t.map(function(t){return t.element})}function sa(t,e,i){return t&&e.length&&i.add(t(ra(e),i,new ut(e,0,!0)),0)}function ua(t,e){return t instanceof ut?t:new ut(t,e)}function va(t,e,i){var n=t.idLookup[i],r=t.alt[i];return!r.isVisible||(e.getElementState(r.element)||r).isVisible&&n.isVisible?n:r}function za(t){if(t!==l){var e=o.style,i=o.clientWidth===window.outerWidth,n=o.clientHeight===window.outerHeight,r=4;if(t&&(i||n)){for(;r--;)j[r]=e[H[r]];i&&(e.width=o.clientWidth+"px",e.overflowY="hidden"),n&&(e.height=o.clientHeight+"px",e.overflowX="hidden"),l=t}else if(l){for(;r--;)j[r]?e[H[r]]=j[r]:e.removeProperty($(H[r]));l=t}}}function Aa(t,e,r,i){t instanceof ut&&e instanceof ut||console.warn("Not a valid state object.");var a,s,o,l,u,p,h,c,f,n,d,m,g,v,y,x=(r=r||{}).clearProps,b=r.onEnter,w=r.onLeave,S=r.absolute,k=r.absoluteOnLeave,C=r.custom,V=r.delay,E=r.paused,M=r.repeat,B=r.repeatDelay,F=r.yoyo,L=r.toggleClass,I=r.nested,P=r.zIndex,A=r.scale,T=r.fade,O=r.stagger,N=r.spin,D=r.prune,Y=("props"in r?r:t).props,z=_(r,rt),R=Q.timeline({delay:V,paused:E,repeat:M,repeatDelay:B,yoyo:F,data:"isFlip"}),W=z,G=[],j=[],H=[],q=[],$=!0===N?1:N||0,Z="function"==typeof N?N:function(){return $},J=t.interrupted||e.interrupted,U=R[1!==i?"to":"from"];for(s in e.idLookup)d=e.alt[s]?va(e,t,s):e.idLookup[s],u=d.element,n=t.idLookup[s],!t.alt[s]||u!==n.element||!t.alt[s].isVisible&&d.isVisible||(n=t.alt[s]),n?(p={t:u,b:n,a:d,sd:n.element===u?0:d.isVisible?1:-1},H.push(p),p.sd&&(p.sd<0&&(p.b=d,p.a=n),J&&fa(p.b,Y?et[Y]:nt),T&&H.push(p.swap={t:n.element,b:p.b,a:p.a,sd:-p.sd,swap:p})),u._flip=n.element._flip=tt?tt.timeline:R):d.isVisible&&(H.push({t:u,b:_(d,{isVisible:1}),a:d,sd:0,entering:1}),u._flip=tt?tt.timeline:R);Y&&(st[Y]||ba(Y)).forEach(function(e){return z[e]=function(t){return H[t].a.props[e]}}),H.finalStates=f=[],m=function run(){for(ea(H),za(!0),l=0;l<H.length;l++)p=H[l],g=p.a,v=p.b,!D||g.isDifferent(v)||p.entering?(u=p.t,!I||p.sd<0||!l||(g.matrix=getGlobalMatrix(u,!1,!1,!0)),v.isVisible&&g.isVisible?(p.sd<0?(h=new pt(u,Y,t.simple),ot(h,g,A,0,0,h),h.matrix=getGlobalMatrix(u,!1,!1,!0),h.css=p.b.css,p.a=g=h,T&&(u.style.opacity=J?v.opacity:g.opacity),O&&q.push(u)):0<p.sd&&T&&(u.style.opacity=J?g.opacity-v.opacity:"0"),ot(g,v,A,Y)):v.isVisible!==g.isVisible&&(v.isVisible?g.isVisible||(v.css=g.css,j.push(v),H.splice(l--,1),S&&I&&ot(g,v,A,Y)):(g.isVisible&&G.push(g),H.splice(l--,1))),A||(u.style.maxWidth=Math.max(g.width,v.width)+"px",u.style.maxHeight=Math.max(g.height,v.height)+"px",u.style.minWidth=Math.min(g.width,v.width)+"px",u.style.minHeight=Math.min(g.height,v.height)+"px"),I&&L&&u.classList.add(L)):H.splice(l--,1),f.push(g);var e;if(L&&(e=f.map(function(t){return t.element}),I&&e.forEach(function(t){return t.classList.remove(L)})),za(!1),A?(z.scaleX=function(t){return H[t].a.scaleX},z.scaleY=function(t){return H[t].a.scaleY}):(z.width=function(t){return H[t].a.width+"px"},z.height=function(t){return H[t].a.height+"px"},z.autoRound=r.autoRound||!1),z.x=function(t){return H[t].a.x+"px"},z.y=function(t){return H[t].a.y+"px"},z.rotation=function(t){return H[t].a.rotation+(N?360*Z(t,c[t],c):0)},z.skewX=function(t){return H[t].a.skewX},c=H.map(function(t){return t.t}),!P&&0!==P||(z.modifiers={zIndex:function zIndex(){return P}},z.zIndex=P,z.immediateRender=!1!==r.immediateRender),T&&(z.opacity=function(t){return H[t].sd<0?0:0<H[t].sd?H[t].a.opacity:"+=0"}),q.length){O=Q.utils.distribute(O);var i=c.slice(q.length);z.stagger=function(t,e){return O(~q.indexOf(e)?c.indexOf(H[t].swap.t):t,e,i)}}if(it.forEach(function(t){return r[t]&&R.eventCallback(t,r[t],r[t+"Params"])}),C&&c.length)for(s in W=_(z,rt),"scale"in C&&(C.scaleX=C.scaleY=C.scale,delete C.scale),C)(a=_(C[s],at))[s]=z[s],!("duration"in a)&&"duration"in z&&(a.duration=z.duration),a.stagger=z.stagger,U.call(R,c,a,0),delete W[s];(c.length||j.length||G.length)&&(L&&R.add(function(){return X(e,L,R._zTime<0?"remove":"add")},0)&&!E&&X(e,L,"add"),c.length&&U.call(R,c,W,0)),sa(b,G,R),sa(w,j,R);var n=tt&&tt.timeline;n&&(n.add(R,0),tt._final.push(function(){return ha(H,!x)})),o=R.duration(),R.call(function(){var t=R.time()>=o;t&&!n&&ha(H,!x),L&&X(e,L,t?"remove":"add")})},k&&(S=H.filter(function(t){return!t.sd&&!t.a.isVisible&&t.b.isVisible}).map(function(t){return t.a.element})),tt?(S&&(y=tt._abs).push.apply(y,ka(H,S)),tt._run.push(m)):(S&&la(ka(H,S)),m());var K=tt?tt.timeline:R;return K.revert=function(){return lt(K,1,1)},K}function Da(t){for(var e,i=t.idLookup={},n=t.alt={},r=t.elementStates,a=r.length;a--;)i[(e=r[a]).id]?n[e.id]=e:i[e.id]=e}var I,Q,tt,r,o,P,T,l,n,h=1,F={},O=180/Math.PI,N=Math.PI/180,D={},Y={},et={},it=S("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),nt=S("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),rt={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},at={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},st={},R="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),G=function _parseElementState(t,e,i,n){return t instanceof pt?t:t instanceof ut?function _findElStateInState(t,e){return e&&t.idLookup[G(e).id]||t.elementStates[0]}(t,n):new pt("string"==typeof t?V(t)||console.warn(t+" not found"):t,e,i)},ot=function _fit(t,e,i,n,r,a){var s,o,l,u,p,h,c,f=t.element,d=t.cache,m=t.parent,g=t.x,v=t.y,y=e.width,x=e.height,b=e.scaleX,w=e.scaleY,S=e.rotation,k=e.bounds,_=a&&T&&T(f,"transform"),C=t,V=e.matrix,E=V.e,M=V.f,B=t.bounds.width!==k.width||t.bounds.height!==k.height||t.scaleX!==b||t.scaleY!==w||t.rotation!==S,F=!B&&t.simple&&e.simple&&!r;return F||!m?(b=w=1,S=s=0):(h=(p=function _getInverseGlobalMatrix(t){var e=t._gsap||Q.core.getCache(t);return e.gmCache===Q.ticker.frame?e.gMatrix:(e.gmCache=Q.ticker.frame,e.gMatrix=getGlobalMatrix(t,!0,!1,!0))}(m)).clone().multiply(e.ctm?e.matrix.clone().multiply(e.ctm):e.matrix),S=W(Math.atan2(h.b,h.a)*O),s=W(Math.atan2(h.c,h.d)*O+S)%360,b=Math.sqrt(Math.pow(h.a,2)+Math.pow(h.b,2)),w=Math.sqrt(Math.pow(h.c,2)+Math.pow(h.d,2))*Math.cos(s*N),r&&(r=I(r)[0],u=Q.getProperty(r),c=r.getBBox&&"function"==typeof r.getBBox&&r.getBBox(),C={scaleX:u("scaleX"),scaleY:u("scaleY"),width:c?c.width:Math.ceil(parseFloat(u("width","px"))),height:c?c.height:parseFloat(u("height","px"))}),d.rotation=S+"deg",d.skewX=s+"deg"),i?(b*=y!==C.width&&C.width?y/C.width:1,w*=x!==C.height&&C.height?x/C.height:1,d.scaleX=b,d.scaleY=w):(y=P(y*b/C.scaleX,0),x=P(x*w/C.scaleY,0),f.style.width=y+"px",f.style.height=x+"px"),n&&pa(f,e.props),F||!m?(g+=E-t.matrix.e,v+=M-t.matrix.f):B||m!==e.parent?(d.renderTransform(1,d),h=getGlobalMatrix(r||f,!1,!1,!0),o=p.apply({x:h.e,y:h.f}),g+=(l=p.apply({x:E,y:M})).x-o.x,v+=l.y-o.y):(p.e=p.f=0,g+=(l=p.apply({x:E-t.matrix.e,y:M-t.matrix.f})).x,v+=l.y),g=P(g,.02),v=P(v,.02),!a||a instanceof pt?(d.x=g+"px",d.y=v+"px",d.renderTransform(1,d)):_&&_.revert(),a&&(a.x=g,a.y=v,a.rotation=S,a.skewX=s,i?(a.scaleX=b,a.scaleY=w):(a.width=y,a.height=x)),a||d},j=[],H="width,height,overflowX,overflowY".split(","),lt=function _killFlip(t,e,i){if(t&&t.progress()<1&&(!t.paused()||i))return e&&(function _interrupt(t){t.vars.onInterrupt&&t.vars.onInterrupt.apply(t,t.vars.onInterruptParams||[]),t.getChildren(!0,!1,!0).forEach(_interrupt)}(t),e<2&&t.progress(1),t.kill()),!0},ut=((n=FlipState.prototype).update=function update(t){var e=this;return this.elementStates=this.targets.map(function(t){return new pt(t,e.props,e.simple)}),Da(this),this.interrupt(t),this.recordInlineStyles(),this},n.clear=function clear(){return this.targets.length=this.elementStates.length=0,Da(this),this},n.fit=function fit(t,e,i){for(var n,r,a=ea(this.elementStates.slice(0),!1,!0),s=(t||this).idLookup,o=0;o<a.length;o++)n=a[o],i&&(n.matrix=getGlobalMatrix(n.element,!1,!1,!0)),(r=s[n.id])&&ot(n,r,e,!0,0,n),n.matrix=getGlobalMatrix(n.element,!1,!1,!0);return this},n.getProperty=function getProperty(t,e){var i=this.getElementState(t)||D;return(e in i?i:i.props||D)[e]},n.add=function add(t){for(var e,i,n,r=t.targets.length,a=this.idLookup,s=this.alt;r--;)(n=a[(i=t.elementStates[r]).id])&&(i.element===n.element||s[i.id]&&s[i.id].element===i.element)?(e=this.elementStates.indexOf(i.element===n.element?n:s[i.id]),this.targets.splice(e,1,t.targets[r]),this.elementStates.splice(e,1,i)):(this.targets.push(t.targets[r]),this.elementStates.push(i));return t.interrupted&&(this.interrupted=!0),t.simple||(this.simple=!1),Da(this),this},n.compare=function compare(t){function kh(t,e,i){return(t.isVisible!==e.isVisible?t.isVisible?f:d:t.isVisible?c:h).push(i)&&m.push(i)}function lh(t,e,i){return m.indexOf(i)<0&&kh(t,e,i)}var e,i,n,r,a,s,o,l,u=t.idLookup,p=this.idLookup,h=[],c=[],f=[],d=[],m=[],g=t.alt,v=this.alt;for(n in u)a=g[n],s=v[n],r=(e=a?va(t,this,n):u[n]).element,i=p[n],s?(l=i.isVisible||!s.isVisible&&r===i.element?i:s,(o=!a||e.isVisible||a.isVisible||l.element!==a.element?e:a).isVisible&&l.isVisible&&o.element!==l.element?((o.isDifferent(l)?c:h).push(o.element,l.element),m.push(o.element,l.element)):kh(o,l,o.element),a&&o.element===a.element&&(a=u[n]),lh(o.element!==i.element&&a?a:o,i,i.element),lh(a&&a.element===s.element?a:o,s,s.element),a&&lh(a,s.element===a.element?s:i,a.element)):(i?i.isDifferent(e)?kh(e,i,r):h.push(r):f.push(r),a&&lh(a,i,a.element));for(n in p)u[n]||(d.push(p[n].element),v[n]&&d.push(v[n].element));return{changed:c,unchanged:h,enter:f,leave:d}},n.recordInlineStyles=function recordInlineStyles(){for(var t=et[this.props]||nt,e=this.elementStates.length;e--;)fa(this.elementStates[e],t)},n.interrupt=function interrupt(n){var r=this,a=[];this.targets.forEach(function(t){var e=t._flip,i=lt(e,n?0:1);n&&i&&a.indexOf(e)<0&&e.add(function(){return r.updateVisibility()}),i&&a.push(e)}),!n&&a.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!a.length)},n.updateVisibility=function updateVisibility(){this.elementStates.forEach(function(t){var e=t.element.getBoundingClientRect();t.isVisible=!!(e.width||e.height||e.top||e.left),t.uncache=1})},n.getElementState=function getElementState(t){return this.elementStates[this.targets.indexOf(V(t))]},n.makeAbsolute=function makeAbsolute(){return ea(this.elementStates.slice(0),!0,!0).map(ja)},FlipState);function FlipState(t,e,i){if(this.props=e&&e.props,this.simple=!(!e||!e.simple),i)this.targets=ra(t),this.elementStates=t,Da(this);else{this.targets=I(t);var n=e&&(!1===e.kill||e.batch&&!e.kill);tt&&!n&&tt._kill.push(this),this.update(n||!!tt)}}var q,pt=((q=ElementState.prototype).isDifferent=function isDifferent(t){var e=this.bounds,i=t.bounds;return e.top!==i.top||e.left!==i.left||e.width!==i.width||e.height!==i.height||!this.matrix.equals(t.matrix)||this.opacity!==t.opacity||this.props&&t.props&&JSON.stringify(this.props)!==JSON.stringify(t.props)},q.update=function update(e,i){var n=this,r=n.element,a=Q.getProperty(r),s=Q.core.getCache(r),o=r.getBoundingClientRect(),l=r.getBBox&&"function"==typeof r.getBBox&&"svg"!==r.nodeName.toLowerCase()&&r.getBBox(),p=i?new M(1,0,0,1,o.left+u(),o.top+t()):getGlobalMatrix(r,!1,!1,!0);n.getProp=a,n.element=r,n.id=function _getID(t){var e=t.getAttribute("data-flip-id");return e||t.setAttribute("data-flip-id",e="auto-"+h++),e}(r),n.matrix=p,n.cache=s,n.bounds=o,n.isVisible=!!(o.width||o.height||o.left||o.top),n.display=a("display"),n.position=a("position"),n.parent=r.parentNode,n.x=a("x"),n.y=a("y"),n.scaleX=s.scaleX,n.scaleY=s.scaleY,n.rotation=a("rotation"),n.skewX=a("skewX"),n.opacity=a("opacity"),n.width=l?l.width:P(a("width","px"),.04),n.height=l?l.height:P(a("height","px"),.04),e&&function _recordProps(t,e){for(var i=Q.getProperty(t.element,null,"native"),n=t.props={},r=e.length;r--;)n[e[r]]=(i(e[r])+"").trim();n.zIndex&&(n.zIndex=parseFloat(n.zIndex)||0)}(n,st[e]||ba(e)),n.ctm=r.getCTM&&"svg"===r.nodeName.toLowerCase()&&z(r).inverse(),n.simple=i||1===W(p.a)&&!W(p.b)&&!W(p.c)&&1===W(p.d),n.uncache=0},ElementState);function ElementState(t,e,i){this.element=t,this.update(e,i)}var Z,J=((Z=FlipAction.prototype).getStateById=function getStateById(t){for(var e=this.states.length;e--;)if(this.states[e].idLookup[t])return this.states[e]},Z.kill=function kill(){this.batch.remove(this)},FlipAction);function FlipAction(t,e){this.vars=t,this.batch=e,this.states=[],this.timeline=e.timeline}var U,K=((U=FlipBatch.prototype).add=function add(e){var t=this.actions.filter(function(t){return t.vars===e});return t.length?t[0]:(t=new J("function"==typeof e?{animate:e}:e,this),this.actions.push(t),t)},U.remove=function remove(t){var e=this.actions.indexOf(t);return 0<=e&&this.actions.splice(e,1),this},U.getState=function getState(e){var i=this,t=tt,n=r;return(tt=this).state.clear(),this._kill.length=0,this.actions.forEach(function(t){t.vars.getState&&(t.states.length=0,(r=t).state=t.vars.getState(t)),e&&t.states.forEach(function(t){return i.state.add(t)})}),r=n,tt=t,this.killConflicts(),this},U.animate=function animate(){var t,e,i=this,n=tt,r=this.timeline,a=this.actions.length;for(tt=this,r.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(t){t.vars.animate&&t.vars.animate(t);var e,i,n=t.vars.onEnter,r=t.vars.onLeave,a=t.targets;a&&a.length&&(n||r)&&(e=new ut,t.states.forEach(function(t){return e.add(t)}),(i=e.compare(ht.getState(a))).enter.length&&n&&n(i.enter),i.leave.length&&r&&r(i.leave))}),la(this._abs),this._run.forEach(function(t){return t()}),e=r.duration(),t=this._final.slice(0),r.add(function(){e<=r.time()&&(t.forEach(function(t){return t()}),L(i,"onComplete"))}),tt=n;a--;)this.actions[a].vars.once&&this.actions[a].kill();return L(this,"onStart"),r.restart(),this},U.loadState=function loadState(n){n=n||function done(){return 0};var r=[];return this.actions.forEach(function(e){if(e.vars.loadState){var i,t=function f(t){t&&(e.targets=t),~(i=r.indexOf(f))&&(r.splice(i,1),r.length||n())};r.push(t),e.vars.loadState(t)}}),r.length||n(),this},U.setState=function setState(){return this.actions.forEach(function(t){return t.targets=t.vars.setState&&t.vars.setState(t)}),this},U.killConflicts=function killConflicts(e){return this.state.interrupt(e),this._kill.forEach(function(t){return t.interrupt(e)}),this},U.run=function run(t,e){var i=this;return this!==tt&&(t||this.getState(e),this.loadState(function(){i._killed||(i.setState(),i.animate())})),this},U.clear=function clear(t){this.state.clear(),t||(this.actions.length=0)},U.getStateById=function getStateById(t){for(var e,i=this.actions.length;i--;)if(e=this.actions[i].getStateById(t))return e;return this.state.idLookup[t]&&this.state},U.kill=function kill(){this._killed=1,this.clear(),delete F[this.id]},FlipBatch);function FlipBatch(t){this.id=t,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new ut,this.timeline=Q.timeline()}var ht=(Flip.getState=function getState(t,e){var i=ua(t,e);return r&&r.states.push(i),e&&e.batch&&Flip.batch(e.batch).state.add(i),i},Flip.from=function from(t,e){return"clearProps"in(e=e||{})||(e.clearProps=!0),Aa(t,ua(e.targets||t.targets,{props:e.props||t.props,simple:e.simple,kill:!!e.kill}),e,-1)},Flip.to=function to(t,e){return Aa(t,ua(e.targets||t.targets,{props:e.props||t.props,simple:e.simple,kill:!!e.kill}),e,1)},Flip.fromTo=function fromTo(t,e,i){return Aa(t,e,i)},Flip.fit=function fit(t,e,i){var n=i?_(i,at):{},r=i||n,a=r.absolute,s=r.scale,o=r.getVars,l=r.props,u=r.runBackwards,p=r.onComplete,h=r.simple,c=i&&i.fitChild&&V(i.fitChild),f=G(e,l,h,t),d=G(t,0,h,f),m=l?et[l]:nt,g=Q.context();return l&&pa(n,f.props),fa(d,m),u&&("immediateRender"in n||(n.immediateRender=!0),n.onComplete=function(){ga(d),p&&p.apply(this,arguments)}),a&&ja(d,f),n=ot(d,f,s||c,l,c,n.duration||o?n:0),g&&!o&&g.add(function(){return function(){return ga(d)}}),o?n:n.duration?Q.to(d.element,n):null},Flip.makeAbsolute=function makeAbsolute(t,e){return(t instanceof ut?t:new ut(t,e)).makeAbsolute()},Flip.batch=function batch(t){return F[t=t||"default"]||(F[t]=new K(t))},Flip.killFlipsOf=function killFlipsOf(t,e){(t instanceof ut?t.targets:I(t)).forEach(function(t){return t&&lt(t._flip,!1!==e?1:2)})},Flip.isFlipping=function isFlipping(t){var e=Flip.getByTarget(t);return!!e&&e.isActive()},Flip.getByTarget=function getByTarget(t){return(V(t)||D)._flip},Flip.getElementState=function getElementState(t,e){return new pt(V(t),e)},Flip.convertCoordinates=function convertCoordinates(t,e,i){var n=getGlobalMatrix(e,!0,!0).multiply(getGlobalMatrix(t));return i?n.apply(i):n},Flip.register=function register(t){if(o="undefined"!=typeof document&&document.body){Q=t,p(o),I=Q.utils.toArray,T=Q.core.getStyleSaver;var i=Q.utils.snap(.1);P=function _closestTenth(t,e){return i(parseFloat(t)+e)}}},Flip);function Flip(){}ht.version="3.12.5","undefined"!=typeof window&&window.gsap&&window.gsap.registerPlugin(ht),e.Flip=ht,e.default=ht;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

/*!
 * SplitText 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GSAP and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GSAP membership. See https://gsap.com/pricing
 * @author: Jack Doyle, jack@greensock.com
 */

!function(D,u){"object"==typeof exports&&"undefined"!=typeof module?u(exports):"function"==typeof define&&define.amd?define(["exports"],u):u((D=D||self).window=D.window||{})}(this,function(D){"use strict";var b=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function n(D){X=document,e=window,(C=C||D||e.gsap||console.warn("Please gsap.registerPlugin(SplitText)"))&&(E=C.utils.toArray,i=C.core.context||function(){},F=1)}function o(D){return e.getComputedStyle(D)}function p(D){return"absolute"===D.position||!0===D.absolute}function q(D,u){for(var e,t=u.length;-1<--t;)if(e=u[t],D.substr(0,e.length)===e)return e.length}function s(D,u){void 0===D&&(D="");var e=~D.indexOf("++"),t=1;return e&&(D=D.split("++").join("")),function(){return"<"+u+" style='position:relative;display:inline-block;'"+(D?" class='"+D+(e?t++:"")+"'>":">")}}function t(D,u,e){var F=D.nodeType;if(1===F||9===F||11===F)for(D=D.firstChild;D;D=D.nextSibling)t(D,u,e);else 3!==F&&4!==F||(D.nodeValue=D.nodeValue.split(u).join(e))}function u(D,u){for(var e=u.length;-1<--e;)D.push(u[e])}function v(D,u,e){for(var t;D&&D!==u;){if(t=D._next||D.nextSibling)return t.textContent.charAt(0)===e;D=D.parentNode||D._parent}}function w(D){var u,e,t=E(D.childNodes),F=t.length;for(u=0;u<F;u++)(e=t[u])._isSplit?w(e):u&&e.previousSibling&&3===e.previousSibling.nodeType?(e.previousSibling.nodeValue+=3===e.nodeType?e.nodeValue:e.firstChild.nodeValue,D.removeChild(e)):3!==e.nodeType&&(D.insertBefore(e.firstChild,e),D.removeChild(e))}function x(D,u){return parseFloat(u[D])||0}function y(D,e,F,C,i,n,s){var E,r,l,d,a,h,B,f,A,c,g,y,b=o(D),_=x("paddingLeft",b),S=-999,T=x("borderBottomWidth",b)+x("borderTopWidth",b),m=x("borderLeftWidth",b)+x("borderRightWidth",b),N=x("paddingTop",b)+x("paddingBottom",b),L=x("paddingLeft",b)+x("paddingRight",b),W=x("fontSize",b)*(e.lineThreshold||.2),H=b.textAlign,O=[],V=[],M=[],R=e.wordDelimiter||" ",j=e.tag?e.tag:e.span?"span":"div",k=e.type||e.split||"chars,words,lines",P=i&&~k.indexOf("lines")?[]:null,z=~k.indexOf("words"),q=~k.indexOf("chars"),G=p(e),I=e.linesClass,J=~(I||"").indexOf("++"),K=[],Q="flex"===b.display,U=D.style.display;for(J&&(I=I.split("++").join("")),Q&&(D.style.display="block"),l=(r=D.getElementsByTagName("*")).length,a=[],E=0;E<l;E++)a[E]=r[E];if(P||G)for(E=0;E<l;E++)((h=(d=a[E]).parentNode===D)||G||q&&!z)&&(y=d.offsetTop,P&&h&&Math.abs(y-S)>W&&("BR"!==d.nodeName||0===E)&&(B=[],P.push(B),S=y),G&&(d._x=d.offsetLeft,d._y=y,d._w=d.offsetWidth,d._h=d.offsetHeight),P&&((d._isSplit&&h||!q&&h||z&&h||!z&&d.parentNode.parentNode===D&&!d.parentNode._isSplit)&&(B.push(d),d._x-=_,v(d,D,R)&&(d._wordEnd=!0)),"BR"===d.nodeName&&(d.nextSibling&&"BR"===d.nextSibling.nodeName||0===E)&&P.push([])));for(E=0;E<l;E++)if(h=(d=a[E]).parentNode===D,"BR"!==d.nodeName)if(G&&(A=d.style,z||h||(d._x+=d.parentNode._x,d._y+=d.parentNode._y),A.left=d._x+"px",A.top=d._y+"px",A.position="absolute",A.display="block",A.width=d._w+1+"px",A.height=d._h+"px"),!z&&q)if(d._isSplit)for(d._next=r=d.nextSibling,d.parentNode.appendChild(d);r&&3===r.nodeType&&" "===r.textContent;)d._next=r.nextSibling,d.parentNode.appendChild(r),r=r.nextSibling;else d.parentNode._isSplit?(d._parent=d.parentNode,!d.previousSibling&&d.firstChild&&(d.firstChild._isFirst=!0),d.nextSibling&&" "===d.nextSibling.textContent&&!d.nextSibling.nextSibling&&K.push(d.nextSibling),d._next=d.nextSibling&&d.nextSibling._isFirst?null:d.nextSibling,d.parentNode.removeChild(d),a.splice(E--,1),l--):h||(y=!d.nextSibling&&v(d.parentNode,D,R),d.parentNode._parent&&d.parentNode._parent.appendChild(d),y&&d.parentNode.appendChild(X.createTextNode(" ")),"span"===j&&(d.style.display="inline"),O.push(d));else d.parentNode._isSplit&&!d._isSplit&&""!==d.innerHTML?V.push(d):q&&!d._isSplit&&("span"===j&&(d.style.display="inline"),O.push(d));else P||G?(d.parentNode&&d.parentNode.removeChild(d),a.splice(E--,1),l--):z||D.appendChild(d);for(E=K.length;-1<--E;)K[E].parentNode.removeChild(K[E]);if(P){for(G&&(c=X.createElement(j),D.appendChild(c),g=c.offsetWidth+"px",y=c.offsetParent===D?0:D.offsetLeft,D.removeChild(c)),A=D.style.cssText,D.style.cssText="display:none;";D.firstChild;)D.removeChild(D.firstChild);for(f=" "===R&&(!G||!z&&!q),E=0;E<P.length;E++){for(B=P[E],(c=X.createElement(j)).style.cssText="display:block;text-align:"+H+";position:"+(G?"absolute;":"relative;"),I&&(c.className=I+(J?E+1:"")),M.push(c),l=B.length,r=0;r<l;r++)"BR"!==B[r].nodeName&&(d=B[r],c.appendChild(d),f&&d._wordEnd&&c.appendChild(X.createTextNode(" ")),G&&(0===r&&(c.style.top=d._y+"px",c.style.left=_+y+"px"),d.style.top="0px",y&&(d.style.left=d._x-y+"px")));0===l?c.innerHTML="&nbsp;":z||q||(w(c),t(c,String.fromCharCode(160)," ")),G&&(c.style.width=g,c.style.height=d._h+"px"),D.appendChild(c)}D.style.cssText=A}G&&(s>D.clientHeight&&(D.style.height=s-N+"px",D.clientHeight<s&&(D.style.height=s+T+"px")),n>D.clientWidth&&(D.style.width=n-L+"px",D.clientWidth<n&&(D.style.width=n+m+"px"))),Q&&(U?D.style.display=U:D.style.removeProperty("display")),u(F,O),z&&u(C,V),u(i,M)}function z(D,u,e,F){function eb(D){return D===B||D===T&&" "===B}var C,i,n,s,E,r,l,o,d=u.tag?u.tag:u.span?"span":"div",a=~(u.type||u.split||"chars,words,lines").indexOf("chars"),h=p(u),B=u.wordDelimiter||" ",f=" "!==B?"":h?"&#173; ":" ",A="</"+d+">",c=1,x=u.specialChars?"function"==typeof u.specialChars?u.specialChars:q:null,g=X.createElement("div"),y=D.parentNode;for(y.insertBefore(g,D),g.textContent=D.nodeValue,y.removeChild(D),l=-1!==(C=function getText(D){var u=D.nodeType,e="";if(1===u||9===u||11===u){if("string"==typeof D.textContent)return D.textContent;for(D=D.firstChild;D;D=D.nextSibling)e+=getText(D)}else if(3===u||4===u)return D.nodeValue;return e}(D=g)).indexOf("<"),!1!==u.reduceWhiteSpace&&(C=C.replace(S," ").replace(_,"")),l&&(C=C.split("<").join("{{LT}}")),E=C.length,i=(" "===C.charAt(0)?f:"")+e(),n=0;n<E;n++)if(r=C.charAt(n),x&&(o=x(C.substr(n),u.specialChars)))r=C.substr(n,o||1),i+=a&&" "!==r?F()+r+"</"+d+">":r,n+=o-1;else if(eb(r)&&!eb(C.charAt(n-1))&&n){for(i+=c?A:"",c=0;eb(C.charAt(n+1));)i+=f,n++;n===E-1?i+=f:")"!==C.charAt(n+1)&&(i+=f+e(),c=1)}else"{"===r&&"{{LT}}"===C.substr(n,6)?(i+=a?F()+"{{LT}}</"+d+">":"{{LT}}",n+=5):55296<=r.charCodeAt(0)&&r.charCodeAt(0)<=56319||65024<=C.charCodeAt(n+1)&&C.charCodeAt(n+1)<=65039?(s=((C.substr(n,12).split(b)||[])[1]||"").length||2,i+=a&&" "!==r?F()+C.substr(n,s)+"</"+d+">":C.substr(n,s),n+=s-1):i+=a&&" "!==r?F()+r+"</"+d+">":r;D.outerHTML=i+(c?A:""),l&&t(y,"{{LT}}","<")}function A(D,u,e,t){var F,C,i=E(D.childNodes),n=i.length,s=p(u);if(3!==D.nodeType||1<n){for(u.absolute=!1,F=0;F<n;F++)(C=i[F])._next=C._isFirst=C._parent=C._wordEnd=null,3===C.nodeType&&!/\S+/.test(C.nodeValue)||(s&&3!==C.nodeType&&"inline"===o(C).display&&(C.style.display="inline-block",C.style.position="relative"),C._isSplit=!0,A(C,u,e,t));return u.absolute=s,void(D._isSplit=!0)}z(D,u,e,t)}var X,e,F,C,i,E,r,_=/(?:\r|\n|\t\t)/g,S=/(?:\s\s+)/g,T=String.fromCharCode(160),l=((r=SplitText.prototype).split=function split(D){this.isSplit&&this.revert(),this.vars=D=D||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var u,e,t,F=this.elements.length,C=D.tag?D.tag:D.span?"span":"div",i=s(D.wordsClass,C),n=s(D.charsClass,C);-1<--F;)t=this.elements[F],this._originals[F]={html:t.innerHTML,style:t.getAttribute("style")},u=t.clientHeight,e=t.clientWidth,A(t,D,i,n),y(t,D,this.chars,this.words,this.lines,e,u);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},r.revert=function revert(){var e=this._originals;if(!e)throw"revert() call wasn't scoped properly.";return this.elements.forEach(function(D,u){D.innerHTML=e[u].html,D.setAttribute("style",e[u].style)}),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},SplitText.create=function create(D,u){return new SplitText(D,u)},SplitText);function SplitText(D,u){F||n(),this.elements=E(D),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=u||{},i(this),this.split(u)}l.version="3.12.5",l.register=n,D.SplitText=l,D.default=l;if (typeof(window)==="undefined"||window!==D){Object.defineProperty(D,"__esModule",{value:!0})} else {delete D.default}});

/*!
 * CustomEase 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function m(e){return Math.round(1e5*e)/1e5||0}var b=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,w=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,Y=Math.PI/180,k=Math.sin,B=Math.cos,F=Math.abs,J=Math.sqrt;function arcToSegment(e,t,n,s,a,r,i,o,h){if(e!==o||t!==h){n=F(n),s=F(s);var u=a%360*Y,f=B(u),c=k(u),l=Math.PI,g=2*l,x=(e-o)/2,d=(t-h)/2,m=f*x+c*d,p=-c*x+f*d,y=m*m,M=p*p,v=y/(n*n)+M/(s*s);1<v&&(n=J(v)*n,s=J(v)*s);var C=n*n,E=s*s,b=(C*E-C*M-E*y)/(C*M+E*y);b<0&&(b=0);var w=(r===i?-1:1)*J(b),P=n*p/s*w,S=-s*m/n*w,N=f*P-c*S+(e+o)/2,D=c*P+f*S+(t+h)/2,T=(m-P)/n,V=(p-S)/s,_=(-m-P)/n,q=(-p-S)/s,A=T*T+V*V,R=(V<0?-1:1)*Math.acos(T/J(A)),G=(T*q-V*_<0?-1:1)*Math.acos((T*_+V*q)/J(A*(_*_+q*q)));isNaN(G)&&(G=l),!i&&0<G?G-=g:i&&G<0&&(G+=g),R%=g,G%=g;var L,O=Math.ceil(F(G)/(g/4)),j=[],z=G/O,I=4/3*k(z/2)/(1+B(z/2)),H=f*n,Q=c*n,Z=c*-s,U=f*s;for(L=0;L<O;L++)m=B(a=R+L*z),p=k(a),T=B(a+=z),V=k(a),j.push(m-I*p,p+I*m,T+I*V,V-I*T,T,V);for(L=0;L<j.length;L+=2)m=j[L],p=j[L+1],j[L]=m*H+p*Z+N,j[L+1]=m*Q+p*U+D;return j[L-2]=o,j[L-1]=h,j}}function stringToRawPath(e){function db(e,t,n,s){f=(n-e)/3,c=(s-t)/3,o.push(e+f,t+c,n-f,s-c,n,s)}var t,n,s,a,r,i,o,h,u,f,c,l,g,x,d,m=(e+"").replace(w,function(e){var t=+e;return t<1e-4&&-1e-4<t?0:t}).match(b)||[],p=[],y=0,M=0,v=m.length,C=0,E="ERROR: malformed path: "+e;if(!e||!isNaN(m[0])||isNaN(m[1]))return console.log(E),p;for(t=0;t<v;t++)if(g=r,isNaN(m[t])?i=(r=m[t].toUpperCase())!==m[t]:t--,s=+m[t+1],a=+m[t+2],i&&(s+=y,a+=M),t||(h=s,u=a),"M"===r)o&&(o.length<8?--p.length:C+=o.length),y=h=s,M=u=a,o=[s,a],p.push(o),t+=2,r="L";else if("C"===r)i||(y=M=0),(o=o||[0,0]).push(s,a,y+1*m[t+3],M+1*m[t+4],y+=1*m[t+5],M+=1*m[t+6]),t+=6;else if("S"===r)f=y,c=M,"C"!==g&&"S"!==g||(f+=y-o[o.length-4],c+=M-o[o.length-3]),i||(y=M=0),o.push(f,c,s,a,y+=1*m[t+3],M+=1*m[t+4]),t+=4;else if("Q"===r)f=y+2/3*(s-y),c=M+2/3*(a-M),i||(y=M=0),y+=1*m[t+3],M+=1*m[t+4],o.push(f,c,y+2/3*(s-y),M+2/3*(a-M),y,M),t+=4;else if("T"===r)f=y-o[o.length-4],c=M-o[o.length-3],o.push(y+f,M+c,s+2/3*(y+1.5*f-s),a+2/3*(M+1.5*c-a),y=s,M=a),t+=2;else if("H"===r)db(y,M,y=s,M),t+=1;else if("V"===r)db(y,M,y,M=s+(i?M-y:0)),t+=1;else if("L"===r||"Z"===r)"Z"===r&&(s=h,a=u,o.closed=!0),("L"===r||.5<F(y-s)||.5<F(M-a))&&(db(y,M,s,a),"L"===r&&(t+=2)),y=s,M=a;else if("A"===r){if(x=m[t+4],d=m[t+5],f=m[t+6],c=m[t+7],n=7,1<x.length&&(x.length<3?(c=f,f=d,n--):(c=d,f=x.substr(2),n-=2),d=x.charAt(1),x=x.charAt(0)),l=arcToSegment(y,M,+m[t+1],+m[t+2],+m[t+3],+x,+d,(i?y:0)+1*f,(i?M:0)+1*c),t+=n,l)for(n=0;n<l.length;n++)o.push(l[n]);y=o[o.length-2],M=o[o.length-1]}else console.log(E);return(t=o.length)<6?(p.pop(),t=0):o[0]===o[t-2]&&o[1]===o[t-1]&&(o.closed=!0),p.totalPoints=C+t,p}function p(){return M||"undefined"!=typeof window&&(M=window.gsap)&&M.registerPlugin&&M}function q(){(M=p())?(M.registerEase("_CE",n.create),a=1):console.warn("Please gsap.registerPlugin(CustomEase)")}function s(e){return~~(1e3*e+(e<0?-.5:.5))/1e3}function x(e,t,n,s,a,r,i,o,h,u,f){var c,l=(e+n)/2,g=(t+s)/2,d=(n+a)/2,m=(s+r)/2,p=(a+i)/2,y=(r+o)/2,M=(l+d)/2,v=(g+m)/2,C=(d+p)/2,E=(m+y)/2,b=(M+C)/2,w=(v+E)/2,P=i-e,S=o-t,N=Math.abs((n-i)*S-(s-o)*P),D=Math.abs((a-i)*S-(r-o)*P);return u||(u=[{x:e,y:t},{x:i,y:o}],f=1),u.splice(f||u.length-1,0,{x:b,y:w}),h*(P*P+S*S)<(N+D)*(N+D)&&(c=u.length,x(e,t,l,g,M,v,b,w,h,u,f),x(b,w,C,E,p,y,i,o,h,u,f+1+(u.length-c))),u}var M,a,t,y=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,v=/[cLlsSaAhHvVtTqQ]/g,n=((t=CustomEase.prototype).setData=function setData(e,t){t=t||{};var n,s,a,r,i,o,h,u,f,c=(e=e||"0,0,1,1").match(y),l=1,g=[],d=[],m=t.precision||1,p=m<=1;if(this.data=e,(v.test(e)||~e.indexOf("M")&&e.indexOf("C")<0)&&(c=stringToRawPath(e)[0]),4===(n=c.length))c.unshift(0,0),c.push(1,1),n=8;else if((n-2)%6)throw"Invalid CustomEase";for(0==+c[0]&&1==+c[n-2]||function _normalize(e,t,n){n||0===n||(n=Math.max(+e[e.length-1],+e[1]));var s,a=-1*e[0],r=-n,i=e.length,o=1/(+e[i-2]+a),h=-t||(Math.abs(e[i-1]-e[1])<.01*(e[i-2]-e[0])?function _findMinimum(e){var t,n=e.length,s=1e20;for(t=1;t<n;t+=6)+e[t]<s&&(s=+e[t]);return s}(e)+r:+e[i-1]+r);for(h=h?1/h:-o,s=0;s<i;s+=2)e[s]=(+e[s]+a)*o,e[s+1]=(+e[s+1]+r)*h}(c,t.height,t.originY),this.segment=c,r=2;r<n;r+=6)s={x:+c[r-2],y:+c[r-1]},a={x:+c[r+4],y:+c[r+5]},g.push(s,a),x(s.x,s.y,+c[r],+c[r+1],+c[r+2],+c[r+3],a.x,a.y,1/(2e5*m),g,g.length-1);for(n=g.length,r=0;r<n;r++)h=g[r],u=g[r-1]||h,(h.x>u.x||u.y!==h.y&&u.x===h.x||h===u)&&h.x<=1?(u.cx=h.x-u.x,u.cy=h.y-u.y,u.n=h,u.nx=h.x,p&&1<r&&2<Math.abs(u.cy/u.cx-g[r-2].cy/g[r-2].cx)&&(p=0),u.cx<l&&(u.cx?l=u.cx:(u.cx=.001,r===n-1&&(u.x-=.001,l=Math.min(l,.001),p=0)))):(g.splice(r--,1),n--);if(i=1/(n=1/l+1|0),h=g[o=0],p){for(r=0;r<n;r++)f=r*i,h.nx<f&&(h=g[++o]),s=h.y+(f-h.x)/h.cx*h.cy,d[r]={x:f,cx:i,y:s,cy:0,nx:9},r&&(d[r-1].cy=s-d[r-1].y);d[n-1].cy=g[g.length-1].y-s}else{for(r=0;r<n;r++)h.nx<r*i&&(h=g[++o]),d[r]=h;o<g.length-1&&(d[r-1]=g[g.length-2])}return this.ease=function(e){var t=d[e*n|0]||d[n-1];return t.nx<e&&(t=t.n),t.y+(e-t.x)/t.cx*t.cy},(this.ease.custom=this).id&&M&&M.registerEase(this.id,this.ease),this},t.getSVGData=function getSVGData(e){return CustomEase.getSVGData(this,e)},CustomEase.create=function create(e,t,n){return new CustomEase(e,t,n).ease},CustomEase.register=function register(e){M=e,q()},CustomEase.get=function get(e){return M.parseEase(e)},CustomEase.getSVGData=function getSVGData(e,t){var n,a,r,i,o,h,u,f,c,l,g=(t=t||{}).width||100,x=t.height||100,d=t.x||0,p=(t.y||0)+x,y=M.utils.toArray(t.path)[0];if(t.invert&&(x=-x,p=0),"string"==typeof e&&(e=M.parseEase(e)),e.custom&&(e=e.custom),e instanceof CustomEase)n=function rawPathToString(e){!function _isNumber(e){return"number"==typeof e}(e[0])||(e=[e]);var t,n,s,a,r="",i=e.length;for(n=0;n<i;n++){for(a=e[n],r+="M"+m(a[0])+","+m(a[1])+" C",t=a.length,s=2;s<t;s++)r+=m(a[s++])+","+m(a[s++])+" "+m(a[s++])+","+m(a[s++])+" "+m(a[s++])+","+m(a[s])+" ";a.closed&&(r+="z")}return r}(function transformRawPath(e,t,n,s,a,r,i){for(var o,h,u,f,c,l=e.length;-1<--l;)for(h=(o=e[l]).length,u=0;u<h;u+=2)f=o[u],c=o[u+1],o[u]=f*t+c*s+r,o[u+1]=f*n+c*a+i;return e._dirty=1,e}([e.segment],g,0,0,-x,d,p));else{for(n=[d,p],i=1/(u=Math.max(5,200*(t.precision||1))),f=5/(u+=2),c=s(d+i*g),a=((l=s(p+e(i)*-x))-p)/(c-d),r=2;r<u;r++)o=s(d+r*i*g),h=s(p+e(r*i)*-x),(Math.abs((h-l)/(o-c)-a)>f||r===u-1)&&(n.push(c,l),a=(h-l)/(o-c)),c=o,l=h;n="M"+n.join(",")}return y&&y.setAttribute("d",n),n},CustomEase);function CustomEase(e,t,n){a||q(),this.id=e,this.setData(t,n)}p()&&M.registerPlugin(n),n.version="3.12.5",e.CustomEase=n,e.default=n;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

/*!
 * Flickity PACKAGED v2.3.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */
(function(e,i){if(typeof define=="function"&&define.amd){define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("jquery"))}else{e.jQueryBridget=i(e,e.jQuery)}})(window,function t(e,r){"use strict";var o=Array.prototype.slice;var i=e.console;var u=typeof i=="undefined"?function(){}:function(t){i.error(t)};function n(h,s,c){c=c||r||e.jQuery;if(!c){return}if(!s.prototype.option){s.prototype.option=function(t){if(!c.isPlainObject(t)){return}this.options=c.extend(true,this.options,t)}}c.fn[h]=function(t){if(typeof t=="string"){var e=o.call(arguments,1);return i(this,t,e)}n(this,t);return this};function i(t,r,o){var a;var l="$()."+h+'("'+r+'")';t.each(function(t,e){var i=c.data(e,h);if(!i){u(h+" not initialized. Cannot call methods, i.e. "+l);return}var n=i[r];if(!n||r.charAt(0)=="_"){u(l+" is not a valid method");return}var s=n.apply(i,o);a=a===undefined?s:a});return a!==undefined?a:t}function n(t,n){t.each(function(t,e){var i=c.data(e,h);if(i){i.option(n);i._init()}else{i=new s(e,n);c.data(e,h,i)}})}a(c)}function a(t){if(!t||t&&t.bridget){return}t.bridget=n}a(r||e.jQuery);return n});(function(t,e){if(typeof define=="function"&&define.amd){define("ev-emitter/ev-emitter",e)}else if(typeof module=="object"&&module.exports){module.exports=e()}else{t.EvEmitter=e()}})(typeof window!="undefined"?window:this,function(){function t(){}var e=t.prototype;e.on=function(t,e){if(!t||!e){return}var i=this._events=this._events||{};var n=i[t]=i[t]||[];if(n.indexOf(e)==-1){n.push(e)}return this};e.once=function(t,e){if(!t||!e){return}this.on(t,e);var i=this._onceEvents=this._onceEvents||{};var n=i[t]=i[t]||{};n[e]=true;return this};e.off=function(t,e){var i=this._events&&this._events[t];if(!i||!i.length){return}var n=i.indexOf(e);if(n!=-1){i.splice(n,1)}return this};e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(!i||!i.length){return}i=i.slice(0);e=e||[];var n=this._onceEvents&&this._onceEvents[t];for(var s=0;s<i.length;s++){var r=i[s];var o=n&&n[r];if(o){this.off(t,r);delete n[r]}r.apply(this,e)}return this};e.allOff=function(){delete this._events;delete this._onceEvents};return t});
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function(t,e){if(typeof define=="function"&&define.amd){define("get-size/get-size",e)}else if(typeof module=="object"&&module.exports){module.exports=e()}else{t.getSize=e()}})(window,function t(){"use strict";function m(t){var e=parseFloat(t);var i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}var i=typeof console=="undefined"?e:function(t){console.error(t)};var y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];var b=y.length;function E(){var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};for(var e=0;e<b;e++){var i=y[e];t[i]=0}return t}function S(t){var e=getComputedStyle(t);if(!e){i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? "+"See https://bit.ly/getsizebug1")}return e}var n=false;var C;function x(){if(n){return}n=true;var t=document.createElement("div");t.style.width="200px";t.style.padding="1px 2px 3px 4px";t.style.borderStyle="solid";t.style.borderWidth="1px 2px 3px 4px";t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=S(t);C=Math.round(m(i.width))==200;s.isBoxSizeOuter=C;e.removeChild(t)}function s(t){x();if(typeof t=="string"){t=document.querySelector(t)}if(!t||typeof t!="object"||!t.nodeType){return}var e=S(t);if(e.display=="none"){return E()}var i={};i.width=t.offsetWidth;i.height=t.offsetHeight;var n=i.isBorderBox=e.boxSizing=="border-box";for(var s=0;s<b;s++){var r=y[s];var o=e[r];var a=parseFloat(o);i[r]=!isNaN(a)?a:0}var l=i.paddingLeft+i.paddingRight;var h=i.paddingTop+i.paddingBottom;var c=i.marginLeft+i.marginRight;var u=i.marginTop+i.marginBottom;var d=i.borderLeftWidth+i.borderRightWidth;var f=i.borderTopWidth+i.borderBottomWidth;var p=n&&C;var v=m(e.width);if(v!==false){i.width=v+(p?0:l+d)}var g=m(e.height);if(g!==false){i.height=g+(p?0:h+f)}i.innerWidth=i.width-(l+d);i.innerHeight=i.height-(h+f);i.outerWidth=i.width+c;i.outerHeight=i.height+u;return i}return s});(function(t,e){"use strict";if(typeof define=="function"&&define.amd){define("desandro-matches-selector/matches-selector",e)}else if(typeof module=="object"&&module.exports){module.exports=e()}else{t.matchesSelector=e()}})(window,function t(){"use strict";var n=function(){var t=window.Element.prototype;if(t.matches){return"matches"}if(t.matchesSelector){return"matchesSelector"}var e=["webkit","moz","ms","o"];for(var i=0;i<e.length;i++){var n=e[i];var s=n+"MatchesSelector";if(t[s]){return s}}}();return function t(e,i){return e[n](i)}});(function(e,i){if(typeof define=="function"&&define.amd){define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("desandro-matches-selector"))}else{e.fizzyUIUtils=i(e,e.matchesSelector)}})(window,function t(h,r){var c={};c.extend=function(t,e){for(var i in e){t[i]=e[i]}return t};c.modulo=function(t,e){return(t%e+e)%e};var i=Array.prototype.slice;c.makeArray=function(t){if(Array.isArray(t)){return t}if(t===null||t===undefined){return[]}var e=typeof t=="object"&&typeof t.length=="number";if(e){return i.call(t)}return[t]};c.removeFrom=function(t,e){var i=t.indexOf(e);if(i!=-1){t.splice(i,1)}};c.getParent=function(t,e){while(t.parentNode&&t!=document.body){t=t.parentNode;if(r(t,e)){return t}}};c.getQueryElement=function(t){if(typeof t=="string"){return document.querySelector(t)}return t};c.handleEvent=function(t){var e="on"+t.type;if(this[e]){this[e](t)}};c.filterFindElements=function(t,n){t=c.makeArray(t);var s=[];t.forEach(function(t){if(!(t instanceof HTMLElement)){return}if(!n){s.push(t);return}if(r(t,n)){s.push(t)}var e=t.querySelectorAll(n);for(var i=0;i<e.length;i++){s.push(e[i])}});return s};c.debounceMethod=function(t,e,n){n=n||100;var s=t.prototype[e];var r=e+"Timeout";t.prototype[e]=function(){var t=this[r];clearTimeout(t);var e=arguments;var i=this;this[r]=setTimeout(function(){s.apply(i,e);delete i[r]},n)}};c.docReady=function(t){var e=document.readyState;if(e=="complete"||e=="interactive"){setTimeout(t)}else{document.addEventListener("DOMContentLoaded",t)}};c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var u=h.console;c.htmlInit=function(a,l){c.docReady(function(){var t=c.toDashed(l);var s="data-"+t;var e=document.querySelectorAll("["+s+"]");var i=document.querySelectorAll(".js-"+t);var n=c.makeArray(e).concat(c.makeArray(i));var r=s+"-options";var o=h.jQuery;n.forEach(function(e){var t=e.getAttribute(s)||e.getAttribute(r);var i;try{i=t&&JSON.parse(t)}catch(t){if(u){u.error("Error parsing "+s+" on "+e.className+": "+t)}return}var n=new a(e,i);if(o){o.data(e,l,n)}})})};return c});(function(e,i){if(typeof define=="function"&&define.amd){define("flickity/js/cell",["get-size/get-size"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("get-size"))}else{e.Flickity=e.Flickity||{};e.Flickity.Cell=i(e,e.getSize)}})(window,function t(e,i){function n(t,e){this.element=t;this.parent=e;this.create()}var s=n.prototype;s.create=function(){this.element.style.position="absolute";this.element.setAttribute("aria-hidden","true");this.x=0;this.shift=0;this.element.style[this.parent.originSide]=0};s.destroy=function(){this.unselect();this.element.style.position="";var t=this.parent.originSide;this.element.style[t]="";this.element.style.transform="";this.element.removeAttribute("aria-hidden")};s.getSize=function(){this.size=i(this.element)};s.setPosition=function(t){this.x=t;this.updateTarget();this.renderPosition(t)};s.updateTarget=s.setDefaultTarget=function(){var t=this.parent.originSide=="left"?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign};s.renderPosition=function(t){var e=this.parent.originSide==="left"?1:-1;var i=this.parent.options.percentPosition?t*e*(this.parent.size.innerWidth/this.size.width):t*e;this.element.style.transform="translateX("+this.parent.getPositionValue(i)+")"};s.select=function(){this.element.classList.add("is-selected");this.element.removeAttribute("aria-hidden")};s.unselect=function(){this.element.classList.remove("is-selected");this.element.setAttribute("aria-hidden","true")};s.wrapShift=function(t){this.shift=t;this.renderPosition(this.x+this.parent.slideableWidth*t)};s.remove=function(){this.element.parentNode.removeChild(this.element)};return n});(function(t,e){if(typeof define=="function"&&define.amd){define("flickity/js/slide",e)}else if(typeof module=="object"&&module.exports){module.exports=e()}else{t.Flickity=t.Flickity||{};t.Flickity.Slide=e()}})(window,function t(){"use strict";function e(t){this.parent=t;this.isOriginLeft=t.originSide=="left";this.cells=[];this.outerWidth=0;this.height=0}var i=e.prototype;i.addCell=function(t){this.cells.push(t);this.outerWidth+=t.size.outerWidth;this.height=Math.max(t.size.outerHeight,this.height);if(this.cells.length==1){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}};i.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft";var e=this.getLastCell();var i=e?e.size[t]:0;var n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign};i.getLastCell=function(){return this.cells[this.cells.length-1]};i.select=function(){this.cells.forEach(function(t){t.select()})};i.unselect=function(){this.cells.forEach(function(t){t.unselect()})};i.getCellElements=function(){return this.cells.map(function(t){return t.element})};return e});(function(e,i){if(typeof define=="function"&&define.amd){define("flickity/js/animate",["fizzy-ui-utils/utils"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("fizzy-ui-utils"))}else{e.Flickity=e.Flickity||{};e.Flickity.animatePrototype=i(e,e.fizzyUIUtils)}})(window,function t(e,i){var n={};n.startAnimation=function(){if(this.isAnimating){return}this.isAnimating=true;this.restingFrames=0;this.animate()};n.animate=function(){this.applyDragForce();this.applySelectedAttraction();var t=this.x;this.integratePhysics();this.positionSlider();this.settle(t);if(this.isAnimating){var e=this;requestAnimationFrame(function t(){e.animate()})}};n.positionSlider=function(){var t=this.x;if(this.options.wrapAround&&this.cells.length>1){t=i.modulo(t,this.slideableWidth);t-=this.slideableWidth;this.shiftWrapCells(t)}this.setTranslateX(t,this.isAnimating);this.dispatchScrollEvent()};n.setTranslateX=function(t,e){t+=this.cursorPosition;t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"};n.dispatchScrollEvent=function(){var t=this.slides[0];if(!t){return}var e=-this.x-t.target;var i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])};n.positionSliderAtSelected=function(){if(!this.cells.length){return}this.x=-this.selectedSlide.target;this.velocity=0;this.positionSlider()};n.getPositionValue=function(t){if(this.options.percentPosition){return Math.round(t/this.size.innerWidth*1e4)*.01+"%"}else{return Math.round(t)+"px"}};n.settle=function(t){var e=!this.isPointerDown&&Math.round(this.x*100)==Math.round(t*100);if(e){this.restingFrames++}if(this.restingFrames>2){this.isAnimating=false;delete this.isFreeScrolling;this.positionSlider();this.dispatchEvent("settle",null,[this.selectedIndex])}};n.shiftWrapCells=function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)};n._shiftCells=function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n];var r=e>0?i:0;s.wrapShift(r);e-=s.size.outerWidth}};n._unshiftCells=function(t){if(!t||!t.length){return}for(var e=0;e<t.length;e++){t[e].wrapShift(0)}};n.integratePhysics=function(){this.x+=this.velocity;this.velocity*=this.getFrictionFactor()};n.applyForce=function(t){this.velocity+=t};n.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]};n.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor())};n.applyDragForce=function(){if(!this.isDraggable||!this.isPointerDown){return}var t=this.dragX-this.x;var e=t-this.velocity;this.applyForce(e)};n.applySelectedAttraction=function(){var t=this.isDraggable&&this.isPointerDown;if(t||this.isFreeScrolling||!this.slides.length){return}var e=this.selectedSlide.target*-1-this.x;var i=e*this.options.selectedAttraction;this.applyForce(i)};return n});(function(o,a){if(typeof define=="function"&&define.amd){define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(t,e,i,n,s,r){return a(o,t,e,i,n,s,r)})}else if(typeof module=="object"&&module.exports){module.exports=a(o,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"))}else{var t=o.Flickity;o.Flickity=a(o,o.EvEmitter,o.getSize,o.fizzyUIUtils,t.Cell,t.Slide,t.animatePrototype)}})(window,function t(n,e,i,a,s,o,r){var l=n.jQuery;var h=n.getComputedStyle;var c=n.console;function u(t,e){t=a.makeArray(t);while(t.length){e.appendChild(t.shift())}}var d=0;var f={};function p(t,e){var i=a.getQueryElement(t);if(!i){if(c){c.error("Bad element for Flickity: "+(i||t))}return}this.element=i;if(this.element.flickityGUID){var n=f[this.element.flickityGUID];if(n)n.option(e);return n}if(l){this.$element=l(this.element)}this.options=a.extend({},this.constructor.defaults);this.option(e);this._create()}p.defaults={accessibility:true,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:true,percentPosition:true,resize:true,selectedAttraction:.025,setGallerySize:true};p.createMethods=[];var v=p.prototype;a.extend(v,e.prototype);v._create=function(){var t=this.guid=++d;this.element.flickityGUID=t;f[t]=this;this.selectedIndex=0;this.restingFrames=0;this.x=0;this.velocity=0;this.originSide=this.options.rightToLeft?"right":"left";this.viewport=document.createElement("div");this.viewport.className="flickity-viewport";this._createSlider();if(this.options.resize||this.options.watchCSS){n.addEventListener("resize",this)}for(var e in this.options.on){var i=this.options.on[e];this.on(e,i)}p.createMethods.forEach(function(t){this[t]()},this);if(this.options.watchCSS){this.watchCSS()}else{this.activate()}};v.option=function(t){a.extend(this.options,t)};v.activate=function(){if(this.isActive){return}this.isActive=true;this.element.classList.add("flickity-enabled");if(this.options.rightToLeft){this.element.classList.add("flickity-rtl")}this.getSize();var t=this._filterFindCellElements(this.element.children);u(t,this.slider);this.viewport.appendChild(this.slider);this.element.appendChild(this.viewport);this.reloadCells();if(this.options.accessibility){this.element.tabIndex=0;this.element.addEventListener("keydown",this)}this.emitEvent("activate");this.selectInitialIndex();this.isInitActivated=true;this.dispatchEvent("ready")};v._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider";t.style[this.originSide]=0;this.slider=t};v._filterFindCellElements=function(t){return a.filterFindElements(t,this.options.cellSelector)};v.reloadCells=function(){this.cells=this._makeCells(this.slider.children);this.positionCells();this._getWrapShiftCells();this.setGallerySize()};v._makeCells=function(t){var e=this._filterFindCellElements(t);var i=e.map(function(t){return new s(t,this)},this);return i};v.getLastCell=function(){return this.cells[this.cells.length-1]};v.getLastSlide=function(){return this.slides[this.slides.length-1]};v.positionCells=function(){this._sizeCells(this.cells);this._positionCells(0)};v._positionCells=function(t){t=t||0;this.maxCellHeight=t?this.maxCellHeight||0:0;var e=0;if(t>0){var i=this.cells[t-1];e=i.x+i.size.outerWidth}var n=this.cells.length;for(var s=t;s<n;s++){var r=this.cells[s];r.setPosition(e);e+=r.size.outerWidth;this.maxCellHeight=Math.max(r.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e;this.updateSlides();this._containSlides();this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0};v._sizeCells=function(t){t.forEach(function(t){t.getSize()})};v.updateSlides=function(){this.slides=[];if(!this.cells.length){return}var n=new o(this);this.slides.push(n);var t=this.originSide=="left";var s=t?"marginRight":"marginLeft";var r=this._getCanCellFit();this.cells.forEach(function(t,e){if(!n.cells.length){n.addCell(t);return}var i=n.outerWidth-n.firstMargin+(t.size.outerWidth-t.size[s]);if(r.call(this,e,i)){n.addCell(t)}else{n.updateTarget();n=new o(this);this.slides.push(n);n.addCell(t)}},this);n.updateTarget();this.updateSelectedSlide()};v._getCanCellFit=function(){var t=this.options.groupCells;if(!t){return function(){return false}}else if(typeof t=="number"){var e=parseInt(t,10);return function(t){return t%e!==0}}var i=typeof t=="string"&&t.match(/^(\d+)%$/);var n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}};v._init=v.reposition=function(){this.positionCells();this.positionSliderAtSelected()};v.getSize=function(){this.size=i(this.element);this.setCellAlign();this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};v.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign};v.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}};v._getWrapShiftCells=function(){if(!this.options.wrapAround){return}this._unshiftCells(this.beforeShiftCells);this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition;var e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1);t=this.size.innerWidth-this.cursorPosition;this.afterShiftCells=this._getGapCells(t,0,1)};v._getGapCells=function(t,e,i){var n=[];while(t>0){var s=this.cells[e];if(!s){break}n.push(s);e+=i;t-=s.size.outerWidth}return n};v._containSlides=function(){if(!this.options.contain||this.options.wrapAround||!this.cells.length){return}var t=this.options.rightToLeft;var e=t?"marginRight":"marginLeft";var i=t?"marginLeft":"marginRight";var n=this.slideableWidth-this.getLastCell().size[i];var s=n<this.size.innerWidth;var r=this.cursorPosition+this.cells[0].size[e];var o=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){if(s){t.target=n*this.cellAlign}else{t.target=Math.max(t.target,r);t.target=Math.min(t.target,o)}},this)};v.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;this.emitEvent(t,n);if(l&&this.$element){t+=this.options.namespaceJQueryEvents?".flickity":"";var s=t;if(e){var r=new l.Event(e);r.type=t;s=r}this.$element.trigger(s,i)}};v.select=function(t,e,i){if(!this.isActive){return}t=parseInt(t,10);this._wrapSelect(t);if(this.options.wrapAround||e){t=a.modulo(t,this.slides.length)}if(!this.slides[t]){return}var n=this.selectedIndex;this.selectedIndex=t;this.updateSelectedSlide();if(i){this.positionSliderAtSelected()}else{this.startAnimation()}if(this.options.adaptiveHeight){this.setGallerySize()}this.dispatchEvent("select",null,[t]);if(t!=n){this.dispatchEvent("change",null,[t])}this.dispatchEvent("cellSelect")};v._wrapSelect=function(t){var e=this.slides.length;var i=this.options.wrapAround&&e>1;if(!i){return t}var n=a.modulo(t,e);var s=Math.abs(n-this.selectedIndex);var r=Math.abs(n+e-this.selectedIndex);var o=Math.abs(n-e-this.selectedIndex);if(!this.isDragSelect&&r<s){t+=e}else if(!this.isDragSelect&&o<s){t-=e}if(t<0){this.x-=this.slideableWidth}else if(t>=e){this.x+=this.slideableWidth}};v.previous=function(t,e){this.select(this.selectedIndex-1,t,e)};v.next=function(t,e){this.select(this.selectedIndex+1,t,e)};v.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];if(!t){return}this.unselectSelectedSlide();this.selectedSlide=t;t.select();this.selectedCells=t.cells;this.selectedElements=t.getCellElements();this.selectedCell=t.cells[0];this.selectedElement=this.selectedElements[0]};v.unselectSelectedSlide=function(){if(this.selectedSlide){this.selectedSlide.unselect()}};v.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated){this.select(this.selectedIndex,false,true);return}if(t&&typeof t=="string"){var e=this.queryCell(t);if(e){this.selectCell(t,false,true);return}}var i=0;if(t&&this.slides[t]){i=t}this.select(i,false,true)};v.selectCell=function(t,e,i){var n=this.queryCell(t);if(!n){return}var s=this.getCellSlideIndex(n);this.select(s,e,i)};v.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){var i=this.slides[e];var n=i.cells.indexOf(t);if(n!=-1){return e}}};v.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t){return i}}};v.getCells=function(t){t=a.makeArray(t);var i=[];t.forEach(function(t){var e=this.getCell(t);if(e){i.push(e)}},this);return i};v.getCellElements=function(){return this.cells.map(function(t){return t.element})};v.getParentCell=function(t){var e=this.getCell(t);if(e){return e}t=a.getParent(t,".flickity-slider > *");return this.getCell(t)};v.getAdjacentCellElements=function(t,e){if(!t){return this.selectedSlide.getCellElements()}e=e===undefined?this.selectedIndex:e;var i=this.slides.length;if(1+t*2>=i){return this.getCellElements()}var n=[];for(var s=e-t;s<=e+t;s++){var r=this.options.wrapAround?a.modulo(s,i):s;var o=this.slides[r];if(o){n=n.concat(o.getCellElements())}}return n};v.queryCell=function(t){if(typeof t=="number"){return this.cells[t]}if(typeof t=="string"){if(t.match(/^[#.]?[\d/]/)){return}t=this.element.querySelector(t)}return this.getCell(t)};v.uiChange=function(){this.emitEvent("uiChange")};v.childUIPointerDown=function(t){if(t.type!="touchstart"){t.preventDefault()}this.focus()};v.onresize=function(){this.watchCSS();this.resize()};a.debounceMethod(p,"onresize",150);v.resize=function(){if(!this.isActive||this.isAnimating||this.isDragging){return}this.getSize();if(this.options.wrapAround){this.x=a.modulo(this.x,this.slideableWidth)}this.positionCells();this._getWrapShiftCells();this.setGallerySize();this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,false,true)};v.watchCSS=function(){var t=this.options.watchCSS;if(!t){return}var e=h(this.element,":after").content;if(e.indexOf("flickity")!=-1){this.activate()}else{this.deactivate()}};v.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(!this.options.accessibility||e){return}var i=p.keyboardHandlers[t.keyCode];if(i){i.call(this)}};p.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange();this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange();this[t]()}};v.focus=function(){var t=n.pageYOffset;this.element.focus({preventScroll:true});if(n.pageYOffset!=t){n.scrollTo(n.pageXOffset,t)}};v.deactivate=function(){if(!this.isActive){return}this.element.classList.remove("flickity-enabled");this.element.classList.remove("flickity-rtl");this.unselectSelectedSlide();this.cells.forEach(function(t){t.destroy()});this.element.removeChild(this.viewport);u(this.slider.children,this.element);if(this.options.accessibility){this.element.removeAttribute("tabIndex");this.element.removeEventListener("keydown",this)}this.isActive=false;this.emitEvent("deactivate")};v.destroy=function(){this.deactivate();n.removeEventListener("resize",this);this.allOff();this.emitEvent("destroy");if(l&&this.$element){l.removeData(this.element,"flickity")}delete this.element.flickityGUID;delete f[this.guid]};a.extend(v,r);p.data=function(t){t=a.getQueryElement(t);var e=t&&t.flickityGUID;return e&&f[e]};a.htmlInit(p,"flickity");if(l&&l.bridget){l.bridget("flickity",p)}p.setJQuery=function(t){l=t};p.Cell=s;p.Slide=o;return p});
/*!
 * Unipointer v2.4.0
 * base class for doing one thing with pointer event
 * MIT license
 */
(function(e,i){if(typeof define=="function"&&define.amd){define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("ev-emitter"))}else{e.Unipointer=i(e,e.EvEmitter)}})(window,function t(s,e){function i(){}function n(){}var r=n.prototype=Object.create(e.prototype);r.bindStartEvent=function(t){this._bindStartEvent(t,true)};r.unbindStartEvent=function(t){this._bindStartEvent(t,false)};r._bindStartEvent=function(t,e){e=e===undefined?true:e;var i=e?"addEventListener":"removeEventListener";var n="mousedown";if("ontouchstart"in s){n="touchstart"}else if(s.PointerEvent){n="pointerdown"}t[i](n,this)};r.handleEvent=function(t){var e="on"+t.type;if(this[e]){this[e](t)}};r.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier){return i}}};r.onmousedown=function(t){var e=t.button;if(e&&(e!==0&&e!==1)){return}this._pointerDown(t,t)};r.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])};r.onpointerdown=function(t){this._pointerDown(t,t)};r._pointerDown=function(t,e){if(t.button||this.isPointerDown){return}this.isPointerDown=true;this.pointerIdentifier=e.pointerId!==undefined?e.pointerId:e.identifier;this.pointerDown(t,e)};r.pointerDown=function(t,e){this._bindPostStartEvents(t);this.emitEvent("pointerDown",[t,e])};var o={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};r._bindPostStartEvents=function(t){if(!t){return}var e=o[t.type];e.forEach(function(t){s.addEventListener(t,this)},this);this._boundPointerEvents=e};r._unbindPostStartEvents=function(){if(!this._boundPointerEvents){return}this._boundPointerEvents.forEach(function(t){s.removeEventListener(t,this)},this);delete this._boundPointerEvents};r.onmousemove=function(t){this._pointerMove(t,t)};r.onpointermove=function(t){if(t.pointerId==this.pointerIdentifier){this._pointerMove(t,t)}};r.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);if(e){this._pointerMove(t,e)}};r._pointerMove=function(t,e){this.pointerMove(t,e)};r.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])};r.onmouseup=function(t){this._pointerUp(t,t)};r.onpointerup=function(t){if(t.pointerId==this.pointerIdentifier){this._pointerUp(t,t)}};r.ontouchend=function(t){var e=this.getTouch(t.changedTouches);if(e){this._pointerUp(t,e)}};r._pointerUp=function(t,e){this._pointerDone();this.pointerUp(t,e)};r.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])};r._pointerDone=function(){this._pointerReset();this._unbindPostStartEvents();this.pointerDone()};r._pointerReset=function(){this.isPointerDown=false;delete this.pointerIdentifier};r.pointerDone=i;r.onpointercancel=function(t){if(t.pointerId==this.pointerIdentifier){this._pointerCancel(t,t)}};r.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);if(e){this._pointerCancel(t,e)}};r._pointerCancel=function(t,e){this._pointerDone();this.pointerCancel(t,e)};r.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])};n.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}};return n});
/*!
 * Unidragger v2.4.0
 * Draggable base class
 * MIT license
 */
(function(e,i){if(typeof define=="function"&&define.amd){define("unidragger/unidragger",["unipointer/unipointer"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("unipointer"))}else{e.Unidragger=i(e,e.Unipointer)}})(window,function t(r,e){function i(){}var n=i.prototype=Object.create(e.prototype);n.bindHandles=function(){this._bindHandles(true)};n.unbindHandles=function(){this._bindHandles(false)};n._bindHandles=function(t){t=t===undefined?true:t;var e=t?"addEventListener":"removeEventListener";var i=t?this._touchActionValue:"";for(var n=0;n<this.handles.length;n++){var s=this.handles[n];this._bindStartEvent(s,t);s[e]("click",this);if(r.PointerEvent){s.style.touchAction=i}}};n._touchActionValue="none";n.pointerDown=function(t,e){var i=this.okayPointerDown(t);if(!i){return}this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY};t.preventDefault();this.pointerDownBlur();this._bindPostStartEvents(t);this.emitEvent("pointerDown",[t,e])};var s={TEXTAREA:true,INPUT:true,SELECT:true,OPTION:true};var o={radio:true,checkbox:true,button:true,submit:true,image:true,file:true};n.okayPointerDown=function(t){var e=s[t.target.nodeName];var i=o[t.target.type];var n=!e||i;if(!n){this._pointerReset()}return n};n.pointerDownBlur=function(){var t=document.activeElement;var e=t&&t.blur&&t!=document.body;if(e){t.blur()}};n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]);this._dragMove(t,e,i)};n._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};if(!this.isDragging&&this.hasDragStarted(i)){this._dragStart(t,e)}return i};n.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3};n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]);this._dragPointerUp(t,e)};n._dragPointerUp=function(t,e){if(this.isDragging){this._dragEnd(t,e)}else{this._staticClick(t,e)}};n._dragStart=function(t,e){this.isDragging=true;this.isPreventingClicks=true;this.dragStart(t,e)};n.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])};n._dragMove=function(t,e,i){if(!this.isDragging){return}this.dragMove(t,e,i)};n.dragMove=function(t,e,i){t.preventDefault();this.emitEvent("dragMove",[t,e,i])};n._dragEnd=function(t,e){this.isDragging=false;setTimeout(function(){delete this.isPreventingClicks}.bind(this));this.dragEnd(t,e)};n.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])};n.onclick=function(t){if(this.isPreventingClicks){t.preventDefault()}};n._staticClick=function(t,e){if(this.isIgnoringMouseUp&&t.type=="mouseup"){return}this.staticClick(t,e);if(t.type!="mouseup"){this.isIgnoringMouseUp=true;setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)}};n.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])};i.getPointerPoint=e.getPointerPoint;return i});(function(n,s){if(typeof define=="function"&&define.amd){define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)})}else if(typeof module=="object"&&module.exports){module.exports=s(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils"))}else{n.Flickity=s(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}})(window,function t(n,e,i,a){a.extend(e.defaults,{draggable:">1",dragThreshold:3});e.createMethods.push("_createDrag");var s=e.prototype;a.extend(s,i.prototype);s._touchActionValue="pan-y";s._createDrag=function(){this.on("activate",this.onActivateDrag);this.on("uiChange",this._uiChangeDrag);this.on("deactivate",this.onDeactivateDrag);this.on("cellChange",this.updateDraggable)};s.onActivateDrag=function(){this.handles=[this.viewport];this.bindHandles();this.updateDraggable()};s.onDeactivateDrag=function(){this.unbindHandles();this.element.classList.remove("is-draggable")};s.updateDraggable=function(){if(this.options.draggable==">1"){this.isDraggable=this.slides.length>1}else{this.isDraggable=this.options.draggable}if(this.isDraggable){this.element.classList.add("is-draggable")}else{this.element.classList.remove("is-draggable")}};s.bindDrag=function(){this.options.draggable=true;this.updateDraggable()};s.unbindDrag=function(){this.options.draggable=false;this.updateDraggable()};s._uiChangeDrag=function(){delete this.isFreeScrolling};s.pointerDown=function(t,e){if(!this.isDraggable){this._pointerDownDefault(t,e);return}var i=this.okayPointerDown(t);if(!i){return}this._pointerDownPreventDefault(t);this.pointerDownFocus(t);if(document.activeElement!=this.element){this.pointerDownBlur()}this.dragX=this.x;this.viewport.classList.add("is-pointer-down");this.pointerDownScroll=o();n.addEventListener("scroll",this);this._pointerDownDefault(t,e)};s._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY};this._bindPostStartEvents(t);this.dispatchEvent("pointerDown",t,[e])};var r={INPUT:true,TEXTAREA:true,SELECT:true};s.pointerDownFocus=function(t){var e=r[t.target.nodeName];if(!e){this.focus()}};s._pointerDownPreventDefault=function(t){var e=t.type=="touchstart";var i=t.pointerType=="touch";var n=r[t.target.nodeName];if(!e&&!i&&!n){t.preventDefault()}};s.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold};s.pointerUp=function(t,e){delete this.isTouchScrolling;this.viewport.classList.remove("is-pointer-down");this.dispatchEvent("pointerUp",t,[e]);this._dragPointerUp(t,e)};s.pointerDone=function(){n.removeEventListener("scroll",this);delete this.pointerDownScroll};s.dragStart=function(t,e){if(!this.isDraggable){return}this.dragStartPosition=this.x;this.startAnimation();n.removeEventListener("scroll",this);this.dispatchEvent("dragStart",t,[e])};s.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]);this._dragMove(t,e,i)};s.dragMove=function(t,e,i){if(!this.isDraggable){return}t.preventDefault();this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;if(this.options.wrapAround){i.x%=this.slideableWidth}var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var r=Math.max(-this.slides[0].target,this.dragStartPosition);s=s>r?(s+r)*.5:s;var o=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<o?(s+o)*.5:s}this.dragX=s;this.dragMoveTime=new Date;this.dispatchEvent("dragMove",t,[e,i])};s.dragEnd=function(t,e){if(!this.isDraggable){return}if(this.options.freeScroll){this.isFreeScrolling=true}var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else if(!this.options.freeScroll&&i==this.selectedIndex){i+=this.dragEndBoostSelect()}delete this.previousDragX;this.isDragSelect=this.options.wrapAround;this.select(i);delete this.isDragSelect;this.dispatchEvent("dragEnd",t,[e])};s.dragEndRestingSelect=function(){var t=this.getRestingPosition();var e=Math.abs(this.getSlideDistance(-t,this.selectedIndex));var i=this._getClosestResting(t,e,1);var n=this._getClosestResting(t,e,-1);var s=i.distance<n.distance?i.index:n.index;return s};s._getClosestResting=function(t,e,i){var n=this.selectedIndex;var s=Infinity;var r=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};while(r(e,s)){n+=i;s=e;e=this.getSlideDistance(-t,n);if(e===null){break}e=Math.abs(e)}return{distance:s,index:n-i}};s.getSlideDistance=function(t,e){var i=this.slides.length;var n=this.options.wrapAround&&i>1;var s=n?a.modulo(e,i):e;var r=this.slides[s];if(!r){return null}var o=n?this.slideableWidth*Math.floor(e/i):0;return t-(r.target+o)};s.dragEndBoostSelect=function(){if(this.previousDragX===undefined||!this.dragMoveTime||new Date-this.dragMoveTime>100){return 0}var t=this.getSlideDistance(-this.dragX,this.selectedIndex);var e=this.previousDragX-this.dragX;if(t>0&&e>0){return 1}else if(t<0&&e<0){return-1}return 0};s.staticClick=function(t,e){var i=this.getParentCell(t.target);var n=i&&i.element;var s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])};s.onscroll=function(){var t=o();var e=this.pointerDownScroll.x-t.x;var i=this.pointerDownScroll.y-t.y;if(Math.abs(e)>3||Math.abs(i)>3){this._pointerDone()}};function o(){return{x:n.pageXOffset,y:n.pageYOffset}}return e});(function(n,s){if(typeof define=="function"&&define.amd){define("flickity/js/prev-next-button",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)})}else if(typeof module=="object"&&module.exports){module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils"))}else{s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}})(window,function t(e,i,n,s){"use strict";var r="http://www.w3.org/2000/svg";function o(t,e){this.direction=t;this.parent=e;this._create()}o.prototype=Object.create(n.prototype);o.prototype._create=function(){this.isEnabled=true;this.isPrevious=this.direction==-1;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button";e.className+=this.isPrevious?" previous":" next";e.setAttribute("type","button");this.disable();e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i);this.parent.on("select",this.update.bind(this));this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))};o.prototype.activate=function(){this.bindStartEvent(this.element);this.element.addEventListener("click",this);this.parent.element.appendChild(this.element)};o.prototype.deactivate=function(){this.parent.element.removeChild(this.element);this.unbindStartEvent(this.element);this.element.removeEventListener("click",this)};o.prototype.createSVG=function(){var t=document.createElementNS(r,"svg");t.setAttribute("class","flickity-button-icon");t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(r,"path");var i=a(this.parent.options.arrowShape);e.setAttribute("d",i);e.setAttribute("class","arrow");if(!this.isLeft){e.setAttribute("transform","translate(100, 100) rotate(180) ")}t.appendChild(e);return t};function a(t){if(typeof t=="string"){return t}return"M "+t.x0+",50"+" L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50 "+" L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z"}o.prototype.handleEvent=s.handleEvent;o.prototype.onclick=function(){if(!this.isEnabled){return}this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()};o.prototype.enable=function(){if(this.isEnabled){return}this.element.disabled=false;this.isEnabled=true};o.prototype.disable=function(){if(!this.isEnabled){return}this.element.disabled=true;this.isEnabled=false};o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&t.length>1){this.enable();return}var e=t.length?t.length-1:0;var i=this.isPrevious?0:e;var n=this.parent.selectedIndex==i?"disable":"enable";this[n]()};o.prototype.destroy=function(){this.deactivate();this.allOff()};s.extend(i.defaults,{prevNextButtons:true,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}});i.createMethods.push("_createPrevNextButtons");var l=i.prototype;l._createPrevNextButtons=function(){if(!this.options.prevNextButtons){return}this.prevButton=new o(-1,this);this.nextButton=new o(1,this);this.on("activate",this.activatePrevNextButtons)};l.activatePrevNextButtons=function(){this.prevButton.activate();this.nextButton.activate();this.on("deactivate",this.deactivatePrevNextButtons)};l.deactivatePrevNextButtons=function(){this.prevButton.deactivate();this.nextButton.deactivate();this.off("deactivate",this.deactivatePrevNextButtons)};i.PrevNextButton=o;return i});(function(n,s){if(typeof define=="function"&&define.amd){define("flickity/js/page-dots",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)})}else if(typeof module=="object"&&module.exports){module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils"))}else{s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}})(window,function t(e,i,n,s){function r(t){this.parent=t;this._create()}r.prototype=Object.create(n.prototype);r.prototype._create=function(){this.holder=document.createElement("ol");this.holder.className="flickity-page-dots";this.dots=[];this.handleClick=this.onClick.bind(this);this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))};r.prototype.activate=function(){this.setDots();this.holder.addEventListener("click",this.handleClick);this.bindStartEvent(this.holder);this.parent.element.appendChild(this.holder)};r.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick);this.unbindStartEvent(this.holder);this.parent.element.removeChild(this.holder)};r.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;if(t>0){this.addDots(t)}else if(t<0){this.removeDots(-t)}};r.prototype.addDots=function(t){var e=document.createDocumentFragment();var i=[];var n=this.dots.length;var s=n+t;for(var r=n;r<s;r++){var o=document.createElement("li");o.className="dot";o.setAttribute("aria-label","Page dot "+(r+1));e.appendChild(o);i.push(o)}this.holder.appendChild(e);this.dots=this.dots.concat(i)};r.prototype.removeDots=function(t){var e=this.dots.splice(this.dots.length-t,t);e.forEach(function(t){this.holder.removeChild(t)},this)};r.prototype.updateSelected=function(){if(this.selectedDot){this.selectedDot.className="dot";this.selectedDot.removeAttribute("aria-current")}if(!this.dots.length){return}this.selectedDot=this.dots[this.parent.selectedIndex];this.selectedDot.className="dot is-selected";this.selectedDot.setAttribute("aria-current","step")};r.prototype.onTap=r.prototype.onClick=function(t){var e=t.target;if(e.nodeName!="LI"){return}this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)};r.prototype.destroy=function(){this.deactivate();this.allOff()};i.PageDots=r;s.extend(i.defaults,{pageDots:true});i.createMethods.push("_createPageDots");var o=i.prototype;o._createPageDots=function(){if(!this.options.pageDots){return}this.pageDots=new r(this);this.on("activate",this.activatePageDots);this.on("select",this.updateSelectedPageDots);this.on("cellChange",this.updatePageDots);this.on("resize",this.updatePageDots);this.on("deactivate",this.deactivatePageDots)};o.activatePageDots=function(){this.pageDots.activate()};o.updateSelectedPageDots=function(){this.pageDots.updateSelected()};o.updatePageDots=function(){this.pageDots.setDots()};o.deactivatePageDots=function(){this.pageDots.deactivate()};i.PageDots=r;return i});(function(t,n){if(typeof define=="function"&&define.amd){define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,e,i){return n(t,e,i)})}else if(typeof module=="object"&&module.exports){module.exports=n(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity"))}else{n(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}})(window,function t(e,i,n){function s(t){this.parent=t;this.state="stopped";this.onVisibilityChange=this.visibilityChange.bind(this);this.onVisibilityPlay=this.visibilityPlay.bind(this)}s.prototype=Object.create(e.prototype);s.prototype.play=function(){if(this.state=="playing"){return}var t=document.hidden;if(t){document.addEventListener("visibilitychange",this.onVisibilityPlay);return}this.state="playing";document.addEventListener("visibilitychange",this.onVisibilityChange);this.tick()};s.prototype.tick=function(){if(this.state!="playing"){return}var t=this.parent.options.autoPlay;t=typeof t=="number"?t:3e3;var e=this;this.clear();this.timeout=setTimeout(function(){e.parent.next(true);e.tick()},t)};s.prototype.stop=function(){this.state="stopped";this.clear();document.removeEventListener("visibilitychange",this.onVisibilityChange)};s.prototype.clear=function(){clearTimeout(this.timeout)};s.prototype.pause=function(){if(this.state=="playing"){this.state="paused";this.clear()}};s.prototype.unpause=function(){if(this.state=="paused"){this.play()}};s.prototype.visibilityChange=function(){var t=document.hidden;this[t?"pause":"unpause"]()};s.prototype.visibilityPlay=function(){this.play();document.removeEventListener("visibilitychange",this.onVisibilityPlay)};i.extend(n.defaults,{pauseAutoPlayOnHover:true});n.createMethods.push("_createPlayer");var r=n.prototype;r._createPlayer=function(){this.player=new s(this);this.on("activate",this.activatePlayer);this.on("uiChange",this.stopPlayer);this.on("pointerDown",this.stopPlayer);this.on("deactivate",this.deactivatePlayer)};r.activatePlayer=function(){if(!this.options.autoPlay){return}this.player.play();this.element.addEventListener("mouseenter",this)};r.playPlayer=function(){this.player.play()};r.stopPlayer=function(){this.player.stop()};r.pausePlayer=function(){this.player.pause()};r.unpausePlayer=function(){this.player.unpause()};r.deactivatePlayer=function(){this.player.stop();this.element.removeEventListener("mouseenter",this)};r.onmouseenter=function(){if(!this.options.pauseAutoPlayOnHover){return}this.player.pause();this.element.addEventListener("mouseleave",this)};r.onmouseleave=function(){this.player.unpause();this.element.removeEventListener("mouseleave",this)};n.Player=s;return n});(function(i,n){if(typeof define=="function"&&define.amd){define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)})}else if(typeof module=="object"&&module.exports){module.exports=n(i,require("./flickity"),require("fizzy-ui-utils"))}else{n(i,i.Flickity,i.fizzyUIUtils)}})(window,function t(e,i,n){function l(t){var e=document.createDocumentFragment();t.forEach(function(t){e.appendChild(t.element)});return e}var s=i.prototype;s.insert=function(t,e){var i=this._makeCells(t);if(!i||!i.length){return}var n=this.cells.length;e=e===undefined?n:e;var s=l(i);var r=e==n;if(r){this.slider.appendChild(s)}else{var o=this.cells[e].element;this.slider.insertBefore(s,o)}if(e===0){this.cells=i.concat(this.cells)}else if(r){this.cells=this.cells.concat(i)}else{var a=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(a)}this._sizeCells(i);this.cellChange(e,true)};s.append=function(t){this.insert(t,this.cells.length)};s.prepend=function(t){this.insert(t,0)};s.remove=function(t){var e=this.getCells(t);if(!e||!e.length){return}var i=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);i=Math.min(e,i);n.removeFrom(this.cells,t)},this);this.cellChange(i,true)};s.cellSizeChange=function(t){var e=this.getCell(t);if(!e){return}e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)};s.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t);this._getWrapShiftCells();this.setGallerySize();var n=this.getCell(i);if(n){this.selectedIndex=this.getCellSlideIndex(n)}this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex);this.emitEvent("cellChange",[t]);this.select(this.selectedIndex);if(e){this.positionSliderAtSelected()}};return i});(function(i,n){if(typeof define=="function"&&define.amd){define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)})}else if(typeof module=="object"&&module.exports){module.exports=n(i,require("./flickity"),require("fizzy-ui-utils"))}else{n(i,i.Flickity,i.fizzyUIUtils)}})(window,function t(e,i,o){"use strict";i.createMethods.push("_createLazyload");var n=i.prototype;n._createLazyload=function(){this.on("select",this.lazyLoad)};n.lazyLoad=function(){var t=this.options.lazyLoad;if(!t){return}var e=typeof t=="number"?t:0;var i=this.getAdjacentCellElements(e);var n=[];i.forEach(function(t){var e=s(t);n=n.concat(e)});n.forEach(function(t){new r(t,this)},this)};function s(t){if(t.nodeName=="IMG"){var e=t.getAttribute("data-flickity-lazyload");var i=t.getAttribute("data-flickity-lazyload-src");var n=t.getAttribute("data-flickity-lazyload-srcset");if(e||i||n){return[t]}}var s="img[data-flickity-lazyload], "+"img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]";var r=t.querySelectorAll(s);return o.makeArray(r)}function r(t,e){this.img=t;this.flickity=e;this.load()}r.prototype.handleEvent=o.handleEvent;r.prototype.load=function(){this.img.addEventListener("load",this);this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src");var e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t;if(e){this.img.setAttribute("srcset",e)}this.img.removeAttribute("data-flickity-lazyload");this.img.removeAttribute("data-flickity-lazyload-src");this.img.removeAttribute("data-flickity-lazyload-srcset")};r.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")};r.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")};r.prototype.complete=function(t,e){this.img.removeEventListener("load",this);this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img);var n=i&&i.element;this.flickity.cellSizeChange(n);this.img.classList.add(e);this.flickity.dispatchEvent("lazyLoad",t,n)};i.LazyLoader=r;return i});
/*!
 * Flickity v2.3.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */
(function(t,e){if(typeof define=="function"&&define.amd){define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e)}else if(typeof module=="object"&&module.exports){module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload"))}})(window,function t(e){return e});
/*!
 * Flickity asNavFor v2.0.2
 * enable asNavFor for Flickity
 */
(function(t,e){if(typeof define=="function"&&define.amd){define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e)}else if(typeof module=="object"&&module.exports){module.exports=e(require("flickity"),require("fizzy-ui-utils"))}else{t.Flickity=e(t.Flickity,t.fizzyUIUtils)}})(window,function t(n,s){n.createMethods.push("_createAsNavFor");var e=n.prototype;e._createAsNavFor=function(){this.on("activate",this.activateAsNavFor);this.on("deactivate",this.deactivateAsNavFor);this.on("destroy",this.destroyAsNavFor);var e=this.options.asNavFor;if(!e){return}var i=this;setTimeout(function t(){i.setNavCompanion(e)})};e.setNavCompanion=function(t){t=s.getQueryElement(t);var e=n.data(t);if(!e||e==this){return}this.navCompanion=e;var i=this;this.onNavCompanionSelect=function(){i.navCompanionSelect()};e.on("select",this.onNavCompanionSelect);this.on("staticClick",this.onNavStaticClick);this.navCompanionSelect(true)};e.navCompanionSelect=function(t){var e=this.navCompanion&&this.navCompanion.selectedCells;if(!e){return}var i=e[0];var n=this.navCompanion.cells.indexOf(i);var s=n+e.length-1;var r=Math.floor(a(n,s,this.navCompanion.cellAlign));this.selectCell(r,false,t);this.removeNavSelectedElements();if(r>=this.cells.length){return}var o=this.cells.slice(n,s+1);this.navSelectedElements=o.map(function(t){return t.element});this.changeNavSelectedClass("add")};function a(t,e,i){return(e-t)*i+t}e.changeNavSelectedClass=function(e){this.navSelectedElements.forEach(function(t){t.classList[e]("is-nav-selected")})};e.activateAsNavFor=function(){this.navCompanionSelect(true)};e.removeNavSelectedElements=function(){if(!this.navSelectedElements){return}this.changeNavSelectedClass("remove");delete this.navSelectedElements};e.onNavStaticClick=function(t,e,i,n){if(typeof n=="number"){this.navCompanion.selectCell(n)}};e.deactivateAsNavFor=function(){this.removeNavSelectedElements()};e.destroyAsNavFor=function(){if(!this.navCompanion){return}this.navCompanion.off("select",this.onNavCompanionSelect);this.off("staticClick",this.onNavStaticClick);delete this.navCompanion};return n});
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(e,i){"use strict";if(typeof define=="function"&&define.amd){define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("ev-emitter"))}else{e.imagesLoaded=i(e,e.EvEmitter)}})(typeof window!=="undefined"?window:this,function t(e,i){var s=e.jQuery;var r=e.console;function o(t,e){for(var i in e){t[i]=e[i]}return t}var n=Array.prototype.slice;function a(t){if(Array.isArray(t)){return t}var e=typeof t=="object"&&typeof t.length=="number";if(e){return n.call(t)}return[t]}function l(t,e,i){if(!(this instanceof l)){return new l(t,e,i)}var n=t;if(typeof t=="string"){n=document.querySelectorAll(t)}if(!n){r.error("Bad element for imagesLoaded "+(n||t));return}this.elements=a(n);this.options=o({},this.options);if(typeof e=="function"){i=e}else{o(this.options,e)}if(i){this.on("always",i)}this.getImages();if(s){this.jqDeferred=new s.Deferred}setTimeout(this.check.bind(this))}l.prototype=Object.create(i.prototype);l.prototype.options={};l.prototype.getImages=function(){this.images=[];this.elements.forEach(this.addElementImages,this)};l.prototype.addElementImages=function(t){if(t.nodeName=="IMG"){this.addImage(t)}if(this.options.background===true){this.addElementBackgroundImages(t)}var e=t.nodeType;if(!e||!h[e]){return}var i=t.querySelectorAll("img");for(var n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if(typeof this.options.background=="string"){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var o=r[n];this.addElementBackgroundImages(o)}}};var h={1:true,9:true,11:true};l.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(!e){return}var i=/url\((['"])?(.*?)\1\)/gi;var n=i.exec(e.backgroundImage);while(n!==null){var s=n&&n[2];if(s){this.addBackground(s,t)}n=i.exec(e.backgroundImage)}};l.prototype.addImage=function(t){var e=new c(t);this.images.push(e)};l.prototype.addBackground=function(t,e){var i=new u(t,e);this.images.push(i)};l.prototype.check=function(){var n=this;this.progressedCount=0;this.hasAnyBroken=false;if(!this.images.length){this.complete();return}function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.images.forEach(function(t){t.once("progress",e);t.check()})};l.prototype.progress=function(t,e,i){this.progressedCount++;this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded;this.emitEvent("progress",[this,t,e]);if(this.jqDeferred&&this.jqDeferred.notify){this.jqDeferred.notify(this,t)}if(this.progressedCount==this.images.length){this.complete()}if(this.options.debug&&r){r.log("progress: "+i,t,e)}};l.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";this.isComplete=true;this.emitEvent(t,[this]);this.emitEvent("always",[this]);if(this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}};function c(t){this.img=t}c.prototype=Object.create(i.prototype);c.prototype.check=function(){var t=this.getIsImageComplete();if(t){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image;this.proxyImage.addEventListener("load",this);this.proxyImage.addEventListener("error",this);this.img.addEventListener("load",this);this.img.addEventListener("error",this);this.proxyImage.src=this.img.src};c.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth};c.prototype.confirm=function(t,e){this.isLoaded=t;this.emitEvent("progress",[this,this.img,e])};c.prototype.handleEvent=function(t){var e="on"+t.type;if(this[e]){this[e](t)}};c.prototype.onload=function(){this.confirm(true,"onload");this.unbindEvents()};c.prototype.onerror=function(){this.confirm(false,"onerror");this.unbindEvents()};c.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this);this.proxyImage.removeEventListener("error",this);this.img.removeEventListener("load",this);this.img.removeEventListener("error",this)};function u(t,e){this.url=t;this.element=e;this.img=new Image}u.prototype=Object.create(c.prototype);u.prototype.check=function(){this.img.addEventListener("load",this);this.img.addEventListener("error",this);this.img.src=this.url;var t=this.getIsImageComplete();if(t){this.confirm(this.img.naturalWidth!==0,"naturalWidth");this.unbindEvents()}};u.prototype.unbindEvents=function(){this.img.removeEventListener("load",this);this.img.removeEventListener("error",this)};u.prototype.confirm=function(t,e){this.isLoaded=t;this.emitEvent("progress",[this,this.element,e])};l.makeJQueryPlugin=function(t){t=t||e.jQuery;if(!t){return}s=t;s.fn.imagesLoaded=function(t,e){var i=new l(this,t,e);return i.jqDeferred.promise(s(this))}};l.makeJQueryPlugin();return l});
/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */
(function(i,n){if(typeof define=="function"&&define.amd){define(["flickity/js/index","imagesloaded/imagesloaded"],function(t,e){return n(i,t,e)})}else if(typeof module=="object"&&module.exports){module.exports=n(i,require("flickity"),require("imagesloaded"))}else{i.Flickity=n(i,i.Flickity,i.imagesLoaded)}})(window,function t(e,i,s){"use strict";i.createMethods.push("_createImagesLoaded");var n=i.prototype;n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)};n.imagesLoaded=function(){if(!this.options.imagesLoaded){return}var n=this;function t(t,e){var i=n.getParentCell(e.img);n.cellSizeChange(i&&i.element);if(!n.options.freeScroll){n.positionSliderAtSelected()}}s(this.slider).on("progress",t)};return i});

(function($, undf){
	'use strict';

	/**
	 * MixItUp Constructor Function
	 * @constructor
	 * @extends jQuery
	 */

	$.MixItUp = function(){
		var self = this;

		self._execAction('_constructor', 0);

		$.extend(self, {

			/* Public Properties
			---------------------------------------------------------------------- */

			selectors: {
				target: '.mix',
				filter: '.filter',
				sort: '.sort'
			},

			animation: {
				enable: true,
				effects: 'fade scale',
				duration: 600,
				easing: 'ease',
				perspectiveDistance: '3000',
				perspectiveOrigin: '50% 50%',
				queue: true,
				queueLimit: 1,
				animateChangeLayout: false,
				animateResizeContainer: true,
				animateResizeTargets: false,
				staggerSequence: false,
				reverseOut: false
			},

			callbacks: {
				onMixLoad: false,
				onMixStart: false,
				onMixBusy: false,
				onMixEnd: false,
				onMixFail: false,
				_user: false
			},

			controls: {
				enable: true,
				live: false,
				toggleFilterButtons: false,
				toggleLogic: 'or',
				activeClass: 'active'
			},

			layout: {
				display: 'inline-block',
				containerClass: '',
				containerClassFail: 'fail'
			},

			load: {
				filter: 'all',
				sort: false
			},

			/* Private Properties
			---------------------------------------------------------------------- */

			_$body: null,
			_$container: null,
			_$targets: null,
			_$parent: null,
			_$sortButtons: null,
			_$filterButtons: null,

			_suckMode: false,
			_mixing: false,
			_sorting: false,
			_clicking: false,
			_loading: true,
			_changingLayout: false,
			_changingClass: false,
			_changingDisplay: false,

			_origOrder: [],
			_startOrder: [],
			_newOrder: [],
			_activeFilter: null,
			_toggleArray: [],
			_toggleString: '',
			_activeSort: 'default:asc',
			_newSort: null,
			_startHeight: null,
			_newHeight: null,
			_incPadding: true,
			_newDisplay: null,
			_newClass: null,
			_targetsBound: 0,
			_targetsDone: 0,
			_queue: [],

			_$show: $(),
			_$hide: $()
		});

		self._execAction('_constructor', 1);
	};

	/**
	 * MixItUp Prototype
	 * @override
	 */

	$.MixItUp.prototype = {
		constructor: $.MixItUp,

		/* Static Properties
		---------------------------------------------------------------------- */

		_instances: {},
		_handled: {
			_filter: {},
			_sort: {}
		},
		_bound: {
			_filter: {},
			_sort: {}
		},
		_actions: {},
		_filters: {},

		/* Static Methods
		---------------------------------------------------------------------- */

		/**
		 * Extend
		 * @since 2.1.0
		 * @param {object} new properties/methods
		 * @extends {object} prototype
		 */

		extend: function(extension){
			for(var key in extension){
				$.MixItUp.prototype[key] = extension[key];
			}
		},

		/**
		 * Add Action
		 * @since 2.1.0
		 * @param {string} hook name
		 * @param {string} namespace
		 * @param {function} function to execute
		 * @param {number} priority
		 * @extends {object} $.MixItUp.prototype._actions
		 */

		addAction: function(hook, name, func, priority){
			$.MixItUp.prototype._addHook('_actions', hook, name, func, priority);
		},

		/**
		 * Add Filter
		 * @since 2.1.0
		 * @param {string} hook name
		 * @param {string} namespace
		 * @param {function} function to execute
		 * @param {number} priority
		 * @extends {object} $.MixItUp.prototype._filters
		 */

		addFilter: function(hook, name, func, priority){
			$.MixItUp.prototype._addHook('_filters', hook, name, func, priority);
		},

		/**
		 * Add Hook
		 * @since 2.1.0
		 * @param {string} type of hook
		 * @param {string} hook name
		 * @param {function} function to execute
		 * @param {number} priority
		 * @extends {object} $.MixItUp.prototype._filters
		 */

		_addHook: function(type, hook, name, func, priority){
			var collection = $.MixItUp.prototype[type],
				obj = {};

			priority = (priority === 1 || priority === 'post') ? 'post' : 'pre';

			obj[hook] = {};
			obj[hook][priority] = {};
			obj[hook][priority][name] = func;

			$.extend(true, collection, obj);
		},


		/* Private Methods
		---------------------------------------------------------------------- */

		/**
		 * Initialise
		 * @since 2.0.0
		 * @param {object} domNode
		 * @param {object} config
		 */

		_init: function(domNode, config){
			var self = this;

			self._execAction('_init', 0, arguments);

			config && $.extend(true, self, config);

			self._$body = $('body');
			self._domNode = domNode;
			self._$container = $(domNode);
			self._$container.addClass(self.layout.containerClass);
			self._id = domNode.id;

			self._platformDetect();

			self._brake = self._getPrefixedCSS('transition', 'none');

			self._refresh(true);

			self._$parent = self._$targets.parent().length ? self._$targets.parent() : self._$container;

			if(self.load.sort){
				self._newSort = self._parseSort(self.load.sort);
				self._newSortString = self.load.sort;
				self._activeSort = self.load.sort;
				self._sort();
				self._printSort();
			}

			self._activeFilter = self.load.filter === 'all' ?
				self.selectors.target :
				self.load.filter === 'none' ?
					'' :
					self.load.filter;

			self.controls.enable && self._bindHandlers();

			if(self.controls.toggleFilterButtons){
				self._buildToggleArray();

				for(var i = 0; i < self._toggleArray.length; i++){
					self._updateControls({filter: self._toggleArray[i], sort: self._activeSort}, true);
				};
			} else if(self.controls.enable){
				self._updateControls({filter: self._activeFilter, sort: self._activeSort});
			}

			self._filter();

			self._init = true;

			self._$container.data('mixItUp',self);

			self._execAction('_init', 1, arguments);

			self._buildState();

			self._$targets.css(self._brake);

			self._goMix(self.animation.enable);
		},

		/**
		 * Platform Detect
		 * @since 2.0.0
		 */

		_platformDetect: function(){
			var self = this,
				vendorsTrans = ['Webkit', 'Moz', 'O', 'ms'],
				vendorsRAF = ['webkit', 'moz'],
				chrome = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || false,
				ff = typeof InstallTrigger !== 'undefined',
				prefix = function(el){
					for (var i = 0; i < vendorsTrans.length; i++){
						if (vendorsTrans[i] + 'Transition' in el.style){
							return {
								prefix: '-'+vendorsTrans[i].toLowerCase()+'-',
								vendor: vendorsTrans[i]
							};
						};
					};
					return 'transition' in el.style ? '' : false;
				},
				transPrefix = prefix(self._domNode);

			self._execAction('_platformDetect', 0);

			self._chrome = chrome ? parseInt(chrome[1], 10) : false;
			self._ff = ff ? parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]) : false;
			self._prefix = transPrefix.prefix;
			self._vendor = transPrefix.vendor;
			self._suckMode = window.atob && self._prefix ? false : true;

			self._suckMode && (self.animation.enable = false);
			(self._ff && self._ff <= 4) && (self.animation.enable = false);

			/* Polyfills
			---------------------------------------------------------------------- */

			/**
			 * window.requestAnimationFrame
			 */

			for(var x = 0; x < vendorsRAF.length && !window.requestAnimationFrame; x++){
				window.requestAnimationFrame = window[vendorsRAF[x]+'RequestAnimationFrame'];
			}

			/**
			 * Object.getPrototypeOf
			 */

			if(typeof Object.getPrototypeOf !== 'function'){
				if(typeof 'test'.__proto__ === 'object'){
					Object.getPrototypeOf = function(object){
						return object.__proto__;
					};
				} else {
					Object.getPrototypeOf = function(object){
						return object.constructor.prototype;
					};
				}
			}

			/**
			 * Element.nextElementSibling
			 */

			if(self._domNode.nextElementSibling === undf){
				Object.defineProperty(Element.prototype, 'nextElementSibling',{
					get: function(){
						var el = this.nextSibling;

						while(el){
							if(el.nodeType ===1){
								return el;
							}
							el = el.nextSibling;
						}
						return null;
					}
				});
			}

			self._execAction('_platformDetect', 1);
		},

		/**
		 * Refresh
		 * @since 2.0.0
		 * @param {boolean} init
		 * @param {boolean} force
		 */

		_refresh: function(init, force){
			var self = this;

			self._execAction('_refresh', 0, arguments);

			self._$targets = self._$container.find(self.selectors.target);

			for(var i = 0; i < self._$targets.length; i++){
				var target = self._$targets[i];

				if(target.dataset === undf || force){

					target.dataset = {};

					for(var j = 0; j < target.attributes.length; j++){

						var attr = target.attributes[j],
							name = attr.name,
							val = attr.value;

						if(name.indexOf('data-') > -1){
							var dataName = self._helpers._camelCase(name.substring(5,name.length));
							target.dataset[dataName] = val;
						}
					}
				}

				if(target.mixParent === undf){
					target.mixParent = self._id;
				}
			}

			if(
				(self._$targets.length && init) ||
				(!self._origOrder.length && self._$targets.length)
			){
				self._origOrder = [];

				for(var i = 0; i < self._$targets.length; i++){
					var target = self._$targets[i];

					self._origOrder.push(target);
				}
			}

			self._execAction('_refresh', 1, arguments);
		},

		/**
		 * Bind Handlers
		 * @since 2.0.0
		 */

		_bindHandlers: function(){
			var self = this,
				filters = $.MixItUp.prototype._bound._filter,
				sorts = $.MixItUp.prototype._bound._sort;

			self._execAction('_bindHandlers', 0);

			if(self.controls.live){
				self._$body
					.on('click.mixItUp.'+self._id, self.selectors.sort, function(){
						self._processClick($(this), 'sort');
					})
					.on('click.mixItUp.'+self._id, self.selectors.filter, function(){
						self._processClick($(this), 'filter');
					});
			} else {
				self._$sortButtons = $(self.selectors.sort);
				self._$filterButtons = $(self.selectors.filter);

				self._$sortButtons.on('click.mixItUp.'+self._id, function(){
					self._processClick($(this), 'sort');
				});

				self._$filterButtons.on('click.mixItUp.'+self._id, function(){
					self._processClick($(this), 'filter');
				});
			}

			filters[self.selectors.filter] = (filters[self.selectors.filter] === undf) ? 1 : filters[self.selectors.filter] + 1;
			sorts[self.selectors.sort] = (sorts[self.selectors.sort] === undf) ? 1 : sorts[self.selectors.sort] + 1;

			self._execAction('_bindHandlers', 1);
		},

		/**
		 * Process Click
		 * @since 2.0.0
		 * @param {object} $button
		 * @param {string} type
		 */

		_processClick: function($button, type){
			var self = this,
				trackClick = function($button, type, off){
					var proto = $.MixItUp.prototype;

					proto._handled['_'+type][self.selectors[type]] = (proto._handled['_'+type][self.selectors[type]] === undf) ?
						1 :
						proto._handled['_'+type][self.selectors[type]] + 1;

					if(proto._handled['_'+type][self.selectors[type]] === proto._bound['_'+type][self.selectors[type]]){
						$button[(off ? 'remove' : 'add')+'Class'](self.controls.activeClass);
						delete proto._handled['_'+type][self.selectors[type]];
					}
				};

			self._execAction('_processClick', 0, arguments);

			if(!self._mixing || (self.animation.queue && self._queue.length < self.animation.queueLimit)){
				self._clicking = true;

				if(type === 'sort'){
					var sort = $button.attr('data-sort');

					if(!$button.hasClass(self.controls.activeClass) || sort.indexOf('random') > -1){
						$(self.selectors.sort).removeClass(self.controls.activeClass);
						trackClick($button, type);
						self.sort(sort);
					}
				}

				if(type === 'filter') {
					var filter = $button.attr('data-filter'),
						ndx,
						seperator = self.controls.toggleLogic === 'or' ? ',' : '';

					if(!self.controls.toggleFilterButtons){
						if(!$button.hasClass(self.controls.activeClass)){
							$(self.selectors.filter).removeClass(self.controls.activeClass);
							trackClick($button, type);
							self.filter(filter);
						}
					} else {
						self._buildToggleArray();

						if(!$button.hasClass(self.controls.activeClass)){
							trackClick($button, type);

							self._toggleArray.push(filter);
						} else {
							trackClick($button, type, true);
							ndx = self._toggleArray.indexOf(filter);
							self._toggleArray.splice(ndx, 1);
						}

						self._toggleArray = $.grep(self._toggleArray,function(n){return(n);});

						self._toggleString = self._toggleArray.join(seperator);

						self.filter(self._toggleString);
					}
				}

				self._execAction('_processClick', 1, arguments);
			} else {
				if(typeof self.callbacks.onMixBusy === 'function'){
					self.callbacks.onMixBusy.call(self._domNode, self._state, self);
				}
				self._execAction('_processClickBusy', 1, arguments);
			}
		},

		/**
		 * Build Toggle Array
		 * @since 2.0.0
		 */

		_buildToggleArray: function(){
			var self = this,
				activeFilter = self._activeFilter.replace(/\s/g, '');

			self._execAction('_buildToggleArray', 0, arguments);

			if(self.controls.toggleLogic === 'or'){
				self._toggleArray = activeFilter.split(',');
			} else {
				self._toggleArray = activeFilter.split('.');

				!self._toggleArray[0] && self._toggleArray.shift();

				for(var i = 0, filter; filter = self._toggleArray[i]; i++){
					self._toggleArray[i] = '.'+filter;
				}
			}

			self._execAction('_buildToggleArray', 1, arguments);
		},

		/**
		 * Update Controls
		 * @since 2.0.0
		 * @param {object} command
		 * @param {boolean} multi
		 */

		_updateControls: function(command, multi){
			var self = this,
				output = {
					filter: command.filter,
					sort: command.sort
				},
				update = function($el, filter){
					try {
						(multi && type === 'filter' && !(output.filter === 'none' || output.filter === '')) ?
								$el.filter(filter).addClass(self.controls.activeClass) :
								$el.removeClass(self.controls.activeClass).filter(filter).addClass(self.controls.activeClass);
					} catch(e) {}
				},
				type = 'filter',
				$el = null;

			self._execAction('_updateControls', 0, arguments);

			(command.filter === undf) && (output.filter = self._activeFilter);
			(command.sort === undf) && (output.sort = self._activeSort);
			(output.filter === self.selectors.target) && (output.filter = 'all');

			for(var i = 0; i < 2; i++){
				$el = self.controls.live ? $(self.selectors[type]) : self['_$'+type+'Buttons'];
				$el && update($el, '[data-'+type+'="'+output[type]+'"]');
				type = 'sort';
			}

			self._execAction('_updateControls', 1, arguments);
		},

		/**
		 * Filter (private)
		 * @since 2.0.0
		 */

		_filter: function(){
			var self = this;

			self._execAction('_filter', 0);

			for(var i = 0; i < self._$targets.length; i++){
				var $target = $(self._$targets[i]);

				if($target.is(self._activeFilter)){
					self._$show = self._$show.add($target);
				} else {
					self._$hide = self._$hide.add($target);
				}
			}

			self._execAction('_filter', 1);
		},

		/**
		 * Sort (private)
		 * @since 2.0.0
		 */

		_sort: function(){
			var self = this,
				arrayShuffle = function(oldArray){
					var newArray = oldArray.slice(),
						len = newArray.length,
						i = len;

					while(i--){
						var p = parseInt(Math.random()*len);
						var t = newArray[i];
						newArray[i] = newArray[p];
						newArray[p] = t;
					};
					return newArray;
				};

			self._execAction('_sort', 0);

			self._startOrder = [];

			for(var i = 0; i < self._$targets.length; i++){
				var target = self._$targets[i];

				self._startOrder.push(target);
			}

			switch(self._newSort[0].sortBy){
				case 'default':
					self._newOrder = self._origOrder;
					break;
				case 'random':
					self._newOrder = arrayShuffle(self._startOrder);
					break;
				case 'custom':
					self._newOrder = self._newSort[0].order;
					break;
				default:
					self._newOrder = self._startOrder.concat().sort(function(a, b){
						return self._compare(a, b);
					});
			}

			self._execAction('_sort', 1);
		},

		/**
		 * Compare Algorithm
		 * @since 2.0.0
		 * @param {string|number} a
		 * @param {string|number} b
		 * @param {number} depth (recursion)
		 * @return {number}
		 */

		_compare: function(a, b, depth){
			depth = depth ? depth : 0;

			var self = this,
				order = self._newSort[depth].order,
				getData = function(el){
					return el.dataset[self._newSort[depth].sortBy] || 0;
				},
				attrA = isNaN(getData(a) * 1) ? getData(a).toLowerCase() : getData(a) * 1,
				attrB = isNaN(getData(b) * 1) ? getData(b).toLowerCase() : getData(b) * 1;

			if(attrA < attrB)
				return order === 'asc' ? -1 : 1;
			if(attrA > attrB)
				return order === 'asc' ? 1 : -1;
			if(attrA === attrB && self._newSort.length > depth+1)
				return self._compare(a, b, depth+1);

			return 0;
		},

		/**
		 * Print Sort
		 * @since 2.0.0
		 * @param {boolean} reset
		 */

		_printSort: function(reset){
			var self = this,
				order = reset ? self._startOrder : self._newOrder,
				targets = self._$parent[0].querySelectorAll(self.selectors.target),
				nextSibling = targets.length ? targets[targets.length -1].nextElementSibling : null,
				frag = document.createDocumentFragment();

			self._execAction('_printSort', 0, arguments);

			for(var i = 0; i < targets.length; i++){
				var target = targets[i],
					whiteSpace = target.nextSibling;

				if(target.style.position === 'absolute') continue;

				if(whiteSpace && whiteSpace.nodeName === '#text'){
					self._$parent[0].removeChild(whiteSpace);
				}

				self._$parent[0].removeChild(target);
			}

			for(var i = 0; i < order.length; i++){
				var el = order[i];

				if(self._newSort[0].sortBy === 'default' && self._newSort[0].order === 'desc' && !reset){
					var firstChild = frag.firstChild;
					frag.insertBefore(el, firstChild);
					frag.insertBefore(document.createTextNode(' '), el);
				} else {
					frag.appendChild(el);
					frag.appendChild(document.createTextNode(' '));
				}
			}

			nextSibling ?
				self._$parent[0].insertBefore(frag, nextSibling) :
				self._$parent[0].appendChild(frag);

			self._execAction('_printSort', 1, arguments);
		},

		/**
		 * Parse Sort
		 * @since 2.0.0
		 * @param {string} sortString
		 * @return {array} newSort
		 */

		_parseSort: function(sortString){
			var self = this,
				rules = typeof sortString === 'string' ? sortString.split(' ') : [sortString],
				newSort = [];

			for(var i = 0; i < rules.length; i++){
				var rule = typeof sortString === 'string' ? rules[i].split(':') : ['custom', rules[i]],
					ruleObj = {
						sortBy: self._helpers._camelCase(rule[0]),
						order: rule[1] || 'asc'
					};

				newSort.push(ruleObj);

				if(ruleObj.sortBy === 'default' || ruleObj.sortBy === 'random') break;
			}

			return self._execFilter('_parseSort', newSort, arguments);
		},

		/**
		 * Parse Effects
		 * @since 2.0.0
		 * @return {object} effects
		 */

		_parseEffects: function(){
			var self = this,
				effects = {
					opacity: '',
					transformIn: '',
					transformOut: '',
					filter: ''
				},
				parse = function(effect, extract, reverse){
					if(self.animation.effects.indexOf(effect) > -1){
						if(extract){
							var propIndex = self.animation.effects.indexOf(effect+'(');
							if(propIndex > -1){
								var str = self.animation.effects.substring(propIndex),
									match = /\(([^)]+)\)/.exec(str),
									val = match[1];

									return {val: val};
							}
						}
						return true;
					} else {
						return false;
					}
				},
				negate = function(value, invert){
					if(invert){
						return value.charAt(0) === '-' ? value.substr(1, value.length) : '-'+value;
					} else {
						return value;
					}
				},
				buildTransform = function(key, invert){
					var transforms = [
						['scale', '.01'],
						['translateX', '20px'],
						['translateY', '20px'],
						['translateZ', '20px'],
						['rotateX', '90deg'],
						['rotateY', '90deg'],
						['rotateZ', '180deg'],
					];

					for(var i = 0; i < transforms.length; i++){
						var prop = transforms[i][0],
							def = transforms[i][1],
							inverted = invert && prop !== 'scale';

						effects[key] += parse(prop) ? prop+'('+negate(parse(prop, true).val || def, inverted)+') ' : '';
					}
				};

			effects.opacity = parse('fade') ? parse('fade',true).val || '0' : '1';

			buildTransform('transformIn');

			self.animation.reverseOut ? buildTransform('transformOut', true) : (effects.transformOut = effects.transformIn);

			effects.transition = {};

			effects.transition = self._getPrefixedCSS('transition','all '+self.animation.duration+'ms '+self.animation.easing+', opacity '+self.animation.duration+'ms linear');

			self.animation.stagger = parse('stagger') ? true : false;
			self.animation.staggerDuration = parseInt(parse('stagger') ? (parse('stagger',true).val ? parse('stagger',true).val : 100) : 100);

			return self._execFilter('_parseEffects', effects);
		},

		/**
		 * Build State
		 * @since 2.0.0
		 * @param {boolean} future
		 * @return {object} futureState
		 */

		_buildState: function(future){
			var self = this,
				state = {};

			self._execAction('_buildState', 0);

			state = {
				activeFilter: self._activeFilter === '' ? 'none' : self._activeFilter,
				activeSort: future && self._newSortString ? self._newSortString : self._activeSort,
				fail: !self._$show.length && self._activeFilter !== '',
				$targets: self._$targets,
				$show: self._$show,
				$hide: self._$hide,
				totalTargets: self._$targets.length,
				totalShow: self._$show.length,
				totalHide: self._$hide.length,
				display: future && self._newDisplay ? self._newDisplay : self.layout.display
			};

			if(future){
				return self._execFilter('_buildState', state);
			} else {
				self._state = state;

				self._execAction('_buildState', 1);
			}
		},

		/**
		 * Go Mix
		 * @since 2.0.0
		 * @param {boolean} animate
		 */

		_goMix: function(animate){
			var self = this,
				phase1 = function(){
					if(self._chrome && (self._chrome === 31)){
						chromeFix(self._$parent[0]);
					}

					self._setInter();

					phase2();
				},
				phase2 = function(){
					var scrollTop = window.pageYOffset,
						scrollLeft = window.pageXOffset,
						docHeight = document.documentElement.scrollHeight;

					self._getInterMixData();

					self._setFinal();

					self._getFinalMixData();

					(window.pageYOffset !== scrollTop) && window.scrollTo(scrollLeft, scrollTop);

					self._prepTargets();

					if(window.requestAnimationFrame){
						requestAnimationFrame(phase3);
					} else {
						setTimeout(function(){
							phase3();
						},20);
					}
				},
				phase3 = function(){
					self._animateTargets();

					if(self._targetsBound === 0){
						self._cleanUp();
					}
				},
				chromeFix = function(grid){
					var parent = grid.parentElement,
						placeholder = document.createElement('div'),
						frag = document.createDocumentFragment();

					parent.insertBefore(placeholder, grid);
					frag.appendChild(grid);
					parent.replaceChild(grid, placeholder);
				},
				futureState = self._buildState(true);

			self._execAction('_goMix', 0, arguments);

			!self.animation.duration && (animate = false);

			self._mixing = true;

			self._$container.removeClass(self.layout.containerClassFail);

			if(typeof self.callbacks.onMixStart === 'function'){
				self.callbacks.onMixStart.call(self._domNode, self._state, futureState, self);
			}

			self._$container.trigger('mixStart', [self._state, futureState, self]);

			self._getOrigMixData();

			if(animate && !self._suckMode){

				window.requestAnimationFrame ?
					requestAnimationFrame(phase1) :
					phase1();

			} else {
				self._cleanUp();
			}

			self._execAction('_goMix', 1, arguments);
		},

		/**
		 * Get Target Data
		 * @since 2.0.0
		 */

		_getTargetData: function(el, stage){
			var self = this,
				elStyle;

			el.dataset[stage+'PosX'] = el.offsetLeft;
			el.dataset[stage+'PosY'] = el.offsetTop;

			if(self.animation.animateResizeTargets){
				elStyle = !self._suckMode ?
					window.getComputedStyle(el) :
					{
						marginBottom: '',
						marginRight: ''
					};

				el.dataset[stage+'MarginBottom'] = parseInt(elStyle.marginBottom);
				el.dataset[stage+'MarginRight'] = parseInt(elStyle.marginRight);
				el.dataset[stage+'Width'] = el.offsetWidth;
				el.dataset[stage+'Height'] = el.offsetHeight;
			}
		},

		/**
		 * Get Original Mix Data
		 * @since 2.0.0
		 */

		_getOrigMixData: function(){
			var self = this,
				parentStyle = !self._suckMode ? window.getComputedStyle(self._$parent[0]) : {boxSizing: ''},
				parentBS = parentStyle.boxSizing || parentStyle[self._vendor+'BoxSizing'];

			self._incPadding = (parentBS === 'border-box');

			self._execAction('_getOrigMixData', 0);

			!self._suckMode && (self.effects = self._parseEffects());

			self._$toHide = self._$hide.filter(':visible');
			self._$toShow = self._$show.filter(':hidden');
			self._$pre = self._$targets.filter(':visible');

			self._startHeight = self._incPadding ?
				self._$parent.outerHeight() :
				self._$parent.height();

			for(var i = 0; i < self._$pre.length; i++){
				var el = self._$pre[i];

				self._getTargetData(el, 'orig');
			}

			self._execAction('_getOrigMixData', 1);
		},

		/**
		 * Set Intermediate Positions
		 * @since 2.0.0
		 */

		_setInter: function(){
			var self = this;

			self._execAction('_setInter', 0);

			if(self._changingLayout && self.animation.animateChangeLayout){
				self._$toShow.css('display',self._newDisplay);

				if(self._changingClass){
					self._$container
						.removeClass(self.layout.containerClass)
						.addClass(self._newClass);
				}
			} else {
				self._$toShow.css('display', self.layout.display);
			}

			self._execAction('_setInter', 1);
		},

		/**
		 * Get Intermediate Mix Data
		 * @since 2.0.0
		 */

		_getInterMixData: function(){
			var self = this;

			self._execAction('_getInterMixData', 0);

			for(var i = 0; i < self._$toShow.length; i++){
				var el = self._$toShow[i];

				self._getTargetData(el, 'inter');
			}

			for(var i = 0; i < self._$pre.length; i++){
				var el = self._$pre[i];

				self._getTargetData(el, 'inter');
			}

			self._execAction('_getInterMixData', 1);
		},

		/**
		 * Set Final Positions
		 * @since 2.0.0
		 */

		_setFinal: function(){
			var self = this;

			self._execAction('_setFinal', 0);

			self._sorting && self._printSort();

			self._$toHide.removeStyle('display');

			if(self._changingLayout && self.animation.animateChangeLayout){
				self._$pre.css('display',self._newDisplay);
			}

			self._execAction('_setFinal', 1);
		},

		/**
		 * Get Final Mix Data
		 * @since 2.0.0
		 */

		_getFinalMixData: function(){
			var self = this;

			self._execAction('_getFinalMixData', 0);

			for(var i = 0; i < self._$toShow.length; i++){
				var el = self._$toShow[i];

				self._getTargetData(el, 'final');
			}

			for(var i = 0; i < self._$pre.length; i++){
				var el = self._$pre[i];

				self._getTargetData(el, 'final');
			}

			self._newHeight = self._incPadding ?
				self._$parent.outerHeight() :
				self._$parent.height();

			self._sorting && self._printSort(true);

			self._$toShow.removeStyle('display');

			self._$pre.css('display',self.layout.display);

			if(self._changingClass && self.animation.animateChangeLayout){
				self._$container
					.removeClass(self._newClass)
					.addClass(self.layout.containerClass);
			}

			self._execAction('_getFinalMixData', 1);
		},

		/**
		 * Prepare Targets
		 * @since 2.0.0
		 */

		_prepTargets: function(){
			var self = this,
				transformCSS = {
					_in: self._getPrefixedCSS('transform', self.effects.transformIn),
					_out: self._getPrefixedCSS('transform', self.effects.transformOut)
				};

			self._execAction('_prepTargets', 0);

			if(self.animation.animateResizeContainer){
				self._$parent.css('height',self._startHeight+'px');
			}

			for(var i = 0; i < self._$toShow.length; i++){
				var el = self._$toShow[i],
					$el = $(el);

				el.style.opacity = self.effects.opacity;
				el.style.display = (self._changingLayout && self.animation.animateChangeLayout) ?
					self._newDisplay :
					self.layout.display;

				$el.css(transformCSS._in);

				if(self.animation.animateResizeTargets){
					el.style.width = el.dataset.finalWidth+'px';
					el.style.height = el.dataset.finalHeight+'px';
					el.style.marginRight = -(el.dataset.finalWidth - el.dataset.interWidth) + (el.dataset.finalMarginRight * 1)+'px';
					el.style.marginBottom = -(el.dataset.finalHeight - el.dataset.interHeight) + (el.dataset.finalMarginBottom * 1)+'px';
				}
			}

			for(var i = 0; i < self._$pre.length; i++){
				var el = self._$pre[i],
					$el = $(el),
					translate = {
						x: el.dataset.origPosX - el.dataset.interPosX,
						y: el.dataset.origPosY - el.dataset.interPosY
					},
					transformCSS = self._getPrefixedCSS('transform','translate('+translate.x+'px,'+translate.y+'px)');

				$el.css(transformCSS);

				if(self.animation.animateResizeTargets){
					el.style.width = el.dataset.origWidth+'px';
					el.style.height = el.dataset.origHeight+'px';

					if(el.dataset.origWidth - el.dataset.finalWidth){
						el.style.marginRight = -(el.dataset.origWidth - el.dataset.interWidth) + (el.dataset.origMarginRight * 1)+'px';
					}

					if(el.dataset.origHeight - el.dataset.finalHeight){
						el.style.marginBottom = -(el.dataset.origHeight - el.dataset.interHeight) + (el.dataset.origMarginBottom * 1) +'px';
					}
				}
			}

			self._execAction('_prepTargets', 1);
		},

		/**
		 * Animate Targets
		 * @since 2.0.0
		 */

		_animateTargets: function(){
			var self = this;

			self._execAction('_animateTargets', 0);

			self._targetsDone = 0;
			self._targetsBound = 0;

			self._$parent
				.css(self._getPrefixedCSS('perspective', self.animation.perspectiveDistance+'px'))
				.css(self._getPrefixedCSS('perspective-origin', self.animation.perspectiveOrigin));

			if(self.animation.animateResizeContainer){
				self._$parent
					.css(self._getPrefixedCSS('transition','height '+self.animation.duration+'ms ease'))
					.css('height',self._newHeight+'px');
			}

			for(var i = 0; i < self._$toShow.length; i++){
				var el = self._$toShow[i],
					$el = $(el),
					translate = {
						x: el.dataset.finalPosX - el.dataset.interPosX,
						y: el.dataset.finalPosY - el.dataset.interPosY
					},
					delay = self._getDelay(i),
					toShowCSS = {};

				el.style.opacity = '';

				for(var j = 0; j < 2; j++){
					var a = j === 0 ? a = self._prefix : '';

					if(self._ff && self._ff <= 20){
						toShowCSS[a+'transition-property'] = 'all';
						toShowCSS[a+'transition-timing-function'] = self.animation.easing+'ms';
						toShowCSS[a+'transition-duration'] = self.animation.duration+'ms';
					}

					toShowCSS[a+'transition-delay'] = delay+'ms';
					toShowCSS[a+'transform'] = 'translate('+translate.x+'px,'+translate.y+'px)';
				}

				if(self.effects.transform || self.effects.opacity){
					self._bindTargetDone($el);
				}

				(self._ff && self._ff <= 20) ?
					$el.css(toShowCSS) :
					$el.css(self.effects.transition).css(toShowCSS);
			}

			for(var i = 0; i < self._$pre.length; i++){
				var el = self._$pre[i],
					$el = $(el),
					translate = {
						x: el.dataset.finalPosX - el.dataset.interPosX,
						y: el.dataset.finalPosY - el.dataset.interPosY
					},
					delay = self._getDelay(i);

				if(!(
					el.dataset.finalPosX === el.dataset.origPosX &&
					el.dataset.finalPosY === el.dataset.origPosY
				)){
					self._bindTargetDone($el);
				}

				$el.css(self._getPrefixedCSS('transition', 'all '+self.animation.duration+'ms '+self.animation.easing+' '+delay+'ms'));
				$el.css(self._getPrefixedCSS('transform', 'translate('+translate.x+'px,'+translate.y+'px)'));

				if(self.animation.animateResizeTargets){
					if(el.dataset.origWidth - el.dataset.finalWidth && el.dataset.finalWidth * 1){
						el.style.width = el.dataset.finalWidth+'px';
						el.style.marginRight = -(el.dataset.finalWidth - el.dataset.interWidth)+(el.dataset.finalMarginRight * 1)+'px';
					}

					if(el.dataset.origHeight - el.dataset.finalHeight && el.dataset.finalHeight * 1){
						el.style.height = el.dataset.finalHeight+'px';
						el.style.marginBottom = -(el.dataset.finalHeight - el.dataset.interHeight)+(el.dataset.finalMarginBottom * 1) +'px';
					}
				}
			}

			if(self._changingClass){
				self._$container
					.removeClass(self.layout.containerClass)
					.addClass(self._newClass);
			}

			for(var i = 0; i < self._$toHide.length; i++){
				var el = self._$toHide[i],
					$el = $(el),
					delay = self._getDelay(i),
					toHideCSS = {};

				for(var j = 0; j<2; j++){
					var a = j === 0 ? a = self._prefix : '';

					toHideCSS[a+'transition-delay'] = delay+'ms';
					toHideCSS[a+'transform'] = self.effects.transformOut;
					toHideCSS.opacity = self.effects.opacity;
				}

				$el.css(self.effects.transition).css(toHideCSS);

				if(self.effects.transform || self.effects.opacity){
					self._bindTargetDone($el);
				};
			}

			self._execAction('_animateTargets', 1);

		},

		/**
		 * Bind Targets TransitionEnd
		 * @since 2.0.0
		 * @param {object} $el
		 */

		_bindTargetDone: function($el){
			var self = this,
				el = $el[0];

			self._execAction('_bindTargetDone', 0, arguments);

			if(!el.dataset.bound){

				el.dataset.bound = true;
				self._targetsBound++;

				$el.on('webkitTransitionEnd.mixItUp transitionend.mixItUp',function(e){
					if(
						(e.originalEvent.propertyName.indexOf('transform') > -1 ||
						e.originalEvent.propertyName.indexOf('opacity') > -1) &&
						$(e.originalEvent.target).is(self.selectors.target)
					){
						$el.off('.mixItUp');
						el.dataset.bound = '';
						self._targetDone();
					}
				});
			}

			self._execAction('_bindTargetDone', 1, arguments);
		},

		/**
		 * Target Done
		 * @since 2.0.0
		 */

		_targetDone: function(){
			var self = this;

			self._execAction('_targetDone', 0);

			self._targetsDone++;

			(self._targetsDone === self._targetsBound) && self._cleanUp();

			self._execAction('_targetDone', 1);
		},

		/**
		 * Clean Up
		 * @since 2.0.0
		 */

		_cleanUp: function(){
			var self = this,
				targetStyles = self.animation.animateResizeTargets ?
					'transform opacity width height margin-bottom margin-right' :
					'transform opacity',
				unBrake = function(){
					self._$targets.removeStyle('transition', self._prefix);
				};

			self._execAction('_cleanUp', 0);

			!self._changingLayout ?
				self._$show.css('display',self.layout.display) :
				self._$show.css('display',self._newDisplay);

			self._$targets.css(self._brake);

			self._$targets
				.removeStyle(targetStyles, self._prefix)
				.removeAttr('data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom');

			self._$hide.removeStyle('display');

			self._$parent.removeStyle('height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin', self._prefix);

			if(self._sorting){
				self._printSort();
				self._activeSort = self._newSortString;
				self._sorting = false;
			}

			if(self._changingLayout){
				if(self._changingDisplay){
					self.layout.display = self._newDisplay;
					self._changingDisplay = false;
				}

				if(self._changingClass){
					self._$parent.removeClass(self.layout.containerClass).addClass(self._newClass);
					self.layout.containerClass = self._newClass;
					self._changingClass = false;
				}

				self._changingLayout = false;
			}

			self._refresh();

			self._buildState();

			if(self._state.fail){
				self._$container.addClass(self.layout.containerClassFail);
			}

			self._$show = $();
			self._$hide = $();

			if(window.requestAnimationFrame){
				requestAnimationFrame(unBrake);
			}

			self._mixing = false;

			if(typeof self.callbacks._user === 'function'){
				self.callbacks._user.call(self._domNode, self._state, self);
			}

			if(typeof self.callbacks.onMixEnd === 'function'){
				self.callbacks.onMixEnd.call(self._domNode, self._state, self);
			}

			self._$container.trigger('mixEnd', [self._state, self]);

			if(self._state.fail){
				(typeof self.callbacks.onMixFail === 'function') && self.callbacks.onMixFail.call(self._domNode, self._state, self);
				self._$container.trigger('mixFail', [self._state, self]);
			}

			if(self._loading){
				(typeof self.callbacks.onMixLoad === 'function') && self.callbacks.onMixLoad.call(self._domNode, self._state, self);
				self._$container.trigger('mixLoad', [self._state, self]);
			}

			if(self._queue.length){
				self._execAction('_queue', 0);

				self.multiMix(self._queue[0][0],self._queue[0][1],self._queue[0][2]);
				self._queue.splice(0, 1);
			}

			self._execAction('_cleanUp', 1);

			self._loading = false;
		},

		/**
		 * Get Prefixed CSS
		 * @since 2.0.0
		 * @param {string} property
		 * @param {string} value
		 * @param {boolean} prefixValue
		 * @return {object} styles
		 */

		_getPrefixedCSS: function(property, value, prefixValue){
			var self = this,
				styles = {},
				prefix = '',
				i = -1;

			for(i = 0; i < 2; i++){
				prefix = i === 0 ? self._prefix : '';
				prefixValue ? styles[prefix+property] = prefix+value : styles[prefix+property] = value;
			}

			return self._execFilter('_getPrefixedCSS', styles, arguments);
		},

		/**
		 * Get Delay
		 * @since 2.0.0
		 * @param {number} i
		 * @return {number} delay
		 */

		_getDelay: function(i){
			var self = this,
				n = typeof self.animation.staggerSequence === 'function' ? self.animation.staggerSequence.call(self._domNode, i, self._state) : i,
				delay = self.animation.stagger ? n * self.animation.staggerDuration : 0;

			return self._execFilter('_getDelay', delay, arguments);
		},

		/**
		 * Parse MultiMix Arguments
		 * @since 2.0.0
		 * @param {array} args
		 * @return {object} output
		 */

		_parseMultiMixArgs: function(args){
			var self = this,
				output = {
					command: null,
					animate: self.animation.enable,
					callback: null
				};

			for(var i = 0; i < args.length; i++){
				var arg = args[i];

				if(arg !== null){
					if(typeof arg === 'object' || typeof arg === 'string'){
						output.command = arg;
					} else if(typeof arg === 'boolean'){
						output.animate = arg;
					} else if(typeof arg === 'function'){
						output.callback = arg;
					}
				}
			}

			return self._execFilter('_parseMultiMixArgs', output, arguments);
		},

		/**
		 * Parse Insert Arguments
		 * @since 2.0.0
		 * @param {array} args
		 * @return {object} output
		 */

		_parseInsertArgs: function(args){
			var self = this,
				output = {
					index: 0,
					$object: $(),
					multiMix: {filter: self._state.activeFilter},
					callback: null
				};

			for(var i = 0; i < args.length; i++){
				var arg = args[i];

				if(typeof arg === 'number'){
					output.index = arg;
				} else if(typeof arg === 'object' && arg instanceof $){
					output.$object = arg;
				} else if(typeof arg === 'object' && self._helpers._isElement(arg)){
					output.$object = $(arg);
				} else if(typeof arg === 'object' && arg !== null){
					output.multiMix = arg;
				} else if(typeof arg === 'boolean' && !arg){
					output.multiMix = false;
				} else if(typeof arg === 'function'){
					output.callback = arg;
				}
			}

			return self._execFilter('_parseInsertArgs', output, arguments);
		},

		/**
		 * Execute Action
		 * @since 2.0.0
		 * @param {string} methodName
		 * @param {boolean} isPost
		 * @param {array} args
		 */

		_execAction: function(methodName, isPost, args){
			var self = this,
				context = isPost ? 'post' : 'pre';

			if(!self._actions.isEmptyObject && self._actions.hasOwnProperty(methodName)){
				for(var key in self._actions[methodName][context]){
					self._actions[methodName][context][key].call(self, args);
				}
			}
		},

		/**
		 * Execute Filter
		 * @since 2.0.0
		 * @param {string} methodName
		 * @param {mixed} value
		 * @return {mixed} value
		 */

		_execFilter: function(methodName, value, args){
			var self = this;

			if(!self._filters.isEmptyObject && self._filters.hasOwnProperty(methodName)){
				for(var key in self._filters[methodName]){
					return self._filters[methodName][key].call(self, args);
				}
			} else {
				return value;
			}
		},

		/* Helpers
		---------------------------------------------------------------------- */

		_helpers: {

			/**
			 * CamelCase
			 * @since 2.0.0
			 * @param {string}
			 * @return {string}
			 */

			_camelCase: function(string){
				return string.replace(/-([a-z])/g, function(g){
						return g[1].toUpperCase();
				});
			},

			/**
			 * Is Element
			 * @since 2.1.3
			 * @param {object} element to test
			 * @return {boolean}
			 */

			_isElement: function(el){
				if(window.HTMLElement){
					return el instanceof HTMLElement;
				} else {
					return (
						el !== null &&
						el.nodeType === 1 &&
						el.nodeName === 'string'
					);
				}
			}
		},

		/* Public Methods
		---------------------------------------------------------------------- */

		/**
		 * Is Mixing
		 * @since 2.0.0
		 * @return {boolean}
		 */

		isMixing: function(){
			var self = this;

			return self._execFilter('isMixing', self._mixing);
		},

		/**
		 * Filter (public)
		 * @since 2.0.0
		 * @param {array} arguments
		 */

		filter: function(){
			var self = this,
				args = self._parseMultiMixArgs(arguments);

			self._clicking && (self._toggleString = '');

			self.multiMix({filter: args.command}, args.animate, args.callback);
		},

		/**
		 * Sort (public)
		 * @since 2.0.0
		 * @param {array} arguments
		 */

		sort: function(){
			var self = this,
				args = self._parseMultiMixArgs(arguments);

			self.multiMix({sort: args.command}, args.animate, args.callback);
		},

		/**
		 * Change Layout (public)
		 * @since 2.0.0
		 * @param {array} arguments
		 */

		changeLayout: function(){
			var self = this,
				args = self._parseMultiMixArgs(arguments);

			self.multiMix({changeLayout: args.command}, args.animate, args.callback);
		},

		/**
		 * MultiMix
		 * @since 2.0.0
		 * @param {array} arguments
		 */

		multiMix: function(){
			var self = this,
				args = self._parseMultiMixArgs(arguments);

			self._execAction('multiMix', 0, arguments);

			if(!self._mixing){
				if(self.controls.enable && !self._clicking){
					self.controls.toggleFilterButtons && self._buildToggleArray();
					self._updateControls(args.command, self.controls.toggleFilterButtons);
				}

				(self._queue.length < 2) && (self._clicking = false);

				delete self.callbacks._user;
				if(args.callback) self.callbacks._user = args.callback;

				var sort = args.command.sort,
					filter = args.command.filter,
					changeLayout = args.command.changeLayout;

				self._refresh();

				if(sort){
					self._newSort = self._parseSort(sort);
					self._newSortString = sort;

					self._sorting = true;
					self._sort();
				}

				if(filter !== undf){
					filter = (filter === 'all') ? self.selectors.target : filter;

					self._activeFilter = filter;
				}

				self._filter();

				if(changeLayout){
					self._newDisplay = (typeof changeLayout === 'string') ? changeLayout : changeLayout.display || self.layout.display;
					self._newClass = changeLayout.containerClass || '';

					if(
						self._newDisplay !== self.layout.display ||
						self._newClass !== self.layout.containerClass
					){
						self._changingLayout = true;

						self._changingClass = (self._newClass !== self.layout.containerClass);
						self._changingDisplay = (self._newDisplay !== self.layout.display);
					}
				}

				self._$targets.css(self._brake);

				self._goMix(args.animate ^ self.animation.enable ? args.animate : self.animation.enable);

				self._execAction('multiMix', 1, arguments);

			} else {
				if(self.animation.queue && self._queue.length < self.animation.queueLimit){
					self._queue.push(arguments);

					(self.controls.enable && !self._clicking) && self._updateControls(args.command);

					self._execAction('multiMixQueue', 1, arguments);

				} else {
					if(typeof self.callbacks.onMixBusy === 'function'){
						self.callbacks.onMixBusy.call(self._domNode, self._state, self);
					}
					self._$container.trigger('mixBusy', [self._state, self]);

					self._execAction('multiMixBusy', 1, arguments);
				}
			}
		},

		/**
		 * Insert
		 * @since 2.0.0
		 * @param {array} arguments
		 */

		insert: function(){
			var self = this,
				args = self._parseInsertArgs(arguments),
				callback = (typeof args.callback === 'function') ? args.callback : null,
				frag = document.createDocumentFragment(),
				target = (function(){
					self._refresh();

					if(self._$targets.length){
						return (args.index < self._$targets.length || !self._$targets.length) ?
							self._$targets[args.index] :
							self._$targets[self._$targets.length-1].nextElementSibling;
					} else {
						return self._$parent[0].children[0];
					}
				})();

			self._execAction('insert', 0, arguments);

			if(args.$object){
				for(var i = 0; i < args.$object.length; i++){
					var el = args.$object[i];

					frag.appendChild(el);
					frag.appendChild(document.createTextNode(' '));
				}

				self._$parent[0].insertBefore(frag, target);
			}

			self._execAction('insert', 1, arguments);

			if(typeof args.multiMix === 'object'){
				self.multiMix(args.multiMix, callback);
			}
		},

		/**
		 * Prepend
		 * @since 2.0.0
		 * @param {array} arguments
		 */

		prepend: function(){
			var self = this,
				args = self._parseInsertArgs(arguments);

			self.insert(0, args.$object, args.multiMix, args.callback);
		},

		/**
		 * Append
		 * @since 2.0.0
		 * @param {array} arguments
		 */

		append: function(){
			var self = this,
				args = self._parseInsertArgs(arguments);

			self.insert(self._state.totalTargets, args.$object, args.multiMix, args.callback);
		},

		/**
		 * Get Option
		 * @since 2.0.0
		 * @param {string} string
		 * @return {mixed} value
		 */

		getOption: function(string){
			var self = this,
				getProperty = function(obj, prop){
					var parts = prop.split('.'),
						last = parts.pop(),
						l = parts.length,
						i = 1,
						current = parts[0] || prop;

					while((obj = obj[current]) && i < l){
						current = parts[i];
						i++;
					}

					if(obj !== undf){
						return obj[last] !== undf ? obj[last] : obj;
					}
				};

			return string ? self._execFilter('getOption', getProperty(self, string), arguments) : self;
		},

		/**
		 * Set Options
		 * @since 2.0.0
		 * @param {object} config
		 */

		setOptions: function(config){
			var self = this;

			self._execAction('setOptions', 0, arguments);

			typeof config === 'object' && $.extend(true, self, config);

			self._execAction('setOptions', 1, arguments);
		},

		/**
		 * Get State
		 * @since 2.0.0
		 * @return {object} state
		 */

		getState: function(){
			var self = this;

			return self._execFilter('getState', self._state, self);
		},

		/**
		 * Force Refresh
		 * @since 2.1.2
		 */

		forceRefresh: function(){
			var self = this;

			self._refresh(false, true);
		},

		/**
		 * Destroy
		 * @since 2.0.0
		 * @param {boolean} hideAll
		 */

		destroy: function(hideAll){
			var self = this,
				filters = $.MixItUp.prototype._bound._filter,
				sorts = $.MixItUp.prototype._bound._sort;

			self._execAction('destroy', 0, arguments);

			self._$body
				.add($(self.selectors.sort))
				.add($(self.selectors.filter))
				.off('.mixItUp');

			for(var i = 0; i < self._$targets.length; i++){
				var target = self._$targets[i];

				hideAll && (target.style.display = '');

				delete target.mixParent;
			}

			self._execAction('destroy', 1, arguments);

			if(filters[self.selectors.filter] && filters[self.selectors.filter] > 1) {
				filters[self.selectors.filter]--;
			} else if(filters[self.selectors.filter] === 1) {
				delete filters[self.selectors.filter];
			}

			if(sorts[self.selectors.sort] && sorts[self.selectors.sort] > 1) {
				sorts[self.selectors.sort]--;
			} else if(sorts[self.selectors.sort] === 1) {
				delete sorts[self.selectors.sort];
			}

			delete $.MixItUp.prototype._instances[self._id];
		}

	};

	/* jQuery Methods
	---------------------------------------------------------------------- */

	/**
	 * jQuery .mixItUp() method
	 * @since 2.0.0
	 * @extends $.fn
	 */

	$.fn.mixItUp = function(){
		var args = arguments,
			dataReturn = [],
			eachReturn,
			_instantiate = function(domNode, settings){
				var instance = new $.MixItUp(),
					rand = function(){
						return ('00000'+(Math.random()*16777216<<0).toString(16)).substr(-6).toUpperCase();
					};

				instance._execAction('_instantiate', 0, arguments);

				domNode.id = !domNode.id ? 'MixItUp'+rand() : domNode.id;

				if(!instance._instances[domNode.id]){
					instance._instances[domNode.id] = instance;
					instance._init(domNode, settings);
				}

				instance._execAction('_instantiate', 1, arguments);
			};

		eachReturn = this.each(function(){
			if(args && typeof args[0] === 'string'){
				var instance = $.MixItUp.prototype._instances[this.id];
				if(args[0] === 'isLoaded'){
					dataReturn.push(instance ? true : false);
				} else {
					var data = instance[args[0]](args[1], args[2], args[3]);
					if(data !== undf)dataReturn.push(data);
				}
			} else {
				_instantiate(this, args[0]);
			}
		});

		if(dataReturn.length){
			return dataReturn.length > 1 ? dataReturn : dataReturn[0];
		} else {
			return eachReturn;
		}
	};

	/**
	 * jQuery .removeStyle() method
	 * @since 2.0.0
	 * @extends $.fn
	 */

	$.fn.removeStyle = function(style, prefix){
		prefix = prefix ? prefix : '';

		return this.each(function(){
			var el = this,
				styles = style.split(' ');

			for(var i = 0; i < styles.length; i++){
				for(var j = 0; j < 4; j++){
					switch (j) {
						case 0:
							var prop = styles[i];
							break;
						case 1:
							var prop = $.MixItUp.prototype._helpers._camelCase(prop);
							break;
						case 2:
							var prop = prefix+styles[i];
							break;
						case 3:
							var prop = $.MixItUp.prototype._helpers._camelCase(prefix+styles[i]);
					}

					if(
						el.style[prop] !== undf &&
						typeof el.style[prop] !== 'unknown' &&
						el.style[prop].length > 0
					){
						el.style[prop] = '';
					}

					if(!prefix && j === 1)break;
				}
			}

			if(el.attributes && el.attributes.style && el.attributes.style !== undf && el.attributes.style.value === ''){
				el.attributes.removeNamedItem('style');
			}
		});
	};

})(jQuery);

/**
 * Flickity fade v1.0.0
 * Fade between Flickity slides
 */

/* jshint browser: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'flickity/js/index',
      'fizzy-ui-utils/utils',
    ], factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( this, function factory( Flickity, utils ) {

// ---- Slide ---- //

var Slide = Flickity.Slide;

var slideUpdateTarget = Slide.prototype.updateTarget;
Slide.prototype.updateTarget = function() {
  slideUpdateTarget.apply( this, arguments );
  if ( !this.parent.options.fade ) {
    return;
  }
  // position cells at selected target
  var slideTargetX = this.target - this.x;
  var firstCellX = this.cells[0].x;
  this.cells.forEach( function( cell ) {
    var targetX = cell.x - firstCellX - slideTargetX;
    cell.renderPosition( targetX );
  });
};

Slide.prototype.setOpacity = function( alpha ) {
  this.cells.forEach( function( cell ) {
    cell.element.style.opacity = alpha;
  });
};

// ---- Flickity ---- //

var proto = Flickity.prototype;

Flickity.createMethods.push('_createFade');

proto._createFade = function() {
  this.fadeIndex = this.selectedIndex;
  this.prevSelectedIndex = this.selectedIndex;
  this.on( 'select', this.onSelectFade );
  this.on( 'dragEnd', this.onDragEndFade );
  this.on( 'settle', this.onSettleFade );
  this.on( 'activate', this.onActivateFade );
  this.on( 'deactivate', this.onDeactivateFade );
};

var updateSlides = proto.updateSlides;
proto.updateSlides = function() {
  updateSlides.apply( this, arguments );
  if ( !this.options.fade ) {
    return;
  }
  // set initial opacity
  this.slides.forEach( function( slide, i ) {
    var alpha = i == this.selectedIndex ? 1 : 0;
    slide.setOpacity( alpha );
  }, this );
};

/* ---- events ---- */

proto.onSelectFade = function() {
  // in case of resize, keep fadeIndex within current count
  this.fadeIndex = Math.min( this.prevSelectedIndex, this.slides.length - 1 );
  this.prevSelectedIndex = this.selectedIndex;
};

proto.onSettleFade = function() {
  delete this.didDragEnd;
  if ( !this.options.fade ) {
    return;
  }
  // set full and 0 opacity on selected & faded slides
  this.selectedSlide.setOpacity( 1 );
  var fadedSlide = this.slides[ this.fadeIndex ];
  if ( fadedSlide && this.fadeIndex != this.selectedIndex ) {
    this.slides[ this.fadeIndex ].setOpacity( 0 );
  }
};

proto.onDragEndFade = function() {
  // set flag
  this.didDragEnd = true;
};

proto.onActivateFade = function() {
  if ( this.options.fade ) {
    this.element.classList.add('is-fade');
  }
};

proto.onDeactivateFade = function() {
  if ( !this.options.fade ) {
    return;
  }
  this.element.classList.remove('is-fade');
  // reset opacity
  this.slides.forEach( function( slide ) {
    slide.setOpacity('');
  });
};

/* ---- position & fading ---- */

var positionSlider = proto.positionSlider;
proto.positionSlider = function() {
  if ( !this.options.fade ) {
    positionSlider.apply( this, arguments );
    return;
  }

  this.fadeSlides();
  this.dispatchScrollEvent();
};

var positionSliderAtSelected = proto.positionSliderAtSelected;
proto.positionSliderAtSelected = function() {
  if ( this.options.fade ) {
    // position fade slider at origin
    this.setTranslateX( 0 );
  }
  positionSliderAtSelected.apply( this, arguments );
};

proto.fadeSlides = function() {
  if ( this.slides.length < 2 ) {
    return;
  }
  // get slides to fade-in & fade-out
  var indexes = this.getFadeIndexes();
  var fadeSlideA = this.slides[ indexes.a ];
  var fadeSlideB = this.slides[ indexes.b ];
  var distance = this.wrapDifference( fadeSlideA.target, fadeSlideB.target );
  var progress = this.wrapDifference( fadeSlideA.target, -this.x );
  progress = progress / distance;

  fadeSlideA.setOpacity( 1 - progress );
  fadeSlideB.setOpacity( progress );

  // hide previous slide
  var fadeHideIndex = indexes.a;
  if ( this.isDragging ) {
    fadeHideIndex = progress > 0.5 ? indexes.a : indexes.b;
  }
  var isNewHideIndex = this.fadeHideIndex != undefined &&
    this.fadeHideIndex != fadeHideIndex &&
    this.fadeHideIndex != indexes.a &&
    this.fadeHideIndex != indexes.b;
  if ( isNewHideIndex ) {
    // new fadeHideSlide set, hide previous
    this.slides[ this.fadeHideIndex ].setOpacity( 0 );
  }
  this.fadeHideIndex = fadeHideIndex;
};

proto.getFadeIndexes = function() {
  if ( !this.isDragging && !this.didDragEnd ) {
    return {
      a: this.fadeIndex,
      b: this.selectedIndex,
    };
  }
  if ( this.options.wrapAround ) {
    return this.getFadeDragWrapIndexes();
  } else {
    return this.getFadeDragLimitIndexes();
  }
};

proto.getFadeDragWrapIndexes = function() {
  var distances = this.slides.map( function( slide, i ) {
    return this.getSlideDistance( -this.x, i );
  }, this );
  var absDistances = distances.map( function( distance ) {
    return Math.abs( distance );
  });
  var minDistance = Math.min.apply( Math, absDistances );
  var closestIndex = absDistances.indexOf( minDistance );
  var distance = distances[ closestIndex ];
  var len = this.slides.length;

  var delta = distance >= 0 ? 1 : -1;
  return {
    a: closestIndex,
    b: utils.modulo( closestIndex + delta, len ),
  };
};

proto.getFadeDragLimitIndexes = function() {
  // calculate closest previous slide
  var dragIndex = 0;
  for ( var i=0; i < this.slides.length - 1; i++ ) {
    var slide = this.slides[i];
    if ( -this.x < slide.target ) {
      break;
    }
    dragIndex = i;
  }
  return {
    a: dragIndex,
    b: dragIndex + 1,
  };
};

proto.wrapDifference = function( a, b ) {
  var diff = b - a;

  if ( !this.options.wrapAround ) {
    return diff;
  }

  var diffPlus = diff + this.slideableWidth;
  var diffMinus = diff - this.slideableWidth;
  if ( Math.abs( diffPlus ) < Math.abs( diff ) ) {
    diff = diffPlus;
  }
  if ( Math.abs( diffMinus ) < Math.abs( diff ) ) {
    diff = diffMinus;
  }
  return diff;
};

// ---- wrapAround ---- //

var _getWrapShiftCells = proto._getWrapShiftCells;
proto._getWrapShiftCells = function() {
  if ( !this.options.fade ) {
    _getWrapShiftCells.apply( this, arguments );
  }
};

var shiftWrapCells = proto.shiftWrapCells;
proto.shiftWrapCells = function() {
  if ( !this.options.fade ) {
    shiftWrapCells.apply( this, arguments );
  }
};

return Flickity;

}));

(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
            return factory(window, $);
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(window, require('jquery'));
    } else {
        window.lity = factory(window, window.jQuery || window.Zepto);
    }
}(typeof window !== "undefined" ? window : this, function(window, $) {
    'use strict';

    var document = window.document;

    var _win = $(window);
    var _deferred = $.Deferred;
    var _html = $('html');
    var _instances = [];

    var _attrAriaHidden = 'aria-hidden';
    var _dataAriaHidden = 'lity-' + _attrAriaHidden;

    var _focusableElementsSelector = 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])';

    var _defaultOptions = {
        esc: true,
        handler: null,
        handlers: {
            image: imageHandler,
            inline: inlineHandler,
            iframe: iframeHandler
        },
        template: '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'
    };

    var _imageRegexp = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i;

    var _transitionEndEvent = (function() {
        var el = document.createElement('div');

        var transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        };

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return transEndEventNames[name];
            }
        }

        return false;
    })();

    function transitionEnd(element) {
        var deferred = _deferred();

        if (!_transitionEndEvent || !element.length) {
            deferred.resolve();
        } else {
            element.one(_transitionEndEvent, deferred.resolve);
            setTimeout(deferred.resolve, 500);
        }

        return deferred.promise();
    }

    function settings(currSettings, key, value) {
        if (arguments.length === 1) {
            return $.extend({}, currSettings);
        }

        if (typeof key === 'string') {
            if (typeof value === 'undefined') {
                return typeof currSettings[key] === 'undefined'
                    ? null
                    : currSettings[key];
            }

            currSettings[key] = value;
        } else {
            $.extend(currSettings, key);
        }

        return this;
    }

    function parseQueryParams(params) {
        var pos = params.indexOf('?');

        if (pos > -1) {
            params = params.substr(pos + 1);
        }

        var pairs = decodeURI(params.split('#')[0]).split('&');
        var obj = {}, p;

        for (var i = 0, n = pairs.length; i < n; i++) {
            if (!pairs[i]) {
                continue;
            }

            p = pairs[i].split('=');
            obj[p[0]] = p[1];
        }

        return obj;
    }

    function appendQueryParams(url, params) {
        if (!params) {
            return url;
        }

        if ('string' === $.type(params)) {
            params = parseQueryParams(params);
        }

        if (url.indexOf('?') > -1) {
            var split = url.split('?');
            url = split.shift();

            params = $.extend(
                {},
                parseQueryParams(split[0]),
                params
            )
        }

        return url + '?' + $.param(params);
    }

    function transferHash(originalUrl, newUrl) {
        var pos = originalUrl.indexOf('#');

        if (-1 === pos) {
            return newUrl;
        }

        if (pos > 0) {
            originalUrl = originalUrl.substr(pos);
        }

        return newUrl + originalUrl;
    }

    function iframe(iframeUrl, instance, queryParams, hashUrl) {
        instance && instance.element().addClass('lity-iframe');

        if (queryParams) {
            iframeUrl = appendQueryParams(iframeUrl, queryParams);
        }

        if (hashUrl) {
            iframeUrl = transferHash(hashUrl, iframeUrl);
        }

        return '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen allow="autoplay; fullscreen" src="' + iframeUrl + '"/></div>';
    }

    function error(msg) {
        return $('<span class="lity-error"></span>').append(msg);
    }

    function imageHandler(target, instance) {
        var desc = (instance.opener() && instance.opener().data('lity-desc')) || 'Image with no description';
        var img = $('<img src="' + target + '" alt="' + desc + '"/>');
        var deferred = _deferred();
        var failed = function() {
            deferred.reject(error('Failed loading image'));
        };

        img
            .on('load', function() {
                if (this.naturalWidth === 0) {
                    return failed();
                }

                deferred.resolve(img);
            })
            .on('error', failed)
        ;

        return deferred.promise();
    }

    imageHandler.test = function(target) {
        return _imageRegexp.test(target);
    };

    function inlineHandler(target, instance) {
        var el, placeholder, hasHideClass;

        try {
            el = $(target);
        } catch (e) {
            return false;
        }

        if (!el.length) {
            return false;
        }

        placeholder = $('<i style="display:none !important"></i>');
        hasHideClass = el.hasClass('lity-hide');

        instance
            .element()
            .one('lity:remove', function() {
                placeholder
                    .before(el)
                    .remove()
                ;

                if (hasHideClass && !el.closest('.lity-content').length) {
                    el.addClass('lity-hide');
                }
            })
        ;

        return el
            .removeClass('lity-hide')
            .after(placeholder)
        ;
    }

    function iframeHandler(target, instance) {
        return iframe(target, instance);
    }

    function winHeight() {
        return document.documentElement.clientHeight
            ? document.documentElement.clientHeight
            : Math.round(_win.height());
    }

    function keydown(e) {
        var current = currentInstance();

        if (!current) {
            return;
        }

        // ESC key
        if (e.keyCode === 27 && !!current.options('esc')) {
            current.close();
        }

        // TAB key
        if (e.keyCode === 9) {
            handleTabKey(e, current);
        }
    }

    function handleTabKey(e, instance) {
        var focusableElements = instance.element().find(_focusableElementsSelector);
        var focusedIndex = focusableElements.index(document.activeElement);

        if (e.shiftKey && focusedIndex <= 0) {
            focusableElements.get(focusableElements.length - 1).focus();
            e.preventDefault();
        } else if (!e.shiftKey && focusedIndex === focusableElements.length - 1) {
            focusableElements.get(0).focus();
            e.preventDefault();
        }
    }

    function resize() {
        $.each(_instances, function(i, instance) {
            instance.resize();
        });
    }

    function registerInstance(instanceToRegister) {
        if (1 === _instances.unshift(instanceToRegister)) {
            _html.addClass('lity-active');

            _win
                .on({
                    resize: resize,
                    keydown: keydown
                })
            ;
        }

        $('body > *').not(instanceToRegister.element())
            .addClass('lity-hidden')
            .each(function() {
                var el = $(this);

                if (undefined !== el.data(_dataAriaHidden)) {
                    return;
                }

                el.data(_dataAriaHidden, el.attr(_attrAriaHidden) || null);
            })
            .attr(_attrAriaHidden, 'true')
        ;
    }

    function removeInstance(instanceToRemove) {
        var show;

        instanceToRemove
            .element()
            .attr(_attrAriaHidden, 'true')
        ;

        if (1 === _instances.length) {
            _html.removeClass('lity-active');

            _win
                .off({
                    resize: resize,
                    keydown: keydown
                })
            ;
        }

        _instances = $.grep(_instances, function(instance) {
            return instanceToRemove !== instance;
        });

        if (!!_instances.length) {
            show = _instances[0].element();
        } else {
            show = $('.lity-hidden');
        }

        show
            .removeClass('lity-hidden')
            .each(function() {
                var el = $(this), oldAttr = el.data(_dataAriaHidden);

                if (!oldAttr) {
                    el.removeAttr(_attrAriaHidden);
                } else {
                    el.attr(_attrAriaHidden, oldAttr);
                }

                el.removeData(_dataAriaHidden);
            })
        ;
    }

    function currentInstance() {
        if (0 === _instances.length) {
            return null;
        }

        return _instances[0];
    }

    function factory(target, instance, handlers, preferredHandler) {
        var handler = 'inline', content;

        var currentHandlers = $.extend({}, handlers);

        if (preferredHandler && currentHandlers[preferredHandler]) {
            content = currentHandlers[preferredHandler](target, instance);
            handler = preferredHandler;
        } else {
            // Run inline and iframe handlers after all other handlers
            $.each(['inline', 'iframe'], function(i, name) {
                delete currentHandlers[name];

                currentHandlers[name] = handlers[name];
            });

            $.each(currentHandlers, function(name, currentHandler) {
                // Handler might be "removed" by setting callback to null
                if (!currentHandler) {
                    return true;
                }

                if (
                    currentHandler.test &&
                    !currentHandler.test(target, instance)
                ) {
                    return true;
                }

                content = currentHandler(target, instance);

                if (false !== content) {
                    handler = name;
                    return false;
                }
            });
        }

        return {handler: handler, content: content || ''};
    }

    function Lity(target, options, opener, activeElement) {
        var self = this;
        var result;
        var isReady = false;
        var isClosed = false;
        var element;
        var content;

        options = $.extend(
            {},
            _defaultOptions,
            options
        );

        element = $(options.template);

        // -- API --

        self.element = function() {
            return element;
        };

        self.opener = function() {
            return opener;
        };

        self.content = function() {
            return content;
        };

        self.options  = $.proxy(settings, self, options);
        self.handlers = $.proxy(settings, self, options.handlers);

        self.resize = function() {
            if (!isReady || isClosed) {
                return;
            }

            content
                .css('max-height', winHeight() + 'px')
                .trigger('lity:resize', [self])
            ;
        };

        self.close = function() {
            if (!isReady || isClosed) {
                return;
            }

            isClosed = true;

            removeInstance(self);

            var deferred = _deferred();

            // We return focus only if the current focus is inside this instance
            if (
                activeElement &&
                (
                    document.activeElement === element[0] ||
                    $.contains(element[0], document.activeElement)
                )
            ) {
                try {
                    activeElement.focus();
                } catch (e) {
                    // Ignore exceptions, eg. for SVG elements which can't be
                    // focused in IE11
                }
            }

            content.trigger('lity:close', [self]);

            element
                .removeClass('lity-opened')
                .addClass('lity-closed')
            ;

            transitionEnd(content.add(element))
                .always(function() {
                    content.trigger('lity:remove', [self]);
                    element.remove();
                    element = undefined;
                    deferred.resolve();
                })
            ;

            return deferred.promise();
        };

        // -- Initialization --

        result = factory(target, self, options.handlers, options.handler);

        element
            .attr(_attrAriaHidden, 'false')
            .addClass('lity-loading lity-opened lity-' + result.handler)
            .appendTo('body')
            .focus()
            .on('click', '[data-lity-close]', function(e) {
                if ($(e.target).is('[data-lity-close]')) {
                    self.close();
                }
            })
            .trigger('lity:open', [self])
        ;

        registerInstance(self);

        $.when(result.content)
            .always(ready)
        ;

        function ready(result) {
            content = $(result)
                .css('max-height', winHeight() + 'px')
            ;

            element
                .find('.lity-loader')
                .each(function() {
                    var loader = $(this);

                    transitionEnd(loader)
                        .always(function() {
                            loader.remove();
                        })
                    ;
                })
            ;

            element
                .removeClass('lity-loading')
                .find('.lity-content')
                .empty()
                .append(content)
            ;

            isReady = true;

            content
                .trigger('lity:ready', [self])
            ;
        }
    }

    function lity(target, options, opener) {
        if (!target.preventDefault) {
            opener = $(opener);
        } else {
            target.preventDefault();
            opener = $(this);
            target = opener.data('lity-target') || opener.attr('href') || opener.attr('src');
        }

        var instance = new Lity(
            target,
            $.extend(
                {},
                opener.data('lity-options') || opener.data('lity'),
                options
            ),
            opener,
            document.activeElement
        );

        if (!target.preventDefault) {
            return instance;
        }
    }

    lity.version  = '@VERSION';
    lity.options  = $.proxy(settings, lity, _defaultOptions);
    lity.handlers = $.proxy(settings, lity, _defaultOptions.handlers);
    lity.current  = currentInstance;
    lity.iframe   = iframe;

    $(document).on('click.lity', '[data-lity]', lity);

    return lity;
}));

/*!
 * circletype 2.3.1
 * A JavaScript library that lets you curve type on the web.
 * Copyright © 2014-2020 Peter Hrynkow
 * Licensed MIT
 * https://github.com/peterhry/CircleType#readme
 */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.CircleType=n():t.CircleType=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=28)}([function(t,n,e){var r=e(13)("wks"),o=e(12),i=e(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(4),o=e(11);t.exports=e(6)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(5),o=e(33),i=e(34),u=Object.defineProperty;n.f=e(6)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(18)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(2),o=e(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(16)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports={}},function(t,n,e){var r=e(13)("keys"),o=e(12);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(1),o=e(2),i=e(3),u=e(20),c=e(21),a=function(t,n,e){var f,s,l,p,h=t&a.F,v=t&a.G,d=t&a.S,y=t&a.P,m=t&a.B,g=v?r:d?r[n]||(r[n]={}):(r[n]||{}).prototype,_=v?o:o[n]||(o[n]={}),x=_.prototype||(_.prototype={});for(f in v&&(e=n),e)l=((s=!h&&g&&void 0!==g[f])?g:e)[f],p=m&&s?c(l,r):y&&"function"==typeof l?c(Function.call,l):l,g&&u(g,f,l,t&a.U),_[f]!=l&&i(_,f,p),y&&x[f]!=l&&(x[f]=l)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(10),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(1),o=e(3),i=e(7),u=e(12)("src"),c=e(35),a=(""+c).split("toString");e(2).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var f="function"==typeof e;f&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(f&&(i(e,u)||o(e,u,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||c.call(this)}))},function(t,n,e){var r=e(36);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(42),o=e(9);t.exports=function(t){return r(o(t))}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(8),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(4).f,o=e(7),i=e(0)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(9);t.exports=function(t){return Object(r(t))}},function(t,n,e){e(29);var r=e(54).default;t.exports=r},function(t,n,e){e(30),e(47),t.exports=e(2).Array.from},function(t,n,e){"use strict";var r=e(31)(!0);e(32)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},function(t,n,e){var r=e(8),o=e(9);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(16),o=e(17),i=e(20),u=e(3),c=e(14),a=e(37),f=e(26),s=e(46),l=e(0)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,v,d,y,m){a(e,n,v);var g,_,x,b=function(t){if(!p&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",O="values"==d,j=!1,S=t.prototype,M=S[l]||S["@@iterator"]||d&&S[d],T=M||b(d),P=d?O?b("entries"):T:void 0,A="Array"==n&&S.entries||M;if(A&&(x=s(A.call(new t)))!==Object.prototype&&x.next&&(f(x,w,!0),r||"function"==typeof x[l]||u(x,l,h)),O&&M&&"values"!==M.name&&(j=!0,T=function(){return M.call(this)}),r&&!m||!p&&!j&&S[l]||u(S,l,T),c[n]=T,c[w]=h,d)if(g={values:O?T:b("values"),keys:y?T:b("keys"),entries:P},m)for(_ in g)_ in S||i(S,_,g[_]);else o(o.P+o.F*(p||j),n,g);return g}},function(t,n,e){t.exports=!e(6)&&!e(18)((function(){return 7!=Object.defineProperty(e(19)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){t.exports=e(13)("native-function-to-string",Function.toString)},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){"use strict";var r=e(38),o=e(11),i=e(26),u={};e(3)(u,e(0)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(5),o=e(39),i=e(25),u=e(15)("IE_PROTO"),c=function(){},a=function(){var t,n=e(19)("iframe"),r=i.length;for(n.style.display="none",e(45).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(4),o=e(5),i=e(40);t.exports=e(6)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,a=0;c>a;)r.f(t,e=u[a++],n[e]);return t}},function(t,n,e){var r=e(41),o=e(25);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(7),o=e(22),i=e(43)(!1),u=e(15)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)e!=u&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(22),o=e(24),i=e(44);t.exports=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(8),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(1).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(7),o=e(27),i=e(15)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){"use strict";var r=e(21),o=e(17),i=e(27),u=e(48),c=e(49),a=e(24),f=e(50),s=e(51);o(o.S+o.F*!e(53)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,l,p=i(t),h="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,y=void 0!==d,m=0,g=s(p);if(y&&(d=r(d,v>2?arguments[2]:void 0,2)),null==g||h==Array&&c(g))for(e=new h(n=a(p.length));n>m;m++)f(e,m,y?d(p[m],m):p[m]);else for(l=g.call(p),e=new h;!(o=l.next()).done;m++)f(e,m,y?u(l,d,[o.value,m],!0):o.value);return e.length=m,e}})},function(t,n,e){var r=e(5);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(14),o=e(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){"use strict";var r=e(4),o=e(11);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},function(t,n,e){var r=e(52),o=e(0)("iterator"),i=e(14);t.exports=e(2).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(23),o=e(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){var r=e(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n,e){"use strict";e.r(n);var r=function(t){var n=t.getBoundingClientRect();return{height:n.height,left:n.left+window.pageXOffset,top:n.top+window.pageYOffset,width:n.width}};function o(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=Math.PI/180,u=function(t){return t*i},c=function(t,n){return t*(1-Math.cos(u(n/2)))},a=180/Math.PI,f=function(t,n){return t.reduce((function(t,e){var r=e.width,o=r/n*a;return{"θ":t.θ+o,rotations:t.rotations.concat([t.θ+o/2])}}),{"θ":0,rotations:[]})};function s(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=Math.PI,p=Math.max,h=Math.min,v=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=n,this.originalHTML=this.element.innerHTML;var i=document.createElement("div"),u=document.createDocumentFragment();i.setAttribute("aria-label",n.innerText),i.style.position="relative",this.container=i,this._letters=function(t,n){var e=document.createElement("span"),r=t.innerText.trim();return(n?n(r):o(r)).map((function(t){var n=e.cloneNode();return n.insertAdjacentHTML("afterbegin"," "===t?"&nbsp;":t),n}))}(n,e),this._letters.forEach((function(t){return u.appendChild(t)})),i.appendChild(u),this.element.innerHTML="",this.element.appendChild(i);var c=window.getComputedStyle(this.element),a=c.fontSize,f=c.lineHeight;this._fontSize=parseFloat(a),this._lineHeight=parseFloat(f)||this._fontSize,this._metrics=this._letters.map(r);var s=this._metrics.reduce((function(t,n){return t+n.width}),0);this._minRadius=s/l/2+this._lineHeight,this._dir=1,this._forceWidth=!1,this._forceHeight=!0,this._radius=this._minRadius,this._invalidate()}var n,e,i;return n=t,(e=[{key:"radius",value:function(t){return void 0!==t?(this._radius=p(this._minRadius,t),this._invalidate(),this):this._radius}},{key:"dir",value:function(t){return void 0!==t?(this._dir=t,this._invalidate(),this):this._dir}},{key:"forceWidth",value:function(t){return void 0!==t?(this._forceWidth=t,this._invalidate(),this):this._forceWidth}},{key:"forceHeight",value:function(t){return void 0!==t?(this._forceHeight=t,this._invalidate(),this):this._forceHeight}},{key:"refresh",value:function(){return this._invalidate()}},{key:"destroy",value:function(){return this.element.innerHTML=this.originalHTML,this}},{key:"_invalidate",value:function(){var t=this;return cancelAnimationFrame(this._raf),this._raf=requestAnimationFrame((function(){t._layout()})),this}},{key:"_layout",value:function(){var t=this,n=this._radius,e=this._dir,r=-1===e?-n+this._lineHeight:n,o="center ".concat(r/this._fontSize,"em"),i=n-this._lineHeight,a=f(this._metrics,i),s=a.rotations,l=a.θ;if(this._letters.forEach((function(n,r){var i=n.style,u=(-.5*l+s[r])*e,c=-.5*t._metrics[r].width/t._fontSize,a="translateX(".concat(c,"em) rotate(").concat(u,"deg)");i.position="absolute",i.bottom=-1===e?0:"auto",i.left="50%",i.transform=a,i.transformOrigin=o,i.webkitTransform=a,i.webkitTransformOrigin=o})),this._forceHeight){var p=l>180?c(n,l):c(i,l)+this._lineHeight;this.container.style.height="".concat(p/this._fontSize,"em")}if(this._forceWidth){var v=function(t,n){return 2*t*Math.sin(u(n/2))}(n,h(180,l));this.container.style.width="".concat(v/this._fontSize,"em")}return this}}])&&s(n.prototype,e),i&&s(n,i),t}();n.default=v}])}));