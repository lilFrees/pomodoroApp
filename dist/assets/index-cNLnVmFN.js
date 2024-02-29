function Kx(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function ks(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ng = { exports: {} },
  Il = {},
  jg = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ps = Symbol.for("react.element"),
  Yx = Symbol.for("react.portal"),
  Xx = Symbol.for("react.fragment"),
  Qx = Symbol.for("react.strict_mode"),
  Zx = Symbol.for("react.profiler"),
  qx = Symbol.for("react.provider"),
  Jx = Symbol.for("react.context"),
  ew = Symbol.for("react.forward_ref"),
  tw = Symbol.for("react.suspense"),
  nw = Symbol.for("react.memo"),
  rw = Symbol.for("react.lazy"),
  yh = Symbol.iterator;
function ow(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yh && e[yh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Dg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Vg = Object.assign,
  Fg = {};
function ni(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fg),
    (this.updater = n || Dg);
}
ni.prototype.isReactComponent = {};
ni.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ni.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Bg() {}
Bg.prototype = ni.prototype;
function xd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fg),
    (this.updater = n || Dg);
}
var wd = (xd.prototype = new Bg());
wd.constructor = xd;
Vg(wd, ni.prototype);
wd.isPureReactComponent = !0;
var vh = Array.isArray,
  zg = Object.prototype.hasOwnProperty,
  Td = { current: null },
  Ug = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hg(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      zg.call(t, r) && !Ug.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Ps,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Td.current,
  };
}
function iw(e, t) {
  return {
    $$typeof: Ps,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Cd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ps;
}
function sw(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Sh = /\/+/g;
function Ku(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? sw("" + e.key)
    : t.toString(36);
}
function va(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ps:
          case Yx:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Ku(s, 0) : r),
      vh(o)
        ? ((n = ""),
          e != null && (n = e.replace(Sh, "$&/") + "/"),
          va(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Cd(o) &&
            (o = iw(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Sh, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), vh(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Ku(i, a);
      s += va(i, t, n, l, o);
    }
  else if (((l = ow(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Ku(i, a++)), (s += va(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Ws(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    va(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function aw(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var St = { current: null },
  Sa = { transition: null },
  lw = {
    ReactCurrentDispatcher: St,
    ReactCurrentBatchConfig: Sa,
    ReactCurrentOwner: Td,
  };
Z.Children = {
  map: Ws,
  forEach: function (e, t, n) {
    Ws(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ws(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ws(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Cd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Z.Component = ni;
Z.Fragment = Xx;
Z.Profiler = Zx;
Z.PureComponent = xd;
Z.StrictMode = Qx;
Z.Suspense = tw;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lw;
Z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Vg({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Td.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      zg.call(t, l) &&
        !Ug.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ps, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Jx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: qx, _context: e }),
    (e.Consumer = e)
  );
};
Z.createElement = Hg;
Z.createFactory = function (e) {
  var t = Hg.bind(null, e);
  return (t.type = e), t;
};
Z.createRef = function () {
  return { current: null };
};
Z.forwardRef = function (e) {
  return { $$typeof: ew, render: e };
};
Z.isValidElement = Cd;
Z.lazy = function (e) {
  return { $$typeof: rw, _payload: { _status: -1, _result: e }, _init: aw };
};
Z.memo = function (e, t) {
  return { $$typeof: nw, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function (e) {
  var t = Sa.transition;
  Sa.transition = {};
  try {
    e();
  } finally {
    Sa.transition = t;
  }
};
Z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Z.useCallback = function (e, t) {
  return St.current.useCallback(e, t);
};
Z.useContext = function (e) {
  return St.current.useContext(e);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (e) {
  return St.current.useDeferredValue(e);
};
Z.useEffect = function (e, t) {
  return St.current.useEffect(e, t);
};
Z.useId = function () {
  return St.current.useId();
};
Z.useImperativeHandle = function (e, t, n) {
  return St.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function (e, t) {
  return St.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function (e, t) {
  return St.current.useLayoutEffect(e, t);
};
Z.useMemo = function (e, t) {
  return St.current.useMemo(e, t);
};
Z.useReducer = function (e, t, n) {
  return St.current.useReducer(e, t, n);
};
Z.useRef = function (e) {
  return St.current.useRef(e);
};
Z.useState = function (e) {
  return St.current.useState(e);
};
Z.useSyncExternalStore = function (e, t, n) {
  return St.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function () {
  return St.current.useTransition();
};
Z.version = "18.2.0";
jg.exports = Z;
var x = jg.exports;
const ge = ks(x),
  Wc = Kx({ __proto__: null, default: ge }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uw = x,
  cw = Symbol.for("react.element"),
  fw = Symbol.for("react.fragment"),
  dw = Object.prototype.hasOwnProperty,
  pw = uw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wg(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) dw.call(t, r) && !hw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: cw,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: pw.current,
  };
}
Il.Fragment = fw;
Il.jsx = Wg;
Il.jsxs = Wg;
Ng.exports = Il;
var P = Ng.exports,
  Gc = {},
  Gg = { exports: {} },
  Bt = {},
  Kg = { exports: {} },
  Yg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, L) {
    var V = R.length;
    R.push(L);
    e: for (; 0 < V; ) {
      var N = (V - 1) >>> 1,
        X = R[N];
      if (0 < o(X, L)) (R[N] = L), (R[V] = X), (V = N);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var L = R[0],
      V = R.pop();
    if (V !== L) {
      R[0] = V;
      e: for (var N = 0, X = R.length, le = X >>> 1; N < le; ) {
        var ae = 2 * (N + 1) - 1,
          Pe = R[ae],
          ue = ae + 1,
          We = R[ue];
        if (0 > o(Pe, V))
          ue < X && 0 > o(We, Pe)
            ? ((R[N] = We), (R[ue] = V), (N = ue))
            : ((R[N] = Pe), (R[ae] = V), (N = ae));
        else if (ue < X && 0 > o(We, V)) (R[N] = We), (R[ue] = V), (N = ue);
        else break e;
      }
    }
    return L;
  }
  function o(R, L) {
    var V = R.sortIndex - L.sortIndex;
    return V !== 0 ? V : R.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    h = !1,
    m = !1,
    g = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(R) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= R)
        r(u), (L.sortIndex = L.expirationTime), t(l, L);
      else break;
      L = n(u);
    }
  }
  function S(R) {
    if (((g = !1), y(R), !m))
      if (n(l) !== null) (m = !0), K(C);
      else {
        var L = n(u);
        L !== null && re(S, L.startTime - R);
      }
  }
  function C(R, L) {
    (m = !1), g && ((g = !1), v(E), (E = -1)), (h = !0);
    var V = d;
    try {
      for (
        y(L), f = n(l);
        f !== null && (!(f.expirationTime > L) || (R && !I()));

      ) {
        var N = f.callback;
        if (typeof N == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var X = N(f.expirationTime <= L);
          (L = e.unstable_now()),
            typeof X == "function" ? (f.callback = X) : f === n(l) && r(l),
            y(L);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var le = !0;
      else {
        var ae = n(u);
        ae !== null && re(S, ae.startTime - L), (le = !1);
      }
      return le;
    } finally {
      (f = null), (d = V), (h = !1);
    }
  }
  var k = !1,
    w = null,
    E = -1,
    O = 5,
    b = -1;
  function I() {
    return !(e.unstable_now() - b < O);
  }
  function B() {
    if (w !== null) {
      var R = e.unstable_now();
      b = R;
      var L = !0;
      try {
        L = w(!0, R);
      } finally {
        L ? G() : ((k = !1), (w = null));
      }
    } else k = !1;
  }
  var G;
  if (typeof p == "function")
    G = function () {
      p(B);
    };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(),
      U = D.port2;
    (D.port1.onmessage = B),
      (G = function () {
        U.postMessage(null);
      });
  } else
    G = function () {
      T(B, 0);
    };
  function K(R) {
    (w = R), k || ((k = !0), G());
  }
  function re(R, L) {
    E = T(function () {
      R(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || h || ((m = !0), K(C));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (R) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = d;
      }
      var V = d;
      d = L;
      try {
        return R();
      } finally {
        d = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, L) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var V = d;
      d = R;
      try {
        return L();
      } finally {
        d = V;
      }
    }),
    (e.unstable_scheduleCallback = function (R, L, V) {
      var N = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? N + V : N))
          : (V = N),
        R)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = V + X),
        (R = {
          id: c++,
          callback: L,
          priorityLevel: R,
          startTime: V,
          expirationTime: X,
          sortIndex: -1,
        }),
        V > N
          ? ((R.sortIndex = V),
            t(u, R),
            n(l) === null &&
              R === n(u) &&
              (g ? (v(E), (E = -1)) : (g = !0), re(S, V - N)))
          : ((R.sortIndex = X), t(l, R), m || h || ((m = !0), K(C))),
        R
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (R) {
      var L = d;
      return function () {
        var V = d;
        d = L;
        try {
          return R.apply(this, arguments);
        } finally {
          d = V;
        }
      };
    });
})(Yg);
Kg.exports = Yg;
var mw = Kg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xg = x,
  Vt = mw;
function A(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Qg = new Set(),
  Qi = {};
function Jr(e, t) {
  Fo(e, t), Fo(e + "Capture", t);
}
function Fo(e, t) {
  for (Qi[e] = t, e = 0; e < t.length; e++) Qg.add(t[e]);
}
var Bn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Kc = Object.prototype.hasOwnProperty,
  gw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  xh = {},
  wh = {};
function yw(e) {
  return Kc.call(wh, e)
    ? !0
    : Kc.call(xh, e)
    ? !1
    : gw.test(e)
    ? (wh[e] = !0)
    : ((xh[e] = !0), !1);
}
function vw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Sw(e, t, n, r) {
  if (t === null || typeof t > "u" || vw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function xt(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var st = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    st[e] = new xt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  st[t] = new xt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  st[e] = new xt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  st[e] = new xt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    st[e] = new xt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  st[e] = new xt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  st[e] = new xt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  st[e] = new xt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  st[e] = new xt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var kd = /[\-:]([a-z])/g;
function Pd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(kd, Pd);
    st[t] = new xt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(kd, Pd);
    st[t] = new xt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(kd, Pd);
  st[t] = new xt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  st[e] = new xt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
st.xlinkHref = new xt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  st[e] = new xt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ed(e, t, n, r) {
  var o = st.hasOwnProperty(t) ? st[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Sw(t, n, o, r) && (n = null),
    r || o === null
      ? yw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Kn = Xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Gs = Symbol.for("react.element"),
  ho = Symbol.for("react.portal"),
  mo = Symbol.for("react.fragment"),
  bd = Symbol.for("react.strict_mode"),
  Yc = Symbol.for("react.profiler"),
  Zg = Symbol.for("react.provider"),
  qg = Symbol.for("react.context"),
  Rd = Symbol.for("react.forward_ref"),
  Xc = Symbol.for("react.suspense"),
  Qc = Symbol.for("react.suspense_list"),
  Ad = Symbol.for("react.memo"),
  Jn = Symbol.for("react.lazy"),
  Jg = Symbol.for("react.offscreen"),
  Th = Symbol.iterator;
function fi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Th && e[Th]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ae = Object.assign,
  Yu;
function bi(e) {
  if (Yu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Yu = (t && t[1]) || "";
    }
  return (
    `
` +
    Yu +
    e
  );
}
var Xu = !1;
function Qu(e, t) {
  if (!e || Xu) return "";
  Xu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Xu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? bi(e) : "";
}
function xw(e) {
  switch (e.tag) {
    case 5:
      return bi(e.type);
    case 16:
      return bi("Lazy");
    case 13:
      return bi("Suspense");
    case 19:
      return bi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Qu(e.type, !1)), e;
    case 11:
      return (e = Qu(e.type.render, !1)), e;
    case 1:
      return (e = Qu(e.type, !0)), e;
    default:
      return "";
  }
}
function Zc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case mo:
      return "Fragment";
    case ho:
      return "Portal";
    case Yc:
      return "Profiler";
    case bd:
      return "StrictMode";
    case Xc:
      return "Suspense";
    case Qc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qg:
        return (e.displayName || "Context") + ".Consumer";
      case Zg:
        return (e._context.displayName || "Context") + ".Provider";
      case Rd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ad:
        return (
          (t = e.displayName || null), t !== null ? t : Zc(e.type) || "Memo"
        );
      case Jn:
        (t = e._payload), (e = e._init);
        try {
          return Zc(e(t));
        } catch {}
    }
  return null;
}
function ww(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zc(t);
    case 8:
      return t === bd ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function xr(e) {
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
function ey(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Tw(e) {
  var t = ey(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ks(e) {
  e._valueTracker || (e._valueTracker = Tw(e));
}
function ty(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ey(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ha(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qc(e, t) {
  var n = t.checked;
  return Ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ch(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = xr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ny(e, t) {
  (t = t.checked), t != null && Ed(e, "checked", t, !1);
}
function Jc(e, t) {
  ny(e, t);
  var n = xr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ef(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ef(e, t.type, xr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function kh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ef(e, t, n) {
  (t !== "number" || Ha(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ri = Array.isArray;
function $o(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function tf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return Ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ph(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(A(92));
      if (Ri(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: xr(n) };
}
function ry(e, t) {
  var n = xr(t.value),
    r = xr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Eh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function oy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function nf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? oy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ys,
  iy = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ys = Ys || document.createElement("div"),
          Ys.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ys.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Zi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Li = {
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
  Cw = ["Webkit", "ms", "Moz", "O"];
Object.keys(Li).forEach(function (e) {
  Cw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Li[t] = Li[e]);
  });
});
function sy(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Li.hasOwnProperty(e) && Li[e])
    ? ("" + t).trim()
    : t + "px";
}
function ay(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = sy(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var kw = Ae(
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
function rf(e, t) {
  if (t) {
    if (kw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function of(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var sf = null;
function _d(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var af = null,
  Oo = null,
  Lo = null;
function bh(e) {
  if ((e = Rs(e))) {
    if (typeof af != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = Fl(t)), af(e.stateNode, e.type, t));
  }
}
function ly(e) {
  Oo ? (Lo ? Lo.push(e) : (Lo = [e])) : (Oo = e);
}
function uy() {
  if (Oo) {
    var e = Oo,
      t = Lo;
    if (((Lo = Oo = null), bh(e), t)) for (e = 0; e < t.length; e++) bh(t[e]);
  }
}
function cy(e, t) {
  return e(t);
}
function fy() {}
var Zu = !1;
function dy(e, t, n) {
  if (Zu) return e(t, n);
  Zu = !0;
  try {
    return cy(e, t, n);
  } finally {
    (Zu = !1), (Oo !== null || Lo !== null) && (fy(), uy());
  }
}
function qi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var lf = !1;
if (Bn)
  try {
    var di = {};
    Object.defineProperty(di, "passive", {
      get: function () {
        lf = !0;
      },
    }),
      window.addEventListener("test", di, di),
      window.removeEventListener("test", di, di);
  } catch {
    lf = !1;
  }
function Pw(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Mi = !1,
  Wa = null,
  Ga = !1,
  uf = null,
  Ew = {
    onError: function (e) {
      (Mi = !0), (Wa = e);
    },
  };
function bw(e, t, n, r, o, i, s, a, l) {
  (Mi = !1), (Wa = null), Pw.apply(Ew, arguments);
}
function Rw(e, t, n, r, o, i, s, a, l) {
  if ((bw.apply(this, arguments), Mi)) {
    if (Mi) {
      var u = Wa;
      (Mi = !1), (Wa = null);
    } else throw Error(A(198));
    Ga || ((Ga = !0), (uf = u));
  }
}
function eo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function py(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Rh(e) {
  if (eo(e) !== e) throw Error(A(188));
}
function Aw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = eo(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Rh(o), e;
        if (i === r) return Rh(o), t;
        i = i.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function hy(e) {
  return (e = Aw(e)), e !== null ? my(e) : null;
}
function my(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = my(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gy = Vt.unstable_scheduleCallback,
  Ah = Vt.unstable_cancelCallback,
  _w = Vt.unstable_shouldYield,
  $w = Vt.unstable_requestPaint,
  Ne = Vt.unstable_now,
  Ow = Vt.unstable_getCurrentPriorityLevel,
  $d = Vt.unstable_ImmediatePriority,
  yy = Vt.unstable_UserBlockingPriority,
  Ka = Vt.unstable_NormalPriority,
  Lw = Vt.unstable_LowPriority,
  vy = Vt.unstable_IdlePriority,
  Nl = null,
  Cn = null;
function Mw(e) {
  if (Cn && typeof Cn.onCommitFiberRoot == "function")
    try {
      Cn.onCommitFiberRoot(Nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ln = Math.clz32 ? Math.clz32 : jw,
  Iw = Math.log,
  Nw = Math.LN2;
function jw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Iw(e) / Nw) | 0)) | 0;
}
var Xs = 64,
  Qs = 4194304;
function Ai(e) {
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
function Ya(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Ai(a)) : ((i &= s), i !== 0 && (r = Ai(i)));
  } else (s = n & ~o), s !== 0 ? (r = Ai(s)) : i !== 0 && (r = Ai(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ln(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Dw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Vw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - ln(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = Dw(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function cf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Sy() {
  var e = Xs;
  return (Xs <<= 1), !(Xs & 4194240) && (Xs = 64), e;
}
function qu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Es(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ln(t)),
    (e[t] = n);
}
function Fw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ln(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Od(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ln(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ie = 0;
function xy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var wy,
  Ld,
  Ty,
  Cy,
  ky,
  ff = !1,
  Zs = [],
  lr = null,
  ur = null,
  cr = null,
  Ji = new Map(),
  es = new Map(),
  nr = [],
  Bw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function _h(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lr = null;
      break;
    case "dragenter":
    case "dragleave":
      ur = null;
      break;
    case "mouseover":
    case "mouseout":
      cr = null;
      break;
    case "pointerover":
    case "pointerout":
      Ji.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      es.delete(t.pointerId);
  }
}
function pi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Rs(t)), t !== null && Ld(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function zw(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (lr = pi(lr, e, t, n, r, o)), !0;
    case "dragenter":
      return (ur = pi(ur, e, t, n, r, o)), !0;
    case "mouseover":
      return (cr = pi(cr, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ji.set(i, pi(Ji.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), es.set(i, pi(es.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Py(e) {
  var t = Ir(e.target);
  if (t !== null) {
    var n = eo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = py(n)), t !== null)) {
          (e.blockedOn = t),
            ky(e.priority, function () {
              Ty(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = df(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (sf = r), n.target.dispatchEvent(r), (sf = null);
    } else return (t = Rs(n)), t !== null && Ld(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $h(e, t, n) {
  xa(e) && n.delete(t);
}
function Uw() {
  (ff = !1),
    lr !== null && xa(lr) && (lr = null),
    ur !== null && xa(ur) && (ur = null),
    cr !== null && xa(cr) && (cr = null),
    Ji.forEach($h),
    es.forEach($h);
}
function hi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ff ||
      ((ff = !0),
      Vt.unstable_scheduleCallback(Vt.unstable_NormalPriority, Uw)));
}
function ts(e) {
  function t(o) {
    return hi(o, e);
  }
  if (0 < Zs.length) {
    hi(Zs[0], e);
    for (var n = 1; n < Zs.length; n++) {
      var r = Zs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    lr !== null && hi(lr, e),
      ur !== null && hi(ur, e),
      cr !== null && hi(cr, e),
      Ji.forEach(t),
      es.forEach(t),
      n = 0;
    n < nr.length;
    n++
  )
    (r = nr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nr.length && ((n = nr[0]), n.blockedOn === null); )
    Py(n), n.blockedOn === null && nr.shift();
}
var Mo = Kn.ReactCurrentBatchConfig,
  Xa = !0;
function Hw(e, t, n, r) {
  var o = ie,
    i = Mo.transition;
  Mo.transition = null;
  try {
    (ie = 1), Md(e, t, n, r);
  } finally {
    (ie = o), (Mo.transition = i);
  }
}
function Ww(e, t, n, r) {
  var o = ie,
    i = Mo.transition;
  Mo.transition = null;
  try {
    (ie = 4), Md(e, t, n, r);
  } finally {
    (ie = o), (Mo.transition = i);
  }
}
function Md(e, t, n, r) {
  if (Xa) {
    var o = df(e, t, n, r);
    if (o === null) lc(e, t, r, Qa, n), _h(e, r);
    else if (zw(o, e, t, n, r)) r.stopPropagation();
    else if ((_h(e, r), t & 4 && -1 < Bw.indexOf(e))) {
      for (; o !== null; ) {
        var i = Rs(o);
        if (
          (i !== null && wy(i),
          (i = df(e, t, n, r)),
          i === null && lc(e, t, r, Qa, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else lc(e, t, r, null, n);
  }
}
var Qa = null;
function df(e, t, n, r) {
  if (((Qa = null), (e = _d(r)), (e = Ir(e)), e !== null))
    if (((t = eo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = py(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Qa = e), null;
}
function Ey(e) {
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
      switch (Ow()) {
        case $d:
          return 1;
        case yy:
          return 4;
        case Ka:
        case Lw:
          return 16;
        case vy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ir = null,
  Id = null,
  wa = null;
function by() {
  if (wa) return wa;
  var e,
    t = Id,
    n = t.length,
    r,
    o = "value" in ir ? ir.value : ir.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (wa = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ta(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function qs() {
  return !0;
}
function Oh() {
  return !1;
}
function zt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? qs
        : Oh),
      (this.isPropagationStopped = Oh),
      this
    );
  }
  return (
    Ae(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = qs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = qs));
      },
      persist: function () {},
      isPersistent: qs,
    }),
    t
  );
}
var ri = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Nd = zt(ri),
  bs = Ae({}, ri, { view: 0, detail: 0 }),
  Gw = zt(bs),
  Ju,
  ec,
  mi,
  jl = Ae({}, bs, {
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
    getModifierState: jd,
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
        : (e !== mi &&
            (mi && e.type === "mousemove"
              ? ((Ju = e.screenX - mi.screenX), (ec = e.screenY - mi.screenY))
              : (ec = Ju = 0),
            (mi = e)),
          Ju);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ec;
    },
  }),
  Lh = zt(jl),
  Kw = Ae({}, jl, { dataTransfer: 0 }),
  Yw = zt(Kw),
  Xw = Ae({}, bs, { relatedTarget: 0 }),
  tc = zt(Xw),
  Qw = Ae({}, ri, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zw = zt(Qw),
  qw = Ae({}, ri, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jw = zt(qw),
  eT = Ae({}, ri, { data: 0 }),
  Mh = zt(eT),
  tT = {
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
  nT = {
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
  rT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function oT(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = rT[e]) ? !!t[e] : !1;
}
function jd() {
  return oT;
}
var iT = Ae({}, bs, {
    key: function (e) {
      if (e.key) {
        var t = tT[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ta(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? nT[e.keyCode] || "Unidentified"
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
    getModifierState: jd,
    charCode: function (e) {
      return e.type === "keypress" ? Ta(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ta(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  sT = zt(iT),
  aT = Ae({}, jl, {
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
  Ih = zt(aT),
  lT = Ae({}, bs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jd,
  }),
  uT = zt(lT),
  cT = Ae({}, ri, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fT = zt(cT),
  dT = Ae({}, jl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  pT = zt(dT),
  hT = [9, 13, 27, 32],
  Dd = Bn && "CompositionEvent" in window,
  Ii = null;
Bn && "documentMode" in document && (Ii = document.documentMode);
var mT = Bn && "TextEvent" in window && !Ii,
  Ry = Bn && (!Dd || (Ii && 8 < Ii && 11 >= Ii)),
  Nh = " ",
  jh = !1;
function Ay(e, t) {
  switch (e) {
    case "keyup":
      return hT.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function _y(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var go = !1;
function gT(e, t) {
  switch (e) {
    case "compositionend":
      return _y(t);
    case "keypress":
      return t.which !== 32 ? null : ((jh = !0), Nh);
    case "textInput":
      return (e = t.data), e === Nh && jh ? null : e;
    default:
      return null;
  }
}
function yT(e, t) {
  if (go)
    return e === "compositionend" || (!Dd && Ay(e, t))
      ? ((e = by()), (wa = Id = ir = null), (go = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ry && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vT = {
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
function Dh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vT[e.type] : t === "textarea";
}
function $y(e, t, n, r) {
  ly(r),
    (t = Za(t, "onChange")),
    0 < t.length &&
      ((n = new Nd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ni = null,
  ns = null;
function ST(e) {
  zy(e, 0);
}
function Dl(e) {
  var t = So(e);
  if (ty(t)) return e;
}
function xT(e, t) {
  if (e === "change") return t;
}
var Oy = !1;
if (Bn) {
  var nc;
  if (Bn) {
    var rc = "oninput" in document;
    if (!rc) {
      var Vh = document.createElement("div");
      Vh.setAttribute("oninput", "return;"),
        (rc = typeof Vh.oninput == "function");
    }
    nc = rc;
  } else nc = !1;
  Oy = nc && (!document.documentMode || 9 < document.documentMode);
}
function Fh() {
  Ni && (Ni.detachEvent("onpropertychange", Ly), (ns = Ni = null));
}
function Ly(e) {
  if (e.propertyName === "value" && Dl(ns)) {
    var t = [];
    $y(t, ns, e, _d(e)), dy(ST, t);
  }
}
function wT(e, t, n) {
  e === "focusin"
    ? (Fh(), (Ni = t), (ns = n), Ni.attachEvent("onpropertychange", Ly))
    : e === "focusout" && Fh();
}
function TT(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Dl(ns);
}
function CT(e, t) {
  if (e === "click") return Dl(t);
}
function kT(e, t) {
  if (e === "input" || e === "change") return Dl(t);
}
function PT(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dn = typeof Object.is == "function" ? Object.is : PT;
function rs(e, t) {
  if (dn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Kc.call(t, o) || !dn(e[o], t[o])) return !1;
  }
  return !0;
}
function Bh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zh(e, t) {
  var n = Bh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Bh(n);
  }
}
function My(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? My(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Iy() {
  for (var e = window, t = Ha(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ha(e.document);
  }
  return t;
}
function Vd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function ET(e) {
  var t = Iy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    My(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Vd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = zh(n, i));
        var s = zh(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var bT = Bn && "documentMode" in document && 11 >= document.documentMode,
  yo = null,
  pf = null,
  ji = null,
  hf = !1;
function Uh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hf ||
    yo == null ||
    yo !== Ha(r) ||
    ((r = yo),
    "selectionStart" in r && Vd(r)
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
    (ji && rs(ji, r)) ||
      ((ji = r),
      (r = Za(pf, "onSelect")),
      0 < r.length &&
        ((t = new Nd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = yo))));
}
function Js(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var vo = {
    animationend: Js("Animation", "AnimationEnd"),
    animationiteration: Js("Animation", "AnimationIteration"),
    animationstart: Js("Animation", "AnimationStart"),
    transitionend: Js("Transition", "TransitionEnd"),
  },
  oc = {},
  Ny = {};
Bn &&
  ((Ny = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vo.animationend.animation,
    delete vo.animationiteration.animation,
    delete vo.animationstart.animation),
  "TransitionEvent" in window || delete vo.transitionend.transition);
function Vl(e) {
  if (oc[e]) return oc[e];
  if (!vo[e]) return e;
  var t = vo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ny) return (oc[e] = t[n]);
  return e;
}
var jy = Vl("animationend"),
  Dy = Vl("animationiteration"),
  Vy = Vl("animationstart"),
  Fy = Vl("transitionend"),
  By = new Map(),
  Hh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function kr(e, t) {
  By.set(e, t), Jr(t, [e]);
}
for (var ic = 0; ic < Hh.length; ic++) {
  var sc = Hh[ic],
    RT = sc.toLowerCase(),
    AT = sc[0].toUpperCase() + sc.slice(1);
  kr(RT, "on" + AT);
}
kr(jy, "onAnimationEnd");
kr(Dy, "onAnimationIteration");
kr(Vy, "onAnimationStart");
kr("dblclick", "onDoubleClick");
kr("focusin", "onFocus");
kr("focusout", "onBlur");
kr(Fy, "onTransitionEnd");
Fo("onMouseEnter", ["mouseout", "mouseover"]);
Fo("onMouseLeave", ["mouseout", "mouseover"]);
Fo("onPointerEnter", ["pointerout", "pointerover"]);
Fo("onPointerLeave", ["pointerout", "pointerover"]);
Jr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Jr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Jr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Jr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Jr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var _i =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  _T = new Set("cancel close invalid load scroll toggle".split(" ").concat(_i));
function Wh(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Rw(r, t, void 0, e), (e.currentTarget = null);
}
function zy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Wh(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Wh(o, a, u), (i = l);
        }
    }
  }
  if (Ga) throw ((e = uf), (Ga = !1), (uf = null), e);
}
function he(e, t) {
  var n = t[Sf];
  n === void 0 && (n = t[Sf] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Uy(t, e, 2, !1), n.add(r));
}
function ac(e, t, n) {
  var r = 0;
  t && (r |= 4), Uy(n, e, r, t);
}
var ea = "_reactListening" + Math.random().toString(36).slice(2);
function os(e) {
  if (!e[ea]) {
    (e[ea] = !0),
      Qg.forEach(function (n) {
        n !== "selectionchange" && (_T.has(n) || ac(n, !1, e), ac(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ea] || ((t[ea] = !0), ac("selectionchange", !1, t));
  }
}
function Uy(e, t, n, r) {
  switch (Ey(t)) {
    case 1:
      var o = Hw;
      break;
    case 4:
      o = Ww;
      break;
    default:
      o = Md;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !lf ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function lc(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Ir(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  dy(function () {
    var u = i,
      c = _d(n),
      f = [];
    e: {
      var d = By.get(e);
      if (d !== void 0) {
        var h = Nd,
          m = e;
        switch (e) {
          case "keypress":
            if (Ta(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = sT;
            break;
          case "focusin":
            (m = "focus"), (h = tc);
            break;
          case "focusout":
            (m = "blur"), (h = tc);
            break;
          case "beforeblur":
          case "afterblur":
            h = tc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Lh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Yw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = uT;
            break;
          case jy:
          case Dy:
          case Vy:
            h = Zw;
            break;
          case Fy:
            h = fT;
            break;
          case "scroll":
            h = Gw;
            break;
          case "wheel":
            h = pT;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Jw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Ih;
        }
        var g = (t & 4) !== 0,
          T = !g && e === "scroll",
          v = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var p = u, y; p !== null; ) {
          y = p;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              v !== null && ((S = qi(p, v)), S != null && g.push(is(p, S, y)))),
            T)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((d = new h(d, m, null, n, c)), f.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          d &&
            n !== sf &&
            (m = n.relatedTarget || n.fromElement) &&
            (Ir(m) || m[zn]))
        )
          break e;
        if (
          (h || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          h
            ? ((m = n.relatedTarget || n.toElement),
              (h = u),
              (m = m ? Ir(m) : null),
              m !== null &&
                ((T = eo(m)), m !== T || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((h = null), (m = u)),
          h !== m)
        ) {
          if (
            ((g = Lh),
            (S = "onMouseLeave"),
            (v = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Ih),
              (S = "onPointerLeave"),
              (v = "onPointerEnter"),
              (p = "pointer")),
            (T = h == null ? d : So(h)),
            (y = m == null ? d : So(m)),
            (d = new g(S, p + "leave", h, n, c)),
            (d.target = T),
            (d.relatedTarget = y),
            (S = null),
            Ir(c) === u &&
              ((g = new g(v, p + "enter", m, n, c)),
              (g.target = y),
              (g.relatedTarget = T),
              (S = g)),
            (T = S),
            h && m)
          )
            t: {
              for (g = h, v = m, p = 0, y = g; y; y = oo(y)) p++;
              for (y = 0, S = v; S; S = oo(S)) y++;
              for (; 0 < p - y; ) (g = oo(g)), p--;
              for (; 0 < y - p; ) (v = oo(v)), y--;
              for (; p--; ) {
                if (g === v || (v !== null && g === v.alternate)) break t;
                (g = oo(g)), (v = oo(v));
              }
              g = null;
            }
          else g = null;
          h !== null && Gh(f, d, h, g, !1),
            m !== null && T !== null && Gh(f, T, m, g, !0);
        }
      }
      e: {
        if (
          ((d = u ? So(u) : window),
          (h = d.nodeName && d.nodeName.toLowerCase()),
          h === "select" || (h === "input" && d.type === "file"))
        )
          var C = xT;
        else if (Dh(d))
          if (Oy) C = kT;
          else {
            C = TT;
            var k = wT;
          }
        else
          (h = d.nodeName) &&
            h.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (C = CT);
        if (C && (C = C(e, u))) {
          $y(f, C, n, c);
          break e;
        }
        k && k(e, d, u),
          e === "focusout" &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === "number" &&
            ef(d, "number", d.value);
      }
      switch (((k = u ? So(u) : window), e)) {
        case "focusin":
          (Dh(k) || k.contentEditable === "true") &&
            ((yo = k), (pf = u), (ji = null));
          break;
        case "focusout":
          ji = pf = yo = null;
          break;
        case "mousedown":
          hf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (hf = !1), Uh(f, n, c);
          break;
        case "selectionchange":
          if (bT) break;
        case "keydown":
        case "keyup":
          Uh(f, n, c);
      }
      var w;
      if (Dd)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        go
          ? Ay(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (Ry &&
          n.locale !== "ko" &&
          (go || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && go && (w = by())
            : ((ir = c),
              (Id = "value" in ir ? ir.value : ir.textContent),
              (go = !0))),
        (k = Za(u, E)),
        0 < k.length &&
          ((E = new Mh(E, e, null, n, c)),
          f.push({ event: E, listeners: k }),
          w ? (E.data = w) : ((w = _y(n)), w !== null && (E.data = w)))),
        (w = mT ? gT(e, n) : yT(e, n)) &&
          ((u = Za(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Mh("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = w)));
    }
    zy(f, t);
  });
}
function is(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Za(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = qi(e, n)),
      i != null && r.unshift(is(e, i, o)),
      (i = qi(e, t)),
      i != null && r.push(is(e, i, o))),
      (e = e.return);
  }
  return r;
}
function oo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Gh(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = qi(n, i)), l != null && s.unshift(is(n, l, a)))
        : o || ((l = qi(n, i)), l != null && s.push(is(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var $T = /\r\n?/g,
  OT = /\u0000|\uFFFD/g;
function Kh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      $T,
      `
`
    )
    .replace(OT, "");
}
function ta(e, t, n) {
  if (((t = Kh(t)), Kh(e) !== t && n)) throw Error(A(425));
}
function qa() {}
var mf = null,
  gf = null;
function yf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var vf = typeof setTimeout == "function" ? setTimeout : void 0,
  LT = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Yh = typeof Promise == "function" ? Promise : void 0,
  MT =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Yh < "u"
      ? function (e) {
          return Yh.resolve(null).then(e).catch(IT);
        }
      : vf;
function IT(e) {
  setTimeout(function () {
    throw e;
  });
}
function uc(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ts(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ts(t);
}
function fr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Xh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var oi = Math.random().toString(36).slice(2),
  wn = "__reactFiber$" + oi,
  ss = "__reactProps$" + oi,
  zn = "__reactContainer$" + oi,
  Sf = "__reactEvents$" + oi,
  NT = "__reactListeners$" + oi,
  jT = "__reactHandles$" + oi;
function Ir(e) {
  var t = e[wn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[zn] || n[wn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Xh(e); e !== null; ) {
          if ((n = e[wn])) return n;
          e = Xh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Rs(e) {
  return (
    (e = e[wn] || e[zn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function So(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function Fl(e) {
  return e[ss] || null;
}
var xf = [],
  xo = -1;
function Pr(e) {
  return { current: e };
}
function ye(e) {
  0 > xo || ((e.current = xf[xo]), (xf[xo] = null), xo--);
}
function ce(e, t) {
  xo++, (xf[xo] = e.current), (e.current = t);
}
var wr = {},
  pt = Pr(wr),
  Et = Pr(!1),
  Kr = wr;
function Bo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function bt(e) {
  return (e = e.childContextTypes), e != null;
}
function Ja() {
  ye(Et), ye(pt);
}
function Qh(e, t, n) {
  if (pt.current !== wr) throw Error(A(168));
  ce(pt, t), ce(Et, n);
}
function Hy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, ww(e) || "Unknown", o));
  return Ae({}, n, r);
}
function el(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wr),
    (Kr = pt.current),
    ce(pt, e),
    ce(Et, Et.current),
    !0
  );
}
function Zh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n
    ? ((e = Hy(e, t, Kr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ye(Et),
      ye(pt),
      ce(pt, e))
    : ye(Et),
    ce(Et, n);
}
var Mn = null,
  Bl = !1,
  cc = !1;
function Wy(e) {
  Mn === null ? (Mn = [e]) : Mn.push(e);
}
function DT(e) {
  (Bl = !0), Wy(e);
}
function Er() {
  if (!cc && Mn !== null) {
    cc = !0;
    var e = 0,
      t = ie;
    try {
      var n = Mn;
      for (ie = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Mn = null), (Bl = !1);
    } catch (o) {
      throw (Mn !== null && (Mn = Mn.slice(e + 1)), gy($d, Er), o);
    } finally {
      (ie = t), (cc = !1);
    }
  }
  return null;
}
var wo = [],
  To = 0,
  tl = null,
  nl = 0,
  Kt = [],
  Yt = 0,
  Yr = null,
  In = 1,
  Nn = "";
function $r(e, t) {
  (wo[To++] = nl), (wo[To++] = tl), (tl = e), (nl = t);
}
function Gy(e, t, n) {
  (Kt[Yt++] = In), (Kt[Yt++] = Nn), (Kt[Yt++] = Yr), (Yr = e);
  var r = In;
  e = Nn;
  var o = 32 - ln(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - ln(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (In = (1 << (32 - ln(t) + o)) | (n << o) | r),
      (Nn = i + e);
  } else (In = (1 << i) | (n << o) | r), (Nn = e);
}
function Fd(e) {
  e.return !== null && ($r(e, 1), Gy(e, 1, 0));
}
function Bd(e) {
  for (; e === tl; )
    (tl = wo[--To]), (wo[To] = null), (nl = wo[--To]), (wo[To] = null);
  for (; e === Yr; )
    (Yr = Kt[--Yt]),
      (Kt[Yt] = null),
      (Nn = Kt[--Yt]),
      (Kt[Yt] = null),
      (In = Kt[--Yt]),
      (Kt[Yt] = null);
}
var jt = null,
  Nt = null,
  ke = !1,
  on = null;
function Ky(e, t) {
  var n = Qt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function qh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (jt = e), (Nt = fr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (jt = e), (Nt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yr !== null ? { id: In, overflow: Nn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Qt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (jt = e),
            (Nt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Tf(e) {
  if (ke) {
    var t = Nt;
    if (t) {
      var n = t;
      if (!qh(e, t)) {
        if (wf(e)) throw Error(A(418));
        t = fr(n.nextSibling);
        var r = jt;
        t && qh(e, t)
          ? Ky(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ke = !1), (jt = e));
      }
    } else {
      if (wf(e)) throw Error(A(418));
      (e.flags = (e.flags & -4097) | 2), (ke = !1), (jt = e);
    }
  }
}
function Jh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  jt = e;
}
function na(e) {
  if (e !== jt) return !1;
  if (!ke) return Jh(e), (ke = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !yf(e.type, e.memoizedProps))),
    t && (t = Nt))
  ) {
    if (wf(e)) throw (Yy(), Error(A(418)));
    for (; t; ) Ky(e, t), (t = fr(t.nextSibling));
  }
  if ((Jh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Nt = fr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Nt = null;
    }
  } else Nt = jt ? fr(e.stateNode.nextSibling) : null;
  return !0;
}
function Yy() {
  for (var e = Nt; e; ) e = fr(e.nextSibling);
}
function zo() {
  (Nt = jt = null), (ke = !1);
}
function zd(e) {
  on === null ? (on = [e]) : on.push(e);
}
var VT = Kn.ReactCurrentBatchConfig;
function nn(e, t) {
  if (e && e.defaultProps) {
    (t = Ae({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var rl = Pr(null),
  ol = null,
  Co = null,
  Ud = null;
function Hd() {
  Ud = Co = ol = null;
}
function Wd(e) {
  var t = rl.current;
  ye(rl), (e._currentValue = t);
}
function Cf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Io(e, t) {
  (ol = e),
    (Ud = Co = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (kt = !0), (e.firstContext = null));
}
function qt(e) {
  var t = e._currentValue;
  if (Ud !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Co === null)) {
      if (ol === null) throw Error(A(308));
      (Co = e), (ol.dependencies = { lanes: 0, firstContext: e });
    } else Co = Co.next = e;
  return t;
}
var Nr = null;
function Gd(e) {
  Nr === null ? (Nr = [e]) : Nr.push(e);
}
function Xy(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Gd(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Un(e, r)
  );
}
function Un(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var er = !1;
function Kd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Qy(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Dn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), q & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Un(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Gd(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Un(e, n)
  );
}
function Ca(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Od(e, n);
  }
}
function em(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function il(e, t, n, r) {
  var o = e.updateQueue;
  er = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var d = a.lane,
        h = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var m = e,
            g = a;
          switch (((d = t), (h = n), g.tag)) {
            case 1:
              if (((m = g.payload), typeof m == "function")) {
                f = m.call(h, f, d);
                break e;
              }
              f = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = g.payload),
                (d = typeof m == "function" ? m.call(h, f, d) : m),
                d == null)
              )
                break e;
              f = Ae({}, f, d);
              break e;
            case 2:
              er = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [a]) : d.push(a));
      } else
        (h = {
          eventTime: h,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = f)) : (c = c.next = h),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Qr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function tm(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(A(191, o));
        o.call(r);
      }
    }
}
var Zy = new Xg.Component().refs;
function kf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ae({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? eo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = vt(),
      o = hr(e),
      i = Dn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = dr(e, i, o)),
      t !== null && (un(t, e, o, r), Ca(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = vt(),
      o = hr(e),
      i = Dn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = dr(e, i, o)),
      t !== null && (un(t, e, o, r), Ca(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = vt(),
      r = hr(e),
      o = Dn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = dr(e, o, r)),
      t !== null && (un(t, e, r, n), Ca(t, e, r));
  },
};
function nm(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !rs(n, r) || !rs(o, i)
      : !0
  );
}
function qy(e, t, n) {
  var r = !1,
    o = wr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = qt(i))
      : ((o = bt(t) ? Kr : pt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Bo(e, o) : wr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function rm(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zl.enqueueReplaceState(t, t.state, null);
}
function Pf(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Zy), Kd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = qt(i))
    : ((i = bt(t) ? Kr : pt.current), (o.context = Bo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (kf(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && zl.enqueueReplaceState(o, o.state, null),
      il(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function gi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            a === Zy && (a = o.refs = {}),
              s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function ra(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function om(e) {
  var t = e._init;
  return t(e._payload);
}
function Jy(e) {
  function t(v, p) {
    if (e) {
      var y = v.deletions;
      y === null ? ((v.deletions = [p]), (v.flags |= 16)) : y.push(p);
    }
  }
  function n(v, p) {
    if (!e) return null;
    for (; p !== null; ) t(v, p), (p = p.sibling);
    return null;
  }
  function r(v, p) {
    for (v = new Map(); p !== null; )
      p.key !== null ? v.set(p.key, p) : v.set(p.index, p), (p = p.sibling);
    return v;
  }
  function o(v, p) {
    return (v = mr(v, p)), (v.index = 0), (v.sibling = null), v;
  }
  function i(v, p, y) {
    return (
      (v.index = y),
      e
        ? ((y = v.alternate),
          y !== null
            ? ((y = y.index), y < p ? ((v.flags |= 2), p) : y)
            : ((v.flags |= 2), p))
        : ((v.flags |= 1048576), p)
    );
  }
  function s(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function a(v, p, y, S) {
    return p === null || p.tag !== 6
      ? ((p = yc(y, v.mode, S)), (p.return = v), p)
      : ((p = o(p, y)), (p.return = v), p);
  }
  function l(v, p, y, S) {
    var C = y.type;
    return C === mo
      ? c(v, p, y.props.children, S, y.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Jn &&
            om(C) === p.type))
      ? ((S = o(p, y.props)), (S.ref = gi(v, p, y)), (S.return = v), S)
      : ((S = Aa(y.type, y.key, y.props, null, v.mode, S)),
        (S.ref = gi(v, p, y)),
        (S.return = v),
        S);
  }
  function u(v, p, y, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== y.containerInfo ||
      p.stateNode.implementation !== y.implementation
      ? ((p = vc(y, v.mode, S)), (p.return = v), p)
      : ((p = o(p, y.children || [])), (p.return = v), p);
  }
  function c(v, p, y, S, C) {
    return p === null || p.tag !== 7
      ? ((p = Ur(y, v.mode, S, C)), (p.return = v), p)
      : ((p = o(p, y)), (p.return = v), p);
  }
  function f(v, p, y) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = yc("" + p, v.mode, y)), (p.return = v), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Gs:
          return (
            (y = Aa(p.type, p.key, p.props, null, v.mode, y)),
            (y.ref = gi(v, null, p)),
            (y.return = v),
            y
          );
        case ho:
          return (p = vc(p, v.mode, y)), (p.return = v), p;
        case Jn:
          var S = p._init;
          return f(v, S(p._payload), y);
      }
      if (Ri(p) || fi(p))
        return (p = Ur(p, v.mode, y, null)), (p.return = v), p;
      ra(v, p);
    }
    return null;
  }
  function d(v, p, y, S) {
    var C = p !== null ? p.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : a(v, p, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Gs:
          return y.key === C ? l(v, p, y, S) : null;
        case ho:
          return y.key === C ? u(v, p, y, S) : null;
        case Jn:
          return (C = y._init), d(v, p, C(y._payload), S);
      }
      if (Ri(y) || fi(y)) return C !== null ? null : c(v, p, y, S, null);
      ra(v, y);
    }
    return null;
  }
  function h(v, p, y, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (v = v.get(y) || null), a(p, v, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Gs:
          return (v = v.get(S.key === null ? y : S.key) || null), l(p, v, S, C);
        case ho:
          return (v = v.get(S.key === null ? y : S.key) || null), u(p, v, S, C);
        case Jn:
          var k = S._init;
          return h(v, p, y, k(S._payload), C);
      }
      if (Ri(S) || fi(S)) return (v = v.get(y) || null), c(p, v, S, C, null);
      ra(p, S);
    }
    return null;
  }
  function m(v, p, y, S) {
    for (
      var C = null, k = null, w = p, E = (p = 0), O = null;
      w !== null && E < y.length;
      E++
    ) {
      w.index > E ? ((O = w), (w = null)) : (O = w.sibling);
      var b = d(v, w, y[E], S);
      if (b === null) {
        w === null && (w = O);
        break;
      }
      e && w && b.alternate === null && t(v, w),
        (p = i(b, p, E)),
        k === null ? (C = b) : (k.sibling = b),
        (k = b),
        (w = O);
    }
    if (E === y.length) return n(v, w), ke && $r(v, E), C;
    if (w === null) {
      for (; E < y.length; E++)
        (w = f(v, y[E], S)),
          w !== null &&
            ((p = i(w, p, E)), k === null ? (C = w) : (k.sibling = w), (k = w));
      return ke && $r(v, E), C;
    }
    for (w = r(v, w); E < y.length; E++)
      (O = h(w, v, E, y[E], S)),
        O !== null &&
          (e && O.alternate !== null && w.delete(O.key === null ? E : O.key),
          (p = i(O, p, E)),
          k === null ? (C = O) : (k.sibling = O),
          (k = O));
    return (
      e &&
        w.forEach(function (I) {
          return t(v, I);
        }),
      ke && $r(v, E),
      C
    );
  }
  function g(v, p, y, S) {
    var C = fi(y);
    if (typeof C != "function") throw Error(A(150));
    if (((y = C.call(y)), y == null)) throw Error(A(151));
    for (
      var k = (C = null), w = p, E = (p = 0), O = null, b = y.next();
      w !== null && !b.done;
      E++, b = y.next()
    ) {
      w.index > E ? ((O = w), (w = null)) : (O = w.sibling);
      var I = d(v, w, b.value, S);
      if (I === null) {
        w === null && (w = O);
        break;
      }
      e && w && I.alternate === null && t(v, w),
        (p = i(I, p, E)),
        k === null ? (C = I) : (k.sibling = I),
        (k = I),
        (w = O);
    }
    if (b.done) return n(v, w), ke && $r(v, E), C;
    if (w === null) {
      for (; !b.done; E++, b = y.next())
        (b = f(v, b.value, S)),
          b !== null &&
            ((p = i(b, p, E)), k === null ? (C = b) : (k.sibling = b), (k = b));
      return ke && $r(v, E), C;
    }
    for (w = r(v, w); !b.done; E++, b = y.next())
      (b = h(w, v, E, b.value, S)),
        b !== null &&
          (e && b.alternate !== null && w.delete(b.key === null ? E : b.key),
          (p = i(b, p, E)),
          k === null ? (C = b) : (k.sibling = b),
          (k = b));
    return (
      e &&
        w.forEach(function (B) {
          return t(v, B);
        }),
      ke && $r(v, E),
      C
    );
  }
  function T(v, p, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === mo &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Gs:
          e: {
            for (var C = y.key, k = p; k !== null; ) {
              if (k.key === C) {
                if (((C = y.type), C === mo)) {
                  if (k.tag === 7) {
                    n(v, k.sibling),
                      (p = o(k, y.props.children)),
                      (p.return = v),
                      (v = p);
                    break e;
                  }
                } else if (
                  k.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Jn &&
                    om(C) === k.type)
                ) {
                  n(v, k.sibling),
                    (p = o(k, y.props)),
                    (p.ref = gi(v, k, y)),
                    (p.return = v),
                    (v = p);
                  break e;
                }
                n(v, k);
                break;
              } else t(v, k);
              k = k.sibling;
            }
            y.type === mo
              ? ((p = Ur(y.props.children, v.mode, S, y.key)),
                (p.return = v),
                (v = p))
              : ((S = Aa(y.type, y.key, y.props, null, v.mode, S)),
                (S.ref = gi(v, p, y)),
                (S.return = v),
                (v = S));
          }
          return s(v);
        case ho:
          e: {
            for (k = y.key; p !== null; ) {
              if (p.key === k)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === y.containerInfo &&
                  p.stateNode.implementation === y.implementation
                ) {
                  n(v, p.sibling),
                    (p = o(p, y.children || [])),
                    (p.return = v),
                    (v = p);
                  break e;
                } else {
                  n(v, p);
                  break;
                }
              else t(v, p);
              p = p.sibling;
            }
            (p = vc(y, v.mode, S)), (p.return = v), (v = p);
          }
          return s(v);
        case Jn:
          return (k = y._init), T(v, p, k(y._payload), S);
      }
      if (Ri(y)) return m(v, p, y, S);
      if (fi(y)) return g(v, p, y, S);
      ra(v, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        p !== null && p.tag === 6
          ? (n(v, p.sibling), (p = o(p, y)), (p.return = v), (v = p))
          : (n(v, p), (p = yc(y, v.mode, S)), (p.return = v), (v = p)),
        s(v))
      : n(v, p);
  }
  return T;
}
var Uo = Jy(!0),
  ev = Jy(!1),
  As = {},
  kn = Pr(As),
  as = Pr(As),
  ls = Pr(As);
function jr(e) {
  if (e === As) throw Error(A(174));
  return e;
}
function Yd(e, t) {
  switch ((ce(ls, t), ce(as, e), ce(kn, As), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : nf(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = nf(t, e));
  }
  ye(kn), ce(kn, t);
}
function Ho() {
  ye(kn), ye(as), ye(ls);
}
function tv(e) {
  jr(ls.current);
  var t = jr(kn.current),
    n = nf(t, e.type);
  t !== n && (ce(as, e), ce(kn, n));
}
function Xd(e) {
  as.current === e && (ye(kn), ye(as));
}
var Ee = Pr(0);
function sl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var fc = [];
function Qd() {
  for (var e = 0; e < fc.length; e++)
    fc[e]._workInProgressVersionPrimary = null;
  fc.length = 0;
}
var ka = Kn.ReactCurrentDispatcher,
  dc = Kn.ReactCurrentBatchConfig,
  Xr = 0,
  Re = null,
  Ke = null,
  qe = null,
  al = !1,
  Di = !1,
  us = 0,
  FT = 0;
function ut() {
  throw Error(A(321));
}
function Zd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dn(e[n], t[n])) return !1;
  return !0;
}
function qd(e, t, n, r, o, i) {
  if (
    ((Xr = i),
    (Re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ka.current = e === null || e.memoizedState === null ? HT : WT),
    (e = n(r, o)),
    Di)
  ) {
    i = 0;
    do {
      if (((Di = !1), (us = 0), 25 <= i)) throw Error(A(301));
      (i += 1),
        (qe = Ke = null),
        (t.updateQueue = null),
        (ka.current = GT),
        (e = n(r, o));
    } while (Di);
  }
  if (
    ((ka.current = ll),
    (t = Ke !== null && Ke.next !== null),
    (Xr = 0),
    (qe = Ke = Re = null),
    (al = !1),
    t)
  )
    throw Error(A(300));
  return e;
}
function Jd() {
  var e = us !== 0;
  return (us = 0), e;
}
function gn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return qe === null ? (Re.memoizedState = qe = e) : (qe = qe.next = e), qe;
}
function Jt() {
  if (Ke === null) {
    var e = Re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ke.next;
  var t = qe === null ? Re.memoizedState : qe.next;
  if (t !== null) (qe = t), (Ke = e);
  else {
    if (e === null) throw Error(A(310));
    (Ke = e),
      (e = {
        memoizedState: Ke.memoizedState,
        baseState: Ke.baseState,
        baseQueue: Ke.baseQueue,
        queue: Ke.queue,
        next: null,
      }),
      qe === null ? (Re.memoizedState = qe = e) : (qe = qe.next = e);
  }
  return qe;
}
function cs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pc(e) {
  var t = Jt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = Ke,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Xr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (Re.lanes |= c),
          (Qr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      dn(r, t.memoizedState) || (kt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Re.lanes |= i), (Qr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hc(e) {
  var t = Jt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    dn(i, t.memoizedState) || (kt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function nv() {}
function rv(e, t) {
  var n = Re,
    r = Jt(),
    o = t(),
    i = !dn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (kt = !0)),
    (r = r.queue),
    ep(sv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (qe !== null && qe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fs(9, iv.bind(null, n, r, o, t), void 0, null),
      et === null)
    )
      throw Error(A(349));
    Xr & 30 || ov(n, t, o);
  }
  return o;
}
function ov(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function iv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), av(t) && lv(e);
}
function sv(e, t, n) {
  return n(function () {
    av(t) && lv(e);
  });
}
function av(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dn(e, n);
  } catch {
    return !0;
  }
}
function lv(e) {
  var t = Un(e, 1);
  t !== null && un(t, e, 1, -1);
}
function im(e) {
  var t = gn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = UT.bind(null, Re, e)),
    [t.memoizedState, e]
  );
}
function fs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function uv() {
  return Jt().memoizedState;
}
function Pa(e, t, n, r) {
  var o = gn();
  (Re.flags |= e),
    (o.memoizedState = fs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ul(e, t, n, r) {
  var o = Jt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ke !== null) {
    var s = Ke.memoizedState;
    if (((i = s.destroy), r !== null && Zd(r, s.deps))) {
      o.memoizedState = fs(t, n, i, r);
      return;
    }
  }
  (Re.flags |= e), (o.memoizedState = fs(1 | t, n, i, r));
}
function sm(e, t) {
  return Pa(8390656, 8, e, t);
}
function ep(e, t) {
  return Ul(2048, 8, e, t);
}
function cv(e, t) {
  return Ul(4, 2, e, t);
}
function fv(e, t) {
  return Ul(4, 4, e, t);
}
function dv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function pv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ul(4, 4, dv.bind(null, t, e), n)
  );
}
function tp() {}
function hv(e, t) {
  var n = Jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function mv(e, t) {
  var n = Jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function gv(e, t, n) {
  return Xr & 21
    ? (dn(n, t) || ((n = Sy()), (Re.lanes |= n), (Qr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (kt = !0)), (e.memoizedState = n));
}
function BT(e, t) {
  var n = ie;
  (ie = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = dc.transition;
  dc.transition = {};
  try {
    e(!1), t();
  } finally {
    (ie = n), (dc.transition = r);
  }
}
function yv() {
  return Jt().memoizedState;
}
function zT(e, t, n) {
  var r = hr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    vv(e))
  )
    Sv(t, n);
  else if (((n = Xy(e, t, n, r)), n !== null)) {
    var o = vt();
    un(n, e, r, o), xv(n, t, r);
  }
}
function UT(e, t, n) {
  var r = hr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vv(e)) Sv(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), dn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Gd(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Xy(e, t, o, r)),
      n !== null && ((o = vt()), un(n, e, r, o), xv(n, t, r));
  }
}
function vv(e) {
  var t = e.alternate;
  return e === Re || (t !== null && t === Re);
}
function Sv(e, t) {
  Di = al = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function xv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Od(e, n);
  }
}
var ll = {
    readContext: qt,
    useCallback: ut,
    useContext: ut,
    useEffect: ut,
    useImperativeHandle: ut,
    useInsertionEffect: ut,
    useLayoutEffect: ut,
    useMemo: ut,
    useReducer: ut,
    useRef: ut,
    useState: ut,
    useDebugValue: ut,
    useDeferredValue: ut,
    useTransition: ut,
    useMutableSource: ut,
    useSyncExternalStore: ut,
    useId: ut,
    unstable_isNewReconciler: !1,
  },
  HT = {
    readContext: qt,
    useCallback: function (e, t) {
      return (gn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: qt,
    useEffect: sm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Pa(4194308, 4, dv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Pa(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Pa(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = gn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = gn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = zT.bind(null, Re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = gn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: im,
    useDebugValue: tp,
    useDeferredValue: function (e) {
      return (gn().memoizedState = e);
    },
    useTransition: function () {
      var e = im(!1),
        t = e[0];
      return (e = BT.bind(null, e[1])), (gn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Re,
        o = gn();
      if (ke) {
        if (n === void 0) throw Error(A(407));
        n = n();
      } else {
        if (((n = t()), et === null)) throw Error(A(349));
        Xr & 30 || ov(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        sm(sv.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        fs(9, iv.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = gn(),
        t = et.identifierPrefix;
      if (ke) {
        var n = Nn,
          r = In;
        (n = (r & ~(1 << (32 - ln(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = us++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = FT++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  WT = {
    readContext: qt,
    useCallback: hv,
    useContext: qt,
    useEffect: ep,
    useImperativeHandle: pv,
    useInsertionEffect: cv,
    useLayoutEffect: fv,
    useMemo: mv,
    useReducer: pc,
    useRef: uv,
    useState: function () {
      return pc(cs);
    },
    useDebugValue: tp,
    useDeferredValue: function (e) {
      var t = Jt();
      return gv(t, Ke.memoizedState, e);
    },
    useTransition: function () {
      var e = pc(cs)[0],
        t = Jt().memoizedState;
      return [e, t];
    },
    useMutableSource: nv,
    useSyncExternalStore: rv,
    useId: yv,
    unstable_isNewReconciler: !1,
  },
  GT = {
    readContext: qt,
    useCallback: hv,
    useContext: qt,
    useEffect: ep,
    useImperativeHandle: pv,
    useInsertionEffect: cv,
    useLayoutEffect: fv,
    useMemo: mv,
    useReducer: hc,
    useRef: uv,
    useState: function () {
      return hc(cs);
    },
    useDebugValue: tp,
    useDeferredValue: function (e) {
      var t = Jt();
      return Ke === null ? (t.memoizedState = e) : gv(t, Ke.memoizedState, e);
    },
    useTransition: function () {
      var e = hc(cs)[0],
        t = Jt().memoizedState;
      return [e, t];
    },
    useMutableSource: nv,
    useSyncExternalStore: rv,
    useId: yv,
    unstable_isNewReconciler: !1,
  };
function Wo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += xw(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function mc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ef(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var KT = typeof WeakMap == "function" ? WeakMap : Map;
function wv(e, t, n) {
  (n = Dn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      cl || ((cl = !0), (Nf = r)), Ef(e, t);
    }),
    n
  );
}
function Tv(e, t, n) {
  (n = Dn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ef(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ef(e, t),
          typeof r != "function" &&
            (pr === null ? (pr = new Set([this])) : pr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function am(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new KT();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = aC.bind(null, e, t, n)), t.then(e, e));
}
function lm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function um(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Dn(-1, 1)), (t.tag = 2), dr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var YT = Kn.ReactCurrentOwner,
  kt = !1;
function yt(e, t, n, r) {
  t.child = e === null ? ev(t, null, n, r) : Uo(t, e.child, n, r);
}
function cm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Io(t, o),
    (r = qd(e, t, n, r, i, o)),
    (n = Jd()),
    e !== null && !kt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Hn(e, t, o))
      : (ke && n && Fd(t), (t.flags |= 1), yt(e, t, r, o), t.child)
  );
}
function fm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !up(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Cv(e, t, i, r, o))
      : ((e = Aa(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : rs), n(s, r) && e.ref === t.ref)
    )
      return Hn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = mr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Cv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (rs(i, r) && e.ref === t.ref)
      if (((kt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (kt = !0);
      else return (t.lanes = e.lanes), Hn(e, t, o);
  }
  return bf(e, t, n, r, o);
}
function kv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ce(Po, Mt),
        (Mt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ce(Po, Mt),
          (Mt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ce(Po, Mt),
        (Mt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ce(Po, Mt),
      (Mt |= r);
  return yt(e, t, o, n), t.child;
}
function Pv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bf(e, t, n, r, o) {
  var i = bt(n) ? Kr : pt.current;
  return (
    (i = Bo(t, i)),
    Io(t, o),
    (n = qd(e, t, n, r, i, o)),
    (r = Jd()),
    e !== null && !kt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Hn(e, t, o))
      : (ke && r && Fd(t), (t.flags |= 1), yt(e, t, n, o), t.child)
  );
}
function dm(e, t, n, r, o) {
  if (bt(n)) {
    var i = !0;
    el(t);
  } else i = !1;
  if ((Io(t, o), t.stateNode === null))
    Ea(e, t), qy(t, n, r), Pf(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = qt(u))
      : ((u = bt(n) ? Kr : pt.current), (u = Bo(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && rm(t, s, r, u)),
      (er = !1);
    var d = t.memoizedState;
    (s.state = d),
      il(t, r, s, o),
      (l = t.memoizedState),
      a !== r || d !== l || Et.current || er
        ? (typeof c == "function" && (kf(t, n, c, r), (l = t.memoizedState)),
          (a = er || nm(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Qy(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : nn(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = qt(l))
        : ((l = bt(n) ? Kr : pt.current), (l = Bo(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && rm(t, s, r, l)),
      (er = !1),
      (d = t.memoizedState),
      (s.state = d),
      il(t, r, s, o);
    var m = t.memoizedState;
    a !== f || d !== m || Et.current || er
      ? (typeof h == "function" && (kf(t, n, h, r), (m = t.memoizedState)),
        (u = er || nm(t, n, u, r, d, m, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, m, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, m, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (s.props = r),
        (s.state = m),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Rf(e, t, n, r, i, o);
}
function Rf(e, t, n, r, o, i) {
  Pv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Zh(t, n, !1), Hn(e, t, i);
  (r = t.stateNode), (YT.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Uo(t, e.child, null, i)), (t.child = Uo(t, null, a, i)))
      : yt(e, t, a, i),
    (t.memoizedState = r.state),
    o && Zh(t, n, !0),
    t.child
  );
}
function Ev(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qh(e, t.context, !1),
    Yd(e, t.containerInfo);
}
function pm(e, t, n, r, o) {
  return zo(), zd(o), (t.flags |= 256), yt(e, t, n, r), t.child;
}
var Af = { dehydrated: null, treeContext: null, retryLane: 0 };
function _f(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bv(e, t, n) {
  var r = t.pendingProps,
    o = Ee.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ce(Ee, o & 1),
    e === null)
  )
    return (
      Tf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Gl(s, r, 0, null)),
              (e = Ur(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = _f(n)),
              (t.memoizedState = Af),
              e)
            : np(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return XT(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = mr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = mr(a, i)) : ((i = Ur(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? _f(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Af),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = mr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function np(e, t) {
  return (
    (t = Gl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function oa(e, t, n, r) {
  return (
    r !== null && zd(r),
    Uo(t, e.child, null, n),
    (e = np(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function XT(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = mc(Error(A(422)))), oa(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Gl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Ur(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Uo(t, e.child, null, s),
        (t.child.memoizedState = _f(s)),
        (t.memoizedState = Af),
        i);
  if (!(t.mode & 1)) return oa(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(A(419))), (r = mc(i, r, void 0)), oa(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), kt || a)) {
    if (((r = et), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Un(e, o), un(r, e, o, -1));
    }
    return lp(), (r = mc(Error(A(421)))), oa(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = lC.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Nt = fr(o.nextSibling)),
      (jt = t),
      (ke = !0),
      (on = null),
      e !== null &&
        ((Kt[Yt++] = In),
        (Kt[Yt++] = Nn),
        (Kt[Yt++] = Yr),
        (In = e.id),
        (Nn = e.overflow),
        (Yr = t)),
      (t = np(t, r.children)),
      (t.flags |= 4096),
      t);
}
function hm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Cf(e.return, t, n);
}
function gc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Rv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((yt(e, t, r.children, n), (r = Ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && hm(e, n, t);
        else if (e.tag === 19) hm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ce(Ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && sl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          gc(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && sl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        gc(t, !0, n, null, i);
        break;
      case "together":
        gc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ea(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Hn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Qr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (
      e = t.child, n = mr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = mr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function QT(e, t, n) {
  switch (t.tag) {
    case 3:
      Ev(t), zo();
      break;
    case 5:
      tv(t);
      break;
    case 1:
      bt(t.type) && el(t);
      break;
    case 4:
      Yd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ce(rl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ce(Ee, Ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? bv(e, t, n)
          : (ce(Ee, Ee.current & 1),
            (e = Hn(e, t, n)),
            e !== null ? e.sibling : null);
      ce(Ee, Ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Rv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ce(Ee, Ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), kv(e, t, n);
  }
  return Hn(e, t, n);
}
var Av, $f, _v, $v;
Av = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
$f = function () {};
_v = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), jr(kn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = qc(e, o)), (r = qc(e, r)), (i = []);
        break;
      case "select":
        (o = Ae({}, o, { value: void 0 })),
          (r = Ae({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = tf(e, o)), (r = tf(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = qa);
    }
    rf(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Qi.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Qi.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && he("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
$v = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yi(e, t) {
  if (!ke)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ct(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ZT(e, t, n) {
  var r = t.pendingProps;
  switch ((Bd(t), t.tag)) {
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
      return ct(t), null;
    case 1:
      return bt(t.type) && Ja(), ct(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ho(),
        ye(Et),
        ye(pt),
        Qd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (na(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), on !== null && (Vf(on), (on = null)))),
        $f(e, t),
        ct(t),
        null
      );
    case 5:
      Xd(t);
      var o = jr(ls.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        _v(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return ct(t), null;
        }
        if (((e = jr(kn.current)), na(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[wn] = t), (r[ss] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              he("cancel", r), he("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < _i.length; o++) he(_i[o], r);
              break;
            case "source":
              he("error", r);
              break;
            case "img":
            case "image":
            case "link":
              he("error", r), he("load", r);
              break;
            case "details":
              he("toggle", r);
              break;
            case "input":
              Ch(r, i), he("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                he("invalid", r);
              break;
            case "textarea":
              Ph(r, i), he("invalid", r);
          }
          rf(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ta(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ta(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Qi.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  he("scroll", r);
            }
          switch (n) {
            case "input":
              Ks(r), kh(r, i, !0);
              break;
            case "textarea":
              Ks(r), Eh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = qa);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = oy(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[wn] = t),
            (e[ss] = r),
            Av(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = of(n, r)), n)) {
              case "dialog":
                he("cancel", e), he("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < _i.length; o++) he(_i[o], e);
                o = r;
                break;
              case "source":
                he("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                he("error", e), he("load", e), (o = r);
                break;
              case "details":
                he("toggle", e), (o = r);
                break;
              case "input":
                Ch(e, r), (o = qc(e, r)), he("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ae({}, r, { value: void 0 })),
                  he("invalid", e);
                break;
              case "textarea":
                Ph(e, r), (o = tf(e, r)), he("invalid", e);
                break;
              default:
                o = r;
            }
            rf(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? ay(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && iy(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Zi(e, l)
                    : typeof l == "number" && Zi(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Qi.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && he("scroll", e)
                      : l != null && Ed(e, i, l, s));
              }
            switch (n) {
              case "input":
                Ks(e), kh(e, r, !1);
                break;
              case "textarea":
                Ks(e), Eh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? $o(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      $o(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = qa);
            }
            switch (n) {
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
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ct(t), null;
    case 6:
      if (e && t.stateNode != null) $v(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (((n = jr(ls.current)), jr(kn.current), na(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[wn] = t),
            (i = r.nodeValue !== n) && ((e = jt), e !== null))
          )
            switch (e.tag) {
              case 3:
                ta(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ta(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[wn] = t),
            (t.stateNode = r);
      }
      return ct(t), null;
    case 13:
      if (
        (ye(Ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ke && Nt !== null && t.mode & 1 && !(t.flags & 128))
          Yy(), zo(), (t.flags |= 98560), (i = !1);
        else if (((i = na(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(A(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(A(317));
            i[wn] = t;
          } else
            zo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ct(t), (i = !1);
        } else on !== null && (Vf(on), (on = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ee.current & 1 ? Ye === 0 && (Ye = 3) : lp())),
          t.updateQueue !== null && (t.flags |= 4),
          ct(t),
          null);
    case 4:
      return (
        Ho(), $f(e, t), e === null && os(t.stateNode.containerInfo), ct(t), null
      );
    case 10:
      return Wd(t.type._context), ct(t), null;
    case 17:
      return bt(t.type) && Ja(), ct(t), null;
    case 19:
      if ((ye(Ee), (i = t.memoizedState), i === null)) return ct(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) yi(i, !1);
        else {
          if (Ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = sl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    yi(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ce(Ee, (Ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ne() > Go &&
            ((t.flags |= 128), (r = !0), yi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = sl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ke)
            )
              return ct(t), null;
          } else
            2 * Ne() - i.renderingStartTime > Go &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ne()),
          (t.sibling = null),
          (n = Ee.current),
          ce(Ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (ct(t), null);
    case 22:
    case 23:
      return (
        ap(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Mt & 1073741824 && (ct(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ct(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function qT(e, t) {
  switch ((Bd(t), t.tag)) {
    case 1:
      return (
        bt(t.type) && Ja(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ho(),
        ye(Et),
        ye(pt),
        Qd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Xd(t), null;
    case 13:
      if (
        (ye(Ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(A(340));
        zo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ye(Ee), null;
    case 4:
      return Ho(), null;
    case 10:
      return Wd(t.type._context), null;
    case 22:
    case 23:
      return ap(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ia = !1,
  dt = !1,
  JT = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function ko(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Le(e, t, r);
      }
    else n.current = null;
}
function Of(e, t, n) {
  try {
    n();
  } catch (r) {
    Le(e, t, r);
  }
}
var mm = !1;
function eC(e, t) {
  if (((mf = Xa), (e = Iy()), Vd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var h;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              (d = f), (f = h);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === o && (a = s),
                d === i && ++c === r && (l = s),
                (h = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (gf = { focusedElem: e, selectionRange: n }, Xa = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var g = m.memoizedProps,
                    T = m.memoizedState,
                    v = t.stateNode,
                    p = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : nn(t.type, g),
                      T
                    );
                  v.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (S) {
          Le(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (m = mm), (mm = !1), m;
}
function Vi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Of(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Hl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Lf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ov(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ov(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[wn], delete t[ss], delete t[Sf], delete t[NT], delete t[jT])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Lv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Lv(e.return)) return null;
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
function Mf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = qa));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mf(e, t, n), e = e.sibling; e !== null; ) Mf(e, t, n), (e = e.sibling);
}
function If(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (If(e, t, n), e = e.sibling; e !== null; ) If(e, t, n), (e = e.sibling);
}
var rt = null,
  rn = !1;
function Xn(e, t, n) {
  for (n = n.child; n !== null; ) Mv(e, t, n), (n = n.sibling);
}
function Mv(e, t, n) {
  if (Cn && typeof Cn.onCommitFiberUnmount == "function")
    try {
      Cn.onCommitFiberUnmount(Nl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      dt || ko(n, t);
    case 6:
      var r = rt,
        o = rn;
      (rt = null),
        Xn(e, t, n),
        (rt = r),
        (rn = o),
        rt !== null &&
          (rn
            ? ((e = rt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : rt.removeChild(n.stateNode));
      break;
    case 18:
      rt !== null &&
        (rn
          ? ((e = rt),
            (n = n.stateNode),
            e.nodeType === 8
              ? uc(e.parentNode, n)
              : e.nodeType === 1 && uc(e, n),
            ts(e))
          : uc(rt, n.stateNode));
      break;
    case 4:
      (r = rt),
        (o = rn),
        (rt = n.stateNode.containerInfo),
        (rn = !0),
        Xn(e, t, n),
        (rt = r),
        (rn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !dt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Of(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Xn(e, t, n);
      break;
    case 1:
      if (
        !dt &&
        (ko(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Le(n, t, a);
        }
      Xn(e, t, n);
      break;
    case 21:
      Xn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((dt = (r = dt) || n.memoizedState !== null), Xn(e, t, n), (dt = r))
        : Xn(e, t, n);
      break;
    default:
      Xn(e, t, n);
  }
}
function ym(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new JT()),
      t.forEach(function (r) {
        var o = uC.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function tn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (rt = a.stateNode), (rn = !1);
              break e;
            case 3:
              (rt = a.stateNode.containerInfo), (rn = !0);
              break e;
            case 4:
              (rt = a.stateNode.containerInfo), (rn = !0);
              break e;
          }
          a = a.return;
        }
        if (rt === null) throw Error(A(160));
        Mv(i, s, o), (rt = null), (rn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Le(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Iv(t, e), (t = t.sibling);
}
function Iv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((tn(t, e), mn(e), r & 4)) {
        try {
          Vi(3, e, e.return), Hl(3, e);
        } catch (g) {
          Le(e, e.return, g);
        }
        try {
          Vi(5, e, e.return);
        } catch (g) {
          Le(e, e.return, g);
        }
      }
      break;
    case 1:
      tn(t, e), mn(e), r & 512 && n !== null && ko(n, n.return);
      break;
    case 5:
      if (
        (tn(t, e),
        mn(e),
        r & 512 && n !== null && ko(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Zi(o, "");
        } catch (g) {
          Le(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && ny(o, i),
              of(a, s);
            var u = of(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? ay(o, f)
                : c === "dangerouslySetInnerHTML"
                ? iy(o, f)
                : c === "children"
                ? Zi(o, f)
                : Ed(o, c, f, u);
            }
            switch (a) {
              case "input":
                Jc(o, i);
                break;
              case "textarea":
                ry(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? $o(o, !!i.multiple, h, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? $o(o, !!i.multiple, i.defaultValue, !0)
                      : $o(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ss] = i;
          } catch (g) {
            Le(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((tn(t, e), mn(e), r & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          Le(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (tn(t, e), mn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ts(t.containerInfo);
        } catch (g) {
          Le(e, e.return, g);
        }
      break;
    case 4:
      tn(t, e), mn(e);
      break;
    case 13:
      tn(t, e),
        mn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ip = Ne())),
        r & 4 && ym(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((dt = (u = dt) || c), tn(t, e), (dt = u)) : tn(t, e),
        mn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (f = M = c; M !== null; ) {
              switch (((d = M), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vi(4, d, d.return);
                  break;
                case 1:
                  ko(d, d.return);
                  var m = d.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (g) {
                      Le(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ko(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Sm(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = d), (M = h)) : Sm(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = sy("display", s)));
              } catch (g) {
                Le(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (g) {
                Le(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      tn(t, e), mn(e), r & 4 && ym(e);
      break;
    case 21:
      break;
    default:
      tn(t, e), mn(e);
  }
}
function mn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Lv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Zi(o, ""), (r.flags &= -33));
          var i = gm(e);
          If(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = gm(e);
          Mf(e, a, s);
          break;
        default:
          throw Error(A(161));
      }
    } catch (l) {
      Le(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function tC(e, t, n) {
  (M = e), Nv(e);
}
function Nv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var o = M,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ia;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || dt;
        a = ia;
        var u = dt;
        if (((ia = s), (dt = l) && !u))
          for (M = o; M !== null; )
            (s = M),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? xm(o)
                : l !== null
                ? ((l.return = s), (M = l))
                : xm(o);
        for (; i !== null; ) (M = i), Nv(i), (i = i.sibling);
        (M = o), (ia = a), (dt = u);
      }
      vm(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (M = i)) : vm(e);
  }
}
function vm(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              dt || Hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !dt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : nn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && tm(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                tm(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && ts(f);
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
              throw Error(A(163));
          }
        dt || (t.flags & 512 && Lf(t));
      } catch (d) {
        Le(t, t.return, d);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Sm(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function xm(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hl(4, t);
          } catch (l) {
            Le(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Le(t, o, l);
            }
          }
          var i = t.return;
          try {
            Lf(t);
          } catch (l) {
            Le(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Lf(t);
          } catch (l) {
            Le(t, s, l);
          }
      }
    } catch (l) {
      Le(t, t.return, l);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (M = a);
      break;
    }
    M = t.return;
  }
}
var nC = Math.ceil,
  ul = Kn.ReactCurrentDispatcher,
  rp = Kn.ReactCurrentOwner,
  Zt = Kn.ReactCurrentBatchConfig,
  q = 0,
  et = null,
  ze = null,
  it = 0,
  Mt = 0,
  Po = Pr(0),
  Ye = 0,
  ds = null,
  Qr = 0,
  Wl = 0,
  op = 0,
  Fi = null,
  Ct = null,
  ip = 0,
  Go = 1 / 0,
  $n = null,
  cl = !1,
  Nf = null,
  pr = null,
  sa = !1,
  sr = null,
  fl = 0,
  Bi = 0,
  jf = null,
  ba = -1,
  Ra = 0;
function vt() {
  return q & 6 ? Ne() : ba !== -1 ? ba : (ba = Ne());
}
function hr(e) {
  return e.mode & 1
    ? q & 2 && it !== 0
      ? it & -it
      : VT.transition !== null
      ? (Ra === 0 && (Ra = Sy()), Ra)
      : ((e = ie),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ey(e.type))),
        e)
    : 1;
}
function un(e, t, n, r) {
  if (50 < Bi) throw ((Bi = 0), (jf = null), Error(A(185)));
  Es(e, n, r),
    (!(q & 2) || e !== et) &&
      (e === et && (!(q & 2) && (Wl |= n), Ye === 4 && rr(e, it)),
      Rt(e, r),
      n === 1 && q === 0 && !(t.mode & 1) && ((Go = Ne() + 500), Bl && Er()));
}
function Rt(e, t) {
  var n = e.callbackNode;
  Vw(e, t);
  var r = Ya(e, e === et ? it : 0);
  if (r === 0)
    n !== null && Ah(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ah(n), t === 1))
      e.tag === 0 ? DT(wm.bind(null, e)) : Wy(wm.bind(null, e)),
        MT(function () {
          !(q & 6) && Er();
        }),
        (n = null);
    else {
      switch (xy(r)) {
        case 1:
          n = $d;
          break;
        case 4:
          n = yy;
          break;
        case 16:
          n = Ka;
          break;
        case 536870912:
          n = vy;
          break;
        default:
          n = Ka;
      }
      n = Hv(n, jv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function jv(e, t) {
  if (((ba = -1), (Ra = 0), q & 6)) throw Error(A(327));
  var n = e.callbackNode;
  if (No() && e.callbackNode !== n) return null;
  var r = Ya(e, e === et ? it : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = dl(e, r);
  else {
    t = r;
    var o = q;
    q |= 2;
    var i = Vv();
    (et !== e || it !== t) && (($n = null), (Go = Ne() + 500), zr(e, t));
    do
      try {
        iC();
        break;
      } catch (a) {
        Dv(e, a);
      }
    while (!0);
    Hd(),
      (ul.current = i),
      (q = o),
      ze !== null ? (t = 0) : ((et = null), (it = 0), (t = Ye));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = cf(e)), o !== 0 && ((r = o), (t = Df(e, o)))), t === 1)
    )
      throw ((n = ds), zr(e, 0), rr(e, r), Rt(e, Ne()), n);
    if (t === 6) rr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !rC(o) &&
          ((t = dl(e, r)),
          t === 2 && ((i = cf(e)), i !== 0 && ((r = i), (t = Df(e, i)))),
          t === 1))
      )
        throw ((n = ds), zr(e, 0), rr(e, r), Rt(e, Ne()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Or(e, Ct, $n);
          break;
        case 3:
          if (
            (rr(e, r), (r & 130023424) === r && ((t = ip + 500 - Ne()), 10 < t))
          ) {
            if (Ya(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              vt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = vf(Or.bind(null, e, Ct, $n), t);
            break;
          }
          Or(e, Ct, $n);
          break;
        case 4:
          if ((rr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - ln(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Ne() - r),
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
                : 1960 * nC(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = vf(Or.bind(null, e, Ct, $n), r);
            break;
          }
          Or(e, Ct, $n);
          break;
        case 5:
          Or(e, Ct, $n);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return Rt(e, Ne()), e.callbackNode === n ? jv.bind(null, e) : null;
}
function Df(e, t) {
  var n = Fi;
  return (
    e.current.memoizedState.isDehydrated && (zr(e, t).flags |= 256),
    (e = dl(e, t)),
    e !== 2 && ((t = Ct), (Ct = n), t !== null && Vf(t)),
    e
  );
}
function Vf(e) {
  Ct === null ? (Ct = e) : Ct.push.apply(Ct, e);
}
function rC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!dn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rr(e, t) {
  for (
    t &= ~op,
      t &= ~Wl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ln(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function wm(e) {
  if (q & 6) throw Error(A(327));
  No();
  var t = Ya(e, 0);
  if (!(t & 1)) return Rt(e, Ne()), null;
  var n = dl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = cf(e);
    r !== 0 && ((t = r), (n = Df(e, r)));
  }
  if (n === 1) throw ((n = ds), zr(e, 0), rr(e, t), Rt(e, Ne()), n);
  if (n === 6) throw Error(A(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Or(e, Ct, $n),
    Rt(e, Ne()),
    null
  );
}
function sp(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    (q = n), q === 0 && ((Go = Ne() + 500), Bl && Er());
  }
}
function Zr(e) {
  sr !== null && sr.tag === 0 && !(q & 6) && No();
  var t = q;
  q |= 1;
  var n = Zt.transition,
    r = ie;
  try {
    if (((Zt.transition = null), (ie = 1), e)) return e();
  } finally {
    (ie = r), (Zt.transition = n), (q = t), !(q & 6) && Er();
  }
}
function ap() {
  (Mt = Po.current), ye(Po);
}
function zr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), LT(n)), ze !== null))
    for (n = ze.return; n !== null; ) {
      var r = n;
      switch ((Bd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ja();
          break;
        case 3:
          Ho(), ye(Et), ye(pt), Qd();
          break;
        case 5:
          Xd(r);
          break;
        case 4:
          Ho();
          break;
        case 13:
          ye(Ee);
          break;
        case 19:
          ye(Ee);
          break;
        case 10:
          Wd(r.type._context);
          break;
        case 22:
        case 23:
          ap();
      }
      n = n.return;
    }
  if (
    ((et = e),
    (ze = e = mr(e.current, null)),
    (it = Mt = t),
    (Ye = 0),
    (ds = null),
    (op = Wl = Qr = 0),
    (Ct = Fi = null),
    Nr !== null)
  ) {
    for (t = 0; t < Nr.length; t++)
      if (((n = Nr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Nr = null;
  }
  return e;
}
function Dv(e, t) {
  do {
    var n = ze;
    try {
      if ((Hd(), (ka.current = ll), al)) {
        for (var r = Re.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        al = !1;
      }
      if (
        ((Xr = 0),
        (qe = Ke = Re = null),
        (Di = !1),
        (us = 0),
        (rp.current = null),
        n === null || n.return === null)
      ) {
        (Ye = 1), (ds = t), (ze = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = it),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = lm(s);
          if (h !== null) {
            (h.flags &= -257),
              um(h, s, a, i, t),
              h.mode & 1 && am(i, u, t),
              (t = h),
              (l = u);
            var m = t.updateQueue;
            if (m === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              am(i, u, t), lp();
              break e;
            }
            l = Error(A(426));
          }
        } else if (ke && a.mode & 1) {
          var T = lm(s);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              um(T, s, a, i, t),
              zd(Wo(l, a));
            break e;
          }
        }
        (i = l = Wo(l, a)),
          Ye !== 4 && (Ye = 2),
          Fi === null ? (Fi = [i]) : Fi.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var v = wv(i, l, t);
              em(i, v);
              break e;
            case 1:
              a = l;
              var p = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (pr === null || !pr.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = Tv(i, a, t);
                em(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Bv(n);
    } catch (C) {
      (t = C), ze === n && n !== null && (ze = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Vv() {
  var e = ul.current;
  return (ul.current = ll), e === null ? ll : e;
}
function lp() {
  (Ye === 0 || Ye === 3 || Ye === 2) && (Ye = 4),
    et === null || (!(Qr & 268435455) && !(Wl & 268435455)) || rr(et, it);
}
function dl(e, t) {
  var n = q;
  q |= 2;
  var r = Vv();
  (et !== e || it !== t) && (($n = null), zr(e, t));
  do
    try {
      oC();
      break;
    } catch (o) {
      Dv(e, o);
    }
  while (!0);
  if ((Hd(), (q = n), (ul.current = r), ze !== null)) throw Error(A(261));
  return (et = null), (it = 0), Ye;
}
function oC() {
  for (; ze !== null; ) Fv(ze);
}
function iC() {
  for (; ze !== null && !_w(); ) Fv(ze);
}
function Fv(e) {
  var t = Uv(e.alternate, e, Mt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Bv(e) : (ze = t),
    (rp.current = null);
}
function Bv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = qT(n, t)), n !== null)) {
        (n.flags &= 32767), (ze = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ye = 6), (ze = null);
        return;
      }
    } else if (((n = ZT(n, t, Mt)), n !== null)) {
      ze = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ze = t;
      return;
    }
    ze = t = e;
  } while (t !== null);
  Ye === 0 && (Ye = 5);
}
function Or(e, t, n) {
  var r = ie,
    o = Zt.transition;
  try {
    (Zt.transition = null), (ie = 1), sC(e, t, n, r);
  } finally {
    (Zt.transition = o), (ie = r);
  }
  return null;
}
function sC(e, t, n, r) {
  do No();
  while (sr !== null);
  if (q & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(A(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Fw(e, i),
    e === et && ((ze = et = null), (it = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      sa ||
      ((sa = !0),
      Hv(Ka, function () {
        return No(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Zt.transition), (Zt.transition = null);
    var s = ie;
    ie = 1;
    var a = q;
    (q |= 4),
      (rp.current = null),
      eC(e, n),
      Iv(n, e),
      ET(gf),
      (Xa = !!mf),
      (gf = mf = null),
      (e.current = n),
      tC(n),
      $w(),
      (q = a),
      (ie = s),
      (Zt.transition = i);
  } else e.current = n;
  if (
    (sa && ((sa = !1), (sr = e), (fl = o)),
    (i = e.pendingLanes),
    i === 0 && (pr = null),
    Mw(n.stateNode),
    Rt(e, Ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (cl) throw ((cl = !1), (e = Nf), (Nf = null), e);
  return (
    fl & 1 && e.tag !== 0 && No(),
    (i = e.pendingLanes),
    i & 1 ? (e === jf ? Bi++ : ((Bi = 0), (jf = e))) : (Bi = 0),
    Er(),
    null
  );
}
function No() {
  if (sr !== null) {
    var e = xy(fl),
      t = Zt.transition,
      n = ie;
    try {
      if (((Zt.transition = null), (ie = 16 > e ? 16 : e), sr === null))
        var r = !1;
      else {
        if (((e = sr), (sr = null), (fl = 0), q & 6)) throw Error(A(331));
        var o = q;
        for (q |= 4, M = e.current; M !== null; ) {
          var i = M,
            s = i.child;
          if (M.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vi(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (M = f);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var d = c.sibling,
                        h = c.return;
                      if ((Ov(c), c === u)) {
                        M = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = h), (M = d);
                        break;
                      }
                      M = h;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var g = m.child;
                if (g !== null) {
                  m.child = null;
                  do {
                    var T = g.sibling;
                    (g.sibling = null), (g = T);
                  } while (g !== null);
                }
              }
              M = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (M = s);
          else
            e: for (; M !== null; ) {
              if (((i = M), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vi(9, i, i.return);
                }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (M = v);
                break e;
              }
              M = i.return;
            }
        }
        var p = e.current;
        for (M = p; M !== null; ) {
          s = M;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (M = y);
          else
            e: for (s = p; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hl(9, a);
                  }
                } catch (C) {
                  Le(a, a.return, C);
                }
              if (a === s) {
                M = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (M = S);
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((q = o), Er(), Cn && typeof Cn.onPostCommitFiberRoot == "function")
        )
          try {
            Cn.onPostCommitFiberRoot(Nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ie = n), (Zt.transition = t);
    }
  }
  return !1;
}
function Tm(e, t, n) {
  (t = Wo(n, t)),
    (t = wv(e, t, 1)),
    (e = dr(e, t, 1)),
    (t = vt()),
    e !== null && (Es(e, 1, t), Rt(e, t));
}
function Le(e, t, n) {
  if (e.tag === 3) Tm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Tm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (pr === null || !pr.has(r)))
        ) {
          (e = Wo(n, e)),
            (e = Tv(t, e, 1)),
            (t = dr(t, e, 1)),
            (e = vt()),
            t !== null && (Es(t, 1, e), Rt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function aC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = vt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    et === e &&
      (it & n) === n &&
      (Ye === 4 || (Ye === 3 && (it & 130023424) === it && 500 > Ne() - ip)
        ? zr(e, 0)
        : (op |= n)),
    Rt(e, t);
}
function zv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Qs), (Qs <<= 1), !(Qs & 130023424) && (Qs = 4194304))
      : (t = 1));
  var n = vt();
  (e = Un(e, t)), e !== null && (Es(e, t, n), Rt(e, n));
}
function lC(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), zv(e, n);
}
function uC(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), zv(e, n);
}
var Uv;
Uv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Et.current) kt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (kt = !1), QT(e, t, n);
      kt = !!(e.flags & 131072);
    }
  else (kt = !1), ke && t.flags & 1048576 && Gy(t, nl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ea(e, t), (e = t.pendingProps);
      var o = Bo(t, pt.current);
      Io(t, n), (o = qd(null, t, r, e, o, n));
      var i = Jd();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            bt(r) ? ((i = !0), el(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Kd(t),
            (o.updater = zl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Pf(t, r, e, n),
            (t = Rf(null, t, r, !0, i, n)))
          : ((t.tag = 0), ke && i && Fd(t), yt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ea(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = fC(r)),
          (e = nn(r, e)),
          o)
        ) {
          case 0:
            t = bf(null, t, r, e, n);
            break e;
          case 1:
            t = dm(null, t, r, e, n);
            break e;
          case 11:
            t = cm(null, t, r, e, n);
            break e;
          case 14:
            t = fm(null, t, r, nn(r.type, e), n);
            break e;
        }
        throw Error(A(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nn(r, o)),
        bf(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nn(r, o)),
        dm(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Ev(t), e === null)) throw Error(A(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Qy(e, t),
          il(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Wo(Error(A(423)), t)), (t = pm(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Wo(Error(A(424)), t)), (t = pm(e, t, r, n, o));
            break e;
          } else
            for (
              Nt = fr(t.stateNode.containerInfo.firstChild),
                jt = t,
                ke = !0,
                on = null,
                n = ev(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((zo(), r === o)) {
            t = Hn(e, t, n);
            break e;
          }
          yt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        tv(t),
        e === null && Tf(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        yf(r, o) ? (s = null) : i !== null && yf(r, i) && (t.flags |= 32),
        Pv(e, t),
        yt(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Tf(t), null;
    case 13:
      return bv(e, t, n);
    case 4:
      return (
        Yd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Uo(t, null, r, n)) : yt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nn(r, o)),
        cm(e, t, r, o, n)
      );
    case 7:
      return yt(e, t, t.pendingProps, n), t.child;
    case 8:
      return yt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return yt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ce(rl, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (dn(i.value, s)) {
            if (i.children === o.children && !Et.current) {
              t = Hn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Dn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Cf(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(A(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Cf(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        yt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Io(t, n),
        (o = qt(o)),
        (r = r(o)),
        (t.flags |= 1),
        yt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = nn(r, t.pendingProps)),
        (o = nn(r.type, o)),
        fm(e, t, r, o, n)
      );
    case 15:
      return Cv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nn(r, o)),
        Ea(e, t),
        (t.tag = 1),
        bt(r) ? ((e = !0), el(t)) : (e = !1),
        Io(t, n),
        qy(t, r, o),
        Pf(t, r, o, n),
        Rf(null, t, r, !0, e, n)
      );
    case 19:
      return Rv(e, t, n);
    case 22:
      return kv(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function Hv(e, t) {
  return gy(e, t);
}
function cC(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
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
function Qt(e, t, n, r) {
  return new cC(e, t, n, r);
}
function up(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function fC(e) {
  if (typeof e == "function") return up(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Rd)) return 11;
    if (e === Ad) return 14;
  }
  return 2;
}
function mr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Qt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Aa(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) up(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case mo:
        return Ur(n.children, o, i, t);
      case bd:
        (s = 8), (o |= 8);
        break;
      case Yc:
        return (
          (e = Qt(12, n, t, o | 2)), (e.elementType = Yc), (e.lanes = i), e
        );
      case Xc:
        return (e = Qt(13, n, t, o)), (e.elementType = Xc), (e.lanes = i), e;
      case Qc:
        return (e = Qt(19, n, t, o)), (e.elementType = Qc), (e.lanes = i), e;
      case Jg:
        return Gl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Zg:
              s = 10;
              break e;
            case qg:
              s = 9;
              break e;
            case Rd:
              s = 11;
              break e;
            case Ad:
              s = 14;
              break e;
            case Jn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Qt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ur(e, t, n, r) {
  return (e = Qt(7, e, r, t)), (e.lanes = n), e;
}
function Gl(e, t, n, r) {
  return (
    (e = Qt(22, e, r, t)),
    (e.elementType = Jg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function yc(e, t, n) {
  return (e = Qt(6, e, null, t)), (e.lanes = n), e;
}
function vc(e, t, n) {
  return (
    (t = Qt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function dC(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = qu(0)),
    (this.expirationTimes = qu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = qu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function cp(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new dC(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Qt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Kd(i),
    e
  );
}
function pC(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ho,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Wv(e) {
  if (!e) return wr;
  e = e._reactInternals;
  e: {
    if (eo(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (bt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (bt(n)) return Hy(e, n, t);
  }
  return t;
}
function Gv(e, t, n, r, o, i, s, a, l) {
  return (
    (e = cp(n, r, !0, e, o, i, s, a, l)),
    (e.context = Wv(null)),
    (n = e.current),
    (r = vt()),
    (o = hr(n)),
    (i = Dn(r, o)),
    (i.callback = t ?? null),
    dr(n, i, o),
    (e.current.lanes = o),
    Es(e, o, r),
    Rt(e, r),
    e
  );
}
function Kl(e, t, n, r) {
  var o = t.current,
    i = vt(),
    s = hr(o);
  return (
    (n = Wv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Dn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dr(o, t, s)),
    e !== null && (un(e, o, s, i), Ca(e, o, s)),
    s
  );
}
function pl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fp(e, t) {
  Cm(e, t), (e = e.alternate) && Cm(e, t);
}
function hC() {
  return null;
}
var Kv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function dp(e) {
  this._internalRoot = e;
}
Yl.prototype.render = dp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  Kl(e, t, null, null);
};
Yl.prototype.unmount = dp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zr(function () {
      Kl(null, e, null, null);
    }),
      (t[zn] = null);
  }
};
function Yl(e) {
  this._internalRoot = e;
}
Yl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Cy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nr.length && t !== 0 && t < nr[n].priority; n++);
    nr.splice(n, 0, e), n === 0 && Py(e);
  }
};
function pp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Xl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function km() {}
function mC(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = pl(s);
        i.call(u);
      };
    }
    var s = Gv(t, r, e, 0, null, !1, !1, "", km);
    return (
      (e._reactRootContainer = s),
      (e[zn] = s.current),
      os(e.nodeType === 8 ? e.parentNode : e),
      Zr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = pl(l);
      a.call(u);
    };
  }
  var l = cp(e, 0, !1, null, null, !1, !1, "", km);
  return (
    (e._reactRootContainer = l),
    (e[zn] = l.current),
    os(e.nodeType === 8 ? e.parentNode : e),
    Zr(function () {
      Kl(t, l, n, r);
    }),
    l
  );
}
function Ql(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = pl(s);
        a.call(l);
      };
    }
    Kl(t, s, e, o);
  } else s = mC(n, t, e, o, r);
  return pl(s);
}
wy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ai(t.pendingLanes);
        n !== 0 &&
          (Od(t, n | 1), Rt(t, Ne()), !(q & 6) && ((Go = Ne() + 500), Er()));
      }
      break;
    case 13:
      Zr(function () {
        var r = Un(e, 1);
        if (r !== null) {
          var o = vt();
          un(r, e, 1, o);
        }
      }),
        fp(e, 1);
  }
};
Ld = function (e) {
  if (e.tag === 13) {
    var t = Un(e, 134217728);
    if (t !== null) {
      var n = vt();
      un(t, e, 134217728, n);
    }
    fp(e, 134217728);
  }
};
Ty = function (e) {
  if (e.tag === 13) {
    var t = hr(e),
      n = Un(e, t);
    if (n !== null) {
      var r = vt();
      un(n, e, t, r);
    }
    fp(e, t);
  }
};
Cy = function () {
  return ie;
};
ky = function (e, t) {
  var n = ie;
  try {
    return (ie = e), t();
  } finally {
    ie = n;
  }
};
af = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Jc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Fl(r);
            if (!o) throw Error(A(90));
            ty(r), Jc(r, o);
          }
        }
      }
      break;
    case "textarea":
      ry(e, n);
      break;
    case "select":
      (t = n.value), t != null && $o(e, !!n.multiple, t, !1);
  }
};
cy = sp;
fy = Zr;
var gC = { usingClientEntryPoint: !1, Events: [Rs, So, Fl, ly, uy, sp] },
  vi = {
    findFiberByHostInstance: Ir,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  yC = {
    bundleType: vi.bundleType,
    version: vi.version,
    rendererPackageName: vi.rendererPackageName,
    rendererConfig: vi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Kn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = hy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vi.findFiberByHostInstance || hC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var aa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!aa.isDisabled && aa.supportsFiber)
    try {
      (Nl = aa.inject(yC)), (Cn = aa);
    } catch {}
}
Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gC;
Bt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pp(t)) throw Error(A(200));
  return pC(e, t, null, n);
};
Bt.createRoot = function (e, t) {
  if (!pp(e)) throw Error(A(299));
  var n = !1,
    r = "",
    o = Kv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = cp(e, 1, !1, null, null, n, !1, r, o)),
    (e[zn] = t.current),
    os(e.nodeType === 8 ? e.parentNode : e),
    new dp(t)
  );
};
Bt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return (e = hy(t)), (e = e === null ? null : e.stateNode), e;
};
Bt.flushSync = function (e) {
  return Zr(e);
};
Bt.hydrate = function (e, t, n) {
  if (!Xl(t)) throw Error(A(200));
  return Ql(null, e, t, !0, n);
};
Bt.hydrateRoot = function (e, t, n) {
  if (!pp(e)) throw Error(A(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Kv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Gv(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[zn] = t.current),
    os(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Yl(t);
};
Bt.render = function (e, t, n) {
  if (!Xl(t)) throw Error(A(200));
  return Ql(null, e, t, !1, n);
};
Bt.unmountComponentAtNode = function (e) {
  if (!Xl(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (Zr(function () {
        Ql(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[zn] = null);
        });
      }),
      !0)
    : !1;
};
Bt.unstable_batchedUpdates = sp;
Bt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Xl(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Ql(e, t, n, !1, r);
};
Bt.version = "18.2.0-next-9e3b772b8-20220608";
function Yv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yv);
    } catch (e) {
      console.error(e);
    }
}
Yv(), (Gg.exports = Bt);
var Xv = Gg.exports,
  Pm = Xv;
(Gc.createRoot = Pm.createRoot), (Gc.hydrateRoot = Pm.hydrateRoot);
/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ps() {
  return (
    (ps = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ps.apply(this, arguments)
  );
}
var ar;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ar || (ar = {}));
const Em = "popstate";
function vC(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return Ff(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : hl(o);
  }
  return xC(t, n, null, e);
}
function He(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function hp(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function SC() {
  return Math.random().toString(36).substr(2, 8);
}
function bm(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ff(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ps(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ii(t) : t,
      { state: n, key: (t && t.key) || r || SC() }
    )
  );
}
function hl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ii(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function xC(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = ar.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(ps({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = ar.Pop;
    let T = c(),
      v = T == null ? null : T - u;
    (u = T), l && l({ action: a, location: g.location, delta: v });
  }
  function d(T, v) {
    a = ar.Push;
    let p = Ff(g.location, T, v);
    n && n(p, T), (u = c() + 1);
    let y = bm(p, u),
      S = g.createHref(p);
    try {
      s.pushState(y, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(S);
    }
    i && l && l({ action: a, location: g.location, delta: 1 });
  }
  function h(T, v) {
    a = ar.Replace;
    let p = Ff(g.location, T, v);
    n && n(p, T), (u = c());
    let y = bm(p, u),
      S = g.createHref(p);
    s.replaceState(y, "", S),
      i && l && l({ action: a, location: g.location, delta: 0 });
  }
  function m(T) {
    let v = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof T == "string" ? T : hl(T);
    return (
      He(
        v,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, v)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(T) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Em, f),
        (l = T),
        () => {
          o.removeEventListener(Em, f), (l = null);
        }
      );
    },
    createHref(T) {
      return t(o, T);
    },
    createURL: m,
    encodeLocation(T) {
      let v = m(T);
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: d,
    replace: h,
    go(T) {
      return s.go(T);
    },
  };
  return g;
}
var Rm;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Rm || (Rm = {}));
function wC(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? ii(t) : t,
    o = mp(r.pathname || "/", n);
  if (o == null) return null;
  let i = Qv(e);
  TC(i);
  let s = null;
  for (let a = 0; s == null && a < i.length; ++a) s = $C(i[a], MC(o));
  return s;
}
function Qv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (He(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = gr([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (He(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Qv(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: AC(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of Zv(i.path)) o(i, s, l);
    }),
    t
  );
}
function Zv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = Zv(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function TC(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : _C(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const CC = /^:\w+$/,
  kC = 3,
  PC = 2,
  EC = 1,
  bC = 10,
  RC = -2,
  Am = (e) => e === "*";
function AC(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Am) && (r += RC),
    t && (r += PC),
    n
      .filter((o) => !Am(o))
      .reduce((o, i) => o + (CC.test(i) ? kC : i === "" ? EC : bC), r)
  );
}
function _C(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function $C(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let s = 0; s < n.length; ++s) {
    let a = n[s],
      l = s === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = OC(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = a.route;
    i.push({
      params: r,
      pathname: gr([o, c.pathname]),
      pathnameBase: VC(gr([o, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (o = gr([o, c.pathnameBase]));
  }
  return i;
}
function OC(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = LC(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: h } = c;
      if (d === "*") {
        let g = a[f] || "";
        s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const m = a[f];
      return h && !m ? (u[d] = void 0) : (u[d] = IC(m || "", d)), u;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function LC(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    hp(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function MC(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      hp(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function IC(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      hp(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function mp(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function NC(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? ii(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : jC(n, t)) : t,
    search: FC(r),
    hash: BC(o),
  };
}
function jC(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Sc(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function DC(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function qv(e) {
  return DC(e).map((t, n) =>
    n === e.length - 1 ? t.pathname : t.pathnameBase
  );
}
function Jv(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = ii(e))
    : ((o = ps({}, e)),
      He(
        !o.pathname || !o.pathname.includes("?"),
        Sc("?", "pathname", "search", o)
      ),
      He(
        !o.pathname || !o.pathname.includes("#"),
        Sc("#", "pathname", "hash", o)
      ),
      He(!o.search || !o.search.includes("#"), Sc("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    a;
  if (s == null) a = n;
  else if (r) {
    let f = t[t.length - 1].replace(/^\//, "").split("/");
    if (s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), f.pop();
      o.pathname = d.join("/");
    }
    a = "/" + f.join("/");
  } else {
    let f = t.length - 1;
    if (s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      o.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = NC(o, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (i || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const gr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  VC = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  FC = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  BC = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function zC(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const e1 = ["post", "put", "patch", "delete"];
new Set(e1);
const UC = ["get", ...e1];
new Set(UC);
/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ml() {
  return (
    (ml = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ml.apply(this, arguments)
  );
}
const gp = x.createContext(null),
  HC = x.createContext(null),
  si = x.createContext(null),
  Zl = x.createContext(null),
  to = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  t1 = x.createContext(null);
function WC(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  _s() || He(!1);
  let { basename: r, navigator: o } = x.useContext(si),
    { hash: i, pathname: s, search: a } = r1(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : gr([r, s])),
    o.createHref({ pathname: l, search: a, hash: i })
  );
}
function _s() {
  return x.useContext(Zl) != null;
}
function ql() {
  return _s() || He(!1), x.useContext(Zl).location;
}
function n1(e) {
  x.useContext(si).static || x.useLayoutEffect(e);
}
function GC() {
  let { isDataRoute: e } = x.useContext(to);
  return e ? ik() : KC();
}
function KC() {
  _s() || He(!1);
  let e = x.useContext(gp),
    { basename: t, navigator: n } = x.useContext(si),
    { matches: r } = x.useContext(to),
    { pathname: o } = ql(),
    i = JSON.stringify(qv(r)),
    s = x.useRef(!1);
  return (
    n1(() => {
      s.current = !0;
    }),
    x.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !s.current)) return;
        if (typeof l == "number") {
          n.go(l);
          return;
        }
        let c = Jv(l, JSON.parse(i), o, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : gr([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, i, o, e]
    )
  );
}
function r1(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = x.useContext(to),
    { pathname: o } = ql(),
    i = JSON.stringify(qv(r));
  return x.useMemo(() => Jv(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function YC(e, t) {
  return XC(e, t);
}
function XC(e, t, n) {
  _s() || He(!1);
  let { navigator: r } = x.useContext(si),
    { matches: o } = x.useContext(to),
    i = o[o.length - 1],
    s = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let l = ql(),
    u;
  if (t) {
    var c;
    let g = typeof t == "string" ? ii(t) : t;
    a === "/" || ((c = g.pathname) != null && c.startsWith(a)) || He(!1),
      (u = g);
  } else u = l;
  let f = u.pathname || "/",
    d = a === "/" ? f : f.slice(a.length) || "/",
    h = wC(e, { pathname: d }),
    m = ek(
      h &&
        h.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, s, g.params),
            pathname: gr([
              a,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? a
                : gr([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      o,
      n
    );
  return t && m
    ? x.createElement(
        Zl.Provider,
        {
          value: {
            location: ml(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: ar.Pop,
          },
        },
        m
      )
    : m;
}
function QC() {
  let e = ok(),
    t = zC(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: o }, n) : null,
    i
  );
}
const ZC = x.createElement(QC, null);
class qC extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? x.createElement(
          to.Provider,
          { value: this.props.routeContext },
          x.createElement(t1.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function JC(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.useContext(gp);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(to.Provider, { value: t }, r)
  );
}
function ek(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    s = (r = n) == null ? void 0 : r.errors;
  if (s != null) {
    let a = i.findIndex(
      (l) => l.route.id && (s == null ? void 0 : s[l.route.id])
    );
    a >= 0 || He(!1), (i = i.slice(0, Math.min(i.length, a + 1)));
  }
  return i.reduceRight((a, l, u) => {
    let c = l.route.id ? (s == null ? void 0 : s[l.route.id]) : null,
      f = null;
    n && (f = l.route.errorElement || ZC);
    let d = t.concat(i.slice(0, u + 1)),
      h = () => {
        let m;
        return (
          c
            ? (m = f)
            : l.route.Component
            ? (m = x.createElement(l.route.Component, null))
            : l.route.element
            ? (m = l.route.element)
            : (m = a),
          x.createElement(JC, {
            match: l,
            routeContext: { outlet: a, matches: d, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
      ? x.createElement(qC, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: c,
          children: h(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var o1 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(o1 || {}),
  gl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(gl || {});
function tk(e) {
  let t = x.useContext(gp);
  return t || He(!1), t;
}
function nk(e) {
  let t = x.useContext(HC);
  return t || He(!1), t;
}
function rk(e) {
  let t = x.useContext(to);
  return t || He(!1), t;
}
function i1(e) {
  let t = rk(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || He(!1), n.route.id;
}
function ok() {
  var e;
  let t = x.useContext(t1),
    n = nk(gl.UseRouteError),
    r = i1(gl.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function ik() {
  let { router: e } = tk(o1.UseNavigateStable),
    t = i1(gl.UseNavigateStable),
    n = x.useRef(!1);
  return (
    n1(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, ml({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Bf(e) {
  He(!1);
}
function sk(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = ar.Pop,
    navigator: i,
    static: s = !1,
  } = e;
  _s() && He(!1);
  let a = t.replace(/^\/*/, "/"),
    l = x.useMemo(() => ({ basename: a, navigator: i, static: s }), [a, i, s]);
  typeof r == "string" && (r = ii(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: f = "",
      state: d = null,
      key: h = "default",
    } = r,
    m = x.useMemo(() => {
      let g = mp(u, a);
      return g == null
        ? null
        : {
            location: { pathname: g, search: c, hash: f, state: d, key: h },
            navigationType: o,
          };
    }, [a, u, c, f, d, h, o]);
  return m == null
    ? null
    : x.createElement(
        si.Provider,
        { value: l },
        x.createElement(Zl.Provider, { children: n, value: m })
      );
}
function ak(e) {
  let { children: t, location: n } = e;
  return YC(zf(t), n);
}
new Promise(() => {});
function zf(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, o) => {
      if (!x.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === x.Fragment) {
        n.push.apply(n, zf(r.props.children, i));
        return;
      }
      r.type !== Bf && He(!1), !r.props.index || !r.props.children || He(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = zf(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Uf() {
  return (
    (Uf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Uf.apply(this, arguments)
  );
}
function lk(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function uk(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ck(e, t) {
  return e.button === 0 && (!t || t === "_self") && !uk(e);
}
const fk = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  dk = "startTransition",
  _m = Wc[dk];
function pk(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = x.useRef();
  i.current == null && (i.current = vC({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = x.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = x.useCallback(
      (f) => {
        u && _m ? _m(() => l(f)) : l(f);
      },
      [l, u]
    );
  return (
    x.useLayoutEffect(() => s.listen(c), [s, c]),
    x.createElement(sk, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
    })
  );
}
const hk =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  mk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  s1 = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = t,
      d = lk(t, fk),
      { basename: h } = x.useContext(si),
      m,
      g = !1;
    if (typeof u == "string" && mk.test(u) && ((m = u), hk))
      try {
        let y = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          C = mp(S.pathname, h);
        S.origin === y.origin && C != null
          ? (u = C + S.search + S.hash)
          : (g = !0);
      } catch {}
    let T = WC(u, { relative: o }),
      v = gk(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: o,
        unstable_viewTransition: f,
      });
    function p(y) {
      r && r(y), y.defaultPrevented || v(y);
    }
    return x.createElement(
      "a",
      Uf({}, d, { href: m || T, onClick: g || i ? r : p, ref: n, target: l })
    );
  });
var $m;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})($m || ($m = {}));
var Om;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Om || (Om = {}));
function gk(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = GC(),
    u = ql(),
    c = r1(e, { relative: s });
  return x.useCallback(
    (f) => {
      if (ck(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : hl(u) === hl(c);
        l(e, {
          replace: d,
          state: o,
          preventScrollReset: i,
          relative: s,
          unstable_viewTransition: a,
        });
      }
    },
    [u, l, c, r, o, n, e, i, s, a]
  );
}
const yk = "_tasks_16rya_1",
  vk = "_container_16rya_13",
  Sk = "_balls_16rya_39",
  xk = "_overlay_16rya_69",
  wk = "_ball1_16rya_87",
  Tk = "_ball2_16rya_99",
  Ck = "_ball3_16rya_113",
  Ar = {
    tasks: yk,
    container: vk,
    balls: Sk,
    overlay: xk,
    ball1: wk,
    ball2: Tk,
    ball3: Ck,
  },
  a1 = x.createContext();
function kk(e) {
  const [t, n] = x.useState([
    { id: 0, task: "Clean Your Room" },
    { id: 1, task: "Study" },
    { id: 2, task: "Code" },
  ]);
  function r(s) {
    const a = { id: t[t.length - 1].id + 1, task: s };
    console.log(a), n([...t, a]);
  }
  function o(s) {
    const a = t.find((l) => l.id === s);
    console.log(a);
  }
  const i = { tasks: t, addTask: r, removeTask: o };
  return P.jsx(a1.Provider, { value: i, children: e.children });
}
const Pk = "_taskItem_1cxr9_1",
  Ek = "_item_1cxr9_9",
  bk = "_action_1cxr9_39",
  Rk = "_btn_1cxr9_57",
  Si = { taskItem: Pk, item: Ek, action: bk, btn: Rk };
var l1 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Lm = ge.createContext && ge.createContext(l1),
  yr = function () {
    return (
      (yr =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          }
          return e;
        }),
      yr.apply(this, arguments)
    );
  },
  Ak = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
function u1(e) {
  return (
    e &&
    e.map(function (t, n) {
      return ge.createElement(t.tag, yr({ key: n }, t.attr), u1(t.child));
    })
  );
}
function $t(e) {
  return function (t) {
    return ge.createElement(_k, yr({ attr: yr({}, e.attr) }, t), u1(e.child));
  };
}
function _k(e) {
  var t = function (n) {
    var r = e.attr,
      o = e.size,
      i = e.title,
      s = Ak(e, ["attr", "size", "title"]),
      a = o || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      ge.createElement(
        "svg",
        yr(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: l,
            style: yr(yr({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && ge.createElement("title", null, i),
        e.children
      )
    );
  };
  return Lm !== void 0
    ? ge.createElement(Lm.Consumer, null, function (n) {
        return t(n);
      })
    : t(l1);
}
function $k(e) {
  return $t({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z",
        },
      },
    ],
  })(e);
}
function Ok(e) {
  return $t({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
        },
      },
    ],
  })(e);
}
function Lk(e) {
  return $t({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z",
        },
      },
    ],
  })(e);
}
function Mk(e) {
  return $t({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M7.24264 17.9964H3V13.7538L14.435 2.31877C14.8256 1.92825 15.4587 1.92825 15.8492 2.31877L18.6777 5.1472C19.0682 5.53772 19.0682 6.17089 18.6777 6.56141L7.24264 17.9964ZM3 19.9964H21V21.9964H3V19.9964Z",
        },
      },
    ],
  })(e);
}
function Ik({ item: e }) {
  return P.jsxs("div", {
    className: Si.taskItem,
    children: [
      P.jsx("button", { className: Si.item, children: e.task }),
      P.jsxs("div", {
        className: Si.action,
        children: [
          P.jsx("button", { className: Si.btn, children: P.jsx(Mk, {}) }),
          P.jsx("button", { className: Si.btn, children: P.jsx(Lk, {}) }),
        ],
      }),
    ],
  });
}
const Nk = "_list_1rsf9_1",
  jk = { list: Nk };
function Dk() {
  const { tasks: e } = x.useContext(a1);
  return P.jsx("div", {
    className: jk.list,
    children: e.map((t) => P.jsx(Ik, { item: t }, t.id)),
  });
}
const Vk = "_add_1ncm8_1",
  Fk = { add: Vk };
function Bk() {
  return P.jsx("button", { className: Fk.add, children: P.jsx(Ok, {}) });
}
function zk() {
  return P.jsxs("div", {
    className: Ar.tasks,
    children: [
      P.jsxs("div", {
        className: Ar.container,
        children: [P.jsx(Dk, {}), P.jsx(Bk, {})],
      }),
      P.jsxs("div", {
        className: Ar.balls,
        children: [
          P.jsx("div", { className: Ar.overlay }),
          P.jsx("div", { className: Ar.ball1 }),
          P.jsx("div", { className: Ar.ball2 }),
          P.jsx("div", { className: Ar.ball3 }),
        ],
      }),
    ],
  });
}
const Uk = "_main_vuklk_1",
  Hk = "_study_vuklk_21",
  Wk = "_form_vuklk_39",
  Gk = "_userInput_vuklk_79",
  Kk = "_submit_vuklk_99",
  io = {
    main: Uk,
    study: Hk,
    break: "_break_vuklk_31",
    form: Wk,
    userInput: Gk,
    submit: Kk,
  };
var c1 = { exports: {} },
  Yk = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Xk = Yk,
  Qk = Xk;
function f1() {}
function d1() {}
d1.resetWarningCache = f1;
var Zk = function () {
  function e(r, o, i, s, a, l) {
    if (l !== Qk) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: d1,
    resetWarningCache: f1,
  };
  return (n.PropTypes = n), n;
};
c1.exports = Zk();
var qk = c1.exports;
const xe = ks(qk);
function Jk(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var p1 = x,
  e2 = Jk(p1);
function Mm(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function t2(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var n2 = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function r2(e, t, n) {
  if (typeof e != "function")
    throw new Error("Expected reducePropsToState to be a function.");
  if (typeof t != "function")
    throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (typeof n < "u" && typeof n != "function")
    throw new Error(
      "Expected mapStateOnServer to either be undefined or a function."
    );
  function r(o) {
    return o.displayName || o.name || "Component";
  }
  return function (i) {
    if (typeof i != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var s = [],
      a;
    function l() {
      (a = e(
        s.map(function (c) {
          return c.props;
        })
      )),
        u.canUseDOM ? t(a) : n && (a = n(a));
    }
    var u = (function (c) {
      t2(f, c);
      function f() {
        return c.apply(this, arguments) || this;
      }
      (f.peek = function () {
        return a;
      }),
        (f.rewind = function () {
          if (f.canUseDOM)
            throw new Error(
              "You may only call rewind() on the server. Call peek() to read the current state."
            );
          var m = a;
          return (a = void 0), (s = []), m;
        });
      var d = f.prototype;
      return (
        (d.UNSAFE_componentWillMount = function () {
          s.push(this), l();
        }),
        (d.componentDidUpdate = function () {
          l();
        }),
        (d.componentWillUnmount = function () {
          var m = s.indexOf(this);
          s.splice(m, 1), l();
        }),
        (d.render = function () {
          return e2.createElement(i, this.props);
        }),
        f
      );
    })(p1.PureComponent);
    return (
      Mm(u, "displayName", "SideEffect(" + r(i) + ")"),
      Mm(u, "canUseDOM", n2),
      u
    );
  };
}
var o2 = r2;
const i2 = ks(o2);
var s2 = typeof Element < "u",
  a2 = typeof Map == "function",
  l2 = typeof Set == "function",
  u2 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function _a(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!_a(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (a2 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!_a(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (l2 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (u2 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (s2 && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !_a(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var c2 = function (t, n) {
  try {
    return _a(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const f2 = ks(c2);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Im = Object.getOwnPropertySymbols,
  d2 = Object.prototype.hasOwnProperty,
  p2 = Object.prototype.propertyIsEnumerable;
function h2(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function m2() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (i) {
      return t[i];
    });
    if (r.join("") !== "0123456789") return !1;
    var o = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (i) {
        o[i] = i;
      }),
      Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var g2 = m2()
  ? Object.assign
  : function (e, t) {
      for (var n, r = h2(e), o, i = 1; i < arguments.length; i++) {
        n = Object(arguments[i]);
        for (var s in n) d2.call(n, s) && (r[s] = n[s]);
        if (Im) {
          o = Im(n);
          for (var a = 0; a < o.length; a++)
            p2.call(n, o[a]) && (r[o[a]] = n[o[a]]);
        }
      }
      return r;
    };
const y2 = ks(g2);
var Hr = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes",
  },
  W = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
  };
Object.keys(W).map(function (e) {
  return W[e];
});
var Ce = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target",
  },
  yl = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  hs = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
  },
  v2 = Object.keys(yl).reduce(function (e, t) {
    return (e[yl[t]] = t), e;
  }, {}),
  S2 = [W.NOSCRIPT, W.SCRIPT, W.STYLE],
  sn = "data-react-helmet",
  x2 =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  w2 = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  },
  T2 = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Tt =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  C2 = function (e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  },
  Nm = function (e, t) {
    var n = {};
    for (var r in e)
      t.indexOf(r) >= 0 ||
        (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
    return n;
  },
  k2 = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  },
  Hf = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1
      ? String(t)
      : String(t)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
  },
  P2 = function (t) {
    var n = jo(t, W.TITLE),
      r = jo(t, hs.TITLE_TEMPLATE);
    if (r && n)
      return r.replace(/%s/g, function () {
        return Array.isArray(n) ? n.join("") : n;
      });
    var o = jo(t, hs.DEFAULT_TITLE);
    return n || o || void 0;
  },
  E2 = function (t) {
    return jo(t, hs.ON_CHANGE_CLIENT_STATE) || function () {};
  },
  xc = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[t] < "u";
      })
      .map(function (r) {
        return r[t];
      })
      .reduce(function (r, o) {
        return Tt({}, r, o);
      }, {});
  },
  b2 = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[W.BASE] < "u";
      })
      .map(function (r) {
        return r[W.BASE];
      })
      .reverse()
      .reduce(function (r, o) {
        if (!r.length)
          for (var i = Object.keys(o), s = 0; s < i.length; s++) {
            var a = i[s],
              l = a.toLowerCase();
            if (t.indexOf(l) !== -1 && o[l]) return r.concat(o);
          }
        return r;
      }, []);
  },
  xi = function (t, n, r) {
    var o = {};
    return r
      .filter(function (i) {
        return Array.isArray(i[t])
          ? !0
          : (typeof i[t] < "u" &&
              $2(
                "Helmet: " +
                  t +
                  ' should be of type "Array". Instead found type "' +
                  x2(i[t]) +
                  '"'
              ),
            !1);
      })
      .map(function (i) {
        return i[t];
      })
      .reverse()
      .reduce(function (i, s) {
        var a = {};
        s.filter(function (d) {
          for (var h = void 0, m = Object.keys(d), g = 0; g < m.length; g++) {
            var T = m[g],
              v = T.toLowerCase();
            n.indexOf(v) !== -1 &&
              !(h === Ce.REL && d[h].toLowerCase() === "canonical") &&
              !(v === Ce.REL && d[v].toLowerCase() === "stylesheet") &&
              (h = v),
              n.indexOf(T) !== -1 &&
                (T === Ce.INNER_HTML ||
                  T === Ce.CSS_TEXT ||
                  T === Ce.ITEM_PROP) &&
                (h = T);
          }
          if (!h || !d[h]) return !1;
          var p = d[h].toLowerCase();
          return (
            o[h] || (o[h] = {}),
            a[h] || (a[h] = {}),
            o[h][p] ? !1 : ((a[h][p] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (d) {
            return i.push(d);
          });
        for (var l = Object.keys(a), u = 0; u < l.length; u++) {
          var c = l[u],
            f = y2({}, o[c], a[c]);
          o[c] = f;
        }
        return i;
      }, [])
      .reverse();
  },
  jo = function (t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
      var o = t[r];
      if (o.hasOwnProperty(n)) return o[n];
    }
    return null;
  },
  R2 = function (t) {
    return {
      baseTag: b2([Ce.HREF, Ce.TARGET], t),
      bodyAttributes: xc(Hr.BODY, t),
      defer: jo(t, hs.DEFER),
      encode: jo(t, hs.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: xc(Hr.HTML, t),
      linkTags: xi(W.LINK, [Ce.REL, Ce.HREF], t),
      metaTags: xi(
        W.META,
        [Ce.NAME, Ce.CHARSET, Ce.HTTPEQUIV, Ce.PROPERTY, Ce.ITEM_PROP],
        t
      ),
      noscriptTags: xi(W.NOSCRIPT, [Ce.INNER_HTML], t),
      onChangeClientState: E2(t),
      scriptTags: xi(W.SCRIPT, [Ce.SRC, Ce.INNER_HTML], t),
      styleTags: xi(W.STYLE, [Ce.CSS_TEXT], t),
      title: P2(t),
      titleAttributes: xc(Hr.TITLE, t),
    };
  },
  Wf = (function () {
    var e = Date.now();
    return function (t) {
      var n = Date.now();
      n - e > 16
        ? ((e = n), t(n))
        : setTimeout(function () {
            Wf(t);
          }, 0);
    };
  })(),
  jm = function (t) {
    return clearTimeout(t);
  },
  A2 =
    typeof window < "u"
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        Wf
      : global.requestAnimationFrame || Wf,
  _2 =
    typeof window < "u"
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        jm
      : global.cancelAnimationFrame || jm,
  $2 = function (t) {
    return console && typeof console.warn == "function" && console.warn(t);
  },
  wi = null,
  O2 = function (t) {
    wi && _2(wi),
      t.defer
        ? (wi = A2(function () {
            Dm(t, function () {
              wi = null;
            });
          }))
        : (Dm(t), (wi = null));
  },
  Dm = function (t, n) {
    var r = t.baseTag,
      o = t.bodyAttributes,
      i = t.htmlAttributes,
      s = t.linkTags,
      a = t.metaTags,
      l = t.noscriptTags,
      u = t.onChangeClientState,
      c = t.scriptTags,
      f = t.styleTags,
      d = t.title,
      h = t.titleAttributes;
    Gf(W.BODY, o), Gf(W.HTML, i), L2(d, h);
    var m = {
        baseTag: so(W.BASE, r),
        linkTags: so(W.LINK, s),
        metaTags: so(W.META, a),
        noscriptTags: so(W.NOSCRIPT, l),
        scriptTags: so(W.SCRIPT, c),
        styleTags: so(W.STYLE, f),
      },
      g = {},
      T = {};
    Object.keys(m).forEach(function (v) {
      var p = m[v],
        y = p.newTags,
        S = p.oldTags;
      y.length && (g[v] = y), S.length && (T[v] = m[v].oldTags);
    }),
      n && n(),
      u(t, g, T);
  },
  h1 = function (t) {
    return Array.isArray(t) ? t.join("") : t;
  },
  L2 = function (t, n) {
    typeof t < "u" && document.title !== t && (document.title = h1(t)),
      Gf(W.TITLE, n);
  },
  Gf = function (t, n) {
    var r = document.getElementsByTagName(t)[0];
    if (r) {
      for (
        var o = r.getAttribute(sn),
          i = o ? o.split(",") : [],
          s = [].concat(i),
          a = Object.keys(n),
          l = 0;
        l < a.length;
        l++
      ) {
        var u = a[l],
          c = n[u] || "";
        r.getAttribute(u) !== c && r.setAttribute(u, c),
          i.indexOf(u) === -1 && i.push(u);
        var f = s.indexOf(u);
        f !== -1 && s.splice(f, 1);
      }
      for (var d = s.length - 1; d >= 0; d--) r.removeAttribute(s[d]);
      i.length === s.length
        ? r.removeAttribute(sn)
        : r.getAttribute(sn) !== a.join(",") && r.setAttribute(sn, a.join(","));
    }
  },
  so = function (t, n) {
    var r = document.head || document.querySelector(W.HEAD),
      o = r.querySelectorAll(t + "[" + sn + "]"),
      i = Array.prototype.slice.call(o),
      s = [],
      a = void 0;
    return (
      n &&
        n.length &&
        n.forEach(function (l) {
          var u = document.createElement(t);
          for (var c in l)
            if (l.hasOwnProperty(c))
              if (c === Ce.INNER_HTML) u.innerHTML = l.innerHTML;
              else if (c === Ce.CSS_TEXT)
                u.styleSheet
                  ? (u.styleSheet.cssText = l.cssText)
                  : u.appendChild(document.createTextNode(l.cssText));
              else {
                var f = typeof l[c] > "u" ? "" : l[c];
                u.setAttribute(c, f);
              }
          u.setAttribute(sn, "true"),
            i.some(function (d, h) {
              return (a = h), u.isEqualNode(d);
            })
              ? i.splice(a, 1)
              : s.push(u);
        }),
      i.forEach(function (l) {
        return l.parentNode.removeChild(l);
      }),
      s.forEach(function (l) {
        return r.appendChild(l);
      }),
      { oldTags: i, newTags: s }
    );
  },
  m1 = function (t) {
    return Object.keys(t).reduce(function (n, r) {
      var o = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
      return n ? n + " " + o : o;
    }, "");
  },
  M2 = function (t, n, r, o) {
    var i = m1(r),
      s = h1(n);
    return i
      ? "<" + t + " " + sn + '="true" ' + i + ">" + Hf(s, o) + "</" + t + ">"
      : "<" + t + " " + sn + '="true">' + Hf(s, o) + "</" + t + ">";
  },
  I2 = function (t, n, r) {
    return n.reduce(function (o, i) {
      var s = Object.keys(i)
          .filter(function (u) {
            return !(u === Ce.INNER_HTML || u === Ce.CSS_TEXT);
          })
          .reduce(function (u, c) {
            var f = typeof i[c] > "u" ? c : c + '="' + Hf(i[c], r) + '"';
            return u ? u + " " + f : f;
          }, ""),
        a = i.innerHTML || i.cssText || "",
        l = S2.indexOf(t) === -1;
      return (
        o +
        "<" +
        t +
        " " +
        sn +
        '="true" ' +
        s +
        (l ? "/>" : ">" + a + "</" + t + ">")
      );
    }, "");
  },
  g1 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, o) {
      return (r[yl[o] || o] = t[o]), r;
    }, n);
  },
  N2 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, o) {
      return (r[v2[o] || o] = t[o]), r;
    }, n);
  },
  j2 = function (t, n, r) {
    var o,
      i = ((o = { key: n }), (o[sn] = !0), o),
      s = g1(r, i);
    return [ge.createElement(W.TITLE, s, n)];
  },
  D2 = function (t, n) {
    return n.map(function (r, o) {
      var i,
        s = ((i = { key: o }), (i[sn] = !0), i);
      return (
        Object.keys(r).forEach(function (a) {
          var l = yl[a] || a;
          if (l === Ce.INNER_HTML || l === Ce.CSS_TEXT) {
            var u = r.innerHTML || r.cssText;
            s.dangerouslySetInnerHTML = { __html: u };
          } else s[l] = r[a];
        }),
        ge.createElement(t, s)
      );
    });
  },
  _n = function (t, n, r) {
    switch (t) {
      case W.TITLE:
        return {
          toComponent: function () {
            return j2(t, n.title, n.titleAttributes);
          },
          toString: function () {
            return M2(t, n.title, n.titleAttributes, r);
          },
        };
      case Hr.BODY:
      case Hr.HTML:
        return {
          toComponent: function () {
            return g1(n);
          },
          toString: function () {
            return m1(n);
          },
        };
      default:
        return {
          toComponent: function () {
            return D2(t, n);
          },
          toString: function () {
            return I2(t, n, r);
          },
        };
    }
  },
  y1 = function (t) {
    var n = t.baseTag,
      r = t.bodyAttributes,
      o = t.encode,
      i = t.htmlAttributes,
      s = t.linkTags,
      a = t.metaTags,
      l = t.noscriptTags,
      u = t.scriptTags,
      c = t.styleTags,
      f = t.title,
      d = f === void 0 ? "" : f,
      h = t.titleAttributes;
    return {
      base: _n(W.BASE, n, o),
      bodyAttributes: _n(Hr.BODY, r, o),
      htmlAttributes: _n(Hr.HTML, i, o),
      link: _n(W.LINK, s, o),
      meta: _n(W.META, a, o),
      noscript: _n(W.NOSCRIPT, l, o),
      script: _n(W.SCRIPT, u, o),
      style: _n(W.STYLE, c, o),
      title: _n(W.TITLE, { title: d, titleAttributes: h }, o),
    };
  },
  V2 = function (t) {
    var n, r;
    return (
      (r = n =
        (function (o) {
          C2(i, o);
          function i() {
            return w2(this, i), k2(this, o.apply(this, arguments));
          }
          return (
            (i.prototype.shouldComponentUpdate = function (a) {
              return !f2(this.props, a);
            }),
            (i.prototype.mapNestedChildrenToProps = function (a, l) {
              if (!l) return null;
              switch (a.type) {
                case W.SCRIPT:
                case W.NOSCRIPT:
                  return { innerHTML: l };
                case W.STYLE:
                  return { cssText: l };
              }
              throw new Error(
                "<" +
                  a.type +
                  " /> elements are self-closing and can not contain children. Refer to our API for more information."
              );
            }),
            (i.prototype.flattenArrayTypeChildren = function (a) {
              var l,
                u = a.child,
                c = a.arrayTypeChildren,
                f = a.newChildProps,
                d = a.nestedChildren;
              return Tt(
                {},
                c,
                ((l = {}),
                (l[u.type] = [].concat(c[u.type] || [], [
                  Tt({}, f, this.mapNestedChildrenToProps(u, d)),
                ])),
                l)
              );
            }),
            (i.prototype.mapObjectTypeChildren = function (a) {
              var l,
                u,
                c = a.child,
                f = a.newProps,
                d = a.newChildProps,
                h = a.nestedChildren;
              switch (c.type) {
                case W.TITLE:
                  return Tt(
                    {},
                    f,
                    ((l = {}),
                    (l[c.type] = h),
                    (l.titleAttributes = Tt({}, d)),
                    l)
                  );
                case W.BODY:
                  return Tt({}, f, { bodyAttributes: Tt({}, d) });
                case W.HTML:
                  return Tt({}, f, { htmlAttributes: Tt({}, d) });
              }
              return Tt({}, f, ((u = {}), (u[c.type] = Tt({}, d)), u));
            }),
            (i.prototype.mapArrayTypeChildrenToProps = function (a, l) {
              var u = Tt({}, l);
              return (
                Object.keys(a).forEach(function (c) {
                  var f;
                  u = Tt({}, u, ((f = {}), (f[c] = a[c]), f));
                }),
                u
              );
            }),
            (i.prototype.warnOnInvalidChildren = function (a, l) {
              return !0;
            }),
            (i.prototype.mapChildrenToProps = function (a, l) {
              var u = this,
                c = {};
              return (
                ge.Children.forEach(a, function (f) {
                  if (!(!f || !f.props)) {
                    var d = f.props,
                      h = d.children,
                      m = Nm(d, ["children"]),
                      g = N2(m);
                    switch ((u.warnOnInvalidChildren(f, h), f.type)) {
                      case W.LINK:
                      case W.META:
                      case W.NOSCRIPT:
                      case W.SCRIPT:
                      case W.STYLE:
                        c = u.flattenArrayTypeChildren({
                          child: f,
                          arrayTypeChildren: c,
                          newChildProps: g,
                          nestedChildren: h,
                        });
                        break;
                      default:
                        l = u.mapObjectTypeChildren({
                          child: f,
                          newProps: l,
                          newChildProps: g,
                          nestedChildren: h,
                        });
                        break;
                    }
                  }
                }),
                (l = this.mapArrayTypeChildrenToProps(c, l)),
                l
              );
            }),
            (i.prototype.render = function () {
              var a = this.props,
                l = a.children,
                u = Nm(a, ["children"]),
                c = Tt({}, u);
              return (
                l && (c = this.mapChildrenToProps(l, c)), ge.createElement(t, c)
              );
            }),
            T2(i, null, [
              {
                key: "canUseDOM",
                set: function (a) {
                  t.canUseDOM = a;
                },
              },
            ]),
            i
          );
        })(ge.Component)),
      (n.propTypes = {
        base: xe.object,
        bodyAttributes: xe.object,
        children: xe.oneOfType([xe.arrayOf(xe.node), xe.node]),
        defaultTitle: xe.string,
        defer: xe.bool,
        encodeSpecialCharacters: xe.bool,
        htmlAttributes: xe.object,
        link: xe.arrayOf(xe.object),
        meta: xe.arrayOf(xe.object),
        noscript: xe.arrayOf(xe.object),
        onChangeClientState: xe.func,
        script: xe.arrayOf(xe.object),
        style: xe.arrayOf(xe.object),
        title: xe.string,
        titleAttributes: xe.object,
        titleTemplate: xe.string,
      }),
      (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (n.peek = t.peek),
      (n.rewind = function () {
        var o = t.rewind();
        return (
          o ||
            (o = y1({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: "",
              titleAttributes: {},
            })),
          o
        );
      }),
      r
    );
  },
  F2 = function () {
    return null;
  },
  B2 = i2(R2, O2, y1)(F2),
  Kf = V2(B2);
Kf.renderStatic = Kf.rewind;
const z2 = "_timer_xbmqr_1",
  U2 = "_clock_xbmqr_19",
  H2 = "_mantra_xbmqr_29",
  W2 = "_fadeIn_xbmqr_1",
  wc = { timer: z2, clock: U2, mantra: H2, fadeIn: W2 },
  G2 = "_button_1x1kj_1",
  Tc = {
    button: G2,
    "alpha-1": "_alpha-1_1x1kj_21",
    "alpha-2": "_alpha-2_1x1kj_27",
    "alpha-3": "_alpha-3_1x1kj_33",
  };
function On(e) {
  return P.jsx("button", {
    className: `${Tc.button} ${Tc[`alpha-${e.alpha}`]} ${
      e != null && e.isActive ? Tc.active : ""
    } ${e.className}`,
    onClick: e.onClick,
    disabled: e.disabled,
    title: e.title,
    ref: e == null ? void 0 : e.navRef,
    children: e.children,
  });
}
const K2 = "/assets/alarm-yAxhGpOx.mp3",
  v1 = x.createContext(),
  Xt = [
    { type: "FOCUS", time: 25 * 60, count: 0 },
    { type: "SHORT", time: 5 * 60, count: 0 },
    { type: "LONG", time: 15 * 60, count: 0 },
  ],
  Y2 = {
    timers: Xt,
    customTimers: Xt,
    currentTimer: Xt[0],
    isActive: !1,
    timeRemaining: Xt[0].time,
    autoRunning: !1,
  };
function X2(e, t) {
  switch (t.type) {
    case "RUNNING":
      return { ...e, timeRemaining: e.timeRemaining - 1 };
    case "START":
      return { ...e, isActive: !0 };
    case "STOP":
      return { ...e, isActive: !1, timeRemaining: e.currentTimer.time };
    case "SWITCH":
      return {
        ...e,
        currentTimer: e.timers[t.payload],
        timeRemaining: e.timers[t.payload].time,
      };
    case "CLEAR":
      return {
        ...e,
        currentTimer: Xt[0],
        timeRemaining: Xt[0].time,
        isActive: !1,
      };
    case "CUSTOMIZE":
      return { ...e, timers: t == null ? void 0 : t.payload };
    case "RESET_TO_DEFAULT":
      return {
        ...e,
        timers: Xt,
        currentTimer: Xt[0],
        timeRemaining: Xt[0].time,
      };
    case "AUTO":
      return { ...e, autoRunning: t.payload };
    default:
      throw new Error("Case not found");
  }
}
const Q2 = ({ children: e }) => {
  const [t, n] = x.useReducer(X2, Y2),
    r = x.useCallback(() => n({ type: "START" }), []),
    o = x.useCallback(() => {
      n({ type: "STOP" });
    }, []);
  function i() {
    localStorage.setItem(JSON.stringify(Xt));
  }
  const s = x.useCallback(
      (f) => {
        t.timers[f] !== (t == null ? void 0 : t.currentTimer.type) &&
          n({ type: "SWITCH", payload: f });
      },
      [t.currentTimer, t.timers]
    ),
    a = x.useCallback((f) => {
      n({ type: "CUSTOMIZE", payload: f });
      const d = f.map((h) => ({ ...h, time: h.time }));
      localStorage.setItem("timers", JSON.stringify(d));
    }, []),
    l = x.useCallback(() => {
      n({ type: "RESET_TO_DEFAULT" }),
        localStorage.setItem("timers", JSON.stringify(Xt));
    }, []),
    u = function (f) {
      n({ type: "AUTO", payload: f });
    };
  x.useEffect(() => {
    const f = localStorage.getItem("timers")
      ? JSON.parse(localStorage.getItem("timers"))
      : Xt;
    !localStorage.getItem("timers") &&
      localStorage.setItem("timers", JSON.stringify(f));
  }, []),
    x.useEffect(() => {
      let f = null;
      if (
        (t.isActive && t.timeRemaining > 0
          ? (f = setInterval(() => {
              n({ type: "RUNNING" });
            }, 1e3))
          : (!t.isActive || t.timeRemaining === 0) && clearInterval(f),
        t.timeRemaining === 0)
      ) {
        let d = JSON.parse(localStorage.getItem("timers"));
        const h = d.findIndex((T) => T.type === t.currentTimer.type);
        (d[h].count += 1),
          console.log(d),
          n({ type: "CUSTOMIZE", payload: d }),
          localStorage.setItem("timers", JSON.stringify(d)),
          t.autoRunning || n({ type: "STOP" }),
          new Audio(K2).play();
        const g = d.reduce((T, v) => T + v.count, 1);
        g % 8 === 0
          ? n({ type: "SWITCH", payload: 2 })
          : g % 2 === 0
          ? n({ type: "SWITCH", payload: 1 })
          : n({ type: "SWITCH", payload: 0 });
      }
      return () => clearInterval(f);
    }, [t]);
  const c = {
    ...t,
    startTimer: r,
    stopTimer: o,
    clearCounts: i,
    switchTimerType: s,
    customizeTimers: a,
    resetToDefault: l,
    toggleAutoRun: u,
  };
  return P.jsx(v1.Provider, { value: c, children: e });
};
function Jl() {
  return x.useContext(v1);
}
function Z2() {
  const { timeRemaining: e, isActive: t } = Jl(),
    n = (r) => {
      const o = Math.floor(r / 60),
        i = r % 60;
      return `${o < 10 ? `0${o}` : o}:${i < 10 ? `0${i}` : i}`;
    };
  return (
    x.useEffect(() => {
      const r = () => {
        document.hidden ||
          (document.title = t ? n(e) : "FocusBoost - Increase your focus");
      };
      return (
        document.addEventListener("visibilitychange", r),
        () => {
          document.removeEventListener("visibilitychange", r);
        }
      );
    }, [e, t]),
    P.jsxs("div", {
      className: wc.timer,
      children: [
        P.jsx(Kf, {
          children: P.jsx("title", {
            children: t ? n(e) : "FocusBoost - Increase your focus",
          }),
        }),
        P.jsx(On, { alpha: "3", className: wc.clock, children: n(e) }),
        P.jsx(On, {
          alpha: "3",
          className: wc.mantra,
          children:
            '"Discipline is the bridge between goals and accomplishments".',
        }),
      ],
    })
  );
}
const q2 = "_btn_165xa_1",
  J2 = "_big_165xa_57",
  eP = "_mid_165xa_65",
  Vm = { btn: q2, big: J2, mid: eP };
function Cc(e) {
  return P.jsx("button", {
    type: "button",
    className: `${Vm.btn} ${e == null ? void 0 : e.className} ${
      Vm[`${e.size}`]
    }`,
    onClick: e.onClick,
    children: e.children,
  });
}
const tP = "_footer_10wi0_1",
  nP = { footer: tP };
function Fm(e) {
  return $t({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8.75 5.5h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5Zm0 6h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5Zm0 6h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM4 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
        },
      },
    ],
  })(e);
}
function rP() {
  const { startTimer: e, isActive: t, stopTimer: n } = Jl();
  return P.jsxs("div", {
    className: nP.footer,
    children: [
      P.jsx(Cc, { size: "mid", children: P.jsx(Fm, {}) }),
      P.jsx(Cc, {
        alpha: "1",
        onClick: t ? n : e,
        size: "big",
        children: t ? "Stop" : "Start",
      }),
      P.jsx(s1, {
        to: t ? null : "tasks",
        children: P.jsx(Cc, { size: "mid", children: P.jsx(Fm, {}) }),
      }),
    ],
  });
}
const oP = "_navMenu_4adt6_1",
  iP = "_show_4adt6_23",
  sP = "_navbar_4adt6_31",
  aP = "_actions_4adt6_43",
  lP = "_action_4adt6_43",
  uP = "_username_4adt6_63",
  cP = "_navToggleBtn_4adt6_75",
  fP = "_progress_4adt6_83",
  dP = "_colorful_4adt6_1",
  pP = "_navBtn_4adt6_99",
  hP = "_backBtn_4adt6_141",
  mP = "_navSlider_4adt6_183",
  gP = "_bgImg_4adt6_257",
  yP = "_img_4adt6_279",
  vP = "_images_4adt6_293",
  we = {
    navMenu: oP,
    show: iP,
    navbar: sP,
    actions: aP,
    action: lP,
    username: uP,
    navToggleBtn: cP,
    progress: fP,
    colorful: dP,
    navBtn: pP,
    backBtn: hP,
    navSlider: mP,
    bgImg: gP,
    img: yP,
    images: vP,
  };
function SP(e) {
  return $t({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z",
          fill: "currentColor",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z",
          fill: "currentColor",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z",
          fill: "currentColor",
        },
      },
    ],
  })(e);
}
var Pt = function () {
  return (
    (Pt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    Pt.apply(this, arguments)
  );
};
function vl(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function S1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var xP =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  wP = S1(function (e) {
    return (
      xP.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  me = "-ms-",
  zi = "-moz-",
  te = "-webkit-",
  x1 = "comm",
  eu = "rule",
  yp = "decl",
  TP = "@import",
  w1 = "@keyframes",
  CP = "@layer",
  kP = Math.abs,
  vp = String.fromCharCode,
  Yf = Object.assign;
function PP(e, t) {
  return Je(e, 0) ^ 45
    ? (((((((t << 2) ^ Je(e, 0)) << 2) ^ Je(e, 1)) << 2) ^ Je(e, 2)) << 2) ^
        Je(e, 3)
    : 0;
}
function T1(e) {
  return e.trim();
}
function Ln(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Y(e, t, n) {
  return e.replace(t, n);
}
function $a(e, t) {
  return e.indexOf(t);
}
function Je(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ko(e, t, n) {
  return e.slice(t, n);
}
function vn(e) {
  return e.length;
}
function C1(e) {
  return e.length;
}
function $i(e, t) {
  return t.push(e), e;
}
function EP(e, t) {
  return e.map(t).join("");
}
function Bm(e, t) {
  return e.filter(function (n) {
    return !Ln(n, t);
  });
}
var tu = 1,
  Yo = 1,
  k1 = 0,
  en = 0,
  Fe = 0,
  ai = "";
function nu(e, t, n, r, o, i, s, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: tu,
    column: Yo,
    length: s,
    return: "",
    siblings: a,
  };
}
function Zn(e, t) {
  return Yf(
    nu("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function ao(e) {
  for (; e.root; ) e = Zn(e.root, { children: [e] });
  $i(e, e.siblings);
}
function bP() {
  return Fe;
}
function RP() {
  return (
    (Fe = en > 0 ? Je(ai, --en) : 0), Yo--, Fe === 10 && ((Yo = 1), tu--), Fe
  );
}
function cn() {
  return (
    (Fe = en < k1 ? Je(ai, en++) : 0), Yo++, Fe === 10 && ((Yo = 1), tu++), Fe
  );
}
function Wr() {
  return Je(ai, en);
}
function Oa() {
  return en;
}
function ru(e, t) {
  return Ko(ai, e, t);
}
function Xf(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function AP(e) {
  return (tu = Yo = 1), (k1 = vn((ai = e))), (en = 0), [];
}
function _P(e) {
  return (ai = ""), e;
}
function kc(e) {
  return T1(ru(en - 1, Qf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function $P(e) {
  for (; (Fe = Wr()) && Fe < 33; ) cn();
  return Xf(e) > 2 || Xf(Fe) > 3 ? "" : " ";
}
function OP(e, t) {
  for (
    ;
    --t &&
    cn() &&
    !(Fe < 48 || Fe > 102 || (Fe > 57 && Fe < 65) || (Fe > 70 && Fe < 97));

  );
  return ru(e, Oa() + (t < 6 && Wr() == 32 && cn() == 32));
}
function Qf(e) {
  for (; cn(); )
    switch (Fe) {
      case e:
        return en;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Qf(Fe);
        break;
      case 40:
        e === 41 && Qf(e);
        break;
      case 92:
        cn();
        break;
    }
  return en;
}
function LP(e, t) {
  for (; cn() && e + Fe !== 57; ) if (e + Fe === 84 && Wr() === 47) break;
  return "/*" + ru(t, en - 1) + "*" + vp(e === 47 ? e : cn());
}
function MP(e) {
  for (; !Xf(Wr()); ) cn();
  return ru(e, en);
}
function IP(e) {
  return _P(La("", null, null, null, [""], (e = AP(e)), 0, [0], e));
}
function La(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      f = s,
      d = 0,
      h = 0,
      m = 0,
      g = 1,
      T = 1,
      v = 1,
      p = 0,
      y = "",
      S = o,
      C = i,
      k = r,
      w = y;
    T;

  )
    switch (((m = p), (p = cn()))) {
      case 40:
        if (m != 108 && Je(w, f - 1) == 58) {
          $a((w += Y(kc(p), "&", "&\f")), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += kc(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += $P(m);
        break;
      case 92:
        w += OP(Oa() - 1, 7);
        continue;
      case 47:
        switch (Wr()) {
          case 42:
          case 47:
            $i(NP(LP(cn(), Oa()), t, n, l), l);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * g:
        a[u++] = vn(w) * v;
      case 125 * g:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            T = 0;
          case 59 + c:
            v == -1 && (w = Y(w, /\f/g, "")),
              h > 0 &&
                vn(w) - f &&
                $i(
                  h > 32
                    ? Um(w + ";", r, n, f - 1, l)
                    : Um(Y(w, " ", "") + ";", r, n, f - 2, l),
                  l
                );
            break;
          case 59:
            w += ";";
          default:
            if (
              ($i(
                (k = zm(w, t, n, u, c, o, a, y, (S = []), (C = []), f, i)),
                i
              ),
              p === 123)
            )
              if (c === 0) La(w, t, k, k, S, i, f, a, C);
              else
                switch (d === 99 && Je(w, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    La(
                      e,
                      k,
                      k,
                      r && $i(zm(e, k, k, 0, 0, o, a, y, o, (S = []), f, C), C),
                      o,
                      C,
                      f,
                      a,
                      r ? S : C
                    );
                    break;
                  default:
                    La(w, k, k, k, [""], C, 0, a, C);
                }
        }
        (u = c = h = 0), (g = v = 1), (y = w = ""), (f = s);
        break;
      case 58:
        (f = 1 + vn(w)), (h = m);
      default:
        if (g < 1) {
          if (p == 123) --g;
          else if (p == 125 && g++ == 0 && RP() == 125) continue;
        }
        switch (((w += vp(p)), p * g)) {
          case 38:
            v = c > 0 ? 1 : ((w += "\f"), -1);
            break;
          case 44:
            (a[u++] = (vn(w) - 1) * v), (v = 1);
            break;
          case 64:
            Wr() === 45 && (w += kc(cn())),
              (d = Wr()),
              (c = f = vn((y = w += MP(Oa())))),
              p++;
            break;
          case 45:
            m === 45 && vn(w) == 2 && (g = 0);
        }
    }
  return i;
}
function zm(e, t, n, r, o, i, s, a, l, u, c, f) {
  for (
    var d = o - 1, h = o === 0 ? i : [""], m = C1(h), g = 0, T = 0, v = 0;
    g < r;
    ++g
  )
    for (var p = 0, y = Ko(e, d + 1, (d = kP((T = s[g])))), S = e; p < m; ++p)
      (S = T1(T > 0 ? h[p] + " " + y : Y(y, /&\f/g, h[p]))) && (l[v++] = S);
  return nu(e, t, n, o === 0 ? eu : a, l, u, c, f);
}
function NP(e, t, n, r) {
  return nu(e, t, n, x1, vp(bP()), Ko(e, 2, -2), 0, r);
}
function Um(e, t, n, r, o) {
  return nu(e, t, n, yp, Ko(e, 0, r), Ko(e, r + 1, -1), r, o);
}
function P1(e, t, n) {
  switch (PP(e, t)) {
    case 5103:
      return te + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return te + e + e;
    case 4789:
      return zi + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + e + zi + e + me + e + e;
    case 5936:
      switch (Je(e, t + 11)) {
        case 114:
          return te + e + me + Y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return te + e + me + Y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return te + e + me + Y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return te + e + me + e + e;
    case 6165:
      return te + e + me + "flex-" + e + e;
    case 5187:
      return (
        te + e + Y(e, /(\w+).+(:[^]+)/, te + "box-$1$2" + me + "flex-$1$2") + e
      );
    case 5443:
      return (
        te +
        e +
        me +
        "flex-item-" +
        Y(e, /flex-|-self/g, "") +
        (Ln(e, /flex-|baseline/)
          ? ""
          : me + "grid-row-" + Y(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        te +
        e +
        me +
        "flex-line-pack" +
        Y(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return te + e + me + Y(e, "shrink", "negative") + e;
    case 5292:
      return te + e + me + Y(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        te +
        "box-" +
        Y(e, "-grow", "") +
        te +
        e +
        me +
        Y(e, "grow", "positive") +
        e
      );
    case 4554:
      return te + Y(e, /([^-])(transform)/g, "$1" + te + "$2") + e;
    case 6187:
      return (
        Y(Y(Y(e, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"), e, "") +
        e
      );
    case 5495:
    case 3959:
      return Y(e, /(image-set\([^]*)/, te + "$1$`$1");
    case 4968:
      return (
        Y(
          Y(e, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + me + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        te +
        e +
        e
      );
    case 4200:
      if (!Ln(e, /flex-|baseline/))
        return me + "grid-column-align" + Ko(e, t) + e;
      break;
    case 2592:
    case 3360:
      return me + Y(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, o) {
          return (t = o), Ln(r.props, /grid-\w+-end/);
        })
        ? ~$a(e + (n = n[t].value), "span")
          ? e
          : me +
            Y(e, "-start", "") +
            e +
            me +
            "grid-row-span:" +
            (~$a(n, "span") ? Ln(n, /\d+/) : +Ln(n, /\d+/) - +Ln(e, /\d+/)) +
            ";"
        : me + Y(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Ln(r.props, /grid-\w+-start/);
        })
        ? e
        : me + Y(Y(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Y(e, /(.+)-inline(.+)/, te + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (vn(e) - 1 - t > 6)
        switch (Je(e, t + 1)) {
          case 109:
            if (Je(e, t + 4) !== 45) break;
          case 102:
            return (
              Y(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  te +
                  "$2-$3$1" +
                  zi +
                  (Je(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~$a(e, "stretch")
              ? P1(Y(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return Y(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, o, i, s, a, l, u) {
          return (
            me +
            o +
            ":" +
            i +
            u +
            (s ? me + o + "-span:" + (a ? l : +l - +i) + u : "") +
            e
          );
        }
      );
    case 4949:
      if (Je(e, t + 6) === 121) return Y(e, ":", ":" + te) + e;
      break;
    case 6444:
      switch (Je(e, Je(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            Y(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                te +
                (Je(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                te +
                "$2$3$1" +
                me +
                "$2box$3"
            ) + e
          );
        case 100:
          return Y(e, ":", ":" + me) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Y(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Sl(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function jP(e, t, n, r) {
  switch (e.type) {
    case CP:
      if (e.children.length) break;
    case TP:
    case yp:
      return (e.return = e.return || e.value);
    case x1:
      return "";
    case w1:
      return (e.return = e.value + "{" + Sl(e.children, r) + "}");
    case eu:
      if (!vn((e.value = e.props.join(",")))) return "";
  }
  return vn((n = Sl(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function DP(e) {
  var t = C1(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function VP(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function FP(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case yp:
        e.return = P1(e.value, e.length, n);
        return;
      case w1:
        return Sl([Zn(e, { value: Y(e.value, "@", "@" + te) })], r);
      case eu:
        if (e.length)
          return EP((n = e.props), function (o) {
            switch (Ln(o, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                ao(Zn(e, { props: [Y(o, /:(read-\w+)/, ":" + zi + "$1")] })),
                  ao(Zn(e, { props: [o] })),
                  Yf(e, { props: Bm(n, r) });
                break;
              case "::placeholder":
                ao(
                  Zn(e, { props: [Y(o, /:(plac\w+)/, ":" + te + "input-$1")] })
                ),
                  ao(Zn(e, { props: [Y(o, /:(plac\w+)/, ":" + zi + "$1")] })),
                  ao(Zn(e, { props: [Y(o, /:(plac\w+)/, me + "input-$1")] })),
                  ao(Zn(e, { props: [o] })),
                  Yf(e, { props: Bm(n, r) });
                break;
            }
            return "";
          });
    }
}
var E1 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Lt = {},
  Xo =
    (typeof process < "u" &&
      Lt !== void 0 &&
      (Lt.REACT_APP_SC_ATTR || Lt.SC_ATTR)) ||
    "data-styled",
  Sp = typeof window < "u" && "HTMLElement" in window,
  BP = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Lt !== void 0 &&
      Lt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      Lt.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? Lt.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      Lt.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Lt !== void 0 &&
      Lt.SC_DISABLE_SPEEDY !== void 0 &&
      Lt.SC_DISABLE_SPEEDY !== "" &&
      Lt.SC_DISABLE_SPEEDY !== "false" &&
      Lt.SC_DISABLE_SPEEDY),
  ou = Object.freeze([]),
  Qo = Object.freeze({});
function zP(e, t, n) {
  return (
    n === void 0 && (n = Qo), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var b1 = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  UP = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  HP = /(^-|-$)/g;
function Hm(e) {
  return e.replace(UP, "-").replace(HP, "");
}
var WP = /(a)(d)/gi,
  Wm = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Zf(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Wm(t % 52) + n;
  return (Wm(t % 52) + n).replace(WP, "$1-$2");
}
var Pc,
  Eo = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  R1 = function (e) {
    return Eo(5381, e);
  };
function GP(e) {
  return Zf(R1(e) >>> 0);
}
function KP(e) {
  return e.displayName || e.name || "Component";
}
function Ec(e) {
  return typeof e == "string" && !0;
}
var A1 = typeof Symbol == "function" && Symbol.for,
  _1 = A1 ? Symbol.for("react.memo") : 60115,
  YP = A1 ? Symbol.for("react.forward_ref") : 60112,
  XP = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  QP = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  $1 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  ZP =
    (((Pc = {})[YP] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Pc[_1] = $1),
    Pc);
function Gm(e) {
  return ("type" in (t = e) && t.type.$$typeof) === _1
    ? $1
    : "$$typeof" in e
    ? ZP[e.$$typeof]
    : XP;
  var t;
}
var qP = Object.defineProperty,
  JP = Object.getOwnPropertyNames,
  Km = Object.getOwnPropertySymbols,
  eE = Object.getOwnPropertyDescriptor,
  tE = Object.getPrototypeOf,
  Ym = Object.prototype;
function O1(e, t, n) {
  if (typeof t != "string") {
    if (Ym) {
      var r = tE(t);
      r && r !== Ym && O1(e, r, n);
    }
    var o = JP(t);
    Km && (o = o.concat(Km(t)));
    for (var i = Gm(e), s = Gm(t), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!(l in QP || (n && n[l]) || (s && l in s) || (i && l in i))) {
        var u = eE(t, l);
        try {
          qP(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
function Zo(e) {
  return typeof e == "function";
}
function xp(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Dr(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Xm(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function ms(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function qf(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !ms(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = qf(e[r], t[r]);
  else if (ms(t)) for (var r in t) e[r] = qf(e[r], t[r]);
  return e;
}
function wp(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function $s(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var nE = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, o = r.length, i = o; t >= i; )
            if ((i <<= 1) < 0) throw $s(16, "".concat(t));
          (this.groupSizes = new Uint32Array(i)),
            this.groupSizes.set(r),
            (this.length = i);
          for (var s = o; s < i; s++) this.groupSizes[s] = 0;
        }
        for (
          var a = this.indexOfGroup(t + 1), l = ((s = 0), n.length);
          s < l;
          s++
        )
          this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            o = r + n;
          this.groupSizes[t] = 0;
          for (var i = r; i < o; i++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            o = this.indexOfGroup(t),
            i = o + r,
            s = o;
          s < i;
          s++
        )
          n += "".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);
        return n;
      }),
      e
    );
  })(),
  Ma = new Map(),
  xl = new Map(),
  Ia = 1,
  la = function (e) {
    if (Ma.has(e)) return Ma.get(e);
    for (; xl.has(Ia); ) Ia++;
    var t = Ia++;
    return Ma.set(e, t), xl.set(t, e), t;
  },
  rE = function (e, t) {
    (Ia = t + 1), Ma.set(e, t), xl.set(t, e);
  },
  oE = "style["
    .concat(Xo, "][")
    .concat("data-styled-version", '="')
    .concat("6.1.1", '"]'),
  iE = new RegExp(
    "^".concat(Xo, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  sE = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  aE = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "")
          .split(`/*!sc*/
`),
        o = [],
        i = 0,
        s = r.length;
      i < s;
      i++
    ) {
      var a = r[i].trim();
      if (a) {
        var l = a.match(iE);
        if (l) {
          var u = 0 | parseInt(l[1], 10),
            c = l[2];
          u !== 0 && (rE(c, u), sE(e, c, l[3]), e.getTag().insertRules(u, o)),
            (o.length = 0);
        } else o.push(a);
      }
    }
  };
function lE() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var L1 = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (a) {
        var l = Array.from(a.querySelectorAll("style[".concat(Xo, "]")));
        return l[l.length - 1];
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(Xo, "active"),
      r.setAttribute("data-styled-version", "6.1.1");
    var s = lE();
    return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
  },
  uE = (function () {
    function e(t) {
      (this.element = L1(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
            var s = r[o];
            if (s.ownerNode === n) return s;
          }
          throw $s(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  cE = (function () {
    function e(t) {
      (this.element = L1(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  fE = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Qm = Sp,
  dE = { isServer: !Sp, useCSSOMInjection: !BP },
  M1 = (function () {
    function e(t, n, r) {
      t === void 0 && (t = Qo), n === void 0 && (n = {});
      var o = this;
      (this.options = Pt(Pt({}, dE), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          Sp &&
          Qm &&
          ((Qm = !1),
          (function (i) {
            for (
              var s = document.querySelectorAll(oE), a = 0, l = s.length;
              a < l;
              a++
            ) {
              var u = s[a];
              u &&
                u.getAttribute(Xo) !== "active" &&
                (aE(i, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)),
        wp(this, function () {
          return (function (i) {
            for (
              var s = i.getTag(),
                a = s.length,
                l = "",
                u = function (f) {
                  var d = (function (v) {
                    return xl.get(v);
                  })(f);
                  if (d === void 0) return "continue";
                  var h = i.names.get(d),
                    m = s.getGroup(f);
                  if (h === void 0 || m.length === 0) return "continue";
                  var g = ""
                      .concat(Xo, ".g")
                      .concat(f, '[id="')
                      .concat(d, '"]'),
                    T = "";
                  h !== void 0 &&
                    h.forEach(function (v) {
                      v.length > 0 && (T += "".concat(v, ","));
                    }),
                    (l += "".concat(m).concat(g, '{content:"').concat(T, '"}')
                      .concat(`/*!sc*/
`));
                },
                c = 0;
              c < a;
              c++
            )
              u(c);
            return l;
          })(o);
        });
    }
    return (
      (e.registerId = function (t) {
        return la(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            Pt(Pt({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                o = n.target;
              return n.isServer ? new fE(o) : r ? new uE(o) : new cE(o);
            })(this.options)),
            new nE(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((la(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(la(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(la(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  pE = /&/g,
  hE = /^\s*\/\/.*$/gm;
function I1(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = I1(n.children, t)),
      n
    );
  });
}
function mE(e) {
  var t,
    n,
    r,
    o = e === void 0 ? Qo : e,
    i = o.options,
    s = i === void 0 ? Qo : i,
    a = o.plugins,
    l = a === void 0 ? ou : a,
    u = function (d, h, m) {
      return m === n ||
        (m.startsWith(n) && m.endsWith(n) && m.replaceAll(n, "").length > 0)
        ? ".".concat(t)
        : d;
    },
    c = l.slice();
  c.push(function (d) {
    d.type === eu &&
      d.value.includes("&") &&
      (d.props[0] = d.props[0].replace(pE, n).replace(r, u));
  }),
    s.prefix && c.push(FP),
    c.push(jP);
  var f = function (d, h, m, g) {
    h === void 0 && (h = ""),
      m === void 0 && (m = ""),
      g === void 0 && (g = "&"),
      (t = g),
      (n = h),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var T = d.replace(hE, ""),
      v = IP(m || h ? "".concat(m, " ").concat(h, " { ").concat(T, " }") : T);
    s.namespace && (v = I1(v, s.namespace));
    var p = [];
    return (
      Sl(
        v,
        DP(
          c.concat(
            VP(function (y) {
              return p.push(y);
            })
          )
        )
      ),
      p
    );
  };
  return (
    (f.hash = l.length
      ? l
          .reduce(function (d, h) {
            return h.name || $s(15), Eo(d, h.name);
          }, 5381)
          .toString()
      : ""),
    f
  );
}
var gE = new M1(),
  Jf = mE(),
  N1 = ge.createContext({
    shouldForwardProp: void 0,
    styleSheet: gE,
    stylis: Jf,
  });
N1.Consumer;
ge.createContext(void 0);
function Zm() {
  return x.useContext(N1);
}
var yE = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = Jf);
        var s = r.name + i.hash;
        o.hasNameForId(r.id, s) ||
          o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        wp(this, function () {
          throw $s(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Jf), this.name + t.hash;
      }),
      e
    );
  })(),
  vE = function (e) {
    return e >= "A" && e <= "Z";
  };
function qm(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    vE(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var j1 = function (e) {
    return e == null || e === !1 || e === "";
  },
  D1 = function (e) {
    var t,
      n,
      r = [];
    for (var o in e) {
      var i = e[o];
      e.hasOwnProperty(o) &&
        !j1(i) &&
        ((Array.isArray(i) && i.isCss) || Zo(i)
          ? r.push("".concat(qm(o), ":"), i, ";")
          : ms(i)
          ? r.push.apply(r, vl(vl(["".concat(o, " {")], D1(i), !1), ["}"], !1))
          : r.push(
              ""
                .concat(qm(o), ": ")
                .concat(
                  ((t = o),
                  (n = i) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in E1 ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function Gr(e, t, n, r) {
  if (j1(e)) return [];
  if (xp(e)) return [".".concat(e.styledComponentId)];
  if (Zo(e)) {
    if (!Zo((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t)
      return [e];
    var o = e(t);
    return Gr(o, t, n, r);
  }
  var i;
  return e instanceof yE
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : ms(e)
    ? D1(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        ou,
        e.map(function (s) {
          return Gr(s, t, n, r);
        })
      )
    : [e.toString()];
}
function SE(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Zo(n) && !xp(n)) return !1;
  }
  return !0;
}
var xE = R1("6.1.1"),
  wE = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && SE(t)),
        (this.componentId = n),
        (this.baseHash = Eo(xE, n)),
        (this.baseStyle = r),
        M1.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            o = Dr(o, this.staticRulesId);
          else {
            var i = Xm(Gr(this.rules, t, n, r)),
              s = Zf(Eo(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(this.componentId, s)) {
              var a = r(i, ".".concat(s), void 0, this.componentId);
              n.insertRules(this.componentId, s, a);
            }
            (o = Dr(o, s)), (this.staticRulesId = s);
          }
        else {
          for (
            var l = Eo(this.baseHash, r.hash), u = "", c = 0;
            c < this.rules.length;
            c++
          ) {
            var f = this.rules[c];
            if (typeof f == "string") u += f;
            else if (f) {
              var d = Xm(Gr(f, t, n, r));
              (l = Eo(l, d + c)), (u += d);
            }
          }
          if (u) {
            var h = Zf(l >>> 0);
            n.hasNameForId(this.componentId, h) ||
              n.insertRules(
                this.componentId,
                h,
                r(u, ".".concat(h), void 0, this.componentId)
              ),
              (o = Dr(o, h));
          }
        }
        return o;
      }),
      e
    );
  })(),
  V1 = ge.createContext(void 0);
V1.Consumer;
var bc = {};
function TE(e, t, n) {
  var r = xp(e),
    o = e,
    i = !Ec(e),
    s = t.attrs,
    a = s === void 0 ? ou : s,
    l = t.componentId,
    u =
      l === void 0
        ? (function (S, C) {
            var k = typeof S != "string" ? "sc" : Hm(S);
            bc[k] = (bc[k] || 0) + 1;
            var w = "".concat(k, "-").concat(GP("6.1.1" + k + bc[k]));
            return C ? "".concat(C, "-").concat(w) : w;
          })(t.displayName, t.parentComponentId)
        : l,
    c = t.displayName,
    f =
      c === void 0
        ? (function (S) {
            return Ec(S) ? "styled.".concat(S) : "Styled(".concat(KP(S), ")");
          })(e)
        : c,
    d =
      t.displayName && t.componentId
        ? "".concat(Hm(t.displayName), "-").concat(t.componentId)
        : t.componentId || u,
    h = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a,
    m = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var g = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var T = t.shouldForwardProp;
      m = function (S, C) {
        return g(S, C) && T(S, C);
      };
    } else m = g;
  }
  var v = new wE(n, d, r ? o.componentStyle : void 0);
  function p(S, C) {
    return (function (k, w, E) {
      var O = k.attrs,
        b = k.componentStyle,
        I = k.defaultProps,
        B = k.foldedComponentIds,
        G = k.styledComponentId,
        D = k.target,
        U = ge.useContext(V1),
        K = Zm(),
        re = k.shouldForwardProp || K.shouldForwardProp,
        R = (function (ae, Pe, ue) {
          for (
            var We,
              Xe = Pt(Pt({}, Pe), { className: void 0, theme: ue }),
              fe = 0;
            fe < ae.length;
            fe += 1
          ) {
            var Qe = Zo((We = ae[fe])) ? We(Xe) : We;
            for (var de in Qe)
              Xe[de] =
                de === "className"
                  ? Dr(Xe[de], Qe[de])
                  : de === "style"
                  ? Pt(Pt({}, Xe[de]), Qe[de])
                  : Qe[de];
          }
          return (
            Pe.className && (Xe.className = Dr(Xe.className, Pe.className)), Xe
          );
        })(O, w, zP(w, U, I) || Qo),
        L = R.as || D,
        V = {};
      for (var N in R)
        R[N] === void 0 ||
          N[0] === "$" ||
          N === "as" ||
          N === "theme" ||
          (N === "forwardedAs"
            ? (V.as = R.forwardedAs)
            : (re && !re(N, L)) || (V[N] = R[N]));
      var X = (function (ae, Pe) {
          var ue = Zm(),
            We = ae.generateAndInjectStyles(Pe, ue.styleSheet, ue.stylis);
          return We;
        })(b, R),
        le = Dr(B, G);
      return (
        X && (le += " " + X),
        R.className && (le += " " + R.className),
        (V[Ec(L) && !b1.has(L) ? "class" : "className"] = le),
        (V.ref = E),
        x.createElement(L, V)
      );
    })(y, S, C);
  }
  p.displayName = f;
  var y = ge.forwardRef(p);
  return (
    (y.attrs = h),
    (y.componentStyle = v),
    (y.displayName = f),
    (y.shouldForwardProp = m),
    (y.foldedComponentIds = r
      ? Dr(o.foldedComponentIds, o.styledComponentId)
      : ""),
    (y.styledComponentId = d),
    (y.target = r ? o.target : e),
    Object.defineProperty(y, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (S) {
        this._foldedDefaultProps = r
          ? (function (C) {
              for (var k = [], w = 1; w < arguments.length; w++)
                k[w - 1] = arguments[w];
              for (var E = 0, O = k; E < O.length; E++) qf(C, O[E], !0);
              return C;
            })({}, o.defaultProps, S)
          : S;
      },
    }),
    wp(y, function () {
      return ".".concat(y.styledComponentId);
    }),
    i &&
      O1(y, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    y
  );
}
function Jm(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var e0 = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function CE(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Zo(e) || ms(e)) {
    var r = e;
    return e0(Gr(Jm(ou, vl([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string"
    ? Gr(o)
    : e0(Gr(Jm(o, t)));
}
function ed(e, t, n) {
  if ((n === void 0 && (n = Qo), !t)) throw $s(1, t);
  var r = function (o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, CE.apply(void 0, vl([o], i, !1)));
  };
  return (
    (r.attrs = function (o) {
      return ed(
        e,
        t,
        Pt(Pt({}, n), {
          attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (o) {
      return ed(e, t, Pt(Pt({}, n), o));
    }),
    r
  );
}
var F1 = function (e) {
    return ed(TE, e);
  },
  Os = F1;
b1.forEach(function (e) {
  Os[e] = F1(e);
});
function kE(e) {
  return $t({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-212.65 91.36a16 16 0 01-.09-22.63L303.58 272H170a16 16 0 010-32h133.58l-52.32-52.73A16 16 0 11274 164.73l79.39 80a16 16 0 010 22.54l-79.39 80a16 16 0 01-22.65.09z",
        },
      },
    ],
  })(e);
}
function PE(e) {
  return $t({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z",
        },
      },
    ],
  })(e);
}
const EE = Os.button`
  border: none;
  background: transparent;
  font-size: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  margin: 2rem;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`,
  bE = Os.div`
  opacity: ${(e) => (e.isopen === "true" ? "1" : "0")};
  pointer-events: ${(e) => (e.isopen === "true" ? "all" : "none")};
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  transition: 0.2s all;
  z-index: 10;
`,
  RE = Os.div`
  z-index: 20;
  width: 30rem;
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  border-radius: 0 0 0 2rem;
  padding: 3rem;
  transition: 0.5s all cubic-bezier(0.77, -0.01, 0.32, 0.99);

  transform: translateX(${(e) => (e.isopen === "true" ? "0" : "100%")});
`,
  AE = Os.div`
  width: 100%;
  height: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
function _E(e) {
  return P.jsxs(P.Fragment, {
    children: [
      P.jsxs(RE, {
        isopen: e.isopen.toString(),
        children: [
          P.jsx(EE, { onClick: e.onClose, children: P.jsx(PE, {}) }),
          P.jsx(AE, { children: e.children }),
        ],
      }),
      P.jsx(bE, { isopen: e.isopen.toString(), onClick: e.onClose }),
    ],
  });
}
const Tp = x.createContext(),
  $E = function (e) {
    const [t, n] = x.useState(localStorage.getItem("user") || "");
    return P.jsx(Tp.Provider, {
      value: { username: t, setUsername: n },
      children: e.children,
    });
  },
  OE = "/assets/bg0-wB2ALMzX.jpeg",
  LE = "/assets/bg1--rL5K82q.jpeg",
  ME = "/assets/bg2-lGeDHVoE.jpeg",
  IE = "/assets/bg3-RhhaVo94.jpeg",
  NE = "/assets/bg4-V-hG28uT.jpeg",
  jE = "/assets/bg5-WCs5P84J.jpeg",
  DE = "/assets/bg6-OCszWhNl.jpeg",
  VE = "/assets/bg7-J4t0X5hb.jpeg",
  FE = "/assets/bg8-TpHy6Ct5.jpeg",
  BE = "/assets/bg9-xwZfGaIz.jpeg",
  Cp = x.createContext(),
  t0 = [
    { id: 0, src: OE },
    { id: 1, src: LE },
    { id: 2, src: ME },
    { id: 3, src: IE },
    { id: 4, src: NE },
    { id: 5, src: jE },
    { id: 6, src: DE },
    { id: 7, src: VE },
    { id: 8, src: FE },
    { id: 9, src: BE },
  ],
  zE = {
    currentImage: JSON.parse(localStorage.getItem("bgImg")) || t0[0],
    allImages: t0,
  },
  UE = function ({ children: e }) {
    function t(i, s) {
      switch (s.type) {
        case "SET_IMAGE":
          return { ...i, currentImage: i.allImages[s.payload] };
      }
    }
    const [n, r] = x.useReducer(t, zE);
    function o(i) {
      r({ type: "SET_IMAGE", payload: i }),
        localStorage.setItem("bgImg", JSON.stringify(n.allImages[i]));
    }
    return (
      x.useEffect(() => {
        const i = localStorage.getItem("bgImg")
          ? JSON.parse(localStorage.getItem("bgImg"))
          : n.currentImage;
        !localStorage.getItem("bgImg") &&
          localStorage.setItem("bgImg", JSON.stringify(i));
      }, [n.currentImage]),
      P.jsx(Cp.Provider, { value: { ...n, setImage: o }, children: e })
    );
  };
function HE(e) {
  return $t({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z",
          clipRule: "evenodd",
        },
      },
    ],
  })(e);
}
const WE = { black: "#000", white: "#fff" },
  gs = WE,
  GE = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  lo = GE,
  KE = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  uo = KE,
  YE = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  co = YE,
  XE = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  fo = XE,
  QE = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  po = QE,
  ZE = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Ti = ZE,
  qE = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  JE = qE;
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _.apply(this, arguments)
  );
}
function or(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function B1(e) {
  if (!or(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = B1(e[n]);
    }),
    t
  );
}
function fn(e, t, n = { clone: !0 }) {
  const r = n.clone ? _({}, e) : e;
  return (
    or(e) &&
      or(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (or(t[o]) && o in e && or(e[o])
            ? (r[o] = fn(e[o], t[o], n))
            : n.clone
            ? (r[o] = or(t[o]) ? B1(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function qo(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function Ue(e) {
  if (typeof e != "string") throw new Error(qo(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Na(e) {
  return (e && e.ownerDocument) || document;
}
function eb(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const tb = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
  z1 = tb;
function U1({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = x.useRef(e !== void 0),
    [i, s] = x.useState(t),
    a = o ? e : i,
    l = x.useCallback((u) => {
      o || s(u);
    }, []);
  return [a, l];
}
function Vr(e) {
  const t = x.useRef(e);
  return (
    z1(() => {
      t.current = e;
    }),
    x.useRef((...n) => (0, t.current)(...n)).current
  );
}
function ys(...e) {
  return x.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              eb(n, t);
            });
          },
    e
  );
}
let iu = !0,
  td = !1,
  n0;
const nb = {
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
function rb(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && nb[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function ob(e) {
  e.metaKey || e.altKey || e.ctrlKey || (iu = !0);
}
function Rc() {
  iu = !1;
}
function ib() {
  this.visibilityState === "hidden" && td && (iu = !0);
}
function sb(e) {
  e.addEventListener("keydown", ob, !0),
    e.addEventListener("mousedown", Rc, !0),
    e.addEventListener("pointerdown", Rc, !0),
    e.addEventListener("touchstart", Rc, !0),
    e.addEventListener("visibilitychange", ib, !0);
}
function ab(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return iu || rb(t);
}
function H1() {
  const e = x.useCallback((o) => {
      o != null && sb(o.ownerDocument);
    }, []),
    t = x.useRef(!1);
  function n() {
    return t.current
      ? ((td = !0),
        window.clearTimeout(n0),
        (n0 = window.setTimeout(() => {
          td = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return ab(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
const lb = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  },
  ub = lb;
function W1(e, t) {
  const n = _({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = _({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = _({}, i)),
              Object.keys(o).forEach((s) => {
                n[r][s] = W1(o[s], i[s]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function su(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, s) => {
          if (s) {
            const a = t(s);
            a !== "" && i.push(a), n && n[s] && i.push(n[s]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const r0 = (e) => e,
  cb = () => {
    let e = r0;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = r0;
      },
    };
  },
  fb = cb(),
  db = fb,
  pb = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function Ls(e, t, n = "Mui") {
  const r = pb[t];
  return r ? `${n}-${r}` : `${db.generate(e)}-${t}`;
}
function Ms(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = Ls(e, o, n);
    }),
    r
  );
}
const kp = "$$material";
function wt(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function hb(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function mb(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var gb = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(mb(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = hb(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  ft = "-ms-",
  wl = "-moz-",
  J = "-webkit-",
  G1 = "comm",
  Pp = "rule",
  Ep = "decl",
  yb = "@import",
  K1 = "@keyframes",
  vb = "@layer",
  Sb = Math.abs,
  au = String.fromCharCode,
  xb = Object.assign;
function wb(e, t) {
  return ot(e, 0) ^ 45
    ? (((((((t << 2) ^ ot(e, 0)) << 2) ^ ot(e, 1)) << 2) ^ ot(e, 2)) << 2) ^
        ot(e, 3)
    : 0;
}
function Y1(e) {
  return e.trim();
}
function Tb(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, n) {
  return e.replace(t, n);
}
function nd(e, t) {
  return e.indexOf(t);
}
function ot(e, t) {
  return e.charCodeAt(t) | 0;
}
function vs(e, t, n) {
  return e.slice(t, n);
}
function Sn(e) {
  return e.length;
}
function bp(e) {
  return e.length;
}
function ua(e, t) {
  return t.push(e), e;
}
function Cb(e, t) {
  return e.map(t).join("");
}
var lu = 1,
  Jo = 1,
  X1 = 0,
  At = 0,
  Be = 0,
  li = "";
function uu(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: lu,
    column: Jo,
    length: s,
    return: "",
  };
}
function Ci(e, t) {
  return xb(uu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function kb() {
  return Be;
}
function Pb() {
  return (
    (Be = At > 0 ? ot(li, --At) : 0), Jo--, Be === 10 && ((Jo = 1), lu--), Be
  );
}
function Dt() {
  return (
    (Be = At < X1 ? ot(li, At++) : 0), Jo++, Be === 10 && ((Jo = 1), lu++), Be
  );
}
function Pn() {
  return ot(li, At);
}
function ja() {
  return At;
}
function Is(e, t) {
  return vs(li, e, t);
}
function Ss(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Q1(e) {
  return (lu = Jo = 1), (X1 = Sn((li = e))), (At = 0), [];
}
function Z1(e) {
  return (li = ""), e;
}
function Da(e) {
  return Y1(Is(At - 1, rd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Eb(e) {
  for (; (Be = Pn()) && Be < 33; ) Dt();
  return Ss(e) > 2 || Ss(Be) > 3 ? "" : " ";
}
function bb(e, t) {
  for (
    ;
    --t &&
    Dt() &&
    !(Be < 48 || Be > 102 || (Be > 57 && Be < 65) || (Be > 70 && Be < 97));

  );
  return Is(e, ja() + (t < 6 && Pn() == 32 && Dt() == 32));
}
function rd(e) {
  for (; Dt(); )
    switch (Be) {
      case e:
        return At;
      case 34:
      case 39:
        e !== 34 && e !== 39 && rd(Be);
        break;
      case 40:
        e === 41 && rd(e);
        break;
      case 92:
        Dt();
        break;
    }
  return At;
}
function Rb(e, t) {
  for (; Dt() && e + Be !== 57; ) if (e + Be === 84 && Pn() === 47) break;
  return "/*" + Is(t, At - 1) + "*" + au(e === 47 ? e : Dt());
}
function Ab(e) {
  for (; !Ss(Pn()); ) Dt();
  return Is(e, At);
}
function _b(e) {
  return Z1(Va("", null, null, null, [""], (e = Q1(e)), 0, [0], e));
}
function Va(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      f = s,
      d = 0,
      h = 0,
      m = 0,
      g = 1,
      T = 1,
      v = 1,
      p = 0,
      y = "",
      S = o,
      C = i,
      k = r,
      w = y;
    T;

  )
    switch (((m = p), (p = Dt()))) {
      case 40:
        if (m != 108 && ot(w, f - 1) == 58) {
          nd((w += ee(Da(p), "&", "&\f")), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += Da(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += Eb(m);
        break;
      case 92:
        w += bb(ja() - 1, 7);
        continue;
      case 47:
        switch (Pn()) {
          case 42:
          case 47:
            ua($b(Rb(Dt(), ja()), t, n), l);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * g:
        a[u++] = Sn(w) * v;
      case 125 * g:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            T = 0;
          case 59 + c:
            v == -1 && (w = ee(w, /\f/g, "")),
              h > 0 &&
                Sn(w) - f &&
                ua(
                  h > 32
                    ? i0(w + ";", r, n, f - 1)
                    : i0(ee(w, " ", "") + ";", r, n, f - 2),
                  l
                );
            break;
          case 59:
            w += ";";
          default:
            if (
              (ua((k = o0(w, t, n, u, c, o, a, y, (S = []), (C = []), f)), i),
              p === 123)
            )
              if (c === 0) Va(w, t, k, k, S, i, f, a, C);
              else
                switch (d === 99 && ot(w, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Va(
                      e,
                      k,
                      k,
                      r && ua(o0(e, k, k, 0, 0, o, a, y, o, (S = []), f), C),
                      o,
                      C,
                      f,
                      a,
                      r ? S : C
                    );
                    break;
                  default:
                    Va(w, k, k, k, [""], C, 0, a, C);
                }
        }
        (u = c = h = 0), (g = v = 1), (y = w = ""), (f = s);
        break;
      case 58:
        (f = 1 + Sn(w)), (h = m);
      default:
        if (g < 1) {
          if (p == 123) --g;
          else if (p == 125 && g++ == 0 && Pb() == 125) continue;
        }
        switch (((w += au(p)), p * g)) {
          case 38:
            v = c > 0 ? 1 : ((w += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Sn(w) - 1) * v), (v = 1);
            break;
          case 64:
            Pn() === 45 && (w += Da(Dt())),
              (d = Pn()),
              (c = f = Sn((y = w += Ab(ja())))),
              p++;
            break;
          case 45:
            m === 45 && Sn(w) == 2 && (g = 0);
        }
    }
  return i;
}
function o0(e, t, n, r, o, i, s, a, l, u, c) {
  for (
    var f = o - 1, d = o === 0 ? i : [""], h = bp(d), m = 0, g = 0, T = 0;
    m < r;
    ++m
  )
    for (var v = 0, p = vs(e, f + 1, (f = Sb((g = s[m])))), y = e; v < h; ++v)
      (y = Y1(g > 0 ? d[v] + " " + p : ee(p, /&\f/g, d[v]))) && (l[T++] = y);
  return uu(e, t, n, o === 0 ? Pp : a, l, u, c);
}
function $b(e, t, n) {
  return uu(e, t, n, G1, au(kb()), vs(e, 2, -2), 0);
}
function i0(e, t, n, r) {
  return uu(e, t, n, Ep, vs(e, 0, r), vs(e, r + 1, -1), r);
}
function Do(e, t) {
  for (var n = "", r = bp(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function Ob(e, t, n, r) {
  switch (e.type) {
    case vb:
      if (e.children.length) break;
    case yb:
    case Ep:
      return (e.return = e.return || e.value);
    case G1:
      return "";
    case K1:
      return (e.return = e.value + "{" + Do(e.children, r) + "}");
    case Pp:
      e.value = e.props.join(",");
  }
  return Sn((n = Do(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Lb(e) {
  var t = bp(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function Mb(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Ib = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Pn()), o === 38 && i === 12 && (n[r] = 1), !Ss(i);

    )
      Dt();
    return Is(t, At);
  },
  Nb = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Ss(o)) {
        case 0:
          o === 38 && Pn() === 12 && (n[r] = 1), (t[r] += Ib(At - 1, n, r));
          break;
        case 2:
          t[r] += Da(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Pn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += au(o);
      }
    while ((o = Dt()));
    return t;
  },
  jb = function (t, n) {
    return Z1(Nb(Q1(t), n));
  },
  s0 = new WeakMap(),
  Db = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !s0.get(r)) &&
        !o
      ) {
        s0.set(t, !0);
        for (
          var i = [], s = jb(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  Vb = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function q1(e, t) {
  switch (wb(e, t)) {
    case 5103:
      return J + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return J + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return J + e + wl + e + ft + e + e;
    case 6828:
    case 4268:
      return J + e + ft + e + e;
    case 6165:
      return J + e + ft + "flex-" + e + e;
    case 5187:
      return (
        J + e + ee(e, /(\w+).+(:[^]+)/, J + "box-$1$2" + ft + "flex-$1$2") + e
      );
    case 5443:
      return J + e + ft + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        J +
        e +
        ft +
        "flex-line-pack" +
        ee(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return J + e + ft + ee(e, "shrink", "negative") + e;
    case 5292:
      return J + e + ft + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        J +
        "box-" +
        ee(e, "-grow", "") +
        J +
        e +
        ft +
        ee(e, "grow", "positive") +
        e
      );
    case 4554:
      return J + ee(e, /([^-])(transform)/g, "$1" + J + "$2") + e;
    case 6187:
      return (
        ee(
          ee(ee(e, /(zoom-|grab)/, J + "$1"), /(image-set)/, J + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, J + "$1$`$1");
    case 4968:
      return (
        ee(
          ee(e, /(.+:)(flex-)?(.*)/, J + "box-pack:$3" + ft + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        J +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ee(e, /(.+)-inline(.+)/, J + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Sn(e) - 1 - t > 6)
        switch (ot(e, t + 1)) {
          case 109:
            if (ot(e, t + 4) !== 45) break;
          case 102:
            return (
              ee(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  J +
                  "$2-$3$1" +
                  wl +
                  (ot(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~nd(e, "stretch")
              ? q1(ee(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ot(e, t + 1) !== 115) break;
    case 6444:
      switch (ot(e, Sn(e) - 3 - (~nd(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + J) + e;
        case 101:
          return (
            ee(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                J +
                (ot(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                J +
                "$2$3$1" +
                ft +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (ot(e, t + 11)) {
        case 114:
          return J + e + ft + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return J + e + ft + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return J + e + ft + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return J + e + ft + e + e;
  }
  return e;
}
var Fb = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Ep:
          t.return = q1(t.value, t.length);
          break;
        case K1:
          return Do([Ci(t, { value: ee(t.value, "@", "@" + J) })], o);
        case Pp:
          if (t.length)
            return Cb(t.props, function (i) {
              switch (Tb(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Do(
                    [Ci(t, { props: [ee(i, /:(read-\w+)/, ":" + wl + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Do(
                    [
                      Ci(t, {
                        props: [ee(i, /:(plac\w+)/, ":" + J + "input-$1")],
                      }),
                      Ci(t, { props: [ee(i, /:(plac\w+)/, ":" + wl + "$1")] }),
                      Ci(t, { props: [ee(i, /:(plac\w+)/, ft + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  Bb = [Fb],
  zb = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var T = g.getAttribute("data-emotion");
        T.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || Bb,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var T = g.getAttribute("data-emotion").split(" "), v = 1;
            v < T.length;
            v++
          )
            i[T[v]] = !0;
          a.push(g);
        }
      );
    var l,
      u = [Db, Vb];
    {
      var c,
        f = [
          Ob,
          Mb(function (g) {
            c.insert(g);
          }),
        ],
        d = Lb(u.concat(o, f)),
        h = function (T) {
          return Do(_b(T), d);
        };
      l = function (T, v, p, y) {
        (c = p),
          h(T ? T + "{" + v.styles + "}" : v.styles),
          y && (m.inserted[v.name] = !0);
      };
    }
    var m = {
      key: n,
      sheet: new gb({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return m.sheet.hydrate(a), m;
  },
  J1 = { exports: {} },
  se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tt = typeof Symbol == "function" && Symbol.for,
  Rp = tt ? Symbol.for("react.element") : 60103,
  Ap = tt ? Symbol.for("react.portal") : 60106,
  cu = tt ? Symbol.for("react.fragment") : 60107,
  fu = tt ? Symbol.for("react.strict_mode") : 60108,
  du = tt ? Symbol.for("react.profiler") : 60114,
  pu = tt ? Symbol.for("react.provider") : 60109,
  hu = tt ? Symbol.for("react.context") : 60110,
  _p = tt ? Symbol.for("react.async_mode") : 60111,
  mu = tt ? Symbol.for("react.concurrent_mode") : 60111,
  gu = tt ? Symbol.for("react.forward_ref") : 60112,
  yu = tt ? Symbol.for("react.suspense") : 60113,
  Ub = tt ? Symbol.for("react.suspense_list") : 60120,
  vu = tt ? Symbol.for("react.memo") : 60115,
  Su = tt ? Symbol.for("react.lazy") : 60116,
  Hb = tt ? Symbol.for("react.block") : 60121,
  Wb = tt ? Symbol.for("react.fundamental") : 60117,
  Gb = tt ? Symbol.for("react.responder") : 60118,
  Kb = tt ? Symbol.for("react.scope") : 60119;
function Ut(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Rp:
        switch (((e = e.type), e)) {
          case _p:
          case mu:
          case cu:
          case du:
          case fu:
          case yu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case hu:
              case gu:
              case Su:
              case vu:
              case pu:
                return e;
              default:
                return t;
            }
        }
      case Ap:
        return t;
    }
  }
}
function eS(e) {
  return Ut(e) === mu;
}
se.AsyncMode = _p;
se.ConcurrentMode = mu;
se.ContextConsumer = hu;
se.ContextProvider = pu;
se.Element = Rp;
se.ForwardRef = gu;
se.Fragment = cu;
se.Lazy = Su;
se.Memo = vu;
se.Portal = Ap;
se.Profiler = du;
se.StrictMode = fu;
se.Suspense = yu;
se.isAsyncMode = function (e) {
  return eS(e) || Ut(e) === _p;
};
se.isConcurrentMode = eS;
se.isContextConsumer = function (e) {
  return Ut(e) === hu;
};
se.isContextProvider = function (e) {
  return Ut(e) === pu;
};
se.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Rp;
};
se.isForwardRef = function (e) {
  return Ut(e) === gu;
};
se.isFragment = function (e) {
  return Ut(e) === cu;
};
se.isLazy = function (e) {
  return Ut(e) === Su;
};
se.isMemo = function (e) {
  return Ut(e) === vu;
};
se.isPortal = function (e) {
  return Ut(e) === Ap;
};
se.isProfiler = function (e) {
  return Ut(e) === du;
};
se.isStrictMode = function (e) {
  return Ut(e) === fu;
};
se.isSuspense = function (e) {
  return Ut(e) === yu;
};
se.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === cu ||
    e === mu ||
    e === du ||
    e === fu ||
    e === yu ||
    e === Ub ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Su ||
        e.$$typeof === vu ||
        e.$$typeof === pu ||
        e.$$typeof === hu ||
        e.$$typeof === gu ||
        e.$$typeof === Wb ||
        e.$$typeof === Gb ||
        e.$$typeof === Kb ||
        e.$$typeof === Hb))
  );
};
se.typeOf = Ut;
J1.exports = se;
var Yb = J1.exports,
  tS = Yb,
  Xb = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Qb = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  nS = {};
nS[tS.ForwardRef] = Xb;
nS[tS.Memo] = Qb;
var Zb = !0;
function qb(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var rS = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || Zb === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  Jb = function (t, n, r) {
    rS(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function e4(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var t4 = /[A-Z]|^ms/g,
  n4 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  oS = function (t) {
    return t.charCodeAt(1) === 45;
  },
  a0 = function (t) {
    return t != null && typeof t != "boolean";
  },
  Ac = S1(function (e) {
    return oS(e) ? e : e.replace(t4, "-$&").toLowerCase();
  }),
  l0 = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(n4, function (r, o, i) {
            return (xn = { name: o, styles: i, next: xn }), o;
          });
    }
    return E1[t] !== 1 && !oS(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function xs(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (xn = { name: n.name, styles: n.styles, next: xn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (xn = { name: r.name, styles: r.styles, next: xn }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return r4(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = xn,
          s = n(e);
        return (xn = i), xs(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function r4(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += xs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (r += i + "{" + t[s] + "}")
          : a0(s) && (r += Ac(i) + ":" + l0(i, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          a0(s[a]) && (r += Ac(i) + ":" + l0(i, s[a]) + ";");
      else {
        var l = xs(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Ac(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var u0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  xn,
  iS = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    xn = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += xs(r, n, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += xs(r, n, t[a])), o && (i += s[a]);
    u0.lastIndex = 0;
    for (var l = "", u; (u = u0.exec(i)) !== null; ) l += "-" + u[1];
    var c = e4(i) + l;
    return { name: c, styles: i, next: xn };
  },
  o4 = function (t) {
    return t();
  },
  i4 = Wc.useInsertionEffect ? Wc.useInsertionEffect : !1,
  s4 = i4 || o4,
  sS = x.createContext(typeof HTMLElement < "u" ? zb({ key: "css" }) : null);
sS.Provider;
var a4 = function (t) {
    return x.forwardRef(function (n, r) {
      var o = x.useContext(sS);
      return t(n, o, r);
    });
  },
  aS = x.createContext({});
function l4() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return iS(t);
}
var $p = function () {
    var t = l4.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  u4 = wP,
  c4 = function (t) {
    return t !== "theme";
  },
  c0 = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? u4 : c4;
  },
  f0 = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  f4 = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      rS(n, r, o),
      s4(function () {
        return Jb(n, r, o);
      }),
      null
    );
  },
  d4 = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = f0(t, n, r),
      l = a || c0(o),
      u = !l("as");
    return function () {
      var c = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && f.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        f.push.apply(f, c);
      else {
        f.push(c[0][0]);
        for (var d = c.length, h = 1; h < d; h++) f.push(c[h], c[0][h]);
      }
      var m = a4(function (g, T, v) {
        var p = (u && g.as) || o,
          y = "",
          S = [],
          C = g;
        if (g.theme == null) {
          C = {};
          for (var k in g) C[k] = g[k];
          C.theme = x.useContext(aS);
        }
        typeof g.className == "string"
          ? (y = qb(T.registered, S, g.className))
          : g.className != null && (y = g.className + " ");
        var w = iS(f.concat(S), T.registered, C);
        (y += T.key + "-" + w.name), s !== void 0 && (y += " " + s);
        var E = u && a === void 0 ? c0(p) : l,
          O = {};
        for (var b in g) (u && b === "as") || (E(b) && (O[b] = g[b]));
        return (
          (O.className = y),
          (O.ref = v),
          x.createElement(
            x.Fragment,
            null,
            x.createElement(f4, {
              cache: T,
              serialized: w,
              isStringTag: typeof p == "string",
            }),
            x.createElement(p, O)
          )
        );
      });
      return (
        (m.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (m.defaultProps = t.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = o),
        (m.__emotion_styles = f),
        (m.__emotion_forwardProp = a),
        Object.defineProperty(m, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (m.withComponent = function (g, T) {
          return e(g, _({}, n, T, { shouldForwardProp: f0(m, T, !0) })).apply(
            void 0,
            f
          );
        }),
        m
      );
    };
  },
  p4 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  od = d4.bind();
p4.forEach(function (e) {
  od[e] = od(e);
});
function h4(e, t) {
  return od(e, t);
}
const m4 = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  g4 = ["values", "unit", "step"],
  y4 = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => _({}, n, { [r.key]: r.val }), {})
    );
  };
function v4(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = wt(e, g4),
    i = y4(t),
    s = Object.keys(i);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function l(d) {
    return `@media (max-width:${
      (typeof t[d] == "number" ? t[d] : d) - r / 100
    }${n})`;
  }
  function u(d, h) {
    const m = s.indexOf(h);
    return `@media (min-width:${
      typeof t[d] == "number" ? t[d] : d
    }${n}) and (max-width:${
      (m !== -1 && typeof t[s[m]] == "number" ? t[s[m]] : h) - r / 100
    }${n})`;
  }
  function c(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function f(d) {
    const h = s.indexOf(d);
    return h === 0
      ? a(s[1])
      : h === s.length - 1
      ? l(s[h])
      : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return _(
    {
      keys: s,
      values: i,
      up: a,
      down: l,
      between: u,
      only: c,
      not: f,
      unit: n,
    },
    o
  );
}
const S4 = { borderRadius: 4 },
  x4 = S4;
function Ui(e, t) {
  return t ? fn(e, t, { clone: !1 }) : e;
}
const Op = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  d0 = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Op[e]}px)`,
  };
function Wn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || d0;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || d0;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || Op).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function w4(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function T4(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function xu(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Tl(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = xu(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function ne(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = xu(l, r) || {};
      return Wn(s, a, (f) => {
        let d = Tl(u, o, f);
        return (
          f === d &&
            typeof f == "string" &&
            (d = Tl(u, o, `${t}${f === "default" ? "" : Ue(f)}`, f)),
          n === !1 ? d : { [n]: d }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function C4(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const k4 = { m: "margin", p: "padding" },
  P4 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  p0 = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  E4 = C4((e) => {
    if (e.length > 2)
      if (p0[e]) e = p0[e];
      else return [e];
    const [t, n] = e.split(""),
      r = k4[t],
      o = P4[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  Lp = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Mp = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Lp, ...Mp];
function Ns(e, t, n, r) {
  var o;
  const i = (o = xu(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (s) => (typeof s == "string" ? s : i * s)
    : Array.isArray(i)
    ? (s) => (typeof s == "string" ? s : i[s])
    : typeof i == "function"
    ? i
    : () => {};
}
function lS(e) {
  return Ns(e, "spacing", 8);
}
function js(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function b4(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = js(t, n)), r), {});
}
function R4(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = E4(n),
    i = b4(o, r),
    s = e[n];
  return Wn(e, s, i);
}
function uS(e, t) {
  const n = lS(e.theme);
  return Object.keys(e)
    .map((r) => R4(e, t, r, n))
    .reduce(Ui, {});
}
function $e(e) {
  return uS(e, Lp);
}
$e.propTypes = {};
$e.filterProps = Lp;
function Oe(e) {
  return uS(e, Mp);
}
Oe.propTypes = {};
Oe.filterProps = Mp;
function A4(e = 8) {
  if (e.mui) return e;
  const t = lS({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const s = t(i);
          return typeof s == "number" ? `${s}px` : s;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function wu(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Ui(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function Tn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const _4 = ne({ prop: "border", themeKey: "borders", transform: Tn }),
  $4 = ne({ prop: "borderTop", themeKey: "borders", transform: Tn }),
  O4 = ne({ prop: "borderRight", themeKey: "borders", transform: Tn }),
  L4 = ne({ prop: "borderBottom", themeKey: "borders", transform: Tn }),
  M4 = ne({ prop: "borderLeft", themeKey: "borders", transform: Tn }),
  I4 = ne({ prop: "borderColor", themeKey: "palette" }),
  N4 = ne({ prop: "borderTopColor", themeKey: "palette" }),
  j4 = ne({ prop: "borderRightColor", themeKey: "palette" }),
  D4 = ne({ prop: "borderBottomColor", themeKey: "palette" }),
  V4 = ne({ prop: "borderLeftColor", themeKey: "palette" }),
  Tu = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Ns(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: js(t, r) });
      return Wn(e, e.borderRadius, n);
    }
    return null;
  };
Tu.propTypes = {};
Tu.filterProps = ["borderRadius"];
wu(_4, $4, O4, L4, M4, I4, N4, j4, D4, V4, Tu);
const Cu = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ns(e.theme, "spacing", 8),
      n = (r) => ({ gap: js(t, r) });
    return Wn(e, e.gap, n);
  }
  return null;
};
Cu.propTypes = {};
Cu.filterProps = ["gap"];
const ku = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ns(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: js(t, r) });
    return Wn(e, e.columnGap, n);
  }
  return null;
};
ku.propTypes = {};
ku.filterProps = ["columnGap"];
const Pu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ns(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: js(t, r) });
    return Wn(e, e.rowGap, n);
  }
  return null;
};
Pu.propTypes = {};
Pu.filterProps = ["rowGap"];
const F4 = ne({ prop: "gridColumn" }),
  B4 = ne({ prop: "gridRow" }),
  z4 = ne({ prop: "gridAutoFlow" }),
  U4 = ne({ prop: "gridAutoColumns" }),
  H4 = ne({ prop: "gridAutoRows" }),
  W4 = ne({ prop: "gridTemplateColumns" }),
  G4 = ne({ prop: "gridTemplateRows" }),
  K4 = ne({ prop: "gridTemplateAreas" }),
  Y4 = ne({ prop: "gridArea" });
wu(Cu, ku, Pu, F4, B4, z4, U4, H4, W4, G4, K4, Y4);
function Vo(e, t) {
  return t === "grey" ? t : e;
}
const X4 = ne({ prop: "color", themeKey: "palette", transform: Vo }),
  Q4 = ne({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Vo,
  }),
  Z4 = ne({ prop: "backgroundColor", themeKey: "palette", transform: Vo });
wu(X4, Q4, Z4);
function It(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const q4 = ne({ prop: "width", transform: It }),
  Ip = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || Op[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: It(n) };
      };
      return Wn(e, e.maxWidth, t);
    }
    return null;
  };
Ip.filterProps = ["maxWidth"];
const J4 = ne({ prop: "minWidth", transform: It }),
  e5 = ne({ prop: "height", transform: It }),
  t5 = ne({ prop: "maxHeight", transform: It }),
  n5 = ne({ prop: "minHeight", transform: It });
ne({ prop: "size", cssProperty: "width", transform: It });
ne({ prop: "size", cssProperty: "height", transform: It });
const r5 = ne({ prop: "boxSizing" });
wu(q4, Ip, J4, e5, t5, n5, r5);
const o5 = {
    border: { themeKey: "borders", transform: Tn },
    borderTop: { themeKey: "borders", transform: Tn },
    borderRight: { themeKey: "borders", transform: Tn },
    borderBottom: { themeKey: "borders", transform: Tn },
    borderLeft: { themeKey: "borders", transform: Tn },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Tu },
    color: { themeKey: "palette", transform: Vo },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Vo,
    },
    backgroundColor: { themeKey: "palette", transform: Vo },
    p: { style: Oe },
    pt: { style: Oe },
    pr: { style: Oe },
    pb: { style: Oe },
    pl: { style: Oe },
    px: { style: Oe },
    py: { style: Oe },
    padding: { style: Oe },
    paddingTop: { style: Oe },
    paddingRight: { style: Oe },
    paddingBottom: { style: Oe },
    paddingLeft: { style: Oe },
    paddingX: { style: Oe },
    paddingY: { style: Oe },
    paddingInline: { style: Oe },
    paddingInlineStart: { style: Oe },
    paddingInlineEnd: { style: Oe },
    paddingBlock: { style: Oe },
    paddingBlockStart: { style: Oe },
    paddingBlockEnd: { style: Oe },
    m: { style: $e },
    mt: { style: $e },
    mr: { style: $e },
    mb: { style: $e },
    ml: { style: $e },
    mx: { style: $e },
    my: { style: $e },
    margin: { style: $e },
    marginTop: { style: $e },
    marginRight: { style: $e },
    marginBottom: { style: $e },
    marginLeft: { style: $e },
    marginX: { style: $e },
    marginY: { style: $e },
    marginInline: { style: $e },
    marginInlineStart: { style: $e },
    marginInlineEnd: { style: $e },
    marginBlock: { style: $e },
    marginBlockStart: { style: $e },
    marginBlockEnd: { style: $e },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Cu },
    rowGap: { style: Pu },
    columnGap: { style: ku },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: It },
    maxWidth: { style: Ip },
    minWidth: { transform: It },
    height: { transform: It },
    maxHeight: { transform: It },
    minHeight: { transform: It },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  Np = o5;
function i5(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function s5(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function a5() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: f } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const d = xu(o, u) || {};
    return f
      ? f(s)
      : Wn(s, r, (m) => {
          let g = Tl(d, c, m);
          return (
            m === g &&
              typeof m == "string" &&
              (g = Tl(d, c, `${n}${m === "default" ? "" : Ue(m)}`, m)),
            l === !1 ? g : { [l]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const s = (r = i.unstable_sxConfig) != null ? r : Np;
    function a(l) {
      let u = l;
      if (typeof l == "function") u = l(i);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const c = w4(i.breakpoints),
        f = Object.keys(c);
      let d = c;
      return (
        Object.keys(u).forEach((h) => {
          const m = s5(u[h], i);
          if (m != null)
            if (typeof m == "object")
              if (s[h]) d = Ui(d, e(h, m, i, s));
              else {
                const g = Wn({ theme: i }, m, (T) => ({ [h]: T }));
                i5(g, m) ? (d[h] = t({ sx: m, theme: i })) : (d = Ui(d, g));
              }
            else d = Ui(d, e(h, m, i, s));
        }),
        T4(f, d)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const cS = a5();
cS.filterProps = ["sx"];
const jp = cS,
  l5 = ["breakpoints", "palette", "spacing", "shape"];
function Dp(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    s = wt(e, l5),
    a = v4(n),
    l = A4(o);
  let u = fn(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: _({ mode: "light" }, r),
      spacing: l,
      shape: _({}, x4, i),
    },
    s
  );
  return (
    (u = t.reduce((c, f) => fn(c, f), u)),
    (u.unstable_sxConfig = _({}, Np, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return jp({ sx: f, theme: this });
    }),
    u
  );
}
function u5(e) {
  return Object.keys(e).length === 0;
}
function c5(e = null) {
  const t = x.useContext(aS);
  return !t || u5(t) ? e : t;
}
const f5 = Dp();
function fS(e = f5) {
  return c5(e);
}
function dS(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = dS(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Ve() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = dS(e)) && (r && (r += " "), (r += t));
  return r;
}
const d5 = ["variant"];
function h0(e) {
  return e.length === 0;
}
function pS(e) {
  const { variant: t } = e,
    n = wt(e, d5);
  let r = t || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === "color"
          ? (r += h0(r) ? e[o] : Ue(e[o]))
          : (r += `${h0(r) ? o : Ue(o)}${Ue(e[o].toString())}`);
      }),
    r
  );
}
const p5 = [
  "name",
  "slot",
  "skipVariantsResolver",
  "skipSx",
  "overridesResolver",
];
function h5(e) {
  return Object.keys(e).length === 0;
}
function m5(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const g5 = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  Cl = (e) => {
    const t = {};
    return (
      e &&
        e.forEach((n) => {
          const r = pS(n.props);
          t[r] = n.style;
        }),
      t
    );
  },
  y5 = (e, t) => {
    let n = [];
    return (
      t &&
        t.components &&
        t.components[e] &&
        t.components[e].variants &&
        (n = t.components[e].variants),
      Cl(n)
    );
  },
  kl = (e, t, n) => {
    const { ownerState: r = {} } = e,
      o = [];
    return (
      n &&
        n.forEach((i) => {
          let s = !0;
          Object.keys(i.props).forEach((a) => {
            r[a] !== i.props[a] && e[a] !== i.props[a] && (s = !1);
          }),
            s && o.push(t[pS(i.props)]);
        }),
      o
    );
  },
  v5 = (e, t, n, r) => {
    var o;
    const i =
      n == null || (o = n.components) == null || (o = o[r]) == null
        ? void 0
        : o.variants;
    return kl(e, t, i);
  };
function Hi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const S5 = Dp(),
  x5 = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Fa({ defaultTheme: e, theme: t, themeId: n }) {
  return h5(t) ? e : t[n] || t;
}
function w5(e) {
  return e ? (t, n) => n[e] : null;
}
const m0 = ({ styledArg: e, props: t, defaultTheme: n, themeId: r }) => {
  const o = e(
    _({}, t, { theme: Fa(_({}, t, { defaultTheme: n, themeId: r })) })
  );
  let i;
  if ((o && o.variants && ((i = o.variants), delete o.variants), i)) {
    const s = kl(t, Cl(i), i);
    return [o, ...s];
  }
  return o;
};
function T5(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = S5,
      rootShouldForwardProp: r = Hi,
      slotShouldForwardProp: o = Hi,
    } = e,
    i = (s) =>
      jp(_({}, s, { theme: Fa(_({}, s, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      m4(s, (S) => S.filter((C) => !(C != null && C.__mui_systemSx)));
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: f,
          overridesResolver: d = w5(x5(u)),
        } = a,
        h = wt(a, p5),
        m = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        g = f || !1;
      let T,
        v = Hi;
      u === "Root" || u === "root"
        ? (v = r)
        : u
        ? (v = o)
        : m5(s) && (v = void 0);
      const p = h4(s, _({ shouldForwardProp: v, label: T }, h)),
        y = (S, ...C) => {
          const k = C
            ? C.map((b) => {
                if (typeof b == "function" && b.__emotion_real !== b)
                  return (I) =>
                    m0({ styledArg: b, props: I, defaultTheme: n, themeId: t });
                if (or(b)) {
                  let I = b,
                    B;
                  return (
                    b &&
                      b.variants &&
                      ((B = b.variants),
                      delete I.variants,
                      (I = (G) => {
                        let D = b;
                        return (
                          kl(G, Cl(B), B).forEach((K) => {
                            D = fn(D, K);
                          }),
                          D
                        );
                      })),
                    I
                  );
                }
                return b;
              })
            : [];
          let w = S;
          if (or(S)) {
            let b;
            S &&
              S.variants &&
              ((b = S.variants),
              delete w.variants,
              (w = (I) => {
                let B = S;
                return (
                  kl(I, Cl(b), b).forEach((D) => {
                    B = fn(B, D);
                  }),
                  B
                );
              }));
          } else
            typeof S == "function" &&
              S.__emotion_real !== S &&
              (w = (b) =>
                m0({ styledArg: S, props: b, defaultTheme: n, themeId: t }));
          l &&
            d &&
            k.push((b) => {
              const I = Fa(_({}, b, { defaultTheme: n, themeId: t })),
                B = g5(l, I);
              if (B) {
                const G = {};
                return (
                  Object.entries(B).forEach(([D, U]) => {
                    G[D] =
                      typeof U == "function" ? U(_({}, b, { theme: I })) : U;
                  }),
                  d(b, G)
                );
              }
              return null;
            }),
            l &&
              !m &&
              k.push((b) => {
                const I = Fa(_({}, b, { defaultTheme: n, themeId: t }));
                return v5(b, y5(l, I), I, l);
              }),
            g || k.push(i);
          const E = k.length - C.length;
          if (Array.isArray(S) && E > 0) {
            const b = new Array(E).fill("");
            (w = [...S, ...b]), (w.raw = [...S.raw, ...b]);
          }
          const O = p(w, ...k);
          return s.muiName && (O.muiName = s.muiName), O;
        };
      return p.withConfig && (y.withConfig = p.withConfig), y;
    }
  );
}
function C5(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : W1(t.components[n].defaultProps, r);
}
function k5({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = fS(n);
  return r && (o = o[r] || o), C5({ theme: o, name: t, props: e });
}
function Vp(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function P5(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function qr(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return qr(P5(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(qo(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error(qo(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function Eu(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function E5(e) {
  e = qr(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), Eu({ type: a, values: l })
  );
}
function g0(e) {
  e = qr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? qr(E5(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function b5(e, t) {
  const n = g0(e),
    r = g0(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Pl(e, t) {
  return (
    (e = qr(e)),
    (t = Vp(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Eu(e)
  );
}
function Fp(e, t) {
  if (((e = qr(e)), (t = Vp(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Eu(e);
}
function Bp(e, t) {
  if (((e = qr(e)), (t = Vp(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Eu(e);
}
function R5(e, t) {
  return _(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
const A5 = ["mode", "contrastThreshold", "tonalOffset"],
  y0 = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: gs.white, default: gs.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  _c = {
    text: {
      primary: gs.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: gs.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function v0(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = Bp(e.main, o))
      : t === "dark" && (e.dark = Fp(e.main, i)));
}
function _5(e = "light") {
  return e === "dark"
    ? { main: co[200], light: co[50], dark: co[400] }
    : { main: co[700], light: co[400], dark: co[800] };
}
function $5(e = "light") {
  return e === "dark"
    ? { main: uo[200], light: uo[50], dark: uo[400] }
    : { main: uo[500], light: uo[300], dark: uo[700] };
}
function O5(e = "light") {
  return e === "dark"
    ? { main: lo[500], light: lo[300], dark: lo[700] }
    : { main: lo[700], light: lo[400], dark: lo[800] };
}
function L5(e = "light") {
  return e === "dark"
    ? { main: fo[400], light: fo[300], dark: fo[700] }
    : { main: fo[700], light: fo[500], dark: fo[900] };
}
function M5(e = "light") {
  return e === "dark"
    ? { main: po[400], light: po[300], dark: po[700] }
    : { main: po[800], light: po[500], dark: po[900] };
}
function I5(e = "light") {
  return e === "dark"
    ? { main: Ti[400], light: Ti[300], dark: Ti[700] }
    : { main: "#ed6c02", light: Ti[500], dark: Ti[900] };
}
function N5(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = wt(e, A5),
    i = e.primary || _5(t),
    s = e.secondary || $5(t),
    a = e.error || O5(t),
    l = e.info || L5(t),
    u = e.success || M5(t),
    c = e.warning || I5(t);
  function f(g) {
    return b5(g, _c.text.primary) >= n ? _c.text.primary : y0.text.primary;
  }
  const d = ({
      color: g,
      name: T,
      mainShade: v = 500,
      lightShade: p = 300,
      darkShade: y = 700,
    }) => {
      if (
        ((g = _({}, g)),
        !g.main && g[v] && (g.main = g[v]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(qo(11, T ? ` (${T})` : "", v));
      if (typeof g.main != "string")
        throw new Error(qo(12, T ? ` (${T})` : "", JSON.stringify(g.main)));
      return (
        v0(g, "light", p, r),
        v0(g, "dark", y, r),
        g.contrastText || (g.contrastText = f(g.main)),
        g
      );
    },
    h = { dark: _c, light: y0 };
  return fn(
    _(
      {
        common: _({}, gs),
        mode: t,
        primary: d({ color: i, name: "primary" }),
        secondary: d({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: d({ color: a, name: "error" }),
        warning: d({ color: c, name: "warning" }),
        info: d({ color: l, name: "info" }),
        success: d({ color: u, name: "success" }),
        grey: JE,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: d,
        tonalOffset: r,
      },
      h[t]
    ),
    o
  );
}
const j5 = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function D5(e) {
  return Math.round(e * 1e5) / 1e5;
}
const S0 = { textTransform: "uppercase" },
  x0 = '"Roboto", "Helvetica", "Arial", sans-serif';
function V5(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = x0,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: f,
    } = n,
    d = wt(n, j5),
    h = o / 14,
    m = f || ((v) => `${(v / u) * h}rem`),
    g = (v, p, y, S, C) =>
      _(
        { fontFamily: r, fontWeight: v, fontSize: m(p), lineHeight: y },
        r === x0 ? { letterSpacing: `${D5(S / p)}em` } : {},
        C,
        c
      ),
    T = {
      h1: g(i, 96, 1.167, -1.5),
      h2: g(i, 60, 1.2, -0.5),
      h3: g(s, 48, 1.167, 0),
      h4: g(s, 34, 1.235, 0.25),
      h5: g(s, 24, 1.334, 0),
      h6: g(a, 20, 1.6, 0.15),
      subtitle1: g(s, 16, 1.75, 0.15),
      subtitle2: g(a, 14, 1.57, 0.1),
      body1: g(s, 16, 1.5, 0.15),
      body2: g(s, 14, 1.43, 0.15),
      button: g(a, 14, 1.75, 0.4, S0),
      caption: g(s, 12, 1.66, 0.4),
      overline: g(s, 12, 2.66, 1, S0),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return fn(
    _(
      {
        htmlFontSize: u,
        pxToRem: m,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      T
    ),
    d,
    { clone: !1 }
  );
}
const F5 = 0.2,
  B5 = 0.14,
  z5 = 0.12;
function Te(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${F5})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${B5})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${z5})`,
  ].join(",");
}
const U5 = [
    "none",
    Te(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Te(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Te(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Te(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Te(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Te(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Te(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Te(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Te(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Te(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Te(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Te(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Te(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Te(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Te(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Te(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Te(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Te(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Te(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Te(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Te(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Te(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Te(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Te(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  H5 = U5,
  W5 = ["duration", "easing", "delay"],
  G5 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  K5 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function w0(e) {
  return `${Math.round(e)}ms`;
}
function Y5(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function X5(e) {
  const t = _({}, G5, e.easing),
    n = _({}, K5, e.duration);
  return _(
    {
      getAutoHeightDuration: Y5,
      create: (o = ["all"], i = {}) => {
        const {
          duration: s = n.standard,
          easing: a = t.easeInOut,
          delay: l = 0,
        } = i;
        return (
          wt(i, W5),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof s == "string" ? s : w0(s)} ${a} ${
                  typeof l == "string" ? l : w0(l)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const Q5 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  Z5 = Q5,
  q5 = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function J5(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    s = wt(e, q5);
  if (e.vars) throw new Error(qo(18));
  const a = N5(r),
    l = Dp(e);
  let u = fn(l, {
    mixins: R5(l.breakpoints, n),
    palette: a,
    shadows: H5.slice(),
    typography: V5(a, i),
    transitions: X5(o),
    zIndex: _({}, Z5),
  });
  return (
    (u = fn(u, s)),
    (u = t.reduce((c, f) => fn(c, f), u)),
    (u.unstable_sxConfig = _({}, Np, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return jp({ sx: f, theme: this });
    }),
    u
  );
}
const e3 = J5(),
  zp = e3;
function t3() {
  const e = fS(zp);
  return e[kp] || e;
}
function bu({ props: e, name: t }) {
  return k5({ props: e, name: t, defaultTheme: zp, themeId: kp });
}
const hS = (e) => Hi(e) && e !== "classes",
  mS = Hi,
  n3 = T5({ themeId: kp, defaultTheme: zp, rootShouldForwardProp: hS }),
  ht = n3;
function id(e, t) {
  return (
    (id = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    id(e, t)
  );
}
function r3(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    id(e, t);
}
const T0 = ge.createContext(null);
function o3(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Up(e, t) {
  var n = function (i) {
      return t && x.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      x.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function i3(e, t) {
  (e = e || {}), (t = t || {});
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var s,
    a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        a[r[l][s]] = n(u);
      }
    a[l] = n(l);
  }
  for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
  return a;
}
function Fr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function s3(e, t) {
  return Up(e.children, function (n) {
    return x.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Fr(n, "appear", e),
      enter: Fr(n, "enter", e),
      exit: Fr(n, "exit", e),
    });
  });
}
function a3(e, t, n) {
  var r = Up(e.children),
    o = i3(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (x.isValidElement(s)) {
        var a = i in t,
          l = i in r,
          u = t[i],
          c = x.isValidElement(u) && !u.props.in;
        l && (!a || c)
          ? (o[i] = x.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: Fr(s, "exit", e),
              enter: Fr(s, "enter", e),
            }))
          : !l && a && !c
          ? (o[i] = x.cloneElement(s, { in: !1 }))
          : l &&
            a &&
            x.isValidElement(u) &&
            (o[i] = x.cloneElement(s, {
              onExited: n.bind(null, s),
              in: u.props.in,
              exit: Fr(s, "exit", e),
              enter: Fr(s, "enter", e),
            }));
      }
    }),
    o
  );
}
var l3 =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  u3 = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  Hp = (function (e) {
    r3(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = i.handleExited.bind(o3(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? s3(o, a) : a3(o, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var s = Up(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = _({}, a.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          a = wt(o, ["component", "childFactory"]),
          l = this.state.contextValue,
          u = l3(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? ge.createElement(T0.Provider, { value: l }, u)
            : ge.createElement(
                T0.Provider,
                { value: l },
                ge.createElement(i, a, u)
              )
        );
      }),
      t
    );
  })(ge.Component);
Hp.propTypes = {};
Hp.defaultProps = u3;
const c3 = Hp;
function f3(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: a,
      onExited: l,
      timeout: u,
    } = e,
    [c, f] = x.useState(!1),
    d = Ve(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    h = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    m = Ve(n.child, c && n.childLeaving, r && n.childPulsate);
  return (
    !a && !c && f(!0),
    x.useEffect(() => {
      if (!a && l != null) {
        const g = setTimeout(l, u);
        return () => {
          clearTimeout(g);
        };
      }
    }, [l, a, u]),
    P.jsx("span", {
      className: d,
      style: h,
      children: P.jsx("span", { className: m }),
    })
  );
}
const d3 = Ms("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  Gt = d3,
  p3 = ["center", "classes", "className"];
let Ru = (e) => e,
  C0,
  k0,
  P0,
  E0;
const sd = 550,
  h3 = 80,
  m3 = $p(
    C0 ||
      (C0 = Ru`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  g3 = $p(
    k0 ||
      (k0 = Ru`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  y3 = $p(
    P0 ||
      (P0 = Ru`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  v3 = ht("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  S3 = ht(f3, { name: "MuiTouchRipple", slot: "Ripple" })(
    E0 ||
      (E0 = Ru`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    Gt.rippleVisible,
    m3,
    sd,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Gt.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    Gt.child,
    Gt.childLeaving,
    g3,
    sd,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Gt.childPulsate,
    y3,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  x3 = x.forwardRef(function (t, n) {
    const r = bu({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: s } = r,
      a = wt(r, p3),
      [l, u] = x.useState([]),
      c = x.useRef(0),
      f = x.useRef(null);
    x.useEffect(() => {
      f.current && (f.current(), (f.current = null));
    }, [l]);
    const d = x.useRef(!1),
      h = x.useRef(0),
      m = x.useRef(null),
      g = x.useRef(null);
    x.useEffect(
      () => () => {
        h.current && clearTimeout(h.current);
      },
      []
    );
    const T = x.useCallback(
        (S) => {
          const {
            pulsate: C,
            rippleX: k,
            rippleY: w,
            rippleSize: E,
            cb: O,
          } = S;
          u((b) => [
            ...b,
            P.jsx(
              S3,
              {
                classes: {
                  ripple: Ve(i.ripple, Gt.ripple),
                  rippleVisible: Ve(i.rippleVisible, Gt.rippleVisible),
                  ripplePulsate: Ve(i.ripplePulsate, Gt.ripplePulsate),
                  child: Ve(i.child, Gt.child),
                  childLeaving: Ve(i.childLeaving, Gt.childLeaving),
                  childPulsate: Ve(i.childPulsate, Gt.childPulsate),
                },
                timeout: sd,
                pulsate: C,
                rippleX: k,
                rippleY: w,
                rippleSize: E,
              },
              c.current
            ),
          ]),
            (c.current += 1),
            (f.current = O);
        },
        [i]
      ),
      v = x.useCallback(
        (S = {}, C = {}, k = () => {}) => {
          const {
            pulsate: w = !1,
            center: E = o || C.pulsate,
            fakeElement: O = !1,
          } = C;
          if ((S == null ? void 0 : S.type) === "mousedown" && d.current) {
            d.current = !1;
            return;
          }
          (S == null ? void 0 : S.type) === "touchstart" && (d.current = !0);
          const b = O ? null : g.current,
            I = b
              ? b.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let B, G, D;
          if (
            E ||
            S === void 0 ||
            (S.clientX === 0 && S.clientY === 0) ||
            (!S.clientX && !S.touches)
          )
            (B = Math.round(I.width / 2)), (G = Math.round(I.height / 2));
          else {
            const { clientX: U, clientY: K } =
              S.touches && S.touches.length > 0 ? S.touches[0] : S;
            (B = Math.round(U - I.left)), (G = Math.round(K - I.top));
          }
          if (E)
            (D = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3)),
              D % 2 === 0 && (D += 1);
          else {
            const U =
                Math.max(Math.abs((b ? b.clientWidth : 0) - B), B) * 2 + 2,
              K = Math.max(Math.abs((b ? b.clientHeight : 0) - G), G) * 2 + 2;
            D = Math.sqrt(U ** 2 + K ** 2);
          }
          S != null && S.touches
            ? m.current === null &&
              ((m.current = () => {
                T({ pulsate: w, rippleX: B, rippleY: G, rippleSize: D, cb: k });
              }),
              (h.current = setTimeout(() => {
                m.current && (m.current(), (m.current = null));
              }, h3)))
            : T({ pulsate: w, rippleX: B, rippleY: G, rippleSize: D, cb: k });
        },
        [o, T]
      ),
      p = x.useCallback(() => {
        v({}, { pulsate: !0 });
      }, [v]),
      y = x.useCallback((S, C) => {
        if (
          (clearTimeout(h.current),
          (S == null ? void 0 : S.type) === "touchend" && m.current)
        ) {
          m.current(),
            (m.current = null),
            (h.current = setTimeout(() => {
              y(S, C);
            }));
          return;
        }
        (m.current = null),
          u((k) => (k.length > 0 ? k.slice(1) : k)),
          (f.current = C);
      }, []);
    return (
      x.useImperativeHandle(n, () => ({ pulsate: p, start: v, stop: y }), [
        p,
        v,
        y,
      ]),
      P.jsx(
        v3,
        _({ className: Ve(Gt.root, i.root, s), ref: g }, a, {
          children: P.jsx(c3, { component: null, exit: !0, children: l }),
        })
      )
    );
  }),
  w3 = x3;
function T3(e) {
  return Ls("MuiButtonBase", e);
}
const C3 = Ms("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  k3 = C3,
  P3 = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  E3 = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      s = su({ root: ["root", t && "disabled", n && "focusVisible"] }, T3, o);
    return n && r && (s.root += ` ${r}`), s;
  },
  b3 = ht("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${k3.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  R3 = x.forwardRef(function (t, n) {
    const r = bu({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: a,
        component: l = "button",
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: f = !1,
        focusRipple: d = !1,
        LinkComponent: h = "a",
        onBlur: m,
        onClick: g,
        onContextMenu: T,
        onDragLeave: v,
        onFocus: p,
        onFocusVisible: y,
        onKeyDown: S,
        onKeyUp: C,
        onMouseDown: k,
        onMouseLeave: w,
        onMouseUp: E,
        onTouchEnd: O,
        onTouchMove: b,
        onTouchStart: I,
        tabIndex: B = 0,
        TouchRippleProps: G,
        touchRippleRef: D,
        type: U,
      } = r,
      K = wt(r, P3),
      re = x.useRef(null),
      R = x.useRef(null),
      L = ys(R, D),
      { isFocusVisibleRef: V, onFocus: N, onBlur: X, ref: le } = H1(),
      [ae, Pe] = x.useState(!1);
    u && ae && Pe(!1),
      x.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            Pe(!0), re.current.focus();
          },
        }),
        []
      );
    const [ue, We] = x.useState(!1);
    x.useEffect(() => {
      We(!0);
    }, []);
    const Xe = ue && !c && !u;
    x.useEffect(() => {
      ae && d && !c && ue && R.current.pulsate();
    }, [c, d, ae, ue]);
    function fe(j, lt, oe = f) {
      return Vr(
        (pe) => (lt && lt(pe), !oe && R.current && R.current[j](pe), !0)
      );
    }
    const Qe = fe("start", k),
      de = fe("stop", T),
      Ht = fe("stop", v),
      at = fe("stop", E),
      _e = fe("stop", (j) => {
        ae && j.preventDefault(), w && w(j);
      }),
      Se = fe("start", I),
      Yn = fe("stop", O),
      bn = fe("stop", b),
      Rn = fe(
        "stop",
        (j) => {
          X(j), V.current === !1 && Pe(!1), m && m(j);
        },
        !1
      ),
      ui = Vr((j) => {
        re.current || (re.current = j.currentTarget),
          N(j),
          V.current === !0 && (Pe(!0), y && y(j)),
          p && p(j);
      }),
      Ge = () => {
        const j = re.current;
        return l && l !== "button" && !(j.tagName === "A" && j.href);
      },
      pn = x.useRef(!1),
      zs = Vr((j) => {
        d &&
          !pn.current &&
          ae &&
          R.current &&
          j.key === " " &&
          ((pn.current = !0),
          R.current.stop(j, () => {
            R.current.start(j);
          })),
          j.target === j.currentTarget &&
            Ge() &&
            j.key === " " &&
            j.preventDefault(),
          S && S(j),
          j.target === j.currentTarget &&
            Ge() &&
            j.key === "Enter" &&
            !u &&
            (j.preventDefault(), g && g(j));
      }),
      Us = Vr((j) => {
        d &&
          j.key === " " &&
          R.current &&
          ae &&
          !j.defaultPrevented &&
          ((pn.current = !1),
          R.current.stop(j, () => {
            R.current.pulsate(j);
          })),
          C && C(j),
          g &&
            j.target === j.currentTarget &&
            Ge() &&
            j.key === " " &&
            !j.defaultPrevented &&
            g(j);
      });
    let Rr = l;
    Rr === "button" && (K.href || K.to) && (Rr = h);
    const $ = {};
    Rr === "button"
      ? (($.type = U === void 0 ? "button" : U), ($.disabled = u))
      : (!K.href && !K.to && ($.role = "button"),
        u && ($["aria-disabled"] = u));
    const F = ys(n, le, re),
      H = _({}, r, {
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: f,
        focusRipple: d,
        tabIndex: B,
        focusVisible: ae,
      }),
      Q = E3(H);
    return P.jsxs(
      b3,
      _(
        {
          as: Rr,
          className: Ve(Q.root, a),
          ownerState: H,
          onBlur: Rn,
          onClick: g,
          onContextMenu: de,
          onFocus: ui,
          onKeyDown: zs,
          onKeyUp: Us,
          onMouseDown: Qe,
          onMouseLeave: _e,
          onMouseUp: at,
          onDragLeave: Ht,
          onTouchEnd: Yn,
          onTouchMove: bn,
          onTouchStart: Se,
          ref: F,
          tabIndex: u ? -1 : B,
          type: U,
        },
        $,
        K,
        { children: [s, Xe ? P.jsx(w3, _({ ref: L, center: i }, G)) : null] }
      )
    );
  }),
  A3 = R3;
function Wi(e) {
  return typeof e == "string";
}
function _3(e, t, n) {
  return e === void 0 || Wi(e)
    ? t
    : _({}, t, { ownerState: _({}, t.ownerState, n) });
}
function $3(e, t, n = (r, o) => r === o) {
  return e.length === t.length && e.every((r, o) => n(r, t[o]));
}
function Ba(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function O3(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function b0(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function L3(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const h = Ve(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      m = _(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      g = _({}, n, o, r);
    return (
      h.length > 0 && (g.className = h),
      Object.keys(m).length > 0 && (g.style = m),
      { props: g, internalRef: void 0 }
    );
  }
  const s = Ba(_({}, o, r)),
    a = b0(r),
    l = b0(o),
    u = t(s),
    c = Ve(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    f = _(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    d = _({}, u, n, l, a);
  return (
    c.length > 0 && (d.className = c),
    Object.keys(f).length > 0 && (d.style = f),
    { props: d, internalRef: u.ref }
  );
}
const M3 = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function Qn(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: i = !1,
    } = e,
    s = wt(e, M3),
    a = i ? {} : O3(r, o),
    { props: l, internalRef: u } = L3(_({}, s, { externalSlotProps: a })),
    c = ys(
      u,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return _3(n, _({}, l, { ref: c }), o);
}
const I3 = 2;
function gS(e, t) {
  return e - t;
}
function ki(e, t, n) {
  return e == null ? t : Math.min(Math.max(t, e), n);
}
function R0(e, t) {
  var n;
  const { index: r } =
    (n = e.reduce((o, i, s) => {
      const a = Math.abs(t - i);
      return o === null || a < o.distance || a === o.distance
        ? { distance: a, index: s }
        : o;
    }, null)) != null
      ? n
      : {};
  return r;
}
function ca(e, t) {
  if (t.current !== void 0 && e.changedTouches) {
    const n = e;
    for (let r = 0; r < n.changedTouches.length; r += 1) {
      const o = n.changedTouches[r];
      if (o.identifier === t.current) return { x: o.clientX, y: o.clientY };
    }
    return !1;
  }
  return { x: e.clientX, y: e.clientY };
}
function El(e, t, n) {
  return ((e - t) * 100) / (n - t);
}
function N3(e, t, n) {
  return (n - t) * e + t;
}
function j3(e) {
  if (Math.abs(e) < 1) {
    const n = e.toExponential().split("e-"),
      r = n[0].split(".")[1];
    return (r ? r.length : 0) + parseInt(n[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function D3(e, t, n) {
  const r = Math.round((e - n) / t) * t + n;
  return Number(r.toFixed(j3(t)));
}
function A0({ values: e, newValue: t, index: n }) {
  const r = e.slice();
  return (r[n] = t), r.sort(gS);
}
function fa({ sliderRef: e, activeIndex: t, setActive: n }) {
  var r, o;
  const i = Na(e.current);
  if (
    !((r = e.current) != null && r.contains(i.activeElement)) ||
    Number(
      i == null || (o = i.activeElement) == null
        ? void 0
        : o.getAttribute("data-index")
    ) !== t
  ) {
    var s;
    (s = e.current) == null ||
      s.querySelector(`[type="range"][data-index="${t}"]`).focus();
  }
  n && n(t);
}
function da(e, t) {
  return typeof e == "number" && typeof t == "number"
    ? e === t
    : typeof e == "object" && typeof t == "object"
    ? $3(e, t)
    : !1;
}
const V3 = {
    horizontal: {
      offset: (e) => ({ left: `${e}%` }),
      leap: (e) => ({ width: `${e}%` }),
    },
    "horizontal-reverse": {
      offset: (e) => ({ right: `${e}%` }),
      leap: (e) => ({ width: `${e}%` }),
    },
    vertical: {
      offset: (e) => ({ bottom: `${e}%` }),
      leap: (e) => ({ height: `${e}%` }),
    },
  },
  F3 = (e) => e;
let pa;
function $c() {
  return (
    pa === void 0 &&
      (typeof CSS < "u" && typeof CSS.supports == "function"
        ? (pa = CSS.supports("touch-action", "none"))
        : (pa = !0)),
    pa
  );
}
function B3(e) {
  const {
      "aria-labelledby": t,
      defaultValue: n,
      disabled: r = !1,
      disableSwap: o = !1,
      isRtl: i = !1,
      marks: s = !1,
      max: a = 100,
      min: l = 0,
      name: u,
      onChange: c,
      onChangeCommitted: f,
      orientation: d = "horizontal",
      rootRef: h,
      scale: m = F3,
      step: g = 1,
      tabIndex: T,
      value: v,
    } = e,
    p = x.useRef(),
    [y, S] = x.useState(-1),
    [C, k] = x.useState(-1),
    [w, E] = x.useState(!1),
    O = x.useRef(0),
    [b, I] = U1({ controlled: v, default: n ?? l, name: "Slider" }),
    B =
      c &&
      (($, F, H) => {
        const Q = $.nativeEvent || $,
          j = new Q.constructor(Q.type, Q);
        Object.defineProperty(j, "target", {
          writable: !0,
          value: { value: F, name: u },
        }),
          c(j, F, H);
      }),
    G = Array.isArray(b);
  let D = G ? b.slice().sort(gS) : [b];
  D = D.map(($) => ki($, l, a));
  const U =
      s === !0 && g !== null
        ? [...Array(Math.floor((a - l) / g) + 1)].map(($, F) => ({
            value: l + g * F,
          }))
        : s || [],
    K = U.map(($) => $.value),
    { isFocusVisibleRef: re, onBlur: R, onFocus: L, ref: V } = H1(),
    [N, X] = x.useState(-1),
    le = x.useRef(),
    ae = ys(V, le),
    Pe = ys(h, ae),
    ue = ($) => (F) => {
      var H;
      const Q = Number(F.currentTarget.getAttribute("data-index"));
      L(F),
        re.current === !0 && X(Q),
        k(Q),
        $ == null || (H = $.onFocus) == null || H.call($, F);
    },
    We = ($) => (F) => {
      var H;
      R(F),
        re.current === !1 && X(-1),
        k(-1),
        $ == null || (H = $.onBlur) == null || H.call($, F);
    };
  z1(() => {
    if (r && le.current.contains(document.activeElement)) {
      var $;
      ($ = document.activeElement) == null || $.blur();
    }
  }, [r]),
    r && y !== -1 && S(-1),
    r && N !== -1 && X(-1);
  const Xe = ($) => (F) => {
      var H;
      (H = $.onChange) == null || H.call($, F);
      const Q = Number(F.currentTarget.getAttribute("data-index")),
        j = D[Q],
        lt = K.indexOf(j);
      let oe = F.target.valueAsNumber;
      if (U && g == null) {
        const pe = K[K.length - 1];
        oe > pe
          ? (oe = pe)
          : oe < K[0]
          ? (oe = K[0])
          : (oe = oe < j ? K[lt - 1] : K[lt + 1]);
      }
      if (((oe = ki(oe, l, a)), G)) {
        o && (oe = ki(oe, D[Q - 1] || -1 / 0, D[Q + 1] || 1 / 0));
        const pe = oe;
        oe = A0({ values: D, newValue: oe, index: Q });
        let Ie = Q;
        o || (Ie = oe.indexOf(pe)), fa({ sliderRef: le, activeIndex: Ie });
      }
      I(oe), X(Q), B && !da(oe, b) && B(F, oe, Q), f && f(F, oe);
    },
    fe = x.useRef();
  let Qe = d;
  i && d === "horizontal" && (Qe += "-reverse");
  const de = ({ finger: $, move: F = !1 }) => {
      const { current: H } = le,
        {
          width: Q,
          height: j,
          bottom: lt,
          left: oe,
        } = H.getBoundingClientRect();
      let pe;
      Qe.indexOf("vertical") === 0
        ? (pe = (lt - $.y) / j)
        : (pe = ($.x - oe) / Q),
        Qe.indexOf("-reverse") !== -1 && (pe = 1 - pe);
      let Ie;
      if (((Ie = N3(pe, l, a)), g)) Ie = D3(Ie, g, l);
      else {
        const ci = R0(K, Ie);
        Ie = K[ci];
      }
      Ie = ki(Ie, l, a);
      let hn = 0;
      if (G) {
        F ? (hn = fe.current) : (hn = R0(D, Ie)),
          o && (Ie = ki(Ie, D[hn - 1] || -1 / 0, D[hn + 1] || 1 / 0));
        const ci = Ie;
        (Ie = A0({ values: D, newValue: Ie, index: hn })),
          (o && F) || ((hn = Ie.indexOf(ci)), (fe.current = hn));
      }
      return { newValue: Ie, activeIndex: hn };
    },
    Ht = Vr(($) => {
      const F = ca($, p);
      if (!F) return;
      if (((O.current += 1), $.type === "mousemove" && $.buttons === 0)) {
        at($);
        return;
      }
      const { newValue: H, activeIndex: Q } = de({ finger: F, move: !0 });
      fa({ sliderRef: le, activeIndex: Q, setActive: S }),
        I(H),
        !w && O.current > I3 && E(!0),
        B && !da(H, b) && B($, H, Q);
    }),
    at = Vr(($) => {
      const F = ca($, p);
      if ((E(!1), !F)) return;
      const { newValue: H } = de({ finger: F, move: !0 });
      S(-1),
        $.type === "touchend" && k(-1),
        f && f($, H),
        (p.current = void 0),
        Se();
    }),
    _e = Vr(($) => {
      if (r) return;
      $c() || $.preventDefault();
      const F = $.changedTouches[0];
      F != null && (p.current = F.identifier);
      const H = ca($, p);
      if (H !== !1) {
        const { newValue: j, activeIndex: lt } = de({ finger: H });
        fa({ sliderRef: le, activeIndex: lt, setActive: S }),
          I(j),
          B && !da(j, b) && B($, j, lt);
      }
      O.current = 0;
      const Q = Na(le.current);
      Q.addEventListener("touchmove", Ht), Q.addEventListener("touchend", at);
    }),
    Se = x.useCallback(() => {
      const $ = Na(le.current);
      $.removeEventListener("mousemove", Ht),
        $.removeEventListener("mouseup", at),
        $.removeEventListener("touchmove", Ht),
        $.removeEventListener("touchend", at);
    }, [at, Ht]);
  x.useEffect(() => {
    const { current: $ } = le;
    return (
      $.addEventListener("touchstart", _e, { passive: $c() }),
      () => {
        $.removeEventListener("touchstart", _e, { passive: $c() }), Se();
      }
    );
  }, [Se, _e]),
    x.useEffect(() => {
      r && Se();
    }, [r, Se]);
  const Yn = ($) => (F) => {
      var H;
      if (
        ((H = $.onMouseDown) == null || H.call($, F),
        r || F.defaultPrevented || F.button !== 0)
      )
        return;
      F.preventDefault();
      const Q = ca(F, p);
      if (Q !== !1) {
        const { newValue: lt, activeIndex: oe } = de({ finger: Q });
        fa({ sliderRef: le, activeIndex: oe, setActive: S }),
          I(lt),
          B && !da(lt, b) && B(F, lt, oe);
      }
      O.current = 0;
      const j = Na(le.current);
      j.addEventListener("mousemove", Ht), j.addEventListener("mouseup", at);
    },
    bn = El(G ? D[0] : l, l, a),
    Rn = El(D[D.length - 1], l, a) - bn,
    ui = ($ = {}) => {
      const F = Ba($),
        H = { onMouseDown: Yn(F || {}) },
        Q = _({}, F, H);
      return _({}, $, { ref: Pe }, Q);
    },
    Ge = ($) => (F) => {
      var H;
      (H = $.onMouseOver) == null || H.call($, F);
      const Q = Number(F.currentTarget.getAttribute("data-index"));
      k(Q);
    },
    pn = ($) => (F) => {
      var H;
      (H = $.onMouseLeave) == null || H.call($, F), k(-1);
    };
  return {
    active: y,
    axis: Qe,
    axisProps: V3,
    dragging: w,
    focusedThumbIndex: N,
    getHiddenInputProps: ($ = {}) => {
      var F;
      const H = Ba($),
        Q = {
          onChange: Xe(H || {}),
          onFocus: ue(H || {}),
          onBlur: We(H || {}),
        },
        j = _({}, H, Q);
      return _(
        {
          tabIndex: T,
          "aria-labelledby": t,
          "aria-orientation": d,
          "aria-valuemax": m(a),
          "aria-valuemin": m(l),
          name: u,
          type: "range",
          min: e.min,
          max: e.max,
          step:
            e.step === null && e.marks
              ? "any"
              : (F = e.step) != null
              ? F
              : void 0,
          disabled: r,
        },
        $,
        j,
        {
          style: _({}, ub, {
            direction: i ? "rtl" : "ltr",
            width: "100%",
            height: "100%",
          }),
        }
      );
    },
    getRootProps: ui,
    getThumbProps: ($ = {}) => {
      const F = Ba($),
        H = { onMouseOver: Ge(F || {}), onMouseLeave: pn(F || {}) };
      return _({}, $, F, H);
    },
    marks: U,
    open: C,
    range: G,
    rootRef: Pe,
    trackLeap: Rn,
    trackOffset: bn,
    values: D,
    getThumbStyle: ($) => ({
      pointerEvents: y !== -1 && y !== $ ? "none" : void 0,
    }),
  };
}
const z3 = x.createContext(void 0),
  U3 = z3;
function H3() {
  return x.useContext(U3);
}
function W3(e) {
  return Ls("PrivateSwitchBase", e);
}
Ms("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const G3 = [
    "autoFocus",
    "checked",
    "checkedIcon",
    "className",
    "defaultChecked",
    "disabled",
    "disableFocusRipple",
    "edge",
    "icon",
    "id",
    "inputProps",
    "inputRef",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "readOnly",
    "required",
    "tabIndex",
    "type",
    "value",
  ],
  K3 = (e) => {
    const { classes: t, checked: n, disabled: r, edge: o } = e,
      i = {
        root: ["root", n && "checked", r && "disabled", o && `edge${Ue(o)}`],
        input: ["input"],
      };
    return su(i, W3, t);
  },
  Y3 = ht(A3)(({ ownerState: e }) =>
    _(
      { padding: 9, borderRadius: "50%" },
      e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
      e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 }
    )
  ),
  X3 = ht("input", { shouldForwardProp: hS })({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  Q3 = x.forwardRef(function (t, n) {
    const {
        autoFocus: r,
        checked: o,
        checkedIcon: i,
        className: s,
        defaultChecked: a,
        disabled: l,
        disableFocusRipple: u = !1,
        edge: c = !1,
        icon: f,
        id: d,
        inputProps: h,
        inputRef: m,
        name: g,
        onBlur: T,
        onChange: v,
        onFocus: p,
        readOnly: y,
        required: S = !1,
        tabIndex: C,
        type: k,
        value: w,
      } = t,
      E = wt(t, G3),
      [O, b] = U1({
        controlled: o,
        default: !!a,
        name: "SwitchBase",
        state: "checked",
      }),
      I = H3(),
      B = (L) => {
        p && p(L), I && I.onFocus && I.onFocus(L);
      },
      G = (L) => {
        T && T(L), I && I.onBlur && I.onBlur(L);
      },
      D = (L) => {
        if (L.nativeEvent.defaultPrevented) return;
        const V = L.target.checked;
        b(V), v && v(L, V);
      };
    let U = l;
    I && typeof U > "u" && (U = I.disabled);
    const K = k === "checkbox" || k === "radio",
      re = _({}, t, {
        checked: O,
        disabled: U,
        disableFocusRipple: u,
        edge: c,
      }),
      R = K3(re);
    return P.jsxs(
      Y3,
      _(
        {
          component: "span",
          className: Ve(R.root, s),
          centerRipple: !0,
          focusRipple: !u,
          disabled: U,
          tabIndex: null,
          role: void 0,
          onFocus: B,
          onBlur: G,
          ownerState: re,
          ref: n,
        },
        E,
        {
          children: [
            P.jsx(
              X3,
              _(
                {
                  autoFocus: r,
                  checked: o,
                  defaultChecked: a,
                  className: R.input,
                  disabled: U,
                  id: K ? d : void 0,
                  name: g,
                  onChange: D,
                  readOnly: y,
                  ref: m,
                  required: S,
                  ownerState: re,
                  tabIndex: C,
                  type: k,
                },
                k === "checkbox" && w === void 0 ? {} : { value: w },
                h
              )
            ),
            O ? i : f,
          ],
        }
      )
    );
  }),
  Z3 = Q3,
  q3 = (e) => !e || !Wi(e),
  J3 = q3;
function eR(e) {
  return Ls("MuiSlider", e);
}
const tR = Ms("MuiSlider", [
    "root",
    "active",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "dragging",
    "focusVisible",
    "mark",
    "markActive",
    "marked",
    "markLabel",
    "markLabelActive",
    "rail",
    "sizeSmall",
    "thumb",
    "thumbColorPrimary",
    "thumbColorSecondary",
    "thumbColorError",
    "thumbColorSuccess",
    "thumbColorInfo",
    "thumbColorWarning",
    "track",
    "trackInverted",
    "trackFalse",
    "thumbSizeSmall",
    "valueLabel",
    "valueLabelOpen",
    "valueLabelCircle",
    "valueLabelLabel",
    "vertical",
  ]),
  an = tR,
  nR = (e) => {
    const { open: t } = e;
    return {
      offset: Ve(t && an.valueLabelOpen),
      circle: an.valueLabelCircle,
      label: an.valueLabelLabel,
    };
  };
function rR(e) {
  const { children: t, className: n, value: r } = e,
    o = nR(e);
  return t
    ? x.cloneElement(
        t,
        { className: Ve(t.props.className) },
        P.jsxs(x.Fragment, {
          children: [
            t.props.children,
            P.jsx("span", {
              className: Ve(o.offset, n),
              "aria-hidden": !0,
              children: P.jsx("span", {
                className: o.circle,
                children: P.jsx("span", { className: o.label, children: r }),
              }),
            }),
          ],
        })
      )
    : null;
}
const oR = [
  "aria-label",
  "aria-valuetext",
  "aria-labelledby",
  "component",
  "components",
  "componentsProps",
  "color",
  "classes",
  "className",
  "disableSwap",
  "disabled",
  "getAriaLabel",
  "getAriaValueText",
  "marks",
  "max",
  "min",
  "name",
  "onChange",
  "onChangeCommitted",
  "orientation",
  "size",
  "step",
  "scale",
  "slotProps",
  "slots",
  "tabIndex",
  "track",
  "value",
  "valueLabelDisplay",
  "valueLabelFormat",
];
function _0(e) {
  return e;
}
const iR = ht("span", {
    name: "MuiSlider",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`color${Ue(n.color)}`],
        n.size !== "medium" && t[`size${Ue(n.size)}`],
        n.marked && t.marked,
        n.orientation === "vertical" && t.vertical,
        n.track === "inverted" && t.trackInverted,
        n.track === !1 && t.trackFalse,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    _(
      {
        borderRadius: 12,
        boxSizing: "content-box",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        touchAction: "none",
        color: (e.vars || e).palette[t.color].main,
        WebkitTapHighlightColor: "transparent",
      },
      t.orientation === "horizontal" &&
        _(
          {
            height: 4,
            width: "100%",
            padding: "13px 0",
            "@media (pointer: coarse)": { padding: "20px 0" },
          },
          t.size === "small" && { height: 2 },
          t.marked && { marginBottom: 20 }
        ),
      t.orientation === "vertical" &&
        _(
          {
            height: "100%",
            width: 4,
            padding: "0 13px",
            "@media (pointer: coarse)": { padding: "0 20px" },
          },
          t.size === "small" && { width: 2 },
          t.marked && { marginRight: 44 }
        ),
      {
        "@media print": { colorAdjust: "exact" },
        [`&.${an.disabled}`]: {
          pointerEvents: "none",
          cursor: "default",
          color: (e.vars || e).palette.grey[400],
        },
        [`&.${an.dragging}`]: {
          [`& .${an.thumb}, & .${an.track}`]: { transition: "none" },
        },
      }
    )
  ),
  sR = ht("span", {
    name: "MuiSlider",
    slot: "Rail",
    overridesResolver: (e, t) => t.rail,
  })(({ ownerState: e }) =>
    _(
      {
        display: "block",
        position: "absolute",
        borderRadius: "inherit",
        backgroundColor: "currentColor",
        opacity: 0.38,
      },
      e.orientation === "horizontal" && {
        width: "100%",
        height: "inherit",
        top: "50%",
        transform: "translateY(-50%)",
      },
      e.orientation === "vertical" && {
        height: "100%",
        width: "inherit",
        left: "50%",
        transform: "translateX(-50%)",
      },
      e.track === "inverted" && { opacity: 1 }
    )
  ),
  aR = ht("span", {
    name: "MuiSlider",
    slot: "Track",
    overridesResolver: (e, t) => t.track,
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light"
        ? Bp(e.palette[t.color].main, 0.62)
        : Fp(e.palette[t.color].main, 0.5);
    return _(
      {
        display: "block",
        position: "absolute",
        borderRadius: "inherit",
        border: "1px solid currentColor",
        backgroundColor: "currentColor",
        transition: e.transitions.create(
          ["left", "width", "bottom", "height"],
          { duration: e.transitions.duration.shortest }
        ),
      },
      t.size === "small" && { border: "none" },
      t.orientation === "horizontal" && {
        height: "inherit",
        top: "50%",
        transform: "translateY(-50%)",
      },
      t.orientation === "vertical" && {
        width: "inherit",
        left: "50%",
        transform: "translateX(-50%)",
      },
      t.track === !1 && { display: "none" },
      t.track === "inverted" && {
        backgroundColor: e.vars ? e.vars.palette.Slider[`${t.color}Track`] : n,
        borderColor: e.vars ? e.vars.palette.Slider[`${t.color}Track`] : n,
      }
    );
  }),
  lR = ht("span", {
    name: "MuiSlider",
    slot: "Thumb",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.thumb,
        t[`thumbColor${Ue(n.color)}`],
        n.size !== "medium" && t[`thumbSize${Ue(n.size)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    _(
      {
        position: "absolute",
        width: 20,
        height: 20,
        boxSizing: "border-box",
        borderRadius: "50%",
        outline: 0,
        backgroundColor: "currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: e.transitions.create(["box-shadow", "left", "bottom"], {
          duration: e.transitions.duration.shortest,
        }),
      },
      t.size === "small" && { width: 12, height: 12 },
      t.orientation === "horizontal" && {
        top: "50%",
        transform: "translate(-50%, -50%)",
      },
      t.orientation === "vertical" && {
        left: "50%",
        transform: "translate(-50%, 50%)",
      },
      {
        "&:before": _(
          {
            position: "absolute",
            content: '""',
            borderRadius: "inherit",
            width: "100%",
            height: "100%",
            boxShadow: (e.vars || e).shadows[2],
          },
          t.size === "small" && { boxShadow: "none" }
        ),
        "&::after": {
          position: "absolute",
          content: '""',
          borderRadius: "50%",
          width: 42,
          height: 42,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        [`&:hover, &.${an.focusVisible}`]: {
          boxShadow: `0px 0px 0px 8px ${
            e.vars
              ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`
              : Pl(e.palette[t.color].main, 0.16)
          }`,
          "@media (hover: none)": { boxShadow: "none" },
        },
        [`&.${an.active}`]: {
          boxShadow: `0px 0px 0px 14px ${
            e.vars
              ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`
              : Pl(e.palette[t.color].main, 0.16)
          }`,
        },
        [`&.${an.disabled}`]: { "&:hover": { boxShadow: "none" } },
      }
    )
  ),
  uR = ht(rR, {
    name: "MuiSlider",
    slot: "ValueLabel",
    overridesResolver: (e, t) => t.valueLabel,
  })(({ theme: e, ownerState: t }) =>
    _(
      {
        [`&.${an.valueLabelOpen}`]: {
          transform: `${
            t.orientation === "vertical"
              ? "translateY(-50%)"
              : "translateY(-100%)"
          } scale(1)`,
        },
        zIndex: 1,
        whiteSpace: "nowrap",
      },
      e.typography.body2,
      {
        fontWeight: 500,
        transition: e.transitions.create(["transform"], {
          duration: e.transitions.duration.shortest,
        }),
        transform: `${
          t.orientation === "vertical"
            ? "translateY(-50%)"
            : "translateY(-100%)"
        } scale(0)`,
        position: "absolute",
        backgroundColor: (e.vars || e).palette.grey[600],
        borderRadius: 2,
        color: (e.vars || e).palette.common.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.25rem 0.75rem",
      },
      t.orientation === "horizontal" && {
        top: "-10px",
        transformOrigin: "bottom center",
        "&:before": {
          position: "absolute",
          content: '""',
          width: 8,
          height: 8,
          transform: "translate(-50%, 50%) rotate(45deg)",
          backgroundColor: "inherit",
          bottom: 0,
          left: "50%",
        },
      },
      t.orientation === "vertical" && {
        right: t.size === "small" ? "20px" : "30px",
        top: "50%",
        transformOrigin: "right center",
        "&:before": {
          position: "absolute",
          content: '""',
          width: 8,
          height: 8,
          transform: "translate(-50%, -50%) rotate(45deg)",
          backgroundColor: "inherit",
          right: -8,
          top: "50%",
        },
      },
      t.size === "small" && {
        fontSize: e.typography.pxToRem(12),
        padding: "0.25rem 0.5rem",
      }
    )
  ),
  cR = ht("span", {
    name: "MuiSlider",
    slot: "Mark",
    shouldForwardProp: (e) => mS(e) && e !== "markActive",
    overridesResolver: (e, t) => {
      const { markActive: n } = e;
      return [t.mark, n && t.markActive];
    },
  })(({ theme: e, ownerState: t, markActive: n }) =>
    _(
      {
        position: "absolute",
        width: 2,
        height: 2,
        borderRadius: 1,
        backgroundColor: "currentColor",
      },
      t.orientation === "horizontal" && {
        top: "50%",
        transform: "translate(-1px, -50%)",
      },
      t.orientation === "vertical" && {
        left: "50%",
        transform: "translate(-50%, 1px)",
      },
      n && {
        backgroundColor: (e.vars || e).palette.background.paper,
        opacity: 0.8,
      }
    )
  ),
  fR = ht("span", {
    name: "MuiSlider",
    slot: "MarkLabel",
    shouldForwardProp: (e) => mS(e) && e !== "markLabelActive",
    overridesResolver: (e, t) => t.markLabel,
  })(({ theme: e, ownerState: t, markLabelActive: n }) =>
    _(
      {},
      e.typography.body2,
      {
        color: (e.vars || e).palette.text.secondary,
        position: "absolute",
        whiteSpace: "nowrap",
      },
      t.orientation === "horizontal" && {
        top: 30,
        transform: "translateX(-50%)",
        "@media (pointer: coarse)": { top: 40 },
      },
      t.orientation === "vertical" && {
        left: 36,
        transform: "translateY(50%)",
        "@media (pointer: coarse)": { left: 44 },
      },
      n && { color: (e.vars || e).palette.text.primary }
    )
  ),
  dR = (e) => {
    const {
        disabled: t,
        dragging: n,
        marked: r,
        orientation: o,
        track: i,
        classes: s,
        color: a,
        size: l,
      } = e,
      u = {
        root: [
          "root",
          t && "disabled",
          n && "dragging",
          r && "marked",
          o === "vertical" && "vertical",
          i === "inverted" && "trackInverted",
          i === !1 && "trackFalse",
          a && `color${Ue(a)}`,
          l && `size${Ue(l)}`,
        ],
        rail: ["rail"],
        track: ["track"],
        mark: ["mark"],
        markActive: ["markActive"],
        markLabel: ["markLabel"],
        markLabelActive: ["markLabelActive"],
        valueLabel: ["valueLabel"],
        thumb: [
          "thumb",
          t && "disabled",
          l && `thumbSize${Ue(l)}`,
          a && `thumbColor${Ue(a)}`,
        ],
        active: ["active"],
        disabled: ["disabled"],
        focusVisible: ["focusVisible"],
      };
    return su(u, eR, s);
  },
  pR = ({ children: e }) => e,
  hR = x.forwardRef(function (t, n) {
    var r, o, i, s, a, l, u, c, f, d, h, m, g, T, v, p, y, S, C, k, w, E, O, b;
    const I = bu({ props: t, name: "MuiSlider" }),
      G = t3().direction === "rtl",
      {
        "aria-label": D,
        "aria-valuetext": U,
        "aria-labelledby": K,
        component: re = "span",
        components: R = {},
        componentsProps: L = {},
        color: V = "primary",
        classes: N,
        className: X,
        disableSwap: le = !1,
        disabled: ae = !1,
        getAriaLabel: Pe,
        getAriaValueText: ue,
        marks: We = !1,
        max: Xe = 100,
        min: fe = 0,
        orientation: Qe = "horizontal",
        size: de = "medium",
        step: Ht = 1,
        scale: at = _0,
        slotProps: _e,
        slots: Se,
        track: Yn = "normal",
        valueLabelDisplay: bn = "off",
        valueLabelFormat: Rn = _0,
      } = I,
      ui = wt(I, oR),
      Ge = _({}, I, {
        isRtl: G,
        max: Xe,
        min: fe,
        classes: N,
        disabled: ae,
        disableSwap: le,
        orientation: Qe,
        marks: We,
        color: V,
        size: de,
        step: Ht,
        scale: at,
        track: Yn,
        valueLabelDisplay: bn,
        valueLabelFormat: Rn,
      }),
      {
        axisProps: pn,
        getRootProps: zs,
        getHiddenInputProps: Us,
        getThumbProps: Rr,
        open: $,
        active: F,
        axis: H,
        focusedThumbIndex: Q,
        range: j,
        dragging: lt,
        marks: oe,
        values: pe,
        trackOffset: Ie,
        trackLeap: hn,
        getThumbStyle: ci,
      } = B3(_({}, Ge, { rootRef: n }));
    (Ge.marked = oe.length > 0 && oe.some((je) => je.label)),
      (Ge.dragging = lt),
      (Ge.focusedThumbIndex = Q);
    const Ot = dR(Ge),
      Nu =
        (r = (o = Se == null ? void 0 : Se.root) != null ? o : R.Root) != null
          ? r
          : iR,
      dh =
        (i = (s = Se == null ? void 0 : Se.rail) != null ? s : R.Rail) != null
          ? i
          : sR,
      ph =
        (a = (l = Se == null ? void 0 : Se.track) != null ? l : R.Track) != null
          ? a
          : aR,
      hh =
        (u = (c = Se == null ? void 0 : Se.thumb) != null ? c : R.Thumb) != null
          ? u
          : lR,
      mh =
        (f =
          (d = Se == null ? void 0 : Se.valueLabel) != null
            ? d
            : R.ValueLabel) != null
          ? f
          : uR,
      ju =
        (h = (m = Se == null ? void 0 : Se.mark) != null ? m : R.Mark) != null
          ? h
          : cR,
      Du =
        (g =
          (T = Se == null ? void 0 : Se.markLabel) != null ? T : R.MarkLabel) !=
        null
          ? g
          : fR,
      gh =
        (v = (p = Se == null ? void 0 : Se.input) != null ? p : R.Input) != null
          ? v
          : "input",
      Vu = (y = _e == null ? void 0 : _e.root) != null ? y : L.root,
      Dx = (S = _e == null ? void 0 : _e.rail) != null ? S : L.rail,
      Fu = (C = _e == null ? void 0 : _e.track) != null ? C : L.track,
      Bu = (k = _e == null ? void 0 : _e.thumb) != null ? k : L.thumb,
      zu = (w = _e == null ? void 0 : _e.valueLabel) != null ? w : L.valueLabel,
      Vx = (E = _e == null ? void 0 : _e.mark) != null ? E : L.mark,
      Fx = (O = _e == null ? void 0 : _e.markLabel) != null ? O : L.markLabel,
      Bx = (b = _e == null ? void 0 : _e.input) != null ? b : L.input,
      zx = Qn({
        elementType: Nu,
        getSlotProps: zs,
        externalSlotProps: Vu,
        externalForwardedProps: ui,
        additionalProps: _({}, J3(Nu) && { as: re }),
        ownerState: _({}, Ge, Vu == null ? void 0 : Vu.ownerState),
        className: [Ot.root, X],
      }),
      Ux = Qn({
        elementType: dh,
        externalSlotProps: Dx,
        ownerState: Ge,
        className: Ot.rail,
      }),
      Hx = Qn({
        elementType: ph,
        externalSlotProps: Fu,
        additionalProps: { style: _({}, pn[H].offset(Ie), pn[H].leap(hn)) },
        ownerState: _({}, Ge, Fu == null ? void 0 : Fu.ownerState),
        className: Ot.track,
      }),
      Uu = Qn({
        elementType: hh,
        getSlotProps: Rr,
        externalSlotProps: Bu,
        ownerState: _({}, Ge, Bu == null ? void 0 : Bu.ownerState),
        className: Ot.thumb,
      }),
      Wx = Qn({
        elementType: mh,
        externalSlotProps: zu,
        ownerState: _({}, Ge, zu == null ? void 0 : zu.ownerState),
        className: Ot.valueLabel,
      }),
      Hu = Qn({
        elementType: ju,
        externalSlotProps: Vx,
        ownerState: Ge,
        className: Ot.mark,
      }),
      Wu = Qn({
        elementType: Du,
        externalSlotProps: Fx,
        ownerState: Ge,
        className: Ot.markLabel,
      }),
      Gx = Qn({
        elementType: gh,
        getSlotProps: Us,
        externalSlotProps: Bx,
        ownerState: Ge,
      });
    return P.jsxs(
      Nu,
      _({}, zx, {
        children: [
          P.jsx(dh, _({}, Ux)),
          P.jsx(ph, _({}, Hx)),
          oe
            .filter((je) => je.value >= fe && je.value <= Xe)
            .map((je, nt) => {
              const Gu = El(je.value, fe, Xe),
                Hs = pn[H].offset(Gu);
              let An;
              return (
                Yn === !1
                  ? (An = pe.indexOf(je.value) !== -1)
                  : (An =
                      (Yn === "normal" &&
                        (j
                          ? je.value >= pe[0] && je.value <= pe[pe.length - 1]
                          : je.value <= pe[0])) ||
                      (Yn === "inverted" &&
                        (j
                          ? je.value <= pe[0] || je.value >= pe[pe.length - 1]
                          : je.value >= pe[0]))),
                P.jsxs(
                  x.Fragment,
                  {
                    children: [
                      P.jsx(
                        ju,
                        _(
                          { "data-index": nt },
                          Hu,
                          !Wi(ju) && { markActive: An },
                          {
                            style: _({}, Hs, Hu.style),
                            className: Ve(Hu.className, An && Ot.markActive),
                          }
                        )
                      ),
                      je.label != null
                        ? P.jsx(
                            Du,
                            _(
                              { "aria-hidden": !0, "data-index": nt },
                              Wu,
                              !Wi(Du) && { markLabelActive: An },
                              {
                                style: _({}, Hs, Wu.style),
                                className: Ve(
                                  Ot.markLabel,
                                  Wu.className,
                                  An && Ot.markLabelActive
                                ),
                                children: je.label,
                              }
                            )
                          )
                        : null,
                    ],
                  },
                  nt
                )
              );
            }),
          pe.map((je, nt) => {
            const Gu = El(je, fe, Xe),
              Hs = pn[H].offset(Gu),
              An = bn === "off" ? pR : mh;
            return P.jsx(
              An,
              _(
                {},
                !Wi(An) && {
                  valueLabelFormat: Rn,
                  valueLabelDisplay: bn,
                  value: typeof Rn == "function" ? Rn(at(je), nt) : Rn,
                  index: nt,
                  open: $ === nt || F === nt || bn === "on",
                  disabled: ae,
                },
                Wx,
                {
                  children: P.jsx(
                    hh,
                    _({ "data-index": nt }, Uu, {
                      className: Ve(
                        Ot.thumb,
                        Uu.className,
                        F === nt && Ot.active,
                        Q === nt && Ot.focusVisible
                      ),
                      style: _({}, Hs, ci(nt), Uu.style),
                      children: P.jsx(
                        gh,
                        _(
                          {
                            "data-index": nt,
                            "aria-label": Pe ? Pe(nt) : D,
                            "aria-valuenow": at(je),
                            "aria-labelledby": K,
                            "aria-valuetext": ue ? ue(at(je), nt) : U,
                            value: pe[nt],
                          },
                          Gx
                        )
                      ),
                    })
                  ),
                }
              ),
              nt
            );
          }),
        ],
      })
    );
  }),
  Oc = hR;
function mR(e) {
  return Ls("MuiSwitch", e);
}
const gR = Ms("MuiSwitch", [
    "root",
    "edgeStart",
    "edgeEnd",
    "switchBase",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium",
    "checked",
    "disabled",
    "input",
    "thumb",
    "track",
  ]),
  mt = gR,
  yR = ["className", "color", "edge", "size", "sx"],
  vR = (e) => {
    const {
        classes: t,
        edge: n,
        size: r,
        color: o,
        checked: i,
        disabled: s,
      } = e,
      a = {
        root: ["root", n && `edge${Ue(n)}`, `size${Ue(r)}`],
        switchBase: [
          "switchBase",
          `color${Ue(o)}`,
          i && "checked",
          s && "disabled",
        ],
        thumb: ["thumb"],
        track: ["track"],
        input: ["input"],
      },
      l = su(a, mR, t);
    return _({}, t, l);
  },
  SR = ht("span", {
    name: "MuiSwitch",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.edge && t[`edge${Ue(n.edge)}`], t[`size${Ue(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    _(
      {
        display: "inline-flex",
        width: 34 + 12 * 2,
        height: 14 + 12 * 2,
        overflow: "hidden",
        padding: 12,
        boxSizing: "border-box",
        position: "relative",
        flexShrink: 0,
        zIndex: 0,
        verticalAlign: "middle",
        "@media print": { colorAdjust: "exact" },
      },
      e.edge === "start" && { marginLeft: -8 },
      e.edge === "end" && { marginRight: -8 },
      e.size === "small" && {
        width: 40,
        height: 24,
        padding: 7,
        [`& .${mt.thumb}`]: { width: 16, height: 16 },
        [`& .${mt.switchBase}`]: {
          padding: 4,
          [`&.${mt.checked}`]: { transform: "translateX(16px)" },
        },
      }
    )
  ),
  xR = ht(Z3, {
    name: "MuiSwitch",
    slot: "SwitchBase",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.switchBase,
        { [`& .${mt.input}`]: t.input },
        n.color !== "default" && t[`color${Ue(n.color)}`],
      ];
    },
  })(
    ({ theme: e }) => ({
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      color: e.vars
        ? e.vars.palette.Switch.defaultColor
        : `${
            e.palette.mode === "light"
              ? e.palette.common.white
              : e.palette.grey[300]
          }`,
      transition: e.transitions.create(["left", "transform"], {
        duration: e.transitions.duration.shortest,
      }),
      [`&.${mt.checked}`]: { transform: "translateX(20px)" },
      [`&.${mt.disabled}`]: {
        color: e.vars
          ? e.vars.palette.Switch.defaultDisabledColor
          : `${
              e.palette.mode === "light"
                ? e.palette.grey[100]
                : e.palette.grey[600]
            }`,
      },
      [`&.${mt.checked} + .${mt.track}`]: { opacity: 0.5 },
      [`&.${mt.disabled} + .${mt.track}`]: {
        opacity: e.vars
          ? e.vars.opacity.switchTrackDisabled
          : `${e.palette.mode === "light" ? 0.12 : 0.2}`,
      },
      [`& .${mt.input}`]: { left: "-100%", width: "300%" },
    }),
    ({ theme: e, ownerState: t }) =>
      _(
        {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : Pl(e.palette.action.active, e.palette.action.hoverOpacity),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.color !== "default" && {
          [`&.${mt.checked}`]: {
            color: (e.vars || e).palette[t.color].main,
            "&:hover": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                    e.vars.palette.action.hoverOpacity
                  })`
                : Pl(e.palette[t.color].main, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            [`&.${mt.disabled}`]: {
              color: e.vars
                ? e.vars.palette.Switch[`${t.color}DisabledColor`]
                : `${
                    e.palette.mode === "light"
                      ? Bp(e.palette[t.color].main, 0.62)
                      : Fp(e.palette[t.color].main, 0.55)
                  }`,
            },
          },
          [`&.${mt.checked} + .${mt.track}`]: {
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        }
      )
  ),
  wR = ht("span", {
    name: "MuiSwitch",
    slot: "Track",
    overridesResolver: (e, t) => t.track,
  })(({ theme: e }) => ({
    height: "100%",
    width: "100%",
    borderRadius: 14 / 2,
    zIndex: -1,
    transition: e.transitions.create(["opacity", "background-color"], {
      duration: e.transitions.duration.shortest,
    }),
    backgroundColor: e.vars
      ? e.vars.palette.common.onBackground
      : `${
          e.palette.mode === "light"
            ? e.palette.common.black
            : e.palette.common.white
        }`,
    opacity: e.vars
      ? e.vars.opacity.switchTrack
      : `${e.palette.mode === "light" ? 0.38 : 0.3}`,
  })),
  TR = ht("span", {
    name: "MuiSwitch",
    slot: "Thumb",
    overridesResolver: (e, t) => t.thumb,
  })(({ theme: e }) => ({
    boxShadow: (e.vars || e).shadows[1],
    backgroundColor: "currentColor",
    width: 20,
    height: 20,
    borderRadius: "50%",
  })),
  CR = x.forwardRef(function (t, n) {
    const r = bu({ props: t, name: "MuiSwitch" }),
      {
        className: o,
        color: i = "primary",
        edge: s = !1,
        size: a = "medium",
        sx: l,
      } = r,
      u = wt(r, yR),
      c = _({}, r, { color: i, edge: s, size: a }),
      f = vR(c),
      d = P.jsx(TR, { className: f.thumb, ownerState: c });
    return P.jsxs(SR, {
      className: Ve(f.root, o),
      sx: l,
      ownerState: c,
      children: [
        P.jsx(
          xR,
          _(
            {
              type: "checkbox",
              icon: d,
              checkedIcon: d,
              ref: n,
              ownerState: c,
            },
            u,
            { classes: _({}, f, { root: f.switchBase }) }
          )
        ),
        P.jsx(wR, { className: f.track, ownerState: c }),
      ],
    });
  }),
  kR = CR,
  yS = x.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Au = x.createContext({}),
  Wp = x.createContext(null),
  _u = typeof document < "u",
  PR = _u ? x.useLayoutEffect : x.useEffect,
  vS = x.createContext({ strict: !1 }),
  Gp = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  ER = "framerAppearId",
  SS = "data-" + Gp(ER);
function bR(e, t, n, r) {
  const { visualElement: o } = x.useContext(Au),
    i = x.useContext(vS),
    s = x.useContext(Wp),
    a = x.useContext(yS).reducedMotion,
    l = x.useRef();
  (r = r || i.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  x.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const c = x.useRef(!!n[SS]);
  return (
    PR(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    x.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((window.HandoffAppearAnimations = !1), (c.current = !1)));
    }),
    u
  );
}
function bo(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function RR(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : bo(n) && (n.current = r));
    },
    [t]
  );
}
function ws(e) {
  return typeof e == "string" || Array.isArray(e);
}
function $u(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Kp = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Yp = ["initial", ...Kp];
function Ou(e) {
  return $u(e.animate) || Yp.some((t) => ws(e[t]));
}
function xS(e) {
  return !!(Ou(e) || e.variants);
}
function AR(e, t) {
  if (Ou(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ws(n) ? n : void 0,
      animate: ws(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function _R(e) {
  const { initial: t, animate: n } = AR(e, x.useContext(Au));
  return x.useMemo(() => ({ initial: t, animate: n }), [$0(t), $0(n)]);
}
function $0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const O0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ts = {};
for (const e in O0) Ts[e] = { isEnabled: (t) => O0[e].some((n) => !!t[n]) };
function $R(e) {
  for (const t in e) Ts[t] = { ...Ts[t], ...e[t] };
}
const wS = x.createContext({}),
  TS = x.createContext({}),
  OR = Symbol.for("motionComponentSymbol");
function LR({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && $R(e);
  function i(a, l) {
    let u;
    const c = { ...x.useContext(yS), ...a, layoutId: MR(a) },
      { isStatic: f } = c,
      d = _R(a),
      h = r(a, f);
    if (!f && _u) {
      d.visualElement = bR(o, h, c, t);
      const m = x.useContext(TS),
        g = x.useContext(vS).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, g, e, m));
    }
    return x.createElement(
      Au.Provider,
      { value: d },
      u && d.visualElement
        ? x.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(o, a, RR(h, d.visualElement, l), h, f, d.visualElement)
    );
  }
  const s = x.forwardRef(i);
  return (s[OR] = o), s;
}
function MR({ layoutId: e }) {
  const t = x.useContext(wS).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function IR(e) {
  function t(r, o = {}) {
    return LR(e(r, o));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const NR = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Xp(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(NR.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const bl = {};
function jR(e) {
  Object.assign(bl, e);
}
const Ds = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  no = new Set(Ds);
function CS(e, { layout: t, layoutId: n }) {
  return (
    no.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!bl[e] || e === "opacity"))
  );
}
const _t = (e) => !!(e && e.getVelocity),
  DR = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  VR = Ds.length;
function FR(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  o
) {
  let i = "";
  for (let s = 0; s < VR; s++) {
    const a = Ds[s];
    if (e[a] !== void 0) {
      const l = DR[a] || a;
      i += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    o ? (i = o(e, r ? "" : i)) : n && r && (i = "none"),
    i
  );
}
const kS = (e) => (t) => typeof t == "string" && t.startsWith(e),
  PS = kS("--"),
  ad = kS("var(--"),
  BR =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  zR = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Tr = (e, t, n) => Math.min(Math.max(n, e), t),
  ro = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Gi = { ...ro, transform: (e) => Tr(0, 1, e) },
  ha = { ...ro, default: 1 },
  Ki = (e) => Math.round(e * 1e5) / 1e5,
  Lu = /(-)?([\d]*\.?[\d])+/g,
  ES =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  UR =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Vs(e) {
  return typeof e == "string";
}
const Fs = (e) => ({
    test: (t) => Vs(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  qn = Fs("deg"),
  En = Fs("%"),
  z = Fs("px"),
  HR = Fs("vh"),
  WR = Fs("vw"),
  L0 = {
    ...En,
    parse: (e) => En.parse(e) / 100,
    transform: (e) => En.transform(e * 100),
  },
  M0 = { ...ro, transform: Math.round },
  bS = {
    borderWidth: z,
    borderTopWidth: z,
    borderRightWidth: z,
    borderBottomWidth: z,
    borderLeftWidth: z,
    borderRadius: z,
    radius: z,
    borderTopLeftRadius: z,
    borderTopRightRadius: z,
    borderBottomRightRadius: z,
    borderBottomLeftRadius: z,
    width: z,
    maxWidth: z,
    height: z,
    maxHeight: z,
    size: z,
    top: z,
    right: z,
    bottom: z,
    left: z,
    padding: z,
    paddingTop: z,
    paddingRight: z,
    paddingBottom: z,
    paddingLeft: z,
    margin: z,
    marginTop: z,
    marginRight: z,
    marginBottom: z,
    marginLeft: z,
    rotate: qn,
    rotateX: qn,
    rotateY: qn,
    rotateZ: qn,
    scale: ha,
    scaleX: ha,
    scaleY: ha,
    scaleZ: ha,
    skew: qn,
    skewX: qn,
    skewY: qn,
    distance: z,
    translateX: z,
    translateY: z,
    translateZ: z,
    x: z,
    y: z,
    z,
    perspective: z,
    transformPerspective: z,
    opacity: Gi,
    originX: L0,
    originY: L0,
    originZ: z,
    zIndex: M0,
    fillOpacity: Gi,
    strokeOpacity: Gi,
    numOctaves: M0,
  };
function Qp(e, t, n, r) {
  const { style: o, vars: i, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (PS(f)) {
      i[f] = d;
      continue;
    }
    const h = bS[f],
      m = zR(d, h);
    if (no.has(f)) {
      if (((l = !0), (s[f] = m), !c)) continue;
      d !== (h.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (a[f] = m)) : (o[f] = m);
  }
  if (
    (t.transform ||
      (l || r
        ? (o.transform = FR(e.transform, n, c, r))
        : o.transform && (o.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: h = 0 } = a;
    o.transformOrigin = `${f} ${d} ${h}`;
  }
}
const Zp = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function RS(e, t, n) {
  for (const r in t) !_t(t[r]) && !CS(r, n) && (e[r] = t[r]);
}
function GR({ transformTemplate: e }, t, n) {
  return x.useMemo(() => {
    const r = Zp();
    return (
      Qp(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function KR(e, t, n) {
  const r = e.style || {},
    o = {};
  return (
    RS(o, r, e),
    Object.assign(o, GR(e, t, n)),
    e.transformValues ? e.transformValues(o) : o
  );
}
function YR(e, t, n) {
  const r = {},
    o = KR(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = o),
    r
  );
}
const XR = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function Rl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    XR.has(e)
  );
}
let AS = (e) => !Rl(e);
function QR(e) {
  e && (AS = (t) => (t.startsWith("on") ? !Rl(t) : e(t)));
}
try {
  QR(require("@emotion/is-prop-valid").default);
} catch {}
function ZR(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((AS(o) ||
        (n === !0 && Rl(o)) ||
        (!t && !Rl(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function I0(e, t, n) {
  return typeof e == "string" ? e : z.transform(t + n * e);
}
function qR(e, t, n) {
  const r = I0(t, e.x, e.width),
    o = I0(n, e.y, e.height);
  return `${r} ${o}`;
}
const JR = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  eA = { offset: "strokeDashoffset", array: "strokeDasharray" };
function tA(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? JR : eA;
  e[i.offset] = z.transform(-r);
  const s = z.transform(t),
    a = z.transform(n);
  e[i.array] = `${s} ${a}`;
}
function qp(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f,
  d
) {
  if ((Qp(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: m, dimensions: g } = e;
  h.transform && (g && (m.transform = h.transform), delete h.transform),
    g &&
      (o !== void 0 || i !== void 0 || m.transform) &&
      (m.transformOrigin = qR(
        g,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    s !== void 0 && tA(h, s, a, l, !1);
}
const _S = () => ({ ...Zp(), attrs: {} }),
  Jp = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function nA(e, t, n, r) {
  const o = x.useMemo(() => {
    const i = _S();
    return (
      qp(i, t, { enableHardwareAcceleration: !1 }, Jp(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    RS(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function rA(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const l = (Xp(n) ? nA : YR)(r, i, s, n),
      c = { ...ZR(r, typeof n == "string", e), ...l, ref: o },
      { children: f } = r,
      d = x.useMemo(() => (_t(f) ? f.get() : f), [f]);
    return x.createElement(n, { ...c, children: d });
  };
}
function $S(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const OS = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function LS(e, t, n, r) {
  $S(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(OS.has(o) ? o : Gp(o), t.attrs[o]);
}
function eh(e, t) {
  const { style: n } = e,
    r = {};
  for (const o in n)
    (_t(n[o]) || (t.style && _t(t.style[o])) || CS(o, e)) && (r[o] = n[o]);
  return r;
}
function MS(e, t) {
  const n = eh(e, t);
  for (const r in e)
    if (_t(e[r]) || _t(t[r])) {
      const o =
        Ds.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[o] = e[r];
    }
  return n;
}
function th(e, t, n, r = {}, o = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
  );
}
function oA(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Al = (e) => Array.isArray(e),
  iA = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  sA = (e) => (Al(e) ? e[e.length - 1] || 0 : e);
function za(e) {
  const t = _t(e) ? e.get() : e;
  return iA(t) ? t.toValue() : t;
}
function aA(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i
) {
  const s = { latestValues: lA(r, o, i, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const IS = (e) => (t, n) => {
  const r = x.useContext(Au),
    o = x.useContext(Wp),
    i = () => aA(e, t, r, o);
  return n ? i() : oA(i);
};
function lA(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const d in i) o[d] = za(i[d]);
  let { initial: s, animate: a } = e;
  const l = Ou(e),
    u = xS(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  return (
    f &&
      typeof f != "boolean" &&
      !$u(f) &&
      (Array.isArray(f) ? f : [f]).forEach((h) => {
        const m = th(e, h);
        if (!m) return;
        const { transitionEnd: g, transition: T, ...v } = m;
        for (const p in v) {
          let y = v[p];
          if (Array.isArray(y)) {
            const S = c ? y.length - 1 : 0;
            y = y[S];
          }
          y !== null && (o[p] = y);
        }
        for (const p in g) o[p] = g[p];
      }),
    o
  );
}
const Me = (e) => e;
class N0 {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function uA(e) {
  let t = new N0(),
    n = new N0(),
    r = 0,
    o = !1,
    i = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const f = c && o,
          d = f ? t : n;
        return u && s.add(l), d.add(l) && f && o && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), s.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            c(l), s.has(c) && (a.schedule(c), e());
          }
        (o = !1), i && ((i = !1), a.process(l));
      },
    };
  return a;
}
const ma = ["prepare", "read", "update", "preRender", "render", "postRender"],
  cA = 40;
function fA(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = ma.reduce((f, d) => ((f[d] = uA(() => (n = !0))), f), {}),
    s = (f) => i[f].process(o),
    a = () => {
      const f = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(f - o.timestamp, cA), 1)),
        (o.timestamp = f),
        (o.isProcessing = !0),
        ma.forEach(s),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), o.isProcessing || e(a);
    };
  return {
    schedule: ma.reduce((f, d) => {
      const h = i[d];
      return (f[d] = (m, g = !1, T = !1) => (n || l(), h.schedule(m, g, T))), f;
    }, {}),
    cancel: (f) => ma.forEach((d) => i[d].cancel(f)),
    state: o,
    steps: i,
  };
}
const {
    schedule: ve,
    cancel: Gn,
    state: Ze,
    steps: Lc,
  } = fA(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Me, !0),
  dA = {
    useVisualState: IS({
      scrapeMotionValuesFromProps: MS,
      createRenderState: _S,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        ve.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          ve.render(() => {
            qp(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Jp(t.tagName),
              e.transformTemplate
            ),
              LS(t, n);
          });
      },
    }),
  },
  pA = {
    useVisualState: IS({
      scrapeMotionValuesFromProps: eh,
      createRenderState: Zp,
    }),
  };
function hA(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Xp(e) ? dA : pA),
    preloadedFeatures: n,
    useRender: rA(t),
    createVisualElement: r,
    Component: e,
  };
}
function jn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const NS = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Mu(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const mA = (e) => (t) => NS(t) && e(t, Mu(t));
function Vn(e, t, n, r) {
  return jn(e, t, mA(n), r);
}
const gA = (e, t) => (n) => t(e(n)),
  vr = (...e) => e.reduce(gA);
function jS(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const j0 = jS("dragHorizontal"),
  D0 = jS("dragVertical");
function DS(e) {
  let t = !1;
  if (e === "y") t = D0();
  else if (e === "x") t = j0();
  else {
    const n = j0(),
      r = D0();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function VS() {
  const e = DS(!0);
  return e ? (e(), !1) : !0;
}
class br {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function V0(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    o = (i, s) => {
      if (i.type === "touch" || VS()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[r] && ve.update(() => a[r](i, s));
    };
  return Vn(e.current, n, o, { passive: !e.getProps()[r] });
}
class yA extends br {
  mount() {
    this.unmount = vr(V0(this.node, !0), V0(this.node, !1));
  }
  unmount() {}
}
class vA extends br {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = vr(
      jn(this.node.current, "focus", () => this.onFocus()),
      jn(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const FS = (e, t) => (t ? (e === t ? !0 : FS(e, t.parentElement)) : !1);
function Mc(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Mu(n));
}
class SA extends br {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Me),
      (this.removeEndListeners = Me),
      (this.removeAccessibleListeners = Me),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          i = Vn(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              ve.update(() => {
                FS(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = Vn(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = vr(i, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Mc("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && ve.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = jn(this.node.current, "keyup", s)),
              Mc("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = jn(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Mc("cancel", (i, s) => this.cancelPress(i, s));
          },
          o = jn(this.node.current, "blur", r);
        this.removeAccessibleListeners = vr(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && ve.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !VS()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && ve.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Vn(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = jn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = vr(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const ld = new WeakMap(),
  Ic = new WeakMap(),
  xA = (e) => {
    const t = ld.get(e.target);
    t && t(e);
  },
  wA = (e) => {
    e.forEach(xA);
  };
function TA({ root: e, ...t }) {
  const n = e || document;
  Ic.has(n) || Ic.set(n, {});
  const r = Ic.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(wA, { root: e, ...t })), r[o];
}
function CA(e, t, n) {
  const r = TA(t);
  return (
    ld.set(e, n),
    r.observe(e),
    () => {
      ld.delete(e), r.unobserve(e);
    }
  );
}
const kA = { some: 0, all: 1 };
class PA extends br {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : kA[o],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return CA(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(EA(t, n)) && this.startObserver();
  }
  unmount() {}
}
function EA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const bA = {
  inView: { Feature: PA },
  tap: { Feature: SA },
  focus: { Feature: vA },
  hover: { Feature: yA },
};
function BS(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function RA(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function AA(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Iu(e, t, n) {
  const r = e.getProps();
  return th(r, t, n !== void 0 ? n : r.custom, RA(e), AA(e));
}
let _A = Me,
  nh = Me;
const Sr = (e) => e * 1e3,
  Fn = (e) => e / 1e3,
  $A = { current: !1 },
  zS = (e) => Array.isArray(e) && typeof e[0] == "number";
function US(e) {
  return !!(
    !e ||
    (typeof e == "string" && HS[e]) ||
    zS(e) ||
    (Array.isArray(e) && e.every(US))
  );
}
const Oi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  HS = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Oi([0, 0.65, 0.55, 1]),
    circOut: Oi([0.55, 0, 1, 0.45]),
    backIn: Oi([0.31, 0.01, 0.66, -0.59]),
    backOut: Oi([0.33, 1.53, 0.69, 0.99]),
  };
function WS(e) {
  if (e) return zS(e) ? Oi(e) : Array.isArray(e) ? e.map(WS) : HS[e];
}
function OA(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = WS(a);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function LA(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const GS = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  MA = 1e-7,
  IA = 12;
function NA(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = GS(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > MA && ++a < IA);
  return s;
}
function Bs(e, t, n, r) {
  if (e === t && n === r) return Me;
  const o = (i) => NA(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : GS(o(i), t, r));
}
const jA = Bs(0.42, 0, 1, 1),
  DA = Bs(0, 0, 0.58, 1),
  KS = Bs(0.42, 0, 0.58, 1),
  VA = (e) => Array.isArray(e) && typeof e[0] != "number",
  YS = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  XS = (e) => (t) => 1 - e(1 - t),
  QS = (e) => 1 - Math.sin(Math.acos(e)),
  rh = XS(QS),
  FA = YS(rh),
  ZS = Bs(0.33, 1.53, 0.69, 0.99),
  oh = XS(ZS),
  BA = YS(oh),
  zA = (e) =>
    (e *= 2) < 1 ? 0.5 * oh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  UA = {
    linear: Me,
    easeIn: jA,
    easeInOut: KS,
    easeOut: DA,
    circIn: QS,
    circInOut: FA,
    circOut: rh,
    backIn: oh,
    backInOut: BA,
    backOut: ZS,
    anticipate: zA,
  },
  F0 = (e) => {
    if (Array.isArray(e)) {
      nh(e.length === 4);
      const [t, n, r, o] = e;
      return Bs(t, n, r, o);
    } else if (typeof e == "string") return UA[e];
    return e;
  },
  ih = (e, t) => (n) =>
    !!(
      (Vs(n) && UR.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  qS = (e, t, n) => (r) => {
    if (!Vs(r)) return r;
    const [o, i, s, a] = r.match(Lu);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  HA = (e) => Tr(0, 255, e),
  Nc = { ...ro, transform: (e) => Math.round(HA(e)) },
  Br = {
    test: ih("rgb", "red"),
    parse: qS("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Nc.transform(e) +
      ", " +
      Nc.transform(t) +
      ", " +
      Nc.transform(n) +
      ", " +
      Ki(Gi.transform(r)) +
      ")",
  };
function WA(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const ud = { test: ih("#"), parse: WA, transform: Br.transform },
  Ro = {
    test: ih("hsl", "hue"),
    parse: qS("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      En.transform(Ki(t)) +
      ", " +
      En.transform(Ki(n)) +
      ", " +
      Ki(Gi.transform(r)) +
      ")",
  },
  gt = {
    test: (e) => Br.test(e) || ud.test(e) || Ro.test(e),
    parse: (e) =>
      Br.test(e) ? Br.parse(e) : Ro.test(e) ? Ro.parse(e) : ud.parse(e),
    transform: (e) =>
      Vs(e) ? e : e.hasOwnProperty("red") ? Br.transform(e) : Ro.transform(e),
  },
  be = (e, t, n) => -n * e + n * t + e;
function jc(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function GA({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = jc(l, a, e + 1 / 3)), (i = jc(l, a, e)), (s = jc(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Dc = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  KA = [ud, Br, Ro],
  YA = (e) => KA.find((t) => t.test(e));
function B0(e) {
  const t = YA(e);
  let n = t.parse(e);
  return t === Ro && (n = GA(n)), n;
}
const JS = (e, t) => {
  const n = B0(e),
    r = B0(t),
    o = { ...n };
  return (i) => (
    (o.red = Dc(n.red, r.red, i)),
    (o.green = Dc(n.green, r.green, i)),
    (o.blue = Dc(n.blue, r.blue, i)),
    (o.alpha = be(n.alpha, r.alpha, i)),
    Br.transform(o)
  );
};
function XA(e) {
  var t, n;
  return (
    isNaN(e) &&
    Vs(e) &&
    (((t = e.match(Lu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(ES)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const ex = { regex: BR, countKey: "Vars", token: "${v}", parse: Me },
  tx = { regex: ES, countKey: "Colors", token: "${c}", parse: gt.parse },
  nx = { regex: Lu, countKey: "Numbers", token: "${n}", parse: ro.parse };
function Vc(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i &&
    ((e["num" + n] = i.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...i.map(o)));
}
function _l(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && Vc(n, ex), Vc(n, tx), Vc(n, nx), n;
}
function rx(e) {
  return _l(e).values;
}
function ox(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = _l(e),
    i = t.length;
  return (s) => {
    let a = o;
    for (let l = 0; l < i; l++)
      l < r
        ? (a = a.replace(ex.token, s[l]))
        : l < r + n
        ? (a = a.replace(tx.token, gt.transform(s[l])))
        : (a = a.replace(nx.token, Ki(s[l])));
    return a;
  };
}
const QA = (e) => (typeof e == "number" ? 0 : e);
function ZA(e) {
  const t = rx(e);
  return ox(e)(t.map(QA));
}
const Cr = {
    test: XA,
    parse: rx,
    createTransformer: ox,
    getAnimatableNone: ZA,
  },
  ix = (e, t) => (n) => `${n > 0 ? t : e}`;
function sx(e, t) {
  return typeof e == "number"
    ? (n) => be(e, t, n)
    : gt.test(e)
    ? JS(e, t)
    : e.startsWith("var(")
    ? ix(e, t)
    : lx(e, t);
}
const ax = (e, t) => {
    const n = [...e],
      r = n.length,
      o = e.map((i, s) => sx(i, t[s]));
    return (i) => {
      for (let s = 0; s < r; s++) n[s] = o[s](i);
      return n;
    };
  },
  qA = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const o in n)
      e[o] !== void 0 && t[o] !== void 0 && (r[o] = sx(e[o], t[o]));
    return (o) => {
      for (const i in r) n[i] = r[i](o);
      return n;
    };
  },
  lx = (e, t) => {
    const n = Cr.createTransformer(t),
      r = _l(e),
      o = _l(t);
    return r.numVars === o.numVars &&
      r.numColors === o.numColors &&
      r.numNumbers >= o.numNumbers
      ? vr(ax(r.values, o.values), n)
      : ix(e, t);
  },
  Cs = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  z0 = (e, t) => (n) => be(e, t, n);
function JA(e) {
  return typeof e == "number"
    ? z0
    : typeof e == "string"
    ? gt.test(e)
      ? JS
      : lx
    : Array.isArray(e)
    ? ax
    : typeof e == "object"
    ? qA
    : z0;
}
function e_(e, t, n) {
  const r = [],
    o = n || JA(e[0]),
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Me : t;
      a = vr(l, a);
    }
    r.push(a);
  }
  return r;
}
function ux(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((nh(i === t.length), i === 1)) return () => t[0];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = e_(t, r, o),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Cs(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => l(Tr(e[0], e[i - 1], u)) : l;
}
function t_(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Cs(0, t, r);
    e.push(be(n, 1, o));
  }
}
function n_(e) {
  const t = [0];
  return t_(t, e.length - 1), t;
}
function r_(e, t) {
  return e.map((n) => n * t);
}
function o_(e, t) {
  return e.map(() => t || KS).splice(0, e.length - 1);
}
function $l({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = VA(r) ? r.map(F0) : F0(r),
    i = { done: !1, value: t[0] },
    s = r_(n && n.length === t.length ? n : n_(t), e),
    a = ux(s, t, { ease: Array.isArray(o) ? o : o_(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
function cx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const i_ = 5;
function fx(e, t, n) {
  const r = Math.max(t - i_, 0);
  return cx(n - e(r), t - r);
}
const Fc = 0.001,
  s_ = 0.01,
  U0 = 10,
  a_ = 0.05,
  l_ = 1;
function u_({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o, i;
  _A(e <= Sr(U0));
  let s = 1 - t;
  (s = Tr(a_, l_, s)),
    (e = Tr(s_, U0, Fn(e))),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            h = cd(u, s),
            m = Math.exp(-f);
          return Fc - (d / h) * m;
        }),
        (i = (u) => {
          const f = u * s * e,
            d = f * n + n,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            m = Math.exp(-f),
            g = cd(Math.pow(u, 2), s);
          return ((-o(u) + Fc > 0 ? -1 : 1) * ((d - h) * m)) / g;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Fc + c * f;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = f_(o, i, a);
  if (((e = Sr(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const c_ = 12;
function f_(e, t, n) {
  let r = n;
  for (let o = 1; o < c_; o++) r = r - e(r) / t(r);
  return r;
}
function cd(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const d_ = ["duration", "bounce"],
  p_ = ["stiffness", "damping", "mass"];
function H0(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function h_(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!H0(e, p_) && H0(e, d_)) {
    const n = u_(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function dx({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    s = { done: !1, value: o },
    {
      stiffness: a,
      damping: l,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = h_(r),
    h = c ? -Fn(c) : 0,
    m = l / (2 * Math.sqrt(a * u)),
    g = i - o,
    T = Fn(Math.sqrt(a / u)),
    v = Math.abs(g) < 5;
  n || (n = v ? 0.01 : 2), t || (t = v ? 0.005 : 0.5);
  let p;
  if (m < 1) {
    const y = cd(T, m);
    p = (S) => {
      const C = Math.exp(-m * T * S);
      return (
        i - C * (((h + m * T * g) / y) * Math.sin(y * S) + g * Math.cos(y * S))
      );
    };
  } else if (m === 1) p = (y) => i - Math.exp(-T * y) * (g + (h + T * g) * y);
  else {
    const y = T * Math.sqrt(m * m - 1);
    p = (S) => {
      const C = Math.exp(-m * T * S),
        k = Math.min(y * S, 300);
      return (
        i - (C * ((h + m * T * g) * Math.sinh(k) + y * g * Math.cosh(k))) / y
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (y) => {
      const S = p(y);
      if (d) s.done = y >= f;
      else {
        let C = h;
        y !== 0 && (m < 1 ? (C = fx(p, y, S)) : (C = 0));
        const k = Math.abs(C) <= n,
          w = Math.abs(i - S) <= t;
        s.done = k && w;
      }
      return (s.value = s.done ? i : S), s;
    },
  };
}
function W0({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    h = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    m = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
        ? a
        : l;
  let g = n * t;
  const T = f + g,
    v = s === void 0 ? T : s(T);
  v !== T && (g = v - f);
  const p = (E) => -g * Math.exp(-E / r),
    y = (E) => v + p(E),
    S = (E) => {
      const O = p(E),
        b = y(E);
      (d.done = Math.abs(O) <= u), (d.value = d.done ? v : b);
    };
  let C, k;
  const w = (E) => {
    h(d.value) &&
      ((C = E),
      (k = dx({
        keyframes: [d.value, m(d.value)],
        velocity: fx(y, E, d.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    w(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let O = !1;
        return (
          !k && C === void 0 && ((O = !0), S(E), w(E)),
          C !== void 0 && E > C ? k.next(E - C) : (!O && S(E), d)
        );
      },
    }
  );
}
const m_ = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ve.update(t, !0),
      stop: () => Gn(t),
      now: () => (Ze.isProcessing ? Ze.timestamp : performance.now()),
    };
  },
  G0 = 2e4;
function K0(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < G0; ) (t += n), (r = e.next(t));
  return t >= G0 ? 1 / 0 : t;
}
const g_ = { decay: W0, inertia: W0, tween: $l, keyframes: $l, spring: dx };
function Ol({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = m_,
  keyframes: r,
  type: o = "keyframes",
  repeat: i = 0,
  repeatDelay: s = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let h = 1,
    m = !1,
    g,
    T;
  const v = () => {
    T = new Promise((N) => {
      g = N;
    });
  };
  v();
  let p;
  const y = g_[o] || $l;
  let S;
  y !== $l &&
    typeof r[0] != "number" &&
    ((S = ux([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const C = y({ ...d, keyframes: r });
  let k;
  a === "mirror" &&
    (k = y({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let w = "idle",
    E = null,
    O = null,
    b = null;
  C.calculatedDuration === null && i && (C.calculatedDuration = K0(C));
  const { calculatedDuration: I } = C;
  let B = 1 / 0,
    G = 1 / 0;
  I !== null && ((B = I + s), (G = B * (i + 1) - s));
  let D = 0;
  const U = (N) => {
      if (O === null) return;
      h > 0 && (O = Math.min(O, N)),
        h < 0 && (O = Math.min(N - G / h, O)),
        E !== null ? (D = E) : (D = Math.round(N - O) * h);
      const X = D - t * (h >= 0 ? 1 : -1),
        le = h >= 0 ? X < 0 : X > G;
      (D = Math.max(X, 0)), w === "finished" && E === null && (D = G);
      let ae = D,
        Pe = C;
      if (i) {
        const fe = D / B;
        let Qe = Math.floor(fe),
          de = fe % 1;
        !de && fe >= 1 && (de = 1),
          de === 1 && Qe--,
          (Qe = Math.min(Qe, i + 1));
        const Ht = !!(Qe % 2);
        Ht &&
          (a === "reverse"
            ? ((de = 1 - de), s && (de -= s / B))
            : a === "mirror" && (Pe = k));
        let at = Tr(0, 1, de);
        D > G && (at = a === "reverse" && Ht ? 1 : 0), (ae = at * B);
      }
      const ue = le ? { done: !1, value: r[0] } : Pe.next(ae);
      S && (ue.value = S(ue.value));
      let { done: We } = ue;
      !le && I !== null && (We = h >= 0 ? D >= G : D <= 0);
      const Xe = E === null && (w === "finished" || (w === "running" && We));
      return f && f(ue.value), Xe && R(), ue;
    },
    K = () => {
      p && p.stop(), (p = void 0);
    },
    re = () => {
      (w = "idle"), K(), g(), v(), (O = b = null);
    },
    R = () => {
      (w = "finished"), c && c(), K(), g();
    },
    L = () => {
      if (m) return;
      p || (p = n(U));
      const N = p.now();
      l && l(),
        E !== null ? (O = N - E) : (!O || w === "finished") && (O = N),
        w === "finished" && v(),
        (b = O),
        (E = null),
        (w = "running"),
        p.start();
    };
  e && L();
  const V = {
    then(N, X) {
      return T.then(N, X);
    },
    get time() {
      return Fn(D);
    },
    set time(N) {
      (N = Sr(N)),
        (D = N),
        E !== null || !p || h === 0 ? (E = N) : (O = p.now() - N / h);
    },
    get duration() {
      const N = C.calculatedDuration === null ? K0(C) : C.calculatedDuration;
      return Fn(N);
    },
    get speed() {
      return h;
    },
    set speed(N) {
      N === h || !p || ((h = N), (V.time = Fn(D)));
    },
    get state() {
      return w;
    },
    play: L,
    pause: () => {
      (w = "paused"), (E = D);
    },
    stop: () => {
      (m = !0), w !== "idle" && ((w = "idle"), u && u(), re());
    },
    cancel: () => {
      b !== null && U(b), re();
    },
    complete: () => {
      w = "finished";
    },
    sample: (N) => ((O = 0), U(N)),
  };
  return V;
}
function y_(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const v_ = y_(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  S_ = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  ga = 10,
  x_ = 2e4,
  w_ = (e, t) => t.type === "spring" || e === "backgroundColor" || !US(t.ease);
function T_(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (
    !(
      v_() &&
      S_.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== "mirror" &&
      o.damping !== 0 &&
      o.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    a,
    l;
  const u = () => {
    l = new Promise((p) => {
      a = p;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d, times: h } = o;
  if (w_(t, o)) {
    const p = Ol({ ...o, repeat: 0, delay: 0 });
    let y = { done: !1, value: c[0] };
    const S = [];
    let C = 0;
    for (; !y.done && C < x_; ) (y = p.sample(C)), S.push(y.value), (C += ga);
    (h = void 0), (c = S), (f = C - ga), (d = "linear");
  }
  const m = OA(e.owner.current, t, c, { ...o, duration: f, ease: d, times: h });
  o.syncStart &&
    (m.startTime = Ze.isProcessing
      ? Ze.timestamp
      : document.timeline
      ? document.timeline.currentTime
      : performance.now());
  const g = () => m.cancel(),
    T = () => {
      ve.update(g), a(), u();
    };
  return (
    (m.onfinish = () => {
      e.set(LA(c, o)), r && r(), T();
    }),
    {
      then(p, y) {
        return l.then(p, y);
      },
      attachTimeline(p) {
        return (m.timeline = p), (m.onfinish = null), Me;
      },
      get time() {
        return Fn(m.currentTime || 0);
      },
      set time(p) {
        m.currentTime = Sr(p);
      },
      get speed() {
        return m.playbackRate;
      },
      set speed(p) {
        m.playbackRate = p;
      },
      get duration() {
        return Fn(f);
      },
      play: () => {
        s || (m.play(), Gn(g));
      },
      pause: () => m.pause(),
      stop: () => {
        if (((s = !0), m.playState === "idle")) return;
        const { currentTime: p } = m;
        if (p) {
          const y = Ol({ ...o, autoplay: !1 });
          e.setWithVelocity(y.sample(p - ga).value, y.sample(p).value, ga);
        }
        T();
      },
      complete: () => m.finish(),
      cancel: T,
    }
  );
}
function C_({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Me,
      pause: Me,
      stop: Me,
      then: (i) => (i(), Promise.resolve()),
      cancel: Me,
      complete: Me,
    }
  );
  return t
    ? Ol({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o })
    : o();
}
const k_ = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  P_ = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  E_ = { type: "keyframes", duration: 0.8 },
  b_ = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  R_ = (e, { keyframes: t }) =>
    t.length > 2
      ? E_
      : no.has(e)
      ? e.startsWith("scale")
        ? P_(t[1])
        : k_
      : b_,
  fd = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (Cr.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  A_ = new Set(["brightness", "contrast", "saturate", "opacity"]);
function __(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Lu) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = A_.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const $_ = /([a-z-]*)\(.*?\)/g,
  dd = {
    ...Cr,
    getAnimatableNone: (e) => {
      const t = e.match($_);
      return t ? t.map(__).join(" ") : e;
    },
  },
  O_ = {
    ...bS,
    color: gt,
    backgroundColor: gt,
    outlineColor: gt,
    fill: gt,
    stroke: gt,
    borderColor: gt,
    borderTopColor: gt,
    borderRightColor: gt,
    borderBottomColor: gt,
    borderLeftColor: gt,
    filter: dd,
    WebkitFilter: dd,
  },
  sh = (e) => O_[e];
function px(e, t) {
  let n = sh(e);
  return (
    n !== dd && (n = Cr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const hx = (e) => /^0[^.\s]+$/.test(e);
function L_(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || hx(e);
}
function M_(e, t, n, r) {
  const o = fd(t, n);
  let i;
  Array.isArray(n) ? (i = [...n]) : (i = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let a;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? s : i[u - 1]),
      L_(i[u]) && l.push(u),
      typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (a = i[u]);
  if (o && l.length && a)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = px(t, a);
    }
  return i;
}
function I_({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function ah(e, t) {
  return e[t] || e.default || e;
}
const lh =
  (e, t, n, r = {}) =>
  (o) => {
    const i = ah(r, e) || {},
      s = i.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - Sr(s);
    const l = M_(t, e, n, i),
      u = l[0],
      c = l[l.length - 1],
      f = fd(e, u),
      d = fd(e, c);
    let h = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...i,
      delay: -a,
      onUpdate: (m) => {
        t.set(m), i.onUpdate && i.onUpdate(m);
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete();
      },
    };
    if (
      (I_(i) || (h = { ...h, ...R_(e, h) }),
      h.duration && (h.duration = Sr(h.duration)),
      h.repeatDelay && (h.repeatDelay = Sr(h.repeatDelay)),
      !f || !d || $A.current || i.type === !1)
    )
      return C_(h);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const m = T_(t, e, h);
      if (m) return m;
    }
    return Ol(h);
  };
function Ll(e) {
  return !!(_t(e) && e.add);
}
const mx = (e) => /^\-?\d*\.?\d+$/.test(e);
function uh(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ch(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class fh {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return uh(this.subscriptions, t), () => ch(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const N_ = (e) => !isNaN(parseFloat(e));
class j_ {
  constructor(t, n = {}) {
    (this.version = "10.16.12"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: i, timestamp: s } = Ze;
        this.lastUpdated !== s &&
          ((this.timeDelta = i),
          (this.lastUpdated = s),
          ve.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => ve.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = N_(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new fh());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ve.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? cx(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ei(e, t) {
  return new j_(e, t);
}
const gx = (e) => (t) => t.test(e),
  D_ = { test: (e) => e === "auto", parse: (e) => e },
  yx = [ro, z, En, qn, WR, HR, D_],
  Pi = (e) => yx.find(gx(e)),
  V_ = [...yx, gt, Cr],
  F_ = (e) => V_.find(gx(e));
function B_(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ei(n));
}
function z_(e, t) {
  const n = Iu(e, t);
  let {
    transitionEnd: r = {},
    transition: o = {},
    ...i
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = sA(i[s]);
    B_(e, s, a);
  }
}
function U_(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = i.length;
  if (s)
    for (let a = 0; a < s; a++) {
      const l = i[a],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == "string" && (mx(c) || hx(c))
            ? (c = parseFloat(c))
            : !F_(c) && Cr.test(u) && (c = px(l, u)),
          e.addValue(l, ei(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function H_(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function W_(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = H_(o, t);
    if (i !== void 0) r[o] = i;
    else {
      const s = n.getValue(o);
      s && (r[o] = s.get());
    }
  }
  return r;
}
function G_({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function vx(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: s,
    ...a
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const f in a) {
    const d = e.getValue(f),
      h = a[f];
    if (!d || h === void 0 || (c && G_(c, f))) continue;
    const m = { delay: n, elapsed: 0, ...ah(i || {}, f) };
    let g = !0;
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const p = e.getProps()[SS];
      p &&
        ((g = !1),
        (m.elapsed = window.HandoffAppearAnimations(p, f, d, ve)),
        (m.syncStart = !0));
    }
    let T = g && h === d.get();
    if (
      (m.type === "spring" && (d.getVelocity() || m.velocity) && (T = !1),
      d.animation && (T = !1),
      T)
    )
      continue;
    d.start(lh(f, d, h, e.shouldReduceMotion && no.has(f) ? { type: !1 } : m));
    const v = d.animation;
    Ll(l) && (l.add(f), v.then(() => l.remove(f))), u.push(v);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && z_(e, s);
      }),
    u
  );
}
function pd(e, t, n = {}) {
  const r = Iu(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(vx(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = o;
            return K_(e, t, u + l, c, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = o;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [i, s] : [s, i];
    return l().then(() => u());
  } else return Promise.all([i(), s(n.delay)]);
}
function K_(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(Y_)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            pd(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function Y_(e, t) {
  return e.sortNodePosition(t);
}
function X_(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => pd(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = pd(e, t, n);
  else {
    const o = typeof t == "function" ? Iu(e, t, n.custom) : t;
    r = Promise.all(vx(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const Q_ = [...Kp].reverse(),
  Z_ = Kp.length;
function q_(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => X_(e, n, r)));
}
function J_(e) {
  let t = q_(e);
  const n = t$();
  let r = !0;
  const o = (l, u) => {
    const c = Iu(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...h } = c;
      l = { ...l, ...h, ...d };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function s(l, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      h = new Set();
    let m = {},
      g = 1 / 0;
    for (let v = 0; v < Z_; v++) {
      const p = Q_[v],
        y = n[p],
        S = c[p] !== void 0 ? c[p] : f[p],
        C = ws(S),
        k = p === u ? y.isActive : null;
      k === !1 && (g = v);
      let w = S === f[p] && S !== c[p] && C;
      if (
        (w && r && e.manuallyAnimateOnMount && (w = !1),
        (y.protectedKeys = { ...m }),
        (!y.isActive && k === null) ||
          (!S && !y.prevProp) ||
          $u(S) ||
          typeof S == "boolean")
      )
        continue;
      const E = e$(y.prevProp, S);
      let O = E || (p === u && y.isActive && !w && C) || (v > g && C);
      const b = Array.isArray(S) ? S : [S];
      let I = b.reduce(o, {});
      k === !1 && (I = {});
      const { prevResolvedValues: B = {} } = y,
        G = { ...B, ...I },
        D = (U) => {
          (O = !0), h.delete(U), (y.needsAnimating[U] = !0);
        };
      for (const U in G) {
        const K = I[U],
          re = B[U];
        m.hasOwnProperty(U) ||
          (K !== re
            ? Al(K) && Al(re)
              ? !BS(K, re) || E
                ? D(U)
                : (y.protectedKeys[U] = !0)
              : K !== void 0
              ? D(U)
              : h.add(U)
            : K !== void 0 && h.has(U)
            ? D(U)
            : (y.protectedKeys[U] = !0));
      }
      (y.prevProp = S),
        (y.prevResolvedValues = I),
        y.isActive && (m = { ...m, ...I }),
        r && e.blockInitialAnimation && (O = !1),
        O &&
          !w &&
          d.push(
            ...b.map((U) => ({ animation: U, options: { type: p, ...l } }))
          );
    }
    if (h.size) {
      const v = {};
      h.forEach((p) => {
        const y = e.getBaseTarget(p);
        y !== void 0 && (v[p] = y);
      }),
        d.push({ animation: v });
    }
    let T = !!d.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (T = !1),
      (r = !1),
      T ? t(d) : Promise.resolve()
    );
  }
  function a(l, u, c) {
    var f;
    if (n[l].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((h) => {
        var m;
        return (m = h.animationState) === null || m === void 0
          ? void 0
          : m.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = s(c, l);
    for (const h in n) n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
  };
}
function e$(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !BS(t, e) : !1;
}
function _r(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function t$() {
  return {
    animate: _r(!0),
    whileInView: _r(),
    whileHover: _r(),
    whileTap: _r(),
    whileDrag: _r(),
    whileFocus: _r(),
    exit: _r(),
  };
}
class n$ extends br {
  constructor(t) {
    super(t), t.animationState || (t.animationState = J_(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), $u(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let r$ = 0;
class o$ extends br {
  constructor() {
    super(...arguments), (this.id = r$++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const i = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const i$ = { animation: { Feature: n$ }, exit: { Feature: o$ } },
  Y0 = (e, t) => Math.abs(e - t);
function s$(e, t) {
  const n = Y0(e.x, t.x),
    r = Y0(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Sx {
  constructor(t, n, { transformPagePoint: r, contextWindow: o } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const c = zc(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          d = s$(c.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !d) return;
        const { point: h } = c,
          { timestamp: m } = Ze;
        this.history.push({ ...h, timestamp: m });
        const { onStart: g, onMove: T } = this.handlers;
        f ||
          (g && g(this.lastMoveEvent, c),
          (this.startEvent = this.lastMoveEvent)),
          T && T(this.lastMoveEvent, c);
      }),
      (this.handlePointerMove = (c, f) => {
        (this.lastMoveEvent = c),
          (this.lastMoveEventInfo = Bc(f, this.transformPagePoint)),
          ve.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (c, f) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: d, onSessionEnd: h } = this.handlers,
          m = zc(
            c.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Bc(f, this.transformPagePoint),
            this.history
          );
        this.startEvent && d && d(c, m), h && h(c, m);
      }),
      !NS(t))
    )
      return;
    (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const i = Mu(t),
      s = Bc(i, this.transformPagePoint),
      { point: a } = s,
      { timestamp: l } = Ze;
    this.history = [{ ...a, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, zc(s, this.history)),
      (this.removeListeners = vr(
        Vn(this.contextWindow, "pointermove", this.handlePointerMove),
        Vn(this.contextWindow, "pointerup", this.handlePointerUp),
        Vn(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Gn(this.updatePoint);
  }
}
function Bc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function X0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function zc({ point: e }, t) {
  return {
    point: e,
    delta: X0(e, xx(t)),
    offset: X0(e, a$(t)),
    velocity: l$(t, 0.1),
  };
}
function a$(e) {
  return e[0];
}
function xx(e) {
  return e[e.length - 1];
}
function l$(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = xx(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > Sr(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Fn(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Ft(e) {
  return e.max - e.min;
}
function hd(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Q0(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = be(t.min, t.max, e.origin)),
    (e.scale = Ft(n) / Ft(t)),
    (hd(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = be(n.min, n.max, e.origin) - e.originPoint),
    (hd(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Yi(e, t, n, r) {
  Q0(e.x, t.x, n.x, r ? r.originX : void 0),
    Q0(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Z0(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ft(t));
}
function u$(e, t, n) {
  Z0(e.x, t.x, n.x), Z0(e.y, t.y, n.y);
}
function q0(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ft(t));
}
function Xi(e, t, n) {
  q0(e.x, t.x, n.x), q0(e.y, t.y, n.y);
}
function c$(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? be(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? be(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function J0(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function f$(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: J0(e.x, n, o), y: J0(e.y, t, r) };
}
function eg(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function d$(e, t) {
  return { x: eg(e.x, t.x), y: eg(e.y, t.y) };
}
function p$(e, t) {
  let n = 0.5;
  const r = Ft(e),
    o = Ft(t);
  return (
    o > r
      ? (n = Cs(t.min, t.max - r, e.min))
      : r > o && (n = Cs(e.min, e.max - o, t.min)),
    Tr(0, 1, n)
  );
}
function h$(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const md = 0.35;
function m$(e = md) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = md),
    { x: tg(e, "left", "right"), y: tg(e, "top", "bottom") }
  );
}
function tg(e, t, n) {
  return { min: ng(e, t), max: ng(e, n) };
}
function ng(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const rg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ao = () => ({ x: rg(), y: rg() }),
  og = () => ({ min: 0, max: 0 }),
  De = () => ({ x: og(), y: og() });
function yn(e) {
  return [e("x"), e("y")];
}
function wx({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function g$({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function y$(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Uc(e) {
  return e === void 0 || e === 1;
}
function gd({ scale: e, scaleX: t, scaleY: n }) {
  return !Uc(e) || !Uc(t) || !Uc(n);
}
function Lr(e) {
  return gd(e) || Tx(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Tx(e) {
  return ig(e.x) || ig(e.y);
}
function ig(e) {
  return e && e !== "0%";
}
function Ml(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function sg(e, t, n, r, o) {
  return o !== void 0 && (e = Ml(e, o, r)), Ml(e, n, r) + t;
}
function yd(e, t = 0, n = 1, r, o) {
  (e.min = sg(e.min, t, n, r, o)), (e.max = sg(e.max, t, n, r, o));
}
function Cx(e, { x: t, y: n }) {
  yd(e.x, t.translate, t.scale, t.originPoint),
    yd(e.y, n.translate, n.scale, n.originPoint);
}
function v$(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = n[a]), (s = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        _o(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Cx(e, s)),
      r && Lr(i.latestValues) && _o(e, i.latestValues));
  }
  (t.x = ag(t.x)), (t.y = ag(t.y));
}
function ag(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function tr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function lg(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    s = be(e.min, e.max, i);
  yd(e, t[n], t[r], s, t.scale);
}
const S$ = ["x", "scaleX", "originX"],
  x$ = ["y", "scaleY", "originY"];
function _o(e, t) {
  lg(e.x, t, S$), lg(e.y, t, x$);
}
function kx(e, t) {
  return wx(y$(e.getBoundingClientRect(), t));
}
function w$(e, t, n) {
  const r = kx(e, n),
    { scroll: o } = t;
  return o && (tr(r.x, o.offset.x), tr(r.y, o.offset.y)), r;
}
const Px = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  T$ = new WeakMap();
class C$ {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = De()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (l) => {
        this.stopAnimation(), n && this.snapToCursor(Mu(l, "page").point);
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = DS(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          yn((m) => {
            let g = this.getAxisMotionValue(m).get() || 0;
            if (En.test(g)) {
              const { projection: T } = this.visualElement;
              if (T && T.layout) {
                const v = T.layout.layoutBox[m];
                v && (g = Ft(v) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[m] = g;
          }),
          d && ve.update(() => d(l, u), !1, !0);
        const { animationState: h } = this.visualElement;
        h && h.setActive("whileDrag", !0);
      },
      s = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: f,
          onDirectionLock: d,
          onDrag: h,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: m } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = k$(m)),
            this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, m),
          this.updateAxis("y", u.point, m),
          this.visualElement.render(),
          h && h(l, u);
      },
      a = (l, u) => this.stop(l, u);
    this.panSession = new Sx(
      t,
      { onSessionStart: o, onStart: i, onMove: s, onSessionEnd: a },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        contextWindow: Px(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && ve.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !ya(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = c$(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && bo(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
      ? (this.constraints = f$(o.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = m$(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        yn((s) => {
          this.getAxisMotionValue(s) &&
            (this.constraints[s] = h$(o.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !bo(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = w$(r, o.root, this.visualElement.getTransformPagePoint());
    let s = d$(o.layout.layoutBox, i);
    if (n) {
      const a = n(g$(s));
      (this.hasMutatedConstraints = !!a), a && (s = wx(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = yn((c) => {
        if (!ya(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = o ? 200 : 1e6,
          h = o ? 40 : 1e7,
          m = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...f,
          };
        return this.startAxisValueAnimation(c, m);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(lh(t, r, 0, n));
  }
  stopAnimation() {
    yn((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    yn((n) => {
      const { drag: r } = this.getProps();
      if (!ya(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - be(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!bo(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    yn((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        o[s] = p$({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      yn((s) => {
        if (!ya(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(be(l, u, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    T$.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Vn(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        bo(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const s = jn(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (yn((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = md,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function ya(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function k$(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class P$ extends br {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Me),
      (this.removeListeners = Me),
      (this.controls = new C$(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Me);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ug = (e) => (t, n) => {
  e && ve.update(() => e(t, n));
};
class E$ extends br {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Me);
  }
  onPointerDown(t) {
    this.session = new Sx(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Px(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: ug(t),
      onStart: ug(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && ve.update(() => o(i, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Vn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function b$() {
  const e = x.useContext(Wp);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = x.useId();
  return x.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
const Ua = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function cg(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Ei = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (z.test(e)) e = parseFloat(e);
        else return e;
      const n = cg(e, t.target.x),
        r = cg(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  R$ = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = Cr.parse(e);
      if (o.length > 5) return r;
      const i = Cr.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const u = be(a, l, 0.5);
      return (
        typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
      );
    },
  };
class A$ extends ge.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    jR(_$),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ua.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              ve.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Ex(e) {
  const [t, n] = b$(),
    r = x.useContext(wS);
  return ge.createElement(A$, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: x.useContext(TS),
    isPresent: t,
    safeToRemove: n,
  });
}
const _$ = {
    borderRadius: {
      ...Ei,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Ei,
    borderTopRightRadius: Ei,
    borderBottomLeftRadius: Ei,
    borderBottomRightRadius: Ei,
    boxShadow: R$,
  },
  bx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  $$ = bx.length,
  fg = (e) => (typeof e == "string" ? parseFloat(e) : e),
  dg = (e) => typeof e == "number" || z.test(e);
function O$(e, t, n, r, o, i) {
  o
    ? ((e.opacity = be(0, n.opacity !== void 0 ? n.opacity : 1, L$(r))),
      (e.opacityExit = be(t.opacity !== void 0 ? t.opacity : 1, 0, M$(r))))
    : i &&
      (e.opacity = be(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < $$; s++) {
    const a = `border${bx[s]}Radius`;
    let l = pg(t, a),
      u = pg(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || dg(l) === dg(u)
        ? ((e[a] = Math.max(be(fg(l), fg(u), r), 0)),
          (En.test(u) || En.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = be(t.rotate || 0, n.rotate || 0, r));
}
function pg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const L$ = Rx(0, 0.5, rh),
  M$ = Rx(0.5, 0.95, Me);
function Rx(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Cs(e, t, r)));
}
function hg(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Wt(e, t) {
  hg(e.x, t.x), hg(e.y, t.y);
}
function mg(e, t, n, r, o) {
  return (
    (e -= t), (e = Ml(e, 1 / n, r)), o !== void 0 && (e = Ml(e, 1 / o, r)), e
  );
}
function I$(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (En.test(t) &&
      ((t = parseFloat(t)), (t = be(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = be(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = mg(e.min, t, n, a, o)),
    (e.max = mg(e.max, t, n, a, o));
}
function gg(e, t, [n, r, o], i, s) {
  I$(e, t[n], t[r], t[o], t.scale, i, s);
}
const N$ = ["x", "scaleX", "originX"],
  j$ = ["y", "scaleY", "originY"];
function yg(e, t, n, r) {
  gg(e.x, t, N$, n ? n.x : void 0, r ? r.x : void 0),
    gg(e.y, t, j$, n ? n.y : void 0, r ? r.y : void 0);
}
function vg(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ax(e) {
  return vg(e.x) && vg(e.y);
}
function D$(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function _x(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Sg(e) {
  return Ft(e.x) / Ft(e.y);
}
class V$ {
  constructor() {
    this.members = [];
  }
  add(t) {
    uh(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (ch(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function xg(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
}
const F$ = (e, t) => e.depth - t.depth;
class B$ {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    uh(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    ch(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(F$),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function z$(e, t) {
  const n = performance.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (Gn(r), e(i - t));
    };
  return ve.read(r, !0), () => Gn(r);
}
function U$(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function H$(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function W$(e, t, n) {
  const r = _t(e) ? e : ei(e);
  return r.start(lh("", r, t, n)), r.animation;
}
const wg = ["", "X", "Y", "Z"],
  G$ = { visibility: "hidden" },
  Tg = 1e3;
let K$ = 0;
const Mr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function $x({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = K$++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (Mr.totalNodes =
              Mr.resolvedTargetDeltas =
              Mr.recalculatedProjection =
                0),
            this.nodes.forEach(Q$),
            this.nodes.forEach(tO),
            this.nodes.forEach(nO),
            this.nodes.forEach(Z$),
            U$(Mr);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new B$());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new fh()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = H$(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = z$(d, 250)),
            Ua.hasAnimatedSinceResize &&
              ((Ua.hasAnimatedSinceResize = !1), this.nodes.forEach(kg));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: h,
              layout: m,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const g =
                  this.options.transition || c.getDefaultTransition() || aO,
                { onLayoutAnimationStart: T, onLayoutAnimationComplete: v } =
                  c.getProps(),
                p = !this.targetLayout || !_x(this.targetLayout, m) || h,
                y = !d && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, y);
                const S = { ...ah(g, "layout"), onPlay: T, onComplete: v };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                d || kg(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = m;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Gn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(rO),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Cg);
        return;
      }
      this.isUpdating || this.nodes.forEach(J$),
        (this.isUpdating = !1),
        this.nodes.forEach(eO),
        this.nodes.forEach(Y$),
        this.nodes.forEach(X$),
        this.clearAllSnapshots();
      const a = performance.now();
      (Ze.delta = Tr(0, 1e3 / 60, a - Ze.timestamp)),
        (Ze.timestamp = a),
        (Ze.isProcessing = !0),
        Lc.update.process(Ze),
        Lc.preRender.process(Ze),
        Lc.render.process(Ze),
        (Ze.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(q$), this.sharedNodes.forEach(oO);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ve.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ve.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = De()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !Ax(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || Lr(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        lO(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return De();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (tr(a.x, l.offset.x), tr(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = De();
      Wt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            Wt(a, s);
            const { scroll: d } = this.root;
            d && (tr(a.x, -d.offset.x), tr(a.y, -d.offset.y));
          }
          tr(a.x, c.offset.x), tr(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = De();
      Wt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          _o(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Lr(c.latestValues) && _o(l, c.latestValues);
      }
      return Lr(this.latestValues) && _o(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = De();
      Wt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Lr(u.latestValues)) continue;
        gd(u.latestValues) && u.updateSnapshot();
        const c = De(),
          f = u.measurePageBox();
        Wt(c, f),
          yg(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Lr(this.latestValues) && yg(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ze.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Ze.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = De()),
              (this.relativeTargetOrigin = De()),
              Xi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox
              ),
              Wt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = De()), (this.targetWithTransforms = De())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                u$(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Wt(this.target, this.layout.layoutBox),
                Cx(this.target, this.targetDelta))
              : Wt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = De()),
                (this.relativeTargetOrigin = De()),
                Xi(this.relativeTargetOrigin, this.target, h.target),
                Wt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Mr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          gd(this.parent.latestValues) ||
          Tx(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Ze.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Wt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        h = this.treeScale.y;
      v$(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox);
      const { target: m } = a;
      if (!m) {
        this.projectionTransform &&
          ((this.projectionDelta = Ao()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Ao()),
        (this.projectionDeltaWithTransform = Ao()));
      const g = this.projectionTransform;
      Yi(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.projectionTransform = xg(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== g ||
          this.treeScale.x !== d ||
          this.treeScale.y !== h) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", m)),
        Mr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = Ao();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = De(),
        h = l ? l.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        g = h !== m,
        T = this.getStack(),
        v = !T || T.members.length <= 1,
        p = !!(g && !v && this.options.crossfade === !0 && !this.path.some(sO));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        Pg(f.x, s.x, C),
          Pg(f.y, s.y, C),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Xi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            iO(this.relativeTarget, this.relativeTargetOrigin, d, C),
            y && D$(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = De()),
            Wt(y, this.relativeTarget)),
          g &&
            ((this.animationValues = c), O$(c, u, this.latestValues, C, p, v)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Gn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ve.update(() => {
          (Ua.hasAnimatedSinceResize = !0),
            (this.currentAnimation = W$(0, Tg, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Tg),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Ox(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || De();
          const f = Ft(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = Ft(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        Wt(a, l),
          _o(a, c),
          Yi(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new V$()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let c = 0; c < wg.length; c++) {
        const f = "rotate" + wg[c];
        l[f] && ((u[f] = l[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return G$;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = za(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = za(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !Lr(this.latestValues) &&
            ((g.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = xg(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: h, y: m } = this.projectionDelta;
      (u.transformOrigin = `${h.origin * 100}% ${m.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const g in bl) {
        if (d[g] === void 0) continue;
        const { correct: T, applyTo: v } = bl[g],
          p = u.transform === "none" ? d[g] : T(d[g], f);
        if (v) {
          const y = v.length;
          for (let S = 0; S < y; S++) u[v[S]] = p;
        } else u[g] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? za(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Cg),
        this.root.sharedNodes.clear();
    }
  };
}
function Y$(e) {
  e.updateLayout();
}
function X$(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === "size"
      ? yn((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            h = Ft(d);
          (d.min = r[f].min), (d.max = d.min + h);
        })
      : Ox(i, n.layoutBox, r) &&
        yn((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            h = Ft(r[f]);
          (d.max = d.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + h));
        });
    const a = Ao();
    Yi(a, r, n.layoutBox);
    const l = Ao();
    s ? Yi(l, e.applyTransform(o, !0), n.measuredBox) : Yi(l, r, n.layoutBox);
    const u = !Ax(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: h } = f;
        if (d && h) {
          const m = De();
          Xi(m, n.layoutBox, d.layoutBox);
          const g = De();
          Xi(g, r, h.layoutBox),
            _x(m, g) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = m),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Q$(e) {
  Mr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Z$(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function q$(e) {
  e.clearSnapshot();
}
function Cg(e) {
  e.clearMeasurements();
}
function J$(e) {
  e.isLayoutDirty = !1;
}
function eO(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function kg(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function tO(e) {
  e.resolveTargetDelta();
}
function nO(e) {
  e.calcProjection();
}
function rO(e) {
  e.resetRotation();
}
function oO(e) {
  e.removeLeadSnapshot();
}
function Pg(e, t, n) {
  (e.translate = be(t.translate, 0, n)),
    (e.scale = be(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Eg(e, t, n, r) {
  (e.min = be(t.min, n.min, r)), (e.max = be(t.max, n.max, r));
}
function iO(e, t, n, r) {
  Eg(e.x, t.x, n.x, r), Eg(e.y, t.y, n.y, r);
}
function sO(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const aO = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  bg = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  Rg = bg("applewebkit/") && !bg("chrome/") ? Math.round : Me;
function Ag(e) {
  (e.min = Rg(e.min)), (e.max = Rg(e.max));
}
function lO(e) {
  Ag(e.x), Ag(e.y);
}
function Ox(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !hd(Sg(t), Sg(n), 0.2))
  );
}
const uO = $x({
    attachResizeListener: (e, t) => jn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Hc = { current: void 0 },
  Lx = $x({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Hc.current) {
        const e = new uO({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Hc.current = e);
      }
      return Hc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  cO = {
    pan: { Feature: E$ },
    drag: { Feature: P$, ProjectionNode: Lx, MeasureLayout: Ex },
  },
  fO = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function dO(e) {
  const t = fO.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function vd(e, t, n = 1) {
  const [r, o] = dO(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return mx(s) ? parseFloat(s) : s;
  } else return ad(o) ? vd(o, t, n + 1) : o;
}
function pO(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!ad(i)) return;
      const s = vd(i, r);
      s && o.set(s);
    });
  for (const o in t) {
    const i = t[o];
    if (!ad(i)) continue;
    const s = vd(i, r);
    s && ((t[o] = s), n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const hO = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Mx = (e) => hO.has(e),
  mO = (e) => Object.keys(e).some(Mx),
  _g = (e) => e === ro || e === z,
  $g = (e, t) => parseFloat(e.split(", ")[t]),
  Og =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/);
      if (o) return $g(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? $g(i[1], e) : 0;
      }
    },
  gO = new Set(["x", "y", "z"]),
  yO = Ds.filter((e) => !gO.has(e));
function vO(e) {
  const t = [];
  return (
    yO.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const ti = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Og(4, 13),
  y: Og(5, 14),
};
ti.translateX = ti.x;
ti.translateY = ti.y;
const SO = (e, t, n) => {
    const r = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: s } = i,
      a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        a[u] = ti[u](r, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(a[u]), (e[u] = ti[u](l, i));
      }),
      e
    );
  },
  xO = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const o = Object.keys(t).filter(Mx);
    let i = [],
      s = !1;
    const a = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          f = Pi(c);
        const d = t[l];
        let h;
        if (Al(d)) {
          const m = d.length,
            g = d[0] === null ? 1 : 0;
          (c = d[g]), (f = Pi(c));
          for (let T = g; T < m && d[T] !== null; T++)
            h ? nh(Pi(d[T]) === h) : (h = Pi(d[T]));
        } else h = Pi(d);
        if (f !== h)
          if (_g(f) && _g(h)) {
            const m = u.get();
            typeof m == "string" && u.set(parseFloat(m)),
              typeof d == "string"
                ? (t[l] = parseFloat(d))
                : Array.isArray(d) && h === z && (t[l] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            h != null &&
            h.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(h.transform(c))
                : (t[l] = f.transform(d))
              : (s || ((i = vO(e)), (s = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(d));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = SO(t, e, a);
      return (
        i.length &&
          i.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        _u && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function wO(e, t, n, r) {
  return mO(t) ? xO(e, t, n, r) : { target: t, transitionEnd: r };
}
const TO = (e, t, n, r) => {
    const o = pO(e, t, r);
    return (t = o.target), (r = o.transitionEnd), wO(e, t, n, r);
  },
  Sd = { current: null },
  Ix = { current: !1 };
function CO() {
  if (((Ix.current = !0), !!_u))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Sd.current = e.matches);
      e.addListener(t), t();
    } else Sd.current = !1;
}
function kO(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o],
      s = n[o];
    if (_t(i)) e.addValue(o, i), Ll(r) && r.add(o);
    else if (_t(s)) e.addValue(o, ei(i, { owner: e })), Ll(r) && r.remove(o);
    else if (s !== i)
      if (e.hasValue(o)) {
        const a = e.getValue(o);
        !a.hasAnimated && a.set(i);
      } else {
        const a = e.getStaticValue(o);
        e.addValue(o, ei(a !== void 0 ? a : i, { owner: e }));
      }
  }
  for (const o in n) t[o] === void 0 && e.removeValue(o);
  return t;
}
const Lg = new WeakMap(),
  Nx = Object.keys(Ts),
  PO = Nx.length,
  Mg = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  EO = Yp.length;
class bO {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      visualState: i,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => ve.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = i;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = s),
      (this.isControllingVariants = Ou(n)),
      (this.isVariantNode = xS(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      a[f] !== void 0 && _t(d) && (d.set(a[f], !1), Ll(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      Lg.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Ix.current || CO(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Sd.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Lg.delete(this.current),
      this.projection && this.projection.unmount(),
      Gn(this.notifyUpdate),
      Gn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = no.has(t),
      o = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && ve.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i) {
    let s, a;
    for (let l = 0; l < PO; l++) {
      const u = Nx[l],
        {
          isEnabled: c,
          Feature: f,
          ProjectionNode: d,
          MeasureLayout: h,
        } = Ts[u];
      d && (s = d),
        c(n) &&
          (!this.features[u] && f && (this.features[u] = new f(this)),
          h && (a = h));
    }
    if (!this.projection && s) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: d,
        layoutRoot: h,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (f && bo(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: d,
        layoutRoot: h,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : De();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Mg.length; r++) {
      const o = Mg[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = kO(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < EO; r++) {
      const o = Yp[r],
        i = this.props[o];
      (ws(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ei(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      o =
        typeof r == "string" || typeof r == "object"
          ? (n = th(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !_t(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new fh()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class jx extends bO {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: o },
    i
  ) {
    let s = W_(r, t || {}, this);
    if ((o && (n && (n = o(n)), r && (r = o(r)), s && (s = o(s))), i)) {
      U_(this, r, s);
      const a = TO(this, r, s, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function RO(e) {
  return window.getComputedStyle(e);
}
class AO extends jx {
  readValueFromInstance(t, n) {
    if (no.has(n)) {
      const r = sh(n);
      return (r && r.default) || 0;
    } else {
      const r = RO(t),
        o = (PS(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return kx(t, n);
  }
  build(t, n, r, o) {
    Qp(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return eh(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    _t(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, o) {
    $S(t, n, r, o);
  }
}
class _O extends jx {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (no.has(n)) {
      const r = sh(n);
      return (r && r.default) || 0;
    }
    return (n = OS.has(n) ? n : Gp(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return De();
  }
  scrapeMotionValuesFromProps(t, n) {
    return MS(t, n);
  }
  build(t, n, r, o) {
    qp(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    LS(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = Jp(t.tagName)), super.mount(t);
  }
}
const $O = (e, t) =>
    Xp(e)
      ? new _O(t, { enableHardwareAcceleration: !1 })
      : new AO(t, { enableHardwareAcceleration: !0 }),
  OO = { layout: { ProjectionNode: Lx, MeasureLayout: Ex } },
  LO = { ...i$, ...bA, ...cO, ...OO },
  MO = IR((e, t) => hA(e, t, LO, $O));
function IO(e) {
  return $t({
    tag: "svg",
    attr: { viewBox: "0 0 16 16", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.75 8a4.5 4.5 0 0 1-8.61 1.834l-1.391.565A6.001 6.001 0 0 0 14.25 8 6 6 0 0 0 3.5 4.334V2.5H2v4l.75.75h3.5v-1.5H4.352A4.5 4.5 0 0 1 12.75 8z",
        },
      },
    ],
  })(e);
}
function NO(e) {
  return $t({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32v127.9l-22.9-14.5-9.1-6.4-9.1 6.4-22.9 14.5V32h-41.4c-22.5.2-40.6 18.8-40.6 41.4v313.2c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14V73.4c0-22.6-18.1-41.2-40.6-41.4H95.1C64.8 32 40 56.8 40 87.1v289.8c0 30.3 24.8 55.1 55.1 55.1l108-.1c4.2.1 8.3.6 12.2 1.4 15.3 3.1 26.8 16.6 26.6 32.2-.1 7.2 5.2 13.6 12.4 14.4 8.5.9 15.7-5.7 15.6-14.1-.2-15.8 11.4-29.4 26.9-32.5 3.8-.8 7.9-1.2 12-1.3l108 .1c30.3 0 55.1-24.8 55.1-55.1V87.1C472 56.8 446.3 32 416 32z",
        },
      },
    ],
  })(e);
}
function jO(e) {
  return $t({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416.3 256c0-21 13.1-38.9 31.7-46.1-4.9-20.5-13-39.7-23.7-57.1-6.4 2.8-13.2 4.3-20.1 4.3-12.6 0-25.2-4.8-34.9-14.4-14.9-14.9-18.2-36.8-10.2-55-17.3-10.7-36.6-18.8-57-23.7C295 82.5 277 95.7 256 95.7S217 82.5 209.9 64c-20.5 4.9-39.7 13-57.1 23.7 8.1 18.1 4.7 40.1-10.2 55-9.6 9.6-22.3 14.4-34.9 14.4-6.9 0-13.7-1.4-20.1-4.3C77 170.3 68.9 189.5 64 210c18.5 7.1 31.7 25 31.7 46.1 0 21-13.1 38.9-31.6 46.1 4.9 20.5 13 39.7 23.7 57.1 6.4-2.8 13.2-4.2 20-4.2 12.6 0 25.2 4.8 34.9 14.4 14.8 14.8 18.2 36.8 10.2 54.9 17.4 10.7 36.7 18.8 57.1 23.7 7.1-18.5 25-31.6 46-31.6s38.9 13.1 46 31.6c20.5-4.9 39.7-13 57.1-23.7-8-18.1-4.6-40 10.2-54.9 9.6-9.6 22.2-14.4 34.9-14.4 6.8 0 13.7 1.4 20 4.2 10.7-17.4 18.8-36.7 23.7-57.1-18.4-7.2-31.6-25.1-31.6-46.2zm-159.4 79.9c-44.3 0-80-35.9-80-80s35.7-80 80-80 80 35.9 80 80-35.7 80-80 80z",
        },
      },
    ],
  })(e);
}
function DO(e) {
  return $t({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z",
        },
      },
    ],
  })(e);
}
function Ig(e) {
  return $t({
    tag: "svg",
    attr: { viewBox: "0 0 256 256", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M208,80H32a8,8,0,0,0-8,8v48a96.3,96.3,0,0,0,32.54,72H32a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16H183.46a96.59,96.59,0,0,0,27-40.09A40,40,0,0,0,248,128v-8A40,40,0,0,0,208,80Zm24,48a24,24,0,0,1-17.2,23,95.78,95.78,0,0,0,1.2-15V97.38A24,24,0,0,1,232,120ZM112,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm32,0V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0ZM80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Z",
        },
      },
    ],
  })(e);
}
function VO() {
  const {
      switchTimerType: e,
      currentTimer: t,
      isActive: n,
      autoRunning: r,
      timeRemaining: o,
      customizeTimers: i,
      resetToDefault: s,
      timers: a,
      toggleAutoRun: l,
    } = Jl(),
    { currentImage: u, allImages: c, setImage: f } = x.useContext(Cp),
    d = {
      timerCount: [0, 0, 0],
      isOpen: !1,
      page: "",
      studyTime: a[0].time,
      shortBreakTime: a[1].time,
      longBreakTime: a[2].time,
    },
    h = function (k, w) {
      switch (w.type) {
        case "TIMER_COUNT":
          return { ...k, timerCount: w.payload };
        case "OPEN":
          return { ...k, isOpen: !0 };
        case "CLOSE":
          return { ...k, isOpen: !1 };
        case "PAGE":
          return { ...k, page: w.payload };
        case "GO_BACK":
          return { ...k, page: "" };
        case "SET_STUDY_TIME":
          return { ...k, studyTime: w.payload };
        case "SET_SHORT_BREAK_TIME":
          return { ...k, shortBreakTime: w.payload };
        case "SET_LONG_BREAK_TIME":
          return { ...k, longBreakTime: w.payload };
      }
    },
    [m, g] = x.useReducer(h, d),
    { username: T } = x.useContext(Tp);
  function v() {
    g({ type: "PAGE", payload: "timers" });
  }
  function p() {
    g({ type: "PAGE", payload: "images" });
  }
  x.useEffect(() => {
    const k = [
        { type: "FOCUS", time: m.studyTime, count: 0 },
        { type: "SHORT", time: m.shortBreakTime, count: 0 },
        { type: "LONG", time: m.longBreakTime, count: 0 },
      ],
      w = setTimeout(() => {
        i(k);
      }, 1e3);
    return () => {
      clearTimeout(w);
    };
  }, [m.studyTime, m.shortBreakTime, m.longBreakTime, i]);
  function y() {
    g({ type: "GO_BACK" });
  }
  function S() {
    g({ type: "OPEN" });
  }
  function C() {
    setTimeout(() => {
      y();
    }, 500),
      g({ type: "CLOSE" });
  }
  return (
    x.useEffect(() => {
      a && g({ type: "TIMER_COUNT", payload: a.map((k) => Number(k.count)) });
    }, [a]),
    P.jsxs("div", {
      className: we.navbar,
      children: [
        P.jsx(MO.div, {
          initial: { width: "0%" },
          animate: { width: `${(o / t.time) * 100}%` },
          transition: { type: "spring", stiffness: 30 },
          className: we.progress,
        }),
        P.jsx("h2", { className: we.username, children: T }),
        P.jsxs("div", {
          className: we.actions,
          children: [
            P.jsxs(On, {
              type: "button",
              alpha: "1",
              className: we.action,
              onClick: () => {
                e(0);
              },
              disabled: n,
              title: n ? "Stop the timer to switch it" : "",
              children: [m.timerCount[0], " pomodoros"],
            }),
            P.jsxs(On, {
              type: "button",
              alpha: "1",
              className: we.action,
              onClick: () => {
                e(1);
              },
              disabled: n,
              title: n ? "Stop the timer to switch it" : "",
              children: [m.timerCount[1], " breaks"],
            }),
            P.jsxs(On, {
              type: "button",
              alpha: "1",
              className: we.action,
              onClick: () => {
                e(2);
              },
              disabled: n,
              title: n ? "Stop the timer to switch it" : "",
              children: [m.timerCount[2], " long breaks"],
            }),
          ],
        }),
        P.jsx("div", {
          children: P.jsx(On, {
            type: "button",
            alpha: "1",
            className: we.navToggleBtn,
            onClick: S,
            id: "toggle",
            children: P.jsx(SP, {}),
          }),
        }),
        Xv.createPortal(
          P.jsxs(_E, {
            isopen: m.isOpen,
            onClose: C,
            children: [
              !m.page &&
                P.jsxs(P.Fragment, {
                  children: [
                    P.jsxs("button", {
                      className: we.navBtn,
                      onClick: s,
                      children: [P.jsx(IO, {}), "Reset to Default"],
                    }),
                    P.jsxs("button", {
                      className: we.navBtn,
                      onClick: v,
                      children: [P.jsx(jO, {}), "Customize the Timers"],
                    }),
                    P.jsxs("button", {
                      className: we.navBtn,
                      onClick: p,
                      children: [P.jsx($k, {}), "Change Background Image"],
                    }),
                    P.jsxs(On, {
                      type: "button",
                      alpha: "1",
                      className: we.navBtn,
                      onClick: () => {
                        e(0);
                      },
                      disabled: n,
                      title: n ? "Stop the timer to switch it" : "",
                      children: [
                        P.jsx(NO, {}),
                        "Study Session [",
                        m.timerCount[0],
                        "]",
                      ],
                    }),
                    P.jsxs(On, {
                      type: "button",
                      alpha: "1",
                      className: we.navBtn,
                      onClick: () => {
                        e(1);
                      },
                      disabled: n,
                      title: n ? "Stop the timer to switch it" : "",
                      children: [
                        P.jsx(Ig, {}),
                        "Short Break [",
                        m.timerCount[1],
                        "]",
                      ],
                    }),
                    P.jsxs(On, {
                      type: "button",
                      alpha: "1",
                      className: we.navBtn,
                      onClick: () => {
                        e(2);
                      },
                      disabled: n,
                      title: n ? "Stop the timer to switch it" : "",
                      children: [
                        P.jsx(Ig, {}),
                        "Long Break [",
                        m.timerCount[2],
                        "]",
                      ],
                    }),
                    P.jsxs(s1, {
                      to: "/tasks",
                      className: we.navBtn,
                      children: [P.jsx(DO, {}), "Tasks"],
                    }),
                  ],
                }),
              m.page &&
                P.jsx("button", {
                  className: we.backBtn,
                  onClick: y,
                  children: P.jsx(HE, {}),
                }),
              m.page === "timers" &&
                P.jsxs(P.Fragment, {
                  children: [
                    P.jsx(Oc, {
                      className: we.navSlider,
                      value: m.studyTime / 60,
                      min: 1,
                      step: 1,
                      max: 100,
                      onChange: (k, w) => {
                        !n && g({ type: "SET_STUDY_TIME", payload: w * 60 });
                      },
                    }),
                    `${m.studyTime / 60} min`,
                    P.jsx(Oc, {
                      className: we.navSlider,
                      value: m.shortBreakTime / 60,
                      min: 1,
                      step: 1,
                      max: 100,
                      onChange: (k, w) => {
                        !n &&
                          g({ type: "SET_SHORT_BREAK_TIME", payload: w * 60 });
                      },
                    }),
                    `${m.shortBreakTime / 60} min`,
                    P.jsx(Oc, {
                      className: we.navSlider,
                      value: m.longBreakTime / 60,
                      onChange: (k, w) => {
                        !n &&
                          g({ type: "SET_LONG_BREAK_TIME", payload: w * 60 });
                      },
                    }),
                    `${m.longBreakTime / 60} min`,
                    P.jsx(kR, {
                      className: we.navSlider,
                      value: r,
                      onChange: (k) => {
                        l(!r);
                      },
                      style: { color: "lime" },
                    }),
                    "Auto start Timers",
                  ],
                }),
              m.page === "images" &&
                P.jsx("div", {
                  className: we.images,
                  children: c.map((k, w) =>
                    P.jsx(
                      "button",
                      {
                        className: we.bgImg,
                        onClick: () => {
                          f(w);
                        },
                        children: P.jsx("img", {
                          src: k.src,
                          alt: `Image ${w}`,
                          className: `${we.img} ${
                            k.id === u.id ? we.currentImg : ""
                          }`,
                        }),
                      },
                      k.id
                    )
                  ),
                }),
            ],
          }),
          document.getElementById("modal")
        ),
      ],
    })
  );
}
function FO() {
  const { currentTimer: e } = Jl(),
    { username: t, setUsername: n } = x.useContext(Tp),
    { currentImage: r } = x.useContext(Cp),
    o = x.useRef(null),
    i = e.type === "FOCUS";
  function s(a) {
    a.preventDefault();
    const l = o.current.value;
    localStorage.setItem("user", l), n(l);
  }
  return t
    ? P.jsxs("div", {
        className: `${io.main} ${i ? io.study : io.break}`,
        style: {
          backgroundImage:
            i &&
            `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url("${r.src}")`,
        },
        children: [P.jsx(VO, {}), P.jsx(Z2, {}), P.jsx(rP, {})],
      })
    : P.jsxs("form", {
        className: `${io.form}`,
        onSubmit: s,
        children: [
          P.jsx("h3", {
            className: "fade",
            children: "Welcome to FocusBoost App👋",
          }),
          P.jsx("input", {
            placeholder: "What is your name?",
            className: `${io.userInput} fade`,
            ref: o,
          }),
          P.jsx("button", {
            className: `${io.submit} fade`,
            children: P.jsx(kE, {}),
          }),
        ],
      });
}
function BO() {
  return P.jsx(kk, {
    children: P.jsx(UE, {
      children: P.jsx($E, {
        children: P.jsx(Q2, {
          children: P.jsx(pk, {
            children: P.jsxs(ak, {
              children: [
                P.jsx(Bf, { index: !0, path: "/", element: P.jsx(FO, {}) }),
                P.jsx(Bf, { path: "/tasks", element: P.jsx(zk, {}) }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
Gc.createRoot(document.getElementById("root")).render(P.jsx(BO, {}));
