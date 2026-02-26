"use client";

import Image from "next/image";
import StatCounter from "@/components/StatCounter";

const stats = [
  { end: 500, suffix: "+", label: "Active Members" },
  { end: 10, suffix: "+", label: "Years Experience" },
  { end: 2, suffix: "", label: "Branches" },
  { end: 50, suffix: "+", label: "Transformations" },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&q=80"
        alt="Gym background"
        fill
        className="object-cover opacity-15"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />

      {/* Stats Grid */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full" />
    </section>
  );
}
