import { a as loadFeatures, o as LazyContext } from "./create-proxy-CwJMlGNV.js";
import { t as createLucideIcon } from "./createLucideIcon-C1Qbi7jU.js";
import { A as composeRefs, C as useCallbackRef, D as cva, E as cn, S as DismissableLayer, T as Button, a as stripMarkdownForSpeech, b as useId$1, c as TooltipProvider, d as useControllableState, f as Presence, i as getVoiceSupport, j as useComposedRefs, l as TooltipTrigger, n as SpeechSynthesisManager, o as Tooltip, p as Portal, r as defaultVoiceConfig, s as TooltipContent, t as SpeechRecognitionManager, w as composeEventHandlers, x as useLayoutEffect2 } from "./voice.sdk-8j8W_pOO.js";
import { _ as Sparkles, c as PopoverTrigger, d as FocusScope, f as useFocusGuards, g as Volume2, h as Zap, l as Combination_default, m as Primitive$2, o as Popover, p as Badge, s as PopoverContent, t as Slider, u as hideOthers, v as ChevronRight } from "./slider-CwGa_Tbj.js";
import { c as createDomVisualElement, i as gestureAnimations, l as AnimatePresence, n as useSpeechStore, r as create, s as animations, t as CopyButton } from "./copy-button-CQLnee1j.js";
import { n as X, t as m } from "./proxy-CYnmdcit.js";
import * as React$1 from "react";
import React, { Suspense, createContext, forwardRef, lazy, memo, useCallback, useContext, useEffect, useId, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { flushSync } from "react-dom";
import { useSyncExternalStore } from "use-sync-external-store/shim";
var isIterable = (e) => Symbol.iterator in e, hasIterableEntries = (e) => "entries" in e, compareEntries = (e, t) => {
	let n = e instanceof Map ? e : new Map(e.entries()), r = t instanceof Map ? t : new Map(t.entries());
	if (n.size !== r.size) return !1;
	for (let [e, t] of n) if (!r.has(e) || !Object.is(t, r.get(e))) return !1;
	return !0;
}, compareIterables = (e, t) => {
	let n = e[Symbol.iterator](), r = t[Symbol.iterator](), i = n.next(), a = r.next();
	for (; !i.done && !a.done;) {
		if (!Object.is(i.value, a.value)) return !1;
		i = n.next(), a = r.next();
	}
	return !!i.done && !!a.done;
};
function shallow(e, t) {
	return Object.is(e, t) ? !0 : typeof e != "object" || !e || typeof t != "object" || !t || Object.getPrototypeOf(e) !== Object.getPrototypeOf(t) ? !1 : isIterable(e) && isIterable(t) ? hasIterableEntries(e) && hasIterableEntries(t) ? compareEntries(e, t) : compareIterables(e, t) : compareEntries({ entries: () => Object.entries(e) }, { entries: () => Object.entries(t) });
}
function useShallow(e) {
	let t = React.useRef(void 0);
	return (n) => {
		let r = e(n);
		return shallow(t.current, r) ? t.current : t.current = r;
	};
}
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
}]]), Pause = createLucideIcon("pause", [["rect", {
	x: "14",
	y: "3",
	width: "5",
	height: "18",
	rx: "1",
	key: "kaeet6"
}], ["rect", {
	x: "5",
	y: "3",
	width: "5",
	height: "18",
	rx: "1",
	key: "1wsw3u"
}]]), Play = createLucideIcon("play", [["path", {
	d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
	key: "10ikf1"
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
function createContextScope$2(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = React$1.createContext(r);
		i.displayName = t + "Context";
		let a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = React$1.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ jsx(s.Provider, {
				value: c,
				children: r
			});
		};
		o.displayName = t + "Provider";
		function s(n, o) {
			let s = o?.[e]?.[a] || i, c = React$1.useContext(s);
			if (c) return c;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => React$1.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return React$1.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, composeContextScopes$2(i, ...t)];
}
function composeContextScopes$2(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = () => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
function useIsHydrated() {
	return useSyncExternalStore(subscribe, () => !0, () => !1);
}
function subscribe() {
	return () => {};
}
var AVATAR_NAME = "Avatar", [createAvatarContext, createAvatarScope] = createContextScope$2(AVATAR_NAME), [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME), Avatar$1 = React$1.forwardRef((e, t) => {
	let { __scopeAvatar: n, ...r } = e, [i, a] = React$1.useState("idle");
	return /* @__PURE__ */ jsx(AvatarProvider, {
		scope: n,
		imageLoadingStatus: i,
		onImageLoadingStatusChange: a,
		children: /* @__PURE__ */ jsx(Primitive$2.span, {
			...r,
			ref: t
		})
	});
});
Avatar$1.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage", AvatarImage$1 = React$1.forwardRef((e, t) => {
	let { __scopeAvatar: n, src: r, onLoadingStatusChange: a = () => {}, ...o } = e, s = useAvatarContext(IMAGE_NAME, n), c = useImageLoadingStatus(r, o), l = useCallbackRef((e) => {
		a(e), s.onImageLoadingStatusChange(e);
	});
	return useLayoutEffect2(() => {
		c !== "idle" && l(c);
	}, [c, l]), c === "loaded" ? /* @__PURE__ */ jsx(Primitive$2.img, {
		...o,
		ref: t,
		src: r
	}) : null;
});
AvatarImage$1.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback", AvatarFallback$1 = React$1.forwardRef((e, t) => {
	let { __scopeAvatar: n, delayMs: r, ...i } = e, a = useAvatarContext(FALLBACK_NAME, n), [o, s] = React$1.useState(r === void 0);
	return React$1.useEffect(() => {
		if (r !== void 0) {
			let e = window.setTimeout(() => s(!0), r);
			return () => window.clearTimeout(e);
		}
	}, [r]), o && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ jsx(Primitive$2.span, {
		...i,
		ref: t
	}) : null;
});
AvatarFallback$1.displayName = FALLBACK_NAME;
function resolveLoadingStatus(e, t) {
	return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function useImageLoadingStatus(e, { referrerPolicy: t, crossOrigin: n }) {
	let r = useIsHydrated(), i = React$1.useRef(null), a = (() => r ? (i.current ||= new window.Image(), i.current) : null)(), [o, s] = React$1.useState(() => resolveLoadingStatus(a, e));
	return useLayoutEffect2(() => {
		s(resolveLoadingStatus(a, e));
	}, [a, e]), useLayoutEffect2(() => {
		let e = (e) => () => {
			s(e);
		};
		if (!a) return;
		let r = e("loaded"), i = e("error");
		return a.addEventListener("load", r), a.addEventListener("error", i), t && (a.referrerPolicy = t), typeof n == "string" && (a.crossOrigin = n), () => {
			a.removeEventListener("load", r), a.removeEventListener("error", i);
		};
	}, [
		a,
		n,
		t
	]), o;
}
var Root$2 = Avatar$1, Image = AvatarImage$1, Fallback = AvatarFallback$1;
function Avatar({ className: e, ...t }) {
	return /* @__PURE__ */ jsx(Root$2, {
		"data-slot": "avatar",
		className: cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", e),
		...t
	});
}
function AvatarImage({ className: e, ...t }) {
	return /* @__PURE__ */ jsx(Image, {
		"data-slot": "avatar-image",
		className: cn("aspect-square size-full", e),
		...t
	});
}
function AvatarFallback({ className: e, ...t }) {
	return /* @__PURE__ */ jsx(Fallback, {
		"data-slot": "avatar-fallback",
		className: cn("bg-muted flex size-full items-center justify-center rounded-full", e),
		...t
	});
}
var Setting = lazy(() => import("./setting-Xhg3Z3eh.js"));
function TitleContent({ avatar: e, title: t, backendStatus: n, subtitle: r, selectedAgent: i }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-3 group cursor-pointer",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsxs(Avatar, {
				className: "size-9 border border-border/40 shadow-sm transition-transform group-hover:scale-105",
				children: [/* @__PURE__ */ jsx(AvatarImage, { src: e }), /* @__PURE__ */ jsx(AvatarFallback, { children: t })]
			}), /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ jsx("span", { className: cn("absolute bottom-0 right-0 size-2.5 rounded-full ring-2 ring-background shadow-sm transition-colors duration-500", n?.status === "ok" ? "bg-emerald-500 animate-pulse" : n?.status === "error" ? "bg-rose-500" : "bg-amber-400 animate-bounce") })
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "bottom",
				align: "center",
				className: "text-[10px] py-1 px-2",
				children: n?.status === "ok" ? "Backend Online" : n?.status === "error" ? "Backend Offline" : "Checking Status..."
			})] })]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-0.5",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-sm font-semibold text-foreground/90 tracking-tight leading-none group-hover:text-primary transition-colors",
				children: t
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[11px] text-muted-foreground font-medium leading-none capitalize",
				children: r || i.replace(/-/g, " ")
			})]
		})]
	});
}
function Header({ metadata: e, selectedAgent: t, selectedModel: n, onAgentChange: r, onModelChange: i, onClose: a, onRefresh: s, onHome: l, onHistory: u, className: f, title: p = "Portfolio Assistant", titleUrl: h, subtitle: g, voiceConfig: v, onVoiceConfigChange: b, availableVoices: x, selectedVoice: C, onVoiceChange: w, autoSpeak: T, onAutoSpeakChange: E, isMaximized: D, onMaximize: O, avatar: k, backendStatus: A }) {
	let [j, M] = useState(!1);
	return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 300,
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("flex items-center justify-between border-b border-border/40 bg-background/80 p-3.5 backdrop-blur-md supports-[backdrop-filter]:bg-background/60", f),
			children: [h ? /* @__PURE__ */ jsx("a", {
				href: h,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "focus-visible:outline-none rounded-md",
				children: /* @__PURE__ */ jsx(TitleContent, {
					avatar: k,
					title: p,
					backendStatus: A,
					subtitle: g,
					selectedAgent: t
				})
			}) : /* @__PURE__ */ jsx(TitleContent, {
				avatar: k,
				title: p,
				backendStatus: A,
				subtitle: g,
				selectedAgent: t
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1",
				children: [
					l && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "icon",
							onClick: l,
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
							metadata: e,
							selectedAgent: t,
							selectedModel: n,
							onAgentChange: r,
							onModelChange: i,
							voiceConfig: v,
							onVoiceConfigChange: b,
							availableVoices: x,
							selectedVoice: C,
							onVoiceChange: w,
							autoSpeak: T,
							onAutoSpeakChange: E
						})
					}),
					u && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "icon",
							onClick: u,
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
					s && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => {
								j || (M(!0), s?.(), setTimeout(() => {
									M(!1);
								}, 1e3));
							},
							disabled: j,
							className: "rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200",
							children: [/* @__PURE__ */ jsx(RefreshCw, { className: cn("h-4 w-4", j && "animate-spin text-primary") }), /* @__PURE__ */ jsx("span", {
								className: "sr-only",
								children: "Restart Chat"
							})]
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						sideOffset: 8,
						children: "Restart Chat"
					})] }),
					O && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "icon",
							onClick: O,
							className: "rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200",
							children: [jsx(D ? Minimize2 : Maximize2, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
								className: "sr-only",
								children: D ? "Minimize" : "Maximize"
							})]
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						sideOffset: 8,
						children: D ? "Minimize View" : "Maximize View"
					})] }),
					a && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							size: "icon",
							onClick: a,
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
function getAgentIcon(e) {
	return AGENT_ICONS[e % AGENT_ICONS.length];
}
function SkeletonGrid({ className: e }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-1 flex-col overflow-auto p-5 sm:p-6", e),
		children: /* @__PURE__ */ jsx("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: Array.from({ length: 4 }).map((e, t) => /* @__PURE__ */ jsxs("div", {
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
			}, t))
		})
	});
}
var AgentCard = memo(function({ agent: e, index: t, onSelect: n, selected: r }) {
	let i = getAgentIcon(t), a = (t) => {
		(t.key === "Enter" || t.key === " ") && (t.preventDefault(), n(e.key));
	};
	return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
		type: "button",
		"aria-pressed": r,
		onClick: () => n(e.key),
		onKeyDown: a,
		className: cn("group relative flex min-h-[88px] w-full flex-col items-start gap-2 rounded-2xl border bg-card p-4 text-left shadow-sm transition-all duration-200", "hover:border-primary/30 hover:bg-primary/[0.06] hover:shadow-md", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background", r ? "border-primary/80 bg-primary/[0.04] shadow" : "border-border/60"),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full items-start gap-3",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: cn("flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors", "bg-primary/10 text-primary group-hover:bg-primary/15 group-hover:text-primary"),
					children: /* @__PURE__ */ jsx(i, { className: "size-5" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ jsx("span", {
						className: cn("block font-semibold text-foreground transition-colors group-hover:text-primary capitalize"),
						children: e.key.replace(/-/g, " ")
					}), e.description ? /* @__PURE__ */ jsx("span", {
						className: "mt-0.5 line-clamp-2 block text-[13px] leading-snug text-muted-foreground",
						children: e.description
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
function AgentSelector({ agents: e, loading: t, onSelect: n, selectedKey: r, className: i }) {
	let a = useId(), s = useCallback((e) => {
		n(e);
	}, [n]);
	return t ? /* @__PURE__ */ jsx(SkeletonGrid, { className: i }) : e?.length ? /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-col gap-2 overflow-auto p-5 sm:p-6 h-full", i),
		children: /* @__PURE__ */ jsx("ul", {
			id: a,
			role: "list",
			className: "grid gap-2",
			children: e.map((e, t) => /* @__PURE__ */ jsx(AgentCard, {
				agent: e,
				index: t,
				onSelect: s,
				selected: r === e.key
			}, e.key))
		})
	}) : /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center", i),
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
function getCachedMetadata(e) {
	let t = metadataCache.get(e);
	return t?.data && Date.now() - t.timestamp < CACHE_TTL ? t.data : null;
}
function setCachedMetadata(e, t) {
	metadataCache.set(e, {
		data: t,
		timestamp: Date.now()
	});
}
function clearChatServiceMetadataCache() {
	metadataCache.clear();
}
function normalizeStreamEvent(e) {
	return e.type === "message" ? {
		type: "message",
		content: e.content
	} : e.type === "token" ? {
		type: "token",
		content: e.content
	} : e.type === "error" ? {
		type: "error",
		content: e.content
	} : e.type === "update" || e.node ? {
		type: "update",
		node: e.node,
		updates: e.updates ?? {},
		content: e.updates ?? e
	} : null;
}
var ChatService = class {
	constructor(e) {
		this.abortController = null, this.config = e;
	}
	getHeaders() {
		let e = { "Content-Type": "application/json" };
		return this.config.apiKey && (e.Authorization = `Bearer ${this.config.apiKey}`), e;
	}
	getMetadataFromCache() {
		return getCachedMetadata(this.config.baseUrl);
	}
	async getMetadata(e = !1) {
		if (!e) {
			let e = getCachedMetadata(this.config.baseUrl);
			if (e) return e;
		}
		let t = metadataCache.get(this.config.baseUrl);
		if (t?.promise) try {
			return await t.promise;
		} catch {}
		let n = (async () => {
			let e = await fetch(`${this.config.baseUrl}/info`, { headers: this.getHeaders() });
			if (!e.ok) throw Error(`Failed to fetch metadata: ${e.statusText}`);
			return await e.json();
		})(), r = metadataCache.get(this.config.baseUrl) ?? {
			data: null,
			timestamp: 0
		};
		metadataCache.set(this.config.baseUrl, {
			...r,
			promise: n,
			timestamp: 0,
			data: r.data
		});
		let i = await n;
		return setCachedMetadata(this.config.baseUrl, i), i;
	}
	async healthCheck() {
		try {
			let e = await fetch(`${this.config.baseUrl}/health`, { headers: this.getHeaders() });
			if (!e.ok) return {
				status: "error",
				details: { code: e.status }
			};
			let t = await e.json();
			return {
				status: t.status === "ok" ? "ok" : "error",
				details: t
			};
		} catch (e) {
			return {
				status: "error",
				details: { error: e instanceof Error ? e.message : "Network error" }
			};
		}
	}
	async invoke(e, t = {}) {
		let n = t.agent ?? this.config.defaultAgent, r = `${this.config.baseUrl}/${n}/invoke`, i = {
			message: e,
			model: t.model ?? this.config.defaultModel,
			thread_id: t.threadId,
			user_id: t.userId
		}, a = await fetch(r, {
			method: "POST",
			headers: this.getHeaders(),
			body: JSON.stringify(i)
		});
		if (!a.ok) throw Error(`Invoke failed: ${a.statusText}`);
		return await a.json();
	}
	async *stream(e, t) {
		this.abortController && this.abortController.abort(), this.abortController = new AbortController();
		let n = t.agent ?? this.config.defaultAgent, r = `${this.config.baseUrl}/${n}/stream`, i = {
			message: e,
			...(t.model ?? this.config.defaultModel) && { model: t.model ?? this.config.defaultModel },
			...t.threadId && { thread_id: t.threadId },
			...t.userId && { user_id: t.userId },
			stream_tokens: t.streamTokens ?? !0
		};
		try {
			let e = await fetch(r, {
				method: "POST",
				headers: this.getHeaders(),
				body: JSON.stringify(i),
				signal: this.abortController.signal
			});
			if (!e.ok) {
				let t = `Stream failed: ${e.statusText}`;
				try {
					let n = await e.json();
					if (n.detail !== void 0) {
						let e = n.detail;
						t = Array.isArray(e) ? `Stream failed: ${e.map((e) => typeof e == "object" && e && "msg" in e ? `${e.loc?.join(".") ?? "field"}: ${e.msg}` : JSON.stringify(e)).join(", ")}` : `Stream failed: ${typeof e == "string" ? e : JSON.stringify(e)}`;
					}
				} catch {}
				throw Error(t);
			}
			let t = e.body?.getReader();
			if (!t) throw Error("No response body");
			let n = new TextDecoder(), a = "";
			try {
				for (;;) {
					let { done: e, value: r } = await t.read();
					if (e) break;
					a += n.decode(r, { stream: !0 });
					let i = a.split("\n\n");
					a = i.pop() ?? "";
					for (let e of i) {
						if (!e.startsWith("data: ")) continue;
						let t = e.slice(6);
						if (t === "[DONE]") {
							yield { type: "done" };
							return;
						}
						try {
							let e = normalizeStreamEvent(JSON.parse(t));
							e && (yield e);
						} catch (e) {
							console.error("Error parsing SSE data:", e);
						}
					}
				}
			} finally {
				this.abortController = null;
			}
		} catch (e) {
			if (this.abortController = null, e instanceof Error && e.name === "AbortError") return;
			yield {
				type: "error",
				content: e instanceof Error ? e.message : "Stream error"
			};
		}
	}
	abortStream() {
		this.abortController &&= (this.abortController.abort(), null);
	}
	async sendFeedback(e, t, n, r) {
		let i = await fetch(`${this.config.baseUrl}/feedback`, {
			method: "POST",
			headers: this.getHeaders(),
			body: JSON.stringify({
				run_id: e,
				key: t,
				score: n,
				kwargs: r
			})
		});
		if (!i.ok) throw Error(`Failed to send feedback: ${i.statusText}`);
		return i.json();
	}
	async deleteThread(e, t) {
		let n = t?.trim();
		if (!n) throw Error("User ID is required to delete a thread");
		let r = new URLSearchParams({
			user_id: n,
			thread_id: e
		}), i = await fetch(`${this.config.baseUrl}/history?${r.toString()}`, {
			method: "DELETE",
			headers: this.getHeaders()
		});
		if (!i.ok) throw Error(`Failed to delete thread: ${i.statusText}`);
	}
	async getHistory(e, t, n) {
		let r = t?.trim();
		if (!r) return {
			messages: [],
			next_cursor: null,
			prev_cursor: null
		};
		let i = n?.limit ?? 50, a = n?.view ?? "full", o = n?.cursor, s = (e) => {
			let t = e;
			return {
				messages: Array.isArray(t.messages) ? t.messages : [],
				next_cursor: t.next_cursor ?? null,
				prev_cursor: t.prev_cursor ?? null
			};
		}, c = this.getHeaders();
		try {
			let t = new URLSearchParams({
				user_id: r,
				thread_id: e,
				limit: String(i),
				view: a
			});
			o != null && o !== "" && t.set("cursor", o);
			let n = await fetch(`${this.config.baseUrl}/history?${t.toString()}`, {
				method: "GET",
				headers: c
			});
			if (n.ok) return s(await n.json());
			if (n.status === 404 || n.status === 405) {
				let t = {
					user_id: r,
					thread_id: e,
					limit: i,
					view: a
				};
				o != null && o !== "" && (t.cursor = o);
				let n = await fetch(`${this.config.baseUrl}/history`, {
					method: "POST",
					headers: c,
					body: JSON.stringify(t)
				});
				if (n.ok) return s(await n.json());
			}
			throw Error(`Failed to get history: ${n.statusText}`);
		} catch (e) {
			throw e instanceof Error ? e : Error("Failed to get history");
		}
	}
	async getThreads(e, t) {
		let n = e?.trim();
		if (!n) return {
			threads: [],
			total: 0
		};
		try {
			let e = { user_id: n };
			t?.limit != null && (e.limit = t.limit), t?.offset != null && (e.offset = t.offset), t?.search != null && t.search !== "" && (e.search = t.search);
			let r = await fetch(`${this.config.baseUrl}/history/threads`, {
				method: "POST",
				headers: this.getHeaders(),
				body: JSON.stringify(e)
			});
			if (!r.ok) throw Error(`Failed to get threads: ${r.statusText}`);
			let i = await r.json();
			return {
				threads: i.threads ?? [],
				total: i.total ?? i.threads?.length ?? 0
			};
		} catch {
			return {
				threads: [],
				total: 0
			};
		}
	}
}, DATE_KEYS = ["createdAt"];
function reviver(e, t) {
	if (typeof t == "string" && DATE_KEYS.includes(e)) {
		let e = new Date(t);
		return isNaN(e.getTime()) ? t : e;
	}
	return t;
}
function loadMessages(e) {
	if (!e) return null;
	try {
		let t = localStorage.getItem(e);
		if (!t) return null;
		let n = JSON.parse(t, reviver);
		return !Array.isArray(n) || n.length === 0 ? null : n;
	} catch {
		return null;
	}
}
function saveMessages(e, t) {
	if (!(!e || t.length === 0)) try {
		localStorage.setItem(e, JSON.stringify(t));
	} catch (e) {
		console.error("Failed to save chat history:", e);
	}
}
function clearMessages(e) {
	if (e) try {
		localStorage.removeItem(e);
	} catch {}
}
var THREAD_KEY_PREFIX = "chatui-thread:", MESSAGES_KEY_PREFIX = "chatui-messages:";
function getThreadMessagesKey(e, t) {
	return !e || !t ? "" : `${MESSAGES_KEY_PREFIX}${e}:${t}`;
}
function loadCurrentThreadId(e) {
	if (!e) return null;
	try {
		return localStorage.getItem(THREAD_KEY_PREFIX + e);
	} catch {
		return null;
	}
}
function saveCurrentThreadId(e, t) {
	if (e) try {
		t == null ? localStorage.removeItem(THREAD_KEY_PREFIX + e) : localStorage.setItem(THREAD_KEY_PREFIX + e, t);
	} catch {}
}
function updateMessageById(e, t, n) {
	let r = e.findIndex((e) => e.id === t);
	if (r === -1) return e;
	let i = [...e];
	return i[r] = n(i[r]), i;
}
function applyStreamMessage(e, t, n) {
	let r = n.content;
	if (!r || n.type !== "message") return { messages: e };
	let i = r;
	if (i.type === "tool") {
		let n = i.name ?? i.response_metadata?.name ?? i.custom_data?.name ?? "Tool", r = i.content, a = typeof r == "string" ? r.replace(/\\n/g, "\n") : r;
		return { messages: updateMessageById(e, t, (e) => {
			let t = e.toolInvocations ?? [], r = i.tool_call_id ? t.findIndex((e) => e.state === "call" && e.toolCallId === i.tool_call_id) : -1, o = r >= 0 ? t[r] : void 0, s = {
				state: "result",
				toolName: n && n !== "Tool" ? n : o?.toolName ?? n,
				toolCallId: i.tool_call_id,
				result: a
			}, c = t.filter((e) => !(e.state === "call" && e.toolCallId === i.tool_call_id));
			return {
				...e,
				toolInvocations: [...c, s]
			};
		}) };
	}
	if (i.tool_calls && i.tool_calls.length > 0) {
		let n = i.tool_calls.map((e) => ({
			state: "call",
			toolName: e.name,
			toolCallId: e.id,
			args: e.args
		}));
		return { messages: updateMessageById(e, t, (e) => {
			let t = e.toolInvocations ?? [], r = t.filter((e) => e.state === "call"), i = t.filter((e) => e.state === "result"), a = new Set(r.map((e) => e.toolCallId).filter(Boolean)), o = [...r];
			for (let e of n) e.toolCallId && !a.has(e.toolCallId) && (o.push(e), a.add(e.toolCallId));
			let s = [...o, ...i];
			return {
				...e,
				toolInvocations: s
			};
		}) };
	}
	if (i.type === "custom") {
		let t = i.custom_data?.follow_up;
		return Array.isArray(t) ? {
			messages: e,
			followUp: t
		} : { messages: e };
	}
	let a = i.content ?? "";
	return { messages: updateMessageById(e, t, (e) => ({
		...e,
		content: a,
		runId: i.run_id ?? e.runId,
		custom_data: {
			...e.custom_data ?? {},
			...i.custom_data ?? {},
			run_id: i.run_id ?? e.custom_data?.run_id
		}
	})) };
}
function chatRuntimeReducer(e, t) {
	switch (t.type) {
		case "SET_INPUT": return {
			...e,
			input: t.payload
		};
		case "SET_MESSAGES": return {
			...e,
			messages: t.payload
		};
		case "SET_THREAD_ID": return {
			...e,
			currentThreadId: t.payload
		};
		case "SET_METADATA": return {
			...e,
			metadata: t.payload
		};
		case "SET_METADATA_LOADING": return {
			...e,
			metadataLoading: t.payload
		};
		case "SET_ERROR": return {
			...e,
			error: t.payload
		};
		case "START_SEND": {
			let { userMessage: n, assistantMessage: r } = t.payload;
			return {
				...e,
				messages: [
					...e.messages,
					n,
					r
				],
				isGenerating: !0,
				followUpPrompts: [],
				currentAssistantMessageId: r.id,
				error: null
			};
		}
		case "STREAM_TOKEN": {
			let { messageId: n, content: r } = t.payload;
			return {
				...e,
				messages: updateMessageById(e.messages, n, (e) => ({
					...e,
					content: r
				}))
			};
		}
		case "STREAM_MESSAGE": {
			let { messageId: n, event: r } = t.payload, { messages: i, followUp: a } = applyStreamMessage(e.messages, n, r);
			return {
				...e,
				messages: i,
				...a && { followUpPrompts: a }
			};
		}
		case "STREAM_UPDATE": {
			let n = t.payload.followUp;
			return Array.isArray(n) ? {
				...e,
				followUpPrompts: n
			} : e;
		}
		case "STREAM_ERROR": {
			let { messageId: n, error: r } = t.payload;
			return {
				...e,
				messages: updateMessageById(e.messages, n, (e) => ({
					...e,
					content: `Error: ${r}`
				}))
			};
		}
		case "STREAM_END": return {
			...e,
			isGenerating: !1,
			currentAssistantMessageId: null
		};
		case "CLEAR_CHAT": {
			let n = t.payload?.keepStarter;
			return {
				...e,
				messages: n ? [n] : [],
				followUpPrompts: [],
				currentAssistantMessageId: null
			};
		}
		case "SET_FOLLOW_UP": return {
			...e,
			followUpPrompts: t.payload
		};
		case "SET_BACKEND_STATUS": return {
			...e,
			backendStatus: t.payload
		};
		case "SET_MESSAGE_RATING": {
			let { messageId: n, rating: r, comment: i } = t.payload;
			return {
				...e,
				messages: updateMessageById(e.messages, n, (e) => ({
					...e,
					rating: r,
					comment: i
				}))
			};
		}
		default: return e;
	}
}
function getInitialChatState(e, t) {
	let n = e.starterMessage ? {
		id: `greeting-${Date.now()}`,
		role: "assistant",
		content: e.starterMessage,
		createdAt: /* @__PURE__ */ new Date()
	} : void 0;
	return {
		messages: n ? [n] : [],
		input: "",
		isGenerating: !1,
		followUpPrompts: [],
		currentThreadId: e.threadId,
		currentAssistantMessageId: null,
		metadata: t,
		metadataLoading: !t,
		backendStatus: { status: "loading" },
		error: null
	};
}
function generateThreadId() {
	return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `thread-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}
function getStorageBaseKey(e) {
	return `${(e.url ?? "").replace(/\/$/, "")}:${e.userId?.trim() ?? "anon"}:${e.agent?.trim() ?? "default"}`;
}
function persistedToMessages(e) {
	return !e || !Array.isArray(e) || e.length === 0 ? null : e.map((e) => ({
		id: e.id,
		role: e.role === "user" || e.role === "assistant" ? e.role : "user",
		content: e.content,
		createdAt: e.createdAt ? new Date(e.createdAt) : void 0,
		custom_data: e.custom_data,
		parts: e.parts,
		runId: e.runId
	}));
}
function apiMessagesToUiMessages(e) {
	let t = [], n = 0, r = Date.now();
	for (; n < e.length;) {
		let i = e[n];
		if (i.type === "human") {
			t.push({
				id: i.run_id ?? `user-${t.length}-${r}`,
				role: "user",
				content: i.content ?? "",
				createdAt: /* @__PURE__ */ new Date(),
				runId: i.run_id,
				custom_data: i.custom_data
			}), n += 1;
			continue;
		}
		if (i.type === "ai" || i.type === "tool") {
			let i = n, a = "", o = [], s, c;
			for (; n < e.length;) {
				let t = e[n];
				if (t.type === "human") break;
				if (t.type !== "ai" && t.type !== "tool") {
					n += 1;
					continue;
				}
				if (t.type === "ai") {
					t.run_id && s === void 0 && (s = t.run_id), c = t.custom_data;
					let e = t.content ?? "";
					if (e && (a = e), t.tool_calls?.length) for (let e of t.tool_calls) o.push({
						state: "call",
						toolName: e.name,
						toolCallId: e.id,
						args: e.args
					});
				} else {
					let e = t.name ?? t.response_metadata?.name ?? t.custom_data?.name ?? "Tool", n = t.content, r = typeof n == "string" ? n.replace(/\\n/g, "\n") : n, i = t.tool_call_id ?? void 0, a = i ? o.findIndex((e) => e.state === "call" && e.toolCallId === i) : -1, s = a >= 0 ? o[a] : void 0, c = {
						state: "result",
						toolName: e && e !== "Tool" ? e : s?.toolName ?? e,
						toolCallId: i,
						result: r
					};
					a >= 0 ? o[a] = c : o.push(c);
				}
				n += 1;
			}
			t.push({
				id: s ?? `assistant-${i}-${r}`,
				role: "assistant",
				content: a,
				createdAt: /* @__PURE__ */ new Date(),
				runId: s,
				custom_data: c,
				toolInvocations: o.length > 0 ? o : void 0
			});
			continue;
		}
		if (i.type === "custom") {
			n += 1;
			continue;
		}
		n += 1;
	}
	return t;
}
function useChatRuntime(e) {
	let [t, n] = useReducer(chatRuntimeReducer, getInitialChatState(e, null)), r = useRef(e);
	r.current = e;
	let i = useRef(null), a = useCallback(() => {
		if (!i.current) {
			let e = t.metadata;
			i.current = new ChatService({
				baseUrl: r.current.url,
				defaultAgent: r.current.agent ?? e?.default_agent ?? "",
				defaultModel: r.current.model ?? e?.default_model ?? "",
				apiKey: r.current.apiKey
			});
		}
		return i.current;
	}, [t.metadata]), o = useRef(""), s = useRef([]);
	useEffect(() => {
		let t = !1, r = new ChatService({
			baseUrl: e.url,
			defaultAgent: e.agent ?? "",
			defaultModel: e.model ?? "",
			apiKey: e.apiKey
		}), i = r.getMetadataFromCache();
		if (i) {
			n({
				type: "SET_METADATA",
				payload: i
			}), n({
				type: "SET_METADATA_LOADING",
				payload: !1
			});
			return;
		}
		return n({
			type: "SET_METADATA_LOADING",
			payload: !0
		}), r.getMetadata(!1).then((e) => {
			t || n({
				type: "SET_METADATA",
				payload: e
			});
		}).catch((e) => {
			t || n({
				type: "SET_ERROR",
				payload: e instanceof Error ? e.message : "Failed to fetch metadata"
			});
		}).finally(() => {
			t || n({
				type: "SET_METADATA_LOADING",
				payload: !1
			});
		}), () => {
			t = !0;
		};
	}, [
		e.url,
		e.agent,
		e.model,
		e.apiKey
	]), useEffect(() => {
		let e = !1, t, r = async () => {
			let i = await a().healthCheck();
			e || n({
				type: "SET_BACKEND_STATUS",
				payload: i
			}), t = setTimeout(r, 12e4);
		};
		return r(), () => {
			e = !0, clearTimeout(t);
		};
	}, [a]);
	let c = useMemo(() => getStorageBaseKey(e), [
		e.url,
		e.userId,
		e.agent
	]), l = useRef(null);
	useEffect(() => {
		let t = `${c}:${e.threadId ?? "none"}`;
		if (l.current === t) return;
		l.current = t;
		let i = c, o = e.threadId;
		if (o != null && o !== "") {
			n({
				type: "SET_THREAD_ID",
				payload: o
			}), (async (e) => {
				let t = r.current.userId?.trim();
				if (t) try {
					let { messages: r } = await a().getHistory(e, t);
					r.length > 0 && n({
						type: "SET_MESSAGES",
						payload: apiMessagesToUiMessages(r)
					});
				} catch {
					let t = persistedToMessages(loadMessages(getThreadMessagesKey(i, e)));
					t && t.length > 0 && n({
						type: "SET_MESSAGES",
						payload: t
					});
				}
				else {
					let t = persistedToMessages(loadMessages(getThreadMessagesKey(i, e)));
					t && t.length > 0 && n({
						type: "SET_MESSAGES",
						payload: t
					});
				}
			})(o);
			return;
		}
		let s = loadCurrentThreadId(i);
		if (s) n({
			type: "SET_THREAD_ID",
			payload: s
		}), (async (e) => {
			let t = r.current.userId?.trim();
			if (t) try {
				let { messages: r } = await a().getHistory(e, t);
				r.length > 0 && n({
					type: "SET_MESSAGES",
					payload: apiMessagesToUiMessages(r)
				});
			} catch {
				let t = persistedToMessages(loadMessages(getThreadMessagesKey(i, e)));
				t && t.length > 0 && n({
					type: "SET_MESSAGES",
					payload: t
				});
			}
			else {
				let t = persistedToMessages(loadMessages(getThreadMessagesKey(i, e)));
				t && t.length > 0 && n({
					type: "SET_MESSAGES",
					payload: t
				});
			}
		})(s);
		else {
			let e = generateThreadId();
			saveCurrentThreadId(i, e), n({
				type: "SET_THREAD_ID",
				payload: e
			});
		}
	}, [
		c,
		e.threadId,
		e.userId,
		a
	]), useEffect(() => {
		if (!c) return;
		let e = t.currentThreadId;
		saveCurrentThreadId(c, e ?? null);
	}, [c, t.currentThreadId]), useEffect(() => {
		if (!(!c || !t.currentThreadId)) {
			if (t.messages.length === 0) {
				clearMessages(getThreadMessagesKey(c, t.currentThreadId));
				return;
			}
			saveMessages(getThreadMessagesKey(c, t.currentThreadId), t.messages);
		}
	}, [
		c,
		t.currentThreadId,
		t.messages
	]);
	let u = useRef(void 0);
	useEffect(() => {
		let t = e.agent ?? "", r = u.current, i = r !== void 0 && r !== t;
		if (u.current = t, i) {
			let t = generateThreadId();
			saveCurrentThreadId(c, t), n({
				type: "SET_THREAD_ID",
				payload: t
			}), e.starterMessage ? n({
				type: "CLEAR_CHAT",
				payload: { keepStarter: {
					id: `greeting-${Date.now()}`,
					role: "assistant",
					content: e.starterMessage,
					createdAt: /* @__PURE__ */ new Date()
				} }
			}) : n({ type: "CLEAR_CHAT" });
		}
	}, [
		e.agent,
		e.starterMessage,
		c
	]);
	let d = useCallback(async (e) => {
		if (t.isGenerating) return;
		let i = t.metadata, c = r.current.agent ?? i?.default_agent, l = r.current.model ?? i?.default_model;
		if (!c) return;
		let u = t.currentThreadId;
		u || (u = generateThreadId(), n({
			type: "SET_THREAD_ID",
			payload: u
		}), saveCurrentThreadId(getStorageBaseKey(r.current), u));
		let d = {
			id: `user-${Date.now()}`,
			role: "user",
			content: e,
			createdAt: /* @__PURE__ */ new Date()
		}, f = `ai-${Date.now()}`;
		n({
			type: "START_SEND",
			payload: {
				userMessage: d,
				assistantMessage: {
					id: f,
					role: "assistant",
					content: "",
					createdAt: /* @__PURE__ */ new Date()
				}
			}
		}), o.current = "", s.current = [];
		let p = a();
		try {
			for await (let t of p.stream(e, {
				agent: c,
				model: l,
				threadId: u,
				userId: r.current.userId,
				streamTokens: r.current.stream !== !1
			})) if (t.type === "token" && typeof t.content == "string") o.current += t.content, n({
				type: "STREAM_TOKEN",
				payload: {
					messageId: f,
					content: o.current
				}
			});
			else if (t.type === "message" && t.content) {
				n({
					type: "STREAM_MESSAGE",
					payload: {
						messageId: f,
						event: t
					}
				});
				let e = t.content;
				if (e.type === "custom" && Array.isArray(e.custom_data?.follow_up)) s.current = e.custom_data.follow_up;
				else if (typeof e.content == "string" && (o.current = e.content, s.current.length > 0)) {
					let e = o.current + "\n\n**Follow-up suggestions:**\n" + s.current.map((e) => `- ${e}`).join("\n");
					s.current = [], n({
						type: "STREAM_TOKEN",
						payload: {
							messageId: f,
							content: e
						}
					});
				}
			} else if (t.type === "update" && t.updates?.follow_up) {
				let e = t.updates.follow_up;
				Array.isArray(e) && (n({
					type: "SET_FOLLOW_UP",
					payload: e
				}), s.current = e);
			} else t.type === "error" && n({
				type: "STREAM_ERROR",
				payload: {
					messageId: f,
					error: typeof t.content == "string" ? t.content : "Unknown error"
				}
			});
		} catch (e) {
			n({
				type: "STREAM_ERROR",
				payload: {
					messageId: f,
					error: e instanceof Error ? e.message : "Unknown error"
				}
			});
		} finally {
			let e = o.current;
			n({ type: "STREAM_END" }), r.current.onStreamEnd?.(e);
		}
	}, [
		t.isGenerating,
		t.metadata,
		t.currentThreadId,
		a
	]), f = useCallback(async (e) => {
		if (t.isGenerating) return;
		let i = t.metadata, o = r.current.agent ?? i?.default_agent, s = r.current.model ?? i?.default_model;
		if (!o) return;
		let c = t.currentThreadId;
		c || (c = generateThreadId(), n({
			type: "SET_THREAD_ID",
			payload: c
		}), saveCurrentThreadId(getStorageBaseKey(r.current), c));
		let l = {
			id: `user-${Date.now()}`,
			role: "user",
			content: e,
			createdAt: /* @__PURE__ */ new Date()
		}, u = `ai-${Date.now()}`;
		n({
			type: "START_SEND",
			payload: {
				userMessage: l,
				assistantMessage: {
					id: u,
					role: "assistant",
					content: "",
					createdAt: /* @__PURE__ */ new Date()
				}
			}
		});
		let d = a();
		try {
			n({
				type: "STREAM_TOKEN",
				payload: {
					messageId: u,
					content: (await d.invoke(e, {
						agent: o,
						model: s,
						threadId: c,
						userId: r.current.userId
					})).content
				}
			});
		} catch (e) {
			n({
				type: "STREAM_ERROR",
				payload: {
					messageId: u,
					error: e instanceof Error ? e.message : "Unknown error"
				}
			});
		} finally {
			n({ type: "STREAM_END" });
		}
	}, [
		t.isGenerating,
		t.metadata,
		t.currentThreadId,
		a
	]), p = useCallback(() => {
		a().abortStream(), n({ type: "STREAM_END" });
	}, [a]), h = useCallback((e) => {
		n({
			type: "SET_INPUT",
			payload: e
		});
	}, []), g = useCallback((e) => {
		n(typeof e == "function" ? {
			type: "SET_MESSAGES",
			payload: e(t.messages)
		} : {
			type: "SET_MESSAGES",
			payload: e
		});
	}, [t.messages]), _ = useCallback((e) => {
		let t = getStorageBaseKey(r.current);
		if (e?.createNewThread) {
			let e = generateThreadId();
			saveCurrentThreadId(t, e), n({
				type: "SET_THREAD_ID",
				payload: e
			});
		}
		e?.keepStarter && r.current.starterMessage ? n({
			type: "CLEAR_CHAT",
			payload: { keepStarter: {
				id: `greeting-${Date.now()}`,
				role: "assistant",
				content: r.current.starterMessage,
				createdAt: /* @__PURE__ */ new Date()
			} }
		}) : n({ type: "CLEAR_CHAT" });
	}, []), v = useCallback((e) => {
		i.current = null, n({
			type: "SET_METADATA",
			payload: t.metadata
		});
	}, [t.metadata]), y = useCallback((e) => {}, []), b = useCallback((e) => {
		n({
			type: "SET_THREAD_ID",
			payload: e
		});
	}, []), x = useCallback(async (e, t) => {
		let i = (t ?? r.current.userId)?.trim();
		if (!i) return;
		let o = a();
		try {
			let { messages: t } = await o.getHistory(e, i);
			n({
				type: "SET_MESSAGES",
				payload: apiMessagesToUiMessages(t)
			}), n({
				type: "SET_THREAD_ID",
				payload: e
			}), n({
				type: "SET_ERROR",
				payload: null
			});
		} catch (e) {
			console.error("Failed to load thread history:", e), n({
				type: "SET_ERROR",
				payload: e instanceof Error ? e.message : "Failed to load conversation"
			});
		}
	}, [a]), S = useCallback(async (e, r, i) => {
		let o = t.messages.find((t) => t.id === e);
		if (!o) return;
		n({
			type: "SET_MESSAGE_RATING",
			payload: {
				messageId: e,
				rating: r,
				comment: i
			}
		});
		let s = o.runId ?? o.custom_data?.run_id ?? e;
		if (!s || s.startsWith("ai-") || s.startsWith("user-") || s.startsWith("assistant-")) {
			console.warn("Cannot send feedback: no valid runId found for message", e, s);
			return;
		}
		let c = a();
		try {
			await c.sendFeedback(s, "human-feedback-stars", r, i ? { comment: i } : void 0);
		} catch (e) {
			console.error("Failed to send feedback:", e);
		}
	}, [t.messages, a]), C = useCallback(async () => {
		n({
			type: "SET_METADATA",
			payload: await a().getMetadata(!0)
		});
	}, [a]), w = useCallback(async (e) => {
		let t = r.current.userId?.trim();
		return a().getThreads(t, e);
	}, [a]), T = useCallback(async (e, t) => a().getHistory(e, r.current.userId, t), [a]), E = useCallback(async (e, t) => {
		let n = (t ?? r.current.userId)?.trim();
		if (!n) throw Error("User ID is required to delete a thread");
		await a().deleteThread(e, n);
	}, [a]), D = useMemo(() => ({
		setInput: h,
		sendMessage: d,
		invoke: f,
		stopGeneration: p,
		setMessages: g,
		clearChat: _,
		setAgent: v,
		setModel: y,
		setThreadId: b,
		loadThread: x,
		rateResponse: S,
		refetchMetadata: C,
		getThreads: w,
		getHistory: T,
		deleteThread: E
	}), [
		h,
		d,
		f,
		p,
		g,
		_,
		v,
		y,
		b,
		x,
		S,
		C,
		w,
		T,
		E
	]);
	return {
		...t,
		...D
	};
}
var ChatContext = createContext(null);
function ChatProvider({ config: e, children: t, initialSuggestions: n, voiceConfig: r, isListening: i, startListening: a, stopListening: o, isSpeechSupported: s, onMetadata: c }) {
	let l = useChatRuntime(e), u = useMemo(() => l.messages.some((e) => e.role === "user"), [l.messages]);
	React.useEffect(() => {
		l.metadata && c?.(l.metadata);
	}, [l.metadata, c]);
	let d = useMemo(() => l.followUpPrompts.length > 0 ? l.followUpPrompts : u ? [] : n ?? e.starterSuggestions ?? [], [
		l.followUpPrompts,
		u,
		n,
		e.starterSuggestions
	]), f = useMemo(() => ({
		...l,
		suggestions: d,
		voiceConfig: r,
		isListening: i,
		startListening: a,
		stopListening: o,
		isSpeechSupported: s,
		setInput: l.setInput
	}), [
		l,
		d,
		r,
		i,
		a,
		o,
		s
	]);
	return /* @__PURE__ */ jsx(ChatContext.Provider, {
		value: f,
		children: t
	});
}
function useChatContext() {
	let e = useContext(ChatContext);
	if (!e) throw Error("useChatContext must be used within ChatProvider");
	return e;
}
function ChatRoot(e) {
	return /* @__PURE__ */ jsx(ChatProvider, { ...e });
}
ChatRoot.displayName = "Chat.Root";
function useMessageDisplay({ messages: e, isGenerating: t }) {
	let n = e.at(-1), r = e.length === 0, i = n?.role === "user";
	return {
		displayMessages: useMemo(() => t && (r || n?.role === "user") ? [...e, {
			id: "typing",
			role: "assistant",
			content: "",
			createdAt: /* @__PURE__ */ new Date()
		}] : e, [
			e,
			t,
			r,
			n
		]),
		isTyping: i,
		isEmpty: r
	};
}
var ACTIVATION_THRESHOLD = 50, MIN_SCROLL_UP_THRESHOLD = 10, MIN_SCROLLABLE_CONTENT = 10;
function useAutoScroll(e) {
	let t = useRef(null), n = useRef(null), [r, i] = useState(!0), [a, o] = useState(!1), s = useRef(r);
	s.current = r;
	let c = useCallback(() => {
		if (t.current) {
			let { scrollHeight: e, clientHeight: n } = t.current;
			o(e > n + MIN_SCROLLABLE_CONTENT);
		}
	}, []), l = useCallback(() => {
		t.current && (t.current.scrollTop = t.current.scrollHeight);
	}, []), u = useCallback(() => {
		if (t.current) {
			let { scrollTop: e, scrollHeight: r, clientHeight: a } = t.current;
			o(r > a + MIN_SCROLLABLE_CONTENT);
			let s = Math.abs(r - e - a), c = n.current ? e < n.current : !1, l = n.current ? n.current - e : 0;
			i(c && l > MIN_SCROLL_UP_THRESHOLD ? !1 : s < ACTIVATION_THRESHOLD), n.current = e;
		}
	}, []), d = useCallback(() => {
		i(!1);
	}, []);
	return useEffect(() => {
		t.current && (n.current = t.current.scrollTop);
	}, []), useLayoutEffect(() => {
		if (c(), !s.current) return;
		let e = requestAnimationFrame(() => {
			t.current && s.current && (t.current.scrollTop = t.current.scrollHeight);
		});
		return () => cancelAnimationFrame(e);
	}, e), useEffect(() => {
		c();
		let e = () => c();
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, [c]), {
		containerRef: t,
		scrollToBottom: l,
		handleScroll: u,
		shouldAutoScroll: r,
		handleTouchStart: d,
		isScrollable: a
	};
}
function LazyMotion({ children: n, features: r, strict: i = !1 }) {
	let [, a] = useState(!isLazyBundle(r)), o = useRef(void 0);
	if (!isLazyBundle(r)) {
		let { renderer: t, ...n } = r;
		o.current = t, loadFeatures(n);
	}
	return useEffect(() => {
		isLazyBundle(r) && r().then(({ renderer: t, ...n }) => {
			loadFeatures(n), o.current = t, a(!0);
		});
	}, []), jsx(LazyContext.Provider, {
		value: {
			renderer: o.current,
			strict: i
		},
		children: n
	});
}
function isLazyBundle(e) {
	return typeof e == "function";
}
var domAnimation = {
	renderer: createDomVisualElement,
	...animations,
	...gestureAnimations
};
function createContextScope$1(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = React$1.createContext(r), a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = React$1.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ jsx(s.Provider, {
				value: c,
				children: r
			});
		};
		o.displayName = t + "Provider";
		function s(n, o) {
			let s = o?.[e]?.[a] || i, c = React$1.useContext(s);
			if (c) return c;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => React$1.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return React$1.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, composeContextScopes$1(i, ...t)];
}
function composeContextScopes$1(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = () => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot$1(e) {
	let t = /* @__PURE__ */ createSlotClone$1(e), n = React$1.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = React$1.Children.toArray(r), o = a.find(isSlottable$1);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? React$1.Children.count(e) > 1 ? React$1.Children.only(null) : React$1.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ jsx(t, {
				...i,
				ref: n,
				children: React$1.isValidElement(e) ? React$1.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ jsx(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone$1(e) {
	let t = React$1.forwardRef((e, t) => {
		let { children: n, ...i } = e;
		if (React$1.isValidElement(n)) {
			let e = getElementRef$1(n), a = mergeProps$1(i, n.props);
			return n.type !== React$1.Fragment && (a.ref = t ? composeRefs(t, e) : e), React$1.cloneElement(n, a);
		}
		return React$1.Children.count(n) > 1 ? React$1.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var SLOTTABLE_IDENTIFIER$1 = Symbol("radix.slottable");
function isSlottable$1(e) {
	return React$1.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
function mergeProps$1(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function getElementRef$1(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
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
].reduce((e, t) => {
	let n = /* @__PURE__ */ createSlot$1(`Primitive.${t}`), r = React$1.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {}), COLLAPSIBLE_NAME = "Collapsible", [createCollapsibleContext, createCollapsibleScope] = createContextScope$1(COLLAPSIBLE_NAME), [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME), Collapsible$1 = React$1.forwardRef((e, t) => {
	let { __scopeCollapsible: n, open: r, defaultOpen: i, disabled: a, onOpenChange: o, ...s } = e, [c, l] = useControllableState({
		prop: r,
		defaultProp: i ?? !1,
		onChange: o,
		caller: COLLAPSIBLE_NAME
	});
	return /* @__PURE__ */ jsx(CollapsibleProvider, {
		scope: n,
		disabled: a,
		contentId: useId$1(),
		open: c,
		onOpenToggle: React$1.useCallback(() => l((e) => !e), [l]),
		children: /* @__PURE__ */ jsx(Primitive$1.div, {
			"data-state": getState$1(c),
			"data-disabled": a ? "" : void 0,
			...s,
			ref: t
		})
	});
});
Collapsible$1.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME$1 = "CollapsibleTrigger", CollapsibleTrigger$1 = React$1.forwardRef((e, t) => {
	let { __scopeCollapsible: n, ...r } = e, i = useCollapsibleContext(TRIGGER_NAME$1, n);
	return /* @__PURE__ */ jsx(Primitive$1.button, {
		type: "button",
		"aria-controls": i.contentId,
		"aria-expanded": i.open || !1,
		"data-state": getState$1(i.open),
		"data-disabled": i.disabled ? "" : void 0,
		disabled: i.disabled,
		...r,
		ref: t,
		onClick: composeEventHandlers(e.onClick, i.onOpenToggle)
	});
});
CollapsibleTrigger$1.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "CollapsibleContent", CollapsibleContent$1 = React$1.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = useCollapsibleContext(CONTENT_NAME$1, e.__scopeCollapsible);
	return /* @__PURE__ */ jsx(Presence, {
		present: n || i.open,
		children: ({ present: e }) => /* @__PURE__ */ jsx(CollapsibleContentImpl, {
			...r,
			ref: t,
			present: e
		})
	});
});
CollapsibleContent$1.displayName = CONTENT_NAME$1;
var CollapsibleContentImpl = React$1.forwardRef((e, t) => {
	let { __scopeCollapsible: n, present: r, children: i, ...a } = e, o = useCollapsibleContext(CONTENT_NAME$1, n), [s, c] = React$1.useState(r), l = React$1.useRef(null), u = useComposedRefs(t, l), d = React$1.useRef(0), f = d.current, p = React$1.useRef(0), h = p.current, _ = o.open || s, v = React$1.useRef(_), y = React$1.useRef(void 0);
	return React$1.useEffect(() => {
		let e = requestAnimationFrame(() => v.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), useLayoutEffect2(() => {
		let e = l.current;
		if (e) {
			y.current = y.current || {
				transitionDuration: e.style.transitionDuration,
				animationName: e.style.animationName
			}, e.style.transitionDuration = "0s", e.style.animationName = "none";
			let t = e.getBoundingClientRect();
			d.current = t.height, p.current = t.width, v.current || (e.style.transitionDuration = y.current.transitionDuration, e.style.animationName = y.current.animationName), c(r);
		}
	}, [o.open, r]), /* @__PURE__ */ jsx(Primitive$1.div, {
		"data-state": getState$1(o.open),
		"data-disabled": o.disabled ? "" : void 0,
		id: o.contentId,
		hidden: !_,
		...a,
		ref: u,
		style: {
			"--radix-collapsible-content-height": f ? `${f}px` : void 0,
			"--radix-collapsible-content-width": h ? `${h}px` : void 0,
			...e.style
		},
		children: _ && i
	});
});
function getState$1(e) {
	return e ? "open" : "closed";
}
var Root$1 = Collapsible$1;
function Collapsible({ ...e }) {
	return /* @__PURE__ */ jsx(Root$1, {
		"data-slot": "collapsible",
		...e
	});
}
function CollapsibleTrigger({ ...e }) {
	return /* @__PURE__ */ jsx(CollapsibleTrigger$1, {
		"data-slot": "collapsible-trigger",
		...e
	});
}
function CollapsibleContent({ ...e }) {
	return /* @__PURE__ */ jsx(CollapsibleContent$1, {
		"data-slot": "collapsible-content",
		...e
	});
}
var MarkdownRenderer = React.lazy(() => import("./markdown-renderer-M7Un0J7-.js"));
function LazyMarkdownRenderer({ children: e, className: t, messageId: n }) {
	return /* @__PURE__ */ jsx(Suspense, {
		fallback: /* @__PURE__ */ jsx("div", { className: "animate-pulse h-4 bg-muted/50 rounded w-1/2" }),
		children: /* @__PURE__ */ jsx(MarkdownRenderer, {
			className: t,
			messageId: n,
			children: e
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
function ToolResult({ toolName: e, result: t }) {
	let [n, r] = useState(!1), i = useRef(null), a = () => {
		i.current &&= (clearTimeout(i.current), null);
	};
	return /* @__PURE__ */ jsxs(Popover, {
		open: n,
		onOpenChange: (e) => {
			e || r(!1);
		},
		children: [/* @__PURE__ */ jsx(PopoverTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ jsxs(Badge, {
				variant: "outline",
				className: "cursor-pointer hover:scale-[0.95]",
				onMouseEnter: () => {
					a(), r(!0);
				},
				onMouseLeave: () => {
					i.current = setTimeout(() => {
						r(!1), i.current = null;
					}, HOVER_CLOSE_DELAY);
				},
				children: [/* @__PURE__ */ jsx(CodeXml, { className: "size-3" }), e]
			})
		}), /* @__PURE__ */ jsxs(PopoverContent, {
			className: "max-h-[80vh] w-96 max-w-[min(90vw,24rem)] flex flex-col p-0",
			align: "start",
			sideOffset: 8,
			onMouseEnter: () => {
				a();
			},
			onMouseLeave: () => {
				r(!1);
			},
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 border-b px-4 py-3",
				children: [/* @__PURE__ */ jsx(CodeXml, { className: "size-5 text-primary shrink-0" }), /* @__PURE__ */ jsxs("span", {
					className: "font-semibold text-sm",
					children: ["Tool Result: ", e]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-auto rounded-b-md bg-muted/30 p-4",
				children: typeof t == "string" ? /* @__PURE__ */ jsx(LazyMarkdownRenderer, { children: t.replace(/\\n/g, "\n") }) : /* @__PURE__ */ jsx("pre", {
					className: "whitespace-pre-wrap text-xs md:text-sm font-mono leading-relaxed",
					children: JSON.stringify(t, null, 2)
				})
			})]
		})]
	});
}
function buildWordMap(e) {
	let t = [], n = /(\S+|\s+)/g, r;
	for (; (r = n.exec(e)) !== null;) {
		let e = r[0];
		t.push({
			text: e,
			start: r.index,
			end: r.index + e.length,
			isSpace: /^\s+$/.test(e)
		});
	}
	return t;
}
const WordHighlighter = memo(function({ text: e, charOffset: t, currentCharIndex: n, className: r }) {
	let i = t + n, a = useMemo(() => buildWordMap(e), [e]), s = useMemo(() => {
		for (let e = 0; e < a.length; e++) {
			let t = a[e];
			if (!t.isSpace && i >= t.start && i < t.end) return e;
		}
		for (let e = a.length - 1; e >= 0; e--) if (!a[e].isSpace) return e;
		return -1;
	}, [a, i]);
	return e ? /* @__PURE__ */ jsx("div", {
		className: cn("word-highlighter text-sm leading-relaxed text-muted-foreground/80 mt-2 px-1 select-text", r),
		"aria-hidden": "true",
		children: a.map((e, t) => e.isSpace ? /* @__PURE__ */ jsx("span", { children: e.text }, t) : t === s ? /* @__PURE__ */ jsx("mark", {
			className: "highlighting",
			children: e.text
		}, t) : /* @__PURE__ */ jsx("span", { children: e.text }, t))
	}) : null;
});
var FilePreview$1 = lazy(() => import("./file-preview--UDtdP8v.js").then((e) => ({ default: e.FilePreview }))), chatBubbleVariants = cva("group/message relative rounded-lg p-4 text-sm shadow-sm transition-all duration-200 hover:shadow-md", {
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
function ChatMessageBubble({ isUser: e, animation: t, actions: n, isGenerating: r, children: i, id: a }) {
	let { speakingMessageId: s, currentCharIndex: c, charOffset: l, activeText: u } = useSpeechStore(), d = !!a && s === a;
	return /* @__PURE__ */ jsxs("div", {
		className: cn(chatBubbleVariants({
			isUser: e,
			animation: t
		})),
		children: [
			r && !i ? /* @__PURE__ */ jsx(TypingIndicator, {}) : /* @__PURE__ */ jsx(LazyMarkdownRenderer, {
				messageId: a,
				children: typeof i == "string" ? i : ""
			}),
			d && u && /* @__PURE__ */ jsx(WordHighlighter, {
				text: u,
				charOffset: l,
				currentCharIndex: c
			}),
			n ? /* @__PURE__ */ jsx("div", {
				className: "absolute -bottom-6 right-2 flex space-x-1 rounded-lg border bg-background/95 backdrop-blur-sm p-1 text-foreground opacity-0 transition-all duration-200 group-hover/message:opacity-100 shadow-sm",
				children: n
			}) : null
		]
	});
}
function ChatMessageTimestamp({ createdAt: e, animation: t = "scale" }) {
	if (!e) return null;
	let n = e.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit"
	});
	return /* @__PURE__ */ jsx("time", {
		dateTime: e.toISOString(),
		className: cn("mt-1 block px-1 text-xs opacity-60", t !== "none" && "duration-500 animate-in fade-in-0"),
		children: n
	});
}
const ChatMessage = ({ id: e, role: t, content: n, createdAt: r, showTimeStamp: i = !1, animation: a = "scale", actions: s, experimental_attachments: c, toolInvocations: l, parts: u, isGenerating: d = !1 }) => {
	let f = t === "user", p = useMemo(() => c?.map((e) => {
		let t = dataUrlToUint8Array(e.url);
		return new File([t], e.name ?? "Unknown", { type: e.contentType });
	}), [c]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-3 min-w-0", f ? "items-end ml-auto max-w-[85%] pr-4" : "items-start mr-auto max-w-[85%] pl-4"),
		children: [
			p && p.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "mb-2 flex flex-wrap gap-2",
				children: p.map((e, t) => /* @__PURE__ */ jsx(Suspense, {
					fallback: /* @__PURE__ */ jsx("div", { className: "h-16 w-16 animate-pulse bg-muted rounded-xl" }),
					children: /* @__PURE__ */ jsx(FilePreview$1, { file: e })
				}, t))
			}),
			l && l.length > 0 && /* @__PURE__ */ jsx(ToolCall, { toolInvocations: l }),
			u && u.length > 0 ? u.map((t, n) => t.type === "text" ? /* @__PURE__ */ jsxs("div", {
				className: cn("flex flex-col", f ? "items-end" : "items-start"),
				children: [/* @__PURE__ */ jsx(ChatMessageBubble, {
					isUser: f,
					animation: a,
					actions: s,
					id: e,
					children: t.text
				}), i && /* @__PURE__ */ jsx(ChatMessageTimestamp, {
					createdAt: r,
					animation: a
				})]
			}, `text-${n}`) : t.type === "reasoning" ? /* @__PURE__ */ jsx(ReasoningBlock, { part: t }, `reasoning-${n}`) : t.type === "tool-invocation" ? /* @__PURE__ */ jsx(ToolCall, { toolInvocations: [t.toolInvocation] }, `tool-${n}`) : null) : n || d ? /* @__PURE__ */ jsxs("div", {
				className: cn("flex flex-col", f ? "items-end" : "items-start"),
				children: [/* @__PURE__ */ jsx(ChatMessageBubble, {
					isUser: f,
					animation: a,
					actions: s,
					isGenerating: d,
					id: e,
					children: n
				}), i && /* @__PURE__ */ jsx(ChatMessageTimestamp, {
					createdAt: r,
					animation: a
				})]
			}) : i && /* @__PURE__ */ jsx(ChatMessageTimestamp, {
				createdAt: r,
				animation: a
			})
		]
	});
};
function dataUrlToUint8Array(e) {
	let t = e.split(",")[1], n = atob(t), r = new Uint8Array(n.length);
	for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
	return r;
}
function ReasoningBlock({ part: e }) {
	let [t, n] = useState(!1);
	return /* @__PURE__ */ jsx("div", {
		className: "mb-3 flex flex-col items-start max-w-[85%] ml-4 mr-auto min-w-0",
		children: /* @__PURE__ */ jsxs(Collapsible, {
			open: t,
			onOpenChange: n,
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
					animate: t ? "open" : "closed",
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
							children: e.reasoning
						})
					})
				})
			})]
		})
	});
}
function ToolCall({ toolInvocations: e }) {
	return e?.length ? /* @__PURE__ */ jsx("div", {
		className: "flex flex-col items-start gap-3 max-w-[85%] mr-auto min-w-0",
		children: e.map((e, t) => {
			if (e.state === "result" && e.result?.__cancelled === !0) return /* @__PURE__ */ jsxs("div", {
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
							children: e.toolName
						})
					]
				})]
			}, t);
			switch (e.state) {
				case "result": return /* @__PURE__ */ jsx(ToolResult, {
					toolName: e.toolName,
					result: e.result
				}, t);
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
								children: e.toolName
							})
						]
					})]
				}, t);
				default: return null;
			}
		})
	}) : null;
}
function memo$1(e, t, n) {
	let r = n.initialDeps ?? [], i, a = !0;
	function o() {
		let o;
		n.key && n.debug?.call(n) && (o = Date.now());
		let s = e();
		if (!(s.length !== r.length || s.some((e, t) => r[t] !== e))) return i;
		r = s;
		let c;
		if (n.key && n.debug?.call(n) && (c = Date.now()), i = t(...s), n.key && n.debug?.call(n)) {
			let e = Math.round((Date.now() - o) * 100) / 100, t = Math.round((Date.now() - c) * 100) / 100, r = t / 16, i = (e, t) => {
				for (e = String(e); e.length < t;) e = " " + e;
				return e;
			};
			console.info(`%c⏱ ${i(t, 5)} /${i(e, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`, n?.key);
		}
		return n?.onChange && !(a && n.skipInitialOnChange) && n.onChange(i), a = !1, i;
	}
	return o.updateDeps = (e) => {
		r = e;
	}, o;
}
function notUndefined(e, t) {
	if (e === void 0) throw Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
	return e;
}
var approxEqual = (e, t) => Math.abs(e - t) < 1.01, debounce = (e, t, n) => {
	let r;
	return function(...i) {
		e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, i), n);
	};
}, getRect = (e) => {
	let { offsetWidth: t, offsetHeight: n } = e;
	return {
		width: t,
		height: n
	};
}, defaultKeyExtractor = (e) => e, defaultRangeExtractor = (e) => {
	let t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
	for (let e = t; e <= n; e++) r.push(e);
	return r;
}, observeElementRect = (e, t) => {
	let n = e.scrollElement;
	if (!n) return;
	let r = e.targetWindow;
	if (!r) return;
	let i = (e) => {
		let { width: n, height: r } = e;
		t({
			width: Math.round(n),
			height: Math.round(r)
		});
	};
	if (i(getRect(n)), !r.ResizeObserver) return () => {};
	let a = new r.ResizeObserver((t) => {
		let r = () => {
			let e = t[0];
			if (e?.borderBoxSize) {
				let t = e.borderBoxSize[0];
				if (t) {
					i({
						width: t.inlineSize,
						height: t.blockSize
					});
					return;
				}
			}
			i(getRect(n));
		};
		e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
	});
	return a.observe(n, { box: "border-box" }), () => {
		a.unobserve(n);
	};
}, addEventListenerOptions = { passive: !0 }, supportsScrollend = typeof window > "u" ? !0 : "onscrollend" in window, observeElementOffset = (e, t) => {
	let n = e.scrollElement;
	if (!n) return;
	let r = e.targetWindow;
	if (!r) return;
	let i = 0, a = e.options.useScrollendEvent && supportsScrollend ? () => void 0 : debounce(r, () => {
		t(i, !1);
	}, e.options.isScrollingResetDelay), o = (r) => () => {
		let { horizontal: o, isRtl: s } = e.options;
		i = o ? n.scrollLeft * (s && -1 || 1) : n.scrollTop, a(), t(i, r);
	}, s = o(!0), c = o(!1);
	n.addEventListener("scroll", s, addEventListenerOptions);
	let l = e.options.useScrollendEvent && supportsScrollend;
	return l && n.addEventListener("scrollend", c, addEventListenerOptions), () => {
		n.removeEventListener("scroll", s), l && n.removeEventListener("scrollend", c);
	};
}, measureElement = (e, t, n) => {
	if (t?.borderBoxSize) {
		let e = t.borderBoxSize[0];
		if (e) return Math.round(e[n.options.horizontal ? "inlineSize" : "blockSize"]);
	}
	return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, elementScroll = (e, { adjustments: t = 0, behavior: n }, r) => {
	var i, a;
	let o = e + t;
	(a = (i = r.scrollElement)?.scrollTo) == null || a.call(i, {
		[r.options.horizontal ? "left" : "top"]: o,
		behavior: n
	});
}, Virtualizer = class {
	constructor(e) {
		this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
			var e;
			return ((e = this.targetWindow?.performance)?.now)?.call(e) ?? Date.now();
		}, this.observer = /* @__PURE__ */ (() => {
			let e = null, t = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((e) => {
				e.forEach((e) => {
					let t = () => {
						this._measureElement(e.target, e);
					};
					this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t();
				});
			}));
			return {
				disconnect: () => {
					var n;
					(n = t()) == null || n.disconnect(), e = null;
				},
				observe: (e) => t()?.observe(e, { box: "border-box" }),
				unobserve: (e) => t()?.unobserve(e)
			};
		})(), this.range = null, this.setOptions = (e) => {
			Object.entries(e).forEach(([t, n]) => {
				n === void 0 && delete e[t];
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
				...e
			};
		}, this.notify = (e) => {
			var t, n;
			(n = (t = this.options).onChange) == null || n.call(t, this, e);
		}, this.maybeNotify = memo$1(() => (this.calculateRange(), [
			this.isScrolling,
			this.range ? this.range.startIndex : null,
			this.range ? this.range.endIndex : null
		]), (e) => {
			this.notify(e);
		}, {
			key: process.env.NODE_ENV !== "production" && "maybeNotify",
			debug: () => this.options.debug,
			initialDeps: [
				this.isScrolling,
				this.range ? this.range.startIndex : null,
				this.range ? this.range.endIndex : null
			]
		}), this.cleanup = () => {
			this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
		}, this._didMount = () => () => {
			this.cleanup();
		}, this._willUpdate = () => {
			let e = this.options.enabled ? this.options.getScrollElement() : null;
			if (this.scrollElement !== e) {
				if (this.cleanup(), !e) {
					this.maybeNotify();
					return;
				}
				this.scrollElement = e, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = this.scrollElement?.window ?? null, this.elementsCache.forEach((e) => {
					this.observer.observe(e);
				}), this.unsubs.push(this.options.observeElementRect(this, (e) => {
					this.scrollRect = e, this.maybeNotify();
				})), this.unsubs.push(this.options.observeElementOffset(this, (e, t) => {
					this.scrollAdjustments = 0, this.scrollDirection = t ? this.getScrollOffset() < e ? "forward" : "backward" : null, this.scrollOffset = e, this.isScrolling = t, this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
				})), this._scrollToOffset(this.getScrollOffset(), {
					adjustments: void 0,
					behavior: void 0
				});
			}
		}, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, t) => {
			let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
			for (let i = t - 1; i >= 0; i--) {
				let t = e[i];
				if (n.has(t.lane)) continue;
				let a = r.get(t.lane);
				if (a == null || t.end > a.end ? r.set(t.lane, t) : t.end < a.end && n.set(t.lane, !0), n.size === this.options.lanes) break;
			}
			return r.size === this.options.lanes ? Array.from(r.values()).sort((e, t) => e.end === t.end ? e.index - t.index : e.end - t.end)[0] : void 0;
		}, this.getMeasurementOptions = memo$1(() => [
			this.options.count,
			this.options.paddingStart,
			this.options.scrollMargin,
			this.options.getItemKey,
			this.options.enabled,
			this.options.lanes
		], (e, t, n, r, i, a) => (this.prevLanes !== void 0 && this.prevLanes !== a && (this.lanesChangedFlag = !0), this.prevLanes = a, this.pendingMeasuredCacheIndexes = [], {
			count: e,
			paddingStart: t,
			scrollMargin: n,
			getItemKey: r,
			enabled: i,
			lanes: a
		}), { key: !1 }), this.getMeasurements = memo$1(() => [this.getMeasurementOptions(), this.itemSizeCache], ({ count: e, paddingStart: t, scrollMargin: n, getItemKey: r, enabled: i, lanes: a }, o) => {
			if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
			if (this.laneAssignments.size > e) for (let t of this.laneAssignments.keys()) t >= e && this.laneAssignments.delete(t);
			this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((e) => {
				this.itemSizeCache.set(e.key, e.size);
			}));
			let s = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
			this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === e && (this.lanesSettling = !1);
			let c = this.measurementsCache.slice(0, s), l = Array(a).fill(void 0);
			for (let e = 0; e < s; e++) {
				let t = c[e];
				t && (l[t.lane] = e);
			}
			for (let i = s; i < e; i++) {
				let e = r(i), a = this.laneAssignments.get(i), s, u;
				if (a !== void 0 && this.options.lanes > 1) {
					s = a;
					let e = l[s], r = e === void 0 ? void 0 : c[e];
					u = r ? r.end + this.options.gap : t + n;
				} else {
					let e = this.options.lanes === 1 ? c[i - 1] : this.getFurthestMeasurement(c, i);
					u = e ? e.end + this.options.gap : t + n, s = e ? e.lane : i % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(i, s);
				}
				let d = o.get(e), f = typeof d == "number" ? d : this.options.estimateSize(i), p = u + f;
				c[i] = {
					index: i,
					start: u,
					size: f,
					end: p,
					key: e,
					lane: s
				}, l[s] = i;
			}
			return this.measurementsCache = c, c;
		}, {
			key: process.env.NODE_ENV !== "production" && "getMeasurements",
			debug: () => this.options.debug
		}), this.calculateRange = memo$1(() => [
			this.getMeasurements(),
			this.getSize(),
			this.getScrollOffset(),
			this.options.lanes
		], (e, t, n, r) => this.range = e.length > 0 && t > 0 ? calculateRange({
			measurements: e,
			outerSize: t,
			scrollOffset: n,
			lanes: r
		}) : null, {
			key: process.env.NODE_ENV !== "production" && "calculateRange",
			debug: () => this.options.debug
		}), this.getVirtualIndexes = memo$1(() => {
			let e = null, t = null, n = this.calculateRange();
			return n && (e = n.startIndex, t = n.endIndex), this.maybeNotify.updateDeps([
				this.isScrolling,
				e,
				t
			]), [
				this.options.rangeExtractor,
				this.options.overscan,
				this.options.count,
				e,
				t
			];
		}, (e, t, n, r, i) => r === null || i === null ? [] : e({
			startIndex: r,
			endIndex: i,
			overscan: t,
			count: n
		}), {
			key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
			debug: () => this.options.debug
		}), this.indexFromElement = (e) => {
			let t = this.options.indexAttribute, n = e.getAttribute(t);
			return n ? parseInt(n, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
		}, this.shouldMeasureDuringScroll = (e) => {
			if (!this.scrollState || this.scrollState.behavior !== "smooth") return !0;
			let t = this.scrollState.index ?? this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)?.index;
			if (t !== void 0 && this.range) {
				let n = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2)), r = Math.max(0, t - n), i = Math.min(this.options.count - 1, t + n);
				return e >= r && e <= i;
			}
			return !0;
		}, this._measureElement = (e, t) => {
			if (!e.isConnected) {
				this.observer.unobserve(e);
				return;
			}
			let n = this.indexFromElement(e), r = this.measurementsCache[n];
			if (!r) return;
			let i = r.key, a = this.elementsCache.get(i);
			a !== e && (a && this.observer.unobserve(a), this.observer.observe(e), this.elementsCache.set(i, e)), this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(e, t, this));
		}, this.resizeItem = (e, t) => {
			let n = this.measurementsCache[e];
			if (!n) return;
			let r = t - (this.itemSizeCache.get(n.key) ?? n.size);
			r !== 0 && (this.scrollState?.behavior !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange === void 0 ? n.start < this.getScrollOffset() + this.scrollAdjustments : this.shouldAdjustScrollPositionOnItemSizeChange(n, r, this)) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", r), this._scrollToOffset(this.getScrollOffset(), {
				adjustments: this.scrollAdjustments += r,
				behavior: void 0
			})), this.pendingMeasuredCacheIndexes.push(n.index), this.itemSizeCache = new Map(this.itemSizeCache.set(n.key, t)), this.notify(!1));
		}, this.measureElement = (e) => {
			if (!e) {
				this.elementsCache.forEach((e, t) => {
					e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
				});
				return;
			}
			this._measureElement(e, void 0);
		}, this.getVirtualItems = memo$1(() => [this.getVirtualIndexes(), this.getMeasurements()], (e, t) => {
			let n = [];
			for (let r = 0, i = e.length; r < i; r++) {
				let i = t[e[r]];
				n.push(i);
			}
			return n;
		}, {
			key: process.env.NODE_ENV !== "production" && "getVirtualItems",
			debug: () => this.options.debug
		}), this.getVirtualItemForOffset = (e) => {
			let t = this.getMeasurements();
			if (t.length !== 0) return notUndefined(t[findNearestBinarySearch(0, t.length - 1, (e) => notUndefined(t[e]).start, e)]);
		}, this.getMaxScrollOffset = () => {
			if (!this.scrollElement) return 0;
			if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
			{
				let e = this.scrollElement.document.documentElement;
				return this.options.horizontal ? e.scrollWidth - this.scrollElement.innerWidth : e.scrollHeight - this.scrollElement.innerHeight;
			}
		}, this.getOffsetForAlignment = (e, t, n = 0) => {
			if (!this.scrollElement) return 0;
			let r = this.getSize(), i = this.getScrollOffset();
			t === "auto" && (t = e >= i + r ? "end" : "start"), t === "center" ? e += (n - r) / 2 : t === "end" && (e -= r);
			let a = this.getMaxScrollOffset();
			return Math.max(Math.min(a, e), 0);
		}, this.getOffsetForIndex = (e, t = "auto") => {
			e = Math.max(0, Math.min(e, this.options.count - 1));
			let n = this.getSize(), r = this.getScrollOffset(), i = this.measurementsCache[e];
			if (!i) return;
			if (t === "auto") if (i.end >= r + n - this.options.scrollPaddingEnd) t = "end";
			else if (i.start <= r + this.options.scrollPaddingStart) t = "start";
			else return [r, t];
			if (t === "end" && e === this.options.count - 1) return [this.getMaxScrollOffset(), t];
			let a = t === "end" ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
			return [this.getOffsetForAlignment(a, t, i.size), t];
		}, this.scrollToOffset = (e, { align: t = "start", behavior: n = "auto" } = {}) => {
			let r = this.getOffsetForAlignment(e, t);
			this.scrollState = {
				index: null,
				align: t,
				behavior: n,
				startedAt: this.now(),
				lastTargetOffset: r,
				stableFrames: 0
			}, this._scrollToOffset(r, {
				adjustments: void 0,
				behavior: n
			}), this.scheduleScrollReconcile();
		}, this.scrollToIndex = (e, { align: t = "auto", behavior: n = "auto" } = {}) => {
			e = Math.max(0, Math.min(e, this.options.count - 1));
			let r = this.getOffsetForIndex(e, t);
			if (!r) return;
			let [i, a] = r, o = this.now();
			this.scrollState = {
				index: e,
				align: a,
				behavior: n,
				startedAt: o,
				lastTargetOffset: i,
				stableFrames: 0
			}, this._scrollToOffset(i, {
				adjustments: void 0,
				behavior: n
			}), this.scheduleScrollReconcile();
		}, this.scrollBy = (e, { behavior: t = "auto" } = {}) => {
			let n = this.getScrollOffset() + e;
			this.scrollState = {
				index: null,
				align: "start",
				behavior: t,
				startedAt: this.now(),
				lastTargetOffset: n,
				stableFrames: 0
			}, this._scrollToOffset(n, {
				adjustments: void 0,
				behavior: t
			}), this.scheduleScrollReconcile();
		}, this.getTotalSize = () => {
			let e = this.getMeasurements(), t;
			if (e.length === 0) t = this.options.paddingStart;
			else if (this.options.lanes === 1) t = e[e.length - 1]?.end ?? 0;
			else {
				let n = Array(this.options.lanes).fill(null), r = e.length - 1;
				for (; r >= 0 && n.some((e) => e === null);) {
					let t = e[r];
					n[t.lane] === null && (n[t.lane] = t.end), r--;
				}
				t = Math.max(...n.filter((e) => e !== null));
			}
			return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
		}, this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
			this.options.scrollToFn(e, {
				behavior: n,
				adjustments: t
			}, this);
		}, this.measure = () => {
			this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
		}, this.setOptions(e);
	}
	scheduleScrollReconcile() {
		if (!this.targetWindow) {
			this.scrollState = null;
			return;
		}
		this.rafId ??= this.targetWindow.requestAnimationFrame(() => {
			this.rafId = null, this.reconcileScroll();
		});
	}
	reconcileScroll() {
		if (!this.scrollState || !this.scrollElement) return;
		if (this.now() - this.scrollState.startedAt > 5e3) {
			this.scrollState = null;
			return;
		}
		let e = this.scrollState.index == null ? void 0 : this.getOffsetForIndex(this.scrollState.index, this.scrollState.align), t = e ? e[0] : this.scrollState.lastTargetOffset, n = t !== this.scrollState.lastTargetOffset;
		if (!n && approxEqual(t, this.getScrollOffset())) {
			if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= 1) {
				this.scrollState = null;
				return;
			}
		} else this.scrollState.stableFrames = 0, n && (this.scrollState.lastTargetOffset = t, this.scrollState.behavior = "auto", this._scrollToOffset(t, {
			adjustments: void 0,
			behavior: "auto"
		}));
		this.scheduleScrollReconcile();
	}
}, findNearestBinarySearch = (e, t, n, r) => {
	for (; e <= t;) {
		let i = (e + t) / 2 | 0, a = n(i);
		if (a < r) e = i + 1;
		else if (a > r) t = i - 1;
		else return i;
	}
	return e > 0 ? e - 1 : 0;
};
function calculateRange({ measurements: e, outerSize: t, scrollOffset: n, lanes: r }) {
	let i = e.length - 1, a = (t) => e[t].start;
	if (e.length <= r) return {
		startIndex: 0,
		endIndex: i
	};
	let o = findNearestBinarySearch(0, i, a, n), s = o;
	if (r === 1) for (; s < i && e[s].end < n + t;) s++;
	else if (r > 1) {
		let a = Array(r).fill(0);
		for (; s < i && a.some((e) => e < n + t);) {
			let t = e[s];
			a[t.lane] = t.end, s++;
		}
		let c = Array(r).fill(n + t);
		for (; o >= 0 && c.some((e) => e >= n);) {
			let t = e[o];
			c[t.lane] = t.start, o--;
		}
		o = Math.max(0, o - o % r), s = Math.min(i, s + (r - 1 - s % r));
	}
	return {
		startIndex: o,
		endIndex: s
	};
}
var useIsomorphicLayoutEffect = typeof document < "u" ? React$1.useLayoutEffect : React$1.useEffect;
function useVirtualizerBase({ useFlushSync: e = !0, ...t }) {
	let n = React$1.useReducer(() => ({}), {})[1], r = {
		...t,
		onChange: (r, i) => {
			var a;
			e && i ? flushSync(n) : n(), (a = t.onChange) == null || a.call(t, r, i);
		}
	}, [i] = React$1.useState(() => new Virtualizer(r));
	return i.setOptions(r), useIsomorphicLayoutEffect(() => i._didMount(), []), useIsomorphicLayoutEffect(() => i._willUpdate()), i;
}
function useVirtualizer(e) {
	return useVirtualizerBase({
		observeElementRect,
		observeElementOffset,
		scrollToFn: elementScroll,
		...e
	});
}
var MemoizedChatMessage = memo(ChatMessage, (e, t) => {
	if (e.id !== t.id || e.content !== t.content || e.role !== t.role || e.isGenerating !== t.isGenerating) return !1;
	let n = e.toolInvocations || [], r = t.toolInvocations || [];
	if (n.length !== r.length) return !1;
	for (let e = 0; e < n.length; e++) if (n[e].state !== r[e].state || n[e].toolCallId !== r[e].toolCallId) return !1;
	let i = e.parts || [], a = t.parts || [];
	return i.length === a.length;
});
MemoizedChatMessage.displayName = "MemoizedChatMessage";
const MessageList = memo(function({ messages: e, showTimeStamps: t = !0, isTyping: n = !1, messageOptions: r, virtualize: i = !1, scrollRef: a, estimateSize: o = 120 }) {
	"use no memo";
	let s = useCallback((e) => typeof r == "function" ? r(e) : r, [r]), c = useVirtualizer({
		count: e.length,
		getScrollElement: () => a?.current ?? null,
		estimateSize: () => o,
		overscan: 3,
		enabled: i && !!a
	}), l = i && a ? c.getVirtualItems() : [];
	if (i && a && e.length > 0) {
		let r = l[0]?.start ?? 0, i = c.getTotalSize() - (l[l.length - 1]?.end ?? 0);
		return /* @__PURE__ */ jsxs("div", {
			style: {
				height: "100%",
				width: "100%"
			},
			children: [/* @__PURE__ */ jsx("div", {
				style: {
					paddingTop: `${r}px`,
					paddingBottom: `${Math.max(0, i)}px`
				},
				children: l.map((n) => {
					let r = e[n.index], i = s(r);
					return /* @__PURE__ */ jsx("div", {
						"data-index": n.index,
						ref: c.measureElement,
						style: { marginBottom: "1rem" },
						children: /* @__PURE__ */ jsx(MemoizedChatMessage, {
							showTimeStamp: t,
							...r,
							...i
						})
					}, r.id);
				})
			}), n && /* @__PURE__ */ jsx(TypingIndicator, {})]
		});
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [e.map((e) => {
			let n = s(e);
			return /* @__PURE__ */ jsx(MemoizedChatMessage, {
				showTimeStamp: t,
				...e,
				...n
			}, e.id);
		}), n && /* @__PURE__ */ jsx(TypingIndicator, {})]
	});
});
MessageList.displayName = "MessageList";
const recordAudio = (function() {
	let e = async function(t) {
		try {
			let n = new MediaRecorder(t, { mimeType: "audio/webm;codecs=opus" }), r = [];
			return new Promise((t, i) => {
				n.ondataavailable = (e) => {
					e.data.size > 0 && r.push(e.data);
				}, n.onstop = () => {
					t(new Blob(r, { type: "audio/webm" }));
				}, n.onerror = () => {
					i(/* @__PURE__ */ Error("MediaRecorder error occurred"));
				}, n.start(1e3), e.currentRecorder = n;
			});
		} catch (e) {
			let t = e instanceof Error ? e.message : "Unknown error occurred";
			throw Error("Failed to start recording: " + t);
		}
	};
	return e.stop = () => {
		let t = e.currentRecorder;
		t && t.state !== "inactive" && t.stop(), delete e.currentRecorder;
	}, e;
})();
function useChatVoice(e = {}) {
	let { config: t, mode: n = "native", transcribeAudio: r, onTranscript: i, onTranscriptionComplete: a, onSpeechStart: o, onSpeechEnd: s, onError: c } = e, { setSpeaking: u, setCurrentCharIndex: d, setCharOffset: f, setIsPaused: p, stop: g, speakingMessageId: _, activeText: y } = useSpeechStore(), [b, S] = useState(!1), [w, T] = useState(!1), [E, D] = useState(""), [O, k] = useState(""), [A, j] = useState(null), [M, N] = useState({
		...defaultVoiceConfig,
		...t
	}), [P, F] = useState(!1), [da, I] = useState(!1), [L, R] = useState(null), z = useRef(null), [fa, B] = useState([]), [H, U] = useState(null), W = useMemo(() => getVoiceSupport(), []), [G, K] = useState(!1);
	useEffect(() => {
		K(!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia));
	}, []);
	let pa = useMemo(() => n === "native" ? W.speechRecognition : G && !!r, [
		n,
		W.speechRecognition,
		G,
		r
	]), q = useRef(null), J = useRef(null);
	useEffect(() => {
		if (W.speechRecognition && (q.current = new SpeechRecognitionManager(M), q.current.onStart = () => {
			S(!0), j(null), o?.();
		}, q.current.onEnd = () => {
			S(!1), s?.();
		}, q.current.onError = (e) => {
			j(e), S(!1), c?.(e);
		}, q.current.onResult = (e, t) => {
			t ? (D((t) => t + e), k("")) : k(e), i?.(e, t);
		}), W.speechSynthesis) {
			J.current = new SpeechSynthesisManager(M), J.current.onStart = () => {
				T(!0);
			}, J.current.onEnd = () => {
				T(!1);
			}, J.current.onError = (e) => {
				j(e), T(!1), g();
			}, J.current.onPause = () => {
				p(!0);
			}, J.current.onResume = () => {
				p(!1);
			}, J.current.onBoundary = (e) => {
				d(e);
			};
			let e = () => {
				let e = J.current?.getVoices() || [];
				if (B(e), !H && e.length > 0) {
					let t = e.filter((e) => e.lang.toLowerCase().startsWith(M.lang.toLowerCase().split("-")[0]));
					t.length > 0 && U(t[0]);
				}
			};
			J.current.onEnd = () => {
				T(!1), g();
			}, e(), typeof window < "u" && window.speechSynthesis && (window.speechSynthesis.onvoiceschanged = e);
		}
		return () => {
			q.current?.destroy(), J.current?.destroy();
		};
	}, []);
	let Y = useCallback((e) => {
		N((t) => {
			let n = {
				...t,
				...e
			};
			return q.current?.updateConfig(n), J.current?.updateConfig(n), n;
		});
	}, []), Z = useCallback(async () => {
		if (j(null), k(""), n === "native") q.current?.start();
		else try {
			S(!0), F(!0);
			let e = await navigator.mediaDevices.getUserMedia({ audio: !0 });
			R(e), z.current = recordAudio(e), o?.();
		} catch (e) {
			let t = e instanceof Error ? e.message : "Failed to start recording";
			j(t), S(!1), F(!1), c?.(t);
		}
	}, [
		n,
		o,
		c
	]), Q = useCallback(async () => {
		if (n === "native") q.current?.stop();
		else {
			F(!1), I(!0);
			try {
				recordAudio.stop();
				let e = await z.current;
				if (e && r) {
					let t = await r(e);
					D((e) => e + t), a?.(t);
				}
			} catch (e) {
				let t = e instanceof Error ? e.message : "Error transcribing audio";
				console.error(t, e), j(t), c?.(t);
			} finally {
				I(!1), S(!1), L && (L.getTracks().forEach((e) => e.stop()), R(null)), z.current = null, s?.();
			}
		}
	}, [
		n,
		r,
		a,
		L,
		s,
		c
	]), ma = useCallback(async () => {
		b ? await Q() : await Z();
	}, [
		b,
		Z,
		Q
	]), ha = useCallback(() => {
		D(""), k("");
	}, []), $ = useCallback((e, t) => {
		j(null);
		let n = stripMarkdownForSpeech(e);
		H && J.current?.updateConfig({ voiceURI: H.voiceURI }), t && u(t, n), J.current?.speak(n);
	}, [H, u]), _a = useCallback(() => {
		J.current?.stop(), g();
	}, [g]), va = useCallback(() => {
		J.current?.pause(), p(!0);
	}, [p]), ya = useCallback(() => {
		J.current?.resume(), p(!1);
	}, [p]), ba = useCallback((e) => {
		!_ || !y || (J.current?.stop(), f(e), u(_, y), H && J.current?.updateConfig({ voiceURI: H.voiceURI }), J.current?.speakFrom(y, e));
	}, [
		_,
		y,
		H,
		f,
		u
	]), xa = useCallback((e, t) => {
		w ? _a() : $(e, t);
	}, [
		w,
		$,
		_a
	]), Sa = useCallback((e) => {
		U(e), e && Y({ voiceURI: e.voiceURI });
	}, [Y]);
	return {
		isListening: b,
		isSpeaking: w,
		isRecording: P,
		isTranscribing: da,
		transcript: E,
		interimTranscript: O,
		error: A,
		audioStream: L,
		isRecognitionSupported: W.speechRecognition,
		isSynthesisSupported: W.speechSynthesis,
		isSpeechSupported: pa,
		startListening: Z,
		stopListening: Q,
		toggleListening: ma,
		clearTranscript: ha,
		speak: $,
		stopSpeaking: _a,
		pauseSpeaking: va,
		resumeSpeaking: ya,
		seekAndSpeak: ba,
		toggleSpeaking: xa,
		availableVoices: fa,
		selectedVoice: H,
		setSelectedVoice: Sa,
		voiceConfig: M,
		updateConfig: Y
	};
}
function SpeakButton({ content: e, voiceConfig: t, className: n, size: r = "icon", variant: i = "ghost", messageId: a }) {
	let { isSynthesisSupported: s, isSpeaking: l, toggleSpeaking: u } = useChatVoice({ config: t }), { speakingMessageId: f } = useSpeechStore(), p = l && f === a;
	return s ? /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			type: "button",
			size: r,
			variant: i,
			className: cn("h-6 w-6 transition-colors", p && "text-primary bg-primary/10", n),
			onClick: () => u(e, a),
			"aria-label": p ? "Stop speaking" : "Listen to message",
			children: p ? /* @__PURE__ */ jsx(Square, {
				className: "h-3 w-3",
				fill: "currentColor"
			}) : /* @__PURE__ */ jsx(Volume2, {})
		})
	}), /* @__PURE__ */ jsx(TooltipContent, {
		side: "top",
		className: "text-xs",
		children: p ? "Stop" : "Listen"
	})] }) }) : null;
}
function Feedback({ onRateResponse: e, messageId: t, rating: n, comment: r }) {
	let [i, a] = useState(!1), [s, l] = useState(null), [u, f] = useState(n ? n * 5 : null), [p, h] = useState(r || "");
	return React.useEffect(() => {
		f(n ? n * 5 : null);
	}, [n]), React.useEffect(() => {
		h(r || "");
	}, [r]), /* @__PURE__ */ jsxs(Popover, {
		open: i,
		onOpenChange: (e) => {
			a(e), e && (f(n ? n * 5 : null), h(r || ""));
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
						className: cn("size-6 transition-colors duration-200 text-primary ", n ? "bg-primary/10 hover:bg-primary/20" : "hover:text-foreground"),
						children: /* @__PURE__ */ jsx(Heart, { className: cn("size-3.5", n && "fill-current") })
					})
				})
			}), /* @__PURE__ */ jsx(TooltipContent, { children: "Rate Response" })]
		}) }), /* @__PURE__ */ jsx(PopoverContent, {
			className: "w-80 p-4",
			align: "end",
			side: "top",
			children: /* @__PURE__ */ jsxs("form", {
				onSubmit: (n) => {
					n.preventDefault(), u && (e(t, u / 5, p.trim() || void 0), a(!1));
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
						children: (() => Array.from({ length: 5 }).map((e, t) => {
							let n = t + 1;
							return /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => f(n),
								onMouseEnter: () => l(n),
								onMouseLeave: () => l(null),
								className: "p-1 focus:outline-none transition-transform hover:scale-110",
								children: /* @__PURE__ */ jsx(Heart, { className: cn("size-5 transition-colors", (s ?? u ?? 0) >= n ? "fill-primary text-primary" : "text-muted-foreground/30") })
							}, t);
						}))()
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx("label", {
							htmlFor: `comment-${t}`,
							className: "sr-only",
							children: "Comment"
						}), /* @__PURE__ */ jsx("textarea", {
							id: `comment-${t}`,
							value: p,
							onChange: (e) => h(e.target.value),
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
							onClick: () => a(!1),
							children: "Cancel"
						}), /* @__PURE__ */ jsx(Button, {
							type: "submit",
							size: "sm",
							disabled: !u,
							children: "Submit"
						})]
					})
				]
			})
		})]
	});
}
function ChatMessages({ className: e }) {
	let { messages: t, isGenerating: n, rateResponse: r, voiceConfig: i } = useChatContext(), { displayMessages: a, isTyping: s } = useMessageDisplay({
		messages: t || [],
		isGenerating: n
	}), { containerRef: l, scrollToBottom: u, handleScroll: d, shouldAutoScroll: f, handleTouchStart: p, isScrollable: h } = useAutoScroll([a]), g = useCallback((e) => ({
		actions: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ jsx(CopyButton, {
					content: e.content,
					copyMessage: "Copied to clipboard!"
				}),
				e.content && /* @__PURE__ */ jsx(SpeakButton, {
					content: e.content,
					voiceConfig: i,
					messageId: e.id
				}),
				e.content && r && e.role === "assistant" && /* @__PURE__ */ jsx(Feedback, {
					messageId: e.id,
					onRateResponse: r,
					rating: e.rating,
					comment: e.comment
				})
			]
		}),
		isGenerating: n && e.role === "assistant" && !e.content
	}), [
		r,
		n,
		i
	]), _ = a.length > 0;
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-col h-full w-full", e),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex-1 relative overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: cn("h-full w-full overflow-y-auto", _ && "py-4"),
				ref: l,
				onScroll: d,
				onTouchStart: p,
				children: /* @__PURE__ */ jsx(MessageList, {
					messages: a,
					isTyping: s,
					messageOptions: g
				})
			}), h && !f && /* @__PURE__ */ jsx("div", {
				className: "absolute bottom-4 right-6 pointer-events-auto z-10",
				children: /* @__PURE__ */ jsx(Button, {
					onClick: u,
					className: "h-9 w-9 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg transition-all duration-200 hover:shadow-xl animate-in fade-in-0 slide-in-from-bottom-2",
					size: "icon",
					variant: "default",
					children: /* @__PURE__ */ jsx(ArrowDown, {})
				})
			})]
		})
	});
}
function useAutosizeTextArea({ ref: e, maxHeight: t = 2 ** 53 - 1, borderWidth: n = 0, dependencies: r }) {
	let i = useRef(null);
	useLayoutEffect(() => {
		if (!e.current) return;
		let r = e.current, a = n * 2;
		i.current === null && (i.current = r.scrollHeight - a), r.style.removeProperty("height");
		let o = r.scrollHeight, s = Math.min(o, t), c = Math.max(s, i.current);
		r.style.height = `${c + a}px`;
	}, [
		t,
		e,
		...r
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
function AudioVisualizer({ stream: e, isRecording: t, onClick: n }) {
	let r = useRef(null), i = useRef(null), a = useRef(null), o = useRef(0), s = useRef(null), c = () => {
		o.current && cancelAnimationFrame(o.current), i.current && i.current.close();
	};
	useEffect(() => c, []), useEffect(() => {
		e && t ? l() : c();
	}, [e, t]), useEffect(() => {
		let e = () => {
			if (r.current && s.current) {
				let e = s.current, t = r.current, n = window.devicePixelRatio || 1, i = e.getBoundingClientRect();
				t.width = (i.width - 2) * n, t.height = (i.height - 2) * n, t.style.width = `${i.width - 2}px`, t.style.height = `${i.height - 2}px`;
			}
		};
		return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e);
	}, []);
	let l = async () => {
		try {
			let t = new AudioContext();
			i.current = t;
			let n = t.createAnalyser();
			n.fftSize = AUDIO_CONFIG.FFT_SIZE, n.smoothingTimeConstant = AUDIO_CONFIG.SMOOTHING, a.current = n, t.createMediaStreamSource(e).connect(n), f();
		} catch (e) {
			console.error("Error starting visualization:", e);
		}
	}, u = (e) => {
		let t = Math.floor(e * AUDIO_CONFIG.COLOR.INTENSITY_RANGE) + AUDIO_CONFIG.COLOR.MIN_INTENSITY;
		return `rgb(${t}, ${t}, ${t})`;
	}, d = (e, t, n, r, i, a) => {
		e.fillStyle = a, e.fillRect(t, n - i, r, i), e.fillRect(t, n, r, i);
	}, f = () => {
		if (!t) return;
		let e = r.current, n = e?.getContext("2d");
		if (!e || !n || !a.current) return;
		let i = window.devicePixelRatio || 1;
		n.scale(i, i);
		let s = a.current, c = s.frequencyBinCount, l = new Uint8Array(c), f = () => {
			o.current = requestAnimationFrame(f), s.getByteFrequencyData(l), n.clearRect(0, 0, e.width / i, e.height / i);
			let t = Math.max(AUDIO_CONFIG.MIN_BAR_WIDTH, e.width / i / c - AUDIO_CONFIG.BAR_SPACING), r = e.height / i / 2, a = 0;
			for (let e = 0; e < c; e++) {
				let i = l[e] / 255, o = Math.max(AUDIO_CONFIG.MIN_BAR_HEIGHT, i * r);
				d(n, a, r, t, o, u(i)), a += t + AUDIO_CONFIG.BAR_SPACING;
			}
		};
		f();
	};
	return /* @__PURE__ */ jsx("div", {
		ref: s,
		className: "h-full w-full cursor-pointer rounded-lg bg-background/80 backdrop-blur",
		onClick: n,
		children: /* @__PURE__ */ jsx("canvas", {
			ref: r,
			className: "h-full w-full"
		})
	});
}
function InterruptPrompt({ isOpen: e, close: t }) {
	return /* @__PURE__ */ jsx(AnimatePresence, { children: e && /* @__PURE__ */ jsxs(m.div, {
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
			onClick: t,
			"aria-label": "Close",
			children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
		})]
	}) });
}
function PromptSuggestions({ append: e, suggestions: t }) {
	return /* @__PURE__ */ jsx("div", {
		className: "flex flex-wrap gap-1 px-4 py-2",
		children: t.map((t) => /* @__PURE__ */ jsx(Badge, {
			className: "cursor-pointer hover:scale-[0.99]",
			onClick: () => {
				e({
					role: "user",
					content: t
				});
			},
			children: /* @__PURE__ */ jsx("p", { children: t })
		}, t))
	});
}
var FilePreview = lazy(() => import("./file-preview--UDtdP8v.js").then((e) => ({ default: e.FilePreview })));
function MessageInput({ placeholder: e = "Ask AI...", className: t, onKeyDown: n, submitOnEnter: r = !0, stop: i, isGenerating: a, enableInterrupt: s = !0, transcribeAudio: c, suggestions: l, append: u, isListening: f, startListening: p, stopListening: h, isSpeechSupported: g, ..._ }) {
	let { allowAttachments: v, files: y, setFiles: b, ...x } = _, [S, C] = useState(!1), [w, T] = useState(!1), { isListening: E, isSpeechSupported: D, isRecording: O, isTranscribing: k, audioStream: A, toggleListening: j, stopListening: M } = useChatVoice({
		mode: c ? "record" : "native",
		transcribeAudio: c,
		onTranscript: (e, t) => {
			if (t && e.trim()) {
				let t = (_.value || "").trim() + " " + e.trim();
				_.setInput ? _.setInput(t.trim()) : x.onChange && x.onChange({ target: { value: t.trim() } });
			}
		},
		onTranscriptionComplete: (e) => {
			if (e.trim()) {
				let t = (_.value || "").trim() + " " + e.trim();
				_.setInput ? _.setInput(t.trim()) : x.onChange && x.onChange({ target: { value: t.trim() } });
			}
		}
	}), N = M, P = f ?? E, F = g ?? D, da = () => {
		f !== void 0 && p && h ? f ? h() : p() : j();
	};
	useEffect(() => {
		a || T(!1);
	}, [a]);
	let I = (e) => {
		_.allowAttachments && _.setFiles((t) => t === null ? e : e === null ? t : [...t, ...e]);
	}, L = (e) => {
		_.allowAttachments === !0 && (e.preventDefault(), C(!0));
	}, R = (e) => {
		_.allowAttachments === !0 && (e.preventDefault(), C(!1));
	}, z = (e) => {
		if (C(!1), _.allowAttachments !== !0) return;
		e.preventDefault();
		let t = e.dataTransfer;
		t.files.length && I(Array.from(t.files));
	}, fa = (e) => {
		let t = e.clipboardData?.items;
		if (!t) return;
		let n = e.clipboardData.getData("text");
		if (n && n.length > 500 && _.allowAttachments) {
			e.preventDefault();
			let t = new Blob([n], { type: "text/plain" }), r = Date.now();
			I([new File([t], "Pasted text", {
				type: "text/plain",
				lastModified: r
			})]);
			return;
		}
		let r = Array.from(t).map((e) => e.getAsFile()).filter((e) => e !== null);
		_.allowAttachments && r.length > 0 && I(r);
	}, V = (e) => {
		if (r && e.key === "Enter" && !e.shiftKey) {
			if (e.preventDefault(), a && i && s) {
				if (w) i(), T(!1), e.currentTarget.form?.requestSubmit();
				else if (_.value || _.allowAttachments && _.files?.length) {
					T(!0);
					return;
				}
			}
			e.currentTarget.form?.requestSubmit();
		}
		n?.(e);
	}, H = useRef(null), [U, W] = useState(0);
	useEffect(() => {
		if (!H.current) return;
		let e = new ResizeObserver(([e]) => {
			W(e.contentRect.height);
		});
		return e.observe(H.current), () => e.disconnect();
	}, []);
	let G = _.allowAttachments && _.files && _.files.length > 0;
	return useAutosizeTextArea({
		ref: H,
		maxHeight: 200,
		borderWidth: 1,
		dependencies: [_.value, G]
	}), /* @__PURE__ */ jsxs("div", {
		className: "relative flex w-full",
		onDragOver: L,
		onDragLeave: R,
		onDrop: z,
		children: [
			s && /* @__PURE__ */ jsx(InterruptPrompt, {
				isOpen: w,
				close: () => T(!1)
			}),
			/* @__PURE__ */ jsx(RecordingPrompt, {
				isVisible: O,
				onStopRecording: N
			}),
			l && u && l.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "mb-2",
				children: /* @__PURE__ */ jsx(PromptSuggestions, {
					append: u,
					suggestions: l
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative flex w-full items-center space-x-2",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ jsx("textarea", {
						"aria-label": "Write your prompt here",
						placeholder: e,
						ref: H,
						onPaste: fa,
						onKeyDown: V,
						className: cn("z-10 w-full grow resize-none rounded-lg border border-input bg-background/50 backdrop-blur-sm p-4 pr-28 text-sm ring-offset-background transition-all duration-200 placeholder:text-muted-foreground/70 focus-visible:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-background disabled:cursor-not-allowed disabled:opacity-50 shadow-sm", G && "pb-20", t),
						...x
					}), _.allowAttachments && /* @__PURE__ */ jsx("div", {
						className: "absolute inset-x-3 bottom-0 z-20 py-3",
						children: /* @__PURE__ */ jsx("div", {
							className: "flex space-x-3",
							children: /* @__PURE__ */ jsx(AnimatePresence, {
								mode: "popLayout",
								children: _.files?.map((e) => /* @__PURE__ */ jsx(Suspense, {
									fallback: /* @__PURE__ */ jsx("div", { className: "h-16 w-16 animate-pulse bg-muted rounded-xl" }),
									children: /* @__PURE__ */ jsx(FilePreview, {
										file: e,
										onRemove: () => {
											_.setFiles((t) => {
												if (!t) return null;
												let n = Array.from(t).filter((t) => t !== e);
												return n.length === 0 ? null : n;
											});
										}
									})
								}, e.name + String(e.lastModified)))
							})
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute right-3 top-3 z-20 flex gap-1",
				children: /* @__PURE__ */ jsxs(TooltipProvider, {
					delayDuration: 0,
					children: [
						_.allowAttachments && /* @__PURE__ */ jsx(AttachmentButton, { onClick: async () => {
							I(await showFileUploadDialog());
						} }),
						/* @__PURE__ */ jsx(VoiceInputButton, {
							isSupported: !!F,
							isListening: !!P,
							onClick: da
						}),
						/* @__PURE__ */ jsx(SubmitActionButton, {
							isGenerating: a,
							stop: i,
							disabled: _.value === "" || a
						})
					]
				})
			}),
			_.allowAttachments && /* @__PURE__ */ jsx(FileUploadOverlay, { isDragging: S }),
			/* @__PURE__ */ jsx(RecordingControls, {
				isRecording: O,
				isTranscribing: k,
				audioStream: A,
				textAreaHeight: U,
				onStopRecording: N
			})
		]
	});
}
MessageInput.displayName = "MessageInput";
function FileUploadOverlay({ isDragging: e }) {
	return /* @__PURE__ */ jsx(AnimatePresence, { children: e && /* @__PURE__ */ jsxs(m.div, {
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
	let e = document.createElement("input");
	return e.type = "file", e.multiple = !0, e.accept = "*/*", e.click(), new Promise((t) => {
		e.onchange = (e) => {
			let n = e.currentTarget.files;
			if (n) {
				t(Array.from(n));
				return;
			}
			t(null);
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
function RecordingPrompt({ isVisible: e, onStopRecording: t }) {
	return /* @__PURE__ */ jsx(AnimatePresence, { children: e && /* @__PURE__ */ jsx(m.div, {
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
		onClick: t,
		children: /* @__PURE__ */ jsxs("span", {
			className: "mx-2.5 flex items-center",
			children: [/* @__PURE__ */ jsx(Info, { className: "mr-2 h-3 w-3" }), "Click to finish recording"]
		})
	}) });
}
function RecordingControls({ isRecording: e, isTranscribing: t, audioStream: n, textAreaHeight: r, onStopRecording: i }) {
	return e ? /* @__PURE__ */ jsx("div", {
		className: "absolute inset-[1px] z-50 overflow-hidden rounded-xl",
		style: { height: r - 2 },
		children: /* @__PURE__ */ jsx(AudioVisualizer, {
			stream: n,
			isRecording: e,
			onClick: i
		})
	}) : t ? /* @__PURE__ */ jsx("div", {
		className: "absolute inset-[1px] z-50 overflow-hidden rounded-xl",
		style: { height: r - 2 },
		children: /* @__PURE__ */ jsx(TranscribingOverlay, {})
	}) : null;
}
function AttachmentButton({ onClick: e, className: t }) {
	return /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			type: "button",
			size: "icon",
			variant: "ghost",
			className: cn("h-8 w-8 text-muted-foreground hover:text-foreground", t),
			"aria-label": "Attach a file",
			onClick: e,
			children: /* @__PURE__ */ jsx(Paperclip, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: "Attach file" })] });
}
function VoiceInputButton({ isSupported: e, isListening: t, onClick: n }) {
	return e ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			type: "button",
			variant: "ghost",
			"aria-label": t ? "Stop recording" : "Voice input",
			size: "icon",
			onClick: n,
			className: cn("h-8 w-8 transition-all duration-200", t ? "bg-red-500/10 text-red-500 hover:bg-red-500/20" : "text-muted-foreground hover:text-foreground"),
			children: t ? /* @__PURE__ */ jsxs("span", {
				className: "relative flex h-3 w-3",
				children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-3 w-3 rounded-full bg-red-500" })]
			}) : /* @__PURE__ */ jsx(Mic, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: t ? "Stop recording" : "Use voice input" })] }) : null;
}
function SubmitActionButton({ isGenerating: e, stop: t, disabled: n }) {
	return e && t ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			type: "button",
			size: "icon",
			variant: "ghost",
			className: "h-8 w-8 text-muted-foreground hover:text-foreground",
			"aria-label": "Stop generating",
			onClick: t,
			children: /* @__PURE__ */ jsx(Square, { className: "h-3 w-3 animate-pulse fill-current" })
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: "Stop generating" })] }) : /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ jsx(Button, {
			type: "submit",
			size: "icon",
			className: cn("h-8 w-8 rounded-full transition-all duration-200", n ? "opacity-50" : "bg-primary text-primary-foreground shadow-sm"),
			"aria-label": "Send message",
			disabled: n,
			children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ jsx(TooltipContent, { children: "Send message" })] });
}
function createFileList(e) {
	let t = new DataTransfer();
	for (let n of Array.from(e)) t.items.add(n);
	return t.files;
}
var ChatForm = forwardRef(({ children: e, handleSubmit: t, className: n }, r) => {
	let [i, a] = useState(null);
	return /* @__PURE__ */ jsx("form", {
		ref: r,
		onSubmit: (e) => {
			if (!i) {
				t(e);
				return;
			}
			t(e, { experimental_attachments: createFileList(i) }), a(null);
		},
		className: n,
		children: e({
			files: i,
			setFiles: a
		})
	});
});
ChatForm.displayName = "ChatForm";
function ChatInput({ placeholder: e = "Hi, how can I help you?", className: t, transcribeAudio: n }) {
	let { messages: r, input: i, setInput: a, sendMessage: s, stopGeneration: c, setMessages: l, isGenerating: u, isListening: d, startListening: f, stopListening: p, isSpeechSupported: h } = useChatContext(), g = useCallback(async (e) => {
		e?.preventDefault?.();
		let t = i.trim();
		t && (a(""), await s(t));
	}, [
		i,
		a,
		s
	]), _ = useCallback(() => {
		if (c(), !l) return;
		let e = [...r], t = e.slice().reverse().find((e) => e.role === "assistant");
		if (!t) return;
		let n = !1, i = { ...t };
		if (t.toolInvocations) {
			let e = t.toolInvocations.map((e) => e.state === "call" ? (n = !0, {
				...e,
				state: "result",
				result: {
					content: "Tool execution was cancelled",
					__cancelled: !0
				}
			}) : e);
			n && (i = {
				...i,
				toolInvocations: e
			});
		}
		let a = t.parts;
		if (a?.length) {
			let e = a.map((e) => {
				let t = e;
				return t.type === "tool-invocation" && t.toolInvocation?.state === "call" ? (n = !0, {
					...t,
					toolInvocation: {
						...t.toolInvocation,
						state: "result",
						result: {
							content: "Tool execution was cancelled",
							__cancelled: !0
						}
					}
				}) : e;
			});
			n && (i = {
				...i,
				parts: e
			});
		}
		if (n) {
			let n = e.findIndex((e) => e.id === t.id);
			n !== -1 && (e[n] = i, l(e));
		}
	}, [
		c,
		l,
		r
	]), v = useCallback((e) => {
		a(e.target.value);
	}, [a]);
	return /* @__PURE__ */ jsx(ChatForm, {
		className: cn("chat-input-container", r.length > 0 ? "py-4" : "py-2", t),
		isPending: u,
		handleSubmit: g,
		children: ({ files: t, setFiles: r }) => /* @__PURE__ */ jsx(MessageInput, {
			value: i,
			onChange: v,
			allowAttachments: !0,
			files: t,
			setFiles: r,
			stop: _,
			isGenerating: u,
			transcribeAudio: n,
			placeholder: e,
			isListening: d,
			startListening: f,
			stopListening: p,
			isSpeechSupported: h
		})
	});
}
function ChatSuggestions() {
	let { suggestions: e, sendMessage: t } = useChatContext(), n = useCallback((e) => {
		t(e.content);
	}, [t]);
	return e.length === 0 ? null : /* @__PURE__ */ jsx(PromptSuggestions, {
		append: n,
		suggestions: e
	});
}
const Chat = {
	Root: ChatRoot,
	Messages: ChatMessages,
	Input: ChatInput,
	Suggestions: ChatSuggestions
};
function createContext2(e, t) {
	let n = React$1.createContext(t), r = (e) => {
		let { children: t, ...r } = e, i = React$1.useMemo(() => r, Object.values(r));
		return /* @__PURE__ */ jsx(n.Provider, {
			value: i,
			children: t
		});
	};
	r.displayName = e + "Provider";
	function i(r) {
		let i = React$1.useContext(n);
		if (i) return i;
		if (t !== void 0) return t;
		throw Error(`\`${r}\` must be used within \`${e}\``);
	}
	return [r, i];
}
function createContextScope(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = React$1.createContext(r), a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = React$1.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ jsx(s.Provider, {
				value: c,
				children: r
			});
		};
		o.displayName = t + "Provider";
		function s(n, o) {
			let s = o?.[e]?.[a] || i, c = React$1.useContext(s);
			if (c) return c;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => React$1.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return React$1.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, composeContextScopes(i, ...t)];
}
function composeContextScopes(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = () => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot(e) {
	let t = /* @__PURE__ */ createSlotClone(e), n = React$1.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = React$1.Children.toArray(r), o = a.find(isSlottable);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? React$1.Children.count(e) > 1 ? React$1.Children.only(null) : React$1.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ jsx(t, {
				...i,
				ref: n,
				children: React$1.isValidElement(e) ? React$1.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ jsx(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(e) {
	let t = React$1.forwardRef((e, t) => {
		let { children: n, ...i } = e;
		if (React$1.isValidElement(n)) {
			let e = getElementRef(n), a = mergeProps(i, n.props);
			return n.type !== React$1.Fragment && (a.ref = t ? composeRefs(t, e) : e), React$1.cloneElement(n, a);
		}
		return React$1.Children.count(n) > 1 ? React$1.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(e) {
	return React$1.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function getElementRef(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
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
].reduce((e, t) => {
	let n = /* @__PURE__ */ createSlot(`Primitive.${t}`), r = React$1.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {}), DIALOG_NAME = "Dialog", [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME), [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME), Dialog$1 = (e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !0 } = e, s = React$1.useRef(null), c = React$1.useRef(null), [l, d] = useControllableState({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: DIALOG_NAME
	});
	return /* @__PURE__ */ jsx(DialogProvider, {
		scope: t,
		triggerRef: s,
		contentRef: c,
		contentId: useId$1(),
		titleId: useId$1(),
		descriptionId: useId$1(),
		open: l,
		onOpenChange: d,
		onOpenToggle: React$1.useCallback(() => d((e) => !e), [d]),
		modal: o,
		children: n
	});
};
Dialog$1.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger", DialogTrigger$1 = React$1.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = useDialogContext(TRIGGER_NAME, n), a = useComposedRefs(t, i.triggerRef);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.contentId,
		"data-state": getState(i.open),
		...r,
		ref: a,
		onClick: composeEventHandlers(e.onClick, i.onOpenToggle)
	});
});
DialogTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal", [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, { forceMount: void 0 }), DialogPortal$1 = (e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = useDialogContext(PORTAL_NAME, t);
	return /* @__PURE__ */ jsx(PortalProvider, {
		scope: t,
		forceMount: n,
		children: React$1.Children.map(r, (e) => /* @__PURE__ */ jsx(Presence, {
			present: n || a.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
};
DialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay", DialogOverlay$1 = React$1.forwardRef((e, t) => {
	let n = usePortalContext(OVERLAY_NAME, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = useDialogContext(OVERLAY_NAME, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ jsx(Presence, {
		present: r || a.open,
		children: /* @__PURE__ */ jsx(DialogOverlayImpl, {
			...i,
			ref: t
		})
	}) : null;
});
DialogOverlay$1.displayName = OVERLAY_NAME;
var Slot = /* @__PURE__ */ createSlot("DialogOverlay.RemoveScroll"), DialogOverlayImpl = React$1.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = useDialogContext(OVERLAY_NAME, n);
	return /* @__PURE__ */ jsx(Combination_default, {
		as: Slot,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ jsx(Primitive.div, {
			"data-state": getState(i.open),
			...r,
			ref: t,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}), CONTENT_NAME = "DialogContent", DialogContent$1 = React$1.forwardRef((e, t) => {
	let n = usePortalContext(CONTENT_NAME, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = useDialogContext(CONTENT_NAME, e.__scopeDialog);
	return /* @__PURE__ */ jsx(Presence, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ jsx(DialogContentModal, {
			...i,
			ref: t
		}) : /* @__PURE__ */ jsx(DialogContentNonModal, {
			...i,
			ref: t
		})
	});
});
DialogContent$1.displayName = CONTENT_NAME;
var DialogContentModal = React$1.forwardRef((e, t) => {
	let n = useDialogContext(CONTENT_NAME, e.__scopeDialog), r = React$1.useRef(null), i = useComposedRefs(t, n.contentRef, r);
	return React$1.useEffect(() => {
		let e = r.current;
		if (e) return hideOthers(e);
	}, []), /* @__PURE__ */ jsx(DialogContentImpl, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: composeEventHandlers(e.onCloseAutoFocus, (e) => {
			e.preventDefault(), n.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(e.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(e.onFocusOutside, (e) => e.preventDefault())
	});
}), DialogContentNonModal = React$1.forwardRef((e, t) => {
	let n = useDialogContext(CONTENT_NAME, e.__scopeDialog), r = React$1.useRef(!1), i = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(DialogContentImpl, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}), DialogContentImpl = React$1.forwardRef((e, t) => {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, ...o } = e, c = useDialogContext(CONTENT_NAME, n), l = React$1.useRef(null), u = useComposedRefs(t, l);
	return useFocusGuards(), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(FocusScope, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ jsx(DismissableLayer, {
			role: "dialog",
			id: c.contentId,
			"aria-describedby": c.descriptionId,
			"aria-labelledby": c.titleId,
			"data-state": getState(c.open),
			...o,
			ref: u,
			onDismiss: () => c.onOpenChange(!1)
		})
	}), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(TitleWarning, { titleId: c.titleId }), /* @__PURE__ */ jsx(DescriptionWarning, {
		contentRef: l,
		descriptionId: c.descriptionId
	})] })] });
}), TITLE_NAME = "DialogTitle", DialogTitle$1 = React$1.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = useDialogContext(TITLE_NAME, n);
	return /* @__PURE__ */ jsx(Primitive.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
});
DialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription", DialogDescription$1 = React$1.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = useDialogContext(DESCRIPTION_NAME, n);
	return /* @__PURE__ */ jsx(Primitive.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
});
DialogDescription$1.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose", DialogClose$1 = React$1.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = useDialogContext(CLOSE_NAME, n);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		...r,
		ref: t,
		onClick: composeEventHandlers(e.onClick, () => i.onOpenChange(!1))
	});
});
DialogClose$1.displayName = CLOSE_NAME;
function getState(e) {
	return e ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning", [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
	contentName: CONTENT_NAME,
	titleName: TITLE_NAME,
	docsSlug: "dialog"
}), TitleWarning = ({ titleId: e }) => {
	let t = useWarningContext(TITLE_WARNING_NAME), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
	return React$1.useEffect(() => {
		e && (document.getElementById(e) || console.error(n));
	}, [n, e]), null;
}, DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning", DescriptionWarning = ({ contentRef: e, descriptionId: t }) => {
	let n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${useWarningContext(DESCRIPTION_WARNING_NAME).contentName}}.`;
	return React$1.useEffect(() => {
		let r = e.current?.getAttribute("aria-describedby");
		t && r && (document.getElementById(t) || console.warn(n));
	}, [
		n,
		e,
		t
	]), null;
}, Root = Dialog$1, Trigger = DialogTrigger$1, Portal$1 = DialogPortal$1, Overlay = DialogOverlay$1, Content = DialogContent$1, Title = DialogTitle$1, Description = DialogDescription$1, Close = DialogClose$1, Sheet = Root, SheetPortal = Portal$1, SheetOverlay = React$1.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ jsx(Overlay, {
	ref: n,
	className: cn("chatbot-theme fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t
}));
SheetOverlay.displayName = Overlay.displayName;
var SheetContent = React$1.forwardRef(({ side: e = "right", className: t, children: n, ...r }, i) => /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(Content, {
	ref: i,
	className: cn("chatbot-theme fixed z-50 gap-4 border bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-300", e === "right" && "inset-y-0 right-0 h-full w-full max-w-sm data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", e === "left" && "inset-y-0 left-0 h-full w-full max-w-sm data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", t),
	...r,
	children: [n, /* @__PURE__ */ jsxs(Close, {
		className: "ring-offset-background focus:ring-ring data-[state=open]:bg-muted absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",
		children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = Content.displayName;
function SheetHeader({ className: e, ...t }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-col gap-y-1.5 border-b border-border/40 pb-3 text-left", e),
		...t
	});
}
function SheetTitle({ className: e, ...t }) {
	return /* @__PURE__ */ jsx(Title, {
		className: cn("text-lg font-semibold leading-none tracking-tight", e),
		...t
	});
}
function SheetDescription({ className: e, ...t }) {
	return /* @__PURE__ */ jsx(Description, {
		className: cn("text-muted-foreground text-sm", e),
		...t
	});
}
function Dialog({ ...e }) {
	return /* @__PURE__ */ jsx(Root, {
		"data-slot": "dialog",
		...e
	});
}
var DialogTrigger = React$1.forwardRef(({ ...e }, t) => /* @__PURE__ */ jsx(Trigger, {
	"data-slot": "dialog-trigger",
	...e,
	ref: t
}));
DialogTrigger.displayName = Trigger.displayName;
var DialogPortal = Portal$1, DialogOverlay = React$1.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ jsx(Overlay, {
	ref: n,
	"data-slot": "dialog-overlay",
	className: cn("chatbot-theme fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t
}));
DialogOverlay.displayName = Overlay.displayName;
var DialogContent = React$1.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ jsxs(DialogPortal, {
	"data-slot": "dialog-portal",
	children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(Content, {
		ref: r,
		"data-slot": "dialog-content",
		className: cn("chatbot-theme bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:max-w-lg", e),
		...n,
		children: [t, /* @__PURE__ */ jsxs(Close, {
			className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",
			children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})]
}));
DialogContent.displayName = Content.displayName;
function DialogHeader({ className: e, ...t }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-header",
		className: cn("flex flex-col gap-y-1.5 text-center sm:text-left", e),
		...t
	});
}
function DialogFooter({ className: e, ...t }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-footer",
		className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
		...t
	});
}
var DialogTitle = React$1.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ jsx(Title, {
	ref: n,
	"data-slot": "dialog-title",
	className: cn("text-lg font-semibold leading-none tracking-tight", e),
	...t
}));
DialogTitle.displayName = Title.displayName;
var DialogDescription = React$1.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ jsx(Description, {
	ref: n,
	"data-slot": "dialog-description",
	className: cn("text-muted-foreground text-sm", e),
	...t
}));
DialogDescription.displayName = Description.displayName;
var PAGE_SIZE = 20, SEARCH_DEBOUNCE_MS = 300;
function formatThreadDate(e) {
	if (!e) return "";
	try {
		let t = new Date(e);
		if (Number.isNaN(t.getTime())) return "";
		let n = /* @__PURE__ */ new Date(), r = Math.floor((n.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24));
		return r === 0 && t.getDate() === n.getDate() ? t.toLocaleTimeString(void 0, {
			hour: "numeric",
			minute: "2-digit"
		}) : r === 1 || r === 0 && t.getDate() !== n.getDate() ? "Yesterday" : r < 7 ? t.toLocaleDateString(void 0, { weekday: "short" }) : t.toLocaleDateString(void 0, {
			month: "short",
			day: "numeric"
		});
	} catch {
		return "";
	}
}
function groupThreadsByDate(e) {
	let t = [
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
	], n = /* @__PURE__ */ new Date();
	n.setHours(0, 0, 0, 0);
	let r = new Date(n);
	r.setDate(r.getDate() - 1);
	let i = new Date(n);
	return i.setDate(i.getDate() - 7), e.forEach((e) => {
		if (!e.updated_at) {
			t[3].items.push(e);
			return;
		}
		let a = new Date(e.updated_at);
		a.setHours(0, 0, 0, 0), a.getTime() === n.getTime() ? t[0].items.push(e) : a.getTime() === r.getTime() ? t[1].items.push(e) : a.getTime() >= i.getTime() ? t[2].items.push(e) : t[3].items.push(e);
	}), t.filter((e) => e.items.length > 0);
}
function ChatHistorySheet({ open: e, onOpenChange: t, userId: n, threadList: r, setThreadList: i, totalThreads: a, setTotalThreads: s, threadsLoading: l, setThreadsLoading: u, currentThreadId: d, onSelectThread: f, getThreads: p, deleteThread: h }) {
	let [g, _] = useState(""), [v, y] = useState(""), [b, x] = useState(!1), [S, C] = useState(null), [w, T] = useState(!1), E = useRef(null), D = useRef(!1), O = useRef(r.length);
	O.current = r.length, useEffect(() => {
		e || (_(""), y(""));
	}, [e]), useEffect(() => {
		if (!g.trim()) {
			y("");
			return;
		}
		let e = setTimeout(() => y(g.trim()), SEARCH_DEBOUNCE_MS);
		return () => clearTimeout(e);
	}, [g]);
	let k = useCallback((e) => {
		t(e), e || (i([]), s(0), _(""), y(""), C(null));
	}, [
		t,
		i,
		s
	]);
	useEffect(() => {
		if (!e || !n?.trim()) return;
		let t = !1;
		return u(!0), i([]), s(0), p({
			limit: PAGE_SIZE,
			offset: 0,
			search: v
		}).then(({ threads: e, total: n }) => {
			t || (i(e), s(n ?? 0));
		}).finally(() => {
			t || u(!1);
		}), () => {
			t = !0;
		};
	}, [
		e,
		n,
		v,
		p,
		i,
		s,
		u
	]), useEffect(() => {
		if (!e || !n?.trim() || l || r.length >= a || a <= 0) return;
		let t = E.current;
		if (!t) return;
		let o = new IntersectionObserver((e) => {
			if (!e[0]?.isIntersecting || D.current) return;
			let t = O.current;
			t >= a || (D.current = !0, x(!0), p({
				limit: PAGE_SIZE,
				offset: t,
				search: v || void 0
			}).then(({ threads: e }) => {
				i((t) => [...t, ...e]);
			}).finally(() => {
				D.current = !1, x(!1);
			}));
		}, {
			root: null,
			rootMargin: "100px",
			threshold: 0
		});
		return o.observe(t), () => o.disconnect();
	}, [
		e,
		n,
		l,
		r.length,
		a,
		v,
		p,
		i
	]);
	let A = useCallback(async () => {
		if (!(!S || !h)) {
			T(!0);
			try {
				await h(S), i((e) => e.filter((e) => e.thread_id !== S)), s(Math.max(0, a - 1)), C(null);
			} catch (e) {
				console.error("Failed to delete thread", e);
			} finally {
				T(!1);
			}
		}
	}, [
		S,
		h,
		i,
		a,
		s
	]);
	return /* @__PURE__ */ jsxs(Sheet, {
		open: e,
		onOpenChange: k,
		children: [/* @__PURE__ */ jsxs(SheetContent, {
			side: "right",
			className: "flex flex-col",
			onInteractOutside: (e) => e.preventDefault(),
			children: [
				/* @__PURE__ */ jsxs(SheetHeader, { children: [/* @__PURE__ */ jsx(SheetTitle, { children: "Chat history" }), /* @__PURE__ */ jsx(SheetDescription, { children: n?.trim() ? "Select a conversation to load." : "Sign in to see your conversations." })] }),
				n?.trim() ? /* @__PURE__ */ jsxs("div", {
					className: "flex items-center bg-muted/50 rounded-lg px-2 py-1.5 focus-within:bg-background focus-within:ring-1 focus-within:ring-ring transition-all",
					children: [/* @__PURE__ */ jsx(Search, { className: "h-4 w-4 shrink-0 text-muted-foreground ml-1" }), /* @__PURE__ */ jsx("input", {
						type: "search",
						placeholder: "Search...",
						value: g,
						onChange: (e) => _(e.target.value),
						className: "flex-1 bg-transparent border-0 outline-none text-sm ml-2 placeholder:text-muted-foreground py-0.5",
						"aria-label": "Search conversations"
					})]
				}) : null,
				/* @__PURE__ */ jsx("div", {
					className: "flex-1 overflow-y-auto min-h-0 scrollbar-thin scrollbar-thumb-muted-foreground/20 hover:scrollbar-thumb-muted-foreground/40",
					children: n?.trim() ? l ? /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center gap-2 py-8 text-muted-foreground",
						children: [/* @__PURE__ */ jsx(LoaderCircle, { className: "h-5 w-5 animate-spin" }), /* @__PURE__ */ jsx("span", { children: "Loading conversations…" })]
					}) : r.length === 0 ? /* @__PURE__ */ jsx("p", {
						className: "text-center text-sm text-muted-foreground py-8",
						children: v ? "No conversations match your search." : "No conversations yet."
					}) : /* @__PURE__ */ jsxs("div", {
						className: "py-2",
						children: [/* @__PURE__ */ jsx(AnimatePresence, {
							mode: "popLayout",
							initial: !1,
							children: groupThreadsByDate(r).map((e, t) => /* @__PURE__ */ jsxs(m.div, {
								className: "mb-6 last:mb-0",
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: t * .05 },
								children: [/* @__PURE__ */ jsx("h3", {
									className: "px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
									children: e.title
								}), /* @__PURE__ */ jsx("ul", {
									className: "space-y-1",
									children: e.items.map((e) => {
										let t = (e.preview || "").replace(/```[\s\S]*?```|`([^`]*)`|!\[.*?\]\(.*?\)|\[(.*?)\]\(.*?\)|(\*\*|__|\*|_|~~)(.*?)\3|^#{1,6}\s*|^>\s*|^\s*[-*+]\s+|^\s*\d+\.\s+|<[^>]+>/gm, "$1$2$4").trim() || "New Conversation", n = formatThreadDate(e.updated_at);
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
												className: cn("w-full justify-start font-normal h-auto p-3 relative transition-all duration-200 cursor-pointer", e.thread_id === d ? "bg-muted/80 shadow-sm" : "hover:bg-muted"),
												onClick: () => f(e.thread_id),
												children: /* @__PURE__ */ jsx("div", {
													className: "flex items-start gap-3 w-full overflow-hidden",
													children: /* @__PURE__ */ jsxs("div", {
														className: "flex flex-col items-start overflow-hidden w-full text-left",
														children: [/* @__PURE__ */ jsx("span", {
															className: cn("truncate w-full text-sm", e.thread_id === d ? "font-semibold" : "font-medium"),
															children: t
														}), n && /* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-1.5 mt-0.5 text-[11px] text-muted-foreground",
															children: [/* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }), /* @__PURE__ */ jsx("span", { children: n })]
														})]
													})
												})
											}), h && /* @__PURE__ */ jsx(Button, {
												variant: "ghost",
												size: "icon",
												className: "absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-all focus:opacity-100 z-10",
												onClick: (t) => {
													t.stopPropagation(), C(e.thread_id);
												},
												"aria-label": "Delete conversation",
												children: /* @__PURE__ */ jsx(Trash2, {})
											})]
										}, e.thread_id);
									})
								})]
							}, e.title))
						}), r.length < a ? /* @__PURE__ */ jsx("div", {
							ref: E,
							className: "py-4 flex justify-center",
							children: b ? /* @__PURE__ */ jsx(LoaderCircle, { className: "h-4 w-4 animate-spin text-muted-foreground" }) : null
						}) : null]
					}) : null
				})
			]
		}), /* @__PURE__ */ jsx(Dialog, {
			open: !!S,
			onOpenChange: (e) => !e && !w && C(null),
			children: /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, { children: "Delete conversation" }), /* @__PURE__ */ jsx(DialogDescription, { children: "Are you sure you want to delete this conversation? This action cannot be undone." })] }), /* @__PURE__ */ jsxs(DialogFooter, {
				className: "mt-4 flex sm:justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					disabled: w,
					onClick: () => C(null),
					children: "Cancel"
				}), /* @__PURE__ */ jsxs(Button, {
					variant: "destructive",
					disabled: w,
					onClick: A,
					className: "mt-2 sm:mt-0",
					children: [w ? /* @__PURE__ */ jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : null, "Delete"]
				})]
			})] })
		})]
	});
}
const useChatSessionStore = create((e) => ({
	selectedAgent: "",
	setSelectedAgent: (t) => e({ selectedAgent: t }),
	selectedModel: "",
	setSelectedModel: (t) => e({ selectedModel: t }),
	currentThreadId: void 0,
	setCurrentThreadId: (t) => e({ currentThreadId: t }),
	threadList: [],
	setThreadList: (t) => e((e) => ({ threadList: typeof t == "function" ? t(e.threadList) : t })),
	totalThreads: 0,
	setTotalThreads: (t) => e({ totalThreads: t }),
	threadsLoading: !1,
	setThreadsLoading: (t) => e({ threadsLoading: t }),
	metadata: null,
	setMetadata: (t) => e({ metadata: t })
})), useChatUIStore = create((e) => ({
	isMaximized: !1,
	setIsMaximized: (t) => e({ isMaximized: t }),
	historySheetOpen: !1,
	setHistorySheetOpen: (t) => e({ historySheetOpen: t }),
	autoSpeak: !1,
	setAutoSpeak: (t) => e({ autoSpeak: t }),
	showDisclaimer: !1,
	setShowDisclaimer: (t) => e({ showDisclaimer: t })
}));
var DISCLAIMER = "\nThis content is generated by an artificial intelligence. While we strive for accuracy, the AI may occasionally produce incorrect or biased information. \n\n**Important Notes:**\n- Please verify critical information.\n- The AI does not have real-time access to personal data unless shared in this session.\n- Responses are based on training data and specific portfolio context.\n\nBy using this chatbot, you agree to our terms of service regarding AI-generated content.\n", DisclaimerModal = memo(({ disclaimer: e, onClose: t }) => /* @__PURE__ */ jsxs("div", {
	className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
	children: [/* @__PURE__ */ jsx(m.div, {
		className: "absolute inset-0 bg-background/80 backdrop-blur-sm",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: t
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
					onClick: t,
					"aria-label": "Close dialog",
					children: /* @__PURE__ */ jsx(X, {})
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar text-sm",
				children: /* @__PURE__ */ jsx(LazyMarkdownRenderer, { children: e })
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "mt-6 flex justify-end",
				children: /* @__PURE__ */ jsx(Button, {
					onClick: t,
					children: "Understood"
				})
			})
		]
	})]
}));
DisclaimerModal.displayName = "DisclaimerModal";
function Footer({ disclaimer: e = DISCLAIMER, subtitle: t }) {
	let [n, r] = useState(!1), i = useCallback(() => r(!0), []), a = useCallback(() => r(!1), []);
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t bg-muted/50 px-6 py-3 flex items-center justify-between",
		children: [
			/* @__PURE__ */ jsx("button", {
				onClick: i,
				className: "text-xs text-muted-foreground hover:text-primary cursor-pointer hover:underline transition-colors font-medium",
				children: "Terms & Conditions"
			}),
			t ? /* @__PURE__ */ jsx("div", {
				className: "text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/60",
				children: t
			}) : /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/60",
				children: [/* @__PURE__ */ jsx("span", { children: "Powered by" }), /* @__PURE__ */ jsx("span", {
					className: "text-primary/70",
					children: "ChatUI"
				})]
			}),
			/* @__PURE__ */ jsx(AnimatePresence, { children: n && /* @__PURE__ */ jsx(DisclaimerModal, {
				disclaimer: e,
				onClose: a
			}) })
		]
	});
}
function Disclaimer({ onAccept: e, open: t }) {
	return /* @__PURE__ */ jsx(AnimatePresence, { children: t && /* @__PURE__ */ jsx(m.div, {
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
					onClick: e,
					className: "w-full font-medium shadow-primary/20 shadow-lg",
					children: "Accept & Continue"
				})
			]
		})
	}) });
}
function formatTime(e, t) {
	let n = Math.max(0, e / 14), r = Math.max(0, t / 14), i = (e) => `${Math.floor(e / 60)}:${Math.floor(e % 60).toString().padStart(2, "0")}`;
	return `${i(n)} / ${i(r)}`;
}
function SpeechControlBar() {
	let { speakingMessageId: e, currentCharIndex: t, charOffset: n, isPaused: r, activeText: i, setCharOffset: a, setIsPaused: o, stop: s } = useSpeechStore(), l = n + t, u = i.length > 0 ? l / i.length * 100 : 0, d = !!e, f = useCallback(() => {
		window.speechSynthesis && (r ? (window.speechSynthesis.resume(), o(!1)) : (window.speechSynthesis.pause(), o(!0)));
	}, [r, o]), p = useCallback(() => {
		window.speechSynthesis && window.speechSynthesis.cancel(), s();
	}, [s]), h = useCallback((t) => {
		if (!i || !e) return;
		let n = Math.floor(t[0] / 100 * i.length);
		window.speechSynthesis && window.speechSynthesis.cancel(), a(n);
		let r = i.slice(n);
		if (!r) return;
		let o = new SpeechSynthesisUtterance(r), s = window.speechSynthesis.getVoices();
		s.length > 0 && (o.voice = s.find((e) => e.lang.startsWith("en")) ?? s[0]), o.onboundary = (e) => {
			useSpeechStore.getState().setCurrentCharIndex(e.charIndex);
		}, o.onend = () => {
			useSpeechStore.getState().stop();
		}, o.onerror = () => {
			useSpeechStore.getState().stop();
		}, o.onpause = () => {
			useSpeechStore.getState().setIsPaused(!0);
		}, o.onresume = () => {
			useSpeechStore.getState().setIsPaused(!1);
		}, window.speechSynthesis.speak(o);
	}, [
		i,
		e,
		a
	]);
	return /* @__PURE__ */ jsx(AnimatePresence, { children: d && /* @__PURE__ */ jsx(m.div, {
		initial: {
			y: 80,
			opacity: 0,
			scale: .95
		},
		animate: {
			y: 0,
			opacity: 1,
			scale: 1
		},
		exit: {
			y: 80,
			opacity: 0,
			scale: .95
		},
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 30
		},
		className: "absolute bottom-20 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg",
		children: /* @__PURE__ */ jsxs("div", {
			className: "speech-control-bar relative bg-background/95 backdrop-blur-xl border border-border/60 rounded-2xl shadow-2xl shadow-black/20 p-3 flex items-center gap-3 overflow-hidden",
			children: [
				!r && /* @__PURE__ */ jsx(m.div, {
					className: "absolute inset-0 rounded-2xl bg-primary/5 pointer-events-none",
					animate: { opacity: [
						.3,
						.7,
						.3
					] },
					transition: {
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut"
					}
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative flex items-center justify-center h-8 w-8 shrink-0 rounded-full bg-primary/10 text-primary",
					children: [/* @__PURE__ */ jsx(Volume2, { className: "h-4 w-4" }), !r && /* @__PURE__ */ jsx(m.span, {
						className: "absolute inset-0 rounded-full border-2 border-primary/30",
						animate: {
							scale: [1, 1.5],
							opacity: [.6, 0]
						},
						transition: {
							duration: 1.5,
							repeat: Infinity,
							ease: "easeOut"
						}
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex-1 flex flex-col gap-1.5 min-w-0",
					children: [/* @__PURE__ */ jsx(Slider, {
						value: [u],
						max: 100,
						step: .1,
						onValueChange: h,
						className: "w-full",
						"aria-label": "Playback position"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex justify-between text-[10px] text-muted-foreground/70 font-mono tabular-nums px-0.5",
						children: [/* @__PURE__ */ jsx("span", { children: formatTime(l, i.length) }), /* @__PURE__ */ jsxs("span", {
							className: "text-muted-foreground/40",
							children: [Math.round(u), "%"]
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1 shrink-0",
					children: [
						/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "icon",
							className: "rounded-full h-9 w-9 hover:bg-primary/10 hover:text-primary transition-colors",
							onClick: f,
							"aria-label": r ? "Resume" : "Pause",
							children: /* @__PURE__ */ jsx(AnimatePresence, {
								mode: "wait",
								initial: !1,
								children: r ? /* @__PURE__ */ jsx(m.span, {
									initial: {
										scale: .5,
										opacity: 0
									},
									animate: {
										scale: 1,
										opacity: 1
									},
									exit: {
										scale: .5,
										opacity: 0
									},
									transition: { duration: .15 },
									children: /* @__PURE__ */ jsx(Play, { className: "h-4 w-4 fill-current" })
								}, "play") : /* @__PURE__ */ jsx(m.span, {
									initial: {
										scale: .5,
										opacity: 0
									},
									animate: {
										scale: 1,
										opacity: 1
									},
									exit: {
										scale: .5,
										opacity: 0
									},
									transition: { duration: .15 },
									children: /* @__PURE__ */ jsx(Pause, { className: "h-4 w-4 fill-current" })
								}, "pause")
							})
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "icon",
							className: "rounded-full h-8 w-8 hover:bg-destructive/10 hover:text-destructive transition-colors",
							onClick: p,
							"aria-label": "Stop",
							children: /* @__PURE__ */ jsx(Square, { className: "h-3.5 w-3.5 fill-current" })
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "icon",
							className: "rounded-full h-8 w-8 hover:bg-muted transition-colors",
							onClick: s,
							"aria-label": "Close",
							children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
						})
					]
				})
			]
		})
	}, "speech-control-bar") });
}
var MemoizedChatMessages = memo(Chat.Messages), MemoizedChatInput = memo(Chat.Input), MemoizedChatSuggestions = memo(Chat.Suggestions);
function ChatbotLayout({ effectiveAgent: e, selectedAgent: t, selectedModel: n, showHeader: r, headerTitle: i, headerTitleUrl: a, headerSubtitle: o, avatar: s, allowMaximize: c, onClose: l, onRefresh: u, onHome: d, showFooter: f, footerContent: p, footerSubtitle: h, placeholder: g, starterMessage: _, userId: v, voiceConfig: y, onVoiceConfigChange: b, availableVoices: x, selectedVoice: S, onVoiceChange: C, autoSpeak: w, onAutoSpeakChange: T, deleteThread: E, onMaximizeToggle: D, isMaximized: O }) {
	let { setSelectedAgent: k, setSelectedModel: A, currentThreadId: j, setCurrentThreadId: M, threadList: N, setThreadList: P, totalThreads: F, setTotalThreads: da, threadsLoading: I, setThreadsLoading: L } = useChatSessionStore(useShallow((e) => ({
		setSelectedAgent: e.setSelectedAgent,
		setSelectedModel: e.setSelectedModel,
		currentThreadId: e.currentThreadId,
		setCurrentThreadId: e.setCurrentThreadId,
		threadList: e.threadList,
		setThreadList: e.setThreadList,
		totalThreads: e.totalThreads,
		setTotalThreads: e.setTotalThreads,
		threadsLoading: e.threadsLoading,
		setThreadsLoading: e.setThreadsLoading
	}))), { historySheetOpen: R, setHistorySheetOpen: z, isMaximized: fa, setIsMaximized: B } = useChatUIStore(useShallow((e) => ({
		historySheetOpen: e.historySheetOpen,
		setHistorySheetOpen: e.setHistorySheetOpen,
		isMaximized: e.isMaximized,
		setIsMaximized: e.setIsMaximized
	}))), V = O ?? fa, { metadata: H, metadataLoading: U, backendStatus: W, clearChat: G, loadThread: K, getThreads: pa, setThreadId: q, deleteThread: J } = useChatContext(), Y = E ?? J, Z = useCallback((e) => {
		G({ keepStarter: !!_ }), M(void 0), q(void 0), k(e);
	}, [
		G,
		_,
		k,
		M,
		q
	]), Q = useCallback(() => {
		G({
			keepStarter: !!_,
			createNewThread: !0
		}), k(""), M(void 0), q(void 0);
	}, [
		G,
		_,
		k,
		M,
		q
	]), ma = u ?? Q, ha = useCallback(() => z(!0), [z]), ga = useCallback((e) => {
		z(!1), K(e, v), M(e), q(e);
	}, [
		K,
		z,
		M,
		q,
		v
	]), $ = useCallback(() => {
		let e = !V;
		B(e), D?.(e);
	}, [
		V,
		B,
		D
	]);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		r && /* @__PURE__ */ jsx(Header, {
			metadata: H,
			selectedAgent: t,
			selectedModel: n,
			onAgentChange: Z,
			onModelChange: A,
			onClose: l,
			onRefresh: ma,
			onHome: d,
			onHistory: v?.trim() ? ha : void 0,
			voiceConfig: y,
			onVoiceConfigChange: b,
			availableVoices: x,
			selectedVoice: S,
			onVoiceChange: C,
			autoSpeak: w,
			onAutoSpeakChange: T,
			isMaximized: V,
			onMaximize: c ? $ : void 0,
			title: i,
			titleUrl: a,
			subtitle: o,
			avatar: s,
			backendStatus: W
		}),
		/* @__PURE__ */ jsx(ChatHistorySheet, {
			open: R,
			onOpenChange: z,
			userId: v,
			threadList: N,
			setThreadList: P,
			totalThreads: F,
			setTotalThreads: da,
			threadsLoading: I,
			setThreadsLoading: L,
			currentThreadId: j,
			onSelectThread: ga,
			onNewChat: ma,
			getThreads: pa,
			deleteThread: Y
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "flex-1 overflow-hidden flex flex-col relative",
			children: [/* @__PURE__ */ jsx(SpeechControlBar, {}), e ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
				/* @__PURE__ */ jsx(MemoizedChatMessages, { className: "flex-1 min-h-0" }),
				/* @__PURE__ */ jsx(MemoizedChatSuggestions, {}),
				/* @__PURE__ */ jsx(MemoizedChatInput, { placeholder: g })
			] }) : /* @__PURE__ */ jsx(AgentSelector, {
				agents: H?.agents ?? [],
				loading: U,
				onSelect: k
			})]
		}),
		f && /* @__PURE__ */ jsx(Footer, {
			disclaimer: p,
			subtitle: h
		})
	] });
}
function Chatbot({ url: e, agent: t, model: n, placeholder: r = "Hi, how can I help you?", threadId: i, userId: a, apiKey: s, stream: c = !0, className: l, header: u = {}, footer: d = {}, starter: f = {}, isMaximized: p }) {
	let { show: h = !0, title: g, titleUrl: _, subtitle: v, avatar: y, allowMaximize: b = !1, onMaximizeToggle: x, onClose: S, onRefresh: C, onHome: w } = u, { show: T = !0, text: E, subtitle: D } = d, { message: O, suggestions: k } = f, { isMaximized: A, autoSpeak: j, setAutoSpeak: M, showDisclaimer: N, setShowDisclaimer: P } = useChatUIStore(useShallow((e) => ({
		isMaximized: e.isMaximized,
		autoSpeak: e.autoSpeak,
		setAutoSpeak: e.setAutoSpeak,
		showDisclaimer: e.showDisclaimer,
		setShowDisclaimer: e.setShowDisclaimer
	}))), F = p ?? A, { selectedAgent: da, setSelectedAgent: I, selectedModel: L, setSelectedModel: R, currentThreadId: z, setCurrentThreadId: fa, metadata: B, setMetadata: V } = useChatSessionStore(useShallow((e) => ({
		selectedAgent: e.selectedAgent,
		setSelectedAgent: e.setSelectedAgent,
		selectedModel: e.selectedModel,
		setSelectedModel: e.setSelectedModel,
		currentThreadId: e.currentThreadId,
		setCurrentThreadId: e.setCurrentThreadId,
		metadata: e.metadata,
		setMetadata: e.setMetadata
	}))), H = da || (t ?? ""), U = L || (n ?? ""), { speak: W, availableVoices: G, selectedVoice: K, setSelectedVoice: pa, voiceConfig: q, updateConfig: J, isRecognitionSupported: Y } = useChatVoice();
	useEffect(() => {
		let e = localStorage.getItem("voice-config");
		if (e) try {
			J(JSON.parse(e));
		} catch (e) {
			console.error("Failed to load voice config", e);
		}
		let t = localStorage.getItem("auto-speak");
		t && M(t === "true"), localStorage.getItem("chatbot-consent") || P(!0);
	}, [J]);
	let Z = useCallback(() => {
		localStorage.setItem("chatbot-consent", "true"), P(!1);
	}, []);
	useEffect(() => {
		localStorage.setItem("voice-config", JSON.stringify(q));
	}, [q]), useEffect(() => {
		localStorage.setItem("auto-speak", String(j));
	}, [j]);
	let Q = useCallback((e) => {
		V(e), U || R(e.default_model);
	}, [
		U,
		R,
		V
	]), ma = useMemo(() => k === void 0 ? B?.agents?.find((e) => e.key === H)?.prompts ?? [] : k, [
		k,
		B?.agents,
		H
	]), ha = H || z && B?.default_agent || "", $ = useMemo(() => ({
		url: e,
		agent: ha || void 0,
		model: U || void 0,
		threadId: z ?? i,
		userId: a,
		stream: c,
		starterMessage: O,
		starterSuggestions: k,
		apiKey: s,
		onStreamEnd: (e) => {
			j && e && W && W(e);
		}
	}), [
		e,
		H,
		U,
		z,
		i,
		a,
		c,
		O,
		k,
		j,
		s,
		W
	]);
	return useEffect(() => {
		i != null && fa(i);
	}, [i]), useEffect(() => {
		z && !H && B?.default_agent && I(B.default_agent);
	}, [
		z,
		H,
		B?.default_agent
	]), /* @__PURE__ */ jsxs("div", {
		className: cn("chatbot-theme flex flex-col h-full transition-all duration-300 ease-in-out relative", l, F && "fixed inset-0 z-50 m-0 h-full max-h-none w-full max-w-none rounded-none border-0"),
		children: [/* @__PURE__ */ jsx(Disclaimer, {
			open: N,
			onAccept: Z
		}), /* @__PURE__ */ jsx(Chat.Root, {
			config: $,
			initialSuggestions: ma,
			voiceConfig: q,
			isSpeechSupported: Y,
			onMetadata: Q,
			children: /* @__PURE__ */ jsx(ChatbotLayout, {
				effectiveAgent: ha,
				selectedAgent: H,
				selectedModel: U,
				showHeader: h,
				headerTitle: g,
				headerTitleUrl: _,
				headerSubtitle: v,
				avatar: y,
				allowMaximize: b,
				onClose: S,
				onRefresh: C,
				onHome: w,
				showFooter: T,
				footerContent: E,
				footerSubtitle: D,
				placeholder: r,
				starterMessage: O,
				userId: a,
				voiceConfig: q,
				onVoiceConfigChange: J,
				availableVoices: G,
				selectedVoice: K,
				onVoiceChange: pa,
				autoSpeak: j,
				onAutoSpeakChange: M,
				onMaximizeToggle: x,
				isMaximized: F
			})
		})]
	});
}
function FullChatbot(e) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("w-full h-screen flex flex-col", e.className),
		children: /* @__PURE__ */ jsx(Chatbot, { ...e })
	});
}
function useIsMobile(e) {
	let [t, n] = useState(() => typeof window > "u" ? !1 : window.innerWidth < e || window.innerHeight < e);
	return useEffect(() => {
		let t = () => {
			n(window.innerWidth < Math.max(768, e) || window.innerHeight < Math.max(640, e));
		};
		return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
	}, [e]), t;
}
var positionClasses = {
	"bottom-right": "bottom-4 right-4",
	"bottom-left": "bottom-4 left-4",
	"top-right": "top-4 right-4",
	"top-left": "top-4 left-4"
};
function PopupChatbot({ buttonClassName: e, buttonStyle: t, popupClassName: n, children: r, position: i = "bottom-right", width: a = 450, height: s = 600, tooltip: c, tooltipDelay: l = 0, defaultOpen: u = !1, ...f }) {
	let [p, h] = useState(u), [g, v] = useState(!1), b = useRef(null), x = useIsMobile(Number(a)), C = x || g, w = typeof a == "number" ? `${a}px` : a, T = typeof s == "number" ? `${s}px` : s, E = useCallback((e) => {
		x || v(e);
	}, [x]);
	return /* @__PURE__ */ jsxs(LazyMotion, {
		features: domAnimation,
		children: [c && !p ? /* @__PURE__ */ jsx(TooltipProvider, {
			delayDuration: l,
			children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ jsx(m.button, {
					onClick: () => h(!p),
					className: cn("chatbot-theme fixed z-50 flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors", positionClasses[i], e),
					whileHover: { scale: 1.05 },
					whileTap: { scale: .95 },
					style: {
						width: "56px",
						height: "56px",
						...t
					},
					children: r || /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
				})
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "top",
				className: "chatbot-theme",
				children: /* @__PURE__ */ jsx("p", { children: c })
			})] })
		}) : /* @__PURE__ */ jsx(m.button, {
			onClick: () => h(!p),
			className: cn("chatbot-theme fixed z-50 flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors", positionClasses[i], p && "hidden", e),
			whileHover: { scale: 1.05 },
			whileTap: { scale: .95 },
			style: {
				width: "56px",
				height: "56px",
				...t
			},
			children: r || /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: p && /* @__PURE__ */ jsx(m.div, {
			ref: b,
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
			className: cn("chatbot-theme fixed z-40 bg-background overflow-hidden border shadow-2xl transition-all duration-300 ease-in-out", C ? "inset-0 z-50 h-dvh w-dvw max-h-dvh max-w-dvw rounded-none m-0 border-0" : cn("rounded-lg", positionClasses[i]), n),
			style: C ? {} : {
				width: w,
				height: T
			},
			children: /* @__PURE__ */ jsx(Chatbot, {
				...f,
				header: {
					...f.header,
					onClose: () => h(!1),
					allowMaximize: !x,
					onMaximizeToggle: E
				},
				className: "h-full",
				isMaximized: C
			})
		}) })]
	});
}
export { Chat, ChatProvider, ChatService, Chatbot, FullChatbot, Header, PopupChatbot, clearChatServiceMetadataCache, useChatContext, useChatRuntime, useChatSessionStore, useChatUIStore, useChatVoice, useMessageDisplay };
