import { a as __toCommonJS, n as is_prop_valid_framer_motion_exports, t as init_is_prop_valid_framer_motion } from "./is-prop-valid_framer-motion-Bb0cVohX.js";
import * as React$1 from "react";
import { Children, Fragment, createContext, createElement, forwardRef, isValidElement, useCallback, useContext, useEffect, useId, useInsertionEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var LayoutGroupContext = createContext({});
function useConstant(e) {
	let D = useRef(null);
	return D.current === null && (D.current = e()), D.current;
}
var PresenceContext = createContext(null), MotionConfigContext = createContext({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
}), PopChildMeasure = class extends React$1.Component {
	getSnapshotBeforeUpdate(e) {
		let D = this.props.childRef.current;
		if (D && e.isPresent && !this.props.isPresent) {
			let e = this.props.sizeRef.current;
			e.height = D.offsetHeight || 0, e.width = D.offsetWidth || 0, e.top = D.offsetTop, e.left = D.offsetLeft;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function PopChild({ children: e, isPresent: D }) {
	let O = useId(), A = useRef(null), j = useRef({
		width: 0,
		height: 0,
		top: 0,
		left: 0
	}), { nonce: M } = useContext(MotionConfigContext);
	return useInsertionEffect(() => {
		let { width: e, height: k, top: N, left: P } = j.current;
		if (D || !A.current || !e || !k) return;
		A.current.dataset.motionPopId = O;
		let F = document.createElement("style");
		return M && (F.nonce = M), document.head.appendChild(F), F.sheet && F.sheet.insertRule(`
          [data-motion-pop-id="${O}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${k}px !important;
            top: ${N}px !important;
            left: ${P}px !important;
          }
        `), () => {
			document.head.removeChild(F);
		};
	}, [D]), jsx(PopChildMeasure, {
		isPresent: D,
		childRef: A,
		sizeRef: j,
		children: React$1.cloneElement(e, { ref: A })
	});
}
var PresenceChild = ({ children: e, initial: D, isPresent: O, onExitComplete: A, custom: j, presenceAffectsLayout: M, mode: N }) => {
	let P = useConstant(newChildrenMap), F = useId(), L = useCallback((e) => {
		P.set(e, !0);
		for (let e of P.values()) if (!e) return;
		A && A();
	}, [P, A]), R = useMemo(() => ({
		id: F,
		initial: D,
		isPresent: O,
		custom: j,
		onExitComplete: L,
		register: (e) => (P.set(e, !1), () => P.delete(e))
	}), M ? [Math.random(), L] : [O, L]);
	return useMemo(() => {
		P.forEach((e, D) => P.set(D, !1));
	}, [O]), React$1.useEffect(() => {
		!O && !P.size && A && A();
	}, [O]), N === "popLayout" && (e = jsx(PopChild, {
		isPresent: O,
		children: e
	})), jsx(PresenceContext.Provider, {
		value: R,
		children: e
	});
};
function newChildrenMap() {
	return /* @__PURE__ */ new Map();
}
function usePresence(e = !0) {
	let D = useContext(PresenceContext);
	if (D === null) return [!0, null];
	let { isPresent: O, onExitComplete: k, register: A } = D, j = useId();
	useEffect(() => {
		e && A(j);
	}, [e]);
	let M = useCallback(() => e && k && k(j), [
		j,
		k,
		e
	]);
	return !O && k ? [!1, M] : [!0];
}
var getChildKey = (e) => e.key || "";
function onlyElements(e) {
	let D = [];
	return Children.forEach(e, (e) => {
		isValidElement(e) && D.push(e);
	}), D;
}
var isBrowser = typeof window < "u", useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect, AnimatePresence = ({ children: e, custom: D, initial: O = !0, onExitComplete: k, presenceAffectsLayout: A = !0, mode: j = "sync", propagate: M = !1 }) => {
	let [N, P] = usePresence(M), F = useMemo(() => onlyElements(e), [e]), I = M && !N ? [] : F.map(getChildKey), R = useRef(!0), z = useRef(F), B = useConstant(() => /* @__PURE__ */ new Map()), [V, q] = useState(F), [X, Z] = useState(F);
	useIsomorphicLayoutEffect(() => {
		R.current = !1, z.current = F;
		for (let e = 0; e < X.length; e++) {
			let D = getChildKey(X[e]);
			I.includes(D) ? B.delete(D) : B.get(D) !== !0 && B.set(D, !1);
		}
	}, [
		X,
		I.length,
		I.join("-")
	]);
	let Q = [];
	if (F !== V) {
		let e = [...F];
		for (let D = 0; D < X.length; D++) {
			let O = X[D], k = getChildKey(O);
			I.includes(k) || (e.splice(D, 0, O), Q.push(O));
		}
		j === "wait" && Q.length && (e = Q), Z(onlyElements(e)), q(F);
		return;
	}
	process.env.NODE_ENV !== "production" && j === "wait" && X.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its mode is set to \"wait\". This will lead to odd visual behaviour.");
	let { forceRender: $ } = useContext(LayoutGroupContext);
	return jsx(Fragment$1, { children: X.map((e) => {
		let L = getChildKey(e), V = M && !N ? !1 : F === X || I.includes(L);
		return jsx(PresenceChild, {
			isPresent: V,
			initial: !R.current || O ? void 0 : !1,
			custom: V ? void 0 : D,
			presenceAffectsLayout: A,
			mode: j,
			onExitComplete: V ? void 0 : () => {
				if (B.has(L)) B.set(L, !0);
				else return;
				let e = !0;
				B.forEach((D) => {
					D || (e = !1);
				}), e && ($?.(), Z(z.current), M && P?.(), k && k());
			},
			children: e
		}, L);
	}) });
}, noop = /* @__NO_SIDE_EFFECTS__ */ (e) => e, warning = noop, invariant = noop;
process.env.NODE_ENV !== "production" && (warning = (e, D) => {
	!e && typeof console < "u" && console.warn(D);
}, invariant = (e, D) => {
	if (!e) throw Error(D);
});
/* @__NO_SIDE_EFFECTS__ */
function memo$1(e) {
	let D;
	return () => (D === void 0 && (D = e()), D);
}
var progress = /* @__NO_SIDE_EFFECTS__ */ (e, D, O) => {
	let k = D - e;
	return k === 0 ? 1 : (O - e) / k;
}, secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, MotionGlobalConfig = {
	skipAnimations: !1,
	useManualTiming: !1
};
function createRenderStep(e) {
	let D = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Set(), k = !1, A = !1, j = /* @__PURE__ */ new WeakSet(), M = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	};
	function N(D) {
		j.has(D) && (P.schedule(D), e()), D(M);
	}
	let P = {
		schedule: (e, A = !1, M = !1) => {
			let N = M && k ? D : O;
			return A && j.add(e), N.has(e) || N.add(e), e;
		},
		cancel: (e) => {
			O.delete(e), j.delete(e);
		},
		process: (e) => {
			if (M = e, k) {
				A = !0;
				return;
			}
			k = !0, [D, O] = [O, D], D.forEach(N), D.clear(), k = !1, A && (A = !1, P.process(e));
		}
	};
	return P;
}
var stepsOrder = [
	"read",
	"resolveKeyframes",
	"update",
	"preRender",
	"render",
	"postRender"
], maxElapsed = 40;
function createRenderBatcher(e, D) {
	let O = !1, k = !0, A = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, j = () => O = !0, M = stepsOrder.reduce((e, D) => (e[D] = createRenderStep(j), e), {}), { read: N, resolveKeyframes: P, update: F, preRender: I, render: L, postRender: R } = M, z = () => {
		let j = MotionGlobalConfig.useManualTiming ? A.timestamp : performance.now();
		O = !1, A.delta = k ? 1e3 / 60 : Math.max(Math.min(j - A.timestamp, maxElapsed), 1), A.timestamp = j, A.isProcessing = !0, N.process(A), P.process(A), F.process(A), I.process(A), L.process(A), R.process(A), A.isProcessing = !1, O && D && (k = !1, e(z));
	}, B = () => {
		O = !0, k = !0, A.isProcessing || e(z);
	};
	return {
		schedule: stepsOrder.reduce((e, D) => {
			let k = M[D];
			return e[D] = (e, D = !1, A = !1) => (O || B(), k.schedule(e, D, A)), e;
		}, {}),
		cancel: (e) => {
			for (let D = 0; D < stepsOrder.length; D++) M[stepsOrder[D]].cancel(e);
		},
		state: A,
		steps: M
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
for (let e in featureProps) featureDefinitions[e] = { isEnabled: (D) => featureProps[e].some((e) => !!D[e]) };
function loadFeatures(e) {
	for (let D in e) featureDefinitions[D] = {
		...featureDefinitions[D],
		...e[D]
	};
}
function LazyMotion({ children: e, features: D, strict: O = !1 }) {
	let [, k] = useState(!isLazyBundle(D)), A = useRef(void 0);
	if (!isLazyBundle(D)) {
		let { renderer: e, ...O } = D;
		A.current = e, loadFeatures(O);
	}
	return useEffect(() => {
		isLazyBundle(D) && D().then(({ renderer: e, ...D }) => {
			loadFeatures(D), A.current = e, k(!0);
		});
	}, []), jsx(LazyContext.Provider, {
		value: {
			renderer: A.current,
			strict: O
		},
		children: e
	});
}
function isLazyBundle(e) {
	return typeof e == "function";
}
var validMotionProps = new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport".split("."));
function isValidMotionProp(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || validMotionProps.has(e);
}
var shouldForward = (e) => !isValidMotionProp(e);
function loadExternalIsValidProp(e) {
	e && (shouldForward = (D) => D.startsWith("on") ? !isValidMotionProp(D) : e(D));
}
try {
	loadExternalIsValidProp((init_is_prop_valid_framer_motion(), __toCommonJS(is_prop_valid_framer_motion_exports)).default);
} catch {}
function filterProps(e, D, O) {
	let k = {};
	for (let A in e) A === "values" && typeof e.values == "object" || (shouldForward(A) || O === !0 && isValidMotionProp(A) || !D && !isValidMotionProp(A) || e.draggable && A.startsWith("onDrag")) && (k[A] = e[A]);
	return k;
}
var warned = /* @__PURE__ */ new Set();
function warnOnce(e, D, O) {
	e || warned.has(D) || (console.warn(D), O && console.warn(O), warned.add(D));
}
function createDOMMotionComponentProxy(e) {
	if (typeof Proxy > "u") return e;
	let D = /* @__PURE__ */ new Map();
	return new Proxy((...D) => (process.env.NODE_ENV !== "production" && warnOnce(!1, "motion() is deprecated. Use motion.create() instead."), e(...D)), { get: (O, k) => k === "create" ? e : (D.has(k) || D.set(k, e(k)), D.get(k)) });
}
var MotionContext = createContext({});
function isVariantLabel(e) {
	return typeof e == "string" || Array.isArray(e);
}
function isAnimationControls(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
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
function isControllingVariants(e) {
	return isAnimationControls(e.animate) || variantProps.some((D) => isVariantLabel(e[D]));
}
function isVariantNode(e) {
	return !!(isControllingVariants(e) || e.variants);
}
function getCurrentTreeVariants(e, D) {
	if (isControllingVariants(e)) {
		let { initial: D, animate: O } = e;
		return {
			initial: D === !1 || isVariantLabel(D) ? D : void 0,
			animate: isVariantLabel(O) ? O : void 0
		};
	}
	return e.inherit === !1 ? {} : D;
}
function useCreateMotionContext(e) {
	let { initial: D, animate: O } = getCurrentTreeVariants(e, useContext(MotionContext));
	return useMemo(() => ({
		initial: D,
		animate: O
	}), [variantLabelsAsDependency(D), variantLabelsAsDependency(O)]);
}
function variantLabelsAsDependency(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
var motionComponentSymbol = Symbol.for("motionComponentSymbol");
function isRefObject(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function useMotionRef(e, D, O) {
	return useCallback((k) => {
		k && e.onMount && e.onMount(k), D && (k ? D.mount(k) : D.unmount()), O && (typeof O == "function" ? O(k) : isRefObject(O) && (O.current = k));
	}, [D]);
}
var camelToDash = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId"), { schedule: microtask, cancel: cancelMicrotask } = createRenderBatcher(queueMicrotask, !1), SwitchLayoutGroupContext = createContext({});
function useVisualElement(e, D, O, k, A) {
	let { visualElement: j } = useContext(MotionContext), M = useContext(LazyContext), N = useContext(PresenceContext), P = useContext(MotionConfigContext).reducedMotion, F = useRef(null);
	k ||= M.renderer, !F.current && k && (F.current = k(e, {
		visualState: D,
		parent: j,
		props: O,
		presenceContext: N,
		blockInitialAnimation: N ? N.initial === !1 : !1,
		reducedMotionConfig: P
	}));
	let I = F.current, z = useContext(SwitchLayoutGroupContext);
	I && !I.projection && A && (I.type === "html" || I.type === "svg") && createProjectionNode(F.current, O, A, z);
	let V = useRef(!1);
	useInsertionEffect(() => {
		I && V.current && I.update(O, N);
	});
	let H = O[optimizedAppearDataAttribute], W = useRef(!!H && !window.MotionHandoffIsComplete?.call(window, H) && window.MotionHasOptimisedAnimation?.call(window, H));
	return useIsomorphicLayoutEffect(() => {
		I && (V.current = !0, window.MotionIsMounted = !0, I.updateFeatures(), microtask.render(I.render), W.current && I.animationState && I.animationState.animateChanges());
	}), useEffect(() => {
		I && (!W.current && I.animationState && I.animationState.animateChanges(), W.current &&= (queueMicrotask(() => {
			var e;
			(e = window.MotionHandoffMarkAsComplete) == null || e.call(window, H);
		}), !1));
	}), I;
}
function createProjectionNode(e, D, O, k) {
	let { layoutId: A, layout: j, drag: M, dragConstraints: N, layoutScroll: P, layoutRoot: F } = D;
	e.projection = new O(e.latestValues, D["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(e.parent)), e.projection.setOptions({
		layoutId: A,
		layout: j,
		alwaysMeasureLayout: !!M || N && isRefObject(N),
		visualElement: e,
		animationType: typeof j == "string" ? j : "both",
		initialPromotionConfig: k,
		layoutScroll: P,
		layoutRoot: F
	});
}
function getClosestProjectingNode(e) {
	if (e) return e.options.allowProjection === !1 ? getClosestProjectingNode(e.parent) : e.projection;
}
function createRendererMotionComponent({ preloadedFeatures: e, createVisualElement: D, useRender: O, useVisualState: k, Component: A }) {
	e && loadFeatures(e);
	function j(j, M) {
		let N, P = {
			...useContext(MotionConfigContext),
			...j,
			layoutId: useLayoutId(j)
		}, { isStatic: F } = P, I = useCreateMotionContext(j), R = k(j, F);
		if (!F && isBrowser) {
			useStrictMode(P, e);
			let O = getProjectionFunctionality(P);
			N = O.MeasureLayout, I.visualElement = useVisualElement(A, R, P, D, O.ProjectionNode);
		}
		return jsxs(MotionContext.Provider, {
			value: I,
			children: [N && I.visualElement ? jsx(N, {
				visualElement: I.visualElement,
				...P
			}) : null, O(A, j, useMotionRef(R, I.visualElement, M), R, F, I.visualElement)]
		});
	}
	j.displayName = `motion.${typeof A == "string" ? A : `create(${A.displayName ?? A.name ?? ""})`}`;
	let M = forwardRef(j);
	return M[motionComponentSymbol] = A, M;
}
function useLayoutId({ layoutId: e }) {
	let D = useContext(LayoutGroupContext).id;
	return D && e !== void 0 ? D + "-" + e : e;
}
function useStrictMode(e, D) {
	let O = useContext(LazyContext).strict;
	if (process.env.NODE_ENV !== "production" && D && O) {
		let D = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		e.ignoreStrict ? warning(!1, D) : invariant(!1, D);
	}
}
function getProjectionFunctionality(e) {
	let { drag: D, layout: O } = featureDefinitions;
	if (!D && !O) return {};
	let k = {
		...D,
		...O
	};
	return {
		MeasureLayout: D?.isEnabled(e) || O?.isEnabled(e) ? k.MeasureLayout : void 0,
		ProjectionNode: k.ProjectionNode
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
function isSVGComponent(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(lowercaseSVGElements.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function getValueState(e) {
	let D = [{}, {}];
	return e?.values.forEach((e, O) => {
		D[0][O] = e.get(), D[1][O] = e.getVelocity();
	}), D;
}
function resolveVariantFromProps(e, D, O, k) {
	if (typeof D == "function") {
		let [A, j] = getValueState(k);
		D = D(O === void 0 ? e.custom : O, A, j);
	}
	if (typeof D == "string" && (D = e.variants && e.variants[D]), typeof D == "function") {
		let [A, j] = getValueState(k);
		D = D(O === void 0 ? e.custom : O, A, j);
	}
	return D;
}
var isKeyframesTarget = (e) => Array.isArray(e), isCustomValue = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), resolveFinalValueInKeyframes = (e) => isKeyframesTarget(e) ? e[e.length - 1] || 0 : e, isMotionValue = (e) => !!(e && e.getVelocity);
function resolveMotionValue(e) {
	let D = isMotionValue(e) ? e.get() : e;
	return isCustomValue(D) ? D.toValue() : D;
}
function makeState({ scrapeMotionValuesFromProps: e, createRenderState: D, onUpdate: O }, k, A, j) {
	let M = {
		latestValues: makeLatestValues(k, A, j, e),
		renderState: D()
	};
	return O && (M.onMount = (e) => O({
		props: k,
		current: e,
		...M
	}), M.onUpdate = (e) => O(e)), M;
}
var makeUseVisualState = (e) => (D, O) => {
	let k = useContext(MotionContext), A = useContext(PresenceContext), j = () => makeState(e, D, k, A);
	return O ? j() : useConstant(j);
};
function makeLatestValues(e, D, O, k) {
	let A = {}, j = k(e, {});
	for (let e in j) A[e] = resolveMotionValue(j[e]);
	let { initial: M, animate: N } = e, P = isControllingVariants(e), F = isVariantNode(e);
	D && F && !P && e.inherit !== !1 && (M === void 0 && (M = D.initial), N === void 0 && (N = D.animate));
	let I = O ? O.initial === !1 : !1;
	I ||= M === !1;
	let L = I ? N : M;
	if (L && typeof L != "boolean" && !isAnimationControls(L)) {
		let D = Array.isArray(L) ? L : [L];
		for (let O = 0; O < D.length; O++) {
			let k = resolveVariantFromProps(e, D[O]);
			if (k) {
				let { transitionEnd: e, transition: D, ...O } = k;
				for (let e in O) {
					let D = O[e];
					if (Array.isArray(D)) {
						let e = I ? D.length - 1 : 0;
						D = D[e];
					}
					D !== null && (A[e] = D);
				}
				for (let D in e) A[D] = e[D];
			}
		}
	}
	return A;
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
], transformProps = new Set(transformPropOrder), checkStringStartsWith = (e) => (D) => typeof D == "string" && D.startsWith(e), isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--"), startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--"), isCSSVariableToken = (e) => startsAsVariableToken(e) ? singleCssVariableRegex.test(e.split("/*")[0].trim()) : !1, singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, getValueAsType = (e, D) => D && typeof e == "number" ? D.transform(e) : e, clamp = (e, D, O) => O > D ? D : O < e ? e : O, number = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, alpha = {
	...number,
	transform: (e) => clamp(0, 1, e)
}, scale = {
	...number,
	default: 1
}, createUnitType = (e) => ({
	test: (D) => typeof D == "string" && D.endsWith(e) && D.split(" ").length === 1,
	parse: parseFloat,
	transform: (D) => `${D}${e}`
}), degrees = /* @__PURE__ */ createUnitType("deg"), percent = /* @__PURE__ */ createUnitType("%"), px = /* @__PURE__ */ createUnitType("px"), vh = /* @__PURE__ */ createUnitType("vh"), vw = /* @__PURE__ */ createUnitType("vw"), progressPercentage = {
	...percent,
	parse: (e) => percent.parse(e) / 100,
	transform: (e) => percent.transform(e * 100)
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
function buildTransform(e, D, O) {
	let k = "", A = !0;
	for (let j = 0; j < numTransforms; j++) {
		let M = transformPropOrder[j], N = e[M];
		if (N === void 0) continue;
		let P = !0;
		if (P = typeof N == "number" ? N === (M.startsWith("scale") ? 1 : 0) : parseFloat(N) === 0, !P || O) {
			let e = getValueAsType(N, numberValueTypes[M]);
			if (!P) {
				A = !1;
				let D = translateAlias[M] || M;
				k += `${D}(${e}) `;
			}
			O && (D[M] = e);
		}
	}
	return k = k.trim(), O ? k = O(D, A ? "" : k) : A && (k = "none"), k;
}
function buildHTMLStyles(e, D, O) {
	let { style: k, vars: A, transformOrigin: j } = e, M = !1, N = !1;
	for (let e in D) {
		let O = D[e];
		if (transformProps.has(e)) {
			M = !0;
			continue;
		} else if (isCSSVariableName(e)) {
			A[e] = O;
			continue;
		} else {
			let D = getValueAsType(O, numberValueTypes[e]);
			e.startsWith("origin") ? (N = !0, j[e] = D) : k[e] = D;
		}
	}
	if (D.transform || (M || O ? k.transform = buildTransform(D, e.transform, O) : k.transform &&= "none"), N) {
		let { originX: e = "50%", originY: D = "50%", originZ: O = 0 } = j;
		k.transformOrigin = `${e} ${D} ${O}`;
	}
}
var dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function buildSVGPath(e, D, O = 1, k = 0, A = !0) {
	e.pathLength = 1;
	let j = A ? dashKeys : camelKeys;
	e[j.offset] = px.transform(-k);
	let M = px.transform(D), N = px.transform(O);
	e[j.array] = `${M} ${N}`;
}
function calcOrigin(e, D, O) {
	return typeof e == "string" ? e : px.transform(D + O * e);
}
function calcSVGTransformOrigin(e, D, O) {
	return `${calcOrigin(D, e.x, e.width)} ${calcOrigin(O, e.y, e.height)}`;
}
function buildSVGAttrs(e, { attrX: D, attrY: O, attrScale: k, originX: A, originY: j, pathLength: M, pathSpacing: N = 1, pathOffset: P = 0, ...F }, I, L) {
	if (buildHTMLStyles(e, F, L), I) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: R, style: z, dimensions: B } = e;
	R.transform && (B && (z.transform = R.transform), delete R.transform), B && (A !== void 0 || j !== void 0 || z.transform) && (z.transformOrigin = calcSVGTransformOrigin(B, A === void 0 ? .5 : A, j === void 0 ? .5 : j)), D !== void 0 && (R.x = D), O !== void 0 && (R.y = O), k !== void 0 && (R.scale = k), M !== void 0 && buildSVGPath(R, M, N, P, !1);
}
var createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
}), createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
}), isSVGTag = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function renderHTML(e, { style: D, vars: O }, k, A) {
	for (let j in Object.assign(e.style, D, A && A.getProjectionStyles(k)), O) e.style.setProperty(j, O[j]);
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
function renderSVG(e, D, O, k) {
	for (let O in renderHTML(e, D, void 0, k), D.attrs) e.setAttribute(camelCaseAttributes.has(O) ? O : camelToDash(O), D.attrs[O]);
}
var scaleCorrectors = {};
function isForcedMotionValue(e, { layout: D, layoutId: O }) {
	return transformProps.has(e) || e.startsWith("origin") || (D || O !== void 0) && (!!scaleCorrectors[e] || e === "opacity");
}
function scrapeMotionValuesFromProps$1(e, D, O) {
	let { style: k } = e, A = {};
	for (let j in k) (isMotionValue(k[j]) || D.style && isMotionValue(D.style[j]) || isForcedMotionValue(j, e) || O?.getValue(j)?.liveStyle !== void 0) && (A[j] = k[j]);
	return A;
}
function scrapeMotionValuesFromProps(e, D, O) {
	let k = scrapeMotionValuesFromProps$1(e, D, O);
	for (let O in e) if (isMotionValue(e[O]) || isMotionValue(D[O])) {
		let D = transformPropOrder.indexOf(O) === -1 ? O : "attr" + O.charAt(0).toUpperCase() + O.substring(1);
		k[D] = e[O];
	}
	return k;
}
function updateSVGDimensions(e, D) {
	try {
		D.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
	} catch {
		D.dimensions = {
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
	onUpdate: ({ props: e, prevProps: D, current: O, renderState: k, latestValues: A }) => {
		if (!O) return;
		let j = !!e.drag;
		if (!j) {
			for (let e in A) if (transformProps.has(e)) {
				j = !0;
				break;
			}
		}
		if (!j) return;
		let M = !D;
		if (D) for (let O = 0; O < layoutProps.length; O++) {
			let k = layoutProps[O];
			e[k] !== D[k] && (M = !0);
		}
		M && frame.read(() => {
			updateSVGDimensions(O, k), frame.render(() => {
				buildSVGAttrs(k, A, isSVGTag(O.tagName), e.transformTemplate), renderSVG(O, k);
			});
		});
	}
}) }, htmlMotionConfig = { useVisualState: makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
}) };
function copyRawValuesOnly(e, D, O) {
	for (let k in D) !isMotionValue(D[k]) && !isForcedMotionValue(k, O) && (e[k] = D[k]);
}
function useInitialMotionValues({ transformTemplate: e }, D) {
	return useMemo(() => {
		let O = createHtmlRenderState();
		return buildHTMLStyles(O, D, e), Object.assign({}, O.vars, O.style);
	}, [D]);
}
function useStyle(e, D) {
	let O = e.style || {}, k = {};
	return copyRawValuesOnly(k, O, e), Object.assign(k, useInitialMotionValues(e, D)), k;
}
function useHTMLProps(e, D) {
	let O = {}, k = useStyle(e, D);
	return e.drag && e.dragListener !== !1 && (O.draggable = !1, k.userSelect = k.WebkitUserSelect = k.WebkitTouchCallout = "none", k.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (O.tabIndex = 0), O.style = k, O;
}
function useSVGProps(e, D, O, k) {
	let A = useMemo(() => {
		let O = createSvgRenderState();
		return buildSVGAttrs(O, D, isSVGTag(k), e.transformTemplate), {
			...O.attrs,
			style: { ...O.style }
		};
	}, [D]);
	if (e.style) {
		let D = {};
		copyRawValuesOnly(D, e.style, e), A.style = {
			...D,
			...A.style
		};
	}
	return A;
}
function createUseRender(e = !1) {
	return (D, O, k, { latestValues: A }, M) => {
		let P = (isSVGComponent(D) ? useSVGProps : useHTMLProps)(O, A, M, D), F = filterProps(O, typeof D == "string", e), I = D === Fragment ? {} : {
			...F,
			...P,
			ref: k
		}, { children: L } = O, R = useMemo(() => isMotionValue(L) ? L.get() : L, [L]);
		return createElement(D, {
			...I,
			children: R
		});
	};
}
function createMotionComponentFactory(e, D) {
	return function(O, { forwardMotionProps: k } = { forwardMotionProps: !1 }) {
		return createRendererMotionComponent({
			...isSVGComponent(O) ? svgMotionConfig : htmlMotionConfig,
			preloadedFeatures: e,
			useRender: createUseRender(k),
			createVisualElement: D,
			Component: O
		});
	};
}
var m = /* @__PURE__ */ createDOMMotionComponentProxy(/* @__PURE__ */ createMotionComponentFactory());
function shallowCompare(e, D) {
	if (!Array.isArray(D)) return !1;
	let O = D.length;
	if (O !== e.length) return !1;
	for (let k = 0; k < O; k++) if (D[k] !== e[k]) return !1;
	return !0;
}
function resolveVariant(e, D, O) {
	let k = e.getProps();
	return resolveVariantFromProps(k, D, O === void 0 ? k.custom : O, e);
}
var supportsScrollTimeline = /* @__PURE__ */ memo$1(() => window.ScrollTimeline !== void 0), BaseGroupPlaybackControls = class {
	constructor(e) {
		this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
	}
	get finished() {
		return Promise.all(this.animations.map((e) => "finished" in e ? e.finished : e));
	}
	getAll(e) {
		return this.animations[0][e];
	}
	setAll(e, D) {
		for (let O = 0; O < this.animations.length; O++) this.animations[O][e] = D;
	}
	attachTimeline(e, D) {
		let O = this.animations.map((O) => {
			if (supportsScrollTimeline() && O.attachTimeline) return O.attachTimeline(e);
			if (typeof D == "function") return D(O);
		});
		return () => {
			O.forEach((e, D) => {
				e && e(), this.animations[D].stop();
			});
		};
	}
	get time() {
		return this.getAll("time");
	}
	set time(e) {
		this.setAll("time", e);
	}
	get speed() {
		return this.getAll("speed");
	}
	set speed(e) {
		this.setAll("speed", e);
	}
	get startTime() {
		return this.getAll("startTime");
	}
	get duration() {
		let e = 0;
		for (let D = 0; D < this.animations.length; D++) e = Math.max(e, this.animations[D].duration);
		return e;
	}
	runAll(e) {
		this.animations.forEach((D) => D[e]());
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
	then(e, D) {
		return Promise.all(this.animations).then(e).catch(D);
	}
};
function getValueTransition(e, D) {
	return e ? e[D] || e.default || e : void 0;
}
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(e) {
	let D = 0, O = e.next(D);
	for (; !O.done && D < 2e4;) D += 50, O = e.next(D);
	return D >= 2e4 ? Infinity : D;
}
function isGenerator(e) {
	return typeof e == "function";
}
function attachTimeline(e, D) {
	e.timeline = D, e.onfinish = null;
}
var isBezierDefinition = (e) => Array.isArray(e) && typeof e[0] == "number", supportsFlags = { linearEasing: void 0 };
function memoSupports(e, D) {
	let O = /* @__PURE__ */ memo$1(e);
	return () => supportsFlags[D] ?? O();
}
var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), generateLinearEasing = (e, D, O = 10) => {
	let k = "", A = Math.max(Math.round(D / O), 2);
	for (let D = 0; D < A; D++) k += e(/* @__PURE__ */ progress(0, A - 1, D)) + ", ";
	return `linear(${k.substring(0, k.length - 2)})`;
};
function isWaapiSupportedEasing(e) {
	return !!(typeof e == "function" && supportsLinearEasing() || !e || typeof e == "string" && (e in supportedWaapiEasing || supportsLinearEasing()) || isBezierDefinition(e) || Array.isArray(e) && e.every(isWaapiSupportedEasing));
}
var cubicBezierAsString = ([e, D, O, k]) => `cubic-bezier(${e}, ${D}, ${O}, ${k})`, supportedWaapiEasing = {
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
function mapEasingToNativeEasing(e, D) {
	if (e) return typeof e == "function" && supportsLinearEasing() ? generateLinearEasing(e, D) : isBezierDefinition(e) ? cubicBezierAsString(e) : Array.isArray(e) ? e.map((e) => mapEasingToNativeEasing(e, D) || supportedWaapiEasing.easeOut) : supportedWaapiEasing[e];
}
var isDragging = {
	x: !1,
	y: !1
};
function isDragActive() {
	return isDragging.x || isDragging.y;
}
function resolveElements(e, D, O) {
	if (e instanceof Element) return [e];
	if (typeof e == "string") {
		let k = document;
		D && (k = D.current);
		let A = O?.[e] ?? k.querySelectorAll(e);
		return A ? Array.from(A) : [];
	}
	return Array.from(e);
}
function setupGesture(e, D) {
	let O = resolveElements(e), k = new AbortController();
	return [
		O,
		{
			passive: !0,
			...D,
			signal: k.signal
		},
		() => k.abort()
	];
}
function filterEvents$1(e) {
	return (D) => {
		D.pointerType === "touch" || isDragActive() || e(D);
	};
}
function hover(e, D, O = {}) {
	let [k, A, j] = setupGesture(e, O), M = filterEvents$1((e) => {
		let { target: O } = e, k = D(e);
		if (typeof k != "function" || !O) return;
		let j = filterEvents$1((e) => {
			k(e), O.removeEventListener("pointerleave", j);
		});
		O.addEventListener("pointerleave", j, A);
	});
	return k.forEach((e) => {
		e.addEventListener("pointerenter", M, A);
	}), j;
}
var isNodeOrChild = (e, D) => D ? e === D ? !0 : isNodeOrChild(e, D.parentElement) : !1, isPrimaryPointer = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, focusableElements = new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function isElementKeyboardAccessible(e) {
	return focusableElements.has(e.tagName) || e.tabIndex !== -1;
}
var isPressing = /* @__PURE__ */ new WeakSet();
function filterEvents(e) {
	return (D) => {
		D.key === "Enter" && e(D);
	};
}
function firePointerEvent(e, D) {
	e.dispatchEvent(new PointerEvent("pointer" + D, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var enableKeyboardPress = (e, D) => {
	let O = e.currentTarget;
	if (!O) return;
	let k = filterEvents(() => {
		if (isPressing.has(O)) return;
		firePointerEvent(O, "down");
		let e = filterEvents(() => {
			firePointerEvent(O, "up");
		});
		O.addEventListener("keyup", e, D), O.addEventListener("blur", () => firePointerEvent(O, "cancel"), D);
	});
	O.addEventListener("keydown", k, D), O.addEventListener("blur", () => O.removeEventListener("keydown", k), D);
};
function isValidPressEvent(e) {
	return isPrimaryPointer(e) && !isDragActive();
}
function press(e, D, O = {}) {
	let [k, A, j] = setupGesture(e, O), M = (e) => {
		let k = e.currentTarget;
		if (!isValidPressEvent(e) || isPressing.has(k)) return;
		isPressing.add(k);
		let j = D(e), M = (e, D) => {
			window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", P), !(!isValidPressEvent(e) || !isPressing.has(k)) && (isPressing.delete(k), typeof j == "function" && j(e, { success: D }));
		}, N = (e) => {
			M(e, O.useGlobalTarget || isNodeOrChild(k, e.target));
		}, P = (e) => {
			M(e, !1);
		};
		window.addEventListener("pointerup", N, A), window.addEventListener("pointercancel", P, A);
	};
	return k.forEach((e) => {
		!isElementKeyboardAccessible(e) && e.getAttribute("tabindex") === null && (e.tabIndex = 0), (O.useGlobalTarget ? window : e).addEventListener("pointerdown", M, A), e.addEventListener("focus", (e) => enableKeyboardPress(e, A), A);
	}), j;
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
	set: (e) => {
		now = e, queueMicrotask(clearTime);
	}
};
function addUniqueItem(e, D) {
	e.indexOf(D) === -1 && e.push(D);
}
function removeItem(e, D) {
	let O = e.indexOf(D);
	O > -1 && e.splice(O, 1);
}
var SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return addUniqueItem(this.subscriptions, e), () => removeItem(this.subscriptions, e);
	}
	notify(e, D, O) {
		let k = this.subscriptions.length;
		if (k) if (k === 1) this.subscriptions[0](e, D, O);
		else for (let A = 0; A < k; A++) {
			let k = this.subscriptions[A];
			k && k(e, D, O);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
};
function velocityPerSecond(e, D) {
	return D ? e * (1e3 / D) : 0;
}
var MAX_VELOCITY_DELTA = 30, isFloat = (e) => !isNaN(parseFloat(e)), collectMotionValues = { current: void 0 }, MotionValue = class {
	constructor(e, D = {}) {
		this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e, D = !0) => {
			let O = time.now();
			this.updatedAt !== O && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), D && this.events.renderRequest && this.events.renderRequest.notify(this.current);
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = D.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = time.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = isFloat(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return process.env.NODE_ENV !== "production" && warnOnce(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", e);
	}
	on(e, D) {
		this.events[e] || (this.events[e] = new SubscriptionManager());
		let O = this.events[e].add(D);
		return e === "change" ? () => {
			O(), frame.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : O;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, D) {
		this.passiveEffect = e, this.stopPassiveEffect = D;
	}
	set(e, D = !0) {
		!D || !this.passiveEffect ? this.updateAndNotify(e, D) : this.passiveEffect(e, this.updateAndNotify);
	}
	setWithVelocity(e, D, O) {
		this.set(D), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - O;
	}
	jump(e, D = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, D && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	get() {
		return collectMotionValues.current && collectMotionValues.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = time.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
		let D = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
		return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), D);
	}
	start(e) {
		return this.stop(), new Promise((D) => {
			this.hasAnimated = !0, this.animation = e(D), this.events.animationStart && this.events.animationStart.notify();
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
function motionValue(e, D) {
	return new MotionValue(e, D);
}
function setMotionValue(e, D, O) {
	e.hasValue(D) ? e.getValue(D).set(O) : e.addValue(D, motionValue(O));
}
function setTarget(e, D) {
	let { transitionEnd: O = {}, transition: k = {}, ...A } = resolveVariant(e, D) || {};
	for (let D in A = {
		...A,
		...O
	}, A) setMotionValue(e, D, resolveFinalValueInKeyframes(A[D]));
}
function isWillChangeMotionValue(e) {
	return !!(isMotionValue(e) && e.add);
}
function addValueToWillChange(e, D) {
	let O = e.getValue("willChange");
	if (isWillChangeMotionValue(O)) return O.add(D);
}
function getOptimisedAppearId(e) {
	return e.props[optimizedAppearDataAttribute];
}
var instantAnimationState = { current: !1 }, calcBezier = (e, D, O) => (((1 - 3 * O + 3 * D) * e + (3 * O - 6 * D)) * e + 3 * D) * e, subdivisionPrecision = 1e-7, subdivisionMaxIterations = 12;
function binarySubdivide(e, D, O, k, A) {
	let j, M, N = 0;
	do
		M = D + (O - D) / 2, j = calcBezier(M, k, A) - e, j > 0 ? O = M : D = M;
	while (Math.abs(j) > subdivisionPrecision && ++N < subdivisionMaxIterations);
	return M;
}
function cubicBezier(e, D, O, k) {
	if (e === D && O === k) return noop;
	let A = (D) => binarySubdivide(D, 0, 1, e, O);
	return (e) => e === 0 || e === 1 ? e : calcBezier(A(e), D, k);
}
var mirrorEasing = (e) => (D) => D <= .5 ? e(2 * D) / 2 : (2 - e(2 * (1 - D))) / 2, reverseEasing = (e) => (D) => 1 - e(1 - D), backOut = /* @__PURE__ */ cubicBezier(.33, 1.53, .69, .99), backIn = /* @__PURE__ */ reverseEasing(backOut), backInOut = /* @__PURE__ */ mirrorEasing(backIn), anticipate = (e) => (e *= 2) < 1 ? .5 * backIn(e) : .5 * (2 - 2 ** (-10 * (e - 1))), circIn = (e) => 1 - Math.sin(Math.acos(e)), circOut = reverseEasing(circIn), circInOut = mirrorEasing(circIn), isZeroValueString = (e) => /^0[^.\s]+$/u.test(e);
function isNone(e) {
	return typeof e == "number" ? e === 0 : e === null ? !0 : e === "none" || e === "0" || isZeroValueString(e);
}
var sanitize = (e) => Math.round(e * 1e5) / 1e5, floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function isNullish(e) {
	return e == null;
}
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, isColorString = (e, D) => (O) => !!(typeof O == "string" && singleColorRegex.test(O) && O.startsWith(e) || D && !isNullish(O) && Object.prototype.hasOwnProperty.call(O, D)), splitColor = (e, D, O) => (k) => {
	if (typeof k != "string") return k;
	let [A, j, M, N] = k.match(floatRegex);
	return {
		[e]: parseFloat(A),
		[D]: parseFloat(j),
		[O]: parseFloat(M),
		alpha: N === void 0 ? 1 : parseFloat(N)
	};
}, clampRgbUnit = (e) => clamp(0, 255, e), rgbUnit = {
	...number,
	transform: (e) => Math.round(clampRgbUnit(e))
}, rgba = {
	test: /* @__PURE__ */ isColorString("rgb", "red"),
	parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
	transform: ({ red: e, green: D, blue: O, alpha: k = 1 }) => "rgba(" + rgbUnit.transform(e) + ", " + rgbUnit.transform(D) + ", " + rgbUnit.transform(O) + ", " + sanitize(alpha.transform(k)) + ")"
};
function parseHex(e) {
	let D = "", O = "", k = "", A = "";
	return e.length > 5 ? (D = e.substring(1, 3), O = e.substring(3, 5), k = e.substring(5, 7), A = e.substring(7, 9)) : (D = e.substring(1, 2), O = e.substring(2, 3), k = e.substring(3, 4), A = e.substring(4, 5), D += D, O += O, k += k, A += A), {
		red: parseInt(D, 16),
		green: parseInt(O, 16),
		blue: parseInt(k, 16),
		alpha: A ? parseInt(A, 16) / 255 : 1
	};
}
var hex = {
	test: /* @__PURE__ */ isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
}, hsla = {
	test: /* @__PURE__ */ isColorString("hsl", "hue"),
	parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: D, lightness: O, alpha: k = 1 }) => "hsla(" + Math.round(e) + ", " + percent.transform(sanitize(D)) + ", " + percent.transform(sanitize(O)) + ", " + sanitize(alpha.transform(k)) + ")"
}, color = {
	test: (e) => rgba.test(e) || hex.test(e) || hsla.test(e),
	parse: (e) => rgba.test(e) ? rgba.parse(e) : hsla.test(e) ? hsla.parse(e) : hex.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? rgba.transform(e) : hsla.transform(e)
}, colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function test(e) {
	return isNaN(e) && typeof e == "string" && (e.match(floatRegex)?.length || 0) + (e.match(colorRegex)?.length || 0) > 0;
}
var NUMBER_TOKEN = "number", COLOR_TOKEN = "color", VAR_TOKEN = "var", VAR_FUNCTION_TOKEN = "var(", SPLIT_TOKEN = "${}", complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(e) {
	let D = e.toString(), O = [], k = {
		color: [],
		number: [],
		var: []
	}, A = [], j = 0;
	return {
		values: O,
		split: D.replace(complexRegex, (e) => (color.test(e) ? (k.color.push(j), A.push(COLOR_TOKEN), O.push(color.parse(e))) : e.startsWith(VAR_FUNCTION_TOKEN) ? (k.var.push(j), A.push(VAR_TOKEN), O.push(e)) : (k.number.push(j), A.push(NUMBER_TOKEN), O.push(parseFloat(e))), ++j, SPLIT_TOKEN)).split(SPLIT_TOKEN),
		indexes: k,
		types: A
	};
}
function parseComplexValue(e) {
	return analyseComplexValue(e).values;
}
function createTransformer(e) {
	let { split: D, types: O } = analyseComplexValue(e), k = D.length;
	return (e) => {
		let A = "";
		for (let j = 0; j < k; j++) if (A += D[j], e[j] !== void 0) {
			let D = O[j];
			D === NUMBER_TOKEN ? A += sanitize(e[j]) : D === COLOR_TOKEN ? A += color.transform(e[j]) : A += e[j];
		}
		return A;
	};
}
var convertNumbersToZero = (e) => typeof e == "number" ? 0 : e;
function getAnimatableNone$1(e) {
	let D = parseComplexValue(e);
	return createTransformer(e)(D.map(convertNumbersToZero));
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
function applyDefaultFilter(e) {
	let [D, O] = e.slice(0, -1).split("(");
	if (D === "drop-shadow") return e;
	let [k] = O.match(floatRegex) || [];
	if (!k) return e;
	let A = O.replace(k, ""), j = maxDefaults.has(D) ? 1 : 0;
	return k !== O && (j *= 100), D + "(" + j + A + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu, filter = {
	...complex,
	getAnimatableNone: (e) => {
		let D = e.match(functionRegex);
		return D ? D.map(applyDefaultFilter).join(" ") : e;
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
}, getDefaultValueType = (e) => defaultValueTypes[e];
function getAnimatableNone(e, D) {
	let O = getDefaultValueType(e);
	return O !== filter && (O = complex), O.getAnimatableNone ? O.getAnimatableNone(D) : void 0;
}
var invalidTemplates = new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(e, D, O) {
	let k = 0, A;
	for (; k < e.length && !A;) {
		let D = e[k];
		typeof D == "string" && !invalidTemplates.has(D) && analyseComplexValue(D).values.length && (A = e[k]), k++;
	}
	if (A && O) for (let k of D) e[k] = getAnimatableNone(O, A);
}
var isNumOrPxType = (e) => e === number || e === px, getPosFromMatrix = (e, D) => parseFloat(e.split(", ")[D]), getTranslateFromMatrix = (e, D) => (O, { transform: k }) => {
	if (k === "none" || !k) return 0;
	let A = k.match(/^matrix3d\((.+)\)$/u);
	if (A) return getPosFromMatrix(A[1], D);
	{
		let D = k.match(/^matrix\((.+)\)$/u);
		return D ? getPosFromMatrix(D[1], e) : 0;
	}
}, transformKeys = new Set([
	"x",
	"y",
	"z"
]), nonTranslationalTransformKeys = transformPropOrder.filter((e) => !transformKeys.has(e));
function removeNonTranslationalTransform(e) {
	let D = [];
	return nonTranslationalTransformKeys.forEach((O) => {
		let k = e.getValue(O);
		k !== void 0 && (D.push([O, k.get()]), k.set(O.startsWith("scale") ? 1 : 0));
	}), D;
}
var positionalValues = {
	width: ({ x: e }, { paddingLeft: D = "0", paddingRight: O = "0" }) => e.max - e.min - parseFloat(D) - parseFloat(O),
	height: ({ y: e }, { paddingTop: D = "0", paddingBottom: O = "0" }) => e.max - e.min - parseFloat(D) - parseFloat(O),
	top: (e, { top: D }) => parseFloat(D),
	left: (e, { left: D }) => parseFloat(D),
	bottom: ({ y: e }, { top: D }) => parseFloat(D) + (e.max - e.min),
	right: ({ x: e }, { left: D }) => parseFloat(D) + (e.max - e.min),
	x: getTranslateFromMatrix(4, 13),
	y: getTranslateFromMatrix(5, 14)
};
positionalValues.translateX = positionalValues.x, positionalValues.translateY = positionalValues.y;
var toResolve = /* @__PURE__ */ new Set(), isScheduled = !1, anyNeedsMeasurement = !1;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		let e = Array.from(toResolve).filter((e) => e.needsMeasurement), D = new Set(e.map((e) => e.element)), O = /* @__PURE__ */ new Map();
		D.forEach((e) => {
			let D = removeNonTranslationalTransform(e);
			D.length && (O.set(e, D), e.render());
		}), e.forEach((e) => e.measureInitialState()), D.forEach((e) => {
			e.render();
			let D = O.get(e);
			D && D.forEach(([D, O]) => {
				var k;
				(k = e.getValue(D)) == null || k.set(O);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	anyNeedsMeasurement = !1, isScheduled = !1, toResolve.forEach((e) => e.complete()), toResolve.clear();
}
function readAllKeyframes() {
	toResolve.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (anyNeedsMeasurement = !0);
	});
}
function flushKeyframeResolvers() {
	readAllKeyframes(), measureAllKeyframes();
}
var KeyframeResolver = class {
	constructor(e, D, O, k, A, j = !1) {
		this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = D, this.name = O, this.motionValue = k, this.element = A, this.isAsync = j;
	}
	scheduleResolve() {
		this.isScheduled = !0, this.isAsync ? (toResolve.add(this), isScheduled || (isScheduled = !0, frame.read(readAllKeyframes), frame.resolveKeyframes(measureAllKeyframes))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: D, element: O, motionValue: k } = this;
		for (let A = 0; A < e.length; A++) if (e[A] === null) if (A === 0) {
			let A = k?.get(), j = e[e.length - 1];
			if (A !== void 0) e[0] = A;
			else if (O && D) {
				let k = O.readValue(D, j);
				k != null && (e[0] = k);
			}
			e[0] === void 0 && (e[0] = j), k && A === void 0 && k.set(e[0]);
		} else e[A] = e[A - 1];
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
}, isNumericalString = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(e) {
	let D = splitCSSVariableRegex.exec(e);
	if (!D) return [,];
	let [, O, k, A] = D;
	return [`--${O ?? k}`, A];
}
var maxDepth = 4;
function getVariableValue(e, D, O = 1) {
	invariant(O <= maxDepth, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
	let [k, A] = parseCSSVariable(e);
	if (!k) return;
	let j = window.getComputedStyle(D).getPropertyValue(k);
	if (j) {
		let e = j.trim();
		return isNumericalString(e) ? parseFloat(e) : e;
	}
	return isCSSVariableToken(A) ? getVariableValue(A, D, O + 1) : A;
}
var testValueType = (e) => (D) => D.test(e), dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	{
		test: (e) => e === "auto",
		parse: (e) => e
	}
], findDimensionValueType = (e) => dimensionValueTypes.find(testValueType(e)), DOMKeyframesResolver = class extends KeyframeResolver {
	constructor(e, D, O, k, A) {
		super(e, D, O, k, A, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: D, name: O } = this;
		if (!D || !D.current) return;
		super.readKeyframes();
		for (let O = 0; O < e.length; O++) {
			let k = e[O];
			if (typeof k == "string" && (k = k.trim(), isCSSVariableToken(k))) {
				let A = getVariableValue(k, D.current);
				A !== void 0 && (e[O] = A), O === e.length - 1 && (this.finalKeyframe = k);
			}
		}
		if (this.resolveNoneKeyframes(), !positionalKeys.has(O) || e.length !== 2) return;
		let [k, A] = e, j = findDimensionValueType(k), M = findDimensionValueType(A);
		if (j !== M) if (isNumOrPxType(j) && isNumOrPxType(M)) for (let D = 0; D < e.length; D++) {
			let O = e[D];
			typeof O == "string" && (e[D] = parseFloat(O));
		}
		else this.needsMeasurement = !0;
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: D } = this, O = [];
		for (let D = 0; D < e.length; D++) isNone(e[D]) && O.push(D);
		O.length && makeNoneKeyframesAnimatable(e, O, D);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: D, name: O } = this;
		if (!e || !e.current) return;
		O === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = positionalValues[O](e.measureViewportBox(), window.getComputedStyle(e.current)), D[0] = this.measuredOrigin;
		let k = D[D.length - 1];
		k !== void 0 && e.getValue(O, k).jump(k, !1);
	}
	measureEndState() {
		let { element: e, name: D, unresolvedKeyframes: O } = this;
		if (!e || !e.current) return;
		let k = e.getValue(D);
		k && k.jump(this.measuredOrigin, !1);
		let A = O.length - 1, j = O[A];
		O[A] = positionalValues[D](e.measureViewportBox(), window.getComputedStyle(e.current)), j !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = j), this.removedTransforms?.length && this.removedTransforms.forEach(([D, O]) => {
			e.getValue(D).set(O);
		}), this.resolveNoneKeyframes();
	}
}, isAnimatable = (e, D) => D === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (complex.test(e) || e === "0") && !e.startsWith("url("));
function hasKeyframesChanged(e) {
	let D = e[0];
	if (e.length === 1) return !0;
	for (let O = 0; O < e.length; O++) if (e[O] !== D) return !0;
}
function canAnimate(e, D, O, k) {
	let A = e[0];
	if (A === null) return !1;
	if (D === "display" || D === "visibility") return !0;
	let j = e[e.length - 1], M = isAnimatable(A, D), N = isAnimatable(j, D);
	return warning(M === N, `You are trying to animate ${D} from "${A}" to "${j}". ${A} is not an animatable value - to enable this animation set ${A} to a value animatable to ${j} via the \`style\` property.`), !M || !N ? !1 : hasKeyframesChanged(e) || (O === "spring" || isGenerator(O)) && k;
}
var isNotNull = (e) => e !== null;
function getFinalKeyframe(e, { repeat: D, repeatType: O = "loop" }, k) {
	let A = e.filter(isNotNull), j = D && O !== "loop" && D % 2 == 1 ? 0 : A.length - 1;
	return !j || k === void 0 ? A[j] : k;
}
var MAX_RESOLVE_DELAY = 40, BaseAnimation = class {
	constructor({ autoplay: e = !0, delay: D = 0, type: O = "keyframes", repeat: k = 0, repeatDelay: A = 0, repeatType: j = "loop", ...M }) {
		this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = time.now(), this.options = {
			autoplay: e,
			delay: D,
			type: O,
			repeat: k,
			repeatDelay: A,
			repeatType: j,
			...M
		}, this.updateFinishedPromise();
	}
	calcStartTime() {
		return this.resolvedAt && this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt;
	}
	get resolved() {
		return !this._resolved && !this.hasAttemptedResolve && flushKeyframeResolvers(), this._resolved;
	}
	onKeyframesResolved(e, D) {
		this.resolvedAt = time.now(), this.hasAttemptedResolve = !0;
		let { name: O, type: k, velocity: A, delay: j, onComplete: M, onUpdate: N, isGenerator: P } = this.options;
		if (!P && !canAnimate(e, O, k, A)) if (instantAnimationState.current || !j) {
			N && N(getFinalKeyframe(e, this.options, D)), M && M(), this.resolveFinishedPromise();
			return;
		} else this.options.duration = 0;
		let F = this.initPlayback(e, D);
		F !== !1 && (this._resolved = {
			keyframes: e,
			finalKeyframe: D,
			...F
		}, this.onPostResolved());
	}
	onPostResolved() {}
	then(e, D) {
		return this.currentFinishedPromise.then(e, D);
	}
	flatten() {
		this.options.type = "keyframes", this.options.ease = "linear";
	}
	updateFinishedPromise() {
		this.currentFinishedPromise = new Promise((e) => {
			this.resolveFinishedPromise = e;
		});
	}
}, mixNumber = (e, D, O) => e + (D - e) * O;
function hueToRgb(e, D, O) {
	return O < 0 && (O += 1), O > 1 && --O, O < 1 / 6 ? e + (D - e) * 6 * O : O < 1 / 2 ? D : O < 2 / 3 ? e + (D - e) * (2 / 3 - O) * 6 : e;
}
function hslaToRgba({ hue: e, saturation: D, lightness: O, alpha: k }) {
	e /= 360, D /= 100, O /= 100;
	let A = 0, j = 0, M = 0;
	if (!D) A = j = M = O;
	else {
		let k = O < .5 ? O * (1 + D) : O + D - O * D, N = 2 * O - k;
		A = hueToRgb(N, k, e + 1 / 3), j = hueToRgb(N, k, e), M = hueToRgb(N, k, e - 1 / 3);
	}
	return {
		red: Math.round(A * 255),
		green: Math.round(j * 255),
		blue: Math.round(M * 255),
		alpha: k
	};
}
function mixImmediate(e, D) {
	return (O) => O > 0 ? D : e;
}
var mixLinearColor = (e, D, O) => {
	let k = e * e, A = O * (D * D - k) + k;
	return A < 0 ? 0 : Math.sqrt(A);
}, colorTypes = [
	hex,
	rgba,
	hsla
], getColorType = (e) => colorTypes.find((D) => D.test(e));
function asRGBA(e) {
	let D = getColorType(e);
	if (warning(!!D, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !D) return !1;
	let O = D.parse(e);
	return D === hsla && (O = hslaToRgba(O)), O;
}
var mixColor = (e, D) => {
	let O = asRGBA(e), k = asRGBA(D);
	if (!O || !k) return mixImmediate(e, D);
	let A = { ...O };
	return (e) => (A.red = mixLinearColor(O.red, k.red, e), A.green = mixLinearColor(O.green, k.green, e), A.blue = mixLinearColor(O.blue, k.blue, e), A.alpha = mixNumber(O.alpha, k.alpha, e), rgba.transform(A));
}, combineFunctions = (e, D) => (O) => D(e(O)), pipe = (...e) => e.reduce(combineFunctions), invisibleValues = new Set(["none", "hidden"]);
function mixVisibility(e, D) {
	return invisibleValues.has(e) ? (O) => O <= 0 ? e : D : (O) => O >= 1 ? D : e;
}
function mixNumber$1(e, D) {
	return (O) => mixNumber(e, D, O);
}
function getMixer(e) {
	return typeof e == "number" ? mixNumber$1 : typeof e == "string" ? isCSSVariableToken(e) ? mixImmediate : color.test(e) ? mixColor : mixComplex : Array.isArray(e) ? mixArray : typeof e == "object" ? color.test(e) ? mixColor : mixObject : mixImmediate;
}
function mixArray(e, D) {
	let O = [...e], k = O.length, A = e.map((e, O) => getMixer(e)(e, D[O]));
	return (e) => {
		for (let D = 0; D < k; D++) O[D] = A[D](e);
		return O;
	};
}
function mixObject(e, D) {
	let O = {
		...e,
		...D
	}, k = {};
	for (let A in O) e[A] !== void 0 && D[A] !== void 0 && (k[A] = getMixer(e[A])(e[A], D[A]));
	return (e) => {
		for (let D in k) O[D] = k[D](e);
		return O;
	};
}
function matchOrder(e, D) {
	let O = [], k = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let A = 0; A < D.values.length; A++) {
		let j = D.types[A], M = e.indexes[j][k[j]];
		O[A] = e.values[M] ?? 0, k[j]++;
	}
	return O;
}
var mixComplex = (e, D) => {
	let O = complex.createTransformer(D), k = analyseComplexValue(e), A = analyseComplexValue(D);
	return k.indexes.var.length === A.indexes.var.length && k.indexes.color.length === A.indexes.color.length && k.indexes.number.length >= A.indexes.number.length ? invisibleValues.has(e) && !A.values.length || invisibleValues.has(D) && !k.values.length ? mixVisibility(e, D) : pipe(mixArray(matchOrder(k, A), A.values), O) : (warning(!0, `Complex values '${e}' and '${D}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), mixImmediate(e, D));
};
function mix(e, D, O) {
	return typeof e == "number" && typeof D == "number" && typeof O == "number" ? mixNumber(e, D, O) : getMixer(e)(e, D);
}
var velocitySampleDuration = 5;
function calcGeneratorVelocity(e, D, O) {
	let k = Math.max(D - velocitySampleDuration, 0);
	return velocityPerSecond(O - e(k), D - k);
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
function findSpring({ duration: e = springDefaults.duration, bounce: D = springDefaults.bounce, velocity: O = springDefaults.velocity, mass: k = springDefaults.mass }) {
	let A, j;
	warning(e <= /* @__PURE__ */ secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less");
	let M = 1 - D;
	M = clamp(springDefaults.minDamping, springDefaults.maxDamping, M), e = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(e)), M < 1 ? (A = (D) => {
		let k = D * M, A = k * e, j = k - O, N = calcAngularFreq(D, M), P = Math.exp(-A);
		return safeMin - j / N * P;
	}, j = (D) => {
		let k = D * M * e, j = k * O + O, N = M ** 2 * D ** 2 * e, P = Math.exp(-k), F = calcAngularFreq(D ** 2, M);
		return (-A(D) + safeMin > 0 ? -1 : 1) * ((j - N) * P) / F;
	}) : (A = (D) => {
		let k = Math.exp(-D * e), A = (D - O) * e + 1;
		return -safeMin + k * A;
	}, j = (D) => Math.exp(-D * e) * ((O - D) * (e * e)));
	let N = 5 / e, P = approximateRoot(A, j, N);
	if (e = /* @__PURE__ */ secondsToMilliseconds(e), isNaN(P)) return {
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		duration: e
	};
	{
		let D = P ** 2 * k;
		return {
			stiffness: D,
			damping: M * 2 * Math.sqrt(k * D),
			duration: e
		};
	}
}
var rootIterations = 12;
function approximateRoot(e, D, O) {
	let k = O;
	for (let O = 1; O < rootIterations; O++) k -= e(k) / D(k);
	return k;
}
function calcAngularFreq(e, D) {
	return e * Math.sqrt(1 - D * D);
}
var durationKeys = ["duration", "bounce"], physicsKeys = [
	"stiffness",
	"damping",
	"mass"
];
function isSpringType(e, D) {
	return D.some((D) => e[D] !== void 0);
}
function getSpringOptions(e) {
	let D = {
		velocity: springDefaults.velocity,
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		mass: springDefaults.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!isSpringType(e, physicsKeys) && isSpringType(e, durationKeys)) if (e.visualDuration) {
		let O = e.visualDuration, k = 2 * Math.PI / (O * 1.2), A = k * k, j = 2 * clamp(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(A);
		D = {
			...D,
			mass: springDefaults.mass,
			stiffness: A,
			damping: j
		};
	} else {
		let O = findSpring(e);
		D = {
			...D,
			...O,
			mass: springDefaults.mass
		}, D.isResolvedFromDuration = !0;
	}
	return D;
}
function spring(e = springDefaults.visualDuration, D = springDefaults.bounce) {
	let O = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: D
	}, { restSpeed: k, restDelta: A } = O, j = O.keyframes[0], M = O.keyframes[O.keyframes.length - 1], N = {
		done: !1,
		value: j
	}, { stiffness: P, damping: F, mass: I, duration: L, velocity: R, isResolvedFromDuration: z } = getSpringOptions({
		...O,
		velocity: -/* @__PURE__ */ millisecondsToSeconds(O.velocity || 0)
	}), B = R || 0, V = F / (2 * Math.sqrt(P * I)), H = M - j, U = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(P / I)), W = Math.abs(H) < 5;
	k ||= W ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default, A ||= W ? springDefaults.restDelta.granular : springDefaults.restDelta.default;
	let G;
	if (V < 1) {
		let e = calcAngularFreq(U, V);
		G = (D) => M - Math.exp(-V * U * D) * ((B + V * U * H) / e * Math.sin(e * D) + H * Math.cos(e * D));
	} else if (V === 1) G = (e) => M - Math.exp(-U * e) * (H + (B + U * H) * e);
	else {
		let e = U * Math.sqrt(V * V - 1);
		G = (D) => {
			let O = Math.exp(-V * U * D), k = Math.min(e * D, 300);
			return M - O * ((B + V * U * H) * Math.sinh(k) + e * H * Math.cosh(k)) / e;
		};
	}
	let K = {
		calculatedDuration: z && L || null,
		next: (e) => {
			let D = G(e);
			if (z) N.done = e >= L;
			else {
				let O = 0;
				V < 1 && (O = e === 0 ? /* @__PURE__ */ secondsToMilliseconds(B) : calcGeneratorVelocity(G, e, D));
				let j = Math.abs(O) <= k, P = Math.abs(M - D) <= A;
				N.done = j && P;
			}
			return N.value = N.done ? M : D, N;
		},
		toString: () => {
			let e = Math.min(calcGeneratorDuration(K), maxGeneratorDuration), D = generateLinearEasing((D) => K.next(e * D).value, e, 30);
			return e + "ms " + D;
		}
	};
	return K;
}
function inertia({ keyframes: e, velocity: D = 0, power: O = .8, timeConstant: k = 325, bounceDamping: A = 10, bounceStiffness: j = 500, modifyTarget: M, min: N, max: P, restDelta: F = .5, restSpeed: I }) {
	let L = e[0], R = {
		done: !1,
		value: L
	}, z = (e) => N !== void 0 && e < N || P !== void 0 && e > P, B = (e) => N === void 0 ? P : P === void 0 || Math.abs(N - e) < Math.abs(P - e) ? N : P, V = O * D, H = L + V, U = M === void 0 ? H : M(H);
	U !== H && (V = U - L);
	let W = (e) => -V * Math.exp(-e / k), G = (e) => U + W(e), K = (e) => {
		let D = W(e), O = G(e);
		R.done = Math.abs(D) <= F, R.value = R.done ? U : O;
	}, q, J, Y = (e) => {
		z(R.value) && (q = e, J = spring({
			keyframes: [R.value, B(R.value)],
			velocity: calcGeneratorVelocity(G, e, R.value),
			damping: A,
			stiffness: j,
			restDelta: F,
			restSpeed: I
		}));
	};
	return Y(0), {
		calculatedDuration: null,
		next: (e) => {
			let D = !1;
			return !J && q === void 0 && (D = !0, K(e), Y(e)), q !== void 0 && e >= q ? J.next(e - q) : (!D && K(e), R);
		}
	};
}
var easeIn = /* @__PURE__ */ cubicBezier(.42, 0, 1, 1), easeOut = /* @__PURE__ */ cubicBezier(0, 0, .58, 1), easeInOut = /* @__PURE__ */ cubicBezier(.42, 0, .58, 1), isEasingArray = (e) => Array.isArray(e) && typeof e[0] != "number", easingLookup = {
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
}, easingDefinitionToFunction = (e) => {
	if (isBezierDefinition(e)) {
		invariant(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
		let [D, O, k, A] = e;
		return cubicBezier(D, O, k, A);
	} else if (typeof e == "string") return invariant(easingLookup[e] !== void 0, `Invalid easing type '${e}'`), easingLookup[e];
	return e;
};
function createMixers(e, D, O) {
	let k = [], A = O || mix, j = e.length - 1;
	for (let O = 0; O < j; O++) {
		let j = A(e[O], e[O + 1]);
		D && (j = pipe(Array.isArray(D) ? D[O] || noop : D, j)), k.push(j);
	}
	return k;
}
function interpolate(e, D, { clamp: O = !0, ease: k, mixer: A } = {}) {
	let j = e.length;
	if (invariant(j === D.length, "Both input and output ranges must be the same length"), j === 1) return () => D[0];
	if (j === 2 && D[0] === D[1]) return () => D[1];
	let M = e[0] === e[1];
	e[0] > e[j - 1] && (e = [...e].reverse(), D = [...D].reverse());
	let N = createMixers(D, k, A), P = N.length, F = (O) => {
		if (M && O < e[0]) return D[0];
		let k = 0;
		if (P > 1) for (; k < e.length - 2 && !(O < e[k + 1]); k++);
		let A = /* @__PURE__ */ progress(e[k], e[k + 1], O);
		return N[k](A);
	};
	return O ? (D) => F(clamp(e[0], e[j - 1], D)) : F;
}
function fillOffset(e, D) {
	let O = e[e.length - 1];
	for (let k = 1; k <= D; k++) {
		let A = /* @__PURE__ */ progress(0, D, k);
		e.push(mixNumber(O, 1, A));
	}
}
function defaultOffset(e) {
	let D = [0];
	return fillOffset(D, e.length - 1), D;
}
function convertOffsetToTimes(e, D) {
	return e.map((e) => e * D);
}
function defaultEasing(e, D) {
	return e.map(() => D || easeInOut).splice(0, e.length - 1);
}
function keyframes({ duration: e = 300, keyframes: D, times: O, ease: k = "easeInOut" }) {
	let A = isEasingArray(k) ? k.map(easingDefinitionToFunction) : easingDefinitionToFunction(k), j = {
		done: !1,
		value: D[0]
	}, M = interpolate(convertOffsetToTimes(O && O.length === D.length ? O : defaultOffset(D), e), D, { ease: Array.isArray(A) ? A : defaultEasing(D, A) });
	return {
		calculatedDuration: e,
		next: (D) => (j.value = M(D), j.done = D >= e, j)
	};
}
var frameloopDriver = (e) => {
	let D = ({ timestamp: D }) => e(D);
	return {
		start: () => frame.update(D, !0),
		stop: () => cancelFrame(D),
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
}, generators = {
	decay: inertia,
	inertia,
	tween: keyframes,
	keyframes,
	spring
}, percentToProgress = (e) => e / 100, MainThreadAnimation = class extends BaseAnimation {
	constructor(e) {
		super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
			if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
			this.teardown();
			let { onStop: e } = this.options;
			e && e();
		};
		let { name: D, motionValue: O, element: k, keyframes: A } = this.options;
		this.resolver = new (k?.KeyframeResolver || KeyframeResolver)(A, (e, D) => this.onKeyframesResolved(e, D), D, O, k), this.resolver.scheduleResolve();
	}
	flatten() {
		super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
	}
	initPlayback(e) {
		let { type: D = "keyframes", repeat: O = 0, repeatDelay: k = 0, repeatType: A, velocity: j = 0 } = this.options, M = isGenerator(D) ? D : generators[D] || keyframes, N, P;
		M !== keyframes && typeof e[0] != "number" && (process.env.NODE_ENV !== "production" && invariant(e.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${e}`), N = pipe(percentToProgress, mix(e[0], e[1])), e = [0, 100]);
		let F = M({
			...this.options,
			keyframes: e
		});
		A === "mirror" && (P = M({
			...this.options,
			keyframes: [...e].reverse(),
			velocity: -j
		})), F.calculatedDuration === null && (F.calculatedDuration = calcGeneratorDuration(F));
		let { calculatedDuration: I } = F, L = I + k, R = L * (O + 1) - k;
		return {
			generator: F,
			mirroredGenerator: P,
			mapPercentToKeyframes: N,
			calculatedDuration: I,
			resolvedDuration: L,
			totalDuration: R
		};
	}
	onPostResolved() {
		let { autoplay: e = !0 } = this.options;
		this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState;
	}
	tick(e, D = !1) {
		let { resolved: O } = this;
		if (!O) {
			let { keyframes: e } = this.options;
			return {
				done: !0,
				value: e[e.length - 1]
			};
		}
		let { finalKeyframe: k, generator: A, mirroredGenerator: j, mapPercentToKeyframes: M, keyframes: N, calculatedDuration: P, totalDuration: F, resolvedDuration: I } = O;
		if (this.startTime === null) return A.next(0);
		let { delay: L, repeat: R, repeatType: z, repeatDelay: B, onUpdate: V } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - F / this.speed, this.startTime)), D ? this.currentTime = e : this.holdTime === null ? this.currentTime = Math.round(e - this.startTime) * this.speed : this.currentTime = this.holdTime;
		let H = this.currentTime - L * (this.speed >= 0 ? 1 : -1), U = this.speed >= 0 ? H < 0 : H > F;
		this.currentTime = Math.max(H, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = F);
		let W = this.currentTime, G = A;
		if (R) {
			let e = Math.min(this.currentTime, F) / I, D = Math.floor(e), O = e % 1;
			!O && e >= 1 && (O = 1), O === 1 && D--, D = Math.min(D, R + 1), D % 2 && (z === "reverse" ? (O = 1 - O, B && (O -= B / I)) : z === "mirror" && (G = j)), W = clamp(0, 1, O) * I;
		}
		let K = U ? {
			done: !1,
			value: N[0]
		} : G.next(W);
		M && (K.value = M(K.value));
		let { done: q } = K;
		!U && P !== null && (q = this.speed >= 0 ? this.currentTime >= F : this.currentTime <= 0);
		let J = this.holdTime === null && (this.state === "finished" || this.state === "running" && q);
		return J && k !== void 0 && (K.value = getFinalKeyframe(N, this.options, k)), V && V(K.value), J && this.finish(), K;
	}
	get duration() {
		let { resolved: e } = this;
		return e ? /* @__PURE__ */ millisecondsToSeconds(e.calculatedDuration) : 0;
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ secondsToMilliseconds(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let D = this.playbackSpeed !== e;
		this.playbackSpeed = e, D && (this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime));
	}
	play() {
		if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
			this.pendingPlayState = "running";
			return;
		}
		if (this.isStopped) return;
		let { driver: e = frameloopDriver, onPlay: D, startTime: O } = this.options;
		this.driver ||= e((e) => this.tick(e)), D && D();
		let k = this.driver.now();
		this.holdTime === null ? this.startTime ? this.state === "finished" && (this.startTime = k) : this.startTime = O ?? this.calcStartTime() : this.startTime = k - this.holdTime, this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
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
		let { onComplete: e } = this.options;
		e && e();
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
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
}, acceleratedValues = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]);
function startWaapiAnimation(e, D, O, { delay: k = 0, duration: A = 300, repeat: j = 0, repeatType: M = "loop", ease: N = "easeInOut", times: P } = {}) {
	let F = { [D]: O };
	P && (F.offset = P);
	let I = mapEasingToNativeEasing(N, A);
	return Array.isArray(I) && (F.easing = I), e.animate(F, {
		delay: k,
		duration: A,
		easing: Array.isArray(I) ? "linear" : I,
		fill: "both",
		iterations: j + 1,
		direction: M === "reverse" ? "alternate" : "normal"
	});
}
var supportsWaapi = /* @__PURE__ */ memo$1(() => Object.hasOwnProperty.call(Element.prototype, "animate")), sampleDelta = 10, maxDuration = 2e4;
function requiresPregeneratedKeyframes(e) {
	return isGenerator(e.type) || e.type === "spring" || !isWaapiSupportedEasing(e.ease);
}
function pregenerateKeyframes(e, D) {
	let O = new MainThreadAnimation({
		...D,
		keyframes: e,
		repeat: 0,
		delay: 0,
		isGenerator: !0
	}), k = {
		done: !1,
		value: e[0]
	}, A = [], j = 0;
	for (; !k.done && j < maxDuration;) k = O.sample(j), A.push(k.value), j += sampleDelta;
	return {
		times: void 0,
		keyframes: A,
		duration: j - sampleDelta,
		ease: "linear"
	};
}
var unsupportedEasingFunctions = {
	anticipate,
	backInOut,
	circInOut
};
function isUnsupportedEase(e) {
	return e in unsupportedEasingFunctions;
}
var AcceleratedAnimation = class extends BaseAnimation {
	constructor(e) {
		super(e);
		let { name: D, motionValue: O, element: k, keyframes: A } = this.options;
		this.resolver = new DOMKeyframesResolver(A, (e, D) => this.onKeyframesResolved(e, D), D, O, k), this.resolver.scheduleResolve();
	}
	initPlayback(e, D) {
		let { duration: O = 300, times: k, ease: A, type: j, motionValue: M, name: N, startTime: P } = this.options;
		if (!M.owner || !M.owner.current) return !1;
		if (typeof A == "string" && supportsLinearEasing() && isUnsupportedEase(A) && (A = unsupportedEasingFunctions[A]), requiresPregeneratedKeyframes(this.options)) {
			let { onComplete: D, onUpdate: M, motionValue: N, element: P, ...F } = this.options, I = pregenerateKeyframes(e, F);
			e = I.keyframes, e.length === 1 && (e[1] = e[0]), O = I.duration, k = I.times, A = I.ease, j = "keyframes";
		}
		let F = startWaapiAnimation(M.owner.current, N, e, {
			...this.options,
			duration: O,
			times: k,
			ease: A
		});
		return F.startTime = P ?? this.calcStartTime(), this.pendingTimeline ? (attachTimeline(F, this.pendingTimeline), this.pendingTimeline = void 0) : F.onfinish = () => {
			let { onComplete: O } = this.options;
			M.set(getFinalKeyframe(e, this.options, D)), O && O(), this.cancel(), this.resolveFinishedPromise();
		}, {
			animation: F,
			duration: O,
			times: k,
			type: j,
			ease: A,
			keyframes: e
		};
	}
	get duration() {
		let { resolved: e } = this;
		if (!e) return 0;
		let { duration: D } = e;
		return /* @__PURE__ */ millisecondsToSeconds(D);
	}
	get time() {
		let { resolved: e } = this;
		if (!e) return 0;
		let { animation: D } = e;
		return /* @__PURE__ */ millisecondsToSeconds(D.currentTime || 0);
	}
	set time(e) {
		let { resolved: D } = this;
		if (!D) return;
		let { animation: O } = D;
		O.currentTime = /* @__PURE__ */ secondsToMilliseconds(e);
	}
	get speed() {
		let { resolved: e } = this;
		if (!e) return 1;
		let { animation: D } = e;
		return D.playbackRate;
	}
	set speed(e) {
		let { resolved: D } = this;
		if (!D) return;
		let { animation: O } = D;
		O.playbackRate = e;
	}
	get state() {
		let { resolved: e } = this;
		if (!e) return "idle";
		let { animation: D } = e;
		return D.playState;
	}
	get startTime() {
		let { resolved: e } = this;
		if (!e) return null;
		let { animation: D } = e;
		return D.startTime;
	}
	attachTimeline(e) {
		if (!this._resolved) this.pendingTimeline = e;
		else {
			let { resolved: D } = this;
			if (!D) return noop;
			let { animation: O } = D;
			attachTimeline(O, e);
		}
		return noop;
	}
	play() {
		if (this.isStopped) return;
		let { resolved: e } = this;
		if (!e) return;
		let { animation: D } = e;
		D.playState === "finished" && this.updateFinishedPromise(), D.play();
	}
	pause() {
		let { resolved: e } = this;
		if (!e) return;
		let { animation: D } = e;
		D.pause();
	}
	stop() {
		if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
		this.resolveFinishedPromise(), this.updateFinishedPromise();
		let { resolved: e } = this;
		if (!e) return;
		let { animation: D, keyframes: O, duration: k, type: A, ease: j, times: M } = e;
		if (D.playState === "idle" || D.playState === "finished") return;
		if (this.time) {
			let { motionValue: e, onUpdate: D, onComplete: N, element: P, ...F } = this.options, I = new MainThreadAnimation({
				...F,
				keyframes: O,
				duration: k,
				type: A,
				ease: j,
				times: M,
				isGenerator: !0
			}), L = /* @__PURE__ */ secondsToMilliseconds(this.time);
			e.setWithVelocity(I.sample(L - sampleDelta).value, I.sample(L).value, sampleDelta);
		}
		let { onStop: N } = this.options;
		N && N(), this.cancel();
	}
	complete() {
		let { resolved: e } = this;
		e && e.animation.finish();
	}
	cancel() {
		let { resolved: e } = this;
		e && e.animation.cancel();
	}
	static supports(e) {
		let { motionValue: D, name: O, repeatDelay: k, repeatType: A, damping: j, type: M } = e;
		if (!D || !D.owner || !(D.owner.current instanceof HTMLElement)) return !1;
		let { onUpdate: N, transformTemplate: P } = D.owner.getProps();
		return supportsWaapi() && O && acceleratedValues.has(O) && !N && !P && !k && A !== "mirror" && j !== 0 && M !== "inertia";
	}
}, underDampedSpring = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, criticallyDampedSpring = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
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
}, getDefaultTransition = (e, { keyframes: D }) => D.length > 2 ? keyframesTransition : transformProps.has(e) ? e.startsWith("scale") ? criticallyDampedSpring(D[1]) : underDampedSpring : ease;
function isTransitionDefined({ when: e, delay: D, delayChildren: O, staggerChildren: k, staggerDirection: A, repeat: j, repeatType: M, repeatDelay: N, from: P, elapsed: F, ...I }) {
	return !!Object.keys(I).length;
}
var animateMotionValue = (e, D, O, k = {}, A, j) => (M) => {
	let N = getValueTransition(k, e) || {}, P = N.delay || k.delay || 0, { elapsed: F = 0 } = k;
	F -= /* @__PURE__ */ secondsToMilliseconds(P);
	let I = {
		keyframes: Array.isArray(O) ? O : [null, O],
		ease: "easeOut",
		velocity: D.getVelocity(),
		...N,
		delay: -F,
		onUpdate: (e) => {
			D.set(e), N.onUpdate && N.onUpdate(e);
		},
		onComplete: () => {
			M(), N.onComplete && N.onComplete();
		},
		name: e,
		motionValue: D,
		element: j ? void 0 : A
	};
	isTransitionDefined(N) || (I = {
		...I,
		...getDefaultTransition(e, I)
	}), I.duration &&= /* @__PURE__ */ secondsToMilliseconds(I.duration), I.repeatDelay &&= /* @__PURE__ */ secondsToMilliseconds(I.repeatDelay), I.from !== void 0 && (I.keyframes[0] = I.from);
	let L = !1;
	if ((I.type === !1 || I.duration === 0 && !I.repeatDelay) && (I.duration = 0, I.delay === 0 && (L = !0)), (instantAnimationState.current || MotionGlobalConfig.skipAnimations) && (L = !0, I.duration = 0, I.delay = 0), L && !j && D.get() !== void 0) {
		let e = getFinalKeyframe(I.keyframes, N);
		if (e !== void 0) return frame.update(() => {
			I.onUpdate(e), I.onComplete();
		}), new GroupPlaybackControls([]);
	}
	return !j && AcceleratedAnimation.supports(I) ? new AcceleratedAnimation(I) : new MainThreadAnimation(I);
};
function shouldBlockAnimation({ protectedKeys: e, needsAnimating: D }, O) {
	let k = e.hasOwnProperty(O) && D[O] !== !0;
	return D[O] = !1, k;
}
function animateTarget(e, D, { delay: O = 0, transitionOverride: k, type: A } = {}) {
	let { transition: j = e.getDefaultTransition(), transitionEnd: M, ...N } = D;
	k && (j = k);
	let P = [], F = A && e.animationState && e.animationState.getState()[A];
	for (let D in N) {
		let k = e.getValue(D, e.latestValues[D] ?? null), A = N[D];
		if (A === void 0 || F && shouldBlockAnimation(F, D)) continue;
		let M = {
			delay: O,
			...getValueTransition(j || {}, D)
		}, I = !1;
		if (window.MotionHandoffAnimation) {
			let O = getOptimisedAppearId(e);
			if (O) {
				let e = window.MotionHandoffAnimation(O, D, frame);
				e !== null && (M.startTime = e, I = !0);
			}
		}
		addValueToWillChange(e, D), k.start(animateMotionValue(D, k, A, e.shouldReduceMotion && positionalKeys.has(D) ? { type: !1 } : M, e, I));
		let L = k.animation;
		L && P.push(L);
	}
	return M && Promise.all(P).then(() => {
		frame.update(() => {
			M && setTarget(e, M);
		});
	}), P;
}
function animateVariant(e, D, O = {}) {
	let k = resolveVariant(e, D, O.type === "exit" ? e.presenceContext?.custom : void 0), { transition: A = e.getDefaultTransition() || {} } = k || {};
	O.transitionOverride && (A = O.transitionOverride);
	let j = k ? () => Promise.all(animateTarget(e, k, O)) : () => Promise.resolve(), M = e.variantChildren && e.variantChildren.size ? (k = 0) => {
		let { delayChildren: j = 0, staggerChildren: M, staggerDirection: N } = A;
		return animateChildren(e, D, j + k, M, N, O);
	} : () => Promise.resolve(), { when: N } = A;
	if (N) {
		let [e, D] = N === "beforeChildren" ? [j, M] : [M, j];
		return e().then(() => D());
	} else return Promise.all([j(), M(O.delay)]);
}
function animateChildren(e, D, O = 0, k = 0, A = 1, j) {
	let M = [], N = (e.variantChildren.size - 1) * k, P = A === 1 ? (e = 0) => e * k : (e = 0) => N - e * k;
	return Array.from(e.variantChildren).sort(sortByTreeOrder).forEach((e, k) => {
		e.notify("AnimationStart", D), M.push(animateVariant(e, D, {
			...j,
			delay: O + P(k)
		}).then(() => e.notify("AnimationComplete", D)));
	}), Promise.all(M);
}
function sortByTreeOrder(e, D) {
	return e.sortNodePosition(D);
}
function animateVisualElement(e, D, O = {}) {
	e.notify("AnimationStart", D);
	let k;
	if (Array.isArray(D)) {
		let A = D.map((D) => animateVariant(e, D, O));
		k = Promise.all(A);
	} else if (typeof D == "string") k = animateVariant(e, D, O);
	else {
		let A = typeof D == "function" ? resolveVariant(e, D, O.custom) : D;
		k = Promise.all(animateTarget(e, A, O));
	}
	return k.then(() => {
		e.notify("AnimationComplete", D);
	});
}
var numVariantProps = variantProps.length;
function getVariantContext(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let D = e.parent && getVariantContext(e.parent) || {};
		return e.props.initial !== void 0 && (D.initial = e.props.initial), D;
	}
	let D = {};
	for (let O = 0; O < numVariantProps; O++) {
		let k = variantProps[O], A = e.props[k];
		(isVariantLabel(A) || A === !1) && (D[k] = A);
	}
	return D;
}
var reversePriorityOrder = [...variantPriorityOrder].reverse(), numAnimationTypes = variantPriorityOrder.length;
function animateList(e) {
	return (D) => Promise.all(D.map(({ animation: D, options: O }) => animateVisualElement(e, D, O)));
}
function createAnimationState(e) {
	let D = animateList(e), O = createState(), k = !0, A = (D) => (O, k) => {
		let A = resolveVariant(e, k, D === "exit" ? e.presenceContext?.custom : void 0);
		if (A) {
			let { transition: e, transitionEnd: D, ...k } = A;
			O = {
				...O,
				...k,
				...D
			};
		}
		return O;
	};
	function j(O) {
		D = O(e);
	}
	function M(j) {
		let { props: M } = e, N = getVariantContext(e.parent) || {}, P = [], F = /* @__PURE__ */ new Set(), I = {}, L = Infinity;
		for (let D = 0; D < numAnimationTypes; D++) {
			let R = reversePriorityOrder[D], z = O[R], B = M[R] === void 0 ? N[R] : M[R], V = isVariantLabel(B), H = R === j ? z.isActive : null;
			H === !1 && (L = D);
			let U = B === N[R] && B !== M[R] && V;
			if (U && k && e.manuallyAnimateOnMount && (U = !1), z.protectedKeys = { ...I }, !z.isActive && H === null || !B && !z.prevProp || isAnimationControls(B) || typeof B == "boolean") continue;
			let W = checkVariantsDidChange(z.prevProp, B), G = W || R === j && z.isActive && !U && V || D > L && V, K = !1, q = Array.isArray(B) ? B : [B], J = q.reduce(A(R), {});
			H === !1 && (J = {});
			let { prevResolvedValues: Y = {} } = z, X = {
				...Y,
				...J
			}, Z = (D) => {
				G = !0, F.has(D) && (K = !0, F.delete(D)), z.needsAnimating[D] = !0;
				let O = e.getValue(D);
				O && (O.liveStyle = !1);
			};
			for (let e in X) {
				let D = J[e], O = Y[e];
				if (I.hasOwnProperty(e)) continue;
				let k = !1;
				k = isKeyframesTarget(D) && isKeyframesTarget(O) ? !shallowCompare(D, O) : D !== O, k ? D == null ? F.add(e) : Z(e) : D !== void 0 && F.has(e) ? Z(e) : z.protectedKeys[e] = !0;
			}
			z.prevProp = B, z.prevResolvedValues = J, z.isActive && (I = {
				...I,
				...J
			}), k && e.blockInitialAnimation && (G = !1), G && (!(U && W) || K) && P.push(...q.map((e) => ({
				animation: e,
				options: { type: R }
			})));
		}
		if (F.size) {
			let D = {};
			F.forEach((O) => {
				let k = e.getBaseTarget(O), A = e.getValue(O);
				A && (A.liveStyle = !0), D[O] = k ?? null;
			}), P.push({ animation: D });
		}
		let R = !!P.length;
		return k && (M.initial === !1 || M.initial === M.animate) && !e.manuallyAnimateOnMount && (R = !1), k = !1, R ? D(P) : Promise.resolve();
	}
	function N(D, k) {
		var A;
		if (O[D].isActive === k) return Promise.resolve();
		(A = e.variantChildren) == null || A.forEach((e) => e.animationState?.setActive(D, k)), O[D].isActive = k;
		let j = M(D);
		for (let e in O) O[e].protectedKeys = {};
		return j;
	}
	return {
		animateChanges: M,
		setActive: N,
		setAnimateFunction: j,
		getState: () => O,
		reset: () => {
			O = createState(), k = !0;
		}
	};
}
function checkVariantsDidChange(e, D) {
	return typeof D == "string" ? D !== e : Array.isArray(D) ? !shallowCompare(D, e) : !1;
}
function createTypeState(e = !1) {
	return {
		isActive: e,
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
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
}, AnimationFeature = class extends Feature {
	constructor(e) {
		super(e), e.animationState ||= createAnimationState(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		isAnimationControls(e) && (this.unmountControls = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: e } = this.node.getProps(), { animate: D } = this.node.prevProps || {};
		e !== D && this.updateAnimationControlsSubscription();
	}
	unmount() {
		var e;
		this.node.animationState.reset(), (e = this.unmountControls) == null || e.call(this);
	}
}, id = 0, animations = {
	animation: { Feature: AnimationFeature },
	exit: { Feature: class extends Feature {
		constructor() {
			super(...arguments), this.id = id++;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: D } = this.node.presenceContext, { isPresent: O } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === O) return;
			let k = this.node.animationState.setActive("exit", !e);
			D && !e && k.then(() => D(this.id));
		}
		mount() {
			let { register: e } = this.node.presenceContext || {};
			e && (this.unmount = e(this.id));
		}
		unmount() {}
	} }
};
function addDomEvent(e, D, O, k = { passive: !0 }) {
	return e.addEventListener(D, O, k), () => e.removeEventListener(D, O);
}
function extractEventInfo(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var createAxis = () => ({
	min: 0,
	max: 0
}), createBox = () => ({
	x: createAxis(),
	y: createAxis()
});
function convertBoundingBoxToBox({ top: e, left: D, right: O, bottom: k }) {
	return {
		x: {
			min: D,
			max: O
		},
		y: {
			min: e,
			max: k
		}
	};
}
function transformBoxPoints(e, D) {
	if (!D) return e;
	let O = D({
		x: e.left,
		y: e.top
	}), k = D({
		x: e.right,
		y: e.bottom
	});
	return {
		top: O.y,
		left: O.x,
		bottom: k.y,
		right: k.x
	};
}
function measureViewportBox(e, D) {
	return convertBoundingBoxToBox(transformBoxPoints(e.getBoundingClientRect(), D));
}
function handleHoverEvent(e, D, O) {
	let { props: k } = e;
	e.animationState && k.whileHover && e.animationState.setActive("whileHover", O === "Start");
	let A = k["onHover" + O];
	A && frame.postRender(() => A(D, extractEventInfo(D)));
}
var HoverGesture = class extends Feature {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = hover(e, (e) => (handleHoverEvent(this.node, e, "Start"), (e) => handleHoverEvent(this.node, e, "End"))));
	}
	unmount() {}
}, FocusGesture = class extends Feature {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(":focus-visible");
		} catch {
			e = !0;
		}
		!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
function handlePressEvent(e, D, O) {
	let { props: k } = e;
	e.animationState && k.whileTap && e.animationState.setActive("whileTap", O === "Start");
	let A = k["onTap" + (O === "End" ? "" : O)];
	A && frame.postRender(() => A(D, extractEventInfo(D)));
}
var PressGesture = class extends Feature {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = press(e, (e) => (handlePressEvent(this.node, e, "Start"), (e, { success: D }) => handlePressEvent(this.node, e, D ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
	}
	unmount() {}
}, observerCallbacks = /* @__PURE__ */ new WeakMap(), observers = /* @__PURE__ */ new WeakMap(), fireObserverCallback = (e) => {
	let D = observerCallbacks.get(e.target);
	D && D(e);
}, fireAllObserverCallbacks = (e) => {
	e.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root: e, ...D }) {
	let O = e || document;
	observers.has(O) || observers.set(O, {});
	let k = observers.get(O), A = JSON.stringify(D);
	return k[A] || (k[A] = new IntersectionObserver(fireAllObserverCallbacks, {
		root: e,
		...D
	})), k[A];
}
function observeIntersection(e, D, O) {
	let k = initIntersectionObserver(D);
	return observerCallbacks.set(e, O), k.observe(e), () => {
		observerCallbacks.delete(e), k.unobserve(e);
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
		let { viewport: e = {} } = this.node.getProps(), { root: D, margin: O, amount: k = "some", once: A } = e, j = {
			root: D ? D.current : void 0,
			rootMargin: O,
			threshold: typeof k == "number" ? k : thresholdNames[k]
		};
		return observeIntersection(this.node.current, j, (e) => {
			let { isIntersecting: D } = e;
			if (this.isInView === D || (this.isInView = D, A && !D && this.hasEnteredView)) return;
			D && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", D);
			let { onViewportEnter: O, onViewportLeave: k } = this.node.getProps(), j = D ? O : k;
			j && j(e);
		});
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: e, prevProps: D } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(hasViewportOptionChanged(e, D)) && this.startObserver();
	}
	unmount() {}
};
function hasViewportOptionChanged({ viewport: e = {} }, { viewport: D = {} } = {}) {
	return (O) => e[O] !== D[O];
}
var gestureAnimations = {
	inView: { Feature: InViewFeature },
	tap: { Feature: PressGesture },
	focus: { Feature: FocusGesture },
	hover: { Feature: HoverGesture }
}, prefersReducedMotion = { current: null }, hasReducedMotionListener = { current: !1 };
function initPrefersReducedMotion() {
	if (hasReducedMotionListener.current = !0, isBrowser) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), D = () => prefersReducedMotion.current = e.matches;
		e.addListener(D), D();
	} else prefersReducedMotion.current = !1;
}
var valueTypes = [
	...dimensionValueTypes,
	color,
	complex
], findValueType = (e) => valueTypes.find(testValueType(e)), visualElementStore = /* @__PURE__ */ new WeakMap();
function updateMotionValuesFromProps(e, D, O) {
	for (let k in D) {
		let A = D[k], j = O[k];
		if (isMotionValue(A)) e.addValue(k, A), process.env.NODE_ENV === "development" && warnOnce(A.version === "11.18.2", `Attempting to mix Motion versions ${A.version} with 11.18.2 may not work as expected.`);
		else if (isMotionValue(j)) e.addValue(k, motionValue(A, { owner: e }));
		else if (j !== A) if (e.hasValue(k)) {
			let D = e.getValue(k);
			D.liveStyle === !0 ? D.jump(A) : D.hasAnimated || D.set(A);
		} else {
			let D = e.getStaticValue(k);
			e.addValue(k, motionValue(D === void 0 ? A : D, { owner: e }));
		}
	}
	for (let k in O) D[k] === void 0 && e.removeValue(k);
	return D;
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
	scrapeMotionValuesFromProps(e, D, O) {
		return {};
	}
	constructor({ parent: e, props: D, presenceContext: O, reducedMotionConfig: k, blockInitialAnimation: A, visualState: j }, M = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = KeyframeResolver, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = time.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, frame.render(this.render, !1, !0));
		};
		let { latestValues: N, renderState: P, onUpdate: F } = j;
		this.onUpdate = F, this.latestValues = N, this.baseTarget = { ...N }, this.initialValues = D.initial ? { ...N } : {}, this.renderState = P, this.parent = e, this.props = D, this.presenceContext = O, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = k, this.options = M, this.blockInitialAnimation = !!A, this.isControllingVariants = isControllingVariants(D), this.isVariantNode = isVariantNode(D), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: I, ...L } = this.scrapeMotionValuesFromProps(D, {}, this);
		for (let e in L) {
			let D = L[e];
			N[e] !== void 0 && isMotionValue(D) && D.set(N[e], !1);
		}
	}
	mount(e) {
		this.current = e, visualElementStore.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, D) => this.bindToMotionValue(D, e)), hasReducedMotionListener.current || initPrefersReducedMotion(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : prefersReducedMotion.current, process.env.NODE_ENV !== "production" && warnOnce(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
	}
	unmount() {
		for (let e in visualElementStore.delete(this.current), this.projection && this.projection.unmount(), cancelFrame(this.notifyUpdate), cancelFrame(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[e].clear();
		for (let e in this.features) {
			let D = this.features[e];
			D && (D.unmount(), D.isMounted = !1);
		}
		this.current = null;
	}
	bindToMotionValue(e, D) {
		this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
		let O = transformProps.has(e), k = D.on("change", (D) => {
			this.latestValues[e] = D, this.props.onUpdate && frame.preRender(this.notifyUpdate), O && this.projection && (this.projection.isTransformDirty = !0);
		}), A = D.on("renderRequest", this.scheduleRender), j;
		window.MotionCheckAppearSync && (j = window.MotionCheckAppearSync(this, e, D)), this.valueSubscriptions.set(e, () => {
			k(), A(), j && j(), D.owner && D.stop();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in featureDefinitions) {
			let D = featureDefinitions[e];
			if (!D) continue;
			let { isEnabled: O, Feature: k } = D;
			if (!this.features[e] && k && O(this.props) && (this.features[e] = new k(this)), this.features[e]) {
				let D = this.features[e];
				D.isMounted ? D.update() : (D.mount(), D.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, D) {
		this.latestValues[e] = D;
	}
	update(e, D) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = D;
		for (let D = 0; D < propEventHandlers.length; D++) {
			let O = propEventHandlers[D];
			this.propEventSubscriptions[O] && (this.propEventSubscriptions[O](), delete this.propEventSubscriptions[O]);
			let k = e["on" + O];
			k && (this.propEventSubscriptions[O] = this.on(O, k));
		}
		this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
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
	addVariantChild(e) {
		let D = this.getClosestVariantNode();
		if (D) return D.variantChildren && D.variantChildren.add(e), () => D.variantChildren.delete(e);
	}
	addValue(e, D) {
		let O = this.values.get(e);
		D !== O && (O && this.removeValue(e), this.bindToMotionValue(e, D), this.values.set(e, D), this.latestValues[e] = D.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let D = this.valueSubscriptions.get(e);
		D && (D(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, D) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let O = this.values.get(e);
		return O === void 0 && D !== void 0 && (O = motionValue(D === null ? void 0 : D, { owner: this }), this.addValue(e, O)), O;
	}
	readValue(e, D) {
		let O = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return O != null && (typeof O == "string" && (isNumericalString(O) || isZeroValueString(O)) ? O = parseFloat(O) : !findValueType(O) && complex.test(D) && (O = getAnimatableNone(e, D)), this.setBaseTarget(e, isMotionValue(O) ? O.get() : O)), isMotionValue(O) ? O.get() : O;
	}
	setBaseTarget(e, D) {
		this.baseTarget[e] = D;
	}
	getBaseTarget(e) {
		let { initial: D } = this.props, O;
		if (typeof D == "string" || typeof D == "object") {
			let k = resolveVariantFromProps(this.props, D, this.presenceContext?.custom);
			k && (O = k[e]);
		}
		if (D && O !== void 0) return O;
		let k = this.getBaseTargetFromProps(this.props, e);
		return k !== void 0 && !isMotionValue(k) ? k : this.initialValues[e] !== void 0 && O === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, D) {
		return this.events[e] || (this.events[e] = new SubscriptionManager()), this.events[e].add(D);
	}
	notify(e, ...D) {
		this.events[e] && this.events[e].notify(...D);
	}
}, DOMVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments), this.KeyframeResolver = DOMKeyframesResolver;
	}
	sortInstanceNodePosition(e, D) {
		return e.compareDocumentPosition(D) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, D) {
		return e.style ? e.style[D] : void 0;
	}
	removeValueFromRenderState(e, { vars: D, style: O }) {
		delete D[e], delete O[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		isMotionValue(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
};
function getComputedStyle(e) {
	return window.getComputedStyle(e);
}
var HTMLVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = renderHTML;
	}
	readValueFromInstance(e, D) {
		if (transformProps.has(D)) {
			let e = getDefaultValueType(D);
			return e && e.default || 0;
		} else {
			let O = getComputedStyle(e), k = (isCSSVariableName(D) ? O.getPropertyValue(D) : O[D]) || 0;
			return typeof k == "string" ? k.trim() : k;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: D }) {
		return measureViewportBox(e, D);
	}
	build(e, D, O) {
		buildHTMLStyles(e, D, O.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, D, O) {
		return scrapeMotionValuesFromProps$1(e, D, O);
	}
}, SVGVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = createBox;
	}
	getBaseTargetFromProps(e, D) {
		return e[D];
	}
	readValueFromInstance(e, D) {
		if (transformProps.has(D)) {
			let e = getDefaultValueType(D);
			return e && e.default || 0;
		}
		return D = camelCaseAttributes.has(D) ? D : camelToDash(D), e.getAttribute(D);
	}
	scrapeMotionValuesFromProps(e, D, O) {
		return scrapeMotionValuesFromProps(e, D, O);
	}
	build(e, D, O) {
		buildSVGAttrs(e, D, this.isSVGTag, O.transformTemplate);
	}
	renderInstance(e, D, O, k) {
		renderSVG(e, D, O, k);
	}
	mount(e) {
		this.isSVGTag = isSVGTag(e.tagName), super.mount(e);
	}
}, domAnimation = {
	renderer: (e, D) => isSVGComponent(e) ? new SVGVisualElement(D) : new HTMLVisualElement(D, { allowProjection: e !== Fragment }),
	...animations,
	...gestureAnimations
};
export { invariant as $, MotionValue as A, isMotionValue as B, anticipate as C, reverseEasing as D, backOut as E, buildTransform as F, filterProps as G, SwitchLayoutGroupContext as H, px as I, cancelFrame as J, isValidMotionProp as K, clamp as L, time as M, isDragActive as N, mirrorEasing as O, m as P, progress as Q, makeUseVisualState as R, circOut as S, backInOut as T, optimizedAppearDataAttribute as U, createRendererMotionComponent as V, MotionContext as W, frameData as X, frame as Y, MotionGlobalConfig as Z, pipe as _, animations as a, MotionConfigContext as at, circIn as b, keyframes as c, easeInOut as d, noop as et, easeOut as f, mix as g, findSpring as h, createBox as i, usePresence as it, motionValue as j, cubicBezier as k, interpolate as l, spring as m, VisualElement as n, useIsomorphicLayoutEffect as nt, animateVisualElement as o, PresenceContext as ot, inertia as p, LazyMotion as q, visualElementStore as r, isBrowser as rt, AcceleratedAnimation as s, LayoutGroupContext as st, domAnimation as t, AnimatePresence as tt, easeIn as u, complex as v, backIn as w, circInOut as x, color as y, resolveMotionValue as z };
