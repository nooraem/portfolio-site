"use client";

import { useState } from "react";
import DesignModal from "@/components/DesignModal";
import GraphicDesigns from "@/components/GraphicDesigns";

type Design = {
  id: string;
  title: string;
  description?: string;
  tag: string;
  images: string[];
}

export default function GraphicDesignPage() {
  const [selected, setSelected] = useState<Design | null>(null);

  return (
    <div className="designpage w-full min-h-[calc(100dvh-60px)] pb-20">
      <div className="
        w-8/9 sm:w-7/9 lg:w-12/16 xl:w-10/16 2xl:w-8/16 3xl:w-6/16
        mx-auto
        transition-colors duration-400
      ">
        <div className="space-y-4 my-20">
          <div>
            <p className="-mb-2 text-base-content/60 text-xl leading-tight">Projects</p>
            <h1 className="text-accent">Graphic Design</h1>
          </div>

          <p>
            Logos, advertisements and other designs created for private individuals or companies.
          </p>

          <p className="italic text-xs font-light opacity-80">
            NOTE: This page is still a work in progress and more designs will be added.
          </p>   
        </div>

        <GraphicDesigns onSelect={(d) => setSelected(d)} />

        <DesignModal
          open={!!selected}
          onClose={() => setSelected(null)}
          title={selected?.title ?? ""}
          description={selected?.description ?? ""}
          images={selected?.images ?? [""]}
        />
      </div>

    </div>
  );
}
