import { createElement, forwardRef } from "react";
/**
* @license lucide-react v0.562.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), toCamelCase = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, n, r) => r ? r.toUpperCase() : n.toLowerCase()), toPascalCase = (e) => {
	let n = toCamelCase(e);
	return n.charAt(0).toUpperCase() + n.slice(1);
}, mergeClasses = (...e) => e.filter((e, n, r) => !!e && e.trim() !== "" && r.indexOf(e) === n).join(" ").trim(), hasA11yProp = (e) => {
	for (let n in e) if (n.startsWith("aria-") || n === "role" || n === "title") return !0;
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
}, Icon = forwardRef(({ color: n = "currentColor", size: r = 24, strokeWidth: i = 2, absoluteStrokeWidth: a, className: c = "", children: l, iconNode: u, ...d }, f) => createElement("svg", {
	ref: f,
	...defaultAttributes,
	width: r,
	height: r,
	stroke: n,
	strokeWidth: a ? Number(i) * 24 / Number(r) : i,
	className: mergeClasses("lucide", c),
	...!l && !hasA11yProp(d) && { "aria-hidden": "true" },
	...d
}, [...u.map(([n, r]) => createElement(n, r)), ...Array.isArray(l) ? l : [l]])), createLucideIcon = (i, o) => {
	let s = forwardRef(({ className: n, ...s }, l) => createElement(Icon, {
		ref: l,
		iconNode: o,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(i))}`, `lucide-${i}`, n),
		...s
	}));
	return s.displayName = toPascalCase(i), s;
};
export { createLucideIcon as t };
