import { z, defineCollection } from 'astro:content';
import { Platform, AppCategory } from 'src/enums';

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
      // @ts-ignore
      platform: z.enum(Object.values(Platform)),
    })
  ),
});

export const collections = {
  apps,
  screens,
};