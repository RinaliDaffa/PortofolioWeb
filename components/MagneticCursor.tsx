"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role='button'], .magnetic-target";
// Fraction of the remaining distance the ring closes per 60fps frame.
// Converted to a time-based factor so it feels the same on 60/120/144Hz.
const RING_FOLLOW = 0.28;

export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on devices with a precise pointer (mouse / trackpad)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let started = false;
    let hovering = false;
    let rafId = 0;
    let last = performance.now();

    const show = (on: boolean) => {
      dot.dataset.visible = on ? "true" : "false";
      ring.dataset.visible = on ? "true" : "false";
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows the pointer exactly — no easing, no CSS transition.
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      if (!started) {
        // Start the ring where the pointer is, not at (0,0).
        ringX = mouseX;
        ringY = mouseY;
        started = true;
        root.classList.add("custom-cursor");
      }
      show(true);
    };

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64); // clamp after tab switches
      last = now;
      if (started) {
        const k = reduceMotion ? 1 : 1 - Math.pow(1 - RING_FOLLOW, dt / 16.667);
        ringX += (mouseX - ringX) * k;
        ringY += (mouseY - ringY) * k;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    // Event delegation instead of attaching listeners to every link
    const onOver = (e: MouseEvent) => {
      const isInteractive = !!(e.target as Element | null)?.closest?.(INTERACTIVE);
      if (isInteractive !== hovering) {
        hovering = isInteractive;
        dot.dataset.hover = String(hovering);
        ring.dataset.hover = String(hovering);
      }
    };
    const onLeaveWindow = () => show(false);
    const onDown = () => (ring.dataset.down = "true");
    const onUp = () => (ring.dataset.down = "false");

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      root.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <>
      {/* Outer elements only move (transform set from JS, never transitioned).
          Inner elements handle size/hover changes with a transform-only transition. */}
      <div ref={dotRef} data-cursor="dot" data-visible="false" aria-hidden className="cursor-dot">
        <span />
      </div>
      <div ref={ringRef} data-cursor="ring" data-visible="false" aria-hidden className="cursor-ring">
        <span />
      </div>
    </>
  );
}
