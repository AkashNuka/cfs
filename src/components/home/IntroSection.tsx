"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="py-24 md:py-32 bg-background" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Who We Are
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl font-bold uppercase leading-tight mb-6"
        >
          Built for Results.{" "}
          <span className="text-primary">Built for You.</span>
        </motion.h2>

        <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-8" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted text-lg md:text-xl leading-relaxed"
        >
          Central Fitness Station (CFS9) is a premium fitness brand built for individuals who
          value results, quality training, and a refined workout experience.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-muted text-lg md:text-xl leading-relaxed mt-5"
        >
          Whether your goal is fat loss, strength, performance, or lifestyle fitness, CFS9
          provides expert coaching, structured programs, and a motivating environment to help
          you achieve{" "}
          <span className="text-white font-semibold">sustainable results</span>.
        </motion.p>
      </div>
    </section>
  );
}
