import { getPageBySlug } from '../../lib/cms/cms-client';
import PageRenderer from '../../components/PageRenderer';

export default function Home() {
  const page = getPageBySlug('home');

  if (!page) {
    return (
      <main>
        <h1>Page not found</h1>
      </main>
    );
  }

  return <PageRenderer page={page} />;
}
