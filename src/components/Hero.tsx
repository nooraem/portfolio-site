import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-row mx-auto w-10/12 lg:w-4xl h-[42dvh] gap-0 justify-center items-end-safe">
            <div className="self-end z-10 -mr-20 px-6 py-2 mb-6 rounded-box">
                <h1 className="text-4xl md:text-6xl font-sans font-black text-info text-right">Noora</h1>
                <h2 className="text-lg md:text-xl font-light text-right">Full-stack developer</h2>
            </div>

            <div>
                <Image 
                src="/noora.png" 
                width={500} 
                height={500} 
                alt="Profile.jpg"
                className="max-h-[40dvh] w-auto z-0 self-end-safe"
                />
            </div>

            <p className="md:text-lg max-w-85 font-light p-4 self-center">
                I&apos;m a final-year IT student with a strong interest in <span className="text-accent font-mono font-semibold">full-stack development</span> and <span className="text-accent font-mono font-semibold">visual design</span>
            </p>
        </div>
    );
}