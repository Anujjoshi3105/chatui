import { $ as hex, A as motionValue, B as transformProps, C as getAnimatableNone, Ct as clamp, D as camelToDash, Dt as useIsomorphicLayoutEffect, E as optimizedAppearDataAttribute, Et as PresenceContext, F as KeyframeResolver, G as generateLinearEasing, H as readTransformValue, I as flushKeyframeResolvers, J as complex, K as mixNumber, L as isNumOrPxType, M as NativeAnimation, N as isGenerator, O as isMotionValue, Ot as useConstant, P as setStyle, R as positionalValues, St as warning, T as findDimensionValueType, U as WithPromise, V as defaultTransformValue, W as getFinalKeyframe$1, X as hsla, Y as color, _ as variantProps, _t as memo$1, at as time, b as createBox, bt as MotionGlobalConfig, ct as frameData, d as buildSVGAttrs, dt as isBezierDefinition, et as rgba, f as scrapeMotionValuesFromProps$1, ft as velocityPerSecond, g as variantPriorityOrder, gt as noop, h as VisualElement, i as isSVGComponent, it as activeAnimations, j as resolveVariantFromProps, kt as LayoutGroupContext, l as scrapeMotionValuesFromProps, m as buildHTMLStyles, mt as secondsToMilliseconds, nt as isCSSVariableName, ot as cancelFrame, pt as millisecondsToSeconds, q as analyseComplexValue, rt as isCSSVariableToken, s as MotionConfigContext, st as frame, tt as containsCSSVariable, u as isSVGTag, v as isVariantLabel, vt as isZeroValueString, w as getDefaultValueType, xt as invariant, y as isAnimationControls, yt as isNumericalString, z as transformPropOrder } from "./create-proxy-CwJMlGNV.js";
import { t as createLucideIcon } from "./createLucideIcon-C1Qbi7jU.js";
import { E as cn, M as Check, T as Button, c as TooltipProvider, l as TooltipTrigger, o as Tooltip, s as TooltipContent } from "./voice.sdk-8j8W_pOO.js";
import * as React$1 from "react";
import React, { Children, Fragment, isValidElement, useCallback, useContext, useEffect, useId, useInsertionEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import ReactDOM from "react-dom";
var Copy = createLucideIcon("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]);
function isObject(e) {
	return typeof e == "object" && !!e;
}
var combineFunctions = (e, D) => (O) => D(e(O)), pipe = (...e) => e.reduce(combineFunctions), progress = /* @__NO_SIDE_EFFECTS__ */ (e, D, O) => {
	let k = D - e;
	return k === 0 ? 1 : (O - e) / k;
}, calcBezier = (e, D, O) => (((1 - 3 * O + 3 * D) * e + (3 * O - 6 * D)) * e + 3 * D) * e, subdivisionPrecision = 1e-7, subdivisionMaxIterations = 12;
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
var mirrorEasing = (e) => (D) => D <= .5 ? e(2 * D) / 2 : (2 - e(2 * (1 - D))) / 2, reverseEasing = (e) => (D) => 1 - e(1 - D), backOut = /* @__PURE__ */ cubicBezier(.33, 1.53, .69, .99), backIn = /* @__PURE__ */ reverseEasing(backOut), backInOut = /* @__PURE__ */ mirrorEasing(backIn), anticipate = (e) => (e *= 2) < 1 ? .5 * backIn(e) : .5 * (2 - 2 ** (-10 * (e - 1))), circIn = (e) => 1 - Math.sin(Math.acos(e)), circOut = reverseEasing(circIn), circInOut = mirrorEasing(circIn), easeIn = /* @__PURE__ */ cubicBezier(.42, 0, 1, 1), easeOut = /* @__PURE__ */ cubicBezier(0, 0, .58, 1), easeInOut = /* @__PURE__ */ cubicBezier(.42, 0, .58, 1), isEasingArray = (e) => Array.isArray(e) && typeof e[0] != "number", easingLookup = {
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
}, isValidEasing = (e) => typeof e == "string", easingDefinitionToFunction = (e) => {
	if (isBezierDefinition(e)) {
		invariant(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
		let [D, O, k, A] = e;
		return cubicBezier(D, O, k, A);
	} else if (isValidEasing(e)) return invariant(easingLookup[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), easingLookup[e];
	return e;
};
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
	if (warning(!!D, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !D) return !1;
	let O = D.parse(e);
	return D === hsla && (O = hslaToRgba(O)), O;
}
var mixColor = (e, D) => {
	let O = asRGBA(e), k = asRGBA(D);
	if (!O || !k) return mixImmediate(e, D);
	let A = { ...O };
	return (e) => (A.red = mixLinearColor(O.red, k.red, e), A.green = mixLinearColor(O.green, k.green, e), A.blue = mixLinearColor(O.blue, k.blue, e), A.alpha = mixNumber(O.alpha, k.alpha, e), rgba.transform(A));
}, invisibleValues = new Set(["none", "hidden"]);
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
	return k.indexes.var.length === A.indexes.var.length && k.indexes.color.length === A.indexes.color.length && k.indexes.number.length >= A.indexes.number.length ? invisibleValues.has(e) && !A.values.length || invisibleValues.has(D) && !k.values.length ? mixVisibility(e, D) : pipe(mixArray(matchOrder(k, A), A.values), O) : (warning(!0, `Complex values '${e}' and '${D}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), mixImmediate(e, D));
};
function mix(e, D, O) {
	return typeof e == "number" && typeof D == "number" && typeof O == "number" ? mixNumber(e, D, O) : getMixer(e)(e, D);
}
var frameloopDriver = (e) => {
	let D = ({ timestamp: D }) => e(D);
	return {
		start: (e = !0) => frame.update(D, e),
		stop: () => cancelFrame(D),
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
}, maxGeneratorDuration = 2e4;
function calcGeneratorDuration(e) {
	let D = 0, O = e.next(D);
	for (; !O.done && D < 2e4;) D += 50, O = e.next(D);
	return D >= 2e4 ? Infinity : D;
}
function createGeneratorEasing(e, D = 100, O) {
	let k = O({
		...e,
		keyframes: [0, D]
	}), A = Math.min(calcGeneratorDuration(k), maxGeneratorDuration);
	return {
		type: "keyframes",
		ease: (e) => k.next(A * e).value / D,
		duration: millisecondsToSeconds(A)
	};
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
};
function calcAngularFreq(e, D) {
	return e * Math.sqrt(1 - D * D);
}
var rootIterations = 12;
function approximateRoot(e, D, O) {
	let k = O;
	for (let O = 1; O < rootIterations; O++) k -= e(k) / D(k);
	return k;
}
var safeMin = .001;
function findSpring({ duration: e = springDefaults.duration, bounce: D = springDefaults.bounce, velocity: O = springDefaults.velocity, mass: k = springDefaults.mass }) {
	let j, M;
	warning(e <= secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let N = 1 - D;
	N = clamp(springDefaults.minDamping, springDefaults.maxDamping, N), e = clamp(springDefaults.minDuration, springDefaults.maxDuration, millisecondsToSeconds(e)), N < 1 ? (j = (D) => {
		let k = D * N, A = k * e, j = k - O, M = calcAngularFreq(D, N), P = Math.exp(-A);
		return safeMin - j / M * P;
	}, M = (D) => {
		let k = D * N * e, A = k * O + O, M = N ** 2 * D ** 2 * e, P = Math.exp(-k), F = calcAngularFreq(D ** 2, N);
		return (-j(D) + safeMin > 0 ? -1 : 1) * ((A - M) * P) / F;
	}) : (j = (D) => {
		let k = Math.exp(-D * e), A = (D - O) * e + 1;
		return -safeMin + k * A;
	}, M = (D) => Math.exp(-D * e) * ((O - D) * (e * e)));
	let P = 5 / e, F = approximateRoot(j, M, P);
	if (e = secondsToMilliseconds(e), isNaN(F)) return {
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		duration: e
	};
	{
		let D = F ** 2 * k;
		return {
			stiffness: D,
			damping: N * 2 * Math.sqrt(k * D),
			duration: e
		};
	}
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
	if (!isSpringType(e, physicsKeys) && isSpringType(e, durationKeys)) if (D.velocity = 0, e.visualDuration) {
		let O = e.visualDuration, k = 2 * Math.PI / (O * 1.2), j = k * k, M = 2 * clamp(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(j);
		D = {
			...D,
			mass: springDefaults.mass,
			stiffness: j,
			damping: M
		};
	} else {
		let O = findSpring({
			...e,
			velocity: 0
		});
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
	}, { stiffness: P, damping: F, mass: L, duration: R, velocity: z, isResolvedFromDuration: B } = getSpringOptions({
		...O,
		velocity: -millisecondsToSeconds(O.velocity || 0)
	}), V = z || 0, H = F / (2 * Math.sqrt(P * L)), U = M - j, W = millisecondsToSeconds(Math.sqrt(P / L)), G = Math.abs(U) < 5;
	k ||= G ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default, A ||= G ? springDefaults.restDelta.granular : springDefaults.restDelta.default;
	let K, q, J, Y, X, Z;
	if (H < 1) J = calcAngularFreq(W, H), Y = (V + H * W * U) / J, K = (e) => M - Math.exp(-H * W * e) * (Y * Math.sin(J * e) + U * Math.cos(J * e)), X = H * W * Y + U * J, Z = H * W * U - Y * J, q = (e) => Math.exp(-H * W * e) * (X * Math.sin(J * e) + Z * Math.cos(J * e));
	else if (H === 1) {
		K = (e) => M - Math.exp(-W * e) * (U + (V + W * U) * e);
		let e = V + W * U;
		q = (D) => Math.exp(-W * D) * (W * e * D - V);
	} else {
		let e = W * Math.sqrt(H * H - 1);
		K = (D) => {
			let O = Math.exp(-H * W * D), k = Math.min(e * D, 300);
			return M - O * ((V + H * W * U) * Math.sinh(k) + e * U * Math.cosh(k)) / e;
		};
		let D = (V + H * W * U) / e, O = H * W * D - U * e, k = H * W * U - D * e;
		q = (D) => {
			let A = Math.exp(-H * W * D), j = Math.min(e * D, 300);
			return A * (O * Math.sinh(j) + k * Math.cosh(j));
		};
	}
	let Q = {
		calculatedDuration: B && R || null,
		velocity: (e) => secondsToMilliseconds(q(e)),
		next: (e) => {
			if (!B && H < 1) {
				let D = Math.exp(-H * W * e), O = Math.sin(J * e), j = Math.cos(J * e), P = M - D * (Y * O + U * j), F = secondsToMilliseconds(D * (X * O + Z * j));
				return N.done = Math.abs(F) <= k && Math.abs(M - P) <= A, N.value = N.done ? M : P, N;
			}
			let D = K(e);
			if (B) N.done = e >= R;
			else {
				let O = secondsToMilliseconds(q(e));
				N.done = Math.abs(O) <= k && Math.abs(M - D) <= A;
			}
			return N.value = N.done ? M : D, N;
		},
		toString: () => {
			let e = Math.min(calcGeneratorDuration(Q), maxGeneratorDuration), D = generateLinearEasing((D) => Q.next(e * D).value, e, 30);
			return e + "ms " + D;
		},
		toTransition: () => {}
	};
	return Q;
}
spring.applyToOptions = (e) => {
	let D = createGeneratorEasing(e, 100, spring);
	return e.ease = D.ease, e.duration = secondsToMilliseconds(D.duration), e.type = "keyframes", e;
};
var velocitySampleDuration = 5;
function getGeneratorVelocity(e, D, O) {
	let k = Math.max(D - velocitySampleDuration, 0);
	return velocityPerSecond(O - e(k), D - k);
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
			velocity: getGeneratorVelocity(G, e, R.value),
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
function createMixers(e, D, O) {
	let k = [], A = O || MotionGlobalConfig.mix || mix, j = e.length - 1;
	for (let O = 0; O < j; O++) {
		let j = A(e[O], e[O + 1]);
		D && (j = pipe(Array.isArray(D) ? D[O] || noop : D, j)), k.push(j);
	}
	return k;
}
function interpolate(e, D, { clamp: O = !0, ease: k, mixer: j } = {}) {
	let M = e.length;
	if (invariant(M === D.length, "Both input and output ranges must be the same length", "range-length"), M === 1) return () => D[0];
	if (M === 2 && D[0] === D[1]) return () => D[1];
	let N = e[0] === e[1];
	e[0] > e[M - 1] && (e = [...e].reverse(), D = [...D].reverse());
	let P = createMixers(D, k, j), F = P.length, I = (O) => {
		if (N && O < e[0]) return D[0];
		let k = 0;
		if (F > 1) for (; k < e.length - 2 && !(O < e[k + 1]); k++);
		let A = /* @__PURE__ */ progress(e[k], e[k + 1], O);
		return P[k](A);
	};
	return O ? (D) => I(clamp(e[0], e[M - 1], D)) : I;
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
var transitionTypeMap = {
	decay: inertia,
	inertia,
	tween: keyframes,
	keyframes,
	spring
};
function replaceTransitionType(e) {
	typeof e.type == "string" && (e.type = transitionTypeMap[e.type]);
}
var percentToProgress = (e) => e / 100, JSAnimation = class extends WithPromise {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== time.now() && this.tick(time.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, activeAnimations.mainThread++, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		replaceTransitionType(e);
		let { type: D = keyframes, repeat: O = 0, repeatDelay: k = 0, repeatType: A, velocity: j = 0 } = e, { keyframes: M } = e, N = D || keyframes;
		process.env.NODE_ENV !== "production" && N !== keyframes && invariant(M.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${M}`, "spring-two-frames"), N !== keyframes && typeof M[0] != "number" && (this.mixKeyframes = pipe(percentToProgress, mix(M[0], M[1])), M = [0, 100]);
		let P = N({
			...e,
			keyframes: M
		});
		A === "mirror" && (this.mirroredGenerator = N({
			...e,
			keyframes: [...M].reverse(),
			velocity: -j
		})), P.calculatedDuration === null && (P.calculatedDuration = calcGeneratorDuration(P));
		let { calculatedDuration: F } = P;
		this.calculatedDuration = F, this.resolvedDuration = F + k, this.totalDuration = this.resolvedDuration * (O + 1) - k, this.generator = P;
	}
	updateTime(e) {
		let D = Math.round(e - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = D : this.currentTime = this.holdTime;
	}
	tick(e, D = !1) {
		let { generator: O, totalDuration: k, mixKeyframes: j, mirroredGenerator: M, resolvedDuration: N, calculatedDuration: P } = this;
		if (this.startTime === null) return O.next(0);
		let { delay: F = 0, keyframes: I, repeat: L, repeatType: R, repeatDelay: z, type: B, onUpdate: V, finalKeyframe: H } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - k / this.speed, this.startTime)), D ? this.currentTime = e : this.updateTime(e);
		let U = this.currentTime - F * (this.playbackSpeed >= 0 ? 1 : -1), W = this.playbackSpeed >= 0 ? U < 0 : U > k;
		this.currentTime = Math.max(U, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = k);
		let G = this.currentTime, K = O;
		if (L) {
			let e = Math.min(this.currentTime, k) / N, D = Math.floor(e), O = e % 1;
			!O && e >= 1 && (O = 1), O === 1 && D--, D = Math.min(D, L + 1), D % 2 && (R === "reverse" ? (O = 1 - O, z && (O -= z / N)) : R === "mirror" && (K = M)), G = clamp(0, 1, O) * N;
		}
		let q = W ? {
			done: !1,
			value: I[0]
		} : K.next(G);
		j && !W && (q.value = j(q.value));
		let { done: J } = q;
		!W && P !== null && (J = this.playbackSpeed >= 0 ? this.currentTime >= k : this.currentTime <= 0);
		let Y = this.holdTime === null && (this.state === "finished" || this.state === "running" && J);
		return Y && B !== inertia && (q.value = getFinalKeyframe$1(I, this.options, H, this.speed)), V && V(q.value), Y && this.finish(), q;
	}
	then(e, D) {
		return this.finished.then(e, D);
	}
	get duration() {
		return millisecondsToSeconds(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + millisecondsToSeconds(e);
	}
	get time() {
		return millisecondsToSeconds(this.currentTime);
	}
	set time(e) {
		e = secondsToMilliseconds(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		let e = this.currentTime;
		if (e <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(e);
		let D = this.generator.next(e).value;
		return getGeneratorVelocity((e) => this.generator.next(e).value, e, D);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let D = this.playbackSpeed !== e;
		D && this.driver && this.updateTime(time.now()), this.playbackSpeed = e, D && this.driver && (this.time = millisecondsToSeconds(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = frameloopDriver, startTime: D } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let O = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = O) : this.holdTime === null ? this.startTime ||= D ?? O : this.startTime = O - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(time.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, activeAnimations.mainThread--;
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
}, unsupportedEasingFunctions = {
	anticipate,
	backInOut,
	circInOut
};
function isUnsupportedEase(e) {
	return e in unsupportedEasingFunctions;
}
function replaceStringEasing(e) {
	typeof e.ease == "string" && isUnsupportedEase(e.ease) && (e.ease = unsupportedEasingFunctions[e.ease]);
}
var sampleDelta = 10, NativeAnimationExtended = class extends NativeAnimation {
	constructor(e) {
		replaceStringEasing(e), replaceTransitionType(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: D, onUpdate: O, onComplete: k, element: j, ...M } = this.options;
		if (!D) return;
		if (e !== void 0) {
			D.set(e);
			return;
		}
		let N = new JSAnimation({
			...M,
			autoplay: !1
		}), P = Math.max(sampleDelta, time.now() - this.startTime), F = clamp(0, sampleDelta, P - sampleDelta), I = N.sample(P).value, { name: L } = this.options;
		j && L && setStyle(j, L, I), D.setWithVelocity(N.sample(Math.max(0, P - F)).value, I, F), N.stop();
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
	return warning(M === N, `You are trying to animate ${D} from "${A}" to "${j}". "${M ? j : A}" is not an animatable value.`, "value-not-animatable"), !M || !N ? !1 : hasKeyframesChanged(e) || (O === "spring" || isGenerator(O)) && k;
}
function makeAnimationInstant(e) {
	e.duration = 0, e.type = "keyframes";
}
var acceleratedValues = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), supportsWaapi = /* @__PURE__ */ memo$1(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(e) {
	let { motionValue: D, name: O, repeatDelay: k, repeatType: A, damping: j, type: M } = e;
	if (!(D?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: N, transformTemplate: P } = D.owner.getProps();
	return supportsWaapi() && O && acceleratedValues.has(O) && (O !== "transform" || !P) && !N && !k && A !== "mirror" && j !== 0 && M !== "inertia";
}
var MAX_RESOLVE_DELAY = 40, AsyncMotionValueAnimation = class extends WithPromise {
	constructor({ autoplay: e = !0, delay: D = 0, type: O = "keyframes", repeat: k = 0, repeatDelay: A = 0, repeatType: j = "loop", keyframes: M, name: N, motionValue: P, element: I, ...L }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = time.now();
		let R = {
			autoplay: e,
			delay: D,
			type: O,
			repeat: k,
			repeatDelay: A,
			repeatType: j,
			name: N,
			motionValue: P,
			element: I,
			...L
		};
		this.keyframeResolver = new (I?.KeyframeResolver || KeyframeResolver)(M, (e, D, O) => this.onKeyframesResolved(e, D, R, !O), N, P, I), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, D, O, k) {
		this.keyframeResolver = void 0;
		let { name: A, type: j, velocity: M, delay: N, isHandoff: P, onUpdate: F } = O;
		this.resolvedAt = time.now(), canAnimate(e, A, j, M) || ((MotionGlobalConfig.instantAnimations || !N) && F?.(getFinalKeyframe$1(e, O, D)), e[0] = e[e.length - 1], makeAnimationInstant(O), O.repeat = 0);
		let I = {
			startTime: k ? this.resolvedAt && this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: D,
			...O,
			keyframes: e
		}, L = !P && supportsBrowserAnimation(I), R = I.motionValue?.owner?.current, z = L ? new NativeAnimationExtended({
			...I,
			element: R
		}) : new JSAnimation(I);
		z.finished.then(() => {
			this.notifyFinished();
		}).catch(noop), this.pendingTimeline &&= (this.stopTimeline = z.attachTimeline(this.pendingTimeline), void 0), this._animation = z;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, D) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), flushKeyframeResolvers()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
};
function calcChildStagger(e, D, O, k = 0, A = 1) {
	let j = Array.from(e).sort((e, D) => e.sortNodePosition(D)).indexOf(D), M = e.size, N = (M - 1) * k;
	return typeof O == "function" ? O(j, M) : A === 1 ? j * k : N - j * k;
}
var splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(e) {
	let D = splitCSSVariableRegex.exec(e);
	if (!D) return [,];
	let [, O, k, A] = D;
	return [`--${O ?? k}`, A];
}
var maxDepth = 4;
function getVariableValue(e, D, O = 1) {
	invariant(O <= maxDepth, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [k, A] = parseCSSVariable(e);
	if (!k) return;
	let j = window.getComputedStyle(D).getPropertyValue(k);
	if (j) {
		let e = j.trim();
		return isNumericalString(e) ? parseFloat(e) : e;
	}
	return isCSSVariableToken(A) ? getVariableValue(A, D, O + 1) : A;
}
var underDampedSpring = {
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
}, getDefaultTransition = (e, { keyframes: D }) => D.length > 2 ? keyframesTransition : transformProps.has(e) ? e.startsWith("scale") ? criticallyDampedSpring(D[1]) : underDampedSpring : ease, isNotNull = (e) => e !== null;
function getFinalKeyframe(e, { repeat: D, repeatType: O = "loop" }, k) {
	let A = e.filter(isNotNull), j = D && O !== "loop" && D % 2 == 1 ? 0 : A.length - 1;
	return !j || k === void 0 ? A[j] : k;
}
function resolveTransition(e, D) {
	if (e?.inherit && D) {
		let { inherit: O, ...k } = e;
		return {
			...D,
			...k
		};
	}
	return e;
}
function getValueTransition(e, D) {
	let O = e?.[D] ?? e?.default ?? e;
	return O === e ? O : resolveTransition(O, e);
}
function isTransitionDefined({ when: e, delay: D, delayChildren: O, staggerChildren: k, staggerDirection: A, repeat: j, repeatType: M, repeatDelay: N, from: P, elapsed: F, ...I }) {
	return !!Object.keys(I).length;
}
var animateMotionValue = (e, D, O, k = {}, A, j) => (M) => {
	let N = getValueTransition(k, e) || {}, P = N.delay || k.delay || 0, { elapsed: F = 0 } = k;
	F -= secondsToMilliseconds(P);
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
	isTransitionDefined(N) || Object.assign(I, getDefaultTransition(e, I)), I.duration &&= secondsToMilliseconds(I.duration), I.repeatDelay &&= secondsToMilliseconds(I.repeatDelay), I.from !== void 0 && (I.keyframes[0] = I.from);
	let L = !1;
	if ((I.type === !1 || I.duration === 0 && !I.repeatDelay) && (makeAnimationInstant(I), I.delay === 0 && (L = !0)), (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations || A?.shouldSkipAnimations) && (L = !0, makeAnimationInstant(I), I.delay = 0), I.allowFlatten = !N.type && !N.ease, L && !j && D.get() !== void 0) {
		let e = getFinalKeyframe(I.keyframes, N);
		if (e !== void 0) {
			frame.update(() => {
				I.onUpdate(e), I.onComplete();
			});
			return;
		}
	}
	return N.isSync ? new JSAnimation(I) : new AsyncMotionValueAnimation(I);
};
function resolveVariant(e, D, O) {
	let k = e.getProps();
	return resolveVariantFromProps(k, D, O === void 0 ? k.custom : O, e);
}
var positionalKeys = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...transformPropOrder
]), isKeyframesTarget = (e) => Array.isArray(e);
function setMotionValue(e, O, k) {
	e.hasValue(O) ? e.getValue(O).set(k) : e.addValue(O, motionValue(k));
}
function resolveFinalValueInKeyframes(e) {
	return isKeyframesTarget(e) ? e[e.length - 1] || 0 : e;
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
	if (!O && MotionGlobalConfig.WillChange) {
		let O = new MotionGlobalConfig.WillChange("auto");
		e.addValue("willChange", O), O.add(D);
	}
}
function getOptimisedAppearId(e) {
	return e.props[optimizedAppearDataAttribute];
}
function shouldBlockAnimation({ protectedKeys: e, needsAnimating: D }, O) {
	let k = e.hasOwnProperty(O) && D[O] !== !0;
	return D[O] = !1, k;
}
function animateTarget(e, D, { delay: O = 0, transitionOverride: k, type: A } = {}) {
	let { transition: j, transitionEnd: M, ...N } = D, P = e.getDefaultTransition();
	j = j ? resolveTransition(j, P) : P;
	let F = j?.reduceMotion;
	k && (j = k);
	let I = [], L = A && e.animationState && e.animationState.getState()[A];
	for (let D in N) {
		let k = e.getValue(D, e.latestValues[D] ?? null), A = N[D];
		if (A === void 0 || L && shouldBlockAnimation(L, D)) continue;
		let M = {
			delay: O,
			...getValueTransition(j || {}, D)
		}, P = k.get();
		if (P !== void 0 && !k.isAnimating && !Array.isArray(A) && A === P && !M.velocity) continue;
		let R = !1;
		if (window.MotionHandoffAnimation) {
			let O = getOptimisedAppearId(e);
			if (O) {
				let e = window.MotionHandoffAnimation(O, D, frame);
				e !== null && (M.startTime = e, R = !0);
			}
		}
		addValueToWillChange(e, D);
		let z = F ?? e.shouldReduceMotion;
		k.start(animateMotionValue(D, k, A, z && positionalKeys.has(D) ? { type: !1 } : M, e, R));
		let B = k.animation;
		B && I.push(B);
	}
	if (M) {
		let D = () => frame.update(() => {
			M && setTarget(e, M);
		});
		I.length ? Promise.all(I).then(D) : D();
	}
	return I;
}
function animateVariant(e, D, O = {}) {
	let k = resolveVariant(e, D, O.type === "exit" ? e.presenceContext?.custom : void 0), { transition: A = e.getDefaultTransition() || {} } = k || {};
	O.transitionOverride && (A = O.transitionOverride);
	let j = k ? () => Promise.all(animateTarget(e, k, O)) : () => Promise.resolve(), M = e.variantChildren && e.variantChildren.size ? (k = 0) => {
		let { delayChildren: j = 0, staggerChildren: M, staggerDirection: N } = A;
		return animateChildren(e, D, k, j, M, N, O);
	} : () => Promise.resolve(), { when: N } = A;
	if (N) {
		let [e, D] = N === "beforeChildren" ? [j, M] : [M, j];
		return e().then(() => D());
	} else return Promise.all([j(), M(O.delay)]);
}
function animateChildren(e, D, O = 0, k = 0, A = 0, j = 1, M) {
	let N = [];
	for (let P of e.variantChildren) P.notify("AnimationStart", D), N.push(animateVariant(P, D, {
		...M,
		delay: O + (typeof k == "function" ? 0 : k) + calcChildStagger(e.variantChildren, P, k, A, j)
	}).then(() => P.notify("AnimationComplete", D)));
	return Promise.all(N);
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
function isNone(e) {
	return typeof e == "number" ? e === 0 : e === null ? !0 : e === "none" || e === "0" || isZeroValueString(e);
}
var invalidTemplates = new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(e, D, O) {
	let A = 0, j;
	for (; A < e.length && !j;) {
		let D = e[A];
		typeof D == "string" && !invalidTemplates.has(D) && analyseComplexValue(D).values.length && (j = e[A]), A++;
	}
	if (j && O) for (let A of D) e[A] = getAnimatableNone(O, j);
}
var DOMKeyframesResolver = class extends KeyframeResolver {
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
		if (containsCSSVariable(k) !== containsCSSVariable(A) && positionalValues[O]) {
			this.needsMeasurement = !0;
			return;
		}
		if (j !== M) if (isNumOrPxType(j) && isNumOrPxType(M)) for (let D = 0; D < e.length; D++) {
			let O = e[D];
			typeof O == "string" && (e[D] = parseFloat(O));
		}
		else positionalValues[O] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: D } = this, O = [];
		for (let D = 0; D < e.length; D++) (e[D] === null || isNone(e[D])) && O.push(D);
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
};
function resolveElements(e, D, O) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let k = document;
		D && (k = D.current);
		let A = O?.[e] ?? k.querySelectorAll(e);
		return A ? Array.from(A) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
function isHTMLElement(e) {
	return isObject(e) && "offsetHeight" in e;
}
var isDragging = {
	x: !1,
	y: !1
};
function isDragActive() {
	return isDragging.x || isDragging.y;
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
function isValidHover(e) {
	return !(e.pointerType === "touch" || isDragActive());
}
function hover(e, D, O = {}) {
	let [k, A, j] = setupGesture(e, O);
	return k.forEach((e) => {
		let O = !1, k = !1, j, M = () => {
			e.removeEventListener("pointerleave", I);
		}, N = (e) => {
			j &&= (j(e), void 0), M();
		}, P = (e) => {
			O = !1, window.removeEventListener("pointerup", P), window.removeEventListener("pointercancel", P), k && (k = !1, N(e));
		}, F = () => {
			O = !0, window.addEventListener("pointerup", P, A), window.addEventListener("pointercancel", P, A);
		}, I = (e) => {
			if (e.pointerType !== "touch") {
				if (O) {
					k = !0;
					return;
				}
				N(e);
			}
		};
		e.addEventListener("pointerenter", (O) => {
			if (!isValidHover(O)) return;
			k = !1;
			let M = D(e, O);
			typeof M == "function" && (j = M, e.addEventListener("pointerleave", I, A));
		}, A), e.addEventListener("pointerdown", F, A);
	}), j;
}
var isNodeOrChild = (e, D) => D ? e === D ? !0 : isNodeOrChild(e, D.parentElement) : !1, isPrimaryPointer = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, keyboardAccessibleElements = new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function isElementKeyboardAccessible(e) {
	return keyboardAccessibleElements.has(e.tagName) || e.isContentEditable === !0;
}
var textInputElements = new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
function isElementTextInput(e) {
	return textInputElements.has(e.tagName) || e.isContentEditable === !0;
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
var claimedPointerDownEvents = /* @__PURE__ */ new WeakSet();
function press(e, D, O = {}) {
	let [k, A, j] = setupGesture(e, O), M = (e) => {
		let k = e.currentTarget;
		if (!isValidPressEvent(e) || claimedPointerDownEvents.has(e)) return;
		isPressing.add(k), O.stopPropagation && claimedPointerDownEvents.add(e);
		let j = D(k, e), M = (e, D) => {
			window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", P), isPressing.has(k) && isPressing.delete(k), isValidPressEvent(e) && typeof j == "function" && j(e, { success: D });
		}, N = (e) => {
			M(e, k === window || k === document || O.useGlobalTarget || isNodeOrChild(k, e.target));
		}, P = (e) => {
			M(e, !1);
		};
		window.addEventListener("pointerup", N, A), window.addEventListener("pointercancel", P, A);
	};
	return k.forEach((e) => {
		(O.useGlobalTarget ? window : e).addEventListener("pointerdown", M, A), isHTMLElement(e) && (e.addEventListener("focus", (e) => enableKeyboardPress(e, A)), !isElementKeyboardAccessible(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), j;
}
var DOMVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments), this.KeyframeResolver = DOMKeyframesResolver;
	}
	sortInstanceNodePosition(e, D) {
		return e.compareDocumentPosition(D) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, D) {
		let O = e.style;
		return O ? O[D] : void 0;
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
}, Feature = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
};
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
function convertBoxToBoundingBox({ x: e, y: D }) {
	return {
		top: D.min,
		right: e.max,
		bottom: D.max,
		left: e.min
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
function isIdentityScale(e) {
	return e === void 0 || e === 1;
}
function hasScale({ scale: e, scaleX: D, scaleY: O }) {
	return !isIdentityScale(e) || !isIdentityScale(D) || !isIdentityScale(O);
}
function hasTransform(e) {
	return hasScale(e) || has2DTranslate(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function has2DTranslate(e) {
	return is2DTranslate(e.x) || is2DTranslate(e.y);
}
function is2DTranslate(e) {
	return e && e !== "0%";
}
function scalePoint(e, D, O) {
	return O + D * (e - O);
}
function applyPointDelta(e, D, O, k, A) {
	return A !== void 0 && (e = scalePoint(e, A, k)), scalePoint(e, O, k) + D;
}
function applyAxisDelta(e, D = 0, O = 1, k, A) {
	e.min = applyPointDelta(e.min, D, O, k, A), e.max = applyPointDelta(e.max, D, O, k, A);
}
function applyBoxDelta(e, { x: D, y: O }) {
	applyAxisDelta(e.x, D.translate, D.scale, D.originPoint), applyAxisDelta(e.y, O.translate, O.scale, O.originPoint);
}
var TREE_SCALE_SNAP_MIN = .999999999999, TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(e, D, O, k = !1) {
	let A = O.length;
	if (!A) return;
	D.x = D.y = 1;
	let j, M;
	for (let N = 0; N < A; N++) {
		j = O[N], M = j.projectionDelta;
		let { visualElement: A } = j.options;
		A && A.props.style && A.props.style.display === "contents" || (k && j.options.layoutScroll && j.scroll && j !== j.root && transformBox(e, {
			x: -j.scroll.offset.x,
			y: -j.scroll.offset.y
		}), M && (D.x *= M.x.scale, D.y *= M.y.scale, applyBoxDelta(e, M)), k && hasTransform(j.latestValues) && transformBox(e, j.latestValues, j.layout?.layoutBox));
	}
	D.x < TREE_SCALE_SNAP_MAX && D.x > TREE_SCALE_SNAP_MIN && (D.x = 1), D.y < TREE_SCALE_SNAP_MAX && D.y > TREE_SCALE_SNAP_MIN && (D.y = 1);
}
function translateAxis(e, D) {
	e.min += D, e.max += D;
}
function transformAxis(e, D, O, k, A = .5) {
	applyAxisDelta(e, D, O, mixNumber(e.min, e.max, A), k);
}
function resolveAxisTranslate(e, D) {
	return typeof e == "string" ? parseFloat(e) / 100 * (D.max - D.min) : e;
}
function transformBox(e, D, O) {
	let k = O ?? e;
	transformAxis(e.x, resolveAxisTranslate(D.x, k.x), D.scaleX, D.scale, D.originX), transformAxis(e.y, resolveAxisTranslate(D.y, k.y), D.scaleY, D.scale, D.originY);
}
function measureViewportBox(e, D) {
	return convertBoundingBoxToBox(transformBoxPoints(e.getBoundingClientRect(), D));
}
function measurePageBox(e, D, O) {
	let k = measureViewportBox(e, O), { scroll: A } = D;
	return A && (translateAxis(k.x, A.offset.x), translateAxis(k.y, A.offset.y)), k;
}
function renderHTML(e, { style: D, vars: O }, k, A) {
	let j = e.style, M;
	for (M in D) j[M] = D[M];
	for (M in A?.applyProjectionStyles(j, k), O) j.setProperty(M, O[M]);
}
function getComputedStyle$1(e) {
	return window.getComputedStyle(e);
}
var HTMLVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = renderHTML;
	}
	readValueFromInstance(e, D) {
		if (transformProps.has(D)) return this.projection?.isProjecting ? defaultTransformValue(D) : readTransformValue(e, D);
		{
			let O = getComputedStyle$1(e), k = (isCSSVariableName(D) ? O.getPropertyValue(D) : O[D]) || 0;
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
}, camelCaseAttributes = new Set([
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
var SVGVisualElement = class extends DOMVisualElement {
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
		buildSVGAttrs(e, D, this.isSVGTag, O.transformTemplate, O.style);
	}
	renderInstance(e, D, O, k) {
		renderSVG(e, D, O, k);
	}
	mount(e) {
		this.isSVGTag = isSVGTag(e.tagName), super.mount(e);
	}
}, numVariantProps = variantProps.length;
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
function shallowCompare(e, D) {
	if (!Array.isArray(D)) return !1;
	let O = D.length;
	if (O !== e.length) return !1;
	for (let k = 0; k < O; k++) if (D[k] !== e[k]) return !1;
	return !0;
}
var reversePriorityOrder = [...variantPriorityOrder].reverse(), numAnimationTypes = variantPriorityOrder.length;
function createAnimateFunction(e) {
	return (D) => Promise.all(D.map(({ animation: D, options: O }) => animateVisualElement(e, D, O)));
}
function createAnimationState(e) {
	let D = createAnimateFunction(e), O = createState(), k = !0, A = !1, j = (D) => (O, k) => {
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
	function M(O) {
		D = O(e);
	}
	function N(M) {
		let { props: N } = e, P = getVariantContext(e.parent) || {}, F = [], I = /* @__PURE__ */ new Set(), L = {}, R = Infinity;
		for (let D = 0; D < numAnimationTypes; D++) {
			let z = reversePriorityOrder[D], B = O[z], V = N[z] === void 0 ? P[z] : N[z], H = isVariantLabel(V), U = z === M ? B.isActive : null;
			U === !1 && (R = D);
			let W = V === P[z] && V !== N[z] && H;
			if (W && (k || A) && e.manuallyAnimateOnMount && (W = !1), B.protectedKeys = { ...L }, !B.isActive && U === null || !V && !B.prevProp || isAnimationControls(V) || typeof V == "boolean") continue;
			if (z === "exit" && B.isActive && U !== !0) {
				B.prevResolvedValues && (L = {
					...L,
					...B.prevResolvedValues
				});
				continue;
			}
			let G = checkVariantsDidChange(B.prevProp, V), K = G || z === M && B.isActive && !W && H || D > R && H, q = !1, J = Array.isArray(V) ? V : [V], Y = J.reduce(j(z), {});
			U === !1 && (Y = {});
			let { prevResolvedValues: X = {} } = B, Z = {
				...X,
				...Y
			}, Q = (D) => {
				K = !0, I.has(D) && (q = !0, I.delete(D)), B.needsAnimating[D] = !0;
				let O = e.getValue(D);
				O && (O.liveStyle = !1);
			};
			for (let e in Z) {
				let D = Y[e], O = X[e];
				if (L.hasOwnProperty(e)) continue;
				let k = !1;
				k = isKeyframesTarget(D) && isKeyframesTarget(O) ? !shallowCompare(D, O) : D !== O, k ? D == null ? I.add(e) : Q(e) : D !== void 0 && I.has(e) ? Q(e) : B.protectedKeys[e] = !0;
			}
			B.prevProp = V, B.prevResolvedValues = Y, B.isActive && (L = {
				...L,
				...Y
			}), (k || A) && e.blockInitialAnimation && (K = !1);
			let $ = W && G;
			K && (!$ || q) && F.push(...J.map((D) => {
				let O = { type: z };
				if (typeof D == "string" && (k || A) && !$ && e.manuallyAnimateOnMount && e.parent) {
					let { parent: k } = e, A = resolveVariant(k, D);
					if (k.enteringChildren && A) {
						let { delayChildren: D } = A.transition || {};
						O.delay = calcChildStagger(k.enteringChildren, e, D);
					}
				}
				return {
					animation: D,
					options: O
				};
			}));
		}
		if (I.size) {
			let D = {};
			if (typeof N.initial != "boolean") {
				let O = resolveVariant(e, Array.isArray(N.initial) ? N.initial[0] : N.initial);
				O && O.transition && (D.transition = O.transition);
			}
			I.forEach((O) => {
				let k = e.getBaseTarget(O), A = e.getValue(O);
				A && (A.liveStyle = !0), D[O] = k ?? null;
			}), F.push({ animation: D });
		}
		let z = !!F.length;
		return k && (N.initial === !1 || N.initial === N.animate) && !e.manuallyAnimateOnMount && (z = !1), k = !1, A = !1, z ? D(F) : Promise.resolve();
	}
	function P(D, k) {
		if (O[D].isActive === k) return Promise.resolve();
		e.variantChildren?.forEach((e) => e.animationState?.setActive(D, k)), O[D].isActive = k;
		let A = N(D);
		for (let e in O) O[e].protectedKeys = {};
		return A;
	}
	return {
		animateChanges: N,
		setActive: P,
		setAnimateFunction: M,
		getState: () => O,
		reset: () => {
			O = createState(), A = !0;
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
function addDomEvent(e, D, O, k = { passive: !0 }) {
	return e.addEventListener(D, O, k), () => e.removeEventListener(D, O);
}
function setRef(e, D) {
	if (typeof e == "function") return e(D);
	e != null && (e.current = D);
}
function composeRefs(...e) {
	return (D) => {
		let O = !1, k = e.map((e) => {
			let k = setRef(e, D);
			return !O && typeof k == "function" && (O = !0), k;
		});
		if (O) return () => {
			for (let D = 0; D < k.length; D++) {
				let O = k[D];
				typeof O == "function" ? O() : setRef(e[D], null);
			}
		};
	};
}
function useComposedRefs(...e) {
	return React$1.useCallback(composeRefs(...e), e);
}
var PopChildMeasure = class extends React$1.Component {
	getSnapshotBeforeUpdate(e) {
		let D = this.props.childRef.current;
		if (isHTMLElement(D) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
			let e = D.offsetParent, O = isHTMLElement(e) && e.offsetWidth || 0, k = isHTMLElement(e) && e.offsetHeight || 0, A = getComputedStyle(D), j = this.props.sizeRef.current;
			j.height = parseFloat(A.height), j.width = parseFloat(A.width), j.top = D.offsetTop, j.left = D.offsetLeft, j.right = O - j.width - j.left, j.bottom = k - j.height - j.top;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function PopChild({ children: e, isPresent: D, anchorX: O, anchorY: k, root: A, pop: j }) {
	let M = useId(), N = useRef(null), P = useRef({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}), { nonce: F } = useContext(MotionConfigContext), I = useComposedRefs(N, e.props?.ref ?? e?.ref);
	return useInsertionEffect(() => {
		let { width: e, height: I, top: L, left: R, right: z, bottom: B } = P.current;
		if (D || j === !1 || !N.current || !e || !I) return;
		let V = O === "left" ? `left: ${R}` : `right: ${z}`, H = k === "bottom" ? `bottom: ${B}` : `top: ${L}`;
		N.current.dataset.motionPopId = M;
		let U = document.createElement("style");
		F && (U.nonce = F);
		let W = A ?? document.head;
		return W.appendChild(U), U.sheet && U.sheet.insertRule(`
          [data-motion-pop-id="${M}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${I}px !important;
            ${V}px !important;
            ${H}px !important;
          }
        `), () => {
			W.contains(U) && W.removeChild(U);
		};
	}, [D]), jsx(PopChildMeasure, {
		isPresent: D,
		childRef: N,
		sizeRef: P,
		pop: j,
		children: j === !1 ? e : React$1.cloneElement(e, { ref: I })
	});
}
var PresenceChild = ({ children: e, initial: D, isPresent: O, onExitComplete: k, custom: A, presenceAffectsLayout: j, mode: M, anchorX: N, anchorY: F, root: I }) => {
	let L = useConstant(newChildrenMap), R = useId(), z = !0, B = useMemo(() => (z = !1, {
		id: R,
		initial: D,
		isPresent: O,
		custom: A,
		onExitComplete: (e) => {
			L.set(e, !0);
			for (let e of L.values()) if (!e) return;
			k && k();
		},
		register: (e) => (L.set(e, !1), () => L.delete(e))
	}), [
		O,
		L,
		k
	]);
	return j && z && (B = { ...B }), useMemo(() => {
		L.forEach((e, D) => L.set(D, !1));
	}, [O]), React$1.useEffect(() => {
		!O && !L.size && k && k();
	}, [O]), e = jsx(PopChild, {
		pop: M === "popLayout",
		isPresent: O,
		anchorX: N,
		anchorY: F,
		root: I,
		children: e
	}), jsx(PresenceContext.Provider, {
		value: B,
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
		if (e) return A(j);
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
var AnimatePresence = ({ children: e, custom: D, initial: O = !0, onExitComplete: k, presenceAffectsLayout: A = !0, mode: j = "sync", propagate: N = !1, anchorX: P = "left", anchorY: F = "top", root: I }) => {
	let [L, R] = usePresence(N), z = useMemo(() => onlyElements(e), [e]), B = N && !L ? [] : z.map(getChildKey), V = useRef(!0), H = useRef(z), U = useConstant(() => /* @__PURE__ */ new Map()), W = useRef(/* @__PURE__ */ new Set()), [K, q] = useState(z), [J, Y] = useState(z);
	useIsomorphicLayoutEffect(() => {
		V.current = !1, H.current = z;
		for (let e = 0; e < J.length; e++) {
			let D = getChildKey(J[e]);
			B.includes(D) ? (U.delete(D), W.current.delete(D)) : U.get(D) !== !0 && U.set(D, !1);
		}
	}, [
		J,
		B.length,
		B.join("-")
	]);
	let X = [];
	if (z !== K) {
		let e = [...z];
		for (let D = 0; D < J.length; D++) {
			let O = J[D], k = getChildKey(O);
			B.includes(k) || (e.splice(D, 0, O), X.push(O));
		}
		return j === "wait" && X.length && (e = X), Y(onlyElements(e)), q(z), null;
	}
	process.env.NODE_ENV !== "production" && j === "wait" && J.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its mode is set to \"wait\". This will lead to odd visual behaviour.");
	let { forceRender: Z } = useContext(LayoutGroupContext);
	return jsx(Fragment$1, { children: J.map((e) => {
		let M = getChildKey(e), G = N && !L ? !1 : z === J || B.includes(M);
		return jsx(PresenceChild, {
			isPresent: G,
			initial: !V.current || O ? void 0 : !1,
			custom: D,
			presenceAffectsLayout: A,
			mode: j,
			root: I,
			onExitComplete: G ? void 0 : () => {
				if (W.current.has(M)) return;
				if (W.current.add(M), U.has(M)) U.set(M, !0);
				else return;
				let e = !0;
				U.forEach((D) => {
					D || (e = !1);
				}), e && (Z?.(), Y(H.current), N && R?.(), k && k());
			},
			anchorX: P,
			anchorY: F,
			children: e
		}, M);
	}) });
}, createDomVisualElement = (e, D) => D.isSVG ?? isSVGComponent(e) ? new SVGVisualElement(D) : new HTMLVisualElement(D, { allowProjection: e !== Fragment }), AnimationFeature = class extends Feature {
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
		this.node.animationState.reset(), this.unmountControls?.();
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
			D && !e && k.then(() => {
				D(this.id);
			});
		}
		mount() {
			let { register: e, onExitComplete: D } = this.node.presenceContext || {};
			D && D(this.id), e && (this.unmount = e(this.id));
		}
		unmount() {}
	} }
};
function extractEventInfo(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var addPointerInfo = (e) => (D) => isPrimaryPointer(D) && e(D, extractEventInfo(D));
function handleHoverEvent(e, D, O) {
	let { props: k } = e;
	e.animationState && k.whileHover && e.animationState.setActive("whileHover", O === "Start");
	let A = k["onHover" + O];
	A && frame.postRender(() => A(D, extractEventInfo(D)));
}
var HoverGesture = class extends Feature {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = hover(e, (e, D) => (handleHoverEvent(this.node, D, "Start"), (e) => handleHoverEvent(this.node, e, "End"))));
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
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && k.whileTap && e.animationState.setActive("whileTap", O === "Start");
	let A = k["onTap" + (O === "End" ? "" : O)];
	A && frame.postRender(() => A(D, extractEventInfo(D)));
}
var PressGesture = class extends Feature {
	mount() {
		let { current: e } = this.node;
		if (!e) return;
		let { globalTapTarget: D, propagate: O } = this.node.props;
		this.unmount = press(e, (e, D) => (handlePressEvent(this.node, D, "Start"), (e, { success: D }) => handlePressEvent(this.node, e, D ? "End" : "Cancel")), {
			useGlobalTarget: D,
			stopPropagation: O?.tap === !1
		});
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
}, createStoreImpl = (e) => {
	let D, O = /* @__PURE__ */ new Set(), k = (e, k) => {
		let A = typeof e == "function" ? e(D) : e;
		if (!Object.is(A, D)) {
			let e = D;
			D = k ?? (typeof A != "object" || !A) ? A : Object.assign({}, D, A), O.forEach((O) => O(D, e));
		}
	}, A = () => D, j = {
		setState: k,
		getState: A,
		getInitialState: () => M,
		subscribe: (e) => (O.add(e), () => O.delete(e))
	}, M = D = e(k, A, j);
	return j;
}, createStore = ((e) => e ? createStoreImpl(e) : createStoreImpl), identity = (e) => e;
function useStore(e, D = identity) {
	let O = React.useSyncExternalStore(e.subscribe, React.useCallback(() => D(e.getState()), [e, D]), React.useCallback(() => D(e.getInitialState()), [e, D]));
	return React.useDebugValue(O), O;
}
var createImpl = (e) => {
	let D = createStore(e), O = (e) => useStore(D, e);
	return Object.assign(O, D), O;
}, create = ((e) => e ? createImpl(e) : createImpl);
const useSpeechStore = create((e) => ({
	speakingMessageId: null,
	currentCharIndex: 0,
	charOffset: 0,
	isPaused: !1,
	activeText: "",
	setSpeaking: (D, O = "") => e({
		speakingMessageId: D,
		activeText: O,
		currentCharIndex: 0,
		charOffset: 0,
		isPaused: !1
	}),
	setCurrentCharIndex: (D) => e({ currentCharIndex: D }),
	setCharOffset: (D) => e({
		charOffset: D,
		currentCharIndex: 0
	}),
	setIsPaused: (D) => e({ isPaused: D }),
	stop: () => e({
		speakingMessageId: null,
		currentCharIndex: 0,
		charOffset: 0,
		isPaused: !1,
		activeText: ""
	})
}));
function __insertCSS(e) {
	if (!e || typeof document > "u") return;
	let D = document.head || document.getElementsByTagName("head")[0], O = document.createElement("style");
	O.type = "text/css", D.appendChild(O), O.styleSheet ? O.styleSheet.cssText = e : O.appendChild(document.createTextNode(e));
}
Array(12).fill(0);
var toastsCounter = 1, ToastState = new class {
	constructor() {
		this.subscribe = (e) => (this.subscribers.push(e), () => {
			let D = this.subscribers.indexOf(e);
			this.subscribers.splice(D, 1);
		}), this.publish = (e) => {
			this.subscribers.forEach((D) => D(e));
		}, this.addToast = (e) => {
			this.publish(e), this.toasts = [...this.toasts, e];
		}, this.create = (e) => {
			let { message: D, ...O } = e, k = typeof e?.id == "number" || e.id?.length > 0 ? e.id : toastsCounter++, A = this.toasts.find((e) => e.id === k), j = e.dismissible === void 0 ? !0 : e.dismissible;
			return this.dismissedToasts.has(k) && this.dismissedToasts.delete(k), A ? this.toasts = this.toasts.map((O) => O.id === k ? (this.publish({
				...O,
				...e,
				id: k,
				title: D
			}), {
				...O,
				...e,
				id: k,
				dismissible: j,
				title: D
			}) : O) : this.addToast({
				title: D,
				...O,
				dismissible: j,
				id: k
			}), k;
		}, this.dismiss = (e) => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach((D) => D({
			id: e,
			dismiss: !0
		})))) : this.toasts.forEach((e) => {
			this.subscribers.forEach((D) => D({
				id: e.id,
				dismiss: !0
			}));
		}), e), this.message = (e, D) => this.create({
			...D,
			message: e
		}), this.error = (e, D) => this.create({
			...D,
			message: e,
			type: "error"
		}), this.success = (e, D) => this.create({
			...D,
			type: "success",
			message: e
		}), this.info = (e, D) => this.create({
			...D,
			type: "info",
			message: e
		}), this.warning = (e, D) => this.create({
			...D,
			type: "warning",
			message: e
		}), this.loading = (e, D) => this.create({
			...D,
			type: "loading",
			message: e
		}), this.promise = (e, D) => {
			if (!D) return;
			let O;
			D.loading !== void 0 && (O = this.create({
				...D,
				promise: e,
				type: "loading",
				message: D.loading,
				description: typeof D.description == "function" ? void 0 : D.description
			}));
			let k = Promise.resolve(e instanceof Function ? e() : e), A = O !== void 0, j, M = k.then(async (e) => {
				if (j = ["resolve", e], React.isValidElement(e)) A = !1, this.create({
					id: O,
					type: "default",
					message: e
				});
				else if (isHttpResponse(e) && !e.ok) {
					A = !1;
					let k = typeof D.error == "function" ? await D.error(`HTTP error! status: ${e.status}`) : D.error, j = typeof D.description == "function" ? await D.description(`HTTP error! status: ${e.status}`) : D.description, M = typeof k == "object" && !React.isValidElement(k) ? k : { message: k };
					this.create({
						id: O,
						type: "error",
						description: j,
						...M
					});
				} else if (e instanceof Error) {
					A = !1;
					let k = typeof D.error == "function" ? await D.error(e) : D.error, j = typeof D.description == "function" ? await D.description(e) : D.description, M = typeof k == "object" && !React.isValidElement(k) ? k : { message: k };
					this.create({
						id: O,
						type: "error",
						description: j,
						...M
					});
				} else if (D.success !== void 0) {
					A = !1;
					let k = typeof D.success == "function" ? await D.success(e) : D.success, j = typeof D.description == "function" ? await D.description(e) : D.description, M = typeof k == "object" && !React.isValidElement(k) ? k : { message: k };
					this.create({
						id: O,
						type: "success",
						description: j,
						...M
					});
				}
			}).catch(async (e) => {
				if (j = ["reject", e], D.error !== void 0) {
					A = !1;
					let k = typeof D.error == "function" ? await D.error(e) : D.error, j = typeof D.description == "function" ? await D.description(e) : D.description, M = typeof k == "object" && !React.isValidElement(k) ? k : { message: k };
					this.create({
						id: O,
						type: "error",
						description: j,
						...M
					});
				}
			}).finally(() => {
				A && (this.dismiss(O), O = void 0), D.finally == null || D.finally.call(D);
			}), N = () => new Promise((e, D) => M.then(() => j[0] === "reject" ? D(j[1]) : e(j[1])).catch(D));
			return typeof O != "string" && typeof O != "number" ? { unwrap: N } : Object.assign(O, { unwrap: N });
		}, this.custom = (e, D) => {
			let O = D?.id || toastsCounter++;
			return this.create({
				jsx: e(O),
				id: O,
				...D
			}), O;
		}, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
	}
}(), toastFunction = (e, D) => {
	let O = D?.id || toastsCounter++;
	return ToastState.addToast({
		title: e,
		...D,
		id: O
	}), O;
}, isHttpResponse = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", basicToast = toastFunction, toast = Object.assign(basicToast, {
	success: ToastState.success,
	info: ToastState.info,
	warning: ToastState.warning,
	error: ToastState.error,
	custom: ToastState.custom,
	message: ToastState.message,
	promise: ToastState.promise,
	dismiss: ToastState.dismiss,
	loading: ToastState.loading
}, {
	getHistory: () => ToastState.toasts,
	getToasts: () => ToastState.getActiveToasts()
});
__insertCSS("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function useCopyToClipboard({ text: e, copyMessage: D = "Copied to clipboard!" }) {
	let [O, k] = useState(!1), A = useRef(null);
	return {
		isCopied: O,
		handleCopy: useCallback(() => {
			navigator.clipboard.writeText(e).then(() => {
				toast.success(D), k(!0), A.current &&= (clearTimeout(A.current), null), A.current = setTimeout(() => {
					k(!1);
				}, 2e3);
			}).catch(() => {
				toast.error("Failed to copy to clipboard.");
			});
		}, [e, D])
	};
}
function CopyButton({ content: e, copyMessage: D }) {
	let { isCopied: O, handleCopy: k } = useCopyToClipboard({
		text: e,
		copyMessage: D
	});
	return e ? /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsxs(Button, {
			variant: "ghost",
			size: "icon",
			className: "relative h-6 w-6",
			"aria-label": "Copy to clipboard",
			onClick: k,
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ jsx(Check, { className: cn("h-4 w-4 transition-transform ease-in-out", O ? "scale-100" : "scale-0") })
			}), /* @__PURE__ */ jsx(Copy, { className: cn("h-4 w-4 transition-transform ease-in-out", O ? "scale-0" : "scale-100") })]
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: "Copy to clipboard" })] }) }) : null;
}
export { animateMotionValue as A, Feature as C, resolveElements as D, isDragging as E, progress as F, pipe as I, isObject as L, JSAnimation as M, interpolate as N, getOptimisedAppearId as O, circOut as P, convertBoxToBoundingBox as S, isPrimaryPointer as T, translateAxis as _, addPointerInfo as a, hasTransform as b, createDomVisualElement as c, addDomEvent as d, measurePageBox as f, transformBox as g, scalePoint as h, gestureAnimations as i, getValueTransition as j, addValueToWillChange as k, AnimatePresence as l, applyTreeDeltas as m, useSpeechStore as n, extractEventInfo as o, applyBoxDelta as p, create as r, animations as s, CopyButton as t, usePresence as u, has2DTranslate as v, isElementTextInput as w, convertBoundingBoxToBox as x, hasScale as y };
