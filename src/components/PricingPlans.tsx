"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CircleCheck } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "$19.99/month",
    features: ["200 calls every day", "up to 3 forms", "email support"],
    option: "Choose Plan",
  },
  {
    name: "Premium",
    price: "$49.99/month",
    features: [
      "Unlimited calls",
      "unlimited forms",
      "call logging",
      "24/7 support",
    ],
    option: "Choose Plan",
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited calls",
      "unlimited forms",
      "Advanced analytics",
      "Dedicated account manager",
    ],
    option: "Book A Meeting",
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, z: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragElastic={0.1}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      {children}
    </motion.div>
  );
}

export default function PricingPlans() {
  return (
    <section className="relative z-30 py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <TiltCard key={index}>
              <Card
                className={`relative z-10 h-full ${plan.recommended ? "border-2 border-blue-500" : ""}`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 text-sm rounded-bl">
                    Recommended
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-4">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center capitalize"
                      >
                        <CircleCheck className="text-blue-500 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${plan.recommended ? "bg-blue-500 hover:bg-blue-600" : ""}`}
                  >
                    {plan.option}
                  </Button>
                </CardFooter>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
