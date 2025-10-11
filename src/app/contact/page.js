"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-20 flex flex-col items-center">
      
      {/* Page Heading */}
      <motion.h1
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact <span className="text-red-600">WOW Modular</span>
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full">
        
        {/* Contact Details */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-xl font-semibold">Address</h2>
            <p className="text-gray-700">
              WOW Modular Industry
38-22-90/1 (D6),
APIIC-IALA, Industrial Estate,
Marripalem, 
Visakhapatnam 530007
- Behind Renault Car Showroom
- Next to Professional Couriers
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Phone</h2>
            <p className="text-gray-700">
              <a href="tel:+91 9885659928" className="hover:text-red-600">
                +91 9885659928
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-gray-700">
              <a 
                href="mailto:wowmodulars@gmail.com?subject=Inquiry%20from%20Website"
                className="hover:text-red-600"
              >
                wowmodulars@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Write To Us (Gmail)</h2>
            <p className="text-gray-700">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=wowmodulars@gmail.com"
                target="_blank"
                className="hover:text-red-600"
              >
                Click here to reach out to us!
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
        className="w-full h-80 lg:h-full"
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
        ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
