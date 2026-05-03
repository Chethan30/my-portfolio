import React, { useEffect, useId, useRef, useState } from "react";
import {
  TbMusic,
  TbMusicOff,
  TbVolume,
  TbVolumeOff,
  TbLayoutNavbar,
  TbLayoutOff,
  TbAlertTriangle,
} from "react-icons/tb";
import "./HudControls.css";

export default function HudControls({
  musicOn,
  onMusicToggle,
  sfxOn,
  onSfxToggle,
  navVisible,
  onNavToggle,
}) {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);
  const titleId = useId();
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!disclaimerOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setDisclaimerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus({ preventScroll: true });
    return () => window.removeEventListener("keydown", onKey);
  }, [disclaimerOpen]);

  const sep = (
    <span className="hud-controls-sep" aria-hidden="true">
      ·
    </span>
  );

  const BTN_KEYS = ["music", "sfx", "nav", "notice"];

  const telemetryButtons = [
    <button
      key="music"
      type="button"
      className={`hud-ctrl-btn ${musicOn ? "is-on" : ""}`}
      aria-pressed={musicOn}
      onClick={onMusicToggle}
      title={musicOn ? "Turn off ambient audio" : "Turn on ambient audio"}
    >
      {musicOn ? (
        <TbMusic className="hud-ctrl-icon" aria-hidden />
      ) : (
        <TbMusicOff className="hud-ctrl-icon" aria-hidden />
      )}
      <span className="hud-ctrl-label">Music</span>
    </button>,
    <button
      key="sfx"
      type="button"
      className={`hud-ctrl-btn ${sfxOn ? "is-on" : ""}`}
      aria-pressed={sfxOn}
      onClick={onSfxToggle}
      title={
        sfxOn ? "Mute sound-effect channel" : "Enable sound-effect channel"
      }
    >
      {sfxOn ? (
        <TbVolume className="hud-ctrl-icon" aria-hidden />
      ) : (
        <TbVolumeOff className="hud-ctrl-icon" aria-hidden />
      )}
      <span className="hud-ctrl-label">SFX</span>
    </button>,
    <button
      key="nav"
      type="button"
      className={`hud-ctrl-btn ${navVisible ? "is-on" : ""}`}
      aria-pressed={navVisible}
      onClick={onNavToggle}
      title={
        navVisible ? "Hide section navigation dock" : "Show section dock"
      }
    >
      {navVisible ? (
        <TbLayoutNavbar className="hud-ctrl-icon" aria-hidden />
      ) : (
        <TbLayoutOff className="hud-ctrl-icon" aria-hidden />
      )}
      <span className="hud-ctrl-label">Nav</span>
    </button>,
    <button
      key="notice"
      type="button"
      className="hud-ctrl-btn hud-ctrl-btn--notice"
      onClick={() => setDisclaimerOpen(true)}
      title="Photosensitivity and motion notice"
    >
      <TbAlertTriangle className="hud-ctrl-icon" aria-hidden />
      <span className="hud-ctrl-label">Notice</span>
    </button>,
  ];

  return (
    <>
      <div
        className="hud-controls-strip"
        role="toolbar"
        aria-label="Mission control preferences"
      >
        {telemetryButtons.map((btn, i) => (
          <React.Fragment key={BTN_KEYS[i]}>
            {i > 0 ? sep : null}
            {btn}
          </React.Fragment>
        ))}
      </div>

      {disclaimerOpen && (
        <div
          className="hud-disclaimer-backdrop"
          role="presentation"
          onClick={() => setDisclaimerOpen(false)}
        >
          <div
            className="hud-disclaimer-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id={titleId} className="hud-disclaimer-title">
              Motion &amp; photosensitivity
            </h2>
            <p className="hud-disclaimer-body">
              This site uses motion graphics, a starfield animation, and
              high-contrast HUD-style visuals. A small number of people may
              experience discomfort or seizures when exposed to certain flashing
              patterns or lights.
            </p>
            <p className="hud-disclaimer-body">
              If you are sensitive to motion or flashing, consider closing this
              page, using your operating system&rsquo;s{" "}
              <strong>reduce motion</strong> setting (where available), and
              keeping ambient audio off unless you choose to enable it.
            </p>
            <button
              ref={closeBtnRef}
              type="button"
              className="hud-disclaimer-dismiss"
              onClick={() => setDisclaimerOpen(false)}
            >
              Acknowledge
            </button>
          </div>
        </div>
      )}
    </>
  );
}
