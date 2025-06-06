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
      <body className="flex flex-col min-h-screen font-noto-sans-display bg-light-gray text-dark-gray">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
