import { z, defineCollection } from 'astro:content';
import { AppCategory } from '../types';

const apps = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    title: z.string(),
    url: z.string().url(),
    image: image(),
    // @ts-ignore
    category: z.enum(Object.values(AppCategory)),
    technologies: z.array(z.string()),
  }),
});

const screens = defineCollection({
  type: 'data',
  // @ts-ignore
  schema: ({ image }) => z.array(
    z.object({
      title: z.string(),
      image: image(),
      platform: z.enum(['desktop', 'mobile']),
    })
  ),
});

export const collections = {
  apps,
  screens,
};