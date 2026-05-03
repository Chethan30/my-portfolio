import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const stars = [];
    const STAR_COUNT = 160;

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

    resize();
    initStars();
    window.addEventListener("resize", () => { resize(); initStars(); });

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 1;

      stars.forEach((s) => {
        const twinkle = s.alpha * (0.6 + 0.4 * Math.sin(t * s.speed * 60 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
        ctx.fill();
      });

      // Rare larger glow stars
      if (t % 4 === 0) {
        stars.filter((s) => s.r > 1.2).forEach((s) => {
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5);
          glow.addColorStop(0, `rgba(200, 220, 255, 0.18)`);
          glow.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        });
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" />;
}
