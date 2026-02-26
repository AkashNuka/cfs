"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/barbell.png"
        alt="CFS9 — Premium Gym Interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/85 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Tag */}
          <p
            className="text-sm sm:text-base tracking-[0.3em] uppercase text-primary font-medium mb-5"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Welcome to CFS9
          </p>

          {/* Main Title */}
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Central Fitness Station
            <span className="block text-primary mt-1">(CFS9)</span>
          </h1>
          <div className="mt-5 mx-auto w-28 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Premium fitness. Proven results.{" "}
          <span className="text-white font-semibold">
            Elite training spaces across Hyderabad.
          </span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex items-center justify-center"
        >
          <Button href="https://wa.me/918886564999" variant="primary" size="lg" arrow>
            Chat with us on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
