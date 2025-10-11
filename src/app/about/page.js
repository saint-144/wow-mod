"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-20 flex flex-col items-center">
      
      {/* Page Heading */}
      <motion.h1
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About <span className="text-red-600">WOW Modular</span>
      </motion.h1>

      {/* Company Intro */}
      <motion.p
        className="text-gray-700 text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        WOW Modular is a premium interior design and execution company,
        specializing in elegant, functional spaces for homes, hotels, and 
        businesses. Founded and led by{" "}
        <span className="font-semibold">Mr. Bharat Patel</span>, a successful 
        businessman with over 30 years of experience, the company has been 
        redefining interiors for the past 7 years.
      </motion.p>

      {/* Bold Tagline */}
      <motion.blockquote
        className="text-2xl sm:text-3xl font-bold text-center text-red-600 mb-12 max-w-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        “From concept to creation – interiors that inspire.”
      </motion.blockquote>
    </div>
  );
}
