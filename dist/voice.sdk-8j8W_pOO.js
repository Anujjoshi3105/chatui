import { t as createLucideIcon } from "./createLucideIcon-C1Qbi7jU.js";
import * as React$1 from "react";
import { useLayoutEffect } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import * as ReactDOM$1 from "react-dom";
import ReactDOM from "react-dom";
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
function setRef(t, i) {
	if (typeof t == "function") return t(i);
	t != null && (t.current = i);
}
function composeRefs(...t) {
	return (i) => {
		let a = !1, o = t.map((t) => {
			let o = setRef(t, i);
			return !a && typeof o == "function" && (a = !0), o;
		});
		if (a) return () => {
			for (let i = 0; i < o.length; i++) {
				let a = o[i];
				typeof a == "function" ? a() : setRef(t[i], null);
			}
		};
	};
}
function useComposedRefs(...t) {
	return React$1.useCallback(composeRefs(...t), t);
}
var REACT_LAZY_TYPE = Symbol.for("react.lazy"), use = React$1.use;
function isPromiseLike(t) {
	return typeof t == "object" && !!t && "then" in t;
}
function isLazyComponent(t) {
	return typeof t == "object" && !!t && "$$typeof" in t && t.$$typeof === REACT_LAZY_TYPE && "_payload" in t && isPromiseLike(t._payload);
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$6(t) {
	let a = /* @__PURE__ */ createSlotClone$6(t), o = React$1.forwardRef((t, o) => {
		let { children: c, ...l } = t;
		isLazyComponent(c) && typeof use == "function" && (c = use(c._payload));
		let u = React$1.Children.toArray(c), d = u.find(isSlottable$6);
		if (d) {
			let t = d.props.children, c = u.map((a) => a === d ? React$1.Children.count(t) > 1 ? React$1.Children.only(null) : React$1.isValidElement(t) ? t.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...l,
				ref: o,
				children: React$1.isValidElement(t) ? React$1.cloneElement(t, void 0, c) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...l,
			ref: o,
			children: c
		});
	});
	return o.displayName = `${t}.Slot`, o;
}
var Slot = /* @__PURE__ */ createSlot$6("Slot");
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$6(t) {
	let a = React$1.forwardRef((t, a) => {
		let { children: o, ...s } = t;
		if (isLazyComponent(o) && typeof use == "function" && (o = use(o._payload)), React$1.isValidElement(o)) {
			let t = getElementRef$7(o), c = mergeProps$6(s, o.props);
			return o.type !== React$1.Fragment && (c.ref = a ? composeRefs(a, t) : t), React$1.cloneElement(o, c);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${t}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$6 = Symbol("radix.slottable");
function isSlottable$6(t) {
	return React$1.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === SLOTTABLE_IDENTIFIER$6;
}
function mergeProps$6(t, i) {
	let a = { ...i };
	for (let o in i) {
		let s = t[o], c = i[o];
		/^on[A-Z]/.test(o) ? s && c ? a[o] = (...t) => {
			let i = c(...t);
			return s(...t), i;
		} : s && (a[o] = s) : o === "style" ? a[o] = {
			...s,
			...c
		} : o === "className" && (a[o] = [s, c].filter(Boolean).join(" "));
	}
	return {
		...t,
		...a
	};
}
function getElementRef$7(t) {
	let i = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning;
	return a ? t.ref : (i = Object.getOwnPropertyDescriptor(t, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning, a ? t.props.ref : t.props.ref || t.ref);
}
function r(t) {
	var i, a, o = "";
	if (typeof t == "string" || typeof t == "number") o += t;
	else if (typeof t == "object") if (Array.isArray(t)) {
		var s = t.length;
		for (i = 0; i < s; i++) t[i] && (a = r(t[i])) && (o && (o += " "), o += a);
	} else for (a in t) t[a] && (o && (o += " "), o += a);
	return o;
}
function clsx() {
	for (var t, i, a = 0, o = "", s = arguments.length; a < s; a++) (t = arguments[a]) && (i = r(t)) && (o && (o += " "), o += i);
	return o;
}
var falsyToString = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t;
const cx = clsx, cva = (t, i) => (a) => {
	if (i?.variants == null) return cx(t, a?.class, a?.className);
	let { variants: o, defaultVariants: s } = i, c = Object.keys(o).map((t) => {
		let i = a?.[t], c = s?.[t];
		if (i === null) return null;
		let l = falsyToString(i) || falsyToString(c);
		return o[t][l];
	}), l = a && Object.entries(a).reduce((t, i) => {
		let [a, o] = i;
		return o === void 0 || (t[a] = o), t;
	}, {});
	return cx(t, c, i?.compoundVariants?.reduce((t, i) => {
		let { class: a, className: o, ...c } = i;
		return Object.entries(c).every((t) => {
			let [i, a] = t;
			return Array.isArray(a) ? a.includes({
				...s,
				...l
			}[i]) : {
				...s,
				...l
			}[i] === a;
		}) ? [
			...t,
			a,
			o
		] : t;
	}, []), a?.class, a?.className);
};
var concatArrays = (t, i) => {
	let a = Array(t.length + i.length);
	for (let i = 0; i < t.length; i++) a[i] = t[i];
	for (let o = 0; o < i.length; o++) a[t.length + o] = i[o];
	return a;
}, createClassValidatorObject = (t, i) => ({
	classGroupId: t,
	validator: i
}), createClassPartObject = (t = /* @__PURE__ */ new Map(), i = null, a) => ({
	nextPart: t,
	validators: i,
	classGroupId: a
}), CLASS_PART_SEPARATOR = "-", EMPTY_CONFLICTS = [], ARBITRARY_PROPERTY_PREFIX = "arbitrary..", createClassGroupUtils = (t) => {
	let i = createClassMap(t), { conflictingClassGroups: a, conflictingClassGroupModifiers: o } = t;
	return {
		getClassGroupId: (t) => {
			if (t.startsWith("[") && t.endsWith("]")) return getGroupIdForArbitraryProperty(t);
			let a = t.split(CLASS_PART_SEPARATOR);
			return getGroupRecursive(a, a[0] === "" && a.length > 1 ? 1 : 0, i);
		},
		getConflictingClassGroupIds: (t, i) => {
			if (i) {
				let i = o[t], s = a[t];
				return i ? s ? concatArrays(s, i) : i : s || EMPTY_CONFLICTS;
			}
			return a[t] || EMPTY_CONFLICTS;
		}
	};
}, getGroupRecursive = (t, i, a) => {
	if (t.length - i === 0) return a.classGroupId;
	let o = t[i], s = a.nextPart.get(o);
	if (s) {
		let a = getGroupRecursive(t, i + 1, s);
		if (a) return a;
	}
	let c = a.validators;
	if (c === null) return;
	let l = i === 0 ? t.join(CLASS_PART_SEPARATOR) : t.slice(i).join(CLASS_PART_SEPARATOR), u = c.length;
	for (let t = 0; t < u; t++) {
		let i = c[t];
		if (i.validator(l)) return i.classGroupId;
	}
}, getGroupIdForArbitraryProperty = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let i = t.slice(1, -1), a = i.indexOf(":"), o = i.slice(0, a);
	return o ? ARBITRARY_PROPERTY_PREFIX + o : void 0;
})(), createClassMap = (t) => {
	let { theme: i, classGroups: a } = t;
	return processClassGroups(a, i);
}, processClassGroups = (t, i) => {
	let a = createClassPartObject();
	for (let o in t) {
		let s = t[o];
		processClassesRecursively(s, a, o, i);
	}
	return a;
}, processClassesRecursively = (t, i, a, o) => {
	let s = t.length;
	for (let c = 0; c < s; c++) {
		let s = t[c];
		processClassDefinition(s, i, a, o);
	}
}, processClassDefinition = (t, i, a, o) => {
	if (typeof t == "string") {
		processStringDefinition(t, i, a);
		return;
	}
	if (typeof t == "function") {
		processFunctionDefinition(t, i, a, o);
		return;
	}
	processObjectDefinition(t, i, a, o);
}, processStringDefinition = (t, i, a) => {
	let o = t === "" ? i : getPart(i, t);
	o.classGroupId = a;
}, processFunctionDefinition = (t, i, a, o) => {
	if (isThemeGetter(t)) {
		processClassesRecursively(t(o), i, a, o);
		return;
	}
	i.validators === null && (i.validators = []), i.validators.push(createClassValidatorObject(a, t));
}, processObjectDefinition = (t, i, a, o) => {
	let s = Object.entries(t), c = s.length;
	for (let t = 0; t < c; t++) {
		let [c, l] = s[t];
		processClassesRecursively(l, getPart(i, c), a, o);
	}
}, getPart = (t, i) => {
	let a = t, o = i.split(CLASS_PART_SEPARATOR), s = o.length;
	for (let t = 0; t < s; t++) {
		let i = o[t], s = a.nextPart.get(i);
		s || (s = createClassPartObject(), a.nextPart.set(i, s)), a = s;
	}
	return a;
}, isThemeGetter = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, createLruCache = (t) => {
	if (t < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let i = 0, a = Object.create(null), o = Object.create(null), s = (s, c) => {
		a[s] = c, i++, i > t && (i = 0, o = a, a = Object.create(null));
	};
	return {
		get(t) {
			let i = a[t];
			if (i !== void 0) return i;
			if ((i = o[t]) !== void 0) return s(t, i), i;
		},
		set(t, i) {
			t in a ? a[t] = i : s(t, i);
		}
	};
}, IMPORTANT_MODIFIER = "!", MODIFIER_SEPARATOR = ":", EMPTY_MODIFIERS = [], createResultObject = (t, i, a, o, s) => ({
	modifiers: t,
	hasImportantModifier: i,
	baseClassName: a,
	maybePostfixModifierPosition: o,
	isExternal: s
}), createParseClassName = (t) => {
	let { prefix: i, experimentalParseClassName: a } = t, o = (t) => {
		let i = [], a = 0, o = 0, s = 0, c, l = t.length;
		for (let u = 0; u < l; u++) {
			let l = t[u];
			if (a === 0 && o === 0) {
				if (l === MODIFIER_SEPARATOR) {
					i.push(t.slice(s, u)), s = u + 1;
					continue;
				}
				if (l === "/") {
					c = u;
					continue;
				}
			}
			l === "[" ? a++ : l === "]" ? a-- : l === "(" ? o++ : l === ")" && o--;
		}
		let u = i.length === 0 ? t : t.slice(s), d = u, f = !1;
		u.endsWith(IMPORTANT_MODIFIER) ? (d = u.slice(0, -1), f = !0) : u.startsWith(IMPORTANT_MODIFIER) && (d = u.slice(1), f = !0);
		let p = c && c > s ? c - s : void 0;
		return createResultObject(i, f, d, p);
	};
	if (i) {
		let t = i + MODIFIER_SEPARATOR, a = o;
		o = (i) => i.startsWith(t) ? a(i.slice(t.length)) : createResultObject(EMPTY_MODIFIERS, !1, i, void 0, !0);
	}
	if (a) {
		let t = o;
		o = (i) => a({
			className: i,
			parseClassName: t
		});
	}
	return o;
}, createSortModifiers = (t) => {
	let i = /* @__PURE__ */ new Map();
	return t.orderSensitiveModifiers.forEach((t, a) => {
		i.set(t, 1e6 + a);
	}), (t) => {
		let a = [], o = [];
		for (let s = 0; s < t.length; s++) {
			let c = t[s], l = c[0] === "[", u = i.has(c);
			l || u ? (o.length > 0 && (o.sort(), a.push(...o), o = []), a.push(c)) : o.push(c);
		}
		return o.length > 0 && (o.sort(), a.push(...o)), a;
	};
}, createConfigUtils = (t) => ({
	cache: createLruCache(t.cacheSize),
	parseClassName: createParseClassName(t),
	sortModifiers: createSortModifiers(t),
	...createClassGroupUtils(t)
}), SPLIT_CLASSES_REGEX = /\s+/, mergeClassList = (t, i) => {
	let { parseClassName: a, getClassGroupId: o, getConflictingClassGroupIds: s, sortModifiers: c } = i, l = [], u = t.trim().split(SPLIT_CLASSES_REGEX), d = "";
	for (let t = u.length - 1; t >= 0; --t) {
		let i = u[t], { isExternal: f, modifiers: p, hasImportantModifier: m, baseClassName: h, maybePostfixModifierPosition: g } = a(i);
		if (f) {
			d = i + (d.length > 0 ? " " + d : d);
			continue;
		}
		let _ = !!g, v = o(_ ? h.substring(0, g) : h);
		if (!v) {
			if (!_) {
				d = i + (d.length > 0 ? " " + d : d);
				continue;
			}
			if (v = o(h), !v) {
				d = i + (d.length > 0 ? " " + d : d);
				continue;
			}
			_ = !1;
		}
		let y = p.length === 0 ? "" : p.length === 1 ? p[0] : c(p).join(":"), b = m ? y + IMPORTANT_MODIFIER : y, x = b + v;
		if (l.indexOf(x) > -1) continue;
		l.push(x);
		let S = s(v, _);
		for (let t = 0; t < S.length; ++t) {
			let i = S[t];
			l.push(b + i);
		}
		d = i + (d.length > 0 ? " " + d : d);
	}
	return d;
}, twJoin = (...t) => {
	let i = 0, a, o, s = "";
	for (; i < t.length;) (a = t[i++]) && (o = toValue(a)) && (s && (s += " "), s += o);
	return s;
}, toValue = (t) => {
	if (typeof t == "string") return t;
	let i, a = "";
	for (let o = 0; o < t.length; o++) t[o] && (i = toValue(t[o])) && (a && (a += " "), a += i);
	return a;
}, createTailwindMerge = (t, ...i) => {
	let a, o, s, c, l = (l) => (a = createConfigUtils(i.reduce((t, i) => i(t), t())), o = a.cache.get, s = a.cache.set, c = u, u(l)), u = (t) => {
		let i = o(t);
		if (i) return i;
		let c = mergeClassList(t, a);
		return s(t, c), c;
	};
	return c = l, (...t) => c(twJoin(...t));
}, fallbackThemeArr = [], fromTheme = (t) => {
	let i = (i) => i[t] || fallbackThemeArr;
	return i.isThemeGetter = !0, i;
}, arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, isFraction = (t) => fractionRegex.test(t), isNumber = (t) => !!t && !Number.isNaN(Number(t)), isInteger = (t) => !!t && Number.isInteger(Number(t)), isPercent = (t) => t.endsWith("%") && isNumber(t.slice(0, -1)), isTshirtSize = (t) => tshirtUnitRegex.test(t), isAny = () => !0, isLengthOnly = (t) => lengthUnitRegex.test(t) && !colorFunctionRegex.test(t), isNever = () => !1, isShadow = (t) => shadowRegex.test(t), isImage = (t) => imageRegex.test(t), isAnyNonArbitrary = (t) => !isArbitraryValue(t) && !isArbitraryVariable(t), isArbitrarySize = (t) => getIsArbitraryValue(t, isLabelSize, isNever), isArbitraryValue = (t) => arbitraryValueRegex.test(t), isArbitraryLength = (t) => getIsArbitraryValue(t, isLabelLength, isLengthOnly), isArbitraryNumber = (t) => getIsArbitraryValue(t, isLabelNumber, isNumber), isArbitraryWeight = (t) => getIsArbitraryValue(t, isLabelWeight, isAny), isArbitraryFamilyName = (t) => getIsArbitraryValue(t, isLabelFamilyName, isNever), isArbitraryPosition = (t) => getIsArbitraryValue(t, isLabelPosition, isNever), isArbitraryImage = (t) => getIsArbitraryValue(t, isLabelImage, isImage), isArbitraryShadow = (t) => getIsArbitraryValue(t, isLabelShadow, isShadow), isArbitraryVariable = (t) => arbitraryVariableRegex.test(t), isArbitraryVariableLength = (t) => getIsArbitraryVariable(t, isLabelLength), isArbitraryVariableFamilyName = (t) => getIsArbitraryVariable(t, isLabelFamilyName), isArbitraryVariablePosition = (t) => getIsArbitraryVariable(t, isLabelPosition), isArbitraryVariableSize = (t) => getIsArbitraryVariable(t, isLabelSize), isArbitraryVariableImage = (t) => getIsArbitraryVariable(t, isLabelImage), isArbitraryVariableShadow = (t) => getIsArbitraryVariable(t, isLabelShadow, !0), isArbitraryVariableWeight = (t) => getIsArbitraryVariable(t, isLabelWeight, !0), getIsArbitraryValue = (t, i, a) => {
	let o = arbitraryValueRegex.exec(t);
	return o ? o[1] ? i(o[1]) : a(o[2]) : !1;
}, getIsArbitraryVariable = (t, i, a = !1) => {
	let o = arbitraryVariableRegex.exec(t);
	return o ? o[1] ? i(o[1]) : a : !1;
}, isLabelPosition = (t) => t === "position" || t === "percentage", isLabelImage = (t) => t === "image" || t === "url", isLabelSize = (t) => t === "length" || t === "size" || t === "bg-size", isLabelLength = (t) => t === "length", isLabelNumber = (t) => t === "number", isLabelFamilyName = (t) => t === "family-name", isLabelWeight = (t) => t === "number" || t === "weight", isLabelShadow = (t) => t === "shadow", twMerge = /* @__PURE__ */ createTailwindMerge(() => {
	let t = fromTheme("color"), i = fromTheme("font"), a = fromTheme("text"), o = fromTheme("font-weight"), s = fromTheme("tracking"), c = fromTheme("leading"), l = fromTheme("breakpoint"), u = fromTheme("container"), d = fromTheme("spacing"), f = fromTheme("radius"), p = fromTheme("shadow"), m = fromTheme("inset-shadow"), h = fromTheme("text-shadow"), g = fromTheme("drop-shadow"), _ = fromTheme("blur"), v = fromTheme("perspective"), y = fromTheme("aspect"), b = fromTheme("ease"), x = fromTheme("animate"), S = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], C = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], w = () => [
		...C(),
		isArbitraryVariable,
		isArbitraryValue
	], T = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], E = () => [
		"auto",
		"contain",
		"none"
	], D = () => [
		isArbitraryVariable,
		isArbitraryValue,
		d
	], O = () => [
		isFraction,
		"full",
		"auto",
		...D()
	], k = () => [
		isInteger,
		"none",
		"subgrid",
		isArbitraryVariable,
		isArbitraryValue
	], A = () => [
		"auto",
		{ span: [
			"full",
			isInteger,
			isArbitraryVariable,
			isArbitraryValue
		] },
		isInteger,
		isArbitraryVariable,
		isArbitraryValue
	], j = () => [
		isInteger,
		"auto",
		isArbitraryVariable,
		isArbitraryValue
	], M = () => [
		"auto",
		"min",
		"max",
		"fr",
		isArbitraryVariable,
		isArbitraryValue
	], N = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], P = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], F = () => ["auto", ...D()], I = () => [
		isFraction,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...D()
	], L = () => [
		isFraction,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...D()
	], R = () => [
		isFraction,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...D()
	], z = () => [
		t,
		isArbitraryVariable,
		isArbitraryValue
	], B = () => [
		...C(),
		isArbitraryVariablePosition,
		isArbitraryPosition,
		{ position: [isArbitraryVariable, isArbitraryValue] }
	], V = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], H = () => [
		"auto",
		"cover",
		"contain",
		isArbitraryVariableSize,
		isArbitrarySize,
		{ size: [isArbitraryVariable, isArbitraryValue] }
	], U = () => [
		isPercent,
		isArbitraryVariableLength,
		isArbitraryLength
	], W = () => [
		"",
		"none",
		"full",
		f,
		isArbitraryVariable,
		isArbitraryValue
	], G = () => [
		"",
		isNumber,
		isArbitraryVariableLength,
		isArbitraryLength
	], K = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], q = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], J = () => [
		isNumber,
		isPercent,
		isArbitraryVariablePosition,
		isArbitraryPosition
	], Y = () => [
		"",
		"none",
		_,
		isArbitraryVariable,
		isArbitraryValue
	], X = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	], Z = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	], Q = () => [
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	], $ = () => [
		isFraction,
		"full",
		...D()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [isTshirtSize],
			breakpoint: [isTshirtSize],
			color: [isAny],
			container: [isTshirtSize],
			"drop-shadow": [isTshirtSize],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [isAnyNonArbitrary],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [isTshirtSize],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [isTshirtSize],
			shadow: [isTshirtSize],
			spacing: ["px", isNumber],
			text: [isTshirtSize],
			"text-shadow": [isTshirtSize],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				isFraction,
				isArbitraryValue,
				isArbitraryVariable,
				y
			] }],
			container: ["container"],
			columns: [{ columns: [
				isNumber,
				isArbitraryValue,
				isArbitraryVariable,
				u
			] }],
			"break-after": [{ "break-after": S() }],
			"break-before": [{ "break-before": S() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: w() }],
			overflow: [{ overflow: T() }],
			"overflow-x": [{ "overflow-x": T() }],
			"overflow-y": [{ "overflow-y": T() }],
			overscroll: [{ overscroll: E() }],
			"overscroll-x": [{ "overscroll-x": E() }],
			"overscroll-y": [{ "overscroll-y": E() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: O() }],
			"inset-x": [{ "inset-x": O() }],
			"inset-y": [{ "inset-y": O() }],
			start: [{
				"inset-s": O(),
				start: O()
			}],
			end: [{
				"inset-e": O(),
				end: O()
			}],
			"inset-bs": [{ "inset-bs": O() }],
			"inset-be": [{ "inset-be": O() }],
			top: [{ top: O() }],
			right: [{ right: O() }],
			bottom: [{ bottom: O() }],
			left: [{ left: O() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				isInteger,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			basis: [{ basis: [
				isFraction,
				"full",
				"auto",
				u,
				...D()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				isNumber,
				isFraction,
				"auto",
				"initial",
				"none",
				isArbitraryValue
			] }],
			grow: [{ grow: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			shrink: [{ shrink: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			order: [{ order: [
				isInteger,
				"first",
				"last",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"grid-cols": [{ "grid-cols": k() }],
			"col-start-end": [{ col: A() }],
			"col-start": [{ "col-start": j() }],
			"col-end": [{ "col-end": j() }],
			"grid-rows": [{ "grid-rows": k() }],
			"row-start-end": [{ row: A() }],
			"row-start": [{ "row-start": j() }],
			"row-end": [{ "row-end": j() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": M() }],
			"auto-rows": [{ "auto-rows": M() }],
			gap: [{ gap: D() }],
			"gap-x": [{ "gap-x": D() }],
			"gap-y": [{ "gap-y": D() }],
			"justify-content": [{ justify: [...N(), "normal"] }],
			"justify-items": [{ "justify-items": [...P(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...P()] }],
			"align-content": [{ content: ["normal", ...N()] }],
			"align-items": [{ items: [...P(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...P(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": N() }],
			"place-items": [{ "place-items": [...P(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...P()] }],
			p: [{ p: D() }],
			px: [{ px: D() }],
			py: [{ py: D() }],
			ps: [{ ps: D() }],
			pe: [{ pe: D() }],
			pbs: [{ pbs: D() }],
			pbe: [{ pbe: D() }],
			pt: [{ pt: D() }],
			pr: [{ pr: D() }],
			pb: [{ pb: D() }],
			pl: [{ pl: D() }],
			m: [{ m: F() }],
			mx: [{ mx: F() }],
			my: [{ my: F() }],
			ms: [{ ms: F() }],
			me: [{ me: F() }],
			mbs: [{ mbs: F() }],
			mbe: [{ mbe: F() }],
			mt: [{ mt: F() }],
			mr: [{ mr: F() }],
			mb: [{ mb: F() }],
			ml: [{ ml: F() }],
			"space-x": [{ "space-x": D() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": D() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: I() }],
			"inline-size": [{ inline: ["auto", ...L()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...L()] }],
			"max-inline-size": [{ "max-inline": ["none", ...L()] }],
			"block-size": [{ block: ["auto", ...R()] }],
			"min-block-size": [{ "min-block": ["auto", ...R()] }],
			"max-block-size": [{ "max-block": ["none", ...R()] }],
			w: [{ w: [
				u,
				"screen",
				...I()
			] }],
			"min-w": [{ "min-w": [
				u,
				"screen",
				"none",
				...I()
			] }],
			"max-w": [{ "max-w": [
				u,
				"screen",
				"none",
				"prose",
				{ screen: [l] },
				...I()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...I()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...I()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...I()
			] }],
			"font-size": [{ text: [
				"base",
				a,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				o,
				isArbitraryVariableWeight,
				isArbitraryWeight
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				isPercent,
				isArbitraryValue
			] }],
			"font-family": [{ font: [
				isArbitraryVariableFamilyName,
				isArbitraryFamilyName,
				i
			] }],
			"font-features": [{ "font-features": [isArbitraryValue] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				s,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"line-clamp": [{ "line-clamp": [
				isNumber,
				"none",
				isArbitraryVariable,
				isArbitraryNumber
			] }],
			leading: [{ leading: [c, ...D()] }],
			"list-image": [{ "list-image": [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: z() }],
			"text-color": [{ text: z() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...K(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				isNumber,
				"from-font",
				"auto",
				isArbitraryVariable,
				isArbitraryLength
			] }],
			"text-decoration-color": [{ decoration: z() }],
			"underline-offset": [{ "underline-offset": [
				isNumber,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: D() }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: B() }],
			"bg-repeat": [{ bg: V() }],
			"bg-size": [{ bg: H() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					],
					radial: [
						"",
						isArbitraryVariable,
						isArbitraryValue
					],
					conic: [
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					]
				},
				isArbitraryVariableImage,
				isArbitraryImage
			] }],
			"bg-color": [{ bg: z() }],
			"gradient-from-pos": [{ from: U() }],
			"gradient-via-pos": [{ via: U() }],
			"gradient-to-pos": [{ to: U() }],
			"gradient-from": [{ from: z() }],
			"gradient-via": [{ via: z() }],
			"gradient-to": [{ to: z() }],
			rounded: [{ rounded: W() }],
			"rounded-s": [{ "rounded-s": W() }],
			"rounded-e": [{ "rounded-e": W() }],
			"rounded-t": [{ "rounded-t": W() }],
			"rounded-r": [{ "rounded-r": W() }],
			"rounded-b": [{ "rounded-b": W() }],
			"rounded-l": [{ "rounded-l": W() }],
			"rounded-ss": [{ "rounded-ss": W() }],
			"rounded-se": [{ "rounded-se": W() }],
			"rounded-ee": [{ "rounded-ee": W() }],
			"rounded-es": [{ "rounded-es": W() }],
			"rounded-tl": [{ "rounded-tl": W() }],
			"rounded-tr": [{ "rounded-tr": W() }],
			"rounded-br": [{ "rounded-br": W() }],
			"rounded-bl": [{ "rounded-bl": W() }],
			"border-w": [{ border: G() }],
			"border-w-x": [{ "border-x": G() }],
			"border-w-y": [{ "border-y": G() }],
			"border-w-s": [{ "border-s": G() }],
			"border-w-e": [{ "border-e": G() }],
			"border-w-bs": [{ "border-bs": G() }],
			"border-w-be": [{ "border-be": G() }],
			"border-w-t": [{ "border-t": G() }],
			"border-w-r": [{ "border-r": G() }],
			"border-w-b": [{ "border-b": G() }],
			"border-w-l": [{ "border-l": G() }],
			"divide-x": [{ "divide-x": G() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": G() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...K(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...K(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: z() }],
			"border-color-x": [{ "border-x": z() }],
			"border-color-y": [{ "border-y": z() }],
			"border-color-s": [{ "border-s": z() }],
			"border-color-e": [{ "border-e": z() }],
			"border-color-bs": [{ "border-bs": z() }],
			"border-color-be": [{ "border-be": z() }],
			"border-color-t": [{ "border-t": z() }],
			"border-color-r": [{ "border-r": z() }],
			"border-color-b": [{ "border-b": z() }],
			"border-color-l": [{ "border-l": z() }],
			"divide-color": [{ divide: z() }],
			"outline-style": [{ outline: [
				...K(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"outline-w": [{ outline: [
				"",
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			"outline-color": [{ outline: z() }],
			shadow: [{ shadow: [
				"",
				"none",
				p,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"shadow-color": [{ shadow: z() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				m,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"inset-shadow-color": [{ "inset-shadow": z() }],
			"ring-w": [{ ring: G() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: z() }],
			"ring-offset-w": [{ "ring-offset": [isNumber, isArbitraryLength] }],
			"ring-offset-color": [{ "ring-offset": z() }],
			"inset-ring-w": [{ "inset-ring": G() }],
			"inset-ring-color": [{ "inset-ring": z() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				h,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"text-shadow-color": [{ "text-shadow": z() }],
			opacity: [{ opacity: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"mix-blend": [{ "mix-blend": [
				...q(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": q() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [isNumber] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": J() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": J() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": z() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": z() }],
			"mask-image-t-from-pos": [{ "mask-t-from": J() }],
			"mask-image-t-to-pos": [{ "mask-t-to": J() }],
			"mask-image-t-from-color": [{ "mask-t-from": z() }],
			"mask-image-t-to-color": [{ "mask-t-to": z() }],
			"mask-image-r-from-pos": [{ "mask-r-from": J() }],
			"mask-image-r-to-pos": [{ "mask-r-to": J() }],
			"mask-image-r-from-color": [{ "mask-r-from": z() }],
			"mask-image-r-to-color": [{ "mask-r-to": z() }],
			"mask-image-b-from-pos": [{ "mask-b-from": J() }],
			"mask-image-b-to-pos": [{ "mask-b-to": J() }],
			"mask-image-b-from-color": [{ "mask-b-from": z() }],
			"mask-image-b-to-color": [{ "mask-b-to": z() }],
			"mask-image-l-from-pos": [{ "mask-l-from": J() }],
			"mask-image-l-to-pos": [{ "mask-l-to": J() }],
			"mask-image-l-from-color": [{ "mask-l-from": z() }],
			"mask-image-l-to-color": [{ "mask-l-to": z() }],
			"mask-image-x-from-pos": [{ "mask-x-from": J() }],
			"mask-image-x-to-pos": [{ "mask-x-to": J() }],
			"mask-image-x-from-color": [{ "mask-x-from": z() }],
			"mask-image-x-to-color": [{ "mask-x-to": z() }],
			"mask-image-y-from-pos": [{ "mask-y-from": J() }],
			"mask-image-y-to-pos": [{ "mask-y-to": J() }],
			"mask-image-y-from-color": [{ "mask-y-from": z() }],
			"mask-image-y-to-color": [{ "mask-y-to": z() }],
			"mask-image-radial": [{ "mask-radial": [isArbitraryVariable, isArbitraryValue] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": J() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": J() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": z() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": z() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": C() }],
			"mask-image-conic-pos": [{ "mask-conic": [isNumber] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": J() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": J() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": z() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": z() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: B() }],
			"mask-repeat": [{ mask: V() }],
			"mask-size": [{ mask: H() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			filter: [{ filter: [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			blur: [{ blur: Y() }],
			brightness: [{ brightness: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			contrast: [{ contrast: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				g,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"drop-shadow-color": [{ "drop-shadow": z() }],
			grayscale: [{ grayscale: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"hue-rotate": [{ "hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			invert: [{ invert: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			saturate: [{ saturate: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			sepia: [{ sepia: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-blur": [{ "backdrop-blur": Y() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": D() }],
			"border-spacing-x": [{ "border-spacing-x": D() }],
			"border-spacing-y": [{ "border-spacing-y": D() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				isNumber,
				"initial",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				b,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			delay: [{ delay: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			animate: [{ animate: [
				"none",
				x,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				v,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"perspective-origin": [{ "perspective-origin": w() }],
			rotate: [{ rotate: X() }],
			"rotate-x": [{ "rotate-x": X() }],
			"rotate-y": [{ "rotate-y": X() }],
			"rotate-z": [{ "rotate-z": X() }],
			scale: [{ scale: Z() }],
			"scale-x": [{ "scale-x": Z() }],
			"scale-y": [{ "scale-y": Z() }],
			"scale-z": [{ "scale-z": Z() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: Q() }],
			"skew-x": [{ "skew-x": Q() }],
			"skew-y": [{ "skew-y": Q() }],
			transform: [{ transform: [
				isArbitraryVariable,
				isArbitraryValue,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: w() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: $() }],
			"translate-x": [{ "translate-x": $() }],
			"translate-y": [{ "translate-y": $() }],
			"translate-z": [{ "translate-z": $() }],
			"translate-none": ["translate-none"],
			accent: [{ accent: z() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: z() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scroll-m": [{ "scroll-m": D() }],
			"scroll-mx": [{ "scroll-mx": D() }],
			"scroll-my": [{ "scroll-my": D() }],
			"scroll-ms": [{ "scroll-ms": D() }],
			"scroll-me": [{ "scroll-me": D() }],
			"scroll-mbs": [{ "scroll-mbs": D() }],
			"scroll-mbe": [{ "scroll-mbe": D() }],
			"scroll-mt": [{ "scroll-mt": D() }],
			"scroll-mr": [{ "scroll-mr": D() }],
			"scroll-mb": [{ "scroll-mb": D() }],
			"scroll-ml": [{ "scroll-ml": D() }],
			"scroll-p": [{ "scroll-p": D() }],
			"scroll-px": [{ "scroll-px": D() }],
			"scroll-py": [{ "scroll-py": D() }],
			"scroll-ps": [{ "scroll-ps": D() }],
			"scroll-pe": [{ "scroll-pe": D() }],
			"scroll-pbs": [{ "scroll-pbs": D() }],
			"scroll-pbe": [{ "scroll-pbe": D() }],
			"scroll-pt": [{ "scroll-pt": D() }],
			"scroll-pr": [{ "scroll-pr": D() }],
			"scroll-pb": [{ "scroll-pb": D() }],
			"scroll-pl": [{ "scroll-pl": D() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			fill: [{ fill: ["none", ...z()] }],
			"stroke-w": [{ stroke: [
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength,
				isArbitraryNumber
			] }],
			stroke: [{ stroke: ["none", ...z()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
function cn(...t) {
	return twMerge(clsx(t));
}
var buttonVariants = cva("inline-flex items-center justify-center capitalize gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
			outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2 has-[>svg]:px-3",
			sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
			lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
			icon: "size-9",
			"icon-sm": "size-8",
			"icon-lg": "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), Button = React$1.forwardRef(({ className: t, variant: i, size: a, asChild: o = !1, ...c }, l) => /* @__PURE__ */ jsx(o ? Slot : "button", {
	className: cn(buttonVariants({
		variant: i,
		size: a,
		className: t
	})),
	ref: l,
	...c
}));
Button.displayName = "Button", typeof window < "u" && window.document && window.document.createElement;
function composeEventHandlers(t, i, { checkForDefaultPrevented: a = !0 } = {}) {
	return function(o) {
		if (t?.(o), a === !1 || !o.defaultPrevented) return i?.(o);
	};
}
function createContextScope(t, a = []) {
	let o = [];
	function c(a, c) {
		let l = React$1.createContext(c), u = o.length;
		o = [...o, c];
		let d = (a) => {
			let { scope: o, children: c, ...d } = a, f = o?.[t]?.[u] || l, p = React$1.useMemo(() => d, Object.values(d));
			return /* @__PURE__ */ jsx(f.Provider, {
				value: p,
				children: c
			});
		};
		d.displayName = a + "Provider";
		function f(o, s) {
			let d = s?.[t]?.[u] || l, f = React$1.useContext(d);
			if (f) return f;
			if (c !== void 0) return c;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [d, f];
	}
	let l = () => {
		let a = o.map((t) => React$1.createContext(t));
		return function(o) {
			let s = o?.[t] || a;
			return React$1.useMemo(() => ({ [`__scope${t}`]: {
				...o,
				[t]: s
			} }), [o, s]);
		};
	};
	return l.scopeName = t, [c, composeContextScopes$1(l, ...a)];
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
			let s = o.reduce((i, { useScope: a, scopeName: o }) => {
				let s = a(t)[`__scope${o}`];
				return {
					...i,
					...s
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${a.scopeName}`]: s }), [s]);
		};
	};
	return o.scopeName = a.scopeName, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$5(t) {
	let a = /* @__PURE__ */ createSlotClone$5(t), o = React$1.forwardRef((t, o) => {
		let { children: c, ...l } = t, u = React$1.Children.toArray(c), d = u.find(isSlottable$5);
		if (d) {
			let t = d.props.children, c = u.map((a) => a === d ? React$1.Children.count(t) > 1 ? React$1.Children.only(null) : React$1.isValidElement(t) ? t.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...l,
				ref: o,
				children: React$1.isValidElement(t) ? React$1.cloneElement(t, void 0, c) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...l,
			ref: o,
			children: c
		});
	});
	return o.displayName = `${t}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$5(t) {
	let a = React$1.forwardRef((t, a) => {
		let { children: o, ...s } = t;
		if (React$1.isValidElement(o)) {
			let t = getElementRef$6(o), c = mergeProps$5(s, o.props);
			return o.type !== React$1.Fragment && (c.ref = a ? composeRefs(a, t) : t), React$1.cloneElement(o, c);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${t}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$5 = Symbol("radix.slottable");
function isSlottable$5(t) {
	return React$1.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === SLOTTABLE_IDENTIFIER$5;
}
function mergeProps$5(t, i) {
	let a = { ...i };
	for (let o in i) {
		let s = t[o], c = i[o];
		/^on[A-Z]/.test(o) ? s && c ? a[o] = (...t) => {
			let i = c(...t);
			return s(...t), i;
		} : s && (a[o] = s) : o === "style" ? a[o] = {
			...s,
			...c
		} : o === "className" && (a[o] = [s, c].filter(Boolean).join(" "));
	}
	return {
		...t,
		...a
	};
}
function getElementRef$6(t) {
	let i = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning;
	return a ? t.ref : (i = Object.getOwnPropertyDescriptor(t, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning, a ? t.props.ref : t.props.ref || t.ref);
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
	let o = /* @__PURE__ */ createSlot$5(`Primitive.${a}`), c = React$1.forwardRef((t, i) => {
		let { asChild: c, ...l } = t, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: i
		});
	});
	return c.displayName = `Primitive.${a}`, {
		...t,
		[a]: c
	};
}, {});
function dispatchDiscreteCustomEvent(t, i) {
	t && ReactDOM$1.flushSync(() => t.dispatchEvent(i));
}
function useCallbackRef(t) {
	let a = React$1.useRef(t);
	return React$1.useEffect(() => {
		a.current = t;
	}), React$1.useMemo(() => (...t) => a.current?.(...t), []);
}
function useEscapeKeydown(t, a = globalThis?.document) {
	let o = useCallbackRef(t);
	React$1.useEffect(() => {
		let t = (t) => {
			t.key === "Escape" && o(t);
		};
		return a.addEventListener("keydown", t, { capture: !0 }), () => a.removeEventListener("keydown", t, { capture: !0 });
	}, [o, a]);
}
var DISMISSABLE_LAYER_NAME = "DismissableLayer", CONTEXT_UPDATE = "dismissableLayer.update", POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside", FOCUS_OUTSIDE = "dismissableLayer.focusOutside", originalBodyPointerEvents, DismissableLayerContext = React$1.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), DismissableLayer = React$1.forwardRef((t, a) => {
	let { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: c, onPointerDownOutside: l, onFocusOutside: u, onInteractOutside: d, onDismiss: f, ...p } = t, h = React$1.useContext(DismissableLayerContext), [g, _] = React$1.useState(null), v = g?.ownerDocument ?? globalThis?.document, [, y] = React$1.useState({}), b = useComposedRefs(a, (t) => _(t)), x = Array.from(h.layers), [S] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), C = x.indexOf(S), w = g ? x.indexOf(g) : -1, T = h.layersWithOutsidePointerEventsDisabled.size > 0, E = w >= C, D = usePointerDownOutside((t) => {
		let i = t.target, a = [...h.branches].some((t) => t.contains(i));
		!E || a || (l?.(t), d?.(t), t.defaultPrevented || f?.());
	}, v), O = useFocusOutside((t) => {
		let i = t.target;
		[...h.branches].some((t) => t.contains(i)) || (u?.(t), d?.(t), t.defaultPrevented || f?.());
	}, v);
	return useEscapeKeydown((t) => {
		w === h.layers.size - 1 && (c?.(t), !t.defaultPrevented && f && (t.preventDefault(), f()));
	}, v), React$1.useEffect(() => {
		if (g) return o && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (originalBodyPointerEvents = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(g)), h.layers.add(g), dispatchUpdate(), () => {
			o && h.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = originalBodyPointerEvents);
		};
	}, [
		g,
		v,
		o,
		h
	]), React$1.useEffect(() => () => {
		g && (h.layers.delete(g), h.layersWithOutsidePointerEventsDisabled.delete(g), dispatchUpdate());
	}, [g, h]), React$1.useEffect(() => {
		let t = () => y({});
		return document.addEventListener(CONTEXT_UPDATE, t), () => document.removeEventListener(CONTEXT_UPDATE, t);
	}, []), /* @__PURE__ */ jsx(Primitive$5.div, {
		...p,
		ref: b,
		style: {
			pointerEvents: T ? E ? "auto" : "none" : void 0,
			...t.style
		},
		onFocusCapture: composeEventHandlers(t.onFocusCapture, O.onFocusCapture),
		onBlurCapture: composeEventHandlers(t.onBlurCapture, O.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(t.onPointerDownCapture, D.onPointerDownCapture)
	});
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch", DismissableLayerBranch = React$1.forwardRef((t, a) => {
	let o = React$1.useContext(DismissableLayerContext), c = React$1.useRef(null), l = useComposedRefs(a, c);
	return React$1.useEffect(() => {
		let t = c.current;
		if (t) return o.branches.add(t), () => {
			o.branches.delete(t);
		};
	}, [o.branches]), /* @__PURE__ */ jsx(Primitive$5.div, {
		...t,
		ref: l
	});
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(t, a = globalThis?.document) {
	let o = useCallbackRef(t), s = React$1.useRef(!1), c = React$1.useRef(() => {});
	return React$1.useEffect(() => {
		let t = (t) => {
			if (t.target && !s.current) {
				let i = function() {
					handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, o, s, { discrete: !0 });
				}, s = { originalEvent: t };
				t.pointerType === "touch" ? (a.removeEventListener("click", c.current), c.current = i, a.addEventListener("click", c.current, { once: !0 })) : i();
			} else a.removeEventListener("click", c.current);
			s.current = !1;
		}, i = window.setTimeout(() => {
			a.addEventListener("pointerdown", t);
		}, 0);
		return () => {
			window.clearTimeout(i), a.removeEventListener("pointerdown", t), a.removeEventListener("click", c.current);
		};
	}, [a, o]), { onPointerDownCapture: () => s.current = !0 };
}
function useFocusOutside(t, a = globalThis?.document) {
	let o = useCallbackRef(t), s = React$1.useRef(!1);
	return React$1.useEffect(() => {
		let t = (t) => {
			t.target && !s.current && handleAndDispatchCustomEvent(FOCUS_OUTSIDE, o, { originalEvent: t }, { discrete: !1 });
		};
		return a.addEventListener("focusin", t), () => a.removeEventListener("focusin", t);
	}, [a, o]), {
		onFocusCapture: () => s.current = !0,
		onBlurCapture: () => s.current = !1
	};
}
function dispatchUpdate() {
	let t = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(t);
}
function handleAndDispatchCustomEvent(t, i, a, { discrete: o }) {
	let s = a.originalEvent.target, c = new CustomEvent(t, {
		bubbles: !1,
		cancelable: !0,
		detail: a
	});
	i && s.addEventListener(t, i, { once: !0 }), o ? dispatchDiscreteCustomEvent(s, c) : s.dispatchEvent(c);
}
var useLayoutEffect2 = globalThis?.document ? React$1.useLayoutEffect : () => {}, useReactId = React$1.useId || (() => void 0), count = 0;
function useId$1(t) {
	let [a, o] = React$1.useState(useReactId());
	return useLayoutEffect2(() => {
		t || o((t) => t ?? String(count++));
	}, [t]), t || (a ? `radix-${a}` : "");
}
var sides = [
	"top",
	"right",
	"bottom",
	"left"
], min = Math.min, max = Math.max, round = Math.round, floor = Math.floor, createCoords = (t) => ({
	x: t,
	y: t
}), oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function clamp(t, i, a) {
	return max(t, min(i, a));
}
function evaluate(t, i) {
	return typeof t == "function" ? t(i) : t;
}
function getSide(t) {
	return t.split("-")[0];
}
function getAlignment(t) {
	return t.split("-")[1];
}
function getOppositeAxis(t) {
	return t === "x" ? "y" : "x";
}
function getAxisLength(t) {
	return t === "y" ? "height" : "width";
}
function getSideAxis(t) {
	let i = t[0];
	return i === "t" || i === "b" ? "y" : "x";
}
function getAlignmentAxis(t) {
	return getOppositeAxis(getSideAxis(t));
}
function getAlignmentSides(t, i, a) {
	a === void 0 && (a = !1);
	let o = getAlignment(t), s = getAlignmentAxis(t), c = getAxisLength(s), l = s === "x" ? o === (a ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
	return i.reference[c] > i.floating[c] && (l = getOppositePlacement(l)), [l, getOppositePlacement(l)];
}
function getExpandedPlacements(t) {
	let i = getOppositePlacement(t);
	return [
		getOppositeAlignmentPlacement(t),
		i,
		getOppositeAlignmentPlacement(i)
	];
}
function getOppositeAlignmentPlacement(t) {
	return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
var lrPlacement = ["left", "right"], rlPlacement = ["right", "left"], tbPlacement = ["top", "bottom"], btPlacement = ["bottom", "top"];
function getSideList(t, i, a) {
	switch (t) {
		case "top":
		case "bottom": return a ? i ? rlPlacement : lrPlacement : i ? lrPlacement : rlPlacement;
		case "left":
		case "right": return i ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(t, i, a, o) {
	let s = getAlignment(t), c = getSideList(getSide(t), a === "start", o);
	return s && (c = c.map((t) => t + "-" + s), i && (c = c.concat(c.map(getOppositeAlignmentPlacement)))), c;
}
function getOppositePlacement(t) {
	let i = getSide(t);
	return oppositeSideMap[i] + t.slice(i.length);
}
function expandPaddingObject(t) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...t
	};
}
function getPaddingObject(t) {
	return typeof t == "number" ? {
		top: t,
		right: t,
		bottom: t,
		left: t
	} : expandPaddingObject(t);
}
function rectToClientRect(t) {
	let { x: i, y: a, width: o, height: s } = t;
	return {
		width: o,
		height: s,
		top: a,
		left: i,
		right: i + o,
		bottom: a + s,
		x: i,
		y: a
	};
}
function computeCoordsFromPlacement(t, i, a) {
	let { reference: o, floating: s } = t, c = getSideAxis(i), l = getAlignmentAxis(i), u = getAxisLength(l), d = getSide(i), f = c === "y", p = o.x + o.width / 2 - s.width / 2, m = o.y + o.height / 2 - s.height / 2, h = o[u] / 2 - s[u] / 2, g;
	switch (d) {
		case "top":
			g = {
				x: p,
				y: o.y - s.height
			};
			break;
		case "bottom":
			g = {
				x: p,
				y: o.y + o.height
			};
			break;
		case "right":
			g = {
				x: o.x + o.width,
				y: m
			};
			break;
		case "left":
			g = {
				x: o.x - s.width,
				y: m
			};
			break;
		default: g = {
			x: o.x,
			y: o.y
		};
	}
	switch (getAlignment(i)) {
		case "start":
			g[l] -= h * (a && f ? -1 : 1);
			break;
		case "end":
			g[l] += h * (a && f ? -1 : 1);
			break;
	}
	return g;
}
async function detectOverflow$1(t, i) {
	i === void 0 && (i = {});
	let { x: a, y: o, platform: s, rects: c, elements: l, strategy: u } = t, { boundary: d = "clippingAncestors", rootBoundary: f = "viewport", elementContext: p = "floating", altBoundary: m = !1, padding: h = 0 } = evaluate(i, t), g = getPaddingObject(h), _ = l[m ? p === "floating" ? "reference" : "floating" : p], v = rectToClientRect(await s.getClippingRect({
		element: await (s.isElement == null ? void 0 : s.isElement(_)) ?? !0 ? _ : _.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
		boundary: d,
		rootBoundary: f,
		strategy: u
	})), y = p === "floating" ? {
		x: a,
		y: o,
		width: c.floating.width,
		height: c.floating.height
	} : c.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), x = await (s.isElement == null ? void 0 : s.isElement(b)) && await (s.getScale == null ? void 0 : s.getScale(b)) || {
		x: 1,
		y: 1
	}, S = rectToClientRect(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: l,
		rect: y,
		offsetParent: b,
		strategy: u
	}) : y);
	return {
		top: (v.top - S.top + g.top) / x.y,
		bottom: (S.bottom - v.bottom + g.bottom) / x.y,
		left: (v.left - S.left + g.left) / x.x,
		right: (S.right - v.right + g.right) / x.x
	};
}
var MAX_RESET_COUNT = 50, computePosition$1 = async (t, i, a) => {
	let { placement: o = "bottom", strategy: s = "absolute", middleware: c = [], platform: l } = a, u = l.detectOverflow ? l : {
		...l,
		detectOverflow: detectOverflow$1
	}, d = await (l.isRTL == null ? void 0 : l.isRTL(i)), f = await l.getElementRects({
		reference: t,
		floating: i,
		strategy: s
	}), { x: p, y: m } = computeCoordsFromPlacement(f, o, d), h = o, g = 0, _ = {};
	for (let a = 0; a < c.length; a++) {
		let v = c[a];
		if (!v) continue;
		let { name: y, fn: b } = v, { x, y: S, data: C, reset: w } = await b({
			x: p,
			y: m,
			initialPlacement: o,
			placement: h,
			strategy: s,
			middlewareData: _,
			rects: f,
			platform: u,
			elements: {
				reference: t,
				floating: i
			}
		});
		p = x ?? p, m = S ?? m, _[y] = {
			..._[y],
			...C
		}, w && g < MAX_RESET_COUNT && (g++, typeof w == "object" && (w.placement && (h = w.placement), w.rects && (f = w.rects === !0 ? await l.getElementRects({
			reference: t,
			floating: i,
			strategy: s
		}) : w.rects), {x: p, y: m} = computeCoordsFromPlacement(f, h, d)), a = -1);
	}
	return {
		x: p,
		y: m,
		placement: h,
		strategy: s,
		middlewareData: _
	};
}, arrow$2 = (t) => ({
	name: "arrow",
	options: t,
	async fn(i) {
		let { x: a, y: o, placement: s, rects: c, platform: l, elements: u, middlewareData: d } = i, { element: f, padding: p = 0 } = evaluate(t, i) || {};
		if (f == null) return {};
		let m = getPaddingObject(p), h = {
			x: a,
			y: o
		}, g = getAlignmentAxis(s), _ = getAxisLength(g), v = await l.getDimensions(f), y = g === "y", b = y ? "top" : "left", x = y ? "bottom" : "right", S = y ? "clientHeight" : "clientWidth", C = c.reference[_] + c.reference[g] - h[g] - c.floating[_], w = h[g] - c.reference[g], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(f)), E = T ? T[S] : 0;
		(!E || !await (l.isElement == null ? void 0 : l.isElement(T))) && (E = u.floating[S] || c.floating[_]);
		let D = C / 2 - w / 2, O = E / 2 - v[_] / 2 - 1, k = min(m[b], O), A = min(m[x], O), j = k, M = E - v[_] - A, N = E / 2 - v[_] / 2 + D, P = clamp(j, N, M), F = !d.arrow && getAlignment(s) != null && N !== P && c.reference[_] / 2 - (N < j ? k : A) - v[_] / 2 < 0, I = F ? N < j ? N - j : N - M : 0;
		return {
			[g]: h[g] + I,
			data: {
				[g]: P,
				centerOffset: N - P - I,
				...F && { alignmentOffset: I }
			},
			reset: F
		};
	}
}), flip$2 = function(t) {
	return t === void 0 && (t = {}), {
		name: "flip",
		options: t,
		async fn(i) {
			var a;
			let { placement: o, middlewareData: s, rects: c, initialPlacement: l, platform: u, elements: d } = i, { mainAxis: f = !0, crossAxis: p = !0, fallbackPlacements: m, fallbackStrategy: h = "bestFit", fallbackAxisSideDirection: g = "none", flipAlignment: _ = !0, ...v } = evaluate(t, i);
			if ((a = s.arrow) != null && a.alignmentOffset) return {};
			let y = getSide(o), b = getSideAxis(l), x = getSide(l) === l, S = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), C = m || (x || !_ ? [getOppositePlacement(l)] : getExpandedPlacements(l)), w = g !== "none";
			!m && w && C.push(...getOppositeAxisPlacements(l, _, g, S));
			let T = [l, ...C], E = await u.detectOverflow(i, v), D = [], O = s.flip?.overflows || [];
			if (f && D.push(E[y]), p) {
				let t = getAlignmentSides(o, c, S);
				D.push(E[t[0]], E[t[1]]);
			}
			if (O = [...O, {
				placement: o,
				overflows: D
			}], !D.every((t) => t <= 0)) {
				let t = (s.flip?.index || 0) + 1, i = T[t];
				if (i && (!(p === "alignment" && b !== getSideAxis(i)) || O.every((t) => getSideAxis(t.placement) === b ? t.overflows[0] > 0 : !0))) return {
					data: {
						index: t,
						overflows: O
					},
					reset: { placement: i }
				};
				let a = O.filter((t) => t.overflows[0] <= 0).sort((t, i) => t.overflows[1] - i.overflows[1])[0]?.placement;
				if (!a) switch (h) {
					case "bestFit": {
						let t = O.filter((t) => {
							if (w) {
								let i = getSideAxis(t.placement);
								return i === b || i === "y";
							}
							return !0;
						}).map((t) => [t.placement, t.overflows.filter((t) => t > 0).reduce((t, i) => t + i, 0)]).sort((t, i) => t[1] - i[1])[0]?.[0];
						t && (a = t);
						break;
					}
					case "initialPlacement":
						a = l;
						break;
				}
				if (o !== a) return { reset: { placement: a } };
			}
			return {};
		}
	};
};
function getSideOffsets(t, i) {
	return {
		top: t.top - i.height,
		right: t.right - i.width,
		bottom: t.bottom - i.height,
		left: t.left - i.width
	};
}
function isAnySideFullyClipped(t) {
	return sides.some((i) => t[i] >= 0);
}
var hide$2 = function(t) {
	return t === void 0 && (t = {}), {
		name: "hide",
		options: t,
		async fn(i) {
			let { rects: a, platform: o } = i, { strategy: s = "referenceHidden", ...c } = evaluate(t, i);
			switch (s) {
				case "referenceHidden": {
					let t = getSideOffsets(await o.detectOverflow(i, {
						...c,
						elementContext: "reference"
					}), a.reference);
					return { data: {
						referenceHiddenOffsets: t,
						referenceHidden: isAnySideFullyClipped(t)
					} };
				}
				case "escaped": {
					let t = getSideOffsets(await o.detectOverflow(i, {
						...c,
						altBoundary: !0
					}), a.floating);
					return { data: {
						escapedOffsets: t,
						escaped: isAnySideFullyClipped(t)
					} };
				}
				default: return {};
			}
		}
	};
}, originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(t, i) {
	let { placement: a, platform: o, elements: s } = t, c = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = getSide(a), u = getAlignment(a), d = getSideAxis(a) === "y", f = originSides.has(l) ? -1 : 1, p = c && d ? -1 : 1, m = evaluate(i, t), { mainAxis: h, crossAxis: g, alignmentAxis: _ } = typeof m == "number" ? {
		mainAxis: m,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: m.mainAxis || 0,
		crossAxis: m.crossAxis || 0,
		alignmentAxis: m.alignmentAxis
	};
	return u && typeof _ == "number" && (g = u === "end" ? _ * -1 : _), d ? {
		x: g * p,
		y: h * f
	} : {
		x: h * f,
		y: g * p
	};
}
var offset$2 = function(t) {
	return t === void 0 && (t = 0), {
		name: "offset",
		options: t,
		async fn(i) {
			var a;
			let { x: o, y: s, placement: c, middlewareData: l } = i, u = await convertValueToCoords(i, t);
			return c === l.offset?.placement && (a = l.arrow) != null && a.alignmentOffset ? {} : {
				x: o + u.x,
				y: s + u.y,
				data: {
					...u,
					placement: c
				}
			};
		}
	};
}, shift$2 = function(t) {
	return t === void 0 && (t = {}), {
		name: "shift",
		options: t,
		async fn(i) {
			let { x: a, y: o, placement: s, platform: c } = i, { mainAxis: l = !0, crossAxis: u = !1, limiter: d = { fn: (t) => {
				let { x: i, y: a } = t;
				return {
					x: i,
					y: a
				};
			} }, ...f } = evaluate(t, i), p = {
				x: a,
				y: o
			}, m = await c.detectOverflow(i, f), h = getSideAxis(getSide(s)), g = getOppositeAxis(h), _ = p[g], v = p[h];
			if (l) {
				let t = g === "y" ? "top" : "left", i = g === "y" ? "bottom" : "right", a = _ + m[t], o = _ - m[i];
				_ = clamp(a, _, o);
			}
			if (u) {
				let t = h === "y" ? "top" : "left", i = h === "y" ? "bottom" : "right", a = v + m[t], o = v - m[i];
				v = clamp(a, v, o);
			}
			let y = d.fn({
				...i,
				[g]: _,
				[h]: v
			});
			return {
				...y,
				data: {
					x: y.x - a,
					y: y.y - o,
					enabled: {
						[g]: l,
						[h]: u
					}
				}
			};
		}
	};
}, limitShift$2 = function(t) {
	return t === void 0 && (t = {}), {
		options: t,
		fn(i) {
			let { x: a, y: o, placement: s, rects: c, middlewareData: l } = i, { offset: u = 0, mainAxis: d = !0, crossAxis: f = !0 } = evaluate(t, i), p = {
				x: a,
				y: o
			}, m = getSideAxis(s), h = getOppositeAxis(m), g = p[h], _ = p[m], v = evaluate(u, i), y = typeof v == "number" ? {
				mainAxis: v,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...v
			};
			if (d) {
				let t = h === "y" ? "height" : "width", i = c.reference[h] - c.floating[t] + y.mainAxis, a = c.reference[h] + c.reference[t] - y.mainAxis;
				g < i ? g = i : g > a && (g = a);
			}
			if (f) {
				let t = h === "y" ? "width" : "height", i = originSides.has(getSide(s)), a = c.reference[m] - c.floating[t] + (i && l.offset?.[m] || 0) + (i ? 0 : y.crossAxis), o = c.reference[m] + c.reference[t] + (i ? 0 : l.offset?.[m] || 0) - (i ? y.crossAxis : 0);
				_ < a ? _ = a : _ > o && (_ = o);
			}
			return {
				[h]: g,
				[m]: _
			};
		}
	};
}, size$2 = function(t) {
	return t === void 0 && (t = {}), {
		name: "size",
		options: t,
		async fn(i) {
			var a, o;
			let { placement: s, rects: c, platform: l, elements: u } = i, { apply: d = () => {}, ...f } = evaluate(t, i), p = await l.detectOverflow(i, f), m = getSide(s), h = getAlignment(s), g = getSideAxis(s) === "y", { width: _, height: v } = c.floating, y, b;
			m === "top" || m === "bottom" ? (y = m, b = h === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (b = m, y = h === "end" ? "top" : "bottom");
			let x = v - p.top - p.bottom, S = _ - p.left - p.right, C = min(v - p[y], x), w = min(_ - p[b], S), T = !i.middlewareData.shift, E = C, D = w;
			if ((a = i.middlewareData.shift) != null && a.enabled.x && (D = S), (o = i.middlewareData.shift) != null && o.enabled.y && (E = x), T && !h) {
				let t = max(p.left, 0), i = max(p.right, 0), a = max(p.top, 0), o = max(p.bottom, 0);
				g ? D = _ - 2 * (t !== 0 || i !== 0 ? t + i : max(p.left, p.right)) : E = v - 2 * (a !== 0 || o !== 0 ? a + o : max(p.top, p.bottom));
			}
			await d({
				...i,
				availableWidth: D,
				availableHeight: E
			});
			let O = await l.getDimensions(u.floating);
			return _ !== O.width || v !== O.height ? { reset: { rects: !0 } } : {};
		}
	};
};
function hasWindow() {
	return typeof window < "u";
}
function getNodeName(t) {
	return isNode(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function getWindow(t) {
	var i;
	return (t == null || (i = t.ownerDocument) == null ? void 0 : i.defaultView) || window;
}
function getDocumentElement(t) {
	return ((isNode(t) ? t.ownerDocument : t.document) || window.document)?.documentElement;
}
function isNode(t) {
	return hasWindow() ? t instanceof Node || t instanceof getWindow(t).Node : !1;
}
function isElement(t) {
	return hasWindow() ? t instanceof Element || t instanceof getWindow(t).Element : !1;
}
function isHTMLElement(t) {
	return hasWindow() ? t instanceof HTMLElement || t instanceof getWindow(t).HTMLElement : !1;
}
function isShadowRoot(t) {
	return !hasWindow() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof getWindow(t).ShadowRoot;
}
function isOverflowElement(t) {
	let { overflow: i, overflowX: a, overflowY: o, display: s } = getComputedStyle$1(t);
	return /auto|scroll|overlay|hidden|clip/.test(i + o + a) && s !== "inline" && s !== "contents";
}
function isTableElement(t) {
	return /^(table|td|th)$/.test(getNodeName(t));
}
function isTopLayer(t) {
	try {
		if (t.matches(":popover-open")) return !0;
	} catch {}
	try {
		return t.matches(":modal");
	} catch {
		return !1;
	}
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/, containRe = /paint|layout|strict|content/, isNotNone = (t) => !!t && t !== "none", isWebKitValue;
function isContainingBlock(t) {
	let i = isElement(t) ? getComputedStyle$1(t) : t;
	return isNotNone(i.transform) || isNotNone(i.translate) || isNotNone(i.scale) || isNotNone(i.rotate) || isNotNone(i.perspective) || !isWebKit() && (isNotNone(i.backdropFilter) || isNotNone(i.filter)) || willChangeRe.test(i.willChange || "") || containRe.test(i.contain || "");
}
function getContainingBlock(t) {
	let i = getParentNode(t);
	for (; isHTMLElement(i) && !isLastTraversableNode(i);) {
		if (isContainingBlock(i)) return i;
		if (isTopLayer(i)) return null;
		i = getParentNode(i);
	}
	return null;
}
function isWebKit() {
	return isWebKitValue ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), isWebKitValue;
}
function isLastTraversableNode(t) {
	return /^(html|body|#document)$/.test(getNodeName(t));
}
function getComputedStyle$1(t) {
	return getWindow(t).getComputedStyle(t);
}
function getNodeScroll(t) {
	return isElement(t) ? {
		scrollLeft: t.scrollLeft,
		scrollTop: t.scrollTop
	} : {
		scrollLeft: t.scrollX,
		scrollTop: t.scrollY
	};
}
function getParentNode(t) {
	if (getNodeName(t) === "html") return t;
	let i = t.assignedSlot || t.parentNode || isShadowRoot(t) && t.host || getDocumentElement(t);
	return isShadowRoot(i) ? i.host : i;
}
function getNearestOverflowAncestor(t) {
	let i = getParentNode(t);
	return isLastTraversableNode(i) ? t.ownerDocument ? t.ownerDocument.body : t.body : isHTMLElement(i) && isOverflowElement(i) ? i : getNearestOverflowAncestor(i);
}
function getOverflowAncestors(t, i, a) {
	i === void 0 && (i = []), a === void 0 && (a = !0);
	let o = getNearestOverflowAncestor(t), s = o === t.ownerDocument?.body, c = getWindow(o);
	if (s) {
		let t = getFrameElement(c);
		return i.concat(c, c.visualViewport || [], isOverflowElement(o) ? o : [], t && a ? getOverflowAncestors(t) : []);
	} else return i.concat(o, getOverflowAncestors(o, [], a));
}
function getFrameElement(t) {
	return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function getCssDimensions(t) {
	let i = getComputedStyle$1(t), a = parseFloat(i.width) || 0, o = parseFloat(i.height) || 0, s = isHTMLElement(t), c = s ? t.offsetWidth : a, l = s ? t.offsetHeight : o, u = round(a) !== c || round(o) !== l;
	return u && (a = c, o = l), {
		width: a,
		height: o,
		$: u
	};
}
function unwrapElement(t) {
	return isElement(t) ? t : t.contextElement;
}
function getScale(t) {
	let i = unwrapElement(t);
	if (!isHTMLElement(i)) return createCoords(1);
	let a = i.getBoundingClientRect(), { width: o, height: s, $: c } = getCssDimensions(i), l = (c ? round(a.width) : a.width) / o, u = (c ? round(a.height) : a.height) / s;
	return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
		x: l,
		y: u
	};
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(t) {
	let i = getWindow(t);
	return !isWebKit() || !i.visualViewport ? noOffsets : {
		x: i.visualViewport.offsetLeft,
		y: i.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(t, i, a) {
	return i === void 0 && (i = !1), !a || i && a !== getWindow(t) ? !1 : i;
}
function getBoundingClientRect(t, i, a, o) {
	i === void 0 && (i = !1), a === void 0 && (a = !1);
	let s = t.getBoundingClientRect(), c = unwrapElement(t), l = createCoords(1);
	i && (o ? isElement(o) && (l = getScale(o)) : l = getScale(t));
	let u = shouldAddVisualOffsets(c, a, o) ? getVisualOffsets(c) : createCoords(0), d = (s.left + u.x) / l.x, f = (s.top + u.y) / l.y, p = s.width / l.x, m = s.height / l.y;
	if (c) {
		let t = getWindow(c), i = o && isElement(o) ? getWindow(o) : o, a = t, s = getFrameElement(a);
		for (; s && o && i !== a;) {
			let t = getScale(s), i = s.getBoundingClientRect(), o = getComputedStyle$1(s), c = i.left + (s.clientLeft + parseFloat(o.paddingLeft)) * t.x, l = i.top + (s.clientTop + parseFloat(o.paddingTop)) * t.y;
			d *= t.x, f *= t.y, p *= t.x, m *= t.y, d += c, f += l, a = getWindow(s), s = getFrameElement(a);
		}
	}
	return rectToClientRect({
		width: p,
		height: m,
		x: d,
		y: f
	});
}
function getWindowScrollBarX(t, i) {
	let a = getNodeScroll(t).scrollLeft;
	return i ? i.left + a : getBoundingClientRect(getDocumentElement(t)).left + a;
}
function getHTMLOffset(t, i) {
	let a = t.getBoundingClientRect();
	return {
		x: a.left + i.scrollLeft - getWindowScrollBarX(t, a),
		y: a.top + i.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(t) {
	let { elements: i, rect: a, offsetParent: o, strategy: s } = t, c = s === "fixed", l = getDocumentElement(o), u = i ? isTopLayer(i.floating) : !1;
	if (o === l || u && c) return a;
	let d = {
		scrollLeft: 0,
		scrollTop: 0
	}, f = createCoords(1), p = createCoords(0), m = isHTMLElement(o);
	if ((m || !m && !c) && ((getNodeName(o) !== "body" || isOverflowElement(l)) && (d = getNodeScroll(o)), m)) {
		let t = getBoundingClientRect(o);
		f = getScale(o), p.x = t.x + o.clientLeft, p.y = t.y + o.clientTop;
	}
	let h = l && !m && !c ? getHTMLOffset(l, d) : createCoords(0);
	return {
		width: a.width * f.x,
		height: a.height * f.y,
		x: a.x * f.x - d.scrollLeft * f.x + p.x + h.x,
		y: a.y * f.y - d.scrollTop * f.y + p.y + h.y
	};
}
function getClientRects(t) {
	return Array.from(t.getClientRects());
}
function getDocumentRect(t) {
	let i = getDocumentElement(t), a = getNodeScroll(t), o = t.ownerDocument.body, s = max(i.scrollWidth, i.clientWidth, o.scrollWidth, o.clientWidth), c = max(i.scrollHeight, i.clientHeight, o.scrollHeight, o.clientHeight), l = -a.scrollLeft + getWindowScrollBarX(t), u = -a.scrollTop;
	return getComputedStyle$1(o).direction === "rtl" && (l += max(i.clientWidth, o.clientWidth) - s), {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(t, i) {
	let a = getWindow(t), o = getDocumentElement(t), s = a.visualViewport, c = o.clientWidth, l = o.clientHeight, u = 0, d = 0;
	if (s) {
		c = s.width, l = s.height;
		let t = isWebKit();
		(!t || t && i === "fixed") && (u = s.offsetLeft, d = s.offsetTop);
	}
	let f = getWindowScrollBarX(o);
	if (f <= 0) {
		let t = o.ownerDocument, i = t.body, a = getComputedStyle(i), s = t.compatMode === "CSS1Compat" && parseFloat(a.marginLeft) + parseFloat(a.marginRight) || 0, l = Math.abs(o.clientWidth - i.clientWidth - s);
		l <= SCROLLBAR_MAX && (c -= l);
	} else f <= SCROLLBAR_MAX && (c += f);
	return {
		width: c,
		height: l,
		x: u,
		y: d
	};
}
function getInnerBoundingClientRect(t, i) {
	let a = getBoundingClientRect(t, !0, i === "fixed"), o = a.top + t.clientTop, s = a.left + t.clientLeft, c = isHTMLElement(t) ? getScale(t) : createCoords(1);
	return {
		width: t.clientWidth * c.x,
		height: t.clientHeight * c.y,
		x: s * c.x,
		y: o * c.y
	};
}
function getClientRectFromClippingAncestor(t, i, a) {
	let o;
	if (i === "viewport") o = getViewportRect(t, a);
	else if (i === "document") o = getDocumentRect(getDocumentElement(t));
	else if (isElement(i)) o = getInnerBoundingClientRect(i, a);
	else {
		let a = getVisualOffsets(t);
		o = {
			x: i.x - a.x,
			y: i.y - a.y,
			width: i.width,
			height: i.height
		};
	}
	return rectToClientRect(o);
}
function hasFixedPositionAncestor(t, i) {
	let a = getParentNode(t);
	return a === i || !isElement(a) || isLastTraversableNode(a) ? !1 : getComputedStyle$1(a).position === "fixed" || hasFixedPositionAncestor(a, i);
}
function getClippingElementAncestors(t, i) {
	let a = i.get(t);
	if (a) return a;
	let o = getOverflowAncestors(t, [], !1).filter((t) => isElement(t) && getNodeName(t) !== "body"), s = null, c = getComputedStyle$1(t).position === "fixed", l = c ? getParentNode(t) : t;
	for (; isElement(l) && !isLastTraversableNode(l);) {
		let i = getComputedStyle$1(l), a = isContainingBlock(l);
		!a && i.position === "fixed" && (s = null), (c ? !a && !s : !a && i.position === "static" && s && (s.position === "absolute" || s.position === "fixed") || isOverflowElement(l) && !a && hasFixedPositionAncestor(t, l)) ? o = o.filter((t) => t !== l) : s = i, l = getParentNode(l);
	}
	return i.set(t, o), o;
}
function getClippingRect(t) {
	let { element: i, boundary: a, rootBoundary: o, strategy: s } = t, c = [...a === "clippingAncestors" ? isTopLayer(i) ? [] : getClippingElementAncestors(i, this._c) : [].concat(a), o], l = getClientRectFromClippingAncestor(i, c[0], s), u = l.top, d = l.right, f = l.bottom, p = l.left;
	for (let t = 1; t < c.length; t++) {
		let a = getClientRectFromClippingAncestor(i, c[t], s);
		u = max(a.top, u), d = min(a.right, d), f = min(a.bottom, f), p = max(a.left, p);
	}
	return {
		width: d - p,
		height: f - u,
		x: p,
		y: u
	};
}
function getDimensions(t) {
	let { width: i, height: a } = getCssDimensions(t);
	return {
		width: i,
		height: a
	};
}
function getRectRelativeToOffsetParent(t, i, a) {
	let o = isHTMLElement(i), s = getDocumentElement(i), c = a === "fixed", l = getBoundingClientRect(t, !0, c, i), u = {
		scrollLeft: 0,
		scrollTop: 0
	}, d = createCoords(0);
	function f() {
		d.x = getWindowScrollBarX(s);
	}
	if (o || !o && !c) if ((getNodeName(i) !== "body" || isOverflowElement(s)) && (u = getNodeScroll(i)), o) {
		let t = getBoundingClientRect(i, !0, c, i);
		d.x = t.x + i.clientLeft, d.y = t.y + i.clientTop;
	} else s && f();
	c && !o && s && f();
	let p = s && !o && !c ? getHTMLOffset(s, u) : createCoords(0);
	return {
		x: l.left + u.scrollLeft - d.x - p.x,
		y: l.top + u.scrollTop - d.y - p.y,
		width: l.width,
		height: l.height
	};
}
function isStaticPositioned(t) {
	return getComputedStyle$1(t).position === "static";
}
function getTrueOffsetParent(t, i) {
	if (!isHTMLElement(t) || getComputedStyle$1(t).position === "fixed") return null;
	if (i) return i(t);
	let a = t.offsetParent;
	return getDocumentElement(t) === a && (a = a.ownerDocument.body), a;
}
function getOffsetParent(t, i) {
	let a = getWindow(t);
	if (isTopLayer(t)) return a;
	if (!isHTMLElement(t)) {
		let i = getParentNode(t);
		for (; i && !isLastTraversableNode(i);) {
			if (isElement(i) && !isStaticPositioned(i)) return i;
			i = getParentNode(i);
		}
		return a;
	}
	let o = getTrueOffsetParent(t, i);
	for (; o && isTableElement(o) && isStaticPositioned(o);) o = getTrueOffsetParent(o, i);
	return o && isLastTraversableNode(o) && isStaticPositioned(o) && !isContainingBlock(o) ? a : o || getContainingBlock(t) || a;
}
var getElementRects = async function(t) {
	let i = this.getOffsetParent || getOffsetParent, a = this.getDimensions, o = await a(t.floating);
	return {
		reference: getRectRelativeToOffsetParent(t.reference, await i(t.floating), t.strategy),
		floating: {
			x: 0,
			y: 0,
			width: o.width,
			height: o.height
		}
	};
};
function isRTL(t) {
	return getComputedStyle$1(t).direction === "rtl";
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale,
	isElement,
	isRTL
};
function rectsAreEqual(t, i) {
	return t.x === i.x && t.y === i.y && t.width === i.width && t.height === i.height;
}
function observeMove(t, i) {
	let a = null, o, s = getDocumentElement(t);
	function c() {
		var t;
		clearTimeout(o), (t = a) == null || t.disconnect(), a = null;
	}
	function l(u, d) {
		u === void 0 && (u = !1), d === void 0 && (d = 1), c();
		let f = t.getBoundingClientRect(), { left: p, top: m, width: h, height: g } = f;
		if (u || i(), !h || !g) return;
		let _ = floor(m), v = floor(s.clientWidth - (p + h)), y = floor(s.clientHeight - (m + g)), b = floor(p), x = {
			rootMargin: -_ + "px " + -v + "px " + -y + "px " + -b + "px",
			threshold: max(0, min(1, d)) || 1
		}, S = !0;
		function C(i) {
			let a = i[0].intersectionRatio;
			if (a !== d) {
				if (!S) return l();
				a ? l(!1, a) : o = setTimeout(() => {
					l(!1, 1e-7);
				}, 1e3);
			}
			a === 1 && !rectsAreEqual(f, t.getBoundingClientRect()) && l(), S = !1;
		}
		try {
			a = new IntersectionObserver(C, {
				...x,
				root: s.ownerDocument
			});
		} catch {
			a = new IntersectionObserver(C, x);
		}
		a.observe(t);
	}
	return l(!0), c;
}
function autoUpdate(t, i, a, o) {
	o === void 0 && (o = {});
	let { ancestorScroll: s = !0, ancestorResize: c = !0, elementResize: l = typeof ResizeObserver == "function", layoutShift: u = typeof IntersectionObserver == "function", animationFrame: d = !1 } = o, f = unwrapElement(t), p = s || c ? [...f ? getOverflowAncestors(f) : [], ...i ? getOverflowAncestors(i) : []] : [];
	p.forEach((t) => {
		s && t.addEventListener("scroll", a, { passive: !0 }), c && t.addEventListener("resize", a);
	});
	let m = f && u ? observeMove(f, a) : null, h = -1, g = null;
	l && (g = new ResizeObserver((t) => {
		let [o] = t;
		o && o.target === f && g && i && (g.unobserve(i), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
			var t;
			(t = g) == null || t.observe(i);
		})), a();
	}), f && !d && g.observe(f), i && g.observe(i));
	let _, v = d ? getBoundingClientRect(t) : null;
	d && y();
	function y() {
		let i = getBoundingClientRect(t);
		v && !rectsAreEqual(v, i) && a(), v = i, _ = requestAnimationFrame(y);
	}
	return a(), () => {
		var t;
		p.forEach((t) => {
			s && t.removeEventListener("scroll", a), c && t.removeEventListener("resize", a);
		}), m?.(), (t = g) == null || t.disconnect(), g = null, d && cancelAnimationFrame(_);
	};
}
var offset$1 = offset$2, shift$1 = shift$2, flip$1 = flip$2, size$1 = size$2, hide$1 = hide$2, arrow$1 = arrow$2, limitShift$1 = limitShift$2, computePosition = (t, i, a) => {
	let o = /* @__PURE__ */ new Map(), s = {
		platform,
		...a
	}, c = {
		...s.platform,
		_c: o
	};
	return computePosition$1(t, i, {
		...s,
		platform: c
	});
}, index = typeof document < "u" ? useLayoutEffect : function() {};
function deepEqual(t, i) {
	if (t === i) return !0;
	if (typeof t != typeof i) return !1;
	if (typeof t == "function" && t.toString() === i.toString()) return !0;
	let a, o, s;
	if (t && i && typeof t == "object") {
		if (Array.isArray(t)) {
			if (a = t.length, a !== i.length) return !1;
			for (o = a; o-- !== 0;) if (!deepEqual(t[o], i[o])) return !1;
			return !0;
		}
		if (s = Object.keys(t), a = s.length, a !== Object.keys(i).length) return !1;
		for (o = a; o-- !== 0;) if (!{}.hasOwnProperty.call(i, s[o])) return !1;
		for (o = a; o-- !== 0;) {
			let a = s[o];
			if (!(a === "_owner" && t.$$typeof) && !deepEqual(t[a], i[a])) return !1;
		}
		return !0;
	}
	return t !== t && i !== i;
}
function getDPR(t) {
	return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(t, i) {
	let a = getDPR(t);
	return Math.round(i * a) / a;
}
function useLatestRef(t) {
	let a = React$1.useRef(t);
	return index(() => {
		a.current = t;
	}), a;
}
function useFloating(t) {
	t === void 0 && (t = {});
	let { placement: a = "bottom", strategy: o = "absolute", middleware: s = [], platform: c, elements: { reference: u, floating: d } = {}, transform: f = !0, whileElementsMounted: p, open: m } = t, [h, g] = React$1.useState({
		x: 0,
		y: 0,
		strategy: o,
		placement: a,
		middlewareData: {},
		isPositioned: !1
	}), [_, v] = React$1.useState(s);
	deepEqual(_, s) || v(s);
	let [y, b] = React$1.useState(null), [x, S] = React$1.useState(null), C = React$1.useCallback((t) => {
		t !== D.current && (D.current = t, b(t));
	}, []), w = React$1.useCallback((t) => {
		t !== O.current && (O.current = t, S(t));
	}, []), T = u || y, E = d || x, D = React$1.useRef(null), O = React$1.useRef(null), k = React$1.useRef(h), A = p != null, j = useLatestRef(p), M = useLatestRef(c), N = useLatestRef(m), P = React$1.useCallback(() => {
		if (!D.current || !O.current) return;
		let t = {
			placement: a,
			strategy: o,
			middleware: _
		};
		M.current && (t.platform = M.current), computePosition(D.current, O.current, t).then((t) => {
			let i = {
				...t,
				isPositioned: N.current !== !1
			};
			F.current && !deepEqual(k.current, i) && (k.current = i, ReactDOM$1.flushSync(() => {
				g(i);
			}));
		});
	}, [
		_,
		a,
		o,
		M,
		N
	]);
	index(() => {
		m === !1 && k.current.isPositioned && (k.current.isPositioned = !1, g((t) => ({
			...t,
			isPositioned: !1
		})));
	}, [m]);
	let F = React$1.useRef(!1);
	index(() => (F.current = !0, () => {
		F.current = !1;
	}), []), index(() => {
		if (T && (D.current = T), E && (O.current = E), T && E) {
			if (j.current) return j.current(T, E, P);
			P();
		}
	}, [
		T,
		E,
		P,
		j,
		A
	]);
	let I = React$1.useMemo(() => ({
		reference: D,
		floating: O,
		setReference: C,
		setFloating: w
	}), [C, w]), L = React$1.useMemo(() => ({
		reference: T,
		floating: E
	}), [T, E]), R = React$1.useMemo(() => {
		let t = {
			position: o,
			left: 0,
			top: 0
		};
		if (!L.floating) return t;
		let i = roundByDPR(L.floating, h.x), a = roundByDPR(L.floating, h.y);
		return f ? {
			...t,
			transform: "translate(" + i + "px, " + a + "px)",
			...getDPR(L.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: o,
			left: i,
			top: a
		};
	}, [
		o,
		f,
		L.floating,
		h.x,
		h.y
	]);
	return React$1.useMemo(() => ({
		...h,
		update: P,
		refs: I,
		elements: L,
		floatingStyles: R
	}), [
		h,
		P,
		I,
		L,
		R
	]);
}
var arrow$1$1 = (t) => {
	function i(t) {
		return {}.hasOwnProperty.call(t, "current");
	}
	return {
		name: "arrow",
		options: t,
		fn(a) {
			let { element: o, padding: s } = typeof t == "function" ? t(a) : t;
			return o && i(o) ? o.current == null ? {} : arrow$1({
				element: o.current,
				padding: s
			}).fn(a) : o ? arrow$1({
				element: o,
				padding: s
			}).fn(a) : {};
		}
	};
}, offset = (t, i) => {
	let a = offset$1(t);
	return {
		name: a.name,
		fn: a.fn,
		options: [t, i]
	};
}, shift = (t, i) => {
	let a = shift$1(t);
	return {
		name: a.name,
		fn: a.fn,
		options: [t, i]
	};
}, limitShift = (t, i) => ({
	fn: limitShift$1(t).fn,
	options: [t, i]
}), flip = (t, i) => {
	let a = flip$1(t);
	return {
		name: a.name,
		fn: a.fn,
		options: [t, i]
	};
}, size = (t, i) => {
	let a = size$1(t);
	return {
		name: a.name,
		fn: a.fn,
		options: [t, i]
	};
}, hide = (t, i) => {
	let a = hide$1(t);
	return {
		name: a.name,
		fn: a.fn,
		options: [t, i]
	};
}, arrow = (t, i) => {
	let a = arrow$1$1(t);
	return {
		name: a.name,
		fn: a.fn,
		options: [t, i]
	};
};
/* @__NO_SIDE_EFFECTS__ */
function createSlot$4(t) {
	let a = /* @__PURE__ */ createSlotClone$4(t), o = React$1.forwardRef((t, o) => {
		let { children: c, ...l } = t, u = React$1.Children.toArray(c), d = u.find(isSlottable$4);
		if (d) {
			let t = d.props.children, c = u.map((a) => a === d ? React$1.Children.count(t) > 1 ? React$1.Children.only(null) : React$1.isValidElement(t) ? t.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...l,
				ref: o,
				children: React$1.isValidElement(t) ? React$1.cloneElement(t, void 0, c) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...l,
			ref: o,
			children: c
		});
	});
	return o.displayName = `${t}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$4(t) {
	let a = React$1.forwardRef((t, a) => {
		let { children: o, ...s } = t;
		if (React$1.isValidElement(o)) {
			let t = getElementRef$5(o), c = mergeProps$4(s, o.props);
			return o.type !== React$1.Fragment && (c.ref = a ? composeRefs(a, t) : t), React$1.cloneElement(o, c);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${t}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$4 = Symbol("radix.slottable");
function isSlottable$4(t) {
	return React$1.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === SLOTTABLE_IDENTIFIER$4;
}
function mergeProps$4(t, i) {
	let a = { ...i };
	for (let o in i) {
		let s = t[o], c = i[o];
		/^on[A-Z]/.test(o) ? s && c ? a[o] = (...t) => {
			let i = c(...t);
			return s(...t), i;
		} : s && (a[o] = s) : o === "style" ? a[o] = {
			...s,
			...c
		} : o === "className" && (a[o] = [s, c].filter(Boolean).join(" "));
	}
	return {
		...t,
		...a
	};
}
function getElementRef$5(t) {
	let i = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning;
	return a ? t.ref : (i = Object.getOwnPropertyDescriptor(t, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning, a ? t.props.ref : t.props.ref || t.ref);
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
	let o = /* @__PURE__ */ createSlot$4(`Primitive.${a}`), c = React$1.forwardRef((t, i) => {
		let { asChild: c, ...l } = t, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: i
		});
	});
	return c.displayName = `Primitive.${a}`, {
		...t,
		[a]: c
	};
}, {}), NAME$1 = "Arrow", Arrow$1 = React$1.forwardRef((t, i) => {
	let { children: a, width: o = 10, height: c = 5, ...l } = t;
	return /* @__PURE__ */ jsx(Primitive$4.svg, {
		...l,
		ref: i,
		width: o,
		height: c,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: t.asChild ? a : /* @__PURE__ */ jsx("polygon", { points: "0,0 30,0 15,10" })
	});
});
Arrow$1.displayName = NAME$1;
var Root$1 = Arrow$1;
function createContextScope$1(t, a = []) {
	let o = [];
	function c(a, c) {
		let l = React$1.createContext(c), u = o.length;
		o = [...o, c];
		let d = (a) => {
			let { scope: o, children: c, ...d } = a, f = o?.[t]?.[u] || l, p = React$1.useMemo(() => d, Object.values(d));
			return /* @__PURE__ */ jsx(f.Provider, {
				value: p,
				children: c
			});
		};
		d.displayName = a + "Provider";
		function f(o, s) {
			let d = s?.[t]?.[u] || l, f = React$1.useContext(d);
			if (f) return f;
			if (c !== void 0) return c;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [d, f];
	}
	let l = () => {
		let a = o.map((t) => React$1.createContext(t));
		return function(o) {
			let s = o?.[t] || a;
			return React$1.useMemo(() => ({ [`__scope${t}`]: {
				...o,
				[t]: s
			} }), [o, s]);
		};
	};
	return l.scopeName = t, [c, composeContextScopes(l, ...a)];
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
			let s = o.reduce((i, { useScope: a, scopeName: o }) => {
				let s = a(t)[`__scope${o}`];
				return {
					...i,
					...s
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${a.scopeName}`]: s }), [s]);
		};
	};
	return o.scopeName = a.scopeName, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$3(t) {
	let a = /* @__PURE__ */ createSlotClone$3(t), o = React$1.forwardRef((t, o) => {
		let { children: c, ...l } = t, u = React$1.Children.toArray(c), d = u.find(isSlottable$3);
		if (d) {
			let t = d.props.children, c = u.map((a) => a === d ? React$1.Children.count(t) > 1 ? React$1.Children.only(null) : React$1.isValidElement(t) ? t.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...l,
				ref: o,
				children: React$1.isValidElement(t) ? React$1.cloneElement(t, void 0, c) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...l,
			ref: o,
			children: c
		});
	});
	return o.displayName = `${t}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$3(t) {
	let a = React$1.forwardRef((t, a) => {
		let { children: o, ...s } = t;
		if (React$1.isValidElement(o)) {
			let t = getElementRef$4(o), c = mergeProps$3(s, o.props);
			return o.type !== React$1.Fragment && (c.ref = a ? composeRefs(a, t) : t), React$1.cloneElement(o, c);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${t}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$3 = Symbol("radix.slottable");
function isSlottable$3(t) {
	return React$1.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === SLOTTABLE_IDENTIFIER$3;
}
function mergeProps$3(t, i) {
	let a = { ...i };
	for (let o in i) {
		let s = t[o], c = i[o];
		/^on[A-Z]/.test(o) ? s && c ? a[o] = (...t) => {
			let i = c(...t);
			return s(...t), i;
		} : s && (a[o] = s) : o === "style" ? a[o] = {
			...s,
			...c
		} : o === "className" && (a[o] = [s, c].filter(Boolean).join(" "));
	}
	return {
		...t,
		...a
	};
}
function getElementRef$4(t) {
	let i = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning;
	return a ? t.ref : (i = Object.getOwnPropertyDescriptor(t, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning, a ? t.props.ref : t.props.ref || t.ref);
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
	let o = /* @__PURE__ */ createSlot$3(`Primitive.${a}`), c = React$1.forwardRef((t, i) => {
		let { asChild: c, ...l } = t, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: i
		});
	});
	return c.displayName = `Primitive.${a}`, {
		...t,
		[a]: c
	};
}, {});
function useSize(t) {
	let [a, o] = React$1.useState(void 0);
	return useLayoutEffect2(() => {
		if (t) {
			o({
				width: t.offsetWidth,
				height: t.offsetHeight
			});
			let i = new ResizeObserver((i) => {
				if (!Array.isArray(i) || !i.length) return;
				let a = i[0], s, c;
				if ("borderBoxSize" in a) {
					let t = a.borderBoxSize, i = Array.isArray(t) ? t[0] : t;
					s = i.inlineSize, c = i.blockSize;
				} else s = t.offsetWidth, c = t.offsetHeight;
				o({
					width: s,
					height: c
				});
			});
			return i.observe(t, { box: "border-box" }), () => i.unobserve(t);
		} else o(void 0);
	}, [t]), a;
}
var POPPER_NAME = "Popper", [createPopperContext, createPopperScope] = createContextScope$1(POPPER_NAME), [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME), Popper = (t) => {
	let { __scopePopper: a, children: o } = t, [c, l] = React$1.useState(null);
	return /* @__PURE__ */ jsx(PopperProvider, {
		scope: a,
		anchor: c,
		onAnchorChange: l,
		children: o
	});
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor", PopperAnchor = React$1.forwardRef((t, a) => {
	let { __scopePopper: o, virtualRef: c, ...l } = t, u = usePopperContext(ANCHOR_NAME, o), d = React$1.useRef(null), f = useComposedRefs(a, d), p = React$1.useRef(null);
	return React$1.useEffect(() => {
		let t = p.current;
		p.current = c?.current || d.current, t !== p.current && u.onAnchorChange(p.current);
	}), c ? null : /* @__PURE__ */ jsx(Primitive$3.div, {
		...l,
		ref: f
	});
});
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME$1 = "PopperContent", [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME$1), PopperContent = React$1.forwardRef((t, a) => {
	let { __scopePopper: o, side: c = "bottom", sideOffset: l = 0, align: u = "center", alignOffset: d = 0, arrowPadding: f = 0, avoidCollisions: p = !0, collisionBoundary: h = [], collisionPadding: g = 0, sticky: _ = "partial", hideWhenDetached: v = !1, updatePositionStrategy: y = "optimized", onPlaced: b, ...x } = t, S = usePopperContext(CONTENT_NAME$1, o), [C, w] = React$1.useState(null), T = useComposedRefs(a, (t) => w(t)), [E, D] = React$1.useState(null), O = useSize(E), k = O?.width ?? 0, A = O?.height ?? 0, j = c + (u === "center" ? "" : "-" + u), M = typeof g == "number" ? g : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...g
	}, N = Array.isArray(h) ? h : [h], P = N.length > 0, F = {
		padding: M,
		boundary: N.filter(isNotNull),
		altBoundary: P
	}, { refs: I, floatingStyles: L, placement: R, isPositioned: z, middlewareData: B } = useFloating({
		strategy: "fixed",
		placement: j,
		whileElementsMounted: (...t) => autoUpdate(...t, { animationFrame: y === "always" }),
		elements: { reference: S.anchor },
		middleware: [
			offset({
				mainAxis: l + A,
				alignmentAxis: d
			}),
			p && shift({
				mainAxis: !0,
				crossAxis: !1,
				limiter: _ === "partial" ? limitShift() : void 0,
				...F
			}),
			p && flip({ ...F }),
			size({
				...F,
				apply: ({ elements: t, rects: i, availableWidth: a, availableHeight: o }) => {
					let { width: s, height: c } = i.reference, l = t.floating.style;
					l.setProperty("--radix-popper-available-width", `${a}px`), l.setProperty("--radix-popper-available-height", `${o}px`), l.setProperty("--radix-popper-anchor-width", `${s}px`), l.setProperty("--radix-popper-anchor-height", `${c}px`);
				}
			}),
			E && arrow({
				element: E,
				padding: f
			}),
			transformOrigin({
				arrowWidth: k,
				arrowHeight: A
			}),
			v && hide({
				strategy: "referenceHidden",
				...F
			})
		]
	}), [V, H] = getSideAndAlignFromPlacement(R), U = useCallbackRef(b);
	useLayoutEffect2(() => {
		z && U?.();
	}, [z, U]);
	let W = B.arrow?.x, G = B.arrow?.y, K = B.arrow?.centerOffset !== 0, [q, J] = React$1.useState();
	return useLayoutEffect2(() => {
		C && J(window.getComputedStyle(C).zIndex);
	}, [C]), /* @__PURE__ */ jsx("div", {
		ref: I.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...L,
			transform: z ? L.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: q,
			"--radix-popper-transform-origin": [B.transformOrigin?.x, B.transformOrigin?.y].join(" "),
			...B.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: t.dir,
		children: /* @__PURE__ */ jsx(PopperContentProvider, {
			scope: o,
			placedSide: V,
			onArrowChange: D,
			arrowX: W,
			arrowY: G,
			shouldHideArrow: K,
			children: /* @__PURE__ */ jsx(Primitive$3.div, {
				"data-side": V,
				"data-align": H,
				...x,
				ref: T,
				style: {
					...x.style,
					animation: z ? void 0 : "none"
				}
			})
		})
	});
});
PopperContent.displayName = CONTENT_NAME$1;
var ARROW_NAME$1 = "PopperArrow", OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, PopperArrow = React$1.forwardRef(function(t, i) {
	let { __scopePopper: a, ...o } = t, c = useContentContext(ARROW_NAME$1, a), l = OPPOSITE_SIDE[c.placedSide];
	return /* @__PURE__ */ jsx("span", {
		ref: c.onArrowChange,
		style: {
			position: "absolute",
			left: c.arrowX,
			top: c.arrowY,
			[l]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[c.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[c.placedSide],
			visibility: c.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ jsx(Root$1, {
			...o,
			ref: i,
			style: {
				...o.style,
				display: "block"
			}
		})
	});
});
PopperArrow.displayName = ARROW_NAME$1;
function isNotNull(t) {
	return t !== null;
}
var transformOrigin = (t) => ({
	name: "transformOrigin",
	options: t,
	fn(i) {
		let { placement: a, rects: o, middlewareData: s } = i, c = s.arrow?.centerOffset !== 0, l = c ? 0 : t.arrowWidth, u = c ? 0 : t.arrowHeight, [d, f] = getSideAndAlignFromPlacement(a), p = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[f], m = (s.arrow?.x ?? 0) + l / 2, h = (s.arrow?.y ?? 0) + u / 2, g = "", _ = "";
		return d === "bottom" ? (g = c ? p : `${m}px`, _ = `${-u}px`) : d === "top" ? (g = c ? p : `${m}px`, _ = `${o.floating.height + u}px`) : d === "right" ? (g = `${-u}px`, _ = c ? p : `${h}px`) : d === "left" && (g = `${o.floating.width + u}px`, _ = c ? p : `${h}px`), { data: {
			x: g,
			y: _
		} };
	}
});
function getSideAndAlignFromPlacement(t) {
	let [i, a = "center"] = t.split("-");
	return [i, a];
}
var Root2 = Popper, Anchor = PopperAnchor, Content = PopperContent, Arrow = PopperArrow;
/* @__NO_SIDE_EFFECTS__ */
function createSlot$2(t) {
	let a = /* @__PURE__ */ createSlotClone$2(t), o = React$1.forwardRef((t, o) => {
		let { children: c, ...l } = t, u = React$1.Children.toArray(c), d = u.find(isSlottable$2);
		if (d) {
			let t = d.props.children, c = u.map((a) => a === d ? React$1.Children.count(t) > 1 ? React$1.Children.only(null) : React$1.isValidElement(t) ? t.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...l,
				ref: o,
				children: React$1.isValidElement(t) ? React$1.cloneElement(t, void 0, c) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...l,
			ref: o,
			children: c
		});
	});
	return o.displayName = `${t}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$2(t) {
	let a = React$1.forwardRef((t, a) => {
		let { children: o, ...s } = t;
		if (React$1.isValidElement(o)) {
			let t = getElementRef$3(o), c = mergeProps$2(s, o.props);
			return o.type !== React$1.Fragment && (c.ref = a ? composeRefs(a, t) : t), React$1.cloneElement(o, c);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${t}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$2 = Symbol("radix.slottable");
function isSlottable$2(t) {
	return React$1.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === SLOTTABLE_IDENTIFIER$2;
}
function mergeProps$2(t, i) {
	let a = { ...i };
	for (let o in i) {
		let s = t[o], c = i[o];
		/^on[A-Z]/.test(o) ? s && c ? a[o] = (...t) => {
			let i = c(...t);
			return s(...t), i;
		} : s && (a[o] = s) : o === "style" ? a[o] = {
			...s,
			...c
		} : o === "className" && (a[o] = [s, c].filter(Boolean).join(" "));
	}
	return {
		...t,
		...a
	};
}
function getElementRef$3(t) {
	let i = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning;
	return a ? t.ref : (i = Object.getOwnPropertyDescriptor(t, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning, a ? t.props.ref : t.props.ref || t.ref);
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
].reduce((t, a) => {
	let o = /* @__PURE__ */ createSlot$2(`Primitive.${a}`), c = React$1.forwardRef((t, i) => {
		let { asChild: c, ...l } = t, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: i
		});
	});
	return c.displayName = `Primitive.${a}`, {
		...t,
		[a]: c
	};
}, {}), PORTAL_NAME$1 = "Portal", Portal = React$1.forwardRef((t, a) => {
	let { container: o, ...c } = t, [l, d] = React$1.useState(!1);
	useLayoutEffect2(() => d(!0), []);
	let f = o || l && globalThis?.document?.body;
	return f ? ReactDOM.createPortal(/* @__PURE__ */ jsx(Primitive$2.div, {
		...c,
		ref: a
	}), f) : null;
});
Portal.displayName = PORTAL_NAME$1;
function useStateMachine(t, a) {
	return React$1.useReducer((t, i) => a[t][i] ?? t, t);
}
var Presence = (t) => {
	let { present: a, children: o } = t, s = usePresence(a), c = typeof o == "function" ? o({ present: s.isPresent }) : React$1.Children.only(o), l = useComposedRefs(s.ref, getElementRef$2(c));
	return typeof o == "function" || s.isPresent ? React$1.cloneElement(c, { ref: l }) : null;
};
Presence.displayName = "Presence";
function usePresence(t) {
	let [a, o] = React$1.useState(), s = React$1.useRef(null), c = React$1.useRef(t), l = React$1.useRef("none"), [u, d] = useStateMachine(t ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return React$1.useEffect(() => {
		let t = getAnimationName(s.current);
		l.current = u === "mounted" ? t : "none";
	}, [u]), useLayoutEffect2(() => {
		let i = s.current, a = c.current;
		if (a !== t) {
			let o = l.current, s = getAnimationName(i);
			t ? d("MOUNT") : s === "none" || i?.display === "none" ? d("UNMOUNT") : d(a && o !== s ? "ANIMATION_OUT" : "UNMOUNT"), c.current = t;
		}
	}, [t, d]), useLayoutEffect2(() => {
		if (a) {
			let t, i = a.ownerDocument.defaultView ?? window, o = (o) => {
				let l = getAnimationName(s.current).includes(CSS.escape(o.animationName));
				if (o.target === a && l && (d("ANIMATION_END"), !c.current)) {
					let o = a.style.animationFillMode;
					a.style.animationFillMode = "forwards", t = i.setTimeout(() => {
						a.style.animationFillMode === "forwards" && (a.style.animationFillMode = o);
					});
				}
			}, u = (t) => {
				t.target === a && (l.current = getAnimationName(s.current));
			};
			return a.addEventListener("animationstart", u), a.addEventListener("animationcancel", o), a.addEventListener("animationend", o), () => {
				i.clearTimeout(t), a.removeEventListener("animationstart", u), a.removeEventListener("animationcancel", o), a.removeEventListener("animationend", o);
			};
		} else d("ANIMATION_END");
	}, [a, d]), {
		isPresent: ["mounted", "unmountSuspended"].includes(u),
		ref: React$1.useCallback((t) => {
			s.current = t ? getComputedStyle(t) : null, o(t);
		}, [])
	};
}
function getAnimationName(t) {
	return t?.animationName || "none";
}
function getElementRef$2(t) {
	let i = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning;
	return a ? t.ref : (i = Object.getOwnPropertyDescriptor(t, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning, a ? t.props.ref : t.props.ref || t.ref);
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$1(t) {
	let a = /* @__PURE__ */ createSlotClone$1(t), o = React$1.forwardRef((t, o) => {
		let { children: c, ...l } = t, u = React$1.Children.toArray(c), d = u.find(isSlottable$1);
		if (d) {
			let t = d.props.children, c = u.map((a) => a === d ? React$1.Children.count(t) > 1 ? React$1.Children.only(null) : React$1.isValidElement(t) ? t.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...l,
				ref: o,
				children: React$1.isValidElement(t) ? React$1.cloneElement(t, void 0, c) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...l,
			ref: o,
			children: c
		});
	});
	return o.displayName = `${t}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$1(t) {
	let a = React$1.forwardRef((t, a) => {
		let { children: o, ...s } = t;
		if (React$1.isValidElement(o)) {
			let t = getElementRef$1(o), c = mergeProps$1(s, o.props);
			return o.type !== React$1.Fragment && (c.ref = a ? composeRefs(a, t) : t), React$1.cloneElement(o, c);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${t}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER$1 = Symbol("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable(t) {
	let i = ({ children: t }) => /* @__PURE__ */ jsx(Fragment$1, { children: t });
	return i.displayName = `${t}.Slottable`, i.__radixId = SLOTTABLE_IDENTIFIER$1, i;
}
function isSlottable$1(t) {
	return React$1.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
function mergeProps$1(t, i) {
	let a = { ...i };
	for (let o in i) {
		let s = t[o], c = i[o];
		/^on[A-Z]/.test(o) ? s && c ? a[o] = (...t) => {
			let i = c(...t);
			return s(...t), i;
		} : s && (a[o] = s) : o === "style" ? a[o] = {
			...s,
			...c
		} : o === "className" && (a[o] = [s, c].filter(Boolean).join(" "));
	}
	return {
		...t,
		...a
	};
}
function getElementRef$1(t) {
	let i = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning;
	return a ? t.ref : (i = Object.getOwnPropertyDescriptor(t, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning, a ? t.props.ref : t.props.ref || t.ref);
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
	let o = /* @__PURE__ */ createSlot$1(`Primitive.${a}`), c = React$1.forwardRef((t, i) => {
		let { asChild: c, ...l } = t, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: i
		});
	});
	return c.displayName = `Primitive.${a}`, {
		...t,
		[a]: c
	};
}, {}), useInsertionEffect$1 = React$1.useInsertionEffect || useLayoutEffect2;
function useControllableState({ prop: t, defaultProp: a, onChange: o = () => {}, caller: s }) {
	let [c, l, u] = useUncontrolledState({
		defaultProp: a,
		onChange: o
	}), d = t !== void 0, f = d ? t : c;
	{
		let a = React$1.useRef(t !== void 0);
		React$1.useEffect(() => {
			let t = a.current;
			if (t !== d) {
				let i = t ? "controlled" : "uncontrolled", a = d ? "controlled" : "uncontrolled";
				console.warn(`${s} is changing from ${i} to ${a}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
			}
			a.current = d;
		}, [d, s]);
	}
	return [f, React$1.useCallback((i) => {
		if (d) {
			let a = isFunction(i) ? i(t) : i;
			a !== t && u.current?.(a);
		} else l(i);
	}, [
		d,
		t,
		l,
		u
	])];
}
function useUncontrolledState({ defaultProp: t, onChange: a }) {
	let [o, s] = React$1.useState(t), c = React$1.useRef(o), l = React$1.useRef(a);
	return useInsertionEffect$1(() => {
		l.current = a;
	}, [a]), React$1.useEffect(() => {
		c.current !== o && (l.current?.(o), c.current = o);
	}, [o, c]), [
		o,
		s,
		l
	];
}
function isFunction(t) {
	return typeof t == "function";
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot(t) {
	let a = /* @__PURE__ */ createSlotClone(t), o = React$1.forwardRef((t, o) => {
		let { children: c, ...l } = t, u = React$1.Children.toArray(c), d = u.find(isSlottable);
		if (d) {
			let t = d.props.children, c = u.map((a) => a === d ? React$1.Children.count(t) > 1 ? React$1.Children.only(null) : React$1.isValidElement(t) ? t.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...l,
				ref: o,
				children: React$1.isValidElement(t) ? React$1.cloneElement(t, void 0, c) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...l,
			ref: o,
			children: c
		});
	});
	return o.displayName = `${t}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(t) {
	let a = React$1.forwardRef((t, a) => {
		let { children: o, ...s } = t;
		if (React$1.isValidElement(o)) {
			let t = getElementRef(o), c = mergeProps(s, o.props);
			return o.type !== React$1.Fragment && (c.ref = a ? composeRefs(a, t) : t), React$1.cloneElement(o, c);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${t}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(t) {
	return React$1.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(t, i) {
	let a = { ...i };
	for (let o in i) {
		let s = t[o], c = i[o];
		/^on[A-Z]/.test(o) ? s && c ? a[o] = (...t) => {
			let i = c(...t);
			return s(...t), i;
		} : s && (a[o] = s) : o === "style" ? a[o] = {
			...s,
			...c
		} : o === "className" && (a[o] = [s, c].filter(Boolean).join(" "));
	}
	return {
		...t,
		...a
	};
}
function getElementRef(t) {
	let i = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning;
	return a ? t.ref : (i = Object.getOwnPropertyDescriptor(t, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning, a ? t.props.ref : t.props.ref || t.ref);
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
	let o = /* @__PURE__ */ createSlot(`Primitive.${a}`), c = React$1.forwardRef((t, i) => {
		let { asChild: c, ...l } = t, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: i
		});
	});
	return c.displayName = `Primitive.${a}`, {
		...t,
		[a]: c
	};
}, {}), VISUALLY_HIDDEN_STYLES = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), NAME = "VisuallyHidden", VisuallyHidden = React$1.forwardRef((t, i) => /* @__PURE__ */ jsx(Primitive$1.span, {
	...t,
	ref: i,
	style: {
		...VISUALLY_HIDDEN_STYLES,
		...t.style
	}
}));
VisuallyHidden.displayName = NAME;
var Root = VisuallyHidden, [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [createPopperScope]), usePopperScope = createPopperScope(), PROVIDER_NAME = "TooltipProvider", DEFAULT_DELAY_DURATION = 700, TOOLTIP_OPEN = "tooltip.open", [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME), TooltipProvider$1 = (t) => {
	let { __scopeTooltip: a, delayDuration: o = DEFAULT_DELAY_DURATION, skipDelayDuration: c = 300, disableHoverableContent: l = !1, children: u } = t, d = React$1.useRef(!0), f = React$1.useRef(!1), p = React$1.useRef(0);
	return React$1.useEffect(() => {
		let t = p.current;
		return () => window.clearTimeout(t);
	}, []), /* @__PURE__ */ jsx(TooltipProviderContextProvider, {
		scope: a,
		isOpenDelayedRef: d,
		delayDuration: o,
		onOpen: React$1.useCallback(() => {
			window.clearTimeout(p.current), d.current = !1;
		}, []),
		onClose: React$1.useCallback(() => {
			window.clearTimeout(p.current), p.current = window.setTimeout(() => d.current = !0, c);
		}, [c]),
		isPointerInTransitRef: f,
		onPointerInTransitChange: React$1.useCallback((t) => {
			f.current = t;
		}, []),
		disableHoverableContent: l,
		children: u
	});
};
TooltipProvider$1.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip", [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME), Tooltip$1 = (t) => {
	let { __scopeTooltip: a, children: o, open: c, defaultOpen: l, onOpenChange: u, disableHoverableContent: d, delayDuration: f } = t, p = useTooltipProviderContext(TOOLTIP_NAME, t.__scopeTooltip), m = usePopperScope(a), [h, g] = React$1.useState(null), _ = useId$1(), v = React$1.useRef(0), y = d ?? p.disableHoverableContent, b = f ?? p.delayDuration, x = React$1.useRef(!1), [S, C] = useControllableState({
		prop: c,
		defaultProp: l ?? !1,
		onChange: (t) => {
			t ? (p.onOpen(), document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN))) : p.onClose(), u?.(t);
		},
		caller: TOOLTIP_NAME
	}), w = React$1.useMemo(() => S ? x.current ? "delayed-open" : "instant-open" : "closed", [S]), T = React$1.useCallback(() => {
		window.clearTimeout(v.current), v.current = 0, x.current = !1, C(!0);
	}, [C]), E = React$1.useCallback(() => {
		window.clearTimeout(v.current), v.current = 0, C(!1);
	}, [C]), D = React$1.useCallback(() => {
		window.clearTimeout(v.current), v.current = window.setTimeout(() => {
			x.current = !0, C(!0), v.current = 0;
		}, b);
	}, [b, C]);
	return React$1.useEffect(() => () => {
		v.current &&= (window.clearTimeout(v.current), 0);
	}, []), /* @__PURE__ */ jsx(Root2, {
		...m,
		children: /* @__PURE__ */ jsx(TooltipContextProvider, {
			scope: a,
			contentId: _,
			open: S,
			stateAttribute: w,
			trigger: h,
			onTriggerChange: g,
			onTriggerEnter: React$1.useCallback(() => {
				p.isOpenDelayedRef.current ? D() : T();
			}, [
				p.isOpenDelayedRef,
				D,
				T
			]),
			onTriggerLeave: React$1.useCallback(() => {
				y ? E() : (window.clearTimeout(v.current), v.current = 0);
			}, [E, y]),
			onOpen: T,
			onClose: E,
			disableHoverableContent: y,
			children: o
		})
	});
};
Tooltip$1.displayName = TOOLTIP_NAME;
var TRIGGER_NAME = "TooltipTrigger", TooltipTrigger$1 = React$1.forwardRef((t, a) => {
	let { __scopeTooltip: o, ...c } = t, l = useTooltipContext(TRIGGER_NAME, o), u = useTooltipProviderContext(TRIGGER_NAME, o), d = usePopperScope(o), f = useComposedRefs(a, React$1.useRef(null), l.onTriggerChange), p = React$1.useRef(!1), h = React$1.useRef(!1), g = React$1.useCallback(() => p.current = !1, []);
	return React$1.useEffect(() => () => document.removeEventListener("pointerup", g), [g]), /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...d,
		children: /* @__PURE__ */ jsx(Primitive.button, {
			"aria-describedby": l.open ? l.contentId : void 0,
			"data-state": l.stateAttribute,
			...c,
			ref: f,
			onPointerMove: composeEventHandlers(t.onPointerMove, (t) => {
				t.pointerType !== "touch" && !h.current && !u.isPointerInTransitRef.current && (l.onTriggerEnter(), h.current = !0);
			}),
			onPointerLeave: composeEventHandlers(t.onPointerLeave, () => {
				l.onTriggerLeave(), h.current = !1;
			}),
			onPointerDown: composeEventHandlers(t.onPointerDown, () => {
				l.open && l.onClose(), p.current = !0, document.addEventListener("pointerup", g, { once: !0 });
			}),
			onFocus: composeEventHandlers(t.onFocus, () => {
				p.current || l.onOpen();
			}),
			onBlur: composeEventHandlers(t.onBlur, l.onClose),
			onClick: composeEventHandlers(t.onClick, l.onClose)
		})
	});
});
TooltipTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "TooltipPortal", [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, { forceMount: void 0 }), TooltipPortal = (t) => {
	let { __scopeTooltip: i, forceMount: a, children: o, container: c } = t, l = useTooltipContext(PORTAL_NAME, i);
	return /* @__PURE__ */ jsx(PortalProvider, {
		scope: i,
		forceMount: a,
		children: /* @__PURE__ */ jsx(Presence, {
			present: a || l.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: c,
				children: o
			})
		})
	});
};
TooltipPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "TooltipContent", TooltipContent$1 = React$1.forwardRef((t, i) => {
	let a = usePortalContext(CONTENT_NAME, t.__scopeTooltip), { forceMount: o = a.forceMount, side: c = "top", ...l } = t, u = useTooltipContext(CONTENT_NAME, t.__scopeTooltip);
	return /* @__PURE__ */ jsx(Presence, {
		present: o || u.open,
		children: u.disableHoverableContent ? /* @__PURE__ */ jsx(TooltipContentImpl, {
			side: c,
			...l,
			ref: i
		}) : /* @__PURE__ */ jsx(TooltipContentHoverable, {
			side: c,
			...l,
			ref: i
		})
	});
}), TooltipContentHoverable = React$1.forwardRef((t, a) => {
	let o = useTooltipContext(CONTENT_NAME, t.__scopeTooltip), c = useTooltipProviderContext(CONTENT_NAME, t.__scopeTooltip), l = React$1.useRef(null), u = useComposedRefs(a, l), [d, f] = React$1.useState(null), { trigger: p, onClose: h } = o, g = l.current, { onPointerInTransitChange: _ } = c, v = React$1.useCallback(() => {
		f(null), _(!1);
	}, [_]), y = React$1.useCallback((t, i) => {
		let a = t.currentTarget, o = {
			x: t.clientX,
			y: t.clientY
		}, s = getPaddedExitPoints(o, getExitSideFromRect(o, a.getBoundingClientRect())), c = getPointsFromRect(i.getBoundingClientRect());
		f(getHull([...s, ...c])), _(!0);
	}, [_]);
	return React$1.useEffect(() => () => v(), [v]), React$1.useEffect(() => {
		if (p && g) {
			let t = (t) => y(t, g), i = (t) => y(t, p);
			return p.addEventListener("pointerleave", t), g.addEventListener("pointerleave", i), () => {
				p.removeEventListener("pointerleave", t), g.removeEventListener("pointerleave", i);
			};
		}
	}, [
		p,
		g,
		y,
		v
	]), React$1.useEffect(() => {
		if (d) {
			let t = (t) => {
				let i = t.target, a = {
					x: t.clientX,
					y: t.clientY
				}, o = p?.contains(i) || g?.contains(i), s = !isPointInPolygon(a, d);
				o ? v() : s && (v(), h());
			};
			return document.addEventListener("pointermove", t), () => document.removeEventListener("pointermove", t);
		}
	}, [
		p,
		g,
		d,
		h,
		v
	]), /* @__PURE__ */ jsx(TooltipContentImpl, {
		...t,
		ref: u
	});
}), [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: !1 }), Slottable = /* @__PURE__ */ createSlottable("TooltipContent"), TooltipContentImpl = React$1.forwardRef((t, a) => {
	let { __scopeTooltip: o, children: l, "aria-label": u, onEscapeKeyDown: d, onPointerDownOutside: f, ...p } = t, m = useTooltipContext(CONTENT_NAME, o), h = usePopperScope(o), { onClose: g } = m;
	return React$1.useEffect(() => (document.addEventListener(TOOLTIP_OPEN, g), () => document.removeEventListener(TOOLTIP_OPEN, g)), [g]), React$1.useEffect(() => {
		if (m.trigger) {
			let t = (t) => {
				t.target?.contains(m.trigger) && g();
			};
			return window.addEventListener("scroll", t, { capture: !0 }), () => window.removeEventListener("scroll", t, { capture: !0 });
		}
	}, [m.trigger, g]), /* @__PURE__ */ jsx(DismissableLayer, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: d,
		onPointerDownOutside: f,
		onFocusOutside: (t) => t.preventDefault(),
		onDismiss: g,
		children: /* @__PURE__ */ jsxs(Content, {
			"data-state": m.stateAttribute,
			...h,
			...p,
			ref: a,
			style: {
				...p.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ jsx(Slottable, { children: l }), /* @__PURE__ */ jsx(VisuallyHiddenContentContextProvider, {
				scope: o,
				isInside: !0,
				children: /* @__PURE__ */ jsx(Root, {
					id: m.contentId,
					role: "tooltip",
					children: u || l
				})
			})]
		})
	});
});
TooltipContent$1.displayName = CONTENT_NAME;
var ARROW_NAME = "TooltipArrow", TooltipArrow = React$1.forwardRef((t, i) => {
	let { __scopeTooltip: a, ...o } = t, c = usePopperScope(a);
	return useVisuallyHiddenContentContext(ARROW_NAME, a).isInside ? null : /* @__PURE__ */ jsx(Arrow, {
		...c,
		...o,
		ref: i
	});
});
TooltipArrow.displayName = ARROW_NAME;
function getExitSideFromRect(t, i) {
	let a = Math.abs(i.top - t.y), o = Math.abs(i.bottom - t.y), s = Math.abs(i.right - t.x), c = Math.abs(i.left - t.x);
	switch (Math.min(a, o, s, c)) {
		case c: return "left";
		case s: return "right";
		case a: return "top";
		case o: return "bottom";
		default: throw Error("unreachable");
	}
}
function getPaddedExitPoints(t, i, a = 5) {
	let o = [];
	switch (i) {
		case "top":
			o.push({
				x: t.x - a,
				y: t.y + a
			}, {
				x: t.x + a,
				y: t.y + a
			});
			break;
		case "bottom":
			o.push({
				x: t.x - a,
				y: t.y - a
			}, {
				x: t.x + a,
				y: t.y - a
			});
			break;
		case "left":
			o.push({
				x: t.x + a,
				y: t.y - a
			}, {
				x: t.x + a,
				y: t.y + a
			});
			break;
		case "right":
			o.push({
				x: t.x - a,
				y: t.y - a
			}, {
				x: t.x - a,
				y: t.y + a
			});
			break;
	}
	return o;
}
function getPointsFromRect(t) {
	let { top: i, right: a, bottom: o, left: s } = t;
	return [
		{
			x: s,
			y: i
		},
		{
			x: a,
			y: i
		},
		{
			x: a,
			y: o
		},
		{
			x: s,
			y: o
		}
	];
}
function isPointInPolygon(t, i) {
	let { x: a, y: o } = t, s = !1;
	for (let t = 0, c = i.length - 1; t < i.length; c = t++) {
		let l = i[t], u = i[c], d = l.x, f = l.y, p = u.x, m = u.y;
		f > o != m > o && a < (p - d) * (o - f) / (m - f) + d && (s = !s);
	}
	return s;
}
function getHull(t) {
	let i = t.slice();
	return i.sort((t, i) => t.x < i.x ? -1 : t.x > i.x ? 1 : t.y < i.y ? -1 : t.y > i.y ? 1 : 0), getHullPresorted(i);
}
function getHullPresorted(t) {
	if (t.length <= 1) return t.slice();
	let i = [];
	for (let a = 0; a < t.length; a++) {
		let o = t[a];
		for (; i.length >= 2;) {
			let t = i[i.length - 1], a = i[i.length - 2];
			if ((t.x - a.x) * (o.y - a.y) >= (t.y - a.y) * (o.x - a.x)) i.pop();
			else break;
		}
		i.push(o);
	}
	i.pop();
	let a = [];
	for (let i = t.length - 1; i >= 0; i--) {
		let o = t[i];
		for (; a.length >= 2;) {
			let t = a[a.length - 1], i = a[a.length - 2];
			if ((t.x - i.x) * (o.y - i.y) >= (t.y - i.y) * (o.x - i.x)) a.pop();
			else break;
		}
		a.push(o);
	}
	return a.pop(), i.length === 1 && a.length === 1 && i[0].x === a[0].x && i[0].y === a[0].y ? i : i.concat(a);
}
var Provider = TooltipProvider$1, Root3 = Tooltip$1, Trigger = TooltipTrigger$1, Portal$1 = TooltipPortal, Content2 = TooltipContent$1, Arrow2 = TooltipArrow;
function TooltipProvider({ delayDuration: t = 0, ...i }) {
	return /* @__PURE__ */ jsx(Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: t,
		...i
	});
}
function Tooltip({ ...t }) {
	return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(Root3, {
		"data-slot": "tooltip",
		...t
	}) });
}
var TooltipTrigger = React$1.forwardRef(({ ...t }, i) => /* @__PURE__ */ jsx(Trigger, {
	"data-slot": "tooltip-trigger",
	...t,
	ref: i
}));
TooltipTrigger.displayName = Trigger.displayName;
var TooltipContent = React$1.forwardRef(({ className: t, sideOffset: i = 0, children: a, ...o }, l) => /* @__PURE__ */ jsx(Portal$1, { children: /* @__PURE__ */ jsxs(Content2, {
	ref: l,
	"data-slot": "tooltip-content",
	sideOffset: i,
	className: cn("chatbot-theme bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", t),
	...o,
	children: [a, /* @__PURE__ */ jsx(Arrow2, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })]
}) }));
TooltipContent.displayName = Content2.displayName;
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
	constructor(t = {}) {
		this.recognition = null, this.isListening = !1, this.onResult = null, this.onStart = null, this.onEnd = null, this.onError = null, this.onSpeechStart = null, this.onSpeechEnd = null, this.config = {
			...defaultVoiceConfig,
			...t
		}, this.initRecognition();
	}
	initRecognition() {
		if (typeof window > "u") return !1;
		let t = window.SpeechRecognition || window.webkitSpeechRecognition;
		if (!t) return console.warn("Speech Recognition is not supported in this browser"), !1;
		try {
			let i = new t();
			return i.lang = this.config.lang, i.continuous = this.config.continuous, i.interimResults = this.config.interimResults, i.maxAlternatives = this.config.maxAlternatives, i.onstart = () => {
				this.isListening = !0, this.onStart?.();
			}, i.onend = () => {
				this.isListening = !1, this.onEnd?.();
			}, i.onerror = (t) => {
				this.isListening = !1;
				let i = this.getErrorMessage(t.error);
				this.onError?.(i);
			}, i.onresult = (t) => {
				let i = "", a = !1;
				for (let o = t.resultIndex; o < t.results.length; o++) {
					let s = t.results[o];
					i += s[0].transcript, s.isFinal && (a = !0);
				}
				this.onResult?.(i, a);
			}, i.onspeechstart = () => {
				this.onSpeechStart?.();
			}, i.onspeechend = () => {
				this.onSpeechEnd?.();
			}, this.recognition = i, !0;
		} catch (t) {
			return console.error("Failed to initialize speech recognition:", t), !1;
		}
	}
	getErrorMessage(t) {
		return {
			"no-speech": "No speech was detected. Please try again.",
			aborted: "Speech recognition was aborted.",
			"audio-capture": "No microphone was found. Ensure a microphone is connected.",
			network: "Network error occurred. Check your internet connection.",
			"not-allowed": "Microphone access denied. Please allow microphone permissions.",
			"service-not-available": "Speech service is not available.",
			"bad-grammar": "Speech grammar error occurred.",
			"language-not-supported": "Language is not supported."
		}[t] || `Unknown error: ${t}`;
	}
	start() {
		if (!this.recognition && !this.initRecognition()) return !1;
		if (this.isListening) return !0;
		try {
			return this.recognition?.start(), !0;
		} catch (t) {
			return console.error("Failed to start speech recognition:", t), !1;
		}
	}
	stop() {
		this.recognition && this.isListening && this.recognition.stop();
	}
	abort() {
		this.recognition && this.recognition.abort();
	}
	updateConfig(t) {
		this.config = {
			...this.config,
			...t
		}, this.recognition && (this.recognition.lang = this.config.lang, this.recognition.continuous = this.config.continuous, this.recognition.interimResults = this.config.interimResults, this.recognition.maxAlternatives = this.config.maxAlternatives);
	}
	getIsListening() {
		return this.isListening;
	}
	destroy() {
		this.abort(), this.recognition = null, this.onResult = null, this.onStart = null, this.onEnd = null, this.onError = null, this.onSpeechStart = null, this.onSpeechEnd = null;
	}
}, SpeechSynthesisManager = class {
	constructor(t = {}) {
		this.utterance = null, this.isSpeaking = !1, this.availableVoices = [], this.onStart = null, this.onEnd = null, this.onPause = null, this.onResume = null, this.onError = null, this.onBoundary = null, this.config = {
			...defaultVoiceConfig,
			...t
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
	getVoicesByLanguage(t) {
		return this.availableVoices.filter((i) => i.lang.toLowerCase().startsWith(t.toLowerCase().split("-")[0]));
	}
	speak(t) {
		if (typeof window > "u" || !window.speechSynthesis) return console.warn("Speech Synthesis is not supported in this browser"), !1;
		this.stop();
		try {
			if (this.utterance = new SpeechSynthesisUtterance(t), this.utterance.lang = this.config.lang, this.utterance.pitch = this.config.pitch, this.utterance.rate = this.config.rate, this.utterance.volume = this.config.volume, this.config.voiceURI) {
				let t = this.availableVoices.find((t) => t.voiceURI === this.config.voiceURI);
				t && (this.utterance.voice = t);
			}
			return this.utterance.onstart = () => {
				this.isSpeaking = !0, this.onStart?.();
			}, this.utterance.onend = () => {
				this.isSpeaking = !1, this.onEnd?.();
			}, this.utterance.onerror = (t) => {
				this.isSpeaking = !1, this.onError?.(t.error);
			}, this.utterance.onpause = () => {
				this.onPause?.();
			}, this.utterance.onresume = () => {
				this.onResume?.();
			}, this.utterance.onboundary = (t) => {
				this.onBoundary?.(t.charIndex, t.charLength);
			}, window.speechSynthesis.speak(this.utterance), !0;
		} catch (t) {
			return console.error("Failed to speak:", t), !1;
		}
	}
	speakFrom(t, i) {
		let a = t.slice(i);
		return a ? this.speak(a) : !1;
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
	updateConfig(t) {
		this.config = {
			...this.config,
			...t
		};
	}
	destroy() {
		this.stop(), this.utterance = null, this.onStart = null, this.onEnd = null, this.onPause = null, this.onResume = null, this.onError = null, this.onBoundary = null;
	}
};
function stripMarkdownForSpeech(t) {
	return t.replace(/```[\s\S]*?```/g, "Code block omitted. ").replace(/`[^`]+`/g, (t) => t.slice(1, -1)).replace(/#{1,6}\s+/g, "").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1").replace(/__([^_]+)__/g, "$1").replace(/_([^_]+)_/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1").replace(/---/g, "").replace(/^>\s+/gm, "").replace(/^[\s]*[-*+]\s+/gm, "").replace(/^[\s]*\d+\.\s+/gm, "").replace(/\n{3,}/g, "\n\n").trim();
}
export { composeRefs as A, useCallbackRef as C, cva as D, cn as E, Check as M, Slot as O, DismissableLayer as S, Button as T, Root2 as _, stripMarkdownForSpeech as a, useId$1 as b, TooltipProvider as c, useControllableState as d, Presence as f, Content as g, Arrow as h, getVoiceSupport as i, useComposedRefs as j, createSlot$6 as k, TooltipTrigger as l, Anchor as m, SpeechSynthesisManager as n, Tooltip as o, Portal as p, defaultVoiceConfig as r, TooltipContent as s, SpeechRecognitionManager as t, VISUALLY_HIDDEN_STYLES as u, createPopperScope as v, composeEventHandlers as w, useLayoutEffect2 as x, useSize as y };
