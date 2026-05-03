import React, { useEffect, useState } from "react";
import "./Navbar.css";

/** Section anchors — SPA in-page jumps only */
const NAV_LINKS = [
  { hash: "#about", label: "Brief" },
  { hash: "#experience", label: "Log" },
  { hash: "#projects", label: "Dossiers" },
  { hash: "#skills", label: "Systems" },
];

export default function Navbar({ showLinks, dockVisible = true }) {
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.2;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const id = NAV_LINKS[i].hash.slice(1);
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) {
          setActive(NAV_LINKS[i].hash);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showLinks]);

  if (showLinks) {
    return null;
  }

  return (
    <nav
      className={`hud-section-dock${dockVisible ? "" : " hud-dock-hidden"}`}
      aria-label="Jump to section"
      aria-hidden={!dockVisible}
    >
      <ul className="hud-dock-list">
        {NAV_LINKS.map(({ hash, label }) => {
          const isActive = active === hash;
          return (
            <li key={hash}>
              <a
                className={`hud-dock-link ${isActive ? "is-active" : ""}`}
                href={hash}
                onClick={() => setActive(hash)}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
