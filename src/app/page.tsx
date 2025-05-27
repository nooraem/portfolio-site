import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-6 sm:py-20 text-center">
      <Image 
        src="/pfp.jpg" 
        width={128} 
        height={128} 
        alt="Noora Issula profile picture"
        className="mx-auto mb-4 h-36 w-36 border-white border-6 rounded-full shadow-md object-cover object-bottom-right"
      />

      <h1 className="mb-12 text-4xl sm:text-5xl font-tinos text-pink">
        Hi, welcome to my portfolio!
      </h1>

      <p className="mb-8 text-lg sm:text-xl">
        I am a final-year IT student at Xamk with a strong interest in software development and visual design. 
      </p>
      <p className="mb-12 text-lg sm:text-xl">
        While my focus is on building full-stack applications, I also enjoy graphic design — creating logos, marketing materials, and other designs for both private and company clients.
      </p>

      <Link
        href="/projects"
        className="text-lg sm:text-xl transition font-medium text-dark-pink hover:text-pink"
      >
        Learn more about my projects &#10141;
      </Link>
    </section>
  );
}
