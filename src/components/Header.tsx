import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="
      sticky top-0 z-50 
      min-h-16 xl:min-h-20
      content-center
      bg-base-200/80 backdrop-blur
      transition-colors duration-400
      shadow-md
    ">
      <div className="flex mx-auto w-8/9 items-center justify-between">
        <Link href="/">
          <p className="text-xl text-accent font-semibold tracking-tight">Noora Issula</p>
          <p className="font-mono font-light text-sm opacity-60 tracking-widest -mt-2">issula.dev</p>
        </Link>

        <label className="
          swap swap-rotate
          btn btn-circle
          text-primary hover:text-accent
          bg-transparent border-0
        ">
          <input
            type="checkbox"
            className="theme-controller"
            value="light"
            aria-label="Theme toggle"
          />

          <Moon className="swap-on text-info/60" />
          <Sun className="swap-off text-warning/60" />
        </label>
      </div>
    </header>
  );
}
