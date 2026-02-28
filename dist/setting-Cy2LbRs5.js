import { t as createLucideIcon } from "./createLucideIcon-C1Qbi7jU.js";
import { A as useComposedRefs, C as composeEventHandlers, O as createSlot$1, S as createContextScope, T as cn, _ as DismissableLayer, a as VISUALLY_HIDDEN_STYLES, b as dispatchDiscreteCustomEvent, c as Portal, d as Content, f as Root2$2, g as useLayoutEffect2, h as useId$1, i as TooltipTrigger, j as Check, k as composeRefs, l as Anchor, m as useSize, n as TooltipContent, o as useControllableState, p as createPopperScope, s as Presence, t as Tooltip, u as Arrow, v as useCallbackRef, w as Button, y as Primitive } from "./tooltip-CFKmWfJL.js";
import { _ as ChevronRight, c as PopoverTrigger, d as FocusScope, f as useFocusGuards, g as Sparkles, h as Volume2, i as getVoiceSupport, l as Combination_default, m as Zap, o as Popover, p as Badge, s as PopoverContent, u as hideOthers } from "./voice.sdk-B_dEErT1.js";
import * as React$1 from "react";
import React, { useEffect, useState } from "react";
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
/* @__NO_SIDE_EFFECTS__ */
function createSlot$3(r) {
	let o = /* @__PURE__ */ createSlotClone$2(r), s = React$1.forwardRef((r, s) => {
		let { children: c, ...l } = r, u = React$1.Children.toArray(c), d = u.find(isSlottable$2);
		if (d) {
			let r = d.props.children, c = u.map((o) => o === d ? React$1.Children.count(r) > 1 ? React$1.Children.only(null) : React$1.isValidElement(r) ? r.props.children : null : o);
			return /* @__PURE__ */ jsx(o, {
				...l,
				ref: s,
				children: React$1.isValidElement(r) ? React$1.cloneElement(r, void 0, c) : null
			});
		}
		return /* @__PURE__ */ jsx(o, {
			...l,
			ref: s,
			children: c
		});
	});
	return s.displayName = `${r}.Slot`, s;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$2(r) {
	let o = React$1.forwardRef((r, o) => {
		let { children: s, ...c } = r;
		if (React$1.isValidElement(s)) {
			let r = getElementRef$2(s), l = mergeProps$2(c, s.props);
			return s.type !== React$1.Fragment && (l.ref = o ? composeRefs(o, r) : r), React$1.cloneElement(s, l);
		}
		return React$1.Children.count(s) > 1 ? React$1.Children.only(null) : null;
	});
	return o.displayName = `${r}.SlotClone`, o;
}
var SLOTTABLE_IDENTIFIER$2 = Symbol("radix.slottable");
function isSlottable$2(r) {
	return React$1.isValidElement(r) && typeof r.type == "function" && "__radixId" in r.type && r.type.__radixId === SLOTTABLE_IDENTIFIER$2;
}
function mergeProps$2(r, o) {
	let s = { ...o };
	for (let c in o) {
		let l = r[c], u = o[c];
		/^on[A-Z]/.test(c) ? l && u ? s[c] = (...r) => {
			let o = u(...r);
			return l(...r), o;
		} : l && (s[c] = l) : c === "style" ? s[c] = {
			...l,
			...u
		} : c === "className" && (s[c] = [l, u].filter(Boolean).join(" "));
	}
	return {
		...r,
		...s
	};
}
function getElementRef$2(r) {
	let o = Object.getOwnPropertyDescriptor(r.props, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning;
	return s ? r.ref : (o = Object.getOwnPropertyDescriptor(r, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning, s ? r.props.ref : r.props.ref || r.ref);
}
function createCollection(r) {
	let s = r + "CollectionProvider", [c, u] = createContextScope(s), [d, f] = c(s, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), p = (r) => {
		let { scope: o, children: s } = r, c = React.useRef(null), l = React.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ jsx(d, {
			scope: o,
			itemMap: l,
			collectionRef: c,
			children: s
		});
	};
	p.displayName = s;
	let m = r + "CollectionSlot", h = /* @__PURE__ */ createSlot$3(m), g = React.forwardRef((r, s) => {
		let { scope: c, children: l } = r;
		return /* @__PURE__ */ jsx(h, {
			ref: useComposedRefs(s, f(m, c).collectionRef),
			children: l
		});
	});
	g.displayName = m;
	let _ = r + "CollectionItemSlot", v = "data-radix-collection-item", y = /* @__PURE__ */ createSlot$3(_), b = React.forwardRef((r, s) => {
		let { scope: c, children: l, ...u } = r, d = React.useRef(null), p = useComposedRefs(s, d), m = f(_, c);
		return React.useEffect(() => (m.itemMap.set(d, {
			ref: d,
			...u
		}), () => void m.itemMap.delete(d))), /* @__PURE__ */ jsx(y, {
			[v]: "",
			ref: p,
			children: l
		});
	});
	b.displayName = _;
	function x(o) {
		let s = f(r + "CollectionConsumer", o);
		return React.useCallback(() => {
			let r = s.collectionRef.current;
			if (!r) return [];
			let o = Array.from(r.querySelectorAll(`[${v}]`));
			return Array.from(s.itemMap.values()).sort((r, s) => o.indexOf(r.ref.current) - o.indexOf(s.ref.current));
		}, [s.collectionRef, s.itemMap]);
	}
	return [
		{
			Provider: p,
			Slot: g,
			ItemSlot: b
		},
		x,
		u
	];
}
var DirectionContext = React$1.createContext(void 0);
function useDirection(r) {
	let o = React$1.useContext(DirectionContext);
	return r || o || "ltr";
}
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus", EVENT_OPTIONS = {
	bubbles: !1,
	cancelable: !0
}, GROUP_NAME$3 = "RovingFocusGroup", [Collection$3, useCollection$3, createCollectionScope$3] = createCollection(GROUP_NAME$3), [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(GROUP_NAME$3, [createCollectionScope$3]), [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME$3), RovingFocusGroup = React$1.forwardRef((r, o) => /* @__PURE__ */ jsx(Collection$3.Provider, {
	scope: r.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ jsx(Collection$3.Slot, {
		scope: r.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ jsx(RovingFocusGroupImpl, {
			...r,
			ref: o
		})
	})
}));
RovingFocusGroup.displayName = GROUP_NAME$3;
var RovingFocusGroupImpl = React$1.forwardRef((r, c) => {
	let { __scopeRovingFocusGroup: l, orientation: u, loop: d = !1, dir: f, currentTabStopId: p, defaultCurrentTabStopId: m, onCurrentTabStopIdChange: h, onEntryFocus: g, preventScrollOnEntryFocus: _ = !1, ...v } = r, y = React$1.useRef(null), b = useComposedRefs(c, y), x = useDirection(f), [S, C] = useControllableState({
		prop: p,
		defaultProp: m ?? null,
		onChange: h,
		caller: GROUP_NAME$3
	}), [w, E] = React$1.useState(!1), D = useCallbackRef(g), O = useCollection$3(l), k = React$1.useRef(!1), [j, N] = React$1.useState(0);
	return React$1.useEffect(() => {
		let r = y.current;
		if (r) return r.addEventListener(ENTRY_FOCUS, D), () => r.removeEventListener(ENTRY_FOCUS, D);
	}, [D]), /* @__PURE__ */ jsx(RovingFocusProvider, {
		scope: l,
		orientation: u,
		dir: x,
		loop: d,
		currentTabStopId: S,
		onItemFocus: React$1.useCallback((r) => C(r), [C]),
		onItemShiftTab: React$1.useCallback(() => E(!0), []),
		onFocusableItemAdd: React$1.useCallback(() => N((r) => r + 1), []),
		onFocusableItemRemove: React$1.useCallback(() => N((r) => r - 1), []),
		children: /* @__PURE__ */ jsx(Primitive.div, {
			tabIndex: w || j === 0 ? -1 : 0,
			"data-orientation": u,
			...v,
			ref: b,
			style: {
				outline: "none",
				...r.style
			},
			onMouseDown: composeEventHandlers(r.onMouseDown, () => {
				k.current = !0;
			}),
			onFocus: composeEventHandlers(r.onFocus, (r) => {
				let o = !k.current;
				if (r.target === r.currentTarget && o && !w) {
					let o = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
					if (r.currentTarget.dispatchEvent(o), !o.defaultPrevented) {
						let r = O().filter((r) => r.focusable);
						focusFirst$1([
							r.find((r) => r.active),
							r.find((r) => r.id === S),
							...r
						].filter(Boolean).map((r) => r.ref.current), _);
					}
				}
				k.current = !1;
			}),
			onBlur: composeEventHandlers(r.onBlur, () => E(!1))
		})
	});
}), ITEM_NAME$3 = "RovingFocusGroupItem", RovingFocusGroupItem = React$1.forwardRef((r, o) => {
	let { __scopeRovingFocusGroup: c, focusable: l = !0, active: u = !1, tabStopId: d, children: f, ...p } = r, m = useId$1(), h = d || m, g = useRovingFocusContext(ITEM_NAME$3, c), _ = g.currentTabStopId === h, y = useCollection$3(c), { onFocusableItemAdd: b, onFocusableItemRemove: x, currentTabStopId: S } = g;
	return React$1.useEffect(() => {
		if (l) return b(), () => x();
	}, [
		l,
		b,
		x
	]), /* @__PURE__ */ jsx(Collection$3.ItemSlot, {
		scope: c,
		id: h,
		focusable: l,
		active: u,
		children: /* @__PURE__ */ jsx(Primitive.span, {
			tabIndex: _ ? 0 : -1,
			"data-orientation": g.orientation,
			...p,
			ref: o,
			onMouseDown: composeEventHandlers(r.onMouseDown, (r) => {
				l ? g.onItemFocus(h) : r.preventDefault();
			}),
			onFocus: composeEventHandlers(r.onFocus, () => g.onItemFocus(h)),
			onKeyDown: composeEventHandlers(r.onKeyDown, (r) => {
				if (r.key === "Tab" && r.shiftKey) {
					g.onItemShiftTab();
					return;
				}
				if (r.target !== r.currentTarget) return;
				let o = getFocusIntent(r, g.orientation, g.dir);
				if (o !== void 0) {
					if (r.metaKey || r.ctrlKey || r.altKey || r.shiftKey) return;
					r.preventDefault();
					let s = y().filter((r) => r.focusable).map((r) => r.ref.current);
					if (o === "last") s.reverse();
					else if (o === "prev" || o === "next") {
						o === "prev" && s.reverse();
						let c = s.indexOf(r.currentTarget);
						s = g.loop ? wrapArray$2(s, c + 1) : s.slice(c + 1);
					}
					setTimeout(() => focusFirst$1(s));
				}
			}),
			children: typeof f == "function" ? f({
				isCurrentTabStop: _,
				hasTabStop: S != null
			}) : f
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
function getDirectionAwareKey(r, o) {
	return o === "rtl" ? r === "ArrowLeft" ? "ArrowRight" : r === "ArrowRight" ? "ArrowLeft" : r : r;
}
function getFocusIntent(r, o, s) {
	let c = getDirectionAwareKey(r.key, s);
	if (!(o === "vertical" && ["ArrowLeft", "ArrowRight"].includes(c)) && !(o === "horizontal" && ["ArrowUp", "ArrowDown"].includes(c))) return MAP_KEY_TO_FOCUS_INTENT[c];
}
function focusFirst$1(r, o = !1) {
	let s = document.activeElement;
	for (let c of r) if (c === s || (c.focus({ preventScroll: o }), document.activeElement !== s)) return;
}
function wrapArray$2(r, o) {
	return r.map((s, c) => r[(o + c) % r.length]);
}
var Root$3 = RovingFocusGroup, Item$1 = RovingFocusGroupItem;
/* @__NO_SIDE_EFFECTS__ */
function createSlot$2(r) {
	let o = /* @__PURE__ */ createSlotClone$1(r), s = React$1.forwardRef((r, s) => {
		let { children: c, ...l } = r, u = React$1.Children.toArray(c), d = u.find(isSlottable$1);
		if (d) {
			let r = d.props.children, c = u.map((o) => o === d ? React$1.Children.count(r) > 1 ? React$1.Children.only(null) : React$1.isValidElement(r) ? r.props.children : null : o);
			return /* @__PURE__ */ jsx(o, {
				...l,
				ref: s,
				children: React$1.isValidElement(r) ? React$1.cloneElement(r, void 0, c) : null
			});
		}
		return /* @__PURE__ */ jsx(o, {
			...l,
			ref: s,
			children: c
		});
	});
	return s.displayName = `${r}.Slot`, s;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$1(r) {
	let o = React$1.forwardRef((r, o) => {
		let { children: s, ...c } = r;
		if (React$1.isValidElement(s)) {
			let r = getElementRef$1(s), l = mergeProps$1(c, s.props);
			return s.type !== React$1.Fragment && (l.ref = o ? composeRefs(o, r) : r), React$1.cloneElement(s, l);
		}
		return React$1.Children.count(s) > 1 ? React$1.Children.only(null) : null;
	});
	return o.displayName = `${r}.SlotClone`, o;
}
var SLOTTABLE_IDENTIFIER$1 = Symbol("radix.slottable");
function isSlottable$1(r) {
	return React$1.isValidElement(r) && typeof r.type == "function" && "__radixId" in r.type && r.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
function mergeProps$1(r, o) {
	let s = { ...o };
	for (let c in o) {
		let l = r[c], u = o[c];
		/^on[A-Z]/.test(c) ? l && u ? s[c] = (...r) => {
			let o = u(...r);
			return l(...r), o;
		} : l && (s[c] = l) : c === "style" ? s[c] = {
			...l,
			...u
		} : c === "className" && (s[c] = [l, u].filter(Boolean).join(" "));
	}
	return {
		...r,
		...s
	};
}
function getElementRef$1(r) {
	let o = Object.getOwnPropertyDescriptor(r.props, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning;
	return s ? r.ref : (o = Object.getOwnPropertyDescriptor(r, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning, s ? r.props.ref : r.props.ref || r.ref);
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
]), usePopperScope$1 = createPopperScope(), useRovingFocusGroupScope = createRovingFocusGroupScope(), [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME), [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME), Menu = (r) => {
	let { __scopeMenu: o, open: s = !1, children: c, dir: l, onOpenChange: u, modal: d = !0 } = r, f = usePopperScope$1(o), [p, m] = React$1.useState(null), h = React$1.useRef(!1), _ = useCallbackRef(u), v = useDirection(l);
	return React$1.useEffect(() => {
		let r = () => {
			h.current = !0, document.addEventListener("pointerdown", o, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", o, {
				capture: !0,
				once: !0
			});
		}, o = () => h.current = !1;
		return document.addEventListener("keydown", r, { capture: !0 }), () => {
			document.removeEventListener("keydown", r, { capture: !0 }), document.removeEventListener("pointerdown", o, { capture: !0 }), document.removeEventListener("pointermove", o, { capture: !0 });
		};
	}, []), /* @__PURE__ */ jsx(Root2$2, {
		...f,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: o,
			open: s,
			onOpenChange: _,
			content: p,
			onContentChange: m,
			children: /* @__PURE__ */ jsx(MenuRootProvider, {
				scope: o,
				onClose: React$1.useCallback(() => _(!1), [_]),
				isUsingKeyboardRef: h,
				dir: v,
				modal: d,
				children: c
			})
		})
	});
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor", MenuAnchor = React$1.forwardRef((r, o) => {
	let { __scopeMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(Anchor, {
		...usePopperScope$1(s),
		...c,
		ref: o
	});
});
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME$2 = "MenuPortal", [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME$2, { forceMount: void 0 }), MenuPortal = (r) => {
	let { __scopeMenu: o, forceMount: s, children: c, container: l } = r, u = useMenuContext(PORTAL_NAME$2, o);
	return /* @__PURE__ */ jsx(PortalProvider, {
		scope: o,
		forceMount: s,
		children: /* @__PURE__ */ jsx(Presence, {
			present: s || u.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: l,
				children: c
			})
		})
	});
};
MenuPortal.displayName = PORTAL_NAME$2;
var CONTENT_NAME$2 = "MenuContent", [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME$2), MenuContent = React$1.forwardRef((r, o) => {
	let s = usePortalContext(CONTENT_NAME$2, r.__scopeMenu), { forceMount: c = s.forceMount, ...l } = r, u = useMenuContext(CONTENT_NAME$2, r.__scopeMenu), d = useMenuRootContext(CONTENT_NAME$2, r.__scopeMenu);
	return /* @__PURE__ */ jsx(Collection$2.Provider, {
		scope: r.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: c || u.open,
			children: /* @__PURE__ */ jsx(Collection$2.Slot, {
				scope: r.__scopeMenu,
				children: d.modal ? /* @__PURE__ */ jsx(MenuRootContentModal, {
					...l,
					ref: o
				}) : /* @__PURE__ */ jsx(MenuRootContentNonModal, {
					...l,
					ref: o
				})
			})
		})
	});
}), MenuRootContentModal = React$1.forwardRef((r, c) => {
	let l = useMenuContext(CONTENT_NAME$2, r.__scopeMenu), u = React$1.useRef(null), d = useComposedRefs(c, u);
	return React$1.useEffect(() => {
		let r = u.current;
		if (r) return hideOthers(r);
	}, []), /* @__PURE__ */ jsx(MenuContentImpl, {
		...r,
		ref: d,
		trapFocus: l.open,
		disableOutsidePointerEvents: l.open,
		disableOutsideScroll: !0,
		onFocusOutside: composeEventHandlers(r.onFocusOutside, (r) => r.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => l.onOpenChange(!1)
	});
}), MenuRootContentNonModal = React$1.forwardRef((r, o) => {
	let s = useMenuContext(CONTENT_NAME$2, r.__scopeMenu);
	return /* @__PURE__ */ jsx(MenuContentImpl, {
		...r,
		ref: o,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => s.onOpenChange(!1)
	});
}), Slot$1 = /* @__PURE__ */ createSlot$2("MenuContent.ScrollLock"), MenuContentImpl = React$1.forwardRef((r, c) => {
	let { __scopeMenu: l, loop: u = !1, trapFocus: f, onOpenAutoFocus: p, onCloseAutoFocus: m, disableOutsidePointerEvents: g, onEntryFocus: _, onEscapeKeyDown: v, onPointerDownOutside: y, onFocusOutside: b, onInteractOutside: x, onDismiss: S, disableOutsideScroll: C, ...w } = r, T = useMenuContext(CONTENT_NAME$2, l), E = useMenuRootContext(CONTENT_NAME$2, l), D = usePopperScope$1(l), O = useRovingFocusGroupScope(l), k = useCollection$2(l), [A, j] = React$1.useState(null), M = React$1.useRef(null), N = useComposedRefs(c, M, T.onContentChange), P = React$1.useRef(0), L = React$1.useRef(""), R = React$1.useRef(0), z = React$1.useRef(null), B = React$1.useRef("right"), V = React$1.useRef(0), H = C ? Combination_default : React$1.Fragment, U = C ? {
		as: Slot$1,
		allowPinchZoom: !0
	} : void 0, W = (r) => {
		let o = L.current + r, s = k().filter((r) => !r.disabled), c = document.activeElement, l = s.find((r) => r.ref.current === c)?.textValue, u = getNextMatch(s.map((r) => r.textValue), o, l), d = s.find((r) => r.textValue === u)?.ref.current;
		(function r(o) {
			L.current = o, window.clearTimeout(P.current), o !== "" && (P.current = window.setTimeout(() => r(""), 1e3));
		})(o), d && setTimeout(() => d.focus());
	};
	React$1.useEffect(() => () => window.clearTimeout(P.current), []), useFocusGuards();
	let G = React$1.useCallback((r) => B.current === z.current?.side && isPointerInGraceArea(r, z.current?.area), []);
	return /* @__PURE__ */ jsx(MenuContentProvider, {
		scope: l,
		searchRef: L,
		onItemEnter: React$1.useCallback((r) => {
			G(r) && r.preventDefault();
		}, [G]),
		onItemLeave: React$1.useCallback((r) => {
			G(r) || (M.current?.focus(), j(null));
		}, [G]),
		onTriggerLeave: React$1.useCallback((r) => {
			G(r) && r.preventDefault();
		}, [G]),
		pointerGraceTimerRef: R,
		onPointerGraceIntentChange: React$1.useCallback((r) => {
			z.current = r;
		}, []),
		children: /* @__PURE__ */ jsx(H, {
			...U,
			children: /* @__PURE__ */ jsx(FocusScope, {
				asChild: !0,
				trapped: f,
				onMountAutoFocus: composeEventHandlers(p, (r) => {
					r.preventDefault(), M.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: m,
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: g,
					onEscapeKeyDown: v,
					onPointerDownOutside: y,
					onFocusOutside: b,
					onInteractOutside: x,
					onDismiss: S,
					children: /* @__PURE__ */ jsx(Root$3, {
						asChild: !0,
						...O,
						dir: E.dir,
						orientation: "vertical",
						loop: u,
						currentTabStopId: A,
						onCurrentTabStopIdChange: j,
						onEntryFocus: composeEventHandlers(_, (r) => {
							E.isUsingKeyboardRef.current || r.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ jsx(Content, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": getOpenState(T.open),
							"data-radix-menu-content": "",
							dir: E.dir,
							...D,
							...w,
							ref: N,
							style: {
								outline: "none",
								...w.style
							},
							onKeyDown: composeEventHandlers(w.onKeyDown, (r) => {
								let o = r.target.closest("[data-radix-menu-content]") === r.currentTarget, s = r.ctrlKey || r.altKey || r.metaKey, c = r.key.length === 1;
								o && (r.key === "Tab" && r.preventDefault(), !s && c && W(r.key));
								let l = M.current;
								if (r.target !== l || !FIRST_LAST_KEYS.includes(r.key)) return;
								r.preventDefault();
								let u = k().filter((r) => !r.disabled).map((r) => r.ref.current);
								LAST_KEYS.includes(r.key) && u.reverse(), focusFirst(u);
							}),
							onBlur: composeEventHandlers(r.onBlur, (r) => {
								r.currentTarget.contains(r.target) || (window.clearTimeout(P.current), L.current = "");
							}),
							onPointerMove: composeEventHandlers(r.onPointerMove, whenMouse((r) => {
								let o = r.target, s = V.current !== r.clientX;
								r.currentTarget.contains(o) && s && (B.current = r.clientX > V.current ? "right" : "left", V.current = r.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
MenuContent.displayName = CONTENT_NAME$2;
var GROUP_NAME$2 = "MenuGroup", MenuGroup = React$1.forwardRef((r, o) => {
	let { __scopeMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(Primitive.div, {
		role: "group",
		...c,
		ref: o
	});
});
MenuGroup.displayName = GROUP_NAME$2;
var LABEL_NAME$2 = "MenuLabel", MenuLabel = React$1.forwardRef((r, o) => {
	let { __scopeMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(Primitive.div, {
		...c,
		ref: o
	});
});
MenuLabel.displayName = LABEL_NAME$2;
var ITEM_NAME$2 = "MenuItem", ITEM_SELECT = "menu.itemSelect", MenuItem = React$1.forwardRef((r, c) => {
	let { disabled: l = !1, onSelect: u, ...d } = r, f = React$1.useRef(null), m = useMenuRootContext(ITEM_NAME$2, r.__scopeMenu), h = useMenuContentContext(ITEM_NAME$2, r.__scopeMenu), g = useComposedRefs(c, f), _ = React$1.useRef(!1), v = () => {
		let r = f.current;
		if (!l && r) {
			let o = new CustomEvent(ITEM_SELECT, {
				bubbles: !0,
				cancelable: !0
			});
			r.addEventListener(ITEM_SELECT, (r) => u?.(r), { once: !0 }), dispatchDiscreteCustomEvent(r, o), o.defaultPrevented ? _.current = !1 : m.onClose();
		}
	};
	return /* @__PURE__ */ jsx(MenuItemImpl, {
		...d,
		ref: g,
		disabled: l,
		onClick: composeEventHandlers(r.onClick, v),
		onPointerDown: (o) => {
			r.onPointerDown?.(o), _.current = !0;
		},
		onPointerUp: composeEventHandlers(r.onPointerUp, (r) => {
			_.current || r.currentTarget?.click();
		}),
		onKeyDown: composeEventHandlers(r.onKeyDown, (r) => {
			let o = h.searchRef.current !== "";
			l || o && r.key === " " || SELECTION_KEYS$1.includes(r.key) && (r.currentTarget.click(), r.preventDefault());
		})
	});
});
MenuItem.displayName = ITEM_NAME$2;
var MenuItemImpl = React$1.forwardRef((r, c) => {
	let { __scopeMenu: l, disabled: u = !1, textValue: d, ...f } = r, p = useMenuContentContext(ITEM_NAME$2, l), m = useRovingFocusGroupScope(l), h = React$1.useRef(null), g = useComposedRefs(c, h), [_, v] = React$1.useState(!1), [y, b] = React$1.useState("");
	return React$1.useEffect(() => {
		let r = h.current;
		r && b((r.textContent ?? "").trim());
	}, [f.children]), /* @__PURE__ */ jsx(Collection$2.ItemSlot, {
		scope: l,
		disabled: u,
		textValue: d ?? y,
		children: /* @__PURE__ */ jsx(Item$1, {
			asChild: !0,
			...m,
			focusable: !u,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				role: "menuitem",
				"data-highlighted": _ ? "" : void 0,
				"aria-disabled": u || void 0,
				"data-disabled": u ? "" : void 0,
				...f,
				ref: g,
				onPointerMove: composeEventHandlers(r.onPointerMove, whenMouse((r) => {
					u ? p.onItemLeave(r) : (p.onItemEnter(r), r.defaultPrevented || r.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: composeEventHandlers(r.onPointerLeave, whenMouse((r) => p.onItemLeave(r))),
				onFocus: composeEventHandlers(r.onFocus, () => v(!0)),
				onBlur: composeEventHandlers(r.onBlur, () => v(!1))
			})
		})
	});
}), CHECKBOX_ITEM_NAME$1 = "MenuCheckboxItem", MenuCheckboxItem = React$1.forwardRef((r, o) => {
	let { checked: c = !1, onCheckedChange: l, ...u } = r;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: r.__scopeMenu,
		checked: c,
		children: /* @__PURE__ */ jsx(MenuItem, {
			role: "menuitemcheckbox",
			"aria-checked": isIndeterminate(c) ? "mixed" : c,
			...u,
			ref: o,
			"data-state": getCheckedState(c),
			onSelect: composeEventHandlers(u.onSelect, () => l?.(isIndeterminate(c) ? !0 : !c), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME$1;
var RADIO_GROUP_NAME$1 = "MenuRadioGroup", [RadioGroupProvider, useRadioGroupContext] = createMenuContext(RADIO_GROUP_NAME$1, {
	value: void 0,
	onValueChange: () => {}
}), MenuRadioGroup = React$1.forwardRef((r, o) => {
	let { value: s, onValueChange: c, ...l } = r, u = useCallbackRef(c);
	return /* @__PURE__ */ jsx(RadioGroupProvider, {
		scope: r.__scopeMenu,
		value: s,
		onValueChange: u,
		children: /* @__PURE__ */ jsx(MenuGroup, {
			...l,
			ref: o
		})
	});
});
MenuRadioGroup.displayName = RADIO_GROUP_NAME$1;
var RADIO_ITEM_NAME$1 = "MenuRadioItem", MenuRadioItem = React$1.forwardRef((r, o) => {
	let { value: c, ...l } = r, u = useRadioGroupContext(RADIO_ITEM_NAME$1, r.__scopeMenu), d = c === u.value;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: r.__scopeMenu,
		checked: d,
		children: /* @__PURE__ */ jsx(MenuItem, {
			role: "menuitemradio",
			"aria-checked": d,
			...l,
			ref: o,
			"data-state": getCheckedState(d),
			onSelect: composeEventHandlers(l.onSelect, () => u.onValueChange?.(c), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuRadioItem.displayName = RADIO_ITEM_NAME$1;
var ITEM_INDICATOR_NAME$1 = "MenuItemIndicator", [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME$1, { checked: !1 }), MenuItemIndicator = React$1.forwardRef((r, o) => {
	let { __scopeMenu: s, forceMount: c, ...l } = r, u = useItemIndicatorContext(ITEM_INDICATOR_NAME$1, s);
	return /* @__PURE__ */ jsx(Presence, {
		present: c || isIndeterminate(u.checked) || u.checked === !0,
		children: /* @__PURE__ */ jsx(Primitive.span, {
			...l,
			ref: o,
			"data-state": getCheckedState(u.checked)
		})
	});
});
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME$1;
var SEPARATOR_NAME$2 = "MenuSeparator", MenuSeparator = React$1.forwardRef((r, o) => {
	let { __scopeMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(Primitive.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...c,
		ref: o
	});
});
MenuSeparator.displayName = SEPARATOR_NAME$2;
var ARROW_NAME$2 = "MenuArrow", MenuArrow = React$1.forwardRef((r, o) => {
	let { __scopeMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(Arrow, {
		...usePopperScope$1(s),
		...c,
		ref: o
	});
});
MenuArrow.displayName = ARROW_NAME$2;
var SUB_NAME = "MenuSub", [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME), MenuSub = (r) => {
	let { __scopeMenu: o, children: s, open: c = !1, onOpenChange: l } = r, u = useMenuContext(SUB_NAME, o), d = usePopperScope$1(o), [f, p] = React$1.useState(null), [m, h] = React$1.useState(null), _ = useCallbackRef(l);
	return React$1.useEffect(() => (u.open === !1 && _(!1), () => _(!1)), [u.open, _]), /* @__PURE__ */ jsx(Root2$2, {
		...d,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: o,
			open: c,
			onOpenChange: _,
			content: m,
			onContentChange: h,
			children: /* @__PURE__ */ jsx(MenuSubProvider, {
				scope: o,
				contentId: useId$1(),
				triggerId: useId$1(),
				trigger: f,
				onTriggerChange: p,
				children: s
			})
		})
	});
};
MenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME$1 = "MenuSubTrigger", MenuSubTrigger = React$1.forwardRef((r, o) => {
	let c = useMenuContext(SUB_TRIGGER_NAME$1, r.__scopeMenu), l = useMenuRootContext(SUB_TRIGGER_NAME$1, r.__scopeMenu), u = useMenuSubContext(SUB_TRIGGER_NAME$1, r.__scopeMenu), d = useMenuContentContext(SUB_TRIGGER_NAME$1, r.__scopeMenu), f = React$1.useRef(null), { pointerGraceTimerRef: p, onPointerGraceIntentChange: m } = d, h = { __scopeMenu: r.__scopeMenu }, g = React$1.useCallback(() => {
		f.current && window.clearTimeout(f.current), f.current = null;
	}, []);
	return React$1.useEffect(() => g, [g]), React$1.useEffect(() => {
		let r = p.current;
		return () => {
			window.clearTimeout(r), m(null);
		};
	}, [p, m]), /* @__PURE__ */ jsx(MenuAnchor, {
		asChild: !0,
		...h,
		children: /* @__PURE__ */ jsx(MenuItemImpl, {
			id: u.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": c.open,
			"aria-controls": u.contentId,
			"data-state": getOpenState(c.open),
			...r,
			ref: composeRefs(o, u.onTriggerChange),
			onClick: (o) => {
				r.onClick?.(o), !(r.disabled || o.defaultPrevented) && (o.currentTarget.focus(), c.open || c.onOpenChange(!0));
			},
			onPointerMove: composeEventHandlers(r.onPointerMove, whenMouse((o) => {
				d.onItemEnter(o), !o.defaultPrevented && !r.disabled && !c.open && !f.current && (d.onPointerGraceIntentChange(null), f.current = window.setTimeout(() => {
					c.onOpenChange(!0), g();
				}, 100));
			})),
			onPointerLeave: composeEventHandlers(r.onPointerLeave, whenMouse((r) => {
				g();
				let o = c.content?.getBoundingClientRect();
				if (o) {
					let s = c.content?.dataset.side, l = s === "right", u = l ? -5 : 5, f = o[l ? "left" : "right"], m = o[l ? "right" : "left"];
					d.onPointerGraceIntentChange({
						area: [
							{
								x: r.clientX + u,
								y: r.clientY
							},
							{
								x: f,
								y: o.top
							},
							{
								x: m,
								y: o.top
							},
							{
								x: m,
								y: o.bottom
							},
							{
								x: f,
								y: o.bottom
							}
						],
						side: s
					}), window.clearTimeout(p.current), p.current = window.setTimeout(() => d.onPointerGraceIntentChange(null), 300);
				} else {
					if (d.onTriggerLeave(r), r.defaultPrevented) return;
					d.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: composeEventHandlers(r.onKeyDown, (o) => {
				let s = d.searchRef.current !== "";
				r.disabled || s && o.key === " " || SUB_OPEN_KEYS[l.dir].includes(o.key) && (c.onOpenChange(!0), c.content?.focus(), o.preventDefault());
			})
		})
	});
});
MenuSubTrigger.displayName = SUB_TRIGGER_NAME$1;
var SUB_CONTENT_NAME$1 = "MenuSubContent", MenuSubContent = React$1.forwardRef((r, c) => {
	let l = usePortalContext(CONTENT_NAME$2, r.__scopeMenu), { forceMount: u = l.forceMount, ...d } = r, f = useMenuContext(CONTENT_NAME$2, r.__scopeMenu), p = useMenuRootContext(CONTENT_NAME$2, r.__scopeMenu), m = useMenuSubContext(SUB_CONTENT_NAME$1, r.__scopeMenu), h = React$1.useRef(null), g = useComposedRefs(c, h);
	return /* @__PURE__ */ jsx(Collection$2.Provider, {
		scope: r.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: u || f.open,
			children: /* @__PURE__ */ jsx(Collection$2.Slot, {
				scope: r.__scopeMenu,
				children: /* @__PURE__ */ jsx(MenuContentImpl, {
					id: m.contentId,
					"aria-labelledby": m.triggerId,
					...d,
					ref: g,
					align: "start",
					side: p.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (r) => {
						p.isUsingKeyboardRef.current && h.current?.focus(), r.preventDefault();
					},
					onCloseAutoFocus: (r) => r.preventDefault(),
					onFocusOutside: composeEventHandlers(r.onFocusOutside, (r) => {
						r.target !== m.trigger && f.onOpenChange(!1);
					}),
					onEscapeKeyDown: composeEventHandlers(r.onEscapeKeyDown, (r) => {
						p.onClose(), r.preventDefault();
					}),
					onKeyDown: composeEventHandlers(r.onKeyDown, (r) => {
						let o = r.currentTarget.contains(r.target), s = SUB_CLOSE_KEYS[p.dir].includes(r.key);
						o && s && (f.onOpenChange(!1), m.trigger?.focus(), r.preventDefault());
					})
				})
			})
		})
	});
});
MenuSubContent.displayName = SUB_CONTENT_NAME$1;
function getOpenState(r) {
	return r ? "open" : "closed";
}
function isIndeterminate(r) {
	return r === "indeterminate";
}
function getCheckedState(r) {
	return isIndeterminate(r) ? "indeterminate" : r ? "checked" : "unchecked";
}
function focusFirst(r) {
	let o = document.activeElement;
	for (let s of r) if (s === o || (s.focus(), document.activeElement !== o)) return;
}
function wrapArray$1(r, o) {
	return r.map((s, c) => r[(o + c) % r.length]);
}
function getNextMatch(r, o, s) {
	let c = o.length > 1 && Array.from(o).every((r) => r === o[0]) ? o[0] : o, l = s ? r.indexOf(s) : -1, u = wrapArray$1(r, Math.max(l, 0));
	c.length === 1 && (u = u.filter((r) => r !== s));
	let d = u.find((r) => r.toLowerCase().startsWith(c.toLowerCase()));
	return d === s ? void 0 : d;
}
function isPointInPolygon(r, o) {
	let { x: s, y: c } = r, l = !1;
	for (let r = 0, u = o.length - 1; r < o.length; u = r++) {
		let d = o[r], f = o[u], p = d.x, m = d.y, h = f.x, g = f.y;
		m > c != g > c && s < (h - p) * (c - m) / (g - m) + p && (l = !l);
	}
	return l;
}
function isPointerInGraceArea(r, o) {
	return o ? isPointInPolygon({
		x: r.clientX,
		y: r.clientY
	}, o) : !1;
}
function whenMouse(r) {
	return (o) => o.pointerType === "mouse" ? r(o) : void 0;
}
var Root3 = Menu, Anchor2 = MenuAnchor, Portal$2 = MenuPortal, Content2$2 = MenuContent, Group = MenuGroup, Label$3 = MenuLabel, Item2$1 = MenuItem, CheckboxItem = MenuCheckboxItem, RadioGroup = MenuRadioGroup, RadioItem = MenuRadioItem, ItemIndicator$1 = MenuItemIndicator, Separator$1 = MenuSeparator, Arrow2 = MenuArrow, SubTrigger = MenuSubTrigger, SubContent = MenuSubContent, DROPDOWN_MENU_NAME = "DropdownMenu", [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(DROPDOWN_MENU_NAME, [createMenuScope]), useMenuScope = createMenuScope(), [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME), DropdownMenu$1 = (r) => {
	let { __scopeDropdownMenu: o, children: s, dir: c, open: l, defaultOpen: u, onOpenChange: d, modal: f = !0 } = r, p = useMenuScope(o), m = React$1.useRef(null), [h, g] = useControllableState({
		prop: l,
		defaultProp: u ?? !1,
		onChange: d,
		caller: DROPDOWN_MENU_NAME
	});
	return /* @__PURE__ */ jsx(DropdownMenuProvider, {
		scope: o,
		triggerId: useId$1(),
		triggerRef: m,
		contentId: useId$1(),
		open: h,
		onOpenChange: g,
		onOpenToggle: React$1.useCallback(() => g((r) => !r), [g]),
		modal: f,
		children: /* @__PURE__ */ jsx(Root3, {
			...p,
			open: h,
			onOpenChange: g,
			dir: c,
			modal: f,
			children: s
		})
	});
};
DropdownMenu$1.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME$1 = "DropdownMenuTrigger", DropdownMenuTrigger$1 = React$1.forwardRef((r, o) => {
	let { __scopeDropdownMenu: c, disabled: l = !1, ...u } = r, d = useDropdownMenuContext(TRIGGER_NAME$1, c);
	return /* @__PURE__ */ jsx(Anchor2, {
		asChild: !0,
		...useMenuScope(c),
		children: /* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			id: d.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": d.open,
			"aria-controls": d.open ? d.contentId : void 0,
			"data-state": d.open ? "open" : "closed",
			"data-disabled": l ? "" : void 0,
			disabled: l,
			...u,
			ref: composeRefs(o, d.triggerRef),
			onPointerDown: composeEventHandlers(r.onPointerDown, (r) => {
				!l && r.button === 0 && r.ctrlKey === !1 && (d.onOpenToggle(), d.open || r.preventDefault());
			}),
			onKeyDown: composeEventHandlers(r.onKeyDown, (r) => {
				l || (["Enter", " "].includes(r.key) && d.onOpenToggle(), r.key === "ArrowDown" && d.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(r.key) && r.preventDefault());
			})
		})
	});
});
DropdownMenuTrigger$1.displayName = TRIGGER_NAME$1;
var PORTAL_NAME$1 = "DropdownMenuPortal", DropdownMenuPortal = (r) => {
	let { __scopeDropdownMenu: o, ...s } = r;
	return /* @__PURE__ */ jsx(Portal$2, {
		...useMenuScope(o),
		...s
	});
};
DropdownMenuPortal.displayName = PORTAL_NAME$1;
var CONTENT_NAME$1 = "DropdownMenuContent", DropdownMenuContent$1 = React$1.forwardRef((r, o) => {
	let { __scopeDropdownMenu: c, ...l } = r, u = useDropdownMenuContext(CONTENT_NAME$1, c), d = useMenuScope(c), f = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(Content2$2, {
		id: u.contentId,
		"aria-labelledby": u.triggerId,
		...d,
		...l,
		ref: o,
		onCloseAutoFocus: composeEventHandlers(r.onCloseAutoFocus, (r) => {
			f.current || u.triggerRef.current?.focus(), f.current = !1, r.preventDefault();
		}),
		onInteractOutside: composeEventHandlers(r.onInteractOutside, (r) => {
			let o = r.detail.originalEvent, s = o.button === 0 && o.ctrlKey === !0, c = o.button === 2 || s;
			(!u.modal || c) && (f.current = !0);
		}),
		style: {
			...r.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
DropdownMenuContent$1.displayName = CONTENT_NAME$1;
var GROUP_NAME$1 = "DropdownMenuGroup", DropdownMenuGroup$1 = React$1.forwardRef((r, o) => {
	let { __scopeDropdownMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(Group, {
		...useMenuScope(s),
		...c,
		ref: o
	});
});
DropdownMenuGroup$1.displayName = GROUP_NAME$1;
var LABEL_NAME$1 = "DropdownMenuLabel", DropdownMenuLabel$1 = React$1.forwardRef((r, o) => {
	let { __scopeDropdownMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(Label$3, {
		...useMenuScope(s),
		...c,
		ref: o
	});
});
DropdownMenuLabel$1.displayName = LABEL_NAME$1;
var ITEM_NAME$1 = "DropdownMenuItem", DropdownMenuItem$1 = React$1.forwardRef((r, o) => {
	let { __scopeDropdownMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(Item2$1, {
		...useMenuScope(s),
		...c,
		ref: o
	});
});
DropdownMenuItem$1.displayName = ITEM_NAME$1;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem", DropdownMenuCheckboxItem$1 = React$1.forwardRef((r, o) => {
	let { __scopeDropdownMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(CheckboxItem, {
		...useMenuScope(s),
		...c,
		ref: o
	});
});
DropdownMenuCheckboxItem$1.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup", DropdownMenuRadioGroup$1 = React$1.forwardRef((r, o) => {
	let { __scopeDropdownMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(RadioGroup, {
		...useMenuScope(s),
		...c,
		ref: o
	});
});
DropdownMenuRadioGroup$1.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem", DropdownMenuRadioItem$1 = React$1.forwardRef((r, o) => {
	let { __scopeDropdownMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(RadioItem, {
		...useMenuScope(s),
		...c,
		ref: o
	});
});
DropdownMenuRadioItem$1.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator", DropdownMenuItemIndicator = React$1.forwardRef((r, o) => {
	let { __scopeDropdownMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(ItemIndicator$1, {
		...useMenuScope(s),
		...c,
		ref: o
	});
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME$1 = "DropdownMenuSeparator", DropdownMenuSeparator$1 = React$1.forwardRef((r, o) => {
	let { __scopeDropdownMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(Separator$1, {
		...useMenuScope(s),
		...c,
		ref: o
	});
});
DropdownMenuSeparator$1.displayName = SEPARATOR_NAME$1;
var ARROW_NAME$1 = "DropdownMenuArrow", DropdownMenuArrow = React$1.forwardRef((r, o) => {
	let { __scopeDropdownMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(Arrow2, {
		...useMenuScope(s),
		...c,
		ref: o
	});
});
DropdownMenuArrow.displayName = ARROW_NAME$1;
var SUB_TRIGGER_NAME = "DropdownMenuSubTrigger", DropdownMenuSubTrigger$1 = React$1.forwardRef((r, o) => {
	let { __scopeDropdownMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(SubTrigger, {
		...useMenuScope(s),
		...c,
		ref: o
	});
});
DropdownMenuSubTrigger$1.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent", DropdownMenuSubContent$1 = React$1.forwardRef((r, o) => {
	let { __scopeDropdownMenu: s, ...c } = r;
	return /* @__PURE__ */ jsx(SubContent, {
		...useMenuScope(s),
		...c,
		ref: o,
		style: {
			...r.style,
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
function DropdownMenu({ ...r }) {
	return /* @__PURE__ */ jsx(Root2$1, {
		"data-slot": "dropdown-menu",
		...r
	});
}
var DropdownMenuTrigger = React$1.forwardRef(({ ...r }, o) => /* @__PURE__ */ jsx(Trigger$1, {
	"data-slot": "dropdown-menu-trigger",
	...r,
	ref: o
}));
DropdownMenuTrigger.displayName = Trigger$1.displayName;
var DropdownMenuContent = React$1.forwardRef(({ className: r, sideOffset: o = 4, ...s }, c) => /* @__PURE__ */ jsx(Portal2, { children: /* @__PURE__ */ jsx(Content2$1, {
	ref: c,
	"data-slot": "dropdown-menu-content",
	sideOffset: o,
	className: cn("chatbot-theme bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", r),
	...s
}) }));
DropdownMenuContent.displayName = Content2$1.displayName;
var DropdownMenuGroup = React$1.forwardRef(({ ...r }, o) => /* @__PURE__ */ jsx(Group2, {
	ref: o,
	"data-slot": "dropdown-menu-group",
	...r
}));
DropdownMenuGroup.displayName = Group2.displayName;
var DropdownMenuItem = React$1.forwardRef(({ className: r, inset: o, variant: s = "default", ...c }, l) => /* @__PURE__ */ jsx(Item2, {
	ref: l,
	"data-slot": "dropdown-menu-item",
	"data-inset": o,
	"data-variant": s,
	className: cn("focus:bg-accent capitalize focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", r),
	...c
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = React$1.forwardRef(({ className: r, children: o, checked: s, ...c }, l) => /* @__PURE__ */ jsxs(CheckboxItem2, {
	ref: l,
	"data-slot": "dropdown-menu-checkbox-item",
	className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", r),
	checked: s,
	...c,
	children: [/* @__PURE__ */ jsx("span", {
		className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(ItemIndicator2, { children: /* @__PURE__ */ jsx(Check, { className: "size-4" }) })
	}), o]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioGroup = React$1.forwardRef(({ ...r }, o) => /* @__PURE__ */ jsx(RadioGroup2, {
	ref: o,
	"data-slot": "dropdown-menu-radio-group",
	...r
}));
DropdownMenuRadioGroup.displayName = RadioGroup2.displayName;
var DropdownMenuRadioItem = React$1.forwardRef(({ className: r, children: o, ...s }, c) => /* @__PURE__ */ jsxs(RadioItem2, {
	ref: c,
	"data-slot": "dropdown-menu-radio-item",
	className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", r),
	...s,
	children: [/* @__PURE__ */ jsx("span", {
		className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(ItemIndicator2, { children: /* @__PURE__ */ jsx(Circle, { className: "size-2 fill-current" }) })
	}), o]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = React$1.forwardRef(({ className: r, inset: o, ...s }, c) => /* @__PURE__ */ jsx(Label2, {
	ref: c,
	"data-slot": "dropdown-menu-label",
	"data-inset": o,
	className: cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", r),
	...s
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = React$1.forwardRef(({ className: r, ...o }, s) => /* @__PURE__ */ jsx(Separator2, {
	ref: s,
	"data-slot": "dropdown-menu-separator",
	className: cn("bg-border -mx-1 my-1 h-px", r),
	...o
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuSubTrigger = React$1.forwardRef(({ className: r, inset: o, children: s, ...c }, l) => /* @__PURE__ */ jsxs(SubTrigger2, {
	ref: l,
	"data-slot": "dropdown-menu-sub-trigger",
	"data-inset": o,
	className: cn("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", r),
	...c,
	children: [s, /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto size-4" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = React$1.forwardRef(({ className: r, ...o }, s) => /* @__PURE__ */ jsx(SubContent2, {
	ref: s,
	"data-slot": "dropdown-menu-sub-content",
	className: cn("chatbot-theme bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", r),
	...o
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
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
].reduce((r, o) => {
	let s = createSlot$1(`Primitive.${o}`), l = React$1.forwardRef((r, c) => {
		let { asChild: l, ...u } = r, d = l ? s : o;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(d, {
			...u,
			ref: c
		});
	});
	return l.displayName = `Primitive.${o}`, {
		...r,
		[o]: l
	};
}, {}), NAME = "Label", Label$2 = React$1.forwardRef((r, o) => /* @__PURE__ */ jsx(Primitive$1.label, {
	...r,
	ref: o,
	onMouseDown: (o) => {
		o.target.closest("button, input, select, textarea") || (r.onMouseDown?.(o), !o.defaultPrevented && o.detail > 1 && o.preventDefault());
	}
}));
Label$2.displayName = NAME;
var Root$2 = Label$2, Label = React$1.forwardRef(({ className: r, ...o }, s) => /* @__PURE__ */ jsx(Root$2, {
	ref: s,
	"data-slot": "label",
	className: cn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", r),
	...o
}));
Label.displayName = Root$2.displayName;
function clamp(r, [o, s]) {
	return Math.min(s, Math.max(o, r));
}
function usePrevious(r) {
	let o = React$1.useRef({
		value: r,
		previous: r
	});
	return React$1.useMemo(() => (o.current.value !== r && (o.current.previous = o.current.value, o.current.value = r), o.current.previous), [r]);
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
}, SLIDER_NAME = "Slider", [Collection$1, useCollection$1, createCollectionScope$1] = createCollection(SLIDER_NAME), [createSliderContext, createSliderScope] = createContextScope(SLIDER_NAME, [createCollectionScope$1]), [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME), Slider$1 = React$1.forwardRef((r, o) => {
	let { name: c, min: l = 0, max: u = 100, step: d = 1, orientation: f = "horizontal", disabled: p = !1, minStepsBetweenThumbs: m = 0, defaultValue: h = [l], value: g, onValueChange: _ = () => {}, onValueCommit: v = () => {}, inverted: y = !1, form: b, ...x } = r, S = React$1.useRef(/* @__PURE__ */ new Set()), C = React$1.useRef(0), w = f === "horizontal" ? SliderHorizontal : SliderVertical, [E = [], D] = useControllableState({
		prop: g,
		defaultProp: h,
		onChange: (r) => {
			[...S.current][C.current]?.focus(), _(r);
		}
	}), O = React$1.useRef(E);
	function k(r) {
		M(r, getClosestValueIndex(E, r));
	}
	function A(r) {
		M(r, C.current);
	}
	function j() {
		let r = O.current[C.current];
		E[C.current] !== r && v(E);
	}
	function M(r, o, { commit: s } = { commit: !1 }) {
		let c = getDecimalCount(d), f = clamp(roundValue(Math.round((r - l) / d) * d + l, c), [l, u]);
		D((r = []) => {
			let c = getNextSortedValues(r, f, o);
			if (hasMinStepsBetweenValues(c, m * d)) {
				C.current = c.indexOf(f);
				let o = String(c) !== String(r);
				return o && s && v(c), o ? c : r;
			} else return r;
		});
	}
	return /* @__PURE__ */ jsx(SliderProvider, {
		scope: r.__scopeSlider,
		name: c,
		disabled: p,
		min: l,
		max: u,
		valueIndexToChangeRef: C,
		thumbs: S.current,
		values: E,
		orientation: f,
		form: b,
		children: /* @__PURE__ */ jsx(Collection$1.Provider, {
			scope: r.__scopeSlider,
			children: /* @__PURE__ */ jsx(Collection$1.Slot, {
				scope: r.__scopeSlider,
				children: /* @__PURE__ */ jsx(w, {
					"aria-disabled": p,
					"data-disabled": p ? "" : void 0,
					...x,
					ref: o,
					onPointerDown: composeEventHandlers(x.onPointerDown, () => {
						p || (O.current = E);
					}),
					min: l,
					max: u,
					inverted: y,
					onSlideStart: p ? void 0 : k,
					onSlideMove: p ? void 0 : A,
					onSlideEnd: p ? void 0 : j,
					onHomeKeyDown: () => !p && M(l, 0, { commit: !0 }),
					onEndKeyDown: () => !p && M(u, E.length - 1, { commit: !0 }),
					onStepKeyDown: ({ event: r, direction: o }) => {
						if (!p) {
							let s = PAGE_KEYS.includes(r.key) || r.shiftKey && ARROW_KEYS.includes(r.key) ? 10 : 1, c = C.current, l = E[c];
							M(l + d * s * o, c, { commit: !0 });
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
}), SliderHorizontal = React$1.forwardRef((r, s) => {
	let { min: c, max: l, dir: u, inverted: d, onSlideStart: f, onSlideMove: p, onSlideEnd: m, onStepKeyDown: h, ...g } = r, [_, v] = React$1.useState(null), y = useComposedRefs(s, (r) => v(r)), b = React$1.useRef(void 0), x = useDirection(u), S = x === "ltr", C = S && !d || !S && d;
	function w(r) {
		let o = b.current || _.getBoundingClientRect(), s = linearScale([0, o.width], C ? [c, l] : [l, c]);
		return b.current = o, s(r - o.left);
	}
	return /* @__PURE__ */ jsx(SliderOrientationProvider, {
		scope: r.__scopeSlider,
		startEdge: C ? "left" : "right",
		endEdge: C ? "right" : "left",
		direction: C ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ jsx(SliderImpl, {
			dir: x,
			"data-orientation": "horizontal",
			...g,
			ref: y,
			style: {
				...g.style,
				"--radix-slider-thumb-transform": "translateX(-50%)"
			},
			onSlideStart: (r) => {
				let o = w(r.clientX);
				f?.(o);
			},
			onSlideMove: (r) => {
				let o = w(r.clientX);
				p?.(o);
			},
			onSlideEnd: () => {
				b.current = void 0, m?.();
			},
			onStepKeyDown: (r) => {
				let o = BACK_KEYS[C ? "from-left" : "from-right"].includes(r.key);
				h?.({
					event: r,
					direction: o ? -1 : 1
				});
			}
		})
	});
}), SliderVertical = React$1.forwardRef((r, s) => {
	let { min: c, max: l, inverted: u, onSlideStart: d, onSlideMove: f, onSlideEnd: p, onStepKeyDown: m, ...h } = r, g = React$1.useRef(null), _ = useComposedRefs(s, g), v = React$1.useRef(void 0), y = !u;
	function b(r) {
		let o = v.current || g.current.getBoundingClientRect(), s = linearScale([0, o.height], y ? [l, c] : [c, l]);
		return v.current = o, s(r - o.top);
	}
	return /* @__PURE__ */ jsx(SliderOrientationProvider, {
		scope: r.__scopeSlider,
		startEdge: y ? "bottom" : "top",
		endEdge: y ? "top" : "bottom",
		size: "height",
		direction: y ? 1 : -1,
		children: /* @__PURE__ */ jsx(SliderImpl, {
			"data-orientation": "vertical",
			...h,
			ref: _,
			style: {
				...h.style,
				"--radix-slider-thumb-transform": "translateY(50%)"
			},
			onSlideStart: (r) => {
				let o = b(r.clientY);
				d?.(o);
			},
			onSlideMove: (r) => {
				let o = b(r.clientY);
				f?.(o);
			},
			onSlideEnd: () => {
				v.current = void 0, p?.();
			},
			onStepKeyDown: (r) => {
				let o = BACK_KEYS[y ? "from-bottom" : "from-top"].includes(r.key);
				m?.({
					event: r,
					direction: o ? -1 : 1
				});
			}
		})
	});
}), SliderImpl = React$1.forwardRef((r, o) => {
	let { __scopeSlider: c, onSlideStart: l, onSlideMove: u, onSlideEnd: d, onHomeKeyDown: f, onEndKeyDown: p, onStepKeyDown: m, ...h } = r, g = useSliderContext(SLIDER_NAME, c);
	return /* @__PURE__ */ jsx(Primitive.span, {
		...h,
		ref: o,
		onKeyDown: composeEventHandlers(r.onKeyDown, (r) => {
			r.key === "Home" ? (f(r), r.preventDefault()) : r.key === "End" ? (p(r), r.preventDefault()) : PAGE_KEYS.concat(ARROW_KEYS).includes(r.key) && (m(r), r.preventDefault());
		}),
		onPointerDown: composeEventHandlers(r.onPointerDown, (r) => {
			let o = r.target;
			o.setPointerCapture(r.pointerId), r.preventDefault(), g.thumbs.has(o) ? o.focus() : l(r);
		}),
		onPointerMove: composeEventHandlers(r.onPointerMove, (r) => {
			r.target.hasPointerCapture(r.pointerId) && u(r);
		}),
		onPointerUp: composeEventHandlers(r.onPointerUp, (r) => {
			let o = r.target;
			o.hasPointerCapture(r.pointerId) && (o.releasePointerCapture(r.pointerId), d(r));
		})
	});
}), TRACK_NAME = "SliderTrack", SliderTrack = React$1.forwardRef((r, o) => {
	let { __scopeSlider: s, ...c } = r, l = useSliderContext(TRACK_NAME, s);
	return /* @__PURE__ */ jsx(Primitive.span, {
		"data-disabled": l.disabled ? "" : void 0,
		"data-orientation": l.orientation,
		...c,
		ref: o
	});
});
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange", SliderRange = React$1.forwardRef((r, s) => {
	let { __scopeSlider: c, ...l } = r, u = useSliderContext(RANGE_NAME, c), d = useSliderOrientationContext(RANGE_NAME, c), f = useComposedRefs(s, React$1.useRef(null)), p = u.values.length, m = u.values.map((r) => convertValueToPercentage(r, u.min, u.max)), h = p > 1 ? Math.min(...m) : 0, g = 100 - Math.max(...m);
	return /* @__PURE__ */ jsx(Primitive.span, {
		"data-orientation": u.orientation,
		"data-disabled": u.disabled ? "" : void 0,
		...l,
		ref: f,
		style: {
			...r.style,
			[d.startEdge]: h + "%",
			[d.endEdge]: g + "%"
		}
	});
});
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME$1 = "SliderThumb", SliderThumb = React$1.forwardRef((r, s) => {
	let c = useCollection$1(r.__scopeSlider), [l, u] = React$1.useState(null), d = useComposedRefs(s, (r) => u(r)), f = React$1.useMemo(() => l ? c().findIndex((r) => r.ref.current === l) : -1, [c, l]);
	return /* @__PURE__ */ jsx(SliderThumbImpl, {
		...r,
		ref: d,
		index: f
	});
}), SliderThumbImpl = React$1.forwardRef((r, c) => {
	let { __scopeSlider: l, index: u, name: d, ...f } = r, p = useSliderContext(THUMB_NAME$1, l), m = useSliderOrientationContext(THUMB_NAME$1, l), [h, g] = React$1.useState(null), _ = useComposedRefs(c, (r) => g(r)), v = h ? p.form || !!h.closest("form") : !0, y = useSize(h), b = p.values[u], x = b === void 0 ? 0 : convertValueToPercentage(b, p.min, p.max), S = getLabel(u, p.values.length), w = y?.[m.size], T = w ? getThumbInBoundsOffset(w, x, m.direction) : 0;
	return React$1.useEffect(() => {
		if (h) return p.thumbs.add(h), () => {
			p.thumbs.delete(h);
		};
	}, [h, p.thumbs]), /* @__PURE__ */ jsxs("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[m.startEdge]: `calc(${x}% + ${T}px)`
		},
		children: [/* @__PURE__ */ jsx(Collection$1.ItemSlot, {
			scope: r.__scopeSlider,
			children: /* @__PURE__ */ jsx(Primitive.span, {
				role: "slider",
				"aria-label": r["aria-label"] || S,
				"aria-valuemin": p.min,
				"aria-valuenow": b,
				"aria-valuemax": p.max,
				"aria-orientation": p.orientation,
				"data-orientation": p.orientation,
				"data-disabled": p.disabled ? "" : void 0,
				tabIndex: p.disabled ? void 0 : 0,
				...f,
				ref: _,
				style: b === void 0 ? { display: "none" } : r.style,
				onFocus: composeEventHandlers(r.onFocus, () => {
					p.valueIndexToChangeRef.current = u;
				})
			})
		}), v && /* @__PURE__ */ jsx(SliderBubbleInput, {
			name: d ?? (p.name ? p.name + (p.values.length > 1 ? "[]" : "") : void 0),
			form: p.form,
			value: b
		}, u)]
	});
});
SliderThumb.displayName = THUMB_NAME$1;
var BUBBLE_INPUT_NAME$2 = "RadioBubbleInput", SliderBubbleInput = React$1.forwardRef(({ __scopeSlider: r, value: s, ...c }, l) => {
	let u = React$1.useRef(null), d = useComposedRefs(u, l), f = usePrevious(s);
	return React$1.useEffect(() => {
		let r = u.current;
		if (!r) return;
		let o = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(o, "value").set;
		if (f !== s && c) {
			let o = new Event("input", { bubbles: !0 });
			c.call(r, s), r.dispatchEvent(o);
		}
	}, [f, s]), /* @__PURE__ */ jsx(Primitive.input, {
		style: { display: "none" },
		...c,
		ref: d,
		defaultValue: s
	});
});
SliderBubbleInput.displayName = BUBBLE_INPUT_NAME$2;
function getNextSortedValues(r = [], o, s) {
	let c = [...r];
	return c[s] = o, c.sort((r, o) => r - o);
}
function convertValueToPercentage(r, o, s) {
	return clamp(100 / (s - o) * (r - o), [0, 100]);
}
function getLabel(r, o) {
	if (o > 2) return `Value ${r + 1} of ${o}`;
	if (o === 2) return ["Minimum", "Maximum"][r];
}
function getClosestValueIndex(r, o) {
	if (r.length === 1) return 0;
	let s = r.map((r) => Math.abs(r - o)), c = Math.min(...s);
	return s.indexOf(c);
}
function getThumbInBoundsOffset(r, o, s) {
	let c = r / 2;
	return (c - linearScale([0, 50], [0, c])(o) * s) * s;
}
function getStepsBetweenValues(r) {
	return r.slice(0, -1).map((o, s) => r[s + 1] - o);
}
function hasMinStepsBetweenValues(r, o) {
	if (o > 0) {
		let s = getStepsBetweenValues(r);
		return Math.min(...s) >= o;
	}
	return !0;
}
function linearScale(r, o) {
	return (s) => {
		if (r[0] === r[1] || o[0] === o[1]) return o[0];
		let c = (o[1] - o[0]) / (r[1] - r[0]);
		return o[0] + c * (s - r[0]);
	};
}
function getDecimalCount(r) {
	return (String(r).split(".")[1] || "").length;
}
function roundValue(r, o) {
	let s = 10 ** o;
	return Math.round(r * s) / s;
}
var Root$1 = Slider$1, Track = SliderTrack, Range = SliderRange, Thumb$1 = SliderThumb, Slider = React$1.forwardRef(({ className: r, defaultValue: o, value: s, min: c = 0, max: l = 100, ...d }, f) => {
	let p = React$1.useMemo(() => Array.isArray(s) ? s : Array.isArray(o) ? o : [c, l], [
		s,
		o,
		c,
		l
	]);
	return /* @__PURE__ */ jsxs(Root$1, {
		ref: f,
		"data-slot": "slider",
		defaultValue: o,
		value: s,
		min: c,
		max: l,
		className: cn("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", r),
		...d,
		children: [/* @__PURE__ */ jsx(Track, {
			"data-slot": "slider-track",
			className: cn("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),
			children: /* @__PURE__ */ jsx(Range, {
				"data-slot": "slider-range",
				className: cn("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
			})
		}), Array.from({ length: p.length }, (r, o) => /* @__PURE__ */ jsx(Thumb$1, {
			"data-slot": "slider-thumb",
			className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
		}, o))]
	});
});
Slider.displayName = Root$1.displayName;
var SWITCH_NAME = "Switch", [createSwitchContext, createSwitchScope] = createContextScope(SWITCH_NAME), [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME), Switch$1 = React$1.forwardRef((r, c) => {
	let { __scopeSwitch: l, name: u, checked: d, defaultChecked: f, required: p, disabled: m, value: h = "on", onCheckedChange: g, form: _, ...v } = r, [y, b] = React$1.useState(null), x = useComposedRefs(c, (r) => b(r)), S = React$1.useRef(!1), C = y ? _ || !!y.closest("form") : !0, [w, E] = useControllableState({
		prop: d,
		defaultProp: f ?? !1,
		onChange: g,
		caller: SWITCH_NAME
	});
	return /* @__PURE__ */ jsxs(SwitchProvider, {
		scope: l,
		checked: w,
		disabled: m,
		children: [/* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			role: "switch",
			"aria-checked": w,
			"aria-required": p,
			"data-state": getState(w),
			"data-disabled": m ? "" : void 0,
			disabled: m,
			value: h,
			...v,
			ref: x,
			onClick: composeEventHandlers(r.onClick, (r) => {
				E((r) => !r), C && (S.current = r.isPropagationStopped(), S.current || r.stopPropagation());
			})
		}), C && /* @__PURE__ */ jsx(SwitchBubbleInput, {
			control: y,
			bubbles: !S.current,
			name: u,
			value: h,
			checked: w,
			required: p,
			disabled: m,
			form: _,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb", SwitchThumb = React$1.forwardRef((r, o) => {
	let { __scopeSwitch: s, ...c } = r, l = useSwitchContext(THUMB_NAME, s);
	return /* @__PURE__ */ jsx(Primitive.span, {
		"data-state": getState(l.checked),
		"data-disabled": l.disabled ? "" : void 0,
		...c,
		ref: o
	});
});
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME$1 = "SwitchBubbleInput", SwitchBubbleInput = React$1.forwardRef(({ __scopeSwitch: r, control: s, checked: c, bubbles: l = !0, ...u }, d) => {
	let f = React$1.useRef(null), p = useComposedRefs(f, d), m = usePrevious(c), h = useSize(s);
	return React$1.useEffect(() => {
		let r = f.current;
		if (!r) return;
		let o = window.HTMLInputElement.prototype, s = Object.getOwnPropertyDescriptor(o, "checked").set;
		if (m !== c && s) {
			let o = new Event("click", { bubbles: l });
			s.call(r, c), r.dispatchEvent(o);
		}
	}, [
		m,
		c,
		l
	]), /* @__PURE__ */ jsx("input", {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: c,
		...u,
		tabIndex: -1,
		ref: p,
		style: {
			...u.style,
			...h,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME$1;
function getState(r) {
	return r ? "checked" : "unchecked";
}
var Root = Switch$1, Thumb = SwitchThumb, Switch = React$1.forwardRef(({ className: r, ...o }, s) => /* @__PURE__ */ jsx(Root, {
	ref: s,
	"data-slot": "switch",
	className: cn("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", r),
	...o,
	children: /* @__PURE__ */ jsx(Thumb, {
		"data-slot": "switch-thumb",
		className: cn("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
	})
}));
Switch.displayName = Root.displayName;
/* @__NO_SIDE_EFFECTS__ */
function createSlot(r) {
	let o = /* @__PURE__ */ createSlotClone(r), s = React$1.forwardRef((r, s) => {
		let { children: c, ...l } = r, u = React$1.Children.toArray(c), d = u.find(isSlottable);
		if (d) {
			let r = d.props.children, c = u.map((o) => o === d ? React$1.Children.count(r) > 1 ? React$1.Children.only(null) : React$1.isValidElement(r) ? r.props.children : null : o);
			return /* @__PURE__ */ jsx(o, {
				...l,
				ref: s,
				children: React$1.isValidElement(r) ? React$1.cloneElement(r, void 0, c) : null
			});
		}
		return /* @__PURE__ */ jsx(o, {
			...l,
			ref: s,
			children: c
		});
	});
	return s.displayName = `${r}.Slot`, s;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(r) {
	let o = React$1.forwardRef((r, o) => {
		let { children: s, ...c } = r;
		if (React$1.isValidElement(s)) {
			let r = getElementRef(s), l = mergeProps(c, s.props);
			return s.type !== React$1.Fragment && (l.ref = o ? composeRefs(o, r) : r), React$1.cloneElement(s, l);
		}
		return React$1.Children.count(s) > 1 ? React$1.Children.only(null) : null;
	});
	return o.displayName = `${r}.SlotClone`, o;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(r) {
	return React$1.isValidElement(r) && typeof r.type == "function" && "__radixId" in r.type && r.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(r, o) {
	let s = { ...o };
	for (let c in o) {
		let l = r[c], u = o[c];
		/^on[A-Z]/.test(c) ? l && u ? s[c] = (...r) => {
			let o = u(...r);
			return l(...r), o;
		} : l && (s[c] = l) : c === "style" ? s[c] = {
			...l,
			...u
		} : c === "className" && (s[c] = [l, u].filter(Boolean).join(" "));
	}
	return {
		...r,
		...s
	};
}
function getElementRef(r) {
	let o = Object.getOwnPropertyDescriptor(r.props, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning;
	return s ? r.ref : (o = Object.getOwnPropertyDescriptor(r, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning, s ? r.props.ref : r.props.ref || r.ref);
}
var OPEN_KEYS = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], SELECTION_KEYS = [" ", "Enter"], SELECT_NAME = "Select", [Collection, useCollection, createCollectionScope] = createCollection(SELECT_NAME), [createSelectContext, createSelectScope] = createContextScope(SELECT_NAME, [createCollectionScope, createPopperScope]), usePopperScope = createPopperScope(), [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME), [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME), Select$1 = (r) => {
	let { __scopeSelect: o, children: s, open: c, defaultOpen: l, onOpenChange: u, value: d, defaultValue: f, onValueChange: p, dir: m, name: h, autoComplete: _, disabled: y, required: b, form: x } = r, S = usePopperScope(o), [C, w] = React$1.useState(null), [E, D] = React$1.useState(null), [O, k] = React$1.useState(!1), A = useDirection(m), [j, M] = useControllableState({
		prop: c,
		defaultProp: l ?? !1,
		onChange: u,
		caller: SELECT_NAME
	}), [N, P] = useControllableState({
		prop: d,
		defaultProp: f,
		onChange: p,
		caller: SELECT_NAME
	}), F = React$1.useRef(null), I = C ? x || !!C.closest("form") : !0, [L, R] = React$1.useState(/* @__PURE__ */ new Set()), z = Array.from(L).map((r) => r.props.value).join(";");
	return /* @__PURE__ */ jsx(Root2$2, {
		...S,
		children: /* @__PURE__ */ jsxs(SelectProvider, {
			required: b,
			scope: o,
			trigger: C,
			onTriggerChange: w,
			valueNode: E,
			onValueNodeChange: D,
			valueNodeHasChildren: O,
			onValueNodeHasChildrenChange: k,
			contentId: useId$1(),
			value: N,
			onValueChange: P,
			open: j,
			onOpenChange: M,
			dir: A,
			triggerPointerDownPosRef: F,
			disabled: y,
			children: [/* @__PURE__ */ jsx(Collection.Provider, {
				scope: o,
				children: /* @__PURE__ */ jsx(SelectNativeOptionsProvider, {
					scope: r.__scopeSelect,
					onNativeOptionAdd: React$1.useCallback((r) => {
						R((o) => new Set(o).add(r));
					}, []),
					onNativeOptionRemove: React$1.useCallback((r) => {
						R((o) => {
							let s = new Set(o);
							return s.delete(r), s;
						});
					}, []),
					children: s
				})
			}), I ? /* @__PURE__ */ jsxs(SelectBubbleInput, {
				"aria-hidden": !0,
				required: b,
				tabIndex: -1,
				name: h,
				autoComplete: _,
				value: N,
				onChange: (r) => P(r.target.value),
				disabled: y,
				form: x,
				children: [N === void 0 ? /* @__PURE__ */ jsx("option", { value: "" }) : null, Array.from(L)]
			}, z) : null]
		})
	});
};
Select$1.displayName = SELECT_NAME;
var TRIGGER_NAME = "SelectTrigger", SelectTrigger$1 = React$1.forwardRef((r, c) => {
	let { __scopeSelect: l, disabled: u = !1, ...d } = r, f = usePopperScope(l), p = useSelectContext(TRIGGER_NAME, l), m = p.disabled || u, h = useComposedRefs(c, p.onTriggerChange), g = useCollection(l), _ = React$1.useRef("touch"), [v, y, b] = useTypeaheadSearch((r) => {
		let o = g().filter((r) => !r.disabled), s = findNextItem(o, r, o.find((r) => r.value === p.value));
		s !== void 0 && p.onValueChange(s.value);
	}), x = (r) => {
		m || (p.onOpenChange(!0), b()), r && (p.triggerPointerDownPosRef.current = {
			x: Math.round(r.pageX),
			y: Math.round(r.pageY)
		});
	};
	return /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...f,
		children: /* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			role: "combobox",
			"aria-controls": p.contentId,
			"aria-expanded": p.open,
			"aria-required": p.required,
			"aria-autocomplete": "none",
			dir: p.dir,
			"data-state": p.open ? "open" : "closed",
			disabled: m,
			"data-disabled": m ? "" : void 0,
			"data-placeholder": shouldShowPlaceholder(p.value) ? "" : void 0,
			...d,
			ref: h,
			onClick: composeEventHandlers(d.onClick, (r) => {
				r.currentTarget.focus(), _.current !== "mouse" && x(r);
			}),
			onPointerDown: composeEventHandlers(d.onPointerDown, (r) => {
				_.current = r.pointerType;
				let o = r.target;
				o.hasPointerCapture(r.pointerId) && o.releasePointerCapture(r.pointerId), r.button === 0 && r.ctrlKey === !1 && r.pointerType === "mouse" && (x(r), r.preventDefault());
			}),
			onKeyDown: composeEventHandlers(d.onKeyDown, (r) => {
				let o = v.current !== "";
				!(r.ctrlKey || r.altKey || r.metaKey) && r.key.length === 1 && y(r.key), !(o && r.key === " ") && OPEN_KEYS.includes(r.key) && (x(), r.preventDefault());
			})
		})
	});
});
SelectTrigger$1.displayName = TRIGGER_NAME;
var VALUE_NAME = "SelectValue", SelectValue$1 = React$1.forwardRef((r, s) => {
	let { __scopeSelect: c, className: l, style: u, children: d, placeholder: f = "", ...p } = r, m = useSelectContext(VALUE_NAME, c), { onValueNodeHasChildrenChange: h } = m, g = d !== void 0, v = useComposedRefs(s, m.onValueNodeChange);
	return useLayoutEffect2(() => {
		h(g);
	}, [h, g]), /* @__PURE__ */ jsx(Primitive.span, {
		...p,
		ref: v,
		style: { pointerEvents: "none" },
		children: shouldShowPlaceholder(m.value) ? /* @__PURE__ */ jsx(Fragment$1, { children: f }) : d
	});
});
SelectValue$1.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon", SelectIcon = React$1.forwardRef((r, o) => {
	let { __scopeSelect: s, children: c, ...l } = r;
	return /* @__PURE__ */ jsx(Primitive.span, {
		"aria-hidden": !0,
		...l,
		ref: o,
		children: c || "▼"
	});
});
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME = "SelectPortal", SelectPortal = (r) => /* @__PURE__ */ jsx(Portal, {
	asChild: !0,
	...r
});
SelectPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "SelectContent", SelectContent$1 = React$1.forwardRef((r, o) => {
	let s = useSelectContext(CONTENT_NAME, r.__scopeSelect), [c, l] = React$1.useState();
	if (useLayoutEffect2(() => {
		l(new DocumentFragment());
	}, []), !s.open) {
		let o = c;
		return o ? ReactDOM$1.createPortal(/* @__PURE__ */ jsx(SelectContentProvider, {
			scope: r.__scopeSelect,
			children: /* @__PURE__ */ jsx(Collection.Slot, {
				scope: r.__scopeSelect,
				children: /* @__PURE__ */ jsx("div", { children: r.children })
			})
		}), o) : null;
	}
	return /* @__PURE__ */ jsx(SelectContentImpl, {
		...r,
		ref: o
	});
});
SelectContent$1.displayName = CONTENT_NAME;
var CONTENT_MARGIN = 10, [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME), CONTENT_IMPL_NAME = "SelectContentImpl", Slot = /* @__PURE__ */ createSlot("SelectContent.RemoveScroll"), SelectContentImpl = React$1.forwardRef((r, c) => {
	let { __scopeSelect: l, position: u = "item-aligned", onCloseAutoFocus: f, onEscapeKeyDown: p, onPointerDownOutside: m, side: h, sideOffset: g, align: _, alignOffset: v, arrowPadding: y, collisionBoundary: b, collisionPadding: x, sticky: S, hideWhenDetached: C, avoidCollisions: w, ...T } = r, E = useSelectContext(CONTENT_NAME, l), [D, O] = React$1.useState(null), [k, A] = React$1.useState(null), j = useComposedRefs(c, (r) => O(r)), [M, N] = React$1.useState(null), [P, L] = React$1.useState(null), R = useCollection(l), [z, B] = React$1.useState(!1), V = React$1.useRef(!1);
	React$1.useEffect(() => {
		if (D) return hideOthers(D);
	}, [D]), useFocusGuards();
	let H = React$1.useCallback((r) => {
		let [o, ...s] = R().map((r) => r.ref.current), [c] = s.slice(-1), l = document.activeElement;
		for (let s of r) if (s === l || (s?.scrollIntoView({ block: "nearest" }), s === o && k && (k.scrollTop = 0), s === c && k && (k.scrollTop = k.scrollHeight), s?.focus(), document.activeElement !== l)) return;
	}, [R, k]), U = React$1.useCallback(() => H([M, D]), [
		H,
		M,
		D
	]);
	React$1.useEffect(() => {
		z && U();
	}, [z, U]);
	let { onOpenChange: G, triggerPointerDownPosRef: K } = E;
	React$1.useEffect(() => {
		if (D) {
			let r = {
				x: 0,
				y: 0
			}, o = (o) => {
				r = {
					x: Math.abs(Math.round(o.pageX) - (K.current?.x ?? 0)),
					y: Math.abs(Math.round(o.pageY) - (K.current?.y ?? 0))
				};
			}, s = (s) => {
				r.x <= 10 && r.y <= 10 ? s.preventDefault() : D.contains(s.target) || G(!1), document.removeEventListener("pointermove", o), K.current = null;
			};
			return K.current !== null && (document.addEventListener("pointermove", o), document.addEventListener("pointerup", s, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", o), document.removeEventListener("pointerup", s, { capture: !0 });
			};
		}
	}, [
		D,
		G,
		K
	]), React$1.useEffect(() => {
		let r = () => G(!1);
		return window.addEventListener("blur", r), window.addEventListener("resize", r), () => {
			window.removeEventListener("blur", r), window.removeEventListener("resize", r);
		};
	}, [G]);
	let [q, J] = useTypeaheadSearch((r) => {
		let o = R().filter((r) => !r.disabled), s = findNextItem(o, r, o.find((r) => r.ref.current === document.activeElement));
		s && setTimeout(() => s.ref.current.focus());
	}), Y = React$1.useCallback((r, o, s) => {
		let c = !V.current && !s;
		(E.value !== void 0 && E.value === o || c) && (N(r), c && (V.current = !0));
	}, [E.value]), X = React$1.useCallback(() => D?.focus(), [D]), Z = React$1.useCallback((r, o, s) => {
		let c = !V.current && !s;
		(E.value !== void 0 && E.value === o || c) && L(r);
	}, [E.value]), Q = u === "popper" ? SelectPopperPosition : SelectItemAlignedPosition, $ = Q === SelectPopperPosition ? {
		side: h,
		sideOffset: g,
		align: _,
		alignOffset: v,
		arrowPadding: y,
		collisionBoundary: b,
		collisionPadding: x,
		sticky: S,
		hideWhenDetached: C,
		avoidCollisions: w
	} : {};
	return /* @__PURE__ */ jsx(SelectContentProvider, {
		scope: l,
		content: D,
		viewport: k,
		onViewportChange: A,
		itemRefCallback: Y,
		selectedItem: M,
		onItemLeave: X,
		itemTextRefCallback: Z,
		focusSelectedItem: U,
		selectedItemText: P,
		position: u,
		isPositioned: z,
		searchRef: q,
		children: /* @__PURE__ */ jsx(Combination_default, {
			as: Slot,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ jsx(FocusScope, {
				asChild: !0,
				trapped: E.open,
				onMountAutoFocus: (r) => {
					r.preventDefault();
				},
				onUnmountAutoFocus: composeEventHandlers(f, (r) => {
					E.trigger?.focus({ preventScroll: !0 }), r.preventDefault();
				}),
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: p,
					onPointerDownOutside: m,
					onFocusOutside: (r) => r.preventDefault(),
					onDismiss: () => E.onOpenChange(!1),
					children: /* @__PURE__ */ jsx(Q, {
						role: "listbox",
						id: E.contentId,
						"data-state": E.open ? "open" : "closed",
						dir: E.dir,
						onContextMenu: (r) => r.preventDefault(),
						...T,
						...$,
						onPlaced: () => B(!0),
						ref: j,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...T.style
						},
						onKeyDown: composeEventHandlers(T.onKeyDown, (r) => {
							let o = r.ctrlKey || r.altKey || r.metaKey;
							if (r.key === "Tab" && r.preventDefault(), !o && r.key.length === 1 && J(r.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(r.key)) {
								let o = R().filter((r) => !r.disabled).map((r) => r.ref.current);
								if (["ArrowUp", "End"].includes(r.key) && (o = o.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(r.key)) {
									let s = r.target, c = o.indexOf(s);
									o = o.slice(c + 1);
								}
								setTimeout(() => H(o)), r.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition", SelectItemAlignedPosition = React$1.forwardRef((r, s) => {
	let { __scopeSelect: c, onPlaced: l, ...u } = r, d = useSelectContext(CONTENT_NAME, c), f = useSelectContentContext(CONTENT_NAME, c), [p, m] = React$1.useState(null), [h, g] = React$1.useState(null), v = useComposedRefs(s, (r) => g(r)), y = useCollection(c), b = React$1.useRef(!1), x = React$1.useRef(!0), { viewport: S, selectedItem: C, selectedItemText: w, focusSelectedItem: T } = f, E = React$1.useCallback(() => {
		if (d.trigger && d.valueNode && p && h && S && C && w) {
			let r = d.trigger.getBoundingClientRect(), o = h.getBoundingClientRect(), s = d.valueNode.getBoundingClientRect(), c = w.getBoundingClientRect();
			if (d.dir !== "rtl") {
				let l = c.left - o.left, u = s.left - l, d = r.left - u, f = r.width + d, m = Math.max(f, o.width), h = window.innerWidth - CONTENT_MARGIN, g = clamp(u, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, h - m)]);
				p.style.minWidth = f + "px", p.style.left = g + "px";
			} else {
				let l = o.right - c.right, u = window.innerWidth - s.right - l, d = window.innerWidth - r.right - u, f = r.width + d, m = Math.max(f, o.width), h = window.innerWidth - CONTENT_MARGIN, g = clamp(u, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, h - m)]);
				p.style.minWidth = f + "px", p.style.right = g + "px";
			}
			let u = y(), f = window.innerHeight - CONTENT_MARGIN * 2, m = S.scrollHeight, g = window.getComputedStyle(h), _ = parseInt(g.borderTopWidth, 10), v = parseInt(g.paddingTop, 10), x = parseInt(g.borderBottomWidth, 10), T = parseInt(g.paddingBottom, 10), E = _ + v + m + T + x, D = Math.min(C.offsetHeight * 5, E), O = window.getComputedStyle(S), k = parseInt(O.paddingTop, 10), A = parseInt(O.paddingBottom, 10), j = r.top + r.height / 2 - CONTENT_MARGIN, M = f - j, N = C.offsetHeight / 2, P = C.offsetTop + N, F = _ + v + P, I = E - F;
			if (F <= j) {
				let r = u.length > 0 && C === u[u.length - 1].ref.current;
				p.style.bottom = "0px";
				let o = h.clientHeight - S.offsetTop - S.offsetHeight, s = F + Math.max(M, N + (r ? A : 0) + o + x);
				p.style.height = s + "px";
			} else {
				let r = u.length > 0 && C === u[0].ref.current;
				p.style.top = "0px";
				let o = Math.max(j, _ + S.offsetTop + (r ? k : 0) + N) + I;
				p.style.height = o + "px", S.scrollTop = F - j + S.offsetTop;
			}
			p.style.margin = `${CONTENT_MARGIN}px 0`, p.style.minHeight = D + "px", p.style.maxHeight = f + "px", l?.(), requestAnimationFrame(() => b.current = !0);
		}
	}, [
		y,
		d.trigger,
		d.valueNode,
		p,
		h,
		S,
		C,
		w,
		d.dir,
		l
	]);
	useLayoutEffect2(() => E(), [E]);
	let [D, O] = React$1.useState();
	return useLayoutEffect2(() => {
		h && O(window.getComputedStyle(h).zIndex);
	}, [h]), /* @__PURE__ */ jsx(SelectViewportProvider, {
		scope: c,
		contentWrapper: p,
		shouldExpandOnScrollRef: b,
		onScrollButtonChange: React$1.useCallback((r) => {
			r && x.current === !0 && (E(), T?.(), x.current = !1);
		}, [E, T]),
		children: /* @__PURE__ */ jsx("div", {
			ref: m,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: D
			},
			children: /* @__PURE__ */ jsx(Primitive.div, {
				...u,
				ref: v,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...u.style
				}
			})
		})
	});
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition", SelectPopperPosition = React$1.forwardRef((r, o) => {
	let { __scopeSelect: s, align: c = "start", collisionPadding: l = CONTENT_MARGIN, ...u } = r;
	return /* @__PURE__ */ jsx(Content, {
		...usePopperScope(s),
		...u,
		ref: o,
		align: c,
		collisionPadding: l,
		style: {
			boxSizing: "border-box",
			...u.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME, {}), VIEWPORT_NAME = "SelectViewport", SelectViewport = React$1.forwardRef((r, c) => {
	let { __scopeSelect: l, nonce: u, ...d } = r, f = useSelectContentContext(VIEWPORT_NAME, l), p = useSelectViewportContext(VIEWPORT_NAME, l), m = useComposedRefs(c, f.onViewportChange), h = React$1.useRef(0);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: u
	}), /* @__PURE__ */ jsx(Collection.Slot, {
		scope: l,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...d,
			ref: m,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...d.style
			},
			onScroll: composeEventHandlers(d.onScroll, (r) => {
				let o = r.currentTarget, { contentWrapper: s, shouldExpandOnScrollRef: c } = p;
				if (c?.current && s) {
					let r = Math.abs(h.current - o.scrollTop);
					if (r > 0) {
						let c = window.innerHeight - CONTENT_MARGIN * 2, l = parseFloat(s.style.minHeight), u = parseFloat(s.style.height), d = Math.max(l, u);
						if (d < c) {
							let l = d + r, u = Math.min(c, l), f = l - u;
							s.style.height = u + "px", s.style.bottom === "0px" && (o.scrollTop = f > 0 ? f : 0, s.style.justifyContent = "flex-end");
						}
					}
				}
				h.current = o.scrollTop;
			})
		})
	})] });
});
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup", [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME), SelectGroup = React$1.forwardRef((r, o) => {
	let { __scopeSelect: s, ...c } = r, l = useId$1();
	return /* @__PURE__ */ jsx(SelectGroupContextProvider, {
		scope: s,
		id: l,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			role: "group",
			"aria-labelledby": l,
			...c,
			ref: o
		})
	});
});
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel", SelectLabel$1 = React$1.forwardRef((r, o) => {
	let { __scopeSelect: s, ...c } = r, l = useSelectGroupContext(LABEL_NAME, s);
	return /* @__PURE__ */ jsx(Primitive.div, {
		id: l.id,
		...c,
		ref: o
	});
});
SelectLabel$1.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem", [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME), SelectItem$1 = React$1.forwardRef((r, c) => {
	let { __scopeSelect: l, value: u, disabled: d = !1, textValue: f, ...p } = r, m = useSelectContext(ITEM_NAME, l), h = useSelectContentContext(ITEM_NAME, l), g = m.value === u, [_, y] = React$1.useState(f ?? ""), [b, x] = React$1.useState(!1), S = useComposedRefs(c, (r) => h.itemRefCallback?.(r, u, d)), C = useId$1(), w = React$1.useRef("touch"), T = () => {
		d || (m.onValueChange(u), m.onOpenChange(!1));
	};
	if (u === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ jsx(SelectItemContextProvider, {
		scope: l,
		value: u,
		disabled: d,
		textId: C,
		isSelected: g,
		onItemTextChange: React$1.useCallback((r) => {
			y((o) => o || (r?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ jsx(Collection.ItemSlot, {
			scope: l,
			value: u,
			disabled: d,
			textValue: _,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				role: "option",
				"aria-labelledby": C,
				"data-highlighted": b ? "" : void 0,
				"aria-selected": g && b,
				"data-state": g ? "checked" : "unchecked",
				"aria-disabled": d || void 0,
				"data-disabled": d ? "" : void 0,
				tabIndex: d ? void 0 : -1,
				...p,
				ref: S,
				onFocus: composeEventHandlers(p.onFocus, () => x(!0)),
				onBlur: composeEventHandlers(p.onBlur, () => x(!1)),
				onClick: composeEventHandlers(p.onClick, () => {
					w.current !== "mouse" && T();
				}),
				onPointerUp: composeEventHandlers(p.onPointerUp, () => {
					w.current === "mouse" && T();
				}),
				onPointerDown: composeEventHandlers(p.onPointerDown, (r) => {
					w.current = r.pointerType;
				}),
				onPointerMove: composeEventHandlers(p.onPointerMove, (r) => {
					w.current = r.pointerType, d ? h.onItemLeave?.() : w.current === "mouse" && r.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: composeEventHandlers(p.onPointerLeave, (r) => {
					r.currentTarget === document.activeElement && h.onItemLeave?.();
				}),
				onKeyDown: composeEventHandlers(p.onKeyDown, (r) => {
					h.searchRef?.current !== "" && r.key === " " || (SELECTION_KEYS.includes(r.key) && T(), r.key === " " && r.preventDefault());
				})
			})
		})
	});
});
SelectItem$1.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText", SelectItemText = React$1.forwardRef((r, s) => {
	let { __scopeSelect: c, className: l, style: u, ...d } = r, f = useSelectContext(ITEM_TEXT_NAME, c), p = useSelectContentContext(ITEM_TEXT_NAME, c), m = useSelectItemContext(ITEM_TEXT_NAME, c), h = useSelectNativeOptionsContext(ITEM_TEXT_NAME, c), [g, v] = React$1.useState(null), y = useComposedRefs(s, (r) => v(r), m.onItemTextChange, (r) => p.itemTextRefCallback?.(r, m.value, m.disabled)), b = g?.textContent, x = React$1.useMemo(() => /* @__PURE__ */ jsx("option", {
		value: m.value,
		disabled: m.disabled,
		children: b
	}, m.value), [
		m.disabled,
		m.value,
		b
	]), { onNativeOptionAdd: S, onNativeOptionRemove: C } = h;
	return useLayoutEffect2(() => (S(x), () => C(x)), [
		S,
		C,
		x
	]), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Primitive.span, {
		id: m.textId,
		...d,
		ref: y
	}), m.isSelected && f.valueNode && !f.valueNodeHasChildren ? ReactDOM$1.createPortal(d.children, f.valueNode) : null] });
});
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator", SelectItemIndicator = React$1.forwardRef((r, o) => {
	let { __scopeSelect: s, ...c } = r;
	return useSelectItemContext(ITEM_INDICATOR_NAME, s).isSelected ? /* @__PURE__ */ jsx(Primitive.span, {
		"aria-hidden": !0,
		...c,
		ref: o
	}) : null;
});
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton", SelectScrollUpButton$1 = React$1.forwardRef((r, s) => {
	let c = useSelectContentContext(SCROLL_UP_BUTTON_NAME, r.__scopeSelect), l = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, r.__scopeSelect), [u, d] = React$1.useState(!1), f = useComposedRefs(s, l.onScrollButtonChange);
	return useLayoutEffect2(() => {
		if (c.viewport && c.isPositioned) {
			let r = function() {
				d(o.scrollTop > 0);
			}, o = c.viewport;
			return r(), o.addEventListener("scroll", r), () => o.removeEventListener("scroll", r);
		}
	}, [c.viewport, c.isPositioned]), u ? /* @__PURE__ */ jsx(SelectScrollButtonImpl, {
		...r,
		ref: f,
		onAutoScroll: () => {
			let { viewport: r, selectedItem: o } = c;
			r && o && (r.scrollTop -= o.offsetHeight);
		}
	}) : null;
});
SelectScrollUpButton$1.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton", SelectScrollDownButton$1 = React$1.forwardRef((r, s) => {
	let c = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, r.__scopeSelect), l = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, r.__scopeSelect), [u, d] = React$1.useState(!1), f = useComposedRefs(s, l.onScrollButtonChange);
	return useLayoutEffect2(() => {
		if (c.viewport && c.isPositioned) {
			let r = function() {
				let r = o.scrollHeight - o.clientHeight;
				d(Math.ceil(o.scrollTop) < r);
			}, o = c.viewport;
			return r(), o.addEventListener("scroll", r), () => o.removeEventListener("scroll", r);
		}
	}, [c.viewport, c.isPositioned]), u ? /* @__PURE__ */ jsx(SelectScrollButtonImpl, {
		...r,
		ref: f,
		onAutoScroll: () => {
			let { viewport: r, selectedItem: o } = c;
			r && o && (r.scrollTop += o.offsetHeight);
		}
	}) : null;
});
SelectScrollDownButton$1.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = React$1.forwardRef((r, o) => {
	let { __scopeSelect: c, onAutoScroll: l, ...u } = r, d = useSelectContentContext("SelectScrollButton", c), f = React$1.useRef(null), p = useCollection(c), m = React$1.useCallback(() => {
		f.current !== null && (window.clearInterval(f.current), f.current = null);
	}, []);
	return React$1.useEffect(() => () => m(), [m]), useLayoutEffect2(() => {
		p().find((r) => r.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [p]), /* @__PURE__ */ jsx(Primitive.div, {
		"aria-hidden": !0,
		...u,
		ref: o,
		style: {
			flexShrink: 0,
			...u.style
		},
		onPointerDown: composeEventHandlers(u.onPointerDown, () => {
			f.current === null && (f.current = window.setInterval(l, 50));
		}),
		onPointerMove: composeEventHandlers(u.onPointerMove, () => {
			d.onItemLeave?.(), f.current === null && (f.current = window.setInterval(l, 50));
		}),
		onPointerLeave: composeEventHandlers(u.onPointerLeave, () => {
			m();
		})
	});
}), SEPARATOR_NAME = "SelectSeparator", SelectSeparator$1 = React$1.forwardRef((r, o) => {
	let { __scopeSelect: s, ...c } = r;
	return /* @__PURE__ */ jsx(Primitive.div, {
		"aria-hidden": !0,
		...c,
		ref: o
	});
});
SelectSeparator$1.displayName = SEPARATOR_NAME;
var ARROW_NAME = "SelectArrow", SelectArrow = React$1.forwardRef((r, o) => {
	let { __scopeSelect: s, ...c } = r, l = usePopperScope(s), u = useSelectContext(ARROW_NAME, s), d = useSelectContentContext(ARROW_NAME, s);
	return u.open && d.position === "popper" ? /* @__PURE__ */ jsx(Arrow, {
		...l,
		...c,
		ref: o
	}) : null;
});
SelectArrow.displayName = ARROW_NAME;
var BUBBLE_INPUT_NAME = "SelectBubbleInput", SelectBubbleInput = React$1.forwardRef(({ __scopeSelect: r, value: s, ...c }, l) => {
	let u = React$1.useRef(null), d = useComposedRefs(l, u), p = usePrevious(s);
	return React$1.useEffect(() => {
		let r = u.current;
		if (!r) return;
		let o = window.HTMLSelectElement.prototype, c = Object.getOwnPropertyDescriptor(o, "value").set;
		if (p !== s && c) {
			let o = new Event("change", { bubbles: !0 });
			c.call(r, s), r.dispatchEvent(o);
		}
	}, [p, s]), /* @__PURE__ */ jsx(Primitive.select, {
		...c,
		style: {
			...VISUALLY_HIDDEN_STYLES,
			...c.style
		},
		ref: d,
		defaultValue: s
	});
});
SelectBubbleInput.displayName = BUBBLE_INPUT_NAME;
function shouldShowPlaceholder(r) {
	return r === "" || r === void 0;
}
function useTypeaheadSearch(r) {
	let o = useCallbackRef(r), s = React$1.useRef(""), c = React$1.useRef(0), l = React$1.useCallback((r) => {
		let l = s.current + r;
		o(l), (function r(o) {
			s.current = o, window.clearTimeout(c.current), o !== "" && (c.current = window.setTimeout(() => r(""), 1e3));
		})(l);
	}, [o]), u = React$1.useCallback(() => {
		s.current = "", window.clearTimeout(c.current);
	}, []);
	return React$1.useEffect(() => () => window.clearTimeout(c.current), []), [
		s,
		l,
		u
	];
}
function findNextItem(r, o, s) {
	let c = o.length > 1 && Array.from(o).every((r) => r === o[0]) ? o[0] : o, l = s ? r.indexOf(s) : -1, u = wrapArray(r, Math.max(l, 0));
	c.length === 1 && (u = u.filter((r) => r !== s));
	let d = u.find((r) => r.textValue.toLowerCase().startsWith(c.toLowerCase()));
	return d === s ? void 0 : d;
}
function wrapArray(r, o) {
	return r.map((s, c) => r[(o + c) % r.length]);
}
var Root2 = Select$1, Trigger = SelectTrigger$1, Value = SelectValue$1, Icon = SelectIcon, Portal$1 = SelectPortal, Content2 = SelectContent$1, Viewport = SelectViewport, Label$1 = SelectLabel$1, Item = SelectItem$1, ItemText = SelectItemText, ItemIndicator = SelectItemIndicator, ScrollUpButton = SelectScrollUpButton$1, ScrollDownButton = SelectScrollDownButton$1, Separator = SelectSeparator$1;
function Select({ ...r }) {
	return /* @__PURE__ */ jsx(Root2, {
		"data-slot": "select",
		...r
	});
}
function SelectValue({ ...r }) {
	return /* @__PURE__ */ jsx(Value, {
		"data-slot": "select-value",
		...r
	});
}
var SelectTrigger = React$1.forwardRef(({ className: r, size: o = "default", children: s, ...c }, l) => /* @__PURE__ */ jsxs(Trigger, {
	ref: l,
	"data-slot": "select-trigger",
	"data-size": o,
	className: cn("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", r),
	...c,
	children: [s, /* @__PURE__ */ jsx(Icon, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = Trigger.displayName;
var SelectContent = React$1.forwardRef(({ className: r, children: o, position: s = "item-aligned", align: c = "center", ...l }, d) => /* @__PURE__ */ jsx(Portal$1, { children: /* @__PURE__ */ jsxs(Content2, {
	ref: d,
	"data-slot": "select-content",
	className: cn("chatbot-theme bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", s === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", r),
	position: s,
	align: c,
	...l,
	children: [
		/* @__PURE__ */ jsx(SelectScrollUpButton, {}),
		/* @__PURE__ */ jsx(Viewport, {
			className: cn("p-1", s === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
			children: o
		}),
		/* @__PURE__ */ jsx(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = Content2.displayName;
var SelectLabel = React$1.forwardRef(({ className: r, ...o }, s) => /* @__PURE__ */ jsx(Label$1, {
	ref: s,
	"data-slot": "select-label",
	className: cn("text-muted-foreground px-2 py-1.5 text-xs", r),
	...o
}));
SelectLabel.displayName = Label$1.displayName;
var SelectItem = React$1.forwardRef(({ className: r, children: o, ...s }, c) => /* @__PURE__ */ jsxs(Item, {
	ref: c,
	"data-slot": "select-item",
	className: cn("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", r),
	...s,
	children: [/* @__PURE__ */ jsx("span", {
		"data-slot": "select-item-indicator",
		className: "absolute right-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "size-4" }) })
	}), /* @__PURE__ */ jsx(ItemText, { children: o })]
}));
SelectItem.displayName = Item.displayName;
var SelectSeparator = React$1.forwardRef(({ className: r, ...o }, s) => /* @__PURE__ */ jsx(Separator, {
	ref: s,
	"data-slot": "select-separator",
	className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", r),
	...o
}));
SelectSeparator.displayName = Separator.displayName;
var SelectScrollUpButton = React$1.forwardRef(({ className: r, ...o }, s) => /* @__PURE__ */ jsx(ScrollUpButton, {
	ref: s,
	"data-slot": "select-scroll-up-button",
	className: cn("flex cursor-default items-center justify-center py-1", r),
	...o,
	children: /* @__PURE__ */ jsx(ChevronUp, { className: "size-4" })
}));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
var SelectScrollDownButton = React$1.forwardRef(({ className: r, ...o }, s) => /* @__PURE__ */ jsx(ScrollDownButton, {
	ref: s,
	"data-slot": "select-scroll-down-button",
	className: cn("flex cursor-default items-center justify-center py-1", r),
	...o,
	children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-4" })
}));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
function Setting({ metadata: r, selectedAgent: o, selectedModel: s, onAgentChange: c, onModelChange: l, voiceConfig: d, onVoiceConfigChange: f, availableVoices: p, selectedVoice: m, onVoiceChange: h, autoSpeak: g, onAutoSpeakChange: _ }) {
	let v = r?.agents.find((r) => r.key === o), b = s, [x, S] = useState(() => getVoiceSupport());
	useEffect(() => {
		S(getVoiceSupport());
	}, []);
	let C = p?.reduce((r, o) => {
		let s = o.lang.split("-")[0].toUpperCase();
		return r[s] || (r[s] = []), r[s].push(o), r;
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
	}, E = d && f && p && h && (x.speechRecognition || x.speechSynthesis);
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
									children: v?.key || o
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
								r?.agents.map((r) => /* @__PURE__ */ jsx(DropdownMenuItem, {
									onClick: () => c(r.key),
									className: cn("cursor-pointer text-xs", o === r.key && "bg-primary/10 text-primary focus:bg-primary/15 focus:text-primary"),
									children: /* @__PURE__ */ jsx("div", {
										className: "flex flex-col gap-0.5",
										children: /* @__PURE__ */ jsx("span", {
											className: "font-medium",
											children: r.key
										})
									})
								}, r.key))
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
								r?.models.map((r) => /* @__PURE__ */ jsx(DropdownMenuItem, {
									onClick: () => l(r),
									className: cn("cursor-pointer text-xs", s === r && "bg-primary/10 text-primary focus:bg-primary/15 focus:text-primary"),
									children: r
								}, r))
							]
						})] })]
					})]
				}), v?.description && /* @__PURE__ */ jsx("div", {
					className: "text-[11px] text-muted-foreground bg-muted/30 p-2 rounded-md border border-border/40 leading-relaxed",
					children: v.description
				})]
			}), E && /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", {
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
								checked: g,
								onCheckedChange: _,
								className: "scale-75 origin-right"
							})]
						}), x.speechRecognition && d && f && /* @__PURE__ */ jsxs("div", {
							className: "flex w-full justify-between",
							children: [/* @__PURE__ */ jsxs(Label, {
								className: "text-[10px] uppercase font-bold text-muted-foreground flex items-center gap-1",
								children: [/* @__PURE__ */ jsx(Languages, { className: "h-3 w-3" }), " Input Language"]
							}), /* @__PURE__ */ jsxs(Select, {
								value: d.lang,
								onValueChange: (r) => f({ lang: r }),
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
							onValueChange: (r) => {
								h(p.find((o) => o.voiceURI === r) || null);
							},
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								className: "w-full text-xs h-9",
								children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a voice" })
							}), /* @__PURE__ */ jsx(SelectContent, {
								className: "max-h-[300px]",
								children: Object.entries(C).map(([r, o]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "px-2 py-1.5 text-[10px] font-bold text-muted-foreground bg-muted/40 sticky top-0 z-10 backdrop-blur-sm",
									children: T[r] || r
								}), o.map((r) => /* @__PURE__ */ jsx(SelectItem, {
									value: r.voiceURI,
									className: "pl-4 text-xs cursor-pointer",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "truncate max-w-[200px]",
											children: r.name
										}), r.localService && /* @__PURE__ */ jsx(Badge, {
											variant: "secondary",
											className: "text-[9px] px-1 h-4 rounded-sm",
											children: "Local"
										})]
									})
								}, r.voiceURI))] }, r))
							})]
						})]
					}),
					x.speechSynthesis && d && f && /* @__PURE__ */ jsxs("div", {
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
									onValueChange: ([r]) => f({ rate: r }),
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
									onValueChange: ([r]) => f({ pitch: r }),
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
									onValueChange: ([r]) => f({ volume: r }),
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
