import "./is-prop-valid_framer-motion-Bb0cVohX.js";
import { t as createLucideIcon } from "./createLucideIcon-C1Qbi7jU.js";
import { A as useComposedRefs, C as composeEventHandlers, E as cva, O as createSlot$1, S as createContextScope, T as cn, _ as DismissableLayer, c as Portal, g as useLayoutEffect2, h as useId$1, i as TooltipTrigger, k as composeRefs, n as TooltipContent, o as useControllableState, r as TooltipProvider, s as Presence, t as Tooltip, v as useCallbackRef, w as Button, x as createContext2, y as Primitive } from "./tooltip-CFKmWfJL.js";
import { _ as ChevronRight, a as stripMarkdownForSpeech, c as PopoverTrigger, d as FocusScope, f as useFocusGuards, g as Sparkles, h as Volume2, i as getVoiceSupport, l as Combination_default, m as Zap, n as SpeechSynthesisManager, o as Popover, p as Badge, r as defaultVoiceConfig, s as PopoverContent, t as SpeechRecognitionManager, u as hideOthers } from "./voice.sdk-B_dEErT1.js";
import { t as CopyButton } from "./copy-button-B7jIZ74N.js";
import { t as X } from "./x-Bor0dulj.js";
import { P as m, q as LazyMotion, tt as AnimatePresence } from "./es-C4DpcM6p.js";
import * as React$1 from "react";
import React, { Suspense, createContext, forwardRef, lazy, memo, useCallback, useContext, useEffect, useId, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { flushSync } from "react-dom";
import { useSyncExternalStore } from "use-sync-external-store/shim";
var ArrowDown = createLucideIcon("arrow-down", [["path", {
	d: "M12 5v14",
	key: "s699le"
}], ["path", {
	d: "m19 12-7 7-7-7",
	key: "1idqje"
}]]), Ban = createLucideIcon("ban", [["path", {
	d: "M4.929 4.929 19.07 19.071",
	key: "196cmz"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), Bot = createLucideIcon("bot", [
	["path", {
		d: "M12 8V4H8",
		key: "hb8ula"
	}],
	["rect", {
		width: "16",
		height: "12",
		x: "4",
		y: "8",
		rx: "2",
		key: "enze0r"
	}],
	["path", {
		d: "M2 14h2",
		key: "vft8re"
	}],
	["path", {
		d: "M20 14h2",
		key: "4cs60a"
	}],
	["path", {
		d: "M15 13v2",
		key: "1xurst"
	}],
	["path", {
		d: "M9 13v2",
		key: "rq6x2g"
	}]
]), Clock = createLucideIcon("clock", [["path", {
	d: "M12 6v6l4 2",
	key: "mmk7yg"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), CodeXml = createLucideIcon("code-xml", [
	["path", {
		d: "m18 16 4-4-4-4",
		key: "1inbqp"
	}],
	["path", {
		d: "m6 8-4 4 4 4",
		key: "15zrgr"
	}],
	["path", {
		d: "m14.5 4-5 16",
		key: "e7oirm"
	}]
]), Heart = createLucideIcon("heart", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}]]), History = createLucideIcon("history", [
	["path", {
		d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
		key: "1357e3"
	}],
	["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}],
	["path", {
		d: "M12 7v5l4 2",
		key: "1fdv2h"
	}]
]), House = createLucideIcon("house", [["path", {
	d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
	key: "5wwlr5"
}], ["path", {
	d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
	key: "r6nss1"
}]]), Info = createLucideIcon("info", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 16v-4",
		key: "1dtifu"
	}],
	["path", {
		d: "M12 8h.01",
		key: "e9boi3"
	}]
]), LoaderCircle = createLucideIcon("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]), Maximize2 = createLucideIcon("maximize-2", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "m21 3-7 7",
		key: "1l2asr"
	}],
	["path", {
		d: "m3 21 7-7",
		key: "tjx5ai"
	}],
	["path", {
		d: "M9 21H3v-6",
		key: "wtvkvv"
	}]
]), MessageCircle = createLucideIcon("message-circle", [["path", {
	d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
	key: "1sd12s"
}]]), MessageSquare = createLucideIcon("message-square", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}]]), Mic = createLucideIcon("mic", [
	["path", {
		d: "M12 19v3",
		key: "npa21l"
	}],
	["path", {
		d: "M19 10v2a7 7 0 0 1-14 0v-2",
		key: "1vc78b"
	}],
	["rect", {
		x: "9",
		y: "2",
		width: "6",
		height: "13",
		rx: "3",
		key: "s6n7sd"
	}]
]), Minimize2 = createLucideIcon("minimize-2", [
	["path", {
		d: "m14 10 7-7",
		key: "oa77jy"
	}],
	["path", {
		d: "M20 10h-6V4",
		key: "mjg0md"
	}],
	["path", {
		d: "m3 21 7-7",
		key: "tjx5ai"
	}],
	["path", {
		d: "M4 14h6v6",
		key: "rmj7iw"
	}]
]), Paperclip = createLucideIcon("paperclip", [["path", {
	d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
	key: "1miecu"
}]]), RefreshCw = createLucideIcon("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]), Search = createLucideIcon("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), ShieldCheck = createLucideIcon("shield-check", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), Square = createLucideIcon("square", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}]]), Terminal = createLucideIcon("terminal", [["path", {
	d: "M12 19h8",
	key: "baeox8"
}], ["path", {
	d: "m4 17 6-6-6-6",
	key: "1yngyt"
}]]), Trash2 = createLucideIcon("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]);
function createContextScope$1(i, a = []) {
	let o = [];
	function s(a, s) {
		let c = React$1.createContext(s);
		c.displayName = a + "Context";
		let l = o.length;
		o = [...o, s];
		let u = (a) => {
			let { scope: o, children: s, ...u } = a, d = o?.[i]?.[l] || c, f = React$1.useMemo(() => u, Object.values(u));
			return /* @__PURE__ */ jsx(d.Provider, {
				value: f,
				children: s
			});
		};
		u.displayName = a + "Provider";
		function d(o, u) {
			let d = u?.[i]?.[l] || c, f = React$1.useContext(d);
			if (f) return f;
			if (s !== void 0) return s;
			throw Error(`\`${o}\` must be used within \`${a}\``);
		}
		return [u, d];
	}
	let c = () => {
		let a = o.map((i) => React$1.createContext(i));
		return function(o) {
			let s = o?.[i] || a;
			return React$1.useMemo(() => ({ [`__scope${i}`]: {
				...o,
				[i]: s
			} }), [o, s]);
		};
	};
	return c.scopeName = i, [s, composeContextScopes(c, ...a)];
}
function composeContextScopes(...i) {
	let a = i[0];
	if (i.length === 1) return a;
	let o = () => {
		let o = i.map((i) => ({
			useScope: i(),
			scopeName: i.scopeName
		}));
		return function(i) {
			let s = o.reduce((a, { useScope: o, scopeName: s }) => {
				let c = o(i)[`__scope${s}`];
				return {
					...a,
					...c
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${a.scopeName}`]: s }), [s]);
		};
	};
	return o.scopeName = a.scopeName, o;
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
].reduce((i, a) => {
	let o = createSlot$1(`Primitive.${a}`), s = React$1.forwardRef((i, s) => {
		let { asChild: c, ...l } = i, u = c ? o : a;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(u, {
			...l,
			ref: s
		});
	});
	return s.displayName = `Primitive.${a}`, {
		...i,
		[a]: s
	};
}, {});
function useIsHydrated() {
	return useSyncExternalStore(subscribe, () => !0, () => !1);
}
function subscribe() {
	return () => {};
}
var AVATAR_NAME = "Avatar", [createAvatarContext, createAvatarScope] = createContextScope$1(AVATAR_NAME), [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME), Avatar$1 = React$1.forwardRef((i, a) => {
	let { __scopeAvatar: o, ...s } = i, [c, l] = React$1.useState("idle");
	return /* @__PURE__ */ jsx(AvatarProvider, {
		scope: o,
		imageLoadingStatus: c,
		onImageLoadingStatusChange: l,
		children: /* @__PURE__ */ jsx(Primitive$1.span, {
			...s,
			ref: a
		})
	});
});
Avatar$1.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage", AvatarImage$1 = React$1.forwardRef((i, a) => {
	let { __scopeAvatar: o, src: s, onLoadingStatusChange: c = () => {}, ...l } = i, u = useAvatarContext(IMAGE_NAME, o), d = useImageLoadingStatus(s, l), f = useCallbackRef((i) => {
		c(i), u.onImageLoadingStatusChange(i);
	});
	return useLayoutEffect2(() => {
		d !== "idle" && f(d);
	}, [d, f]), d === "loaded" ? /* @__PURE__ */ jsx(Primitive$1.img, {
		...l,
		ref: a,
		src: s
	}) : null;
});
AvatarImage$1.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback", AvatarFallback$1 = React$1.forwardRef((i, a) => {
	let { __scopeAvatar: o, delayMs: s, ...c } = i, l = useAvatarContext(FALLBACK_NAME, o), [u, d] = React$1.useState(s === void 0);
	return React$1.useEffect(() => {
		if (s !== void 0) {
			let i = window.setTimeout(() => d(!0), s);
			return () => window.clearTimeout(i);
		}
	}, [s]), u && l.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ jsx(Primitive$1.span, {
		...c,
		ref: a
	}) : null;
});
AvatarFallback$1.displayName = FALLBACK_NAME;
function resolveLoadingStatus(i, a) {
	return i ? a ? (i.src !== a && (i.src = a), i.complete && i.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function useImageLoadingStatus(i, { referrerPolicy: a, crossOrigin: o }) {
	let s = useIsHydrated(), c = React$1.useRef(null), l = (() => s ? (c.current ||= new window.Image(), c.current) : null)(), [u, d] = React$1.useState(() => resolveLoadingStatus(l, i));
	return useLayoutEffect2(() => {
		d(resolveLoadingStatus(l, i));
	}, [l, i]), useLayoutEffect2(() => {
		let i = (i) => () => {
			d(i);
		};
		if (!l) return;
		let s = i("loaded"), c = i("error");
		return l.addEventListener("load", s), l.addEventListener("error", c), a && (l.referrerPolicy = a), typeof o == "string" && (l.crossOrigin = o), () => {
			l.removeEventListener("load", s), l.removeEventListener("error", c);
		};
	}, [
		l,
		o,
		a
	]), u;
}
var Root$2 = Avatar$1, Image = AvatarImage$1, Fallback = AvatarFallback$1;
function Avatar({ className: i, ...a }) {
	return /* @__PURE__ */ jsx(Root$2, {
		"data-slot": "avatar",
		className: cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", i),
		...a
	});
}
function AvatarImage({ className: i, ...a }) {
	return /* @__PURE__ */ jsx(Image, {
		"data-slot": "avatar-image",
		className: cn("aspect-square size-full", i),
		...a
	});
}
function AvatarFallback({ className: i, ...a }) {
	return /* @__PURE__ */ jsx(Fallback, {
		"data-slot": "avatar-fallback",
		className: cn("bg-muted flex size-full items-center justify-center rounded-full", i),
		...a
	});
}
var Setting = lazy(() => import("./setting-Cy2LbRs5.js"));
function Header({ metadata: i, selectedAgent: a, selectedModel: o, onAgentChange: s, onModelChange: c, onClose: l, onRefresh: d, onHome: f, onHistory: p, className: h, title: _ = "Portfolio Assistant", titleUrl: y, subtitle: x, voiceConfig: C, onVoiceConfigChange: T, availableVoices: E, selectedVoice: D, onVoiceChange: O, autoSpeak: k, onAutoSpeakChange: A, isMaximized: j, onMaximize: M, avatar: N, backendStatus: P }) {
	let [F, I] = useState(!1), L = () => {
		F || (I(!0), d?.(), setTimeout(() => {
			I(!1);
		}, 1e3));
	}, R = () => /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-3 group cursor-pointer",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsxs(Avatar, {
				className: "size-9 border border-border/40 shadow-sm transition-transform group-hover:scale-105",
				children: [/* @__PURE__ */ jsx(AvatarImage, { src: N }), /* @__PURE__ */ jsx(AvatarFallback, { children: _ })]
			}), /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ jsx("span", { className: cn("absolute bottom-0 right-0 size-2.5 rounded-full ring-2 ring-background shadow-sm transition-colors duration-500", P?.status === "ok" ? "bg-emerald-500 animate-pulse" : P?.status === "error" ? "bg-rose-500" : "bg-amber-400 animate-bounce") })
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "bottom",
				align: "center",
				className: "text-[10px] py-1 px-2",
				children: P?.status === "ok" ? "Backend Online" : P?.status === "error" ? "Backend Offline" : "Checking Status..."
			})] })]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-0.5",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-sm font-semibold text-foreground/90 tracking-tight leading-none group-hover:text-primary transition-colors",
				children: _
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[11px] text-muted-foreground font-medium leading-none capitalize",
				children: x || a.replace(/-/g, " ")
			})]
		})]
	});
	return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 300,
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("flex items-center justify-between border-b border-border/40 bg-background/80 p-3.5 backdrop-blur-md supports-[backdrop-filter]:bg-background/60", h),
			children: [y ? /* @__PURE__ */ jsx("a", {
				href: y,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "focus-visible:outline-none rounded-md",
				children: /* @__PURE__ */ jsx(R, {})
			}) : /* @__PURE__ */ jsx(R, {}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1",
				children: [
					f && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "icon",
							onClick: f,
							className: "rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200",
							children: [/* @__PURE__ */ jsx(House, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
								className: "sr-only",
								children: "Home"
							})]
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						sideOffset: 8,
						children: "Home View"
					})] }),
					/* @__PURE__ */ jsx(Suspense, {
						fallback: /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-muted animate-pulse" }),
						children: /* @__PURE__ */ jsx(Setting, {
							metadata: i,
							selectedAgent: a,
							selectedModel: o,
							onAgentChange: s,
							onModelChange: c,
							voiceConfig: C,
							onVoiceConfigChange: T,
							availableVoices: E,
							selectedVoice: D,
							onVoiceChange: O,
							autoSpeak: k,
							onAutoSpeakChange: A
						})
					}),
					p && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "icon",
							onClick: p,
							className: "rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200",
							children: [/* @__PURE__ */ jsx(History, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
								className: "sr-only",
								children: "Chat history"
							})]
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						sideOffset: 8,
						children: "Chat History"
					})] }),
					d && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "icon",
							onClick: L,
							disabled: F,
							className: "rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200",
							children: [/* @__PURE__ */ jsx(RefreshCw, { className: cn("h-4 w-4", F && "animate-spin text-primary") }), /* @__PURE__ */ jsx("span", {
								className: "sr-only",
								children: "Restart Chat"
							})]
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						sideOffset: 8,
						children: "Restart Chat"
					})] }),
					M && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "icon",
							onClick: M,
							className: "rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200",
							children: [jsx(j ? Minimize2 : Maximize2, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
								className: "sr-only",
								children: j ? "Minimize" : "Maximize"
							})]
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						sideOffset: 8,
						children: j ? "Minimize View" : "Maximize View"
					})] }),
					l && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "icon",
							onClick: l,
							className: "rounded-full h-8 w-8 hover:bg-destructive/10 text-muted-foreground hover:text-destructive flex items-center justify-center transition-all duration-200",
							children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
								className: "sr-only",
								children: "Close"
							})]
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						sideOffset: 8,
						children: "Close Assistant"
					})] })
				]
			})]
		})
	});
}
var AGENT_ICONS = [
	Bot,
	Sparkles,
	MessageSquare,
	Zap
];
function getAgentIcon(i) {
	return AGENT_ICONS[i % AGENT_ICONS.length];
}
function SkeletonGrid({ className: i }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-1 flex-col overflow-auto p-5 sm:p-6", i),
		children: /* @__PURE__ */ jsx("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: Array.from({ length: 4 }).map((i, a) => /* @__PURE__ */ jsxs("div", {
				className: "flex h-[100px] animate-pulse flex-col gap-3 rounded-2xl border border-border/50 bg-muted/30 p-4",
				"aria-hidden": !0,
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", { className: "size-10 shrink-0 rounded-xl bg-muted" }), /* @__PURE__ */ jsx("div", { className: "h-4 w-28 rounded bg-muted" })]
					}),
					/* @__PURE__ */ jsx("div", { className: "h-3 w-full rounded bg-muted/70" }),
					/* @__PURE__ */ jsx("div", { className: "h-3 w-3/4 rounded bg-muted/50" })
				]
			}, a))
		})
	});
}
var AgentCard = memo(function({ agent: i, index: a, onSelect: o, selected: s }) {
	let c = getAgentIcon(a), l = (a) => {
		(a.key === "Enter" || a.key === " ") && (a.preventDefault(), o(i.key));
	};
	return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
		type: "button",
		"aria-pressed": s,
		onClick: () => o(i.key),
		onKeyDown: l,
		className: cn("group relative flex min-h-[88px] w-full flex-col items-start gap-2 rounded-2xl border bg-card p-4 text-left shadow-sm transition-all duration-200", "hover:border-primary/30 hover:bg-primary/[0.06] hover:shadow-md", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background", s ? "border-primary/80 bg-primary/[0.04] shadow" : "border-border/60"),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full items-start gap-3",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: cn("flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors", "bg-primary/10 text-primary group-hover:bg-primary/15 group-hover:text-primary"),
					children: /* @__PURE__ */ jsx(c, { className: "size-5" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ jsx("span", {
						className: cn("block font-semibold text-foreground transition-colors group-hover:text-primary capitalize"),
						children: i.key.replace(/-/g, " ")
					}), i.description ? /* @__PURE__ */ jsx("span", {
						className: "mt-0.5 line-clamp-2 block text-[13px] leading-snug text-muted-foreground",
						children: i.description
					}) : /* @__PURE__ */ jsx("span", {
						className: "mt-0.5 block text-[13px] leading-snug text-muted-foreground",
						children: "No description"
					})]
				}),
				/* @__PURE__ */ jsx(ChevronRight, {
					className: cn("size-4 shrink-0 text-muted-foreground/50 transition-all group-hover:translate-x-0.5 group-hover:text-primary", "mt-1.5"),
					"aria-hidden": !0
				})
			]
		})
	}) });
});
AgentCard.displayName = "AgentCard";
function AgentSelector({ agents: i, loading: a, onSelect: o, selectedKey: s, className: c }) {
	let l = useId(), d = useCallback((i) => {
		o(i);
	}, [o]);
	return a ? /* @__PURE__ */ jsx(SkeletonGrid, { className: c }) : i?.length ? /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-col gap-2 overflow-auto p-5 sm:p-6 h-full", c),
		children: /* @__PURE__ */ jsx("ul", {
			id: l,
			role: "list",
			className: "grid gap-2",
			children: i.map((i, a) => /* @__PURE__ */ jsx(AgentCard, {
				agent: i,
				index: a,
				onSelect: d,
				selected: s === i.key
			}, i.key))
		})
	}) : /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center", c),
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex size-14 items-center justify-center rounded-2xl bg-muted/50",
			children: /* @__PURE__ */ jsx(MessageSquare, { className: "size-7 text-muted-foreground" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ jsx("p", {
				className: "font-medium text-foreground",
				children: "No agents available"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground",
				children: "Check back later or contact support."
			})]
		})]
	});
}
var CACHE_TTL = 300 * 1e3, metadataCache = /* @__PURE__ */ new Map();
function getCachedMetadata(i) {
	let a = metadataCache.get(i);
	return a?.data && Date.now() - a.timestamp < CACHE_TTL ? a.data : null;
}
function setCachedMetadata(i, a) {
	metadataCache.set(i, {
		data: a,
		timestamp: Date.now()
	});
}
function clearChatServiceMetadataCache() {
	metadataCache.clear();
}
function normalizeStreamEvent(i) {
	return i.type === "message" ? {
		type: "message",
		content: i.content
	} : i.type === "token" ? {
		type: "token",
		content: i.content
	} : i.type === "error" ? {
		type: "error",
		content: i.content
	} : i.type === "update" || i.node ? {
		type: "update",
		node: i.node,
		updates: i.updates ?? {},
		content: i.updates ?? i
	} : null;
}
var ChatService = class {
	constructor(i) {
		this.abortController = null, this.config = i;
	}
	getHeaders() {
		let i = { "Content-Type": "application/json" };
		return this.config.apiKey && (i.Authorization = `Bearer ${this.config.apiKey}`), i;
	}
	getMetadataFromCache() {
		return getCachedMetadata(this.config.baseUrl);
	}
	async getMetadata(i = !1) {
		if (!i) {
			let i = getCachedMetadata(this.config.baseUrl);
			if (i) return i;
		}
		let a = metadataCache.get(this.config.baseUrl);
		if (a?.promise) try {
			return await a.promise;
		} catch {}
		let o = (async () => {
			let i = await fetch(`${this.config.baseUrl}/info`, { headers: this.getHeaders() });
			if (!i.ok) throw Error(`Failed to fetch metadata: ${i.statusText}`);
			return await i.json();
		})(), s = metadataCache.get(this.config.baseUrl) ?? {
			data: null,
			timestamp: 0
		};
		metadataCache.set(this.config.baseUrl, {
			...s,
			promise: o,
			timestamp: 0,
			data: s.data
		});
		let c = await o;
		return setCachedMetadata(this.config.baseUrl, c), c;
	}
	async healthCheck() {
		try {
			let i = await fetch(`${this.config.baseUrl}/health`, { headers: this.getHeaders() });
			if (!i.ok) return {
				status: "error",
				details: { code: i.status }
			};
			let a = await i.json();
			return {
				status: a.status === "ok" ? "ok" : "error",
				details: a
			};
		} catch (i) {
			return {
				status: "error",
				details: { error: i instanceof Error ? i.message : "Network error" }
			};
		}
	}
	async invoke(i, a = {}) {
		let o = a.agent ?? this.config.defaultAgent, s = `${this.config.baseUrl}/${o}/invoke`, c = {
			message: i,
			model: a.model ?? this.config.defaultModel,
			thread_id: a.threadId,
			user_id: a.userId
		}, l = await fetch(s, {
			method: "POST",
			headers: this.getHeaders(),
			body: JSON.stringify(c)
		});
		if (!l.ok) throw Error(`Invoke failed: ${l.statusText}`);
		return await l.json();
	}
	async *stream(i, a) {
		this.abortController && this.abortController.abort(), this.abortController = new AbortController();
		let o = a.agent ?? this.config.defaultAgent, s = `${this.config.baseUrl}/${o}/stream`, c = {
			message: i,
			...(a.model ?? this.config.defaultModel) && { model: a.model ?? this.config.defaultModel },
			...a.threadId && { thread_id: a.threadId },
			...a.userId && { user_id: a.userId },
			stream_tokens: a.streamTokens ?? !0
		};
		try {
			let i = await fetch(s, {
				method: "POST",
				headers: this.getHeaders(),
				body: JSON.stringify(c),
				signal: this.abortController.signal
			});
			if (!i.ok) {
				let a = `Stream failed: ${i.statusText}`;
				try {
					let o = await i.json();
					if (o.detail !== void 0) {
						let i = o.detail;
						a = Array.isArray(i) ? `Stream failed: ${i.map((i) => typeof i == "object" && i && "msg" in i ? `${i.loc?.join(".") ?? "field"}: ${i.msg}` : JSON.stringify(i)).join(", ")}` : `Stream failed: ${typeof i == "string" ? i : JSON.stringify(i)}`;
					}
				} catch {}
				throw Error(a);
			}
			let a = i.body?.getReader();
			if (!a) throw Error("No response body");
			let o = new TextDecoder(), l = "";
			try {
				for (;;) {
					let { done: i, value: s } = await a.read();
					if (i) break;
					l += o.decode(s, { stream: !0 });
					let c = l.split("\n\n");
					l = c.pop() ?? "";
					for (let i of c) {
						if (!i.startsWith("data: ")) continue;
						let a = i.slice(6);
						if (a === "[DONE]") {
							yield { type: "done" };
							return;
						}
						try {
							let i = normalizeStreamEvent(JSON.parse(a));
							i && (yield i);
						} catch (i) {
							console.error("Error parsing SSE data:", i);
						}
					}
				}
			} finally {
				this.abortController = null;
			}
		} catch (i) {
			if (this.abortController = null, i instanceof Error && i.name === "AbortError") return;
			yield {
				type: "error",
				content: i instanceof Error ? i.message : "Stream error"
			};
		}
	}
	abortStream() {
		this.abortController &&= (this.abortController.abort(), null);
	}
	async sendFeedback(i, a, o, s) {
		let c = await fetch(`${this.config.baseUrl}/feedback`, {
			method: "POST",
			headers: this.getHeaders(),
			body: JSON.stringify({
				run_id: i,
				key: a,
				score: o,
				kwargs: s
			})
		});
		if (!c.ok) throw Error(`Failed to send feedback: ${c.statusText}`);
		return c.json();
	}
	async deleteThread(i, a) {
		let o = a?.trim();
		if (!o) throw Error("User ID is required to delete a thread");
		let s = new URLSearchParams({
			user_id: o,
			thread_id: i
		}), c = await fetch(`${this.config.baseUrl}/history?${s.toString()}`, {
			method: "DELETE",
			headers: this.getHeaders()
		});
		if (!c.ok) throw Error(`Failed to delete thread: ${c.statusText}`);
	}
	async getHistory(i, a, o) {
		let s = a?.trim();
		if (!s) return {
			messages: [],
			next_cursor: null,
			prev_cursor: null
		};
		let c = o?.limit ?? 50, l = o?.view ?? "full", u = o?.cursor, d = (i) => {
			let a = i;
			return {
				messages: Array.isArray(a.messages) ? a.messages : [],
				next_cursor: a.next_cursor ?? null,
				prev_cursor: a.prev_cursor ?? null
			};
		}, f = this.getHeaders();
		try {
			let a = new URLSearchParams({
				user_id: s,
				thread_id: i,
				limit: String(c),
				view: l
			});
			u != null && u !== "" && a.set("cursor", u);
			let o = await fetch(`${this.config.baseUrl}/history?${a.toString()}`, {
				method: "GET",
				headers: f
			});
			if (o.ok) return d(await o.json());
			if (o.status === 404 || o.status === 405) {
				let a = {
					user_id: s,
					thread_id: i,
					limit: c,
					view: l
				};
				u != null && u !== "" && (a.cursor = u);
				let o = await fetch(`${this.config.baseUrl}/history`, {
					method: "POST",
					headers: f,
					body: JSON.stringify(a)
				});
				if (o.ok) return d(await o.json());
			}
			throw Error(`Failed to get history: ${o.statusText}`);
		} catch (i) {
			throw i instanceof Error ? i : Error("Failed to get history");
		}
	}
	async getThreads(i, a) {
		let o = i?.trim();
		if (!o) return {
			threads: [],
			total: 0
		};
		try {
			let i = { user_id: o };
			a?.limit != null && (i.limit = a.limit), a?.offset != null && (i.offset = a.offset), a?.search != null && a.search !== "" && (i.search = a.search);
			let s = await fetch(`${this.config.baseUrl}/history/threads`, {
				method: "POST",
				headers: this.getHeaders(),
				body: JSON.stringify(i)
			});
			if (!s.ok) throw Error(`Failed to get threads: ${s.statusText}`);
			let c = await s.json();
			return {
				threads: c.threads ?? [],
				total: c.total ?? c.threads?.length ?? 0
			};
		} catch {
			return {
				threads: [],
				total: 0
			};
		}
	}
}, DATE_KEYS = ["createdAt"];
function reviver(i, a) {
	if (typeof a == "string" && DATE_KEYS.includes(i)) {
		let i = new Date(a);
		return isNaN(i.getTime()) ? a : i;
	}
	return a;
}
function loadMessages(i) {
	if (!i) return null;
	try {
		let a = localStorage.getItem(i);
		if (!a) return null;
		let o = JSON.parse(a, reviver);
		return !Array.isArray(o) || o.length === 0 ? null : o;
	} catch {
		return null;
	}
}
function saveMessages(i, a) {
	if (!(!i || a.length === 0)) try {
		localStorage.setItem(i, JSON.stringify(a));
	} catch (i) {
		console.error("Failed to save chat history:", i);
	}
}
function clearMessages(i) {
	if (i) try {
		localStorage.removeItem(i);
	} catch {}
}
var THREAD_KEY_PREFIX = "chatui-thread:", MESSAGES_KEY_PREFIX = "chatui-messages:";
function getThreadMessagesKey(i, a) {
	return !i || !a ? "" : `${MESSAGES_KEY_PREFIX}${i}:${a}`;
}
function loadCurrentThreadId(i) {
	if (!i) return null;
	try {
		return localStorage.getItem(THREAD_KEY_PREFIX + i);
	} catch {
		return null;
	}
}
function saveCurrentThreadId(i, a) {
	if (i) try {
		a == null ? localStorage.removeItem(THREAD_KEY_PREFIX + i) : localStorage.setItem(THREAD_KEY_PREFIX + i, a);
	} catch {}
}
function updateMessageById(i, a, o) {
	let s = i.findIndex((i) => i.id === a);
	if (s === -1) return i;
	let c = [...i];
	return c[s] = o(c[s]), c;
}
function applyStreamMessage(i, a, o) {
	let s = o.content;
	if (!s || o.type !== "message") return { messages: i };
	let c = s;
	if (c.type === "tool") {
		let o = c.name ?? c.response_metadata?.name ?? c.custom_data?.name ?? "Tool", s = c.content, l = typeof s == "string" ? s.replace(/\\n/g, "\n") : s;
		return { messages: updateMessageById(i, a, (i) => {
			let a = i.toolInvocations ?? [], s = c.tool_call_id ? a.findIndex((i) => i.state === "call" && i.toolCallId === c.tool_call_id) : -1, u = s >= 0 ? a[s] : void 0, d = {
				state: "result",
				toolName: o && o !== "Tool" ? o : u?.toolName ?? o,
				toolCallId: c.tool_call_id,
				result: l
			}, f = a.filter((i) => !(i.state === "call" && i.toolCallId === c.tool_call_id));
			return {
				...i,
				toolInvocations: [...f, d]
			};
		}) };
	}
	if (c.tool_calls && c.tool_calls.length > 0) {
		let o = c.tool_calls.map((i) => ({
			state: "call",
			toolName: i.name,
			toolCallId: i.id,
			args: i.args
		}));
		return { messages: updateMessageById(i, a, (i) => {
			let a = i.toolInvocations ?? [], s = a.filter((i) => i.state === "call"), c = a.filter((i) => i.state === "result"), l = new Set(s.map((i) => i.toolCallId).filter(Boolean)), u = [...s];
			for (let i of o) i.toolCallId && !l.has(i.toolCallId) && (u.push(i), l.add(i.toolCallId));
			let d = [...u, ...c];
			return {
				...i,
				toolInvocations: d
			};
		}) };
	}
	if (c.type === "custom") {
		let a = c.custom_data?.follow_up;
		return Array.isArray(a) ? {
			messages: i,
			followUp: a
		} : { messages: i };
	}
	let l = c.content ?? "";
	return { messages: updateMessageById(i, a, (i) => ({
		...i,
		content: l,
		runId: c.run_id ?? i.runId,
		custom_data: {
			...i.custom_data ?? {},
			...c.custom_data ?? {},
			run_id: c.run_id ?? i.custom_data?.run_id
		}
	})) };
}
function chatRuntimeReducer(i, a) {
	switch (a.type) {
		case "SET_INPUT": return {
			...i,
			input: a.payload
		};
		case "SET_MESSAGES": return {
			...i,
			messages: a.payload
		};
		case "SET_THREAD_ID": return {
			...i,
			currentThreadId: a.payload
		};
		case "SET_METADATA": return {
			...i,
			metadata: a.payload
		};
		case "SET_METADATA_LOADING": return {
			...i,
			metadataLoading: a.payload
		};
		case "SET_ERROR": return {
			...i,
			error: a.payload
		};
		case "START_SEND": {
			let { userMessage: o, assistantMessage: s } = a.payload;
			return {
				...i,
				messages: [
					...i.messages,
					o,
					s
				],
				isGenerating: !0,
				followUpPrompts: [],
				currentAssistantMessageId: s.id,
				error: null
			};
		}
		case "STREAM_TOKEN": {
			let { messageId: o, content: s } = a.payload;
			return {
				...i,
				messages: updateMessageById(i.messages, o, (i) => ({
					...i,
					content: s
				}))
			};
		}
		case "STREAM_MESSAGE": {
			let { messageId: o, event: s } = a.payload, { messages: c, followUp: l } = applyStreamMessage(i.messages, o, s);
			return {
				...i,
				messages: c,
				...l && { followUpPrompts: l }
			};
		}
		case "STREAM_UPDATE": {
			let o = a.payload.followUp;
			return Array.isArray(o) ? {
				...i,
				followUpPrompts: o
			} : i;
		}
		case "STREAM_ERROR": {
			let { messageId: o, error: s } = a.payload;
			return {
				...i,
				messages: updateMessageById(i.messages, o, (i) => ({
					...i,
					content: `Error: ${s}`
				}))
			};
		}
		case "STREAM_END": return {
			...i,
			isGenerating: !1,
			currentAssistantMessageId: null
		};
		case "CLEAR_CHAT": {
			let o = a.payload?.keepStarter;
			return {
				...i,
				messages: o ? [o] : [],
				followUpPrompts: [],
				currentAssistantMessageId: null
			};
		}
		case "SET_FOLLOW_UP": return {
			...i,
			followUpPrompts: a.payload
		};
		case "SET_BACKEND_STATUS": return {
			...i,
			backendStatus: a.payload
		};
		case "SET_MESSAGE_RATING": {
			let { messageId: o, rating: s, comment: c } = a.payload;
			return {
				...i,
				messages: updateMessageById(i.messages, o, (i) => ({
					...i,
					rating: s,
					comment: c
				}))
			};
		}
		default: return i;
	}
}
function getInitialChatState(i, a) {
	let o = i.starterMessage ? {
		id: `greeting-${Date.now()}`,
		role: "assistant",
		content: i.starterMessage,
		createdAt: /* @__PURE__ */ new Date()
	} : void 0;
	return {
		messages: o ? [o] : [],
		input: "",
		isGenerating: !1,
		followUpPrompts: [],
		currentThreadId: i.threadId,
		currentAssistantMessageId: null,
		metadata: a,
		metadataLoading: !a,
		backendStatus: { status: "loading" },
		error: null
	};
}
function generateThreadId() {
	return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `thread-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}
function getStorageBaseKey(i) {
	return `${(i.url ?? "").replace(/\/$/, "")}:${i.userId?.trim() ?? "anon"}:${i.agent?.trim() ?? "default"}`;
}
function persistedToMessages(i) {
	return !i || !Array.isArray(i) || i.length === 0 ? null : i.map((i) => ({
		id: i.id,
		role: i.role === "user" || i.role === "assistant" ? i.role : "user",
		content: i.content,
		createdAt: i.createdAt ? new Date(i.createdAt) : void 0,
		custom_data: i.custom_data,
		parts: i.parts,
		runId: i.runId
	}));
}
function apiMessagesToUiMessages(i) {
	let a = [], o = 0, s = Date.now();
	for (; o < i.length;) {
		let c = i[o];
		if (c.type === "human") {
			a.push({
				id: c.run_id ?? `user-${a.length}-${s}`,
				role: "user",
				content: c.content ?? "",
				createdAt: /* @__PURE__ */ new Date(),
				runId: c.run_id,
				custom_data: c.custom_data
			}), o += 1;
			continue;
		}
		if (c.type === "ai" || c.type === "tool") {
			let c = o, l = "", u = [], d, f;
			for (; o < i.length;) {
				let a = i[o];
				if (a.type === "human") break;
				if (a.type !== "ai" && a.type !== "tool") {
					o += 1;
					continue;
				}
				if (a.type === "ai") {
					a.run_id && d === void 0 && (d = a.run_id), f = a.custom_data;
					let i = a.content ?? "";
					if (i && (l = i), a.tool_calls?.length) for (let i of a.tool_calls) u.push({
						state: "call",
						toolName: i.name,
						toolCallId: i.id,
						args: i.args
					});
				} else {
					let i = a.name ?? a.response_metadata?.name ?? a.custom_data?.name ?? "Tool", o = a.content, s = typeof o == "string" ? o.replace(/\\n/g, "\n") : o, c = a.tool_call_id ?? void 0, l = c ? u.findIndex((i) => i.state === "call" && i.toolCallId === c) : -1, d = l >= 0 ? u[l] : void 0, f = {
						state: "result",
						toolName: i && i !== "Tool" ? i : d?.toolName ?? i,
						toolCallId: c,
						result: s
					};
					l >= 0 ? u[l] = f : u.push(f);
				}
				o += 1;
			}
			a.push({
				id: d ?? `assistant-${c}-${s}`,
				role: "assistant",
				content: l,
				createdAt: /* @__PURE__ */ new Date(),
				runId: d,
				custom_data: f,
				toolInvocations: u.length > 0 ? u : void 0
			});
			continue;
		}
		if (c.type === "custom") {
			o += 1;
			continue;
		}
		o += 1;
	}
	return a;
}
function useChatRuntime(i) {
	let [a, o] = useReducer(chatRuntimeReducer, getInitialChatState(i, null)), s = useRef(i);
	s.current = i;
	let c = useRef(null), l = useCallback(() => {
		if (!c.current) {
			let i = a.metadata;
			c.current = new ChatService({
				baseUrl: s.current.url,
				defaultAgent: s.current.agent ?? i?.default_agent ?? "",
				defaultModel: s.current.model ?? i?.default_model ?? "",
				apiKey: s.current.apiKey
			});
		}
		return c.current;
	}, [a.metadata]), u = useRef(""), d = useRef([]);
	useEffect(() => {
		let a = !1, s = new ChatService({
			baseUrl: i.url,
			defaultAgent: i.agent ?? "",
			defaultModel: i.model ?? "",
			apiKey: i.apiKey
		}), c = s.getMetadataFromCache();
		if (c) {
			o({
				type: "SET_METADATA",
				payload: c
			}), o({
				type: "SET_METADATA_LOADING",
				payload: !1
			});
			return;
		}
		return o({
			type: "SET_METADATA_LOADING",
			payload: !0
		}), s.getMetadata(!1).then((i) => {
			a || o({
				type: "SET_METADATA",
				payload: i
			});
		}).catch((i) => {
			a || o({
				type: "SET_ERROR",
				payload: i instanceof Error ? i.message : "Failed to fetch metadata"
			});
		}).finally(() => {
			a || o({
				type: "SET_METADATA_LOADING",
				payload: !1
			});
		}), () => {
			a = !0;
		};
	}, [i.url]), useEffect(() => {
		let i = !1, a, s = async () => {
			let c = await l().healthCheck();
			i || o({
				type: "SET_BACKEND_STATUS",
				payload: c
			}), a = setTimeout(s, 12e4);
		};
		return s(), () => {
			i = !0, clearTimeout(a);
		};
	}, [l]);
	let f = useMemo(() => getStorageBaseKey(i), [
		i.url,
		i.userId,
		i.agent
	]), p = useRef(null);
	useEffect(() => {
		let a = `${f}:${i.threadId ?? "none"}`;
		if (p.current === a) return;
		p.current = a;
		let c = f, u = i.threadId;
		if (u != null && u !== "") {
			o({
				type: "SET_THREAD_ID",
				payload: u
			}), (async (i) => {
				let a = s.current.userId?.trim();
				if (a) try {
					let { messages: s } = await l().getHistory(i, a);
					s.length > 0 && o({
						type: "SET_MESSAGES",
						payload: apiMessagesToUiMessages(s)
					});
				} catch {
					let a = persistedToMessages(loadMessages(getThreadMessagesKey(c, i)));
					a && a.length > 0 && o({
						type: "SET_MESSAGES",
						payload: a
					});
				}
				else {
					let a = persistedToMessages(loadMessages(getThreadMessagesKey(c, i)));
					a && a.length > 0 && o({
						type: "SET_MESSAGES",
						payload: a
					});
				}
			})(u);
			return;
		}
		let d = loadCurrentThreadId(c);
		if (d) o({
			type: "SET_THREAD_ID",
			payload: d
		}), (async (i) => {
			let a = s.current.userId?.trim();
			if (a) try {
				let { messages: s } = await l().getHistory(i, a);
				s.length > 0 && o({
					type: "SET_MESSAGES",
					payload: apiMessagesToUiMessages(s)
				});
			} catch {
				let a = persistedToMessages(loadMessages(getThreadMessagesKey(c, i)));
				a && a.length > 0 && o({
					type: "SET_MESSAGES",
					payload: a
				});
			}
			else {
				let a = persistedToMessages(loadMessages(getThreadMessagesKey(c, i)));
				a && a.length > 0 && o({
					type: "SET_MESSAGES",
					payload: a
				});
			}
		})(d);
		else {
			let i = generateThreadId();
			saveCurrentThreadId(c, i), o({
				type: "SET_THREAD_ID",
				payload: i
			});
		}
	}, [
		f,
		i.threadId,
		l
	]), useEffect(() => {
		if (!f) return;
		let i = a.currentThreadId;
		saveCurrentThreadId(f, i ?? null);
	}, [f, a.currentThreadId]), useEffect(() => {
		if (!(!f || !a.currentThreadId)) {
			if (a.messages.length === 0) {
				clearMessages(getThreadMessagesKey(f, a.currentThreadId));
				return;
			}
			saveMessages(getThreadMessagesKey(f, a.currentThreadId), a.messages);
		}
	}, [
		f,
		a.currentThreadId,
		a.messages
	]);
	let h = useRef(void 0);
	useEffect(() => {
		let a = i.agent ?? "", s = h.current, c = s !== void 0 && s !== a;
		if (h.current = a, c) {
			let a = generateThreadId();
			saveCurrentThreadId(f, a), o({
				type: "SET_THREAD_ID",
				payload: a
			}), i.starterMessage ? o({
				type: "CLEAR_CHAT",
				payload: { keepStarter: {
					id: `greeting-${Date.now()}`,
					role: "assistant",
					content: i.starterMessage,
					createdAt: /* @__PURE__ */ new Date()
				} }
			}) : o({ type: "CLEAR_CHAT" });
		}
	}, [
		i.agent,
		i.starterMessage,
		f
	]);
	let g = useCallback(async (i) => {
		if (a.isGenerating) return;
		let c = a.metadata, f = s.current.agent ?? c?.default_agent, p = s.current.model ?? c?.default_model;
		if (!f) return;
		let h = a.currentThreadId;
		h || (h = generateThreadId(), o({
			type: "SET_THREAD_ID",
			payload: h
		}), saveCurrentThreadId(getStorageBaseKey(s.current), h));
		let g = {
			id: `user-${Date.now()}`,
			role: "user",
			content: i,
			createdAt: /* @__PURE__ */ new Date()
		}, _ = `ai-${Date.now()}`;
		o({
			type: "START_SEND",
			payload: {
				userMessage: g,
				assistantMessage: {
					id: _,
					role: "assistant",
					content: "",
					createdAt: /* @__PURE__ */ new Date()
				}
			}
		}), u.current = "", d.current = [];
		let v = l();
		try {
			for await (let a of v.stream(i, {
				agent: f,
				model: p,
				threadId: h,
				userId: s.current.userId,
				streamTokens: s.current.stream !== !1
			})) if (a.type === "token" && typeof a.content == "string") u.current += a.content, o({
				type: "STREAM_TOKEN",
				payload: {
					messageId: _,
					content: u.current
				}
			});
			else if (a.type === "message" && a.content) {
				o({
					type: "STREAM_MESSAGE",
					payload: {
						messageId: _,
						event: a
					}
				});
				let i = a.content;
				if (i.type === "custom" && Array.isArray(i.custom_data?.follow_up)) d.current = i.custom_data.follow_up;
				else if (typeof i.content == "string" && (u.current = i.content, d.current.length > 0)) {
					let i = u.current + "\n\n**Follow-up suggestions:**\n" + d.current.map((i) => `- ${i}`).join("\n");
					d.current = [], o({
						type: "STREAM_TOKEN",
						payload: {
							messageId: _,
							content: i
						}
					});
				}
			} else if (a.type === "update" && a.updates?.follow_up) {
				let i = a.updates.follow_up;
				Array.isArray(i) && (o({
					type: "SET_FOLLOW_UP",
					payload: i
				}), d.current = i);
			} else a.type === "error" && o({
				type: "STREAM_ERROR",
				payload: {
					messageId: _,
					error: typeof a.content == "string" ? a.content : "Unknown error"
				}
			});
		} catch (i) {
			o({
				type: "STREAM_ERROR",
				payload: {
					messageId: _,
					error: i instanceof Error ? i.message : "Unknown error"
				}
			});
		} finally {
			let i = u.current;
			o({ type: "STREAM_END" }), s.current.onStreamEnd?.(i);
		}
	}, [
		a.isGenerating,
		a.metadata,
		a.currentThreadId,
		l
	]), _ = useCallback(async (i) => {
		if (a.isGenerating) return;
		let c = a.metadata, u = s.current.agent ?? c?.default_agent, d = s.current.model ?? c?.default_model;
		if (!u) return;
		let f = a.currentThreadId;
		f || (f = generateThreadId(), o({
			type: "SET_THREAD_ID",
			payload: f
		}), saveCurrentThreadId(getStorageBaseKey(s.current), f));
		let p = {
			id: `user-${Date.now()}`,
			role: "user",
			content: i,
			createdAt: /* @__PURE__ */ new Date()
		}, h = `ai-${Date.now()}`;
		o({
			type: "START_SEND",
			payload: {
				userMessage: p,
				assistantMessage: {
					id: h,
					role: "assistant",
					content: "",
					createdAt: /* @__PURE__ */ new Date()
				}
			}
		});
		let g = l();
		try {
			o({
				type: "STREAM_TOKEN",
				payload: {
					messageId: h,
					content: (await g.invoke(i, {
						agent: u,
						model: d,
						threadId: f,
						userId: s.current.userId
					})).content
				}
			});
		} catch (i) {
			o({
				type: "STREAM_ERROR",
				payload: {
					messageId: h,
					error: i instanceof Error ? i.message : "Unknown error"
				}
			});
		} finally {
			o({ type: "STREAM_END" });
		}
	}, [
		a.isGenerating,
		a.metadata,
		a.currentThreadId,
		l
	]), v = useCallback(() => {
		l().abortStream(), o({ type: "STREAM_END" });
	}, [l]), y = useCallback((i) => {
		o({
			type: "SET_INPUT",
			payload: i
		});
	}, []), b = useCallback((i) => {
		o(typeof i == "function" ? {
			type: "SET_MESSAGES",
			payload: i(a.messages)
		} : {
			type: "SET_MESSAGES",
			payload: i
		});
	}, [a.messages]), x = useCallback((i) => {
		let a = getStorageBaseKey(s.current);
		if (i?.createNewThread) {
			let i = generateThreadId();
			saveCurrentThreadId(a, i), o({
				type: "SET_THREAD_ID",
				payload: i
			});
		}
		i?.keepStarter && s.current.starterMessage ? o({
			type: "CLEAR_CHAT",
			payload: { keepStarter: {
				id: `greeting-${Date.now()}`,
				role: "assistant",
				content: s.current.starterMessage,
				createdAt: /* @__PURE__ */ new Date()
			} }
		}) : o({ type: "CLEAR_CHAT" });
	}, []), S = useCallback((i) => {
		c.current = null, o({
			type: "SET_METADATA",
			payload: a.metadata
		});
	}, [a.metadata]), C = useCallback((i) => {}, []), w = useCallback((i) => {
		o({
			type: "SET_THREAD_ID",
			payload: i
		});
	}, []), T = useCallback(async (i, a) => {
		let c = (a ?? s.current.userId)?.trim();
		if (!c) return;
		let u = l();
		try {
			let { messages: a } = await u.getHistory(i, c);
			o({
				type: "SET_MESSAGES",
				payload: apiMessagesToUiMessages(a)
			}), o({
				type: "SET_THREAD_ID",
				payload: i
			}), o({
				type: "SET_ERROR",
				payload: null
			});
		} catch (i) {
			console.error("Failed to load thread history:", i), o({
				type: "SET_ERROR",
				payload: i instanceof Error ? i.message : "Failed to load conversation"
			});
		}
	}, [l]), E = useCallback(async (i, s, c) => {
		let u = a.messages.find((a) => a.id === i);
		if (!u) return;
		o({
			type: "SET_MESSAGE_RATING",
			payload: {
				messageId: i,
				rating: s,
				comment: c
			}
		});
		let d = u.runId ?? u.custom_data?.run_id ?? i;
		if (!d || d.startsWith("ai-") || d.startsWith("user-") || d.startsWith("assistant-")) {
			console.warn("Cannot send feedback: no valid runId found for message", i, d);
			return;
		}
		let f = l();
		try {
			await f.sendFeedback(d, "human-feedback-stars", s, c ? { comment: c } : void 0);
		} catch (i) {
			console.error("Failed to send feedback:", i);
		}
	}, [a.messages, l]), D = useCallback(async () => {
		o({
			type: "SET_METADATA",
			payload: await l().getMetadata(!0)
		});
	}, [l]), O = useCallback(async (i) => {
		let a = s.current.userId?.trim();
		return l().getThreads(a, i);
	}, [l]), k = useCallback(async (i, a) => l().getHistory(i, s.current.userId, a), [l]), A = useCallback(async (i, a) => {
		let o = (a ?? s.current.userId)?.trim();
		if (!o) throw Error("User ID is required to delete a thread");
		await l().deleteThread(i, o);
	}, [l]), j = useMemo(() => ({
		setInput: y,
		sendMessage: g,
		invoke: _,
		stopGeneration: v,
		setMessages: b,
		clearChat: x,
		setAgent: S,
		setModel: C,
		setThreadId: w,
		loadThread: T,
		rateResponse: E,
		refetchMetadata: D,
		getThreads: O,
		getHistory: k,
		deleteThread: A
	}), [
		y,
		g,
		_,
		v,
		b,
		x,
		S,
		C,
		w,
		T,
		E,
		D,
		O,
		k,
		A
	]);
	return {
		...a,
		...j
	};
}
var ChatContext = createContext(null);
function ChatProvider({ config: i, children: a, initialSuggestions: o, voiceConfig: s, isListening: c, startListening: l, stopListening: u, isSpeechSupported: d, onMetadata: f }) {
	let p = useChatRuntime(i), h = p.messages.some((i) => i.role === "user");
	React.useEffect(() => {
		p.metadata && f?.(p.metadata);
	}, [p.metadata, f]);
	let g = useMemo(() => p.followUpPrompts.length > 0 ? p.followUpPrompts : h ? [] : o ?? i.starterSuggestions ?? [], [
		p.followUpPrompts,
		h,
		o,
		i.starterSuggestions
	]), _ = useMemo(() => ({
		...p,
		suggestions: g,
		voiceConfig: s,
		isListening: c,
		startListening: l,
		stopListening: u,
		isSpeechSupported: d
	}), [
		p,
		g,
		s,
		c,
		l,
		u,
		d
	]);
	return /* @__PURE__ */ jsx(ChatContext.Provider, {
		value: _,
		children: a
	});
}
function useChatContext() {
	let i = useContext(ChatContext);
	if (!i) throw Error("useChatContext must be used within ChatProvider");
	return i;
}
function ChatRoot(i) {
	return /* @__PURE__ */ jsx(ChatProvider, { ...i });
}
ChatRoot.displayName = "Chat.Root";
function useMessageDisplay({ messages: i, isGenerating: a }) {
	let o = i.at(-1), s = i.length === 0, c = o?.role === "user";
	return {
		displayMessages: useMemo(() => a && (s || o?.role === "user") ? [...i, {
			id: "typing",
			role: "assistant",
			content: "",
			createdAt: /* @__PURE__ */ new Date()
		}] : i, [
			i,
			a,
			s,
			o
		]),
		isTyping: c,
		isEmpty: s
	};
}
var ACTIVATION_THRESHOLD = 50, MIN_SCROLL_UP_THRESHOLD = 10, MIN_SCROLLABLE_CONTENT = 10;
function useAutoScroll(i) {
	let a = useRef(null), o = useRef(null), [s, c] = useState(!0), [l, u] = useState(!1), d = useRef(s);
	d.current = s;
	let f = useCallback(() => {
		if (a.current) {
			let { scrollHeight: i, clientHeight: o } = a.current;
			u(i > o + MIN_SCROLLABLE_CONTENT);
		}
	}, []), p = useCallback(() => {
		a.current && (a.current.scrollTop = a.current.scrollHeight);
	}, []);
	return useEffect(() => {
		a.current && (o.current = a.current.scrollTop);
	}, []), useLayoutEffect(() => {
		if (f(), !d.current) return;
		let i = requestAnimationFrame(() => {
			a.current && d.current && (a.current.scrollTop = a.current.scrollHeight);
		});
		return () => cancelAnimationFrame(i);
	}, i), useEffect(() => {
		f();
		let i = () => f();
		return window.addEventListener("resize", i), () => window.removeEventListener("resize", i);
	}, [f]), {
		containerRef: a,
		scrollToBottom: p,
		handleScroll: () => {
			if (a.current) {
				let { scrollTop: i, scrollHeight: s, clientHeight: l } = a.current;
				u(s > l + MIN_SCROLLABLE_CONTENT);
				let d = Math.abs(s - i - l), f = o.current ? i < o.current : !1, p = o.current ? o.current - i : 0;
				c(f && p > MIN_SCROLL_UP_THRESHOLD ? !1 : d < ACTIVATION_THRESHOLD), o.current = i;
			}
		},
		shouldAutoScroll: s,
		handleTouchStart: () => {
			c(!1);
		},
		isScrollable: l
	};
}
var COLLAPSIBLE_NAME = "Collapsible", [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME), [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME), Collapsible$1 = React$1.forwardRef((i, a) => {
	let { __scopeCollapsible: o, open: s, defaultOpen: c, disabled: l, onOpenChange: u, ...d } = i, [f, p] = useControllableState({
		prop: s,
		defaultProp: c ?? !1,
		onChange: u,
		caller: COLLAPSIBLE_NAME
	});
	return /* @__PURE__ */ jsx(CollapsibleProvider, {
		scope: o,
		disabled: l,
		contentId: useId$1(),
		open: f,
		onOpenToggle: React$1.useCallback(() => p((i) => !i), [p]),
		children: /* @__PURE__ */ jsx(Primitive.div, {
			"data-state": getState$1(f),
			"data-disabled": l ? "" : void 0,
			...d,
			ref: a
		})
	});
});
Collapsible$1.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME$1 = "CollapsibleTrigger", CollapsibleTrigger$1 = React$1.forwardRef((i, a) => {
	let { __scopeCollapsible: s, ...c } = i, l = useCollapsibleContext(TRIGGER_NAME$1, s);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		"aria-controls": l.contentId,
		"aria-expanded": l.open || !1,
		"data-state": getState$1(l.open),
		"data-disabled": l.disabled ? "" : void 0,
		disabled: l.disabled,
		...c,
		ref: a,
		onClick: composeEventHandlers(i.onClick, l.onOpenToggle)
	});
});
CollapsibleTrigger$1.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "CollapsibleContent", CollapsibleContent$1 = React$1.forwardRef((i, a) => {
	let { forceMount: o, ...s } = i, c = useCollapsibleContext(CONTENT_NAME$1, i.__scopeCollapsible);
	return /* @__PURE__ */ jsx(Presence, {
		present: o || c.open,
		children: ({ present: i }) => /* @__PURE__ */ jsx(CollapsibleContentImpl, {
			...s,
			ref: a,
			present: i
		})
	});
});
CollapsibleContent$1.displayName = CONTENT_NAME$1;
var CollapsibleContentImpl = React$1.forwardRef((i, o) => {
	let { __scopeCollapsible: s, present: c, children: l, ...u } = i, d = useCollapsibleContext(CONTENT_NAME$1, s), [f, h] = React$1.useState(c), g = React$1.useRef(null), _ = useComposedRefs(o, g), v = React$1.useRef(0), y = v.current, b = React$1.useRef(0), x = b.current, S = d.open || f, C = React$1.useRef(S), w = React$1.useRef(void 0);
	return React$1.useEffect(() => {
		let i = requestAnimationFrame(() => C.current = !1);
		return () => cancelAnimationFrame(i);
	}, []), useLayoutEffect2(() => {
		let i = g.current;
		if (i) {
			w.current = w.current || {
				transitionDuration: i.style.transitionDuration,
				animationName: i.style.animationName
			}, i.style.transitionDuration = "0s", i.style.animationName = "none";
			let a = i.getBoundingClientRect();
			v.current = a.height, b.current = a.width, C.current || (i.style.transitionDuration = w.current.transitionDuration, i.style.animationName = w.current.animationName), h(c);
		}
	}, [d.open, c]), /* @__PURE__ */ jsx(Primitive.div, {
		"data-state": getState$1(d.open),
		"data-disabled": d.disabled ? "" : void 0,
		id: d.contentId,
		hidden: !S,
		...u,
		ref: _,
		style: {
			"--radix-collapsible-content-height": y ? `${y}px` : void 0,
			"--radix-collapsible-content-width": x ? `${x}px` : void 0,
			...i.style
		},
		children: S && l
	});
});
function getState$1(i) {
	return i ? "open" : "closed";
}
var Root$1 = Collapsible$1;
function Collapsible({ ...i }) {
	return /* @__PURE__ */ jsx(Root$1, {
		"data-slot": "collapsible",
		...i
	});
}
function CollapsibleTrigger({ ...i }) {
	return /* @__PURE__ */ jsx(CollapsibleTrigger$1, {
		"data-slot": "collapsible-trigger",
		...i
	});
}
function CollapsibleContent({ ...i }) {
	return /* @__PURE__ */ jsx(CollapsibleContent$1, {
		"data-slot": "collapsible-content",
		...i
	});
}
var MarkdownRenderer = React.lazy(() => import("./markdown-renderer-Dja6NkwT.js"));
function LazyMarkdownRenderer({ children: i, className: a }) {
	return /* @__PURE__ */ jsx(Suspense, {
		fallback: /* @__PURE__ */ jsx("div", { className: "animate-pulse h-4 bg-muted/50 rounded w-1/2" }),
		children: /* @__PURE__ */ jsx(MarkdownRenderer, {
			className: a,
			children: i
		})
	});
}
function TypingIndicator() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center gap-1",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex space-x-0.5",
			children: [
				/* @__PURE__ */ jsx("div", { className: "size-2 rounded-full bg-primary/60 animate-typing-dot-bounce" }),
				/* @__PURE__ */ jsx("div", { className: "size-2 rounded-full bg-primary/60 animate-typing-dot-bounce [animation-delay:500ms]" }),
				/* @__PURE__ */ jsx("div", { className: "size-2 rounded-full bg-primary/60 animate-typing-dot-bounce [animation-delay:1000ms]" })
			]
		})
	});
}
var HOVER_CLOSE_DELAY = 150;
function ToolResult({ toolName: i, result: a }) {
	let [o, s] = useState(!1), c = useRef(null), l = () => {
		c.current &&= (clearTimeout(c.current), null);
	};
	return /* @__PURE__ */ jsxs(Popover, {
		open: o,
		onOpenChange: (i) => {
			i || s(!1);
		},
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ jsxs(Badge, {
				variant: "outline",
				className: "cursor-pointer hover:scale-[0.95]",
				onMouseEnter: () => {
					l(), s(!0);
				},
				onMouseLeave: () => {
					c.current = setTimeout(() => {
						s(!1), c.current = null;
					}, HOVER_CLOSE_DELAY);
				},
				children: [/* @__PURE__ */ jsx(CodeXml, { className: "size-3" }), i]
			})
		}), /* @__PURE__ */ jsxs(PopoverContent, {
			className: "max-h-[80vh] w-96 max-w-[min(90vw,24rem)] flex flex-col p-0",
			align: "start",
			sideOffset: 8,
			onMouseEnter: () => {
				l();
			},
			onMouseLeave: () => {
				s(!1);
			},
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 border-b px-4 py-3",
				children: [/* @__PURE__ */ jsx(CodeXml, { className: "size-5 text-primary shrink-0" }), /* @__PURE__ */ jsxs("span", {
					className: "font-semibold text-sm",
					children: ["Tool Result: ", i]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-auto rounded-b-md bg-muted/30 p-4",
				children: typeof a == "string" ? /* @__PURE__ */ jsx(LazyMarkdownRenderer, { children: a.replace(/\\n/g, "\n") }) : /* @__PURE__ */ jsx("pre", {
					className: "whitespace-pre-wrap text-xs md:text-sm font-mono leading-relaxed",
					children: JSON.stringify(a, null, 2)
				})
			})]
		})]
	});
}
var FilePreview$1 = lazy(() => import("./file-preview-C-7eL_iv.js").then((i) => ({ default: i.FilePreview }))), chatBubbleVariants = cva("group/message relative rounded-lg p-4 text-sm shadow-sm transition-all duration-200 hover:shadow-md", {
	variants: {
		isUser: {
			true: "chat-bubble-user",
			false: "chat-bubble-bot"
		},
		animation: {
			none: "",
			slide: "duration-300 animate-in fade-in-0",
			scale: "duration-300 animate-in fade-in-0 zoom-in-95",
			fade: "duration-500 animate-in fade-in-0"
		}
	},
	compoundVariants: [
		{
			isUser: !0,
			animation: "slide",
			class: "slide-in-from-right"
		},
		{
			isUser: !1,
			animation: "slide",
			class: "slide-in-from-left"
		},
		{
			isUser: !0,
			animation: "scale",
			class: "origin-bottom-right"
		},
		{
			isUser: !1,
			animation: "scale",
			class: "origin-bottom-left"
		}
	]
});
function ChatMessageBubble({ isUser: i, animation: a, actions: o, isGenerating: s, children: c }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn(chatBubbleVariants({
			isUser: i,
			animation: a
		})),
		children: [s && !c ? /* @__PURE__ */ jsx(TypingIndicator, {}) : /* @__PURE__ */ jsx(LazyMarkdownRenderer, { children: typeof c == "string" ? c : "" }), o ? /* @__PURE__ */ jsx("div", {
			className: "absolute -bottom-6 right-2 flex space-x-1 rounded-lg border bg-background/95 backdrop-blur-sm p-1 text-foreground opacity-0 transition-all duration-200 group-hover/message:opacity-100 shadow-sm",
			children: o
		}) : null]
	});
}
function ChatMessageTimestamp({ createdAt: i, animation: a = "scale" }) {
	if (!i) return null;
	let o = i.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit"
	});
	return /* @__PURE__ */ jsx("time", {
		dateTime: i.toISOString(),
		className: cn("mt-1 block px-1 text-xs opacity-60", a !== "none" && "duration-500 animate-in fade-in-0"),
		children: o
	});
}
const ChatMessage = ({ role: i, content: a, createdAt: o, showTimeStamp: s = !1, animation: c = "scale", actions: l, experimental_attachments: d, toolInvocations: f, parts: p, isGenerating: h = !1 }) => {
	let g = i === "user", _ = useMemo(() => d?.map((i) => {
		let a = dataUrlToUint8Array(i.url);
		return new File([a], i.name ?? "Unknown", { type: i.contentType });
	}), [d]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-3 min-w-0", g ? "items-end ml-auto max-w-[85%] pr-4" : "items-start mr-auto max-w-[85%] pl-4"),
		children: [
			_ && _.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "mb-2 flex flex-wrap gap-2",
				children: _.map((i, a) => /* @__PURE__ */ jsx(Suspense, {
					fallback: /* @__PURE__ */ jsx("div", { className: "h-16 w-16 animate-pulse bg-muted rounded-xl" }),
					children: /* @__PURE__ */ jsx(FilePreview$1, { file: i })
				}, a))
			}),
			f && f.length > 0 && /* @__PURE__ */ jsx(ToolCall, { toolInvocations: f }),
			p && p.length > 0 ? p.map((i, a) => i.type === "text" ? /* @__PURE__ */ jsxs("div", {
				className: cn("flex flex-col", g ? "items-end" : "items-start"),
				children: [/* @__PURE__ */ jsx(ChatMessageBubble, {
					isUser: g,
					animation: c,
					actions: l,
					children: i.text
				}), s && /* @__PURE__ */ jsx(ChatMessageTimestamp, {
					createdAt: o,
					animation: c
				})]
			}, `text-${a}`) : i.type === "reasoning" ? /* @__PURE__ */ jsx(ReasoningBlock, { part: i }, `reasoning-${a}`) : i.type === "tool-invocation" ? /* @__PURE__ */ jsx(ToolCall, { toolInvocations: [i.toolInvocation] }, `tool-${a}`) : null) : a || h ? /* @__PURE__ */ jsxs("div", {
				className: cn("flex flex-col", g ? "items-end" : "items-start"),
				children: [/* @__PURE__ */ jsx(ChatMessageBubble, {
					isUser: g,
					animation: c,
					actions: l,
					isGenerating: h,
					children: a
				}), s && /* @__PURE__ */ jsx(ChatMessageTimestamp, {
					createdAt: o,
					animation: c
				})]
			}) : s && /* @__PURE__ */ jsx(ChatMessageTimestamp, {
				createdAt: o,
				animation: c
			})
		]
	});
};
function dataUrlToUint8Array(i) {
	let a = i.split(",")[1], o = atob(a), s = new Uint8Array(o.length);
	for (let i = 0; i < o.length; i++) s[i] = o.charCodeAt(i);
	return s;
}
function ReasoningBlock({ part: i }) {
	let [a, o] = useState(!1);
	return /* @__PURE__ */ jsx("div", {
		className: "mb-3 flex flex-col items-start max-w-[85%] ml-4 mr-auto min-w-0",
		children: /* @__PURE__ */ jsxs(Collapsible, {
			open: a,
			onOpenChange: o,
			className: "group chat-reasoning-block",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex items-center p-3",
				children: /* @__PURE__ */ jsx(CollapsibleTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ jsxs("button", {
						className: "flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-6 w-6 items-center justify-center rounded-full bg-primary/10",
							children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 transition-transform group-data-[state=open]:rotate-90" })
						}), /* @__PURE__ */ jsx("span", {
							className: "font-medium",
							children: "Thinking"
						})]
					})
				})
			}), /* @__PURE__ */ jsx(CollapsibleContent, {
				forceMount: !0,
				children: /* @__PURE__ */ jsx(m.div, {
					initial: !1,
					animate: a ? "open" : "closed",
					variants: {
						open: {
							height: "auto",
							opacity: 1
						},
						closed: {
							height: 0,
							opacity: 0
						}
					},
					transition: {
						duration: .3,
						ease: [
							.04,
							.62,
							.23,
							.98
						]
					},
					className: "border-t border-border/30",
					children: /* @__PURE__ */ jsx("div", {
						className: "p-3",
						children: /* @__PURE__ */ jsx("div", {
							className: "whitespace-pre-wrap text-sm text-muted-foreground leading-relaxed",
							children: i.reasoning
						})
					})
				})
			})]
		})
	});
}
function ToolCall({ toolInvocations: i }) {
	return i?.length ? /* @__PURE__ */ jsx("div", {
		className: "flex flex-col items-start gap-3 max-w-[85%] ml-4 mr-auto min-w-0",
		children: i.map((i, a) => {
			if (i.state === "result" && i.result?.__cancelled === !0) return /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive shadow-sm",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10",
					children: /* @__PURE__ */ jsx(Ban, { className: "h-3 w-3" })
				}), /* @__PURE__ */ jsxs("span", {
					className: "font-medium",
					children: [
						"Cancelled",
						" ",
						/* @__PURE__ */ jsx("code", {
							className: "rounded bg-destructive/10 px-1.5 py-0.5 text-xs font-mono",
							children: i.toolName
						})
					]
				})]
			}, a);
			switch (i.state) {
				case "result": return /* @__PURE__ */ jsx(ToolResult, {
					toolName: i.toolName,
					result: i.result
				}, a);
				case "partial-call":
				case "call": return /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-primary shadow-sm",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-6 w-6 items-center justify-center rounded-full bg-primary/10",
						children: /* @__PURE__ */ jsx(Terminal, { className: "h-3 w-3" })
					}), /* @__PURE__ */ jsxs("span", {
						className: "font-medium",
						children: [
							"Calling",
							" ",
							/* @__PURE__ */ jsx("code", {
								className: "rounded bg-primary/10 px-1.5 py-0.5 text-xs font-mono",
								children: i.toolName
							})
						]
					})]
				}, a);
				default: return null;
			}
		})
	}) : null;
}
function memo$1(i, a, o) {
	let s = o.initialDeps ?? [], c, l = !0;
	function u() {
		let u;
		o.key && o.debug?.call(o) && (u = Date.now());
		let d = i();
		if (!(d.length !== s.length || d.some((i, a) => s[a] !== i))) return c;
		s = d;
		let f;
		if (o.key && o.debug?.call(o) && (f = Date.now()), c = a(...d), o.key && o.debug?.call(o)) {
			let i = Math.round((Date.now() - u) * 100) / 100, a = Math.round((Date.now() - f) * 100) / 100, s = a / 16, c = (i, a) => {
				for (i = String(i); i.length < a;) i = " " + i;
				return i;
			};
			console.info(`%c⏱ ${c(a, 5)} /${c(i, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * s, 120))}deg 100% 31%);`, o?.key);
		}
		return o?.onChange && !(l && o.skipInitialOnChange) && o.onChange(c), l = !1, c;
	}
	return u.updateDeps = (i) => {
		s = i;
	}, u;
}
function notUndefined(i, a) {
	if (i === void 0) throw Error(`Unexpected undefined${a ? `: ${a}` : ""}`);
	return i;
}
var approxEqual = (i, a) => Math.abs(i - a) < 1.01, debounce = (i, a, o) => {
	let s;
	return function(...c) {
		i.clearTimeout(s), s = i.setTimeout(() => a.apply(this, c), o);
	};
}, getRect = (i) => {
	let { offsetWidth: a, offsetHeight: o } = i;
	return {
		width: a,
		height: o
	};
}, defaultKeyExtractor = (i) => i, defaultRangeExtractor = (i) => {
	let a = Math.max(i.startIndex - i.overscan, 0), o = Math.min(i.endIndex + i.overscan, i.count - 1), s = [];
	for (let i = a; i <= o; i++) s.push(i);
	return s;
}, observeElementRect = (i, a) => {
	let o = i.scrollElement;
	if (!o) return;
	let s = i.targetWindow;
	if (!s) return;
	let c = (i) => {
		let { width: o, height: s } = i;
		a({
			width: Math.round(o),
			height: Math.round(s)
		});
	};
	if (c(getRect(o)), !s.ResizeObserver) return () => {};
	let l = new s.ResizeObserver((a) => {
		let s = () => {
			let i = a[0];
			if (i?.borderBoxSize) {
				let a = i.borderBoxSize[0];
				if (a) {
					c({
						width: a.inlineSize,
						height: a.blockSize
					});
					return;
				}
			}
			c(getRect(o));
		};
		i.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
	});
	return l.observe(o, { box: "border-box" }), () => {
		l.unobserve(o);
	};
}, addEventListenerOptions = { passive: !0 }, supportsScrollend = typeof window > "u" ? !0 : "onscrollend" in window, observeElementOffset = (i, a) => {
	let o = i.scrollElement;
	if (!o) return;
	let s = i.targetWindow;
	if (!s) return;
	let c = 0, l = i.options.useScrollendEvent && supportsScrollend ? () => void 0 : debounce(s, () => {
		a(c, !1);
	}, i.options.isScrollingResetDelay), u = (s) => () => {
		let { horizontal: u, isRtl: d } = i.options;
		c = u ? o.scrollLeft * (d && -1 || 1) : o.scrollTop, l(), a(c, s);
	}, d = u(!0), f = u(!1);
	o.addEventListener("scroll", d, addEventListenerOptions);
	let p = i.options.useScrollendEvent && supportsScrollend;
	return p && o.addEventListener("scrollend", f, addEventListenerOptions), () => {
		o.removeEventListener("scroll", d), p && o.removeEventListener("scrollend", f);
	};
}, measureElement = (i, a, o) => {
	if (a?.borderBoxSize) {
		let i = a.borderBoxSize[0];
		if (i) return Math.round(i[o.options.horizontal ? "inlineSize" : "blockSize"]);
	}
	return i[o.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, elementScroll = (i, { adjustments: a = 0, behavior: o }, s) => {
	var c, l;
	let u = i + a;
	(l = (c = s.scrollElement)?.scrollTo) == null || l.call(c, {
		[s.options.horizontal ? "left" : "top"]: u,
		behavior: o
	});
}, Virtualizer = class {
	constructor(i) {
		this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.currentScrollToIndex = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
			let i = null, a = () => i || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : i = new this.targetWindow.ResizeObserver((i) => {
				i.forEach((i) => {
					let a = () => {
						this._measureElement(i.target, i);
					};
					this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
				});
			}));
			return {
				disconnect: () => {
					var o;
					(o = a()) == null || o.disconnect(), i = null;
				},
				observe: (i) => a()?.observe(i, { box: "border-box" }),
				unobserve: (i) => a()?.unobserve(i)
			};
		})(), this.range = null, this.setOptions = (i) => {
			Object.entries(i).forEach(([a, o]) => {
				o === void 0 && delete i[a];
			}), this.options = {
				debug: !1,
				initialOffset: 0,
				overscan: 1,
				paddingStart: 0,
				paddingEnd: 0,
				scrollPaddingStart: 0,
				scrollPaddingEnd: 0,
				horizontal: !1,
				getItemKey: defaultKeyExtractor,
				rangeExtractor: defaultRangeExtractor,
				onChange: () => {},
				measureElement,
				initialRect: {
					width: 0,
					height: 0
				},
				scrollMargin: 0,
				gap: 0,
				indexAttribute: "data-index",
				initialMeasurementsCache: [],
				lanes: 1,
				isScrollingResetDelay: 150,
				enabled: !0,
				isRtl: !1,
				useScrollendEvent: !1,
				useAnimationFrameWithResizeObserver: !1,
				...i
			};
		}, this.notify = (i) => {
			var a, o;
			(o = (a = this.options).onChange) == null || o.call(a, this, i);
		}, this.maybeNotify = memo$1(() => (this.calculateRange(), [
			this.isScrolling,
			this.range ? this.range.startIndex : null,
			this.range ? this.range.endIndex : null
		]), (i) => {
			this.notify(i);
		}, {
			key: process.env.NODE_ENV !== "production" && "maybeNotify",
			debug: () => this.options.debug,
			initialDeps: [
				this.isScrolling,
				this.range ? this.range.startIndex : null,
				this.range ? this.range.endIndex : null
			]
		}), this.cleanup = () => {
			this.unsubs.filter(Boolean).forEach((i) => i()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
		}, this._didMount = () => () => {
			this.cleanup();
		}, this._willUpdate = () => {
			let i = this.options.enabled ? this.options.getScrollElement() : null;
			if (this.scrollElement !== i) {
				if (this.cleanup(), !i) {
					this.maybeNotify();
					return;
				}
				this.scrollElement = i, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = this.scrollElement?.window ?? null, this.elementsCache.forEach((i) => {
					this.observer.observe(i);
				}), this.unsubs.push(this.options.observeElementRect(this, (i) => {
					this.scrollRect = i, this.maybeNotify();
				})), this.unsubs.push(this.options.observeElementOffset(this, (i, a) => {
					this.scrollAdjustments = 0, this.scrollDirection = a ? this.getScrollOffset() < i ? "forward" : "backward" : null, this.scrollOffset = i, this.isScrolling = a, this.maybeNotify();
				})), this._scrollToOffset(this.getScrollOffset(), {
					adjustments: void 0,
					behavior: void 0
				});
			}
		}, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (i, a) => {
			let o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
			for (let c = a - 1; c >= 0; c--) {
				let a = i[c];
				if (o.has(a.lane)) continue;
				let l = s.get(a.lane);
				if (l == null || a.end > l.end ? s.set(a.lane, a) : a.end < l.end && o.set(a.lane, !0), o.size === this.options.lanes) break;
			}
			return s.size === this.options.lanes ? Array.from(s.values()).sort((i, a) => i.end === a.end ? i.index - a.index : i.end - a.end)[0] : void 0;
		}, this.getMeasurementOptions = memo$1(() => [
			this.options.count,
			this.options.paddingStart,
			this.options.scrollMargin,
			this.options.getItemKey,
			this.options.enabled,
			this.options.lanes
		], (i, a, o, s, c, l) => (this.prevLanes !== void 0 && this.prevLanes !== l && (this.lanesChangedFlag = !0), this.prevLanes = l, this.pendingMeasuredCacheIndexes = [], {
			count: i,
			paddingStart: a,
			scrollMargin: o,
			getItemKey: s,
			enabled: c,
			lanes: l
		}), { key: !1 }), this.getMeasurements = memo$1(() => [this.getMeasurementOptions(), this.itemSizeCache], ({ count: i, paddingStart: a, scrollMargin: o, getItemKey: s, enabled: c, lanes: l }, u) => {
			if (!c) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
			if (this.laneAssignments.size > i) for (let a of this.laneAssignments.keys()) a >= i && this.laneAssignments.delete(a);
			this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((i) => {
				this.itemSizeCache.set(i.key, i.size);
			}));
			let d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
			this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === i && (this.lanesSettling = !1);
			let f = this.measurementsCache.slice(0, d), p = Array(l).fill(void 0);
			for (let i = 0; i < d; i++) {
				let a = f[i];
				a && (p[a.lane] = i);
			}
			for (let c = d; c < i; c++) {
				let i = s(c), l = this.laneAssignments.get(c), d, h;
				if (l !== void 0 && this.options.lanes > 1) {
					d = l;
					let i = p[d], s = i === void 0 ? void 0 : f[i];
					h = s ? s.end + this.options.gap : a + o;
				} else {
					let i = this.options.lanes === 1 ? f[c - 1] : this.getFurthestMeasurement(f, c);
					h = i ? i.end + this.options.gap : a + o, d = i ? i.lane : c % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(c, d);
				}
				let g = u.get(i), _ = typeof g == "number" ? g : this.options.estimateSize(c), v = h + _;
				f[c] = {
					index: c,
					start: h,
					size: _,
					end: v,
					key: i,
					lane: d
				}, p[d] = c;
			}
			return this.measurementsCache = f, f;
		}, {
			key: process.env.NODE_ENV !== "production" && "getMeasurements",
			debug: () => this.options.debug
		}), this.calculateRange = memo$1(() => [
			this.getMeasurements(),
			this.getSize(),
			this.getScrollOffset(),
			this.options.lanes
		], (i, a, o, s) => this.range = i.length > 0 && a > 0 ? calculateRange({
			measurements: i,
			outerSize: a,
			scrollOffset: o,
			lanes: s
		}) : null, {
			key: process.env.NODE_ENV !== "production" && "calculateRange",
			debug: () => this.options.debug
		}), this.getVirtualIndexes = memo$1(() => {
			let i = null, a = null, o = this.calculateRange();
			return o && (i = o.startIndex, a = o.endIndex), this.maybeNotify.updateDeps([
				this.isScrolling,
				i,
				a
			]), [
				this.options.rangeExtractor,
				this.options.overscan,
				this.options.count,
				i,
				a
			];
		}, (i, a, o, s, c) => s === null || c === null ? [] : i({
			startIndex: s,
			endIndex: c,
			overscan: a,
			count: o
		}), {
			key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
			debug: () => this.options.debug
		}), this.indexFromElement = (i) => {
			let a = this.options.indexAttribute, o = i.getAttribute(a);
			return o ? parseInt(o, 10) : (console.warn(`Missing attribute name '${a}={index}' on measured element.`), -1);
		}, this._measureElement = (i, a) => {
			let o = this.indexFromElement(i), s = this.measurementsCache[o];
			if (!s) return;
			let c = s.key, l = this.elementsCache.get(c);
			l !== i && (l && this.observer.unobserve(l), this.observer.observe(i), this.elementsCache.set(c, i)), i.isConnected && this.resizeItem(o, this.options.measureElement(i, a, this));
		}, this.resizeItem = (i, a) => {
			let o = this.measurementsCache[i];
			if (!o) return;
			let s = a - (this.itemSizeCache.get(o.key) ?? o.size);
			s !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange === void 0 ? o.start < this.getScrollOffset() + this.scrollAdjustments : this.shouldAdjustScrollPositionOnItemSizeChange(o, s, this)) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", s), this._scrollToOffset(this.getScrollOffset(), {
				adjustments: this.scrollAdjustments += s,
				behavior: void 0
			})), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, a)), this.notify(!1));
		}, this.measureElement = (i) => {
			if (!i) {
				this.elementsCache.forEach((i, a) => {
					i.isConnected || (this.observer.unobserve(i), this.elementsCache.delete(a));
				});
				return;
			}
			this._measureElement(i, void 0);
		}, this.getVirtualItems = memo$1(() => [this.getVirtualIndexes(), this.getMeasurements()], (i, a) => {
			let o = [];
			for (let s = 0, c = i.length; s < c; s++) {
				let c = a[i[s]];
				o.push(c);
			}
			return o;
		}, {
			key: process.env.NODE_ENV !== "production" && "getVirtualItems",
			debug: () => this.options.debug
		}), this.getVirtualItemForOffset = (i) => {
			let a = this.getMeasurements();
			if (a.length !== 0) return notUndefined(a[findNearestBinarySearch(0, a.length - 1, (i) => notUndefined(a[i]).start, i)]);
		}, this.getMaxScrollOffset = () => {
			if (!this.scrollElement) return 0;
			if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
			{
				let i = this.scrollElement.document.documentElement;
				return this.options.horizontal ? i.scrollWidth - this.scrollElement.innerWidth : i.scrollHeight - this.scrollElement.innerHeight;
			}
		}, this.getOffsetForAlignment = (i, a, o = 0) => {
			if (!this.scrollElement) return 0;
			let s = this.getSize(), c = this.getScrollOffset();
			a === "auto" && (a = i >= c + s ? "end" : "start"), a === "center" ? i += (o - s) / 2 : a === "end" && (i -= s);
			let l = this.getMaxScrollOffset();
			return Math.max(Math.min(l, i), 0);
		}, this.getOffsetForIndex = (i, a = "auto") => {
			i = Math.max(0, Math.min(i, this.options.count - 1));
			let o = this.measurementsCache[i];
			if (!o) return;
			let s = this.getSize(), c = this.getScrollOffset();
			if (a === "auto") if (o.end >= c + s - this.options.scrollPaddingEnd) a = "end";
			else if (o.start <= c + this.options.scrollPaddingStart) a = "start";
			else return [c, a];
			if (a === "end" && i === this.options.count - 1) return [this.getMaxScrollOffset(), a];
			let l = a === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
			return [this.getOffsetForAlignment(l, a, o.size), a];
		}, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (i, { align: a = "start", behavior: o } = {}) => {
			o === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getOffsetForAlignment(i, a), {
				adjustments: void 0,
				behavior: o
			});
		}, this.scrollToIndex = (i, { align: a = "auto", behavior: o } = {}) => {
			o === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), i = Math.max(0, Math.min(i, this.options.count - 1)), this.currentScrollToIndex = i;
			let s = 0, c = (a) => {
				if (!this.targetWindow) return;
				let s = this.getOffsetForIndex(i, a);
				if (!s) {
					console.warn("Failed to get offset for index:", i);
					return;
				}
				let [c, u] = s;
				this._scrollToOffset(c, {
					adjustments: void 0,
					behavior: o
				}), this.targetWindow.requestAnimationFrame(() => {
					let a = () => {
						if (this.currentScrollToIndex !== i) return;
						let a = this.getScrollOffset(), o = this.getOffsetForIndex(i, u);
						if (!o) {
							console.warn("Failed to get offset for index:", i);
							return;
						}
						approxEqual(o[0], a) || l(u);
					};
					this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(a) : a();
				});
			}, l = (a) => {
				this.targetWindow && this.currentScrollToIndex === i && (s++, s < 10 ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", s, 10), this.targetWindow.requestAnimationFrame(() => c(a))) : console.warn(`Failed to scroll to index ${i} after 10 attempts.`));
			};
			c(a);
		}, this.scrollBy = (i, { behavior: a } = {}) => {
			a === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getScrollOffset() + i, {
				adjustments: void 0,
				behavior: a
			});
		}, this.getTotalSize = () => {
			let i = this.getMeasurements(), a;
			if (i.length === 0) a = this.options.paddingStart;
			else if (this.options.lanes === 1) a = i[i.length - 1]?.end ?? 0;
			else {
				let o = Array(this.options.lanes).fill(null), s = i.length - 1;
				for (; s >= 0 && o.some((i) => i === null);) {
					let a = i[s];
					o[a.lane] === null && (o[a.lane] = a.end), s--;
				}
				a = Math.max(...o.filter((i) => i !== null));
			}
			return Math.max(a - this.options.scrollMargin + this.options.paddingEnd, 0);
		}, this._scrollToOffset = (i, { adjustments: a, behavior: o }) => {
			this.options.scrollToFn(i, {
				behavior: o,
				adjustments: a
			}, this);
		}, this.measure = () => {
			this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
		}, this.setOptions(i);
	}
}, findNearestBinarySearch = (i, a, o, s) => {
	for (; i <= a;) {
		let c = (i + a) / 2 | 0, l = o(c);
		if (l < s) i = c + 1;
		else if (l > s) a = c - 1;
		else return c;
	}
	return i > 0 ? i - 1 : 0;
};
function calculateRange({ measurements: i, outerSize: a, scrollOffset: o, lanes: s }) {
	let c = i.length - 1, l = (a) => i[a].start;
	if (i.length <= s) return {
		startIndex: 0,
		endIndex: c
	};
	let u = findNearestBinarySearch(0, c, l, o), d = u;
	if (s === 1) for (; d < c && i[d].end < o + a;) d++;
	else if (s > 1) {
		let l = Array(s).fill(0);
		for (; d < c && l.some((i) => i < o + a);) {
			let a = i[d];
			l[a.lane] = a.end, d++;
		}
		let f = Array(s).fill(o + a);
		for (; u >= 0 && f.some((i) => i >= o);) {
			let a = i[u];
			f[a.lane] = a.start, u--;
		}
		u = Math.max(0, u - u % s), d = Math.min(c, d + (s - 1 - d % s));
	}
	return {
		startIndex: u,
		endIndex: d
	};
}
var useIsomorphicLayoutEffect = typeof document < "u" ? React$1.useLayoutEffect : React$1.useEffect;
function useVirtualizerBase({ useFlushSync: i = !0, ...a }) {
	let o = React$1.useReducer(() => ({}), {})[1], s = {
		...a,
		onChange: (s, c) => {
			var l;
			i && c ? flushSync(o) : o(), (l = a.onChange) == null || l.call(a, s, c);
		}
	}, [c] = React$1.useState(() => new Virtualizer(s));
	return c.setOptions(s), useIsomorphicLayoutEffect(() => c._didMount(), []), useIsomorphicLayoutEffect(() => c._willUpdate()), c;
}
function useVirtualizer(i) {
	return useVirtualizerBase({
		observeElementRect,
		observeElementOffset,
		scrollToFn: elementScroll,
		...i
	});
}
var MemoizedChatMessage = memo(ChatMessage, (i, a) => {
	if (i.id !== a.id || i.content !== a.content || i.role !== a.role || i.isGenerating !== a.isGenerating) return !1;
	let o = i.toolInvocations || [], s = a.toolInvocations || [];
	if (o.length !== s.length) return !1;
	for (let i = 0; i < o.length; i++) if (o[i].state !== s[i].state || o[i].toolCallId !== s[i].toolCallId) return !1;
	let c = i.parts || [], l = a.parts || [];
	return c.length === l.length;
});
MemoizedChatMessage.displayName = "MemoizedChatMessage";
const MessageList = memo(function({ messages: i, showTimeStamps: a = !0, isTyping: o = !1, messageOptions: s, virtualize: c = !1, scrollRef: l, estimateSize: u = 120 }) {
	let d = useCallback((i) => typeof s == "function" ? s(i) : s, [s]), f = useVirtualizer({
		count: i.length,
		getScrollElement: () => l?.current ?? null,
		estimateSize: () => u,
		overscan: 3,
		enabled: c && !!l
	}), p = c && l ? f.getVirtualItems() : [];
	if (c && l && i.length > 0) {
		let s = p[0]?.start ?? 0, c = f.getTotalSize() - (p[p.length - 1]?.end ?? 0);
		return /* @__PURE__ */ jsxs("div", {
			style: {
				height: "100%",
				width: "100%"
			},
			children: [/* @__PURE__ */ jsx("div", {
				style: {
					paddingTop: `${s}px`,
					paddingBottom: `${Math.max(0, c)}px`
				},
				children: p.map((o) => {
					let s = i[o.index], c = d(s);
					return /* @__PURE__ */ jsx("div", {
						"data-index": o.index,
						ref: f.measureElement,
						style: { marginBottom: "1rem" },
						children: /* @__PURE__ */ jsx(MemoizedChatMessage, {
							showTimeStamp: a,
							...s,
							...c
						})
					}, s.id);
				})
			}), o && /* @__PURE__ */ jsx(TypingIndicator, {})]
		});
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [i.map((i) => {
			let o = d(i);
			return /* @__PURE__ */ jsx(MemoizedChatMessage, {
				showTimeStamp: a,
				...i,
				...o
			}, i.id);
		}), o && /* @__PURE__ */ jsx(TypingIndicator, {})]
	});
});
MessageList.displayName = "MessageList";
function useSpeech(i) {
	let [a, o] = useState(!1), [s, c] = useState(!1), [l, u] = useState(null);
	useEffect(() => {
		let a = getVoiceSupport();
		if (o(a.speechSynthesis), a.speechSynthesis) {
			let a = new SpeechSynthesisManager(i);
			return a.onStart = () => c(!0), a.onEnd = () => c(!1), a.onError = () => c(!1), u(a), () => {
				a.destroy();
			};
		}
	}, []), useEffect(() => {
		l && i && l.updateConfig(i);
	}, [l, i]);
	let d = useCallback((i) => {
		if (!l || !i) return;
		let a = stripMarkdownForSpeech(i);
		l.speak(a);
	}, [l]), f = useCallback(() => {
		l && l.stop();
	}, [l]);
	return {
		isSupported: a,
		isSpeaking: s,
		speak: d,
		stop: f,
		toggle: useCallback((i) => {
			!l || !i || (s ? f() : d(i));
		}, [
			s,
			d,
			f,
			l
		])
	};
}
function SpeakButton({ content: i, voiceConfig: a, className: o, size: s = "icon", variant: c = "ghost" }) {
	let { isSupported: l, isSpeaking: d, toggle: f } = useSpeech(a);
	return l ? /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			type: "button",
			size: s,
			variant: c,
			className: cn("h-6 w-6 transition-colors", d && "text-primary bg-primary/10", o),
			onClick: () => f(i),
			"aria-label": d ? "Stop speaking" : "Listen to message",
			children: d ? /* @__PURE__ */ jsx(Square, {
				className: "h-3 w-3",
				fill: "currentColor"
			}) : /* @__PURE__ */ jsx(Volume2, {})
		})
	}), /* @__PURE__ */ jsx(TooltipContent, {
		side: "top",
		className: "text-xs",
		children: d ? "Stop" : "Listen"
	})] }) }) : null;
}
function Feedback({ onRateResponse: i, messageId: a, rating: o, comment: s }) {
	let [c, l] = useState(!1), [d, f] = useState(null), [p, h] = useState(o ? o * 5 : null), [_, y] = useState(s || "");
	return React.useEffect(() => {
		h(o ? o * 5 : null);
	}, [o]), React.useEffect(() => {
		y(s || "");
	}, [s]), /* @__PURE__ */ jsxs(Popover, {
		open: c,
		onOpenChange: (i) => {
			l(i), i && (h(o ? o * 5 : null), y(s || ""));
		},
		children: [/* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, {
			delayDuration: 300,
			children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ jsx(PopoverTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ jsx(Button, {
						size: "icon",
						variant: "ghost",
						className: cn("size-6 transition-colors duration-200", o ? "text-primary bg-primary/10 hover:bg-primary/20" : "text-muted-foreground hover:text-foreground"),
						children: /* @__PURE__ */ jsx(Heart, { className: cn("size-3.5", o && "fill-current") })
					})
				})
			}), /* @__PURE__ */ jsx(TooltipContent, { children: "Rate Response" })]
		}) }), /* @__PURE__ */ jsx(PopoverContent, {
			className: "w-80 p-4",
			align: "end",
			side: "top",
			children: /* @__PURE__ */ jsxs("form", {
				onSubmit: (o) => {
					o.preventDefault(), p && (i(a, p / 5, _.trim() || void 0), l(!1));
				},
				className: "flex flex-col gap-4 relative z-50",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "font-medium text-sm text-foreground",
							children: "Provide Feedback"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground",
							children: "How would you rate this response?"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex justify-center -mx-2",
						children: (() => Array.from({ length: 5 }).map((i, a) => {
							let o = a + 1;
							return /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => h(o),
								onMouseEnter: () => f(o),
								onMouseLeave: () => f(null),
								className: "p-1 focus:outline-none transition-transform hover:scale-110",
								children: /* @__PURE__ */ jsx(Heart, { className: cn("size-5 transition-colors", (d ?? p ?? 0) >= o ? "fill-primary text-primary" : "text-muted-foreground/30") })
							}, a);
						}))()
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx("label", {
							htmlFor: `comment-${a}`,
							className: "sr-only",
							children: "Comment"
						}), /* @__PURE__ */ jsx("textarea", {
							id: `comment-${a}`,
							value: _,
							onChange: (i) => y(i.target.value),
							placeholder: "What could be improved? (optional)",
							className: "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex justify-end gap-2",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "ghost",
							size: "sm",
							onClick: () => l(!1),
							children: "Cancel"
						}), /* @__PURE__ */ jsx(Button, {
							type: "submit",
							size: "sm",
							disabled: !p,
							children: "Submit"
						})]
					})
				]
			})
		})]
	});
}
function ChatMessages({ className: i }) {
	let { messages: a, isGenerating: o, rateResponse: s, voiceConfig: c } = useChatContext(), { displayMessages: l, isTyping: d } = useMessageDisplay({
		messages: a || [],
		isGenerating: o
	}), { containerRef: f, scrollToBottom: p, handleScroll: h, shouldAutoScroll: g, handleTouchStart: _, isScrollable: v } = useAutoScroll([l]), y = useCallback((i) => ({
		actions: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ jsx(CopyButton, {
					content: i.content,
					copyMessage: "Copied to clipboard!"
				}),
				i.content && /* @__PURE__ */ jsx(SpeakButton, {
					content: i.content,
					voiceConfig: c
				}),
				i.content && s && i.role === "assistant" && /* @__PURE__ */ jsx(Feedback, {
					messageId: i.id,
					onRateResponse: s,
					rating: i.rating,
					comment: i.comment
				})
			]
		}),
		isGenerating: o && i.role === "assistant" && !i.content
	}), [
		s,
		o,
		c
	]), b = l.length > 0;
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-col h-full w-full", i),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex-1 relative overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: cn("h-full w-full overflow-y-auto", b && "py-4"),
				ref: f,
				onScroll: h,
				onTouchStart: _,
				children: /* @__PURE__ */ jsx(MessageList, {
					messages: l,
					isTyping: d,
					messageOptions: y
				})
			}), v && !g && /* @__PURE__ */ jsx("div", {
				className: "absolute bottom-4 right-6 pointer-events-auto z-10",
				children: /* @__PURE__ */ jsx(Button, {
					onClick: p,
					className: "h-9 w-9 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg transition-all duration-200 hover:shadow-xl animate-in fade-in-0 slide-in-from-bottom-2",
					size: "icon",
					variant: "default",
					children: /* @__PURE__ */ jsx(ArrowDown, {})
				})
			})]
		})
	});
}
function e(i, a, o) {
	let s = (o) => i(o, ...a);
	return o === void 0 ? s : Object.assign(s, {
		lazy: o,
		lazyArgs: a
	});
}
function t(i, a, o) {
	let s = i.length - a.length;
	if (s === 0) return i(...a);
	if (s === 1) return e(i, a, o);
	throw Error("Wrong number of arguments");
}
function t$1(...i) {
	return t(n$1, i);
}
var n$1 = (i, a) => i.length >= a;
function n(...i) {
	return t(r, i);
}
function r(i, a) {
	if (!t$1(a, 1)) return { ...i };
	if (!t$1(a, 2)) {
		let { [a[0]]: o, ...s } = i;
		return s;
	}
	let o = { ...i };
	for (let i of a) delete o[i];
	return o;
}
const recordAudio = (function() {
	let i = async function(a) {
		try {
			let o = new MediaRecorder(a, { mimeType: "audio/webm;codecs=opus" }), s = [];
			return new Promise((a, c) => {
				o.ondataavailable = (i) => {
					i.data.size > 0 && s.push(i.data);
				}, o.onstop = () => {
					a(new Blob(s, { type: "audio/webm" }));
				}, o.onerror = () => {
					c(/* @__PURE__ */ Error("MediaRecorder error occurred"));
				}, o.start(1e3), i.currentRecorder = o;
			});
		} catch (i) {
			let a = i instanceof Error ? i.message : "Unknown error occurred";
			throw Error("Failed to start recording: " + a);
		}
	};
	return i.stop = () => {
		let a = i.currentRecorder;
		a && a.state !== "inactive" && a.stop(), delete i.currentRecorder;
	}, i;
})();
function useAudioRecording({ transcribeAudio: i, onTranscriptionComplete: a }) {
	let [o, s] = useState(!1), [c, l] = useState(!!i), [u, d] = useState(!1), [f, p] = useState(!1), [h, g] = useState(null), _ = useRef(null);
	useEffect(() => {
		(async () => {
			l(!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) && !!i);
		})();
	}, [i]);
	let v = async () => {
		d(!1), p(!0);
		try {
			recordAudio.stop();
			let o = await _.current;
			if (i) {
				let s = await i(o);
				a?.(s);
			}
		} catch (i) {
			console.error("Error transcribing audio:", i);
		} finally {
			p(!1), s(!1), h && (h.getTracks().forEach((i) => i.stop()), g(null)), _.current = null;
		}
	};
	return {
		isListening: o,
		isSpeechSupported: c,
		isRecording: u,
		isTranscribing: f,
		audioStream: h,
		toggleListening: async () => {
			if (o) await v();
			else try {
				s(!0), d(!0);
				let i = await navigator.mediaDevices.getUserMedia({ audio: !0 });
				g(i), _.current = recordAudio(i);
			} catch (i) {
				console.error("Error recording audio:", i), s(!1), d(!1), h && (h.getTracks().forEach((i) => i.stop()), g(null));
			}
		},
		stopRecording: v
	};
}
function useAutosizeTextArea({ ref: i, maxHeight: a = 2 ** 53 - 1, borderWidth: o = 0, dependencies: s }) {
	let c = useRef(null);
	useLayoutEffect(() => {
		if (!i.current) return;
		let s = i.current, l = o * 2;
		c.current === null && (c.current = s.scrollHeight - l), s.style.removeProperty("height");
		let u = s.scrollHeight, d = Math.min(u, a), f = Math.max(d, c.current);
		s.style.height = `${f + l}px`;
	}, [
		a,
		i,
		...s
	]);
}
var AUDIO_CONFIG = {
	FFT_SIZE: 512,
	SMOOTHING: .8,
	MIN_BAR_HEIGHT: 2,
	MIN_BAR_WIDTH: 2,
	BAR_SPACING: 1,
	COLOR: {
		MIN_INTENSITY: 100,
		MAX_INTENSITY: 255,
		INTENSITY_RANGE: 155
	}
};
function AudioVisualizer({ stream: i, isRecording: a, onClick: o }) {
	let s = useRef(null), c = useRef(null), l = useRef(null), u = useRef(0), d = useRef(null), f = () => {
		u.current && cancelAnimationFrame(u.current), c.current && c.current.close();
	};
	useEffect(() => f, []), useEffect(() => {
		i && a ? p() : f();
	}, [i, a]), useEffect(() => {
		let i = () => {
			if (s.current && d.current) {
				let i = d.current, a = s.current, o = window.devicePixelRatio || 1, c = i.getBoundingClientRect();
				a.width = (c.width - 2) * o, a.height = (c.height - 2) * o, a.style.width = `${c.width - 2}px`, a.style.height = `${c.height - 2}px`;
			}
		};
		return window.addEventListener("resize", i), i(), () => window.removeEventListener("resize", i);
	}, []);
	let p = async () => {
		try {
			let a = new AudioContext();
			c.current = a;
			let o = a.createAnalyser();
			o.fftSize = AUDIO_CONFIG.FFT_SIZE, o.smoothingTimeConstant = AUDIO_CONFIG.SMOOTHING, l.current = o, a.createMediaStreamSource(i).connect(o), _();
		} catch (i) {
			console.error("Error starting visualization:", i);
		}
	}, h = (i) => {
		let a = Math.floor(i * AUDIO_CONFIG.COLOR.INTENSITY_RANGE) + AUDIO_CONFIG.COLOR.MIN_INTENSITY;
		return `rgb(${a}, ${a}, ${a})`;
	}, g = (i, a, o, s, c, l) => {
		i.fillStyle = l, i.fillRect(a, o - c, s, c), i.fillRect(a, o, s, c);
	}, _ = () => {
		if (!a) return;
		let i = s.current, o = i?.getContext("2d");
		if (!i || !o || !l.current) return;
		let c = window.devicePixelRatio || 1;
		o.scale(c, c);
		let d = l.current, f = d.frequencyBinCount, p = new Uint8Array(f), _ = () => {
			u.current = requestAnimationFrame(_), d.getByteFrequencyData(p), o.clearRect(0, 0, i.width / c, i.height / c);
			let a = Math.max(AUDIO_CONFIG.MIN_BAR_WIDTH, i.width / c / f - AUDIO_CONFIG.BAR_SPACING), s = i.height / c / 2, l = 0;
			for (let i = 0; i < f; i++) {
				let c = p[i] / 255, u = Math.max(AUDIO_CONFIG.MIN_BAR_HEIGHT, c * s);
				g(o, l, s, a, u, h(c)), l += a + AUDIO_CONFIG.BAR_SPACING;
			}
		};
		_();
	};
	return /* @__PURE__ */ jsx("div", {
		ref: d,
		className: "h-full w-full cursor-pointer rounded-lg bg-background/80 backdrop-blur",
		onClick: o,
		children: /* @__PURE__ */ jsx("canvas", {
			ref: s,
			className: "h-full w-full"
		})
	});
}
function InterruptPrompt({ isOpen: i, close: a }) {
	return /* @__PURE__ */ jsx(AnimatePresence, { children: i && /* @__PURE__ */ jsxs(m.div, {
		initial: {
			top: 0,
			filter: "blur(5px)"
		},
		animate: {
			top: -40,
			filter: "blur(0px)",
			transition: {
				type: "spring",
				filter: { type: "tween" }
			}
		},
		exit: {
			top: 0,
			filter: "blur(5px)"
		},
		className: "absolute left-1/2 flex -translate-x-1/2 overflow-hidden whitespace-nowrap rounded-full border bg-background py-1 text-center text-sm text-muted-foreground",
		children: [/* @__PURE__ */ jsx("span", {
			className: "ml-2.5",
			children: "Press Enter again to interrupt"
		}), /* @__PURE__ */ jsx("button", {
			className: "ml-1 mr-2.5 flex items-center",
			type: "button",
			onClick: a,
			"aria-label": "Close",
			children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
		})]
	}) });
}
function PromptSuggestions({ append: i, suggestions: a }) {
	return /* @__PURE__ */ jsx("div", {
		className: "flex flex-wrap gap-1 px-4 py-2",
		children: a.map((a) => /* @__PURE__ */ jsx(Badge, {
			className: "cursor-pointer hover:scale-[0.99]",
			onClick: () => {
				i({
					role: "user",
					content: a
				});
			},
			children: /* @__PURE__ */ jsx("p", { children: a })
		}, a))
	});
}
var FilePreview = lazy(() => import("./file-preview-C-7eL_iv.js").then((i) => ({ default: i.FilePreview })));
function MessageInput({ placeholder: i = "Ask AI...", className: a, onKeyDown: o, submitOnEnter: s = !0, stop: c, isGenerating: l, enableInterrupt: d = !0, transcribeAudio: f, suggestions: p, append: h, isListening: g, startListening: _, stopListening: v, isSpeechSupported: y, ...x }) {
	let [S, C] = useState(!1), [w, T] = useState(!1), { isListening: E, isSpeechSupported: D, isRecording: O, isTranscribing: k, audioStream: A, toggleListening: j, stopRecording: M } = useAudioRecording({
		transcribeAudio: f,
		onTranscriptionComplete: (i) => {
			x.onChange?.({ target: { value: i } });
		}
	}), N = g ?? E, P = y ?? D, F = () => {
		g !== void 0 && _ && v ? g ? v() : _() : j();
	};
	useEffect(() => {
		l || T(!1);
	}, [l]);
	let I = (i) => {
		x.allowAttachments && x.setFiles((a) => a === null ? i : i === null ? a : [...a, ...i]);
	}, L = (i) => {
		x.allowAttachments === !0 && (i.preventDefault(), C(!0));
	}, R = (i) => {
		x.allowAttachments === !0 && (i.preventDefault(), C(!1));
	}, z = (i) => {
		if (C(!1), x.allowAttachments !== !0) return;
		i.preventDefault();
		let a = i.dataTransfer;
		a.files.length && I(Array.from(a.files));
	}, B = (i) => {
		let a = i.clipboardData?.items;
		if (!a) return;
		let o = i.clipboardData.getData("text");
		if (o && o.length > 500 && x.allowAttachments) {
			i.preventDefault();
			let a = new Blob([o], { type: "text/plain" });
			I([new File([a], "Pasted text", {
				type: "text/plain",
				lastModified: Date.now()
			})]);
			return;
		}
		let s = Array.from(a).map((i) => i.getAsFile()).filter((i) => i !== null);
		x.allowAttachments && s.length > 0 && I(s);
	}, V = (i) => {
		if (s && i.key === "Enter" && !i.shiftKey) {
			if (i.preventDefault(), l && c && d) {
				if (w) c(), T(!1), i.currentTarget.form?.requestSubmit();
				else if (x.value || x.allowAttachments && x.files?.length) {
					T(!0);
					return;
				}
			}
			i.currentTarget.form?.requestSubmit();
		}
		o?.(i);
	}, H = useRef(null), [U, W] = useState(0);
	useEffect(() => {
		H.current && W(H.current.offsetHeight);
	}, [x.value]);
	let G = x.allowAttachments && x.files && x.files.length > 0;
	return useAutosizeTextArea({
		ref: H,
		maxHeight: 200,
		borderWidth: 1,
		dependencies: [x.value, G]
	}), /* @__PURE__ */ jsxs("div", {
		className: "relative flex w-full",
		onDragOver: L,
		onDragLeave: R,
		onDrop: z,
		children: [
			d && /* @__PURE__ */ jsx(InterruptPrompt, {
				isOpen: w,
				close: () => T(!1)
			}),
			/* @__PURE__ */ jsx(RecordingPrompt, {
				isVisible: O,
				onStopRecording: M
			}),
			p && h && p.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "mb-2",
				children: /* @__PURE__ */ jsx(PromptSuggestions, {
					append: h,
					suggestions: p
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative flex w-full items-center space-x-2",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ jsx("textarea", {
						"aria-label": "Write your prompt here",
						placeholder: i,
						ref: H,
						onPaste: B,
						onKeyDown: V,
						className: cn("z-10 w-full grow resize-none rounded-lg border border-input bg-background/50 backdrop-blur-sm p-4 pr-28 text-sm ring-offset-background transition-all duration-200 placeholder:text-muted-foreground/70 focus-visible:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-background disabled:cursor-not-allowed disabled:opacity-50 shadow-sm", G && "pb-20", a),
						...x.allowAttachments ? n(x, [
							"allowAttachments",
							"files",
							"setFiles"
						]) : n(x, ["allowAttachments"])
					}), x.allowAttachments && /* @__PURE__ */ jsx("div", {
						className: "absolute inset-x-3 bottom-0 z-20 py-3",
						children: /* @__PURE__ */ jsx("div", {
							className: "flex space-x-3",
							children: /* @__PURE__ */ jsx(AnimatePresence, {
								mode: "popLayout",
								children: x.files?.map((i) => /* @__PURE__ */ jsx(Suspense, {
									fallback: /* @__PURE__ */ jsx("div", { className: "h-16 w-16 animate-pulse bg-muted rounded-xl" }),
									children: /* @__PURE__ */ jsx(FilePreview, {
										file: i,
										onRemove: () => {
											x.setFiles((a) => {
												if (!a) return null;
												let o = Array.from(a).filter((a) => a !== i);
												return o.length === 0 ? null : o;
											});
										}
									})
								}, i.name + String(i.lastModified)))
							})
						})
					})]
				})
			}),
			p && h && p.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "mt-2",
				children: /* @__PURE__ */ jsx(PromptSuggestions, {
					append: h,
					suggestions: p
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute right-3 top-3 z-20 flex gap-1",
				children: /* @__PURE__ */ jsxs(TooltipProvider, {
					delayDuration: 0,
					children: [
						x.allowAttachments && /* @__PURE__ */ jsx(AttachmentButton, { onClick: async () => {
							I(await showFileUploadDialog());
						} }),
						/* @__PURE__ */ jsx(VoiceInputButton, {
							isSupported: !!P,
							isListening: !!N,
							onClick: F
						}),
						/* @__PURE__ */ jsx(SubmitActionButton, {
							isGenerating: l,
							stop: c,
							disabled: x.value === "" || l
						})
					]
				})
			}),
			x.allowAttachments && /* @__PURE__ */ jsx(FileUploadOverlay, { isDragging: S }),
			/* @__PURE__ */ jsx(RecordingControls, {
				isRecording: O,
				isTranscribing: k,
				audioStream: A,
				textAreaHeight: U,
				onStopRecording: M
			})
		]
	});
}
MessageInput.displayName = "MessageInput";
function FileUploadOverlay({ isDragging: i }) {
	return /* @__PURE__ */ jsx(AnimatePresence, { children: i && /* @__PURE__ */ jsxs(m.div, {
		className: "pointer-events-none absolute inset-0 z-20 flex items-center justify-center space-x-2 rounded-xl border border-dashed border-border bg-background text-sm text-muted-foreground",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .2 },
		"aria-hidden": !0,
		children: [/* @__PURE__ */ jsx(Paperclip, {}), /* @__PURE__ */ jsx("span", { children: "Drop your files here to attach them." })]
	}) });
}
function showFileUploadDialog() {
	let i = document.createElement("input");
	return i.type = "file", i.multiple = !0, i.accept = "*/*", i.click(), new Promise((a) => {
		i.onchange = (i) => {
			let o = i.currentTarget.files;
			if (o) {
				a(Array.from(o));
				return;
			}
			a(null);
		};
	});
}
function TranscribingOverlay() {
	return /* @__PURE__ */ jsxs(m.div, {
		className: "flex h-full w-full flex-col items-center justify-center rounded-xl bg-background/80 backdrop-blur-sm",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .2 },
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }), /* @__PURE__ */ jsx(m.div, {
				className: "absolute inset-0 h-8 w-8 animate-pulse rounded-full bg-primary/20",
				initial: {
					scale: .8,
					opacity: 0
				},
				animate: {
					scale: 1.2,
					opacity: 1
				},
				transition: {
					duration: 1,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "easeInOut"
				}
			})]
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-4 text-sm font-medium text-muted-foreground",
			children: "Transcribing audio..."
		})]
	});
}
function RecordingPrompt({ isVisible: i, onStopRecording: a }) {
	return /* @__PURE__ */ jsx(AnimatePresence, { children: i && /* @__PURE__ */ jsx(m.div, {
		initial: {
			top: 0,
			filter: "blur(5px)"
		},
		animate: {
			top: -40,
			filter: "blur(0px)",
			transition: {
				type: "spring",
				filter: { type: "tween" }
			}
		},
		exit: {
			top: 0,
			filter: "blur(5px)"
		},
		className: "absolute left-1/2 flex -translate-x-1/2 cursor-pointer overflow-hidden whitespace-nowrap rounded-full border bg-background py-1 text-center text-sm text-muted-foreground",
		onClick: a,
		children: /* @__PURE__ */ jsxs("span", {
			className: "mx-2.5 flex items-center",
			children: [/* @__PURE__ */ jsx(Info, { className: "mr-2 h-3 w-3" }), "Click to finish recording"]
		})
	}) });
}
function RecordingControls({ isRecording: i, isTranscribing: a, audioStream: o, textAreaHeight: s, onStopRecording: c }) {
	return i ? /* @__PURE__ */ jsx("div", {
		className: "absolute inset-[1px] z-50 overflow-hidden rounded-xl",
		style: { height: s - 2 },
		children: /* @__PURE__ */ jsx(AudioVisualizer, {
			stream: o,
			isRecording: i,
			onClick: c
		})
	}) : a ? /* @__PURE__ */ jsx("div", {
		className: "absolute inset-[1px] z-50 overflow-hidden rounded-xl",
		style: { height: s - 2 },
		children: /* @__PURE__ */ jsx(TranscribingOverlay, {})
	}) : null;
}
function AttachmentButton({ onClick: i, className: a }) {
	return /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			type: "button",
			size: "icon",
			variant: "ghost",
			className: cn("h-8 w-8 text-muted-foreground hover:text-foreground", a),
			"aria-label": "Attach a file",
			onClick: i,
			children: /* @__PURE__ */ jsx(Paperclip, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: "Attach file" })] });
}
function VoiceInputButton({ isSupported: i, isListening: a, onClick: o }) {
	return i ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			type: "button",
			variant: "ghost",
			"aria-label": a ? "Stop recording" : "Voice input",
			size: "icon",
			onClick: o,
			className: cn("h-8 w-8 transition-all duration-200", a ? "bg-red-500/10 text-red-500 hover:bg-red-500/20" : "text-muted-foreground hover:text-foreground"),
			children: a ? /* @__PURE__ */ jsxs("span", {
				className: "relative flex h-3 w-3",
				children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-3 w-3 rounded-full bg-red-500" })]
			}) : /* @__PURE__ */ jsx(Mic, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: a ? "Stop recording" : "Use voice input" })] }) : null;
}
function SubmitActionButton({ isGenerating: i, stop: a, disabled: o }) {
	return i && a ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			type: "button",
			size: "icon",
			variant: "ghost",
			className: "h-8 w-8 text-muted-foreground hover:text-foreground",
			"aria-label": "Stop generating",
			onClick: a,
			children: /* @__PURE__ */ jsx(Square, { className: "h-3 w-3 animate-pulse fill-current" })
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: "Stop generating" })] }) : /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			type: "submit",
			size: "icon",
			className: cn("h-8 w-8 rounded-full transition-all duration-200", o ? "opacity-50" : "bg-primary text-primary-foreground shadow-sm"),
			"aria-label": "Send message",
			disabled: o,
			children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: "Send message" })] });
}
function createFileList(i) {
	let a = new DataTransfer();
	for (let o of Array.from(i)) a.items.add(o);
	return a.files;
}
var ChatForm = forwardRef(({ children: i, handleSubmit: a, className: o }, s) => {
	let [c, l] = useState(null);
	return /* @__PURE__ */ jsx("form", {
		ref: s,
		onSubmit: (i) => {
			if (!c) {
				a(i);
				return;
			}
			a(i, { experimental_attachments: createFileList(c) }), l(null);
		},
		className: o,
		children: i({
			files: c,
			setFiles: l
		})
	});
});
ChatForm.displayName = "ChatForm";
function ChatInput({ placeholder: i = "Hi, how can I help you?", className: a, transcribeAudio: o }) {
	let { messages: s, input: c, setInput: l, sendMessage: d, stopGeneration: f, setMessages: p, isGenerating: h, isListening: g, startListening: _, stopListening: v, isSpeechSupported: y } = useChatContext(), b = useCallback(async (i) => {
		i?.preventDefault?.();
		let a = c.trim();
		a && (l(""), await d(a));
	}, [
		c,
		l,
		d
	]), x = useCallback(() => {
		if (f(), !p) return;
		let i = [...s], a = i.slice().reverse().find((i) => i.role === "assistant");
		if (!a) return;
		let o = !1, c = { ...a };
		if (a.toolInvocations) {
			let i = a.toolInvocations.map((i) => i.state === "call" ? (o = !0, {
				...i,
				state: "result",
				result: {
					content: "Tool execution was cancelled",
					__cancelled: !0
				}
			}) : i);
			o && (c = {
				...c,
				toolInvocations: i
			});
		}
		let l = a.parts;
		if (l?.length) {
			let i = l.map((i) => {
				let a = i;
				return a.type === "tool-invocation" && a.toolInvocation?.state === "call" ? (o = !0, {
					...a,
					toolInvocation: {
						...a.toolInvocation,
						state: "result",
						result: {
							content: "Tool execution was cancelled",
							__cancelled: !0
						}
					}
				}) : i;
			});
			o && (c = {
				...c,
				parts: i
			});
		}
		if (o) {
			let o = i.findIndex((i) => i.id === a.id);
			o !== -1 && (i[o] = c, p(i));
		}
	}, [
		f,
		p,
		s
	]), S = useCallback((i) => {
		l(i.target.value);
	}, [l]);
	return /* @__PURE__ */ jsx(ChatForm, {
		className: cn("chat-input-container", s.length > 0 ? "py-4" : "py-2", a),
		isPending: h,
		handleSubmit: b,
		children: ({ files: a, setFiles: s }) => /* @__PURE__ */ jsx(MessageInput, {
			value: c,
			onChange: S,
			allowAttachments: !0,
			files: a,
			setFiles: s,
			stop: x,
			isGenerating: h,
			transcribeAudio: o,
			placeholder: i,
			isListening: g,
			startListening: _,
			stopListening: v,
			isSpeechSupported: y
		})
	});
}
function ChatSuggestions() {
	let { suggestions: i, sendMessage: a } = useChatContext(), o = useCallback((i) => {
		a(i.content);
	}, [a]);
	return i.length === 0 ? null : /* @__PURE__ */ jsx(PromptSuggestions, {
		append: o,
		suggestions: i
	});
}
const Chat = {
	Root: ChatRoot,
	Messages: ChatMessages,
	Input: ChatInput,
	Suggestions: ChatSuggestions
};
/* @__NO_SIDE_EFFECTS__ */
function createSlot(i) {
	let a = /* @__PURE__ */ createSlotClone(i), o = React$1.forwardRef((i, o) => {
		let { children: s, ...c } = i, l = React$1.Children.toArray(s), u = l.find(isSlottable);
		if (u) {
			let i = u.props.children, s = l.map((a) => a === u ? React$1.Children.count(i) > 1 ? React$1.Children.only(null) : React$1.isValidElement(i) ? i.props.children : null : a);
			return /* @__PURE__ */ jsx(a, {
				...c,
				ref: o,
				children: React$1.isValidElement(i) ? React$1.cloneElement(i, void 0, s) : null
			});
		}
		return /* @__PURE__ */ jsx(a, {
			...c,
			ref: o,
			children: s
		});
	});
	return o.displayName = `${i}.Slot`, o;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(i) {
	let a = React$1.forwardRef((i, a) => {
		let { children: o, ...s } = i;
		if (React$1.isValidElement(o)) {
			let i = getElementRef(o), c = mergeProps(s, o.props);
			return o.type !== React$1.Fragment && (c.ref = a ? composeRefs(a, i) : i), React$1.cloneElement(o, c);
		}
		return React$1.Children.count(o) > 1 ? React$1.Children.only(null) : null;
	});
	return a.displayName = `${i}.SlotClone`, a;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(i) {
	return React$1.isValidElement(i) && typeof i.type == "function" && "__radixId" in i.type && i.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(i, a) {
	let o = { ...a };
	for (let s in a) {
		let c = i[s], l = a[s];
		/^on[A-Z]/.test(s) ? c && l ? o[s] = (...i) => {
			let a = l(...i);
			return c(...i), a;
		} : c && (o[s] = c) : s === "style" ? o[s] = {
			...c,
			...l
		} : s === "className" && (o[s] = [c, l].filter(Boolean).join(" "));
	}
	return {
		...i,
		...o
	};
}
function getElementRef(i) {
	let a = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning;
	return o ? i.ref : (a = Object.getOwnPropertyDescriptor(i, "ref")?.get, o = a && "isReactWarning" in a && a.isReactWarning, o ? i.props.ref : i.props.ref || i.ref);
}
var DIALOG_NAME = "Dialog", [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME), [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME), Dialog$1 = (i) => {
	let { __scopeDialog: a, children: o, open: s, defaultOpen: c, onOpenChange: l, modal: u = !0 } = i, d = React$1.useRef(null), f = React$1.useRef(null), [p, g] = useControllableState({
		prop: s,
		defaultProp: c ?? !1,
		onChange: l,
		caller: DIALOG_NAME
	});
	return /* @__PURE__ */ jsx(DialogProvider, {
		scope: a,
		triggerRef: d,
		contentRef: f,
		contentId: useId$1(),
		titleId: useId$1(),
		descriptionId: useId$1(),
		open: p,
		onOpenChange: g,
		onOpenToggle: React$1.useCallback(() => g((i) => !i), [g]),
		modal: u,
		children: o
	});
};
Dialog$1.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger", DialogTrigger$1 = React$1.forwardRef((i, s) => {
	let { __scopeDialog: c, ...l } = i, u = useDialogContext(TRIGGER_NAME, c), d = useComposedRefs(s, u.triggerRef);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": u.open,
		"aria-controls": u.contentId,
		"data-state": getState(u.open),
		...l,
		ref: d,
		onClick: composeEventHandlers(i.onClick, u.onOpenToggle)
	});
});
DialogTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal", [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, { forceMount: void 0 }), DialogPortal$1 = (i) => {
	let { __scopeDialog: a, forceMount: o, children: s, container: c } = i, l = useDialogContext(PORTAL_NAME, a);
	return /* @__PURE__ */ jsx(PortalProvider, {
		scope: a,
		forceMount: o,
		children: React$1.Children.map(s, (i) => /* @__PURE__ */ jsx(Presence, {
			present: o || l.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: c,
				children: i
			})
		}))
	});
};
DialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay", DialogOverlay$1 = React$1.forwardRef((i, a) => {
	let o = usePortalContext(OVERLAY_NAME, i.__scopeDialog), { forceMount: s = o.forceMount, ...c } = i, l = useDialogContext(OVERLAY_NAME, i.__scopeDialog);
	return l.modal ? /* @__PURE__ */ jsx(Presence, {
		present: s || l.open,
		children: /* @__PURE__ */ jsx(DialogOverlayImpl, {
			...c,
			ref: a
		})
	}) : null;
});
DialogOverlay$1.displayName = OVERLAY_NAME;
var Slot = /* @__PURE__ */ createSlot("DialogOverlay.RemoveScroll"), DialogOverlayImpl = React$1.forwardRef((i, a) => {
	let { __scopeDialog: o, ...s } = i, c = useDialogContext(OVERLAY_NAME, o);
	return /* @__PURE__ */ jsx(Combination_default, {
		as: Slot,
		allowPinchZoom: !0,
		shards: [c.contentRef],
		children: /* @__PURE__ */ jsx(Primitive.div, {
			"data-state": getState(c.open),
			...s,
			ref: a,
			style: {
				pointerEvents: "auto",
				...s.style
			}
		})
	});
}), CONTENT_NAME = "DialogContent", DialogContent$1 = React$1.forwardRef((i, a) => {
	let o = usePortalContext(CONTENT_NAME, i.__scopeDialog), { forceMount: s = o.forceMount, ...c } = i, l = useDialogContext(CONTENT_NAME, i.__scopeDialog);
	return /* @__PURE__ */ jsx(Presence, {
		present: s || l.open,
		children: l.modal ? /* @__PURE__ */ jsx(DialogContentModal, {
			...c,
			ref: a
		}) : /* @__PURE__ */ jsx(DialogContentNonModal, {
			...c,
			ref: a
		})
	});
});
DialogContent$1.displayName = CONTENT_NAME;
var DialogContentModal = React$1.forwardRef((i, s) => {
	let c = useDialogContext(CONTENT_NAME, i.__scopeDialog), l = React$1.useRef(null), u = useComposedRefs(s, c.contentRef, l);
	return React$1.useEffect(() => {
		let i = l.current;
		if (i) return hideOthers(i);
	}, []), /* @__PURE__ */ jsx(DialogContentImpl, {
		...i,
		ref: u,
		trapFocus: c.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: composeEventHandlers(i.onCloseAutoFocus, (i) => {
			i.preventDefault(), c.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(i.onPointerDownOutside, (i) => {
			let a = i.detail.originalEvent, o = a.button === 0 && a.ctrlKey === !0;
			(a.button === 2 || o) && i.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(i.onFocusOutside, (i) => i.preventDefault())
	});
}), DialogContentNonModal = React$1.forwardRef((i, a) => {
	let o = useDialogContext(CONTENT_NAME, i.__scopeDialog), s = React$1.useRef(!1), c = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(DialogContentImpl, {
		...i,
		ref: a,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (a) => {
			i.onCloseAutoFocus?.(a), a.defaultPrevented || (s.current || o.triggerRef.current?.focus(), a.preventDefault()), s.current = !1, c.current = !1;
		},
		onInteractOutside: (a) => {
			i.onInteractOutside?.(a), a.defaultPrevented || (s.current = !0, a.detail.originalEvent.type === "pointerdown" && (c.current = !0));
			let l = a.target;
			o.triggerRef.current?.contains(l) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && c.current && a.preventDefault();
		}
	});
}), DialogContentImpl = React$1.forwardRef((i, o) => {
	let { __scopeDialog: s, trapFocus: c, onOpenAutoFocus: l, onCloseAutoFocus: u, ...f } = i, p = useDialogContext(CONTENT_NAME, s), h = React$1.useRef(null), g = useComposedRefs(o, h);
	return useFocusGuards(), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(FocusScope, {
		asChild: !0,
		loop: !0,
		trapped: c,
		onMountAutoFocus: l,
		onUnmountAutoFocus: u,
		children: /* @__PURE__ */ jsx(DismissableLayer, {
			role: "dialog",
			id: p.contentId,
			"aria-describedby": p.descriptionId,
			"aria-labelledby": p.titleId,
			"data-state": getState(p.open),
			...f,
			ref: g,
			onDismiss: () => p.onOpenChange(!1)
		})
	}), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(TitleWarning, { titleId: p.titleId }), /* @__PURE__ */ jsx(DescriptionWarning, {
		contentRef: h,
		descriptionId: p.descriptionId
	})] })] });
}), TITLE_NAME = "DialogTitle", DialogTitle$1 = React$1.forwardRef((i, a) => {
	let { __scopeDialog: o, ...s } = i, c = useDialogContext(TITLE_NAME, o);
	return /* @__PURE__ */ jsx(Primitive.h2, {
		id: c.titleId,
		...s,
		ref: a
	});
});
DialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription", DialogDescription$1 = React$1.forwardRef((i, a) => {
	let { __scopeDialog: o, ...s } = i, c = useDialogContext(DESCRIPTION_NAME, o);
	return /* @__PURE__ */ jsx(Primitive.p, {
		id: c.descriptionId,
		...s,
		ref: a
	});
});
DialogDescription$1.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose", DialogClose$1 = React$1.forwardRef((i, a) => {
	let { __scopeDialog: s, ...c } = i, l = useDialogContext(CLOSE_NAME, s);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		...c,
		ref: a,
		onClick: composeEventHandlers(i.onClick, () => l.onOpenChange(!1))
	});
});
DialogClose$1.displayName = CLOSE_NAME;
function getState(i) {
	return i ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning", [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
	contentName: CONTENT_NAME,
	titleName: TITLE_NAME,
	docsSlug: "dialog"
}), TitleWarning = ({ titleId: i }) => {
	let a = useWarningContext(TITLE_WARNING_NAME), o = `\`${a.contentName}\` requires a \`${a.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${a.docsSlug}`;
	return React$1.useEffect(() => {
		i && (document.getElementById(i) || console.error(o));
	}, [o, i]), null;
}, DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning", DescriptionWarning = ({ contentRef: i, descriptionId: a }) => {
	let o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${useWarningContext(DESCRIPTION_WARNING_NAME).contentName}}.`;
	return React$1.useEffect(() => {
		let s = i.current?.getAttribute("aria-describedby");
		a && s && (document.getElementById(a) || console.warn(o));
	}, [
		o,
		i,
		a
	]), null;
}, Root = Dialog$1, Trigger = DialogTrigger$1, Portal$1 = DialogPortal$1, Overlay = DialogOverlay$1, Content = DialogContent$1, Title = DialogTitle$1, Description = DialogDescription$1, Close = DialogClose$1, Sheet = Root, SheetPortal = Portal$1, SheetOverlay = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(Overlay, {
	ref: o,
	className: cn("chatbot-theme fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", i),
	...a
}));
SheetOverlay.displayName = Overlay.displayName;
var SheetContent = React$1.forwardRef(({ side: i = "right", className: a, children: o, ...s }, c) => /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(Content, {
	ref: c,
	className: cn("chatbot-theme fixed z-50 gap-4 border bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-300", i === "right" && "inset-y-0 right-0 h-full w-full max-w-sm data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", i === "left" && "inset-y-0 left-0 h-full w-full max-w-sm data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", a),
	...s,
	children: [o, /* @__PURE__ */ jsxs(Close, {
		className: "ring-offset-background focus:ring-ring data-[state=open]:bg-muted absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",
		children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = Content.displayName;
function SheetHeader({ className: i, ...a }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-col gap-y-1.5 border-b border-border/40 pb-3 text-left", i),
		...a
	});
}
function SheetTitle({ className: i, ...a }) {
	return /* @__PURE__ */ jsx(Title, {
		className: cn("text-lg font-semibold leading-none tracking-tight", i),
		...a
	});
}
function SheetDescription({ className: i, ...a }) {
	return /* @__PURE__ */ jsx(Description, {
		className: cn("text-muted-foreground text-sm", i),
		...a
	});
}
function Dialog({ ...i }) {
	return /* @__PURE__ */ jsx(Root, {
		"data-slot": "dialog",
		...i
	});
}
var DialogTrigger = React$1.forwardRef(({ ...i }, a) => /* @__PURE__ */ jsx(Trigger, {
	"data-slot": "dialog-trigger",
	...i,
	ref: a
}));
DialogTrigger.displayName = Trigger.displayName;
var DialogPortal = Portal$1, DialogOverlay = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(Overlay, {
	ref: o,
	"data-slot": "dialog-overlay",
	className: cn("chatbot-theme fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", i),
	...a
}));
DialogOverlay.displayName = Overlay.displayName;
var DialogContent = React$1.forwardRef(({ className: i, children: a, ...o }, s) => /* @__PURE__ */ jsxs(DialogPortal, {
	"data-slot": "dialog-portal",
	children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(Content, {
		ref: s,
		"data-slot": "dialog-content",
		className: cn("chatbot-theme bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:max-w-lg", i),
		...o,
		children: [a, /* @__PURE__ */ jsxs(Close, {
			className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",
			children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})]
}));
DialogContent.displayName = Content.displayName;
function DialogHeader({ className: i, ...a }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-header",
		className: cn("flex flex-col gap-y-1.5 text-center sm:text-left", i),
		...a
	});
}
function DialogFooter({ className: i, ...a }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-footer",
		className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", i),
		...a
	});
}
var DialogTitle = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(Title, {
	ref: o,
	"data-slot": "dialog-title",
	className: cn("text-lg font-semibold leading-none tracking-tight", i),
	...a
}));
DialogTitle.displayName = Title.displayName;
var DialogDescription = React$1.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ jsx(Description, {
	ref: o,
	"data-slot": "dialog-description",
	className: cn("text-muted-foreground text-sm", i),
	...a
}));
DialogDescription.displayName = Description.displayName;
var createStoreImpl = (i) => {
	let a, o = /* @__PURE__ */ new Set(), s = (i, s) => {
		let c = typeof i == "function" ? i(a) : i;
		if (!Object.is(c, a)) {
			let i = a;
			a = s ?? (typeof c != "object" || !c) ? c : Object.assign({}, a, c), o.forEach((o) => o(a, i));
		}
	}, c = () => a, l = {
		setState: s,
		getState: c,
		getInitialState: () => u,
		subscribe: (i) => (o.add(i), () => o.delete(i))
	}, u = a = i(s, c, l);
	return l;
}, createStore = ((i) => i ? createStoreImpl(i) : createStoreImpl), identity = (i) => i;
function useStore(i, a = identity) {
	let o = React.useSyncExternalStore(i.subscribe, React.useCallback(() => a(i.getState()), [i, a]), React.useCallback(() => a(i.getInitialState()), [i, a]));
	return React.useDebugValue(o), o;
}
var createImpl = (i) => {
	let a = createStore(i), o = (i) => useStore(a, i);
	return Object.assign(o, a), o;
};
const useChatbotStore = ((i) => i ? createImpl(i) : createImpl)((i) => ({
	isMaximized: !1,
	setIsMaximized: (a) => i({ isMaximized: a }),
	historySheetOpen: !1,
	setHistorySheetOpen: (a) => i({ historySheetOpen: a }),
	selectedAgent: "",
	setSelectedAgent: (a) => i({ selectedAgent: a }),
	selectedModel: "",
	setSelectedModel: (a) => i({ selectedModel: a }),
	currentThreadId: void 0,
	setCurrentThreadId: (a) => i({ currentThreadId: a }),
	threadList: [],
	setThreadList: (a) => i((i) => ({ threadList: typeof a == "function" ? a(i.threadList) : a })),
	totalThreads: 0,
	setTotalThreads: (a) => i({ totalThreads: a }),
	threadsLoading: !1,
	setThreadsLoading: (a) => i({ threadsLoading: a }),
	autoSpeak: !1,
	setAutoSpeak: (a) => i({ autoSpeak: a }),
	showDisclaimer: !1,
	setShowDisclaimer: (a) => i({ showDisclaimer: a }),
	metadata: null,
	setMetadata: (a) => i({ metadata: a }),
	searchInput: "",
	setSearchInput: (a) => i({ searchInput: a }),
	searchQuery: "",
	setSearchQuery: (a) => i({ searchQuery: a }),
	loadingMore: !1,
	setLoadingMore: (a) => i({ loadingMore: a }),
	threadToDelete: null,
	setThreadToDelete: (a) => i({ threadToDelete: a }),
	isDeleting: !1,
	setIsDeleting: (a) => i({ isDeleting: a })
}));
var PAGE_SIZE = 20, SEARCH_DEBOUNCE_MS = 300;
function formatThreadDate(i) {
	if (!i) return "";
	try {
		let a = new Date(i);
		if (Number.isNaN(a.getTime())) return "";
		let o = /* @__PURE__ */ new Date(), s = Math.floor((o.getTime() - a.getTime()) / (1e3 * 60 * 60 * 24));
		return s === 0 && a.getDate() === o.getDate() ? a.toLocaleTimeString(void 0, {
			hour: "numeric",
			minute: "2-digit"
		}) : s === 1 || s === 0 && a.getDate() !== o.getDate() ? "Yesterday" : s < 7 ? a.toLocaleDateString(void 0, { weekday: "short" }) : a.toLocaleDateString(void 0, {
			month: "short",
			day: "numeric"
		});
	} catch {
		return "";
	}
}
function groupThreadsByDate(i) {
	let a = [
		{
			title: "Today",
			items: []
		},
		{
			title: "Yesterday",
			items: []
		},
		{
			title: "Previous 7 Days",
			items: []
		},
		{
			title: "Older",
			items: []
		}
	], o = /* @__PURE__ */ new Date();
	o.setHours(0, 0, 0, 0);
	let s = new Date(o);
	s.setDate(s.getDate() - 1);
	let c = new Date(o);
	return c.setDate(c.getDate() - 7), i.forEach((i) => {
		if (!i.updated_at) {
			a[3].items.push(i);
			return;
		}
		let l = new Date(i.updated_at);
		l.setHours(0, 0, 0, 0), l.getTime() === o.getTime() ? a[0].items.push(i) : l.getTime() === s.getTime() ? a[1].items.push(i) : l.getTime() >= c.getTime() ? a[2].items.push(i) : a[3].items.push(i);
	}), a.filter((i) => i.items.length > 0);
}
function ChatHistorySheet({ open: i, onOpenChange: a, userId: o, threadList: s, setThreadList: c, totalThreads: l, setTotalThreads: d, threadsLoading: f, setThreadsLoading: p, currentThreadId: h, onSelectThread: g, getThreads: _, deleteThread: v }) {
	let { searchInput: y, setSearchInput: b, searchQuery: x, setSearchQuery: S, loadingMore: C, setLoadingMore: T, threadToDelete: E, setThreadToDelete: D, isDeleting: O, setIsDeleting: k } = useChatbotStore(), A = useRef(null), j = useRef(!1), M = useRef(s.length);
	M.current = s.length, useEffect(() => {
		i || (b(""), S(""));
	}, [i]), useEffect(() => {
		if (!y.trim()) {
			S("");
			return;
		}
		let i = setTimeout(() => S(y.trim()), SEARCH_DEBOUNCE_MS);
		return () => clearTimeout(i);
	}, [y]);
	let N = useCallback((i) => {
		a(i), i || (c([]), d(0), b(""), S(""), D(null));
	}, [
		a,
		c,
		d
	]);
	useEffect(() => {
		if (!i || !o?.trim()) return;
		let a = !1;
		return p(!0), c([]), d(0), _({
			limit: PAGE_SIZE,
			offset: 0,
			search: x
		}).then(({ threads: i, total: o }) => {
			a || (c(i), d(o ?? 0));
		}).finally(() => {
			a || p(!1);
		}), () => {
			a = !0;
		};
	}, [
		i,
		o,
		x,
		_,
		c,
		d,
		p
	]), useEffect(() => {
		if (!i || !o?.trim() || f || s.length >= l || l <= 0) return;
		let a = A.current;
		if (!a) return;
		let u = new IntersectionObserver((i) => {
			if (!i[0]?.isIntersecting || j.current) return;
			let a = M.current;
			a >= l || (j.current = !0, T(!0), _({
				limit: PAGE_SIZE,
				offset: a,
				search: x || void 0
			}).then(({ threads: i }) => {
				c((a) => [...a, ...i]);
			}).finally(() => {
				j.current = !1, T(!1);
			}));
		}, {
			root: null,
			rootMargin: "100px",
			threshold: 0
		});
		return u.observe(a), () => u.disconnect();
	}, [
		i,
		o,
		f,
		s.length,
		l,
		x,
		_,
		c
	]);
	let P = useCallback(async () => {
		if (!(!E || !v)) {
			k(!0);
			try {
				await v(E), c((i) => i.filter((i) => i.thread_id !== E)), d(Math.max(0, l - 1)), D(null);
			} catch (i) {
				console.error("Failed to delete thread", i);
			} finally {
				k(!1);
			}
		}
	}, [
		E,
		v,
		c,
		l,
		d
	]);
	return /* @__PURE__ */ jsxs(Sheet, {
		open: i,
		onOpenChange: N,
		children: [/* @__PURE__ */ jsxs(SheetContent, {
			side: "right",
			className: "flex flex-col",
			onInteractOutside: (i) => i.preventDefault(),
			children: [
				/* @__PURE__ */ jsxs(SheetHeader, { children: [/* @__PURE__ */ jsx(SheetTitle, { children: "Chat history" }), /* @__PURE__ */ jsx(SheetDescription, { children: o?.trim() ? "Select a conversation to load." : "Sign in to see your conversations." })] }),
				o?.trim() ? /* @__PURE__ */ jsxs("div", {
					className: "flex items-center bg-muted/50 rounded-lg px-2 py-1.5 focus-within:bg-background focus-within:ring-1 focus-within:ring-ring transition-all",
					children: [/* @__PURE__ */ jsx(Search, { className: "h-4 w-4 shrink-0 text-muted-foreground ml-1" }), /* @__PURE__ */ jsx("input", {
						type: "search",
						placeholder: "Search...",
						value: y,
						onChange: (i) => b(i.target.value),
						className: "flex-1 bg-transparent border-0 outline-none text-sm ml-2 placeholder:text-muted-foreground py-0.5",
						"aria-label": "Search conversations"
					})]
				}) : null,
				/* @__PURE__ */ jsx("div", {
					className: "flex-1 overflow-y-auto min-h-0 scrollbar-thin scrollbar-thumb-muted-foreground/20 hover:scrollbar-thumb-muted-foreground/40",
					children: o?.trim() ? f ? /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center gap-2 py-8 text-muted-foreground",
						children: [/* @__PURE__ */ jsx(LoaderCircle, { className: "h-5 w-5 animate-spin" }), /* @__PURE__ */ jsx("span", { children: "Loading conversations…" })]
					}) : s.length === 0 ? /* @__PURE__ */ jsx("p", {
						className: "text-center text-sm text-muted-foreground py-8",
						children: x ? "No conversations match your search." : "No conversations yet."
					}) : /* @__PURE__ */ jsxs("div", {
						className: "py-2",
						children: [/* @__PURE__ */ jsx(AnimatePresence, {
							mode: "popLayout",
							initial: !1,
							children: groupThreadsByDate(s).map((i, a) => /* @__PURE__ */ jsxs(m.div, {
								className: "mb-6 last:mb-0",
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: a * .05 },
								children: [/* @__PURE__ */ jsx("h3", {
									className: "px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
									children: i.title
								}), /* @__PURE__ */ jsx("ul", {
									className: "space-y-1",
									children: i.items.map((i) => {
										let a = (i.preview || "").replace(/```[\s\S]*?```|`([^`]*)`|!\[.*?\]\(.*?\)|\[(.*?)\]\(.*?\)|(\*\*|__|\*|_|~~)(.*?)\3|^#{1,6}\s*|^>\s*|^\s*[-*+]\s+|^\s*\d+\.\s+|<[^>]+>/gm, "$1$2$4").trim() || "New Conversation", o = formatThreadDate(i.updated_at);
										return /* @__PURE__ */ jsxs(m.li, {
											className: "group flex relative list-none",
											layout: !0,
											initial: {
												opacity: 0,
												scale: .98
											},
											animate: {
												opacity: 1,
												scale: 1
											},
											exit: {
												opacity: 0,
												scale: .98
											},
											children: [/* @__PURE__ */ jsx(Button, {
												variant: "ghost",
												className: cn("w-full justify-start font-normal h-auto p-3 relative transition-all duration-200 cursor-pointer", i.thread_id === h ? "bg-muted/80 shadow-sm" : "hover:bg-muted"),
												onClick: () => g(i.thread_id),
												children: /* @__PURE__ */ jsx("div", {
													className: "flex items-start gap-3 w-full overflow-hidden",
													children: /* @__PURE__ */ jsxs("div", {
														className: "flex flex-col items-start overflow-hidden w-full text-left",
														children: [/* @__PURE__ */ jsx("span", {
															className: cn("truncate w-full text-sm", i.thread_id === h ? "font-semibold" : "font-medium"),
															children: a
														}), o && /* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-1.5 mt-0.5 text-[11px] text-muted-foreground",
															children: [/* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }), /* @__PURE__ */ jsx("span", { children: o })]
														})]
													})
												})
											}), v && /* @__PURE__ */ jsx(Button, {
												variant: "ghost",
												size: "icon",
												className: "absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-all focus:opacity-100 z-10",
												onClick: (a) => {
													a.stopPropagation(), D(i.thread_id);
												},
												"aria-label": "Delete conversation",
												children: /* @__PURE__ */ jsx(Trash2, {})
											})]
										}, i.thread_id);
									})
								})]
							}, i.title))
						}), s.length < l ? /* @__PURE__ */ jsx("div", {
							ref: A,
							className: "py-4 flex justify-center",
							children: C ? /* @__PURE__ */ jsx(LoaderCircle, { className: "h-4 w-4 animate-spin text-muted-foreground" }) : null
						}) : null]
					}) : null
				})
			]
		}), /* @__PURE__ */ jsx(Dialog, {
			open: !!E,
			onOpenChange: (i) => !i && !O && D(null),
			children: /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Delete conversation" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Are you sure you want to delete this conversation? This action cannot be undone." })] }), /* @__PURE__ */ jsxs(DialogFooter, {
				className: "mt-4 flex sm:justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					disabled: O,
					onClick: () => D(null),
					children: "Cancel"
				}), /* @__PURE__ */ jsxs(Button, {
					variant: "destructive",
					disabled: O,
					onClick: P,
					className: "mt-2 sm:mt-0",
					children: [O ? /* @__PURE__ */ jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : null, "Delete"]
				})]
			})] })
		})]
	});
}
var DISCLAIMER = "\nThis content is generated by an artificial intelligence. While we strive for accuracy, the AI may occasionally produce incorrect or biased information. \n\n**Important Notes:**\n- Please verify critical information.\n- The AI does not have real-time access to personal data unless shared in this session.\n- Responses are based on training data and specific portfolio context.\n\nBy using this chatbot, you agree to our terms of service regarding AI-generated content.\n", DisclaimerModal = memo(({ disclaimer: i, onClose: a }) => /* @__PURE__ */ jsxs("div", {
	className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
	children: [/* @__PURE__ */ jsx(m.div, {
		className: "absolute inset-0 bg-background/80 backdrop-blur-sm",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: a
	}), /* @__PURE__ */ jsxs(m.div, {
		className: "relative z-[70] w-full max-w-md rounded-xl border bg-background p-6 shadow-2xl",
		initial: {
			opacity: 0,
			scale: .95,
			y: 12
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .95,
			y: 12
		},
		role: "dialog",
		"aria-modal": "true",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mb-4 flex items-center justify-between border-b pb-2",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-lg font-bold",
					children: "Disclaimer"
				}), /* @__PURE__ */ jsx(Button, {
					variant: "ghost",
					size: "icon",
					onClick: a,
					"aria-label": "Close dialog",
					children: /* @__PURE__ */ jsx(X, {})
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar text-sm",
				children: /* @__PURE__ */ jsx(LazyMarkdownRenderer, { children: i })
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "mt-6 flex justify-end",
				children: /* @__PURE__ */ jsx(Button, {
					onClick: a,
					children: "Understood"
				})
			})
		]
	})]
}));
DisclaimerModal.displayName = "DisclaimerModal";
function Footer({ disclaimer: i = DISCLAIMER, subtitle: a }) {
	let [o, s] = useState(!1), c = useCallback(() => s(!0), []), l = useCallback(() => s(!1), []);
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t bg-muted/50 px-6 py-3 flex items-center justify-between",
		children: [
			/* @__PURE__ */ jsx("button", {
				onClick: c,
				className: "text-xs text-muted-foreground hover:text-primary cursor-pointer hover:underline transition-colors font-medium",
				children: "Terms & Conditions"
			}),
			a ? /* @__PURE__ */ jsx("div", {
				className: "text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/60",
				children: a
			}) : /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/60",
				children: [/* @__PURE__ */ jsx("span", { children: "Powered by" }), /* @__PURE__ */ jsx("span", {
					className: "text-primary/70",
					children: "ChatUI"
				})]
			}),
			/* @__PURE__ */ jsx(AnimatePresence, { children: o && /* @__PURE__ */ jsx(DisclaimerModal, {
				disclaimer: i,
				onClose: l
			}) })
		]
	});
}
function useVoice(i = {}) {
	let { config: a, onTranscript: o, onSpeechStart: s, onSpeechEnd: c, onError: l } = i, [u, d] = useState(!1), [f, p] = useState(!1), [h, g] = useState(""), [_, v] = useState(""), [y, b] = useState(null), [x, S] = useState([]), [C, w] = useState(null), [T, E] = useState({
		...defaultVoiceConfig,
		...a
	}), [D, k] = useState(() => getVoiceSupport()), A = useRef(null), j = useRef(null);
	useEffect(() => {
		let i = getVoiceSupport();
		if (k(i), i.speechRecognition && (A.current = new SpeechRecognitionManager(T), A.current.onStart = () => {
			d(!0), b(null), s?.();
		}, A.current.onEnd = () => {
			d(!1), c?.();
		}, A.current.onError = (i) => {
			b(i), d(!1), l?.(i);
		}, A.current.onResult = (i, a) => {
			a ? (g((a) => a + i), v("")) : v(i), o?.(i, a);
		}), i.speechSynthesis) {
			j.current = new SpeechSynthesisManager(T), j.current.onStart = () => {
				p(!0);
			}, j.current.onEnd = () => {
				p(!1);
			}, j.current.onError = (i) => {
				b(i), p(!1);
			};
			let i = () => {
				let i = j.current?.getVoices() || [];
				if (S(i), !C && i.length > 0) {
					let a = i.filter((i) => i.lang.toLowerCase().startsWith(T.lang.toLowerCase().split("-")[0]));
					a.length > 0 && w(a[0]);
				}
			};
			i(), typeof window < "u" && window.speechSynthesis && (window.speechSynthesis.onvoiceschanged = i);
		}
		return () => {
			A.current?.destroy(), j.current?.destroy();
		};
	}, []);
	let M = useCallback((i) => {
		E((a) => {
			let o = {
				...a,
				...i
			};
			return A.current?.updateConfig(o), j.current?.updateConfig(o), o;
		});
	}, []), N = useCallback(() => {
		b(null), v(""), A.current?.start();
	}, []), F = useCallback(() => {
		A.current?.stop();
	}, []), I = useCallback(() => {
		u ? F() : N();
	}, [
		u,
		N,
		F
	]), R = useCallback(() => {
		g(""), v("");
	}, []), z = useCallback((i) => {
		b(null);
		let a = stripMarkdownForSpeech(i);
		C && j.current?.updateConfig({ voiceURI: C.voiceURI }), j.current?.speak(a);
	}, [C]), V = useCallback(() => {
		j.current?.stop();
	}, []), U = useCallback(() => {
		j.current?.pause();
	}, []), W = useCallback(() => {
		j.current?.resume();
	}, []), G = useCallback((i) => {
		w(i), i && M({ voiceURI: i.voiceURI });
	}, [M]);
	return {
		isListening: u,
		isSpeaking: f,
		transcript: h,
		interimTranscript: _,
		error: y,
		isRecognitionSupported: D.speechRecognition,
		isSynthesisSupported: D.speechSynthesis,
		startListening: N,
		stopListening: F,
		toggleListening: I,
		clearTranscript: R,
		speak: z,
		stopSpeaking: V,
		pauseSpeaking: U,
		resumeSpeaking: W,
		availableVoices: x,
		selectedVoice: C,
		setSelectedVoice: G,
		voiceConfig: T,
		updateConfig: M
	};
}
function Disclaimer({ onAccept: i, open: a }) {
	return /* @__PURE__ */ jsx(AnimatePresence, { children: a && /* @__PURE__ */ jsx(m.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "absolute inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-6",
		children: /* @__PURE__ */ jsxs(m.div, {
			initial: {
				scale: .95,
				opacity: 0,
				y: 10
			},
			animate: {
				scale: 1,
				opacity: 1,
				y: 0
			},
			exit: {
				scale: .95,
				opacity: 0,
				y: 10
			},
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 300
			},
			className: "bg-card border border-border shadow-2xl rounded-2xl p-6 max-w-[320px] w-full space-y-5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center text-center space-y-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "p-3 bg-primary/10 rounded-full text-primary",
						children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-8 w-8" })
					}), /* @__PURE__ */ jsx("h2", {
						className: "text-lg font-bold tracking-tight",
						children: "Welcome"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3 text-center",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground leading-relaxed",
						children: "This AI assistant is designed to help you explore my portfolio."
					}), /* @__PURE__ */ jsx("div", {
						className: "text-center w-full bg-muted/50 rounded-lg p-3 text-xs text-muted-foreground text-left border border-border/50",
						children: "We use local storage to save your preferences for a better experience."
					})]
				}),
				/* @__PURE__ */ jsx(Button, {
					onClick: i,
					className: "w-full font-medium shadow-primary/20 shadow-lg",
					children: "Accept & Continue"
				})
			]
		})
	}) });
}
var MemoizedChatMessages = memo(Chat.Messages), MemoizedChatInput = memo(Chat.Input), MemoizedChatSuggestions = memo(Chat.Suggestions);
function ChatbotLayout({ effectiveAgent: i, showHeader: a, headerTitle: o, headerTitleUrl: s, headerSubtitle: c, avatar: l, allowMaximize: u, onClose: d, onRefresh: f, onHome: p, showFooter: h, footerContent: g, footerSubtitle: _, placeholder: v, starterMessage: y, userId: b, voiceConfig: x, onVoiceConfigChange: S, availableVoices: C, selectedVoice: w, onVoiceChange: T, autoSpeak: E, onAutoSpeakChange: D, deleteThread: O, onMaximizeToggle: k, isMaximized: A }) {
	let { selectedAgent: j, setSelectedAgent: M, selectedModel: N, setSelectedModel: P, currentThreadId: F, setCurrentThreadId: I, historySheetOpen: L, setHistorySheetOpen: R, threadList: z, setThreadList: B, totalThreads: V, setTotalThreads: H, threadsLoading: U, setThreadsLoading: W, isMaximized: G, setIsMaximized: K } = useChatbotStore(), q = A ?? G, { metadata: Yi, metadataLoading: Xi, backendStatus: J, clearChat: Y, loadThread: Zi, getThreads: Z, setThreadId: Q, deleteThread: Qi } = useChatContext(), $i = O ?? Qi, ea = useCallback((i) => {
		Y({ keepStarter: !!y }), I(void 0), Q(void 0), M(i);
	}, [
		Y,
		y,
		M,
		I,
		Q
	]), ta = useCallback(() => {
		Y({
			keepStarter: !!y,
			createNewThread: !0
		}), M(""), I(void 0), Q(void 0);
	}, [
		Y,
		y,
		M,
		I,
		Q
	]), $ = f ?? ta, na = useCallback(() => R(!0), [R]), ra = useCallback((i) => {
		R(!1), Zi(i, b), I(i), Q(i);
	}, [
		Zi,
		R,
		I,
		Q,
		b
	]), ia = useCallback(() => {
		let i = !q;
		K(i), k?.(i);
	}, [
		q,
		K,
		k
	]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		a && /* @__PURE__ */ jsx(Header, {
			metadata: Yi,
			selectedAgent: j,
			selectedModel: N,
			onAgentChange: ea,
			onModelChange: P,
			onClose: d,
			onRefresh: $,
			onHome: p,
			onHistory: b?.trim() ? na : void 0,
			voiceConfig: x,
			onVoiceConfigChange: S,
			availableVoices: C,
			selectedVoice: w,
			onVoiceChange: T,
			autoSpeak: E,
			onAutoSpeakChange: D,
			isMaximized: q,
			onMaximize: u ? ia : void 0,
			title: o,
			titleUrl: s,
			subtitle: c,
			avatar: l,
			backendStatus: J
		}),
		/* @__PURE__ */ jsx(ChatHistorySheet, {
			open: L,
			onOpenChange: R,
			userId: b,
			threadList: z,
			setThreadList: B,
			totalThreads: V,
			setTotalThreads: H,
			threadsLoading: U,
			setThreadsLoading: W,
			currentThreadId: F,
			onSelectThread: ra,
			onNewChat: $,
			getThreads: Z,
			deleteThread: $i
		}),
		/* @__PURE__ */ jsx("div", {
			className: "flex-1 overflow-hidden flex flex-col",
			children: i ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
				/* @__PURE__ */ jsx(MemoizedChatMessages, { className: "flex-1 min-h-0" }),
				/* @__PURE__ */ jsx(MemoizedChatSuggestions, {}),
				/* @__PURE__ */ jsx(MemoizedChatInput, { placeholder: v })
			] }) : /* @__PURE__ */ jsx(AgentSelector, {
				agents: Yi?.agents ?? [],
				loading: Xi,
				onSelect: M
			})
		}),
		h && /* @__PURE__ */ jsx(Footer, {
			disclaimer: g,
			subtitle: _
		})
	] });
}
function Chatbot({ url: i, agent: a, model: o, placeholder: s = "Hi, how can I help you?", threadId: c, userId: l, apiKey: d, stream: f = !0, className: p, header: h = {}, footer: g = {}, starter: _ = {}, isMaximized: v }) {
	let { show: y = !0, title: b, titleUrl: x, subtitle: S, avatar: C, allowMaximize: w = !1, onMaximizeToggle: T, onClose: E, onRefresh: D, onHome: O } = h, { show: k = !0, text: A, subtitle: j } = g, { message: M, suggestions: N } = _, P = useChatbotStore((i) => i.isMaximized), F = useChatbotStore((i) => i.setIsMaximized), I = v ?? P, L = useChatbotStore((i) => i.selectedAgent), R = useChatbotStore((i) => i.setSelectedAgent), z = useChatbotStore((i) => i.selectedModel), B = useChatbotStore((i) => i.setSelectedModel), V = useChatbotStore((i) => i.currentThreadId), H = useChatbotStore((i) => i.setCurrentThreadId);
	useEffect(() => {
		a !== void 0 && R(a);
	}, [a, R]), useEffect(() => {
		o !== void 0 && B(o);
	}, [o, B]), useEffect(() => {
		v !== void 0 && F(v);
	}, [v, F]);
	let { isListening: U, startListening: W, stopListening: G, speak: K, availableVoices: q, selectedVoice: Yi, setSelectedVoice: Xi, voiceConfig: J, updateConfig: Y, isRecognitionSupported: Zi } = useVoice(), Z = useChatbotStore((i) => i.autoSpeak), Q = useChatbotStore((i) => i.setAutoSpeak), Qi = useChatbotStore((i) => i.showDisclaimer), $i = useChatbotStore((i) => i.setShowDisclaimer);
	useEffect(() => {
		let i = localStorage.getItem("voice-config");
		if (i) try {
			Y(JSON.parse(i));
		} catch (i) {
			console.error("Failed to load voice config", i);
		}
		let a = localStorage.getItem("auto-speak");
		a && Q(a === "true"), localStorage.getItem("chatbot-consent") || $i(!0);
	}, [Y]);
	let ta = useCallback(() => {
		localStorage.setItem("chatbot-consent", "true"), $i(!1);
	}, []);
	useEffect(() => {
		localStorage.setItem("voice-config", JSON.stringify(J));
	}, [J]), useEffect(() => {
		localStorage.setItem("auto-speak", String(Z));
	}, [Z]);
	let $ = useChatbotStore((i) => i.metadata), ra = useChatbotStore((i) => i.setMetadata), ia = useCallback((i) => {
		ra(i), z || B(i.default_model);
	}, [z, B]), aa = useMemo(() => N === void 0 ? $?.agents?.find((i) => i.key === L)?.prompts ?? [] : N, [
		N,
		$?.agents,
		L
	]), oa = L || V && $?.default_agent || "", sa = useMemo(() => ({
		url: i,
		agent: oa || void 0,
		model: z || void 0,
		threadId: V ?? c,
		userId: l,
		stream: f,
		starterMessage: M,
		starterSuggestions: N,
		apiKey: d,
		onStreamEnd: (i) => {
			Z && i && K && K(i);
		}
	}), [
		i,
		L,
		z,
		V,
		c,
		l,
		f,
		M,
		N,
		Z,
		d,
		K
	]);
	return useEffect(() => {
		c != null && H(c);
	}, [c]), useEffect(() => {
		V && !L && $?.default_agent && R($.default_agent);
	}, [
		V,
		L,
		$?.default_agent
	]), /* @__PURE__ */ jsxs("div", {
		className: cn("chatbot-theme flex flex-col h-full transition-all duration-300 ease-in-out relative", p, I && "fixed inset-0 z-50 m-0 h-full max-h-none w-full max-w-none rounded-none border-0"),
		children: [/* @__PURE__ */ jsx(Disclaimer, {
			open: Qi,
			onAccept: ta
		}), /* @__PURE__ */ jsx(Chat.Root, {
			config: sa,
			initialSuggestions: aa,
			voiceConfig: J,
			isListening: U,
			startListening: W,
			stopListening: G,
			isSpeechSupported: Zi,
			onMetadata: ia,
			children: /* @__PURE__ */ jsx(ChatbotLayout, {
				effectiveAgent: oa,
				showHeader: y,
				headerTitle: b,
				headerTitleUrl: x,
				headerSubtitle: S,
				avatar: C,
				allowMaximize: w,
				onClose: E,
				onRefresh: D,
				onHome: O,
				showFooter: k,
				footerContent: A,
				footerSubtitle: j,
				placeholder: s,
				starterMessage: M,
				userId: l,
				voiceConfig: J,
				onVoiceConfigChange: Y,
				availableVoices: q,
				selectedVoice: Yi,
				onVoiceChange: Xi,
				autoSpeak: Z,
				onAutoSpeakChange: Q,
				onMaximizeToggle: T,
				isMaximized: I
			})
		})]
	});
}
function FullChatbot(i) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("w-full h-screen flex flex-col", i.className),
		children: /* @__PURE__ */ jsx(Chatbot, { ...i })
	});
}
function useIsMobile(i) {
	let [a, o] = useState(() => typeof window > "u" ? !1 : window.innerWidth < i || window.innerHeight < i);
	return useEffect(() => {
		let a = () => {
			o(window.innerWidth < Math.max(768, i) || window.innerHeight < Math.max(640, i));
		};
		return window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
	}, [i]), a;
}
var loadFeatures = () => import("./es-CYnnK4-W.js").then((i) => i.domAnimation), positionClasses = {
	"bottom-right": "bottom-4 right-4",
	"bottom-left": "bottom-4 left-4",
	"top-right": "top-4 right-4",
	"top-left": "top-4 left-4"
};
function PopupChatbot({ buttonClassName: i, buttonStyle: a, popupClassName: o, children: s, position: c = "bottom-right", width: l = 450, height: d = 600, tooltip: f, tooltipDelay: p = 0, defaultOpen: h = !1, ..._ }) {
	let [y, x] = useState(h), [C, w] = useState(!1), T = useRef(null), E = useIsMobile(Number(l)), D = E || C, O = typeof l == "number" ? `${l}px` : l, k = typeof d == "number" ? `${d}px` : d, A = useCallback((i) => {
		E || w(i);
	}, [E]);
	return /* @__PURE__ */ jsxs(LazyMotion, {
		features: loadFeatures,
		children: [f && !y ? /* @__PURE__ */ jsx(TooltipProvider, {
			delayDuration: p,
			children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ jsx(m.button, {
					onClick: () => x(!y),
					className: cn("chatbot-theme fixed z-50 flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors", positionClasses[c], i),
					whileHover: { scale: 1.05 },
					whileTap: { scale: .95 },
					style: {
						width: "56px",
						height: "56px",
						...a
					},
					children: s || /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
				})
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "top",
				className: "chatbot-theme",
				children: /* @__PURE__ */ jsx("p", { children: f })
			})] })
		}) : /* @__PURE__ */ jsx(m.button, {
			onClick: () => x(!y),
			className: cn("chatbot-theme fixed z-50 flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors", positionClasses[c], y && "hidden", i),
			whileHover: { scale: 1.05 },
			whileTap: { scale: .95 },
			style: {
				width: "56px",
				height: "56px",
				...a
			},
			children: s || /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: y && /* @__PURE__ */ jsx(m.div, {
			ref: T,
			initial: {
				opacity: 0,
				scale: .8,
				y: 20
			},
			animate: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				scale: .8,
				y: 20
			},
			transition: { duration: .2 },
			className: cn("chatbot-theme fixed z-40 bg-background overflow-hidden border shadow-2xl transition-all duration-300 ease-in-out", D ? "inset-0 z-50 h-dvh w-dvw max-h-dvh max-w-dvw rounded-none m-0 border-0" : cn("rounded-lg", positionClasses[c]), o),
			style: D ? {} : {
				width: O,
				height: k
			},
			children: /* @__PURE__ */ jsx(Chatbot, {
				..._,
				header: {
					..._.header,
					onClose: () => x(!1),
					allowMaximize: !E,
					onMaximizeToggle: A
				},
				className: "h-full",
				isMaximized: D
			})
		}) })]
	});
}
export { Chat, ChatProvider, ChatService, Chatbot, FullChatbot, Header, PopupChatbot, clearChatServiceMetadataCache, useChatContext, useChatRuntime };
