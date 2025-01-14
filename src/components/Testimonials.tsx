"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Solutions Inc.",
    quote:
      "This AI-powered call center has revolutionized our customer support. We've seen a 30% increase in customer satisfaction!",
    image: "https://picsum.photos/100",
  },
  {
    name: "Jane Smith",
    company: "E-commerce Experts",
    quote:
      "The detailed call logs have been a game-changer for our business. We can now easily track and improve our customer interactions.",
    image: "https://picsum.photos/100",
  },
  {
    name: "Mike Johnson",
    company: "Retail Giants",
    quote:
      "The AI agents handle our high call volumes effortlessly. It's like having a 24/7 support team without the overhead.",
    image: "https://picsum.photos/100",
  },
  {
    name: "Sarah Lee",
    company: "Healthcare Solutions",
    quote:
      "Patient satisfaction has improved significantly since we implemented this AI call center. It's been a fantastic investment.",
    image: "https://picsum.photos/100",
  },
  {
    name: "Emily Davis",
    company: "Global Logistics Co.",
    quote:
      "This solution has streamlined our communication process, saving us countless hours and improving efficiency.",
    image: "https://picsum.photos/100",
  },
  {
    name: "Robert Wilson",
    company: "Travel Connect",
    quote:
      "Our clients love how quickly they can get answers. This system has taken our customer experience to the next level.",
    image: "https://picsum.photos/100",
  },
  {
    name: "Olivia Martinez",
    company: "Tech Innovators",
    quote:
      "The AI's ability to resolve queries autonomously has freed up our team to focus on more complex tasks.",
    image: "https://picsum.photos/100",
  },
  {
    name: "James Brown",
    company: "Financial Advisors LLC",
    quote:
      "We've noticed a huge boost in client trust and satisfaction thanks to the seamless call experiences.",
    image: "https://picsum.photos/100",
  },
  {
    name: "Sophia Taylor",
    company: "Event Planners United",
    quote:
      "Managing customer inquiries during peak seasons is now stress-free with this AI-powered system.",
    image: "https://picsum.photos/100",
  },
];

export default function Testimonials() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollWidth = containerRef.current?.scrollWidth || 0;
    const viewportWidth = containerRef.current?.offsetWidth || 0;
    const scrollDistance = scrollWidth - viewportWidth;

    const scroll = async () => {
      await controls.start({
        x: -scrollDistance,
        transition: {
          duration: scrollDistance / 500,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    if (!isPaused) {
      scroll();
    } else {
      controls.stop();
    }

    return () => {
      controls.stop();
    };
  }, [controls, isPaused]);

  return (
    <section
      className="relative z-30 py-16 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-screen">
        <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            className="flex py-8"
            animate={controls}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: {
    name: string;
    company: string;
    quote: string;
    image: string;
  };
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      className="w-96 flex-shrink-0 mx-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95, rotate: Math.random() * 6 - 3 }}
      drag
      dragElastic={0.125}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      style={{ x, y }}
    >
      <div className="bg-white/80 border p-6 rounded-lg h-full shadow-md">
        <div className="flex items-center mb-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            width={50}
            height={50}
            className="rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-600">{testimonial.company}</p>
          </div>
        </div>
        <p className="italic">{testimonial.quote}</p>
      </div>
    </motion.div>
  );
}