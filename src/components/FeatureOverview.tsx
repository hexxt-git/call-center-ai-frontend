"use client";

import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Quick and Easy Setup",
    description:
      "Create an account and connect your phone number in just a few steps.",
    stat: 5,
    statLabel: "Minute Setup",
  },
  {
    title: "Business Information Configuration",
    description:
      "Provide key details about your business, such as FAQs, services, or other data the agent needs to handle calls effectively.",
    stat: 100,
    statLabel: "Customization Options",
  },
  {
    title: "Customizable Call Functions",
    description:
      "Configure the agents for tasks like customer support or complaint recording based on your business needs.",
    stat: 24,
    statLabel: "Hour Support",
  },
  {
    title: "Detailed Call Logs",
    description:
      "Automatically generate searchable call logs with timestamps, caller information, and summarized notes for every interaction.",
    stat: 99,
    statLabel: "% Accuracy",
  },
];

function Counter({ value, label }: { value: number; label: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value.toString(), 10);
      const duration = 2000;
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-blue-600">{count}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}

export default function FeatureOverview() {
  return (
    <section className="relative z-30 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Feature Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative border flex gap-4 lg:gap-0 lg:flex-col items-center p-6 bg-white/80 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              drag
              dragElastic={0.125}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            >
              <div className="lg:contents">
                <h3 className="text-xl font-semibold mb-2 text-center">
                  <BadgeCheck className="text-blue-500 h-5 inline mb-1" />{" "}
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {feature.description}
                </p>
              </div>
              <Counter value={feature.stat} label={feature.statLabel} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
