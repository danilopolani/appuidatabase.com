import type { CollectionEntry } from 'astro:content';

export type App = CollectionEntry<'apps'>['data'] & {
  id: string;
  screensCount: number;
};

export type Screen = CollectionEntry<'screens'>['data'];
