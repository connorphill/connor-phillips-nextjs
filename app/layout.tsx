import './globals.css';
import type { Metadata } from 'next';
import { Inter, Gelasio } from 'next/font/google';
import { ThemeProvider } from './theme-provider';
import Footer from './footer';
import TopNav from '@/components/Global/TopNav';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const gelasio = Gelasio({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-gelasio',
});

export const metadata: Metadata = {
  title: 'Connor Phillips',
  description: 'New York City based data leads, developer, marketer and entrepreneur. Passionate about digital marketing, running, photography and film',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${gelasio.variable}`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main>
            <TopNav />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
