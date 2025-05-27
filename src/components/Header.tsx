'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="flex flex-row font-tinos text-2xl text-transparent bg-clip-text bg-gradient-to-r from-dark-gray to-pink">
          <p className="font-bold">Portfolio{'\u2502'}</p>
          <p>Noora Issula</p>
        </Link>

        <ul className="hidden md:flex space-x-6 **:hover:text-pink">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact" className="font-semibold text-dark-pink">Contact</Link></li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-pink"
          aria-label="Toggle menu"
        >
          {menuOpen ? <Menu size={30} className='text-dark-gray/30' /> : <Menu size={30} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-gray-700 **:hover:text-amaranth-purple">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)} className="text-pink">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
