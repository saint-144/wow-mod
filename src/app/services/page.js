"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { name: "Bedroom", link: "/services/bedroom" },
  { name: "Kitchen", link: "/services/kitchen" },
  { name: "Living Room", link: "/services/halls" },
  { name: "Offices", link: "/services/offices" },
  { name: "Hospitals", link: "/services/hospitals" },
  { name: "Hotels", link: "/services/hotels" },
  { name: "Custom Interior Designs", link: "/services/custom-interior-designs" },
];

export default function Services() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white py-20 px-6">

      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: "url('/services-bg.jpg')" }}
      />

      {/* Subtle Blur + Red Overlay */}
      <div className="fixed inset-0 backdrop-blur-[1px] bg-black/55 -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-4 tracking-tight">
            Our Services
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            WOW Modular delivers premium modular interiors for homes, offices, and hospitality projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link href={service.link} key={idx}>
              <motion.div
                whileHover={{ scale: 1.04, y: -6 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="relative h-52 rounded-2xl overflow-hidden cursor-pointer
                           bg-white/10 backdrop-blur-sm border border-white/20
                           shadow-xl group transition duration-300"
              >
                {/* Hover Red Glow Layer */}
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-all duration-500"></div>

                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <span className="text-white font-semibold text-xl group-hover:opacity-0 transition-opacity duration-300">
                    {service.name}
                  </span>

                  <span className="absolute text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore {service.name}
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
