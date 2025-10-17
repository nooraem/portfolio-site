import { studies} from "@/data/education";
import EducationCard from "@/components/EducationCard";

export default function Education() {
    return (
        <div className="mx-auto w-10/12 lg:w-4xl py-10 content-center space-y-2">
            <div className="divider divider-start font-mono">
                <h2>Studies</h2>
            </div>

            {studies.map((education) => (
            <EducationCard key={`${education.school}-${education.degree}`} {...education}/>
            ))}
        </div>
    );
}
