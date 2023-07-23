import { z, defineCollection } from 'astro:content';

const apps = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
  }),
});

export const collections = {
  apps,
};