"use client";

import { useEffect, useRef, useState } from "react";

export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      if (!isVisible) setIsVisible(true);
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    const onHoverIn = () => setIsHovering(true);
    const onHoverOut = () => setIsHovering(false);

    // Attach magnetic effect to interactive elements
    const attachMagnetics = () => {
      const targets = document.querySelectorAll("a, button, .magnetic-target");
      targets.forEach((el) => {
        el.addEventListener("mouseenter", onHoverIn);
        el.addEventListener("mouseleave", onHoverOut);
      });
    };

    window.addEventListener("mousemove", onMove);
    attachMagnetics();

    // Re-attach on DOM changes
    const observer = new MutationObserver(attachMagnetics);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full transition-all duration-100"
        style={{
          width: isHovering ? 6 : 8,
          height: isHovering ? 6 : 8,
          backgroundColor: "#06b6d4",
          marginLeft: -4,
          marginTop: -4,
          opacity: isVisible ? 1 : 0,
          boxShadow: "0 0 8px #06b6d4",
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full transition-all duration-200"
        style={{
          width: isHovering ? 44 : 32,
          height: isHovering ? 44 : 32,
          border: "1.5px solid rgba(6,182,212,0.5)",
          marginLeft: isHovering ? -22 : -16,
          marginTop: isHovering ? -22 : -16,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering ? "rgba(6,182,212,0.06)" : "transparent",
        }}
      />
    </>
  );
}
