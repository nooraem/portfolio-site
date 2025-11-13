import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Viewport } from 'next';

export const metadata = {
  title: 'Noora Issula | issula.dev',
  description: 'Portfolio of Noora Issula.',
  icon: '/public/favicon.ico',
};

export const viewport: Viewport = {
  width: 'device-width', 
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-base-100 font-sans transition-colors duration-400" >
        <Header />

        <main className="flex flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
