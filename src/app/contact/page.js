"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white px-6 py-20">

      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: "url('/contact-bg.jpg')" }}
      />

      {/* Subtle Blur + Slight Red Tone */}
      <div className="fixed inset-0 backdrop-blur-[1px] bg-black/60 -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Page Heading */}
        <motion.h1
          className="text-5xl font-bold text-center mb-16 tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact <span className="text-red-500">WOW Modular</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Details */}
          <motion.div
            className="bg-white/25 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-xl font-semibold text-red-400 mb-2">
                Address
              </h2>
              <p className="text-gray-200 leading-relaxed">
                WOW Modular Industry<br />
                38-22-90/1 (D6),<br />
                APIIC-IALA, Industrial Estate,<br />
                Marripalem,<br />
                Visakhapatnam 530007<br />
                Behind Renault Car Showroom<br />
                Next to Professional Couriers
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-400 mb-2">
                Phone
              </h2>
              <a
                href="tel:+919885659928"
                className="text-gray-200 hover:text-red-400 transition"
              >
                +91 9885659928
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-400 mb-2">
                Email
              </h2>
              <a
                href="mailto:wowmodulars@gmail.com?subject=Inquiry%20from%20Website"
                className="text-gray-200 hover:text-red-400 transition"
              >
                wowmodulars@gmail.com
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-400 mb-2">
                Write To Us
              </h2>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=wowmodulars@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-red-400 transition"
              >
                Click here to reach out to us!
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4735.253378502915!2d83.26282789999999!3d17.740966099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431c160227b9%3A0xce998788457e9253!2sWOW%20MODULAR%20INDUSTRY!5e1!3m2!1sen!2sin!4v1754230882255!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[350px]"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
