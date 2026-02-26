"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import Button from "./Button";

interface BranchCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
  index: number;
}

export default function BranchCard({
  name,
  address,
  phone,
  hours,
  mapUrl,
  index,
}: BranchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative bg-surface rounded-lg border border-border overflow-hidden group hover:border-primary/40 transition-all duration-300"
    >
      {/* Map placeholder */}
      <div className="h-48 bg-surface-light relative overflow-hidden">
        <iframe
          src={mapUrl}
          className="w-full h-full border-0 opacity-60 group-hover:opacity-80 transition-opacity duration-300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`CFS9 ${name} location`}
        />
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded text-xs font-bold tracking-widest" style={{ fontFamily: "var(--font-oswald)" }}>
          {name.toUpperCase()}
        </div>
      </div>

      {/* Info */}
      <div className="p-6 space-y-4">
        <h3
          className="text-2xl font-bold text-white tracking-wider uppercase"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          {name} Branch
        </h3>

        <div className="space-y-3 text-sm text-muted">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span>{address}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
              {phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <span>{hours}</span>
          </div>
        </div>

        <Button href="/contact" variant="outline" size="sm" arrow>
          Get Directions
        </Button>
      </div>
    </motion.div>
  );
}
