# CMS Layer Architecture

The CMS layer provides a unified interface for content management across different CMS providers. It abstracts the data fetching logic, allowing the application to switch between different CMS systems (like WordPress, Strapi, or mock data) without changing the consuming code.

## Architecture Overview

The CMS layer consists of three main components:

1. **Types** (`types.ts`): Defines the data structures for content entities
2. **Client** (`cms-client.ts`): Provides the public API for fetching content
3. **Adapters** (`adapters/`): Implementations for different CMS providers

This adapter pattern allows for easy switching between CMS providers by changing the import in the client.

## Types

The following TypeScript interfaces define the structure of content entities:

### SEO
```typescript
interface SEO {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}
```

### Page
```typescript
interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  seo: SEO;
}
```

### Service
```typescript
interface Service {
  id: string;
  title: string;
  slug: string;
  content: string;
  seo: SEO;
}
```

### Post
```typescript
interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  seo: SEO;
  date: string;
  author: string;
}
```

## CMS Client Functions

The CMS client (`cms-client.ts`) exports the following functions:

- `getPageBySlug(slug: string): Page | undefined` - Retrieves a page by its slug
- `getAllServices(): Service[]` - Returns all services
- `getServiceBySlug(slug: string): Service | undefined` - Retrieves a service by its slug
- `getAllPosts(): Post[]` - Returns all posts
- `getPostBySlug(slug: string): Post | undefined` - Retrieves a post by its slug

## Mock Adapter

The mock adapter (`adapters/mock.ts`) provides static sample data for development and testing. It exports three arrays:

- `pages: Page[]` - Static page data
- `services: Service[]` - Static service data
- `posts: Post[]` - Static post data

The mock adapter is currently used by the CMS client and contains sample content for a logistics/supply chain company.

## Implementing Adapters for Other CMS Providers

To implement an adapter for a real CMS like WordPress or Strapi:

1. Create a new file in the `adapters/` directory (e.g., `adapters/wordpress.ts` or `adapters/strapi.ts`)
2. Implement the same export structure as the mock adapter:
   - Export `pages: Page[]` (or `pages: Promise<Page[]>` for async)
   - Export `services: Service[]` (or `services: Promise<Service[]>`)
   - Export `posts: Post[]` (or `posts: Promise<Post[]>`)

For real CMS integrations, you'll likely need to:
- Install and configure the appropriate SDK/client library
- Implement data fetching logic to transform CMS-specific data into the defined TypeScript interfaces
- Handle authentication and API endpoints
- Implement error handling and caching if needed

### Example WordPress Adapter Structure
```typescript
// adapters/wordpress.ts
import { Page, Service, Post } from '../types';
// Import WordPress REST API client

export const pages: Page[] = []; // Fetch and transform from WordPress
export const services: Service[] = []; // Fetch and transform from WordPress
export const posts: Post[] = []; // Fetch and transform from WordPress
```

### Example Strapi Adapter Structure
```typescript
// adapters/strapi.ts
import { Page, Service, Post } from '../types';
// Import Strapi client

export const pages: Page[] = []; // Fetch and transform from Strapi
export const services: Service[] = []; // Fetch and transform from Strapi
export const posts: Post[] = []; // Fetch and transform from Strapi
```

## Switching Providers

To switch between CMS providers, update the import in `cms-client.ts`:

### Using Mock Data (Current)
```typescript
import { pages, services, posts } from './adapters/mock';
```

### Switching to WordPress
```typescript
import { pages, services, posts } from './adapters/wordpress';
```

### Switching to Strapi
```typescript
import { pages, services, posts } from './adapters/strapi';
```

The rest of the application code remains unchanged, as it consumes the CMS client functions rather than the adapters directly.

## Future Enhancements

- Add async support for real-time data fetching
- Implement caching mechanisms
- Add error handling and retry logic
- Support for content preview and draft states
- Add pagination for large datasets