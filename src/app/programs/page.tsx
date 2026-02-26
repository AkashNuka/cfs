import { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProgramCard from "@/components/ProgramCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Programs | CFS9 — Central Fitness Station",
  description:
    "Explore CFS9's training programs: Strength Training, Bodybuilding, CrossFit, Cardio & HIIT, Functional Training, Yoga and more in Hyderabad.",
};

const programs = [
  {
    title: "Strength Training",
    description:
      "Build raw power with progressive overload protocols. Squat, bench, deadlift — master the big three with expert coaching and competition-grade equipment.",
    image: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=800&q=80",
    intensity: "Advanced" as const,
  },
  {
    title: "Bodybuilding",
    description:
      "Sculpt your physique with hypertrophy-focused training. Custom split routines, mind-muscle connection coaching, and contest-prep support.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
    intensity: "All Levels" as const,
  },
  {
    title: "CrossFit",
    description:
      "High-intensity functional training that builds elite endurance, strength, and agility. WODs designed by certified CrossFit coaches.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80",
    intensity: "Intermediate" as const,
  },
  {
    title: "Cardio & HIIT",
    description:
      "Torch fat and boost your cardiovascular endurance with structured interval training. Treadmills, rowers, assault bikes, and circuit stations.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80",
    intensity: "All Levels" as const,
  },
  {
    title: "Functional Training",
    description:
      "Train movements, not muscles. Battle ropes, kettlebells, TRX suspension, and agility drills for athletic performance.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    intensity: "Intermediate" as const,
  },
  {
    title: "Yoga & Flexibility",
    description:
      "Restore balance and mobility with guided yoga sessions. Power yoga, Vinyasa flow, and active recovery classes for all levels.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    intensity: "All Levels" as const,
  },
  {
    title: "Boxing & MMA",
    description:
      "Learn striking fundamentals, footwork, and defense. Heavy bags, speed bags, and sparring sessions with trained fighters.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
    intensity: "Advanced" as const,
  },
  {
    title: "Personal Training",
    description:
      "One-on-one sessions with an elite coach tailored to your goals. Custom programming, nutrition guidance, and accountability.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    intensity: "All Levels" as const,
  },
];

export default function ProgramsPage() {
  return (
    <main>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold uppercase mb-4">
            Our <span className="text-accent">Programs</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            From raw strength to mindful movement — we have a program for every goal.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
