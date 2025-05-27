import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto text-center py-20 px-4">
      <Image 
        src="/pfp.jpg" 
        width={128} 
        height={128} 
        alt="Noora Issula profile picture"
        className="mx-auto mb-6 rounded-full shadow-lg object-cover object-bottom-right h-32 w-32"
      />

      <h1 className="text-5xl font-tinos mb-8 text-amaranth-purple">
        Hi, welcome to my portfolio!
      </h1>

      <p className="text-lg text-gray-700 mb-16">
        I am a final-year IT student at Xamk with a strong interest in software development and visual design. 
        While my focus is on building full-stack applications, I also enjoy graphic design — creating logos, marketing materials, and other designs for both private and company clients.
      </p>

      <Link
        href="/projects"
        className="text-tyrian-purple font-medium text-lg transition"
      >
        Learn more about my projects &#10141;
      </Link>
    </section>
  );
}
