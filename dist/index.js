import Ae, { useState as X } from "react";
import './index.css';var se = { exports: {} }, B = {};
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
  if (De) return B;
  De = 1;
  var W = Ae, k = Symbol.for("react.element"), j = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, x = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, V = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(T, f, w) {
    var m, _ = {}, O = null, S = null;
    w !== void 0 && (O = "" + w), f.key !== void 0 && (O = "" + f.key), f.ref !== void 0 && (S = f.ref);
    for (m in f) d.call(f, m) && !V.hasOwnProperty(m) && (_[m] = f[m]);
    if (T && T.defaultProps) for (m in f = T.defaultProps, f) _[m] === void 0 && (_[m] = f[m]);
    return { $$typeof: k, type: T, key: O, ref: S, props: _, _owner: x.current };
  }
  return B.Fragment = j, B.jsx = A, B.jsxs = A, B;
}
var J = {};
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
    var W = Ae, k = Symbol.for("react.element"), j = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), T = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), a = Symbol.iterator, D = "@@iterator";
    function H(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = a && e[a] || e[D];
      return typeof r == "function" ? r : null;
    }
    var F = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        s("error", e, t);
      }
    }
    function s(e, r, t) {
      {
        var n = F.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var l = t.map(function(i) {
          return String(i);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var g = !1, b = !1, P = !1, Ie = !1, $e = !1, ue;
    ue = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === V || $e || e === x || e === w || e === m || Ie || e === S || g || b || P || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === _ || e.$$typeof === A || e.$$typeof === T || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case j:
          return "Portal";
        case V:
          return "Profiler";
        case x:
          return "StrictMode";
        case w:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return le(r) + ".Consumer";
          case A:
            var t = e;
            return le(t._context) + ".Provider";
          case f:
            return Ve(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case O: {
            var u = e, l = u._payload, i = u._init;
            try {
              return C(i(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, L = 0, ce, fe, de, ve, pe, he, ge;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Ye() {
      {
        if (L === 0) {
          ce = console.log, fe = console.info, de = console.warn, ve = console.error, pe = console.group, he = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
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
        L++;
      }
    }
    function Ne() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: ce
            }),
            info: I({}, e, {
              value: fe
            }),
            warn: I({}, e, {
              value: de
            }),
            error: I({}, e, {
              value: ve
            }),
            group: I({}, e, {
              value: pe
            }),
            groupCollapsed: I({}, e, {
              value: he
            }),
            groupEnd: I({}, e, {
              value: ge
            })
          });
        }
        L < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = F.ReactCurrentDispatcher, Q;
    function q(e, r, t) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            Q = n && n[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var ee = !1, K;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Le();
    }
    function me(e, r) {
      if (!e || ee)
        return "";
      {
        var t = K.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ee = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = Z.current, Z.current = null, Ye();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (R) {
              n = R;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (R) {
              n = R;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            n = R;
          }
          e();
        }
      } catch (R) {
        if (R && n && typeof R.stack == "string") {
          for (var o = R.stack.split(`
`), y = n.stack.split(`
`), v = o.length - 1, p = y.length - 1; v >= 1 && p >= 0 && o[v] !== y[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (o[v] !== y[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || o[v] !== y[p]) {
                    var E = `
` + o[v].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, E), E;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Z.current = l, Ne(), Error.prepareStackTrace = u;
      }
      var N = e ? e.displayName || e.name : "", $ = N ? q(N) : "";
      return typeof e == "function" && K.set(e, $), $;
    }
    function Ue(e, r, t) {
      return me(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Me(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case w:
          return q("Suspense");
        case m:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ue(e.render);
          case _:
            return G(e.type, r, t);
          case O: {
            var n = e, u = n._payload, l = n._init;
            try {
              return G(l(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, ye = {}, Re = F.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, u) {
      {
        var l = Function.call.bind(U);
        for (var i in e)
          if (l(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              o = v;
            }
            o && !(o instanceof Error) && (z(u), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), z(null)), o instanceof Error && !(o.message in ye) && (ye[o.message] = !0, z(u), h("Failed %s type: %s", t, o.message), z(null));
          }
      }
    }
    var Je = Array.isArray;
    function re(e) {
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
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function _e(e) {
      if (Ke(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), Ee(e);
    }
    var M = F.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, we, te;
    te = {};
    function ze(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var t = C(M.current.type);
        te[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(M.current.type), e.ref), te[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Pe || (Pe = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          we || (we = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, u, l, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: k,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function rr(e, r, t, n, u) {
      {
        var l, i = {}, o = null, y = null;
        t !== void 0 && (_e(t), o = "" + t), Xe(r) && (_e(r.key), o = "" + r.key), ze(r) && (y = r.ref, He(r, u));
        for (l in r)
          U.call(r, l) && !Ge.hasOwnProperty(l) && (i[l] = r[l]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (l in v)
            i[l] === void 0 && (i[l] = v[l]);
        }
        if (o || y) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Ze(i, p), y && Qe(i, p);
        }
        return er(e, o, y, u, n, M.current, i);
      }
    }
    var ne = F.ReactCurrentOwner, Ce = F.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === k;
    }
    function je() {
      {
        if (ne.current) {
          var e = C(ne.current.type);
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
    var xe = {};
    function nr(e) {
      {
        var r = je();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ne.current && (n = " It was passed a child from " + C(e._owner.type) + "."), Y(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), Y(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            oe(n) && Te(n, r);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = H(e);
          if (typeof u == "function" && u !== e.entries)
            for (var l = u.call(e), i; !(i = l.next()).done; )
              oe(i.value) && Te(i.value, r);
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
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ae) {
          ae = !0;
          var u = C(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            Y(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    var Se = {};
    function ke(e, r, t, n, u, l) {
      {
        var i = We(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = tr();
          y ? o += y : o += je();
          var v;
          e === null ? v = "null" : re(e) ? v = "array" : e !== void 0 && e.$$typeof === k ? (v = "<" + (C(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, o);
        }
        var p = rr(e, r, t, u, l);
        if (p == null)
          return p;
        if (i) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (re(E)) {
                for (var N = 0; N < E.length; N++)
                  Oe(E[N], e);
                Object.freeze && Object.freeze(E);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(E, e);
        }
        if (U.call(r, "key")) {
          var $ = C(e), R = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), ie = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Se[$ + ie]) {
            var cr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ie, $, cr, $), Se[$ + ie] = !0;
          }
        }
        return e === d ? or(p) : ar(p), p;
      }
    }
    function ir(e, r, t) {
      return ke(e, r, t, !0);
    }
    function sr(e, r, t) {
      return ke(e, r, t, !1);
    }
    var ur = sr, lr = ir;
    J.Fragment = d, J.jsx = ur, J.jsxs = lr;
  }()), J;
}
process.env.NODE_ENV === "production" ? se.exports = dr() : se.exports = vr();
var c = se.exports;
function hr(W) {
  const { rowsData: k, categories: j } = W, [d, x] = X(k), [V, A] = X(k), T = (s) => {
    const g = V.filter((b) => {
      for (let P = 0; P < W.categories.length; P++)
        if (b[j[P]].toLowerCase().includes(s.target.value.toLowerCase()))
          return !0;
    });
    x(g), D({
      ...a,
      start: 0,
      end: a.rowsPerPage
    });
  }, [f, w] = X({
    order: "",
    numberOfClicks: 0
  }), m = (s) => {
    if (f.order !== s) {
      const g = [...d].sort((b, P) => b[s].localeCompare(P[s]));
      w({
        order: s,
        numberOfClicks: 1
      }), x(g);
    } else if (f.order === s && f.numberOfClicks % 2 !== 0) {
      const g = [...d].sort((b, P) => P[s].localeCompare(b[s]));
      w({
        order: s,
        numberOfClicks: f.numberOfClicks + 1
      }), x(g);
    } else if (f.order === s && f.numberOfClicks % 2 === 0) {
      const g = [...d].sort((b, P) => b[s].localeCompare(P[s]));
      w({
        order: s,
        numberOfClicks: f.numberOfClicks + 1
      }), x(g);
    }
  };
  function _(s) {
    return s.replace(/([A-Z])/g, " $1").trim().toLowerCase().replace(/^./, (g) => g.toUpperCase());
  }
  const O = j.map((s, g) => /* @__PURE__ */ c.jsx(
    "th",
    {
      onClick: () => m(s),
      children: _(s)
    },
    g
  )), S = 10, [a, D] = X({
    rowsPerPage: S,
    start: 0,
    end: S
  }), H = () => {
    if (a.end !== d.length) {
      if (d.length - a.end < a.rowsPerPage)
        return D({
          ...a,
          start: a.start + a.rowsPerPage,
          end: d.length
        });
      D({
        ...a,
        start: a.start + a.rowsPerPage,
        end: a.end + a.rowsPerPage
      });
    }
  }, F = () => {
    if (a.start !== 0) {
      if (a.end - a.start < a.rowsPerPage)
        return D({
          ...a,
          start: a.start - a.rowsPerPage,
          end: d.length - (a.end - a.start)
        });
      D({
        ...a,
        start: a.start - a.rowsPerPage,
        end: a.end - a.rowsPerPage
      });
    }
  }, h = [];
  a.end > d.length && (a.end = d.length);
  for (let s = a.start; s < a.end; s++) {
    const g = [];
    for (let b = 0; b < j.length; b++)
      b === 0 ? g.push(
        /* @__PURE__ */ c.jsx("th", { scope: "row", children: d[s][j[b]] }, b)
      ) : g.push(
        /* @__PURE__ */ c.jsx("td", { children: d[s][j[b]] }, b)
      );
    h.push(
      /* @__PURE__ */ c.jsx("tr", { children: g }, s)
    );
  }
  return /* @__PURE__ */ c.jsxs("div", { className: "VC-table-container", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "configuration-table-items-container", children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("span", { children: "Show " }),
        /* @__PURE__ */ c.jsxs("select", { onChange: (s) => D({ rowsPerPage: parseInt(s.target.value), start: 0, end: parseInt(s.target.value) }), children: [
          /* @__PURE__ */ c.jsx("option", { value: S, children: S }),
          /* @__PURE__ */ c.jsx("option", { value: 25, children: "25" }),
          /* @__PURE__ */ c.jsx("option", { value: 50, children: "50" }),
          /* @__PURE__ */ c.jsx("option", { value: 100, children: "100" })
        ] }),
        /* @__PURE__ */ c.jsx("span", { children: " entries" })
      ] }),
      /* @__PURE__ */ c.jsx("input", { onFocus: () => A(d), onChange: T, type: "text", placeholder: "Search" })
    ] }),
    d.length === 0 ? /* @__PURE__ */ c.jsx("div", { className: "VC-table-empty", children: "This table is empty" }) : /* @__PURE__ */ c.jsxs("table", { children: [
      /* @__PURE__ */ c.jsx("thead", { className: "VC-table-thead", children: /* @__PURE__ */ c.jsx("tr", { children: O }) }),
      /* @__PURE__ */ c.jsx("tbody", { children: h })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "VC-pagination", children: [
      d.length === 0 ? /* @__PURE__ */ c.jsx("span", { children: "Showing 0 to 0 of 0 entries" }) : /* @__PURE__ */ c.jsxs("span", { children: [
        "Showing ",
        a.start + 1,
        " to ",
        a.end,
        " of ",
        d.length,
        " entries"
      ] }),
      /* @__PURE__ */ c.jsxs("span", { className: "VC-pagination-buttons-container", children: [
        /* @__PURE__ */ c.jsx("button", { onClick: F, children: "Prev" }),
        /* @__PURE__ */ c.jsx("button", { onClick: H, children: "Next" })
      ] })
    ] })
  ] });
}
export {
  hr as Table
};
