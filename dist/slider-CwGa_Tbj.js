import { t as createLucideIcon } from "./createLucideIcon-C1Qbi7jU.js";
import { A as composeRefs, C as useCallbackRef$1, D as cva, E as cn, O as Slot$1, S as DismissableLayer, _ as Root2$1, b as useId$1, d as useControllableState, f as Presence, g as Content, h as Arrow, j as useComposedRefs, k as createSlot$4, m as Anchor, p as Portal, v as createPopperScope, w as composeEventHandlers, y as useSize } from "./voice.sdk-8j8W_pOO.js";
import * as React$1 from "react";
import React, { useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import "react-dom";
var ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), Sparkles = createLucideIcon("sparkles", [
	["path", {
		d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
		key: "1s2grr"
	}],
	["path", {
		d: "M20 2v4",
		key: "1rf3ol"
	}],
	["path", {
		d: "M22 4h-4",
		key: "gwowj6"
	}],
	["circle", {
		cx: "4",
		cy: "20",
		r: "2",
		key: "6kqj1y"
	}]
]), Volume2 = createLucideIcon("volume-2", [
	["path", {
		d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
		key: "uqj9uw"
	}],
	["path", {
		d: "M16 9a5 5 0 0 1 0 6",
		key: "1q6k2b"
	}],
	["path", {
		d: "M19.364 18.364a9 9 0 0 0 0-12.728",
		key: "ijwkga"
	}]
]), Zap = createLucideIcon("zap", [["path", {
	d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
	key: "1xq2db"
}]]), Primitive$3 = [
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
].reduce((e, E) => {
	let D = createSlot$4(`Primitive.${E}`), O = React$1.forwardRef((e, O) => {
		let { asChild: k, ...A } = e, j = k ? D : E;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(j, {
			...A,
			ref: O
		});
	});
	return O.displayName = `Primitive.${E}`, {
		...e,
		[E]: O
	};
}, {}), badgeVariants = cva("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
		secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
		destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
		outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
	} },
	defaultVariants: { variant: "default" }
}), Badge = React$1.forwardRef(({ className: e, variant: E, asChild: D = !1, ...O }, j) => /* @__PURE__ */ jsx(D ? Slot$1 : "span", {
	ref: j,
	"data-slot": "badge",
	className: cn(badgeVariants({ variant: E }), e),
	...O
}));
Badge.displayName = "Badge";
function createContextScope$2(e, E = []) {
	let D = [];
	function O(E, O) {
		let k = React$1.createContext(O), A = D.length;
		D = [...D, O];
		let j = (E) => {
			let { scope: D, children: O, ...j } = E, M = D?.[e]?.[A] || k, N = React$1.useMemo(() => j, Object.values(j));
			return /* @__PURE__ */ jsx(M.Provider, {
				value: N,
				children: O
			});
		};
		j.displayName = E + "Provider";
		function M(D, j) {
			let M = j?.[e]?.[A] || k, N = React$1.useContext(M);
			if (N) return N;
			if (O !== void 0) return O;
			throw Error(`\`${D}\` must be used within \`${E}\``);
		}
		return [j, M];
	}
	let k = () => {
		let E = D.map((e) => React$1.createContext(e));
		return function(D) {
			let O = D?.[e] || E;
			return React$1.useMemo(() => ({ [`__scope${e}`]: {
				...D,
				[e]: O
			} }), [D, O]);
		};
	};
	return k.scopeName = e, [O, composeContextScopes$2(k, ...E)];
}
function composeContextScopes$2(...e) {
	let E = e[0];
	if (e.length === 1) return E;
	let D = () => {
		let D = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let O = D.reduce((E, { useScope: D, scopeName: O }) => {
				let k = D(e)[`__scope${O}`];
				return {
					...E,
					...k
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${E.scopeName}`]: O }), [O]);
		};
	};
	return D.scopeName = E.scopeName, D;
}
var count = 0;
function useFocusGuards() {
	React$1.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? createFocusGuard()), document.body.insertAdjacentElement("beforeend", e[1] ?? createFocusGuard()), count++, () => {
			count === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), count--;
		};
	}, []);
}
function createFocusGuard() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$3(e) {
	let E = /* @__PURE__ */ createSlotClone$3(e), D = React$1.forwardRef((e, D) => {
		let { children: O, ...k } = e, A = React$1.Children.toArray(O), j = A.find(isSlottable$3);
		if (j) {
			let e = j.props.children, O = A.map((E) => E === j ? React$1.Children.count(e) > 1 ? React$1.Children.only(null) : React$1.isValidElement(e) ? e.props.children : null : E);
			return /* @__PURE__ */ jsx(E, {
				...k,
				ref: D,
				children: React$1.isValidElement(e) ? React$1.cloneElement(e, void 0, O) : null
			});
		}
		return /* @__PURE__ */ jsx(E, {
			...k,
			ref: D,
			children: O
		});
	});
	return D.displayName = `${e}.Slot`, D;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$3(e) {
	let D = React$1.forwardRef((e, D) => {
		let { children: O, ...k } = e;
		if (React$1.isValidElement(O)) {
			let e = getElementRef$3(O), A = mergeProps$3(k, O.props);
			return O.type !== React$1.Fragment && (A.ref = D ? composeRefs(D, e) : e), React$1.cloneElement(O, A);
		}
		return React$1.Children.count(O) > 1 ? React$1.Children.only(null) : null;
	});
	return D.displayName = `${e}.SlotClone`, D;
}
var SLOTTABLE_IDENTIFIER$3 = Symbol("radix.slottable");
function isSlottable$3(e) {
	return React$1.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SLOTTABLE_IDENTIFIER$3;
}
function mergeProps$3(e, E) {
	let D = { ...E };
	for (let O in E) {
		let k = e[O], A = E[O];
		/^on[A-Z]/.test(O) ? k && A ? D[O] = (...e) => {
			let E = A(...e);
			return k(...e), E;
		} : k && (D[O] = k) : O === "style" ? D[O] = {
			...k,
			...A
		} : O === "className" && (D[O] = [k, A].filter(Boolean).join(" "));
	}
	return {
		...e,
		...D
	};
}
function getElementRef$3(e) {
	let E = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, D = E && "isReactWarning" in E && E.isReactWarning;
	return D ? e.ref : (E = Object.getOwnPropertyDescriptor(e, "ref")?.get, D = E && "isReactWarning" in E && E.isReactWarning, D ? e.props.ref : e.props.ref || e.ref);
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
].reduce((e, E) => {
	let D = /* @__PURE__ */ createSlot$3(`Primitive.${E}`), O = React$1.forwardRef((e, O) => {
		let { asChild: k, ...A } = e, j = k ? D : E;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(j, {
			...A,
			ref: O
		});
	});
	return O.displayName = `Primitive.${E}`, {
		...e,
		[E]: O
	};
}, {}), AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount", AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount", EVENT_OPTIONS = {
	bubbles: !1,
	cancelable: !0
}, FOCUS_SCOPE_NAME = "FocusScope", FocusScope = React$1.forwardRef((e, E) => {
	let { loop: O = !1, trapped: k = !1, onMountAutoFocus: A, onUnmountAutoFocus: j, ...M } = e, [N, P] = React$1.useState(null), F = useCallbackRef$1(A), I = useCallbackRef$1(j), L = React$1.useRef(null), z = useComposedRefs(E, (e) => P(e)), B = React$1.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	React$1.useEffect(() => {
		if (k) {
			let e = function(e) {
				if (B.paused || !N) return;
				let E = e.target;
				N.contains(E) ? L.current = E : focus(L.current, { select: !0 });
			}, E = function(e) {
				if (B.paused || !N) return;
				let E = e.relatedTarget;
				E !== null && (N.contains(E) || focus(L.current, { select: !0 }));
			}, D = function(e) {
				if (document.activeElement === document.body) for (let E of e) E.removedNodes.length > 0 && focus(N);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", E);
			let O = new MutationObserver(D);
			return N && O.observe(N, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", E), O.disconnect();
			};
		}
	}, [
		k,
		N,
		B.paused
	]), React$1.useEffect(() => {
		if (N) {
			focusScopesStack.add(B);
			let e = document.activeElement;
			if (!N.contains(e)) {
				let E = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
				N.addEventListener(AUTOFOCUS_ON_MOUNT, F), N.dispatchEvent(E), E.defaultPrevented || (focusFirst(removeLinks(getTabbableCandidates(N)), { select: !0 }), document.activeElement === e && focus(N));
			}
			return () => {
				N.removeEventListener(AUTOFOCUS_ON_MOUNT, F), setTimeout(() => {
					let E = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
					N.addEventListener(AUTOFOCUS_ON_UNMOUNT, I), N.dispatchEvent(E), E.defaultPrevented || focus(e ?? document.body, { select: !0 }), N.removeEventListener(AUTOFOCUS_ON_UNMOUNT, I), focusScopesStack.remove(B);
				}, 0);
			};
		}
	}, [
		N,
		F,
		I,
		B
	]);
	let V = React$1.useCallback((e) => {
		if (!O && !k || B.paused) return;
		let E = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, D = document.activeElement;
		if (E && D) {
			let E = e.currentTarget, [k, A] = getTabbableEdges(E);
			k && A ? !e.shiftKey && D === A ? (e.preventDefault(), O && focus(k, { select: !0 })) : e.shiftKey && D === k && (e.preventDefault(), O && focus(A, { select: !0 })) : D === E && e.preventDefault();
		}
	}, [
		O,
		k,
		B.paused
	]);
	return /* @__PURE__ */ jsx(Primitive$2.div, {
		tabIndex: -1,
		...M,
		ref: z,
		onKeyDown: V
	});
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(e, { select: E = !1 } = {}) {
	let D = document.activeElement;
	for (let O of e) if (focus(O, { select: E }), document.activeElement !== D) return;
}
function getTabbableEdges(e) {
	let E = getTabbableCandidates(e);
	return [findVisible(E, e), findVisible(E.reverse(), e)];
}
function getTabbableCandidates(e) {
	let E = [], D = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let E = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || E ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; D.nextNode();) E.push(D.currentNode);
	return E;
}
function findVisible(e, E) {
	for (let D of e) if (!isHidden(D, { upTo: E })) return D;
}
function isHidden(e, { upTo: E }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (E !== void 0 && e === E) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function isSelectableInput(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function focus(e, { select: E = !1 } = {}) {
	if (e && e.focus) {
		let D = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== D && isSelectableInput(e) && E && e.select();
	}
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let e = [];
	return {
		add(E) {
			let D = e[0];
			E !== D && D?.pause(), e = arrayRemove(e, E), e.unshift(E);
		},
		remove(E) {
			e = arrayRemove(e, E), e[0]?.resume();
		}
	};
}
function arrayRemove(e, E) {
	let D = [...e], O = D.indexOf(E);
	return O !== -1 && D.splice(O, 1), D;
}
function removeLinks(e) {
	return e.filter((e) => e.tagName !== "A");
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$2(e) {
	let E = /* @__PURE__ */ createSlotClone$2(e), D = React$1.forwardRef((e, D) => {
		let { children: O, ...k } = e, A = React$1.Children.toArray(O), j = A.find(isSlottable$2);
		if (j) {
			let e = j.props.children, O = A.map((E) => E === j ? React$1.Children.count(e) > 1 ? React$1.Children.only(null) : React$1.isValidElement(e) ? e.props.children : null : E);
			return /* @__PURE__ */ jsx(E, {
				...k,
				ref: D,
				children: React$1.isValidElement(e) ? React$1.cloneElement(e, void 0, O) : null
			});
		}
		return /* @__PURE__ */ jsx(E, {
			...k,
			ref: D,
			children: O
		});
	});
	return D.displayName = `${e}.Slot`, D;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$2(e) {
	let D = React$1.forwardRef((e, D) => {
		let { children: O, ...k } = e;
		if (React$1.isValidElement(O)) {
			let e = getElementRef$2(O), A = mergeProps$2(k, O.props);
			return O.type !== React$1.Fragment && (A.ref = D ? composeRefs(D, e) : e), React$1.cloneElement(O, A);
		}
		return React$1.Children.count(O) > 1 ? React$1.Children.only(null) : null;
	});
	return D.displayName = `${e}.SlotClone`, D;
}
var SLOTTABLE_IDENTIFIER$2 = Symbol("radix.slottable");
function isSlottable$2(e) {
	return React$1.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SLOTTABLE_IDENTIFIER$2;
}
function mergeProps$2(e, E) {
	let D = { ...E };
	for (let O in E) {
		let k = e[O], A = E[O];
		/^on[A-Z]/.test(O) ? k && A ? D[O] = (...e) => {
			let E = A(...e);
			return k(...e), E;
		} : k && (D[O] = k) : O === "style" ? D[O] = {
			...k,
			...A
		} : O === "className" && (D[O] = [k, A].filter(Boolean).join(" "));
	}
	return {
		...e,
		...D
	};
}
function getElementRef$2(e) {
	let E = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, D = E && "isReactWarning" in E && E.isReactWarning;
	return D ? e.ref : (E = Object.getOwnPropertyDescriptor(e, "ref")?.get, D = E && "isReactWarning" in E && E.isReactWarning, D ? e.props.ref : e.props.ref || e.ref);
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
].reduce((e, E) => {
	let D = /* @__PURE__ */ createSlot$2(`Primitive.${E}`), O = React$1.forwardRef((e, O) => {
		let { asChild: k, ...A } = e, j = k ? D : E;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(j, {
			...A,
			ref: O
		});
	});
	return O.displayName = `Primitive.${E}`, {
		...e,
		[E]: O
	};
}, {}), getDefaultParent = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {}, lockCount = 0, unwrapHost = function(e) {
	return e && (e.host || unwrapHost(e.parentNode));
}, correctTargets = function(e, E) {
	return E.map(function(E) {
		if (e.contains(E)) return E;
		var D = unwrapHost(E);
		return D && e.contains(D) ? D : (console.error("aria-hidden", E, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, applyAttributeToOthers = function(e, E, D, O) {
	var k = correctTargets(E, Array.isArray(e) ? e : [e]);
	markerMap[D] || (markerMap[D] = /* @__PURE__ */ new WeakMap());
	var A = markerMap[D], j = [], M = /* @__PURE__ */ new Set(), N = new Set(k), P = function(e) {
		!e || M.has(e) || (M.add(e), P(e.parentNode));
	};
	k.forEach(P);
	var F = function(e) {
		!e || N.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (M.has(e)) F(e);
			else try {
				var E = e.getAttribute(O), k = E !== null && E !== "false", N = (counterMap.get(e) || 0) + 1, P = (A.get(e) || 0) + 1;
				counterMap.set(e, N), A.set(e, P), j.push(e), N === 1 && k && uncontrolledNodes.set(e, !0), P === 1 && e.setAttribute(D, "true"), k || e.setAttribute(O, "true");
			} catch (E) {
				console.error("aria-hidden: cannot operate on ", e, E);
			}
		});
	};
	return F(E), M.clear(), lockCount++, function() {
		j.forEach(function(e) {
			var E = counterMap.get(e) - 1, k = A.get(e) - 1;
			counterMap.set(e, E), A.set(e, k), E || (uncontrolledNodes.has(e) || e.removeAttribute(O), uncontrolledNodes.delete(e)), k || e.removeAttribute(D);
		}), lockCount--, lockCount || (counterMap = /* @__PURE__ */ new WeakMap(), counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {});
	};
}, hideOthers = function(e, E, D) {
	D === void 0 && (D = "data-aria-hidden");
	var O = Array.from(Array.isArray(e) ? e : [e]), k = E || getDefaultParent(e);
	return k ? (O.push.apply(O, Array.from(k.querySelectorAll("[aria-live], script"))), applyAttributeToOthers(O, k, D, "aria-hidden")) : function() {
		return null;
	};
}, __assign = function() {
	return __assign = Object.assign || function(e) {
		for (var E, D = 1, O = arguments.length; D < O; D++) for (var k in E = arguments[D], E) Object.prototype.hasOwnProperty.call(E, k) && (e[k] = E[k]);
		return e;
	}, __assign.apply(this, arguments);
};
function __rest(e, E) {
	var D = {};
	for (var O in e) Object.prototype.hasOwnProperty.call(e, O) && E.indexOf(O) < 0 && (D[O] = e[O]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var k = 0, O = Object.getOwnPropertySymbols(e); k < O.length; k++) E.indexOf(O[k]) < 0 && Object.prototype.propertyIsEnumerable.call(e, O[k]) && (D[O[k]] = e[O[k]]);
	return D;
}
function __spreadArray(e, E, D) {
	if (D || arguments.length === 2) for (var O = 0, k = E.length, A; O < k; O++) (A || !(O in E)) && (A ||= Array.prototype.slice.call(E, 0, O), A[O] = E[O]);
	return e.concat(A || Array.prototype.slice.call(E));
}
var zeroRightClassName = "right-scroll-bar-position", fullWidthClassName = "width-before-scroll-bar", noScrollbarsClassName = "with-scroll-bars-hidden", removedBarSizeVariable = "--removed-body-scroll-bar-size";
function assignRef(e, E) {
	return typeof e == "function" ? e(E) : e && (e.current = E), e;
}
function useCallbackRef(e, E) {
	var D = useState(function() {
		return {
			value: e,
			callback: E,
			facade: {
				get current() {
					return D.value;
				},
				set current(e) {
					var E = D.value;
					E !== e && (D.value = e, D.callback(e, E));
				}
			}
		};
	})[0];
	return D.callback = E, D.facade;
}
var useIsomorphicLayoutEffect = typeof window < "u" ? React$1.useLayoutEffect : React$1.useEffect, currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(e, E) {
	var D = useCallbackRef(E || null, function(E) {
		return e.forEach(function(e) {
			return assignRef(e, E);
		});
	});
	return useIsomorphicLayoutEffect(function() {
		var E = currentValues.get(D);
		if (E) {
			var O = new Set(E), k = new Set(e), A = D.current;
			O.forEach(function(e) {
				k.has(e) || assignRef(e, null);
			}), k.forEach(function(e) {
				O.has(e) || assignRef(e, A);
			});
		}
		currentValues.set(D, e);
	}, [e]), D;
}
function ItoI(e) {
	return e;
}
function innerCreateMedium(e, E) {
	E === void 0 && (E = ItoI);
	var D = [], O = !1;
	return {
		read: function() {
			if (O) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return D.length ? D[D.length - 1] : e;
		},
		useMedium: function(e) {
			var k = E(e, O);
			return D.push(k), function() {
				D = D.filter(function(e) {
					return e !== k;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (O = !0; D.length;) {
				var E = D;
				D = [], E.forEach(e);
			}
			D = {
				push: function(E) {
					return e(E);
				},
				filter: function() {
					return D;
				}
			};
		},
		assignMedium: function(e) {
			O = !0;
			var E = [];
			if (D.length) {
				var k = D;
				D = [], k.forEach(e), E = D;
			}
			var A = function() {
				var D = E;
				E = [], D.forEach(e);
			}, j = function() {
				return Promise.resolve().then(A);
			};
			j(), D = {
				push: function(e) {
					E.push(e), j();
				},
				filter: function(e) {
					return E = E.filter(e), D;
				}
			};
		}
	};
}
function createSidecarMedium(e) {
	e === void 0 && (e = {});
	var E = innerCreateMedium(null);
	return E.options = __assign({
		async: !0,
		ssr: !1
	}, e), E;
}
var SideCar = function(e) {
	var E = e.sideCar, D = __rest(e, ["sideCar"]);
	if (!E) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var O = E.read();
	if (!O) throw Error("Sidecar medium not found");
	return React$1.createElement(O, __assign({}, D));
};
SideCar.isSideCarExport = !0;
function exportSidecar(e, E) {
	return e.useMedium(E), SideCar;
}
var effectCar = createSidecarMedium(), nothing = function() {}, RemoveScroll = React$1.forwardRef(function(e, E) {
	var D = React$1.useRef(null), O = React$1.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), k = O[0], A = O[1], j = e.forwardProps, M = e.children, N = e.className, P = e.removeScrollBar, F = e.enabled, I = e.shards, L = e.sideCar, R = e.noRelative, z = e.noIsolation, B = e.inert, V = e.allowPinchZoom, H = e.as, U = H === void 0 ? "div" : H, W = e.gapMode, G = __rest(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), K = L, q = useMergeRefs([D, E]), J = __assign(__assign({}, G), k);
	return React$1.createElement(React$1.Fragment, null, F && React$1.createElement(K, {
		sideCar: effectCar,
		removeScrollBar: P,
		shards: I,
		noRelative: R,
		noIsolation: z,
		inert: B,
		setCallbacks: A,
		allowPinchZoom: !!V,
		lockRef: D,
		gapMode: W
	}), j ? React$1.cloneElement(React$1.Children.only(M), __assign(__assign({}, J), { ref: q })) : React$1.createElement(U, __assign({}, J, {
		className: N,
		ref: q
	}), M));
});
RemoveScroll.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, RemoveScroll.classNames = {
	fullWidth: fullWidthClassName,
	zeroRight: zeroRightClassName
};
var currentNonce, getNonce = function() {
	if (currentNonce) return currentNonce;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function makeStyleTag() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var E = getNonce();
	return E && e.setAttribute("nonce", E), e;
}
function injectStyles(e, E) {
	e.styleSheet ? e.styleSheet.cssText = E : e.appendChild(document.createTextNode(E));
}
function insertStyleTag(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var stylesheetSingleton = function() {
	var e = 0, E = null;
	return {
		add: function(D) {
			e == 0 && (E = makeStyleTag()) && (injectStyles(E, D), insertStyleTag(E)), e++;
		},
		remove: function() {
			e--, !e && E && (E.parentNode && E.parentNode.removeChild(E), E = null);
		}
	};
}, styleHookSingleton = function() {
	var e = stylesheetSingleton();
	return function(E, D) {
		React$1.useEffect(function() {
			return e.add(E), function() {
				e.remove();
			};
		}, [E && D]);
	};
}, styleSingleton = function() {
	var e = styleHookSingleton();
	return function(E) {
		var D = E.styles, O = E.dynamic;
		return e(D, O), null;
	};
}, zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, parse = function(e) {
	return parseInt(e || "", 10) || 0;
}, getOffset = function(e) {
	var E = window.getComputedStyle(document.body), D = E[e === "padding" ? "paddingLeft" : "marginLeft"], O = E[e === "padding" ? "paddingTop" : "marginTop"], k = E[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(D),
		parse(O),
		parse(k)
	];
}, getGapWidth = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return zeroGap;
	var E = getOffset(e), D = document.documentElement.clientWidth, O = window.innerWidth;
	return {
		left: E[0],
		top: E[1],
		right: E[2],
		gap: Math.max(0, O - D + E[2] - E[0])
	};
}, Style = styleSingleton(), lockAttribute = "data-scroll-locked", getStyles = function(e, E, D, O) {
	var k = e.left, A = e.top, j = e.right, M = e.gap;
	return D === void 0 && (D = "margin"), `
  .${noScrollbarsClassName} {
   overflow: hidden ${O};
   padding-right: ${M}px ${O};
  }
  body[${lockAttribute}] {
    overflow: hidden ${O};
    overscroll-behavior: contain;
    ${[
		E && `position: relative ${O};`,
		D === "margin" && `
    padding-left: ${k}px;
    padding-top: ${A}px;
    padding-right: ${j}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${M}px ${O};
    `,
		D === "padding" && `padding-right: ${M}px ${O};`
	].filter(Boolean).join("")}
  }
  
  .${zeroRightClassName} {
    right: ${M}px ${O};
  }
  
  .${fullWidthClassName} {
    margin-right: ${M}px ${O};
  }
  
  .${zeroRightClassName} .${zeroRightClassName} {
    right: 0 ${O};
  }
  
  .${fullWidthClassName} .${fullWidthClassName} {
    margin-right: 0 ${O};
  }
  
  body[${lockAttribute}] {
    ${removedBarSizeVariable}: ${M}px;
  }
`;
}, getCurrentUseCounter = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, useLockAttribute = function() {
	React$1.useEffect(function() {
		return document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString()), function() {
			var e = getCurrentUseCounter() - 1;
			e <= 0 ? document.body.removeAttribute(lockAttribute) : document.body.setAttribute(lockAttribute, e.toString());
		};
	}, []);
}, RemoveScrollBar = function(e) {
	var E = e.noRelative, D = e.noImportant, O = e.gapMode, k = O === void 0 ? "margin" : O;
	useLockAttribute();
	var A = React$1.useMemo(function() {
		return getGapWidth(k);
	}, [k]);
	return React$1.createElement(Style, { styles: getStyles(A, !E, k, D ? "" : "!important") });
}, passiveSupported = !1;
if (typeof window < "u") try {
	var options = Object.defineProperty({}, "passive", { get: function() {
		return passiveSupported = !0, !0;
	} });
	window.addEventListener("test", options, options), window.removeEventListener("test", options, options);
} catch {
	passiveSupported = !1;
}
var nonPassive = passiveSupported ? { passive: !1 } : !1, alwaysContainsScroll = function(e) {
	return e.tagName === "TEXTAREA";
}, elementCanBeScrolled = function(e, E) {
	if (!(e instanceof Element)) return !1;
	var D = window.getComputedStyle(e);
	return D[E] !== "hidden" && !(D.overflowY === D.overflowX && !alwaysContainsScroll(e) && D[E] === "visible");
}, elementCouldBeVScrolled = function(e) {
	return elementCanBeScrolled(e, "overflowY");
}, elementCouldBeHScrolled = function(e) {
	return elementCanBeScrolled(e, "overflowX");
}, locationCouldBeScrolled = function(e, E) {
	var D = E.ownerDocument, O = E;
	do {
		if (typeof ShadowRoot < "u" && O instanceof ShadowRoot && (O = O.host), elementCouldBeScrolled(e, O)) {
			var k = getScrollVariables(e, O);
			if (k[1] > k[2]) return !0;
		}
		O = O.parentNode;
	} while (O && O !== D.body);
	return !1;
}, getVScrollVariables = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, getHScrollVariables = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, elementCouldBeScrolled = function(e, E) {
	return e === "v" ? elementCouldBeVScrolled(E) : elementCouldBeHScrolled(E);
}, getScrollVariables = function(e, E) {
	return e === "v" ? getVScrollVariables(E) : getHScrollVariables(E);
}, getDirectionFactor = function(e, E) {
	return e === "h" && E === "rtl" ? -1 : 1;
}, handleScroll = function(e, E, D, O, k) {
	var A = getDirectionFactor(e, window.getComputedStyle(E).direction), j = A * O, M = D.target, N = E.contains(M), P = !1, F = j > 0, I = 0, L = 0;
	do {
		if (!M) break;
		var R = getScrollVariables(e, M), z = R[0], B = R[1] - R[2] - A * z;
		(z || B) && elementCouldBeScrolled(e, M) && (I += B, L += z);
		var V = M.parentNode;
		M = V && V.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? V.host : V;
	} while (!N && M !== document.body || N && (E.contains(M) || E === M));
	return (F && (k && Math.abs(I) < 1 || !k && j > I) || !F && (k && Math.abs(L) < 1 || !k && -j > L)) && (P = !0), P;
}, getTouchXY = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, getDeltaXY = function(e) {
	return [e.deltaX, e.deltaY];
}, extractRef = function(e) {
	return e && "current" in e ? e.current : e;
}, deltaCompare = function(e, E) {
	return e[0] === E[0] && e[1] === E[1];
}, generateStyle = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, idCounter = 0, lockStack = [];
function RemoveScrollSideCar(e) {
	var E = React$1.useRef([]), D = React$1.useRef([0, 0]), O = React$1.useRef(), k = React$1.useState(idCounter++)[0], A = React$1.useState(styleSingleton)[0], j = React$1.useRef(e);
	React$1.useEffect(function() {
		j.current = e;
	}, [e]), React$1.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${k}`);
			var E = __spreadArray([e.lockRef.current], (e.shards || []).map(extractRef), !0).filter(Boolean);
			return E.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${k}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${k}`), E.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${k}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var M = React$1.useCallback(function(e, E) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !j.current.allowPinchZoom;
		var k = getTouchXY(e), A = D.current, M = "deltaX" in e ? e.deltaX : A[0] - k[0], N = "deltaY" in e ? e.deltaY : A[1] - k[1], P, F = e.target, I = Math.abs(M) > Math.abs(N) ? "h" : "v";
		if ("touches" in e && I === "h" && F.type === "range") return !1;
		var L = window.getSelection(), R = L && L.anchorNode;
		if (R && (R === F || R.contains(F))) return !1;
		var z = locationCouldBeScrolled(I, F);
		if (!z) return !0;
		if (z ? P = I : (P = I === "v" ? "h" : "v", z = locationCouldBeScrolled(I, F)), !z) return !1;
		if (!O.current && "changedTouches" in e && (M || N) && (O.current = P), !P) return !0;
		var B = O.current || P;
		return handleScroll(B, E, e, B === "h" ? M : N, !0);
	}, []), N = React$1.useCallback(function(e) {
		var D = e;
		if (!(!lockStack.length || lockStack[lockStack.length - 1] !== A)) {
			var O = "deltaY" in D ? getDeltaXY(D) : getTouchXY(D), k = E.current.filter(function(e) {
				return e.name === D.type && (e.target === D.target || D.target === e.shadowParent) && deltaCompare(e.delta, O);
			})[0];
			if (k && k.should) {
				D.cancelable && D.preventDefault();
				return;
			}
			if (!k) {
				var N = (j.current.shards || []).map(extractRef).filter(Boolean).filter(function(e) {
					return e.contains(D.target);
				});
				(N.length > 0 ? M(D, N[0]) : !j.current.noIsolation) && D.cancelable && D.preventDefault();
			}
		}
	}, []), P = React$1.useCallback(function(e, D, O, k) {
		var A = {
			name: e,
			delta: D,
			target: O,
			should: k,
			shadowParent: getOutermostShadowParent(O)
		};
		E.current.push(A), setTimeout(function() {
			E.current = E.current.filter(function(e) {
				return e !== A;
			});
		}, 1);
	}, []), F = React$1.useCallback(function(e) {
		D.current = getTouchXY(e), O.current = void 0;
	}, []), I = React$1.useCallback(function(E) {
		P(E.type, getDeltaXY(E), E.target, M(E, e.lockRef.current));
	}, []), L = React$1.useCallback(function(E) {
		P(E.type, getTouchXY(E), E.target, M(E, e.lockRef.current));
	}, []);
	React$1.useEffect(function() {
		return lockStack.push(A), e.setCallbacks({
			onScrollCapture: I,
			onWheelCapture: I,
			onTouchMoveCapture: L
		}), document.addEventListener("wheel", N, nonPassive), document.addEventListener("touchmove", N, nonPassive), document.addEventListener("touchstart", F, nonPassive), function() {
			lockStack = lockStack.filter(function(e) {
				return e !== A;
			}), document.removeEventListener("wheel", N, nonPassive), document.removeEventListener("touchmove", N, nonPassive), document.removeEventListener("touchstart", F, nonPassive);
		};
	}, []);
	var R = e.removeScrollBar, z = e.inert;
	return React$1.createElement(React$1.Fragment, null, z ? React$1.createElement(A, { styles: generateStyle(k) }) : null, R ? React$1.createElement(RemoveScrollBar, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function getOutermostShadowParent(e) {
	for (var E = null; e !== null;) e instanceof ShadowRoot && (E = e.host, e = e.host), e = e.parentNode;
	return E;
}
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar), ReactRemoveScroll = React$1.forwardRef(function(e, E) {
	return React$1.createElement(RemoveScroll, __assign({}, e, {
		ref: E,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll, POPOVER_NAME = "Popover", [createPopoverContext, createPopoverScope] = createContextScope$2(POPOVER_NAME, [createPopperScope]), usePopperScope = createPopperScope(), [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME), Popover$1 = (e) => {
	let { __scopePopover: E, children: D, open: O, defaultOpen: k, onOpenChange: A, modal: j = !1 } = e, F = usePopperScope(E), I = React$1.useRef(null), [L, R] = React$1.useState(!1), [z, B] = useControllableState({
		prop: O,
		defaultProp: k ?? !1,
		onChange: A,
		caller: POPOVER_NAME
	});
	return /* @__PURE__ */ jsx(Root2$1, {
		...F,
		children: /* @__PURE__ */ jsx(PopoverProvider, {
			scope: E,
			contentId: useId$1(),
			triggerRef: I,
			open: z,
			onOpenChange: B,
			onOpenToggle: React$1.useCallback(() => B((e) => !e), [B]),
			hasCustomAnchor: L,
			onCustomAnchorAdd: React$1.useCallback(() => R(!0), []),
			onCustomAnchorRemove: React$1.useCallback(() => R(!1), []),
			modal: j,
			children: D
		})
	});
};
Popover$1.displayName = POPOVER_NAME;
var ANCHOR_NAME = "PopoverAnchor", PopoverAnchor$1 = React$1.forwardRef((e, E) => {
	let { __scopePopover: D, ...O } = e, k = usePopoverContext(ANCHOR_NAME, D), A = usePopperScope(D), { onCustomAnchorAdd: j, onCustomAnchorRemove: M } = k;
	return React$1.useEffect(() => (j(), () => M()), [j, M]), /* @__PURE__ */ jsx(Anchor, {
		...A,
		...O,
		ref: E
	});
});
PopoverAnchor$1.displayName = ANCHOR_NAME;
var TRIGGER_NAME = "PopoverTrigger", PopoverTrigger$1 = React$1.forwardRef((e, E) => {
	let { __scopePopover: D, ...O } = e, k = usePopoverContext(TRIGGER_NAME, D), A = usePopperScope(D), j = useComposedRefs(E, k.triggerRef), M = /* @__PURE__ */ jsx(Primitive$1.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": k.open,
		"aria-controls": k.contentId,
		"data-state": getState(k.open),
		...O,
		ref: j,
		onClick: composeEventHandlers(e.onClick, k.onOpenToggle)
	});
	return k.hasCustomAnchor ? M : /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...A,
		children: M
	});
});
PopoverTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "PopoverPortal", [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, { forceMount: void 0 }), PopoverPortal = (e) => {
	let { __scopePopover: E, forceMount: D, children: O, container: k } = e, A = usePopoverContext(PORTAL_NAME, E);
	return /* @__PURE__ */ jsx(PortalProvider, {
		scope: E,
		forceMount: D,
		children: /* @__PURE__ */ jsx(Presence, {
			present: D || A.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: k,
				children: O
			})
		})
	});
};
PopoverPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "PopoverContent", PopoverContent$1 = React$1.forwardRef((e, E) => {
	let D = usePortalContext(CONTENT_NAME, e.__scopePopover), { forceMount: O = D.forceMount, ...k } = e, A = usePopoverContext(CONTENT_NAME, e.__scopePopover);
	return /* @__PURE__ */ jsx(Presence, {
		present: O || A.open,
		children: A.modal ? /* @__PURE__ */ jsx(PopoverContentModal, {
			...k,
			ref: E
		}) : /* @__PURE__ */ jsx(PopoverContentNonModal, {
			...k,
			ref: E
		})
	});
});
PopoverContent$1.displayName = CONTENT_NAME;
var Slot = /* @__PURE__ */ createSlot$2("PopoverContent.RemoveScroll"), PopoverContentModal = React$1.forwardRef((e, E) => {
	let D = usePopoverContext(CONTENT_NAME, e.__scopePopover), O = React$1.useRef(null), k = useComposedRefs(E, O), A = React$1.useRef(!1);
	return React$1.useEffect(() => {
		let e = O.current;
		if (e) return hideOthers(e);
	}, []), /* @__PURE__ */ jsx(Combination_default, {
		as: Slot,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ jsx(PopoverContentImpl, {
			...e,
			ref: k,
			trapFocus: D.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: composeEventHandlers(e.onCloseAutoFocus, (e) => {
				e.preventDefault(), A.current || D.triggerRef.current?.focus();
			}),
			onPointerDownOutside: composeEventHandlers(e.onPointerDownOutside, (e) => {
				let E = e.detail.originalEvent, D = E.button === 0 && E.ctrlKey === !0;
				A.current = E.button === 2 || D;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: composeEventHandlers(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), PopoverContentNonModal = React$1.forwardRef((e, E) => {
	let D = usePopoverContext(CONTENT_NAME, e.__scopePopover), O = React$1.useRef(!1), k = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(PopoverContentImpl, {
		...e,
		ref: E,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (E) => {
			e.onCloseAutoFocus?.(E), E.defaultPrevented || (O.current || D.triggerRef.current?.focus(), E.preventDefault()), O.current = !1, k.current = !1;
		},
		onInteractOutside: (E) => {
			e.onInteractOutside?.(E), E.defaultPrevented || (O.current = !0, E.detail.originalEvent.type === "pointerdown" && (k.current = !0));
			let A = E.target;
			D.triggerRef.current?.contains(A) && E.preventDefault(), E.detail.originalEvent.type === "focusin" && k.current && E.preventDefault();
		}
	});
}), PopoverContentImpl = React$1.forwardRef((e, E) => {
	let { __scopePopover: D, trapFocus: O, onOpenAutoFocus: k, onCloseAutoFocus: A, disableOutsidePointerEvents: M, onEscapeKeyDown: N, onPointerDownOutside: P, onFocusOutside: F, onInteractOutside: L, ...R } = e, z = usePopoverContext(CONTENT_NAME, D), B = usePopperScope(D);
	return useFocusGuards(), /* @__PURE__ */ jsx(FocusScope, {
		asChild: !0,
		loop: !0,
		trapped: O,
		onMountAutoFocus: k,
		onUnmountAutoFocus: A,
		children: /* @__PURE__ */ jsx(DismissableLayer, {
			asChild: !0,
			disableOutsidePointerEvents: M,
			onInteractOutside: L,
			onEscapeKeyDown: N,
			onPointerDownOutside: P,
			onFocusOutside: F,
			onDismiss: () => z.onOpenChange(!1),
			children: /* @__PURE__ */ jsx(Content, {
				"data-state": getState(z.open),
				role: "dialog",
				id: z.contentId,
				...B,
				...R,
				ref: E,
				style: {
					...R.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}), CLOSE_NAME = "PopoverClose", PopoverClose = React$1.forwardRef((e, E) => {
	let { __scopePopover: D, ...O } = e, k = usePopoverContext(CLOSE_NAME, D);
	return /* @__PURE__ */ jsx(Primitive$1.button, {
		type: "button",
		...O,
		ref: E,
		onClick: composeEventHandlers(e.onClick, () => k.onOpenChange(!1))
	});
});
PopoverClose.displayName = CLOSE_NAME;
var ARROW_NAME = "PopoverArrow", PopoverArrow = React$1.forwardRef((e, E) => {
	let { __scopePopover: D, ...O } = e;
	return /* @__PURE__ */ jsx(Arrow, {
		...usePopperScope(D),
		...O,
		ref: E
	});
});
PopoverArrow.displayName = ARROW_NAME;
function getState(e) {
	return e ? "open" : "closed";
}
var Root2 = Popover$1, Anchor2 = PopoverAnchor$1, Trigger = PopoverTrigger$1, Portal$1 = PopoverPortal, Content2 = PopoverContent$1;
function Popover({ ...e }) {
	return /* @__PURE__ */ jsx(Root2, {
		"data-slot": "popover",
		...e
	});
}
var PopoverTrigger = React$1.forwardRef(({ ...e }, E) => /* @__PURE__ */ jsx(Trigger, {
	"data-slot": "popover-trigger",
	...e,
	ref: E
}));
PopoverTrigger.displayName = Trigger.displayName;
var PopoverContent = React$1.forwardRef(({ className: e, align: E = "center", sideOffset: D = 4, ...O }, A) => /* @__PURE__ */ jsx(Portal$1, { children: /* @__PURE__ */ jsx(Content2, {
	ref: A,
	"data-slot": "popover-content",
	align: E,
	sideOffset: D,
	className: cn("chatbot-theme bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", e),
	...O
}) }));
PopoverContent.displayName = Content2.displayName;
var PopoverAnchor = React$1.forwardRef(({ ...e }, E) => /* @__PURE__ */ jsx(Anchor2, {
	"data-slot": "popover-anchor",
	...e,
	ref: E
}));
PopoverAnchor.displayName = Anchor2.displayName;
function clamp(e, [E, D]) {
	return Math.min(D, Math.max(E, e));
}
function createContextScope(e, E = []) {
	let D = [];
	function O(E, O) {
		let k = React$1.createContext(O), A = D.length;
		D = [...D, O];
		let j = (E) => {
			let { scope: D, children: O, ...j } = E, M = D?.[e]?.[A] || k, N = React$1.useMemo(() => j, Object.values(j));
			return /* @__PURE__ */ jsx(M.Provider, {
				value: N,
				children: O
			});
		};
		j.displayName = E + "Provider";
		function M(D, j) {
			let M = j?.[e]?.[A] || k, N = React$1.useContext(M);
			if (N) return N;
			if (O !== void 0) return O;
			throw Error(`\`${D}\` must be used within \`${E}\``);
		}
		return [j, M];
	}
	let k = () => {
		let E = D.map((e) => React$1.createContext(e));
		return function(D) {
			let O = D?.[e] || E;
			return React$1.useMemo(() => ({ [`__scope${e}`]: {
				...D,
				[e]: O
			} }), [D, O]);
		};
	};
	return k.scopeName = e, [O, composeContextScopes$1(k, ...E)];
}
function composeContextScopes$1(...e) {
	let E = e[0];
	if (e.length === 1) return E;
	let D = () => {
		let D = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let O = D.reduce((E, { useScope: D, scopeName: O }) => {
				let k = D(e)[`__scope${O}`];
				return {
					...E,
					...k
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${E.scopeName}`]: O }), [O]);
		};
	};
	return D.scopeName = E.scopeName, D;
}
var DirectionContext = React$1.createContext(void 0);
function useDirection(e) {
	let E = React$1.useContext(DirectionContext);
	return e || E || "ltr";
}
function usePrevious(e) {
	let E = React$1.useRef({
		value: e,
		previous: e
	});
	return React$1.useMemo(() => (E.current.value !== e && (E.current.previous = E.current.value, E.current.value = e), E.current.previous), [e]);
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$1(e) {
	let E = /* @__PURE__ */ createSlotClone$1(e), D = React$1.forwardRef((e, D) => {
		let { children: O, ...k } = e, A = React$1.Children.toArray(O), j = A.find(isSlottable$1);
		if (j) {
			let e = j.props.children, O = A.map((E) => E === j ? React$1.Children.count(e) > 1 ? React$1.Children.only(null) : React$1.isValidElement(e) ? e.props.children : null : E);
			return /* @__PURE__ */ jsx(E, {
				...k,
				ref: D,
				children: React$1.isValidElement(e) ? React$1.cloneElement(e, void 0, O) : null
			});
		}
		return /* @__PURE__ */ jsx(E, {
			...k,
			ref: D,
			children: O
		});
	});
	return D.displayName = `${e}.Slot`, D;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$1(e) {
	let D = React$1.forwardRef((e, D) => {
		let { children: O, ...k } = e;
		if (React$1.isValidElement(O)) {
			let e = getElementRef$1(O), A = mergeProps$1(k, O.props);
			return O.type !== React$1.Fragment && (A.ref = D ? composeRefs(D, e) : e), React$1.cloneElement(O, A);
		}
		return React$1.Children.count(O) > 1 ? React$1.Children.only(null) : null;
	});
	return D.displayName = `${e}.SlotClone`, D;
}
var SLOTTABLE_IDENTIFIER$1 = Symbol("radix.slottable");
function isSlottable$1(e) {
	return React$1.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
function mergeProps$1(e, E) {
	let D = { ...E };
	for (let O in E) {
		let k = e[O], A = E[O];
		/^on[A-Z]/.test(O) ? k && A ? D[O] = (...e) => {
			let E = A(...e);
			return k(...e), E;
		} : k && (D[O] = k) : O === "style" ? D[O] = {
			...k,
			...A
		} : O === "className" && (D[O] = [k, A].filter(Boolean).join(" "));
	}
	return {
		...e,
		...D
	};
}
function getElementRef$1(e) {
	let E = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, D = E && "isReactWarning" in E && E.isReactWarning;
	return D ? e.ref : (E = Object.getOwnPropertyDescriptor(e, "ref")?.get, D = E && "isReactWarning" in E && E.isReactWarning, D ? e.props.ref : e.props.ref || e.ref);
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
].reduce((e, E) => {
	let D = /* @__PURE__ */ createSlot$1(`Primitive.${E}`), O = React$1.forwardRef((e, O) => {
		let { asChild: k, ...A } = e, j = k ? D : E;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(j, {
			...A,
			ref: O
		});
	});
	return O.displayName = `Primitive.${E}`, {
		...e,
		[E]: O
	};
}, {});
function createContextScope$1(e, E = []) {
	let D = [];
	function O(E, O) {
		let k = React$1.createContext(O), A = D.length;
		D = [...D, O];
		let j = (E) => {
			let { scope: D, children: O, ...j } = E, M = D?.[e]?.[A] || k, N = React$1.useMemo(() => j, Object.values(j));
			return /* @__PURE__ */ jsx(M.Provider, {
				value: N,
				children: O
			});
		};
		j.displayName = E + "Provider";
		function M(D, j) {
			let M = j?.[e]?.[A] || k, N = React$1.useContext(M);
			if (N) return N;
			if (O !== void 0) return O;
			throw Error(`\`${D}\` must be used within \`${E}\``);
		}
		return [j, M];
	}
	let k = () => {
		let E = D.map((e) => React$1.createContext(e));
		return function(D) {
			let O = D?.[e] || E;
			return React$1.useMemo(() => ({ [`__scope${e}`]: {
				...D,
				[e]: O
			} }), [D, O]);
		};
	};
	return k.scopeName = e, [O, composeContextScopes(k, ...E)];
}
function composeContextScopes(...e) {
	let E = e[0];
	if (e.length === 1) return E;
	let D = () => {
		let D = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let O = D.reduce((E, { useScope: D, scopeName: O }) => {
				let k = D(e)[`__scope${O}`];
				return {
					...E,
					...k
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${E.scopeName}`]: O }), [O]);
		};
	};
	return D.scopeName = E.scopeName, D;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot(e) {
	let E = /* @__PURE__ */ createSlotClone(e), D = React$1.forwardRef((e, D) => {
		let { children: O, ...k } = e, A = React$1.Children.toArray(O), j = A.find(isSlottable);
		if (j) {
			let e = j.props.children, O = A.map((E) => E === j ? React$1.Children.count(e) > 1 ? React$1.Children.only(null) : React$1.isValidElement(e) ? e.props.children : null : E);
			return /* @__PURE__ */ jsx(E, {
				...k,
				ref: D,
				children: React$1.isValidElement(e) ? React$1.cloneElement(e, void 0, O) : null
			});
		}
		return /* @__PURE__ */ jsx(E, {
			...k,
			ref: D,
			children: O
		});
	});
	return D.displayName = `${e}.Slot`, D;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(e) {
	let D = React$1.forwardRef((e, D) => {
		let { children: O, ...k } = e;
		if (React$1.isValidElement(O)) {
			let e = getElementRef(O), A = mergeProps(k, O.props);
			return O.type !== React$1.Fragment && (A.ref = D ? composeRefs(D, e) : e), React$1.cloneElement(O, A);
		}
		return React$1.Children.count(O) > 1 ? React$1.Children.only(null) : null;
	});
	return D.displayName = `${e}.SlotClone`, D;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(e) {
	return React$1.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(e, E) {
	let D = { ...E };
	for (let O in E) {
		let k = e[O], A = E[O];
		/^on[A-Z]/.test(O) ? k && A ? D[O] = (...e) => {
			let E = A(...e);
			return k(...e), E;
		} : k && (D[O] = k) : O === "style" ? D[O] = {
			...k,
			...A
		} : O === "className" && (D[O] = [k, A].filter(Boolean).join(" "));
	}
	return {
		...e,
		...D
	};
}
function getElementRef(e) {
	let E = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, D = E && "isReactWarning" in E && E.isReactWarning;
	return D ? e.ref : (E = Object.getOwnPropertyDescriptor(e, "ref")?.get, D = E && "isReactWarning" in E && E.isReactWarning, D ? e.props.ref : e.props.ref || e.ref);
}
function createCollection(e) {
	let E = e + "CollectionProvider", [D, O] = createContextScope$1(E), [k, A] = D(E, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), j = (e) => {
		let { scope: E, children: D } = e, O = React.useRef(null), A = React.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ jsx(k, {
			scope: E,
			itemMap: A,
			collectionRef: O,
			children: D
		});
	};
	j.displayName = E;
	let M = e + "CollectionSlot", N = /* @__PURE__ */ createSlot(M), P = React.forwardRef((e, E) => {
		let { scope: D, children: O } = e;
		return /* @__PURE__ */ jsx(N, {
			ref: useComposedRefs(E, A(M, D).collectionRef),
			children: O
		});
	});
	P.displayName = M;
	let F = e + "CollectionItemSlot", I = "data-radix-collection-item", L = /* @__PURE__ */ createSlot(F), z = React.forwardRef((e, E) => {
		let { scope: D, children: O, ...k } = e, j = React.useRef(null), M = useComposedRefs(E, j), N = A(F, D);
		return React.useEffect(() => (N.itemMap.set(j, {
			ref: j,
			...k
		}), () => void N.itemMap.delete(j))), /* @__PURE__ */ jsx(L, {
			[I]: "",
			ref: M,
			children: O
		});
	});
	z.displayName = F;
	function B(E) {
		let D = A(e + "CollectionConsumer", E);
		return React.useCallback(() => {
			let e = D.collectionRef.current;
			if (!e) return [];
			let E = Array.from(e.querySelectorAll(`[${I}]`));
			return Array.from(D.itemMap.values()).sort((e, D) => E.indexOf(e.ref.current) - E.indexOf(D.ref.current));
		}, [D.collectionRef, D.itemMap]);
	}
	return [
		{
			Provider: j,
			Slot: P,
			ItemSlot: z
		},
		B,
		O
	];
}
var PAGE_KEYS = ["PageUp", "PageDown"], ARROW_KEYS = [
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
}, SLIDER_NAME = "Slider", [Collection, useCollection, createCollectionScope] = createCollection(SLIDER_NAME), [createSliderContext, createSliderScope] = createContextScope(SLIDER_NAME, [createCollectionScope]), [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME), Slider$1 = React$1.forwardRef((e, E) => {
	let { name: D, min: O = 0, max: k = 100, step: A = 1, orientation: j = "horizontal", disabled: M = !1, minStepsBetweenThumbs: N = 0, defaultValue: F = [O], value: I, onValueChange: L = () => {}, onValueCommit: R = () => {}, inverted: z = !1, form: B, ...V } = e, H = React$1.useRef(/* @__PURE__ */ new Set()), W = React$1.useRef(0), G = j === "horizontal" ? SliderHorizontal : SliderVertical, [K = [], q] = useControllableState({
		prop: I,
		defaultProp: F,
		onChange: (e) => {
			[...H.current][W.current]?.focus(), L(e);
		}
	}), Y = React$1.useRef(K);
	function X(e) {
		$(e, getClosestValueIndex(K, e));
	}
	function Z(e) {
		$(e, W.current);
	}
	function Q() {
		let e = Y.current[W.current];
		K[W.current] !== e && R(K);
	}
	function $(e, E, { commit: D } = { commit: !1 }) {
		let j = getDecimalCount(A), M = clamp(roundValue(Math.round((e - O) / A) * A + O, j), [O, k]);
		q((e = []) => {
			let O = getNextSortedValues(e, M, E);
			if (hasMinStepsBetweenValues(O, N * A)) {
				W.current = O.indexOf(M);
				let E = String(O) !== String(e);
				return E && D && R(O), E ? O : e;
			} else return e;
		});
	}
	return /* @__PURE__ */ jsx(SliderProvider, {
		scope: e.__scopeSlider,
		name: D,
		disabled: M,
		min: O,
		max: k,
		valueIndexToChangeRef: W,
		thumbs: H.current,
		values: K,
		orientation: j,
		form: B,
		children: /* @__PURE__ */ jsx(Collection.Provider, {
			scope: e.__scopeSlider,
			children: /* @__PURE__ */ jsx(Collection.Slot, {
				scope: e.__scopeSlider,
				children: /* @__PURE__ */ jsx(G, {
					"aria-disabled": M,
					"data-disabled": M ? "" : void 0,
					...V,
					ref: E,
					onPointerDown: composeEventHandlers(V.onPointerDown, () => {
						M || (Y.current = K);
					}),
					min: O,
					max: k,
					inverted: z,
					onSlideStart: M ? void 0 : X,
					onSlideMove: M ? void 0 : Z,
					onSlideEnd: M ? void 0 : Q,
					onHomeKeyDown: () => !M && $(O, 0, { commit: !0 }),
					onEndKeyDown: () => !M && $(k, K.length - 1, { commit: !0 }),
					onStepKeyDown: ({ event: e, direction: E }) => {
						if (!M) {
							let D = PAGE_KEYS.includes(e.key) || e.shiftKey && ARROW_KEYS.includes(e.key) ? 10 : 1, O = W.current, k = K[O];
							$(k + A * D * E, O, { commit: !0 });
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
}), SliderHorizontal = React$1.forwardRef((e, E) => {
	let { min: D, max: O, dir: k, inverted: A, onSlideStart: j, onSlideMove: M, onSlideEnd: N, onStepKeyDown: P, ...F } = e, [I, L] = React$1.useState(null), z = useComposedRefs(E, (e) => L(e)), B = React$1.useRef(void 0), V = useDirection(k), H = V === "ltr", U = H && !A || !H && A;
	function W(e) {
		let E = B.current || I.getBoundingClientRect(), k = linearScale([0, E.width], U ? [D, O] : [O, D]);
		return B.current = E, k(e - E.left);
	}
	return /* @__PURE__ */ jsx(SliderOrientationProvider, {
		scope: e.__scopeSlider,
		startEdge: U ? "left" : "right",
		endEdge: U ? "right" : "left",
		direction: U ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ jsx(SliderImpl, {
			dir: V,
			"data-orientation": "horizontal",
			...F,
			ref: z,
			style: {
				...F.style,
				"--radix-slider-thumb-transform": "translateX(-50%)"
			},
			onSlideStart: (e) => {
				let E = W(e.clientX);
				j?.(E);
			},
			onSlideMove: (e) => {
				let E = W(e.clientX);
				M?.(E);
			},
			onSlideEnd: () => {
				B.current = void 0, N?.();
			},
			onStepKeyDown: (e) => {
				let E = BACK_KEYS[U ? "from-left" : "from-right"].includes(e.key);
				P?.({
					event: e,
					direction: E ? -1 : 1
				});
			}
		})
	});
}), SliderVertical = React$1.forwardRef((e, E) => {
	let { min: D, max: O, inverted: k, onSlideStart: A, onSlideMove: j, onSlideEnd: M, onStepKeyDown: N, ...P } = e, F = React$1.useRef(null), I = useComposedRefs(E, F), L = React$1.useRef(void 0), z = !k;
	function B(e) {
		let E = L.current || F.current.getBoundingClientRect(), k = linearScale([0, E.height], z ? [O, D] : [D, O]);
		return L.current = E, k(e - E.top);
	}
	return /* @__PURE__ */ jsx(SliderOrientationProvider, {
		scope: e.__scopeSlider,
		startEdge: z ? "bottom" : "top",
		endEdge: z ? "top" : "bottom",
		size: "height",
		direction: z ? 1 : -1,
		children: /* @__PURE__ */ jsx(SliderImpl, {
			"data-orientation": "vertical",
			...P,
			ref: I,
			style: {
				...P.style,
				"--radix-slider-thumb-transform": "translateY(50%)"
			},
			onSlideStart: (e) => {
				let E = B(e.clientY);
				A?.(E);
			},
			onSlideMove: (e) => {
				let E = B(e.clientY);
				j?.(E);
			},
			onSlideEnd: () => {
				L.current = void 0, M?.();
			},
			onStepKeyDown: (e) => {
				let E = BACK_KEYS[z ? "from-bottom" : "from-top"].includes(e.key);
				N?.({
					event: e,
					direction: E ? -1 : 1
				});
			}
		})
	});
}), SliderImpl = React$1.forwardRef((e, E) => {
	let { __scopeSlider: D, onSlideStart: O, onSlideMove: k, onSlideEnd: A, onHomeKeyDown: j, onEndKeyDown: M, onStepKeyDown: N, ...P } = e, F = useSliderContext(SLIDER_NAME, D);
	return /* @__PURE__ */ jsx(Primitive.span, {
		...P,
		ref: E,
		onKeyDown: composeEventHandlers(e.onKeyDown, (e) => {
			e.key === "Home" ? (j(e), e.preventDefault()) : e.key === "End" ? (M(e), e.preventDefault()) : PAGE_KEYS.concat(ARROW_KEYS).includes(e.key) && (N(e), e.preventDefault());
		}),
		onPointerDown: composeEventHandlers(e.onPointerDown, (e) => {
			let E = e.target;
			E.setPointerCapture(e.pointerId), e.preventDefault(), F.thumbs.has(E) ? E.focus() : O(e);
		}),
		onPointerMove: composeEventHandlers(e.onPointerMove, (e) => {
			e.target.hasPointerCapture(e.pointerId) && k(e);
		}),
		onPointerUp: composeEventHandlers(e.onPointerUp, (e) => {
			let E = e.target;
			E.hasPointerCapture(e.pointerId) && (E.releasePointerCapture(e.pointerId), A(e));
		})
	});
}), TRACK_NAME = "SliderTrack", SliderTrack = React$1.forwardRef((e, E) => {
	let { __scopeSlider: D, ...O } = e, k = useSliderContext(TRACK_NAME, D);
	return /* @__PURE__ */ jsx(Primitive.span, {
		"data-disabled": k.disabled ? "" : void 0,
		"data-orientation": k.orientation,
		...O,
		ref: E
	});
});
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange", SliderRange = React$1.forwardRef((e, E) => {
	let { __scopeSlider: D, ...O } = e, k = useSliderContext(RANGE_NAME, D), A = useSliderOrientationContext(RANGE_NAME, D), j = useComposedRefs(E, React$1.useRef(null)), M = k.values.length, N = k.values.map((e) => convertValueToPercentage(e, k.min, k.max)), P = M > 1 ? Math.min(...N) : 0, F = 100 - Math.max(...N);
	return /* @__PURE__ */ jsx(Primitive.span, {
		"data-orientation": k.orientation,
		"data-disabled": k.disabled ? "" : void 0,
		...O,
		ref: j,
		style: {
			...e.style,
			[A.startEdge]: P + "%",
			[A.endEdge]: F + "%"
		}
	});
});
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME = "SliderThumb", SliderThumb = React$1.forwardRef((e, E) => {
	let D = useCollection(e.__scopeSlider), [O, k] = React$1.useState(null), A = useComposedRefs(E, (e) => k(e)), j = React$1.useMemo(() => O ? D().findIndex((e) => e.ref.current === O) : -1, [D, O]);
	return /* @__PURE__ */ jsx(SliderThumbImpl, {
		...e,
		ref: A,
		index: j
	});
}), SliderThumbImpl = React$1.forwardRef((e, E) => {
	let { __scopeSlider: D, index: O, name: k, ...A } = e, j = useSliderContext(THUMB_NAME, D), M = useSliderOrientationContext(THUMB_NAME, D), [N, P] = React$1.useState(null), F = useComposedRefs(E, (e) => P(e)), I = N ? j.form || !!N.closest("form") : !0, L = useSize(N), z = j.values[O], B = z === void 0 ? 0 : convertValueToPercentage(z, j.min, j.max), V = getLabel(O, j.values.length), H = L?.[M.size], G = H ? getThumbInBoundsOffset(H, B, M.direction) : 0;
	return React$1.useEffect(() => {
		if (N) return j.thumbs.add(N), () => {
			j.thumbs.delete(N);
		};
	}, [N, j.thumbs]), /* @__PURE__ */ jsxs("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[M.startEdge]: `calc(${B}% + ${G}px)`
		},
		children: [/* @__PURE__ */ jsx(Collection.ItemSlot, {
			scope: e.__scopeSlider,
			children: /* @__PURE__ */ jsx(Primitive.span, {
				role: "slider",
				"aria-label": e["aria-label"] || V,
				"aria-valuemin": j.min,
				"aria-valuenow": z,
				"aria-valuemax": j.max,
				"aria-orientation": j.orientation,
				"data-orientation": j.orientation,
				"data-disabled": j.disabled ? "" : void 0,
				tabIndex: j.disabled ? void 0 : 0,
				...A,
				ref: F,
				style: z === void 0 ? { display: "none" } : e.style,
				onFocus: composeEventHandlers(e.onFocus, () => {
					j.valueIndexToChangeRef.current = O;
				})
			})
		}), I && /* @__PURE__ */ jsx(SliderBubbleInput, {
			name: k ?? (j.name ? j.name + (j.values.length > 1 ? "[]" : "") : void 0),
			form: j.form,
			value: z
		}, O)]
	});
});
SliderThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "RadioBubbleInput", SliderBubbleInput = React$1.forwardRef(({ __scopeSlider: e, value: E, ...D }, O) => {
	let k = React$1.useRef(null), A = useComposedRefs(k, O), j = usePrevious(E);
	return React$1.useEffect(() => {
		let e = k.current;
		if (!e) return;
		let D = window.HTMLInputElement.prototype, O = Object.getOwnPropertyDescriptor(D, "value").set;
		if (j !== E && O) {
			let D = new Event("input", { bubbles: !0 });
			O.call(e, E), e.dispatchEvent(D);
		}
	}, [j, E]), /* @__PURE__ */ jsx(Primitive.input, {
		style: { display: "none" },
		...D,
		ref: A,
		defaultValue: E
	});
});
SliderBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getNextSortedValues(e = [], E, D) {
	let O = [...e];
	return O[D] = E, O.sort((e, E) => e - E);
}
function convertValueToPercentage(e, E, D) {
	return clamp(100 / (D - E) * (e - E), [0, 100]);
}
function getLabel(e, E) {
	if (E > 2) return `Value ${e + 1} of ${E}`;
	if (E === 2) return ["Minimum", "Maximum"][e];
}
function getClosestValueIndex(e, E) {
	if (e.length === 1) return 0;
	let D = e.map((e) => Math.abs(e - E)), O = Math.min(...D);
	return D.indexOf(O);
}
function getThumbInBoundsOffset(e, E, D) {
	let O = e / 2;
	return (O - linearScale([0, 50], [0, O])(E) * D) * D;
}
function getStepsBetweenValues(e) {
	return e.slice(0, -1).map((E, D) => e[D + 1] - E);
}
function hasMinStepsBetweenValues(e, E) {
	if (E > 0) {
		let D = getStepsBetweenValues(e);
		return Math.min(...D) >= E;
	}
	return !0;
}
function linearScale(e, E) {
	return (D) => {
		if (e[0] === e[1] || E[0] === E[1]) return E[0];
		let O = (E[1] - E[0]) / (e[1] - e[0]);
		return E[0] + O * (D - e[0]);
	};
}
function getDecimalCount(e) {
	return (String(e).split(".")[1] || "").length;
}
function roundValue(e, E) {
	let D = 10 ** E;
	return Math.round(e * D) / D;
}
var Root = Slider$1, Track = SliderTrack, Range = SliderRange, Thumb = SliderThumb, Slider = React$1.forwardRef(({ className: e, defaultValue: E, value: D, min: O = 0, max: A = 100, ...j }, M) => {
	let N = React$1.useMemo(() => Array.isArray(D) ? D : Array.isArray(E) ? E : [O, A], [
		D,
		E,
		O,
		A
	]);
	return /* @__PURE__ */ jsxs(Root, {
		ref: M,
		"data-slot": "slider",
		defaultValue: E,
		value: D,
		min: O,
		max: A,
		className: cn("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", e),
		...j,
		children: [/* @__PURE__ */ jsx(Track, {
			"data-slot": "slider-track",
			className: cn("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),
			children: /* @__PURE__ */ jsx(Range, {
				"data-slot": "slider-range",
				className: cn("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
			})
		}), Array.from({ length: N.length }, (e, E) => /* @__PURE__ */ jsx(Thumb, {
			"data-slot": "slider-thumb",
			className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
		}, E))]
	});
});
Slider.displayName = Root.displayName;
export { Sparkles as _, clamp as a, PopoverTrigger as c, FocusScope as d, useFocusGuards as f, Volume2 as g, Zap as h, useDirection as i, Combination_default as l, Primitive$3 as m, createCollection as n, Popover as o, Badge as p, usePrevious as r, PopoverContent as s, Slider as t, hideOthers as u, ChevronRight as v };
