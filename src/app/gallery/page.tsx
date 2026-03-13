"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// 2-column cinematic layout
// Each row: 2 images side by side
// Featured rows: 1 wide image full-width for visual rhythm
// Portrait images get taller rows via row-span-2
const images = [
  // Row 1: 2 equal landscape images
  { src: "/gallery/DSC01591.webp",    alt: "Training Floor",     cls: "col-span-1 row-span-1 sm:row-span-2" },
  { src: "/gallery/DSC01593.webp",    alt: "Gym Interior",       cls: "col-span-1 row-span-1" },
  // Row 2: second image fills gap beside tall left
  { src: "/gallery/DSC01595.webp",    alt: "Weights",            cls: "col-span-1 row-span-1" },
  // Row 3: full-width featured hero
  { src: "/gallery/DSC01607.webp",    alt: "Wide Gym View",      cls: "col-span-1 sm:col-span-2 row-span-2" },
  // Row 5: portrait pair
  { src: "/gallery/C9969T01-180.webp",alt: "Portrait Training",  cls: "col-span-1 row-span-3" },
  { src: "/gallery/C9970T01-180.webp",alt: "Portrait Lifting",   cls: "col-span-1 row-span-3" },
  // Row 8: wide hero
  { src: "/gallery/DSC01611.webp",    alt: "Hero Floor",         cls: "col-span-1 sm:col-span-2 row-span-2" },
  // Row 10: 2 landscape side by side
  { src: "/gallery/DSC01613.webp",    alt: "Equipment",          cls: "col-span-1 row-span-1" },
  { src: "/gallery/DSC01625.webp",    alt: "Dumbbells",          cls: "col-span-1 row-span-1" },
  // Row 11: 2 landscape
  { src: "/gallery/DSC01615.webp",    alt: "Training Area",      cls: "col-span-1 row-span-1" },
  { src: "/gallery/DSC01624.webp",    alt: "Action Shot",        cls: "col-span-1 row-span-1" },
  // Row 12: portrait + stacked
  { src: "/gallery/DSC01621.webp",    alt: "Portrait Action",    cls: "col-span-1 row-span-2" },
  { src: "/gallery/DSC01630.webp",    alt: "Wide Action",        cls: "col-span-1 row-span-2" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <main className="bg-[#0f0f0f] min-h-screen">
      {/* Hero */}
      <section className="relative h-[35vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/opengraph.jpg"
          alt="CFS9 Gym"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-8 sm:pt-20">
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-none font-bold uppercase mb-4 text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            Gallery
          </h1>
          <div className="mx-auto w-24 h-1 bg-white/60 rounded-full mb-6" />
        </div>
      </section>

      <section className="py-20 md:py-28 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* 
            Cinematic Masonry Dense Grid 
            Mobile: 2 cols | Tablet: 3 cols | Desktop: 4 cols
            Gaps: 20px
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] auto-rows-[260px] sm:auto-rows-[220px] md:auto-rows-[280px] lg:auto-rows-[320px] grid-flow-dense">
            {images.map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`cursor-pointer group relative overflow-hidden rounded-xl bg-black/40 ${img.cls}`}
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  quality={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1400px) 50vw, 700px"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#060606]/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 z-50 text-white/50 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
              onClick={() => setLightbox(null)}
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={images[lightbox]?.src}
              alt={images[lightbox]?.alt}
              className="max-w-full max-h-[90vh] w-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
