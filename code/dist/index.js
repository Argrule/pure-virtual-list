import Ae, { useMemo as ne, useState as ae, useRef as oe, useCallback as fr, useEffect as cr } from "react";
var ue = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function dr() {
  if (De)
    return M;
  De = 1;
  var F = Ae, g = Symbol.for("react.element"), A = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, T = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(b, f, S) {
    var v, m = {}, y = null, j = null;
    S !== void 0 && (y = "" + S), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (j = f.ref);
    for (v in f)
      d.call(f, v) && !C.hasOwnProperty(v) && (m[v] = f[v]);
    if (b && b.defaultProps)
      for (v in f = b.defaultProps, f)
        m[v] === void 0 && (m[v] = f[v]);
    return { $$typeof: g, type: b, key: y, ref: j, props: m, _owner: T.current };
  }
  return M.Fragment = A, M.jsx = x, M.jsxs = x, M;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function vr() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var F = Ae, g = Symbol.for("react.element"), A = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), b = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), V = Symbol.iterator, N = "@@iterator";
    function P(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = V && e[V] || e[N];
      return typeof r == "function" ? r : null;
    }
    var E = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        I("error", e, t);
      }
    }
    function I(e, r, t) {
      {
        var n = E.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var O = !1, $ = !1, z = !1, Ie = !1, $e = !1, se;
    se = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === C || $e || e === T || e === S || e === v || Ie || e === j || O || $ || z || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === m || e.$$typeof === x || e.$$typeof === b || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case A:
          return "Portal";
        case C:
          return "Profiler";
        case T:
          return "StrictMode";
        case S:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return le(r) + ".Consumer";
          case x:
            var t = e;
            return le(t._context) + ".Provider";
          case f:
            return Ye(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case y: {
            var i = e, u = i._payload, o = i._init;
            try {
              return R(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, W = 0, fe, ce, de, ve, pe, he, ge;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Me() {
      {
        if (W === 0) {
          fe = console.log, ce = console.info, de = console.warn, ve = console.error, pe = console.group, he = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Le() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: fe
            }),
            info: w({}, e, {
              value: ce
            }),
            warn: w({}, e, {
              value: de
            }),
            error: w({}, e, {
              value: ve
            }),
            group: w({}, e, {
              value: pe
            }),
            groupCollapsed: w({}, e, {
              value: he
            }),
            groupEnd: w({}, e, {
              value: ge
            })
          });
        }
        W < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = E.ReactCurrentDispatcher, K;
    function U(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
          }
        return `
` + K + e;
      }
    }
    var X = !1, B;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ve();
    }
    function be(e, r) {
      if (!e || X)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      X = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = G.current, G.current = null, Me();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              n = _;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), p = n.stack.split(`
`), s = a.length - 1, l = p.length - 1; s >= 1 && l >= 0 && a[s] !== p[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== p[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== p[l]) {
                    var h = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, h), h;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        X = !1, G.current = u, Le(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", ke = D ? U(D) : "";
      return typeof e == "function" && B.set(e, ke), ke;
    }
    function Ne(e, r, t) {
      return be(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, Ue(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case S:
          return U("Suspense");
        case v:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ne(e.render);
          case m:
            return q(e.type, r, t);
          case y: {
            var n = e, i = n._payload, u = n._init;
            try {
              return q(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, Ee = {}, ye = E.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var u = Function.call.bind(H);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (J(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), J(null)), a instanceof Error && !(a.message in Ee) && (Ee[a.message] = !0, J(i), c("Failed %s type: %s", t, a.message), J(null));
          }
      }
    }
    var qe = Array.isArray;
    function Z(e) {
      return qe(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function _e(e) {
      if (Je(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), Re(e);
    }
    var Y = E.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Se, Q;
    Q = {};
    function Ge(e) {
      if (H.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (H.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = R(Y.current.type);
        Q[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(Y.current.type), e.ref), Q[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Te || (Te = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Se || (Se = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, p = null;
        t !== void 0 && (_e(t), a = "" + t), Ke(r) && (_e(r.key), a = "" + r.key), Ge(r) && (p = r.ref, Xe(r, i));
        for (u in r)
          H.call(r, u) && !ze.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, l), p && Qe(o, l);
        }
        return er(e, a, p, i, n, Y.current, o);
      }
    }
    var ee = E.ReactCurrentOwner, Oe = E.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function Ce() {
      {
        if (ee.current) {
          var e = R(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var xe = {};
    function nr(e) {
      {
        var r = Ce();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Pe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ee.current && (n = " It was passed a child from " + R(e._owner.type) + "."), k(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            te(n) && Pe(n, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = P(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              te(o.value) && Pe(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var i = R(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function je(e, r, t, n, i, u) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = tr(i);
          p ? a += p : a += Ce();
          var s;
          e === null ? s = "null" : Z(e) ? s = "array" : e !== void 0 && e.$$typeof === g ? (s = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = rr(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (Z(h)) {
                for (var D = 0; D < h.length; D++)
                  we(h[D], e);
                Object.freeze && Object.freeze(h);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(h, e);
        }
        return e === d ? or(l) : ar(l), l;
      }
    }
    function ir(e, r, t) {
      return je(e, r, t, !0);
    }
    function ur(e, r, t) {
      return je(e, r, t, !1);
    }
    var sr = ur, lr = ir;
    L.Fragment = d, L.jsx = sr, L.jsxs = lr;
  }()), L;
}
process.env.NODE_ENV === "production" ? ue.exports = dr() : ue.exports = vr();
var ie = ue.exports;
const hr = (F) => {
  const { data: g, renderItem: A, itemHeight: d, containerHeight: T, buffer: C } = F, x = ne(() => g.length * d, [g, d]), b = ne(() => Math.ceil(T / d), [T, d]), f = ne(() => Math.ceil(C / 2), [C]), [S, v] = ae(0), [m, y] = ae(0), [j, V] = ae(0), N = oe(null), P = oe(!1), E = oe(1), c = fr(() => {
    if (P.current)
      return;
    P.current = !0;
    const { scrollTop: I } = N.current, O = Math.floor(I / d);
    if (O === E.current) {
      P.current = !1;
      return;
    }
    E.current = O, requestAnimationFrame(() => {
      const $ = Math.max(0, O - f), z = Math.min(g.length, $ + b + f * 2);
      v($), y(z), V($ * d), P.current = !1;
    });
  }, [g, d, b, f]);
  return cr(() => (c(), () => {
    P.current = !1, E.current = 1;
  }), [c]), ie.jsx("div", { style: { overflow: "auto", maxHeight: T }, onScroll: c, ref: N, children: ie.jsx("section", { style: {
    height: x,
    paddingTop: j,
    boxSizing: "border-box"
  }, children: g.slice(S, m).map((I, O) => ie.jsx("div", { style: { height: d }, children: A(I, O) }, O)) }) });
};
export {
  hr as VirtualList
};
