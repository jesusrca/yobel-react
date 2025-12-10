import { Layout } from '../src/components/layout/Layout';
import { CountryProvider } from '../src/contexts/CountryContext';
import { ScrollToTop } from '../src/components/layout/ScrollToTop';
import { PageTransition } from '../src/components/layout/PageTransition';
import { NeueAugenblick } from '../src/fonts/NeueAugenblick';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={NeueAugenblick.variable}>
        <CountryProvider>
          <ScrollToTop />
          <PageTransition />
          <Layout>
            {children}
          </Layout>
        </CountryProvider>
      </body>
    </html>
  );
}