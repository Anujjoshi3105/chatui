import { A as Slot$1, C as dispatchDiscreteCustomEvent, D as Button, E as composeEventHandlers, F as createLucideIcon, M as composeRefs, N as useComposedRefs, O as cn, P as Check, R as __toCommonJS, S as Primitive, T as createContextScope, _ as useSize, a as TooltipContent, b as DismissableLayer, c as VISUALLY_HIDDEN_STYLES, d as Portal, f as Anchor, g as createPopperScope, h as Root2$3, i as Tooltip, j as createSlot$1, k as cva, l as useControllableState, m as Content$1, n as init_is_prop_valid_framer_motion, o as TooltipProvider, p as Arrow, r as is_prop_valid_framer_motion_exports, s as TooltipTrigger, t as CopyButton, u as Presence, v as useId$1, w as createContext2, x as useCallbackRef, y as useLayoutEffect2 } from "./copy-button-DFMpATUJ.js";
import * as React$1 from "react";
import React, { Children, Component, Fragment, Suspense, createContext, createElement, forwardRef, isValidElement, memo, useCallback, useContext, useEffect, useId, useInsertionEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import * as ReactDOM$1 from "react-dom";
import { flushSync } from "react-dom";
import { useSyncExternalStore } from "use-sync-external-store/shim";
var Activity = createLucideIcon("activity", [["path", {
	d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
	key: "169zse"
}]]), ArrowDown = createLucideIcon("arrow-down", [["path", {
	d: "M12 5v14",
	key: "s699le"
}], ["path", {
	d: "m19 12-7 7-7-7",
	key: "1idqje"
}]]), Ban = createLucideIcon("ban", [["path", {
	d: "M4.929 4.929 19.07 19.071",
	key: "196cmz"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), Bot = createLucideIcon("bot", [
	["path", {
		d: "M12 8V4H8",
		key: "hb8ula"
	}],
	["rect", {
		width: "16",
		height: "12",
		x: "4",
		y: "8",
		rx: "2",
		key: "enze0r"
	}],
	["path", {
		d: "M2 14h2",
		key: "vft8re"
	}],
	["path", {
		d: "M20 14h2",
		key: "4cs60a"
	}],
	["path", {
		d: "M15 13v2",
		key: "1xurst"
	}],
	["path", {
		d: "M9 13v2",
		key: "rq6x2g"
	}]
]), ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), ChevronUp = createLucideIcon("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), Circle = createLucideIcon("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), Clock = createLucideIcon("clock", [["path", {
	d: "M12 6v6l4 2",
	key: "mmk7yg"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), CodeXml = createLucideIcon("code-xml", [
	["path", {
		d: "m18 16 4-4-4-4",
		key: "1inbqp"
	}],
	["path", {
		d: "m6 8-4 4 4 4",
		key: "15zrgr"
	}],
	["path", {
		d: "m14.5 4-5 16",
		key: "e7oirm"
	}]
]), File$1 = createLucideIcon("file", [["path", {
	d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
	key: "1oefj6"
}], ["path", {
	d: "M14 2v5a1 1 0 0 0 1 1h5",
	key: "wfsgrz"
}]]), History = createLucideIcon("history", [
	["path", {
		d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
		key: "1357e3"
	}],
	["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}],
	["path", {
		d: "M12 7v5l4 2",
		key: "1fdv2h"
	}]
]), House = createLucideIcon("house", [["path", {
	d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
	key: "5wwlr5"
}], ["path", {
	d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
	key: "r6nss1"
}]]), Info = createLucideIcon("info", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 16v-4",
		key: "1dtifu"
	}],
	["path", {
		d: "M12 8h.01",
		key: "e9boi3"
	}]
]), Languages = createLucideIcon("languages", [
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
]), LoaderCircle = createLucideIcon("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]), Maximize2 = createLucideIcon("maximize-2", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "m21 3-7 7",
		key: "1l2asr"
	}],
	["path", {
		d: "m3 21 7-7",
		key: "tjx5ai"
	}],
	["path", {
		d: "M9 21H3v-6",
		key: "wtvkvv"
	}]
]), MessageCircle = createLucideIcon("message-circle", [["path", {
	d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
	key: "1sd12s"
}]]), MessageSquare = createLucideIcon("message-square", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}]]), Mic = createLucideIcon("mic", [
	["path", {
		d: "M12 19v3",
		key: "npa21l"
	}],
	["path", {
		d: "M19 10v2a7 7 0 0 1-14 0v-2",
		key: "1vc78b"
	}],
	["rect", {
		x: "9",
		y: "2",
		width: "6",
		height: "13",
		rx: "3",
		key: "s6n7sd"
	}]
]), Minimize2 = createLucideIcon("minimize-2", [
	["path", {
		d: "m14 10 7-7",
		key: "oa77jy"
	}],
	["path", {
		d: "M20 10h-6V4",
		key: "mjg0md"
	}],
	["path", {
		d: "m3 21 7-7",
		key: "tjx5ai"
	}],
	["path", {
		d: "M4 14h6v6",
		key: "rmj7iw"
	}]
]), Paperclip = createLucideIcon("paperclip", [["path", {
	d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
	key: "1miecu"
}]]), RefreshCw = createLucideIcon("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]), RotateCcw = createLucideIcon("rotate-ccw", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]), Search = createLucideIcon("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), Settings = createLucideIcon("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), ShieldCheck = createLucideIcon("shield-check", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
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
]), Square = createLucideIcon("square", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}]]), Terminal = createLucideIcon("terminal", [["path", {
	d: "M12 19h8",
	key: "baeox8"
}], ["path", {
	d: "m4 17 6-6-6-6",
	key: "1yngyt"
}]]), ThumbsDown = createLucideIcon("thumbs-down", [["path", {
	d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
	key: "m61m77"
}], ["path", {
	d: "M17 14V2",
	key: "8ymqnk"
}]]), ThumbsUp = createLucideIcon("thumbs-up", [["path", {
	d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
	key: "emmmcr"
}], ["path", {
	d: "M7 10v12",
	key: "1qc93n"
}]]), Trash2 = createLucideIcon("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
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
]), X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), Zap = createLucideIcon("zap", [["path", {
	d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
	key: "1xq2db"
}]]), count = 0;
function useFocusGuards() {
	React$1.useEffect(() => {
		let i = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", i[0] ?? createFocusGuard()), document.body.insertAdjacentElement("beforeend", i[1] ?? createFocusGuard()), count++, () => {
			count === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((i) => i.remove()), count--;
		};
	}, []);
}
function createFocusGuard() {
	let i = document.createElement("span");
	return i.setAttribute("data-radix-focus-guard", ""), i.tabIndex = 0, i.style.outline = "none", i.style.opacity = "0", i.style.position = "fixed", i.style.pointerEvents = "none", i;
}
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount", AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount", EVENT_OPTIONS$1 = {
	bubbles: !1,
	cancelable: !0
}, FOCUS_SCOPE_NAME = "FocusScope", FocusScope = React$1.forwardRef((i, a) => {
	let { loop: o = !1, trapped: s = !1, onMountAutoFocus: c, onUnmountAutoFocus: l, ...d } = i, [f, p] = React$1.useState(null), h = useCallbackRef(c), g = useCallbackRef(l), _ = React$1.useRef(null), v = useComposedRefs(a, (i) => p(i)), y = React$1.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	React$1.useEffect(() => {
		if (s) {
			let i = function(i) {
				if (y.paused || !f) return;
				let a = i.target;
				f.contains(a) ? _.current = a : focus(_.current, { select: !0 });
			}, a = function(i) {
				if (y.paused || !f) return;
				let a = i.relatedTarget;
				a !== null && (f.contains(a) || focus(_.current, { select: !0 }));
			}, o = function(i) {
				if (document.activeElement === document.body) for (let a of i) a.removedNodes.length > 0 && focus(f);
			};
			document.addEventListener("focusin", i), document.addEventListener("focusout", a);
			let s = new MutationObserver(o);
			return f && s.observe(f, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", i), document.removeEventListener("focusout", a), s.disconnect();
			};
		}
	}, [
		s,
		f,
		y.paused
	]), React$1.useEffect(() => {
		if (f) {
			focusScopesStack.add(y);
			let i = document.activeElement;
			if (!f.contains(i)) {
				let a = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS$1);
				f.addEventListener(AUTOFOCUS_ON_MOUNT, h), f.dispatchEvent(a), a.defaultPrevented || (focusFirst$2(removeLinks(getTabbableCandidates(f)), { select: !0 }), document.activeElement === i && focus(f));
			}
			return () => {
				f.removeEventListener(AUTOFOCUS_ON_MOUNT, h), setTimeout(() => {
					let a = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS$1);
					f.addEventListener(AUTOFOCUS_ON_UNMOUNT, g), f.dispatchEvent(a), a.defaultPrevented || focus(i ?? document.body, { select: !0 }), f.removeEventListener(AUTOFOCUS_ON_UNMOUNT, g), focusScopesStack.remove(y);
				}, 0);
			};
		}
	}, [
		f,
		h,
		g,
		y
	]);
	let b = React$1.useCallback((i) => {
		if (!o && !s || y.paused) return;
		let a = i.key === "Tab" && !i.altKey && !i.ctrlKey && !i.metaKey, c = document.activeElement;
		if (a && c) {
			let a = i.currentTarget, [s, l] = getTabbableEdges(a);
			s && l ? !i.shiftKey && c === l ? (i.preventDefault(), o && focus(s, { select: !0 })) : i.shiftKey && c === s && (i.preventDefault(), o && focus(l, { select: !0 })) : c === a && i.preventDefault();
		}
	}, [
		o,
		s,
		y.paused
	]);
	return /* @__PURE__ */ jsx(Primitive.div, {
		tabIndex: -1,
		...d,
		ref: v,
		onKeyDown: b
	});
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst$2(i, { select: a = !1 } = {}) {
	let o = document.activeElement;
	for (let s of i) if (focus(s, { select: a }), document.activeElement !== o) return;
}
function getTabbableEdges(i) {
	let a = getTabbableCandidates(i);
	return [findVisible(a, i), findVisible(a.reverse(), i)];
}
function getTabbableCandidates(i) {
	let a = [], o = document.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, { acceptNode: (i) => {
		let a = i.tagName === "INPUT" && i.type === "hidden";
		return i.disabled || i.hidden || a ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; o.nextNode();) a.push(o.currentNode);
	return a;
}
function findVisible(i, a) {
	for (let o of i) if (!isHidden(o, { upTo: a })) return o;
}
function isHidden(i, { upTo: a }) {
	if (getComputedStyle(i).visibility === "hidden") return !0;
	for (; i;) {
		if (a !== void 0 && i === a) return !1;
		if (getComputedStyle(i).display === "none") return !0;
		i = i.parentElement;
	}
	return !1;
}
function isSelectableInput(i) {
	return i instanceof HTMLInputElement && "select" in i;
}
function focus(i, { select: a = !1 } = {}) {
	if (i && i.focus) {
		let o = document.activeElement;
		i.focus({ preventScroll: !0 }), i !== o && isSelectableInput(i) && a && i.select();
	}
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let i = [];
	return {
		add(a) {
			let o = i[0];
			a !== o && o?.pause(), i = arrayRemove(i, a), i.unshift(a);
		},
		remove(a) {
			i = arrayRemove(i, a), i[0]?.resume();
		}
	};
}
function arrayRemove(i, a) {
	let o = [...i], s = o.indexOf(a);
	return s !== -1 && o.splice(s, 1), o;
}
function removeLinks(i) {
	return i.filter((i) => i.tagName !== "A");
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$5(i) {
	let a = /* @__PURE__ */ createSlotClone$4(i), o = React$1.forwardRef((i, o) => {
		let { children: s, ...c } = i, l = React$1.Children.toArray(s), u = l.find(isSlottable$4);
		if (u) {
			let i = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(i) > 1 ? React$1.Children.only(null) : React$1.isValidElement(i) ? i.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(i) ? React$1.cloneElement(i, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${i}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$4(i) {
	let a = React$1.forwardRef((i, a) => {
		let { children: o, ...s } = i;
		if (React$1.isValidElement(o)) {
			let i = getElementRef$4(o), c = mergeProps$4(s, o.props);
			return o.type !== React$1.Fragment && (c.ref = a ? composeRefs(a, i) : i), React$1.cloneElement(o, c);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${i}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$4 = Symbol("radix.slottable");
function isSlottable$4(i) {
	return React$1.isValidElement(i) && typeof i.type == "function" && "__radixId" in i.type && i.type.__radixId === SLOTTABLE_IDENTIFIER$4;
}
function mergeProps$4(i, a) {
	let o = { ...a };
	for (let s in a) {
		let c = i[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...i) => {
			let a = l(...i);
			return c(...i), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...i,
		...o
	};
}
function getElementRef$4(i) {
	let a = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? i.ref : (a = Object.getOwnPropertyDescriptor(i, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? i.props.ref : i.props.ref || i.ref);
}
var getDefaultParent = function(i) {
	return typeof document > "u" ? null : (Array.isArray(i) ? i[0] : i).ownerDocument.body;
}, counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {}, lockCount = 0, unwrapHost = function(i) {
	return i && (i.host || unwrapHost(i.parentNode));
}, correctTargets = function(i, a) {
	return a.map(function(a) {
		if (i.contains(a)) return a;
		var o = unwrapHost(a);
		return o && i.contains(o) ? o : (console.error("aria-hidden", a, "in not contained inside", i, ". Doing nothing"), null);
	}).filter(function(i) {
		return !!i;
	});
}, applyAttributeToOthers = function(i, a, o, s) {
	var c = correctTargets(a, Array.isArray(i) ? i : [i]);
	markerMap[o] || (markerMap[o] = /* @__PURE__ */ new WeakMap());
	var l = markerMap[o], u = [], d = /* @__PURE__ */ new Set(), f = new Set(c), p = function(i) {
		!i || d.has(i) || (d.add(i), p(i.parentNode));
	};
	c.forEach(p);
	var m = function(i) {
		!i || f.has(i) || Array.prototype.forEach.call(i.children, function(i) {
			if (d.has(i)) m(i);
			else try {
				var a = i.getAttribute(s), c = a !== null && a !== "false", f = (counterMap.get(i) || 0) + 1, p = (l.get(i) || 0) + 1;
				counterMap.set(i, f), l.set(i, p), u.push(i), f === 1 && c && uncontrolledNodes.set(i, !0), p === 1 && i.setAttribute(o, "true"), c || i.setAttribute(s, "true");
			} catch (a) {
				console.error("aria-hidden: cannot operate on ", i, a);
			}
		});
	};
	return m(a), d.clear(), lockCount++, function() {
		u.forEach(function(i) {
			var a = counterMap.get(i) - 1, c = l.get(i) - 1;
			counterMap.set(i, a), l.set(i, c), a || (uncontrolledNodes.has(i) || i.removeAttribute(s), uncontrolledNodes.delete(i)), c || i.removeAttribute(o);
		}), lockCount--, lockCount || (counterMap = /* @__PURE__ */ new WeakMap(), counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {});
	};
}, hideOthers = function(i, a, o) {
	o === void 0 && (o = "data-aria-hidden");
	var s = Array.from(Array.isArray(i) ? i : [i]), c = a || getDefaultParent(i);
	return c ? (s.push.apply(s, Array.from(c.querySelectorAll("[aria-live], script"))), applyAttributeToOthers(s, c, o, "aria-hidden")) : function() {
		return null;
	};
}, __assign = function() {
	return __assign = Object.assign || function(i) {
		for (var a, o = 1, s = arguments.length; o < s; o++) for (var c in a = arguments[o], a) Object.prototype.hasOwnProperty.call(a, c) && (i[c] = a[c]);
		return i;
	}, __assign.apply(this, arguments);
};
function __rest(i, a) {
	var o = {};
	for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (o[s] = i[s]);
	if (i != null && typeof Object.getOwnPropertySymbols == "function") for (var c = 0, s = Object.getOwnPropertySymbols(i); c < s.length; c++) a.indexOf(s[c]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[c]) && (o[s[c]] = i[s[c]]);
	return o;
}
function __spreadArray(i, a, o) {
	if (o || arguments.length === 2) for (var s = 0, c = a.length, l; s < c; s++) (l || !(s in a)) && (l ||= Array.prototype.slice.call(a, 0, s), l[s] = a[s]);
	return i.concat(l || Array.prototype.slice.call(a));
}
var zeroRightClassName = "right-scroll-bar-position", fullWidthClassName = "width-before-scroll-bar", noScrollbarsClassName = "with-scroll-bars-hidden", removedBarSizeVariable = "--removed-body-scroll-bar-size";
function assignRef(i, a) {
	return typeof i == "function" ? i(a) : i && (i.current = a), i;
}
function useCallbackRef$1(i, a) {
	var o = useState(function() {
		return {
			value: i,
			callback: a,
			facade: {
				get current() {
					return o.value;
				},
				set current(i) {
					var a = o.value;
					a !== i && (o.value = i, o.callback(i, a));
				}
			}
		};
	})[0];
	return o.callback = a, o.facade;
}
var useIsomorphicLayoutEffect$2 = typeof window < "u" ? React$1.useLayoutEffect : React$1.useEffect, currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(i, a) {
	var o = useCallbackRef$1(a || null, function(a) {
		return i.forEach(function(i) {
			return assignRef(i, a);
		});
	});
	return useIsomorphicLayoutEffect$2(function() {
		var a = currentValues.get(o);
		if (a) {
			var s = new Set(a), c = new Set(i), l = o.current;
			s.forEach(function(i) {
				c.has(i) || assignRef(i, null);
			}), c.forEach(function(i) {
				s.has(i) || assignRef(i, l);
			});
		}
		currentValues.set(o, i);
	}, [i]), o;
}
function ItoI(i) {
	return i;
}
function innerCreateMedium(i, a) {
	a === void 0 && (a = ItoI);
	var o = [], s = !1;
	return {
		read: function() {
			if (s) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return o.length ? o[o.length - 1] : i;
		},
		useMedium: function(i) {
			var c = a(i, s);
			return o.push(c), function() {
				o = o.filter(function(i) {
					return i !== c;
				});
			};
		},
		assignSyncMedium: function(i) {
			for (s = !0; o.length;) {
				var a = o;
				o = [], a.forEach(i);
			}
			o = {
				push: function(a) {
					return i(a);
				},
				filter: function() {
					return o;
				}
			};
		},
		assignMedium: function(i) {
			s = !0;
			var a = [];
			if (o.length) {
				var c = o;
				o = [], c.forEach(i), a = o;
			}
			var l = function() {
				var o = a;
				a = [], o.forEach(i);
			}, u = function() {
				return Promise.resolve().then(l);
			};
			u(), o = {
				push: function(i) {
					a.push(i), u();
				},
				filter: function(i) {
					return a = a.filter(i), o;
				}
			};
		}
	};
}
function createSidecarMedium(i) {
	i === void 0 && (i = {});
	var a = innerCreateMedium(null);
	return a.options = __assign({
		async: !0,
		ssr: !1
	}, i), a;
}
var SideCar = function(i) {
	var a = i.sideCar, o = __rest(i, ["sideCar"]);
	if (!a) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var s = a.read();
	if (!s) throw Error("Sidecar medium not found");
	return React$1.createElement(s, __assign({}, o));
};
SideCar.isSideCarExport = !0;
function exportSidecar(i, a) {
	return i.useMedium(a), SideCar;
}
var effectCar = createSidecarMedium(), nothing = function() {}, RemoveScroll = React$1.forwardRef(function(i, a) {
	var o = React$1.useRef(null), s = React$1.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), c = s[0], l = s[1], u = i.forwardProps, d = i.children, f = i.className, p = i.removeScrollBar, m = i.enabled, h = i.shards, g = i.sideCar, _ = i.noRelative, v = i.noIsolation, y = i.inert, b = i.allowPinchZoom, x = i.as, S = x === void 0 ? "div" : x, C = i.gapMode, w = __rest(i, [
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
	]), T = g, E = useMergeRefs([o, a]), D = __assign(__assign({}, w), c);
	return React$1.createElement(React$1.Fragment, null, m && React$1.createElement(T, {
		sideCar: effectCar,
		removeScrollBar: p,
		shards: h,
		noRelative: _,
		noIsolation: v,
		inert: y,
		setCallbacks: l,
		allowPinchZoom: !!b,
		lockRef: o,
		gapMode: C
	}), u ? React$1.cloneElement(React$1.Children.only(d), __assign(__assign({}, D), { ref: E })) : React$1.createElement(S, __assign({}, D, {
		className: f,
		ref: E
	}), d));
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
	var i = document.createElement("style");
	i.type = "text/css";
	var a = getNonce();
	return a && i.setAttribute("nonce", a), i;
}
function injectStyles(i, a) {
	i.styleSheet ? i.styleSheet.cssText = a : i.appendChild(document.createTextNode(a));
}
function insertStyleTag(i) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(i);
}
var stylesheetSingleton = function() {
	var i = 0, a = null;
	return {
		add: function(o) {
			i == 0 && (a = makeStyleTag()) && (injectStyles(a, o), insertStyleTag(a)), i++;
		},
		remove: function() {
			i--, !i && a && (a.parentNode && a.parentNode.removeChild(a), a = null);
		}
	};
}, styleHookSingleton = function() {
	var i = stylesheetSingleton();
	return function(a, o) {
		React$1.useEffect(function() {
			return i.add(a), function() {
				i.remove();
			};
		}, [a && o]);
	};
}, styleSingleton = function() {
	var i = styleHookSingleton();
	return function(a) {
		var o = a.styles, s = a.dynamic;
		return i(o, s), null;
	};
}, zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, parse = function(i) {
	return parseInt(i || "", 10) || 0;
}, getOffset = function(i) {
	var a = window.getComputedStyle(document.body), o = a[i === "padding" ? "paddingLeft" : "marginLeft"], s = a[i === "padding" ? "paddingTop" : "marginTop"], c = a[i === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(o),
		parse(s),
		parse(c)
	];
}, getGapWidth = function(i) {
	if (i === void 0 && (i = "margin"), typeof window > "u") return zeroGap;
	var a = getOffset(i), o = document.documentElement.clientWidth, s = window.innerWidth;
	return {
		left: a[0],
		top: a[1],
		right: a[2],
		gap: Math.max(0, s - o + a[2] - a[0])
	};
}, Style = styleSingleton(), lockAttribute = "data-scroll-locked", getStyles = function(i, a, o, s) {
	var c = i.left, l = i.top, u = i.right, d = i.gap;
	return o === void 0 && (o = "margin"), `
  .${noScrollbarsClassName} {
   overflow: hidden ${s};
   padding-right: ${d}px ${s};
  }
  body[${lockAttribute}] {
    overflow: hidden ${s};
    overscroll-behavior: contain;
    ${[
		a && `position: relative ${s};`,
		o === "margin" && `
    padding-left: ${c}px;
    padding-top: ${l}px;
    padding-right: ${u}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${d}px ${s};
    `,
		o === "padding" && `padding-right: ${d}px ${s};`
	].filter(Boolean).join("")}
  }
  
  .${zeroRightClassName} {
    right: ${d}px ${s};
  }
  
  .${fullWidthClassName} {
    margin-right: ${d}px ${s};
  }
  
  .${zeroRightClassName} .${zeroRightClassName} {
    right: 0 ${s};
  }
  
  .${fullWidthClassName} .${fullWidthClassName} {
    margin-right: 0 ${s};
  }
  
  body[${lockAttribute}] {
    ${removedBarSizeVariable}: ${d}px;
  }
`;
}, getCurrentUseCounter = function() {
	var i = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(i) ? i : 0;
}, useLockAttribute = function() {
	React$1.useEffect(function() {
		return document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString()), function() {
			var i = getCurrentUseCounter() - 1;
			i <= 0 ? document.body.removeAttribute(lockAttribute) : document.body.setAttribute(lockAttribute, i.toString());
		};
	}, []);
}, RemoveScrollBar = function(i) {
	var a = i.noRelative, o = i.noImportant, s = i.gapMode, c = s === void 0 ? "margin" : s;
	useLockAttribute();
	var l = React$1.useMemo(function() {
		return getGapWidth(c);
	}, [c]);
	return React$1.createElement(Style, { styles: getStyles(l, !a, c, o ? "" : "!important") });
}, passiveSupported = !1;
if (typeof window < "u") try {
	var options = Object.defineProperty({}, "passive", { get: function() {
		return passiveSupported = !0, !0;
	} });
	window.addEventListener("test", options, options), window.removeEventListener("test", options, options);
} catch {
	passiveSupported = !1;
}
var nonPassive = passiveSupported ? { passive: !1 } : !1, alwaysContainsScroll = function(i) {
	return i.tagName === "TEXTAREA";
}, elementCanBeScrolled = function(i, a) {
	if (!(i instanceof Element)) return !1;
	var o = window.getComputedStyle(i);
	return o[a] !== "hidden" && !(o.overflowY === o.overflowX && !alwaysContainsScroll(i) && o[a] === "visible");
}, elementCouldBeVScrolled = function(i) {
	return elementCanBeScrolled(i, "overflowY");
}, elementCouldBeHScrolled = function(i) {
	return elementCanBeScrolled(i, "overflowX");
}, locationCouldBeScrolled = function(i, a) {
	var o = a.ownerDocument, s = a;
	do {
		if (typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host), elementCouldBeScrolled(i, s)) {
			var c = getScrollVariables(i, s);
			if (c[1] > c[2]) return !0;
		}
		s = s.parentNode;
	} while (s && s !== o.body);
	return !1;
}, getVScrollVariables = function(i) {
	return [
		i.scrollTop,
		i.scrollHeight,
		i.clientHeight
	];
}, getHScrollVariables = function(i) {
	return [
		i.scrollLeft,
		i.scrollWidth,
		i.clientWidth
	];
}, elementCouldBeScrolled = function(i, a) {
	return i === "v" ? elementCouldBeVScrolled(a) : elementCouldBeHScrolled(a);
}, getScrollVariables = function(i, a) {
	return i === "v" ? getVScrollVariables(a) : getHScrollVariables(a);
}, getDirectionFactor = function(i, a) {
	return i === "h" && a === "rtl" ? -1 : 1;
}, handleScroll = function(i, a, o, s, c) {
	var l = getDirectionFactor(i, window.getComputedStyle(a).direction), u = l * s, d = o.target, f = a.contains(d), p = !1, m = u > 0, h = 0, g = 0;
	do {
		if (!d) break;
		var _ = getScrollVariables(i, d), v = _[0], y = _[1] - _[2] - l * v;
		(v || y) && elementCouldBeScrolled(i, d) && (h += y, g += v);
		var b = d.parentNode;
		d = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
	} while (!f && d !== document.body || f && (a.contains(d) || a === d));
	return (m && (c && Math.abs(h) < 1 || !c && u > h) || !m && (c && Math.abs(g) < 1 || !c && -u > g)) && (p = !0), p;
}, getTouchXY = function(i) {
	return "changedTouches" in i ? [i.changedTouches[0].clientX, i.changedTouches[0].clientY] : [0, 0];
}, getDeltaXY = function(i) {
	return [i.deltaX, i.deltaY];
}, extractRef = function(i) {
	return i && "current" in i ? i.current : i;
}, deltaCompare = function(i, a) {
	return i[0] === a[0] && i[1] === a[1];
}, generateStyle = function(i) {
	return `
  .block-interactivity-${i} {pointer-events: none;}
  .allow-interactivity-${i} {pointer-events: all;}
`;
}, idCounter = 0, lockStack = [];
function RemoveScrollSideCar(i) {
	var a = React$1.useRef([]), o = React$1.useRef([0, 0]), s = React$1.useRef(), c = React$1.useState(idCounter++)[0], l = React$1.useState(styleSingleton)[0], u = React$1.useRef(i);
	React$1.useEffect(function() {
		u.current = i;
	}, [i]), React$1.useEffect(function() {
		if (i.inert) {
			document.body.classList.add(`block-interactivity-${c}`);
			var a = __spreadArray([i.lockRef.current], (i.shards || []).map(extractRef), !0).filter(Boolean);
			return a.forEach(function(i) {
				return i.classList.add(`allow-interactivity-${c}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${c}`), a.forEach(function(i) {
					return i.classList.remove(`allow-interactivity-${c}`);
				});
			};
		}
	}, [
		i.inert,
		i.lockRef.current,
		i.shards
	]);
	var d = React$1.useCallback(function(i, a) {
		if ("touches" in i && i.touches.length === 2 || i.type === "wheel" && i.ctrlKey) return !u.current.allowPinchZoom;
		var c = getTouchXY(i), l = o.current, d = "deltaX" in i ? i.deltaX : l[0] - c[0], f = "deltaY" in i ? i.deltaY : l[1] - c[1], p, m = i.target, h = Math.abs(d) > Math.abs(f) ? "h" : "v";
		if ("touches" in i && h === "h" && m.type === "range") return !1;
		var g = window.getSelection(), _ = g && g.anchorNode;
		if (_ && (_ === m || _.contains(m))) return !1;
		var v = locationCouldBeScrolled(h, m);
		if (!v) return !0;
		if (v ? p = h : (p = h === "v" ? "h" : "v", v = locationCouldBeScrolled(h, m)), !v) return !1;
		if (!s.current && "changedTouches" in i && (d || f) && (s.current = p), !p) return !0;
		var y = s.current || p;
		return handleScroll(y, a, i, y === "h" ? d : f, !0);
	}, []), f = React$1.useCallback(function(i) {
		var o = i;
		if (!(!lockStack.length || lockStack[lockStack.length - 1] !== l)) {
			var s = "deltaY" in o ? getDeltaXY(o) : getTouchXY(o), c = a.current.filter(function(i) {
				return i.name === o.type && (i.target === o.target || o.target === i.shadowParent) && deltaCompare(i.delta, s);
			})[0];
			if (c && c.should) {
				o.cancelable && o.preventDefault();
				return;
			}
			if (!c) {
				var f = (u.current.shards || []).map(extractRef).filter(Boolean).filter(function(i) {
					return i.contains(o.target);
				});
				(f.length > 0 ? d(o, f[0]) : !u.current.noIsolation) && o.cancelable && o.preventDefault();
			}
		}
	}, []), p = React$1.useCallback(function(i, o, s, c) {
		var l = {
			name: i,
			delta: o,
			target: s,
			should: c,
			shadowParent: getOutermostShadowParent(s)
		};
		a.current.push(l), setTimeout(function() {
			a.current = a.current.filter(function(i) {
				return i !== l;
			});
		}, 1);
	}, []), m = React$1.useCallback(function(i) {
		o.current = getTouchXY(i), s.current = void 0;
	}, []), h = React$1.useCallback(function(a) {
		p(a.type, getDeltaXY(a), a.target, d(a, i.lockRef.current));
	}, []), g = React$1.useCallback(function(a) {
		p(a.type, getTouchXY(a), a.target, d(a, i.lockRef.current));
	}, []);
	React$1.useEffect(function() {
		return lockStack.push(l), i.setCallbacks({
			onScrollCapture: h,
			onWheelCapture: h,
			onTouchMoveCapture: g
		}), document.addEventListener("wheel", f, nonPassive), document.addEventListener("touchmove", f, nonPassive), document.addEventListener("touchstart", m, nonPassive), function() {
			lockStack = lockStack.filter(function(i) {
				return i !== l;
			}), document.removeEventListener("wheel", f, nonPassive), document.removeEventListener("touchmove", f, nonPassive), document.removeEventListener("touchstart", m, nonPassive);
		};
	}, []);
	var _ = i.removeScrollBar, v = i.inert;
	return React$1.createElement(React$1.Fragment, null, v ? React$1.createElement(l, { styles: generateStyle(c) }) : null, _ ? React$1.createElement(RemoveScrollBar, {
		noRelative: i.noRelative,
		gapMode: i.gapMode
	}) : null);
}
function getOutermostShadowParent(i) {
	for (var a = null; i !== null;) i instanceof ShadowRoot && (a = i.host, i = i.host), i = i.parentNode;
	return a;
}
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar), ReactRemoveScroll = React$1.forwardRef(function(i, a) {
	return React$1.createElement(RemoveScroll, __assign({}, i, {
		ref: a,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll, POPOVER_NAME = "Popover", [createPopoverContext, createPopoverScope] = createContextScope(POPOVER_NAME, [createPopperScope]), usePopperScope$2 = createPopperScope(), [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME), Popover$1 = (i) => {
	let { __scopePopover: a, children: o, open: s, defaultOpen: c, onOpenChange: l, modal: u = !1 } = i, d = usePopperScope$2(a), f = React$1.useRef(null), [p, m] = React$1.useState(!1), [h, g] = useControllableState({
		prop: s,
		defaultProp: c ?? !1,
		onChange: l,
		caller: POPOVER_NAME
	});
	return /* @__PURE__ */ jsx(Root2$3, {
		...d,
		children: /* @__PURE__ */ jsx(PopoverProvider, {
			scope: a,
			contentId: useId$1(),
			triggerRef: f,
			open: h,
			onOpenChange: g,
			onOpenToggle: React$1.useCallback(() => g((i) => !i), [g]),
			hasCustomAnchor: p,
			onCustomAnchorAdd: React$1.useCallback(() => m(!0), []),
			onCustomAnchorRemove: React$1.useCallback(() => m(!1), []),
			modal: u,
			children: o
		})
	});
};
Popover$1.displayName = POPOVER_NAME;
var ANCHOR_NAME$1 = "PopoverAnchor", PopoverAnchor$1 = React$1.forwardRef((i, a) => {
	let { __scopePopover: o, ...s } = i, c = usePopoverContext(ANCHOR_NAME$1, o), l = usePopperScope$2(o), { onCustomAnchorAdd: u, onCustomAnchorRemove: d } = c;
	return React$1.useEffect(() => (u(), () => d()), [u, d]), /* @__PURE__ */ jsx(Anchor, {
		...l,
		...s,
		ref: a
	});
});
PopoverAnchor$1.displayName = ANCHOR_NAME$1;
var TRIGGER_NAME$4 = "PopoverTrigger", PopoverTrigger$1 = React$1.forwardRef((i, a) => {
	let { __scopePopover: o, ...c } = i, l = usePopoverContext(TRIGGER_NAME$4, o), d = usePopperScope$2(o), f = useComposedRefs(a, l.triggerRef), p = /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": l.open,
		"aria-controls": l.contentId,
		"data-state": getState$3(l.open),
		...c,
		ref: f,
		onClick: composeEventHandlers(i.onClick, l.onOpenToggle)
	});
	return l.hasCustomAnchor ? p : /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...d,
		children: p
	});
});
PopoverTrigger$1.displayName = TRIGGER_NAME$4;
var PORTAL_NAME$4 = "PopoverPortal", [PortalProvider$2, usePortalContext$2] = createPopoverContext(PORTAL_NAME$4, { forceMount: void 0 }), PopoverPortal = (i) => {
	let { __scopePopover: a, forceMount: o, children: s, container: c } = i, l = usePopoverContext(PORTAL_NAME$4, a);
	return /* @__PURE__ */ jsx(PortalProvider$2, {
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
PopoverPortal.displayName = PORTAL_NAME$4;
var CONTENT_NAME$5 = "PopoverContent", PopoverContent$1 = React$1.forwardRef((i, a) => {
	let o = usePortalContext$2(CONTENT_NAME$5, i.__scopePopover), { forceMount: s = o.forceMount, ...c } = i, l = usePopoverContext(CONTENT_NAME$5, i.__scopePopover);
	return /* @__PURE__ */ jsx(Presence, {
		present: s || l.open,
		children: l.modal ? /* @__PURE__ */ jsx(PopoverContentModal, {
			...c,
			ref: a
		}) : /* @__PURE__ */ jsx(PopoverContentNonModal, {
			...c,
			ref: a
		})
	});
});
PopoverContent$1.displayName = CONTENT_NAME$5;
var Slot$4 = /* @__PURE__ */ createSlot$5("PopoverContent.RemoveScroll"), PopoverContentModal = React$1.forwardRef((i, a) => {
	let o = usePopoverContext(CONTENT_NAME$5, i.__scopePopover), c = React$1.useRef(null), l = useComposedRefs(a, c), d = React$1.useRef(!1);
	return React$1.useEffect(() => {
		let i = c.current;
		if (i) return hideOthers(i);
	}, []), /* @__PURE__ */ jsx(Combination_default, {
		as: Slot$4,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ jsx(PopoverContentImpl, {
			...i,
			ref: l,
			trapFocus: o.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: composeEventHandlers(i.onCloseAutoFocus, (i) => {
				i.preventDefault(), d.current || o.triggerRef.current?.focus();
			}),
			onPointerDownOutside: composeEventHandlers(i.onPointerDownOutside, (i) => {
				let a = i.detail.originalEvent, o = a.button === 0 && a.ctrlKey === !0;
				d.current = a.button === 2 || o;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: composeEventHandlers(i.onFocusOutside, (i) => i.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), PopoverContentNonModal = React$1.forwardRef((i, a) => {
	let o = usePopoverContext(CONTENT_NAME$5, i.__scopePopover), s = React$1.useRef(!1), c = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(PopoverContentImpl, {
		...i,
		ref: a,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (a) => {
			i.onCloseAutoFocus?.(a), a.defaultPrevented || (s.current || o.triggerRef.current?.focus(), a.preventDefault()), s.current = !1, c.current = !1;
		},
		onInteractOutside: (a) => {
			i.onInteractOutside?.(a), a.defaultPrevented || (s.current = !0, a.detail.originalEvent.type === "pointerdown" && (c.current = !0));
			let l = a.target;
			o.triggerRef.current?.contains(l) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && c.current && a.preventDefault();
		}
	});
}), PopoverContentImpl = React$1.forwardRef((i, a) => {
	let { __scopePopover: o, trapFocus: s, onOpenAutoFocus: c, onCloseAutoFocus: l, disableOutsidePointerEvents: u, onEscapeKeyDown: d, onPointerDownOutside: f, onFocusOutside: p, onInteractOutside: m, ...h } = i, g = usePopoverContext(CONTENT_NAME$5, o), _ = usePopperScope$2(o);
	return useFocusGuards(), /* @__PURE__ */ jsx(FocusScope, {
		asChild: !0,
		loop: !0,
		trapped: s,
		onMountAutoFocus: c,
		onUnmountAutoFocus: l,
		children: /* @__PURE__ */ jsx(DismissableLayer, {
			asChild: !0,
			disableOutsidePointerEvents: u,
			onInteractOutside: m,
			onEscapeKeyDown: d,
			onPointerDownOutside: f,
			onFocusOutside: p,
			onDismiss: () => g.onOpenChange(!1),
			children: /* @__PURE__ */ jsx(Content$1, {
				"data-state": getState$3(g.open),
				role: "dialog",
				id: g.contentId,
				..._,
				...h,
				ref: a,
				style: {
					...h.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}), CLOSE_NAME$1 = "PopoverClose", PopoverClose = React$1.forwardRef((i, a) => {
	let { __scopePopover: o, ...c } = i, l = usePopoverContext(CLOSE_NAME$1, o);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		...c,
		ref: a,
		onClick: composeEventHandlers(i.onClick, () => l.onOpenChange(!1))
	});
});
PopoverClose.displayName = CLOSE_NAME$1;
var ARROW_NAME$3 = "PopoverArrow", PopoverArrow = React$1.forwardRef((i, a) => {
	let { __scopePopover: o, ...s } = i;
	return /* @__PURE__ */ jsx(Arrow, {
		...usePopperScope$2(o),
		...s,
		ref: a
	});
});
PopoverArrow.displayName = ARROW_NAME$3;
function getState$3(i) {
	return i ? "open" : "closed";
}
var Root2$2 = Popover$1, Anchor2$1 = PopoverAnchor$1, Trigger$3 = PopoverTrigger$1, Portal$4 = PopoverPortal, Content2$3 = PopoverContent$1;
function Popover({ ...i }) {
	return /* @__PURE__ */ jsx(Root2$2, {
		"data-slot": "popover",
		...i
	});
}
var PopoverTrigger = React$1.forwardRef(({ ...i }, a) => /* @__PURE__ */ jsx(Trigger$3, {
	"data-slot": "popover-trigger",
	...i,
	ref: a
}));
PopoverTrigger.displayName = Trigger$3.displayName;
var PopoverContent = React$1.forwardRef(({ className: i, align: a = "center", sideOffset: o = 4, ...s }, c) => /* @__PURE__ */ jsx(Portal$4, { children: /* @__PURE__ */ jsx(Content2$3, {
	ref: c,
	"data-slot": "popover-content",
	align: a,
	sideOffset: o,
	className: cn("chatbot-theme bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", i),
	...s
}) }));
PopoverContent.displayName = Content2$3.displayName;
var PopoverAnchor = React$1.forwardRef(({ ...i }, a) => /* @__PURE__ */ jsx(Anchor2$1, {
	"data-slot": "popover-anchor",
	...i,
	ref: a
}));
PopoverAnchor.displayName = Anchor2$1.displayName;
/* @__NO_SIDE_EFFECTS__ */
function createSlot$4(i) {
	let a = /* @__PURE__ */ createSlotClone$3(i), o = React$1.forwardRef((i, o) => {
		let { children: s, ...c } = i, l = React$1.Children.toArray(s), u = l.find(isSlottable$3);
		if (u) {
			let i = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(i) > 1 ? React$1.Children.only(null) : React$1.isValidElement(i) ? i.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(i) ? React$1.cloneElement(i, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${i}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$3(i) {
	let a = React$1.forwardRef((i, a) => {
		let { children: o, ...s } = i;
		if (React$1.isValidElement(o)) {
			let i = getElementRef$3(o), c = mergeProps$3(s, o.props);
			return o.type !== React$1.Fragment && (c.ref = a ? composeRefs(a, i) : i), React$1.cloneElement(o, c);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${i}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$3 = Symbol("radix.slottable");
function isSlottable$3(i) {
	return React$1.isValidElement(i) && typeof i.type == "function" && "__radixId" in i.type && i.type.__radixId === SLOTTABLE_IDENTIFIER$3;
}
function mergeProps$3(i, a) {
	let o = { ...a };
	for (let s in a) {
		let c = i[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...i) => {
			let a = l(...i);
			return c(...i), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...i,
		...o
	};
}
function getElementRef$3(i) {
	let a = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? i.ref : (a = Object.getOwnPropertyDescriptor(i, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? i.props.ref : i.props.ref || i.ref);
}
function createCollection(i) {
	let a = i + "CollectionProvider", [o, s] = createContextScope(a), [c, l] = o(a, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), d = (i) => {
		let { scope: a, children: o } = i, s = React.useRef(null), l = React.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ jsx(c, {
			scope: a,
			itemMap: l,
			collectionRef: s,
			children: o
		});
	};
	d.displayName = a;
	let f = i + "CollectionSlot", p = /* @__PURE__ */ createSlot$4(f), m = React.forwardRef((i, a) => {
		let { scope: o, children: s } = i;
		return /* @__PURE__ */ jsx(p, {
			ref: useComposedRefs(a, l(f, o).collectionRef),
			children: s
		});
	});
	m.displayName = f;
	let g = i + "CollectionItemSlot", _ = "data-radix-collection-item", v = /* @__PURE__ */ createSlot$4(g), y = React.forwardRef((i, a) => {
		let { scope: o, children: s, ...c } = i, d = React.useRef(null), f = useComposedRefs(a, d), p = l(g, o);
		return React.useEffect(() => (p.itemMap.set(d, {
			ref: d,
			...c
		}), () => void p.itemMap.delete(d))), /* @__PURE__ */ jsx(v, {
			[_]: "",
			ref: f,
			children: s
		});
	});
	y.displayName = g;
	function b(a) {
		let o = l(i + "CollectionConsumer", a);
		return React.useCallback(() => {
			let i = o.collectionRef.current;
			if (!i) return [];
			let a = Array.from(i.querySelectorAll(`[${_}]`));
			return Array.from(o.itemMap.values()).sort((i, o) => a.indexOf(i.ref.current) - a.indexOf(o.ref.current));
		}, [o.collectionRef, o.itemMap]);
	}
	return [
		{
			Provider: d,
			Slot: m,
			ItemSlot: y
		},
		b,
		s
	];
}
var DirectionContext = React$1.createContext(void 0);
function useDirection(i) {
	let a = React$1.useContext(DirectionContext);
	return i || a || "ltr";
}
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus", EVENT_OPTIONS = {
	bubbles: !1,
	cancelable: !0
}, GROUP_NAME$3 = "RovingFocusGroup", [Collection$3, useCollection$3, createCollectionScope$3] = createCollection(GROUP_NAME$3), [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(GROUP_NAME$3, [createCollectionScope$3]), [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME$3), RovingFocusGroup = React$1.forwardRef((i, a) => /* @__PURE__ */ jsx(Collection$3.Provider, {
	scope: i.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ jsx(Collection$3.Slot, {
		scope: i.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ jsx(RovingFocusGroupImpl, {
			...i,
			ref: a
		})
	})
}));
RovingFocusGroup.displayName = GROUP_NAME$3;
var RovingFocusGroupImpl = React$1.forwardRef((i, a) => {
	let { __scopeRovingFocusGroup: o, orientation: c, loop: l = !1, dir: d, currentTabStopId: f, defaultCurrentTabStopId: p, onCurrentTabStopIdChange: h, onEntryFocus: g, preventScrollOnEntryFocus: _ = !1, ...v } = i, y = React$1.useRef(null), b = useComposedRefs(a, y), x = useDirection(d), [S, C] = useControllableState({
		prop: f,
		defaultProp: p ?? null,
		onChange: h,
		caller: GROUP_NAME$3
	}), [w, T] = React$1.useState(!1), E = useCallbackRef(g), O = useCollection$3(o), k = React$1.useRef(!1), [A, j] = React$1.useState(0);
	return React$1.useEffect(() => {
		let i = y.current;
		if (i) return i.addEventListener(ENTRY_FOCUS, E), () => i.removeEventListener(ENTRY_FOCUS, E);
	}, [E]), /* @__PURE__ */ jsx(RovingFocusProvider, {
		scope: o,
		orientation: c,
		dir: x,
		loop: l,
		currentTabStopId: S,
		onItemFocus: React$1.useCallback((i) => C(i), [C]),
		onItemShiftTab: React$1.useCallback(() => T(!0), []),
		onFocusableItemAdd: React$1.useCallback(() => j((i) => i + 1), []),
		onFocusableItemRemove: React$1.useCallback(() => j((i) => i - 1), []),
		children: /* @__PURE__ */ jsx(Primitive.div, {
			tabIndex: w || A === 0 ? -1 : 0,
			"data-orientation": c,
			...v,
			ref: b,
			style: {
				outline: "none",
				...i.style
			},
			onMouseDown: composeEventHandlers(i.onMouseDown, () => {
				k.current = !0;
			}),
			onFocus: composeEventHandlers(i.onFocus, (i) => {
				let a = !k.current;
				if (i.target === i.currentTarget && a && !w) {
					let a = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
					if (i.currentTarget.dispatchEvent(a), !a.defaultPrevented) {
						let i = O().filter((i) => i.focusable);
						focusFirst$1([
							i.find((i) => i.active),
							i.find((i) => i.id === S),
							...i
						].filter(Boolean).map((i) => i.ref.current), _);
					}
				}
				k.current = !1;
			}),
			onBlur: composeEventHandlers(i.onBlur, () => T(!1))
		})
	});
}), ITEM_NAME$3 = "RovingFocusGroupItem", RovingFocusGroupItem = React$1.forwardRef((i, a) => {
	let { __scopeRovingFocusGroup: o, focusable: c = !0, active: l = !1, tabStopId: u, children: d, ...f } = i, p = useId$1(), h = u || p, g = useRovingFocusContext(ITEM_NAME$3, o), _ = g.currentTabStopId === h, v = useCollection$3(o), { onFocusableItemAdd: y, onFocusableItemRemove: b, currentTabStopId: x } = g;
	return React$1.useEffect(() => {
		if (c) return y(), () => b();
	}, [
		c,
		y,
		b
	]), /* @__PURE__ */ jsx(Collection$3.ItemSlot, {
		scope: o,
		id: h,
		focusable: c,
		active: l,
		children: /* @__PURE__ */ jsx(Primitive.span, {
			tabIndex: _ ? 0 : -1,
			"data-orientation": g.orientation,
			...f,
			ref: a,
			onMouseDown: composeEventHandlers(i.onMouseDown, (i) => {
				c ? g.onItemFocus(h) : i.preventDefault();
			}),
			onFocus: composeEventHandlers(i.onFocus, () => g.onItemFocus(h)),
			onKeyDown: composeEventHandlers(i.onKeyDown, (i) => {
				if (i.key === "Tab" && i.shiftKey) {
					g.onItemShiftTab();
					return;
				}
				if (i.target !== i.currentTarget) return;
				let a = getFocusIntent(i, g.orientation, g.dir);
				if (a !== void 0) {
					if (i.metaKey || i.ctrlKey || i.altKey || i.shiftKey) return;
					i.preventDefault();
					let o = v().filter((i) => i.focusable).map((i) => i.ref.current);
					if (a === "last") o.reverse();
					else if (a === "prev" || a === "next") {
						a === "prev" && o.reverse();
						let s = o.indexOf(i.currentTarget);
						o = g.loop ? wrapArray$2(o, s + 1) : o.slice(s + 1);
					}
					setTimeout(() => focusFirst$1(o));
				}
			}),
			children: typeof d == "function" ? d({
				isCurrentTabStop: _,
				hasTabStop: x != null
			}) : d
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
function getDirectionAwareKey(i, a) {
	return a === "rtl" ? i === "ArrowLeft" ? "ArrowRight" : i === "ArrowRight" ? "ArrowLeft" : i : i;
}
function getFocusIntent(i, a, o) {
	let s = getDirectionAwareKey(i.key, o);
	if (!(a === "vertical" && ["ArrowLeft", "ArrowRight"].includes(s)) && !(a === "horizontal" && ["ArrowUp", "ArrowDown"].includes(s))) return MAP_KEY_TO_FOCUS_INTENT[s];
}
function focusFirst$1(i, a = !1) {
	let o = document.activeElement;
	for (let s of i) if (s === o || (s.focus({ preventScroll: a }), document.activeElement !== o)) return;
}
function wrapArray$2(i, a) {
	return i.map((o, s) => i[(a + s) % i.length]);
}
var Root$6 = RovingFocusGroup, Item$1 = RovingFocusGroupItem;
/* @__NO_SIDE_EFFECTS__ */
function createSlot$3(i) {
	let a = /* @__PURE__ */ createSlotClone$2(i), o = React$1.forwardRef((i, o) => {
		let { children: s, ...c } = i, l = React$1.Children.toArray(s), u = l.find(isSlottable$2);
		if (u) {
			let i = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(i) > 1 ? React$1.Children.only(null) : React$1.isValidElement(i) ? i.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(i) ? React$1.cloneElement(i, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${i}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$2(i) {
	let a = React$1.forwardRef((i, a) => {
		let { children: o, ...s } = i;
		if (React$1.isValidElement(o)) {
			let i = getElementRef$2(o), c = mergeProps$2(s, o.props);
			return o.type !== React$1.Fragment && (c.ref = a ? composeRefs(a, i) : i), React$1.cloneElement(o, c);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${i}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$2 = Symbol("radix.slottable");
function isSlottable$2(i) {
	return React$1.isValidElement(i) && typeof i.type == "function" && "__radixId" in i.type && i.type.__radixId === SLOTTABLE_IDENTIFIER$2;
}
function mergeProps$2(i, a) {
	let o = { ...a };
	for (let s in a) {
		let c = i[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...i) => {
			let a = l(...i);
			return c(...i), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...i,
		...o
	};
}
function getElementRef$2(i) {
	let a = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? i.ref : (a = Object.getOwnPropertyDescriptor(i, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? i.props.ref : i.props.ref || i.ref);
}
var SELECTION_KEYS$1 = ["Enter", " "], FIRST_KEYS = [
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
}, MENU_NAME = "Menu", [Collection$2, useCollection$2, createCollectionScope$2] = createCollection(MENU_NAME), [createMenuContext, createMenuScope] = createContextScope(MENU_NAME, [
	createCollectionScope$2,
	createPopperScope,
	createRovingFocusGroupScope
]), usePopperScope$1 = createPopperScope(), useRovingFocusGroupScope = createRovingFocusGroupScope(), [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME), [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME), Menu = (i) => {
	let { __scopeMenu: a, open: o = !1, children: s, dir: c, onOpenChange: l, modal: u = !0 } = i, d = usePopperScope$1(a), [f, p] = React$1.useState(null), m = React$1.useRef(!1), h = useCallbackRef(l), g = useDirection(c);
	return React$1.useEffect(() => {
		let i = () => {
			m.current = !0, document.addEventListener("pointerdown", a, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", a, {
				capture: !0,
				once: !0
			});
		}, a = () => m.current = !1;
		return document.addEventListener("keydown", i, { capture: !0 }), () => {
			document.removeEventListener("keydown", i, { capture: !0 }), document.removeEventListener("pointerdown", a, { capture: !0 }), document.removeEventListener("pointermove", a, { capture: !0 });
		};
	}, []), /* @__PURE__ */ jsx(Root2$3, {
		...d,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: a,
			open: o,
			onOpenChange: h,
			content: f,
			onContentChange: p,
			children: /* @__PURE__ */ jsx(MenuRootProvider, {
				scope: a,
				onClose: React$1.useCallback(() => h(!1), [h]),
				isUsingKeyboardRef: m,
				dir: g,
				modal: u,
				children: s
			})
		})
	});
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor", MenuAnchor = React$1.forwardRef((i, a) => {
	let { __scopeMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(Anchor, {
		...usePopperScope$1(o),
		...s,
		ref: a
	});
});
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME$3 = "MenuPortal", [PortalProvider$1, usePortalContext$1] = createMenuContext(PORTAL_NAME$3, { forceMount: void 0 }), MenuPortal = (i) => {
	let { __scopeMenu: a, forceMount: o, children: s, container: c } = i, l = useMenuContext(PORTAL_NAME$3, a);
	return /* @__PURE__ */ jsx(PortalProvider$1, {
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
MenuPortal.displayName = PORTAL_NAME$3;
var CONTENT_NAME$4 = "MenuContent", [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME$4), MenuContent = React$1.forwardRef((i, a) => {
	let o = usePortalContext$1(CONTENT_NAME$4, i.__scopeMenu), { forceMount: s = o.forceMount, ...c } = i, l = useMenuContext(CONTENT_NAME$4, i.__scopeMenu), u = useMenuRootContext(CONTENT_NAME$4, i.__scopeMenu);
	return /* @__PURE__ */ jsx(Collection$2.Provider, {
		scope: i.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: s || l.open,
			children: /* @__PURE__ */ jsx(Collection$2.Slot, {
				scope: i.__scopeMenu,
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
}), MenuRootContentModal = React$1.forwardRef((i, a) => {
	let o = useMenuContext(CONTENT_NAME$4, i.__scopeMenu), c = React$1.useRef(null), l = useComposedRefs(a, c);
	return React$1.useEffect(() => {
		let i = c.current;
		if (i) return hideOthers(i);
	}, []), /* @__PURE__ */ jsx(MenuContentImpl, {
		...i,
		ref: l,
		trapFocus: o.open,
		disableOutsidePointerEvents: o.open,
		disableOutsideScroll: !0,
		onFocusOutside: composeEventHandlers(i.onFocusOutside, (i) => i.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => o.onOpenChange(!1)
	});
}), MenuRootContentNonModal = React$1.forwardRef((i, a) => {
	let o = useMenuContext(CONTENT_NAME$4, i.__scopeMenu);
	return /* @__PURE__ */ jsx(MenuContentImpl, {
		...i,
		ref: a,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => o.onOpenChange(!1)
	});
}), Slot$3 = /* @__PURE__ */ createSlot$3("MenuContent.ScrollLock"), MenuContentImpl = React$1.forwardRef((i, a) => {
	let { __scopeMenu: o, loop: c = !1, trapFocus: l, onOpenAutoFocus: d, onCloseAutoFocus: f, disableOutsidePointerEvents: p, onEntryFocus: m, onEscapeKeyDown: h, onPointerDownOutside: g, onFocusOutside: _, onInteractOutside: y, onDismiss: b, disableOutsideScroll: x, ...S } = i, C = useMenuContext(CONTENT_NAME$4, o), w = useMenuRootContext(CONTENT_NAME$4, o), T = usePopperScope$1(o), E = useRovingFocusGroupScope(o), D = useCollection$2(o), [k, A] = React$1.useState(null), j = React$1.useRef(null), M = useComposedRefs(a, j, C.onContentChange), N = React$1.useRef(0), P = React$1.useRef(""), F = React$1.useRef(0), I = React$1.useRef(null), L = React$1.useRef("right"), R = React$1.useRef(0), z = x ? Combination_default : React$1.Fragment, V = x ? {
		as: Slot$3,
		allowPinchZoom: !0
	} : void 0, H = (i) => {
		let a = P.current + i, o = D().filter((i) => !i.disabled), s = document.activeElement, c = o.find((i) => i.ref.current === s)?.textValue, l = getNextMatch(o.map((i) => i.textValue), a, c), u = o.find((i) => i.textValue === l)?.ref.current;
		(function i(a) {
			P.current = a, window.clearTimeout(N.current), a !== "" && (N.current = window.setTimeout(() => i(""), 1e3));
		})(a), u && setTimeout(() => u.focus());
	};
	React$1.useEffect(() => () => window.clearTimeout(N.current), []), useFocusGuards();
	let U = React$1.useCallback((i) => L.current === I.current?.side && isPointerInGraceArea(i, I.current?.area), []);
	return /* @__PURE__ */ jsx(MenuContentProvider, {
		scope: o,
		searchRef: P,
		onItemEnter: React$1.useCallback((i) => {
			U(i) && i.preventDefault();
		}, [U]),
		onItemLeave: React$1.useCallback((i) => {
			U(i) || (j.current?.focus(), A(null));
		}, [U]),
		onTriggerLeave: React$1.useCallback((i) => {
			U(i) && i.preventDefault();
		}, [U]),
		pointerGraceTimerRef: F,
		onPointerGraceIntentChange: React$1.useCallback((i) => {
			I.current = i;
		}, []),
		children: /* @__PURE__ */ jsx(z, {
			...V,
			children: /* @__PURE__ */ jsx(FocusScope, {
				asChild: !0,
				trapped: l,
				onMountAutoFocus: composeEventHandlers(d, (i) => {
					i.preventDefault(), j.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: f,
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: p,
					onEscapeKeyDown: h,
					onPointerDownOutside: g,
					onFocusOutside: _,
					onInteractOutside: y,
					onDismiss: b,
					children: /* @__PURE__ */ jsx(Root$6, {
						asChild: !0,
						...E,
						dir: w.dir,
						orientation: "vertical",
						loop: c,
						currentTabStopId: k,
						onCurrentTabStopIdChange: A,
						onEntryFocus: composeEventHandlers(m, (i) => {
							w.isUsingKeyboardRef.current || i.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ jsx(Content$1, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": getOpenState(C.open),
							"data-radix-menu-content": "",
							dir: w.dir,
							...T,
							...S,
							ref: M,
							style: {
								outline: "none",
								...S.style
							},
							onKeyDown: composeEventHandlers(S.onKeyDown, (i) => {
								let a = i.target.closest("[data-radix-menu-content]") === i.currentTarget, o = i.ctrlKey || i.altKey || i.metaKey, s = i.key.length === 1;
								a && (i.key === "Tab" && i.preventDefault(), !o && s && H(i.key));
								let c = j.current;
								if (i.target !== c || !FIRST_LAST_KEYS.includes(i.key)) return;
								i.preventDefault();
								let l = D().filter((i) => !i.disabled).map((i) => i.ref.current);
								LAST_KEYS.includes(i.key) && l.reverse(), focusFirst(l);
							}),
							onBlur: composeEventHandlers(i.onBlur, (i) => {
								i.currentTarget.contains(i.target) || (window.clearTimeout(N.current), P.current = "");
							}),
							onPointerMove: composeEventHandlers(i.onPointerMove, whenMouse((i) => {
								let a = i.target, o = R.current !== i.clientX;
								i.currentTarget.contains(a) && o && (L.current = i.clientX > R.current ? "right" : "left", R.current = i.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
MenuContent.displayName = CONTENT_NAME$4;
var GROUP_NAME$2 = "MenuGroup", MenuGroup = React$1.forwardRef((i, a) => {
	let { __scopeMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(Primitive.div, {
		role: "group",
		...s,
		ref: a
	});
});
MenuGroup.displayName = GROUP_NAME$2;
var LABEL_NAME$2 = "MenuLabel", MenuLabel = React$1.forwardRef((i, a) => {
	let { __scopeMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(Primitive.div, {
		...s,
		ref: a
	});
});
MenuLabel.displayName = LABEL_NAME$2;
var ITEM_NAME$2 = "MenuItem", ITEM_SELECT = "menu.itemSelect", MenuItem = React$1.forwardRef((i, o) => {
	let { disabled: c = !1, onSelect: l, ...d } = i, f = React$1.useRef(null), p = useMenuRootContext(ITEM_NAME$2, i.__scopeMenu), m = useMenuContentContext(ITEM_NAME$2, i.__scopeMenu), h = useComposedRefs(o, f), g = React$1.useRef(!1), _ = () => {
		let i = f.current;
		if (!c && i) {
			let o = new CustomEvent(ITEM_SELECT, {
				bubbles: !0,
				cancelable: !0
			});
			i.addEventListener(ITEM_SELECT, (i) => l?.(i), { once: !0 }), dispatchDiscreteCustomEvent(i, o), o.defaultPrevented ? g.current = !1 : p.onClose();
		}
	};
	return /* @__PURE__ */ jsx(MenuItemImpl, {
		...d,
		ref: h,
		disabled: c,
		onClick: composeEventHandlers(i.onClick, _),
		onPointerDown: (a) => {
			i.onPointerDown?.(a), g.current = !0;
		},
		onPointerUp: composeEventHandlers(i.onPointerUp, (i) => {
			g.current || i.currentTarget?.click();
		}),
		onKeyDown: composeEventHandlers(i.onKeyDown, (i) => {
			let a = m.searchRef.current !== "";
			c || a && i.key === " " || SELECTION_KEYS$1.includes(i.key) && (i.currentTarget.click(), i.preventDefault());
		})
	});
});
MenuItem.displayName = ITEM_NAME$2;
var MenuItemImpl = React$1.forwardRef((i, a) => {
	let { __scopeMenu: o, disabled: c = !1, textValue: l, ...d } = i, f = useMenuContentContext(ITEM_NAME$2, o), p = useRovingFocusGroupScope(o), h = React$1.useRef(null), g = useComposedRefs(a, h), [_, v] = React$1.useState(!1), [y, b] = React$1.useState("");
	return React$1.useEffect(() => {
		let i = h.current;
		i && b((i.textContent ?? "").trim());
	}, [d.children]), /* @__PURE__ */ jsx(Collection$2.ItemSlot, {
		scope: o,
		disabled: c,
		textValue: l ?? y,
		children: /* @__PURE__ */ jsx(Item$1, {
			asChild: !0,
			...p,
			focusable: !c,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				role: "menuitem",
				"data-highlighted": _ ? "" : void 0,
				"aria-disabled": c || void 0,
				"data-disabled": c ? "" : void 0,
				...d,
				ref: g,
				onPointerMove: composeEventHandlers(i.onPointerMove, whenMouse((i) => {
					c ? f.onItemLeave(i) : (f.onItemEnter(i), i.defaultPrevented || i.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: composeEventHandlers(i.onPointerLeave, whenMouse((i) => f.onItemLeave(i))),
				onFocus: composeEventHandlers(i.onFocus, () => v(!0)),
				onBlur: composeEventHandlers(i.onBlur, () => v(!1))
			})
		})
	});
}), CHECKBOX_ITEM_NAME$1 = "MenuCheckboxItem", MenuCheckboxItem = React$1.forwardRef((i, a) => {
	let { checked: o = !1, onCheckedChange: c, ...l } = i;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: i.__scopeMenu,
		checked: o,
		children: /* @__PURE__ */ jsx(MenuItem, {
			role: "menuitemcheckbox",
			"aria-checked": isIndeterminate(o) ? "mixed" : o,
			...l,
			ref: a,
			"data-state": getCheckedState(o),
			onSelect: composeEventHandlers(l.onSelect, () => c?.(isIndeterminate(o) ? !0 : !o), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME$1;
var RADIO_GROUP_NAME$1 = "MenuRadioGroup", [RadioGroupProvider, useRadioGroupContext] = createMenuContext(RADIO_GROUP_NAME$1, {
	value: void 0,
	onValueChange: () => {}
}), MenuRadioGroup = React$1.forwardRef((i, a) => {
	let { value: o, onValueChange: s, ...c } = i, l = useCallbackRef(s);
	return /* @__PURE__ */ jsx(RadioGroupProvider, {
		scope: i.__scopeMenu,
		value: o,
		onValueChange: l,
		children: /* @__PURE__ */ jsx(MenuGroup, {
			...c,
			ref: a
		})
	});
});
MenuRadioGroup.displayName = RADIO_GROUP_NAME$1;
var RADIO_ITEM_NAME$1 = "MenuRadioItem", MenuRadioItem = React$1.forwardRef((i, a) => {
	let { value: o, ...c } = i, l = useRadioGroupContext(RADIO_ITEM_NAME$1, i.__scopeMenu), u = o === l.value;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: i.__scopeMenu,
		checked: u,
		children: /* @__PURE__ */ jsx(MenuItem, {
			role: "menuitemradio",
			"aria-checked": u,
			...c,
			ref: a,
			"data-state": getCheckedState(u),
			onSelect: composeEventHandlers(c.onSelect, () => l.onValueChange?.(o), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuRadioItem.displayName = RADIO_ITEM_NAME$1;
var ITEM_INDICATOR_NAME$1 = "MenuItemIndicator", [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME$1, { checked: !1 }), MenuItemIndicator = React$1.forwardRef((i, a) => {
	let { __scopeMenu: o, forceMount: s, ...c } = i, l = useItemIndicatorContext(ITEM_INDICATOR_NAME$1, o);
	return /* @__PURE__ */ jsx(Presence, {
		present: s || isIndeterminate(l.checked) || l.checked === !0,
		children: /* @__PURE__ */ jsx(Primitive.span, {
			...c,
			ref: a,
			"data-state": getCheckedState(l.checked)
		})
	});
});
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME$1;
var SEPARATOR_NAME$2 = "MenuSeparator", MenuSeparator = React$1.forwardRef((i, a) => {
	let { __scopeMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(Primitive.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...s,
		ref: a
	});
});
MenuSeparator.displayName = SEPARATOR_NAME$2;
var ARROW_NAME$2 = "MenuArrow", MenuArrow = React$1.forwardRef((i, a) => {
	let { __scopeMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(Arrow, {
		...usePopperScope$1(o),
		...s,
		ref: a
	});
});
MenuArrow.displayName = ARROW_NAME$2;
var SUB_NAME = "MenuSub", [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME), MenuSub = (i) => {
	let { __scopeMenu: a, children: o, open: s = !1, onOpenChange: c } = i, l = useMenuContext(SUB_NAME, a), u = usePopperScope$1(a), [d, f] = React$1.useState(null), [p, m] = React$1.useState(null), h = useCallbackRef(c);
	return React$1.useEffect(() => (l.open === !1 && h(!1), () => h(!1)), [l.open, h]), /* @__PURE__ */ jsx(Root2$3, {
		...u,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: a,
			open: s,
			onOpenChange: h,
			content: p,
			onContentChange: m,
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
var SUB_TRIGGER_NAME$1 = "MenuSubTrigger", MenuSubTrigger = React$1.forwardRef((i, a) => {
	let o = useMenuContext(SUB_TRIGGER_NAME$1, i.__scopeMenu), c = useMenuRootContext(SUB_TRIGGER_NAME$1, i.__scopeMenu), u = useMenuSubContext(SUB_TRIGGER_NAME$1, i.__scopeMenu), d = useMenuContentContext(SUB_TRIGGER_NAME$1, i.__scopeMenu), f = React$1.useRef(null), { pointerGraceTimerRef: p, onPointerGraceIntentChange: m } = d, h = { __scopeMenu: i.__scopeMenu }, g = React$1.useCallback(() => {
		f.current && window.clearTimeout(f.current), f.current = null;
	}, []);
	return React$1.useEffect(() => g, [g]), React$1.useEffect(() => {
		let i = p.current;
		return () => {
			window.clearTimeout(i), m(null);
		};
	}, [p, m]), /* @__PURE__ */ jsx(MenuAnchor, {
		asChild: !0,
		...h,
		children: /* @__PURE__ */ jsx(MenuItemImpl, {
			id: u.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": o.open,
			"aria-controls": u.contentId,
			"data-state": getOpenState(o.open),
			...i,
			ref: composeRefs(a, u.onTriggerChange),
			onClick: (a) => {
				i.onClick?.(a), !(i.disabled || a.defaultPrevented) && (a.currentTarget.focus(), o.open || o.onOpenChange(!0));
			},
			onPointerMove: composeEventHandlers(i.onPointerMove, whenMouse((a) => {
				d.onItemEnter(a), !a.defaultPrevented && !i.disabled && !o.open && !f.current && (d.onPointerGraceIntentChange(null), f.current = window.setTimeout(() => {
					o.onOpenChange(!0), g();
				}, 100));
			})),
			onPointerLeave: composeEventHandlers(i.onPointerLeave, whenMouse((i) => {
				g();
				let a = o.content?.getBoundingClientRect();
				if (a) {
					let s = o.content?.dataset.side, c = s === "right", l = c ? -5 : 5, u = a[c ? "left" : "right"], f = a[c ? "right" : "left"];
					d.onPointerGraceIntentChange({
						area: [
							{
								x: i.clientX + l,
								y: i.clientY
							},
							{
								x: u,
								y: a.top
							},
							{
								x: f,
								y: a.top
							},
							{
								x: f,
								y: a.bottom
							},
							{
								x: u,
								y: a.bottom
							}
						],
						side: s
					}), window.clearTimeout(p.current), p.current = window.setTimeout(() => d.onPointerGraceIntentChange(null), 300);
				} else {
					if (d.onTriggerLeave(i), i.defaultPrevented) return;
					d.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: composeEventHandlers(i.onKeyDown, (a) => {
				let s = d.searchRef.current !== "";
				i.disabled || s && a.key === " " || SUB_OPEN_KEYS[c.dir].includes(a.key) && (o.onOpenChange(!0), o.content?.focus(), a.preventDefault());
			})
		})
	});
});
MenuSubTrigger.displayName = SUB_TRIGGER_NAME$1;
var SUB_CONTENT_NAME$1 = "MenuSubContent", MenuSubContent = React$1.forwardRef((i, a) => {
	let o = usePortalContext$1(CONTENT_NAME$4, i.__scopeMenu), { forceMount: c = o.forceMount, ...l } = i, d = useMenuContext(CONTENT_NAME$4, i.__scopeMenu), f = useMenuRootContext(CONTENT_NAME$4, i.__scopeMenu), p = useMenuSubContext(SUB_CONTENT_NAME$1, i.__scopeMenu), m = React$1.useRef(null), h = useComposedRefs(a, m);
	return /* @__PURE__ */ jsx(Collection$2.Provider, {
		scope: i.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: c || d.open,
			children: /* @__PURE__ */ jsx(Collection$2.Slot, {
				scope: i.__scopeMenu,
				children: /* @__PURE__ */ jsx(MenuContentImpl, {
					id: p.contentId,
					"aria-labelledby": p.triggerId,
					...l,
					ref: h,
					align: "start",
					side: f.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (i) => {
						f.isUsingKeyboardRef.current && m.current?.focus(), i.preventDefault();
					},
					onCloseAutoFocus: (i) => i.preventDefault(),
					onFocusOutside: composeEventHandlers(i.onFocusOutside, (i) => {
						i.target !== p.trigger && d.onOpenChange(!1);
					}),
					onEscapeKeyDown: composeEventHandlers(i.onEscapeKeyDown, (i) => {
						f.onClose(), i.preventDefault();
					}),
					onKeyDown: composeEventHandlers(i.onKeyDown, (i) => {
						let a = i.currentTarget.contains(i.target), o = SUB_CLOSE_KEYS[f.dir].includes(i.key);
						a && o && (d.onOpenChange(!1), p.trigger?.focus(), i.preventDefault());
					})
				})
			})
		})
	});
});
MenuSubContent.displayName = SUB_CONTENT_NAME$1;
function getOpenState(i) {
	return i ? "open" : "closed";
}
function isIndeterminate(i) {
	return i === "indeterminate";
}
function getCheckedState(i) {
	return isIndeterminate(i) ? "indeterminate" : i ? "checked" : "unchecked";
}
function focusFirst(i) {
	let a = document.activeElement;
	for (let o of i) if (o === a || (o.focus(), document.activeElement !== a)) return;
}
function wrapArray$1(i, a) {
	return i.map((o, s) => i[(a + s) % i.length]);
}
function getNextMatch(i, a, o) {
	let s = a.length > 1 && Array.from(a).every((i) => i === a[0]) ? a[0] : a, c = o ? i.indexOf(o) : -1, l = wrapArray$1(i, Math.max(c, 0));
	s.length === 1 && (l = l.filter((i) => i !== o));
	let u = l.find((i) => i.toLowerCase().startsWith(s.toLowerCase()));
	return u === o ? void 0 : u;
}
function isPointInPolygon(i, a) {
	let { x: o, y: s } = i, c = !1;
	for (let i = 0, l = a.length - 1; i < a.length; l = i++) {
		let u = a[i], d = a[l], f = u.x, p = u.y, m = d.x, h = d.y;
		p > s != h > s && o < (m - f) * (s - p) / (h - p) + f && (c = !c);
	}
	return c;
}
function isPointerInGraceArea(i, a) {
	return a ? isPointInPolygon({
		x: i.clientX,
		y: i.clientY
	}, a) : !1;
}
function whenMouse(i) {
	return (a) => a.pointerType === "mouse" ? i(a) : void 0;
}
var Root3 = Menu, Anchor2 = MenuAnchor, Portal$3 = MenuPortal, Content2$2 = MenuContent, Group = MenuGroup, Label$3 = MenuLabel, Item2$1 = MenuItem, CheckboxItem = MenuCheckboxItem, RadioGroup = MenuRadioGroup, RadioItem = MenuRadioItem, ItemIndicator$1 = MenuItemIndicator, Separator$1 = MenuSeparator, Arrow2 = MenuArrow, SubTrigger = MenuSubTrigger, SubContent = MenuSubContent, DROPDOWN_MENU_NAME = "DropdownMenu", [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(DROPDOWN_MENU_NAME, [createMenuScope]), useMenuScope = createMenuScope(), [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME), DropdownMenu$1 = (i) => {
	let { __scopeDropdownMenu: a, children: o, dir: s, open: c, defaultOpen: l, onOpenChange: u, modal: d = !0 } = i, f = useMenuScope(a), p = React$1.useRef(null), [m, h] = useControllableState({
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
		onOpenChange: h,
		onOpenToggle: React$1.useCallback(() => h((i) => !i), [h]),
		modal: d,
		children: /* @__PURE__ */ jsx(Root3, {
			...f,
			open: m,
			onOpenChange: h,
			dir: s,
			modal: d,
			children: o
		})
	});
};
DropdownMenu$1.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME$3 = "DropdownMenuTrigger", DropdownMenuTrigger$1 = React$1.forwardRef((i, a) => {
	let { __scopeDropdownMenu: o, disabled: c = !1, ...u } = i, d = useDropdownMenuContext(TRIGGER_NAME$3, o);
	return /* @__PURE__ */ jsx(Anchor2, {
		asChild: !0,
		...useMenuScope(o),
		children: /* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			id: d.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": d.open,
			"aria-controls": d.open ? d.contentId : void 0,
			"data-state": d.open ? "open" : "closed",
			"data-disabled": c ? "" : void 0,
			disabled: c,
			...u,
			ref: composeRefs(a, d.triggerRef),
			onPointerDown: composeEventHandlers(i.onPointerDown, (i) => {
				!c && i.button === 0 && i.ctrlKey === !1 && (d.onOpenToggle(), d.open || i.preventDefault());
			}),
			onKeyDown: composeEventHandlers(i.onKeyDown, (i) => {
				c || (["Enter", " "].includes(i.key) && d.onOpenToggle(), i.key === "ArrowDown" && d.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(i.key) && i.preventDefault());
			})
		})
	});
});
DropdownMenuTrigger$1.displayName = TRIGGER_NAME$3;
var PORTAL_NAME$2 = "DropdownMenuPortal", DropdownMenuPortal = (i) => {
	let { __scopeDropdownMenu: a, ...o } = i;
	return /* @__PURE__ */ jsx(Portal$3, {
		...useMenuScope(a),
		...o
	});
};
DropdownMenuPortal.displayName = PORTAL_NAME$2;
var CONTENT_NAME$3 = "DropdownMenuContent", DropdownMenuContent$1 = React$1.forwardRef((i, a) => {
	let { __scopeDropdownMenu: o, ...c } = i, l = useDropdownMenuContext(CONTENT_NAME$3, o), u = useMenuScope(o), d = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(Content2$2, {
		id: l.contentId,
		"aria-labelledby": l.triggerId,
		...u,
		...c,
		ref: a,
		onCloseAutoFocus: composeEventHandlers(i.onCloseAutoFocus, (i) => {
			d.current || l.triggerRef.current?.focus(), d.current = !1, i.preventDefault();
		}),
		onInteractOutside: composeEventHandlers(i.onInteractOutside, (i) => {
			let a = i.detail.originalEvent, o = a.button === 0 && a.ctrlKey === !0, s = a.button === 2 || o;
			(!l.modal || s) && (d.current = !0);
		}),
		style: {
			...i.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
DropdownMenuContent$1.displayName = CONTENT_NAME$3;
var GROUP_NAME$1 = "DropdownMenuGroup", DropdownMenuGroup$1 = React$1.forwardRef((i, a) => {
	let { __scopeDropdownMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(Group, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuGroup$1.displayName = GROUP_NAME$1;
var LABEL_NAME$1 = "DropdownMenuLabel", DropdownMenuLabel$1 = React$1.forwardRef((i, a) => {
	let { __scopeDropdownMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(Label$3, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuLabel$1.displayName = LABEL_NAME$1;
var ITEM_NAME$1 = "DropdownMenuItem", DropdownMenuItem$1 = React$1.forwardRef((i, a) => {
	let { __scopeDropdownMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(Item2$1, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuItem$1.displayName = ITEM_NAME$1;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem", DropdownMenuCheckboxItem$1 = React$1.forwardRef((i, a) => {
	let { __scopeDropdownMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(CheckboxItem, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuCheckboxItem$1.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup", DropdownMenuRadioGroup$1 = React$1.forwardRef((i, a) => {
	let { __scopeDropdownMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(RadioGroup, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuRadioGroup$1.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem", DropdownMenuRadioItem$1 = React$1.forwardRef((i, a) => {
	let { __scopeDropdownMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(RadioItem, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuRadioItem$1.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator", DropdownMenuItemIndicator = React$1.forwardRef((i, a) => {
	let { __scopeDropdownMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(ItemIndicator$1, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME$1 = "DropdownMenuSeparator", DropdownMenuSeparator$1 = React$1.forwardRef((i, a) => {
	let { __scopeDropdownMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(Separator$1, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuSeparator$1.displayName = SEPARATOR_NAME$1;
var ARROW_NAME$1 = "DropdownMenuArrow", DropdownMenuArrow = React$1.forwardRef((i, a) => {
	let { __scopeDropdownMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(Arrow2, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuArrow.displayName = ARROW_NAME$1;
var SUB_TRIGGER_NAME = "DropdownMenuSubTrigger", DropdownMenuSubTrigger$1 = React$1.forwardRef((i, a) => {
	let { __scopeDropdownMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(SubTrigger, {
		...useMenuScope(o),
		...s,
		ref: a
	});
});
DropdownMenuSubTrigger$1.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent", DropdownMenuSubContent$1 = React$1.forwardRef((i, a) => {
	let { __scopeDropdownMenu: o, ...s } = i;
	return /* @__PURE__ */ jsx(SubContent, {
		...useMenuScope(o),
		...s,
		ref: a,
		style: {
			...i.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
DropdownMenuSubContent$1.displayName = SUB_CONTENT_NAME;
var Root2$1 = DropdownMenu$1, Trigger$2 = DropdownMenuTrigger$1, Portal2 = DropdownMenuPortal, Content2$1 = DropdownMenuContent$1, Group2 = DropdownMenuGroup$1, Label2 = DropdownMenuLabel$1, Item2 = DropdownMenuItem$1, CheckboxItem2 = DropdownMenuCheckboxItem$1, RadioGroup2 = DropdownMenuRadioGroup$1, RadioItem2 = DropdownMenuRadioItem$1, ItemIndicator2 = DropdownMenuItemIndicator, Separator2 = DropdownMenuSeparator$1, SubTrigger2 = DropdownMenuSubTrigger$1, SubContent2 = DropdownMenuSubContent$1;
function DropdownMenu({ ...i }) {
	return /* @__PURE__ */ jsx(Root2$1, {
		"data-slot": "dropdown-menu",
		...i
	});
}
var DropdownMenuTrigger = React$1.forwardRef(({ ...i }, a) => /* @__PURE__ */ jsx(Trigger$2, {
	"data-slot": "dropdown-menu-trigger",
	...i,
	ref: a
}));
DropdownMenuTrigger.displayName = Trigger$2.displayName;
var DropdownMenuContent = React$1.forwardRef(({ className: i, sideOffset: a = 4, ...o }, s) => /* @__PURE__ */ jsx(Portal2, { children: /* @__PURE__ */ jsx(Content2$1, {
	ref: s,
	"data-slot": "dropdown-menu-content",
	sideOffset: a,
	className: cn("chatbot-theme bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", i),
	...o
}) }));
DropdownMenuContent.displayName = Content2$1.displayName;
var DropdownMenuGroup = React$1.forwardRef(({ ...i }, a) => /* @__PURE__ */ jsx(Group2, {
	ref: a,
	"data-slot": "dropdown-menu-group",
	...i
}));
DropdownMenuGroup.displayName = Group2.displayName;
var DropdownMenuItem = React$1.forwardRef(({ className: i, inset: a, variant: o = "default", ...s }, c) => /* @__PURE__ */ jsx(Item2, {
	ref: c,
	"data-slot": "dropdown-menu-item",
	"data-inset": a,
	"data-variant": o,
	className: cn("focus:bg-accent capitalize focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", i),
	...s
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = React$1.forwardRef(({ className: i, children: a, checked: o, ...s }, c) => /* @__PURE__ */ jsxs(CheckboxItem2, {
	ref: c,
	"data-slot": "dropdown-menu-checkbox-item",
	className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", i),
	checked: o,
	...s,
	children: [/* @__PURE__ */ jsx("span", {
		className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(ItemIndicator2, { children: /* @__PURE__ */ jsx(Check, { className: "size-4" }) })
	}), a]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioGroup = React$1.forwardRef(({ ...i }, a) => /* @__PURE__ */ jsx(RadioGroup2, {
	ref: a,
	"data-slot": "dropdown-menu-radio-group",
	...i
}));
DropdownMenuRadioGroup.displayName = RadioGroup2.displayName;
var DropdownMenuRadioItem = React$1.forwardRef(({ className: i, children: a, ...o }, s) => /* @__PURE__ */ jsxs(RadioItem2, {
	ref: s,
	"data-slot": "dropdown-menu-radio-item",
	className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", i),
	...o,
	children: [/* @__PURE__ */ jsx("span", {
		className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(ItemIndicator2, { children: /* @__PURE__ */ jsx(Circle, { className: "size-2 fill-current" }) })
	}), a]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = React$1.forwardRef(({ className: i, inset: a, ...o }, s) => /* @__PURE__ */ jsx(Label2, {
	ref: s,
	"data-slot": "dropdown-menu-label",
	"data-inset": a,
	className: cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", i),
	...o
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(Separator2, {
	ref: o,
	"data-slot": "dropdown-menu-separator",
	className: cn("bg-border -mx-1 my-1 h-px", i),
	...a
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuSubTrigger = React$1.forwardRef(({ className: i, inset: a, children: o, ...s }, c) => /* @__PURE__ */ jsxs(SubTrigger2, {
	ref: c,
	"data-slot": "dropdown-menu-sub-trigger",
	"data-inset": a,
	className: cn("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", i),
	...s,
	children: [o, /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto size-4" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(SubContent2, {
	ref: o,
	"data-slot": "dropdown-menu-sub-content",
	className: cn("chatbot-theme bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", i),
	...a
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
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
].reduce((i, a) => {
	let o = createSlot$1(`Primitive.${a}`), s = React$1.forwardRef((i, s) => {
		let { asChild: c, ...l } = i, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: s
		});
	});
	return s.displayName = `Primitive.${a}`, {
		...i,
		[a]: s
	};
}, {}), NAME = "Label", Label$2 = React$1.forwardRef((i, a) => /* @__PURE__ */ jsx(Primitive$2.label, {
	...i,
	ref: a,
	onMouseDown: (a) => {
		a.target.closest("button, input, select, textarea") || (i.onMouseDown?.(a), !a.defaultPrevented && a.detail > 1 && a.preventDefault());
	}
}));
Label$2.displayName = NAME;
var Root$5 = Label$2, Label = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(Root$5, {
	ref: o,
	"data-slot": "label",
	className: cn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", i),
	...a
}));
Label.displayName = Root$5.displayName;
function clamp$1(i, [a, o]) {
	return Math.min(o, Math.max(a, i));
}
function usePrevious(i) {
	let a = React$1.useRef({
		value: i,
		previous: i
	});
	return React$1.useMemo(() => (a.current.value !== i && (a.current.previous = a.current.value, a.current.value = i), a.current.previous), [i]);
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
}, SLIDER_NAME = "Slider", [Collection$1, useCollection$1, createCollectionScope$1] = createCollection(SLIDER_NAME), [createSliderContext, createSliderScope] = createContextScope(SLIDER_NAME, [createCollectionScope$1]), [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME), Slider$1 = React$1.forwardRef((i, a) => {
	let { name: o, min: c = 0, max: l = 100, step: u = 1, orientation: d = "horizontal", disabled: f = !1, minStepsBetweenThumbs: p = 0, defaultValue: m = [c], value: h, onValueChange: g = () => {}, onValueCommit: _ = () => {}, inverted: v = !1, form: y, ...b } = i, x = React$1.useRef(/* @__PURE__ */ new Set()), S = React$1.useRef(0), C = d === "horizontal" ? SliderHorizontal : SliderVertical, [w = [], T] = useControllableState({
		prop: h,
		defaultProp: m,
		onChange: (i) => {
			[...x.current][S.current]?.focus(), g(i);
		}
	}), E = React$1.useRef(w);
	function O(i) {
		j(i, getClosestValueIndex(w, i));
	}
	function k(i) {
		j(i, S.current);
	}
	function A() {
		let i = E.current[S.current];
		w[S.current] !== i && _(w);
	}
	function j(i, a, { commit: o } = { commit: !1 }) {
		let s = getDecimalCount(u), d = clamp$1(roundValue(Math.round((i - c) / u) * u + c, s), [c, l]);
		T((i = []) => {
			let s = getNextSortedValues(i, d, a);
			if (hasMinStepsBetweenValues(s, p * u)) {
				S.current = s.indexOf(d);
				let a = String(s) !== String(i);
				return a && o && _(s), a ? s : i;
			} else return i;
		});
	}
	return /* @__PURE__ */ jsx(SliderProvider, {
		scope: i.__scopeSlider,
		name: o,
		disabled: f,
		min: c,
		max: l,
		valueIndexToChangeRef: S,
		thumbs: x.current,
		values: w,
		orientation: d,
		form: y,
		children: /* @__PURE__ */ jsx(Collection$1.Provider, {
			scope: i.__scopeSlider,
			children: /* @__PURE__ */ jsx(Collection$1.Slot, {
				scope: i.__scopeSlider,
				children: /* @__PURE__ */ jsx(C, {
					"aria-disabled": f,
					"data-disabled": f ? "" : void 0,
					...b,
					ref: a,
					onPointerDown: composeEventHandlers(b.onPointerDown, () => {
						f || (E.current = w);
					}),
					min: c,
					max: l,
					inverted: v,
					onSlideStart: f ? void 0 : O,
					onSlideMove: f ? void 0 : k,
					onSlideEnd: f ? void 0 : A,
					onHomeKeyDown: () => !f && j(c, 0, { commit: !0 }),
					onEndKeyDown: () => !f && j(l, w.length - 1, { commit: !0 }),
					onStepKeyDown: ({ event: i, direction: a }) => {
						if (!f) {
							let o = PAGE_KEYS.includes(i.key) || i.shiftKey && ARROW_KEYS.includes(i.key) ? 10 : 1, s = S.current, c = w[s];
							j(c + u * o * a, s, { commit: !0 });
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
}), SliderHorizontal = React$1.forwardRef((i, a) => {
	let { min: o, max: s, dir: c, inverted: l, onSlideStart: d, onSlideMove: f, onSlideEnd: p, onStepKeyDown: m, ...h } = i, [g, _] = React$1.useState(null), v = useComposedRefs(a, (i) => _(i)), y = React$1.useRef(void 0), b = useDirection(c), x = b === "ltr", S = x && !l || !x && l;
	function C(i) {
		let a = y.current || g.getBoundingClientRect(), c = linearScale([0, a.width], S ? [o, s] : [s, o]);
		return y.current = a, c(i - a.left);
	}
	return /* @__PURE__ */ jsx(SliderOrientationProvider, {
		scope: i.__scopeSlider,
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
			onSlideStart: (i) => {
				let a = C(i.clientX);
				d?.(a);
			},
			onSlideMove: (i) => {
				let a = C(i.clientX);
				f?.(a);
			},
			onSlideEnd: () => {
				y.current = void 0, p?.();
			},
			onStepKeyDown: (i) => {
				let a = BACK_KEYS[S ? "from-left" : "from-right"].includes(i.key);
				m?.({
					event: i,
					direction: a ? -1 : 1
				});
			}
		})
	});
}), SliderVertical = React$1.forwardRef((i, a) => {
	let { min: o, max: s, inverted: c, onSlideStart: l, onSlideMove: d, onSlideEnd: f, onStepKeyDown: p, ...m } = i, h = React$1.useRef(null), g = useComposedRefs(a, h), _ = React$1.useRef(void 0), v = !c;
	function y(i) {
		let a = _.current || h.current.getBoundingClientRect(), c = linearScale([0, a.height], v ? [s, o] : [o, s]);
		return _.current = a, c(i - a.top);
	}
	return /* @__PURE__ */ jsx(SliderOrientationProvider, {
		scope: i.__scopeSlider,
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
			onSlideStart: (i) => {
				let a = y(i.clientY);
				l?.(a);
			},
			onSlideMove: (i) => {
				let a = y(i.clientY);
				d?.(a);
			},
			onSlideEnd: () => {
				_.current = void 0, f?.();
			},
			onStepKeyDown: (i) => {
				let a = BACK_KEYS[v ? "from-bottom" : "from-top"].includes(i.key);
				p?.({
					event: i,
					direction: a ? -1 : 1
				});
			}
		})
	});
}), SliderImpl = React$1.forwardRef((i, a) => {
	let { __scopeSlider: o, onSlideStart: c, onSlideMove: l, onSlideEnd: u, onHomeKeyDown: d, onEndKeyDown: f, onStepKeyDown: p, ...h } = i, g = useSliderContext(SLIDER_NAME, o);
	return /* @__PURE__ */ jsx(Primitive.span, {
		...h,
		ref: a,
		onKeyDown: composeEventHandlers(i.onKeyDown, (i) => {
			i.key === "Home" ? (d(i), i.preventDefault()) : i.key === "End" ? (f(i), i.preventDefault()) : PAGE_KEYS.concat(ARROW_KEYS).includes(i.key) && (p(i), i.preventDefault());
		}),
		onPointerDown: composeEventHandlers(i.onPointerDown, (i) => {
			let a = i.target;
			a.setPointerCapture(i.pointerId), i.preventDefault(), g.thumbs.has(a) ? a.focus() : c(i);
		}),
		onPointerMove: composeEventHandlers(i.onPointerMove, (i) => {
			i.target.hasPointerCapture(i.pointerId) && l(i);
		}),
		onPointerUp: composeEventHandlers(i.onPointerUp, (i) => {
			let a = i.target;
			a.hasPointerCapture(i.pointerId) && (a.releasePointerCapture(i.pointerId), u(i));
		})
	});
}), TRACK_NAME = "SliderTrack", SliderTrack = React$1.forwardRef((i, a) => {
	let { __scopeSlider: o, ...s } = i, c = useSliderContext(TRACK_NAME, o);
	return /* @__PURE__ */ jsx(Primitive.span, {
		"data-disabled": c.disabled ? "" : void 0,
		"data-orientation": c.orientation,
		...s,
		ref: a
	});
});
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange", SliderRange = React$1.forwardRef((i, a) => {
	let { __scopeSlider: o, ...s } = i, c = useSliderContext(RANGE_NAME, o), l = useSliderOrientationContext(RANGE_NAME, o), d = useComposedRefs(a, React$1.useRef(null)), f = c.values.length, p = c.values.map((i) => convertValueToPercentage(i, c.min, c.max)), h = f > 1 ? Math.min(...p) : 0, g = 100 - Math.max(...p);
	return /* @__PURE__ */ jsx(Primitive.span, {
		"data-orientation": c.orientation,
		"data-disabled": c.disabled ? "" : void 0,
		...s,
		ref: d,
		style: {
			...i.style,
			[l.startEdge]: h + "%",
			[l.endEdge]: g + "%"
		}
	});
});
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME$1 = "SliderThumb", SliderThumb = React$1.forwardRef((i, a) => {
	let o = useCollection$1(i.__scopeSlider), [s, c] = React$1.useState(null), l = useComposedRefs(a, (i) => c(i)), d = React$1.useMemo(() => s ? o().findIndex((i) => i.ref.current === s) : -1, [o, s]);
	return /* @__PURE__ */ jsx(SliderThumbImpl, {
		...i,
		ref: l,
		index: d
	});
}), SliderThumbImpl = React$1.forwardRef((i, a) => {
	let { __scopeSlider: o, index: c, name: l, ...d } = i, f = useSliderContext(THUMB_NAME$1, o), p = useSliderOrientationContext(THUMB_NAME$1, o), [h, _] = React$1.useState(null), v = useComposedRefs(a, (i) => _(i)), y = h ? f.form || !!h.closest("form") : !0, b = useSize(h), x = f.values[c], S = x === void 0 ? 0 : convertValueToPercentage(x, f.min, f.max), C = getLabel(c, f.values.length), w = b?.[p.size], T = w ? getThumbInBoundsOffset(w, S, p.direction) : 0;
	return React$1.useEffect(() => {
		if (h) return f.thumbs.add(h), () => {
			f.thumbs.delete(h);
		};
	}, [h, f.thumbs]), /* @__PURE__ */ jsxs("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[p.startEdge]: `calc(${S}% + ${T}px)`
		},
		children: [/* @__PURE__ */ jsx(Collection$1.ItemSlot, {
			scope: i.__scopeSlider,
			children: /* @__PURE__ */ jsx(Primitive.span, {
				role: "slider",
				"aria-label": i["aria-label"] || C,
				"aria-valuemin": f.min,
				"aria-valuenow": x,
				"aria-valuemax": f.max,
				"aria-orientation": f.orientation,
				"data-orientation": f.orientation,
				"data-disabled": f.disabled ? "" : void 0,
				tabIndex: f.disabled ? void 0 : 0,
				...d,
				ref: v,
				style: x === void 0 ? { display: "none" } : i.style,
				onFocus: composeEventHandlers(i.onFocus, () => {
					f.valueIndexToChangeRef.current = c;
				})
			})
		}), y && /* @__PURE__ */ jsx(SliderBubbleInput, {
			name: l ?? (f.name ? f.name + (f.values.length > 1 ? "[]" : "") : void 0),
			form: f.form,
			value: x
		}, c)]
	});
});
SliderThumb.displayName = THUMB_NAME$1;
var BUBBLE_INPUT_NAME$2 = "RadioBubbleInput", SliderBubbleInput = React$1.forwardRef(({ __scopeSlider: i, value: a, ...o }, s) => {
	let c = React$1.useRef(null), l = useComposedRefs(c, s), d = usePrevious(a);
	return React$1.useEffect(() => {
		let i = c.current;
		if (!i) return;
		let o = window.HTMLInputElement.prototype, s = Object.getOwnPropertyDescriptor(o, "value").set;
		if (d !== a && s) {
			let o = new Event("input", { bubbles: !0 });
			s.call(i, a), i.dispatchEvent(o);
		}
	}, [d, a]), /* @__PURE__ */ jsx(Primitive.input, {
		style: { display: "none" },
		...o,
		ref: l,
		defaultValue: a
	});
});
SliderBubbleInput.displayName = BUBBLE_INPUT_NAME$2;
function getNextSortedValues(i = [], a, o) {
	let s = [...i];
	return s[o] = a, s.sort((i, a) => i - a);
}
function convertValueToPercentage(i, a, o) {
	return clamp$1(100 / (o - a) * (i - a), [0, 100]);
}
function getLabel(i, a) {
	if (a > 2) return `Value ${i + 1} of ${a}`;
	if (a === 2) return ["Minimum", "Maximum"][i];
}
function getClosestValueIndex(i, a) {
	if (i.length === 1) return 0;
	let o = i.map((i) => Math.abs(i - a)), s = Math.min(...o);
	return o.indexOf(s);
}
function getThumbInBoundsOffset(i, a, o) {
	let s = i / 2;
	return (s - linearScale([0, 50], [0, s])(a) * o) * o;
}
function getStepsBetweenValues(i) {
	return i.slice(0, -1).map((a, o) => i[o + 1] - a);
}
function hasMinStepsBetweenValues(i, a) {
	if (a > 0) {
		let o = getStepsBetweenValues(i);
		return Math.min(...o) >= a;
	}
	return !0;
}
function linearScale(i, a) {
	return (o) => {
		if (i[0] === i[1] || a[0] === a[1]) return a[0];
		let s = (a[1] - a[0]) / (i[1] - i[0]);
		return a[0] + s * (o - i[0]);
	};
}
function getDecimalCount(i) {
	return (String(i).split(".")[1] || "").length;
}
function roundValue(i, a) {
	let o = 10 ** a;
	return Math.round(i * o) / o;
}
var Root$4 = Slider$1, Track = SliderTrack, Range = SliderRange, Thumb$1 = SliderThumb, Slider = React$1.forwardRef(({ className: i, defaultValue: a, value: o, min: s = 0, max: c = 100, ...l }, u) => {
	let f = React$1.useMemo(() => Array.isArray(o) ? o : Array.isArray(a) ? a : [s, c], [
		o,
		a,
		s,
		c
	]);
	return /* @__PURE__ */ jsxs(Root$4, {
		ref: u,
		"data-slot": "slider",
		defaultValue: a,
		value: o,
		min: s,
		max: c,
		className: cn("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", i),
		...l,
		children: [/* @__PURE__ */ jsx(Track, {
			"data-slot": "slider-track",
			className: cn("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),
			children: /* @__PURE__ */ jsx(Range, {
				"data-slot": "slider-range",
				className: cn("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
			})
		}), Array.from({ length: f.length }, (i, a) => /* @__PURE__ */ jsx(Thumb$1, {
			"data-slot": "slider-thumb",
			className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
		}, a))]
	});
});
Slider.displayName = Root$4.displayName;
var SWITCH_NAME = "Switch", [createSwitchContext, createSwitchScope] = createContextScope(SWITCH_NAME), [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME), Switch$1 = React$1.forwardRef((i, a) => {
	let { __scopeSwitch: o, name: c, checked: l, defaultChecked: d, required: f, disabled: p, value: h = "on", onCheckedChange: g, form: _, ...v } = i, [y, b] = React$1.useState(null), x = useComposedRefs(a, (i) => b(i)), S = React$1.useRef(!1), C = y ? _ || !!y.closest("form") : !0, [w, T] = useControllableState({
		prop: l,
		defaultProp: d ?? !1,
		onChange: g,
		caller: SWITCH_NAME
	});
	return /* @__PURE__ */ jsxs(SwitchProvider, {
		scope: o,
		checked: w,
		disabled: p,
		children: [/* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			role: "switch",
			"aria-checked": w,
			"aria-required": f,
			"data-state": getState$2(w),
			"data-disabled": p ? "" : void 0,
			disabled: p,
			value: h,
			...v,
			ref: x,
			onClick: composeEventHandlers(i.onClick, (i) => {
				T((i) => !i), C && (S.current = i.isPropagationStopped(), S.current || i.stopPropagation());
			})
		}), C && /* @__PURE__ */ jsx(SwitchBubbleInput, {
			control: y,
			bubbles: !S.current,
			name: c,
			value: h,
			checked: w,
			required: f,
			disabled: p,
			form: _,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb", SwitchThumb = React$1.forwardRef((i, a) => {
	let { __scopeSwitch: o, ...s } = i, c = useSwitchContext(THUMB_NAME, o);
	return /* @__PURE__ */ jsx(Primitive.span, {
		"data-state": getState$2(c.checked),
		"data-disabled": c.disabled ? "" : void 0,
		...s,
		ref: a
	});
});
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME$1 = "SwitchBubbleInput", SwitchBubbleInput = React$1.forwardRef(({ __scopeSwitch: i, control: a, checked: o, bubbles: s = !0, ...c }, l) => {
	let d = React$1.useRef(null), f = useComposedRefs(d, l), p = usePrevious(o), m = useSize(a);
	return React$1.useEffect(() => {
		let i = d.current;
		if (!i) return;
		let a = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(a, "checked").set;
		if (p !== o && c) {
			let a = new Event("click", { bubbles: s });
			c.call(i, o), i.dispatchEvent(a);
		}
	}, [
		p,
		o,
		s
	]), /* @__PURE__ */ jsx("input", {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: o,
		...c,
		tabIndex: -1,
		ref: f,
		style: {
			...c.style,
			...m,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME$1;
function getState$2(i) {
	return i ? "checked" : "unchecked";
}
var Root$3 = Switch$1, Thumb = SwitchThumb, Switch = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(Root$3, {
	ref: o,
	"data-slot": "switch",
	className: cn("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", i),
	...a,
	children: /* @__PURE__ */ jsx(Thumb, {
		"data-slot": "switch-thumb",
		className: cn("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
	})
}));
Switch.displayName = Root$3.displayName;
/* @__NO_SIDE_EFFECTS__ */
function createSlot$2(i) {
	let a = /* @__PURE__ */ createSlotClone$1(i), o = React$1.forwardRef((i, o) => {
		let { children: s, ...c } = i, l = React$1.Children.toArray(s), u = l.find(isSlottable$1);
		if (u) {
			let i = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(i) > 1 ? React$1.Children.only(null) : React$1.isValidElement(i) ? i.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(i) ? React$1.cloneElement(i, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${i}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$1(i) {
	let a = React$1.forwardRef((i, a) => {
		let { children: o, ...s } = i;
		if (React$1.isValidElement(o)) {
			let i = getElementRef$1(o), c = mergeProps$1(s, o.props);
			return o.type !== React$1.Fragment && (c.ref = a ? composeRefs(a, i) : i), React$1.cloneElement(o, c);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${i}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$1 = Symbol("radix.slottable");
function isSlottable$1(i) {
	return React$1.isValidElement(i) && typeof i.type == "function" && "__radixId" in i.type && i.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
function mergeProps$1(i, a) {
	let o = { ...a };
	for (let s in a) {
		let c = i[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...i) => {
			let a = l(...i);
			return c(...i), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...i,
		...o
	};
}
function getElementRef$1(i) {
	let a = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? i.ref : (a = Object.getOwnPropertyDescriptor(i, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? i.props.ref : i.props.ref || i.ref);
}
var OPEN_KEYS = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], SELECTION_KEYS = [" ", "Enter"], SELECT_NAME = "Select", [Collection, useCollection, createCollectionScope] = createCollection(SELECT_NAME), [createSelectContext, createSelectScope] = createContextScope(SELECT_NAME, [createCollectionScope, createPopperScope]), usePopperScope = createPopperScope(), [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME), [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME), Select$1 = (i) => {
	let { __scopeSelect: a, children: o, open: s, defaultOpen: c, onOpenChange: l, value: u, defaultValue: d, onValueChange: f, dir: p, name: m, autoComplete: h, disabled: g, required: _, form: v } = i, y = usePopperScope(a), [b, x] = React$1.useState(null), [S, w] = React$1.useState(null), [T, E] = React$1.useState(!1), O = useDirection(p), [k, A] = useControllableState({
		prop: s,
		defaultProp: c ?? !1,
		onChange: l,
		caller: SELECT_NAME
	}), [j, M] = useControllableState({
		prop: u,
		defaultProp: d,
		onChange: f,
		caller: SELECT_NAME
	}), N = React$1.useRef(null), P = b ? v || !!b.closest("form") : !0, [F, L] = React$1.useState(/* @__PURE__ */ new Set()), R = Array.from(F).map((i) => i.props.value).join(";");
	return /* @__PURE__ */ jsx(Root2$3, {
		...y,
		children: /* @__PURE__ */ jsxs(SelectProvider, {
			required: _,
			scope: a,
			trigger: b,
			onTriggerChange: x,
			valueNode: S,
			onValueNodeChange: w,
			valueNodeHasChildren: T,
			onValueNodeHasChildrenChange: E,
			contentId: useId$1(),
			value: j,
			onValueChange: M,
			open: k,
			onOpenChange: A,
			dir: O,
			triggerPointerDownPosRef: N,
			disabled: g,
			children: [/* @__PURE__ */ jsx(Collection.Provider, {
				scope: a,
				children: /* @__PURE__ */ jsx(SelectNativeOptionsProvider, {
					scope: i.__scopeSelect,
					onNativeOptionAdd: React$1.useCallback((i) => {
						L((a) => new Set(a).add(i));
					}, []),
					onNativeOptionRemove: React$1.useCallback((i) => {
						L((a) => {
							let o = new Set(a);
							return o.delete(i), o;
						});
					}, []),
					children: o
				})
			}), P ? /* @__PURE__ */ jsxs(SelectBubbleInput, {
				"aria-hidden": !0,
				required: _,
				tabIndex: -1,
				name: m,
				autoComplete: h,
				value: j,
				onChange: (i) => M(i.target.value),
				disabled: g,
				form: v,
				children: [j === void 0 ? /* @__PURE__ */ jsx("option", { value: "" }) : null, Array.from(F)]
			}, R) : null]
		})
	});
};
Select$1.displayName = SELECT_NAME;
var TRIGGER_NAME$2 = "SelectTrigger", SelectTrigger$1 = React$1.forwardRef((i, a) => {
	let { __scopeSelect: o, disabled: c = !1, ...l } = i, d = usePopperScope(o), f = useSelectContext(TRIGGER_NAME$2, o), p = f.disabled || c, h = useComposedRefs(a, f.onTriggerChange), g = useCollection(o), _ = React$1.useRef("touch"), [v, y, b] = useTypeaheadSearch((i) => {
		let a = g().filter((i) => !i.disabled), o = findNextItem(a, i, a.find((i) => i.value === f.value));
		o !== void 0 && f.onValueChange(o.value);
	}), S = (i) => {
		p || (f.onOpenChange(!0), b()), i && (f.triggerPointerDownPosRef.current = {
			x: Math.round(i.pageX),
			y: Math.round(i.pageY)
		});
	};
	return /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...d,
		children: /* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			role: "combobox",
			"aria-controls": f.contentId,
			"aria-expanded": f.open,
			"aria-required": f.required,
			"aria-autocomplete": "none",
			dir: f.dir,
			"data-state": f.open ? "open" : "closed",
			disabled: p,
			"data-disabled": p ? "" : void 0,
			"data-placeholder": shouldShowPlaceholder(f.value) ? "" : void 0,
			...l,
			ref: h,
			onClick: composeEventHandlers(l.onClick, (i) => {
				i.currentTarget.focus(), _.current !== "mouse" && S(i);
			}),
			onPointerDown: composeEventHandlers(l.onPointerDown, (i) => {
				_.current = i.pointerType;
				let a = i.target;
				a.hasPointerCapture(i.pointerId) && a.releasePointerCapture(i.pointerId), i.button === 0 && i.ctrlKey === !1 && i.pointerType === "mouse" && (S(i), i.preventDefault());
			}),
			onKeyDown: composeEventHandlers(l.onKeyDown, (i) => {
				let a = v.current !== "";
				!(i.ctrlKey || i.altKey || i.metaKey) && i.key.length === 1 && y(i.key), !(a && i.key === " ") && OPEN_KEYS.includes(i.key) && (S(), i.preventDefault());
			})
		})
	});
});
SelectTrigger$1.displayName = TRIGGER_NAME$2;
var VALUE_NAME = "SelectValue", SelectValue$1 = React$1.forwardRef((i, a) => {
	let { __scopeSelect: o, className: s, style: c, children: l, placeholder: d = "", ...f } = i, p = useSelectContext(VALUE_NAME, o), { onValueNodeHasChildrenChange: h } = p, g = l !== void 0, _ = useComposedRefs(a, p.onValueNodeChange);
	return useLayoutEffect2(() => {
		h(g);
	}, [h, g]), /* @__PURE__ */ jsx(Primitive.span, {
		...f,
		ref: _,
		style: { pointerEvents: "none" },
		children: shouldShowPlaceholder(p.value) ? /* @__PURE__ */ jsx(Fragment$1, { children: d }) : l
	});
});
SelectValue$1.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon", SelectIcon = React$1.forwardRef((i, a) => {
	let { __scopeSelect: o, children: s, ...c } = i;
	return /* @__PURE__ */ jsx(Primitive.span, {
		"aria-hidden": !0,
		...c,
		ref: a,
		children: s || "▼"
	});
});
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME$1 = "SelectPortal", SelectPortal = (i) => /* @__PURE__ */ jsx(Portal, {
	asChild: !0,
	...i
});
SelectPortal.displayName = PORTAL_NAME$1;
var CONTENT_NAME$2 = "SelectContent", SelectContent$1 = React$1.forwardRef((i, a) => {
	let o = useSelectContext(CONTENT_NAME$2, i.__scopeSelect), [s, c] = React$1.useState();
	if (useLayoutEffect2(() => {
		c(new DocumentFragment());
	}, []), !o.open) {
		let a = s;
		return a ? ReactDOM$1.createPortal(/* @__PURE__ */ jsx(SelectContentProvider, {
			scope: i.__scopeSelect,
			children: /* @__PURE__ */ jsx(Collection.Slot, {
				scope: i.__scopeSelect,
				children: /* @__PURE__ */ jsx("div", { children: i.children })
			})
		}), a) : null;
	}
	return /* @__PURE__ */ jsx(SelectContentImpl, {
		...i,
		ref: a
	});
});
SelectContent$1.displayName = CONTENT_NAME$2;
var CONTENT_MARGIN = 10, [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME$2), CONTENT_IMPL_NAME = "SelectContentImpl", Slot$2 = /* @__PURE__ */ createSlot$2("SelectContent.RemoveScroll"), SelectContentImpl = React$1.forwardRef((i, a) => {
	let { __scopeSelect: o, position: c = "item-aligned", onCloseAutoFocus: l, onEscapeKeyDown: d, onPointerDownOutside: f, side: p, sideOffset: m, align: h, alignOffset: g, arrowPadding: _, collisionBoundary: y, collisionPadding: b, sticky: x, hideWhenDetached: S, avoidCollisions: C, ...w } = i, T = useSelectContext(CONTENT_NAME$2, o), [E, D] = React$1.useState(null), [O, k] = React$1.useState(null), A = useComposedRefs(a, (i) => D(i)), [j, M] = React$1.useState(null), [N, P] = React$1.useState(null), F = useCollection(o), [I, L] = React$1.useState(!1), R = React$1.useRef(!1);
	React$1.useEffect(() => {
		if (E) return hideOthers(E);
	}, [E]), useFocusGuards();
	let z = React$1.useCallback((i) => {
		let [a, ...o] = F().map((i) => i.ref.current), [s] = o.slice(-1), c = document.activeElement;
		for (let o of i) if (o === c || (o?.scrollIntoView({ block: "nearest" }), o === a && O && (O.scrollTop = 0), o === s && O && (O.scrollTop = O.scrollHeight), o?.focus(), document.activeElement !== c)) return;
	}, [F, O]), V = React$1.useCallback(() => z([j, E]), [
		z,
		j,
		E
	]);
	React$1.useEffect(() => {
		I && V();
	}, [I, V]);
	let { onOpenChange: H, triggerPointerDownPosRef: U } = T;
	React$1.useEffect(() => {
		if (E) {
			let i = {
				x: 0,
				y: 0
			}, a = (a) => {
				i = {
					x: Math.abs(Math.round(a.pageX) - (U.current?.x ?? 0)),
					y: Math.abs(Math.round(a.pageY) - (U.current?.y ?? 0))
				};
			}, o = (o) => {
				i.x <= 10 && i.y <= 10 ? o.preventDefault() : E.contains(o.target) || H(!1), document.removeEventListener("pointermove", a), U.current = null;
			};
			return U.current !== null && (document.addEventListener("pointermove", a), document.addEventListener("pointerup", o, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", a), document.removeEventListener("pointerup", o, { capture: !0 });
			};
		}
	}, [
		E,
		H,
		U
	]), React$1.useEffect(() => {
		let i = () => H(!1);
		return window.addEventListener("blur", i), window.addEventListener("resize", i), () => {
			window.removeEventListener("blur", i), window.removeEventListener("resize", i);
		};
	}, [H]);
	let [W, G] = useTypeaheadSearch((i) => {
		let a = F().filter((i) => !i.disabled), o = findNextItem(a, i, a.find((i) => i.ref.current === document.activeElement));
		o && setTimeout(() => o.ref.current.focus());
	}), K = React$1.useCallback((i, a, o) => {
		let s = !R.current && !o;
		(T.value !== void 0 && T.value === a || s) && (M(i), s && (R.current = !0));
	}, [T.value]), q = React$1.useCallback(() => E?.focus(), [E]), lw = React$1.useCallback((i, a, o) => {
		let s = !R.current && !o;
		(T.value !== void 0 && T.value === a || s) && P(i);
	}, [T.value]), J = c === "popper" ? SelectPopperPosition : SelectItemAlignedPosition, Y = J === SelectPopperPosition ? {
		side: p,
		sideOffset: m,
		align: h,
		alignOffset: g,
		arrowPadding: _,
		collisionBoundary: y,
		collisionPadding: b,
		sticky: x,
		hideWhenDetached: S,
		avoidCollisions: C
	} : {};
	return /* @__PURE__ */ jsx(SelectContentProvider, {
		scope: o,
		content: E,
		viewport: O,
		onViewportChange: k,
		itemRefCallback: K,
		selectedItem: j,
		onItemLeave: q,
		itemTextRefCallback: lw,
		focusSelectedItem: V,
		selectedItemText: N,
		position: c,
		isPositioned: I,
		searchRef: W,
		children: /* @__PURE__ */ jsx(Combination_default, {
			as: Slot$2,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ jsx(FocusScope, {
				asChild: !0,
				trapped: T.open,
				onMountAutoFocus: (i) => {
					i.preventDefault();
				},
				onUnmountAutoFocus: composeEventHandlers(l, (i) => {
					T.trigger?.focus({ preventScroll: !0 }), i.preventDefault();
				}),
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: d,
					onPointerDownOutside: f,
					onFocusOutside: (i) => i.preventDefault(),
					onDismiss: () => T.onOpenChange(!1),
					children: /* @__PURE__ */ jsx(J, {
						role: "listbox",
						id: T.contentId,
						"data-state": T.open ? "open" : "closed",
						dir: T.dir,
						onContextMenu: (i) => i.preventDefault(),
						...w,
						...Y,
						onPlaced: () => L(!0),
						ref: A,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...w.style
						},
						onKeyDown: composeEventHandlers(w.onKeyDown, (i) => {
							let a = i.ctrlKey || i.altKey || i.metaKey;
							if (i.key === "Tab" && i.preventDefault(), !a && i.key.length === 1 && G(i.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(i.key)) {
								let a = F().filter((i) => !i.disabled).map((i) => i.ref.current);
								if (["ArrowUp", "End"].includes(i.key) && (a = a.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(i.key)) {
									let o = i.target, s = a.indexOf(o);
									a = a.slice(s + 1);
								}
								setTimeout(() => z(a)), i.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition", SelectItemAlignedPosition = React$1.forwardRef((i, a) => {
	let { __scopeSelect: o, onPlaced: s, ...c } = i, l = useSelectContext(CONTENT_NAME$2, o), d = useSelectContentContext(CONTENT_NAME$2, o), [f, p] = React$1.useState(null), [h, g] = React$1.useState(null), _ = useComposedRefs(a, (i) => g(i)), v = useCollection(o), y = React$1.useRef(!1), b = React$1.useRef(!0), { viewport: x, selectedItem: S, selectedItemText: C, focusSelectedItem: w } = d, T = React$1.useCallback(() => {
		if (l.trigger && l.valueNode && f && h && x && S && C) {
			let i = l.trigger.getBoundingClientRect(), a = h.getBoundingClientRect(), o = l.valueNode.getBoundingClientRect(), c = C.getBoundingClientRect();
			if (l.dir !== "rtl") {
				let s = c.left - a.left, l = o.left - s, u = i.left - l, d = i.width + u, p = Math.max(d, a.width), m = window.innerWidth - CONTENT_MARGIN, h = clamp$1(l, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, m - p)]);
				f.style.minWidth = d + "px", f.style.left = h + "px";
			} else {
				let s = a.right - c.right, l = window.innerWidth - o.right - s, u = window.innerWidth - i.right - l, d = i.width + u, p = Math.max(d, a.width), m = window.innerWidth - CONTENT_MARGIN, h = clamp$1(l, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, m - p)]);
				f.style.minWidth = d + "px", f.style.right = h + "px";
			}
			let u = v(), d = window.innerHeight - CONTENT_MARGIN * 2, p = x.scrollHeight, m = window.getComputedStyle(h), g = parseInt(m.borderTopWidth, 10), _ = parseInt(m.paddingTop, 10), b = parseInt(m.borderBottomWidth, 10), w = parseInt(m.paddingBottom, 10), T = g + _ + p + w + b, E = Math.min(S.offsetHeight * 5, T), D = window.getComputedStyle(x), O = parseInt(D.paddingTop, 10), k = parseInt(D.paddingBottom, 10), A = i.top + i.height / 2 - CONTENT_MARGIN, j = d - A, M = S.offsetHeight / 2, N = S.offsetTop + M, P = g + _ + N, F = T - P;
			if (P <= A) {
				let i = u.length > 0 && S === u[u.length - 1].ref.current;
				f.style.bottom = "0px";
				let a = h.clientHeight - x.offsetTop - x.offsetHeight, o = P + Math.max(j, M + (i ? k : 0) + a + b);
				f.style.height = o + "px";
			} else {
				let i = u.length > 0 && S === u[0].ref.current;
				f.style.top = "0px";
				let a = Math.max(A, g + x.offsetTop + (i ? O : 0) + M) + F;
				f.style.height = a + "px", x.scrollTop = P - A + x.offsetTop;
			}
			f.style.margin = `${CONTENT_MARGIN}px 0`, f.style.minHeight = E + "px", f.style.maxHeight = d + "px", s?.(), requestAnimationFrame(() => y.current = !0);
		}
	}, [
		v,
		l.trigger,
		l.valueNode,
		f,
		h,
		x,
		S,
		C,
		l.dir,
		s
	]);
	useLayoutEffect2(() => T(), [T]);
	let [E, D] = React$1.useState();
	return useLayoutEffect2(() => {
		h && D(window.getComputedStyle(h).zIndex);
	}, [h]), /* @__PURE__ */ jsx(SelectViewportProvider, {
		scope: o,
		contentWrapper: f,
		shouldExpandOnScrollRef: y,
		onScrollButtonChange: React$1.useCallback((i) => {
			i && b.current === !0 && (T(), w?.(), b.current = !1);
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
				...c,
				ref: _,
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
var POPPER_POSITION_NAME = "SelectPopperPosition", SelectPopperPosition = React$1.forwardRef((i, a) => {
	let { __scopeSelect: o, align: s = "start", collisionPadding: c = CONTENT_MARGIN, ...l } = i;
	return /* @__PURE__ */ jsx(Content$1, {
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
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME$2, {}), VIEWPORT_NAME = "SelectViewport", SelectViewport = React$1.forwardRef((i, a) => {
	let { __scopeSelect: o, nonce: c, ...l } = i, d = useSelectContentContext(VIEWPORT_NAME, o), f = useSelectViewportContext(VIEWPORT_NAME, o), p = useComposedRefs(a, d.onViewportChange), h = React$1.useRef(0);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: c
	}), /* @__PURE__ */ jsx(Collection.Slot, {
		scope: o,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...l,
			ref: p,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...l.style
			},
			onScroll: composeEventHandlers(l.onScroll, (i) => {
				let a = i.currentTarget, { contentWrapper: o, shouldExpandOnScrollRef: s } = f;
				if (s?.current && o) {
					let i = Math.abs(h.current - a.scrollTop);
					if (i > 0) {
						let s = window.innerHeight - CONTENT_MARGIN * 2, c = parseFloat(o.style.minHeight), l = parseFloat(o.style.height), u = Math.max(c, l);
						if (u < s) {
							let c = u + i, l = Math.min(s, c), d = c - l;
							o.style.height = l + "px", o.style.bottom === "0px" && (a.scrollTop = d > 0 ? d : 0, o.style.justifyContent = "flex-end");
						}
					}
				}
				h.current = a.scrollTop;
			})
		})
	})] });
});
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup", [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME), SelectGroup = React$1.forwardRef((i, a) => {
	let { __scopeSelect: o, ...s } = i, c = useId$1();
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
var LABEL_NAME = "SelectLabel", SelectLabel$1 = React$1.forwardRef((i, a) => {
	let { __scopeSelect: o, ...s } = i, c = useSelectGroupContext(LABEL_NAME, o);
	return /* @__PURE__ */ jsx(Primitive.div, {
		id: c.id,
		...s,
		ref: a
	});
});
SelectLabel$1.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem", [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME), SelectItem$1 = React$1.forwardRef((i, a) => {
	let { __scopeSelect: o, value: c, disabled: l = !1, textValue: d, ...f } = i, p = useSelectContext(ITEM_NAME, o), h = useSelectContentContext(ITEM_NAME, o), g = p.value === c, [_, v] = React$1.useState(d ?? ""), [y, b] = React$1.useState(!1), x = useComposedRefs(a, (i) => h.itemRefCallback?.(i, c, l)), S = useId$1(), C = React$1.useRef("touch"), w = () => {
		l || (p.onValueChange(c), p.onOpenChange(!1));
	};
	if (c === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ jsx(SelectItemContextProvider, {
		scope: o,
		value: c,
		disabled: l,
		textId: S,
		isSelected: g,
		onItemTextChange: React$1.useCallback((i) => {
			v((a) => a || (i?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ jsx(Collection.ItemSlot, {
			scope: o,
			value: c,
			disabled: l,
			textValue: _,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				role: "option",
				"aria-labelledby": S,
				"data-highlighted": y ? "" : void 0,
				"aria-selected": g && y,
				"data-state": g ? "checked" : "unchecked",
				"aria-disabled": l || void 0,
				"data-disabled": l ? "" : void 0,
				tabIndex: l ? void 0 : -1,
				...f,
				ref: x,
				onFocus: composeEventHandlers(f.onFocus, () => b(!0)),
				onBlur: composeEventHandlers(f.onBlur, () => b(!1)),
				onClick: composeEventHandlers(f.onClick, () => {
					C.current !== "mouse" && w();
				}),
				onPointerUp: composeEventHandlers(f.onPointerUp, () => {
					C.current === "mouse" && w();
				}),
				onPointerDown: composeEventHandlers(f.onPointerDown, (i) => {
					C.current = i.pointerType;
				}),
				onPointerMove: composeEventHandlers(f.onPointerMove, (i) => {
					C.current = i.pointerType, l ? h.onItemLeave?.() : C.current === "mouse" && i.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: composeEventHandlers(f.onPointerLeave, (i) => {
					i.currentTarget === document.activeElement && h.onItemLeave?.();
				}),
				onKeyDown: composeEventHandlers(f.onKeyDown, (i) => {
					h.searchRef?.current !== "" && i.key === " " || (SELECTION_KEYS.includes(i.key) && w(), i.key === " " && i.preventDefault());
				})
			})
		})
	});
});
SelectItem$1.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText", SelectItemText = React$1.forwardRef((i, a) => {
	let { __scopeSelect: o, className: s, style: c, ...l } = i, d = useSelectContext(ITEM_TEXT_NAME, o), f = useSelectContentContext(ITEM_TEXT_NAME, o), p = useSelectItemContext(ITEM_TEXT_NAME, o), h = useSelectNativeOptionsContext(ITEM_TEXT_NAME, o), [g, _] = React$1.useState(null), v = useComposedRefs(a, (i) => _(i), p.onItemTextChange, (i) => f.itemTextRefCallback?.(i, p.value, p.disabled)), y = g?.textContent, b = React$1.useMemo(() => /* @__PURE__ */ jsx("option", {
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
		...l,
		ref: v
	}), p.isSelected && d.valueNode && !d.valueNodeHasChildren ? ReactDOM$1.createPortal(l.children, d.valueNode) : null] });
});
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator", SelectItemIndicator = React$1.forwardRef((i, a) => {
	let { __scopeSelect: o, ...s } = i;
	return useSelectItemContext(ITEM_INDICATOR_NAME, o).isSelected ? /* @__PURE__ */ jsx(Primitive.span, {
		"aria-hidden": !0,
		...s,
		ref: a
	}) : null;
});
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton", SelectScrollUpButton$1 = React$1.forwardRef((i, a) => {
	let o = useSelectContentContext(SCROLL_UP_BUTTON_NAME, i.__scopeSelect), s = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, i.__scopeSelect), [c, l] = React$1.useState(!1), d = useComposedRefs(a, s.onScrollButtonChange);
	return useLayoutEffect2(() => {
		if (o.viewport && o.isPositioned) {
			let i = function() {
				l(a.scrollTop > 0);
			}, a = o.viewport;
			return i(), a.addEventListener("scroll", i), () => a.removeEventListener("scroll", i);
		}
	}, [o.viewport, o.isPositioned]), c ? /* @__PURE__ */ jsx(SelectScrollButtonImpl, {
		...i,
		ref: d,
		onAutoScroll: () => {
			let { viewport: i, selectedItem: a } = o;
			i && a && (i.scrollTop -= a.offsetHeight);
		}
	}) : null;
});
SelectScrollUpButton$1.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton", SelectScrollDownButton$1 = React$1.forwardRef((i, a) => {
	let o = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, i.__scopeSelect), s = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, i.__scopeSelect), [c, l] = React$1.useState(!1), d = useComposedRefs(a, s.onScrollButtonChange);
	return useLayoutEffect2(() => {
		if (o.viewport && o.isPositioned) {
			let i = function() {
				let i = a.scrollHeight - a.clientHeight;
				l(Math.ceil(a.scrollTop) < i);
			}, a = o.viewport;
			return i(), a.addEventListener("scroll", i), () => a.removeEventListener("scroll", i);
		}
	}, [o.viewport, o.isPositioned]), c ? /* @__PURE__ */ jsx(SelectScrollButtonImpl, {
		...i,
		ref: d,
		onAutoScroll: () => {
			let { viewport: i, selectedItem: a } = o;
			i && a && (i.scrollTop += a.offsetHeight);
		}
	}) : null;
});
SelectScrollDownButton$1.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = React$1.forwardRef((i, a) => {
	let { __scopeSelect: o, onAutoScroll: c, ...l } = i, u = useSelectContentContext("SelectScrollButton", o), d = React$1.useRef(null), f = useCollection(o), p = React$1.useCallback(() => {
		d.current !== null && (window.clearInterval(d.current), d.current = null);
	}, []);
	return React$1.useEffect(() => () => p(), [p]), useLayoutEffect2(() => {
		f().find((i) => i.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [f]), /* @__PURE__ */ jsx(Primitive.div, {
		"aria-hidden": !0,
		...l,
		ref: a,
		style: {
			flexShrink: 0,
			...l.style
		},
		onPointerDown: composeEventHandlers(l.onPointerDown, () => {
			d.current === null && (d.current = window.setInterval(c, 50));
		}),
		onPointerMove: composeEventHandlers(l.onPointerMove, () => {
			u.onItemLeave?.(), d.current === null && (d.current = window.setInterval(c, 50));
		}),
		onPointerLeave: composeEventHandlers(l.onPointerLeave, () => {
			p();
		})
	});
}), SEPARATOR_NAME = "SelectSeparator", SelectSeparator$1 = React$1.forwardRef((i, a) => {
	let { __scopeSelect: o, ...s } = i;
	return /* @__PURE__ */ jsx(Primitive.div, {
		"aria-hidden": !0,
		...s,
		ref: a
	});
});
SelectSeparator$1.displayName = SEPARATOR_NAME;
var ARROW_NAME = "SelectArrow", SelectArrow = React$1.forwardRef((i, a) => {
	let { __scopeSelect: o, ...s } = i, c = usePopperScope(o), l = useSelectContext(ARROW_NAME, o), u = useSelectContentContext(ARROW_NAME, o);
	return l.open && u.position === "popper" ? /* @__PURE__ */ jsx(Arrow, {
		...c,
		...s,
		ref: a
	}) : null;
});
SelectArrow.displayName = ARROW_NAME;
var BUBBLE_INPUT_NAME = "SelectBubbleInput", SelectBubbleInput = React$1.forwardRef(({ __scopeSelect: i, value: a, ...o }, s) => {
	let c = React$1.useRef(null), l = useComposedRefs(s, c), d = usePrevious(a);
	return React$1.useEffect(() => {
		let i = c.current;
		if (!i) return;
		let o = window.HTMLSelectElement.prototype, s = Object.getOwnPropertyDescriptor(o, "value").set;
		if (d !== a && s) {
			let o = new Event("change", { bubbles: !0 });
			s.call(i, a), i.dispatchEvent(o);
		}
	}, [d, a]), /* @__PURE__ */ jsx(Primitive.select, {
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
function shouldShowPlaceholder(i) {
	return i === "" || i === void 0;
}
function useTypeaheadSearch(i) {
	let a = useCallbackRef(i), o = React$1.useRef(""), s = React$1.useRef(0), c = React$1.useCallback((i) => {
		let c = o.current + i;
		a(c), (function i(a) {
			o.current = a, window.clearTimeout(s.current), a !== "" && (s.current = window.setTimeout(() => i(""), 1e3));
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
function findNextItem(i, a, o) {
	let s = a.length > 1 && Array.from(a).every((i) => i === a[0]) ? a[0] : a, c = o ? i.indexOf(o) : -1, l = wrapArray(i, Math.max(c, 0));
	s.length === 1 && (l = l.filter((i) => i !== o));
	let u = l.find((i) => i.textValue.toLowerCase().startsWith(s.toLowerCase()));
	return u === o ? void 0 : u;
}
function wrapArray(i, a) {
	return i.map((o, s) => i[(a + s) % i.length]);
}
var Root2 = Select$1, Trigger$1 = SelectTrigger$1, Value = SelectValue$1, Icon = SelectIcon, Portal$2 = SelectPortal, Content2 = SelectContent$1, Viewport = SelectViewport, Label$1 = SelectLabel$1, Item = SelectItem$1, ItemText = SelectItemText, ItemIndicator = SelectItemIndicator, ScrollUpButton = SelectScrollUpButton$1, ScrollDownButton = SelectScrollDownButton$1, Separator = SelectSeparator$1;
function Select({ ...i }) {
	return /* @__PURE__ */ jsx(Root2, {
		"data-slot": "select",
		...i
	});
}
function SelectValue({ ...i }) {
	return /* @__PURE__ */ jsx(Value, {
		"data-slot": "select-value",
		...i
	});
}
var SelectTrigger = React$1.forwardRef(({ className: i, size: a = "default", children: o, ...s }, c) => /* @__PURE__ */ jsxs(Trigger$1, {
	ref: c,
	"data-slot": "select-trigger",
	"data-size": a,
	className: cn("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", i),
	...s,
	children: [o, /* @__PURE__ */ jsx(Icon, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = Trigger$1.displayName;
var SelectContent = React$1.forwardRef(({ className: i, children: a, position: o = "item-aligned", align: s = "center", ...c }, l) => /* @__PURE__ */ jsx(Portal$2, { children: /* @__PURE__ */ jsxs(Content2, {
	ref: l,
	"data-slot": "select-content",
	className: cn("chatbot-theme bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", i),
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
var SelectLabel = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(Label$1, {
	ref: o,
	"data-slot": "select-label",
	className: cn("text-muted-foreground px-2 py-1.5 text-xs", i),
	...a
}));
SelectLabel.displayName = Label$1.displayName;
var SelectItem = React$1.forwardRef(({ className: i, children: a, ...o }, s) => /* @__PURE__ */ jsxs(Item, {
	ref: s,
	"data-slot": "select-item",
	className: cn("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", i),
	...o,
	children: [/* @__PURE__ */ jsx("span", {
		"data-slot": "select-item-indicator",
		className: "absolute right-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "size-4" }) })
	}), /* @__PURE__ */ jsx(ItemText, { children: a })]
}));
SelectItem.displayName = Item.displayName;
var SelectSeparator = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(Separator, {
	ref: o,
	"data-slot": "select-separator",
	className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", i),
	...a
}));
SelectSeparator.displayName = Separator.displayName;
var SelectScrollUpButton = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(ScrollUpButton, {
	ref: o,
	"data-slot": "select-scroll-up-button",
	className: cn("flex cursor-default items-center justify-center py-1", i),
	...a,
	children: /* @__PURE__ */ jsx(ChevronUp, { className: "size-4" })
}));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
var SelectScrollDownButton = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(ScrollDownButton, {
	ref: o,
	"data-slot": "select-scroll-down-button",
	className: cn("flex cursor-default items-center justify-center py-1", i),
	...a,
	children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-4" })
}));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
var badgeVariants = cva("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
		secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
		destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
		outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
	} },
	defaultVariants: { variant: "default" }
}), Badge = React$1.forwardRef(({ className: a, variant: o, asChild: s = !1, ...c }, l) => /* @__PURE__ */ jsx(s ? Slot$1 : "span", {
	ref: l,
	"data-slot": "badge",
	className: cn(badgeVariants({ variant: o }), a),
	...c
}));
Badge.displayName = "Badge";
const defaultVoiceConfig = {
	lang: "en-US",
	continuous: !1,
	interimResults: !0,
	maxAlternatives: 1,
	pitch: 1,
	rate: 1,
	volume: 1
};
function getVoiceSupport() {
	return {
		speechRecognition: !!(typeof window < "u" && (window.SpeechRecognition || window.webkitSpeechRecognition)),
		speechSynthesis: !!(typeof window < "u" && window.speechSynthesis)
	};
}
var SpeechRecognitionManager = class {
	constructor(i = {}) {
		this.recognition = null, this.isListening = !1, this.onResult = null, this.onStart = null, this.onEnd = null, this.onError = null, this.onSpeechStart = null, this.onSpeechEnd = null, this.config = {
			...defaultVoiceConfig,
			...i
		}, this.initRecognition();
	}
	initRecognition() {
		if (typeof window > "u") return !1;
		let i = window.SpeechRecognition || window.webkitSpeechRecognition;
		if (!i) return console.warn("Speech Recognition is not supported in this browser"), !1;
		try {
			let a = new i();
			return a.lang = this.config.lang, a.continuous = this.config.continuous, a.interimResults = this.config.interimResults, a.maxAlternatives = this.config.maxAlternatives, a.onstart = () => {
				this.isListening = !0, this.onStart?.();
			}, a.onend = () => {
				this.isListening = !1, this.onEnd?.();
			}, a.onerror = (i) => {
				this.isListening = !1;
				let a = this.getErrorMessage(i.error);
				this.onError?.(a);
			}, a.onresult = (i) => {
				let a = "", o = !1;
				for (let s = i.resultIndex; s < i.results.length; s++) {
					let c = i.results[s];
					a += c[0].transcript, c.isFinal && (o = !0);
				}
				this.onResult?.(a, o);
			}, a.onspeechstart = () => {
				this.onSpeechStart?.();
			}, a.onspeechend = () => {
				this.onSpeechEnd?.();
			}, this.recognition = a, !0;
		} catch (i) {
			return console.error("Failed to initialize speech recognition:", i), !1;
		}
	}
	getErrorMessage(i) {
		return {
			"no-speech": "No speech was detected. Please try again.",
			aborted: "Speech recognition was aborted.",
			"audio-capture": "No microphone was found. Ensure a microphone is connected.",
			network: "Network error occurred. Check your internet connection.",
			"not-allowed": "Microphone access denied. Please allow microphone permissions.",
			"service-not-available": "Speech service is not available.",
			"bad-grammar": "Speech grammar error occurred.",
			"language-not-supported": "Language is not supported."
		}[i] || `Unknown error: ${i}`;
	}
	start() {
		if (!this.recognition && !this.initRecognition()) return !1;
		if (this.isListening) return !0;
		try {
			return this.recognition?.start(), !0;
		} catch (i) {
			return console.error("Failed to start speech recognition:", i), !1;
		}
	}
	stop() {
		this.recognition && this.isListening && this.recognition.stop();
	}
	abort() {
		this.recognition && this.recognition.abort();
	}
	updateConfig(i) {
		this.config = {
			...this.config,
			...i
		}, this.recognition && (this.recognition.lang = this.config.lang, this.recognition.continuous = this.config.continuous, this.recognition.interimResults = this.config.interimResults, this.recognition.maxAlternatives = this.config.maxAlternatives);
	}
	getIsListening() {
		return this.isListening;
	}
	destroy() {
		this.abort(), this.recognition = null, this.onResult = null, this.onStart = null, this.onEnd = null, this.onError = null, this.onSpeechStart = null, this.onSpeechEnd = null;
	}
}, SpeechSynthesisManager = class {
	constructor(i = {}) {
		this.utterance = null, this.isSpeaking = !1, this.availableVoices = [], this.onStart = null, this.onEnd = null, this.onPause = null, this.onResume = null, this.onError = null, this.onBoundary = null, this.config = {
			...defaultVoiceConfig,
			...i
		}, this.loadVoices();
	}
	loadVoices() {
		typeof window > "u" || !window.speechSynthesis || (this.availableVoices = window.speechSynthesis.getVoices(), window.speechSynthesis.onvoiceschanged = () => {
			this.availableVoices = window.speechSynthesis.getVoices();
		});
	}
	getVoices() {
		return this.availableVoices;
	}
	getVoicesByLanguage(i) {
		return this.availableVoices.filter((a) => a.lang.toLowerCase().startsWith(i.toLowerCase().split("-")[0]));
	}
	speak(i) {
		if (typeof window > "u" || !window.speechSynthesis) return console.warn("Speech Synthesis is not supported in this browser"), !1;
		this.stop();
		try {
			if (this.utterance = new SpeechSynthesisUtterance(i), this.utterance.lang = this.config.lang, this.utterance.pitch = this.config.pitch, this.utterance.rate = this.config.rate, this.utterance.volume = this.config.volume, this.config.voiceURI) {
				let i = this.availableVoices.find((i) => i.voiceURI === this.config.voiceURI);
				i && (this.utterance.voice = i);
			}
			return this.utterance.onstart = () => {
				this.isSpeaking = !0, this.onStart?.();
			}, this.utterance.onend = () => {
				this.isSpeaking = !1, this.onEnd?.();
			}, this.utterance.onerror = (i) => {
				this.isSpeaking = !1, this.onError?.(i.error);
			}, this.utterance.onpause = () => {
				this.onPause?.();
			}, this.utterance.onresume = () => {
				this.onResume?.();
			}, this.utterance.onboundary = (i) => {
				this.onBoundary?.(i.charIndex, i.charLength);
			}, window.speechSynthesis.speak(this.utterance), !0;
		} catch (i) {
			return console.error("Failed to speak:", i), !1;
		}
	}
	stop() {
		typeof window > "u" || !window.speechSynthesis || (window.speechSynthesis.cancel(), this.isSpeaking = !1);
	}
	pause() {
		typeof window > "u" || !window.speechSynthesis || window.speechSynthesis.pause();
	}
	resume() {
		typeof window > "u" || !window.speechSynthesis || window.speechSynthesis.resume();
	}
	getIsSpeaking() {
		return this.isSpeaking;
	}
	updateConfig(i) {
		this.config = {
			...this.config,
			...i
		};
	}
	destroy() {
		this.stop(), this.utterance = null, this.onStart = null, this.onEnd = null, this.onPause = null, this.onResume = null, this.onError = null, this.onBoundary = null;
	}
};
function stripMarkdownForSpeech(i) {
	return i.replace(/```[\s\S]*?```/g, "Code block omitted. ").replace(/`[^`]+`/g, (i) => i.slice(1, -1)).replace(/#{1,6}\s+/g, "").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1").replace(/__([^_]+)__/g, "$1").replace(/_([^_]+)_/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1").replace(/---/g, "").replace(/^>\s+/gm, "").replace(/^[\s]*[-*+]\s+/gm, "").replace(/^[\s]*\d+\.\s+/gm, "").replace(/\n{3,}/g, "\n\n").trim();
}
function Setting({ metadata: i, selectedAgent: a, selectedModel: s, onAgentChange: c, onModelChange: l, voiceConfig: u, onVoiceConfigChange: f, availableVoices: p, selectedVoice: m, onVoiceChange: h, autoSpeak: g, onAutoSpeakChange: v }) {
	let y = i?.agents.find((i) => i.key === a), b = s, [x, S] = useState(() => getVoiceSupport());
	useEffect(() => {
		S(getVoiceSupport());
	}, []);
	let C = p?.reduce((i, a) => {
		let o = a.lang.split("-")[0].toUpperCase();
		return i[o] || (i[o] = []), i[o].push(a), i;
	}, {}) || {}, T = {
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
	}, E = u && f && p && h && (x.speechRecognition || x.speechSynthesis);
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
									children: y?.key || a
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
								i?.agents.map((i) => /* @__PURE__ */ jsx(DropdownMenuItem, {
									onClick: () => c(i.key),
									className: cn("cursor-pointer text-xs", a === i.key && "bg-primary/10 text-primary focus:bg-primary/15 focus:text-primary"),
									children: /* @__PURE__ */ jsx("div", {
										className: "flex flex-col gap-0.5",
										children: /* @__PURE__ */ jsx("span", {
											className: "font-medium",
											children: i.key
										})
									})
								}, i.key))
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
								i?.models.map((i) => /* @__PURE__ */ jsx(DropdownMenuItem, {
									onClick: () => l(i),
									className: cn("cursor-pointer text-xs", s === i && "bg-primary/10 text-primary focus:bg-primary/15 focus:text-primary"),
									children: i
								}, i))
							]
						})] })]
					})]
				}), y?.description && /* @__PURE__ */ jsx("div", {
					className: "text-[11px] text-muted-foreground bg-muted/30 p-2 rounded-md border border-border/40 leading-relaxed",
					children: y.description
				})]
			}), E && /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "bg-secondary/20 rounded-lg p-3 space-y-4 border border-border/40",
						children: [v && x.speechSynthesis && /* @__PURE__ */ jsxs("div", {
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
						}), x.speechRecognition && u && f && /* @__PURE__ */ jsxs("div", {
							className: "flex w-full justify-between",
							children: [/* @__PURE__ */ jsxs(Label, {
								className: "text-[10px] uppercase font-bold text-muted-foreground flex items-center gap-1",
								children: [/* @__PURE__ */ jsx(Languages, { className: "h-3 w-3" }), " Input Language"]
							}), /* @__PURE__ */ jsxs(Select, {
								value: u.lang,
								onValueChange: (i) => f({ lang: i }),
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
					x.speechSynthesis && p && p.length > 0 && m && h && /* @__PURE__ */ jsxs("div", {
						className: "space-y-1.5 pt-1",
						children: [/* @__PURE__ */ jsxs(Label, {
							className: "text-[10px] uppercase font-bold text-muted-foreground flex items-center gap-1",
							children: [/* @__PURE__ */ jsx(Activity, { className: "h-3 w-3" }), " Voice Persona"]
						}), /* @__PURE__ */ jsxs(Select, {
							value: m?.voiceURI || "",
							onValueChange: (i) => {
								h(p.find((a) => a.voiceURI === i) || null);
							},
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								className: "w-full text-xs h-9",
								children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a voice" })
							}), /* @__PURE__ */ jsx(SelectContent, {
								className: "max-h-[300px]",
								children: Object.entries(C).map(([i, a]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "px-2 py-1.5 text-[10px] font-bold text-muted-foreground bg-muted/40 sticky top-0 z-10 backdrop-blur-sm",
									children: T[i] || i
								}), a.map((i) => /* @__PURE__ */ jsx(SelectItem, {
									value: i.voiceURI,
									className: "pl-4 text-xs cursor-pointer",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "truncate max-w-[200px]",
											children: i.name
										}), i.localService && /* @__PURE__ */ jsx(Badge, {
											variant: "secondary",
											className: "text-[9px] px-1 h-4 rounded-sm",
											children: "Local"
										})]
									})
								}, i.voiceURI))] }, i))
							})]
						})]
					}),
					x.speechSynthesis && u && f && /* @__PURE__ */ jsxs("div", {
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
										children: [u.rate.toFixed(1), "x"]
									})]
								}), /* @__PURE__ */ jsx(Slider, {
									value: [u.rate],
									min: .5,
									max: 2,
									step: .1,
									onValueChange: ([i]) => f({ rate: i }),
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
										children: u.pitch.toFixed(1)
									})]
								}), /* @__PURE__ */ jsx(Slider, {
									value: [u.pitch],
									min: .5,
									max: 2,
									step: .1,
									onValueChange: ([i]) => f({ pitch: i }),
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
										children: [Math.round(u.volume * 100), "%"]
									})]
								}), /* @__PURE__ */ jsx(Slider, {
									value: [u.volume],
									min: 0,
									max: 1,
									step: .1,
									onValueChange: ([i]) => f({ volume: i }),
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
function createContextScope$1(i, a = []) {
	let o = [];
	function s(a, s) {
		let c = React$1.createContext(s);
		c.displayName = a + "Context";
		let l = o.length;
		o = [...o, s];
		let u = (a) => {
			let { scope: o, children: s, ...u } = a, d = o?.[i]?.[l] || c, f = React$1.useMemo(() => u, Object.values(u));
			return /* @__PURE__ */ jsx(d.Provider, {
				value: f,
				children: s
			});
		};
		u.displayName = a + "Provider";
		function d(o, u) {
			let d = u?.[i]?.[l] || c, f = React$1.useContext(d);
			if (f) return f;
			if (s !== void 0) return s;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [u, d];
	}
	let c = () => {
		let a = o.map((i) => React$1.createContext(i));
		return function(o) {
			let s = o?.[i] || a;
			return React$1.useMemo(() => ({ [`__scope${i}`]: {
				...o,
				[i]: s
			} }), [o, s]);
		};
	};
	return c.scopeName = i, [s, composeContextScopes(c, ...a)];
}
function composeContextScopes(...i) {
	let a = i[0];
	if (i.length === 1) return a;
	let o = () => {
		let o = i.map((i) => ({
			useScope: i(),
			scopeName: i.scopeName
		}));
		return function(i) {
			let s = o.reduce((a, { useScope: o, scopeName: s }) => {
				let c = o(i)[`__scope${s}`];
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
].reduce((i, a) => {
	let o = createSlot$1(`Primitive.${a}`), s = React$1.forwardRef((i, s) => {
		let { asChild: c, ...l } = i, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: s
		});
	});
	return s.displayName = `Primitive.${a}`, {
		...i,
		[a]: s
	};
}, {});
function useIsHydrated() {
	return useSyncExternalStore(subscribe, () => !0, () => !1);
}
function subscribe() {
	return () => {};
}
var AVATAR_NAME = "Avatar", [createAvatarContext, createAvatarScope] = createContextScope$1(AVATAR_NAME), [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME), Avatar$1 = React$1.forwardRef((i, a) => {
	let { __scopeAvatar: o, ...s } = i, [c, l] = React$1.useState("idle");
	return /* @__PURE__ */ jsx(AvatarProvider, {
		scope: o,
		imageLoadingStatus: c,
		onImageLoadingStatusChange: l,
		children: /* @__PURE__ */ jsx(Primitive$1.span, {
			...s,
			ref: a
		})
	});
});
Avatar$1.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage", AvatarImage$1 = React$1.forwardRef((i, a) => {
	let { __scopeAvatar: o, src: s, onLoadingStatusChange: c = () => {}, ...l } = i, u = useAvatarContext(IMAGE_NAME, o), d = useImageLoadingStatus(s, l), f = useCallbackRef((i) => {
		c(i), u.onImageLoadingStatusChange(i);
	});
	return useLayoutEffect2(() => {
		d !== "idle" && f(d);
	}, [d, f]), d === "loaded" ? /* @__PURE__ */ jsx(Primitive$1.img, {
		...l,
		ref: a,
		src: s
	}) : null;
});
AvatarImage$1.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback", AvatarFallback$1 = React$1.forwardRef((i, a) => {
	let { __scopeAvatar: o, delayMs: s, ...c } = i, l = useAvatarContext(FALLBACK_NAME, o), [u, d] = React$1.useState(s === void 0);
	return React$1.useEffect(() => {
		if (s !== void 0) {
			let i = window.setTimeout(() => d(!0), s);
			return () => window.clearTimeout(i);
		}
	}, [s]), u && l.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ jsx(Primitive$1.span, {
		...c,
		ref: a
	}) : null;
});
AvatarFallback$1.displayName = FALLBACK_NAME;
function resolveLoadingStatus(i, a) {
	return i ? a ? (i.src !== a && (i.src = a), i.complete && i.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function useImageLoadingStatus(i, { referrerPolicy: a, crossOrigin: o }) {
	let s = useIsHydrated(), c = React$1.useRef(null), l = (() => s ? (c.current ||= new window.Image(), c.current) : null)(), [u, d] = React$1.useState(() => resolveLoadingStatus(l, i));
	return useLayoutEffect2(() => {
		d(resolveLoadingStatus(l, i));
	}, [l, i]), useLayoutEffect2(() => {
		let i = (i) => () => {
			d(i);
		};
		if (!l) return;
		let s = i("loaded"), c = i("error");
		return l.addEventListener("load", s), l.addEventListener("error", c), a && (l.referrerPolicy = a), typeof o == "string" && (l.crossOrigin = o), () => {
			l.removeEventListener("load", s), l.removeEventListener("error", c);
		};
	}, [
		l,
		o,
		a
	]), u;
}
var Root$2 = Avatar$1, Image = AvatarImage$1, Fallback = AvatarFallback$1;
function Avatar({ className: i, ...a }) {
	return /* @__PURE__ */ jsx(Root$2, {
		"data-slot": "avatar",
		className: cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", i),
		...a
	});
}
function AvatarImage({ className: i, ...a }) {
	return /* @__PURE__ */ jsx(Image, {
		"data-slot": "avatar-image",
		className: cn("aspect-square size-full", i),
		...a
	});
}
function AvatarFallback({ className: i, ...a }) {
	return /* @__PURE__ */ jsx(Fallback, {
		"data-slot": "avatar-fallback",
		className: cn("bg-muted flex size-full items-center justify-center rounded-full", i),
		...a
	});
}
function Header({ metadata: i, selectedAgent: a, selectedModel: s, onAgentChange: c, onModelChange: l, onClose: u, onRefresh: f, onHome: p, onHistory: m, className: h, title: g = "Portfolio Assistant", titleUrl: v, subtitle: y, voiceConfig: b, onVoiceConfigChange: x, availableVoices: S, selectedVoice: C, onVoiceChange: T, autoSpeak: E, onAutoSpeakChange: D, isMaximized: O, onMaximize: k, avatar: j }) {
	let [M, P] = useState(!1), F = () => {
		M || (P(!0), f?.(), setTimeout(() => {
			P(!1);
		}, 1e3));
	}, I = () => /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-3 group cursor-pointer",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsxs(Avatar, {
				className: "size-9 border border-border/40 shadow-sm transition-transform group-hover:scale-105",
				children: [/* @__PURE__ */ jsx(AvatarImage, { src: j }), /* @__PURE__ */ jsx(AvatarFallback, { children: g })]
			}), /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-2 ring-background shadow-sm animate-pulse" })]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-0.5",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-sm font-semibold text-foreground/90 tracking-tight leading-none group-hover:text-primary transition-colors",
				children: g
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[11px] text-muted-foreground font-medium leading-none capitalize",
				children: y || a.replace(/-/g, " ")
			})]
		})]
	});
	return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 300,
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("flex items-center justify-between border-b border-border/40 bg-background/80 p-3.5 backdrop-blur-md supports-[backdrop-filter]:bg-background/60", h),
			children: [v ? /* @__PURE__ */ jsx("a", {
				href: v,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "focus-visible:outline-none rounded-md",
				children: /* @__PURE__ */ jsx(I, {})
			}) : /* @__PURE__ */ jsx(I, {}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1",
				children: [
					p && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "icon",
							onClick: p,
							className: "rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200",
							children: [/* @__PURE__ */ jsx(House, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
								className: "sr-only",
								children: "Home"
							})]
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						sideOffset: 8,
						children: "Home View"
					})] }),
					/* @__PURE__ */ jsx(Setting, {
						metadata: i,
						selectedAgent: a,
						selectedModel: s,
						onAgentChange: c,
						onModelChange: l,
						voiceConfig: b,
						onVoiceConfigChange: x,
						availableVoices: S,
						selectedVoice: C,
						onVoiceChange: T,
						autoSpeak: E,
						onAutoSpeakChange: D
					}),
					m && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "icon",
							onClick: m,
							className: "rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200",
							children: [/* @__PURE__ */ jsx(History, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
								className: "sr-only",
								children: "Chat history"
							})]
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						sideOffset: 8,
						children: "Chat History"
					})] }),
					f && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "icon",
							onClick: F,
							disabled: M,
							className: "rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200",
							children: [/* @__PURE__ */ jsx(RefreshCw, { className: cn("h-4 w-4", M && "animate-spin text-primary") }), /* @__PURE__ */ jsx("span", {
								className: "sr-only",
								children: "Restart Chat"
							})]
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						sideOffset: 8,
						children: "Restart Chat"
					})] }),
					k && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "icon",
							onClick: k,
							className: "rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200",
							children: [jsx(O ? Minimize2 : Maximize2, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
								className: "sr-only",
								children: O ? "Minimize" : "Maximize"
							})]
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						sideOffset: 8,
						children: O ? "Minimize View" : "Maximize View"
					})] }),
					u && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "icon",
							onClick: u,
							className: "rounded-full h-8 w-8 hover:bg-destructive/10 text-muted-foreground hover:text-destructive flex items-center justify-center transition-all duration-200",
							children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
								className: "sr-only",
								children: "Close"
							})]
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						sideOffset: 8,
						children: "Close Assistant"
					})] })
				]
			})]
		})
	});
}
var AGENT_ICONS = [
	Bot,
	Sparkles,
	MessageSquare,
	Zap
];
function getAgentIcon(i) {
	return AGENT_ICONS[i % AGENT_ICONS.length];
}
function SkeletonGrid({ className: i }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-1 flex-col overflow-auto p-5 sm:p-6", i),
		children: /* @__PURE__ */ jsx("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: Array.from({ length: 4 }).map((i, a) => /* @__PURE__ */ jsxs("div", {
				className: "flex h-[100px] animate-pulse flex-col gap-3 rounded-2xl border border-border/50 bg-muted/30 p-4",
				"aria-hidden": !0,
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", { className: "size-10 shrink-0 rounded-xl bg-muted" }), /* @__PURE__ */ jsx("div", { className: "h-4 w-28 rounded bg-muted" })]
					}),
					/* @__PURE__ */ jsx("div", { className: "h-3 w-full rounded bg-muted/70" }),
					/* @__PURE__ */ jsx("div", { className: "h-3 w-3/4 rounded bg-muted/50" })
				]
			}, a))
		})
	});
}
var AgentCard = memo(function({ agent: i, index: a, onSelect: o, selected: s }) {
	let c = getAgentIcon(a), l = (a) => {
		(a.key === "Enter" || a.key === " ") && (a.preventDefault(), o(i.key));
	};
	return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
		type: "button",
		"aria-pressed": s,
		onClick: () => o(i.key),
		onKeyDown: l,
		className: cn("group relative flex min-h-[88px] w-full flex-col items-start gap-2 rounded-2xl border bg-card p-4 text-left shadow-sm transition-all duration-200", "hover:border-primary/30 hover:bg-primary/[0.06] hover:shadow-md", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background", s ? "border-primary/80 bg-primary/[0.04] shadow" : "border-border/60"),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full items-start gap-3",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: cn("flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors", "bg-primary/10 text-primary group-hover:bg-primary/15 group-hover:text-primary"),
					children: /* @__PURE__ */ jsx(c, { className: "size-5" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ jsx("span", {
						className: cn("block font-semibold text-foreground transition-colors group-hover:text-primary capitalize"),
						children: i.key.replace(/-/g, " ")
					}), i.description ? /* @__PURE__ */ jsx("span", {
						className: "mt-0.5 line-clamp-2 block text-[13px] leading-snug text-muted-foreground",
						children: i.description
					}) : /* @__PURE__ */ jsx("span", {
						className: "mt-0.5 block text-[13px] leading-snug text-muted-foreground",
						children: "No description"
					})]
				}),
				/* @__PURE__ */ jsx(ChevronRight, {
					className: cn("size-4 shrink-0 text-muted-foreground/50 transition-all group-hover:translate-x-0.5 group-hover:text-primary", "mt-1.5"),
					"aria-hidden": !0
				})
			]
		})
	}) });
});
AgentCard.displayName = "AgentCard";
function AgentSelector({ agents: i, loading: a, onSelect: o, selectedKey: s, className: c }) {
	let l = useId(), u = useCallback((i) => {
		o(i);
	}, [o]);
	return a ? /* @__PURE__ */ jsx(SkeletonGrid, { className: c }) : i?.length ? /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-col gap-2 overflow-auto p-5 sm:p-6 h-full", c),
		children: /* @__PURE__ */ jsx("ul", {
			id: l,
			role: "list",
			className: "grid gap-2",
			children: i.map((i, a) => /* @__PURE__ */ jsx(AgentCard, {
				agent: i,
				index: a,
				onSelect: u,
				selected: s === i.key
			}, i.key))
		})
	}) : /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center", c),
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex size-14 items-center justify-center rounded-2xl bg-muted/50",
			children: /* @__PURE__ */ jsx(MessageSquare, { className: "size-7 text-muted-foreground" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ jsx("p", {
				className: "font-medium text-foreground",
				children: "No agents available"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: "Check back later or contact support."
			})]
		})]
	});
}
var CACHE_TTL = 300 * 1e3, metadataCache = /* @__PURE__ */ new Map();
function getCachedMetadata(i) {
	let a = metadataCache.get(i);
	return a?.data && Date.now() - a.timestamp < CACHE_TTL ? a.data : null;
}
function setCachedMetadata(i, a) {
	metadataCache.set(i, {
		data: a,
		timestamp: Date.now()
	});
}
function clearChatServiceMetadataCache() {
	metadataCache.clear();
}
function normalizeStreamEvent(i) {
	return i.type === "message" ? {
		type: "message",
		content: i.content
	} : i.type === "token" ? {
		type: "token",
		content: i.content
	} : i.type === "error" ? {
		type: "error",
		content: i.content
	} : i.type === "update" || i.node ? {
		type: "update",
		node: i.node,
		updates: i.updates ?? {},
		content: i.updates ?? i
	} : null;
}
var ChatService = class {
	constructor(i) {
		this.abortController = null, this.config = i;
	}
	getHeaders() {
		let i = { "Content-Type": "application/json" };
		return this.config.apiKey && (i.Authorization = `Bearer ${this.config.apiKey}`), i;
	}
	getMetadataFromCache() {
		return getCachedMetadata(this.config.baseUrl);
	}
	async getMetadata(i = !1) {
		if (!i) {
			let i = getCachedMetadata(this.config.baseUrl);
			if (i) return i;
		}
		let a = metadataCache.get(this.config.baseUrl);
		if (a?.promise) try {
			return await a.promise;
		} catch {}
		let o = (async () => {
			let i = await fetch(`${this.config.baseUrl}/info`, { headers: this.getHeaders() });
			if (!i.ok) throw Error(`Failed to fetch metadata: ${i.statusText}`);
			return await i.json();
		})(), s = metadataCache.get(this.config.baseUrl) ?? {
			data: null,
			timestamp: 0
		};
		metadataCache.set(this.config.baseUrl, {
			...s,
			promise: o,
			timestamp: 0,
			data: s.data
		});
		let c = await o;
		return setCachedMetadata(this.config.baseUrl, c), c;
	}
	async *stream(i, a) {
		this.abortController && this.abortController.abort(), this.abortController = new AbortController();
		let o = a.agent ?? this.config.defaultAgent, s = `${this.config.baseUrl}/${o}/stream`, c = {
			message: i,
			...(a.model ?? this.config.defaultModel) && { model: a.model ?? this.config.defaultModel },
			...a.threadId && { thread_id: a.threadId },
			...a.userId && { user_id: a.userId },
			stream_tokens: a.streamTokens ?? !0
		};
		try {
			let i = await fetch(s, {
				method: "POST",
				headers: this.getHeaders(),
				body: JSON.stringify(c),
				signal: this.abortController.signal
			});
			if (!i.ok) {
				let a = `Stream failed: ${i.statusText}`;
				try {
					let o = await i.json();
					if (o.detail !== void 0) {
						let i = o.detail;
						a = Array.isArray(i) ? `Stream failed: ${i.map((i) => typeof i == "object" && i && "msg" in i ? `${i.loc?.join(".") ?? "field"}: ${i.msg}` : JSON.stringify(i)).join(", ")}` : `Stream failed: ${typeof i == "string" ? i : JSON.stringify(i)}`;
					}
				} catch {}
				throw Error(a);
			}
			let a = i.body?.getReader();
			if (!a) throw Error("No response body");
			let o = new TextDecoder(), l = "";
			try {
				for (;;) {
					let { done: i, value: s } = await a.read();
					if (i) break;
					l += o.decode(s, { stream: !0 });
					let c = l.split("\n\n");
					l = c.pop() ?? "";
					for (let i of c) {
						if (!i.startsWith("data: ")) continue;
						let a = i.slice(6);
						if (a === "[DONE]") {
							yield { type: "done" };
							return;
						}
						try {
							let i = normalizeStreamEvent(JSON.parse(a));
							i && (yield i);
						} catch (i) {
							console.error("Error parsing SSE data:", i);
						}
					}
				}
			} finally {
				this.abortController = null;
			}
		} catch (i) {
			if (this.abortController = null, i instanceof Error && i.name === "AbortError") return;
			yield {
				type: "error",
				content: i instanceof Error ? i.message : "Stream error"
			};
		}
	}
	abortStream() {
		this.abortController &&= (this.abortController.abort(), null);
	}
	async sendFeedback(i, a, o) {
		let s = await fetch(`${this.config.baseUrl}/feedback`, {
			method: "POST",
			headers: this.getHeaders(),
			body: JSON.stringify({
				run_id: i,
				key: a,
				score: o
			})
		});
		if (!s.ok) throw Error(`Failed to send feedback: ${s.statusText}`);
		return s.json();
	}
	async deleteThread(i, a) {
		let o = a?.trim();
		if (!o) throw Error("User ID is required to delete a thread");
		let s = new URLSearchParams({
			user_id: o,
			thread_id: i
		}), c = await fetch(`${this.config.baseUrl}/history?${s.toString()}`, {
			method: "DELETE",
			headers: this.getHeaders()
		});
		if (!c.ok) throw Error(`Failed to delete thread: ${c.statusText}`);
	}
	async getHistory(i, a, o) {
		let s = a?.trim();
		if (!s) return {
			messages: [],
			next_cursor: null,
			prev_cursor: null
		};
		let c = o?.limit ?? 50, l = o?.view ?? "full", u = o?.cursor, d = (i) => {
			let a = i;
			return {
				messages: Array.isArray(a.messages) ? a.messages : [],
				next_cursor: a.next_cursor ?? null,
				prev_cursor: a.prev_cursor ?? null
			};
		}, f = this.getHeaders();
		try {
			let a = new URLSearchParams({
				user_id: s,
				thread_id: i,
				limit: String(c),
				view: l
			});
			u != null && u !== "" && a.set("cursor", u);
			let o = await fetch(`${this.config.baseUrl}/history?${a.toString()}`, {
				method: "GET",
				headers: f
			});
			if (o.ok) return d(await o.json());
			if (o.status === 404 || o.status === 405) {
				let a = {
					user_id: s,
					thread_id: i,
					limit: c,
					view: l
				};
				u != null && u !== "" && (a.cursor = u);
				let o = await fetch(`${this.config.baseUrl}/history`, {
					method: "POST",
					headers: f,
					body: JSON.stringify(a)
				});
				if (o.ok) return d(await o.json());
			}
			throw Error(`Failed to get history: ${o.statusText}`);
		} catch (i) {
			throw i instanceof Error ? i : Error("Failed to get history");
		}
	}
	async getThreads(i, a) {
		let o = i?.trim();
		if (!o) return {
			threads: [],
			total: 0
		};
		try {
			let i = { user_id: o };
			a?.limit != null && (i.limit = a.limit), a?.offset != null && (i.offset = a.offset), a?.search != null && a.search !== "" && (i.search = a.search);
			let s = await fetch(`${this.config.baseUrl}/history/threads`, {
				method: "POST",
				headers: this.getHeaders(),
				body: JSON.stringify(i)
			});
			if (!s.ok) throw Error(`Failed to get threads: ${s.statusText}`);
			let c = await s.json();
			return {
				threads: c.threads ?? [],
				total: c.total ?? c.threads?.length ?? 0
			};
		} catch {
			return {
				threads: [],
				total: 0
			};
		}
	}
}, DATE_KEYS = ["createdAt"];
function reviver(i, a) {
	if (typeof a == "string" && DATE_KEYS.includes(i)) {
		let i = new Date(a);
		return isNaN(i.getTime()) ? a : i;
	}
	return a;
}
function loadMessages(i) {
	if (!i) return null;
	try {
		let a = localStorage.getItem(i);
		if (!a) return null;
		let o = JSON.parse(a, reviver);
		return !Array.isArray(o) || o.length === 0 ? null : o;
	} catch {
		return null;
	}
}
function saveMessages(i, a) {
	if (!(!i || a.length === 0)) try {
		localStorage.setItem(i, JSON.stringify(a));
	} catch (i) {
		console.error("Failed to save chat history:", i);
	}
}
function clearMessages(i) {
	if (i) try {
		localStorage.removeItem(i);
	} catch {}
}
var THREAD_KEY_PREFIX = "chatui-thread:", MESSAGES_KEY_PREFIX = "chatui-messages:";
function getThreadMessagesKey(i, a) {
	return !i || !a ? "" : `${MESSAGES_KEY_PREFIX}${i}:${a}`;
}
function loadCurrentThreadId(i) {
	if (!i) return null;
	try {
		return localStorage.getItem(THREAD_KEY_PREFIX + i);
	} catch {
		return null;
	}
}
function saveCurrentThreadId(i, a) {
	if (i) try {
		a == null ? localStorage.removeItem(THREAD_KEY_PREFIX + i) : localStorage.setItem(THREAD_KEY_PREFIX + i, a);
	} catch {}
}
function updateMessageById(i, a, o) {
	let s = i.findIndex((i) => i.id === a);
	if (s === -1) return i;
	let c = [...i];
	return c[s] = o(c[s]), c;
}
function applyStreamMessage(i, a, o) {
	let s = o.content;
	if (!s || o.type !== "message") return { messages: i };
	let c = s;
	if (c.type === "tool") {
		let o = c.name ?? c.response_metadata?.name ?? c.custom_data?.name ?? "Tool", s = c.content, l = typeof s == "string" ? s.replace(/\\n/g, "\n") : s;
		return { messages: updateMessageById(i, a, (i) => {
			let a = i.toolInvocations ?? [], s = c.tool_call_id ? a.findIndex((i) => i.state === "call" && i.toolCallId === c.tool_call_id) : -1, u = s >= 0 ? a[s] : void 0, d = {
				state: "result",
				toolName: o && o !== "Tool" ? o : u?.toolName ?? o,
				toolCallId: c.tool_call_id,
				result: l
			}, f = a.filter((i) => !(i.state === "call" && i.toolCallId === c.tool_call_id));
			return {
				...i,
				toolInvocations: [...f, d]
			};
		}) };
	}
	if (c.tool_calls && c.tool_calls.length > 0) {
		let o = c.tool_calls.map((i) => ({
			state: "call",
			toolName: i.name,
			toolCallId: i.id,
			args: i.args
		}));
		return { messages: updateMessageById(i, a, (i) => {
			let a = i.toolInvocations ?? [], s = a.filter((i) => i.state === "call"), c = a.filter((i) => i.state === "result"), l = new Set(s.map((i) => i.toolCallId).filter(Boolean)), u = [...s];
			for (let i of o) i.toolCallId && !l.has(i.toolCallId) && (u.push(i), l.add(i.toolCallId));
			let d = [...u, ...c];
			return {
				...i,
				toolInvocations: d
			};
		}) };
	}
	if (c.type === "custom") {
		let a = c.custom_data?.follow_up;
		return Array.isArray(a) ? {
			messages: i,
			followUp: a
		} : { messages: i };
	}
	let l = c.content ?? "";
	return { messages: updateMessageById(i, a, (i) => ({
		...i,
		content: l,
		custom_data: {
			...i.custom_data ?? {},
			...c.custom_data ?? {},
			run_id: c.run_id
		}
	})) };
}
function chatRuntimeReducer(i, a) {
	switch (a.type) {
		case "SET_INPUT": return {
			...i,
			input: a.payload
		};
		case "SET_MESSAGES": return {
			...i,
			messages: a.payload
		};
		case "SET_THREAD_ID": return {
			...i,
			currentThreadId: a.payload
		};
		case "SET_METADATA": return {
			...i,
			metadata: a.payload
		};
		case "SET_METADATA_LOADING": return {
			...i,
			metadataLoading: a.payload
		};
		case "SET_ERROR": return {
			...i,
			error: a.payload
		};
		case "START_SEND": {
			let { userMessage: o, assistantMessage: s } = a.payload;
			return {
				...i,
				messages: [
					...i.messages,
					o,
					s
				],
				isGenerating: !0,
				followUpPrompts: [],
				currentAssistantMessageId: s.id,
				error: null
			};
		}
		case "STREAM_TOKEN": {
			let { messageId: o, content: s } = a.payload;
			return {
				...i,
				messages: updateMessageById(i.messages, o, (i) => ({
					...i,
					content: s
				}))
			};
		}
		case "STREAM_MESSAGE": {
			let { messageId: o, event: s } = a.payload, { messages: c, followUp: l } = applyStreamMessage(i.messages, o, s);
			return {
				...i,
				messages: c,
				...l && { followUpPrompts: l }
			};
		}
		case "STREAM_UPDATE": {
			let o = a.payload.followUp;
			return Array.isArray(o) ? {
				...i,
				followUpPrompts: o
			} : i;
		}
		case "STREAM_ERROR": {
			let { messageId: o, error: s } = a.payload;
			return {
				...i,
				messages: updateMessageById(i.messages, o, (i) => ({
					...i,
					content: `Error: ${s}`
				}))
			};
		}
		case "STREAM_END": return {
			...i,
			isGenerating: !1,
			currentAssistantMessageId: null
		};
		case "CLEAR_CHAT": {
			let o = a.payload?.keepStarter;
			return {
				...i,
				messages: o ? [o] : [],
				followUpPrompts: [],
				currentAssistantMessageId: null
			};
		}
		case "SET_FOLLOW_UP": return {
			...i,
			followUpPrompts: a.payload
		};
		default: return i;
	}
}
function getInitialChatState(i, a) {
	let o = i.starterMessage ? {
		id: `greeting-${Date.now()}`,
		role: "assistant",
		content: i.starterMessage,
		createdAt: /* @__PURE__ */ new Date()
	} : void 0;
	return {
		messages: o ? [o] : [],
		input: "",
		isGenerating: !1,
		followUpPrompts: [],
		currentThreadId: i.threadId,
		currentAssistantMessageId: null,
		metadata: a,
		metadataLoading: !a,
		error: null
	};
}
function generateThreadId() {
	return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `thread-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}
function getStorageBaseKey(i) {
	return `${(i.url ?? "").replace(/\/$/, "")}:${i.userId?.trim() ?? "anon"}:${i.agent?.trim() ?? "default"}`;
}
function persistedToMessages(i) {
	return !i || !Array.isArray(i) || i.length === 0 ? null : i.map((i) => ({
		id: i.id,
		role: i.role === "user" || i.role === "assistant" ? i.role : "user",
		content: i.content,
		createdAt: i.createdAt ? new Date(i.createdAt) : void 0,
		custom_data: i.custom_data,
		toolInvocations: i.toolInvocations,
		parts: i.parts
	}));
}
function apiMessagesToUiMessages(i) {
	let a = [], o = 0, s = Date.now();
	for (; o < i.length;) {
		let c = i[o];
		if (c.type === "human") {
			a.push({
				id: c.run_id ?? `user-${a.length}-${s}`,
				role: "user",
				content: c.content ?? "",
				createdAt: /* @__PURE__ */ new Date(),
				custom_data: c.custom_data
			}), o += 1;
			continue;
		}
		if (c.type === "ai" || c.type === "tool") {
			let c = o, l = "", u = [], d, f;
			for (; o < i.length;) {
				let a = i[o];
				if (a.type === "human") break;
				if (a.type !== "ai" && a.type !== "tool") {
					o += 1;
					continue;
				}
				if (a.type === "ai") {
					a.run_id && d === void 0 && (d = a.run_id), f = a.custom_data;
					let i = a.content ?? "";
					if (i && (l = i), a.tool_calls?.length) for (let i of a.tool_calls) u.push({
						state: "call",
						toolName: i.name,
						toolCallId: i.id,
						args: i.args
					});
				} else {
					let i = a.name ?? a.response_metadata?.name ?? a.custom_data?.name ?? "Tool", o = a.content, s = typeof o == "string" ? o.replace(/\\n/g, "\n") : o, c = a.tool_call_id ?? void 0, l = c ? u.findIndex((i) => i.state === "call" && i.toolCallId === c) : -1, d = l >= 0 ? u[l] : void 0, f = {
						state: "result",
						toolName: i && i !== "Tool" ? i : d?.toolName ?? i,
						toolCallId: c,
						result: s
					};
					l >= 0 ? u[l] = f : u.push(f);
				}
				o += 1;
			}
			a.push({
				id: d ?? `assistant-${c}-${s}`,
				role: "assistant",
				content: l,
				createdAt: /* @__PURE__ */ new Date(),
				custom_data: f,
				toolInvocations: u.length > 0 ? u : void 0
			});
			continue;
		}
		if (c.type === "custom") {
			o += 1;
			continue;
		}
		o += 1;
	}
	return a;
}
function useChatRuntime(i) {
	let [a, o] = useReducer(chatRuntimeReducer, getInitialChatState(i, null)), s = useRef(i);
	s.current = i;
	let c = useRef(null), l = useCallback(() => {
		if (!c.current) {
			let i = a.metadata;
			c.current = new ChatService({
				baseUrl: s.current.url,
				defaultAgent: s.current.agent ?? i?.default_agent ?? "",
				defaultModel: s.current.model ?? i?.default_model ?? "",
				apiKey: s.current.apiKey
			});
		}
		return c.current;
	}, [a.metadata]), u = useRef(""), d = useRef([]);
	useEffect(() => {
		let a = !1, s = new ChatService({
			baseUrl: i.url,
			defaultAgent: i.agent ?? "",
			defaultModel: i.model ?? "",
			apiKey: i.apiKey
		}), c = s.getMetadataFromCache();
		if (c) {
			o({
				type: "SET_METADATA",
				payload: c
			}), o({
				type: "SET_METADATA_LOADING",
				payload: !1
			});
			return;
		}
		return o({
			type: "SET_METADATA_LOADING",
			payload: !0
		}), s.getMetadata(!1).then((i) => {
			a || o({
				type: "SET_METADATA",
				payload: i
			});
		}).catch((i) => {
			a || o({
				type: "SET_ERROR",
				payload: i instanceof Error ? i.message : "Failed to fetch metadata"
			});
		}).finally(() => {
			a || o({
				type: "SET_METADATA_LOADING",
				payload: !1
			});
		}), () => {
			a = !0;
		};
	}, [i.url]);
	let f = useMemo(() => getStorageBaseKey(i), [
		i.url,
		i.userId,
		i.agent
	]), p = useRef(null);
	useEffect(() => {
		let a = `${f}:${i.threadId ?? "none"}`;
		if (p.current === a) return;
		p.current = a;
		let c = f, u = i.threadId;
		if (u != null && u !== "") {
			o({
				type: "SET_THREAD_ID",
				payload: u
			}), (async (i) => {
				let a = s.current.userId?.trim();
				if (a) try {
					let { messages: s } = await l().getHistory(i, a);
					s.length > 0 && o({
						type: "SET_MESSAGES",
						payload: apiMessagesToUiMessages(s)
					});
				} catch {
					let a = persistedToMessages(loadMessages(getThreadMessagesKey(c, i)));
					a && a.length > 0 && o({
						type: "SET_MESSAGES",
						payload: a
					});
				}
				else {
					let a = persistedToMessages(loadMessages(getThreadMessagesKey(c, i)));
					a && a.length > 0 && o({
						type: "SET_MESSAGES",
						payload: a
					});
				}
			})(u);
			return;
		}
		let d = loadCurrentThreadId(c);
		if (d) o({
			type: "SET_THREAD_ID",
			payload: d
		}), (async (i) => {
			let a = s.current.userId?.trim();
			if (a) try {
				let { messages: s } = await l().getHistory(i, a);
				s.length > 0 && o({
					type: "SET_MESSAGES",
					payload: apiMessagesToUiMessages(s)
				});
			} catch {
				let a = persistedToMessages(loadMessages(getThreadMessagesKey(c, i)));
				a && a.length > 0 && o({
					type: "SET_MESSAGES",
					payload: a
				});
			}
			else {
				let a = persistedToMessages(loadMessages(getThreadMessagesKey(c, i)));
				a && a.length > 0 && o({
					type: "SET_MESSAGES",
					payload: a
				});
			}
		})(d);
		else {
			let i = generateThreadId();
			saveCurrentThreadId(c, i), o({
				type: "SET_THREAD_ID",
				payload: i
			});
		}
	}, [
		f,
		i.threadId,
		l
	]), useEffect(() => {
		if (!f) return;
		let i = a.currentThreadId;
		saveCurrentThreadId(f, i ?? null);
	}, [f, a.currentThreadId]), useEffect(() => {
		if (!(!f || !a.currentThreadId)) {
			if (a.messages.length === 0) {
				clearMessages(getThreadMessagesKey(f, a.currentThreadId));
				return;
			}
			saveMessages(getThreadMessagesKey(f, a.currentThreadId), a.messages);
		}
	}, [
		f,
		a.currentThreadId,
		a.messages
	]);
	let m = useRef(void 0);
	useEffect(() => {
		let a = i.agent ?? "", s = m.current, c = s !== void 0 && s !== a;
		if (m.current = a, c) {
			let a = generateThreadId();
			saveCurrentThreadId(f, a), o({
				type: "SET_THREAD_ID",
				payload: a
			}), i.starterMessage ? o({
				type: "CLEAR_CHAT",
				payload: { keepStarter: {
					id: `greeting-${Date.now()}`,
					role: "assistant",
					content: i.starterMessage,
					createdAt: /* @__PURE__ */ new Date()
				} }
			}) : o({ type: "CLEAR_CHAT" });
		}
	}, [
		i.agent,
		i.starterMessage,
		f
	]);
	let h = useCallback(async (i) => {
		if (a.isGenerating) return;
		let c = a.metadata, f = s.current.agent ?? c?.default_agent, p = s.current.model ?? c?.default_model;
		if (!f) return;
		let m = a.currentThreadId;
		m || (m = generateThreadId(), o({
			type: "SET_THREAD_ID",
			payload: m
		}), saveCurrentThreadId(getStorageBaseKey(s.current), m));
		let h = {
			id: `user-${Date.now()}`,
			role: "user",
			content: i,
			createdAt: /* @__PURE__ */ new Date()
		}, g = `ai-${Date.now()}`;
		o({
			type: "START_SEND",
			payload: {
				userMessage: h,
				assistantMessage: {
					id: g,
					role: "assistant",
					content: "",
					createdAt: /* @__PURE__ */ new Date()
				}
			}
		}), u.current = "", d.current = [];
		let _ = l();
		try {
			for await (let a of _.stream(i, {
				agent: f,
				model: p,
				threadId: m,
				userId: s.current.userId,
				streamTokens: s.current.stream !== !1
			})) if (a.type === "token" && typeof a.content == "string") u.current += a.content, o({
				type: "STREAM_TOKEN",
				payload: {
					messageId: g,
					content: u.current
				}
			});
			else if (a.type === "message" && a.content) {
				o({
					type: "STREAM_MESSAGE",
					payload: {
						messageId: g,
						event: a
					}
				});
				let i = a.content;
				if (i.type === "custom" && Array.isArray(i.custom_data?.follow_up)) d.current = i.custom_data.follow_up;
				else if (typeof i.content == "string" && (u.current = i.content, d.current.length > 0)) {
					let i = u.current + "\n\n**Follow-up suggestions:**\n" + d.current.map((i) => `- ${i}`).join("\n");
					d.current = [], o({
						type: "STREAM_TOKEN",
						payload: {
							messageId: g,
							content: i
						}
					});
				}
			} else if (a.type === "update" && a.updates?.follow_up) {
				let i = a.updates.follow_up;
				Array.isArray(i) && (o({
					type: "SET_FOLLOW_UP",
					payload: i
				}), d.current = i);
			} else a.type === "error" && o({
				type: "STREAM_ERROR",
				payload: {
					messageId: g,
					error: typeof a.content == "string" ? a.content : "Unknown error"
				}
			});
		} catch (i) {
			o({
				type: "STREAM_ERROR",
				payload: {
					messageId: g,
					error: i instanceof Error ? i.message : "Unknown error"
				}
			});
		} finally {
			let i = u.current;
			o({ type: "STREAM_END" }), s.current.onStreamEnd?.(i);
		}
	}, [
		a.isGenerating,
		a.metadata,
		a.currentThreadId,
		l
	]), g = useCallback(() => {
		l().abortStream(), o({ type: "STREAM_END" });
	}, [l]), _ = useCallback((i) => {
		o({
			type: "SET_INPUT",
			payload: i
		});
	}, []), v = useCallback((i) => {
		o(typeof i == "function" ? {
			type: "SET_MESSAGES",
			payload: i(a.messages)
		} : {
			type: "SET_MESSAGES",
			payload: i
		});
	}, [a.messages]), y = useCallback((i) => {
		let a = getStorageBaseKey(s.current);
		if (i?.createNewThread) {
			let i = generateThreadId();
			saveCurrentThreadId(a, i), o({
				type: "SET_THREAD_ID",
				payload: i
			});
		}
		i?.keepStarter && s.current.starterMessage ? o({
			type: "CLEAR_CHAT",
			payload: { keepStarter: {
				id: `greeting-${Date.now()}`,
				role: "assistant",
				content: s.current.starterMessage,
				createdAt: /* @__PURE__ */ new Date()
			} }
		}) : o({ type: "CLEAR_CHAT" });
	}, []), b = useCallback((i) => {
		c.current = null, o({
			type: "SET_METADATA",
			payload: a.metadata
		});
	}, [a.metadata]), x = useCallback((i) => {}, []), S = useCallback((i) => {
		o({
			type: "SET_THREAD_ID",
			payload: i
		});
	}, []), C = useCallback(async (i, a) => {
		let c = (a ?? s.current.userId)?.trim();
		if (!c) return;
		let u = l();
		try {
			let { messages: a } = await u.getHistory(i, c);
			o({
				type: "SET_MESSAGES",
				payload: apiMessagesToUiMessages(a)
			}), o({
				type: "SET_THREAD_ID",
				payload: i
			}), o({
				type: "SET_ERROR",
				payload: null
			});
		} catch (i) {
			console.error("Failed to load thread history:", i), o({
				type: "SET_ERROR",
				payload: i instanceof Error ? i.message : "Failed to load conversation"
			});
		}
	}, [l]), w = useCallback(async (i, o) => {
		let s = a.messages.find((a) => a.id === i)?.custom_data?.run_id;
		s && await l().sendFeedback(s, "human-feedback", o === "thumbs-up" ? 1 : 0);
	}, [a.messages, l]), T = useCallback(async () => {
		o({
			type: "SET_METADATA",
			payload: await l().getMetadata(!0)
		});
	}, [l]), E = useCallback(async (i) => {
		let a = s.current.userId?.trim();
		return l().getThreads(a, i);
	}, [l]), D = useCallback(async (i, a) => l().getHistory(i, s.current.userId, a), [l]), O = useCallback(async (i, a) => {
		let o = (a ?? s.current.userId)?.trim();
		if (!o) throw Error("User ID is required to delete a thread");
		await l().deleteThread(i, o);
	}, [l]), k = useMemo(() => ({
		setInput: _,
		sendMessage: h,
		stopGeneration: g,
		setMessages: v,
		clearChat: y,
		setAgent: b,
		setModel: x,
		setThreadId: S,
		loadThread: C,
		rateResponse: w,
		refetchMetadata: T,
		getThreads: E,
		getHistory: D,
		deleteThread: O
	}), [
		_,
		h,
		g,
		v,
		y,
		b,
		x,
		S,
		C,
		w,
		T,
		E,
		D,
		O
	]);
	return {
		...a,
		...k
	};
}
var ChatContext = createContext(null);
function ChatProvider({ config: i, children: a, initialSuggestions: o, voiceConfig: s, isListening: c, startListening: l, stopListening: u, isSpeechSupported: d, onMetadata: f }) {
	let p = useChatRuntime(i), m = p.messages.some((i) => i.role === "user");
	React.useEffect(() => {
		p.metadata && f?.(p.metadata);
	}, [p.metadata, f]);
	let h = useMemo(() => p.followUpPrompts.length > 0 ? p.followUpPrompts : m ? [] : o ?? i.starterSuggestions ?? [], [
		p.followUpPrompts,
		m,
		o,
		i.starterSuggestions
	]), g = useMemo(() => ({
		...p,
		suggestions: h,
		voiceConfig: s,
		isListening: c,
		startListening: l,
		stopListening: u,
		isSpeechSupported: d
	}), [
		p,
		h,
		s,
		c,
		l,
		u,
		d
	]);
	return /* @__PURE__ */ jsx(ChatContext.Provider, {
		value: g,
		children: a
	});
}
function useChatContext() {
	let i = useContext(ChatContext);
	if (!i) throw Error("useChatContext must be used within ChatProvider");
	return i;
}
function ChatRoot(i) {
	return /* @__PURE__ */ jsx(ChatProvider, { ...i });
}
ChatRoot.displayName = "Chat.Root";
function useMessageDisplay({ messages: i, isGenerating: a }) {
	let o = i.at(-1), s = i.length === 0, c = o?.role === "user";
	return {
		displayMessages: useMemo(() => a && (s || o?.role === "user") ? [...i, {
			id: "typing",
			role: "assistant",
			content: "",
			createdAt: /* @__PURE__ */ new Date()
		}] : i, [
			i,
			a,
			s,
			o
		]),
		isTyping: c,
		isEmpty: s
	};
}
var LayoutGroupContext = createContext({});
function useConstant(i) {
	let a = useRef(null);
	return a.current === null && (a.current = i()), a.current;
}
var PresenceContext = createContext(null), MotionConfigContext = createContext({
	transformPagePoint: (i) => i,
	isStatic: !1,
	reducedMotion: "never"
}), PopChildMeasure = class extends React$1.Component {
	getSnapshotBeforeUpdate(i) {
		let a = this.props.childRef.current;
		if (a && i.isPresent && !this.props.isPresent) {
			let i = this.props.sizeRef.current;
			i.height = a.offsetHeight || 0, i.width = a.offsetWidth || 0, i.top = a.offsetTop, i.left = a.offsetLeft;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function PopChild({ children: i, isPresent: a }) {
	let o = useId(), s = useRef(null), c = useRef({
		width: 0,
		height: 0,
		top: 0,
		left: 0
	}), { nonce: l } = useContext(MotionConfigContext);
	return useInsertionEffect(() => {
		let { width: i, height: u, top: d, left: f } = c.current;
		if (a || !s.current || !i || !u) return;
		s.current.dataset.motionPopId = o;
		let p = document.createElement("style");
		return l && (p.nonce = l), document.head.appendChild(p), p.sheet && p.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${u}px !important;
            top: ${d}px !important;
            left: ${f}px !important;
          }
        `), () => {
			document.head.removeChild(p);
		};
	}, [a]), jsx(PopChildMeasure, {
		isPresent: a,
		childRef: s,
		sizeRef: c,
		children: React$1.cloneElement(i, { ref: s })
	});
}
var PresenceChild = ({ children: i, initial: a, isPresent: o, onExitComplete: s, custom: c, presenceAffectsLayout: l, mode: u }) => {
	let d = useConstant(newChildrenMap), f = useId(), p = useCallback((i) => {
		d.set(i, !0);
		for (let i of d.values()) if (!i) return;
		s && s();
	}, [d, s]), m = useMemo(() => ({
		id: f,
		initial: a,
		isPresent: o,
		custom: c,
		onExitComplete: p,
		register: (i) => (d.set(i, !1), () => d.delete(i))
	}), l ? [Math.random(), p] : [o, p]);
	return useMemo(() => {
		d.forEach((i, a) => d.set(a, !1));
	}, [o]), React$1.useEffect(() => {
		!o && !d.size && s && s();
	}, [o]), u === "popLayout" && (i = jsx(PopChild, {
		isPresent: o,
		children: i
	})), jsx(PresenceContext.Provider, {
		value: m,
		children: i
	});
};
function newChildrenMap() {
	return /* @__PURE__ */ new Map();
}
function usePresence(i = !0) {
	let a = useContext(PresenceContext);
	if (a === null) return [!0, null];
	let { isPresent: o, onExitComplete: s, register: c } = a, l = useId();
	useEffect(() => {
		i && c(l);
	}, [i]);
	let u = useCallback(() => i && s && s(l), [
		l,
		s,
		i
	]);
	return !o && s ? [!1, u] : [!0];
}
var getChildKey = (i) => i.key || "";
function onlyElements(i) {
	let a = [];
	return Children.forEach(i, (i) => {
		isValidElement(i) && a.push(i);
	}), a;
}
var isBrowser = typeof window < "u", useIsomorphicLayoutEffect$1 = isBrowser ? useLayoutEffect : useEffect, AnimatePresence = ({ children: i, custom: a, initial: o = !0, onExitComplete: s, presenceAffectsLayout: c = !0, mode: l = "sync", propagate: u = !1 }) => {
	let [d, f] = usePresence(u), p = useMemo(() => onlyElements(i), [i]), m = u && !d ? [] : p.map(getChildKey), h = useRef(!0), g = useRef(p), _ = useConstant(() => /* @__PURE__ */ new Map()), [v, y] = useState(p), [b, x] = useState(p);
	useIsomorphicLayoutEffect$1(() => {
		h.current = !1, g.current = p;
		for (let i = 0; i < b.length; i++) {
			let a = getChildKey(b[i]);
			m.includes(a) ? _.delete(a) : _.get(a) !== !0 && _.set(a, !1);
		}
	}, [
		b,
		m.length,
		m.join("-")
	]);
	let S = [];
	if (p !== v) {
		let i = [...p];
		for (let a = 0; a < b.length; a++) {
			let o = b[a], s = getChildKey(o);
			m.includes(s) || (i.splice(a, 0, o), S.push(o));
		}
		l === "wait" && S.length && (i = S), x(onlyElements(i)), y(p);
		return;
	}
	process.env.NODE_ENV !== "production" && l === "wait" && b.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its mode is set to \"wait\". This will lead to odd visual behaviour.");
	let { forceRender: C } = useContext(LayoutGroupContext);
	return jsx(Fragment$1, { children: b.map((i) => {
		let v = getChildKey(i), y = u && !d ? !1 : p === b || m.includes(v);
		return jsx(PresenceChild, {
			isPresent: y,
			initial: !h.current || o ? void 0 : !1,
			custom: y ? void 0 : a,
			presenceAffectsLayout: c,
			mode: l,
			onExitComplete: y ? void 0 : () => {
				if (_.has(v)) _.set(v, !0);
				else return;
				let i = !0;
				_.forEach((a) => {
					a || (i = !1);
				}), i && (C?.(), x(g.current), u && f?.(), s && s());
			},
			children: i
		}, v);
	}) });
}, noop = /* @__NO_SIDE_EFFECTS__ */ (i) => i, warning = noop, invariant = noop;
process.env.NODE_ENV !== "production" && (warning = (i, a) => {
	!i && typeof console < "u" && console.warn(a);
}, invariant = (i, a) => {
	if (!i) throw Error(a);
});
/* @__NO_SIDE_EFFECTS__ */
function memo$2(i) {
	let a;
	return () => (a === void 0 && (a = i()), a);
}
var progress = /* @__NO_SIDE_EFFECTS__ */ (i, a, o) => {
	let s = a - i;
	return s === 0 ? 1 : (o - i) / s;
}, secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, MotionGlobalConfig = {
	skipAnimations: !1,
	useManualTiming: !1
};
function createRenderStep(i) {
	let a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = !1, c = !1, l = /* @__PURE__ */ new WeakSet(), u = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	};
	function d(a) {
		l.has(a) && (f.schedule(a), i()), a(u);
	}
	let f = {
		schedule: (i, c = !1, u = !1) => {
			let d = u && s ? a : o;
			return c && l.add(i), d.has(i) || d.add(i), i;
		},
		cancel: (i) => {
			o.delete(i), l.delete(i);
		},
		process: (i) => {
			if (u = i, s) {
				c = !0;
				return;
			}
			s = !0, [a, o] = [o, a], a.forEach(d), a.clear(), s = !1, c && (c = !1, f.process(i));
		}
	};
	return f;
}
var stepsOrder = [
	"read",
	"resolveKeyframes",
	"update",
	"preRender",
	"render",
	"postRender"
], maxElapsed = 40;
function createRenderBatcher(i, a) {
	let o = !1, s = !0, c = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, l = () => o = !0, u = stepsOrder.reduce((i, a) => (i[a] = createRenderStep(l), i), {}), { read: d, resolveKeyframes: f, update: p, preRender: m, render: h, postRender: g } = u, _ = () => {
		let l = MotionGlobalConfig.useManualTiming ? c.timestamp : performance.now();
		o = !1, c.delta = s ? 1e3 / 60 : Math.max(Math.min(l - c.timestamp, maxElapsed), 1), c.timestamp = l, c.isProcessing = !0, d.process(c), f.process(c), p.process(c), m.process(c), h.process(c), g.process(c), c.isProcessing = !1, o && a && (s = !1, i(_));
	}, v = () => {
		o = !0, s = !0, c.isProcessing || i(_);
	};
	return {
		schedule: stepsOrder.reduce((i, a) => {
			let s = u[a];
			return i[a] = (i, a = !1, c = !1) => (o || v(), s.schedule(i, a, c)), i;
		}, {}),
		cancel: (i) => {
			for (let a = 0; a < stepsOrder.length; a++) u[stepsOrder[a]].cancel(i);
		},
		state: c,
		steps: u
	};
}
var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = createRenderBatcher(typeof requestAnimationFrame < "u" ? requestAnimationFrame : noop, !0), LazyContext = createContext({ strict: !1 }), featureProps = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
}, featureDefinitions = {};
for (let i in featureProps) featureDefinitions[i] = { isEnabled: (a) => featureProps[i].some((i) => !!a[i]) };
function loadFeatures(i) {
	for (let a in i) featureDefinitions[a] = {
		...featureDefinitions[a],
		...i[a]
	};
}
var validMotionProps = new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport".split("."));
function isValidMotionProp(i) {
	return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || validMotionProps.has(i);
}
var shouldForward = (i) => !isValidMotionProp(i);
function loadExternalIsValidProp(i) {
	i && (shouldForward = (a) => a.startsWith("on") ? !isValidMotionProp(a) : i(a));
}
try {
	loadExternalIsValidProp((init_is_prop_valid_framer_motion(), __toCommonJS(is_prop_valid_framer_motion_exports)).default);
} catch {}
function filterProps(i, a, o) {
	let s = {};
	for (let c in i) c === "values" && typeof i.values == "object" || (shouldForward(c) || o === !0 && isValidMotionProp(c) || !a && !isValidMotionProp(c) || i.draggable && c.startsWith("onDrag")) && (s[c] = i[c]);
	return s;
}
var warned = /* @__PURE__ */ new Set();
function warnOnce(i, a, o) {
	i || warned.has(a) || (console.warn(a), o && console.warn(o), warned.add(a));
}
function createDOMMotionComponentProxy(i) {
	if (typeof Proxy > "u") return i;
	let a = /* @__PURE__ */ new Map();
	return new Proxy((...a) => (process.env.NODE_ENV !== "production" && warnOnce(!1, "motion() is deprecated. Use motion.create() instead."), i(...a)), { get: (o, s) => s === "create" ? i : (a.has(s) || a.set(s, i(s)), a.get(s)) });
}
var MotionContext = createContext({});
function isVariantLabel(i) {
	return typeof i == "string" || Array.isArray(i);
}
function isAnimationControls(i) {
	return typeof i == "object" && !!i && typeof i.start == "function";
}
var variantPriorityOrder = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], variantProps = ["initial", ...variantPriorityOrder];
function isControllingVariants(i) {
	return isAnimationControls(i.animate) || variantProps.some((a) => isVariantLabel(i[a]));
}
function isVariantNode(i) {
	return !!(isControllingVariants(i) || i.variants);
}
function getCurrentTreeVariants(i, a) {
	if (isControllingVariants(i)) {
		let { initial: a, animate: o } = i;
		return {
			initial: a === !1 || isVariantLabel(a) ? a : void 0,
			animate: isVariantLabel(o) ? o : void 0
		};
	}
	return i.inherit === !1 ? {} : a;
}
function useCreateMotionContext(i) {
	let { initial: a, animate: o } = getCurrentTreeVariants(i, useContext(MotionContext));
	return useMemo(() => ({
		initial: a,
		animate: o
	}), [variantLabelsAsDependency(a), variantLabelsAsDependency(o)]);
}
function variantLabelsAsDependency(i) {
	return Array.isArray(i) ? i.join(" ") : i;
}
var motionComponentSymbol = Symbol.for("motionComponentSymbol");
function isRefObject(i) {
	return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function useMotionRef(i, a, o) {
	return useCallback((s) => {
		s && i.onMount && i.onMount(s), a && (s ? a.mount(s) : a.unmount()), o && (typeof o == "function" ? o(s) : isRefObject(o) && (o.current = s));
	}, [a]);
}
var camelToDash = (i) => i.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId"), { schedule: microtask, cancel: cancelMicrotask } = createRenderBatcher(queueMicrotask, !1), SwitchLayoutGroupContext = createContext({});
function useVisualElement(i, a, o, s, c) {
	let { visualElement: l } = useContext(MotionContext), u = useContext(LazyContext), d = useContext(PresenceContext), f = useContext(MotionConfigContext).reducedMotion, p = useRef(null);
	s ||= u.renderer, !p.current && s && (p.current = s(i, {
		visualState: a,
		parent: l,
		props: o,
		presenceContext: d,
		blockInitialAnimation: d ? d.initial === !1 : !1,
		reducedMotionConfig: f
	}));
	let m = p.current, h = useContext(SwitchLayoutGroupContext);
	m && !m.projection && c && (m.type === "html" || m.type === "svg") && createProjectionNode$1(p.current, o, c, h);
	let g = useRef(!1);
	useInsertionEffect(() => {
		m && g.current && m.update(o, d);
	});
	let _ = o[optimizedAppearDataAttribute], v = useRef(!!_ && !window.MotionHandoffIsComplete?.call(window, _) && window.MotionHasOptimisedAnimation?.call(window, _));
	return useIsomorphicLayoutEffect$1(() => {
		m && (g.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), microtask.render(m.render), v.current && m.animationState && m.animationState.animateChanges());
	}), useEffect(() => {
		m && (!v.current && m.animationState && m.animationState.animateChanges(), v.current &&= (queueMicrotask(() => {
			var i;
			(i = window.MotionHandoffMarkAsComplete) == null || i.call(window, _);
		}), !1));
	}), m;
}
function createProjectionNode$1(i, a, o, s) {
	let { layoutId: c, layout: l, drag: u, dragConstraints: d, layoutScroll: f, layoutRoot: p } = a;
	i.projection = new o(i.latestValues, a["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(i.parent)), i.projection.setOptions({
		layoutId: c,
		layout: l,
		alwaysMeasureLayout: !!u || d && isRefObject(d),
		visualElement: i,
		animationType: typeof l == "string" ? l : "both",
		initialPromotionConfig: s,
		layoutScroll: f,
		layoutRoot: p
	});
}
function getClosestProjectingNode(i) {
	if (i) return i.options.allowProjection === !1 ? getClosestProjectingNode(i.parent) : i.projection;
}
function createRendererMotionComponent({ preloadedFeatures: i, createVisualElement: a, useRender: o, useVisualState: s, Component: c }) {
	i && loadFeatures(i);
	function l(l, u) {
		let d, f = {
			...useContext(MotionConfigContext),
			...l,
			layoutId: useLayoutId(l)
		}, { isStatic: p } = f, m = useCreateMotionContext(l), h = s(l, p);
		if (!p && isBrowser) {
			useStrictMode(f, i);
			let o = getProjectionFunctionality(f);
			d = o.MeasureLayout, m.visualElement = useVisualElement(c, h, f, a, o.ProjectionNode);
		}
		return jsxs(MotionContext.Provider, {
			value: m,
			children: [d && m.visualElement ? jsx(d, {
				visualElement: m.visualElement,
				...f
			}) : null, o(c, l, useMotionRef(h, m.visualElement, u), h, p, m.visualElement)]
		});
	}
	l.displayName = `motion.${typeof c == "string" ? c : `create(${c.displayName ?? c.name ?? ""})`}`;
	let u = forwardRef(l);
	return u[motionComponentSymbol] = c, u;
}
function useLayoutId({ layoutId: i }) {
	let a = useContext(LayoutGroupContext).id;
	return a && i !== void 0 ? a + "-" + i : i;
}
function useStrictMode(i, a) {
	let o = useContext(LazyContext).strict;
	if (process.env.NODE_ENV !== "production" && a && o) {
		let a = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		i.ignoreStrict ? warning(!1, a) : invariant(!1, a);
	}
}
function getProjectionFunctionality(i) {
	let { drag: a, layout: o } = featureDefinitions;
	if (!a && !o) return {};
	let s = {
		...a,
		...o
	};
	return {
		MeasureLayout: a?.isEnabled(i) || o?.isEnabled(i) ? s.MeasureLayout : void 0,
		ProjectionNode: s.ProjectionNode
	};
}
var lowercaseSVGElements = [
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
	"view"
];
function isSVGComponent(i) {
	return typeof i != "string" || i.includes("-") ? !1 : !!(lowercaseSVGElements.indexOf(i) > -1 || /[A-Z]/u.test(i));
}
function getValueState(i) {
	let a = [{}, {}];
	return i?.values.forEach((i, o) => {
		a[0][o] = i.get(), a[1][o] = i.getVelocity();
	}), a;
}
function resolveVariantFromProps(i, a, o, s) {
	if (typeof a == "function") {
		let [c, l] = getValueState(s);
		a = a(o === void 0 ? i.custom : o, c, l);
	}
	if (typeof a == "string" && (a = i.variants && i.variants[a]), typeof a == "function") {
		let [c, l] = getValueState(s);
		a = a(o === void 0 ? i.custom : o, c, l);
	}
	return a;
}
var isKeyframesTarget = (i) => Array.isArray(i), isCustomValue = (i) => !!(i && typeof i == "object" && i.mix && i.toValue), resolveFinalValueInKeyframes = (i) => isKeyframesTarget(i) ? i[i.length - 1] || 0 : i, isMotionValue = (i) => !!(i && i.getVelocity);
function resolveMotionValue(i) {
	let a = isMotionValue(i) ? i.get() : i;
	return isCustomValue(a) ? a.toValue() : a;
}
function makeState({ scrapeMotionValuesFromProps: i, createRenderState: a, onUpdate: o }, s, c, l) {
	let u = {
		latestValues: makeLatestValues(s, c, l, i),
		renderState: a()
	};
	return o && (u.onMount = (i) => o({
		props: s,
		current: i,
		...u
	}), u.onUpdate = (i) => o(i)), u;
}
var makeUseVisualState = (i) => (a, o) => {
	let s = useContext(MotionContext), c = useContext(PresenceContext), l = () => makeState(i, a, s, c);
	return o ? l() : useConstant(l);
};
function makeLatestValues(i, a, o, s) {
	let c = {}, l = s(i, {});
	for (let i in l) c[i] = resolveMotionValue(l[i]);
	let { initial: u, animate: d } = i, f = isControllingVariants(i), p = isVariantNode(i);
	a && p && !f && i.inherit !== !1 && (u === void 0 && (u = a.initial), d === void 0 && (d = a.animate));
	let m = o ? o.initial === !1 : !1;
	m ||= u === !1;
	let h = m ? d : u;
	if (h && typeof h != "boolean" && !isAnimationControls(h)) {
		let a = Array.isArray(h) ? h : [h];
		for (let o = 0; o < a.length; o++) {
			let s = resolveVariantFromProps(i, a[o]);
			if (s) {
				let { transitionEnd: i, transition: a, ...o } = s;
				for (let i in o) {
					let a = o[i];
					if (Array.isArray(a)) {
						let i = m ? a.length - 1 : 0;
						a = a[i];
					}
					a !== null && (c[i] = a);
				}
				for (let a in i) c[a] = i[a];
			}
		}
	}
	return c;
}
var transformPropOrder = [
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
	"skewY"
], transformProps = new Set(transformPropOrder), checkStringStartsWith = (i) => (a) => typeof a == "string" && a.startsWith(i), isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--"), startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--"), isCSSVariableToken = (i) => startsAsVariableToken(i) ? singleCssVariableRegex.test(i.split("/*")[0].trim()) : !1, singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, getValueAsType = (i, a) => a && typeof i == "number" ? a.transform(i) : i, clamp = (i, a, o) => o > a ? a : o < i ? i : o, number = {
	test: (i) => typeof i == "number",
	parse: parseFloat,
	transform: (i) => i
}, alpha = {
	...number,
	transform: (i) => clamp(0, 1, i)
}, scale = {
	...number,
	default: 1
}, createUnitType = (i) => ({
	test: (a) => typeof a == "string" && a.endsWith(i) && a.split(" ").length === 1,
	parse: parseFloat,
	transform: (a) => `${a}${i}`
}), degrees = /* @__PURE__ */ createUnitType("deg"), percent = /* @__PURE__ */ createUnitType("%"), px = /* @__PURE__ */ createUnitType("px"), vh = /* @__PURE__ */ createUnitType("vh"), vw = /* @__PURE__ */ createUnitType("vw"), progressPercentage = {
	...percent,
	parse: (i) => percent.parse(i) / 100,
	transform: (i) => percent.transform(i * 100)
}, browserNumberValueTypes = {
	borderWidth: px,
	borderTopWidth: px,
	borderRightWidth: px,
	borderBottomWidth: px,
	borderLeftWidth: px,
	borderRadius: px,
	radius: px,
	borderTopLeftRadius: px,
	borderTopRightRadius: px,
	borderBottomRightRadius: px,
	borderBottomLeftRadius: px,
	width: px,
	maxWidth: px,
	height: px,
	maxHeight: px,
	top: px,
	right: px,
	bottom: px,
	left: px,
	padding: px,
	paddingTop: px,
	paddingRight: px,
	paddingBottom: px,
	paddingLeft: px,
	margin: px,
	marginTop: px,
	marginRight: px,
	marginBottom: px,
	marginLeft: px,
	backgroundPositionX: px,
	backgroundPositionY: px
}, transformValueTypes = {
	rotate: degrees,
	rotateX: degrees,
	rotateY: degrees,
	rotateZ: degrees,
	scale,
	scaleX: scale,
	scaleY: scale,
	scaleZ: scale,
	skew: degrees,
	skewX: degrees,
	skewY: degrees,
	distance: px,
	translateX: px,
	translateY: px,
	translateZ: px,
	x: px,
	y: px,
	z: px,
	perspective: px,
	transformPerspective: px,
	opacity: alpha,
	originX: progressPercentage,
	originY: progressPercentage,
	originZ: px
}, int = {
	...number,
	transform: Math.round
}, numberValueTypes = {
	...browserNumberValueTypes,
	...transformValueTypes,
	zIndex: int,
	size: px,
	fillOpacity: alpha,
	strokeOpacity: alpha,
	numOctaves: int
}, translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, numTransforms = transformPropOrder.length;
function buildTransform(i, a, o) {
	let s = "", c = !0;
	for (let l = 0; l < numTransforms; l++) {
		let u = transformPropOrder[l], d = i[u];
		if (d === void 0) continue;
		let f = !0;
		if (f = typeof d == "number" ? d === (u.startsWith("scale") ? 1 : 0) : parseFloat(d) === 0, !f || o) {
			let i = getValueAsType(d, numberValueTypes[u]);
			if (!f) {
				c = !1;
				let a = translateAlias[u] || u;
				s += `${a}(${i}) `;
			}
			o && (a[u] = i);
		}
	}
	return s = s.trim(), o ? s = o(a, c ? "" : s) : c && (s = "none"), s;
}
function buildHTMLStyles(i, a, o) {
	let { style: s, vars: c, transformOrigin: l } = i, u = !1, d = !1;
	for (let i in a) {
		let o = a[i];
		if (transformProps.has(i)) {
			u = !0;
			continue;
		} else if (isCSSVariableName(i)) {
			c[i] = o;
			continue;
		} else {
			let a = getValueAsType(o, numberValueTypes[i]);
			i.startsWith("origin") ? (d = !0, l[i] = a) : s[i] = a;
		}
	}
	if (a.transform || (u || o ? s.transform = buildTransform(a, i.transform, o) : s.transform &&= "none"), d) {
		let { originX: i = "50%", originY: a = "50%", originZ: o = 0 } = l;
		s.transformOrigin = `${i} ${a} ${o}`;
	}
}
var dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function buildSVGPath(i, a, o = 1, s = 0, c = !0) {
	i.pathLength = 1;
	let l = c ? dashKeys : camelKeys;
	i[l.offset] = px.transform(-s);
	let u = px.transform(a), d = px.transform(o);
	i[l.array] = `${u} ${d}`;
}
function calcOrigin$1(i, a, o) {
	return typeof i == "string" ? i : px.transform(a + o * i);
}
function calcSVGTransformOrigin(i, a, o) {
	return `${calcOrigin$1(a, i.x, i.width)} ${calcOrigin$1(o, i.y, i.height)}`;
}
function buildSVGAttrs(i, { attrX: a, attrY: o, attrScale: s, originX: c, originY: l, pathLength: u, pathSpacing: d = 1, pathOffset: f = 0, ...p }, m, h) {
	if (buildHTMLStyles(i, p, h), m) {
		i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
		return;
	}
	i.attrs = i.style, i.style = {};
	let { attrs: g, style: _, dimensions: v } = i;
	g.transform && (v && (_.transform = g.transform), delete g.transform), v && (c !== void 0 || l !== void 0 || _.transform) && (_.transformOrigin = calcSVGTransformOrigin(v, c === void 0 ? .5 : c, l === void 0 ? .5 : l)), a !== void 0 && (g.x = a), o !== void 0 && (g.y = o), s !== void 0 && (g.scale = s), u !== void 0 && buildSVGPath(g, u, d, f, !1);
}
var createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
}), createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
}), isSVGTag = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function renderHTML(i, { style: a, vars: o }, s, c) {
	for (let l in Object.assign(i.style, a, c && c.getProjectionStyles(s)), o) i.style.setProperty(l, o[l]);
}
var camelCaseAttributes = new Set([
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
	"lengthAdjust"
]);
function renderSVG(i, a, o, s) {
	for (let o in renderHTML(i, a, void 0, s), a.attrs) i.setAttribute(camelCaseAttributes.has(o) ? o : camelToDash(o), a.attrs[o]);
}
var scaleCorrectors = {};
function addScaleCorrector(i) {
	Object.assign(scaleCorrectors, i);
}
function isForcedMotionValue(i, { layout: a, layoutId: o }) {
	return transformProps.has(i) || i.startsWith("origin") || (a || o !== void 0) && (!!scaleCorrectors[i] || i === "opacity");
}
function scrapeMotionValuesFromProps$1(i, a, o) {
	let { style: s } = i, c = {};
	for (let l in s) (isMotionValue(s[l]) || a.style && isMotionValue(a.style[l]) || isForcedMotionValue(l, i) || o?.getValue(l)?.liveStyle !== void 0) && (c[l] = s[l]);
	return c;
}
function scrapeMotionValuesFromProps(i, a, o) {
	let s = scrapeMotionValuesFromProps$1(i, a, o);
	for (let o in i) if (isMotionValue(i[o]) || isMotionValue(a[o])) {
		let a = transformPropOrder.indexOf(o) === -1 ? o : "attr" + o.charAt(0).toUpperCase() + o.substring(1);
		s[a] = i[o];
	}
	return s;
}
function updateSVGDimensions(i, a) {
	try {
		a.dimensions = typeof i.getBBox == "function" ? i.getBBox() : i.getBoundingClientRect();
	} catch {
		a.dimensions = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
	}
}
var layoutProps = [
	"x",
	"y",
	"width",
	"height",
	"cx",
	"cy",
	"r"
], svgMotionConfig = { useVisualState: makeUseVisualState({
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState,
	onUpdate: ({ props: i, prevProps: a, current: o, renderState: s, latestValues: c }) => {
		if (!o) return;
		let l = !!i.drag;
		if (!l) {
			for (let i in c) if (transformProps.has(i)) {
				l = !0;
				break;
			}
		}
		if (!l) return;
		let u = !a;
		if (a) for (let o = 0; o < layoutProps.length; o++) {
			let s = layoutProps[o];
			i[s] !== a[s] && (u = !0);
		}
		u && frame.read(() => {
			updateSVGDimensions(o, s), frame.render(() => {
				buildSVGAttrs(s, c, isSVGTag(o.tagName), i.transformTemplate), renderSVG(o, s);
			});
		});
	}
}) }, htmlMotionConfig = { useVisualState: makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
}) };
function copyRawValuesOnly(i, a, o) {
	for (let s in a) !isMotionValue(a[s]) && !isForcedMotionValue(s, o) && (i[s] = a[s]);
}
function useInitialMotionValues({ transformTemplate: i }, a) {
	return useMemo(() => {
		let o = createHtmlRenderState();
		return buildHTMLStyles(o, a, i), Object.assign({}, o.vars, o.style);
	}, [a]);
}
function useStyle(i, a) {
	let o = i.style || {}, s = {};
	return copyRawValuesOnly(s, o, i), Object.assign(s, useInitialMotionValues(i, a)), s;
}
function useHTMLProps(i, a) {
	let o = {}, s = useStyle(i, a);
	return i.drag && i.dragListener !== !1 && (o.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (o.tabIndex = 0), o.style = s, o;
}
function useSVGProps(i, a, o, s) {
	let c = useMemo(() => {
		let o = createSvgRenderState();
		return buildSVGAttrs(o, a, isSVGTag(s), i.transformTemplate), {
			...o.attrs,
			style: { ...o.style }
		};
	}, [a]);
	if (i.style) {
		let a = {};
		copyRawValuesOnly(a, i.style, i), c.style = {
			...a,
			...c.style
		};
	}
	return c;
}
function createUseRender(i = !1) {
	return (a, o, s, { latestValues: c }, l) => {
		let u = (isSVGComponent(a) ? useSVGProps : useHTMLProps)(o, c, l, a), d = filterProps(o, typeof a == "string", i), f = a === Fragment ? {} : {
			...d,
			...u,
			ref: s
		}, { children: p } = o, m = useMemo(() => isMotionValue(p) ? p.get() : p, [p]);
		return createElement(a, {
			...f,
			children: m
		});
	};
}
function createMotionComponentFactory(i, a) {
	return function(o, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
		return createRendererMotionComponent({
			...isSVGComponent(o) ? svgMotionConfig : htmlMotionConfig,
			preloadedFeatures: i,
			useRender: createUseRender(s),
			createVisualElement: a,
			Component: o
		});
	};
}
function shallowCompare(i, a) {
	if (!Array.isArray(a)) return !1;
	let o = a.length;
	if (o !== i.length) return !1;
	for (let s = 0; s < o; s++) if (a[s] !== i[s]) return !1;
	return !0;
}
function resolveVariant(i, a, o) {
	let s = i.getProps();
	return resolveVariantFromProps(s, a, o === void 0 ? s.custom : o, i);
}
var supportsScrollTimeline = /* @__PURE__ */ memo$2(() => window.ScrollTimeline !== void 0), BaseGroupPlaybackControls = class {
	constructor(i) {
		this.stop = () => this.runAll("stop"), this.animations = i.filter(Boolean);
	}
	get finished() {
		return Promise.all(this.animations.map((i) => "finished" in i ? i.finished : i));
	}
	getAll(i) {
		return this.animations[0][i];
	}
	setAll(i, a) {
		for (let o = 0; o < this.animations.length; o++) this.animations[o][i] = a;
	}
	attachTimeline(i, a) {
		let o = this.animations.map((o) => {
			if (supportsScrollTimeline() && o.attachTimeline) return o.attachTimeline(i);
			if (typeof a == "function") return a(o);
		});
		return () => {
			o.forEach((i, a) => {
				i && i(), this.animations[a].stop();
			});
		};
	}
	get time() {
		return this.getAll("time");
	}
	set time(i) {
		this.setAll("time", i);
	}
	get speed() {
		return this.getAll("speed");
	}
	set speed(i) {
		this.setAll("speed", i);
	}
	get startTime() {
		return this.getAll("startTime");
	}
	get duration() {
		let i = 0;
		for (let a = 0; a < this.animations.length; a++) i = Math.max(i, this.animations[a].duration);
		return i;
	}
	runAll(i) {
		this.animations.forEach((a) => a[i]());
	}
	flatten() {
		this.runAll("flatten");
	}
	play() {
		this.runAll("play");
	}
	pause() {
		this.runAll("pause");
	}
	cancel() {
		this.runAll("cancel");
	}
	complete() {
		this.runAll("complete");
	}
}, GroupPlaybackControls = class extends BaseGroupPlaybackControls {
	then(i, a) {
		return Promise.all(this.animations).then(i).catch(a);
	}
};
function getValueTransition(i, a) {
	return i ? i[a] || i.default || i : void 0;
}
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(i) {
	let a = 0, o = i.next(a);
	for (; !o.done && a < 2e4;) a += 50, o = i.next(a);
	return a >= 2e4 ? Infinity : a;
}
function isGenerator(i) {
	return typeof i == "function";
}
function attachTimeline(i, a) {
	i.timeline = a, i.onfinish = null;
}
var isBezierDefinition = (i) => Array.isArray(i) && typeof i[0] == "number", supportsFlags = { linearEasing: void 0 };
function memoSupports(i, a) {
	let o = /* @__PURE__ */ memo$2(i);
	return () => supportsFlags[a] ?? o();
}
var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), generateLinearEasing = (i, a, o = 10) => {
	let s = "", c = Math.max(Math.round(a / o), 2);
	for (let a = 0; a < c; a++) s += i(/* @__PURE__ */ progress(0, c - 1, a)) + ", ";
	return `linear(${s.substring(0, s.length - 2)})`;
};
function isWaapiSupportedEasing(i) {
	return !!(typeof i == "function" && supportsLinearEasing() || !i || typeof i == "string" && (i in supportedWaapiEasing || supportsLinearEasing()) || isBezierDefinition(i) || Array.isArray(i) && i.every(isWaapiSupportedEasing));
}
var cubicBezierAsString = ([i, a, o, s]) => `cubic-bezier(${i}, ${a}, ${o}, ${s})`, supportedWaapiEasing = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /* @__PURE__ */ cubicBezierAsString([
		0,
		.65,
		.55,
		1
	]),
	circOut: /* @__PURE__ */ cubicBezierAsString([
		.55,
		0,
		1,
		.45
	]),
	backIn: /* @__PURE__ */ cubicBezierAsString([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /* @__PURE__ */ cubicBezierAsString([
		.33,
		1.53,
		.69,
		.99
	])
};
function mapEasingToNativeEasing(i, a) {
	if (i) return typeof i == "function" && supportsLinearEasing() ? generateLinearEasing(i, a) : isBezierDefinition(i) ? cubicBezierAsString(i) : Array.isArray(i) ? i.map((i) => mapEasingToNativeEasing(i, a) || supportedWaapiEasing.easeOut) : supportedWaapiEasing[i];
}
var isDragging = {
	x: !1,
	y: !1
};
function isDragActive() {
	return isDragging.x || isDragging.y;
}
function resolveElements(i, a, o) {
	if (i instanceof Element) return [i];
	if (typeof i == "string") {
		let s = document;
		a && (s = a.current);
		let c = o?.[i] ?? s.querySelectorAll(i);
		return c ? Array.from(c) : [];
	}
	return Array.from(i);
}
function setupGesture(i, a) {
	let o = resolveElements(i), s = new AbortController();
	return [
		o,
		{
			passive: !0,
			...a,
			signal: s.signal
		},
		() => s.abort()
	];
}
function filterEvents$1(i) {
	return (a) => {
		a.pointerType === "touch" || isDragActive() || i(a);
	};
}
function hover(i, a, o = {}) {
	let [s, c, l] = setupGesture(i, o), u = filterEvents$1((i) => {
		let { target: o } = i, s = a(i);
		if (typeof s != "function" || !o) return;
		let l = filterEvents$1((i) => {
			s(i), o.removeEventListener("pointerleave", l);
		});
		o.addEventListener("pointerleave", l, c);
	});
	return s.forEach((i) => {
		i.addEventListener("pointerenter", u, c);
	}), l;
}
var isNodeOrChild = (i, a) => a ? i === a ? !0 : isNodeOrChild(i, a.parentElement) : !1, isPrimaryPointer = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, focusableElements = new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function isElementKeyboardAccessible(i) {
	return focusableElements.has(i.tagName) || i.tabIndex !== -1;
}
var isPressing = /* @__PURE__ */ new WeakSet();
function filterEvents(i) {
	return (a) => {
		a.key === "Enter" && i(a);
	};
}
function firePointerEvent(i, a) {
	i.dispatchEvent(new PointerEvent("pointer" + a, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var enableKeyboardPress = (i, a) => {
	let o = i.currentTarget;
	if (!o) return;
	let s = filterEvents(() => {
		if (isPressing.has(o)) return;
		firePointerEvent(o, "down");
		let i = filterEvents(() => {
			firePointerEvent(o, "up");
		});
		o.addEventListener("keyup", i, a), o.addEventListener("blur", () => firePointerEvent(o, "cancel"), a);
	});
	o.addEventListener("keydown", s, a), o.addEventListener("blur", () => o.removeEventListener("keydown", s), a);
};
function isValidPressEvent(i) {
	return isPrimaryPointer(i) && !isDragActive();
}
function press(i, a, o = {}) {
	let [s, c, l] = setupGesture(i, o), u = (i) => {
		let s = i.currentTarget;
		if (!isValidPressEvent(i) || isPressing.has(s)) return;
		isPressing.add(s);
		let l = a(i), u = (i, a) => {
			window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), !(!isValidPressEvent(i) || !isPressing.has(s)) && (isPressing.delete(s), typeof l == "function" && l(i, { success: a }));
		}, d = (i) => {
			u(i, o.useGlobalTarget || isNodeOrChild(s, i.target));
		}, f = (i) => {
			u(i, !1);
		};
		window.addEventListener("pointerup", d, c), window.addEventListener("pointercancel", f, c);
	};
	return s.forEach((i) => {
		!isElementKeyboardAccessible(i) && i.getAttribute("tabindex") === null && (i.tabIndex = 0), (o.useGlobalTarget ? window : i).addEventListener("pointerdown", u, c), i.addEventListener("focus", (i) => enableKeyboardPress(i, c), c);
	}), l;
}
function setDragLock(i) {
	return i === "x" || i === "y" ? isDragging[i] ? null : (isDragging[i] = !0, () => {
		isDragging[i] = !1;
	}) : isDragging.x || isDragging.y ? null : (isDragging.x = isDragging.y = !0, () => {
		isDragging.x = isDragging.y = !1;
	});
}
var positionalKeys = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...transformPropOrder
]), now;
function clearTime() {
	now = void 0;
}
var time = {
	now: () => (now === void 0 && time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now()), now),
	set: (i) => {
		now = i, queueMicrotask(clearTime);
	}
};
function addUniqueItem(i, a) {
	i.indexOf(a) === -1 && i.push(a);
}
function removeItem(i, a) {
	let o = i.indexOf(a);
	o > -1 && i.splice(o, 1);
}
var SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(i) {
		return addUniqueItem(this.subscriptions, i), () => removeItem(this.subscriptions, i);
	}
	notify(i, a, o) {
		let s = this.subscriptions.length;
		if (s) if (s === 1) this.subscriptions[0](i, a, o);
		else for (let c = 0; c < s; c++) {
			let s = this.subscriptions[c];
			s && s(i, a, o);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
};
function velocityPerSecond(i, a) {
	return a ? i * (1e3 / a) : 0;
}
var MAX_VELOCITY_DELTA = 30, isFloat = (i) => !isNaN(parseFloat(i)), collectMotionValues = { current: void 0 }, MotionValue = class {
	constructor(i, a = {}) {
		this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i, a = !0) => {
			let o = time.now();
			this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), a && this.events.renderRequest && this.events.renderRequest.notify(this.current);
		}, this.hasAnimated = !1, this.setCurrent(i), this.owner = a.owner;
	}
	setCurrent(i) {
		this.current = i, this.updatedAt = time.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = isFloat(this.current));
	}
	setPrevFrameValue(i = this.current) {
		this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(i) {
		return process.env.NODE_ENV !== "production" && warnOnce(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", i);
	}
	on(i, a) {
		this.events[i] || (this.events[i] = new SubscriptionManager());
		let o = this.events[i].add(a);
		return i === "change" ? () => {
			o(), frame.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : o;
	}
	clearListeners() {
		for (let i in this.events) this.events[i].clear();
	}
	attach(i, a) {
		this.passiveEffect = i, this.stopPassiveEffect = a;
	}
	set(i, a = !0) {
		!a || !this.passiveEffect ? this.updateAndNotify(i, a) : this.passiveEffect(i, this.updateAndNotify);
	}
	setWithVelocity(i, a, o) {
		this.set(a), this.prev = void 0, this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt - o;
	}
	jump(i, a = !0) {
		this.updateAndNotify(i), this.prev = i, this.prevUpdatedAt = this.prevFrameValue = void 0, a && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	get() {
		return collectMotionValues.current && collectMotionValues.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let i = time.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
		let a = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
		return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), a);
	}
	start(i) {
		return this.stop(), new Promise((a) => {
			this.hasAnimated = !0, this.animation = i(a), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function motionValue(i, a) {
	return new MotionValue(i, a);
}
function setMotionValue(i, a, o) {
	i.hasValue(a) ? i.getValue(a).set(o) : i.addValue(a, motionValue(o));
}
function setTarget(i, a) {
	let { transitionEnd: o = {}, transition: s = {}, ...c } = resolveVariant(i, a) || {};
	for (let a in c = {
		...c,
		...o
	}, c) setMotionValue(i, a, resolveFinalValueInKeyframes(c[a]));
}
function isWillChangeMotionValue(i) {
	return !!(isMotionValue(i) && i.add);
}
function addValueToWillChange(i, a) {
	let o = i.getValue("willChange");
	if (isWillChangeMotionValue(o)) return o.add(a);
}
function getOptimisedAppearId(i) {
	return i.props[optimizedAppearDataAttribute];
}
var instantAnimationState = { current: !1 }, calcBezier = (i, a, o) => (((1 - 3 * o + 3 * a) * i + (3 * o - 6 * a)) * i + 3 * a) * i, subdivisionPrecision = 1e-7, subdivisionMaxIterations = 12;
function binarySubdivide(i, a, o, s, c) {
	let l, u, d = 0;
	do
		u = a + (o - a) / 2, l = calcBezier(u, s, c) - i, l > 0 ? o = u : a = u;
	while (Math.abs(l) > subdivisionPrecision && ++d < subdivisionMaxIterations);
	return u;
}
function cubicBezier(i, a, o, s) {
	if (i === a && o === s) return noop;
	let c = (a) => binarySubdivide(a, 0, 1, i, o);
	return (i) => i === 0 || i === 1 ? i : calcBezier(c(i), a, s);
}
var mirrorEasing = (i) => (a) => a <= .5 ? i(2 * a) / 2 : (2 - i(2 * (1 - a))) / 2, reverseEasing = (i) => (a) => 1 - i(1 - a), backOut = /* @__PURE__ */ cubicBezier(.33, 1.53, .69, .99), backIn = /* @__PURE__ */ reverseEasing(backOut), backInOut = /* @__PURE__ */ mirrorEasing(backIn), anticipate = (i) => (i *= 2) < 1 ? .5 * backIn(i) : .5 * (2 - 2 ** (-10 * (i - 1))), circIn = (i) => 1 - Math.sin(Math.acos(i)), circOut = reverseEasing(circIn), circInOut = mirrorEasing(circIn), isZeroValueString = (i) => /^0[^.\s]+$/u.test(i);
function isNone(i) {
	return typeof i == "number" ? i === 0 : i === null ? !0 : i === "none" || i === "0" || isZeroValueString(i);
}
var sanitize = (i) => Math.round(i * 1e5) / 1e5, floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function isNullish(i) {
	return i == null;
}
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, isColorString = (i, a) => (o) => !!(typeof o == "string" && singleColorRegex.test(o) && o.startsWith(i) || a && !isNullish(o) && Object.prototype.hasOwnProperty.call(o, a)), splitColor = (i, a, o) => (s) => {
	if (typeof s != "string") return s;
	let [c, l, u, d] = s.match(floatRegex);
	return {
		[i]: parseFloat(c),
		[a]: parseFloat(l),
		[o]: parseFloat(u),
		alpha: d === void 0 ? 1 : parseFloat(d)
	};
}, clampRgbUnit = (i) => clamp(0, 255, i), rgbUnit = {
	...number,
	transform: (i) => Math.round(clampRgbUnit(i))
}, rgba = {
	test: /* @__PURE__ */ isColorString("rgb", "red"),
	parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
	transform: ({ red: i, green: a, blue: o, alpha: s = 1 }) => "rgba(" + rgbUnit.transform(i) + ", " + rgbUnit.transform(a) + ", " + rgbUnit.transform(o) + ", " + sanitize(alpha.transform(s)) + ")"
};
function parseHex(i) {
	let a = "", o = "", s = "", c = "";
	return i.length > 5 ? (a = i.substring(1, 3), o = i.substring(3, 5), s = i.substring(5, 7), c = i.substring(7, 9)) : (a = i.substring(1, 2), o = i.substring(2, 3), s = i.substring(3, 4), c = i.substring(4, 5), a += a, o += o, s += s, c += c), {
		red: parseInt(a, 16),
		green: parseInt(o, 16),
		blue: parseInt(s, 16),
		alpha: c ? parseInt(c, 16) / 255 : 1
	};
}
var hex = {
	test: /* @__PURE__ */ isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
}, hsla = {
	test: /* @__PURE__ */ isColorString("hsl", "hue"),
	parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue: i, saturation: a, lightness: o, alpha: s = 1 }) => "hsla(" + Math.round(i) + ", " + percent.transform(sanitize(a)) + ", " + percent.transform(sanitize(o)) + ", " + sanitize(alpha.transform(s)) + ")"
}, color = {
	test: (i) => rgba.test(i) || hex.test(i) || hsla.test(i),
	parse: (i) => rgba.test(i) ? rgba.parse(i) : hsla.test(i) ? hsla.parse(i) : hex.parse(i),
	transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? rgba.transform(i) : hsla.transform(i)
}, colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function test(i) {
	return isNaN(i) && typeof i == "string" && (i.match(floatRegex)?.length || 0) + (i.match(colorRegex)?.length || 0) > 0;
}
var NUMBER_TOKEN = "number", COLOR_TOKEN = "color", VAR_TOKEN = "var", VAR_FUNCTION_TOKEN = "var(", SPLIT_TOKEN = "${}", complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(i) {
	let a = i.toString(), o = [], s = {
		color: [],
		number: [],
		var: []
	}, c = [], l = 0;
	return {
		values: o,
		split: a.replace(complexRegex, (i) => (color.test(i) ? (s.color.push(l), c.push(COLOR_TOKEN), o.push(color.parse(i))) : i.startsWith(VAR_FUNCTION_TOKEN) ? (s.var.push(l), c.push(VAR_TOKEN), o.push(i)) : (s.number.push(l), c.push(NUMBER_TOKEN), o.push(parseFloat(i))), ++l, SPLIT_TOKEN)).split(SPLIT_TOKEN),
		indexes: s,
		types: c
	};
}
function parseComplexValue(i) {
	return analyseComplexValue(i).values;
}
function createTransformer(i) {
	let { split: a, types: o } = analyseComplexValue(i), s = a.length;
	return (i) => {
		let c = "";
		for (let l = 0; l < s; l++) if (c += a[l], i[l] !== void 0) {
			let a = o[l];
			a === NUMBER_TOKEN ? c += sanitize(i[l]) : a === COLOR_TOKEN ? c += color.transform(i[l]) : c += i[l];
		}
		return c;
	};
}
var convertNumbersToZero = (i) => typeof i == "number" ? 0 : i;
function getAnimatableNone$1(i) {
	let a = parseComplexValue(i);
	return createTransformer(i)(a.map(convertNumbersToZero));
}
var complex = {
	test,
	parse: parseComplexValue,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
}, maxDefaults = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(i) {
	let [a, o] = i.slice(0, -1).split("(");
	if (a === "drop-shadow") return i;
	let [s] = o.match(floatRegex) || [];
	if (!s) return i;
	let c = o.replace(s, ""), l = maxDefaults.has(a) ? 1 : 0;
	return s !== o && (l *= 100), a + "(" + l + c + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu, filter = {
	...complex,
	getAnimatableNone: (i) => {
		let a = i.match(functionRegex);
		return a ? a.map(applyDefaultFilter).join(" ") : i;
	}
}, defaultValueTypes = {
	...numberValueTypes,
	color,
	backgroundColor: color,
	outlineColor: color,
	fill: color,
	stroke: color,
	borderColor: color,
	borderTopColor: color,
	borderRightColor: color,
	borderBottomColor: color,
	borderLeftColor: color,
	filter,
	WebkitFilter: filter
}, getDefaultValueType = (i) => defaultValueTypes[i];
function getAnimatableNone(i, a) {
	let o = getDefaultValueType(i);
	return o !== filter && (o = complex), o.getAnimatableNone ? o.getAnimatableNone(a) : void 0;
}
var invalidTemplates = new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(i, a, o) {
	let s = 0, c;
	for (; s < i.length && !c;) {
		let a = i[s];
		typeof a == "string" && !invalidTemplates.has(a) && analyseComplexValue(a).values.length && (c = i[s]), s++;
	}
	if (c && o) for (let s of a) i[s] = getAnimatableNone(o, c);
}
var isNumOrPxType = (i) => i === number || i === px, getPosFromMatrix = (i, a) => parseFloat(i.split(", ")[a]), getTranslateFromMatrix = (i, a) => (o, { transform: s }) => {
	if (s === "none" || !s) return 0;
	let c = s.match(/^matrix3d\((.+)\)$/u);
	if (c) return getPosFromMatrix(c[1], a);
	{
		let a = s.match(/^matrix\((.+)\)$/u);
		return a ? getPosFromMatrix(a[1], i) : 0;
	}
}, transformKeys = new Set([
	"x",
	"y",
	"z"
]), nonTranslationalTransformKeys = transformPropOrder.filter((i) => !transformKeys.has(i));
function removeNonTranslationalTransform(i) {
	let a = [];
	return nonTranslationalTransformKeys.forEach((o) => {
		let s = i.getValue(o);
		s !== void 0 && (a.push([o, s.get()]), s.set(o.startsWith("scale") ? 1 : 0));
	}), a;
}
var positionalValues = {
	width: ({ x: i }, { paddingLeft: a = "0", paddingRight: o = "0" }) => i.max - i.min - parseFloat(a) - parseFloat(o),
	height: ({ y: i }, { paddingTop: a = "0", paddingBottom: o = "0" }) => i.max - i.min - parseFloat(a) - parseFloat(o),
	top: (i, { top: a }) => parseFloat(a),
	left: (i, { left: a }) => parseFloat(a),
	bottom: ({ y: i }, { top: a }) => parseFloat(a) + (i.max - i.min),
	right: ({ x: i }, { left: a }) => parseFloat(a) + (i.max - i.min),
	x: getTranslateFromMatrix(4, 13),
	y: getTranslateFromMatrix(5, 14)
};
positionalValues.translateX = positionalValues.x, positionalValues.translateY = positionalValues.y;
var toResolve = /* @__PURE__ */ new Set(), isScheduled = !1, anyNeedsMeasurement = !1;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		let i = Array.from(toResolve).filter((i) => i.needsMeasurement), a = new Set(i.map((i) => i.element)), o = /* @__PURE__ */ new Map();
		a.forEach((i) => {
			let a = removeNonTranslationalTransform(i);
			a.length && (o.set(i, a), i.render());
		}), i.forEach((i) => i.measureInitialState()), a.forEach((i) => {
			i.render();
			let a = o.get(i);
			a && a.forEach(([a, o]) => {
				var s;
				(s = i.getValue(a)) == null || s.set(o);
			});
		}), i.forEach((i) => i.measureEndState()), i.forEach((i) => {
			i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
		});
	}
	anyNeedsMeasurement = !1, isScheduled = !1, toResolve.forEach((i) => i.complete()), toResolve.clear();
}
function readAllKeyframes() {
	toResolve.forEach((i) => {
		i.readKeyframes(), i.needsMeasurement && (anyNeedsMeasurement = !0);
	});
}
function flushKeyframeResolvers() {
	readAllKeyframes(), measureAllKeyframes();
}
var KeyframeResolver = class {
	constructor(i, a, o, s, c, l = !1) {
		this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...i], this.onComplete = a, this.name = o, this.motionValue = s, this.element = c, this.isAsync = l;
	}
	scheduleResolve() {
		this.isScheduled = !0, this.isAsync ? (toResolve.add(this), isScheduled || (isScheduled = !0, frame.read(readAllKeyframes), frame.resolveKeyframes(measureAllKeyframes))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: i, name: a, element: o, motionValue: s } = this;
		for (let c = 0; c < i.length; c++) if (i[c] === null) if (c === 0) {
			let c = s?.get(), l = i[i.length - 1];
			if (c !== void 0) i[0] = c;
			else if (o && a) {
				let s = o.readValue(a, l);
				s != null && (i[0] = s);
			}
			i[0] === void 0 && (i[0] = l), s && c === void 0 && s.set(i[0]);
		} else i[c] = i[c - 1];
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete() {
		this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), toResolve.delete(this);
	}
	cancel() {
		this.isComplete || (this.isScheduled = !1, toResolve.delete(this));
	}
	resume() {
		this.isComplete || this.scheduleResolve();
	}
}, isNumericalString = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(i) {
	let a = splitCSSVariableRegex.exec(i);
	if (!a) return [,];
	let [, o, s, c] = a;
	return [`--${o ?? s}`, c];
}
var maxDepth = 4;
function getVariableValue(i, a, o = 1) {
	invariant(o <= maxDepth, `Max CSS variable fallback depth detected in property "${i}". This may indicate a circular fallback dependency.`);
	let [s, c] = parseCSSVariable(i);
	if (!s) return;
	let l = window.getComputedStyle(a).getPropertyValue(s);
	if (l) {
		let i = l.trim();
		return isNumericalString(i) ? parseFloat(i) : i;
	}
	return isCSSVariableToken(c) ? getVariableValue(c, a, o + 1) : c;
}
var testValueType = (i) => (a) => a.test(i), dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	{
		test: (i) => i === "auto",
		parse: (i) => i
	}
], findDimensionValueType = (i) => dimensionValueTypes.find(testValueType(i)), DOMKeyframesResolver = class extends KeyframeResolver {
	constructor(i, a, o, s, c) {
		super(i, a, o, s, c, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: i, element: a, name: o } = this;
		if (!a || !a.current) return;
		super.readKeyframes();
		for (let o = 0; o < i.length; o++) {
			let s = i[o];
			if (typeof s == "string" && (s = s.trim(), isCSSVariableToken(s))) {
				let c = getVariableValue(s, a.current);
				c !== void 0 && (i[o] = c), o === i.length - 1 && (this.finalKeyframe = s);
			}
		}
		if (this.resolveNoneKeyframes(), !positionalKeys.has(o) || i.length !== 2) return;
		let [s, c] = i, l = findDimensionValueType(s), u = findDimensionValueType(c);
		if (l !== u) if (isNumOrPxType(l) && isNumOrPxType(u)) for (let a = 0; a < i.length; a++) {
			let o = i[a];
			typeof o == "string" && (i[a] = parseFloat(o));
		}
		else this.needsMeasurement = !0;
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: i, name: a } = this, o = [];
		for (let a = 0; a < i.length; a++) isNone(i[a]) && o.push(a);
		o.length && makeNoneKeyframesAnimatable(i, o, a);
	}
	measureInitialState() {
		let { element: i, unresolvedKeyframes: a, name: o } = this;
		if (!i || !i.current) return;
		o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = positionalValues[o](i.measureViewportBox(), window.getComputedStyle(i.current)), a[0] = this.measuredOrigin;
		let s = a[a.length - 1];
		s !== void 0 && i.getValue(o, s).jump(s, !1);
	}
	measureEndState() {
		let { element: i, name: a, unresolvedKeyframes: o } = this;
		if (!i || !i.current) return;
		let s = i.getValue(a);
		s && s.jump(this.measuredOrigin, !1);
		let c = o.length - 1, l = o[c];
		o[c] = positionalValues[a](i.measureViewportBox(), window.getComputedStyle(i.current)), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), this.removedTransforms?.length && this.removedTransforms.forEach(([a, o]) => {
			i.getValue(a).set(o);
		}), this.resolveNoneKeyframes();
	}
}, isAnimatable = (i, a) => a === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && (complex.test(i) || i === "0") && !i.startsWith("url("));
function hasKeyframesChanged(i) {
	let a = i[0];
	if (i.length === 1) return !0;
	for (let o = 0; o < i.length; o++) if (i[o] !== a) return !0;
}
function canAnimate(i, a, o, s) {
	let c = i[0];
	if (c === null) return !1;
	if (a === "display" || a === "visibility") return !0;
	let l = i[i.length - 1], u = isAnimatable(c, a), d = isAnimatable(l, a);
	return warning(u === d, `You are trying to animate ${a} from "${c}" to "${l}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${l} via the \`style\` property.`), !u || !d ? !1 : hasKeyframesChanged(i) || (o === "spring" || isGenerator(o)) && s;
}
var isNotNull = (i) => i !== null;
function getFinalKeyframe(i, { repeat: a, repeatType: o = "loop" }, s) {
	let c = i.filter(isNotNull), l = a && o !== "loop" && a % 2 == 1 ? 0 : c.length - 1;
	return !l || s === void 0 ? c[l] : s;
}
var MAX_RESOLVE_DELAY = 40, BaseAnimation = class {
	constructor({ autoplay: i = !0, delay: a = 0, type: o = "keyframes", repeat: s = 0, repeatDelay: c = 0, repeatType: l = "loop", ...u }) {
		this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = time.now(), this.options = {
			autoplay: i,
			delay: a,
			type: o,
			repeat: s,
			repeatDelay: c,
			repeatType: l,
			...u
		}, this.updateFinishedPromise();
	}
	calcStartTime() {
		return this.resolvedAt && this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt;
	}
	get resolved() {
		return !this._resolved && !this.hasAttemptedResolve && flushKeyframeResolvers(), this._resolved;
	}
	onKeyframesResolved(i, a) {
		this.resolvedAt = time.now(), this.hasAttemptedResolve = !0;
		let { name: o, type: s, velocity: c, delay: l, onComplete: u, onUpdate: d, isGenerator: f } = this.options;
		if (!f && !canAnimate(i, o, s, c)) if (instantAnimationState.current || !l) {
			d && d(getFinalKeyframe(i, this.options, a)), u && u(), this.resolveFinishedPromise();
			return;
		} else this.options.duration = 0;
		let p = this.initPlayback(i, a);
		p !== !1 && (this._resolved = {
			keyframes: i,
			finalKeyframe: a,
			...p
		}, this.onPostResolved());
	}
	onPostResolved() {}
	then(i, a) {
		return this.currentFinishedPromise.then(i, a);
	}
	flatten() {
		this.options.type = "keyframes", this.options.ease = "linear";
	}
	updateFinishedPromise() {
		this.currentFinishedPromise = new Promise((i) => {
			this.resolveFinishedPromise = i;
		});
	}
}, mixNumber = (i, a, o) => i + (a - i) * o;
function hueToRgb(i, a, o) {
	return o < 0 && (o += 1), o > 1 && --o, o < 1 / 6 ? i + (a - i) * 6 * o : o < 1 / 2 ? a : o < 2 / 3 ? i + (a - i) * (2 / 3 - o) * 6 : i;
}
function hslaToRgba({ hue: i, saturation: a, lightness: o, alpha: s }) {
	i /= 360, a /= 100, o /= 100;
	let c = 0, l = 0, u = 0;
	if (!a) c = l = u = o;
	else {
		let s = o < .5 ? o * (1 + a) : o + a - o * a, d = 2 * o - s;
		c = hueToRgb(d, s, i + 1 / 3), l = hueToRgb(d, s, i), u = hueToRgb(d, s, i - 1 / 3);
	}
	return {
		red: Math.round(c * 255),
		green: Math.round(l * 255),
		blue: Math.round(u * 255),
		alpha: s
	};
}
function mixImmediate(i, a) {
	return (o) => o > 0 ? a : i;
}
var mixLinearColor = (i, a, o) => {
	let s = i * i, c = o * (a * a - s) + s;
	return c < 0 ? 0 : Math.sqrt(c);
}, colorTypes = [
	hex,
	rgba,
	hsla
], getColorType = (i) => colorTypes.find((a) => a.test(i));
function asRGBA(i) {
	let a = getColorType(i);
	if (warning(!!a, `'${i}' is not an animatable color. Use the equivalent color code instead.`), !a) return !1;
	let o = a.parse(i);
	return a === hsla && (o = hslaToRgba(o)), o;
}
var mixColor = (i, a) => {
	let o = asRGBA(i), s = asRGBA(a);
	if (!o || !s) return mixImmediate(i, a);
	let c = { ...o };
	return (i) => (c.red = mixLinearColor(o.red, s.red, i), c.green = mixLinearColor(o.green, s.green, i), c.blue = mixLinearColor(o.blue, s.blue, i), c.alpha = mixNumber(o.alpha, s.alpha, i), rgba.transform(c));
}, combineFunctions = (i, a) => (o) => a(i(o)), pipe = (...i) => i.reduce(combineFunctions), invisibleValues = new Set(["none", "hidden"]);
function mixVisibility(i, a) {
	return invisibleValues.has(i) ? (o) => o <= 0 ? i : a : (o) => o >= 1 ? a : i;
}
function mixNumber$1(i, a) {
	return (o) => mixNumber(i, a, o);
}
function getMixer(i) {
	return typeof i == "number" ? mixNumber$1 : typeof i == "string" ? isCSSVariableToken(i) ? mixImmediate : color.test(i) ? mixColor : mixComplex : Array.isArray(i) ? mixArray : typeof i == "object" ? color.test(i) ? mixColor : mixObject : mixImmediate;
}
function mixArray(i, a) {
	let o = [...i], s = o.length, c = i.map((i, o) => getMixer(i)(i, a[o]));
	return (i) => {
		for (let a = 0; a < s; a++) o[a] = c[a](i);
		return o;
	};
}
function mixObject(i, a) {
	let o = {
		...i,
		...a
	}, s = {};
	for (let c in o) i[c] !== void 0 && a[c] !== void 0 && (s[c] = getMixer(i[c])(i[c], a[c]));
	return (i) => {
		for (let a in s) o[a] = s[a](i);
		return o;
	};
}
function matchOrder(i, a) {
	let o = [], s = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let c = 0; c < a.values.length; c++) {
		let l = a.types[c], u = i.indexes[l][s[l]];
		o[c] = i.values[u] ?? 0, s[l]++;
	}
	return o;
}
var mixComplex = (i, a) => {
	let o = complex.createTransformer(a), s = analyseComplexValue(i), c = analyseComplexValue(a);
	return s.indexes.var.length === c.indexes.var.length && s.indexes.color.length === c.indexes.color.length && s.indexes.number.length >= c.indexes.number.length ? invisibleValues.has(i) && !c.values.length || invisibleValues.has(a) && !s.values.length ? mixVisibility(i, a) : pipe(mixArray(matchOrder(s, c), c.values), o) : (warning(!0, `Complex values '${i}' and '${a}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), mixImmediate(i, a));
};
function mix(i, a, o) {
	return typeof i == "number" && typeof a == "number" && typeof o == "number" ? mixNumber(i, a, o) : getMixer(i)(i, a);
}
var velocitySampleDuration = 5;
function calcGeneratorVelocity(i, a, o) {
	let s = Math.max(a - velocitySampleDuration, 0);
	return velocityPerSecond(o - i(s), a - s);
}
var springDefaults = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
}, safeMin = .001;
function findSpring({ duration: i = springDefaults.duration, bounce: a = springDefaults.bounce, velocity: o = springDefaults.velocity, mass: s = springDefaults.mass }) {
	let c, l;
	warning(i <= /* @__PURE__ */ secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less");
	let u = 1 - a;
	u = clamp(springDefaults.minDamping, springDefaults.maxDamping, u), i = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(i)), u < 1 ? (c = (a) => {
		let s = a * u, c = s * i, l = s - o, d = calcAngularFreq(a, u), f = Math.exp(-c);
		return safeMin - l / d * f;
	}, l = (a) => {
		let s = a * u * i, l = s * o + o, d = u ** 2 * a ** 2 * i, f = Math.exp(-s), p = calcAngularFreq(a ** 2, u);
		return (-c(a) + safeMin > 0 ? -1 : 1) * ((l - d) * f) / p;
	}) : (c = (a) => {
		let s = Math.exp(-a * i), c = (a - o) * i + 1;
		return -safeMin + s * c;
	}, l = (a) => Math.exp(-a * i) * ((o - a) * (i * i)));
	let d = 5 / i, f = approximateRoot(c, l, d);
	if (i = /* @__PURE__ */ secondsToMilliseconds(i), isNaN(f)) return {
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		duration: i
	};
	{
		let a = f ** 2 * s;
		return {
			stiffness: a,
			damping: u * 2 * Math.sqrt(s * a),
			duration: i
		};
	}
}
var rootIterations = 12;
function approximateRoot(i, a, o) {
	let s = o;
	for (let o = 1; o < rootIterations; o++) s -= i(s) / a(s);
	return s;
}
function calcAngularFreq(i, a) {
	return i * Math.sqrt(1 - a * a);
}
var durationKeys = ["duration", "bounce"], physicsKeys = [
	"stiffness",
	"damping",
	"mass"
];
function isSpringType(i, a) {
	return a.some((a) => i[a] !== void 0);
}
function getSpringOptions(i) {
	let a = {
		velocity: springDefaults.velocity,
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		mass: springDefaults.mass,
		isResolvedFromDuration: !1,
		...i
	};
	if (!isSpringType(i, physicsKeys) && isSpringType(i, durationKeys)) if (i.visualDuration) {
		let o = i.visualDuration, s = 2 * Math.PI / (o * 1.2), c = s * s, l = 2 * clamp(.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
		a = {
			...a,
			mass: springDefaults.mass,
			stiffness: c,
			damping: l
		};
	} else {
		let o = findSpring(i);
		a = {
			...a,
			...o,
			mass: springDefaults.mass
		}, a.isResolvedFromDuration = !0;
	}
	return a;
}
function spring(i = springDefaults.visualDuration, a = springDefaults.bounce) {
	let o = typeof i == "object" ? i : {
		visualDuration: i,
		keyframes: [0, 1],
		bounce: a
	}, { restSpeed: s, restDelta: c } = o, l = o.keyframes[0], u = o.keyframes[o.keyframes.length - 1], d = {
		done: !1,
		value: l
	}, { stiffness: f, damping: p, mass: m, duration: h, velocity: g, isResolvedFromDuration: _ } = getSpringOptions({
		...o,
		velocity: -/* @__PURE__ */ millisecondsToSeconds(o.velocity || 0)
	}), v = g || 0, y = p / (2 * Math.sqrt(f * m)), b = u - l, x = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(f / m)), S = Math.abs(b) < 5;
	s ||= S ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default, c ||= S ? springDefaults.restDelta.granular : springDefaults.restDelta.default;
	let C;
	if (y < 1) {
		let i = calcAngularFreq(x, y);
		C = (a) => u - Math.exp(-y * x * a) * ((v + y * x * b) / i * Math.sin(i * a) + b * Math.cos(i * a));
	} else if (y === 1) C = (i) => u - Math.exp(-x * i) * (b + (v + x * b) * i);
	else {
		let i = x * Math.sqrt(y * y - 1);
		C = (a) => {
			let o = Math.exp(-y * x * a), s = Math.min(i * a, 300);
			return u - o * ((v + y * x * b) * Math.sinh(s) + i * b * Math.cosh(s)) / i;
		};
	}
	let w = {
		calculatedDuration: _ && h || null,
		next: (i) => {
			let a = C(i);
			if (_) d.done = i >= h;
			else {
				let o = 0;
				y < 1 && (o = i === 0 ? /* @__PURE__ */ secondsToMilliseconds(v) : calcGeneratorVelocity(C, i, a));
				let l = Math.abs(o) <= s, f = Math.abs(u - a) <= c;
				d.done = l && f;
			}
			return d.value = d.done ? u : a, d;
		},
		toString: () => {
			let i = Math.min(calcGeneratorDuration(w), maxGeneratorDuration), a = generateLinearEasing((a) => w.next(i * a).value, i, 30);
			return i + "ms " + a;
		}
	};
	return w;
}
function inertia({ keyframes: i, velocity: a = 0, power: o = .8, timeConstant: s = 325, bounceDamping: c = 10, bounceStiffness: l = 500, modifyTarget: u, min: d, max: f, restDelta: p = .5, restSpeed: m }) {
	let h = i[0], g = {
		done: !1,
		value: h
	}, _ = (i) => d !== void 0 && i < d || f !== void 0 && i > f, v = (i) => d === void 0 ? f : f === void 0 || Math.abs(d - i) < Math.abs(f - i) ? d : f, y = o * a, b = h + y, x = u === void 0 ? b : u(b);
	x !== b && (y = x - h);
	let S = (i) => -y * Math.exp(-i / s), C = (i) => x + S(i), w = (i) => {
		let a = S(i), o = C(i);
		g.done = Math.abs(a) <= p, g.value = g.done ? x : o;
	}, T, E, D = (i) => {
		_(g.value) && (T = i, E = spring({
			keyframes: [g.value, v(g.value)],
			velocity: calcGeneratorVelocity(C, i, g.value),
			damping: c,
			stiffness: l,
			restDelta: p,
			restSpeed: m
		}));
	};
	return D(0), {
		calculatedDuration: null,
		next: (i) => {
			let a = !1;
			return !E && T === void 0 && (a = !0, w(i), D(i)), T !== void 0 && i >= T ? E.next(i - T) : (!a && w(i), g);
		}
	};
}
var easeIn = /* @__PURE__ */ cubicBezier(.42, 0, 1, 1), easeOut = /* @__PURE__ */ cubicBezier(0, 0, .58, 1), easeInOut = /* @__PURE__ */ cubicBezier(.42, 0, .58, 1), isEasingArray = (i) => Array.isArray(i) && typeof i[0] != "number", easingLookup = {
	linear: noop,
	easeIn,
	easeInOut,
	easeOut,
	circIn,
	circInOut,
	circOut,
	backIn,
	backInOut,
	backOut,
	anticipate
}, easingDefinitionToFunction = (i) => {
	if (isBezierDefinition(i)) {
		invariant(i.length === 4, "Cubic bezier arrays must contain four numerical values.");
		let [a, o, s, c] = i;
		return cubicBezier(a, o, s, c);
	} else if (typeof i == "string") return invariant(easingLookup[i] !== void 0, `Invalid easing type '${i}'`), easingLookup[i];
	return i;
};
function createMixers(i, a, o) {
	let s = [], c = o || mix, l = i.length - 1;
	for (let o = 0; o < l; o++) {
		let l = c(i[o], i[o + 1]);
		a && (l = pipe(Array.isArray(a) ? a[o] || noop : a, l)), s.push(l);
	}
	return s;
}
function interpolate(i, a, { clamp: o = !0, ease: s, mixer: c } = {}) {
	let l = i.length;
	if (invariant(l === a.length, "Both input and output ranges must be the same length"), l === 1) return () => a[0];
	if (l === 2 && a[0] === a[1]) return () => a[1];
	let u = i[0] === i[1];
	i[0] > i[l - 1] && (i = [...i].reverse(), a = [...a].reverse());
	let d = createMixers(a, s, c), f = d.length, p = (o) => {
		if (u && o < i[0]) return a[0];
		let s = 0;
		if (f > 1) for (; s < i.length - 2 && !(o < i[s + 1]); s++);
		let c = /* @__PURE__ */ progress(i[s], i[s + 1], o);
		return d[s](c);
	};
	return o ? (a) => p(clamp(i[0], i[l - 1], a)) : p;
}
function fillOffset(i, a) {
	let o = i[i.length - 1];
	for (let s = 1; s <= a; s++) {
		let c = /* @__PURE__ */ progress(0, a, s);
		i.push(mixNumber(o, 1, c));
	}
}
function defaultOffset(i) {
	let a = [0];
	return fillOffset(a, i.length - 1), a;
}
function convertOffsetToTimes(i, a) {
	return i.map((i) => i * a);
}
function defaultEasing(i, a) {
	return i.map(() => a || easeInOut).splice(0, i.length - 1);
}
function keyframes({ duration: i = 300, keyframes: a, times: o, ease: s = "easeInOut" }) {
	let c = isEasingArray(s) ? s.map(easingDefinitionToFunction) : easingDefinitionToFunction(s), l = {
		done: !1,
		value: a[0]
	}, u = interpolate(convertOffsetToTimes(o && o.length === a.length ? o : defaultOffset(a), i), a, { ease: Array.isArray(c) ? c : defaultEasing(a, c) });
	return {
		calculatedDuration: i,
		next: (a) => (l.value = u(a), l.done = a >= i, l)
	};
}
var frameloopDriver = (i) => {
	let a = ({ timestamp: a }) => i(a);
	return {
		start: () => frame.update(a, !0),
		stop: () => cancelFrame(a),
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
}, generators = {
	decay: inertia,
	inertia,
	tween: keyframes,
	keyframes,
	spring
}, percentToProgress = (i) => i / 100, MainThreadAnimation = class extends BaseAnimation {
	constructor(i) {
		super(i), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
			if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
			this.teardown();
			let { onStop: i } = this.options;
			i && i();
		};
		let { name: a, motionValue: o, element: s, keyframes: c } = this.options;
		this.resolver = new (s?.KeyframeResolver || KeyframeResolver)(c, (i, a) => this.onKeyframesResolved(i, a), a, o, s), this.resolver.scheduleResolve();
	}
	flatten() {
		super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
	}
	initPlayback(i) {
		let { type: a = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: c, velocity: l = 0 } = this.options, u = isGenerator(a) ? a : generators[a] || keyframes, d, f;
		u !== keyframes && typeof i[0] != "number" && (process.env.NODE_ENV !== "production" && invariant(i.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${i}`), d = pipe(percentToProgress, mix(i[0], i[1])), i = [0, 100]);
		let p = u({
			...this.options,
			keyframes: i
		});
		c === "mirror" && (f = u({
			...this.options,
			keyframes: [...i].reverse(),
			velocity: -l
		})), p.calculatedDuration === null && (p.calculatedDuration = calcGeneratorDuration(p));
		let { calculatedDuration: m } = p, h = m + s, g = h * (o + 1) - s;
		return {
			generator: p,
			mirroredGenerator: f,
			mapPercentToKeyframes: d,
			calculatedDuration: m,
			resolvedDuration: h,
			totalDuration: g
		};
	}
	onPostResolved() {
		let { autoplay: i = !0 } = this.options;
		this.play(), this.pendingPlayState === "paused" || !i ? this.pause() : this.state = this.pendingPlayState;
	}
	tick(i, a = !1) {
		let { resolved: o } = this;
		if (!o) {
			let { keyframes: i } = this.options;
			return {
				done: !0,
				value: i[i.length - 1]
			};
		}
		let { finalKeyframe: s, generator: c, mirroredGenerator: l, mapPercentToKeyframes: u, keyframes: d, calculatedDuration: f, totalDuration: p, resolvedDuration: m } = o;
		if (this.startTime === null) return c.next(0);
		let { delay: h, repeat: g, repeatType: _, repeatDelay: v, onUpdate: y } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - p / this.speed, this.startTime)), a ? this.currentTime = i : this.holdTime === null ? this.currentTime = Math.round(i - this.startTime) * this.speed : this.currentTime = this.holdTime;
		let b = this.currentTime - h * (this.speed >= 0 ? 1 : -1), x = this.speed >= 0 ? b < 0 : b > p;
		this.currentTime = Math.max(b, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = p);
		let S = this.currentTime, C = c;
		if (g) {
			let i = Math.min(this.currentTime, p) / m, a = Math.floor(i), o = i % 1;
			!o && i >= 1 && (o = 1), o === 1 && a--, a = Math.min(a, g + 1), a % 2 && (_ === "reverse" ? (o = 1 - o, v && (o -= v / m)) : _ === "mirror" && (C = l)), S = clamp(0, 1, o) * m;
		}
		let w = x ? {
			done: !1,
			value: d[0]
		} : C.next(S);
		u && (w.value = u(w.value));
		let { done: T } = w;
		!x && f !== null && (T = this.speed >= 0 ? this.currentTime >= p : this.currentTime <= 0);
		let E = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
		return E && s !== void 0 && (w.value = getFinalKeyframe(d, this.options, s)), y && y(w.value), E && this.finish(), w;
	}
	get duration() {
		let { resolved: i } = this;
		return i ? /* @__PURE__ */ millisecondsToSeconds(i.calculatedDuration) : 0;
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	set time(i) {
		i = /* @__PURE__ */ secondsToMilliseconds(i), this.currentTime = i, this.holdTime !== null || this.speed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.speed);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(i) {
		let a = this.playbackSpeed !== i;
		this.playbackSpeed = i, a && (this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime));
	}
	play() {
		if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
			this.pendingPlayState = "running";
			return;
		}
		if (this.isStopped) return;
		let { driver: i = frameloopDriver, onPlay: a, startTime: o } = this.options;
		this.driver ||= i((i) => this.tick(i)), a && a();
		let s = this.driver.now();
		this.holdTime === null ? this.startTime ? this.state === "finished" && (this.startTime = s) : this.startTime = o ?? this.calcStartTime() : this.startTime = s - this.holdTime, this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		if (!this._resolved) {
			this.pendingPlayState = "paused";
			return;
		}
		this.state = "paused", this.holdTime = this.currentTime ?? 0;
	}
	complete() {
		this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.teardown(), this.state = "finished";
		let { onComplete: i } = this.options;
		i && i();
	}
	cancel() {
		this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(i) {
		return this.startTime = 0, this.tick(i, !0);
	}
}, acceleratedValues = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]);
function startWaapiAnimation(i, a, o, { delay: s = 0, duration: c = 300, repeat: l = 0, repeatType: u = "loop", ease: d = "easeInOut", times: f } = {}) {
	let p = { [a]: o };
	f && (p.offset = f);
	let m = mapEasingToNativeEasing(d, c);
	return Array.isArray(m) && (p.easing = m), i.animate(p, {
		delay: s,
		duration: c,
		easing: Array.isArray(m) ? "linear" : m,
		fill: "both",
		iterations: l + 1,
		direction: u === "reverse" ? "alternate" : "normal"
	});
}
var supportsWaapi = /* @__PURE__ */ memo$2(() => Object.hasOwnProperty.call(Element.prototype, "animate")), sampleDelta = 10, maxDuration = 2e4;
function requiresPregeneratedKeyframes(i) {
	return isGenerator(i.type) || i.type === "spring" || !isWaapiSupportedEasing(i.ease);
}
function pregenerateKeyframes(i, a) {
	let o = new MainThreadAnimation({
		...a,
		keyframes: i,
		repeat: 0,
		delay: 0,
		isGenerator: !0
	}), s = {
		done: !1,
		value: i[0]
	}, c = [], l = 0;
	for (; !s.done && l < maxDuration;) s = o.sample(l), c.push(s.value), l += sampleDelta;
	return {
		times: void 0,
		keyframes: c,
		duration: l - sampleDelta,
		ease: "linear"
	};
}
var unsupportedEasingFunctions = {
	anticipate,
	backInOut,
	circInOut
};
function isUnsupportedEase(i) {
	return i in unsupportedEasingFunctions;
}
var AcceleratedAnimation = class extends BaseAnimation {
	constructor(i) {
		super(i);
		let { name: a, motionValue: o, element: s, keyframes: c } = this.options;
		this.resolver = new DOMKeyframesResolver(c, (i, a) => this.onKeyframesResolved(i, a), a, o, s), this.resolver.scheduleResolve();
	}
	initPlayback(i, a) {
		let { duration: o = 300, times: s, ease: c, type: l, motionValue: u, name: d, startTime: f } = this.options;
		if (!u.owner || !u.owner.current) return !1;
		if (typeof c == "string" && supportsLinearEasing() && isUnsupportedEase(c) && (c = unsupportedEasingFunctions[c]), requiresPregeneratedKeyframes(this.options)) {
			let { onComplete: a, onUpdate: u, motionValue: d, element: f, ...p } = this.options, m = pregenerateKeyframes(i, p);
			i = m.keyframes, i.length === 1 && (i[1] = i[0]), o = m.duration, s = m.times, c = m.ease, l = "keyframes";
		}
		let p = startWaapiAnimation(u.owner.current, d, i, {
			...this.options,
			duration: o,
			times: s,
			ease: c
		});
		return p.startTime = f ?? this.calcStartTime(), this.pendingTimeline ? (attachTimeline(p, this.pendingTimeline), this.pendingTimeline = void 0) : p.onfinish = () => {
			let { onComplete: o } = this.options;
			u.set(getFinalKeyframe(i, this.options, a)), o && o(), this.cancel(), this.resolveFinishedPromise();
		}, {
			animation: p,
			duration: o,
			times: s,
			type: l,
			ease: c,
			keyframes: i
		};
	}
	get duration() {
		let { resolved: i } = this;
		if (!i) return 0;
		let { duration: a } = i;
		return /* @__PURE__ */ millisecondsToSeconds(a);
	}
	get time() {
		let { resolved: i } = this;
		if (!i) return 0;
		let { animation: a } = i;
		return /* @__PURE__ */ millisecondsToSeconds(a.currentTime || 0);
	}
	set time(i) {
		let { resolved: a } = this;
		if (!a) return;
		let { animation: o } = a;
		o.currentTime = /* @__PURE__ */ secondsToMilliseconds(i);
	}
	get speed() {
		let { resolved: i } = this;
		if (!i) return 1;
		let { animation: a } = i;
		return a.playbackRate;
	}
	set speed(i) {
		let { resolved: a } = this;
		if (!a) return;
		let { animation: o } = a;
		o.playbackRate = i;
	}
	get state() {
		let { resolved: i } = this;
		if (!i) return "idle";
		let { animation: a } = i;
		return a.playState;
	}
	get startTime() {
		let { resolved: i } = this;
		if (!i) return null;
		let { animation: a } = i;
		return a.startTime;
	}
	attachTimeline(i) {
		if (!this._resolved) this.pendingTimeline = i;
		else {
			let { resolved: a } = this;
			if (!a) return noop;
			let { animation: o } = a;
			attachTimeline(o, i);
		}
		return noop;
	}
	play() {
		if (this.isStopped) return;
		let { resolved: i } = this;
		if (!i) return;
		let { animation: a } = i;
		a.playState === "finished" && this.updateFinishedPromise(), a.play();
	}
	pause() {
		let { resolved: i } = this;
		if (!i) return;
		let { animation: a } = i;
		a.pause();
	}
	stop() {
		if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
		this.resolveFinishedPromise(), this.updateFinishedPromise();
		let { resolved: i } = this;
		if (!i) return;
		let { animation: a, keyframes: o, duration: s, type: c, ease: l, times: u } = i;
		if (a.playState === "idle" || a.playState === "finished") return;
		if (this.time) {
			let { motionValue: i, onUpdate: a, onComplete: d, element: f, ...p } = this.options, m = new MainThreadAnimation({
				...p,
				keyframes: o,
				duration: s,
				type: c,
				ease: l,
				times: u,
				isGenerator: !0
			}), h = /* @__PURE__ */ secondsToMilliseconds(this.time);
			i.setWithVelocity(m.sample(h - sampleDelta).value, m.sample(h).value, sampleDelta);
		}
		let { onStop: d } = this.options;
		d && d(), this.cancel();
	}
	complete() {
		let { resolved: i } = this;
		i && i.animation.finish();
	}
	cancel() {
		let { resolved: i } = this;
		i && i.animation.cancel();
	}
	static supports(i) {
		let { motionValue: a, name: o, repeatDelay: s, repeatType: c, damping: l, type: u } = i;
		if (!a || !a.owner || !(a.owner.current instanceof HTMLElement)) return !1;
		let { onUpdate: d, transformTemplate: f } = a.owner.getProps();
		return supportsWaapi() && o && acceleratedValues.has(o) && !d && !f && !s && c !== "mirror" && l !== 0 && u !== "inertia";
	}
}, underDampedSpring = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, criticallyDampedSpring = (i) => ({
	type: "spring",
	stiffness: 550,
	damping: i === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), keyframesTransition = {
	type: "keyframes",
	duration: .8
}, ease = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, getDefaultTransition = (i, { keyframes: a }) => a.length > 2 ? keyframesTransition : transformProps.has(i) ? i.startsWith("scale") ? criticallyDampedSpring(a[1]) : underDampedSpring : ease;
function isTransitionDefined({ when: i, delay: a, delayChildren: o, staggerChildren: s, staggerDirection: c, repeat: l, repeatType: u, repeatDelay: d, from: f, elapsed: p, ...m }) {
	return !!Object.keys(m).length;
}
var animateMotionValue = (i, a, o, s = {}, c, l) => (u) => {
	let d = getValueTransition(s, i) || {}, f = d.delay || s.delay || 0, { elapsed: p = 0 } = s;
	p -= /* @__PURE__ */ secondsToMilliseconds(f);
	let m = {
		keyframes: Array.isArray(o) ? o : [null, o],
		ease: "easeOut",
		velocity: a.getVelocity(),
		...d,
		delay: -p,
		onUpdate: (i) => {
			a.set(i), d.onUpdate && d.onUpdate(i);
		},
		onComplete: () => {
			u(), d.onComplete && d.onComplete();
		},
		name: i,
		motionValue: a,
		element: l ? void 0 : c
	};
	isTransitionDefined(d) || (m = {
		...m,
		...getDefaultTransition(i, m)
	}), m.duration &&= /* @__PURE__ */ secondsToMilliseconds(m.duration), m.repeatDelay &&= /* @__PURE__ */ secondsToMilliseconds(m.repeatDelay), m.from !== void 0 && (m.keyframes[0] = m.from);
	let h = !1;
	if ((m.type === !1 || m.duration === 0 && !m.repeatDelay) && (m.duration = 0, m.delay === 0 && (h = !0)), (instantAnimationState.current || MotionGlobalConfig.skipAnimations) && (h = !0, m.duration = 0, m.delay = 0), h && !l && a.get() !== void 0) {
		let i = getFinalKeyframe(m.keyframes, d);
		if (i !== void 0) return frame.update(() => {
			m.onUpdate(i), m.onComplete();
		}), new GroupPlaybackControls([]);
	}
	return !l && AcceleratedAnimation.supports(m) ? new AcceleratedAnimation(m) : new MainThreadAnimation(m);
};
function shouldBlockAnimation({ protectedKeys: i, needsAnimating: a }, o) {
	let s = i.hasOwnProperty(o) && a[o] !== !0;
	return a[o] = !1, s;
}
function animateTarget(i, a, { delay: o = 0, transitionOverride: s, type: c } = {}) {
	let { transition: l = i.getDefaultTransition(), transitionEnd: u, ...d } = a;
	s && (l = s);
	let f = [], p = c && i.animationState && i.animationState.getState()[c];
	for (let a in d) {
		let s = i.getValue(a, i.latestValues[a] ?? null), c = d[a];
		if (c === void 0 || p && shouldBlockAnimation(p, a)) continue;
		let u = {
			delay: o,
			...getValueTransition(l || {}, a)
		}, m = !1;
		if (window.MotionHandoffAnimation) {
			let o = getOptimisedAppearId(i);
			if (o) {
				let i = window.MotionHandoffAnimation(o, a, frame);
				i !== null && (u.startTime = i, m = !0);
			}
		}
		addValueToWillChange(i, a), s.start(animateMotionValue(a, s, c, i.shouldReduceMotion && positionalKeys.has(a) ? { type: !1 } : u, i, m));
		let h = s.animation;
		h && f.push(h);
	}
	return u && Promise.all(f).then(() => {
		frame.update(() => {
			u && setTarget(i, u);
		});
	}), f;
}
function animateVariant(i, a, o = {}) {
	let s = resolveVariant(i, a, o.type === "exit" ? i.presenceContext?.custom : void 0), { transition: c = i.getDefaultTransition() || {} } = s || {};
	o.transitionOverride && (c = o.transitionOverride);
	let l = s ? () => Promise.all(animateTarget(i, s, o)) : () => Promise.resolve(), u = i.variantChildren && i.variantChildren.size ? (s = 0) => {
		let { delayChildren: l = 0, staggerChildren: u, staggerDirection: d } = c;
		return animateChildren(i, a, l + s, u, d, o);
	} : () => Promise.resolve(), { when: d } = c;
	if (d) {
		let [i, a] = d === "beforeChildren" ? [l, u] : [u, l];
		return i().then(() => a());
	} else return Promise.all([l(), u(o.delay)]);
}
function animateChildren(i, a, o = 0, s = 0, c = 1, l) {
	let u = [], d = (i.variantChildren.size - 1) * s, f = c === 1 ? (i = 0) => i * s : (i = 0) => d - i * s;
	return Array.from(i.variantChildren).sort(sortByTreeOrder).forEach((i, s) => {
		i.notify("AnimationStart", a), u.push(animateVariant(i, a, {
			...l,
			delay: o + f(s)
		}).then(() => i.notify("AnimationComplete", a)));
	}), Promise.all(u);
}
function sortByTreeOrder(i, a) {
	return i.sortNodePosition(a);
}
function animateVisualElement(i, a, o = {}) {
	i.notify("AnimationStart", a);
	let s;
	if (Array.isArray(a)) {
		let c = a.map((a) => animateVariant(i, a, o));
		s = Promise.all(c);
	} else if (typeof a == "string") s = animateVariant(i, a, o);
	else {
		let c = typeof a == "function" ? resolveVariant(i, a, o.custom) : a;
		s = Promise.all(animateTarget(i, c, o));
	}
	return s.then(() => {
		i.notify("AnimationComplete", a);
	});
}
var numVariantProps = variantProps.length;
function getVariantContext(i) {
	if (!i) return;
	if (!i.isControllingVariants) {
		let a = i.parent && getVariantContext(i.parent) || {};
		return i.props.initial !== void 0 && (a.initial = i.props.initial), a;
	}
	let a = {};
	for (let o = 0; o < numVariantProps; o++) {
		let s = variantProps[o], c = i.props[s];
		(isVariantLabel(c) || c === !1) && (a[s] = c);
	}
	return a;
}
var reversePriorityOrder = [...variantPriorityOrder].reverse(), numAnimationTypes = variantPriorityOrder.length;
function animateList(i) {
	return (a) => Promise.all(a.map(({ animation: a, options: o }) => animateVisualElement(i, a, o)));
}
function createAnimationState(i) {
	let a = animateList(i), o = createState(), s = !0, c = (a) => (o, s) => {
		let c = resolveVariant(i, s, a === "exit" ? i.presenceContext?.custom : void 0);
		if (c) {
			let { transition: i, transitionEnd: a, ...s } = c;
			o = {
				...o,
				...s,
				...a
			};
		}
		return o;
	};
	function l(o) {
		a = o(i);
	}
	function u(l) {
		let { props: u } = i, d = getVariantContext(i.parent) || {}, f = [], p = /* @__PURE__ */ new Set(), m = {}, h = Infinity;
		for (let a = 0; a < numAnimationTypes; a++) {
			let g = reversePriorityOrder[a], _ = o[g], v = u[g] === void 0 ? d[g] : u[g], y = isVariantLabel(v), b = g === l ? _.isActive : null;
			b === !1 && (h = a);
			let x = v === d[g] && v !== u[g] && y;
			if (x && s && i.manuallyAnimateOnMount && (x = !1), _.protectedKeys = { ...m }, !_.isActive && b === null || !v && !_.prevProp || isAnimationControls(v) || typeof v == "boolean") continue;
			let S = checkVariantsDidChange(_.prevProp, v), C = S || g === l && _.isActive && !x && y || a > h && y, w = !1, T = Array.isArray(v) ? v : [v], E = T.reduce(c(g), {});
			b === !1 && (E = {});
			let { prevResolvedValues: D = {} } = _, O = {
				...D,
				...E
			}, k = (a) => {
				C = !0, p.has(a) && (w = !0, p.delete(a)), _.needsAnimating[a] = !0;
				let o = i.getValue(a);
				o && (o.liveStyle = !1);
			};
			for (let i in O) {
				let a = E[i], o = D[i];
				if (m.hasOwnProperty(i)) continue;
				let s = !1;
				s = isKeyframesTarget(a) && isKeyframesTarget(o) ? !shallowCompare(a, o) : a !== o, s ? a == null ? p.add(i) : k(i) : a !== void 0 && p.has(i) ? k(i) : _.protectedKeys[i] = !0;
			}
			_.prevProp = v, _.prevResolvedValues = E, _.isActive && (m = {
				...m,
				...E
			}), s && i.blockInitialAnimation && (C = !1), C && (!(x && S) || w) && f.push(...T.map((i) => ({
				animation: i,
				options: { type: g }
			})));
		}
		if (p.size) {
			let a = {};
			p.forEach((o) => {
				let s = i.getBaseTarget(o), c = i.getValue(o);
				c && (c.liveStyle = !0), a[o] = s ?? null;
			}), f.push({ animation: a });
		}
		let g = !!f.length;
		return s && (u.initial === !1 || u.initial === u.animate) && !i.manuallyAnimateOnMount && (g = !1), s = !1, g ? a(f) : Promise.resolve();
	}
	function d(a, s) {
		var c;
		if (o[a].isActive === s) return Promise.resolve();
		(c = i.variantChildren) == null || c.forEach((i) => i.animationState?.setActive(a, s)), o[a].isActive = s;
		let l = u(a);
		for (let i in o) o[i].protectedKeys = {};
		return l;
	}
	return {
		animateChanges: u,
		setActive: d,
		setAnimateFunction: l,
		getState: () => o,
		reset: () => {
			o = createState(), s = !0;
		}
	};
}
function checkVariantsDidChange(i, a) {
	return typeof a == "string" ? a !== i : Array.isArray(a) ? !shallowCompare(a, i) : !1;
}
function createTypeState(i = !1) {
	return {
		isActive: i,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function createState() {
	return {
		animate: createTypeState(!0),
		whileInView: createTypeState(),
		whileHover: createTypeState(),
		whileTap: createTypeState(),
		whileDrag: createTypeState(),
		whileFocus: createTypeState(),
		exit: createTypeState()
	};
}
var Feature = class {
	constructor(i) {
		this.isMounted = !1, this.node = i;
	}
	update() {}
}, AnimationFeature = class extends Feature {
	constructor(i) {
		super(i), i.animationState ||= createAnimationState(i);
	}
	updateAnimationControlsSubscription() {
		let { animate: i } = this.node.getProps();
		isAnimationControls(i) && (this.unmountControls = i.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: i } = this.node.getProps(), { animate: a } = this.node.prevProps || {};
		i !== a && this.updateAnimationControlsSubscription();
	}
	unmount() {
		var i;
		this.node.animationState.reset(), (i = this.unmountControls) == null || i.call(this);
	}
}, id$1 = 0, animations = {
	animation: { Feature: AnimationFeature },
	exit: { Feature: class extends Feature {
		constructor() {
			super(...arguments), this.id = id$1++;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: i, onExitComplete: a } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || i === o) return;
			let s = this.node.animationState.setActive("exit", !i);
			a && !i && s.then(() => a(this.id));
		}
		mount() {
			let { register: i } = this.node.presenceContext || {};
			i && (this.unmount = i(this.id));
		}
		unmount() {}
	} }
};
function addDomEvent(i, a, o, s = { passive: !0 }) {
	return i.addEventListener(a, o, s), () => i.removeEventListener(a, o);
}
function extractEventInfo(i) {
	return { point: {
		x: i.pageX,
		y: i.pageY
	} };
}
var addPointerInfo = (i) => (a) => isPrimaryPointer(a) && i(a, extractEventInfo(a));
function addPointerEvent(i, a, o, s) {
	return addDomEvent(i, a, addPointerInfo(o), s);
}
var distance = (i, a) => Math.abs(i - a);
function distance2D(i, a) {
	let o = distance(i.x, a.x), s = distance(i.y, a.y);
	return Math.sqrt(o ** 2 + s ** 2);
}
var PanSession = class {
	constructor(i, a, { transformPagePoint: o, contextWindow: s, dragSnapToOrigin: c = !1 } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let i = getPanInfo(this.lastMoveEventInfo, this.history), a = this.startEvent !== null, o = distance2D(i.offset, {
				x: 0,
				y: 0
			}) >= 3;
			if (!a && !o) return;
			let { point: s } = i, { timestamp: c } = frameData;
			this.history.push({
				...s,
				timestamp: c
			});
			let { onStart: l, onMove: u } = this.handlers;
			a || (l && l(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), u && u(this.lastMoveEvent, i);
		}, this.handlePointerMove = (i, a) => {
			this.lastMoveEvent = i, this.lastMoveEventInfo = transformPoint(a, this.transformPagePoint), frame.update(this.updatePoint, !0);
		}, this.handlePointerUp = (i, a) => {
			this.end();
			let { onEnd: o, onSessionEnd: s, resumeAnimation: c } = this.handlers;
			if (this.dragSnapToOrigin && c && c(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let l = getPanInfo(i.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(a, this.transformPagePoint), this.history);
			this.startEvent && o && o(i, l), s && s(i, l);
		}, !isPrimaryPointer(i)) return;
		this.dragSnapToOrigin = c, this.handlers = a, this.transformPagePoint = o, this.contextWindow = s || window;
		let l = transformPoint(extractEventInfo(i), this.transformPagePoint), { point: u } = l, { timestamp: d } = frameData;
		this.history = [{
			...u,
			timestamp: d
		}];
		let { onSessionStart: f } = a;
		f && f(i, getPanInfo(l, this.history)), this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
	}
	updateHandlers(i) {
		this.handlers = i;
	}
	end() {
		this.removeListeners && this.removeListeners(), cancelFrame(this.updatePoint);
	}
};
function transformPoint(i, a) {
	return a ? { point: a(i.point) } : i;
}
function subtractPoint(i, a) {
	return {
		x: i.x - a.x,
		y: i.y - a.y
	};
}
function getPanInfo({ point: i }, a) {
	return {
		point: i,
		delta: subtractPoint(i, lastDevicePoint(a)),
		offset: subtractPoint(i, startDevicePoint(a)),
		velocity: getVelocity(a, .1)
	};
}
function startDevicePoint(i) {
	return i[0];
}
function lastDevicePoint(i) {
	return i[i.length - 1];
}
function getVelocity(i, a) {
	if (i.length < 2) return {
		x: 0,
		y: 0
	};
	let o = i.length - 1, s = null, c = lastDevicePoint(i);
	for (; o >= 0 && (s = i[o], !(c.timestamp - s.timestamp > /* @__PURE__ */ secondsToMilliseconds(a)));) o--;
	if (!s) return {
		x: 0,
		y: 0
	};
	let l = /* @__PURE__ */ millisecondsToSeconds(c.timestamp - s.timestamp);
	if (l === 0) return {
		x: 0,
		y: 0
	};
	let u = {
		x: (c.x - s.x) / l,
		y: (c.y - s.y) / l
	};
	return u.x === Infinity && (u.x = 0), u.y === Infinity && (u.y = 0), u;
}
var SCALE_PRECISION = 1e-4, SCALE_MIN = 1 - SCALE_PRECISION, SCALE_MAX = 1 + SCALE_PRECISION, TRANSLATE_PRECISION = .01, TRANSLATE_MIN = 0 - TRANSLATE_PRECISION, TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(i) {
	return i.max - i.min;
}
function isNear(i, a, o) {
	return Math.abs(i - a) <= o;
}
function calcAxisDelta(i, a, o, s = .5) {
	i.origin = s, i.originPoint = mixNumber(a.min, a.max, i.origin), i.scale = calcLength(o) / calcLength(a), i.translate = mixNumber(o.min, o.max, i.origin) - i.originPoint, (i.scale >= SCALE_MIN && i.scale <= SCALE_MAX || isNaN(i.scale)) && (i.scale = 1), (i.translate >= TRANSLATE_MIN && i.translate <= TRANSLATE_MAX || isNaN(i.translate)) && (i.translate = 0);
}
function calcBoxDelta(i, a, o, s) {
	calcAxisDelta(i.x, a.x, o.x, s ? s.originX : void 0), calcAxisDelta(i.y, a.y, o.y, s ? s.originY : void 0);
}
function calcRelativeAxis(i, a, o) {
	i.min = o.min + a.min, i.max = i.min + calcLength(a);
}
function calcRelativeBox(i, a, o) {
	calcRelativeAxis(i.x, a.x, o.x), calcRelativeAxis(i.y, a.y, o.y);
}
function calcRelativeAxisPosition(i, a, o) {
	i.min = a.min - o.min, i.max = i.min + calcLength(a);
}
function calcRelativePosition(i, a, o) {
	calcRelativeAxisPosition(i.x, a.x, o.x), calcRelativeAxisPosition(i.y, a.y, o.y);
}
function applyConstraints(i, { min: a, max: o }, s) {
	return a !== void 0 && i < a ? i = s ? mixNumber(a, i, s.min) : Math.max(i, a) : o !== void 0 && i > o && (i = s ? mixNumber(o, i, s.max) : Math.min(i, o)), i;
}
function calcRelativeAxisConstraints(i, a, o) {
	return {
		min: a === void 0 ? void 0 : i.min + a,
		max: o === void 0 ? void 0 : i.max + o - (i.max - i.min)
	};
}
function calcRelativeConstraints(i, { top: a, left: o, bottom: s, right: c }) {
	return {
		x: calcRelativeAxisConstraints(i.x, o, c),
		y: calcRelativeAxisConstraints(i.y, a, s)
	};
}
function calcViewportAxisConstraints(i, a) {
	let o = a.min - i.min, s = a.max - i.max;
	return a.max - a.min < i.max - i.min && ([o, s] = [s, o]), {
		min: o,
		max: s
	};
}
function calcViewportConstraints(i, a) {
	return {
		x: calcViewportAxisConstraints(i.x, a.x),
		y: calcViewportAxisConstraints(i.y, a.y)
	};
}
function calcOrigin(i, a) {
	let o = .5, s = calcLength(i), c = calcLength(a);
	return c > s ? o = /* @__PURE__ */ progress(a.min, a.max - s, i.min) : s > c && (o = /* @__PURE__ */ progress(i.min, i.max - c, a.min)), clamp(0, 1, o);
}
function rebaseAxisConstraints(i, a) {
	let o = {};
	return a.min !== void 0 && (o.min = a.min - i.min), a.max !== void 0 && (o.max = a.max - i.min), o;
}
var defaultElastic = .35;
function resolveDragElastic(i = defaultElastic) {
	return i === !1 ? i = 0 : i === !0 && (i = defaultElastic), {
		x: resolveAxisElastic(i, "left", "right"),
		y: resolveAxisElastic(i, "top", "bottom")
	};
}
function resolveAxisElastic(i, a, o) {
	return {
		min: resolvePointElastic(i, a),
		max: resolvePointElastic(i, o)
	};
}
function resolvePointElastic(i, a) {
	return typeof i == "number" ? i : i[a] || 0;
}
var createAxisDelta = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), createDelta = () => ({
	x: createAxisDelta(),
	y: createAxisDelta()
}), createAxis = () => ({
	min: 0,
	max: 0
}), createBox = () => ({
	x: createAxis(),
	y: createAxis()
});
function eachAxis(i) {
	return [i("x"), i("y")];
}
function convertBoundingBoxToBox({ top: i, left: a, right: o, bottom: s }) {
	return {
		x: {
			min: a,
			max: o
		},
		y: {
			min: i,
			max: s
		}
	};
}
function convertBoxToBoundingBox({ x: i, y: a }) {
	return {
		top: a.min,
		right: i.max,
		bottom: a.max,
		left: i.min
	};
}
function transformBoxPoints(i, a) {
	if (!a) return i;
	let o = a({
		x: i.left,
		y: i.top
	}), s = a({
		x: i.right,
		y: i.bottom
	});
	return {
		top: o.y,
		left: o.x,
		bottom: s.y,
		right: s.x
	};
}
function isIdentityScale(i) {
	return i === void 0 || i === 1;
}
function hasScale({ scale: i, scaleX: a, scaleY: o }) {
	return !isIdentityScale(i) || !isIdentityScale(a) || !isIdentityScale(o);
}
function hasTransform(i) {
	return hasScale(i) || has2DTranslate(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function has2DTranslate(i) {
	return is2DTranslate(i.x) || is2DTranslate(i.y);
}
function is2DTranslate(i) {
	return i && i !== "0%";
}
function scalePoint(i, a, o) {
	return o + a * (i - o);
}
function applyPointDelta(i, a, o, s, c) {
	return c !== void 0 && (i = scalePoint(i, c, s)), scalePoint(i, o, s) + a;
}
function applyAxisDelta(i, a = 0, o = 1, s, c) {
	i.min = applyPointDelta(i.min, a, o, s, c), i.max = applyPointDelta(i.max, a, o, s, c);
}
function applyBoxDelta(i, { x: a, y: o }) {
	applyAxisDelta(i.x, a.translate, a.scale, a.originPoint), applyAxisDelta(i.y, o.translate, o.scale, o.originPoint);
}
var TREE_SCALE_SNAP_MIN = .999999999999, TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(i, a, o, s = !1) {
	let c = o.length;
	if (!c) return;
	a.x = a.y = 1;
	let l, u;
	for (let d = 0; d < c; d++) {
		l = o[d], u = l.projectionDelta;
		let { visualElement: c } = l.options;
		c && c.props.style && c.props.style.display === "contents" || (s && l.options.layoutScroll && l.scroll && l !== l.root && transformBox(i, {
			x: -l.scroll.offset.x,
			y: -l.scroll.offset.y
		}), u && (a.x *= u.x.scale, a.y *= u.y.scale, applyBoxDelta(i, u)), s && hasTransform(l.latestValues) && transformBox(i, l.latestValues));
	}
	a.x < TREE_SCALE_SNAP_MAX && a.x > TREE_SCALE_SNAP_MIN && (a.x = 1), a.y < TREE_SCALE_SNAP_MAX && a.y > TREE_SCALE_SNAP_MIN && (a.y = 1);
}
function translateAxis(i, a) {
	i.min += a, i.max += a;
}
function transformAxis(i, a, o, s, c = .5) {
	applyAxisDelta(i, a, o, mixNumber(i.min, i.max, c), s);
}
function transformBox(i, a) {
	transformAxis(i.x, a.x, a.scaleX, a.scale, a.originX), transformAxis(i.y, a.y, a.scaleY, a.scale, a.originY);
}
function measureViewportBox(i, a) {
	return convertBoundingBoxToBox(transformBoxPoints(i.getBoundingClientRect(), a));
}
function measurePageBox(i, a, o) {
	let s = measureViewportBox(i, o), { scroll: c } = a;
	return c && (translateAxis(s.x, c.offset.x), translateAxis(s.y, c.offset.y)), s;
}
var getContextWindow = ({ current: i }) => i ? i.ownerDocument.defaultView : null, elementDragControls = /* @__PURE__ */ new WeakMap(), VisualElementDragControls = class {
	constructor(i) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = createBox(), this.visualElement = i;
	}
	start(i, { snapToCursor: a = !1 } = {}) {
		let { presenceContext: o } = this.visualElement;
		if (o && o.isPresent === !1) return;
		let s = (i) => {
			let { dragSnapToOrigin: o } = this.getProps();
			o ? this.pauseAnimation() : this.stopAnimation(), a && this.snapToCursor(extractEventInfo(i).point);
		}, c = (i, a) => {
			let { drag: o, dragPropagation: s, onDragStart: c } = this.getProps();
			if (o && !s && (this.openDragLock && this.openDragLock(), this.openDragLock = setDragLock(o), !this.openDragLock)) return;
			this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), eachAxis((i) => {
				let a = this.getAxisMotionValue(i).get() || 0;
				if (percent.test(a)) {
					let { projection: o } = this.visualElement;
					if (o && o.layout) {
						let s = o.layout.layoutBox[i];
						s && (a = calcLength(s) * (parseFloat(a) / 100));
					}
				}
				this.originPoint[i] = a;
			}), c && frame.postRender(() => c(i, a)), addValueToWillChange(this.visualElement, "transform");
			let { animationState: l } = this.visualElement;
			l && l.setActive("whileDrag", !0);
		}, l = (i, a) => {
			let { dragPropagation: o, dragDirectionLock: s, onDirectionLock: c, onDrag: l } = this.getProps();
			if (!o && !this.openDragLock) return;
			let { offset: u } = a;
			if (s && this.currentDirection === null) {
				this.currentDirection = getCurrentDirection(u), this.currentDirection !== null && c && c(this.currentDirection);
				return;
			}
			this.updateAxis("x", a.point, u), this.updateAxis("y", a.point, u), this.visualElement.render(), l && l(i, a);
		}, u = (i, a) => this.stop(i, a), d = () => eachAxis((i) => this.getAnimationState(i) === "paused" && this.getAxisMotionValue(i).animation?.play()), { dragSnapToOrigin: f } = this.getProps();
		this.panSession = new PanSession(i, {
			onSessionStart: s,
			onStart: c,
			onMove: l,
			onSessionEnd: u,
			resumeAnimation: d
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: f,
			contextWindow: getContextWindow(this.visualElement)
		});
	}
	stop(i, a) {
		let o = this.isDragging;
		if (this.cancel(), !o) return;
		let { velocity: s } = a;
		this.startAnimation(s);
		let { onDragEnd: c } = this.getProps();
		c && frame.postRender(() => c(i, a));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: i, animationState: a } = this.visualElement;
		i && (i.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
		let { dragPropagation: o } = this.getProps();
		!o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), a && a.setActive("whileDrag", !1);
	}
	updateAxis(i, a, o) {
		let { drag: s } = this.getProps();
		if (!o || !shouldDrag(i, s, this.currentDirection)) return;
		let c = this.getAxisMotionValue(i), l = this.originPoint[i] + o[i];
		this.constraints && this.constraints[i] && (l = applyConstraints(l, this.constraints[i], this.elastic[i])), c.set(l);
	}
	resolveConstraints() {
		let { dragConstraints: i, dragElastic: a } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
		i && isRefObject(i) ? this.constraints ||= this.resolveRefConstraints() : i && o ? this.constraints = calcRelativeConstraints(o.layoutBox, i) : this.constraints = !1, this.elastic = resolveDragElastic(a), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && eachAxis((i) => {
			this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = rebaseAxisConstraints(o.layoutBox[i], this.constraints[i]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: i, onMeasureDragConstraints: a } = this.getProps();
		if (!i || !isRefObject(i)) return !1;
		let o = i.current;
		invariant(o !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
		let { projection: s } = this.visualElement;
		if (!s || !s.layout) return !1;
		let c = measurePageBox(o, s.root, this.visualElement.getTransformPagePoint()), l = calcViewportConstraints(s.layout.layoutBox, c);
		if (a) {
			let i = a(convertBoxToBoundingBox(l));
			this.hasMutatedConstraints = !!i, i && (l = convertBoundingBoxToBox(i));
		}
		return l;
	}
	startAnimation(i) {
		let { drag: a, dragMomentum: o, dragElastic: s, dragTransition: c, dragSnapToOrigin: l, onDragTransitionEnd: u } = this.getProps(), d = this.constraints || {}, f = eachAxis((u) => {
			if (!shouldDrag(u, a, this.currentDirection)) return;
			let f = d && d[u] || {};
			l && (f = {
				min: 0,
				max: 0
			});
			let p = s ? 200 : 1e6, m = s ? 40 : 1e7, h = {
				type: "inertia",
				velocity: o ? i[u] : 0,
				bounceStiffness: p,
				bounceDamping: m,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...c,
				...f
			};
			return this.startAxisValueAnimation(u, h);
		});
		return Promise.all(f).then(u);
	}
	startAxisValueAnimation(i, a) {
		let o = this.getAxisMotionValue(i);
		return addValueToWillChange(this.visualElement, i), o.start(animateMotionValue(i, o, 0, a, this.visualElement, !1));
	}
	stopAnimation() {
		eachAxis((i) => this.getAxisMotionValue(i).stop());
	}
	pauseAnimation() {
		eachAxis((i) => this.getAxisMotionValue(i).animation?.pause());
	}
	getAnimationState(i) {
		return this.getAxisMotionValue(i).animation?.state;
	}
	getAxisMotionValue(i) {
		let a = `_drag${i.toUpperCase()}`, o = this.visualElement.getProps();
		return o[a] || this.visualElement.getValue(i, (o.initial ? o.initial[i] : void 0) || 0);
	}
	snapToCursor(i) {
		eachAxis((a) => {
			let { drag: o } = this.getProps();
			if (!shouldDrag(a, o, this.currentDirection)) return;
			let { projection: s } = this.visualElement, c = this.getAxisMotionValue(a);
			if (s && s.layout) {
				let { min: o, max: l } = s.layout.layoutBox[a];
				c.set(i[a] - mixNumber(o, l, .5));
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: i, dragConstraints: a } = this.getProps(), { projection: o } = this.visualElement;
		if (!isRefObject(a) || !o || !this.constraints) return;
		this.stopAnimation();
		let s = {
			x: 0,
			y: 0
		};
		eachAxis((i) => {
			let a = this.getAxisMotionValue(i);
			if (a && this.constraints !== !1) {
				let o = a.get();
				s[i] = calcOrigin({
					min: o,
					max: o
				}, this.constraints[i]);
			}
		});
		let { transformTemplate: c } = this.visualElement.getProps();
		this.visualElement.current.style.transform = c ? c({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), eachAxis((a) => {
			if (!shouldDrag(a, i, null)) return;
			let o = this.getAxisMotionValue(a), { min: c, max: l } = this.constraints[a];
			o.set(mixNumber(c, l, s[a]));
		});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		elementDragControls.set(this.visualElement, this);
		let i = this.visualElement.current, a = addPointerEvent(i, "pointerdown", (i) => {
			let { drag: a, dragListener: o = !0 } = this.getProps();
			a && o && this.start(i);
		}), o = () => {
			let { dragConstraints: i } = this.getProps();
			isRefObject(i) && i.current && (this.constraints = this.resolveRefConstraints());
		}, { projection: s } = this.visualElement, c = s.addEventListener("measure", o);
		s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), frame.read(o);
		let l = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints()), u = s.addEventListener("didUpdate", (({ delta: i, hasLayoutChanged: a }) => {
			this.isDragging && a && (eachAxis((a) => {
				let o = this.getAxisMotionValue(a);
				o && (this.originPoint[a] += i[a].translate, o.set(o.get() + i[a].translate));
			}), this.visualElement.render());
		}));
		return () => {
			l(), a(), c(), u && u();
		};
	}
	getProps() {
		let i = this.visualElement.getProps(), { drag: a = !1, dragDirectionLock: o = !1, dragPropagation: s = !1, dragConstraints: c = !1, dragElastic: l = defaultElastic, dragMomentum: u = !0 } = i;
		return {
			...i,
			drag: a,
			dragDirectionLock: o,
			dragPropagation: s,
			dragConstraints: c,
			dragElastic: l,
			dragMomentum: u
		};
	}
};
function shouldDrag(i, a, o) {
	return (a === !0 || a === i) && (o === null || o === i);
}
function getCurrentDirection(i, a = 10) {
	let o = null;
	return Math.abs(i.y) > a ? o = "y" : Math.abs(i.x) > a && (o = "x"), o;
}
var DragGesture = class extends Feature {
	constructor(i) {
		super(i), this.removeGroupControls = noop, this.removeListeners = noop, this.controls = new VisualElementDragControls(i);
	}
	mount() {
		let { dragControls: i } = this.node.getProps();
		i && (this.removeGroupControls = i.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || noop;
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}, asyncHandler = (i) => (a, o) => {
	i && frame.postRender(() => i(a, o));
}, PanGesture = class extends Feature {
	constructor() {
		super(...arguments), this.removePointerDownListener = noop;
	}
	onPointerDown(i) {
		this.session = new PanSession(i, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: getContextWindow(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: i, onPanStart: a, onPan: o, onPanEnd: s } = this.node.getProps();
		return {
			onSessionStart: asyncHandler(i),
			onStart: asyncHandler(a),
			onMove: o,
			onEnd: (i, a) => {
				delete this.session, s && frame.postRender(() => s(i, a));
			}
		};
	}
	mount() {
		this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (i) => this.onPointerDown(i));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, globalProjectionState = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
};
function pixelsToPercent(i, a) {
	return a.max === a.min ? 0 : i / (a.max - a.min) * 100;
}
var correctBorderRadius = { correct: (i, a) => {
	if (!a.target) return i;
	if (typeof i == "string") if (px.test(i)) i = parseFloat(i);
	else return i;
	return `${pixelsToPercent(i, a.target.x)}% ${pixelsToPercent(i, a.target.y)}%`;
} }, correctBoxShadow = { correct: (i, { treeScale: a, projectionDelta: o }) => {
	let s = i, c = complex.parse(i);
	if (c.length > 5) return s;
	let l = complex.createTransformer(i), u = typeof c[0] == "number" ? 0 : 1, d = o.x.scale * a.x, f = o.y.scale * a.y;
	c[0 + u] /= d, c[1 + u] /= f;
	let p = mixNumber(d, f, .5);
	return typeof c[2 + u] == "number" && (c[2 + u] /= p), typeof c[3 + u] == "number" && (c[3 + u] /= p), l(c);
} }, MeasureLayoutWithContext = class extends Component {
	componentDidMount() {
		let { visualElement: i, layoutGroup: a, switchLayoutGroup: o, layoutId: s } = this.props, { projection: c } = i;
		addScaleCorrector(defaultScaleCorrectors), c && (a.group && a.group.add(c), o && o.register && s && o.register(c), c.root.didUpdate(), c.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), c.setOptions({
			...c.options,
			onExitComplete: () => this.safeToRemove()
		})), globalProjectionState.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(i) {
		let { layoutDependency: a, visualElement: o, drag: s, isPresent: c } = this.props, l = o.projection;
		return l ? (l.isPresent = c, s || i.layoutDependency !== a || a === void 0 ? l.willUpdate() : this.safeToRemove(), i.isPresent !== c && (c ? l.promote() : l.relegate() || frame.postRender(() => {
			let i = l.getStack();
			(!i || !i.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { projection: i } = this.props.visualElement;
		i && (i.root.didUpdate(), microtask.postRender(() => {
			!i.currentAnimation && i.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: i, layoutGroup: a, switchLayoutGroup: o } = this.props, { projection: s } = i;
		s && (s.scheduleCheckAfterUnmount(), a && a.group && a.group.remove(s), o && o.deregister && o.deregister(s));
	}
	safeToRemove() {
		let { safeToRemove: i } = this.props;
		i && i();
	}
	render() {
		return null;
	}
};
function MeasureLayout(i) {
	let [a, o] = usePresence(), s = useContext(LayoutGroupContext);
	return jsx(MeasureLayoutWithContext, {
		...i,
		layoutGroup: s,
		switchLayoutGroup: useContext(SwitchLayoutGroupContext),
		isPresent: a,
		safeToRemove: o
	});
}
var defaultScaleCorrectors = {
	borderRadius: {
		...correctBorderRadius,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: correctBorderRadius,
	borderTopRightRadius: correctBorderRadius,
	borderBottomLeftRadius: correctBorderRadius,
	borderBottomRightRadius: correctBorderRadius,
	boxShadow: correctBoxShadow
};
function animateSingleValue(i, a, o) {
	let s = isMotionValue(i) ? i : motionValue(i);
	return s.start(animateMotionValue("", s, a, o)), s.animation;
}
function isSVGElement(i) {
	return i instanceof SVGElement && i.tagName !== "svg";
}
var compareByDepth = (i, a) => i.depth - a.depth, FlatTree = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(i) {
		addUniqueItem(this.children, i), this.isDirty = !0;
	}
	remove(i) {
		removeItem(this.children, i), this.isDirty = !0;
	}
	forEach(i) {
		this.isDirty && this.children.sort(compareByDepth), this.isDirty = !1, this.children.forEach(i);
	}
};
function delay(i, a) {
	let o = time.now(), s = ({ timestamp: c }) => {
		let l = c - o;
		l >= a && (cancelFrame(s), i(l - a));
	};
	return frame.read(s, !0), () => cancelFrame(s);
}
var borders = [
	"TopLeft",
	"TopRight",
	"BottomLeft",
	"BottomRight"
], numBorders = borders.length, asNumber = (i) => typeof i == "string" ? parseFloat(i) : i, isPx = (i) => typeof i == "number" || px.test(i);
function mixValues(i, a, o, s, c, l) {
	c ? (i.opacity = mixNumber(0, o.opacity === void 0 ? 1 : o.opacity, easeCrossfadeIn(s)), i.opacityExit = mixNumber(a.opacity === void 0 ? 1 : a.opacity, 0, easeCrossfadeOut(s))) : l && (i.opacity = mixNumber(a.opacity === void 0 ? 1 : a.opacity, o.opacity === void 0 ? 1 : o.opacity, s));
	for (let c = 0; c < numBorders; c++) {
		let l = `border${borders[c]}Radius`, u = getRadius(a, l), d = getRadius(o, l);
		u === void 0 && d === void 0 || (u ||= 0, d ||= 0, u === 0 || d === 0 || isPx(u) === isPx(d) ? (i[l] = Math.max(mixNumber(asNumber(u), asNumber(d), s), 0), (percent.test(d) || percent.test(u)) && (i[l] += "%")) : i[l] = d);
	}
	(a.rotate || o.rotate) && (i.rotate = mixNumber(a.rotate || 0, o.rotate || 0, s));
}
function getRadius(i, a) {
	return i[a] === void 0 ? i.borderRadius : i[a];
}
var easeCrossfadeIn = /* @__PURE__ */ compress(0, .5, circOut), easeCrossfadeOut = /* @__PURE__ */ compress(.5, .95, noop);
function compress(i, a, o) {
	return (s) => s < i ? 0 : s > a ? 1 : o(/* @__PURE__ */ progress(i, a, s));
}
function copyAxisInto(i, a) {
	i.min = a.min, i.max = a.max;
}
function copyBoxInto(i, a) {
	copyAxisInto(i.x, a.x), copyAxisInto(i.y, a.y);
}
function copyAxisDeltaInto(i, a) {
	i.translate = a.translate, i.scale = a.scale, i.originPoint = a.originPoint, i.origin = a.origin;
}
function removePointDelta(i, a, o, s, c) {
	return i -= a, i = scalePoint(i, 1 / o, s), c !== void 0 && (i = scalePoint(i, 1 / c, s)), i;
}
function removeAxisDelta(i, a = 0, o = 1, s = .5, c, l = i, u = i) {
	if (percent.test(a) && (a = parseFloat(a), a = mixNumber(u.min, u.max, a / 100) - u.min), typeof a != "number") return;
	let d = mixNumber(l.min, l.max, s);
	i === l && (d -= a), i.min = removePointDelta(i.min, a, o, d, c), i.max = removePointDelta(i.max, a, o, d, c);
}
function removeAxisTransforms(i, a, [o, s, c], l, u) {
	removeAxisDelta(i, a[o], a[s], a[c], a.scale, l, u);
}
var xKeys = [
	"x",
	"scaleX",
	"originX"
], yKeys = [
	"y",
	"scaleY",
	"originY"
];
function removeBoxTransforms(i, a, o, s) {
	removeAxisTransforms(i.x, a, xKeys, o ? o.x : void 0, s ? s.x : void 0), removeAxisTransforms(i.y, a, yKeys, o ? o.y : void 0, s ? s.y : void 0);
}
function isAxisDeltaZero(i) {
	return i.translate === 0 && i.scale === 1;
}
function isDeltaZero(i) {
	return isAxisDeltaZero(i.x) && isAxisDeltaZero(i.y);
}
function axisEquals(i, a) {
	return i.min === a.min && i.max === a.max;
}
function boxEquals(i, a) {
	return axisEquals(i.x, a.x) && axisEquals(i.y, a.y);
}
function axisEqualsRounded(i, a) {
	return Math.round(i.min) === Math.round(a.min) && Math.round(i.max) === Math.round(a.max);
}
function boxEqualsRounded(i, a) {
	return axisEqualsRounded(i.x, a.x) && axisEqualsRounded(i.y, a.y);
}
function aspectRatio(i) {
	return calcLength(i.x) / calcLength(i.y);
}
function axisDeltaEquals(i, a) {
	return i.translate === a.translate && i.scale === a.scale && i.originPoint === a.originPoint;
}
var NodeStack = class {
	constructor() {
		this.members = [];
	}
	add(i) {
		addUniqueItem(this.members, i), i.scheduleRender();
	}
	remove(i) {
		if (removeItem(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead) {
			let i = this.members[this.members.length - 1];
			i && this.promote(i);
		}
	}
	relegate(i) {
		let a = this.members.findIndex((a) => i === a);
		if (a === 0) return !1;
		let o;
		for (let i = a; i >= 0; i--) {
			let a = this.members[i];
			if (a.isPresent !== !1) {
				o = a;
				break;
			}
		}
		return o ? (this.promote(o), !0) : !1;
	}
	promote(i, a) {
		let o = this.lead;
		if (i !== o && (this.prevLead = o, this.lead = i, i.show(), o)) {
			o.instance && o.scheduleRender(), i.scheduleRender(), i.resumeFrom = o, a && (i.resumeFrom.preserveOpacity = !0), o.snapshot && (i.snapshot = o.snapshot, i.snapshot.latestValues = o.animationValues || o.latestValues), i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
			let { crossfade: s } = i.options;
			s === !1 && o.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((i) => {
			let { options: a, resumingFrom: o } = i;
			a.onExitComplete && a.onExitComplete(), o && o.options.onExitComplete && o.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach((i) => {
			i.instance && i.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
};
function buildProjectionTransform(i, a, o) {
	let s = "", c = i.x.translate / a.x, l = i.y.translate / a.y, u = o?.z || 0;
	if ((c || l || u) && (s = `translate3d(${c}px, ${l}px, ${u}px) `), (a.x !== 1 || a.y !== 1) && (s += `scale(${1 / a.x}, ${1 / a.y}) `), o) {
		let { transformPerspective: i, rotate: a, rotateX: c, rotateY: l, skewX: u, skewY: d } = o;
		i && (s = `perspective(${i}px) ${s}`), a && (s += `rotate(${a}deg) `), c && (s += `rotateX(${c}deg) `), l && (s += `rotateY(${l}deg) `), u && (s += `skewX(${u}deg) `), d && (s += `skewY(${d}deg) `);
	}
	let d = i.x.scale * a.x, f = i.y.scale * a.y;
	return (d !== 1 || f !== 1) && (s += `scale(${d}, ${f})`), s || "none";
}
var metrics = {
	type: "projectionFrame",
	totalNodes: 0,
	resolvedTargetDeltas: 0,
	recalculatedProjection: 0
}, isDebug = typeof window < "u" && window.MotionDebug !== void 0, transformAxes = [
	"",
	"X",
	"Y",
	"Z"
], hiddenVisibility = { visibility: "hidden" }, animationTarget = 1e3, id = 0;
function resetDistortingTransform(i, a, o, s) {
	let { latestValues: c } = a;
	c[i] && (o[i] = c[i], a.setStaticValue(i, 0), s && (s[i] = 0));
}
function cancelTreeOptimisedTransformAnimations(i) {
	if (i.hasCheckedOptimisedAppear = !0, i.root === i) return;
	let { visualElement: a } = i.options;
	if (!a) return;
	let o = getOptimisedAppearId(a);
	if (window.MotionHasOptimisedAnimation(o, "transform")) {
		let { layout: a, layoutId: s } = i.options;
		window.MotionCancelOptimisedAnimation(o, "transform", frame, !(a || s));
	}
	let { parent: s } = i;
	s && !s.hasCheckedOptimisedAppear && cancelTreeOptimisedTransformAnimations(s);
}
function createProjectionNode({ attachResizeListener: i, defaultParent: a, measureScroll: o, checkIsScrollRoot: s, resetTransform: c }) {
	return class {
		constructor(i = {}, o = a?.()) {
			this.id = id++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, isDebug && (metrics.totalNodes = metrics.resolvedTargetDeltas = metrics.recalculatedProjection = 0), this.nodes.forEach(propagateDirtyNodes), this.nodes.forEach(resolveTargetDelta), this.nodes.forEach(calcProjection), this.nodes.forEach(cleanDirtyNodes), isDebug && window.MotionDebug.record(metrics);
			}, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = o ? o.root || o : this, this.path = o ? [...o.path, o] : [], this.parent = o, this.depth = o ? o.depth + 1 : 0;
			for (let i = 0; i < this.path.length; i++) this.path[i].shouldResetTransform = !0;
			this.root === this && (this.nodes = new FlatTree());
		}
		addEventListener(i, a) {
			return this.eventHandlers.has(i) || this.eventHandlers.set(i, new SubscriptionManager()), this.eventHandlers.get(i).add(a);
		}
		notifyListeners(i, ...a) {
			let o = this.eventHandlers.get(i);
			o && o.notify(...a);
		}
		hasListeners(i) {
			return this.eventHandlers.has(i);
		}
		mount(a, o = this.root.hasTreeAnimated) {
			if (this.instance) return;
			this.isSVG = isSVGElement(a), this.instance = a;
			let { layoutId: s, layout: c, visualElement: l } = this.options;
			if (l && !l.current && l.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), o && (c || s) && (this.isLayoutDirty = !0), i) {
				let o, s = () => this.root.updateBlockedByResize = !1;
				i(a, () => {
					this.root.updateBlockedByResize = !0, o && o(), o = delay(s, 250), globalProjectionState.hasAnimatedSinceResize && (globalProjectionState.hasAnimatedSinceResize = !1, this.nodes.forEach(finishAnimation));
				});
			}
			s && this.root.registerSharedNode(s, this), this.options.animate !== !1 && l && (s || c) && this.addEventListener("didUpdate", ({ delta: i, hasLayoutChanged: a, hasRelativeTargetChanged: o, layout: s }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let c = this.options.transition || l.getDefaultTransition() || defaultLayoutTransition, { onLayoutAnimationStart: u, onLayoutAnimationComplete: d } = l.getProps(), f = !this.targetLayout || !boxEqualsRounded(this.targetLayout, s) || o, p = !a && o;
				if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || p || a && (f || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(i, p);
					let a = {
						...getValueTransition(c, "layout"),
						onPlay: u,
						onComplete: d
					};
					(l.shouldReduceMotion || this.options.layoutRoot) && (a.delay = 0, a.type = !1), this.startAnimation(a);
				} else a || finishAnimation(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = s;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let i = this.getStack();
			i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, cancelFrame(this.updateProjection);
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
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(resetSkewAndRotation), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: i } = this.options;
			return i && i.getProps().transformTemplate;
		}
		willUpdate(i = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && cancelTreeOptimisedTransformAnimations(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let i = 0; i < this.path.length; i++) {
				let a = this.path[i];
				a.shouldResetTransform = !0, a.updateScroll("snapshot"), a.options.layoutRoot && a.willUpdate(!1);
			}
			let { layoutId: a, layout: o } = this.options;
			if (a === void 0 && !o) return;
			let s = this.getTransformTemplate();
			this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(clearMeasurements);
				return;
			}
			this.isUpdating || this.nodes.forEach(clearIsLayoutDirty), this.isUpdating = !1, this.nodes.forEach(resetTransformStyle), this.nodes.forEach(updateLayout), this.nodes.forEach(notifyLayoutUpdate), this.clearAllSnapshots();
			let i = time.now();
			frameData.delta = clamp(0, 1e3 / 60, i - frameData.timestamp), frameData.timestamp = i, frameData.isProcessing = !0, frameSteps.update.process(frameData), frameSteps.preRender.process(frameData), frameSteps.render.process(frameData), frameData.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, microtask.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(clearSnapshot), this.sharedNodes.forEach(removeLeadSnapshots);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, frame.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			frame.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure());
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let i = 0; i < this.path.length; i++) this.path[i].updateScroll();
			let i = this.layout;
			this.layout = this.measure(!1), this.layoutCorrected = createBox(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: a } = this.options;
			a && a.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
		}
		updateScroll(i = "measure") {
			let a = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1), a) {
				let a = s(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: i,
					isRoot: a,
					offset: o(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : a
				};
			}
		}
		resetTransform() {
			if (!c) return;
			let i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !isDeltaZero(this.projectionDelta), o = this.getTransformTemplate(), s = o ? o(this.latestValues, "") : void 0, l = s !== this.prevTransformTemplateValue;
			i && (a || hasTransform(this.latestValues) || l) && (c(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(i = !0) {
			let a = this.measurePageBox(), o = this.removeElementScroll(a);
			return i && (o = this.removeTransform(o)), roundBox(o), {
				animationId: this.root.animationId,
				measuredBox: a,
				layoutBox: o,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: i } = this.options;
			if (!i) return createBox();
			let a = i.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot))) {
				let { scroll: i } = this.root;
				i && (translateAxis(a.x, i.offset.x), translateAxis(a.y, i.offset.y));
			}
			return a;
		}
		removeElementScroll(i) {
			let a = createBox();
			if (copyBoxInto(a, i), this.scroll?.wasRoot) return a;
			for (let o = 0; o < this.path.length; o++) {
				let s = this.path[o], { scroll: c, options: l } = s;
				s !== this.root && c && l.layoutScroll && (c.wasRoot && copyBoxInto(a, i), translateAxis(a.x, c.offset.x), translateAxis(a.y, c.offset.y));
			}
			return a;
		}
		applyTransform(i, a = !1) {
			let o = createBox();
			copyBoxInto(o, i);
			for (let i = 0; i < this.path.length; i++) {
				let s = this.path[i];
				!a && s.options.layoutScroll && s.scroll && s !== s.root && transformBox(o, {
					x: -s.scroll.offset.x,
					y: -s.scroll.offset.y
				}), hasTransform(s.latestValues) && transformBox(o, s.latestValues);
			}
			return hasTransform(this.latestValues) && transformBox(o, this.latestValues), o;
		}
		removeTransform(i) {
			let a = createBox();
			copyBoxInto(a, i);
			for (let i = 0; i < this.path.length; i++) {
				let o = this.path[i];
				if (!o.instance || !hasTransform(o.latestValues)) continue;
				hasScale(o.latestValues) && o.updateSnapshot();
				let s = createBox();
				copyBoxInto(s, o.measurePageBox()), removeBoxTransforms(a, o.latestValues, o.snapshot ? o.snapshot.layoutBox : void 0, s);
			}
			return hasTransform(this.latestValues) && removeBoxTransforms(a, this.latestValues), a;
		}
		setTargetDelta(i) {
			this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(i) {
			this.options = {
				...this.options,
				...i,
				crossfade: i.crossfade === void 0 ? !0 : i.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(i = !1) {
			let a = this.getLead();
			this.isProjectionDirty ||= a.isProjectionDirty, this.isTransformDirty ||= a.isTransformDirty, this.isSharedProjectionDirty ||= a.isSharedProjectionDirty;
			let o = !!this.resumingFrom || this !== a;
			if (!(i || o && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: s, layoutId: c } = this.options;
			if (!(!this.layout || !(s || c))) {
				if (this.resolvedRelativeTargetAt = frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
					let i = this.getClosestProjectingParent();
					i && i.layout && this.animationProgress !== 1 ? (this.relativeParent = i, this.forceRelativeParentToResolveTarget(), this.relativeTarget = createBox(), this.relativeTargetOrigin = createBox(), calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, i.layout.layoutBox), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (this.target || (this.target = createBox(), this.targetWithTransforms = createBox()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : copyBoxInto(this.target, this.layout.layoutBox), applyBoxDelta(this.target, this.targetDelta)) : copyBoxInto(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
						this.attemptToResolveRelativeTarget = !1;
						let i = this.getClosestProjectingParent();
						i && !!i.resumingFrom == !!this.resumingFrom && !i.options.layoutScroll && i.target && this.animationProgress !== 1 ? (this.relativeParent = i, this.forceRelativeParentToResolveTarget(), this.relativeTarget = createBox(), this.relativeTargetOrigin = createBox(), calcRelativePosition(this.relativeTargetOrigin, this.target, i.target), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
					}
					isDebug && metrics.resolvedTargetDeltas++;
				}
			}
		}
		getClosestProjectingParent() {
			if (!(!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		calcProjection() {
			let i = this.getLead(), a = !!this.resumingFrom || this !== i, o = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (o = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (o = !1), this.resolvedRelativeTargetAt === frameData.timestamp && (o = !1), o) return;
			let { layout: s, layoutId: c } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(s || c)) return;
			copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
			let l = this.treeScale.x, u = this.treeScale.y;
			applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, a), i.layout && !i.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (i.target = i.layout.layoutBox, i.targetWithTransforms = createBox());
			let { target: d } = i;
			if (!d) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x), copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y)), calcBoxDelta(this.projectionDelta, this.layoutCorrected, d, this.latestValues), (this.treeScale.x !== l || this.treeScale.y !== u || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", d)), isDebug && metrics.recalculatedProjection++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(i = !0) {
			var a;
			if ((a = this.options.visualElement) == null || a.scheduleRender(), i) {
				let i = this.getStack();
				i && i.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = createDelta(), this.projectionDelta = createDelta(), this.projectionDeltaWithTransform = createDelta();
		}
		setAnimationOrigin(i, a = !1) {
			let o = this.snapshot, s = o ? o.latestValues : {}, c = { ...this.latestValues }, l = createDelta();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
			let u = createBox(), d = (o ? o.source : void 0) !== (this.layout ? this.layout.source : void 0), f = this.getStack(), p = !f || f.members.length <= 1, m = !!(d && !p && this.options.crossfade === !0 && !this.path.some(hasOpacityCrossfade));
			this.animationProgress = 0;
			let h;
			this.mixTargetDelta = (a) => {
				let o = a / 1e3;
				mixAxisDelta(l.x, i.x, o), mixAxisDelta(l.y, i.y, o), this.setTargetDelta(l), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (calcRelativePosition(u, this.layout.layoutBox, this.relativeParent.layout.layoutBox), mixBox(this.relativeTarget, this.relativeTargetOrigin, u, o), h && boxEquals(this.relativeTarget, h) && (this.isProjectionDirty = !1), h ||= createBox(), copyBoxInto(h, this.relativeTarget)), d && (this.animationValues = c, mixValues(c, s, this.latestValues, o, m, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = o;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(i) {
			this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation &&= (cancelFrame(this.pendingAnimation), void 0), this.pendingAnimation = frame.update(() => {
				globalProjectionState.hasAnimatedSinceResize = !0, this.currentAnimation = animateSingleValue(0, animationTarget, {
					...i,
					onUpdate: (a) => {
						this.mixTargetDelta(a), i.onUpdate && i.onUpdate(a);
					},
					onComplete: () => {
						i.onComplete && i.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let i = this.getStack();
			i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(animationTarget), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let i = this.getLead(), { targetWithTransforms: a, target: o, layout: s, latestValues: c } = i;
			if (!(!a || !o || !s)) {
				if (this !== i && this.layout && s && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
					o = this.target || createBox();
					let a = calcLength(this.layout.layoutBox.x);
					o.x.min = i.target.x.min, o.x.max = o.x.min + a;
					let s = calcLength(this.layout.layoutBox.y);
					o.y.min = i.target.y.min, o.y.max = o.y.min + s;
				}
				copyBoxInto(a, o), transformBox(a, c), calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
			}
		}
		registerSharedNode(i, a) {
			this.sharedNodes.has(i) || this.sharedNodes.set(i, new NodeStack()), this.sharedNodes.get(i).add(a);
			let o = a.options.initialPromotionConfig;
			a.promote({
				transition: o ? o.transition : void 0,
				preserveFollowOpacity: o && o.shouldPreserveFollowOpacity ? o.shouldPreserveFollowOpacity(a) : void 0
			});
		}
		isLead() {
			let i = this.getStack();
			return i ? i.lead === this : !0;
		}
		getLead() {
			let { layoutId: i } = this.options;
			return i && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: i } = this.options;
			return i ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: i } = this.options;
			if (i) return this.root.sharedNodes.get(i);
		}
		promote({ needsReset: i, transition: a, preserveFollowOpacity: o } = {}) {
			let s = this.getStack();
			s && s.promote(this, o), i && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
		}
		relegate() {
			let i = this.getStack();
			return i ? i.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: i } = this.options;
			if (!i) return;
			let a = !1, { latestValues: o } = i;
			if ((o.z || o.rotate || o.rotateX || o.rotateY || o.rotateZ || o.skewX || o.skewY) && (a = !0), !a) return;
			let s = {};
			o.z && resetDistortingTransform("z", i, s, this.animationValues);
			for (let a = 0; a < transformAxes.length; a++) resetDistortingTransform(`rotate${transformAxes[a]}`, i, s, this.animationValues), resetDistortingTransform(`skew${transformAxes[a]}`, i, s, this.animationValues);
			for (let a in i.render(), s) i.setStaticValue(a, s[a]), this.animationValues && (this.animationValues[a] = s[a]);
			i.scheduleRender();
		}
		getProjectionStyles(i) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) return hiddenVisibility;
			let a = { visibility: "" }, o = this.getTransformTemplate();
			if (this.needsReset) return this.needsReset = !1, a.opacity = "", a.pointerEvents = resolveMotionValue(i?.pointerEvents) || "", a.transform = o ? o(this.latestValues, "") : "none", a;
			let s = this.getLead();
			if (!this.projectionDelta || !this.layout || !s.target) {
				let a = {};
				return this.options.layoutId && (a.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, a.pointerEvents = resolveMotionValue(i?.pointerEvents) || ""), this.hasProjected && !hasTransform(this.latestValues) && (a.transform = o ? o({}, "") : "none", this.hasProjected = !1), a;
			}
			let c = s.animationValues || s.latestValues;
			this.applyTransformsToTarget(), a.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, c), o && (a.transform = o(c, a.transform));
			let { x: l, y: u } = this.projectionDelta;
			for (let i in a.transformOrigin = `${l.origin * 100}% ${u.origin * 100}% 0`, s.animationValues ? a.opacity = s === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : a.opacity = s === this ? c.opacity === void 0 ? "" : c.opacity : c.opacityExit === void 0 ? 0 : c.opacityExit, scaleCorrectors) {
				if (c[i] === void 0) continue;
				let { correct: o, applyTo: l } = scaleCorrectors[i], u = a.transform === "none" ? c[i] : o(c[i], s);
				if (l) {
					let i = l.length;
					for (let o = 0; o < i; o++) a[l[o]] = u;
				} else a[i] = u;
			}
			return this.options.layoutId && (a.pointerEvents = s === this ? resolveMotionValue(i?.pointerEvents) || "" : "none"), a;
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((i) => i.currentAnimation?.stop()), this.root.nodes.forEach(clearMeasurements), this.root.sharedNodes.clear();
		}
	};
}
function updateLayout(i) {
	i.updateLayout();
}
function notifyLayoutUpdate(i) {
	let a = i.resumeFrom?.snapshot || i.snapshot;
	if (i.isLead() && i.layout && a && i.hasListeners("didUpdate")) {
		let { layoutBox: o, measuredBox: s } = i.layout, { animationType: c } = i.options, l = a.source !== i.layout.source;
		c === "size" ? eachAxis((i) => {
			let s = l ? a.measuredBox[i] : a.layoutBox[i], c = calcLength(s);
			s.min = o[i].min, s.max = s.min + c;
		}) : shouldAnimatePositionOnly(c, a.layoutBox, o) && eachAxis((s) => {
			let c = l ? a.measuredBox[s] : a.layoutBox[s], u = calcLength(o[s]);
			c.max = c.min + u, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[s].max = i.relativeTarget[s].min + u);
		});
		let u = createDelta();
		calcBoxDelta(u, o, a.layoutBox);
		let d = createDelta();
		l ? calcBoxDelta(d, i.applyTransform(s, !0), a.measuredBox) : calcBoxDelta(d, o, a.layoutBox);
		let f = !isDeltaZero(u), p = !1;
		if (!i.resumeFrom) {
			let s = i.getClosestProjectingParent();
			if (s && !s.resumeFrom) {
				let { snapshot: c, layout: l } = s;
				if (c && l) {
					let u = createBox();
					calcRelativePosition(u, a.layoutBox, c.layoutBox);
					let d = createBox();
					calcRelativePosition(d, o, l.layoutBox), boxEqualsRounded(u, d) || (p = !0), s.options.layoutRoot && (i.relativeTarget = d, i.relativeTargetOrigin = u, i.relativeParent = s);
				}
			}
		}
		i.notifyListeners("didUpdate", {
			layout: o,
			snapshot: a,
			delta: d,
			layoutDelta: u,
			hasLayoutChanged: f,
			hasRelativeTargetChanged: p
		});
	} else if (i.isLead()) {
		let { onExitComplete: a } = i.options;
		a && a();
	}
	i.options.transition = void 0;
}
function propagateDirtyNodes(i) {
	isDebug && metrics.totalNodes++, i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty ||= !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty), i.isTransformDirty ||= i.parent.isTransformDirty);
}
function cleanDirtyNodes(i) {
	i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function clearSnapshot(i) {
	i.clearSnapshot();
}
function clearMeasurements(i) {
	i.clearMeasurements();
}
function clearIsLayoutDirty(i) {
	i.isLayoutDirty = !1;
}
function resetTransformStyle(i) {
	let { visualElement: a } = i.options;
	a && a.getProps().onBeforeLayoutMeasure && a.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function finishAnimation(i) {
	i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function resolveTargetDelta(i) {
	i.resolveTargetDelta();
}
function calcProjection(i) {
	i.calcProjection();
}
function resetSkewAndRotation(i) {
	i.resetSkewAndRotation();
}
function removeLeadSnapshots(i) {
	i.removeLeadSnapshot();
}
function mixAxisDelta(i, a, o) {
	i.translate = mixNumber(a.translate, 0, o), i.scale = mixNumber(a.scale, 1, o), i.origin = a.origin, i.originPoint = a.originPoint;
}
function mixAxis(i, a, o, s) {
	i.min = mixNumber(a.min, o.min, s), i.max = mixNumber(a.max, o.max, s);
}
function mixBox(i, a, o, s) {
	mixAxis(i.x, a.x, o.x, s), mixAxis(i.y, a.y, o.y, s);
}
function hasOpacityCrossfade(i) {
	return i.animationValues && i.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, userAgentContains = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(i) {
	i.min = roundPoint(i.min), i.max = roundPoint(i.max);
}
function roundBox(i) {
	roundAxis(i.x), roundAxis(i.y);
}
function shouldAnimatePositionOnly(i, a, o) {
	return i === "position" || i === "preserve-aspect" && !isNear(aspectRatio(a), aspectRatio(o), .2);
}
function checkNodeWasScrollRoot(i) {
	return i !== i.root && i.scroll?.wasRoot;
}
var DocumentProjectionNode = createProjectionNode({
	attachResizeListener: (i, a) => addDomEvent(i, "resize", a),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body.scrollLeft,
		y: document.documentElement.scrollTop || document.body.scrollTop
	}),
	checkIsScrollRoot: () => !0
}), rootProjectionNode = { current: void 0 }, HTMLProjectionNode = createProjectionNode({
	measureScroll: (i) => ({
		x: i.scrollLeft,
		y: i.scrollTop
	}),
	defaultParent: () => {
		if (!rootProjectionNode.current) {
			let i = new DocumentProjectionNode({});
			i.mount(window), i.setOptions({ layoutScroll: !0 }), rootProjectionNode.current = i;
		}
		return rootProjectionNode.current;
	},
	resetTransform: (i, a) => {
		i.style.transform = a === void 0 ? "none" : a;
	},
	checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), drag = {
	pan: { Feature: PanGesture },
	drag: {
		Feature: DragGesture,
		ProjectionNode: HTMLProjectionNode,
		MeasureLayout
	}
};
function handleHoverEvent(i, a, o) {
	let { props: s } = i;
	i.animationState && s.whileHover && i.animationState.setActive("whileHover", o === "Start");
	let c = s["onHover" + o];
	c && frame.postRender(() => c(a, extractEventInfo(a)));
}
var HoverGesture = class extends Feature {
	mount() {
		let { current: i } = this.node;
		i && (this.unmount = hover(i, (i) => (handleHoverEvent(this.node, i, "Start"), (i) => handleHoverEvent(this.node, i, "End"))));
	}
	unmount() {}
}, FocusGesture = class extends Feature {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let i = !1;
		try {
			i = this.node.current.matches(":focus-visible");
		} catch {
			i = !0;
		}
		!i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
function handlePressEvent(i, a, o) {
	let { props: s } = i;
	i.animationState && s.whileTap && i.animationState.setActive("whileTap", o === "Start");
	let c = s["onTap" + (o === "End" ? "" : o)];
	c && frame.postRender(() => c(a, extractEventInfo(a)));
}
var PressGesture = class extends Feature {
	mount() {
		let { current: i } = this.node;
		i && (this.unmount = press(i, (i) => (handlePressEvent(this.node, i, "Start"), (i, { success: a }) => handlePressEvent(this.node, i, a ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
	}
	unmount() {}
}, observerCallbacks = /* @__PURE__ */ new WeakMap(), observers = /* @__PURE__ */ new WeakMap(), fireObserverCallback = (i) => {
	let a = observerCallbacks.get(i.target);
	a && a(i);
}, fireAllObserverCallbacks = (i) => {
	i.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root: i, ...a }) {
	let o = i || document;
	observers.has(o) || observers.set(o, {});
	let s = observers.get(o), c = JSON.stringify(a);
	return s[c] || (s[c] = new IntersectionObserver(fireAllObserverCallbacks, {
		root: i,
		...a
	})), s[c];
}
function observeIntersection(i, a, o) {
	let s = initIntersectionObserver(a);
	return observerCallbacks.set(i, o), s.observe(i), () => {
		observerCallbacks.delete(i), s.unobserve(i);
	};
}
var thresholdNames = {
	some: 0,
	all: 1
}, InViewFeature = class extends Feature {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.unmount();
		let { viewport: i = {} } = this.node.getProps(), { root: a, margin: o, amount: s = "some", once: c } = i, l = {
			root: a ? a.current : void 0,
			rootMargin: o,
			threshold: typeof s == "number" ? s : thresholdNames[s]
		};
		return observeIntersection(this.node.current, l, (i) => {
			let { isIntersecting: a } = i;
			if (this.isInView === a || (this.isInView = a, c && !a && this.hasEnteredView)) return;
			a && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", a);
			let { onViewportEnter: o, onViewportLeave: s } = this.node.getProps(), l = a ? o : s;
			l && l(i);
		});
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: i, prevProps: a } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(hasViewportOptionChanged(i, a)) && this.startObserver();
	}
	unmount() {}
};
function hasViewportOptionChanged({ viewport: i = {} }, { viewport: a = {} } = {}) {
	return (o) => i[o] !== a[o];
}
var gestureAnimations = {
	inView: { Feature: InViewFeature },
	tap: { Feature: PressGesture },
	focus: { Feature: FocusGesture },
	hover: { Feature: HoverGesture }
}, layout = { layout: {
	ProjectionNode: HTMLProjectionNode,
	MeasureLayout
} }, prefersReducedMotion = { current: null }, hasReducedMotionListener = { current: !1 };
function initPrefersReducedMotion() {
	if (hasReducedMotionListener.current = !0, isBrowser) if (window.matchMedia) {
		let i = window.matchMedia("(prefers-reduced-motion)"), a = () => prefersReducedMotion.current = i.matches;
		i.addListener(a), a();
	} else prefersReducedMotion.current = !1;
}
var valueTypes = [
	...dimensionValueTypes,
	color,
	complex
], findValueType = (i) => valueTypes.find(testValueType(i)), visualElementStore = /* @__PURE__ */ new WeakMap();
function updateMotionValuesFromProps(i, a, o) {
	for (let s in a) {
		let c = a[s], l = o[s];
		if (isMotionValue(c)) i.addValue(s, c), process.env.NODE_ENV === "development" && warnOnce(c.version === "11.18.2", `Attempting to mix Motion versions ${c.version} with 11.18.2 may not work as expected.`);
		else if (isMotionValue(l)) i.addValue(s, motionValue(c, { owner: i }));
		else if (l !== c) if (i.hasValue(s)) {
			let a = i.getValue(s);
			a.liveStyle === !0 ? a.jump(c) : a.hasAnimated || a.set(c);
		} else {
			let a = i.getStaticValue(s);
			i.addValue(s, motionValue(a === void 0 ? c : a, { owner: i }));
		}
	}
	for (let s in o) a[s] === void 0 && i.removeValue(s);
	return a;
}
var propEventHandlers = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], VisualElement = class {
	scrapeMotionValuesFromProps(i, a, o) {
		return {};
	}
	constructor({ parent: i, props: a, presenceContext: o, reducedMotionConfig: s, blockInitialAnimation: c, visualState: l }, u = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = KeyframeResolver, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let i = time.now();
			this.renderScheduledAt < i && (this.renderScheduledAt = i, frame.render(this.render, !1, !0));
		};
		let { latestValues: d, renderState: f, onUpdate: p } = l;
		this.onUpdate = p, this.latestValues = d, this.baseTarget = { ...d }, this.initialValues = a.initial ? { ...d } : {}, this.renderState = f, this.parent = i, this.props = a, this.presenceContext = o, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = s, this.options = u, this.blockInitialAnimation = !!c, this.isControllingVariants = isControllingVariants(a), this.isVariantNode = isVariantNode(a), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(i && i.current);
		let { willChange: m, ...h } = this.scrapeMotionValuesFromProps(a, {}, this);
		for (let i in h) {
			let a = h[i];
			d[i] !== void 0 && isMotionValue(a) && a.set(d[i], !1);
		}
	}
	mount(i) {
		this.current = i, visualElementStore.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((i, a) => this.bindToMotionValue(a, i)), hasReducedMotionListener.current || initPrefersReducedMotion(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : prefersReducedMotion.current, process.env.NODE_ENV !== "production" && warnOnce(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
	}
	unmount() {
		for (let i in visualElementStore.delete(this.current), this.projection && this.projection.unmount(), cancelFrame(this.notifyUpdate), cancelFrame(this.render), this.valueSubscriptions.forEach((i) => i()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[i].clear();
		for (let i in this.features) {
			let a = this.features[i];
			a && (a.unmount(), a.isMounted = !1);
		}
		this.current = null;
	}
	bindToMotionValue(i, a) {
		this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
		let o = transformProps.has(i), s = a.on("change", (a) => {
			this.latestValues[i] = a, this.props.onUpdate && frame.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0);
		}), c = a.on("renderRequest", this.scheduleRender), l;
		window.MotionCheckAppearSync && (l = window.MotionCheckAppearSync(this, i, a)), this.valueSubscriptions.set(i, () => {
			s(), c(), l && l(), a.owner && a.stop();
		});
	}
	sortNodePosition(i) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current);
	}
	updateFeatures() {
		let i = "animation";
		for (i in featureDefinitions) {
			let a = featureDefinitions[i];
			if (!a) continue;
			let { isEnabled: o, Feature: s } = a;
			if (!this.features[i] && s && o(this.props) && (this.features[i] = new s(this)), this.features[i]) {
				let a = this.features[i];
				a.isMounted ? a.update() : (a.mount(), a.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
	}
	getStaticValue(i) {
		return this.latestValues[i];
	}
	setStaticValue(i, a) {
		this.latestValues[i] = a;
	}
	update(i, a) {
		(i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = i, this.prevPresenceContext = this.presenceContext, this.presenceContext = a;
		for (let a = 0; a < propEventHandlers.length; a++) {
			let o = propEventHandlers[a];
			this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
			let s = i["on" + o];
			s && (this.propEventSubscriptions[o] = this.on(o, s));
		}
		this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(i, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
	}
	getProps() {
		return this.props;
	}
	getVariant(i) {
		return this.props.variants ? this.props.variants[i] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(i) {
		let a = this.getClosestVariantNode();
		if (a) return a.variantChildren && a.variantChildren.add(i), () => a.variantChildren.delete(i);
	}
	addValue(i, a) {
		let o = this.values.get(i);
		a !== o && (o && this.removeValue(i), this.bindToMotionValue(i, a), this.values.set(i, a), this.latestValues[i] = a.get());
	}
	removeValue(i) {
		this.values.delete(i);
		let a = this.valueSubscriptions.get(i);
		a && (a(), this.valueSubscriptions.delete(i)), delete this.latestValues[i], this.removeValueFromRenderState(i, this.renderState);
	}
	hasValue(i) {
		return this.values.has(i);
	}
	getValue(i, a) {
		if (this.props.values && this.props.values[i]) return this.props.values[i];
		let o = this.values.get(i);
		return o === void 0 && a !== void 0 && (o = motionValue(a === null ? void 0 : a, { owner: this }), this.addValue(i, o)), o;
	}
	readValue(i, a) {
		let o = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
		return o != null && (typeof o == "string" && (isNumericalString(o) || isZeroValueString(o)) ? o = parseFloat(o) : !findValueType(o) && complex.test(a) && (o = getAnimatableNone(i, a)), this.setBaseTarget(i, isMotionValue(o) ? o.get() : o)), isMotionValue(o) ? o.get() : o;
	}
	setBaseTarget(i, a) {
		this.baseTarget[i] = a;
	}
	getBaseTarget(i) {
		let { initial: a } = this.props, o;
		if (typeof a == "string" || typeof a == "object") {
			let s = resolveVariantFromProps(this.props, a, this.presenceContext?.custom);
			s && (o = s[i]);
		}
		if (a && o !== void 0) return o;
		let s = this.getBaseTargetFromProps(this.props, i);
		return s !== void 0 && !isMotionValue(s) ? s : this.initialValues[i] !== void 0 && o === void 0 ? void 0 : this.baseTarget[i];
	}
	on(i, a) {
		return this.events[i] || (this.events[i] = new SubscriptionManager()), this.events[i].add(a);
	}
	notify(i, ...a) {
		this.events[i] && this.events[i].notify(...a);
	}
}, DOMVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments), this.KeyframeResolver = DOMKeyframesResolver;
	}
	sortInstanceNodePosition(i, a) {
		return i.compareDocumentPosition(a) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(i, a) {
		return i.style ? i.style[a] : void 0;
	}
	removeValueFromRenderState(i, { vars: a, style: o }) {
		delete a[i], delete o[i];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: i } = this.props;
		isMotionValue(i) && (this.childSubscription = i.on("change", (i) => {
			this.current && (this.current.textContent = `${i}`);
		}));
	}
};
function getComputedStyle$1(i) {
	return window.getComputedStyle(i);
}
var HTMLVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = renderHTML;
	}
	readValueFromInstance(i, a) {
		if (transformProps.has(a)) {
			let i = getDefaultValueType(a);
			return i && i.default || 0;
		} else {
			let o = getComputedStyle$1(i), s = (isCSSVariableName(a) ? o.getPropertyValue(a) : o[a]) || 0;
			return typeof s == "string" ? s.trim() : s;
		}
	}
	measureInstanceViewportBox(i, { transformPagePoint: a }) {
		return measureViewportBox(i, a);
	}
	build(i, a, o) {
		buildHTMLStyles(i, a, o.transformTemplate);
	}
	scrapeMotionValuesFromProps(i, a, o) {
		return scrapeMotionValuesFromProps$1(i, a, o);
	}
}, SVGVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = createBox;
	}
	getBaseTargetFromProps(i, a) {
		return i[a];
	}
	readValueFromInstance(i, a) {
		if (transformProps.has(a)) {
			let i = getDefaultValueType(a);
			return i && i.default || 0;
		}
		return a = camelCaseAttributes.has(a) ? a : camelToDash(a), i.getAttribute(a);
	}
	scrapeMotionValuesFromProps(i, a, o) {
		return scrapeMotionValuesFromProps(i, a, o);
	}
	build(i, a, o) {
		buildSVGAttrs(i, a, this.isSVGTag, o.transformTemplate);
	}
	renderInstance(i, a, o, s) {
		renderSVG(i, a, o, s);
	}
	mount(i) {
		this.isSVGTag = isSVGTag(i.tagName), super.mount(i);
	}
}, createDomVisualElement = (i, a) => isSVGComponent(i) ? new SVGVisualElement(a) : new HTMLVisualElement(a, { allowProjection: i !== Fragment }), motion = /* @__PURE__ */ createDOMMotionComponentProxy(/* @__PURE__ */ createMotionComponentFactory({
	...animations,
	...gestureAnimations,
	...drag,
	...layout
}, createDomVisualElement)), COLLAPSIBLE_NAME = "Collapsible", [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME), [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME), Collapsible$1 = React$1.forwardRef((i, a) => {
	let { __scopeCollapsible: o, open: s, defaultOpen: c, disabled: l, onOpenChange: u, ...d } = i, [f, p] = useControllableState({
		prop: s,
		defaultProp: c ?? !1,
		onChange: u,
		caller: COLLAPSIBLE_NAME
	});
	return /* @__PURE__ */ jsx(CollapsibleProvider, {
		scope: o,
		disabled: l,
		contentId: useId$1(),
		open: f,
		onOpenToggle: React$1.useCallback(() => p((i) => !i), [p]),
		children: /* @__PURE__ */ jsx(Primitive.div, {
			"data-state": getState$1(f),
			"data-disabled": l ? "" : void 0,
			...d,
			ref: a
		})
	});
});
Collapsible$1.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME$1 = "CollapsibleTrigger", CollapsibleTrigger$1 = React$1.forwardRef((i, a) => {
	let { __scopeCollapsible: o, ...c } = i, l = useCollapsibleContext(TRIGGER_NAME$1, o);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		"aria-controls": l.contentId,
		"aria-expanded": l.open || !1,
		"data-state": getState$1(l.open),
		"data-disabled": l.disabled ? "" : void 0,
		disabled: l.disabled,
		...c,
		ref: a,
		onClick: composeEventHandlers(i.onClick, l.onOpenToggle)
	});
});
CollapsibleTrigger$1.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "CollapsibleContent", CollapsibleContent$1 = React$1.forwardRef((i, a) => {
	let { forceMount: o, ...s } = i, c = useCollapsibleContext(CONTENT_NAME$1, i.__scopeCollapsible);
	return /* @__PURE__ */ jsx(Presence, {
		present: o || c.open,
		children: ({ present: i }) => /* @__PURE__ */ jsx(CollapsibleContentImpl, {
			...s,
			ref: a,
			present: i
		})
	});
});
CollapsibleContent$1.displayName = CONTENT_NAME$1;
var CollapsibleContentImpl = React$1.forwardRef((i, a) => {
	let { __scopeCollapsible: o, present: s, children: c, ...l } = i, d = useCollapsibleContext(CONTENT_NAME$1, o), [f, p] = React$1.useState(s), h = React$1.useRef(null), g = useComposedRefs(a, h), _ = React$1.useRef(0), v = _.current, y = React$1.useRef(0), b = y.current, x = d.open || f, S = React$1.useRef(x), C = React$1.useRef(void 0);
	return React$1.useEffect(() => {
		let i = requestAnimationFrame(() => S.current = !1);
		return () => cancelAnimationFrame(i);
	}, []), useLayoutEffect2(() => {
		let i = h.current;
		if (i) {
			C.current = C.current || {
				transitionDuration: i.style.transitionDuration,
				animationName: i.style.animationName
			}, i.style.transitionDuration = "0s", i.style.animationName = "none";
			let a = i.getBoundingClientRect();
			_.current = a.height, y.current = a.width, S.current || (i.style.transitionDuration = C.current.transitionDuration, i.style.animationName = C.current.animationName), p(s);
		}
	}, [d.open, s]), /* @__PURE__ */ jsx(Primitive.div, {
		"data-state": getState$1(d.open),
		"data-disabled": d.disabled ? "" : void 0,
		id: d.contentId,
		hidden: !x,
		...l,
		ref: g,
		style: {
			"--radix-collapsible-content-height": v ? `${v}px` : void 0,
			"--radix-collapsible-content-width": b ? `${b}px` : void 0,
			...i.style
		},
		children: x && c
	});
});
function getState$1(i) {
	return i ? "open" : "closed";
}
var Root$1 = Collapsible$1;
function Collapsible({ ...i }) {
	return /* @__PURE__ */ jsx(Root$1, {
		"data-slot": "collapsible",
		...i
	});
}
function CollapsibleTrigger({ ...i }) {
	return /* @__PURE__ */ jsx(CollapsibleTrigger$1, {
		"data-slot": "collapsible-trigger",
		...i
	});
}
function CollapsibleContent({ ...i }) {
	return /* @__PURE__ */ jsx(CollapsibleContent$1, {
		"data-slot": "collapsible-content",
		...i
	});
}
const FilePreview = React.forwardRef((i, a) => i.file.type.startsWith("image/") ? /* @__PURE__ */ jsx(ImageFilePreview, {
	...i,
	ref: a
}) : i.file.type.startsWith("text/") || i.file.name.endsWith(".txt") || i.file.name.endsWith(".md") ? /* @__PURE__ */ jsx(TextFilePreview, {
	...i,
	ref: a
}) : /* @__PURE__ */ jsx(GenericFilePreview, {
	...i,
	ref: a
}));
FilePreview.displayName = "FilePreview";
var ImageFilePreview = React.forwardRef(({ file: i, onRemove: a }, o) => /* @__PURE__ */ jsxs(motion.div, {
	ref: o,
	className: "relative flex max-w-[200px] rounded-md border p-1.5 pr-2 text-xs",
	layout: !0,
	initial: {
		opacity: 0,
		y: "100%"
	},
	animate: {
		opacity: 1,
		y: 0
	},
	exit: {
		opacity: 0,
		y: "100%"
	},
	children: [/* @__PURE__ */ jsxs("div", {
		className: "flex w-full items-center space-x-2",
		children: [/* @__PURE__ */ jsx("img", {
			alt: `Attachment ${i.name}`,
			className: "grid h-10 w-10 shrink-0 place-items-center rounded-sm border bg-muted object-cover",
			src: URL.createObjectURL(i)
		}), /* @__PURE__ */ jsx("span", {
			className: "w-full truncate text-muted-foreground",
			children: i.name
		})]
	}), a ? /* @__PURE__ */ jsx("button", {
		className: "absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full border bg-background",
		type: "button",
		onClick: a,
		"aria-label": "Remove attachment",
		children: /* @__PURE__ */ jsx(X, { className: "h-2.5 w-2.5" })
	}) : null]
}));
ImageFilePreview.displayName = "ImageFilePreview";
var TextFilePreview = React.forwardRef(({ file: i, onRemove: a }, o) => {
	let [s, c] = React.useState("");
	return useEffect(() => {
		let a = new FileReader();
		a.onload = (i) => {
			let a = i.target?.result;
			c(a.slice(0, 50) + (a.length > 50 ? "..." : ""));
		}, a.readAsText(i);
	}, [i]), /* @__PURE__ */ jsxs(motion.div, {
		ref: o,
		className: "relative flex max-w-[200px] rounded-md border p-1.5 pr-2 text-xs",
		layout: !0,
		initial: {
			opacity: 0,
			y: "100%"
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: "100%"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex w-full items-center space-x-2",
			children: [/* @__PURE__ */ jsx("div", {
				className: "grid h-10 w-10 shrink-0 place-items-center rounded-sm border bg-muted p-0.5",
				children: /* @__PURE__ */ jsx("div", {
					className: "h-full w-full overflow-hidden text-[6px] leading-none text-muted-foreground",
					children: s || "Loading..."
				})
			}), /* @__PURE__ */ jsx("span", {
				className: "w-full truncate text-muted-foreground",
				children: i.name
			})]
		}), a ? /* @__PURE__ */ jsx("button", {
			className: "absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full border bg-background",
			type: "button",
			onClick: a,
			"aria-label": "Remove attachment",
			children: /* @__PURE__ */ jsx(X, { className: "h-2.5 w-2.5" })
		}) : null]
	});
});
TextFilePreview.displayName = "TextFilePreview";
var GenericFilePreview = React.forwardRef(({ file: i, onRemove: a }, o) => /* @__PURE__ */ jsxs(motion.div, {
	ref: o,
	className: "relative flex max-w-[200px] rounded-md border p-1.5 pr-2 text-xs",
	layout: !0,
	initial: {
		opacity: 0,
		y: "100%"
	},
	animate: {
		opacity: 1,
		y: 0
	},
	exit: {
		opacity: 0,
		y: "100%"
	},
	children: [/* @__PURE__ */ jsxs("div", {
		className: "flex w-full items-center space-x-2",
		children: [/* @__PURE__ */ jsx("div", {
			className: "grid h-10 w-10 shrink-0 place-items-center rounded-sm border bg-muted",
			children: /* @__PURE__ */ jsx(File$1, { className: "h-6 w-6 text-foreground" })
		}), /* @__PURE__ */ jsx("span", {
			className: "w-full truncate text-muted-foreground",
			children: i.name
		})]
	}), a ? /* @__PURE__ */ jsx("button", {
		className: "absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full border bg-background",
		type: "button",
		onClick: a,
		"aria-label": "Remove attachment",
		children: /* @__PURE__ */ jsx(X, { className: "h-2.5 w-2.5" })
	}) : null]
}));
GenericFilePreview.displayName = "GenericFilePreview";
var MarkdownRenderer = React.lazy(() => import("./markdown-renderer-DNmZwRqZ.js"));
function LazyMarkdownRenderer({ children: i, className: a }) {
	return /* @__PURE__ */ jsx(Suspense, {
		fallback: /* @__PURE__ */ jsx("div", { className: "animate-pulse h-4 bg-muted/50 rounded w-1/2" }),
		children: /* @__PURE__ */ jsx(MarkdownRenderer, {
			className: a,
			children: i
		})
	});
}
function TypingIndicator() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center gap-1",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex space-x-0.5",
			children: [
				/* @__PURE__ */ jsx("div", { className: "size-2 rounded-full bg-primary/60 animate-typing-dot-bounce" }),
				/* @__PURE__ */ jsx("div", { className: "size-2 rounded-full bg-primary/60 animate-typing-dot-bounce [animation-delay:500ms]" }),
				/* @__PURE__ */ jsx("div", { className: "size-2 rounded-full bg-primary/60 animate-typing-dot-bounce [animation-delay:1000ms]" })
			]
		})
	});
}
var HOVER_CLOSE_DELAY = 150;
function ToolResult({ toolName: i, result: a }) {
	let [o, s] = useState(!1), c = useRef(null), l = () => {
		c.current &&= (clearTimeout(c.current), null);
	};
	return /* @__PURE__ */ jsxs(Popover, {
		open: o,
		onOpenChange: (i) => {
			i || s(!1);
		},
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ jsxs(Badge, {
				variant: "outline",
				className: "cursor-pointer hover:scale-[0.95]",
				onMouseEnter: () => {
					l(), s(!0);
				},
				onMouseLeave: () => {
					c.current = setTimeout(() => {
						s(!1), c.current = null;
					}, HOVER_CLOSE_DELAY);
				},
				children: [/* @__PURE__ */ jsx(CodeXml, { className: "size-3" }), i]
			})
		}), /* @__PURE__ */ jsxs(PopoverContent, {
			className: "max-h-[80vh] w-96 max-w-[min(90vw,24rem)] flex flex-col p-0",
			align: "start",
			sideOffset: 8,
			onMouseEnter: () => {
				l();
			},
			onMouseLeave: () => {
				s(!1);
			},
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 border-b px-4 py-3",
				children: [/* @__PURE__ */ jsx(CodeXml, { className: "size-5 text-primary shrink-0" }), /* @__PURE__ */ jsxs("span", {
					className: "font-semibold text-sm",
					children: ["Tool Result: ", i]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-auto rounded-b-md bg-muted/30 p-4",
				children: typeof a == "string" ? /* @__PURE__ */ jsx(LazyMarkdownRenderer, { children: a.replace(/\\n/g, "\n") }) : /* @__PURE__ */ jsx("pre", {
					className: "whitespace-pre-wrap text-xs md:text-sm font-mono leading-relaxed",
					children: JSON.stringify(a, null, 2)
				})
			})]
		})]
	});
}
var chatBubbleVariants = cva("group/message relative rounded-lg p-4 text-sm shadow-sm transition-all duration-200 hover:shadow-md", {
	variants: {
		isUser: {
			true: "chat-bubble-user",
			false: "chat-bubble-bot"
		},
		animation: {
			none: "",
			slide: "duration-300 animate-in fade-in-0",
			scale: "duration-300 animate-in fade-in-0 zoom-in-95",
			fade: "duration-500 animate-in fade-in-0"
		}
	},
	compoundVariants: [
		{
			isUser: !0,
			animation: "slide",
			class: "slide-in-from-right"
		},
		{
			isUser: !1,
			animation: "slide",
			class: "slide-in-from-left"
		},
		{
			isUser: !0,
			animation: "scale",
			class: "origin-bottom-right"
		},
		{
			isUser: !1,
			animation: "scale",
			class: "origin-bottom-left"
		}
	]
});
function ChatMessageBubble({ isUser: i, animation: a, actions: o, isGenerating: s, children: c }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn(chatBubbleVariants({
			isUser: i,
			animation: a
		})),
		children: [s && !c ? /* @__PURE__ */ jsx(TypingIndicator, {}) : /* @__PURE__ */ jsx(LazyMarkdownRenderer, { children: typeof c == "string" ? c : "" }), o ? /* @__PURE__ */ jsx("div", {
			className: "absolute -bottom-6 right-2 flex space-x-1 rounded-lg border bg-background/95 backdrop-blur-sm p-1 text-foreground opacity-0 transition-all duration-200 group-hover/message:opacity-100 shadow-sm",
			children: o
		}) : null]
	});
}
function ChatMessageTimestamp({ createdAt: i, animation: a = "scale" }) {
	if (!i) return null;
	let o = i.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit"
	});
	return /* @__PURE__ */ jsx("time", {
		dateTime: i.toISOString(),
		className: cn("mt-1 block px-1 text-xs opacity-60", a !== "none" && "duration-500 animate-in fade-in-0"),
		children: o
	});
}
const ChatMessage = ({ role: i, content: a, createdAt: o, showTimeStamp: s = !1, animation: c = "scale", actions: l, experimental_attachments: u, toolInvocations: f, parts: p, isGenerating: m = !1 }) => {
	let h = i === "user", g = useMemo(() => u?.map((i) => {
		let a = dataUrlToUint8Array(i.url);
		return new File([a], i.name ?? "Unknown", { type: i.contentType });
	}), [u]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-3 min-w-0", h ? "items-end ml-auto max-w-[85%] pr-4" : "items-start mr-auto max-w-[85%] pl-4"),
		children: [
			g && g.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "mb-2 flex flex-wrap gap-2",
				children: g.map((i, a) => /* @__PURE__ */ jsx(FilePreview, { file: i }, a))
			}),
			f && f.length > 0 && /* @__PURE__ */ jsx(ToolCall, { toolInvocations: f }),
			p && p.length > 0 ? p.map((i, a) => i.type === "text" ? /* @__PURE__ */ jsxs("div", {
				className: cn("flex flex-col", h ? "items-end" : "items-start"),
				children: [/* @__PURE__ */ jsx(ChatMessageBubble, {
					isUser: h,
					animation: c,
					actions: l,
					children: i.text
				}), s && /* @__PURE__ */ jsx(ChatMessageTimestamp, {
					createdAt: o,
					animation: c
				})]
			}, `text-${a}`) : i.type === "reasoning" ? /* @__PURE__ */ jsx(ReasoningBlock, { part: i }, `reasoning-${a}`) : i.type === "tool-invocation" ? /* @__PURE__ */ jsx(ToolCall, { toolInvocations: [i.toolInvocation] }, `tool-${a}`) : null) : a || m ? /* @__PURE__ */ jsxs("div", {
				className: cn("flex flex-col", h ? "items-end" : "items-start"),
				children: [/* @__PURE__ */ jsx(ChatMessageBubble, {
					isUser: h,
					animation: c,
					actions: l,
					isGenerating: m,
					children: a
				}), s && /* @__PURE__ */ jsx(ChatMessageTimestamp, {
					createdAt: o,
					animation: c
				})]
			}) : s && /* @__PURE__ */ jsx(ChatMessageTimestamp, {
				createdAt: o,
				animation: c
			})
		]
	});
};
function dataUrlToUint8Array(i) {
	let a = i.split(",")[1], o = atob(a), s = new Uint8Array(o.length);
	for (let i = 0; i < o.length; i++) s[i] = o.charCodeAt(i);
	return s;
}
function ReasoningBlock({ part: i }) {
	let [a, o] = useState(!1);
	return /* @__PURE__ */ jsx("div", {
		className: "mb-3 flex flex-col items-start max-w-[85%] ml-4 mr-auto min-w-0",
		children: /* @__PURE__ */ jsxs(Collapsible, {
			open: a,
			onOpenChange: o,
			className: "group chat-reasoning-block",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex items-center p-3",
				children: /* @__PURE__ */ jsx(CollapsibleTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ jsxs("button", {
						className: "flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-6 w-6 items-center justify-center rounded-full bg-primary/10",
							children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 transition-transform group-data-[state=open]:rotate-90" })
						}), /* @__PURE__ */ jsx("span", {
							className: "font-medium",
							children: "Thinking"
						})]
					})
				})
			}), /* @__PURE__ */ jsx(CollapsibleContent, {
				forceMount: !0,
				children: /* @__PURE__ */ jsx(motion.div, {
					initial: !1,
					animate: a ? "open" : "closed",
					variants: {
						open: {
							height: "auto",
							opacity: 1
						},
						closed: {
							height: 0,
							opacity: 0
						}
					},
					transition: {
						duration: .3,
						ease: [
							.04,
							.62,
							.23,
							.98
						]
					},
					className: "border-t border-border/30",
					children: /* @__PURE__ */ jsx("div", {
						className: "p-3",
						children: /* @__PURE__ */ jsx("div", {
							className: "whitespace-pre-wrap text-sm text-muted-foreground leading-relaxed",
							children: i.reasoning
						})
					})
				})
			})]
		})
	});
}
function ToolCall({ toolInvocations: i }) {
	return i?.length ? /* @__PURE__ */ jsx("div", {
		className: "flex flex-col items-start gap-3 max-w-[85%] ml-4 mr-auto min-w-0",
		children: i.map((i, a) => {
			if (i.state === "result" && i.result?.__cancelled === !0) return /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive shadow-sm",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10",
					children: /* @__PURE__ */ jsx(Ban, { className: "h-3 w-3" })
				}), /* @__PURE__ */ jsxs("span", {
					className: "font-medium",
					children: [
						"Cancelled",
						" ",
						/* @__PURE__ */ jsx("code", {
							className: "rounded bg-destructive/10 px-1.5 py-0.5 text-xs font-mono",
							children: i.toolName
						})
					]
				})]
			}, a);
			switch (i.state) {
				case "result": return /* @__PURE__ */ jsx(ToolResult, {
					toolName: i.toolName,
					result: i.result
				}, a);
				case "partial-call":
				case "call": return /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-primary shadow-sm",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-6 w-6 items-center justify-center rounded-full bg-primary/10",
						children: /* @__PURE__ */ jsx(Terminal, { className: "h-3 w-3" })
					}), /* @__PURE__ */ jsxs("span", {
						className: "font-medium",
						children: [
							"Calling",
							" ",
							/* @__PURE__ */ jsx("code", {
								className: "rounded bg-primary/10 px-1.5 py-0.5 text-xs font-mono",
								children: i.toolName
							})
						]
					})]
				}, a);
				default: return null;
			}
		})
	}) : null;
}
function memo$1(i, a, o) {
	let s = o.initialDeps ?? [], c, l = !0;
	function u() {
		let u;
		o.key && o.debug?.call(o) && (u = Date.now());
		let d = i();
		if (!(d.length !== s.length || d.some((i, a) => s[a] !== i))) return c;
		s = d;
		let f;
		if (o.key && o.debug?.call(o) && (f = Date.now()), c = a(...d), o.key && o.debug?.call(o)) {
			let i = Math.round((Date.now() - u) * 100) / 100, a = Math.round((Date.now() - f) * 100) / 100, s = a / 16, c = (i, a) => {
				for (i = String(i); i.length < a;) i = " " + i;
				return i;
			};
			console.info(`%c⏱ ${c(a, 5)} /${c(i, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * s, 120))}deg 100% 31%);`, o?.key);
		}
		return o?.onChange && !(l && o.skipInitialOnChange) && o.onChange(c), l = !1, c;
	}
	return u.updateDeps = (i) => {
		s = i;
	}, u;
}
function notUndefined(i, a) {
	if (i === void 0) throw Error(`Unexpected undefined${a ? `: ${a}` : ""}`);
	return i;
}
var approxEqual = (i, a) => Math.abs(i - a) < 1.01, debounce = (i, a, o) => {
	let s;
	return function(...c) {
		i.clearTimeout(s), s = i.setTimeout(() => a.apply(this, c), o);
	};
}, getRect = (i) => {
	let { offsetWidth: a, offsetHeight: o } = i;
	return {
		width: a,
		height: o
	};
}, defaultKeyExtractor = (i) => i, defaultRangeExtractor = (i) => {
	let a = Math.max(i.startIndex - i.overscan, 0), o = Math.min(i.endIndex + i.overscan, i.count - 1), s = [];
	for (let i = a; i <= o; i++) s.push(i);
	return s;
}, observeElementRect = (i, a) => {
	let o = i.scrollElement;
	if (!o) return;
	let s = i.targetWindow;
	if (!s) return;
	let c = (i) => {
		let { width: o, height: s } = i;
		a({
			width: Math.round(o),
			height: Math.round(s)
		});
	};
	if (c(getRect(o)), !s.ResizeObserver) return () => {};
	let l = new s.ResizeObserver((a) => {
		let s = () => {
			let i = a[0];
			if (i?.borderBoxSize) {
				let a = i.borderBoxSize[0];
				if (a) {
					c({
						width: a.inlineSize,
						height: a.blockSize
					});
					return;
				}
			}
			c(getRect(o));
		};
		i.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
	});
	return l.observe(o, { box: "border-box" }), () => {
		l.unobserve(o);
	};
}, addEventListenerOptions = { passive: !0 }, supportsScrollend = typeof window > "u" ? !0 : "onscrollend" in window, observeElementOffset = (i, a) => {
	let o = i.scrollElement;
	if (!o) return;
	let s = i.targetWindow;
	if (!s) return;
	let c = 0, l = i.options.useScrollendEvent && supportsScrollend ? () => void 0 : debounce(s, () => {
		a(c, !1);
	}, i.options.isScrollingResetDelay), u = (s) => () => {
		let { horizontal: u, isRtl: d } = i.options;
		c = u ? o.scrollLeft * (d && -1 || 1) : o.scrollTop, l(), a(c, s);
	}, d = u(!0), f = u(!1);
	o.addEventListener("scroll", d, addEventListenerOptions);
	let p = i.options.useScrollendEvent && supportsScrollend;
	return p && o.addEventListener("scrollend", f, addEventListenerOptions), () => {
		o.removeEventListener("scroll", d), p && o.removeEventListener("scrollend", f);
	};
}, measureElement = (i, a, o) => {
	if (a?.borderBoxSize) {
		let i = a.borderBoxSize[0];
		if (i) return Math.round(i[o.options.horizontal ? "inlineSize" : "blockSize"]);
	}
	return i[o.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, elementScroll = (i, { adjustments: a = 0, behavior: o }, s) => {
	var c, l;
	let u = i + a;
	(l = (c = s.scrollElement)?.scrollTo) == null || l.call(c, {
		[s.options.horizontal ? "left" : "top"]: u,
		behavior: o
	});
}, Virtualizer = class {
	constructor(i) {
		this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.currentScrollToIndex = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
			let i = null, a = () => i || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : i = new this.targetWindow.ResizeObserver((i) => {
				i.forEach((i) => {
					let a = () => {
						this._measureElement(i.target, i);
					};
					this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
				});
			}));
			return {
				disconnect: () => {
					var o;
					(o = a()) == null || o.disconnect(), i = null;
				},
				observe: (i) => a()?.observe(i, { box: "border-box" }),
				unobserve: (i) => a()?.unobserve(i)
			};
		})(), this.range = null, this.setOptions = (i) => {
			Object.entries(i).forEach(([a, o]) => {
				o === void 0 && delete i[a];
			}), this.options = {
				debug: !1,
				initialOffset: 0,
				overscan: 1,
				paddingStart: 0,
				paddingEnd: 0,
				scrollPaddingStart: 0,
				scrollPaddingEnd: 0,
				horizontal: !1,
				getItemKey: defaultKeyExtractor,
				rangeExtractor: defaultRangeExtractor,
				onChange: () => {},
				measureElement,
				initialRect: {
					width: 0,
					height: 0
				},
				scrollMargin: 0,
				gap: 0,
				indexAttribute: "data-index",
				initialMeasurementsCache: [],
				lanes: 1,
				isScrollingResetDelay: 150,
				enabled: !0,
				isRtl: !1,
				useScrollendEvent: !1,
				useAnimationFrameWithResizeObserver: !1,
				...i
			};
		}, this.notify = (i) => {
			var a, o;
			(o = (a = this.options).onChange) == null || o.call(a, this, i);
		}, this.maybeNotify = memo$1(() => (this.calculateRange(), [
			this.isScrolling,
			this.range ? this.range.startIndex : null,
			this.range ? this.range.endIndex : null
		]), (i) => {
			this.notify(i);
		}, {
			key: process.env.NODE_ENV !== "production" && "maybeNotify",
			debug: () => this.options.debug,
			initialDeps: [
				this.isScrolling,
				this.range ? this.range.startIndex : null,
				this.range ? this.range.endIndex : null
			]
		}), this.cleanup = () => {
			this.unsubs.filter(Boolean).forEach((i) => i()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
		}, this._didMount = () => () => {
			this.cleanup();
		}, this._willUpdate = () => {
			let i = this.options.enabled ? this.options.getScrollElement() : null;
			if (this.scrollElement !== i) {
				if (this.cleanup(), !i) {
					this.maybeNotify();
					return;
				}
				this.scrollElement = i, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = this.scrollElement?.window ?? null, this.elementsCache.forEach((i) => {
					this.observer.observe(i);
				}), this.unsubs.push(this.options.observeElementRect(this, (i) => {
					this.scrollRect = i, this.maybeNotify();
				})), this.unsubs.push(this.options.observeElementOffset(this, (i, a) => {
					this.scrollAdjustments = 0, this.scrollDirection = a ? this.getScrollOffset() < i ? "forward" : "backward" : null, this.scrollOffset = i, this.isScrolling = a, this.maybeNotify();
				})), this._scrollToOffset(this.getScrollOffset(), {
					adjustments: void 0,
					behavior: void 0
				});
			}
		}, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (i, a) => {
			let o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
			for (let c = a - 1; c >= 0; c--) {
				let a = i[c];
				if (o.has(a.lane)) continue;
				let l = s.get(a.lane);
				if (l == null || a.end > l.end ? s.set(a.lane, a) : a.end < l.end && o.set(a.lane, !0), o.size === this.options.lanes) break;
			}
			return s.size === this.options.lanes ? Array.from(s.values()).sort((i, a) => i.end === a.end ? i.index - a.index : i.end - a.end)[0] : void 0;
		}, this.getMeasurementOptions = memo$1(() => [
			this.options.count,
			this.options.paddingStart,
			this.options.scrollMargin,
			this.options.getItemKey,
			this.options.enabled,
			this.options.lanes
		], (i, a, o, s, c, l) => (this.prevLanes !== void 0 && this.prevLanes !== l && (this.lanesChangedFlag = !0), this.prevLanes = l, this.pendingMeasuredCacheIndexes = [], {
			count: i,
			paddingStart: a,
			scrollMargin: o,
			getItemKey: s,
			enabled: c,
			lanes: l
		}), { key: !1 }), this.getMeasurements = memo$1(() => [this.getMeasurementOptions(), this.itemSizeCache], ({ count: i, paddingStart: a, scrollMargin: o, getItemKey: s, enabled: c, lanes: l }, u) => {
			if (!c) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
			if (this.laneAssignments.size > i) for (let a of this.laneAssignments.keys()) a >= i && this.laneAssignments.delete(a);
			this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((i) => {
				this.itemSizeCache.set(i.key, i.size);
			}));
			let d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
			this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === i && (this.lanesSettling = !1);
			let f = this.measurementsCache.slice(0, d), p = Array(l).fill(void 0);
			for (let i = 0; i < d; i++) {
				let a = f[i];
				a && (p[a.lane] = i);
			}
			for (let c = d; c < i; c++) {
				let i = s(c), l = this.laneAssignments.get(c), d, m;
				if (l !== void 0 && this.options.lanes > 1) {
					d = l;
					let i = p[d], s = i === void 0 ? void 0 : f[i];
					m = s ? s.end + this.options.gap : a + o;
				} else {
					let i = this.options.lanes === 1 ? f[c - 1] : this.getFurthestMeasurement(f, c);
					m = i ? i.end + this.options.gap : a + o, d = i ? i.lane : c % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(c, d);
				}
				let h = u.get(i), g = typeof h == "number" ? h : this.options.estimateSize(c), _ = m + g;
				f[c] = {
					index: c,
					start: m,
					size: g,
					end: _,
					key: i,
					lane: d
				}, p[d] = c;
			}
			return this.measurementsCache = f, f;
		}, {
			key: process.env.NODE_ENV !== "production" && "getMeasurements",
			debug: () => this.options.debug
		}), this.calculateRange = memo$1(() => [
			this.getMeasurements(),
			this.getSize(),
			this.getScrollOffset(),
			this.options.lanes
		], (i, a, o, s) => this.range = i.length > 0 && a > 0 ? calculateRange({
			measurements: i,
			outerSize: a,
			scrollOffset: o,
			lanes: s
		}) : null, {
			key: process.env.NODE_ENV !== "production" && "calculateRange",
			debug: () => this.options.debug
		}), this.getVirtualIndexes = memo$1(() => {
			let i = null, a = null, o = this.calculateRange();
			return o && (i = o.startIndex, a = o.endIndex), this.maybeNotify.updateDeps([
				this.isScrolling,
				i,
				a
			]), [
				this.options.rangeExtractor,
				this.options.overscan,
				this.options.count,
				i,
				a
			];
		}, (i, a, o, s, c) => s === null || c === null ? [] : i({
			startIndex: s,
			endIndex: c,
			overscan: a,
			count: o
		}), {
			key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
			debug: () => this.options.debug
		}), this.indexFromElement = (i) => {
			let a = this.options.indexAttribute, o = i.getAttribute(a);
			return o ? parseInt(o, 10) : (console.warn(`Missing attribute name '${a}={index}' on measured element.`), -1);
		}, this._measureElement = (i, a) => {
			let o = this.indexFromElement(i), s = this.measurementsCache[o];
			if (!s) return;
			let c = s.key, l = this.elementsCache.get(c);
			l !== i && (l && this.observer.unobserve(l), this.observer.observe(i), this.elementsCache.set(c, i)), i.isConnected && this.resizeItem(o, this.options.measureElement(i, a, this));
		}, this.resizeItem = (i, a) => {
			let o = this.measurementsCache[i];
			if (!o) return;
			let s = a - (this.itemSizeCache.get(o.key) ?? o.size);
			s !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange === void 0 ? o.start < this.getScrollOffset() + this.scrollAdjustments : this.shouldAdjustScrollPositionOnItemSizeChange(o, s, this)) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", s), this._scrollToOffset(this.getScrollOffset(), {
				adjustments: this.scrollAdjustments += s,
				behavior: void 0
			})), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, a)), this.notify(!1));
		}, this.measureElement = (i) => {
			if (!i) {
				this.elementsCache.forEach((i, a) => {
					i.isConnected || (this.observer.unobserve(i), this.elementsCache.delete(a));
				});
				return;
			}
			this._measureElement(i, void 0);
		}, this.getVirtualItems = memo$1(() => [this.getVirtualIndexes(), this.getMeasurements()], (i, a) => {
			let o = [];
			for (let s = 0, c = i.length; s < c; s++) {
				let c = a[i[s]];
				o.push(c);
			}
			return o;
		}, {
			key: process.env.NODE_ENV !== "production" && "getVirtualItems",
			debug: () => this.options.debug
		}), this.getVirtualItemForOffset = (i) => {
			let a = this.getMeasurements();
			if (a.length !== 0) return notUndefined(a[findNearestBinarySearch(0, a.length - 1, (i) => notUndefined(a[i]).start, i)]);
		}, this.getMaxScrollOffset = () => {
			if (!this.scrollElement) return 0;
			if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
			{
				let i = this.scrollElement.document.documentElement;
				return this.options.horizontal ? i.scrollWidth - this.scrollElement.innerWidth : i.scrollHeight - this.scrollElement.innerHeight;
			}
		}, this.getOffsetForAlignment = (i, a, o = 0) => {
			if (!this.scrollElement) return 0;
			let s = this.getSize(), c = this.getScrollOffset();
			a === "auto" && (a = i >= c + s ? "end" : "start"), a === "center" ? i += (o - s) / 2 : a === "end" && (i -= s);
			let l = this.getMaxScrollOffset();
			return Math.max(Math.min(l, i), 0);
		}, this.getOffsetForIndex = (i, a = "auto") => {
			i = Math.max(0, Math.min(i, this.options.count - 1));
			let o = this.measurementsCache[i];
			if (!o) return;
			let s = this.getSize(), c = this.getScrollOffset();
			if (a === "auto") if (o.end >= c + s - this.options.scrollPaddingEnd) a = "end";
			else if (o.start <= c + this.options.scrollPaddingStart) a = "start";
			else return [c, a];
			if (a === "end" && i === this.options.count - 1) return [this.getMaxScrollOffset(), a];
			let l = a === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
			return [this.getOffsetForAlignment(l, a, o.size), a];
		}, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (i, { align: a = "start", behavior: o } = {}) => {
			o === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getOffsetForAlignment(i, a), {
				adjustments: void 0,
				behavior: o
			});
		}, this.scrollToIndex = (i, { align: a = "auto", behavior: o } = {}) => {
			o === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), i = Math.max(0, Math.min(i, this.options.count - 1)), this.currentScrollToIndex = i;
			let s = 0, c = (a) => {
				if (!this.targetWindow) return;
				let s = this.getOffsetForIndex(i, a);
				if (!s) {
					console.warn("Failed to get offset for index:", i);
					return;
				}
				let [c, u] = s;
				this._scrollToOffset(c, {
					adjustments: void 0,
					behavior: o
				}), this.targetWindow.requestAnimationFrame(() => {
					let a = () => {
						if (this.currentScrollToIndex !== i) return;
						let a = this.getScrollOffset(), o = this.getOffsetForIndex(i, u);
						if (!o) {
							console.warn("Failed to get offset for index:", i);
							return;
						}
						approxEqual(o[0], a) || l(u);
					};
					this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(a) : a();
				});
			}, l = (a) => {
				this.targetWindow && this.currentScrollToIndex === i && (s++, s < 10 ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", s, 10), this.targetWindow.requestAnimationFrame(() => c(a))) : console.warn(`Failed to scroll to index ${i} after 10 attempts.`));
			};
			c(a);
		}, this.scrollBy = (i, { behavior: a } = {}) => {
			a === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getScrollOffset() + i, {
				adjustments: void 0,
				behavior: a
			});
		}, this.getTotalSize = () => {
			let i = this.getMeasurements(), a;
			if (i.length === 0) a = this.options.paddingStart;
			else if (this.options.lanes === 1) a = i[i.length - 1]?.end ?? 0;
			else {
				let o = Array(this.options.lanes).fill(null), s = i.length - 1;
				for (; s >= 0 && o.some((i) => i === null);) {
					let a = i[s];
					o[a.lane] === null && (o[a.lane] = a.end), s--;
				}
				a = Math.max(...o.filter((i) => i !== null));
			}
			return Math.max(a - this.options.scrollMargin + this.options.paddingEnd, 0);
		}, this._scrollToOffset = (i, { adjustments: a, behavior: o }) => {
			this.options.scrollToFn(i, {
				behavior: o,
				adjustments: a
			}, this);
		}, this.measure = () => {
			this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
		}, this.setOptions(i);
	}
}, findNearestBinarySearch = (i, a, o, s) => {
	for (; i <= a;) {
		let c = (i + a) / 2 | 0, l = o(c);
		if (l < s) i = c + 1;
		else if (l > s) a = c - 1;
		else return c;
	}
	return i > 0 ? i - 1 : 0;
};
function calculateRange({ measurements: i, outerSize: a, scrollOffset: o, lanes: s }) {
	let c = i.length - 1, l = (a) => i[a].start;
	if (i.length <= s) return {
		startIndex: 0,
		endIndex: c
	};
	let u = findNearestBinarySearch(0, c, l, o), d = u;
	if (s === 1) for (; d < c && i[d].end < o + a;) d++;
	else if (s > 1) {
		let l = Array(s).fill(0);
		for (; d < c && l.some((i) => i < o + a);) {
			let a = i[d];
			l[a.lane] = a.end, d++;
		}
		let f = Array(s).fill(o + a);
		for (; u >= 0 && f.some((i) => i >= o);) {
			let a = i[u];
			f[a.lane] = a.start, u--;
		}
		u = Math.max(0, u - u % s), d = Math.min(c, d + (s - 1 - d % s));
	}
	return {
		startIndex: u,
		endIndex: d
	};
}
var useIsomorphicLayoutEffect = typeof document < "u" ? React$1.useLayoutEffect : React$1.useEffect;
function useVirtualizerBase({ useFlushSync: i = !0, ...a }) {
	let o = React$1.useReducer(() => ({}), {})[1], s = {
		...a,
		onChange: (s, c) => {
			var l;
			i && c ? flushSync(o) : o(), (l = a.onChange) == null || l.call(a, s, c);
		}
	}, [c] = React$1.useState(() => new Virtualizer(s));
	return c.setOptions(s), useIsomorphicLayoutEffect(() => c._didMount(), []), useIsomorphicLayoutEffect(() => c._willUpdate()), c;
}
function useVirtualizer(i) {
	return useVirtualizerBase({
		observeElementRect,
		observeElementOffset,
		scrollToFn: elementScroll,
		...i
	});
}
var MemoizedChatMessage = memo(ChatMessage, (i, a) => {
	if (i.id !== a.id || i.content !== a.content || i.role !== a.role || i.isGenerating !== a.isGenerating) return !1;
	let o = i.toolInvocations || [], s = a.toolInvocations || [];
	if (o.length !== s.length) return !1;
	for (let i = 0; i < o.length; i++) if (o[i].state !== s[i].state || o[i].toolCallId !== s[i].toolCallId) return !1;
	let c = i.parts || [], l = a.parts || [];
	return c.length === l.length;
});
MemoizedChatMessage.displayName = "MemoizedChatMessage";
const MessageList = memo(function({ messages: i, showTimeStamps: a = !0, isTyping: o = !1, messageOptions: s, virtualize: c = !1, scrollRef: l, estimateSize: u = 120 }) {
	let d = useCallback((i) => typeof s == "function" ? s(i) : s, [s]), f = useVirtualizer({
		count: i.length,
		getScrollElement: () => l?.current ?? null,
		estimateSize: () => u,
		overscan: 3,
		enabled: c && !!l
	}), p = c && l ? f.getVirtualItems() : [];
	if (c && l && i.length > 0) {
		let s = p[0]?.start ?? 0, c = f.getTotalSize() - (p[p.length - 1]?.end ?? 0);
		return /* @__PURE__ */ jsxs("div", {
			style: {
				height: "100%",
				width: "100%"
			},
			children: [/* @__PURE__ */ jsx("div", {
				style: {
					paddingTop: `${s}px`,
					paddingBottom: `${Math.max(0, c)}px`
				},
				children: p.map((o) => {
					let s = i[o.index], c = d(s);
					return /* @__PURE__ */ jsx("div", {
						"data-index": o.index,
						ref: f.measureElement,
						style: { marginBottom: "1rem" },
						children: /* @__PURE__ */ jsx(MemoizedChatMessage, {
							showTimeStamp: a,
							...s,
							...c
						})
					}, s.id);
				})
			}), o && /* @__PURE__ */ jsx(TypingIndicator, {})]
		});
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [i.map((i) => {
			let o = d(i);
			return /* @__PURE__ */ jsx(MemoizedChatMessage, {
				showTimeStamp: a,
				...i,
				...o
			}, i.id);
		}), o && /* @__PURE__ */ jsx(TypingIndicator, {})]
	});
});
MessageList.displayName = "MessageList";
var ACTIVATION_THRESHOLD = 50, MIN_SCROLL_UP_THRESHOLD = 10, MIN_SCROLLABLE_CONTENT = 10;
function useAutoScroll(i) {
	let a = useRef(null), o = useRef(null), [s, c] = useState(!0), [l, u] = useState(!1), d = useRef(s);
	d.current = s;
	let f = useCallback(() => {
		if (a.current) {
			let { scrollHeight: i, clientHeight: o } = a.current;
			u(i > o + MIN_SCROLLABLE_CONTENT);
		}
	}, []), p = useCallback(() => {
		a.current && (a.current.scrollTop = a.current.scrollHeight);
	}, []);
	return useEffect(() => {
		a.current && (o.current = a.current.scrollTop);
	}, []), useLayoutEffect(() => {
		if (f(), !d.current) return;
		let i = requestAnimationFrame(() => {
			a.current && d.current && (a.current.scrollTop = a.current.scrollHeight);
		});
		return () => cancelAnimationFrame(i);
	}, i), useEffect(() => {
		f();
		let i = () => f();
		return window.addEventListener("resize", i), () => window.removeEventListener("resize", i);
	}, [f]), {
		containerRef: a,
		scrollToBottom: p,
		handleScroll: () => {
			if (a.current) {
				let { scrollTop: i, scrollHeight: s, clientHeight: l } = a.current;
				u(s > l + MIN_SCROLLABLE_CONTENT);
				let d = Math.abs(s - i - l), f = o.current ? i < o.current : !1, p = o.current ? o.current - i : 0;
				c(f && p > MIN_SCROLL_UP_THRESHOLD ? !1 : d < ACTIVATION_THRESHOLD), o.current = i;
			}
		},
		shouldAutoScroll: s,
		handleTouchStart: () => {
			c(!1);
		},
		isScrollable: l
	};
}
function SpeakButton({ content: i, voiceConfig: a, className: s, size: c = "icon", variant: l = "ghost" }) {
	let [u, f] = useState(!1), [p, m] = useState(!1), [h, g] = useState(null);
	useEffect(() => {
		let i = getVoiceSupport();
		if (f(i.speechSynthesis), i.speechSynthesis) {
			let i = new SpeechSynthesisManager(a);
			return i.onStart = () => m(!0), i.onEnd = () => m(!1), i.onError = () => m(!1), g(i), () => {
				i.destroy();
			};
		}
	}, []), useEffect(() => {
		h && a && h.updateConfig(a);
	}, [h, a]);
	let v = useCallback(() => {
		if (!(!h || !i)) if (p) h.stop();
		else {
			let a = stripMarkdownForSpeech(i);
			h.speak(a);
		}
	}, [
		h,
		i,
		p
	]);
	return u ? /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			type: "button",
			size: c,
			variant: l,
			className: cn("h-6 w-6 transition-colors", p && "text-primary bg-primary/10", s),
			onClick: v,
			"aria-label": p ? "Stop speaking" : "Listen to message",
			children: p ? /* @__PURE__ */ jsx(Square, {
				className: "h-3 w-3",
				fill: "currentColor"
			}) : /* @__PURE__ */ jsx(Volume2, {})
		})
	}), /* @__PURE__ */ jsx(TooltipContent, {
		side: "top",
		className: "text-xs",
		children: p ? "Stop" : "Listen"
	})] }) }) : null;
}
function e(i, a, o) {
	let s = (o) => i(o, ...a);
	return o === void 0 ? s : Object.assign(s, {
		lazy: o,
		lazyArgs: a
	});
}
function t(i, a, o) {
	let s = i.length - a.length;
	if (s === 0) return i(...a);
	if (s === 1) return e(i, a, o);
	throw Error("Wrong number of arguments");
}
function t$1(...i) {
	return t(n$1, i);
}
var n$1 = (i, a) => i.length >= a;
function n(...i) {
	return t(r, i);
}
function r(i, a) {
	if (!t$1(a, 1)) return { ...i };
	if (!t$1(a, 2)) {
		let { [a[0]]: o, ...s } = i;
		return s;
	}
	let o = { ...i };
	for (let i of a) delete o[i];
	return o;
}
const recordAudio = (function() {
	let i = async function(a) {
		try {
			let o = new MediaRecorder(a, { mimeType: "audio/webm;codecs=opus" }), s = [];
			return new Promise((a, c) => {
				o.ondataavailable = (i) => {
					i.data.size > 0 && s.push(i.data);
				}, o.onstop = () => {
					a(new Blob(s, { type: "audio/webm" }));
				}, o.onerror = () => {
					c(/* @__PURE__ */ Error("MediaRecorder error occurred"));
				}, o.start(1e3), i.currentRecorder = o;
			});
		} catch (i) {
			let a = i instanceof Error ? i.message : "Unknown error occurred";
			throw Error("Failed to start recording: " + a);
		}
	};
	return i.stop = () => {
		let a = i.currentRecorder;
		a && a.state !== "inactive" && a.stop(), delete i.currentRecorder;
	}, i;
})();
function useAudioRecording({ transcribeAudio: i, onTranscriptionComplete: a }) {
	let [o, s] = useState(!1), [c, l] = useState(!!i), [u, d] = useState(!1), [f, p] = useState(!1), [m, h] = useState(null), g = useRef(null);
	useEffect(() => {
		(async () => {
			l(!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) && !!i);
		})();
	}, [i]);
	let _ = async () => {
		d(!1), p(!0);
		try {
			recordAudio.stop();
			let o = await g.current;
			if (i) {
				let s = await i(o);
				a?.(s);
			}
		} catch (i) {
			console.error("Error transcribing audio:", i);
		} finally {
			p(!1), s(!1), m && (m.getTracks().forEach((i) => i.stop()), h(null)), g.current = null;
		}
	};
	return {
		isListening: o,
		isSpeechSupported: c,
		isRecording: u,
		isTranscribing: f,
		audioStream: m,
		toggleListening: async () => {
			if (o) await _();
			else try {
				s(!0), d(!0);
				let i = await navigator.mediaDevices.getUserMedia({ audio: !0 });
				h(i), g.current = recordAudio(i);
			} catch (i) {
				console.error("Error recording audio:", i), s(!1), d(!1), m && (m.getTracks().forEach((i) => i.stop()), h(null));
			}
		},
		stopRecording: _
	};
}
function useAutosizeTextArea({ ref: i, maxHeight: a = 2 ** 53 - 1, borderWidth: o = 0, dependencies: s }) {
	let c = useRef(null);
	useLayoutEffect(() => {
		if (!i.current) return;
		let s = i.current, l = o * 2;
		c.current === null && (c.current = s.scrollHeight - l), s.style.removeProperty("height");
		let u = s.scrollHeight, d = Math.min(u, a), f = Math.max(d, c.current);
		s.style.height = `${f + l}px`;
	}, [
		a,
		i,
		...s
	]);
}
var AUDIO_CONFIG = {
	FFT_SIZE: 512,
	SMOOTHING: .8,
	MIN_BAR_HEIGHT: 2,
	MIN_BAR_WIDTH: 2,
	BAR_SPACING: 1,
	COLOR: {
		MIN_INTENSITY: 100,
		MAX_INTENSITY: 255,
		INTENSITY_RANGE: 155
	}
};
function AudioVisualizer({ stream: i, isRecording: a, onClick: o }) {
	let s = useRef(null), c = useRef(null), l = useRef(null), u = useRef(0), d = useRef(null), f = () => {
		u.current && cancelAnimationFrame(u.current), c.current && c.current.close();
	};
	useEffect(() => f, []), useEffect(() => {
		i && a ? p() : f();
	}, [i, a]), useEffect(() => {
		let i = () => {
			if (s.current && d.current) {
				let i = d.current, a = s.current, o = window.devicePixelRatio || 1, c = i.getBoundingClientRect();
				a.width = (c.width - 2) * o, a.height = (c.height - 2) * o, a.style.width = `${c.width - 2}px`, a.style.height = `${c.height - 2}px`;
			}
		};
		return window.addEventListener("resize", i), i(), () => window.removeEventListener("resize", i);
	}, []);
	let p = async () => {
		try {
			let a = new AudioContext();
			c.current = a;
			let o = a.createAnalyser();
			o.fftSize = AUDIO_CONFIG.FFT_SIZE, o.smoothingTimeConstant = AUDIO_CONFIG.SMOOTHING, l.current = o, a.createMediaStreamSource(i).connect(o), g();
		} catch (i) {
			console.error("Error starting visualization:", i);
		}
	}, m = (i) => {
		let a = Math.floor(i * AUDIO_CONFIG.COLOR.INTENSITY_RANGE) + AUDIO_CONFIG.COLOR.MIN_INTENSITY;
		return `rgb(${a}, ${a}, ${a})`;
	}, h = (i, a, o, s, c, l) => {
		i.fillStyle = l, i.fillRect(a, o - c, s, c), i.fillRect(a, o, s, c);
	}, g = () => {
		if (!a) return;
		let i = s.current, o = i?.getContext("2d");
		if (!i || !o || !l.current) return;
		let c = window.devicePixelRatio || 1;
		o.scale(c, c);
		let d = l.current, f = d.frequencyBinCount, p = new Uint8Array(f), g = () => {
			u.current = requestAnimationFrame(g), d.getByteFrequencyData(p), o.clearRect(0, 0, i.width / c, i.height / c);
			let a = Math.max(AUDIO_CONFIG.MIN_BAR_WIDTH, i.width / c / f - AUDIO_CONFIG.BAR_SPACING), s = i.height / c / 2, l = 0;
			for (let i = 0; i < f; i++) {
				let c = p[i] / 255, u = Math.max(AUDIO_CONFIG.MIN_BAR_HEIGHT, c * s);
				h(o, l, s, a, u, m(c)), l += a + AUDIO_CONFIG.BAR_SPACING;
			}
		};
		g();
	};
	return /* @__PURE__ */ jsx("div", {
		ref: d,
		className: "h-full w-full cursor-pointer rounded-lg bg-background/80 backdrop-blur",
		onClick: o,
		children: /* @__PURE__ */ jsx("canvas", {
			ref: s,
			className: "h-full w-full"
		})
	});
}
function InterruptPrompt({ isOpen: i, close: a }) {
	return /* @__PURE__ */ jsx(AnimatePresence, { children: i && /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			top: 0,
			filter: "blur(5px)"
		},
		animate: {
			top: -40,
			filter: "blur(0px)",
			transition: {
				type: "spring",
				filter: { type: "tween" }
			}
		},
		exit: {
			top: 0,
			filter: "blur(5px)"
		},
		className: "absolute left-1/2 flex -translate-x-1/2 overflow-hidden whitespace-nowrap rounded-full border bg-background py-1 text-center text-sm text-muted-foreground",
		children: [/* @__PURE__ */ jsx("span", {
			className: "ml-2.5",
			children: "Press Enter again to interrupt"
		}), /* @__PURE__ */ jsx("button", {
			className: "ml-1 mr-2.5 flex items-center",
			type: "button",
			onClick: a,
			"aria-label": "Close",
			children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
		})]
	}) });
}
function PromptSuggestions({ append: i, suggestions: a }) {
	return /* @__PURE__ */ jsx("div", {
		className: "flex flex-wrap gap-1 px-4 py-2",
		children: a.map((a) => /* @__PURE__ */ jsx(Badge, {
			className: "cursor-pointer hover:scale-[0.99]",
			onClick: () => {
				i({
					role: "user",
					content: a
				});
			},
			children: /* @__PURE__ */ jsx("p", { children: a })
		}, a))
	});
}
function MessageInput({ placeholder: i = "Ask AI...", className: a, onKeyDown: o, submitOnEnter: s = !0, stop: c, isGenerating: l, enableInterrupt: u = !0, transcribeAudio: f, suggestions: p, append: m, isListening: h, startListening: g, stopListening: _, isSpeechSupported: v, ...y }) {
	let [b, x] = useState(!1), [S, C] = useState(!1), { isListening: w, isSpeechSupported: T, isRecording: E, isTranscribing: D, audioStream: O, toggleListening: k, stopRecording: j } = useAudioRecording({
		transcribeAudio: f,
		onTranscriptionComplete: (i) => {
			y.onChange?.({ target: { value: i } });
		}
	}), M = h ?? w, N = v ?? T, P = () => {
		h !== void 0 && g && _ ? h ? _() : g() : k();
	};
	useEffect(() => {
		l || C(!1);
	}, [l]);
	let F = (i) => {
		y.allowAttachments && y.setFiles((a) => a === null ? i : i === null ? a : [...a, ...i]);
	}, I = (i) => {
		y.allowAttachments === !0 && (i.preventDefault(), x(!0));
	}, L = (i) => {
		y.allowAttachments === !0 && (i.preventDefault(), x(!1));
	}, R = (i) => {
		if (x(!1), y.allowAttachments !== !0) return;
		i.preventDefault();
		let a = i.dataTransfer;
		a.files.length && F(Array.from(a.files));
	}, z = (i) => {
		let a = i.clipboardData?.items;
		if (!a) return;
		let o = i.clipboardData.getData("text");
		if (o && o.length > 500 && y.allowAttachments) {
			i.preventDefault();
			let a = new Blob([o], { type: "text/plain" });
			F([new File([a], "Pasted text", {
				type: "text/plain",
				lastModified: Date.now()
			})]);
			return;
		}
		let s = Array.from(a).map((i) => i.getAsFile()).filter((i) => i !== null);
		y.allowAttachments && s.length > 0 && F(s);
	}, B = (i) => {
		if (s && i.key === "Enter" && !i.shiftKey) {
			if (i.preventDefault(), l && c && u) {
				if (S) c(), C(!1), i.currentTarget.form?.requestSubmit();
				else if (y.value || y.allowAttachments && y.files?.length) {
					C(!0);
					return;
				}
			}
			i.currentTarget.form?.requestSubmit();
		}
		o?.(i);
	}, V = useRef(null), [H, U] = useState(0);
	useEffect(() => {
		V.current && U(V.current.offsetHeight);
	}, [y.value]);
	let W = y.allowAttachments && y.files && y.files.length > 0;
	return useAutosizeTextArea({
		ref: V,
		maxHeight: 200,
		borderWidth: 1,
		dependencies: [y.value, W]
	}), /* @__PURE__ */ jsxs("div", {
		className: "relative flex w-full",
		onDragOver: I,
		onDragLeave: L,
		onDrop: R,
		children: [
			u && /* @__PURE__ */ jsx(InterruptPrompt, {
				isOpen: S,
				close: () => C(!1)
			}),
			/* @__PURE__ */ jsx(RecordingPrompt, {
				isVisible: E,
				onStopRecording: j
			}),
			p && m && p.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "mb-2",
				children: /* @__PURE__ */ jsx(PromptSuggestions, {
					append: m,
					suggestions: p
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative flex w-full items-center space-x-2",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ jsx("textarea", {
						"aria-label": "Write your prompt here",
						placeholder: i,
						ref: V,
						onPaste: z,
						onKeyDown: B,
						className: cn("z-10 w-full grow resize-none rounded-lg border border-input bg-background/50 backdrop-blur-sm p-4 pr-28 text-sm ring-offset-background transition-all duration-200 placeholder:text-muted-foreground/70 focus-visible:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-background disabled:cursor-not-allowed disabled:opacity-50 shadow-sm", W && "pb-20", a),
						...y.allowAttachments ? n(y, [
							"allowAttachments",
							"files",
							"setFiles"
						]) : n(y, ["allowAttachments"])
					}), y.allowAttachments && /* @__PURE__ */ jsx("div", {
						className: "absolute inset-x-3 bottom-0 z-20 py-3",
						children: /* @__PURE__ */ jsx("div", {
							className: "flex space-x-3",
							children: /* @__PURE__ */ jsx(AnimatePresence, {
								mode: "popLayout",
								children: y.files?.map((i) => /* @__PURE__ */ jsx(FilePreview, {
									file: i,
									onRemove: () => {
										y.setFiles((a) => {
											if (!a) return null;
											let o = Array.from(a).filter((a) => a !== i);
											return o.length === 0 ? null : o;
										});
									}
								}, i.name + String(i.lastModified)))
							})
						})
					})]
				})
			}),
			p && m && p.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "mt-2",
				children: /* @__PURE__ */ jsx(PromptSuggestions, {
					append: m,
					suggestions: p
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute right-3 top-3 z-20 flex gap-1",
				children: /* @__PURE__ */ jsxs(TooltipProvider, {
					delayDuration: 0,
					children: [
						y.allowAttachments && /* @__PURE__ */ jsx(AttachmentButton, { onClick: async () => {
							F(await showFileUploadDialog());
						} }),
						/* @__PURE__ */ jsx(VoiceInputButton, {
							isSupported: !!N,
							isListening: !!M,
							onClick: P
						}),
						/* @__PURE__ */ jsx(SubmitActionButton, {
							isGenerating: l,
							stop: c,
							disabled: y.value === "" || l
						})
					]
				})
			}),
			y.allowAttachments && /* @__PURE__ */ jsx(FileUploadOverlay, { isDragging: b }),
			/* @__PURE__ */ jsx(RecordingControls, {
				isRecording: E,
				isTranscribing: D,
				audioStream: O,
				textAreaHeight: H,
				onStopRecording: j
			})
		]
	});
}
MessageInput.displayName = "MessageInput";
function FileUploadOverlay({ isDragging: i }) {
	return /* @__PURE__ */ jsx(AnimatePresence, { children: i && /* @__PURE__ */ jsxs(motion.div, {
		className: "pointer-events-none absolute inset-0 z-20 flex items-center justify-center space-x-2 rounded-xl border border-dashed border-border bg-background text-sm text-muted-foreground",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .2 },
		"aria-hidden": !0,
		children: [/* @__PURE__ */ jsx(Paperclip, {}), /* @__PURE__ */ jsx("span", { children: "Drop your files here to attach them." })]
	}) });
}
function showFileUploadDialog() {
	let i = document.createElement("input");
	return i.type = "file", i.multiple = !0, i.accept = "*/*", i.click(), new Promise((a) => {
		i.onchange = (i) => {
			let o = i.currentTarget.files;
			if (o) {
				a(Array.from(o));
				return;
			}
			a(null);
		};
	});
}
function TranscribingOverlay() {
	return /* @__PURE__ */ jsxs(motion.div, {
		className: "flex h-full w-full flex-col items-center justify-center rounded-xl bg-background/80 backdrop-blur-sm",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .2 },
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }), /* @__PURE__ */ jsx(motion.div, {
				className: "absolute inset-0 h-8 w-8 animate-pulse rounded-full bg-primary/20",
				initial: {
					scale: .8,
					opacity: 0
				},
				animate: {
					scale: 1.2,
					opacity: 1
				},
				transition: {
					duration: 1,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "easeInOut"
				}
			})]
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-4 text-sm font-medium text-muted-foreground",
			children: "Transcribing audio..."
		})]
	});
}
function RecordingPrompt({ isVisible: i, onStopRecording: a }) {
	return /* @__PURE__ */ jsx(AnimatePresence, { children: i && /* @__PURE__ */ jsx(motion.div, {
		initial: {
			top: 0,
			filter: "blur(5px)"
		},
		animate: {
			top: -40,
			filter: "blur(0px)",
			transition: {
				type: "spring",
				filter: { type: "tween" }
			}
		},
		exit: {
			top: 0,
			filter: "blur(5px)"
		},
		className: "absolute left-1/2 flex -translate-x-1/2 cursor-pointer overflow-hidden whitespace-nowrap rounded-full border bg-background py-1 text-center text-sm text-muted-foreground",
		onClick: a,
		children: /* @__PURE__ */ jsxs("span", {
			className: "mx-2.5 flex items-center",
			children: [/* @__PURE__ */ jsx(Info, { className: "mr-2 h-3 w-3" }), "Click to finish recording"]
		})
	}) });
}
function RecordingControls({ isRecording: i, isTranscribing: a, audioStream: o, textAreaHeight: s, onStopRecording: c }) {
	return i ? /* @__PURE__ */ jsx("div", {
		className: "absolute inset-[1px] z-50 overflow-hidden rounded-xl",
		style: { height: s - 2 },
		children: /* @__PURE__ */ jsx(AudioVisualizer, {
			stream: o,
			isRecording: i,
			onClick: c
		})
	}) : a ? /* @__PURE__ */ jsx("div", {
		className: "absolute inset-[1px] z-50 overflow-hidden rounded-xl",
		style: { height: s - 2 },
		children: /* @__PURE__ */ jsx(TranscribingOverlay, {})
	}) : null;
}
function AttachmentButton({ onClick: i, className: a }) {
	return /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			type: "button",
			size: "icon",
			variant: "ghost",
			className: cn("h-8 w-8 text-muted-foreground hover:text-foreground", a),
			"aria-label": "Attach a file",
			onClick: i,
			children: /* @__PURE__ */ jsx(Paperclip, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: "Attach file" })] });
}
function VoiceInputButton({ isSupported: i, isListening: a, onClick: s }) {
	return i ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			type: "button",
			variant: "ghost",
			"aria-label": a ? "Stop recording" : "Voice input",
			size: "icon",
			onClick: s,
			className: cn("h-8 w-8 transition-all duration-200", a ? "bg-red-500/10 text-red-500 hover:bg-red-500/20" : "text-muted-foreground hover:text-foreground"),
			children: a ? /* @__PURE__ */ jsxs("span", {
				className: "relative flex h-3 w-3",
				children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-3 w-3 rounded-full bg-red-500" })]
			}) : /* @__PURE__ */ jsx(Mic, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: a ? "Stop recording" : "Use voice input" })] }) : null;
}
function SubmitActionButton({ isGenerating: i, stop: a, disabled: s }) {
	return i && a ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			type: "button",
			size: "icon",
			variant: "ghost",
			className: "h-8 w-8 text-muted-foreground hover:text-foreground",
			"aria-label": "Stop generating",
			onClick: a,
			children: /* @__PURE__ */ jsx(Square, { className: "h-3 w-3 animate-pulse fill-current" })
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: "Stop generating" })] }) : /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			type: "submit",
			size: "icon",
			className: cn("h-8 w-8 rounded-full transition-all duration-200", s ? "opacity-50" : "bg-primary text-primary-foreground shadow-sm"),
			"aria-label": "Send message",
			disabled: s,
			children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: "Send message" })] });
}
function Feedback({ onRateResponse: i, messageId: a }) {
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			size: "icon",
			variant: "ghost",
			className: "size-6",
			onClick: () => i(a, "thumbs-up"),
			children: /* @__PURE__ */ jsx(ThumbsUp, {})
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: "Thumbs Up" })] }) }), /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			size: "icon",
			variant: "ghost",
			className: "size-6",
			onClick: () => i(a, "thumbs-down"),
			children: /* @__PURE__ */ jsx(ThumbsDown, {})
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: "Thumbs Down" })] }) })] });
}
function Chat$1({ messages: i, handleSubmit: a, input: o, handleInputChange: s, stop: c, isGenerating: l, append: u, suggestions: f, className: p, onRateResponse: m, setMessages: h, transcribeAudio: g, placeholder: _, voiceConfig: v, isListening: y, startListening: b, stopListening: x, isSpeechSupported: S }) {
	let { displayMessages: C, isTyping: w, isEmpty: T } = useMessageDisplay({
		messages: i,
		isGenerating: l
	}), E = useRef(i);
	E.current = i;
	let D = useCallback(() => {
		if (c?.(), !h) return;
		let i = [...E.current], a = i.slice().reverse().find((i) => i.role === "assistant");
		if (!a) return;
		let o = !1, s = { ...a };
		if (a.toolInvocations) {
			let i = a.toolInvocations.map((i) => i.state === "call" ? (o = !0, {
				...i,
				state: "result",
				result: {
					content: "Tool execution was cancelled",
					__cancelled: !0
				}
			}) : i);
			o && (s = {
				...s,
				toolInvocations: i
			});
		}
		if (a.parts && a.parts.length > 0) {
			let i = a.parts.map((i) => i.type === "tool-invocation" && i.toolInvocation && i.toolInvocation.state === "call" ? (o = !0, {
				...i,
				toolInvocation: {
					...i.toolInvocation,
					state: "result",
					result: {
						content: "Tool execution was cancelled",
						__cancelled: !0
					}
				}
			}) : i);
			o && (s = {
				...s,
				parts: i
			});
		}
		if (o) {
			let o = i.findIndex((i) => i.id === a.id);
			o !== -1 && (i[o] = s, h(i));
		}
	}, [
		c,
		h,
		E
	]), O = useCallback((i) => ({
		actions: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ jsx(CopyButton, {
					content: i.content,
					copyMessage: "Copied to clipboard!"
				}),
				i.content && /* @__PURE__ */ jsx(SpeakButton, {
					content: i.content,
					voiceConfig: v
				}),
				m && i.content && i.role === "assistant" && /* @__PURE__ */ jsx(Feedback, {
					messageId: i.id,
					onRateResponse: m
				})
			]
		}),
		isGenerating: l && i.role === "assistant" && !i.content
	}), [
		m,
		l,
		v
	]);
	return /* @__PURE__ */ jsxs(ChatContainer, {
		className: p,
		children: [
			T && u && f ? /* @__PURE__ */ jsx(PromptSuggestions, {
				append: u,
				suggestions: f
			}) : null,
			C.length > 0 ? /* @__PURE__ */ jsx(ChatMessages$1, {
				messages: C,
				children: /* @__PURE__ */ jsx(MessageList, {
					messages: C,
					isTyping: w,
					messageOptions: O
				})
			}) : null,
			f && !T ? /* @__PURE__ */ jsx(PromptSuggestions, {
				append: u,
				suggestions: f
			}) : null,
			/* @__PURE__ */ jsx(ChatForm, {
				className: cn("chat-input-container", i.length > 0 ? "py-4" : "py-2"),
				isPending: l || w,
				handleSubmit: a,
				children: ({ files: i, setFiles: a }) => /* @__PURE__ */ jsx(MessageInput, {
					value: o,
					onChange: s,
					allowAttachments: !0,
					files: i,
					setFiles: a,
					stop: D,
					isGenerating: l,
					transcribeAudio: g,
					placeholder: _,
					isListening: y,
					startListening: b,
					stopListening: x,
					isSpeechSupported: S
				})
			})
		]
	});
}
Chat$1.displayName = "Chat";
function ChatMessages$1({ messages: i, children: a }) {
	let { containerRef: s, scrollToBottom: c, handleScroll: l, shouldAutoScroll: u, handleTouchStart: f, isScrollable: p } = useAutoScroll([i]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex-1 relative overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: cn("h-full w-full overflow-y-auto", i.length > 0 && "py-4"),
			ref: s,
			onScroll: l,
			onTouchStart: f,
			children: a
		}), p && !u && /* @__PURE__ */ jsx("div", {
			className: "absolute bottom-4 right-6 pointer-events-auto z-10",
			children: /* @__PURE__ */ jsx(Button, {
				onClick: c,
				className: "h-9 w-9 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg transition-all duration-200 hover:shadow-xl animate-in fade-in-0 slide-in-from-bottom-2",
				size: "icon",
				variant: "default",
				children: /* @__PURE__ */ jsx(ArrowDown, {})
			})
		})]
	});
}
const ChatContainer = forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx("div", {
	ref: o,
	className: cn("flex h-full w-full flex-col", i),
	...a
}));
ChatContainer.displayName = "ChatContainer";
const ChatForm = forwardRef(({ children: i, handleSubmit: a, className: o }, s) => {
	let [c, l] = useState(null);
	return /* @__PURE__ */ jsx("form", {
		ref: s,
		onSubmit: (i) => {
			if (!c) {
				a(i);
				return;
			}
			a(i, { experimental_attachments: createFileList(c) }), l(null);
		},
		className: o,
		children: i({
			files: c,
			setFiles: l
		})
	});
});
ChatForm.displayName = "ChatForm";
function createFileList(i) {
	let a = new DataTransfer();
	for (let o of Array.from(i)) a.items.add(o);
	return a.files;
}
function ChatMessages({ className: i }) {
	let { messages: a, isGenerating: o, rateResponse: s, voiceConfig: c } = useChatContext(), { displayMessages: l, isTyping: u } = useMessageDisplay({
		messages: a || [],
		isGenerating: o
	});
	return /* @__PURE__ */ jsx(ChatContainer, {
		className: i,
		children: /* @__PURE__ */ jsx(ChatMessages$1, {
			messages: l,
			children: /* @__PURE__ */ jsx(MessageList, {
				messages: l,
				isTyping: u,
				messageOptions: useCallback((i) => ({
					actions: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ jsx(CopyButton, {
								content: i.content,
								copyMessage: "Copied to clipboard!"
							}),
							i.content && /* @__PURE__ */ jsx(SpeakButton, {
								content: i.content,
								voiceConfig: c
							}),
							i.content && i.role === "assistant" && /* @__PURE__ */ jsx(Feedback, {
								messageId: i.id,
								onRateResponse: s
							})
						]
					}),
					isGenerating: o && i.role === "assistant" && !i.content
				}), [
					s,
					o,
					c
				])
			})
		})
	});
}
function ChatInput({ placeholder: i = "Hi, how can I help you?", className: a, transcribeAudio: o }) {
	let { messages: s, input: c, setInput: l, sendMessage: u, stopGeneration: f, setMessages: p, isGenerating: m, isListening: h, startListening: g, stopListening: _, isSpeechSupported: v } = useChatContext(), y = useCallback(async (i) => {
		i?.preventDefault?.();
		let a = c.trim();
		a && (l(""), await u(a));
	}, [
		c,
		l,
		u
	]), b = useCallback(() => {
		if (f(), !p) return;
		let i = [...s], a = i.slice().reverse().find((i) => i.role === "assistant");
		if (!a) return;
		let o = !1, c = { ...a };
		if (a.toolInvocations) {
			let i = a.toolInvocations.map((i) => i.state === "call" ? (o = !0, {
				...i,
				state: "result",
				result: {
					content: "Tool execution was cancelled",
					__cancelled: !0
				}
			}) : i);
			o && (c = {
				...c,
				toolInvocations: i
			});
		}
		let l = a.parts;
		if (l?.length) {
			let i = l.map((i) => {
				let a = i;
				return a.type === "tool-invocation" && a.toolInvocation?.state === "call" ? (o = !0, {
					...a,
					toolInvocation: {
						...a.toolInvocation,
						state: "result",
						result: {
							content: "Tool execution was cancelled",
							__cancelled: !0
						}
					}
				}) : i;
			});
			o && (c = {
				...c,
				parts: i
			});
		}
		if (o) {
			let o = i.findIndex((i) => i.id === a.id);
			o !== -1 && (i[o] = c, p(i));
		}
	}, [
		f,
		p,
		s
	]), x = useCallback((i) => {
		l(i.target.value);
	}, [l]);
	return /* @__PURE__ */ jsx(ChatForm, {
		className: cn("chat-input-container", s.length > 0 ? "py-4" : "py-2", a),
		isPending: m,
		handleSubmit: y,
		children: ({ files: a, setFiles: s }) => /* @__PURE__ */ jsx(MessageInput, {
			value: c,
			onChange: x,
			allowAttachments: !0,
			files: a,
			setFiles: s,
			stop: b,
			isGenerating: m,
			transcribeAudio: o,
			placeholder: i,
			isListening: h,
			startListening: g,
			stopListening: _,
			isSpeechSupported: v
		})
	});
}
function ChatSuggestions() {
	let { suggestions: i, sendMessage: a } = useChatContext(), o = useCallback((i) => {
		a(i.content);
	}, [a]);
	return i.length === 0 ? null : /* @__PURE__ */ jsx(PromptSuggestions, {
		append: o,
		suggestions: i
	});
}
const Chat = {
	Root: ChatRoot,
	Messages: ChatMessages,
	Input: ChatInput,
	Suggestions: ChatSuggestions
};
/* @__NO_SIDE_EFFECTS__ */
function createSlot(i) {
	let a = /* @__PURE__ */ createSlotClone(i), o = React$1.forwardRef((i, o) => {
		let { children: s, ...c } = i, l = React$1.Children.toArray(s), u = l.find(isSlottable);
		if (u) {
			let i = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(i) > 1 ? React$1.Children.only(null) : React$1.isValidElement(i) ? i.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(i) ? React$1.cloneElement(i, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${i}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(i) {
	let a = React$1.forwardRef((i, a) => {
		let { children: o, ...s } = i;
		if (React$1.isValidElement(o)) {
			let i = getElementRef(o), c = mergeProps(s, o.props);
			return o.type !== React$1.Fragment && (c.ref = a ? composeRefs(a, i) : i), React$1.cloneElement(o, c);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${i}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(i) {
	return React$1.isValidElement(i) && typeof i.type == "function" && "__radixId" in i.type && i.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(i, a) {
	let o = { ...a };
	for (let s in a) {
		let c = i[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...i) => {
			let a = l(...i);
			return c(...i), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...i,
		...o
	};
}
function getElementRef(i) {
	let a = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? i.ref : (a = Object.getOwnPropertyDescriptor(i, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? i.props.ref : i.props.ref || i.ref);
}
var DIALOG_NAME = "Dialog", [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME), [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME), Dialog$1 = (i) => {
	let { __scopeDialog: a, children: o, open: s, defaultOpen: c, onOpenChange: l, modal: u = !0 } = i, d = React$1.useRef(null), f = React$1.useRef(null), [p, m] = useControllableState({
		prop: s,
		defaultProp: c ?? !1,
		onChange: l,
		caller: DIALOG_NAME
	});
	return /* @__PURE__ */ jsx(DialogProvider, {
		scope: a,
		triggerRef: d,
		contentRef: f,
		contentId: useId$1(),
		titleId: useId$1(),
		descriptionId: useId$1(),
		open: p,
		onOpenChange: m,
		onOpenToggle: React$1.useCallback(() => m((i) => !i), [m]),
		modal: u,
		children: o
	});
};
Dialog$1.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger", DialogTrigger$1 = React$1.forwardRef((i, a) => {
	let { __scopeDialog: o, ...c } = i, l = useDialogContext(TRIGGER_NAME, o), d = useComposedRefs(a, l.triggerRef);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": l.open,
		"aria-controls": l.contentId,
		"data-state": getState(l.open),
		...c,
		ref: d,
		onClick: composeEventHandlers(i.onClick, l.onOpenToggle)
	});
});
DialogTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal", [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, { forceMount: void 0 }), DialogPortal$1 = (i) => {
	let { __scopeDialog: a, forceMount: o, children: s, container: c } = i, l = useDialogContext(PORTAL_NAME, a);
	return /* @__PURE__ */ jsx(PortalProvider, {
		scope: a,
		forceMount: o,
		children: React$1.Children.map(s, (i) => /* @__PURE__ */ jsx(Presence, {
			present: o || l.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: c,
				children: i
			})
		}))
	});
};
DialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay", DialogOverlay$1 = React$1.forwardRef((i, a) => {
	let o = usePortalContext(OVERLAY_NAME, i.__scopeDialog), { forceMount: s = o.forceMount, ...c } = i, l = useDialogContext(OVERLAY_NAME, i.__scopeDialog);
	return l.modal ? /* @__PURE__ */ jsx(Presence, {
		present: s || l.open,
		children: /* @__PURE__ */ jsx(DialogOverlayImpl, {
			...c,
			ref: a
		})
	}) : null;
});
DialogOverlay$1.displayName = OVERLAY_NAME;
var Slot = /* @__PURE__ */ createSlot("DialogOverlay.RemoveScroll"), DialogOverlayImpl = React$1.forwardRef((i, a) => {
	let { __scopeDialog: o, ...s } = i, c = useDialogContext(OVERLAY_NAME, o);
	return /* @__PURE__ */ jsx(Combination_default, {
		as: Slot,
		allowPinchZoom: !0,
		shards: [c.contentRef],
		children: /* @__PURE__ */ jsx(Primitive.div, {
			"data-state": getState(c.open),
			...s,
			ref: a,
			style: {
				pointerEvents: "auto",
				...s.style
			}
		})
	});
}), CONTENT_NAME = "DialogContent", DialogContent$1 = React$1.forwardRef((i, a) => {
	let o = usePortalContext(CONTENT_NAME, i.__scopeDialog), { forceMount: s = o.forceMount, ...c } = i, l = useDialogContext(CONTENT_NAME, i.__scopeDialog);
	return /* @__PURE__ */ jsx(Presence, {
		present: s || l.open,
		children: l.modal ? /* @__PURE__ */ jsx(DialogContentModal, {
			...c,
			ref: a
		}) : /* @__PURE__ */ jsx(DialogContentNonModal, {
			...c,
			ref: a
		})
	});
});
DialogContent$1.displayName = CONTENT_NAME;
var DialogContentModal = React$1.forwardRef((i, a) => {
	let o = useDialogContext(CONTENT_NAME, i.__scopeDialog), c = React$1.useRef(null), l = useComposedRefs(a, o.contentRef, c);
	return React$1.useEffect(() => {
		let i = c.current;
		if (i) return hideOthers(i);
	}, []), /* @__PURE__ */ jsx(DialogContentImpl, {
		...i,
		ref: l,
		trapFocus: o.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: composeEventHandlers(i.onCloseAutoFocus, (i) => {
			i.preventDefault(), o.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(i.onPointerDownOutside, (i) => {
			let a = i.detail.originalEvent, o = a.button === 0 && a.ctrlKey === !0;
			(a.button === 2 || o) && i.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(i.onFocusOutside, (i) => i.preventDefault())
	});
}), DialogContentNonModal = React$1.forwardRef((i, a) => {
	let o = useDialogContext(CONTENT_NAME, i.__scopeDialog), s = React$1.useRef(!1), c = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(DialogContentImpl, {
		...i,
		ref: a,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (a) => {
			i.onCloseAutoFocus?.(a), a.defaultPrevented || (s.current || o.triggerRef.current?.focus(), a.preventDefault()), s.current = !1, c.current = !1;
		},
		onInteractOutside: (a) => {
			i.onInteractOutside?.(a), a.defaultPrevented || (s.current = !0, a.detail.originalEvent.type === "pointerdown" && (c.current = !0));
			let l = a.target;
			o.triggerRef.current?.contains(l) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && c.current && a.preventDefault();
		}
	});
}), DialogContentImpl = React$1.forwardRef((i, a) => {
	let { __scopeDialog: o, trapFocus: s, onOpenAutoFocus: c, onCloseAutoFocus: l, ...d } = i, f = useDialogContext(CONTENT_NAME, o), p = React$1.useRef(null), m = useComposedRefs(a, p);
	return useFocusGuards(), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(FocusScope, {
		asChild: !0,
		loop: !0,
		trapped: s,
		onMountAutoFocus: c,
		onUnmountAutoFocus: l,
		children: /* @__PURE__ */ jsx(DismissableLayer, {
			role: "dialog",
			id: f.contentId,
			"aria-describedby": f.descriptionId,
			"aria-labelledby": f.titleId,
			"data-state": getState(f.open),
			...d,
			ref: m,
			onDismiss: () => f.onOpenChange(!1)
		})
	}), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(TitleWarning, { titleId: f.titleId }), /* @__PURE__ */ jsx(DescriptionWarning, {
		contentRef: p,
		descriptionId: f.descriptionId
	})] })] });
}), TITLE_NAME = "DialogTitle", DialogTitle$1 = React$1.forwardRef((i, a) => {
	let { __scopeDialog: o, ...s } = i, c = useDialogContext(TITLE_NAME, o);
	return /* @__PURE__ */ jsx(Primitive.h2, {
		id: c.titleId,
		...s,
		ref: a
	});
});
DialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription", DialogDescription$1 = React$1.forwardRef((i, a) => {
	let { __scopeDialog: o, ...s } = i, c = useDialogContext(DESCRIPTION_NAME, o);
	return /* @__PURE__ */ jsx(Primitive.p, {
		id: c.descriptionId,
		...s,
		ref: a
	});
});
DialogDescription$1.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose", DialogClose$1 = React$1.forwardRef((i, a) => {
	let { __scopeDialog: o, ...c } = i, l = useDialogContext(CLOSE_NAME, o);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		...c,
		ref: a,
		onClick: composeEventHandlers(i.onClick, () => l.onOpenChange(!1))
	});
});
DialogClose$1.displayName = CLOSE_NAME;
function getState(i) {
	return i ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning", [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
	contentName: CONTENT_NAME,
	titleName: TITLE_NAME,
	docsSlug: "dialog"
}), TitleWarning = ({ titleId: i }) => {
	let a = useWarningContext(TITLE_WARNING_NAME), o = `\`${a.contentName}\` requires a \`${a.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${a.docsSlug}`;
	return React$1.useEffect(() => {
		i && (document.getElementById(i) || console.error(o));
	}, [o, i]), null;
}, DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning", DescriptionWarning = ({ contentRef: i, descriptionId: a }) => {
	let o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${useWarningContext(DESCRIPTION_WARNING_NAME).contentName}}.`;
	return React$1.useEffect(() => {
		let s = i.current?.getAttribute("aria-describedby");
		a && s && (document.getElementById(a) || console.warn(o));
	}, [
		o,
		i,
		a
	]), null;
}, Root = Dialog$1, Trigger = DialogTrigger$1, Portal$1 = DialogPortal$1, Overlay = DialogOverlay$1, Content = DialogContent$1, Title = DialogTitle$1, Description = DialogDescription$1, Close = DialogClose$1, Sheet = Root, SheetPortal = Portal$1, SheetOverlay = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(Overlay, {
	ref: o,
	className: cn("chatbot-theme fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", i),
	...a
}));
SheetOverlay.displayName = Overlay.displayName;
var SheetContent = React$1.forwardRef(({ side: i = "right", className: a, children: o, ...s }, c) => /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(Content, {
	ref: c,
	className: cn("chatbot-theme fixed z-50 gap-4 border bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-300", i === "right" && "inset-y-0 right-0 h-full w-full max-w-sm data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", i === "left" && "inset-y-0 left-0 h-full w-full max-w-sm data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", a),
	...s,
	children: [o, /* @__PURE__ */ jsxs(Close, {
		className: "ring-offset-background focus:ring-ring data-[state=open]:bg-muted absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",
		children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = Content.displayName;
function SheetHeader({ className: i, ...a }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-col gap-y-1.5 border-b border-border/40 pb-3 text-left", i),
		...a
	});
}
function SheetTitle({ className: i, ...a }) {
	return /* @__PURE__ */ jsx(Title, {
		className: cn("text-lg font-semibold leading-none tracking-tight", i),
		...a
	});
}
function SheetDescription({ className: i, ...a }) {
	return /* @__PURE__ */ jsx(Description, {
		className: cn("text-muted-foreground text-sm", i),
		...a
	});
}
function Dialog({ ...i }) {
	return /* @__PURE__ */ jsx(Root, {
		"data-slot": "dialog",
		...i
	});
}
var DialogTrigger = React$1.forwardRef(({ ...i }, a) => /* @__PURE__ */ jsx(Trigger, {
	"data-slot": "dialog-trigger",
	...i,
	ref: a
}));
DialogTrigger.displayName = Trigger.displayName;
var DialogPortal = Portal$1, DialogOverlay = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(Overlay, {
	ref: o,
	"data-slot": "dialog-overlay",
	className: cn("chatbot-theme fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", i),
	...a
}));
DialogOverlay.displayName = Overlay.displayName;
var DialogContent = React$1.forwardRef(({ className: i, children: a, ...o }, s) => /* @__PURE__ */ jsxs(DialogPortal, {
	"data-slot": "dialog-portal",
	children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(Content, {
		ref: s,
		"data-slot": "dialog-content",
		className: cn("chatbot-theme bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:max-w-lg", i),
		...o,
		children: [a, /* @__PURE__ */ jsxs(Close, {
			className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",
			children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})]
}));
DialogContent.displayName = Content.displayName;
function DialogHeader({ className: i, ...a }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-header",
		className: cn("flex flex-col gap-y-1.5 text-center sm:text-left", i),
		...a
	});
}
function DialogFooter({ className: i, ...a }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-footer",
		className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", i),
		...a
	});
}
var DialogTitle = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(Title, {
	ref: o,
	"data-slot": "dialog-title",
	className: cn("text-lg font-semibold leading-none tracking-tight", i),
	...a
}));
DialogTitle.displayName = Title.displayName;
var DialogDescription = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(Description, {
	ref: o,
	"data-slot": "dialog-description",
	className: cn("text-muted-foreground text-sm", i),
	...a
}));
DialogDescription.displayName = Description.displayName;
var PAGE_SIZE = 20, SEARCH_DEBOUNCE_MS = 300;
function formatThreadDate(i) {
	if (!i) return "";
	try {
		let a = new Date(i);
		if (Number.isNaN(a.getTime())) return "";
		let o = /* @__PURE__ */ new Date(), s = Math.floor((o.getTime() - a.getTime()) / (1e3 * 60 * 60 * 24));
		return s === 0 && a.getDate() === o.getDate() ? a.toLocaleTimeString(void 0, {
			hour: "numeric",
			minute: "2-digit"
		}) : s === 1 || s === 0 && a.getDate() !== o.getDate() ? "Yesterday" : s < 7 ? a.toLocaleDateString(void 0, { weekday: "short" }) : a.toLocaleDateString(void 0, {
			month: "short",
			day: "numeric"
		});
	} catch {
		return "";
	}
}
function groupThreadsByDate(i) {
	let a = [
		{
			title: "Today",
			items: []
		},
		{
			title: "Yesterday",
			items: []
		},
		{
			title: "Previous 7 Days",
			items: []
		},
		{
			title: "Older",
			items: []
		}
	], o = /* @__PURE__ */ new Date();
	o.setHours(0, 0, 0, 0);
	let s = new Date(o);
	s.setDate(s.getDate() - 1);
	let c = new Date(o);
	return c.setDate(c.getDate() - 7), i.forEach((i) => {
		if (!i.updated_at) {
			a[3].items.push(i);
			return;
		}
		let l = new Date(i.updated_at);
		l.setHours(0, 0, 0, 0), l.getTime() === o.getTime() ? a[0].items.push(i) : l.getTime() === s.getTime() ? a[1].items.push(i) : l.getTime() >= c.getTime() ? a[2].items.push(i) : a[3].items.push(i);
	}), a.filter((i) => i.items.length > 0);
}
function ChatHistorySheet({ open: i, onOpenChange: a, userId: s, threadList: c, setThreadList: l, totalThreads: u, setTotalThreads: f, threadsLoading: p, setThreadsLoading: m, currentThreadId: h, onSelectThread: g, getThreads: _, deleteThread: v }) {
	let [y, b] = useState(""), [x, S] = useState(""), [C, w] = useState(!1), [T, E] = useState(null), [D, O] = useState(!1), k = useRef(null), A = useRef(!1), j = useRef(c.length);
	j.current = c.length, useEffect(() => {
		i || (b(""), S(""));
	}, [i]), useEffect(() => {
		if (!y.trim()) {
			S("");
			return;
		}
		let i = setTimeout(() => S(y.trim()), SEARCH_DEBOUNCE_MS);
		return () => clearTimeout(i);
	}, [y]);
	let M = useCallback((i) => {
		a(i), i || (l([]), f(0), b(""), S(""), E(null));
	}, [
		a,
		l,
		f
	]);
	useEffect(() => {
		if (!i || !s?.trim()) return;
		let a = !1;
		return m(!0), l([]), f(0), _({
			limit: PAGE_SIZE,
			offset: 0,
			search: x
		}).then(({ threads: i, total: o }) => {
			a || (l(i), f(o ?? 0));
		}).finally(() => {
			a || m(!1);
		}), () => {
			a = !0;
		};
	}, [
		i,
		s,
		x,
		_,
		l,
		f,
		m
	]), useEffect(() => {
		if (!i || !s?.trim() || p || c.length >= u || u <= 0) return;
		let a = k.current;
		if (!a) return;
		let o = new IntersectionObserver((i) => {
			if (!i[0]?.isIntersecting || A.current) return;
			let a = j.current;
			a >= u || (A.current = !0, w(!0), _({
				limit: PAGE_SIZE,
				offset: a,
				search: x || void 0
			}).then(({ threads: i }) => {
				l((a) => [...a, ...i]);
			}).finally(() => {
				A.current = !1, w(!1);
			}));
		}, {
			root: null,
			rootMargin: "100px",
			threshold: 0
		});
		return o.observe(a), () => o.disconnect();
	}, [
		i,
		s,
		p,
		c.length,
		u,
		x,
		_,
		l
	]);
	let N = useCallback(async () => {
		if (!(!T || !v)) {
			O(!0);
			try {
				await v(T), l((i) => i.filter((i) => i.thread_id !== T)), f(Math.max(0, u - 1)), E(null);
			} catch (i) {
				console.error("Failed to delete thread", i);
			} finally {
				O(!1);
			}
		}
	}, [
		T,
		v,
		l,
		u,
		f
	]);
	return /* @__PURE__ */ jsxs(Sheet, {
		open: i,
		onOpenChange: M,
		children: [/* @__PURE__ */ jsxs(SheetContent, {
			side: "right",
			className: "flex flex-col",
			onInteractOutside: (i) => i.preventDefault(),
			children: [
				/* @__PURE__ */ jsxs(SheetHeader, { children: [/* @__PURE__ */ jsx(SheetTitle, { children: "Chat history" }), /* @__PURE__ */ jsx(SheetDescription, { children: s?.trim() ? "Select a conversation to load." : "Sign in to see your conversations." })] }),
				s?.trim() ? /* @__PURE__ */ jsxs("div", {
					className: "flex items-center bg-muted/50 rounded-lg px-2 py-1.5 focus-within:bg-background focus-within:ring-1 focus-within:ring-ring transition-all",
					children: [/* @__PURE__ */ jsx(Search, { className: "h-4 w-4 shrink-0 text-muted-foreground ml-1" }), /* @__PURE__ */ jsx("input", {
						type: "search",
						placeholder: "Search...",
						value: y,
						onChange: (i) => b(i.target.value),
						className: "flex-1 bg-transparent border-0 outline-none text-sm ml-2 placeholder:text-muted-foreground py-0.5",
						"aria-label": "Search conversations"
					})]
				}) : null,
				/* @__PURE__ */ jsx("div", {
					className: "flex-1 overflow-y-auto min-h-0 scrollbar-thin scrollbar-thumb-muted-foreground/20 hover:scrollbar-thumb-muted-foreground/40",
					children: s?.trim() ? p ? /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center gap-2 py-8 text-muted-foreground",
						children: [/* @__PURE__ */ jsx(LoaderCircle, { className: "h-5 w-5 animate-spin" }), /* @__PURE__ */ jsx("span", { children: "Loading conversations…" })]
					}) : c.length === 0 ? /* @__PURE__ */ jsx("p", {
						className: "text-center text-sm text-muted-foreground py-8",
						children: x ? "No conversations match your search." : "No conversations yet."
					}) : /* @__PURE__ */ jsxs("div", {
						className: "py-2",
						children: [/* @__PURE__ */ jsx(AnimatePresence, {
							mode: "popLayout",
							initial: !1,
							children: groupThreadsByDate(c).map((i, a) => /* @__PURE__ */ jsxs(motion.div, {
								className: "mb-6 last:mb-0",
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: a * .05 },
								children: [/* @__PURE__ */ jsx("h3", {
									className: "px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
									children: i.title
								}), /* @__PURE__ */ jsx("ul", {
									className: "space-y-1",
									children: i.items.map((i) => {
										let a = (i.preview || "").replace(/```[\s\S]*?```|`([^`]*)`|!\[.*?\]\(.*?\)|\[(.*?)\]\(.*?\)|(\*\*|__|\*|_|~~)(.*?)\3|^#{1,6}\s*|^>\s*|^\s*[-*+]\s+|^\s*\d+\.\s+|<[^>]+>/gm, "$1$2$4").trim() || "New Conversation", s = formatThreadDate(i.updated_at);
										return /* @__PURE__ */ jsxs(motion.li, {
											className: "group flex relative list-none",
											layout: !0,
											initial: {
												opacity: 0,
												scale: .98
											},
											animate: {
												opacity: 1,
												scale: 1
											},
											exit: {
												opacity: 0,
												scale: .98
											},
											children: [/* @__PURE__ */ jsx(Button, {
												variant: "ghost",
												className: cn("w-full justify-start font-normal h-auto p-3 relative transition-all duration-200 cursor-pointer", i.thread_id === h ? "bg-muted/80 shadow-sm" : "hover:bg-muted"),
												onClick: () => g(i.thread_id),
												children: /* @__PURE__ */ jsx("div", {
													className: "flex items-start gap-3 w-full overflow-hidden",
													children: /* @__PURE__ */ jsxs("div", {
														className: "flex flex-col items-start overflow-hidden w-full text-left",
														children: [/* @__PURE__ */ jsx("span", {
															className: cn("truncate w-full text-sm", i.thread_id === h ? "font-semibold" : "font-medium"),
															children: a
														}), s && /* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-1.5 mt-0.5 text-[11px] text-muted-foreground",
															children: [/* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }), /* @__PURE__ */ jsx("span", { children: s })]
														})]
													})
												})
											}), v && /* @__PURE__ */ jsx(Button, {
												variant: "ghost",
												size: "icon",
												className: "absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-all focus:opacity-100 z-10",
												onClick: (a) => {
													a.stopPropagation(), E(i.thread_id);
												},
												"aria-label": "Delete conversation",
												children: /* @__PURE__ */ jsx(Trash2, {})
											})]
										}, i.thread_id);
									})
								})]
							}, i.title))
						}), c.length < u ? /* @__PURE__ */ jsx("div", {
							ref: k,
							className: "py-4 flex justify-center",
							children: C ? /* @__PURE__ */ jsx(LoaderCircle, { className: "h-4 w-4 animate-spin text-muted-foreground" }) : null
						}) : null]
					}) : null
				})
			]
		}), /* @__PURE__ */ jsx(Dialog, {
			open: !!T,
			onOpenChange: (i) => !i && !D && E(null),
			children: /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Delete conversation" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Are you sure you want to delete this conversation? This action cannot be undone." })] }), /* @__PURE__ */ jsxs(DialogFooter, {
				className: "mt-4 flex sm:justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					disabled: D,
					onClick: () => E(null),
					children: "Cancel"
				}), /* @__PURE__ */ jsxs(Button, {
					variant: "destructive",
					disabled: D,
					onClick: N,
					className: "mt-2 sm:mt-0",
					children: [D ? /* @__PURE__ */ jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : null, "Delete"]
				})]
			})] })
		})]
	});
}
var createStoreImpl = (i) => {
	let a, o = /* @__PURE__ */ new Set(), s = (i, s) => {
		let c = typeof i == "function" ? i(a) : i;
		if (!Object.is(c, a)) {
			let i = a;
			a = s ?? (typeof c != "object" || !c) ? c : Object.assign({}, a, c), o.forEach((o) => o(a, i));
		}
	}, c = () => a, l = {
		setState: s,
		getState: c,
		getInitialState: () => u,
		subscribe: (i) => (o.add(i), () => o.delete(i))
	}, u = a = i(s, c, l);
	return l;
}, createStore = ((i) => i ? createStoreImpl(i) : createStoreImpl), identity = (i) => i;
function useStore(i, a = identity) {
	let o = React.useSyncExternalStore(i.subscribe, React.useCallback(() => a(i.getState()), [i, a]), React.useCallback(() => a(i.getInitialState()), [i, a]));
	return React.useDebugValue(o), o;
}
var createImpl = (i) => {
	let a = createStore(i), o = (i) => useStore(a, i);
	return Object.assign(o, a), o;
};
const useChatbotStore = ((i) => i ? createImpl(i) : createImpl)((i) => ({
	isMaximized: !1,
	setIsMaximized: (a) => i({ isMaximized: a }),
	historySheetOpen: !1,
	setHistorySheetOpen: (a) => i({ historySheetOpen: a }),
	selectedAgent: "",
	setSelectedAgent: (a) => i({ selectedAgent: a }),
	selectedModel: "",
	setSelectedModel: (a) => i({ selectedModel: a }),
	currentThreadId: void 0,
	setCurrentThreadId: (a) => i({ currentThreadId: a }),
	threadList: [],
	setThreadList: (a) => i((i) => ({ threadList: typeof a == "function" ? a(i.threadList) : a })),
	totalThreads: 0,
	setTotalThreads: (a) => i({ totalThreads: a }),
	threadsLoading: !1,
	setThreadsLoading: (a) => i({ threadsLoading: a })
}));
var DISCLAIMER = "\nThis content is generated by an artificial intelligence. While we strive for accuracy, the AI may occasionally produce incorrect or biased information. \n\n**Important Notes:**\n- Please verify critical information.\n- The AI does not have real-time access to personal data unless shared in this session.\n- Responses are based on training data and specific portfolio context.\n\nBy using this chatbot, you agree to our terms of service regarding AI-generated content.\n", DisclaimerModal = memo(({ disclaimer: i, onClose: a }) => /* @__PURE__ */ jsxs("div", {
	className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
	children: [/* @__PURE__ */ jsx(motion.div, {
		className: "absolute inset-0 bg-background/80 backdrop-blur-sm",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: a
	}), /* @__PURE__ */ jsxs(motion.div, {
		className: "relative z-[70] w-full max-w-md rounded-xl border bg-background p-6 shadow-2xl",
		initial: {
			opacity: 0,
			scale: .95,
			y: 12
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .95,
			y: 12
		},
		role: "dialog",
		"aria-modal": "true",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mb-4 flex items-center justify-between border-b pb-2",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-lg font-bold",
					children: "Disclaimer"
				}), /* @__PURE__ */ jsx(Button, {
					variant: "ghost",
					size: "icon",
					onClick: a,
					"aria-label": "Close dialog",
					children: /* @__PURE__ */ jsx(X, {})
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar text-sm",
				children: /* @__PURE__ */ jsx(LazyMarkdownRenderer, { children: i })
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "mt-6 flex justify-end",
				children: /* @__PURE__ */ jsx(Button, {
					onClick: a,
					children: "Understood"
				})
			})
		]
	})]
}));
DisclaimerModal.displayName = "DisclaimerModal";
function Footer({ disclaimer: i = DISCLAIMER, subtitle: a }) {
	let [o, s] = useState(!1), c = useCallback(() => s(!0), []), l = useCallback(() => s(!1), []);
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t bg-muted/50 px-6 py-3 flex items-center justify-between",
		children: [
			/* @__PURE__ */ jsx("button", {
				onClick: c,
				className: "text-xs text-muted-foreground hover:text-primary cursor-pointer hover:underline transition-colors font-medium",
				children: "Terms & Conditions"
			}),
			a ? /* @__PURE__ */ jsx("div", {
				className: "text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/60",
				children: a
			}) : /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/60",
				children: [/* @__PURE__ */ jsx("span", { children: "Powered by" }), /* @__PURE__ */ jsx("span", {
					className: "text-primary/70",
					children: "ChatUI"
				})]
			}),
			/* @__PURE__ */ jsx(AnimatePresence, { children: o && /* @__PURE__ */ jsx(DisclaimerModal, {
				disclaimer: i,
				onClose: l
			}) })
		]
	});
}
function useVoice(i = {}) {
	let { config: a, onTranscript: o, onSpeechStart: s, onSpeechEnd: c, onError: l } = i, [u, d] = useState(!1), [f, p] = useState(!1), [m, h] = useState(""), [g, _] = useState(""), [v, y] = useState(null), [b, x] = useState([]), [S, C] = useState(null), [w, T] = useState({
		...defaultVoiceConfig,
		...a
	}), [E, D] = useState(() => getVoiceSupport()), O = useRef(null), k = useRef(null);
	useEffect(() => {
		let i = getVoiceSupport();
		if (D(i), i.speechRecognition && (O.current = new SpeechRecognitionManager(w), O.current.onStart = () => {
			d(!0), y(null), s?.();
		}, O.current.onEnd = () => {
			d(!1), c?.();
		}, O.current.onError = (i) => {
			y(i), d(!1), l?.(i);
		}, O.current.onResult = (i, a) => {
			a ? (h((a) => a + i), _("")) : _(i), o?.(i, a);
		}), i.speechSynthesis) {
			k.current = new SpeechSynthesisManager(w), k.current.onStart = () => {
				p(!0);
			}, k.current.onEnd = () => {
				p(!1);
			}, k.current.onError = (i) => {
				y(i), p(!1);
			};
			let i = () => {
				let i = k.current?.getVoices() || [];
				if (x(i), !S && i.length > 0) {
					let a = i.filter((i) => i.lang.toLowerCase().startsWith(w.lang.toLowerCase().split("-")[0]));
					a.length > 0 && C(a[0]);
				}
			};
			i(), typeof window < "u" && window.speechSynthesis && (window.speechSynthesis.onvoiceschanged = i);
		}
		return () => {
			O.current?.destroy(), k.current?.destroy();
		};
	}, []);
	let A = useCallback((i) => {
		T((a) => {
			let o = {
				...a,
				...i
			};
			return O.current?.updateConfig(o), k.current?.updateConfig(o), o;
		});
	}, []), j = useCallback(() => {
		y(null), _(""), O.current?.start();
	}, []), M = useCallback(() => {
		O.current?.stop();
	}, []), N = useCallback(() => {
		u ? M() : j();
	}, [
		u,
		j,
		M
	]), P = useCallback(() => {
		h(""), _("");
	}, []), F = useCallback((i) => {
		y(null);
		let a = stripMarkdownForSpeech(i);
		S && k.current?.updateConfig({ voiceURI: S.voiceURI }), k.current?.speak(a);
	}, [S]), I = useCallback(() => {
		k.current?.stop();
	}, []), L = useCallback(() => {
		k.current?.pause();
	}, []), R = useCallback(() => {
		k.current?.resume();
	}, []), z = useCallback((i) => {
		C(i), i && A({ voiceURI: i.voiceURI });
	}, [A]);
	return {
		isListening: u,
		isSpeaking: f,
		transcript: m,
		interimTranscript: g,
		error: v,
		isRecognitionSupported: E.speechRecognition,
		isSynthesisSupported: E.speechSynthesis,
		startListening: j,
		stopListening: M,
		toggleListening: N,
		clearTranscript: P,
		speak: F,
		stopSpeaking: I,
		pauseSpeaking: L,
		resumeSpeaking: R,
		availableVoices: b,
		selectedVoice: S,
		setSelectedVoice: z,
		voiceConfig: w,
		updateConfig: A
	};
}
function Disclaimer({ onAccept: i, open: a }) {
	return /* @__PURE__ */ jsx(AnimatePresence, { children: a && /* @__PURE__ */ jsx(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "absolute inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-6",
		children: /* @__PURE__ */ jsxs(motion.div, {
			initial: {
				scale: .95,
				opacity: 0,
				y: 10
			},
			animate: {
				scale: 1,
				opacity: 1,
				y: 0
			},
			exit: {
				scale: .95,
				opacity: 0,
				y: 10
			},
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 300
			},
			className: "bg-card border border-border shadow-2xl rounded-2xl p-6 max-w-[320px] w-full space-y-5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center text-center space-y-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "p-3 bg-primary/10 rounded-full text-primary",
						children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-8 w-8" })
					}), /* @__PURE__ */ jsx("h2", {
						className: "text-lg font-bold tracking-tight",
						children: "Welcome"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3 text-center",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground leading-relaxed",
						children: "This AI assistant is designed to help you explore my portfolio."
					}), /* @__PURE__ */ jsx("div", {
						className: "text-center w-full bg-muted/50 rounded-lg p-3 text-xs text-muted-foreground text-left border border-border/50",
						children: "We use local storage to save your preferences for a better experience."
					})]
				}),
				/* @__PURE__ */ jsx(Button, {
					onClick: i,
					className: "w-full font-medium shadow-primary/20 shadow-lg",
					children: "Accept & Continue"
				})
			]
		})
	}) });
}
var MemoizedChatMessages = memo(Chat.Messages), MemoizedChatInput = memo(Chat.Input), MemoizedChatSuggestions = memo(Chat.Suggestions);
function ChatbotLayout({ effectiveAgent: i, showHeader: a, headerTitle: o, headerTitleUrl: s, headerSubtitle: c, avatar: l, allowMaximize: u, onClose: d, onRefresh: f, onHome: p, showFooter: m, footerContent: h, footerSubtitle: g, placeholder: _, starterMessage: v, userId: y, voiceConfig: b, onVoiceConfigChange: x, availableVoices: S, selectedVoice: C, onVoiceChange: w, autoSpeak: T, onAutoSpeakChange: E, deleteThread: D, onMaximizeToggle: O, isMaximized: k }) {
	let { selectedAgent: A, setSelectedAgent: j, selectedModel: M, setSelectedModel: N, currentThreadId: P, setCurrentThreadId: F, historySheetOpen: I, setHistorySheetOpen: L, threadList: R, setThreadList: z, totalThreads: B, setTotalThreads: V, threadsLoading: H, setThreadsLoading: U, isMaximized: W, setIsMaximized: G } = useChatbotStore(), K = k ?? W, { metadata: q, metadataLoading: lw, clearChat: J, loadThread: Y, getThreads: uw, setThreadId: Z, deleteThread: Q } = useChatContext(), dw = D ?? Q, fw = useCallback((i) => {
		J({ keepStarter: !!v }), F(void 0), Z(void 0), j(i);
	}, [
		J,
		v,
		j,
		F,
		Z
	]), pw = useCallback(() => {
		J({
			keepStarter: !!v,
			createNewThread: !0
		}), j(""), F(void 0), Z(void 0);
	}, [
		J,
		v,
		j,
		F,
		Z
	]), mw = f ?? pw, hw = useCallback(() => L(!0), [L]), gw = useCallback((i) => {
		L(!1), Y(i, y), F(i), Z(i);
	}, [
		Y,
		L,
		F,
		Z,
		y
	]), _w = useCallback(() => {
		let i = !K;
		G(i), O?.(i);
	}, [
		K,
		G,
		O
	]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		a && /* @__PURE__ */ jsx(Header, {
			metadata: q,
			selectedAgent: A,
			selectedModel: M,
			onAgentChange: fw,
			onModelChange: N,
			onClose: d,
			onRefresh: mw,
			onHome: p,
			onHistory: y?.trim() ? hw : void 0,
			voiceConfig: b,
			onVoiceConfigChange: x,
			availableVoices: S,
			selectedVoice: C,
			onVoiceChange: w,
			autoSpeak: T,
			onAutoSpeakChange: E,
			isMaximized: K,
			onMaximize: u ? _w : void 0,
			title: o,
			titleUrl: s,
			subtitle: c,
			avatar: l
		}),
		/* @__PURE__ */ jsx(ChatHistorySheet, {
			open: I,
			onOpenChange: L,
			userId: y,
			threadList: R,
			setThreadList: z,
			totalThreads: B,
			setTotalThreads: V,
			threadsLoading: H,
			setThreadsLoading: U,
			currentThreadId: P,
			onSelectThread: gw,
			onNewChat: mw,
			getThreads: uw,
			deleteThread: dw
		}),
		/* @__PURE__ */ jsx("div", {
			className: "flex-1 overflow-hidden flex flex-col",
			children: i ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
				/* @__PURE__ */ jsx(MemoizedChatMessages, { className: "flex-1 min-h-0" }),
				/* @__PURE__ */ jsx(MemoizedChatSuggestions, {}),
				/* @__PURE__ */ jsx(MemoizedChatInput, { placeholder: _ })
			] }) : /* @__PURE__ */ jsx(AgentSelector, {
				agents: q?.agents ?? [],
				loading: lw,
				onSelect: j
			})
		}),
		m && /* @__PURE__ */ jsx(Footer, {
			disclaimer: h,
			subtitle: g
		})
	] });
}
function Chatbot({ url: i, agent: a, model: o, placeholder: s = "Hi, how can I help you?", threadId: c, userId: l, apiKey: u, stream: f = !0, className: p, header: m = {}, footer: h = {}, starter: g = {}, isMaximized: _ }) {
	let { show: v = !0, title: y, titleUrl: b, subtitle: x, avatar: S, allowMaximize: C = !1, onMaximizeToggle: w, onClose: T, onRefresh: E, onHome: D } = m, { show: O = !0, text: k, subtitle: A } = h, { message: j, suggestions: M } = g, N = useChatbotStore((i) => i.isMaximized), P = useChatbotStore((i) => i.setIsMaximized), F = _ ?? N, I = useChatbotStore((i) => i.selectedAgent), L = useChatbotStore((i) => i.setSelectedAgent), R = useChatbotStore((i) => i.selectedModel), z = useChatbotStore((i) => i.setSelectedModel), B = useChatbotStore((i) => i.currentThreadId), V = useChatbotStore((i) => i.setCurrentThreadId);
	useEffect(() => {
		a !== void 0 && L(a);
	}, [a, L]), useEffect(() => {
		o !== void 0 && z(o);
	}, [o, z]), useEffect(() => {
		_ !== void 0 && P(_);
	}, [_, P]);
	let { isListening: H, startListening: U, stopListening: W, speak: G, availableVoices: K, selectedVoice: q, setSelectedVoice: lw, voiceConfig: J, updateConfig: Y, isRecognitionSupported: uw } = useVoice(), [Q, dw] = useState(!1), [fw, mw] = useState(!1);
	useEffect(() => {
		let i = localStorage.getItem("voice-config");
		if (i) try {
			Y(JSON.parse(i));
		} catch (i) {
			console.error("Failed to load voice config", i);
		}
		let a = localStorage.getItem("auto-speak");
		a && dw(a === "true"), localStorage.getItem("chatbot-consent") || mw(!0);
	}, [Y]);
	let hw = useCallback(() => {
		localStorage.setItem("chatbot-consent", "true"), mw(!1);
	}, []);
	useEffect(() => {
		localStorage.setItem("voice-config", JSON.stringify(J));
	}, [J]), useEffect(() => {
		localStorage.setItem("auto-speak", String(Q));
	}, [Q]);
	let [$, _w] = useState(null), yw = useCallback((i) => {
		_w(i), R || z(i.default_model);
	}, [R, z]), bw = useMemo(() => M === void 0 ? $?.agents?.find((i) => i.key === I)?.prompts ?? [] : M, [
		M,
		$?.agents,
		I
	]), xw = I || B && $?.default_agent || "", Sw = useMemo(() => ({
		url: i,
		agent: xw || void 0,
		model: R || void 0,
		threadId: B ?? c,
		userId: l,
		stream: f,
		starterMessage: j,
		starterSuggestions: M,
		apiKey: u,
		onStreamEnd: (i) => {
			Q && i && G && G(i);
		}
	}), [
		i,
		I,
		R,
		B,
		c,
		l,
		f,
		j,
		M,
		Q,
		u,
		G
	]);
	return useEffect(() => {
		c != null && V(c);
	}, [c]), useEffect(() => {
		B && !I && $?.default_agent && L($.default_agent);
	}, [
		B,
		I,
		$?.default_agent
	]), /* @__PURE__ */ jsxs("div", {
		className: cn("chatbot-theme flex flex-col h-full transition-all duration-300 ease-in-out relative", p, F && "fixed inset-0 z-50 m-0 h-full max-h-none w-full max-w-none rounded-none border-0"),
		children: [/* @__PURE__ */ jsx(Disclaimer, {
			open: fw,
			onAccept: hw
		}), /* @__PURE__ */ jsx(Chat.Root, {
			config: Sw,
			initialSuggestions: bw,
			voiceConfig: J,
			isListening: H,
			startListening: U,
			stopListening: W,
			isSpeechSupported: uw,
			onMetadata: yw,
			children: /* @__PURE__ */ jsx(ChatbotLayout, {
				effectiveAgent: xw,
				showHeader: v,
				headerTitle: y,
				headerTitleUrl: b,
				headerSubtitle: x,
				avatar: S,
				allowMaximize: C,
				onClose: T,
				onRefresh: E,
				onHome: D,
				showFooter: O,
				footerContent: k,
				footerSubtitle: A,
				placeholder: s,
				starterMessage: j,
				userId: l,
				voiceConfig: J,
				onVoiceConfigChange: Y,
				availableVoices: K,
				selectedVoice: q,
				onVoiceChange: lw,
				autoSpeak: Q,
				onAutoSpeakChange: dw,
				onMaximizeToggle: w,
				isMaximized: F
			})
		})]
	});
}
function FullChatbot(i) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("w-full h-screen flex flex-col", i.className),
		children: /* @__PURE__ */ jsx(Chatbot, { ...i })
	});
}
function useIsMobile(i) {
	let [a, o] = useState(() => typeof window > "u" ? !1 : window.innerWidth < i || window.innerHeight < i);
	return useEffect(() => {
		let a = () => {
			o(window.innerWidth < Math.max(768, i) || window.innerHeight < Math.max(640, i));
		};
		return window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
	}, [i]), a;
}
var positionClasses = {
	"bottom-right": "bottom-4 right-4",
	"bottom-left": "bottom-4 left-4",
	"top-right": "top-4 right-4",
	"top-left": "top-4 left-4"
};
function PopupChatbot({ buttonClassName: i, buttonStyle: a, popupClassName: o, children: s, position: c = "bottom-right", width: l = 450, height: u = 600, tooltip: f, tooltipDelay: p = 0, defaultOpen: m = !1, ...h }) {
	let [g, v] = useState(m), [y, b] = useState(!1), x = useRef(null), S = useIsMobile(Number(l)), C = S || y, T = typeof l == "number" ? `${l}px` : l, E = typeof u == "number" ? `${u}px` : u, D = useCallback((i) => {
		S || b(i);
	}, [S]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [f && !g ? /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: p,
		children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ jsx(motion.button, {
				onClick: () => v(!g),
				className: cn("chatbot-theme fixed z-50 flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors", positionClasses[c], i),
				whileHover: { scale: 1.05 },
				whileTap: { scale: .95 },
				style: {
					width: "56px",
					height: "56px",
					...a
				},
				children: s || /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "top",
			className: "chatbot-theme",
			children: /* @__PURE__ */ jsx("p", { children: f })
		})] })
	}) : /* @__PURE__ */ jsx(motion.button, {
		onClick: () => v(!g),
		className: cn("chatbot-theme fixed z-50 flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors", positionClasses[c], g && "hidden", i),
		whileHover: { scale: 1.05 },
		whileTap: { scale: .95 },
		style: {
			width: "56px",
			height: "56px",
			...a
		},
		children: s || /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
	}), /* @__PURE__ */ jsx(AnimatePresence, { children: g && /* @__PURE__ */ jsx(motion.div, {
		ref: x,
		initial: {
			opacity: 0,
			scale: .8,
			y: 20
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .8,
			y: 20
		},
		transition: { duration: .2 },
		className: cn("chatbot-theme fixed z-40 bg-background overflow-hidden border shadow-2xl transition-all duration-300 ease-in-out", C ? "inset-0 z-50 h-dvh w-dvw max-h-dvh max-w-dvw rounded-none m-0 border-0" : cn("rounded-lg", positionClasses[c]), o),
		style: C ? {} : {
			width: T,
			height: E
		},
		children: /* @__PURE__ */ jsx(Chatbot, {
			...h,
			header: {
				...h.header,
				onClose: () => v(!1),
				allowMaximize: !S,
				onMaximizeToggle: D
			},
			className: "h-full",
			isMaximized: C
		})
	}) })] });
}
export { Chat, ChatProvider, ChatService, Chatbot, FullChatbot, Header, PopupChatbot, clearChatServiceMetadataCache, useChatContext, useChatRuntime };
