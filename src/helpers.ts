import { CollectionEntry, getCollection } from 'astro:content';
import * as R from 'remeda';
// @ts-ignore
import path from 'node:path';
import { Platform, AppCategory } from './enums';

export async function getCategoryTeaser(category: AppCategory) {
  // Get 4 random apps for the category
  const data = R.pipe(
    await getCollection('apps', ({ data }) => data.category === category),
    R.shuffle(),
    R.take(4),
  );
  
  // Then collect all the screens for those given 4 apps
  const screens = await getCollection('screens', (screen) => 
    data.map((app) => app.id).includes(
      // @ts-ignore
      screen.id.split(path.sep).pop()
    )
  );

  // Finally match the apps with their screens count
  return data.map((app) => ({
    ...app.data,
    screensCount: screens.filter((screen) => screen.id.endsWith(`${path.sep}${app.id}`))[0]!.data.length,
  }));
}

export function fetchAppsScreensCount(apps: CollectionEntry<'apps'>[], screens: CollectionEntry<'screens'>[]) {
  return apps.map((app) => ({
    ...app.data,
    id: app.id,
    screensCount: screens.filter((screen) =>
      screen.id.endsWith(`${path.sep}${app.id}`)
    )[0]!.data.length,
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