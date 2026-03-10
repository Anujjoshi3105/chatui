import { Fragment, createContext, createElement, forwardRef, useCallback, useContext, useEffect, useInsertionEffect, useLayoutEffect, useMemo, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __esmMin = (r, M) => () => (r && (M = r(r = 0)), M), __commonJSMin = (r, M) => () => (M || r((M = { exports: {} }).exports, M), M.exports), __export = (r) => {
	let M = {};
	for (var N in r) __defProp(M, N, {
		get: r[N],
		enumerable: !0
	});
	return M;
}, __copyProps = (r, M, N, P) => {
	if (M && typeof M == "object" || typeof M == "function") for (var F = __getOwnPropNames(M), I = 0, L = F.length, R; I < L; I++) R = F[I], !__hasOwnProp.call(r, R) && R !== N && __defProp(r, R, {
		get: ((r) => M[r]).bind(null, R),
		enumerable: !(P = __getOwnPropDesc(M, R)) || P.enumerable
	});
	return r;
}, __toESM = (r, M, N) => (N = r == null ? {} : __create(__getProtoOf(r)), __copyProps(M || !r || !r.__esModule ? __defProp(N, "default", {
	value: r,
	enumerable: !0
}) : N, r)), __toCommonJS = (r) => __copyProps(__defProp({}, "__esModule", { value: !0 }), r), LayoutGroupContext = createContext({});
function useConstant(r) {
	let M = useRef(null);
	return M.current === null && (M.current = r()), M.current;
}
var useIsomorphicLayoutEffect = typeof window < "u" ? useLayoutEffect : useEffect, PresenceContext = /* @__PURE__ */ createContext(null);
function addUniqueItem(r, M) {
	r.indexOf(M) === -1 && r.push(M);
}
function removeItem(r, M) {
	let N = r.indexOf(M);
	N > -1 && r.splice(N, 1);
}
var clamp = (r, M, N) => N > M ? M : N < r ? r : N;
function formatErrorMessage(r, M) {
	return M ? `${r}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${M}` : r;
}
var warning = () => {}, invariant = () => {};
typeof process < "u" && process.env.NODE_ENV !== "production" && (warning = (r, M, N) => {
	!r && typeof console < "u" && console.warn(formatErrorMessage(M, N));
}, invariant = (r, M, N) => {
	if (!r) throw Error(formatErrorMessage(M, N));
});
var MotionGlobalConfig = {}, isNumericalString = (r) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(r), isZeroValueString = (r) => /^0[^.\s]+$/u.test(r);
/* @__NO_SIDE_EFFECTS__ */
function memo$1(r) {
	let M;
	return () => (M === void 0 && (M = r()), M);
}
var noop = /* @__NO_SIDE_EFFECTS__ */ (r) => r, SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(r) {
		return addUniqueItem(this.subscriptions, r), () => removeItem(this.subscriptions, r);
	}
	notify(r, M, N) {
		let P = this.subscriptions.length;
		if (P) if (P === 1) this.subscriptions[0](r, M, N);
		else for (let F = 0; F < P; F++) {
			let P = this.subscriptions[F];
			P && P(r, M, N);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (r) => r * 1e3, millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (r) => r / 1e3;
function velocityPerSecond(r, M) {
	return M ? r * (1e3 / M) : 0;
}
var warned = /* @__PURE__ */ new Set();
function warnOnce(r, M, N) {
	r || warned.has(M) || (console.warn(formatErrorMessage(M, N)), warned.add(M));
}
var isBezierDefinition = (r) => Array.isArray(r) && typeof r[0] == "number", stepsOrder = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
], statsBuffer = {
	value: null,
	addProjectionMetrics: null
};
function createRenderStep(r, M) {
	let N = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set(), F = !1, I = !1, L = /* @__PURE__ */ new WeakSet(), R = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, z = 0;
	function B(M) {
		L.has(M) && (V.schedule(M), r()), z++, M(R);
	}
	let V = {
		schedule: (r, M = !1, I = !1) => {
			let R = I && F ? N : P;
			return M && L.add(r), R.has(r) || R.add(r), r;
		},
		cancel: (r) => {
			P.delete(r), L.delete(r);
		},
		process: (r) => {
			if (R = r, F) {
				I = !0;
				return;
			}
			F = !0, [N, P] = [P, N], N.forEach(B), M && statsBuffer.value && statsBuffer.value.frameloop[M].push(z), z = 0, N.clear(), F = !1, I && (I = !1, V.process(r));
		}
	};
	return V;
}
var maxElapsed = 40;
function createRenderBatcher(r, M) {
	let N = !1, P = !0, F = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, I = () => N = !0, L = stepsOrder.reduce((r, N) => (r[N] = createRenderStep(I, M ? N : void 0), r), {}), { setup: R, read: z, resolveKeyframes: B, preUpdate: V, update: H, preRender: U, render: W, postRender: G } = L, K = () => {
		let I = MotionGlobalConfig.useManualTiming ? F.timestamp : performance.now();
		N = !1, MotionGlobalConfig.useManualTiming || (F.delta = P ? 1e3 / 60 : Math.max(Math.min(I - F.timestamp, maxElapsed), 1)), F.timestamp = I, F.isProcessing = !0, R.process(F), z.process(F), B.process(F), V.process(F), H.process(F), U.process(F), W.process(F), G.process(F), F.isProcessing = !1, N && M && (P = !1, r(K));
	}, q = () => {
		N = !0, P = !0, F.isProcessing || r(K);
	};
	return {
		schedule: stepsOrder.reduce((r, M) => {
			let P = L[M];
			return r[M] = (r, M = !1, F = !1) => (N || q(), P.schedule(r, M, F)), r;
		}, {}),
		cancel: (r) => {
			for (let M = 0; M < stepsOrder.length; M++) L[stepsOrder[M]].cancel(r);
		},
		state: F,
		steps: L
	};
}
var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame < "u" ? requestAnimationFrame : noop, !0), now;
function clearTime() {
	now = void 0;
}
var time = {
	now: () => (now === void 0 && time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now()), now),
	set: (r) => {
		now = r, queueMicrotask(clearTime);
	}
}, activeAnimations = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, checkStringStartsWith = (r) => (M) => typeof M == "string" && M.startsWith(r), isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--"), startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--"), isCSSVariableToken = (r) => startsAsVariableToken(r) ? singleCssVariableRegex.test(r.split("/*")[0].trim()) : !1, singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function containsCSSVariable(r) {
	return typeof r == "string" ? r.split("/*")[0].includes("var(--") : !1;
}
var number = {
	test: (r) => typeof r == "number",
	parse: parseFloat,
	transform: (r) => r
}, alpha = {
	...number,
	transform: (r) => clamp(0, 1, r)
}, scale = {
	...number,
	default: 1
}, sanitize = (r) => Math.round(r * 1e5) / 1e5, floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function isNullish(r) {
	return r == null;
}
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, isColorString = (r, M) => (N) => !!(typeof N == "string" && singleColorRegex.test(N) && N.startsWith(r) || M && !isNullish(N) && Object.prototype.hasOwnProperty.call(N, M)), splitColor = (r, M, N) => (P) => {
	if (typeof P != "string") return P;
	let [F, I, L, R] = P.match(floatRegex);
	return {
		[r]: parseFloat(F),
		[M]: parseFloat(I),
		[N]: parseFloat(L),
		alpha: R === void 0 ? 1 : parseFloat(R)
	};
}, clampRgbUnit = (r) => clamp(0, 255, r), rgbUnit = {
	...number,
	transform: (r) => Math.round(clampRgbUnit(r))
}, rgba = {
	test: /* @__PURE__ */ isColorString("rgb", "red"),
	parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
	transform: ({ red: r, green: M, blue: N, alpha: P = 1 }) => "rgba(" + rgbUnit.transform(r) + ", " + rgbUnit.transform(M) + ", " + rgbUnit.transform(N) + ", " + sanitize(alpha.transform(P)) + ")"
};
function parseHex(r) {
	let M = "", N = "", P = "", F = "";
	return r.length > 5 ? (M = r.substring(1, 3), N = r.substring(3, 5), P = r.substring(5, 7), F = r.substring(7, 9)) : (M = r.substring(1, 2), N = r.substring(2, 3), P = r.substring(3, 4), F = r.substring(4, 5), M += M, N += N, P += P, F += F), {
		red: parseInt(M, 16),
		green: parseInt(N, 16),
		blue: parseInt(P, 16),
		alpha: F ? parseInt(F, 16) / 255 : 1
	};
}
var hex = {
	test: /* @__PURE__ */ isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
}, createUnitType = /* @__NO_SIDE_EFFECTS__ */ (r) => ({
	test: (M) => typeof M == "string" && M.endsWith(r) && M.split(" ").length === 1,
	parse: parseFloat,
	transform: (M) => `${M}${r}`
}), degrees = /* @__PURE__ */ createUnitType("deg"), percent = /* @__PURE__ */ createUnitType("%"), px = /* @__PURE__ */ createUnitType("px"), vh = /* @__PURE__ */ createUnitType("vh"), vw = /* @__PURE__ */ createUnitType("vw"), progressPercentage = /* @__PURE__ */ (() => ({
	...percent,
	parse: (r) => percent.parse(r) / 100,
	transform: (r) => percent.transform(r * 100)
}))(), hsla = {
	test: /* @__PURE__ */ isColorString("hsl", "hue"),
	parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue: r, saturation: M, lightness: N, alpha: P = 1 }) => "hsla(" + Math.round(r) + ", " + percent.transform(sanitize(M)) + ", " + percent.transform(sanitize(N)) + ", " + sanitize(alpha.transform(P)) + ")"
}, color = {
	test: (r) => rgba.test(r) || hex.test(r) || hsla.test(r),
	parse: (r) => rgba.test(r) ? rgba.parse(r) : hsla.test(r) ? hsla.parse(r) : hex.parse(r),
	transform: (r) => typeof r == "string" ? r : r.hasOwnProperty("red") ? rgba.transform(r) : hsla.transform(r),
	getAnimatableNone: (r) => {
		let M = color.parse(r);
		return M.alpha = 0, color.transform(M);
	}
}, colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function test(r) {
	return isNaN(r) && typeof r == "string" && (r.match(floatRegex)?.length || 0) + (r.match(colorRegex)?.length || 0) > 0;
}
var NUMBER_TOKEN = "number", COLOR_TOKEN = "color", VAR_TOKEN = "var", VAR_FUNCTION_TOKEN = "var(", SPLIT_TOKEN = "${}", complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(r) {
	let M = r.toString(), N = [], P = {
		color: [],
		number: [],
		var: []
	}, F = [], I = 0;
	return {
		values: N,
		split: M.replace(complexRegex, (r) => (color.test(r) ? (P.color.push(I), F.push(COLOR_TOKEN), N.push(color.parse(r))) : r.startsWith(VAR_FUNCTION_TOKEN) ? (P.var.push(I), F.push(VAR_TOKEN), N.push(r)) : (P.number.push(I), F.push(NUMBER_TOKEN), N.push(parseFloat(r))), ++I, SPLIT_TOKEN)).split(SPLIT_TOKEN),
		indexes: P,
		types: F
	};
}
function parseComplexValue(r) {
	return analyseComplexValue(r).values;
}
function buildTransformer({ split: r, types: M }) {
	let N = r.length;
	return (P) => {
		let F = "";
		for (let I = 0; I < N; I++) if (F += r[I], P[I] !== void 0) {
			let r = M[I];
			r === NUMBER_TOKEN ? F += sanitize(P[I]) : r === COLOR_TOKEN ? F += color.transform(P[I]) : F += P[I];
		}
		return F;
	};
}
function createTransformer(r) {
	return buildTransformer(analyseComplexValue(r));
}
var convertNumbersToZero = (r) => typeof r == "number" ? 0 : color.test(r) ? color.getAnimatableNone(r) : r, convertToZero = (r, M) => typeof r == "number" ? M?.trim().endsWith("/") ? r : 0 : convertNumbersToZero(r);
function getAnimatableNone$1(r) {
	let M = analyseComplexValue(r);
	return buildTransformer(M)(M.values.map((r, N) => convertToZero(r, M.split[N])));
}
var complex = {
	test,
	parse: parseComplexValue,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
}, mixNumber = (r, M, N) => r + (M - r) * N, generateLinearEasing = (r, M, N = 10) => {
	let P = "", F = Math.max(Math.round(M / N), 2);
	for (let M = 0; M < F; M++) P += Math.round(r(M / (F - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${P.substring(0, P.length - 2)})`;
}, isNotNull = (r) => r !== null;
function getFinalKeyframe(r, { repeat: M, repeatType: N = "loop" }, P, F = 1) {
	let I = r.filter(isNotNull), L = F < 0 || M && N !== "loop" && M % 2 == 1 ? 0 : I.length - 1;
	return !L || P === void 0 ? I[L] : P;
}
var WithPromise = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((r) => {
			this.resolve = r;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(r, M) {
		return this.finished.then(r, M);
	}
};
function fillWildcards(r) {
	for (let M = 1; M < r.length; M++) r[M] ?? (r[M] = r[M - 1]);
}
var radToDeg = (r) => r * 180 / Math.PI, rotate = (r) => rebaseAngle(radToDeg(Math.atan2(r[1], r[0]))), matrix2dParsers = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (r) => (Math.abs(r[0]) + Math.abs(r[3])) / 2,
	rotate,
	rotateZ: rotate,
	skewX: (r) => radToDeg(Math.atan(r[1])),
	skewY: (r) => radToDeg(Math.atan(r[2])),
	skew: (r) => (Math.abs(r[1]) + Math.abs(r[2])) / 2
}, rebaseAngle = (r) => (r %= 360, r < 0 && (r += 360), r), rotateZ = rotate, scaleX = (r) => Math.sqrt(r[0] * r[0] + r[1] * r[1]), scaleY = (r) => Math.sqrt(r[4] * r[4] + r[5] * r[5]), matrix3dParsers = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX,
	scaleY,
	scale: (r) => (scaleX(r) + scaleY(r)) / 2,
	rotateX: (r) => rebaseAngle(radToDeg(Math.atan2(r[6], r[5]))),
	rotateY: (r) => rebaseAngle(radToDeg(Math.atan2(-r[2], r[0]))),
	rotateZ,
	rotate: rotateZ,
	skewX: (r) => radToDeg(Math.atan(r[4])),
	skewY: (r) => radToDeg(Math.atan(r[1])),
	skew: (r) => (Math.abs(r[1]) + Math.abs(r[4])) / 2
};
function defaultTransformValue(r) {
	return r.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(r, M) {
	if (!r || r === "none") return defaultTransformValue(M);
	let N = r.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), P, F;
	if (N) P = matrix3dParsers, F = N;
	else {
		let M = r.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		P = matrix2dParsers, F = M;
	}
	if (!F) return defaultTransformValue(M);
	let I = P[M], L = F[1].split(",").map(convertTransformToNumber);
	return typeof I == "function" ? I(L) : L[I];
}
var readTransformValue = (r, M) => {
	let { transform: N = "none" } = getComputedStyle(r);
	return parseValueFromTransform(N, M);
};
function convertTransformToNumber(r) {
	return parseFloat(r.trim());
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
], transformProps = /* @__PURE__ */ (() => new Set(transformPropOrder))(), isNumOrPxType = (r) => r === number || r === px, transformKeys = new Set([
	"x",
	"y",
	"z"
]), nonTranslationalTransformKeys = transformPropOrder.filter((r) => !transformKeys.has(r));
function removeNonTranslationalTransform(r) {
	let M = [];
	return nonTranslationalTransformKeys.forEach((N) => {
		let P = r.getValue(N);
		P !== void 0 && (M.push([N, P.get()]), P.set(N.startsWith("scale") ? 1 : 0));
	}), M;
}
var positionalValues = {
	width: ({ x: r }, { paddingLeft: M = "0", paddingRight: N = "0" }) => r.max - r.min - parseFloat(M) - parseFloat(N),
	height: ({ y: r }, { paddingTop: M = "0", paddingBottom: N = "0" }) => r.max - r.min - parseFloat(M) - parseFloat(N),
	top: (r, { top: M }) => parseFloat(M),
	left: (r, { left: M }) => parseFloat(M),
	bottom: ({ y: r }, { top: M }) => parseFloat(M) + (r.max - r.min),
	right: ({ x: r }, { left: M }) => parseFloat(M) + (r.max - r.min),
	x: (r, { transform: M }) => parseValueFromTransform(M, "x"),
	y: (r, { transform: M }) => parseValueFromTransform(M, "y")
};
positionalValues.translateX = positionalValues.x, positionalValues.translateY = positionalValues.y;
var toResolve = /* @__PURE__ */ new Set(), isScheduled = !1, anyNeedsMeasurement = !1, isForced = !1;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		let r = Array.from(toResolve).filter((r) => r.needsMeasurement), M = new Set(r.map((r) => r.element)), N = /* @__PURE__ */ new Map();
		M.forEach((r) => {
			let M = removeNonTranslationalTransform(r);
			M.length && (N.set(r, M), r.render());
		}), r.forEach((r) => r.measureInitialState()), M.forEach((r) => {
			r.render();
			let M = N.get(r);
			M && M.forEach(([M, N]) => {
				r.getValue(M)?.set(N);
			});
		}), r.forEach((r) => r.measureEndState()), r.forEach((r) => {
			r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
		});
	}
	anyNeedsMeasurement = !1, isScheduled = !1, toResolve.forEach((r) => r.complete(isForced)), toResolve.clear();
}
function readAllKeyframes() {
	toResolve.forEach((r) => {
		r.readKeyframes(), r.needsMeasurement && (anyNeedsMeasurement = !0);
	});
}
function flushKeyframeResolvers() {
	isForced = !0, readAllKeyframes(), measureAllKeyframes(), isForced = !1;
}
var KeyframeResolver = class {
	constructor(r, M, N, P, F, I = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...r], this.onComplete = M, this.name = N, this.motionValue = P, this.element = F, this.isAsync = I;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (toResolve.add(this), isScheduled || (isScheduled = !0, frame.read(readAllKeyframes), frame.resolveKeyframes(measureAllKeyframes))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: r, name: M, element: N, motionValue: P } = this;
		if (r[0] === null) {
			let F = P?.get(), I = r[r.length - 1];
			if (F !== void 0) r[0] = F;
			else if (N && M) {
				let P = N.readValue(M, I);
				P != null && (r[0] = P);
			}
			r[0] === void 0 && (r[0] = I), P && F === void 0 && P.set(r[0]);
		}
		fillWildcards(r);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(r = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, r), toResolve.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (toResolve.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, isCSSVar = (r) => r.startsWith("--");
function setStyle(r, M, N) {
	isCSSVar(M) ? r.style.setProperty(M, N) : r.style[M] = N;
}
var supportsFlags = {};
function memoSupports(r, M) {
	let N = /* @__PURE__ */ memo$1(r);
	return () => supportsFlags[M] ?? N();
}
var supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== void 0, "scrollTimeline"), supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), cubicBezierAsString = ([r, M, N, P]) => `cubic-bezier(${r}, ${M}, ${N}, ${P})`, supportedWaapiEasing = {
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
function mapEasingToNativeEasing(r, M) {
	if (r) return typeof r == "function" ? supportsLinearEasing() ? generateLinearEasing(r, M) : "ease-out" : isBezierDefinition(r) ? cubicBezierAsString(r) : Array.isArray(r) ? r.map((r) => mapEasingToNativeEasing(r, M) || supportedWaapiEasing.easeOut) : supportedWaapiEasing[r];
}
function startWaapiAnimation(r, M, N, { delay: P = 0, duration: F = 300, repeat: I = 0, repeatType: L = "loop", ease: R = "easeOut", times: z } = {}, B = void 0) {
	let V = { [M]: N };
	z && (V.offset = z);
	let H = mapEasingToNativeEasing(R, F);
	Array.isArray(H) && (V.easing = H), statsBuffer.value && activeAnimations.waapi++;
	let U = {
		delay: P,
		duration: F,
		easing: Array.isArray(H) ? "linear" : H,
		fill: "both",
		iterations: I + 1,
		direction: L === "reverse" ? "alternate" : "normal"
	};
	B && (U.pseudoElement = B);
	let W = r.animate(V, U);
	return statsBuffer.value && W.finished.finally(() => {
		activeAnimations.waapi--;
	}), W;
}
function isGenerator(r) {
	return typeof r == "function" && "applyToOptions" in r;
}
function applyGeneratorOptions({ type: r, ...M }) {
	return isGenerator(r) && supportsLinearEasing() ? r.applyToOptions(M) : (M.duration ??= 300, M.ease ??= "easeOut", M);
}
var NativeAnimation = class extends WithPromise {
	constructor(r) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !r) return;
		let { element: M, name: N, keyframes: P, pseudoElement: F, allowFlatten: I = !1, finalKeyframe: L, onComplete: R } = r;
		this.isPseudoElement = !!F, this.allowFlatten = I, this.options = r, invariant(typeof r.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let z = applyGeneratorOptions(r);
		this.animation = startWaapiAnimation(M, N, P, z, F), z.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !F) {
				let r = getFinalKeyframe(P, this.options, L, this.speed);
				this.updateMotionValue && this.updateMotionValue(r), setStyle(M, N, r), this.animation.cancel();
			}
			R?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: r } = this;
		r === "idle" || r === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		let r = this.options?.element;
		!this.isPseudoElement && r?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		let r = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ millisecondsToSeconds(Number(r));
	}
	get iterationDuration() {
		let { delay: r = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(r);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(Number(this.animation.currentTime) || 0);
	}
	set time(r) {
		let M = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ secondsToMilliseconds(r), M && this.animation.pause();
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(r) {
		r < 0 && (this.finishedTime = null), this.animation.playbackRate = r;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(r) {
		this.manualStartTime = this.animation.startTime = r;
	}
	attachTimeline({ timeline: r, rangeStart: M, rangeEnd: N, observe: P }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, r && supportsScrollTimeline() ? (this.animation.timeline = r, M && (this.animation.rangeStart = M), N && (this.animation.rangeEnd = N), noop) : P(this);
	}
};
function getValueState(r) {
	let M = [{}, {}];
	return r?.values.forEach((r, N) => {
		M[0][N] = r.get(), M[1][N] = r.getVelocity();
	}), M;
}
function resolveVariantFromProps(r, M, N, P) {
	if (typeof M == "function") {
		let [F, I] = getValueState(P);
		M = M(N === void 0 ? r.custom : N, F, I);
	}
	if (typeof M == "string" && (M = r.variants && r.variants[M]), typeof M == "function") {
		let [F, I] = getValueState(P);
		M = M(N === void 0 ? r.custom : N, F, I);
	}
	return M;
}
var MAX_VELOCITY_DELTA = 30, isFloat = (r) => !isNaN(parseFloat(r)), collectMotionValues = { current: void 0 }, MotionValue = class {
	constructor(r, M = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
			let M = time.now();
			if (this.updatedAt !== M && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let r of this.dependents) r.dirty();
		}, this.hasAnimated = !1, this.setCurrent(r), this.owner = M.owner;
	}
	setCurrent(r) {
		this.current = r, this.updatedAt = time.now(), this.canTrackVelocity === null && r !== void 0 && (this.canTrackVelocity = isFloat(this.current));
	}
	setPrevFrameValue(r = this.current) {
		this.prevFrameValue = r, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(r) {
		return process.env.NODE_ENV !== "production" && warnOnce(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", r);
	}
	on(r, M) {
		this.events[r] || (this.events[r] = new SubscriptionManager());
		let N = this.events[r].add(M);
		return r === "change" ? () => {
			N(), frame.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : N;
	}
	clearListeners() {
		for (let r in this.events) this.events[r].clear();
	}
	attach(r, M) {
		this.passiveEffect = r, this.stopPassiveEffect = M;
	}
	set(r) {
		this.passiveEffect ? this.passiveEffect(r, this.updateAndNotify) : this.updateAndNotify(r);
	}
	setWithVelocity(r, M, N) {
		this.set(M), this.prev = void 0, this.prevFrameValue = r, this.prevUpdatedAt = this.updatedAt - N;
	}
	jump(r, M = !0) {
		this.updateAndNotify(r), this.prev = r, this.prevUpdatedAt = this.prevFrameValue = void 0, M && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(r) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(r);
	}
	removeDependent(r) {
		this.dependents && this.dependents.delete(r);
	}
	get() {
		return collectMotionValues.current && collectMotionValues.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let r = time.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || r - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
		let M = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
		return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), M);
	}
	start(r) {
		return this.stop(), new Promise((M) => {
			this.hasAnimated = !0, this.animation = r(M), this.events.animationStart && this.events.animationStart.notify();
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
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function motionValue(r, M) {
	return new MotionValue(r, M);
}
var isMotionValue = (r) => !!(r && r.getVelocity);
function camelToDash(r) {
	return r.replace(/([A-Z])/g, (r) => `-${r.toLowerCase()}`);
}
var optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId"), auto = {
	test: (r) => r === "auto",
	parse: (r) => r
}, testValueType = (r) => (M) => M.test(r), dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	auto
], findDimensionValueType = (r) => dimensionValueTypes.find(testValueType(r)), maxDefaults = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(r) {
	let [M, N] = r.slice(0, -1).split("(");
	if (M === "drop-shadow") return r;
	let [P] = N.match(floatRegex) || [];
	if (!P) return r;
	let F = N.replace(P, ""), I = maxDefaults.has(M) ? 1 : 0;
	return P !== N && (I *= 100), M + "(" + I + F + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu, filter = {
	...complex,
	getAnimatableNone: (r) => {
		let M = r.match(functionRegex);
		return M ? M.map(applyDefaultFilter).join(" ") : r;
	}
}, mask = {
	...complex,
	getAnimatableNone: (r) => {
		let M = complex.parse(r);
		return complex.createTransformer(r)(M.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? {
			...r,
			alpha: 1
		} : r));
	}
}, int = {
	...number,
	transform: Math.round
}, numberValueTypes = {
	borderWidth: px,
	borderTopWidth: px,
	borderRightWidth: px,
	borderBottomWidth: px,
	borderLeftWidth: px,
	borderRadius: px,
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
	inset: px,
	insetBlock: px,
	insetBlockStart: px,
	insetBlockEnd: px,
	insetInline: px,
	insetInlineStart: px,
	insetInlineEnd: px,
	padding: px,
	paddingTop: px,
	paddingRight: px,
	paddingBottom: px,
	paddingLeft: px,
	paddingBlock: px,
	paddingBlockStart: px,
	paddingBlockEnd: px,
	paddingInline: px,
	paddingInlineStart: px,
	paddingInlineEnd: px,
	margin: px,
	marginTop: px,
	marginRight: px,
	marginBottom: px,
	marginLeft: px,
	marginBlock: px,
	marginBlockStart: px,
	marginBlockEnd: px,
	marginInline: px,
	marginInlineStart: px,
	marginInlineEnd: px,
	fontSize: px,
	backgroundPositionX: px,
	backgroundPositionY: px,
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
	originZ: px,
	zIndex: int,
	fillOpacity: alpha,
	strokeOpacity: alpha,
	numOctaves: int
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
	WebkitFilter: filter,
	mask,
	WebkitMask: mask
}, getDefaultValueType = (r) => defaultValueTypes[r], customTypes = /* @__PURE__ */ new Set([filter, mask]);
function getAnimatableNone(r, M) {
	let N = getDefaultValueType(r);
	return customTypes.has(N) || (N = complex), N.getAnimatableNone ? N.getAnimatableNone(M) : void 0;
}
var acceleratedValues = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), getValueAsType = (r, M) => M && typeof r == "number" ? M.transform(r) : r, { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, !1), valueTypes = [
	...dimensionValueTypes,
	color,
	complex
], findValueType = (r) => valueTypes.find(testValueType(r)), createAxisDelta = () => ({
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
}), visualElementStore = /* @__PURE__ */ new WeakMap();
function isAnimationControls(r) {
	return typeof r == "object" && !!r && typeof r.start == "function";
}
function isVariantLabel(r) {
	return typeof r == "string" || Array.isArray(r);
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
function isControllingVariants(r) {
	return isAnimationControls(r.animate) || variantProps.some((M) => isVariantLabel(r[M]));
}
function isVariantNode(r) {
	return !!(isControllingVariants(r) || r.variants);
}
function updateMotionValuesFromProps(r, M, N) {
	for (let P in M) {
		let F = M[P], I = N[P];
		if (isMotionValue(F)) r.addValue(P, F);
		else if (isMotionValue(I)) r.addValue(P, motionValue(F, { owner: r }));
		else if (I !== F) if (r.hasValue(P)) {
			let M = r.getValue(P);
			M.liveStyle === !0 ? M.jump(F) : M.hasAnimated || M.set(F);
		} else {
			let M = r.getStaticValue(P);
			r.addValue(P, motionValue(M === void 0 ? F : M, { owner: r }));
		}
	}
	for (let P in N) M[P] === void 0 && r.removeValue(P);
	return M;
}
var prefersReducedMotion = { current: null }, hasReducedMotionListener = { current: !1 }, isBrowser = typeof window < "u";
function initPrefersReducedMotion() {
	if (hasReducedMotionListener.current = !0, isBrowser) if (window.matchMedia) {
		let r = window.matchMedia("(prefers-reduced-motion)"), M = () => prefersReducedMotion.current = r.matches;
		r.addEventListener("change", M), M();
	} else prefersReducedMotion.current = !1;
}
var propEventHandlers = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], featureDefinitions = {};
function setFeatureDefinitions(r) {
	featureDefinitions = r;
}
function getFeatureDefinitions() {
	return featureDefinitions;
}
var VisualElement = class {
	scrapeMotionValuesFromProps(r, M, N) {
		return {};
	}
	constructor({ parent: r, props: M, presenceContext: N, reducedMotionConfig: P, skipAnimations: F, blockInitialAnimation: I, visualState: L }, R = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = KeyframeResolver, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let r = time.now();
			this.renderScheduledAt < r && (this.renderScheduledAt = r, frame.render(this.render, !1, !0));
		};
		let { latestValues: z, renderState: B } = L;
		this.latestValues = z, this.baseTarget = { ...z }, this.initialValues = M.initial ? { ...z } : {}, this.renderState = B, this.parent = r, this.props = M, this.presenceContext = N, this.depth = r ? r.depth + 1 : 0, this.reducedMotionConfig = P, this.skipAnimationsConfig = F, this.options = R, this.blockInitialAnimation = !!I, this.isControllingVariants = isControllingVariants(M), this.isVariantNode = isVariantNode(M), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(r && r.current);
		let { willChange: V, ...H } = this.scrapeMotionValuesFromProps(M, {}, this);
		for (let r in H) {
			let M = H[r];
			z[r] !== void 0 && isMotionValue(M) && M.set(z[r]);
		}
	}
	mount(r) {
		if (this.hasBeenMounted) for (let r in this.initialValues) this.values.get(r)?.jump(this.initialValues[r]), this.latestValues[r] = this.initialValues[r];
		this.current = r, visualElementStore.set(r, this), this.projection && !this.projection.instance && this.projection.mount(r), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, M) => this.bindToMotionValue(M, r)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (hasReducedMotionListener.current || initPrefersReducedMotion(), this.shouldReduceMotion = prefersReducedMotion.current), process.env.NODE_ENV !== "production" && warnOnce(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		for (let r in this.projection && this.projection.unmount(), cancelFrame(this.notifyUpdate), cancelFrame(this.render), this.valueSubscriptions.forEach((r) => r()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[r].clear();
		for (let r in this.features) {
			let M = this.features[r];
			M && (M.unmount(), M.isMounted = !1);
		}
		this.current = null;
	}
	addChild(r) {
		this.children.add(r), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(r);
	}
	removeChild(r) {
		this.children.delete(r), this.enteringChildren && this.enteringChildren.delete(r);
	}
	bindToMotionValue(r, M) {
		if (this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)(), M.accelerate && acceleratedValues.has(r) && this.current instanceof HTMLElement) {
			let { factory: N, keyframes: P, times: F, ease: I, duration: L } = M.accelerate, R = new NativeAnimation({
				element: this.current,
				name: r,
				keyframes: P,
				times: F,
				ease: I,
				duration: /* @__PURE__ */ secondsToMilliseconds(L)
			}), z = N(R);
			this.valueSubscriptions.set(r, () => {
				z(), R.cancel();
			});
			return;
		}
		let N = transformProps.has(r);
		N && this.onBindTransform && this.onBindTransform();
		let P = M.on("change", (M) => {
			this.latestValues[r] = M, this.props.onUpdate && frame.preRender(this.notifyUpdate), N && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), F;
		typeof window < "u" && window.MotionCheckAppearSync && (F = window.MotionCheckAppearSync(this, r, M)), this.valueSubscriptions.set(r, () => {
			P(), F && F(), M.owner && M.stop();
		});
	}
	sortNodePosition(r) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== r.type ? 0 : this.sortInstanceNodePosition(this.current, r.current);
	}
	updateFeatures() {
		let r = "animation";
		for (r in featureDefinitions) {
			let M = featureDefinitions[r];
			if (!M) continue;
			let { isEnabled: N, Feature: P } = M;
			if (!this.features[r] && P && N(this.props) && (this.features[r] = new P(this)), this.features[r]) {
				let M = this.features[r];
				M.isMounted ? M.update() : (M.mount(), M.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
	}
	getStaticValue(r) {
		return this.latestValues[r];
	}
	setStaticValue(r, M) {
		this.latestValues[r] = M;
	}
	update(r, M) {
		(r.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = r, this.prevPresenceContext = this.presenceContext, this.presenceContext = M;
		for (let M = 0; M < propEventHandlers.length; M++) {
			let N = propEventHandlers[M];
			this.propEventSubscriptions[N] && (this.propEventSubscriptions[N](), delete this.propEventSubscriptions[N]);
			let P = r["on" + N];
			P && (this.propEventSubscriptions[N] = this.on(N, P));
		}
		this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(r, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(r) {
		return this.props.variants ? this.props.variants[r] : void 0;
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
	addVariantChild(r) {
		let M = this.getClosestVariantNode();
		if (M) return M.variantChildren && M.variantChildren.add(r), () => M.variantChildren.delete(r);
	}
	addValue(r, M) {
		let N = this.values.get(r);
		M !== N && (N && this.removeValue(r), this.bindToMotionValue(r, M), this.values.set(r, M), this.latestValues[r] = M.get());
	}
	removeValue(r) {
		this.values.delete(r);
		let M = this.valueSubscriptions.get(r);
		M && (M(), this.valueSubscriptions.delete(r)), delete this.latestValues[r], this.removeValueFromRenderState(r, this.renderState);
	}
	hasValue(r) {
		return this.values.has(r);
	}
	getValue(r, M) {
		if (this.props.values && this.props.values[r]) return this.props.values[r];
		let N = this.values.get(r);
		return N === void 0 && M !== void 0 && (N = motionValue(M === null ? void 0 : M, { owner: this }), this.addValue(r, N)), N;
	}
	readValue(r, M) {
		let N = this.latestValues[r] !== void 0 || !this.current ? this.latestValues[r] : this.getBaseTargetFromProps(this.props, r) ?? this.readValueFromInstance(this.current, r, this.options);
		return N != null && (typeof N == "string" && (isNumericalString(N) || isZeroValueString(N)) ? N = parseFloat(N) : !findValueType(N) && complex.test(M) && (N = getAnimatableNone(r, M)), this.setBaseTarget(r, isMotionValue(N) ? N.get() : N)), isMotionValue(N) ? N.get() : N;
	}
	setBaseTarget(r, M) {
		this.baseTarget[r] = M;
	}
	getBaseTarget(r) {
		let { initial: M } = this.props, N;
		if (typeof M == "string" || typeof M == "object") {
			let P = resolveVariantFromProps(this.props, M, this.presenceContext?.custom);
			P && (N = P[r]);
		}
		if (M && N !== void 0) return N;
		let P = this.getBaseTargetFromProps(this.props, r);
		return P !== void 0 && !isMotionValue(P) ? P : this.initialValues[r] !== void 0 && N === void 0 ? void 0 : this.baseTarget[r];
	}
	on(r, M) {
		return this.events[r] || (this.events[r] = new SubscriptionManager()), this.events[r].add(M);
	}
	notify(r, ...M) {
		this.events[r] && this.events[r].notify(...M);
	}
	scheduleRenderMicrotask() {
		microtask.render(this.render);
	}
}, translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, numTransforms = transformPropOrder.length;
function buildTransform(r, M, N) {
	let P = "", F = !0;
	for (let I = 0; I < numTransforms; I++) {
		let L = transformPropOrder[I], R = r[L];
		if (R === void 0) continue;
		let z = !0;
		if (typeof R == "number") z = R === (L.startsWith("scale") ? 1 : 0);
		else {
			let r = parseFloat(R);
			z = L.startsWith("scale") ? r === 1 : r === 0;
		}
		if (!z || N) {
			let r = getValueAsType(R, numberValueTypes[L]);
			if (!z) {
				F = !1;
				let M = translateAlias[L] || L;
				P += `${M}(${r}) `;
			}
			N && (M[L] = r);
		}
	}
	return P = P.trim(), N ? P = N(M, F ? "" : P) : F && (P = "none"), P;
}
function buildHTMLStyles(r, M, N) {
	let { style: P, vars: F, transformOrigin: I } = r, L = !1, R = !1;
	for (let r in M) {
		let N = M[r];
		if (transformProps.has(r)) {
			L = !0;
			continue;
		} else if (isCSSVariableName(r)) {
			F[r] = N;
			continue;
		} else {
			let M = getValueAsType(N, numberValueTypes[r]);
			r.startsWith("origin") ? (R = !0, I[r] = M) : P[r] = M;
		}
	}
	if (M.transform || (L || N ? P.transform = buildTransform(M, r.transform, N) : P.transform &&= "none"), R) {
		let { originX: r = "50%", originY: M = "50%", originZ: N = 0 } = I;
		P.transformOrigin = `${r} ${M} ${N}`;
	}
}
function pixelsToPercent(r, M) {
	return M.max === M.min ? 0 : r / (M.max - M.min) * 100;
}
var correctBorderRadius = { correct: (r, M) => {
	if (!M.target) return r;
	if (typeof r == "string") if (px.test(r)) r = parseFloat(r);
	else return r;
	return `${pixelsToPercent(r, M.target.x)}% ${pixelsToPercent(r, M.target.y)}%`;
} }, correctBoxShadow = { correct: (r, { treeScale: M, projectionDelta: N }) => {
	let P = r, F = complex.parse(r);
	if (F.length > 5) return P;
	let I = complex.createTransformer(r), L = typeof F[0] == "number" ? 0 : 1, R = N.x.scale * M.x, z = N.y.scale * M.y;
	F[0 + L] /= R, F[1 + L] /= z;
	let B = mixNumber(R, z, .5);
	return typeof F[2 + L] == "number" && (F[2 + L] /= B), typeof F[3 + L] == "number" && (F[3 + L] /= B), I(F);
} }, scaleCorrectors = {
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
function isForcedMotionValue(r, { layout: M, layoutId: N }) {
	return transformProps.has(r) || r.startsWith("origin") || (M || N !== void 0) && (!!scaleCorrectors[r] || r === "opacity");
}
function scrapeMotionValuesFromProps$1(r, M, N) {
	let P = r.style, F = M?.style, I = {};
	if (!P) return I;
	for (let M in P) (isMotionValue(P[M]) || F && isMotionValue(F[M]) || isForcedMotionValue(M, r) || N?.getValue(M)?.liveStyle !== void 0) && (I[M] = P[M]);
	return I;
}
var dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function buildSVGPath(r, M, N = 1, P = 0, F = !0) {
	r.pathLength = 1;
	let I = F ? dashKeys : camelKeys;
	r[I.offset] = `${-P}`, r[I.array] = `${M} ${N}`;
}
var cssMotionPathProperties = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function buildSVGAttrs(r, { attrX: M, attrY: N, attrScale: P, pathLength: F, pathSpacing: I = 1, pathOffset: L = 0, ...R }, z, B, V) {
	if (buildHTMLStyles(r, R, B), z) {
		r.style.viewBox && (r.attrs.viewBox = r.style.viewBox);
		return;
	}
	r.attrs = r.style, r.style = {};
	let { attrs: H, style: U } = r;
	H.transform && (U.transform = H.transform, delete H.transform), (U.transform || H.transformOrigin) && (U.transformOrigin = H.transformOrigin ?? "50% 50%", delete H.transformOrigin), U.transform && (U.transformBox = V?.transformBox ?? "fill-box", delete H.transformBox);
	for (let r of cssMotionPathProperties) H[r] !== void 0 && (U[r] = H[r], delete H[r]);
	M !== void 0 && (H.x = M), N !== void 0 && (H.y = N), P !== void 0 && (H.scale = P), F !== void 0 && buildSVGPath(H, F, I, L, !1);
}
var isSVGTag = (r) => typeof r == "string" && r.toLowerCase() === "svg";
function scrapeMotionValuesFromProps(r, M, N) {
	let P = scrapeMotionValuesFromProps$1(r, M, N);
	for (let N in r) if (isMotionValue(r[N]) || isMotionValue(M[N])) {
		let M = transformPropOrder.indexOf(N) === -1 ? N : "attr" + N.charAt(0).toUpperCase() + N.substring(1);
		P[M] = r[N];
	}
	return P;
}
function resolveMotionValue(r) {
	return isMotionValue(r) ? r.get() : r;
}
var MotionConfigContext = createContext({
	transformPagePoint: (r) => r,
	isStatic: !1,
	reducedMotion: "never"
}), LazyContext = createContext({ strict: !1 }), featureProps = {
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
}, isInitialized = !1;
function initFeatureDefinitions() {
	if (isInitialized) return;
	let r = {};
	for (let M in featureProps) r[M] = { isEnabled: (r) => featureProps[M].some((M) => !!r[M]) };
	setFeatureDefinitions(r), isInitialized = !0;
}
function getInitializedFeatureDefinitions() {
	return initFeatureDefinitions(), getFeatureDefinitions();
}
function loadFeatures(r) {
	let M = getInitializedFeatureDefinitions();
	for (let N in r) M[N] = {
		...M[N],
		...r[N]
	};
	setFeatureDefinitions(M);
}
var validMotionProps = new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport".split("."));
function isValidMotionProp(r) {
	return r.startsWith("while") || r.startsWith("drag") && r !== "draggable" || r.startsWith("layout") || r.startsWith("onTap") || r.startsWith("onPan") || r.startsWith("onLayout") || validMotionProps.has(r);
}
var is_prop_valid_framer_motion_exports = /* @__PURE__ */ __export({ default: () => is_prop_valid_framer_motion_default }), is_prop_valid_framer_motion_default, init_is_prop_valid_framer_motion = __esmMin((() => {
	throw is_prop_valid_framer_motion_default = {}, Error("Could not resolve \"@emotion/is-prop-valid\" imported by \"framer-motion\". Is it installed?");
})), shouldForward = (r) => !isValidMotionProp(r);
function loadExternalIsValidProp(r) {
	typeof r == "function" && (shouldForward = (M) => M.startsWith("on") ? !isValidMotionProp(M) : r(M));
}
try {
	loadExternalIsValidProp((init_is_prop_valid_framer_motion(), __toCommonJS(is_prop_valid_framer_motion_exports)).default);
} catch {}
function filterProps(r, M, N) {
	let P = {};
	for (let F in r) F === "values" && typeof r.values == "object" || (shouldForward(F) || N === !0 && isValidMotionProp(F) || !M && !isValidMotionProp(F) || r.draggable && F.startsWith("onDrag")) && (P[F] = r[F]);
	return P;
}
var MotionContext = /* @__PURE__ */ createContext({});
function getCurrentTreeVariants(r, M) {
	if (isControllingVariants(r)) {
		let { initial: M, animate: N } = r;
		return {
			initial: M === !1 || isVariantLabel(M) ? M : void 0,
			animate: isVariantLabel(N) ? N : void 0
		};
	}
	return r.inherit === !1 ? {} : M;
}
function useCreateMotionContext(r) {
	let { initial: M, animate: N } = getCurrentTreeVariants(r, useContext(MotionContext));
	return useMemo(() => ({
		initial: M,
		animate: N
	}), [variantLabelsAsDependency(M), variantLabelsAsDependency(N)]);
}
function variantLabelsAsDependency(r) {
	return Array.isArray(r) ? r.join(" ") : r;
}
var createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
function copyRawValuesOnly(r, M, N) {
	for (let P in M) !isMotionValue(M[P]) && !isForcedMotionValue(P, N) && (r[P] = M[P]);
}
function useInitialMotionValues({ transformTemplate: r }, M) {
	return useMemo(() => {
		let N = createHtmlRenderState();
		return buildHTMLStyles(N, M, r), Object.assign({}, N.vars, N.style);
	}, [M]);
}
function useStyle(r, M) {
	let N = r.style || {}, P = {};
	return copyRawValuesOnly(P, N, r), Object.assign(P, useInitialMotionValues(r, M)), P;
}
function useHTMLProps(r, M) {
	let N = {}, P = useStyle(r, M);
	return r.drag && r.dragListener !== !1 && (N.draggable = !1, P.userSelect = P.WebkitUserSelect = P.WebkitTouchCallout = "none", P.touchAction = r.drag === !0 ? "none" : `pan-${r.drag === "x" ? "y" : "x"}`), r.tabIndex === void 0 && (r.onTap || r.onTapStart || r.whileTap) && (N.tabIndex = 0), N.style = P, N;
}
var createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
});
function useSVGProps(r, M, N, P) {
	let F = useMemo(() => {
		let N = createSvgRenderState();
		return buildSVGAttrs(N, M, isSVGTag(P), r.transformTemplate, r.style), {
			...N.attrs,
			style: { ...N.style }
		};
	}, [M]);
	if (r.style) {
		let M = {};
		copyRawValuesOnly(M, r.style, r), F.style = {
			...M,
			...F.style
		};
	}
	return F;
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
function isSVGComponent(r) {
	return typeof r != "string" || r.includes("-") ? !1 : !!(lowercaseSVGElements.indexOf(r) > -1 || /[A-Z]/u.test(r));
}
function useRender(M, P, F, { latestValues: I }, L, R = !1, z) {
	let V = (z ?? isSVGComponent(M) ? useSVGProps : useHTMLProps)(P, I, L, M), H = filterProps(P, typeof M == "string", R), U = M === Fragment ? {} : {
		...H,
		...V,
		ref: F
	}, { children: W } = P, G = useMemo(() => isMotionValue(W) ? W.get() : W, [W]);
	return createElement(M, {
		...U,
		children: G
	});
}
function makeState({ scrapeMotionValuesFromProps: r, createRenderState: M }, N, P, F) {
	return {
		latestValues: makeLatestValues(N, P, F, r),
		renderState: M()
	};
}
function makeLatestValues(r, M, N, P) {
	let F = {}, I = P(r, {});
	for (let r in I) F[r] = resolveMotionValue(I[r]);
	let { initial: L, animate: R } = r, z = isControllingVariants(r), B = isVariantNode(r);
	M && B && !z && r.inherit !== !1 && (L === void 0 && (L = M.initial), R === void 0 && (R = M.animate));
	let V = N ? N.initial === !1 : !1;
	V ||= L === !1;
	let H = V ? R : L;
	if (H && typeof H != "boolean" && !isAnimationControls(H)) {
		let M = Array.isArray(H) ? H : [H];
		for (let N = 0; N < M.length; N++) {
			let P = resolveVariantFromProps(r, M[N]);
			if (P) {
				let { transitionEnd: r, transition: M, ...N } = P;
				for (let r in N) {
					let M = N[r];
					if (Array.isArray(M)) {
						let r = V ? M.length - 1 : 0;
						M = M[r];
					}
					M !== null && (F[r] = M);
				}
				for (let M in r) F[M] = r[M];
			}
		}
	}
	return F;
}
var makeUseVisualState = (r) => (M, N) => {
	let P = useContext(MotionContext), F = useContext(PresenceContext), L = () => makeState(r, M, P, F);
	return N ? L() : useConstant(L);
}, useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
}), useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState
}), motionComponentSymbol = Symbol.for("motionComponentSymbol");
function useMotionRef(r, M, N) {
	let P = useRef(N);
	useInsertionEffect(() => {
		P.current = N;
	});
	let I = useRef(null);
	return useCallback((N) => {
		N && r.onMount?.(N);
		let F = P.current;
		if (typeof F == "function") if (N) {
			let r = F(N);
			typeof r == "function" && (I.current = r);
		} else I.current ? (I.current(), I.current = null) : F(N);
		else F && (F.current = N);
		M && (N ? M.mount(N) : M.unmount());
	}, [M]);
}
var SwitchLayoutGroupContext = createContext({});
function isRefObject(r) {
	return r && typeof r == "object" && Object.prototype.hasOwnProperty.call(r, "current");
}
function useVisualElement(r, M, N, P, F, z) {
	let { visualElement: B } = useContext(MotionContext), H = useContext(LazyContext), U = useContext(PresenceContext), W = useContext(MotionConfigContext), G = W.reducedMotion, K = W.skipAnimations, q = useRef(null), J = useRef(!1);
	P ||= H.renderer, !q.current && P && (q.current = P(r, {
		visualState: M,
		parent: B,
		props: N,
		presenceContext: U,
		blockInitialAnimation: U ? U.initial === !1 : !1,
		reducedMotionConfig: G,
		skipAnimations: K,
		isSVG: z
	}), J.current && q.current && (q.current.manuallyAnimateOnMount = !0));
	let Y = q.current, X = useContext(SwitchLayoutGroupContext);
	Y && !Y.projection && F && (Y.type === "html" || Y.type === "svg") && createProjectionNode(q.current, N, F, X);
	let Z = useRef(!1);
	useInsertionEffect(() => {
		Y && Z.current && Y.update(N, U);
	});
	let Q = N[optimizedAppearDataAttribute], $ = useRef(!!Q && typeof window < "u" && !window.MotionHandoffIsComplete?.(Q) && window.MotionHasOptimisedAnimation?.(Q));
	return useIsomorphicLayoutEffect(() => {
		J.current = !0, Y && (Z.current = !0, window.MotionIsMounted = !0, Y.updateFeatures(), Y.scheduleRenderMicrotask(), $.current && Y.animationState && Y.animationState.animateChanges());
	}), useEffect(() => {
		Y && (!$.current && Y.animationState && Y.animationState.animateChanges(), $.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(Q);
		}), !1), Y.enteringChildren = void 0);
	}), Y;
}
function createProjectionNode(r, M, N, P) {
	let { layoutId: F, layout: I, drag: L, dragConstraints: R, layoutScroll: z, layoutRoot: B, layoutCrossfade: V } = M;
	r.projection = new N(r.latestValues, M["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(r.parent)), r.projection.setOptions({
		layoutId: F,
		layout: I,
		alwaysMeasureLayout: !!L || R && isRefObject(R),
		visualElement: r,
		animationType: typeof I == "string" ? I : "both",
		initialPromotionConfig: P,
		crossfade: V,
		layoutScroll: z,
		layoutRoot: B
	});
}
function getClosestProjectingNode(r) {
	if (r) return r.options.allowProjection === !1 ? getClosestProjectingNode(r.parent) : r.projection;
}
function createMotionComponent(r, { forwardMotionProps: M = !1, type: N } = {}, F, L) {
	F && loadFeatures(F);
	let R = N ? N === "svg" : isSVGComponent(r), z = R ? useSVGVisualState : useHTMLVisualState;
	function B(N, P) {
		let B, V = {
			...useContext(MotionConfigContext),
			...N,
			layoutId: useLayoutId(N)
		}, { isStatic: W } = V, G = useCreateMotionContext(N), K = z(N, W);
		if (!W && typeof window < "u") {
			useStrictMode(V, F);
			let M = getProjectionFunctionality(V);
			B = M.MeasureLayout, G.visualElement = useVisualElement(r, K, V, L, M.ProjectionNode, R);
		}
		return jsxs(MotionContext.Provider, {
			value: G,
			children: [B && G.visualElement ? jsx(B, {
				visualElement: G.visualElement,
				...V
			}) : null, useRender(r, N, useMotionRef(K, G.visualElement, P), K, W, M, R)]
		});
	}
	B.displayName = `motion.${typeof r == "string" ? r : `create(${r.displayName ?? r.name ?? ""})`}`;
	let V = forwardRef(B);
	return V[motionComponentSymbol] = r, V;
}
function useLayoutId({ layoutId: r }) {
	let M = useContext(LayoutGroupContext).id;
	return M && r !== void 0 ? M + "-" + r : r;
}
function useStrictMode(r, M) {
	let N = useContext(LazyContext).strict;
	if (process.env.NODE_ENV !== "production" && M && N) {
		let M = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		r.ignoreStrict ? warning(!1, M, "lazy-strict-mode") : invariant(!1, M, "lazy-strict-mode");
	}
}
function getProjectionFunctionality(r) {
	let { drag: M, layout: N } = getInitializedFeatureDefinitions();
	if (!M && !N) return {};
	let P = {
		...M,
		...N
	};
	return {
		MeasureLayout: M?.isEnabled(r) || N?.isEnabled(r) ? P.MeasureLayout : void 0,
		ProjectionNode: P.ProjectionNode
	};
}
function createMotionProxy(r, M) {
	if (typeof Proxy > "u") return createMotionComponent;
	let N = /* @__PURE__ */ new Map(), P = (N, P) => createMotionComponent(N, P, r, M);
	return new Proxy((r, M) => (process.env.NODE_ENV !== "production" && warnOnce(!1, "motion() is deprecated. Use motion.create() instead."), P(r, M)), { get: (F, I) => I === "create" ? P : (N.has(I) || N.set(I, createMotionComponent(I, void 0, r, M)), N.get(I)) });
}
export { hex as $, motionValue as A, __commonJSMin as At, transformProps as B, getAnimatableNone as C, clamp as Ct, camelToDash as D, useIsomorphicLayoutEffect as Dt, optimizedAppearDataAttribute as E, PresenceContext as Et, KeyframeResolver as F, generateLinearEasing as G, readTransformValue as H, flushKeyframeResolvers as I, complex as J, mixNumber as K, isNumOrPxType as L, NativeAnimation as M, __toESM as Mt, isGenerator as N, isMotionValue as O, useConstant as Ot, setStyle as P, px as Q, positionalValues as R, microtask as S, warning as St, findDimensionValueType as T, removeItem as Tt, WithPromise as U, defaultTransformValue as V, getFinalKeyframe as W, hsla as X, color as Y, percent as Z, variantProps as _, memo$1 as _t, loadFeatures as a, time as at, createBox as b, MotionGlobalConfig as bt, resolveMotionValue as c, frameData as ct, buildSVGAttrs as d, isBezierDefinition as dt, rgba as et, scrapeMotionValuesFromProps$1 as f, velocityPerSecond as ft, variantPriorityOrder as g, noop as gt, VisualElement as h, SubscriptionManager as ht, isSVGComponent as i, activeAnimations as it, resolveVariantFromProps as j, __export as jt, collectMotionValues as k, LayoutGroupContext as kt, scrapeMotionValuesFromProps as l, frameSteps as lt, buildHTMLStyles as m, secondsToMilliseconds as mt, isRefObject as n, isCSSVariableName as nt, LazyContext as o, cancelFrame as ot, scaleCorrectors as p, millisecondsToSeconds as pt, analyseComplexValue as q, SwitchLayoutGroupContext as r, isCSSVariableToken as rt, MotionConfigContext as s, frame as st, createMotionProxy as t, containsCSSVariable as tt, isSVGTag as u, statsBuffer as ut, isVariantLabel as v, isZeroValueString as vt, getDefaultValueType as w, addUniqueItem as wt, createDelta as x, invariant as xt, isAnimationControls as y, isNumericalString as yt, transformPropOrder as z };
