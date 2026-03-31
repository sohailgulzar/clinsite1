import { motion } from "motion/react";

export default function DNAAnimation() {
  const dots = 30;
  const height = 700;
  const spacing = height / dots;

  return (
    <div className="relative w-48 h-[700px] flex items-center justify-center opacity-30 lg:opacity-60">
      <svg viewBox={`0 0 120 ${height}`} className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="dna-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent-500)" />
            <stop offset="100%" stopColor="var(--color-accent-600)" />
          </linearGradient>
          <linearGradient id="dna-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-brand-400)" />
            <stop offset="100%" stopColor="var(--color-brand-600)" />
          </linearGradient>
          <filter id="glow-strong" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {[...Array(dots)].map((_, i) => {
          const delay = i * 0.12;
          const y = i * spacing;
          const phase = i * 0.4;
          
          return (
            <g key={i}>
              {/* Connecting Line with Gradient and Pulse */}
              <motion.line
                x1={60}
                y1={y}
                x2={60}
                y2={y}
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-slate-300"
                animate={{
                  x1: [60 + Math.sin(phase) * 50, 60 - Math.sin(phase) * 50, 60 + Math.sin(phase) * 50],
                  x2: [60 - Math.sin(phase) * 50, 60 + Math.sin(phase) * 50, 60 - Math.sin(phase) * 50],
                  opacity: [0.1, 0.4, 0.1],
                  strokeWidth: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay
                }}
              />

              {/* Strand 1 Dot - Front/Back Perspective */}
              <motion.circle
                r="5"
                filter="url(#glow-strong)"
                animate={{
                  cx: [60 + Math.sin(phase) * 50, 60 - Math.sin(phase) * 50, 60 + Math.sin(phase) * 50],
                  scale: [1, 1.4, 0.8, 1.4, 1],
                  opacity: [0.8, 1, 0.4, 1, 0.8],
                  fill: ["#26a69a", "#1e5a95", "#26a69a"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay
                }}
                fill="url(#dna-gradient-1)"
                cy={y}
              />

              {/* Strand 2 Dot - Opposite Phase */}
              <motion.circle
                r="5"
                filter="url(#glow-soft)"
                animate={{
                  cx: [60 - Math.sin(phase) * 50, 60 + Math.sin(phase) * 50, 60 - Math.sin(phase) * 50],
                  scale: [0.8, 1.4, 1, 1.4, 0.8],
                  opacity: [0.4, 1, 0.8, 1, 0.4],
                  fill: ["#94a3b8", "#475569", "#94a3b8"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay
                }}
                fill="url(#dna-gradient-2)"
                cy={y}
              />

              {/* Subtle Particles around dots */}
              <motion.circle
                r="1.5"
                className="fill-accent-400"
                animate={{
                  cx: [60 + Math.sin(phase) * 55, 60 - Math.sin(phase) * 55, 60 + Math.sin(phase) * 55],
                  cy: [y - 5, y + 5, y - 5],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: delay + 0.5
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
