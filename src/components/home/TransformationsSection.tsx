"use client";

import { motion } from "framer-motion";
import StatCounter from "@/components/StatCounter";

const stats = [
  { end: 500, suffix: "+", label: "Active Members" },
  { end: 10, suffix: "+", label: "Years of Excellence" },
  { end: 200, suffix: "+", label: "Transformations" },
  { end: 2, suffix: "", label: "Prime Locations" },
];

export default function TransformationsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&q=80"
        alt="Gym training"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-red-950/15" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Our Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-bold uppercase leading-tight"
          >
            Real People.{" "}
            <span className="text-primary">Real Results.</span>
          </motion.h2>
          <div className="mt-4 w-16 h-1 bg-primary rounded-full mx-auto" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-muted text-lg max-w-2xl mx-auto"
          >
            Our members achieve measurable transformations through discipline, expert
            coaching, and consistency.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <StatCounter {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
