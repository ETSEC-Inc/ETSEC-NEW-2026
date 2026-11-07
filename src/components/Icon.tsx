import type { SVGProps } from "react";

export type IconName = "arrow" | "arrow-up-right" | "shield" | "code" | "brain" | "satellite" | "check" | "menu" | "close" | "sun" | "moon" | "chevron" | "whatsapp" | "mail" | "phone" | "globe" | "spark" | "layers" | "lock" | "target" | "zap" | "check-circle" | "graduation" | "external" | "plus" | "minus" | "play" | "map" | "monitor" | "search";

export default function Icon({ name, size = 20, ...props }: SVGProps<SVGSVGElement> & { name: IconName; size?: number }) {
  const base = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const, ...props };
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    "arrow-up-right": <><path d="M7 17 17 7M7 7h10v10"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    code: <><path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 5l-4 14"/></>,
    brain: <><path d="M12 18V5a3 3 0 0 0-5.5-1.7A4.5 4.5 0 0 0 4 11a4 4 0 0 0 2 7.5A3.5 3.5 0 0 0 12 20"/><path d="M12 18V5a3 3 0 0 1 5.5-1.7A4.5 4.5 0 0 1 20 11a4 4 0 0 1-2 7.5A3.5 3.5 0 0 1 12 20"/><path d="M8 10c1 0 2 .7 2 2m6-2c-1 0-2 .7-2 2"/></>,
    satellite: <><path d="m15.5 7.5 1-1m-9 9-1 1M8 3l5 5-5 5-5-5 5-5Zm8 8 5 5-5 5-5-5 5-5Z"/><path d="M11 13 13 11M3 21l5-5m13-13-5 5"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="M5 5l14 14M19 5 5 19"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></>,
    moon: <path d="M20.7 13.3A9 9 0 0 1 10.7 3.3 9 9 0 1 0 20.7 13.3Z"/>,
    chevron: <path d="m6 9 6 6 6-6"/>,
    whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"/><path d="M9 9.5c.8 2.5 2.5 4.1 5 5.2l1.5-1.2"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <path d="M7 3h3l1 5-2 2c1 2 3 4 5 5l2-2 5 1v3c0 2-2 4-4 4C9 21 3 15 3 7c0-2 2-4 4-4Z"/>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    spark: <><path d="m12 3 1.9 6.1L20 11l-6.1 1.9L12 19l-1.9-6.1L4 11l6.1-1.9L12 3Zm7 14 .6 1.4L21 19l-1.4.6L19 21l-.6-1.4L17 19l1.4-.6L19 17Z"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
    zap: <path d="m13 2-9 12h7l-1 8 10-12h-7l0-8Z"/>,
    "check-circle": <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>,
    graduation: <><path d="m2 9 10-5 10 5-10 5-10-5Zm4 2v5c4 3 8 3 12 0v-5m4-2v7"/></>,
    external: <><path d="M13 5h6v6M19 5l-9 9"/><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></>,
    plus: <path d="M5 12h14M12 5v14"/>,
    minus: <path d="M5 12h14"/>,
    play: <path d="m8 5 11 7-11 7V5Z"/>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15"/></>,
    monitor: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8m-4-4v4"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></>,
  };
  return <svg {...base}>{paths[name]}</svg>;
}
