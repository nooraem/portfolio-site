import About from '../components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Education from '@/components/Education';

export default function Home() {
  return (
    <div className="w-full h-screen rounded-none bg-base-200">
      <Hero />
      <div className="bg-base-300">
        <About />
        <Education />
      </div>
      <Projects />
      <Contact />
    </div>
  );
}
