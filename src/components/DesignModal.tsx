'use client';

import { Minimize2 } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect } from "react";

interface DesignModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    image: string;
}


export default function DesignModal({
    open,
    onClose,
    title,
    description,
    image,
}: DesignModalProps) {
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        if (open) document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!open) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
            onClose();
        }
    };;

    return (
        <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-base-300/20 backdrop-blur-sm"
        onClick={handleBackdropClick}
        >
            <div
                ref={boxRef}
                className="relative max-w-4xl bg-base-300/95 rounded-sm shadow-xl p-6 lg:p-12"
            >
                <button
                onClick={onClose}
                className="absolute right-4 top-4 cursor-pointer opacity-80"
                aria-label="Close modal"
                >
                    <Minimize2 />
                </button>

                {image && (
                <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={800}
                    className="max-h-[70dvh] w-auto mx-auto mb-4"
                />
                )}
                <h3 className="text-lg font-medium text-info pt-4">{title}</h3>
                <p className="pt-4">{description}</p>
            </div>
        </div>
    );
}