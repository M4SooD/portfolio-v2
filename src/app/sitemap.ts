import type { MetadataRoute } from 'next';

const routes = ['', '/services', '/resume', '/work', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://m4sood-dev.vercel.app${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.8,
  }));
}
