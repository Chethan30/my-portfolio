import { useEffect, useRef } from "react";

/**
 * Full-viewport ambience for the Mission Control / space HUD theme.
 *
 * **Where it sits in the page**
 * `App.js` mounts `<Starfield />` once at the root so it blankets the entire
 * SPA. The canvas uses `.starfield-canvas` in `Intro.css`: `position: fixed`,
 * `100vw × 100vh`, `z-index: 0`, and `pointer-events: none`. That paints a
 * non-interactive layer _behind_ all UI—content stacks above via higher z-index.
 *
 * **What this file draws (one `requestAnimationFrame` loop per frame)**
 * 1. **Background clear** → full redraw each frame.
 * 2. **Parallax** → optional vertical offset tied to document scroll (`parallaxMode`
 *    from Hud controls: active / reduced / disabled). Stars and meteors move
 *    opposite scroll so the starfield slides behind the HUD like a distant layer.
 *    Y-coordinates wrap modulo canvas height so long pages stay filled.
 * 3. **Star field** → small circles with twinkle.
 * 4. **Meteors** → gradient streaks; random 0–10s spawns; disabled when OS
 *    `prefers-reduced-motion` is set (parallax forced off too in that case).
 * 5. **Rare glow** → intermittent radial bloom on larger stars.
 *
 * **Resize** Re-syncs backing store, re-init stars, clears meteors.
 */
const PARALLAX_STRENGTH = Object.freeze({
  active: 0.36,
  reduced: 0.12,
  disabled: 0,
});

function wrapCanvasY(rawY, ch) {
  return (((rawY % ch) + ch) % ch);
}

export default function Starfield({ parallaxMode = "active" }) {
  const canvasRef = useRef(null);
  const parallaxModeRef = useRef(parallaxMode);

  parallaxModeRef.current = parallaxMode;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const stars = [];
    const STAR_COUNT = 160;
    /** @type {{ x: number, y: number, vx: number, vy: number, life: number, maxLife: number, tail: number, width: number, headR: number, warmTail: boolean }[]} */
    const meteors = [];

    let meteorTimerId;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4 + 0.2,
          alpha: Math.random() * 0.7 + 0.15,
          speed: Math.random() * 0.008 + 0.003,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    /** Parallax px: star layer moves opposite to scroll direction */
    function parallaxYOffset() {
      if (reduceMotion) return 0;
      const rawMode = parallaxModeRef.current;
      const mode =
        PARALLAX_STRENGTH[rawMode] !== undefined ? rawMode : "active";
      const k = PARALLAX_STRENGTH[mode];
      const sy =
        typeof window.scrollY === "number"
          ? window.scrollY
          : document.documentElement.scrollTop || 0;
      return -sy * k;
    }

    /** Random comet/shoot from upper band or lateral edge inward */
    function spawnShootingStar() {
      const w = canvas.width;
      const h = canvas.height;
      if (w < 8 || h < 8 || reduceMotion) return;

      while (meteors.length >= 4) {
        meteors.shift();
      }

      let sx;
      let sy;
      let ang;

      const roll = Math.random();
      if (roll < 0.55) {
        sx = Math.random() * w * 1.2 - w * 0.1;
        sy = -30 - Math.random() * Math.min(h * 0.2, 120);
        const aimX = Math.random() * w * 0.85 + w * 0.1;
        const aimY = h * (0.45 + Math.random() * 0.45);
        ang = Math.atan2(aimY - sy, aimX - sx);
      } else if (roll < 0.75) {
        sx = -40 - Math.random() * Math.min(w * 0.15, 160);
        sy = Math.random() * h * 0.85;
        const aimX = w * (0.35 + Math.random() * 0.55);
        const aimY = Math.random() * h * (0.2 + Math.random() * 0.6);
        ang = Math.atan2(aimY - sy, aimX - sx);
      } else if (roll < 0.9) {
        sx = w + 40 + Math.random() * Math.min(w * 0.12, 140);
        sy = Math.random() * h * 0.7;
        const aimX = w * Math.random() * 0.4;
        const aimY = h * (0.25 + Math.random() * 0.65);
        ang = Math.atan2(aimY - sy, aimX - sx);
      } else {
        sx = Math.random() * w * 1.05;
        sy = h + 40 + Math.random() * 80;
        const aimX = Math.random() * w;
        const aimY = Math.random() * h * 0.35;
        ang = Math.atan2(aimY - sy, aimX - sx);
      }

      const unit =
        typeof performance !== "undefined" &&
        typeof performance.now === "function"
          ? Math.min(1.1, Math.max(0.55, Math.hypot(w, h) / 900))
          : 0.85;
      const spd = (11 + Math.random() * 16) * unit;
      const warmTail = Math.random() > 0.72;

      meteors.push({
        x: sx,
        y: sy,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        life: 0,
        maxLife: 64 + Math.floor(Math.random() * 56),
        tail: (90 + Math.random() * 130) * unit,
        width: Math.random() * 1.4 + 0.95,
        headR: Math.random() * 1.1 + 1.5,
        warmTail,
      });
    }

    function queueNextMeteor() {
      if (reduceMotion || !canvas.isConnected) return;
      window.clearTimeout(meteorTimerId);
      meteorTimerId = window.setTimeout(() => {
        spawnShootingStar();
        queueNextMeteor();
      }, Math.random() * 10_000);
    }

    const onResize = () => {
      resize();
      initStars();
      meteors.length = 0;
    };

    resize();
    initStars();
    window.addEventListener("resize", onResize);

    if (!reduceMotion) {
      queueNextMeteor();
      spawnShootingStar();
    }

    let t = 0;

    function drawMeteors(py, ch) {
      if (reduceMotion || meteors.length === 0) return;

      const w = canvas.width;
      const h = ch;

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life += 1;

        const speed = Math.hypot(m.vx, m.vy) || 1;
        const ux = (m.vx / speed) * m.tail;
        const uy = (m.vy / speed) * m.tail;
        const tx = m.x - ux;
        const ty = m.y - uy;

        const headX = m.x;
        const headYDraw = wrapCanvasY(m.y + py, h);
        const tailX = tx;
        const tailYDraw = wrapCanvasY(ty + py, h);

        const fade = 1 - m.life / m.maxLife;
        const fadeClamped = Math.max(0, Math.min(1, fade));

        const g = ctx.createLinearGradient(
          tailX,
          tailYDraw,
          headX,
          headYDraw,
        );
        if (m.warmTail) {
          g.addColorStop(0, "rgba(80,50,120,0)");
          g.addColorStop(0.35, `rgba(255,200,150,${0.06 * fadeClamped})`);
          g.addColorStop(
            0.78,
            `rgba(235,238,255,${0.32 * fadeClamped})`,
          );
          g.addColorStop(
            1,
            `rgba(255,250,235,${0.92 * fadeClamped})`,
          );
        } else {
          g.addColorStop(0, "rgba(40,55,110,0)");
          g.addColorStop(0.4, `rgba(120,200,255,${0.08 * fadeClamped})`);
          g.addColorStop(0.85, `rgba(215,238,255,${0.45 * fadeClamped})`);
          g.addColorStop(1, `rgba(240,248,255,${0.9 * fadeClamped})`);
        }

        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = g;
        ctx.lineWidth = m.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailYDraw);
        ctx.lineTo(headX, headYDraw);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(headX, headYDraw, m.headR, 0, Math.PI * 2);
        ctx.fillStyle = m.warmTail
          ? `rgba(255,245,220,${0.55 * fadeClamped})`
          : `rgba(220,238,255,${0.6 * fadeClamped})`;
        ctx.fill();
        ctx.restore();

        const margin = 140;
        const dead =
          m.life >= m.maxLife ||
          m.x < -margin ||
          m.x > w + margin ||
          m.y < -margin ||
          m.y > h + margin;
        if (dead) meteors.splice(i, 1);
      }
    }

    const draw = () => {
      const ch = canvas.height;
      const py = parallaxYOffset();

      ctx.clearRect(0, 0, canvas.width, ch);
      t += 1;

      stars.forEach((s) => {
        const twinkle =
          s.alpha * (0.6 + 0.4 * Math.sin(t * s.speed * 60 + s.phase));
        const y = wrapCanvasY(s.y + py, ch);
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
        ctx.fill();
      });

      drawMeteors(py, ch);

      if (t % 4 === 0) {
        stars
          .filter((s) => s.r > 1.2)
          .forEach((s) => {
            const y = wrapCanvasY(s.y + py, ch);
            const glow = ctx.createRadialGradient(
              s.x,
              y,
              0,
              s.x,
              y,
              s.r * 5,
            );
            glow.addColorStop(0, `rgba(200, 220, 255, 0.18)`);
            glow.addColorStop(1, "transparent");
            ctx.beginPath();
            ctx.arc(s.x, y, s.r * 5, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.fill();
          });
      }

      animId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(meteorTimerId);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" />;
}