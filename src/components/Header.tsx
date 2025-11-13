import Link from "next/link";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  return (
    <header className="
      sticky top-0 z-50 
      min-h-16 xl:min-h-20
      content-center
      bg-base-200/80 backdrop-blur
      border-b border-base-100/80
      transition-colors duration-400
    ">
      <div className="flex mx-auto w-8/9 items-center justify-between">
        <Link href="/">
          <p className="text-xl text-accent font-semibold">Noora Issula</p>
          <p className="font-mono font-light text-sm -mt-2">issula.dev</p>
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
            aria-label="Toggle theme"
          />

          <Moon className="swap-on" />
          <Sun className="swap-off" />
        </label>
      </div>
    </header>
  );
}
