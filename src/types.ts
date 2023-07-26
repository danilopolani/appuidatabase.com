import type { ImageTransform } from 'astro';

export enum AppCategory {
  Messaging = 'Messaging',
}

export type Screen = {
  title: string;
  image: ImageTransform;
  platform: 'desktop' | 'android' | 'ios';
};