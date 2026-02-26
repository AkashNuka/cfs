"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

const locations = [
  {
    name: "CFS9 Madhapur",
    address: "Durgam Cheruvu Road, Near Inorbit Mall, Madhapur, Hyderabad 500081",
    phone: "+91 90002 90009",
    hours: "5:00 AM – 11:00 PM",
    comingSoon: false,
  },
  {
    name: "CFS9 Kondapur",
    address: "Plot 42, Botanical Garden Road, Kondapur, Hyderabad 500084",
    phone: "+91 90001 90009",
    hours: "5:00 AM – 11:00 PM",
    comingSoon: false,
  },
  {
    name: "CFS9 Jubilee Hills",
    address: "Jubilee Hills, Hyderabad",
    phone: null,
    hours: null,
    comingSoon: true,
  },
];

export default function LocationsSection() {
  return (
    <section className="py-24 md:py-32 bg-background" id="locations">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Find Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-bold uppercase leading-tight"
          >
            Our <span className="text-primary">Locations</span>
          </motion.h2>
          <div className="mt-4 w-16 h-1 bg-primary rounded-full mx-auto" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-muted text-lg"
          >
            Train at the location that suits you best.
          </motion.p>
        </div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative rounded-2xl border p-8 flex flex-col gap-5 transition-all duration-300 ${
                loc.comingSoon
                  ? "border-white/15 bg-white/3 opacity-75"
                  : "border-white/10 bg-white/4 hover:border-primary/40 hover:bg-primary/5"
              }`}
            >
              {loc.comingSoon && (
                <span className="absolute top-4 right-4 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                  Coming Soon
                </span>
              )}

              <div>
                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {loc.name}
                </h3>
              </div>

              <div className="space-y-3 flex-1">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted text-sm leading-relaxed">{loc.address}</p>
                </div>

                {loc.hours && (
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <p className="text-muted text-sm">{loc.hours}</p>
                  </div>
                )}

                {loc.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, "")}`}
                      className="text-muted text-sm hover:text-white transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>
                )}

                {loc.comingSoon && (
                  <a
                    href="https://wa.me/918886564999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-primary text-sm font-semibold hover:underline"
                  >
                    Get Notified <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to branches page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/branches"
            className="inline-flex items-center gap-2 text-muted hover:text-white text-sm font-medium transition-colors"
          >
            View all branch details <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
