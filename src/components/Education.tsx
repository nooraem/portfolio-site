"use client";
import { useEffect, useState } from "react";
import EducationCard from "@/components/EducationCard";

type Education = {
  id: string;
  status: string;
  statusinfo: string;
  school: string;
  degree: string;
  field: string;
  description: string;
};

export default function Education() {
    const [education, setEducation] = useState<Education[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch("/api/education", { cache: "no-store" });
            setEducation(await res.json());
        })();
    }, []);

    return (
        <div className="break-inside-avoid transition-colors duration-400">
            <div className="content-center space-y-2 transition-colors duration-400">
                <h2 className="text-accent">
                    Education
                </h2>

                <div className="columns-1">
                    {education.map((education) => (
                        <div key={education.id} className="mb-4 break-inside-avoid">
                            <EducationCard {...education}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
