import { useState } from "react";
import { nav, site } from "../data/site";
import { useTheme } from "../hooks/useTheme";
import { useScrollSpy } from "../hooks/useScrollSpy";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeId = useScrollSpy(nav.map((n) => n.href.replace("#", "")));

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a href="#home" className="logo">
            <span className="dot" aria-hidden="true" />
            ankitha.dev
          </a>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={activeId === item.href.replace("#", "") ? "true" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-right">
            <button
              className="theme-toggle desktop-only"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? "☾" : "☀"}
            </button>
            <a href="#contact" className="nav-cta desktop-only">Get in touch</a>
            <button
              className="hamburger"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobileMenu"
              onClick={() => setOpen((o) => !o)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobileMenu" className={`mobile-menu ${open ? "open" : ""}`}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <button className="theme-toggle mobile-theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        </button>
      </div>
    </>
  );
}
