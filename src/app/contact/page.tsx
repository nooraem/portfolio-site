import SocialLinks from '@/components/SocialLinks';

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-tinos mb-6 text-amaranth-purple">Contact Me</h1>
      <p className="text-lg text-gray-700 mb-20">
        I am always happy to connect — whether it is about potential projects, collaboration, or just to say hi. Looking forward to hearing from you!
      </p>
      <SocialLinks />
    </section>
  );
}
