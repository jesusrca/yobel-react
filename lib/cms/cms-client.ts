import { pages, services, posts } from './adapters/mock';
import { Page, Service, Post } from './types';

export const getPageBySlug = (slug: string): Page | undefined => {
  return pages.find(page => page.slug === slug);
};

export const getAllServices = (): Service[] => {
  return services;
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getAllPosts = (): Post[] => {
  return posts;
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};