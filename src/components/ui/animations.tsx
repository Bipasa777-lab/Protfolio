"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";

// ============================================================
// 1. ScrollReveal: AOS-style scroll-triggered entry effect
// ============================================================
type RevealVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "flip-up";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
  margin?: string;
}

const variantsMap = {
  "fade-up": { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  "fade-down": { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
  "fade-left": { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
  "fade-right": { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  "zoom-in": { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
  "zoom-out": { hidden: { opacity: 0, scale: 1.06 }, visible: { opacity: 1, scale: 1 } },
  "flip-up": { hidden: { opacity: 0, rotateX: 45 }, visible: { opacity: 1, rotateX: 0 } },
};

export function ScrollReveal({
  children,
  variant = "fade-up",
  duration = 0.6,
  delay = 0,
  once = true,
  className = "",
  margin = "-60px",
}: ScrollRevealProps) {
  const selectedVariant = variantsMap[variant] || variantsMap["fade-up"];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // premium cubic-bezier easeOut
      }}
      variants={selectedVariant}
      className={className}
      style={variant === "flip-up" ? { perspective: 1000, transformStyle: "preserve-3d" } : undefined}
    >
      {children}
    </motion.div>
  );
}

// ============================================================
// 2. TiltCard: Interactive 3D tilt effect on mouse hover
// ============================================================
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMax?: number;
}

export function TiltCard({ children, className = "", tiltMax = 12 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth movement
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltMax, -tiltMax]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltMax, tiltMax]), springConfig);

  // Dynamic light overlay background radial gradient mapping to cursor
  const shineBg = useTransform([x, y], ([currX, currY]) => {
    const px = ((currX as number) + 0.5) * 100;
    const py = ((currY as number) + 0.5) * 100;
    return `radial-gradient(circle 250px at ${px}% ${py}%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 75%)`;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize coordinates to -0.5 to 0.5
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group perspective-1000 ${className}`}
    >
      <div style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }} className="h-full w-full">
        {children}
      </div>
      
      {/* Light sheen effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-screen"
        style={{
          background: shineBg,
        }}
      />
    </motion.div>
  );
}

// ============================================================
// 3. ScrollProgressBar: Top progress indicator
// ============================================================
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[100] origin-left pointer-events-none"
      style={{ scaleX }}
    />
  );
}

// ============================================================
// 4. FloatingShapes3D: Ambient 3D background components
// ============================================================
export function FloatingShapes3D() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Drift Sphere 1 */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] left-[5%] size-72 rounded-full opacity-[0.06] blur-3xl dark:opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      {/* Drift Sphere 2 */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[25%] right-[5%] size-80 rounded-full opacity-[0.05] blur-3xl dark:opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)",
        }}
      />

      {/* 3D Wireframe Hexagonal prism */}
      <motion.div
        animate={{
          y: [0, 35, 0],
          x: [0, -25, 0],
          rotateX: [0, 180, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
        className="absolute top-[35%] right-[12%] size-36 md:size-44 opacity-[0.08] dark:opacity-[0.05]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent fill-none stroke-[0.4] sm:stroke-[0.3]">
          <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" />
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="10" y1="30" x2="90" y2="30" />
          <line x1="10" y1="70" x2="90" y2="70" />
          <line x1="10" y1="30" x2="50" y2="50" />
          <line x1="90" y1="30" x2="50" y2="50" />
          <line x1="50" y1="90" x2="50" y2="50" />
        </svg>
      </motion.div>

      {/* 3D Wireframe Astroid/Ring */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          rotateX: [360, 180, 0],
          rotateY: [0, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
        className="absolute bottom-[20%] left-[10%] size-28 md:size-36 opacity-[0.07] dark:opacity-[0.04]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent-soft fill-none stroke-[0.5] sm:stroke-[0.3]">
          <circle cx="50" cy="50" r="35" />
          <ellipse cx="50" cy="50" rx="35" ry="10" />
          <ellipse cx="50" cy="50" rx="10" ry="35" />
          <circle cx="50" cy="50" r="10" strokeDasharray="2 2" />
        </svg>
      </motion.div>
    </div>
  );
}
