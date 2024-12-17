(function () {
	const R = document.createElement("link").relList;
	if (R && R.supports && R.supports("modulepreload")) return;
	for (const j of document.querySelectorAll('link[rel="modulepreload"]')) ne(j);
	new MutationObserver((j) => {
		for (const H of j)
			if (H.type === "childList")
				for (const X of H.addedNodes)
					X.tagName === "LINK" && X.rel === "modulepreload" && ne(X);
	}).observe(document, { childList: !0, subtree: !0 });
	function m(j) {
		const H = {};
		return (
			j.integrity && (H.integrity = j.integrity),
			j.referrerPolicy && (H.referrerPolicy = j.referrerPolicy),
			j.crossOrigin === "use-credentials"
				? (H.credentials = "include")
				: j.crossOrigin === "anonymous"
				? (H.credentials = "omit")
				: (H.credentials = "same-origin"),
			H
		);
	}
	function ne(j) {
		if (j.ep) return;
		j.ep = !0;
		const H = m(j);
		fetch(j.href, H);
	}
})();
function Df(E) {
	return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default")
		? E.default
		: E;
}
var Pi = { exports: {} },
	wr = {},
	Ni = { exports: {} },
	I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function jf() {
	if (Pa) return I;
	Pa = 1;
	var E = Symbol.for("react.element"),
		R = Symbol.for("react.portal"),
		m = Symbol.for("react.fragment"),
		ne = Symbol.for("react.strict_mode"),
		j = Symbol.for("react.profiler"),
		H = Symbol.for("react.provider"),
		X = Symbol.for("react.context"),
		oe = Symbol.for("react.forward_ref"),
		A = Symbol.for("react.suspense"),
		se = Symbol.for("react.memo"),
		ae = Symbol.for("react.lazy"),
		te = Symbol.iterator;
	function J(c) {
		return c === null || typeof c != "object"
			? null
			: ((c = (te && c[te]) || c["@@iterator"]),
			  typeof c == "function" ? c : null);
	}
	var Oe = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		ze = Object.assign,
		Z = {};
	function K(c, v, O) {
		(this.props = c),
			(this.context = v),
			(this.refs = Z),
			(this.updater = O || Oe);
	}
	(K.prototype.isReactComponent = {}),
		(K.prototype.setState = function (c, v) {
			if (typeof c != "object" && typeof c != "function" && c != null)
				throw Error(
					"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
				);
			this.updater.enqueueSetState(this, c, v, "setState");
		}),
		(K.prototype.forceUpdate = function (c) {
			this.updater.enqueueForceUpdate(this, c, "forceUpdate");
		});
	function D() {}
	D.prototype = K.prototype;
	function ce(c, v, O) {
		(this.props = c),
			(this.context = v),
			(this.refs = Z),
			(this.updater = O || Oe);
	}
	var V = (ce.prototype = new D());
	(V.constructor = ce), ze(V, K.prototype), (V.isPureReactComponent = !0);
	var q = Array.isArray,
		we = Object.prototype.hasOwnProperty,
		fe = { current: null },
		ke = { key: !0, ref: !0, __self: !0, __source: !0 };
	function Me(c, v, O) {
		var U,
			$ = {},
			W = null,
			b = null;
		if (v != null)
			for (U in (v.ref !== void 0 && (b = v.ref),
			v.key !== void 0 && (W = "" + v.key),
			v))
				we.call(v, U) && !ke.hasOwnProperty(U) && ($[U] = v[U]);
		var G = arguments.length - 2;
		if (G === 1) $.children = O;
		else if (1 < G) {
			for (var ie = Array(G), Qe = 0; Qe < G; Qe++) ie[Qe] = arguments[Qe + 2];
			$.children = ie;
		}
		if (c && c.defaultProps)
			for (U in ((G = c.defaultProps), G)) $[U] === void 0 && ($[U] = G[U]);
		return {
			$$typeof: E,
			type: c,
			key: W,
			ref: b,
			props: $,
			_owner: fe.current,
		};
	}
	function fn(c, v) {
		return {
			$$typeof: E,
			type: c.type,
			key: v,
			ref: c.ref,
			props: c.props,
			_owner: c._owner,
		};
	}
	function wn(c) {
		return typeof c == "object" && c !== null && c.$$typeof === E;
	}
	function Yn(c) {
		var v = { "=": "=0", ":": "=2" };
		return (
			"$" +
			c.replace(/[=:]/g, function (O) {
				return v[O];
			})
		);
	}
	var dn = /\/+/g;
	function We(c, v) {
		return typeof c == "object" && c !== null && c.key != null
			? Yn("" + c.key)
			: v.toString(36);
	}
	function tn(c, v, O, U, $) {
		var W = typeof c;
		(W === "undefined" || W === "boolean") && (c = null);
		var b = !1;
		if (c === null) b = !0;
		else
			switch (W) {
				case "string":
				case "number":
					b = !0;
					break;
				case "object":
					switch (c.$$typeof) {
						case E:
						case R:
							b = !0;
					}
			}
		if (b)
			return (
				(b = c),
				($ = $(b)),
				(c = U === "" ? "." + We(b, 0) : U),
				q($)
					? ((O = ""),
					  c != null && (O = c.replace(dn, "$&/") + "/"),
					  tn($, v, O, "", function (Qe) {
							return Qe;
					  }))
					: $ != null &&
					  (wn($) &&
							($ = fn(
								$,
								O +
									(!$.key || (b && b.key === $.key)
										? ""
										: ("" + $.key).replace(dn, "$&/") + "/") +
									c
							)),
					  v.push($)),
				1
			);
		if (((b = 0), (U = U === "" ? "." : U + ":"), q(c)))
			for (var G = 0; G < c.length; G++) {
				W = c[G];
				var ie = U + We(W, G);
				b += tn(W, v, O, ie, $);
			}
		else if (((ie = J(c)), typeof ie == "function"))
			for (c = ie.call(c), G = 0; !(W = c.next()).done; )
				(W = W.value), (ie = U + We(W, G++)), (b += tn(W, v, O, ie, $));
		else if (W === "object")
			throw (
				((v = String(c)),
				Error(
					"Objects are not valid as a React child (found: " +
						(v === "[object Object]"
							? "object with keys {" + Object.keys(c).join(", ") + "}"
							: v) +
						"). If you meant to render a collection of children, use an array instead."
				))
			);
		return b;
	}
	function pn(c, v, O) {
		if (c == null) return c;
		var U = [],
			$ = 0;
		return (
			tn(c, U, "", "", function (W) {
				return v.call(O, W, $++);
			}),
			U
		);
	}
	function Ie(c) {
		if (c._status === -1) {
			var v = c._result;
			(v = v()),
				v.then(
					function (O) {
						(c._status === 0 || c._status === -1) &&
							((c._status = 1), (c._result = O));
					},
					function (O) {
						(c._status === 0 || c._status === -1) &&
							((c._status = 2), (c._result = O));
					}
				),
				c._status === -1 && ((c._status = 0), (c._result = v));
		}
		if (c._status === 1) return c._result.default;
		throw c._result;
	}
	var me = { current: null },
		k = { transition: null },
		T = {
			ReactCurrentDispatcher: me,
			ReactCurrentBatchConfig: k,
			ReactCurrentOwner: fe,
		};
	function C() {
		throw Error("act(...) is not supported in production builds of React.");
	}
	return (
		(I.Children = {
			map: pn,
			forEach: function (c, v, O) {
				pn(
					c,
					function () {
						v.apply(this, arguments);
					},
					O
				);
			},
			count: function (c) {
				var v = 0;
				return (
					pn(c, function () {
						v++;
					}),
					v
				);
			},
			toArray: function (c) {
				return (
					pn(c, function (v) {
						return v;
					}) || []
				);
			},
			only: function (c) {
				if (!wn(c))
					throw Error(
						"React.Children.only expected to receive a single React element child."
					);
				return c;
			},
		}),
		(I.Component = K),
		(I.Fragment = m),
		(I.Profiler = j),
		(I.PureComponent = ce),
		(I.StrictMode = ne),
		(I.Suspense = A),
		(I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
		(I.act = C),
		(I.cloneElement = function (c, v, O) {
			if (c == null)
				throw Error(
					"React.cloneElement(...): The argument must be a React element, but you passed " +
						c +
						"."
				);
			var U = ze({}, c.props),
				$ = c.key,
				W = c.ref,
				b = c._owner;
			if (v != null) {
				if (
					(v.ref !== void 0 && ((W = v.ref), (b = fe.current)),
					v.key !== void 0 && ($ = "" + v.key),
					c.type && c.type.defaultProps)
				)
					var G = c.type.defaultProps;
				for (ie in v)
					we.call(v, ie) &&
						!ke.hasOwnProperty(ie) &&
						(U[ie] = v[ie] === void 0 && G !== void 0 ? G[ie] : v[ie]);
			}
			var ie = arguments.length - 2;
			if (ie === 1) U.children = O;
			else if (1 < ie) {
				G = Array(ie);
				for (var Qe = 0; Qe < ie; Qe++) G[Qe] = arguments[Qe + 2];
				U.children = G;
			}
			return { $$typeof: E, type: c.type, key: $, ref: W, props: U, _owner: b };
		}),
		(I.createContext = function (c) {
			return (
				(c = {
					$$typeof: X,
					_currentValue: c,
					_currentValue2: c,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
					_defaultValue: null,
					_globalName: null,
				}),
				(c.Provider = { $$typeof: H, _context: c }),
				(c.Consumer = c)
			);
		}),
		(I.createElement = Me),
		(I.createFactory = function (c) {
			var v = Me.bind(null, c);
			return (v.type = c), v;
		}),
		(I.createRef = function () {
			return { current: null };
		}),
		(I.forwardRef = function (c) {
			return { $$typeof: oe, render: c };
		}),
		(I.isValidElement = wn),
		(I.lazy = function (c) {
			return { $$typeof: ae, _payload: { _status: -1, _result: c }, _init: Ie };
		}),
		(I.memo = function (c, v) {
			return { $$typeof: se, type: c, compare: v === void 0 ? null : v };
		}),
		(I.startTransition = function (c) {
			var v = k.transition;
			k.transition = {};
			try {
				c();
			} finally {
				k.transition = v;
			}
		}),
		(I.unstable_act = C),
		(I.useCallback = function (c, v) {
			return me.current.useCallback(c, v);
		}),
		(I.useContext = function (c) {
			return me.current.useContext(c);
		}),
		(I.useDebugValue = function () {}),
		(I.useDeferredValue = function (c) {
			return me.current.useDeferredValue(c);
		}),
		(I.useEffect = function (c, v) {
			return me.current.useEffect(c, v);
		}),
		(I.useId = function () {
			return me.current.useId();
		}),
		(I.useImperativeHandle = function (c, v, O) {
			return me.current.useImperativeHandle(c, v, O);
		}),
		(I.useInsertionEffect = function (c, v) {
			return me.current.useInsertionEffect(c, v);
		}),
		(I.useLayoutEffect = function (c, v) {
			return me.current.useLayoutEffect(c, v);
		}),
		(I.useMemo = function (c, v) {
			return me.current.useMemo(c, v);
		}),
		(I.useReducer = function (c, v, O) {
			return me.current.useReducer(c, v, O);
		}),
		(I.useRef = function (c) {
			return me.current.useRef(c);
		}),
		(I.useState = function (c) {
			return me.current.useState(c);
		}),
		(I.useSyncExternalStore = function (c, v, O) {
			return me.current.useSyncExternalStore(c, v, O);
		}),
		(I.useTransition = function () {
			return me.current.useTransition();
		}),
		(I.version = "18.3.1"),
		I
	);
}
var Na;
function Ti() {
	return Na || ((Na = 1), (Ni.exports = jf())), Ni.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Of() {
	if (za) return wr;
	za = 1;
	var E = Ti(),
		R = Symbol.for("react.element"),
		m = Symbol.for("react.fragment"),
		ne = Object.prototype.hasOwnProperty,
		j = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
		H = { key: !0, ref: !0, __self: !0, __source: !0 };
	function X(oe, A, se) {
		var ae,
			te = {},
			J = null,
			Oe = null;
		se !== void 0 && (J = "" + se),
			A.key !== void 0 && (J = "" + A.key),
			A.ref !== void 0 && (Oe = A.ref);
		for (ae in A) ne.call(A, ae) && !H.hasOwnProperty(ae) && (te[ae] = A[ae]);
		if (oe && oe.defaultProps)
			for (ae in ((A = oe.defaultProps), A))
				te[ae] === void 0 && (te[ae] = A[ae]);
		return {
			$$typeof: R,
			type: oe,
			key: J,
			ref: Oe,
			props: te,
			_owner: j.current,
		};
	}
	return (wr.Fragment = m), (wr.jsx = X), (wr.jsxs = X), wr;
}
var Fa;
function If() {
	return Fa || ((Fa = 1), (Pi.exports = Of())), Pi.exports;
}
var L = If(),
	zn = Ti(),
	Ll = {},
	zi = { exports: {} },
	$e = {},
	Fi = { exports: {} },
	Li = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function Uf() {
	return (
		La ||
			((La = 1),
			(function (E) {
				function R(k, T) {
					var C = k.length;
					k.push(T);
					e: for (; 0 < C; ) {
						var c = (C - 1) >>> 1,
							v = k[c];
						if (0 < j(v, T)) (k[c] = T), (k[C] = v), (C = c);
						else break e;
					}
				}
				function m(k) {
					return k.length === 0 ? null : k[0];
				}
				function ne(k) {
					if (k.length === 0) return null;
					var T = k[0],
						C = k.pop();
					if (C !== T) {
						k[0] = C;
						e: for (var c = 0, v = k.length, O = v >>> 1; c < O; ) {
							var U = 2 * (c + 1) - 1,
								$ = k[U],
								W = U + 1,
								b = k[W];
							if (0 > j($, C))
								W < v && 0 > j(b, $)
									? ((k[c] = b), (k[W] = C), (c = W))
									: ((k[c] = $), (k[U] = C), (c = U));
							else if (W < v && 0 > j(b, C)) (k[c] = b), (k[W] = C), (c = W);
							else break e;
						}
					}
					return T;
				}
				function j(k, T) {
					var C = k.sortIndex - T.sortIndex;
					return C !== 0 ? C : k.id - T.id;
				}
				if (
					typeof performance == "object" &&
					typeof performance.now == "function"
				) {
					var H = performance;
					E.unstable_now = function () {
						return H.now();
					};
				} else {
					var X = Date,
						oe = X.now();
					E.unstable_now = function () {
						return X.now() - oe;
					};
				}
				var A = [],
					se = [],
					ae = 1,
					te = null,
					J = 3,
					Oe = !1,
					ze = !1,
					Z = !1,
					K = typeof setTimeout == "function" ? setTimeout : null,
					D = typeof clearTimeout == "function" ? clearTimeout : null,
					ce = typeof setImmediate < "u" ? setImmediate : null;
				typeof navigator < "u" &&
					navigator.scheduling !== void 0 &&
					navigator.scheduling.isInputPending !== void 0 &&
					navigator.scheduling.isInputPending.bind(navigator.scheduling);
				function V(k) {
					for (var T = m(se); T !== null; ) {
						if (T.callback === null) ne(se);
						else if (T.startTime <= k)
							ne(se), (T.sortIndex = T.expirationTime), R(A, T);
						else break;
						T = m(se);
					}
				}
				function q(k) {
					if (((Z = !1), V(k), !ze))
						if (m(A) !== null) (ze = !0), Ie(we);
						else {
							var T = m(se);
							T !== null && me(q, T.startTime - k);
						}
				}
				function we(k, T) {
					(ze = !1), Z && ((Z = !1), D(Me), (Me = -1)), (Oe = !0);
					var C = J;
					try {
						for (
							V(T), te = m(A);
							te !== null && (!(te.expirationTime > T) || (k && !Yn()));

						) {
							var c = te.callback;
							if (typeof c == "function") {
								(te.callback = null), (J = te.priorityLevel);
								var v = c(te.expirationTime <= T);
								(T = E.unstable_now()),
									typeof v == "function"
										? (te.callback = v)
										: te === m(A) && ne(A),
									V(T);
							} else ne(A);
							te = m(A);
						}
						if (te !== null) var O = !0;
						else {
							var U = m(se);
							U !== null && me(q, U.startTime - T), (O = !1);
						}
						return O;
					} finally {
						(te = null), (J = C), (Oe = !1);
					}
				}
				var fe = !1,
					ke = null,
					Me = -1,
					fn = 5,
					wn = -1;
				function Yn() {
					return !(E.unstable_now() - wn < fn);
				}
				function dn() {
					if (ke !== null) {
						var k = E.unstable_now();
						wn = k;
						var T = !0;
						try {
							T = ke(!0, k);
						} finally {
							T ? We() : ((fe = !1), (ke = null));
						}
					} else fe = !1;
				}
				var We;
				if (typeof ce == "function")
					We = function () {
						ce(dn);
					};
				else if (typeof MessageChannel < "u") {
					var tn = new MessageChannel(),
						pn = tn.port2;
					(tn.port1.onmessage = dn),
						(We = function () {
							pn.postMessage(null);
						});
				} else
					We = function () {
						K(dn, 0);
					};
				function Ie(k) {
					(ke = k), fe || ((fe = !0), We());
				}
				function me(k, T) {
					Me = K(function () {
						k(E.unstable_now());
					}, T);
				}
				(E.unstable_IdlePriority = 5),
					(E.unstable_ImmediatePriority = 1),
					(E.unstable_LowPriority = 4),
					(E.unstable_NormalPriority = 3),
					(E.unstable_Profiling = null),
					(E.unstable_UserBlockingPriority = 2),
					(E.unstable_cancelCallback = function (k) {
						k.callback = null;
					}),
					(E.unstable_continueExecution = function () {
						ze || Oe || ((ze = !0), Ie(we));
					}),
					(E.unstable_forceFrameRate = function (k) {
						0 > k || 125 < k
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
							  )
							: (fn = 0 < k ? Math.floor(1e3 / k) : 5);
					}),
					(E.unstable_getCurrentPriorityLevel = function () {
						return J;
					}),
					(E.unstable_getFirstCallbackNode = function () {
						return m(A);
					}),
					(E.unstable_next = function (k) {
						switch (J) {
							case 1:
							case 2:
							case 3:
								var T = 3;
								break;
							default:
								T = J;
						}
						var C = J;
						J = T;
						try {
							return k();
						} finally {
							J = C;
						}
					}),
					(E.unstable_pauseExecution = function () {}),
					(E.unstable_requestPaint = function () {}),
					(E.unstable_runWithPriority = function (k, T) {
						switch (k) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								k = 3;
						}
						var C = J;
						J = k;
						try {
							return T();
						} finally {
							J = C;
						}
					}),
					(E.unstable_scheduleCallback = function (k, T, C) {
						var c = E.unstable_now();
						switch (
							(typeof C == "object" && C !== null
								? ((C = C.delay),
								  (C = typeof C == "number" && 0 < C ? c + C : c))
								: (C = c),
							k)
						) {
							case 1:
								var v = -1;
								break;
							case 2:
								v = 250;
								break;
							case 5:
								v = 1073741823;
								break;
							case 4:
								v = 1e4;
								break;
							default:
								v = 5e3;
						}
						return (
							(v = C + v),
							(k = {
								id: ae++,
								callback: T,
								priorityLevel: k,
								startTime: C,
								expirationTime: v,
								sortIndex: -1,
							}),
							C > c
								? ((k.sortIndex = C),
								  R(se, k),
								  m(A) === null &&
										k === m(se) &&
										(Z ? (D(Me), (Me = -1)) : (Z = !0), me(q, C - c)))
								: ((k.sortIndex = v), R(A, k), ze || Oe || ((ze = !0), Ie(we))),
							k
						);
					}),
					(E.unstable_shouldYield = Yn),
					(E.unstable_wrapCallback = function (k) {
						var T = J;
						return function () {
							var C = J;
							J = T;
							try {
								return k.apply(this, arguments);
							} finally {
								J = C;
							}
						};
					});
			})(Li)),
		Li
	);
}
var Ta;
function Af() {
	return Ta || ((Ta = 1), (Fi.exports = Uf())), Fi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ra;
function Vf() {
	if (Ra) return $e;
	Ra = 1;
	var E = Ti(),
		R = Af();
	function m(e) {
		for (
			var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
				t = 1;
			t < arguments.length;
			t++
		)
			n += "&args[]=" + encodeURIComponent(arguments[t]);
		return (
			"Minified React error #" +
			e +
			"; visit " +
			n +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	var ne = new Set(),
		j = {};
	function H(e, n) {
		X(e, n), X(e + "Capture", n);
	}
	function X(e, n) {
		for (j[e] = n, e = 0; e < n.length; e++) ne.add(n[e]);
	}
	var oe = !(
			typeof window > "u" ||
			typeof window.document > "u" ||
			typeof window.document.createElement > "u"
		),
		A = Object.prototype.hasOwnProperty,
		se =
			/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
		ae = {},
		te = {};
	function J(e) {
		return A.call(te, e)
			? !0
			: A.call(ae, e)
			? !1
			: se.test(e)
			? (te[e] = !0)
			: ((ae[e] = !0), !1);
	}
	function Oe(e, n, t, r) {
		if (t !== null && t.type === 0) return !1;
		switch (typeof n) {
			case "function":
			case "symbol":
				return !0;
			case "boolean":
				return r
					? !1
					: t !== null
					? !t.acceptsBooleans
					: ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
			default:
				return !1;
		}
	}
	function ze(e, n, t, r) {
		if (n === null || typeof n > "u" || Oe(e, n, t, r)) return !0;
		if (r) return !1;
		if (t !== null)
			switch (t.type) {
				case 3:
					return !n;
				case 4:
					return n === !1;
				case 5:
					return isNaN(n);
				case 6:
					return isNaN(n) || 1 > n;
			}
		return !1;
	}
	function Z(e, n, t, r, l, o, i) {
		(this.acceptsBooleans = n === 2 || n === 3 || n === 4),
			(this.attributeName = r),
			(this.attributeNamespace = l),
			(this.mustUseProperty = t),
			(this.propertyName = e),
			(this.type = n),
			(this.sanitizeURL = o),
			(this.removeEmptyString = i);
	}
	var K = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
		.split(" ")
		.forEach(function (e) {
			K[e] = new Z(e, 0, !1, e, null, !1, !1);
		}),
		[
			["acceptCharset", "accept-charset"],
			["className", "class"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
		].forEach(function (e) {
			var n = e[0];
			K[n] = new Z(n, 1, !1, e[1], null, !1, !1);
		}),
		["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
			e
		) {
			K[e] = new Z(e, 2, !1, e.toLowerCase(), null, !1, !1);
		}),
		[
			"autoReverse",
			"externalResourcesRequired",
			"focusable",
			"preserveAlpha",
		].forEach(function (e) {
			K[e] = new Z(e, 2, !1, e, null, !1, !1);
		}),
		"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
			.split(" ")
			.forEach(function (e) {
				K[e] = new Z(e, 3, !1, e.toLowerCase(), null, !1, !1);
			}),
		["checked", "multiple", "muted", "selected"].forEach(function (e) {
			K[e] = new Z(e, 3, !0, e, null, !1, !1);
		}),
		["capture", "download"].forEach(function (e) {
			K[e] = new Z(e, 4, !1, e, null, !1, !1);
		}),
		["cols", "rows", "size", "span"].forEach(function (e) {
			K[e] = new Z(e, 6, !1, e, null, !1, !1);
		}),
		["rowSpan", "start"].forEach(function (e) {
			K[e] = new Z(e, 5, !1, e.toLowerCase(), null, !1, !1);
		});
	var D = /[\-:]([a-z])/g;
	function ce(e) {
		return e[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
		.split(" ")
		.forEach(function (e) {
			var n = e.replace(D, ce);
			K[n] = new Z(n, 1, !1, e, null, !1, !1);
		}),
		"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
			.split(" ")
			.forEach(function (e) {
				var n = e.replace(D, ce);
				K[n] = new Z(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
			}),
		["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
			var n = e.replace(D, ce);
			K[n] = new Z(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
		}),
		["tabIndex", "crossOrigin"].forEach(function (e) {
			K[e] = new Z(e, 1, !1, e.toLowerCase(), null, !1, !1);
		}),
		(K.xlinkHref = new Z(
			"xlinkHref",
			1,
			!1,
			"xlink:href",
			"http://www.w3.org/1999/xlink",
			!0,
			!1
		)),
		["src", "href", "action", "formAction"].forEach(function (e) {
			K[e] = new Z(e, 1, !1, e.toLowerCase(), null, !0, !0);
		});
	function V(e, n, t, r) {
		var l = K.hasOwnProperty(n) ? K[n] : null;
		(l !== null
			? l.type !== 0
			: r ||
			  !(2 < n.length) ||
			  (n[0] !== "o" && n[0] !== "O") ||
			  (n[1] !== "n" && n[1] !== "N")) &&
			(ze(n, t, l, r) && (t = null),
			r || l === null
				? J(n) &&
				  (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
				: l.mustUseProperty
				? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
				: ((n = l.attributeName),
				  (r = l.attributeNamespace),
				  t === null
						? e.removeAttribute(n)
						: ((l = l.type),
						  (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
						  r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
	}
	var q = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
		we = Symbol.for("react.element"),
		fe = Symbol.for("react.portal"),
		ke = Symbol.for("react.fragment"),
		Me = Symbol.for("react.strict_mode"),
		fn = Symbol.for("react.profiler"),
		wn = Symbol.for("react.provider"),
		Yn = Symbol.for("react.context"),
		dn = Symbol.for("react.forward_ref"),
		We = Symbol.for("react.suspense"),
		tn = Symbol.for("react.suspense_list"),
		pn = Symbol.for("react.memo"),
		Ie = Symbol.for("react.lazy"),
		me = Symbol.for("react.offscreen"),
		k = Symbol.iterator;
	function T(e) {
		return e === null || typeof e != "object"
			? null
			: ((e = (k && e[k]) || e["@@iterator"]),
			  typeof e == "function" ? e : null);
	}
	var C = Object.assign,
		c;
	function v(e) {
		if (c === void 0)
			try {
				throw Error();
			} catch (t) {
				var n = t.stack.trim().match(/\n( *(at )?)/);
				c = (n && n[1]) || "";
			}
		return (
			`
` +
			c +
			e
		);
	}
	var O = !1;
	function U(e, n) {
		if (!e || O) return "";
		O = !0;
		var t = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (n)
				if (
					((n = function () {
						throw Error();
					}),
					Object.defineProperty(n.prototype, "props", {
						set: function () {
							throw Error();
						},
					}),
					typeof Reflect == "object" && Reflect.construct)
				) {
					try {
						Reflect.construct(n, []);
					} catch (p) {
						var r = p;
					}
					Reflect.construct(e, [], n);
				} else {
					try {
						n.call();
					} catch (p) {
						r = p;
					}
					e.call(n.prototype);
				}
			else {
				try {
					throw Error();
				} catch (p) {
					r = p;
				}
				e();
			}
		} catch (p) {
			if (p && r && typeof p.stack == "string") {
				for (
					var l = p.stack.split(`
`),
						o = r.stack.split(`
`),
						i = l.length - 1,
						u = o.length - 1;
					1 <= i && 0 <= u && l[i] !== o[u];

				)
					u--;
				for (; 1 <= i && 0 <= u; i--, u--)
					if (l[i] !== o[u]) {
						if (i !== 1 || u !== 1)
							do
								if ((i--, u--, 0 > u || l[i] !== o[u])) {
									var s =
										`
` + l[i].replace(" at new ", " at ");
									return (
										e.displayName &&
											s.includes("<anonymous>") &&
											(s = s.replace("<anonymous>", e.displayName)),
										s
									);
								}
							while (1 <= i && 0 <= u);
						break;
					}
			}
		} finally {
			(O = !1), (Error.prepareStackTrace = t);
		}
		return (e = e ? e.displayName || e.name : "") ? v(e) : "";
	}
	function $(e) {
		switch (e.tag) {
			case 5:
				return v(e.type);
			case 16:
				return v("Lazy");
			case 13:
				return v("Suspense");
			case 19:
				return v("SuspenseList");
			case 0:
			case 2:
			case 15:
				return (e = U(e.type, !1)), e;
			case 11:
				return (e = U(e.type.render, !1)), e;
			case 1:
				return (e = U(e.type, !0)), e;
			default:
				return "";
		}
	}
	function W(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case ke:
				return "Fragment";
			case fe:
				return "Portal";
			case fn:
				return "Profiler";
			case Me:
				return "StrictMode";
			case We:
				return "Suspense";
			case tn:
				return "SuspenseList";
		}
		if (typeof e == "object")
			switch (e.$$typeof) {
				case Yn:
					return (e.displayName || "Context") + ".Consumer";
				case wn:
					return (e._context.displayName || "Context") + ".Provider";
				case dn:
					var n = e.render;
					return (
						(e = e.displayName),
						e ||
							((e = n.displayName || n.name || ""),
							(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
						e
					);
				case pn:
					return (
						(n = e.displayName || null), n !== null ? n : W(e.type) || "Memo"
					);
				case Ie:
					(n = e._payload), (e = e._init);
					try {
						return W(e(n));
					} catch {}
			}
		return null;
	}
	function b(e) {
		var n = e.type;
		switch (e.tag) {
			case 24:
				return "Cache";
			case 9:
				return (n.displayName || "Context") + ".Consumer";
			case 10:
				return (n._context.displayName || "Context") + ".Provider";
			case 18:
				return "DehydratedFragment";
			case 11:
				return (
					(e = n.render),
					(e = e.displayName || e.name || ""),
					n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
				);
			case 7:
				return "Fragment";
			case 5:
				return n;
			case 4:
				return "Portal";
			case 3:
				return "Root";
			case 6:
				return "Text";
			case 16:
				return W(n);
			case 8:
				return n === Me ? "StrictMode" : "Mode";
			case 22:
				return "Offscreen";
			case 12:
				return "Profiler";
			case 21:
				return "Scope";
			case 13:
				return "Suspense";
			case 19:
				return "SuspenseList";
			case 25:
				return "TracingMarker";
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if (typeof n == "function") return n.displayName || n.name || null;
				if (typeof n == "string") return n;
		}
		return null;
	}
	function G(e) {
		switch (typeof e) {
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return e;
			case "object":
				return e;
			default:
				return "";
		}
	}
	function ie(e) {
		var n = e.type;
		return (
			(e = e.nodeName) &&
			e.toLowerCase() === "input" &&
			(n === "checkbox" || n === "radio")
		);
	}
	function Qe(e) {
		var n = ie(e) ? "checked" : "value",
			t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
			r = "" + e[n];
		if (
			!e.hasOwnProperty(n) &&
			typeof t < "u" &&
			typeof t.get == "function" &&
			typeof t.set == "function"
		) {
			var l = t.get,
				o = t.set;
			return (
				Object.defineProperty(e, n, {
					configurable: !0,
					get: function () {
						return l.call(this);
					},
					set: function (i) {
						(r = "" + i), o.call(this, i);
					},
				}),
				Object.defineProperty(e, n, { enumerable: t.enumerable }),
				{
					getValue: function () {
						return r;
					},
					setValue: function (i) {
						r = "" + i;
					},
					stopTracking: function () {
						(e._valueTracker = null), delete e[n];
					},
				}
			);
		}
	}
	function kr(e) {
		e._valueTracker || (e._valueTracker = Qe(e));
	}
	function Ri(e) {
		if (!e) return !1;
		var n = e._valueTracker;
		if (!n) return !0;
		var t = n.getValue(),
			r = "";
		return (
			e && (r = ie(e) ? (e.checked ? "true" : "false") : e.value),
			(e = r),
			e !== t ? (n.setValue(e), !0) : !1
		);
	}
	function Sr(e) {
		if (
			((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
		)
			return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function Rl(e, n) {
		var t = n.checked;
		return C({}, n, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: t ?? e._wrapperState.initialChecked,
		});
	}
	function Mi(e, n) {
		var t = n.defaultValue == null ? "" : n.defaultValue,
			r = n.checked != null ? n.checked : n.defaultChecked;
		(t = G(n.value != null ? n.value : t)),
			(e._wrapperState = {
				initialChecked: r,
				initialValue: t,
				controlled:
					n.type === "checkbox" || n.type === "radio"
						? n.checked != null
						: n.value != null,
			});
	}
	function Di(e, n) {
		(n = n.checked), n != null && V(e, "checked", n, !1);
	}
	function Ml(e, n) {
		Di(e, n);
		var t = G(n.value),
			r = n.type;
		if (t != null)
			r === "number"
				? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
				: e.value !== "" + t && (e.value = "" + t);
		else if (r === "submit" || r === "reset") {
			e.removeAttribute("value");
			return;
		}
		n.hasOwnProperty("value")
			? Dl(e, n.type, t)
			: n.hasOwnProperty("defaultValue") && Dl(e, n.type, G(n.defaultValue)),
			n.checked == null &&
				n.defaultChecked != null &&
				(e.defaultChecked = !!n.defaultChecked);
	}
	function ji(e, n, t) {
		if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
			var r = n.type;
			if (
				!(
					(r !== "submit" && r !== "reset") ||
					(n.value !== void 0 && n.value !== null)
				)
			)
				return;
			(n = "" + e._wrapperState.initialValue),
				t || n === e.value || (e.value = n),
				(e.defaultValue = n);
		}
		(t = e.name),
			t !== "" && (e.name = ""),
			(e.defaultChecked = !!e._wrapperState.initialChecked),
			t !== "" && (e.name = t);
	}
	function Dl(e, n, t) {
		(n !== "number" || Sr(e.ownerDocument) !== e) &&
			(t == null
				? (e.defaultValue = "" + e._wrapperState.initialValue)
				: e.defaultValue !== "" + t && (e.defaultValue = "" + t));
	}
	var Dt = Array.isArray;
	function st(e, n, t, r) {
		if (((e = e.options), n)) {
			n = {};
			for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
			for (t = 0; t < e.length; t++)
				(l = n.hasOwnProperty("$" + e[t].value)),
					e[t].selected !== l && (e[t].selected = l),
					l && r && (e[t].defaultSelected = !0);
		} else {
			for (t = "" + G(t), n = null, l = 0; l < e.length; l++) {
				if (e[l].value === t) {
					(e[l].selected = !0), r && (e[l].defaultSelected = !0);
					return;
				}
				n !== null || e[l].disabled || (n = e[l]);
			}
			n !== null && (n.selected = !0);
		}
	}
	function jl(e, n) {
		if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
		return C({}, n, {
			value: void 0,
			defaultValue: void 0,
			children: "" + e._wrapperState.initialValue,
		});
	}
	function Oi(e, n) {
		var t = n.value;
		if (t == null) {
			if (((t = n.children), (n = n.defaultValue), t != null)) {
				if (n != null) throw Error(m(92));
				if (Dt(t)) {
					if (1 < t.length) throw Error(m(93));
					t = t[0];
				}
				n = t;
			}
			n == null && (n = ""), (t = n);
		}
		e._wrapperState = { initialValue: G(t) };
	}
	function Ii(e, n) {
		var t = G(n.value),
			r = G(n.defaultValue);
		t != null &&
			((t = "" + t),
			t !== e.value && (e.value = t),
			n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
			r != null && (e.defaultValue = "" + r);
	}
	function Ui(e) {
		var n = e.textContent;
		n === e._wrapperState.initialValue &&
			n !== "" &&
			n !== null &&
			(e.value = n);
	}
	function Ai(e) {
		switch (e) {
			case "svg":
				return "http://www.w3.org/2000/svg";
			case "math":
				return "http://www.w3.org/1998/Math/MathML";
			default:
				return "http://www.w3.org/1999/xhtml";
		}
	}
	function Ol(e, n) {
		return e == null || e === "http://www.w3.org/1999/xhtml"
			? Ai(n)
			: e === "http://www.w3.org/2000/svg" && n === "foreignObject"
			? "http://www.w3.org/1999/xhtml"
			: e;
	}
	var Er,
		Vi = (function (e) {
			return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
				? function (n, t, r, l) {
						MSApp.execUnsafeLocalFunction(function () {
							return e(n, t, r, l);
						});
				  }
				: e;
		})(function (e, n) {
			if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
				e.innerHTML = n;
			else {
				for (
					Er = Er || document.createElement("div"),
						Er.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
						n = Er.firstChild;
					e.firstChild;

				)
					e.removeChild(e.firstChild);
				for (; n.firstChild; ) e.appendChild(n.firstChild);
			}
		});
	function jt(e, n) {
		if (n) {
			var t = e.firstChild;
			if (t && t === e.lastChild && t.nodeType === 3) {
				t.nodeValue = n;
				return;
			}
		}
		e.textContent = n;
	}
	var Ot = {
			animationIterationCount: !0,
			aspectRatio: !0,
			borderImageOutset: !0,
			borderImageSlice: !0,
			borderImageWidth: !0,
			boxFlex: !0,
			boxFlexGroup: !0,
			boxOrdinalGroup: !0,
			columnCount: !0,
			columns: !0,
			flex: !0,
			flexGrow: !0,
			flexPositive: !0,
			flexShrink: !0,
			flexNegative: !0,
			flexOrder: !0,
			gridArea: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowSpan: !0,
			gridRowStart: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnSpan: !0,
			gridColumnStart: !0,
			fontWeight: !0,
			lineClamp: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			tabSize: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
			fillOpacity: !0,
			floodOpacity: !0,
			stopOpacity: !0,
			strokeDasharray: !0,
			strokeDashoffset: !0,
			strokeMiterlimit: !0,
			strokeOpacity: !0,
			strokeWidth: !0,
		},
		Ia = ["Webkit", "ms", "Moz", "O"];
	Object.keys(Ot).forEach(function (e) {
		Ia.forEach(function (n) {
			(n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Ot[n] = Ot[e]);
		});
	});
	function Bi(e, n, t) {
		return n == null || typeof n == "boolean" || n === ""
			? ""
			: t || typeof n != "number" || n === 0 || (Ot.hasOwnProperty(e) && Ot[e])
			? ("" + n).trim()
			: n + "px";
	}
	function Hi(e, n) {
		e = e.style;
		for (var t in n)
			if (n.hasOwnProperty(t)) {
				var r = t.indexOf("--") === 0,
					l = Bi(t, n[t], r);
				t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
			}
	}
	var Ua = C(
		{ menuitem: !0 },
		{
			area: !0,
			base: !0,
			br: !0,
			col: !0,
			embed: !0,
			hr: !0,
			img: !0,
			input: !0,
			keygen: !0,
			link: !0,
			meta: !0,
			param: !0,
			source: !0,
			track: !0,
			wbr: !0,
		}
	);
	function Il(e, n) {
		if (n) {
			if (Ua[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
				throw Error(m(137, e));
			if (n.dangerouslySetInnerHTML != null) {
				if (n.children != null) throw Error(m(60));
				if (
					typeof n.dangerouslySetInnerHTML != "object" ||
					!("__html" in n.dangerouslySetInnerHTML)
				)
					throw Error(m(61));
			}
			if (n.style != null && typeof n.style != "object") throw Error(m(62));
		}
	}
	function Ul(e, n) {
		if (e.indexOf("-") === -1) return typeof n.is == "string";
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0;
		}
	}
	var Al = null;
	function Vl(e) {
		return (
			(e = e.target || e.srcElement || window),
			e.correspondingUseElement && (e = e.correspondingUseElement),
			e.nodeType === 3 ? e.parentNode : e
		);
	}
	var Bl = null,
		at = null,
		ct = null;
	function $i(e) {
		if ((e = lr(e))) {
			if (typeof Bl != "function") throw Error(m(280));
			var n = e.stateNode;
			n && ((n = Qr(n)), Bl(e.stateNode, e.type, n));
		}
	}
	function Wi(e) {
		at ? (ct ? ct.push(e) : (ct = [e])) : (at = e);
	}
	function Qi() {
		if (at) {
			var e = at,
				n = ct;
			if (((ct = at = null), $i(e), n)) for (e = 0; e < n.length; e++) $i(n[e]);
		}
	}
	function Ki(e, n) {
		return e(n);
	}
	function Gi() {}
	var Hl = !1;
	function Yi(e, n, t) {
		if (Hl) return e(n, t);
		Hl = !0;
		try {
			return Ki(e, n, t);
		} finally {
			(Hl = !1), (at !== null || ct !== null) && (Gi(), Qi());
		}
	}
	function It(e, n) {
		var t = e.stateNode;
		if (t === null) return null;
		var r = Qr(t);
		if (r === null) return null;
		t = r[n];
		e: switch (n) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) ||
					((e = e.type),
					(r = !(
						e === "button" ||
						e === "input" ||
						e === "select" ||
						e === "textarea"
					))),
					(e = !r);
				break e;
			default:
				e = !1;
		}
		if (e) return null;
		if (t && typeof t != "function") throw Error(m(231, n, typeof t));
		return t;
	}
	var $l = !1;
	if (oe)
		try {
			var Ut = {};
			Object.defineProperty(Ut, "passive", {
				get: function () {
					$l = !0;
				},
			}),
				window.addEventListener("test", Ut, Ut),
				window.removeEventListener("test", Ut, Ut);
		} catch {
			$l = !1;
		}
	function Aa(e, n, t, r, l, o, i, u, s) {
		var p = Array.prototype.slice.call(arguments, 3);
		try {
			n.apply(t, p);
		} catch (y) {
			this.onError(y);
		}
	}
	var At = !1,
		xr = null,
		Cr = !1,
		Wl = null,
		Va = {
			onError: function (e) {
				(At = !0), (xr = e);
			},
		};
	function Ba(e, n, t, r, l, o, i, u, s) {
		(At = !1), (xr = null), Aa.apply(Va, arguments);
	}
	function Ha(e, n, t, r, l, o, i, u, s) {
		if ((Ba.apply(this, arguments), At)) {
			if (At) {
				var p = xr;
				(At = !1), (xr = null);
			} else throw Error(m(198));
			Cr || ((Cr = !0), (Wl = p));
		}
	}
	function Xn(e) {
		var n = e,
			t = e;
		if (e.alternate) for (; n.return; ) n = n.return;
		else {
			e = n;
			do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
			while (e);
		}
		return n.tag === 3 ? t : null;
	}
	function Xi(e) {
		if (e.tag === 13) {
			var n = e.memoizedState;
			if (
				(n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
				n !== null)
			)
				return n.dehydrated;
		}
		return null;
	}
	function Ji(e) {
		if (Xn(e) !== e) throw Error(m(188));
	}
	function $a(e) {
		var n = e.alternate;
		if (!n) {
			if (((n = Xn(e)), n === null)) throw Error(m(188));
			return n !== e ? null : e;
		}
		for (var t = e, r = n; ; ) {
			var l = t.return;
			if (l === null) break;
			var o = l.alternate;
			if (o === null) {
				if (((r = l.return), r !== null)) {
					t = r;
					continue;
				}
				break;
			}
			if (l.child === o.child) {
				for (o = l.child; o; ) {
					if (o === t) return Ji(l), e;
					if (o === r) return Ji(l), n;
					o = o.sibling;
				}
				throw Error(m(188));
			}
			if (t.return !== r.return) (t = l), (r = o);
			else {
				for (var i = !1, u = l.child; u; ) {
					if (u === t) {
						(i = !0), (t = l), (r = o);
						break;
					}
					if (u === r) {
						(i = !0), (r = l), (t = o);
						break;
					}
					u = u.sibling;
				}
				if (!i) {
					for (u = o.child; u; ) {
						if (u === t) {
							(i = !0), (t = o), (r = l);
							break;
						}
						if (u === r) {
							(i = !0), (r = o), (t = l);
							break;
						}
						u = u.sibling;
					}
					if (!i) throw Error(m(189));
				}
			}
			if (t.alternate !== r) throw Error(m(190));
		}
		if (t.tag !== 3) throw Error(m(188));
		return t.stateNode.current === t ? e : n;
	}
	function Zi(e) {
		return (e = $a(e)), e !== null ? qi(e) : null;
	}
	function qi(e) {
		if (e.tag === 5 || e.tag === 6) return e;
		for (e = e.child; e !== null; ) {
			var n = qi(e);
			if (n !== null) return n;
			e = e.sibling;
		}
		return null;
	}
	var bi = R.unstable_scheduleCallback,
		eu = R.unstable_cancelCallback,
		Wa = R.unstable_shouldYield,
		Qa = R.unstable_requestPaint,
		ve = R.unstable_now,
		Ka = R.unstable_getCurrentPriorityLevel,
		Ql = R.unstable_ImmediatePriority,
		nu = R.unstable_UserBlockingPriority,
		_r = R.unstable_NormalPriority,
		Ga = R.unstable_LowPriority,
		tu = R.unstable_IdlePriority,
		Pr = null,
		mn = null;
	function Ya(e) {
		if (mn && typeof mn.onCommitFiberRoot == "function")
			try {
				mn.onCommitFiberRoot(Pr, e, void 0, (e.current.flags & 128) === 128);
			} catch {}
	}
	var rn = Math.clz32 ? Math.clz32 : Za,
		Xa = Math.log,
		Ja = Math.LN2;
	function Za(e) {
		return (e >>>= 0), e === 0 ? 32 : (31 - ((Xa(e) / Ja) | 0)) | 0;
	}
	var Nr = 64,
		zr = 4194304;
	function Vt(e) {
		switch (e & -e) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return e & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864:
				return e & 130023424;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 1073741824;
			default:
				return e;
		}
	}
	function Fr(e, n) {
		var t = e.pendingLanes;
		if (t === 0) return 0;
		var r = 0,
			l = e.suspendedLanes,
			o = e.pingedLanes,
			i = t & 268435455;
		if (i !== 0) {
			var u = i & ~l;
			u !== 0 ? (r = Vt(u)) : ((o &= i), o !== 0 && (r = Vt(o)));
		} else (i = t & ~l), i !== 0 ? (r = Vt(i)) : o !== 0 && (r = Vt(o));
		if (r === 0) return 0;
		if (
			n !== 0 &&
			n !== r &&
			!(n & l) &&
			((l = r & -r), (o = n & -n), l >= o || (l === 16 && (o & 4194240) !== 0))
		)
			return n;
		if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
			for (e = e.entanglements, n &= r; 0 < n; )
				(t = 31 - rn(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
		return r;
	}
	function qa(e, n) {
		switch (e) {
			case 1:
			case 2:
			case 4:
				return n + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return n + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864:
				return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function ba(e, n) {
		for (
			var t = e.suspendedLanes,
				r = e.pingedLanes,
				l = e.expirationTimes,
				o = e.pendingLanes;
			0 < o;

		) {
			var i = 31 - rn(o),
				u = 1 << i,
				s = l[i];
			s === -1
				? (!(u & t) || u & r) && (l[i] = qa(u, n))
				: s <= n && (e.expiredLanes |= u),
				(o &= ~u);
		}
	}
	function Kl(e) {
		return (
			(e = e.pendingLanes & -1073741825),
			e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
		);
	}
	function ru() {
		var e = Nr;
		return (Nr <<= 1), !(Nr & 4194240) && (Nr = 64), e;
	}
	function Gl(e) {
		for (var n = [], t = 0; 31 > t; t++) n.push(e);
		return n;
	}
	function Bt(e, n, t) {
		(e.pendingLanes |= n),
			n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
			(e = e.eventTimes),
			(n = 31 - rn(n)),
			(e[n] = t);
	}
	function ec(e, n) {
		var t = e.pendingLanes & ~n;
		(e.pendingLanes = n),
			(e.suspendedLanes = 0),
			(e.pingedLanes = 0),
			(e.expiredLanes &= n),
			(e.mutableReadLanes &= n),
			(e.entangledLanes &= n),
			(n = e.entanglements);
		var r = e.eventTimes;
		for (e = e.expirationTimes; 0 < t; ) {
			var l = 31 - rn(t),
				o = 1 << l;
			(n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~o);
		}
	}
	function Yl(e, n) {
		var t = (e.entangledLanes |= n);
		for (e = e.entanglements; t; ) {
			var r = 31 - rn(t),
				l = 1 << r;
			(l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
		}
	}
	var Y = 0;
	function lu(e) {
		return (
			(e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
		);
	}
	var ou,
		Xl,
		iu,
		uu,
		su,
		Jl = !1,
		Lr = [],
		Fn = null,
		Ln = null,
		Tn = null,
		Ht = new Map(),
		$t = new Map(),
		Rn = [],
		nc =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
				" "
			);
	function au(e, n) {
		switch (e) {
			case "focusin":
			case "focusout":
				Fn = null;
				break;
			case "dragenter":
			case "dragleave":
				Ln = null;
				break;
			case "mouseover":
			case "mouseout":
				Tn = null;
				break;
			case "pointerover":
			case "pointerout":
				Ht.delete(n.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				$t.delete(n.pointerId);
		}
	}
	function Wt(e, n, t, r, l, o) {
		return e === null || e.nativeEvent !== o
			? ((e = {
					blockedOn: n,
					domEventName: t,
					eventSystemFlags: r,
					nativeEvent: o,
					targetContainers: [l],
			  }),
			  n !== null && ((n = lr(n)), n !== null && Xl(n)),
			  e)
			: ((e.eventSystemFlags |= r),
			  (n = e.targetContainers),
			  l !== null && n.indexOf(l) === -1 && n.push(l),
			  e);
	}
	function tc(e, n, t, r, l) {
		switch (n) {
			case "focusin":
				return (Fn = Wt(Fn, e, n, t, r, l)), !0;
			case "dragenter":
				return (Ln = Wt(Ln, e, n, t, r, l)), !0;
			case "mouseover":
				return (Tn = Wt(Tn, e, n, t, r, l)), !0;
			case "pointerover":
				var o = l.pointerId;
				return Ht.set(o, Wt(Ht.get(o) || null, e, n, t, r, l)), !0;
			case "gotpointercapture":
				return (
					(o = l.pointerId), $t.set(o, Wt($t.get(o) || null, e, n, t, r, l)), !0
				);
		}
		return !1;
	}
	function cu(e) {
		var n = Jn(e.target);
		if (n !== null) {
			var t = Xn(n);
			if (t !== null) {
				if (((n = t.tag), n === 13)) {
					if (((n = Xi(t)), n !== null)) {
						(e.blockedOn = n),
							su(e.priority, function () {
								iu(t);
							});
						return;
					}
				} else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Tr(e) {
		if (e.blockedOn !== null) return !1;
		for (var n = e.targetContainers; 0 < n.length; ) {
			var t = ql(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
			if (t === null) {
				t = e.nativeEvent;
				var r = new t.constructor(t.type, t);
				(Al = r), t.target.dispatchEvent(r), (Al = null);
			} else return (n = lr(t)), n !== null && Xl(n), (e.blockedOn = t), !1;
			n.shift();
		}
		return !0;
	}
	function fu(e, n, t) {
		Tr(e) && t.delete(n);
	}
	function rc() {
		(Jl = !1),
			Fn !== null && Tr(Fn) && (Fn = null),
			Ln !== null && Tr(Ln) && (Ln = null),
			Tn !== null && Tr(Tn) && (Tn = null),
			Ht.forEach(fu),
			$t.forEach(fu);
	}
	function Qt(e, n) {
		e.blockedOn === n &&
			((e.blockedOn = null),
			Jl ||
				((Jl = !0),
				R.unstable_scheduleCallback(R.unstable_NormalPriority, rc)));
	}
	function Kt(e) {
		function n(l) {
			return Qt(l, e);
		}
		if (0 < Lr.length) {
			Qt(Lr[0], e);
			for (var t = 1; t < Lr.length; t++) {
				var r = Lr[t];
				r.blockedOn === e && (r.blockedOn = null);
			}
		}
		for (
			Fn !== null && Qt(Fn, e),
				Ln !== null && Qt(Ln, e),
				Tn !== null && Qt(Tn, e),
				Ht.forEach(n),
				$t.forEach(n),
				t = 0;
			t < Rn.length;
			t++
		)
			(r = Rn[t]), r.blockedOn === e && (r.blockedOn = null);
		for (; 0 < Rn.length && ((t = Rn[0]), t.blockedOn === null); )
			cu(t), t.blockedOn === null && Rn.shift();
	}
	var ft = q.ReactCurrentBatchConfig,
		Rr = !0;
	function lc(e, n, t, r) {
		var l = Y,
			o = ft.transition;
		ft.transition = null;
		try {
			(Y = 1), Zl(e, n, t, r);
		} finally {
			(Y = l), (ft.transition = o);
		}
	}
	function oc(e, n, t, r) {
		var l = Y,
			o = ft.transition;
		ft.transition = null;
		try {
			(Y = 4), Zl(e, n, t, r);
		} finally {
			(Y = l), (ft.transition = o);
		}
	}
	function Zl(e, n, t, r) {
		if (Rr) {
			var l = ql(e, n, t, r);
			if (l === null) vo(e, n, r, Mr, t), au(e, r);
			else if (tc(l, e, n, t, r)) r.stopPropagation();
			else if ((au(e, r), n & 4 && -1 < nc.indexOf(e))) {
				for (; l !== null; ) {
					var o = lr(l);
					if (
						(o !== null && ou(o),
						(o = ql(e, n, t, r)),
						o === null && vo(e, n, r, Mr, t),
						o === l)
					)
						break;
					l = o;
				}
				l !== null && r.stopPropagation();
			} else vo(e, n, r, null, t);
		}
	}
	var Mr = null;
	function ql(e, n, t, r) {
		if (((Mr = null), (e = Vl(r)), (e = Jn(e)), e !== null))
			if (((n = Xn(e)), n === null)) e = null;
			else if (((t = n.tag), t === 13)) {
				if (((e = Xi(n)), e !== null)) return e;
				e = null;
			} else if (t === 3) {
				if (n.stateNode.current.memoizedState.isDehydrated)
					return n.tag === 3 ? n.stateNode.containerInfo : null;
				e = null;
			} else n !== e && (e = null);
		return (Mr = e), null;
	}
	function du(e) {
		switch (e) {
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 1;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "toggle":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 4;
			case "message":
				switch (Ka()) {
					case Ql:
						return 1;
					case nu:
						return 4;
					case _r:
					case Ga:
						return 16;
					case tu:
						return 536870912;
					default:
						return 16;
				}
			default:
				return 16;
		}
	}
	var Mn = null,
		bl = null,
		Dr = null;
	function pu() {
		if (Dr) return Dr;
		var e,
			n = bl,
			t = n.length,
			r,
			l = "value" in Mn ? Mn.value : Mn.textContent,
			o = l.length;
		for (e = 0; e < t && n[e] === l[e]; e++);
		var i = t - e;
		for (r = 1; r <= i && n[t - r] === l[o - r]; r++);
		return (Dr = l.slice(e, 1 < r ? 1 - r : void 0));
	}
	function jr(e) {
		var n = e.keyCode;
		return (
			"charCode" in e
				? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
				: (e = n),
			e === 10 && (e = 13),
			32 <= e || e === 13 ? e : 0
		);
	}
	function Or() {
		return !0;
	}
	function mu() {
		return !1;
	}
	function Ke(e) {
		function n(t, r, l, o, i) {
			(this._reactName = t),
				(this._targetInst = l),
				(this.type = r),
				(this.nativeEvent = o),
				(this.target = i),
				(this.currentTarget = null);
			for (var u in e)
				e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(o) : o[u]));
			return (
				(this.isDefaultPrevented = (
					o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
				)
					? Or
					: mu),
				(this.isPropagationStopped = mu),
				this
			);
		}
		return (
			C(n.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var t = this.nativeEvent;
					t &&
						(t.preventDefault
							? t.preventDefault()
							: typeof t.returnValue != "unknown" && (t.returnValue = !1),
						(this.isDefaultPrevented = Or));
				},
				stopPropagation: function () {
					var t = this.nativeEvent;
					t &&
						(t.stopPropagation
							? t.stopPropagation()
							: typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
						(this.isPropagationStopped = Or));
				},
				persist: function () {},
				isPersistent: Or,
			}),
			n
		);
	}
	var dt = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (e) {
				return e.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		eo = Ke(dt),
		Gt = C({}, dt, { view: 0, detail: 0 }),
		ic = Ke(Gt),
		no,
		to,
		Yt,
		Ir = C({}, Gt, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: lo,
			button: 0,
			buttons: 0,
			relatedTarget: function (e) {
				return e.relatedTarget === void 0
					? e.fromElement === e.srcElement
						? e.toElement
						: e.fromElement
					: e.relatedTarget;
			},
			movementX: function (e) {
				return "movementX" in e
					? e.movementX
					: (e !== Yt &&
							(Yt && e.type === "mousemove"
								? ((no = e.screenX - Yt.screenX), (to = e.screenY - Yt.screenY))
								: (to = no = 0),
							(Yt = e)),
					  no);
			},
			movementY: function (e) {
				return "movementY" in e ? e.movementY : to;
			},
		}),
		hu = Ke(Ir),
		uc = C({}, Ir, { dataTransfer: 0 }),
		sc = Ke(uc),
		ac = C({}, Gt, { relatedTarget: 0 }),
		ro = Ke(ac),
		cc = C({}, dt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		fc = Ke(cc),
		dc = C({}, dt, {
			clipboardData: function (e) {
				return "clipboardData" in e ? e.clipboardData : window.clipboardData;
			},
		}),
		pc = Ke(dc),
		mc = C({}, dt, { data: 0 }),
		vu = Ke(mc),
		hc = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified",
		},
		vc = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta",
		},
		yc = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function gc(e) {
		var n = this.nativeEvent;
		return n.getModifierState
			? n.getModifierState(e)
			: (e = yc[e])
			? !!n[e]
			: !1;
	}
	function lo() {
		return gc;
	}
	var wc = C({}, Gt, {
			key: function (e) {
				if (e.key) {
					var n = hc[e.key] || e.key;
					if (n !== "Unidentified") return n;
				}
				return e.type === "keypress"
					? ((e = jr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
					: e.type === "keydown" || e.type === "keyup"
					? vc[e.keyCode] || "Unidentified"
					: "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: lo,
			charCode: function (e) {
				return e.type === "keypress" ? jr(e) : 0;
			},
			keyCode: function (e) {
				return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
			},
			which: function (e) {
				return e.type === "keypress"
					? jr(e)
					: e.type === "keydown" || e.type === "keyup"
					? e.keyCode
					: 0;
			},
		}),
		kc = Ke(wc),
		Sc = C({}, Ir, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		yu = Ke(Sc),
		Ec = C({}, Gt, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: lo,
		}),
		xc = Ke(Ec),
		Cc = C({}, dt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		_c = Ke(Cc),
		Pc = C({}, Ir, {
			deltaX: function (e) {
				return "deltaX" in e
					? e.deltaX
					: "wheelDeltaX" in e
					? -e.wheelDeltaX
					: 0;
			},
			deltaY: function (e) {
				return "deltaY" in e
					? e.deltaY
					: "wheelDeltaY" in e
					? -e.wheelDeltaY
					: "wheelDelta" in e
					? -e.wheelDelta
					: 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		Nc = Ke(Pc),
		zc = [9, 13, 27, 32],
		oo = oe && "CompositionEvent" in window,
		Xt = null;
	oe && "documentMode" in document && (Xt = document.documentMode);
	var Fc = oe && "TextEvent" in window && !Xt,
		gu = oe && (!oo || (Xt && 8 < Xt && 11 >= Xt)),
		wu = " ",
		ku = !1;
	function Su(e, n) {
		switch (e) {
			case "keyup":
				return zc.indexOf(n.keyCode) !== -1;
			case "keydown":
				return n.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1;
		}
	}
	function Eu(e) {
		return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
	}
	var pt = !1;
	function Lc(e, n) {
		switch (e) {
			case "compositionend":
				return Eu(n);
			case "keypress":
				return n.which !== 32 ? null : ((ku = !0), wu);
			case "textInput":
				return (e = n.data), e === wu && ku ? null : e;
			default:
				return null;
		}
	}
	function Tc(e, n) {
		if (pt)
			return e === "compositionend" || (!oo && Su(e, n))
				? ((e = pu()), (Dr = bl = Mn = null), (pt = !1), e)
				: null;
		switch (e) {
			case "paste":
				return null;
			case "keypress":
				if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
					if (n.char && 1 < n.char.length) return n.char;
					if (n.which) return String.fromCharCode(n.which);
				}
				return null;
			case "compositionend":
				return gu && n.locale !== "ko" ? null : n.data;
			default:
				return null;
		}
	}
	var Rc = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function xu(e) {
		var n = e && e.nodeName && e.nodeName.toLowerCase();
		return n === "input" ? !!Rc[e.type] : n === "textarea";
	}
	function Cu(e, n, t, r) {
		Wi(r),
			(n = Hr(n, "onChange")),
			0 < n.length &&
				((t = new eo("onChange", "change", null, t, r)),
				e.push({ event: t, listeners: n }));
	}
	var Jt = null,
		Zt = null;
	function Mc(e) {
		Hu(e, 0);
	}
	function Ur(e) {
		var n = gt(e);
		if (Ri(n)) return e;
	}
	function Dc(e, n) {
		if (e === "change") return n;
	}
	var _u = !1;
	if (oe) {
		var io;
		if (oe) {
			var uo = "oninput" in document;
			if (!uo) {
				var Pu = document.createElement("div");
				Pu.setAttribute("oninput", "return;"),
					(uo = typeof Pu.oninput == "function");
			}
			io = uo;
		} else io = !1;
		_u = io && (!document.documentMode || 9 < document.documentMode);
	}
	function Nu() {
		Jt && (Jt.detachEvent("onpropertychange", zu), (Zt = Jt = null));
	}
	function zu(e) {
		if (e.propertyName === "value" && Ur(Zt)) {
			var n = [];
			Cu(n, Zt, e, Vl(e)), Yi(Mc, n);
		}
	}
	function jc(e, n, t) {
		e === "focusin"
			? (Nu(), (Jt = n), (Zt = t), Jt.attachEvent("onpropertychange", zu))
			: e === "focusout" && Nu();
	}
	function Oc(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown")
			return Ur(Zt);
	}
	function Ic(e, n) {
		if (e === "click") return Ur(n);
	}
	function Uc(e, n) {
		if (e === "input" || e === "change") return Ur(n);
	}
	function Ac(e, n) {
		return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
	}
	var ln = typeof Object.is == "function" ? Object.is : Ac;
	function qt(e, n) {
		if (ln(e, n)) return !0;
		if (
			typeof e != "object" ||
			e === null ||
			typeof n != "object" ||
			n === null
		)
			return !1;
		var t = Object.keys(e),
			r = Object.keys(n);
		if (t.length !== r.length) return !1;
		for (r = 0; r < t.length; r++) {
			var l = t[r];
			if (!A.call(n, l) || !ln(e[l], n[l])) return !1;
		}
		return !0;
	}
	function Fu(e) {
		for (; e && e.firstChild; ) e = e.firstChild;
		return e;
	}
	function Lu(e, n) {
		var t = Fu(e);
		e = 0;
		for (var r; t; ) {
			if (t.nodeType === 3) {
				if (((r = e + t.textContent.length), e <= n && r >= n))
					return { node: t, offset: n - e };
				e = r;
			}
			e: {
				for (; t; ) {
					if (t.nextSibling) {
						t = t.nextSibling;
						break e;
					}
					t = t.parentNode;
				}
				t = void 0;
			}
			t = Fu(t);
		}
	}
	function Tu(e, n) {
		return e && n
			? e === n
				? !0
				: e && e.nodeType === 3
				? !1
				: n && n.nodeType === 3
				? Tu(e, n.parentNode)
				: "contains" in e
				? e.contains(n)
				: e.compareDocumentPosition
				? !!(e.compareDocumentPosition(n) & 16)
				: !1
			: !1;
	}
	function Ru() {
		for (var e = window, n = Sr(); n instanceof e.HTMLIFrameElement; ) {
			try {
				var t = typeof n.contentWindow.location.href == "string";
			} catch {
				t = !1;
			}
			if (t) e = n.contentWindow;
			else break;
			n = Sr(e.document);
		}
		return n;
	}
	function so(e) {
		var n = e && e.nodeName && e.nodeName.toLowerCase();
		return (
			n &&
			((n === "input" &&
				(e.type === "text" ||
					e.type === "search" ||
					e.type === "tel" ||
					e.type === "url" ||
					e.type === "password")) ||
				n === "textarea" ||
				e.contentEditable === "true")
		);
	}
	function Vc(e) {
		var n = Ru(),
			t = e.focusedElem,
			r = e.selectionRange;
		if (
			n !== t &&
			t &&
			t.ownerDocument &&
			Tu(t.ownerDocument.documentElement, t)
		) {
			if (r !== null && so(t)) {
				if (
					((n = r.start),
					(e = r.end),
					e === void 0 && (e = n),
					"selectionStart" in t)
				)
					(t.selectionStart = n),
						(t.selectionEnd = Math.min(e, t.value.length));
				else if (
					((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
					e.getSelection)
				) {
					e = e.getSelection();
					var l = t.textContent.length,
						o = Math.min(r.start, l);
					(r = r.end === void 0 ? o : Math.min(r.end, l)),
						!e.extend && o > r && ((l = r), (r = o), (o = l)),
						(l = Lu(t, o));
					var i = Lu(t, r);
					l &&
						i &&
						(e.rangeCount !== 1 ||
							e.anchorNode !== l.node ||
							e.anchorOffset !== l.offset ||
							e.focusNode !== i.node ||
							e.focusOffset !== i.offset) &&
						((n = n.createRange()),
						n.setStart(l.node, l.offset),
						e.removeAllRanges(),
						o > r
							? (e.addRange(n), e.extend(i.node, i.offset))
							: (n.setEnd(i.node, i.offset), e.addRange(n)));
				}
			}
			for (n = [], e = t; (e = e.parentNode); )
				e.nodeType === 1 &&
					n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
			for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
				(e = n[t]),
					(e.element.scrollLeft = e.left),
					(e.element.scrollTop = e.top);
		}
	}
	var Bc = oe && "documentMode" in document && 11 >= document.documentMode,
		mt = null,
		ao = null,
		bt = null,
		co = !1;
	function Mu(e, n, t) {
		var r =
			t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
		co ||
			mt == null ||
			mt !== Sr(r) ||
			((r = mt),
			"selectionStart" in r && so(r)
				? (r = { start: r.selectionStart, end: r.selectionEnd })
				: ((r = (
						(r.ownerDocument && r.ownerDocument.defaultView) ||
						window
				  ).getSelection()),
				  (r = {
						anchorNode: r.anchorNode,
						anchorOffset: r.anchorOffset,
						focusNode: r.focusNode,
						focusOffset: r.focusOffset,
				  })),
			(bt && qt(bt, r)) ||
				((bt = r),
				(r = Hr(ao, "onSelect")),
				0 < r.length &&
					((n = new eo("onSelect", "select", null, n, t)),
					e.push({ event: n, listeners: r }),
					(n.target = mt))));
	}
	function Ar(e, n) {
		var t = {};
		return (
			(t[e.toLowerCase()] = n.toLowerCase()),
			(t["Webkit" + e] = "webkit" + n),
			(t["Moz" + e] = "moz" + n),
			t
		);
	}
	var ht = {
			animationend: Ar("Animation", "AnimationEnd"),
			animationiteration: Ar("Animation", "AnimationIteration"),
			animationstart: Ar("Animation", "AnimationStart"),
			transitionend: Ar("Transition", "TransitionEnd"),
		},
		fo = {},
		Du = {};
	oe &&
		((Du = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete ht.animationend.animation,
			delete ht.animationiteration.animation,
			delete ht.animationstart.animation),
		"TransitionEvent" in window || delete ht.transitionend.transition);
	function Vr(e) {
		if (fo[e]) return fo[e];
		if (!ht[e]) return e;
		var n = ht[e],
			t;
		for (t in n) if (n.hasOwnProperty(t) && t in Du) return (fo[e] = n[t]);
		return e;
	}
	var ju = Vr("animationend"),
		Ou = Vr("animationiteration"),
		Iu = Vr("animationstart"),
		Uu = Vr("transitionend"),
		Au = new Map(),
		Vu =
			"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" "
			);
	function Dn(e, n) {
		Au.set(e, n), H(n, [e]);
	}
	for (var po = 0; po < Vu.length; po++) {
		var mo = Vu[po],
			Hc = mo.toLowerCase(),
			$c = mo[0].toUpperCase() + mo.slice(1);
		Dn(Hc, "on" + $c);
	}
	Dn(ju, "onAnimationEnd"),
		Dn(Ou, "onAnimationIteration"),
		Dn(Iu, "onAnimationStart"),
		Dn("dblclick", "onDoubleClick"),
		Dn("focusin", "onFocus"),
		Dn("focusout", "onBlur"),
		Dn(Uu, "onTransitionEnd"),
		X("onMouseEnter", ["mouseout", "mouseover"]),
		X("onMouseLeave", ["mouseout", "mouseover"]),
		X("onPointerEnter", ["pointerout", "pointerover"]),
		X("onPointerLeave", ["pointerout", "pointerover"]),
		H(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" "
			)
		),
		H(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" "
			)
		),
		H("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
		H(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(" ")
		),
		H(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(" ")
		),
		H(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(" ")
		);
	var er =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" "
			),
		Wc = new Set(
			"cancel close invalid load scroll toggle".split(" ").concat(er)
		);
	function Bu(e, n, t) {
		var r = e.type || "unknown-event";
		(e.currentTarget = t), Ha(r, n, void 0, e), (e.currentTarget = null);
	}
	function Hu(e, n) {
		n = (n & 4) !== 0;
		for (var t = 0; t < e.length; t++) {
			var r = e[t],
				l = r.event;
			r = r.listeners;
			e: {
				var o = void 0;
				if (n)
					for (var i = r.length - 1; 0 <= i; i--) {
						var u = r[i],
							s = u.instance,
							p = u.currentTarget;
						if (((u = u.listener), s !== o && l.isPropagationStopped()))
							break e;
						Bu(l, u, p), (o = s);
					}
				else
					for (i = 0; i < r.length; i++) {
						if (
							((u = r[i]),
							(s = u.instance),
							(p = u.currentTarget),
							(u = u.listener),
							s !== o && l.isPropagationStopped())
						)
							break e;
						Bu(l, u, p), (o = s);
					}
			}
		}
		if (Cr) throw ((e = Wl), (Cr = !1), (Wl = null), e);
	}
	function re(e, n) {
		var t = n[Eo];
		t === void 0 && (t = n[Eo] = new Set());
		var r = e + "__bubble";
		t.has(r) || ($u(n, e, 2, !1), t.add(r));
	}
	function ho(e, n, t) {
		var r = 0;
		n && (r |= 4), $u(t, e, r, n);
	}
	var Br = "_reactListening" + Math.random().toString(36).slice(2);
	function nr(e) {
		if (!e[Br]) {
			(e[Br] = !0),
				ne.forEach(function (t) {
					t !== "selectionchange" && (Wc.has(t) || ho(t, !1, e), ho(t, !0, e));
				});
			var n = e.nodeType === 9 ? e : e.ownerDocument;
			n === null || n[Br] || ((n[Br] = !0), ho("selectionchange", !1, n));
		}
	}
	function $u(e, n, t, r) {
		switch (du(n)) {
			case 1:
				var l = lc;
				break;
			case 4:
				l = oc;
				break;
			default:
				l = Zl;
		}
		(t = l.bind(null, n, t, e)),
			(l = void 0),
			!$l ||
				(n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
				(l = !0),
			r
				? l !== void 0
					? e.addEventListener(n, t, { capture: !0, passive: l })
					: e.addEventListener(n, t, !0)
				: l !== void 0
				? e.addEventListener(n, t, { passive: l })
				: e.addEventListener(n, t, !1);
	}
	function vo(e, n, t, r, l) {
		var o = r;
		if (!(n & 1) && !(n & 2) && r !== null)
			e: for (;;) {
				if (r === null) return;
				var i = r.tag;
				if (i === 3 || i === 4) {
					var u = r.stateNode.containerInfo;
					if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
					if (i === 4)
						for (i = r.return; i !== null; ) {
							var s = i.tag;
							if (
								(s === 3 || s === 4) &&
								((s = i.stateNode.containerInfo),
								s === l || (s.nodeType === 8 && s.parentNode === l))
							)
								return;
							i = i.return;
						}
					for (; u !== null; ) {
						if (((i = Jn(u)), i === null)) return;
						if (((s = i.tag), s === 5 || s === 6)) {
							r = o = i;
							continue e;
						}
						u = u.parentNode;
					}
				}
				r = r.return;
			}
		Yi(function () {
			var p = o,
				y = Vl(t),
				g = [];
			e: {
				var h = Au.get(e);
				if (h !== void 0) {
					var S = eo,
						_ = e;
					switch (e) {
						case "keypress":
							if (jr(t) === 0) break e;
						case "keydown":
						case "keyup":
							S = kc;
							break;
						case "focusin":
							(_ = "focus"), (S = ro);
							break;
						case "focusout":
							(_ = "blur"), (S = ro);
							break;
						case "beforeblur":
						case "afterblur":
							S = ro;
							break;
						case "click":
							if (t.button === 2) break e;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							S = hu;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							S = sc;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							S = xc;
							break;
						case ju:
						case Ou:
						case Iu:
							S = fc;
							break;
						case Uu:
							S = _c;
							break;
						case "scroll":
							S = ic;
							break;
						case "wheel":
							S = Nc;
							break;
						case "copy":
						case "cut":
						case "paste":
							S = pc;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							S = yu;
					}
					var P = (n & 4) !== 0,
						ye = !P && e === "scroll",
						f = P ? (h !== null ? h + "Capture" : null) : h;
					P = [];
					for (var a = p, d; a !== null; ) {
						d = a;
						var w = d.stateNode;
						if (
							(d.tag === 5 &&
								w !== null &&
								((d = w),
								f !== null &&
									((w = It(a, f)), w != null && P.push(tr(a, w, d)))),
							ye)
						)
							break;
						a = a.return;
					}
					0 < P.length &&
						((h = new S(h, _, null, t, y)), g.push({ event: h, listeners: P }));
				}
			}
			if (!(n & 7)) {
				e: {
					if (
						((h = e === "mouseover" || e === "pointerover"),
						(S = e === "mouseout" || e === "pointerout"),
						h &&
							t !== Al &&
							(_ = t.relatedTarget || t.fromElement) &&
							(Jn(_) || _[kn]))
					)
						break e;
					if (
						(S || h) &&
						((h =
							y.window === y
								? y
								: (h = y.ownerDocument)
								? h.defaultView || h.parentWindow
								: window),
						S
							? ((_ = t.relatedTarget || t.toElement),
							  (S = p),
							  (_ = _ ? Jn(_) : null),
							  _ !== null &&
									((ye = Xn(_)), _ !== ye || (_.tag !== 5 && _.tag !== 6)) &&
									(_ = null))
							: ((S = null), (_ = p)),
						S !== _)
					) {
						if (
							((P = hu),
							(w = "onMouseLeave"),
							(f = "onMouseEnter"),
							(a = "mouse"),
							(e === "pointerout" || e === "pointerover") &&
								((P = yu),
								(w = "onPointerLeave"),
								(f = "onPointerEnter"),
								(a = "pointer")),
							(ye = S == null ? h : gt(S)),
							(d = _ == null ? h : gt(_)),
							(h = new P(w, a + "leave", S, t, y)),
							(h.target = ye),
							(h.relatedTarget = d),
							(w = null),
							Jn(y) === p &&
								((P = new P(f, a + "enter", _, t, y)),
								(P.target = d),
								(P.relatedTarget = ye),
								(w = P)),
							(ye = w),
							S && _)
						)
							n: {
								for (P = S, f = _, a = 0, d = P; d; d = vt(d)) a++;
								for (d = 0, w = f; w; w = vt(w)) d++;
								for (; 0 < a - d; ) (P = vt(P)), a--;
								for (; 0 < d - a; ) (f = vt(f)), d--;
								for (; a--; ) {
									if (P === f || (f !== null && P === f.alternate)) break n;
									(P = vt(P)), (f = vt(f));
								}
								P = null;
							}
						else P = null;
						S !== null && Wu(g, h, S, P, !1),
							_ !== null && ye !== null && Wu(g, ye, _, P, !0);
					}
				}
				e: {
					if (
						((h = p ? gt(p) : window),
						(S = h.nodeName && h.nodeName.toLowerCase()),
						S === "select" || (S === "input" && h.type === "file"))
					)
						var N = Dc;
					else if (xu(h))
						if (_u) N = Uc;
						else {
							N = Oc;
							var z = jc;
						}
					else
						(S = h.nodeName) &&
							S.toLowerCase() === "input" &&
							(h.type === "checkbox" || h.type === "radio") &&
							(N = Ic);
					if (N && (N = N(e, p))) {
						Cu(g, N, t, y);
						break e;
					}
					z && z(e, h, p),
						e === "focusout" &&
							(z = h._wrapperState) &&
							z.controlled &&
							h.type === "number" &&
							Dl(h, "number", h.value);
				}
				switch (((z = p ? gt(p) : window), e)) {
					case "focusin":
						(xu(z) || z.contentEditable === "true") &&
							((mt = z), (ao = p), (bt = null));
						break;
					case "focusout":
						bt = ao = mt = null;
						break;
					case "mousedown":
						co = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						(co = !1), Mu(g, t, y);
						break;
					case "selectionchange":
						if (Bc) break;
					case "keydown":
					case "keyup":
						Mu(g, t, y);
				}
				var F;
				if (oo)
					e: {
						switch (e) {
							case "compositionstart":
								var M = "onCompositionStart";
								break e;
							case "compositionend":
								M = "onCompositionEnd";
								break e;
							case "compositionupdate":
								M = "onCompositionUpdate";
								break e;
						}
						M = void 0;
					}
				else
					pt
						? Su(e, t) && (M = "onCompositionEnd")
						: e === "keydown" &&
						  t.keyCode === 229 &&
						  (M = "onCompositionStart");
				M &&
					(gu &&
						t.locale !== "ko" &&
						(pt || M !== "onCompositionStart"
							? M === "onCompositionEnd" && pt && (F = pu())
							: ((Mn = y),
							  (bl = "value" in Mn ? Mn.value : Mn.textContent),
							  (pt = !0))),
					(z = Hr(p, M)),
					0 < z.length &&
						((M = new vu(M, e, null, t, y)),
						g.push({ event: M, listeners: z }),
						F ? (M.data = F) : ((F = Eu(t)), F !== null && (M.data = F)))),
					(F = Fc ? Lc(e, t) : Tc(e, t)) &&
						((p = Hr(p, "onBeforeInput")),
						0 < p.length &&
							((y = new vu("onBeforeInput", "beforeinput", null, t, y)),
							g.push({ event: y, listeners: p }),
							(y.data = F)));
			}
			Hu(g, n);
		});
	}
	function tr(e, n, t) {
		return { instance: e, listener: n, currentTarget: t };
	}
	function Hr(e, n) {
		for (var t = n + "Capture", r = []; e !== null; ) {
			var l = e,
				o = l.stateNode;
			l.tag === 5 &&
				o !== null &&
				((l = o),
				(o = It(e, t)),
				o != null && r.unshift(tr(e, o, l)),
				(o = It(e, n)),
				o != null && r.push(tr(e, o, l))),
				(e = e.return);
		}
		return r;
	}
	function vt(e) {
		if (e === null) return null;
		do e = e.return;
		while (e && e.tag !== 5);
		return e || null;
	}
	function Wu(e, n, t, r, l) {
		for (var o = n._reactName, i = []; t !== null && t !== r; ) {
			var u = t,
				s = u.alternate,
				p = u.stateNode;
			if (s !== null && s === r) break;
			u.tag === 5 &&
				p !== null &&
				((u = p),
				l
					? ((s = It(t, o)), s != null && i.unshift(tr(t, s, u)))
					: l || ((s = It(t, o)), s != null && i.push(tr(t, s, u)))),
				(t = t.return);
		}
		i.length !== 0 && e.push({ event: n, listeners: i });
	}
	var Qc = /\r\n?/g,
		Kc = /\u0000|\uFFFD/g;
	function Qu(e) {
		return (typeof e == "string" ? e : "" + e)
			.replace(
				Qc,
				`
`
			)
			.replace(Kc, "");
	}
	function $r(e, n, t) {
		if (((n = Qu(n)), Qu(e) !== n && t)) throw Error(m(425));
	}
	function Wr() {}
	var yo = null,
		go = null;
	function wo(e, n) {
		return (
			e === "textarea" ||
			e === "noscript" ||
			typeof n.children == "string" ||
			typeof n.children == "number" ||
			(typeof n.dangerouslySetInnerHTML == "object" &&
				n.dangerouslySetInnerHTML !== null &&
				n.dangerouslySetInnerHTML.__html != null)
		);
	}
	var ko = typeof setTimeout == "function" ? setTimeout : void 0,
		Gc = typeof clearTimeout == "function" ? clearTimeout : void 0,
		Ku = typeof Promise == "function" ? Promise : void 0,
		Yc =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof Ku < "u"
				? function (e) {
						return Ku.resolve(null).then(e).catch(Xc);
				  }
				: ko;
	function Xc(e) {
		setTimeout(function () {
			throw e;
		});
	}
	function So(e, n) {
		var t = n,
			r = 0;
		do {
			var l = t.nextSibling;
			if ((e.removeChild(t), l && l.nodeType === 8))
				if (((t = l.data), t === "/$")) {
					if (r === 0) {
						e.removeChild(l), Kt(n);
						return;
					}
					r--;
				} else (t !== "$" && t !== "$?" && t !== "$!") || r++;
			t = l;
		} while (t);
		Kt(n);
	}
	function jn(e) {
		for (; e != null; e = e.nextSibling) {
			var n = e.nodeType;
			if (n === 1 || n === 3) break;
			if (n === 8) {
				if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
				if (n === "/$") return null;
			}
		}
		return e;
	}
	function Gu(e) {
		e = e.previousSibling;
		for (var n = 0; e; ) {
			if (e.nodeType === 8) {
				var t = e.data;
				if (t === "$" || t === "$!" || t === "$?") {
					if (n === 0) return e;
					n--;
				} else t === "/$" && n++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	var yt = Math.random().toString(36).slice(2),
		hn = "__reactFiber$" + yt,
		rr = "__reactProps$" + yt,
		kn = "__reactContainer$" + yt,
		Eo = "__reactEvents$" + yt,
		Jc = "__reactListeners$" + yt,
		Zc = "__reactHandles$" + yt;
	function Jn(e) {
		var n = e[hn];
		if (n) return n;
		for (var t = e.parentNode; t; ) {
			if ((n = t[kn] || t[hn])) {
				if (
					((t = n.alternate),
					n.child !== null || (t !== null && t.child !== null))
				)
					for (e = Gu(e); e !== null; ) {
						if ((t = e[hn])) return t;
						e = Gu(e);
					}
				return n;
			}
			(e = t), (t = e.parentNode);
		}
		return null;
	}
	function lr(e) {
		return (
			(e = e[hn] || e[kn]),
			!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
				? null
				: e
		);
	}
	function gt(e) {
		if (e.tag === 5 || e.tag === 6) return e.stateNode;
		throw Error(m(33));
	}
	function Qr(e) {
		return e[rr] || null;
	}
	var xo = [],
		wt = -1;
	function On(e) {
		return { current: e };
	}
	function le(e) {
		0 > wt || ((e.current = xo[wt]), (xo[wt] = null), wt--);
	}
	function ee(e, n) {
		wt++, (xo[wt] = e.current), (e.current = n);
	}
	var In = {},
		Fe = On(In),
		Ue = On(!1),
		Zn = In;
	function kt(e, n) {
		var t = e.type.contextTypes;
		if (!t) return In;
		var r = e.stateNode;
		if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
			return r.__reactInternalMemoizedMaskedChildContext;
		var l = {},
			o;
		for (o in t) l[o] = n[o];
		return (
			r &&
				((e = e.stateNode),
				(e.__reactInternalMemoizedUnmaskedChildContext = n),
				(e.__reactInternalMemoizedMaskedChildContext = l)),
			l
		);
	}
	function Ae(e) {
		return (e = e.childContextTypes), e != null;
	}
	function Kr() {
		le(Ue), le(Fe);
	}
	function Yu(e, n, t) {
		if (Fe.current !== In) throw Error(m(168));
		ee(Fe, n), ee(Ue, t);
	}
	function Xu(e, n, t) {
		var r = e.stateNode;
		if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
			return t;
		r = r.getChildContext();
		for (var l in r) if (!(l in n)) throw Error(m(108, b(e) || "Unknown", l));
		return C({}, t, r);
	}
	function Gr(e) {
		return (
			(e =
				((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
				In),
			(Zn = Fe.current),
			ee(Fe, e),
			ee(Ue, Ue.current),
			!0
		);
	}
	function Ju(e, n, t) {
		var r = e.stateNode;
		if (!r) throw Error(m(169));
		t
			? ((e = Xu(e, n, Zn)),
			  (r.__reactInternalMemoizedMergedChildContext = e),
			  le(Ue),
			  le(Fe),
			  ee(Fe, e))
			: le(Ue),
			ee(Ue, t);
	}
	var Sn = null,
		Yr = !1,
		Co = !1;
	function Zu(e) {
		Sn === null ? (Sn = [e]) : Sn.push(e);
	}
	function qc(e) {
		(Yr = !0), Zu(e);
	}
	function Un() {
		if (!Co && Sn !== null) {
			Co = !0;
			var e = 0,
				n = Y;
			try {
				var t = Sn;
				for (Y = 1; e < t.length; e++) {
					var r = t[e];
					do r = r(!0);
					while (r !== null);
				}
				(Sn = null), (Yr = !1);
			} catch (l) {
				throw (Sn !== null && (Sn = Sn.slice(e + 1)), bi(Ql, Un), l);
			} finally {
				(Y = n), (Co = !1);
			}
		}
		return null;
	}
	var St = [],
		Et = 0,
		Xr = null,
		Jr = 0,
		Je = [],
		Ze = 0,
		qn = null,
		En = 1,
		xn = "";
	function bn(e, n) {
		(St[Et++] = Jr), (St[Et++] = Xr), (Xr = e), (Jr = n);
	}
	function qu(e, n, t) {
		(Je[Ze++] = En), (Je[Ze++] = xn), (Je[Ze++] = qn), (qn = e);
		var r = En;
		e = xn;
		var l = 32 - rn(r) - 1;
		(r &= ~(1 << l)), (t += 1);
		var o = 32 - rn(n) + l;
		if (30 < o) {
			var i = l - (l % 5);
			(o = (r & ((1 << i) - 1)).toString(32)),
				(r >>= i),
				(l -= i),
				(En = (1 << (32 - rn(n) + l)) | (t << l) | r),
				(xn = o + e);
		} else (En = (1 << o) | (t << l) | r), (xn = e);
	}
	function _o(e) {
		e.return !== null && (bn(e, 1), qu(e, 1, 0));
	}
	function Po(e) {
		for (; e === Xr; )
			(Xr = St[--Et]), (St[Et] = null), (Jr = St[--Et]), (St[Et] = null);
		for (; e === qn; )
			(qn = Je[--Ze]),
				(Je[Ze] = null),
				(xn = Je[--Ze]),
				(Je[Ze] = null),
				(En = Je[--Ze]),
				(Je[Ze] = null);
	}
	var Ge = null,
		Ye = null,
		ue = !1,
		on = null;
	function bu(e, n) {
		var t = nn(5, null, null, 0);
		(t.elementType = "DELETED"),
			(t.stateNode = n),
			(t.return = e),
			(n = e.deletions),
			n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
	}
	function es(e, n) {
		switch (e.tag) {
			case 5:
				var t = e.type;
				return (
					(n =
						n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
							? null
							: n),
					n !== null
						? ((e.stateNode = n), (Ge = e), (Ye = jn(n.firstChild)), !0)
						: !1
				);
			case 6:
				return (
					(n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
					n !== null ? ((e.stateNode = n), (Ge = e), (Ye = null), !0) : !1
				);
			case 13:
				return (
					(n = n.nodeType !== 8 ? null : n),
					n !== null
						? ((t = qn !== null ? { id: En, overflow: xn } : null),
						  (e.memoizedState = {
								dehydrated: n,
								treeContext: t,
								retryLane: 1073741824,
						  }),
						  (t = nn(18, null, null, 0)),
						  (t.stateNode = n),
						  (t.return = e),
						  (e.child = t),
						  (Ge = e),
						  (Ye = null),
						  !0)
						: !1
				);
			default:
				return !1;
		}
	}
	function No(e) {
		return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
	}
	function zo(e) {
		if (ue) {
			var n = Ye;
			if (n) {
				var t = n;
				if (!es(e, n)) {
					if (No(e)) throw Error(m(418));
					n = jn(t.nextSibling);
					var r = Ge;
					n && es(e, n)
						? bu(r, t)
						: ((e.flags = (e.flags & -4097) | 2), (ue = !1), (Ge = e));
				}
			} else {
				if (No(e)) throw Error(m(418));
				(e.flags = (e.flags & -4097) | 2), (ue = !1), (Ge = e);
			}
		}
	}
	function ns(e) {
		for (
			e = e.return;
			e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

		)
			e = e.return;
		Ge = e;
	}
	function Zr(e) {
		if (e !== Ge) return !1;
		if (!ue) return ns(e), (ue = !0), !1;
		var n;
		if (
			((n = e.tag !== 3) &&
				!(n = e.tag !== 5) &&
				((n = e.type),
				(n = n !== "head" && n !== "body" && !wo(e.type, e.memoizedProps))),
			n && (n = Ye))
		) {
			if (No(e)) throw (ts(), Error(m(418)));
			for (; n; ) bu(e, n), (n = jn(n.nextSibling));
		}
		if ((ns(e), e.tag === 13)) {
			if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
				throw Error(m(317));
			e: {
				for (e = e.nextSibling, n = 0; e; ) {
					if (e.nodeType === 8) {
						var t = e.data;
						if (t === "/$") {
							if (n === 0) {
								Ye = jn(e.nextSibling);
								break e;
							}
							n--;
						} else (t !== "$" && t !== "$!" && t !== "$?") || n++;
					}
					e = e.nextSibling;
				}
				Ye = null;
			}
		} else Ye = Ge ? jn(e.stateNode.nextSibling) : null;
		return !0;
	}
	function ts() {
		for (var e = Ye; e; ) e = jn(e.nextSibling);
	}
	function xt() {
		(Ye = Ge = null), (ue = !1);
	}
	function Fo(e) {
		on === null ? (on = [e]) : on.push(e);
	}
	var bc = q.ReactCurrentBatchConfig;
	function or(e, n, t) {
		if (
			((e = t.ref),
			e !== null && typeof e != "function" && typeof e != "object")
		) {
			if (t._owner) {
				if (((t = t._owner), t)) {
					if (t.tag !== 1) throw Error(m(309));
					var r = t.stateNode;
				}
				if (!r) throw Error(m(147, e));
				var l = r,
					o = "" + e;
				return n !== null &&
					n.ref !== null &&
					typeof n.ref == "function" &&
					n.ref._stringRef === o
					? n.ref
					: ((n = function (i) {
							var u = l.refs;
							i === null ? delete u[o] : (u[o] = i);
					  }),
					  (n._stringRef = o),
					  n);
			}
			if (typeof e != "string") throw Error(m(284));
			if (!t._owner) throw Error(m(290, e));
		}
		return e;
	}
	function qr(e, n) {
		throw (
			((e = Object.prototype.toString.call(n)),
			Error(
				m(
					31,
					e === "[object Object]"
						? "object with keys {" + Object.keys(n).join(", ") + "}"
						: e
				)
			))
		);
	}
	function rs(e) {
		var n = e._init;
		return n(e._payload);
	}
	function ls(e) {
		function n(f, a) {
			if (e) {
				var d = f.deletions;
				d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
			}
		}
		function t(f, a) {
			if (!e) return null;
			for (; a !== null; ) n(f, a), (a = a.sibling);
			return null;
		}
		function r(f, a) {
			for (f = new Map(); a !== null; )
				a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
			return f;
		}
		function l(f, a) {
			return (f = Kn(f, a)), (f.index = 0), (f.sibling = null), f;
		}
		function o(f, a, d) {
			return (
				(f.index = d),
				e
					? ((d = f.alternate),
					  d !== null
							? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
							: ((f.flags |= 2), a))
					: ((f.flags |= 1048576), a)
			);
		}
		function i(f) {
			return e && f.alternate === null && (f.flags |= 2), f;
		}
		function u(f, a, d, w) {
			return a === null || a.tag !== 6
				? ((a = ki(d, f.mode, w)), (a.return = f), a)
				: ((a = l(a, d)), (a.return = f), a);
		}
		function s(f, a, d, w) {
			var N = d.type;
			return N === ke
				? y(f, a, d.props.children, w, d.key)
				: a !== null &&
				  (a.elementType === N ||
						(typeof N == "object" &&
							N !== null &&
							N.$$typeof === Ie &&
							rs(N) === a.type))
				? ((w = l(a, d.props)), (w.ref = or(f, a, d)), (w.return = f), w)
				: ((w = El(d.type, d.key, d.props, null, f.mode, w)),
				  (w.ref = or(f, a, d)),
				  (w.return = f),
				  w);
		}
		function p(f, a, d, w) {
			return a === null ||
				a.tag !== 4 ||
				a.stateNode.containerInfo !== d.containerInfo ||
				a.stateNode.implementation !== d.implementation
				? ((a = Si(d, f.mode, w)), (a.return = f), a)
				: ((a = l(a, d.children || [])), (a.return = f), a);
		}
		function y(f, a, d, w, N) {
			return a === null || a.tag !== 7
				? ((a = ut(d, f.mode, w, N)), (a.return = f), a)
				: ((a = l(a, d)), (a.return = f), a);
		}
		function g(f, a, d) {
			if ((typeof a == "string" && a !== "") || typeof a == "number")
				return (a = ki("" + a, f.mode, d)), (a.return = f), a;
			if (typeof a == "object" && a !== null) {
				switch (a.$$typeof) {
					case we:
						return (
							(d = El(a.type, a.key, a.props, null, f.mode, d)),
							(d.ref = or(f, null, a)),
							(d.return = f),
							d
						);
					case fe:
						return (a = Si(a, f.mode, d)), (a.return = f), a;
					case Ie:
						var w = a._init;
						return g(f, w(a._payload), d);
				}
				if (Dt(a) || T(a))
					return (a = ut(a, f.mode, d, null)), (a.return = f), a;
				qr(f, a);
			}
			return null;
		}
		function h(f, a, d, w) {
			var N = a !== null ? a.key : null;
			if ((typeof d == "string" && d !== "") || typeof d == "number")
				return N !== null ? null : u(f, a, "" + d, w);
			if (typeof d == "object" && d !== null) {
				switch (d.$$typeof) {
					case we:
						return d.key === N ? s(f, a, d, w) : null;
					case fe:
						return d.key === N ? p(f, a, d, w) : null;
					case Ie:
						return (N = d._init), h(f, a, N(d._payload), w);
				}
				if (Dt(d) || T(d)) return N !== null ? null : y(f, a, d, w, null);
				qr(f, d);
			}
			return null;
		}
		function S(f, a, d, w, N) {
			if ((typeof w == "string" && w !== "") || typeof w == "number")
				return (f = f.get(d) || null), u(a, f, "" + w, N);
			if (typeof w == "object" && w !== null) {
				switch (w.$$typeof) {
					case we:
						return (
							(f = f.get(w.key === null ? d : w.key) || null), s(a, f, w, N)
						);
					case fe:
						return (
							(f = f.get(w.key === null ? d : w.key) || null), p(a, f, w, N)
						);
					case Ie:
						var z = w._init;
						return S(f, a, d, z(w._payload), N);
				}
				if (Dt(w) || T(w)) return (f = f.get(d) || null), y(a, f, w, N, null);
				qr(a, w);
			}
			return null;
		}
		function _(f, a, d, w) {
			for (
				var N = null, z = null, F = a, M = (a = 0), _e = null;
				F !== null && M < d.length;
				M++
			) {
				F.index > M ? ((_e = F), (F = null)) : (_e = F.sibling);
				var Q = h(f, F, d[M], w);
				if (Q === null) {
					F === null && (F = _e);
					break;
				}
				e && F && Q.alternate === null && n(f, F),
					(a = o(Q, a, M)),
					z === null ? (N = Q) : (z.sibling = Q),
					(z = Q),
					(F = _e);
			}
			if (M === d.length) return t(f, F), ue && bn(f, M), N;
			if (F === null) {
				for (; M < d.length; M++)
					(F = g(f, d[M], w)),
						F !== null &&
							((a = o(F, a, M)),
							z === null ? (N = F) : (z.sibling = F),
							(z = F));
				return ue && bn(f, M), N;
			}
			for (F = r(f, F); M < d.length; M++)
				(_e = S(F, f, M, d[M], w)),
					_e !== null &&
						(e &&
							_e.alternate !== null &&
							F.delete(_e.key === null ? M : _e.key),
						(a = o(_e, a, M)),
						z === null ? (N = _e) : (z.sibling = _e),
						(z = _e));
			return (
				e &&
					F.forEach(function (Gn) {
						return n(f, Gn);
					}),
				ue && bn(f, M),
				N
			);
		}
		function P(f, a, d, w) {
			var N = T(d);
			if (typeof N != "function") throw Error(m(150));
			if (((d = N.call(d)), d == null)) throw Error(m(151));
			for (
				var z = (N = null), F = a, M = (a = 0), _e = null, Q = d.next();
				F !== null && !Q.done;
				M++, Q = d.next()
			) {
				F.index > M ? ((_e = F), (F = null)) : (_e = F.sibling);
				var Gn = h(f, F, Q.value, w);
				if (Gn === null) {
					F === null && (F = _e);
					break;
				}
				e && F && Gn.alternate === null && n(f, F),
					(a = o(Gn, a, M)),
					z === null ? (N = Gn) : (z.sibling = Gn),
					(z = Gn),
					(F = _e);
			}
			if (Q.done) return t(f, F), ue && bn(f, M), N;
			if (F === null) {
				for (; !Q.done; M++, Q = d.next())
					(Q = g(f, Q.value, w)),
						Q !== null &&
							((a = o(Q, a, M)),
							z === null ? (N = Q) : (z.sibling = Q),
							(z = Q));
				return ue && bn(f, M), N;
			}
			for (F = r(f, F); !Q.done; M++, Q = d.next())
				(Q = S(F, f, M, Q.value, w)),
					Q !== null &&
						(e && Q.alternate !== null && F.delete(Q.key === null ? M : Q.key),
						(a = o(Q, a, M)),
						z === null ? (N = Q) : (z.sibling = Q),
						(z = Q));
			return (
				e &&
					F.forEach(function (Mf) {
						return n(f, Mf);
					}),
				ue && bn(f, M),
				N
			);
		}
		function ye(f, a, d, w) {
			if (
				(typeof d == "object" &&
					d !== null &&
					d.type === ke &&
					d.key === null &&
					(d = d.props.children),
				typeof d == "object" && d !== null)
			) {
				switch (d.$$typeof) {
					case we:
						e: {
							for (var N = d.key, z = a; z !== null; ) {
								if (z.key === N) {
									if (((N = d.type), N === ke)) {
										if (z.tag === 7) {
											t(f, z.sibling),
												(a = l(z, d.props.children)),
												(a.return = f),
												(f = a);
											break e;
										}
									} else if (
										z.elementType === N ||
										(typeof N == "object" &&
											N !== null &&
											N.$$typeof === Ie &&
											rs(N) === z.type)
									) {
										t(f, z.sibling),
											(a = l(z, d.props)),
											(a.ref = or(f, z, d)),
											(a.return = f),
											(f = a);
										break e;
									}
									t(f, z);
									break;
								} else n(f, z);
								z = z.sibling;
							}
							d.type === ke
								? ((a = ut(d.props.children, f.mode, w, d.key)),
								  (a.return = f),
								  (f = a))
								: ((w = El(d.type, d.key, d.props, null, f.mode, w)),
								  (w.ref = or(f, a, d)),
								  (w.return = f),
								  (f = w));
						}
						return i(f);
					case fe:
						e: {
							for (z = d.key; a !== null; ) {
								if (a.key === z)
									if (
										a.tag === 4 &&
										a.stateNode.containerInfo === d.containerInfo &&
										a.stateNode.implementation === d.implementation
									) {
										t(f, a.sibling),
											(a = l(a, d.children || [])),
											(a.return = f),
											(f = a);
										break e;
									} else {
										t(f, a);
										break;
									}
								else n(f, a);
								a = a.sibling;
							}
							(a = Si(d, f.mode, w)), (a.return = f), (f = a);
						}
						return i(f);
					case Ie:
						return (z = d._init), ye(f, a, z(d._payload), w);
				}
				if (Dt(d)) return _(f, a, d, w);
				if (T(d)) return P(f, a, d, w);
				qr(f, d);
			}
			return (typeof d == "string" && d !== "") || typeof d == "number"
				? ((d = "" + d),
				  a !== null && a.tag === 6
						? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
						: (t(f, a), (a = ki(d, f.mode, w)), (a.return = f), (f = a)),
				  i(f))
				: t(f, a);
		}
		return ye;
	}
	var Ct = ls(!0),
		os = ls(!1),
		br = On(null),
		el = null,
		_t = null,
		Lo = null;
	function To() {
		Lo = _t = el = null;
	}
	function Ro(e) {
		var n = br.current;
		le(br), (e._currentValue = n);
	}
	function Mo(e, n, t) {
		for (; e !== null; ) {
			var r = e.alternate;
			if (
				((e.childLanes & n) !== n
					? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
					: r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
				e === t)
			)
				break;
			e = e.return;
		}
	}
	function Pt(e, n) {
		(el = e),
			(Lo = _t = null),
			(e = e.dependencies),
			e !== null &&
				e.firstContext !== null &&
				(e.lanes & n && (Ve = !0), (e.firstContext = null));
	}
	function qe(e) {
		var n = e._currentValue;
		if (Lo !== e)
			if (((e = { context: e, memoizedValue: n, next: null }), _t === null)) {
				if (el === null) throw Error(m(308));
				(_t = e), (el.dependencies = { lanes: 0, firstContext: e });
			} else _t = _t.next = e;
		return n;
	}
	var et = null;
	function Do(e) {
		et === null ? (et = [e]) : et.push(e);
	}
	function is(e, n, t, r) {
		var l = n.interleaved;
		return (
			l === null ? ((t.next = t), Do(n)) : ((t.next = l.next), (l.next = t)),
			(n.interleaved = t),
			Cn(e, r)
		);
	}
	function Cn(e, n) {
		e.lanes |= n;
		var t = e.alternate;
		for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
			(e.childLanes |= n),
				(t = e.alternate),
				t !== null && (t.childLanes |= n),
				(t = e),
				(e = e.return);
		return t.tag === 3 ? t.stateNode : null;
	}
	var An = !1;
	function jo(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, interleaved: null, lanes: 0 },
			effects: null,
		};
	}
	function us(e, n) {
		(e = e.updateQueue),
			n.updateQueue === e &&
				(n.updateQueue = {
					baseState: e.baseState,
					firstBaseUpdate: e.firstBaseUpdate,
					lastBaseUpdate: e.lastBaseUpdate,
					shared: e.shared,
					effects: e.effects,
				});
	}
	function _n(e, n) {
		return {
			eventTime: e,
			lane: n,
			tag: 0,
			payload: null,
			callback: null,
			next: null,
		};
	}
	function Vn(e, n, t) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (((r = r.shared), B & 2)) {
			var l = r.pending;
			return (
				l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
				(r.pending = n),
				Cn(e, t)
			);
		}
		return (
			(l = r.interleaved),
			l === null ? ((n.next = n), Do(r)) : ((n.next = l.next), (l.next = n)),
			(r.interleaved = n),
			Cn(e, t)
		);
	}
	function nl(e, n, t) {
		if (
			((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
		) {
			var r = n.lanes;
			(r &= e.pendingLanes), (t |= r), (n.lanes = t), Yl(e, t);
		}
	}
	function ss(e, n) {
		var t = e.updateQueue,
			r = e.alternate;
		if (r !== null && ((r = r.updateQueue), t === r)) {
			var l = null,
				o = null;
			if (((t = t.firstBaseUpdate), t !== null)) {
				do {
					var i = {
						eventTime: t.eventTime,
						lane: t.lane,
						tag: t.tag,
						payload: t.payload,
						callback: t.callback,
						next: null,
					};
					o === null ? (l = o = i) : (o = o.next = i), (t = t.next);
				} while (t !== null);
				o === null ? (l = o = n) : (o = o.next = n);
			} else l = o = n;
			(t = {
				baseState: r.baseState,
				firstBaseUpdate: l,
				lastBaseUpdate: o,
				shared: r.shared,
				effects: r.effects,
			}),
				(e.updateQueue = t);
			return;
		}
		(e = t.lastBaseUpdate),
			e === null ? (t.firstBaseUpdate = n) : (e.next = n),
			(t.lastBaseUpdate = n);
	}
	function tl(e, n, t, r) {
		var l = e.updateQueue;
		An = !1;
		var o = l.firstBaseUpdate,
			i = l.lastBaseUpdate,
			u = l.shared.pending;
		if (u !== null) {
			l.shared.pending = null;
			var s = u,
				p = s.next;
			(s.next = null), i === null ? (o = p) : (i.next = p), (i = s);
			var y = e.alternate;
			y !== null &&
				((y = y.updateQueue),
				(u = y.lastBaseUpdate),
				u !== i &&
					(u === null ? (y.firstBaseUpdate = p) : (u.next = p),
					(y.lastBaseUpdate = s)));
		}
		if (o !== null) {
			var g = l.baseState;
			(i = 0), (y = p = s = null), (u = o);
			do {
				var h = u.lane,
					S = u.eventTime;
				if ((r & h) === h) {
					y !== null &&
						(y = y.next =
							{
								eventTime: S,
								lane: 0,
								tag: u.tag,
								payload: u.payload,
								callback: u.callback,
								next: null,
							});
					e: {
						var _ = e,
							P = u;
						switch (((h = n), (S = t), P.tag)) {
							case 1:
								if (((_ = P.payload), typeof _ == "function")) {
									g = _.call(S, g, h);
									break e;
								}
								g = _;
								break e;
							case 3:
								_.flags = (_.flags & -65537) | 128;
							case 0:
								if (
									((_ = P.payload),
									(h = typeof _ == "function" ? _.call(S, g, h) : _),
									h == null)
								)
									break e;
								g = C({}, g, h);
								break e;
							case 2:
								An = !0;
						}
					}
					u.callback !== null &&
						u.lane !== 0 &&
						((e.flags |= 64),
						(h = l.effects),
						h === null ? (l.effects = [u]) : h.push(u));
				} else
					(S = {
						eventTime: S,
						lane: h,
						tag: u.tag,
						payload: u.payload,
						callback: u.callback,
						next: null,
					}),
						y === null ? ((p = y = S), (s = g)) : (y = y.next = S),
						(i |= h);
				if (((u = u.next), u === null)) {
					if (((u = l.shared.pending), u === null)) break;
					(h = u),
						(u = h.next),
						(h.next = null),
						(l.lastBaseUpdate = h),
						(l.shared.pending = null);
				}
			} while (!0);
			if (
				(y === null && (s = g),
				(l.baseState = s),
				(l.firstBaseUpdate = p),
				(l.lastBaseUpdate = y),
				(n = l.shared.interleaved),
				n !== null)
			) {
				l = n;
				do (i |= l.lane), (l = l.next);
				while (l !== n);
			} else o === null && (l.shared.lanes = 0);
			(rt |= i), (e.lanes = i), (e.memoizedState = g);
		}
	}
	function as(e, n, t) {
		if (((e = n.effects), (n.effects = null), e !== null))
			for (n = 0; n < e.length; n++) {
				var r = e[n],
					l = r.callback;
				if (l !== null) {
					if (((r.callback = null), (r = t), typeof l != "function"))
						throw Error(m(191, l));
					l.call(r);
				}
			}
	}
	var ir = {},
		vn = On(ir),
		ur = On(ir),
		sr = On(ir);
	function nt(e) {
		if (e === ir) throw Error(m(174));
		return e;
	}
	function Oo(e, n) {
		switch ((ee(sr, n), ee(ur, e), ee(vn, ir), (e = n.nodeType), e)) {
			case 9:
			case 11:
				n = (n = n.documentElement) ? n.namespaceURI : Ol(null, "");
				break;
			default:
				(e = e === 8 ? n.parentNode : n),
					(n = e.namespaceURI || null),
					(e = e.tagName),
					(n = Ol(n, e));
		}
		le(vn), ee(vn, n);
	}
	function Nt() {
		le(vn), le(ur), le(sr);
	}
	function cs(e) {
		nt(sr.current);
		var n = nt(vn.current),
			t = Ol(n, e.type);
		n !== t && (ee(ur, e), ee(vn, t));
	}
	function Io(e) {
		ur.current === e && (le(vn), le(ur));
	}
	var de = On(0);
	function rl(e) {
		for (var n = e; n !== null; ) {
			if (n.tag === 13) {
				var t = n.memoizedState;
				if (
					t !== null &&
					((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
				)
					return n;
			} else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
				if (n.flags & 128) return n;
			} else if (n.child !== null) {
				(n.child.return = n), (n = n.child);
				continue;
			}
			if (n === e) break;
			for (; n.sibling === null; ) {
				if (n.return === null || n.return === e) return null;
				n = n.return;
			}
			(n.sibling.return = n.return), (n = n.sibling);
		}
		return null;
	}
	var Uo = [];
	function Ao() {
		for (var e = 0; e < Uo.length; e++)
			Uo[e]._workInProgressVersionPrimary = null;
		Uo.length = 0;
	}
	var ll = q.ReactCurrentDispatcher,
		Vo = q.ReactCurrentBatchConfig,
		tt = 0,
		pe = null,
		Se = null,
		xe = null,
		ol = !1,
		ar = !1,
		cr = 0,
		ef = 0;
	function Le() {
		throw Error(m(321));
	}
	function Bo(e, n) {
		if (n === null) return !1;
		for (var t = 0; t < n.length && t < e.length; t++)
			if (!ln(e[t], n[t])) return !1;
		return !0;
	}
	function Ho(e, n, t, r, l, o) {
		if (
			((tt = o),
			(pe = n),
			(n.memoizedState = null),
			(n.updateQueue = null),
			(n.lanes = 0),
			(ll.current = e === null || e.memoizedState === null ? lf : of),
			(e = t(r, l)),
			ar)
		) {
			o = 0;
			do {
				if (((ar = !1), (cr = 0), 25 <= o)) throw Error(m(301));
				(o += 1),
					(xe = Se = null),
					(n.updateQueue = null),
					(ll.current = uf),
					(e = t(r, l));
			} while (ar);
		}
		if (
			((ll.current = sl),
			(n = Se !== null && Se.next !== null),
			(tt = 0),
			(xe = Se = pe = null),
			(ol = !1),
			n)
		)
			throw Error(m(300));
		return e;
	}
	function $o() {
		var e = cr !== 0;
		return (cr = 0), e;
	}
	function yn() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return xe === null ? (pe.memoizedState = xe = e) : (xe = xe.next = e), xe;
	}
	function be() {
		if (Se === null) {
			var e = pe.alternate;
			e = e !== null ? e.memoizedState : null;
		} else e = Se.next;
		var n = xe === null ? pe.memoizedState : xe.next;
		if (n !== null) (xe = n), (Se = e);
		else {
			if (e === null) throw Error(m(310));
			(Se = e),
				(e = {
					memoizedState: Se.memoizedState,
					baseState: Se.baseState,
					baseQueue: Se.baseQueue,
					queue: Se.queue,
					next: null,
				}),
				xe === null ? (pe.memoizedState = xe = e) : (xe = xe.next = e);
		}
		return xe;
	}
	function fr(e, n) {
		return typeof n == "function" ? n(e) : n;
	}
	function Wo(e) {
		var n = be(),
			t = n.queue;
		if (t === null) throw Error(m(311));
		t.lastRenderedReducer = e;
		var r = Se,
			l = r.baseQueue,
			o = t.pending;
		if (o !== null) {
			if (l !== null) {
				var i = l.next;
				(l.next = o.next), (o.next = i);
			}
			(r.baseQueue = l = o), (t.pending = null);
		}
		if (l !== null) {
			(o = l.next), (r = r.baseState);
			var u = (i = null),
				s = null,
				p = o;
			do {
				var y = p.lane;
				if ((tt & y) === y)
					s !== null &&
						(s = s.next =
							{
								lane: 0,
								action: p.action,
								hasEagerState: p.hasEagerState,
								eagerState: p.eagerState,
								next: null,
							}),
						(r = p.hasEagerState ? p.eagerState : e(r, p.action));
				else {
					var g = {
						lane: y,
						action: p.action,
						hasEagerState: p.hasEagerState,
						eagerState: p.eagerState,
						next: null,
					};
					s === null ? ((u = s = g), (i = r)) : (s = s.next = g),
						(pe.lanes |= y),
						(rt |= y);
				}
				p = p.next;
			} while (p !== null && p !== o);
			s === null ? (i = r) : (s.next = u),
				ln(r, n.memoizedState) || (Ve = !0),
				(n.memoizedState = r),
				(n.baseState = i),
				(n.baseQueue = s),
				(t.lastRenderedState = r);
		}
		if (((e = t.interleaved), e !== null)) {
			l = e;
			do (o = l.lane), (pe.lanes |= o), (rt |= o), (l = l.next);
			while (l !== e);
		} else l === null && (t.lanes = 0);
		return [n.memoizedState, t.dispatch];
	}
	function Qo(e) {
		var n = be(),
			t = n.queue;
		if (t === null) throw Error(m(311));
		t.lastRenderedReducer = e;
		var r = t.dispatch,
			l = t.pending,
			o = n.memoizedState;
		if (l !== null) {
			t.pending = null;
			var i = (l = l.next);
			do (o = e(o, i.action)), (i = i.next);
			while (i !== l);
			ln(o, n.memoizedState) || (Ve = !0),
				(n.memoizedState = o),
				n.baseQueue === null && (n.baseState = o),
				(t.lastRenderedState = o);
		}
		return [o, r];
	}
	function fs() {}
	function ds(e, n) {
		var t = pe,
			r = be(),
			l = n(),
			o = !ln(r.memoizedState, l);
		if (
			(o && ((r.memoizedState = l), (Ve = !0)),
			(r = r.queue),
			Ko(hs.bind(null, t, r, e), [e]),
			r.getSnapshot !== n || o || (xe !== null && xe.memoizedState.tag & 1))
		) {
			if (
				((t.flags |= 2048),
				dr(9, ms.bind(null, t, r, l, n), void 0, null),
				Ce === null)
			)
				throw Error(m(349));
			tt & 30 || ps(t, n, l);
		}
		return l;
	}
	function ps(e, n, t) {
		(e.flags |= 16384),
			(e = { getSnapshot: n, value: t }),
			(n = pe.updateQueue),
			n === null
				? ((n = { lastEffect: null, stores: null }),
				  (pe.updateQueue = n),
				  (n.stores = [e]))
				: ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
	}
	function ms(e, n, t, r) {
		(n.value = t), (n.getSnapshot = r), vs(n) && ys(e);
	}
	function hs(e, n, t) {
		return t(function () {
			vs(n) && ys(e);
		});
	}
	function vs(e) {
		var n = e.getSnapshot;
		e = e.value;
		try {
			var t = n();
			return !ln(e, t);
		} catch {
			return !0;
		}
	}
	function ys(e) {
		var n = Cn(e, 1);
		n !== null && cn(n, e, 1, -1);
	}
	function gs(e) {
		var n = yn();
		return (
			typeof e == "function" && (e = e()),
			(n.memoizedState = n.baseState = e),
			(e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: fr,
				lastRenderedState: e,
			}),
			(n.queue = e),
			(e = e.dispatch = rf.bind(null, pe, e)),
			[n.memoizedState, e]
		);
	}
	function dr(e, n, t, r) {
		return (
			(e = { tag: e, create: n, destroy: t, deps: r, next: null }),
			(n = pe.updateQueue),
			n === null
				? ((n = { lastEffect: null, stores: null }),
				  (pe.updateQueue = n),
				  (n.lastEffect = e.next = e))
				: ((t = n.lastEffect),
				  t === null
						? (n.lastEffect = e.next = e)
						: ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
			e
		);
	}
	function ws() {
		return be().memoizedState;
	}
	function il(e, n, t, r) {
		var l = yn();
		(pe.flags |= e),
			(l.memoizedState = dr(1 | n, t, void 0, r === void 0 ? null : r));
	}
	function ul(e, n, t, r) {
		var l = be();
		r = r === void 0 ? null : r;
		var o = void 0;
		if (Se !== null) {
			var i = Se.memoizedState;
			if (((o = i.destroy), r !== null && Bo(r, i.deps))) {
				l.memoizedState = dr(n, t, o, r);
				return;
			}
		}
		(pe.flags |= e), (l.memoizedState = dr(1 | n, t, o, r));
	}
	function ks(e, n) {
		return il(8390656, 8, e, n);
	}
	function Ko(e, n) {
		return ul(2048, 8, e, n);
	}
	function Ss(e, n) {
		return ul(4, 2, e, n);
	}
	function Es(e, n) {
		return ul(4, 4, e, n);
	}
	function xs(e, n) {
		if (typeof n == "function")
			return (
				(e = e()),
				n(e),
				function () {
					n(null);
				}
			);
		if (n != null)
			return (
				(e = e()),
				(n.current = e),
				function () {
					n.current = null;
				}
			);
	}
	function Cs(e, n, t) {
		return (
			(t = t != null ? t.concat([e]) : null), ul(4, 4, xs.bind(null, n, e), t)
		);
	}
	function Go() {}
	function _s(e, n) {
		var t = be();
		n = n === void 0 ? null : n;
		var r = t.memoizedState;
		return r !== null && n !== null && Bo(n, r[1])
			? r[0]
			: ((t.memoizedState = [e, n]), e);
	}
	function Ps(e, n) {
		var t = be();
		n = n === void 0 ? null : n;
		var r = t.memoizedState;
		return r !== null && n !== null && Bo(n, r[1])
			? r[0]
			: ((e = e()), (t.memoizedState = [e, n]), e);
	}
	function Ns(e, n, t) {
		return tt & 21
			? (ln(t, n) ||
					((t = ru()), (pe.lanes |= t), (rt |= t), (e.baseState = !0)),
			  n)
			: (e.baseState && ((e.baseState = !1), (Ve = !0)), (e.memoizedState = t));
	}
	function nf(e, n) {
		var t = Y;
		(Y = t !== 0 && 4 > t ? t : 4), e(!0);
		var r = Vo.transition;
		Vo.transition = {};
		try {
			e(!1), n();
		} finally {
			(Y = t), (Vo.transition = r);
		}
	}
	function zs() {
		return be().memoizedState;
	}
	function tf(e, n, t) {
		var r = Wn(e);
		if (
			((t = {
				lane: r,
				action: t,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			Fs(e))
		)
			Ls(n, t);
		else if (((t = is(e, n, t, r)), t !== null)) {
			var l = je();
			cn(t, e, r, l), Ts(t, n, r);
		}
	}
	function rf(e, n, t) {
		var r = Wn(e),
			l = {
				lane: r,
				action: t,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			};
		if (Fs(e)) Ls(n, l);
		else {
			var o = e.alternate;
			if (
				e.lanes === 0 &&
				(o === null || o.lanes === 0) &&
				((o = n.lastRenderedReducer), o !== null)
			)
				try {
					var i = n.lastRenderedState,
						u = o(i, t);
					if (((l.hasEagerState = !0), (l.eagerState = u), ln(u, i))) {
						var s = n.interleaved;
						s === null
							? ((l.next = l), Do(n))
							: ((l.next = s.next), (s.next = l)),
							(n.interleaved = l);
						return;
					}
				} catch {
				} finally {
				}
			(t = is(e, n, l, r)),
				t !== null && ((l = je()), cn(t, e, r, l), Ts(t, n, r));
		}
	}
	function Fs(e) {
		var n = e.alternate;
		return e === pe || (n !== null && n === pe);
	}
	function Ls(e, n) {
		ar = ol = !0;
		var t = e.pending;
		t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
			(e.pending = n);
	}
	function Ts(e, n, t) {
		if (t & 4194240) {
			var r = n.lanes;
			(r &= e.pendingLanes), (t |= r), (n.lanes = t), Yl(e, t);
		}
	}
	var sl = {
			readContext: qe,
			useCallback: Le,
			useContext: Le,
			useEffect: Le,
			useImperativeHandle: Le,
			useInsertionEffect: Le,
			useLayoutEffect: Le,
			useMemo: Le,
			useReducer: Le,
			useRef: Le,
			useState: Le,
			useDebugValue: Le,
			useDeferredValue: Le,
			useTransition: Le,
			useMutableSource: Le,
			useSyncExternalStore: Le,
			useId: Le,
			unstable_isNewReconciler: !1,
		},
		lf = {
			readContext: qe,
			useCallback: function (e, n) {
				return (yn().memoizedState = [e, n === void 0 ? null : n]), e;
			},
			useContext: qe,
			useEffect: ks,
			useImperativeHandle: function (e, n, t) {
				return (
					(t = t != null ? t.concat([e]) : null),
					il(4194308, 4, xs.bind(null, n, e), t)
				);
			},
			useLayoutEffect: function (e, n) {
				return il(4194308, 4, e, n);
			},
			useInsertionEffect: function (e, n) {
				return il(4, 2, e, n);
			},
			useMemo: function (e, n) {
				var t = yn();
				return (
					(n = n === void 0 ? null : n),
					(e = e()),
					(t.memoizedState = [e, n]),
					e
				);
			},
			useReducer: function (e, n, t) {
				var r = yn();
				return (
					(n = t !== void 0 ? t(n) : n),
					(r.memoizedState = r.baseState = n),
					(e = {
						pending: null,
						interleaved: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: e,
						lastRenderedState: n,
					}),
					(r.queue = e),
					(e = e.dispatch = tf.bind(null, pe, e)),
					[r.memoizedState, e]
				);
			},
			useRef: function (e) {
				var n = yn();
				return (e = { current: e }), (n.memoizedState = e);
			},
			useState: gs,
			useDebugValue: Go,
			useDeferredValue: function (e) {
				return (yn().memoizedState = e);
			},
			useTransition: function () {
				var e = gs(!1),
					n = e[0];
				return (e = nf.bind(null, e[1])), (yn().memoizedState = e), [n, e];
			},
			useMutableSource: function () {},
			useSyncExternalStore: function (e, n, t) {
				var r = pe,
					l = yn();
				if (ue) {
					if (t === void 0) throw Error(m(407));
					t = t();
				} else {
					if (((t = n()), Ce === null)) throw Error(m(349));
					tt & 30 || ps(r, n, t);
				}
				l.memoizedState = t;
				var o = { value: t, getSnapshot: n };
				return (
					(l.queue = o),
					ks(hs.bind(null, r, o, e), [e]),
					(r.flags |= 2048),
					dr(9, ms.bind(null, r, o, t, n), void 0, null),
					t
				);
			},
			useId: function () {
				var e = yn(),
					n = Ce.identifierPrefix;
				if (ue) {
					var t = xn,
						r = En;
					(t = (r & ~(1 << (32 - rn(r) - 1))).toString(32) + t),
						(n = ":" + n + "R" + t),
						(t = cr++),
						0 < t && (n += "H" + t.toString(32)),
						(n += ":");
				} else (t = ef++), (n = ":" + n + "r" + t.toString(32) + ":");
				return (e.memoizedState = n);
			},
			unstable_isNewReconciler: !1,
		},
		of = {
			readContext: qe,
			useCallback: _s,
			useContext: qe,
			useEffect: Ko,
			useImperativeHandle: Cs,
			useInsertionEffect: Ss,
			useLayoutEffect: Es,
			useMemo: Ps,
			useReducer: Wo,
			useRef: ws,
			useState: function () {
				return Wo(fr);
			},
			useDebugValue: Go,
			useDeferredValue: function (e) {
				var n = be();
				return Ns(n, Se.memoizedState, e);
			},
			useTransition: function () {
				var e = Wo(fr)[0],
					n = be().memoizedState;
				return [e, n];
			},
			useMutableSource: fs,
			useSyncExternalStore: ds,
			useId: zs,
			unstable_isNewReconciler: !1,
		},
		uf = {
			readContext: qe,
			useCallback: _s,
			useContext: qe,
			useEffect: Ko,
			useImperativeHandle: Cs,
			useInsertionEffect: Ss,
			useLayoutEffect: Es,
			useMemo: Ps,
			useReducer: Qo,
			useRef: ws,
			useState: function () {
				return Qo(fr);
			},
			useDebugValue: Go,
			useDeferredValue: function (e) {
				var n = be();
				return Se === null ? (n.memoizedState = e) : Ns(n, Se.memoizedState, e);
			},
			useTransition: function () {
				var e = Qo(fr)[0],
					n = be().memoizedState;
				return [e, n];
			},
			useMutableSource: fs,
			useSyncExternalStore: ds,
			useId: zs,
			unstable_isNewReconciler: !1,
		};
	function un(e, n) {
		if (e && e.defaultProps) {
			(n = C({}, n)), (e = e.defaultProps);
			for (var t in e) n[t] === void 0 && (n[t] = e[t]);
			return n;
		}
		return n;
	}
	function Yo(e, n, t, r) {
		(n = e.memoizedState),
			(t = t(r, n)),
			(t = t == null ? n : C({}, n, t)),
			(e.memoizedState = t),
			e.lanes === 0 && (e.updateQueue.baseState = t);
	}
	var al = {
		isMounted: function (e) {
			return (e = e._reactInternals) ? Xn(e) === e : !1;
		},
		enqueueSetState: function (e, n, t) {
			e = e._reactInternals;
			var r = je(),
				l = Wn(e),
				o = _n(r, l);
			(o.payload = n),
				t != null && (o.callback = t),
				(n = Vn(e, o, l)),
				n !== null && (cn(n, e, l, r), nl(n, e, l));
		},
		enqueueReplaceState: function (e, n, t) {
			e = e._reactInternals;
			var r = je(),
				l = Wn(e),
				o = _n(r, l);
			(o.tag = 1),
				(o.payload = n),
				t != null && (o.callback = t),
				(n = Vn(e, o, l)),
				n !== null && (cn(n, e, l, r), nl(n, e, l));
		},
		enqueueForceUpdate: function (e, n) {
			e = e._reactInternals;
			var t = je(),
				r = Wn(e),
				l = _n(t, r);
			(l.tag = 2),
				n != null && (l.callback = n),
				(n = Vn(e, l, r)),
				n !== null && (cn(n, e, r, t), nl(n, e, r));
		},
	};
	function Rs(e, n, t, r, l, o, i) {
		return (
			(e = e.stateNode),
			typeof e.shouldComponentUpdate == "function"
				? e.shouldComponentUpdate(r, o, i)
				: n.prototype && n.prototype.isPureReactComponent
				? !qt(t, r) || !qt(l, o)
				: !0
		);
	}
	function Ms(e, n, t) {
		var r = !1,
			l = In,
			o = n.contextType;
		return (
			typeof o == "object" && o !== null
				? (o = qe(o))
				: ((l = Ae(n) ? Zn : Fe.current),
				  (r = n.contextTypes),
				  (o = (r = r != null) ? kt(e, l) : In)),
			(n = new n(t, o)),
			(e.memoizedState =
				n.state !== null && n.state !== void 0 ? n.state : null),
			(n.updater = al),
			(e.stateNode = n),
			(n._reactInternals = e),
			r &&
				((e = e.stateNode),
				(e.__reactInternalMemoizedUnmaskedChildContext = l),
				(e.__reactInternalMemoizedMaskedChildContext = o)),
			n
		);
	}
	function Ds(e, n, t, r) {
		(e = n.state),
			typeof n.componentWillReceiveProps == "function" &&
				n.componentWillReceiveProps(t, r),
			typeof n.UNSAFE_componentWillReceiveProps == "function" &&
				n.UNSAFE_componentWillReceiveProps(t, r),
			n.state !== e && al.enqueueReplaceState(n, n.state, null);
	}
	function Xo(e, n, t, r) {
		var l = e.stateNode;
		(l.props = t), (l.state = e.memoizedState), (l.refs = {}), jo(e);
		var o = n.contextType;
		typeof o == "object" && o !== null
			? (l.context = qe(o))
			: ((o = Ae(n) ? Zn : Fe.current), (l.context = kt(e, o))),
			(l.state = e.memoizedState),
			(o = n.getDerivedStateFromProps),
			typeof o == "function" && (Yo(e, n, o, t), (l.state = e.memoizedState)),
			typeof n.getDerivedStateFromProps == "function" ||
				typeof l.getSnapshotBeforeUpdate == "function" ||
				(typeof l.UNSAFE_componentWillMount != "function" &&
					typeof l.componentWillMount != "function") ||
				((n = l.state),
				typeof l.componentWillMount == "function" && l.componentWillMount(),
				typeof l.UNSAFE_componentWillMount == "function" &&
					l.UNSAFE_componentWillMount(),
				n !== l.state && al.enqueueReplaceState(l, l.state, null),
				tl(e, t, l, r),
				(l.state = e.memoizedState)),
			typeof l.componentDidMount == "function" && (e.flags |= 4194308);
	}
	function zt(e, n) {
		try {
			var t = "",
				r = n;
			do (t += $(r)), (r = r.return);
			while (r);
			var l = t;
		} catch (o) {
			l =
				`
Error generating stack: ` +
				o.message +
				`
` +
				o.stack;
		}
		return { value: e, source: n, stack: l, digest: null };
	}
	function Jo(e, n, t) {
		return { value: e, source: null, stack: t ?? null, digest: n ?? null };
	}
	function Zo(e, n) {
		try {
			console.error(n.value);
		} catch (t) {
			setTimeout(function () {
				throw t;
			});
		}
	}
	var sf = typeof WeakMap == "function" ? WeakMap : Map;
	function js(e, n, t) {
		(t = _n(-1, t)), (t.tag = 3), (t.payload = { element: null });
		var r = n.value;
		return (
			(t.callback = function () {
				vl || ((vl = !0), (di = r)), Zo(e, n);
			}),
			t
		);
	}
	function Os(e, n, t) {
		(t = _n(-1, t)), (t.tag = 3);
		var r = e.type.getDerivedStateFromError;
		if (typeof r == "function") {
			var l = n.value;
			(t.payload = function () {
				return r(l);
			}),
				(t.callback = function () {
					Zo(e, n);
				});
		}
		var o = e.stateNode;
		return (
			o !== null &&
				typeof o.componentDidCatch == "function" &&
				(t.callback = function () {
					Zo(e, n),
						typeof r != "function" &&
							(Hn === null ? (Hn = new Set([this])) : Hn.add(this));
					var i = n.stack;
					this.componentDidCatch(n.value, {
						componentStack: i !== null ? i : "",
					});
				}),
			t
		);
	}
	function Is(e, n, t) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new sf();
			var l = new Set();
			r.set(n, l);
		} else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
		l.has(t) || (l.add(t), (e = Ef.bind(null, e, n, t)), n.then(e, e));
	}
	function Us(e) {
		do {
			var n;
			if (
				((n = e.tag === 13) &&
					((n = e.memoizedState),
					(n = n !== null ? n.dehydrated !== null : !0)),
				n)
			)
				return e;
			e = e.return;
		} while (e !== null);
		return null;
	}
	function As(e, n, t, r, l) {
		return e.mode & 1
			? ((e.flags |= 65536), (e.lanes = l), e)
			: (e === n
					? (e.flags |= 65536)
					: ((e.flags |= 128),
					  (t.flags |= 131072),
					  (t.flags &= -52805),
					  t.tag === 1 &&
							(t.alternate === null
								? (t.tag = 17)
								: ((n = _n(-1, 1)), (n.tag = 2), Vn(t, n, 1))),
					  (t.lanes |= 1)),
			  e);
	}
	var af = q.ReactCurrentOwner,
		Ve = !1;
	function De(e, n, t, r) {
		n.child = e === null ? os(n, null, t, r) : Ct(n, e.child, t, r);
	}
	function Vs(e, n, t, r, l) {
		t = t.render;
		var o = n.ref;
		return (
			Pt(n, l),
			(r = Ho(e, n, t, r, o, l)),
			(t = $o()),
			e !== null && !Ve
				? ((n.updateQueue = e.updateQueue),
				  (n.flags &= -2053),
				  (e.lanes &= ~l),
				  Pn(e, n, l))
				: (ue && t && _o(n), (n.flags |= 1), De(e, n, r, l), n.child)
		);
	}
	function Bs(e, n, t, r, l) {
		if (e === null) {
			var o = t.type;
			return typeof o == "function" &&
				!wi(o) &&
				o.defaultProps === void 0 &&
				t.compare === null &&
				t.defaultProps === void 0
				? ((n.tag = 15), (n.type = o), Hs(e, n, o, r, l))
				: ((e = El(t.type, null, r, n, n.mode, l)),
				  (e.ref = n.ref),
				  (e.return = n),
				  (n.child = e));
		}
		if (((o = e.child), !(e.lanes & l))) {
			var i = o.memoizedProps;
			if (
				((t = t.compare), (t = t !== null ? t : qt), t(i, r) && e.ref === n.ref)
			)
				return Pn(e, n, l);
		}
		return (
			(n.flags |= 1),
			(e = Kn(o, r)),
			(e.ref = n.ref),
			(e.return = n),
			(n.child = e)
		);
	}
	function Hs(e, n, t, r, l) {
		if (e !== null) {
			var o = e.memoizedProps;
			if (qt(o, r) && e.ref === n.ref)
				if (((Ve = !1), (n.pendingProps = r = o), (e.lanes & l) !== 0))
					e.flags & 131072 && (Ve = !0);
				else return (n.lanes = e.lanes), Pn(e, n, l);
		}
		return qo(e, n, t, r, l);
	}
	function $s(e, n, t) {
		var r = n.pendingProps,
			l = r.children,
			o = e !== null ? e.memoizedState : null;
		if (r.mode === "hidden")
			if (!(n.mode & 1))
				(n.memoizedState = {
					baseLanes: 0,
					cachePool: null,
					transitions: null,
				}),
					ee(Lt, Xe),
					(Xe |= t);
			else {
				if (!(t & 1073741824))
					return (
						(e = o !== null ? o.baseLanes | t : t),
						(n.lanes = n.childLanes = 1073741824),
						(n.memoizedState = {
							baseLanes: e,
							cachePool: null,
							transitions: null,
						}),
						(n.updateQueue = null),
						ee(Lt, Xe),
						(Xe |= e),
						null
					);
				(n.memoizedState = {
					baseLanes: 0,
					cachePool: null,
					transitions: null,
				}),
					(r = o !== null ? o.baseLanes : t),
					ee(Lt, Xe),
					(Xe |= r);
			}
		else
			o !== null ? ((r = o.baseLanes | t), (n.memoizedState = null)) : (r = t),
				ee(Lt, Xe),
				(Xe |= r);
		return De(e, n, l, t), n.child;
	}
	function Ws(e, n) {
		var t = n.ref;
		((e === null && t !== null) || (e !== null && e.ref !== t)) &&
			((n.flags |= 512), (n.flags |= 2097152));
	}
	function qo(e, n, t, r, l) {
		var o = Ae(t) ? Zn : Fe.current;
		return (
			(o = kt(n, o)),
			Pt(n, l),
			(t = Ho(e, n, t, r, o, l)),
			(r = $o()),
			e !== null && !Ve
				? ((n.updateQueue = e.updateQueue),
				  (n.flags &= -2053),
				  (e.lanes &= ~l),
				  Pn(e, n, l))
				: (ue && r && _o(n), (n.flags |= 1), De(e, n, t, l), n.child)
		);
	}
	function Qs(e, n, t, r, l) {
		if (Ae(t)) {
			var o = !0;
			Gr(n);
		} else o = !1;
		if ((Pt(n, l), n.stateNode === null))
			fl(e, n), Ms(n, t, r), Xo(n, t, r, l), (r = !0);
		else if (e === null) {
			var i = n.stateNode,
				u = n.memoizedProps;
			i.props = u;
			var s = i.context,
				p = t.contextType;
			typeof p == "object" && p !== null
				? (p = qe(p))
				: ((p = Ae(t) ? Zn : Fe.current), (p = kt(n, p)));
			var y = t.getDerivedStateFromProps,
				g =
					typeof y == "function" ||
					typeof i.getSnapshotBeforeUpdate == "function";
			g ||
				(typeof i.UNSAFE_componentWillReceiveProps != "function" &&
					typeof i.componentWillReceiveProps != "function") ||
				((u !== r || s !== p) && Ds(n, i, r, p)),
				(An = !1);
			var h = n.memoizedState;
			(i.state = h),
				tl(n, r, i, l),
				(s = n.memoizedState),
				u !== r || h !== s || Ue.current || An
					? (typeof y == "function" && (Yo(n, t, y, r), (s = n.memoizedState)),
					  (u = An || Rs(n, t, u, r, h, s, p))
							? (g ||
									(typeof i.UNSAFE_componentWillMount != "function" &&
										typeof i.componentWillMount != "function") ||
									(typeof i.componentWillMount == "function" &&
										i.componentWillMount(),
									typeof i.UNSAFE_componentWillMount == "function" &&
										i.UNSAFE_componentWillMount()),
							  typeof i.componentDidMount == "function" &&
									(n.flags |= 4194308))
							: (typeof i.componentDidMount == "function" &&
									(n.flags |= 4194308),
							  (n.memoizedProps = r),
							  (n.memoizedState = s)),
					  (i.props = r),
					  (i.state = s),
					  (i.context = p),
					  (r = u))
					: (typeof i.componentDidMount == "function" && (n.flags |= 4194308),
					  (r = !1));
		} else {
			(i = n.stateNode),
				us(e, n),
				(u = n.memoizedProps),
				(p = n.type === n.elementType ? u : un(n.type, u)),
				(i.props = p),
				(g = n.pendingProps),
				(h = i.context),
				(s = t.contextType),
				typeof s == "object" && s !== null
					? (s = qe(s))
					: ((s = Ae(t) ? Zn : Fe.current), (s = kt(n, s)));
			var S = t.getDerivedStateFromProps;
			(y =
				typeof S == "function" ||
				typeof i.getSnapshotBeforeUpdate == "function") ||
				(typeof i.UNSAFE_componentWillReceiveProps != "function" &&
					typeof i.componentWillReceiveProps != "function") ||
				((u !== g || h !== s) && Ds(n, i, r, s)),
				(An = !1),
				(h = n.memoizedState),
				(i.state = h),
				tl(n, r, i, l);
			var _ = n.memoizedState;
			u !== g || h !== _ || Ue.current || An
				? (typeof S == "function" && (Yo(n, t, S, r), (_ = n.memoizedState)),
				  (p = An || Rs(n, t, p, r, h, _, s) || !1)
						? (y ||
								(typeof i.UNSAFE_componentWillUpdate != "function" &&
									typeof i.componentWillUpdate != "function") ||
								(typeof i.componentWillUpdate == "function" &&
									i.componentWillUpdate(r, _, s),
								typeof i.UNSAFE_componentWillUpdate == "function" &&
									i.UNSAFE_componentWillUpdate(r, _, s)),
						  typeof i.componentDidUpdate == "function" && (n.flags |= 4),
						  typeof i.getSnapshotBeforeUpdate == "function" &&
								(n.flags |= 1024))
						: (typeof i.componentDidUpdate != "function" ||
								(u === e.memoizedProps && h === e.memoizedState) ||
								(n.flags |= 4),
						  typeof i.getSnapshotBeforeUpdate != "function" ||
								(u === e.memoizedProps && h === e.memoizedState) ||
								(n.flags |= 1024),
						  (n.memoizedProps = r),
						  (n.memoizedState = _)),
				  (i.props = r),
				  (i.state = _),
				  (i.context = s),
				  (r = p))
				: (typeof i.componentDidUpdate != "function" ||
						(u === e.memoizedProps && h === e.memoizedState) ||
						(n.flags |= 4),
				  typeof i.getSnapshotBeforeUpdate != "function" ||
						(u === e.memoizedProps && h === e.memoizedState) ||
						(n.flags |= 1024),
				  (r = !1));
		}
		return bo(e, n, t, r, o, l);
	}
	function bo(e, n, t, r, l, o) {
		Ws(e, n);
		var i = (n.flags & 128) !== 0;
		if (!r && !i) return l && Ju(n, t, !1), Pn(e, n, o);
		(r = n.stateNode), (af.current = n);
		var u =
			i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
		return (
			(n.flags |= 1),
			e !== null && i
				? ((n.child = Ct(n, e.child, null, o)), (n.child = Ct(n, null, u, o)))
				: De(e, n, u, o),
			(n.memoizedState = r.state),
			l && Ju(n, t, !0),
			n.child
		);
	}
	function Ks(e) {
		var n = e.stateNode;
		n.pendingContext
			? Yu(e, n.pendingContext, n.pendingContext !== n.context)
			: n.context && Yu(e, n.context, !1),
			Oo(e, n.containerInfo);
	}
	function Gs(e, n, t, r, l) {
		return xt(), Fo(l), (n.flags |= 256), De(e, n, t, r), n.child;
	}
	var ei = { dehydrated: null, treeContext: null, retryLane: 0 };
	function ni(e) {
		return { baseLanes: e, cachePool: null, transitions: null };
	}
	function Ys(e, n, t) {
		var r = n.pendingProps,
			l = de.current,
			o = !1,
			i = (n.flags & 128) !== 0,
			u;
		if (
			((u = i) ||
				(u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
			u
				? ((o = !0), (n.flags &= -129))
				: (e === null || e.memoizedState !== null) && (l |= 1),
			ee(de, l & 1),
			e === null)
		)
			return (
				zo(n),
				(e = n.memoizedState),
				e !== null && ((e = e.dehydrated), e !== null)
					? (n.mode & 1
							? e.data === "$!"
								? (n.lanes = 8)
								: (n.lanes = 1073741824)
							: (n.lanes = 1),
					  null)
					: ((i = r.children),
					  (e = r.fallback),
					  o
							? ((r = n.mode),
							  (o = n.child),
							  (i = { mode: "hidden", children: i }),
							  !(r & 1) && o !== null
									? ((o.childLanes = 0), (o.pendingProps = i))
									: (o = xl(i, r, 0, null)),
							  (e = ut(e, r, t, null)),
							  (o.return = n),
							  (e.return = n),
							  (o.sibling = e),
							  (n.child = o),
							  (n.child.memoizedState = ni(t)),
							  (n.memoizedState = ei),
							  e)
							: ti(n, i))
			);
		if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
			return cf(e, n, i, r, u, l, t);
		if (o) {
			(o = r.fallback), (i = n.mode), (l = e.child), (u = l.sibling);
			var s = { mode: "hidden", children: r.children };
			return (
				!(i & 1) && n.child !== l
					? ((r = n.child),
					  (r.childLanes = 0),
					  (r.pendingProps = s),
					  (n.deletions = null))
					: ((r = Kn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
				u !== null ? (o = Kn(u, o)) : ((o = ut(o, i, t, null)), (o.flags |= 2)),
				(o.return = n),
				(r.return = n),
				(r.sibling = o),
				(n.child = r),
				(r = o),
				(o = n.child),
				(i = e.child.memoizedState),
				(i =
					i === null
						? ni(t)
						: {
								baseLanes: i.baseLanes | t,
								cachePool: null,
								transitions: i.transitions,
						  }),
				(o.memoizedState = i),
				(o.childLanes = e.childLanes & ~t),
				(n.memoizedState = ei),
				r
			);
		}
		return (
			(o = e.child),
			(e = o.sibling),
			(r = Kn(o, { mode: "visible", children: r.children })),
			!(n.mode & 1) && (r.lanes = t),
			(r.return = n),
			(r.sibling = null),
			e !== null &&
				((t = n.deletions),
				t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
			(n.child = r),
			(n.memoizedState = null),
			r
		);
	}
	function ti(e, n) {
		return (
			(n = xl({ mode: "visible", children: n }, e.mode, 0, null)),
			(n.return = e),
			(e.child = n)
		);
	}
	function cl(e, n, t, r) {
		return (
			r !== null && Fo(r),
			Ct(n, e.child, null, t),
			(e = ti(n, n.pendingProps.children)),
			(e.flags |= 2),
			(n.memoizedState = null),
			e
		);
	}
	function cf(e, n, t, r, l, o, i) {
		if (t)
			return n.flags & 256
				? ((n.flags &= -257), (r = Jo(Error(m(422)))), cl(e, n, i, r))
				: n.memoizedState !== null
				? ((n.child = e.child), (n.flags |= 128), null)
				: ((o = r.fallback),
				  (l = n.mode),
				  (r = xl({ mode: "visible", children: r.children }, l, 0, null)),
				  (o = ut(o, l, i, null)),
				  (o.flags |= 2),
				  (r.return = n),
				  (o.return = n),
				  (r.sibling = o),
				  (n.child = r),
				  n.mode & 1 && Ct(n, e.child, null, i),
				  (n.child.memoizedState = ni(i)),
				  (n.memoizedState = ei),
				  o);
		if (!(n.mode & 1)) return cl(e, n, i, null);
		if (l.data === "$!") {
			if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
			return (
				(r = u), (o = Error(m(419))), (r = Jo(o, r, void 0)), cl(e, n, i, r)
			);
		}
		if (((u = (i & e.childLanes) !== 0), Ve || u)) {
			if (((r = Ce), r !== null)) {
				switch (i & -i) {
					case 4:
						l = 2;
						break;
					case 16:
						l = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						l = 32;
						break;
					case 536870912:
						l = 268435456;
						break;
					default:
						l = 0;
				}
				(l = l & (r.suspendedLanes | i) ? 0 : l),
					l !== 0 &&
						l !== o.retryLane &&
						((o.retryLane = l), Cn(e, l), cn(r, e, l, -1));
			}
			return gi(), (r = Jo(Error(m(421)))), cl(e, n, i, r);
		}
		return l.data === "$?"
			? ((n.flags |= 128),
			  (n.child = e.child),
			  (n = xf.bind(null, e)),
			  (l._reactRetry = n),
			  null)
			: ((e = o.treeContext),
			  (Ye = jn(l.nextSibling)),
			  (Ge = n),
			  (ue = !0),
			  (on = null),
			  e !== null &&
					((Je[Ze++] = En),
					(Je[Ze++] = xn),
					(Je[Ze++] = qn),
					(En = e.id),
					(xn = e.overflow),
					(qn = n)),
			  (n = ti(n, r.children)),
			  (n.flags |= 4096),
			  n);
	}
	function Xs(e, n, t) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n), Mo(e.return, n, t);
	}
	function ri(e, n, t, r, l) {
		var o = e.memoizedState;
		o === null
			? (e.memoizedState = {
					isBackwards: n,
					rendering: null,
					renderingStartTime: 0,
					last: r,
					tail: t,
					tailMode: l,
			  })
			: ((o.isBackwards = n),
			  (o.rendering = null),
			  (o.renderingStartTime = 0),
			  (o.last = r),
			  (o.tail = t),
			  (o.tailMode = l));
	}
	function Js(e, n, t) {
		var r = n.pendingProps,
			l = r.revealOrder,
			o = r.tail;
		if ((De(e, n, r.children, t), (r = de.current), r & 2))
			(r = (r & 1) | 2), (n.flags |= 128);
		else {
			if (e !== null && e.flags & 128)
				e: for (e = n.child; e !== null; ) {
					if (e.tag === 13) e.memoizedState !== null && Xs(e, t, n);
					else if (e.tag === 19) Xs(e, t, n);
					else if (e.child !== null) {
						(e.child.return = e), (e = e.child);
						continue;
					}
					if (e === n) break e;
					for (; e.sibling === null; ) {
						if (e.return === null || e.return === n) break e;
						e = e.return;
					}
					(e.sibling.return = e.return), (e = e.sibling);
				}
			r &= 1;
		}
		if ((ee(de, r), !(n.mode & 1))) n.memoizedState = null;
		else
			switch (l) {
				case "forwards":
					for (t = n.child, l = null; t !== null; )
						(e = t.alternate),
							e !== null && rl(e) === null && (l = t),
							(t = t.sibling);
					(t = l),
						t === null
							? ((l = n.child), (n.child = null))
							: ((l = t.sibling), (t.sibling = null)),
						ri(n, !1, l, t, o);
					break;
				case "backwards":
					for (t = null, l = n.child, n.child = null; l !== null; ) {
						if (((e = l.alternate), e !== null && rl(e) === null)) {
							n.child = l;
							break;
						}
						(e = l.sibling), (l.sibling = t), (t = l), (l = e);
					}
					ri(n, !0, t, null, o);
					break;
				case "together":
					ri(n, !1, null, null, void 0);
					break;
				default:
					n.memoizedState = null;
			}
		return n.child;
	}
	function fl(e, n) {
		!(n.mode & 1) &&
			e !== null &&
			((e.alternate = null), (n.alternate = null), (n.flags |= 2));
	}
	function Pn(e, n, t) {
		if (
			(e !== null && (n.dependencies = e.dependencies),
			(rt |= n.lanes),
			!(t & n.childLanes))
		)
			return null;
		if (e !== null && n.child !== e.child) throw Error(m(153));
		if (n.child !== null) {
			for (
				e = n.child, t = Kn(e, e.pendingProps), n.child = t, t.return = n;
				e.sibling !== null;

			)
				(e = e.sibling),
					(t = t.sibling = Kn(e, e.pendingProps)),
					(t.return = n);
			t.sibling = null;
		}
		return n.child;
	}
	function ff(e, n, t) {
		switch (n.tag) {
			case 3:
				Ks(n), xt();
				break;
			case 5:
				cs(n);
				break;
			case 1:
				Ae(n.type) && Gr(n);
				break;
			case 4:
				Oo(n, n.stateNode.containerInfo);
				break;
			case 10:
				var r = n.type._context,
					l = n.memoizedProps.value;
				ee(br, r._currentValue), (r._currentValue = l);
				break;
			case 13:
				if (((r = n.memoizedState), r !== null))
					return r.dehydrated !== null
						? (ee(de, de.current & 1), (n.flags |= 128), null)
						: t & n.child.childLanes
						? Ys(e, n, t)
						: (ee(de, de.current & 1),
						  (e = Pn(e, n, t)),
						  e !== null ? e.sibling : null);
				ee(de, de.current & 1);
				break;
			case 19:
				if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
					if (r) return Js(e, n, t);
					n.flags |= 128;
				}
				if (
					((l = n.memoizedState),
					l !== null &&
						((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
					ee(de, de.current),
					r)
				)
					break;
				return null;
			case 22:
			case 23:
				return (n.lanes = 0), $s(e, n, t);
		}
		return Pn(e, n, t);
	}
	var Zs, li, qs, bs;
	(Zs = function (e, n) {
		for (var t = n.child; t !== null; ) {
			if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
			else if (t.tag !== 4 && t.child !== null) {
				(t.child.return = t), (t = t.child);
				continue;
			}
			if (t === n) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === n) return;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}),
		(li = function () {}),
		(qs = function (e, n, t, r) {
			var l = e.memoizedProps;
			if (l !== r) {
				(e = n.stateNode), nt(vn.current);
				var o = null;
				switch (t) {
					case "input":
						(l = Rl(e, l)), (r = Rl(e, r)), (o = []);
						break;
					case "select":
						(l = C({}, l, { value: void 0 })),
							(r = C({}, r, { value: void 0 })),
							(o = []);
						break;
					case "textarea":
						(l = jl(e, l)), (r = jl(e, r)), (o = []);
						break;
					default:
						typeof l.onClick != "function" &&
							typeof r.onClick == "function" &&
							(e.onclick = Wr);
				}
				Il(t, r);
				var i;
				t = null;
				for (p in l)
					if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
						if (p === "style") {
							var u = l[p];
							for (i in u) u.hasOwnProperty(i) && (t || (t = {}), (t[i] = ""));
						} else
							p !== "dangerouslySetInnerHTML" &&
								p !== "children" &&
								p !== "suppressContentEditableWarning" &&
								p !== "suppressHydrationWarning" &&
								p !== "autoFocus" &&
								(j.hasOwnProperty(p)
									? o || (o = [])
									: (o = o || []).push(p, null));
				for (p in r) {
					var s = r[p];
					if (
						((u = l != null ? l[p] : void 0),
						r.hasOwnProperty(p) && s !== u && (s != null || u != null))
					)
						if (p === "style")
							if (u) {
								for (i in u)
									!u.hasOwnProperty(i) ||
										(s && s.hasOwnProperty(i)) ||
										(t || (t = {}), (t[i] = ""));
								for (i in s)
									s.hasOwnProperty(i) &&
										u[i] !== s[i] &&
										(t || (t = {}), (t[i] = s[i]));
							} else t || (o || (o = []), o.push(p, t)), (t = s);
						else
							p === "dangerouslySetInnerHTML"
								? ((s = s ? s.__html : void 0),
								  (u = u ? u.__html : void 0),
								  s != null && u !== s && (o = o || []).push(p, s))
								: p === "children"
								? (typeof s != "string" && typeof s != "number") ||
								  (o = o || []).push(p, "" + s)
								: p !== "suppressContentEditableWarning" &&
								  p !== "suppressHydrationWarning" &&
								  (j.hasOwnProperty(p)
										? (s != null && p === "onScroll" && re("scroll", e),
										  o || u === s || (o = []))
										: (o = o || []).push(p, s));
				}
				t && (o = o || []).push("style", t);
				var p = o;
				(n.updateQueue = p) && (n.flags |= 4);
			}
		}),
		(bs = function (e, n, t, r) {
			t !== r && (n.flags |= 4);
		});
	function pr(e, n) {
		if (!ue)
			switch (e.tailMode) {
				case "hidden":
					n = e.tail;
					for (var t = null; n !== null; )
						n.alternate !== null && (t = n), (n = n.sibling);
					t === null ? (e.tail = null) : (t.sibling = null);
					break;
				case "collapsed":
					t = e.tail;
					for (var r = null; t !== null; )
						t.alternate !== null && (r = t), (t = t.sibling);
					r === null
						? n || e.tail === null
							? (e.tail = null)
							: (e.tail.sibling = null)
						: (r.sibling = null);
			}
	}
	function Te(e) {
		var n = e.alternate !== null && e.alternate.child === e.child,
			t = 0,
			r = 0;
		if (n)
			for (var l = e.child; l !== null; )
				(t |= l.lanes | l.childLanes),
					(r |= l.subtreeFlags & 14680064),
					(r |= l.flags & 14680064),
					(l.return = e),
					(l = l.sibling);
		else
			for (l = e.child; l !== null; )
				(t |= l.lanes | l.childLanes),
					(r |= l.subtreeFlags),
					(r |= l.flags),
					(l.return = e),
					(l = l.sibling);
		return (e.subtreeFlags |= r), (e.childLanes = t), n;
	}
	function df(e, n, t) {
		var r = n.pendingProps;
		switch ((Po(n), n.tag)) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return Te(n), null;
			case 1:
				return Ae(n.type) && Kr(), Te(n), null;
			case 3:
				return (
					(r = n.stateNode),
					Nt(),
					le(Ue),
					le(Fe),
					Ao(),
					r.pendingContext &&
						((r.context = r.pendingContext), (r.pendingContext = null)),
					(e === null || e.child === null) &&
						(Zr(n)
							? (n.flags |= 4)
							: e === null ||
							  (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
							  ((n.flags |= 1024), on !== null && (hi(on), (on = null)))),
					li(e, n),
					Te(n),
					null
				);
			case 5:
				Io(n);
				var l = nt(sr.current);
				if (((t = n.type), e !== null && n.stateNode != null))
					qs(e, n, t, r, l),
						e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
				else {
					if (!r) {
						if (n.stateNode === null) throw Error(m(166));
						return Te(n), null;
					}
					if (((e = nt(vn.current)), Zr(n))) {
						(r = n.stateNode), (t = n.type);
						var o = n.memoizedProps;
						switch (((r[hn] = n), (r[rr] = o), (e = (n.mode & 1) !== 0), t)) {
							case "dialog":
								re("cancel", r), re("close", r);
								break;
							case "iframe":
							case "object":
							case "embed":
								re("load", r);
								break;
							case "video":
							case "audio":
								for (l = 0; l < er.length; l++) re(er[l], r);
								break;
							case "source":
								re("error", r);
								break;
							case "img":
							case "image":
							case "link":
								re("error", r), re("load", r);
								break;
							case "details":
								re("toggle", r);
								break;
							case "input":
								Mi(r, o), re("invalid", r);
								break;
							case "select":
								(r._wrapperState = { wasMultiple: !!o.multiple }),
									re("invalid", r);
								break;
							case "textarea":
								Oi(r, o), re("invalid", r);
						}
						Il(t, o), (l = null);
						for (var i in o)
							if (o.hasOwnProperty(i)) {
								var u = o[i];
								i === "children"
									? typeof u == "string"
										? r.textContent !== u &&
										  (o.suppressHydrationWarning !== !0 &&
												$r(r.textContent, u, e),
										  (l = ["children", u]))
										: typeof u == "number" &&
										  r.textContent !== "" + u &&
										  (o.suppressHydrationWarning !== !0 &&
												$r(r.textContent, u, e),
										  (l = ["children", "" + u]))
									: j.hasOwnProperty(i) &&
									  u != null &&
									  i === "onScroll" &&
									  re("scroll", r);
							}
						switch (t) {
							case "input":
								kr(r), ji(r, o, !0);
								break;
							case "textarea":
								kr(r), Ui(r);
								break;
							case "select":
							case "option":
								break;
							default:
								typeof o.onClick == "function" && (r.onclick = Wr);
						}
						(r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
					} else {
						(i = l.nodeType === 9 ? l : l.ownerDocument),
							e === "http://www.w3.org/1999/xhtml" && (e = Ai(t)),
							e === "http://www.w3.org/1999/xhtml"
								? t === "script"
									? ((e = i.createElement("div")),
									  (e.innerHTML = "<script></script>"),
									  (e = e.removeChild(e.firstChild)))
									: typeof r.is == "string"
									? (e = i.createElement(t, { is: r.is }))
									: ((e = i.createElement(t)),
									  t === "select" &&
											((i = e),
											r.multiple
												? (i.multiple = !0)
												: r.size && (i.size = r.size)))
								: (e = i.createElementNS(e, t)),
							(e[hn] = n),
							(e[rr] = r),
							Zs(e, n, !1, !1),
							(n.stateNode = e);
						e: {
							switch (((i = Ul(t, r)), t)) {
								case "dialog":
									re("cancel", e), re("close", e), (l = r);
									break;
								case "iframe":
								case "object":
								case "embed":
									re("load", e), (l = r);
									break;
								case "video":
								case "audio":
									for (l = 0; l < er.length; l++) re(er[l], e);
									l = r;
									break;
								case "source":
									re("error", e), (l = r);
									break;
								case "img":
								case "image":
								case "link":
									re("error", e), re("load", e), (l = r);
									break;
								case "details":
									re("toggle", e), (l = r);
									break;
								case "input":
									Mi(e, r), (l = Rl(e, r)), re("invalid", e);
									break;
								case "option":
									l = r;
									break;
								case "select":
									(e._wrapperState = { wasMultiple: !!r.multiple }),
										(l = C({}, r, { value: void 0 })),
										re("invalid", e);
									break;
								case "textarea":
									Oi(e, r), (l = jl(e, r)), re("invalid", e);
									break;
								default:
									l = r;
							}
							Il(t, l), (u = l);
							for (o in u)
								if (u.hasOwnProperty(o)) {
									var s = u[o];
									o === "style"
										? Hi(e, s)
										: o === "dangerouslySetInnerHTML"
										? ((s = s ? s.__html : void 0), s != null && Vi(e, s))
										: o === "children"
										? typeof s == "string"
											? (t !== "textarea" || s !== "") && jt(e, s)
											: typeof s == "number" && jt(e, "" + s)
										: o !== "suppressContentEditableWarning" &&
										  o !== "suppressHydrationWarning" &&
										  o !== "autoFocus" &&
										  (j.hasOwnProperty(o)
												? s != null && o === "onScroll" && re("scroll", e)
												: s != null && V(e, o, s, i));
								}
							switch (t) {
								case "input":
									kr(e), ji(e, r, !1);
									break;
								case "textarea":
									kr(e), Ui(e);
									break;
								case "option":
									r.value != null && e.setAttribute("value", "" + G(r.value));
									break;
								case "select":
									(e.multiple = !!r.multiple),
										(o = r.value),
										o != null
											? st(e, !!r.multiple, o, !1)
											: r.defaultValue != null &&
											  st(e, !!r.multiple, r.defaultValue, !0);
									break;
								default:
									typeof l.onClick == "function" && (e.onclick = Wr);
							}
							switch (t) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									r = !!r.autoFocus;
									break e;
								case "img":
									r = !0;
									break e;
								default:
									r = !1;
							}
						}
						r && (n.flags |= 4);
					}
					n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
				}
				return Te(n), null;
			case 6:
				if (e && n.stateNode != null) bs(e, n, e.memoizedProps, r);
				else {
					if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
					if (((t = nt(sr.current)), nt(vn.current), Zr(n))) {
						if (
							((r = n.stateNode),
							(t = n.memoizedProps),
							(r[hn] = n),
							(o = r.nodeValue !== t) && ((e = Ge), e !== null))
						)
							switch (e.tag) {
								case 3:
									$r(r.nodeValue, t, (e.mode & 1) !== 0);
									break;
								case 5:
									e.memoizedProps.suppressHydrationWarning !== !0 &&
										$r(r.nodeValue, t, (e.mode & 1) !== 0);
							}
						o && (n.flags |= 4);
					} else
						(r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
							(r[hn] = n),
							(n.stateNode = r);
				}
				return Te(n), null;
			case 13:
				if (
					(le(de),
					(r = n.memoizedState),
					e === null ||
						(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
				) {
					if (ue && Ye !== null && n.mode & 1 && !(n.flags & 128))
						ts(), xt(), (n.flags |= 98560), (o = !1);
					else if (((o = Zr(n)), r !== null && r.dehydrated !== null)) {
						if (e === null) {
							if (!o) throw Error(m(318));
							if (
								((o = n.memoizedState),
								(o = o !== null ? o.dehydrated : null),
								!o)
							)
								throw Error(m(317));
							o[hn] = n;
						} else
							xt(),
								!(n.flags & 128) && (n.memoizedState = null),
								(n.flags |= 4);
						Te(n), (o = !1);
					} else on !== null && (hi(on), (on = null)), (o = !0);
					if (!o) return n.flags & 65536 ? n : null;
				}
				return n.flags & 128
					? ((n.lanes = t), n)
					: ((r = r !== null),
					  r !== (e !== null && e.memoizedState !== null) &&
							r &&
							((n.child.flags |= 8192),
							n.mode & 1 &&
								(e === null || de.current & 1 ? Ee === 0 && (Ee = 3) : gi())),
					  n.updateQueue !== null && (n.flags |= 4),
					  Te(n),
					  null);
			case 4:
				return (
					Nt(),
					li(e, n),
					e === null && nr(n.stateNode.containerInfo),
					Te(n),
					null
				);
			case 10:
				return Ro(n.type._context), Te(n), null;
			case 17:
				return Ae(n.type) && Kr(), Te(n), null;
			case 19:
				if ((le(de), (o = n.memoizedState), o === null)) return Te(n), null;
				if (((r = (n.flags & 128) !== 0), (i = o.rendering), i === null))
					if (r) pr(o, !1);
					else {
						if (Ee !== 0 || (e !== null && e.flags & 128))
							for (e = n.child; e !== null; ) {
								if (((i = rl(e)), i !== null)) {
									for (
										n.flags |= 128,
											pr(o, !1),
											r = i.updateQueue,
											r !== null && ((n.updateQueue = r), (n.flags |= 4)),
											n.subtreeFlags = 0,
											r = t,
											t = n.child;
										t !== null;

									)
										(o = t),
											(e = r),
											(o.flags &= 14680066),
											(i = o.alternate),
											i === null
												? ((o.childLanes = 0),
												  (o.lanes = e),
												  (o.child = null),
												  (o.subtreeFlags = 0),
												  (o.memoizedProps = null),
												  (o.memoizedState = null),
												  (o.updateQueue = null),
												  (o.dependencies = null),
												  (o.stateNode = null))
												: ((o.childLanes = i.childLanes),
												  (o.lanes = i.lanes),
												  (o.child = i.child),
												  (o.subtreeFlags = 0),
												  (o.deletions = null),
												  (o.memoizedProps = i.memoizedProps),
												  (o.memoizedState = i.memoizedState),
												  (o.updateQueue = i.updateQueue),
												  (o.type = i.type),
												  (e = i.dependencies),
												  (o.dependencies =
														e === null
															? null
															: {
																	lanes: e.lanes,
																	firstContext: e.firstContext,
															  })),
											(t = t.sibling);
									return ee(de, (de.current & 1) | 2), n.child;
								}
								e = e.sibling;
							}
						o.tail !== null &&
							ve() > Tt &&
							((n.flags |= 128), (r = !0), pr(o, !1), (n.lanes = 4194304));
					}
				else {
					if (!r)
						if (((e = rl(i)), e !== null)) {
							if (
								((n.flags |= 128),
								(r = !0),
								(t = e.updateQueue),
								t !== null && ((n.updateQueue = t), (n.flags |= 4)),
								pr(o, !0),
								o.tail === null &&
									o.tailMode === "hidden" &&
									!i.alternate &&
									!ue)
							)
								return Te(n), null;
						} else
							2 * ve() - o.renderingStartTime > Tt &&
								t !== 1073741824 &&
								((n.flags |= 128), (r = !0), pr(o, !1), (n.lanes = 4194304));
					o.isBackwards
						? ((i.sibling = n.child), (n.child = i))
						: ((t = o.last),
						  t !== null ? (t.sibling = i) : (n.child = i),
						  (o.last = i));
				}
				return o.tail !== null
					? ((n = o.tail),
					  (o.rendering = n),
					  (o.tail = n.sibling),
					  (o.renderingStartTime = ve()),
					  (n.sibling = null),
					  (t = de.current),
					  ee(de, r ? (t & 1) | 2 : t & 1),
					  n)
					: (Te(n), null);
			case 22:
			case 23:
				return (
					yi(),
					(r = n.memoizedState !== null),
					e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
					r && n.mode & 1
						? Xe & 1073741824 &&
						  (Te(n), n.subtreeFlags & 6 && (n.flags |= 8192))
						: Te(n),
					null
				);
			case 24:
				return null;
			case 25:
				return null;
		}
		throw Error(m(156, n.tag));
	}
	function pf(e, n) {
		switch ((Po(n), n.tag)) {
			case 1:
				return (
					Ae(n.type) && Kr(),
					(e = n.flags),
					e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
				);
			case 3:
				return (
					Nt(),
					le(Ue),
					le(Fe),
					Ao(),
					(e = n.flags),
					e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
				);
			case 5:
				return Io(n), null;
			case 13:
				if (
					(le(de), (e = n.memoizedState), e !== null && e.dehydrated !== null)
				) {
					if (n.alternate === null) throw Error(m(340));
					xt();
				}
				return (
					(e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
				);
			case 19:
				return le(de), null;
			case 4:
				return Nt(), null;
			case 10:
				return Ro(n.type._context), null;
			case 22:
			case 23:
				return yi(), null;
			case 24:
				return null;
			default:
				return null;
		}
	}
	var dl = !1,
		Re = !1,
		mf = typeof WeakSet == "function" ? WeakSet : Set,
		x = null;
	function Ft(e, n) {
		var t = e.ref;
		if (t !== null)
			if (typeof t == "function")
				try {
					t(null);
				} catch (r) {
					he(e, n, r);
				}
			else t.current = null;
	}
	function oi(e, n, t) {
		try {
			t();
		} catch (r) {
			he(e, n, r);
		}
	}
	var ea = !1;
	function hf(e, n) {
		if (((yo = Rr), (e = Ru()), so(e))) {
			if ("selectionStart" in e)
				var t = { start: e.selectionStart, end: e.selectionEnd };
			else
				e: {
					t = ((t = e.ownerDocument) && t.defaultView) || window;
					var r = t.getSelection && t.getSelection();
					if (r && r.rangeCount !== 0) {
						t = r.anchorNode;
						var l = r.anchorOffset,
							o = r.focusNode;
						r = r.focusOffset;
						try {
							t.nodeType, o.nodeType;
						} catch {
							t = null;
							break e;
						}
						var i = 0,
							u = -1,
							s = -1,
							p = 0,
							y = 0,
							g = e,
							h = null;
						n: for (;;) {
							for (
								var S;
								g !== t || (l !== 0 && g.nodeType !== 3) || (u = i + l),
									g !== o || (r !== 0 && g.nodeType !== 3) || (s = i + r),
									g.nodeType === 3 && (i += g.nodeValue.length),
									(S = g.firstChild) !== null;

							)
								(h = g), (g = S);
							for (;;) {
								if (g === e) break n;
								if (
									(h === t && ++p === l && (u = i),
									h === o && ++y === r && (s = i),
									(S = g.nextSibling) !== null)
								)
									break;
								(g = h), (h = g.parentNode);
							}
							g = S;
						}
						t = u === -1 || s === -1 ? null : { start: u, end: s };
					} else t = null;
				}
			t = t || { start: 0, end: 0 };
		} else t = null;
		for (
			go = { focusedElem: e, selectionRange: t }, Rr = !1, x = n;
			x !== null;

		)
			if (((n = x), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
				(e.return = n), (x = e);
			else
				for (; x !== null; ) {
					n = x;
					try {
						var _ = n.alternate;
						if (n.flags & 1024)
							switch (n.tag) {
								case 0:
								case 11:
								case 15:
									break;
								case 1:
									if (_ !== null) {
										var P = _.memoizedProps,
											ye = _.memoizedState,
											f = n.stateNode,
											a = f.getSnapshotBeforeUpdate(
												n.elementType === n.type ? P : un(n.type, P),
												ye
											);
										f.__reactInternalSnapshotBeforeUpdate = a;
									}
									break;
								case 3:
									var d = n.stateNode.containerInfo;
									d.nodeType === 1
										? (d.textContent = "")
										: d.nodeType === 9 &&
										  d.documentElement &&
										  d.removeChild(d.documentElement);
									break;
								case 5:
								case 6:
								case 4:
								case 17:
									break;
								default:
									throw Error(m(163));
							}
					} catch (w) {
						he(n, n.return, w);
					}
					if (((e = n.sibling), e !== null)) {
						(e.return = n.return), (x = e);
						break;
					}
					x = n.return;
				}
		return (_ = ea), (ea = !1), _;
	}
	function mr(e, n, t) {
		var r = n.updateQueue;
		if (((r = r !== null ? r.lastEffect : null), r !== null)) {
			var l = (r = r.next);
			do {
				if ((l.tag & e) === e) {
					var o = l.destroy;
					(l.destroy = void 0), o !== void 0 && oi(n, t, o);
				}
				l = l.next;
			} while (l !== r);
		}
	}
	function pl(e, n) {
		if (
			((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
		) {
			var t = (n = n.next);
			do {
				if ((t.tag & e) === e) {
					var r = t.create;
					t.destroy = r();
				}
				t = t.next;
			} while (t !== n);
		}
	}
	function ii(e) {
		var n = e.ref;
		if (n !== null) {
			var t = e.stateNode;
			switch (e.tag) {
				case 5:
					e = t;
					break;
				default:
					e = t;
			}
			typeof n == "function" ? n(e) : (n.current = e);
		}
	}
	function na(e) {
		var n = e.alternate;
		n !== null && ((e.alternate = null), na(n)),
			(e.child = null),
			(e.deletions = null),
			(e.sibling = null),
			e.tag === 5 &&
				((n = e.stateNode),
				n !== null &&
					(delete n[hn],
					delete n[rr],
					delete n[Eo],
					delete n[Jc],
					delete n[Zc])),
			(e.stateNode = null),
			(e.return = null),
			(e.dependencies = null),
			(e.memoizedProps = null),
			(e.memoizedState = null),
			(e.pendingProps = null),
			(e.stateNode = null),
			(e.updateQueue = null);
	}
	function ta(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 4;
	}
	function ra(e) {
		e: for (;;) {
			for (; e.sibling === null; ) {
				if (e.return === null || ta(e.return)) return null;
				e = e.return;
			}
			for (
				e.sibling.return = e.return, e = e.sibling;
				e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

			) {
				if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
				(e.child.return = e), (e = e.child);
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function ui(e, n, t) {
		var r = e.tag;
		if (r === 5 || r === 6)
			(e = e.stateNode),
				n
					? t.nodeType === 8
						? t.parentNode.insertBefore(e, n)
						: t.insertBefore(e, n)
					: (t.nodeType === 8
							? ((n = t.parentNode), n.insertBefore(e, t))
							: ((n = t), n.appendChild(e)),
					  (t = t._reactRootContainer),
					  t != null || n.onclick !== null || (n.onclick = Wr));
		else if (r !== 4 && ((e = e.child), e !== null))
			for (ui(e, n, t), e = e.sibling; e !== null; )
				ui(e, n, t), (e = e.sibling);
	}
	function si(e, n, t) {
		var r = e.tag;
		if (r === 5 || r === 6)
			(e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
		else if (r !== 4 && ((e = e.child), e !== null))
			for (si(e, n, t), e = e.sibling; e !== null; )
				si(e, n, t), (e = e.sibling);
	}
	var Pe = null,
		sn = !1;
	function Bn(e, n, t) {
		for (t = t.child; t !== null; ) la(e, n, t), (t = t.sibling);
	}
	function la(e, n, t) {
		if (mn && typeof mn.onCommitFiberUnmount == "function")
			try {
				mn.onCommitFiberUnmount(Pr, t);
			} catch {}
		switch (t.tag) {
			case 5:
				Re || Ft(t, n);
			case 6:
				var r = Pe,
					l = sn;
				(Pe = null),
					Bn(e, n, t),
					(Pe = r),
					(sn = l),
					Pe !== null &&
						(sn
							? ((e = Pe),
							  (t = t.stateNode),
							  e.nodeType === 8
									? e.parentNode.removeChild(t)
									: e.removeChild(t))
							: Pe.removeChild(t.stateNode));
				break;
			case 18:
				Pe !== null &&
					(sn
						? ((e = Pe),
						  (t = t.stateNode),
						  e.nodeType === 8
								? So(e.parentNode, t)
								: e.nodeType === 1 && So(e, t),
						  Kt(e))
						: So(Pe, t.stateNode));
				break;
			case 4:
				(r = Pe),
					(l = sn),
					(Pe = t.stateNode.containerInfo),
					(sn = !0),
					Bn(e, n, t),
					(Pe = r),
					(sn = l);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (
					!Re &&
					((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
				) {
					l = r = r.next;
					do {
						var o = l,
							i = o.destroy;
						(o = o.tag),
							i !== void 0 && (o & 2 || o & 4) && oi(t, n, i),
							(l = l.next);
					} while (l !== r);
				}
				Bn(e, n, t);
				break;
			case 1:
				if (
					!Re &&
					(Ft(t, n),
					(r = t.stateNode),
					typeof r.componentWillUnmount == "function")
				)
					try {
						(r.props = t.memoizedProps),
							(r.state = t.memoizedState),
							r.componentWillUnmount();
					} catch (u) {
						he(t, n, u);
					}
				Bn(e, n, t);
				break;
			case 21:
				Bn(e, n, t);
				break;
			case 22:
				t.mode & 1
					? ((Re = (r = Re) || t.memoizedState !== null), Bn(e, n, t), (Re = r))
					: Bn(e, n, t);
				break;
			default:
				Bn(e, n, t);
		}
	}
	function oa(e) {
		var n = e.updateQueue;
		if (n !== null) {
			e.updateQueue = null;
			var t = e.stateNode;
			t === null && (t = e.stateNode = new mf()),
				n.forEach(function (r) {
					var l = Cf.bind(null, e, r);
					t.has(r) || (t.add(r), r.then(l, l));
				});
		}
	}
	function an(e, n) {
		var t = n.deletions;
		if (t !== null)
			for (var r = 0; r < t.length; r++) {
				var l = t[r];
				try {
					var o = e,
						i = n,
						u = i;
					e: for (; u !== null; ) {
						switch (u.tag) {
							case 5:
								(Pe = u.stateNode), (sn = !1);
								break e;
							case 3:
								(Pe = u.stateNode.containerInfo), (sn = !0);
								break e;
							case 4:
								(Pe = u.stateNode.containerInfo), (sn = !0);
								break e;
						}
						u = u.return;
					}
					if (Pe === null) throw Error(m(160));
					la(o, i, l), (Pe = null), (sn = !1);
					var s = l.alternate;
					s !== null && (s.return = null), (l.return = null);
				} catch (p) {
					he(l, n, p);
				}
			}
		if (n.subtreeFlags & 12854)
			for (n = n.child; n !== null; ) ia(n, e), (n = n.sibling);
	}
	function ia(e, n) {
		var t = e.alternate,
			r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if ((an(n, e), gn(e), r & 4)) {
					try {
						mr(3, e, e.return), pl(3, e);
					} catch (P) {
						he(e, e.return, P);
					}
					try {
						mr(5, e, e.return);
					} catch (P) {
						he(e, e.return, P);
					}
				}
				break;
			case 1:
				an(n, e), gn(e), r & 512 && t !== null && Ft(t, t.return);
				break;
			case 5:
				if (
					(an(n, e),
					gn(e),
					r & 512 && t !== null && Ft(t, t.return),
					e.flags & 32)
				) {
					var l = e.stateNode;
					try {
						jt(l, "");
					} catch (P) {
						he(e, e.return, P);
					}
				}
				if (r & 4 && ((l = e.stateNode), l != null)) {
					var o = e.memoizedProps,
						i = t !== null ? t.memoizedProps : o,
						u = e.type,
						s = e.updateQueue;
					if (((e.updateQueue = null), s !== null))
						try {
							u === "input" && o.type === "radio" && o.name != null && Di(l, o),
								Ul(u, i);
							var p = Ul(u, o);
							for (i = 0; i < s.length; i += 2) {
								var y = s[i],
									g = s[i + 1];
								y === "style"
									? Hi(l, g)
									: y === "dangerouslySetInnerHTML"
									? Vi(l, g)
									: y === "children"
									? jt(l, g)
									: V(l, y, g, p);
							}
							switch (u) {
								case "input":
									Ml(l, o);
									break;
								case "textarea":
									Ii(l, o);
									break;
								case "select":
									var h = l._wrapperState.wasMultiple;
									l._wrapperState.wasMultiple = !!o.multiple;
									var S = o.value;
									S != null
										? st(l, !!o.multiple, S, !1)
										: h !== !!o.multiple &&
										  (o.defaultValue != null
												? st(l, !!o.multiple, o.defaultValue, !0)
												: st(l, !!o.multiple, o.multiple ? [] : "", !1));
							}
							l[rr] = o;
						} catch (P) {
							he(e, e.return, P);
						}
				}
				break;
			case 6:
				if ((an(n, e), gn(e), r & 4)) {
					if (e.stateNode === null) throw Error(m(162));
					(l = e.stateNode), (o = e.memoizedProps);
					try {
						l.nodeValue = o;
					} catch (P) {
						he(e, e.return, P);
					}
				}
				break;
			case 3:
				if (
					(an(n, e), gn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
				)
					try {
						Kt(n.containerInfo);
					} catch (P) {
						he(e, e.return, P);
					}
				break;
			case 4:
				an(n, e), gn(e);
				break;
			case 13:
				an(n, e),
					gn(e),
					(l = e.child),
					l.flags & 8192 &&
						((o = l.memoizedState !== null),
						(l.stateNode.isHidden = o),
						!o ||
							(l.alternate !== null && l.alternate.memoizedState !== null) ||
							(fi = ve())),
					r & 4 && oa(e);
				break;
			case 22:
				if (
					((y = t !== null && t.memoizedState !== null),
					e.mode & 1 ? ((Re = (p = Re) || y), an(n, e), (Re = p)) : an(n, e),
					gn(e),
					r & 8192)
				) {
					if (
						((p = e.memoizedState !== null),
						(e.stateNode.isHidden = p) && !y && e.mode & 1)
					)
						for (x = e, y = e.child; y !== null; ) {
							for (g = x = y; x !== null; ) {
								switch (((h = x), (S = h.child), h.tag)) {
									case 0:
									case 11:
									case 14:
									case 15:
										mr(4, h, h.return);
										break;
									case 1:
										Ft(h, h.return);
										var _ = h.stateNode;
										if (typeof _.componentWillUnmount == "function") {
											(r = h), (t = h.return);
											try {
												(n = r),
													(_.props = n.memoizedProps),
													(_.state = n.memoizedState),
													_.componentWillUnmount();
											} catch (P) {
												he(r, t, P);
											}
										}
										break;
									case 5:
										Ft(h, h.return);
										break;
									case 22:
										if (h.memoizedState !== null) {
											aa(g);
											continue;
										}
								}
								S !== null ? ((S.return = h), (x = S)) : aa(g);
							}
							y = y.sibling;
						}
					e: for (y = null, g = e; ; ) {
						if (g.tag === 5) {
							if (y === null) {
								y = g;
								try {
									(l = g.stateNode),
										p
											? ((o = l.style),
											  typeof o.setProperty == "function"
													? o.setProperty("display", "none", "important")
													: (o.display = "none"))
											: ((u = g.stateNode),
											  (s = g.memoizedProps.style),
											  (i =
													s != null && s.hasOwnProperty("display")
														? s.display
														: null),
											  (u.style.display = Bi("display", i)));
								} catch (P) {
									he(e, e.return, P);
								}
							}
						} else if (g.tag === 6) {
							if (y === null)
								try {
									g.stateNode.nodeValue = p ? "" : g.memoizedProps;
								} catch (P) {
									he(e, e.return, P);
								}
						} else if (
							((g.tag !== 22 && g.tag !== 23) ||
								g.memoizedState === null ||
								g === e) &&
							g.child !== null
						) {
							(g.child.return = g), (g = g.child);
							continue;
						}
						if (g === e) break e;
						for (; g.sibling === null; ) {
							if (g.return === null || g.return === e) break e;
							y === g && (y = null), (g = g.return);
						}
						y === g && (y = null),
							(g.sibling.return = g.return),
							(g = g.sibling);
					}
				}
				break;
			case 19:
				an(n, e), gn(e), r & 4 && oa(e);
				break;
			case 21:
				break;
			default:
				an(n, e), gn(e);
		}
	}
	function gn(e) {
		var n = e.flags;
		if (n & 2) {
			try {
				e: {
					for (var t = e.return; t !== null; ) {
						if (ta(t)) {
							var r = t;
							break e;
						}
						t = t.return;
					}
					throw Error(m(160));
				}
				switch (r.tag) {
					case 5:
						var l = r.stateNode;
						r.flags & 32 && (jt(l, ""), (r.flags &= -33));
						var o = ra(e);
						si(e, o, l);
						break;
					case 3:
					case 4:
						var i = r.stateNode.containerInfo,
							u = ra(e);
						ui(e, u, i);
						break;
					default:
						throw Error(m(161));
				}
			} catch (s) {
				he(e, e.return, s);
			}
			e.flags &= -3;
		}
		n & 4096 && (e.flags &= -4097);
	}
	function vf(e, n, t) {
		(x = e), ua(e);
	}
	function ua(e, n, t) {
		for (var r = (e.mode & 1) !== 0; x !== null; ) {
			var l = x,
				o = l.child;
			if (l.tag === 22 && r) {
				var i = l.memoizedState !== null || dl;
				if (!i) {
					var u = l.alternate,
						s = (u !== null && u.memoizedState !== null) || Re;
					u = dl;
					var p = Re;
					if (((dl = i), (Re = s) && !p))
						for (x = l; x !== null; )
							(i = x),
								(s = i.child),
								i.tag === 22 && i.memoizedState !== null
									? ca(l)
									: s !== null
									? ((s.return = i), (x = s))
									: ca(l);
					for (; o !== null; ) (x = o), ua(o), (o = o.sibling);
					(x = l), (dl = u), (Re = p);
				}
				sa(e);
			} else
				l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (x = o)) : sa(e);
		}
	}
	function sa(e) {
		for (; x !== null; ) {
			var n = x;
			if (n.flags & 8772) {
				var t = n.alternate;
				try {
					if (n.flags & 8772)
						switch (n.tag) {
							case 0:
							case 11:
							case 15:
								Re || pl(5, n);
								break;
							case 1:
								var r = n.stateNode;
								if (n.flags & 4 && !Re)
									if (t === null) r.componentDidMount();
									else {
										var l =
											n.elementType === n.type
												? t.memoizedProps
												: un(n.type, t.memoizedProps);
										r.componentDidUpdate(
											l,
											t.memoizedState,
											r.__reactInternalSnapshotBeforeUpdate
										);
									}
								var o = n.updateQueue;
								o !== null && as(n, o, r);
								break;
							case 3:
								var i = n.updateQueue;
								if (i !== null) {
									if (((t = null), n.child !== null))
										switch (n.child.tag) {
											case 5:
												t = n.child.stateNode;
												break;
											case 1:
												t = n.child.stateNode;
										}
									as(n, i, t);
								}
								break;
							case 5:
								var u = n.stateNode;
								if (t === null && n.flags & 4) {
									t = u;
									var s = n.memoizedProps;
									switch (n.type) {
										case "button":
										case "input":
										case "select":
										case "textarea":
											s.autoFocus && t.focus();
											break;
										case "img":
											s.src && (t.src = s.src);
									}
								}
								break;
							case 6:
								break;
							case 4:
								break;
							case 12:
								break;
							case 13:
								if (n.memoizedState === null) {
									var p = n.alternate;
									if (p !== null) {
										var y = p.memoizedState;
										if (y !== null) {
											var g = y.dehydrated;
											g !== null && Kt(g);
										}
									}
								}
								break;
							case 19:
							case 17:
							case 21:
							case 22:
							case 23:
							case 25:
								break;
							default:
								throw Error(m(163));
						}
					Re || (n.flags & 512 && ii(n));
				} catch (h) {
					he(n, n.return, h);
				}
			}
			if (n === e) {
				x = null;
				break;
			}
			if (((t = n.sibling), t !== null)) {
				(t.return = n.return), (x = t);
				break;
			}
			x = n.return;
		}
	}
	function aa(e) {
		for (; x !== null; ) {
			var n = x;
			if (n === e) {
				x = null;
				break;
			}
			var t = n.sibling;
			if (t !== null) {
				(t.return = n.return), (x = t);
				break;
			}
			x = n.return;
		}
	}
	function ca(e) {
		for (; x !== null; ) {
			var n = x;
			try {
				switch (n.tag) {
					case 0:
					case 11:
					case 15:
						var t = n.return;
						try {
							pl(4, n);
						} catch (s) {
							he(n, t, s);
						}
						break;
					case 1:
						var r = n.stateNode;
						if (typeof r.componentDidMount == "function") {
							var l = n.return;
							try {
								r.componentDidMount();
							} catch (s) {
								he(n, l, s);
							}
						}
						var o = n.return;
						try {
							ii(n);
						} catch (s) {
							he(n, o, s);
						}
						break;
					case 5:
						var i = n.return;
						try {
							ii(n);
						} catch (s) {
							he(n, i, s);
						}
				}
			} catch (s) {
				he(n, n.return, s);
			}
			if (n === e) {
				x = null;
				break;
			}
			var u = n.sibling;
			if (u !== null) {
				(u.return = n.return), (x = u);
				break;
			}
			x = n.return;
		}
	}
	var yf = Math.ceil,
		ml = q.ReactCurrentDispatcher,
		ai = q.ReactCurrentOwner,
		en = q.ReactCurrentBatchConfig,
		B = 0,
		Ce = null,
		ge = null,
		Ne = 0,
		Xe = 0,
		Lt = On(0),
		Ee = 0,
		hr = null,
		rt = 0,
		hl = 0,
		ci = 0,
		vr = null,
		Be = null,
		fi = 0,
		Tt = 1 / 0,
		Nn = null,
		vl = !1,
		di = null,
		Hn = null,
		yl = !1,
		$n = null,
		gl = 0,
		yr = 0,
		pi = null,
		wl = -1,
		kl = 0;
	function je() {
		return B & 6 ? ve() : wl !== -1 ? wl : (wl = ve());
	}
	function Wn(e) {
		return e.mode & 1
			? B & 2 && Ne !== 0
				? Ne & -Ne
				: bc.transition !== null
				? (kl === 0 && (kl = ru()), kl)
				: ((e = Y),
				  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : du(e.type))),
				  e)
			: 1;
	}
	function cn(e, n, t, r) {
		if (50 < yr) throw ((yr = 0), (pi = null), Error(m(185)));
		Bt(e, t, r),
			(!(B & 2) || e !== Ce) &&
				(e === Ce && (!(B & 2) && (hl |= t), Ee === 4 && Qn(e, Ne)),
				He(e, r),
				t === 1 && B === 0 && !(n.mode & 1) && ((Tt = ve() + 500), Yr && Un()));
	}
	function He(e, n) {
		var t = e.callbackNode;
		ba(e, n);
		var r = Fr(e, e === Ce ? Ne : 0);
		if (r === 0)
			t !== null && eu(t), (e.callbackNode = null), (e.callbackPriority = 0);
		else if (((n = r & -r), e.callbackPriority !== n)) {
			if ((t != null && eu(t), n === 1))
				e.tag === 0 ? qc(da.bind(null, e)) : Zu(da.bind(null, e)),
					Yc(function () {
						!(B & 6) && Un();
					}),
					(t = null);
			else {
				switch (lu(r)) {
					case 1:
						t = Ql;
						break;
					case 4:
						t = nu;
						break;
					case 16:
						t = _r;
						break;
					case 536870912:
						t = tu;
						break;
					default:
						t = _r;
				}
				t = ka(t, fa.bind(null, e));
			}
			(e.callbackPriority = n), (e.callbackNode = t);
		}
	}
	function fa(e, n) {
		if (((wl = -1), (kl = 0), B & 6)) throw Error(m(327));
		var t = e.callbackNode;
		if (Rt() && e.callbackNode !== t) return null;
		var r = Fr(e, e === Ce ? Ne : 0);
		if (r === 0) return null;
		if (r & 30 || r & e.expiredLanes || n) n = Sl(e, r);
		else {
			n = r;
			var l = B;
			B |= 2;
			var o = ma();
			(Ce !== e || Ne !== n) && ((Nn = null), (Tt = ve() + 500), ot(e, n));
			do
				try {
					kf();
					break;
				} catch (u) {
					pa(e, u);
				}
			while (!0);
			To(),
				(ml.current = o),
				(B = l),
				ge !== null ? (n = 0) : ((Ce = null), (Ne = 0), (n = Ee));
		}
		if (n !== 0) {
			if (
				(n === 2 && ((l = Kl(e)), l !== 0 && ((r = l), (n = mi(e, l)))),
				n === 1)
			)
				throw ((t = hr), ot(e, 0), Qn(e, r), He(e, ve()), t);
			if (n === 6) Qn(e, r);
			else {
				if (
					((l = e.current.alternate),
					!(r & 30) &&
						!gf(l) &&
						((n = Sl(e, r)),
						n === 2 && ((o = Kl(e)), o !== 0 && ((r = o), (n = mi(e, o)))),
						n === 1))
				)
					throw ((t = hr), ot(e, 0), Qn(e, r), He(e, ve()), t);
				switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
					case 0:
					case 1:
						throw Error(m(345));
					case 2:
						it(e, Be, Nn);
						break;
					case 3:
						if (
							(Qn(e, r),
							(r & 130023424) === r && ((n = fi + 500 - ve()), 10 < n))
						) {
							if (Fr(e, 0) !== 0) break;
							if (((l = e.suspendedLanes), (l & r) !== r)) {
								je(), (e.pingedLanes |= e.suspendedLanes & l);
								break;
							}
							e.timeoutHandle = ko(it.bind(null, e, Be, Nn), n);
							break;
						}
						it(e, Be, Nn);
						break;
					case 4:
						if ((Qn(e, r), (r & 4194240) === r)) break;
						for (n = e.eventTimes, l = -1; 0 < r; ) {
							var i = 31 - rn(r);
							(o = 1 << i), (i = n[i]), i > l && (l = i), (r &= ~o);
						}
						if (
							((r = l),
							(r = ve() - r),
							(r =
								(120 > r
									? 120
									: 480 > r
									? 480
									: 1080 > r
									? 1080
									: 1920 > r
									? 1920
									: 3e3 > r
									? 3e3
									: 4320 > r
									? 4320
									: 1960 * yf(r / 1960)) - r),
							10 < r)
						) {
							e.timeoutHandle = ko(it.bind(null, e, Be, Nn), r);
							break;
						}
						it(e, Be, Nn);
						break;
					case 5:
						it(e, Be, Nn);
						break;
					default:
						throw Error(m(329));
				}
			}
		}
		return He(e, ve()), e.callbackNode === t ? fa.bind(null, e) : null;
	}
	function mi(e, n) {
		var t = vr;
		return (
			e.current.memoizedState.isDehydrated && (ot(e, n).flags |= 256),
			(e = Sl(e, n)),
			e !== 2 && ((n = Be), (Be = t), n !== null && hi(n)),
			e
		);
	}
	function hi(e) {
		Be === null ? (Be = e) : Be.push.apply(Be, e);
	}
	function gf(e) {
		for (var n = e; ; ) {
			if (n.flags & 16384) {
				var t = n.updateQueue;
				if (t !== null && ((t = t.stores), t !== null))
					for (var r = 0; r < t.length; r++) {
						var l = t[r],
							o = l.getSnapshot;
						l = l.value;
						try {
							if (!ln(o(), l)) return !1;
						} catch {
							return !1;
						}
					}
			}
			if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
				(t.return = n), (n = t);
			else {
				if (n === e) break;
				for (; n.sibling === null; ) {
					if (n.return === null || n.return === e) return !0;
					n = n.return;
				}
				(n.sibling.return = n.return), (n = n.sibling);
			}
		}
		return !0;
	}
	function Qn(e, n) {
		for (
			n &= ~ci,
				n &= ~hl,
				e.suspendedLanes |= n,
				e.pingedLanes &= ~n,
				e = e.expirationTimes;
			0 < n;

		) {
			var t = 31 - rn(n),
				r = 1 << t;
			(e[t] = -1), (n &= ~r);
		}
	}
	function da(e) {
		if (B & 6) throw Error(m(327));
		Rt();
		var n = Fr(e, 0);
		if (!(n & 1)) return He(e, ve()), null;
		var t = Sl(e, n);
		if (e.tag !== 0 && t === 2) {
			var r = Kl(e);
			r !== 0 && ((n = r), (t = mi(e, r)));
		}
		if (t === 1) throw ((t = hr), ot(e, 0), Qn(e, n), He(e, ve()), t);
		if (t === 6) throw Error(m(345));
		return (
			(e.finishedWork = e.current.alternate),
			(e.finishedLanes = n),
			it(e, Be, Nn),
			He(e, ve()),
			null
		);
	}
	function vi(e, n) {
		var t = B;
		B |= 1;
		try {
			return e(n);
		} finally {
			(B = t), B === 0 && ((Tt = ve() + 500), Yr && Un());
		}
	}
	function lt(e) {
		$n !== null && $n.tag === 0 && !(B & 6) && Rt();
		var n = B;
		B |= 1;
		var t = en.transition,
			r = Y;
		try {
			if (((en.transition = null), (Y = 1), e)) return e();
		} finally {
			(Y = r), (en.transition = t), (B = n), !(B & 6) && Un();
		}
	}
	function yi() {
		(Xe = Lt.current), le(Lt);
	}
	function ot(e, n) {
		(e.finishedWork = null), (e.finishedLanes = 0);
		var t = e.timeoutHandle;
		if ((t !== -1 && ((e.timeoutHandle = -1), Gc(t)), ge !== null))
			for (t = ge.return; t !== null; ) {
				var r = t;
				switch ((Po(r), r.tag)) {
					case 1:
						(r = r.type.childContextTypes), r != null && Kr();
						break;
					case 3:
						Nt(), le(Ue), le(Fe), Ao();
						break;
					case 5:
						Io(r);
						break;
					case 4:
						Nt();
						break;
					case 13:
						le(de);
						break;
					case 19:
						le(de);
						break;
					case 10:
						Ro(r.type._context);
						break;
					case 22:
					case 23:
						yi();
				}
				t = t.return;
			}
		if (
			((Ce = e),
			(ge = e = Kn(e.current, null)),
			(Ne = Xe = n),
			(Ee = 0),
			(hr = null),
			(ci = hl = rt = 0),
			(Be = vr = null),
			et !== null)
		) {
			for (n = 0; n < et.length; n++)
				if (((t = et[n]), (r = t.interleaved), r !== null)) {
					t.interleaved = null;
					var l = r.next,
						o = t.pending;
					if (o !== null) {
						var i = o.next;
						(o.next = l), (r.next = i);
					}
					t.pending = r;
				}
			et = null;
		}
		return e;
	}
	function pa(e, n) {
		do {
			var t = ge;
			try {
				if ((To(), (ll.current = sl), ol)) {
					for (var r = pe.memoizedState; r !== null; ) {
						var l = r.queue;
						l !== null && (l.pending = null), (r = r.next);
					}
					ol = !1;
				}
				if (
					((tt = 0),
					(xe = Se = pe = null),
					(ar = !1),
					(cr = 0),
					(ai.current = null),
					t === null || t.return === null)
				) {
					(Ee = 1), (hr = n), (ge = null);
					break;
				}
				e: {
					var o = e,
						i = t.return,
						u = t,
						s = n;
					if (
						((n = Ne),
						(u.flags |= 32768),
						s !== null && typeof s == "object" && typeof s.then == "function")
					) {
						var p = s,
							y = u,
							g = y.tag;
						if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
							var h = y.alternate;
							h
								? ((y.updateQueue = h.updateQueue),
								  (y.memoizedState = h.memoizedState),
								  (y.lanes = h.lanes))
								: ((y.updateQueue = null), (y.memoizedState = null));
						}
						var S = Us(i);
						if (S !== null) {
							(S.flags &= -257),
								As(S, i, u, o, n),
								S.mode & 1 && Is(o, p, n),
								(n = S),
								(s = p);
							var _ = n.updateQueue;
							if (_ === null) {
								var P = new Set();
								P.add(s), (n.updateQueue = P);
							} else _.add(s);
							break e;
						} else {
							if (!(n & 1)) {
								Is(o, p, n), gi();
								break e;
							}
							s = Error(m(426));
						}
					} else if (ue && u.mode & 1) {
						var ye = Us(i);
						if (ye !== null) {
							!(ye.flags & 65536) && (ye.flags |= 256),
								As(ye, i, u, o, n),
								Fo(zt(s, u));
							break e;
						}
					}
					(o = s = zt(s, u)),
						Ee !== 4 && (Ee = 2),
						vr === null ? (vr = [o]) : vr.push(o),
						(o = i);
					do {
						switch (o.tag) {
							case 3:
								(o.flags |= 65536), (n &= -n), (o.lanes |= n);
								var f = js(o, s, n);
								ss(o, f);
								break e;
							case 1:
								u = s;
								var a = o.type,
									d = o.stateNode;
								if (
									!(o.flags & 128) &&
									(typeof a.getDerivedStateFromError == "function" ||
										(d !== null &&
											typeof d.componentDidCatch == "function" &&
											(Hn === null || !Hn.has(d))))
								) {
									(o.flags |= 65536), (n &= -n), (o.lanes |= n);
									var w = Os(o, u, n);
									ss(o, w);
									break e;
								}
						}
						o = o.return;
					} while (o !== null);
				}
				va(t);
			} catch (N) {
				(n = N), ge === t && t !== null && (ge = t = t.return);
				continue;
			}
			break;
		} while (!0);
	}
	function ma() {
		var e = ml.current;
		return (ml.current = sl), e === null ? sl : e;
	}
	function gi() {
		(Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
			Ce === null || (!(rt & 268435455) && !(hl & 268435455)) || Qn(Ce, Ne);
	}
	function Sl(e, n) {
		var t = B;
		B |= 2;
		var r = ma();
		(Ce !== e || Ne !== n) && ((Nn = null), ot(e, n));
		do
			try {
				wf();
				break;
			} catch (l) {
				pa(e, l);
			}
		while (!0);
		if ((To(), (B = t), (ml.current = r), ge !== null)) throw Error(m(261));
		return (Ce = null), (Ne = 0), Ee;
	}
	function wf() {
		for (; ge !== null; ) ha(ge);
	}
	function kf() {
		for (; ge !== null && !Wa(); ) ha(ge);
	}
	function ha(e) {
		var n = wa(e.alternate, e, Xe);
		(e.memoizedProps = e.pendingProps),
			n === null ? va(e) : (ge = n),
			(ai.current = null);
	}
	function va(e) {
		var n = e;
		do {
			var t = n.alternate;
			if (((e = n.return), n.flags & 32768)) {
				if (((t = pf(t, n)), t !== null)) {
					(t.flags &= 32767), (ge = t);
					return;
				}
				if (e !== null)
					(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
				else {
					(Ee = 6), (ge = null);
					return;
				}
			} else if (((t = df(t, n, Xe)), t !== null)) {
				ge = t;
				return;
			}
			if (((n = n.sibling), n !== null)) {
				ge = n;
				return;
			}
			ge = n = e;
		} while (n !== null);
		Ee === 0 && (Ee = 5);
	}
	function it(e, n, t) {
		var r = Y,
			l = en.transition;
		try {
			(en.transition = null), (Y = 1), Sf(e, n, t, r);
		} finally {
			(en.transition = l), (Y = r);
		}
		return null;
	}
	function Sf(e, n, t, r) {
		do Rt();
		while ($n !== null);
		if (B & 6) throw Error(m(327));
		t = e.finishedWork;
		var l = e.finishedLanes;
		if (t === null) return null;
		if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
			throw Error(m(177));
		(e.callbackNode = null), (e.callbackPriority = 0);
		var o = t.lanes | t.childLanes;
		if (
			(ec(e, o),
			e === Ce && ((ge = Ce = null), (Ne = 0)),
			(!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
				yl ||
				((yl = !0),
				ka(_r, function () {
					return Rt(), null;
				})),
			(o = (t.flags & 15990) !== 0),
			t.subtreeFlags & 15990 || o)
		) {
			(o = en.transition), (en.transition = null);
			var i = Y;
			Y = 1;
			var u = B;
			(B |= 4),
				(ai.current = null),
				hf(e, t),
				ia(t, e),
				Vc(go),
				(Rr = !!yo),
				(go = yo = null),
				(e.current = t),
				vf(t),
				Qa(),
				(B = u),
				(Y = i),
				(en.transition = o);
		} else e.current = t;
		if (
			(yl && ((yl = !1), ($n = e), (gl = l)),
			(o = e.pendingLanes),
			o === 0 && (Hn = null),
			Ya(t.stateNode),
			He(e, ve()),
			n !== null)
		)
			for (r = e.onRecoverableError, t = 0; t < n.length; t++)
				(l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
		if (vl) throw ((vl = !1), (e = di), (di = null), e);
		return (
			gl & 1 && e.tag !== 0 && Rt(),
			(o = e.pendingLanes),
			o & 1 ? (e === pi ? yr++ : ((yr = 0), (pi = e))) : (yr = 0),
			Un(),
			null
		);
	}
	function Rt() {
		if ($n !== null) {
			var e = lu(gl),
				n = en.transition,
				t = Y;
			try {
				if (((en.transition = null), (Y = 16 > e ? 16 : e), $n === null))
					var r = !1;
				else {
					if (((e = $n), ($n = null), (gl = 0), B & 6)) throw Error(m(331));
					var l = B;
					for (B |= 4, x = e.current; x !== null; ) {
						var o = x,
							i = o.child;
						if (x.flags & 16) {
							var u = o.deletions;
							if (u !== null) {
								for (var s = 0; s < u.length; s++) {
									var p = u[s];
									for (x = p; x !== null; ) {
										var y = x;
										switch (y.tag) {
											case 0:
											case 11:
											case 15:
												mr(8, y, o);
										}
										var g = y.child;
										if (g !== null) (g.return = y), (x = g);
										else
											for (; x !== null; ) {
												y = x;
												var h = y.sibling,
													S = y.return;
												if ((na(y), y === p)) {
													x = null;
													break;
												}
												if (h !== null) {
													(h.return = S), (x = h);
													break;
												}
												x = S;
											}
									}
								}
								var _ = o.alternate;
								if (_ !== null) {
									var P = _.child;
									if (P !== null) {
										_.child = null;
										do {
											var ye = P.sibling;
											(P.sibling = null), (P = ye);
										} while (P !== null);
									}
								}
								x = o;
							}
						}
						if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (x = i);
						else
							e: for (; x !== null; ) {
								if (((o = x), o.flags & 2048))
									switch (o.tag) {
										case 0:
										case 11:
										case 15:
											mr(9, o, o.return);
									}
								var f = o.sibling;
								if (f !== null) {
									(f.return = o.return), (x = f);
									break e;
								}
								x = o.return;
							}
					}
					var a = e.current;
					for (x = a; x !== null; ) {
						i = x;
						var d = i.child;
						if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (x = d);
						else
							e: for (i = a; x !== null; ) {
								if (((u = x), u.flags & 2048))
									try {
										switch (u.tag) {
											case 0:
											case 11:
											case 15:
												pl(9, u);
										}
									} catch (N) {
										he(u, u.return, N);
									}
								if (u === i) {
									x = null;
									break e;
								}
								var w = u.sibling;
								if (w !== null) {
									(w.return = u.return), (x = w);
									break e;
								}
								x = u.return;
							}
					}
					if (
						((B = l), Un(), mn && typeof mn.onPostCommitFiberRoot == "function")
					)
						try {
							mn.onPostCommitFiberRoot(Pr, e);
						} catch {}
					r = !0;
				}
				return r;
			} finally {
				(Y = t), (en.transition = n);
			}
		}
		return !1;
	}
	function ya(e, n, t) {
		(n = zt(t, n)),
			(n = js(e, n, 1)),
			(e = Vn(e, n, 1)),
			(n = je()),
			e !== null && (Bt(e, 1, n), He(e, n));
	}
	function he(e, n, t) {
		if (e.tag === 3) ya(e, e, t);
		else
			for (; n !== null; ) {
				if (n.tag === 3) {
					ya(n, e, t);
					break;
				} else if (n.tag === 1) {
					var r = n.stateNode;
					if (
						typeof n.type.getDerivedStateFromError == "function" ||
						(typeof r.componentDidCatch == "function" &&
							(Hn === null || !Hn.has(r)))
					) {
						(e = zt(t, e)),
							(e = Os(n, e, 1)),
							(n = Vn(n, e, 1)),
							(e = je()),
							n !== null && (Bt(n, 1, e), He(n, e));
						break;
					}
				}
				n = n.return;
			}
	}
	function Ef(e, n, t) {
		var r = e.pingCache;
		r !== null && r.delete(n),
			(n = je()),
			(e.pingedLanes |= e.suspendedLanes & t),
			Ce === e &&
				(Ne & t) === t &&
				(Ee === 4 || (Ee === 3 && (Ne & 130023424) === Ne && 500 > ve() - fi)
					? ot(e, 0)
					: (ci |= t)),
			He(e, n);
	}
	function ga(e, n) {
		n === 0 &&
			(e.mode & 1
				? ((n = zr), (zr <<= 1), !(zr & 130023424) && (zr = 4194304))
				: (n = 1));
		var t = je();
		(e = Cn(e, n)), e !== null && (Bt(e, n, t), He(e, t));
	}
	function xf(e) {
		var n = e.memoizedState,
			t = 0;
		n !== null && (t = n.retryLane), ga(e, t);
	}
	function Cf(e, n) {
		var t = 0;
		switch (e.tag) {
			case 13:
				var r = e.stateNode,
					l = e.memoizedState;
				l !== null && (t = l.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			default:
				throw Error(m(314));
		}
		r !== null && r.delete(n), ga(e, t);
	}
	var wa;
	wa = function (e, n, t) {
		if (e !== null)
			if (e.memoizedProps !== n.pendingProps || Ue.current) Ve = !0;
			else {
				if (!(e.lanes & t) && !(n.flags & 128)) return (Ve = !1), ff(e, n, t);
				Ve = !!(e.flags & 131072);
			}
		else (Ve = !1), ue && n.flags & 1048576 && qu(n, Jr, n.index);
		switch (((n.lanes = 0), n.tag)) {
			case 2:
				var r = n.type;
				fl(e, n), (e = n.pendingProps);
				var l = kt(n, Fe.current);
				Pt(n, t), (l = Ho(null, n, r, e, l, t));
				var o = $o();
				return (
					(n.flags |= 1),
					typeof l == "object" &&
					l !== null &&
					typeof l.render == "function" &&
					l.$$typeof === void 0
						? ((n.tag = 1),
						  (n.memoizedState = null),
						  (n.updateQueue = null),
						  Ae(r) ? ((o = !0), Gr(n)) : (o = !1),
						  (n.memoizedState =
								l.state !== null && l.state !== void 0 ? l.state : null),
						  jo(n),
						  (l.updater = al),
						  (n.stateNode = l),
						  (l._reactInternals = n),
						  Xo(n, r, e, t),
						  (n = bo(null, n, r, !0, o, t)))
						: ((n.tag = 0), ue && o && _o(n), De(null, n, l, t), (n = n.child)),
					n
				);
			case 16:
				r = n.elementType;
				e: {
					switch (
						(fl(e, n),
						(e = n.pendingProps),
						(l = r._init),
						(r = l(r._payload)),
						(n.type = r),
						(l = n.tag = Pf(r)),
						(e = un(r, e)),
						l)
					) {
						case 0:
							n = qo(null, n, r, e, t);
							break e;
						case 1:
							n = Qs(null, n, r, e, t);
							break e;
						case 11:
							n = Vs(null, n, r, e, t);
							break e;
						case 14:
							n = Bs(null, n, r, un(r.type, e), t);
							break e;
					}
					throw Error(m(306, r, ""));
				}
				return n;
			case 0:
				return (
					(r = n.type),
					(l = n.pendingProps),
					(l = n.elementType === r ? l : un(r, l)),
					qo(e, n, r, l, t)
				);
			case 1:
				return (
					(r = n.type),
					(l = n.pendingProps),
					(l = n.elementType === r ? l : un(r, l)),
					Qs(e, n, r, l, t)
				);
			case 3:
				e: {
					if ((Ks(n), e === null)) throw Error(m(387));
					(r = n.pendingProps),
						(o = n.memoizedState),
						(l = o.element),
						us(e, n),
						tl(n, r, null, t);
					var i = n.memoizedState;
					if (((r = i.element), o.isDehydrated))
						if (
							((o = {
								element: r,
								isDehydrated: !1,
								cache: i.cache,
								pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
								transitions: i.transitions,
							}),
							(n.updateQueue.baseState = o),
							(n.memoizedState = o),
							n.flags & 256)
						) {
							(l = zt(Error(m(423)), n)), (n = Gs(e, n, r, t, l));
							break e;
						} else if (r !== l) {
							(l = zt(Error(m(424)), n)), (n = Gs(e, n, r, t, l));
							break e;
						} else
							for (
								Ye = jn(n.stateNode.containerInfo.firstChild),
									Ge = n,
									ue = !0,
									on = null,
									t = os(n, null, r, t),
									n.child = t;
								t;

							)
								(t.flags = (t.flags & -3) | 4096), (t = t.sibling);
					else {
						if ((xt(), r === l)) {
							n = Pn(e, n, t);
							break e;
						}
						De(e, n, r, t);
					}
					n = n.child;
				}
				return n;
			case 5:
				return (
					cs(n),
					e === null && zo(n),
					(r = n.type),
					(l = n.pendingProps),
					(o = e !== null ? e.memoizedProps : null),
					(i = l.children),
					wo(r, l) ? (i = null) : o !== null && wo(r, o) && (n.flags |= 32),
					Ws(e, n),
					De(e, n, i, t),
					n.child
				);
			case 6:
				return e === null && zo(n), null;
			case 13:
				return Ys(e, n, t);
			case 4:
				return (
					Oo(n, n.stateNode.containerInfo),
					(r = n.pendingProps),
					e === null ? (n.child = Ct(n, null, r, t)) : De(e, n, r, t),
					n.child
				);
			case 11:
				return (
					(r = n.type),
					(l = n.pendingProps),
					(l = n.elementType === r ? l : un(r, l)),
					Vs(e, n, r, l, t)
				);
			case 7:
				return De(e, n, n.pendingProps, t), n.child;
			case 8:
				return De(e, n, n.pendingProps.children, t), n.child;
			case 12:
				return De(e, n, n.pendingProps.children, t), n.child;
			case 10:
				e: {
					if (
						((r = n.type._context),
						(l = n.pendingProps),
						(o = n.memoizedProps),
						(i = l.value),
						ee(br, r._currentValue),
						(r._currentValue = i),
						o !== null)
					)
						if (ln(o.value, i)) {
							if (o.children === l.children && !Ue.current) {
								n = Pn(e, n, t);
								break e;
							}
						} else
							for (o = n.child, o !== null && (o.return = n); o !== null; ) {
								var u = o.dependencies;
								if (u !== null) {
									i = o.child;
									for (var s = u.firstContext; s !== null; ) {
										if (s.context === r) {
											if (o.tag === 1) {
												(s = _n(-1, t & -t)), (s.tag = 2);
												var p = o.updateQueue;
												if (p !== null) {
													p = p.shared;
													var y = p.pending;
													y === null
														? (s.next = s)
														: ((s.next = y.next), (y.next = s)),
														(p.pending = s);
												}
											}
											(o.lanes |= t),
												(s = o.alternate),
												s !== null && (s.lanes |= t),
												Mo(o.return, t, n),
												(u.lanes |= t);
											break;
										}
										s = s.next;
									}
								} else if (o.tag === 10) i = o.type === n.type ? null : o.child;
								else if (o.tag === 18) {
									if (((i = o.return), i === null)) throw Error(m(341));
									(i.lanes |= t),
										(u = i.alternate),
										u !== null && (u.lanes |= t),
										Mo(i, t, n),
										(i = o.sibling);
								} else i = o.child;
								if (i !== null) i.return = o;
								else
									for (i = o; i !== null; ) {
										if (i === n) {
											i = null;
											break;
										}
										if (((o = i.sibling), o !== null)) {
											(o.return = i.return), (i = o);
											break;
										}
										i = i.return;
									}
								o = i;
							}
					De(e, n, l.children, t), (n = n.child);
				}
				return n;
			case 9:
				return (
					(l = n.type),
					(r = n.pendingProps.children),
					Pt(n, t),
					(l = qe(l)),
					(r = r(l)),
					(n.flags |= 1),
					De(e, n, r, t),
					n.child
				);
			case 14:
				return (
					(r = n.type),
					(l = un(r, n.pendingProps)),
					(l = un(r.type, l)),
					Bs(e, n, r, l, t)
				);
			case 15:
				return Hs(e, n, n.type, n.pendingProps, t);
			case 17:
				return (
					(r = n.type),
					(l = n.pendingProps),
					(l = n.elementType === r ? l : un(r, l)),
					fl(e, n),
					(n.tag = 1),
					Ae(r) ? ((e = !0), Gr(n)) : (e = !1),
					Pt(n, t),
					Ms(n, r, l),
					Xo(n, r, l, t),
					bo(null, n, r, !0, e, t)
				);
			case 19:
				return Js(e, n, t);
			case 22:
				return $s(e, n, t);
		}
		throw Error(m(156, n.tag));
	};
	function ka(e, n) {
		return bi(e, n);
	}
	function _f(e, n, t, r) {
		(this.tag = e),
			(this.key = t),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.ref = null),
			(this.pendingProps = n),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = r),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function nn(e, n, t, r) {
		return new _f(e, n, t, r);
	}
	function wi(e) {
		return (e = e.prototype), !(!e || !e.isReactComponent);
	}
	function Pf(e) {
		if (typeof e == "function") return wi(e) ? 1 : 0;
		if (e != null) {
			if (((e = e.$$typeof), e === dn)) return 11;
			if (e === pn) return 14;
		}
		return 2;
	}
	function Kn(e, n) {
		var t = e.alternate;
		return (
			t === null
				? ((t = nn(e.tag, n, e.key, e.mode)),
				  (t.elementType = e.elementType),
				  (t.type = e.type),
				  (t.stateNode = e.stateNode),
				  (t.alternate = e),
				  (e.alternate = t))
				: ((t.pendingProps = n),
				  (t.type = e.type),
				  (t.flags = 0),
				  (t.subtreeFlags = 0),
				  (t.deletions = null)),
			(t.flags = e.flags & 14680064),
			(t.childLanes = e.childLanes),
			(t.lanes = e.lanes),
			(t.child = e.child),
			(t.memoizedProps = e.memoizedProps),
			(t.memoizedState = e.memoizedState),
			(t.updateQueue = e.updateQueue),
			(n = e.dependencies),
			(t.dependencies =
				n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
			(t.sibling = e.sibling),
			(t.index = e.index),
			(t.ref = e.ref),
			t
		);
	}
	function El(e, n, t, r, l, o) {
		var i = 2;
		if (((r = e), typeof e == "function")) wi(e) && (i = 1);
		else if (typeof e == "string") i = 5;
		else
			e: switch (e) {
				case ke:
					return ut(t.children, l, o, n);
				case Me:
					(i = 8), (l |= 8);
					break;
				case fn:
					return (
						(e = nn(12, t, n, l | 2)), (e.elementType = fn), (e.lanes = o), e
					);
				case We:
					return (e = nn(13, t, n, l)), (e.elementType = We), (e.lanes = o), e;
				case tn:
					return (e = nn(19, t, n, l)), (e.elementType = tn), (e.lanes = o), e;
				case me:
					return xl(t, l, o, n);
				default:
					if (typeof e == "object" && e !== null)
						switch (e.$$typeof) {
							case wn:
								i = 10;
								break e;
							case Yn:
								i = 9;
								break e;
							case dn:
								i = 11;
								break e;
							case pn:
								i = 14;
								break e;
							case Ie:
								(i = 16), (r = null);
								break e;
						}
					throw Error(m(130, e == null ? e : typeof e, ""));
			}
		return (
			(n = nn(i, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = o), n
		);
	}
	function ut(e, n, t, r) {
		return (e = nn(7, e, r, n)), (e.lanes = t), e;
	}
	function xl(e, n, t, r) {
		return (
			(e = nn(22, e, r, n)),
			(e.elementType = me),
			(e.lanes = t),
			(e.stateNode = { isHidden: !1 }),
			e
		);
	}
	function ki(e, n, t) {
		return (e = nn(6, e, null, n)), (e.lanes = t), e;
	}
	function Si(e, n, t) {
		return (
			(n = nn(4, e.children !== null ? e.children : [], e.key, n)),
			(n.lanes = t),
			(n.stateNode = {
				containerInfo: e.containerInfo,
				pendingChildren: null,
				implementation: e.implementation,
			}),
			n
		);
	}
	function Nf(e, n, t, r, l) {
		(this.tag = n),
			(this.containerInfo = e),
			(this.finishedWork =
				this.pingCache =
				this.current =
				this.pendingChildren =
					null),
			(this.timeoutHandle = -1),
			(this.callbackNode = this.pendingContext = this.context = null),
			(this.callbackPriority = 0),
			(this.eventTimes = Gl(0)),
			(this.expirationTimes = Gl(-1)),
			(this.entangledLanes =
				this.finishedLanes =
				this.mutableReadLanes =
				this.expiredLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = Gl(0)),
			(this.identifierPrefix = r),
			(this.onRecoverableError = l),
			(this.mutableSourceEagerHydrationData = null);
	}
	function Ei(e, n, t, r, l, o, i, u, s) {
		return (
			(e = new Nf(e, n, t, u, s)),
			n === 1 ? ((n = 1), o === !0 && (n |= 8)) : (n = 0),
			(o = nn(3, null, null, n)),
			(e.current = o),
			(o.stateNode = e),
			(o.memoizedState = {
				element: r,
				isDehydrated: t,
				cache: null,
				transitions: null,
				pendingSuspenseBoundaries: null,
			}),
			jo(o),
			e
		);
	}
	function zf(e, n, t) {
		var r =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: fe,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: n,
			implementation: t,
		};
	}
	function Sa(e) {
		if (!e) return In;
		e = e._reactInternals;
		e: {
			if (Xn(e) !== e || e.tag !== 1) throw Error(m(170));
			var n = e;
			do {
				switch (n.tag) {
					case 3:
						n = n.stateNode.context;
						break e;
					case 1:
						if (Ae(n.type)) {
							n = n.stateNode.__reactInternalMemoizedMergedChildContext;
							break e;
						}
				}
				n = n.return;
			} while (n !== null);
			throw Error(m(171));
		}
		if (e.tag === 1) {
			var t = e.type;
			if (Ae(t)) return Xu(e, t, n);
		}
		return n;
	}
	function Ea(e, n, t, r, l, o, i, u, s) {
		return (
			(e = Ei(t, r, !0, e, l, o, i, u, s)),
			(e.context = Sa(null)),
			(t = e.current),
			(r = je()),
			(l = Wn(t)),
			(o = _n(r, l)),
			(o.callback = n ?? null),
			Vn(t, o, l),
			(e.current.lanes = l),
			Bt(e, l, r),
			He(e, r),
			e
		);
	}
	function Cl(e, n, t, r) {
		var l = n.current,
			o = je(),
			i = Wn(l);
		return (
			(t = Sa(t)),
			n.context === null ? (n.context = t) : (n.pendingContext = t),
			(n = _n(o, i)),
			(n.payload = { element: e }),
			(r = r === void 0 ? null : r),
			r !== null && (n.callback = r),
			(e = Vn(l, n, i)),
			e !== null && (cn(e, l, i, o), nl(e, l, i)),
			i
		);
	}
	function _l(e) {
		if (((e = e.current), !e.child)) return null;
		switch (e.child.tag) {
			case 5:
				return e.child.stateNode;
			default:
				return e.child.stateNode;
		}
	}
	function xa(e, n) {
		if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
			var t = e.retryLane;
			e.retryLane = t !== 0 && t < n ? t : n;
		}
	}
	function xi(e, n) {
		xa(e, n), (e = e.alternate) && xa(e, n);
	}
	function Ff() {
		return null;
	}
	var Ca =
		typeof reportError == "function"
			? reportError
			: function (e) {
					console.error(e);
			  };
	function Ci(e) {
		this._internalRoot = e;
	}
	(Pl.prototype.render = Ci.prototype.render =
		function (e) {
			var n = this._internalRoot;
			if (n === null) throw Error(m(409));
			Cl(e, n, null, null);
		}),
		(Pl.prototype.unmount = Ci.prototype.unmount =
			function () {
				var e = this._internalRoot;
				if (e !== null) {
					this._internalRoot = null;
					var n = e.containerInfo;
					lt(function () {
						Cl(null, e, null, null);
					}),
						(n[kn] = null);
				}
			});
	function Pl(e) {
		this._internalRoot = e;
	}
	Pl.prototype.unstable_scheduleHydration = function (e) {
		if (e) {
			var n = uu();
			e = { blockedOn: null, target: e, priority: n };
			for (var t = 0; t < Rn.length && n !== 0 && n < Rn[t].priority; t++);
			Rn.splice(t, 0, e), t === 0 && cu(e);
		}
	};
	function _i(e) {
		return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
	}
	function Nl(e) {
		return !(
			!e ||
			(e.nodeType !== 1 &&
				e.nodeType !== 9 &&
				e.nodeType !== 11 &&
				(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
		);
	}
	function _a() {}
	function Lf(e, n, t, r, l) {
		if (l) {
			if (typeof r == "function") {
				var o = r;
				r = function () {
					var p = _l(i);
					o.call(p);
				};
			}
			var i = Ea(n, r, e, 0, null, !1, !1, "", _a);
			return (
				(e._reactRootContainer = i),
				(e[kn] = i.current),
				nr(e.nodeType === 8 ? e.parentNode : e),
				lt(),
				i
			);
		}
		for (; (l = e.lastChild); ) e.removeChild(l);
		if (typeof r == "function") {
			var u = r;
			r = function () {
				var p = _l(s);
				u.call(p);
			};
		}
		var s = Ei(e, 0, !1, null, null, !1, !1, "", _a);
		return (
			(e._reactRootContainer = s),
			(e[kn] = s.current),
			nr(e.nodeType === 8 ? e.parentNode : e),
			lt(function () {
				Cl(n, s, t, r);
			}),
			s
		);
	}
	function zl(e, n, t, r, l) {
		var o = t._reactRootContainer;
		if (o) {
			var i = o;
			if (typeof l == "function") {
				var u = l;
				l = function () {
					var s = _l(i);
					u.call(s);
				};
			}
			Cl(n, i, e, l);
		} else i = Lf(t, n, e, l, r);
		return _l(i);
	}
	(ou = function (e) {
		switch (e.tag) {
			case 3:
				var n = e.stateNode;
				if (n.current.memoizedState.isDehydrated) {
					var t = Vt(n.pendingLanes);
					t !== 0 &&
						(Yl(n, t | 1), He(n, ve()), !(B & 6) && ((Tt = ve() + 500), Un()));
				}
				break;
			case 13:
				lt(function () {
					var r = Cn(e, 1);
					if (r !== null) {
						var l = je();
						cn(r, e, 1, l);
					}
				}),
					xi(e, 1);
		}
	}),
		(Xl = function (e) {
			if (e.tag === 13) {
				var n = Cn(e, 134217728);
				if (n !== null) {
					var t = je();
					cn(n, e, 134217728, t);
				}
				xi(e, 134217728);
			}
		}),
		(iu = function (e) {
			if (e.tag === 13) {
				var n = Wn(e),
					t = Cn(e, n);
				if (t !== null) {
					var r = je();
					cn(t, e, n, r);
				}
				xi(e, n);
			}
		}),
		(uu = function () {
			return Y;
		}),
		(su = function (e, n) {
			var t = Y;
			try {
				return (Y = e), n();
			} finally {
				Y = t;
			}
		}),
		(Bl = function (e, n, t) {
			switch (n) {
				case "input":
					if ((Ml(e, t), (n = t.name), t.type === "radio" && n != null)) {
						for (t = e; t.parentNode; ) t = t.parentNode;
						for (
							t = t.querySelectorAll(
								"input[name=" + JSON.stringify("" + n) + '][type="radio"]'
							),
								n = 0;
							n < t.length;
							n++
						) {
							var r = t[n];
							if (r !== e && r.form === e.form) {
								var l = Qr(r);
								if (!l) throw Error(m(90));
								Ri(r), Ml(r, l);
							}
						}
					}
					break;
				case "textarea":
					Ii(e, t);
					break;
				case "select":
					(n = t.value), n != null && st(e, !!t.multiple, n, !1);
			}
		}),
		(Ki = vi),
		(Gi = lt);
	var Tf = { usingClientEntryPoint: !1, Events: [lr, gt, Qr, Wi, Qi, vi] },
		gr = {
			findFiberByHostInstance: Jn,
			bundleType: 0,
			version: "18.3.1",
			rendererPackageName: "react-dom",
		},
		Rf = {
			bundleType: gr.bundleType,
			version: gr.version,
			rendererPackageName: gr.rendererPackageName,
			rendererConfig: gr.rendererConfig,
			overrideHookState: null,
			overrideHookStateDeletePath: null,
			overrideHookStateRenamePath: null,
			overrideProps: null,
			overridePropsDeletePath: null,
			overridePropsRenamePath: null,
			setErrorHandler: null,
			setSuspenseHandler: null,
			scheduleUpdate: null,
			currentDispatcherRef: q.ReactCurrentDispatcher,
			findHostInstanceByFiber: function (e) {
				return (e = Zi(e)), e === null ? null : e.stateNode;
			},
			findFiberByHostInstance: gr.findFiberByHostInstance || Ff,
			findHostInstancesForRefresh: null,
			scheduleRefresh: null,
			scheduleRoot: null,
			setRefreshHandler: null,
			getCurrentFiber: null,
			reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
		};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Fl.isDisabled && Fl.supportsFiber)
			try {
				(Pr = Fl.inject(Rf)), (mn = Fl);
			} catch {}
	}
	return (
		($e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tf),
		($e.createPortal = function (e, n) {
			var t =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!_i(n)) throw Error(m(200));
			return zf(e, n, null, t);
		}),
		($e.createRoot = function (e, n) {
			if (!_i(e)) throw Error(m(299));
			var t = !1,
				r = "",
				l = Ca;
			return (
				n != null &&
					(n.unstable_strictMode === !0 && (t = !0),
					n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
					n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
				(n = Ei(e, 1, !1, null, null, t, !1, r, l)),
				(e[kn] = n.current),
				nr(e.nodeType === 8 ? e.parentNode : e),
				new Ci(n)
			);
		}),
		($e.findDOMNode = function (e) {
			if (e == null) return null;
			if (e.nodeType === 1) return e;
			var n = e._reactInternals;
			if (n === void 0)
				throw typeof e.render == "function"
					? Error(m(188))
					: ((e = Object.keys(e).join(",")), Error(m(268, e)));
			return (e = Zi(n)), (e = e === null ? null : e.stateNode), e;
		}),
		($e.flushSync = function (e) {
			return lt(e);
		}),
		($e.hydrate = function (e, n, t) {
			if (!Nl(n)) throw Error(m(200));
			return zl(null, e, n, !0, t);
		}),
		($e.hydrateRoot = function (e, n, t) {
			if (!_i(e)) throw Error(m(405));
			var r = (t != null && t.hydratedSources) || null,
				l = !1,
				o = "",
				i = Ca;
			if (
				(t != null &&
					(t.unstable_strictMode === !0 && (l = !0),
					t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
					t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
				(n = Ea(n, null, e, 1, t ?? null, l, !1, o, i)),
				(e[kn] = n.current),
				nr(e),
				r)
			)
				for (e = 0; e < r.length; e++)
					(t = r[e]),
						(l = t._getVersion),
						(l = l(t._source)),
						n.mutableSourceEagerHydrationData == null
							? (n.mutableSourceEagerHydrationData = [t, l])
							: n.mutableSourceEagerHydrationData.push(t, l);
			return new Pl(n);
		}),
		($e.render = function (e, n, t) {
			if (!Nl(n)) throw Error(m(200));
			return zl(null, e, n, !1, t);
		}),
		($e.unmountComponentAtNode = function (e) {
			if (!Nl(e)) throw Error(m(40));
			return e._reactRootContainer
				? (lt(function () {
						zl(null, null, e, !1, function () {
							(e._reactRootContainer = null), (e[kn] = null);
						});
				  }),
				  !0)
				: !1;
		}),
		($e.unstable_batchedUpdates = vi),
		($e.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
			if (!Nl(t)) throw Error(m(200));
			if (e == null || e._reactInternals === void 0) throw Error(m(38));
			return zl(e, n, t, !1, r);
		}),
		($e.version = "18.3.1-next-f1338f8080-20240426"),
		$e
	);
}
var Ma;
function Oa() {
	if (Ma) return zi.exports;
	Ma = 1;
	function E() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
			} catch (R) {
				console.error(R);
			}
	}
	return E(), (zi.exports = Vf()), zi.exports;
}
var Da;
function Bf() {
	if (Da) return Ll;
	Da = 1;
	var E = Oa();
	return (Ll.createRoot = E.createRoot), (Ll.hydrateRoot = E.hydrateRoot), Ll;
}
var Hf = Bf();
function $f(E) {
	const { handleToggleMenu: R } = E;
	return L.jsxs("header", {
		children: [
			L.jsx("button", {
				className: "open-nav-button",
				onClick: R,
				children: L.jsx("span", {
					className: "material-symbols-outlined",
					children: "menu",
				}),
			}),
			L.jsx("h1", { className: "text-gradient", children: "Pokédex" }),
		],
	});
}
const ja = [
		"Bulbasaur",
		"Ivysaur",
		"Venusaur",
		"Charmander",
		"Charmeleon",
		"Charizard",
		"Squirtle",
		"Wartortle",
		"Blastoise",
		"Caterpie",
		"Metapod",
		"Butterfree",
		"Weedle",
		"Kakuna",
		"Beedrill",
		"Pidgey",
		"Pidgeotto",
		"Pidgeot",
		"Rattata",
		"Raticate",
		"Spearow",
		"Fearow",
		"Ekans",
		"Arbok",
		"Pikachu",
		"Raichu",
		"Sandshrew",
		"Sandslash",
		"Nidoran♀",
		"Nidorina",
		"Nidoqueen",
		"Nidoran♂",
		"Nidorino",
		"Nidoking",
		"Clefairy",
		"Clefable",
		"Vulpix",
		"Ninetales",
		"Jigglypuff",
		"Wigglytuff",
		"Zubat",
		"Golbat",
		"Oddish",
		"Gloom",
		"Vileplume",
		"Paras",
		"Parasect",
		"Venonat",
		"Venomoth",
		"Diglett",
		"Dugtrio",
		"Meowth",
		"Persian",
		"Psyduck",
		"Golduck",
		"Mankey",
		"Primeape",
		"Growlithe",
		"Arcanine",
		"Poliwag",
		"Poliwhirl",
		"Poliwrath",
		"Abra",
		"Kadabra",
		"Alakazam",
		"Machop",
		"Machoke",
		"Machamp",
		"Bellsprout",
		"Weepinbell",
		"Victreebel",
		"Tentacool",
		"Tentacruel",
		"Geodude",
		"Graveler",
		"Golem",
		"Ponyta",
		"Rapidash",
		"Slowpoke",
		"Slowbro",
		"Magnemite",
		"Magneton",
		"Farfetch'd",
		"Doduo",
		"Dodrio",
		"Seel",
		"Dewgong",
		"Grimer",
		"Muk",
		"Shellder",
		"Cloyster",
		"Gastly",
		"Haunter",
		"Gengar",
		"Onix",
		"Drowzee",
		"Hypno",
		"Krabby",
		"Kingler",
		"Voltorb",
		"Electrode",
		"Exeggcute",
		"Exeggutor",
		"Cubone",
		"Marowak",
		"Hitmonlee",
		"Hitmonchan",
		"Lickitung",
		"Koffing",
		"Weezing",
		"Rhyhorn",
		"Rhydon",
		"Chansey",
		"Tangela",
		"Kangaskhan",
		"Horsea",
		"Seadra",
		"Goldeen",
		"Seaking",
		"Staryu",
		"Starmie",
		"Mr. Mime",
		"Scyther",
		"Jynx",
		"Electabuzz",
		"Magmar",
		"Pinsir",
		"Tauros",
		"Magikarp",
		"Gyarados",
		"Lapras",
		"Ditto",
		"Eevee",
		"Vaporeon",
		"Jolteon",
		"Flareon",
		"Porygon",
		"Omanyte",
		"Omastar",
		"Kabuto",
		"Kabutops",
		"Aerodactyl",
		"Snorlax",
		"Articuno",
		"Zapdos",
		"Moltres",
		"Dratini",
		"Dragonair",
		"Dragonite",
		"Mewtwo",
		"Mew",
	],
	Mt = {
		normal: { color: "#6C6C6C", background: "#A8A77A" },
		fire: { color: "#FFFFFF", background: "#EE8130" },
		water: { color: "#FFFFFF", background: "#6390F0" },
		electric: { color: "#000000", background: "#F7D02C" },
		grass: { color: "#FFFFFF", background: "#7AC74C" },
		ice: { color: "#000000", background: "#96D9D6" },
		fighting: { color: "#FFFFFF", background: "#C22E28" },
		poison: { color: "#FFFFFF", background: "#A33EA1" },
		ground: { color: "#FFFFFF", background: "#E2BF65" },
		flying: { color: "#000000", background: "#A98FF3" },
		psychic: { color: "#FFFFFF", background: "#F95587" },
		bug: { color: "#000000", background: "#A6B91A" },
		rock: { color: "#FFFFFF", background: "#B6A136" },
		ghost: { color: "#FFFFFF", background: "#735797" },
		dragon: { color: "#FFFFFF", background: "#6F35FC" },
		dark: { color: "#FFFFFF", background: "#705746" },
		steel: { color: "#000000", background: "#B7B7CE" },
		fairy: { color: "#000000", background: "#D685AD" },
	};
function Wf(E) {
	return E + 1;
}
function Tl(E) {
	return `${E + 1 > 99 ? E + 1 : E + 1 > 9 ? `0${E + 1}` : `00${E + 1}`}`;
}
var Qf = Oa();
const Kf = Df(Qf);
function Gf(E) {
	const { children: R, handleCloseModal: m } = E;
	return Kf.createPortal(
		L.jsx("div", {
			className: "modal-container",
			children: L.jsx("button", {
				onClick: m,
				className: "modal-underlay",
				children: L.jsx("div", { className: "modal-content", children: R }),
			}),
		}),
		document.getElementById("portal")
	);
}
function Yf(E) {
	var m, ne;
	const { type: R } = E;
	return L.jsx("div", {
		className: "type-tile",
		style: {
			color: (m = Mt == null ? void 0 : Mt[R]) == null ? void 0 : m.color,
			background:
				(ne = Mt == null ? void 0 : Mt[R]) == null ? void 0 : ne.background,
			cursor: "grabbing",
		},
		children: L.jsx("p", { children: R }),
	});
}
function Xf(E) {
	const { selectedPokemon: R } = E,
		[m, ne] = zn.useState(null),
		[j, H] = zn.useState(!1),
		[X, oe] = zn.useState(null),
		[A, se] = zn.useState(!1),
		{ name: ae, stats: te, types: J, moves: Oe, sprites: ze } = m || {},
		Z = Object.keys(ze || {}).filter(
			(D) => !(!ze[D] || ["versions", "other"].includes(D))
		);
	async function K(D, ce) {
		var q;
		if (A || !localStorage || !ce) return;
		let V = {};
		if (
			(localStorage.getItem("pokemon-moves") &&
				(V = JSON.parse(localStorage.getItem("pokemon-moves"))),
			D in V)
		) {
			oe(V[D]), console.log("Found move in cache");
			return;
		}
		try {
			se(!0);
			const fe = await (await fetch(ce)).json();
			console.log("fetched move from API", fe);
			const ke =
					(q =
						fe == null
							? void 0
							: fe.flavor_text_entries.filter(
									(fn) => fn.version_group.name == "firered-leafgreen"
							  )[0]) == null
						? void 0
						: q.flavor_text,
				Me = { name: D, description: ke };
			oe(Me),
				(V[D] = Me),
				localStorage.setItem("pokemon-moves", JSON.stringify(V));
		} catch (we) {
			console.log(we);
		} finally {
			se(!1);
		}
	}
	return (
		zn.useEffect(() => {
			if (j || !localStorage) return;
			let D = {};
			if (
				(localStorage.getItem("pokedex") &&
					(D = JSON.parse(localStorage.getItem("pokedex"))),
				R in D)
			) {
				ne(D[R]), console.log("Found Pokemon in cache");
				return;
			}
			async function ce() {
				H(!0);
				try {
					const V = "https://pokeapi.co/api/v2/",
						q = `pokemon/${Wf(R)}`,
						we = V + q,
						fe = await fetch(we);
					if (!fe.ok) throw new Error(`Failed to fetch data for ${R}`);
					const ke = await fe.json();
					ne(ke),
						console.log("Fetched Pokemon Data"),
						(D[R] = ke),
						localStorage.setItem("pokedex", JSON.stringify(D));
				} catch (V) {
					console.log(V.message);
				} finally {
					H(!1);
				}
			}
			ce();
		}, [R]),
		j || !m
			? L.jsx("div", { children: L.jsx("h4", { children: "Loading...." }) })
			: L.jsxs("div", {
					className: "poke-card",
					children: [
						X &&
							L.jsxs(Gf, {
								handleCloseModal: () => {
									oe(null);
								},
								children: [
									L.jsxs("div", {
										children: [
											L.jsx("h6", { children: "NAME" }),
											L.jsx("h2", {
												style: { color: "deepskyblue" },
												children:
													X == null ? void 0 : X.name.replaceAll("-", " "),
											}),
										],
									}),
									L.jsxs("div", {
										children: [
											L.jsx("h6", { children: "DESCRIPTION" }),
											L.jsx("p", {
												style: {
													fontFamily: "'Press Start 2P', cursive",
													fontSize: "1vw",
													color: "wheat",
													lineHeight: "50px",
												},
												children:
													(X == null ? void 0 : X.description) ||
													"None Available through the API",
											}),
										],
									}),
								],
							}),
						L.jsxs("div", {
							children: [
								L.jsxs("h4", { children: ["#", Tl(R)] }),
								L.jsx("h2", { children: ae }),
							],
						}),
						L.jsx("div", {
							className: "type-container",
							children: J.map((D, ce) => {
								var V;
								return L.jsx(
									Yf,
									{
										type:
											(V = D == null ? void 0 : D.type) == null
												? void 0
												: V.name,
									},
									ce
								);
							}),
						}),
						L.jsx("img", {
							className: "default-img",
							src: "/pokemon/" + Tl(R) + ".png",
							alt: `${ae}-large-img`,
						}),
						L.jsx("div", {
							className: "img-container",
							children: Z.map((D, ce) => {
								const V = ze[D];
								return L.jsx(
									"img",
									{
										src: V,
										alt: `${ae}-img-${D}`,
										style: {
											fontWeight: "bold",
											borderStyle: "ridge",
											borderWidth: "5px",
											borderColor: "cyan",
											borderRadius: "0",
											cursor: "pointer",
										},
									},
									ce
								);
							}),
						}),
						L.jsx("h3", {
							style: {
								border: "4px solid black",
								padding: "10px 20px",
								backgroundColor: "#d83512",
								color: "#fff",
								cursor: "pointer",
							},
							children: "STATS",
						}),
						L.jsx("div", {
							className: "stats-card",
							children: te.map((D, ce) => {
								const { stat: V, base_stat: q } = D;
								return L.jsxs(
									"div",
									{
										className: "stat-item",
										children: [
											L.jsxs("p", {
												style: { letterSpacing: "2px", color: "burlywood" },
												children: [
													V == null ? void 0 : V.name.replaceAll("-", " "),
													":",
												],
											}),
											L.jsx("h4", {
												style: { fontFamily: "JetBrains Mono" },
												children: q,
											}),
										],
									},
									ce
								);
							}),
						}),
						L.jsx("h3", {
							style: {
								border: "4px solid black",
								padding: "10px 20px",
								backgroundColor: "#f39c12",
								color: "#fff",
								cursor: "none",
							},
							children: "MOVES",
						}),
						L.jsx("div", {
							className: "pokemon-move-grid",
							children: Oe.map((D, ce) => {
								var V;
								return L.jsx(
									"button",
									{
										className: "button-card pokemon-move",
										onClick: () => {
											var q, we;
											K(
												(q = D == null ? void 0 : D.move) == null
													? void 0
													: q.name,
												(we = D == null ? void 0 : D.move) == null
													? void 0
													: we.url
											);
										},
										children: L.jsx("p", {
											style: {
												fontFamily: "'Press Start 2P', cursive",
												fontWeight: "300",
												fontSize: "0.8vw",
												color: "white",
												textShadow:
													"6px 2px rgb(228, 43, 92), 6px 4px rgb(8, 8, 61)",
												animation: "pulse 2s infinite",
											},
											children:
												(V = D == null ? void 0 : D.move) == null
													? void 0
													: V.name.replaceAll("-", " "),
										}),
									},
									ce
								);
							}),
						}),
					],
			  })
	);
}
function Jf(E) {
	const {
			selectedPokemon: R,
			setSelectedPoekmon: m,
			handleToggleMenu: ne,
			showSideMenu: j,
		} = E,
		[H, X] = zn.useState(""),
		oe = ja.filter(
			(A, se) =>
				!!(
					Tl(se).includes(H.toLowerCase()) ||
					A.toLowerCase().includes(H.toLowerCase())
				)
		);
	return L.jsxs("nav", {
		className: " " + (j ? "" : "open"),
		children: [
			L.jsxs("div", {
				className: "header " + (j ? "" : "open"),
				children: [
					L.jsx("button", {
						className: "open-nav-button",
						onClick: ne,
						children: "←",
					}),
					L.jsx("h1", { className: "text-gradient", children: "Pokédex" }),
				],
			}),
			L.jsx("input", {
				placeholder: "E.g. 001 or Bulbasaur",
				type: "text",
				value: H,
				onChange: (A) => {
					X(A.target.value);
				},
			}),
			oe.map((A, se) => {
				const ae = ja.indexOf(A);
				return L.jsxs(
					"button",
					{
						onClick: () => {
							m(ae), ne();
						},
						className: "nav-card" + (se === R ? "nav-card-selected" : " "),
						children: [
							L.jsx("p", { children: Tl(ae) }),
							L.jsx("p", { children: A }),
						],
					},
					se
				);
			}),
		],
	});
}
function Zf() {
	const [E, R] = zn.useState(0),
		[m, ne] = zn.useState(!0);
	function j() {
		ne(!m);
	}
	return L.jsxs(L.Fragment, {
		children: [
			L.jsx($f, { handleToggleMenu: j }),
			L.jsx(Jf, {
				selectedPokemon: E,
				setSelectedPoekmon: R,
				showSideMenu: m,
				handleToggleMenu: j,
			}),
			L.jsx(Xf, { selectedPokemon: E }),
		],
	});
}
Hf.createRoot(document.getElementById("root")).render(
	L.jsx(zn.StrictMode, { children: L.jsx(Zf, {}) })
);
