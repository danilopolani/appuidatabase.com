import type { CollectionEntry } from 'astro:content';
// @ts-ignore
import path from 'node:path';
import { Platform } from './enums';

export function fetchAppsScreensCount(apps: CollectionEntry<'apps'>[], screens: CollectionEntry<'screens'>[]) {
  return apps.map((app) => ({
    ...app.data,
    id: app.id,
    screensCount: screens
    .filter((screen) => screen.id.endsWith(`${path.sep}${app.id}`))
    .reduce((accumulator, currentValue) => accumulator + currentValue.data.length, 0),
  }));
}

export function getScreenCategoryName(value: string) {
  return value.replace(/[^a-z0-9]/gi, ' ').replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
}

export function getPlatformCategory(value: Platform) {
  if ([Platform.Desktop, Platform.Mobile].includes(value)) {
    return value;
  }

  return [Platform.Mac, Platform.Windows, Platform.Linux].includes(value) ? Platform.Desktop : Platform.Mobile;
}