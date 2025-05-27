'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { designs } from '@/data/designs';

export default function GraphicDesignPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <Link
        href="/projects"
        className="text-gray-700 font-semibold"
      >
        &#129044; My Projects
      </Link>

      <h1 className="text-4xl font-tinos mb-6 text-amaranth-purple">
        Graphic Design
      </h1>
      <p className="text-lg text-gray-700 mb-20">
        Logos, advertisements, and other designs created for both individuals and companies. This page is still a work in progress and more designs will be added in the future.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {designs.map((design) => (
          <button
            key={design.title}
            onClick={() => setSelectedImage(design.image)}
            className="focus:outline-none text-left"
          >
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition">
              <Image
                src={design.image}
                alt={design.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="mt-2">
              <h3 className="text-lg font-semibold text-gray-900">{design.title}</h3>
              {design.description && (
                <p className="text-sm text-gray-600">{design.description}</p>
              )}
            </div>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh] w-full">
            <Image
              src={selectedImage}
              alt="Selected design"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg bg-gray-100"
            />
            <button
              className="absolute top-2 right-4 text-white text-shadow-2xs text-shadow-gray-900 text-5xl font-light"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
