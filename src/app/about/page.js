"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden px-6 py-20 flex flex-col items-center">

      {/* 🖼 Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      />

      {/* 🌫 1px Blur + Dark Overlay */}
      <div className="fixed inset-0 backdrop-blur-[1px] bg-black/50 -z-10" />

      {/* Page Heading */}
      <motion.h1
        className="text-5xl font-bold text-center mb-12 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"

        style={{
          WebkitTextStroke: "0.5px rgba(255,255,255,0.6)",
        }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About <span className="text-red-500">WOW Modular</span>
      </motion.h1>


      {/* Company Intro */}
      <motion.p
        className="text-gray-200 text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed"
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
      className="text-3xl font-bold text-center mb-12 text-red-500"
        style={{
        WebkitTextStroke: "0.6px rgba(255,255,255,0.8)"

        }}
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
