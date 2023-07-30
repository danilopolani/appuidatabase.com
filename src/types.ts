import type { CollectionEntry } from 'astro:content';

export enum AppCategory {
  Messaging = 'Messaging',
}

export type App = CollectionEntry<'apps'>['data'] & {
  id: string;
  screensCount: number;
};