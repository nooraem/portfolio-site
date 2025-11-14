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
            <p className="text-sm leading-6">
                Close to be graduated and eager to improve my skills on any occasion! I&apos;m {" "}
                <span className="text-info font-medium">currently looking for an internship</span> {" "}
                opportunity to complete my degree.
            </p>
            <p className="text-sm leading-6">
                I often spend my spare time to improve my skills with personal projects.
                With a passion for graphic design and all things visual, I&apos;ve also designed logos, ads, websites, and more—for both businesses and private individuals.
            </p>
        </div>
    );
}
