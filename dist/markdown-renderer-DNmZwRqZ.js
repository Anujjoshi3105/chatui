import { E as composeEventHandlers, I as __commonJSMin, L as __export, N as useComposedRefs$1, O as cn, R as __toCommonJS, S as Primitive, T as createContextScope, b as DismissableLayer, d as Portal, f as Anchor, g as createPopperScope, h as Root2$1, l as useControllableState, m as Content, n as init_is_prop_valid_framer_motion, p as Arrow, r as is_prop_valid_framer_motion_exports, t as CopyButton, u as Presence, z as __toESM } from "./copy-button-DFMpATUJ.js";
import * as React$1 from "react";
import React, { Children, Component, Fragment, createContext, createElement, forwardRef, isValidElement, useCallback, useContext, useEffect, useId, useInsertionEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
function parse(e) {
	let t = [], n = String(e || ""), r = n.indexOf(","), i = 0, a = !1;
	for (; !a;) {
		r === -1 && (r = n.length, a = !0);
		let e = n.slice(i, r).trim();
		(e || !a) && t.push(e), i = r + 1, r = n.indexOf(",", i);
	}
	return t;
}
function stringify(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
var nameRe = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, nameReJsx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, emptyOptions$4 = {};
function name(e, t) {
	return ((t || emptyOptions$4).jsx ? nameReJsx : nameRe).test(e);
}
var re = /[ \t\n\f\r]/g;
function whitespace(e) {
	return typeof e == "object" ? e.type === "text" ? empty$1(e.value) : !1 : empty$1(e);
}
function empty$1(e) {
	return e.replace(re, "") === "";
}
var Schema = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
Schema.prototype.normal = {}, Schema.prototype.property = {}, Schema.prototype.space = void 0;
function merge(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new Schema(n, r, t);
}
function normalize(e) {
	return e.toLowerCase();
}
var Info = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
Info.prototype.attribute = "", Info.prototype.booleanish = !1, Info.prototype.boolean = !1, Info.prototype.commaOrSpaceSeparated = !1, Info.prototype.commaSeparated = !1, Info.prototype.defined = !1, Info.prototype.mustUseProperty = !1, Info.prototype.number = !1, Info.prototype.overloadedBoolean = !1, Info.prototype.property = "", Info.prototype.spaceSeparated = !1, Info.prototype.space = void 0;
var types_exports = /* @__PURE__ */ __export({
	boolean: () => boolean,
	booleanish: () => booleanish,
	commaOrSpaceSeparated: () => commaOrSpaceSeparated,
	commaSeparated: () => commaSeparated,
	number: () => number$1,
	overloadedBoolean: () => overloadedBoolean,
	spaceSeparated: () => spaceSeparated
}), powers = 0;
const boolean = increment(), booleanish = increment(), overloadedBoolean = increment(), number$1 = increment(), spaceSeparated = increment(), commaSeparated = increment(), commaOrSpaceSeparated = increment();
function increment() {
	return 2 ** ++powers;
}
var checks = Object.keys(types_exports), DefinedInfo = class extends Info {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), mark(this, "space", r), typeof n == "number") for (; ++i < checks.length;) {
			let e = checks[i];
			mark(this, checks[i], (n & types_exports[e]) === types_exports[e]);
		}
	}
};
DefinedInfo.prototype.defined = !0;
function mark(e, t, n) {
	n && (e[t] = n);
}
function create(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new DefinedInfo(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[normalize(r)] = r, n[normalize(a.attribute)] = r;
	}
	return new Schema(t, n, e.space);
}
const aria = create({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: booleanish,
		ariaAutoComplete: null,
		ariaBusy: booleanish,
		ariaChecked: booleanish,
		ariaColCount: number$1,
		ariaColIndex: number$1,
		ariaColSpan: number$1,
		ariaControls: spaceSeparated,
		ariaCurrent: null,
		ariaDescribedBy: spaceSeparated,
		ariaDetails: null,
		ariaDisabled: booleanish,
		ariaDropEffect: spaceSeparated,
		ariaErrorMessage: null,
		ariaExpanded: booleanish,
		ariaFlowTo: spaceSeparated,
		ariaGrabbed: booleanish,
		ariaHasPopup: null,
		ariaHidden: booleanish,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: spaceSeparated,
		ariaLevel: number$1,
		ariaLive: null,
		ariaModal: booleanish,
		ariaMultiLine: booleanish,
		ariaMultiSelectable: booleanish,
		ariaOrientation: null,
		ariaOwns: spaceSeparated,
		ariaPlaceholder: null,
		ariaPosInSet: number$1,
		ariaPressed: booleanish,
		ariaReadOnly: booleanish,
		ariaRelevant: null,
		ariaRequired: booleanish,
		ariaRoleDescription: spaceSeparated,
		ariaRowCount: number$1,
		ariaRowIndex: number$1,
		ariaRowSpan: number$1,
		ariaSelected: booleanish,
		ariaSetSize: number$1,
		ariaSort: null,
		ariaValueMax: number$1,
		ariaValueMin: number$1,
		ariaValueNow: number$1,
		ariaValueText: null,
		role: null
	},
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	}
});
function caseSensitiveTransform(e, t) {
	return t in e ? e[t] : t;
}
function caseInsensitiveTransform(e, t) {
	return caseSensitiveTransform(e, t.toLowerCase());
}
const html$3 = create({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: commaSeparated,
		acceptCharset: spaceSeparated,
		accessKey: spaceSeparated,
		action: null,
		allow: null,
		allowFullScreen: boolean,
		allowPaymentRequest: boolean,
		allowUserMedia: boolean,
		alt: null,
		as: null,
		async: boolean,
		autoCapitalize: null,
		autoComplete: spaceSeparated,
		autoFocus: boolean,
		autoPlay: boolean,
		blocking: spaceSeparated,
		capture: null,
		charSet: null,
		checked: boolean,
		cite: null,
		className: spaceSeparated,
		cols: number$1,
		colSpan: null,
		content: null,
		contentEditable: booleanish,
		controls: boolean,
		controlsList: spaceSeparated,
		coords: number$1 | commaSeparated,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: boolean,
		defer: boolean,
		dir: null,
		dirName: null,
		disabled: boolean,
		download: overloadedBoolean,
		draggable: booleanish,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: boolean,
		formTarget: null,
		headers: spaceSeparated,
		height: number$1,
		hidden: overloadedBoolean,
		high: number$1,
		href: null,
		hrefLang: null,
		htmlFor: spaceSeparated,
		httpEquiv: spaceSeparated,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: boolean,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: boolean,
		itemId: null,
		itemProp: spaceSeparated,
		itemRef: spaceSeparated,
		itemScope: boolean,
		itemType: spaceSeparated,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: boolean,
		low: number$1,
		manifest: null,
		max: null,
		maxLength: number$1,
		media: null,
		method: null,
		min: null,
		minLength: number$1,
		multiple: boolean,
		muted: boolean,
		name: null,
		nonce: null,
		noModule: boolean,
		noValidate: boolean,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: boolean,
		optimum: number$1,
		pattern: null,
		ping: spaceSeparated,
		placeholder: null,
		playsInline: boolean,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: boolean,
		referrerPolicy: null,
		rel: spaceSeparated,
		required: boolean,
		reversed: boolean,
		rows: number$1,
		rowSpan: number$1,
		sandbox: spaceSeparated,
		scope: null,
		scoped: boolean,
		seamless: boolean,
		selected: boolean,
		shadowRootClonable: boolean,
		shadowRootDelegatesFocus: boolean,
		shadowRootMode: null,
		shape: null,
		size: number$1,
		sizes: null,
		slot: null,
		span: number$1,
		spellCheck: booleanish,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: number$1,
		step: null,
		style: null,
		tabIndex: number$1,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: boolean,
		useMap: null,
		value: booleanish,
		width: number$1,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: spaceSeparated,
		axis: null,
		background: null,
		bgColor: null,
		border: number$1,
		borderColor: null,
		bottomMargin: number$1,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: boolean,
		declare: boolean,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: number$1,
		leftMargin: number$1,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: number$1,
		marginWidth: number$1,
		noResize: boolean,
		noHref: boolean,
		noShade: boolean,
		noWrap: boolean,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: number$1,
		rules: null,
		scheme: null,
		scrolling: booleanish,
		standby: null,
		summary: null,
		text: null,
		topMargin: number$1,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: number$1,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: boolean,
		disableRemotePlayback: boolean,
		prefix: null,
		property: null,
		results: number$1,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: caseInsensitiveTransform
}), svg$1 = create({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: commaOrSpaceSeparated,
		accentHeight: number$1,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: number$1,
		amplitude: number$1,
		arabicForm: null,
		ascent: number$1,
		attributeName: null,
		attributeType: null,
		azimuth: number$1,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: number$1,
		by: null,
		calcMode: null,
		capHeight: number$1,
		className: spaceSeparated,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: number$1,
		diffuseConstant: number$1,
		direction: null,
		display: null,
		dur: null,
		divisor: number$1,
		dominantBaseline: null,
		download: boolean,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: number$1,
		enableBackground: null,
		end: null,
		event: null,
		exponent: number$1,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: number$1,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: commaSeparated,
		g2: commaSeparated,
		glyphName: commaSeparated,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: number$1,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: number$1,
		horizOriginX: number$1,
		horizOriginY: number$1,
		id: null,
		ideographic: number$1,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: number$1,
		k: number$1,
		k1: number$1,
		k2: number$1,
		k3: number$1,
		k4: number$1,
		kernelMatrix: commaOrSpaceSeparated,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: number$1,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: number$1,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: number$1,
		overlineThickness: number$1,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: number$1,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: spaceSeparated,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: number$1,
		pointsAtY: number$1,
		pointsAtZ: number$1,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: commaOrSpaceSeparated,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: commaOrSpaceSeparated,
		rev: commaOrSpaceSeparated,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: commaOrSpaceSeparated,
		requiredFeatures: commaOrSpaceSeparated,
		requiredFonts: commaOrSpaceSeparated,
		requiredFormats: commaOrSpaceSeparated,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: number$1,
		specularExponent: number$1,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: number$1,
		strikethroughThickness: number$1,
		string: null,
		stroke: null,
		strokeDashArray: commaOrSpaceSeparated,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: number$1,
		strokeOpacity: number$1,
		strokeWidth: null,
		style: null,
		surfaceScale: number$1,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: commaOrSpaceSeparated,
		tabIndex: number$1,
		tableValues: null,
		target: null,
		targetX: number$1,
		targetY: number$1,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: commaOrSpaceSeparated,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: number$1,
		underlineThickness: number$1,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: number$1,
		values: null,
		vAlphabetic: number$1,
		vMathematical: number$1,
		vectorEffect: null,
		vHanging: number$1,
		vIdeographic: number$1,
		version: null,
		vertAdvY: number$1,
		vertOriginX: number$1,
		vertOriginY: number$1,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: number$1,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: caseSensitiveTransform
}), xlink = create({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(e, t) {
		return "xlink:" + t.slice(5).toLowerCase();
	}
}), xmlns = create({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: caseInsensitiveTransform
}), xml = create({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), hastToReact = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
};
var cap$1 = /[A-Z]/g, dash = /-[a-z]/g, valid = /^data[-\w.:]+$/i;
function find(e, t) {
	let n = normalize(t), r = t, i = Info;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && valid.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(dash, camelcase);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!dash.test(e)) {
				let n = e.replace(cap$1, kebab);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = DefinedInfo;
	}
	return new i(r, t);
}
function kebab(e) {
	return "-" + e.toLowerCase();
}
function camelcase(e) {
	return e.charAt(1).toUpperCase();
}
const html = merge([
	aria,
	html$3,
	xlink,
	xmlns,
	xml
], "html"), svg = merge([
	aria,
	svg$1,
	xlink,
	xmlns,
	xml
], "svg");
function parse$1(e) {
	let t = String(e || "").trim();
	return t ? t.split(/[ \t\n\r\f]+/g) : [];
}
function stringify$1(e) {
	return e.join(" ").trim();
}
var require_cjs$2 = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, l = /^[;\s]*/, u = /^\s+|\s+$/g, d = "\n", f = "/", p = "*", m = "", g = "comment", _ = "declaration";
	function v(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		t ||= {};
		var u = 1, v = 1;
		function b(e) {
			var t = e.match(r);
			t && (u += t.length);
			var n = e.lastIndexOf(d);
			v = ~n ? e.length - n : v + e.length;
		}
		function x() {
			var e = {
				line: u,
				column: v
			};
			return function(t) {
				return t.position = new S(e), T(), t;
			};
		}
		function S(e) {
			this.start = e, this.end = {
				line: u,
				column: v
			}, this.source = t.source;
		}
		S.prototype.content = e;
		function C(n) {
			var r = /* @__PURE__ */ Error(t.source + ":" + u + ":" + v + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = u, r.column = v, r.source = e, !t.silent) throw r;
		}
		function w(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return b(r), e = e.slice(r.length), n;
			}
		}
		function T() {
			w(i);
		}
		function E(e) {
			var t;
			for (e ||= []; t = D();) t !== !1 && e.push(t);
			return e;
		}
		function D() {
			var t = x();
			if (!(f != e.charAt(0) || p != e.charAt(1))) {
				for (var n = 2; m != e.charAt(n) && (p != e.charAt(n) || f != e.charAt(n + 1));) ++n;
				if (n += 2, m === e.charAt(n - 1)) return C("End of comment missing");
				var r = e.slice(2, n - 2);
				return v += 2, b(r), e = e.slice(n), v += 2, t({
					type: g,
					comment: r
				});
			}
		}
		function O() {
			var e = x(), t = w(a);
			if (t) {
				if (D(), !w(o)) return C("property missing ':'");
				var r = w(c), i = e({
					type: _,
					property: y(t[0].replace(n, m)),
					value: r ? y(r[0].replace(n, m)) : m
				});
				return w(l), i;
			}
		}
		function k() {
			var e = [];
			E(e);
			for (var t; t = O();) t !== !1 && (e.push(t), E(e));
			return e;
		}
		return T(), k();
	}
	function y(e) {
		return e ? e.replace(u, m) : m;
	}
	t.exports = v;
})), require_cjs$1 = /* @__PURE__ */ __commonJSMin(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(require_cjs$2());
	function r(e, t) {
		let r = null;
		if (!e || typeof e != "string") return r;
		let i = (0, n.default)(e), a = typeof t == "function";
		return i.forEach((e) => {
			if (e.type !== "declaration") return;
			let { property: n, value: i } = e;
			a ? t(n, i, e) : i && (r ||= {}, r[n] = i);
		}), r;
	}
})), require_utilities = /* @__PURE__ */ __commonJSMin(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.camelCase = void 0;
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, a = /^-(ms)-/, o = function(e) {
		return !e || r.test(e) || t.test(e);
	}, c = function(e, t) {
		return t.toUpperCase();
	}, l = function(e, t) {
		return `${t}-`;
	};
	e.camelCase = function(e, t) {
		return t === void 0 && (t = {}), o(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(a, l) : e.replace(i, l), e.replace(n, c));
	};
})), require_cjs = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(require_cjs$1()), r = require_utilities();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
}));
const pointEnd = point$3("end"), pointStart = point$3("start");
function point$3(e) {
	return t;
	function t(t) {
		let n = t && t.position && t.position[e] || {};
		if (typeof n.line == "number" && n.line > 0 && typeof n.column == "number" && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: typeof n.offset == "number" && n.offset > -1 ? n.offset : void 0
		};
	}
}
function position$1(e) {
	let t = pointStart(e), n = pointEnd(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
function stringifyPosition(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? position$2(e.position) : "start" in e || "end" in e ? position$2(e) : "line" in e || "column" in e ? point$2(e) : "";
}
function point$2(e) {
	return index(e && e.line) + ":" + index(e && e.column);
}
function position$2(e) {
	return point$2(e && e.start) + "-" + point$2(e && e.end);
}
function index(e) {
	return e && typeof e == "number" ? e : 1;
}
var VFileMessage = class extends Error {
	constructor(e, t, n) {
		super(), typeof t == "string" && (n = t, t = void 0);
		let r = "", i = {}, a = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), typeof e == "string" ? r = e : !i.cause && e && (a = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && typeof n == "string") {
			let e = n.indexOf(":");
			e === -1 ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = stringifyPosition(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
VFileMessage.prototype.file = "", VFileMessage.prototype.name = "", VFileMessage.prototype.reason = "", VFileMessage.prototype.message = "", VFileMessage.prototype.stack = "", VFileMessage.prototype.column = void 0, VFileMessage.prototype.line = void 0, VFileMessage.prototype.ancestors = void 0, VFileMessage.prototype.cause = void 0, VFileMessage.prototype.fatal = void 0, VFileMessage.prototype.place = void 0, VFileMessage.prototype.ruleId = void 0, VFileMessage.prototype.source = void 0;
var import_cjs = /* @__PURE__ */ __toESM(require_cjs(), 1), own$6 = {}.hasOwnProperty, emptyMap = /* @__PURE__ */ new Map(), cap = /[A-Z]/g, tableElements = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), tableCellElement = new Set(["td", "th"]), docs = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function toJsxRuntime(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = developmentCreate(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = productionCreate(n, t.jsx, t.jsxs);
	}
	let i = {
		Fragment: t.Fragment,
		ancestors: [],
		components: t.components || {},
		create: r,
		elementAttributeNameCase: t.elementAttributeNameCase || "react",
		evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
		filePath: n,
		ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
		passKeys: t.passKeys !== !1,
		passNode: t.passNode || !1,
		schema: t.space === "svg" ? svg : html,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = one$3(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function one$3(e, t, n) {
	if (t.type === "element") return element$4(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return mdxExpression(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return mdxJsxElement(e, t, n);
	if (t.type === "mdxjsEsm") return mdxEsm(e, t);
	if (t.type === "root") return root$4(e, t, n);
	if (t.type === "text") return text$7(e, t);
}
function element$4(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = svg, e.schema = i), e.ancestors.push(t);
	let a = findComponentFromName(e, t.tagName, !1), o = createElementProps(e, t), c = createChildren(e, t);
	return tableElements.has(t.tagName) && (c = c.filter(function(e) {
		return typeof e == "string" ? !whitespace(e) : !0;
	})), addNode(e, o, a, t), addChildren(o, c), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function mdxExpression(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	crashEstree(e, t.position);
}
function mdxEsm(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	crashEstree(e, t.position);
}
function mdxJsxElement(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = svg, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : findComponentFromName(e, t.name, !0), o = createJsxElementProps(e, t), c = createChildren(e, t);
	return addNode(e, o, a, t), addChildren(o, c), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function root$4(e, t, n) {
	let r = {};
	return addChildren(r, createChildren(e, t)), e.create(t, e.Fragment, r, n);
}
function text$7(e, t) {
	return t.value;
}
function addNode(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function addChildren(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function productionCreate(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function developmentCreate(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), c = pointStart(n);
		return t(r, i, a, o, {
			columnNumber: c ? c.column - 1 : void 0,
			fileName: e,
			lineNumber: c ? c.line : void 0
		}, void 0);
	}
}
function createElementProps(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && own$6.call(t.properties, i)) {
		let a = createProperty$1(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && tableCellElement.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style ||= {};
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function createJsxElementProps(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") if (r.data && r.data.estree && e.evaluater) {
		let t = r.data.estree.body[0];
		t.type;
		let i = t.expression;
		i.type;
		let a = i.properties[0];
		a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
	} else crashEstree(e, t.position);
	else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") if (r.value.data && r.value.data.estree && e.evaluater) {
			let t = r.value.data.estree.body[0];
			t.type, a = e.evaluater.evaluateExpression(t.expression);
		} else crashEstree(e, t.position);
		else a = r.value === null ? !0 : r.value;
		n[i] = a;
	}
	return n;
}
function createChildren(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : emptyMap;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let c = one$3(e, a, o);
		c !== void 0 && n.push(c);
	}
	return n;
}
function createProperty$1(e, t, n) {
	let r = find(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? stringify(n) : stringify$1(n)), r.property === "style") {
			let t = typeof n == "object" ? n : parseStyle(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = transformStylesToCssCasing(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? hastToReact[r.property] || r.property : r.attribute, n];
	}
}
function parseStyle(e, t) {
	try {
		return (0, import_cjs.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new VFileMessage("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = docs + "#cannot-parse-style-attribute", r;
	}
}
function findComponentFromName(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = name(e[n]) ? {
				type: "Identifier",
				name: e[n]
			} : {
				type: "Literal",
				value: e[n]
			};
			i = i ? {
				type: "MemberExpression",
				object: i,
				property: t,
				computed: !!(n && t.type === "Literal"),
				optional: !1
			} : t;
		}
		r = i;
	} else r = name(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return own$6.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	crashEstree(e);
}
function crashEstree(e, t) {
	let n = new VFileMessage("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = docs + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function transformStylesToCssCasing(e) {
	let t = {}, n;
	for (n in e) own$6.call(e, n) && (t[transformStyleToCssCasing(n)] = e[n]);
	return t;
}
function transformStyleToCssCasing(e) {
	let t = e.replace(cap, toDash);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function toDash(e) {
	return "-" + e.toLowerCase();
}
const urlAttributes = {
	action: ["form"],
	cite: [
		"blockquote",
		"del",
		"ins",
		"q"
	],
	data: ["object"],
	formAction: ["button", "input"],
	href: [
		"a",
		"area",
		"base",
		"link"
	],
	icon: ["menuitem"],
	itemId: null,
	manifest: ["html"],
	ping: ["a", "area"],
	poster: ["video"],
	src: [
		"audio",
		"embed",
		"iframe",
		"img",
		"input",
		"script",
		"source",
		"track",
		"video"
	]
};
var emptyOptions$3 = {};
function toString(e, t) {
	let n = t || emptyOptions$3;
	return one$2(e, typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, typeof n.includeHtml == "boolean" ? n.includeHtml : !0);
}
function one$2(e, t, n) {
	if (node(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return all$3(e.children, t, n);
	}
	return Array.isArray(e) ? all$3(e, t, n) : "";
}
function all$3(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = one$2(e[i], t, n);
	return r.join("");
}
function node(e) {
	return !!(e && typeof e == "object");
}
var element$3 = document.createElement("i");
function decodeNamedCharacterReference(e) {
	let t = "&" + e + ";";
	element$3.innerHTML = t;
	let n = element$3.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function splice(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function push(e, t) {
	return e.length > 0 ? (splice(e, e.length, 0, t), e) : t;
}
var hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) syntaxExtension(t, e[n]);
	return t;
}
function syntaxExtension(e, t) {
	let n;
	for (n in t) {
		let r = (hasOwnProperty.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			hasOwnProperty.call(r, a) || (r[a] = []);
			let e = i[a];
			constructs(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function constructs(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	splice(e, 0, 0, r);
}
function decodeNumericCharacterReference(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
function normalizeIdentifier(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const asciiAlpha = regexCheck(/[A-Za-z]/), asciiAlphanumeric = regexCheck(/[\dA-Za-z]/), asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(e) {
	return e !== null && (e < 32 || e === 127);
}
const asciiDigit = regexCheck(/\d/), asciiHexDigit = regexCheck(/[\dA-Fa-f]/), asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
function markdownLineEnding(e) {
	return e !== null && e < -2;
}
function markdownLineEndingOrSpace(e) {
	return e !== null && (e < 0 || e === 32);
}
function markdownSpace(e) {
	return e === -2 || e === -1 || e === 32;
}
const unicodePunctuation = regexCheck(/\p{P}|\p{S}/u), unicodeWhitespace = regexCheck(/\s/);
function regexCheck(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
function normalizeUri(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && asciiAlphanumeric(e.charCodeAt(n + 1)) && asciiAlphanumeric(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
function factorySpace(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return markdownSpace(r) ? (e.enter(n), c(r)) : t(r);
	}
	function c(r) {
		return markdownSpace(r) && a++ < i ? (e.consume(r), c) : (e.exit(n), t(r));
	}
}
const content = { tokenize: initializeContent };
function initializeContent(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), factorySpace(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
			return;
		}
		return markdownLineEnding(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
const document$1 = { tokenize: initializeDocument };
var containerConstruct = { tokenize: tokenizeContainer };
function initializeDocument(e) {
	let t = this, n = [], r = 0, i, a, o;
	return c;
	function c(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, l, u)(i);
		}
		return u(i);
	}
	function l(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && b();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			y(r);
			let c = n;
			for (; c < t.events.length;) t.events[c][1].end = { ...o }, c++;
			return splice(t.events, a + 1, 0, t.events.slice(n)), t.events.length = c, u(e);
		}
		return c(e);
	}
	function u(a) {
		if (r === n.length) {
			if (!i) return p(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return g(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(containerConstruct, d, f)(a);
	}
	function d(e) {
		return i && b(), y(r), p(e);
	}
	function f(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, g(e);
	}
	function p(n) {
		return t.containerState = {}, e.attempt(containerConstruct, m, g)(n);
	}
	function m(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), p(e);
	}
	function g(n) {
		if (n === null) {
			i && b(), y(0), e.consume(n);
			return;
		}
		return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), _(n);
	}
	function _(n) {
		if (n === null) {
			v(e.exit("chunkFlow"), !0), y(0), e.consume(n);
			return;
		}
		return markdownLineEnding(n) ? (e.consume(n), v(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, c) : (e.consume(n), _);
	}
	function v(e, n) {
		let c = t.sliceStream(e);
		if (n && c.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(c), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, c, l;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (c) {
					l = t.events[a][1].end;
					break;
				}
				c = !0;
			}
			for (y(r), e = n; e < t.events.length;) t.events[e][1].end = { ...l }, e++;
			splice(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function y(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function b() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function tokenizeContainer(e, t, n) {
	return factorySpace(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function classifyCharacter(e) {
	if (e === null || markdownLineEndingOrSpace(e) || unicodeWhitespace(e)) return 1;
	if (unicodePunctuation(e)) return 2;
}
function resolveAll(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
const attention = {
	name: "attention",
	resolveAll: resolveAllAttention,
	tokenize: tokenizeAttention
};
function resolveAllAttention(e, t) {
	let n = -1, r, i, a, o, c, l, u, d;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			l = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let f = { ...e[r][1].end }, p = { ...e[n][1].start };
			movePoint(f, -l), movePoint(p, l), o = {
				type: l > 1 ? "strongSequence" : "emphasisSequence",
				start: f,
				end: { ...e[r][1].end }
			}, c = {
				type: l > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: p
			}, a = {
				type: l > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: l > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...c.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...c.end }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = push(u, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), u = push(u, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), u = push(u, resolveAll(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = push(u, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					c,
					t
				],
				[
					"exit",
					c,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (d = 2, u = push(u, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : d = 0, splice(e, r - 1, n - r + 3, u), n = r + u.length - d - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function tokenizeAttention(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = classifyCharacter(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), c(t);
	}
	function c(o) {
		if (o === a) return e.consume(o), c;
		let l = e.exit("attentionSequence"), u = classifyCharacter(o), d = !u || u === 2 && i || n.includes(o), f = !i || i === 2 && u || n.includes(r);
		return l._open = !!(a === 42 ? d : d && (i || !f)), l._close = !!(a === 42 ? f : f && (u || !d)), t(o);
	}
}
function movePoint(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
const autolink = {
	name: "autolink",
	tokenize: tokenizeAutolink
};
function tokenizeAutolink(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return asciiAlpha(t) ? (e.consume(t), o) : t === 64 ? n(t) : u(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || asciiAlphanumeric(e) ? (r = 1, c(e)) : u(e);
	}
	function c(t) {
		return t === 58 ? (e.consume(t), r = 0, l) : (t === 43 || t === 45 || t === 46 || asciiAlphanumeric(t)) && r++ < 32 ? (e.consume(t), c) : (r = 0, u(t));
	}
	function l(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || asciiControl(r) ? n(r) : (e.consume(r), l);
	}
	function u(t) {
		return t === 64 ? (e.consume(t), d) : asciiAtext(t) ? (e.consume(t), u) : n(t);
	}
	function d(e) {
		return asciiAlphanumeric(e) ? f(e) : n(e);
	}
	function f(n) {
		return n === 46 ? (e.consume(n), r = 0, d) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : p(n);
	}
	function p(t) {
		if ((t === 45 || asciiAlphanumeric(t)) && r++ < 63) {
			let n = t === 45 ? p : f;
			return e.consume(t), n;
		}
		return n(t);
	}
}
const blankLine = {
	partial: !0,
	tokenize: tokenizeBlankLine
};
function tokenizeBlankLine(e, t, n) {
	return r;
	function r(t) {
		return markdownSpace(t) ? factorySpace(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || markdownLineEnding(e) ? t(e) : n(e);
	}
}
const blockQuote = {
	continuation: { tokenize: tokenizeBlockQuoteContinuation },
	exit: exit$1,
	name: "blockQuote",
	tokenize: tokenizeBlockQuoteStart
};
function tokenizeBlockQuoteStart(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return markdownSpace(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function tokenizeBlockQuoteContinuation(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return markdownSpace(t) ? factorySpace(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(blockQuote, t, n)(r);
	}
}
function exit$1(e) {
	e.exit("blockQuote");
}
const characterEscape = {
	name: "characterEscape",
	tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return asciiPunctuation(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
const characterReference = {
	name: "characterReference",
	tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(e, t, n) {
	let r = this, i = 0, a, o;
	return c;
	function c(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), l;
	}
	function l(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), a = 31, o = asciiAlphanumeric, d(t));
	}
	function u(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = asciiHexDigit, d) : (e.enter("characterReferenceValue"), a = 7, o = asciiDigit, d(t));
	}
	function d(c) {
		if (c === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === asciiAlphanumeric && !decodeNamedCharacterReference(r.sliceSerialize(i)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(c) && i++ < a ? (e.consume(c), d) : n(c);
	}
}
var nonLazyContinuation = {
	partial: !0,
	tokenize: tokenizeNonLazyContinuation
};
const codeFenced = {
	concrete: !0,
	name: "codeFenced",
	tokenize: tokenizeCodeFenced
};
function tokenizeCodeFenced(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: C
	}, a = 0, o = 0, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, c = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), d(t);
	}
	function d(t) {
		return t === c ? (o++, e.consume(t), d) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), markdownSpace(t) ? factorySpace(e, f, "whitespace")(t) : f(t));
	}
	function f(n) {
		return n === null || markdownLineEnding(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(nonLazyContinuation, _, S)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === null || markdownLineEnding(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(t)) : markdownSpace(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), factorySpace(e, m, "whitespace")(t)) : t === 96 && t === c ? n(t) : (e.consume(t), p);
	}
	function m(t) {
		return t === null || markdownLineEnding(t) ? f(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), g(t));
	}
	function g(t) {
		return t === null || markdownLineEnding(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(t)) : t === 96 && t === c ? n(t) : (e.consume(t), g);
	}
	function _(t) {
		return e.attempt(i, S, v)(t);
	}
	function v(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), y;
	}
	function y(t) {
		return a > 0 && markdownSpace(t) ? factorySpace(e, b, "linePrefix", a + 1)(t) : b(t);
	}
	function b(t) {
		return t === null || markdownLineEnding(t) ? e.check(nonLazyContinuation, _, S)(t) : (e.enter("codeFlowValue"), x(t));
	}
	function x(t) {
		return t === null || markdownLineEnding(t) ? (e.exit("codeFlowValue"), b(t)) : (e.consume(t), x);
	}
	function S(n) {
		return e.exit("codeFenced"), t(n);
	}
	function C(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), l;
		}
		function l(t) {
			return e.enter("codeFencedFence"), markdownSpace(t) ? factorySpace(e, u, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : u(t);
		}
		function u(t) {
			return t === c ? (e.enter("codeFencedFenceSequence"), d(t)) : n(t);
		}
		function d(t) {
			return t === c ? (i++, e.consume(t), d) : i >= o ? (e.exit("codeFencedFenceSequence"), markdownSpace(t) ? factorySpace(e, f, "whitespace")(t) : f(t)) : n(t);
		}
		function f(r) {
			return r === null || markdownLineEnding(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function tokenizeNonLazyContinuation(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
const codeIndented = {
	name: "codeIndented",
	tokenize: tokenizeCodeIndented
};
var furtherStart = {
	partial: !0,
	tokenize: tokenizeFurtherStart
};
function tokenizeCodeIndented(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), factorySpace(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? l(t) : markdownLineEnding(t) ? e.attempt(furtherStart, o, l)(t) : (e.enter("codeFlowValue"), c(t));
	}
	function c(t) {
		return t === null || markdownLineEnding(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), c);
	}
	function l(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function tokenizeFurtherStart(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : markdownLineEnding(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : factorySpace(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : markdownLineEnding(e) ? i(e) : n(e);
	}
}
const codeText = {
	name: "codeText",
	previous: previous$1,
	resolve: resolveCodeText,
	tokenize: tokenizeCodeText
};
function resolveCodeText(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function previous$1(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), c(t);
	}
	function c(t) {
		return t === 96 ? (e.consume(t), r++, c) : (e.exit("codeTextSequence"), l(t));
	}
	function l(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), l) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, d(t)) : markdownLineEnding(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), l) : (e.enter("codeTextData"), u(t));
	}
	function u(t) {
		return t === null || t === 32 || t === 96 || markdownLineEnding(t) ? (e.exit("codeTextData"), l(t)) : (e.consume(t), u);
	}
	function d(n) {
		return n === 96 ? (e.consume(n), i++, d) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", u(n));
	}
}
var SpliceBuffer = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && chunkedPush(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), chunkedPush(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), chunkedPush(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			chunkedPush(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			chunkedPush(this.left, t.reverse());
		}
	}
};
function chunkedPush(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function subtokenize(e) {
	let t = {}, n = -1, r, i, a, o, c, l, u, d = new SpliceBuffer(e);
	for (; ++n < d.length;) {
		for (; n in t;) n = t[n];
		if (r = d.get(n), n && r[1].type === "chunkFlow" && d.get(n - 1)[1].type === "listItemPrefix" && (l = r[1]._tokenizer.events, a = 0, a < l.length && l[a][1].type === "lineEndingBlank" && (a += 2), a < l.length && l[a][1].type === "content")) for (; ++a < l.length && l[a][1].type !== "content";) l[a][1].type === "chunkText" && (l[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, subcontent(d, n)), n = t[n], u = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = d.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (d.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...d.get(i)[1].start }, c = d.slice(i, n), c.unshift(r), d.splice(i, n - i + 1, c));
		}
	}
	return splice(e, 0, Infinity, d.slice(0)), !u;
}
function subcontent(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let c = o.events, l = [], u = {}, d, f, p = -1, m = n, g = 0, _ = 0, v = [_];
	for (; m;) {
		for (; e.get(++i)[1] !== m;);
		a.push(i), m._tokenizer || (d = r.sliceStream(m), m.next || d.push(null), f && o.defineSkip(m.start), m._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(d), m._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), f = m, m = m.next;
	}
	for (m = n; ++p < c.length;) c[p][0] === "exit" && c[p - 1][0] === "enter" && c[p][1].type === c[p - 1][1].type && c[p][1].start.line !== c[p][1].end.line && (_ = p + 1, v.push(_), m._tokenizer = void 0, m.previous = void 0, m = m.next);
	for (o.events = [], m ? (m._tokenizer = void 0, m.previous = void 0) : v.pop(), p = v.length; p--;) {
		let t = c.slice(v[p], v[p + 1]), n = a.pop();
		l.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (l.reverse(), p = -1; ++p < l.length;) u[g + l[p][0]] = g + l[p][1], g += l[p][1] - l[p][0] - 1;
	return u;
}
const content$1 = {
	resolve: resolveContent,
	tokenize: tokenizeContent
};
var continuationConstruct = {
	partial: !0,
	tokenize: tokenizeContinuation
};
function resolveContent(e) {
	return subtokenize(e), e;
}
function tokenizeContent(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : markdownLineEnding(t) ? e.check(continuationConstruct, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function tokenizeContinuation(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), factorySpace(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || markdownLineEnding(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
function factoryDestination(e, t, n, r, i, a, o, c, l) {
	let u = l || Infinity, d = 0;
	return f;
	function f(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), p) : t === null || t === 32 || t === 41 || asciiControl(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(c), e.enter("chunkString", { contentType: "string" }), _(t));
	}
	function p(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(c), e.enter("chunkString", { contentType: "string" }), m(n));
	}
	function m(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(c), p(t)) : t === null || t === 60 || markdownLineEnding(t) ? n(t) : (e.consume(t), t === 92 ? g : m);
	}
	function g(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), m) : m(t);
	}
	function _(i) {
		return !d && (i === null || i === 41 || markdownLineEndingOrSpace(i)) ? (e.exit("chunkString"), e.exit(c), e.exit(o), e.exit(r), t(i)) : d < u && i === 40 ? (e.consume(i), d++, _) : i === 41 ? (e.consume(i), d--, _) : i === null || i === 32 || i === 40 || asciiControl(i) ? n(i) : (e.consume(i), i === 92 ? v : _);
	}
	function v(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), _) : _(t);
	}
}
function factoryLabel(e, t, n, r, i, a) {
	let o = this, c = 0, l;
	return u;
	function u(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), d;
	}
	function d(u) {
		return c > 999 || u === null || u === 91 || u === 93 && !l || u === 94 && !c && "_hiddenFootnoteSupport" in o.parser.constructs ? n(u) : u === 93 ? (e.exit(a), e.enter(i), e.consume(u), e.exit(i), e.exit(r), t) : markdownLineEnding(u) ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), d) : (e.enter("chunkString", { contentType: "string" }), f(u));
	}
	function f(t) {
		return t === null || t === 91 || t === 93 || markdownLineEnding(t) || c++ > 999 ? (e.exit("chunkString"), d(t)) : (e.consume(t), l ||= !markdownSpace(t), t === 92 ? p : f);
	}
	function p(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), c++, f) : f(t);
	}
}
function factoryTitle(e, t, n, r, i, a) {
	let o;
	return c;
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, l) : n(t);
	}
	function l(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), u(n));
	}
	function u(t) {
		return t === o ? (e.exit(a), l(o)) : t === null ? n(t) : markdownLineEnding(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), factorySpace(e, u, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), d(t));
	}
	function d(t) {
		return t === o || t === null || markdownLineEnding(t) ? (e.exit("chunkString"), u(t)) : (e.consume(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === o || t === 92 ? (e.consume(t), d) : d(t);
	}
}
function factoryWhitespace(e, t) {
	let n;
	return r;
	function r(i) {
		return markdownLineEnding(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : markdownSpace(i) ? factorySpace(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
const definition$1 = {
	name: "definition",
	tokenize: tokenizeDefinition
};
var titleBefore = {
	partial: !0,
	tokenize: tokenizeTitleBefore
};
function tokenizeDefinition(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return factoryLabel.call(r, e, c, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function c(t) {
		return i = normalizeIdentifier(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), l) : n(t);
	}
	function l(t) {
		return markdownLineEndingOrSpace(t) ? factoryWhitespace(e, u)(t) : u(t);
	}
	function u(t) {
		return factoryDestination(e, d, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function d(t) {
		return e.attempt(titleBefore, f, f)(t);
	}
	function f(t) {
		return markdownSpace(t) ? factorySpace(e, p, "whitespace")(t) : p(t);
	}
	function p(a) {
		return a === null || markdownLineEnding(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function tokenizeTitleBefore(e, t, n) {
	return r;
	function r(t) {
		return markdownLineEndingOrSpace(t) ? factoryWhitespace(e, i)(t) : n(t);
	}
	function i(t) {
		return factoryTitle(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return markdownSpace(t) ? factorySpace(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || markdownLineEnding(e) ? t(e) : n(e);
	}
}
const hardBreakEscape = {
	name: "hardBreakEscape",
	tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return markdownLineEnding(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
const headingAtx = {
	name: "headingAtx",
	resolve: resolveHeadingAtx,
	tokenize: tokenizeHeadingAtx
};
function resolveHeadingAtx(e, t) {
	let n = e.length - 2, r = 3, i, a;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, a = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, splice(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function tokenizeHeadingAtx(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || markdownLineEndingOrSpace(t) ? (e.exit("atxHeadingSequence"), c(t)) : n(t);
	}
	function c(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), l(n)) : n === null || markdownLineEnding(n) ? (e.exit("atxHeading"), t(n)) : markdownSpace(n) ? factorySpace(e, c, "whitespace")(n) : (e.enter("atxHeadingText"), u(n));
	}
	function l(t) {
		return t === 35 ? (e.consume(t), l) : (e.exit("atxHeadingSequence"), c(t));
	}
	function u(t) {
		return t === null || t === 35 || markdownLineEndingOrSpace(t) ? (e.exit("atxHeadingText"), c(t)) : (e.consume(t), u);
	}
}
const htmlBlockNames = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), htmlRawNames = [
	"pre",
	"script",
	"style",
	"textarea"
], htmlFlow = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: resolveToHtmlFlow,
	tokenize: tokenizeHtmlFlow
};
var blankLineBefore = {
	partial: !0,
	tokenize: tokenizeBlankLineBefore
}, nonLazyContinuationStart = {
	partial: !0,
	tokenize: tokenizeNonLazyContinuationStart
};
function resolveToHtmlFlow(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function tokenizeHtmlFlow(e, t, n) {
	let r = this, i, a, o, c, l;
	return u;
	function u(e) {
		return d(e);
	}
	function d(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), f;
	}
	function f(c) {
		return c === 33 ? (e.consume(c), p) : c === 47 ? (e.consume(c), a = !0, _) : c === 63 ? (e.consume(c), i = 3, r.interrupt ? t : R) : asciiAlpha(c) ? (e.consume(c), o = String.fromCharCode(c), v) : n(c);
	}
	function p(a) {
		return a === 45 ? (e.consume(a), i = 2, m) : a === 91 ? (e.consume(a), i = 5, c = 0, g) : asciiAlpha(a) ? (e.consume(a), i = 4, r.interrupt ? t : R) : n(a);
	}
	function m(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : R) : n(i);
	}
	function g(i) {
		return i === "CDATA[".charCodeAt(c++) ? (e.consume(i), c === 6 ? r.interrupt ? t : A : g) : n(i);
	}
	function _(t) {
		return asciiAlpha(t) ? (e.consume(t), o = String.fromCharCode(t), v) : n(t);
	}
	function v(c) {
		if (c === null || c === 47 || c === 62 || markdownLineEndingOrSpace(c)) {
			let l = c === 47, u = o.toLowerCase();
			return !l && !a && htmlRawNames.includes(u) ? (i = 1, r.interrupt ? t(c) : A(c)) : htmlBlockNames.includes(o.toLowerCase()) ? (i = 6, l ? (e.consume(c), y) : r.interrupt ? t(c) : A(c)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(c) : a ? b(c) : x(c));
		}
		return c === 45 || asciiAlphanumeric(c) ? (e.consume(c), o += String.fromCharCode(c), v) : n(c);
	}
	function y(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : A) : n(i);
	}
	function b(t) {
		return markdownSpace(t) ? (e.consume(t), b) : O(t);
	}
	function x(t) {
		return t === 47 ? (e.consume(t), O) : t === 58 || t === 95 || asciiAlpha(t) ? (e.consume(t), S) : markdownSpace(t) ? (e.consume(t), x) : O(t);
	}
	function S(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || asciiAlphanumeric(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return t === 61 ? (e.consume(t), w) : markdownSpace(t) ? (e.consume(t), C) : x(t);
	}
	function w(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), l = t, T) : markdownSpace(t) ? (e.consume(t), w) : E(t);
	}
	function T(t) {
		return t === l ? (e.consume(t), l = null, D) : t === null || markdownLineEnding(t) ? n(t) : (e.consume(t), T);
	}
	function E(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || markdownLineEndingOrSpace(t) ? C(t) : (e.consume(t), E);
	}
	function D(e) {
		return e === 47 || e === 62 || markdownSpace(e) ? x(e) : n(e);
	}
	function O(t) {
		return t === 62 ? (e.consume(t), k) : n(t);
	}
	function k(t) {
		return t === null || markdownLineEnding(t) ? A(t) : markdownSpace(t) ? (e.consume(t), k) : n(t);
	}
	function A(t) {
		return t === 45 && i === 2 ? (e.consume(t), P) : t === 60 && i === 1 ? (e.consume(t), F) : t === 62 && i === 4 ? (e.consume(t), z) : t === 63 && i === 3 ? (e.consume(t), R) : t === 93 && i === 5 ? (e.consume(t), L) : markdownLineEnding(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(blankLineBefore, B, j)(t)) : t === null || markdownLineEnding(t) ? (e.exit("htmlFlowData"), j(t)) : (e.consume(t), A);
	}
	function j(t) {
		return e.check(nonLazyContinuationStart, M, B)(t);
	}
	function M(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), N;
	}
	function N(t) {
		return t === null || markdownLineEnding(t) ? j(t) : (e.enter("htmlFlowData"), A(t));
	}
	function P(t) {
		return t === 45 ? (e.consume(t), R) : A(t);
	}
	function F(t) {
		return t === 47 ? (e.consume(t), o = "", I) : A(t);
	}
	function I(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return htmlRawNames.includes(n) ? (e.consume(t), z) : A(t);
		}
		return asciiAlpha(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), I) : A(t);
	}
	function L(t) {
		return t === 93 ? (e.consume(t), R) : A(t);
	}
	function R(t) {
		return t === 62 ? (e.consume(t), z) : t === 45 && i === 2 ? (e.consume(t), R) : A(t);
	}
	function z(t) {
		return t === null || markdownLineEnding(t) ? (e.exit("htmlFlowData"), B(t)) : (e.consume(t), z);
	}
	function B(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function tokenizeNonLazyContinuationStart(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return markdownLineEnding(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function tokenizeBlankLineBefore(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(blankLine, t, n);
	}
}
const htmlText = {
	name: "htmlText",
	tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(e, t, n) {
	let r = this, i, a, o;
	return c;
	function c(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), l;
	}
	function l(t) {
		return t === 33 ? (e.consume(t), u) : t === 47 ? (e.consume(t), C) : t === 63 ? (e.consume(t), x) : asciiAlpha(t) ? (e.consume(t), E) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), d) : t === 91 ? (e.consume(t), a = 0, g) : asciiAlpha(t) ? (e.consume(t), b) : n(t);
	}
	function d(t) {
		return t === 45 ? (e.consume(t), m) : n(t);
	}
	function f(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), p) : markdownLineEnding(t) ? (o = f, F(t)) : (e.consume(t), f);
	}
	function p(t) {
		return t === 45 ? (e.consume(t), m) : f(t);
	}
	function m(e) {
		return e === 62 ? P(e) : e === 45 ? p(e) : f(e);
	}
	function g(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? _ : g) : n(t);
	}
	function _(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), v) : markdownLineEnding(t) ? (o = _, F(t)) : (e.consume(t), _);
	}
	function v(t) {
		return t === 93 ? (e.consume(t), y) : _(t);
	}
	function y(t) {
		return t === 62 ? P(t) : t === 93 ? (e.consume(t), y) : _(t);
	}
	function b(t) {
		return t === null || t === 62 ? P(t) : markdownLineEnding(t) ? (o = b, F(t)) : (e.consume(t), b);
	}
	function x(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), S) : markdownLineEnding(t) ? (o = x, F(t)) : (e.consume(t), x);
	}
	function S(e) {
		return e === 62 ? P(e) : x(e);
	}
	function C(t) {
		return asciiAlpha(t) ? (e.consume(t), w) : n(t);
	}
	function w(t) {
		return t === 45 || asciiAlphanumeric(t) ? (e.consume(t), w) : T(t);
	}
	function T(t) {
		return markdownLineEnding(t) ? (o = T, F(t)) : markdownSpace(t) ? (e.consume(t), T) : P(t);
	}
	function E(t) {
		return t === 45 || asciiAlphanumeric(t) ? (e.consume(t), E) : t === 47 || t === 62 || markdownLineEndingOrSpace(t) ? D(t) : n(t);
	}
	function D(t) {
		return t === 47 ? (e.consume(t), P) : t === 58 || t === 95 || asciiAlpha(t) ? (e.consume(t), O) : markdownLineEnding(t) ? (o = D, F(t)) : markdownSpace(t) ? (e.consume(t), D) : P(t);
	}
	function O(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || asciiAlphanumeric(t) ? (e.consume(t), O) : k(t);
	}
	function k(t) {
		return t === 61 ? (e.consume(t), A) : markdownLineEnding(t) ? (o = k, F(t)) : markdownSpace(t) ? (e.consume(t), k) : D(t);
	}
	function A(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, j) : markdownLineEnding(t) ? (o = A, F(t)) : markdownSpace(t) ? (e.consume(t), A) : (e.consume(t), M);
	}
	function j(t) {
		return t === i ? (e.consume(t), i = void 0, N) : t === null ? n(t) : markdownLineEnding(t) ? (o = j, F(t)) : (e.consume(t), j);
	}
	function M(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || markdownLineEndingOrSpace(t) ? D(t) : (e.consume(t), M);
	}
	function N(e) {
		return e === 47 || e === 62 || markdownLineEndingOrSpace(e) ? D(e) : n(e);
	}
	function P(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function F(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), I;
	}
	function I(t) {
		return markdownSpace(t) ? factorySpace(e, L, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : L(t);
	}
	function L(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
const labelEnd = {
	name: "labelEnd",
	resolveAll: resolveAllLabelEnd,
	resolveTo: resolveToLabelEnd,
	tokenize: tokenizeLabelEnd
};
var resourceConstruct = { tokenize: tokenizeResource }, referenceFullConstruct = { tokenize: tokenizeReferenceFull }, referenceCollapsedConstruct = { tokenize: tokenizeReferenceCollapsed };
function resolveAllLabelEnd(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && splice(e, 0, e.length, n), e;
}
function resolveToLabelEnd(e, t) {
	let n = e.length, r = 0, i, a, o, c;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let l = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, u = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, d = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return c = [[
		"enter",
		l,
		t
	], [
		"enter",
		u,
		t
	]], c = push(c, e.slice(a + 1, a + r + 3)), c = push(c, [[
		"enter",
		d,
		t
	]]), c = push(c, resolveAll(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), c = push(c, [
		[
			"exit",
			d,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			u,
			t
		]
	]), c = push(c, e.slice(o + 1)), c = push(c, [[
		"exit",
		l,
		t
	]]), splice(e, a, e.length, c), e;
}
function tokenizeLabelEnd(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return c;
	function c(t) {
		return a ? a._inactive ? f(t) : (o = r.parser.defined.includes(normalizeIdentifier(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), l) : n(t);
	}
	function l(t) {
		return t === 40 ? e.attempt(resourceConstruct, d, o ? d : f)(t) : t === 91 ? e.attempt(referenceFullConstruct, d, o ? u : f)(t) : o ? d(t) : f(t);
	}
	function u(t) {
		return e.attempt(referenceCollapsedConstruct, d, f)(t);
	}
	function d(e) {
		return t(e);
	}
	function f(e) {
		return a._balanced = !0, n(e);
	}
}
function tokenizeResource(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return markdownLineEndingOrSpace(t) ? factoryWhitespace(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? d(t) : factoryDestination(e, o, c, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return markdownLineEndingOrSpace(t) ? factoryWhitespace(e, l)(t) : d(t);
	}
	function c(e) {
		return n(e);
	}
	function l(t) {
		return t === 34 || t === 39 || t === 40 ? factoryTitle(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : d(t);
	}
	function u(t) {
		return markdownLineEndingOrSpace(t) ? factoryWhitespace(e, d)(t) : d(t);
	}
	function d(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function tokenizeReferenceFull(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return factoryLabel.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(normalizeIdentifier(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function tokenizeReferenceCollapsed(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
const labelStartImage = {
	name: "labelStartImage",
	resolveAll: labelEnd.resolveAll,
	tokenize: tokenizeLabelStartImage
};
function tokenizeLabelStartImage(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
const labelStartLink = {
	name: "labelStartLink",
	resolveAll: labelEnd.resolveAll,
	tokenize: tokenizeLabelStartLink
};
function tokenizeLabelStartLink(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
const lineEnding = {
	name: "lineEnding",
	tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), factorySpace(e, t, "linePrefix");
	}
}
const thematicBreak$2 = {
	name: "thematicBreak",
	tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, c(e);
	}
	function c(a) {
		return a === i ? (e.enter("thematicBreakSequence"), l(a)) : r >= 3 && (a === null || markdownLineEnding(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function l(t) {
		return t === i ? (e.consume(t), r++, l) : (e.exit("thematicBreakSequence"), markdownSpace(t) ? factorySpace(e, c, "whitespace")(t) : c(t));
	}
}
const list$2 = {
	continuation: { tokenize: tokenizeListContinuation },
	exit: tokenizeListEnd,
	name: "list",
	tokenize: tokenizeListStart
};
var listItemPrefixWhitespaceConstruct = {
	partial: !0,
	tokenize: tokenizeListItemPrefixWhitespace
}, indentConstruct = {
	partial: !0,
	tokenize: tokenizeIndent$1
};
function tokenizeListStart(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return c;
	function c(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : asciiDigit(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(thematicBreak$2, n, u)(t) : u(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), l(t);
		}
		return n(t);
	}
	function l(t) {
		return asciiDigit(t) && ++o < 10 ? (e.consume(t), l) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), u(t)) : n(t);
	}
	function u(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(blankLine, r.interrupt ? n : d, e.attempt(listItemPrefixWhitespaceConstruct, p, f));
	}
	function d(e) {
		return r.containerState.initialBlankLine = !0, a++, p(e);
	}
	function f(t) {
		return markdownSpace(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), p) : n(t);
	}
	function p(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function tokenizeListContinuation(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(blankLine, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, factorySpace(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !markdownSpace(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(indentConstruct, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, factorySpace(e, e.attempt(list$2, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function tokenizeIndent$1(e, t, n) {
	let r = this;
	return factorySpace(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function tokenizeListEnd(e) {
	e.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(e, t, n) {
	let r = this;
	return factorySpace(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !markdownSpace(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
const setextUnderline = {
	name: "setextUnderline",
	resolveTo: resolveToSetextUnderline,
	tokenize: tokenizeSetextUnderline
};
function resolveToSetextUnderline(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function tokenizeSetextUnderline(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, c;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			c = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), c(t);
	}
	function c(t) {
		return t === i ? (e.consume(t), c) : (e.exit("setextHeadingLineSequence"), markdownSpace(t) ? factorySpace(e, l, "lineSuffix")(t) : l(t));
	}
	function l(r) {
		return r === null || markdownLineEnding(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
const flow = { tokenize: initializeFlow };
function initializeFlow(e) {
	let t = this, n = e.attempt(blankLine, r, e.attempt(this.parser.constructs.flowInitial, i, factorySpace(e, e.attempt(this.parser.constructs.flow, i, e.attempt(content$1, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
const resolver = { resolveAll: createResolver() }, string = initializeFactory("string"), text$5 = initializeFactory("text");
function initializeFactory(e) {
	return {
		resolveAll: createResolver(e === "text" ? resolveAllLineSuffixes : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return l(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) {
				t.consume(e);
				return;
			}
			return t.enter("data"), t.consume(e), c;
		}
		function c(e) {
			return l(e) ? (t.exit("data"), i(e)) : (t.consume(e), c);
		}
		function l(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function createResolver(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function resolveAllLineSuffixes(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, c = 0, l;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) c++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) l = !0, c++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (c = 0), c) {
			let i = {
				type: n === e.length || l || c < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - c,
					offset: r.end.offset - c
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
var constructs_exports = /* @__PURE__ */ __export({
	attentionMarkers: () => attentionMarkers,
	contentInitial: () => contentInitial,
	disable: () => disable,
	document: () => document$2,
	flow: () => flow$1,
	flowInitial: () => flowInitial,
	insideSpan: () => insideSpan,
	string: () => string$1,
	text: () => text$6
});
const document$2 = {
	42: list$2,
	43: list$2,
	45: list$2,
	48: list$2,
	49: list$2,
	50: list$2,
	51: list$2,
	52: list$2,
	53: list$2,
	54: list$2,
	55: list$2,
	56: list$2,
	57: list$2,
	62: blockQuote
}, contentInitial = { 91: definition$1 }, flowInitial = {
	[-2]: codeIndented,
	[-1]: codeIndented,
	32: codeIndented
}, flow$1 = {
	35: headingAtx,
	42: thematicBreak$2,
	45: [setextUnderline, thematicBreak$2],
	60: htmlFlow,
	61: setextUnderline,
	95: thematicBreak$2,
	96: codeFenced,
	126: codeFenced
}, string$1 = {
	38: characterReference,
	92: characterEscape
}, text$6 = {
	[-5]: lineEnding,
	[-4]: lineEnding,
	[-3]: lineEnding,
	33: labelStartImage,
	38: characterReference,
	42: attention,
	60: [autolink, htmlText],
	91: labelStartLink,
	92: [hardBreakEscape, characterEscape],
	93: labelEnd,
	95: attention,
	96: codeText
}, insideSpan = { null: [attention, resolver] }, attentionMarkers = { null: [42, 95] }, disable = { null: [] };
function createTokenizer(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], c = [], l = {
		attempt: T(C),
		check: T(w),
		consume: b,
		enter: x,
		exit: S,
		interrupt: T(w, { interrupt: !0 })
	}, u = {
		code: null,
		containerState: {},
		defineSkip: _,
		events: [],
		now: g,
		parser: e,
		previous: null,
		sliceSerialize: p,
		sliceStream: m,
		write: f
	}, d = t.tokenize.call(u, l);
	return t.resolveAll && a.push(t), u;
	function f(e) {
		return o = push(o, e), v(), o[o.length - 1] === null ? (E(t, 0), u.events = resolveAll(a, u.events, u), u.events) : [];
	}
	function p(e, t) {
		return serializeChunks(m(e), t);
	}
	function m(e) {
		return sliceChunks(o, e);
	}
	function g() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function _(e) {
		i[e.line] = e.column, O();
	}
	function v() {
		let e;
		for (; r._index < o.length;) {
			let t = o[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) y(t.charCodeAt(r._bufferIndex));
			else y(t);
		}
	}
	function y(e) {
		d = d(e);
	}
	function b(e) {
		markdownLineEnding(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, O()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = e;
	}
	function x(e, t) {
		let n = t || {};
		return n.type = e, n.start = g(), u.events.push([
			"enter",
			n,
			u
		]), c.push(n), n;
	}
	function S(e) {
		let t = c.pop();
		return t.end = g(), u.events.push([
			"exit",
			t,
			u
		]), t;
	}
	function C(e, t) {
		E(e, t.from);
	}
	function w(e, t) {
		t.restore();
	}
	function T(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, c, d;
			return Array.isArray(n) ? p(n) : "tokenize" in n ? p([n]) : f(n);
			function f(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return p([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function p(e) {
				return a = e, o = 0, e.length === 0 ? i : m(e[o]);
			}
			function m(e) {
				return n;
				function n(n) {
					return d = D(), c = e, e.partial || (u.currentConstruct = e), e.name && u.parser.constructs.disable.null.includes(e.name) ? _(n) : e.tokenize.call(t ? Object.assign(Object.create(u), t) : u, l, g, _)(n);
				}
			}
			function g(t) {
				return e(c, d), r;
			}
			function _(e) {
				return d.restore(), ++o < a.length ? m(a[o]) : i;
			}
		}
	}
	function E(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && splice(u.events, t, u.events.length - t, e.resolve(u.events.slice(t), u)), e.resolveTo && (u.events = e.resolveTo(u.events, u));
	}
	function D() {
		let e = g(), t = u.previous, n = u.currentConstruct, i = u.events.length, a = Array.from(c);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, u.previous = t, u.currentConstruct = n, u.events.length = i, c = a, O();
		}
	}
	function O() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function sliceChunks(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function serializeChunks(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
function parse$2(e) {
	let t = {
		constructs: combineExtensions([constructs_exports, ...(e || {}).extensions || []]),
		content: n(content),
		defined: [],
		document: n(document$1),
		flow: n(flow),
		lazy: {},
		string: n(string),
		text: n(text$5)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return createTokenizer(t, e, n);
		}
	}
}
function postprocess(e) {
	for (; !subtokenize(e););
	return e;
}
var search$1 = /[\0\t\n\r]/g;
function preprocess() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let c = [], l, u, d, f, p;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), d = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && d++, void 0); d < i.length;) {
			if (search$1.lastIndex = d, l = search$1.exec(i), f = l && l.index !== void 0 ? l.index : i.length, p = i.charCodeAt(f), !l) {
				t = i.slice(d);
				break;
			}
			if (p === 10 && d === f && r) c.push(-3), r = void 0;
			else switch (r &&= (c.push(-5), void 0), d < f && (c.push(i.slice(d, f)), e += f - d), p) {
				case 0:
					c.push(65533), e++;
					break;
				case 9:
					for (u = Math.ceil(e / 4) * 4, c.push(-2); e++ < u;) c.push(-1);
					break;
				case 10:
					c.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			d = f + 1;
		}
		return o && (r && c.push(-5), t && c.push(t), c.push(null)), c;
	}
}
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(e) {
	return e.replace(characterEscapeOrReference, decode);
}
function decode(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return decodeNumericCharacterReference(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return decodeNamedCharacterReference(n) || e;
}
var own$5 = {}.hasOwnProperty;
function fromMarkdown(e, t, n) {
	return typeof t != "string" && (n = t, t = void 0), compiler(n)(postprocess(parse$2(n).document().write(preprocess()(e, t, !0))));
}
function compiler(e) {
	let t = {
		transforms: [],
		canContainEols: [
			"emphasis",
			"fragment",
			"heading",
			"paragraph",
			"strong"
		],
		enter: {
			autolink: a(Z),
			autolinkProtocol: D,
			autolinkEmail: D,
			atxHeading: a(J),
			blockQuote: a(FE),
			characterEscape: D,
			characterReference: D,
			codeFenced: a(q),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: a(q, o),
			codeText: a(IE, o),
			codeTextData: D,
			data: D,
			codeFlowValue: D,
			definition: a(LE),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(RE),
			hardBreakEscape: a(Y),
			hardBreakTrailing: a(Y),
			htmlFlow: a(X, o),
			htmlFlowData: D,
			htmlText: a(X, o),
			htmlTextData: D,
			image: a(zE),
			label: o,
			link: a(Z),
			listItem: a(BE),
			listItemValue: p,
			listOrdered: a(Q, f),
			listUnordered: a(Q),
			paragraph: a(VE),
			reference: V,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(J),
			strong: a(HE),
			thematicBreak: a(WE)
		},
		exit: {
			atxHeading: l(),
			atxHeadingSequence: C,
			autolink: l(),
			autolinkEmail: PE,
			autolinkProtocol: K,
			blockQuote: l(),
			characterEscapeValue: O,
			characterReferenceMarkerHexadecimal: U,
			characterReferenceMarkerNumeric: U,
			characterReferenceValue: W,
			characterReference: G,
			codeFenced: l(v),
			codeFencedFence: _,
			codeFencedFenceInfo: m,
			codeFencedFenceMeta: g,
			codeFlowValue: O,
			codeIndented: l(y),
			codeText: l(N),
			codeTextData: O,
			data: O,
			definition: l(),
			definitionDestinationString: S,
			definitionLabelString: b,
			definitionTitleString: x,
			emphasis: l(),
			hardBreakEscape: l(A),
			hardBreakTrailing: l(A),
			htmlFlow: l(j),
			htmlFlowData: O,
			htmlText: l(M),
			htmlTextData: O,
			image: l(F),
			label: L,
			labelText: I,
			lineEnding: k,
			link: l(P),
			listItem: l(),
			listOrdered: l(),
			listUnordered: l(),
			paragraph: l(),
			referenceString: H,
			resourceDestinationString: R,
			resourceTitleString: z,
			resource: B,
			setextHeading: l(E),
			setextHeadingLineSequence: T,
			setextHeadingText: w,
			strong: l(),
			thematicBreak: l()
		}
	};
	configure(t, (e || {}).mdastExtensions || []);
	let n = {};
	return r;
	function r(e) {
		let r = {
			type: "root",
			children: []
		}, a = {
			stack: [r],
			tokenStack: [],
			config: t,
			enter: c,
			exit: u,
			buffer: o,
			resume: d,
			data: n
		}, l = [], f = -1;
		for (; ++f < e.length;) (e[f][1].type === "listOrdered" || e[f][1].type === "listUnordered") && (e[f][0] === "enter" ? l.push(f) : f = i(e, l.pop(), f));
		for (f = -1; ++f < e.length;) {
			let n = t[e[f][0]];
			own$5.call(n, e[f][1].type) && n[e[f][1].type].call(Object.assign({ sliceSerialize: e[f][2].sliceSerialize }, a), e[f][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || defaultOnError).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: point$1(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: point$1(e.length > 0 ? e[e.length - 2][1].end : {
				line: 1,
				column: 1,
				offset: 0
			})
		}, f = -1; ++f < t.transforms.length;) r = t.transforms[f](r) || r;
		return r;
	}
	function i(e, t, n) {
		let r = t - 1, i = -1, a = !1, o, c, l, u;
		for (; ++r <= n;) {
			let t = e[r];
			switch (t[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote":
					t[0] === "enter" ? i++ : i--, u = void 0;
					break;
				case "lineEndingBlank":
					t[0] === "enter" && (o && !u && !i && !l && (l = r), u = void 0);
					break;
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace": break;
				default: u = void 0;
			}
			if (!i && t[0] === "enter" && t[1].type === "listItemPrefix" || i === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered")) {
				if (o) {
					let i = r;
					for (c = void 0; i--;) {
						let t = e[i];
						if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
							if (t[0] === "exit") continue;
							c && (e[c][1].type = "lineEndingBlank", a = !0), t[1].type = "lineEnding", c = i;
						} else if (!(t[1].type === "linePrefix" || t[1].type === "blockQuotePrefix" || t[1].type === "blockQuotePrefixWhitespace" || t[1].type === "blockQuoteMarker" || t[1].type === "listItemIndent")) break;
					}
					l && (!c || l < c) && (o._spread = !0), o.end = Object.assign({}, c ? e[c][1].start : t[1].end), e.splice(c || r, 0, [
						"exit",
						o,
						t[2]
					]), r++, n++;
				}
				if (t[1].type === "listItemPrefix") {
					let i = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, t[1].start),
						end: void 0
					};
					o = i, e.splice(r, 0, [
						"enter",
						i,
						t[2]
					]), r++, n++, l = void 0, u = !0;
				}
			}
		}
		return e[t][1]._spread = a, n;
	}
	function a(e, t) {
		return n;
		function n(n) {
			c.call(this, e(n), n), t && t.call(this, n);
		}
	}
	function o() {
		this.stack.push({
			type: "fragment",
			children: []
		});
	}
	function c(e, t, n) {
		this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
			start: point$1(t.start),
			end: void 0
		};
	}
	function l(e) {
		return t;
		function t(t) {
			e && e.call(this, t), u.call(this, t);
		}
	}
	function u(e, t) {
		let n = this.stack.pop(), r = this.tokenStack.pop();
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || defaultOnError).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + stringifyPosition({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = point$1(e.end);
	}
	function d() {
		return toString(this.stack.pop());
	}
	function f() {
		this.data.expectingFirstListItemValue = !0;
	}
	function p(e) {
		if (this.data.expectingFirstListItemValue) {
			let t = this.stack[this.stack.length - 2];
			t.start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0;
		}
	}
	function m() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.lang = e;
	}
	function g() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.meta = e;
	}
	function _() {
		this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
	}
	function v() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
	}
	function y() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/(\r?\n|\r)$/g, "");
	}
	function b(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = normalizeIdentifier(this.sliceSerialize(e)).toLowerCase();
	}
	function x() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function S() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function C(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth ||= this.sliceSerialize(e).length;
	}
	function w() {
		this.data.setextHeadingSlurpLineEnding = !0;
	}
	function T(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
	}
	function E() {
		this.data.setextHeadingSlurpLineEnding = void 0;
	}
	function D(e) {
		let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
		(!n || n.type !== "text") && (n = UE(), n.position = {
			start: point$1(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function O(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = point$1(e.end);
	}
	function k(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = point$1(e.end), this.data.atHardBreak = void 0;
			return;
		}
		!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (D.call(this, e), O.call(this, e));
	}
	function A() {
		this.data.atHardBreak = !0;
	}
	function j() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function M() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function N() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function P() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function F() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function I(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = decodeString(t), n.identifier = normalizeIdentifier(t).toLowerCase();
	}
	function L() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function R() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function z() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function B() {
		this.data.inReference = void 0;
	}
	function V() {
		this.data.referenceType = "collapsed";
	}
	function H(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = normalizeIdentifier(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function U(e) {
		this.data.characterReferenceType = e.type;
	}
	function W(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = decodeNumericCharacterReference(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = decodeNamedCharacterReference(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function G(e) {
		let t = this.stack.pop();
		t.position.end = point$1(e.end);
	}
	function K(e) {
		O.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function PE(e) {
		O.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function FE() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function q() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function IE() {
		return {
			type: "inlineCode",
			value: ""
		};
	}
	function LE() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		};
	}
	function RE() {
		return {
			type: "emphasis",
			children: []
		};
	}
	function J() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function Y() {
		return { type: "break" };
	}
	function X() {
		return {
			type: "html",
			value: ""
		};
	}
	function zE() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function Z() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function Q(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function BE(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function VE() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function HE() {
		return {
			type: "strong",
			children: []
		};
	}
	function UE() {
		return {
			type: "text",
			value: ""
		};
	}
	function WE() {
		return { type: "thematicBreak" };
	}
}
function point$1(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function configure(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? configure(e, r) : extension(e, r);
	}
}
function extension(e, t) {
	let n;
	for (n in t) if (own$5.call(t, n)) switch (n) {
		case "canContainEols": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "transforms": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "enter":
		case "exit": {
			let r = t[n];
			r && Object.assign(e[n], r);
			break;
		}
	}
}
function defaultOnError(e, t) {
	throw e ? Error("Cannot close `" + e.type + "` (" + stringifyPosition({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + stringifyPosition({
		start: t.start,
		end: t.end
	}) + ") is open") : Error("Cannot close document, a token (`" + t.type + "`, " + stringifyPosition({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
function remarkParse(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return fromMarkdown(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
function blockquote$1(e, t) {
	let n = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(t), !0)
	};
	return e.patch(t, n), e.applyData(t, n);
}
function hardBreak$1(e, t) {
	let n = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(t, n), [e.applyData(t, n), {
		type: "text",
		value: "\n"
	}];
}
function code$2(e, t) {
	let n = t.value ? t.value + "\n" : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
	i.length > 0 && (r.className = ["language-" + i[0]]);
	let a = {
		type: "element",
		tagName: "code",
		properties: r,
		children: [{
			type: "text",
			value: n
		}]
	};
	return t.meta && (a.data = { meta: t.meta }), e.patch(t, a), a = e.applyData(t, a), a = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [a]
	}, e.patch(t, a), a;
}
function strikethrough(e, t) {
	let n = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
function emphasis$1(e, t) {
	let n = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
function footnoteReference$1(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = normalizeUri(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, c = e.footnoteCounts.get(r);
	c === void 0 ? (c = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, c += 1, e.footnoteCounts.set(r, c);
	let l = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + n + "fn-" + i,
			id: n + "fnref-" + i + (c > 1 ? "-" + c : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(o)
		}]
	};
	e.patch(t, l);
	let u = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [l]
	};
	return e.patch(t, u), e.applyData(t, u);
}
function heading$1(e, t) {
	let n = {
		type: "element",
		tagName: "h" + t.depth,
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
function html$2(e, t) {
	if (e.options.allowDangerousHtml) {
		let n = {
			type: "raw",
			value: t.value
		};
		return e.patch(t, n), e.applyData(t, n);
	}
}
function revert(e, t) {
	let n = t.referenceType, r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), a = i[0];
	a && a.type === "text" ? a.value = "[" + a.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && o.type === "text" ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
function imageReference$1(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return revert(e, t);
	let i = {
		src: normalizeUri(r.url || ""),
		alt: t.alt
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "img",
		properties: i,
		children: []
	};
	return e.patch(t, a), e.applyData(t, a);
}
function image$1(e, t) {
	let n = { src: normalizeUri(t.url) };
	t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "img",
		properties: n,
		children: []
	};
	return e.patch(t, r), e.applyData(t, r);
}
function inlineCode$1(e, t) {
	let n = {
		type: "text",
		value: t.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(t, n);
	let r = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [n]
	};
	return e.patch(t, r), e.applyData(t, r);
}
function linkReference$1(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return revert(e, t);
	let i = { href: normalizeUri(r.url || "") };
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "a",
		properties: i,
		children: e.all(t)
	};
	return e.patch(t, a), e.applyData(t, a);
}
function link$1(e, t) {
	let n = { href: normalizeUri(t.url) };
	t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "a",
		properties: n,
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
function listItem$1(e, t, n) {
	let r = e.all(t), i = n ? listLoose(n) : listItemLoose(t), a = {}, o = [];
	if (typeof t.checked == "boolean") {
		let e = r[0], n;
		e && e.type === "element" && e.tagName === "p" ? n = e : (n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, r.unshift(n)), n.children.length > 0 && n.children.unshift({
			type: "text",
			value: " "
		}), n.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			},
			children: []
		}), a.className = ["task-list-item"];
	}
	let c = -1;
	for (; ++c < r.length;) {
		let e = r[c];
		(i || c !== 0 || e.type !== "element" || e.tagName !== "p") && o.push({
			type: "text",
			value: "\n"
		}), e.type === "element" && e.tagName === "p" && !i ? o.push(...e.children) : o.push(e);
	}
	let l = r[r.length - 1];
	l && (i || l.type !== "element" || l.tagName !== "p") && o.push({
		type: "text",
		value: "\n"
	});
	let u = {
		type: "element",
		tagName: "li",
		properties: a,
		children: o
	};
	return e.patch(t, u), e.applyData(t, u);
}
function listLoose(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = listItemLoose(n[r]);
	}
	return t;
}
function listItemLoose(e) {
	return e.spread ?? e.children.length > 1;
}
function list$1(e, t) {
	let n = {}, r = e.all(t), i = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
		let e = r[i];
		if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break;
		}
	}
	let a = {
		type: "element",
		tagName: t.ordered ? "ol" : "ul",
		properties: n,
		children: e.wrap(r, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
function paragraph$1(e, t) {
	let n = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
function root$3(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
function strong$1(e, t) {
	let n = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
function table(e, t) {
	let n = e.all(t), r = n.shift(), i = [];
	if (r) {
		let n = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([r], !0)
		};
		e.patch(t.children[0], n), i.push(n);
	}
	if (n.length > 0) {
		let r = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: e.wrap(n, !0)
		}, a = pointStart(t.children[1]), o = pointEnd(t.children[t.children.length - 1]);
		a && o && (r.position = {
			start: a,
			end: o
		}), i.push(r);
	}
	let a = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(i, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
function tableRow(e, t, n) {
	let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length, c = -1, l = [];
	for (; ++c < o;) {
		let n = t.children[c], r = {}, o = a ? a[c] : void 0;
		o && (r.align = o);
		let u = {
			type: "element",
			tagName: i,
			properties: r,
			children: []
		};
		n && (u.children = e.all(n), e.patch(n, u), u = e.applyData(n, u)), l.push(u);
	}
	let u = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(l, !0)
	};
	return e.patch(t, u), e.applyData(t, u);
}
function tableCell(e, t) {
	let n = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
var tab = 9, space = 32;
function trimLines(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(trimLine(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(trimLine(t.slice(i), i > 0, !1)), a.join("");
}
function trimLine(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === tab || t === space;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === tab || t === space;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
function text$4(e, t) {
	let n = {
		type: "text",
		value: trimLines(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
function thematicBreak$1(e, t) {
	let n = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(t, n), e.applyData(t, n);
}
const handlers = {
	blockquote: blockquote$1,
	break: hardBreak$1,
	code: code$2,
	delete: strikethrough,
	emphasis: emphasis$1,
	footnoteReference: footnoteReference$1,
	heading: heading$1,
	html: html$2,
	imageReference: imageReference$1,
	image: image$1,
	inlineCode: inlineCode$1,
	linkReference: linkReference$1,
	link: link$1,
	listItem: listItem$1,
	list: list$1,
	paragraph: paragraph$1,
	root: root$3,
	strong: strong$1,
	table,
	tableCell,
	tableRow,
	text: text$4,
	thematicBreak: thematicBreak$1,
	toml: ignore,
	yaml: ignore,
	definition: ignore,
	footnoteDefinition: ignore
};
function ignore() {}
var env = typeof self == "object" ? self : globalThis, deserializer = (e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [a, o] = t[i];
		switch (a) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(new env[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new env[a](o), i);
	};
	return r;
};
const deserialize = (e) => deserializer(/* @__PURE__ */ new Map(), e)(0);
var EMPTY = "", { toString: toString$1 } = {}, { keys } = Object, typeOf = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = toString$1.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, EMPTY];
		case "Object": return [2, EMPTY];
		case "Date": return [3, EMPTY];
		case "RegExp": return [4, EMPTY];
		case "Map": return [5, EMPTY];
		case "Set": return [6, EMPTY];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, shouldSkip = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), serializer = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, c] = typeOf(r);
		switch (o) {
			case 0: {
				let t = r;
				switch (c) {
					case "bigint":
						o = 8, t = r.toString();
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + c);
						t = null;
						break;
					case "undefined": return i([-1], r);
				}
				return i([o, t], r);
			}
			case 1: {
				if (c) {
					let e = r;
					return c === "DataView" ? e = new Uint8Array(r.buffer) : c === "ArrayBuffer" && (e = new Uint8Array(r)), i([c, [...e]], r);
				}
				let e = [], t = i([o, e], r);
				for (let t of r) e.push(a(t));
				return t;
			}
			case 2: {
				if (c) switch (c) {
					case "BigInt": return i([c, r.toString()], r);
					case "Boolean":
					case "Number":
					case "String": return i([c, r.valueOf()], r);
				}
				if (t && "toJSON" in r) return a(r.toJSON());
				let n = [], l = i([o, n], r);
				for (let t of keys(r)) (e || !shouldSkip(typeOf(r[t]))) && n.push([a(t), a(r[t])]);
				return l;
			}
			case 3: return i([o, r.toISOString()], r);
			case 4: {
				let { source: e, flags: t } = r;
				return i([o, {
					source: e,
					flags: t
				}], r);
			}
			case 5: {
				let t = [], n = i([o, t], r);
				for (let [n, i] of r) (e || !(shouldSkip(typeOf(n)) || shouldSkip(typeOf(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !shouldSkip(typeOf(n))) && t.push(a(n));
				return n;
			}
		}
		let { message: l } = r;
		return i([o, {
			name: c,
			message: l
		}], r);
	};
	return a;
};
const serialize$1 = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return serializer(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
};
var esm_default = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? deserialize(serialize$1(e, t)) : structuredClone(e) : (e, t) => deserialize(serialize$1(e, t));
function defaultFootnoteBackContent(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function defaultFootnoteBackLabel(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function footer(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || defaultFootnoteBackContent, r = e.options.footnoteBackLabel || defaultFootnoteBackLabel, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, c = [], l = -1;
	for (; ++l < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[l]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), u = normalizeUri(o.toLowerCase()), d = 0, f = [], p = e.footnoteCounts.get(o);
		for (; p !== void 0 && ++d <= p;) {
			f.length > 0 && f.push({
				type: "text",
				value: " "
			});
			let e = typeof n == "string" ? n : n(l, d);
			typeof e == "string" && (e = {
				type: "text",
				value: e
			}), f.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + t + "fnref-" + u + (d > 1 ? "-" + d : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof r == "string" ? r : r(l, d),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(e) ? e : [e]
			});
		}
		let m = a[a.length - 1];
		if (m && m.type === "element" && m.tagName === "p") {
			let e = m.children[m.children.length - 1];
			e && e.type === "text" ? e.value += " " : m.children.push({
				type: "text",
				value: " "
			}), m.children.push(...f);
		} else a.push(...f);
		let g = {
			type: "element",
			tagName: "li",
			properties: { id: t + "fn-" + u },
			children: e.wrap(a, !0)
		};
		e.patch(i, g), c.push(g);
	}
	if (c.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: a,
				properties: {
					...esm_default(o),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: i
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(c, !0)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
const convert = (function(e) {
	if (e == null) return ok$1;
	if (typeof e == "function") return castFactory(e);
	if (typeof e == "object") return Array.isArray(e) ? anyFactory(e) : propertiesFactory(e);
	if (typeof e == "string") return typeFactory(e);
	throw Error("Expected function, string, or object as test");
});
function anyFactory(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = convert(e[n]);
	return castFactory(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function propertiesFactory(e) {
	let t = e;
	return castFactory(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function typeFactory(e) {
	return castFactory(t);
	function t(t) {
		return t && t.type === e;
	}
}
function castFactory(e) {
	return t;
	function t(t, n, r) {
		return !!(looksLikeANode(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function ok$1() {
	return !0;
}
function looksLikeANode(e) {
	return typeof e == "object" && !!e && "type" in e;
}
function color$1(e) {
	return e;
}
var empty = [];
function visitParents(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = convert(i), o = r ? -1 : 1;
	c(e, void 0, [])();
	function c(e, i, l) {
		let u = e && typeof e == "object" ? e : {};
		if (typeof u.type == "string") {
			let t = typeof u.tagName == "string" ? u.tagName : typeof u.name == "string" ? u.name : void 0;
			Object.defineProperty(d, "name", { value: "node (" + color$1(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return d;
		function d() {
			let u = empty, d, f, p;
			if ((!t || a(e, i, l[l.length - 1] || void 0)) && (u = toResult(n(e, l)), u[0] === !1)) return u;
			if ("children" in e && e.children) {
				let t = e;
				if (t.children && u[0] !== "skip") for (f = (r ? t.children.length : -1) + o, p = l.concat(t); f > -1 && f < t.children.length;) {
					let e = t.children[f];
					if (d = c(e, f, p)(), d[0] === !1) return d;
					f = typeof d[1] == "number" ? d[1] : f + o;
				}
			}
			return u;
		}
	}
}
function toResult(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? empty : [e];
}
function visit(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), visitParents(e, a, c, i);
	function c(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
var own$4 = {}.hasOwnProperty, emptyOptions$2 = {};
function createState$1(e, t) {
	let n = t || emptyOptions$2, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: c,
		applyData,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...handlers,
			...n.handlers
		},
		one: o,
		options: n,
		patch: patch$2,
		wrap: wrap$1
	};
	return visit(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (own$4.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = esm_default(n);
				return r.children = a.all(e), r;
			}
			return esm_default(e);
		}
		return (a.options.unknownHandler || defaultUnknownHandler)(a, e, t);
	}
	function c(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = trimMarkdownSpaceStart(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = trimMarkdownSpaceStart(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function patch$2(e, t) {
	e.position && (t.position = position$1(e));
}
function applyData(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, esm_default(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function defaultUnknownHandler(e, t) {
	let n = t.data || {}, r = "value" in t && !(own$4.call(n, "hProperties") || own$4.call(n, "hChildren")) ? {
		type: "text",
		value: t.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
function wrap$1(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function trimMarkdownSpaceStart(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
function toHast(e, t) {
	let n = createState$1(e, t), r = n.one(e, void 0), i = footer(n), a = Array.isArray(r) ? {
		type: "root",
		children: r
	} : r || {
		type: "root",
		children: []
	};
	return i && ("children" in a, a.children.push({
		type: "text",
		value: "\n"
	}, i)), a;
}
function remarkRehype(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = toHast(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return toHast(n, {
			file: r,
			...e || t
		});
	};
}
function bail(e) {
	if (e) throw e;
}
var require_extend = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = function(e) {
		return typeof Array.isArray == "function" ? Array.isArray(e) : r.call(e) === "[object Array]";
	}, c = function(e) {
		if (!e || r.call(e) !== "[object Object]") return !1;
		var t = n.call(e, "constructor"), i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
		if (e.constructor && !t && !i) return !1;
		for (var a in e);
		return a === void 0 || n.call(e, a);
	}, l = function(e, t) {
		i && t.name === "__proto__" ? i(e, t.name, {
			enumerable: !0,
			configurable: !0,
			value: t.newValue,
			writable: !0
		}) : e[t.name] = t.newValue;
	}, u = function(e, t) {
		if (t === "__proto__") if (n.call(e, t)) {
			if (a) return a(e, t).value;
		} else return;
		return e[t];
	};
	t.exports = function e() {
		var t, n, r, i, a, d, f = arguments[0], p = 1, m = arguments.length, g = !1;
		for (typeof f == "boolean" && (g = f, f = arguments[1] || {}, p = 2), (f == null || typeof f != "object" && typeof f != "function") && (f = {}); p < m; ++p) if (t = arguments[p], t != null) for (n in t) r = u(f, n), i = u(t, n), f !== i && (g && i && (c(i) || (a = o(i))) ? (a ? (a = !1, d = r && o(r) ? r : []) : d = r && c(r) ? r : {}, l(f, {
			name: n,
			newValue: e(g, d, i)
		})) : i !== void 0 && l(f, {
			name: n,
			newValue: i
		}));
		return f;
	};
}));
function isPlainObject(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function trough() {
	let e = [], t = {
		run: n,
		use: r
	};
	return t;
	function n(...t) {
		let n = -1, r = t.pop();
		if (typeof r != "function") throw TypeError("Expected function as last argument, not " + r);
		i(null, ...t);
		function i(a, ...o) {
			let c = e[++n], l = -1;
			if (a) {
				r(a);
				return;
			}
			for (; ++l < t.length;) (o[l] === null || o[l] === void 0) && (o[l] = t[l]);
			t = o, c ? wrap(c, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function wrap(e, t) {
	let n;
	return r;
	function r(...t) {
		let r = e.length > t.length, o;
		r && t.push(i);
		try {
			o = e.apply(this, t);
		} catch (e) {
			let t = e;
			if (r && n) throw t;
			return i(t);
		}
		r || (o && o.then && typeof o.then == "function" ? o.then(a, i) : o instanceof Error ? i(o) : a(o));
	}
	function i(e, ...r) {
		n || (n = !0, t(e, ...r));
	}
	function a(e) {
		i(null, e);
	}
}
const minpath = {
	basename,
	dirname,
	extname,
	join,
	sep: "/"
};
function basename(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	assertPath$1(e);
	let n = 0, r = -1, i = e.length, a;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;) if (e.codePointAt(i) === 47) {
			if (a) {
				n = i + 1;
				break;
			}
		} else r < 0 && (a = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r);
	}
	if (t === e) return "";
	let o = -1, c = t.length - 1;
	for (; i--;) if (e.codePointAt(i) === 47) {
		if (a) {
			n = i + 1;
			break;
		}
	} else o < 0 && (a = !0, o = i + 1), c > -1 && (e.codePointAt(i) === t.codePointAt(c--) ? c < 0 && (r = i) : (c = -1, r = o));
	return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function dirname(e) {
	if (assertPath$1(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function extname(e) {
	assertPath$1(e);
	let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
	for (; t--;) {
		let c = e.codePointAt(t);
		if (c === 47) {
			if (o) {
				r = t + 1;
				break;
			}
			continue;
		}
		n < 0 && (o = !0, n = t + 1), c === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
	}
	return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function join(...e) {
	let t = -1, n;
	for (; ++t < e.length;) assertPath$1(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : normalize$1(n);
}
function normalize$1(e) {
	assertPath$1(e);
	let t = e.codePointAt(0) === 47, n = normalizeString(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function normalizeString(e, t) {
	let n = "", r = 0, i = -1, a = 0, o = -1, c, l;
	for (; ++o <= e.length;) {
		if (o < e.length) c = e.codePointAt(o);
		else if (c === 47) break;
		else c = 47;
		if (c === 47) {
			if (!(i === o - 1 || a === 1)) if (i !== o - 1 && a === 2) {
				if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
					if (n.length > 2) {
						if (l = n.lastIndexOf("/"), l !== n.length - 1) {
							l < 0 ? (n = "", r = 0) : (n = n.slice(0, l), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
							continue;
						}
					} else if (n.length > 0) {
						n = "", r = 0, i = o, a = 0;
						continue;
					}
				}
				t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
			} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
			i = o, a = 0;
		} else c === 46 && a > -1 ? a++ : a = -1;
	}
	return n;
}
function assertPath$1(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
const minproc = { cwd };
function cwd() {
	return "/";
}
function isUrl(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
function urlToPath(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!isUrl(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return getPathFromURLPosix(e);
}
function getPathFromURLPosix(e) {
	if (e.hostname !== "") {
		let e = /* @__PURE__ */ TypeError("File URL host must be \"localhost\" or empty on darwin");
		throw e.code = "ERR_INVALID_FILE_URL_HOST", e;
	}
	let t = e.pathname, n = -1;
	for (; ++n < t.length;) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
		let e = t.codePointAt(n + 2);
		if (e === 70 || e === 102) {
			let e = /* @__PURE__ */ TypeError("File URL path must not include encoded / characters");
			throw e.code = "ERR_INVALID_FILE_URL_PATH", e;
		}
	}
	return decodeURIComponent(t);
}
var order = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], VFile = class {
	constructor(e) {
		let t;
		t = e ? isUrl(e) ? { path: e } : typeof e == "string" || isUint8Array$1(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : minproc.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < order.length;) {
			let e = order[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) order.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? minpath.basename(this.path) : void 0;
	}
	set basename(e) {
		assertNonEmpty(e, "basename"), assertPart(e, "basename"), this.path = minpath.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? minpath.dirname(this.path) : void 0;
	}
	set dirname(e) {
		assertPath(this.basename, "dirname"), this.path = minpath.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? minpath.extname(this.path) : void 0;
	}
	set extname(e) {
		if (assertPart(e, "extname"), assertPath(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = minpath.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		isUrl(e) && (e = urlToPath(e)), assertNonEmpty(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? minpath.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		assertNonEmpty(e, "stem"), assertPart(e, "stem"), this.path = minpath.join(this.dirname || "", e + (this.extname || ""));
	}
	fail(e, t, n) {
		let r = this.message(e, t, n);
		throw r.fatal = !0, r;
	}
	info(e, t, n) {
		let r = this.message(e, t, n);
		return r.fatal = void 0, r;
	}
	message(e, t, n) {
		let r = new VFileMessage(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function assertPart(e, t) {
	if (e && e.includes(minpath.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + minpath.sep + "`");
}
function assertNonEmpty(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function assertPath(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function isUint8Array$1(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const CallableInstance = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
});
var import_extend = /* @__PURE__ */ __toESM(require_extend(), 1), own$3 = {}.hasOwnProperty;
const unified = new class e extends CallableInstance {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = trough();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, import_extend.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (assertUnfrozen("data", this.frozen), this.namespace[e] = t, this) : own$3.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (assertUnfrozen("data", this.frozen), this.namespace = e, this) : this.namespace;
	}
	freeze() {
		if (this.frozen) return this;
		let e = this;
		for (; ++this.freezeIndex < this.attachers.length;) {
			let [t, ...n] = this.attachers[this.freezeIndex];
			if (n[0] === !1) continue;
			n[0] === !0 && (n[0] = void 0);
			let r = t.call(e, ...n);
			typeof r == "function" && this.transformers.use(r);
		}
		return this.frozen = !0, this.freezeIndex = Infinity, this;
	}
	parse(e) {
		this.freeze();
		let t = vfile(e), n = this.parser || this.Parser;
		return assertParser("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), assertParser("process", this.parser || this.Parser), assertCompiler("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = vfile(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return c(e);
				let i = t, a = n.stringify(i, r);
				looksLikeAValue(a) ? r.value = a : r.result = a, c(e, r);
			});
			function c(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), assertParser("processSync", this.parser || this.Parser), assertCompiler("processSync", this.compiler || this.Compiler), this.process(e, r), assertDone("processSync", "process", t), n;
		function r(e, r) {
			t = !0, bail(e), n = r;
		}
	}
	run(e, t, n) {
		assertNode(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = vfile(t);
			r.run(e, o, c);
			function c(t, r, o) {
				let c = r || e;
				t ? a(t) : i ? i(c) : n(void 0, c, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), assertDone("runSync", "run", n), r;
		function i(e, t) {
			bail(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = vfile(t), r = this.compiler || this.Compiler;
		return assertCompiler("stringify", r), assertNode(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (assertUnfrozen("use", this.frozen), e != null) if (typeof e == "function") c(e, t);
		else if (typeof e == "object") Array.isArray(e) ? o(e) : a(e);
		else throw TypeError("Expected usable value, not `" + e + "`");
		return this;
		function i(e) {
			if (typeof e == "function") c(e, []);
			else if (typeof e == "object") if (Array.isArray(e)) {
				let [t, ...n] = e;
				c(t, n);
			} else a(e);
			else throw TypeError("Expected usable value, not `" + e + "`");
		}
		function a(e) {
			if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			o(e.plugins), e.settings && (r.settings = (0, import_extend.default)(!0, r.settings, e.settings));
		}
		function o(e) {
			let t = -1;
			if (e != null) if (Array.isArray(e)) for (; ++t < e.length;) {
				let n = e[t];
				i(n);
			}
			else throw TypeError("Expected a list of plugins, not `" + e + "`");
		}
		function c(e, t) {
			let r = -1, i = -1;
			for (; ++r < n.length;) if (n[r][0] === e) {
				i = r;
				break;
			}
			if (i === -1) n.push([e, ...t]);
			else if (t.length > 0) {
				let [r, ...a] = t, o = n[i][1];
				isPlainObject(o) && isPlainObject(r) && (r = (0, import_extend.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function assertParser(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function assertCompiler(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function assertUnfrozen(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function assertNode(e) {
	if (!isPlainObject(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function assertDone(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function vfile(e) {
	return looksLikeAVFile(e) ? e : new VFile(e);
}
function looksLikeAVFile(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function looksLikeAValue(e) {
	return typeof e == "string" || isUint8Array(e);
}
function isUint8Array(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
var emptyPlugins = [], emptyRemarkRehypeOptions = { allowDangerousHtml: !0 }, safeProtocol = /^(https?|ircs?|mailto|xmpp)$/i, deprecations = [
	{
		from: "astPlugins",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowDangerousHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowNode",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowElement"
	},
	{
		from: "allowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowedElements"
	},
	{
		from: "className",
		id: "remove-classname"
	},
	{
		from: "disallowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "disallowedElements"
	},
	{
		from: "escapeHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "includeElementIndex",
		id: "#remove-includeelementindex"
	},
	{
		from: "includeNodeIndex",
		id: "change-includenodeindex-to-includeelementindex"
	},
	{
		from: "linkTarget",
		id: "remove-linktarget"
	},
	{
		from: "plugins",
		id: "change-plugins-to-remarkplugins",
		to: "remarkPlugins"
	},
	{
		from: "rawSourcePos",
		id: "#remove-rawsourcepos"
	},
	{
		from: "renderers",
		id: "change-renderers-to-components",
		to: "components"
	},
	{
		from: "source",
		id: "change-source-to-children",
		to: "children"
	},
	{
		from: "sourcePos",
		id: "#remove-sourcepos"
	},
	{
		from: "transformImageUri",
		id: "#add-urltransform",
		to: "urlTransform"
	},
	{
		from: "transformLinkUri",
		id: "#add-urltransform",
		to: "urlTransform"
	}
];
function Markdown(e) {
	let t = createProcessor(e), n = createFile(e);
	return post(t.runSync(t.parse(n), n), e);
}
function createProcessor(e) {
	let t = e.rehypePlugins || emptyPlugins, n = e.remarkPlugins || emptyPlugins, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...emptyRemarkRehypeOptions
	} : emptyRemarkRehypeOptions;
	return unified().use(remarkParse).use(n).use(remarkRehype, r).use(t);
}
function createFile(e) {
	let t = e.children || "", n = new VFile();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function post(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, c = t.unwrapDisallowed, l = t.urlTransform || defaultUrlTransform;
	for (let e of deprecations) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return visit(e, u), toJsxRuntime(e, {
		Fragment: Fragment$1,
		components: i,
		ignoreInvalidStyle: !0,
		jsx,
		jsxs,
		passKeys: !0,
		passNode: !0
	});
	function u(e, t, i) {
		if (e.type === "raw" && i && typeof t == "number") return o ? i.children.splice(t, 1) : i.children[t] = {
			type: "text",
			value: e.value
		}, t;
		if (e.type === "element") {
			let t;
			for (t in urlAttributes) if (Object.hasOwn(urlAttributes, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = urlAttributes[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = l(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return c && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function defaultUrlTransform(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || safeProtocol.test(e.slice(0, t)) ? e : "";
}
function ccount(e, t) {
	let n = String(e);
	if (typeof t != "string") throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
function escapeStringRegexp(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function findAndReplace(e, t, n) {
	let r = convert((n || {}).ignore || []), i = toPairs(t), a = -1;
	for (; ++a < i.length;) visitParents(e, "text", o);
	function o(e, t) {
		let n = -1, i;
		for (; ++n < t.length;) {
			let e = t[n], a = i ? i.children : void 0;
			if (r(e, a ? a.indexOf(e) : void 0, i)) return;
			i = e;
		}
		if (i) return c(e, t);
	}
	function c(e, t) {
		let n = t[t.length - 1], r = i[a][0], o = i[a][1], c = 0, l = n.children.indexOf(e), u = !1, d = [];
		r.lastIndex = 0;
		let f = r.exec(e.value);
		for (; f;) {
			let n = f.index, i = {
				index: f.index,
				input: f.input,
				stack: [...t, e]
			}, a = o(...f, i);
			if (typeof a == "string" && (a = a.length > 0 ? {
				type: "text",
				value: a
			} : void 0), a === !1 ? r.lastIndex = n + 1 : (c !== n && d.push({
				type: "text",
				value: e.value.slice(c, n)
			}), Array.isArray(a) ? d.push(...a) : a && d.push(a), c = n + f[0].length, u = !0), !r.global) break;
			f = r.exec(e.value);
		}
		return u ? (c < e.value.length && d.push({
			type: "text",
			value: e.value.slice(c)
		}), n.children.splice(l, 1, ...d)) : d = [e], l + d.length;
	}
}
function toPairs(e) {
	let t = [];
	if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
	let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
	for (; ++r < n.length;) {
		let e = n[r];
		t.push([toExpression(e[0]), toFunction(e[1])]);
	}
	return t;
}
function toExpression(e) {
	return typeof e == "string" ? new RegExp(escapeStringRegexp(e), "g") : e;
}
function toFunction(e) {
	return typeof e == "function" ? e : function() {
		return e;
	};
}
var inConstruct = "phrasing", notInConstruct = [
	"autolink",
	"link",
	"image",
	"label"
];
function gfmAutolinkLiteralFromMarkdown() {
	return {
		transforms: [transformGfmAutolinkLiterals],
		enter: {
			literalAutolink: enterLiteralAutolink,
			literalAutolinkEmail: enterLiteralAutolinkValue,
			literalAutolinkHttp: enterLiteralAutolinkValue,
			literalAutolinkWww: enterLiteralAutolinkValue
		},
		exit: {
			literalAutolink: exitLiteralAutolink,
			literalAutolinkEmail: exitLiteralAutolinkEmail,
			literalAutolinkHttp: exitLiteralAutolinkHttp,
			literalAutolinkWww: exitLiteralAutolinkWww
		}
	};
}
function gfmAutolinkLiteralToMarkdown() {
	return { unsafe: [
		{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct,
			notInConstruct
		},
		{
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct,
			notInConstruct
		},
		{
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct,
			notInConstruct
		}
	] };
}
function enterLiteralAutolink(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function enterLiteralAutolinkValue(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function exitLiteralAutolinkHttp(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function exitLiteralAutolinkWww(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function exitLiteralAutolinkEmail(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function exitLiteralAutolink(e) {
	this.exit(e);
}
function transformGfmAutolinkLiterals(e) {
	findAndReplace(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl], [RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), findEmail]], { ignore: ["link", "linkReference"] });
}
function findUrl(e, t, n, r, i) {
	let a = "";
	if (!previous(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !isCorrectDomain(n))) return !1;
	let o = splitUrl(n + r);
	if (!o[0]) return !1;
	let c = {
		type: "link",
		title: null,
		url: a + t + o[0],
		children: [{
			type: "text",
			value: t + o[0]
		}]
	};
	return o[1] ? [c, {
		type: "text",
		value: o[1]
	}] : c;
}
function findEmail(e, t, n, r) {
	return !previous(r, !0) || /[-\d_]$/.test(n) ? !1 : {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function isCorrectDomain(e) {
	let t = e.split(".");
	return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function splitUrl(e) {
	let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
	if (!t) return [e, void 0];
	e = e.slice(0, t.index);
	let n = t[0], r = n.indexOf(")"), i = ccount(e, "("), a = ccount(e, ")");
	for (; r !== -1 && i > a;) e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
	return [e, n];
}
function previous(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (e.index === 0 || unicodeWhitespace(n) || unicodePunctuation(n)) && (!t || n !== 47);
}
footnoteReference.peek = footnoteReferencePeek;
function enterFootnoteCallString() {
	this.buffer();
}
function enterFootnoteCall(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function enterFootnoteDefinitionLabelString() {
	this.buffer();
}
function enterFootnoteDefinition(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function exitFootnoteCallString(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = normalizeIdentifier(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function exitFootnoteCall(e) {
	this.exit(e);
}
function exitFootnoteDefinitionLabelString(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = normalizeIdentifier(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function exitFootnoteDefinition(e) {
	this.exit(e);
}
function footnoteReferencePeek() {
	return "[";
}
function footnoteReference(e, t, n, r) {
	let i = n.createTracker(r), a = i.move("[^"), o = n.enter("footnoteReference"), c = n.enter("reference");
	return a += i.move(n.safe(n.associationId(e), {
		after: "]",
		before: a
	})), c(), o(), a += i.move("]"), a;
}
function gfmFootnoteFromMarkdown() {
	return {
		enter: {
			gfmFootnoteCallString: enterFootnoteCallString,
			gfmFootnoteCall: enterFootnoteCall,
			gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
			gfmFootnoteDefinition: enterFootnoteDefinition
		},
		exit: {
			gfmFootnoteCallString: exitFootnoteCallString,
			gfmFootnoteCall: exitFootnoteCall,
			gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
			gfmFootnoteDefinition: exitFootnoteDefinition
		}
	};
}
function gfmFootnoteToMarkdown(e) {
	let t = !1;
	return e && e.firstLineBlank && (t = !0), {
		handlers: {
			footnoteDefinition: n,
			footnoteReference
		},
		unsafe: [{
			character: "[",
			inConstruct: [
				"label",
				"phrasing",
				"reference"
			]
		}]
	};
	function n(e, n, r, i) {
		let a = r.createTracker(i), o = a.move("[^"), c = r.enter("footnoteDefinition"), l = r.enter("label");
		return o += a.move(r.safe(r.associationId(e), {
			before: o,
			after: "]"
		})), l(), o += a.move("]:"), e.children && e.children.length > 0 && (a.shift(4), o += a.move((t ? "\n" : " ") + r.indentLines(r.containerFlow(e, a.current()), t ? mapAll : mapExceptFirst))), c(), o;
	}
}
function mapExceptFirst(e, t, n) {
	return t === 0 ? e : mapAll(e, t, n);
}
function mapAll(e, t, n) {
	return (n ? "" : "    ") + e;
}
var constructsWithoutStrikethrough = [
	"autolink",
	"destinationLiteral",
	"destinationRaw",
	"reference",
	"titleQuote",
	"titleApostrophe"
];
handleDelete.peek = peekDelete;
function gfmStrikethroughFromMarkdown() {
	return {
		canContainEols: ["delete"],
		enter: { strikethrough: enterStrikethrough },
		exit: { strikethrough: exitStrikethrough }
	};
}
function gfmStrikethroughToMarkdown() {
	return {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing",
			notInConstruct: constructsWithoutStrikethrough
		}],
		handlers: { delete: handleDelete }
	};
}
function enterStrikethrough(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function exitStrikethrough(e) {
	this.exit(e);
}
function handleDelete(e, t, n, r) {
	let i = n.createTracker(r), a = n.enter("strikethrough"), o = i.move("~~");
	return o += n.containerPhrasing(e, {
		...i.current(),
		before: o,
		after: "~"
	}), o += i.move("~~"), a(), o;
}
function peekDelete() {
	return "~";
}
function defaultStringLength(e) {
	return e.length;
}
function markdownTable(e, t) {
	let n = t || {}, r = (n.align || []).concat(), i = n.stringLength || defaultStringLength, a = [], o = [], c = [], l = [], u = 0, d = -1;
	for (; ++d < e.length;) {
		let t = [], r = [], a = -1;
		for (e[d].length > u && (u = e[d].length); ++a < e[d].length;) {
			let o = serialize(e[d][a]);
			if (n.alignDelimiters !== !1) {
				let e = i(o);
				r[a] = e, (l[a] === void 0 || e > l[a]) && (l[a] = e);
			}
			t.push(o);
		}
		o[d] = t, c[d] = r;
	}
	let f = -1;
	if (typeof r == "object" && "length" in r) for (; ++f < u;) a[f] = toAlignment(r[f]);
	else {
		let e = toAlignment(r);
		for (; ++f < u;) a[f] = e;
	}
	f = -1;
	let p = [], m = [];
	for (; ++f < u;) {
		let e = a[f], t = "", r = "";
		e === 99 ? (t = ":", r = ":") : e === 108 ? t = ":" : e === 114 && (r = ":");
		let i = n.alignDelimiters === !1 ? 1 : Math.max(1, l[f] - t.length - r.length), o = t + "-".repeat(i) + r;
		n.alignDelimiters !== !1 && (i = t.length + i + r.length, i > l[f] && (l[f] = i), m[f] = i), p[f] = o;
	}
	o.splice(1, 0, p), c.splice(1, 0, m), d = -1;
	let g = [];
	for (; ++d < o.length;) {
		let e = o[d], t = c[d];
		f = -1;
		let r = [];
		for (; ++f < u;) {
			let i = e[f] || "", o = "", c = "";
			if (n.alignDelimiters !== !1) {
				let e = l[f] - (t[f] || 0), n = a[f];
				n === 114 ? o = " ".repeat(e) : n === 99 ? e % 2 ? (o = " ".repeat(e / 2 + .5), c = " ".repeat(e / 2 - .5)) : (o = " ".repeat(e / 2), c = o) : c = " ".repeat(e);
			}
			n.delimiterStart !== !1 && !f && r.push("|"), n.padding !== !1 && !(n.alignDelimiters === !1 && i === "") && (n.delimiterStart !== !1 || f) && r.push(" "), n.alignDelimiters !== !1 && r.push(o), r.push(i), n.alignDelimiters !== !1 && r.push(c), n.padding !== !1 && r.push(" "), (n.delimiterEnd !== !1 || f !== u - 1) && r.push("|");
		}
		g.push(n.delimiterEnd === !1 ? r.join("").replace(/ +$/, "") : r.join(""));
	}
	return g.join("\n");
}
function serialize(e) {
	return e == null ? "" : String(e);
}
function toAlignment(e) {
	let t = typeof e == "string" ? e.codePointAt(0) : 0;
	return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
var own$2 = {}.hasOwnProperty;
function zwitch(e, t) {
	let n = t || {};
	function r(t, ...n) {
		let i = r.invalid, a = r.handlers;
		if (t && own$2.call(t, e)) {
			let n = String(t[e]);
			i = own$2.call(a, n) ? a[n] : r.unknown;
		}
		if (i) return i.call(this, t, ...n);
	}
	return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
function blockquote(e, t, n, r) {
	let i = n.enter("blockquote"), a = n.createTracker(r);
	a.move("> "), a.shift(2);
	let o = n.indentLines(n.containerFlow(e, a.current()), map$1);
	return i(), o;
}
function map$1(e, t, n) {
	return ">" + (n ? "" : " ") + e;
}
function patternInScope(e, t) {
	return listInScope(e, t.inConstruct, !0) && !listInScope(e, t.notInConstruct, !1);
}
function listInScope(e, t, n) {
	if (typeof t == "string" && (t = [t]), !t || t.length === 0) return n;
	let r = -1;
	for (; ++r < t.length;) if (e.includes(t[r])) return !0;
	return !1;
}
function hardBreak(e, t, n, r) {
	let i = -1;
	for (; ++i < n.unsafe.length;) if (n.unsafe[i].character === "\n" && patternInScope(n.stack, n.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
	return "\\\n";
}
function longestStreak(e, t) {
	let n = String(e), r = n.indexOf(t), i = r, a = 0, o = 0;
	if (typeof t != "string") throw TypeError("Expected substring");
	for (; r !== -1;) r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
	return o;
}
function formatCodeAsIndented(e, t) {
	return !!(t.options.fences === !1 && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function checkFence(e) {
	let t = e.options.fence || "`";
	if (t !== "`" && t !== "~") throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
	return t;
}
function code$1(e, t, n, r) {
	let i = checkFence(n), a = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
	if (formatCodeAsIndented(e, n)) {
		let e = n.enter("codeIndented"), t = n.indentLines(a, map);
		return e(), t;
	}
	let c = n.createTracker(r), l = i.repeat(Math.max(longestStreak(a, i) + 1, 3)), u = n.enter("codeFenced"), d = c.move(l);
	if (e.lang) {
		let t = n.enter(`codeFencedLang${o}`);
		d += c.move(n.safe(e.lang, {
			before: d,
			after: " ",
			encode: ["`"],
			...c.current()
		})), t();
	}
	if (e.lang && e.meta) {
		let t = n.enter(`codeFencedMeta${o}`);
		d += c.move(" "), d += c.move(n.safe(e.meta, {
			before: d,
			after: "\n",
			encode: ["`"],
			...c.current()
		})), t();
	}
	return d += c.move("\n"), a && (d += c.move(a + "\n")), d += c.move(l), u(), d;
}
function map(e, t, n) {
	return (n ? "" : "    ") + e;
}
function checkQuote(e) {
	let t = e.options.quote || "\"";
	if (t !== "\"" && t !== "'") throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
	return t;
}
function definition(e, t, n, r) {
	let i = checkQuote(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("definition"), c = n.enter("label"), l = n.createTracker(r), u = l.move("[");
	return u += l.move(n.safe(n.associationId(e), {
		before: u,
		after: "]",
		...l.current()
	})), u += l.move("]: "), c(), !e.url || /[\0- \u007F]/.test(e.url) ? (c = n.enter("destinationLiteral"), u += l.move("<"), u += l.move(n.safe(e.url, {
		before: u,
		after: ">",
		...l.current()
	})), u += l.move(">")) : (c = n.enter("destinationRaw"), u += l.move(n.safe(e.url, {
		before: u,
		after: e.title ? " " : "\n",
		...l.current()
	}))), c(), e.title && (c = n.enter(`title${a}`), u += l.move(" " + i), u += l.move(n.safe(e.title, {
		before: u,
		after: i,
		...l.current()
	})), u += l.move(i), c()), o(), u;
}
function checkEmphasis(e) {
	let t = e.options.emphasis || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
	return t;
}
function encodeCharacterReference(e) {
	return "&#x" + e.toString(16).toUpperCase() + ";";
}
function encodeInfo(e, t, n) {
	let r = classifyCharacter(e), i = classifyCharacter(t);
	return r === void 0 ? i === void 0 ? n === "_" ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !0
	} : r === 1 ? i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !1
	} : {
		inside: !1,
		outside: !1
	};
}
emphasis.peek = emphasisPeek;
function emphasis(e, t, n, r) {
	let i = checkEmphasis(n), a = n.enter("emphasis"), o = n.createTracker(r), c = o.move(i), l = o.move(n.containerPhrasing(e, {
		after: i,
		before: c,
		...o.current()
	})), u = l.charCodeAt(0), d = encodeInfo(r.before.charCodeAt(r.before.length - 1), u, i);
	d.inside && (l = encodeCharacterReference(u) + l.slice(1));
	let f = l.charCodeAt(l.length - 1), p = encodeInfo(r.after.charCodeAt(0), f, i);
	p.inside && (l = l.slice(0, -1) + encodeCharacterReference(f));
	let m = o.move(i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: p.outside,
		before: d.outside
	}, c + l + m;
}
function emphasisPeek(e, t, n) {
	return n.options.emphasis || "*";
}
function formatHeadingAsSetext(e, t) {
	let n = !1;
	return visit(e, function(e) {
		if ("value" in e && /\r?\n|\r/.test(e.value) || e.type === "break") return n = !0, !1;
	}), !!((!e.depth || e.depth < 3) && toString(e) && (t.options.setext || n));
}
function heading(e, t, n, r) {
	let i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
	if (formatHeadingAsSetext(e, n)) {
		let t = n.enter("headingSetext"), r = n.enter("phrasing"), o = n.containerPhrasing(e, {
			...a.current(),
			before: "\n",
			after: "\n"
		});
		return r(), t(), o + "\n" + (i === 1 ? "=" : "-").repeat(o.length - (Math.max(o.lastIndexOf("\r"), o.lastIndexOf("\n")) + 1));
	}
	let o = "#".repeat(i), c = n.enter("headingAtx"), l = n.enter("phrasing");
	a.move(o + " ");
	let u = n.containerPhrasing(e, {
		before: "# ",
		after: "\n",
		...a.current()
	});
	return /^[\t ]/.test(u) && (u = encodeCharacterReference(u.charCodeAt(0)) + u.slice(1)), u = u ? o + " " + u : o, n.options.closeAtx && (u += " " + o), l(), c(), u;
}
html$1.peek = htmlPeek;
function html$1(e) {
	return e.value || "";
}
function htmlPeek() {
	return "<";
}
image.peek = imagePeek;
function image(e, t, n, r) {
	let i = checkQuote(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("image"), c = n.enter("label"), l = n.createTracker(r), u = l.move("![");
	return u += l.move(n.safe(e.alt, {
		before: u,
		after: "]",
		...l.current()
	})), u += l.move("]("), c(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (c = n.enter("destinationLiteral"), u += l.move("<"), u += l.move(n.safe(e.url, {
		before: u,
		after: ">",
		...l.current()
	})), u += l.move(">")) : (c = n.enter("destinationRaw"), u += l.move(n.safe(e.url, {
		before: u,
		after: e.title ? " " : ")",
		...l.current()
	}))), c(), e.title && (c = n.enter(`title${a}`), u += l.move(" " + i), u += l.move(n.safe(e.title, {
		before: u,
		after: i,
		...l.current()
	})), u += l.move(i), c()), u += l.move(")"), o(), u;
}
function imagePeek() {
	return "!";
}
imageReference.peek = imageReferencePeek;
function imageReference(e, t, n, r) {
	let i = e.referenceType, a = n.enter("imageReference"), o = n.enter("label"), c = n.createTracker(r), l = c.move("!["), u = n.safe(e.alt, {
		before: l,
		after: "]",
		...c.current()
	});
	l += c.move(u + "]["), o();
	let d = n.stack;
	n.stack = [], o = n.enter("reference");
	let f = n.safe(n.associationId(e), {
		before: l,
		after: "]",
		...c.current()
	});
	return o(), n.stack = d, a(), i === "full" || !u || u !== f ? l += c.move(f + "]") : i === "shortcut" ? l = l.slice(0, -1) : l += c.move("]"), l;
}
function imageReferencePeek() {
	return "!";
}
inlineCode.peek = inlineCodePeek;
function inlineCode(e, t, n) {
	let r = e.value || "", i = "`", a = -1;
	for (; (/* @__PURE__ */ RegExp("(^|[^`])" + i + "([^`]|$)")).test(r);) i += "`";
	for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length;) {
		let e = n.unsafe[a], t = n.compilePattern(e), i;
		if (e.atBreak) for (; i = t.exec(r);) {
			let e = i.index;
			r.charCodeAt(e) === 10 && r.charCodeAt(e - 1) === 13 && e--, r = r.slice(0, e) + " " + r.slice(i.index + 1);
		}
	}
	return i + r + i;
}
function inlineCodePeek() {
	return "`";
}
function formatLinkAsAutolink(e, t) {
	let n = toString(e);
	return !!(!t.options.resourceLink && e.url && !e.title && e.children && e.children.length === 1 && e.children[0].type === "text" && (n === e.url || "mailto:" + n === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url));
}
link.peek = linkPeek;
function link(e, t, n, r) {
	let i = checkQuote(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.createTracker(r), c, l;
	if (formatLinkAsAutolink(e, n)) {
		let t = n.stack;
		n.stack = [], c = n.enter("autolink");
		let r = o.move("<");
		return r += o.move(n.containerPhrasing(e, {
			before: r,
			after: ">",
			...o.current()
		})), r += o.move(">"), c(), n.stack = t, r;
	}
	c = n.enter("link"), l = n.enter("label");
	let u = o.move("[");
	return u += o.move(n.containerPhrasing(e, {
		before: u,
		after: "](",
		...o.current()
	})), u += o.move("]("), l(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), u += o.move("<"), u += o.move(n.safe(e.url, {
		before: u,
		after: ">",
		...o.current()
	})), u += o.move(">")) : (l = n.enter("destinationRaw"), u += o.move(n.safe(e.url, {
		before: u,
		after: e.title ? " " : ")",
		...o.current()
	}))), l(), e.title && (l = n.enter(`title${a}`), u += o.move(" " + i), u += o.move(n.safe(e.title, {
		before: u,
		after: i,
		...o.current()
	})), u += o.move(i), l()), u += o.move(")"), c(), u;
}
function linkPeek(e, t, n) {
	return formatLinkAsAutolink(e, n) ? "<" : "[";
}
linkReference.peek = linkReferencePeek;
function linkReference(e, t, n, r) {
	let i = e.referenceType, a = n.enter("linkReference"), o = n.enter("label"), c = n.createTracker(r), l = c.move("["), u = n.containerPhrasing(e, {
		before: l,
		after: "]",
		...c.current()
	});
	l += c.move(u + "]["), o();
	let d = n.stack;
	n.stack = [], o = n.enter("reference");
	let f = n.safe(n.associationId(e), {
		before: l,
		after: "]",
		...c.current()
	});
	return o(), n.stack = d, a(), i === "full" || !u || u !== f ? l += c.move(f + "]") : i === "shortcut" ? l = l.slice(0, -1) : l += c.move("]"), l;
}
function linkReferencePeek() {
	return "[";
}
function checkBullet(e) {
	let t = e.options.bullet || "*";
	if (t !== "*" && t !== "+" && t !== "-") throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return t;
}
function checkBulletOther(e) {
	let t = checkBullet(e), n = e.options.bulletOther;
	if (!n) return t === "*" ? "-" : "*";
	if (n !== "*" && n !== "+" && n !== "-") throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
	if (n === t) throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
	return n;
}
function checkBulletOrdered(e) {
	let t = e.options.bulletOrdered || ".";
	if (t !== "." && t !== ")") throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
	return t;
}
function checkRule(e) {
	let t = e.options.rule || "*";
	if (t !== "*" && t !== "-" && t !== "_") throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
	return t;
}
function list(e, t, n, r) {
	let i = n.enter("list"), a = n.bulletCurrent, o = e.ordered ? checkBulletOrdered(n) : checkBullet(n), c = e.ordered ? o === "." ? ")" : "." : checkBulletOther(n), l = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
	if (!e.ordered) {
		let t = e.children ? e.children[0] : void 0;
		if ((o === "*" || o === "-") && t && (!t.children || !t.children[0]) && n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (l = !0), checkRule(n) === o && t) {
			let t = -1;
			for (; ++t < e.children.length;) {
				let n = e.children[t];
				if (n && n.type === "listItem" && n.children && n.children[0] && n.children[0].type === "thematicBreak") {
					l = !0;
					break;
				}
			}
		}
	}
	l && (o = c), n.bulletCurrent = o;
	let u = n.containerFlow(e, r);
	return n.bulletLastUsed = o, n.bulletCurrent = a, i(), u;
}
function checkListItemIndent(e) {
	let t = e.options.listItemIndent || "one";
	if (t !== "tab" && t !== "one" && t !== "mixed") throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return t;
}
function listItem(e, t, n, r) {
	let i = checkListItemIndent(n), a = n.bulletCurrent || checkBullet(n);
	t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
	let o = a.length + 1;
	(i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
	let c = n.createTracker(r);
	c.move(a + " ".repeat(o - a.length)), c.shift(o);
	let l = n.enter("listItem"), u = n.indentLines(n.containerFlow(e, c.current()), d);
	return l(), u;
	function d(e, t, n) {
		return t ? (n ? "" : " ".repeat(o)) + e : (n ? a : a + " ".repeat(o - a.length)) + e;
	}
}
function paragraph(e, t, n, r) {
	let i = n.enter("paragraph"), a = n.enter("phrasing"), o = n.containerPhrasing(e, r);
	return a(), i(), o;
}
const phrasing = convert([
	"break",
	"delete",
	"emphasis",
	"footnote",
	"footnoteReference",
	"image",
	"imageReference",
	"inlineCode",
	"inlineMath",
	"link",
	"linkReference",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"strong",
	"text",
	"textDirective"
]);
function root$2(e, t, n, r) {
	return (e.children.some(function(e) {
		return phrasing(e);
	}) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function checkStrong(e) {
	let t = e.options.strong || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
	return t;
}
strong.peek = strongPeek;
function strong(e, t, n, r) {
	let i = checkStrong(n), a = n.enter("strong"), o = n.createTracker(r), c = o.move(i + i), l = o.move(n.containerPhrasing(e, {
		after: i,
		before: c,
		...o.current()
	})), u = l.charCodeAt(0), d = encodeInfo(r.before.charCodeAt(r.before.length - 1), u, i);
	d.inside && (l = encodeCharacterReference(u) + l.slice(1));
	let f = l.charCodeAt(l.length - 1), p = encodeInfo(r.after.charCodeAt(0), f, i);
	p.inside && (l = l.slice(0, -1) + encodeCharacterReference(f));
	let m = o.move(i + i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: p.outside,
		before: d.outside
	}, c + l + m;
}
function strongPeek(e, t, n) {
	return n.options.strong || "*";
}
function text$3(e, t, n, r) {
	return n.safe(e.value, r);
}
function checkRuleRepetition(e) {
	let t = e.options.ruleRepetition || 3;
	if (t < 3) throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
	return t;
}
function thematicBreak(e, t, n) {
	let r = (checkRule(n) + (n.options.ruleSpaces ? " " : "")).repeat(checkRuleRepetition(n));
	return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const handle = {
	blockquote,
	break: hardBreak,
	code: code$1,
	definition,
	emphasis,
	hardBreak,
	heading,
	html: html$1,
	image,
	imageReference,
	inlineCode,
	link,
	linkReference,
	list,
	listItem,
	paragraph,
	root: root$2,
	strong,
	text: text$3,
	thematicBreak
};
function gfmTableFromMarkdown() {
	return {
		enter: {
			table: enterTable,
			tableData: enterCell,
			tableHeader: enterCell,
			tableRow: enterRow
		},
		exit: {
			codeText: exitCodeText,
			table: exitTable,
			tableData: exit,
			tableHeader: exit,
			tableRow: exit
		}
	};
}
function enterTable(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return e === "none" ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function exitTable(e) {
	this.exit(e), this.data.inTable = void 0;
}
function enterRow(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function exit(e) {
	this.exit(e);
}
function enterCell(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function exitCodeText(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, replace));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function replace(e, t) {
	return t === "|" ? t : e;
}
function gfmTableToMarkdown(e) {
	let t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, a = n ? " " : "|";
	return {
		unsafe: [
			{
				character: "\r",
				inConstruct: "tableCell"
			},
			{
				character: "\n",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: "|",
				after: "[	 :-]"
			},
			{
				character: "|",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: ":",
				after: "-"
			},
			{
				atBreak: !0,
				character: "-",
				after: "[:|-]"
			}
		],
		handlers: {
			inlineCode: p,
			table: o,
			tableCell: l,
			tableRow: c
		}
	};
	function o(e, t, n, r) {
		return u(d(e, n, r), e.align);
	}
	function c(e, t, n, r) {
		let i = u([f(e, n, r)]);
		return i.slice(0, i.indexOf("\n"));
	}
	function l(e, t, n, r) {
		let i = n.enter("tableCell"), o = n.enter("phrasing"), c = n.containerPhrasing(e, {
			...r,
			before: a,
			after: a
		});
		return o(), i(), c;
	}
	function u(e, t) {
		return markdownTable(e, {
			align: t,
			alignDelimiters: r,
			padding: n,
			stringLength: i
		});
	}
	function d(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("table");
		for (; ++i < r.length;) a[i] = f(r[i], t, n);
		return o(), a;
	}
	function f(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("tableRow");
		for (; ++i < r.length;) a[i] = l(r[i], e, t, n);
		return o(), a;
	}
	function p(e, t, n) {
		let r = handle.inlineCode(e, t, n);
		return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r;
	}
}
function gfmTaskListItemFromMarkdown() {
	return { exit: {
		taskListCheckValueChecked: exitCheck,
		taskListCheckValueUnchecked: exitCheck,
		paragraph: exitParagraphWithTaskListItem
	} };
}
function gfmTaskListItemToMarkdown() {
	return {
		unsafe: [{
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: { listItem: listItemWithTaskListItem }
	};
}
function exitCheck(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function exitParagraphWithTaskListItem(e) {
	let t = this.stack[this.stack.length - 2];
	if (t && t.type === "listItem" && typeof t.checked == "boolean") {
		let e = this.stack[this.stack.length - 1];
		e.type;
		let n = e.children[0];
		if (n && n.type === "text") {
			let r = t.children, i = -1, a;
			for (; ++i < r.length;) {
				let e = r[i];
				if (e.type === "paragraph") {
					a = e;
					break;
				}
			}
			a === e && (n.value = n.value.slice(1), n.value.length === 0 ? e.children.shift() : e.position && n.position && typeof n.position.start.offset == "number" && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)));
		}
	}
	this.exit(e);
}
function listItemWithTaskListItem(e, t, n, r) {
	let i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", c = n.createTracker(r);
	a && c.move(o);
	let l = handle.listItem(e, t, n, {
		...r,
		...c.current()
	});
	return a && (l = l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), l;
	function u(e) {
		return e + o;
	}
}
function gfmFromMarkdown() {
	return [
		gfmAutolinkLiteralFromMarkdown(),
		gfmFootnoteFromMarkdown(),
		gfmStrikethroughFromMarkdown(),
		gfmTableFromMarkdown(),
		gfmTaskListItemFromMarkdown()
	];
}
function gfmToMarkdown(e) {
	return { extensions: [
		gfmAutolinkLiteralToMarkdown(),
		gfmFootnoteToMarkdown(e),
		gfmStrikethroughToMarkdown(),
		gfmTableToMarkdown(e),
		gfmTaskListItemToMarkdown()
	] };
}
var wwwPrefix = {
	tokenize: tokenizeWwwPrefix,
	partial: !0
}, domain = {
	tokenize: tokenizeDomain,
	partial: !0
}, path = {
	tokenize: tokenizePath,
	partial: !0
}, trail = {
	tokenize: tokenizeTrail,
	partial: !0
}, emailDomainDotTrail = {
	tokenize: tokenizeEmailDomainDotTrail,
	partial: !0
}, wwwAutolink = {
	name: "wwwAutolink",
	tokenize: tokenizeWwwAutolink,
	previous: previousWww
}, protocolAutolink = {
	name: "protocolAutolink",
	tokenize: tokenizeProtocolAutolink,
	previous: previousProtocol
}, emailAutolink = {
	name: "emailAutolink",
	tokenize: tokenizeEmailAutolink,
	previous: previousEmail
}, text$2 = {};
function gfmAutolinkLiteral() {
	return { text: text$2 };
}
for (var code = 48; code < 123;) text$2[code] = emailAutolink, code++, code === 58 ? code = 65 : code === 91 && (code = 97);
text$2[43] = emailAutolink, text$2[45] = emailAutolink, text$2[46] = emailAutolink, text$2[95] = emailAutolink, text$2[72] = [emailAutolink, protocolAutolink], text$2[104] = [emailAutolink, protocolAutolink], text$2[87] = [emailAutolink, wwwAutolink], text$2[119] = [emailAutolink, wwwAutolink];
function tokenizeEmailAutolink(e, t, n) {
	let r = this, i, a;
	return o;
	function o(t) {
		return !gfmAtext(t) || !previousEmail.call(r, r.previous) || previousUnbalanced(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), c(t));
	}
	function c(t) {
		return gfmAtext(t) ? (e.consume(t), c) : t === 64 ? (e.consume(t), l) : n(t);
	}
	function l(t) {
		return t === 46 ? e.check(emailDomainDotTrail, d, u)(t) : t === 45 || t === 95 || asciiAlphanumeric(t) ? (a = !0, e.consume(t), l) : d(t);
	}
	function u(t) {
		return e.consume(t), i = !0, l;
	}
	function d(o) {
		return a && i && asciiAlpha(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
	}
}
function tokenizeWwwAutolink(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t !== 87 && t !== 119 || !previousWww.call(r, r.previous) || previousUnbalanced(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(wwwPrefix, e.attempt(domain, e.attempt(path, a), n), n)(t));
	}
	function a(n) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
	}
}
function tokenizeProtocolAutolink(e, t, n) {
	let r = this, i = "", a = !1;
	return o;
	function o(t) {
		return (t === 72 || t === 104) && previousProtocol.call(r, r.previous) && !previousUnbalanced(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), c) : n(t);
	}
	function c(t) {
		if (asciiAlpha(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), c;
		if (t === 58) {
			let n = i.toLowerCase();
			if (n === "http" || n === "https") return e.consume(t), l;
		}
		return n(t);
	}
	function l(t) {
		return t === 47 ? (e.consume(t), a ? u : (a = !0, l)) : n(t);
	}
	function u(t) {
		return t === null || asciiControl(t) || markdownLineEndingOrSpace(t) || unicodeWhitespace(t) || unicodePunctuation(t) ? n(t) : e.attempt(domain, e.attempt(path, d), n)(t);
	}
	function d(n) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
	}
}
function tokenizeWwwPrefix(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return (t === 87 || t === 119) && r < 3 ? (r++, e.consume(t), i) : t === 46 && r === 3 ? (e.consume(t), a) : n(t);
	}
	function a(e) {
		return e === null ? n(e) : t(e);
	}
}
function tokenizeDomain(e, t, n) {
	let r, i, a;
	return o;
	function o(t) {
		return t === 46 || t === 95 ? e.check(trail, l, c)(t) : t === null || markdownLineEndingOrSpace(t) || unicodeWhitespace(t) || t !== 45 && unicodePunctuation(t) ? l(t) : (a = !0, e.consume(t), o);
	}
	function c(t) {
		return t === 95 ? r = !0 : (i = r, r = void 0), e.consume(t), o;
	}
	function l(e) {
		return i || r || !a ? n(e) : t(e);
	}
}
function tokenizePath(e, t) {
	let n = 0, r = 0;
	return i;
	function i(o) {
		return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(trail, t, a)(o) : o === null || markdownLineEndingOrSpace(o) || unicodeWhitespace(o) ? t(o) : (e.consume(o), i);
	}
	function a(t) {
		return t === 41 && r++, e.consume(t), i;
	}
}
function tokenizeTrail(e, t, n) {
	return r;
	function r(o) {
		return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : o === 60 || o === null || markdownLineEndingOrSpace(o) || unicodeWhitespace(o) ? t(o) : n(o);
	}
	function i(e) {
		return e === null || e === 40 || e === 91 || markdownLineEndingOrSpace(e) || unicodeWhitespace(e) ? t(e) : r(e);
	}
	function a(e) {
		return asciiAlpha(e) ? o(e) : n(e);
	}
	function o(t) {
		return t === 59 ? (e.consume(t), r) : asciiAlpha(t) ? (e.consume(t), o) : n(t);
	}
}
function tokenizeEmailDomainDotTrail(e, t, n) {
	return r;
	function r(t) {
		return e.consume(t), i;
	}
	function i(e) {
		return asciiAlphanumeric(e) ? n(e) : t(e);
	}
}
function previousWww(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || markdownLineEndingOrSpace(e);
}
function previousProtocol(e) {
	return !asciiAlpha(e);
}
function previousEmail(e) {
	return !(e === 47 || gfmAtext(e));
}
function gfmAtext(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || asciiAlphanumeric(e);
}
function previousUnbalanced(e) {
	let t = e.length, n = !1;
	for (; t--;) {
		let r = e[t][1];
		if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
			n = !0;
			break;
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break;
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
var indent = {
	tokenize: tokenizeIndent,
	partial: !0
};
function gfmFootnote() {
	return {
		document: { 91: {
			name: "gfmFootnoteDefinition",
			tokenize: tokenizeDefinitionStart,
			continuation: { tokenize: tokenizeDefinitionContinuation },
			exit: gfmFootnoteDefinitionEnd
		} },
		text: {
			91: {
				name: "gfmFootnoteCall",
				tokenize: tokenizeGfmFootnoteCall
			},
			93: {
				name: "gfmPotentialFootnoteCall",
				add: "after",
				tokenize: tokenizePotentialGfmFootnoteCall,
				resolveTo: resolveToPotentialGfmFootnoteCall
			}
		}
	};
}
function tokenizePotentialGfmFootnoteCall(e, t, n) {
	let r = this, i = r.events.length, a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), o;
	for (; i--;) {
		let e = r.events[i][1];
		if (e.type === "labelImage") {
			o = e;
			break;
		}
		if (e.type === "gfmFootnoteCall" || e.type === "labelLink" || e.type === "label" || e.type === "image" || e.type === "link") break;
	}
	return c;
	function c(i) {
		if (!o || !o._balanced) return n(i);
		let c = normalizeIdentifier(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}));
		return c.codePointAt(0) !== 94 || !a.includes(c.slice(1)) ? n(i) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(i), e.exit("gfmFootnoteCallLabelMarker"), t(i));
	}
}
function resolveToPotentialGfmFootnoteCall(e, t) {
	let n = e.length;
	for (; n--;) if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
		e[n][1];
		break;
	}
	e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	let r = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[n + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, i = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[n + 3][1].end),
		end: Object.assign({}, e[n + 3][1].end)
	};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	let a = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, i.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, o = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, a.start),
		end: Object.assign({}, a.end)
	}, c = [
		e[n + 1],
		e[n + 2],
		[
			"enter",
			r,
			t
		],
		e[n + 3],
		e[n + 4],
		[
			"enter",
			i,
			t
		],
		[
			"exit",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"enter",
			o,
			t
		],
		[
			"exit",
			o,
			t
		],
		[
			"exit",
			a,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			r,
			t
		]
	];
	return e.splice(n, e.length - n + 1, ...c), e;
}
function tokenizeGfmFootnoteCall(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a = 0, o;
	return c;
	function c(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), l;
	}
	function l(t) {
		return t === 94 ? (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u) : n(t);
	}
	function u(c) {
		if (a > 999 || c === 93 && !o || c === null || c === 91 || markdownLineEndingOrSpace(c)) return n(c);
		if (c === 93) {
			e.exit("chunkString");
			let a = e.exit("gfmFootnoteCallString");
			return i.includes(normalizeIdentifier(r.sliceSerialize(a))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
		}
		return markdownLineEndingOrSpace(c) || (o = !0), a++, e.consume(c), c === 92 ? d : u;
	}
	function d(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), a++, u) : u(t);
	}
}
function tokenizeDefinitionStart(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a, o = 0, c;
	return l;
	function l(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
	}
	function u(t) {
		return t === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", d) : n(t);
	}
	function d(t) {
		if (o > 999 || t === 93 && !c || t === null || t === 91 || markdownLineEndingOrSpace(t)) return n(t);
		if (t === 93) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return a = normalizeIdentifier(r.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p;
		}
		return markdownLineEndingOrSpace(t) || (c = !0), o++, e.consume(t), t === 92 ? f : d;
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), o++, d) : d(t);
	}
	function p(t) {
		return t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), i.includes(a) || i.push(a), factorySpace(e, m, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function m(e) {
		return t(e);
	}
}
function tokenizeDefinitionContinuation(e, t, n) {
	return e.check(blankLine, t, e.attempt(indent, t, n));
}
function gfmFootnoteDefinitionEnd(e) {
	e.exit("gfmFootnoteDefinition");
}
function tokenizeIndent(e, t, n) {
	let r = this;
	return factorySpace(e, i, "gfmFootnoteDefinitionIndent", 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(e) : n(e);
	}
}
function gfmStrikethrough(e) {
	let t = (e || {}).singleTilde, n = {
		name: "strikethrough",
		tokenize: i,
		resolveAll: r
	};
	return t ??= !0, {
		text: { 126: n },
		insideSpan: { null: [n] },
		attentionMarkers: { null: [126] }
	};
	function r(e, t) {
		let n = -1;
		for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "strikethroughSequenceTemporary" && e[n][1]._close) {
			let r = n;
			for (; r--;) if (e[r][0] === "exit" && e[r][1].type === "strikethroughSequenceTemporary" && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset === e[r][1].end.offset - e[r][1].start.offset) {
				e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
				let i = {
					type: "strikethrough",
					start: Object.assign({}, e[r][1].start),
					end: Object.assign({}, e[n][1].end)
				}, a = {
					type: "strikethroughText",
					start: Object.assign({}, e[r][1].end),
					end: Object.assign({}, e[n][1].start)
				}, o = [
					[
						"enter",
						i,
						t
					],
					[
						"enter",
						e[r][1],
						t
					],
					[
						"exit",
						e[r][1],
						t
					],
					[
						"enter",
						a,
						t
					]
				], c = t.parser.constructs.insideSpan.null;
				c && splice(o, o.length, 0, resolveAll(c, e.slice(r + 1, n), t)), splice(o, o.length, 0, [
					[
						"exit",
						a,
						t
					],
					[
						"enter",
						e[n][1],
						t
					],
					[
						"exit",
						e[n][1],
						t
					],
					[
						"exit",
						i,
						t
					]
				]), splice(e, r - 1, n - r + 3, o), n = r + o.length - 2;
				break;
			}
		}
		for (n = -1; ++n < e.length;) e[n][1].type === "strikethroughSequenceTemporary" && (e[n][1].type = "data");
		return e;
	}
	function i(e, n, r) {
		let i = this.previous, a = this.events, o = 0;
		return c;
		function c(t) {
			return i === 126 && a[a.length - 1][1].type !== "characterEscape" ? r(t) : (e.enter("strikethroughSequenceTemporary"), l(t));
		}
		function l(a) {
			let c = classifyCharacter(i);
			if (a === 126) return o > 1 ? r(a) : (e.consume(a), o++, l);
			if (o < 2 && !t) return r(a);
			let u = e.exit("strikethroughSequenceTemporary"), d = classifyCharacter(a);
			return u._open = !d || d === 2 && !!c, u._close = !c || c === 2 && !!d, n(a);
		}
	}
}
var EditMap = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		addImplementation(this, e, t, n);
	}
	consume(e) {
		/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), this.map.length === 0) return;
		let t = this.map.length, n = [];
		for (; t > 0;) --t, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0;
	}
};
function addImplementation(e, t, n, r) {
	let i = 0;
	if (!(n === 0 && r.length === 0)) {
		for (; i < e.map.length;) {
			if (e.map[i][0] === t) {
				e.map[i][1] += n, e.map[i][2].push(...r);
				return;
			}
			i += 1;
		}
		e.map.push([
			t,
			n,
			r
		]);
	}
}
function gfmTableAlign(e, t) {
	let n = !1, r = [];
	for (; t < e.length;) {
		let i = e[t];
		if (n) {
			if (i[0] === "enter") i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
			else if (i[1].type === "tableContent") {
				if (e[t - 1][1].type === "tableDelimiterMarker") {
					let e = r.length - 1;
					r[e] = r[e] === "left" ? "center" : "right";
				}
			} else if (i[1].type === "tableDelimiterRow") break;
		} else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
		t += 1;
	}
	return r;
}
function gfmTable() {
	return { flow: { null: {
		name: "table",
		tokenize: tokenizeTable,
		resolveAll: resolveTable
	} } };
}
function tokenizeTable(e, t, n) {
	let r = this, i = 0, a = 0, o;
	return c;
	function c(e) {
		let t = r.events.length - 1;
		for (; t > -1;) {
			let e = r.events[t][1].type;
			if (e === "lineEnding" || e === "linePrefix") t--;
			else break;
		}
		let i = t > -1 ? r.events[t][1].type : null, a = i === "tableHead" || i === "tableRow" ? w : l;
		return a === w && r.parser.lazy[r.now().line] ? n(e) : a(e);
	}
	function l(t) {
		return e.enter("tableHead"), e.enter("tableRow"), u(t);
	}
	function u(e) {
		return e === 124 ? d(e) : (o = !0, a += 1, d(e));
	}
	function d(t) {
		return t === null ? n(t) : markdownLineEnding(t) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), m) : n(t) : markdownSpace(t) ? factorySpace(e, d, "whitespace")(t) : (a += 1, o && (o = !1, i += 1), t === 124 ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), o = !0, d) : (e.enter("data"), f(t)));
	}
	function f(t) {
		return t === null || t === 124 || markdownLineEndingOrSpace(t) ? (e.exit("data"), d(t)) : (e.consume(t), t === 92 ? p : f);
	}
	function p(t) {
		return t === 92 || t === 124 ? (e.consume(t), f) : f(t);
	}
	function m(t) {
		return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(t) : (e.enter("tableDelimiterRow"), o = !1, markdownSpace(t) ? factorySpace(e, g, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : g(t));
	}
	function g(t) {
		return t === 45 || t === 58 ? v(t) : t === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), _) : C(t);
	}
	function _(t) {
		return markdownSpace(t) ? factorySpace(e, v, "whitespace")(t) : v(t);
	}
	function v(t) {
		return t === 58 ? (a += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), y) : t === 45 ? (a += 1, y(t)) : t === null || markdownLineEnding(t) ? S(t) : C(t);
	}
	function y(t) {
		return t === 45 ? (e.enter("tableDelimiterFiller"), b(t)) : C(t);
	}
	function b(t) {
		return t === 45 ? (e.consume(t), b) : t === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), x) : (e.exit("tableDelimiterFiller"), x(t));
	}
	function x(t) {
		return markdownSpace(t) ? factorySpace(e, S, "whitespace")(t) : S(t);
	}
	function S(n) {
		return n === 124 ? g(n) : n === null || markdownLineEnding(n) ? !o || i !== a ? C(n) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(n)) : C(n);
	}
	function C(e) {
		return n(e);
	}
	function w(t) {
		return e.enter("tableRow"), T(t);
	}
	function T(n) {
		return n === 124 ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), T) : n === null || markdownLineEnding(n) ? (e.exit("tableRow"), t(n)) : markdownSpace(n) ? factorySpace(e, T, "whitespace")(n) : (e.enter("data"), E(n));
	}
	function E(t) {
		return t === null || t === 124 || markdownLineEndingOrSpace(t) ? (e.exit("data"), T(t)) : (e.consume(t), t === 92 ? D : E);
	}
	function D(t) {
		return t === 92 || t === 124 ? (e.consume(t), E) : E(t);
	}
}
function resolveTable(e, t) {
	let n = -1, r = !0, i = 0, a = [
		0,
		0,
		0,
		0
	], o = [
		0,
		0,
		0,
		0
	], c = !1, l = 0, u, d, f, p = new EditMap();
	for (; ++n < e.length;) {
		let m = e[n], g = m[1];
		m[0] === "enter" ? g.type === "tableHead" ? (c = !1, l !== 0 && (flushTableEnd(p, t, l, u, d), d = void 0, l = 0), u = {
			type: "table",
			start: Object.assign({}, g.start),
			end: Object.assign({}, g.end)
		}, p.add(n, 0, [[
			"enter",
			u,
			t
		]])) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (r = !0, f = void 0, a = [
			0,
			0,
			0,
			0
		], o = [
			0,
			n + 1,
			0,
			0
		], c && (c = !1, d = {
			type: "tableBody",
			start: Object.assign({}, g.start),
			end: Object.assign({}, g.end)
		}, p.add(n, 0, [[
			"enter",
			d,
			t
		]])), i = g.type === "tableDelimiterRow" ? 2 : d ? 3 : 1) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], f = flushCell(p, t, a, i, void 0, f), a = [
			0,
			0,
			0,
			0
		]), o[2] = n)) : g.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], f = flushCell(p, t, a, i, void 0, f)), a = o, o = [
			a[1],
			n,
			0,
			0
		])) : g.type === "tableHead" ? (c = !0, l = n) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (l = n, a[1] === 0 ? o[1] !== 0 && (f = flushCell(p, t, o, i, n, f)) : (o[0] = o[1], f = flushCell(p, t, a, i, n, f)), i = 0) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") && (o[3] = n);
	}
	for (l !== 0 && flushTableEnd(p, t, l, u, d), p.consume(t.events), n = -1; ++n < t.events.length;) {
		let e = t.events[n];
		e[0] === "enter" && e[1].type === "table" && (e[1]._align = gfmTableAlign(t.events, n));
	}
	return e;
}
function flushCell(e, t, n, r, i, a) {
	let o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData";
	n[0] !== 0 && (a.end = Object.assign({}, getPoint(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		a,
		t
	]]));
	let c = getPoint(t.events, n[1]);
	if (a = {
		type: o,
		start: Object.assign({}, c),
		end: Object.assign({}, c)
	}, e.add(n[1], 0, [[
		"enter",
		a,
		t
	]]), n[2] !== 0) {
		let i = getPoint(t.events, n[2]), a = getPoint(t.events, n[3]), o = {
			type: "tableContent",
			start: Object.assign({}, i),
			end: Object.assign({}, a)
		};
		if (e.add(n[2], 0, [[
			"enter",
			o,
			t
		]]), r !== 2) {
			let r = t.events[n[2]], i = t.events[n[3]];
			if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
				let t = n[2] + 1, r = n[3] - n[2] - 1;
				e.add(t, r, []);
			}
		}
		e.add(n[3] + 1, 0, [[
			"exit",
			o,
			t
		]]);
	}
	return i !== void 0 && (a.end = Object.assign({}, getPoint(t.events, i)), e.add(i, 0, [[
		"exit",
		a,
		t
	]]), a = void 0), a;
}
function flushTableEnd(e, t, n, r, i) {
	let a = [], o = getPoint(t.events, n);
	i && (i.end = Object.assign({}, o), a.push([
		"exit",
		i,
		t
	])), r.end = Object.assign({}, o), a.push([
		"exit",
		r,
		t
	]), e.add(n + 1, 0, a);
}
function getPoint(e, t) {
	let n = e[t], r = n[0] === "enter" ? "start" : "end";
	return n[1][r];
}
var tasklistCheck = {
	name: "tasklistCheck",
	tokenize: tokenizeTasklistCheck
};
function gfmTaskListItem() {
	return { text: { 91: tasklistCheck } };
}
function tokenizeTasklistCheck(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(t) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), a);
	}
	function a(t) {
		return markdownLineEndingOrSpace(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), o) : t === 88 || t === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), o) : n(t);
	}
	function o(t) {
		return t === 93 ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), c) : n(t);
	}
	function c(r) {
		return markdownLineEnding(r) ? t(r) : markdownSpace(r) ? e.check({ tokenize: spaceThenNonSpace }, t, n)(r) : n(r);
	}
}
function spaceThenNonSpace(e, t, n) {
	return factorySpace(e, r, "whitespace");
	function r(e) {
		return e === null ? n(e) : t(e);
	}
}
function gfm(e) {
	return combineExtensions([
		gfmAutolinkLiteral(),
		gfmFootnote(),
		gfmStrikethrough(e),
		gfmTable(),
		gfmTaskListItem()
	]);
}
var emptyOptions$1 = {};
function remarkGfm(e) {
	let t = this, n = e || emptyOptions$1, r = t.data(), i = r.micromarkExtensions ||= [], a = r.fromMarkdownExtensions ||= [], o = r.toMarkdownExtensions ||= [];
	i.push(gfm(n)), a.push(gfmFromMarkdown()), o.push(gfmToMarkdown(n));
}
var search = /[#.]/g;
function parseSelector(e, t) {
	let n = e || "", r = {}, i = 0, a, o;
	for (; i < n.length;) {
		search.lastIndex = i;
		let e = search.exec(n), t = n.slice(i, e ? e.index : n.length);
		t && (a ? a === "#" ? r.id = t : Array.isArray(r.className) ? r.className.push(t) : r.className = [t] : o = t, i += t.length), e && (a = e[0], i++);
	}
	return {
		type: "element",
		tagName: o || t || "div",
		properties: r,
		children: []
	};
}
function createH(e, t, n) {
	let r = n ? createAdjustMap(n) : void 0;
	function i(n, i, ...a) {
		let o;
		if (n == null) {
			o = {
				type: "root",
				children: []
			};
			let e = i;
			a.unshift(e);
		} else {
			o = parseSelector(n, t);
			let c = o.tagName.toLowerCase();
			if (o.tagName = (r ? r.get(c) : void 0) || c, isChild(i)) a.unshift(i);
			else for (let [t, n] of Object.entries(i)) addProperty(e, o.properties, t, n);
		}
		for (let e of a) addChild(o.children, e);
		return o.type === "element" && o.tagName === "template" && (o.content = {
			type: "root",
			children: o.children
		}, o.children = []), o;
	}
	return i;
}
function isChild(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) return !0;
	if (typeof e.type != "string") return !1;
	let t = e, n = Object.keys(e);
	for (let e of n) {
		let n = t[e];
		if (n && typeof n == "object") {
			if (!Array.isArray(n)) return !0;
			let e = n;
			for (let t of e) if (typeof t != "number" && typeof t != "string") return !0;
		}
	}
	return !!("children" in e && Array.isArray(e.children));
}
function addProperty(e, t, n, r) {
	let i = find(e, n), a;
	if (r != null) {
		if (typeof r == "number") {
			if (Number.isNaN(r)) return;
			a = r;
		} else a = typeof r == "boolean" ? r : typeof r == "string" ? i.spaceSeparated ? parse$1(r) : i.commaSeparated ? parse(r) : i.commaOrSpaceSeparated ? parse$1(parse(r).join(" ")) : parsePrimitive(i, i.property, r) : Array.isArray(r) ? [...r] : i.property === "style" ? style(r) : String(r);
		if (Array.isArray(a)) {
			let e = [];
			for (let t of a) e.push(parsePrimitive(i, i.property, t));
			a = e;
		}
		i.property === "className" && Array.isArray(t.className) && (a = t.className.concat(a)), t[i.property] = a;
	}
}
function addChild(e, t) {
	if (t != null) if (typeof t == "number" || typeof t == "string") e.push({
		type: "text",
		value: String(t)
	});
	else if (Array.isArray(t)) for (let n of t) addChild(e, n);
	else if (typeof t == "object" && "type" in t) t.type === "root" ? addChild(e, t.children) : e.push(t);
	else throw Error("Expected node, nodes, or string, got `" + t + "`");
}
function parsePrimitive(e, t, n) {
	if (typeof n == "string") {
		if (e.number && n && !Number.isNaN(Number(n))) return Number(n);
		if ((e.boolean || e.overloadedBoolean) && (n === "" || normalize(n) === normalize(t))) return !0;
	}
	return n;
}
function style(e) {
	let t = [];
	for (let [n, r] of Object.entries(e)) t.push([n, r].join(": "));
	return t.join("; ");
}
function createAdjustMap(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) t.set(n.toLowerCase(), n);
	return t;
}
const svgCaseSensitiveTagNames = /* @__PURE__ */ "altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.solidColor.textArea.textPath".split("."), h = createH(html, "div"), s = createH(svg, "g", svgCaseSensitiveTagNames);
function location(e) {
	let t = String(e), n = [];
	return {
		toOffset: i,
		toPoint: r
	};
	function r(e) {
		if (typeof e == "number" && e > -1 && e <= t.length) {
			let r = 0;
			for (;;) {
				let i = n[r];
				if (i === void 0) {
					let e = next(t, n[r - 1]);
					i = e === -1 ? t.length + 1 : e + 1, n[r] = i;
				}
				if (i > e) return {
					line: r + 1,
					column: e - (r > 0 ? n[r - 1] : 0) + 1,
					offset: e
				};
				r++;
			}
		}
	}
	function i(e) {
		if (e && typeof e.line == "number" && typeof e.column == "number" && !Number.isNaN(e.line) && !Number.isNaN(e.column)) {
			for (; n.length < e.line;) {
				let e = n[n.length - 1], r = next(t, e), i = r === -1 ? t.length + 1 : r + 1;
				if (e === i) break;
				n.push(i);
			}
			let r = (e.line > 1 ? n[e.line - 2] : 0) + e.column - 1;
			if (r < n[e.line - 1]) return r;
		}
	}
}
function next(e, t) {
	let n = e.indexOf("\r", t), r = e.indexOf("\n", t);
	return r === -1 ? n : n === -1 || n + 1 === r ? r : n < r ? n : r;
}
const webNamespaces = {
	html: "http://www.w3.org/1999/xhtml",
	mathml: "http://www.w3.org/1998/Math/MathML",
	svg: "http://www.w3.org/2000/svg",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
var own$1 = {}.hasOwnProperty, proto = Object.prototype;
function fromParse5(e, t) {
	let n = t || {};
	return one$1({
		file: n.file || void 0,
		location: !1,
		schema: n.space === "svg" ? svg : html,
		verbose: n.verbose || !1
	}, e);
}
function one$1(e, t) {
	let n;
	switch (t.nodeName) {
		case "#comment": {
			let r = t;
			return n = {
				type: "comment",
				value: r.data
			}, patch$1(e, r, n), n;
		}
		case "#document":
		case "#document-fragment": {
			let r = t, i = "mode" in r ? r.mode === "quirks" || r.mode === "limited-quirks" : !1;
			if (n = {
				type: "root",
				children: all$2(e, t.childNodes),
				data: { quirksMode: i }
			}, e.file && e.location) {
				let t = String(e.file), r = location(t);
				n.position = {
					start: r.toPoint(0),
					end: r.toPoint(t.length)
				};
			}
			return n;
		}
		case "#documentType": {
			let r = t;
			return n = { type: "doctype" }, patch$1(e, r, n), n;
		}
		case "#text": {
			let r = t;
			return n = {
				type: "text",
				value: r.value
			}, patch$1(e, r, n), n;
		}
		default: return n = element$2(e, t), n;
	}
}
function all$2(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) {
		let i = one$1(e, t[n]);
		r.push(i);
	}
	return r;
}
function element$2(e, t) {
	let n = e.schema;
	e.schema = t.namespaceURI === webNamespaces.svg ? svg : html;
	let r = -1, i = {};
	for (; ++r < t.attrs.length;) {
		let e = t.attrs[r], n = (e.prefix ? e.prefix + ":" : "") + e.name;
		own$1.call(proto, n) || (i[n] = e.value);
	}
	let a = (e.schema.space === "svg" ? s : h)(t.tagName, i, all$2(e, t.childNodes));
	if (patch$1(e, t, a), a.tagName === "template") {
		let n = t, r = n.sourceCodeLocation, i = r && r.startTag && position(r.startTag), o = r && r.endTag && position(r.endTag), c = one$1(e, n.content);
		i && o && e.file && (c.position = {
			start: i.end,
			end: o.start
		}), a.content = c;
	}
	return e.schema = n, a;
}
function patch$1(e, t, n) {
	if ("sourceCodeLocation" in t && t.sourceCodeLocation && e.file) {
		let r = createLocation(e, n, t.sourceCodeLocation);
		r && (e.location = !0, n.position = r);
	}
}
function createLocation(e, t, n) {
	let r = position(n);
	if (t.type === "element") {
		let i = t.children[t.children.length - 1];
		if (r && !n.endTag && i && i.position && i.position.end && (r.end = Object.assign({}, i.position.end)), e.verbose) {
			let r = {}, i;
			if (n.attrs) for (i in n.attrs) own$1.call(n.attrs, i) && (r[find(e.schema, i).property] = position(n.attrs[i]));
			n.startTag;
			let a = position(n.startTag), o = n.endTag ? position(n.endTag) : void 0, c = { opening: a };
			o && (c.closing = o), c.properties = r, t.data = { position: c };
		}
	}
	return r;
}
function position(e) {
	let t = point({
		line: e.startLine,
		column: e.startCol,
		offset: e.startOffset
	}), n = point({
		line: e.endLine,
		column: e.endCol,
		offset: e.endOffset
	});
	return t || n ? {
		start: t,
		end: n
	} : void 0;
}
function point(e) {
	return e.line && e.column ? e : void 0;
}
var emptyOptions = {}, own = {}.hasOwnProperty, one = zwitch("type", { handlers: {
	root: root$1,
	element: element$1,
	text: text$1,
	comment: comment$1,
	doctype: doctype$1
} });
function toParse5(e, t) {
	let n = (t || emptyOptions).space;
	return one(e, n === "svg" ? svg : html);
}
function root$1(e, t) {
	let n = {
		nodeName: "#document",
		mode: (e.data || {}).quirksMode ? "quirks" : "no-quirks",
		childNodes: []
	};
	return n.childNodes = all$1(e.children, n, t), patch(e, n), n;
}
function fragment(e, t) {
	let n = {
		nodeName: "#document-fragment",
		childNodes: []
	};
	return n.childNodes = all$1(e.children, n, t), patch(e, n), n;
}
function doctype$1(e) {
	let t = {
		nodeName: "#documentType",
		name: "html",
		publicId: "",
		systemId: "",
		parentNode: null
	};
	return patch(e, t), t;
}
function text$1(e) {
	let t = {
		nodeName: "#text",
		value: e.value,
		parentNode: null
	};
	return patch(e, t), t;
}
function comment$1(e) {
	let t = {
		nodeName: "#comment",
		data: e.value,
		parentNode: null
	};
	return patch(e, t), t;
}
function element$1(e, t) {
	let n = t, r = n;
	e.type === "element" && e.tagName.toLowerCase() === "svg" && n.space === "html" && (r = svg);
	let i = [], a;
	if (e.properties) {
		for (a in e.properties) if (a !== "children" && own.call(e.properties, a)) {
			let t = createProperty(r, a, e.properties[a]);
			t && i.push(t);
		}
	}
	let o = r.space, c = {
		nodeName: e.tagName,
		tagName: e.tagName,
		attrs: i,
		namespaceURI: webNamespaces[o],
		childNodes: [],
		parentNode: null
	};
	return c.childNodes = all$1(e.children, c, r), patch(e, c), e.tagName === "template" && e.content && (c.content = fragment(e.content, r)), c;
}
function createProperty(e, t, n) {
	let r = find(e, t);
	if (n === !1 || n == null || typeof n == "number" && Number.isNaN(n) || !n && r.boolean) return;
	Array.isArray(n) && (n = r.commaSeparated ? stringify(n) : stringify$1(n));
	let i = {
		name: r.attribute,
		value: n === !0 ? "" : String(n)
	};
	if (r.space && r.space !== "html" && r.space !== "svg") {
		let e = i.name.indexOf(":");
		e < 0 ? i.prefix = "" : (i.name = i.name.slice(e + 1), i.prefix = r.attribute.slice(0, e)), i.namespace = webNamespaces[r.space];
	}
	return i;
}
function all$1(e, t, n) {
	let r = -1, i = [];
	if (e) for (; ++r < e.length;) {
		let a = one(e[r], n);
		a.parentNode = t, i.push(a);
	}
	return i;
}
function patch(e, t) {
	let n = e.position;
	n && n.start && n.end && (n.start.offset, n.end.offset, t.sourceCodeLocation = {
		startLine: n.start.line,
		startCol: n.start.column,
		startOffset: n.start.offset,
		endLine: n.end.line,
		endCol: n.end.column,
		endOffset: n.end.offset
	});
}
const htmlVoidElements = [
	"area",
	"base",
	"basefont",
	"bgsound",
	"br",
	"col",
	"command",
	"embed",
	"frame",
	"hr",
	"image",
	"img",
	"input",
	"keygen",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr"
];
var UNDEFINED_CODE_POINTS = new Set([
	65534,
	65535,
	131070,
	131071,
	196606,
	196607,
	262142,
	262143,
	327678,
	327679,
	393214,
	393215,
	458750,
	458751,
	524286,
	524287,
	589822,
	589823,
	655358,
	655359,
	720894,
	720895,
	786430,
	786431,
	851966,
	851967,
	917502,
	917503,
	983038,
	983039,
	1048574,
	1048575,
	1114110,
	1114111
]), CODE_POINTS;
(function(e) {
	e[e.EOF = -1] = "EOF", e[e.NULL = 0] = "NULL", e[e.TABULATION = 9] = "TABULATION", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.LINE_FEED = 10] = "LINE_FEED", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_0 = 48] = "DIGIT_0", e[e.DIGIT_9 = 57] = "DIGIT_9", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
})(CODE_POINTS ||= {});
const SEQUENCES = {
	DASH_DASH: "--",
	CDATA_START: "[CDATA[",
	DOCTYPE: "doctype",
	SCRIPT: "script",
	PUBLIC: "public",
	SYSTEM: "system"
};
function isSurrogate(e) {
	return e >= 55296 && e <= 57343;
}
function isSurrogatePair(e) {
	return e >= 56320 && e <= 57343;
}
function getSurrogatePairCodePoint(e, t) {
	return (e - 55296) * 1024 + 9216 + t;
}
function isControlCodePoint(e) {
	return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
}
function isUndefinedCodePoint(e) {
	return e >= 64976 && e <= 65007 || UNDEFINED_CODE_POINTS.has(e);
}
var ERR;
(function(e) {
	e.controlCharacterInInputStream = "control-character-in-input-stream", e.noncharacterInInputStream = "noncharacter-in-input-stream", e.surrogateInInputStream = "surrogate-in-input-stream", e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e.endTagWithAttributes = "end-tag-with-attributes", e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e.unexpectedNullCharacter = "unexpected-null-character", e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e.missingEndTagName = "missing-end-tag-name", e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e.unknownNamedCharacterReference = "unknown-named-character-reference", e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e.eofBeforeTagName = "eof-before-tag-name", e.eofInTag = "eof-in-tag", e.missingAttributeValue = "missing-attribute-value", e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e.cdataInHtmlContent = "cdata-in-html-content", e.incorrectlyOpenedComment = "incorrectly-opened-comment", e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e.eofInDoctype = "eof-in-doctype", e.nestedComment = "nested-comment", e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e.eofInComment = "eof-in-comment", e.incorrectlyClosedComment = "incorrectly-closed-comment", e.eofInCdata = "eof-in-cdata", e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e.nullCharacterReference = "null-character-reference", e.surrogateCharacterReference = "surrogate-character-reference", e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e.controlCharacterReference = "control-character-reference", e.noncharacterCharacterReference = "noncharacter-character-reference", e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e.missingDoctypeName = "missing-doctype-name", e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e.duplicateAttribute = "duplicate-attribute", e.nonConformingDoctype = "non-conforming-doctype", e.missingDoctype = "missing-doctype", e.misplacedDoctype = "misplaced-doctype", e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e.openElementsLeftAfterEof = "open-elements-left-after-eof", e.abandonedHeadElementChild = "abandoned-head-element-child", e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e.nestedNoscriptInHead = "nested-noscript-in-head", e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(ERR ||= {});
var DEFAULT_BUFFER_WATERLINE = 65536, Preprocessor = class {
	constructor(e) {
		this.handler = e, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = DEFAULT_BUFFER_WATERLINE, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
	}
	get col() {
		return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
	}
	get offset() {
		return this.droppedBufferSize + this.pos;
	}
	getError(e, t) {
		let { line: n, col: r, offset: i } = this, a = r + t, o = i + t;
		return {
			code: e,
			startLine: n,
			endLine: n,
			startCol: a,
			endCol: a,
			startOffset: o,
			endOffset: o
		};
	}
	_err(e) {
		this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(e, 0)));
	}
	_addGap() {
		this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
	}
	_processSurrogate(e) {
		if (this.pos !== this.html.length - 1) {
			let t = this.html.charCodeAt(this.pos + 1);
			if (isSurrogatePair(t)) return this.pos++, this._addGap(), getSurrogatePairCodePoint(e, t);
		} else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, CODE_POINTS.EOF;
		return this._err(ERR.surrogateInInputStream), e;
	}
	willDropParsedChunk() {
		return this.pos > this.bufferWaterline;
	}
	dropParsedChunk() {
		this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
	}
	write(e, t) {
		this.html.length > 0 ? this.html += e : this.html = e, this.endOfChunkHit = !1, this.lastChunkWritten = t;
	}
	insertHtmlAtCurrentPos(e) {
		this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
	}
	startsWith(e, t) {
		if (this.pos + e.length > this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, !1;
		if (t) return this.html.startsWith(e, this.pos);
		for (let t = 0; t < e.length; t++) if ((this.html.charCodeAt(this.pos + t) | 32) !== e.charCodeAt(t)) return !1;
		return !0;
	}
	peek(e) {
		let t = this.pos + e;
		if (t >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, CODE_POINTS.EOF;
		let n = this.html.charCodeAt(t);
		return n === CODE_POINTS.CARRIAGE_RETURN ? CODE_POINTS.LINE_FEED : n;
	}
	advance() {
		if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, CODE_POINTS.EOF;
		let e = this.html.charCodeAt(this.pos);
		return e === CODE_POINTS.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, CODE_POINTS.LINE_FEED) : e === CODE_POINTS.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, isSurrogate(e) && (e = this._processSurrogate(e)), this.handler.onParseError === null || e > 31 && e < 127 || e === CODE_POINTS.LINE_FEED || e === CODE_POINTS.CARRIAGE_RETURN || e > 159 && e < 64976 || this._checkForProblematicCharacters(e), e);
	}
	_checkForProblematicCharacters(e) {
		isControlCodePoint(e) ? this._err(ERR.controlCharacterInInputStream) : isUndefinedCodePoint(e) && this._err(ERR.noncharacterInInputStream);
	}
	retreat(e) {
		for (this.pos -= e; this.pos < this.lastGapPos;) this.lastGapPos = this.gapStack.pop(), this.pos--;
		this.isEol = !1;
	}
}, TokenType;
(function(e) {
	e[e.CHARACTER = 0] = "CHARACTER", e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER", e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e[e.START_TAG = 3] = "START_TAG", e[e.END_TAG = 4] = "END_TAG", e[e.COMMENT = 5] = "COMMENT", e[e.DOCTYPE = 6] = "DOCTYPE", e[e.EOF = 7] = "EOF", e[e.HIBERNATION = 8] = "HIBERNATION";
})(TokenType ||= {});
function getTokenAttr(e, t) {
	for (let n = e.attrs.length - 1; n >= 0; n--) if (e.attrs[n].name === t) return e.attrs[n].value;
	return null;
}
const htmlDecodeTree = /* @__PURE__ */ new Uint16Array(/* @__PURE__ */ "ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻\"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌".split("").map((e) => e.charCodeAt(0)));
var decodeMap = new Map([
	[0, 65533],
	[128, 8364],
	[130, 8218],
	[131, 402],
	[132, 8222],
	[133, 8230],
	[134, 8224],
	[135, 8225],
	[136, 710],
	[137, 8240],
	[138, 352],
	[139, 8249],
	[140, 338],
	[142, 381],
	[145, 8216],
	[146, 8217],
	[147, 8220],
	[148, 8221],
	[149, 8226],
	[150, 8211],
	[151, 8212],
	[152, 732],
	[153, 8482],
	[154, 353],
	[155, 8250],
	[156, 339],
	[158, 382],
	[159, 376]
]);
String.fromCodePoint;
function replaceCodePoint(e) {
	return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : decodeMap.get(e) ?? e;
}
var CharCodes;
(function(e) {
	e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(CharCodes ||= {});
var TO_LOWER_BIT = 32, BinTrieFlags;
(function(e) {
	e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(BinTrieFlags ||= {});
function isNumber(e) {
	return e >= CharCodes.ZERO && e <= CharCodes.NINE;
}
function isHexadecimalCharacter(e) {
	return e >= CharCodes.UPPER_A && e <= CharCodes.UPPER_F || e >= CharCodes.LOWER_A && e <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric$1(e) {
	return e >= CharCodes.UPPER_A && e <= CharCodes.UPPER_Z || e >= CharCodes.LOWER_A && e <= CharCodes.LOWER_Z || isNumber(e);
}
function isEntityInAttributeInvalidEnd(e) {
	return e === CharCodes.EQUALS || isAsciiAlphaNumeric$1(e);
}
var EntityDecoderState;
(function(e) {
	e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(EntityDecoderState ||= {});
var DecodingMode;
(function(e) {
	e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(DecodingMode ||= {});
var EntityDecoder = class {
	constructor(e, t, n) {
		this.decodeTree = e, this.emitCodePoint = t, this.errors = n, this.state = EntityDecoderState.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = DecodingMode.Strict;
	}
	startEntity(e) {
		this.decodeMode = e, this.state = EntityDecoderState.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
	}
	write(e, t) {
		switch (this.state) {
			case EntityDecoderState.EntityStart: return e.charCodeAt(t) === CharCodes.NUM ? (this.state = EntityDecoderState.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = EntityDecoderState.NamedEntity, this.stateNamedEntity(e, t));
			case EntityDecoderState.NumericStart: return this.stateNumericStart(e, t);
			case EntityDecoderState.NumericDecimal: return this.stateNumericDecimal(e, t);
			case EntityDecoderState.NumericHex: return this.stateNumericHex(e, t);
			case EntityDecoderState.NamedEntity: return this.stateNamedEntity(e, t);
		}
	}
	stateNumericStart(e, t) {
		return t >= e.length ? -1 : (e.charCodeAt(t) | TO_LOWER_BIT) === CharCodes.LOWER_X ? (this.state = EntityDecoderState.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = EntityDecoderState.NumericDecimal, this.stateNumericDecimal(e, t));
	}
	addToNumericResult(e, t, n, r) {
		if (t !== n) {
			let i = n - t;
			this.result = this.result * r ** +i + Number.parseInt(e.substr(t, i), r), this.consumed += i;
		}
	}
	stateNumericHex(e, t) {
		let n = t;
		for (; t < e.length;) {
			let r = e.charCodeAt(t);
			if (isNumber(r) || isHexadecimalCharacter(r)) t += 1;
			else return this.addToNumericResult(e, n, t, 16), this.emitNumericEntity(r, 3);
		}
		return this.addToNumericResult(e, n, t, 16), -1;
	}
	stateNumericDecimal(e, t) {
		let n = t;
		for (; t < e.length;) {
			let r = e.charCodeAt(t);
			if (isNumber(r)) t += 1;
			else return this.addToNumericResult(e, n, t, 10), this.emitNumericEntity(r, 2);
		}
		return this.addToNumericResult(e, n, t, 10), -1;
	}
	emitNumericEntity(e, t) {
		var n;
		if (this.consumed <= t) return (n = this.errors) == null || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
		if (e === CharCodes.SEMI) this.consumed += 1;
		else if (this.decodeMode === DecodingMode.Strict) return 0;
		return this.emitCodePoint(replaceCodePoint(this.result), this.consumed), this.errors && (e !== CharCodes.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
	}
	stateNamedEntity(e, t) {
		let { decodeTree: n } = this, r = n[this.treeIndex], i = (r & BinTrieFlags.VALUE_LENGTH) >> 14;
		for (; t < e.length; t++, this.excess++) {
			let a = e.charCodeAt(t);
			if (this.treeIndex = determineBranch(n, r, this.treeIndex + Math.max(1, i), a), this.treeIndex < 0) return this.result === 0 || this.decodeMode === DecodingMode.Attribute && (i === 0 || isEntityInAttributeInvalidEnd(a)) ? 0 : this.emitNotTerminatedNamedEntity();
			if (r = n[this.treeIndex], i = (r & BinTrieFlags.VALUE_LENGTH) >> 14, i !== 0) {
				if (a === CharCodes.SEMI) return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
				this.decodeMode !== DecodingMode.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
			}
		}
		return -1;
	}
	emitNotTerminatedNamedEntity() {
		var e;
		let { result: t, decodeTree: n } = this, r = (n[t] & BinTrieFlags.VALUE_LENGTH) >> 14;
		return this.emitNamedEntityData(t, r, this.consumed), (e = this.errors) == null || e.missingSemicolonAfterCharacterReference(), this.consumed;
	}
	emitNamedEntityData(e, t, n) {
		let { decodeTree: r } = this;
		return this.emitCodePoint(t === 1 ? r[e] & ~BinTrieFlags.VALUE_LENGTH : r[e + 1], n), t === 3 && this.emitCodePoint(r[e + 2], n), n;
	}
	end() {
		var e;
		switch (this.state) {
			case EntityDecoderState.NamedEntity: return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
			case EntityDecoderState.NumericDecimal: return this.emitNumericEntity(0, 2);
			case EntityDecoderState.NumericHex: return this.emitNumericEntity(0, 3);
			case EntityDecoderState.NumericStart: return (e = this.errors) == null || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
			case EntityDecoderState.EntityStart: return 0;
		}
	}
};
function determineBranch(e, t, n, r) {
	let i = (t & BinTrieFlags.BRANCH_LENGTH) >> 7, a = t & BinTrieFlags.JUMP_TABLE;
	if (i === 0) return a !== 0 && r === a ? n : -1;
	if (a) {
		let t = r - a;
		return t < 0 || t >= i ? -1 : e[n + t] - 1;
	}
	let o = n, c = o + i - 1;
	for (; o <= c;) {
		let t = o + c >>> 1, n = e[t];
		if (n < r) o = t + 1;
		else if (n > r) c = t - 1;
		else return e[t + i];
	}
	return -1;
}
var NS;
(function(e) {
	e.HTML = "http://www.w3.org/1999/xhtml", e.MATHML = "http://www.w3.org/1998/Math/MathML", e.SVG = "http://www.w3.org/2000/svg", e.XLINK = "http://www.w3.org/1999/xlink", e.XML = "http://www.w3.org/XML/1998/namespace", e.XMLNS = "http://www.w3.org/2000/xmlns/";
})(NS ||= {});
var ATTRS;
(function(e) {
	e.TYPE = "type", e.ACTION = "action", e.ENCODING = "encoding", e.PROMPT = "prompt", e.NAME = "name", e.COLOR = "color", e.FACE = "face", e.SIZE = "size";
})(ATTRS ||= {});
var DOCUMENT_MODE;
(function(e) {
	e.NO_QUIRKS = "no-quirks", e.QUIRKS = "quirks", e.LIMITED_QUIRKS = "limited-quirks";
})(DOCUMENT_MODE ||= {});
var TAG_NAMES;
(function(e) {
	e.A = "a", e.ADDRESS = "address", e.ANNOTATION_XML = "annotation-xml", e.APPLET = "applet", e.AREA = "area", e.ARTICLE = "article", e.ASIDE = "aside", e.B = "b", e.BASE = "base", e.BASEFONT = "basefont", e.BGSOUND = "bgsound", e.BIG = "big", e.BLOCKQUOTE = "blockquote", e.BODY = "body", e.BR = "br", e.BUTTON = "button", e.CAPTION = "caption", e.CENTER = "center", e.CODE = "code", e.COL = "col", e.COLGROUP = "colgroup", e.DD = "dd", e.DESC = "desc", e.DETAILS = "details", e.DIALOG = "dialog", e.DIR = "dir", e.DIV = "div", e.DL = "dl", e.DT = "dt", e.EM = "em", e.EMBED = "embed", e.FIELDSET = "fieldset", e.FIGCAPTION = "figcaption", e.FIGURE = "figure", e.FONT = "font", e.FOOTER = "footer", e.FOREIGN_OBJECT = "foreignObject", e.FORM = "form", e.FRAME = "frame", e.FRAMESET = "frameset", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.HEAD = "head", e.HEADER = "header", e.HGROUP = "hgroup", e.HR = "hr", e.HTML = "html", e.I = "i", e.IMG = "img", e.IMAGE = "image", e.INPUT = "input", e.IFRAME = "iframe", e.KEYGEN = "keygen", e.LABEL = "label", e.LI = "li", e.LINK = "link", e.LISTING = "listing", e.MAIN = "main", e.MALIGNMARK = "malignmark", e.MARQUEE = "marquee", e.MATH = "math", e.MENU = "menu", e.META = "meta", e.MGLYPH = "mglyph", e.MI = "mi", e.MO = "mo", e.MN = "mn", e.MS = "ms", e.MTEXT = "mtext", e.NAV = "nav", e.NOBR = "nobr", e.NOFRAMES = "noframes", e.NOEMBED = "noembed", e.NOSCRIPT = "noscript", e.OBJECT = "object", e.OL = "ol", e.OPTGROUP = "optgroup", e.OPTION = "option", e.P = "p", e.PARAM = "param", e.PLAINTEXT = "plaintext", e.PRE = "pre", e.RB = "rb", e.RP = "rp", e.RT = "rt", e.RTC = "rtc", e.RUBY = "ruby", e.S = "s", e.SCRIPT = "script", e.SEARCH = "search", e.SECTION = "section", e.SELECT = "select", e.SOURCE = "source", e.SMALL = "small", e.SPAN = "span", e.STRIKE = "strike", e.STRONG = "strong", e.STYLE = "style", e.SUB = "sub", e.SUMMARY = "summary", e.SUP = "sup", e.TABLE = "table", e.TBODY = "tbody", e.TEMPLATE = "template", e.TEXTAREA = "textarea", e.TFOOT = "tfoot", e.TD = "td", e.TH = "th", e.THEAD = "thead", e.TITLE = "title", e.TR = "tr", e.TRACK = "track", e.TT = "tt", e.U = "u", e.UL = "ul", e.SVG = "svg", e.VAR = "var", e.WBR = "wbr", e.XMP = "xmp";
})(TAG_NAMES ||= {});
var TAG_ID;
(function(e) {
	e[e.UNKNOWN = 0] = "UNKNOWN", e[e.A = 1] = "A", e[e.ADDRESS = 2] = "ADDRESS", e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML", e[e.APPLET = 4] = "APPLET", e[e.AREA = 5] = "AREA", e[e.ARTICLE = 6] = "ARTICLE", e[e.ASIDE = 7] = "ASIDE", e[e.B = 8] = "B", e[e.BASE = 9] = "BASE", e[e.BASEFONT = 10] = "BASEFONT", e[e.BGSOUND = 11] = "BGSOUND", e[e.BIG = 12] = "BIG", e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE", e[e.BODY = 14] = "BODY", e[e.BR = 15] = "BR", e[e.BUTTON = 16] = "BUTTON", e[e.CAPTION = 17] = "CAPTION", e[e.CENTER = 18] = "CENTER", e[e.CODE = 19] = "CODE", e[e.COL = 20] = "COL", e[e.COLGROUP = 21] = "COLGROUP", e[e.DD = 22] = "DD", e[e.DESC = 23] = "DESC", e[e.DETAILS = 24] = "DETAILS", e[e.DIALOG = 25] = "DIALOG", e[e.DIR = 26] = "DIR", e[e.DIV = 27] = "DIV", e[e.DL = 28] = "DL", e[e.DT = 29] = "DT", e[e.EM = 30] = "EM", e[e.EMBED = 31] = "EMBED", e[e.FIELDSET = 32] = "FIELDSET", e[e.FIGCAPTION = 33] = "FIGCAPTION", e[e.FIGURE = 34] = "FIGURE", e[e.FONT = 35] = "FONT", e[e.FOOTER = 36] = "FOOTER", e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e[e.FORM = 38] = "FORM", e[e.FRAME = 39] = "FRAME", e[e.FRAMESET = 40] = "FRAMESET", e[e.H1 = 41] = "H1", e[e.H2 = 42] = "H2", e[e.H3 = 43] = "H3", e[e.H4 = 44] = "H4", e[e.H5 = 45] = "H5", e[e.H6 = 46] = "H6", e[e.HEAD = 47] = "HEAD", e[e.HEADER = 48] = "HEADER", e[e.HGROUP = 49] = "HGROUP", e[e.HR = 50] = "HR", e[e.HTML = 51] = "HTML", e[e.I = 52] = "I", e[e.IMG = 53] = "IMG", e[e.IMAGE = 54] = "IMAGE", e[e.INPUT = 55] = "INPUT", e[e.IFRAME = 56] = "IFRAME", e[e.KEYGEN = 57] = "KEYGEN", e[e.LABEL = 58] = "LABEL", e[e.LI = 59] = "LI", e[e.LINK = 60] = "LINK", e[e.LISTING = 61] = "LISTING", e[e.MAIN = 62] = "MAIN", e[e.MALIGNMARK = 63] = "MALIGNMARK", e[e.MARQUEE = 64] = "MARQUEE", e[e.MATH = 65] = "MATH", e[e.MENU = 66] = "MENU", e[e.META = 67] = "META", e[e.MGLYPH = 68] = "MGLYPH", e[e.MI = 69] = "MI", e[e.MO = 70] = "MO", e[e.MN = 71] = "MN", e[e.MS = 72] = "MS", e[e.MTEXT = 73] = "MTEXT", e[e.NAV = 74] = "NAV", e[e.NOBR = 75] = "NOBR", e[e.NOFRAMES = 76] = "NOFRAMES", e[e.NOEMBED = 77] = "NOEMBED", e[e.NOSCRIPT = 78] = "NOSCRIPT", e[e.OBJECT = 79] = "OBJECT", e[e.OL = 80] = "OL", e[e.OPTGROUP = 81] = "OPTGROUP", e[e.OPTION = 82] = "OPTION", e[e.P = 83] = "P", e[e.PARAM = 84] = "PARAM", e[e.PLAINTEXT = 85] = "PLAINTEXT", e[e.PRE = 86] = "PRE", e[e.RB = 87] = "RB", e[e.RP = 88] = "RP", e[e.RT = 89] = "RT", e[e.RTC = 90] = "RTC", e[e.RUBY = 91] = "RUBY", e[e.S = 92] = "S", e[e.SCRIPT = 93] = "SCRIPT", e[e.SEARCH = 94] = "SEARCH", e[e.SECTION = 95] = "SECTION", e[e.SELECT = 96] = "SELECT", e[e.SOURCE = 97] = "SOURCE", e[e.SMALL = 98] = "SMALL", e[e.SPAN = 99] = "SPAN", e[e.STRIKE = 100] = "STRIKE", e[e.STRONG = 101] = "STRONG", e[e.STYLE = 102] = "STYLE", e[e.SUB = 103] = "SUB", e[e.SUMMARY = 104] = "SUMMARY", e[e.SUP = 105] = "SUP", e[e.TABLE = 106] = "TABLE", e[e.TBODY = 107] = "TBODY", e[e.TEMPLATE = 108] = "TEMPLATE", e[e.TEXTAREA = 109] = "TEXTAREA", e[e.TFOOT = 110] = "TFOOT", e[e.TD = 111] = "TD", e[e.TH = 112] = "TH", e[e.THEAD = 113] = "THEAD", e[e.TITLE = 114] = "TITLE", e[e.TR = 115] = "TR", e[e.TRACK = 116] = "TRACK", e[e.TT = 117] = "TT", e[e.U = 118] = "U", e[e.UL = 119] = "UL", e[e.SVG = 120] = "SVG", e[e.VAR = 121] = "VAR", e[e.WBR = 122] = "WBR", e[e.XMP = 123] = "XMP";
})(TAG_ID ||= {});
var TAG_NAME_TO_ID = new Map([
	[TAG_NAMES.A, TAG_ID.A],
	[TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
	[TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
	[TAG_NAMES.APPLET, TAG_ID.APPLET],
	[TAG_NAMES.AREA, TAG_ID.AREA],
	[TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
	[TAG_NAMES.ASIDE, TAG_ID.ASIDE],
	[TAG_NAMES.B, TAG_ID.B],
	[TAG_NAMES.BASE, TAG_ID.BASE],
	[TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
	[TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
	[TAG_NAMES.BIG, TAG_ID.BIG],
	[TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
	[TAG_NAMES.BODY, TAG_ID.BODY],
	[TAG_NAMES.BR, TAG_ID.BR],
	[TAG_NAMES.BUTTON, TAG_ID.BUTTON],
	[TAG_NAMES.CAPTION, TAG_ID.CAPTION],
	[TAG_NAMES.CENTER, TAG_ID.CENTER],
	[TAG_NAMES.CODE, TAG_ID.CODE],
	[TAG_NAMES.COL, TAG_ID.COL],
	[TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
	[TAG_NAMES.DD, TAG_ID.DD],
	[TAG_NAMES.DESC, TAG_ID.DESC],
	[TAG_NAMES.DETAILS, TAG_ID.DETAILS],
	[TAG_NAMES.DIALOG, TAG_ID.DIALOG],
	[TAG_NAMES.DIR, TAG_ID.DIR],
	[TAG_NAMES.DIV, TAG_ID.DIV],
	[TAG_NAMES.DL, TAG_ID.DL],
	[TAG_NAMES.DT, TAG_ID.DT],
	[TAG_NAMES.EM, TAG_ID.EM],
	[TAG_NAMES.EMBED, TAG_ID.EMBED],
	[TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
	[TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
	[TAG_NAMES.FIGURE, TAG_ID.FIGURE],
	[TAG_NAMES.FONT, TAG_ID.FONT],
	[TAG_NAMES.FOOTER, TAG_ID.FOOTER],
	[TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
	[TAG_NAMES.FORM, TAG_ID.FORM],
	[TAG_NAMES.FRAME, TAG_ID.FRAME],
	[TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
	[TAG_NAMES.H1, TAG_ID.H1],
	[TAG_NAMES.H2, TAG_ID.H2],
	[TAG_NAMES.H3, TAG_ID.H3],
	[TAG_NAMES.H4, TAG_ID.H4],
	[TAG_NAMES.H5, TAG_ID.H5],
	[TAG_NAMES.H6, TAG_ID.H6],
	[TAG_NAMES.HEAD, TAG_ID.HEAD],
	[TAG_NAMES.HEADER, TAG_ID.HEADER],
	[TAG_NAMES.HGROUP, TAG_ID.HGROUP],
	[TAG_NAMES.HR, TAG_ID.HR],
	[TAG_NAMES.HTML, TAG_ID.HTML],
	[TAG_NAMES.I, TAG_ID.I],
	[TAG_NAMES.IMG, TAG_ID.IMG],
	[TAG_NAMES.IMAGE, TAG_ID.IMAGE],
	[TAG_NAMES.INPUT, TAG_ID.INPUT],
	[TAG_NAMES.IFRAME, TAG_ID.IFRAME],
	[TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
	[TAG_NAMES.LABEL, TAG_ID.LABEL],
	[TAG_NAMES.LI, TAG_ID.LI],
	[TAG_NAMES.LINK, TAG_ID.LINK],
	[TAG_NAMES.LISTING, TAG_ID.LISTING],
	[TAG_NAMES.MAIN, TAG_ID.MAIN],
	[TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
	[TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
	[TAG_NAMES.MATH, TAG_ID.MATH],
	[TAG_NAMES.MENU, TAG_ID.MENU],
	[TAG_NAMES.META, TAG_ID.META],
	[TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
	[TAG_NAMES.MI, TAG_ID.MI],
	[TAG_NAMES.MO, TAG_ID.MO],
	[TAG_NAMES.MN, TAG_ID.MN],
	[TAG_NAMES.MS, TAG_ID.MS],
	[TAG_NAMES.MTEXT, TAG_ID.MTEXT],
	[TAG_NAMES.NAV, TAG_ID.NAV],
	[TAG_NAMES.NOBR, TAG_ID.NOBR],
	[TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
	[TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
	[TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
	[TAG_NAMES.OBJECT, TAG_ID.OBJECT],
	[TAG_NAMES.OL, TAG_ID.OL],
	[TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
	[TAG_NAMES.OPTION, TAG_ID.OPTION],
	[TAG_NAMES.P, TAG_ID.P],
	[TAG_NAMES.PARAM, TAG_ID.PARAM],
	[TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
	[TAG_NAMES.PRE, TAG_ID.PRE],
	[TAG_NAMES.RB, TAG_ID.RB],
	[TAG_NAMES.RP, TAG_ID.RP],
	[TAG_NAMES.RT, TAG_ID.RT],
	[TAG_NAMES.RTC, TAG_ID.RTC],
	[TAG_NAMES.RUBY, TAG_ID.RUBY],
	[TAG_NAMES.S, TAG_ID.S],
	[TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
	[TAG_NAMES.SEARCH, TAG_ID.SEARCH],
	[TAG_NAMES.SECTION, TAG_ID.SECTION],
	[TAG_NAMES.SELECT, TAG_ID.SELECT],
	[TAG_NAMES.SOURCE, TAG_ID.SOURCE],
	[TAG_NAMES.SMALL, TAG_ID.SMALL],
	[TAG_NAMES.SPAN, TAG_ID.SPAN],
	[TAG_NAMES.STRIKE, TAG_ID.STRIKE],
	[TAG_NAMES.STRONG, TAG_ID.STRONG],
	[TAG_NAMES.STYLE, TAG_ID.STYLE],
	[TAG_NAMES.SUB, TAG_ID.SUB],
	[TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
	[TAG_NAMES.SUP, TAG_ID.SUP],
	[TAG_NAMES.TABLE, TAG_ID.TABLE],
	[TAG_NAMES.TBODY, TAG_ID.TBODY],
	[TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
	[TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
	[TAG_NAMES.TFOOT, TAG_ID.TFOOT],
	[TAG_NAMES.TD, TAG_ID.TD],
	[TAG_NAMES.TH, TAG_ID.TH],
	[TAG_NAMES.THEAD, TAG_ID.THEAD],
	[TAG_NAMES.TITLE, TAG_ID.TITLE],
	[TAG_NAMES.TR, TAG_ID.TR],
	[TAG_NAMES.TRACK, TAG_ID.TRACK],
	[TAG_NAMES.TT, TAG_ID.TT],
	[TAG_NAMES.U, TAG_ID.U],
	[TAG_NAMES.UL, TAG_ID.UL],
	[TAG_NAMES.SVG, TAG_ID.SVG],
	[TAG_NAMES.VAR, TAG_ID.VAR],
	[TAG_NAMES.WBR, TAG_ID.WBR],
	[TAG_NAMES.XMP, TAG_ID.XMP]
]);
function getTagID(e) {
	return TAG_NAME_TO_ID.get(e) ?? TAG_ID.UNKNOWN;
}
var $ = TAG_ID;
const SPECIAL_ELEMENTS = {
	[NS.HTML]: new Set([
		$.ADDRESS,
		$.APPLET,
		$.AREA,
		$.ARTICLE,
		$.ASIDE,
		$.BASE,
		$.BASEFONT,
		$.BGSOUND,
		$.BLOCKQUOTE,
		$.BODY,
		$.BR,
		$.BUTTON,
		$.CAPTION,
		$.CENTER,
		$.COL,
		$.COLGROUP,
		$.DD,
		$.DETAILS,
		$.DIR,
		$.DIV,
		$.DL,
		$.DT,
		$.EMBED,
		$.FIELDSET,
		$.FIGCAPTION,
		$.FIGURE,
		$.FOOTER,
		$.FORM,
		$.FRAME,
		$.FRAMESET,
		$.H1,
		$.H2,
		$.H3,
		$.H4,
		$.H5,
		$.H6,
		$.HEAD,
		$.HEADER,
		$.HGROUP,
		$.HR,
		$.HTML,
		$.IFRAME,
		$.IMG,
		$.INPUT,
		$.LI,
		$.LINK,
		$.LISTING,
		$.MAIN,
		$.MARQUEE,
		$.MENU,
		$.META,
		$.NAV,
		$.NOEMBED,
		$.NOFRAMES,
		$.NOSCRIPT,
		$.OBJECT,
		$.OL,
		$.P,
		$.PARAM,
		$.PLAINTEXT,
		$.PRE,
		$.SCRIPT,
		$.SECTION,
		$.SELECT,
		$.SOURCE,
		$.STYLE,
		$.SUMMARY,
		$.TABLE,
		$.TBODY,
		$.TD,
		$.TEMPLATE,
		$.TEXTAREA,
		$.TFOOT,
		$.TH,
		$.THEAD,
		$.TITLE,
		$.TR,
		$.TRACK,
		$.UL,
		$.WBR,
		$.XMP
	]),
	[NS.MATHML]: new Set([
		$.MI,
		$.MO,
		$.MN,
		$.MS,
		$.MTEXT,
		$.ANNOTATION_XML
	]),
	[NS.SVG]: new Set([
		$.TITLE,
		$.FOREIGN_OBJECT,
		$.DESC
	]),
	[NS.XLINK]: /* @__PURE__ */ new Set(),
	[NS.XML]: /* @__PURE__ */ new Set(),
	[NS.XMLNS]: /* @__PURE__ */ new Set()
}, NUMBERED_HEADERS = new Set([
	$.H1,
	$.H2,
	$.H3,
	$.H4,
	$.H5,
	$.H6
]);
new Set([
	TAG_NAMES.STYLE,
	TAG_NAMES.SCRIPT,
	TAG_NAMES.XMP,
	TAG_NAMES.IFRAME,
	TAG_NAMES.NOEMBED,
	TAG_NAMES.NOFRAMES,
	TAG_NAMES.PLAINTEXT
]);
var State;
(function(e) {
	e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(State ||= {});
const TokenizerMode = {
	DATA: State.DATA,
	RCDATA: State.RCDATA,
	RAWTEXT: State.RAWTEXT,
	SCRIPT_DATA: State.SCRIPT_DATA,
	PLAINTEXT: State.PLAINTEXT,
	CDATA_SECTION: State.CDATA_SECTION
};
function isAsciiDigit(e) {
	return e >= CODE_POINTS.DIGIT_0 && e <= CODE_POINTS.DIGIT_9;
}
function isAsciiUpper(e) {
	return e >= CODE_POINTS.LATIN_CAPITAL_A && e <= CODE_POINTS.LATIN_CAPITAL_Z;
}
function isAsciiLower(e) {
	return e >= CODE_POINTS.LATIN_SMALL_A && e <= CODE_POINTS.LATIN_SMALL_Z;
}
function isAsciiLetter(e) {
	return isAsciiLower(e) || isAsciiUpper(e);
}
function isAsciiAlphaNumeric(e) {
	return isAsciiLetter(e) || isAsciiDigit(e);
}
function toAsciiLower(e) {
	return e + 32;
}
function isWhitespace(e) {
	return e === CODE_POINTS.SPACE || e === CODE_POINTS.LINE_FEED || e === CODE_POINTS.TABULATION || e === CODE_POINTS.FORM_FEED;
}
function isScriptDataDoubleEscapeSequenceEnd(e) {
	return isWhitespace(e) || e === CODE_POINTS.SOLIDUS || e === CODE_POINTS.GREATER_THAN_SIGN;
}
function getErrorForNumericCharacterReference(e) {
	return e === CODE_POINTS.NULL ? ERR.nullCharacterReference : e > 1114111 ? ERR.characterReferenceOutsideUnicodeRange : isSurrogate(e) ? ERR.surrogateCharacterReference : isUndefinedCodePoint(e) ? ERR.noncharacterCharacterReference : isControlCodePoint(e) || e === CODE_POINTS.CARRIAGE_RETURN ? ERR.controlCharacterReference : null;
}
var Tokenizer = class {
	constructor(e, t) {
		this.options = e, this.handler = t, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = State.DATA, this.returnState = State.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = {
			name: "",
			value: ""
		}, this.preprocessor = new Preprocessor(t), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new EntityDecoder(htmlDecodeTree, (e, t) => {
			this.preprocessor.pos = this.entityStartPos + t - 1, this._flushCodePointConsumedAsCharacterReference(e);
		}, t.onParseError ? {
			missingSemicolonAfterCharacterReference: () => {
				this._err(ERR.missingSemicolonAfterCharacterReference, 1);
			},
			absenceOfDigitsInNumericCharacterReference: (e) => {
				this._err(ERR.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + e);
			},
			validateNumericCharacterReference: (e) => {
				let t = getErrorForNumericCharacterReference(e);
				t && this._err(t, 1);
			}
		} : void 0);
	}
	_err(e, t = 0) {
		var n, r;
		(r = (n = this.handler).onParseError) == null || r.call(n, this.preprocessor.getError(e, t));
	}
	getCurrentLocation(e) {
		return this.options.sourceCodeLocationInfo ? {
			startLine: this.preprocessor.line,
			startCol: this.preprocessor.col - e,
			startOffset: this.preprocessor.offset - e,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		} : null;
	}
	_runParsingLoop() {
		if (!this.inLoop) {
			for (this.inLoop = !0; this.active && !this.paused;) {
				this.consumedAfterSnapshot = 0;
				let e = this._consume();
				this._ensureHibernation() || this._callState(e);
			}
			this.inLoop = !1;
		}
	}
	pause() {
		this.paused = !0;
	}
	resume(e) {
		if (!this.paused) throw Error("Parser was already resumed");
		this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || e?.());
	}
	write(e, t, n) {
		this.active = !0, this.preprocessor.write(e, t), this._runParsingLoop(), this.paused || n?.();
	}
	insertHtmlAtCurrentPos(e) {
		this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(e), this._runParsingLoop();
	}
	_ensureHibernation() {
		return this.preprocessor.endOfChunkHit ? (this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = !1, !0) : !1;
	}
	_consume() {
		return this.consumedAfterSnapshot++, this.preprocessor.advance();
	}
	_advanceBy(e) {
		this.consumedAfterSnapshot += e;
		for (let t = 0; t < e; t++) this.preprocessor.advance();
	}
	_consumeSequenceIfMatch(e, t) {
		return this.preprocessor.startsWith(e, t) ? (this._advanceBy(e.length - 1), !0) : !1;
	}
	_createStartTagToken() {
		this.currentToken = {
			type: TokenType.START_TAG,
			tagName: "",
			tagID: TAG_ID.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(1)
		};
	}
	_createEndTagToken() {
		this.currentToken = {
			type: TokenType.END_TAG,
			tagName: "",
			tagID: TAG_ID.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(2)
		};
	}
	_createCommentToken(e) {
		this.currentToken = {
			type: TokenType.COMMENT,
			data: "",
			location: this.getCurrentLocation(e)
		};
	}
	_createDoctypeToken(e) {
		this.currentToken = {
			type: TokenType.DOCTYPE,
			name: e,
			forceQuirks: !1,
			publicId: null,
			systemId: null,
			location: this.currentLocation
		};
	}
	_createCharacterToken(e, t) {
		this.currentCharacterToken = {
			type: e,
			chars: t,
			location: this.currentLocation
		};
	}
	_createAttr(e) {
		this.currentAttr = {
			name: e,
			value: ""
		}, this.currentLocation = this.getCurrentLocation(0);
	}
	_leaveAttrName() {
		var e;
		let t = this.currentToken;
		if (getTokenAttr(t, this.currentAttr.name) === null) {
			if (t.attrs.push(this.currentAttr), t.location && this.currentLocation) {
				let n = (e = t.location).attrs ?? (e.attrs = Object.create(null));
				n[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
			}
		} else this._err(ERR.duplicateAttribute);
	}
	_leaveAttrValue() {
		this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
	}
	prepareToken(e) {
		this._emitCurrentCharacterToken(e.location), this.currentToken = null, e.location && (e.location.endLine = this.preprocessor.line, e.location.endCol = this.preprocessor.col + 1, e.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
	}
	emitCurrentTagToken() {
		let e = this.currentToken;
		this.prepareToken(e), e.tagID = getTagID(e.tagName), e.type === TokenType.START_TAG ? (this.lastStartTagName = e.tagName, this.handler.onStartTag(e)) : (e.attrs.length > 0 && this._err(ERR.endTagWithAttributes), e.selfClosing && this._err(ERR.endTagWithTrailingSolidus), this.handler.onEndTag(e)), this.preprocessor.dropParsedChunk();
	}
	emitCurrentComment(e) {
		this.prepareToken(e), this.handler.onComment(e), this.preprocessor.dropParsedChunk();
	}
	emitCurrentDoctype(e) {
		this.prepareToken(e), this.handler.onDoctype(e), this.preprocessor.dropParsedChunk();
	}
	_emitCurrentCharacterToken(e) {
		if (this.currentCharacterToken) {
			switch (e && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = e.startLine, this.currentCharacterToken.location.endCol = e.startCol, this.currentCharacterToken.location.endOffset = e.startOffset), this.currentCharacterToken.type) {
				case TokenType.CHARACTER:
					this.handler.onCharacter(this.currentCharacterToken);
					break;
				case TokenType.NULL_CHARACTER:
					this.handler.onNullCharacter(this.currentCharacterToken);
					break;
				case TokenType.WHITESPACE_CHARACTER:
					this.handler.onWhitespaceCharacter(this.currentCharacterToken);
					break;
			}
			this.currentCharacterToken = null;
		}
	}
	_emitEOFToken() {
		let e = this.getCurrentLocation(0);
		e && (e.endLine = e.startLine, e.endCol = e.startCol, e.endOffset = e.startOffset), this._emitCurrentCharacterToken(e), this.handler.onEof({
			type: TokenType.EOF,
			location: e
		}), this.active = !1;
	}
	_appendCharToCurrentCharacterToken(e, t) {
		if (this.currentCharacterToken) if (this.currentCharacterToken.type === e) {
			this.currentCharacterToken.chars += t;
			return;
		} else this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
		this._createCharacterToken(e, t);
	}
	_emitCodePoint(e) {
		let t = isWhitespace(e) ? TokenType.WHITESPACE_CHARACTER : e === CODE_POINTS.NULL ? TokenType.NULL_CHARACTER : TokenType.CHARACTER;
		this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e));
	}
	_emitChars(e) {
		this._appendCharToCurrentCharacterToken(TokenType.CHARACTER, e);
	}
	_startCharacterReference() {
		this.returnState = this.state, this.state = State.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? DecodingMode.Attribute : DecodingMode.Legacy);
	}
	_isCharacterReferenceInAttribute() {
		return this.returnState === State.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_UNQUOTED;
	}
	_flushCodePointConsumedAsCharacterReference(e) {
		this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(e) : this._emitCodePoint(e);
	}
	_callState(e) {
		switch (this.state) {
			case State.DATA:
				this._stateData(e);
				break;
			case State.RCDATA:
				this._stateRcdata(e);
				break;
			case State.RAWTEXT:
				this._stateRawtext(e);
				break;
			case State.SCRIPT_DATA:
				this._stateScriptData(e);
				break;
			case State.PLAINTEXT:
				this._statePlaintext(e);
				break;
			case State.TAG_OPEN:
				this._stateTagOpen(e);
				break;
			case State.END_TAG_OPEN:
				this._stateEndTagOpen(e);
				break;
			case State.TAG_NAME:
				this._stateTagName(e);
				break;
			case State.RCDATA_LESS_THAN_SIGN:
				this._stateRcdataLessThanSign(e);
				break;
			case State.RCDATA_END_TAG_OPEN:
				this._stateRcdataEndTagOpen(e);
				break;
			case State.RCDATA_END_TAG_NAME:
				this._stateRcdataEndTagName(e);
				break;
			case State.RAWTEXT_LESS_THAN_SIGN:
				this._stateRawtextLessThanSign(e);
				break;
			case State.RAWTEXT_END_TAG_OPEN:
				this._stateRawtextEndTagOpen(e);
				break;
			case State.RAWTEXT_END_TAG_NAME:
				this._stateRawtextEndTagName(e);
				break;
			case State.SCRIPT_DATA_LESS_THAN_SIGN:
				this._stateScriptDataLessThanSign(e);
				break;
			case State.SCRIPT_DATA_END_TAG_OPEN:
				this._stateScriptDataEndTagOpen(e);
				break;
			case State.SCRIPT_DATA_END_TAG_NAME:
				this._stateScriptDataEndTagName(e);
				break;
			case State.SCRIPT_DATA_ESCAPE_START:
				this._stateScriptDataEscapeStart(e);
				break;
			case State.SCRIPT_DATA_ESCAPE_START_DASH:
				this._stateScriptDataEscapeStartDash(e);
				break;
			case State.SCRIPT_DATA_ESCAPED:
				this._stateScriptDataEscaped(e);
				break;
			case State.SCRIPT_DATA_ESCAPED_DASH:
				this._stateScriptDataEscapedDash(e);
				break;
			case State.SCRIPT_DATA_ESCAPED_DASH_DASH:
				this._stateScriptDataEscapedDashDash(e);
				break;
			case State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataEscapedLessThanSign(e);
				break;
			case State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
				this._stateScriptDataEscapedEndTagOpen(e);
				break;
			case State.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
				this._stateScriptDataEscapedEndTagName(e);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPE_START:
				this._stateScriptDataDoubleEscapeStart(e);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED:
				this._stateScriptDataDoubleEscaped(e);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
				this._stateScriptDataDoubleEscapedDash(e);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
				this._stateScriptDataDoubleEscapedDashDash(e);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataDoubleEscapedLessThanSign(e);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPE_END:
				this._stateScriptDataDoubleEscapeEnd(e);
				break;
			case State.BEFORE_ATTRIBUTE_NAME:
				this._stateBeforeAttributeName(e);
				break;
			case State.ATTRIBUTE_NAME:
				this._stateAttributeName(e);
				break;
			case State.AFTER_ATTRIBUTE_NAME:
				this._stateAfterAttributeName(e);
				break;
			case State.BEFORE_ATTRIBUTE_VALUE:
				this._stateBeforeAttributeValue(e);
				break;
			case State.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
				this._stateAttributeValueDoubleQuoted(e);
				break;
			case State.ATTRIBUTE_VALUE_SINGLE_QUOTED:
				this._stateAttributeValueSingleQuoted(e);
				break;
			case State.ATTRIBUTE_VALUE_UNQUOTED:
				this._stateAttributeValueUnquoted(e);
				break;
			case State.AFTER_ATTRIBUTE_VALUE_QUOTED:
				this._stateAfterAttributeValueQuoted(e);
				break;
			case State.SELF_CLOSING_START_TAG:
				this._stateSelfClosingStartTag(e);
				break;
			case State.BOGUS_COMMENT:
				this._stateBogusComment(e);
				break;
			case State.MARKUP_DECLARATION_OPEN:
				this._stateMarkupDeclarationOpen(e);
				break;
			case State.COMMENT_START:
				this._stateCommentStart(e);
				break;
			case State.COMMENT_START_DASH:
				this._stateCommentStartDash(e);
				break;
			case State.COMMENT:
				this._stateComment(e);
				break;
			case State.COMMENT_LESS_THAN_SIGN:
				this._stateCommentLessThanSign(e);
				break;
			case State.COMMENT_LESS_THAN_SIGN_BANG:
				this._stateCommentLessThanSignBang(e);
				break;
			case State.COMMENT_LESS_THAN_SIGN_BANG_DASH:
				this._stateCommentLessThanSignBangDash(e);
				break;
			case State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
				this._stateCommentLessThanSignBangDashDash(e);
				break;
			case State.COMMENT_END_DASH:
				this._stateCommentEndDash(e);
				break;
			case State.COMMENT_END:
				this._stateCommentEnd(e);
				break;
			case State.COMMENT_END_BANG:
				this._stateCommentEndBang(e);
				break;
			case State.DOCTYPE:
				this._stateDoctype(e);
				break;
			case State.BEFORE_DOCTYPE_NAME:
				this._stateBeforeDoctypeName(e);
				break;
			case State.DOCTYPE_NAME:
				this._stateDoctypeName(e);
				break;
			case State.AFTER_DOCTYPE_NAME:
				this._stateAfterDoctypeName(e);
				break;
			case State.AFTER_DOCTYPE_PUBLIC_KEYWORD:
				this._stateAfterDoctypePublicKeyword(e);
				break;
			case State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateBeforeDoctypePublicIdentifier(e);
				break;
			case State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypePublicIdentifierDoubleQuoted(e);
				break;
			case State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypePublicIdentifierSingleQuoted(e);
				break;
			case State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateAfterDoctypePublicIdentifier(e);
				break;
			case State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
				this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
				break;
			case State.AFTER_DOCTYPE_SYSTEM_KEYWORD:
				this._stateAfterDoctypeSystemKeyword(e);
				break;
			case State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateBeforeDoctypeSystemIdentifier(e);
				break;
			case State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypeSystemIdentifierDoubleQuoted(e);
				break;
			case State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypeSystemIdentifierSingleQuoted(e);
				break;
			case State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateAfterDoctypeSystemIdentifier(e);
				break;
			case State.BOGUS_DOCTYPE:
				this._stateBogusDoctype(e);
				break;
			case State.CDATA_SECTION:
				this._stateCdataSection(e);
				break;
			case State.CDATA_SECTION_BRACKET:
				this._stateCdataSectionBracket(e);
				break;
			case State.CDATA_SECTION_END:
				this._stateCdataSectionEnd(e);
				break;
			case State.CHARACTER_REFERENCE:
				this._stateCharacterReference();
				break;
			case State.AMBIGUOUS_AMPERSAND:
				this._stateAmbiguousAmpersand(e);
				break;
			default: throw Error("Unknown state");
		}
	}
	_stateData(e) {
		switch (e) {
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.TAG_OPEN;
				break;
			case CODE_POINTS.AMPERSAND:
				this._startCharacterReference();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._emitCodePoint(e);
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRcdata(e) {
		switch (e) {
			case CODE_POINTS.AMPERSAND:
				this._startCharacterReference();
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.RCDATA_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRawtext(e) {
		switch (e) {
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.RAWTEXT_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptData(e) {
		switch (e) {
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_statePlaintext(e) {
		switch (e) {
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateTagOpen(e) {
		if (isAsciiLetter(e)) this._createStartTagToken(), this.state = State.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case CODE_POINTS.EXCLAMATION_MARK:
				this.state = State.MARKUP_DECLARATION_OPEN;
				break;
			case CODE_POINTS.SOLIDUS:
				this.state = State.END_TAG_OPEN;
				break;
			case CODE_POINTS.QUESTION_MARK:
				this._err(ERR.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = State.BOGUS_COMMENT, this._stateBogusComment(e);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
				break;
			default: this._err(ERR.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = State.DATA, this._stateData(e);
		}
	}
	_stateEndTagOpen(e) {
		if (isAsciiLetter(e)) this._createEndTagToken(), this.state = State.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingEndTagName), this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
				break;
			default: this._err(ERR.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = State.BOGUS_COMMENT, this._stateBogusComment(e);
		}
	}
	_stateTagName(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_ATTRIBUTE_NAME;
				break;
			case CODE_POINTS.SOLIDUS:
				this.state = State.SELF_CLOSING_START_TAG;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA, this.emitCurrentTagToken();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), t.tagName += "�";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag), this._emitEOFToken();
				break;
			default: t.tagName += String.fromCodePoint(isAsciiUpper(e) ? toAsciiLower(e) : e);
		}
	}
	_stateRcdataLessThanSign(e) {
		e === CODE_POINTS.SOLIDUS ? this.state = State.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = State.RCDATA, this._stateRcdata(e));
	}
	_stateRcdataEndTagOpen(e) {
		isAsciiLetter(e) ? (this.state = State.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(e)) : (this._emitChars("</"), this.state = State.RCDATA, this._stateRcdata(e));
	}
	handleSpecialEndTag(e) {
		if (!this.preprocessor.startsWith(this.lastStartTagName, !1)) return !this._ensureHibernation();
		this._createEndTagToken();
		let t = this.currentToken;
		switch (t.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: return this._advanceBy(this.lastStartTagName.length), this.state = State.BEFORE_ATTRIBUTE_NAME, !1;
			case CODE_POINTS.SOLIDUS: return this._advanceBy(this.lastStartTagName.length), this.state = State.SELF_CLOSING_START_TAG, !1;
			case CODE_POINTS.GREATER_THAN_SIGN: return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = State.DATA, !1;
			default: return !this._ensureHibernation();
		}
	}
	_stateRcdataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = State.RCDATA, this._stateRcdata(e));
	}
	_stateRawtextLessThanSign(e) {
		e === CODE_POINTS.SOLIDUS ? this.state = State.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = State.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagOpen(e) {
		isAsciiLetter(e) ? (this.state = State.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(e)) : (this._emitChars("</"), this.state = State.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = State.RAWTEXT, this._stateRawtext(e));
	}
	_stateScriptDataLessThanSign(e) {
		switch (e) {
			case CODE_POINTS.SOLIDUS:
				this.state = State.SCRIPT_DATA_END_TAG_OPEN;
				break;
			case CODE_POINTS.EXCLAMATION_MARK:
				this.state = State.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
				break;
			default: this._emitChars("<"), this.state = State.SCRIPT_DATA, this._stateScriptData(e);
		}
	}
	_stateScriptDataEndTagOpen(e) {
		isAsciiLetter(e) ? (this.state = State.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(e)) : (this._emitChars("</"), this.state = State.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = State.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStart(e) {
		e === CODE_POINTS.HYPHEN_MINUS ? (this.state = State.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = State.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStartDash(e) {
		e === CODE_POINTS.HYPHEN_MINUS ? (this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = State.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscaped(e) {
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDash(e) {
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.state = State.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = State.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDashDash(e) {
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.SCRIPT_DATA, this._emitChars(">");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.state = State.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = State.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedLessThanSign(e) {
		e === CODE_POINTS.SOLIDUS ? this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : isAsciiLetter(e) ? (this._emitChars("<"), this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(e)) : (this._emitChars("<"), this.state = State.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagOpen(e) {
		isAsciiLetter(e) ? (this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(e)) : (this._emitChars("</"), this.state = State.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = State.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscapeStart(e) {
		if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, !1) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < SEQUENCES.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
		} else this._ensureHibernation() || (this.state = State.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscaped(e) {
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDash(e) {
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDashDash(e) {
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.SCRIPT_DATA, this._emitChars(">");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedLessThanSign(e) {
		e === CODE_POINTS.SOLIDUS ? (this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateScriptDataDoubleEscapeEnd(e) {
		if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, !1) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < SEQUENCES.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = State.SCRIPT_DATA_ESCAPED;
		} else this._ensureHibernation() || (this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateBeforeAttributeName(e) {
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.SOLIDUS:
			case CODE_POINTS.GREATER_THAN_SIGN:
			case CODE_POINTS.EOF:
				this.state = State.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case CODE_POINTS.EQUALS_SIGN:
				this._err(ERR.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = State.ATTRIBUTE_NAME;
				break;
			default: this._createAttr(""), this.state = State.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateAttributeName(e) {
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
			case CODE_POINTS.SOLIDUS:
			case CODE_POINTS.GREATER_THAN_SIGN:
			case CODE_POINTS.EOF:
				this._leaveAttrName(), this.state = State.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case CODE_POINTS.EQUALS_SIGN:
				this._leaveAttrName(), this.state = State.BEFORE_ATTRIBUTE_VALUE;
				break;
			case CODE_POINTS.QUOTATION_MARK:
			case CODE_POINTS.APOSTROPHE:
			case CODE_POINTS.LESS_THAN_SIGN:
				this._err(ERR.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(e);
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.currentAttr.name += "�";
				break;
			default: this.currentAttr.name += String.fromCodePoint(isAsciiUpper(e) ? toAsciiLower(e) : e);
		}
	}
	_stateAfterAttributeName(e) {
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.SOLIDUS:
				this.state = State.SELF_CLOSING_START_TAG;
				break;
			case CODE_POINTS.EQUALS_SIGN:
				this.state = State.BEFORE_ATTRIBUTE_VALUE;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA, this.emitCurrentTagToken();
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag), this._emitEOFToken();
				break;
			default: this._createAttr(""), this.state = State.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateBeforeAttributeValue(e) {
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this.state = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingAttributeValue), this.state = State.DATA, this.emitCurrentTagToken();
				break;
			default: this.state = State.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(e);
		}
	}
	_stateAttributeValueDoubleQuoted(e) {
		switch (e) {
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case CODE_POINTS.AMPERSAND:
				this._startCharacterReference();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueSingleQuoted(e) {
		switch (e) {
			case CODE_POINTS.APOSTROPHE:
				this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case CODE_POINTS.AMPERSAND:
				this._startCharacterReference();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueUnquoted(e) {
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this._leaveAttrValue(), this.state = State.BEFORE_ATTRIBUTE_NAME;
				break;
			case CODE_POINTS.AMPERSAND:
				this._startCharacterReference();
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = State.DATA, this.emitCurrentTagToken();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case CODE_POINTS.QUOTATION_MARK:
			case CODE_POINTS.APOSTROPHE:
			case CODE_POINTS.LESS_THAN_SIGN:
			case CODE_POINTS.EQUALS_SIGN:
			case CODE_POINTS.GRAVE_ACCENT:
				this._err(ERR.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(e);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAfterAttributeValueQuoted(e) {
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this._leaveAttrValue(), this.state = State.BEFORE_ATTRIBUTE_NAME;
				break;
			case CODE_POINTS.SOLIDUS:
				this._leaveAttrValue(), this.state = State.SELF_CLOSING_START_TAG;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = State.DATA, this.emitCurrentTagToken();
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag), this._emitEOFToken();
				break;
			default: this._err(ERR.missingWhitespaceBetweenAttributes), this.state = State.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateSelfClosingStartTag(e) {
		switch (e) {
			case CODE_POINTS.GREATER_THAN_SIGN: {
				let e = this.currentToken;
				e.selfClosing = !0, this.state = State.DATA, this.emitCurrentTagToken();
				break;
			}
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag), this._emitEOFToken();
				break;
			default: this._err(ERR.unexpectedSolidusInTag), this.state = State.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateBogusComment(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA, this.emitCurrentComment(t);
				break;
			case CODE_POINTS.EOF:
				this.emitCurrentComment(t), this._emitEOFToken();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), t.data += "�";
				break;
			default: t.data += String.fromCodePoint(e);
		}
	}
	_stateMarkupDeclarationOpen(e) {
		this._consumeSequenceIfMatch(SEQUENCES.DASH_DASH, !0) ? (this._createCommentToken(SEQUENCES.DASH_DASH.length + 1), this.state = State.COMMENT_START) : this._consumeSequenceIfMatch(SEQUENCES.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(SEQUENCES.DOCTYPE.length + 1), this.state = State.DOCTYPE) : this._consumeSequenceIfMatch(SEQUENCES.CDATA_START, !0) ? this.inForeignNode ? this.state = State.CDATA_SECTION : (this._err(ERR.cdataInHtmlContent), this._createCommentToken(SEQUENCES.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = State.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(ERR.incorrectlyOpenedComment), this._createCommentToken(2), this.state = State.BOGUS_COMMENT, this._stateBogusComment(e));
	}
	_stateCommentStart(e) {
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_START_DASH;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN: {
				this._err(ERR.abruptClosingOfEmptyComment), this.state = State.DATA;
				let e = this.currentToken;
				this.emitCurrentComment(e);
				break;
			}
			default: this.state = State.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentStartDash(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_END;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptClosingOfEmptyComment), this.state = State.DATA, this.emitCurrentComment(t);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "-", this.state = State.COMMENT, this._stateComment(e);
		}
	}
	_stateComment(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_END_DASH;
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				t.data += "<", this.state = State.COMMENT_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), t.data += "�";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += String.fromCodePoint(e);
		}
	}
	_stateCommentLessThanSign(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.EXCLAMATION_MARK:
				t.data += "!", this.state = State.COMMENT_LESS_THAN_SIGN_BANG;
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				t.data += "<";
				break;
			default: this.state = State.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentLessThanSignBang(e) {
		e === CODE_POINTS.HYPHEN_MINUS ? this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = State.COMMENT, this._stateComment(e));
	}
	_stateCommentLessThanSignBangDash(e) {
		e === CODE_POINTS.HYPHEN_MINUS ? this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = State.COMMENT_END_DASH, this._stateCommentEndDash(e));
	}
	_stateCommentLessThanSignBangDashDash(e) {
		e !== CODE_POINTS.GREATER_THAN_SIGN && e !== CODE_POINTS.EOF && this._err(ERR.nestedComment), this.state = State.COMMENT_END, this._stateCommentEnd(e);
	}
	_stateCommentEndDash(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_END;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "-", this.state = State.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEnd(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA, this.emitCurrentComment(t);
				break;
			case CODE_POINTS.EXCLAMATION_MARK:
				this.state = State.COMMENT_END_BANG;
				break;
			case CODE_POINTS.HYPHEN_MINUS:
				t.data += "-";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "--", this.state = State.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEndBang(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				t.data += "--!", this.state = State.COMMENT_END_DASH;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.incorrectlyClosedComment), this.state = State.DATA, this.emitCurrentComment(t);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "--!", this.state = State.COMMENT, this._stateComment(e);
		}
	}
	_stateDoctype(e) {
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_DOCTYPE_NAME;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
				break;
			case CODE_POINTS.EOF: {
				this._err(ERR.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._err(ERR.missingWhitespaceBeforeDoctypeName), this.state = State.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
		}
	}
	_stateBeforeDoctypeName(e) {
		if (isAsciiUpper(e)) this._createDoctypeToken(String.fromCharCode(toAsciiLower(e))), this.state = State.DOCTYPE_NAME;
		else switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._createDoctypeToken("�"), this.state = State.DOCTYPE_NAME;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN: {
				this._err(ERR.missingDoctypeName), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this.state = State.DATA;
				break;
			}
			case CODE_POINTS.EOF: {
				this._err(ERR.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._createDoctypeToken(String.fromCodePoint(e)), this.state = State.DOCTYPE_NAME;
		}
	}
	_stateDoctypeName(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.AFTER_DOCTYPE_NAME;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA, this.emitCurrentDoctype(t);
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), t.name += "�";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.name += String.fromCodePoint(isAsciiUpper(e) ? toAsciiLower(e) : e);
		}
	}
	_stateAfterDoctypeName(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA, this.emitCurrentDoctype(t);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._consumeSequenceIfMatch(SEQUENCES.PUBLIC, !1) ? this.state = State.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(SEQUENCES.SYSTEM, !1) ? this.state = State.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(ERR.invalidCharacterSequenceAfterDoctypeName), t.forceQuirks = !0, this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e));
		}
	}
	_stateAfterDoctypePublicKeyword(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case CODE_POINTS.QUOTATION_MARK:
				this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = State.DATA, this.emitCurrentDoctype(t);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypePublicIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.QUOTATION_MARK:
				t.publicId = "", this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				t.publicId = "", this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = State.DATA, this.emitCurrentDoctype(t);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypePublicIdentifierDoubleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), t.publicId += "�";
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.publicId += String.fromCodePoint(e);
		}
	}
	_stateDoctypePublicIdentifierSingleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.APOSTROPHE:
				this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), t.publicId += "�";
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.publicId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypePublicIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA, this.emitCurrentDoctype(t);
				break;
			case CODE_POINTS.QUOTATION_MARK:
				this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBetweenDoctypePublicAndSystemIdentifiers(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = State.DATA;
				break;
			case CODE_POINTS.QUOTATION_MARK:
				t.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				t.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateAfterDoctypeSystemKeyword(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case CODE_POINTS.QUOTATION_MARK:
				this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = State.DATA, this.emitCurrentDoctype(t);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypeSystemIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.QUOTATION_MARK:
				t.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				t.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = State.DATA, this.emitCurrentDoctype(t);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypeSystemIdentifierDoubleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), t.systemId += "�";
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.systemId += String.fromCodePoint(e);
		}
	}
	_stateDoctypeSystemIdentifierSingleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.APOSTROPHE:
				this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), t.systemId += "�";
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.systemId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypeSystemIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(ERR.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBogusDoctype(e) {
		let t = this.currentToken;
		switch (e) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = State.DATA;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				break;
			case CODE_POINTS.EOF:
				this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default:
		}
	}
	_stateCdataSection(e) {
		switch (e) {
			case CODE_POINTS.RIGHT_SQUARE_BRACKET:
				this.state = State.CDATA_SECTION_BRACKET;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInCdata), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateCdataSectionBracket(e) {
		e === CODE_POINTS.RIGHT_SQUARE_BRACKET ? this.state = State.CDATA_SECTION_END : (this._emitChars("]"), this.state = State.CDATA_SECTION, this._stateCdataSection(e));
	}
	_stateCdataSectionEnd(e) {
		switch (e) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				break;
			case CODE_POINTS.RIGHT_SQUARE_BRACKET:
				this._emitChars("]");
				break;
			default: this._emitChars("]]"), this.state = State.CDATA_SECTION, this._stateCdataSection(e);
		}
	}
	_stateCharacterReference() {
		let e = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
		if (e < 0) if (this.preprocessor.lastChunkWritten) e = this.entityDecoder.end();
		else {
			this.active = !1, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = !0;
			return;
		}
		e === 0 ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && isAsciiAlphaNumeric(this.preprocessor.peek(1)) ? State.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState;
	}
	_stateAmbiguousAmpersand(e) {
		isAsciiAlphaNumeric(e) ? this._flushCodePointConsumedAsCharacterReference(e) : (e === CODE_POINTS.SEMICOLON && this._err(ERR.unknownNamedCharacterReference), this.state = this.returnState, this._callState(e));
	}
}, IMPLICIT_END_TAG_REQUIRED = new Set([
	TAG_ID.DD,
	TAG_ID.DT,
	TAG_ID.LI,
	TAG_ID.OPTGROUP,
	TAG_ID.OPTION,
	TAG_ID.P,
	TAG_ID.RB,
	TAG_ID.RP,
	TAG_ID.RT,
	TAG_ID.RTC
]), IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = new Set([
	...IMPLICIT_END_TAG_REQUIRED,
	TAG_ID.CAPTION,
	TAG_ID.COLGROUP,
	TAG_ID.TBODY,
	TAG_ID.TD,
	TAG_ID.TFOOT,
	TAG_ID.TH,
	TAG_ID.THEAD,
	TAG_ID.TR
]), SCOPING_ELEMENTS_HTML = new Set([
	TAG_ID.APPLET,
	TAG_ID.CAPTION,
	TAG_ID.HTML,
	TAG_ID.MARQUEE,
	TAG_ID.OBJECT,
	TAG_ID.TABLE,
	TAG_ID.TD,
	TAG_ID.TEMPLATE,
	TAG_ID.TH
]), SCOPING_ELEMENTS_HTML_LIST = new Set([
	...SCOPING_ELEMENTS_HTML,
	TAG_ID.OL,
	TAG_ID.UL
]), SCOPING_ELEMENTS_HTML_BUTTON = new Set([...SCOPING_ELEMENTS_HTML, TAG_ID.BUTTON]), SCOPING_ELEMENTS_MATHML = new Set([
	TAG_ID.ANNOTATION_XML,
	TAG_ID.MI,
	TAG_ID.MN,
	TAG_ID.MO,
	TAG_ID.MS,
	TAG_ID.MTEXT
]), SCOPING_ELEMENTS_SVG = new Set([
	TAG_ID.DESC,
	TAG_ID.FOREIGN_OBJECT,
	TAG_ID.TITLE
]), TABLE_ROW_CONTEXT = new Set([
	TAG_ID.TR,
	TAG_ID.TEMPLATE,
	TAG_ID.HTML
]), TABLE_BODY_CONTEXT = new Set([
	TAG_ID.TBODY,
	TAG_ID.TFOOT,
	TAG_ID.THEAD,
	TAG_ID.TEMPLATE,
	TAG_ID.HTML
]), TABLE_CONTEXT = new Set([
	TAG_ID.TABLE,
	TAG_ID.TEMPLATE,
	TAG_ID.HTML
]), TABLE_CELLS = new Set([TAG_ID.TD, TAG_ID.TH]), OpenElementStack = class {
	get currentTmplContentOrNode() {
		return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
	}
	constructor(e, t, n) {
		this.treeAdapter = t, this.handler = n, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = TAG_ID.UNKNOWN, this.current = e;
	}
	_indexOf(e) {
		return this.items.lastIndexOf(e, this.stackTop);
	}
	_isInTemplate() {
		return this.currentTagId === TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
	}
	_updateCurrentElement() {
		this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
	}
	push(e, t) {
		this.stackTop++, this.items[this.stackTop] = e, this.current = e, this.tagIDs[this.stackTop] = t, this.currentTagId = t, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(e, t, !0);
	}
	pop() {
		let e = this.current;
		this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !0);
	}
	replace(e, t) {
		let n = this._indexOf(e);
		this.items[n] = t, n === this.stackTop && (this.current = t);
	}
	insertAfter(e, t, n) {
		let r = this._indexOf(e) + 1;
		this.items.splice(r, 0, t), this.tagIDs.splice(r, 0, n), this.stackTop++, r === this.stackTop && this._updateCurrentElement(), this.current && this.currentTagId !== void 0 && this.handler.onItemPush(this.current, this.currentTagId, r === this.stackTop);
	}
	popUntilTagNamePopped(e) {
		let t = this.stackTop + 1;
		do
			t = this.tagIDs.lastIndexOf(e, t - 1);
		while (t > 0 && this.treeAdapter.getNamespaceURI(this.items[t]) !== NS.HTML);
		this.shortenToLength(Math.max(t, 0));
	}
	shortenToLength(e) {
		for (; this.stackTop >= e;) {
			let t = this.current;
			this.tmplCount > 0 && this._isInTemplate() && --this.tmplCount, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, this.stackTop < e);
		}
	}
	popUntilElementPopped(e) {
		let t = this._indexOf(e);
		this.shortenToLength(Math.max(t, 0));
	}
	popUntilPopped(e, t) {
		let n = this._indexOfTagNames(e, t);
		this.shortenToLength(Math.max(n, 0));
	}
	popUntilNumberedHeaderPopped() {
		this.popUntilPopped(NUMBERED_HEADERS, NS.HTML);
	}
	popUntilTableCellPopped() {
		this.popUntilPopped(TABLE_CELLS, NS.HTML);
	}
	popAllUpToHtmlElement() {
		this.tmplCount = 0, this.shortenToLength(1);
	}
	_indexOfTagNames(e, t) {
		for (let n = this.stackTop; n >= 0; n--) if (e.has(this.tagIDs[n]) && this.treeAdapter.getNamespaceURI(this.items[n]) === t) return n;
		return -1;
	}
	clearBackTo(e, t) {
		let n = this._indexOfTagNames(e, t);
		this.shortenToLength(n + 1);
	}
	clearBackToTableContext() {
		this.clearBackTo(TABLE_CONTEXT, NS.HTML);
	}
	clearBackToTableBodyContext() {
		this.clearBackTo(TABLE_BODY_CONTEXT, NS.HTML);
	}
	clearBackToTableRowContext() {
		this.clearBackTo(TABLE_ROW_CONTEXT, NS.HTML);
	}
	remove(e) {
		let t = this._indexOf(e);
		t >= 0 && (t === this.stackTop ? this.pop() : (this.items.splice(t, 1), this.tagIDs.splice(t, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !1)));
	}
	tryPeekProperlyNestedBodyElement() {
		return this.stackTop >= 1 && this.tagIDs[1] === TAG_ID.BODY ? this.items[1] : null;
	}
	contains(e) {
		return this._indexOf(e) > -1;
	}
	getCommonAncestor(e) {
		let t = this._indexOf(e) - 1;
		return t >= 0 ? this.items[t] : null;
	}
	isRootHtmlElementCurrent() {
		return this.stackTop === 0 && this.tagIDs[0] === TAG_ID.HTML;
	}
	hasInDynamicScope(e, t) {
		for (let n = this.stackTop; n >= 0; n--) {
			let r = this.tagIDs[n];
			switch (this.treeAdapter.getNamespaceURI(this.items[n])) {
				case NS.HTML:
					if (r === e) return !0;
					if (t.has(r)) return !1;
					break;
				case NS.SVG:
					if (SCOPING_ELEMENTS_SVG.has(r)) return !1;
					break;
				case NS.MATHML:
					if (SCOPING_ELEMENTS_MATHML.has(r)) return !1;
					break;
			}
		}
		return !0;
	}
	hasInScope(e) {
		return this.hasInDynamicScope(e, SCOPING_ELEMENTS_HTML);
	}
	hasInListItemScope(e) {
		return this.hasInDynamicScope(e, SCOPING_ELEMENTS_HTML_LIST);
	}
	hasInButtonScope(e) {
		return this.hasInDynamicScope(e, SCOPING_ELEMENTS_HTML_BUTTON);
	}
	hasNumberedHeaderInScope() {
		for (let e = this.stackTop; e >= 0; e--) {
			let t = this.tagIDs[e];
			switch (this.treeAdapter.getNamespaceURI(this.items[e])) {
				case NS.HTML:
					if (NUMBERED_HEADERS.has(t)) return !0;
					if (SCOPING_ELEMENTS_HTML.has(t)) return !1;
					break;
				case NS.SVG:
					if (SCOPING_ELEMENTS_SVG.has(t)) return !1;
					break;
				case NS.MATHML:
					if (SCOPING_ELEMENTS_MATHML.has(t)) return !1;
					break;
			}
		}
		return !0;
	}
	hasInTableScope(e) {
		for (let t = this.stackTop; t >= 0; t--) if (this.treeAdapter.getNamespaceURI(this.items[t]) === NS.HTML) switch (this.tagIDs[t]) {
			case e: return !0;
			case TAG_ID.TABLE:
			case TAG_ID.HTML: return !1;
		}
		return !0;
	}
	hasTableBodyContextInTableScope() {
		for (let e = this.stackTop; e >= 0; e--) if (this.treeAdapter.getNamespaceURI(this.items[e]) === NS.HTML) switch (this.tagIDs[e]) {
			case TAG_ID.TBODY:
			case TAG_ID.THEAD:
			case TAG_ID.TFOOT: return !0;
			case TAG_ID.TABLE:
			case TAG_ID.HTML: return !1;
		}
		return !0;
	}
	hasInSelectScope(e) {
		for (let t = this.stackTop; t >= 0; t--) if (this.treeAdapter.getNamespaceURI(this.items[t]) === NS.HTML) switch (this.tagIDs[t]) {
			case e: return !0;
			case TAG_ID.OPTION:
			case TAG_ID.OPTGROUP: break;
			default: return !1;
		}
		return !0;
	}
	generateImpliedEndTags() {
		for (; this.currentTagId !== void 0 && IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsThoroughly() {
		for (; this.currentTagId !== void 0 && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsWithExclusion(e) {
		for (; this.currentTagId !== void 0 && this.currentTagId !== e && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId);) this.pop();
	}
}, NOAH_ARK_CAPACITY = 3, EntryType;
(function(e) {
	e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element";
})(EntryType ||= {});
var MARKER = { type: EntryType.Marker }, FormattingElementList = class {
	constructor(e) {
		this.treeAdapter = e, this.entries = [], this.bookmark = null;
	}
	_getNoahArkConditionCandidates(e, t) {
		let n = [], r = t.length, i = this.treeAdapter.getTagName(e), a = this.treeAdapter.getNamespaceURI(e);
		for (let e = 0; e < this.entries.length; e++) {
			let t = this.entries[e];
			if (t.type === EntryType.Marker) break;
			let { element: o } = t;
			if (this.treeAdapter.getTagName(o) === i && this.treeAdapter.getNamespaceURI(o) === a) {
				let t = this.treeAdapter.getAttrList(o);
				t.length === r && n.push({
					idx: e,
					attrs: t
				});
			}
		}
		return n;
	}
	_ensureNoahArkCondition(e) {
		if (this.entries.length < NOAH_ARK_CAPACITY) return;
		let t = this.treeAdapter.getAttrList(e), n = this._getNoahArkConditionCandidates(e, t);
		if (n.length < NOAH_ARK_CAPACITY) return;
		let r = new Map(t.map((e) => [e.name, e.value])), i = 0;
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			t.attrs.every((e) => r.get(e.name) === e.value) && (i += 1, i >= NOAH_ARK_CAPACITY && this.entries.splice(t.idx, 1));
		}
	}
	insertMarker() {
		this.entries.unshift(MARKER);
	}
	pushElement(e, t) {
		this._ensureNoahArkCondition(e), this.entries.unshift({
			type: EntryType.Element,
			element: e,
			token: t
		});
	}
	insertElementAfterBookmark(e, t) {
		let n = this.entries.indexOf(this.bookmark);
		this.entries.splice(n, 0, {
			type: EntryType.Element,
			element: e,
			token: t
		});
	}
	removeEntry(e) {
		let t = this.entries.indexOf(e);
		t !== -1 && this.entries.splice(t, 1);
	}
	clearToLastMarker() {
		let e = this.entries.indexOf(MARKER);
		e === -1 ? this.entries.length = 0 : this.entries.splice(0, e + 1);
	}
	getElementEntryInScopeWithTagName(e) {
		let t = this.entries.find((t) => t.type === EntryType.Marker || this.treeAdapter.getTagName(t.element) === e);
		return t && t.type === EntryType.Element ? t : null;
	}
	getElementEntry(e) {
		return this.entries.find((t) => t.type === EntryType.Element && t.element === e);
	}
};
const defaultTreeAdapter = {
	createDocument() {
		return {
			nodeName: "#document",
			mode: DOCUMENT_MODE.NO_QUIRKS,
			childNodes: []
		};
	},
	createDocumentFragment() {
		return {
			nodeName: "#document-fragment",
			childNodes: []
		};
	},
	createElement(e, t, n) {
		return {
			nodeName: e,
			tagName: e,
			attrs: n,
			namespaceURI: t,
			childNodes: [],
			parentNode: null
		};
	},
	createCommentNode(e) {
		return {
			nodeName: "#comment",
			data: e,
			parentNode: null
		};
	},
	createTextNode(e) {
		return {
			nodeName: "#text",
			value: e,
			parentNode: null
		};
	},
	appendChild(e, t) {
		e.childNodes.push(t), t.parentNode = e;
	},
	insertBefore(e, t, n) {
		let r = e.childNodes.indexOf(n);
		e.childNodes.splice(r, 0, t), t.parentNode = e;
	},
	setTemplateContent(e, t) {
		e.content = t;
	},
	getTemplateContent(e) {
		return e.content;
	},
	setDocumentType(e, t, n, r) {
		let i = e.childNodes.find((e) => e.nodeName === "#documentType");
		if (i) i.name = t, i.publicId = n, i.systemId = r;
		else {
			let i = {
				nodeName: "#documentType",
				name: t,
				publicId: n,
				systemId: r,
				parentNode: null
			};
			defaultTreeAdapter.appendChild(e, i);
		}
	},
	setDocumentMode(e, t) {
		e.mode = t;
	},
	getDocumentMode(e) {
		return e.mode;
	},
	detachNode(e) {
		if (e.parentNode) {
			let t = e.parentNode.childNodes.indexOf(e);
			e.parentNode.childNodes.splice(t, 1), e.parentNode = null;
		}
	},
	insertText(e, t) {
		if (e.childNodes.length > 0) {
			let n = e.childNodes[e.childNodes.length - 1];
			if (defaultTreeAdapter.isTextNode(n)) {
				n.value += t;
				return;
			}
		}
		defaultTreeAdapter.appendChild(e, defaultTreeAdapter.createTextNode(t));
	},
	insertTextBefore(e, t, n) {
		let r = e.childNodes[e.childNodes.indexOf(n) - 1];
		r && defaultTreeAdapter.isTextNode(r) ? r.value += t : defaultTreeAdapter.insertBefore(e, defaultTreeAdapter.createTextNode(t), n);
	},
	adoptAttributes(e, t) {
		let n = new Set(e.attrs.map((e) => e.name));
		for (let r = 0; r < t.length; r++) n.has(t[r].name) || e.attrs.push(t[r]);
	},
	getFirstChild(e) {
		return e.childNodes[0];
	},
	getChildNodes(e) {
		return e.childNodes;
	},
	getParentNode(e) {
		return e.parentNode;
	},
	getAttrList(e) {
		return e.attrs;
	},
	getTagName(e) {
		return e.tagName;
	},
	getNamespaceURI(e) {
		return e.namespaceURI;
	},
	getTextNodeContent(e) {
		return e.value;
	},
	getCommentNodeContent(e) {
		return e.data;
	},
	getDocumentTypeNodeName(e) {
		return e.name;
	},
	getDocumentTypeNodePublicId(e) {
		return e.publicId;
	},
	getDocumentTypeNodeSystemId(e) {
		return e.systemId;
	},
	isTextNode(e) {
		return e.nodeName === "#text";
	},
	isCommentNode(e) {
		return e.nodeName === "#comment";
	},
	isDocumentTypeNode(e) {
		return e.nodeName === "#documentType";
	},
	isElementNode(e) {
		return Object.prototype.hasOwnProperty.call(e, "tagName");
	},
	setNodeSourceCodeLocation(e, t) {
		e.sourceCodeLocation = t;
	},
	getNodeSourceCodeLocation(e) {
		return e.sourceCodeLocation;
	},
	updateNodeSourceCodeLocation(e, t) {
		e.sourceCodeLocation = {
			...e.sourceCodeLocation,
			...t
		};
	}
};
var VALID_DOCTYPE_NAME = "html", VALID_SYSTEM_ID = "about:legacy-compat", QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", QUIRKS_MODE_PUBLIC_ID_PREFIXES = /* @__PURE__ */ "+//silmaril//dtd html pro v0r11 19970101//,-//as//dtd html 3.0 aswedit + extensions//,-//advasoft ltd//dtd html 3.0 aswedit + extensions//,-//ietf//dtd html 2.0 level 1//,-//ietf//dtd html 2.0 level 2//,-//ietf//dtd html 2.0 strict level 1//,-//ietf//dtd html 2.0 strict level 2//,-//ietf//dtd html 2.0 strict//,-//ietf//dtd html 2.0//,-//ietf//dtd html 2.1e//,-//ietf//dtd html 3.0//,-//ietf//dtd html 3.2 final//,-//ietf//dtd html 3.2//,-//ietf//dtd html 3//,-//ietf//dtd html level 0//,-//ietf//dtd html level 1//,-//ietf//dtd html level 2//,-//ietf//dtd html level 3//,-//ietf//dtd html strict level 0//,-//ietf//dtd html strict level 1//,-//ietf//dtd html strict level 2//,-//ietf//dtd html strict level 3//,-//ietf//dtd html strict//,-//ietf//dtd html//,-//metrius//dtd metrius presentational//,-//microsoft//dtd internet explorer 2.0 html strict//,-//microsoft//dtd internet explorer 2.0 html//,-//microsoft//dtd internet explorer 2.0 tables//,-//microsoft//dtd internet explorer 3.0 html strict//,-//microsoft//dtd internet explorer 3.0 html//,-//microsoft//dtd internet explorer 3.0 tables//,-//netscape comm. corp.//dtd html//,-//netscape comm. corp.//dtd strict html//,-//o'reilly and associates//dtd html 2.0//,-//o'reilly and associates//dtd html extended 1.0//,-//o'reilly and associates//dtd html extended relaxed 1.0//,-//sq//dtd html 2.0 hotmetal + extensions//,-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//,-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//,-//spyglass//dtd html 2.0 extended//,-//sun microsystems corp.//dtd hotjava html//,-//sun microsystems corp.//dtd hotjava strict html//,-//w3c//dtd html 3 1995-03-24//,-//w3c//dtd html 3.2 draft//,-//w3c//dtd html 3.2 final//,-//w3c//dtd html 3.2//,-//w3c//dtd html 3.2s draft//,-//w3c//dtd html 4.0 frameset//,-//w3c//dtd html 4.0 transitional//,-//w3c//dtd html experimental 19960712//,-//w3c//dtd html experimental 970421//,-//w3c//dtd w3 html//,-//w3o//dtd w3 html 3.0//,-//webtechs//dtd mozilla html 2.0//,-//webtechs//dtd mozilla html//".split(","), QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
	...QUIRKS_MODE_PUBLIC_ID_PREFIXES,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
], QUIRKS_MODE_PUBLIC_IDS = new Set([
	"-//w3o//dtd w3 html strict 3.0//en//",
	"-/w3c/dtd html 4.0 transitional/en",
	"html"
]), LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
	...LIMITED_QUIRKS_PUBLIC_ID_PREFIXES,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
];
function hasPrefix(e, t) {
	return t.some((t) => e.startsWith(t));
}
function isConforming(e) {
	return e.name === VALID_DOCTYPE_NAME && e.publicId === null && (e.systemId === null || e.systemId === VALID_SYSTEM_ID);
}
function getDocumentMode(e) {
	if (e.name !== VALID_DOCTYPE_NAME) return DOCUMENT_MODE.QUIRKS;
	let { systemId: t } = e;
	if (t && t.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) return DOCUMENT_MODE.QUIRKS;
	let { publicId: n } = e;
	if (n !== null) {
		if (n = n.toLowerCase(), QUIRKS_MODE_PUBLIC_IDS.has(n)) return DOCUMENT_MODE.QUIRKS;
		let e = t === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
		if (hasPrefix(n, e)) return DOCUMENT_MODE.QUIRKS;
		if (e = t === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES, hasPrefix(n, e)) return DOCUMENT_MODE.LIMITED_QUIRKS;
	}
	return DOCUMENT_MODE.NO_QUIRKS;
}
var MIME_TYPES = {
	TEXT_HTML: "text/html",
	APPLICATION_XML: "application/xhtml+xml"
}, DEFINITION_URL_ATTR = "definitionurl", ADJUSTED_DEFINITION_URL_ATTR = "definitionURL", SVG_ATTRS_ADJUSTMENT_MAP = new Map((/* @__PURE__ */ "attributeName.attributeType.baseFrequency.baseProfile.calcMode.clipPathUnits.diffuseConstant.edgeMode.filterUnits.glyphRef.gradientTransform.gradientUnits.kernelMatrix.kernelUnitLength.keyPoints.keySplines.keyTimes.lengthAdjust.limitingConeAngle.markerHeight.markerUnits.markerWidth.maskContentUnits.maskUnits.numOctaves.pathLength.patternContentUnits.patternTransform.patternUnits.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.refX.refY.repeatCount.repeatDur.requiredExtensions.requiredFeatures.specularConstant.specularExponent.spreadMethod.startOffset.stdDeviation.stitchTiles.surfaceScale.systemLanguage.tableValues.targetX.targetY.textLength.viewBox.viewTarget.xChannelSelector.yChannelSelector.zoomAndPan".split(".")).map((e) => [e.toLowerCase(), e])), XML_ATTRS_ADJUSTMENT_MAP = new Map([
	["xlink:actuate", {
		prefix: "xlink",
		name: "actuate",
		namespace: NS.XLINK
	}],
	["xlink:arcrole", {
		prefix: "xlink",
		name: "arcrole",
		namespace: NS.XLINK
	}],
	["xlink:href", {
		prefix: "xlink",
		name: "href",
		namespace: NS.XLINK
	}],
	["xlink:role", {
		prefix: "xlink",
		name: "role",
		namespace: NS.XLINK
	}],
	["xlink:show", {
		prefix: "xlink",
		name: "show",
		namespace: NS.XLINK
	}],
	["xlink:title", {
		prefix: "xlink",
		name: "title",
		namespace: NS.XLINK
	}],
	["xlink:type", {
		prefix: "xlink",
		name: "type",
		namespace: NS.XLINK
	}],
	["xml:lang", {
		prefix: "xml",
		name: "lang",
		namespace: NS.XML
	}],
	["xml:space", {
		prefix: "xml",
		name: "space",
		namespace: NS.XML
	}],
	["xmlns", {
		prefix: "",
		name: "xmlns",
		namespace: NS.XMLNS
	}],
	["xmlns:xlink", {
		prefix: "xmlns",
		name: "xlink",
		namespace: NS.XMLNS
	}]
]);
const SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map((/* @__PURE__ */ "altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.textPath".split(".")).map((e) => [e.toLowerCase(), e]));
var EXITS_FOREIGN_CONTENT = new Set([
	TAG_ID.B,
	TAG_ID.BIG,
	TAG_ID.BLOCKQUOTE,
	TAG_ID.BODY,
	TAG_ID.BR,
	TAG_ID.CENTER,
	TAG_ID.CODE,
	TAG_ID.DD,
	TAG_ID.DIV,
	TAG_ID.DL,
	TAG_ID.DT,
	TAG_ID.EM,
	TAG_ID.EMBED,
	TAG_ID.H1,
	TAG_ID.H2,
	TAG_ID.H3,
	TAG_ID.H4,
	TAG_ID.H5,
	TAG_ID.H6,
	TAG_ID.HEAD,
	TAG_ID.HR,
	TAG_ID.I,
	TAG_ID.IMG,
	TAG_ID.LI,
	TAG_ID.LISTING,
	TAG_ID.MENU,
	TAG_ID.META,
	TAG_ID.NOBR,
	TAG_ID.OL,
	TAG_ID.P,
	TAG_ID.PRE,
	TAG_ID.RUBY,
	TAG_ID.S,
	TAG_ID.SMALL,
	TAG_ID.SPAN,
	TAG_ID.STRONG,
	TAG_ID.STRIKE,
	TAG_ID.SUB,
	TAG_ID.SUP,
	TAG_ID.TABLE,
	TAG_ID.TT,
	TAG_ID.U,
	TAG_ID.UL,
	TAG_ID.VAR
]);
function causesExit(e) {
	let t = e.tagID;
	return t === TAG_ID.FONT && e.attrs.some(({ name: e }) => e === ATTRS.COLOR || e === ATTRS.SIZE || e === ATTRS.FACE) || EXITS_FOREIGN_CONTENT.has(t);
}
function adjustTokenMathMLAttrs(e) {
	for (let t = 0; t < e.attrs.length; t++) if (e.attrs[t].name === DEFINITION_URL_ATTR) {
		e.attrs[t].name = ADJUSTED_DEFINITION_URL_ATTR;
		break;
	}
}
function adjustTokenSVGAttrs(e) {
	for (let t = 0; t < e.attrs.length; t++) {
		let n = SVG_ATTRS_ADJUSTMENT_MAP.get(e.attrs[t].name);
		n != null && (e.attrs[t].name = n);
	}
}
function adjustTokenXMLAttrs(e) {
	for (let t = 0; t < e.attrs.length; t++) {
		let n = XML_ATTRS_ADJUSTMENT_MAP.get(e.attrs[t].name);
		n && (e.attrs[t].prefix = n.prefix, e.attrs[t].name = n.name, e.attrs[t].namespace = n.namespace);
	}
}
function adjustTokenSVGTagName(e) {
	let t = SVG_TAG_NAMES_ADJUSTMENT_MAP.get(e.tagName);
	t != null && (e.tagName = t, e.tagID = getTagID(e.tagName));
}
function isMathMLTextIntegrationPoint(e, t) {
	return t === NS.MATHML && (e === TAG_ID.MI || e === TAG_ID.MO || e === TAG_ID.MN || e === TAG_ID.MS || e === TAG_ID.MTEXT);
}
function isHtmlIntegrationPoint(e, t, n) {
	if (t === NS.MATHML && e === TAG_ID.ANNOTATION_XML) {
		for (let e = 0; e < n.length; e++) if (n[e].name === ATTRS.ENCODING) {
			let t = n[e].value.toLowerCase();
			return t === MIME_TYPES.TEXT_HTML || t === MIME_TYPES.APPLICATION_XML;
		}
	}
	return t === NS.SVG && (e === TAG_ID.FOREIGN_OBJECT || e === TAG_ID.DESC || e === TAG_ID.TITLE);
}
function isIntegrationPoint(e, t, n, r) {
	return (!r || r === NS.HTML) && isHtmlIntegrationPoint(e, t, n) || (!r || r === NS.MATHML) && isMathMLTextIntegrationPoint(e, t);
}
var HIDDEN_INPUT_TYPE = "hidden", AA_OUTER_LOOP_ITER = 8, AA_INNER_LOOP_ITER = 3, InsertionMode;
(function(e) {
	e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(InsertionMode ||= {});
var BASE_LOC = {
	startLine: -1,
	startCol: -1,
	startOffset: -1,
	endLine: -1,
	endCol: -1,
	endOffset: -1
}, TABLE_STRUCTURE_TAGS = new Set([
	TAG_ID.TABLE,
	TAG_ID.TBODY,
	TAG_ID.TFOOT,
	TAG_ID.THEAD,
	TAG_ID.TR
]), defaultParserOptions = {
	scriptingEnabled: !0,
	sourceCodeLocationInfo: !1,
	treeAdapter: defaultTreeAdapter,
	onParseError: null
}, Parser = class {
	constructor(e, t, n = null, r = null) {
		this.fragmentContext = n, this.scriptHandler = r, this.currentToken = null, this.stopped = !1, this.insertionMode = InsertionMode.INITIAL, this.originalInsertionMode = InsertionMode.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
			...defaultParserOptions,
			...e
		}, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = t ?? this.treeAdapter.createDocument(), this.tokenizer = new Tokenizer(this.options, this), this.activeFormattingElements = new FormattingElementList(this.treeAdapter), this.fragmentContextID = n ? getTagID(this.treeAdapter.getTagName(n)) : TAG_ID.UNKNOWN, this._setContextModes(n ?? this.document, this.fragmentContextID), this.openElements = new OpenElementStack(this.document, this.treeAdapter, this);
	}
	static parse(e, t) {
		let n = new this(t);
		return n.tokenizer.write(e, !0), n.document;
	}
	static getFragmentParser(e, t) {
		let n = {
			...defaultParserOptions,
			...t
		};
		e ??= n.treeAdapter.createElement(TAG_NAMES.TEMPLATE, NS.HTML, []);
		let r = n.treeAdapter.createElement("documentmock", NS.HTML, []), i = new this(n, r, e);
		return i.fragmentContextID === TAG_ID.TEMPLATE && i.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE), i._initTokenizerForFragmentParsing(), i._insertFakeRootElement(), i._resetInsertionMode(), i._findFormInFragmentContext(), i;
	}
	getFragment() {
		let e = this.treeAdapter.getFirstChild(this.document), t = this.treeAdapter.createDocumentFragment();
		return this._adoptNodes(e, t), t;
	}
	_err(e, t, n) {
		if (!this.onParseError) return;
		let r = e.location ?? BASE_LOC, i = {
			code: t,
			startLine: r.startLine,
			startCol: r.startCol,
			startOffset: r.startOffset,
			endLine: n ? r.startLine : r.endLine,
			endCol: n ? r.startCol : r.endCol,
			endOffset: n ? r.startOffset : r.endOffset
		};
		this.onParseError(i);
	}
	onItemPush(e, t, n) {
		var r, i;
		(i = (r = this.treeAdapter).onItemPush) == null || i.call(r, e), n && this.openElements.stackTop > 0 && this._setContextModes(e, t);
	}
	onItemPop(e, t) {
		var n, r;
		if (this.options.sourceCodeLocationInfo && this._setEndLocation(e, this.currentToken), (r = (n = this.treeAdapter).onItemPop) == null || r.call(n, e, this.openElements.current), t) {
			let e, t;
			this.openElements.stackTop === 0 && this.fragmentContext ? (e = this.fragmentContext, t = this.fragmentContextID) : {current: e, currentTagId: t} = this.openElements, this._setContextModes(e, t);
		}
	}
	_setContextModes(e, t) {
		let n = e === this.document || e && this.treeAdapter.getNamespaceURI(e) === NS.HTML;
		this.currentNotInHTML = !n, this.tokenizer.inForeignNode = !n && e !== void 0 && t !== void 0 && !this._isIntegrationPoint(t, e);
	}
	_switchToTextParsing(e, t) {
		this._insertElement(e, NS.HTML), this.tokenizer.state = t, this.originalInsertionMode = this.insertionMode, this.insertionMode = InsertionMode.TEXT;
	}
	switchToPlaintextParsing() {
		this.insertionMode = InsertionMode.TEXT, this.originalInsertionMode = InsertionMode.IN_BODY, this.tokenizer.state = TokenizerMode.PLAINTEXT;
	}
	_getAdjustedCurrentElement() {
		return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
	}
	_findFormInFragmentContext() {
		let e = this.fragmentContext;
		for (; e;) {
			if (this.treeAdapter.getTagName(e) === TAG_NAMES.FORM) {
				this.formElement = e;
				break;
			}
			e = this.treeAdapter.getParentNode(e);
		}
	}
	_initTokenizerForFragmentParsing() {
		if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== NS.HTML)) switch (this.fragmentContextID) {
			case TAG_ID.TITLE:
			case TAG_ID.TEXTAREA:
				this.tokenizer.state = TokenizerMode.RCDATA;
				break;
			case TAG_ID.STYLE:
			case TAG_ID.XMP:
			case TAG_ID.IFRAME:
			case TAG_ID.NOEMBED:
			case TAG_ID.NOFRAMES:
			case TAG_ID.NOSCRIPT:
				this.tokenizer.state = TokenizerMode.RAWTEXT;
				break;
			case TAG_ID.SCRIPT:
				this.tokenizer.state = TokenizerMode.SCRIPT_DATA;
				break;
			case TAG_ID.PLAINTEXT:
				this.tokenizer.state = TokenizerMode.PLAINTEXT;
				break;
			default:
		}
	}
	_setDocumentType(e) {
		let t = e.name || "", n = e.publicId || "", r = e.systemId || "";
		if (this.treeAdapter.setDocumentType(this.document, t, n, r), e.location) {
			let t = this.treeAdapter.getChildNodes(this.document).find((e) => this.treeAdapter.isDocumentTypeNode(e));
			t && this.treeAdapter.setNodeSourceCodeLocation(t, e.location);
		}
	}
	_attachElementToTree(e, t) {
		if (this.options.sourceCodeLocationInfo) {
			let n = t && {
				...t,
				startTag: t
			};
			this.treeAdapter.setNodeSourceCodeLocation(e, n);
		}
		if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(e);
		else {
			let t = this.openElements.currentTmplContentOrNode;
			this.treeAdapter.appendChild(t ?? this.document, e);
		}
	}
	_appendElement(e, t) {
		let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
		this._attachElementToTree(n, e.location);
	}
	_insertElement(e, t) {
		let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
		this._attachElementToTree(n, e.location), this.openElements.push(n, e.tagID);
	}
	_insertFakeElement(e, t) {
		let n = this.treeAdapter.createElement(e, NS.HTML, []);
		this._attachElementToTree(n, null), this.openElements.push(n, t);
	}
	_insertTemplate(e) {
		let t = this.treeAdapter.createElement(e.tagName, NS.HTML, e.attrs), n = this.treeAdapter.createDocumentFragment();
		this.treeAdapter.setTemplateContent(t, n), this._attachElementToTree(t, e.location), this.openElements.push(t, e.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, null);
	}
	_insertFakeRootElement() {
		let e = this.treeAdapter.createElement(TAG_NAMES.HTML, NS.HTML, []);
		this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(e, null), this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e, TAG_ID.HTML);
	}
	_appendCommentNode(e, t) {
		let n = this.treeAdapter.createCommentNode(e.data);
		this.treeAdapter.appendChild(t, n), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, e.location);
	}
	_insertCharacters(e) {
		let t, n;
		if (this._shouldFosterParentOnInsertion() ? ({parent: t, beforeElement: n} = this._findFosterParentingLocation(), n ? this.treeAdapter.insertTextBefore(t, e.chars, n) : this.treeAdapter.insertText(t, e.chars)) : (t = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(t, e.chars)), !e.location) return;
		let r = this.treeAdapter.getChildNodes(t), i = r[(n ? r.lastIndexOf(n) : r.length) - 1];
		if (this.treeAdapter.getNodeSourceCodeLocation(i)) {
			let { endLine: t, endCol: n, endOffset: r } = e.location;
			this.treeAdapter.updateNodeSourceCodeLocation(i, {
				endLine: t,
				endCol: n,
				endOffset: r
			});
		} else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(i, e.location);
	}
	_adoptNodes(e, t) {
		for (let n = this.treeAdapter.getFirstChild(e); n; n = this.treeAdapter.getFirstChild(e)) this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(t, n);
	}
	_setEndLocation(e, t) {
		if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
			let n = t.location, r = this.treeAdapter.getTagName(e), i = t.type === TokenType.END_TAG && r === t.tagName ? {
				endTag: { ...n },
				endLine: n.endLine,
				endCol: n.endCol,
				endOffset: n.endOffset
			} : {
				endLine: n.startLine,
				endCol: n.startCol,
				endOffset: n.startOffset
			};
			this.treeAdapter.updateNodeSourceCodeLocation(e, i);
		}
	}
	shouldProcessStartTagTokenInForeignContent(e) {
		if (!this.currentNotInHTML) return !1;
		let t, n;
		return this.openElements.stackTop === 0 && this.fragmentContext ? (t = this.fragmentContext, n = this.fragmentContextID) : {current: t, currentTagId: n} = this.openElements, e.tagID === TAG_ID.SVG && this.treeAdapter.getTagName(t) === TAG_NAMES.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(t) === NS.MATHML ? !1 : this.tokenizer.inForeignNode || (e.tagID === TAG_ID.MGLYPH || e.tagID === TAG_ID.MALIGNMARK) && n !== void 0 && !this._isIntegrationPoint(n, t, NS.HTML);
	}
	_processToken(e) {
		switch (e.type) {
			case TokenType.CHARACTER:
				this.onCharacter(e);
				break;
			case TokenType.NULL_CHARACTER:
				this.onNullCharacter(e);
				break;
			case TokenType.COMMENT:
				this.onComment(e);
				break;
			case TokenType.DOCTYPE:
				this.onDoctype(e);
				break;
			case TokenType.START_TAG:
				this._processStartTag(e);
				break;
			case TokenType.END_TAG:
				this.onEndTag(e);
				break;
			case TokenType.EOF:
				this.onEof(e);
				break;
			case TokenType.WHITESPACE_CHARACTER:
				this.onWhitespaceCharacter(e);
				break;
		}
	}
	_isIntegrationPoint(e, t, n) {
		return isIntegrationPoint(e, this.treeAdapter.getNamespaceURI(t), this.treeAdapter.getAttrList(t), n);
	}
	_reconstructActiveFormattingElements() {
		let e = this.activeFormattingElements.entries.length;
		if (e) {
			let t = this.activeFormattingElements.entries.findIndex((e) => e.type === EntryType.Marker || this.openElements.contains(e.element)), n = t === -1 ? e - 1 : t - 1;
			for (let e = n; e >= 0; e--) {
				let t = this.activeFormattingElements.entries[e];
				this._insertElement(t.token, this.treeAdapter.getNamespaceURI(t.element)), t.element = this.openElements.current;
			}
		}
	}
	_closeTableCell() {
		this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = InsertionMode.IN_ROW;
	}
	_closePElement() {
		this.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.P), this.openElements.popUntilTagNamePopped(TAG_ID.P);
	}
	_resetInsertionMode() {
		for (let e = this.openElements.stackTop; e >= 0; e--) switch (e === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]) {
			case TAG_ID.TR:
				this.insertionMode = InsertionMode.IN_ROW;
				return;
			case TAG_ID.TBODY:
			case TAG_ID.THEAD:
			case TAG_ID.TFOOT:
				this.insertionMode = InsertionMode.IN_TABLE_BODY;
				return;
			case TAG_ID.CAPTION:
				this.insertionMode = InsertionMode.IN_CAPTION;
				return;
			case TAG_ID.COLGROUP:
				this.insertionMode = InsertionMode.IN_COLUMN_GROUP;
				return;
			case TAG_ID.TABLE:
				this.insertionMode = InsertionMode.IN_TABLE;
				return;
			case TAG_ID.BODY:
				this.insertionMode = InsertionMode.IN_BODY;
				return;
			case TAG_ID.FRAMESET:
				this.insertionMode = InsertionMode.IN_FRAMESET;
				return;
			case TAG_ID.SELECT:
				this._resetInsertionModeForSelect(e);
				return;
			case TAG_ID.TEMPLATE:
				this.insertionMode = this.tmplInsertionModeStack[0];
				return;
			case TAG_ID.HTML:
				this.insertionMode = this.headElement ? InsertionMode.AFTER_HEAD : InsertionMode.BEFORE_HEAD;
				return;
			case TAG_ID.TD:
			case TAG_ID.TH:
				if (e > 0) {
					this.insertionMode = InsertionMode.IN_CELL;
					return;
				}
				break;
			case TAG_ID.HEAD:
				if (e > 0) {
					this.insertionMode = InsertionMode.IN_HEAD;
					return;
				}
				break;
		}
		this.insertionMode = InsertionMode.IN_BODY;
	}
	_resetInsertionModeForSelect(e) {
		if (e > 0) for (let t = e - 1; t > 0; t--) {
			let e = this.openElements.tagIDs[t];
			if (e === TAG_ID.TEMPLATE) break;
			if (e === TAG_ID.TABLE) {
				this.insertionMode = InsertionMode.IN_SELECT_IN_TABLE;
				return;
			}
		}
		this.insertionMode = InsertionMode.IN_SELECT;
	}
	_isElementCausesFosterParenting(e) {
		return TABLE_STRUCTURE_TAGS.has(e);
	}
	_shouldFosterParentOnInsertion() {
		return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
	}
	_findFosterParentingLocation() {
		for (let e = this.openElements.stackTop; e >= 0; e--) {
			let t = this.openElements.items[e];
			switch (this.openElements.tagIDs[e]) {
				case TAG_ID.TEMPLATE:
					if (this.treeAdapter.getNamespaceURI(t) === NS.HTML) return {
						parent: this.treeAdapter.getTemplateContent(t),
						beforeElement: null
					};
					break;
				case TAG_ID.TABLE: {
					let n = this.treeAdapter.getParentNode(t);
					return n ? {
						parent: n,
						beforeElement: t
					} : {
						parent: this.openElements.items[e - 1],
						beforeElement: null
					};
				}
				default:
			}
		}
		return {
			parent: this.openElements.items[0],
			beforeElement: null
		};
	}
	_fosterParentElement(e) {
		let t = this._findFosterParentingLocation();
		t.beforeElement ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement) : this.treeAdapter.appendChild(t.parent, e);
	}
	_isSpecialElement(e, t) {
		return SPECIAL_ELEMENTS[this.treeAdapter.getNamespaceURI(e)].has(t);
	}
	onCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
			characterInForeignContent(this, e);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, e);
				break;
			case InsertionMode.BEFORE_HTML:
				tokenBeforeHtml(this, e);
				break;
			case InsertionMode.BEFORE_HEAD:
				tokenBeforeHead(this, e);
				break;
			case InsertionMode.IN_HEAD:
				tokenInHead(this, e);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				tokenInHeadNoScript(this, e);
				break;
			case InsertionMode.AFTER_HEAD:
				tokenAfterHead(this, e);
				break;
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_TEMPLATE:
				characterInBody(this, e);
				break;
			case InsertionMode.TEXT:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
				this._insertCharacters(e);
				break;
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
				characterInTable(this, e);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				characterInTableText(this, e);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				tokenInColumnGroup(this, e);
				break;
			case InsertionMode.AFTER_BODY:
				tokenAfterBody(this, e);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
				tokenAfterAfterBody(this, e);
				break;
			default:
		}
	}
	onNullCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
			nullCharacterInForeignContent(this, e);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, e);
				break;
			case InsertionMode.BEFORE_HTML:
				tokenBeforeHtml(this, e);
				break;
			case InsertionMode.BEFORE_HEAD:
				tokenBeforeHead(this, e);
				break;
			case InsertionMode.IN_HEAD:
				tokenInHead(this, e);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				tokenInHeadNoScript(this, e);
				break;
			case InsertionMode.AFTER_HEAD:
				tokenAfterHead(this, e);
				break;
			case InsertionMode.TEXT:
				this._insertCharacters(e);
				break;
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
				characterInTable(this, e);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				tokenInColumnGroup(this, e);
				break;
			case InsertionMode.AFTER_BODY:
				tokenAfterBody(this, e);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
				tokenAfterAfterBody(this, e);
				break;
			default:
		}
	}
	onComment(e) {
		if (this.skipNextNewLine = !1, this.currentNotInHTML) {
			appendComment(this, e);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
			case InsertionMode.BEFORE_HTML:
			case InsertionMode.BEFORE_HEAD:
			case InsertionMode.IN_HEAD:
			case InsertionMode.IN_HEAD_NO_SCRIPT:
			case InsertionMode.AFTER_HEAD:
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_COLUMN_GROUP:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
			case InsertionMode.IN_TEMPLATE:
			case InsertionMode.IN_FRAMESET:
			case InsertionMode.AFTER_FRAMESET:
				appendComment(this, e);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, e);
				break;
			case InsertionMode.AFTER_BODY:
				appendCommentToRootHtmlElement(this, e);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
			case InsertionMode.AFTER_AFTER_FRAMESET:
				appendCommentToDocument(this, e);
				break;
			default:
		}
	}
	onDoctype(e) {
		switch (this.skipNextNewLine = !1, this.insertionMode) {
			case InsertionMode.INITIAL:
				doctypeInInitialMode(this, e);
				break;
			case InsertionMode.BEFORE_HEAD:
			case InsertionMode.IN_HEAD:
			case InsertionMode.IN_HEAD_NO_SCRIPT:
			case InsertionMode.AFTER_HEAD:
				this._err(e, ERR.misplacedDoctype);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, e);
				break;
			default:
		}
	}
	onStartTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this._processStartTag(e), e.selfClosing && !e.ackSelfClosing && this._err(e, ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
	}
	_processStartTag(e) {
		this.shouldProcessStartTagTokenInForeignContent(e) ? startTagInForeignContent(this, e) : this._startTagOutsideForeignContent(e);
	}
	_startTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, e);
				break;
			case InsertionMode.BEFORE_HTML:
				startTagBeforeHtml(this, e);
				break;
			case InsertionMode.BEFORE_HEAD:
				startTagBeforeHead(this, e);
				break;
			case InsertionMode.IN_HEAD:
				startTagInHead(this, e);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				startTagInHeadNoScript(this, e);
				break;
			case InsertionMode.AFTER_HEAD:
				startTagAfterHead(this, e);
				break;
			case InsertionMode.IN_BODY:
				startTagInBody(this, e);
				break;
			case InsertionMode.IN_TABLE:
				startTagInTable(this, e);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, e);
				break;
			case InsertionMode.IN_CAPTION:
				startTagInCaption(this, e);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				startTagInColumnGroup(this, e);
				break;
			case InsertionMode.IN_TABLE_BODY:
				startTagInTableBody(this, e);
				break;
			case InsertionMode.IN_ROW:
				startTagInRow(this, e);
				break;
			case InsertionMode.IN_CELL:
				startTagInCell(this, e);
				break;
			case InsertionMode.IN_SELECT:
				startTagInSelect(this, e);
				break;
			case InsertionMode.IN_SELECT_IN_TABLE:
				startTagInSelectInTable(this, e);
				break;
			case InsertionMode.IN_TEMPLATE:
				startTagInTemplate(this, e);
				break;
			case InsertionMode.AFTER_BODY:
				startTagAfterBody(this, e);
				break;
			case InsertionMode.IN_FRAMESET:
				startTagInFrameset(this, e);
				break;
			case InsertionMode.AFTER_FRAMESET:
				startTagAfterFrameset(this, e);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
				startTagAfterAfterBody(this, e);
				break;
			case InsertionMode.AFTER_AFTER_FRAMESET:
				startTagAfterAfterFrameset(this, e);
				break;
			default:
		}
	}
	onEndTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this.currentNotInHTML ? endTagInForeignContent(this, e) : this._endTagOutsideForeignContent(e);
	}
	_endTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, e);
				break;
			case InsertionMode.BEFORE_HTML:
				endTagBeforeHtml(this, e);
				break;
			case InsertionMode.BEFORE_HEAD:
				endTagBeforeHead(this, e);
				break;
			case InsertionMode.IN_HEAD:
				endTagInHead(this, e);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				endTagInHeadNoScript(this, e);
				break;
			case InsertionMode.AFTER_HEAD:
				endTagAfterHead(this, e);
				break;
			case InsertionMode.IN_BODY:
				endTagInBody(this, e);
				break;
			case InsertionMode.TEXT:
				endTagInText(this, e);
				break;
			case InsertionMode.IN_TABLE:
				endTagInTable(this, e);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, e);
				break;
			case InsertionMode.IN_CAPTION:
				endTagInCaption(this, e);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				endTagInColumnGroup(this, e);
				break;
			case InsertionMode.IN_TABLE_BODY:
				endTagInTableBody(this, e);
				break;
			case InsertionMode.IN_ROW:
				endTagInRow(this, e);
				break;
			case InsertionMode.IN_CELL:
				endTagInCell(this, e);
				break;
			case InsertionMode.IN_SELECT:
				endTagInSelect(this, e);
				break;
			case InsertionMode.IN_SELECT_IN_TABLE:
				endTagInSelectInTable(this, e);
				break;
			case InsertionMode.IN_TEMPLATE:
				endTagInTemplate(this, e);
				break;
			case InsertionMode.AFTER_BODY:
				endTagAfterBody(this, e);
				break;
			case InsertionMode.IN_FRAMESET:
				endTagInFrameset(this, e);
				break;
			case InsertionMode.AFTER_FRAMESET:
				endTagAfterFrameset(this, e);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
				tokenAfterAfterBody(this, e);
				break;
			default:
		}
	}
	onEof(e) {
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, e);
				break;
			case InsertionMode.BEFORE_HTML:
				tokenBeforeHtml(this, e);
				break;
			case InsertionMode.BEFORE_HEAD:
				tokenBeforeHead(this, e);
				break;
			case InsertionMode.IN_HEAD:
				tokenInHead(this, e);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				tokenInHeadNoScript(this, e);
				break;
			case InsertionMode.AFTER_HEAD:
				tokenAfterHead(this, e);
				break;
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_COLUMN_GROUP:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
				eofInBody(this, e);
				break;
			case InsertionMode.TEXT:
				eofInText(this, e);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, e);
				break;
			case InsertionMode.IN_TEMPLATE:
				eofInTemplate(this, e);
				break;
			case InsertionMode.AFTER_BODY:
			case InsertionMode.IN_FRAMESET:
			case InsertionMode.AFTER_FRAMESET:
			case InsertionMode.AFTER_AFTER_BODY:
			case InsertionMode.AFTER_AFTER_FRAMESET:
				stopParsing(this, e);
				break;
			default:
		}
	}
	onWhitespaceCharacter(e) {
		if (this.skipNextNewLine && (this.skipNextNewLine = !1, e.chars.charCodeAt(0) === CODE_POINTS.LINE_FEED)) {
			if (e.chars.length === 1) return;
			e.chars = e.chars.substr(1);
		}
		if (this.tokenizer.inForeignNode) {
			this._insertCharacters(e);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.IN_HEAD:
			case InsertionMode.IN_HEAD_NO_SCRIPT:
			case InsertionMode.AFTER_HEAD:
			case InsertionMode.TEXT:
			case InsertionMode.IN_COLUMN_GROUP:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
			case InsertionMode.IN_FRAMESET:
			case InsertionMode.AFTER_FRAMESET:
				this._insertCharacters(e);
				break;
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_TEMPLATE:
			case InsertionMode.AFTER_BODY:
			case InsertionMode.AFTER_AFTER_BODY:
			case InsertionMode.AFTER_AFTER_FRAMESET:
				whitespaceCharacterInBody(this, e);
				break;
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
				characterInTable(this, e);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				whitespaceCharacterInTableText(this, e);
				break;
			default:
		}
	}
};
function aaObtainFormattingElementEntry(e, t) {
	let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
	return n ? e.openElements.contains(n.element) ? e.openElements.hasInScope(t.tagID) || (n = null) : (e.activeFormattingElements.removeEntry(n), n = null) : genericEndTagInBody(e, t), n;
}
function aaObtainFurthestBlock(e, t) {
	let n = null, r = e.openElements.stackTop;
	for (; r >= 0; r--) {
		let i = e.openElements.items[r];
		if (i === t.element) break;
		e._isSpecialElement(i, e.openElements.tagIDs[r]) && (n = i);
	}
	return n || (e.openElements.shortenToLength(Math.max(r, 0)), e.activeFormattingElements.removeEntry(t)), n;
}
function aaInnerLoop(e, t, n) {
	let r = t, i = e.openElements.getCommonAncestor(t);
	for (let a = 0, o = i; o !== n; a++, o = i) {
		i = e.openElements.getCommonAncestor(o);
		let n = e.activeFormattingElements.getElementEntry(o), c = n && a >= AA_INNER_LOOP_ITER;
		!n || c ? (c && e.activeFormattingElements.removeEntry(n), e.openElements.remove(o)) : (o = aaRecreateElementFromEntry(e, n), r === t && (e.activeFormattingElements.bookmark = n), e.treeAdapter.detachNode(r), e.treeAdapter.appendChild(o, r), r = o);
	}
	return r;
}
function aaRecreateElementFromEntry(e, t) {
	let n = e.treeAdapter.getNamespaceURI(t.element), r = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
	return e.openElements.replace(t.element, r), t.element = r, r;
}
function aaInsertLastNodeInCommonAncestor(e, t, n) {
	let r = getTagID(e.treeAdapter.getTagName(t));
	if (e._isElementCausesFosterParenting(r)) e._fosterParentElement(n);
	else {
		let i = e.treeAdapter.getNamespaceURI(t);
		r === TAG_ID.TEMPLATE && i === NS.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, n);
	}
}
function aaReplaceFormattingElement(e, t, n) {
	let r = e.treeAdapter.getNamespaceURI(n.element), { token: i } = n, a = e.treeAdapter.createElement(i.tagName, r, i.attrs);
	e._adoptNodes(t, a), e.treeAdapter.appendChild(t, a), e.activeFormattingElements.insertElementAfterBookmark(a, i), e.activeFormattingElements.removeEntry(n), e.openElements.remove(n.element), e.openElements.insertAfter(t, a, i.tagID);
}
function callAdoptionAgency(e, t) {
	for (let n = 0; n < AA_OUTER_LOOP_ITER; n++) {
		let n = aaObtainFormattingElementEntry(e, t);
		if (!n) break;
		let r = aaObtainFurthestBlock(e, n);
		if (!r) break;
		e.activeFormattingElements.bookmark = n;
		let i = aaInnerLoop(e, r, n.element), a = e.openElements.getCommonAncestor(n.element);
		e.treeAdapter.detachNode(i), a && aaInsertLastNodeInCommonAncestor(e, a, i), aaReplaceFormattingElement(e, r, n);
	}
}
function appendComment(e, t) {
	e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
}
function appendCommentToRootHtmlElement(e, t) {
	e._appendCommentNode(t, e.openElements.items[0]);
}
function appendCommentToDocument(e, t) {
	e._appendCommentNode(t, e.document);
}
function stopParsing(e, t) {
	if (e.stopped = !0, t.location) {
		let n = e.fragmentContext ? 0 : 2;
		for (let r = e.openElements.stackTop; r >= n; r--) e._setEndLocation(e.openElements.items[r], t);
		if (!e.fragmentContext && e.openElements.stackTop >= 0) {
			let n = e.openElements.items[0], r = e.treeAdapter.getNodeSourceCodeLocation(n);
			if (r && !r.endTag && (e._setEndLocation(n, t), e.openElements.stackTop >= 1)) {
				let n = e.openElements.items[1], r = e.treeAdapter.getNodeSourceCodeLocation(n);
				r && !r.endTag && e._setEndLocation(n, t);
			}
		}
	}
}
function doctypeInInitialMode(e, t) {
	e._setDocumentType(t);
	let n = t.forceQuirks ? DOCUMENT_MODE.QUIRKS : getDocumentMode(t);
	isConforming(t) || e._err(t, ERR.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, n), e.insertionMode = InsertionMode.BEFORE_HTML;
}
function tokenInInitialMode(e, t) {
	e._err(t, ERR.missingDoctype, !0), e.treeAdapter.setDocumentMode(e.document, DOCUMENT_MODE.QUIRKS), e.insertionMode = InsertionMode.BEFORE_HTML, e._processToken(t);
}
function startTagBeforeHtml(e, t) {
	t.tagID === TAG_ID.HTML ? (e._insertElement(t, NS.HTML), e.insertionMode = InsertionMode.BEFORE_HEAD) : tokenBeforeHtml(e, t);
}
function endTagBeforeHtml(e, t) {
	let n = t.tagID;
	(n === TAG_ID.HTML || n === TAG_ID.HEAD || n === TAG_ID.BODY || n === TAG_ID.BR) && tokenBeforeHtml(e, t);
}
function tokenBeforeHtml(e, t) {
	e._insertFakeRootElement(), e.insertionMode = InsertionMode.BEFORE_HEAD, e._processToken(t);
}
function startTagBeforeHead(e, t) {
	switch (t.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, t);
			break;
		case TAG_ID.HEAD:
			e._insertElement(t, NS.HTML), e.headElement = e.openElements.current, e.insertionMode = InsertionMode.IN_HEAD;
			break;
		default: tokenBeforeHead(e, t);
	}
}
function endTagBeforeHead(e, t) {
	let n = t.tagID;
	n === TAG_ID.HEAD || n === TAG_ID.BODY || n === TAG_ID.HTML || n === TAG_ID.BR ? tokenBeforeHead(e, t) : e._err(t, ERR.endTagWithoutMatchingOpenElement);
}
function tokenBeforeHead(e, t) {
	e._insertFakeElement(TAG_NAMES.HEAD, TAG_ID.HEAD), e.headElement = e.openElements.current, e.insertionMode = InsertionMode.IN_HEAD, e._processToken(t);
}
function startTagInHead(e, t) {
	switch (t.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, t);
			break;
		case TAG_ID.BASE:
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.LINK:
		case TAG_ID.META:
			e._appendElement(t, NS.HTML), t.ackSelfClosing = !0;
			break;
		case TAG_ID.TITLE:
			e._switchToTextParsing(t, TokenizerMode.RCDATA);
			break;
		case TAG_ID.NOSCRIPT:
			e.options.scriptingEnabled ? e._switchToTextParsing(t, TokenizerMode.RAWTEXT) : (e._insertElement(t, NS.HTML), e.insertionMode = InsertionMode.IN_HEAD_NO_SCRIPT);
			break;
		case TAG_ID.NOFRAMES:
		case TAG_ID.STYLE:
			e._switchToTextParsing(t, TokenizerMode.RAWTEXT);
			break;
		case TAG_ID.SCRIPT:
			e._switchToTextParsing(t, TokenizerMode.SCRIPT_DATA);
			break;
		case TAG_ID.TEMPLATE:
			e._insertTemplate(t), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = InsertionMode.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
			break;
		case TAG_ID.HEAD:
			e._err(t, ERR.misplacedStartTagForHeadElement);
			break;
		default: tokenInHead(e, t);
	}
}
function endTagInHead(e, t) {
	switch (t.tagID) {
		case TAG_ID.HEAD:
			e.openElements.pop(), e.insertionMode = InsertionMode.AFTER_HEAD;
			break;
		case TAG_ID.BODY:
		case TAG_ID.BR:
		case TAG_ID.HTML:
			tokenInHead(e, t);
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(e, t);
			break;
		default: e._err(t, ERR.endTagWithoutMatchingOpenElement);
	}
}
function templateEndTagInHead(e, t) {
	e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== TAG_ID.TEMPLATE && e._err(t, ERR.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(t, ERR.endTagWithoutMatchingOpenElement);
}
function tokenInHead(e, t) {
	e.openElements.pop(), e.insertionMode = InsertionMode.AFTER_HEAD, e._processToken(t);
}
function startTagInHeadNoScript(e, t) {
	switch (t.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, t);
			break;
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.HEAD:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.NOFRAMES:
		case TAG_ID.STYLE:
			startTagInHead(e, t);
			break;
		case TAG_ID.NOSCRIPT:
			e._err(t, ERR.nestedNoscriptInHead);
			break;
		default: tokenInHeadNoScript(e, t);
	}
}
function endTagInHeadNoScript(e, t) {
	switch (t.tagID) {
		case TAG_ID.NOSCRIPT:
			e.openElements.pop(), e.insertionMode = InsertionMode.IN_HEAD;
			break;
		case TAG_ID.BR:
			tokenInHeadNoScript(e, t);
			break;
		default: e._err(t, ERR.endTagWithoutMatchingOpenElement);
	}
}
function tokenInHeadNoScript(e, t) {
	let n = t.type === TokenType.EOF ? ERR.openElementsLeftAfterEof : ERR.disallowedContentInNoscriptInHead;
	e._err(t, n), e.openElements.pop(), e.insertionMode = InsertionMode.IN_HEAD, e._processToken(t);
}
function startTagAfterHead(e, t) {
	switch (t.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, t);
			break;
		case TAG_ID.BODY:
			e._insertElement(t, NS.HTML), e.framesetOk = !1, e.insertionMode = InsertionMode.IN_BODY;
			break;
		case TAG_ID.FRAMESET:
			e._insertElement(t, NS.HTML), e.insertionMode = InsertionMode.IN_FRAMESET;
			break;
		case TAG_ID.BASE:
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.NOFRAMES:
		case TAG_ID.SCRIPT:
		case TAG_ID.STYLE:
		case TAG_ID.TEMPLATE:
		case TAG_ID.TITLE:
			e._err(t, ERR.abandonedHeadElementChild), e.openElements.push(e.headElement, TAG_ID.HEAD), startTagInHead(e, t), e.openElements.remove(e.headElement);
			break;
		case TAG_ID.HEAD:
			e._err(t, ERR.misplacedStartTagForHeadElement);
			break;
		default: tokenAfterHead(e, t);
	}
}
function endTagAfterHead(e, t) {
	switch (t.tagID) {
		case TAG_ID.BODY:
		case TAG_ID.HTML:
		case TAG_ID.BR:
			tokenAfterHead(e, t);
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(e, t);
			break;
		default: e._err(t, ERR.endTagWithoutMatchingOpenElement);
	}
}
function tokenAfterHead(e, t) {
	e._insertFakeElement(TAG_NAMES.BODY, TAG_ID.BODY), e.insertionMode = InsertionMode.IN_BODY, modeInBody(e, t);
}
function modeInBody(e, t) {
	switch (t.type) {
		case TokenType.CHARACTER:
			characterInBody(e, t);
			break;
		case TokenType.WHITESPACE_CHARACTER:
			whitespaceCharacterInBody(e, t);
			break;
		case TokenType.COMMENT:
			appendComment(e, t);
			break;
		case TokenType.START_TAG:
			startTagInBody(e, t);
			break;
		case TokenType.END_TAG:
			endTagInBody(e, t);
			break;
		case TokenType.EOF:
			eofInBody(e, t);
			break;
		default:
	}
}
function whitespaceCharacterInBody(e, t) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(t);
}
function characterInBody(e, t) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = !1;
}
function htmlStartTagInBody(e, t) {
	e.openElements.tmplCount === 0 && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
}
function bodyStartTagInBody(e, t) {
	let n = e.openElements.tryPeekProperlyNestedBodyElement();
	n && e.openElements.tmplCount === 0 && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(n, t.attrs));
}
function framesetStartTagInBody(e, t) {
	let n = e.openElements.tryPeekProperlyNestedBodyElement();
	e.framesetOk && n && (e.treeAdapter.detachNode(n), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, NS.HTML), e.insertionMode = InsertionMode.IN_FRAMESET);
}
function addressStartTagInBody(e, t) {
	e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._insertElement(t, NS.HTML);
}
function numberedHeaderStartTagInBody(e, t) {
	e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e.openElements.currentTagId !== void 0 && NUMBERED_HEADERS.has(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(t, NS.HTML);
}
function preStartTagInBody(e, t) {
	e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._insertElement(t, NS.HTML), e.skipNextNewLine = !0, e.framesetOk = !1;
}
function formStartTagInBody(e, t) {
	let n = e.openElements.tmplCount > 0;
	(!e.formElement || n) && (e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._insertElement(t, NS.HTML), n || (e.formElement = e.openElements.current));
}
function listItemStartTagInBody(e, t) {
	e.framesetOk = !1;
	let n = t.tagID;
	for (let t = e.openElements.stackTop; t >= 0; t--) {
		let r = e.openElements.tagIDs[t];
		if (n === TAG_ID.LI && r === TAG_ID.LI || (n === TAG_ID.DD || n === TAG_ID.DT) && (r === TAG_ID.DD || r === TAG_ID.DT)) {
			e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.popUntilTagNamePopped(r);
			break;
		}
		if (r !== TAG_ID.ADDRESS && r !== TAG_ID.DIV && r !== TAG_ID.P && e._isSpecialElement(e.openElements.items[t], r)) break;
	}
	e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._insertElement(t, NS.HTML);
}
function plaintextStartTagInBody(e, t) {
	e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._insertElement(t, NS.HTML), e.tokenizer.state = TokenizerMode.PLAINTEXT;
}
function buttonStartTagInBody(e, t) {
	e.openElements.hasInScope(TAG_ID.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(TAG_ID.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(t, NS.HTML), e.framesetOk = !1;
}
function aStartTagInBody(e, t) {
	let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(TAG_NAMES.A);
	n && (callAdoptionAgency(e, t), e.openElements.remove(n.element), e.activeFormattingElements.removeEntry(n)), e._reconstructActiveFormattingElements(), e._insertElement(t, NS.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function bStartTagInBody(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, NS.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function nobrStartTagInBody(e, t) {
	e._reconstructActiveFormattingElements(), e.openElements.hasInScope(TAG_ID.NOBR) && (callAdoptionAgency(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, NS.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function appletStartTagInBody(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, NS.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1;
}
function tableStartTagInBody(e, t) {
	e.treeAdapter.getDocumentMode(e.document) !== DOCUMENT_MODE.QUIRKS && e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._insertElement(t, NS.HTML), e.framesetOk = !1, e.insertionMode = InsertionMode.IN_TABLE;
}
function areaStartTagInBody(e, t) {
	e._reconstructActiveFormattingElements(), e._appendElement(t, NS.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function isHiddenInput(e) {
	let t = getTokenAttr(e, ATTRS.TYPE);
	return t != null && t.toLowerCase() === HIDDEN_INPUT_TYPE;
}
function inputStartTagInBody(e, t) {
	e._reconstructActiveFormattingElements(), e._appendElement(t, NS.HTML), isHiddenInput(t) || (e.framesetOk = !1), t.ackSelfClosing = !0;
}
function paramStartTagInBody(e, t) {
	e._appendElement(t, NS.HTML), t.ackSelfClosing = !0;
}
function hrStartTagInBody(e, t) {
	e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._appendElement(t, NS.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function imageStartTagInBody(e, t) {
	t.tagName = TAG_NAMES.IMG, t.tagID = TAG_ID.IMG, areaStartTagInBody(e, t);
}
function textareaStartTagInBody(e, t) {
	e._insertElement(t, NS.HTML), e.skipNextNewLine = !0, e.tokenizer.state = TokenizerMode.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = InsertionMode.TEXT;
}
function xmpStartTagInBody(e, t) {
	e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(t, TokenizerMode.RAWTEXT);
}
function iframeStartTagInBody(e, t) {
	e.framesetOk = !1, e._switchToTextParsing(t, TokenizerMode.RAWTEXT);
}
function rawTextStartTagInBody(e, t) {
	e._switchToTextParsing(t, TokenizerMode.RAWTEXT);
}
function selectStartTagInBody(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, NS.HTML), e.framesetOk = !1, e.insertionMode = e.insertionMode === InsertionMode.IN_TABLE || e.insertionMode === InsertionMode.IN_CAPTION || e.insertionMode === InsertionMode.IN_TABLE_BODY || e.insertionMode === InsertionMode.IN_ROW || e.insertionMode === InsertionMode.IN_CELL ? InsertionMode.IN_SELECT_IN_TABLE : InsertionMode.IN_SELECT;
}
function optgroupStartTagInBody(e, t) {
	e.openElements.currentTagId === TAG_ID.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, NS.HTML);
}
function rbStartTagInBody(e, t) {
	e.openElements.hasInScope(TAG_ID.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, NS.HTML);
}
function rtStartTagInBody(e, t) {
	e.openElements.hasInScope(TAG_ID.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.RTC), e._insertElement(t, NS.HTML);
}
function mathStartTagInBody(e, t) {
	e._reconstructActiveFormattingElements(), adjustTokenMathMLAttrs(t), adjustTokenXMLAttrs(t), t.selfClosing ? e._appendElement(t, NS.MATHML) : e._insertElement(t, NS.MATHML), t.ackSelfClosing = !0;
}
function svgStartTagInBody(e, t) {
	e._reconstructActiveFormattingElements(), adjustTokenSVGAttrs(t), adjustTokenXMLAttrs(t), t.selfClosing ? e._appendElement(t, NS.SVG) : e._insertElement(t, NS.SVG), t.ackSelfClosing = !0;
}
function genericStartTagInBody(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, NS.HTML);
}
function startTagInBody(e, t) {
	switch (t.tagID) {
		case TAG_ID.I:
		case TAG_ID.S:
		case TAG_ID.B:
		case TAG_ID.U:
		case TAG_ID.EM:
		case TAG_ID.TT:
		case TAG_ID.BIG:
		case TAG_ID.CODE:
		case TAG_ID.FONT:
		case TAG_ID.SMALL:
		case TAG_ID.STRIKE:
		case TAG_ID.STRONG:
			bStartTagInBody(e, t);
			break;
		case TAG_ID.A:
			aStartTagInBody(e, t);
			break;
		case TAG_ID.H1:
		case TAG_ID.H2:
		case TAG_ID.H3:
		case TAG_ID.H4:
		case TAG_ID.H5:
		case TAG_ID.H6:
			numberedHeaderStartTagInBody(e, t);
			break;
		case TAG_ID.P:
		case TAG_ID.DL:
		case TAG_ID.OL:
		case TAG_ID.UL:
		case TAG_ID.DIV:
		case TAG_ID.DIR:
		case TAG_ID.NAV:
		case TAG_ID.MAIN:
		case TAG_ID.MENU:
		case TAG_ID.ASIDE:
		case TAG_ID.CENTER:
		case TAG_ID.FIGURE:
		case TAG_ID.FOOTER:
		case TAG_ID.HEADER:
		case TAG_ID.HGROUP:
		case TAG_ID.DIALOG:
		case TAG_ID.DETAILS:
		case TAG_ID.ADDRESS:
		case TAG_ID.ARTICLE:
		case TAG_ID.SEARCH:
		case TAG_ID.SECTION:
		case TAG_ID.SUMMARY:
		case TAG_ID.FIELDSET:
		case TAG_ID.BLOCKQUOTE:
		case TAG_ID.FIGCAPTION:
			addressStartTagInBody(e, t);
			break;
		case TAG_ID.LI:
		case TAG_ID.DD:
		case TAG_ID.DT:
			listItemStartTagInBody(e, t);
			break;
		case TAG_ID.BR:
		case TAG_ID.IMG:
		case TAG_ID.WBR:
		case TAG_ID.AREA:
		case TAG_ID.EMBED:
		case TAG_ID.KEYGEN:
			areaStartTagInBody(e, t);
			break;
		case TAG_ID.HR:
			hrStartTagInBody(e, t);
			break;
		case TAG_ID.RB:
		case TAG_ID.RTC:
			rbStartTagInBody(e, t);
			break;
		case TAG_ID.RT:
		case TAG_ID.RP:
			rtStartTagInBody(e, t);
			break;
		case TAG_ID.PRE:
		case TAG_ID.LISTING:
			preStartTagInBody(e, t);
			break;
		case TAG_ID.XMP:
			xmpStartTagInBody(e, t);
			break;
		case TAG_ID.SVG:
			svgStartTagInBody(e, t);
			break;
		case TAG_ID.HTML:
			htmlStartTagInBody(e, t);
			break;
		case TAG_ID.BASE:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.STYLE:
		case TAG_ID.TITLE:
		case TAG_ID.SCRIPT:
		case TAG_ID.BGSOUND:
		case TAG_ID.BASEFONT:
		case TAG_ID.TEMPLATE:
			startTagInHead(e, t);
			break;
		case TAG_ID.BODY:
			bodyStartTagInBody(e, t);
			break;
		case TAG_ID.FORM:
			formStartTagInBody(e, t);
			break;
		case TAG_ID.NOBR:
			nobrStartTagInBody(e, t);
			break;
		case TAG_ID.MATH:
			mathStartTagInBody(e, t);
			break;
		case TAG_ID.TABLE:
			tableStartTagInBody(e, t);
			break;
		case TAG_ID.INPUT:
			inputStartTagInBody(e, t);
			break;
		case TAG_ID.PARAM:
		case TAG_ID.TRACK:
		case TAG_ID.SOURCE:
			paramStartTagInBody(e, t);
			break;
		case TAG_ID.IMAGE:
			imageStartTagInBody(e, t);
			break;
		case TAG_ID.BUTTON:
			buttonStartTagInBody(e, t);
			break;
		case TAG_ID.APPLET:
		case TAG_ID.OBJECT:
		case TAG_ID.MARQUEE:
			appletStartTagInBody(e, t);
			break;
		case TAG_ID.IFRAME:
			iframeStartTagInBody(e, t);
			break;
		case TAG_ID.SELECT:
			selectStartTagInBody(e, t);
			break;
		case TAG_ID.OPTION:
		case TAG_ID.OPTGROUP:
			optgroupStartTagInBody(e, t);
			break;
		case TAG_ID.NOEMBED:
		case TAG_ID.NOFRAMES:
			rawTextStartTagInBody(e, t);
			break;
		case TAG_ID.FRAMESET:
			framesetStartTagInBody(e, t);
			break;
		case TAG_ID.TEXTAREA:
			textareaStartTagInBody(e, t);
			break;
		case TAG_ID.NOSCRIPT:
			e.options.scriptingEnabled ? rawTextStartTagInBody(e, t) : genericStartTagInBody(e, t);
			break;
		case TAG_ID.PLAINTEXT:
			plaintextStartTagInBody(e, t);
			break;
		case TAG_ID.COL:
		case TAG_ID.TH:
		case TAG_ID.TD:
		case TAG_ID.TR:
		case TAG_ID.HEAD:
		case TAG_ID.FRAME:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
		case TAG_ID.CAPTION:
		case TAG_ID.COLGROUP: break;
		default: genericStartTagInBody(e, t);
	}
}
function bodyEndTagInBody(e, t) {
	if (e.openElements.hasInScope(TAG_ID.BODY) && (e.insertionMode = InsertionMode.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
		let n = e.openElements.tryPeekProperlyNestedBodyElement();
		n && e._setEndLocation(n, t);
	}
}
function htmlEndTagInBody(e, t) {
	e.openElements.hasInScope(TAG_ID.BODY) && (e.insertionMode = InsertionMode.AFTER_BODY, endTagAfterBody(e, t));
}
function addressEndTagInBody(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n));
}
function formEndTagInBody(e) {
	let t = e.openElements.tmplCount > 0, { formElement: n } = e;
	t || (e.formElement = null), (n || t) && e.openElements.hasInScope(TAG_ID.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(TAG_ID.FORM) : n && e.openElements.remove(n));
}
function pEndTagInBody(e) {
	e.openElements.hasInButtonScope(TAG_ID.P) || e._insertFakeElement(TAG_NAMES.P, TAG_ID.P), e._closePElement();
}
function liEndTagInBody(e) {
	e.openElements.hasInListItemScope(TAG_ID.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.LI), e.openElements.popUntilTagNamePopped(TAG_ID.LI));
}
function ddEndTagInBody(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilTagNamePopped(n));
}
function numberedHeaderEndTagInBody(e) {
	e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
}
function appletEndTagInBody(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker());
}
function brEndTagInBody(e) {
	e._reconstructActiveFormattingElements(), e._insertFakeElement(TAG_NAMES.BR, TAG_ID.BR), e.openElements.pop(), e.framesetOk = !1;
}
function genericEndTagInBody(e, t) {
	let n = t.tagName, r = t.tagID;
	for (let t = e.openElements.stackTop; t > 0; t--) {
		let i = e.openElements.items[t], a = e.openElements.tagIDs[t];
		if (r === a && (r !== TAG_ID.UNKNOWN || e.treeAdapter.getTagName(i) === n)) {
			e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.stackTop >= t && e.openElements.shortenToLength(t);
			break;
		}
		if (e._isSpecialElement(i, a)) break;
	}
}
function endTagInBody(e, t) {
	switch (t.tagID) {
		case TAG_ID.A:
		case TAG_ID.B:
		case TAG_ID.I:
		case TAG_ID.S:
		case TAG_ID.U:
		case TAG_ID.EM:
		case TAG_ID.TT:
		case TAG_ID.BIG:
		case TAG_ID.CODE:
		case TAG_ID.FONT:
		case TAG_ID.NOBR:
		case TAG_ID.SMALL:
		case TAG_ID.STRIKE:
		case TAG_ID.STRONG:
			callAdoptionAgency(e, t);
			break;
		case TAG_ID.P:
			pEndTagInBody(e);
			break;
		case TAG_ID.DL:
		case TAG_ID.UL:
		case TAG_ID.OL:
		case TAG_ID.DIR:
		case TAG_ID.DIV:
		case TAG_ID.NAV:
		case TAG_ID.PRE:
		case TAG_ID.MAIN:
		case TAG_ID.MENU:
		case TAG_ID.ASIDE:
		case TAG_ID.BUTTON:
		case TAG_ID.CENTER:
		case TAG_ID.FIGURE:
		case TAG_ID.FOOTER:
		case TAG_ID.HEADER:
		case TAG_ID.HGROUP:
		case TAG_ID.DIALOG:
		case TAG_ID.ADDRESS:
		case TAG_ID.ARTICLE:
		case TAG_ID.DETAILS:
		case TAG_ID.SEARCH:
		case TAG_ID.SECTION:
		case TAG_ID.SUMMARY:
		case TAG_ID.LISTING:
		case TAG_ID.FIELDSET:
		case TAG_ID.BLOCKQUOTE:
		case TAG_ID.FIGCAPTION:
			addressEndTagInBody(e, t);
			break;
		case TAG_ID.LI:
			liEndTagInBody(e);
			break;
		case TAG_ID.DD:
		case TAG_ID.DT:
			ddEndTagInBody(e, t);
			break;
		case TAG_ID.H1:
		case TAG_ID.H2:
		case TAG_ID.H3:
		case TAG_ID.H4:
		case TAG_ID.H5:
		case TAG_ID.H6:
			numberedHeaderEndTagInBody(e);
			break;
		case TAG_ID.BR:
			brEndTagInBody(e);
			break;
		case TAG_ID.BODY:
			bodyEndTagInBody(e, t);
			break;
		case TAG_ID.HTML:
			htmlEndTagInBody(e, t);
			break;
		case TAG_ID.FORM:
			formEndTagInBody(e);
			break;
		case TAG_ID.APPLET:
		case TAG_ID.OBJECT:
		case TAG_ID.MARQUEE:
			appletEndTagInBody(e, t);
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(e, t);
			break;
		default: genericEndTagInBody(e, t);
	}
}
function eofInBody(e, t) {
	e.tmplInsertionModeStack.length > 0 ? eofInTemplate(e, t) : stopParsing(e, t);
}
function endTagInText(e, t) {
	var n;
	t.tagID === TAG_ID.SCRIPT && ((n = e.scriptHandler) == null || n.call(e, e.openElements.current)), e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
}
function eofInText(e, t) {
	e._err(t, ERR.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(t);
}
function characterInTable(e, t) {
	if (e.openElements.currentTagId !== void 0 && TABLE_STRUCTURE_TAGS.has(e.openElements.currentTagId)) switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = InsertionMode.IN_TABLE_TEXT, t.type) {
		case TokenType.CHARACTER:
			characterInTableText(e, t);
			break;
		case TokenType.WHITESPACE_CHARACTER:
			whitespaceCharacterInTableText(e, t);
			break;
	}
	else tokenInTable(e, t);
}
function captionStartTagInTable(e, t) {
	e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, NS.HTML), e.insertionMode = InsertionMode.IN_CAPTION;
}
function colgroupStartTagInTable(e, t) {
	e.openElements.clearBackToTableContext(), e._insertElement(t, NS.HTML), e.insertionMode = InsertionMode.IN_COLUMN_GROUP;
}
function colStartTagInTable(e, t) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(TAG_NAMES.COLGROUP, TAG_ID.COLGROUP), e.insertionMode = InsertionMode.IN_COLUMN_GROUP, startTagInColumnGroup(e, t);
}
function tbodyStartTagInTable(e, t) {
	e.openElements.clearBackToTableContext(), e._insertElement(t, NS.HTML), e.insertionMode = InsertionMode.IN_TABLE_BODY;
}
function tdStartTagInTable(e, t) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(TAG_NAMES.TBODY, TAG_ID.TBODY), e.insertionMode = InsertionMode.IN_TABLE_BODY, startTagInTableBody(e, t);
}
function tableStartTagInTable(e, t) {
	e.openElements.hasInTableScope(TAG_ID.TABLE) && (e.openElements.popUntilTagNamePopped(TAG_ID.TABLE), e._resetInsertionMode(), e._processStartTag(t));
}
function inputStartTagInTable(e, t) {
	isHiddenInput(t) ? e._appendElement(t, NS.HTML) : tokenInTable(e, t), t.ackSelfClosing = !0;
}
function formStartTagInTable(e, t) {
	!e.formElement && e.openElements.tmplCount === 0 && (e._insertElement(t, NS.HTML), e.formElement = e.openElements.current, e.openElements.pop());
}
function startTagInTable(e, t) {
	switch (t.tagID) {
		case TAG_ID.TD:
		case TAG_ID.TH:
		case TAG_ID.TR:
			tdStartTagInTable(e, t);
			break;
		case TAG_ID.STYLE:
		case TAG_ID.SCRIPT:
		case TAG_ID.TEMPLATE:
			startTagInHead(e, t);
			break;
		case TAG_ID.COL:
			colStartTagInTable(e, t);
			break;
		case TAG_ID.FORM:
			formStartTagInTable(e, t);
			break;
		case TAG_ID.TABLE:
			tableStartTagInTable(e, t);
			break;
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			tbodyStartTagInTable(e, t);
			break;
		case TAG_ID.INPUT:
			inputStartTagInTable(e, t);
			break;
		case TAG_ID.CAPTION:
			captionStartTagInTable(e, t);
			break;
		case TAG_ID.COLGROUP:
			colgroupStartTagInTable(e, t);
			break;
		default: tokenInTable(e, t);
	}
}
function endTagInTable(e, t) {
	switch (t.tagID) {
		case TAG_ID.TABLE:
			e.openElements.hasInTableScope(TAG_ID.TABLE) && (e.openElements.popUntilTagNamePopped(TAG_ID.TABLE), e._resetInsertionMode());
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(e, t);
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TBODY:
		case TAG_ID.TD:
		case TAG_ID.TFOOT:
		case TAG_ID.TH:
		case TAG_ID.THEAD:
		case TAG_ID.TR: break;
		default: tokenInTable(e, t);
	}
}
function tokenInTable(e, t) {
	let n = e.fosterParentingEnabled;
	e.fosterParentingEnabled = !0, modeInBody(e, t), e.fosterParentingEnabled = n;
}
function whitespaceCharacterInTableText(e, t) {
	e.pendingCharacterTokens.push(t);
}
function characterInTableText(e, t) {
	e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = !0;
}
function tokenInTableText(e, t) {
	let n = 0;
	if (e.hasNonWhitespacePendingCharacterToken) for (; n < e.pendingCharacterTokens.length; n++) tokenInTable(e, e.pendingCharacterTokens[n]);
	else for (; n < e.pendingCharacterTokens.length; n++) e._insertCharacters(e.pendingCharacterTokens[n]);
	e.insertionMode = e.originalInsertionMode, e._processToken(t);
}
var TABLE_VOID_ELEMENTS = new Set([
	TAG_ID.CAPTION,
	TAG_ID.COL,
	TAG_ID.COLGROUP,
	TAG_ID.TBODY,
	TAG_ID.TD,
	TAG_ID.TFOOT,
	TAG_ID.TH,
	TAG_ID.THEAD,
	TAG_ID.TR
]);
function startTagInCaption(e, t) {
	let n = t.tagID;
	TABLE_VOID_ELEMENTS.has(n) ? e.openElements.hasInTableScope(TAG_ID.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(TAG_ID.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = InsertionMode.IN_TABLE, startTagInTable(e, t)) : startTagInBody(e, t);
}
function endTagInCaption(e, t) {
	let n = t.tagID;
	switch (n) {
		case TAG_ID.CAPTION:
		case TAG_ID.TABLE:
			e.openElements.hasInTableScope(TAG_ID.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(TAG_ID.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = InsertionMode.IN_TABLE, n === TAG_ID.TABLE && endTagInTable(e, t));
			break;
		case TAG_ID.BODY:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TBODY:
		case TAG_ID.TD:
		case TAG_ID.TFOOT:
		case TAG_ID.TH:
		case TAG_ID.THEAD:
		case TAG_ID.TR: break;
		default: endTagInBody(e, t);
	}
}
function startTagInColumnGroup(e, t) {
	switch (t.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, t);
			break;
		case TAG_ID.COL:
			e._appendElement(t, NS.HTML), t.ackSelfClosing = !0;
			break;
		case TAG_ID.TEMPLATE:
			startTagInHead(e, t);
			break;
		default: tokenInColumnGroup(e, t);
	}
}
function endTagInColumnGroup(e, t) {
	switch (t.tagID) {
		case TAG_ID.COLGROUP:
			e.openElements.currentTagId === TAG_ID.COLGROUP && (e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE);
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(e, t);
			break;
		case TAG_ID.COL: break;
		default: tokenInColumnGroup(e, t);
	}
}
function tokenInColumnGroup(e, t) {
	e.openElements.currentTagId === TAG_ID.COLGROUP && (e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE, e._processToken(t));
}
function startTagInTableBody(e, t) {
	switch (t.tagID) {
		case TAG_ID.TR:
			e.openElements.clearBackToTableBodyContext(), e._insertElement(t, NS.HTML), e.insertionMode = InsertionMode.IN_ROW;
			break;
		case TAG_ID.TH:
		case TAG_ID.TD:
			e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(TAG_NAMES.TR, TAG_ID.TR), e.insertionMode = InsertionMode.IN_ROW, startTagInRow(e, t);
			break;
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE, startTagInTable(e, t));
			break;
		default: startTagInTable(e, t);
	}
}
function endTagInTableBody(e, t) {
	let n = t.tagID;
	switch (t.tagID) {
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			e.openElements.hasInTableScope(n) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE);
			break;
		case TAG_ID.TABLE:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE, endTagInTable(e, t));
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TD:
		case TAG_ID.TH:
		case TAG_ID.TR: break;
		default: endTagInTable(e, t);
	}
}
function startTagInRow(e, t) {
	switch (t.tagID) {
		case TAG_ID.TH:
		case TAG_ID.TD:
			e.openElements.clearBackToTableRowContext(), e._insertElement(t, NS.HTML), e.insertionMode = InsertionMode.IN_CELL, e.activeFormattingElements.insertMarker();
			break;
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
		case TAG_ID.TR:
			e.openElements.hasInTableScope(TAG_ID.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE_BODY, startTagInTableBody(e, t));
			break;
		default: startTagInTable(e, t);
	}
}
function endTagInRow(e, t) {
	switch (t.tagID) {
		case TAG_ID.TR:
			e.openElements.hasInTableScope(TAG_ID.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE_BODY);
			break;
		case TAG_ID.TABLE:
			e.openElements.hasInTableScope(TAG_ID.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE_BODY, endTagInTableBody(e, t));
			break;
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			(e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(TAG_ID.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE_BODY, endTagInTableBody(e, t));
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TD:
		case TAG_ID.TH: break;
		default: endTagInTable(e, t);
	}
}
function startTagInCell(e, t) {
	let n = t.tagID;
	TABLE_VOID_ELEMENTS.has(n) ? (e.openElements.hasInTableScope(TAG_ID.TD) || e.openElements.hasInTableScope(TAG_ID.TH)) && (e._closeTableCell(), startTagInRow(e, t)) : startTagInBody(e, t);
}
function endTagInCell(e, t) {
	let n = t.tagID;
	switch (n) {
		case TAG_ID.TD:
		case TAG_ID.TH:
			e.openElements.hasInTableScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = InsertionMode.IN_ROW);
			break;
		case TAG_ID.TABLE:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
		case TAG_ID.TR:
			e.openElements.hasInTableScope(n) && (e._closeTableCell(), endTagInRow(e, t));
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML: break;
		default: endTagInBody(e, t);
	}
}
function startTagInSelect(e, t) {
	switch (t.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, t);
			break;
		case TAG_ID.OPTION:
			e.openElements.currentTagId === TAG_ID.OPTION && e.openElements.pop(), e._insertElement(t, NS.HTML);
			break;
		case TAG_ID.OPTGROUP:
			e.openElements.currentTagId === TAG_ID.OPTION && e.openElements.pop(), e.openElements.currentTagId === TAG_ID.OPTGROUP && e.openElements.pop(), e._insertElement(t, NS.HTML);
			break;
		case TAG_ID.HR:
			e.openElements.currentTagId === TAG_ID.OPTION && e.openElements.pop(), e.openElements.currentTagId === TAG_ID.OPTGROUP && e.openElements.pop(), e._appendElement(t, NS.HTML), t.ackSelfClosing = !0;
			break;
		case TAG_ID.INPUT:
		case TAG_ID.KEYGEN:
		case TAG_ID.TEXTAREA:
		case TAG_ID.SELECT:
			e.openElements.hasInSelectScope(TAG_ID.SELECT) && (e.openElements.popUntilTagNamePopped(TAG_ID.SELECT), e._resetInsertionMode(), t.tagID !== TAG_ID.SELECT && e._processStartTag(t));
			break;
		case TAG_ID.SCRIPT:
		case TAG_ID.TEMPLATE:
			startTagInHead(e, t);
			break;
		default:
	}
}
function endTagInSelect(e, t) {
	switch (t.tagID) {
		case TAG_ID.OPTGROUP:
			e.openElements.stackTop > 0 && e.openElements.currentTagId === TAG_ID.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === TAG_ID.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === TAG_ID.OPTGROUP && e.openElements.pop();
			break;
		case TAG_ID.OPTION:
			e.openElements.currentTagId === TAG_ID.OPTION && e.openElements.pop();
			break;
		case TAG_ID.SELECT:
			e.openElements.hasInSelectScope(TAG_ID.SELECT) && (e.openElements.popUntilTagNamePopped(TAG_ID.SELECT), e._resetInsertionMode());
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(e, t);
			break;
		default:
	}
}
function startTagInSelectInTable(e, t) {
	let n = t.tagID;
	n === TAG_ID.CAPTION || n === TAG_ID.TABLE || n === TAG_ID.TBODY || n === TAG_ID.TFOOT || n === TAG_ID.THEAD || n === TAG_ID.TR || n === TAG_ID.TD || n === TAG_ID.TH ? (e.openElements.popUntilTagNamePopped(TAG_ID.SELECT), e._resetInsertionMode(), e._processStartTag(t)) : startTagInSelect(e, t);
}
function endTagInSelectInTable(e, t) {
	let n = t.tagID;
	n === TAG_ID.CAPTION || n === TAG_ID.TABLE || n === TAG_ID.TBODY || n === TAG_ID.TFOOT || n === TAG_ID.THEAD || n === TAG_ID.TR || n === TAG_ID.TD || n === TAG_ID.TH ? e.openElements.hasInTableScope(n) && (e.openElements.popUntilTagNamePopped(TAG_ID.SELECT), e._resetInsertionMode(), e.onEndTag(t)) : endTagInSelect(e, t);
}
function startTagInTemplate(e, t) {
	switch (t.tagID) {
		case TAG_ID.BASE:
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.NOFRAMES:
		case TAG_ID.SCRIPT:
		case TAG_ID.STYLE:
		case TAG_ID.TEMPLATE:
		case TAG_ID.TITLE:
			startTagInHead(e, t);
			break;
		case TAG_ID.CAPTION:
		case TAG_ID.COLGROUP:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			e.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE, e.insertionMode = InsertionMode.IN_TABLE, startTagInTable(e, t);
			break;
		case TAG_ID.COL:
			e.tmplInsertionModeStack[0] = InsertionMode.IN_COLUMN_GROUP, e.insertionMode = InsertionMode.IN_COLUMN_GROUP, startTagInColumnGroup(e, t);
			break;
		case TAG_ID.TR:
			e.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE_BODY, e.insertionMode = InsertionMode.IN_TABLE_BODY, startTagInTableBody(e, t);
			break;
		case TAG_ID.TD:
		case TAG_ID.TH:
			e.tmplInsertionModeStack[0] = InsertionMode.IN_ROW, e.insertionMode = InsertionMode.IN_ROW, startTagInRow(e, t);
			break;
		default: e.tmplInsertionModeStack[0] = InsertionMode.IN_BODY, e.insertionMode = InsertionMode.IN_BODY, startTagInBody(e, t);
	}
}
function endTagInTemplate(e, t) {
	t.tagID === TAG_ID.TEMPLATE && templateEndTagInHead(e, t);
}
function eofInTemplate(e, t) {
	e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(t)) : stopParsing(e, t);
}
function startTagAfterBody(e, t) {
	t.tagID === TAG_ID.HTML ? startTagInBody(e, t) : tokenAfterBody(e, t);
}
function endTagAfterBody(e, t) {
	if (t.tagID === TAG_ID.HTML) {
		if (e.fragmentContext || (e.insertionMode = InsertionMode.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === TAG_ID.HTML) {
			e._setEndLocation(e.openElements.items[0], t);
			let n = e.openElements.items[1];
			n && !e.treeAdapter.getNodeSourceCodeLocation(n)?.endTag && e._setEndLocation(n, t);
		}
	} else tokenAfterBody(e, t);
}
function tokenAfterBody(e, t) {
	e.insertionMode = InsertionMode.IN_BODY, modeInBody(e, t);
}
function startTagInFrameset(e, t) {
	switch (t.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, t);
			break;
		case TAG_ID.FRAMESET:
			e._insertElement(t, NS.HTML);
			break;
		case TAG_ID.FRAME:
			e._appendElement(t, NS.HTML), t.ackSelfClosing = !0;
			break;
		case TAG_ID.NOFRAMES:
			startTagInHead(e, t);
			break;
		default:
	}
}
function endTagInFrameset(e, t) {
	t.tagID === TAG_ID.FRAMESET && !e.openElements.isRootHtmlElementCurrent() && (e.openElements.pop(), !e.fragmentContext && e.openElements.currentTagId !== TAG_ID.FRAMESET && (e.insertionMode = InsertionMode.AFTER_FRAMESET));
}
function startTagAfterFrameset(e, t) {
	switch (t.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, t);
			break;
		case TAG_ID.NOFRAMES:
			startTagInHead(e, t);
			break;
		default:
	}
}
function endTagAfterFrameset(e, t) {
	t.tagID === TAG_ID.HTML && (e.insertionMode = InsertionMode.AFTER_AFTER_FRAMESET);
}
function startTagAfterAfterBody(e, t) {
	t.tagID === TAG_ID.HTML ? startTagInBody(e, t) : tokenAfterAfterBody(e, t);
}
function tokenAfterAfterBody(e, t) {
	e.insertionMode = InsertionMode.IN_BODY, modeInBody(e, t);
}
function startTagAfterAfterFrameset(e, t) {
	switch (t.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, t);
			break;
		case TAG_ID.NOFRAMES:
			startTagInHead(e, t);
			break;
		default:
	}
}
function nullCharacterInForeignContent(e, t) {
	t.chars = "�", e._insertCharacters(t);
}
function characterInForeignContent(e, t) {
	e._insertCharacters(t), e.framesetOk = !1;
}
function popUntilHtmlOrIntegrationPoint(e) {
	for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== NS.HTML && e.openElements.currentTagId !== void 0 && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current);) e.openElements.pop();
}
function startTagInForeignContent(e, t) {
	if (causesExit(t)) popUntilHtmlOrIntegrationPoint(e), e._startTagOutsideForeignContent(t);
	else {
		let n = e._getAdjustedCurrentElement(), r = e.treeAdapter.getNamespaceURI(n);
		r === NS.MATHML ? adjustTokenMathMLAttrs(t) : r === NS.SVG && (adjustTokenSVGTagName(t), adjustTokenSVGAttrs(t)), adjustTokenXMLAttrs(t), t.selfClosing ? e._appendElement(t, r) : e._insertElement(t, r), t.ackSelfClosing = !0;
	}
}
function endTagInForeignContent(e, t) {
	if (t.tagID === TAG_ID.P || t.tagID === TAG_ID.BR) {
		popUntilHtmlOrIntegrationPoint(e), e._endTagOutsideForeignContent(t);
		return;
	}
	for (let n = e.openElements.stackTop; n > 0; n--) {
		let r = e.openElements.items[n];
		if (e.treeAdapter.getNamespaceURI(r) === NS.HTML) {
			e._endTagOutsideForeignContent(t);
			break;
		}
		let i = e.treeAdapter.getTagName(r);
		if (i.toLowerCase() === t.tagName) {
			t.tagName = i, e.openElements.shortenToLength(n);
			break;
		}
	}
}
new Set([
	TAG_NAMES.AREA,
	TAG_NAMES.BASE,
	TAG_NAMES.BASEFONT,
	TAG_NAMES.BGSOUND,
	TAG_NAMES.BR,
	TAG_NAMES.COL,
	TAG_NAMES.EMBED,
	TAG_NAMES.FRAME,
	TAG_NAMES.HR,
	TAG_NAMES.IMG,
	TAG_NAMES.INPUT,
	TAG_NAMES.KEYGEN,
	TAG_NAMES.LINK,
	TAG_NAMES.META,
	TAG_NAMES.PARAM,
	TAG_NAMES.SOURCE,
	TAG_NAMES.TRACK,
	TAG_NAMES.WBR
]);
var gfmTagfilterExpression = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi, knownMdxNames = new Set([
	"mdxFlowExpression",
	"mdxJsxFlowElement",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"mdxjsEsm"
]), parseOptions = {
	sourceCodeLocationInfo: !0,
	scriptingEnabled: !1
};
function raw(e, t) {
	let n = documentMode(e), r = zwitch("type", {
		handlers: {
			root,
			element,
			text,
			comment,
			doctype,
			raw: handleRaw
		},
		unknown
	}), i = {
		parser: n ? new Parser(parseOptions) : Parser.getFragmentParser(void 0, parseOptions),
		handle(e) {
			r(e, i);
		},
		stitches: !1,
		options: t || {}
	};
	r(e, i), resetTokenizer(i, pointStart());
	let a = fromParse5(n ? i.parser.document : i.parser.getFragment(), { file: i.options.file });
	return i.stitches && visit(a, "comment", function(e, t, n) {
		let r = e;
		if (r.value.stitch && n && t !== void 0) {
			let e = n.children;
			return e[t] = r.value.stitch, t;
		}
	}), a.type === "root" && a.children.length === 1 && a.children[0].type === e.type ? a.children[0] : a;
}
function all(e, t) {
	let n = -1;
	/* istanbul ignore else - invalid nodes, see rehypejs/rehype-raw#7. */
	if (e) for (; ++n < e.length;) t.handle(e[n]);
}
function root(e, t) {
	all(e.children, t);
}
function element(e, t) {
	startTag(e, t), all(e.children, t), endTag(e, t);
}
function text(e, t) {
	t.parser.tokenizer.state > 4 && (t.parser.tokenizer.state = 0);
	let n = {
		type: TokenType.CHARACTER,
		chars: e.value,
		location: createParse5Location(e)
	};
	resetTokenizer(t, pointStart(e)), t.parser.currentToken = n, t.parser._processToken(t.parser.currentToken);
}
function doctype(e, t) {
	let n = {
		type: TokenType.DOCTYPE,
		name: "html",
		forceQuirks: !1,
		publicId: "",
		systemId: "",
		location: createParse5Location(e)
	};
	resetTokenizer(t, pointStart(e)), t.parser.currentToken = n, t.parser._processToken(t.parser.currentToken);
}
function stitch(e, t) {
	t.stitches = !0;
	let n = cloneWithoutChildren(e);
	"children" in e && "children" in n && (n.children = raw({
		type: "root",
		children: e.children
	}, t.options).children), comment({
		type: "comment",
		value: { stitch: n }
	}, t);
}
function comment(e, t) {
	let n = e.value, r = {
		type: TokenType.COMMENT,
		data: n,
		location: createParse5Location(e)
	};
	resetTokenizer(t, pointStart(e)), t.parser.currentToken = r, t.parser._processToken(t.parser.currentToken);
}
function handleRaw(e, t) {
	/* c8 ignore next 12 -- removed in <https://github.com/inikulin/parse5/pull/897> */
	if (t.parser.tokenizer.preprocessor.html = "", t.parser.tokenizer.preprocessor.pos = -1, t.parser.tokenizer.preprocessor.lastGapPos = -2, t.parser.tokenizer.preprocessor.gapStack = [], t.parser.tokenizer.preprocessor.skipNextNewLine = !1, t.parser.tokenizer.preprocessor.lastChunkWritten = !1, t.parser.tokenizer.preprocessor.endOfChunkHit = !1, t.parser.tokenizer.preprocessor.isEol = !1, setPoint(t, pointStart(e)), t.parser.tokenizer.write(t.options.tagfilter ? e.value.replace(gfmTagfilterExpression, "&lt;$1$2") : e.value, !1), t.parser.tokenizer._runParsingLoop(), t.parser.tokenizer.state === 72 || t.parser.tokenizer.state === 78) {
		t.parser.tokenizer.preprocessor.lastChunkWritten = !0;
		let e = t.parser.tokenizer._consume();
		t.parser.tokenizer._callState(e);
	}
}
function unknown(e, t) {
	let n = e;
	if (t.options.passThrough && t.options.passThrough.includes(n.type)) stitch(n, t);
	else {
		let e = "";
		throw knownMdxNames.has(n.type) && (e = ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"), Error("Cannot compile `" + n.type + "` node" + e);
	}
}
function resetTokenizer(e, t) {
	setPoint(e, t);
	let n = e.parser.tokenizer.currentCharacterToken;
	n && n.location && (n.location.endLine = e.parser.tokenizer.preprocessor.line, n.location.endCol = e.parser.tokenizer.preprocessor.col + 1, n.location.endOffset = e.parser.tokenizer.preprocessor.offset + 1, e.parser.currentToken = n, e.parser._processToken(e.parser.currentToken)), e.parser.tokenizer.paused = !1, e.parser.tokenizer.inLoop = !1, e.parser.tokenizer.active = !1, e.parser.tokenizer.returnState = TokenizerMode.DATA, e.parser.tokenizer.charRefCode = -1, e.parser.tokenizer.consumedAfterSnapshot = -1, e.parser.tokenizer.currentLocation = null, e.parser.tokenizer.currentCharacterToken = null, e.parser.tokenizer.currentToken = null, e.parser.tokenizer.currentAttr = {
		name: "",
		value: ""
	};
}
function setPoint(e, t) {
	if (t && t.offset !== void 0) {
		let n = {
			startLine: t.line,
			startCol: t.column,
			startOffset: t.offset,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		};
		e.parser.tokenizer.preprocessor.lineStartPos = -t.column + 1, e.parser.tokenizer.preprocessor.droppedBufferSize = t.offset, e.parser.tokenizer.preprocessor.line = t.line, e.parser.tokenizer.currentLocation = n;
	}
}
function startTag(e, t) {
	let n = e.tagName.toLowerCase();
	if (t.parser.tokenizer.state === TokenizerMode.PLAINTEXT) return;
	resetTokenizer(t, pointStart(e));
	let r = t.parser.openElements.current, i = "namespaceURI" in r ? r.namespaceURI : webNamespaces.html;
	i === webNamespaces.html && n === "svg" && (i = webNamespaces.svg);
	let a = toParse5({
		...e,
		children: []
	}, { space: i === webNamespaces.svg ? "svg" : "html" }), o = {
		type: TokenType.START_TAG,
		tagName: n,
		tagID: getTagID(n),
		selfClosing: !1,
		ackSelfClosing: !1,
		attrs: "attrs" in a ? a.attrs : [],
		location: createParse5Location(e)
	};
	t.parser.currentToken = o, t.parser._processToken(t.parser.currentToken), t.parser.tokenizer.lastStartTagName = n;
}
function endTag(e, t) {
	let n = e.tagName.toLowerCase();
	if (!t.parser.tokenizer.inForeignNode && htmlVoidElements.includes(n) || t.parser.tokenizer.state === TokenizerMode.PLAINTEXT) return;
	resetTokenizer(t, pointEnd(e));
	let r = {
		type: TokenType.END_TAG,
		tagName: n,
		tagID: getTagID(n),
		selfClosing: !1,
		ackSelfClosing: !1,
		attrs: [],
		location: createParse5Location(e)
	};
	t.parser.currentToken = r, t.parser._processToken(t.parser.currentToken), n === t.parser.tokenizer.lastStartTagName && (t.parser.tokenizer.state === TokenizerMode.RCDATA || t.parser.tokenizer.state === TokenizerMode.RAWTEXT || t.parser.tokenizer.state === TokenizerMode.SCRIPT_DATA) && (t.parser.tokenizer.state = TokenizerMode.DATA);
}
function documentMode(e) {
	let t = e.type === "root" ? e.children[0] : e;
	return !!(t && (t.type === "doctype" || t.type === "element" && t.tagName.toLowerCase() === "html"));
}
function createParse5Location(e) {
	let t = pointStart(e) || {
		line: void 0,
		column: void 0,
		offset: void 0
	}, n = pointEnd(e) || {
		line: void 0,
		column: void 0,
		offset: void 0
	};
	return {
		startLine: t.line,
		startCol: t.column,
		startOffset: t.offset,
		endLine: n.line,
		endCol: n.column,
		endOffset: n.offset
	};
}
function cloneWithoutChildren(e) {
	return "children" in e ? esm_default({
		...e,
		children: []
	}) : esm_default(e);
}
function rehypeRaw(e) {
	return function(t, n) {
		return raw(t, {
			...e,
			file: n
		});
	};
}
var originalBodyUserSelect, HOVERCARD_NAME = "HoverCard", [createHoverCardContext, createHoverCardScope] = createContextScope(HOVERCARD_NAME, [createPopperScope]), usePopperScope = createPopperScope(), [HoverCardProvider, useHoverCardContext] = createHoverCardContext(HOVERCARD_NAME), HoverCard = (e) => {
	let { __scopeHoverCard: t, children: n, open: r, defaultOpen: i, onOpenChange: a, openDelay: o = 700, closeDelay: c = 300 } = e, l = usePopperScope(t), u = React$1.useRef(0), d = React$1.useRef(0), f = React$1.useRef(!1), g = React$1.useRef(!1), [_, v] = useControllableState({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: HOVERCARD_NAME
	}), y = React$1.useCallback(() => {
		clearTimeout(d.current), u.current = window.setTimeout(() => v(!0), o);
	}, [o, v]), b = React$1.useCallback(() => {
		clearTimeout(u.current), !f.current && !g.current && (d.current = window.setTimeout(() => v(!1), c));
	}, [c, v]), x = React$1.useCallback(() => v(!1), [v]);
	return React$1.useEffect(() => () => {
		clearTimeout(u.current), clearTimeout(d.current);
	}, []), /* @__PURE__ */ jsx(HoverCardProvider, {
		scope: t,
		open: _,
		onOpenChange: v,
		onOpen: y,
		onClose: b,
		onDismiss: x,
		hasSelectionRef: f,
		isPointerDownOnContentRef: g,
		children: /* @__PURE__ */ jsx(Root2$1, {
			...l,
			children: n
		})
	});
};
HoverCard.displayName = HOVERCARD_NAME;
var TRIGGER_NAME = "HoverCardTrigger", HoverCardTrigger = React$1.forwardRef((t, n) => {
	let { __scopeHoverCard: r, ...i } = t, a = useHoverCardContext(TRIGGER_NAME, r);
	return /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...usePopperScope(r),
		children: /* @__PURE__ */ jsx(Primitive.a, {
			"data-state": a.open ? "open" : "closed",
			...i,
			ref: n,
			onPointerEnter: composeEventHandlers(t.onPointerEnter, excludeTouch(a.onOpen)),
			onPointerLeave: composeEventHandlers(t.onPointerLeave, excludeTouch(a.onClose)),
			onFocus: composeEventHandlers(t.onFocus, a.onOpen),
			onBlur: composeEventHandlers(t.onBlur, a.onClose),
			onTouchStart: composeEventHandlers(t.onTouchStart, (e) => e.preventDefault())
		})
	});
});
HoverCardTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "HoverCardPortal", [PortalProvider, usePortalContext] = createHoverCardContext(PORTAL_NAME, { forceMount: void 0 }), HoverCardPortal = (e) => {
	let { __scopeHoverCard: t, forceMount: n, children: r, container: i } = e, a = useHoverCardContext(PORTAL_NAME, t);
	return /* @__PURE__ */ jsx(PortalProvider, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ jsx(Presence, {
			present: n || a.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
HoverCardPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "HoverCardContent", HoverCardContent = React$1.forwardRef((t, n) => {
	let r = usePortalContext(CONTENT_NAME, t.__scopeHoverCard), { forceMount: i = r.forceMount, ...a } = t, o = useHoverCardContext(CONTENT_NAME, t.__scopeHoverCard);
	return /* @__PURE__ */ jsx(Presence, {
		present: i || o.open,
		children: /* @__PURE__ */ jsx(HoverCardContentImpl, {
			"data-state": o.open ? "open" : "closed",
			...a,
			onPointerEnter: composeEventHandlers(t.onPointerEnter, excludeTouch(o.onOpen)),
			onPointerLeave: composeEventHandlers(t.onPointerLeave, excludeTouch(o.onClose)),
			ref: n
		})
	});
});
HoverCardContent.displayName = CONTENT_NAME;
var HoverCardContentImpl = React$1.forwardRef((t, n) => {
	let { __scopeHoverCard: i, onEscapeKeyDown: a, onPointerDownOutside: o, onFocusOutside: c, onInteractOutside: u, ...d } = t, f = useHoverCardContext(CONTENT_NAME, i), p = usePopperScope(i), m = React$1.useRef(null), _ = useComposedRefs$1(n, m), [v, y] = React$1.useState(!1);
	return React$1.useEffect(() => {
		if (v) {
			let e = document.body;
			return originalBodyUserSelect = e.style.userSelect || e.style.webkitUserSelect, e.style.userSelect = "none", e.style.webkitUserSelect = "none", () => {
				e.style.userSelect = originalBodyUserSelect, e.style.webkitUserSelect = originalBodyUserSelect;
			};
		}
	}, [v]), React$1.useEffect(() => {
		if (m.current) {
			let e = () => {
				y(!1), f.isPointerDownOnContentRef.current = !1, setTimeout(() => {
					document.getSelection()?.toString() !== "" && (f.hasSelectionRef.current = !0);
				});
			};
			return document.addEventListener("pointerup", e), () => {
				document.removeEventListener("pointerup", e), f.hasSelectionRef.current = !1, f.isPointerDownOnContentRef.current = !1;
			};
		}
	}, [f.isPointerDownOnContentRef, f.hasSelectionRef]), React$1.useEffect(() => {
		m.current && getTabbableNodes(m.current).forEach((e) => e.setAttribute("tabindex", "-1"));
	}), /* @__PURE__ */ jsx(DismissableLayer, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onInteractOutside: u,
		onEscapeKeyDown: a,
		onPointerDownOutside: o,
		onFocusOutside: composeEventHandlers(c, (e) => {
			e.preventDefault();
		}),
		onDismiss: f.onDismiss,
		children: /* @__PURE__ */ jsx(Content, {
			...p,
			...d,
			onPointerDown: composeEventHandlers(d.onPointerDown, (e) => {
				e.currentTarget.contains(e.target) && y(!0), f.hasSelectionRef.current = !1, f.isPointerDownOnContentRef.current = !0;
			}),
			ref: _,
			style: {
				...d.style,
				userSelect: v ? "text" : void 0,
				WebkitUserSelect: v ? "text" : void 0,
				"--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
				"--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
				"--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
			}
		})
	});
}), ARROW_NAME = "HoverCardArrow", HoverCardArrow = React$1.forwardRef((e, t) => {
	let { __scopeHoverCard: n, ...r } = e;
	return /* @__PURE__ */ jsx(Arrow, {
		...usePopperScope(n),
		...r,
		ref: t
	});
});
HoverCardArrow.displayName = ARROW_NAME;
function excludeTouch(e) {
	return (t) => t.pointerType === "touch" ? void 0 : e();
}
function getTabbableNodes(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
var Root2 = HoverCard, Trigger = HoverCardTrigger, Content2 = HoverCardContent;
function encode(e, t) {
	var n, r, i, a = "";
	for (n in e) if ((i = e[n]) !== void 0) if (Array.isArray(i)) for (r = 0; r < i.length; r++) a && (a += "&"), a += encodeURIComponent(n) + "=" + encodeURIComponent(i[r]);
	else a && (a += "&"), a += encodeURIComponent(n) + "=" + encodeURIComponent(i);
	return (t || "") + a;
}
var LayoutGroupContext = createContext({});
function useConstant(e) {
	let t = useRef(null);
	return t.current === null && (t.current = e()), t.current;
}
var isBrowser = typeof window < "u", useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect, PresenceContext = /* @__PURE__ */ createContext(null);
function addUniqueItem(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function removeItem(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
var clamp = (e, t, n) => n > t ? t : n < e ? e : n;
function formatErrorMessage(e, t) {
	return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
var warning = () => {}, invariant = () => {};
typeof process < "u" && process.env.NODE_ENV !== "production" && (warning = (e, t, n) => {
	!e && typeof console < "u" && console.warn(formatErrorMessage(t, n));
}, invariant = (e, t, n) => {
	if (!e) throw Error(formatErrorMessage(t, n));
});
var MotionGlobalConfig = {}, isNumericalString = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function isObject(e) {
	return typeof e == "object" && !!e;
}
var isZeroValueString = (e) => /^0[^.\s]+$/u.test(e);
/* @__NO_SIDE_EFFECTS__ */
function memo$1(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
var noop = /* @__NO_SIDE_EFFECTS__ */ (e) => e, combineFunctions = (e, t) => (n) => t(e(n)), pipe = (...e) => e.reduce(combineFunctions), progress = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r === 0 ? 1 : (n - e) / r;
}, SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return addUniqueItem(this.subscriptions, e), () => removeItem(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) if (r === 1) this.subscriptions[0](e, t, n);
		else for (let i = 0; i < r; i++) {
			let r = this.subscriptions[i];
			r && r(e, t, n);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function velocityPerSecond(e, t) {
	return t ? e * (1e3 / t) : 0;
}
var warned = /* @__PURE__ */ new Set();
function warnOnce(e, t, n) {
	e || warned.has(t) || (console.warn(formatErrorMessage(t, n)), warned.add(t));
}
var calcBezier = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, subdivisionPrecision = 1e-7, subdivisionMaxIterations = 12;
function binarySubdivide(e, t, n, r, i) {
	let a, o, c = 0;
	do
		o = t + (n - t) / 2, a = calcBezier(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > subdivisionPrecision && ++c < subdivisionMaxIterations);
	return o;
}
function cubicBezier(e, t, n, r) {
	if (e === t && n === r) return noop;
	let i = (t) => binarySubdivide(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : calcBezier(i(e), t, r);
}
var mirrorEasing = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, reverseEasing = (e) => (t) => 1 - e(1 - t), backOut = /* @__PURE__ */ cubicBezier(.33, 1.53, .69, .99), backIn = /* @__PURE__ */ reverseEasing(backOut), backInOut = /* @__PURE__ */ mirrorEasing(backIn), anticipate = (e) => (e *= 2) < 1 ? .5 * backIn(e) : .5 * (2 - 2 ** (-10 * (e - 1))), circIn = (e) => 1 - Math.sin(Math.acos(e)), circOut = reverseEasing(circIn), circInOut = mirrorEasing(circIn), easeIn = /* @__PURE__ */ cubicBezier(.42, 0, 1, 1), easeOut = /* @__PURE__ */ cubicBezier(0, 0, .58, 1), easeInOut = /* @__PURE__ */ cubicBezier(.42, 0, .58, 1), isEasingArray = (e) => Array.isArray(e) && typeof e[0] != "number", isBezierDefinition = (e) => Array.isArray(e) && typeof e[0] == "number", easingLookup = {
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
		let [t, n, r, i] = e;
		return cubicBezier(t, n, r, i);
	} else if (isValidEasing(e)) return invariant(easingLookup[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), easingLookup[e];
	return e;
}, stepsOrder = [
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
function createRenderStep(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, a = !1, o = /* @__PURE__ */ new WeakSet(), c = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, l = 0;
	function u(t) {
		o.has(t) && (d.schedule(t), e()), l++, t(c);
	}
	let d = {
		schedule: (e, t = !1, a = !1) => {
			let c = a && i ? n : r;
			return t && o.add(e), c.has(e) || c.add(e), e;
		},
		cancel: (e) => {
			r.delete(e), o.delete(e);
		},
		process: (e) => {
			if (c = e, i) {
				a = !0;
				return;
			}
			i = !0, [n, r] = [r, n], n.forEach(u), t && statsBuffer.value && statsBuffer.value.frameloop[t].push(l), l = 0, n.clear(), i = !1, a && (a = !1, d.process(e));
		}
	};
	return d;
}
var maxElapsed = 40;
function createRenderBatcher(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = stepsOrder.reduce((e, n) => (e[n] = createRenderStep(a, t ? n : void 0), e), {}), { setup: c, read: l, resolveKeyframes: u, preUpdate: d, update: f, preRender: p, render: m, postRender: g } = o, _ = () => {
		let a = MotionGlobalConfig.useManualTiming ? i.timestamp : performance.now();
		n = !1, MotionGlobalConfig.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, maxElapsed), 1)), i.timestamp = a, i.isProcessing = !0, c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), g.process(i), i.isProcessing = !1, n && t && (r = !1, e(_));
	}, v = () => {
		n = !0, r = !0, i.isProcessing || e(_);
	};
	return {
		schedule: stepsOrder.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || v(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < stepsOrder.length; t++) o[stepsOrder[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame < "u" ? requestAnimationFrame : noop, !0), now;
function clearTime() {
	now = void 0;
}
var time = {
	now: () => (now === void 0 && time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now()), now),
	set: (e) => {
		now = e, queueMicrotask(clearTime);
	}
}, activeAnimations = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, checkStringStartsWith = (e) => (t) => typeof t == "string" && t.startsWith(e), isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--"), startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--"), isCSSVariableToken = (e) => startsAsVariableToken(e) ? singleCssVariableRegex.test(e.split("/*")[0].trim()) : !1, singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function containsCSSVariable(e) {
	return typeof e == "string" ? e.split("/*")[0].includes("var(--") : !1;
}
var number = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, alpha = {
	...number,
	transform: (e) => clamp(0, 1, e)
}, scale = {
	...number,
	default: 1
}, sanitize = (e) => Math.round(e * 1e5) / 1e5, floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function isNullish(e) {
	return e == null;
}
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, isColorString = (e, t) => (n) => !!(typeof n == "string" && singleColorRegex.test(n) && n.startsWith(e) || t && !isNullish(n) && Object.prototype.hasOwnProperty.call(n, t)), splitColor = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, c] = r.match(floatRegex);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: c === void 0 ? 1 : parseFloat(c)
	};
}, clampRgbUnit = (e) => clamp(0, 255, e), rgbUnit = {
	...number,
	transform: (e) => Math.round(clampRgbUnit(e))
}, rgba = {
	test: /* @__PURE__ */ isColorString("rgb", "red"),
	parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + rgbUnit.transform(e) + ", " + rgbUnit.transform(t) + ", " + rgbUnit.transform(n) + ", " + sanitize(alpha.transform(r)) + ")"
};
function parseHex(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var hex = {
	test: /* @__PURE__ */ isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
}, createUnitType = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), degrees = /* @__PURE__ */ createUnitType("deg"), percent = /* @__PURE__ */ createUnitType("%"), px = /* @__PURE__ */ createUnitType("px"), vh = /* @__PURE__ */ createUnitType("vh"), vw = /* @__PURE__ */ createUnitType("vw"), progressPercentage = /* @__PURE__ */ (() => ({
	...percent,
	parse: (e) => percent.parse(e) / 100,
	transform: (e) => percent.transform(e * 100)
}))(), hsla = {
	test: /* @__PURE__ */ isColorString("hsl", "hue"),
	parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + percent.transform(sanitize(t)) + ", " + percent.transform(sanitize(n)) + ", " + sanitize(alpha.transform(r)) + ")"
}, color = {
	test: (e) => rgba.test(e) || hex.test(e) || hsla.test(e),
	parse: (e) => rgba.test(e) ? rgba.parse(e) : hsla.test(e) ? hsla.parse(e) : hex.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? rgba.transform(e) : hsla.transform(e),
	getAnimatableNone: (e) => {
		let t = color.parse(e);
		return t.alpha = 0, color.transform(t);
	}
}, colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function test(e) {
	return isNaN(e) && typeof e == "string" && (e.match(floatRegex)?.length || 0) + (e.match(colorRegex)?.length || 0) > 0;
}
var NUMBER_TOKEN = "number", COLOR_TOKEN = "color", VAR_TOKEN = "var", VAR_FUNCTION_TOKEN = "var(", SPLIT_TOKEN = "${}", complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(complexRegex, (e) => (color.test(e) ? (r.color.push(a), i.push(COLOR_TOKEN), n.push(color.parse(e))) : e.startsWith(VAR_FUNCTION_TOKEN) ? (r.var.push(a), i.push(VAR_TOKEN), n.push(e)) : (r.number.push(a), i.push(NUMBER_TOKEN), n.push(parseFloat(e))), ++a, SPLIT_TOKEN)).split(SPLIT_TOKEN),
		indexes: r,
		types: i
	};
}
function parseComplexValue(e) {
	return analyseComplexValue(e).values;
}
function createTransformer(e) {
	let { split: t, types: n } = analyseComplexValue(e), r = t.length;
	return (e) => {
		let i = "";
		for (let a = 0; a < r; a++) if (i += t[a], e[a] !== void 0) {
			let t = n[a];
			t === NUMBER_TOKEN ? i += sanitize(e[a]) : t === COLOR_TOKEN ? i += color.transform(e[a]) : i += e[a];
		}
		return i;
	};
}
var convertNumbersToZero = (e) => typeof e == "number" ? 0 : color.test(e) ? color.getAnimatableNone(e) : e;
function getAnimatableNone$1(e) {
	let t = parseComplexValue(e);
	return createTransformer(e)(t.map(convertNumbersToZero));
}
var complex = {
	test,
	parse: parseComplexValue,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
};
function hueToRgb(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function hslaToRgba({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, c = 2 * n - r;
		i = hueToRgb(c, r, e + 1 / 3), a = hueToRgb(c, r, e), o = hueToRgb(c, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
function mixImmediate(e, t) {
	return (n) => n > 0 ? t : e;
}
var mixNumber = (e, t, n) => e + (t - e) * n, mixLinearColor = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, colorTypes = [
	hex,
	rgba,
	hsla
], getColorType = (e) => colorTypes.find((t) => t.test(e));
function asRGBA(e) {
	let t = getColorType(e);
	if (warning(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
	let n = t.parse(e);
	return t === hsla && (n = hslaToRgba(n)), n;
}
var mixColor = (e, t) => {
	let n = asRGBA(e), r = asRGBA(t);
	if (!n || !r) return mixImmediate(e, t);
	let i = { ...n };
	return (e) => (i.red = mixLinearColor(n.red, r.red, e), i.green = mixLinearColor(n.green, r.green, e), i.blue = mixLinearColor(n.blue, r.blue, e), i.alpha = mixNumber(n.alpha, r.alpha, e), rgba.transform(i));
}, invisibleValues = new Set(["none", "hidden"]);
function mixVisibility(e, t) {
	return invisibleValues.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function mixNumber$1(e, t) {
	return (n) => mixNumber(e, t, n);
}
function getMixer(e) {
	return typeof e == "number" ? mixNumber$1 : typeof e == "string" ? isCSSVariableToken(e) ? mixImmediate : color.test(e) ? mixColor : mixComplex : Array.isArray(e) ? mixArray : typeof e == "object" ? color.test(e) ? mixColor : mixObject : mixImmediate;
}
function mixArray(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => getMixer(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function mixObject(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = getMixer(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function matchOrder(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]];
		n[i] = e.values[o] ?? 0, r[a]++;
	}
	return n;
}
var mixComplex = (e, t) => {
	let n = complex.createTransformer(t), r = analyseComplexValue(e), i = analyseComplexValue(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? invisibleValues.has(e) && !i.values.length || invisibleValues.has(t) && !r.values.length ? mixVisibility(e, t) : pipe(mixArray(matchOrder(r, i), i.values), n) : (warning(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), mixImmediate(e, t));
};
function mix(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? mixNumber(e, t, n) : getMixer(e)(e, t);
}
var frameloopDriver = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => frame.update(t, e),
		stop: () => cancelFrame(t),
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
}, generateLinearEasing = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, maxGeneratorDuration = 2e4;
function calcGeneratorDuration(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
function createGeneratorEasing(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(calcGeneratorDuration(r), maxGeneratorDuration);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ millisecondsToSeconds(i)
	};
}
var velocitySampleDuration = 5;
function calcGeneratorVelocity(e, t, n) {
	let r = Math.max(t - velocitySampleDuration, 0);
	return velocityPerSecond(n - e(r), t - r);
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
function findSpring({ duration: e = springDefaults.duration, bounce: t = springDefaults.bounce, velocity: n = springDefaults.velocity, mass: r = springDefaults.mass }) {
	let i, a;
	warning(e <= /* @__PURE__ */ secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let o = 1 - t;
	o = clamp(springDefaults.minDamping, springDefaults.maxDamping, o), e = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, c = calcAngularFreq(t, o), l = Math.exp(-i);
		return safeMin - a / c * l;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, c = o ** 2 * t ** 2 * e, l = Math.exp(-r), u = calcAngularFreq(t ** 2, o);
		return (-i(t) + safeMin > 0 ? -1 : 1) * ((a - c) * l) / u;
	}) : (i = (t) => {
		let r = Math.exp(-t * e), i = (t - n) * e + 1;
		return -safeMin + r * i;
	}, a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let c = 5 / e, l = approximateRoot(i, a, c);
	if (e = /* @__PURE__ */ secondsToMilliseconds(e), isNaN(l)) return {
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		duration: e
	};
	{
		let t = l ** 2 * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var rootIterations = 12;
function approximateRoot(e, t, n) {
	let r = n;
	for (let n = 1; n < rootIterations; n++) r -= e(r) / t(r);
	return r;
}
function calcAngularFreq(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var durationKeys = ["duration", "bounce"], physicsKeys = [
	"stiffness",
	"damping",
	"mass"
];
function isSpringType(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function getSpringOptions(e) {
	let t = {
		velocity: springDefaults.velocity,
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		mass: springDefaults.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!isSpringType(e, physicsKeys) && isSpringType(e, durationKeys)) if (t.velocity = 0, e.visualDuration) {
		let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * clamp(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
		t = {
			...t,
			mass: springDefaults.mass,
			stiffness: i,
			damping: a
		};
	} else {
		let n = findSpring({
			...e,
			velocity: 0
		});
		t = {
			...t,
			...n,
			mass: springDefaults.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function spring(e = springDefaults.visualDuration, t = springDefaults.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], c = {
		done: !1,
		value: a
	}, { stiffness: l, damping: u, mass: d, duration: f, velocity: p, isResolvedFromDuration: m } = getSpringOptions({
		...n,
		velocity: -/* @__PURE__ */ millisecondsToSeconds(n.velocity || 0)
	}), g = p || 0, _ = u / (2 * Math.sqrt(l * d)), v = o - a, y = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(l / d)), b = Math.abs(v) < 5;
	r ||= b ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default, i ||= b ? springDefaults.restDelta.granular : springDefaults.restDelta.default;
	let x;
	if (_ < 1) {
		let e = calcAngularFreq(y, _);
		x = (t) => o - Math.exp(-_ * y * t) * ((g + _ * y * v) / e * Math.sin(e * t) + v * Math.cos(e * t));
	} else if (_ === 1) x = (e) => o - Math.exp(-y * e) * (v + (g + y * v) * e);
	else {
		let e = y * Math.sqrt(_ * _ - 1);
		x = (t) => {
			let n = Math.exp(-_ * y * t), r = Math.min(e * t, 300);
			return o - n * ((g + _ * y * v) * Math.sinh(r) + e * v * Math.cosh(r)) / e;
		};
	}
	let S = {
		calculatedDuration: m && f || null,
		next: (e) => {
			let t = x(e);
			if (m) c.done = e >= f;
			else {
				let n = e === 0 ? g : 0;
				_ < 1 && (n = e === 0 ? /* @__PURE__ */ secondsToMilliseconds(g) : calcGeneratorVelocity(x, e, t));
				let a = Math.abs(n) <= r, l = Math.abs(o - t) <= i;
				c.done = a && l;
			}
			return c.value = c.done ? o : t, c;
		},
		toString: () => {
			let e = Math.min(calcGeneratorDuration(S), maxGeneratorDuration), t = generateLinearEasing((t) => S.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return S;
}
spring.applyToOptions = (e) => {
	let t = createGeneratorEasing(e, 100, spring);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ secondsToMilliseconds(t.duration), e.type = "keyframes", e;
};
function inertia({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: c, max: l, restDelta: u = .5, restSpeed: d }) {
	let f = e[0], p = {
		done: !1,
		value: f
	}, m = (e) => c !== void 0 && e < c || l !== void 0 && e > l, g = (e) => c === void 0 ? l : l === void 0 || Math.abs(c - e) < Math.abs(l - e) ? c : l, _ = n * t, v = f + _, y = o === void 0 ? v : o(v);
	y !== v && (_ = y - f);
	let b = (e) => -_ * Math.exp(-e / r), x = (e) => y + b(e), S = (e) => {
		let t = b(e), n = x(e);
		p.done = Math.abs(t) <= u, p.value = p.done ? y : n;
	}, C, w, T = (e) => {
		m(p.value) && (C = e, w = spring({
			keyframes: [p.value, g(p.value)],
			velocity: calcGeneratorVelocity(x, e, p.value),
			damping: i,
			stiffness: a,
			restDelta: u,
			restSpeed: d
		}));
	};
	return T(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !w && C === void 0 && (t = !0, S(e), T(e)), C !== void 0 && e >= C ? w.next(e - C) : (!t && S(e), p);
		}
	};
}
function createMixers(e, t, n) {
	let r = [], i = n || MotionGlobalConfig.mix || mix, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = pipe(Array.isArray(t) ? t[n] || noop : t, a)), r.push(a);
	}
	return r;
}
function interpolate(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (invariant(a === t.length, "Both input and output ranges must be the same length", "range-length"), a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let c = createMixers(t, r, i), l = c.length, u = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (l > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ progress(e[r], e[r + 1], n);
		return c[r](i);
	};
	return n ? (t) => u(clamp(e[0], e[a - 1], t)) : u;
}
function fillOffset(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ progress(0, t, r);
		e.push(mixNumber(n, 1, i));
	}
}
function defaultOffset(e) {
	let t = [0];
	return fillOffset(t, e.length - 1), t;
}
function convertOffsetToTimes(e, t) {
	return e.map((e) => e * t);
}
function defaultEasing(e, t) {
	return e.map(() => t || easeInOut).splice(0, e.length - 1);
}
function keyframes({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = isEasingArray(r) ? r.map(easingDefinitionToFunction) : easingDefinitionToFunction(r), a = {
		done: !1,
		value: t[0]
	}, o = interpolate(convertOffsetToTimes(n && n.length === t.length ? n : defaultOffset(t), e), t, { ease: Array.isArray(i) ? i : defaultEasing(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
var isNotNull$1 = (e) => e !== null;
function getFinalKeyframe$1(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(isNotNull$1), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
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
var WithPromise = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, percentToProgress = (e) => e / 100, JSAnimation = class extends WithPromise {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== time.now() && this.tick(time.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, activeAnimations.mainThread++, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		replaceTransitionType(e);
		let { type: t = keyframes, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, c = t || keyframes;
		process.env.NODE_ENV !== "production" && c !== keyframes && invariant(o.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${o}`, "spring-two-frames"), c !== keyframes && typeof o[0] != "number" && (this.mixKeyframes = pipe(percentToProgress, mix(o[0], o[1])), o = [0, 100]);
		let l = c({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = c({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), l.calculatedDuration === null && (l.calculatedDuration = calcGeneratorDuration(l));
		let { calculatedDuration: u } = l;
		this.calculatedDuration = u, this.resolvedDuration = u + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = l;
	}
	updateTime(e) {
		let t = Math.round(e - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = t : this.currentTime = this.holdTime;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: c } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: l = 0, keyframes: u, repeat: d, repeatType: f, repeatDelay: p, type: m, onUpdate: g, finalKeyframe: _ } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let v = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1), y = this.playbackSpeed >= 0 ? v < 0 : v > r;
		this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let b = this.currentTime, x = n;
		if (d) {
			let e = Math.min(this.currentTime, r) / o, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, d + 1), t % 2 && (f === "reverse" ? (n = 1 - n, p && (n -= p / o)) : f === "mirror" && (x = a)), b = clamp(0, 1, n) * o;
		}
		let S = y ? {
			done: !1,
			value: u[0]
		} : x.next(b);
		i && (S.value = i(S.value));
		let { done: C } = S;
		!y && c !== null && (C = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let w = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
		return w && m !== inertia && (S.value = getFinalKeyframe$1(u, this.options, _, this.speed)), g && g(S.value), w && this.finish(), S;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ millisecondsToSeconds(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(e);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ secondsToMilliseconds(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver?.start(!1);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		this.updateTime(time.now());
		let t = this.playbackSpeed !== e;
		this.playbackSpeed = e, t && (this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = frameloopDriver, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
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
};
function fillWildcards(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
var radToDeg = (e) => e * 180 / Math.PI, rotate = (e) => rebaseAngle(radToDeg(Math.atan2(e[1], e[0]))), matrix2dParsers = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate,
	rotateZ: rotate,
	skewX: (e) => radToDeg(Math.atan(e[1])),
	skewY: (e) => radToDeg(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, rebaseAngle = (e) => (e %= 360, e < 0 && (e += 360), e), rotateZ = rotate, scaleX = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), scaleY = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), matrix3dParsers = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX,
	scaleY,
	scale: (e) => (scaleX(e) + scaleY(e)) / 2,
	rotateX: (e) => rebaseAngle(radToDeg(Math.atan2(e[6], e[5]))),
	rotateY: (e) => rebaseAngle(radToDeg(Math.atan2(-e[2], e[0]))),
	rotateZ,
	rotate: rotateZ,
	skewX: (e) => radToDeg(Math.atan(e[4])),
	skewY: (e) => radToDeg(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function defaultTransformValue(e) {
	return e.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(e, t) {
	if (!e || e === "none") return defaultTransformValue(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = matrix3dParsers, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = matrix2dParsers, i = t;
	}
	if (!i) return defaultTransformValue(t);
	let a = r[t], o = i[1].split(",").map(convertTransformToNumber);
	return typeof a == "function" ? a(o) : o[a];
}
var readTransformValue = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return parseValueFromTransform(n, t);
};
function convertTransformToNumber(e) {
	return parseFloat(e.trim());
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
], transformProps = /* @__PURE__ */ (() => new Set(transformPropOrder))(), isNumOrPxType = (e) => e === number || e === px, transformKeys = new Set([
	"x",
	"y",
	"z"
]), nonTranslationalTransformKeys = transformPropOrder.filter((e) => !transformKeys.has(e));
function removeNonTranslationalTransform(e) {
	let t = [];
	return nonTranslationalTransformKeys.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
	}), t;
}
var positionalValues = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => parseValueFromTransform(t, "x"),
	y: (e, { transform: t }) => parseValueFromTransform(t, "y")
};
positionalValues.translateX = positionalValues.x, positionalValues.translateY = positionalValues.y;
var toResolve = /* @__PURE__ */ new Set(), isScheduled = !1, anyNeedsMeasurement = !1, isForced = !1;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		let e = Array.from(toResolve).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = removeNonTranslationalTransform(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	anyNeedsMeasurement = !1, isScheduled = !1, toResolve.forEach((e) => e.complete(isForced)), toResolve.clear();
}
function readAllKeyframes() {
	toResolve.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (anyNeedsMeasurement = !0);
	});
}
function flushKeyframeResolvers() {
	isForced = !0, readAllKeyframes(), measureAllKeyframes(), isForced = !1;
}
var KeyframeResolver = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (toResolve.add(this), isScheduled || (isScheduled = !0, frame.read(readAllKeyframes), frame.resolveKeyframes(measureAllKeyframes))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		fillWildcards(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), toResolve.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (toResolve.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, isCSSVar = (e) => e.startsWith("--");
function setStyle(e, t, n) {
	isCSSVar(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
var supportsFlags = {};
function memoSupports(e, t) {
	let n = /* @__PURE__ */ memo$1(e);
	return () => supportsFlags[t] ?? n();
}
var supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== void 0, "scrollTimeline"), supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), cubicBezierAsString = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, supportedWaapiEasing = {
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
function mapEasingToNativeEasing(e, t) {
	if (e) return typeof e == "function" ? supportsLinearEasing() ? generateLinearEasing(e, t) : "ease-out" : isBezierDefinition(e) ? cubicBezierAsString(e) : Array.isArray(e) ? e.map((e) => mapEasingToNativeEasing(e, t) || supportedWaapiEasing.easeOut) : supportedWaapiEasing[e];
}
function startWaapiAnimation(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: c = "easeOut", times: l } = {}, u = void 0) {
	let d = { [t]: n };
	l && (d.offset = l);
	let f = mapEasingToNativeEasing(c, i);
	Array.isArray(f) && (d.easing = f), statsBuffer.value && activeAnimations.waapi++;
	let p = {
		delay: r,
		duration: i,
		easing: Array.isArray(f) ? "linear" : f,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	u && (p.pseudoElement = u);
	let m = e.animate(d, p);
	return statsBuffer.value && m.finished.finally(() => {
		activeAnimations.waapi--;
	}), m;
}
function isGenerator(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
function applyGeneratorOptions({ type: e, ...t }) {
	return isGenerator(e) && supportsLinearEasing() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
var NativeAnimation = class extends WithPromise {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: c } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, invariant(typeof e.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let l = applyGeneratorOptions(e);
		this.animation = startWaapiAnimation(t, n, r, l, i), l.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = getFinalKeyframe$1(r, this.options, o, this.speed);
				this.updateMotionValue ? this.updateMotionValue(e) : setStyle(t, n, e), this.animation.cancel();
			}
			c?.(), this.notifyFinished();
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
		let { state: e } = this;
		e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		let e = this.options?.element;
		!this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ millisecondsToSeconds(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(e);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ secondsToMilliseconds(e);
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(e) {
		this.manualStartTime = this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, observe: t }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && supportsScrollTimeline() ? (this.animation.timeline = e, noop) : t(this);
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
		replaceStringEasing(e), replaceTransitionType(e), super(e), e.startTime !== void 0 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new JSAnimation({
			...a,
			autoplay: !1
		}), c = Math.max(sampleDelta, time.now() - this.startTime), l = clamp(0, sampleDelta, c - sampleDelta);
		t.setWithVelocity(o.sample(Math.max(0, c - l)).value, o.sample(c).value, l), o.stop();
	}
}, isAnimatable = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (complex.test(e) || e === "0") && !e.startsWith("url("));
function hasKeyframesChanged(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function canAnimate(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = isAnimatable(i, t), c = isAnimatable(a, t);
	return warning(o === c, `You are trying to animate ${t} from "${i}" to "${a}". "${o ? a : i}" is not an animatable value.`, "value-not-animatable"), !o || !c ? !1 : hasKeyframesChanged(e) || (n === "spring" || isGenerator(n)) && r;
}
function makeAnimationInstant(e) {
	e.duration = 0, e.type = "keyframes";
}
var acceleratedValues$1 = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), supportsWaapi = /* @__PURE__ */ memo$1(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
	return supportsWaapi() && n && acceleratedValues$1.has(n) && (n !== "transform" || !l) && !c && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
var MAX_RESOLVE_DELAY = 40, AsyncMotionValueAnimation = class extends WithPromise {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: c, motionValue: l, element: u, ...d }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = time.now();
		let f = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			name: c,
			motionValue: l,
			element: u,
			...d
		};
		this.keyframeResolver = new (u?.KeyframeResolver || KeyframeResolver)(o, (e, t, n) => this.onKeyframesResolved(e, t, f, !n), c, l, u), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: c, isHandoff: l, onUpdate: u } = n;
		this.resolvedAt = time.now(), canAnimate(e, i, a, o) || ((MotionGlobalConfig.instantAnimations || !c) && u?.(getFinalKeyframe$1(e, n, t)), e[0] = e[e.length - 1], makeAnimationInstant(n), n.repeat = 0);
		let d = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, f = !l && supportsBrowserAnimation(d), p = d.motionValue?.owner?.current, m = f ? new NativeAnimationExtended({
			...d,
			element: p
		}) : new JSAnimation(d);
		m.finished.then(() => {
			this.notifyFinished();
		}).catch(noop), this.pendingTimeline &&= (this.stopTimeline = m.attachTimeline(this.pendingTimeline), void 0), this._animation = m;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
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
function calcChildStagger(e, t, n, r = 0, i = 1) {
	let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t), o = e.size, c = (o - 1) * r;
	return typeof n == "function" ? n(a, o) : i === 1 ? a * r : c - a * r;
}
var splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(e) {
	let t = splitCSSVariableRegex.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var maxDepth = 4;
function getVariableValue(e, t, n = 1) {
	invariant(n <= maxDepth, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [r, i] = parseCSSVariable(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return isNumericalString(e) ? parseFloat(e) : e;
	}
	return isCSSVariableToken(i) ? getVariableValue(i, t, n + 1) : i;
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
}, getDefaultTransition = (e, { keyframes: t }) => t.length > 2 ? keyframesTransition : transformProps.has(e) ? e.startsWith("scale") ? criticallyDampedSpring(t[1]) : underDampedSpring : ease, isNotNull = (e) => e !== null;
function getFinalKeyframe(e, { repeat: t, repeatType: n = "loop" }, r) {
	let i = e.filter(isNotNull), a = t && n !== "loop" && t % 2 == 1 ? 0 : i.length - 1;
	return !a || r === void 0 ? i[a] : r;
}
function resolveTransition(e, t) {
	if (e?.inherit && t) {
		let { inherit: n, ...r } = e;
		return {
			...t,
			...r
		};
	}
	return e;
}
function getValueTransition(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : resolveTransition(n, e);
}
function isTransitionDefined({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: a, repeatType: o, repeatDelay: c, from: l, elapsed: u, ...d }) {
	return !!Object.keys(d).length;
}
var animateMotionValue = (e, t, n, r = {}, i, a) => (o) => {
	let c = getValueTransition(r, e) || {}, l = c.delay || r.delay || 0, { elapsed: u = 0 } = r;
	u -= /* @__PURE__ */ secondsToMilliseconds(l);
	let d = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...c,
		delay: -u,
		onUpdate: (e) => {
			t.set(e), c.onUpdate && c.onUpdate(e);
		},
		onComplete: () => {
			o(), c.onComplete && c.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	isTransitionDefined(c) || Object.assign(d, getDefaultTransition(e, d)), d.duration &&= /* @__PURE__ */ secondsToMilliseconds(d.duration), d.repeatDelay &&= /* @__PURE__ */ secondsToMilliseconds(d.repeatDelay), d.from !== void 0 && (d.keyframes[0] = d.from);
	let f = !1;
	if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (makeAnimationInstant(d), d.delay === 0 && (f = !0)), (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations || i?.shouldSkipAnimations) && (f = !0, makeAnimationInstant(d), d.delay = 0), d.allowFlatten = !c.type && !c.ease, f && !a && t.get() !== void 0) {
		let e = getFinalKeyframe(d.keyframes, c);
		if (e !== void 0) {
			frame.update(() => {
				d.onUpdate(e), d.onComplete();
			});
			return;
		}
	}
	return c.isSync ? new JSAnimation(d) : new AsyncMotionValueAnimation(d);
};
function getValueState(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function resolveVariantFromProps(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = getValueState(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = getValueState(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
function resolveVariant(e, t, n) {
	let r = e.getProps();
	return resolveVariantFromProps(r, t, n === void 0 ? r.custom : n, e);
}
var positionalKeys = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...transformPropOrder
]), MAX_VELOCITY_DELTA = 30, isFloat = (e) => !isNaN(parseFloat(e)), collectMotionValues = { current: void 0 }, MotionValue = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = time.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
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
	on(e, t) {
		this.events[e] || (this.events[e] = new SubscriptionManager());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), frame.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e) {
		this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(e) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e);
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e);
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
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
		return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
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
function motionValue(e, t) {
	return new MotionValue(e, t);
}
var isKeyframesTarget = (e) => Array.isArray(e);
function setMotionValue(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, motionValue(n));
}
function resolveFinalValueInKeyframes(e) {
	return isKeyframesTarget(e) ? e[e.length - 1] || 0 : e;
}
function setTarget(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = resolveVariant(e, t) || {};
	for (let t in i = {
		...i,
		...n
	}, i) setMotionValue(e, t, resolveFinalValueInKeyframes(i[t]));
}
var isMotionValue = (e) => !!(e && e.getVelocity);
function isWillChangeMotionValue(e) {
	return !!(isMotionValue(e) && e.add);
}
function addValueToWillChange(e, t) {
	let n = e.getValue("willChange");
	if (isWillChangeMotionValue(n)) return n.add(t);
	if (!n && MotionGlobalConfig.WillChange) {
		let n = new MotionGlobalConfig.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
function camelToDash(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId");
function getOptimisedAppearId(e) {
	return e.props[optimizedAppearDataAttribute];
}
function shouldBlockAnimation({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function animateTarget(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...c } = t, l = e.getDefaultTransition();
	a = a ? resolveTransition(a, l) : l;
	let u = a?.reduceMotion;
	r && (a = r);
	let d = [], f = i && e.animationState && e.animationState.getState()[i];
	for (let t in c) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = c[t];
		if (i === void 0 || f && shouldBlockAnimation(f, t)) continue;
		let o = {
			delay: n,
			...getValueTransition(a || {}, t)
		}, l = r.get();
		if (l !== void 0 && !r.isAnimating && !Array.isArray(i) && i === l && !o.velocity) continue;
		let p = !1;
		if (window.MotionHandoffAnimation) {
			let n = getOptimisedAppearId(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, frame);
				e !== null && (o.startTime = e, p = !0);
			}
		}
		addValueToWillChange(e, t);
		let m = u ?? e.shouldReduceMotion;
		r.start(animateMotionValue(t, r, i, m && positionalKeys.has(t) ? { type: !1 } : o, e, p));
		let g = r.animation;
		g && d.push(g);
	}
	if (o) {
		let t = () => frame.update(() => {
			o && setTarget(e, o);
		});
		d.length ? Promise.all(d).then(t) : t();
	}
	return d;
}
function animateVariant(e, t, n = {}) {
	let r = resolveVariant(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(animateTarget(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: c } = i;
		return animateChildren(e, t, r, a, o, c, n);
	} : () => Promise.resolve(), { when: c } = i;
	if (c) {
		let [e, t] = c === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	} else return Promise.all([a(), o(n.delay)]);
}
function animateChildren(e, t, n = 0, r = 0, i = 0, a = 1, o) {
	let c = [];
	for (let l of e.variantChildren) l.notify("AnimationStart", t), c.push(animateVariant(l, t, {
		...o,
		delay: n + (typeof r == "function" ? 0 : r) + calcChildStagger(e.variantChildren, l, r, i, a)
	}).then(() => l.notify("AnimationComplete", t)));
	return Promise.all(c);
}
function animateVisualElement(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => animateVariant(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = animateVariant(e, t, n);
	else {
		let i = typeof t == "function" ? resolveVariant(e, t, n.custom) : t;
		r = Promise.all(animateTarget(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
var auto = {
	test: (e) => e === "auto",
	parse: (e) => e
}, testValueType = (e) => (t) => t.test(e), dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	auto
], findDimensionValueType = (e) => dimensionValueTypes.find(testValueType(e));
function isNone(e) {
	return typeof e == "number" ? e === 0 : e === null ? !0 : e === "none" || e === "0" || isZeroValueString(e);
}
var maxDefaults = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(floatRegex) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = maxDefaults.has(t) ? 1 : 0;
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu, filter = {
	...complex,
	getAnimatableNone: (e) => {
		let t = e.match(functionRegex);
		return t ? t.map(applyDefaultFilter).join(" ") : e;
	}
}, mask = {
	...complex,
	getAnimatableNone: (e) => {
		let t = complex.parse(e);
		return complex.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
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
}, getDefaultValueType = (e) => defaultValueTypes[e], customTypes = /* @__PURE__ */ new Set([filter, mask]);
function getAnimatableNone(e, t) {
	let n = getDefaultValueType(e);
	return customTypes.has(n) || (n = complex), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
var invalidTemplates = new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !invalidTemplates.has(t) && analyseComplexValue(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = getAnimatableNone(n, i);
}
var DOMKeyframesResolver = class extends KeyframeResolver {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), isCSSVariableToken(r))) {
				let i = getVariableValue(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !positionalKeys.has(n) || e.length !== 2) return;
		let [r, i] = e, a = findDimensionValueType(r), o = findDimensionValueType(i);
		if (containsCSSVariable(r) !== containsCSSVariable(i) && positionalValues[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (a !== o) if (isNumOrPxType(a) && isNumOrPxType(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else positionalValues[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || isNone(e[t])) && n.push(t);
		n.length && makeNoneKeyframesAnimatable(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = positionalValues[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = positionalValues[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
}, acceleratedValues = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]);
function resolveElements(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = document;
		t && (r = t.current);
		let i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
var getValueAsType = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function isHTMLElement(e) {
	return isObject(e) && "offsetHeight" in e;
}
var { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, !1), isDragging = {
	x: !1,
	y: !1
};
function isDragActive() {
	return isDragging.x || isDragging.y;
}
function setDragLock(e) {
	return e === "x" || e === "y" ? isDragging[e] ? null : (isDragging[e] = !0, () => {
		isDragging[e] = !1;
	}) : isDragging.x || isDragging.y ? null : (isDragging.x = isDragging.y = !0, () => {
		isDragging.x = isDragging.y = !1;
	});
}
function setupGesture(e, t) {
	let n = resolveElements(e), r = new AbortController();
	return [
		n,
		{
			passive: !0,
			...t,
			signal: r.signal
		},
		() => r.abort()
	];
}
function isValidHover(e) {
	return !(e.pointerType === "touch" || isDragActive());
}
function hover(e, t, n = {}) {
	let [r, i, a] = setupGesture(e, n);
	return r.forEach((e) => {
		let n = !1, r = !1, a, o = () => {
			e.removeEventListener("pointerleave", d);
		}, c = (e) => {
			a &&= (a(e), void 0), o();
		}, l = (e) => {
			n = !1, window.removeEventListener("pointerup", l), window.removeEventListener("pointercancel", l), r && (r = !1, c(e));
		}, u = () => {
			n = !0, window.addEventListener("pointerup", l, i), window.addEventListener("pointercancel", l, i);
		}, d = (e) => {
			if (e.pointerType !== "touch") {
				if (n) {
					r = !0;
					return;
				}
				c(e);
			}
		};
		e.addEventListener("pointerenter", (n) => {
			if (!isValidHover(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == "function" && (a = o, e.addEventListener("pointerleave", d, i));
		}, i), e.addEventListener("pointerdown", u, i);
	}), a;
}
var isNodeOrChild = (e, t) => t ? e === t ? !0 : isNodeOrChild(e, t.parentElement) : !1, isPrimaryPointer = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, keyboardAccessibleElements = new Set([
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
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function firePointerEvent(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var enableKeyboardPress = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = filterEvents(() => {
		if (isPressing.has(n)) return;
		firePointerEvent(n, "down");
		let e = filterEvents(() => {
			firePointerEvent(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => firePointerEvent(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function isValidPressEvent(e) {
	return isPrimaryPointer(e) && !isDragActive();
}
var claimedPointerDownEvents = /* @__PURE__ */ new WeakSet();
function press(e, t, n = {}) {
	let [r, i, a] = setupGesture(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!isValidPressEvent(e) || claimedPointerDownEvents.has(e)) return;
		isPressing.add(r), n.stopPropagation && claimedPointerDownEvents.add(e);
		let a = t(r, e), o = (e, t) => {
			window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", l), isPressing.has(r) && isPressing.delete(r), isValidPressEvent(e) && typeof a == "function" && a(e, { success: t });
		}, c = (e) => {
			o(e, r === window || r === document || n.useGlobalTarget || isNodeOrChild(r, e.target));
		}, l = (e) => {
			o(e, !1);
		};
		window.addEventListener("pointerup", c, i), window.addEventListener("pointercancel", l, i);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), isHTMLElement(e) && (e.addEventListener("focus", (e) => enableKeyboardPress(e, i)), !isElementKeyboardAccessible(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
function isSVGElement(e) {
	return isObject(e) && "ownerSVGElement" in e;
}
var resizeHandlers = /* @__PURE__ */ new WeakMap(), observer, getSize = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : isSVGElement(r) && "getBBox" in r ? r.getBBox()[t] : r[n], getWidth = /* @__PURE__ */ getSize("inline", "width", "offsetWidth"), getHeight = /* @__PURE__ */ getSize("block", "height", "offsetHeight");
function notifyTarget({ target: e, borderBoxSize: t }) {
	resizeHandlers.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return getWidth(e, t);
			},
			get height() {
				return getHeight(e, t);
			}
		});
	});
}
function notifyAll(e) {
	e.forEach(notifyTarget);
}
function createResizeObserver() {
	typeof ResizeObserver > "u" || (observer = new ResizeObserver(notifyAll));
}
function resizeElement(e, t) {
	observer || createResizeObserver();
	let n = resolveElements(e);
	return n.forEach((e) => {
		let n = resizeHandlers.get(e);
		n || (n = /* @__PURE__ */ new Set(), resizeHandlers.set(e, n)), n.add(t), observer?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = resizeHandlers.get(e);
			n?.delete(t), n?.size || observer?.unobserve(e);
		});
	};
}
var windowCallbacks = /* @__PURE__ */ new Set(), windowResizeHandler;
function createWindowResizeHandler() {
	windowResizeHandler = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		windowCallbacks.forEach((t) => t(e));
	}, window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(e) {
	return windowCallbacks.add(e), windowResizeHandler || createWindowResizeHandler(), () => {
		windowCallbacks.delete(e), !windowCallbacks.size && typeof windowResizeHandler == "function" && (window.removeEventListener("resize", windowResizeHandler), windowResizeHandler = void 0);
	};
}
function resize(e, t) {
	return typeof e == "function" ? resizeWindow(e) : resizeElement(e, t);
}
function isSVGSVGElement(e) {
	return isSVGElement(e) && e.tagName === "svg";
}
function transform(...e) {
	let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], a = e[2 + n], o = e[3 + n], c = interpolate(i, a, o);
	return t ? c(r) : c;
}
function attachFollow(e, t, n = {}) {
	let r = e.get(), i = null, a = r, o, c = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0, l = () => {
		i &&= (i.stop(), null);
	}, u = () => {
		l();
		let t = asNumber$1(e.get()), r = asNumber$1(a);
		t !== r && (i = new JSAnimation({
			keyframes: [t, r],
			velocity: e.getVelocity(),
			type: "spring",
			restDelta: .001,
			restSpeed: .01,
			...n,
			onUpdate: o
		}));
	};
	if (e.attach((t, n) => {
		a = t, o = (e) => n(parseValue(e, c)), frame.postRender(() => {
			u(), e.events.animationStart?.notify(), i?.then(() => {
				e.events.animationComplete?.notify();
			});
		});
	}, l), isMotionValue(t)) {
		let n = t.on("change", (t) => e.set(parseValue(t, c))), r = e.on("destroy", n);
		return () => {
			n(), r();
		};
	}
	return l;
}
function parseValue(e, t) {
	return t ? e + t : e;
}
function asNumber$1(e) {
	return typeof e == "number" ? e : parseFloat(e);
}
var valueTypes = [
	...dimensionValueTypes,
	color,
	complex
], findValueType = (e) => valueTypes.find(testValueType(e)), createAxisDelta = () => ({
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
function isAnimationControls(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
function isVariantLabel(e) {
	return typeof e == "string" || Array.isArray(e);
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
	return isAnimationControls(e.animate) || variantProps.some((t) => isVariantLabel(e[t]));
}
function isVariantNode(e) {
	return !!(isControllingVariants(e) || e.variants);
}
function updateMotionValuesFromProps(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (isMotionValue(i)) e.addValue(r, i);
		else if (isMotionValue(a)) e.addValue(r, motionValue(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, motionValue(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
var prefersReducedMotion = { current: null }, hasReducedMotionListener = { current: !1 }, isBrowser$1 = typeof window < "u";
function initPrefersReducedMotion() {
	if (hasReducedMotionListener.current = !0, isBrowser$1) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => prefersReducedMotion.current = e.matches;
		e.addEventListener("change", t), t();
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
function setFeatureDefinitions(e) {
	featureDefinitions = e;
}
function getFeatureDefinitions() {
	return featureDefinitions;
}
var VisualElement = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o }, c = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = KeyframeResolver, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = time.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, frame.render(this.render, !1, !0));
		};
		let { latestValues: l, renderState: u } = o;
		this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = t.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = c, this.blockInitialAnimation = !!a, this.isControllingVariants = isControllingVariants(t), this.isVariantNode = isVariantNode(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: d, ...f } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in f) {
			let t = f[e];
			l[e] !== void 0 && isMotionValue(t) && t.set(l[e]);
		}
	}
	mount(e) {
		if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		this.current = e, visualElementStore.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (hasReducedMotionListener.current || initPrefersReducedMotion(), this.shouldReduceMotion = prefersReducedMotion.current), process.env.NODE_ENV !== "production" && warnOnce(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		for (let e in this.projection && this.projection.unmount(), cancelFrame(this.notifyUpdate), cancelFrame(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	addChild(e) {
		this.children.add(e), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(e);
	}
	removeChild(e) {
		this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
	}
	bindToMotionValue(e, t) {
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && acceleratedValues.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, c = new NativeAnimation({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: /* @__PURE__ */ secondsToMilliseconds(o)
			}), l = n(c);
			this.valueSubscriptions.set(e, () => {
				l(), c.cancel();
			});
			return;
		}
		let n = transformProps.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && frame.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), i;
		typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i && i(), t.owner && t.stop();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in featureDefinitions) {
			let t = featureDefinitions[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
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
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < propEventHandlers.length; t++) {
			let n = propEventHandlers[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = motionValue(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (isNumericalString(n) || isZeroValueString(n)) ? n = parseFloat(n) : !findValueType(n) && complex.test(t) && (n = getAnimatableNone(e, t)), this.setBaseTarget(e, isMotionValue(n) ? n.get() : n)), isMotionValue(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = resolveVariantFromProps(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !isMotionValue(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new SubscriptionManager()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		microtask.render(this.render);
	}
}, DOMVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments), this.KeyframeResolver = DOMKeyframesResolver;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		let n = e.style;
		return n ? n[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
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
function convertBoundingBoxToBox({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function convertBoxToBoundingBox({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function transformBoxPoints(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
function isIdentityScale(e) {
	return e === void 0 || e === 1;
}
function hasScale({ scale: e, scaleX: t, scaleY: n }) {
	return !isIdentityScale(e) || !isIdentityScale(t) || !isIdentityScale(n);
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
function scalePoint(e, t, n) {
	return n + t * (e - n);
}
function applyPointDelta(e, t, n, r, i) {
	return i !== void 0 && (e = scalePoint(e, i, r)), scalePoint(e, n, r) + t;
}
function applyAxisDelta(e, t = 0, n = 1, r, i) {
	e.min = applyPointDelta(e.min, t, n, r, i), e.max = applyPointDelta(e.max, t, n, r, i);
}
function applyBoxDelta(e, { x: t, y: n }) {
	applyAxisDelta(e.x, t.translate, t.scale, t.originPoint), applyAxisDelta(e.y, n.translate, n.scale, n.originPoint);
}
var TREE_SCALE_SNAP_MIN = .999999999999, TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let c = 0; c < i; c++) {
		a = n[c], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && transformBox(e, {
			x: -a.scroll.offset.x,
			y: -a.scroll.offset.y
		}), o && (t.x *= o.x.scale, t.y *= o.y.scale, applyBoxDelta(e, o)), r && hasTransform(a.latestValues) && transformBox(e, a.latestValues));
	}
	t.x < TREE_SCALE_SNAP_MAX && t.x > TREE_SCALE_SNAP_MIN && (t.x = 1), t.y < TREE_SCALE_SNAP_MAX && t.y > TREE_SCALE_SNAP_MIN && (t.y = 1);
}
function translateAxis(e, t) {
	e.min += t, e.max += t;
}
function transformAxis(e, t, n, r, i = .5) {
	applyAxisDelta(e, t, n, mixNumber(e.min, e.max, i), r);
}
function transformBox(e, t) {
	transformAxis(e.x, t.x, t.scaleX, t.scale, t.originX), transformAxis(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function measureViewportBox(e, t) {
	return convertBoundingBoxToBox(transformBoxPoints(e.getBoundingClientRect(), t));
}
function measurePageBox(e, t, n) {
	let r = measureViewportBox(e, n), { scroll: i } = t;
	return i && (translateAxis(r.x, i.offset.x), translateAxis(r.y, i.offset.y)), r;
}
var translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, numTransforms = transformPropOrder.length;
function buildTransform(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < numTransforms; a++) {
		let o = transformPropOrder[a], c = e[o];
		if (c === void 0) continue;
		let l = !0;
		if (typeof c == "number") l = c === (o.startsWith("scale") ? 1 : 0);
		else {
			let e = parseFloat(c);
			l = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!l || n) {
			let e = getValueAsType(c, numberValueTypes[o]);
			if (!l) {
				i = !1;
				let t = translateAlias[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
function buildHTMLStyles(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, c = !1;
	for (let e in t) {
		let n = t[e];
		if (transformProps.has(e)) {
			o = !0;
			continue;
		} else if (isCSSVariableName(e)) {
			i[e] = n;
			continue;
		} else {
			let t = getValueAsType(n, numberValueTypes[e]);
			e.startsWith("origin") ? (c = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = buildTransform(t, e.transform, n) : r.transform &&= "none"), c) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
function renderHTML(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
function pixelsToPercent(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var correctBorderRadius = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if (px.test(e)) e = parseFloat(e);
	else return e;
	return `${pixelsToPercent(e, t.target.x)}% ${pixelsToPercent(e, t.target.y)}%`;
} }, correctBoxShadow = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = complex.parse(e);
	if (i.length > 5) return r;
	let a = complex.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, c = n.x.scale * t.x, l = n.y.scale * t.y;
	i[0 + o] /= c, i[1 + o] /= l;
	let u = mixNumber(c, l, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), a(i);
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
function isForcedMotionValue(e, { layout: t, layoutId: n }) {
	return transformProps.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!scaleCorrectors[e] || e === "opacity");
}
function scrapeMotionValuesFromProps$1(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (isMotionValue(r[t]) || i && isMotionValue(i[t]) || isForcedMotionValue(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
function getComputedStyle$1(e) {
	return window.getComputedStyle(e);
}
var HTMLVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = renderHTML;
	}
	readValueFromInstance(e, t) {
		if (transformProps.has(t)) return this.projection?.isProjecting ? defaultTransformValue(t) : readTransformValue(e, t);
		{
			let n = getComputedStyle$1(e), r = (isCSSVariableName(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return measureViewportBox(e, t);
	}
	build(e, t, n) {
		buildHTMLStyles(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return scrapeMotionValuesFromProps$1(e, t, n);
	}
}, dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function buildSVGPath(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? dashKeys : camelKeys;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
var cssMotionPathProperties = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function buildSVGAttrs(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...c }, l, u, d) {
	if (buildHTMLStyles(e, c, u), l) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: f, style: p } = e;
	f.transform && (p.transform = f.transform, delete f.transform), (p.transform || f.transformOrigin) && (p.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin), p.transform && (p.transformBox = d?.transformBox ?? "fill-box", delete f.transformBox);
	for (let e of cssMotionPathProperties) f[e] !== void 0 && (p[e] = f[e], delete f[e]);
	t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && buildSVGPath(f, i, a, o, !1);
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
]), isSVGTag = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function renderSVG(e, t, n, r) {
	for (let n in renderHTML(e, t, void 0, r), t.attrs) e.setAttribute(camelCaseAttributes.has(n) ? n : camelToDash(n), t.attrs[n]);
}
function scrapeMotionValuesFromProps(e, t, n) {
	let r = scrapeMotionValuesFromProps$1(e, t, n);
	for (let n in e) if (isMotionValue(e[n]) || isMotionValue(t[n])) {
		let t = transformPropOrder.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
var SVGVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = createBox;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (transformProps.has(t)) {
			let e = getDefaultValueType(t);
			return e && e.default || 0;
		}
		return t = camelCaseAttributes.has(t) ? t : camelToDash(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return scrapeMotionValuesFromProps(e, t, n);
	}
	build(e, t, n) {
		buildSVGAttrs(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		renderSVG(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = isSVGTag(e.tagName), super.mount(e);
	}
}, numVariantProps = variantProps.length;
function getVariantContext(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && getVariantContext(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < numVariantProps; n++) {
		let r = variantProps[n], i = e.props[r];
		(isVariantLabel(i) || i === !1) && (t[r] = i);
	}
	return t;
}
function shallowCompare(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
var reversePriorityOrder = [...variantPriorityOrder].reverse(), numAnimationTypes = variantPriorityOrder.length;
function createAnimateFunction(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => animateVisualElement(e, t, n)));
}
function createAnimationState(e) {
	let t = createAnimateFunction(e), n = createState(), r = !0, i = (t) => (n, r) => {
		let i = resolveVariant(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
		if (i) {
			let { transition: e, transitionEnd: t, ...r } = i;
			n = {
				...n,
				...r,
				...t
			};
		}
		return n;
	};
	function a(n) {
		t = n(e);
	}
	function o(a) {
		let { props: o } = e, c = getVariantContext(e.parent) || {}, l = [], u = /* @__PURE__ */ new Set(), d = {}, f = Infinity;
		for (let t = 0; t < numAnimationTypes; t++) {
			let p = reversePriorityOrder[t], m = n[p], g = o[p] === void 0 ? c[p] : o[p], _ = isVariantLabel(g), v = p === a ? m.isActive : null;
			v === !1 && (f = t);
			let y = g === c[p] && g !== o[p] && _;
			if (y && r && e.manuallyAnimateOnMount && (y = !1), m.protectedKeys = { ...d }, !m.isActive && v === null || !g && !m.prevProp || isAnimationControls(g) || typeof g == "boolean") continue;
			if (p === "exit" && m.isActive && v !== !0) {
				m.prevResolvedValues && (d = {
					...d,
					...m.prevResolvedValues
				});
				continue;
			}
			let b = checkVariantsDidChange(m.prevProp, g), x = b || p === a && m.isActive && !y && _ || t > f && _, S = !1, C = Array.isArray(g) ? g : [g], w = C.reduce(i(p), {});
			v === !1 && (w = {});
			let { prevResolvedValues: T = {} } = m, E = {
				...T,
				...w
			}, D = (t) => {
				x = !0, u.has(t) && (S = !0, u.delete(t)), m.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in E) {
				let t = w[e], n = T[e];
				if (d.hasOwnProperty(e)) continue;
				let r = !1;
				r = isKeyframesTarget(t) && isKeyframesTarget(n) ? !shallowCompare(t, n) : t !== n, r ? t == null ? u.add(e) : D(e) : t !== void 0 && u.has(e) ? D(e) : m.protectedKeys[e] = !0;
			}
			m.prevProp = g, m.prevResolvedValues = w, m.isActive && (d = {
				...d,
				...w
			}), r && e.blockInitialAnimation && (x = !1);
			let O = y && b;
			x && (!O || S) && l.push(...C.map((t) => {
				let n = { type: p };
				if (typeof t == "string" && r && !O && e.manuallyAnimateOnMount && e.parent) {
					let { parent: r } = e, i = resolveVariant(r, t);
					if (r.enteringChildren && i) {
						let { delayChildren: t } = i.transition || {};
						n.delay = calcChildStagger(r.enteringChildren, e, t);
					}
				}
				return {
					animation: t,
					options: n
				};
			}));
		}
		if (u.size) {
			let t = {};
			if (typeof o.initial != "boolean") {
				let n = resolveVariant(e, Array.isArray(o.initial) ? o.initial[0] : o.initial);
				n && n.transition && (t.transition = n.transition);
			}
			u.forEach((n) => {
				let r = e.getBaseTarget(n), i = e.getValue(n);
				i && (i.liveStyle = !0), t[n] = r ?? null;
			}), l.push({ animation: t });
		}
		let p = !!l.length;
		return r && (o.initial === !1 || o.initial === o.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, p ? t(l) : Promise.resolve();
	}
	function c(t, r) {
		if (n[t].isActive === r) return Promise.resolve();
		e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), n[t].isActive = r;
		let i = o(t);
		for (let e in n) n[e].protectedKeys = {};
		return i;
	}
	return {
		animateChanges: o,
		setActive: c,
		setAnimateFunction: a,
		getState: () => n,
		reset: () => {
			n = createState();
		}
	};
}
function checkVariantsDidChange(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !shallowCompare(t, e) : !1;
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
function copyAxisInto(e, t) {
	e.min = t.min, e.max = t.max;
}
function copyBoxInto(e, t) {
	copyAxisInto(e.x, t.x), copyAxisInto(e.y, t.y);
}
function copyAxisDeltaInto(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
var SCALE_PRECISION = 1e-4, SCALE_MIN = 1 - SCALE_PRECISION, SCALE_MAX = 1 + SCALE_PRECISION, TRANSLATE_PRECISION = .01, TRANSLATE_MIN = 0 - TRANSLATE_PRECISION, TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(e) {
	return e.max - e.min;
}
function isNear(e, t, n) {
	return Math.abs(e - t) <= n;
}
function calcAxisDelta(e, t, n, r = .5) {
	e.origin = r, e.originPoint = mixNumber(t.min, t.max, e.origin), e.scale = calcLength(n) / calcLength(t), e.translate = mixNumber(n.min, n.max, e.origin) - e.originPoint, (e.scale >= SCALE_MIN && e.scale <= SCALE_MAX || isNaN(e.scale)) && (e.scale = 1), (e.translate >= TRANSLATE_MIN && e.translate <= TRANSLATE_MAX || isNaN(e.translate)) && (e.translate = 0);
}
function calcBoxDelta(e, t, n, r) {
	calcAxisDelta(e.x, t.x, n.x, r ? r.originX : void 0), calcAxisDelta(e.y, t.y, n.y, r ? r.originY : void 0);
}
function calcRelativeAxis(e, t, n) {
	e.min = n.min + t.min, e.max = e.min + calcLength(t);
}
function calcRelativeBox(e, t, n) {
	calcRelativeAxis(e.x, t.x, n.x), calcRelativeAxis(e.y, t.y, n.y);
}
function calcRelativeAxisPosition(e, t, n) {
	e.min = t.min - n.min, e.max = e.min + calcLength(t);
}
function calcRelativePosition(e, t, n) {
	calcRelativeAxisPosition(e.x, t.x, n.x), calcRelativeAxisPosition(e.y, t.y, n.y);
}
function removePointDelta(e, t, n, r, i) {
	return e -= t, e = scalePoint(e, 1 / n, r), i !== void 0 && (e = scalePoint(e, 1 / i, r)), e;
}
function removeAxisDelta(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (percent.test(t) && (t = parseFloat(t), t = mixNumber(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let c = mixNumber(a.min, a.max, r);
	e === a && (c -= t), e.min = removePointDelta(e.min, t, n, c, i), e.max = removePointDelta(e.max, t, n, c, i);
}
function removeAxisTransforms(e, t, [n, r, i], a, o) {
	removeAxisDelta(e, t[n], t[r], t[i], t.scale, a, o);
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
function removeBoxTransforms(e, t, n, r) {
	removeAxisTransforms(e.x, t, xKeys, n ? n.x : void 0, r ? r.x : void 0), removeAxisTransforms(e.y, t, yKeys, n ? n.y : void 0, r ? r.y : void 0);
}
function isAxisDeltaZero(e) {
	return e.translate === 0 && e.scale === 1;
}
function isDeltaZero(e) {
	return isAxisDeltaZero(e.x) && isAxisDeltaZero(e.y);
}
function axisEquals(e, t) {
	return e.min === t.min && e.max === t.max;
}
function boxEquals(e, t) {
	return axisEquals(e.x, t.x) && axisEquals(e.y, t.y);
}
function axisEqualsRounded(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function boxEqualsRounded(e, t) {
	return axisEqualsRounded(e.x, t.x) && axisEqualsRounded(e.y, t.y);
}
function aspectRatio(e) {
	return calcLength(e.x) / calcLength(e.y);
}
function axisDeltaEquals(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function eachAxis(e) {
	return [e("x"), e("y")];
}
function buildProjectionTransform(e, t, n) {
	let r = "", i = e.x.translate / t.x, a = e.y.translate / t.y, o = n?.z || 0;
	if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
		let { transformPerspective: e, rotate: t, rotateX: i, rotateY: a, skewX: o, skewY: c } = n;
		e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotateX(${i}deg) `), a && (r += `rotateY(${a}deg) `), o && (r += `skewX(${o}deg) `), c && (r += `skewY(${c}deg) `);
	}
	let c = e.x.scale * t.x, l = e.y.scale * t.y;
	return (c !== 1 || l !== 1) && (r += `scale(${c}, ${l})`), r || "none";
}
var borders = [
	"TopLeft",
	"TopRight",
	"BottomLeft",
	"BottomRight"
], numBorders = borders.length, asNumber = (e) => typeof e == "string" ? parseFloat(e) : e, isPx = (e) => typeof e == "number" || px.test(e);
function mixValues(e, t, n, r, i, a) {
	i ? (e.opacity = mixNumber(0, n.opacity ?? 1, easeCrossfadeIn(r)), e.opacityExit = mixNumber(t.opacity ?? 1, 0, easeCrossfadeOut(r))) : a && (e.opacity = mixNumber(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < numBorders; i++) {
		let a = `border${borders[i]}Radius`, o = getRadius(t, a), c = getRadius(n, a);
		o === void 0 && c === void 0 || (o ||= 0, c ||= 0, o === 0 || c === 0 || isPx(o) === isPx(c) ? (e[a] = Math.max(mixNumber(asNumber(o), asNumber(c), r), 0), (percent.test(c) || percent.test(o)) && (e[a] += "%")) : e[a] = c);
	}
	(t.rotate || n.rotate) && (e.rotate = mixNumber(t.rotate || 0, n.rotate || 0, r));
}
function getRadius(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var easeCrossfadeIn = /* @__PURE__ */ compress(0, .5, circOut), easeCrossfadeOut = /* @__PURE__ */ compress(.5, .95, noop);
function compress(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ progress(e, t, r));
}
function animateSingleValue(e, t, n) {
	let r = isMotionValue(e) ? e : motionValue(e);
	return r.start(animateMotionValue("", r, t, n)), r.animation;
}
function addDomEvent(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
var compareByDepth = (e, t) => e.depth - t.depth, FlatTree = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		addUniqueItem(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		removeItem(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(compareByDepth), this.isDirty = !1, this.children.forEach(e);
	}
};
function delay(e, t) {
	let n = time.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (cancelFrame(r), e(a - t));
	};
	return frame.setup(r, !0), () => cancelFrame(r);
}
function resolveMotionValue(e) {
	return isMotionValue(e) ? e.get() : e;
}
var NodeStack = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		addUniqueItem(this.members, e);
		for (let t = this.members.length - 1; t >= 0; t--) {
			let n = this.members[t];
			if (n === e || n === this.lead || n === this.prevLead) continue;
			let r = n.instance;
			r && r.isConnected === !1 && n.isPresent !== !1 && !n.snapshot && removeItem(this.members, n);
		}
		e.scheduleRender();
	}
	remove(e) {
		if (removeItem(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
			let e = this.members[this.members.length - 1];
			e && this.promote(e);
		}
	}
	relegate(e) {
		let t = this.members.findIndex((t) => e === t);
		if (t === 0) return !1;
		let n;
		for (let e = t; e >= 0; e--) {
			let t = this.members[e], r = t.instance;
			if (t.isPresent !== !1 && (!r || r.isConnected !== !1)) {
				n = t;
				break;
			}
		}
		return n ? (this.promote(n), !0) : !1;
	}
	promote(e, t) {
		let n = this.lead;
		if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
			n.instance && n.scheduleRender(), e.scheduleRender();
			let r = n.options.layoutDependency, i = e.options.layoutDependency;
			if (!(r !== void 0 && i !== void 0 && r === i)) {
				let r = n.instance;
				r && r.isConnected === !1 && !n.snapshot || (e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0));
			}
			let { crossfade: a } = e.options;
			a === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			let { options: t, resumingFrom: n } = e;
			t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach((e) => {
			e.instance && e.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
}, globalProjectionState = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
}, metrics = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, transformAxes = [
	"",
	"X",
	"Y",
	"Z"
], animationTarget = 1e3, id$1 = 0;
function resetDistortingTransform(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function cancelTreeOptimisedTransformAnimations(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = getOptimisedAppearId(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", frame, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && cancelTreeOptimisedTransformAnimations(r);
}
function createProjectionNode$1({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = id$1++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, statsBuffer.value && (metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0), this.nodes.forEach(propagateDirtyNodes), this.nodes.forEach(resolveTargetDelta), this.nodes.forEach(calcProjection), this.nodes.forEach(cleanDirtyNodes), statsBuffer.addProjectionMetrics && statsBuffer.addProjectionMetrics(metrics);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new FlatTree());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new SubscriptionManager()), this.eventHandlers.get(e).add(t);
		}
		notifyListeners(e, ...t) {
			let n = this.eventHandlers.get(e);
			n && n.notify(...t);
		}
		hasListeners(e) {
			return this.eventHandlers.has(e);
		}
		mount(t) {
			if (this.instance) return;
			this.isSVG = isSVGElement(t) && !isSVGSVGElement(t), this.instance = t;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
				let n, r = 0, i = () => this.root.updateBlockedByResize = !1;
				frame.read(() => {
					r = window.innerWidth;
				}), e(t, () => {
					let e = window.innerWidth;
					e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = delay(i, 250), globalProjectionState.hasAnimatedSinceResize && (globalProjectionState.hasAnimatedSinceResize = !1, this.nodes.forEach(finishAnimation)));
				});
			}
			n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || i.getDefaultTransition() || defaultLayoutTransition, { onLayoutAnimationStart: o, onLayoutAnimationComplete: c } = i.getProps(), l = !this.targetLayout || !boxEqualsRounded(this.targetLayout, r), u = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || u || t && (l || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...getValueTransition(a, "layout"),
						onPlay: o,
						onComplete: c
					};
					(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, u);
				} else t || finishAnimation(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), cancelFrame(this.updateProjection);
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
			let { visualElement: e } = this.options;
			return e && e.getProps().transformTemplate;
		}
		willUpdate(e = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && cancelTreeOptimisedTransformAnimations(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let e = 0; e < this.path.length; e++) {
				let t = this.path[e];
				t.shouldResetTransform = !0, t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1);
			}
			let { layoutId: t, layout: n } = this.options;
			if (t === void 0 && !n) return;
			let r = this.getTransformTemplate();
			this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(clearMeasurements);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(clearIsLayoutDirty);
				return;
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(resetTransformStyle), this.nodes.forEach(updateLayout), this.nodes.forEach(notifyLayoutUpdate)) : this.nodes.forEach(clearIsLayoutDirty), this.clearAllSnapshots();
			let e = time.now();
			frameData.delta = clamp(0, 1e3 / 60, e - frameData.timestamp), frameData.timestamp = e, frameData.isProcessing = !0, frameSteps.update.process(frameData), frameSteps.preRender.process(frameData), frameSteps.render.process(frameData), frameData.isProcessing = !1;
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
			this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = createBox(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: t } = this.options;
			t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
		}
		updateScroll(e = "measure") {
			let t = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
				let t = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: e,
					isRoot: t,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : t
				};
			}
		}
		resetTransform() {
			if (!i) return;
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !isDeltaZero(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || hasTransform(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), roundBox(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return createBox();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot))) {
				let { scroll: e } = this.root;
				e && (translateAxis(t.x, e.offset.x), translateAxis(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = createBox();
			if (copyBoxInto(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && copyBoxInto(t, e), translateAxis(t.x, i.offset.x), translateAxis(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1) {
			let n = createBox();
			copyBoxInto(n, e);
			for (let e = 0; e < this.path.length; e++) {
				let r = this.path[e];
				!t && r.options.layoutScroll && r.scroll && r !== r.root && transformBox(n, {
					x: -r.scroll.offset.x,
					y: -r.scroll.offset.y
				}), hasTransform(r.latestValues) && transformBox(n, r.latestValues);
			}
			return hasTransform(this.latestValues) && transformBox(n, this.latestValues), n;
		}
		removeTransform(e) {
			let t = createBox();
			copyBoxInto(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!n.instance || !hasTransform(n.latestValues)) continue;
				hasScale(n.latestValues) && n.updateSnapshot();
				let r = createBox();
				copyBoxInto(r, n.measurePageBox()), removeBoxTransforms(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r);
			}
			return hasTransform(this.latestValues) && removeBoxTransforms(t, this.latestValues), t;
		}
		setTargetDelta(e) {
			this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(e) {
			this.options = {
				...this.options,
				...e,
				crossfade: e.crossfade === void 0 ? !0 : e.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!this.layout || !(r || i)) return;
			this.resolvedRelativeTargetAt = frameData.timestamp;
			let a = this.getClosestProjectingParent();
			a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = createBox(), this.targetWithTransforms = createBox()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : copyBoxInto(this.target, this.layout.layoutBox), applyBoxDelta(this.target, this.targetDelta)) : copyBoxInto(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), statsBuffer.value && metrics.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(e, t, n) {
			this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = createBox(), this.relativeTargetOrigin = createBox(), calcRelativePosition(this.relativeTargetOrigin, t, n), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === frameData.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = createBox());
			let { target: c } = e;
			if (!c) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x), copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y)), calcBoxDelta(this.projectionDelta, this.layoutCorrected, c, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", c)), statsBuffer.value && metrics.calculatedProjections++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(e = !0) {
			if (this.options.visualElement?.scheduleRender(), e) {
				let e = this.getStack();
				e && e.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = createDelta(), this.projectionDelta = createDelta(), this.projectionDeltaWithTransform = createDelta();
		}
		setAnimationOrigin(e, t = !1) {
			let n = this.snapshot, r = n ? n.latestValues : {}, i = { ...this.latestValues }, a = createDelta();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let o = createBox(), c = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0), l = this.getStack(), u = !l || l.members.length <= 1, d = !!(c && !u && this.options.crossfade === !0 && !this.path.some(hasOpacityCrossfade));
			this.animationProgress = 0;
			let f;
			this.mixTargetDelta = (t) => {
				let n = t / 1e3;
				mixAxisDelta(a.x, e.x, n), mixAxisDelta(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (calcRelativePosition(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox), mixBox(this.relativeTarget, this.relativeTargetOrigin, o, n), f && boxEquals(this.relativeTarget, f) && (this.isProjectionDirty = !1), f ||= createBox(), copyBoxInto(f, this.relativeTarget)), c && (this.animationValues = i, mixValues(i, r, this.latestValues, n, d, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (cancelFrame(this.pendingAnimation), void 0), this.pendingAnimation = frame.update(() => {
				globalProjectionState.hasAnimatedSinceResize = !0, activeAnimations.layout++, this.motionValue ||= motionValue(0), this.motionValue.jump(0, !1), this.currentAnimation = animateSingleValue(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onStop: () => {
						activeAnimations.layout--;
					},
					onComplete: () => {
						activeAnimations.layout--, e.onComplete && e.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let e = this.getStack();
			e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(animationTarget), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (!(!t || !n || !r)) {
				if (this !== e && this.layout && r && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || createBox();
					let t = calcLength(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = calcLength(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				copyBoxInto(t, n), transformBox(t, i), calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new NodeStack()), this.sharedNodes.get(e).add(t);
			let n = t.options.initialPromotionConfig;
			t.promote({
				transition: n ? n.transition : void 0,
				preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
			});
		}
		isLead() {
			let e = this.getStack();
			return e ? e.lead === this : !0;
		}
		getLead() {
			let { layoutId: e } = this.options;
			return e && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: e } = this.options;
			return e ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: e } = this.options;
			if (e) return this.root.sharedNodes.get(e);
		}
		promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
			let r = this.getStack();
			r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t });
		}
		relegate() {
			let e = this.getStack();
			return e ? e.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: e } = this.options;
			if (!e) return;
			let t = !1, { latestValues: n } = e;
			if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
			let r = {};
			n.z && resetDistortingTransform("z", e, r, this.animationValues);
			for (let t = 0; t < transformAxes.length; t++) resetDistortingTransform(`rotate${transformAxes[t]}`, e, r, this.animationValues), resetDistortingTransform(`skew${transformAxes[t]}`, e, r, this.animationValues);
			for (let t in e.render(), r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
			e.scheduleRender();
		}
		applyProjectionStyles(e, t) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				e.visibility = "hidden";
				return;
			}
			let n = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, e.visibility = "", e.opacity = "", e.pointerEvents = resolveMotionValue(t?.pointerEvents) || "", e.transform = n ? n(this.latestValues, "") : "none";
				return;
			}
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = resolveMotionValue(t?.pointerEvents) || ""), this.hasProjected && !hasTransform(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1);
				return;
			}
			e.visibility = "";
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget();
			let a = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, i);
			n && (a = n(i, a)), e.transform = a;
			let { x: o, y: c } = this.projectionDelta;
			for (let t in e.transformOrigin = `${o.origin * 100}% ${c.origin * 100}% 0`, r.animationValues ? e.opacity = r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : e.opacity = r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit, scaleCorrectors) {
				if (i[t] === void 0) continue;
				let { correct: n, applyTo: o, isCSSVariable: c } = scaleCorrectors[t], l = a === "none" ? i[t] : n(i[t], r);
				if (o) {
					let t = o.length;
					for (let n = 0; n < t; n++) e[o[n]] = l;
				} else c ? this.options.visualElement.renderState.vars[t] = l : e[t] = l;
			}
			this.options.layoutId && (e.pointerEvents = r === this ? resolveMotionValue(t?.pointerEvents) || "" : "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(clearMeasurements), this.root.sharedNodes.clear();
		}
	};
}
function updateLayout(e) {
	e.updateLayout();
}
function notifyLayoutUpdate(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		i === "size" ? eachAxis((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = calcLength(r);
			r.min = n[e].min, r.max = r.min + i;
		}) : shouldAnimatePositionOnly(i, t.layoutBox, n) && eachAxis((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = calcLength(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = createDelta();
		calcBoxDelta(o, n, t.layoutBox);
		let c = createDelta();
		a ? calcBoxDelta(c, e.applyTransform(r, !0), t.measuredBox) : calcBoxDelta(c, n, t.layoutBox);
		let l = !isDeltaZero(o), u = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = createBox();
					calcRelativePosition(o, t.layoutBox, i.layoutBox);
					let c = createBox();
					calcRelativePosition(c, n, a.layoutBox), boxEqualsRounded(o, c) || (u = !0), r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = o, e.relativeParent = r);
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: n,
			snapshot: t,
			delta: c,
			layoutDelta: o,
			hasLayoutChanged: l,
			hasRelativeLayoutChanged: u
		});
	} else if (e.isLead()) {
		let { onExitComplete: t } = e.options;
		t && t();
	}
	e.options.transition = void 0;
}
function propagateDirtyNodes(e) {
	statsBuffer.value && metrics.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function cleanDirtyNodes(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function clearSnapshot(e) {
	e.clearSnapshot();
}
function clearMeasurements(e) {
	e.clearMeasurements();
}
function clearIsLayoutDirty(e) {
	e.isLayoutDirty = !1;
}
function resetTransformStyle(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function finishAnimation(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function resolveTargetDelta(e) {
	e.resolveTargetDelta();
}
function calcProjection(e) {
	e.calcProjection();
}
function resetSkewAndRotation(e) {
	e.resetSkewAndRotation();
}
function removeLeadSnapshots(e) {
	e.removeLeadSnapshot();
}
function mixAxisDelta(e, t, n) {
	e.translate = mixNumber(t.translate, 0, n), e.scale = mixNumber(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function mixAxis(e, t, n, r) {
	e.min = mixNumber(t.min, n.min, r), e.max = mixNumber(t.max, n.max, r);
}
function mixBox(e, t, n, r) {
	mixAxis(e.x, t.x, n.x, r), mixAxis(e.y, t.y, n.y, r);
}
function hasOpacityCrossfade(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, userAgentContains = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(e) {
	e.min = roundPoint(e.min), e.max = roundPoint(e.max);
}
function roundBox(e) {
	roundAxis(e.x), roundAxis(e.y);
}
function shouldAnimatePositionOnly(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !isNear(aspectRatio(t), aspectRatio(n), .2);
}
function checkNodeWasScrollRoot(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
var DocumentProjectionNode = createProjectionNode$1({
	attachResizeListener: (e, t) => addDomEvent(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => !0
}), rootProjectionNode = { current: void 0 }, HTMLProjectionNode = createProjectionNode$1({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!rootProjectionNode.current) {
			let e = new DocumentProjectionNode({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), rootProjectionNode.current = e;
		}
		return rootProjectionNode.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), MotionConfigContext = createContext({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
});
function setRef(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function composeRefs(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = setRef(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : setRef(e[t], null);
			}
		};
	};
}
function useComposedRefs(...e) {
	return React$1.useCallback(composeRefs(...e), e);
}
var PopChildMeasure = class extends React$1.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (t && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
			let e = t.offsetParent, n = isHTMLElement(e) && e.offsetWidth || 0, r = isHTMLElement(e) && e.offsetHeight || 0, i = this.props.sizeRef.current;
			i.height = t.offsetHeight || 0, i.width = t.offsetWidth || 0, i.top = t.offsetTop, i.left = t.offsetLeft, i.right = n - i.width - i.left, i.bottom = r - i.height - i.top;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function PopChild({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a }) {
	let o = useId(), c = useRef(null), l = useRef({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}), { nonce: u } = useContext(MotionConfigContext), d = useComposedRefs(c, e.props?.ref ?? e?.ref);
	return useInsertionEffect(() => {
		let { width: e, height: d, top: f, left: p, right: m, bottom: g } = l.current;
		if (t || a === !1 || !c.current || !e || !d) return;
		let _ = n === "left" ? `left: ${p}` : `right: ${m}`, v = r === "bottom" ? `bottom: ${g}` : `top: ${f}`;
		c.current.dataset.motionPopId = o;
		let y = document.createElement("style");
		u && (y.nonce = u);
		let b = i ?? document.head;
		return b.appendChild(y), y.sheet && y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${d}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `), () => {
			b.contains(y) && b.removeChild(y);
		};
	}, [t]), jsx(PopChildMeasure, {
		isPresent: t,
		childRef: c,
		sizeRef: l,
		pop: a,
		children: a === !1 ? e : React$1.cloneElement(e, { ref: d })
	});
}
var PresenceChild = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: a, mode: o, anchorX: c, anchorY: l, root: u }) => {
	let d = useConstant(newChildrenMap), f = useId(), p = !0, m = useMemo(() => (p = !1, {
		id: f,
		initial: t,
		isPresent: n,
		custom: i,
		onExitComplete: (e) => {
			d.set(e, !0);
			for (let e of d.values()) if (!e) return;
			r && r();
		},
		register: (e) => (d.set(e, !1), () => d.delete(e))
	}), [
		n,
		d,
		r
	]);
	return a && p && (m = { ...m }), useMemo(() => {
		d.forEach((e, t) => d.set(t, !1));
	}, [n]), React$1.useEffect(() => {
		!n && !d.size && r && r();
	}, [n]), e = jsx(PopChild, {
		pop: o === "popLayout",
		isPresent: n,
		anchorX: c,
		anchorY: l,
		root: u,
		children: e
	}), jsx(PresenceContext.Provider, {
		value: m,
		children: e
	});
};
function newChildrenMap() {
	return /* @__PURE__ */ new Map();
}
function usePresence(e = !0) {
	let t = useContext(PresenceContext);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = useId();
	useEffect(() => {
		if (e) return i(a);
	}, [e]);
	let o = useCallback(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
var getChildKey = (e) => e.key || "";
function onlyElements(e) {
	let t = [];
	return Children.forEach(e, (e) => {
		isValidElement(e) && t.push(e);
	}), t;
}
var AnimatePresence = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: a = "sync", propagate: o = !1, anchorX: c = "left", anchorY: l = "top", root: u }) => {
	let [d, f] = usePresence(o), p = useMemo(() => onlyElements(e), [e]), m = o && !d ? [] : p.map(getChildKey), g = useRef(!0), _ = useRef(p), v = useConstant(() => /* @__PURE__ */ new Map()), y = useRef(/* @__PURE__ */ new Set()), [b, x] = useState(p), [S, C] = useState(p);
	useIsomorphicLayoutEffect(() => {
		g.current = !1, _.current = p;
		for (let e = 0; e < S.length; e++) {
			let t = getChildKey(S[e]);
			m.includes(t) ? (v.delete(t), y.current.delete(t)) : v.get(t) !== !0 && v.set(t, !1);
		}
	}, [
		S,
		m.length,
		m.join("-")
	]);
	let w = [];
	if (p !== b) {
		let e = [...p];
		for (let t = 0; t < S.length; t++) {
			let n = S[t], r = getChildKey(n);
			m.includes(r) || (e.splice(t, 0, n), w.push(n));
		}
		return a === "wait" && w.length && (e = w), C(onlyElements(e)), x(p), null;
	}
	process.env.NODE_ENV !== "production" && a === "wait" && S.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its mode is set to \"wait\". This will lead to odd visual behaviour.");
	let { forceRender: T } = useContext(LayoutGroupContext);
	return jsx(Fragment$1, { children: S.map((e) => {
		let b = getChildKey(e), x = o && !d ? !1 : p === S || m.includes(b);
		return jsx(PresenceChild, {
			isPresent: x,
			initial: !g.current || n ? void 0 : !1,
			custom: t,
			presenceAffectsLayout: i,
			mode: a,
			root: u,
			onExitComplete: x ? void 0 : () => {
				if (y.current.has(b)) return;
				if (y.current.add(b), v.has(b)) v.set(b, !0);
				else return;
				let e = !0;
				v.forEach((t) => {
					t || (e = !1);
				}), e && (T?.(), C(_.current), o && f?.(), r && r());
			},
			anchorX: c,
			anchorY: l,
			children: e
		}, b);
	}) });
}, LazyContext = createContext({ strict: !1 }), featureProps = {
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
	let e = {};
	for (let t in featureProps) e[t] = { isEnabled: (e) => featureProps[t].some((t) => !!e[t]) };
	setFeatureDefinitions(e), isInitialized = !0;
}
function getInitializedFeatureDefinitions() {
	return initFeatureDefinitions(), getFeatureDefinitions();
}
function loadFeatures(e) {
	let t = getInitializedFeatureDefinitions();
	for (let n in e) t[n] = {
		...t[n],
		...e[n]
	};
	setFeatureDefinitions(t);
}
var validMotionProps = new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport".split("."));
function isValidMotionProp(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || validMotionProps.has(e);
}
var shouldForward = (e) => !isValidMotionProp(e);
function loadExternalIsValidProp(e) {
	typeof e == "function" && (shouldForward = (t) => t.startsWith("on") ? !isValidMotionProp(t) : e(t));
}
try {
	loadExternalIsValidProp((init_is_prop_valid_framer_motion(), __toCommonJS(is_prop_valid_framer_motion_exports)).default);
} catch {}
function filterProps(e, t, n) {
	let r = {};
	for (let i in e) i === "values" && typeof e.values == "object" || (shouldForward(i) || n === !0 && isValidMotionProp(i) || !t && !isValidMotionProp(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
var MotionContext = /* @__PURE__ */ createContext({});
function getCurrentTreeVariants(e, t) {
	if (isControllingVariants(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || isVariantLabel(t) ? t : void 0,
			animate: isVariantLabel(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
function useCreateMotionContext(e) {
	let { initial: t, animate: n } = getCurrentTreeVariants(e, useContext(MotionContext));
	return useMemo(() => ({
		initial: t,
		animate: n
	}), [variantLabelsAsDependency(t), variantLabelsAsDependency(n)]);
}
function variantLabelsAsDependency(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
var createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
function copyRawValuesOnly(e, t, n) {
	for (let r in t) !isMotionValue(t[r]) && !isForcedMotionValue(r, n) && (e[r] = t[r]);
}
function useInitialMotionValues({ transformTemplate: e }, t) {
	return useMemo(() => {
		let n = createHtmlRenderState();
		return buildHTMLStyles(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function useStyle(e, t) {
	let n = e.style || {}, r = {};
	return copyRawValuesOnly(r, n, e), Object.assign(r, useInitialMotionValues(e, t)), r;
}
function useHTMLProps(e, t) {
	let n = {}, r = useStyle(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
var createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
});
function useSVGProps(e, t, n, r) {
	let i = useMemo(() => {
		let n = createSvgRenderState();
		return buildSVGAttrs(n, t, isSVGTag(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		copyRawValuesOnly(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
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
function useRender(e, t, n, { latestValues: r }, i, a = !1, o) {
	let c = (o ?? isSVGComponent(e) ? useSVGProps : useHTMLProps)(t, r, i, e), l = filterProps(t, typeof e == "string", a), u = e === Fragment ? {} : {
		...l,
		...c,
		ref: n
	}, { children: d } = t, f = useMemo(() => isMotionValue(d) ? d.get() : d, [d]);
	return createElement(e, {
		...u,
		children: f
	});
}
function makeState({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: makeLatestValues(n, r, i, e),
		renderState: t()
	};
}
function makeLatestValues(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = resolveMotionValue(a[e]);
	let { initial: o, animate: c } = e, l = isControllingVariants(e), u = isVariantNode(e);
	t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial), c === void 0 && (c = t.animate));
	let d = n ? n.initial === !1 : !1;
	d ||= o === !1;
	let f = d ? c : o;
	if (f && typeof f != "boolean" && !isAnimationControls(f)) {
		let t = Array.isArray(f) ? f : [f];
		for (let n = 0; n < t.length; n++) {
			let r = resolveVariantFromProps(e, t[n]);
			if (r) {
				let { transitionEnd: e, transition: t, ...n } = r;
				for (let e in n) {
					let t = n[e];
					if (Array.isArray(t)) {
						let e = d ? t.length - 1 : 0;
						t = t[e];
					}
					t !== null && (i[e] = t);
				}
				for (let t in e) i[t] = e[t];
			}
		}
	}
	return i;
}
var makeUseVisualState = (e) => (t, n) => {
	let r = useContext(MotionContext), i = useContext(PresenceContext), a = () => makeState(e, t, r, i);
	return n ? a() : useConstant(a);
}, useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
}), useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState
}), motionComponentSymbol = Symbol.for("motionComponentSymbol");
function useMotionRef(e, t, n) {
	let r = useRef(n);
	useInsertionEffect(() => {
		r.current = n;
	});
	let i = useRef(null);
	return useCallback((n) => {
		n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount());
		let a = r.current;
		if (typeof a == "function") if (n) {
			let e = a(n);
			typeof e == "function" && (i.current = e);
		} else i.current ? (i.current(), i.current = null) : a(n);
		else a && (a.current = n);
	}, [t]);
}
var SwitchLayoutGroupContext = createContext({});
function isRefObject(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function useVisualElement(e, t, n, r, i, a) {
	let { visualElement: o } = useContext(MotionContext), c = useContext(LazyContext), l = useContext(PresenceContext), u = useContext(MotionConfigContext), d = u.reducedMotion, f = u.skipAnimations, p = useRef(null), m = useRef(!1);
	r ||= c.renderer, !p.current && r && (p.current = r(e, {
		visualState: t,
		parent: o,
		props: n,
		presenceContext: l,
		blockInitialAnimation: l ? l.initial === !1 : !1,
		reducedMotionConfig: d,
		skipAnimations: f,
		isSVG: a
	}), m.current && p.current && (p.current.manuallyAnimateOnMount = !0));
	let g = p.current, _ = useContext(SwitchLayoutGroupContext);
	g && !g.projection && i && (g.type === "html" || g.type === "svg") && createProjectionNode(p.current, n, i, _);
	let v = useRef(!1);
	useInsertionEffect(() => {
		g && v.current && g.update(n, l);
	});
	let y = n[optimizedAppearDataAttribute], b = useRef(!!y && !window.MotionHandoffIsComplete?.(y) && window.MotionHasOptimisedAnimation?.(y));
	return useIsomorphicLayoutEffect(() => {
		m.current = !0, g && (v.current = !0, window.MotionIsMounted = !0, g.updateFeatures(), g.scheduleRenderMicrotask(), b.current && g.animationState && g.animationState.animateChanges());
	}), useEffect(() => {
		g && (!b.current && g.animationState && g.animationState.animateChanges(), b.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(y);
		}), !1), g.enteringChildren = void 0);
	}), g;
}
function createProjectionNode(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: c, layoutScroll: l, layoutRoot: u, layoutCrossfade: d } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || c && isRefObject(c),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		crossfade: d,
		layoutScroll: l,
		layoutRoot: u
	});
}
function getClosestProjectingNode(e) {
	if (e) return e.options.allowProjection === !1 ? getClosestProjectingNode(e.parent) : e.projection;
}
function createMotionComponent(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
	r && loadFeatures(r);
	let a = n ? n === "svg" : isSVGComponent(e), o = a ? useSVGVisualState : useHTMLVisualState;
	function c(n, c) {
		let l, u = {
			...useContext(MotionConfigContext),
			...n,
			layoutId: useLayoutId(n)
		}, { isStatic: d } = u, f = useCreateMotionContext(n), p = o(n, d);
		if (!d && isBrowser) {
			useStrictMode(u, r);
			let t = getProjectionFunctionality(u);
			l = t.MeasureLayout, f.visualElement = useVisualElement(e, p, u, i, t.ProjectionNode, a);
		}
		return jsxs(MotionContext.Provider, {
			value: f,
			children: [l && f.visualElement ? jsx(l, {
				visualElement: f.visualElement,
				...u
			}) : null, useRender(e, n, useMotionRef(p, f.visualElement, c), p, d, t, a)]
		});
	}
	c.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
	let l = forwardRef(c);
	return l[motionComponentSymbol] = e, l;
}
function useLayoutId({ layoutId: e }) {
	let t = useContext(LayoutGroupContext).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function useStrictMode(e, t) {
	let n = useContext(LazyContext).strict;
	if (process.env.NODE_ENV !== "production" && t && n) {
		let t = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		e.ignoreStrict ? warning(!1, t, "lazy-strict-mode") : invariant(!1, t, "lazy-strict-mode");
	}
}
function getProjectionFunctionality(e) {
	let { drag: t, layout: n } = getInitializedFeatureDefinitions();
	if (!t && !n) return {};
	let r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	};
}
function createMotionProxy(e, t) {
	if (typeof Proxy > "u") return createMotionComponent;
	let n = /* @__PURE__ */ new Map(), r = (n, r) => createMotionComponent(n, r, e, t);
	return new Proxy((e, t) => (process.env.NODE_ENV !== "production" && warnOnce(!1, "motion() is deprecated. Use motion.create() instead."), r(e, t)), { get: (i, a) => a === "create" ? r : (n.has(a) || n.set(a, createMotionComponent(a, void 0, e, t)), n.get(a)) });
}
var createDomVisualElement = (e, t) => t.isSVG ?? isSVGComponent(e) ? new SVGVisualElement(t) : new HTMLVisualElement(t, { allowProjection: e !== Fragment }), AnimationFeature = class extends Feature {
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
		let { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
		e !== t && this.updateAnimationControlsSubscription();
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
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			let r = this.node.animationState.setActive("exit", !e);
			t && !e && r.then(() => {
				t(this.id);
			});
		}
		mount() {
			let { register: e, onExitComplete: t } = this.node.presenceContext || {};
			t && t(this.id), e && (this.unmount = e(this.id));
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
var addPointerInfo = (e) => (t) => isPrimaryPointer(t) && e(t, extractEventInfo(t));
function addPointerEvent(e, t, n, r) {
	return addDomEvent(e, t, addPointerInfo(n), r);
}
var getContextWindow = ({ current: e }) => e ? e.ownerDocument.defaultView : null, distance = (e, t) => Math.abs(e - t);
function distance2D(e, t) {
	let n = distance(e.x, t.x), r = distance(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
var overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]), PanSession = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3, element: o } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (e) => {
			this.handleScroll(e.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let e = getPanInfo(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = distance2D(e.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = frameData;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastMoveEventInfo = transformPoint(t, this.transformPagePoint), frame.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = getPanInfo(e.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !isPrimaryPointer(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = r || window;
		let c = transformPoint(extractEventInfo(e), this.transformPagePoint), { point: l } = c, { timestamp: u } = frameData;
		this.history = [{
			...l,
			timestamp: u
		}];
		let { onSessionStart: d } = t;
		d && d(e, getPanInfo(c, this.history)), this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp)), o && this.startScrollTracking(o);
	}
	startScrollTracking(e) {
		let t = e.parentElement;
		for (; t;) {
			let e = getComputedStyle(t);
			(overflowStyles.has(e.overflowX) || overflowStyles.has(e.overflowY)) && this.scrollPositions.set(t, {
				x: t.scrollLeft,
				y: t.scrollTop
			}), t = t.parentElement;
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY
		}), window.addEventListener("scroll", this.onElementScroll, { capture: !0 }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
			window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }), window.removeEventListener("scroll", this.onWindowScroll);
		};
	}
	handleScroll(e) {
		let t = this.scrollPositions.get(e);
		if (!t) return;
		let n = e === window, r = n ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: e.scrollLeft,
			y: e.scrollTop
		}, i = {
			x: r.x - t.x,
			y: r.y - t.y
		};
		i.x === 0 && i.y === 0 || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), frame.update(this.updatePoint, !0));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), cancelFrame(this.updatePoint);
	}
};
function transformPoint(e, t) {
	return t ? { point: t(e.point) } : e;
}
function subtractPoint(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function getPanInfo({ point: e }, t) {
	return {
		point: e,
		delta: subtractPoint(e, lastDevicePoint(t)),
		offset: subtractPoint(e, startDevicePoint(t)),
		velocity: getVelocity(t, .1)
	};
}
function startDevicePoint(e) {
	return e[0];
}
function lastDevicePoint(e) {
	return e[e.length - 1];
}
function getVelocity(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = lastDevicePoint(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ secondsToMilliseconds(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	r === e[0] && e.length > 2 && i.timestamp - r.timestamp > /* @__PURE__ */ secondsToMilliseconds(t) * 2 && (r = e[1]);
	let a = /* @__PURE__ */ millisecondsToSeconds(i.timestamp - r.timestamp);
	if (a === 0) return {
		x: 0,
		y: 0
	};
	let o = {
		x: (i.x - r.x) / a,
		y: (i.y - r.y) / a
	};
	return o.x === Infinity && (o.x = 0), o.y === Infinity && (o.y = 0), o;
}
function applyConstraints(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? mixNumber(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? mixNumber(n, e, r.max) : Math.min(e, n)), e;
}
function calcRelativeAxisConstraints(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function calcRelativeConstraints(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: calcRelativeAxisConstraints(e.x, n, i),
		y: calcRelativeAxisConstraints(e.y, t, r)
	};
}
function calcViewportAxisConstraints(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function calcViewportConstraints(e, t) {
	return {
		x: calcViewportAxisConstraints(e.x, t.x),
		y: calcViewportAxisConstraints(e.y, t.y)
	};
}
function calcOrigin(e, t) {
	let n = .5, r = calcLength(e), i = calcLength(t);
	return i > r ? n = /* @__PURE__ */ progress(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ progress(e.min, e.max - i, t.min)), clamp(0, 1, n);
}
function rebaseAxisConstraints(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var defaultElastic = .35;
function resolveDragElastic(e = defaultElastic) {
	return e === !1 ? e = 0 : e === !0 && (e = defaultElastic), {
		x: resolveAxisElastic(e, "left", "right"),
		y: resolveAxisElastic(e, "top", "bottom")
	};
}
function resolveAxisElastic(e, t, n) {
	return {
		min: resolvePointElastic(e, t),
		max: resolvePointElastic(e, n)
	};
}
function resolvePointElastic(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
var elementDragControls = /* @__PURE__ */ new WeakMap(), VisualElementDragControls = class {
	constructor(e) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = createBox(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
		let { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		let i = (e) => {
			t && this.snapToCursor(extractEventInfo(e).point), this.stopAnimation();
		}, a = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = setDragLock(n), !this.openDragLock)) return;
			this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), eachAxis((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (percent.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = calcLength(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && frame.update(() => i(e, t), !1, !0), addValueToWillChange(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, o = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t;
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = getCurrentDirection(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && frame.update(() => a(e, t), !1, !0);
		}, c = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, l = () => {
			let { dragSnapToOrigin: e } = this.getProps();
			(e || this.constraints) && this.startAnimation({
				x: 0,
				y: 0
			});
		}, { dragSnapToOrigin: u } = this.getProps();
		this.panSession = new PanSession(e, {
			onSessionStart: i,
			onStart: a,
			onMove: o,
			onSessionEnd: c,
			resumeAnimation: l
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: u,
			distanceThreshold: n,
			contextWindow: getContextWindow(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(e, t) {
		let n = e || this.latestPointerEvent, r = t || this.latestPanInfo, i = this.isDragging;
		if (this.cancel(), !i || !r || !n) return;
		let { velocity: a } = r;
		this.startAnimation(a);
		let { onDragEnd: o } = this.getProps();
		o && frame.postRender(() => o(n, r));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: e, animationState: t } = this.visualElement;
		e && (e.isAnimationBlocked = !1), this.endPanSession();
		let { dragPropagation: n } = this.getProps();
		!n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1);
	}
	endPanSession() {
		this.panSession && this.panSession.end(), this.panSession = void 0;
	}
	updateAxis(e, t, n) {
		let { drag: r } = this.getProps();
		if (!n || !shouldDrag(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = applyConstraints(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && isRefObject(e) ? this.constraints ||= this.resolveRefConstraints() : e && n ? this.constraints = calcRelativeConstraints(n.layoutBox, e) : this.constraints = !1, this.elastic = resolveDragElastic(t), r !== this.constraints && !isRefObject(e) && n && this.constraints && !this.hasMutatedConstraints && eachAxis((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = rebaseAxisConstraints(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !isRefObject(e)) return !1;
		let n = e.current;
		invariant(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		let { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		let i = measurePageBox(n, r.root, this.visualElement.getTransformPagePoint()), a = calcViewportConstraints(r.layout.layoutBox, i);
		if (t) {
			let e = t(convertBoxToBoundingBox(a));
			this.hasMutatedConstraints = !!e, e && (a = convertBoundingBoxToBox(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), c = this.constraints || {}, l = eachAxis((o) => {
			if (!shouldDrag(o, t, this.currentDirection)) return;
			let l = c && c[o] || {};
			a && (l = {
				min: 0,
				max: 0
			});
			let u = r ? 200 : 1e6, d = r ? 40 : 1e7, f = {
				type: "inertia",
				velocity: n ? e[o] : 0,
				bounceStiffness: u,
				bounceDamping: d,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...i,
				...l
			};
			return this.startAxisValueAnimation(o, f);
		});
		return Promise.all(l).then(o);
	}
	startAxisValueAnimation(e, t) {
		let n = this.getAxisMotionValue(e);
		return addValueToWillChange(this.visualElement, e), n.start(animateMotionValue(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		eachAxis((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps();
		return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
	}
	snapToCursor(e) {
		eachAxis((t) => {
			let { drag: n } = this.getProps();
			if (!shouldDrag(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t], o = i.get() || 0;
				i.set(e[t] - mixNumber(n, a, .5) + o);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!isRefObject(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		eachAxis((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = calcOrigin({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), eachAxis((t) => {
			if (!shouldDrag(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(mixNumber(i, a, r[t]));
		}), this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		elementDragControls.set(this.visualElement, this);
		let e = this.visualElement.current, t = addPointerEvent(e, "pointerdown", (t) => {
			let { drag: n, dragListener: r = !0 } = this.getProps(), i = t.target, a = i !== e && isElementTextInput(i);
			n && r && !a && this.start(t);
		}), n, r = () => {
			let { dragConstraints: t } = this.getProps();
			isRefObject(t) && t.current && (this.constraints = this.resolveRefConstraints(), n ||= startResizeObservers(e, t.current, () => this.scalePositionWithinConstraints()));
		}, { projection: i } = this.visualElement, a = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), frame.read(r);
		let o = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints()), c = i.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && (eachAxis((t) => {
				let n = this.getAxisMotionValue(t);
				n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
			}), this.visualElement.render());
		}));
		return () => {
			o(), t(), a(), c && c(), n && n();
		};
	}
	getProps() {
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = defaultElastic, dragMomentum: o = !0 } = e;
		return {
			...e,
			drag: t,
			dragDirectionLock: n,
			dragPropagation: r,
			dragConstraints: i,
			dragElastic: a,
			dragMomentum: o
		};
	}
};
function skipFirstCall(e) {
	let t = !0;
	return () => {
		if (t) {
			t = !1;
			return;
		}
		e();
	};
}
function startResizeObservers(e, t, n) {
	let r = resize(e, skipFirstCall(n)), i = resize(t, skipFirstCall(n));
	return () => {
		r(), i();
	};
}
function shouldDrag(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function getCurrentDirection(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
var DragGesture = class extends Feature {
	constructor(e) {
		super(e), this.removeGroupControls = noop, this.removeListeners = noop, this.controls = new VisualElementDragControls(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || noop;
	}
	update() {
		let { dragControls: e } = this.node.getProps(), { dragControls: t } = this.node.prevProps || {};
		e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
	}
}, asyncHandler = (e) => (t, n) => {
	e && frame.update(() => e(t, n), !1, !0);
}, PanGesture = class extends Feature {
	constructor() {
		super(...arguments), this.removePointerDownListener = noop;
	}
	onPointerDown(e) {
		this.session = new PanSession(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: getContextWindow(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: asyncHandler(e),
			onStart: asyncHandler(t),
			onMove: asyncHandler(n),
			onEnd: (e, t) => {
				delete this.session, r && frame.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, hasTakenAnySnapshot = !1, MeasureLayoutWithContext = class extends Component {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		i && (t.group && t.group.add(i), n && n.register && r && n.register(i), hasTakenAnySnapshot && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			layoutDependency: this.props.layoutDependency,
			onExitComplete: () => this.safeToRemove()
		})), globalProjectionState.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, { projection: a } = n;
		return a ? (a.isPresent = i, e.layoutDependency !== t && a.setOptions({
			...a.options,
			layoutDependency: t
		}), hasTakenAnySnapshot = !0, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || frame.postRender(() => {
			let e = a.getStack();
			(!e || !e.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { projection: e } = this.props.visualElement;
		e && (e.root.didUpdate(), microtask.postRender(() => {
			!e.currentAnimation && e.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		hasTakenAnySnapshot = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
	}
	safeToRemove() {
		let { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
};
function MeasureLayout(e) {
	let [t, n] = usePresence(), r = useContext(LayoutGroupContext);
	return jsx(MeasureLayoutWithContext, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: useContext(SwitchLayoutGroupContext),
		isPresent: t,
		safeToRemove: n
	});
}
var drag = {
	pan: { Feature: PanGesture },
	drag: {
		Feature: DragGesture,
		ProjectionNode: HTMLProjectionNode,
		MeasureLayout
	}
};
function handleHoverEvent(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	let i = r["onHover" + n];
	i && frame.postRender(() => i(t, extractEventInfo(t)));
}
var HoverGesture = class extends Feature {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = hover(e, (e, t) => (handleHoverEvent(this.node, t, "Start"), (e) => handleHoverEvent(this.node, e, "End"))));
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
function handlePressEvent(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	let i = r["onTap" + (n === "End" ? "" : n)];
	i && frame.postRender(() => i(t, extractEventInfo(t)));
}
var PressGesture = class extends Feature {
	mount() {
		let { current: e } = this.node;
		if (!e) return;
		let { globalTapTarget: t, propagate: n } = this.node.props;
		this.unmount = press(e, (e, t) => (handlePressEvent(this.node, t, "Start"), (e, { success: t }) => handlePressEvent(this.node, e, t ? "End" : "Cancel")), {
			useGlobalTarget: t,
			stopPropagation: n?.tap === !1
		});
	}
	unmount() {}
}, observerCallbacks = /* @__PURE__ */ new WeakMap(), observers = /* @__PURE__ */ new WeakMap(), fireObserverCallback = (e) => {
	let t = observerCallbacks.get(e.target);
	t && t(e);
}, fireAllObserverCallbacks = (e) => {
	e.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root: e, ...t }) {
	let n = e || document;
	observers.has(n) || observers.set(n, {});
	let r = observers.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(fireAllObserverCallbacks, {
		root: e,
		...t
	})), r[i];
}
function observeIntersection(e, t, n) {
	let r = initIntersectionObserver(t);
	return observerCallbacks.set(e, n), r.observe(e), () => {
		observerCallbacks.delete(e), r.unobserve(e);
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
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : thresholdNames[r]
		};
		return observeIntersection(this.node.current, a, (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		});
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: e, prevProps: t } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(hasViewportOptionChanged(e, t)) && this.startObserver();
	}
	unmount() {}
};
function hasViewportOptionChanged({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
var gestureAnimations = {
	inView: { Feature: InViewFeature },
	tap: { Feature: PressGesture },
	focus: { Feature: FocusGesture },
	hover: { Feature: HoverGesture }
}, layout = { layout: {
	ProjectionNode: HTMLProjectionNode,
	MeasureLayout
} }, motion = /* @__PURE__ */ createMotionProxy({
	...animations,
	...gestureAnimations,
	...drag,
	...layout
}, createDomVisualElement);
function useMotionValue(e) {
	let t = useConstant(() => motionValue(e)), { isStatic: n } = useContext(MotionConfigContext);
	if (n) {
		let [, n] = useState(e);
		useEffect(() => t.on("change", n), []);
	}
	return t;
}
function useCombineMotionValues(e, t) {
	let n = useMotionValue(t()), r = () => n.set(t());
	return r(), useIsomorphicLayoutEffect(() => {
		let t = () => frame.preRender(r, !1, !0), n = e.map((e) => e.on("change", t));
		return () => {
			n.forEach((e) => e()), cancelFrame(r);
		};
	}), n;
}
function useComputed(e) {
	collectMotionValues.current = [], e();
	let t = useCombineMotionValues(collectMotionValues.current, e);
	return collectMotionValues.current = void 0, t;
}
function useTransform(e, t, n, r) {
	if (typeof e == "function") return useComputed(e);
	if (n !== void 0 && !Array.isArray(n) && typeof t != "function") return useMapTransform(e, t, n, r);
	let i = typeof t == "function" ? t : transform(t, n, r), a = Array.isArray(e) ? useListTransform(e, i) : useListTransform([e], ([e]) => i(e)), o = Array.isArray(e) ? void 0 : e.accelerate;
	return o && !o.isTransformed && typeof t != "function" && Array.isArray(n) && r?.clamp !== !1 && (a.accelerate = {
		...o,
		times: t,
		keyframes: n,
		isTransformed: !0,
		...r?.ease ? { ease: r.ease } : {}
	}), a;
}
function useListTransform(e, t) {
	let n = useConstant(() => []);
	return useCombineMotionValues(e, () => {
		n.length = 0;
		let r = e.length;
		for (let t = 0; t < r; t++) n[t] = e[t].get();
		return t(n);
	});
}
function useMapTransform(e, t, n, r) {
	let i = useConstant(() => Object.keys(n)), a = useConstant(() => ({}));
	for (let o of i) a[o] = useTransform(e, t, n[o], r);
	return a;
}
function useFollowValue(e, t = {}) {
	let { isStatic: n } = useContext(MotionConfigContext), r = () => isMotionValue(e) ? e.get() : e;
	if (n) return useTransform(r);
	let i = useMotionValue(r());
	return useInsertionEffect(() => attachFollow(i, e, t), [i, JSON.stringify(t)]), i;
}
function useSpring(e, t = {}) {
	return useFollowValue(e, {
		type: "spring",
		...t
	});
}
const LinkPreview = ({ children: e, url: t, className: n, width: r = 200, height: a = 125, isStatic: o = !1, imageSrc: c = "" }) => {
	let l;
	l = o ? c : `https://api.microlink.io/?${encode({
		url: t,
		screenshot: !0,
		meta: !1,
		embed: "screenshot.url",
		colorScheme: "dark",
		"viewport.isMobile": !0,
		"viewport.deviceScaleFactor": 1,
		"viewport.width": r * 3,
		"viewport.height": a * 3
	})}`;
	let [u, d] = React.useState(!1), [f, p] = React.useState(!1);
	React.useEffect(() => {
		p(!0);
	}, []);
	let m = {
		stiffness: 100,
		damping: 15
	}, g = useMotionValue(0), _ = useSpring(g, m);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [f ? /* @__PURE__ */ jsx("div", {
		className: "hidden",
		children: /* @__PURE__ */ jsx("img", {
			src: l,
			width: r,
			height: a,
			alt: "hidden image"
		})
	}) : null, /* @__PURE__ */ jsxs(Root2, {
		openDelay: 50,
		closeDelay: 100,
		onOpenChange: (e) => {
			d(e);
		},
		children: [/* @__PURE__ */ jsx(Trigger, {
			onMouseMove: (e) => {
				let t = e.target.getBoundingClientRect(), n = (e.clientX - t.left - t.width / 2) / 2;
				g.set(n);
			},
			className: cn("text-black dark:text-white", n),
			href: t,
			children: e
		}), /* @__PURE__ */ jsx(Content2, {
			className: "[transform-origin:var(--radix-hover-card-content-transform-origin)]",
			side: "top",
			align: "center",
			sideOffset: 10,
			children: /* @__PURE__ */ jsx(AnimatePresence, { children: u && /* @__PURE__ */ jsx(motion.div, {
				initial: {
					opacity: 0,
					y: 20,
					scale: .6
				},
				animate: {
					opacity: 1,
					y: 0,
					scale: 1,
					transition: {
						type: "spring",
						stiffness: 260,
						damping: 20
					}
				},
				exit: {
					opacity: 0,
					y: 20,
					scale: .6
				},
				className: "shadow-xl rounded-xl",
				style: { x: _ },
				children: /* @__PURE__ */ jsx("a", {
					href: t,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800",
					style: { fontSize: 0 },
					children: /* @__PURE__ */ jsx("img", {
						src: o ? c : l,
						width: r,
						height: a,
						className: "rounded-lg",
						alt: "preview image"
					})
				})
			}) })
		})]
	})] });
};
function extractText(e) {
	if (typeof e == "string") return e;
	if (Array.isArray(e)) return e.map(extractText).join("");
	if (React.isValidElement(e)) {
		let t = e.props.children;
		return extractText(t);
	}
	return "";
}
function CodeBlock({ children: e, className: t, ...n }) {
	let r = extractText(e);
	return /* @__PURE__ */ jsxs("div", {
		className: "group relative my-4",
		children: [/* @__PURE__ */ jsx("pre", {
			className: cn("overflow-x-auto rounded-md border bg-muted/40 p-4 font-mono text-sm custom-scrollbar", React.isValidElement(e) ? e.props.className : t),
			...n,
			children: /* @__PURE__ */ jsx("code", { children: r })
		}), /* @__PURE__ */ jsx("div", {
			className: "absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100 z-10",
			children: /* @__PURE__ */ jsx(CopyButton, {
				content: r,
				copyMessage: "Copied code to clipboard"
			})
		})]
	});
}
function withClass(e, t) {
	let n = ({ node: n, className: r, ...a }) => React.createElement(e, {
		...a,
		className: cn(t, r)
	});
	return n.displayName = e, n;
}
var components = {
	h1: withClass("h1", "text-2xl font-semibold mb-4"),
	h2: withClass("h2", "text-xl font-semibold mb-3"),
	h3: withClass("h3", "text-lg font-semibold mb-2"),
	h4: withClass("h4", "text-base font-semibold mb-2"),
	h5: withClass("h5", "text-sm font-medium mb-1"),
	p: withClass("p", "whitespace-pre-wrap mb-4 last:mb-0"),
	strong: withClass("strong", "font-semibold"),
	a({ node: e, className: t, children: n, href: r, ...a }) {
		return r ? /* @__PURE__ */ jsx(LinkPreview, {
			url: r,
			className: cn("text-primary underline underline-offset-2 hover:opacity-80 transition-opacity", t),
			children: n
		}) : /* @__PURE__ */ jsx("a", {
			className: cn("text-primary underline underline-offset-2 hover:opacity-80 transition-opacity", t),
			...a,
			children: n
		});
	},
	hr: withClass("hr", "my-6 border-foreground/20"),
	blockquote: withClass("blockquote", "border-l-2 border-primary pl-4 italic my-4"),
	ul: withClass("ul", "list-disc space-y-2 pl-6 my-4"),
	ol: withClass("ol", "list-decimal space-y-2 pl-6 my-4"),
	li: withClass("li", "my-1.5"),
	table({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ jsx("div", {
			className: "my-4 max-w-[90%] overflow-x-hidden rounded-md border border-foreground/20 shadow-sm",
			children: /* @__PURE__ */ jsx("table", {
				className: cn("border-collapse ", t),
				...r,
				children: n
			})
		});
	},
	th: withClass("th", "border border-foreground/20 bg-muted px-4 py-2 text-left font-semibold"),
	td: withClass("td", "border border-foreground/20 px-4 py-2"),
	tr: withClass("tr", "even:bg-muted/40"),
	code({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ jsx("code", {
			className: cn("rounded bg-muted px-1 py-0.5 font-mono text-sm", t),
			...r,
			children: n
		});
	},
	pre({ children: e }) {
		return /* @__PURE__ */ jsx(CodeBlock, { children: e });
	}
};
function MarkdownRenderer({ children: e, className: t }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("prose-sm max-w-none", t),
		children: /* @__PURE__ */ jsx(Markdown, {
			remarkPlugins: [remarkGfm],
			rehypePlugins: [rehypeRaw],
			components,
			children: e
		})
	});
}
export { MarkdownRenderer as default };
