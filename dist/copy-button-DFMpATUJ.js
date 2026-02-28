import * as React$1 from "react";
import React, { createElement, forwardRef, useCallback, useLayoutEffect, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import * as ReactDOM$1 from "react-dom";
import ReactDOM from "react-dom";
var __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __esmMin = (n, o) => () => (n && (o = n(n = 0)), o), __commonJSMin = (n, o) => () => (o || n((o = { exports: {} }).exports, o), o.exports), __export = (n) => {
	let o = {};
	for (var s in n) __defProp(o, s, {
		get: n[s],
		enumerable: !0
	});
	return o;
}, __copyProps = (n, o, s, c) => {
	if (o && typeof o == "object" || typeof o == "function") for (var l = __getOwnPropNames(o), u = 0, d = l.length, f; u < d; u++) f = l[u], !__hasOwnProp.call(n, f) && f !== s && __defProp(n, f, {
		get: ((n) => o[n]).bind(null, f),
		enumerable: !(c = __getOwnPropDesc(o, f)) || c.enumerable
	});
	return n;
}, __toESM = (n, o, s) => (s = n == null ? {} : __create(__getProtoOf(n)), __copyProps(o || !n || !n.__esModule ? __defProp(s, "default", {
	value: n,
	enumerable: !0
}) : s, n)), __toCommonJS = (n) => __copyProps(__defProp({}, "__esModule", { value: !0 }), n), toKebabCase = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), toCamelCase = (n) => n.replace(/^([A-Z])|[\s-_]+(\w)/g, (n, o, s) => s ? s.toUpperCase() : o.toLowerCase()), toPascalCase = (n) => {
	let o = toCamelCase(n);
	return o.charAt(0).toUpperCase() + o.slice(1);
}, mergeClasses = (...n) => n.filter((n, o, s) => !!n && n.trim() !== "" && s.indexOf(n) === o).join(" ").trim(), hasA11yProp = (n) => {
	for (let o in n) if (o.startsWith("aria-") || o === "role" || o === "title") return !0;
}, defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, Icon = forwardRef(({ color: n = "currentColor", size: o = 24, strokeWidth: c = 2, absoluteStrokeWidth: l, className: u = "", children: d, iconNode: f, ...p }, m) => createElement("svg", {
	ref: m,
	...defaultAttributes,
	width: o,
	height: o,
	stroke: n,
	strokeWidth: l ? Number(c) * 24 / Number(o) : c,
	className: mergeClasses("lucide", u),
	...!d && !hasA11yProp(p) && { "aria-hidden": "true" },
	...p
}, [...f.map(([n, o]) => createElement(n, o)), ...Array.isArray(d) ? d : [d]])), createLucideIcon = (n, o) => {
	let l = forwardRef(({ className: c, ...l }, u) => createElement(Icon, {
		ref: u,
		iconNode: o,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(n))}`, `lucide-${n}`, c),
		...l
	}));
	return l.displayName = toPascalCase(n), l;
}, Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), Copy = createLucideIcon("copy", [["rect", {
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
function setRef(n, o) {
	if (typeof n == "function") return n(o);
	n != null && (n.current = o);
}
function composeRefs(...n) {
	return (o) => {
		let s = !1, c = n.map((n) => {
			let c = setRef(n, o);
			return !s && typeof c == "function" && (s = !0), c;
		});
		if (s) return () => {
			for (let o = 0; o < c.length; o++) {
				let s = c[o];
				typeof s == "function" ? s() : setRef(n[o], null);
			}
		};
	};
}
function useComposedRefs(...o) {
	return React$1.useCallback(composeRefs(...o), o);
}
var REACT_LAZY_TYPE = Symbol.for("react.lazy"), use = React$1.use;
function isPromiseLike(n) {
	return typeof n == "object" && !!n && "then" in n;
}
function isLazyComponent(n) {
	return typeof n == "object" && !!n && "$$typeof" in n && n.$$typeof === REACT_LAZY_TYPE && "_payload" in n && isPromiseLike(n._payload);
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$1(o) {
	let s = /* @__PURE__ */ createSlotClone$1(o), c = React$1.forwardRef((o, c) => {
		let { children: l, ...u } = o;
		isLazyComponent(l) && typeof use == "function" && (l = use(l._payload));
		let d = React$1.Children.toArray(l), f = d.find(isSlottable$1);
		if (f) {
			let o = f.props.children, l = d.map((s) => s === f ? React$1.Children.count(o) > 1 ? React$1.Children.only(null) : React$1.isValidElement(o) ? o.props.children : null : s);
			return /* @__PURE__ */ jsx(s, {
				...u,
				ref: c,
				children: React$1.isValidElement(o) ? React$1.cloneElement(o, void 0, l) : null
			});
		}
		return /* @__PURE__ */ jsx(s, {
			...u,
			ref: c,
			children: l
		});
	});
	return c.displayName = `${o}.Slot`, c;
}
var Slot = /* @__PURE__ */ createSlot$1("Slot");
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$1(o) {
	let s = React$1.forwardRef((o, s) => {
		let { children: c, ...l } = o;
		if (isLazyComponent(c) && typeof use == "function" && (c = use(c._payload)), React$1.isValidElement(c)) {
			let o = getElementRef$2(c), u = mergeProps$1(l, c.props);
			return c.type !== React$1.Fragment && (u.ref = s ? composeRefs(s, o) : o), React$1.cloneElement(c, u);
		}
		return React$1.Children.count(c) > 1 ? React$1.Children.only(null) : null;
	});
	return s.displayName = `${o}.SlotClone`, s;
}
var SLOTTABLE_IDENTIFIER$2 = Symbol("radix.slottable");
function isSlottable$1(o) {
	return React$1.isValidElement(o) && typeof o.type == "function" && "__radixId" in o.type && o.type.__radixId === SLOTTABLE_IDENTIFIER$2;
}
function mergeProps$1(n, o) {
	let s = { ...o };
	for (let c in o) {
		let l = n[c], u = o[c];
		/^on[A-Z]/.test(c) ? l && u ? s[c] = (...n) => {
			let o = u(...n);
			return l(...n), o;
		} : l && (s[c] = l) : c === "style" ? s[c] = {
			...l,
			...u
		} : c === "className" && (s[c] = [l, u].filter(Boolean).join(" "));
	}
	return {
		...n,
		...s
	};
}
function getElementRef$2(n) {
	let o = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning;
	return s ? n.ref : (o = Object.getOwnPropertyDescriptor(n, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning, s ? n.props.ref : n.props.ref || n.ref);
}
function r(n) {
	var o, s, c = "";
	if (typeof n == "string" || typeof n == "number") c += n;
	else if (typeof n == "object") if (Array.isArray(n)) {
		var l = n.length;
		for (o = 0; o < l; o++) n[o] && (s = r(n[o])) && (c && (c += " "), c += s);
	} else for (s in n) n[s] && (c && (c += " "), c += s);
	return c;
}
function clsx() {
	for (var n, o, s = 0, c = "", l = arguments.length; s < l; s++) (n = arguments[s]) && (o = r(n)) && (c && (c += " "), c += o);
	return c;
}
var falsyToString = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n;
const cx = clsx, cva = (n, o) => (s) => {
	if (o?.variants == null) return cx(n, s?.class, s?.className);
	let { variants: c, defaultVariants: l } = o, u = Object.keys(c).map((n) => {
		let o = s?.[n], u = l?.[n];
		if (o === null) return null;
		let d = falsyToString(o) || falsyToString(u);
		return c[n][d];
	}), d = s && Object.entries(s).reduce((n, o) => {
		let [s, c] = o;
		return c === void 0 || (n[s] = c), n;
	}, {});
	return cx(n, u, o?.compoundVariants?.reduce((n, o) => {
		let { class: s, className: c, ...u } = o;
		return Object.entries(u).every((n) => {
			let [o, s] = n;
			return Array.isArray(s) ? s.includes({
				...l,
				...d
			}[o]) : {
				...l,
				...d
			}[o] === s;
		}) ? [
			...n,
			s,
			c
		] : n;
	}, []), s?.class, s?.className);
};
var concatArrays = (n, o) => {
	let s = Array(n.length + o.length);
	for (let o = 0; o < n.length; o++) s[o] = n[o];
	for (let c = 0; c < o.length; c++) s[n.length + c] = o[c];
	return s;
}, createClassValidatorObject = (n, o) => ({
	classGroupId: n,
	validator: o
}), createClassPartObject = (n = /* @__PURE__ */ new Map(), o = null, s) => ({
	nextPart: n,
	validators: o,
	classGroupId: s
}), CLASS_PART_SEPARATOR = "-", EMPTY_CONFLICTS = [], ARBITRARY_PROPERTY_PREFIX = "arbitrary..", createClassGroupUtils = (n) => {
	let o = createClassMap(n), { conflictingClassGroups: s, conflictingClassGroupModifiers: c } = n;
	return {
		getClassGroupId: (n) => {
			if (n.startsWith("[") && n.endsWith("]")) return getGroupIdForArbitraryProperty(n);
			let s = n.split(CLASS_PART_SEPARATOR);
			return getGroupRecursive(s, s[0] === "" && s.length > 1 ? 1 : 0, o);
		},
		getConflictingClassGroupIds: (n, o) => {
			if (o) {
				let o = c[n], l = s[n];
				return o ? l ? concatArrays(l, o) : o : l || EMPTY_CONFLICTS;
			}
			return s[n] || EMPTY_CONFLICTS;
		}
	};
}, getGroupRecursive = (n, o, s) => {
	if (n.length - o === 0) return s.classGroupId;
	let c = n[o], l = s.nextPart.get(c);
	if (l) {
		let s = getGroupRecursive(n, o + 1, l);
		if (s) return s;
	}
	let u = s.validators;
	if (u === null) return;
	let d = o === 0 ? n.join(CLASS_PART_SEPARATOR) : n.slice(o).join(CLASS_PART_SEPARATOR), f = u.length;
	for (let n = 0; n < f; n++) {
		let o = u[n];
		if (o.validator(d)) return o.classGroupId;
	}
}, getGroupIdForArbitraryProperty = (n) => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let o = n.slice(1, -1), s = o.indexOf(":"), c = o.slice(0, s);
	return c ? ARBITRARY_PROPERTY_PREFIX + c : void 0;
})(), createClassMap = (n) => {
	let { theme: o, classGroups: s } = n;
	return processClassGroups(s, o);
}, processClassGroups = (n, o) => {
	let s = createClassPartObject();
	for (let c in n) {
		let l = n[c];
		processClassesRecursively(l, s, c, o);
	}
	return s;
}, processClassesRecursively = (n, o, s, c) => {
	let l = n.length;
	for (let u = 0; u < l; u++) {
		let l = n[u];
		processClassDefinition(l, o, s, c);
	}
}, processClassDefinition = (n, o, s, c) => {
	if (typeof n == "string") {
		processStringDefinition(n, o, s);
		return;
	}
	if (typeof n == "function") {
		processFunctionDefinition(n, o, s, c);
		return;
	}
	processObjectDefinition(n, o, s, c);
}, processStringDefinition = (n, o, s) => {
	let c = n === "" ? o : getPart(o, n);
	c.classGroupId = s;
}, processFunctionDefinition = (n, o, s, c) => {
	if (isThemeGetter(n)) {
		processClassesRecursively(n(c), o, s, c);
		return;
	}
	o.validators === null && (o.validators = []), o.validators.push(createClassValidatorObject(s, n));
}, processObjectDefinition = (n, o, s, c) => {
	let l = Object.entries(n), u = l.length;
	for (let n = 0; n < u; n++) {
		let [u, d] = l[n];
		processClassesRecursively(d, getPart(o, u), s, c);
	}
}, getPart = (n, o) => {
	let s = n, c = o.split(CLASS_PART_SEPARATOR), l = c.length;
	for (let n = 0; n < l; n++) {
		let o = c[n], l = s.nextPart.get(o);
		l || (l = createClassPartObject(), s.nextPart.set(o, l)), s = l;
	}
	return s;
}, isThemeGetter = (n) => "isThemeGetter" in n && n.isThemeGetter === !0, createLruCache = (n) => {
	if (n < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let o = 0, s = Object.create(null), c = Object.create(null), l = (l, u) => {
		s[l] = u, o++, o > n && (o = 0, c = s, s = Object.create(null));
	};
	return {
		get(n) {
			let o = s[n];
			if (o !== void 0) return o;
			if ((o = c[n]) !== void 0) return l(n, o), o;
		},
		set(n, o) {
			n in s ? s[n] = o : l(n, o);
		}
	};
}, IMPORTANT_MODIFIER = "!", MODIFIER_SEPARATOR = ":", EMPTY_MODIFIERS = [], createResultObject = (n, o, s, c, l) => ({
	modifiers: n,
	hasImportantModifier: o,
	baseClassName: s,
	maybePostfixModifierPosition: c,
	isExternal: l
}), createParseClassName = (n) => {
	let { prefix: o, experimentalParseClassName: s } = n, c = (n) => {
		let o = [], s = 0, c = 0, l = 0, u, d = n.length;
		for (let f = 0; f < d; f++) {
			let d = n[f];
			if (s === 0 && c === 0) {
				if (d === MODIFIER_SEPARATOR) {
					o.push(n.slice(l, f)), l = f + 1;
					continue;
				}
				if (d === "/") {
					u = f;
					continue;
				}
			}
			d === "[" ? s++ : d === "]" ? s-- : d === "(" ? c++ : d === ")" && c--;
		}
		let f = o.length === 0 ? n : n.slice(l), p = f, m = !1;
		f.endsWith(IMPORTANT_MODIFIER) ? (p = f.slice(0, -1), m = !0) : f.startsWith(IMPORTANT_MODIFIER) && (p = f.slice(1), m = !0);
		let h = u && u > l ? u - l : void 0;
		return createResultObject(o, m, p, h);
	};
	if (o) {
		let n = o + MODIFIER_SEPARATOR, s = c;
		c = (o) => o.startsWith(n) ? s(o.slice(n.length)) : createResultObject(EMPTY_MODIFIERS, !1, o, void 0, !0);
	}
	if (s) {
		let n = c;
		c = (o) => s({
			className: o,
			parseClassName: n
		});
	}
	return c;
}, createSortModifiers = (n) => {
	let o = /* @__PURE__ */ new Map();
	return n.orderSensitiveModifiers.forEach((n, s) => {
		o.set(n, 1e6 + s);
	}), (n) => {
		let s = [], c = [];
		for (let l = 0; l < n.length; l++) {
			let u = n[l], d = u[0] === "[", f = o.has(u);
			d || f ? (c.length > 0 && (c.sort(), s.push(...c), c = []), s.push(u)) : c.push(u);
		}
		return c.length > 0 && (c.sort(), s.push(...c)), s;
	};
}, createConfigUtils = (n) => ({
	cache: createLruCache(n.cacheSize),
	parseClassName: createParseClassName(n),
	sortModifiers: createSortModifiers(n),
	...createClassGroupUtils(n)
}), SPLIT_CLASSES_REGEX = /\s+/, mergeClassList = (n, o) => {
	let { parseClassName: s, getClassGroupId: c, getConflictingClassGroupIds: l, sortModifiers: u } = o, d = [], f = n.trim().split(SPLIT_CLASSES_REGEX), p = "";
	for (let n = f.length - 1; n >= 0; --n) {
		let o = f[n], { isExternal: m, modifiers: h, hasImportantModifier: g, baseClassName: _, maybePostfixModifierPosition: v } = s(o);
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
		for (let n = 0; n < w.length; ++n) {
			let o = w[n];
			d.push(S + o);
		}
		p = o + (p.length > 0 ? " " + p : p);
	}
	return p;
}, twJoin = (...n) => {
	let o = 0, s, c, l = "";
	for (; o < n.length;) (s = n[o++]) && (c = toValue(s)) && (l && (l += " "), l += c);
	return l;
}, toValue = (n) => {
	if (typeof n == "string") return n;
	let o, s = "";
	for (let c = 0; c < n.length; c++) n[c] && (o = toValue(n[c])) && (s && (s += " "), s += o);
	return s;
}, createTailwindMerge = (n, ...o) => {
	let s, c, l, u, d = (d) => (s = createConfigUtils(o.reduce((n, o) => o(n), n())), c = s.cache.get, l = s.cache.set, u = f, f(d)), f = (n) => {
		let o = c(n);
		if (o) return o;
		let u = mergeClassList(n, s);
		return l(n, u), u;
	};
	return u = d, (...n) => u(twJoin(...n));
}, fallbackThemeArr = [], fromTheme = (n) => {
	let o = (o) => o[n] || fallbackThemeArr;
	return o.isThemeGetter = !0, o;
}, arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fractionRegex = /^\d+\/\d+$/, tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, isFraction = (n) => fractionRegex.test(n), isNumber = (n) => !!n && !Number.isNaN(Number(n)), isInteger = (n) => !!n && Number.isInteger(Number(n)), isPercent = (n) => n.endsWith("%") && isNumber(n.slice(0, -1)), isTshirtSize = (n) => tshirtUnitRegex.test(n), isAny = () => !0, isLengthOnly = (n) => lengthUnitRegex.test(n) && !colorFunctionRegex.test(n), isNever = () => !1, isShadow = (n) => shadowRegex.test(n), isImage = (n) => imageRegex.test(n), isAnyNonArbitrary = (n) => !isArbitraryValue(n) && !isArbitraryVariable(n), isArbitrarySize = (n) => getIsArbitraryValue(n, isLabelSize, isNever), isArbitraryValue = (n) => arbitraryValueRegex.test(n), isArbitraryLength = (n) => getIsArbitraryValue(n, isLabelLength, isLengthOnly), isArbitraryNumber = (n) => getIsArbitraryValue(n, isLabelNumber, isNumber), isArbitraryPosition = (n) => getIsArbitraryValue(n, isLabelPosition, isNever), isArbitraryImage = (n) => getIsArbitraryValue(n, isLabelImage, isImage), isArbitraryShadow = (n) => getIsArbitraryValue(n, isLabelShadow, isShadow), isArbitraryVariable = (n) => arbitraryVariableRegex.test(n), isArbitraryVariableLength = (n) => getIsArbitraryVariable(n, isLabelLength), isArbitraryVariableFamilyName = (n) => getIsArbitraryVariable(n, isLabelFamilyName), isArbitraryVariablePosition = (n) => getIsArbitraryVariable(n, isLabelPosition), isArbitraryVariableSize = (n) => getIsArbitraryVariable(n, isLabelSize), isArbitraryVariableImage = (n) => getIsArbitraryVariable(n, isLabelImage), isArbitraryVariableShadow = (n) => getIsArbitraryVariable(n, isLabelShadow, !0), getIsArbitraryValue = (n, o, s) => {
	let c = arbitraryValueRegex.exec(n);
	return c ? c[1] ? o(c[1]) : s(c[2]) : !1;
}, getIsArbitraryVariable = (n, o, s = !1) => {
	let c = arbitraryVariableRegex.exec(n);
	return c ? c[1] ? o(c[1]) : s : !1;
}, isLabelPosition = (n) => n === "position" || n === "percentage", isLabelImage = (n) => n === "image" || n === "url", isLabelSize = (n) => n === "length" || n === "size" || n === "bg-size", isLabelLength = (n) => n === "length", isLabelNumber = (n) => n === "number", isLabelFamilyName = (n) => n === "family-name", isLabelShadow = (n) => n === "shadow", twMerge = /* @__PURE__ */ createTailwindMerge(() => {
	let n = fromTheme("color"), o = fromTheme("font"), s = fromTheme("text"), c = fromTheme("font-weight"), l = fromTheme("tracking"), u = fromTheme("leading"), d = fromTheme("breakpoint"), f = fromTheme("container"), p = fromTheme("spacing"), m = fromTheme("radius"), h = fromTheme("shadow"), g = fromTheme("inset-shadow"), _ = fromTheme("text-shadow"), v = fromTheme("drop-shadow"), y = fromTheme("blur"), b = fromTheme("perspective"), x = fromTheme("aspect"), S = fromTheme("ease"), C = fromTheme("animate"), w = () => [
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
		n,
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
function cn(...n) {
	return twMerge(clsx(n));
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
}), Button = React$1.forwardRef(({ className: n, variant: o, size: s, asChild: c = !1, ...l }, u) => /* @__PURE__ */ jsx(c ? Slot : "button", {
	className: cn(buttonVariants({
		variant: o,
		size: s,
		className: n
	})),
	ref: u,
	...l
}));
Button.displayName = "Button", typeof window < "u" && window.document && window.document.createElement;
function composeEventHandlers(n, o, { checkForDefaultPrevented: s = !0 } = {}) {
	return function(c) {
		if (n?.(c), s === !1 || !c.defaultPrevented) return o?.(c);
	};
}
function createContext2(o, s) {
	let c = React$1.createContext(s), l = (o) => {
		let { children: s, ...l } = o, u = React$1.useMemo(() => l, Object.values(l));
		return /* @__PURE__ */ jsx(c.Provider, {
			value: u,
			children: s
		});
	};
	l.displayName = o + "Provider";
	function u(l) {
		let u = React$1.useContext(c);
		if (u) return u;
		if (s !== void 0) return s;
		throw Error(`\`${l}\` must be used within \`${o}\``);
	}
	return [l, u];
}
function createContextScope(o, s = []) {
	let c = [];
	function l(s, l) {
		let u = React$1.createContext(l), d = c.length;
		c = [...c, l];
		let f = (s) => {
			let { scope: c, children: l, ...f } = s, p = c?.[o]?.[d] || u, h = React$1.useMemo(() => f, Object.values(f));
			return /* @__PURE__ */ jsx(p.Provider, {
				value: h,
				children: l
			});
		};
		f.displayName = s + "Provider";
		function p(c, f) {
			let p = f?.[o]?.[d] || u, m = React$1.useContext(p);
			if (m) return m;
			if (l !== void 0) return l;
			throw Error(`\`${c}\` must be used within \`${s}\``);
		}
		return [f, p];
	}
	let u = () => {
		let s = c.map((o) => React$1.createContext(o));
		return function(c) {
			let l = c?.[o] || s;
			return React$1.useMemo(() => ({ [`__scope${o}`]: {
				...c,
				[o]: l
			} }), [c, l]);
		};
	};
	return u.scopeName = o, [l, composeContextScopes(u, ...s)];
}
function composeContextScopes(...o) {
	let s = o[0];
	if (o.length === 1) return s;
	let c = () => {
		let c = o.map((n) => ({
			useScope: n(),
			scopeName: n.scopeName
		}));
		return function(o) {
			let l = c.reduce((n, { useScope: s, scopeName: c }) => {
				let l = s(o)[`__scope${c}`];
				return {
					...n,
					...l
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${s.scopeName}`]: l }), [l]);
		};
	};
	return c.scopeName = s.scopeName, c;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot(o) {
	let s = /* @__PURE__ */ createSlotClone(o), c = React$1.forwardRef((o, c) => {
		let { children: l, ...u } = o, d = React$1.Children.toArray(l), f = d.find(isSlottable);
		if (f) {
			let o = f.props.children, l = d.map((s) => s === f ? React$1.Children.count(o) > 1 ? React$1.Children.only(null) : React$1.isValidElement(o) ? o.props.children : null : s);
			return /* @__PURE__ */ jsx(s, {
				...u,
				ref: c,
				children: React$1.isValidElement(o) ? React$1.cloneElement(o, void 0, l) : null
			});
		}
		return /* @__PURE__ */ jsx(s, {
			...u,
			ref: c,
			children: l
		});
	});
	return c.displayName = `${o}.Slot`, c;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(o) {
	let s = React$1.forwardRef((o, s) => {
		let { children: c, ...l } = o;
		if (React$1.isValidElement(c)) {
			let o = getElementRef$1(c), u = mergeProps(l, c.props);
			return c.type !== React$1.Fragment && (u.ref = s ? composeRefs(s, o) : o), React$1.cloneElement(c, u);
		}
		return React$1.Children.count(c) > 1 ? React$1.Children.only(null) : null;
	});
	return s.displayName = `${o}.SlotClone`, s;
}
var SLOTTABLE_IDENTIFIER$1 = Symbol("radix.slottable");
function isSlottable(o) {
	return React$1.isValidElement(o) && typeof o.type == "function" && "__radixId" in o.type && o.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
function mergeProps(n, o) {
	let s = { ...o };
	for (let c in o) {
		let l = n[c], u = o[c];
		/^on[A-Z]/.test(c) ? l && u ? s[c] = (...n) => {
			let o = u(...n);
			return l(...n), o;
		} : l && (s[c] = l) : c === "style" ? s[c] = {
			...l,
			...u
		} : c === "className" && (s[c] = [l, u].filter(Boolean).join(" "));
	}
	return {
		...n,
		...s
	};
}
function getElementRef$1(n) {
	let o = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning;
	return s ? n.ref : (o = Object.getOwnPropertyDescriptor(n, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning, s ? n.props.ref : n.props.ref || n.ref);
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
].reduce((o, s) => {
	let c = /* @__PURE__ */ createSlot(`Primitive.${s}`), l = React$1.forwardRef((n, o) => {
		let { asChild: l, ...u } = n, d = l ? c : s;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(d, {
			...u,
			ref: o
		});
	});
	return l.displayName = `Primitive.${s}`, {
		...o,
		[s]: l
	};
}, {});
function dispatchDiscreteCustomEvent(n, o) {
	n && ReactDOM$1.flushSync(() => n.dispatchEvent(o));
}
function useCallbackRef(o) {
	let s = React$1.useRef(o);
	return React$1.useEffect(() => {
		s.current = o;
	}), React$1.useMemo(() => (...n) => s.current?.(...n), []);
}
function useEscapeKeydown(o, s = globalThis?.document) {
	let c = useCallbackRef(o);
	React$1.useEffect(() => {
		let n = (n) => {
			n.key === "Escape" && c(n);
		};
		return s.addEventListener("keydown", n, { capture: !0 }), () => s.removeEventListener("keydown", n, { capture: !0 });
	}, [c, s]);
}
var DISMISSABLE_LAYER_NAME = "DismissableLayer", CONTEXT_UPDATE = "dismissableLayer.update", POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside", FOCUS_OUTSIDE = "dismissableLayer.focusOutside", originalBodyPointerEvents, DismissableLayerContext = React$1.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), DismissableLayer = React$1.forwardRef((o, s) => {
	let { disableOutsidePointerEvents: c = !1, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, onDismiss: p, ...h } = o, g = React$1.useContext(DismissableLayerContext), [_, v] = React$1.useState(null), y = _?.ownerDocument ?? globalThis?.document, [, b] = React$1.useState({}), x = useComposedRefs(s, (n) => v(n)), S = Array.from(g.layers), [C] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), w = S.indexOf(C), T = _ ? S.indexOf(_) : -1, E = g.layersWithOutsidePointerEventsDisabled.size > 0, D = T >= w, O = usePointerDownOutside((n) => {
		let o = n.target, s = [...g.branches].some((n) => n.contains(o));
		!D || s || (u?.(n), f?.(n), n.defaultPrevented || p?.());
	}, y), k = useFocusOutside((n) => {
		let o = n.target;
		[...g.branches].some((n) => n.contains(o)) || (d?.(n), f?.(n), n.defaultPrevented || p?.());
	}, y);
	return useEscapeKeydown((n) => {
		T === g.layers.size - 1 && (l?.(n), !n.defaultPrevented && p && (n.preventDefault(), p()));
	}, y), React$1.useEffect(() => {
		if (_) return c && (g.layersWithOutsidePointerEventsDisabled.size === 0 && (originalBodyPointerEvents = y.body.style.pointerEvents, y.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(_)), g.layers.add(_), dispatchUpdate(), () => {
			c && g.layersWithOutsidePointerEventsDisabled.size === 1 && (y.body.style.pointerEvents = originalBodyPointerEvents);
		};
	}, [
		_,
		y,
		c,
		g
	]), React$1.useEffect(() => () => {
		_ && (g.layers.delete(_), g.layersWithOutsidePointerEventsDisabled.delete(_), dispatchUpdate());
	}, [_, g]), React$1.useEffect(() => {
		let n = () => b({});
		return document.addEventListener(CONTEXT_UPDATE, n), () => document.removeEventListener(CONTEXT_UPDATE, n);
	}, []), /* @__PURE__ */ jsx(Primitive.div, {
		...h,
		ref: x,
		style: {
			pointerEvents: E ? D ? "auto" : "none" : void 0,
			...o.style
		},
		onFocusCapture: composeEventHandlers(o.onFocusCapture, k.onFocusCapture),
		onBlurCapture: composeEventHandlers(o.onBlurCapture, k.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(o.onPointerDownCapture, O.onPointerDownCapture)
	});
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch", DismissableLayerBranch = React$1.forwardRef((o, s) => {
	let c = React$1.useContext(DismissableLayerContext), l = React$1.useRef(null), u = useComposedRefs(s, l);
	return React$1.useEffect(() => {
		let n = l.current;
		if (n) return c.branches.add(n), () => {
			c.branches.delete(n);
		};
	}, [c.branches]), /* @__PURE__ */ jsx(Primitive.div, {
		...o,
		ref: u
	});
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(o, s = globalThis?.document) {
	let c = useCallbackRef(o), l = React$1.useRef(!1), u = React$1.useRef(() => {});
	return React$1.useEffect(() => {
		let n = (n) => {
			if (n.target && !l.current) {
				let o = function() {
					handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, c, l, { discrete: !0 });
				}, l = { originalEvent: n };
				n.pointerType === "touch" ? (s.removeEventListener("click", u.current), u.current = o, s.addEventListener("click", u.current, { once: !0 })) : o();
			} else s.removeEventListener("click", u.current);
			l.current = !1;
		}, o = window.setTimeout(() => {
			s.addEventListener("pointerdown", n);
		}, 0);
		return () => {
			window.clearTimeout(o), s.removeEventListener("pointerdown", n), s.removeEventListener("click", u.current);
		};
	}, [s, c]), { onPointerDownCapture: () => l.current = !0 };
}
function useFocusOutside(o, s = globalThis?.document) {
	let c = useCallbackRef(o), l = React$1.useRef(!1);
	return React$1.useEffect(() => {
		let n = (n) => {
			n.target && !l.current && handleAndDispatchCustomEvent(FOCUS_OUTSIDE, c, { originalEvent: n }, { discrete: !1 });
		};
		return s.addEventListener("focusin", n), () => s.removeEventListener("focusin", n);
	}, [s, c]), {
		onFocusCapture: () => l.current = !0,
		onBlurCapture: () => l.current = !1
	};
}
function dispatchUpdate() {
	let n = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(n);
}
function handleAndDispatchCustomEvent(n, o, s, { discrete: c }) {
	let l = s.originalEvent.target, u = new CustomEvent(n, {
		bubbles: !1,
		cancelable: !0,
		detail: s
	});
	o && l.addEventListener(n, o, { once: !0 }), c ? dispatchDiscreteCustomEvent(l, u) : l.dispatchEvent(u);
}
var useLayoutEffect2 = globalThis?.document ? React$1.useLayoutEffect : () => {}, useReactId = React$1.useId || (() => void 0), count = 0;
function useId$1(o) {
	let [s, c] = React$1.useState(useReactId());
	return useLayoutEffect2(() => {
		o || c((n) => n ?? String(count++));
	}, [o]), o || (s ? `radix-${s}` : "");
}
var sides = [
	"top",
	"right",
	"bottom",
	"left"
], min = Math.min, max = Math.max, round = Math.round, floor = Math.floor, createCoords = (n) => ({
	x: n,
	y: n
}), oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, oppositeAlignmentMap = {
	start: "end",
	end: "start"
};
function clamp(n, o, s) {
	return max(n, min(o, s));
}
function evaluate(n, o) {
	return typeof n == "function" ? n(o) : n;
}
function getSide(n) {
	return n.split("-")[0];
}
function getAlignment(n) {
	return n.split("-")[1];
}
function getOppositeAxis(n) {
	return n === "x" ? "y" : "x";
}
function getAxisLength(n) {
	return n === "y" ? "height" : "width";
}
var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(n) {
	return yAxisSides.has(getSide(n)) ? "y" : "x";
}
function getAlignmentAxis(n) {
	return getOppositeAxis(getSideAxis(n));
}
function getAlignmentSides(n, o, s) {
	s === void 0 && (s = !1);
	let c = getAlignment(n), l = getAlignmentAxis(n), u = getAxisLength(l), d = l === "x" ? c === (s ? "end" : "start") ? "right" : "left" : c === "start" ? "bottom" : "top";
	return o.reference[u] > o.floating[u] && (d = getOppositePlacement(d)), [d, getOppositePlacement(d)];
}
function getExpandedPlacements(n) {
	let o = getOppositePlacement(n);
	return [
		getOppositeAlignmentPlacement(n),
		o,
		getOppositeAlignmentPlacement(o)
	];
}
function getOppositeAlignmentPlacement(n) {
	return n.replace(/start|end/g, (n) => oppositeAlignmentMap[n]);
}
var lrPlacement = ["left", "right"], rlPlacement = ["right", "left"], tbPlacement = ["top", "bottom"], btPlacement = ["bottom", "top"];
function getSideList(n, o, s) {
	switch (n) {
		case "top":
		case "bottom": return s ? o ? rlPlacement : lrPlacement : o ? lrPlacement : rlPlacement;
		case "left":
		case "right": return o ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(n, o, s, c) {
	let l = getAlignment(n), u = getSideList(getSide(n), s === "start", c);
	return l && (u = u.map((n) => n + "-" + l), o && (u = u.concat(u.map(getOppositeAlignmentPlacement)))), u;
}
function getOppositePlacement(n) {
	return n.replace(/left|right|bottom|top/g, (n) => oppositeSideMap[n]);
}
function expandPaddingObject(n) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...n
	};
}
function getPaddingObject(n) {
	return typeof n == "number" ? {
		top: n,
		right: n,
		bottom: n,
		left: n
	} : expandPaddingObject(n);
}
function rectToClientRect(n) {
	let { x: o, y: s, width: c, height: l } = n;
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
function computeCoordsFromPlacement(n, o, s) {
	let { reference: c, floating: l } = n, u = getSideAxis(o), d = getAlignmentAxis(o), f = getAxisLength(d), p = getSide(o), m = u === "y", h = c.x + c.width / 2 - l.width / 2, g = c.y + c.height / 2 - l.height / 2, _ = c[f] / 2 - l[f] / 2, v;
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
var computePosition$1 = async (n, o, s) => {
	let { placement: c = "bottom", strategy: l = "absolute", middleware: u = [], platform: d } = s, f = u.filter(Boolean), p = await (d.isRTL == null ? void 0 : d.isRTL(o)), m = await d.getElementRects({
		reference: n,
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
				reference: n,
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
			reference: n,
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
async function detectOverflow$1(n, o) {
	o === void 0 && (o = {});
	let { x: s, y: c, platform: l, rects: u, elements: d, strategy: f } = n, { boundary: p = "clippingAncestors", rootBoundary: m = "viewport", elementContext: h = "floating", altBoundary: g = !1, padding: _ = 0 } = evaluate(o, n), v = getPaddingObject(_), y = d[g ? h === "floating" ? "reference" : "floating" : h], b = rectToClientRect(await l.getClippingRect({
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
var arrow$2 = (n) => ({
	name: "arrow",
	options: n,
	async fn(o) {
		let { x: s, y: c, placement: l, rects: u, platform: d, elements: f, middlewareData: p } = o, { element: m, padding: h = 0 } = evaluate(n, o) || {};
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
}), flip$2 = function(n) {
	return n === void 0 && (n = {}), {
		name: "flip",
		options: n,
		async fn(o) {
			var s;
			let { placement: c, middlewareData: l, rects: u, initialPlacement: d, platform: f, elements: p } = o, { mainAxis: m = !0, crossAxis: h = !0, fallbackPlacements: g, fallbackStrategy: _ = "bestFit", fallbackAxisSideDirection: v = "none", flipAlignment: y = !0, ...b } = evaluate(n, o);
			if ((s = l.arrow) != null && s.alignmentOffset) return {};
			let x = getSide(c), S = getSideAxis(d), C = getSide(d) === d, w = await (f.isRTL == null ? void 0 : f.isRTL(p.floating)), T = g || (C || !y ? [getOppositePlacement(d)] : getExpandedPlacements(d)), E = v !== "none";
			!g && E && T.push(...getOppositeAxisPlacements(d, y, v, w));
			let D = [d, ...T], O = await detectOverflow$1(o, b), k = [], A = l.flip?.overflows || [];
			if (m && k.push(O[x]), h) {
				let n = getAlignmentSides(c, u, w);
				k.push(O[n[0]], O[n[1]]);
			}
			if (A = [...A, {
				placement: c,
				overflows: k
			}], !k.every((n) => n <= 0)) {
				let n = (l.flip?.index || 0) + 1, o = D[n];
				if (o && (!(h === "alignment" && S !== getSideAxis(o)) || A.every((n) => getSideAxis(n.placement) === S ? n.overflows[0] > 0 : !0))) return {
					data: {
						index: n,
						overflows: A
					},
					reset: { placement: o }
				};
				let s = A.filter((n) => n.overflows[0] <= 0).sort((n, o) => n.overflows[1] - o.overflows[1])[0]?.placement;
				if (!s) switch (_) {
					case "bestFit": {
						let n = A.filter((n) => {
							if (E) {
								let o = getSideAxis(n.placement);
								return o === S || o === "y";
							}
							return !0;
						}).map((n) => [n.placement, n.overflows.filter((n) => n > 0).reduce((n, o) => n + o, 0)]).sort((n, o) => n[1] - o[1])[0]?.[0];
						n && (s = n);
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
function getSideOffsets(n, o) {
	return {
		top: n.top - o.height,
		right: n.right - o.width,
		bottom: n.bottom - o.height,
		left: n.left - o.width
	};
}
function isAnySideFullyClipped(n) {
	return sides.some((o) => n[o] >= 0);
}
var hide$2 = function(n) {
	return n === void 0 && (n = {}), {
		name: "hide",
		options: n,
		async fn(o) {
			let { rects: s } = o, { strategy: c = "referenceHidden", ...l } = evaluate(n, o);
			switch (c) {
				case "referenceHidden": {
					let n = getSideOffsets(await detectOverflow$1(o, {
						...l,
						elementContext: "reference"
					}), s.reference);
					return { data: {
						referenceHiddenOffsets: n,
						referenceHidden: isAnySideFullyClipped(n)
					} };
				}
				case "escaped": {
					let n = getSideOffsets(await detectOverflow$1(o, {
						...l,
						altBoundary: !0
					}), s.floating);
					return { data: {
						escapedOffsets: n,
						escaped: isAnySideFullyClipped(n)
					} };
				}
				default: return {};
			}
		}
	};
}, originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(n, o) {
	let { placement: s, platform: c, elements: l } = n, u = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), d = getSide(s), f = getAlignment(s), p = getSideAxis(s) === "y", m = originSides.has(d) ? -1 : 1, h = u && p ? -1 : 1, g = evaluate(o, n), { mainAxis: _, crossAxis: v, alignmentAxis: y } = typeof g == "number" ? {
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
var offset$2 = function(n) {
	return n === void 0 && (n = 0), {
		name: "offset",
		options: n,
		async fn(o) {
			var s;
			let { x: c, y: l, placement: u, middlewareData: d } = o, f = await convertValueToCoords(o, n);
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
}, shift$2 = function(n) {
	return n === void 0 && (n = {}), {
		name: "shift",
		options: n,
		async fn(o) {
			let { x: s, y: c, placement: l } = o, { mainAxis: u = !0, crossAxis: d = !1, limiter: f = { fn: (n) => {
				let { x: o, y: s } = n;
				return {
					x: o,
					y: s
				};
			} }, ...p } = evaluate(n, o), m = {
				x: s,
				y: c
			}, h = await detectOverflow$1(o, p), g = getSideAxis(getSide(l)), _ = getOppositeAxis(g), v = m[_], y = m[g];
			if (u) {
				let n = _ === "y" ? "top" : "left", o = _ === "y" ? "bottom" : "right", s = v + h[n], c = v - h[o];
				v = clamp(s, v, c);
			}
			if (d) {
				let n = g === "y" ? "top" : "left", o = g === "y" ? "bottom" : "right", s = y + h[n], c = y - h[o];
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
}, limitShift$2 = function(n) {
	return n === void 0 && (n = {}), {
		options: n,
		fn(o) {
			let { x: s, y: c, placement: l, rects: u, middlewareData: d } = o, { offset: f = 0, mainAxis: p = !0, crossAxis: m = !0 } = evaluate(n, o), h = {
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
				let n = _ === "y" ? "height" : "width", o = u.reference[_] - u.floating[n] + x.mainAxis, s = u.reference[_] + u.reference[n] - x.mainAxis;
				v < o ? v = o : v > s && (v = s);
			}
			if (m) {
				let n = _ === "y" ? "width" : "height", o = originSides.has(getSide(l)), s = u.reference[g] - u.floating[n] + (o && d.offset?.[g] || 0) + (o ? 0 : x.crossAxis), c = u.reference[g] + u.reference[n] + (o ? 0 : d.offset?.[g] || 0) - (o ? x.crossAxis : 0);
				y < s ? y = s : y > c && (y = c);
			}
			return {
				[_]: v,
				[g]: y
			};
		}
	};
}, size$2 = function(n) {
	return n === void 0 && (n = {}), {
		name: "size",
		options: n,
		async fn(o) {
			var s, c;
			let { placement: l, rects: u, platform: d, elements: f } = o, { apply: p = () => {}, ...m } = evaluate(n, o), h = await detectOverflow$1(o, m), g = getSide(l), _ = getAlignment(l), v = getSideAxis(l) === "y", { width: y, height: b } = u.floating, x, S;
			g === "top" || g === "bottom" ? (x = g, S = _ === (await (d.isRTL == null ? void 0 : d.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (S = g, x = _ === "end" ? "top" : "bottom");
			let C = b - h.top - h.bottom, w = y - h.left - h.right, T = min(b - h[x], C), E = min(y - h[S], w), D = !o.middlewareData.shift, O = T, k = E;
			if ((s = o.middlewareData.shift) != null && s.enabled.x && (k = w), (c = o.middlewareData.shift) != null && c.enabled.y && (O = C), D && !_) {
				let n = max(h.left, 0), o = max(h.right, 0), s = max(h.top, 0), c = max(h.bottom, 0);
				v ? k = y - 2 * (n !== 0 || o !== 0 ? n + o : max(h.left, h.right)) : O = b - 2 * (s !== 0 || c !== 0 ? s + c : max(h.top, h.bottom));
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
function getNodeName(n) {
	return isNode(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function getWindow(n) {
	var o;
	return (n == null || (o = n.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function getDocumentElement(n) {
	return ((isNode(n) ? n.ownerDocument : n.document) || window.document)?.documentElement;
}
function isNode(n) {
	return hasWindow() ? n instanceof Node || n instanceof getWindow(n).Node : !1;
}
function isElement(n) {
	return hasWindow() ? n instanceof Element || n instanceof getWindow(n).Element : !1;
}
function isHTMLElement(n) {
	return hasWindow() ? n instanceof HTMLElement || n instanceof getWindow(n).HTMLElement : !1;
}
function isShadowRoot(n) {
	return !hasWindow() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof getWindow(n).ShadowRoot;
}
var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(n) {
	let { overflow: o, overflowX: s, overflowY: c, display: l } = getComputedStyle$1(n);
	return /auto|scroll|overlay|hidden|clip/.test(o + c + s) && !invalidOverflowDisplayValues.has(l);
}
var tableElements = /* @__PURE__ */ new Set([
	"table",
	"td",
	"th"
]);
function isTableElement(n) {
	return tableElements.has(getNodeName(n));
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(n) {
	return topLayerSelectors.some((o) => {
		try {
			return n.matches(o);
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
function isContainingBlock(n) {
	let o = isWebKit(), s = isElement(n) ? getComputedStyle$1(n) : n;
	return transformProperties.some((n) => s[n] ? s[n] !== "none" : !1) || (s.containerType ? s.containerType !== "normal" : !1) || !o && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !o && (s.filter ? s.filter !== "none" : !1) || willChangeValues.some((n) => (s.willChange || "").includes(n)) || containValues.some((n) => (s.contain || "").includes(n));
}
function getContainingBlock(n) {
	let o = getParentNode(n);
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
function isLastTraversableNode(n) {
	return lastTraversableNodeNames.has(getNodeName(n));
}
function getComputedStyle$1(n) {
	return getWindow(n).getComputedStyle(n);
}
function getNodeScroll(n) {
	return isElement(n) ? {
		scrollLeft: n.scrollLeft,
		scrollTop: n.scrollTop
	} : {
		scrollLeft: n.scrollX,
		scrollTop: n.scrollY
	};
}
function getParentNode(n) {
	if (getNodeName(n) === "html") return n;
	let o = n.assignedSlot || n.parentNode || isShadowRoot(n) && n.host || getDocumentElement(n);
	return isShadowRoot(o) ? o.host : o;
}
function getNearestOverflowAncestor(n) {
	let o = getParentNode(n);
	return isLastTraversableNode(o) ? n.ownerDocument ? n.ownerDocument.body : n.body : isHTMLElement(o) && isOverflowElement(o) ? o : getNearestOverflowAncestor(o);
}
function getOverflowAncestors(n, o, s) {
	o === void 0 && (o = []), s === void 0 && (s = !0);
	let c = getNearestOverflowAncestor(n), l = c === n.ownerDocument?.body, u = getWindow(c);
	if (l) {
		let n = getFrameElement(u);
		return o.concat(u, u.visualViewport || [], isOverflowElement(c) ? c : [], n && s ? getOverflowAncestors(n) : []);
	}
	return o.concat(c, getOverflowAncestors(c, [], s));
}
function getFrameElement(n) {
	return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function getCssDimensions(n) {
	let o = getComputedStyle$1(n), s = parseFloat(o.width) || 0, c = parseFloat(o.height) || 0, l = isHTMLElement(n), u = l ? n.offsetWidth : s, d = l ? n.offsetHeight : c, f = round(s) !== u || round(c) !== d;
	return f && (s = u, c = d), {
		width: s,
		height: c,
		$: f
	};
}
function unwrapElement(n) {
	return isElement(n) ? n : n.contextElement;
}
function getScale(n) {
	let o = unwrapElement(n);
	if (!isHTMLElement(o)) return createCoords(1);
	let s = o.getBoundingClientRect(), { width: c, height: l, $: u } = getCssDimensions(o), d = (u ? round(s.width) : s.width) / c, f = (u ? round(s.height) : s.height) / l;
	return (!d || !Number.isFinite(d)) && (d = 1), (!f || !Number.isFinite(f)) && (f = 1), {
		x: d,
		y: f
	};
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(n) {
	let o = getWindow(n);
	return !isWebKit() || !o.visualViewport ? noOffsets : {
		x: o.visualViewport.offsetLeft,
		y: o.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(n, o, s) {
	return o === void 0 && (o = !1), !s || o && s !== getWindow(n) ? !1 : o;
}
function getBoundingClientRect(n, o, s, c) {
	o === void 0 && (o = !1), s === void 0 && (s = !1);
	let l = n.getBoundingClientRect(), u = unwrapElement(n), d = createCoords(1);
	o && (c ? isElement(c) && (d = getScale(c)) : d = getScale(n));
	let f = shouldAddVisualOffsets(u, s, c) ? getVisualOffsets(u) : createCoords(0), p = (l.left + f.x) / d.x, m = (l.top + f.y) / d.y, h = l.width / d.x, g = l.height / d.y;
	if (u) {
		let n = getWindow(u), o = c && isElement(c) ? getWindow(c) : c, s = n, l = getFrameElement(s);
		for (; l && c && o !== s;) {
			let n = getScale(l), o = l.getBoundingClientRect(), c = getComputedStyle$1(l), u = o.left + (l.clientLeft + parseFloat(c.paddingLeft)) * n.x, d = o.top + (l.clientTop + parseFloat(c.paddingTop)) * n.y;
			p *= n.x, m *= n.y, h *= n.x, g *= n.y, p += u, m += d, s = getWindow(l), l = getFrameElement(s);
		}
	}
	return rectToClientRect({
		width: h,
		height: g,
		x: p,
		y: m
	});
}
function getWindowScrollBarX(n, o) {
	let s = getNodeScroll(n).scrollLeft;
	return o ? o.left + s : getBoundingClientRect(getDocumentElement(n)).left + s;
}
function getHTMLOffset(n, o) {
	let s = n.getBoundingClientRect();
	return {
		x: s.left + o.scrollLeft - getWindowScrollBarX(n, s),
		y: s.top + o.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(n) {
	let { elements: o, rect: s, offsetParent: c, strategy: l } = n, u = l === "fixed", d = getDocumentElement(c), f = o ? isTopLayer(o.floating) : !1;
	if (c === d || f && u) return s;
	let p = {
		scrollLeft: 0,
		scrollTop: 0
	}, m = createCoords(1), h = createCoords(0), g = isHTMLElement(c);
	if ((g || !g && !u) && ((getNodeName(c) !== "body" || isOverflowElement(d)) && (p = getNodeScroll(c)), isHTMLElement(c))) {
		let n = getBoundingClientRect(c);
		m = getScale(c), h.x = n.x + c.clientLeft, h.y = n.y + c.clientTop;
	}
	let _ = d && !g && !u ? getHTMLOffset(d, p) : createCoords(0);
	return {
		width: s.width * m.x,
		height: s.height * m.y,
		x: s.x * m.x - p.scrollLeft * m.x + h.x + _.x,
		y: s.y * m.y - p.scrollTop * m.y + h.y + _.y
	};
}
function getClientRects(n) {
	return Array.from(n.getClientRects());
}
function getDocumentRect(n) {
	let o = getDocumentElement(n), s = getNodeScroll(n), c = n.ownerDocument.body, l = max(o.scrollWidth, o.clientWidth, c.scrollWidth, c.clientWidth), u = max(o.scrollHeight, o.clientHeight, c.scrollHeight, c.clientHeight), d = -s.scrollLeft + getWindowScrollBarX(n), f = -s.scrollTop;
	return getComputedStyle$1(c).direction === "rtl" && (d += max(o.clientWidth, c.clientWidth) - l), {
		width: l,
		height: u,
		x: d,
		y: f
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(n, o) {
	let s = getWindow(n), c = getDocumentElement(n), l = s.visualViewport, u = c.clientWidth, d = c.clientHeight, f = 0, p = 0;
	if (l) {
		u = l.width, d = l.height;
		let n = isWebKit();
		(!n || n && o === "fixed") && (f = l.offsetLeft, p = l.offsetTop);
	}
	let m = getWindowScrollBarX(c);
	if (m <= 0) {
		let n = c.ownerDocument, o = n.body, s = getComputedStyle(o), l = n.compatMode === "CSS1Compat" && parseFloat(s.marginLeft) + parseFloat(s.marginRight) || 0, d = Math.abs(c.clientWidth - o.clientWidth - l);
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
function getInnerBoundingClientRect(n, o) {
	let s = getBoundingClientRect(n, !0, o === "fixed"), c = s.top + n.clientTop, l = s.left + n.clientLeft, u = isHTMLElement(n) ? getScale(n) : createCoords(1);
	return {
		width: n.clientWidth * u.x,
		height: n.clientHeight * u.y,
		x: l * u.x,
		y: c * u.y
	};
}
function getClientRectFromClippingAncestor(n, o, s) {
	let c;
	if (o === "viewport") c = getViewportRect(n, s);
	else if (o === "document") c = getDocumentRect(getDocumentElement(n));
	else if (isElement(o)) c = getInnerBoundingClientRect(o, s);
	else {
		let s = getVisualOffsets(n);
		c = {
			x: o.x - s.x,
			y: o.y - s.y,
			width: o.width,
			height: o.height
		};
	}
	return rectToClientRect(c);
}
function hasFixedPositionAncestor(n, o) {
	let s = getParentNode(n);
	return s === o || !isElement(s) || isLastTraversableNode(s) ? !1 : getComputedStyle$1(s).position === "fixed" || hasFixedPositionAncestor(s, o);
}
function getClippingElementAncestors(n, o) {
	let s = o.get(n);
	if (s) return s;
	let c = getOverflowAncestors(n, [], !1).filter((n) => isElement(n) && getNodeName(n) !== "body"), l = null, u = getComputedStyle$1(n).position === "fixed", d = u ? getParentNode(n) : n;
	for (; isElement(d) && !isLastTraversableNode(d);) {
		let o = getComputedStyle$1(d), s = isContainingBlock(d);
		!s && o.position === "fixed" && (l = null), (u ? !s && !l : !s && o.position === "static" && l && absoluteOrFixed.has(l.position) || isOverflowElement(d) && !s && hasFixedPositionAncestor(n, d)) ? c = c.filter((n) => n !== d) : l = o, d = getParentNode(d);
	}
	return o.set(n, c), c;
}
function getClippingRect(n) {
	let { element: o, boundary: s, rootBoundary: c, strategy: l } = n, u = [...s === "clippingAncestors" ? isTopLayer(o) ? [] : getClippingElementAncestors(o, this._c) : [].concat(s), c], d = u[0], f = u.reduce((n, s) => {
		let c = getClientRectFromClippingAncestor(o, s, l);
		return n.top = max(c.top, n.top), n.right = min(c.right, n.right), n.bottom = min(c.bottom, n.bottom), n.left = max(c.left, n.left), n;
	}, getClientRectFromClippingAncestor(o, d, l));
	return {
		width: f.right - f.left,
		height: f.bottom - f.top,
		x: f.left,
		y: f.top
	};
}
function getDimensions(n) {
	let { width: o, height: s } = getCssDimensions(n);
	return {
		width: o,
		height: s
	};
}
function getRectRelativeToOffsetParent(n, o, s) {
	let c = isHTMLElement(o), l = getDocumentElement(o), u = s === "fixed", d = getBoundingClientRect(n, !0, u, o), f = {
		scrollLeft: 0,
		scrollTop: 0
	}, p = createCoords(0);
	function m() {
		p.x = getWindowScrollBarX(l);
	}
	if (c || !c && !u) if ((getNodeName(o) !== "body" || isOverflowElement(l)) && (f = getNodeScroll(o)), c) {
		let n = getBoundingClientRect(o, !0, u, o);
		p.x = n.x + o.clientLeft, p.y = n.y + o.clientTop;
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
function isStaticPositioned(n) {
	return getComputedStyle$1(n).position === "static";
}
function getTrueOffsetParent(n, o) {
	if (!isHTMLElement(n) || getComputedStyle$1(n).position === "fixed") return null;
	if (o) return o(n);
	let s = n.offsetParent;
	return getDocumentElement(n) === s && (s = s.ownerDocument.body), s;
}
function getOffsetParent(n, o) {
	let s = getWindow(n);
	if (isTopLayer(n)) return s;
	if (!isHTMLElement(n)) {
		let o = getParentNode(n);
		for (; o && !isLastTraversableNode(o);) {
			if (isElement(o) && !isStaticPositioned(o)) return o;
			o = getParentNode(o);
		}
		return s;
	}
	let c = getTrueOffsetParent(n, o);
	for (; c && isTableElement(c) && isStaticPositioned(c);) c = getTrueOffsetParent(c, o);
	return c && isLastTraversableNode(c) && isStaticPositioned(c) && !isContainingBlock(c) ? s : c || getContainingBlock(n) || s;
}
var getElementRects = async function(n) {
	let o = this.getOffsetParent || getOffsetParent, s = this.getDimensions, c = await s(n.floating);
	return {
		reference: getRectRelativeToOffsetParent(n.reference, await o(n.floating), n.strategy),
		floating: {
			x: 0,
			y: 0,
			width: c.width,
			height: c.height
		}
	};
};
function isRTL(n) {
	return getComputedStyle$1(n).direction === "rtl";
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
function rectsAreEqual(n, o) {
	return n.x === o.x && n.y === o.y && n.width === o.width && n.height === o.height;
}
function observeMove(n, o) {
	let s = null, c, l = getDocumentElement(n);
	function u() {
		var n;
		clearTimeout(c), (n = s) == null || n.disconnect(), s = null;
	}
	function d(f, p) {
		f === void 0 && (f = !1), p === void 0 && (p = 1), u();
		let m = n.getBoundingClientRect(), { left: h, top: g, width: _, height: v } = m;
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
			s === 1 && !rectsAreEqual(m, n.getBoundingClientRect()) && d(), w = !1;
		}
		try {
			s = new IntersectionObserver(T, {
				...C,
				root: l.ownerDocument
			});
		} catch {
			s = new IntersectionObserver(T, C);
		}
		s.observe(n);
	}
	return d(!0), u;
}
function autoUpdate(n, o, s, c) {
	c === void 0 && (c = {});
	let { ancestorScroll: l = !0, ancestorResize: u = !0, elementResize: d = typeof ResizeObserver == "function", layoutShift: f = typeof IntersectionObserver == "function", animationFrame: p = !1 } = c, m = unwrapElement(n), h = l || u ? [...m ? getOverflowAncestors(m) : [], ...getOverflowAncestors(o)] : [];
	h.forEach((n) => {
		l && n.addEventListener("scroll", s, { passive: !0 }), u && n.addEventListener("resize", s);
	});
	let g = m && f ? observeMove(m, s) : null, _ = -1, v = null;
	d && (v = new ResizeObserver((n) => {
		let [c] = n;
		c && c.target === m && v && (v.unobserve(o), cancelAnimationFrame(_), _ = requestAnimationFrame(() => {
			var n;
			(n = v) == null || n.observe(o);
		})), s();
	}), m && !p && v.observe(m), v.observe(o));
	let y, b = p ? getBoundingClientRect(n) : null;
	p && x();
	function x() {
		let o = getBoundingClientRect(n);
		b && !rectsAreEqual(b, o) && s(), b = o, y = requestAnimationFrame(x);
	}
	return s(), () => {
		var n;
		h.forEach((n) => {
			l && n.removeEventListener("scroll", s), u && n.removeEventListener("resize", s);
		}), g?.(), (n = v) == null || n.disconnect(), v = null, p && cancelAnimationFrame(y);
	};
}
var offset$1 = offset$2, shift$1 = shift$2, flip$1 = flip$2, size$1 = size$2, hide$1 = hide$2, arrow$1 = arrow$2, limitShift$1 = limitShift$2, computePosition = (n, o, s) => {
	let c = /* @__PURE__ */ new Map(), l = {
		platform,
		...s
	}, u = {
		...l.platform,
		_c: c
	};
	return computePosition$1(n, o, {
		...l,
		platform: u
	});
}, index = typeof document < "u" ? useLayoutEffect : function() {};
function deepEqual(n, o) {
	if (n === o) return !0;
	if (typeof n != typeof o) return !1;
	if (typeof n == "function" && n.toString() === o.toString()) return !0;
	let s, c, l;
	if (n && o && typeof n == "object") {
		if (Array.isArray(n)) {
			if (s = n.length, s !== o.length) return !1;
			for (c = s; c-- !== 0;) if (!deepEqual(n[c], o[c])) return !1;
			return !0;
		}
		if (l = Object.keys(n), s = l.length, s !== Object.keys(o).length) return !1;
		for (c = s; c-- !== 0;) if (!{}.hasOwnProperty.call(o, l[c])) return !1;
		for (c = s; c-- !== 0;) {
			let s = l[c];
			if (!(s === "_owner" && n.$$typeof) && !deepEqual(n[s], o[s])) return !1;
		}
		return !0;
	}
	return n !== n && o !== o;
}
function getDPR(n) {
	return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(n, o) {
	let s = getDPR(n);
	return Math.round(o * s) / s;
}
function useLatestRef(o) {
	let s = React$1.useRef(o);
	return index(() => {
		s.current = o;
	}), s;
}
function useFloating(o) {
	o === void 0 && (o = {});
	let { placement: s = "bottom", strategy: c = "absolute", middleware: l = [], platform: u, elements: { reference: d, floating: f } = {}, transform: p = !0, whileElementsMounted: m, open: h } = o, [_, v] = React$1.useState({
		x: 0,
		y: 0,
		strategy: c,
		placement: s,
		middlewareData: {},
		isPositioned: !1
	}), [y, b] = React$1.useState(l);
	deepEqual(y, l) || b(l);
	let [x, S] = React$1.useState(null), [C, w] = React$1.useState(null), T = React$1.useCallback((n) => {
		n !== k.current && (k.current = n, S(n));
	}, []), E = React$1.useCallback((n) => {
		n !== A.current && (A.current = n, w(n));
	}, []), D = d || x, O = f || C, k = React$1.useRef(null), A = React$1.useRef(null), j = React$1.useRef(_), M = m != null, N = useLatestRef(m), P = useLatestRef(u), F = useLatestRef(h), I = React$1.useCallback(() => {
		if (!k.current || !A.current) return;
		let n = {
			placement: s,
			strategy: c,
			middleware: y
		};
		P.current && (n.platform = P.current), computePosition(k.current, A.current, n).then((n) => {
			let o = {
				...n,
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
		h === !1 && j.current.isPositioned && (j.current.isPositioned = !1, v((n) => ({
			...n,
			isPositioned: !1
		})));
	}, [h]);
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
		let n = {
			position: c,
			left: 0,
			top: 0
		};
		if (!z.floating) return n;
		let o = roundByDPR(z.floating, _.x), s = roundByDPR(z.floating, _.y);
		return p ? {
			...n,
			transform: "translate(" + o + "px, " + s + "px)",
			...getDPR(z.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: c,
			left: o,
			top: s
		};
	}, [
		c,
		p,
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
var arrow$1$1 = (n) => {
	function o(n) {
		return {}.hasOwnProperty.call(n, "current");
	}
	return {
		name: "arrow",
		options: n,
		fn(s) {
			let { element: c, padding: l } = typeof n == "function" ? n(s) : n;
			return c && o(c) ? c.current == null ? {} : arrow$1({
				element: c.current,
				padding: l
			}).fn(s) : c ? arrow$1({
				element: c,
				padding: l
			}).fn(s) : {};
		}
	};
}, offset = (n, o) => ({
	...offset$1(n),
	options: [n, o]
}), shift = (n, o) => ({
	...shift$1(n),
	options: [n, o]
}), limitShift = (n, o) => ({
	...limitShift$1(n),
	options: [n, o]
}), flip = (n, o) => ({
	...flip$1(n),
	options: [n, o]
}), size = (n, o) => ({
	...size$1(n),
	options: [n, o]
}), hide = (n, o) => ({
	...hide$1(n),
	options: [n, o]
}), arrow = (n, o) => ({
	...arrow$1$1(n),
	options: [n, o]
}), NAME$1 = "Arrow", Arrow$1 = React$1.forwardRef((n, o) => {
	let { children: s, width: c = 10, height: l = 5, ...u } = n;
	return /* @__PURE__ */ jsx(Primitive.svg, {
		...u,
		ref: o,
		width: c,
		height: l,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: n.asChild ? s : /* @__PURE__ */ jsx("polygon", { points: "0,0 30,0 15,10" })
	});
});
Arrow$1.displayName = NAME$1;
var Root$1 = Arrow$1;
function useSize(o) {
	let [s, c] = React$1.useState(void 0);
	return useLayoutEffect2(() => {
		if (o) {
			c({
				width: o.offsetWidth,
				height: o.offsetHeight
			});
			let n = new ResizeObserver((n) => {
				if (!Array.isArray(n) || !n.length) return;
				let s = n[0], l, u;
				if ("borderBoxSize" in s) {
					let n = s.borderBoxSize, o = Array.isArray(n) ? n[0] : n;
					l = o.inlineSize, u = o.blockSize;
				} else l = o.offsetWidth, u = o.offsetHeight;
				c({
					width: l,
					height: u
				});
			});
			return n.observe(o, { box: "border-box" }), () => n.unobserve(o);
		} else c(void 0);
	}, [o]), s;
}
var POPPER_NAME = "Popper", [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME), [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME), Popper = (o) => {
	let { __scopePopper: s, children: c } = o, [l, u] = React$1.useState(null);
	return /* @__PURE__ */ jsx(PopperProvider, {
		scope: s,
		anchor: l,
		onAnchorChange: u,
		children: c
	});
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor", PopperAnchor = React$1.forwardRef((o, s) => {
	let { __scopePopper: c, virtualRef: l, ...u } = o, d = usePopperContext(ANCHOR_NAME, c), f = React$1.useRef(null), p = useComposedRefs(s, f), h = React$1.useRef(null);
	return React$1.useEffect(() => {
		let n = h.current;
		h.current = l?.current || f.current, n !== h.current && d.onAnchorChange(h.current);
	}), l ? null : /* @__PURE__ */ jsx(Primitive.div, {
		...u,
		ref: p
	});
});
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME$1 = "PopperContent", [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME$1), PopperContent = React$1.forwardRef((o, s) => {
	let { __scopePopper: c, side: l = "bottom", sideOffset: u = 0, align: d = "center", alignOffset: f = 0, arrowPadding: p = 0, avoidCollisions: h = !0, collisionBoundary: g = [], collisionPadding: _ = 0, sticky: v = "partial", hideWhenDetached: y = !1, updatePositionStrategy: b = "optimized", onPlaced: x, ...S } = o, C = usePopperContext(CONTENT_NAME$1, c), [w, T] = React$1.useState(null), E = useComposedRefs(s, (n) => T(n)), [D, O] = React$1.useState(null), k = useSize(D), A = k?.width ?? 0, j = k?.height ?? 0, M = l + (d === "center" ? "" : "-" + d), N = typeof _ == "number" ? _ : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		..._
	}, P = Array.isArray(g) ? g : [g], F = P.length > 0, I = {
		padding: N,
		boundary: P.filter(isNotNull),
		altBoundary: F
	}, { refs: L, floatingStyles: R, placement: z, isPositioned: B, middlewareData: V } = useFloating({
		strategy: "fixed",
		placement: M,
		whileElementsMounted: (...n) => autoUpdate(...n, { animationFrame: b === "always" }),
		elements: { reference: C.anchor },
		middleware: [
			offset({
				mainAxis: u + j,
				alignmentAxis: f
			}),
			h && shift({
				mainAxis: !0,
				crossAxis: !1,
				limiter: v === "partial" ? limitShift() : void 0,
				...I
			}),
			h && flip({ ...I }),
			size({
				...I,
				apply: ({ elements: n, rects: o, availableWidth: s, availableHeight: c }) => {
					let { width: l, height: u } = o.reference, d = n.floating.style;
					d.setProperty("--radix-popper-available-width", `${s}px`), d.setProperty("--radix-popper-available-height", `${c}px`), d.setProperty("--radix-popper-anchor-width", `${l}px`), d.setProperty("--radix-popper-anchor-height", `${u}px`);
				}
			}),
			D && arrow({
				element: D,
				padding: p
			}),
			transformOrigin({
				arrowWidth: A,
				arrowHeight: j
			}),
			y && hide({
				strategy: "referenceHidden",
				...I
			})
		]
	}), [U, W] = getSideAndAlignFromPlacement(z), G = useCallbackRef(x);
	useLayoutEffect2(() => {
		B && G?.();
	}, [B, G]);
	let K = V.arrow?.x, q = V.arrow?.y, J = V.arrow?.centerOffset !== 0, [Y, X] = React$1.useState();
	return useLayoutEffect2(() => {
		w && X(window.getComputedStyle(w).zIndex);
	}, [w]), /* @__PURE__ */ jsx("div", {
		ref: L.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...R,
			transform: B ? R.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: Y,
			"--radix-popper-transform-origin": [V.transformOrigin?.x, V.transformOrigin?.y].join(" "),
			...V.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: o.dir,
		children: /* @__PURE__ */ jsx(PopperContentProvider, {
			scope: c,
			placedSide: U,
			onArrowChange: O,
			arrowX: K,
			arrowY: q,
			shouldHideArrow: J,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				"data-side": U,
				"data-align": W,
				...S,
				ref: E,
				style: {
					...S.style,
					animation: B ? void 0 : "none"
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
}, PopperArrow = React$1.forwardRef(function(n, o) {
	let { __scopePopper: s, ...c } = n, l = useContentContext(ARROW_NAME$1, s), u = OPPOSITE_SIDE[l.placedSide];
	return /* @__PURE__ */ jsx("span", {
		ref: l.onArrowChange,
		style: {
			position: "absolute",
			left: l.arrowX,
			top: l.arrowY,
			[u]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[l.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[l.placedSide],
			visibility: l.shouldHideArrow ? "hidden" : void 0
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
function isNotNull(n) {
	return n !== null;
}
var transformOrigin = (n) => ({
	name: "transformOrigin",
	options: n,
	fn(o) {
		let { placement: s, rects: c, middlewareData: l } = o, u = l.arrow?.centerOffset !== 0, d = u ? 0 : n.arrowWidth, f = u ? 0 : n.arrowHeight, [p, m] = getSideAndAlignFromPlacement(s), h = {
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
function getSideAndAlignFromPlacement(n) {
	let [o, s = "center"] = n.split("-");
	return [o, s];
}
var Root2 = Popper, Anchor = PopperAnchor, Content = PopperContent, Arrow = PopperArrow, PORTAL_NAME$1 = "Portal", Portal = React$1.forwardRef((o, s) => {
	let { container: c, ...l } = o, [u, d] = React$1.useState(!1);
	useLayoutEffect2(() => d(!0), []);
	let f = c || u && globalThis?.document?.body;
	return f ? ReactDOM.createPortal(/* @__PURE__ */ jsx(Primitive.div, {
		...l,
		ref: s
	}), f) : null;
});
Portal.displayName = PORTAL_NAME$1;
function useStateMachine(o, s) {
	return React$1.useReducer((n, o) => s[n][o] ?? n, o);
}
var Presence = (o) => {
	let { present: s, children: c } = o, l = usePresence(s), u = typeof c == "function" ? c({ present: l.isPresent }) : React$1.Children.only(c), d = useComposedRefs(l.ref, getElementRef(u));
	return typeof c == "function" || l.isPresent ? React$1.cloneElement(u, { ref: d }) : null;
};
Presence.displayName = "Presence";
function usePresence(o) {
	let [s, c] = React$1.useState(), l = React$1.useRef(null), u = React$1.useRef(o), d = React$1.useRef("none"), [f, p] = useStateMachine(o ? "mounted" : "unmounted", {
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
		let n = getAnimationName(l.current);
		d.current = f === "mounted" ? n : "none";
	}, [f]), useLayoutEffect2(() => {
		let n = l.current, s = u.current;
		if (s !== o) {
			let c = d.current, l = getAnimationName(n);
			o ? p("MOUNT") : l === "none" || n?.display === "none" ? p("UNMOUNT") : p(s && c !== l ? "ANIMATION_OUT" : "UNMOUNT"), u.current = o;
		}
	}, [o, p]), useLayoutEffect2(() => {
		if (s) {
			let n, o = s.ownerDocument.defaultView ?? window, c = (c) => {
				let d = getAnimationName(l.current).includes(CSS.escape(c.animationName));
				if (c.target === s && d && (p("ANIMATION_END"), !u.current)) {
					let c = s.style.animationFillMode;
					s.style.animationFillMode = "forwards", n = o.setTimeout(() => {
						s.style.animationFillMode === "forwards" && (s.style.animationFillMode = c);
					});
				}
			}, f = (n) => {
				n.target === s && (d.current = getAnimationName(l.current));
			};
			return s.addEventListener("animationstart", f), s.addEventListener("animationcancel", c), s.addEventListener("animationend", c), () => {
				o.clearTimeout(n), s.removeEventListener("animationstart", f), s.removeEventListener("animationcancel", c), s.removeEventListener("animationend", c);
			};
		} else p("ANIMATION_END");
	}, [s, p]), {
		isPresent: ["mounted", "unmountSuspended"].includes(f),
		ref: React$1.useCallback((n) => {
			l.current = n ? getComputedStyle(n) : null, c(n);
		}, [])
	};
}
function getAnimationName(n) {
	return n?.animationName || "none";
}
function getElementRef(n) {
	let o = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning;
	return s ? n.ref : (o = Object.getOwnPropertyDescriptor(n, "ref")?.get, s = o && "isReactWarning" in o && o.isReactWarning, s ? n.props.ref : n.props.ref || n.ref);
}
var useInsertionEffect$1 = React$1.useInsertionEffect || useLayoutEffect2;
function useControllableState({ prop: o, defaultProp: s, onChange: c = () => {}, caller: l }) {
	let [u, d, f] = useUncontrolledState({
		defaultProp: s,
		onChange: c
	}), p = o !== void 0, m = p ? o : u;
	{
		let s = React$1.useRef(o !== void 0);
		React$1.useEffect(() => {
			let n = s.current;
			if (n !== p) {
				let o = n ? "controlled" : "uncontrolled", s = p ? "controlled" : "uncontrolled";
				console.warn(`${l} is changing from ${o} to ${s}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
			}
			s.current = p;
		}, [p, l]);
	}
	return [m, React$1.useCallback((n) => {
		if (p) {
			let s = isFunction(n) ? n(o) : n;
			s !== o && f.current?.(s);
		} else d(n);
	}, [
		p,
		o,
		d,
		f
	])];
}
function useUncontrolledState({ defaultProp: o, onChange: s }) {
	let [c, l] = React$1.useState(o), u = React$1.useRef(c), d = React$1.useRef(s);
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
function isFunction(n) {
	return typeof n == "function";
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable(n) {
	let o = ({ children: n }) => /* @__PURE__ */ jsx(Fragment$1, { children: n });
	return o.displayName = `${n}.Slottable`, o.__radixId = SLOTTABLE_IDENTIFIER, o;
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
}), NAME = "VisuallyHidden", VisuallyHidden = React$1.forwardRef((n, o) => /* @__PURE__ */ jsx(Primitive.span, {
	...n,
	ref: o,
	style: {
		...VISUALLY_HIDDEN_STYLES,
		...n.style
	}
}));
VisuallyHidden.displayName = NAME;
var Root = VisuallyHidden, [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [createPopperScope]), usePopperScope = createPopperScope(), PROVIDER_NAME = "TooltipProvider", DEFAULT_DELAY_DURATION = 700, TOOLTIP_OPEN = "tooltip.open", [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME), TooltipProvider$1 = (o) => {
	let { __scopeTooltip: s, delayDuration: c = DEFAULT_DELAY_DURATION, skipDelayDuration: l = 300, disableHoverableContent: u = !1, children: d } = o, f = React$1.useRef(!0), p = React$1.useRef(!1), h = React$1.useRef(0);
	return React$1.useEffect(() => {
		let n = h.current;
		return () => window.clearTimeout(n);
	}, []), /* @__PURE__ */ jsx(TooltipProviderContextProvider, {
		scope: s,
		isOpenDelayedRef: f,
		delayDuration: c,
		onOpen: React$1.useCallback(() => {
			window.clearTimeout(h.current), f.current = !1;
		}, []),
		onClose: React$1.useCallback(() => {
			window.clearTimeout(h.current), h.current = window.setTimeout(() => f.current = !0, l);
		}, [l]),
		isPointerInTransitRef: p,
		onPointerInTransitChange: React$1.useCallback((n) => {
			p.current = n;
		}, []),
		disableHoverableContent: u,
		children: d
	});
};
TooltipProvider$1.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip", [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME), Tooltip$1 = (o) => {
	let { __scopeTooltip: s, children: c, open: l, defaultOpen: u, onOpenChange: d, disableHoverableContent: f, delayDuration: p } = o, h = useTooltipProviderContext(TOOLTIP_NAME, o.__scopeTooltip), g = usePopperScope(s), [_, v] = React$1.useState(null), y = useId$1(), b = React$1.useRef(0), x = f ?? h.disableHoverableContent, S = p ?? h.delayDuration, C = React$1.useRef(!1), [w, T] = useControllableState({
		prop: l,
		defaultProp: u ?? !1,
		onChange: (n) => {
			n ? (h.onOpen(), document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN))) : h.onClose(), d?.(n);
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
var TRIGGER_NAME = "TooltipTrigger", TooltipTrigger$1 = React$1.forwardRef((o, s) => {
	let { __scopeTooltip: c, ...l } = o, u = useTooltipContext(TRIGGER_NAME, c), d = useTooltipProviderContext(TRIGGER_NAME, c), f = usePopperScope(c), p = useComposedRefs(s, React$1.useRef(null), u.onTriggerChange), h = React$1.useRef(!1), g = React$1.useRef(!1), _ = React$1.useCallback(() => h.current = !1, []);
	return React$1.useEffect(() => () => document.removeEventListener("pointerup", _), [_]), /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...f,
		children: /* @__PURE__ */ jsx(Primitive.button, {
			"aria-describedby": u.open ? u.contentId : void 0,
			"data-state": u.stateAttribute,
			...l,
			ref: p,
			onPointerMove: composeEventHandlers(o.onPointerMove, (n) => {
				n.pointerType !== "touch" && !g.current && !d.isPointerInTransitRef.current && (u.onTriggerEnter(), g.current = !0);
			}),
			onPointerLeave: composeEventHandlers(o.onPointerLeave, () => {
				u.onTriggerLeave(), g.current = !1;
			}),
			onPointerDown: composeEventHandlers(o.onPointerDown, () => {
				u.open && u.onClose(), h.current = !0, document.addEventListener("pointerup", _, { once: !0 });
			}),
			onFocus: composeEventHandlers(o.onFocus, () => {
				h.current || u.onOpen();
			}),
			onBlur: composeEventHandlers(o.onBlur, u.onClose),
			onClick: composeEventHandlers(o.onClick, u.onClose)
		})
	});
});
TooltipTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "TooltipPortal", [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, { forceMount: void 0 }), TooltipPortal = (n) => {
	let { __scopeTooltip: o, forceMount: s, children: c, container: l } = n, u = useTooltipContext(PORTAL_NAME, o);
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
TooltipPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "TooltipContent", TooltipContent$1 = React$1.forwardRef((n, o) => {
	let s = usePortalContext(CONTENT_NAME, n.__scopeTooltip), { forceMount: c = s.forceMount, side: l = "top", ...u } = n, d = useTooltipContext(CONTENT_NAME, n.__scopeTooltip);
	return /* @__PURE__ */ jsx(Presence, {
		present: c || d.open,
		children: d.disableHoverableContent ? /* @__PURE__ */ jsx(TooltipContentImpl, {
			side: l,
			...u,
			ref: o
		}) : /* @__PURE__ */ jsx(TooltipContentHoverable, {
			side: l,
			...u,
			ref: o
		})
	});
}), TooltipContentHoverable = React$1.forwardRef((o, s) => {
	let c = useTooltipContext(CONTENT_NAME, o.__scopeTooltip), l = useTooltipProviderContext(CONTENT_NAME, o.__scopeTooltip), u = React$1.useRef(null), d = useComposedRefs(s, u), [f, p] = React$1.useState(null), { trigger: h, onClose: g } = c, _ = u.current, { onPointerInTransitChange: v } = l, y = React$1.useCallback(() => {
		p(null), v(!1);
	}, [v]), b = React$1.useCallback((n, o) => {
		let s = n.currentTarget, c = {
			x: n.clientX,
			y: n.clientY
		}, l = getPaddedExitPoints(c, getExitSideFromRect(c, s.getBoundingClientRect())), u = getPointsFromRect(o.getBoundingClientRect());
		p(getHull([...l, ...u])), v(!0);
	}, [v]);
	return React$1.useEffect(() => () => y(), [y]), React$1.useEffect(() => {
		if (h && _) {
			let n = (n) => b(n, _), o = (n) => b(n, h);
			return h.addEventListener("pointerleave", n), _.addEventListener("pointerleave", o), () => {
				h.removeEventListener("pointerleave", n), _.removeEventListener("pointerleave", o);
			};
		}
	}, [
		h,
		_,
		b,
		y
	]), React$1.useEffect(() => {
		if (f) {
			let n = (n) => {
				let o = n.target, s = {
					x: n.clientX,
					y: n.clientY
				}, c = h?.contains(o) || _?.contains(o), l = !isPointInPolygon(s, f);
				c ? y() : l && (y(), g());
			};
			return document.addEventListener("pointermove", n), () => document.removeEventListener("pointermove", n);
		}
	}, [
		h,
		_,
		f,
		g,
		y
	]), /* @__PURE__ */ jsx(TooltipContentImpl, {
		...o,
		ref: d
	});
}), [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: !1 }), Slottable = /* @__PURE__ */ createSlottable("TooltipContent"), TooltipContentImpl = React$1.forwardRef((o, s) => {
	let { __scopeTooltip: c, children: l, "aria-label": u, onEscapeKeyDown: d, onPointerDownOutside: f, ...p } = o, g = useTooltipContext(CONTENT_NAME, c), _ = usePopperScope(c), { onClose: v } = g;
	return React$1.useEffect(() => (document.addEventListener(TOOLTIP_OPEN, v), () => document.removeEventListener(TOOLTIP_OPEN, v)), [v]), React$1.useEffect(() => {
		if (g.trigger) {
			let n = (n) => {
				n.target?.contains(g.trigger) && v();
			};
			return window.addEventListener("scroll", n, { capture: !0 }), () => window.removeEventListener("scroll", n, { capture: !0 });
		}
	}, [g.trigger, v]), /* @__PURE__ */ jsx(DismissableLayer, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: d,
		onPointerDownOutside: f,
		onFocusOutside: (n) => n.preventDefault(),
		onDismiss: v,
		children: /* @__PURE__ */ jsxs(Content, {
			"data-state": g.stateAttribute,
			..._,
			...p,
			ref: s,
			style: {
				...p.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ jsx(Slottable, { children: l }), /* @__PURE__ */ jsx(VisuallyHiddenContentContextProvider, {
				scope: c,
				isInside: !0,
				children: /* @__PURE__ */ jsx(Root, {
					id: g.contentId,
					role: "tooltip",
					children: u || l
				})
			})]
		})
	});
});
TooltipContent$1.displayName = CONTENT_NAME;
var ARROW_NAME = "TooltipArrow", TooltipArrow = React$1.forwardRef((n, o) => {
	let { __scopeTooltip: s, ...c } = n, l = usePopperScope(s);
	return useVisuallyHiddenContentContext(ARROW_NAME, s).isInside ? null : /* @__PURE__ */ jsx(Arrow, {
		...l,
		...c,
		ref: o
	});
});
TooltipArrow.displayName = ARROW_NAME;
function getExitSideFromRect(n, o) {
	let s = Math.abs(o.top - n.y), c = Math.abs(o.bottom - n.y), l = Math.abs(o.right - n.x), u = Math.abs(o.left - n.x);
	switch (Math.min(s, c, l, u)) {
		case u: return "left";
		case l: return "right";
		case s: return "top";
		case c: return "bottom";
		default: throw Error("unreachable");
	}
}
function getPaddedExitPoints(n, o, s = 5) {
	let c = [];
	switch (o) {
		case "top":
			c.push({
				x: n.x - s,
				y: n.y + s
			}, {
				x: n.x + s,
				y: n.y + s
			});
			break;
		case "bottom":
			c.push({
				x: n.x - s,
				y: n.y - s
			}, {
				x: n.x + s,
				y: n.y - s
			});
			break;
		case "left":
			c.push({
				x: n.x + s,
				y: n.y - s
			}, {
				x: n.x + s,
				y: n.y + s
			});
			break;
		case "right":
			c.push({
				x: n.x - s,
				y: n.y - s
			}, {
				x: n.x - s,
				y: n.y + s
			});
			break;
	}
	return c;
}
function getPointsFromRect(n) {
	let { top: o, right: s, bottom: c, left: l } = n;
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
function isPointInPolygon(n, o) {
	let { x: s, y: c } = n, l = !1;
	for (let n = 0, u = o.length - 1; n < o.length; u = n++) {
		let d = o[n], f = o[u], p = d.x, m = d.y, h = f.x, g = f.y;
		m > c != g > c && s < (h - p) * (c - m) / (g - m) + p && (l = !l);
	}
	return l;
}
function getHull(n) {
	let o = n.slice();
	return o.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), getHullPresorted(o);
}
function getHullPresorted(n) {
	if (n.length <= 1) return n.slice();
	let o = [];
	for (let s = 0; s < n.length; s++) {
		let c = n[s];
		for (; o.length >= 2;) {
			let n = o[o.length - 1], s = o[o.length - 2];
			if ((n.x - s.x) * (c.y - s.y) >= (n.y - s.y) * (c.x - s.x)) o.pop();
			else break;
		}
		o.push(c);
	}
	o.pop();
	let s = [];
	for (let o = n.length - 1; o >= 0; o--) {
		let c = n[o];
		for (; s.length >= 2;) {
			let n = s[s.length - 1], o = s[s.length - 2];
			if ((n.x - o.x) * (c.y - o.y) >= (n.y - o.y) * (c.x - o.x)) s.pop();
			else break;
		}
		s.push(c);
	}
	return s.pop(), o.length === 1 && s.length === 1 && o[0].x === s[0].x && o[0].y === s[0].y ? o : o.concat(s);
}
var Provider = TooltipProvider$1, Root3 = Tooltip$1, Trigger = TooltipTrigger$1, Portal$1 = TooltipPortal, Content2 = TooltipContent$1, Arrow2 = TooltipArrow;
function TooltipProvider({ delayDuration: n = 0, ...o }) {
	return /* @__PURE__ */ jsx(Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: n,
		...o
	});
}
function Tooltip({ ...n }) {
	return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(Root3, {
		"data-slot": "tooltip",
		...n
	}) });
}
var TooltipTrigger = React$1.forwardRef(({ ...n }, o) => /* @__PURE__ */ jsx(Trigger, {
	"data-slot": "tooltip-trigger",
	...n,
	ref: o
}));
TooltipTrigger.displayName = Trigger.displayName;
var TooltipContent = React$1.forwardRef(({ className: n, sideOffset: o = 0, children: s, ...c }, l) => /* @__PURE__ */ jsx(Portal$1, { children: /* @__PURE__ */ jsxs(Content2, {
	ref: l,
	"data-slot": "tooltip-content",
	sideOffset: o,
	className: cn("chatbot-theme bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", n),
	...c,
	children: [s, /* @__PURE__ */ jsx(Arrow2, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })]
}) }));
TooltipContent.displayName = Content2.displayName;
var is_prop_valid_framer_motion_exports = /* @__PURE__ */ __export({ default: () => is_prop_valid_framer_motion_default }), is_prop_valid_framer_motion_default, init_is_prop_valid_framer_motion = __esmMin((() => {
	throw is_prop_valid_framer_motion_default = {}, Error("Could not resolve \"@emotion/is-prop-valid\" imported by \"framer-motion\". Is it installed?");
}));
function __insertCSS(n) {
	if (!n || typeof document > "u") return;
	let o = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
	s.type = "text/css", o.appendChild(s), s.styleSheet ? s.styleSheet.cssText = n : s.appendChild(document.createTextNode(n));
}
Array(12).fill(0);
var toastsCounter = 1, ToastState = new class {
	constructor() {
		this.subscribe = (n) => (this.subscribers.push(n), () => {
			let o = this.subscribers.indexOf(n);
			this.subscribers.splice(o, 1);
		}), this.publish = (n) => {
			this.subscribers.forEach((o) => o(n));
		}, this.addToast = (n) => {
			this.publish(n), this.toasts = [...this.toasts, n];
		}, this.create = (n) => {
			let { message: o, ...s } = n, c = typeof n?.id == "number" || n.id?.length > 0 ? n.id : toastsCounter++, l = this.toasts.find((n) => n.id === c), u = n.dismissible === void 0 ? !0 : n.dismissible;
			return this.dismissedToasts.has(c) && this.dismissedToasts.delete(c), l ? this.toasts = this.toasts.map((s) => s.id === c ? (this.publish({
				...s,
				...n,
				id: c,
				title: o
			}), {
				...s,
				...n,
				id: c,
				dismissible: u,
				title: o
			}) : s) : this.addToast({
				title: o,
				...s,
				dismissible: u,
				id: c
			}), c;
		}, this.dismiss = (n) => (n ? (this.dismissedToasts.add(n), requestAnimationFrame(() => this.subscribers.forEach((o) => o({
			id: n,
			dismiss: !0
		})))) : this.toasts.forEach((n) => {
			this.subscribers.forEach((o) => o({
				id: n.id,
				dismiss: !0
			}));
		}), n), this.message = (n, o) => this.create({
			...o,
			message: n
		}), this.error = (n, o) => this.create({
			...o,
			message: n,
			type: "error"
		}), this.success = (n, o) => this.create({
			...o,
			type: "success",
			message: n
		}), this.info = (n, o) => this.create({
			...o,
			type: "info",
			message: n
		}), this.warning = (n, o) => this.create({
			...o,
			type: "warning",
			message: n
		}), this.loading = (n, o) => this.create({
			...o,
			type: "loading",
			message: n
		}), this.promise = (n, s) => {
			if (!s) return;
			let c;
			s.loading !== void 0 && (c = this.create({
				...s,
				promise: n,
				type: "loading",
				message: s.loading,
				description: typeof s.description == "function" ? void 0 : s.description
			}));
			let l = Promise.resolve(n instanceof Function ? n() : n), u = c !== void 0, d, f = l.then(async (n) => {
				if (d = ["resolve", n], React.isValidElement(n)) u = !1, this.create({
					id: c,
					type: "default",
					message: n
				});
				else if (isHttpResponse(n) && !n.ok) {
					u = !1;
					let l = typeof s.error == "function" ? await s.error(`HTTP error! status: ${n.status}`) : s.error, d = typeof s.description == "function" ? await s.description(`HTTP error! status: ${n.status}`) : s.description, f = typeof l == "object" && !React.isValidElement(l) ? l : { message: l };
					this.create({
						id: c,
						type: "error",
						description: d,
						...f
					});
				} else if (n instanceof Error) {
					u = !1;
					let l = typeof s.error == "function" ? await s.error(n) : s.error, d = typeof s.description == "function" ? await s.description(n) : s.description, f = typeof l == "object" && !React.isValidElement(l) ? l : { message: l };
					this.create({
						id: c,
						type: "error",
						description: d,
						...f
					});
				} else if (s.success !== void 0) {
					u = !1;
					let l = typeof s.success == "function" ? await s.success(n) : s.success, d = typeof s.description == "function" ? await s.description(n) : s.description, f = typeof l == "object" && !React.isValidElement(l) ? l : { message: l };
					this.create({
						id: c,
						type: "success",
						description: d,
						...f
					});
				}
			}).catch(async (n) => {
				if (d = ["reject", n], s.error !== void 0) {
					u = !1;
					let l = typeof s.error == "function" ? await s.error(n) : s.error, d = typeof s.description == "function" ? await s.description(n) : s.description, f = typeof l == "object" && !React.isValidElement(l) ? l : { message: l };
					this.create({
						id: c,
						type: "error",
						description: d,
						...f
					});
				}
			}).finally(() => {
				u && (this.dismiss(c), c = void 0), s.finally == null || s.finally.call(s);
			}), p = () => new Promise((n, o) => f.then(() => d[0] === "reject" ? o(d[1]) : n(d[1])).catch(o));
			return typeof c != "string" && typeof c != "number" ? { unwrap: p } : Object.assign(c, { unwrap: p });
		}, this.custom = (n, o) => {
			let s = o?.id || toastsCounter++;
			return this.create({
				jsx: n(s),
				id: s,
				...o
			}), s;
		}, this.getActiveToasts = () => this.toasts.filter((n) => !this.dismissedToasts.has(n.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
	}
}(), toastFunction = (n, o) => {
	let s = o?.id || toastsCounter++;
	return ToastState.addToast({
		title: n,
		...o,
		id: s
	}), s;
}, isHttpResponse = (n) => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number", basicToast = toastFunction, toast = Object.assign(basicToast, {
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
function useCopyToClipboard({ text: n, copyMessage: o = "Copied to clipboard!" }) {
	let [s, c] = useState(!1), u = useRef(null);
	return {
		isCopied: s,
		handleCopy: useCallback(() => {
			navigator.clipboard.writeText(n).then(() => {
				toast.success(o), c(!0), u.current &&= (clearTimeout(u.current), null), u.current = setTimeout(() => {
					c(!1);
				}, 2e3);
			}).catch(() => {
				toast.error("Failed to copy to clipboard.");
			});
		}, [n, o])
	};
}
function CopyButton({ content: n, copyMessage: o }) {
	let { isCopied: s, handleCopy: c } = useCopyToClipboard({
		text: n,
		copyMessage: o
	});
	return n ? /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsxs(Button, {
			variant: "ghost",
			size: "icon",
			className: "relative h-6 w-6",
			"aria-label": "Copy to clipboard",
			onClick: c,
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ jsx(Check, { className: cn("h-4 w-4 transition-transform ease-in-out", s ? "scale-100" : "scale-0") })
			}), /* @__PURE__ */ jsx(Copy, { className: cn("h-4 w-4 transition-transform ease-in-out", s ? "scale-0" : "scale-100") })]
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: "Copy to clipboard" })] }) }) : null;
}
export { Slot as A, dispatchDiscreteCustomEvent as C, Button as D, composeEventHandlers as E, createLucideIcon as F, __commonJSMin as I, __export as L, composeRefs as M, useComposedRefs as N, cn as O, Check as P, __toCommonJS as R, Primitive as S, createContextScope as T, useSize as _, TooltipContent as a, DismissableLayer as b, VISUALLY_HIDDEN_STYLES as c, Portal as d, Anchor as f, createPopperScope as g, Root2 as h, Tooltip as i, createSlot$1 as j, cva as k, useControllableState as l, Content as m, init_is_prop_valid_framer_motion as n, TooltipProvider as o, Arrow as p, is_prop_valid_framer_motion_exports as r, TooltipTrigger as s, CopyButton as t, Presence as u, useId$1 as v, createContext2 as w, useCallbackRef as x, useLayoutEffect2 as y, __toESM as z };
