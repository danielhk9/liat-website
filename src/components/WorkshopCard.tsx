"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface WorkshopCardProps {
  href: string;
  title: string;
  description: string;
  emoji: string;
}

export default function WorkshopCard({ href, title, description, emoji }: WorkshopCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-80, 80], [12, -12]);
  const rotateY = useTransform(x, [-80, 80], [-12, 12]);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={href} className="block rounded-3xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.85)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.9) inset",
        }}
      >
        {/* Placeholder image box with emoji */}
        <div
          className="aspect-video flex flex-col items-center justify-center gap-3 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #d1fae5, #fef9c3)" }}
        >
          <span
            className="text-7xl"
            style={{ animation: "floatUp 3s ease-in-out infinite", display: "block" }}
          >
            {emoji}
          </span>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: "radial-gradient(circle at 30% 50%, rgba(134,239,172,0.6), transparent 60%)",
            }}
          />
        </div>

        {/* Card content */}
        <div className="p-6" style={{ transform: "translateZ(20px)" }}>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
          <p className="text-gray-500 text-sm mb-4">{description}</p>
          <span className="game-btn-sm-green">
            לפרטים ולהזמנה
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
