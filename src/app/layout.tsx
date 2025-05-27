import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Portfolio | Noora Issula',
  description: 'Portfolio',
  icon: '/public/favicon.ico',
  viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body className="bg-gray-100 font-noto-sans-display text-gray-700 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
