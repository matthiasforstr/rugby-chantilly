import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    locale: z.enum(['fr', 'en']),
    excerpt: z.string(),
    image: z.string().optional(),
    author: z.string().optional(),
  }),
});

const sponsors = defineCollection({
  loader: file('src/content/sponsors/sponsors.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    logo: z.string(),
    url: z.string().url(),
    tier: z.enum(['gold', 'silver', 'bronze']),
  }),
});

const tiktokPosts = defineCollection({
  loader: file('src/content/tiktok/posts.json'),
  schema: z.object({
    id: z.string(),
    url: z.string().url(),
    caption: z.string().optional(),
  }),
});

export const collections = { news, sponsors, 'tiktok-posts': tiktokPosts };
