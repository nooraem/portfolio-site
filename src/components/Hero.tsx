import ScrollButton from "@/components/ScrollButton";

export default function Hero() {

  return (
    <div className="hero min-h-[calc(100dvh-60px)] xl:min-h-[calc(100dvh-80px)] hero-bg text-base transition-colors duration-400">
      <div className="hero-content flex-col max-w-8/9 text-center px-4">
        <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold leading-4">
          Hi, I&apos;m Noora
        </h1>

        <p className="font-light opacity-80">
          Developer · Designer
        </p>

        <p className="py-4 text-base md:text-lg opacity-90 max-w-xl">
          IT student with a strong interest in {" "}
          <br /><span className="hero-highlight font-courier text-lg md:text-xl">full-stack development</span> {" "}
          & {" "}
          <span className="hero-highlight font-courier text-lg md:text-xl">visual design</span>
        </p>

        <div className="space-x-6 mt-10">
          <ScrollButton targetId="about" className="btn btn-soft btn-info">About Me</ScrollButton>
          <ScrollButton targetId="work"  className="btn btn-soft btn-info">My Work</ScrollButton>
        </div>
      </div>
    </div>
  );
}
