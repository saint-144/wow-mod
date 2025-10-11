"use client";
import Image from "next/image";

export default function ServicePageLayout({ title, image, description }) {
  const [firstWord, ...rest] = title.split(" ");
  const secondPart = rest.join(" ");

  return (
    <div className="relative w-full min-h-[90vh] flex items-end justify-center text-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          quality={95}
          className="object-cover object-center"
        />

        {/* Softer gradient — same direction, 30% lighter */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/57"></div>
      </div>

      {/* Text content */}
      <div className="relative z-10 px-6 pb-20 max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-red-600">{firstWord}</span>{" "}
          <span className="text-white">{secondPart}</span>
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
