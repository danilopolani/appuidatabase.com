import { z, defineCollection } from 'astro:content';

const apps = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    image: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  apps,
};