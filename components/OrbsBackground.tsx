"use client";

import { useEffect, useRef } from "react";

const ORBS = [
  { color: "#06b6d4", size: 420, x: 15, y: 20, speed: 28, drift: 18 },
  { color: "#a78bfa", size: 320, x: 75, y: 60, speed: 35, drift: 25 },
  { color: "#f59e0b", size: 250, x: 60, y: 15, speed: 22, drift: 30 },
  { color: "#06b6d4", size: 200, x: 85, y: 75, speed: 40, drift: 15 },
  { color: "#8b5cf6", size: 180, x: 30, y: 70, speed: 32, drift: 22 },
  { color: "#ef4444", size: 160, x: 50, y: 85, speed: 26, drift: 28 },
];

interface OrbData {
  color: string;
  size: number;
  x: number;
  y: number;
  speed: number;
  drift: number;
}

function Orb({ orb, index }: { orb: OrbData; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let startX = orb.x;
    let startY = orb.y;
    let t = Math.random() * 100;
    let raf: number;

    const move = () => {
      t += 0.004;
      const px = startX + Math.sin(t) * orb.drift;
      const py = startY + Math.cos(t * 0.7 + index) * orb.drift * 0.6;
      if (el) {
        el.style.transform = `translate(${px}vw, ${py}vh)`;
      }
      raf = requestAnimationFrame(move);
    };
    raf = requestAnimationFrame(move);
    return () => cancelAnimationFrame(raf);
  }, [orb, index]);

  return (
    <div
      ref={ref}
      className="absolute rounded-full pointer-events-none will-change-transform"
      style={{
        width: orb.size,
        height: orb.size,
        background: `radial-gradient(circle at 30% 30%, ${orb.color}18, ${orb.color}05)`,
        boxShadow: `0 0 ${orb.size * 0.4}px ${orb.color}08`,
        x: `${orb.x}vw`,
        y: `${orb.y}vh`,
        left: 0,
        top: 0,
      }}
    />
  );
}

export default function OrbsBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      container.style.setProperty("--mx", `${x * 12}px`);
      container.style.setProperty("--my", `${y * 8}px`);
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        background: "#09090b",
        transform: "translate(var(--mx, 0px), var(--my, 0px))",
        transition: "transform 2s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {ORBS.map((orb, i) => (
        <Orb key={i} orb={orb} index={i} />
      ))}
    </div>
  );
}