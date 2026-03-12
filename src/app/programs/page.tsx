"use client";

import Image from "next/image";
import ProgramCard from "@/components/ProgramCard";
import Button from "@/components/Button";

const programs = [
  {
    title: "Strength Training",
    description:
      "Build raw power with progressive overload protocols. Squat, bench, deadlift — master the big three with expert coaching and competition-grade equipment.",
    image: "/stock/1526401485004-46910ecc8e51.jpg",
    intensity: "Advanced" as const,
  },
  {
    title: "Bodybuilding",
    description:
      "Sculpt your physique with hypertrophy-focused training. Custom split routines, mind-muscle connection coaching, and contest-prep support.",
    image: "/stock/1583454110551-21f2fa2afe61.jpg",
    intensity: "All Levels" as const,
  },
  {
    title: "CrossFit",
    description:
      "High-intensity functional training that builds elite endurance, strength, and agility. WODs designed by certified CrossFit coaches.",
    image: "/stock/1541534741688-6078c6bfb5c5.jpg",
    intensity: "Intermediate" as const,
  },
  {
    title: "Cardio & HIIT",
    description:
      "Torch fat and boost your cardiovascular endurance with structured interval training. Treadmills, rowers, assault bikes, and circuit stations.",
    image: "/stock/1538805060514-97d9cc17730c.jpg",
    intensity: "All Levels" as const,
  },
  {
    title: "Functional Training",
    description:
      "Train movements, not muscles. Battle ropes, kettlebells, TRX suspension, and agility drills for athletic performance.",
    image: "/stock/1544367567-0f2fcb009e0b.jpg",
    intensity: "Intermediate" as const,
  },
  {
    title: "Yoga & Flexibility",
    description:
      "Restore balance and mobility with guided yoga sessions. Power yoga, Vinyasa flow, and active recovery classes for all levels.",
    image: "/stock/1506126613408-eca07ce68773.jpg",
    intensity: "All Levels" as const,
  },
  {
    title: "Boxing & MMA",
    description:
      "Learn striking fundamentals, footwork, and defense. Heavy bags, speed bags, and sparring sessions with trained fighters.",
    image: "/stock/1549719386-74dfcbf7dbed.jpg",
    intensity: "Advanced" as const,
  },
  {
    title: "Personal Training",
    description:
      "One-on-one sessions with an elite coach tailored to your goals. Custom programming, nutrition guidance, and accountability.",
    image: "/stock/1571019614242-c5c5dee9f50b.jpg",
    intensity: "All Levels" as const,
  },
  {
    title: "Gym Access",
    description:
      "Train in a premium, well-maintained environment equipped with modern fitness machines and free weights. Open to all fitness levels.",
    image: "/stock/1534438327276-14e5300c3a48.jpg",
    intensity: "All Levels" as const,
  },
  {
    title: "Weight Loss Programs",
    description:
      "Scientifically structured fat-loss programs combining targeted workouts and nutrition guidance for measurable, sustainable results.",
    image: "/stock/1518611012118-696072aa579a.jpg",
    intensity: "All Levels" as const,
  },
  {
    title: "Online Coaching",
    description:
      "Expert guidance from anywhere with customised workout plans, nutrition tracking, and weekly progress check-ins from our certified coaches.",
    image: "/stock/1517836357463-d25dfeac3438.jpg",
    intensity: "All Levels" as const,
  },
  {
    title: "Nutrition Guidance",
    description:
      "Personalised nutrition strategies aligned with your fitness and lifestyle goals. Meal planning, macro tracking, and dietary coaching.",
    image: "/stock/1490645935967-10de6ba17061.jpg",
    intensity: "All Levels" as const,
  },
];

export default function ProgramsPage() {
  return (
    <main>
      {/* Hero banner */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/programs-hero.jpg"
          alt="CFS9 training floor"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover object-[center_7%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-12 sm:pt-20">
          <p
            className="text-xs sm:text-base tracking-[0.22em] sm:tracking-[0.3em] uppercase text-primary font-medium mb-4 sm:mb-5"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Train Your Way
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl leading-none font-bold uppercase mb-4 text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            Our <span className="text-accent">Programs</span>
          </h1>
          <div className="mx-auto w-28 h-1 bg-primary rounded-full mb-6" />
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pt-0 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Section */}
          <div className="text-center mb-16 mt-10">
            <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
              Explore Our Programs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6" style={{ fontFamily: "var(--font-oswald)" }}>
              Diverse. <span className="text-primary">Effective.</span> Results-Driven.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} href="/contact" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-muted mb-8">
            Book a free consultation with our coaches and we&apos;ll build a program around your goals.
          </p>
          <Button href="/contact" size="lg" arrow>
            Book Free Consultation
          </Button>
        </div>
      </section>
    </main>
  );
}
