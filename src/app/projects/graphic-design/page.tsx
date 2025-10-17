"use client";

import { useState } from "react";
import DesignModal from "@/components/DesignModal";
import GraphicDesigns from "@/components/GraphicDesigns";

type Design = {
  title: string;
  description?: string;
  image: string;
  tag: string;
}

export default function GraphicDesignPage() {
  const [selected, setSelected] = useState<Design | null>(null);

  return (
    <div className="mx-auto w-full lg:w-4xl lg:my-40 content-center">
      <div className="bg-base-300 p-6 space-y-4">
        <h1 className="font-mono font-bold text-2xl text-accent">
          <span className="text-info font-thin">/projects</span>
          /graphic-design
        </h1>

        <p>
          Logos, advertisements and other designs created for private individuals or companies.
        </p>

        <p className="italic text-sm text-primary/60">
          (This page is still a work in progress and more designs will be added.)
        </p>   
      </div>

      <div className="bg-base-200 p-6 mt-20">
        <GraphicDesigns onSelect={(d) => setSelected(d)} />
      </div>

      <DesignModal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ""}
        description={selected?.description ?? ""}
        image={selected?.image ?? ""}
      />
    </div>
  );
}
