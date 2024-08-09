import Fe, { useState as G } from "react";
import './index.css';var ie = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function dr() {
  if (ke) return M;
  ke = 1;
  var I = Fe, k = Symbol.for("react.element"), j = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, x = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(T, d, w) {
    var h, _ = {}, R = null, o = null;
    w !== void 0 && (R = "" + w), d.key !== void 0 && (R = "" + d.key), d.ref !== void 0 && (o = d.ref);
    for (h in d) f.call(d, h) && !W.hasOwnProperty(h) && (_[h] = d[h]);
    if (T && T.defaultProps) for (h in d = T.defaultProps, d) _[h] === void 0 && (_[h] = d[h]);
    return { $$typeof: k, type: T, key: R, ref: o, props: _, _owner: x.current };
  }
  return M.Fragment = j, M.jsx = D, M.jsxs = D, M;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function vr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var I = Fe, k = Symbol.for("react.element"), j = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), T = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), o = Symbol.for("react.offscreen"), O = Symbol.iterator, z = "@@iterator";
    function X(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = O && e[O] || e[z];
      return typeof r == "function" ? r : null;
    }
    var S = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        m("error", e, t);
      }
    }
    function m(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var l = t.map(function(s) {
          return String(s);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var g = !1, P = !1, Ae = !1, Ie = !1, We = !1, se;
    se = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === W || We || e === x || e === w || e === h || Ie || e === o || g || P || Ae || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === _ || e.$$typeof === D || e.$$typeof === T || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && a("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case j:
          return "Portal";
        case W:
          return "Profiler";
        case x:
          return "StrictMode";
        case w:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ue(r) + ".Consumer";
          case D:
            var t = e;
            return ue(t._context) + ".Provider";
          case d:
            return Ve(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case R: {
            var u = e, l = u._payload, s = u._init;
            try {
              return C(s(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, Y = 0, le, ce, fe, de, ve, pe, he;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Ye() {
      {
        if (Y === 0) {
          le = console.log, ce = console.info, fe = console.warn, de = console.error, ve = console.group, pe = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
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
        Y++;
      }
    }
    function Ne() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: le
            }),
            info: F({}, e, {
              value: ce
            }),
            warn: F({}, e, {
              value: fe
            }),
            error: F({}, e, {
              value: de
            }),
            group: F({}, e, {
              value: ve
            }),
            groupCollapsed: F({}, e, {
              value: pe
            }),
            groupEnd: F({}, e, {
              value: he
            })
          });
        }
        Y < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = S.ReactCurrentDispatcher, Z;
    function B(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            Z = n && n[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var Q = !1, J;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Le();
    }
    function be(e, r) {
      if (!e || Q)
        return "";
      {
        var t = J.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Q = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = H.current, H.current = null, Ye();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (y) {
              n = y;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (y) {
              n = y;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            n = y;
          }
          e();
        }
      } catch (y) {
        if (y && n && typeof y.stack == "string") {
          for (var i = y.stack.split(`
`), b = n.stack.split(`
`), v = i.length - 1, p = b.length - 1; v >= 1 && p >= 0 && i[v] !== b[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (i[v] !== b[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || i[v] !== b[p]) {
                    var E = `
` + i[v].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, E), E;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        Q = !1, H.current = l, Ne(), Error.prepareStackTrace = u;
      }
      var V = e ? e.displayName || e.name : "", A = V ? B(V) : "";
      return typeof e == "function" && J.set(e, A), A;
    }
    function Me(e, r, t) {
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
        return B(e);
      switch (e) {
        case w:
          return B("Suspense");
        case h:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Me(e.render);
          case _:
            return q(e.type, r, t);
          case R: {
            var n = e, u = n._payload, l = n._init;
            try {
              return q(l(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, me = {}, ye = S.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, u) {
      {
        var l = Function.call.bind(N);
        for (var s in e)
          if (l(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              i = e[s](r, s, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              i = v;
            }
            i && !(i instanceof Error) && (K(u), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof i), K(null)), i instanceof Error && !(i.message in me) && (me[i.message] = !0, K(u), a("Failed %s type: %s", t, i.message), K(null));
          }
      }
    }
    var Je = Array.isArray;
    function ee(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function Ee(e) {
      if (Ke(e))
        return a("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), Re(e);
    }
    var L = S.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Pe, re;
    re = {};
    function ze(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = C(L.current.type);
        re[t] || (a('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(L.current.type), e.ref), re[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          _e || (_e = !0, a("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Pe || (Pe = !0, a("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, u, l, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: k,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function rr(e, r, t, n, u) {
      {
        var l, s = {}, i = null, b = null;
        t !== void 0 && (Ee(t), i = "" + t), Xe(r) && (Ee(r.key), i = "" + r.key), ze(r) && (b = r.ref, He(r, u));
        for (l in r)
          N.call(r, l) && !Ge.hasOwnProperty(l) && (s[l] = r[l]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (l in v)
            s[l] === void 0 && (s[l] = v[l]);
        }
        if (i || b) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && Ze(s, p), b && Qe(s, p);
        }
        return er(e, i, b, u, n, L.current, s);
      }
    }
    var te = S.ReactCurrentOwner, we = S.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === k;
    }
    function Ce() {
      {
        if (te.current) {
          var e = C(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var je = {};
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
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (je[t])
          return;
        je[t] = !0;
        var n = "";
        e && e._owner && e._owner !== te.current && (n = " It was passed a child from " + C(e._owner.type) + "."), $(e), a('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), $(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ae(n) && xe(n, r);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = X(e);
          if (typeof u == "function" && u !== e.entries)
            for (var l = u.call(e), s; !(s = l.next()).done; )
              ae(s.value) && xe(s.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var u = C(r);
          a("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && a("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            $(e), a("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), a("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var Oe = {};
    function Se(e, r, t, n, u, l) {
      {
        var s = $e(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = tr();
          b ? i += b : i += Ce();
          var v;
          e === null ? v = "null" : ee(e) ? v = "array" : e !== void 0 && e.$$typeof === k ? (v = "<" + (C(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, a("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, i);
        }
        var p = rr(e, r, t, u, l);
        if (p == null)
          return p;
        if (s) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (ee(E)) {
                for (var V = 0; V < E.length; V++)
                  Te(E[V], e);
                Object.freeze && Object.freeze(E);
              } else
                a("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(E, e);
        }
        if (N.call(r, "key")) {
          var A = C(e), y = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), oe = y.length > 0 ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[A + oe]) {
            var cr = y.length > 0 ? "{" + y.join(": ..., ") + ": ...}" : "{}";
            a(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, oe, A, cr, A), Oe[A + oe] = !0;
          }
        }
        return e === f ? or(p) : ar(p), p;
      }
    }
    function ir(e, r, t) {
      return Se(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var ur = sr, lr = ir;
    U.Fragment = f, U.jsx = ur, U.jsxs = lr;
  }()), U;
}
process.env.NODE_ENV === "production" ? ie.exports = dr() : ie.exports = vr();
var c = ie.exports;
function hr(I) {
  const { rowsData: k, categories: j } = I, [f, x] = G(k), [W, D] = G(k), T = (a) => {
    const m = W.filter((g) => {
      for (let P = 0; P < I.categories.length; P++)
        if (g[j[P]].toLowerCase().includes(a.target.value.toLowerCase()))
          return !0;
    });
    console.log(m), x(m), O({
      ...o,
      start: 0,
      end: o.rowsPerPage
    });
  }, [d, w] = G({
    order: "",
    numberOfClicks: 0
  }), h = (a) => {
    if (d.order !== a) {
      const m = [...f].sort((g, P) => g[a].localeCompare(P[a]));
      w({
        order: a,
        numberOfClicks: 1
      }), x(m);
    } else if (d.order === a && d.numberOfClicks % 2 !== 0) {
      const m = [...f].sort((g, P) => P[a].localeCompare(g[a]));
      w({
        order: a,
        numberOfClicks: d.numberOfClicks + 1
      }), x(m);
    } else if (d.order === a && d.numberOfClicks % 2 === 0) {
      const m = [...f].sort((g, P) => g[a].localeCompare(P[a]));
      w({
        order: a,
        numberOfClicks: d.numberOfClicks + 1
      }), x(m);
    }
  }, _ = j.map((a) => /* @__PURE__ */ c.jsx(
    "th",
    {
      onClick: () => h(a),
      children: a
    },
    a
  )), R = 10, [o, O] = G({
    rowsPerPage: R,
    start: 0,
    end: R
  }), z = () => {
    if (console.log(o.start), console.log(o.end), o.end !== f.length) {
      if (f.length - o.end < o.rowsPerPage)
        return O({
          ...o,
          start: o.start + o.rowsPerPage,
          end: f.length
        });
      O({
        ...o,
        start: o.start + o.rowsPerPage,
        end: o.end + o.rowsPerPage
      });
    }
  }, X = () => {
    if (console.log(o.start), console.log(o.end), console.log(f.length), o.start !== 0) {
      if (o.end - o.start < o.rowsPerPage)
        return O({
          ...o,
          start: o.start - o.rowsPerPage,
          end: f.length - (o.end - o.start)
        });
      O({
        ...o,
        start: o.start - o.rowsPerPage,
        end: o.end - o.rowsPerPage
      });
    }
  }, S = [];
  o.end > f.length && (o.end = f.length);
  for (let a = o.start; a < o.end; a++) {
    const m = [];
    for (let g = 0; g < j.length; g++)
      g === 0 ? m.push(
        /* @__PURE__ */ c.jsx("th", { scope: "row", children: f[a][j[g]] })
      ) : m.push(
        /* @__PURE__ */ c.jsx("td", { children: f[a][j[g]] })
      );
    S.push(
      /* @__PURE__ */ c.jsx("tr", { children: m }, a)
    );
  }
  return /* @__PURE__ */ c.jsxs("div", { className: "VC-table-container", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "configuration-table-items-container", children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("span", { children: "Show " }),
        /* @__PURE__ */ c.jsxs("select", { onChange: (a) => O({ rowsPerPage: parseInt(a.target.value), start: 0, end: parseInt(a.target.value) }), children: [
          /* @__PURE__ */ c.jsx("option", { value: R, children: R }),
          /* @__PURE__ */ c.jsx("option", { value: 25, children: "25" }),
          /* @__PURE__ */ c.jsx("option", { value: 50, children: "50" }),
          /* @__PURE__ */ c.jsx("option", { value: 100, children: "100" })
        ] }),
        /* @__PURE__ */ c.jsx("span", { children: " entries" })
      ] }),
      /* @__PURE__ */ c.jsx("input", { onFocus: () => D(f), onChange: T, type: "text", placeholder: "Search" })
    ] }),
    f.length === 0 ? /* @__PURE__ */ c.jsx("div", { className: "VC-table-empty", children: "This table is empty" }) : /* @__PURE__ */ c.jsxs("table", { children: [
      /* @__PURE__ */ c.jsx("thead", { className: "VC-table-thead", children: /* @__PURE__ */ c.jsx("tr", { children: _ }) }),
      /* @__PURE__ */ c.jsx("tbody", { children: S })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "VC-pagination", children: [
      f.length === 0 ? /* @__PURE__ */ c.jsx("span", { children: "Showing 0 to 0 of 0 entries" }) : /* @__PURE__ */ c.jsxs("span", { children: [
        "Showing ",
        o.start + 1,
        " to ",
        o.end,
        " of ",
        f.length,
        " entries"
      ] }),
      /* @__PURE__ */ c.jsxs("span", { className: "VC-pagination-buttons-container", children: [
        /* @__PURE__ */ c.jsx("button", { onClick: X, children: "Prev" }),
        /* @__PURE__ */ c.jsx("button", { onClick: z, children: "Next" })
      ] })
    ] })
  ] });
}
export {
  hr as Table
};
