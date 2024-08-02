import ke, { useState as K } from "react";
var ae = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function dr() {
  if (Te) return V;
  Te = 1;
  var I = ke, w = Symbol.for("react.element"), f = Symbol.for("react.fragment"), j = Object.prototype.hasOwnProperty, k = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(b, h, m) {
    var g, n = {}, R = null, F = null;
    m !== void 0 && (R = "" + m), h.key !== void 0 && (R = "" + h.key), h.ref !== void 0 && (F = h.ref);
    for (g in h) j.call(h, g) && !D.hasOwnProperty(g) && (n[g] = h[g]);
    if (b && b.defaultProps) for (g in h = b.defaultProps, h) n[g] === void 0 && (n[g] = h[g]);
    return { $$typeof: w, type: b, key: R, ref: F, props: n, _owner: k.current };
  }
  return V.Fragment = f, V.jsx = P, V.jsxs = P, V;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function vr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var I = ke, w = Symbol.for("react.element"), f = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), b = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), n = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), M = Symbol.iterator, U = "@@iterator";
    function i(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[U];
      return typeof r == "function" ? r : null;
    }
    var y = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        O("error", e, t);
      }
    }
    function O(e, r, t) {
      {
        var a = y.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var d = t.map(function(l) {
          return String(l);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var De = !1, Fe = !1, Le = !1, Ae = !1, Ie = !1, oe;
    oe = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === j || e === D || Ie || e === k || e === m || e === g || Ae || e === F || De || Fe || Le || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === n || e.$$typeof === P || e.$$typeof === b || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case j:
          return "Fragment";
        case f:
          return "Portal";
        case D:
          return "Profiler";
        case k:
          return "StrictMode";
        case m:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return ie(r) + ".Consumer";
          case P:
            var t = e;
            return ie(t._context) + ".Provider";
          case h:
            return We(e, e.render, "ForwardRef");
          case n:
            var a = e.displayName || null;
            return a !== null ? a : x(e.type) || "Memo";
          case R: {
            var c = e, d = c._payload, l = c._init;
            try {
              return x(l(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, N = 0, se, le, ue, ce, fe, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function $e() {
      {
        if (N === 0) {
          se = console.log, le = console.info, ue = console.warn, ce = console.error, fe = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
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
        N++;
      }
    }
    function Ve() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: se
            }),
            info: T({}, e, {
              value: le
            }),
            warn: T({}, e, {
              value: ue
            }),
            error: T({}, e, {
              value: ce
            }),
            group: T({}, e, {
              value: fe
            }),
            groupCollapsed: T({}, e, {
              value: de
            }),
            groupEnd: T({}, e, {
              value: ve
            })
          });
        }
        N < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = y.ReactCurrentDispatcher, X;
    function B(e, r, t) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            X = a && a[1] || "";
          }
        return `
` + X + e;
      }
    }
    var H = !1, J;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ye();
    }
    function he(e, r) {
      if (!e || H)
        return "";
      {
        var t = J.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      H = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = G.current, G.current = null, $e();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (E) {
              a = E;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (E) {
              a = E;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            a = E;
          }
          e();
        }
      } catch (E) {
        if (E && a && typeof E.stack == "string") {
          for (var s = E.stack.split(`
`), C = a.stack.split(`
`), v = s.length - 1, p = C.length - 1; v >= 1 && p >= 0 && s[v] !== C[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (s[v] !== C[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || s[v] !== C[p]) {
                    var _ = `
` + s[v].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, _), _;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        H = !1, G.current = d, Ve(), Error.prepareStackTrace = c;
      }
      var A = e ? e.displayName || e.name : "", S = A ? B(A) : "";
      return typeof e == "function" && J.set(e, S), S;
    }
    function Me(e, r, t) {
      return he(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Ue(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case m:
          return B("Suspense");
        case g:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return Me(e.render);
          case n:
            return q(e.type, r, t);
          case R: {
            var a = e, c = a._payload, d = a._init;
            try {
              return q(d(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, ge = {}, me = y.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function Be(e, r, t, a, c) {
      {
        var d = Function.call.bind(W);
        for (var l in e)
          if (d(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var C = Error((a || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              s = e[l](r, l, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              s = v;
            }
            s && !(s instanceof Error) && (z(c), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, l, typeof s), z(null)), s instanceof Error && !(s.message in ge) && (ge[s.message] = !0, z(c), u("Failed %s type: %s", t, s.message), z(null));
          }
      }
    }
    var Je = Array.isArray;
    function Z(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function ye(e) {
      if (ze(e))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), be(e);
    }
    var $ = y.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Re, Q;
    Q = {};
    function Ge(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = x($.current.type);
        Q[t] || (u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x($.current.type), e.ref), Q[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Re || (Re = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, a, c, d, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function rr(e, r, t, a, c) {
      {
        var d, l = {}, s = null, C = null;
        t !== void 0 && (ye(t), s = "" + t), Xe(r) && (ye(r.key), s = "" + r.key), Ge(r) && (C = r.ref, He(r, c));
        for (d in r)
          W.call(r, d) && !Ke.hasOwnProperty(d) && (l[d] = r[d]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (d in v)
            l[d] === void 0 && (l[d] = v[d]);
        }
        if (s || C) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && Ze(l, p), C && Qe(l, p);
        }
        return er(e, s, C, c, a, $.current, l);
      }
    }
    var ee = y.ReactCurrentOwner, Ee = y.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    function _e() {
      {
        if (ee.current) {
          var e = x(ee.current.type);
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
        var r = _e();
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
        var a = "";
        e && e._owner && e._owner !== ee.current && (a = " It was passed a child from " + x(e._owner.type) + "."), L(e), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), L(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            te(a) && xe(a, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = i(e);
          if (typeof c == "function" && c !== e.entries)
            for (var d = c.call(e), l; !(l = d.next()).done; )
              te(l.value) && xe(l.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === n))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = x(r);
          Be(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var c = x(r);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            L(e), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), u("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    var Pe = {};
    function Oe(e, r, t, a, c, d) {
      {
        var l = Ne(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = tr();
          C ? s += C : s += _e();
          var v;
          e === null ? v = "null" : Z(e) ? v = "array" : e !== void 0 && e.$$typeof === w ? (v = "<" + (x(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, s);
        }
        var p = rr(e, r, t, c, d);
        if (p == null)
          return p;
        if (l) {
          var _ = r.children;
          if (_ !== void 0)
            if (a)
              if (Z(_)) {
                for (var A = 0; A < _.length; A++)
                  we(_[A], e);
                Object.freeze && Object.freeze(_);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(_, e);
        }
        if (W.call(r, "key")) {
          var S = x(e), E = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), ne = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[S + ne]) {
            var cr = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            u(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ne, S, cr, S), Pe[S + ne] = !0;
          }
        }
        return e === j ? or(p) : ar(p), p;
      }
    }
    function ir(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var lr = sr, ur = ir;
    Y.Fragment = j, Y.jsx = lr, Y.jsxs = ur;
  }()), Y;
}
process.env.NODE_ENV === "production" ? ae.exports = dr() : ae.exports = vr();
var o = ae.exports;
function hr(I) {
  const { rowsData: w } = I, [f, j] = K(w), [k, D] = K(w), P = (i) => {
    const y = k.filter((u) => {
      if (u.firstName.toLowerCase().includes(i.target.value.toLowerCase()) || u.lastName.toLowerCase().includes(i.target.value.toLowerCase()) || u.startDate.toLowerCase().includes(i.target.value.toLowerCase()) || u.department.toLowerCase().includes(i.target.value.toLowerCase()) || u.dateOfBirth.toLowerCase().includes(i.target.value.toLowerCase()) || u.street.toLowerCase().includes(i.target.value.toLowerCase()) || u.city.toLowerCase().includes(i.target.value.toLowerCase()) || u.state.toLowerCase().includes(i.target.value.toLowerCase()) || u.zipCode.toString().includes(i.target.value.toLowerCase()))
        return !0;
    });
    console.log(y), j(y), R({
      ...n,
      start: 0,
      end: n.rowsPerPage
    });
  }, [b, h] = K({
    order: "",
    numberOfClicks: 0
  }), m = (i) => {
    if (b.order !== i) {
      const y = [...f].sort((u, O) => u[i].localeCompare(O[i]));
      h({
        order: i,
        numberOfClicks: 1
      }), j(y);
    } else if (b.order === i && b.numberOfClicks % 2 !== 0) {
      const y = [...f].sort((u, O) => O[i].localeCompare(u[i]));
      h({
        order: i,
        numberOfClicks: b.numberOfClicks + 1
      }), j(y);
    } else if (b.order === i && b.numberOfClicks % 2 === 0) {
      const y = [...f].sort((u, O) => u[i].localeCompare(O[i]));
      h({
        order: i,
        numberOfClicks: b.numberOfClicks + 1
      }), j(y);
    }
  }, g = 10, [n, R] = K({
    rowsPerPage: g,
    start: 0,
    end: g
  }), F = () => {
    if (console.log(n.start), console.log(n.end), n.end !== f.length) {
      if (f.length - n.end < n.rowsPerPage)
        return R({
          ...n,
          start: n.start + n.rowsPerPage,
          end: f.length
        });
      R({
        ...n,
        start: n.start + n.rowsPerPage,
        end: n.end + n.rowsPerPage
      });
    }
  }, M = () => {
    if (console.log(n.start), console.log(n.end), console.log(f.length), n.start !== 0) {
      if (n.end - n.start < n.rowsPerPage)
        return R({
          ...n,
          start: n.start - n.rowsPerPage,
          end: f.length - (n.end - n.start)
        });
      R({
        ...n,
        start: n.start - n.rowsPerPage,
        end: n.end - n.rowsPerPage
      });
    }
  }, U = [];
  n.end > f.length && (n.end = f.length);
  for (let i = n.start; i < n.end; i++)
    U.push(
      /* @__PURE__ */ o.jsxs("tr", { children: [
        /* @__PURE__ */ o.jsx("th", { scope: "row", children: f[i].firstName }),
        /* @__PURE__ */ o.jsx("td", { children: f[i].lastName }),
        /* @__PURE__ */ o.jsx("td", { children: f[i].startDate }),
        /* @__PURE__ */ o.jsx("td", { children: f[i].department }),
        /* @__PURE__ */ o.jsx("td", { children: f[i].dateOfBirth }),
        /* @__PURE__ */ o.jsx("td", { children: f[i].street }),
        /* @__PURE__ */ o.jsx("td", { children: f[i].city }),
        /* @__PURE__ */ o.jsx("td", { children: f[i].state }),
        /* @__PURE__ */ o.jsx("td", { children: f[i].zipCode })
      ] }, i)
    );
  return /* @__PURE__ */ o.jsxs("div", { className: "VC-table-container", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "configuration-table-items-container", children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("span", { children: "Show " }),
        /* @__PURE__ */ o.jsxs("select", { onChange: (i) => R({ rowsPerPage: parseInt(i.target.value), start: 0, end: parseInt(i.target.value) }), children: [
          /* @__PURE__ */ o.jsx("option", { value: g, children: g }),
          /* @__PURE__ */ o.jsx("option", { value: 25, children: "25" }),
          /* @__PURE__ */ o.jsx("option", { value: 50, children: "50" }),
          /* @__PURE__ */ o.jsx("option", { value: 100, children: "100" })
        ] }),
        /* @__PURE__ */ o.jsx("span", { children: " entries" })
      ] }),
      /* @__PURE__ */ o.jsx("input", { onFocus: () => D(f), onChange: P, type: "text", placeholder: "Search" })
    ] }),
    f.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "VC-table-empty", children: "This table is empty" }) : /* @__PURE__ */ o.jsxs("table", { children: [
      /* @__PURE__ */ o.jsx("thead", { className: "VC-table-thead", children: /* @__PURE__ */ o.jsxs("tr", { children: [
        /* @__PURE__ */ o.jsx("th", { onClick: () => m("firstName"), scope: "col", children: "First Name" }),
        /* @__PURE__ */ o.jsx("th", { onClick: () => m("lastName"), scope: "col", children: "Last Name" }),
        /* @__PURE__ */ o.jsx("th", { onClick: () => m("startDate"), scope: "col", children: "Start Date" }),
        /* @__PURE__ */ o.jsx("th", { onClick: () => m("department"), scope: "col", children: "Department" }),
        /* @__PURE__ */ o.jsx("th", { onClick: () => m("dateOfBirth"), scope: "col", children: "Date of Birth" }),
        /* @__PURE__ */ o.jsx("th", { onClick: () => m("street"), scope: "col", children: "Street" }),
        /* @__PURE__ */ o.jsx("th", { onClick: () => m("city"), scope: "col", children: "City" }),
        /* @__PURE__ */ o.jsx("th", { onClick: () => m("state"), scope: "col", children: "State" }),
        /* @__PURE__ */ o.jsx("th", { onClick: () => m("zipCode"), scope: "col", children: "Zip Code" })
      ] }) }),
      /* @__PURE__ */ o.jsx("tbody", { children: U })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "VC-pagination", children: [
      f.length === 0 ? /* @__PURE__ */ o.jsx("span", { children: "Showing 0 to 0 of 0 entries" }) : /* @__PURE__ */ o.jsxs("span", { children: [
        "Showing ",
        n.start + 1,
        " to ",
        n.end,
        " of ",
        f.length,
        " entries"
      ] }),
      /* @__PURE__ */ o.jsxs("span", { className: "VC-pagination-buttons-container", children: [
        /* @__PURE__ */ o.jsx("button", { onClick: M, children: "Prev" }),
        /* @__PURE__ */ o.jsx("button", { onClick: F, children: "Next" })
      ] })
    ] })
  ] });
}
export {
  hr as Table
};
