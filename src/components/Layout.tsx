"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (value) => -value / 2);

  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed inset-0 min-h-[200vh] overflow-hidden opacity-80">
        <motion.div className="absolute inset-0" style={{ y }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30" />
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                id="grad1"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(59,130,246)", stopOpacity: 0.4 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(59,130,246)", stopOpacity: 0 }}
                />
              </radialGradient>
              <radialGradient
                id="grad2"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(167,109,250)", stopOpacity: 0.4 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(167,109,250)", stopOpacity: 0 }}
                />
              </radialGradient>
            </defs>
            <motion.circle
              cx="20%"
              cy="30%"
              r="230"
              fill="url(#grad2)"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 60, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.circle
              cx="80%"
              cy="70%"
              r="260"
              fill="url(#grad2)"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -50, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.circle
              cx="70%"
              cy="20%"
              r="200"
              fill="url(#grad1)"
              animate={{
                scale: [1, 1.1, 1],
                x: [0, 35, 0],
                y: [0, 25, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.circle
              cx="30%"
              cy="80%"
              r="220"
              fill="url(#grad1)"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, -50, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </svg>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-white/50 z-10" />
      <div className="relative z-20">{children}</div>
    </div>
  );
}
