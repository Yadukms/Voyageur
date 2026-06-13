const Bt = () => Promise.resolve().then(() => zt), ue = globalThis.__GLOBALS__.ReactJSXRuntime, { Fragment: pe, jsx: e, jsxs: t } = ue;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
globalThis.__GLOBALS__.React.Children;
globalThis.__GLOBALS__.React.cloneElement;
({
  ...globalThis.__GLOBALS__.React
});
const { Component: Gt, createContext: Ut, createElement: G, createFactory: qt, createRef: Dt, forwardRef: ee, Fragment: $t, isValidElement: Ft, lazy: Vt, memo: Qt, Profiler: Kt, PureComponent: Yt, startTransition: Xt, StrictMode: Zt, Suspense: Jt, use: ea, useCallback: ta, useContext: aa, useDebugValue: ra, useDeferredValue: la, useEffect: te, useId: ia, useImperativeHandle: sa, useInsertionEffect: oa, useLayoutEffect: ca, useMemo: na, useReducer: da, useRef: ae, useState: v, useSyncExternalStore: ma, useTransition: ha, version: ua, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: pa } = globalThis.__GLOBALS__.React;
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ge = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fe = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, i, d) => d ? d.toUpperCase() : i.toLowerCase()
), $ = (r) => {
  const a = fe(r);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, re = (...r) => r.filter((a, i, d) => !!a && a.trim() !== "" && d.indexOf(a) === i).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var xe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ye = ee(
  ({
    color: r = "currentColor",
    size: a = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: d,
    className: n = "",
    children: o,
    iconNode: y,
    ...s
  }, x) => G(
    "svg",
    {
      ref: x,
      ...xe,
      width: a,
      height: a,
      stroke: r,
      strokeWidth: d ? Number(i) * 24 / Number(a) : i,
      className: re("lucide", n),
      ...s
    },
    [
      ...y.map(([k, m]) => G(k, m)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p = (r, a) => {
  const i = ee(
    ({ className: d, ...n }, o) => G(ye, {
      ref: o,
      iconNode: a,
      className: re(
        `lucide-${ge($(r))}`,
        `lucide-${r}`,
        d
      ),
      ...n
    })
  );
  return i.displayName = $(r), i;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], R = p("arrow-left", be);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const we = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Ne = p("arrow-right", we);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], ke = p("award", ve);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], F = p("chevron-down", Ce);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Me = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Se = p("chevron-left", Me);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], E = p("chevron-right", Ae);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ie = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], P = p("circle-alert", Ie);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _e = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], L = p("circle-check", _e);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ee = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
], Le = p("clipboard-list", Ee);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Te = p("eye", We);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }]
], V = p("file-down", Re);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = [
  [
    "path",
    {
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
      key: "18mbvz"
    }
  ],
  ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }]
], je = p("flask-conical", Oe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], O = p("globe", He);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pe = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
], U = p("instagram", Pe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ze = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
], le = p("leaf", ze);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
], q = p("linkedin", Be);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], ie = p("mail", Ge);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], se = p("map-pin", Ue);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], De = p("menu", qe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], T = p("message-circle", $e);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
], Ve = p("package", Fe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
], j = p("phone", Qe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], Ye = p("send", Ke);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Ze = p("shield-check", Xe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
], et = p("shield", Je);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tt = [
  ["path", { d: "M7 20h10", key: "e6iznv" }],
  ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
  [
    "path",
    {
      d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
      key: "9gtqwd"
    }
  ],
  [
    "path",
    {
      d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
      key: "bkxnd2"
    }
  ]
], at = p("sprout", tt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], lt = p("target", rt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
], st = p("truck", it);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ct = p("x", ot), z = "https://wa.me/919895999505?text=Hello%20Voyageur%20Overseas%2C%20I%20am%20interested%20in%20your%20products.", Q = "https://www.linkedin.com/company/voyageur-overseas", K = "https://www.instagram.com/voyageuroverseas", Y = [
  { id: "spices", label: "🌶  Spices" },
  { id: "coir", label: "🌿  Coir Products" },
  { id: "coconut", label: "🥥  Coconut Products" },
  { id: "others", label: "✦   Agro Products" }
];
function nt({ size: r = 86 }) {
  return /* @__PURE__ */ t(
    "svg",
    {
      width: r,
      height: r,
      viewBox: "0 0 100 100",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-label": "Voyageur logo",
      children: [
        /* @__PURE__ */ e("rect", { width: "100", height: "100", fill: "#f7efe7" }),
        /* @__PURE__ */ e(
          "circle",
          {
            cx: "53",
            cy: "42",
            r: "34",
            fill: "none",
            stroke: "#b8953d",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ e(
          "ellipse",
          {
            cx: "53",
            cy: "42",
            rx: "18",
            ry: "34",
            fill: "none",
            stroke: "#b8953d",
            strokeWidth: "1.1"
          }
        ),
        /* @__PURE__ */ e(
          "line",
          {
            x1: "53",
            y1: "8",
            x2: "53",
            y2: "76",
            stroke: "#b8953d",
            strokeWidth: "1.1"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M22 42 H84",
            fill: "none",
            stroke: "#b8953d",
            strokeWidth: "1.1"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M30 25 C43 31 64 31 76 25",
            fill: "none",
            stroke: "#b8953d",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M28 58 C42 52 65 52 80 58",
            fill: "none",
            stroke: "#b8953d",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M53 5 L55 13 L53 11 L51 13 Z",
            fill: "#b8953d"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M20 59 C31 67 53 72 78 59 L71 73 C55 82 35 78 18 68 Z",
            fill: "#07392f"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M31 51 L71 45 L78 58 C62 65 43 65 26 58 Z",
            fill: "#07392f"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M30 56 C41 61 57 61 72 54",
            fill: "none",
            stroke: "#f7efe7",
            strokeWidth: "3",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M35 48 C45 52 57 52 69 47",
            fill: "none",
            stroke: "#f7efe7",
            strokeWidth: "2.4",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M39 35 H62 Q65 35 66 38 L69 47 H36 L38 38 Q38.5 35 39 35 Z",
            fill: "#07392f"
          }
        ),
        /* @__PURE__ */ e(
          "rect",
          {
            x: "45",
            y: "27",
            width: "16",
            height: "8",
            rx: "1.5",
            fill: "#07392f"
          }
        ),
        /* @__PURE__ */ e(
          "rect",
          {
            x: "47",
            y: "39",
            width: "12",
            height: "5",
            rx: "1",
            fill: "#f7efe7"
          }
        ),
        /* @__PURE__ */ e(
          "rect",
          {
            x: "53",
            y: "19",
            width: "4",
            height: "8",
            rx: "1",
            fill: "#07392f"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M28 43 L32 43 L30 59 L25 58 Z",
            fill: "#07392f"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M10 73 C22 66 31 81 44 73 C57 65 67 81 81 72 C88 68 93 69 97 72",
            fill: "none",
            stroke: "#07392f",
            strokeWidth: "4.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M13 82 C27 74 38 91 53 82 C67 74 79 89 93 81",
            fill: "none",
            stroke: "#07392f",
            strokeWidth: "4.2",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
const X = [
  { label: "Home" },
  { label: "About Us" },
  { label: "Products", hasDropdown: !0 },
  { label: "Quality" },
  { label: "Certifications" },
  { label: "Gallery" },
  { label: "Contact Us" }
];
function dt({ activePage: r, setActivePage: a, setActiveCategory: i, scrollTo: d, activeNav: n, setActiveNav: o, goHome: y }) {
  const [s, x] = v(!1), [k, m] = v(!1), g = ae(null);
  te(() => {
    function c(S) {
      g.current && !g.current.contains(S.target) && m(!1);
    }
    return document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c);
  }, []);
  function b(c) {
    i(c), a("home"), m(!1), x(!1), o("Products"), setTimeout(() => document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" }), 100);
  }
  function h(c) {
    if (o(c), x(!1), m(!1), c === "Home") {
      y();
      return;
    }
    if (c === "About Us") {
      a("about"), window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (c === "Quality") {
      a("quality"), window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (c === "Gallery") {
      a("gallery"), window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (c === "Certifications") {
      a("home"), setTimeout(() => d("certifications-section"), 120);
      return;
    }
    if (c === "Contact Us") {
      a("home"), setTimeout(() => d("contact-section"), 120);
      return;
    }
  }
  const w = (c) => c === "Home" && r === "home" && n === "Home" || c === "About Us" && r === "about" || c === "Quality" && r === "quality" || c === "Gallery" && r === "gallery" || c === "Products" && n === "Products" || c === "Contact Us" && n === "Contact Us" || c === "Certifications" && n === "Certifications";
  return /* @__PURE__ */ t("nav", { className: "w-full bg-white sticky top-0 z-50", style: { boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }, children: [
    /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto px-4 flex items-center justify-between", style: { height: 95 }, children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3 cursor-pointer shrink-0", onClick: () => {
        y(), o("Home");
      }, children: [
        /* @__PURE__ */ e(nt, { size: 68 }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { style: { color: "#1a3a20", fontWeight: 900, fontSize: "2.15rem", letterSpacing: "0.12em", lineHeight: 1.1 }, children: "VOYAGEUR" }),
          /* @__PURE__ */ e("div", { style: { color: "#C9A84C", fontWeight: 500, fontSize: "1.85rem", letterSpacing: "0.22em", lineHeight: 1.1 }, children: "OVERSEAS" }),
          /* @__PURE__ */ e("div", { style: { color: "#8a6a2a", fontSize: "0.9rem", fontStyle: "italic", letterSpacing: "0.05em", marginTop: 2 }, children: "— From Origin to Destination —" })
        ] })
      ] }),
      /* @__PURE__ */ e("ul", { className: "hidden lg:flex items-center gap-1", children: X.map(
        ({ label: c, hasDropdown: S }) => S ? /* @__PURE__ */ t("li", { className: "relative", ref: g, children: [
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => m((C) => !C),
              className: "flex items-center gap-1 px-3 py-2 rounded-md text-sm transition-all",
              style: {
                color: w(c) ? "#C9A84C" : "#2a2a2a",
                background: w(c) ? "rgba(201,168,76,0.1)" : "transparent",
                fontWeight: w(c) ? 700 : 400,
                borderBottom: w(c) ? "2px solid #C9A84C" : "2px solid transparent"
              },
              children: [
                c,
                /* @__PURE__ */ e(F, { className: "w-3.5 h-3.5 transition-transform", style: { transform: k ? "rotate(180deg)" : "rotate(0)" } })
              ]
            }
          ),
          k && /* @__PURE__ */ t("div", { className: "absolute top-full left-0 mt-1 rounded-xl shadow-2xl py-2 z-50", style: { background: "white", border: "1px solid #e8dfd0", minWidth: 210 }, children: [
            /* @__PURE__ */ e("div", { className: "px-4 py-2 text-xs tracking-widest border-b mb-1", style: { color: "#C9A84C", fontWeight: 700, borderColor: "#f0ebe3" }, children: "PRODUCT CATEGORIES" }),
            Y.map((C) => /* @__PURE__ */ e("button", { className: "w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-amber-50", style: { color: "#333" }, onClick: () => b(C.id), children: C.label }, C.id)),
            /* @__PURE__ */ e("div", { className: "mx-4 my-1 h-px", style: { background: "#f0ebe3" } }),
            /* @__PURE__ */ e("button", { className: "w-full text-left px-4 py-2 text-xs hover:bg-amber-50 transition-colors", style: { color: "#999" }, onClick: () => b("all"), children: "View All Products →" })
          ] })
        ] }, c) : /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
          "button",
          {
            onClick: () => h(c),
            className: "px-3 py-2 rounded-md text-sm transition-all",
            style: {
              color: w(c) ? "#C9A84C" : "#2a2a2a",
              background: w(c) ? "rgba(201,168,76,0.1)" : "transparent",
              fontWeight: w(c) ? 700 : 400,
              borderBottom: w(c) ? "2px solid #C9A84C" : "2px solid transparent"
            },
            children: c
          }
        ) }, c)
      ) }),
      /* @__PURE__ */ t("div", { className: "hidden lg:flex items-center gap-2", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            "a",
            {
              href: Q,
              target: "_blank",
              rel: "noopener noreferrer",
              title: "LinkedIn",
              className: "w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-115",
              style: { background: "rgba(0,119,181,0.1)", border: "1px solid rgba(0,119,181,0.25)" },
              children: /* @__PURE__ */ e(q, { className: "w-4.5 h-4.5", style: { color: "#0077b5", width: 18, height: 18 } })
            }
          ),
          /* @__PURE__ */ e(
            "a",
            {
              href: K,
              target: "_blank",
              rel: "noopener noreferrer",
              title: "Instagram",
              className: "w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-115",
              style: { background: "rgba(225,48,108,0.1)", border: "1px solid rgba(225,48,108,0.25)" },
              children: /* @__PURE__ */ e(U, { style: { color: "#e1306c", width: 18, height: 18 } })
            }
          ),
          /* @__PURE__ */ e(
            "a",
            {
              href: z,
              target: "_blank",
              rel: "noopener noreferrer",
              title: "WhatsApp",
              className: "w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-115",
              style: { background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.25)" },
              children: /* @__PURE__ */ e(T, { style: { color: "#25d366", width: 18, height: 18 } })
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: "h-8 w-px mx-1", style: { background: "#e8dfd0" } }),
        /* @__PURE__ */ t("a", { href: z, target: "_blank", rel: "noopener noreferrer", className: "text-right", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-1 text-xs", style: { color: "#1a3a20", fontWeight: 700 }, children: [
            /* @__PURE__ */ e(j, { style: { color: "#C9A84C", width: 13, height: 13 } }),
            "+91 9895 999 505"
          ] }),
          /* @__PURE__ */ e("div", { className: "text-xs", style: { color: "#999" }, children: "info@voyageuroverseas.com" })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => {
              a("export"), o("");
            },
            className: "ml-1 px-5 py-2.5 text-sm text-white transition-all hover:opacity-90 hover:scale-105",
            style: { background: "#C9A84C", borderRadius: 5, fontWeight: 700, boxShadow: "0 3px 12px rgba(201,168,76,0.35)", letterSpacing: "0.04em" },
            children: "GET A QUOTE"
          }
        )
      ] }),
      /* @__PURE__ */ e("button", { className: "lg:hidden", onClick: () => x(!s), children: s ? /* @__PURE__ */ e(ct, { className: "w-6 h-6" }) : /* @__PURE__ */ e(De, { className: "w-6 h-6" }) })
    ] }),
    s && /* @__PURE__ */ t("div", { className: "lg:hidden bg-white border-t px-4 py-3 flex flex-col gap-0.5", style: { borderColor: "#f0ebe3" }, children: [
      X.map(({ label: c, hasDropdown: S }) => /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t(
          "button",
          {
            className: "w-full text-left px-3 py-2.5 text-sm rounded-lg transition-colors",
            style: { color: w(c) ? "#C9A84C" : "#333", fontWeight: w(c) ? 700 : 400, background: w(c) ? "rgba(201,168,76,0.08)" : "transparent" },
            onClick: () => S ? m((C) => !C) : h(c),
            children: [
              c,
              " ",
              S && /* @__PURE__ */ e(F, { className: "inline w-3.5 h-3.5" })
            ]
          }
        ),
        S && k && /* @__PURE__ */ e("div", { className: "pl-4 flex flex-col", children: Y.map((C) => /* @__PURE__ */ e("button", { className: "text-left text-sm py-2 px-2", style: { color: "#666" }, onClick: () => b(C.id), children: C.label }, C.id)) })
      ] }, c)),
      /* @__PURE__ */ t("div", { className: "flex gap-3 pt-3 mt-1 border-t", style: { borderColor: "#f0ebe3" }, children: [
        /* @__PURE__ */ e("a", { href: Q, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ e(q, { style: { color: "#0077b5", width: 22, height: 22 } }) }),
        /* @__PURE__ */ e("a", { href: K, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ e(U, { style: { color: "#e1306c", width: 22, height: 22 } }) }),
        /* @__PURE__ */ e("a", { href: z, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ e(T, { style: { color: "#25d366", width: 22, height: 22 } }) })
      ] }),
      /* @__PURE__ */ e("button", { onClick: () => {
        a("export"), x(!1);
      }, className: "mt-2 py-3 text-sm text-white font-bold rounded-lg", style: { background: "#C9A84C" }, children: "GET A QUOTE" })
    ] })
  ] });
}
const mt = "/_components/v2/d1042de677c1ee23df18b70f8c028e988d4179e6/home.d54e5624.jpeg", I = [
  {
    id: "global",
    tag: "Trusted Across Nations",
    heading1: "GLOBAL EXPORT",
    heading2: "NETWORK",
    sub: `From India to the world — by air & sea.
Reliable, certified, on-time delivery.`,
    btnLabel: "GET A QUOTE",
    bgUrl: mt,
    overlayImg: "",
    overlay: "linear-gradient(to right, rgba(10,20,40,0.82) 38%, rgba(5,10,25,0.22) 100%)",
    accent: "#7ab4d8",
    scrollTarget: "contact-section"
  },
  {
    id: "spices",
    tag: "From the Land of Spices",
    heading1: "PREMIUM INDIAN",
    heading2: "SPICES",
    sub: `Sourced from the finest farms of India,
delivered to the world.`,
    btnLabel: "EXPLORE SPICES",
    bgUrl: "https://6a2a7ecd88751837051fd5d5.imgix.net/spices.png",
    overlay: "linear-gradient(to right, rgba(10,20,5,0.85) 40%, rgba(5,10,2.5,0.22) 100%)",
    accent: "#c9a84c",
    scrollTarget: "products-section"
  },
  {
    id: "coir",
    tag: "From the Backwaters of Kerala",
    heading1: "NATURAL COIR",
    heading2: "PRODUCTS",
    sub: `Eco-friendly coir fibre, mats & coco peat
from the coconut heartland of India.`,
    btnLabel: "EXPLORE COIR",
    bgUrl: "https://images.unsplash.com/photo-1661174607003-d9d36388c916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBiYWNrd2F0ZXJzJTIwcGFsbSUyMHRyZWVzJTIwdHJvcGljYWx8ZW58MXx8fHwxNzgxMTQ2MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    overlay: "linear-gradient(to right, rgba(10,20,5,0.85) 40%, rgba(5,10,2.5,0.22) 100%)",
    accent: "#5aab6e",
    scrollTarget: "products-section"
  }
];
function Z({ flip: r = !1 }) {
  return /* @__PURE__ */ t(
    "svg",
    {
      width: "120",
      height: "120",
      viewBox: "0 0 120 120",
      className: "absolute pointer-events-none",
      style: { opacity: 0.22, transform: r ? "scaleX(-1)" : "none", top: 0, [r ? "right" : "left"]: 0 },
      children: [
        /* @__PURE__ */ e("path", { d: "M0 0 Q60 0 60 60 Q60 0 120 0", stroke: "#C9A84C", strokeWidth: "1", fill: "none" }),
        /* @__PURE__ */ e("path", { d: "M0 0 Q0 60 60 60", stroke: "#C9A84C", strokeWidth: "0.8", fill: "none" }),
        /* @__PURE__ */ e("circle", { cx: "0", cy: "0", r: "80", fill: "none", stroke: "#C9A84C", strokeWidth: "0.5" }),
        /* @__PURE__ */ e("circle", { cx: "0", cy: "0", r: "60", fill: "none", stroke: "#C9A84C", strokeWidth: "0.5" }),
        /* @__PURE__ */ e("circle", { cx: "0", cy: "0", r: "40", fill: "none", stroke: "#C9A84C", strokeWidth: "0.5" }),
        /* @__PURE__ */ e("circle", { cx: "0", cy: "0", r: "20", fill: "none", stroke: "#C9A84C", strokeWidth: "0.5" }),
        [0, 15, 30, 45, 60, 75, 90].map((a) => /* @__PURE__ */ e("line", { x1: "0", y1: "0", x2: 80 * Math.cos(a * Math.PI / 180), y2: 80 * Math.sin(a * Math.PI / 180), stroke: "#C9A84C", strokeWidth: "0.4" }, a)),
        /* @__PURE__ */ e("path", { d: "M5 0 C5 5 0 5 0 10 C0 5 -5 5 -5 0", fill: "#C9A84C", opacity: "0.6", transform: "translate(0,0) rotate(-45)" })
      ]
    }
  );
}
function ht() {
  const [r, a] = v(0), [i, d] = v(!1), [n, o] = v(!1), y = ae(null);
  function s(g) {
    n || g === r || (o(!0), setTimeout(() => {
      a(g), o(!1);
    }, 350));
  }
  function x() {
    s((r + 1) % I.length);
  }
  function k() {
    s((r - 1 + I.length) % I.length);
  }
  te(() => {
    if (i) {
      y.current && clearInterval(y.current);
      return;
    }
    return y.current = setInterval(() => a((g) => (g + 1) % I.length), 5e3), () => {
      y.current && clearInterval(y.current);
    };
  }, [i]);
  const m = I[r];
  return /* @__PURE__ */ t(
    "section",
    {
      className: "relative w-full overflow-hidden select-none",
      style: { height: 460 },
      onMouseEnter: () => d(!0),
      onMouseLeave: () => d(!1),
      children: [
        I.map((g, b) => /* @__PURE__ */ e(
          "img",
          {
            src: g.bgUrl,
            alt: g.id,
            className: "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
            style: { opacity: b === r && !n ? 1 : 0, zIndex: 0 }
          },
          g.id
        )),
        /* @__PURE__ */ e("div", { className: "absolute inset-0 transition-all duration-700", style: { background: m.overlay, zIndex: 1 } }),
        m.overlayImg && /* @__PURE__ */ e("div", { className: "absolute right-0 inset-y-0 w-1/2 overflow-hidden pointer-events-none", style: { zIndex: 1 }, children: /* @__PURE__ */ e(
          "img",
          {
            src: m.overlayImg,
            alt: "",
            className: "w-full h-full object-cover",
            style: { opacity: n ? 0 : 0.5, transition: "opacity 0.7s", maskImage: "linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)" }
          }
        ) }),
        m.id === "global" && !n && /* @__PURE__ */ e("div", { className: "absolute inset-0 pointer-events-none", style: { zIndex: 2, opacity: 0.3 }, children: /* @__PURE__ */ t("svg", { viewBox: "0 0 900 460", className: "w-full h-full", preserveAspectRatio: "xMidYMid slice", children: [
          [
            { d: "M 510 230 Q 380 110 155 170", delay: "0s" },
            { d: "M 510 230 Q 460 120 310 90", delay: "0.5s" },
            { d: "M 510 230 Q 570 150 710 110", delay: "1s" },
            { d: "M 510 230 Q 620 280 800 260", delay: "1.5s" },
            { d: "M 510 230 Q 490 370 400 420", delay: "2s" }
          ].map((g, b) => /* @__PURE__ */ t("g", { children: [
            /* @__PURE__ */ e("path", { d: g.d, fill: "none", stroke: "white", strokeWidth: "1.5", strokeDasharray: "8 5", opacity: "0.7", children: /* @__PURE__ */ e("animate", { attributeName: "stroke-dashoffset", from: "0", to: "-60", dur: "2s", repeatCount: "indefinite", begin: g.delay }) }),
            /* @__PURE__ */ e("circle", { r: "4", fill: "white", opacity: "0.9", children: /* @__PURE__ */ e("animateMotion", { dur: "3s", repeatCount: "indefinite", begin: g.delay, path: g.d }) })
          ] }, b)),
          /* @__PURE__ */ e("circle", { cx: "510", cy: "230", r: "7", fill: "#c9a84c", opacity: "0.9", children: /* @__PURE__ */ e("animate", { attributeName: "r", values: "7;12;7", dur: "2s", repeatCount: "indefinite" }) })
        ] }) }),
        /* @__PURE__ */ e("div", { style: { zIndex: 3 }, children: /* @__PURE__ */ e(Z, {}) }),
        /* @__PURE__ */ e("div", { style: { zIndex: 3 }, children: /* @__PURE__ */ e(Z, { flip: !0 }) }),
        /* @__PURE__ */ e("div", { className: "relative z-10 max-w-7xl mx-auto px-8 h-full flex flex-col justify-center", children: /* @__PURE__ */ t("div", { className: "transition-all duration-500", style: { opacity: n ? 0 : 1, transform: n ? "translateY(10px)" : "translateY(0)" }, children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ e("div", { className: "h-px w-10", style: { background: m.accent } }),
            /* @__PURE__ */ e("span", { className: "text-xs tracking-[0.35em] uppercase", style: { color: m.accent }, children: m.tag }),
            /* @__PURE__ */ e("div", { className: "h-px w-10", style: { background: m.accent } })
          ] }),
          /* @__PURE__ */ e("h1", { className: "text-white", style: { fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 900, lineHeight: 1.05 }, children: m.heading1 }),
          /* @__PURE__ */ e("h1", { style: { fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 900, lineHeight: 1.05, color: m.accent }, children: m.heading2 }),
          /* @__PURE__ */ e("p", { className: "mt-3 max-w-sm text-sm", style: { color: "rgba(255,255,255,0.88)", lineHeight: 1.75 }, children: m.sub.split(`
`).map((g, b) => /* @__PURE__ */ t("span", { children: [
            g,
            b === 0 && /* @__PURE__ */ e("br", {})
          ] }, b)) }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 my-4", children: [
            /* @__PURE__ */ e("div", { className: "h-px w-6", style: { background: m.accent } }),
            /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 rounded-full", style: { background: m.accent } }),
            /* @__PURE__ */ e("div", { className: "h-px w-6", style: { background: m.accent } })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => document.getElementById(m.scrollTarget)?.scrollIntoView({ behavior: "smooth" }),
              className: "flex items-center gap-2 px-7 py-3.5 text-sm text-white transition-all hover:scale-105",
              style: { background: m.id === "coir" ? "#1a4a2e" : m.id === "global" ? "#0a2040" : "#2d4a1e", border: `1.5px solid ${m.accent}`, borderRadius: 4, fontWeight: 700, letterSpacing: "0.06em" },
              children: [
                m.btnLabel,
                " ",
                /* @__PURE__ */ e(Ne, { className: "w-4 h-4" })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ e("div", { className: "absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5", style: { zIndex: 10 }, children: I.map((g, b) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => s(b),
            className: "rounded-full transition-all duration-300",
            style: { width: b === r ? 26 : 8, height: 8, background: b === r ? m.accent : "rgba(255,255,255,0.38)" }
          },
          g.id
        )) }),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: k,
            className: "absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110",
            style: { background: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.28)", zIndex: 10 },
            children: /* @__PURE__ */ e(Se, { className: "w-5 h-5 text-white" })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: x,
            className: "absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110",
            style: { background: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.28)", zIndex: 10 },
            children: /* @__PURE__ */ e(E, { className: "w-5 h-5 text-white" })
          }
        ),
        /* @__PURE__ */ e("div", { className: "absolute bottom-5 right-4 flex gap-2", style: { zIndex: 10 }, children: I.map((g, b) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => s(b),
            className: "rounded overflow-hidden transition-all",
            style: { width: 48, height: 32, outline: b === r ? `2px solid ${m.accent}` : "2px solid transparent", outlineOffset: 2, opacity: b === r ? 1 : 0.5 },
            children: /* @__PURE__ */ e("img", { src: g.bgUrl, alt: g.id, className: "w-full h-full object-cover" })
          },
          g.id
        )) })
      ]
    }
  );
}
const ut = [
  { icon: le, title: "100% NATURAL", desc: "Pure and natural spices" },
  { icon: at, title: "FARM FRESH", desc: "Sourced directly from Indian farms" },
  { icon: O, title: "GLOBAL EXPORT", desc: "Trusted by clients in 25+ countries" },
  { icon: Ze, title: "QUALITY ASSURED", desc: "International quality standards" },
  { icon: st, title: "ON TIME DELIVERY", desc: "Reliable & timely shipment" }
];
function pt() {
  return /* @__PURE__ */ e("section", { className: "w-full py-5 px-4", style: { background: "#172C19" }, children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4", children: ut.map(({ icon: r, title: a, desc: i }) => /* @__PURE__ */ t("div", { className: "flex items-center gap-3 py-2", children: [
    /* @__PURE__ */ e("div", { className: "shrink-0 w-10 h-10 rounded-full flex items-center justify-center", style: { border: "1.5px solid #c9a84c" }, children: /* @__PURE__ */ e(r, { className: "w-5 h-5", style: { color: "#c9a84c" } }) }),
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ e("div", { className: "text-xs tracking-wider", style: { color: "#c9a84c", fontWeight: 700 }, children: a }),
      /* @__PURE__ */ e("div", { className: "text-xs mt-0.5", style: { color: "rgba(255,255,255,0.75)" }, children: i })
    ] })
  ] }, a)) }) });
}
const oe = [
  { id: "s1", name: "GREEN CARDAMOM", origin: "Kerala, India", desc: "Aromatic green pods with sweet, floral notes. Used in chai, desserts & biryanis.", img: "https://images.unsplash.com/photo-1622042914684-6a6288b14078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNhcmRhbW9tJTIwc3BpY2V8ZW58MXx8fHwxNzgxMDg4NzIzfDA&ixlib=rb-4.1.0&q=80&w=400" },
  { id: "s2", name: "BLACK PEPPER", origin: "Wayanad, Kerala", desc: "King of spices. Bold pungent flavour, used globally in cuisine & medicine.", img: "https://images.unsplash.com/photo-1591801058986-9e28e68670f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBlcHBlciUyMHNwaWNlfGVufDF8fHx8MTc4MDk2MjE2Nnww&ixlib=rb-4.1.0&q=80&w=400" },
  { id: "s3", name: "CINNAMON", origin: "Tamil Nadu, India", desc: "Sweet, warm spice for baking, curries & beverages. Naturally harvested bark.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_8jhluf8jhluf8jhl.png" },
  { id: "s4", name: "CLOVES", origin: "Tamil Nadu, India", desc: "Intensely aromatic dried flower buds prized for medicinal & culinary value.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_f39zn8f39zn8f39z.png" },
  { id: "s5", name: "TURMERIC", origin: "Erode, Tamil Nadu", desc: "Golden spice rich in curcumin. Used worldwide for health & cooking.", img: "https://images.unsplash.com/photo-1606951444141-e5533feb55be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJtZXJpYyUyMHBvd2RlciUyMHllbGxvdyUyMHNwaWNlfGVufDF8fHx8MTc4MTA4ODcyNHww&ixlib=rb-4.1.0&q=80&w=400" },
  { id: "s6", name: "RED CHILLI", origin: "Guntur, Andhra Pradesh", desc: "Fiery heat & rich colour. One of India's most exported spices.", img: "https://images.unsplash.com/photo-1602237514002-c2d8ae2da393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBjaGlsbGklMjBwZXBwZXIlMjBkcmllZHxlbnwxfHx8fDE3ODEwODg3MjV8MA&ixlib=rb-4.1.0&q=80&w=400" }
], ce = [
  { id: "c1", name: "COCO PEAT", origin: "Alappuzha, Kerala", desc: "100% natural growing medium from coconut husk. Excellent water retention for horticulture.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_2wyvu02wyvu02wyv.png" },
  { id: "c2", name: "COIR MAT", origin: "Alappuzha, Kerala", desc: "Hand-woven natural coir door mats & floor mats. Durable, eco-friendly & biodegradable.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_gimn02gimn02gimn.png" },
  { id: "c3", name: "COIR ROPE", origin: "Kerala, India", desc: "Twisted natural coir rope in various diameters. Strong, salt-water resistant & widely exported.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_50oron50oron50or.png" },
  { id: "c4", name: "COIR FIBRE", origin: "Alappuzha, Kerala", desc: "Raw & processed coir fibre for mattresses, geo-textiles, brushes & upholstery.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_ydpbptydpbptydpb.png" },
  { id: "c5", name: "COIR GEO-TEXTILE", origin: "Kerala, India", desc: "Biodegradable geo-textiles for soil erosion control & slope stabilisation.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_8d69c88d69c88d69.png" },
  { id: "c6", name: "GROW BAGS", origin: "Kerala, India", desc: "Coir-based grow bags for organic farming & hydroponic horticulture applications.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_pb5ldcpb5ldcpb5l.png" }
], ne = [
  { id: "n1", name: "COCONUT OIL", origin: "Kerala, India", desc: "Pure cold-pressed virgin coconut oil for cooking, cosmetics & Ayurveda.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_athbetathbetathb.png" },
  { id: "n2", name: "DESICCATED COCONUT", origin: "Kerala, India", desc: "Finely shredded & dried coconut meat for confectionery, bakery & food processing.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_tbzawxtbzawxtbza.png" },
  { id: "n3", name: "COCONUT CHARCOAL", origin: "Kerala, India", desc: "High-quality activated shell charcoal for water purification & industrial use.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_aczg7daczg7daczg.png" }
], de = [
  { id: "o1", name: "RICE", origin: "Punjab & Kerala", desc: "Premium basmati & non-basmati rice varieties for global export.", img: "https://6a2a7ecd88751837051fd5d5.imgix.net/Gemini_Generated_Image_dzhsdydzhsdydzhs.png" }
], gt = [...oe.slice(0, 2), ...ce.slice(0, 2), ...ne.slice(0, 1), ...de.slice(0, 1)], B = [
  { id: "all", label: "All Products", accent: "#c9a84c", bg: "#2d4a1e", tagline: "Our Premium Products", icon: "✦" },
  { id: "spices", label: "Spices", accent: "#c9a84c", bg: "#2d4a1e", tagline: "Premium Indian Spices", icon: "🌶" },
  { id: "coir", label: "Coir Products", accent: "#5aab6e", bg: "#1a4a2e", tagline: "Natural Coir Products", icon: "🌿" },
  { id: "coconut", label: "Coconut", accent: "#b58a30", bg: "#3a2e10", tagline: "Coconut Products", icon: "🥥" },
  { id: "rice", label: "Rice", accent: "#9b7cb8", bg: "#2a1a40", tagline: "Other Agro Products", icon: "✦" }
], ft = {
  all: [],
  spices: ["Green Cardamom", "Black Pepper", "White Pepper", "Cinnamon", "Cassia", "Cloves", "Turmeric", "Red Chilli", "Cumin Seeds", "Coriander Seeds", "Fenugreek", "Mustard Seeds", "Star Anise", "Nutmeg", "Mace", "Ginger", "Fennel Seeds", "Bay Leaf"],
  coir: ["Coco Peat Blocks", "Coco Peat Discs", "Coir Mat (Plain)", "Coir Mat (Tufted)", "Coir Rope", "Coir Fibre (Brown)", "Coir Fibre (White)", "Geo-Textile Mesh", "Coir Grow Bags", "Coir Logs", "Coir Twine", "Brushes & Brooms"],
  coconut: ["Virgin Coconut Oil", "Refined Coconut Oil", "Desiccated Coconut", "Coconut Milk Powder", "Coconut Shell Charcoal", "Activated Carbon", "Coconut Shell Powder", "Coconut Water"],
  rice: ["Basmati Rice", "Non-Basmati Rice"]
};
function xt(r) {
  return r === "all" ? gt : r === "spices" ? oe : r === "coir" ? ce : r === "coconut" ? ne : de;
}
function yt({ activeCategory: r, setActiveCategory: a }) {
  const [i, d] = v(null), n = B.find((s) => s.id === r) ?? B[0], o = xt(r), y = ft[r];
  return /* @__PURE__ */ e("section", { id: "products-section", className: "py-10 px-4", style: { background: "#faf6f0" }, children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center justify-center gap-3 mb-3", children: [
        /* @__PURE__ */ e("div", { className: "h-px flex-1 max-w-16", style: { background: n.accent } }),
        /* @__PURE__ */ e("span", { className: "text-xs tracking-[0.35em] uppercase", style: { color: n.accent }, children: "Our Products" }),
        /* @__PURE__ */ e("div", { className: "h-px flex-1 max-w-16", style: { background: n.accent } })
      ] }),
      /* @__PURE__ */ e("h2", { style: { color: "#1a1a1a" }, children: n.tagline }),
      /* @__PURE__ */ e("p", { className: "mt-2 text-sm", style: { color: "#888" }, children: "Click a category below to explore our full product range" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-3 mb-12", children: B.map((s) => {
      const x = r === s.id;
      return /* @__PURE__ */ t(
        "button",
        {
          onClick: () => {
            a(s.id), d(null);
          },
          className: "flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105",
          style: {
            background: x ? s.bg : "white",
            color: x ? "white" : "#444",
            border: `1.5px solid ${x ? s.accent : "#e0d8cc"}`,
            fontWeight: x ? 700 : 400,
            boxShadow: x ? "0 4px 16px rgba(0,0,0,0.18)" : "0 1px 4px rgba(0,0,0,0.06)",
            fontSize: "0.8rem",
            letterSpacing: "0.06em"
          },
          children: [
            /* @__PURE__ */ e("span", { children: s.icon }),
            s.label,
            x && /* @__PURE__ */ e("span", { className: "ml-1 w-1.5 h-1.5 rounded-full", style: { background: s.accent } })
          ]
        },
        s.id
      );
    }) }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6", children: o.map((s) => {
      const x = i === s.id;
      return /* @__PURE__ */ t(
        "div",
        {
          className: "group flex flex-col items-center cursor-pointer",
          onClick: () => d(x ? null : s.id),
          children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: "relative w-full aspect-square rounded-full overflow-hidden mb-3 transition-all duration-300 group-hover:scale-105",
                style: {
                  border: x ? `3px solid ${n.accent}` : "2px solid #e0d8cc",
                  boxShadow: x ? `0 6px 24px rgba(0,0,0,0.18), 0 0 0 4px ${n.accent}22` : "0 3px 14px rgba(0,0,0,0.10)"
                },
                children: [
                  /* @__PURE__ */ e("img", { src: s.img, alt: s.name, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" }),
                  /* @__PURE__ */ e(
                    "div",
                    {
                      className: "absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100",
                      style: { background: "rgba(0,0,0,0.35)" },
                      children: /* @__PURE__ */ e("span", { className: "text-white text-xs font-bold tracking-widest", children: "DETAILS" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ e("div", { className: "text-xs tracking-wider text-center mb-2.5", style: { color: "#1a1a1a", fontWeight: 700 }, children: s.name }),
            /* @__PURE__ */ e(
              "button",
              {
                className: "px-4 py-1.5 text-xs tracking-wider text-white transition-all hover:scale-105",
                style: { background: n.bg, borderRadius: 3, fontWeight: 600, letterSpacing: "0.08em" },
                children: "VIEW DETAILS"
              }
            ),
            x && /* @__PURE__ */ t(
              "div",
              {
                className: "mt-3 p-4 rounded-lg text-center w-full",
                style: { background: "white", boxShadow: "0 4px 18px rgba(0,0,0,0.10)", border: `1px solid ${n.accent}44` },
                children: [
                  /* @__PURE__ */ t("div", { className: "text-xs mb-1.5", style: { color: n.accent, fontWeight: 700 }, children: [
                    "📍 ",
                    s.origin
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs leading-relaxed", style: { color: "#555" }, children: s.desc })
                ]
              }
            )
          ]
        },
        s.id
      );
    }) }),
    y.length > 0 && /* @__PURE__ */ t(
      "div",
      {
        className: "mt-12 p-6 rounded-xl",
        style: { background: "white", border: `1px solid ${n.accent}33`, boxShadow: "0 2px 16px rgba(0,0,0,0.06)" },
        children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ e("div", { className: "h-px w-6", style: { background: n.accent } }),
            /* @__PURE__ */ t("span", { className: "text-xs tracking-[0.3em] uppercase", style: { color: n.accent, fontWeight: 700 }, children: [
              "All ",
              n.label,
              " We Export"
            ] }),
            /* @__PURE__ */ e("div", { className: "h-px flex-1", style: { background: `${n.accent}33` } })
          ] }),
          /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: y.map((s) => /* @__PURE__ */ e(
            "span",
            {
              className: "px-3.5 py-1.5 text-xs rounded-full transition-colors hover:text-white cursor-default",
              style: {
                background: `${n.accent}12`,
                border: `1px solid ${n.accent}44`,
                color: "#444"
              },
              children: s
            },
            s
          )) })
        ]
      }
    )
  ] }) });
}
function bt() {
  return /* @__PURE__ */ e("section", { id: "about-section", className: "py-16 px-4", style: { background: "white" }, children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ e("div", { className: "h-px w-8", style: { background: "#c9a84c" } }),
        /* @__PURE__ */ e("span", { className: "text-xs tracking-[0.3em] uppercase", style: { color: "#c9a84c" }, children: "About Us" })
      ] }),
      /* @__PURE__ */ e("h2", { style: { color: "#1a1a1a" }, children: "Voyageur Overseas" }),
      /* @__PURE__ */ e("p", { className: "mt-4 text-sm leading-relaxed", style: { color: "#555" }, children: "Voyageur Overseas is a trusted name in the export of premium quality spices from India. With a strong commitment to quality, purity, and sustainability, we bring the rich flavors of India to global markets." }),
      /* @__PURE__ */ e("p", { className: "mt-3 text-sm leading-relaxed", style: { color: "#555" }, children: "Our spices are carefully handpicked, hygienically processed, and packed to retain their natural aroma, taste, and freshness. Every batch undergoes rigorous testing to meet international quality standards before shipment." }),
      /* @__PURE__ */ e("div", { className: "mt-6 grid grid-cols-3 gap-4", children: [["25+", "Countries Served"], ["500+", "Happy Clients"], ["15+", "Years Experience"]].map(([r, a]) => /* @__PURE__ */ t("div", { className: "text-center p-4 rounded", style: { background: "#faf6f0" }, children: [
        /* @__PURE__ */ e("div", { className: "text-2xl", style: { color: "#c9a84c", fontWeight: 800 }, children: r }),
        /* @__PURE__ */ e("div", { className: "text-xs mt-1", style: { color: "#666" }, children: a })
      ] }, a)) }),
      /* @__PURE__ */ e("button", { className: "mt-8 px-8 py-3 text-sm tracking-wider text-white", style: { background: "#2d4a1e", borderRadius: 3, fontWeight: 600 }, children: "READ MORE" })
    ] }),
    /* @__PURE__ */ t("div", { className: "relative", children: [
      /* @__PURE__ */ t("div", { className: "relative rounded-lg overflow-hidden", style: { height: 400 }, children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: " https://6a2a7ecd8875183",
            alt: "Colorful spice powders",
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ e("div", { className: "absolute inset-0", style: { background: "linear-gradient(135deg, rgba(45,74,30,0.15) 0%, transparent 60%)" } })
      ] }),
      /* @__PURE__ */ t(
        "div",
        {
          className: "absolute -bottom-5 -left-5 px-5 py-4 rounded-lg shadow-lg",
          style: { background: "#2d4a1e" },
          children: [
            /* @__PURE__ */ e("div", { className: "text-xs tracking-widest", style: { color: "#c9a84c", fontWeight: 700 }, children: "AUTHENTIC SPICES" }),
            /* @__PURE__ */ e("div", { className: "text-xs mt-0.5", style: { color: "rgba(255,255,255,0.8)" }, children: "Authentic India" })
          ]
        }
      )
    ] })
  ] }) });
}
function wt() {
  const r = [
    {
      name: "APEDA",
      sub: "REGISTERED",
      icon: /* @__PURE__ */ t("svg", { viewBox: "0 0 40 40", width: "36", height: "36", children: [
        /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "18", fill: "none", stroke: "#2d6a1e", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("path", { d: "M20 8 C12 14 12 26 20 32 C28 26 28 14 20 8Z", fill: "#2d6a1e", opacity: "0.15" }),
        /* @__PURE__ */ e("path", { d: "M14 22 L17 25 L26 16", stroke: "#2d6a1e", strokeWidth: "2", fill: "none", strokeLinecap: "round" }),
        /* @__PURE__ */ e("path", { d: "M20 5 L20 35 M5 20 L35 20", stroke: "#2d6a1e", strokeWidth: "0.5", opacity: "0.3" })
      ] })
    },
    {
      name: "IEC",
      sub: "REGISTERED",
      icon: /* @__PURE__ */ t("svg", { viewBox: "0 0 40 40", width: "36", height: "36", children: [
        /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "18", fill: "none", stroke: "#1a4a7a", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("text", { x: "20", y: "24", textAnchor: "middle", fontSize: "11", fontWeight: "bold", fill: "#1a4a7a", children: "IEC" })
      ] })
    },
    {
      name: "fssai",
      sub: "LICENSED",
      icon: /* @__PURE__ */ t("svg", { viewBox: "0 0 40 40", width: "36", height: "36", children: [
        /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "18", fill: "none", stroke: "#c0392b", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("text", { x: "20", y: "19", textAnchor: "middle", fontSize: "9", fontStyle: "italic", fontWeight: "bold", fill: "#c0392b", children: "fssai" }),
        /* @__PURE__ */ e("path", { d: "M10 24 L30 24", stroke: "#c0392b", strokeWidth: "1" })
      ] })
    },
    {
      name: "ISO",
      sub: "22000:2018",
      icon: /* @__PURE__ */ t("svg", { viewBox: "0 0 40 40", width: "36", height: "36", children: [
        /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "18", fill: "none", stroke: "#1a5a8a", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "13", fill: "none", stroke: "#1a5a8a", strokeWidth: "0.8" }),
        /* @__PURE__ */ e("text", { x: "20", y: "18", textAnchor: "middle", fontSize: "8", fontWeight: "bold", fill: "#1a5a8a", children: "ISO" }),
        /* @__PURE__ */ e("text", { x: "20", y: "27", textAnchor: "middle", fontSize: "5.5", fill: "#1a5a8a", children: "22000:2018" })
      ] })
    },
    {
      name: "SPICES BOARD",
      sub: "INDIA",
      icon: /* @__PURE__ */ t("svg", { viewBox: "0 0 40 40", width: "36", height: "36", children: [
        /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "18", fill: "none", stroke: "#1a4a7a", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "12", fill: "none", stroke: "#1a4a7a", strokeWidth: "0.8" }),
        /* @__PURE__ */ e("path", { d: "M20 10 L22 16 L28 16 L23 20 L25 26 L20 22 L15 26 L17 20 L12 16 L18 16 Z", fill: "#1a4a7a", opacity: "0.7" })
      ] })
    }
  ];
  return /* @__PURE__ */ t("section", { id: "certifications-section", className: "relative overflow-hidden", style: { background: "#f5ede0" }, children: [
    /* @__PURE__ */ e("div", { className: "w-full h-1", style: { background: "linear-gradient(to right, transparent, #c9a84c 30%, #c9a84c 70%, transparent)" } }),
    /* @__PURE__ */ t("div", { className: "relative", style: { minHeight: 160 }, children: [
      /* @__PURE__ */ e("div", { className: "absolute left-0 top-0 bottom-0 w-56 overflow-hidden pointer-events-none", style: { opacity: 0.55 }, children: /* @__PURE__ */ t("svg", { viewBox: "0 0 220 160", className: "w-full h-full", preserveAspectRatio: "xMidYMid slice", children: [
        /* @__PURE__ */ e("rect", { x: "0", y: "110", width: "220", height: "50", fill: "#c4a882" }),
        [0, 1, 2, 3, 4, 5].map((a) => /* @__PURE__ */ e("path", { d: `M0 ${118 + a * 7} Q110 ${114 + a * 7} 220 ${118 + a * 7}`, stroke: "#a0845a", strokeWidth: "0.8", fill: "none" }, a)),
        /* @__PURE__ */ e("path", { d: "M0 90 L40 50 L70 75 L110 35 L150 65 L180 45 L220 80 L220 110 L0 110Z", fill: "#b89870" }),
        /* @__PURE__ */ e("path", { d: "M0 100 L60 70 L100 85 L140 65 L180 80 L220 90 L220 110 L0 110Z", fill: "#c4a882" }),
        /* @__PURE__ */ e("rect", { x: "18", y: "72", width: "4", height: "18", fill: "#7a5a30" }),
        /* @__PURE__ */ e("ellipse", { cx: "20", cy: "68", rx: "9", ry: "12", fill: "#6a7a30" }),
        /* @__PURE__ */ e("rect", { x: "55", y: "80", width: "3", height: "14", fill: "#7a5a30" }),
        /* @__PURE__ */ e("ellipse", { cx: "56.5", cy: "76", rx: "7", ry: "10", fill: "#6a7a30" }),
        /* @__PURE__ */ e("ellipse", { cx: "90", cy: "108", rx: "8", ry: "5", fill: "#8a6a40" }),
        /* @__PURE__ */ e("circle", { cx: "90", cy: "100", r: "5", fill: "#8a6a40" }),
        /* @__PURE__ */ e("ellipse", { cx: "90", cy: "95", rx: "9", ry: "3", fill: "#6a4a20" }),
        /* @__PURE__ */ e("rect", { x: "87", y: "90", width: "6", height: "6", rx: "2", fill: "#7a5a30" }),
        /* @__PURE__ */ e("path", { d: "M86 104 L84 114 M94 104 L96 114", stroke: "#8a6a40", strokeWidth: "2" }),
        /* @__PURE__ */ e("path", { d: "M84 114 L90 112 L96 114", stroke: "#8a6a40", strokeWidth: "2", fill: "none" }),
        /* @__PURE__ */ e("circle", { cx: "140", cy: "98", r: "4", fill: "#8a6a40" }),
        /* @__PURE__ */ e("ellipse", { cx: "140", cy: "94", rx: "7", ry: "2.5", fill: "#6a4a20" }),
        /* @__PURE__ */ e("path", { d: "M137 102 L135 112 M143 102 L145 112", stroke: "#8a6a40", strokeWidth: "1.8" }),
        /* @__PURE__ */ e("ellipse", { cx: "105", cy: "112", rx: "6", ry: "4", fill: "#a07840" }),
        /* @__PURE__ */ e("path", { d: "M99 112 L99 108 L111 108 L111 112", fill: "#c09860" })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "relative z-10 max-w-7xl mx-auto px-4 py-8 flex flex-col items-center", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap justify-center items-center gap-2 md:gap-6", children: [
        r.map((a, i) => /* @__PURE__ */ t("div", { className: "flex flex-col items-center", style: { minWidth: 80 }, children: [
          i > 0 && /* @__PURE__ */ e("div", { className: "hidden md:block absolute", style: { left: -16, top: "50%", width: 1, height: 50, background: "#c9a84c", opacity: 0.4, transform: "translateY(-50%)" } }),
          /* @__PURE__ */ t("div", { className: "relative flex flex-col items-center", children: [
            i > 0 && /* @__PURE__ */ e("div", { className: "hidden md:block h-12 w-px absolute -left-4 top-1/2 -translate-y-1/2", style: { background: "#d4b88a", opacity: 0.6 } }),
            /* @__PURE__ */ e("div", { className: "mb-1", children: a.icon }),
            /* @__PURE__ */ e("div", { className: "text-center", style: { color: "#1a1a1a", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.08em" }, children: a.name }),
            /* @__PURE__ */ e("div", { className: "text-center", style: { color: "#8a6a40", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.12em" }, children: a.sub })
          ] })
        ] }, a.name)),
        /* @__PURE__ */ e("div", { className: "hidden md:block h-14 w-px mx-2", style: { background: "#c9a84c", opacity: 0.5 } }),
        /* @__PURE__ */ t("div", { className: "flex flex-col items-start", children: [
          /* @__PURE__ */ e("p", { className: "text-base italic", style: { color: "#1a1a1a", fontWeight: 700, fontFamily: "Georgia, serif", lineHeight: 1.4 }, children: "Authentic Spices." }),
          /* @__PURE__ */ e("p", { className: "text-base italic", style: { color: "#1a1a1a", fontWeight: 700, fontFamily: "Georgia, serif", lineHeight: 1.4 }, children: "Authentic India." }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-1 mt-1", children: [
            /* @__PURE__ */ e("div", { className: "w-4 h-px", style: { background: "#c9a84c" } }),
            /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 20 20", children: /* @__PURE__ */ e("path", { d: "M10 2 C6 6 4 10 10 18 C16 10 14 6 10 2Z", fill: "#2d6a1e" }) }),
            /* @__PURE__ */ e("div", { className: "w-4 h-px", style: { background: "#c9a84c" } })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "absolute right-0 top-0 bottom-0 w-56 overflow-hidden pointer-events-none", style: { opacity: 0.55 }, children: /* @__PURE__ */ t("svg", { viewBox: "0 0 220 160", className: "w-full h-full", preserveAspectRatio: "xMidYMid slice", children: [
        /* @__PURE__ */ e("rect", { x: "0", y: "0", width: "220", height: "160", fill: "#f5ede0" }),
        /* @__PURE__ */ e("rect", { x: "40", y: "118", width: "140", height: "8", fill: "#d4b88a", opacity: "0.5" }),
        /* @__PURE__ */ e("path", { d: "M40 122 Q110 120 180 122", stroke: "#c4a882", strokeWidth: "0.5", fill: "none" }),
        /* @__PURE__ */ e("rect", { x: "80", y: "72", width: "60", height: "50", fill: "#d4b48a" }),
        /* @__PURE__ */ e("path", { d: "M80 72 Q110 30 140 72", fill: "#e0c8a0" }),
        /* @__PURE__ */ e("line", { x1: "110", y1: "30", x2: "110", y2: "22", stroke: "#c4a882", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("ellipse", { cx: "110", cy: "20", rx: "2.5", ry: "4", fill: "#c4a882" }),
        /* @__PURE__ */ e("rect", { x: "55", y: "82", width: "14", height: "40", fill: "#d4b48a" }),
        /* @__PURE__ */ e("path", { d: "M55 82 Q62 68 69 82", fill: "#e0c8a0" }),
        /* @__PURE__ */ e("line", { x1: "62", y1: "68", x2: "62", y2: "62", stroke: "#c4a882", strokeWidth: "1" }),
        /* @__PURE__ */ e("ellipse", { cx: "62", cy: "60", rx: "2", ry: "3", fill: "#c4a882" }),
        /* @__PURE__ */ e("rect", { x: "151", y: "82", width: "14", height: "40", fill: "#d4b48a" }),
        /* @__PURE__ */ e("path", { d: "M151 82 Q158 68 165 82", fill: "#e0c8a0" }),
        /* @__PURE__ */ e("line", { x1: "158", y1: "68", x2: "158", y2: "62", stroke: "#c4a882", strokeWidth: "1" }),
        /* @__PURE__ */ e("ellipse", { cx: "158", cy: "60", rx: "2", ry: "3", fill: "#c4a882" }),
        /* @__PURE__ */ e("path", { d: "M96 95 Q103 85 110 95 L110 122 L96 122Z", fill: "#c4a882", opacity: "0.4" }),
        /* @__PURE__ */ e("path", { d: "M110 95 Q117 85 124 95 L124 122 L110 122Z", fill: "#c4a882", opacity: "0.4" }),
        /* @__PURE__ */ e("circle", { cx: "175", cy: "118", r: "4", fill: "#8a6a40" }),
        /* @__PURE__ */ e("path", { d: "M172 122 L170 130 M178 122 L176 130", stroke: "#8a6a40", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("path", { d: "M170 130 L175 128 L176 130", stroke: "#8a6a40", strokeWidth: "1.2", fill: "none" }),
        /* @__PURE__ */ e("rect", { x: "42", y: "98", width: "3", height: "20", fill: "#7a5a30" }),
        /* @__PURE__ */ e("ellipse", { cx: "43.5", cy: "94", rx: "6", ry: "9", fill: "#6a7a30" }),
        /* @__PURE__ */ e("rect", { x: "174", y: "100", width: "3", height: "18", fill: "#7a5a30" }),
        /* @__PURE__ */ e("ellipse", { cx: "175.5", cy: "96", rx: "6", ry: "9", fill: "#6a7a30" })
      ] }) })
    ] }),
    /* @__PURE__ */ e("div", { className: "w-full h-1", style: { background: "linear-gradient(to right, transparent, #c9a84c 30%, #c9a84c 70%, transparent)" } })
  ] });
}
const Nt = "https://wa.me/919895999505?text=Hello%20Voyageur%20Overseas%2C%20I%20am%20interested%20in%20your%20products.";
function vt() {
  const [r, a] = v({ name: "", email: "", company: "", message: "" }), [i, d] = v(!1);
  function n(o) {
    o.preventDefault(), d(!0), a({ name: "", email: "", company: "", message: "" });
  }
  return /* @__PURE__ */ e("section", { id: "contact-section", className: "py-14 px-4", style: { background: "white" }, children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-12", children: [
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ e("div", { className: "h-px w-8", style: { background: "#c9a84c" } }),
        /* @__PURE__ */ e("span", { className: "text-xs tracking-[0.3em] uppercase", style: { color: "#c9a84c" }, children: "Get In Touch" })
      ] }),
      /* @__PURE__ */ e("h2", { style: { color: "#1a1a1a" }, children: "Contact Us" }),
      /* @__PURE__ */ e("p", { className: "mt-3 text-sm leading-relaxed", style: { color: "#666" }, children: "Ready to source premium Indian spices & coir products? Reach out for bulk orders, pricing, and custom packaging solutions." }),
      /* @__PURE__ */ e("div", { className: "mt-8 flex flex-col gap-5", children: [
        { icon: j, label: "Phone / WhatsApp", value: "+91 9895 999 505", href: Nt },
        { icon: ie, label: "Email", value: "info@voyageuroverseas.com", href: "mailto:info@voyageuroverseas.com" },
        { icon: se, label: "Address", value: "158/A, Koyilandy, Kozhikode, Kerala 673306, India", href: void 0 }
      ].map(({ icon: o, label: y, value: s, href: x }) => /* @__PURE__ */ t("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ e("div", { className: "w-10 h-10 shrink-0 rounded-full flex items-center justify-center", style: { background: "#faf6f0", border: "1px solid #e8dfd0" }, children: /* @__PURE__ */ e(o, { className: "w-4 h-4", style: { color: "#c9a84c" } }) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "text-xs tracking-wider mb-0.5", style: { color: "#999", fontWeight: 600 }, children: y }),
          x ? /* @__PURE__ */ e("a", { href: x, target: "_blank", rel: "noopener noreferrer", className: "text-sm hover:text-amber-600 transition-colors", style: { color: "#333" }, children: s }) : /* @__PURE__ */ e("div", { className: "text-sm", style: { color: "#333" }, children: s })
        ] })
      ] }, y)) })
    ] }),
    i ? /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center py-12 rounded-2xl", style: { background: "#f0faf4", border: "1.5px solid #5aab6e" }, children: [
      /* @__PURE__ */ e(L, { className: "w-14 h-14 mb-4", style: { color: "#2d7a3a" } }),
      /* @__PURE__ */ e("h3", { className: "mb-2", style: { color: "#1a4a20" }, children: "Message Sent Successfully!" }),
      /* @__PURE__ */ t("p", { className: "text-sm text-center mb-6 max-w-xs", style: { color: "#555", lineHeight: 1.7 }, children: [
        "Thank you for reaching out to ",
        /* @__PURE__ */ e("strong", { children: "Voyageur Overseas" }),
        ". Our team will get back to you within 24 hours."
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => d(!1),
          className: "px-6 py-2.5 text-sm text-white rounded-lg transition-opacity hover:opacity-90",
          style: { background: "#2d4a1e", fontWeight: 600 },
          children: "Send Another Message"
        }
      )
    ] }) : /* @__PURE__ */ t("form", { onSubmit: n, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("label", { className: "text-xs tracking-wider mb-1.5 block", style: { color: "#666" }, children: "Your Name *" }),
          /* @__PURE__ */ e(
            "input",
            {
              required: !0,
              className: "w-full px-4 py-2.5 text-sm rounded-lg outline-none border transition-colors focus:border-amber-400",
              style: { borderColor: "#e8dfd0", background: "#faf6f0" },
              value: r.name,
              onChange: (o) => a({ ...r, name: o.target.value }),
              placeholder: "John Smith"
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("label", { className: "text-xs tracking-wider mb-1.5 block", style: { color: "#666" }, children: "Email *" }),
          /* @__PURE__ */ e(
            "input",
            {
              required: !0,
              type: "email",
              className: "w-full px-4 py-2.5 text-sm rounded-lg outline-none border transition-colors focus:border-amber-400",
              style: { borderColor: "#e8dfd0", background: "#faf6f0" },
              value: r.email,
              onChange: (o) => a({ ...r, email: o.target.value }),
              placeholder: "john@company.com"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("label", { className: "text-xs tracking-wider mb-1.5 block", style: { color: "#666" }, children: "Company Name" }),
        /* @__PURE__ */ e(
          "input",
          {
            className: "w-full px-4 py-2.5 text-sm rounded-lg outline-none border focus:border-amber-400",
            style: { borderColor: "#e8dfd0", background: "#faf6f0" },
            value: r.company,
            onChange: (o) => a({ ...r, company: o.target.value }),
            placeholder: "Your Company"
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("label", { className: "text-xs tracking-wider mb-1.5 block", style: { color: "#666" }, children: "Message / Requirements *" }),
        /* @__PURE__ */ e(
          "textarea",
          {
            required: !0,
            rows: 5,
            className: "w-full px-4 py-2.5 text-sm rounded-lg outline-none border resize-none focus:border-amber-400",
            style: { borderColor: "#e8dfd0", background: "#faf6f0" },
            value: r.message,
            onChange: (o) => a({ ...r, message: o.target.value }),
            placeholder: "Tell us about your requirements, quantities, destination country..."
          }
        )
      ] }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "submit",
          className: "flex items-center justify-center gap-2 px-8 py-3.5 text-sm tracking-wider text-white transition-all hover:opacity-90 hover:scale-105",
          style: { background: "#c9a84c", borderRadius: 6, fontWeight: 700, boxShadow: "0 3px 14px rgba(201,168,76,0.3)" },
          children: [
            /* @__PURE__ */ e(Ye, { className: "w-4 h-4" }),
            " SEND MESSAGE"
          ]
        }
      )
    ] })
  ] }) });
}
const J = "https://wa.me/919895999505?text=Hello%20Voyageur%20Overseas%2C%20I%20am%20interested%20in%20your%20products.", kt = "https://www.linkedin.com/company/voyageur-overseas", Ct = "https://www.instagram.com/voyageuroverseas", Mt = [
  { label: "Home", action: "home", target: "" },
  { label: "About Us", action: "page", target: "", page: "about" },
  { label: "Our Products", action: "scroll", target: "products-section" },
  { label: "Quality", action: "page", target: "", page: "quality" },
  { label: "Certifications", action: "scroll", target: "certifications-section" },
  { label: "Gallery", action: "page", target: "", page: "gallery" },
  { label: "Contact Us", action: "scroll", target: "contact-section" }
];
function St({ setActivePage: r, setActiveCategory: a, scrollTo: i, setActiveNav: d }) {
  function n(o) {
    if (o.action === "page" && o.page) {
      r(o.page), d(o.label), window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    r("home"), o.action === "home" ? (d("Home"), window.scrollTo({ top: 0, behavior: "smooth" })) : setTimeout(() => i(o.target), 100);
  }
  return /* @__PURE__ */ t("footer", { style: { background: "#0f1e08" }, children: [
    /* @__PURE__ */ e("div", { className: "w-full h-0.5", style: { background: "linear-gradient(to right, transparent, #c9a84c, transparent)" } }),
    /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5 mb-4 cursor-pointer", onClick: () => {
          r("home"), window.scrollTo({ top: 0, behavior: "smooth" });
        }, children: [
          /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-full flex items-center justify-center", style: { background: "linear-gradient(135deg, #c9a84c, #8b6914)" }, children: /* @__PURE__ */ e(O, { className: "w-5 h-5 text-white" }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "tracking-widest text-xs", style: { color: "#c9a84c", fontWeight: 900 }, children: "VOYAGEUR" }),
            /* @__PURE__ */ e("div", { className: "tracking-widest text-sm", style: { color: "white", fontWeight: 600 }, children: "OVERSEAS" })
          ] })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-xs leading-relaxed mb-5", style: { color: "rgba(255,255,255,0.55)" }, children: "Premium Indian spices & natural coir products exported worldwide. Quality, purity, and authenticity on every shipment." }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e(
            "a",
            {
              href: kt,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110",
              style: { background: "rgba(0,119,181,0.15)", border: "1px solid rgba(0,119,181,0.35)" },
              title: "LinkedIn",
              children: /* @__PURE__ */ e(q, { className: "w-5 h-5", style: { color: "#7ab4d8" } })
            }
          ),
          /* @__PURE__ */ e(
            "a",
            {
              href: Ct,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110",
              style: { background: "rgba(225,48,108,0.12)", border: "1px solid rgba(225,48,108,0.3)" },
              title: "Instagram",
              children: /* @__PURE__ */ e(U, { className: "w-5 h-5", style: { color: "#f4a0c0" } })
            }
          ),
          /* @__PURE__ */ e(
            "a",
            {
              href: J,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110",
              style: { background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.3)" },
              title: "Chat on WhatsApp",
              children: /* @__PURE__ */ e(T, { className: "w-5 h-5", style: { color: "#5ae07a" } })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("h4", { className: "mb-5 text-xs tracking-widest", style: { color: "#c9a84c" }, children: "QUICK LINKS" }),
        /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: Mt.map((o) => /* @__PURE__ */ t(
          "button",
          {
            onClick: () => n(o),
            className: "text-left text-xs py-1 transition-colors hover:text-amber-400 group flex items-center gap-1.5",
            style: { color: "rgba(255,255,255,0.6)" },
            children: [
              /* @__PURE__ */ e("span", { className: "w-1.5 h-1.5 rounded-full transition-colors group-hover:bg-amber-400", style: { background: "rgba(201,168,76,0.4)", flexShrink: 0 } }),
              o.label
            ]
          },
          o.label
        )) })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("h4", { className: "mb-5 text-xs tracking-widest", style: { color: "#c9a84c" }, children: "CONTACT" }),
        /* @__PURE__ */ t("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ t("a", { href: J, target: "_blank", rel: "noopener noreferrer", className: "flex items-start gap-3 group", children: [
            /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded-full flex items-center justify-center shrink-0", style: { background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }, children: /* @__PURE__ */ e(j, { className: "w-3.5 h-3.5", style: { color: "#c9a84c" } }) }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-xs mb-0.5", style: { color: "rgba(255,255,255,0.4)" }, children: "Phone / WhatsApp" }),
              /* @__PURE__ */ e("div", { className: "text-xs group-hover:text-amber-400 transition-colors", style: { color: "rgba(255,255,255,0.7)" }, children: "+91 9895 999 505" })
            ] })
          ] }),
          /* @__PURE__ */ t("a", { href: "mailto:info@voyageuroverseas.com", className: "flex items-start gap-3 group", children: [
            /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded-full flex items-center justify-center shrink-0", style: { background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }, children: /* @__PURE__ */ e(ie, { className: "w-3.5 h-3.5", style: { color: "#c9a84c" } }) }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-xs mb-0.5", style: { color: "rgba(255,255,255,0.4)" }, children: "Email" }),
              /* @__PURE__ */ e("div", { className: "text-xs group-hover:text-amber-400 transition-colors", style: { color: "rgba(255,255,255,0.7)" }, children: "info@voyageuroverseas.com" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded-full flex items-center justify-center shrink-0", style: { background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }, children: /* @__PURE__ */ e(se, { className: "w-3.5 h-3.5", style: { color: "#c9a84c" } }) }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-xs mb-0.5", style: { color: "rgba(255,255,255,0.4)" }, children: "Address" }),
              /* @__PURE__ */ t("div", { className: "text-xs", style: { color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }, children: [
                "158/A, Koyilandy",
                /* @__PURE__ */ e("br", {}),
                "Kozhikode, Kerala 673306"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "border-t px-4 py-5", style: { borderColor: "rgba(255,255,255,0.07)" }, children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3", children: [
      /* @__PURE__ */ e("span", { className: "text-xs", style: { color: "rgba(255,255,255,0.3)" }, children: "© 2026 Voyageur Overseas. All rights reserved." }),
      /* @__PURE__ */ e("span", { className: "text-xs italic", style: { color: "#c9a84c" }, children: "From origin to destination." })
    ] }) })
  ] });
}
const At = {
  spices: {
    label: "Spices",
    accent: "#c9a84c",
    bg: "#2d4a1e",
    icon: "🌶",
    items: ["Green Cardamom", "Black Pepper", "White Pepper", "Cinnamon", "Cassia", "Cloves", "Turmeric", "Red Chilli", "Cumin Seeds", "Coriander Seeds", "Fenugreek", "Mustard Seeds", "Star Anise", "Nutmeg", "Mace", "Ginger", "Fennel Seeds", "Bay Leaf"]
  },
  coir: {
    label: "Coir Products",
    accent: "#5aab6e",
    bg: "#1a4a2e",
    icon: "🌿",
    items: ["Coco Peat Blocks", "Coco Peat Discs", "Coir Mat (Plain)", "Coir Mat (Tufted)", "Coir Rope", "Coir Fibre (Brown)", "Coir Fibre (White)", "Coir Geo-Textile", "Coir Grow Bags", "Coir Logs", "Coir Twine", "Brushes & Brooms"]
  },
  coconut: {
    label: "Coconut Products",
    accent: "#b58a30",
    bg: "#3a2e10",
    icon: "🥥",
    items: ["Virgin Coconut Oil", "Refined Coconut Oil", "Desiccated Coconut", "Coconut Milk Powder", "Coconut Shell Charcoal", "Activated Carbon", "Coconut Shell Powder", "Coconut Water"]
  },
  others: {
    label: "Agro Products",
    accent: "#9b7cb8",
    bg: "#2a1a40",
    icon: "✦",
    items: ["Basmati Rice", "Non-Basmati Rice", "Cashew W180", "Cashew W240", "Cashew W320", "Dried Mango", "Tamarind"]
  }
}, It = ["Bulk (Jute Bags)", "Retail Pouches (50g–500g)", "Vacuum Sealed Packs", "Custom Branded Packaging"], _t = ["United States", "United Kingdom", "Germany", "France", "UAE", "Saudi Arabia", "Australia", "Canada", "Japan", "Singapore", "Netherlands", "Malaysia", "Other"];
function Et({ setActivePage: r }) {
  const [a, i] = v(1), [d, n] = v(!1), [o, y] = v(null), [s, x] = v("kg"), [k, m] = v({}), [g, b] = v(""), [h, w] = v({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    packaging: "",
    deliveryDate: "",
    notes: "",
    selectedItems: {}
  });
  function c(l, u) {
    w((f) => ({ ...f, [l]: u })), m((f) => {
      const N = { ...f };
      return delete N[l], N;
    });
  }
  function S(l) {
    w((u) => {
      const f = { ...u.selectedItems };
      return l in f ? delete f[l] : f[l] = "", { ...u, selectedItems: f };
    });
  }
  function C(l, u) {
    w((f) => ({ ...f, selectedItems: { ...f.selectedItems, [l]: u } })), u && m((f) => {
      const N = { ...f };
      return delete N[`qty_${l}`], N;
    });
  }
  function me() {
    const l = {};
    return h.companyName.trim() || (l.companyName = "Company name is required"), h.contactName.trim() || (l.contactName = "Contact person name is required"), h.email.trim() ? /\S+@\S+\.\S+/.test(h.email) || (l.email = "Please enter a valid email address") : l.email = "Email address is required", m(l), Object.keys(l).length === 0;
  }
  function he() {
    if (Object.keys(h.selectedItems).length === 0)
      return b("Please select at least one product before proceeding."), !1;
    const u = {};
    return Object.entries(h.selectedItems).forEach(([f, N]) => {
      (!N || parseFloat(N) <= 0) && (u[`qty_${f}`] = `Please enter quantity for ${f}`);
    }), m(u), Object.keys(u).length > 0 ? (b(`Please enter the required weight (in ${s}) for all selected products.`), !1) : (b(""), !0);
  }
  const A = Object.keys(h.selectedItems).length;
  return d ? /* @__PURE__ */ e("div", { className: "min-h-screen flex flex-col items-center justify-center px-4 py-20", style: { background: "#faf6f0" }, children: /* @__PURE__ */ t("div", { className: "text-center max-w-md", children: [
    /* @__PURE__ */ e("div", { className: "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6", style: { background: "#2d4a1e" }, children: /* @__PURE__ */ e(L, { className: "w-10 h-10 text-white" }) }),
    /* @__PURE__ */ e("h2", { className: "mb-3", style: { color: "#1a1a1a" }, children: "Export Enquiry Submitted!" }),
    /* @__PURE__ */ t("p", { className: "text-sm mb-8", style: { color: "#666" }, children: [
      "Thank you, ",
      /* @__PURE__ */ e("strong", { children: h.contactName }),
      ". Our export team will contact you within 24 hours with a tailored quote."
    ] }),
    /* @__PURE__ */ t("div", { className: "p-5 rounded-xl text-left mb-8", style: { background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }, children: [
      /* @__PURE__ */ e("div", { className: "text-xs tracking-widest mb-3", style: { color: "#c9a84c", fontWeight: 700 }, children: "ORDER SUMMARY" }),
      /* @__PURE__ */ t("div", { className: "text-sm space-y-1.5", style: { color: "#555" }, children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("strong", { children: "Company:" }),
          " ",
          h.companyName
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("strong", { children: "Destination:" }),
          " ",
          h.country
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("strong", { children: [
            "Products (",
            A,
            "):"
          ] }),
          " ",
          Object.keys(h.selectedItems).slice(0, 4).join(", "),
          A > 4 ? ` +${A - 4} more` : ""
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("strong", { children: "Unit:" }),
          " ",
          s.toUpperCase()
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("strong", { children: "Packaging:" }),
          " ",
          h.packaging || "—"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("button", { onClick: () => r("home"), className: "px-8 py-3 text-sm text-white tracking-wider rounded-lg", style: { background: "#2d4a1e", fontWeight: 600 }, children: "BACK TO HOME" })
  ] }) }) : /* @__PURE__ */ t("div", { className: "min-h-screen", style: { background: "#faf6f0" }, children: [
    /* @__PURE__ */ e("div", { className: "py-8 px-4", style: { background: "#2d4a1e" }, children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ t("button", { onClick: () => r("home"), className: "flex items-center gap-2 text-sm mb-5 hover:opacity-80 transition-opacity", style: { color: "rgba(255,255,255,0.7)" }, children: [
        /* @__PURE__ */ e(R, { className: "w-4 h-4" }),
        " Back to Home"
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-1", children: [
        /* @__PURE__ */ e(V, { className: "w-5 h-5", style: { color: "#c9a84c" } }),
        /* @__PURE__ */ e("span", { className: "text-xs tracking-[0.3em] uppercase", style: { color: "#c9a84c" }, children: "Export Enquiry" })
      ] }),
      /* @__PURE__ */ e("h1", { className: "text-white mb-1", style: { fontSize: "1.8rem", fontWeight: 800 }, children: "Get A Quote" }),
      /* @__PURE__ */ e("p", { className: "text-sm", style: { color: "rgba(255,255,255,0.65)" }, children: "Fill in your requirements and we'll send a competitive export quotation." }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-3 mt-6 flex-wrap", children: [{ n: 1, label: "Company Info", icon: Le }, { n: 2, label: "Select Products", icon: Ve }, { n: 3, label: "Destination", icon: O }].map(({ n: l, label: u, icon: f }, N) => /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "w-8 h-8 rounded-full flex items-center justify-center text-xs cursor-pointer transition-colors",
            style: { background: a >= l ? "#c9a84c" : "rgba(255,255,255,0.15)", color: a >= l ? "white" : "rgba(255,255,255,0.5)", fontWeight: 700 },
            onClick: () => a > l && i(l),
            children: a > l ? /* @__PURE__ */ e(L, { className: "w-4 h-4" }) : l
          }
        ),
        /* @__PURE__ */ e("span", { className: "text-xs hidden sm:block", style: { color: a === l ? "white" : "rgba(255,255,255,0.5)", fontWeight: a === l ? 600 : 400 }, children: u }),
        N < 2 && /* @__PURE__ */ e(E, { className: "w-4 h-4", style: { color: "rgba(255,255,255,0.3)" } })
      ] }, l)) })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "max-w-4xl mx-auto px-4 py-8", children: /* @__PURE__ */ t("form", { onSubmit: (l) => {
      l.preventDefault(), a === 3 && n(!0);
    }, children: [
      a === 1 && /* @__PURE__ */ t("div", { className: "p-8 rounded-2xl", style: { background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }, children: [
        /* @__PURE__ */ e("h3", { className: "mb-6", style: { color: "#1a1a1a" }, children: "Company Information" }),
        /* @__PURE__ */ e("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          { key: "companyName", label: "Company Name *", ph: "Your Company Ltd." },
          { key: "contactName", label: "Contact Person *", ph: "Full Name" },
          { key: "email", label: "Email Address *", ph: "email@company.com", type: "email" },
          { key: "phone", label: "Phone Number", ph: "+1 234 567 8900" }
        ].map(({ key: l, label: u, ph: f, type: N }) => /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("label", { className: "block text-xs tracking-wider mb-1.5", style: { color: "#888" }, children: u }),
          /* @__PURE__ */ e(
            "input",
            {
              type: N ?? "text",
              placeholder: f,
              className: "w-full px-4 py-3 text-sm rounded-lg border outline-none transition-colors",
              style: { borderColor: k[l] ? "#e53e3e" : "#e8dfd0", background: "#faf6f0" },
              value: h[l],
              onChange: (W) => c(l, W.target.value)
            }
          ),
          k[l] && /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 mt-1.5", children: [
            /* @__PURE__ */ e(P, { className: "w-3.5 h-3.5 shrink-0", style: { color: "#e53e3e" } }),
            /* @__PURE__ */ e("span", { className: "text-xs", style: { color: "#e53e3e" }, children: k[l] })
          ] })
        ] }, l)) }),
        /* @__PURE__ */ e("div", { className: "flex justify-end mt-8", children: /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => {
              me() && i(2);
            },
            className: "flex items-center gap-2 px-8 py-3.5 text-sm text-white tracking-wider rounded-lg",
            style: { background: "#c9a84c", fontWeight: 700 },
            children: [
              "NEXT: SELECT PRODUCTS ",
              /* @__PURE__ */ e(E, { className: "w-4 h-4" })
            ]
          }
        ) })
      ] }),
      a === 2 && /* @__PURE__ */ t("div", { className: "p-8 rounded-2xl", style: { background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }, children: [
        /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center justify-between gap-3 mb-2", children: [
          /* @__PURE__ */ e("h3", { style: { color: "#1a1a1a" }, children: "Select Products & Quantities" }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-xs", style: { color: "#888" }, children: "Unit:" }),
            ["kg", "lb"].map((l) => /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => x(l),
                className: "px-4 py-1.5 text-xs rounded-full border transition-all",
                style: { background: s === l ? "#2d4a1e" : "white", color: s === l ? "white" : "#555", borderColor: s === l ? "#2d4a1e" : "#e8dfd0", fontWeight: s === l ? 700 : 400 },
                children: l.toUpperCase()
              },
              l
            )),
            A > 0 && /* @__PURE__ */ t("span", { className: "text-xs px-3 py-1 rounded-full", style: { background: "#2d4a1e", color: "white", fontWeight: 700 }, children: [
              A,
              " selected"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("p", { className: "text-xs mb-4", style: { color: "#999" }, children: [
          "Click a category to expand, select products, and enter weight in ",
          s.toUpperCase(),
          "."
        ] }),
        g && /* @__PURE__ */ t("div", { className: "flex items-center gap-2 p-3 rounded-lg mb-4", style: { background: "#fff5f5", border: "1px solid #e53e3e" }, children: [
          /* @__PURE__ */ e(P, { className: "w-4 h-4 shrink-0", style: { color: "#e53e3e" } }),
          /* @__PURE__ */ e("span", { className: "text-sm", style: { color: "#e53e3e" }, children: g })
        ] }),
        /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 mb-5", children: Object.entries(At).map(([l, u]) => {
          const f = o === l, N = u.items.filter((M) => M in h.selectedItems), W = N.some((M) => k[`qty_${M}`]);
          return /* @__PURE__ */ t(
            "div",
            {
              className: "rounded-xl overflow-hidden border transition-all",
              style: { borderColor: f ? u.accent : W ? "#e53e3e" : "#e8dfd0" },
              children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    className: "w-full flex items-center justify-between px-5 py-4 transition-colors",
                    style: { background: f ? u.bg : "#faf6f0" },
                    onClick: () => y(f ? null : l),
                    children: [
                      /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("span", { className: "text-lg", children: u.icon }),
                        /* @__PURE__ */ t("div", { className: "text-left", children: [
                          /* @__PURE__ */ e("div", { className: "text-sm", style: { color: f ? "white" : "#1a1a1a", fontWeight: 700 }, children: u.label }),
                          /* @__PURE__ */ e("div", { className: "text-xs", style: { color: f ? "rgba(255,255,255,0.65)" : "#999" }, children: N.length > 0 ? `${N.length} product(s) selected` : `${u.items.length} products available` })
                        ] })
                      ] }),
                      /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                        N.length > 0 && /* @__PURE__ */ e("span", { className: "px-2 py-0.5 rounded-full text-xs", style: { background: u.accent, color: "white", fontWeight: 700 }, children: N.length }),
                        W && /* @__PURE__ */ e(P, { className: "w-4 h-4", style: { color: "#e53e3e" } }),
                        /* @__PURE__ */ e(E, { className: "w-4 h-4 transition-transform", style: { color: f ? "white" : "#999", transform: f ? "rotate(90deg)" : "rotate(0)" } })
                      ] })
                    ]
                  }
                ),
                f && /* @__PURE__ */ e("div", { className: "px-5 py-4 grid sm:grid-cols-2 gap-2.5", style: { background: "#fcfaf7" }, children: u.items.map((M) => {
                  const _ = M in h.selectedItems, D = k[`qty_${M}`];
                  return /* @__PURE__ */ t(
                    "div",
                    {
                      className: "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all",
                      style: { background: _ ? `${u.accent}12` : "white", border: `1px solid ${D ? "#e53e3e" : _ ? u.accent : "#e8dfd0"}` },
                      onClick: () => S(M),
                      children: [
                        /* @__PURE__ */ e(
                          "div",
                          {
                            className: "w-5 h-5 rounded flex items-center justify-center shrink-0 transition-all",
                            style: { background: _ ? u.accent : "transparent", border: `1.5px solid ${_ ? u.accent : "#ccc"}` },
                            children: _ && /* @__PURE__ */ e(L, { className: "w-3.5 h-3.5 text-white" })
                          }
                        ),
                        /* @__PURE__ */ e("span", { className: "text-xs flex-1", style: { color: "#333", fontWeight: _ ? 600 : 400 }, children: M }),
                        _ && /* @__PURE__ */ t("div", { className: "flex items-center gap-1", onClick: (H) => H.stopPropagation(), children: [
                          /* @__PURE__ */ e(
                            "input",
                            {
                              type: "number",
                              placeholder: "Qty",
                              min: "0.1",
                              step: "0.1",
                              className: "w-16 px-2 py-1 text-xs rounded border outline-none text-center",
                              style: { borderColor: D ? "#e53e3e" : `${u.accent}66`, background: "white" },
                              value: h.selectedItems[M],
                              onChange: (H) => C(M, H.target.value)
                            }
                          ),
                          /* @__PURE__ */ e("span", { className: "text-xs", style: { color: "#888" }, children: s })
                        ] })
                      ]
                    },
                    M
                  );
                }) })
              ]
            },
            l
          );
        }) }),
        /* @__PURE__ */ t("div", { className: "mb-5", children: [
          /* @__PURE__ */ e("label", { className: "block text-xs tracking-wider mb-2", style: { color: "#888" }, children: "PACKAGING PREFERENCE" }),
          /* @__PURE__ */ e("div", { className: "grid sm:grid-cols-2 gap-3", children: It.map((l) => /* @__PURE__ */ t(
            "div",
            {
              className: "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all",
              style: { borderColor: h.packaging === l ? "#c9a84c" : "#e8dfd0", background: h.packaging === l ? "rgba(201,168,76,0.07)" : "#faf6f0" },
              onClick: () => w({ ...h, packaging: l }),
              children: [
                /* @__PURE__ */ e("div", { className: "w-4 h-4 rounded-full border flex items-center justify-center shrink-0", style: { borderColor: h.packaging === l ? "#c9a84c" : "#ccc" }, children: h.packaging === l && /* @__PURE__ */ e("div", { className: "w-2 h-2 rounded-full", style: { background: "#c9a84c" } }) }),
                /* @__PURE__ */ e("span", { className: "text-xs", style: { color: "#333" }, children: l })
              ]
            },
            l
          )) })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex justify-between mt-6", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: () => i(1), className: "px-6 py-3 text-sm", style: { color: "#666" }, children: "← BACK" }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: () => {
                he() && i(3);
              },
              className: "flex items-center gap-2 px-8 py-3.5 text-sm text-white tracking-wider rounded-lg",
              style: { background: "#c9a84c", fontWeight: 700 },
              children: [
                "NEXT: DESTINATION ",
                /* @__PURE__ */ e(E, { className: "w-4 h-4" })
              ]
            }
          )
        ] })
      ] }),
      a === 3 && /* @__PURE__ */ t("div", { className: "p-8 rounded-2xl", style: { background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }, children: [
        /* @__PURE__ */ e("h3", { className: "mb-6", style: { color: "#1a1a1a" }, children: "Destination & Delivery" }),
        /* @__PURE__ */ t("div", { className: "grid sm:grid-cols-2 gap-5 mb-5", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("label", { className: "block text-xs tracking-wider mb-1.5", style: { color: "#888" }, children: "DESTINATION COUNTRY *" }),
            /* @__PURE__ */ t(
              "select",
              {
                required: !0,
                className: "w-full px-4 py-3 text-sm rounded-lg border outline-none appearance-none cursor-pointer",
                style: { borderColor: "#e8dfd0", background: "#faf6f0" },
                value: h.country,
                onChange: (l) => w({ ...h, country: l.target.value }),
                children: [
                  /* @__PURE__ */ e("option", { value: "", children: "Select country…" }),
                  _t.map((l) => /* @__PURE__ */ e("option", { value: l, children: l }, l))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("label", { className: "block text-xs tracking-wider mb-1.5", style: { color: "#888" }, children: "REQUIRED BY DATE" }),
            /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ e(
              "input",
              {
                type: "date",
                className: "w-full px-4 py-3 pr-10 text-sm rounded-lg border outline-none cursor-pointer",
                style: { borderColor: "#e8dfd0", background: "#faf6f0", colorScheme: "light" },
                min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                value: h.deliveryDate,
                onChange: (l) => w({ ...h, deliveryDate: l.target.value })
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "mb-5", children: [
          /* @__PURE__ */ e("label", { className: "block text-xs tracking-wider mb-1.5", style: { color: "#888" }, children: "ADDITIONAL NOTES" }),
          /* @__PURE__ */ e(
            "textarea",
            {
              rows: 4,
              className: "w-full px-4 py-3 text-sm rounded-lg border outline-none resize-none",
              style: { borderColor: "#e8dfd0", background: "#faf6f0" },
              value: h.notes,
              onChange: (l) => w({ ...h, notes: l.target.value }),
              placeholder: "Certifications required, label specifications, port of entry…"
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "p-5 rounded-xl mb-6", style: { background: "#faf6f0", border: "1px solid #e8dfd0" }, children: [
          /* @__PURE__ */ e("div", { className: "text-xs tracking-widest mb-3", style: { color: "#c9a84c", fontWeight: 700 }, children: "ORDER PREVIEW" }),
          /* @__PURE__ */ t("div", { className: "grid sm:grid-cols-2 gap-2 text-xs", style: { color: "#555" }, children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("strong", { children: "Company:" }),
              " ",
              h.companyName
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("strong", { children: "Contact:" }),
              " ",
              h.contactName
            ] }),
            /* @__PURE__ */ t("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ t("strong", { children: [
                "Products (",
                A,
                "):"
              ] }),
              " ",
              Object.keys(h.selectedItems).slice(0, 5).join(", "),
              A > 5 ? ` +${A - 5} more` : ""
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("strong", { children: "Unit:" }),
              " ",
              s.toUpperCase()
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("strong", { children: "Packaging:" }),
              " ",
              h.packaging || "—"
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("strong", { children: "Destination:" }),
              " ",
              h.country || "—"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e("button", { type: "button", onClick: () => i(2), className: "px-6 py-3 text-sm", style: { color: "#666" }, children: "← BACK" }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "submit",
              className: "flex items-center gap-2 px-8 py-3.5 text-sm text-white tracking-wider rounded-lg",
              style: { background: "#2d4a1e", fontWeight: 700 },
              children: [
                /* @__PURE__ */ e(V, { className: "w-4 h-4" }),
                " SUBMIT ENQUIRY"
              ]
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
function Lt({ setActivePage: r }) {
  return /* @__PURE__ */ t("div", { className: "min-h-screen", style: { background: "#faf6f0" }, children: [
    /* @__PURE__ */ t("div", { className: "relative py-16 px-4 overflow-hidden", style: { background: "#1a3a10" }, children: [
      /* @__PURE__ */ e("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", style: { opacity: 0.08 }, children: /* @__PURE__ */ e(
        "img",
        {
          src: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzcGljZXMlMjBjb2xvcmZ1bCUyMGJvd2xzfGVufDF8fHx8MTc4MTA4ODcxNXww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "",
          className: "w-full h-full object-cover"
        }
      ) }),
      /* @__PURE__ */ t("div", { className: "relative max-w-5xl mx-auto", children: [
        /* @__PURE__ */ t("button", { onClick: () => r("home"), className: "flex items-center gap-2 text-sm mb-6 hover:opacity-80 transition-opacity", style: { color: "rgba(255,255,255,0.65)" }, children: [
          /* @__PURE__ */ e(R, { className: "w-4 h-4" }),
          " Back to Home"
        ] }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ e("div", { className: "h-px w-8", style: { background: "#c9a84c" } }),
          /* @__PURE__ */ e("span", { className: "text-xs tracking-[0.35em] uppercase", style: { color: "#c9a84c" }, children: "Our Story" })
        ] }),
        /* @__PURE__ */ e("h1", { className: "text-white mb-3", style: { fontWeight: 800, fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.1 }, children: "About Voyageur Overseas" }),
        /* @__PURE__ */ e("p", { className: "max-w-xl text-sm leading-relaxed", style: { color: "rgba(255,255,255,0.75)" }, children: "A trusted name in premium Indian spices, coir & coconut products — from origin to destination." })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "max-w-5xl mx-auto px-4 py-14 flex flex-col gap-14", children: [
      /* @__PURE__ */ t("section", { className: "grid lg:grid-cols-2 gap-10 items-center", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ e("div", { className: "h-px w-8", style: { background: "#c9a84c" } }),
            /* @__PURE__ */ e("span", { className: "text-xs tracking-[0.3em] uppercase", style: { color: "#c9a84c" }, children: "Who We Are" })
          ] }),
          /* @__PURE__ */ e("h2", { style: { color: "#1a1a1a" }, children: "About Us" }),
          /* @__PURE__ */ t("p", { className: "mt-4 text-sm leading-relaxed", style: { color: "#555" }, children: [
            /* @__PURE__ */ e("strong", { children: "Voyageur Overseas" }),
            " is a trusted export company based in Koyilandy, Kozhikode, Kerala, India. We specialise in exporting premium-quality Indian spices, natural coir products, and coconut-based goods to clients across 25+ countries."
          ] }),
          /* @__PURE__ */ e("p", { className: "mt-3 text-sm leading-relaxed", style: { color: "#555" }, children: "Founded with a passion for showcasing India's agricultural richness, Voyageur Overseas bridges Indian farmers with global markets. Every product we ship is carefully handpicked, hygienically processed, and packed to retain its natural aroma, taste, and freshness." }),
          /* @__PURE__ */ e("p", { className: "mt-3 text-sm leading-relaxed", style: { color: "#555" }, children: "We are registered with APEDA, IEC, FSSAI, ISO 22000:2018 certified, and registered with the Spices Board of India — ensuring every shipment meets international quality and food-safety standards." }),
          /* @__PURE__ */ e("div", { className: "mt-6 grid grid-cols-3 gap-4", children: [["25+", "Countries"], ["500+", "Clients"], ["15+", "Years Exp."]].map(([a, i]) => /* @__PURE__ */ t("div", { className: "text-center p-4 rounded-xl", style: { background: "white", boxShadow: "0 2px 10px rgba(0,0,0,0.07)" }, children: [
            /* @__PURE__ */ e("div", { className: "text-2xl", style: { color: "#c9a84c", fontWeight: 800 }, children: a }),
            /* @__PURE__ */ e("div", { className: "text-xs mt-1", style: { color: "#666" }, children: i })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ e("div", { className: "rounded-2xl overflow-hidden shadow-xl", style: { height: 380 }, children: /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1486548730767-5c679e8eda6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxJbmRpYW4lMjBzcGljZXMlMjBjb2xvcmZ1bCUyMGJvd2xzfGVufDF8fHx8MTc4MTA4ODcxNXww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Spice powders",
            className: "w-full h-full object-cover"
          }
        ) })
      ] }),
      /* @__PURE__ */ e("section", { className: "rounded-2xl p-10", style: { background: "#1a3a10", color: "white" }, children: /* @__PURE__ */ t("div", { className: "flex items-start gap-5", children: [
        /* @__PURE__ */ e("div", { className: "w-14 h-14 rounded-full flex items-center justify-center shrink-0", style: { background: "rgba(201,168,76,0.15)", border: "1.5px solid #c9a84c" }, children: /* @__PURE__ */ e(lt, { className: "w-6 h-6", style: { color: "#c9a84c" } }) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ e("div", { className: "h-px w-8", style: { background: "#c9a84c" } }),
            /* @__PURE__ */ e("span", { className: "text-xs tracking-[0.3em] uppercase", style: { color: "#c9a84c" }, children: "Our Mission" })
          ] }),
          /* @__PURE__ */ e("h2", { className: "text-white mb-4", children: "Our Mission" }),
          /* @__PURE__ */ e("p", { className: "text-sm leading-relaxed", style: { color: "rgba(255,255,255,0.8)" }, children: "To be the most trusted bridge between India's finest agricultural producers and global importers — delivering premium-quality spices, coir products, and natural coconut goods with complete transparency, reliability, and care." }),
          /* @__PURE__ */ e("div", { className: "mt-6 grid sm:grid-cols-3 gap-4", children: [
            { icon: le, title: "100% Natural", desc: "No artificial additives or preservatives in any of our products." },
            { icon: ke, title: "Certified Quality", desc: "ISO, FSSAI, APEDA & Spices Board certified on every batch." },
            { icon: O, title: "Global Reach", desc: "Exporting to 25+ countries with on-time, doorstep delivery." }
          ].map(({ icon: a, title: i, desc: d }) => /* @__PURE__ */ t("div", { className: "p-4 rounded-xl", style: { background: "rgba(255,255,255,0.07)" }, children: [
            /* @__PURE__ */ e(a, { className: "w-5 h-5 mb-2", style: { color: "#c9a84c" } }),
            /* @__PURE__ */ e("div", { className: "text-sm mb-1", style: { color: "white", fontWeight: 700 }, children: i }),
            /* @__PURE__ */ e("div", { className: "text-xs leading-relaxed", style: { color: "rgba(255,255,255,0.6)" }, children: d })
          ] }, i)) })
        ] })
      ] }) }),
      /* @__PURE__ */ e("section", { className: "rounded-2xl p-10", style: { background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }, children: /* @__PURE__ */ t("div", { className: "flex items-start gap-5", children: [
        /* @__PURE__ */ e("div", { className: "w-14 h-14 rounded-full flex items-center justify-center shrink-0", style: { background: "rgba(201,168,76,0.12)", border: "1.5px solid #c9a84c" }, children: /* @__PURE__ */ e(Te, { className: "w-6 h-6", style: { color: "#c9a84c" } }) }),
        /* @__PURE__ */ t("div", { className: "flex-1", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ e("div", { className: "h-px w-8", style: { background: "#c9a84c" } }),
            /* @__PURE__ */ e("span", { className: "text-xs tracking-[0.3em] uppercase", style: { color: "#c9a84c" }, children: "Our Vision" })
          ] }),
          /* @__PURE__ */ e("h2", { style: { color: "#1a1a1a" }, children: "Our Vision" }),
          /* @__PURE__ */ e("p", { className: "mt-4 text-sm leading-relaxed", style: { color: "#555" }, children: "To become a globally recognised export brand that stands as a symbol of India's agricultural excellence — one that every international buyer trusts for purity, consistency, and ethical sourcing." }),
          /* @__PURE__ */ e("p", { className: "mt-3 text-sm leading-relaxed", style: { color: "#555" }, children: "We envision a future where every kitchen in the world carries a pinch of India's richness, and every eco-conscious buyer chooses Kerala's natural coir. By 2030, we aim to serve 50+ countries and empower 1,000+ Indian farming families through fair-trade partnerships." }),
          /* @__PURE__ */ e("div", { className: "mt-6 p-5 rounded-xl italic text-sm", style: { background: "#faf6f0", borderLeft: "4px solid #c9a84c", color: "#555" }, children: `"From Origin to Destination — We carry India's finest to the world's finest."` })
        ] })
      ] }) })
    ] })
  ] });
}
const Wt = [
  {
    id: "spices",
    icon: "🌶",
    label: "Spices",
    accent: "#c9a84c",
    bg: "#2d4a1e",
    intro: "Our spices are sourced directly from certified farms across Kerala, Tamil Nadu, and Andhra Pradesh. Each batch is sun-dried or machine-dried under controlled conditions, then cleaned, graded, and tested before packing.",
    standards: ["FSSAI Licensed", "APEDA Registered", "Spices Board Certified", "ISO 22000:2018", "Moisture content < 12%", "Aflatoxin-free testing"],
    products: [
      { name: "Green Cardamom", quality: "Bold AGEB, AGE, Extra Bold grades; moisture ≤ 12%; free from extraneous matter. Stored in airtight containers to preserve volatile oil (≥ 3%)." },
      { name: "Black Pepper", quality: "FAQ & SQ grades; bulk density ≥ 550 g/L; piperine content ≥ 4%; machine-cleaned and steam-sterilised for microbial safety." },
      { name: "Cinnamon", quality: "True Ceylon or Cassia type; quills with < 1% broken pieces; moisture ≤ 13%; cinnamaldehyde content tested and certified." },
      { name: "Cloves", quality: "Hand-picked dried buds; eugenol content ≥ 72%; moisture ≤ 12%; free from stems and broken buds." },
      { name: "Turmeric", quality: "Alleppey and Erode varieties; curcumin ≥ 3.5%; moisture ≤ 10%; free from artificial colour and adulterants." },
      { name: "Red Chilli", quality: "S4, S5 Special grades; ASTA colour value ≥ 100; capsaicin tested; aflatoxin B1 < 2 ppb." }
    ]
  },
  {
    id: "coir",
    icon: "🌿",
    label: "Coir Products",
    accent: "#5aab6e",
    bg: "#1a4a2e",
    intro: "Our coir products are manufactured in Alappuzha, Kerala — the coir capital of the world. All products are made from 100% natural coconut husk with no harmful chemicals, and are biodegradable and eco-certified.",
    standards: ["Coir Board of India Certified", "ISO 9001:2015 QMS", "Phytosanitary Certificate", "EC compliance for geo-textiles", "EU import standards compliant"],
    products: [
      { name: "Coco Peat", quality: "EC < 0.5 mS/cm (buffered); pH 5.5–6.5; water holding capacity ≥ 600%; supplied in 650g bricks, 5kg blocks, or loose." },
      { name: "Coir Mat", quality: "Weight 700–1400 gsm; pile height 10–20 mm; colourfast; tested for tensile strength and UV stability." },
      { name: "Coir Rope", quality: "Twisted 3-strand construction; breaking load tested per diameter; salt-water and weather resistant." },
      { name: "Coir Fibre", quality: "Brown fibre length 100–250 mm; moisture ≤ 17%; free from sand and shell fragments; bristle and mattress grades available." },
      { name: "Geo-Textile", quality: "Woven and non-woven types; tensile strength ≥ 10 kN/m; hydraulic permeability tested; UV degradation rate certified." }
    ]
  },
  {
    id: "coconut",
    icon: "🥥",
    label: "Coconut Products",
    accent: "#b58a30",
    bg: "#3a2e10",
    intro: "Kerala's coconut belt produces some of the world's finest coconut-derived products. Our virgin coconut oil is cold-pressed within hours of dehusking to preserve nutrients and flavour.",
    standards: ["FSSAI Licensed", "APEDA Registered", "AGMARK Certified", "Kosher & Halal on request", "ISO 22000:2018"],
    products: [
      { name: "Virgin Coconut Oil", quality: "Cold-pressed, unrefined; moisture ≤ 0.1%; FFA < 0.1%; lauric acid ≥ 48%; peroxide value < 3 meq/kg; crystal-clear appearance." },
      { name: "Desiccated Coconut", quality: "Fine, medium, or coarse grades; moisture ≤ 3%; FFA < 0.1%; free from rancidity; packed in multilayer moisture-barrier bags." },
      { name: "Coconut Shell Charcoal", quality: "Fixed carbon ≥ 75%; ash content < 5%; moisture ≤ 5%; customised mesh sizes for activated carbon production." }
    ]
  },
  {
    id: "others",
    icon: "✦",
    label: "Agro Products",
    accent: "#9b7cb8",
    bg: "#2a1a40",
    intro: "We also export select premium agro products sourced from certified farms across India, meeting all international phytosanitary and food-safety requirements.",
    standards: ["FSSAI Licensed", "APEDA Registered", "Phytosanitary Certificate", "Export Inspection Council (EIC) Certified"],
    products: [
      { name: "Basmati Rice", quality: "Grain length ≥ 7.2 mm; elongation ratio ≥ 1.7; moisture ≤ 12.5%; broken grains < 5%; aromatic, aged 12–24 months." },
      { name: "Cashew Kernels", quality: "W180–W450 grades; whole white kernels; moisture ≤ 5%; free from insect damage; packed in vacuum-sealed tins or pouches." }
    ]
  }
];
function Tt({ setActivePage: r }) {
  return /* @__PURE__ */ t("div", { className: "min-h-screen", style: { background: "#faf6f0" }, children: [
    /* @__PURE__ */ e("div", { className: "py-14 px-4", style: { background: "#1a3a10" }, children: /* @__PURE__ */ t("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ t("button", { onClick: () => r("home"), className: "flex items-center gap-2 text-sm mb-6 hover:opacity-80 transition-opacity", style: { color: "rgba(255,255,255,0.65)" }, children: [
        /* @__PURE__ */ e(R, { className: "w-4 h-4" }),
        " Back to Home"
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ e(et, { className: "w-5 h-5", style: { color: "#c9a84c" } }),
        /* @__PURE__ */ e("span", { className: "text-xs tracking-[0.3em] uppercase", style: { color: "#c9a84c" }, children: "Quality Assurance" })
      ] }),
      /* @__PURE__ */ e("h1", { className: "text-white mb-3", style: { fontWeight: 800, fontSize: "clamp(1.8rem,5vw,3rem)" }, children: "Quality & Certifications" }),
      /* @__PURE__ */ e("p", { className: "max-w-xl text-sm", style: { color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }, children: "Every product we export meets stringent international quality standards. Below you'll find detailed quality specifications for each product category." })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "max-w-5xl mx-auto px-4 py-12 flex flex-col gap-12", children: Wt.map((a) => /* @__PURE__ */ t("section", { className: "rounded-2xl overflow-hidden shadow-md", children: [
      /* @__PURE__ */ t("div", { className: "px-8 py-5 flex items-center gap-4", style: { background: a.bg }, children: [
        /* @__PURE__ */ e("span", { className: "text-3xl", children: a.icon }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h2", { className: "text-white", style: { fontWeight: 800 }, children: a.label }),
          /* @__PURE__ */ e("p", { className: "text-xs mt-0.5", style: { color: a.accent }, children: "Quality Specifications & Standards" })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-white p-8", children: [
        /* @__PURE__ */ e("p", { className: "text-sm leading-relaxed mb-6", style: { color: "#555" }, children: a.intro }),
        /* @__PURE__ */ t("div", { className: "mb-6", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ e(je, { className: "w-4 h-4", style: { color: a.accent } }),
            /* @__PURE__ */ e("span", { className: "text-xs tracking-wider font-bold uppercase", style: { color: a.accent }, children: "Compliance Standards" })
          ] }),
          /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: a.standards.map((i) => /* @__PURE__ */ t(
            "span",
            {
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs",
              style: { background: `${a.accent}12`, border: `1px solid ${a.accent}44`, color: "#333" },
              children: [
                /* @__PURE__ */ e(L, { className: "w-3 h-3", style: { color: a.accent } }),
                i
              ]
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ e("div", { className: "flex flex-col gap-4", children: a.products.map((i, d) => /* @__PURE__ */ t("div", { className: "p-4 rounded-xl", style: { background: d % 2 === 0 ? "#faf6f0" : "white", border: "1px solid #ede8e0" }, children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ e("div", { className: "w-2 h-2 rounded-full", style: { background: a.accent } }),
            /* @__PURE__ */ e("span", { className: "text-sm font-bold", style: { color: "#1a1a1a" }, children: i.name })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-xs leading-relaxed", style: { color: "#666" }, children: i.quality })
        ] }, i.name)) })
      ] })
    ] }, a.id)) })
  ] });
}
const Rt = [
  {
    label: "Premium Spices",
    accent: "#c9a84c",
    icon: "🌶",
    images: [
      { url: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzcGljZXMlMjBjb2xvcmZ1bCUyMGJvd2xzfGVufDF8fHx8MTc4MTA4ODcxNXww&ixlib=rb-4.1.0&q=80&w=800", caption: "Indian Spice Bowls" }
    ]
  },
  {
    label: "Kerala Coir",
    accent: "#5aab6e",
    icon: "🌿",
    images: [
      { url: "https://images.unsplash.com/photo-1770891290495-8747a7a87e89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2lyJTIwZmliZXIlMjBjb2NvbnV0JTIwaHVzayUyMHByb2R1Y3RzfGVufDF8fHx8MTc4MTE0NjMxN3ww&ixlib=rb-4.1.0&q=80&w=800", caption: "Natural Coir Fibre" }
    ]
  },
  {
    label: "Coconut Products",
    accent: "#b58a30",
    icon: "🥥",
    images: [
      { url: "https://images.unsplash.com/photo-1694011772133-dc4b3ff3f24f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcGFsbSUyMHBsYW50YXRpb24lMjBJbmRpYXxlbnwxfHx8fDE3ODExNDYzMjJ8MA&ixlib=rb-4.1.0&q=80&w=800", caption: "Coconut Plantation" }
    ]
  }
];
function Ot({ setActivePage: r }) {
  return /* @__PURE__ */ t("div", { className: "min-h-screen", style: { background: "#faf6f0" }, children: [
    /* @__PURE__ */ e("div", { className: "py-14 px-4", style: { background: "#1a3a10" }, children: /* @__PURE__ */ t("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ t("button", { onClick: () => r("home"), className: "flex items-center gap-2 text-sm mb-6 hover:opacity-80 transition-opacity", style: { color: "rgba(255,255,255,0.65)" }, children: [
        /* @__PURE__ */ e(R, { className: "w-4 h-4" }),
        " Back to Home"
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ e("div", { className: "h-px w-8", style: { background: "#c9a84c" } }),
        /* @__PURE__ */ e("span", { className: "text-xs tracking-[0.3em] uppercase", style: { color: "#c9a84c" }, children: "Visual Showcase" })
      ] }),
      /* @__PURE__ */ e("h1", { className: "text-white mb-2", style: { fontWeight: 800, fontSize: "clamp(1.8rem,5vw,3rem)" }, children: "Gallery" }),
      /* @__PURE__ */ e("p", { className: "text-sm", style: { color: "rgba(255,255,255,0.65)" }, children: "A visual journey through our products, Kerala's backwaters, and India's spice heritage." })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "max-w-6xl mx-auto px-4 py-12 flex flex-col gap-14", children: Rt.map((a) => /* @__PURE__ */ t("section", { children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ e("span", { className: "text-2xl", children: a.icon }),
        /* @__PURE__ */ e("h2", { style: { color: "#1a1a1a" }, children: a.label }),
        /* @__PURE__ */ e("div", { className: "h-px flex-1", style: { background: `${a.accent}44` } })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: a.images.map((i, d) => /* @__PURE__ */ t(
        "div",
        {
          className: "group relative rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]",
          style: { aspectRatio: "4/3", boxShadow: "0 3px 16px rgba(0,0,0,0.12)" },
          children: [
            /* @__PURE__ */ e("img", { src: i.url, alt: i.caption, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" }),
            /* @__PURE__ */ e(
              "div",
              {
                className: "absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                style: { background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" },
                children: /* @__PURE__ */ e("span", { className: "p-3 text-xs text-white font-medium tracking-wide", children: i.caption })
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                className: "absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                style: { background: a.accent },
                children: /* @__PURE__ */ e("div", { className: "w-2 h-2 rounded-full bg-white" })
              }
            )
          ]
        },
        d
      )) })
    ] }, a.label)) })
  ] });
}
const jt = "https://wa.me/919895999505?text=Hello%20Voyageur%20Overseas%2C%20I%20am%20interested%20in%20your%20products.";
function Ht({ scrollTo: r, activePage: a }) {
  function i() {
    a !== "home" && (window.location.hash = ""), setTimeout(() => r("contact-section"), 150);
  }
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed flex flex-col gap-3 z-50",
      style: { bottom: 24, right: 20 },
      children: [
        /* @__PURE__ */ e(
          "a",
          {
            href: jt,
            target: "_blank",
            rel: "noopener noreferrer",
            title: "Chat on WhatsApp",
            className: "flex items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-xl",
            style: {
              width: 54,
              height: 54,
              background: "#25d366",
              boxShadow: "0 4px 18px rgba(37,211,102,0.45)"
            },
            children: /* @__PURE__ */ e(T, { className: "text-white", style: { width: 26, height: 26 } })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: i,
            title: "Contact Us",
            className: "flex items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-xl",
            style: {
              width: 54,
              height: 54,
              background: "#c9a84c",
              boxShadow: "0 4px 18px rgba(201,168,76,0.45)"
            },
            children: /* @__PURE__ */ e(j, { className: "text-white", style: { width: 24, height: 24 } })
          }
        )
      ]
    }
  );
}
function Pt() {
  const [r, a] = v("home"), [i, d] = v("all"), [n, o] = v("Home");
  function y(x) {
    setTimeout(() => {
      document.getElementById(x)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }
  function s() {
    a("home"), window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return /* @__PURE__ */ t("div", { className: "min-h-screen w-full font-sans", style: { background: "#faf6f0" }, children: [
    /* @__PURE__ */ e(
      dt,
      {
        activePage: r,
        setActivePage: a,
        setActiveCategory: d,
        scrollTo: y,
        activeNav: n,
        setActiveNav: o,
        goHome: s
      }
    ),
    r === "home" && /* @__PURE__ */ t(pe, { children: [
      /* @__PURE__ */ e(ht, {}),
      /* @__PURE__ */ e(pt, {}),
      /* @__PURE__ */ e(yt, { activeCategory: i, setActiveCategory: d }),
      /* @__PURE__ */ e(bt, {}),
      /* @__PURE__ */ e(wt, {}),
      /* @__PURE__ */ e(vt, {}),
      /* @__PURE__ */ e(St, { setActivePage: a, setActiveCategory: d, scrollTo: y, setActiveNav: o })
    ] }),
    r === "export" && /* @__PURE__ */ e(Et, { setActivePage: a }),
    r === "about" && /* @__PURE__ */ e(Lt, { setActivePage: a }),
    r === "quality" && /* @__PURE__ */ e(Tt, { setActivePage: a }),
    r === "gallery" && /* @__PURE__ */ e(Ot, { setActivePage: a }),
    /* @__PURE__ */ e(Ht, { scrollTo: y, activePage: r })
  ] });
}
const zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pt
}, Symbol.toStringTag, { value: "Module" }));
export {
  Bt as Code0_8
};
