import SectionHeader from "@/components/SectionHeader";
import BranchCard from "@/components/BranchCard";

const branches = [
  {
    name: "CFS9 Kondapur",
    address: "Plot 42, Botanical Garden Road, Kondapur, Hyderabad 500084",
    phone: "+91 90001 90009",
    hours: "5:00 AM – 11:00 PM (Mon – Sat) | 6:00 AM – 10:00 AM (Sun)",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    mapUrl: "https://maps.google.com/?q=Kondapur+Hyderabad",
  },
  {
    name: "CFS9 Madhapur",
    address: "Durgam Cheruvu Road, Near Inorbit Mall, Madhapur, Hyderabad 500081",
    phone: "+91 90002 90009",
    hours: "5:00 AM – 11:00 PM (Mon – Sat) | 6:00 AM – 10:00 AM (Sun)",
    image: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=800&q=80",
    mapUrl: "https://maps.google.com/?q=Madhapur+Hyderabad",
  },
];

export default function BranchesSection() {
  return (
    <section className="py-24 md:py-32 bg-background" id="branches">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Branches"
          subtitle="Two premium locations across Hyderabad — designed for serious athletes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <BranchCard key={branch.name} {...branch} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
