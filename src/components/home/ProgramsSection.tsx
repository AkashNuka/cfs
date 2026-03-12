import SectionHeader from "@/components/SectionHeader";
import ProgramCard from "@/components/ProgramCard";

const programs = [
  {
    title: "Strength Training",
    description: "Build raw power with progressive overload, compound lifts, and periodized programs designed for maximum strength gains.",
    image: "/stock/1581009146145-b5ef050c2e1e.jpg",
  },
  {
    title: "Bodybuilding",
    description: "Sculpt the perfect physique with hypertrophy-focused training, isolation work, and competition-level coaching.",
    image: "/stock/1583454110551-21f2fa2afe61.jpg",
  },
  {
    title: "CrossFit",
    description: "High-intensity functional fitness combining weightlifting, cardio, and gymnastics for total athletic performance.",
    image: "/stock/1534258936925-c58bed479fcb.jpg",
  },
  {
    title: "Cardio & HIIT",
    description: "Torch fat and boost endurance with heart-pumping interval training, battle ropes, and conditioning circuits.",
    image: "/stock/1538805060514-97d9cc17730c.jpg",
  },
  {
    title: "Functional Fitness",
    description: "Move better in daily life with mobility work, core stability, and movement pattern optimization.",
    image: "/stock/1549060279-7e168fcee0c2.jpg",
  },
  {
    title: "Personal Training",
    description: "One-on-one coaching tailored to your goals, fitness level, and schedule. Your transformation starts here.",
    image: "/stock/1571019614242-c5c5dee9f50b.jpg",
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-24 md:py-32 bg-background" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Programs"
          subtitle="From beginners to elite competitors, our scientifically-designed training programs deliver results. Choose your path."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} {...program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
