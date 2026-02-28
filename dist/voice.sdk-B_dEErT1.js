import { t as createLucideIcon } from "./createLucideIcon-C1Qbi7jU.js";
import { A as useComposedRefs, C as composeEventHandlers, D as Slot$1, E as cva, S as createContextScope, T as cn, _ as DismissableLayer, c as Portal, d as Content, f as Root2$1, h as useId$1, k as composeRefs, l as Anchor, o as useControllableState, p as createPopperScope, s as Presence, u as Arrow, v as useCallbackRef$1, y as Primitive } from "./tooltip-CFKmWfJL.js";
import * as React$1 from "react";
import { useState } from "react";
import { Fragment as Fragment$1, jsx } from "react/jsx-runtime";
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
}]]), badgeVariants = cva("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
		secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
		destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
		outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
	} },
	defaultVariants: { variant: "default" }
}), Badge = React$1.forwardRef(({ className: n, variant: j, asChild: M = !1, ...P }, F) => /* @__PURE__ */ jsx(M ? Slot$1 : "span", {
	ref: F,
	"data-slot": "badge",
	className: cn(badgeVariants({ variant: j }), n),
	...P
}));
Badge.displayName = "Badge";
var count = 0;
function useFocusGuards() {
	React$1.useEffect(() => {
		let n = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", n[0] ?? createFocusGuard()), document.body.insertAdjacentElement("beforeend", n[1] ?? createFocusGuard()), count++, () => {
			count === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), count--;
		};
	}, []);
}
function createFocusGuard() {
	let n = document.createElement("span");
	return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount", AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount", EVENT_OPTIONS = {
	bubbles: !1,
	cancelable: !0
}, FOCUS_SCOPE_NAME = "FocusScope", FocusScope = React$1.forwardRef((n, M) => {
	let { loop: N = !1, trapped: P = !1, onMountAutoFocus: F, onUnmountAutoFocus: I, ...L } = n, [R, z] = React$1.useState(null), B = useCallbackRef$1(F), V = useCallbackRef$1(I), H = React$1.useRef(null), U = useComposedRefs(M, (n) => z(n)), W = React$1.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	React$1.useEffect(() => {
		if (P) {
			let n = function(n) {
				if (W.paused || !R) return;
				let j = n.target;
				R.contains(j) ? H.current = j : focus(H.current, { select: !0 });
			}, j = function(n) {
				if (W.paused || !R) return;
				let j = n.relatedTarget;
				j !== null && (R.contains(j) || focus(H.current, { select: !0 }));
			}, M = function(n) {
				if (document.activeElement === document.body) for (let j of n) j.removedNodes.length > 0 && focus(R);
			};
			document.addEventListener("focusin", n), document.addEventListener("focusout", j);
			let N = new MutationObserver(M);
			return R && N.observe(R, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", n), document.removeEventListener("focusout", j), N.disconnect();
			};
		}
	}, [
		P,
		R,
		W.paused
	]), React$1.useEffect(() => {
		if (R) {
			focusScopesStack.add(W);
			let n = document.activeElement;
			if (!R.contains(n)) {
				let j = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
				R.addEventListener(AUTOFOCUS_ON_MOUNT, B), R.dispatchEvent(j), j.defaultPrevented || (focusFirst(removeLinks(getTabbableCandidates(R)), { select: !0 }), document.activeElement === n && focus(R));
			}
			return () => {
				R.removeEventListener(AUTOFOCUS_ON_MOUNT, B), setTimeout(() => {
					let j = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
					R.addEventListener(AUTOFOCUS_ON_UNMOUNT, V), R.dispatchEvent(j), j.defaultPrevented || focus(n ?? document.body, { select: !0 }), R.removeEventListener(AUTOFOCUS_ON_UNMOUNT, V), focusScopesStack.remove(W);
				}, 0);
			};
		}
	}, [
		R,
		B,
		V,
		W
	]);
	let G = React$1.useCallback((n) => {
		if (!N && !P || W.paused) return;
		let j = n.key === "Tab" && !n.altKey && !n.ctrlKey && !n.metaKey, M = document.activeElement;
		if (j && M) {
			let j = n.currentTarget, [P, F] = getTabbableEdges(j);
			P && F ? !n.shiftKey && M === F ? (n.preventDefault(), N && focus(P, { select: !0 })) : n.shiftKey && M === P && (n.preventDefault(), N && focus(F, { select: !0 })) : M === j && n.preventDefault();
		}
	}, [
		N,
		P,
		W.paused
	]);
	return /* @__PURE__ */ jsx(Primitive.div, {
		tabIndex: -1,
		...L,
		ref: U,
		onKeyDown: G
	});
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(n, { select: j = !1 } = {}) {
	let M = document.activeElement;
	for (let N of n) if (focus(N, { select: j }), document.activeElement !== M) return;
}
function getTabbableEdges(n) {
	let j = getTabbableCandidates(n);
	return [findVisible(j, n), findVisible(j.reverse(), n)];
}
function getTabbableCandidates(n) {
	let j = [], M = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, { acceptNode: (n) => {
		let j = n.tagName === "INPUT" && n.type === "hidden";
		return n.disabled || n.hidden || j ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; M.nextNode();) j.push(M.currentNode);
	return j;
}
function findVisible(n, j) {
	for (let M of n) if (!isHidden(M, { upTo: j })) return M;
}
function isHidden(n, { upTo: j }) {
	if (getComputedStyle(n).visibility === "hidden") return !0;
	for (; n;) {
		if (j !== void 0 && n === j) return !1;
		if (getComputedStyle(n).display === "none") return !0;
		n = n.parentElement;
	}
	return !1;
}
function isSelectableInput(n) {
	return n instanceof HTMLInputElement && "select" in n;
}
function focus(n, { select: j = !1 } = {}) {
	if (n && n.focus) {
		let M = document.activeElement;
		n.focus({ preventScroll: !0 }), n !== M && isSelectableInput(n) && j && n.select();
	}
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let n = [];
	return {
		add(j) {
			let M = n[0];
			j !== M && M?.pause(), n = arrayRemove(n, j), n.unshift(j);
		},
		remove(j) {
			n = arrayRemove(n, j), n[0]?.resume();
		}
	};
}
function arrayRemove(n, j) {
	let M = [...n], N = M.indexOf(j);
	return N !== -1 && M.splice(N, 1), M;
}
function removeLinks(n) {
	return n.filter((n) => n.tagName !== "A");
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot(n) {
	let j = /* @__PURE__ */ createSlotClone(n), M = React$1.forwardRef((n, M) => {
		let { children: N, ...P } = n, F = React$1.Children.toArray(N), I = F.find(isSlottable);
		if (I) {
			let n = I.props.children, N = F.map((j) => j === I ? React$1.Children.count(n) > 1 ? React$1.Children.only(null) : React$1.isValidElement(n) ? n.props.children : null : j);
			return /* @__PURE__ */ jsx(j, {
				...P,
				ref: M,
				children: React$1.isValidElement(n) ? React$1.cloneElement(n, void 0, N) : null
			});
		}
		return /* @__PURE__ */ jsx(j, {
			...P,
			ref: M,
			children: N
		});
	});
	return M.displayName = `${n}.Slot`, M;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(n) {
	let j = React$1.forwardRef((n, j) => {
		let { children: M, ...N } = n;
		if (React$1.isValidElement(M)) {
			let n = getElementRef(M), P = mergeProps(N, M.props);
			return M.type !== React$1.Fragment && (P.ref = j ? composeRefs(j, n) : n), React$1.cloneElement(M, P);
		}
		return React$1.Children.count(M) > 1 ? React$1.Children.only(null) : null;
	});
	return j.displayName = `${n}.SlotClone`, j;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(n) {
	return React$1.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(n, j) {
	let M = { ...j };
	for (let N in j) {
		let P = n[N], F = j[N];
		/^on[A-Z]/.test(N) ? P && F ? M[N] = (...n) => {
			let j = F(...n);
			return P(...n), j;
		} : P && (M[N] = P) : N === "style" ? M[N] = {
			...P,
			...F
		} : N === "className" && (M[N] = [P, F].filter(Boolean).join(" "));
	}
	return {
		...n,
		...M
	};
}
function getElementRef(n) {
	let j = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, M = j && "isReactWarning" in j && j.isReactWarning;
	return M ? n.ref : (j = Object.getOwnPropertyDescriptor(n, "ref")?.get, M = j && "isReactWarning" in j && j.isReactWarning, M ? n.props.ref : n.props.ref || n.ref);
}
var getDefaultParent = function(n) {
	return typeof document > "u" ? null : (Array.isArray(n) ? n[0] : n).ownerDocument.body;
}, counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {}, lockCount = 0, unwrapHost = function(n) {
	return n && (n.host || unwrapHost(n.parentNode));
}, correctTargets = function(n, j) {
	return j.map(function(j) {
		if (n.contains(j)) return j;
		var M = unwrapHost(j);
		return M && n.contains(M) ? M : (console.error("aria-hidden", j, "in not contained inside", n, ". Doing nothing"), null);
	}).filter(function(n) {
		return !!n;
	});
}, applyAttributeToOthers = function(n, j, M, N) {
	var P = correctTargets(j, Array.isArray(n) ? n : [n]);
	markerMap[M] || (markerMap[M] = /* @__PURE__ */ new WeakMap());
	var F = markerMap[M], I = [], L = /* @__PURE__ */ new Set(), R = new Set(P), z = function(n) {
		!n || L.has(n) || (L.add(n), z(n.parentNode));
	};
	P.forEach(z);
	var B = function(n) {
		!n || R.has(n) || Array.prototype.forEach.call(n.children, function(n) {
			if (L.has(n)) B(n);
			else try {
				var j = n.getAttribute(N), P = j !== null && j !== "false", R = (counterMap.get(n) || 0) + 1, z = (F.get(n) || 0) + 1;
				counterMap.set(n, R), F.set(n, z), I.push(n), R === 1 && P && uncontrolledNodes.set(n, !0), z === 1 && n.setAttribute(M, "true"), P || n.setAttribute(N, "true");
			} catch (j) {
				console.error("aria-hidden: cannot operate on ", n, j);
			}
		});
	};
	return B(j), L.clear(), lockCount++, function() {
		I.forEach(function(n) {
			var j = counterMap.get(n) - 1, P = F.get(n) - 1;
			counterMap.set(n, j), F.set(n, P), j || (uncontrolledNodes.has(n) || n.removeAttribute(N), uncontrolledNodes.delete(n)), P || n.removeAttribute(M);
		}), lockCount--, lockCount || (counterMap = /* @__PURE__ */ new WeakMap(), counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {});
	};
}, hideOthers = function(n, j, M) {
	M === void 0 && (M = "data-aria-hidden");
	var N = Array.from(Array.isArray(n) ? n : [n]), P = j || getDefaultParent(n);
	return P ? (N.push.apply(N, Array.from(P.querySelectorAll("[aria-live], script"))), applyAttributeToOthers(N, P, M, "aria-hidden")) : function() {
		return null;
	};
}, __assign = function() {
	return __assign = Object.assign || function(n) {
		for (var j, M = 1, N = arguments.length; M < N; M++) for (var P in j = arguments[M], j) Object.prototype.hasOwnProperty.call(j, P) && (n[P] = j[P]);
		return n;
	}, __assign.apply(this, arguments);
};
function __rest(n, j) {
	var M = {};
	for (var N in n) Object.prototype.hasOwnProperty.call(n, N) && j.indexOf(N) < 0 && (M[N] = n[N]);
	if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var P = 0, N = Object.getOwnPropertySymbols(n); P < N.length; P++) j.indexOf(N[P]) < 0 && Object.prototype.propertyIsEnumerable.call(n, N[P]) && (M[N[P]] = n[N[P]]);
	return M;
}
function __spreadArray(n, j, M) {
	if (M || arguments.length === 2) for (var N = 0, P = j.length, F; N < P; N++) (F || !(N in j)) && (F ||= Array.prototype.slice.call(j, 0, N), F[N] = j[N]);
	return n.concat(F || Array.prototype.slice.call(j));
}
var zeroRightClassName = "right-scroll-bar-position", fullWidthClassName = "width-before-scroll-bar", noScrollbarsClassName = "with-scroll-bars-hidden", removedBarSizeVariable = "--removed-body-scroll-bar-size";
function assignRef(n, j) {
	return typeof n == "function" ? n(j) : n && (n.current = j), n;
}
function useCallbackRef(n, j) {
	var M = useState(function() {
		return {
			value: n,
			callback: j,
			facade: {
				get current() {
					return M.value;
				},
				set current(n) {
					var j = M.value;
					j !== n && (M.value = n, M.callback(n, j));
				}
			}
		};
	})[0];
	return M.callback = j, M.facade;
}
var useIsomorphicLayoutEffect = typeof window < "u" ? React$1.useLayoutEffect : React$1.useEffect, currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(n, j) {
	var M = useCallbackRef(j || null, function(j) {
		return n.forEach(function(n) {
			return assignRef(n, j);
		});
	});
	return useIsomorphicLayoutEffect(function() {
		var j = currentValues.get(M);
		if (j) {
			var N = new Set(j), P = new Set(n), F = M.current;
			N.forEach(function(n) {
				P.has(n) || assignRef(n, null);
			}), P.forEach(function(n) {
				N.has(n) || assignRef(n, F);
			});
		}
		currentValues.set(M, n);
	}, [n]), M;
}
function ItoI(n) {
	return n;
}
function innerCreateMedium(n, j) {
	j === void 0 && (j = ItoI);
	var M = [], N = !1;
	return {
		read: function() {
			if (N) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return M.length ? M[M.length - 1] : n;
		},
		useMedium: function(n) {
			var P = j(n, N);
			return M.push(P), function() {
				M = M.filter(function(n) {
					return n !== P;
				});
			};
		},
		assignSyncMedium: function(n) {
			for (N = !0; M.length;) {
				var j = M;
				M = [], j.forEach(n);
			}
			M = {
				push: function(j) {
					return n(j);
				},
				filter: function() {
					return M;
				}
			};
		},
		assignMedium: function(n) {
			N = !0;
			var j = [];
			if (M.length) {
				var P = M;
				M = [], P.forEach(n), j = M;
			}
			var F = function() {
				var M = j;
				j = [], M.forEach(n);
			}, I = function() {
				return Promise.resolve().then(F);
			};
			I(), M = {
				push: function(n) {
					j.push(n), I();
				},
				filter: function(n) {
					return j = j.filter(n), M;
				}
			};
		}
	};
}
function createSidecarMedium(n) {
	n === void 0 && (n = {});
	var j = innerCreateMedium(null);
	return j.options = __assign({
		async: !0,
		ssr: !1
	}, n), j;
}
var SideCar = function(n) {
	var j = n.sideCar, M = __rest(n, ["sideCar"]);
	if (!j) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var N = j.read();
	if (!N) throw Error("Sidecar medium not found");
	return React$1.createElement(N, __assign({}, M));
};
SideCar.isSideCarExport = !0;
function exportSidecar(n, j) {
	return n.useMedium(j), SideCar;
}
var effectCar = createSidecarMedium(), nothing = function() {}, RemoveScroll = React$1.forwardRef(function(n, j) {
	var M = React$1.useRef(null), N = React$1.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), P = N[0], F = N[1], I = n.forwardProps, L = n.children, R = n.className, z = n.removeScrollBar, B = n.enabled, V = n.shards, H = n.sideCar, U = n.noRelative, W = n.noIsolation, G = n.inert, K = n.allowPinchZoom, q = n.as, J = q === void 0 ? "div" : q, Y = n.gapMode, X = __rest(n, [
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
	]), Z = H, Q = useMergeRefs([M, j]), $ = __assign(__assign({}, X), P);
	return React$1.createElement(React$1.Fragment, null, B && React$1.createElement(Z, {
		sideCar: effectCar,
		removeScrollBar: z,
		shards: V,
		noRelative: U,
		noIsolation: W,
		inert: G,
		setCallbacks: F,
		allowPinchZoom: !!K,
		lockRef: M,
		gapMode: Y
	}), I ? React$1.cloneElement(React$1.Children.only(L), __assign(__assign({}, $), { ref: Q })) : React$1.createElement(J, __assign({}, $, {
		className: R,
		ref: Q
	}), L));
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
	var n = document.createElement("style");
	n.type = "text/css";
	var j = getNonce();
	return j && n.setAttribute("nonce", j), n;
}
function injectStyles(n, j) {
	n.styleSheet ? n.styleSheet.cssText = j : n.appendChild(document.createTextNode(j));
}
function insertStyleTag(n) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(n);
}
var stylesheetSingleton = function() {
	var n = 0, j = null;
	return {
		add: function(M) {
			n == 0 && (j = makeStyleTag()) && (injectStyles(j, M), insertStyleTag(j)), n++;
		},
		remove: function() {
			n--, !n && j && (j.parentNode && j.parentNode.removeChild(j), j = null);
		}
	};
}, styleHookSingleton = function() {
	var n = stylesheetSingleton();
	return function(j, M) {
		React$1.useEffect(function() {
			return n.add(j), function() {
				n.remove();
			};
		}, [j && M]);
	};
}, styleSingleton = function() {
	var n = styleHookSingleton();
	return function(j) {
		var M = j.styles, N = j.dynamic;
		return n(M, N), null;
	};
}, zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, parse = function(n) {
	return parseInt(n || "", 10) || 0;
}, getOffset = function(n) {
	var j = window.getComputedStyle(document.body), M = j[n === "padding" ? "paddingLeft" : "marginLeft"], N = j[n === "padding" ? "paddingTop" : "marginTop"], P = j[n === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(M),
		parse(N),
		parse(P)
	];
}, getGapWidth = function(n) {
	if (n === void 0 && (n = "margin"), typeof window > "u") return zeroGap;
	var j = getOffset(n), M = document.documentElement.clientWidth, N = window.innerWidth;
	return {
		left: j[0],
		top: j[1],
		right: j[2],
		gap: Math.max(0, N - M + j[2] - j[0])
	};
}, Style = styleSingleton(), lockAttribute = "data-scroll-locked", getStyles = function(n, j, M, N) {
	var P = n.left, F = n.top, I = n.right, L = n.gap;
	return M === void 0 && (M = "margin"), `
  .${noScrollbarsClassName} {
   overflow: hidden ${N};
   padding-right: ${L}px ${N};
  }
  body[${lockAttribute}] {
    overflow: hidden ${N};
    overscroll-behavior: contain;
    ${[
		j && `position: relative ${N};`,
		M === "margin" && `
    padding-left: ${P}px;
    padding-top: ${F}px;
    padding-right: ${I}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${L}px ${N};
    `,
		M === "padding" && `padding-right: ${L}px ${N};`
	].filter(Boolean).join("")}
  }
  
  .${zeroRightClassName} {
    right: ${L}px ${N};
  }
  
  .${fullWidthClassName} {
    margin-right: ${L}px ${N};
  }
  
  .${zeroRightClassName} .${zeroRightClassName} {
    right: 0 ${N};
  }
  
  .${fullWidthClassName} .${fullWidthClassName} {
    margin-right: 0 ${N};
  }
  
  body[${lockAttribute}] {
    ${removedBarSizeVariable}: ${L}px;
  }
`;
}, getCurrentUseCounter = function() {
	var n = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(n) ? n : 0;
}, useLockAttribute = function() {
	React$1.useEffect(function() {
		return document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString()), function() {
			var n = getCurrentUseCounter() - 1;
			n <= 0 ? document.body.removeAttribute(lockAttribute) : document.body.setAttribute(lockAttribute, n.toString());
		};
	}, []);
}, RemoveScrollBar = function(n) {
	var j = n.noRelative, M = n.noImportant, N = n.gapMode, P = N === void 0 ? "margin" : N;
	useLockAttribute();
	var F = React$1.useMemo(function() {
		return getGapWidth(P);
	}, [P]);
	return React$1.createElement(Style, { styles: getStyles(F, !j, P, M ? "" : "!important") });
}, passiveSupported = !1;
if (typeof window < "u") try {
	var options = Object.defineProperty({}, "passive", { get: function() {
		return passiveSupported = !0, !0;
	} });
	window.addEventListener("test", options, options), window.removeEventListener("test", options, options);
} catch {
	passiveSupported = !1;
}
var nonPassive = passiveSupported ? { passive: !1 } : !1, alwaysContainsScroll = function(n) {
	return n.tagName === "TEXTAREA";
}, elementCanBeScrolled = function(n, j) {
	if (!(n instanceof Element)) return !1;
	var M = window.getComputedStyle(n);
	return M[j] !== "hidden" && !(M.overflowY === M.overflowX && !alwaysContainsScroll(n) && M[j] === "visible");
}, elementCouldBeVScrolled = function(n) {
	return elementCanBeScrolled(n, "overflowY");
}, elementCouldBeHScrolled = function(n) {
	return elementCanBeScrolled(n, "overflowX");
}, locationCouldBeScrolled = function(n, j) {
	var M = j.ownerDocument, N = j;
	do {
		if (typeof ShadowRoot < "u" && N instanceof ShadowRoot && (N = N.host), elementCouldBeScrolled(n, N)) {
			var P = getScrollVariables(n, N);
			if (P[1] > P[2]) return !0;
		}
		N = N.parentNode;
	} while (N && N !== M.body);
	return !1;
}, getVScrollVariables = function(n) {
	return [
		n.scrollTop,
		n.scrollHeight,
		n.clientHeight
	];
}, getHScrollVariables = function(n) {
	return [
		n.scrollLeft,
		n.scrollWidth,
		n.clientWidth
	];
}, elementCouldBeScrolled = function(n, j) {
	return n === "v" ? elementCouldBeVScrolled(j) : elementCouldBeHScrolled(j);
}, getScrollVariables = function(n, j) {
	return n === "v" ? getVScrollVariables(j) : getHScrollVariables(j);
}, getDirectionFactor = function(n, j) {
	return n === "h" && j === "rtl" ? -1 : 1;
}, handleScroll = function(n, j, M, N, P) {
	var F = getDirectionFactor(n, window.getComputedStyle(j).direction), I = F * N, L = M.target, R = j.contains(L), z = !1, B = I > 0, V = 0, H = 0;
	do {
		if (!L) break;
		var U = getScrollVariables(n, L), W = U[0], G = U[1] - U[2] - F * W;
		(W || G) && elementCouldBeScrolled(n, L) && (V += G, H += W);
		var K = L.parentNode;
		L = K && K.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? K.host : K;
	} while (!R && L !== document.body || R && (j.contains(L) || j === L));
	return (B && (P && Math.abs(V) < 1 || !P && I > V) || !B && (P && Math.abs(H) < 1 || !P && -I > H)) && (z = !0), z;
}, getTouchXY = function(n) {
	return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, getDeltaXY = function(n) {
	return [n.deltaX, n.deltaY];
}, extractRef = function(n) {
	return n && "current" in n ? n.current : n;
}, deltaCompare = function(n, j) {
	return n[0] === j[0] && n[1] === j[1];
}, generateStyle = function(n) {
	return `
  .block-interactivity-${n} {pointer-events: none;}
  .allow-interactivity-${n} {pointer-events: all;}
`;
}, idCounter = 0, lockStack = [];
function RemoveScrollSideCar(n) {
	var j = React$1.useRef([]), M = React$1.useRef([0, 0]), N = React$1.useRef(), P = React$1.useState(idCounter++)[0], F = React$1.useState(styleSingleton)[0], I = React$1.useRef(n);
	React$1.useEffect(function() {
		I.current = n;
	}, [n]), React$1.useEffect(function() {
		if (n.inert) {
			document.body.classList.add(`block-interactivity-${P}`);
			var j = __spreadArray([n.lockRef.current], (n.shards || []).map(extractRef), !0).filter(Boolean);
			return j.forEach(function(n) {
				return n.classList.add(`allow-interactivity-${P}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${P}`), j.forEach(function(n) {
					return n.classList.remove(`allow-interactivity-${P}`);
				});
			};
		}
	}, [
		n.inert,
		n.lockRef.current,
		n.shards
	]);
	var L = React$1.useCallback(function(n, j) {
		if ("touches" in n && n.touches.length === 2 || n.type === "wheel" && n.ctrlKey) return !I.current.allowPinchZoom;
		var P = getTouchXY(n), F = M.current, L = "deltaX" in n ? n.deltaX : F[0] - P[0], R = "deltaY" in n ? n.deltaY : F[1] - P[1], z, B = n.target, V = Math.abs(L) > Math.abs(R) ? "h" : "v";
		if ("touches" in n && V === "h" && B.type === "range") return !1;
		var H = window.getSelection(), U = H && H.anchorNode;
		if (U && (U === B || U.contains(B))) return !1;
		var W = locationCouldBeScrolled(V, B);
		if (!W) return !0;
		if (W ? z = V : (z = V === "v" ? "h" : "v", W = locationCouldBeScrolled(V, B)), !W) return !1;
		if (!N.current && "changedTouches" in n && (L || R) && (N.current = z), !z) return !0;
		var G = N.current || z;
		return handleScroll(G, j, n, G === "h" ? L : R, !0);
	}, []), R = React$1.useCallback(function(n) {
		var M = n;
		if (!(!lockStack.length || lockStack[lockStack.length - 1] !== F)) {
			var N = "deltaY" in M ? getDeltaXY(M) : getTouchXY(M), P = j.current.filter(function(n) {
				return n.name === M.type && (n.target === M.target || M.target === n.shadowParent) && deltaCompare(n.delta, N);
			})[0];
			if (P && P.should) {
				M.cancelable && M.preventDefault();
				return;
			}
			if (!P) {
				var R = (I.current.shards || []).map(extractRef).filter(Boolean).filter(function(n) {
					return n.contains(M.target);
				});
				(R.length > 0 ? L(M, R[0]) : !I.current.noIsolation) && M.cancelable && M.preventDefault();
			}
		}
	}, []), z = React$1.useCallback(function(n, M, N, P) {
		var F = {
			name: n,
			delta: M,
			target: N,
			should: P,
			shadowParent: getOutermostShadowParent(N)
		};
		j.current.push(F), setTimeout(function() {
			j.current = j.current.filter(function(n) {
				return n !== F;
			});
		}, 1);
	}, []), B = React$1.useCallback(function(n) {
		M.current = getTouchXY(n), N.current = void 0;
	}, []), V = React$1.useCallback(function(j) {
		z(j.type, getDeltaXY(j), j.target, L(j, n.lockRef.current));
	}, []), H = React$1.useCallback(function(j) {
		z(j.type, getTouchXY(j), j.target, L(j, n.lockRef.current));
	}, []);
	React$1.useEffect(function() {
		return lockStack.push(F), n.setCallbacks({
			onScrollCapture: V,
			onWheelCapture: V,
			onTouchMoveCapture: H
		}), document.addEventListener("wheel", R, nonPassive), document.addEventListener("touchmove", R, nonPassive), document.addEventListener("touchstart", B, nonPassive), function() {
			lockStack = lockStack.filter(function(n) {
				return n !== F;
			}), document.removeEventListener("wheel", R, nonPassive), document.removeEventListener("touchmove", R, nonPassive), document.removeEventListener("touchstart", B, nonPassive);
		};
	}, []);
	var U = n.removeScrollBar, W = n.inert;
	return React$1.createElement(React$1.Fragment, null, W ? React$1.createElement(F, { styles: generateStyle(P) }) : null, U ? React$1.createElement(RemoveScrollBar, {
		noRelative: n.noRelative,
		gapMode: n.gapMode
	}) : null);
}
function getOutermostShadowParent(n) {
	for (var j = null; n !== null;) n instanceof ShadowRoot && (j = n.host, n = n.host), n = n.parentNode;
	return j;
}
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar), ReactRemoveScroll = React$1.forwardRef(function(n, j) {
	return React$1.createElement(RemoveScroll, __assign({}, n, {
		ref: j,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll, POPOVER_NAME = "Popover", [createPopoverContext, createPopoverScope] = createContextScope(POPOVER_NAME, [createPopperScope]), usePopperScope = createPopperScope(), [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME), Popover$1 = (n) => {
	let { __scopePopover: j, children: M, open: N, defaultOpen: P, onOpenChange: F, modal: I = !1 } = n, L = usePopperScope(j), R = React$1.useRef(null), [z, H] = React$1.useState(!1), [U, G] = useControllableState({
		prop: N,
		defaultProp: P ?? !1,
		onChange: F,
		caller: POPOVER_NAME
	});
	return /* @__PURE__ */ jsx(Root2$1, {
		...L,
		children: /* @__PURE__ */ jsx(PopoverProvider, {
			scope: j,
			contentId: useId$1(),
			triggerRef: R,
			open: U,
			onOpenChange: G,
			onOpenToggle: React$1.useCallback(() => G((n) => !n), [G]),
			hasCustomAnchor: z,
			onCustomAnchorAdd: React$1.useCallback(() => H(!0), []),
			onCustomAnchorRemove: React$1.useCallback(() => H(!1), []),
			modal: I,
			children: M
		})
	});
};
Popover$1.displayName = POPOVER_NAME;
var ANCHOR_NAME = "PopoverAnchor", PopoverAnchor$1 = React$1.forwardRef((n, j) => {
	let { __scopePopover: M, ...N } = n, P = usePopoverContext(ANCHOR_NAME, M), F = usePopperScope(M), { onCustomAnchorAdd: I, onCustomAnchorRemove: L } = P;
	return React$1.useEffect(() => (I(), () => L()), [I, L]), /* @__PURE__ */ jsx(Anchor, {
		...F,
		...N,
		ref: j
	});
});
PopoverAnchor$1.displayName = ANCHOR_NAME;
var TRIGGER_NAME = "PopoverTrigger", PopoverTrigger$1 = React$1.forwardRef((n, N) => {
	let { __scopePopover: P, ...F } = n, I = usePopoverContext(TRIGGER_NAME, P), L = usePopperScope(P), R = useComposedRefs(N, I.triggerRef), z = /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": I.open,
		"aria-controls": I.contentId,
		"data-state": getState(I.open),
		...F,
		ref: R,
		onClick: composeEventHandlers(n.onClick, I.onOpenToggle)
	});
	return I.hasCustomAnchor ? z : /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...L,
		children: z
	});
});
PopoverTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "PopoverPortal", [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, { forceMount: void 0 }), PopoverPortal = (n) => {
	let { __scopePopover: j, forceMount: M, children: N, container: P } = n, F = usePopoverContext(PORTAL_NAME, j);
	return /* @__PURE__ */ jsx(PortalProvider, {
		scope: j,
		forceMount: M,
		children: /* @__PURE__ */ jsx(Presence, {
			present: M || F.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: P,
				children: N
			})
		})
	});
};
PopoverPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "PopoverContent", PopoverContent$1 = React$1.forwardRef((n, j) => {
	let M = usePortalContext(CONTENT_NAME, n.__scopePopover), { forceMount: N = M.forceMount, ...P } = n, F = usePopoverContext(CONTENT_NAME, n.__scopePopover);
	return /* @__PURE__ */ jsx(Presence, {
		present: N || F.open,
		children: F.modal ? /* @__PURE__ */ jsx(PopoverContentModal, {
			...P,
			ref: j
		}) : /* @__PURE__ */ jsx(PopoverContentNonModal, {
			...P,
			ref: j
		})
	});
});
PopoverContent$1.displayName = CONTENT_NAME;
var Slot = /* @__PURE__ */ createSlot("PopoverContent.RemoveScroll"), PopoverContentModal = React$1.forwardRef((n, N) => {
	let P = usePopoverContext(CONTENT_NAME, n.__scopePopover), F = React$1.useRef(null), I = useComposedRefs(N, F), L = React$1.useRef(!1);
	return React$1.useEffect(() => {
		let n = F.current;
		if (n) return hideOthers(n);
	}, []), /* @__PURE__ */ jsx(Combination_default, {
		as: Slot,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ jsx(PopoverContentImpl, {
			...n,
			ref: I,
			trapFocus: P.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: composeEventHandlers(n.onCloseAutoFocus, (n) => {
				n.preventDefault(), L.current || P.triggerRef.current?.focus();
			}),
			onPointerDownOutside: composeEventHandlers(n.onPointerDownOutside, (n) => {
				let j = n.detail.originalEvent, M = j.button === 0 && j.ctrlKey === !0;
				L.current = j.button === 2 || M;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: composeEventHandlers(n.onFocusOutside, (n) => n.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), PopoverContentNonModal = React$1.forwardRef((n, j) => {
	let M = usePopoverContext(CONTENT_NAME, n.__scopePopover), N = React$1.useRef(!1), P = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(PopoverContentImpl, {
		...n,
		ref: j,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (j) => {
			n.onCloseAutoFocus?.(j), j.defaultPrevented || (N.current || M.triggerRef.current?.focus(), j.preventDefault()), N.current = !1, P.current = !1;
		},
		onInteractOutside: (j) => {
			n.onInteractOutside?.(j), j.defaultPrevented || (N.current = !0, j.detail.originalEvent.type === "pointerdown" && (P.current = !0));
			let F = j.target;
			M.triggerRef.current?.contains(F) && j.preventDefault(), j.detail.originalEvent.type === "focusin" && P.current && j.preventDefault();
		}
	});
}), PopoverContentImpl = React$1.forwardRef((n, j) => {
	let { __scopePopover: M, trapFocus: N, onOpenAutoFocus: P, onCloseAutoFocus: F, disableOutsidePointerEvents: I, onEscapeKeyDown: R, onPointerDownOutside: B, onFocusOutside: V, onInteractOutside: H, ...U } = n, W = usePopoverContext(CONTENT_NAME, M), G = usePopperScope(M);
	return useFocusGuards(), /* @__PURE__ */ jsx(FocusScope, {
		asChild: !0,
		loop: !0,
		trapped: N,
		onMountAutoFocus: P,
		onUnmountAutoFocus: F,
		children: /* @__PURE__ */ jsx(DismissableLayer, {
			asChild: !0,
			disableOutsidePointerEvents: I,
			onInteractOutside: H,
			onEscapeKeyDown: R,
			onPointerDownOutside: B,
			onFocusOutside: V,
			onDismiss: () => W.onOpenChange(!1),
			children: /* @__PURE__ */ jsx(Content, {
				"data-state": getState(W.open),
				role: "dialog",
				id: W.contentId,
				...G,
				...U,
				ref: j,
				style: {
					...U.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}), CLOSE_NAME = "PopoverClose", PopoverClose = React$1.forwardRef((n, j) => {
	let { __scopePopover: N, ...P } = n, F = usePopoverContext(CLOSE_NAME, N);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		...P,
		ref: j,
		onClick: composeEventHandlers(n.onClick, () => F.onOpenChange(!1))
	});
});
PopoverClose.displayName = CLOSE_NAME;
var ARROW_NAME = "PopoverArrow", PopoverArrow = React$1.forwardRef((n, j) => {
	let { __scopePopover: M, ...N } = n;
	return /* @__PURE__ */ jsx(Arrow, {
		...usePopperScope(M),
		...N,
		ref: j
	});
});
PopoverArrow.displayName = ARROW_NAME;
function getState(n) {
	return n ? "open" : "closed";
}
var Root2 = Popover$1, Anchor2 = PopoverAnchor$1, Trigger = PopoverTrigger$1, Portal$1 = PopoverPortal, Content2 = PopoverContent$1;
function Popover({ ...n }) {
	return /* @__PURE__ */ jsx(Root2, {
		"data-slot": "popover",
		...n
	});
}
var PopoverTrigger = React$1.forwardRef(({ ...n }, j) => /* @__PURE__ */ jsx(Trigger, {
	"data-slot": "popover-trigger",
	...n,
	ref: j
}));
PopoverTrigger.displayName = Trigger.displayName;
var PopoverContent = React$1.forwardRef(({ className: n, align: j = "center", sideOffset: M = 4, ...N }, P) => /* @__PURE__ */ jsx(Portal$1, { children: /* @__PURE__ */ jsx(Content2, {
	ref: P,
	"data-slot": "popover-content",
	align: j,
	sideOffset: M,
	className: cn("chatbot-theme bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", n),
	...N
}) }));
PopoverContent.displayName = Content2.displayName;
var PopoverAnchor = React$1.forwardRef(({ ...n }, j) => /* @__PURE__ */ jsx(Anchor2, {
	"data-slot": "popover-anchor",
	...n,
	ref: j
}));
PopoverAnchor.displayName = Anchor2.displayName;
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
	constructor(n = {}) {
		this.recognition = null, this.isListening = !1, this.onResult = null, this.onStart = null, this.onEnd = null, this.onError = null, this.onSpeechStart = null, this.onSpeechEnd = null, this.config = {
			...defaultVoiceConfig,
			...n
		}, this.initRecognition();
	}
	initRecognition() {
		if (typeof window > "u") return !1;
		let n = window.SpeechRecognition || window.webkitSpeechRecognition;
		if (!n) return console.warn("Speech Recognition is not supported in this browser"), !1;
		try {
			let j = new n();
			return j.lang = this.config.lang, j.continuous = this.config.continuous, j.interimResults = this.config.interimResults, j.maxAlternatives = this.config.maxAlternatives, j.onstart = () => {
				this.isListening = !0, this.onStart?.();
			}, j.onend = () => {
				this.isListening = !1, this.onEnd?.();
			}, j.onerror = (n) => {
				this.isListening = !1;
				let j = this.getErrorMessage(n.error);
				this.onError?.(j);
			}, j.onresult = (n) => {
				let j = "", M = !1;
				for (let N = n.resultIndex; N < n.results.length; N++) {
					let P = n.results[N];
					j += P[0].transcript, P.isFinal && (M = !0);
				}
				this.onResult?.(j, M);
			}, j.onspeechstart = () => {
				this.onSpeechStart?.();
			}, j.onspeechend = () => {
				this.onSpeechEnd?.();
			}, this.recognition = j, !0;
		} catch (n) {
			return console.error("Failed to initialize speech recognition:", n), !1;
		}
	}
	getErrorMessage(n) {
		return {
			"no-speech": "No speech was detected. Please try again.",
			aborted: "Speech recognition was aborted.",
			"audio-capture": "No microphone was found. Ensure a microphone is connected.",
			network: "Network error occurred. Check your internet connection.",
			"not-allowed": "Microphone access denied. Please allow microphone permissions.",
			"service-not-available": "Speech service is not available.",
			"bad-grammar": "Speech grammar error occurred.",
			"language-not-supported": "Language is not supported."
		}[n] || `Unknown error: ${n}`;
	}
	start() {
		if (!this.recognition && !this.initRecognition()) return !1;
		if (this.isListening) return !0;
		try {
			return this.recognition?.start(), !0;
		} catch (n) {
			return console.error("Failed to start speech recognition:", n), !1;
		}
	}
	stop() {
		this.recognition && this.isListening && this.recognition.stop();
	}
	abort() {
		this.recognition && this.recognition.abort();
	}
	updateConfig(n) {
		this.config = {
			...this.config,
			...n
		}, this.recognition && (this.recognition.lang = this.config.lang, this.recognition.continuous = this.config.continuous, this.recognition.interimResults = this.config.interimResults, this.recognition.maxAlternatives = this.config.maxAlternatives);
	}
	getIsListening() {
		return this.isListening;
	}
	destroy() {
		this.abort(), this.recognition = null, this.onResult = null, this.onStart = null, this.onEnd = null, this.onError = null, this.onSpeechStart = null, this.onSpeechEnd = null;
	}
}, SpeechSynthesisManager = class {
	constructor(n = {}) {
		this.utterance = null, this.isSpeaking = !1, this.availableVoices = [], this.onStart = null, this.onEnd = null, this.onPause = null, this.onResume = null, this.onError = null, this.onBoundary = null, this.config = {
			...defaultVoiceConfig,
			...n
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
	getVoicesByLanguage(n) {
		return this.availableVoices.filter((j) => j.lang.toLowerCase().startsWith(n.toLowerCase().split("-")[0]));
	}
	speak(n) {
		if (typeof window > "u" || !window.speechSynthesis) return console.warn("Speech Synthesis is not supported in this browser"), !1;
		this.stop();
		try {
			if (this.utterance = new SpeechSynthesisUtterance(n), this.utterance.lang = this.config.lang, this.utterance.pitch = this.config.pitch, this.utterance.rate = this.config.rate, this.utterance.volume = this.config.volume, this.config.voiceURI) {
				let n = this.availableVoices.find((n) => n.voiceURI === this.config.voiceURI);
				n && (this.utterance.voice = n);
			}
			return this.utterance.onstart = () => {
				this.isSpeaking = !0, this.onStart?.();
			}, this.utterance.onend = () => {
				this.isSpeaking = !1, this.onEnd?.();
			}, this.utterance.onerror = (n) => {
				this.isSpeaking = !1, this.onError?.(n.error);
			}, this.utterance.onpause = () => {
				this.onPause?.();
			}, this.utterance.onresume = () => {
				this.onResume?.();
			}, this.utterance.onboundary = (n) => {
				this.onBoundary?.(n.charIndex, n.charLength);
			}, window.speechSynthesis.speak(this.utterance), !0;
		} catch (n) {
			return console.error("Failed to speak:", n), !1;
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
	updateConfig(n) {
		this.config = {
			...this.config,
			...n
		};
	}
	destroy() {
		this.stop(), this.utterance = null, this.onStart = null, this.onEnd = null, this.onPause = null, this.onResume = null, this.onError = null, this.onBoundary = null;
	}
};
function stripMarkdownForSpeech(n) {
	return n.replace(/```[\s\S]*?```/g, "Code block omitted. ").replace(/`[^`]+`/g, (n) => n.slice(1, -1)).replace(/#{1,6}\s+/g, "").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1").replace(/__([^_]+)__/g, "$1").replace(/_([^_]+)_/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1").replace(/---/g, "").replace(/^>\s+/gm, "").replace(/^[\s]*[-*+]\s+/gm, "").replace(/^[\s]*\d+\.\s+/gm, "").replace(/\n{3,}/g, "\n\n").trim();
}
export { ChevronRight as _, stripMarkdownForSpeech as a, PopoverTrigger as c, FocusScope as d, useFocusGuards as f, Sparkles as g, Volume2 as h, getVoiceSupport as i, Combination_default as l, Zap as m, SpeechSynthesisManager as n, Popover as o, Badge as p, defaultVoiceConfig as r, PopoverContent as s, SpeechRecognitionManager as t, hideOthers as u };
