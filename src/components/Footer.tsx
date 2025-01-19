"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Laptop,
} from "lucide-react";
import { motion } from "framer-motion";

const socialIcons = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#08090b] backdrop-blur-xl text-white py-12 z-30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Parrot AI</h3>
              <p className="text-gray-400 mb-4">
                Simplifying customer support with AI
              </p>
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={social.href}
                      className="hover:text-blue-400 transition-colors"
                    >
                      <social.icon size={20} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/hexxt-git/call-center-ai-frontend/issues"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Who are we</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Laptop size={18} className="mr-2" />
                  <a
                    href="https://linkedin.com/in/zeghdani"
                    className="hover:text-blue-400 transition-colors"
                    target="_blank"
                  >
                    Zeghdani Salah
                  </a>
                </li>
                <li className="flex items-center">
                  <Laptop size={18} className="mr-2" />
                  <a
                    href="https://www.linkedin.com/in/aymen-charfaoui-15990828b/"
                    className="hover:text-blue-400 transition-colors"
                    target="_blank"
                  >
                    Charfaoui Aymen
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <motion.div
            className="mt-8 pt-8 border-t border-[#112] text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p>
              @{new Date().getFullYear()} Parrot AI
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
