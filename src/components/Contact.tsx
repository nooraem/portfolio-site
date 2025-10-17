import SocialLinks from '@/components/SocialLinks';

export default function Contact() {
  return (
    <div className="mx-auto w-10/12 lg:w-4xl py-10 lg:py-20 content-center space-y-10">
      <h2 className="font-mono">Contact Me</h2>
      <p>
        I&apos;m always happy to connect — whether it&apos;s about potential projects, collaboration, or just to say hi.
      </p>
      <p> Looking forward to hearing from you!</p>
      <SocialLinks />
    </div>
  );
}
