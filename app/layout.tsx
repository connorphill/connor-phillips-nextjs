import './globals.css';
import type { Metadata } from 'next';
import { Inter, Gelasio } from 'next/font/google';
import { usePathname, useSearchParams } from "next/navigation"
import { ThemeProvider } from './theme-provider';
import Footer from './footer';
import Script from 'next/script';
import TopNav from '../components/Global/TopNav';
import React from 'react';
import { pageview } from '../libs/gtm';
import Analytics from '../components/Global/Analytics';
const GTM_ID = process.env.GA4_MEASUREMENT_ID;

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const gelasio = Gelasio({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-gelasio',
});

export const metadata: Metadata = {
  title: 'Connor Phillips',
  description: 'New York City based data leader, developer, marketer and entrepreneur. Passionate about technology, running, photography and film',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname()
  // const searchParams = useSearchParams()

  // useEffect(() => {
  //   if (pathname) {
  //     pageview(pathname)
  //   }
  // }, [pathname, searchParams])


  return (
    <html lang='en'>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body className={`${inter.variable} ${gelasio.variable}`}>
        <noscript
        dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
        }} />
        <Analytics />
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
