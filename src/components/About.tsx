import { MapPinIcon } from "lucide-react";

export default function About() {
    return (
        <div className="
            w-8/9 sm:w-7/9 lg:w-12/16 xl:w-10/16 2xl:w-8/16 3xl:w-6/16
            text-center content-center 
            space-y-10
            rounded-sm mx-auto 
            transition-colors duration-400">
            <h1 className="text-accent">
                About Me
            </h1>
            <div className="mb-14">
                <p className="text-lg">Noora Issula</p>
                <div className="flex justify-center text-sm text-secondary-content items-center gap-1">
                    <MapPinIcon size={16}/>
                    <p>Lappeenranta, FI</p>
                </div>
            </div>
            <p className="text-sm leading-6">
                Close to be graduated and eager to improve my skills on any occasion! I&apos;m {" "}
                <span className="text-info font-medium">currently looking for a practical training opportunity</span> {" "}
                to complete my degree. Even better if it could be the beginning of an employment.
            </p>
            <p className="text-sm leading-6">
                I often spend my spare time improving my skills with personal projects, either driven by my own interests or at the request of friends/family.
                With a passion for graphic design and all things visual, I&apos;ve also designed logos, ads, and more, for both businesses and private individuals. 
                This site is still a work in progress but offers a glimpse of my skills.
            </p>
        </div>
    );
}
