import { t as createLucideIcon } from "./createLucideIcon-C1Qbi7jU.js";
import { D as Check, E as useComposedRefs, T as composeRefs, _ as DismissableLayer, a as VISUALLY_HIDDEN_STYLES, b as Button, c as Portal, d as Content, f as Root2$2, g as useLayoutEffect2, h as useId$1, i as TooltipTrigger, l as Anchor, m as useSize, n as TooltipContent, o as useControllableState, p as createPopperScope, s as Presence, t as Tooltip, u as Arrow, v as useCallbackRef, x as cn, y as composeEventHandlers } from "./tooltip-CwlCdP1-.js";
import { _ as Sparkles, c as PopoverTrigger, d as FocusScope, f as useFocusGuards, g as Volume2, h as Zap, i as getVoiceSupport, l as Combination_default, m as Primitive$3, o as Popover, p as Badge, s as PopoverContent, u as hideOthers, v as ChevronRight } from "./voice.sdk-CcG2eey3.js";
import * as React$1 from "react";
import React, { useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import * as ReactDOM$1 from "react-dom";
var Activity = createLucideIcon("activity", [["path", {
	d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
	key: "169zse"
}]]), ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), ChevronUp = createLucideIcon("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), Circle = createLucideIcon("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), Languages = createLucideIcon("languages", [
	["path", {
		d: "m5 8 6 6",
		key: "1wu5hv"
	}],
	["path", {
		d: "m4 14 6-6 2-3",
		key: "1k1g8d"
	}],
	["path", {
		d: "M2 5h12",
		key: "or177f"
	}],
	["path", {
		d: "M7 2h1",
		key: "1t2jsx"
	}],
	["path", {
		d: "m22 22-5-10-5 10",
		key: "don7ne"
	}],
	["path", {
		d: "M14 18h6",
		key: "1m8k6r"
	}]
]), RotateCcw = createLucideIcon("rotate-ccw", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]), Settings = createLucideIcon("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
function createContextScope$3(e, a = []) {
	let o = [];
	function s(a, s) {
		let c = React$1.createContext(s), l = o.length;
		o = [...o, s];
		let u = (a) => {
			let { scope: o, children: s, ...u } = a, d = o?.[e]?.[l] || c, f = React$1.useMemo(() => u, Object.values(u));
			return /* @__PURE__ */ jsx(d.Provider, {
				value: f,
				children: s
			});
		};
		u.displayName = a + "Provider";
		function d(o, u) {
			let d = u?.[e]?.[l] || c, f = React$1.useContext(d);
			if (f) return f;
			if (s !== void 0) return s;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [u, d];
	}
	let c = () => {
		let a = o.map((e) => React$1.createContext(e));
		return function(o) {
			let s = o?.[e] || a;
			return React$1.useMemo(() => ({ [`__scope${e}`]: {
				...o,
				[e]: s
			} }), [o, s]);
		};
	};
	return c.scopeName = e, [s, composeContextScopes$6(c, ...a)];
}
function composeContextScopes$6(...e) {
	let a = e[0];
	if (e.length === 1) return a;
	let o = () => {
		let o = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let s = o.reduce((a, { useScope: o, scopeName: s }) => {
				let c = o(e)[`__scope${s}`];
				return {
					...a,
					...c
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${a.scopeName}`]: s }), [s]);
		};
	};
	return o.scopeName = a.scopeName, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$6(e) {
	let a = /* @__PURE__ */ createSlotClone$6(e), o = React$1.forwardRef((e, o) => {
		let { children: s, ...c } = e, l = React$1.Children.toArray(s), u = l.find(isSlottable$6);
		if (u) {
			let e = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(e) > 1 ? React$1.Children.only(null) : React$1.isValidElement(e) ? e.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(e) ? React$1.cloneElement(e, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${e}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$6(e) {
	let a = React$1.forwardRef((e, a) => {
		let { children: o, ...c } = e;
		if (React$1.isValidElement(o)) {
			let e = getElementRef$6(o), l = mergeProps$6(c, o.props);
			return o.type !== React$1.Fragment && (l.ref = a ? composeRefs(a, e) : e), React$1.cloneElement(o, l);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${e}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$6 = Symbol("radix.slottable");
function isSlottable$6(e) {
	return React$1.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SLOTTABLE_IDENTIFIER$6;
}
function mergeProps$6(e, a) {
	let o = { ...a };
	for (let s in a) {
		let c = e[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...e) => {
			let a = l(...e);
			return c(...e), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...e,
		...o
	};
}
function getElementRef$6(e) {
	let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
var Primitive$4 = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, a) => {
	let o = /* @__PURE__ */ createSlot$6(`Primitive.${a}`), s = React$1.forwardRef((e, s) => {
		let { asChild: c, ...l } = e, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: s
		});
	});
	return s.displayName = `Primitive.${a}`, {
		...e,
		[a]: s
	};
}, {});
function createContextScope$6(e, a = []) {
	let o = [];
	function s(a, s) {
		let c = React$1.createContext(s), l = o.length;
		o = [...o, s];
		let u = (a) => {
			let { scope: o, children: s, ...u } = a, d = o?.[e]?.[l] || c, f = React$1.useMemo(() => u, Object.values(u));
			return /* @__PURE__ */ jsx(d.Provider, {
				value: f,
				children: s
			});
		};
		u.displayName = a + "Provider";
		function d(o, u) {
			let d = u?.[e]?.[l] || c, f = React$1.useContext(d);
			if (f) return f;
			if (s !== void 0) return s;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [u, d];
	}
	let c = () => {
		let a = o.map((e) => React$1.createContext(e));
		return function(o) {
			let s = o?.[e] || a;
			return React$1.useMemo(() => ({ [`__scope${e}`]: {
				...o,
				[e]: s
			} }), [o, s]);
		};
	};
	return c.scopeName = e, [s, composeContextScopes$5(c, ...a)];
}
function composeContextScopes$5(...e) {
	let a = e[0];
	if (e.length === 1) return a;
	let o = () => {
		let o = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let s = o.reduce((a, { useScope: o, scopeName: s }) => {
				let c = o(e)[`__scope${s}`];
				return {
					...a,
					...c
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${a.scopeName}`]: s }), [s]);
		};
	};
	return o.scopeName = a.scopeName, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$5(e) {
	let a = /* @__PURE__ */ createSlotClone$5(e), o = React$1.forwardRef((e, o) => {
		let { children: s, ...c } = e, l = React$1.Children.toArray(s), u = l.find(isSlottable$5);
		if (u) {
			let e = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(e) > 1 ? React$1.Children.only(null) : React$1.isValidElement(e) ? e.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(e) ? React$1.cloneElement(e, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${e}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$5(e) {
	let a = React$1.forwardRef((e, a) => {
		let { children: o, ...c } = e;
		if (React$1.isValidElement(o)) {
			let e = getElementRef$5(o), l = mergeProps$5(c, o.props);
			return o.type !== React$1.Fragment && (l.ref = a ? composeRefs(a, e) : e), React$1.cloneElement(o, l);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${e}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$5 = Symbol("radix.slottable");
function isSlottable$5(e) {
	return React$1.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SLOTTABLE_IDENTIFIER$5;
}
function mergeProps$5(e, a) {
	let o = { ...a };
	for (let s in a) {
		let c = e[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...e) => {
			let a = l(...e);
			return c(...e), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...e,
		...o
	};
}
function getElementRef$5(e) {
	let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
function createCollection(e) {
	let a = e + "CollectionProvider", [s, c] = createContextScope$6(a), [l, u] = s(a, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), d = (e) => {
		let { scope: a, children: o } = e, s = React.useRef(null), c = React.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ jsx(l, {
			scope: a,
			itemMap: c,
			collectionRef: s,
			children: o
		});
	};
	d.displayName = a;
	let f = e + "CollectionSlot", p = /* @__PURE__ */ createSlot$5(f), m = React.forwardRef((e, a) => {
		let { scope: s, children: c } = e;
		return /* @__PURE__ */ jsx(p, {
			ref: useComposedRefs(a, u(f, s).collectionRef),
			children: c
		});
	});
	m.displayName = f;
	let h = e + "CollectionItemSlot", g = "data-radix-collection-item", _ = /* @__PURE__ */ createSlot$5(h), v = React.forwardRef((e, a) => {
		let { scope: s, children: c, ...l } = e, d = React.useRef(null), f = useComposedRefs(a, d), p = u(h, s);
		return React.useEffect(() => (p.itemMap.set(d, {
			ref: d,
			...l
		}), () => void p.itemMap.delete(d))), /* @__PURE__ */ jsx(_, {
			[g]: "",
			ref: f,
			children: c
		});
	});
	v.displayName = h;
	function y(a) {
		let o = u(e + "CollectionConsumer", a);
		return React.useCallback(() => {
			let e = o.collectionRef.current;
			if (!e) return [];
			let a = Array.from(e.querySelectorAll(`[${g}]`));
			return Array.from(o.itemMap.values()).sort((e, o) => a.indexOf(e.ref.current) - a.indexOf(o.ref.current));
		}, [o.collectionRef, o.itemMap]);
	}
	return [
		{
			Provider: d,
			Slot: m,
			ItemSlot: v
		},
		y,
		c
	];
}
function createContextScope$4(e, a = []) {
	let o = [];
	function s(a, s) {
		let c = React$1.createContext(s), l = o.length;
		o = [...o, s];
		let u = (a) => {
			let { scope: o, children: s, ...u } = a, d = o?.[e]?.[l] || c, f = React$1.useMemo(() => u, Object.values(u));
			return /* @__PURE__ */ jsx(d.Provider, {
				value: f,
				children: s
			});
		};
		u.displayName = a + "Provider";
		function d(o, u) {
			let d = u?.[e]?.[l] || c, f = React$1.useContext(d);
			if (f) return f;
			if (s !== void 0) return s;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [u, d];
	}
	let c = () => {
		let a = o.map((e) => React$1.createContext(e));
		return function(o) {
			let s = o?.[e] || a;
			return React$1.useMemo(() => ({ [`__scope${e}`]: {
				...o,
				[e]: s
			} }), [o, s]);
		};
	};
	return c.scopeName = e, [s, composeContextScopes$4(c, ...a)];
}
function composeContextScopes$4(...e) {
	let a = e[0];
	if (e.length === 1) return a;
	let o = () => {
		let o = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let s = o.reduce((a, { useScope: o, scopeName: s }) => {
				let c = o(e)[`__scope${s}`];
				return {
					...a,
					...c
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${a.scopeName}`]: s }), [s]);
		};
	};
	return o.scopeName = a.scopeName, o;
}
var DirectionContext = React$1.createContext(void 0);
function useDirection(e) {
	let a = React$1.useContext(DirectionContext);
	return e || a || "ltr";
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$3(e) {
	let a = /* @__PURE__ */ createSlotClone$4(e), o = React$1.forwardRef((e, o) => {
		let { children: s, ...c } = e, l = React$1.Children.toArray(s), u = l.find(isSlottable$4);
		if (u) {
			let e = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(e) > 1 ? React$1.Children.only(null) : React$1.isValidElement(e) ? e.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(e) ? React$1.cloneElement(e, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${e}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$4(e) {
	let a = React$1.forwardRef((e, a) => {
		let { children: o, ...c } = e;
		if (React$1.isValidElement(o)) {
			let e = getElementRef$4(o), l = mergeProps$4(c, o.props);
			return o.type !== React$1.Fragment && (l.ref = a ? composeRefs(a, e) : e), React$1.cloneElement(o, l);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${e}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$4 = Symbol("radix.slottable");
function isSlottable$4(e) {
	return React$1.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SLOTTABLE_IDENTIFIER$4;
}
function mergeProps$4(e, a) {
	let o = { ...a };
	for (let s in a) {
		let c = e[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...e) => {
			let a = l(...e);
			return c(...e), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...e,
		...o
	};
}
function getElementRef$4(e) {
	let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
var Primitive$5 = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, a) => {
	let o = /* @__PURE__ */ createSlot$3(`Primitive.${a}`), s = React$1.forwardRef((e, s) => {
		let { asChild: c, ...l } = e, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: s
		});
	});
	return s.displayName = `Primitive.${a}`, {
		...e,
		[a]: s
	};
}, {});
function dispatchDiscreteCustomEvent(e, a) {
	e && ReactDOM$1.flushSync(() => e.dispatchEvent(a));
}
function createContextScope$5(e, a = []) {
	let o = [];
	function s(a, s) {
		let c = React$1.createContext(s), l = o.length;
		o = [...o, s];
		let u = (a) => {
			let { scope: o, children: s, ...u } = a, d = o?.[e]?.[l] || c, f = React$1.useMemo(() => u, Object.values(u));
			return /* @__PURE__ */ jsx(d.Provider, {
				value: f,
				children: s
			});
		};
		u.displayName = a + "Provider";
		function d(o, u) {
			let d = u?.[e]?.[l] || c, f = React$1.useContext(d);
			if (f) return f;
			if (s !== void 0) return s;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [u, d];
	}
	let c = () => {
		let a = o.map((e) => React$1.createContext(e));
		return function(o) {
			let s = o?.[e] || a;
			return React$1.useMemo(() => ({ [`__scope${e}`]: {
				...o,
				[e]: s
			} }), [o, s]);
		};
	};
	return c.scopeName = e, [s, composeContextScopes$3(c, ...a)];
}
function composeContextScopes$3(...e) {
	let a = e[0];
	if (e.length === 1) return a;
	let o = () => {
		let o = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let s = o.reduce((a, { useScope: o, scopeName: s }) => {
				let c = o(e)[`__scope${s}`];
				return {
					...a,
					...c
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${a.scopeName}`]: s }), [s]);
		};
	};
	return o.scopeName = a.scopeName, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$4(e) {
	let a = /* @__PURE__ */ createSlotClone$3(e), o = React$1.forwardRef((e, o) => {
		let { children: s, ...c } = e, l = React$1.Children.toArray(s), u = l.find(isSlottable$3);
		if (u) {
			let e = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(e) > 1 ? React$1.Children.only(null) : React$1.isValidElement(e) ? e.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(e) ? React$1.cloneElement(e, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${e}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$3(e) {
	let a = React$1.forwardRef((e, a) => {
		let { children: o, ...c } = e;
		if (React$1.isValidElement(o)) {
			let e = getElementRef$3(o), l = mergeProps$3(c, o.props);
			return o.type !== React$1.Fragment && (l.ref = a ? composeRefs(a, e) : e), React$1.cloneElement(o, l);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${e}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$3 = Symbol("radix.slottable");
function isSlottable$3(e) {
	return React$1.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SLOTTABLE_IDENTIFIER$3;
}
function mergeProps$3(e, a) {
	let o = { ...a };
	for (let s in a) {
		let c = e[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...e) => {
			let a = l(...e);
			return c(...e), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...e,
		...o
	};
}
function getElementRef$3(e) {
	let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
var Primitive$6 = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, a) => {
	let o = /* @__PURE__ */ createSlot$4(`Primitive.${a}`), s = React$1.forwardRef((e, s) => {
		let { asChild: c, ...l } = e, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: s
		});
	});
	return s.displayName = `Primitive.${a}`, {
		...e,
		[a]: s
	};
}, {}), ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus", EVENT_OPTIONS = {
	bubbles: !1,
	cancelable: !0
}, GROUP_NAME$3 = "RovingFocusGroup", [Collection$3, useCollection$3, createCollectionScope$3] = createCollection(GROUP_NAME$3), [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope$5(GROUP_NAME$3, [createCollectionScope$3]), [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME$3), RovingFocusGroup = React$1.forwardRef((e, a) => /* @__PURE__ */ jsx(Collection$3.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ jsx(Collection$3.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ jsx(RovingFocusGroupImpl, {
			...e,
			ref: a
		})
	})
}));
RovingFocusGroup.displayName = GROUP_NAME$3;
var RovingFocusGroupImpl = React$1.forwardRef((e, a) => {
	let { __scopeRovingFocusGroup: s, orientation: c, loop: l = !1, dir: u, currentTabStopId: d, defaultCurrentTabStopId: f, onCurrentTabStopIdChange: p, onEntryFocus: m, preventScrollOnEntryFocus: h = !1, ...g } = e, _ = React$1.useRef(null), v = useComposedRefs(a, _), y = useDirection(u), [x, S] = useControllableState({
		prop: d,
		defaultProp: f ?? null,
		onChange: p,
		caller: GROUP_NAME$3
	}), [C, w] = React$1.useState(!1), E = useCallbackRef(m), O = useCollection$3(s), k = React$1.useRef(!1), [A, j] = React$1.useState(0);
	return React$1.useEffect(() => {
		let e = _.current;
		if (e) return e.addEventListener(ENTRY_FOCUS, E), () => e.removeEventListener(ENTRY_FOCUS, E);
	}, [E]), /* @__PURE__ */ jsx(RovingFocusProvider, {
		scope: s,
		orientation: c,
		dir: y,
		loop: l,
		currentTabStopId: x,
		onItemFocus: React$1.useCallback((e) => S(e), [S]),
		onItemShiftTab: React$1.useCallback(() => w(!0), []),
		onFocusableItemAdd: React$1.useCallback(() => j((e) => e + 1), []),
		onFocusableItemRemove: React$1.useCallback(() => j((e) => e - 1), []),
		children: /* @__PURE__ */ jsx(Primitive$6.div, {
			tabIndex: C || A === 0 ? -1 : 0,
			"data-orientation": c,
			...g,
			ref: v,
			style: {
				outline: "none",
				...e.style
			},
			onMouseDown: composeEventHandlers(e.onMouseDown, () => {
				k.current = !0;
			}),
			onFocus: composeEventHandlers(e.onFocus, (e) => {
				let a = !k.current;
				if (e.target === e.currentTarget && a && !C) {
					let a = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
					if (e.currentTarget.dispatchEvent(a), !a.defaultPrevented) {
						let e = O().filter((e) => e.focusable);
						focusFirst$1([
							e.find((e) => e.active),
							e.find((e) => e.id === x),
							...e
						].filter(Boolean).map((e) => e.ref.current), h);
					}
				}
				k.current = !1;
			}),
			onBlur: composeEventHandlers(e.onBlur, () => w(!1))
		})
	});
}), ITEM_NAME$3 = "RovingFocusGroupItem", RovingFocusGroupItem = React$1.forwardRef((e, a) => {
	let { __scopeRovingFocusGroup: o, focusable: s = !0, active: c = !1, tabStopId: l, children: u, ...d } = e, f = useId$1(), p = l || f, m = useRovingFocusContext(ITEM_NAME$3, o), g = m.currentTabStopId === p, _ = useCollection$3(o), { onFocusableItemAdd: v, onFocusableItemRemove: y, currentTabStopId: b } = m;
	return React$1.useEffect(() => {
		if (s) return v(), () => y();
	}, [
		s,
		v,
		y
	]), /* @__PURE__ */ jsx(Collection$3.ItemSlot, {
		scope: o,
		id: p,
		focusable: s,
		active: c,
		children: /* @__PURE__ */ jsx(Primitive$6.span, {
			tabIndex: g ? 0 : -1,
			"data-orientation": m.orientation,
			...d,
			ref: a,
			onMouseDown: composeEventHandlers(e.onMouseDown, (e) => {
				s ? m.onItemFocus(p) : e.preventDefault();
			}),
			onFocus: composeEventHandlers(e.onFocus, () => m.onItemFocus(p)),
			onKeyDown: composeEventHandlers(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					m.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let a = getFocusIntent(e, m.orientation, m.dir);
				if (a !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let o = _().filter((e) => e.focusable).map((e) => e.ref.current);
					if (a === "last") o.reverse();
					else if (a === "prev" || a === "next") {
						a === "prev" && o.reverse();
						let s = o.indexOf(e.currentTarget);
						o = m.loop ? wrapArray$2(o, s + 1) : o.slice(s + 1);
					}
					setTimeout(() => focusFirst$1(o));
				}
			}),
			children: typeof u == "function" ? u({
				isCurrentTabStop: g,
				hasTabStop: b != null
			}) : u
		})
	});
});
RovingFocusGroupItem.displayName = ITEM_NAME$3;
var MAP_KEY_TO_FOCUS_INTENT = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function getDirectionAwareKey(e, a) {
	return a === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function getFocusIntent(e, a, o) {
	let s = getDirectionAwareKey(e.key, o);
	if (!(a === "vertical" && ["ArrowLeft", "ArrowRight"].includes(s)) && !(a === "horizontal" && ["ArrowUp", "ArrowDown"].includes(s))) return MAP_KEY_TO_FOCUS_INTENT[s];
}
function focusFirst$1(e, a = !1) {
	let o = document.activeElement;
	for (let s of e) if (s === o || (s.focus({ preventScroll: a }), document.activeElement !== o)) return;
}
function wrapArray$2(e, a) {
	return e.map((o, s) => e[(a + s) % e.length]);
}
var Root$3 = RovingFocusGroup, Item$1 = RovingFocusGroupItem, SELECTION_KEYS$1 = ["Enter", " "], FIRST_KEYS = [
	"ArrowDown",
	"PageUp",
	"Home"
], LAST_KEYS = [
	"ArrowUp",
	"PageDown",
	"End"
], FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS], SUB_OPEN_KEYS = {
	ltr: [...SELECTION_KEYS$1, "ArrowRight"],
	rtl: [...SELECTION_KEYS$1, "ArrowLeft"]
}, SUB_CLOSE_KEYS = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, MENU_NAME = "Menu", [Collection$2, useCollection$2, createCollectionScope$2] = createCollection(MENU_NAME), [createMenuContext, createMenuScope] = createContextScope$4(MENU_NAME, [
	createCollectionScope$2,
	createPopperScope,
	createRovingFocusGroupScope
]), usePopperScope$1 = createPopperScope(), useRovingFocusGroupScope = createRovingFocusGroupScope(), [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME), [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME), Menu = (e) => {
	let { __scopeMenu: a, open: o = !1, children: s, dir: c, onOpenChange: l, modal: u = !0 } = e, d = usePopperScope$1(a), [f, m] = React$1.useState(null), h = React$1.useRef(!1), g = useCallbackRef(l), _ = useDirection(c);
	return React$1.useEffect(() => {
		let e = () => {
			h.current = !0, document.addEventListener("pointerdown", a, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", a, {
				capture: !0,
				once: !0
			});
		}, a = () => h.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", a, { capture: !0 }), document.removeEventListener("pointermove", a, { capture: !0 });
		};
	}, []), /* @__PURE__ */ jsx(Root2$2, {
		...d,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: a,
			open: o,
			onOpenChange: g,
			content: f,
			onContentChange: m,
			children: /* @__PURE__ */ jsx(MenuRootProvider, {
				scope: a,
				onClose: React$1.useCallback(() => g(!1), [g]),
				isUsingKeyboardRef: h,
				dir: _,
				modal: u,
				children: s
			})
		})
	});
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor", MenuAnchor = React$1.forwardRef((e, a) => {
	let { __scopeMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(Anchor, {
		...usePopperScope$1(o),
		...s,
		ref: a
	});
});
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME$2 = "MenuPortal", [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME$2, { forceMount: void 0 }), MenuPortal = (e) => {
	let { __scopeMenu: a, forceMount: o, children: s, container: c } = e, l = useMenuContext(PORTAL_NAME$2, a);
	return /* @__PURE__ */ jsx(PortalProvider, {
		scope: a,
		forceMount: o,
		children: /* @__PURE__ */ jsx(Presence, {
			present: o || l.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: c,
				children: s
			})
		})
	});
};
MenuPortal.displayName = PORTAL_NAME$2;
var CONTENT_NAME$2 = "MenuContent", [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME$2), MenuContent = React$1.forwardRef((e, a) => {
	let o = usePortalContext(CONTENT_NAME$2, e.__scopeMenu), { forceMount: s = o.forceMount, ...c } = e, l = useMenuContext(CONTENT_NAME$2, e.__scopeMenu), u = useMenuRootContext(CONTENT_NAME$2, e.__scopeMenu);
	return /* @__PURE__ */ jsx(Collection$2.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: s || l.open,
			children: /* @__PURE__ */ jsx(Collection$2.Slot, {
				scope: e.__scopeMenu,
				children: u.modal ? /* @__PURE__ */ jsx(MenuRootContentModal, {
					...c,
					ref: a
				}) : /* @__PURE__ */ jsx(MenuRootContentNonModal, {
					...c,
					ref: a
				})
			})
		})
	});
}), MenuRootContentModal = React$1.forwardRef((e, a) => {
	let s = useMenuContext(CONTENT_NAME$2, e.__scopeMenu), c = React$1.useRef(null), l = useComposedRefs(a, c);
	return React$1.useEffect(() => {
		let e = c.current;
		if (e) return hideOthers(e);
	}, []), /* @__PURE__ */ jsx(MenuContentImpl, {
		...e,
		ref: l,
		trapFocus: s.open,
		disableOutsidePointerEvents: s.open,
		disableOutsideScroll: !0,
		onFocusOutside: composeEventHandlers(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => s.onOpenChange(!1)
	});
}), MenuRootContentNonModal = React$1.forwardRef((e, a) => {
	let o = useMenuContext(CONTENT_NAME$2, e.__scopeMenu);
	return /* @__PURE__ */ jsx(MenuContentImpl, {
		...e,
		ref: a,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => o.onOpenChange(!1)
	});
}), Slot$1 = /* @__PURE__ */ createSlot$3("MenuContent.ScrollLock"), MenuContentImpl = React$1.forwardRef((e, a) => {
	let { __scopeMenu: s, loop: l = !1, trapFocus: u, onOpenAutoFocus: d, onCloseAutoFocus: p, disableOutsidePointerEvents: m, onEntryFocus: h, onEscapeKeyDown: g, onPointerDownOutside: _, onFocusOutside: v, onInteractOutside: y, onDismiss: b, disableOutsideScroll: x, ...S } = e, C = useMenuContext(CONTENT_NAME$2, s), w = useMenuRootContext(CONTENT_NAME$2, s), T = usePopperScope$1(s), E = useRovingFocusGroupScope(s), O = useCollection$2(s), [k, M] = React$1.useState(null), N = React$1.useRef(null), P = useComposedRefs(a, N, C.onContentChange), I = React$1.useRef(0), L = React$1.useRef(""), R = React$1.useRef(0), z = React$1.useRef(null), B = React$1.useRef("right"), V = React$1.useRef(0), H = x ? Combination_default : React$1.Fragment, U = x ? {
		as: Slot$1,
		allowPinchZoom: !0
	} : void 0, W = (e) => {
		let a = L.current + e, o = O().filter((e) => !e.disabled), s = document.activeElement, c = o.find((e) => e.ref.current === s)?.textValue, l = getNextMatch(o.map((e) => e.textValue), a, c), u = o.find((e) => e.textValue === l)?.ref.current;
		(function e(a) {
			L.current = a, window.clearTimeout(I.current), a !== "" && (I.current = window.setTimeout(() => e(""), 1e3));
		})(a), u && setTimeout(() => u.focus());
	};
	React$1.useEffect(() => () => window.clearTimeout(I.current), []), useFocusGuards();
	let G = React$1.useCallback((e) => B.current === z.current?.side && isPointerInGraceArea(e, z.current?.area), []);
	return /* @__PURE__ */ jsx(MenuContentProvider, {
		scope: s,
		searchRef: L,
		onItemEnter: React$1.useCallback((e) => {
			G(e) && e.preventDefault();
		}, [G]),
		onItemLeave: React$1.useCallback((e) => {
			G(e) || (N.current?.focus(), M(null));
		}, [G]),
		onTriggerLeave: React$1.useCallback((e) => {
			G(e) && e.preventDefault();
		}, [G]),
		pointerGraceTimerRef: R,
		onPointerGraceIntentChange: React$1.useCallback((e) => {
			z.current = e;
		}, []),
		children: /* @__PURE__ */ jsx(H, {
			...U,
			children: /* @__PURE__ */ jsx(FocusScope, {
				asChild: !0,
				trapped: u,
				onMountAutoFocus: composeEventHandlers(d, (e) => {
					e.preventDefault(), N.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: p,
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: m,
					onEscapeKeyDown: g,
					onPointerDownOutside: _,
					onFocusOutside: v,
					onInteractOutside: y,
					onDismiss: b,
					children: /* @__PURE__ */ jsx(Root$3, {
						asChild: !0,
						...E,
						dir: w.dir,
						orientation: "vertical",
						loop: l,
						currentTabStopId: k,
						onCurrentTabStopIdChange: M,
						onEntryFocus: composeEventHandlers(h, (e) => {
							w.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ jsx(Content, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": getOpenState(C.open),
							"data-radix-menu-content": "",
							dir: w.dir,
							...T,
							...S,
							ref: P,
							style: {
								outline: "none",
								...S.style
							},
							onKeyDown: composeEventHandlers(S.onKeyDown, (e) => {
								let a = e.target.closest("[data-radix-menu-content]") === e.currentTarget, o = e.ctrlKey || e.altKey || e.metaKey, s = e.key.length === 1;
								a && (e.key === "Tab" && e.preventDefault(), !o && s && W(e.key));
								let c = N.current;
								if (e.target !== c || !FIRST_LAST_KEYS.includes(e.key)) return;
								e.preventDefault();
								let l = O().filter((e) => !e.disabled).map((e) => e.ref.current);
								LAST_KEYS.includes(e.key) && l.reverse(), focusFirst(l);
							}),
							onBlur: composeEventHandlers(e.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(I.current), L.current = "");
							}),
							onPointerMove: composeEventHandlers(e.onPointerMove, whenMouse((e) => {
								let a = e.target, o = V.current !== e.clientX;
								e.currentTarget.contains(a) && o && (B.current = e.clientX > V.current ? "right" : "left", V.current = e.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
MenuContent.displayName = CONTENT_NAME$2;
var GROUP_NAME$2 = "MenuGroup", MenuGroup = React$1.forwardRef((e, a) => {
	let { __scopeMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(Primitive$5.div, {
		role: "group",
		...s,
		ref: a
	});
});
MenuGroup.displayName = GROUP_NAME$2;
var LABEL_NAME$2 = "MenuLabel", MenuLabel = React$1.forwardRef((e, a) => {
	let { __scopeMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(Primitive$5.div, {
		...s,
		ref: a
	});
});
MenuLabel.displayName = LABEL_NAME$2;
var ITEM_NAME$2 = "MenuItem", ITEM_SELECT = "menu.itemSelect", MenuItem = React$1.forwardRef((e, a) => {
	let { disabled: s = !1, onSelect: c, ...l } = e, u = React$1.useRef(null), d = useMenuRootContext(ITEM_NAME$2, e.__scopeMenu), f = useMenuContentContext(ITEM_NAME$2, e.__scopeMenu), p = useComposedRefs(a, u), m = React$1.useRef(!1), h = () => {
		let e = u.current;
		if (!s && e) {
			let a = new CustomEvent(ITEM_SELECT, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(ITEM_SELECT, (e) => c?.(e), { once: !0 }), dispatchDiscreteCustomEvent(e, a), a.defaultPrevented ? m.current = !1 : d.onClose();
		}
	};
	return /* @__PURE__ */ jsx(MenuItemImpl, {
		...l,
		ref: p,
		disabled: s,
		onClick: composeEventHandlers(e.onClick, h),
		onPointerDown: (a) => {
			e.onPointerDown?.(a), m.current = !0;
		},
		onPointerUp: composeEventHandlers(e.onPointerUp, (e) => {
			m.current || e.currentTarget?.click();
		}),
		onKeyDown: composeEventHandlers(e.onKeyDown, (e) => {
			let a = f.searchRef.current !== "";
			s || a && e.key === " " || SELECTION_KEYS$1.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
MenuItem.displayName = ITEM_NAME$2;
var MenuItemImpl = React$1.forwardRef((e, a) => {
	let { __scopeMenu: s, disabled: c = !1, textValue: l, ...u } = e, d = useMenuContentContext(ITEM_NAME$2, s), f = useRovingFocusGroupScope(s), p = React$1.useRef(null), m = useComposedRefs(a, p), [h, g] = React$1.useState(!1), [_, v] = React$1.useState("");
	return React$1.useEffect(() => {
		let e = p.current;
		e && v((e.textContent ?? "").trim());
	}, [u.children]), /* @__PURE__ */ jsx(Collection$2.ItemSlot, {
		scope: s,
		disabled: c,
		textValue: l ?? _,
		children: /* @__PURE__ */ jsx(Item$1, {
			asChild: !0,
			...f,
			focusable: !c,
			children: /* @__PURE__ */ jsx(Primitive$5.div, {
				role: "menuitem",
				"data-highlighted": h ? "" : void 0,
				"aria-disabled": c || void 0,
				"data-disabled": c ? "" : void 0,
				...u,
				ref: m,
				onPointerMove: composeEventHandlers(e.onPointerMove, whenMouse((e) => {
					c ? d.onItemLeave(e) : (d.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: composeEventHandlers(e.onPointerLeave, whenMouse((e) => d.onItemLeave(e))),
				onFocus: composeEventHandlers(e.onFocus, () => g(!0)),
				onBlur: composeEventHandlers(e.onBlur, () => g(!1))
			})
		})
	});
}), CHECKBOX_ITEM_NAME$1 = "MenuCheckboxItem", MenuCheckboxItem = React$1.forwardRef((e, a) => {
	let { checked: o = !1, onCheckedChange: s, ...c } = e;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: e.__scopeMenu,
		checked: o,
		children: /* @__PURE__ */ jsx(MenuItem, {
			role: "menuitemcheckbox",
			"aria-checked": isIndeterminate(o) ? "mixed" : o,
			...c,
			ref: a,
			"data-state": getCheckedState(o),
			onSelect: composeEventHandlers(c.onSelect, () => s?.(isIndeterminate(o) ? !0 : !o), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME$1;
var RADIO_GROUP_NAME$1 = "MenuRadioGroup", [RadioGroupProvider, useRadioGroupContext] = createMenuContext(RADIO_GROUP_NAME$1, {
	value: void 0,
	onValueChange: () => {}
}), MenuRadioGroup = React$1.forwardRef((e, a) => {
	let { value: o, onValueChange: s, ...c } = e, l = useCallbackRef(s);
	return /* @__PURE__ */ jsx(RadioGroupProvider, {
		scope: e.__scopeMenu,
		value: o,
		onValueChange: l,
		children: /* @__PURE__ */ jsx(MenuGroup, {
			...c,
			ref: a
		})
	});
});
MenuRadioGroup.displayName = RADIO_GROUP_NAME$1;
var RADIO_ITEM_NAME$1 = "MenuRadioItem", MenuRadioItem = React$1.forwardRef((e, a) => {
	let { value: o, ...s } = e, c = useRadioGroupContext(RADIO_ITEM_NAME$1, e.__scopeMenu), l = o === c.value;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: e.__scopeMenu,
		checked: l,
		children: /* @__PURE__ */ jsx(MenuItem, {
			role: "menuitemradio",
			"aria-checked": l,
			...s,
			ref: a,
			"data-state": getCheckedState(l),
			onSelect: composeEventHandlers(s.onSelect, () => c.onValueChange?.(o), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuRadioItem.displayName = RADIO_ITEM_NAME$1;
var ITEM_INDICATOR_NAME$1 = "MenuItemIndicator", [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME$1, { checked: !1 }), MenuItemIndicator = React$1.forwardRef((e, a) => {
	let { __scopeMenu: o, forceMount: s, ...c } = e, l = useItemIndicatorContext(ITEM_INDICATOR_NAME$1, o);
	return /* @__PURE__ */ jsx(Presence, {
		present: s || isIndeterminate(l.checked) || l.checked === !0,
		children: /* @__PURE__ */ jsx(Primitive$5.span, {
			...c,
			ref: a,
			"data-state": getCheckedState(l.checked)
		})
	});
});
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME$1;
var SEPARATOR_NAME$2 = "MenuSeparator", MenuSeparator = React$1.forwardRef((e, a) => {
	let { __scopeMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(Primitive$5.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...s,
		ref: a
	});
});
MenuSeparator.displayName = SEPARATOR_NAME$2;
var ARROW_NAME$2 = "MenuArrow", MenuArrow = React$1.forwardRef((e, a) => {
	let { __scopeMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(Arrow, {
		...usePopperScope$1(o),
		...s,
		ref: a
	});
});
MenuArrow.displayName = ARROW_NAME$2;
var SUB_NAME = "MenuSub", [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME), MenuSub = (e) => {
	let { __scopeMenu: a, children: o, open: s = !1, onOpenChange: c } = e, l = useMenuContext(SUB_NAME, a), u = usePopperScope$1(a), [d, f] = React$1.useState(null), [m, g] = React$1.useState(null), _ = useCallbackRef(c);
	return React$1.useEffect(() => (l.open === !1 && _(!1), () => _(!1)), [l.open, _]), /* @__PURE__ */ jsx(Root2$2, {
		...u,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: a,
			open: s,
			onOpenChange: _,
			content: m,
			onContentChange: g,
			children: /* @__PURE__ */ jsx(MenuSubProvider, {
				scope: a,
				contentId: useId$1(),
				triggerId: useId$1(),
				trigger: d,
				onTriggerChange: f,
				children: o
			})
		})
	});
};
MenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME$1 = "MenuSubTrigger", MenuSubTrigger = React$1.forwardRef((e, a) => {
	let o = useMenuContext(SUB_TRIGGER_NAME$1, e.__scopeMenu), c = useMenuRootContext(SUB_TRIGGER_NAME$1, e.__scopeMenu), l = useMenuSubContext(SUB_TRIGGER_NAME$1, e.__scopeMenu), u = useMenuContentContext(SUB_TRIGGER_NAME$1, e.__scopeMenu), d = React$1.useRef(null), { pointerGraceTimerRef: f, onPointerGraceIntentChange: p } = u, m = { __scopeMenu: e.__scopeMenu }, h = React$1.useCallback(() => {
		d.current && window.clearTimeout(d.current), d.current = null;
	}, []);
	return React$1.useEffect(() => h, [h]), React$1.useEffect(() => {
		let e = f.current;
		return () => {
			window.clearTimeout(e), p(null);
		};
	}, [f, p]), /* @__PURE__ */ jsx(MenuAnchor, {
		asChild: !0,
		...m,
		children: /* @__PURE__ */ jsx(MenuItemImpl, {
			id: l.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": o.open,
			"aria-controls": l.contentId,
			"data-state": getOpenState(o.open),
			...e,
			ref: composeRefs(a, l.onTriggerChange),
			onClick: (a) => {
				e.onClick?.(a), !(e.disabled || a.defaultPrevented) && (a.currentTarget.focus(), o.open || o.onOpenChange(!0));
			},
			onPointerMove: composeEventHandlers(e.onPointerMove, whenMouse((a) => {
				u.onItemEnter(a), !a.defaultPrevented && !e.disabled && !o.open && !d.current && (u.onPointerGraceIntentChange(null), d.current = window.setTimeout(() => {
					o.onOpenChange(!0), h();
				}, 100));
			})),
			onPointerLeave: composeEventHandlers(e.onPointerLeave, whenMouse((e) => {
				h();
				let a = o.content?.getBoundingClientRect();
				if (a) {
					let s = o.content?.dataset.side, c = s === "right", l = c ? -5 : 5, d = a[c ? "left" : "right"], p = a[c ? "right" : "left"];
					u.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + l,
								y: e.clientY
							},
							{
								x: d,
								y: a.top
							},
							{
								x: p,
								y: a.top
							},
							{
								x: p,
								y: a.bottom
							},
							{
								x: d,
								y: a.bottom
							}
						],
						side: s
					}), window.clearTimeout(f.current), f.current = window.setTimeout(() => u.onPointerGraceIntentChange(null), 300);
				} else {
					if (u.onTriggerLeave(e), e.defaultPrevented) return;
					u.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: composeEventHandlers(e.onKeyDown, (a) => {
				let s = u.searchRef.current !== "";
				e.disabled || s && a.key === " " || SUB_OPEN_KEYS[c.dir].includes(a.key) && (o.onOpenChange(!0), o.content?.focus(), a.preventDefault());
			})
		})
	});
});
MenuSubTrigger.displayName = SUB_TRIGGER_NAME$1;
var SUB_CONTENT_NAME$1 = "MenuSubContent", MenuSubContent = React$1.forwardRef((e, a) => {
	let s = usePortalContext(CONTENT_NAME$2, e.__scopeMenu), { forceMount: c = s.forceMount, ...l } = e, u = useMenuContext(CONTENT_NAME$2, e.__scopeMenu), d = useMenuRootContext(CONTENT_NAME$2, e.__scopeMenu), f = useMenuSubContext(SUB_CONTENT_NAME$1, e.__scopeMenu), p = React$1.useRef(null), m = useComposedRefs(a, p);
	return /* @__PURE__ */ jsx(Collection$2.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: c || u.open,
			children: /* @__PURE__ */ jsx(Collection$2.Slot, {
				scope: e.__scopeMenu,
				children: /* @__PURE__ */ jsx(MenuContentImpl, {
					id: f.contentId,
					"aria-labelledby": f.triggerId,
					...l,
					ref: m,
					align: "start",
					side: d.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						d.isUsingKeyboardRef.current && p.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: composeEventHandlers(e.onFocusOutside, (e) => {
						e.target !== f.trigger && u.onOpenChange(!1);
					}),
					onEscapeKeyDown: composeEventHandlers(e.onEscapeKeyDown, (e) => {
						d.onClose(), e.preventDefault();
					}),
					onKeyDown: composeEventHandlers(e.onKeyDown, (e) => {
						let a = e.currentTarget.contains(e.target), o = SUB_CLOSE_KEYS[d.dir].includes(e.key);
						a && o && (u.onOpenChange(!1), f.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
MenuSubContent.displayName = SUB_CONTENT_NAME$1;
function getOpenState(e) {
	return e ? "open" : "closed";
}
function isIndeterminate(e) {
	return e === "indeterminate";
}
function getCheckedState(e) {
	return isIndeterminate(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function focusFirst(e) {
	let a = document.activeElement;
	for (let o of e) if (o === a || (o.focus(), document.activeElement !== a)) return;
}
function wrapArray$1(e, a) {
	return e.map((o, s) => e[(a + s) % e.length]);
}
function getNextMatch(e, a, o) {
	let s = a.length > 1 && Array.from(a).every((e) => e === a[0]) ? a[0] : a, c = o ? e.indexOf(o) : -1, l = wrapArray$1(e, Math.max(c, 0));
	s.length === 1 && (l = l.filter((e) => e !== o));
	let u = l.find((e) => e.toLowerCase().startsWith(s.toLowerCase()));
	return u === o ? void 0 : u;
}
function isPointInPolygon(e, a) {
	let { x: o, y: s } = e, c = !1;
	for (let e = 0, l = a.length - 1; e < a.length; l = e++) {
		let u = a[e], d = a[l], f = u.x, p = u.y, m = d.x, h = d.y;
		p > s != h > s && o < (m - f) * (s - p) / (h - p) + f && (c = !c);
	}
	return c;
}
function isPointerInGraceArea(e, a) {
	return a ? isPointInPolygon({
		x: e.clientX,
		y: e.clientY
	}, a) : !1;
}
function whenMouse(e) {
	return (a) => a.pointerType === "mouse" ? e(a) : void 0;
}
var Root3 = Menu, Anchor2 = MenuAnchor, Portal$2 = MenuPortal, Content2$2 = MenuContent, Group = MenuGroup, Label$3 = MenuLabel, Item2$1 = MenuItem, CheckboxItem = MenuCheckboxItem, RadioGroup = MenuRadioGroup, RadioItem = MenuRadioItem, ItemIndicator$1 = MenuItemIndicator, Separator$1 = MenuSeparator, Arrow2 = MenuArrow, SubTrigger = MenuSubTrigger, SubContent = MenuSubContent, DROPDOWN_MENU_NAME = "DropdownMenu", [createDropdownMenuContext, createDropdownMenuScope] = createContextScope$3(DROPDOWN_MENU_NAME, [createMenuScope]), useMenuScope = createMenuScope(), [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME), DropdownMenu$1 = (e) => {
	let { __scopeDropdownMenu: a, children: o, dir: s, open: c, defaultOpen: l, onOpenChange: u, modal: d = !0 } = e, f = useMenuScope(a), p = React$1.useRef(null), [m, g] = useControllableState({
		prop: c,
		defaultProp: l ?? !1,
		onChange: u,
		caller: DROPDOWN_MENU_NAME
	});
	return /* @__PURE__ */ jsx(DropdownMenuProvider, {
		scope: a,
		triggerId: useId$1(),
		triggerRef: p,
		contentId: useId$1(),
		open: m,
		onOpenChange: g,
		onOpenToggle: React$1.useCallback(() => g((e) => !e), [g]),
		modal: d,
		children: /* @__PURE__ */ jsx(Root3, {
			...f,
			open: m,
			onOpenChange: g,
			dir: s,
			modal: d,
			children: o
		})
	});
};
DropdownMenu$1.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME$1 = "DropdownMenuTrigger", DropdownMenuTrigger$1 = React$1.forwardRef((e, a) => {
	let { __scopeDropdownMenu: o, disabled: c = !1, ...l } = e, u = useDropdownMenuContext(TRIGGER_NAME$1, o);
	return /* @__PURE__ */ jsx(Anchor2, {
		asChild: !0,
		...useMenuScope(o),
		children: /* @__PURE__ */ jsx(Primitive$4.button, {
			type: "button",
			id: u.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": u.open,
			"aria-controls": u.open ? u.contentId : void 0,
			"data-state": u.open ? "open" : "closed",
			"data-disabled": c ? "" : void 0,
			disabled: c,
			...l,
			ref: composeRefs(a, u.triggerRef),
			onPointerDown: composeEventHandlers(e.onPointerDown, (e) => {
				!c && e.button === 0 && e.ctrlKey === !1 && (u.onOpenToggle(), u.open || e.preventDefault());
			}),
			onKeyDown: composeEventHandlers(e.onKeyDown, (e) => {
				c || (["Enter", " "].includes(e.key) && u.onOpenToggle(), e.key === "ArrowDown" && u.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
});
DropdownMenuTrigger$1.displayName = TRIGGER_NAME$1;
var PORTAL_NAME$1 = "DropdownMenuPortal", DropdownMenuPortal = (e) => {
	let { __scopeDropdownMenu: a, ...o } = e;
	return /* @__PURE__ */ jsx(Portal$2, {
		...useMenuScope(a),
		...o
	});
};
DropdownMenuPortal.displayName = PORTAL_NAME$1;
var CONTENT_NAME$1 = "DropdownMenuContent", DropdownMenuContent$1 = React$1.forwardRef((e, a) => {
	let { __scopeDropdownMenu: o, ...s } = e, c = useDropdownMenuContext(CONTENT_NAME$1, o), l = useMenuScope(o), u = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(Content2$2, {
		id: c.contentId,
		"aria-labelledby": c.triggerId,
		...l,
		...s,
		ref: a,
		onCloseAutoFocus: composeEventHandlers(e.onCloseAutoFocus, (e) => {
			u.current || c.triggerRef.current?.focus(), u.current = !1, e.preventDefault();
		}),
		onInteractOutside: composeEventHandlers(e.onInteractOutside, (e) => {
			let a = e.detail.originalEvent, o = a.button === 0 && a.ctrlKey === !0, s = a.button === 2 || o;
			(!c.modal || s) && (u.current = !0);
		}),
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
DropdownMenuContent$1.displayName = CONTENT_NAME$1;
var GROUP_NAME$1 = "DropdownMenuGroup", DropdownMenuGroup$1 = React$1.forwardRef((e, a) => {
	let { __scopeDropdownMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(Group, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuGroup$1.displayName = GROUP_NAME$1;
var LABEL_NAME$1 = "DropdownMenuLabel", DropdownMenuLabel$1 = React$1.forwardRef((e, a) => {
	let { __scopeDropdownMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(Label$3, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuLabel$1.displayName = LABEL_NAME$1;
var ITEM_NAME$1 = "DropdownMenuItem", DropdownMenuItem$1 = React$1.forwardRef((e, a) => {
	let { __scopeDropdownMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(Item2$1, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuItem$1.displayName = ITEM_NAME$1;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem", DropdownMenuCheckboxItem$1 = React$1.forwardRef((e, a) => {
	let { __scopeDropdownMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(CheckboxItem, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuCheckboxItem$1.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup", DropdownMenuRadioGroup$1 = React$1.forwardRef((e, a) => {
	let { __scopeDropdownMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(RadioGroup, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuRadioGroup$1.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem", DropdownMenuRadioItem$1 = React$1.forwardRef((e, a) => {
	let { __scopeDropdownMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(RadioItem, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuRadioItem$1.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator", DropdownMenuItemIndicator = React$1.forwardRef((e, a) => {
	let { __scopeDropdownMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(ItemIndicator$1, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME$1 = "DropdownMenuSeparator", DropdownMenuSeparator$1 = React$1.forwardRef((e, a) => {
	let { __scopeDropdownMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(Separator$1, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuSeparator$1.displayName = SEPARATOR_NAME$1;
var ARROW_NAME$1 = "DropdownMenuArrow", DropdownMenuArrow = React$1.forwardRef((e, a) => {
	let { __scopeDropdownMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(Arrow2, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuArrow.displayName = ARROW_NAME$1;
var SUB_TRIGGER_NAME = "DropdownMenuSubTrigger", DropdownMenuSubTrigger$1 = React$1.forwardRef((e, a) => {
	let { __scopeDropdownMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(SubTrigger, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuSubTrigger$1.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent", DropdownMenuSubContent$1 = React$1.forwardRef((e, a) => {
	let { __scopeDropdownMenu: o, ...s } = e;
	return /* @__PURE__ */ jsx(SubContent, {
		...useMenuScope(o),
		...s,
		ref: a,
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
DropdownMenuSubContent$1.displayName = SUB_CONTENT_NAME;
var Root2$1 = DropdownMenu$1, Trigger$1 = DropdownMenuTrigger$1, Portal2 = DropdownMenuPortal, Content2$1 = DropdownMenuContent$1, Group2 = DropdownMenuGroup$1, Label2 = DropdownMenuLabel$1, Item2 = DropdownMenuItem$1, CheckboxItem2 = DropdownMenuCheckboxItem$1, RadioGroup2 = DropdownMenuRadioGroup$1, RadioItem2 = DropdownMenuRadioItem$1, ItemIndicator2 = DropdownMenuItemIndicator, Separator2 = DropdownMenuSeparator$1, SubTrigger2 = DropdownMenuSubTrigger$1, SubContent2 = DropdownMenuSubContent$1;
function DropdownMenu({ ...e }) {
	return /* @__PURE__ */ jsx(Root2$1, {
		"data-slot": "dropdown-menu",
		...e
	});
}
var DropdownMenuTrigger = React$1.forwardRef(({ ...e }, a) => /* @__PURE__ */ jsx(Trigger$1, {
	"data-slot": "dropdown-menu-trigger",
	...e,
	ref: a
}));
DropdownMenuTrigger.displayName = Trigger$1.displayName;
var DropdownMenuContent = React$1.forwardRef(({ className: e, sideOffset: a = 4, ...o }, s) => /* @__PURE__ */ jsx(Portal2, { children: /* @__PURE__ */ jsx(Content2$1, {
	ref: s,
	"data-slot": "dropdown-menu-content",
	sideOffset: a,
	className: cn("chatbot-theme bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", e),
	...o
}) }));
DropdownMenuContent.displayName = Content2$1.displayName;
var DropdownMenuGroup = React$1.forwardRef(({ ...e }, a) => /* @__PURE__ */ jsx(Group2, {
	ref: a,
	"data-slot": "dropdown-menu-group",
	...e
}));
DropdownMenuGroup.displayName = Group2.displayName;
var DropdownMenuItem = React$1.forwardRef(({ className: e, inset: a, variant: o = "default", ...s }, c) => /* @__PURE__ */ jsx(Item2, {
	ref: c,
	"data-slot": "dropdown-menu-item",
	"data-inset": a,
	"data-variant": o,
	className: cn("focus:bg-accent capitalize focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
	...s
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = React$1.forwardRef(({ className: e, children: o, checked: s, ...c }, l) => /* @__PURE__ */ jsxs(CheckboxItem2, {
	ref: l,
	"data-slot": "dropdown-menu-checkbox-item",
	className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
	checked: s,
	...c,
	children: [/* @__PURE__ */ jsx("span", {
		className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(ItemIndicator2, { children: /* @__PURE__ */ jsx(Check, { className: "size-4" }) })
	}), o]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioGroup = React$1.forwardRef(({ ...e }, a) => /* @__PURE__ */ jsx(RadioGroup2, {
	ref: a,
	"data-slot": "dropdown-menu-radio-group",
	...e
}));
DropdownMenuRadioGroup.displayName = RadioGroup2.displayName;
var DropdownMenuRadioItem = React$1.forwardRef(({ className: e, children: a, ...o }, s) => /* @__PURE__ */ jsxs(RadioItem2, {
	ref: s,
	"data-slot": "dropdown-menu-radio-item",
	className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
	...o,
	children: [/* @__PURE__ */ jsx("span", {
		className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(ItemIndicator2, { children: /* @__PURE__ */ jsx(Circle, { className: "size-2 fill-current" }) })
	}), a]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = React$1.forwardRef(({ className: e, inset: a, ...o }, s) => /* @__PURE__ */ jsx(Label2, {
	ref: s,
	"data-slot": "dropdown-menu-label",
	"data-inset": a,
	className: cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
	...o
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = React$1.forwardRef(({ className: e, ...a }, o) => /* @__PURE__ */ jsx(Separator2, {
	ref: o,
	"data-slot": "dropdown-menu-separator",
	className: cn("bg-border -mx-1 my-1 h-px", e),
	...a
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuSubTrigger = React$1.forwardRef(({ className: e, inset: a, children: o, ...s }, c) => /* @__PURE__ */ jsxs(SubTrigger2, {
	ref: c,
	"data-slot": "dropdown-menu-sub-trigger",
	"data-inset": a,
	className: cn("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
	...s,
	children: [o, /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto size-4" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = React$1.forwardRef(({ className: e, ...a }, o) => /* @__PURE__ */ jsx(SubContent2, {
	ref: o,
	"data-slot": "dropdown-menu-sub-content",
	className: cn("chatbot-theme bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", e),
	...a
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var NAME = "Label", Label$2 = React$1.forwardRef((e, a) => /* @__PURE__ */ jsx(Primitive$3.label, {
	...e,
	ref: a,
	onMouseDown: (a) => {
		a.target.closest("button, input, select, textarea") || (e.onMouseDown?.(a), !a.defaultPrevented && a.detail > 1 && a.preventDefault());
	}
}));
Label$2.displayName = NAME;
var Root$2 = Label$2, Label = React$1.forwardRef(({ className: e, ...a }, o) => /* @__PURE__ */ jsx(Root$2, {
	ref: o,
	"data-slot": "label",
	className: cn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
	...a
}));
Label.displayName = Root$2.displayName;
function clamp(e, [a, o]) {
	return Math.min(o, Math.max(a, e));
}
function createContextScope$2(e, a = []) {
	let o = [];
	function s(a, s) {
		let c = React$1.createContext(s), l = o.length;
		o = [...o, s];
		let u = (a) => {
			let { scope: o, children: s, ...u } = a, d = o?.[e]?.[l] || c, f = React$1.useMemo(() => u, Object.values(u));
			return /* @__PURE__ */ jsx(d.Provider, {
				value: f,
				children: s
			});
		};
		u.displayName = a + "Provider";
		function d(o, u) {
			let d = u?.[e]?.[l] || c, f = React$1.useContext(d);
			if (f) return f;
			if (s !== void 0) return s;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [u, d];
	}
	let c = () => {
		let a = o.map((e) => React$1.createContext(e));
		return function(o) {
			let s = o?.[e] || a;
			return React$1.useMemo(() => ({ [`__scope${e}`]: {
				...o,
				[e]: s
			} }), [o, s]);
		};
	};
	return c.scopeName = e, [s, composeContextScopes$2(c, ...a)];
}
function composeContextScopes$2(...e) {
	let a = e[0];
	if (e.length === 1) return a;
	let o = () => {
		let o = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let s = o.reduce((a, { useScope: o, scopeName: s }) => {
				let c = o(e)[`__scope${s}`];
				return {
					...a,
					...c
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${a.scopeName}`]: s }), [s]);
		};
	};
	return o.scopeName = a.scopeName, o;
}
function usePrevious(e) {
	let a = React$1.useRef({
		value: e,
		previous: e
	});
	return React$1.useMemo(() => (a.current.value !== e && (a.current.previous = a.current.value, a.current.value = e), a.current.previous), [e]);
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$2(e) {
	let a = /* @__PURE__ */ createSlotClone$2(e), o = React$1.forwardRef((e, o) => {
		let { children: s, ...c } = e, l = React$1.Children.toArray(s), u = l.find(isSlottable$2);
		if (u) {
			let e = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(e) > 1 ? React$1.Children.only(null) : React$1.isValidElement(e) ? e.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(e) ? React$1.cloneElement(e, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${e}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$2(e) {
	let a = React$1.forwardRef((e, a) => {
		let { children: o, ...c } = e;
		if (React$1.isValidElement(o)) {
			let e = getElementRef$2(o), l = mergeProps$2(c, o.props);
			return o.type !== React$1.Fragment && (l.ref = a ? composeRefs(a, e) : e), React$1.cloneElement(o, l);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${e}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$2 = Symbol("radix.slottable");
function isSlottable$2(e) {
	return React$1.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SLOTTABLE_IDENTIFIER$2;
}
function mergeProps$2(e, a) {
	let o = { ...a };
	for (let s in a) {
		let c = e[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...e) => {
			let a = l(...e);
			return c(...e), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...e,
		...o
	};
}
function getElementRef$2(e) {
	let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
var Primitive$2 = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, a) => {
	let o = /* @__PURE__ */ createSlot$2(`Primitive.${a}`), s = React$1.forwardRef((e, s) => {
		let { asChild: c, ...l } = e, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: s
		});
	});
	return s.displayName = `Primitive.${a}`, {
		...e,
		[a]: s
	};
}, {}), PAGE_KEYS = ["PageUp", "PageDown"], ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], BACK_KEYS = {
	"from-left": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-right": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowRight"
	],
	"from-bottom": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-top": [
		"Home",
		"PageDown",
		"ArrowUp",
		"ArrowLeft"
	]
}, SLIDER_NAME = "Slider", [Collection$1, useCollection$1, createCollectionScope$1] = createCollection(SLIDER_NAME), [createSliderContext, createSliderScope] = createContextScope$2(SLIDER_NAME, [createCollectionScope$1]), [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME), Slider$1 = React$1.forwardRef((e, a) => {
	let { name: o, min: s = 0, max: c = 100, step: l = 1, orientation: u = "horizontal", disabled: d = !1, minStepsBetweenThumbs: f = 0, defaultValue: p = [s], value: m, onValueChange: h = () => {}, onValueCommit: g = () => {}, inverted: _ = !1, form: v, ...y } = e, x = React$1.useRef(/* @__PURE__ */ new Set()), S = React$1.useRef(0), C = u === "horizontal" ? SliderHorizontal : SliderVertical, [w = [], T] = useControllableState({
		prop: m,
		defaultProp: p,
		onChange: (e) => {
			[...x.current][S.current]?.focus(), h(e);
		}
	}), E = React$1.useRef(w);
	function O(e) {
		j(e, getClosestValueIndex(w, e));
	}
	function k(e) {
		j(e, S.current);
	}
	function A() {
		let e = E.current[S.current];
		w[S.current] !== e && g(w);
	}
	function j(e, a, { commit: o } = { commit: !1 }) {
		let u = getDecimalCount(l), d = clamp(roundValue(Math.round((e - s) / l) * l + s, u), [s, c]);
		T((e = []) => {
			let s = getNextSortedValues(e, d, a);
			if (hasMinStepsBetweenValues(s, f * l)) {
				S.current = s.indexOf(d);
				let a = String(s) !== String(e);
				return a && o && g(s), a ? s : e;
			} else return e;
		});
	}
	return /* @__PURE__ */ jsx(SliderProvider, {
		scope: e.__scopeSlider,
		name: o,
		disabled: d,
		min: s,
		max: c,
		valueIndexToChangeRef: S,
		thumbs: x.current,
		values: w,
		orientation: u,
		form: v,
		children: /* @__PURE__ */ jsx(Collection$1.Provider, {
			scope: e.__scopeSlider,
			children: /* @__PURE__ */ jsx(Collection$1.Slot, {
				scope: e.__scopeSlider,
				children: /* @__PURE__ */ jsx(C, {
					"aria-disabled": d,
					"data-disabled": d ? "" : void 0,
					...y,
					ref: a,
					onPointerDown: composeEventHandlers(y.onPointerDown, () => {
						d || (E.current = w);
					}),
					min: s,
					max: c,
					inverted: _,
					onSlideStart: d ? void 0 : O,
					onSlideMove: d ? void 0 : k,
					onSlideEnd: d ? void 0 : A,
					onHomeKeyDown: () => !d && j(s, 0, { commit: !0 }),
					onEndKeyDown: () => !d && j(c, w.length - 1, { commit: !0 }),
					onStepKeyDown: ({ event: e, direction: a }) => {
						if (!d) {
							let o = PAGE_KEYS.includes(e.key) || e.shiftKey && ARROW_KEYS.includes(e.key) ? 10 : 1, s = S.current, c = w[s];
							j(c + l * o * a, s, { commit: !0 });
						}
					}
				})
			})
		})
	});
});
Slider$1.displayName = SLIDER_NAME;
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
	startEdge: "left",
	endEdge: "right",
	size: "width",
	direction: 1
}), SliderHorizontal = React$1.forwardRef((e, a) => {
	let { min: s, max: c, dir: l, inverted: u, onSlideStart: d, onSlideMove: f, onSlideEnd: p, onStepKeyDown: m, ...h } = e, [g, _] = React$1.useState(null), v = useComposedRefs(a, (e) => _(e)), y = React$1.useRef(void 0), b = useDirection(l), x = b === "ltr", S = x && !u || !x && u;
	function C(e) {
		let a = y.current || g.getBoundingClientRect(), o = linearScale([0, a.width], S ? [s, c] : [c, s]);
		return y.current = a, o(e - a.left);
	}
	return /* @__PURE__ */ jsx(SliderOrientationProvider, {
		scope: e.__scopeSlider,
		startEdge: S ? "left" : "right",
		endEdge: S ? "right" : "left",
		direction: S ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ jsx(SliderImpl, {
			dir: b,
			"data-orientation": "horizontal",
			...h,
			ref: v,
			style: {
				...h.style,
				"--radix-slider-thumb-transform": "translateX(-50%)"
			},
			onSlideStart: (e) => {
				let a = C(e.clientX);
				d?.(a);
			},
			onSlideMove: (e) => {
				let a = C(e.clientX);
				f?.(a);
			},
			onSlideEnd: () => {
				y.current = void 0, p?.();
			},
			onStepKeyDown: (e) => {
				let a = BACK_KEYS[S ? "from-left" : "from-right"].includes(e.key);
				m?.({
					event: e,
					direction: a ? -1 : 1
				});
			}
		})
	});
}), SliderVertical = React$1.forwardRef((e, a) => {
	let { min: s, max: c, inverted: l, onSlideStart: u, onSlideMove: d, onSlideEnd: f, onStepKeyDown: p, ...m } = e, h = React$1.useRef(null), g = useComposedRefs(a, h), _ = React$1.useRef(void 0), v = !l;
	function y(e) {
		let a = _.current || h.current.getBoundingClientRect(), o = linearScale([0, a.height], v ? [c, s] : [s, c]);
		return _.current = a, o(e - a.top);
	}
	return /* @__PURE__ */ jsx(SliderOrientationProvider, {
		scope: e.__scopeSlider,
		startEdge: v ? "bottom" : "top",
		endEdge: v ? "top" : "bottom",
		size: "height",
		direction: v ? 1 : -1,
		children: /* @__PURE__ */ jsx(SliderImpl, {
			"data-orientation": "vertical",
			...m,
			ref: g,
			style: {
				...m.style,
				"--radix-slider-thumb-transform": "translateY(50%)"
			},
			onSlideStart: (e) => {
				let a = y(e.clientY);
				u?.(a);
			},
			onSlideMove: (e) => {
				let a = y(e.clientY);
				d?.(a);
			},
			onSlideEnd: () => {
				_.current = void 0, f?.();
			},
			onStepKeyDown: (e) => {
				let a = BACK_KEYS[v ? "from-bottom" : "from-top"].includes(e.key);
				p?.({
					event: e,
					direction: a ? -1 : 1
				});
			}
		})
	});
}), SliderImpl = React$1.forwardRef((e, a) => {
	let { __scopeSlider: o, onSlideStart: s, onSlideMove: c, onSlideEnd: l, onHomeKeyDown: u, onEndKeyDown: d, onStepKeyDown: f, ...p } = e, m = useSliderContext(SLIDER_NAME, o);
	return /* @__PURE__ */ jsx(Primitive$2.span, {
		...p,
		ref: a,
		onKeyDown: composeEventHandlers(e.onKeyDown, (e) => {
			e.key === "Home" ? (u(e), e.preventDefault()) : e.key === "End" ? (d(e), e.preventDefault()) : PAGE_KEYS.concat(ARROW_KEYS).includes(e.key) && (f(e), e.preventDefault());
		}),
		onPointerDown: composeEventHandlers(e.onPointerDown, (e) => {
			let a = e.target;
			a.setPointerCapture(e.pointerId), e.preventDefault(), m.thumbs.has(a) ? a.focus() : s(e);
		}),
		onPointerMove: composeEventHandlers(e.onPointerMove, (e) => {
			e.target.hasPointerCapture(e.pointerId) && c(e);
		}),
		onPointerUp: composeEventHandlers(e.onPointerUp, (e) => {
			let a = e.target;
			a.hasPointerCapture(e.pointerId) && (a.releasePointerCapture(e.pointerId), l(e));
		})
	});
}), TRACK_NAME = "SliderTrack", SliderTrack = React$1.forwardRef((e, a) => {
	let { __scopeSlider: o, ...s } = e, c = useSliderContext(TRACK_NAME, o);
	return /* @__PURE__ */ jsx(Primitive$2.span, {
		"data-disabled": c.disabled ? "" : void 0,
		"data-orientation": c.orientation,
		...s,
		ref: a
	});
});
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange", SliderRange = React$1.forwardRef((e, a) => {
	let { __scopeSlider: s, ...c } = e, l = useSliderContext(RANGE_NAME, s), u = useSliderOrientationContext(RANGE_NAME, s), d = useComposedRefs(a, React$1.useRef(null)), f = l.values.length, p = l.values.map((e) => convertValueToPercentage(e, l.min, l.max)), m = f > 1 ? Math.min(...p) : 0, h = 100 - Math.max(...p);
	return /* @__PURE__ */ jsx(Primitive$2.span, {
		"data-orientation": l.orientation,
		"data-disabled": l.disabled ? "" : void 0,
		...c,
		ref: d,
		style: {
			...e.style,
			[u.startEdge]: m + "%",
			[u.endEdge]: h + "%"
		}
	});
});
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME$1 = "SliderThumb", SliderThumb = React$1.forwardRef((e, a) => {
	let s = useCollection$1(e.__scopeSlider), [c, l] = React$1.useState(null), u = useComposedRefs(a, (e) => l(e)), d = React$1.useMemo(() => c ? s().findIndex((e) => e.ref.current === c) : -1, [s, c]);
	return /* @__PURE__ */ jsx(SliderThumbImpl, {
		...e,
		ref: u,
		index: d
	});
}), SliderThumbImpl = React$1.forwardRef((e, a) => {
	let { __scopeSlider: s, index: c, name: l, ...u } = e, d = useSliderContext(THUMB_NAME$1, s), f = useSliderOrientationContext(THUMB_NAME$1, s), [p, m] = React$1.useState(null), h = useComposedRefs(a, (e) => m(e)), g = p ? d.form || !!p.closest("form") : !0, _ = useSize(p), y = d.values[c], b = y === void 0 ? 0 : convertValueToPercentage(y, d.min, d.max), x = getLabel(c, d.values.length), S = _?.[f.size], C = S ? getThumbInBoundsOffset(S, b, f.direction) : 0;
	return React$1.useEffect(() => {
		if (p) return d.thumbs.add(p), () => {
			d.thumbs.delete(p);
		};
	}, [p, d.thumbs]), /* @__PURE__ */ jsxs("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[f.startEdge]: `calc(${b}% + ${C}px)`
		},
		children: [/* @__PURE__ */ jsx(Collection$1.ItemSlot, {
			scope: e.__scopeSlider,
			children: /* @__PURE__ */ jsx(Primitive$2.span, {
				role: "slider",
				"aria-label": e["aria-label"] || x,
				"aria-valuemin": d.min,
				"aria-valuenow": y,
				"aria-valuemax": d.max,
				"aria-orientation": d.orientation,
				"data-orientation": d.orientation,
				"data-disabled": d.disabled ? "" : void 0,
				tabIndex: d.disabled ? void 0 : 0,
				...u,
				ref: h,
				style: y === void 0 ? { display: "none" } : e.style,
				onFocus: composeEventHandlers(e.onFocus, () => {
					d.valueIndexToChangeRef.current = c;
				})
			})
		}), g && /* @__PURE__ */ jsx(SliderBubbleInput, {
			name: l ?? (d.name ? d.name + (d.values.length > 1 ? "[]" : "") : void 0),
			form: d.form,
			value: y
		}, c)]
	});
});
SliderThumb.displayName = THUMB_NAME$1;
var BUBBLE_INPUT_NAME$2 = "RadioBubbleInput", SliderBubbleInput = React$1.forwardRef(({ __scopeSlider: e, value: a, ...s }, c) => {
	let l = React$1.useRef(null), u = useComposedRefs(l, c), d = usePrevious(a);
	return React$1.useEffect(() => {
		let e = l.current;
		if (!e) return;
		let o = window.HTMLInputElement.prototype, s = Object.getOwnPropertyDescriptor(o, "value").set;
		if (d !== a && s) {
			let o = new Event("input", { bubbles: !0 });
			s.call(e, a), e.dispatchEvent(o);
		}
	}, [d, a]), /* @__PURE__ */ jsx(Primitive$2.input, {
		style: { display: "none" },
		...s,
		ref: u,
		defaultValue: a
	});
});
SliderBubbleInput.displayName = BUBBLE_INPUT_NAME$2;
function getNextSortedValues(e = [], a, o) {
	let s = [...e];
	return s[o] = a, s.sort((e, a) => e - a);
}
function convertValueToPercentage(e, a, o) {
	return clamp(100 / (o - a) * (e - a), [0, 100]);
}
function getLabel(e, a) {
	if (a > 2) return `Value ${e + 1} of ${a}`;
	if (a === 2) return ["Minimum", "Maximum"][e];
}
function getClosestValueIndex(e, a) {
	if (e.length === 1) return 0;
	let o = e.map((e) => Math.abs(e - a)), s = Math.min(...o);
	return o.indexOf(s);
}
function getThumbInBoundsOffset(e, a, o) {
	let s = e / 2;
	return (s - linearScale([0, 50], [0, s])(a) * o) * o;
}
function getStepsBetweenValues(e) {
	return e.slice(0, -1).map((a, o) => e[o + 1] - a);
}
function hasMinStepsBetweenValues(e, a) {
	if (a > 0) {
		let o = getStepsBetweenValues(e);
		return Math.min(...o) >= a;
	}
	return !0;
}
function linearScale(e, a) {
	return (o) => {
		if (e[0] === e[1] || a[0] === a[1]) return a[0];
		let s = (a[1] - a[0]) / (e[1] - e[0]);
		return a[0] + s * (o - e[0]);
	};
}
function getDecimalCount(e) {
	return (String(e).split(".")[1] || "").length;
}
function roundValue(e, a) {
	let o = 10 ** a;
	return Math.round(e * o) / o;
}
var Root$1 = Slider$1, Track = SliderTrack, Range = SliderRange, Thumb$1 = SliderThumb, Slider = React$1.forwardRef(({ className: e, defaultValue: a, value: o, min: s = 0, max: c = 100, ...l }, u) => {
	let d = React$1.useMemo(() => Array.isArray(o) ? o : Array.isArray(a) ? a : [s, c], [
		o,
		a,
		s,
		c
	]);
	return /* @__PURE__ */ jsxs(Root$1, {
		ref: u,
		"data-slot": "slider",
		defaultValue: a,
		value: o,
		min: s,
		max: c,
		className: cn("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", e),
		...l,
		children: [/* @__PURE__ */ jsx(Track, {
			"data-slot": "slider-track",
			className: cn("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),
			children: /* @__PURE__ */ jsx(Range, {
				"data-slot": "slider-range",
				className: cn("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
			})
		}), Array.from({ length: d.length }, (e, a) => /* @__PURE__ */ jsx(Thumb$1, {
			"data-slot": "slider-thumb",
			className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
		}, a))]
	});
});
Slider.displayName = Root$1.displayName;
function createContextScope$1(e, a = []) {
	let o = [];
	function s(a, s) {
		let c = React$1.createContext(s), l = o.length;
		o = [...o, s];
		let u = (a) => {
			let { scope: o, children: s, ...u } = a, d = o?.[e]?.[l] || c, f = React$1.useMemo(() => u, Object.values(u));
			return /* @__PURE__ */ jsx(d.Provider, {
				value: f,
				children: s
			});
		};
		u.displayName = a + "Provider";
		function d(o, u) {
			let d = u?.[e]?.[l] || c, f = React$1.useContext(d);
			if (f) return f;
			if (s !== void 0) return s;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [u, d];
	}
	let c = () => {
		let a = o.map((e) => React$1.createContext(e));
		return function(o) {
			let s = o?.[e] || a;
			return React$1.useMemo(() => ({ [`__scope${e}`]: {
				...o,
				[e]: s
			} }), [o, s]);
		};
	};
	return c.scopeName = e, [s, composeContextScopes$1(c, ...a)];
}
function composeContextScopes$1(...e) {
	let a = e[0];
	if (e.length === 1) return a;
	let o = () => {
		let o = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let s = o.reduce((a, { useScope: o, scopeName: s }) => {
				let c = o(e)[`__scope${s}`];
				return {
					...a,
					...c
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${a.scopeName}`]: s }), [s]);
		};
	};
	return o.scopeName = a.scopeName, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$1(e) {
	let a = /* @__PURE__ */ createSlotClone$1(e), o = React$1.forwardRef((e, o) => {
		let { children: s, ...c } = e, l = React$1.Children.toArray(s), u = l.find(isSlottable$1);
		if (u) {
			let e = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(e) > 1 ? React$1.Children.only(null) : React$1.isValidElement(e) ? e.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(e) ? React$1.cloneElement(e, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${e}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$1(e) {
	let a = React$1.forwardRef((e, a) => {
		let { children: o, ...c } = e;
		if (React$1.isValidElement(o)) {
			let e = getElementRef$1(o), l = mergeProps$1(c, o.props);
			return o.type !== React$1.Fragment && (l.ref = a ? composeRefs(a, e) : e), React$1.cloneElement(o, l);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${e}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$1 = Symbol("radix.slottable");
function isSlottable$1(e) {
	return React$1.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
function mergeProps$1(e, a) {
	let o = { ...a };
	for (let s in a) {
		let c = e[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...e) => {
			let a = l(...e);
			return c(...e), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...e,
		...o
	};
}
function getElementRef$1(e) {
	let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
var Primitive$1 = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, a) => {
	let o = /* @__PURE__ */ createSlot$1(`Primitive.${a}`), s = React$1.forwardRef((e, s) => {
		let { asChild: c, ...l } = e, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: s
		});
	});
	return s.displayName = `Primitive.${a}`, {
		...e,
		[a]: s
	};
}, {}), SWITCH_NAME = "Switch", [createSwitchContext, createSwitchScope] = createContextScope$1(SWITCH_NAME), [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME), Switch$1 = React$1.forwardRef((e, a) => {
	let { __scopeSwitch: s, name: c, checked: l, defaultChecked: u, required: d, disabled: f, value: p = "on", onCheckedChange: m, form: h, ...g } = e, [_, v] = React$1.useState(null), y = useComposedRefs(a, (e) => v(e)), x = React$1.useRef(!1), S = _ ? h || !!_.closest("form") : !0, [C, w] = useControllableState({
		prop: l,
		defaultProp: u ?? !1,
		onChange: m,
		caller: SWITCH_NAME
	});
	return /* @__PURE__ */ jsxs(SwitchProvider, {
		scope: s,
		checked: C,
		disabled: f,
		children: [/* @__PURE__ */ jsx(Primitive$1.button, {
			type: "button",
			role: "switch",
			"aria-checked": C,
			"aria-required": d,
			"data-state": getState(C),
			"data-disabled": f ? "" : void 0,
			disabled: f,
			value: p,
			...g,
			ref: y,
			onClick: composeEventHandlers(e.onClick, (e) => {
				w((e) => !e), S && (x.current = e.isPropagationStopped(), x.current || e.stopPropagation());
			})
		}), S && /* @__PURE__ */ jsx(SwitchBubbleInput, {
			control: _,
			bubbles: !x.current,
			name: c,
			value: p,
			checked: C,
			required: d,
			disabled: f,
			form: h,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb", SwitchThumb = React$1.forwardRef((e, a) => {
	let { __scopeSwitch: o, ...s } = e, c = useSwitchContext(THUMB_NAME, o);
	return /* @__PURE__ */ jsx(Primitive$1.span, {
		"data-state": getState(c.checked),
		"data-disabled": c.disabled ? "" : void 0,
		...s,
		ref: a
	});
});
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME$1 = "SwitchBubbleInput", SwitchBubbleInput = React$1.forwardRef(({ __scopeSwitch: e, control: a, checked: s, bubbles: c = !0, ...l }, u) => {
	let d = React$1.useRef(null), f = useComposedRefs(d, u), p = usePrevious(s), m = useSize(a);
	return React$1.useEffect(() => {
		let e = d.current;
		if (!e) return;
		let a = window.HTMLInputElement.prototype, o = Object.getOwnPropertyDescriptor(a, "checked").set;
		if (p !== s && o) {
			let a = new Event("click", { bubbles: c });
			o.call(e, s), e.dispatchEvent(a);
		}
	}, [
		p,
		s,
		c
	]), /* @__PURE__ */ jsx("input", {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: s,
		...l,
		tabIndex: -1,
		ref: f,
		style: {
			...l.style,
			...m,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME$1;
function getState(e) {
	return e ? "checked" : "unchecked";
}
var Root = Switch$1, Thumb = SwitchThumb, Switch = React$1.forwardRef(({ className: e, ...a }, o) => /* @__PURE__ */ jsx(Root, {
	ref: o,
	"data-slot": "switch",
	className: cn("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", e),
	...a,
	children: /* @__PURE__ */ jsx(Thumb, {
		"data-slot": "switch-thumb",
		className: cn("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
	})
}));
Switch.displayName = Root.displayName;
function createContextScope(e, a = []) {
	let o = [];
	function s(a, s) {
		let c = React$1.createContext(s), l = o.length;
		o = [...o, s];
		let u = (a) => {
			let { scope: o, children: s, ...u } = a, d = o?.[e]?.[l] || c, f = React$1.useMemo(() => u, Object.values(u));
			return /* @__PURE__ */ jsx(d.Provider, {
				value: f,
				children: s
			});
		};
		u.displayName = a + "Provider";
		function d(o, u) {
			let d = u?.[e]?.[l] || c, f = React$1.useContext(d);
			if (f) return f;
			if (s !== void 0) return s;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [u, d];
	}
	let c = () => {
		let a = o.map((e) => React$1.createContext(e));
		return function(o) {
			let s = o?.[e] || a;
			return React$1.useMemo(() => ({ [`__scope${e}`]: {
				...o,
				[e]: s
			} }), [o, s]);
		};
	};
	return c.scopeName = e, [s, composeContextScopes(c, ...a)];
}
function composeContextScopes(...e) {
	let a = e[0];
	if (e.length === 1) return a;
	let o = () => {
		let o = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let s = o.reduce((a, { useScope: o, scopeName: s }) => {
				let c = o(e)[`__scope${s}`];
				return {
					...a,
					...c
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${a.scopeName}`]: s }), [s]);
		};
	};
	return o.scopeName = a.scopeName, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot(e) {
	let a = /* @__PURE__ */ createSlotClone(e), o = React$1.forwardRef((e, o) => {
		let { children: s, ...c } = e, l = React$1.Children.toArray(s), u = l.find(isSlottable);
		if (u) {
			let e = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(e) > 1 ? React$1.Children.only(null) : React$1.isValidElement(e) ? e.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(e) ? React$1.cloneElement(e, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${e}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(e) {
	let a = React$1.forwardRef((e, a) => {
		let { children: o, ...c } = e;
		if (React$1.isValidElement(o)) {
			let e = getElementRef(o), l = mergeProps(c, o.props);
			return o.type !== React$1.Fragment && (l.ref = a ? composeRefs(a, e) : e), React$1.cloneElement(o, l);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${e}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(e) {
	return React$1.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(e, a) {
	let o = { ...a };
	for (let s in a) {
		let c = e[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...e) => {
			let a = l(...e);
			return c(...e), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...e,
		...o
	};
}
function getElementRef(e) {
	let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
var Primitive = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, a) => {
	let o = /* @__PURE__ */ createSlot(`Primitive.${a}`), s = React$1.forwardRef((e, s) => {
		let { asChild: c, ...l } = e, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: s
		});
	});
	return s.displayName = `Primitive.${a}`, {
		...e,
		[a]: s
	};
}, {}), OPEN_KEYS = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], SELECTION_KEYS = [" ", "Enter"], SELECT_NAME = "Select", [Collection, useCollection, createCollectionScope] = createCollection(SELECT_NAME), [createSelectContext, createSelectScope] = createContextScope(SELECT_NAME, [createCollectionScope, createPopperScope]), usePopperScope = createPopperScope(), [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME), [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME), Select$1 = (e) => {
	let { __scopeSelect: a, children: o, open: s, defaultOpen: c, onOpenChange: l, value: u, defaultValue: d, onValueChange: f, dir: m, name: g, autoComplete: _, disabled: v, required: y, form: x } = e, S = usePopperScope(a), [C, w] = React$1.useState(null), [T, E] = React$1.useState(null), [D, O] = React$1.useState(!1), k = useDirection(m), [A, j] = useControllableState({
		prop: s,
		defaultProp: c ?? !1,
		onChange: l,
		caller: SELECT_NAME
	}), [M, N] = useControllableState({
		prop: u,
		defaultProp: d,
		onChange: f,
		caller: SELECT_NAME
	}), P = React$1.useRef(null), F = C ? x || !!C.closest("form") : !0, [I, L] = React$1.useState(/* @__PURE__ */ new Set()), R = Array.from(I).map((e) => e.props.value).join(";");
	return /* @__PURE__ */ jsx(Root2$2, {
		...S,
		children: /* @__PURE__ */ jsxs(SelectProvider, {
			required: y,
			scope: a,
			trigger: C,
			onTriggerChange: w,
			valueNode: T,
			onValueNodeChange: E,
			valueNodeHasChildren: D,
			onValueNodeHasChildrenChange: O,
			contentId: useId$1(),
			value: M,
			onValueChange: N,
			open: A,
			onOpenChange: j,
			dir: k,
			triggerPointerDownPosRef: P,
			disabled: v,
			children: [/* @__PURE__ */ jsx(Collection.Provider, {
				scope: a,
				children: /* @__PURE__ */ jsx(SelectNativeOptionsProvider, {
					scope: e.__scopeSelect,
					onNativeOptionAdd: React$1.useCallback((e) => {
						L((a) => new Set(a).add(e));
					}, []),
					onNativeOptionRemove: React$1.useCallback((e) => {
						L((a) => {
							let o = new Set(a);
							return o.delete(e), o;
						});
					}, []),
					children: o
				})
			}), F ? /* @__PURE__ */ jsxs(SelectBubbleInput, {
				"aria-hidden": !0,
				required: y,
				tabIndex: -1,
				name: g,
				autoComplete: _,
				value: M,
				onChange: (e) => N(e.target.value),
				disabled: v,
				form: x,
				children: [M === void 0 ? /* @__PURE__ */ jsx("option", { value: "" }) : null, Array.from(I)]
			}, R) : null]
		})
	});
};
Select$1.displayName = SELECT_NAME;
var TRIGGER_NAME = "SelectTrigger", SelectTrigger$1 = React$1.forwardRef((e, a) => {
	let { __scopeSelect: s, disabled: c = !1, ...l } = e, u = usePopperScope(s), d = useSelectContext(TRIGGER_NAME, s), f = d.disabled || c, p = useComposedRefs(a, d.onTriggerChange), m = useCollection(s), h = React$1.useRef("touch"), [g, v, y] = useTypeaheadSearch((e) => {
		let a = m().filter((e) => !e.disabled), o = findNextItem(a, e, a.find((e) => e.value === d.value));
		o !== void 0 && d.onValueChange(o.value);
	}), b = (e) => {
		f || (d.onOpenChange(!0), y()), e && (d.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	};
	return /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			role: "combobox",
			"aria-controls": d.contentId,
			"aria-expanded": d.open,
			"aria-required": d.required,
			"aria-autocomplete": "none",
			dir: d.dir,
			"data-state": d.open ? "open" : "closed",
			disabled: f,
			"data-disabled": f ? "" : void 0,
			"data-placeholder": shouldShowPlaceholder(d.value) ? "" : void 0,
			...l,
			ref: p,
			onClick: composeEventHandlers(l.onClick, (e) => {
				e.currentTarget.focus(), h.current !== "mouse" && b(e);
			}),
			onPointerDown: composeEventHandlers(l.onPointerDown, (e) => {
				h.current = e.pointerType;
				let a = e.target;
				a.hasPointerCapture(e.pointerId) && a.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (b(e), e.preventDefault());
			}),
			onKeyDown: composeEventHandlers(l.onKeyDown, (e) => {
				let a = g.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && v(e.key), !(a && e.key === " ") && OPEN_KEYS.includes(e.key) && (b(), e.preventDefault());
			})
		})
	});
});
SelectTrigger$1.displayName = TRIGGER_NAME;
var VALUE_NAME = "SelectValue", SelectValue$1 = React$1.forwardRef((e, a) => {
	let { __scopeSelect: s, className: c, style: l, children: u, placeholder: d = "", ...f } = e, p = useSelectContext(VALUE_NAME, s), { onValueNodeHasChildrenChange: h } = p, g = u !== void 0, _ = useComposedRefs(a, p.onValueNodeChange);
	return useLayoutEffect2(() => {
		h(g);
	}, [h, g]), /* @__PURE__ */ jsx(Primitive.span, {
		...f,
		ref: _,
		style: { pointerEvents: "none" },
		children: shouldShowPlaceholder(p.value) ? /* @__PURE__ */ jsx(Fragment$1, { children: d }) : u
	});
});
SelectValue$1.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon", SelectIcon = React$1.forwardRef((e, a) => {
	let { __scopeSelect: o, children: s, ...c } = e;
	return /* @__PURE__ */ jsx(Primitive.span, {
		"aria-hidden": !0,
		...c,
		ref: a,
		children: s || "▼"
	});
});
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME = "SelectPortal", SelectPortal = (e) => /* @__PURE__ */ jsx(Portal, {
	asChild: !0,
	...e
});
SelectPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "SelectContent", SelectContent$1 = React$1.forwardRef((e, a) => {
	let o = useSelectContext(CONTENT_NAME, e.__scopeSelect), [s, c] = React$1.useState();
	if (useLayoutEffect2(() => {
		c(new DocumentFragment());
	}, []), !o.open) {
		let a = s;
		return a ? ReactDOM$1.createPortal(/* @__PURE__ */ jsx(SelectContentProvider, {
			scope: e.__scopeSelect,
			children: /* @__PURE__ */ jsx(Collection.Slot, {
				scope: e.__scopeSelect,
				children: /* @__PURE__ */ jsx("div", { children: e.children })
			})
		}), a) : null;
	}
	return /* @__PURE__ */ jsx(SelectContentImpl, {
		...e,
		ref: a
	});
});
SelectContent$1.displayName = CONTENT_NAME;
var CONTENT_MARGIN = 10, [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME), CONTENT_IMPL_NAME = "SelectContentImpl", Slot = /* @__PURE__ */ createSlot("SelectContent.RemoveScroll"), SelectContentImpl = React$1.forwardRef((e, a) => {
	let { __scopeSelect: s, position: l = "item-aligned", onCloseAutoFocus: u, onEscapeKeyDown: d, onPointerDownOutside: f, side: p, sideOffset: m, align: h, alignOffset: g, arrowPadding: _, collisionBoundary: v, collisionPadding: y, sticky: b, hideWhenDetached: x, avoidCollisions: S, ...C } = e, w = useSelectContext(CONTENT_NAME, s), [T, E] = React$1.useState(null), [O, k] = React$1.useState(null), M = useComposedRefs(a, (e) => E(e)), [N, P] = React$1.useState(null), [I, L] = React$1.useState(null), R = useCollection(s), [z, V] = React$1.useState(!1), H = React$1.useRef(!1);
	React$1.useEffect(() => {
		if (T) return hideOthers(T);
	}, [T]), useFocusGuards();
	let U = React$1.useCallback((e) => {
		let [a, ...o] = R().map((e) => e.ref.current), [s] = o.slice(-1), c = document.activeElement;
		for (let o of e) if (o === c || (o?.scrollIntoView({ block: "nearest" }), o === a && O && (O.scrollTop = 0), o === s && O && (O.scrollTop = O.scrollHeight), o?.focus(), document.activeElement !== c)) return;
	}, [R, O]), W = React$1.useCallback(() => U([N, T]), [
		U,
		N,
		T
	]);
	React$1.useEffect(() => {
		z && W();
	}, [z, W]);
	let { onOpenChange: G, triggerPointerDownPosRef: K } = w;
	React$1.useEffect(() => {
		if (T) {
			let e = {
				x: 0,
				y: 0
			}, a = (a) => {
				e = {
					x: Math.abs(Math.round(a.pageX) - (K.current?.x ?? 0)),
					y: Math.abs(Math.round(a.pageY) - (K.current?.y ?? 0))
				};
			}, o = (o) => {
				e.x <= 10 && e.y <= 10 ? o.preventDefault() : T.contains(o.target) || G(!1), document.removeEventListener("pointermove", a), K.current = null;
			};
			return K.current !== null && (document.addEventListener("pointermove", a), document.addEventListener("pointerup", o, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", a), document.removeEventListener("pointerup", o, { capture: !0 });
			};
		}
	}, [
		T,
		G,
		K
	]), React$1.useEffect(() => {
		let e = () => G(!1);
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [G]);
	let [q, J] = useTypeaheadSearch((e) => {
		let a = R().filter((e) => !e.disabled), o = findNextItem(a, e, a.find((e) => e.ref.current === document.activeElement));
		o && setTimeout(() => o.ref.current.focus());
	}), Y = React$1.useCallback((e, a, o) => {
		let s = !H.current && !o;
		(w.value !== void 0 && w.value === a || s) && (P(e), s && (H.current = !0));
	}, [w.value]), X = React$1.useCallback(() => T?.focus(), [T]), Z = React$1.useCallback((e, a, o) => {
		let s = !H.current && !o;
		(w.value !== void 0 && w.value === a || s) && L(e);
	}, [w.value]), Q = l === "popper" ? SelectPopperPosition : SelectItemAlignedPosition, $ = Q === SelectPopperPosition ? {
		side: p,
		sideOffset: m,
		align: h,
		alignOffset: g,
		arrowPadding: _,
		collisionBoundary: v,
		collisionPadding: y,
		sticky: b,
		hideWhenDetached: x,
		avoidCollisions: S
	} : {};
	return /* @__PURE__ */ jsx(SelectContentProvider, {
		scope: s,
		content: T,
		viewport: O,
		onViewportChange: k,
		itemRefCallback: Y,
		selectedItem: N,
		onItemLeave: X,
		itemTextRefCallback: Z,
		focusSelectedItem: W,
		selectedItemText: I,
		position: l,
		isPositioned: z,
		searchRef: q,
		children: /* @__PURE__ */ jsx(Combination_default, {
			as: Slot,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ jsx(FocusScope, {
				asChild: !0,
				trapped: w.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: composeEventHandlers(u, (e) => {
					w.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: d,
					onPointerDownOutside: f,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => w.onOpenChange(!1),
					children: /* @__PURE__ */ jsx(Q, {
						role: "listbox",
						id: w.contentId,
						"data-state": w.open ? "open" : "closed",
						dir: w.dir,
						onContextMenu: (e) => e.preventDefault(),
						...C,
						...$,
						onPlaced: () => V(!0),
						ref: M,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...C.style
						},
						onKeyDown: composeEventHandlers(C.onKeyDown, (e) => {
							let a = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !a && e.key.length === 1 && J(e.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(e.key)) {
								let a = R().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (a = a.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let o = e.target, s = a.indexOf(o);
									a = a.slice(s + 1);
								}
								setTimeout(() => U(a)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition", SelectItemAlignedPosition = React$1.forwardRef((e, a) => {
	let { __scopeSelect: s, onPlaced: c, ...l } = e, u = useSelectContext(CONTENT_NAME, s), d = useSelectContentContext(CONTENT_NAME, s), [f, p] = React$1.useState(null), [h, g] = React$1.useState(null), _ = useComposedRefs(a, (e) => g(e)), v = useCollection(s), y = React$1.useRef(!1), b = React$1.useRef(!0), { viewport: x, selectedItem: S, selectedItemText: C, focusSelectedItem: w } = d, T = React$1.useCallback(() => {
		if (u.trigger && u.valueNode && f && h && x && S && C) {
			let e = u.trigger.getBoundingClientRect(), a = h.getBoundingClientRect(), o = u.valueNode.getBoundingClientRect(), s = C.getBoundingClientRect();
			if (u.dir !== "rtl") {
				let c = s.left - a.left, l = o.left - c, u = e.left - l, d = e.width + u, p = Math.max(d, a.width), m = window.innerWidth - CONTENT_MARGIN, h = clamp(l, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, m - p)]);
				f.style.minWidth = d + "px", f.style.left = h + "px";
			} else {
				let c = a.right - s.right, l = window.innerWidth - o.right - c, u = window.innerWidth - e.right - l, d = e.width + u, p = Math.max(d, a.width), m = window.innerWidth - CONTENT_MARGIN, h = clamp(l, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, m - p)]);
				f.style.minWidth = d + "px", f.style.right = h + "px";
			}
			let l = v(), d = window.innerHeight - CONTENT_MARGIN * 2, p = x.scrollHeight, m = window.getComputedStyle(h), g = parseInt(m.borderTopWidth, 10), _ = parseInt(m.paddingTop, 10), b = parseInt(m.borderBottomWidth, 10), w = parseInt(m.paddingBottom, 10), T = g + _ + p + w + b, E = Math.min(S.offsetHeight * 5, T), D = window.getComputedStyle(x), O = parseInt(D.paddingTop, 10), k = parseInt(D.paddingBottom, 10), A = e.top + e.height / 2 - CONTENT_MARGIN, j = d - A, M = S.offsetHeight / 2, N = S.offsetTop + M, P = g + _ + N, F = T - P;
			if (P <= A) {
				let e = l.length > 0 && S === l[l.length - 1].ref.current;
				f.style.bottom = "0px";
				let a = h.clientHeight - x.offsetTop - x.offsetHeight, o = P + Math.max(j, M + (e ? k : 0) + a + b);
				f.style.height = o + "px";
			} else {
				let e = l.length > 0 && S === l[0].ref.current;
				f.style.top = "0px";
				let a = Math.max(A, g + x.offsetTop + (e ? O : 0) + M) + F;
				f.style.height = a + "px", x.scrollTop = P - A + x.offsetTop;
			}
			f.style.margin = `${CONTENT_MARGIN}px 0`, f.style.minHeight = E + "px", f.style.maxHeight = d + "px", c?.(), requestAnimationFrame(() => y.current = !0);
		}
	}, [
		v,
		u.trigger,
		u.valueNode,
		f,
		h,
		x,
		S,
		C,
		u.dir,
		c
	]);
	useLayoutEffect2(() => T(), [T]);
	let [E, D] = React$1.useState();
	return useLayoutEffect2(() => {
		h && D(window.getComputedStyle(h).zIndex);
	}, [h]), /* @__PURE__ */ jsx(SelectViewportProvider, {
		scope: s,
		contentWrapper: f,
		shouldExpandOnScrollRef: y,
		onScrollButtonChange: React$1.useCallback((e) => {
			e && b.current === !0 && (T(), w?.(), b.current = !1);
		}, [T, w]),
		children: /* @__PURE__ */ jsx("div", {
			ref: p,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: E
			},
			children: /* @__PURE__ */ jsx(Primitive.div, {
				...l,
				ref: _,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...l.style
				}
			})
		})
	});
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition", SelectPopperPosition = React$1.forwardRef((e, a) => {
	let { __scopeSelect: o, align: s = "start", collisionPadding: c = CONTENT_MARGIN, ...l } = e;
	return /* @__PURE__ */ jsx(Content, {
		...usePopperScope(o),
		...l,
		ref: a,
		align: s,
		collisionPadding: c,
		style: {
			boxSizing: "border-box",
			...l.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME, {}), VIEWPORT_NAME = "SelectViewport", SelectViewport = React$1.forwardRef((e, a) => {
	let { __scopeSelect: s, nonce: c, ...l } = e, u = useSelectContentContext(VIEWPORT_NAME, s), d = useSelectViewportContext(VIEWPORT_NAME, s), f = useComposedRefs(a, u.onViewportChange), p = React$1.useRef(0);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: c
	}), /* @__PURE__ */ jsx(Collection.Slot, {
		scope: s,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...l,
			ref: f,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...l.style
			},
			onScroll: composeEventHandlers(l.onScroll, (e) => {
				let a = e.currentTarget, { contentWrapper: o, shouldExpandOnScrollRef: s } = d;
				if (s?.current && o) {
					let e = Math.abs(p.current - a.scrollTop);
					if (e > 0) {
						let s = window.innerHeight - CONTENT_MARGIN * 2, c = parseFloat(o.style.minHeight), l = parseFloat(o.style.height), u = Math.max(c, l);
						if (u < s) {
							let c = u + e, l = Math.min(s, c), d = c - l;
							o.style.height = l + "px", o.style.bottom === "0px" && (a.scrollTop = d > 0 ? d : 0, o.style.justifyContent = "flex-end");
						}
					}
				}
				p.current = a.scrollTop;
			})
		})
	})] });
});
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup", [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME), SelectGroup = React$1.forwardRef((e, a) => {
	let { __scopeSelect: o, ...s } = e, c = useId$1();
	return /* @__PURE__ */ jsx(SelectGroupContextProvider, {
		scope: o,
		id: c,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			role: "group",
			"aria-labelledby": c,
			...s,
			ref: a
		})
	});
});
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel", SelectLabel$1 = React$1.forwardRef((e, a) => {
	let { __scopeSelect: o, ...s } = e, c = useSelectGroupContext(LABEL_NAME, o);
	return /* @__PURE__ */ jsx(Primitive.div, {
		id: c.id,
		...s,
		ref: a
	});
});
SelectLabel$1.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem", [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME), SelectItem$1 = React$1.forwardRef((e, a) => {
	let { __scopeSelect: s, value: c, disabled: l = !1, textValue: u, ...d } = e, f = useSelectContext(ITEM_NAME, s), p = useSelectContentContext(ITEM_NAME, s), m = f.value === c, [g, _] = React$1.useState(u ?? ""), [v, y] = React$1.useState(!1), b = useComposedRefs(a, (e) => p.itemRefCallback?.(e, c, l)), x = useId$1(), S = React$1.useRef("touch"), C = () => {
		l || (f.onValueChange(c), f.onOpenChange(!1));
	};
	if (c === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ jsx(SelectItemContextProvider, {
		scope: s,
		value: c,
		disabled: l,
		textId: x,
		isSelected: m,
		onItemTextChange: React$1.useCallback((e) => {
			_((a) => a || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ jsx(Collection.ItemSlot, {
			scope: s,
			value: c,
			disabled: l,
			textValue: g,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				role: "option",
				"aria-labelledby": x,
				"data-highlighted": v ? "" : void 0,
				"aria-selected": m && v,
				"data-state": m ? "checked" : "unchecked",
				"aria-disabled": l || void 0,
				"data-disabled": l ? "" : void 0,
				tabIndex: l ? void 0 : -1,
				...d,
				ref: b,
				onFocus: composeEventHandlers(d.onFocus, () => y(!0)),
				onBlur: composeEventHandlers(d.onBlur, () => y(!1)),
				onClick: composeEventHandlers(d.onClick, () => {
					S.current !== "mouse" && C();
				}),
				onPointerUp: composeEventHandlers(d.onPointerUp, () => {
					S.current === "mouse" && C();
				}),
				onPointerDown: composeEventHandlers(d.onPointerDown, (e) => {
					S.current = e.pointerType;
				}),
				onPointerMove: composeEventHandlers(d.onPointerMove, (e) => {
					S.current = e.pointerType, l ? p.onItemLeave?.() : S.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: composeEventHandlers(d.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && p.onItemLeave?.();
				}),
				onKeyDown: composeEventHandlers(d.onKeyDown, (e) => {
					p.searchRef?.current !== "" && e.key === " " || (SELECTION_KEYS.includes(e.key) && C(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
});
SelectItem$1.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText", SelectItemText = React$1.forwardRef((e, a) => {
	let { __scopeSelect: s, className: c, style: l, ...u } = e, d = useSelectContext(ITEM_TEXT_NAME, s), f = useSelectContentContext(ITEM_TEXT_NAME, s), p = useSelectItemContext(ITEM_TEXT_NAME, s), h = useSelectNativeOptionsContext(ITEM_TEXT_NAME, s), [g, _] = React$1.useState(null), v = useComposedRefs(a, (e) => _(e), p.onItemTextChange, (e) => f.itemTextRefCallback?.(e, p.value, p.disabled)), y = g?.textContent, b = React$1.useMemo(() => /* @__PURE__ */ jsx("option", {
		value: p.value,
		disabled: p.disabled,
		children: y
	}, p.value), [
		p.disabled,
		p.value,
		y
	]), { onNativeOptionAdd: x, onNativeOptionRemove: S } = h;
	return useLayoutEffect2(() => (x(b), () => S(b)), [
		x,
		S,
		b
	]), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Primitive.span, {
		id: p.textId,
		...u,
		ref: v
	}), p.isSelected && d.valueNode && !d.valueNodeHasChildren ? ReactDOM$1.createPortal(u.children, d.valueNode) : null] });
});
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator", SelectItemIndicator = React$1.forwardRef((e, a) => {
	let { __scopeSelect: o, ...s } = e;
	return useSelectItemContext(ITEM_INDICATOR_NAME, o).isSelected ? /* @__PURE__ */ jsx(Primitive.span, {
		"aria-hidden": !0,
		...s,
		ref: a
	}) : null;
});
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton", SelectScrollUpButton$1 = React$1.forwardRef((e, a) => {
	let s = useSelectContentContext(SCROLL_UP_BUTTON_NAME, e.__scopeSelect), c = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, e.__scopeSelect), [l, u] = React$1.useState(!1), d = useComposedRefs(a, c.onScrollButtonChange);
	return useLayoutEffect2(() => {
		if (s.viewport && s.isPositioned) {
			let e = function() {
				u(a.scrollTop > 0);
			}, a = s.viewport;
			return e(), a.addEventListener("scroll", e), () => a.removeEventListener("scroll", e);
		}
	}, [s.viewport, s.isPositioned]), l ? /* @__PURE__ */ jsx(SelectScrollButtonImpl, {
		...e,
		ref: d,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: a } = s;
			e && a && (e.scrollTop -= a.offsetHeight);
		}
	}) : null;
});
SelectScrollUpButton$1.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton", SelectScrollDownButton$1 = React$1.forwardRef((e, a) => {
	let s = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, e.__scopeSelect), c = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, e.__scopeSelect), [l, u] = React$1.useState(!1), d = useComposedRefs(a, c.onScrollButtonChange);
	return useLayoutEffect2(() => {
		if (s.viewport && s.isPositioned) {
			let e = function() {
				let e = a.scrollHeight - a.clientHeight;
				u(Math.ceil(a.scrollTop) < e);
			}, a = s.viewport;
			return e(), a.addEventListener("scroll", e), () => a.removeEventListener("scroll", e);
		}
	}, [s.viewport, s.isPositioned]), l ? /* @__PURE__ */ jsx(SelectScrollButtonImpl, {
		...e,
		ref: d,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: a } = s;
			e && a && (e.scrollTop += a.offsetHeight);
		}
	}) : null;
});
SelectScrollDownButton$1.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = React$1.forwardRef((e, a) => {
	let { __scopeSelect: o, onAutoScroll: s, ...c } = e, l = useSelectContentContext("SelectScrollButton", o), u = React$1.useRef(null), d = useCollection(o), f = React$1.useCallback(() => {
		u.current !== null && (window.clearInterval(u.current), u.current = null);
	}, []);
	return React$1.useEffect(() => () => f(), [f]), useLayoutEffect2(() => {
		d().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [d]), /* @__PURE__ */ jsx(Primitive.div, {
		"aria-hidden": !0,
		...c,
		ref: a,
		style: {
			flexShrink: 0,
			...c.style
		},
		onPointerDown: composeEventHandlers(c.onPointerDown, () => {
			u.current === null && (u.current = window.setInterval(s, 50));
		}),
		onPointerMove: composeEventHandlers(c.onPointerMove, () => {
			l.onItemLeave?.(), u.current === null && (u.current = window.setInterval(s, 50));
		}),
		onPointerLeave: composeEventHandlers(c.onPointerLeave, () => {
			f();
		})
	});
}), SEPARATOR_NAME = "SelectSeparator", SelectSeparator$1 = React$1.forwardRef((e, a) => {
	let { __scopeSelect: o, ...s } = e;
	return /* @__PURE__ */ jsx(Primitive.div, {
		"aria-hidden": !0,
		...s,
		ref: a
	});
});
SelectSeparator$1.displayName = SEPARATOR_NAME;
var ARROW_NAME = "SelectArrow", SelectArrow = React$1.forwardRef((e, a) => {
	let { __scopeSelect: o, ...s } = e, c = usePopperScope(o), l = useSelectContext(ARROW_NAME, o), u = useSelectContentContext(ARROW_NAME, o);
	return l.open && u.position === "popper" ? /* @__PURE__ */ jsx(Arrow, {
		...c,
		...s,
		ref: a
	}) : null;
});
SelectArrow.displayName = ARROW_NAME;
var BUBBLE_INPUT_NAME = "SelectBubbleInput", SelectBubbleInput = React$1.forwardRef(({ __scopeSelect: e, value: a, ...s }, c) => {
	let u = React$1.useRef(null), d = useComposedRefs(c, u), f = usePrevious(a);
	return React$1.useEffect(() => {
		let e = u.current;
		if (!e) return;
		let o = window.HTMLSelectElement.prototype, s = Object.getOwnPropertyDescriptor(o, "value").set;
		if (f !== a && s) {
			let o = new Event("change", { bubbles: !0 });
			s.call(e, a), e.dispatchEvent(o);
		}
	}, [f, a]), /* @__PURE__ */ jsx(Primitive.select, {
		...s,
		style: {
			...VISUALLY_HIDDEN_STYLES,
			...s.style
		},
		ref: d,
		defaultValue: a
	});
});
SelectBubbleInput.displayName = BUBBLE_INPUT_NAME;
function shouldShowPlaceholder(e) {
	return e === "" || e === void 0;
}
function useTypeaheadSearch(e) {
	let a = useCallbackRef(e), o = React$1.useRef(""), s = React$1.useRef(0), c = React$1.useCallback((e) => {
		let c = o.current + e;
		a(c), (function e(a) {
			o.current = a, window.clearTimeout(s.current), a !== "" && (s.current = window.setTimeout(() => e(""), 1e3));
		})(c);
	}, [a]), l = React$1.useCallback(() => {
		o.current = "", window.clearTimeout(s.current);
	}, []);
	return React$1.useEffect(() => () => window.clearTimeout(s.current), []), [
		o,
		c,
		l
	];
}
function findNextItem(e, a, o) {
	let s = a.length > 1 && Array.from(a).every((e) => e === a[0]) ? a[0] : a, c = o ? e.indexOf(o) : -1, l = wrapArray(e, Math.max(c, 0));
	s.length === 1 && (l = l.filter((e) => e !== o));
	let u = l.find((e) => e.textValue.toLowerCase().startsWith(s.toLowerCase()));
	return u === o ? void 0 : u;
}
function wrapArray(e, a) {
	return e.map((o, s) => e[(a + s) % e.length]);
}
var Root2 = Select$1, Trigger = SelectTrigger$1, Value = SelectValue$1, Icon = SelectIcon, Portal$1 = SelectPortal, Content2 = SelectContent$1, Viewport = SelectViewport, Label$1 = SelectLabel$1, Item = SelectItem$1, ItemText = SelectItemText, ItemIndicator = SelectItemIndicator, ScrollUpButton = SelectScrollUpButton$1, ScrollDownButton = SelectScrollDownButton$1, Separator = SelectSeparator$1;
function Select({ ...e }) {
	return /* @__PURE__ */ jsx(Root2, {
		"data-slot": "select",
		...e
	});
}
function SelectValue({ ...e }) {
	return /* @__PURE__ */ jsx(Value, {
		"data-slot": "select-value",
		...e
	});
}
var SelectTrigger = React$1.forwardRef(({ className: e, size: a = "default", children: o, ...s }, c) => /* @__PURE__ */ jsxs(Trigger, {
	ref: c,
	"data-slot": "select-trigger",
	"data-size": a,
	className: cn("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
	...s,
	children: [o, /* @__PURE__ */ jsx(Icon, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = Trigger.displayName;
var SelectContent = React$1.forwardRef(({ className: e, children: a, position: o = "item-aligned", align: s = "center", ...c }, l) => /* @__PURE__ */ jsx(Portal$1, { children: /* @__PURE__ */ jsxs(Content2, {
	ref: l,
	"data-slot": "select-content",
	className: cn("chatbot-theme bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
	position: o,
	align: s,
	...c,
	children: [
		/* @__PURE__ */ jsx(SelectScrollUpButton, {}),
		/* @__PURE__ */ jsx(Viewport, {
			className: cn("p-1", o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
			children: a
		}),
		/* @__PURE__ */ jsx(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = Content2.displayName;
var SelectLabel = React$1.forwardRef(({ className: e, ...a }, o) => /* @__PURE__ */ jsx(Label$1, {
	ref: o,
	"data-slot": "select-label",
	className: cn("text-muted-foreground px-2 py-1.5 text-xs", e),
	...a
}));
SelectLabel.displayName = Label$1.displayName;
var SelectItem = React$1.forwardRef(({ className: e, children: o, ...s }, c) => /* @__PURE__ */ jsxs(Item, {
	ref: c,
	"data-slot": "select-item",
	className: cn("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
	...s,
	children: [/* @__PURE__ */ jsx("span", {
		"data-slot": "select-item-indicator",
		className: "absolute right-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "size-4" }) })
	}), /* @__PURE__ */ jsx(ItemText, { children: o })]
}));
SelectItem.displayName = Item.displayName;
var SelectSeparator = React$1.forwardRef(({ className: e, ...a }, o) => /* @__PURE__ */ jsx(Separator, {
	ref: o,
	"data-slot": "select-separator",
	className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", e),
	...a
}));
SelectSeparator.displayName = Separator.displayName;
var SelectScrollUpButton = React$1.forwardRef(({ className: e, ...a }, o) => /* @__PURE__ */ jsx(ScrollUpButton, {
	ref: o,
	"data-slot": "select-scroll-up-button",
	className: cn("flex cursor-default items-center justify-center py-1", e),
	...a,
	children: /* @__PURE__ */ jsx(ChevronUp, { className: "size-4" })
}));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
var SelectScrollDownButton = React$1.forwardRef(({ className: e, ...a }, o) => /* @__PURE__ */ jsx(ScrollDownButton, {
	ref: o,
	"data-slot": "select-scroll-down-button",
	className: cn("flex cursor-default items-center justify-center py-1", e),
	...a,
	children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-4" })
}));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
var languageNames = {
	EN: "English",
	ES: "Spanish",
	FR: "French",
	DE: "German",
	IT: "Italian",
	PT: "Portuguese",
	ZH: "Chinese",
	JA: "Japanese",
	KO: "Korean",
	HI: "Hindi",
	AR: "Arabic"
};
function Setting({ metadata: e, selectedAgent: a, selectedModel: o, onAgentChange: s, onModelChange: c, voiceConfig: l, onVoiceConfigChange: d, availableVoices: f, selectedVoice: p, onVoiceChange: m, autoSpeak: h, onAutoSpeakChange: _ }) {
	let v = e?.agents.find((e) => e.key === a), b = o, [x] = useState(() => getVoiceSupport()), S = useMemo(() => f?.reduce((e, a) => {
		let o = a.lang.split("-")[0].toUpperCase();
		return e[o] || (e[o] = []), e[o].push(a), e;
	}, {}) || {}, [f]), w = l && d && f && m && (x.speechRecognition || x.speechSynthesis);
	return /* @__PURE__ */ jsxs(Popover, { children: [/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ jsxs(Button, {
				variant: "ghost",
				size: "icon",
				className: "rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors",
				children: [/* @__PURE__ */ jsx(Settings, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
					className: "sr-only",
					children: "Settings"
				})]
			})
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: "Configuration" })] }), /* @__PURE__ */ jsxs(PopoverContent, {
		className: "w-[380px] p-0 rounded-xl shadow-lg border-border/50",
		align: "end",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "px-5 py-3 border-b bg-muted/30 flex items-center gap-2",
			children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ jsx("h4", {
				className: "font-semibold text-sm",
				children: "Configuration"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-5 space-y-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ jsx(Label, {
							className: "text-[10px] uppercase font-bold text-muted-foreground",
							children: "Agent"
						}), /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
							asChild: !0,
							children: /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								className: "w-full justify-between px-3 font-normal h-9 bg-background hover:bg-muted/50 border-input/60",
								children: [/* @__PURE__ */ jsx("span", {
									className: "truncate text-xs",
									children: v?.key || a
								}), /* @__PURE__ */ jsx(ChevronDown, { className: "h-3 w-3 opacity-50 shrink-0" })]
							})
						}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
							align: "start",
							className: "w-[180px]",
							children: [
								/* @__PURE__ */ jsx(DropdownMenuLabel, {
									className: "text-xs",
									children: "Select Agent"
								}),
								/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
								e?.agents.map((e) => /* @__PURE__ */ jsx(DropdownMenuItem, {
									onClick: () => s(e.key),
									className: cn("cursor-pointer text-xs", a === e.key && "bg-primary/10 text-primary focus:bg-primary/15 focus:text-primary"),
									children: /* @__PURE__ */ jsx("div", {
										className: "flex flex-col gap-0.5",
										children: /* @__PURE__ */ jsx("span", {
											className: "font-medium",
											children: e.key
										})
									})
								}, e.key))
							]
						})] })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ jsx(Label, {
							className: "text-[10px] uppercase font-bold text-muted-foreground",
							children: "Model"
						}), /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
							asChild: !0,
							children: /* @__PURE__ */ jsxs(Button, {
								variant: "outline",
								className: "w-full justify-between px-3 font-normal h-9 bg-background hover:bg-muted/50 border-input/60",
								children: [/* @__PURE__ */ jsx("span", {
									className: "truncate text-xs",
									children: b
								}), /* @__PURE__ */ jsx(ChevronDown, { className: "h-3 w-3 opacity-50 shrink-0" })]
							})
						}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
							align: "end",
							className: "w-[180px]",
							children: [
								/* @__PURE__ */ jsx(DropdownMenuLabel, {
									className: "text-xs",
									children: "Select Model"
								}),
								/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
								e?.models.map((e) => /* @__PURE__ */ jsx(DropdownMenuItem, {
									onClick: () => c(e),
									className: cn("cursor-pointer text-xs", o === e && "bg-primary/10 text-primary focus:bg-primary/15 focus:text-primary"),
									children: e
								}, e))
							]
						})] })]
					})]
				}), v?.description && /* @__PURE__ */ jsx("div", {
					className: "text-[11px] text-muted-foreground bg-muted/30 p-2 rounded-md border border-border/40 leading-relaxed",
					children: v.description
				})]
			}), w && /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "bg-secondary/20 rounded-lg p-3 space-y-4 border border-border/40",
						children: [_ && x.speechSynthesis && /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "auto-speak",
								className: "text-[10px] uppercase font-bold text-muted-foreground cursor-pointer",
								children: "Auto-speak responses"
							}), /* @__PURE__ */ jsx(Switch, {
								id: "auto-speak",
								checked: h,
								onCheckedChange: _,
								className: "scale-75 origin-right"
							})]
						}), x.speechRecognition && l && d && /* @__PURE__ */ jsxs("div", {
							className: "flex w-full justify-between",
							children: [/* @__PURE__ */ jsxs(Label, {
								className: "text-[10px] uppercase font-bold text-muted-foreground flex items-center gap-1",
								children: [/* @__PURE__ */ jsx(Languages, { className: "h-3 w-3" }), " Input Language"]
							}), /* @__PURE__ */ jsxs(Select, {
								value: l.lang,
								onValueChange: (e) => d({ lang: e }),
								children: [/* @__PURE__ */ jsx(SelectTrigger, {
									className: "h-8 text-xs bg-background",
									children: /* @__PURE__ */ jsx(SelectValue, {})
								}), /* @__PURE__ */ jsxs(SelectContent, { children: [
									/* @__PURE__ */ jsx(SelectItem, {
										value: "en-US",
										children: "English (US)"
									}),
									/* @__PURE__ */ jsx(SelectItem, {
										value: "en-GB",
										children: "English (UK)"
									}),
									/* @__PURE__ */ jsx(SelectItem, {
										value: "es-ES",
										children: "Spanish"
									}),
									/* @__PURE__ */ jsx(SelectItem, {
										value: "fr-FR",
										children: "French"
									}),
									/* @__PURE__ */ jsx(SelectItem, {
										value: "de-DE",
										children: "German"
									}),
									/* @__PURE__ */ jsx(SelectItem, {
										value: "it-IT",
										children: "Italian"
									}),
									/* @__PURE__ */ jsx(SelectItem, {
										value: "pt-BR",
										children: "Portuguese"
									}),
									/* @__PURE__ */ jsx(SelectItem, {
										value: "zh-CN",
										children: "Chinese (Simplified)"
									}),
									/* @__PURE__ */ jsx(SelectItem, {
										value: "ja-JP",
										children: "Japanese"
									}),
									/* @__PURE__ */ jsx(SelectItem, {
										value: "ko-KR",
										children: "Korean"
									}),
									/* @__PURE__ */ jsx(SelectItem, {
										value: "hi-IN",
										children: "Hindi"
									})
								] })]
							})]
						})]
					}),
					x.speechSynthesis && f && f.length > 0 && p && m && /* @__PURE__ */ jsxs("div", {
						className: "space-y-1.5 pt-1",
						children: [/* @__PURE__ */ jsxs(Label, {
							className: "text-[10px] uppercase font-bold text-muted-foreground flex items-center gap-1",
							children: [/* @__PURE__ */ jsx(Activity, { className: "h-3 w-3" }), " Voice Persona"]
						}), /* @__PURE__ */ jsxs(Select, {
							value: p?.voiceURI || "",
							onValueChange: (e) => {
								m(f.find((a) => a.voiceURI === e) || null);
							},
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								className: "w-full text-xs h-9",
								children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a voice" })
							}), /* @__PURE__ */ jsx(SelectContent, {
								className: "max-h-[300px]",
								children: Object.entries(S).map(([e, a]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "px-2 py-1.5 text-[10px] font-bold text-muted-foreground bg-muted/40 sticky top-0 z-10 backdrop-blur-sm",
									children: languageNames[e] || e
								}), a.map((e) => /* @__PURE__ */ jsx(SelectItem, {
									value: e.voiceURI,
									className: "pl-4 text-xs cursor-pointer",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "truncate max-w-[200px]",
											children: e.name
										}), e.localService && /* @__PURE__ */ jsx(Badge, {
											variant: "secondary",
											className: "text-[9px] px-1 h-4 rounded-sm",
											children: "Local"
										})]
									})
								}, e.voiceURI))] }, e))
							})]
						})]
					}),
					x.speechSynthesis && l && d && /* @__PURE__ */ jsxs("div", {
						className: "grid gap-4 pt-2 border-t border-border/40 mt-2",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx(Label, {
									className: "text-[10px] uppercase font-bold text-muted-foreground",
									children: "Audio Tuning"
								}), /* @__PURE__ */ jsxs(Button, {
									variant: "ghost",
									size: "sm",
									className: "h-7 px-2 text-[10px] font-bold text-muted-foreground hover:text-primary hover:bg-primary/5 gap-1.5 transition-all",
									onClick: () => d({
										rate: 1,
										pitch: 1,
										volume: 1
									}),
									children: [/* @__PURE__ */ jsx(RotateCcw, { className: "h-3 w-3" }), "Reset"]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsxs(Label, {
										className: "text-xs font-medium flex items-center gap-1.5 text-muted-foreground",
										children: [/* @__PURE__ */ jsx(Zap, { className: "h-3.5 w-3.5" }), " Speed"]
									}), /* @__PURE__ */ jsxs("span", {
										className: "text-[10px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded",
										children: [l.rate.toFixed(1), "x"]
									})]
								}), /* @__PURE__ */ jsx(Slider, {
									value: [l.rate],
									min: .5,
									max: 2,
									step: .1,
									onValueChange: ([e]) => d({ rate: e }),
									className: "cursor-pointer"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsxs(Label, {
										className: "text-xs font-medium flex items-center gap-1.5 text-muted-foreground",
										children: [/* @__PURE__ */ jsx(Activity, { className: "h-3.5 w-3.5" }), " Pitch"]
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[10px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded",
										children: l.pitch.toFixed(1)
									})]
								}), /* @__PURE__ */ jsx(Slider, {
									value: [l.pitch],
									min: .5,
									max: 2,
									step: .1,
									onValueChange: ([e]) => d({ pitch: e }),
									className: "cursor-pointer"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsxs(Label, {
										className: "text-xs font-medium flex items-center gap-1.5 text-muted-foreground",
										children: [/* @__PURE__ */ jsx(Volume2, { className: "h-3.5 w-3.5" }), " Volume"]
									}), /* @__PURE__ */ jsxs("span", {
										className: "text-[10px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded",
										children: [Math.round(l.volume * 100), "%"]
									})]
								}), /* @__PURE__ */ jsx(Slider, {
									value: [l.volume],
									min: 0,
									max: 1,
									step: .1,
									onValueChange: ([e]) => d({ volume: e }),
									className: "cursor-pointer"
								})]
							})
						]
					})
				]
			}) })]
		})]
	})] });
}
export { Setting as default };
