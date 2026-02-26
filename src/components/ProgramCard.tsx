"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

export interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  index?: number;
  href?: string;
  intensity?: "All Levels" | "Intermediate" | "Advanced";
}

export default function ProgramCard({ title, description, image, index = 0, href, intensity }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg bg-surface border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 p-6 -mt-16">
        {intensity && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent/20 text-accent px-2.5 py-1 rounded mb-3">
            {intensity}
          </span>
        )}
        <h3
          className="text-2xl font-bold text-white tracking-wider uppercase mb-2"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
        <Button href={href || "/programs"} variant="ghost" size="sm" arrow>
          Learn More
        </Button>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg ring-1 ring-primary/30" />
    </motion.div>
  );
}
