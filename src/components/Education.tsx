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
        <div className="transition-colors duration-400">
            <div className="content-center space-y-4 mx-auto w-8/9 sm:w-7/9 lg:w-12/16 xl:w-10/16 2xl:w-8/16 3xl:w-6/16 transition-colors duration-400">
                <h2 className="text-accent">
                    Education
                </h2>

                <div className="columns-1 md:columns-2 space-y-6">
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
