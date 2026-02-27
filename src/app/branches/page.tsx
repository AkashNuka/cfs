import { Metadata } from "next";
import BranchCard from "@/components/BranchCard";

export const metadata: Metadata = {
  title: "Branches | CFS9 — Central Fitness Station",
  description:
    "Visit CFS9's premium gym locations in Kondapur and Madhapur, Hyderabad. World-class equipment, elite coaching, flexible timings.",
};

const branches = [
  {
    name: "CFS9 Kondapur",
    address: "Plot 42, Botanical Garden Road, Kondapur, Hyderabad 500084",
    phone: "+91 90001 90009",
    hours: "5:00 AM – 11:00 PM (Mon – Sat) | 6:00 AM – 10:00 AM (Sun)",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    mapUrl: "https://maps.google.com/?q=Kondapur+Hyderabad",
    features: [
      "8,000+ sq ft training area",
      "Dedicated CrossFit zone",
      "Olympic lifting platforms",
      "Cardio theatre with 20+ machines",
      "Locker rooms with showers",
      "Protein bar & supplements",
    ],
    comingSoon: false,
  },
  {
    name: "CFS9 Madhapur",
    address: "Durgam Cheruvu Road, Near Inorbit Mall, Madhapur, Hyderabad 500081",
    phone: "+91 90002 90009",
    hours: "5:00 AM – 11:00 PM (Mon – Sat) | 6:00 AM – 10:00 AM (Sun)",
    image: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=800&q=80",
    mapUrl: "https://maps.google.com/?q=Madhapur+Hyderabad",
    features: [
      "10,000+ sq ft premium facility",
      "Functional training area",
      "Group class studio",
      "Strength & power zone",
      "Recovery & stretching area",
      "Parking available",
    ],
    comingSoon: false,
  },
  {
    name: "CFS9 Jubilee Hills",
    address: "Jubilee Hills, Hyderabad",
    phone: "",
    hours: "",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    mapUrl: "",
    features: [],
    comingSoon: true,
  },
];

export default function BranchesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_7%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <p
            className="text-sm sm:text-base tracking-[0.3em] uppercase text-primary font-medium mb-5"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Train Near You
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold uppercase mb-4 text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            Our <span className="text-accent">Branches</span>
          </h1>
          <div className="mx-auto w-28 h-1 bg-primary rounded-full mb-6" />
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Two premium locations in Hyderabad — built for serious training.
          </p>
        </div>
      </section>

      {/* Branches */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {branches.map((branch, index) =>
            branch.comingSoon ? (
              <div key={branch.name} className="relative rounded-xl overflow-hidden border border-accent/20">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-[320px] object-cover opacity-25"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-background/50">
                  <span className="inline-block px-4 py-1 bg-accent text-white text-xs font-bold tracking-[0.2em] rounded-full mb-4 uppercase">
                    Coming Soon
                  </span>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-3">
                    {branch.name}
                  </h2>
                  <p className="text-muted text-lg max-w-lg">
                    A bigger, better, and more premium fitness experience is coming soon to Jubilee Hills.
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={branch.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-[350px] object-cover rounded-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-4">
                    {branch.name}
                  </h2>
                  <div className="space-y-3 text-muted mb-6">
                    <p className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">📍</span>{branch.address}
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">📞</span>
                      <a href={`tel:${branch.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">{branch.phone}</a>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">🕐</span>{branch.hours}
                    </p>
                  </div>
                  <h3 className="font-heading text-lg font-bold uppercase mb-3 text-accent">
                    Facilities
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {branch.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted text-sm">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}
