"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqs = [
  {
    question: "How secure are my call logs?",
    answer:
      "Your call logs are encrypted and stored securely. We use industry-standard security measures to protect your data.",
  },
  {
    question: "What types of businesses can use this service?",
    answer:
      "Our AI-powered call center agents can be used by businesses of all sizes and industries, from small startups to large enterprises.",
  },
  {
    question: "Can I customize the AI agent's responses?",
    answer:
      "Yes, you can customize the AI agent's responses by providing your business information and FAQs during the setup process.",
  },
  {
    question: "How does the AI agent handle customer queries?",
    answer:
      "The AI agent uses natural language processing, machine learning, and retrieval-augmented generation (RAG) to understand and respond to customer queries effectively.",
  },
  {
    question: "When will the service launch?",
    answer:
      "We have come a long way but we are still in the development phase. We are working hard to launch the service as soon as possible.",
  },
];

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative z-30 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-full max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-start lg:text-lg hover:no-underline font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="lg:text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
