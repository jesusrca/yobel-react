import { Layout } from '../src/components/layout/Layout';
import { CountryProvider } from '/contexts/CountryContext';
import { ScrollToTop } from '../src/components/layout/ScrollToTop';
import { PageTransition } from '../src/components/layout/PageTransition';
import '../src/index.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <CountryProvider>
      <ScrollToTop />
      <PageTransition />
      <Layout>
        {children}
      </Layout>
    </CountryProvider>
  );
}