/**
 * SplitType
 * https://github.com/lukePeavey/SplitType
 * @version 0.2.5
 * @author Luke Peavey <lwpeavey@gmail.com>
 */

!function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).SplitType = e()
}(this, (function() {
	"use strict";
	function t(t, e) {
			for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1,
					i.configurable = !0,
					"value"in i && (i.writable = !0),
					Object.defineProperty(t, i.key, i)
			}
	}
	function e(e, n, i) {
			return n && t(e.prototype, n),
			i && t(e, i),
			e
	}
	function n(t, e) {
			return Object.getOwnPropertyNames(Object(t)).reduce((function(n, i) {
					var o = Object.getOwnPropertyDescriptor(Object(t), i)
						, r = Object.getOwnPropertyDescriptor(Object(e), i);
					return Object.defineProperty(n, i, r || o)
			}
			), {})
	}
	function i(t) {
			var e = n(t);
			return (e.types || e.split) && (e.types = e.types || e.split),
			(e.absolute || e.position) && (e.absolute = e.absolute || /absolute/.test(t.position)),
			e
	}
	function o(t) {
			return null !== t && "object" == typeof t
	}
	function r(t) {
			return Array.isArray(t) ? t : null == t ? [] : function(t) {
					return o(t) && function(t) {
							return "number" == typeof t && t > -1 && t % 1 == 0
					}(t.length)
			}(t) ? Array.prototype.slice.call(t) : [t]
	}
	function s(t) {
			return o(t) && /^(1|3|11)$/.test(t.nodeType)
	}
	function c(t) {
			return "string" == typeof t
	}
	function l(t) {
			var e, n = t;
			return c(t) && (n = /^(#[a-z]\w+)$/.test(t.trim()) ? document.getElementById(t.trim().slice(1)) : document.querySelectorAll(t)),
			(e = n,
			r(e).reduce((function(t, e) {
					return t.concat(r(e))
			}
			), [])).filter(s)
	}
	function a(t, e, n) {
			var i = {}
				, r = null;
			return o(t) && (r = t[a.expando] || (t[a.expando] = ++a.uid),
			i = a.cache[r] || (a.cache[r] = {})),
			void 0 === n ? void 0 === e ? i : i[e] : void 0 !== e ? (i[e] = n,
			n) : void 0
	}
	function u(t) {
			var e = t && t[a.expando];
			e && (delete t[e],
			delete a.cache[e])
	}
	function f(t, e) {
			for (var n = r(t), i = n.length, o = 0; o < i; o++)
					e(n[o], o, n)
	}
	a.expando = "splitType".concat(1 * new Date),
	a.cache = {},
	a.uid = 0;
	var d = "\\ud800-\\udfff"
		, h = "\\u0300-\\u036f\\ufe20-\\ufe23"
		, p = "\\u20d0-\\u20f0"
		, y = "\\ufe0e\\ufe0f"
		, g = "[".concat(d, "]")
		, m = "[".concat(h).concat(p, "]")
		, v = "\\ud83c[\\udffb-\\udfff]"
		, w = "(?:".concat(m, "|").concat(v, ")")
		, b = "[^".concat(d, "]")
		, C = "(?:\\ud83c[\\udde6-\\uddff]){2}"
		, x = "[\\ud800-\\udbff][\\udc00-\\udfff]"
		, T = "\\u200d"
		, E = "".concat(w, "?")
		, j = "[".concat(y, "]?")
		, O = j + E + ("(?:\\u200d(?:" + [b, C, x].join("|") + ")" + j + E + ")*")
		, S = "(?:".concat(["".concat(b).concat(m, "?"), m, C, x, g].join("|"), "\n)")
		, H = RegExp("".concat(v, "(?=").concat(v, ")|").concat(S).concat(O), "g")
		, k = RegExp("[".concat([T, d, h, p, y].join(""), "]"));
	function A(t) {
			return k.test(t)
	}
	function L(t) {
			return A(t) ? function(t) {
					return t.match(H) || []
			}(t) : function(t) {
					return t.split("")
			}(t)
	}
	function M(t) {
			return null == t ? "" : String(t)
	}
	function D(t, e) {
			var n = document.createElement(t);
			return e ? (Object.keys(e).forEach((function(t) {
					var i = e[t];
					null !== i && ("textContent" === t || "innerHTML" === t ? n[t] = i : "children" === t ? f(i, (function(t) {
							s(t) && n.appendChild(t)
					}
					)) : n.setAttribute(t, String(i).trim()))
			}
			)),
			n) : n
	}
	var N = {
			splitClass: "",
			lineClass: "line",
			wordClass: "word",
			charClass: "char",
			types: "lines, words, chars",
			absolute: !1,
			tagName: "div"
	}
		, P = function() {
			return document.createDocumentFragment()
	}
		, W = function(t) {
			return document.createTextNode(t)
	};
	function B(t, e) {
			var i, o, r = function(t) {
					var e = c(t) || Array.isArray(t) ? String(t) : "";
					return {
							lines: /line/i.test(e),
							words: /word/i.test(e),
							chars: /(char)|(character)/i.test(e)
					}
			}((e = n(N, e)).types), s = e.tagName, l = "B".concat(1 * new Date, "R"), u = "absolute" === e.position || e.absolute, d = [], h = [];
			if (o = r.lines ? D("div") : P(),
			i = function(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
					return (t = t ? String(t) : "").split(e)
			}(function(t, e) {
					var n = t.textContent;
					if (e) {
							var i = t.innerHTML
								, o = document.createElement("div");
							o.innerHTML = i.replace(/<br\s*\/?>/g, " ".concat(e, " ")),
							n = o.textContent
					}
					return n.replace(/\s+/g, " ").trim()
			}(t, l)).reduce((function(t, n, i, a) {
					var u, d;
					return n === l ? (o.appendChild(D("br")),
					t) : (r.chars && (d = function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
							return (t = M(t)) && c(t) && !e && A(t) ? L(t) : t.split(e)
					}(n).map((function(t) {
							return D(s, {
									class: "".concat(e.splitClass, " ").concat(e.charClass),
									style: "display: inline-block;",
									textContent: t
							})
					}
					)),
					h = h.concat(d)),
					r.words || r.lines ? (u = D(s, {
							class: "".concat(e.wordClass, " ").concat(e.splitClass),
							style: "display: inline-block; position: ".concat(r.words ? "relative" : "static"),
							children: r.chars ? d : null,
							textContent: r.chars ? null : n
					}),
					o.appendChild(u)) : f(d, (function(t) {
							o.appendChild(t)
					}
					)),
					i !== a.length - 1 && o.appendChild(W(" ")),
					r.words ? t.concat(u) : t)
			}
			), []),
			t.innerHTML = "",
			t.appendChild(o),
			!u && !r.lines)
					return {
							chars: h,
							words: i,
							lines: []
					};
			var p, y, g, m, v, w = [], b = [], C = a(t, "nodes", t.getElementsByTagName(s)), x = t.parentElement, T = t.nextElementSibling, E = window.getComputedStyle(t).textAlign;
			return u && (m = {
					left: o.offsetLeft,
					top: o.offsetTop,
					width: o.offsetWidth
			},
			g = t.offsetWidth,
			y = t.offsetHeight,
			a(t).cssWidth = t.style.width,
			a(t).cssHeight = t.style.height),
			f(C, (function(t) {
					if (t !== o) {
							var e, n = t.parentElement === o;
							r.lines && n && ((e = a(t, "top", t.offsetTop)) !== v && (v = e,
							w.push(b = [])),
							b.push(t)),
							u && (a(t).top = e || t.offsetTop,
							a(t).left = t.offsetLeft,
							a(t).width = t.offsetWidth,
							a(t).height = p || (p = t.offsetHeight))
					}
			}
			)),
			x && x.removeChild(t),
			r.lines && (o = P(),
			d = w.map((function(t) {
					var n = D(s, {
							class: "".concat(e.splitClass, " ").concat(e.lineClass),
							style: "display: block; text-align: ".concat(E, "; width: 100%;")
					});
					return o.appendChild(n),
					u && (a(n).type = "line",
					a(n).top = a(t[0]).top,
					a(n).height = p),
					f(t, (function(t, e, i) {
							r.words ? n.appendChild(t) : r.chars ? f(t.children, (function(t) {
									n.appendChild(t)
							}
							)) : n.appendChild(W(t.textContent)),
							e !== i.length - 1 && n.appendChild(W(" "))
					}
					)),
					n
			}
			)),
			t.replaceChild(o, t.firstChild)),
			u && (t.style.width = "".concat(t.style.width || g, "px"),
			t.style.height = "".concat(y, "px"),
			f(C, (function(t) {
					var e = "line" === a(t).type
						, n = !e && "line" === a(t.parentElement).type;
					t.style.top = "".concat(n ? 0 : a(t).top, "px"),
					t.style.left = "".concat(e ? m.left : a(t).left - (n ? m.left : 0), "px"),
					t.style.height = "".concat(a(t).height, "px"),
					t.style.width = "".concat(e ? m.width : a(t).width, "px"),
					t.style.position = "absolute"
			}
			))),
			x && (T ? x.insertBefore(t, T) : x.appendChild(t)),
			{
					lines: d,
					words: r.words ? i : [],
					chars: h
			}
	}
	var R = n(N, {});
	return function() {
			function t(e, o) {
					!function(t, e) {
							if (!(t instanceof e))
									throw new TypeError("Cannot call a class as a function")
					}(this, t),
					this.isSplit = !1,
					this.settings = n(R, i(o)),
					this.elements = l(e) || [],
					this.elements.length && (this.originals = this.elements.map((function(t) {
							return a(t, "html", a(t).html || t.innerHTML)
					}
					)),
					this.settings.types && this.split())
			}
			return e(t, null, [{
					key: "defaults",
					get: function() {
							return R
					},
					set: function(t) {
							R = n(R, i(t))
					}
			}]),
			e(t, [{
					key: "split",
					value: function(t) {
							var e = this;
							this.revert(),
							this.lines = [],
							this.words = [],
							this.chars = [];
							var o = [window.pageXOffset, window.pageYOffset];
							void 0 !== t && (this.settings = n(this.settings, i(t))),
							this.elements.forEach((function(t) {
									var n = B(t, e.settings)
										, i = n.lines
										, o = n.words
										, r = n.chars;
									e.lines = e.lines.concat(i),
									e.words = e.words.concat(o),
									e.chars = e.chars.concat(r),
									a(t).isSplit = !0
							}
							)),
							this.isSplit = !0,
							window.scrollTo(o[0], o[1]),
							this.elements.forEach((function(t) {
									r(a(t).nodes || []).forEach(u)
							}
							))
					}
			}, {
					key: "revert",
					value: function() {
							var t = this;
							this.isSplit && (this.lines = null,
							this.words = null,
							this.chars = null),
							this.elements.forEach((function(e) {
									a(e).isSplit && a(e).html && (e.innerHTML = a(e).html,
									e.style.height = a(e).cssHeight || "",
									e.style.width = a(e).cssWidth || "",
									t.isSplit = !1)
							}
							))
					}
			}]),
			t
	}()
}
));
