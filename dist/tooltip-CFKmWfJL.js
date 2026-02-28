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
function setRef(i, o) {
	if (typeof i == "function") return i(o);
	i != null && (i.current = o);
}
function composeRefs(...i) {
	return (o) => {
		let s = !1, c = i.map((i) => {
			let c = setRef(i, o);
			return !s && typeof c == "function" && (s = !0), c;
		});
		if (s) return () => {
			for (let o = 0; o < c.length; o++) {
				let s = c[o];
				typeof s == "function" ? s() : setRef(i[o], null);
			}
		};
	};
}
function useComposedRefs(...i) {
	return React$1.useCallback(composeRefs(...i), i);
}
var REACT_LAZY_TYPE = Symbol.for("react.lazy"), use = React$1.use;
function isPromiseLike(i) {
	return typeof i == "object" && !!i && "then" in i;
}
function isLazyComponent(i) {
	return typeof i == "object" && !!i && "$$typeof" in i && i.$$typeof === REACT_LAZY_TYPE && "_payload" in i && isPromiseLike(i._payload);
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$1(i) {
	let s = /* @__PURE__ */ createSlotClone$1(i), c = React$1.forwardRef((i, c) => {
		let { children: u, ...d } = i;
		isLazyComponent(u) && typeof use == "function" && (u = use(u._payload));
		let f = React$1.Children.toArray(u), p = f.find(isSlottable$1);
		if (p) {
			let i = p.props.children, u = f.map((s) => s === p ? React$1.Children.count(i) > 1 ? React$1.Children.only(null) : React$1.isValidElement(i) ? i.props.children : null : s);
			return /* @__PURE__ */ jsx(s, {
				...d,
				ref: c,
				children: React$1.isValidElement(i) ? React$1.cloneElement(i, void 0, u) : null
			});
		}
		return /* @__PURE__ */ jsx(s, {
			...d,
			ref: c,
			children: u
		});
	});
	return c.displayName = `${i}.Slot`, c;
}
var Slot = /* @__PURE__ */ createSlot$1("Slot");
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$1(i) {
	let s = React$1.forwardRef((i, s) => {
		let { children: c, ...l } = i;
		if (isLazyComponent(c) && typeof use == "function" && (c = use(c._payload)), React$1.isValidElement(c)) {
			let i = getElementRef$2(c), u = mergeProps$1(l, c.props);
			return c.type !== React$1.Fragment && (u.ref = s ? composeRefs(s, i) : i), React$1.cloneElement(c, u);
		}
		return React$1.Children.count(c) > 1 ? React$1.Children.only(null) : null;
	});
	return s.displayName = `${i}.SlotClone`, s;
}
var SLOTTABLE_IDENTIFIER$2 = Symbol("radix.slottable");
function isSlottable$1(i) {
	return React$1.isValidElement(i) && typeof i.type == "function" && "__radixId" in i.type && i.type.__radixId === SLOTTABLE_IDENTIFIER$2;
}
function mergeProps$1(i, o) {
	let s = { ...o };
	for (let c in o) {
		let l = i[c], u = o[c];
		/^on[A-Z]/.test(c) ? l && u ? s[c] = (...i) => {
			let o = u(...i);
			return l(...i), o;
		} : l && (s[c] = l) : c === "style" ? s[c] = {
			...l,
			...u
		} : c === "className" && (s[c] = [l, u].filter(Boolean).join(" "));
	}
	return {
		...i,
		...s
	};
}
function getElementRef$2(i) {
	let o = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning;
	return s ? i.ref : (o = Object.getOwnPropertyDescriptor(i, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning, s ? i.props.ref : i.props.ref || i.ref);
}
function r(i) {
	var o, s, c = "";
	if (typeof i == "string" || typeof i == "number") c += i;
	else if (typeof i == "object") if (Array.isArray(i)) {
		var l = i.length;
		for (o = 0; o < l; o++) i[o] && (s = r(i[o])) && (c && (c += " "), c += s);
	} else for (s in i) i[s] && (c && (c += " "), c += s);
	return c;
}
function clsx() {
	for (var i, o, s = 0, c = "", l = arguments.length; s < l; s++) (i = arguments[s]) && (o = r(i)) && (c && (c += " "), c += o);
	return c;
}
var falsyToString = (i) => typeof i == "boolean" ? `${i}` : i === 0 ? "0" : i;
const cx = clsx, cva = (i, o) => (s) => {
	if (o?.variants == null) return cx(i, s?.class, s?.className);
	let { variants: c, defaultVariants: l } = o, u = Object.keys(c).map((i) => {
		let o = s?.[i], u = l?.[i];
		if (o === null) return null;
		let d = falsyToString(o) || falsyToString(u);
		return c[i][d];
	}), d = s && Object.entries(s).reduce((i, o) => {
		let [s, c] = o;
		return c === void 0 || (i[s] = c), i;
	}, {});
	return cx(i, u, o?.compoundVariants?.reduce((i, o) => {
		let { class: s, className: c, ...u } = o;
		return Object.entries(u).every((i) => {
			let [o, s] = i;
			return Array.isArray(s) ? s.includes({
				...l,
				...d
			}[o]) : {
				...l,
				...d
			}[o] === s;
		}) ? [
			...i,
			s,
			c
		] : i;
	}, []), s?.class, s?.className);
};
var concatArrays = (i, o) => {
	let s = Array(i.length + o.length);
	for (let o = 0; o < i.length; o++) s[o] = i[o];
	for (let c = 0; c < o.length; c++) s[i.length + c] = o[c];
	return s;
}, createClassValidatorObject = (i, o) => ({
	classGroupId: i,
	validator: o
}), createClassPartObject = (i = /* @__PURE__ */ new Map(), o = null, s) => ({
	nextPart: i,
	validators: o,
	classGroupId: s
}), CLASS_PART_SEPARATOR = "-", EMPTY_CONFLICTS = [], ARBITRARY_PROPERTY_PREFIX = "arbitrary..", createClassGroupUtils = (i) => {
	let o = createClassMap(i), { conflictingClassGroups: s, conflictingClassGroupModifiers: c } = i;
	return {
		getClassGroupId: (i) => {
			if (i.startsWith("[") && i.endsWith("]")) return getGroupIdForArbitraryProperty(i);
			let s = i.split(CLASS_PART_SEPARATOR);
			return getGroupRecursive(s, s[0] === "" && s.length > 1 ? 1 : 0, o);
		},
		getConflictingClassGroupIds: (i, o) => {
			if (o) {
				let o = c[i], l = s[i];
				return o ? l ? concatArrays(l, o) : o : l || EMPTY_CONFLICTS;
			}
			return s[i] || EMPTY_CONFLICTS;
		}
	};
}, getGroupRecursive = (i, o, s) => {
	if (i.length - o === 0) return s.classGroupId;
	let c = i[o], l = s.nextPart.get(c);
	if (l) {
		let s = getGroupRecursive(i, o + 1, l);
		if (s) return s;
	}
	let u = s.validators;
	if (u === null) return;
	let d = o === 0 ? i.join(CLASS_PART_SEPARATOR) : i.slice(o).join(CLASS_PART_SEPARATOR), f = u.length;
	for (let i = 0; i < f; i++) {
		let o = u[i];
		if (o.validator(d)) return o.classGroupId;
	}
}, getGroupIdForArbitraryProperty = (i) => i.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let o = i.slice(1, -1), s = o.indexOf(":"), c = o.slice(0, s);
	return c ? ARBITRARY_PROPERTY_PREFIX + c : void 0;
})(), createClassMap = (i) => {
	let { theme: o, classGroups: s } = i;
	return processClassGroups(s, o);
}, processClassGroups = (i, o) => {
	let s = createClassPartObject();
	for (let c in i) {
		let l = i[c];
		processClassesRecursively(l, s, c, o);
	}
	return s;
}, processClassesRecursively = (i, o, s, c) => {
	let l = i.length;
	for (let u = 0; u < l; u++) {
		let l = i[u];
		processClassDefinition(l, o, s, c);
	}
}, processClassDefinition = (i, o, s, c) => {
	if (typeof i == "string") {
		processStringDefinition(i, o, s);
		return;
	}
	if (typeof i == "function") {
		processFunctionDefinition(i, o, s, c);
		return;
	}
	processObjectDefinition(i, o, s, c);
}, processStringDefinition = (i, o, s) => {
	let c = i === "" ? o : getPart(o, i);
	c.classGroupId = s;
}, processFunctionDefinition = (i, o, s, c) => {
	if (isThemeGetter(i)) {
		processClassesRecursively(i(c), o, s, c);
		return;
	}
	o.validators === null && (o.validators = []), o.validators.push(createClassValidatorObject(s, i));
}, processObjectDefinition = (i, o, s, c) => {
	let l = Object.entries(i), u = l.length;
	for (let i = 0; i < u; i++) {
		let [u, d] = l[i];
		processClassesRecursively(d, getPart(o, u), s, c);
	}
}, getPart = (i, o) => {
	let s = i, c = o.split(CLASS_PART_SEPARATOR), l = c.length;
	for (let i = 0; i < l; i++) {
		let o = c[i], l = s.nextPart.get(o);
		l || (l = createClassPartObject(), s.nextPart.set(o, l)), s = l;
	}
	return s;
}, isThemeGetter = (i) => "isThemeGetter" in i && i.isThemeGetter === !0, createLruCache = (i) => {
	if (i < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let o = 0, s = Object.create(null), c = Object.create(null), l = (l, u) => {
		s[l] = u, o++, o > i && (o = 0, c = s, s = Object.create(null));
	};
	return {
		get(i) {
			let o = s[i];
			if (o !== void 0) return o;
			if ((o = c[i]) !== void 0) return l(i, o), o;
		},
		set(i, o) {
			i in s ? s[i] = o : l(i, o);
		}
	};
}, IMPORTANT_MODIFIER = "!", MODIFIER_SEPARATOR = ":", EMPTY_MODIFIERS = [], createResultObject = (i, o, s, c, l) => ({
	modifiers: i,
	hasImportantModifier: o,
	baseClassName: s,
	maybePostfixModifierPosition: c,
	isExternal: l
}), createParseClassName = (i) => {
	let { prefix: o, experimentalParseClassName: s } = i, c = (i) => {
		let o = [], s = 0, c = 0, l = 0, u, d = i.length;
		for (let f = 0; f < d; f++) {
			let d = i[f];
			if (s === 0 && c === 0) {
				if (d === MODIFIER_SEPARATOR) {
					o.push(i.slice(l, f)), l = f + 1;
					continue;
				}
				if (d === "/") {
					u = f;
					continue;
				}
			}
			d === "[" ? s++ : d === "]" ? s-- : d === "(" ? c++ : d === ")" && c--;
		}
		let f = o.length === 0 ? i : i.slice(l), p = f, m = !1;
		f.endsWith(IMPORTANT_MODIFIER) ? (p = f.slice(0, -1), m = !0) : f.startsWith(IMPORTANT_MODIFIER) && (p = f.slice(1), m = !0);
		let h = u && u > l ? u - l : void 0;
		return createResultObject(o, m, p, h);
	};
	if (o) {
		let i = o + MODIFIER_SEPARATOR, s = c;
		c = (o) => o.startsWith(i) ? s(o.slice(i.length)) : createResultObject(EMPTY_MODIFIERS, !1, o, void 0, !0);
	}
	if (s) {
		let i = c;
		c = (o) => s({
			className: o,
			parseClassName: i
		});
	}
	return c;
}, createSortModifiers = (i) => {
	let o = /* @__PURE__ */ new Map();
	return i.orderSensitiveModifiers.forEach((i, s) => {
		o.set(i, 1e6 + s);
	}), (i) => {
		let s = [], c = [];
		for (let l = 0; l < i.length; l++) {
			let u = i[l], d = u[0] === "[", f = o.has(u);
			d || f ? (c.length > 0 && (c.sort(), s.push(...c), c = []), s.push(u)) : c.push(u);
		}
		return c.length > 0 && (c.sort(), s.push(...c)), s;
	};
}, createConfigUtils = (i) => ({
	cache: createLruCache(i.cacheSize),
	parseClassName: createParseClassName(i),
	sortModifiers: createSortModifiers(i),
	...createClassGroupUtils(i)
}), SPLIT_CLASSES_REGEX = /\s+/, mergeClassList = (i, o) => {
	let { parseClassName: s, getClassGroupId: c, getConflictingClassGroupIds: l, sortModifiers: u } = o, d = [], f = i.trim().split(SPLIT_CLASSES_REGEX), p = "";
	for (let i = f.length - 1; i >= 0; --i) {
		let o = f[i], { isExternal: m, modifiers: h, hasImportantModifier: g, baseClassName: _, maybePostfixModifierPosition: v } = s(o);
		if (m) {
			p = o + (p.length > 0 ? " " + p : p);
			continue;
		}
		let y = !!v, b = c(y ? _.substring(0, v) : _);
		if (!b) {
			if (!y) {
				p = o + (p.length > 0 ? " " + p : p);
				continue;
			}
			if (b = c(_), !b) {
				p = o + (p.length > 0 ? " " + p : p);
				continue;
			}
			y = !1;
		}
		let x = h.length === 0 ? "" : h.length === 1 ? h[0] : u(h).join(":"), S = g ? x + IMPORTANT_MODIFIER : x, C = S + b;
		if (d.indexOf(C) > -1) continue;
		d.push(C);
		let w = l(b, y);
		for (let i = 0; i < w.length; ++i) {
			let o = w[i];
			d.push(S + o);
		}
		p = o + (p.length > 0 ? " " + p : p);
	}
	return p;
}, twJoin = (...i) => {
	let o = 0, s, c, l = "";
	for (; o < i.length;) (s = i[o++]) && (c = toValue(s)) && (l && (l += " "), l += c);
	return l;
}, toValue = (i) => {
	if (typeof i == "string") return i;
	let o, s = "";
	for (let c = 0; c < i.length; c++) i[c] && (o = toValue(i[c])) && (s && (s += " "), s += o);
	return s;
}, createTailwindMerge = (i, ...o) => {
	let s, c, l, u, d = (d) => (s = createConfigUtils(o.reduce((i, o) => o(i), i())), c = s.cache.get, l = s.cache.set, u = f, f(d)), f = (i) => {
		let o = c(i);
		if (o) return o;
		let u = mergeClassList(i, s);
		return l(i, u), u;
	};
	return u = d, (...i) => u(twJoin(...i));
}, fallbackThemeArr = [], fromTheme = (i) => {
	let o = (o) => o[i] || fallbackThemeArr;
	return o.isThemeGetter = !0, o;
}, arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fractionRegex = /^\d+\/\d+$/, tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, isFraction = (i) => fractionRegex.test(i), isNumber = (i) => !!i && !Number.isNaN(Number(i)), isInteger = (i) => !!i && Number.isInteger(Number(i)), isPercent = (i) => i.endsWith("%") && isNumber(i.slice(0, -1)), isTshirtSize = (i) => tshirtUnitRegex.test(i), isAny = () => !0, isLengthOnly = (i) => lengthUnitRegex.test(i) && !colorFunctionRegex.test(i), isNever = () => !1, isShadow = (i) => shadowRegex.test(i), isImage = (i) => imageRegex.test(i), isAnyNonArbitrary = (i) => !isArbitraryValue(i) && !isArbitraryVariable(i), isArbitrarySize = (i) => getIsArbitraryValue(i, isLabelSize, isNever), isArbitraryValue = (i) => arbitraryValueRegex.test(i), isArbitraryLength = (i) => getIsArbitraryValue(i, isLabelLength, isLengthOnly), isArbitraryNumber = (i) => getIsArbitraryValue(i, isLabelNumber, isNumber), isArbitraryPosition = (i) => getIsArbitraryValue(i, isLabelPosition, isNever), isArbitraryImage = (i) => getIsArbitraryValue(i, isLabelImage, isImage), isArbitraryShadow = (i) => getIsArbitraryValue(i, isLabelShadow, isShadow), isArbitraryVariable = (i) => arbitraryVariableRegex.test(i), isArbitraryVariableLength = (i) => getIsArbitraryVariable(i, isLabelLength), isArbitraryVariableFamilyName = (i) => getIsArbitraryVariable(i, isLabelFamilyName), isArbitraryVariablePosition = (i) => getIsArbitraryVariable(i, isLabelPosition), isArbitraryVariableSize = (i) => getIsArbitraryVariable(i, isLabelSize), isArbitraryVariableImage = (i) => getIsArbitraryVariable(i, isLabelImage), isArbitraryVariableShadow = (i) => getIsArbitraryVariable(i, isLabelShadow, !0), getIsArbitraryValue = (i, o, s) => {
	let c = arbitraryValueRegex.exec(i);
	return c ? c[1] ? o(c[1]) : s(c[2]) : !1;
}, getIsArbitraryVariable = (i, o, s = !1) => {
	let c = arbitraryVariableRegex.exec(i);
	return c ? c[1] ? o(c[1]) : s : !1;
}, isLabelPosition = (i) => i === "position" || i === "percentage", isLabelImage = (i) => i === "image" || i === "url", isLabelSize = (i) => i === "length" || i === "size" || i === "bg-size", isLabelLength = (i) => i === "length", isLabelNumber = (i) => i === "number", isLabelFamilyName = (i) => i === "family-name", isLabelShadow = (i) => i === "shadow", twMerge = /* @__PURE__ */ createTailwindMerge(() => {
	let i = fromTheme("color"), o = fromTheme("font"), s = fromTheme("text"), c = fromTheme("font-weight"), l = fromTheme("tracking"), u = fromTheme("leading"), d = fromTheme("breakpoint"), f = fromTheme("container"), p = fromTheme("spacing"), m = fromTheme("radius"), h = fromTheme("shadow"), g = fromTheme("inset-shadow"), _ = fromTheme("text-shadow"), v = fromTheme("drop-shadow"), y = fromTheme("blur"), b = fromTheme("perspective"), x = fromTheme("aspect"), S = fromTheme("ease"), C = fromTheme("animate"), w = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], T = () => [
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
	], E = () => [
		...T(),
		isArbitraryVariable,
		isArbitraryValue
	], D = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], O = () => [
		"auto",
		"contain",
		"none"
	], k = () => [
		isArbitraryVariable,
		isArbitraryValue,
		p
	], A = () => [
		isFraction,
		"full",
		"auto",
		...k()
	], j = () => [
		isInteger,
		"none",
		"subgrid",
		isArbitraryVariable,
		isArbitraryValue
	], M = () => [
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
	], N = () => [
		isInteger,
		"auto",
		isArbitraryVariable,
		isArbitraryValue
	], P = () => [
		"auto",
		"min",
		"max",
		"fr",
		isArbitraryVariable,
		isArbitraryValue
	], F = () => [
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
	], I = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], L = () => ["auto", ...k()], R = () => [
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
		...k()
	], z = () => [
		i,
		isArbitraryVariable,
		isArbitraryValue
	], B = () => [
		...T(),
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
		m,
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
		y,
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
		...k()
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
				x
			] }],
			container: ["container"],
			columns: [{ columns: [
				isNumber,
				isArbitraryValue,
				isArbitraryVariable,
				f
			] }],
			"break-after": [{ "break-after": w() }],
			"break-before": [{ "break-before": w() }],
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
			"object-position": [{ object: E() }],
			overflow: [{ overflow: D() }],
			"overflow-x": [{ "overflow-x": D() }],
			"overflow-y": [{ "overflow-y": D() }],
			overscroll: [{ overscroll: O() }],
			"overscroll-x": [{ "overscroll-x": O() }],
			"overscroll-y": [{ "overscroll-y": O() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: A() }],
			"inset-x": [{ "inset-x": A() }],
			"inset-y": [{ "inset-y": A() }],
			start: [{ start: A() }],
			end: [{ end: A() }],
			top: [{ top: A() }],
			right: [{ right: A() }],
			bottom: [{ bottom: A() }],
			left: [{ left: A() }],
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
				f,
				...k()
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
			"grid-cols": [{ "grid-cols": j() }],
			"col-start-end": [{ col: M() }],
			"col-start": [{ "col-start": N() }],
			"col-end": [{ "col-end": N() }],
			"grid-rows": [{ "grid-rows": j() }],
			"row-start-end": [{ row: M() }],
			"row-start": [{ "row-start": N() }],
			"row-end": [{ "row-end": N() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": P() }],
			"auto-rows": [{ "auto-rows": P() }],
			gap: [{ gap: k() }],
			"gap-x": [{ "gap-x": k() }],
			"gap-y": [{ "gap-y": k() }],
			"justify-content": [{ justify: [...F(), "normal"] }],
			"justify-items": [{ "justify-items": [...I(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...I()] }],
			"align-content": [{ content: ["normal", ...F()] }],
			"align-items": [{ items: [...I(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...I(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": F() }],
			"place-items": [{ "place-items": [...I(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...I()] }],
			p: [{ p: k() }],
			px: [{ px: k() }],
			py: [{ py: k() }],
			ps: [{ ps: k() }],
			pe: [{ pe: k() }],
			pt: [{ pt: k() }],
			pr: [{ pr: k() }],
			pb: [{ pb: k() }],
			pl: [{ pl: k() }],
			m: [{ m: L() }],
			mx: [{ mx: L() }],
			my: [{ my: L() }],
			ms: [{ ms: L() }],
			me: [{ me: L() }],
			mt: [{ mt: L() }],
			mr: [{ mr: L() }],
			mb: [{ mb: L() }],
			ml: [{ ml: L() }],
			"space-x": [{ "space-x": k() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": k() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: R() }],
			w: [{ w: [
				f,
				"screen",
				...R()
			] }],
			"min-w": [{ "min-w": [
				f,
				"screen",
				"none",
				...R()
			] }],
			"max-w": [{ "max-w": [
				f,
				"screen",
				"none",
				"prose",
				{ screen: [d] },
				...R()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...R()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...R()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...R()
			] }],
			"font-size": [{ text: [
				"base",
				s,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				c,
				isArbitraryVariable,
				isArbitraryNumber
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
				isArbitraryValue,
				o
			] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				l,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"line-clamp": [{ "line-clamp": [
				isNumber,
				"none",
				isArbitraryVariable,
				isArbitraryNumber
			] }],
			leading: [{ leading: [u, ...k()] }],
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
			indent: [{ indent: k() }],
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
				h,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"shadow-color": [{ shadow: z() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				g,
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
				_,
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
			"mask-image-radial-pos": [{ "mask-radial-at": T() }],
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
				v,
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
			"border-spacing": [{ "border-spacing": k() }],
			"border-spacing-x": [{ "border-spacing-x": k() }],
			"border-spacing-y": [{ "border-spacing-y": k() }],
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
				S,
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
				C,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				b,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"perspective-origin": [{ "perspective-origin": E() }],
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
			"transform-origin": [{ origin: E() }],
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
			"scroll-m": [{ "scroll-m": k() }],
			"scroll-mx": [{ "scroll-mx": k() }],
			"scroll-my": [{ "scroll-my": k() }],
			"scroll-ms": [{ "scroll-ms": k() }],
			"scroll-me": [{ "scroll-me": k() }],
			"scroll-mt": [{ "scroll-mt": k() }],
			"scroll-mr": [{ "scroll-mr": k() }],
			"scroll-mb": [{ "scroll-mb": k() }],
			"scroll-ml": [{ "scroll-ml": k() }],
			"scroll-p": [{ "scroll-p": k() }],
			"scroll-px": [{ "scroll-px": k() }],
			"scroll-py": [{ "scroll-py": k() }],
			"scroll-ps": [{ "scroll-ps": k() }],
			"scroll-pe": [{ "scroll-pe": k() }],
			"scroll-pt": [{ "scroll-pt": k() }],
			"scroll-pr": [{ "scroll-pr": k() }],
			"scroll-pb": [{ "scroll-pb": k() }],
			"scroll-pl": [{ "scroll-pl": k() }],
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
function cn(...i) {
	return twMerge(clsx(i));
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
}), Button = React$1.forwardRef(({ className: i, variant: o, size: s, asChild: c = !1, ...u }, d) => /* @__PURE__ */ jsx(c ? Slot : "button", {
	className: cn(buttonVariants({
		variant: o,
		size: s,
		className: i
	})),
	ref: d,
	...u
}));
Button.displayName = "Button", typeof window < "u" && window.document && window.document.createElement;
function composeEventHandlers(i, o, { checkForDefaultPrevented: s = !0 } = {}) {
	return function(c) {
		if (i?.(c), s === !1 || !c.defaultPrevented) return o?.(c);
	};
}
function createContext2(i, s) {
	let c = React$1.createContext(s), u = (i) => {
		let { children: s, ...u } = i, d = React$1.useMemo(() => u, Object.values(u));
		return /* @__PURE__ */ jsx(c.Provider, {
			value: d,
			children: s
		});
	};
	u.displayName = i + "Provider";
	function d(l) {
		let u = React$1.useContext(c);
		if (u) return u;
		if (s !== void 0) return s;
		throw Error(`\`${l}\` must be used within \`${i}\``);
	}
	return [u, d];
}
function createContextScope(i, s = []) {
	let c = [];
	function u(s, u) {
		let d = React$1.createContext(u), f = c.length;
		c = [...c, u];
		let p = (s) => {
			let { scope: c, children: u, ...p } = s, m = c?.[i]?.[f] || d, h = React$1.useMemo(() => p, Object.values(p));
			return /* @__PURE__ */ jsx(m.Provider, {
				value: h,
				children: u
			});
		};
		p.displayName = s + "Provider";
		function m(c, l) {
			let p = l?.[i]?.[f] || d, m = React$1.useContext(p);
			if (m) return m;
			if (u !== void 0) return u;
			throw Error(`\`${c}\` must be used within \`${s}\``);
		}
		return [p, m];
	}
	let d = () => {
		let s = c.map((i) => React$1.createContext(i));
		return function(c) {
			let l = c?.[i] || s;
			return React$1.useMemo(() => ({ [`__scope${i}`]: {
				...c,
				[i]: l
			} }), [c, l]);
		};
	};
	return d.scopeName = i, [u, composeContextScopes(d, ...s)];
}
function composeContextScopes(...i) {
	let s = i[0];
	if (i.length === 1) return s;
	let c = () => {
		let c = i.map((i) => ({
			useScope: i(),
			scopeName: i.scopeName
		}));
		return function(i) {
			let l = c.reduce((o, { useScope: s, scopeName: c }) => {
				let l = s(i)[`__scope${c}`];
				return {
					...o,
					...l
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${s.scopeName}`]: l }), [l]);
		};
	};
	return c.scopeName = s.scopeName, c;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot(i) {
	let s = /* @__PURE__ */ createSlotClone(i), c = React$1.forwardRef((i, c) => {
		let { children: u, ...d } = i, f = React$1.Children.toArray(u), p = f.find(isSlottable);
		if (p) {
			let i = p.props.children, u = f.map((s) => s === p ? React$1.Children.count(i) > 1 ? React$1.Children.only(null) : React$1.isValidElement(i) ? i.props.children : null : s);
			return /* @__PURE__ */ jsx(s, {
				...d,
				ref: c,
				children: React$1.isValidElement(i) ? React$1.cloneElement(i, void 0, u) : null
			});
		}
		return /* @__PURE__ */ jsx(s, {
			...d,
			ref: c,
			children: u
		});
	});
	return c.displayName = `${i}.Slot`, c;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(i) {
	let s = React$1.forwardRef((i, s) => {
		let { children: c, ...l } = i;
		if (React$1.isValidElement(c)) {
			let i = getElementRef$1(c), u = mergeProps(l, c.props);
			return c.type !== React$1.Fragment && (u.ref = s ? composeRefs(s, i) : i), React$1.cloneElement(c, u);
		}
		return React$1.Children.count(c) > 1 ? React$1.Children.only(null) : null;
	});
	return s.displayName = `${i}.SlotClone`, s;
}
var SLOTTABLE_IDENTIFIER$1 = Symbol("radix.slottable");
function isSlottable(i) {
	return React$1.isValidElement(i) && typeof i.type == "function" && "__radixId" in i.type && i.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
function mergeProps(i, o) {
	let s = { ...o };
	for (let c in o) {
		let l = i[c], u = o[c];
		/^on[A-Z]/.test(c) ? l && u ? s[c] = (...i) => {
			let o = u(...i);
			return l(...i), o;
		} : l && (s[c] = l) : c === "style" ? s[c] = {
			...l,
			...u
		} : c === "className" && (s[c] = [l, u].filter(Boolean).join(" "));
	}
	return {
		...i,
		...s
	};
}
function getElementRef$1(i) {
	let o = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning;
	return s ? i.ref : (o = Object.getOwnPropertyDescriptor(i, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning, s ? i.props.ref : i.props.ref || i.ref);
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
].reduce((i, s) => {
	let c = /* @__PURE__ */ createSlot(`Primitive.${s}`), u = React$1.forwardRef((i, o) => {
		let { asChild: u, ...d } = i, f = u ? c : s;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(f, {
			...d,
			ref: o
		});
	});
	return u.displayName = `Primitive.${s}`, {
		...i,
		[s]: u
	};
}, {});
function dispatchDiscreteCustomEvent(i, o) {
	i && ReactDOM$1.flushSync(() => i.dispatchEvent(o));
}
function useCallbackRef(i) {
	let s = React$1.useRef(i);
	return React$1.useEffect(() => {
		s.current = i;
	}), React$1.useMemo(() => (...i) => s.current?.(...i), []);
}
function useEscapeKeydown(i, s = globalThis?.document) {
	let c = useCallbackRef(i);
	React$1.useEffect(() => {
		let i = (i) => {
			i.key === "Escape" && c(i);
		};
		return s.addEventListener("keydown", i, { capture: !0 }), () => s.removeEventListener("keydown", i, { capture: !0 });
	}, [c, s]);
}
var DISMISSABLE_LAYER_NAME = "DismissableLayer", CONTEXT_UPDATE = "dismissableLayer.update", POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside", FOCUS_OUTSIDE = "dismissableLayer.focusOutside", originalBodyPointerEvents, DismissableLayerContext = React$1.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), DismissableLayer = React$1.forwardRef((i, s) => {
	let { disableOutsidePointerEvents: c = !1, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: f, onInteractOutside: p, onDismiss: m, ...h } = i, _ = React$1.useContext(DismissableLayerContext), [v, y] = React$1.useState(null), b = v?.ownerDocument ?? globalThis?.document, [, x] = React$1.useState({}), S = useComposedRefs(s, (i) => y(i)), C = Array.from(_.layers), [w] = [..._.layersWithOutsidePointerEventsDisabled].slice(-1), T = C.indexOf(w), E = v ? C.indexOf(v) : -1, D = _.layersWithOutsidePointerEventsDisabled.size > 0, O = E >= T, k = usePointerDownOutside((i) => {
		let o = i.target, s = [..._.branches].some((i) => i.contains(o));
		!O || s || (d?.(i), p?.(i), i.defaultPrevented || m?.());
	}, b), A = useFocusOutside((i) => {
		let o = i.target;
		[..._.branches].some((i) => i.contains(o)) || (f?.(i), p?.(i), i.defaultPrevented || m?.());
	}, b);
	return useEscapeKeydown((i) => {
		E === _.layers.size - 1 && (u?.(i), !i.defaultPrevented && m && (i.preventDefault(), m()));
	}, b), React$1.useEffect(() => {
		if (v) return c && (_.layersWithOutsidePointerEventsDisabled.size === 0 && (originalBodyPointerEvents = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), _.layersWithOutsidePointerEventsDisabled.add(v)), _.layers.add(v), dispatchUpdate(), () => {
			c && _.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = originalBodyPointerEvents);
		};
	}, [
		v,
		b,
		c,
		_
	]), React$1.useEffect(() => () => {
		v && (_.layers.delete(v), _.layersWithOutsidePointerEventsDisabled.delete(v), dispatchUpdate());
	}, [v, _]), React$1.useEffect(() => {
		let i = () => x({});
		return document.addEventListener(CONTEXT_UPDATE, i), () => document.removeEventListener(CONTEXT_UPDATE, i);
	}, []), /* @__PURE__ */ jsx(Primitive.div, {
		...h,
		ref: S,
		style: {
			pointerEvents: D ? O ? "auto" : "none" : void 0,
			...i.style
		},
		onFocusCapture: composeEventHandlers(i.onFocusCapture, A.onFocusCapture),
		onBlurCapture: composeEventHandlers(i.onBlurCapture, A.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(i.onPointerDownCapture, k.onPointerDownCapture)
	});
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch", DismissableLayerBranch = React$1.forwardRef((i, s) => {
	let c = React$1.useContext(DismissableLayerContext), u = React$1.useRef(null), d = useComposedRefs(s, u);
	return React$1.useEffect(() => {
		let i = u.current;
		if (i) return c.branches.add(i), () => {
			c.branches.delete(i);
		};
	}, [c.branches]), /* @__PURE__ */ jsx(Primitive.div, {
		...i,
		ref: d
	});
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(i, s = globalThis?.document) {
	let c = useCallbackRef(i), l = React$1.useRef(!1), u = React$1.useRef(() => {});
	return React$1.useEffect(() => {
		let i = (i) => {
			if (i.target && !l.current) {
				let o = function() {
					handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, c, l, { discrete: !0 });
				}, l = { originalEvent: i };
				i.pointerType === "touch" ? (s.removeEventListener("click", u.current), u.current = o, s.addEventListener("click", u.current, { once: !0 })) : o();
			} else s.removeEventListener("click", u.current);
			l.current = !1;
		}, o = window.setTimeout(() => {
			s.addEventListener("pointerdown", i);
		}, 0);
		return () => {
			window.clearTimeout(o), s.removeEventListener("pointerdown", i), s.removeEventListener("click", u.current);
		};
	}, [s, c]), { onPointerDownCapture: () => l.current = !0 };
}
function useFocusOutside(i, s = globalThis?.document) {
	let c = useCallbackRef(i), l = React$1.useRef(!1);
	return React$1.useEffect(() => {
		let i = (i) => {
			i.target && !l.current && handleAndDispatchCustomEvent(FOCUS_OUTSIDE, c, { originalEvent: i }, { discrete: !1 });
		};
		return s.addEventListener("focusin", i), () => s.removeEventListener("focusin", i);
	}, [s, c]), {
		onFocusCapture: () => l.current = !0,
		onBlurCapture: () => l.current = !1
	};
}
function dispatchUpdate() {
	let i = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(i);
}
function handleAndDispatchCustomEvent(i, o, s, { discrete: c }) {
	let l = s.originalEvent.target, u = new CustomEvent(i, {
		bubbles: !1,
		cancelable: !0,
		detail: s
	});
	o && l.addEventListener(i, o, { once: !0 }), c ? dispatchDiscreteCustomEvent(l, u) : l.dispatchEvent(u);
}
var useLayoutEffect2 = globalThis?.document ? React$1.useLayoutEffect : () => {}, useReactId = React$1.useId || (() => void 0), count = 0;
function useId$1(i) {
	let [s, c] = React$1.useState(useReactId());
	return useLayoutEffect2(() => {
		i || c((i) => i ?? String(count++));
	}, [i]), i || (s ? `radix-${s}` : "");
}
var sides = [
	"top",
	"right",
	"bottom",
	"left"
], min = Math.min, max = Math.max, round = Math.round, floor = Math.floor, createCoords = (i) => ({
	x: i,
	y: i
}), oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, oppositeAlignmentMap = {
	start: "end",
	end: "start"
};
function clamp(i, o, s) {
	return max(i, min(o, s));
}
function evaluate(i, o) {
	return typeof i == "function" ? i(o) : i;
}
function getSide(i) {
	return i.split("-")[0];
}
function getAlignment(i) {
	return i.split("-")[1];
}
function getOppositeAxis(i) {
	return i === "x" ? "y" : "x";
}
function getAxisLength(i) {
	return i === "y" ? "height" : "width";
}
var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(i) {
	return yAxisSides.has(getSide(i)) ? "y" : "x";
}
function getAlignmentAxis(i) {
	return getOppositeAxis(getSideAxis(i));
}
function getAlignmentSides(i, o, s) {
	s === void 0 && (s = !1);
	let c = getAlignment(i), l = getAlignmentAxis(i), u = getAxisLength(l), d = l === "x" ? c === (s ? "end" : "start") ? "right" : "left" : c === "start" ? "bottom" : "top";
	return o.reference[u] > o.floating[u] && (d = getOppositePlacement(d)), [d, getOppositePlacement(d)];
}
function getExpandedPlacements(i) {
	let o = getOppositePlacement(i);
	return [
		getOppositeAlignmentPlacement(i),
		o,
		getOppositeAlignmentPlacement(o)
	];
}
function getOppositeAlignmentPlacement(i) {
	return i.replace(/start|end/g, (i) => oppositeAlignmentMap[i]);
}
var lrPlacement = ["left", "right"], rlPlacement = ["right", "left"], tbPlacement = ["top", "bottom"], btPlacement = ["bottom", "top"];
function getSideList(i, o, s) {
	switch (i) {
		case "top":
		case "bottom": return s ? o ? rlPlacement : lrPlacement : o ? lrPlacement : rlPlacement;
		case "left":
		case "right": return o ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(i, o, s, c) {
	let l = getAlignment(i), u = getSideList(getSide(i), s === "start", c);
	return l && (u = u.map((i) => i + "-" + l), o && (u = u.concat(u.map(getOppositeAlignmentPlacement)))), u;
}
function getOppositePlacement(i) {
	return i.replace(/left|right|bottom|top/g, (i) => oppositeSideMap[i]);
}
function expandPaddingObject(i) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...i
	};
}
function getPaddingObject(i) {
	return typeof i == "number" ? {
		top: i,
		right: i,
		bottom: i,
		left: i
	} : expandPaddingObject(i);
}
function rectToClientRect(i) {
	let { x: o, y: s, width: c, height: l } = i;
	return {
		width: c,
		height: l,
		top: s,
		left: o,
		right: o + c,
		bottom: s + l,
		x: o,
		y: s
	};
}
function computeCoordsFromPlacement(i, o, s) {
	let { reference: c, floating: l } = i, u = getSideAxis(o), d = getAlignmentAxis(o), f = getAxisLength(d), p = getSide(o), m = u === "y", h = c.x + c.width / 2 - l.width / 2, g = c.y + c.height / 2 - l.height / 2, _ = c[f] / 2 - l[f] / 2, v;
	switch (p) {
		case "top":
			v = {
				x: h,
				y: c.y - l.height
			};
			break;
		case "bottom":
			v = {
				x: h,
				y: c.y + c.height
			};
			break;
		case "right":
			v = {
				x: c.x + c.width,
				y: g
			};
			break;
		case "left":
			v = {
				x: c.x - l.width,
				y: g
			};
			break;
		default: v = {
			x: c.x,
			y: c.y
		};
	}
	switch (getAlignment(o)) {
		case "start":
			v[d] -= _ * (s && m ? -1 : 1);
			break;
		case "end":
			v[d] += _ * (s && m ? -1 : 1);
			break;
	}
	return v;
}
var computePosition$1 = async (i, o, s) => {
	let { placement: c = "bottom", strategy: l = "absolute", middleware: u = [], platform: d } = s, f = u.filter(Boolean), p = await (d.isRTL == null ? void 0 : d.isRTL(o)), m = await d.getElementRects({
		reference: i,
		floating: o,
		strategy: l
	}), { x: h, y: g } = computeCoordsFromPlacement(m, c, p), _ = c, v = {}, y = 0;
	for (let s = 0; s < f.length; s++) {
		let { name: u, fn: b } = f[s], { x, y: S, data: C, reset: w } = await b({
			x: h,
			y: g,
			initialPlacement: c,
			placement: _,
			strategy: l,
			middlewareData: v,
			rects: m,
			platform: d,
			elements: {
				reference: i,
				floating: o
			}
		});
		h = x ?? h, g = S ?? g, v = {
			...v,
			[u]: {
				...v[u],
				...C
			}
		}, w && y <= 50 && (y++, typeof w == "object" && (w.placement && (_ = w.placement), w.rects && (m = w.rects === !0 ? await d.getElementRects({
			reference: i,
			floating: o,
			strategy: l
		}) : w.rects), {x: h, y: g} = computeCoordsFromPlacement(m, _, p)), s = -1);
	}
	return {
		x: h,
		y: g,
		placement: _,
		strategy: l,
		middlewareData: v
	};
};
async function detectOverflow$1(i, o) {
	o === void 0 && (o = {});
	let { x: s, y: c, platform: l, rects: u, elements: d, strategy: f } = i, { boundary: p = "clippingAncestors", rootBoundary: m = "viewport", elementContext: h = "floating", altBoundary: g = !1, padding: _ = 0 } = evaluate(o, i), v = getPaddingObject(_), y = d[g ? h === "floating" ? "reference" : "floating" : h], b = rectToClientRect(await l.getClippingRect({
		element: await (l.isElement == null ? void 0 : l.isElement(y)) ?? !0 ? y : y.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(d.floating)),
		boundary: p,
		rootBoundary: m,
		strategy: f
	})), x = h === "floating" ? {
		x: s,
		y: c,
		width: u.floating.width,
		height: u.floating.height
	} : u.reference, S = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d.floating)), C = await (l.isElement == null ? void 0 : l.isElement(S)) && await (l.getScale == null ? void 0 : l.getScale(S)) || {
		x: 1,
		y: 1
	}, w = rectToClientRect(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: d,
		rect: x,
		offsetParent: S,
		strategy: f
	}) : x);
	return {
		top: (b.top - w.top + v.top) / C.y,
		bottom: (w.bottom - b.bottom + v.bottom) / C.y,
		left: (b.left - w.left + v.left) / C.x,
		right: (w.right - b.right + v.right) / C.x
	};
}
var arrow$2 = (i) => ({
	name: "arrow",
	options: i,
	async fn(o) {
		let { x: s, y: c, placement: l, rects: u, platform: d, elements: f, middlewareData: p } = o, { element: m, padding: h = 0 } = evaluate(i, o) || {};
		if (m == null) return {};
		let g = getPaddingObject(h), _ = {
			x: s,
			y: c
		}, v = getAlignmentAxis(l), y = getAxisLength(v), b = await d.getDimensions(m), x = v === "y", S = x ? "top" : "left", C = x ? "bottom" : "right", w = x ? "clientHeight" : "clientWidth", T = u.reference[y] + u.reference[v] - _[v] - u.floating[y], E = _[v] - u.reference[v], D = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(m)), O = D ? D[w] : 0;
		(!O || !await (d.isElement == null ? void 0 : d.isElement(D))) && (O = f.floating[w] || u.floating[y]);
		let k = T / 2 - E / 2, A = O / 2 - b[y] / 2 - 1, j = min(g[S], A), M = min(g[C], A), N = j, P = O - b[y] - M, F = O / 2 - b[y] / 2 + k, I = clamp(N, F, P), L = !p.arrow && getAlignment(l) != null && F !== I && u.reference[y] / 2 - (F < N ? j : M) - b[y] / 2 < 0, R = L ? F < N ? F - N : F - P : 0;
		return {
			[v]: _[v] + R,
			data: {
				[v]: I,
				centerOffset: F - I - R,
				...L && { alignmentOffset: R }
			},
			reset: L
		};
	}
}), flip$2 = function(i) {
	return i === void 0 && (i = {}), {
		name: "flip",
		options: i,
		async fn(o) {
			var s;
			let { placement: c, middlewareData: l, rects: u, initialPlacement: d, platform: f, elements: p } = o, { mainAxis: m = !0, crossAxis: h = !0, fallbackPlacements: g, fallbackStrategy: _ = "bestFit", fallbackAxisSideDirection: v = "none", flipAlignment: y = !0, ...b } = evaluate(i, o);
			if ((s = l.arrow) != null && s.alignmentOffset) return {};
			let x = getSide(c), S = getSideAxis(d), C = getSide(d) === d, w = await (f.isRTL == null ? void 0 : f.isRTL(p.floating)), T = g || (C || !y ? [getOppositePlacement(d)] : getExpandedPlacements(d)), E = v !== "none";
			!g && E && T.push(...getOppositeAxisPlacements(d, y, v, w));
			let D = [d, ...T], O = await detectOverflow$1(o, b), k = [], A = l.flip?.overflows || [];
			if (m && k.push(O[x]), h) {
				let i = getAlignmentSides(c, u, w);
				k.push(O[i[0]], O[i[1]]);
			}
			if (A = [...A, {
				placement: c,
				overflows: k
			}], !k.every((i) => i <= 0)) {
				let i = (l.flip?.index || 0) + 1, o = D[i];
				if (o && (!(h === "alignment" && S !== getSideAxis(o)) || A.every((i) => getSideAxis(i.placement) === S ? i.overflows[0] > 0 : !0))) return {
					data: {
						index: i,
						overflows: A
					},
					reset: { placement: o }
				};
				let s = A.filter((i) => i.overflows[0] <= 0).sort((i, o) => i.overflows[1] - o.overflows[1])[0]?.placement;
				if (!s) switch (_) {
					case "bestFit": {
						let i = A.filter((i) => {
							if (E) {
								let o = getSideAxis(i.placement);
								return o === S || o === "y";
							}
							return !0;
						}).map((i) => [i.placement, i.overflows.filter((i) => i > 0).reduce((i, o) => i + o, 0)]).sort((i, o) => i[1] - o[1])[0]?.[0];
						i && (s = i);
						break;
					}
					case "initialPlacement":
						s = d;
						break;
				}
				if (c !== s) return { reset: { placement: s } };
			}
			return {};
		}
	};
};
function getSideOffsets(i, o) {
	return {
		top: i.top - o.height,
		right: i.right - o.width,
		bottom: i.bottom - o.height,
		left: i.left - o.width
	};
}
function isAnySideFullyClipped(i) {
	return sides.some((o) => i[o] >= 0);
}
var hide$2 = function(i) {
	return i === void 0 && (i = {}), {
		name: "hide",
		options: i,
		async fn(o) {
			let { rects: s } = o, { strategy: c = "referenceHidden", ...l } = evaluate(i, o);
			switch (c) {
				case "referenceHidden": {
					let i = getSideOffsets(await detectOverflow$1(o, {
						...l,
						elementContext: "reference"
					}), s.reference);
					return { data: {
						referenceHiddenOffsets: i,
						referenceHidden: isAnySideFullyClipped(i)
					} };
				}
				case "escaped": {
					let i = getSideOffsets(await detectOverflow$1(o, {
						...l,
						altBoundary: !0
					}), s.floating);
					return { data: {
						escapedOffsets: i,
						escaped: isAnySideFullyClipped(i)
					} };
				}
				default: return {};
			}
		}
	};
}, originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(i, o) {
	let { placement: s, platform: c, elements: l } = i, u = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), d = getSide(s), f = getAlignment(s), p = getSideAxis(s) === "y", m = originSides.has(d) ? -1 : 1, h = u && p ? -1 : 1, g = evaluate(o, i), { mainAxis: _, crossAxis: v, alignmentAxis: y } = typeof g == "number" ? {
		mainAxis: g,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: g.mainAxis || 0,
		crossAxis: g.crossAxis || 0,
		alignmentAxis: g.alignmentAxis
	};
	return f && typeof y == "number" && (v = f === "end" ? y * -1 : y), p ? {
		x: v * h,
		y: _ * m
	} : {
		x: _ * m,
		y: v * h
	};
}
var offset$2 = function(i) {
	return i === void 0 && (i = 0), {
		name: "offset",
		options: i,
		async fn(o) {
			var s;
			let { x: c, y: l, placement: u, middlewareData: d } = o, f = await convertValueToCoords(o, i);
			return u === d.offset?.placement && (s = d.arrow) != null && s.alignmentOffset ? {} : {
				x: c + f.x,
				y: l + f.y,
				data: {
					...f,
					placement: u
				}
			};
		}
	};
}, shift$2 = function(i) {
	return i === void 0 && (i = {}), {
		name: "shift",
		options: i,
		async fn(o) {
			let { x: s, y: c, placement: l } = o, { mainAxis: u = !0, crossAxis: d = !1, limiter: f = { fn: (i) => {
				let { x: o, y: s } = i;
				return {
					x: o,
					y: s
				};
			} }, ...p } = evaluate(i, o), m = {
				x: s,
				y: c
			}, h = await detectOverflow$1(o, p), g = getSideAxis(getSide(l)), _ = getOppositeAxis(g), v = m[_], y = m[g];
			if (u) {
				let i = _ === "y" ? "top" : "left", o = _ === "y" ? "bottom" : "right", s = v + h[i], c = v - h[o];
				v = clamp(s, v, c);
			}
			if (d) {
				let i = g === "y" ? "top" : "left", o = g === "y" ? "bottom" : "right", s = y + h[i], c = y - h[o];
				y = clamp(s, y, c);
			}
			let b = f.fn({
				...o,
				[_]: v,
				[g]: y
			});
			return {
				...b,
				data: {
					x: b.x - s,
					y: b.y - c,
					enabled: {
						[_]: u,
						[g]: d
					}
				}
			};
		}
	};
}, limitShift$2 = function(i) {
	return i === void 0 && (i = {}), {
		options: i,
		fn(o) {
			let { x: s, y: c, placement: l, rects: u, middlewareData: d } = o, { offset: f = 0, mainAxis: p = !0, crossAxis: m = !0 } = evaluate(i, o), h = {
				x: s,
				y: c
			}, g = getSideAxis(l), _ = getOppositeAxis(g), v = h[_], y = h[g], b = evaluate(f, o), x = typeof b == "number" ? {
				mainAxis: b,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...b
			};
			if (p) {
				let i = _ === "y" ? "height" : "width", o = u.reference[_] - u.floating[i] + x.mainAxis, s = u.reference[_] + u.reference[i] - x.mainAxis;
				v < o ? v = o : v > s && (v = s);
			}
			if (m) {
				let i = _ === "y" ? "width" : "height", o = originSides.has(getSide(l)), s = u.reference[g] - u.floating[i] + (o && d.offset?.[g] || 0) + (o ? 0 : x.crossAxis), c = u.reference[g] + u.reference[i] + (o ? 0 : d.offset?.[g] || 0) - (o ? x.crossAxis : 0);
				y < s ? y = s : y > c && (y = c);
			}
			return {
				[_]: v,
				[g]: y
			};
		}
	};
}, size$2 = function(i) {
	return i === void 0 && (i = {}), {
		name: "size",
		options: i,
		async fn(o) {
			var s, c;
			let { placement: l, rects: u, platform: d, elements: f } = o, { apply: p = () => {}, ...m } = evaluate(i, o), h = await detectOverflow$1(o, m), g = getSide(l), _ = getAlignment(l), v = getSideAxis(l) === "y", { width: y, height: b } = u.floating, x, S;
			g === "top" || g === "bottom" ? (x = g, S = _ === (await (d.isRTL == null ? void 0 : d.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (S = g, x = _ === "end" ? "top" : "bottom");
			let C = b - h.top - h.bottom, w = y - h.left - h.right, T = min(b - h[x], C), E = min(y - h[S], w), D = !o.middlewareData.shift, O = T, k = E;
			if ((s = o.middlewareData.shift) != null && s.enabled.x && (k = w), (c = o.middlewareData.shift) != null && c.enabled.y && (O = C), D && !_) {
				let i = max(h.left, 0), o = max(h.right, 0), s = max(h.top, 0), c = max(h.bottom, 0);
				v ? k = y - 2 * (i !== 0 || o !== 0 ? i + o : max(h.left, h.right)) : O = b - 2 * (s !== 0 || c !== 0 ? s + c : max(h.top, h.bottom));
			}
			await p({
				...o,
				availableWidth: k,
				availableHeight: O
			});
			let A = await d.getDimensions(f.floating);
			return y !== A.width || b !== A.height ? { reset: { rects: !0 } } : {};
		}
	};
};
function hasWindow() {
	return typeof window < "u";
}
function getNodeName(i) {
	return isNode(i) ? (i.nodeName || "").toLowerCase() : "#document";
}
function getWindow(i) {
	var o;
	return (i == null || (o = i.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function getDocumentElement(i) {
	return ((isNode(i) ? i.ownerDocument : i.document) || window.document)?.documentElement;
}
function isNode(i) {
	return hasWindow() ? i instanceof Node || i instanceof getWindow(i).Node : !1;
}
function isElement(i) {
	return hasWindow() ? i instanceof Element || i instanceof getWindow(i).Element : !1;
}
function isHTMLElement(i) {
	return hasWindow() ? i instanceof HTMLElement || i instanceof getWindow(i).HTMLElement : !1;
}
function isShadowRoot(i) {
	return !hasWindow() || typeof ShadowRoot > "u" ? !1 : i instanceof ShadowRoot || i instanceof getWindow(i).ShadowRoot;
}
var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(i) {
	let { overflow: o, overflowX: s, overflowY: c, display: l } = getComputedStyle$1(i);
	return /auto|scroll|overlay|hidden|clip/.test(o + c + s) && !invalidOverflowDisplayValues.has(l);
}
var tableElements = /* @__PURE__ */ new Set([
	"table",
	"td",
	"th"
]);
function isTableElement(i) {
	return tableElements.has(getNodeName(i));
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(i) {
	return topLayerSelectors.some((o) => {
		try {
			return i.matches(o);
		} catch {
			return !1;
		}
	});
}
var transformProperties = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], willChangeValues = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], containValues = [
	"paint",
	"layout",
	"strict",
	"content"
];
function isContainingBlock(i) {
	let o = isWebKit(), s = isElement(i) ? getComputedStyle$1(i) : i;
	return transformProperties.some((i) => s[i] ? s[i] !== "none" : !1) || (s.containerType ? s.containerType !== "normal" : !1) || !o && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !o && (s.filter ? s.filter !== "none" : !1) || willChangeValues.some((i) => (s.willChange || "").includes(i)) || containValues.some((i) => (s.contain || "").includes(i));
}
function getContainingBlock(i) {
	let o = getParentNode(i);
	for (; isHTMLElement(o) && !isLastTraversableNode(o);) {
		if (isContainingBlock(o)) return o;
		if (isTopLayer(o)) return null;
		o = getParentNode(o);
	}
	return null;
}
function isWebKit() {
	return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
var lastTraversableNodeNames = /* @__PURE__ */ new Set([
	"html",
	"body",
	"#document"
]);
function isLastTraversableNode(i) {
	return lastTraversableNodeNames.has(getNodeName(i));
}
function getComputedStyle$1(i) {
	return getWindow(i).getComputedStyle(i);
}
function getNodeScroll(i) {
	return isElement(i) ? {
		scrollLeft: i.scrollLeft,
		scrollTop: i.scrollTop
	} : {
		scrollLeft: i.scrollX,
		scrollTop: i.scrollY
	};
}
function getParentNode(i) {
	if (getNodeName(i) === "html") return i;
	let o = i.assignedSlot || i.parentNode || isShadowRoot(i) && i.host || getDocumentElement(i);
	return isShadowRoot(o) ? o.host : o;
}
function getNearestOverflowAncestor(i) {
	let o = getParentNode(i);
	return isLastTraversableNode(o) ? i.ownerDocument ? i.ownerDocument.body : i.body : isHTMLElement(o) && isOverflowElement(o) ? o : getNearestOverflowAncestor(o);
}
function getOverflowAncestors(i, o, s) {
	o === void 0 && (o = []), s === void 0 && (s = !0);
	let c = getNearestOverflowAncestor(i), l = c === i.ownerDocument?.body, u = getWindow(c);
	if (l) {
		let i = getFrameElement(u);
		return o.concat(u, u.visualViewport || [], isOverflowElement(c) ? c : [], i && s ? getOverflowAncestors(i) : []);
	}
	return o.concat(c, getOverflowAncestors(c, [], s));
}
function getFrameElement(i) {
	return i.parent && Object.getPrototypeOf(i.parent) ? i.frameElement : null;
}
function getCssDimensions(i) {
	let o = getComputedStyle$1(i), s = parseFloat(o.width) || 0, c = parseFloat(o.height) || 0, l = isHTMLElement(i), u = l ? i.offsetWidth : s, d = l ? i.offsetHeight : c, f = round(s) !== u || round(c) !== d;
	return f && (s = u, c = d), {
		width: s,
		height: c,
		$: f
	};
}
function unwrapElement(i) {
	return isElement(i) ? i : i.contextElement;
}
function getScale(i) {
	let o = unwrapElement(i);
	if (!isHTMLElement(o)) return createCoords(1);
	let s = o.getBoundingClientRect(), { width: c, height: l, $: u } = getCssDimensions(o), d = (u ? round(s.width) : s.width) / c, f = (u ? round(s.height) : s.height) / l;
	return (!d || !Number.isFinite(d)) && (d = 1), (!f || !Number.isFinite(f)) && (f = 1), {
		x: d,
		y: f
	};
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(i) {
	let o = getWindow(i);
	return !isWebKit() || !o.visualViewport ? noOffsets : {
		x: o.visualViewport.offsetLeft,
		y: o.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(i, o, s) {
	return o === void 0 && (o = !1), !s || o && s !== getWindow(i) ? !1 : o;
}
function getBoundingClientRect(i, o, s, c) {
	o === void 0 && (o = !1), s === void 0 && (s = !1);
	let l = i.getBoundingClientRect(), u = unwrapElement(i), d = createCoords(1);
	o && (c ? isElement(c) && (d = getScale(c)) : d = getScale(i));
	let f = shouldAddVisualOffsets(u, s, c) ? getVisualOffsets(u) : createCoords(0), p = (l.left + f.x) / d.x, m = (l.top + f.y) / d.y, h = l.width / d.x, g = l.height / d.y;
	if (u) {
		let i = getWindow(u), o = c && isElement(c) ? getWindow(c) : c, s = i, l = getFrameElement(s);
		for (; l && c && o !== s;) {
			let i = getScale(l), o = l.getBoundingClientRect(), c = getComputedStyle$1(l), u = o.left + (l.clientLeft + parseFloat(c.paddingLeft)) * i.x, d = o.top + (l.clientTop + parseFloat(c.paddingTop)) * i.y;
			p *= i.x, m *= i.y, h *= i.x, g *= i.y, p += u, m += d, s = getWindow(l), l = getFrameElement(s);
		}
	}
	return rectToClientRect({
		width: h,
		height: g,
		x: p,
		y: m
	});
}
function getWindowScrollBarX(i, o) {
	let s = getNodeScroll(i).scrollLeft;
	return o ? o.left + s : getBoundingClientRect(getDocumentElement(i)).left + s;
}
function getHTMLOffset(i, o) {
	let s = i.getBoundingClientRect();
	return {
		x: s.left + o.scrollLeft - getWindowScrollBarX(i, s),
		y: s.top + o.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(i) {
	let { elements: o, rect: s, offsetParent: c, strategy: l } = i, u = l === "fixed", d = getDocumentElement(c), f = o ? isTopLayer(o.floating) : !1;
	if (c === d || f && u) return s;
	let p = {
		scrollLeft: 0,
		scrollTop: 0
	}, m = createCoords(1), h = createCoords(0), g = isHTMLElement(c);
	if ((g || !g && !u) && ((getNodeName(c) !== "body" || isOverflowElement(d)) && (p = getNodeScroll(c)), isHTMLElement(c))) {
		let i = getBoundingClientRect(c);
		m = getScale(c), h.x = i.x + c.clientLeft, h.y = i.y + c.clientTop;
	}
	let _ = d && !g && !u ? getHTMLOffset(d, p) : createCoords(0);
	return {
		width: s.width * m.x,
		height: s.height * m.y,
		x: s.x * m.x - p.scrollLeft * m.x + h.x + _.x,
		y: s.y * m.y - p.scrollTop * m.y + h.y + _.y
	};
}
function getClientRects(i) {
	return Array.from(i.getClientRects());
}
function getDocumentRect(i) {
	let o = getDocumentElement(i), s = getNodeScroll(i), c = i.ownerDocument.body, l = max(o.scrollWidth, o.clientWidth, c.scrollWidth, c.clientWidth), u = max(o.scrollHeight, o.clientHeight, c.scrollHeight, c.clientHeight), d = -s.scrollLeft + getWindowScrollBarX(i), f = -s.scrollTop;
	return getComputedStyle$1(c).direction === "rtl" && (d += max(o.clientWidth, c.clientWidth) - l), {
		width: l,
		height: u,
		x: d,
		y: f
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(i, o) {
	let s = getWindow(i), c = getDocumentElement(i), l = s.visualViewport, u = c.clientWidth, d = c.clientHeight, f = 0, p = 0;
	if (l) {
		u = l.width, d = l.height;
		let i = isWebKit();
		(!i || i && o === "fixed") && (f = l.offsetLeft, p = l.offsetTop);
	}
	let m = getWindowScrollBarX(c);
	if (m <= 0) {
		let i = c.ownerDocument, o = i.body, s = getComputedStyle(o), l = i.compatMode === "CSS1Compat" && parseFloat(s.marginLeft) + parseFloat(s.marginRight) || 0, d = Math.abs(c.clientWidth - o.clientWidth - l);
		d <= SCROLLBAR_MAX && (u -= d);
	} else m <= SCROLLBAR_MAX && (u += m);
	return {
		width: u,
		height: d,
		x: f,
		y: p
	};
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(i, o) {
	let s = getBoundingClientRect(i, !0, o === "fixed"), c = s.top + i.clientTop, l = s.left + i.clientLeft, u = isHTMLElement(i) ? getScale(i) : createCoords(1);
	return {
		width: i.clientWidth * u.x,
		height: i.clientHeight * u.y,
		x: l * u.x,
		y: c * u.y
	};
}
function getClientRectFromClippingAncestor(i, o, s) {
	let c;
	if (o === "viewport") c = getViewportRect(i, s);
	else if (o === "document") c = getDocumentRect(getDocumentElement(i));
	else if (isElement(o)) c = getInnerBoundingClientRect(o, s);
	else {
		let s = getVisualOffsets(i);
		c = {
			x: o.x - s.x,
			y: o.y - s.y,
			width: o.width,
			height: o.height
		};
	}
	return rectToClientRect(c);
}
function hasFixedPositionAncestor(i, o) {
	let s = getParentNode(i);
	return s === o || !isElement(s) || isLastTraversableNode(s) ? !1 : getComputedStyle$1(s).position === "fixed" || hasFixedPositionAncestor(s, o);
}
function getClippingElementAncestors(i, o) {
	let s = o.get(i);
	if (s) return s;
	let c = getOverflowAncestors(i, [], !1).filter((i) => isElement(i) && getNodeName(i) !== "body"), l = null, u = getComputedStyle$1(i).position === "fixed", d = u ? getParentNode(i) : i;
	for (; isElement(d) && !isLastTraversableNode(d);) {
		let o = getComputedStyle$1(d), s = isContainingBlock(d);
		!s && o.position === "fixed" && (l = null), (u ? !s && !l : !s && o.position === "static" && l && absoluteOrFixed.has(l.position) || isOverflowElement(d) && !s && hasFixedPositionAncestor(i, d)) ? c = c.filter((i) => i !== d) : l = o, d = getParentNode(d);
	}
	return o.set(i, c), c;
}
function getClippingRect(i) {
	let { element: o, boundary: s, rootBoundary: c, strategy: l } = i, u = [...s === "clippingAncestors" ? isTopLayer(o) ? [] : getClippingElementAncestors(o, this._c) : [].concat(s), c], d = u[0], f = u.reduce((i, s) => {
		let c = getClientRectFromClippingAncestor(o, s, l);
		return i.top = max(c.top, i.top), i.right = min(c.right, i.right), i.bottom = min(c.bottom, i.bottom), i.left = max(c.left, i.left), i;
	}, getClientRectFromClippingAncestor(o, d, l));
	return {
		width: f.right - f.left,
		height: f.bottom - f.top,
		x: f.left,
		y: f.top
	};
}
function getDimensions(i) {
	let { width: o, height: s } = getCssDimensions(i);
	return {
		width: o,
		height: s
	};
}
function getRectRelativeToOffsetParent(i, o, s) {
	let c = isHTMLElement(o), l = getDocumentElement(o), u = s === "fixed", d = getBoundingClientRect(i, !0, u, o), f = {
		scrollLeft: 0,
		scrollTop: 0
	}, p = createCoords(0);
	function m() {
		p.x = getWindowScrollBarX(l);
	}
	if (c || !c && !u) if ((getNodeName(o) !== "body" || isOverflowElement(l)) && (f = getNodeScroll(o)), c) {
		let i = getBoundingClientRect(o, !0, u, o);
		p.x = i.x + o.clientLeft, p.y = i.y + o.clientTop;
	} else l && m();
	u && !c && l && m();
	let h = l && !c && !u ? getHTMLOffset(l, f) : createCoords(0);
	return {
		x: d.left + f.scrollLeft - p.x - h.x,
		y: d.top + f.scrollTop - p.y - h.y,
		width: d.width,
		height: d.height
	};
}
function isStaticPositioned(i) {
	return getComputedStyle$1(i).position === "static";
}
function getTrueOffsetParent(i, o) {
	if (!isHTMLElement(i) || getComputedStyle$1(i).position === "fixed") return null;
	if (o) return o(i);
	let s = i.offsetParent;
	return getDocumentElement(i) === s && (s = s.ownerDocument.body), s;
}
function getOffsetParent(i, o) {
	let s = getWindow(i);
	if (isTopLayer(i)) return s;
	if (!isHTMLElement(i)) {
		let o = getParentNode(i);
		for (; o && !isLastTraversableNode(o);) {
			if (isElement(o) && !isStaticPositioned(o)) return o;
			o = getParentNode(o);
		}
		return s;
	}
	let c = getTrueOffsetParent(i, o);
	for (; c && isTableElement(c) && isStaticPositioned(c);) c = getTrueOffsetParent(c, o);
	return c && isLastTraversableNode(c) && isStaticPositioned(c) && !isContainingBlock(c) ? s : c || getContainingBlock(i) || s;
}
var getElementRects = async function(i) {
	let o = this.getOffsetParent || getOffsetParent, s = this.getDimensions, c = await s(i.floating);
	return {
		reference: getRectRelativeToOffsetParent(i.reference, await o(i.floating), i.strategy),
		floating: {
			x: 0,
			y: 0,
			width: c.width,
			height: c.height
		}
	};
};
function isRTL(i) {
	return getComputedStyle$1(i).direction === "rtl";
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
function rectsAreEqual(i, o) {
	return i.x === o.x && i.y === o.y && i.width === o.width && i.height === o.height;
}
function observeMove(i, o) {
	let s = null, c, l = getDocumentElement(i);
	function u() {
		var i;
		clearTimeout(c), (i = s) == null || i.disconnect(), s = null;
	}
	function d(f, p) {
		f === void 0 && (f = !1), p === void 0 && (p = 1), u();
		let m = i.getBoundingClientRect(), { left: h, top: g, width: _, height: v } = m;
		if (f || o(), !_ || !v) return;
		let y = floor(g), b = floor(l.clientWidth - (h + _)), x = floor(l.clientHeight - (g + v)), S = floor(h), C = {
			rootMargin: -y + "px " + -b + "px " + -x + "px " + -S + "px",
			threshold: max(0, min(1, p)) || 1
		}, w = !0;
		function T(o) {
			let s = o[0].intersectionRatio;
			if (s !== p) {
				if (!w) return d();
				s ? d(!1, s) : c = setTimeout(() => {
					d(!1, 1e-7);
				}, 1e3);
			}
			s === 1 && !rectsAreEqual(m, i.getBoundingClientRect()) && d(), w = !1;
		}
		try {
			s = new IntersectionObserver(T, {
				...C,
				root: l.ownerDocument
			});
		} catch {
			s = new IntersectionObserver(T, C);
		}
		s.observe(i);
	}
	return d(!0), u;
}
function autoUpdate(i, o, s, c) {
	c === void 0 && (c = {});
	let { ancestorScroll: l = !0, ancestorResize: u = !0, elementResize: d = typeof ResizeObserver == "function", layoutShift: f = typeof IntersectionObserver == "function", animationFrame: p = !1 } = c, m = unwrapElement(i), h = l || u ? [...m ? getOverflowAncestors(m) : [], ...getOverflowAncestors(o)] : [];
	h.forEach((i) => {
		l && i.addEventListener("scroll", s, { passive: !0 }), u && i.addEventListener("resize", s);
	});
	let g = m && f ? observeMove(m, s) : null, _ = -1, v = null;
	d && (v = new ResizeObserver((i) => {
		let [c] = i;
		c && c.target === m && v && (v.unobserve(o), cancelAnimationFrame(_), _ = requestAnimationFrame(() => {
			var i;
			(i = v) == null || i.observe(o);
		})), s();
	}), m && !p && v.observe(m), v.observe(o));
	let y, b = p ? getBoundingClientRect(i) : null;
	p && x();
	function x() {
		let o = getBoundingClientRect(i);
		b && !rectsAreEqual(b, o) && s(), b = o, y = requestAnimationFrame(x);
	}
	return s(), () => {
		var i;
		h.forEach((i) => {
			l && i.removeEventListener("scroll", s), u && i.removeEventListener("resize", s);
		}), g?.(), (i = v) == null || i.disconnect(), v = null, p && cancelAnimationFrame(y);
	};
}
var offset$1 = offset$2, shift$1 = shift$2, flip$1 = flip$2, size$1 = size$2, hide$1 = hide$2, arrow$1 = arrow$2, limitShift$1 = limitShift$2, computePosition = (i, o, s) => {
	let c = /* @__PURE__ */ new Map(), l = {
		platform,
		...s
	}, u = {
		...l.platform,
		_c: c
	};
	return computePosition$1(i, o, {
		...l,
		platform: u
	});
}, index = typeof document < "u" ? useLayoutEffect : function() {};
function deepEqual(i, o) {
	if (i === o) return !0;
	if (typeof i != typeof o) return !1;
	if (typeof i == "function" && i.toString() === o.toString()) return !0;
	let s, c, l;
	if (i && o && typeof i == "object") {
		if (Array.isArray(i)) {
			if (s = i.length, s !== o.length) return !1;
			for (c = s; c-- !== 0;) if (!deepEqual(i[c], o[c])) return !1;
			return !0;
		}
		if (l = Object.keys(i), s = l.length, s !== Object.keys(o).length) return !1;
		for (c = s; c-- !== 0;) if (!{}.hasOwnProperty.call(o, l[c])) return !1;
		for (c = s; c-- !== 0;) {
			let s = l[c];
			if (!(s === "_owner" && i.$$typeof) && !deepEqual(i[s], o[s])) return !1;
		}
		return !0;
	}
	return i !== i && o !== o;
}
function getDPR(i) {
	return typeof window > "u" ? 1 : (i.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(i, o) {
	let s = getDPR(i);
	return Math.round(o * s) / s;
}
function useLatestRef(i) {
	let s = React$1.useRef(i);
	return index(() => {
		s.current = i;
	}), s;
}
function useFloating(i) {
	i === void 0 && (i = {});
	let { placement: s = "bottom", strategy: c = "absolute", middleware: l = [], platform: u, elements: { reference: f, floating: p } = {}, transform: m = !0, whileElementsMounted: h, open: g } = i, [_, v] = React$1.useState({
		x: 0,
		y: 0,
		strategy: c,
		placement: s,
		middlewareData: {},
		isPositioned: !1
	}), [y, b] = React$1.useState(l);
	deepEqual(y, l) || b(l);
	let [x, S] = React$1.useState(null), [C, w] = React$1.useState(null), T = React$1.useCallback((i) => {
		i !== k.current && (k.current = i, S(i));
	}, []), E = React$1.useCallback((i) => {
		i !== A.current && (A.current = i, w(i));
	}, []), D = f || x, O = p || C, k = React$1.useRef(null), A = React$1.useRef(null), j = React$1.useRef(_), M = h != null, N = useLatestRef(h), P = useLatestRef(u), F = useLatestRef(g), I = React$1.useCallback(() => {
		if (!k.current || !A.current) return;
		let i = {
			placement: s,
			strategy: c,
			middleware: y
		};
		P.current && (i.platform = P.current), computePosition(k.current, A.current, i).then((i) => {
			let o = {
				...i,
				isPositioned: F.current !== !1
			};
			L.current && !deepEqual(j.current, o) && (j.current = o, ReactDOM$1.flushSync(() => {
				v(o);
			}));
		});
	}, [
		y,
		s,
		c,
		P,
		F
	]);
	index(() => {
		g === !1 && j.current.isPositioned && (j.current.isPositioned = !1, v((i) => ({
			...i,
			isPositioned: !1
		})));
	}, [g]);
	let L = React$1.useRef(!1);
	index(() => (L.current = !0, () => {
		L.current = !1;
	}), []), index(() => {
		if (D && (k.current = D), O && (A.current = O), D && O) {
			if (N.current) return N.current(D, O, I);
			I();
		}
	}, [
		D,
		O,
		I,
		N,
		M
	]);
	let R = React$1.useMemo(() => ({
		reference: k,
		floating: A,
		setReference: T,
		setFloating: E
	}), [T, E]), z = React$1.useMemo(() => ({
		reference: D,
		floating: O
	}), [D, O]), B = React$1.useMemo(() => {
		let i = {
			position: c,
			left: 0,
			top: 0
		};
		if (!z.floating) return i;
		let o = roundByDPR(z.floating, _.x), s = roundByDPR(z.floating, _.y);
		return m ? {
			...i,
			transform: "translate(" + o + "px, " + s + "px)",
			...getDPR(z.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: c,
			left: o,
			top: s
		};
	}, [
		c,
		m,
		z.floating,
		_.x,
		_.y
	]);
	return React$1.useMemo(() => ({
		..._,
		update: I,
		refs: R,
		elements: z,
		floatingStyles: B
	}), [
		_,
		I,
		R,
		z,
		B
	]);
}
var arrow$1$1 = (i) => {
	function o(i) {
		return {}.hasOwnProperty.call(i, "current");
	}
	return {
		name: "arrow",
		options: i,
		fn(s) {
			let { element: c, padding: l } = typeof i == "function" ? i(s) : i;
			return c && o(c) ? c.current == null ? {} : arrow$1({
				element: c.current,
				padding: l
			}).fn(s) : c ? arrow$1({
				element: c,
				padding: l
			}).fn(s) : {};
		}
	};
}, offset = (i, o) => ({
	...offset$1(i),
	options: [i, o]
}), shift = (i, o) => ({
	...shift$1(i),
	options: [i, o]
}), limitShift = (i, o) => ({
	...limitShift$1(i),
	options: [i, o]
}), flip = (i, o) => ({
	...flip$1(i),
	options: [i, o]
}), size = (i, o) => ({
	...size$1(i),
	options: [i, o]
}), hide = (i, o) => ({
	...hide$1(i),
	options: [i, o]
}), arrow = (i, o) => ({
	...arrow$1$1(i),
	options: [i, o]
}), NAME$1 = "Arrow", Arrow$1 = React$1.forwardRef((i, o) => {
	let { children: s, width: c = 10, height: u = 5, ...d } = i;
	return /* @__PURE__ */ jsx(Primitive.svg, {
		...d,
		ref: o,
		width: c,
		height: u,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: i.asChild ? s : /* @__PURE__ */ jsx("polygon", { points: "0,0 30,0 15,10" })
	});
});
Arrow$1.displayName = NAME$1;
var Root$1 = Arrow$1;
function useSize(i) {
	let [s, c] = React$1.useState(void 0);
	return useLayoutEffect2(() => {
		if (i) {
			c({
				width: i.offsetWidth,
				height: i.offsetHeight
			});
			let o = new ResizeObserver((o) => {
				if (!Array.isArray(o) || !o.length) return;
				let s = o[0], l, u;
				if ("borderBoxSize" in s) {
					let i = s.borderBoxSize, o = Array.isArray(i) ? i[0] : i;
					l = o.inlineSize, u = o.blockSize;
				} else l = i.offsetWidth, u = i.offsetHeight;
				c({
					width: l,
					height: u
				});
			});
			return o.observe(i, { box: "border-box" }), () => o.unobserve(i);
		} else c(void 0);
	}, [i]), s;
}
var POPPER_NAME = "Popper", [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME), [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME), Popper = (i) => {
	let { __scopePopper: s, children: c } = i, [u, d] = React$1.useState(null);
	return /* @__PURE__ */ jsx(PopperProvider, {
		scope: s,
		anchor: u,
		onAnchorChange: d,
		children: c
	});
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor", PopperAnchor = React$1.forwardRef((i, s) => {
	let { __scopePopper: c, virtualRef: u, ...d } = i, f = usePopperContext(ANCHOR_NAME, c), p = React$1.useRef(null), m = useComposedRefs(s, p), h = React$1.useRef(null);
	return React$1.useEffect(() => {
		let i = h.current;
		h.current = u?.current || p.current, i !== h.current && f.onAnchorChange(h.current);
	}), u ? null : /* @__PURE__ */ jsx(Primitive.div, {
		...d,
		ref: m
	});
});
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME$1 = "PopperContent", [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME$1), PopperContent = React$1.forwardRef((i, s) => {
	let { __scopePopper: c, side: u = "bottom", sideOffset: d = 0, align: f = "center", alignOffset: p = 0, arrowPadding: m = 0, avoidCollisions: h = !0, collisionBoundary: _ = [], collisionPadding: v = 0, sticky: y = "partial", hideWhenDetached: b = !1, updatePositionStrategy: x = "optimized", onPlaced: S, ...C } = i, w = usePopperContext(CONTENT_NAME$1, c), [T, E] = React$1.useState(null), D = useComposedRefs(s, (i) => E(i)), [O, k] = React$1.useState(null), A = useSize(O), j = A?.width ?? 0, M = A?.height ?? 0, N = u + (f === "center" ? "" : "-" + f), P = typeof v == "number" ? v : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...v
	}, F = Array.isArray(_) ? _ : [_], I = F.length > 0, L = {
		padding: P,
		boundary: F.filter(isNotNull),
		altBoundary: I
	}, { refs: R, floatingStyles: z, placement: B, isPositioned: V, middlewareData: H } = useFloating({
		strategy: "fixed",
		placement: N,
		whileElementsMounted: (...i) => autoUpdate(...i, { animationFrame: x === "always" }),
		elements: { reference: w.anchor },
		middleware: [
			offset({
				mainAxis: d + M,
				alignmentAxis: p
			}),
			h && shift({
				mainAxis: !0,
				crossAxis: !1,
				limiter: y === "partial" ? limitShift() : void 0,
				...L
			}),
			h && flip({ ...L }),
			size({
				...L,
				apply: ({ elements: i, rects: o, availableWidth: s, availableHeight: c }) => {
					let { width: l, height: u } = o.reference, d = i.floating.style;
					d.setProperty("--radix-popper-available-width", `${s}px`), d.setProperty("--radix-popper-available-height", `${c}px`), d.setProperty("--radix-popper-anchor-width", `${l}px`), d.setProperty("--radix-popper-anchor-height", `${u}px`);
				}
			}),
			O && arrow({
				element: O,
				padding: m
			}),
			transformOrigin({
				arrowWidth: j,
				arrowHeight: M
			}),
			b && hide({
				strategy: "referenceHidden",
				...L
			})
		]
	}), [U, W] = getSideAndAlignFromPlacement(B), G = useCallbackRef(S);
	useLayoutEffect2(() => {
		V && G?.();
	}, [V, G]);
	let K = H.arrow?.x, q = H.arrow?.y, J = H.arrow?.centerOffset !== 0, [Y, X] = React$1.useState();
	return useLayoutEffect2(() => {
		T && X(window.getComputedStyle(T).zIndex);
	}, [T]), /* @__PURE__ */ jsx("div", {
		ref: R.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...z,
			transform: V ? z.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: Y,
			"--radix-popper-transform-origin": [H.transformOrigin?.x, H.transformOrigin?.y].join(" "),
			...H.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: i.dir,
		children: /* @__PURE__ */ jsx(PopperContentProvider, {
			scope: c,
			placedSide: U,
			onArrowChange: k,
			arrowX: K,
			arrowY: q,
			shouldHideArrow: J,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				"data-side": U,
				"data-align": W,
				...C,
				ref: D,
				style: {
					...C.style,
					animation: V ? void 0 : "none"
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
}, PopperArrow = React$1.forwardRef(function(i, o) {
	let { __scopePopper: s, ...c } = i, u = useContentContext(ARROW_NAME$1, s), d = OPPOSITE_SIDE[u.placedSide];
	return /* @__PURE__ */ jsx("span", {
		ref: u.onArrowChange,
		style: {
			position: "absolute",
			left: u.arrowX,
			top: u.arrowY,
			[d]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[u.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[u.placedSide],
			visibility: u.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ jsx(Root$1, {
			...c,
			ref: o,
			style: {
				...c.style,
				display: "block"
			}
		})
	});
});
PopperArrow.displayName = ARROW_NAME$1;
function isNotNull(i) {
	return i !== null;
}
var transformOrigin = (i) => ({
	name: "transformOrigin",
	options: i,
	fn(o) {
		let { placement: s, rects: c, middlewareData: l } = o, u = l.arrow?.centerOffset !== 0, d = u ? 0 : i.arrowWidth, f = u ? 0 : i.arrowHeight, [p, m] = getSideAndAlignFromPlacement(s), h = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[m], g = (l.arrow?.x ?? 0) + d / 2, _ = (l.arrow?.y ?? 0) + f / 2, v = "", y = "";
		return p === "bottom" ? (v = u ? h : `${g}px`, y = `${-f}px`) : p === "top" ? (v = u ? h : `${g}px`, y = `${c.floating.height + f}px`) : p === "right" ? (v = `${-f}px`, y = u ? h : `${_}px`) : p === "left" && (v = `${c.floating.width + f}px`, y = u ? h : `${_}px`), { data: {
			x: v,
			y
		} };
	}
});
function getSideAndAlignFromPlacement(i) {
	let [o, s = "center"] = i.split("-");
	return [o, s];
}
var Root2 = Popper, Anchor = PopperAnchor, Content = PopperContent, Arrow = PopperArrow, PORTAL_NAME$1 = "Portal", Portal = React$1.forwardRef((i, s) => {
	let { container: c, ...u } = i, [d, p] = React$1.useState(!1);
	useLayoutEffect2(() => p(!0), []);
	let m = c || d && globalThis?.document?.body;
	return m ? ReactDOM.createPortal(/* @__PURE__ */ jsx(Primitive.div, {
		...u,
		ref: s
	}), m) : null;
});
Portal.displayName = PORTAL_NAME$1;
function useStateMachine(i, s) {
	return React$1.useReducer((i, o) => s[i][o] ?? i, i);
}
var Presence = (i) => {
	let { present: s, children: c } = i, l = usePresence(s), u = typeof c == "function" ? c({ present: l.isPresent }) : React$1.Children.only(c), d = useComposedRefs(l.ref, getElementRef(u));
	return typeof c == "function" || l.isPresent ? React$1.cloneElement(u, { ref: d }) : null;
};
Presence.displayName = "Presence";
function usePresence(i) {
	let [s, c] = React$1.useState(), l = React$1.useRef(null), u = React$1.useRef(i), d = React$1.useRef("none"), [f, p] = useStateMachine(i ? "mounted" : "unmounted", {
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
		let i = getAnimationName(l.current);
		d.current = f === "mounted" ? i : "none";
	}, [f]), useLayoutEffect2(() => {
		let o = l.current, s = u.current;
		if (s !== i) {
			let c = d.current, l = getAnimationName(o);
			i ? p("MOUNT") : l === "none" || o?.display === "none" ? p("UNMOUNT") : p(s && c !== l ? "ANIMATION_OUT" : "UNMOUNT"), u.current = i;
		}
	}, [i, p]), useLayoutEffect2(() => {
		if (s) {
			let i, o = s.ownerDocument.defaultView ?? window, c = (c) => {
				let d = getAnimationName(l.current).includes(CSS.escape(c.animationName));
				if (c.target === s && d && (p("ANIMATION_END"), !u.current)) {
					let c = s.style.animationFillMode;
					s.style.animationFillMode = "forwards", i = o.setTimeout(() => {
						s.style.animationFillMode === "forwards" && (s.style.animationFillMode = c);
					});
				}
			}, f = (i) => {
				i.target === s && (d.current = getAnimationName(l.current));
			};
			return s.addEventListener("animationstart", f), s.addEventListener("animationcancel", c), s.addEventListener("animationend", c), () => {
				o.clearTimeout(i), s.removeEventListener("animationstart", f), s.removeEventListener("animationcancel", c), s.removeEventListener("animationend", c);
			};
		} else p("ANIMATION_END");
	}, [s, p]), {
		isPresent: ["mounted", "unmountSuspended"].includes(f),
		ref: React$1.useCallback((i) => {
			l.current = i ? getComputedStyle(i) : null, c(i);
		}, [])
	};
}
function getAnimationName(i) {
	return i?.animationName || "none";
}
function getElementRef(i) {
	let o = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning;
	return s ? i.ref : (o = Object.getOwnPropertyDescriptor(i, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning, s ? i.props.ref : i.props.ref || i.ref);
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable(i) {
	let o = ({ children: i }) => /* @__PURE__ */ jsx(Fragment$1, { children: i });
	return o.displayName = `${i}.Slottable`, o.__radixId = SLOTTABLE_IDENTIFIER, o;
}
var useInsertionEffect$1 = React$1.useInsertionEffect || useLayoutEffect2;
function useControllableState({ prop: i, defaultProp: s, onChange: c = () => {}, caller: l }) {
	let [u, d, f] = useUncontrolledState({
		defaultProp: s,
		onChange: c
	}), p = i !== void 0, m = p ? i : u;
	{
		let s = React$1.useRef(i !== void 0);
		React$1.useEffect(() => {
			let i = s.current;
			if (i !== p) {
				let o = i ? "controlled" : "uncontrolled", s = p ? "controlled" : "uncontrolled";
				console.warn(`${l} is changing from ${o} to ${s}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
			}
			s.current = p;
		}, [p, l]);
	}
	return [m, React$1.useCallback((o) => {
		if (p) {
			let s = isFunction(o) ? o(i) : o;
			s !== i && f.current?.(s);
		} else d(o);
	}, [
		p,
		i,
		d,
		f
	])];
}
function useUncontrolledState({ defaultProp: i, onChange: s }) {
	let [c, l] = React$1.useState(i), u = React$1.useRef(c), d = React$1.useRef(s);
	return useInsertionEffect$1(() => {
		d.current = s;
	}, [s]), React$1.useEffect(() => {
		u.current !== c && (d.current?.(c), u.current = c);
	}, [c, u]), [
		c,
		l,
		d
	];
}
function isFunction(i) {
	return typeof i == "function";
}
var VISUALLY_HIDDEN_STYLES = Object.freeze({
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
}), NAME = "VisuallyHidden", VisuallyHidden = React$1.forwardRef((i, o) => /* @__PURE__ */ jsx(Primitive.span, {
	...i,
	ref: o,
	style: {
		...VISUALLY_HIDDEN_STYLES,
		...i.style
	}
}));
VisuallyHidden.displayName = NAME;
var Root = VisuallyHidden, [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [createPopperScope]), usePopperScope = createPopperScope(), PROVIDER_NAME = "TooltipProvider", DEFAULT_DELAY_DURATION = 700, TOOLTIP_OPEN = "tooltip.open", [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME), TooltipProvider$1 = (i) => {
	let { __scopeTooltip: s, delayDuration: c = DEFAULT_DELAY_DURATION, skipDelayDuration: u = 300, disableHoverableContent: d = !1, children: f } = i, p = React$1.useRef(!0), m = React$1.useRef(!1), h = React$1.useRef(0);
	return React$1.useEffect(() => {
		let i = h.current;
		return () => window.clearTimeout(i);
	}, []), /* @__PURE__ */ jsx(TooltipProviderContextProvider, {
		scope: s,
		isOpenDelayedRef: p,
		delayDuration: c,
		onOpen: React$1.useCallback(() => {
			window.clearTimeout(h.current), p.current = !1;
		}, []),
		onClose: React$1.useCallback(() => {
			window.clearTimeout(h.current), h.current = window.setTimeout(() => p.current = !0, u);
		}, [u]),
		isPointerInTransitRef: m,
		onPointerInTransitChange: React$1.useCallback((i) => {
			m.current = i;
		}, []),
		disableHoverableContent: d,
		children: f
	});
};
TooltipProvider$1.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip", [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME), Tooltip$1 = (i) => {
	let { __scopeTooltip: s, children: c, open: u, defaultOpen: d, onOpenChange: f, disableHoverableContent: p, delayDuration: m } = i, h = useTooltipProviderContext(TOOLTIP_NAME, i.__scopeTooltip), g = usePopperScope(s), [_, v] = React$1.useState(null), y = useId$1(), b = React$1.useRef(0), x = p ?? h.disableHoverableContent, S = m ?? h.delayDuration, C = React$1.useRef(!1), [w, T] = useControllableState({
		prop: u,
		defaultProp: d ?? !1,
		onChange: (i) => {
			i ? (h.onOpen(), document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN))) : h.onClose(), f?.(i);
		},
		caller: TOOLTIP_NAME
	}), E = React$1.useMemo(() => w ? C.current ? "delayed-open" : "instant-open" : "closed", [w]), D = React$1.useCallback(() => {
		window.clearTimeout(b.current), b.current = 0, C.current = !1, T(!0);
	}, [T]), O = React$1.useCallback(() => {
		window.clearTimeout(b.current), b.current = 0, T(!1);
	}, [T]), k = React$1.useCallback(() => {
		window.clearTimeout(b.current), b.current = window.setTimeout(() => {
			C.current = !0, T(!0), b.current = 0;
		}, S);
	}, [S, T]);
	return React$1.useEffect(() => () => {
		b.current &&= (window.clearTimeout(b.current), 0);
	}, []), /* @__PURE__ */ jsx(Root2, {
		...g,
		children: /* @__PURE__ */ jsx(TooltipContextProvider, {
			scope: s,
			contentId: y,
			open: w,
			stateAttribute: E,
			trigger: _,
			onTriggerChange: v,
			onTriggerEnter: React$1.useCallback(() => {
				h.isOpenDelayedRef.current ? k() : D();
			}, [
				h.isOpenDelayedRef,
				k,
				D
			]),
			onTriggerLeave: React$1.useCallback(() => {
				x ? O() : (window.clearTimeout(b.current), b.current = 0);
			}, [O, x]),
			onOpen: D,
			onClose: O,
			disableHoverableContent: x,
			children: c
		})
	});
};
Tooltip$1.displayName = TOOLTIP_NAME;
var TRIGGER_NAME = "TooltipTrigger", TooltipTrigger$1 = React$1.forwardRef((i, s) => {
	let { __scopeTooltip: c, ...u } = i, d = useTooltipContext(TRIGGER_NAME, c), f = useTooltipProviderContext(TRIGGER_NAME, c), p = usePopperScope(c), m = useComposedRefs(s, React$1.useRef(null), d.onTriggerChange), h = React$1.useRef(!1), _ = React$1.useRef(!1), v = React$1.useCallback(() => h.current = !1, []);
	return React$1.useEffect(() => () => document.removeEventListener("pointerup", v), [v]), /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...p,
		children: /* @__PURE__ */ jsx(Primitive.button, {
			"aria-describedby": d.open ? d.contentId : void 0,
			"data-state": d.stateAttribute,
			...u,
			ref: m,
			onPointerMove: composeEventHandlers(i.onPointerMove, (i) => {
				i.pointerType !== "touch" && !_.current && !f.isPointerInTransitRef.current && (d.onTriggerEnter(), _.current = !0);
			}),
			onPointerLeave: composeEventHandlers(i.onPointerLeave, () => {
				d.onTriggerLeave(), _.current = !1;
			}),
			onPointerDown: composeEventHandlers(i.onPointerDown, () => {
				d.open && d.onClose(), h.current = !0, document.addEventListener("pointerup", v, { once: !0 });
			}),
			onFocus: composeEventHandlers(i.onFocus, () => {
				h.current || d.onOpen();
			}),
			onBlur: composeEventHandlers(i.onBlur, d.onClose),
			onClick: composeEventHandlers(i.onClick, d.onClose)
		})
	});
});
TooltipTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "TooltipPortal", [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, { forceMount: void 0 }), TooltipPortal = (i) => {
	let { __scopeTooltip: o, forceMount: s, children: c, container: u } = i, d = useTooltipContext(PORTAL_NAME, o);
	return /* @__PURE__ */ jsx(PortalProvider, {
		scope: o,
		forceMount: s,
		children: /* @__PURE__ */ jsx(Presence, {
			present: s || d.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: u,
				children: c
			})
		})
	});
};
TooltipPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "TooltipContent", TooltipContent$1 = React$1.forwardRef((i, o) => {
	let s = usePortalContext(CONTENT_NAME, i.__scopeTooltip), { forceMount: c = s.forceMount, side: u = "top", ...d } = i, f = useTooltipContext(CONTENT_NAME, i.__scopeTooltip);
	return /* @__PURE__ */ jsx(Presence, {
		present: c || f.open,
		children: f.disableHoverableContent ? /* @__PURE__ */ jsx(TooltipContentImpl, {
			side: u,
			...d,
			ref: o
		}) : /* @__PURE__ */ jsx(TooltipContentHoverable, {
			side: u,
			...d,
			ref: o
		})
	});
}), TooltipContentHoverable = React$1.forwardRef((i, s) => {
	let c = useTooltipContext(CONTENT_NAME, i.__scopeTooltip), u = useTooltipProviderContext(CONTENT_NAME, i.__scopeTooltip), d = React$1.useRef(null), f = useComposedRefs(s, d), [p, m] = React$1.useState(null), { trigger: h, onClose: _ } = c, v = d.current, { onPointerInTransitChange: y } = u, b = React$1.useCallback(() => {
		m(null), y(!1);
	}, [y]), x = React$1.useCallback((i, o) => {
		let s = i.currentTarget, c = {
			x: i.clientX,
			y: i.clientY
		}, l = getPaddedExitPoints(c, getExitSideFromRect(c, s.getBoundingClientRect())), u = getPointsFromRect(o.getBoundingClientRect());
		m(getHull([...l, ...u])), y(!0);
	}, [y]);
	return React$1.useEffect(() => () => b(), [b]), React$1.useEffect(() => {
		if (h && v) {
			let i = (i) => x(i, v), o = (i) => x(i, h);
			return h.addEventListener("pointerleave", i), v.addEventListener("pointerleave", o), () => {
				h.removeEventListener("pointerleave", i), v.removeEventListener("pointerleave", o);
			};
		}
	}, [
		h,
		v,
		x,
		b
	]), React$1.useEffect(() => {
		if (p) {
			let i = (i) => {
				let o = i.target, s = {
					x: i.clientX,
					y: i.clientY
				}, c = h?.contains(o) || v?.contains(o), l = !isPointInPolygon(s, p);
				c ? b() : l && (b(), _());
			};
			return document.addEventListener("pointermove", i), () => document.removeEventListener("pointermove", i);
		}
	}, [
		h,
		v,
		p,
		_,
		b
	]), /* @__PURE__ */ jsx(TooltipContentImpl, {
		...i,
		ref: f
	});
}), [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: !1 }), Slottable = /* @__PURE__ */ createSlottable("TooltipContent"), TooltipContentImpl = React$1.forwardRef((i, s) => {
	let { __scopeTooltip: c, children: d, "aria-label": f, onEscapeKeyDown: p, onPointerDownOutside: m, ...h } = i, g = useTooltipContext(CONTENT_NAME, c), _ = usePopperScope(c), { onClose: v } = g;
	return React$1.useEffect(() => (document.addEventListener(TOOLTIP_OPEN, v), () => document.removeEventListener(TOOLTIP_OPEN, v)), [v]), React$1.useEffect(() => {
		if (g.trigger) {
			let i = (i) => {
				i.target?.contains(g.trigger) && v();
			};
			return window.addEventListener("scroll", i, { capture: !0 }), () => window.removeEventListener("scroll", i, { capture: !0 });
		}
	}, [g.trigger, v]), /* @__PURE__ */ jsx(DismissableLayer, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: p,
		onPointerDownOutside: m,
		onFocusOutside: (i) => i.preventDefault(),
		onDismiss: v,
		children: /* @__PURE__ */ jsxs(Content, {
			"data-state": g.stateAttribute,
			..._,
			...h,
			ref: s,
			style: {
				...h.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ jsx(Slottable, { children: d }), /* @__PURE__ */ jsx(VisuallyHiddenContentContextProvider, {
				scope: c,
				isInside: !0,
				children: /* @__PURE__ */ jsx(Root, {
					id: g.contentId,
					role: "tooltip",
					children: f || d
				})
			})]
		})
	});
});
TooltipContent$1.displayName = CONTENT_NAME;
var ARROW_NAME = "TooltipArrow", TooltipArrow = React$1.forwardRef((i, o) => {
	let { __scopeTooltip: s, ...c } = i, u = usePopperScope(s);
	return useVisuallyHiddenContentContext(ARROW_NAME, s).isInside ? null : /* @__PURE__ */ jsx(Arrow, {
		...u,
		...c,
		ref: o
	});
});
TooltipArrow.displayName = ARROW_NAME;
function getExitSideFromRect(i, o) {
	let s = Math.abs(o.top - i.y), c = Math.abs(o.bottom - i.y), l = Math.abs(o.right - i.x), u = Math.abs(o.left - i.x);
	switch (Math.min(s, c, l, u)) {
		case u: return "left";
		case l: return "right";
		case s: return "top";
		case c: return "bottom";
		default: throw Error("unreachable");
	}
}
function getPaddedExitPoints(i, o, s = 5) {
	let c = [];
	switch (o) {
		case "top":
			c.push({
				x: i.x - s,
				y: i.y + s
			}, {
				x: i.x + s,
				y: i.y + s
			});
			break;
		case "bottom":
			c.push({
				x: i.x - s,
				y: i.y - s
			}, {
				x: i.x + s,
				y: i.y - s
			});
			break;
		case "left":
			c.push({
				x: i.x + s,
				y: i.y - s
			}, {
				x: i.x + s,
				y: i.y + s
			});
			break;
		case "right":
			c.push({
				x: i.x - s,
				y: i.y - s
			}, {
				x: i.x - s,
				y: i.y + s
			});
			break;
	}
	return c;
}
function getPointsFromRect(i) {
	let { top: o, right: s, bottom: c, left: l } = i;
	return [
		{
			x: l,
			y: o
		},
		{
			x: s,
			y: o
		},
		{
			x: s,
			y: c
		},
		{
			x: l,
			y: c
		}
	];
}
function isPointInPolygon(i, o) {
	let { x: s, y: c } = i, l = !1;
	for (let i = 0, u = o.length - 1; i < o.length; u = i++) {
		let d = o[i], f = o[u], p = d.x, m = d.y, h = f.x, g = f.y;
		m > c != g > c && s < (h - p) * (c - m) / (g - m) + p && (l = !l);
	}
	return l;
}
function getHull(i) {
	let o = i.slice();
	return o.sort((i, o) => i.x < o.x ? -1 : i.x > o.x ? 1 : i.y < o.y ? -1 : i.y > o.y ? 1 : 0), getHullPresorted(o);
}
function getHullPresorted(i) {
	if (i.length <= 1) return i.slice();
	let o = [];
	for (let s = 0; s < i.length; s++) {
		let c = i[s];
		for (; o.length >= 2;) {
			let i = o[o.length - 1], s = o[o.length - 2];
			if ((i.x - s.x) * (c.y - s.y) >= (i.y - s.y) * (c.x - s.x)) o.pop();
			else break;
		}
		o.push(c);
	}
	o.pop();
	let s = [];
	for (let o = i.length - 1; o >= 0; o--) {
		let c = i[o];
		for (; s.length >= 2;) {
			let i = s[s.length - 1], o = s[s.length - 2];
			if ((i.x - o.x) * (c.y - o.y) >= (i.y - o.y) * (c.x - o.x)) s.pop();
			else break;
		}
		s.push(c);
	}
	return s.pop(), o.length === 1 && s.length === 1 && o[0].x === s[0].x && o[0].y === s[0].y ? o : o.concat(s);
}
var Provider = TooltipProvider$1, Root3 = Tooltip$1, Trigger = TooltipTrigger$1, Portal$1 = TooltipPortal, Content2 = TooltipContent$1, Arrow2 = TooltipArrow;
function TooltipProvider({ delayDuration: i = 0, ...o }) {
	return /* @__PURE__ */ jsx(Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: i,
		...o
	});
}
function Tooltip({ ...i }) {
	return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(Root3, {
		"data-slot": "tooltip",
		...i
	}) });
}
var TooltipTrigger = React$1.forwardRef(({ ...i }, o) => /* @__PURE__ */ jsx(Trigger, {
	"data-slot": "tooltip-trigger",
	...i,
	ref: o
}));
TooltipTrigger.displayName = Trigger.displayName;
var TooltipContent = React$1.forwardRef(({ className: i, sideOffset: o = 0, children: s, ...c }, d) => /* @__PURE__ */ jsx(Portal$1, { children: /* @__PURE__ */ jsxs(Content2, {
	ref: d,
	"data-slot": "tooltip-content",
	sideOffset: o,
	className: cn("chatbot-theme bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", i),
	...c,
	children: [s, /* @__PURE__ */ jsx(Arrow2, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })]
}) }));
TooltipContent.displayName = Content2.displayName;
export { useComposedRefs as A, composeEventHandlers as C, Slot as D, cva as E, createSlot$1 as O, createContextScope as S, cn as T, DismissableLayer as _, VISUALLY_HIDDEN_STYLES as a, dispatchDiscreteCustomEvent as b, Portal as c, Content as d, Root2 as f, useLayoutEffect2 as g, useId$1 as h, TooltipTrigger as i, Check as j, composeRefs as k, Anchor as l, useSize as m, TooltipContent as n, useControllableState as o, createPopperScope as p, TooltipProvider as r, Presence as s, Tooltip as t, Arrow as u, useCallbackRef as v, Button as w, createContext2 as x, Primitive as y };
