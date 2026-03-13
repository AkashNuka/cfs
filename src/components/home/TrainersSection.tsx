import SectionHeader from "@/components/SectionHeader";
import CoachCard from "@/components/CoachCard";

const coaches = [
  {
    name: "Akshay",
    role: "Senior Fitness Trainer",
    specialization: "Strength & Conditioning",
    experience: "7+ Years",
    image: "/akshay.jpg",
    imagePosition: "50% 30%",
  },
  {
    name: "Vidya Yates",
    role: "Senior Fitness Trainer",
    specialization: "Nutrition & Transformation",
    experience: "10+ Years",
    image: "/vidya-yates.jpg",
    imagePosition: "50% 30%",
  },
  {
    name: "L.V. Surya Prakash",
    role: "Senior Fitness Trainer",
    specialization: "Strength & Conditioning",
    experience: "3+ Years",
    image: "/trainers/LVSuryapraksah.JPG",
    imagePosition: "50% 60%",
  },
  {
    name: "Adarsh Roy",
    role: "Fitness Trainer",
    specialization: "Functional Training",
    experience: "4+ Years",
    image: "/trainers/AdarshRoy.JPG",
    imagePosition: "50% 60%",
  },
  {
    name: "Mahender",
    role: "Fitness Trainer",
    specialization: "Injury Rehab & Exercise Correction",
    experience: "4+ Years",
    image: "/trainers/Mahender.JPG",
  },
  {
    name: "Ajay",
    role: "Fitness Trainer",
    specialization: "CrossFit & Sports Nutrition",
    experience: "4+ Years",
    image: "/trainers/Ajay.JPG",
  },
  {
    name: "N. Surya Prakash",
    role: "Fitness Trainer",
    specialization: "Nutrition & Kettlebell Training",
    experience: "5+ Years",
    image: "/trainers/NSuryaprakash.JPG",
  },
  {
    name: "Surya Ranga",
    role: "Fitness Trainer",
    specialization: "Personal Training",
    experience: "3+ Years",
    image: "/trainers/suryaRanga.JPG",
  },
];

export default function TrainersSection() {
  return (
    <section className="py-24 md:py-32 bg-surface" id="trainers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Elite Coaches"
          subtitle="Trained, certified, and battle-tested. Our coaches have transformed hundreds of lives. Your turn."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coaches.map((coach, index) => (
            <CoachCard key={coach.name} {...coach} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
