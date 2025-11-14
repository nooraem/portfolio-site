import About from '../components/About';
import Education from '@/components/Education';
import Hero from '@/components/Hero';
import Info from '@/components/Info';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="w-full mb-20 xl:mb-30 space-y-12 sm:space-y-20 xl:space-y-24">
      <Hero />
      <div id="about" className="scroll-mt-28 sm:scroll-mt-36 xl:scroll-mt-44">
        <About />
      </div>
      <div className='columns-1 lg:columns-2 mx-auto w-8/9 sm:w-7/9 lg:w-12/16 xl:w-10/16 2xl:w-8/16 3xl:w-6/16 space-y-12 break-inside-avoid'>
        <Info />
        <Education />
      </div>
      <div id="work" className="scroll-mt-20 sm:scroll-mt-36 xl:scroll-mt-44">
        <Projects />
      </div>
    </div>
  );
}
