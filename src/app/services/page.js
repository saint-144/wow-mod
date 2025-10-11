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
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          WOW Modular delivers premium modular interiors for homes, offices, and hospitality projects.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <Link href={service.link} key={idx}>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative h-48 rounded-xl overflow-hidden cursor-pointer shadow-md group"
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 
                              group-hover:from-red-600 group-hover:to-red-800 transition-all duration-500"></div>

              {/* Text Center */}
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <span className="text-gray-700 font-semibold text-xl group-hover:opacity-0 transition-opacity duration-300">
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
  );
}
