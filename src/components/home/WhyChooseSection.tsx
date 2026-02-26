"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Certified elite trainers",
  "Result-oriented training programs",
  "Limited members for personalized attention",
  "Premium equipment and clean facilities",
  "Multiple prime locations",
  "Transformation-focused approach",
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 md:py-32 bg-background" id="why-cfs9">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              The CFS9 Difference
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl font-bold uppercase leading-tight mb-4"
            >
              Why Choose{" "}
              <span className="text-primary">CFS9</span>
            </motion.h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted text-lg leading-relaxed"
            >
              We don't just offer a gym — we offer a complete transformation experience,
              backed by certified coaches and a results-first culture.
            </motion.p>
          </div>

          {/* Right — checklist */}
          <ul className="space-y-4">
            {reasons.map((reason, i) => (
              <motion.li
                key={reason}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/8 bg-white/3 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white font-medium text-base">{reason}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
