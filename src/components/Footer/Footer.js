import React, { useEffect, useState } from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { TbMapPin } from "react-icons/tb";

const TAMPA_TZ = "America/New_York";

function formatTampaClock(d) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: TAMPA_TZ,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    hourCycle: "h23",
  }).format(d);
}

function tampaLocalIso(d) {
  return d
    .toLocaleString("sv-SE", { timeZone: TAMPA_TZ })
    .replace(" ", "T");
}

function FooterLocationHud() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const clock = formatTampaClock(now);

  return (
    <div
      className="footer-loc-hud"
      role="status"
      aria-label="Location: Tampa Bay, Florida. Live clock, Eastern Time."
    >
      <span className="footer-loc-status-dot" aria-hidden="true" />
      <span className="footer-loc-pin" aria-hidden="true">
        <TbMapPin />
      </span>
      <div className="footer-loc-body">
        <span className="footer-loc-label">Tampa Bay, Florida</span>
        <span className="footer-loc-sep" aria-hidden="true">
          ·
        </span>
        <time className="footer-loc-time" dateTime={tampaLocalIso(now)}>
          <span className="footer-loc-tplus">T+</span>
          <span className="footer-loc-clock">{clock}</span>
          <span className="footer-loc-tz"> ET</span>
        </time>
      </div>
    </div>
  );
}

export default function Footer({ showNav }) {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <p className="footer-tagline">COMMS RELAY · IDLE</p>

        {!showNav && (
          <nav className="footer-nav-strip" aria-label="Page sections">
            <a className="link footer-nav-link" href="#about">
              About
            </a>
            <span className="footer-nav-sep" aria-hidden="true">
              ·
            </span>
            <a className="link footer-nav-link" href="#experience">
              Experience
            </a>
            <span className="footer-nav-sep" aria-hidden="true">
              ·
            </span>
            <a className="link footer-nav-link" href="#projects">
              Projects
            </a>
            <span className="footer-nav-sep" aria-hidden="true">
              ·
            </span>
            <a className="link footer-nav-link" href="#skills">
              Skills
            </a>
          </nav>
        )}

        <div className="footer-social-strip">
          <a
            href="https://github.com/Chethan30"
            className="link footer-social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/chethanbn/"
            className="link footer-social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/Chethan30/"
            className="link footer-social-link"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>
          <a
            href="mailto:cxb220002@utdallas.edu"
            className="link footer-social-link"
            aria-label="Email"
          >
            <MdEmail />
          </a>
          <a
            href="https://twitter.com/chethanbn30"
            className="link footer-social-link"
            aria-label="X (Twitter)"
          >
            <FaXTwitter />
          </a>
        </div>

        <FooterLocationHud />

        <p className="footer-copy">
          © Made with <span className="footer-copy-heart">❤️</span> by Chethan
          Birur Nataraja
        </p>
      </div>
    </footer>
  );
}
