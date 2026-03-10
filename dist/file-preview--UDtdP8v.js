import "./create-proxy-CwJMlGNV.js";
import { t as createLucideIcon } from "./createLucideIcon-C1Qbi7jU.js";
import { n as X, t as m } from "./proxy-CYnmdcit.js";
import React, { useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var File = createLucideIcon("file", [["path", {
	d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
	key: "1oefj6"
}], ["path", {
	d: "M14 2v5a1 1 0 0 0 1 1h5",
	key: "wfsgrz"
}]]);
const FilePreview = React.forwardRef((e, a) => e.file.type.startsWith("image/") ? /* @__PURE__ */ jsx(ImageFilePreview, {
	...e,
	ref: a
}) : e.file.type.startsWith("text/") || e.file.name.endsWith(".txt") || e.file.name.endsWith(".md") ? /* @__PURE__ */ jsx(TextFilePreview, {
	...e,
	ref: a
}) : /* @__PURE__ */ jsx(GenericFilePreview, {
	...e,
	ref: a
}));
FilePreview.displayName = "FilePreview";
var ImageFilePreview = React.forwardRef(({ file: e, onRemove: o }, s) => /* @__PURE__ */ jsxs(m.div, {
	ref: s,
	className: "relative flex max-w-[200px] rounded-md border p-1.5 pr-2 text-xs",
	layout: !0,
	initial: {
		opacity: 0,
		y: "100%"
	},
	animate: {
		opacity: 1,
		y: 0
	},
	exit: {
		opacity: 0,
		y: "100%"
	},
	children: [/* @__PURE__ */ jsxs("div", {
		className: "flex w-full items-center space-x-2",
		children: [/* @__PURE__ */ jsx("img", {
			alt: `Attachment ${e.name}`,
			className: "grid h-10 w-10 shrink-0 place-items-center rounded-sm border bg-muted object-cover",
			src: URL.createObjectURL(e)
		}), /* @__PURE__ */ jsx("span", {
			className: "w-full truncate text-muted-foreground",
			children: e.name
		})]
	}), o ? /* @__PURE__ */ jsx("button", {
		className: "absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full border bg-background",
		type: "button",
		onClick: o,
		"aria-label": "Remove attachment",
		children: /* @__PURE__ */ jsx(X, { className: "h-2.5 w-2.5" })
	}) : null]
}));
ImageFilePreview.displayName = "ImageFilePreview";
var TextFilePreview = React.forwardRef(({ file: e, onRemove: c }, l) => {
	let [u, d] = React.useState("");
	return useEffect(() => {
		let a = new FileReader();
		a.onload = (e) => {
			let a = e.target?.result;
			d(a.slice(0, 50) + (a.length > 50 ? "..." : ""));
		}, a.readAsText(e);
	}, [e]), /* @__PURE__ */ jsxs(m.div, {
		ref: l,
		className: "relative flex max-w-[200px] rounded-md border p-1.5 pr-2 text-xs",
		layout: !0,
		initial: {
			opacity: 0,
			y: "100%"
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: "100%"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex w-full items-center space-x-2",
			children: [/* @__PURE__ */ jsx("div", {
				className: "grid h-10 w-10 shrink-0 place-items-center rounded-sm border bg-muted p-0.5",
				children: /* @__PURE__ */ jsx("div", {
					className: "h-full w-full overflow-hidden text-[6px] leading-none text-muted-foreground",
					children: u || "Loading..."
				})
			}), /* @__PURE__ */ jsx("span", {
				className: "w-full truncate text-muted-foreground",
				children: e.name
			})]
		}), c ? /* @__PURE__ */ jsx("button", {
			className: "absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full border bg-background",
			type: "button",
			onClick: c,
			"aria-label": "Remove attachment",
			children: /* @__PURE__ */ jsx(X, { className: "h-2.5 w-2.5" })
		}) : null]
	});
});
TextFilePreview.displayName = "TextFilePreview";
var GenericFilePreview = React.forwardRef(({ file: e, onRemove: o }, s) => /* @__PURE__ */ jsxs(m.div, {
	ref: s,
	className: "relative flex max-w-[200px] rounded-md border p-1.5 pr-2 text-xs",
	layout: !0,
	initial: {
		opacity: 0,
		y: "100%"
	},
	animate: {
		opacity: 1,
		y: 0
	},
	exit: {
		opacity: 0,
		y: "100%"
	},
	children: [/* @__PURE__ */ jsxs("div", {
		className: "flex w-full items-center space-x-2",
		children: [/* @__PURE__ */ jsx("div", {
			className: "grid h-10 w-10 shrink-0 place-items-center rounded-sm border bg-muted",
			children: /* @__PURE__ */ jsx(File, { className: "h-6 w-6 text-foreground" })
		}), /* @__PURE__ */ jsx("span", {
			className: "w-full truncate text-muted-foreground",
			children: e.name
		})]
	}), o ? /* @__PURE__ */ jsx("button", {
		className: "absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full border bg-background",
		type: "button",
		onClick: o,
		"aria-label": "Remove attachment",
		children: /* @__PURE__ */ jsx(X, { className: "h-2.5 w-2.5" })
	}) : null]
}));
GenericFilePreview.displayName = "GenericFilePreview";
export { FilePreview };
