import { t as createLucideIcon } from "./createLucideIcon-C1Qbi7jU.js";
import { A as composeRefs, C as useCallbackRef, E as cn, M as Check, S as DismissableLayer, T as Button, _ as Root2$2, b as useId$1, d as useControllableState, f as Presence, g as Content, h as Arrow, i as getVoiceSupport, j as useComposedRefs, l as TooltipTrigger, m as Anchor, o as Tooltip, p as Portal, s as TooltipContent, u as VISUALLY_HIDDEN_STYLES, v as createPopperScope, w as composeEventHandlers, x as useLayoutEffect2, y as useSize } from "./voice.sdk-8j8W_pOO.js";
import { _ as Sparkles, a as clamp, c as PopoverTrigger, d as FocusScope, f as useFocusGuards, g as Volume2, h as Zap, i as useDirection, l as Combination_default, m as Primitive$2, n as createCollection, o as Popover, p as Badge, r as usePrevious, s as PopoverContent, t as Slider, u as hideOthers, v as ChevronRight } from "./slider-CwGa_Tbj.js";
import * as React$1 from "react";
import { useMemo, useState } from "react";
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
function createContextScope$2(t, a = []) {
	let o = [];
	function s(a, s) {
		let c = React$1.createContext(s), l = o.length;
		o = [...o, s];
		let u = (a) => {
			let { scope: o, children: s, ...u } = a, d = o?.[t]?.[l] || c, f = React$1.useMemo(() => u, Object.values(u));
			return /* @__PURE__ */ jsx(d.Provider, {
				value: f,
				children: s
			});
		};
		u.displayName = a + "Provider";
		function d(o, u) {
			let d = u?.[t]?.[l] || c, f = React$1.useContext(d);
			if (f) return f;
			if (s !== void 0) return s;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [u, d];
	}
	let c = () => {
		let a = o.map((t) => React$1.createContext(t));
		return function(o) {
			let s = o?.[t] || a;
			return React$1.useMemo(() => ({ [`__scope${t}`]: {
				...o,
				[t]: s
			} }), [o, s]);
		};
	};
	return c.scopeName = t, [s, composeContextScopes$4(c, ...a)];
}
function composeContextScopes$4(...t) {
	let a = t[0];
	if (t.length === 1) return a;
	let o = () => {
		let o = t.map((t) => ({
			useScope: t(),
			scopeName: t.scopeName
		}));
		return function(t) {
			let s = o.reduce((a, { useScope: o, scopeName: s }) => {
				let c = o(t)[`__scope${s}`];
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
function createSlot$4(t) {
	let a = /* @__PURE__ */ createSlotClone$4(t), o = React$1.forwardRef((t, o) => {
		let { children: s, ...c } = t, l = React$1.Children.toArray(s), u = l.find(isSlottable$4);
		if (u) {
			let t = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(t) > 1 ? React$1.Children.only(null) : React$1.isValidElement(t) ? t.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(t) ? React$1.cloneElement(t, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${t}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$4(t) {
	let o = React$1.forwardRef((t, o) => {
		let { children: s, ...c } = t;
		if (React$1.isValidElement(s)) {
			let t = getElementRef$4(s), l = mergeProps$4(c, s.props);
			return s.type !== React$1.Fragment && (l.ref = o ? composeRefs(o, t) : t), React$1.cloneElement(s, l);
		}
		return React$1.Children.count(s) > 1 ? React$1.Children.only(null) : null;
	});
	return o.displayName = `${t}.SlotClone`, o;
}
var SLOTTABLE_IDENTIFIER$4 = Symbol("radix.slottable");
function isSlottable$4(t) {
	return React$1.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === SLOTTABLE_IDENTIFIER$4;
}
function mergeProps$4(t, a) {
	let o = { ...a };
	for (let s in a) {
		let c = t[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...t) => {
			let a = l(...t);
			return c(...t), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...t,
		...o
	};
}
function getElementRef$4(t) {
	let a = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? t.ref : (a = Object.getOwnPropertyDescriptor(t, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? t.props.ref : t.props.ref || t.ref);
}
var Primitive$3 = [
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
].reduce((t, a) => {
	let o = /* @__PURE__ */ createSlot$4(`Primitive.${a}`), s = React$1.forwardRef((t, s) => {
		let { asChild: c, ...l } = t, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: s
		});
	});
	return s.displayName = `Primitive.${a}`, {
		...t,
		[a]: s
	};
}, {});
function createContextScope$3(t, a = []) {
	let o = [];
	function s(a, s) {
		let c = React$1.createContext(s), l = o.length;
		o = [...o, s];
		let u = (a) => {
			let { scope: o, children: s, ...u } = a, d = o?.[t]?.[l] || c, f = React$1.useMemo(() => u, Object.values(u));
			return /* @__PURE__ */ jsx(d.Provider, {
				value: f,
				children: s
			});
		};
		u.displayName = a + "Provider";
		function d(o, u) {
			let d = u?.[t]?.[l] || c, f = React$1.useContext(d);
			if (f) return f;
			if (s !== void 0) return s;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [u, d];
	}
	let c = () => {
		let a = o.map((t) => React$1.createContext(t));
		return function(o) {
			let s = o?.[t] || a;
			return React$1.useMemo(() => ({ [`__scope${t}`]: {
				...o,
				[t]: s
			} }), [o, s]);
		};
	};
	return c.scopeName = t, [s, composeContextScopes$3(c, ...a)];
}
function composeContextScopes$3(...t) {
	let a = t[0];
	if (t.length === 1) return a;
	let o = () => {
		let o = t.map((t) => ({
			useScope: t(),
			scopeName: t.scopeName
		}));
		return function(t) {
			let s = o.reduce((a, { useScope: o, scopeName: s }) => {
				let c = o(t)[`__scope${s}`];
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
function createSlot$2(t) {
	let a = /* @__PURE__ */ createSlotClone$3(t), o = React$1.forwardRef((t, o) => {
		let { children: s, ...c } = t, l = React$1.Children.toArray(s), u = l.find(isSlottable$3);
		if (u) {
			let t = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(t) > 1 ? React$1.Children.only(null) : React$1.isValidElement(t) ? t.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(t) ? React$1.cloneElement(t, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${t}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$3(t) {
	let o = React$1.forwardRef((t, o) => {
		let { children: s, ...c } = t;
		if (React$1.isValidElement(s)) {
			let t = getElementRef$3(s), l = mergeProps$3(c, s.props);
			return s.type !== React$1.Fragment && (l.ref = o ? composeRefs(o, t) : t), React$1.cloneElement(s, l);
		}
		return React$1.Children.count(s) > 1 ? React$1.Children.only(null) : null;
	});
	return o.displayName = `${t}.SlotClone`, o;
}
var SLOTTABLE_IDENTIFIER$3 = Symbol("radix.slottable");
function isSlottable$3(t) {
	return React$1.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === SLOTTABLE_IDENTIFIER$3;
}
function mergeProps$3(t, a) {
	let o = { ...a };
	for (let s in a) {
		let c = t[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...t) => {
			let a = l(...t);
			return c(...t), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...t,
		...o
	};
}
function getElementRef$3(t) {
	let a = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? t.ref : (a = Object.getOwnPropertyDescriptor(t, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? t.props.ref : t.props.ref || t.ref);
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
].reduce((t, a) => {
	let o = /* @__PURE__ */ createSlot$2(`Primitive.${a}`), s = React$1.forwardRef((t, s) => {
		let { asChild: c, ...l } = t, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: s
		});
	});
	return s.displayName = `Primitive.${a}`, {
		...t,
		[a]: s
	};
}, {});
function dispatchDiscreteCustomEvent(t, a) {
	t && ReactDOM$1.flushSync(() => t.dispatchEvent(a));
}
function createContextScope$4(t, a = []) {
	let o = [];
	function s(a, s) {
		let c = React$1.createContext(s), l = o.length;
		o = [...o, s];
		let u = (a) => {
			let { scope: o, children: s, ...u } = a, d = o?.[t]?.[l] || c, f = React$1.useMemo(() => u, Object.values(u));
			return /* @__PURE__ */ jsx(d.Provider, {
				value: f,
				children: s
			});
		};
		u.displayName = a + "Provider";
		function d(o, u) {
			let d = u?.[t]?.[l] || c, f = React$1.useContext(d);
			if (f) return f;
			if (s !== void 0) return s;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [u, d];
	}
	let c = () => {
		let a = o.map((t) => React$1.createContext(t));
		return function(o) {
			let s = o?.[t] || a;
			return React$1.useMemo(() => ({ [`__scope${t}`]: {
				...o,
				[t]: s
			} }), [o, s]);
		};
	};
	return c.scopeName = t, [s, composeContextScopes$2(c, ...a)];
}
function composeContextScopes$2(...t) {
	let a = t[0];
	if (t.length === 1) return a;
	let o = () => {
		let o = t.map((t) => ({
			useScope: t(),
			scopeName: t.scopeName
		}));
		return function(t) {
			let s = o.reduce((a, { useScope: o, scopeName: s }) => {
				let c = o(t)[`__scope${s}`];
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
function createSlot$3(t) {
	let a = /* @__PURE__ */ createSlotClone$2(t), o = React$1.forwardRef((t, o) => {
		let { children: s, ...c } = t, l = React$1.Children.toArray(s), u = l.find(isSlottable$2);
		if (u) {
			let t = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(t) > 1 ? React$1.Children.only(null) : React$1.isValidElement(t) ? t.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(t) ? React$1.cloneElement(t, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${t}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$2(t) {
	let o = React$1.forwardRef((t, o) => {
		let { children: s, ...c } = t;
		if (React$1.isValidElement(s)) {
			let t = getElementRef$2(s), l = mergeProps$2(c, s.props);
			return s.type !== React$1.Fragment && (l.ref = o ? composeRefs(o, t) : t), React$1.cloneElement(s, l);
		}
		return React$1.Children.count(s) > 1 ? React$1.Children.only(null) : null;
	});
	return o.displayName = `${t}.SlotClone`, o;
}
var SLOTTABLE_IDENTIFIER$2 = Symbol("radix.slottable");
function isSlottable$2(t) {
	return React$1.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === SLOTTABLE_IDENTIFIER$2;
}
function mergeProps$2(t, a) {
	let o = { ...a };
	for (let s in a) {
		let c = t[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...t) => {
			let a = l(...t);
			return c(...t), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...t,
		...o
	};
}
function getElementRef$2(t) {
	let a = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? t.ref : (a = Object.getOwnPropertyDescriptor(t, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? t.props.ref : t.props.ref || t.ref);
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
].reduce((t, a) => {
	let o = /* @__PURE__ */ createSlot$3(`Primitive.${a}`), s = React$1.forwardRef((t, s) => {
		let { asChild: c, ...l } = t, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: s
		});
	});
	return s.displayName = `Primitive.${a}`, {
		...t,
		[a]: s
	};
}, {}), ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus", EVENT_OPTIONS = {
	bubbles: !1,
	cancelable: !0
}, GROUP_NAME$3 = "RovingFocusGroup", [Collection$2, useCollection$2, createCollectionScope$2] = createCollection(GROUP_NAME$3), [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope$4(GROUP_NAME$3, [createCollectionScope$2]), [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME$3), RovingFocusGroup = React$1.forwardRef((t, a) => /* @__PURE__ */ jsx(Collection$2.Provider, {
	scope: t.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ jsx(Collection$2.Slot, {
		scope: t.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ jsx(RovingFocusGroupImpl, {
			...t,
			ref: a
		})
	})
}));
RovingFocusGroup.displayName = GROUP_NAME$3;
var RovingFocusGroupImpl = React$1.forwardRef((t, a) => {
	let { __scopeRovingFocusGroup: s, orientation: c, loop: l = !1, dir: u, currentTabStopId: d, defaultCurrentTabStopId: f, onCurrentTabStopIdChange: m, onEntryFocus: h, preventScrollOnEntryFocus: g = !1, ..._ } = t, y = React$1.useRef(null), b = useComposedRefs(a, y), x = useDirection(u), [S, C] = useControllableState({
		prop: d,
		defaultProp: f ?? null,
		onChange: m,
		caller: GROUP_NAME$3
	}), [w, T] = React$1.useState(!1), D = useCallbackRef(h), O = useCollection$2(s), k = React$1.useRef(!1), [A, j] = React$1.useState(0);
	return React$1.useEffect(() => {
		let t = y.current;
		if (t) return t.addEventListener(ENTRY_FOCUS, D), () => t.removeEventListener(ENTRY_FOCUS, D);
	}, [D]), /* @__PURE__ */ jsx(RovingFocusProvider, {
		scope: s,
		orientation: c,
		dir: x,
		loop: l,
		currentTabStopId: S,
		onItemFocus: React$1.useCallback((t) => C(t), [C]),
		onItemShiftTab: React$1.useCallback(() => T(!0), []),
		onFocusableItemAdd: React$1.useCallback(() => j((t) => t + 1), []),
		onFocusableItemRemove: React$1.useCallback(() => j((t) => t - 1), []),
		children: /* @__PURE__ */ jsx(Primitive$5.div, {
			tabIndex: w || A === 0 ? -1 : 0,
			"data-orientation": c,
			..._,
			ref: b,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: composeEventHandlers(t.onMouseDown, () => {
				k.current = !0;
			}),
			onFocus: composeEventHandlers(t.onFocus, (t) => {
				let a = !k.current;
				if (t.target === t.currentTarget && a && !w) {
					let a = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
					if (t.currentTarget.dispatchEvent(a), !a.defaultPrevented) {
						let t = O().filter((t) => t.focusable);
						focusFirst$1([
							t.find((t) => t.active),
							t.find((t) => t.id === S),
							...t
						].filter(Boolean).map((t) => t.ref.current), g);
					}
				}
				k.current = !1;
			}),
			onBlur: composeEventHandlers(t.onBlur, () => T(!1))
		})
	});
}), ITEM_NAME$3 = "RovingFocusGroupItem", RovingFocusGroupItem = React$1.forwardRef((t, a) => {
	let { __scopeRovingFocusGroup: o, focusable: s = !0, active: c = !1, tabStopId: l, children: u, ...d } = t, p = useId$1(), m = l || p, h = useRovingFocusContext(ITEM_NAME$3, o), g = h.currentTabStopId === m, _ = useCollection$2(o), { onFocusableItemAdd: v, onFocusableItemRemove: y, currentTabStopId: b } = h;
	return React$1.useEffect(() => {
		if (s) return v(), () => y();
	}, [
		s,
		v,
		y
	]), /* @__PURE__ */ jsx(Collection$2.ItemSlot, {
		scope: o,
		id: m,
		focusable: s,
		active: c,
		children: /* @__PURE__ */ jsx(Primitive$5.span, {
			tabIndex: g ? 0 : -1,
			"data-orientation": h.orientation,
			...d,
			ref: a,
			onMouseDown: composeEventHandlers(t.onMouseDown, (t) => {
				s ? h.onItemFocus(m) : t.preventDefault();
			}),
			onFocus: composeEventHandlers(t.onFocus, () => h.onItemFocus(m)),
			onKeyDown: composeEventHandlers(t.onKeyDown, (t) => {
				if (t.key === "Tab" && t.shiftKey) {
					h.onItemShiftTab();
					return;
				}
				if (t.target !== t.currentTarget) return;
				let a = getFocusIntent(t, h.orientation, h.dir);
				if (a !== void 0) {
					if (t.metaKey || t.ctrlKey || t.altKey || t.shiftKey) return;
					t.preventDefault();
					let o = _().filter((t) => t.focusable).map((t) => t.ref.current);
					if (a === "last") o.reverse();
					else if (a === "prev" || a === "next") {
						a === "prev" && o.reverse();
						let s = o.indexOf(t.currentTarget);
						o = h.loop ? wrapArray$2(o, s + 1) : o.slice(s + 1);
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
function getDirectionAwareKey(t, a) {
	return a === "rtl" ? t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t : t;
}
function getFocusIntent(t, a, o) {
	let s = getDirectionAwareKey(t.key, o);
	if (!(a === "vertical" && ["ArrowLeft", "ArrowRight"].includes(s)) && !(a === "horizontal" && ["ArrowUp", "ArrowDown"].includes(s))) return MAP_KEY_TO_FOCUS_INTENT[s];
}
function focusFirst$1(t, a = !1) {
	let o = document.activeElement;
	for (let s of t) if (s === o || (s.focus({ preventScroll: a }), document.activeElement !== o)) return;
}
function wrapArray$2(t, a) {
	return t.map((o, s) => t[(a + s) % t.length]);
}
var Root$2 = RovingFocusGroup, Item$1 = RovingFocusGroupItem, SELECTION_KEYS$1 = ["Enter", " "], FIRST_KEYS = [
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
}, MENU_NAME = "Menu", [Collection$1, useCollection$1, createCollectionScope$1] = createCollection(MENU_NAME), [createMenuContext, createMenuScope] = createContextScope$3(MENU_NAME, [
	createCollectionScope$1,
	createPopperScope,
	createRovingFocusGroupScope
]), usePopperScope$1 = createPopperScope(), useRovingFocusGroupScope = createRovingFocusGroupScope(), [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME), [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME), Menu = (t) => {
	let { __scopeMenu: a, open: s = !1, children: c, dir: l, onOpenChange: u, modal: f = !0 } = t, p = usePopperScope$1(a), [m, h] = React$1.useState(null), g = React$1.useRef(!1), _ = useCallbackRef(u), v = useDirection(l);
	return React$1.useEffect(() => {
		let t = () => {
			g.current = !0, document.addEventListener("pointerdown", a, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", a, {
				capture: !0,
				once: !0
			});
		}, a = () => g.current = !1;
		return document.addEventListener("keydown", t, { capture: !0 }), () => {
			document.removeEventListener("keydown", t, { capture: !0 }), document.removeEventListener("pointerdown", a, { capture: !0 }), document.removeEventListener("pointermove", a, { capture: !0 });
		};
	}, []), /* @__PURE__ */ jsx(Root2$2, {
		...p,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: a,
			open: s,
			onOpenChange: _,
			content: m,
			onContentChange: h,
			children: /* @__PURE__ */ jsx(MenuRootProvider, {
				scope: a,
				onClose: React$1.useCallback(() => _(!1), [_]),
				isUsingKeyboardRef: g,
				dir: v,
				modal: f,
				children: c
			})
		})
	});
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor", MenuAnchor = React$1.forwardRef((t, a) => {
	let { __scopeMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(Anchor, {
		...usePopperScope$1(o),
		...s,
		ref: a
	});
});
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME$2 = "MenuPortal", [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME$2, { forceMount: void 0 }), MenuPortal = (t) => {
	let { __scopeMenu: a, forceMount: o, children: s, container: c } = t, l = useMenuContext(PORTAL_NAME$2, a);
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
var CONTENT_NAME$2 = "MenuContent", [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME$2), MenuContent = React$1.forwardRef((t, a) => {
	let o = usePortalContext(CONTENT_NAME$2, t.__scopeMenu), { forceMount: s = o.forceMount, ...c } = t, l = useMenuContext(CONTENT_NAME$2, t.__scopeMenu), u = useMenuRootContext(CONTENT_NAME$2, t.__scopeMenu);
	return /* @__PURE__ */ jsx(Collection$1.Provider, {
		scope: t.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: s || l.open,
			children: /* @__PURE__ */ jsx(Collection$1.Slot, {
				scope: t.__scopeMenu,
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
}), MenuRootContentModal = React$1.forwardRef((t, a) => {
	let o = useMenuContext(CONTENT_NAME$2, t.__scopeMenu), s = React$1.useRef(null), c = useComposedRefs(a, s);
	return React$1.useEffect(() => {
		let t = s.current;
		if (t) return hideOthers(t);
	}, []), /* @__PURE__ */ jsx(MenuContentImpl, {
		...t,
		ref: c,
		trapFocus: o.open,
		disableOutsidePointerEvents: o.open,
		disableOutsideScroll: !0,
		onFocusOutside: composeEventHandlers(t.onFocusOutside, (t) => t.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => o.onOpenChange(!1)
	});
}), MenuRootContentNonModal = React$1.forwardRef((t, a) => {
	let o = useMenuContext(CONTENT_NAME$2, t.__scopeMenu);
	return /* @__PURE__ */ jsx(MenuContentImpl, {
		...t,
		ref: a,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => o.onOpenChange(!1)
	});
}), Slot$1 = /* @__PURE__ */ createSlot$2("MenuContent.ScrollLock"), MenuContentImpl = React$1.forwardRef((t, a) => {
	let { __scopeMenu: o, loop: s = !1, trapFocus: c, onOpenAutoFocus: u, onCloseAutoFocus: d, disableOutsidePointerEvents: f, onEntryFocus: p, onEscapeKeyDown: m, onPointerDownOutside: g, onFocusOutside: _, onInteractOutside: y, onDismiss: b, disableOutsideScroll: x, ...S } = t, C = useMenuContext(CONTENT_NAME$2, o), w = useMenuRootContext(CONTENT_NAME$2, o), T = usePopperScope$1(o), D = useRovingFocusGroupScope(o), O = useCollection$1(o), [k, A] = React$1.useState(null), j = React$1.useRef(null), P = useComposedRefs(a, j, C.onContentChange), F = React$1.useRef(0), I = React$1.useRef(""), R = React$1.useRef(0), z = React$1.useRef(null), B = React$1.useRef("right"), V = React$1.useRef(0), H = x ? Combination_default : React$1.Fragment, U = x ? {
		as: Slot$1,
		allowPinchZoom: !0
	} : void 0, W = (t) => {
		let a = I.current + t, o = O().filter((t) => !t.disabled), s = document.activeElement, c = o.find((t) => t.ref.current === s)?.textValue, l = getNextMatch(o.map((t) => t.textValue), a, c), u = o.find((t) => t.textValue === l)?.ref.current;
		(function t(a) {
			I.current = a, window.clearTimeout(F.current), a !== "" && (F.current = window.setTimeout(() => t(""), 1e3));
		})(a), u && setTimeout(() => u.focus());
	};
	React$1.useEffect(() => () => window.clearTimeout(F.current), []), useFocusGuards();
	let G = React$1.useCallback((t) => B.current === z.current?.side && isPointerInGraceArea(t, z.current?.area), []);
	return /* @__PURE__ */ jsx(MenuContentProvider, {
		scope: o,
		searchRef: I,
		onItemEnter: React$1.useCallback((t) => {
			G(t) && t.preventDefault();
		}, [G]),
		onItemLeave: React$1.useCallback((t) => {
			G(t) || (j.current?.focus(), A(null));
		}, [G]),
		onTriggerLeave: React$1.useCallback((t) => {
			G(t) && t.preventDefault();
		}, [G]),
		pointerGraceTimerRef: R,
		onPointerGraceIntentChange: React$1.useCallback((t) => {
			z.current = t;
		}, []),
		children: /* @__PURE__ */ jsx(H, {
			...U,
			children: /* @__PURE__ */ jsx(FocusScope, {
				asChild: !0,
				trapped: c,
				onMountAutoFocus: composeEventHandlers(u, (t) => {
					t.preventDefault(), j.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: d,
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: f,
					onEscapeKeyDown: m,
					onPointerDownOutside: g,
					onFocusOutside: _,
					onInteractOutside: y,
					onDismiss: b,
					children: /* @__PURE__ */ jsx(Root$2, {
						asChild: !0,
						...D,
						dir: w.dir,
						orientation: "vertical",
						loop: s,
						currentTabStopId: k,
						onCurrentTabStopIdChange: A,
						onEntryFocus: composeEventHandlers(p, (t) => {
							w.isUsingKeyboardRef.current || t.preventDefault();
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
							onKeyDown: composeEventHandlers(S.onKeyDown, (t) => {
								let a = t.target.closest("[data-radix-menu-content]") === t.currentTarget, o = t.ctrlKey || t.altKey || t.metaKey, s = t.key.length === 1;
								a && (t.key === "Tab" && t.preventDefault(), !o && s && W(t.key));
								let c = j.current;
								if (t.target !== c || !FIRST_LAST_KEYS.includes(t.key)) return;
								t.preventDefault();
								let l = O().filter((t) => !t.disabled).map((t) => t.ref.current);
								LAST_KEYS.includes(t.key) && l.reverse(), focusFirst(l);
							}),
							onBlur: composeEventHandlers(t.onBlur, (t) => {
								t.currentTarget.contains(t.target) || (window.clearTimeout(F.current), I.current = "");
							}),
							onPointerMove: composeEventHandlers(t.onPointerMove, whenMouse((t) => {
								let a = t.target, o = V.current !== t.clientX;
								t.currentTarget.contains(a) && o && (B.current = t.clientX > V.current ? "right" : "left", V.current = t.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
MenuContent.displayName = CONTENT_NAME$2;
var GROUP_NAME$2 = "MenuGroup", MenuGroup = React$1.forwardRef((t, a) => {
	let { __scopeMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(Primitive$4.div, {
		role: "group",
		...s,
		ref: a
	});
});
MenuGroup.displayName = GROUP_NAME$2;
var LABEL_NAME$2 = "MenuLabel", MenuLabel = React$1.forwardRef((t, a) => {
	let { __scopeMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(Primitive$4.div, {
		...s,
		ref: a
	});
});
MenuLabel.displayName = LABEL_NAME$2;
var ITEM_NAME$2 = "MenuItem", ITEM_SELECT = "menu.itemSelect", MenuItem = React$1.forwardRef((t, a) => {
	let { disabled: o = !1, onSelect: s, ...c } = t, l = React$1.useRef(null), u = useMenuRootContext(ITEM_NAME$2, t.__scopeMenu), d = useMenuContentContext(ITEM_NAME$2, t.__scopeMenu), f = useComposedRefs(a, l), p = React$1.useRef(!1), m = () => {
		let t = l.current;
		if (!o && t) {
			let a = new CustomEvent(ITEM_SELECT, {
				bubbles: !0,
				cancelable: !0
			});
			t.addEventListener(ITEM_SELECT, (t) => s?.(t), { once: !0 }), dispatchDiscreteCustomEvent(t, a), a.defaultPrevented ? p.current = !1 : u.onClose();
		}
	};
	return /* @__PURE__ */ jsx(MenuItemImpl, {
		...c,
		ref: f,
		disabled: o,
		onClick: composeEventHandlers(t.onClick, m),
		onPointerDown: (a) => {
			t.onPointerDown?.(a), p.current = !0;
		},
		onPointerUp: composeEventHandlers(t.onPointerUp, (t) => {
			p.current || t.currentTarget?.click();
		}),
		onKeyDown: composeEventHandlers(t.onKeyDown, (t) => {
			let a = d.searchRef.current !== "";
			o || a && t.key === " " || SELECTION_KEYS$1.includes(t.key) && (t.currentTarget.click(), t.preventDefault());
		})
	});
});
MenuItem.displayName = ITEM_NAME$2;
var MenuItemImpl = React$1.forwardRef((t, a) => {
	let { __scopeMenu: o, disabled: s = !1, textValue: c, ...l } = t, u = useMenuContentContext(ITEM_NAME$2, o), d = useRovingFocusGroupScope(o), f = React$1.useRef(null), p = useComposedRefs(a, f), [m, h] = React$1.useState(!1), [g, _] = React$1.useState("");
	return React$1.useEffect(() => {
		let t = f.current;
		t && _((t.textContent ?? "").trim());
	}, [l.children]), /* @__PURE__ */ jsx(Collection$1.ItemSlot, {
		scope: o,
		disabled: s,
		textValue: c ?? g,
		children: /* @__PURE__ */ jsx(Item$1, {
			asChild: !0,
			...d,
			focusable: !s,
			children: /* @__PURE__ */ jsx(Primitive$4.div, {
				role: "menuitem",
				"data-highlighted": m ? "" : void 0,
				"aria-disabled": s || void 0,
				"data-disabled": s ? "" : void 0,
				...l,
				ref: p,
				onPointerMove: composeEventHandlers(t.onPointerMove, whenMouse((t) => {
					s ? u.onItemLeave(t) : (u.onItemEnter(t), t.defaultPrevented || t.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: composeEventHandlers(t.onPointerLeave, whenMouse((t) => u.onItemLeave(t))),
				onFocus: composeEventHandlers(t.onFocus, () => h(!0)),
				onBlur: composeEventHandlers(t.onBlur, () => h(!1))
			})
		})
	});
}), CHECKBOX_ITEM_NAME$1 = "MenuCheckboxItem", MenuCheckboxItem = React$1.forwardRef((t, a) => {
	let { checked: o = !1, onCheckedChange: s, ...c } = t;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: t.__scopeMenu,
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
}), MenuRadioGroup = React$1.forwardRef((t, a) => {
	let { value: s, onValueChange: c, ...l } = t, u = useCallbackRef(c);
	return /* @__PURE__ */ jsx(RadioGroupProvider, {
		scope: t.__scopeMenu,
		value: s,
		onValueChange: u,
		children: /* @__PURE__ */ jsx(MenuGroup, {
			...l,
			ref: a
		})
	});
});
MenuRadioGroup.displayName = RADIO_GROUP_NAME$1;
var RADIO_ITEM_NAME$1 = "MenuRadioItem", MenuRadioItem = React$1.forwardRef((t, a) => {
	let { value: o, ...s } = t, c = useRadioGroupContext(RADIO_ITEM_NAME$1, t.__scopeMenu), l = o === c.value;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: t.__scopeMenu,
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
var ITEM_INDICATOR_NAME$1 = "MenuItemIndicator", [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME$1, { checked: !1 }), MenuItemIndicator = React$1.forwardRef((t, a) => {
	let { __scopeMenu: o, forceMount: s, ...c } = t, l = useItemIndicatorContext(ITEM_INDICATOR_NAME$1, o);
	return /* @__PURE__ */ jsx(Presence, {
		present: s || isIndeterminate(l.checked) || l.checked === !0,
		children: /* @__PURE__ */ jsx(Primitive$4.span, {
			...c,
			ref: a,
			"data-state": getCheckedState(l.checked)
		})
	});
});
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME$1;
var SEPARATOR_NAME$2 = "MenuSeparator", MenuSeparator = React$1.forwardRef((t, a) => {
	let { __scopeMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(Primitive$4.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...s,
		ref: a
	});
});
MenuSeparator.displayName = SEPARATOR_NAME$2;
var ARROW_NAME$2 = "MenuArrow", MenuArrow = React$1.forwardRef((t, a) => {
	let { __scopeMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(Arrow, {
		...usePopperScope$1(o),
		...s,
		ref: a
	});
});
MenuArrow.displayName = ARROW_NAME$2;
var SUB_NAME = "MenuSub", [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME), MenuSub = (t) => {
	let { __scopeMenu: a, children: s, open: c = !1, onOpenChange: l } = t, u = useMenuContext(SUB_NAME, a), p = usePopperScope$1(a), [m, h] = React$1.useState(null), [g, _] = React$1.useState(null), v = useCallbackRef(l);
	return React$1.useEffect(() => (u.open === !1 && v(!1), () => v(!1)), [u.open, v]), /* @__PURE__ */ jsx(Root2$2, {
		...p,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: a,
			open: c,
			onOpenChange: v,
			content: g,
			onContentChange: _,
			children: /* @__PURE__ */ jsx(MenuSubProvider, {
				scope: a,
				contentId: useId$1(),
				triggerId: useId$1(),
				trigger: m,
				onTriggerChange: h,
				children: s
			})
		})
	});
};
MenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME$1 = "MenuSubTrigger", MenuSubTrigger = React$1.forwardRef((t, o) => {
	let s = useMenuContext(SUB_TRIGGER_NAME$1, t.__scopeMenu), c = useMenuRootContext(SUB_TRIGGER_NAME$1, t.__scopeMenu), l = useMenuSubContext(SUB_TRIGGER_NAME$1, t.__scopeMenu), u = useMenuContentContext(SUB_TRIGGER_NAME$1, t.__scopeMenu), d = React$1.useRef(null), { pointerGraceTimerRef: f, onPointerGraceIntentChange: p } = u, m = { __scopeMenu: t.__scopeMenu }, h = React$1.useCallback(() => {
		d.current && window.clearTimeout(d.current), d.current = null;
	}, []);
	return React$1.useEffect(() => h, [h]), React$1.useEffect(() => {
		let t = f.current;
		return () => {
			window.clearTimeout(t), p(null);
		};
	}, [f, p]), /* @__PURE__ */ jsx(MenuAnchor, {
		asChild: !0,
		...m,
		children: /* @__PURE__ */ jsx(MenuItemImpl, {
			id: l.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": s.open,
			"aria-controls": l.contentId,
			"data-state": getOpenState(s.open),
			...t,
			ref: composeRefs(o, l.onTriggerChange),
			onClick: (a) => {
				t.onClick?.(a), !(t.disabled || a.defaultPrevented) && (a.currentTarget.focus(), s.open || s.onOpenChange(!0));
			},
			onPointerMove: composeEventHandlers(t.onPointerMove, whenMouse((a) => {
				u.onItemEnter(a), !a.defaultPrevented && !t.disabled && !s.open && !d.current && (u.onPointerGraceIntentChange(null), d.current = window.setTimeout(() => {
					s.onOpenChange(!0), h();
				}, 100));
			})),
			onPointerLeave: composeEventHandlers(t.onPointerLeave, whenMouse((t) => {
				h();
				let a = s.content?.getBoundingClientRect();
				if (a) {
					let o = s.content?.dataset.side, c = o === "right", l = c ? -5 : 5, d = a[c ? "left" : "right"], p = a[c ? "right" : "left"];
					u.onPointerGraceIntentChange({
						area: [
							{
								x: t.clientX + l,
								y: t.clientY
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
						side: o
					}), window.clearTimeout(f.current), f.current = window.setTimeout(() => u.onPointerGraceIntentChange(null), 300);
				} else {
					if (u.onTriggerLeave(t), t.defaultPrevented) return;
					u.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: composeEventHandlers(t.onKeyDown, (a) => {
				let o = u.searchRef.current !== "";
				t.disabled || o && a.key === " " || SUB_OPEN_KEYS[c.dir].includes(a.key) && (s.onOpenChange(!0), s.content?.focus(), a.preventDefault());
			})
		})
	});
});
MenuSubTrigger.displayName = SUB_TRIGGER_NAME$1;
var SUB_CONTENT_NAME$1 = "MenuSubContent", MenuSubContent = React$1.forwardRef((t, a) => {
	let o = usePortalContext(CONTENT_NAME$2, t.__scopeMenu), { forceMount: s = o.forceMount, ...c } = t, l = useMenuContext(CONTENT_NAME$2, t.__scopeMenu), u = useMenuRootContext(CONTENT_NAME$2, t.__scopeMenu), d = useMenuSubContext(SUB_CONTENT_NAME$1, t.__scopeMenu), f = React$1.useRef(null), p = useComposedRefs(a, f);
	return /* @__PURE__ */ jsx(Collection$1.Provider, {
		scope: t.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: s || l.open,
			children: /* @__PURE__ */ jsx(Collection$1.Slot, {
				scope: t.__scopeMenu,
				children: /* @__PURE__ */ jsx(MenuContentImpl, {
					id: d.contentId,
					"aria-labelledby": d.triggerId,
					...c,
					ref: p,
					align: "start",
					side: u.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (t) => {
						u.isUsingKeyboardRef.current && f.current?.focus(), t.preventDefault();
					},
					onCloseAutoFocus: (t) => t.preventDefault(),
					onFocusOutside: composeEventHandlers(t.onFocusOutside, (t) => {
						t.target !== d.trigger && l.onOpenChange(!1);
					}),
					onEscapeKeyDown: composeEventHandlers(t.onEscapeKeyDown, (t) => {
						u.onClose(), t.preventDefault();
					}),
					onKeyDown: composeEventHandlers(t.onKeyDown, (t) => {
						let a = t.currentTarget.contains(t.target), o = SUB_CLOSE_KEYS[u.dir].includes(t.key);
						a && o && (l.onOpenChange(!1), d.trigger?.focus(), t.preventDefault());
					})
				})
			})
		})
	});
});
MenuSubContent.displayName = SUB_CONTENT_NAME$1;
function getOpenState(t) {
	return t ? "open" : "closed";
}
function isIndeterminate(t) {
	return t === "indeterminate";
}
function getCheckedState(t) {
	return isIndeterminate(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
function focusFirst(t) {
	let a = document.activeElement;
	for (let o of t) if (o === a || (o.focus(), document.activeElement !== a)) return;
}
function wrapArray$1(t, a) {
	return t.map((o, s) => t[(a + s) % t.length]);
}
function getNextMatch(t, a, o) {
	let s = a.length > 1 && Array.from(a).every((t) => t === a[0]) ? a[0] : a, c = o ? t.indexOf(o) : -1, l = wrapArray$1(t, Math.max(c, 0));
	s.length === 1 && (l = l.filter((t) => t !== o));
	let u = l.find((t) => t.toLowerCase().startsWith(s.toLowerCase()));
	return u === o ? void 0 : u;
}
function isPointInPolygon(t, a) {
	let { x: o, y: s } = t, c = !1;
	for (let t = 0, l = a.length - 1; t < a.length; l = t++) {
		let u = a[t], d = a[l], f = u.x, p = u.y, m = d.x, h = d.y;
		p > s != h > s && o < (m - f) * (s - p) / (h - p) + f && (c = !c);
	}
	return c;
}
function isPointerInGraceArea(t, a) {
	return a ? isPointInPolygon({
		x: t.clientX,
		y: t.clientY
	}, a) : !1;
}
function whenMouse(t) {
	return (a) => a.pointerType === "mouse" ? t(a) : void 0;
}
var Root3 = Menu, Anchor2 = MenuAnchor, Portal$2 = MenuPortal, Content2$2 = MenuContent, Group = MenuGroup, Label$3 = MenuLabel, Item2$1 = MenuItem, CheckboxItem = MenuCheckboxItem, RadioGroup = MenuRadioGroup, RadioItem = MenuRadioItem, ItemIndicator$1 = MenuItemIndicator, Separator$1 = MenuSeparator, Arrow2 = MenuArrow, SubTrigger = MenuSubTrigger, SubContent = MenuSubContent, DROPDOWN_MENU_NAME = "DropdownMenu", [createDropdownMenuContext, createDropdownMenuScope] = createContextScope$2(DROPDOWN_MENU_NAME, [createMenuScope]), useMenuScope = createMenuScope(), [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME), DropdownMenu$1 = (t) => {
	let { __scopeDropdownMenu: a, children: o, dir: s, open: c, defaultOpen: l, onOpenChange: u, modal: d = !0 } = t, m = useMenuScope(a), h = React$1.useRef(null), [g, _] = useControllableState({
		prop: c,
		defaultProp: l ?? !1,
		onChange: u,
		caller: DROPDOWN_MENU_NAME
	});
	return /* @__PURE__ */ jsx(DropdownMenuProvider, {
		scope: a,
		triggerId: useId$1(),
		triggerRef: h,
		contentId: useId$1(),
		open: g,
		onOpenChange: _,
		onOpenToggle: React$1.useCallback(() => _((t) => !t), [_]),
		modal: d,
		children: /* @__PURE__ */ jsx(Root3, {
			...m,
			open: g,
			onOpenChange: _,
			dir: s,
			modal: d,
			children: o
		})
	});
};
DropdownMenu$1.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME$1 = "DropdownMenuTrigger", DropdownMenuTrigger$1 = React$1.forwardRef((t, o) => {
	let { __scopeDropdownMenu: s, disabled: c = !1, ...l } = t, u = useDropdownMenuContext(TRIGGER_NAME$1, s);
	return /* @__PURE__ */ jsx(Anchor2, {
		asChild: !0,
		...useMenuScope(s),
		children: /* @__PURE__ */ jsx(Primitive$3.button, {
			type: "button",
			id: u.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": u.open,
			"aria-controls": u.open ? u.contentId : void 0,
			"data-state": u.open ? "open" : "closed",
			"data-disabled": c ? "" : void 0,
			disabled: c,
			...l,
			ref: composeRefs(o, u.triggerRef),
			onPointerDown: composeEventHandlers(t.onPointerDown, (t) => {
				!c && t.button === 0 && t.ctrlKey === !1 && (u.onOpenToggle(), u.open || t.preventDefault());
			}),
			onKeyDown: composeEventHandlers(t.onKeyDown, (t) => {
				c || (["Enter", " "].includes(t.key) && u.onOpenToggle(), t.key === "ArrowDown" && u.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(t.key) && t.preventDefault());
			})
		})
	});
});
DropdownMenuTrigger$1.displayName = TRIGGER_NAME$1;
var PORTAL_NAME$1 = "DropdownMenuPortal", DropdownMenuPortal = (t) => {
	let { __scopeDropdownMenu: a, ...o } = t;
	return /* @__PURE__ */ jsx(Portal$2, {
		...useMenuScope(a),
		...o
	});
};
DropdownMenuPortal.displayName = PORTAL_NAME$1;
var CONTENT_NAME$1 = "DropdownMenuContent", DropdownMenuContent$1 = React$1.forwardRef((t, a) => {
	let { __scopeDropdownMenu: o, ...s } = t, c = useDropdownMenuContext(CONTENT_NAME$1, o), l = useMenuScope(o), u = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(Content2$2, {
		id: c.contentId,
		"aria-labelledby": c.triggerId,
		...l,
		...s,
		ref: a,
		onCloseAutoFocus: composeEventHandlers(t.onCloseAutoFocus, (t) => {
			u.current || c.triggerRef.current?.focus(), u.current = !1, t.preventDefault();
		}),
		onInteractOutside: composeEventHandlers(t.onInteractOutside, (t) => {
			let a = t.detail.originalEvent, o = a.button === 0 && a.ctrlKey === !0, s = a.button === 2 || o;
			(!c.modal || s) && (u.current = !0);
		}),
		style: {
			...t.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
DropdownMenuContent$1.displayName = CONTENT_NAME$1;
var GROUP_NAME$1 = "DropdownMenuGroup", DropdownMenuGroup$1 = React$1.forwardRef((t, a) => {
	let { __scopeDropdownMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(Group, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuGroup$1.displayName = GROUP_NAME$1;
var LABEL_NAME$1 = "DropdownMenuLabel", DropdownMenuLabel$1 = React$1.forwardRef((t, a) => {
	let { __scopeDropdownMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(Label$3, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuLabel$1.displayName = LABEL_NAME$1;
var ITEM_NAME$1 = "DropdownMenuItem", DropdownMenuItem$1 = React$1.forwardRef((t, a) => {
	let { __scopeDropdownMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(Item2$1, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuItem$1.displayName = ITEM_NAME$1;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem", DropdownMenuCheckboxItem$1 = React$1.forwardRef((t, a) => {
	let { __scopeDropdownMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(CheckboxItem, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuCheckboxItem$1.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup", DropdownMenuRadioGroup$1 = React$1.forwardRef((t, a) => {
	let { __scopeDropdownMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(RadioGroup, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuRadioGroup$1.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem", DropdownMenuRadioItem$1 = React$1.forwardRef((t, a) => {
	let { __scopeDropdownMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(RadioItem, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuRadioItem$1.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator", DropdownMenuItemIndicator = React$1.forwardRef((t, a) => {
	let { __scopeDropdownMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(ItemIndicator$1, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME$1 = "DropdownMenuSeparator", DropdownMenuSeparator$1 = React$1.forwardRef((t, a) => {
	let { __scopeDropdownMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(Separator$1, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuSeparator$1.displayName = SEPARATOR_NAME$1;
var ARROW_NAME$1 = "DropdownMenuArrow", DropdownMenuArrow = React$1.forwardRef((t, a) => {
	let { __scopeDropdownMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(Arrow2, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuArrow.displayName = ARROW_NAME$1;
var SUB_TRIGGER_NAME = "DropdownMenuSubTrigger", DropdownMenuSubTrigger$1 = React$1.forwardRef((t, a) => {
	let { __scopeDropdownMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(SubTrigger, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuSubTrigger$1.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent", DropdownMenuSubContent$1 = React$1.forwardRef((t, a) => {
	let { __scopeDropdownMenu: o, ...s } = t;
	return /* @__PURE__ */ jsx(SubContent, {
		...useMenuScope(o),
		...s,
		ref: a,
		style: {
			...t.style,
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
function DropdownMenu({ ...t }) {
	return /* @__PURE__ */ jsx(Root2$1, {
		"data-slot": "dropdown-menu",
		...t
	});
}
var DropdownMenuTrigger = React$1.forwardRef(({ ...t }, a) => /* @__PURE__ */ jsx(Trigger$1, {
	"data-slot": "dropdown-menu-trigger",
	...t,
	ref: a
}));
DropdownMenuTrigger.displayName = Trigger$1.displayName;
var DropdownMenuContent = React$1.forwardRef(({ className: t, sideOffset: a = 4, ...o }, c) => /* @__PURE__ */ jsx(Portal2, { children: /* @__PURE__ */ jsx(Content2$1, {
	ref: c,
	"data-slot": "dropdown-menu-content",
	sideOffset: a,
	className: cn("chatbot-theme bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", t),
	...o
}) }));
DropdownMenuContent.displayName = Content2$1.displayName;
var DropdownMenuGroup = React$1.forwardRef(({ ...t }, a) => /* @__PURE__ */ jsx(Group2, {
	ref: a,
	"data-slot": "dropdown-menu-group",
	...t
}));
DropdownMenuGroup.displayName = Group2.displayName;
var DropdownMenuItem = React$1.forwardRef(({ className: t, inset: a, variant: o = "default", ...c }, l) => /* @__PURE__ */ jsx(Item2, {
	ref: l,
	"data-slot": "dropdown-menu-item",
	"data-inset": a,
	"data-variant": o,
	className: cn("focus:bg-accent capitalize focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t),
	...c
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = React$1.forwardRef(({ className: t, children: a, checked: o, ...l }, u) => /* @__PURE__ */ jsxs(CheckboxItem2, {
	ref: u,
	"data-slot": "dropdown-menu-checkbox-item",
	className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t),
	checked: o,
	...l,
	children: [/* @__PURE__ */ jsx("span", {
		className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(ItemIndicator2, { children: /* @__PURE__ */ jsx(Check, { className: "size-4" }) })
	}), a]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioGroup = React$1.forwardRef(({ ...t }, a) => /* @__PURE__ */ jsx(RadioGroup2, {
	ref: a,
	"data-slot": "dropdown-menu-radio-group",
	...t
}));
DropdownMenuRadioGroup.displayName = RadioGroup2.displayName;
var DropdownMenuRadioItem = React$1.forwardRef(({ className: t, children: a, ...o }, c) => /* @__PURE__ */ jsxs(RadioItem2, {
	ref: c,
	"data-slot": "dropdown-menu-radio-item",
	className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t),
	...o,
	children: [/* @__PURE__ */ jsx("span", {
		className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(ItemIndicator2, { children: /* @__PURE__ */ jsx(Circle, { className: "size-2 fill-current" }) })
	}), a]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = React$1.forwardRef(({ className: t, inset: a, ...o }, c) => /* @__PURE__ */ jsx(Label2, {
	ref: c,
	"data-slot": "dropdown-menu-label",
	"data-inset": a,
	className: cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t),
	...o
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = React$1.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ jsx(Separator2, {
	ref: o,
	"data-slot": "dropdown-menu-separator",
	className: cn("bg-border -mx-1 my-1 h-px", t),
	...a
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuSubTrigger = React$1.forwardRef(({ className: t, inset: a, children: o, ...c }, l) => /* @__PURE__ */ jsxs(SubTrigger2, {
	ref: l,
	"data-slot": "dropdown-menu-sub-trigger",
	"data-inset": a,
	className: cn("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t),
	...c,
	children: [o, /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto size-4" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = React$1.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ jsx(SubContent2, {
	ref: o,
	"data-slot": "dropdown-menu-sub-content",
	className: cn("chatbot-theme bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", t),
	...a
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var NAME = "Label", Label$2 = React$1.forwardRef((t, a) => /* @__PURE__ */ jsx(Primitive$2.label, {
	...t,
	ref: a,
	onMouseDown: (a) => {
		a.target.closest("button, input, select, textarea") || (t.onMouseDown?.(a), !a.defaultPrevented && a.detail > 1 && a.preventDefault());
	}
}));
Label$2.displayName = NAME;
var Root$1 = Label$2, Label = React$1.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ jsx(Root$1, {
	ref: o,
	"data-slot": "label",
	className: cn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", t),
	...a
}));
Label.displayName = Root$1.displayName;
function createContextScope$1(t, a = []) {
	let o = [];
	function s(a, s) {
		let c = React$1.createContext(s), l = o.length;
		o = [...o, s];
		let u = (a) => {
			let { scope: o, children: s, ...u } = a, d = o?.[t]?.[l] || c, f = React$1.useMemo(() => u, Object.values(u));
			return /* @__PURE__ */ jsx(d.Provider, {
				value: f,
				children: s
			});
		};
		u.displayName = a + "Provider";
		function d(o, u) {
			let d = u?.[t]?.[l] || c, f = React$1.useContext(d);
			if (f) return f;
			if (s !== void 0) return s;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [u, d];
	}
	let c = () => {
		let a = o.map((t) => React$1.createContext(t));
		return function(o) {
			let s = o?.[t] || a;
			return React$1.useMemo(() => ({ [`__scope${t}`]: {
				...o,
				[t]: s
			} }), [o, s]);
		};
	};
	return c.scopeName = t, [s, composeContextScopes$1(c, ...a)];
}
function composeContextScopes$1(...t) {
	let a = t[0];
	if (t.length === 1) return a;
	let o = () => {
		let o = t.map((t) => ({
			useScope: t(),
			scopeName: t.scopeName
		}));
		return function(t) {
			let s = o.reduce((a, { useScope: o, scopeName: s }) => {
				let c = o(t)[`__scope${s}`];
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
function createSlot$1(t) {
	let a = /* @__PURE__ */ createSlotClone$1(t), o = React$1.forwardRef((t, o) => {
		let { children: s, ...c } = t, l = React$1.Children.toArray(s), u = l.find(isSlottable$1);
		if (u) {
			let t = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(t) > 1 ? React$1.Children.only(null) : React$1.isValidElement(t) ? t.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(t) ? React$1.cloneElement(t, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${t}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$1(t) {
	let o = React$1.forwardRef((t, o) => {
		let { children: s, ...c } = t;
		if (React$1.isValidElement(s)) {
			let t = getElementRef$1(s), l = mergeProps$1(c, s.props);
			return s.type !== React$1.Fragment && (l.ref = o ? composeRefs(o, t) : t), React$1.cloneElement(s, l);
		}
		return React$1.Children.count(s) > 1 ? React$1.Children.only(null) : null;
	});
	return o.displayName = `${t}.SlotClone`, o;
}
var SLOTTABLE_IDENTIFIER$1 = Symbol("radix.slottable");
function isSlottable$1(t) {
	return React$1.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
function mergeProps$1(t, a) {
	let o = { ...a };
	for (let s in a) {
		let c = t[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...t) => {
			let a = l(...t);
			return c(...t), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...t,
		...o
	};
}
function getElementRef$1(t) {
	let a = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? t.ref : (a = Object.getOwnPropertyDescriptor(t, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? t.props.ref : t.props.ref || t.ref);
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
].reduce((t, a) => {
	let o = /* @__PURE__ */ createSlot$1(`Primitive.${a}`), s = React$1.forwardRef((t, s) => {
		let { asChild: c, ...l } = t, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: s
		});
	});
	return s.displayName = `Primitive.${a}`, {
		...t,
		[a]: s
	};
}, {}), SWITCH_NAME = "Switch", [createSwitchContext, createSwitchScope] = createContextScope$1(SWITCH_NAME), [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME), Switch$1 = React$1.forwardRef((t, a) => {
	let { __scopeSwitch: o, name: s, checked: c, defaultChecked: l, required: u, disabled: d, value: f = "on", onCheckedChange: m, form: h, ...g } = t, [_, y] = React$1.useState(null), b = useComposedRefs(a, (t) => y(t)), x = React$1.useRef(!1), S = _ ? h || !!_.closest("form") : !0, [C, w] = useControllableState({
		prop: c,
		defaultProp: l ?? !1,
		onChange: m,
		caller: SWITCH_NAME
	});
	return /* @__PURE__ */ jsxs(SwitchProvider, {
		scope: o,
		checked: C,
		disabled: d,
		children: [/* @__PURE__ */ jsx(Primitive$1.button, {
			type: "button",
			role: "switch",
			"aria-checked": C,
			"aria-required": u,
			"data-state": getState(C),
			"data-disabled": d ? "" : void 0,
			disabled: d,
			value: f,
			...g,
			ref: b,
			onClick: composeEventHandlers(t.onClick, (t) => {
				w((t) => !t), S && (x.current = t.isPropagationStopped(), x.current || t.stopPropagation());
			})
		}), S && /* @__PURE__ */ jsx(SwitchBubbleInput, {
			control: _,
			bubbles: !x.current,
			name: s,
			value: f,
			checked: C,
			required: u,
			disabled: d,
			form: h,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb", SwitchThumb = React$1.forwardRef((t, a) => {
	let { __scopeSwitch: o, ...s } = t, c = useSwitchContext(THUMB_NAME, o);
	return /* @__PURE__ */ jsx(Primitive$1.span, {
		"data-state": getState(c.checked),
		"data-disabled": c.disabled ? "" : void 0,
		...s,
		ref: a
	});
});
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME$1 = "SwitchBubbleInput", SwitchBubbleInput = React$1.forwardRef(({ __scopeSwitch: t, control: a, checked: o, bubbles: s = !0, ...c }, l) => {
	let u = React$1.useRef(null), d = useComposedRefs(u, l), f = usePrevious(o), p = useSize(a);
	return React$1.useEffect(() => {
		let t = u.current;
		if (!t) return;
		let a = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(a, "checked").set;
		if (f !== o && c) {
			let a = new Event("click", { bubbles: s });
			c.call(t, o), t.dispatchEvent(a);
		}
	}, [
		f,
		o,
		s
	]), /* @__PURE__ */ jsx("input", {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: o,
		...c,
		tabIndex: -1,
		ref: d,
		style: {
			...c.style,
			...p,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME$1;
function getState(t) {
	return t ? "checked" : "unchecked";
}
var Root = Switch$1, Thumb = SwitchThumb, Switch = React$1.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ jsx(Root, {
	ref: o,
	"data-slot": "switch",
	className: cn("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", t),
	...a,
	children: /* @__PURE__ */ jsx(Thumb, {
		"data-slot": "switch-thumb",
		className: cn("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
	})
}));
Switch.displayName = Root.displayName;
function createContextScope(t, a = []) {
	let o = [];
	function s(a, s) {
		let c = React$1.createContext(s), l = o.length;
		o = [...o, s];
		let u = (a) => {
			let { scope: o, children: s, ...u } = a, d = o?.[t]?.[l] || c, f = React$1.useMemo(() => u, Object.values(u));
			return /* @__PURE__ */ jsx(d.Provider, {
				value: f,
				children: s
			});
		};
		u.displayName = a + "Provider";
		function d(o, u) {
			let d = u?.[t]?.[l] || c, f = React$1.useContext(d);
			if (f) return f;
			if (s !== void 0) return s;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [u, d];
	}
	let c = () => {
		let a = o.map((t) => React$1.createContext(t));
		return function(o) {
			let s = o?.[t] || a;
			return React$1.useMemo(() => ({ [`__scope${t}`]: {
				...o,
				[t]: s
			} }), [o, s]);
		};
	};
	return c.scopeName = t, [s, composeContextScopes(c, ...a)];
}
function composeContextScopes(...t) {
	let a = t[0];
	if (t.length === 1) return a;
	let o = () => {
		let o = t.map((t) => ({
			useScope: t(),
			scopeName: t.scopeName
		}));
		return function(t) {
			let s = o.reduce((a, { useScope: o, scopeName: s }) => {
				let c = o(t)[`__scope${s}`];
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
function createSlot(t) {
	let a = /* @__PURE__ */ createSlotClone(t), o = React$1.forwardRef((t, o) => {
		let { children: s, ...c } = t, l = React$1.Children.toArray(s), u = l.find(isSlottable);
		if (u) {
			let t = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(t) > 1 ? React$1.Children.only(null) : React$1.isValidElement(t) ? t.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(t) ? React$1.cloneElement(t, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${t}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(t) {
	let o = React$1.forwardRef((t, o) => {
		let { children: s, ...c } = t;
		if (React$1.isValidElement(s)) {
			let t = getElementRef(s), l = mergeProps(c, s.props);
			return s.type !== React$1.Fragment && (l.ref = o ? composeRefs(o, t) : t), React$1.cloneElement(s, l);
		}
		return React$1.Children.count(s) > 1 ? React$1.Children.only(null) : null;
	});
	return o.displayName = `${t}.SlotClone`, o;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(t) {
	return React$1.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(t, a) {
	let o = { ...a };
	for (let s in a) {
		let c = t[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...t) => {
			let a = l(...t);
			return c(...t), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...t,
		...o
	};
}
function getElementRef(t) {
	let a = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? t.ref : (a = Object.getOwnPropertyDescriptor(t, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? t.props.ref : t.props.ref || t.ref);
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
].reduce((t, a) => {
	let o = /* @__PURE__ */ createSlot(`Primitive.${a}`), s = React$1.forwardRef((t, s) => {
		let { asChild: c, ...l } = t, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: s
		});
	});
	return s.displayName = `Primitive.${a}`, {
		...t,
		[a]: s
	};
}, {}), OPEN_KEYS = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], SELECTION_KEYS = [" ", "Enter"], SELECT_NAME = "Select", [Collection, useCollection, createCollectionScope] = createCollection(SELECT_NAME), [createSelectContext, createSelectScope] = createContextScope(SELECT_NAME, [createCollectionScope, createPopperScope]), usePopperScope = createPopperScope(), [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME), [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME), Select$1 = (t) => {
	let { __scopeSelect: a, children: o, open: s, defaultOpen: c, onOpenChange: l, value: u, defaultValue: m, onValueChange: h, dir: g, name: _, autoComplete: v, disabled: y, required: b, form: x } = t, S = usePopperScope(a), [C, w] = React$1.useState(null), [T, E] = React$1.useState(null), [D, O] = React$1.useState(!1), k = useDirection(g), [A, j] = useControllableState({
		prop: s,
		defaultProp: c ?? !1,
		onChange: l,
		caller: SELECT_NAME
	}), [M, N] = useControllableState({
		prop: u,
		defaultProp: m,
		onChange: h,
		caller: SELECT_NAME
	}), P = React$1.useRef(null), F = C ? x || !!C.closest("form") : !0, [L, R] = React$1.useState(/* @__PURE__ */ new Set()), z = Array.from(L).map((t) => t.props.value).join(";");
	return /* @__PURE__ */ jsx(Root2$2, {
		...S,
		children: /* @__PURE__ */ jsxs(SelectProvider, {
			required: b,
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
			disabled: y,
			children: [/* @__PURE__ */ jsx(Collection.Provider, {
				scope: a,
				children: /* @__PURE__ */ jsx(SelectNativeOptionsProvider, {
					scope: t.__scopeSelect,
					onNativeOptionAdd: React$1.useCallback((t) => {
						R((a) => new Set(a).add(t));
					}, []),
					onNativeOptionRemove: React$1.useCallback((t) => {
						R((a) => {
							let o = new Set(a);
							return o.delete(t), o;
						});
					}, []),
					children: o
				})
			}), F ? /* @__PURE__ */ jsxs(SelectBubbleInput, {
				"aria-hidden": !0,
				required: b,
				tabIndex: -1,
				name: _,
				autoComplete: v,
				value: M,
				onChange: (t) => N(t.target.value),
				disabled: y,
				form: x,
				children: [M === void 0 ? /* @__PURE__ */ jsx("option", { value: "" }) : null, Array.from(L)]
			}, z) : null]
		})
	});
};
Select$1.displayName = SELECT_NAME;
var TRIGGER_NAME = "SelectTrigger", SelectTrigger$1 = React$1.forwardRef((t, a) => {
	let { __scopeSelect: o, disabled: s = !1, ...c } = t, l = usePopperScope(o), u = useSelectContext(TRIGGER_NAME, o), d = u.disabled || s, f = useComposedRefs(a, u.onTriggerChange), p = useCollection(o), m = React$1.useRef("touch"), [h, g, _] = useTypeaheadSearch((t) => {
		let a = p().filter((t) => !t.disabled), o = findNextItem(a, t, a.find((t) => t.value === u.value));
		o !== void 0 && u.onValueChange(o.value);
	}), y = (t) => {
		d || (u.onOpenChange(!0), _()), t && (u.triggerPointerDownPosRef.current = {
			x: Math.round(t.pageX),
			y: Math.round(t.pageY)
		});
	};
	return /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...l,
		children: /* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			role: "combobox",
			"aria-controls": u.contentId,
			"aria-expanded": u.open,
			"aria-required": u.required,
			"aria-autocomplete": "none",
			dir: u.dir,
			"data-state": u.open ? "open" : "closed",
			disabled: d,
			"data-disabled": d ? "" : void 0,
			"data-placeholder": shouldShowPlaceholder(u.value) ? "" : void 0,
			...c,
			ref: f,
			onClick: composeEventHandlers(c.onClick, (t) => {
				t.currentTarget.focus(), m.current !== "mouse" && y(t);
			}),
			onPointerDown: composeEventHandlers(c.onPointerDown, (t) => {
				m.current = t.pointerType;
				let a = t.target;
				a.hasPointerCapture(t.pointerId) && a.releasePointerCapture(t.pointerId), t.button === 0 && t.ctrlKey === !1 && t.pointerType === "mouse" && (y(t), t.preventDefault());
			}),
			onKeyDown: composeEventHandlers(c.onKeyDown, (t) => {
				let a = h.current !== "";
				!(t.ctrlKey || t.altKey || t.metaKey) && t.key.length === 1 && g(t.key), !(a && t.key === " ") && OPEN_KEYS.includes(t.key) && (y(), t.preventDefault());
			})
		})
	});
});
SelectTrigger$1.displayName = TRIGGER_NAME;
var VALUE_NAME = "SelectValue", SelectValue$1 = React$1.forwardRef((t, a) => {
	let { __scopeSelect: o, className: s, style: c, children: l, placeholder: u = "", ...d } = t, f = useSelectContext(VALUE_NAME, o), { onValueNodeHasChildrenChange: p } = f, m = l !== void 0, h = useComposedRefs(a, f.onValueNodeChange);
	return useLayoutEffect2(() => {
		p(m);
	}, [p, m]), /* @__PURE__ */ jsx(Primitive.span, {
		...d,
		ref: h,
		style: { pointerEvents: "none" },
		children: shouldShowPlaceholder(f.value) ? /* @__PURE__ */ jsx(Fragment$1, { children: u }) : l
	});
});
SelectValue$1.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon", SelectIcon = React$1.forwardRef((t, a) => {
	let { __scopeSelect: o, children: s, ...c } = t;
	return /* @__PURE__ */ jsx(Primitive.span, {
		"aria-hidden": !0,
		...c,
		ref: a,
		children: s || "▼"
	});
});
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME = "SelectPortal", SelectPortal = (t) => /* @__PURE__ */ jsx(Portal, {
	asChild: !0,
	...t
});
SelectPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "SelectContent", SelectContent$1 = React$1.forwardRef((t, a) => {
	let o = useSelectContext(CONTENT_NAME, t.__scopeSelect), [s, c] = React$1.useState();
	if (useLayoutEffect2(() => {
		c(new DocumentFragment());
	}, []), !o.open) {
		let a = s;
		return a ? ReactDOM$1.createPortal(/* @__PURE__ */ jsx(SelectContentProvider, {
			scope: t.__scopeSelect,
			children: /* @__PURE__ */ jsx(Collection.Slot, {
				scope: t.__scopeSelect,
				children: /* @__PURE__ */ jsx("div", { children: t.children })
			})
		}), a) : null;
	}
	return /* @__PURE__ */ jsx(SelectContentImpl, {
		...t,
		ref: a
	});
});
SelectContent$1.displayName = CONTENT_NAME;
var CONTENT_MARGIN = 10, [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME), CONTENT_IMPL_NAME = "SelectContentImpl", Slot = /* @__PURE__ */ createSlot("SelectContent.RemoveScroll"), SelectContentImpl = React$1.forwardRef((t, a) => {
	let { __scopeSelect: o, position: s = "item-aligned", onCloseAutoFocus: c, onEscapeKeyDown: u, onPointerDownOutside: d, side: f, sideOffset: p, align: m, alignOffset: h, arrowPadding: g, collisionBoundary: _, collisionPadding: y, sticky: b, hideWhenDetached: x, avoidCollisions: S, ...C } = t, w = useSelectContext(CONTENT_NAME, o), [T, D] = React$1.useState(null), [O, k] = React$1.useState(null), A = useComposedRefs(a, (t) => D(t)), [j, P] = React$1.useState(null), [F, I] = React$1.useState(null), R = useCollection(o), [z, B] = React$1.useState(!1), V = React$1.useRef(!1);
	React$1.useEffect(() => {
		if (T) return hideOthers(T);
	}, [T]), useFocusGuards();
	let H = React$1.useCallback((t) => {
		let [a, ...o] = R().map((t) => t.ref.current), [s] = o.slice(-1), c = document.activeElement;
		for (let o of t) if (o === c || (o?.scrollIntoView({ block: "nearest" }), o === a && O && (O.scrollTop = 0), o === s && O && (O.scrollTop = O.scrollHeight), o?.focus(), document.activeElement !== c)) return;
	}, [R, O]), U = React$1.useCallback(() => H([j, T]), [
		H,
		j,
		T
	]);
	React$1.useEffect(() => {
		z && U();
	}, [z, U]);
	let { onOpenChange: W, triggerPointerDownPosRef: K } = w;
	React$1.useEffect(() => {
		if (T) {
			let t = {
				x: 0,
				y: 0
			}, a = (a) => {
				t = {
					x: Math.abs(Math.round(a.pageX) - (K.current?.x ?? 0)),
					y: Math.abs(Math.round(a.pageY) - (K.current?.y ?? 0))
				};
			}, o = (o) => {
				t.x <= 10 && t.y <= 10 ? o.preventDefault() : T.contains(o.target) || W(!1), document.removeEventListener("pointermove", a), K.current = null;
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
		W,
		K
	]), React$1.useEffect(() => {
		let t = () => W(!1);
		return window.addEventListener("blur", t), window.addEventListener("resize", t), () => {
			window.removeEventListener("blur", t), window.removeEventListener("resize", t);
		};
	}, [W]);
	let [q, J] = useTypeaheadSearch((t) => {
		let a = R().filter((t) => !t.disabled), o = findNextItem(a, t, a.find((t) => t.ref.current === document.activeElement));
		o && setTimeout(() => o.ref.current.focus());
	}), Y = React$1.useCallback((t, a, o) => {
		let s = !V.current && !o;
		(w.value !== void 0 && w.value === a || s) && (P(t), s && (V.current = !0));
	}, [w.value]), X = React$1.useCallback(() => T?.focus(), [T]), Z = React$1.useCallback((t, a, o) => {
		let s = !V.current && !o;
		(w.value !== void 0 && w.value === a || s) && I(t);
	}, [w.value]), Q = s === "popper" ? SelectPopperPosition : SelectItemAlignedPosition, $ = Q === SelectPopperPosition ? {
		side: f,
		sideOffset: p,
		align: m,
		alignOffset: h,
		arrowPadding: g,
		collisionBoundary: _,
		collisionPadding: y,
		sticky: b,
		hideWhenDetached: x,
		avoidCollisions: S
	} : {};
	return /* @__PURE__ */ jsx(SelectContentProvider, {
		scope: o,
		content: T,
		viewport: O,
		onViewportChange: k,
		itemRefCallback: Y,
		selectedItem: j,
		onItemLeave: X,
		itemTextRefCallback: Z,
		focusSelectedItem: U,
		selectedItemText: F,
		position: s,
		isPositioned: z,
		searchRef: q,
		children: /* @__PURE__ */ jsx(Combination_default, {
			as: Slot,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ jsx(FocusScope, {
				asChild: !0,
				trapped: w.open,
				onMountAutoFocus: (t) => {
					t.preventDefault();
				},
				onUnmountAutoFocus: composeEventHandlers(c, (t) => {
					w.trigger?.focus({ preventScroll: !0 }), t.preventDefault();
				}),
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: u,
					onPointerDownOutside: d,
					onFocusOutside: (t) => t.preventDefault(),
					onDismiss: () => w.onOpenChange(!1),
					children: /* @__PURE__ */ jsx(Q, {
						role: "listbox",
						id: w.contentId,
						"data-state": w.open ? "open" : "closed",
						dir: w.dir,
						onContextMenu: (t) => t.preventDefault(),
						...C,
						...$,
						onPlaced: () => B(!0),
						ref: A,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...C.style
						},
						onKeyDown: composeEventHandlers(C.onKeyDown, (t) => {
							let a = t.ctrlKey || t.altKey || t.metaKey;
							if (t.key === "Tab" && t.preventDefault(), !a && t.key.length === 1 && J(t.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(t.key)) {
								let a = R().filter((t) => !t.disabled).map((t) => t.ref.current);
								if (["ArrowUp", "End"].includes(t.key) && (a = a.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(t.key)) {
									let o = t.target, s = a.indexOf(o);
									a = a.slice(s + 1);
								}
								setTimeout(() => H(a)), t.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition", SelectItemAlignedPosition = React$1.forwardRef((t, a) => {
	let { __scopeSelect: o, onPlaced: s, ...c } = t, l = useSelectContext(CONTENT_NAME, o), u = useSelectContentContext(CONTENT_NAME, o), [d, f] = React$1.useState(null), [p, m] = React$1.useState(null), h = useComposedRefs(a, (t) => m(t)), g = useCollection(o), _ = React$1.useRef(!1), y = React$1.useRef(!0), { viewport: b, selectedItem: x, selectedItemText: S, focusSelectedItem: C } = u, w = React$1.useCallback(() => {
		if (l.trigger && l.valueNode && d && p && b && x && S) {
			let t = l.trigger.getBoundingClientRect(), a = p.getBoundingClientRect(), o = l.valueNode.getBoundingClientRect(), c = S.getBoundingClientRect();
			if (l.dir !== "rtl") {
				let s = c.left - a.left, l = o.left - s, u = t.left - l, f = t.width + u, p = Math.max(f, a.width), m = window.innerWidth - CONTENT_MARGIN, h = clamp(l, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, m - p)]);
				d.style.minWidth = f + "px", d.style.left = h + "px";
			} else {
				let s = a.right - c.right, l = window.innerWidth - o.right - s, u = window.innerWidth - t.right - l, f = t.width + u, p = Math.max(f, a.width), m = window.innerWidth - CONTENT_MARGIN, h = clamp(l, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, m - p)]);
				d.style.minWidth = f + "px", d.style.right = h + "px";
			}
			let u = g(), f = window.innerHeight - CONTENT_MARGIN * 2, m = b.scrollHeight, h = window.getComputedStyle(p), v = parseInt(h.borderTopWidth, 10), y = parseInt(h.paddingTop, 10), C = parseInt(h.borderBottomWidth, 10), w = parseInt(h.paddingBottom, 10), T = v + y + m + w + C, E = Math.min(x.offsetHeight * 5, T), D = window.getComputedStyle(b), O = parseInt(D.paddingTop, 10), k = parseInt(D.paddingBottom, 10), j = t.top + t.height / 2 - CONTENT_MARGIN, M = f - j, N = x.offsetHeight / 2, P = x.offsetTop + N, F = v + y + P, I = T - F;
			if (F <= j) {
				let t = u.length > 0 && x === u[u.length - 1].ref.current;
				d.style.bottom = "0px";
				let a = p.clientHeight - b.offsetTop - b.offsetHeight, o = F + Math.max(M, N + (t ? k : 0) + a + C);
				d.style.height = o + "px";
			} else {
				let t = u.length > 0 && x === u[0].ref.current;
				d.style.top = "0px";
				let a = Math.max(j, v + b.offsetTop + (t ? O : 0) + N) + I;
				d.style.height = a + "px", b.scrollTop = F - j + b.offsetTop;
			}
			d.style.margin = `${CONTENT_MARGIN}px 0`, d.style.minHeight = E + "px", d.style.maxHeight = f + "px", s?.(), requestAnimationFrame(() => _.current = !0);
		}
	}, [
		g,
		l.trigger,
		l.valueNode,
		d,
		p,
		b,
		x,
		S,
		l.dir,
		s
	]);
	useLayoutEffect2(() => w(), [w]);
	let [T, E] = React$1.useState();
	return useLayoutEffect2(() => {
		p && E(window.getComputedStyle(p).zIndex);
	}, [p]), /* @__PURE__ */ jsx(SelectViewportProvider, {
		scope: o,
		contentWrapper: d,
		shouldExpandOnScrollRef: _,
		onScrollButtonChange: React$1.useCallback((t) => {
			t && y.current === !0 && (w(), C?.(), y.current = !1);
		}, [w, C]),
		children: /* @__PURE__ */ jsx("div", {
			ref: f,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: T
			},
			children: /* @__PURE__ */ jsx(Primitive.div, {
				...c,
				ref: h,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...c.style
				}
			})
		})
	});
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition", SelectPopperPosition = React$1.forwardRef((t, a) => {
	let { __scopeSelect: o, align: s = "start", collisionPadding: c = CONTENT_MARGIN, ...l } = t;
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
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME, {}), VIEWPORT_NAME = "SelectViewport", SelectViewport = React$1.forwardRef((t, a) => {
	let { __scopeSelect: o, nonce: s, ...c } = t, l = useSelectContentContext(VIEWPORT_NAME, o), u = useSelectViewportContext(VIEWPORT_NAME, o), d = useComposedRefs(a, l.onViewportChange), f = React$1.useRef(0);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: s
	}), /* @__PURE__ */ jsx(Collection.Slot, {
		scope: o,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...c,
			ref: d,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...c.style
			},
			onScroll: composeEventHandlers(c.onScroll, (t) => {
				let a = t.currentTarget, { contentWrapper: o, shouldExpandOnScrollRef: s } = u;
				if (s?.current && o) {
					let t = Math.abs(f.current - a.scrollTop);
					if (t > 0) {
						let s = window.innerHeight - CONTENT_MARGIN * 2, c = parseFloat(o.style.minHeight), l = parseFloat(o.style.height), u = Math.max(c, l);
						if (u < s) {
							let c = u + t, l = Math.min(s, c), d = c - l;
							o.style.height = l + "px", o.style.bottom === "0px" && (a.scrollTop = d > 0 ? d : 0, o.style.justifyContent = "flex-end");
						}
					}
				}
				f.current = a.scrollTop;
			})
		})
	})] });
});
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup", [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME), SelectGroup = React$1.forwardRef((t, a) => {
	let { __scopeSelect: o, ...s } = t, c = useId$1();
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
var LABEL_NAME = "SelectLabel", SelectLabel$1 = React$1.forwardRef((t, a) => {
	let { __scopeSelect: o, ...s } = t, c = useSelectGroupContext(LABEL_NAME, o);
	return /* @__PURE__ */ jsx(Primitive.div, {
		id: c.id,
		...s,
		ref: a
	});
});
SelectLabel$1.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem", [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME), SelectItem$1 = React$1.forwardRef((t, a) => {
	let { __scopeSelect: o, value: s, disabled: c = !1, textValue: l, ...u } = t, d = useSelectContext(ITEM_NAME, o), p = useSelectContentContext(ITEM_NAME, o), m = d.value === s, [h, g] = React$1.useState(l ?? ""), [_, y] = React$1.useState(!1), b = useComposedRefs(a, (t) => p.itemRefCallback?.(t, s, c)), x = useId$1(), S = React$1.useRef("touch"), C = () => {
		c || (d.onValueChange(s), d.onOpenChange(!1));
	};
	if (s === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ jsx(SelectItemContextProvider, {
		scope: o,
		value: s,
		disabled: c,
		textId: x,
		isSelected: m,
		onItemTextChange: React$1.useCallback((t) => {
			g((a) => a || (t?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ jsx(Collection.ItemSlot, {
			scope: o,
			value: s,
			disabled: c,
			textValue: h,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				role: "option",
				"aria-labelledby": x,
				"data-highlighted": _ ? "" : void 0,
				"aria-selected": m && _,
				"data-state": m ? "checked" : "unchecked",
				"aria-disabled": c || void 0,
				"data-disabled": c ? "" : void 0,
				tabIndex: c ? void 0 : -1,
				...u,
				ref: b,
				onFocus: composeEventHandlers(u.onFocus, () => y(!0)),
				onBlur: composeEventHandlers(u.onBlur, () => y(!1)),
				onClick: composeEventHandlers(u.onClick, () => {
					S.current !== "mouse" && C();
				}),
				onPointerUp: composeEventHandlers(u.onPointerUp, () => {
					S.current === "mouse" && C();
				}),
				onPointerDown: composeEventHandlers(u.onPointerDown, (t) => {
					S.current = t.pointerType;
				}),
				onPointerMove: composeEventHandlers(u.onPointerMove, (t) => {
					S.current = t.pointerType, c ? p.onItemLeave?.() : S.current === "mouse" && t.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: composeEventHandlers(u.onPointerLeave, (t) => {
					t.currentTarget === document.activeElement && p.onItemLeave?.();
				}),
				onKeyDown: composeEventHandlers(u.onKeyDown, (t) => {
					p.searchRef?.current !== "" && t.key === " " || (SELECTION_KEYS.includes(t.key) && C(), t.key === " " && t.preventDefault());
				})
			})
		})
	});
});
SelectItem$1.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText", SelectItemText = React$1.forwardRef((t, a) => {
	let { __scopeSelect: o, className: s, style: c, ...l } = t, u = useSelectContext(ITEM_TEXT_NAME, o), d = useSelectContentContext(ITEM_TEXT_NAME, o), f = useSelectItemContext(ITEM_TEXT_NAME, o), p = useSelectNativeOptionsContext(ITEM_TEXT_NAME, o), [m, h] = React$1.useState(null), g = useComposedRefs(a, (t) => h(t), f.onItemTextChange, (t) => d.itemTextRefCallback?.(t, f.value, f.disabled)), _ = m?.textContent, y = React$1.useMemo(() => /* @__PURE__ */ jsx("option", {
		value: f.value,
		disabled: f.disabled,
		children: _
	}, f.value), [
		f.disabled,
		f.value,
		_
	]), { onNativeOptionAdd: b, onNativeOptionRemove: x } = p;
	return useLayoutEffect2(() => (b(y), () => x(y)), [
		b,
		x,
		y
	]), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Primitive.span, {
		id: f.textId,
		...l,
		ref: g
	}), f.isSelected && u.valueNode && !u.valueNodeHasChildren ? ReactDOM$1.createPortal(l.children, u.valueNode) : null] });
});
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator", SelectItemIndicator = React$1.forwardRef((t, a) => {
	let { __scopeSelect: o, ...s } = t;
	return useSelectItemContext(ITEM_INDICATOR_NAME, o).isSelected ? /* @__PURE__ */ jsx(Primitive.span, {
		"aria-hidden": !0,
		...s,
		ref: a
	}) : null;
});
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton", SelectScrollUpButton$1 = React$1.forwardRef((t, a) => {
	let o = useSelectContentContext(SCROLL_UP_BUTTON_NAME, t.__scopeSelect), s = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, t.__scopeSelect), [c, l] = React$1.useState(!1), u = useComposedRefs(a, s.onScrollButtonChange);
	return useLayoutEffect2(() => {
		if (o.viewport && o.isPositioned) {
			let t = function() {
				l(a.scrollTop > 0);
			}, a = o.viewport;
			return t(), a.addEventListener("scroll", t), () => a.removeEventListener("scroll", t);
		}
	}, [o.viewport, o.isPositioned]), c ? /* @__PURE__ */ jsx(SelectScrollButtonImpl, {
		...t,
		ref: u,
		onAutoScroll: () => {
			let { viewport: t, selectedItem: a } = o;
			t && a && (t.scrollTop -= a.offsetHeight);
		}
	}) : null;
});
SelectScrollUpButton$1.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton", SelectScrollDownButton$1 = React$1.forwardRef((t, a) => {
	let o = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, t.__scopeSelect), s = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, t.__scopeSelect), [c, l] = React$1.useState(!1), u = useComposedRefs(a, s.onScrollButtonChange);
	return useLayoutEffect2(() => {
		if (o.viewport && o.isPositioned) {
			let t = function() {
				let t = a.scrollHeight - a.clientHeight;
				l(Math.ceil(a.scrollTop) < t);
			}, a = o.viewport;
			return t(), a.addEventListener("scroll", t), () => a.removeEventListener("scroll", t);
		}
	}, [o.viewport, o.isPositioned]), c ? /* @__PURE__ */ jsx(SelectScrollButtonImpl, {
		...t,
		ref: u,
		onAutoScroll: () => {
			let { viewport: t, selectedItem: a } = o;
			t && a && (t.scrollTop += a.offsetHeight);
		}
	}) : null;
});
SelectScrollDownButton$1.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = React$1.forwardRef((t, a) => {
	let { __scopeSelect: o, onAutoScroll: s, ...c } = t, l = useSelectContentContext("SelectScrollButton", o), u = React$1.useRef(null), d = useCollection(o), f = React$1.useCallback(() => {
		u.current !== null && (window.clearInterval(u.current), u.current = null);
	}, []);
	return React$1.useEffect(() => () => f(), [f]), useLayoutEffect2(() => {
		d().find((t) => t.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
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
}), SEPARATOR_NAME = "SelectSeparator", SelectSeparator$1 = React$1.forwardRef((t, a) => {
	let { __scopeSelect: o, ...s } = t;
	return /* @__PURE__ */ jsx(Primitive.div, {
		"aria-hidden": !0,
		...s,
		ref: a
	});
});
SelectSeparator$1.displayName = SEPARATOR_NAME;
var ARROW_NAME = "SelectArrow", SelectArrow = React$1.forwardRef((t, a) => {
	let { __scopeSelect: o, ...s } = t, c = usePopperScope(o), l = useSelectContext(ARROW_NAME, o), u = useSelectContentContext(ARROW_NAME, o);
	return l.open && u.position === "popper" ? /* @__PURE__ */ jsx(Arrow, {
		...c,
		...s,
		ref: a
	}) : null;
});
SelectArrow.displayName = ARROW_NAME;
var BUBBLE_INPUT_NAME = "SelectBubbleInput", SelectBubbleInput = React$1.forwardRef(({ __scopeSelect: t, value: a, ...o }, s) => {
	let c = React$1.useRef(null), l = useComposedRefs(s, c), u = usePrevious(a);
	return React$1.useEffect(() => {
		let t = c.current;
		if (!t) return;
		let o = window.HTMLSelectElement.prototype, s = Object.getOwnPropertyDescriptor(o, "value").set;
		if (u !== a && s) {
			let o = new Event("change", { bubbles: !0 });
			s.call(t, a), t.dispatchEvent(o);
		}
	}, [u, a]), /* @__PURE__ */ jsx(Primitive.select, {
		...o,
		style: {
			...VISUALLY_HIDDEN_STYLES,
			...o.style
		},
		ref: l,
		defaultValue: a
	});
});
SelectBubbleInput.displayName = BUBBLE_INPUT_NAME;
function shouldShowPlaceholder(t) {
	return t === "" || t === void 0;
}
function useTypeaheadSearch(t) {
	let a = useCallbackRef(t), s = React$1.useRef(""), c = React$1.useRef(0), l = React$1.useCallback((t) => {
		let o = s.current + t;
		a(o), (function t(a) {
			s.current = a, window.clearTimeout(c.current), a !== "" && (c.current = window.setTimeout(() => t(""), 1e3));
		})(o);
	}, [a]), u = React$1.useCallback(() => {
		s.current = "", window.clearTimeout(c.current);
	}, []);
	return React$1.useEffect(() => () => window.clearTimeout(c.current), []), [
		s,
		l,
		u
	];
}
function findNextItem(t, a, o) {
	let s = a.length > 1 && Array.from(a).every((t) => t === a[0]) ? a[0] : a, c = o ? t.indexOf(o) : -1, l = wrapArray(t, Math.max(c, 0));
	s.length === 1 && (l = l.filter((t) => t !== o));
	let u = l.find((t) => t.textValue.toLowerCase().startsWith(s.toLowerCase()));
	return u === o ? void 0 : u;
}
function wrapArray(t, a) {
	return t.map((o, s) => t[(a + s) % t.length]);
}
var Root2 = Select$1, Trigger = SelectTrigger$1, Value = SelectValue$1, Icon = SelectIcon, Portal$1 = SelectPortal, Content2 = SelectContent$1, Viewport = SelectViewport, Label$1 = SelectLabel$1, Item = SelectItem$1, ItemText = SelectItemText, ItemIndicator = SelectItemIndicator, ScrollUpButton = SelectScrollUpButton$1, ScrollDownButton = SelectScrollDownButton$1, Separator = SelectSeparator$1;
function Select({ ...t }) {
	return /* @__PURE__ */ jsx(Root2, {
		"data-slot": "select",
		...t
	});
}
function SelectValue({ ...t }) {
	return /* @__PURE__ */ jsx(Value, {
		"data-slot": "select-value",
		...t
	});
}
var SelectTrigger = React$1.forwardRef(({ className: t, size: a = "default", children: o, ...c }, l) => /* @__PURE__ */ jsxs(Trigger, {
	ref: l,
	"data-slot": "select-trigger",
	"data-size": a,
	className: cn("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t),
	...c,
	children: [o, /* @__PURE__ */ jsx(Icon, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = Trigger.displayName;
var SelectContent = React$1.forwardRef(({ className: t, children: a, position: o = "item-aligned", align: c = "center", ...l }, u) => /* @__PURE__ */ jsx(Portal$1, { children: /* @__PURE__ */ jsxs(Content2, {
	ref: u,
	"data-slot": "select-content",
	className: cn("chatbot-theme bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", t),
	position: o,
	align: c,
	...l,
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
var SelectLabel = React$1.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ jsx(Label$1, {
	ref: o,
	"data-slot": "select-label",
	className: cn("text-muted-foreground px-2 py-1.5 text-xs", t),
	...a
}));
SelectLabel.displayName = Label$1.displayName;
var SelectItem = React$1.forwardRef(({ className: t, children: a, ...o }, l) => /* @__PURE__ */ jsxs(Item, {
	ref: l,
	"data-slot": "select-item",
	className: cn("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", t),
	...o,
	children: [/* @__PURE__ */ jsx("span", {
		"data-slot": "select-item-indicator",
		className: "absolute right-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "size-4" }) })
	}), /* @__PURE__ */ jsx(ItemText, { children: a })]
}));
SelectItem.displayName = Item.displayName;
var SelectSeparator = React$1.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ jsx(Separator, {
	ref: o,
	"data-slot": "select-separator",
	className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", t),
	...a
}));
SelectSeparator.displayName = Separator.displayName;
var SelectScrollUpButton = React$1.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ jsx(ScrollUpButton, {
	ref: o,
	"data-slot": "select-scroll-up-button",
	className: cn("flex cursor-default items-center justify-center py-1", t),
	...a,
	children: /* @__PURE__ */ jsx(ChevronUp, { className: "size-4" })
}));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
var SelectScrollDownButton = React$1.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ jsx(ScrollDownButton, {
	ref: o,
	"data-slot": "select-scroll-down-button",
	className: cn("flex cursor-default items-center justify-center py-1", t),
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
function Setting({ metadata: t, selectedAgent: a, selectedModel: o, onAgentChange: c, onModelChange: l, voiceConfig: d, onVoiceConfigChange: f, availableVoices: p, selectedVoice: m, onVoiceChange: h, autoSpeak: g, onAutoSpeakChange: v }) {
	let b = t?.agents.find((t) => t.key === a), S = o, [w] = useState(() => getVoiceSupport()), T = useMemo(() => p?.reduce((t, a) => {
		let o = a.lang.split("-")[0].toUpperCase();
		return t[o] || (t[o] = []), t[o].push(a), t;
	}, {}) || {}, [p]), E = d && f && p && h && (w.speechRecognition || w.speechSynthesis);
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
									children: b?.key || a
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
								t?.agents.map((t) => /* @__PURE__ */ jsx(DropdownMenuItem, {
									onClick: () => c(t.key),
									className: cn("cursor-pointer text-xs", a === t.key && "bg-primary/10 text-primary focus:bg-primary/15 focus:text-primary"),
									children: /* @__PURE__ */ jsx("div", {
										className: "flex flex-col gap-0.5",
										children: /* @__PURE__ */ jsx("span", {
											className: "font-medium",
											children: t.key
										})
									})
								}, t.key))
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
									children: S
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
								t?.models.map((t) => /* @__PURE__ */ jsx(DropdownMenuItem, {
									onClick: () => l(t),
									className: cn("cursor-pointer text-xs", o === t && "bg-primary/10 text-primary focus:bg-primary/15 focus:text-primary"),
									children: t
								}, t))
							]
						})] })]
					})]
				}), b?.description && /* @__PURE__ */ jsx("div", {
					className: "text-[11px] text-muted-foreground bg-muted/30 p-2 rounded-md border border-border/40 leading-relaxed",
					children: b.description
				})]
			}), E && /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "bg-secondary/20 rounded-lg p-3 space-y-4 border border-border/40",
						children: [v && w.speechSynthesis && /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "auto-speak",
								className: "text-[10px] uppercase font-bold text-muted-foreground cursor-pointer",
								children: "Auto-speak responses"
							}), /* @__PURE__ */ jsx(Switch, {
								id: "auto-speak",
								checked: g,
								onCheckedChange: v,
								className: "scale-75 origin-right"
							})]
						}), w.speechRecognition && d && f && /* @__PURE__ */ jsxs("div", {
							className: "flex w-full justify-between",
							children: [/* @__PURE__ */ jsxs(Label, {
								className: "text-[10px] uppercase font-bold text-muted-foreground flex items-center gap-1",
								children: [/* @__PURE__ */ jsx(Languages, { className: "h-3 w-3" }), " Input Language"]
							}), /* @__PURE__ */ jsxs(Select, {
								value: d.lang,
								onValueChange: (t) => f({ lang: t }),
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
					w.speechSynthesis && p && p.length > 0 && m && h && /* @__PURE__ */ jsxs("div", {
						className: "space-y-1.5 pt-1",
						children: [/* @__PURE__ */ jsxs(Label, {
							className: "text-[10px] uppercase font-bold text-muted-foreground flex items-center gap-1",
							children: [/* @__PURE__ */ jsx(Activity, { className: "h-3 w-3" }), " Voice Persona"]
						}), /* @__PURE__ */ jsxs(Select, {
							value: m?.voiceURI || "",
							onValueChange: (t) => {
								h(p.find((a) => a.voiceURI === t) || null);
							},
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								className: "w-full text-xs h-9",
								children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a voice" })
							}), /* @__PURE__ */ jsx(SelectContent, {
								className: "max-h-[300px]",
								children: Object.entries(T).map(([t, a]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "px-2 py-1.5 text-[10px] font-bold text-muted-foreground bg-muted/40 sticky top-0 z-10 backdrop-blur-sm",
									children: languageNames[t] || t
								}), a.map((t) => /* @__PURE__ */ jsx(SelectItem, {
									value: t.voiceURI,
									className: "pl-4 text-xs cursor-pointer",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "truncate max-w-[200px]",
											children: t.name
										}), t.localService && /* @__PURE__ */ jsx(Badge, {
											variant: "secondary",
											className: "text-[9px] px-1 h-4 rounded-sm",
											children: "Local"
										})]
									})
								}, t.voiceURI))] }, t))
							})]
						})]
					}),
					w.speechSynthesis && d && f && /* @__PURE__ */ jsxs("div", {
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
									onClick: () => f({
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
										children: [d.rate.toFixed(1), "x"]
									})]
								}), /* @__PURE__ */ jsx(Slider, {
									value: [d.rate],
									min: .5,
									max: 2,
									step: .1,
									onValueChange: ([t]) => f({ rate: t }),
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
										children: d.pitch.toFixed(1)
									})]
								}), /* @__PURE__ */ jsx(Slider, {
									value: [d.pitch],
									min: .5,
									max: 2,
									step: .1,
									onValueChange: ([t]) => f({ pitch: t }),
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
										children: [Math.round(d.volume * 100), "%"]
									})]
								}), /* @__PURE__ */ jsx(Slider, {
									value: [d.volume],
									min: 0,
									max: 1,
									step: .1,
									onValueChange: ([t]) => f({ volume: t }),
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
