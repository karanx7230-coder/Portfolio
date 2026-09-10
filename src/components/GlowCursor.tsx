import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface GlowCursorProps {
  children?: React.ReactNode;
  color?: string;
  secondaryColor?: string;
  trailLength?: number;
  trailWidth?: number;
  trailTaper?: number;
  followSpeed?: number;
  glowIntensity?: number;
  glowSpread?: number;
  hotspot?: number;
  brightness?: number;
  opacity?: number;
  pulseSpeed?: number;
  noiseStrength?: number;
  idleFade?: boolean;
  idleTimeout?: number;
  fadeDuration?: number;
  blendMode?: React.CSSProperties["mixBlendMode"];
  enabled?: boolean;
}

export const GlowCursor: React.FC<GlowCursorProps> = ({
  children,
  color = "#C5A059",
  secondaryColor = "#2D5D4A",
  trailLength = 40,
  trailWidth = 4,
  trailTaper = 0.8,
  followSpeed = 0.16,
  glowIntensity = 1.1,
  glowSpread = 1,
  hotspot = 0.65,
  brightness = 0.9,
  opacity = 0.7,
  idleFade = true,
  idleTimeout = 700,
  fadeDuration = 900,
  blendMode = "normal",
  enabled = true,
}) => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, {
    stiffness: 220 * followSpeed,
    damping: 26,
    mass: 0.3,
  });
  const springY = useSpring(y, {
    stiffness: 220 * followSpeed,
    damping: 26,
    mass: 0.3,
  });
  const trailRef = useRef<HTMLDivElement>(null);
  const lastMove = useRef<number>(Date.now());

  useEffect(() => {
    if (!enabled) return;
    const media = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!media.matches) return;

    let idleTimer: number | undefined;
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      lastMove.current = Date.now();
      if (trailRef.current) trailRef.current.style.opacity = String(opacity);
      window.clearTimeout(idleTimer);
      if (idleFade) {
        idleTimer = window.setTimeout(() => {
          if (trailRef.current) trailRef.current.style.opacity = "0";
        }, idleTimeout);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.clearTimeout(idleTimer);
    };
  }, [enabled, idleFade, idleTimeout, opacity, x, y]);

  return (
    <div className="glow-cursor-surface">
      {children}
      {enabled && (
        <motion.div
          ref={trailRef}
          aria-hidden="true"
          className="glow-cursor"
          style={{
            x: springX,
            y: springY,
            width: Math.max(10, trailWidth * 3),
            height: Math.max(10, trailWidth * 3),
            opacity,
            mixBlendMode: blendMode,
            background: `radial-gradient(circle at ${hotspot * 100}% ${hotspot * 100}%, ${color} 0%, ${color} 18%, ${secondaryColor} 48%, transparent 74%)`,
            filter: `blur(${Math.max(1, glowSpread * trailTaper)}px) brightness(${brightness})`,
            boxShadow: `0 0 ${trailLength * 0.45}px ${color}`,
            transformOrigin: "center",
            scale: 1 + glowIntensity * 0.12,
            transition: `opacity ${fadeDuration}ms ease-out`,
          }}
        />
      )}
    </div>
  );
};

export default GlowCursor;
