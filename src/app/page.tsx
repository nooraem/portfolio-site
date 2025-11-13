import About from '../components/About';
import Education from '@/components/Education';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="w-full mb-20 xl:mb-30 space-y-16 sm:space-y-20 xl:space-y-24">
      <Hero />
      <div id="about" className="scroll-mt-32 sm:scroll-mt-36 xl:scroll-mt-44">
        <About />
      </div>
        <Education />
      <div id="work" className="scroll-mt-20 sm:scroll-mt-36 xl:scroll-mt-44">
        <Projects />
      </div>
    </div>
  );
}
