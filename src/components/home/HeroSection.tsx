"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Users } from "lucide-react";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        alt="CFS9 Gym Interior"
        fill
        className="object-cover opacity-30"
        priority
        sizes="100vw"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Title */}
          <h1
            className="text-7xl sm:text-8xl md:text-9xl font-bold text-white leading-none tracking-tight"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            CFS9
          </h1>
          <div className="mt-2 mx-auto w-24 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Precision coaching for the elite physique.{" "}
          <span className="text-white font-semibold">Enter the station</span>{" "}
          and sculpt your legacy with iron and will.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/contact" variant="primary" size="lg" arrow>
            Start Transformation
          </Button>
          <Button href="/gallery" variant="outline" size="lg">
            <Play className="w-4 h-4 mr-1" />
            Watch Trailer
          </Button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-14 flex items-center justify-center gap-4"
        >
          {/* Avatar Stack */}
          <div className="flex -space-x-3">
            {[
              "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
            ].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Member"
                width={40}
                height={40}
                className="rounded-full border-2 border-background object-cover"
              />
            ))}
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold border-2 border-background">
              500
            </div>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5 text-white text-sm font-bold">
              <Users className="w-4 h-4 text-primary" />
              ELITE ATHLETES
            </div>
            <p className="text-muted text-xs">Forged in the last year</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
