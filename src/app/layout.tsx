import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Viewport } from 'next';

export const metadata = {
  title: 'Noora | Portfolio',
  description: 'Portfolio',
  icon: '/public/favicon.ico',
};

export const viewport: Viewport = {
  width: 'device-width', 
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-fit flex flex-col h-[100dvh] font-sans">
        <Header />
        <main className="flex flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
