"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  children?: ReactNode;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  children,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={clsx(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white uppercase"
        style={{ fontFamily: "var(--font-oswald)" }}
      >
        {title}
      </h2>
      <div className="mt-4 mx-auto w-20 h-1 bg-primary rounded-full" />
      {subtitle && (
        <p className={clsx(
          "mt-6 text-muted text-lg max-w-2xl",
          align === "center" && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}
