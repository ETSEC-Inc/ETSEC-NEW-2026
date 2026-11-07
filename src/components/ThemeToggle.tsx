"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    localStorage.setItem("etsec-theme", next);
    setTheme(next);
  }
  return <button type="button" onClick={toggle} className="theme-switch" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
    <Icon name={theme === "dark" ? "sun" : "moon"} size={19}/><span className="sr-only">Toggle color theme</span>
  </button>;
}
