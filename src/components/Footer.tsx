import SocialLinks from '@/components/SocialLinks';

export default function Footer() {
  return (
    <footer className="flex-end bg-base-200 transition-colors duration-400">
      <div className="flex flex-col lg:flex-row w-8/9 mx-auto pt-10"> 
        <div className="space-y-4">
          <h2 className="text-accent">
            Contact Me
          </h2>

          <p className="text-sm font-light opacity-80">I&apos;m always happy to connect—whether it&apos;s about potential projects, collaboration, or just to say hi.</p>
            
          <p className="text-sm font-light opacity-80">Looking forward to hearing from you!</p>
        </div>

        <SocialLinks />
      </div>

      <p className="font-courier text-xs font-light opacity-20 text-center py-2">©2025 Noora Issula. All rights reserved.</p>
    </footer>
  );
}
