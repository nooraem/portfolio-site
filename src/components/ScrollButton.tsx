"use client";

import { ReactNode } from "react";

type Props = {
  targetId: string;
  className?: string;
  children: ReactNode;
};

export default function ScrollButton({ targetId, className, children }: Props) {
  const onClick = () => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  };

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
