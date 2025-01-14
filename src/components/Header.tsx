"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="h-screen flex items-center justify-center overflow-hidden relative z-30">
      <div className="container mx-auto px-4 py-8 text-center relative z-10">
        <motion.h1
          className="text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          AI-Powered Call Center Agents{" "}
          <Phone
            className="text-blue-500 inline scale-x-[-1]"
            size={40}
            strokeWidth={2.5}
          />
        </motion.h1>
        <motion.div
          className="text-xl text-gray-600 mb-8 h-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
        >
          <TypeAnimation
            sequence={[
              " ",
              1000,
              "Simplify customer support",
              5000,
              "Handle complaints effortlessly",
              5000,
              "Boost customer satisfaction",
              5000,
            ]}
            wrapper="span"
            speed={70}
            repeat={Infinity}
          />
        </motion.div>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
          }}
        >
          <Button size="lg">Get Started Now</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </motion.div>
      </div>
    </header>
  );
}
