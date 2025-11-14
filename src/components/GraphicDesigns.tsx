"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';

type Design = {
  id: string;
  title: string;
  description?: string;
  tag: string;
  images: string[];
};

export default function GraphicDesigns({ onSelect }: { onSelect: (d: Design) => void }) {
  const [designs, setDesigns] = useState<Design[]>([]);
  
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/designs", { cache: "no-store" });
      const data = await res.json();
      setDesigns(data);
    })();
  }, []);

  const Section = ({ tag, title }: { tag: Design["tag"]; title: string }) => {
    const items = designs.filter((d) => d.tag === tag);
    if (items.length === 0) return null;

    return (
      <div className="mb-10 space-y-4 transition-colors duration-400">
        <h2 className="text-accent capitalize">
          {title}
        </h2>

        <div className="
          columns-2 sm:columns-3 md:colums-4 xl:columns-4 
          space-y-6
          rounded-sm
        ">
          {items.map((design) => (
            <div key={design.title} className="bg-base-100/20 rounded-sm shadow-md break-inside-avoid hover:scale-95 duration-400 ease-in-out">
              <label
                htmlFor="design_modal"
                onClick={() => onSelect(design)}
                className="cursor-pointer"
              >
                <div>
                  <Image
                    src={design.images[0]}
                    alt={design.title}
                    width={500}
                    height={500}
                    className="rounded-sm"
                  />

                  {design.images.length > 1 && (
                    <div className="flex flex-1 flex-nowrap gap-4 pt-4 justify-center ">
                      {design.images.slice(1).map((src, index) => (
                        <div
                            key={src + index}
                            className="shrink-1 p-1 flex items-center"
                        >
                          <Image
                            src={src}
                            alt={`${design.title} - lisäkuva ${index + 1 }`}
                            width={400}
                            height={400}
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div> 
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto content-center space-y-4">
      <Section tag="logo" title="logos" />
      <Section tag="ad" title="advertisements" />
      <Section tag="website" title="websites" />
      <Section tag="poster" title="posters" />
    </div>
  );
}
