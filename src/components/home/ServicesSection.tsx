"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  User,
  TrendingDown,
  Zap,
  Shield,
  Laptop,
  Salad,
} from "lucide-react";

const services = [
  { icon: Dumbbell, label: "Gym Access" },
  { icon: User, label: "Personal Training" },
  { icon: TrendingDown, label: "Weight Loss Programs" },
  { icon: Zap, label: "Strength & Conditioning" },
  { icon: Shield, label: "Boxing & Functional Training" },
  { icon: Laptop, label: "Online Coaching" },
  { icon: Salad, label: "Nutrition Guidance" },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-black/30">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-red-950/10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-bold uppercase leading-tight"
          >
            Our <span className="text-primary">Services</span>
          </motion.h2>
          <div className="mt-4 w-16 h-1 bg-primary rounded-full mx-auto" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-muted text-lg max-w-2xl mx-auto"
          >
            A complete range of fitness solutions designed to meet diverse goals.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col items-center gap-4 p-6 rounded-xl border border-white/8 bg-white/3 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <p
                className="text-white font-semibold text-center text-sm sm:text-base leading-tight"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                {label}
              </p>
            </motion.div>
          ))}

          {/* Custom plans card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: services.length * 0.08 }}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-primary/30 bg-primary/8 col-span-2 sm:col-span-1"
          >
            <p className="text-primary font-bold text-center text-sm sm:text-base leading-snug"
               style={{ fontFamily: "var(--font-oswald)" }}>
              Custom Plans Available
            </p>
            <p className="text-muted text-xs text-center">
              Contact us for details
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
