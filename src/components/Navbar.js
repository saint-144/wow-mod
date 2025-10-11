"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/wow-logo.jpg"
                alt="WOW Modular"
                width={80}  // reduced width
                height={30} // reduced height
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-red-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600">About Us</Link>
            <Link href="/services" className="text-gray-700 hover:text-red-600">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-2 pt-2 pb-4 space-y-1 shadow-md">
          <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-red-600">Home</Link>
          <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-red-600">About Us</Link>
          <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-red-600">Services</Link>
          <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-red-600">Contact</Link>
        </div>
      )}
    </nav>
  );
}
