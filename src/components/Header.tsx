'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-tinos flex text-amaranth-purple">
          <p className="text-tyrian-purple/60">Portfolio│</p>
          <p>Noora Issula</p>
        </Link>

        <ul className="hidden md:flex space-x-6 text-gray-700 **:hover:text-amaranth-purple">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact" className="font-semibold text-amaranth-purple">Contact</Link></li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-tyrian-purple"
          aria-label="Toggle menu"
        >
          {menuOpen ? <Menu size={28} className='text-tyrian-purple/50' /> : <Menu size={28} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-gray-700 **:hover:text-amaranth-purple">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)} className="text-amaranth-purple">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
