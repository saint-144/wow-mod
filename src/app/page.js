"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start text-center overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-white px-6 mt-24 md:mt-32"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Company Name */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6 font-company leading-tight">
          <span className="text-red-600">WOW</span>{" "}
          <span className="text-white">MODULAR INDUSTRIES</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl mb-4 max-w-3xl mx-auto text-gray-200">
          Transforming spaces and elevating lifestyles. Premium modular interiors for homes, hotels, and businesses.
        </p>

        {/* Sub-tagline */}
        <p className="text-3xl sm:text-3xl md:text-3xl mb-8 max-w-3xl mx-auto text-gray-300 font-tagline">
          From concept to creation, we bring your vision to life.
        </p>

        {/* CTA Button */}
        <Link 
          href="/services"
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg sm:text-xl md:text-xl font-semibold transition-all"
        >
          Explore Services
        </Link>
      </motion.div>
    </div>
  );
}
