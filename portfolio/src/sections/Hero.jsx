import { useEffect, useRef } from "react";
import { site } from "../data/site";
import { useTheme } from "../hooks/useTheme";
import "./Hero.css";

export default function Hero() {
  const networkRef = useRef(null);
  const networkEffect = useRef(null);

  const { theme } = useTheme();

  useEffect(() => {
    let retryTimer;

    const initNetwork = () => {
      if (!window.VANTA?.NET || !networkRef.current) {
        retryTimer = setTimeout(initNetwork, 100);
        return;
      }

      if (networkEffect.current) {
        networkEffect.current.destroy();
        networkEffect.current = null;
      }

      const isDark = theme === "dark";

      networkEffect.current = window.VANTA.NET({
        el: networkRef.current,

        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        minHeight: 200,
        minWidth: 200,

        scale: 1,
        scaleMobile: 1,

        color: isDark
          ? 0x3ffff1
          : 0x9B7EDB,

        backgroundColor: isDark
          ? 0x0a0e12
          : 0xFBF8FF,

        points: 10,
        maxDistance: 22,
        spacing: 18,
      });
    };

    initNetwork();

    return () => {
      clearTimeout(retryTimer);

      if (networkEffect.current) {
        networkEffect.current.destroy();
        networkEffect.current = null;
      }
    };
  }, [theme]);

  return (
    <section
      className={`hero hero-${theme}`}
      id="home"
    >
      <div
        ref={networkRef}
        className="hero-network"
        aria-hidden="true"
      />

      <div
        className="hero-overlay"
        aria-hidden="true"
      />

      <div className="container hero-content">
        <div className="hero-copy">

          <div className="eyebrow">
            computer science · developer
          </div>

          <h1>{site.name}</h1>

          <p className="role">
            {site.role}
          </p>

          <p className="intro">
            {site.intro}
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
            >
              View Projects →
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              View Resume ↗
            </a>
          </div>

          <div className="hero-links">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=avankitha.10a@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}