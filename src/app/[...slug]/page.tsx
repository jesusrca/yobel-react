import { getPageBySlug } from '../../../lib/cms/cms-client';
import PageRenderer from '../../../components/PageRenderer';

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function DynamicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.join('/');

  const page = getPageBySlug(slug);

  if (!page) {
    return (
      <main>
        <h1>Page not found</h1>
        <p>The page /{slug} could not be found.</p>
      </main>
    );
  }

  return <PageRenderer page={page} />;
}
