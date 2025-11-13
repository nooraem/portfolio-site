"use client";

import { Minimize2 } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import type React from "react";

interface DesignModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    images: string[];
}

export default function DesignModal({
    open,
    onClose,
    title,
    description,
    images,
}: DesignModalProps) {
    const boxRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        if (open) document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    useEffect(() => {
        if (!open) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [open]);

    useEffect(() => {
        if (open) {
            setSelectedIndex(0);
        }
    }, [open, images]);

    if (!open) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        onClose();
        }
    };

    const hasImages = images && images.length > 0;
    const safeIndex =
        hasImages ? Math.min(selectedIndex, images.length - 1) : 0;
    const mainImage = hasImages ? images[safeIndex] : undefined;

    return (
        <div
            className="fixed inset-0 z-40 flex items-center justify-center bg-base-100/60 backdrop-blur-3xl transition-colors duration-400"
            onClick={handleBackdropClick}
        >
            <div
                ref={boxRef}
                className="relative max-w-[90dvw] max-h-[80dvh] bg-white/20 rounded-sm shadow-xs p-4 mt-14"
            >
                <button
                onClick={onClose}
                className="absolute right-4 top-4 cursor-pointer opacity-60"
                aria-label="Close modal"
                >
                    <Minimize2 />
                </button>

                <div>
                    {hasImages && mainImage && (
                    <div>
                        <div className="justify-center">
                            <Image
                            src={mainImage}
                            alt={`${title} – kuva ${safeIndex + 1}`}
                            width={1000}
                            height={1000}
                            className="object-contain max-h-[65dvh] w-auto mx-auto rounded-sm p-2"
                            />
                        </div>

                        {images.length > 1 && (
                            <div className="flex gap-2 overflow-x-auto h-12 xl:h-20 py-2">
                            {images.map((src, index) => {
                                const isActive = index === safeIndex;
                                return (
                                <button
                                    key={src + index}
                                    type="button"
                                    onClick={() => setSelectedIndex(index)}
                                    className={`
                                    shrink-0 border rounded-sm p-1 transition saturate-25
                                    ${
                                        isActive
                                        ? "border-info scale-[1] saturate-100 bg-info/20"
                                        : "border-base-content/20 opacity-80 hover:opacity-100"
                                    }
                                    `}
                                >
                                    <Image
                                    src={src}
                                    alt={`${title} - pikkukuva ${index + 1}`}
                                    width={300}
                                    height={300}
                                    className="h-full w-auto object-fit"
                                    />
                                </button>
                                );
                            })}
                            </div>
                        )}
                    </div>
                    )}
                    
                    <div className="my-3 space-y-1">
                        <p className="font-medium">{title}</p>
                        {description && 
                            <p className="text-xs opacity-80">{description}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
