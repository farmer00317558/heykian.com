"use client";

import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons";

const navItems = [
  { href: "#modules", label: "模块" },
  { href: "#skills", label: "技能树" },
  { href: "#scenarios", label: "场景" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const updateState = () => {
      setScrolled(window.scrollY > 20);

      const offset = window.scrollY + 160;
      let currentSection = "top";

      for (const item of navItems) {
        const sectionId = item.href.slice(1);
        const element = document.getElementById(sectionId);

        if (element && element.offsetTop <= offset) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });

    return () => window.removeEventListener("scroll", updateState);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 sm:px-6">
          <a href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="font-display text-2xl font-bold tracking-tight text-gradient">
              Kian
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)] sm:block">
              AI Workspace Client
            </span>
          </a>

          <div className="hidden items-center gap-1.5 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${
                    isActive ? "nav-link-active" : ""
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#top"
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-[var(--color-background)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(200,149,108,0.2)] sm:px-5"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent), var(--color-accent-light))",
              }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="hidden sm:inline">立即下载</span>
              <span className="sm:hidden">下载</span>
            </a>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-[var(--color-foreground)] backdrop-blur md:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "关闭导航菜单" : "打开导航菜单"}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-drawer md:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div
          className={`mobile-drawer-panel ${menuOpen ? "translate-y-0" : "-translate-y-6"}`}
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Navigation
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
                快速跳转整站内容
              </div>
            </div>
            <button
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-[var(--color-foreground)]"
              aria-label="关闭导航菜单"
              onClick={() => setMenuOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="grid gap-3">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-[20px] border px-5 py-4 transition-all duration-300 ${
                    isActive
                      ? "border-[rgba(200,149,108,0.24)] bg-[rgba(200,149,108,0.08)] shadow-[0_18px_36px_rgba(200,149,108,0.06)]"
                      : "border-white/[0.06] bg-white/[0.03]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="font-display text-[0.78rem] italic text-[var(--color-accent)]">
                    0{index + 1}
                  </div>
                  <div className="mt-2 text-lg font-semibold tracking-tight text-[var(--color-foreground)]">
                    {item.label}
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["本地目录", "浏览器", "自动化", "广播推送"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[var(--color-muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
