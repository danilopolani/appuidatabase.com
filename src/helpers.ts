import type { CollectionEntry } from 'astro:content';
// @ts-ignore
import path from 'node:path';
import { Platform, ScreenCategory } from './enums';

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

export function getScreenCategoryIcon(value: ScreenCategory, classes?: string) {
  return {
    [ScreenCategory.Modals]: `
      <svg class="${classes}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8H4zm16 2h4v2h-4zm-4-4h4v2h-4zm4-4h4v2h-4zM8 14h4v2H8z"/>
        <path fill="currentColor" d="M27 3H5a2.003 2.003 0 0 0-2 2v11h2v-5h22v16H16v2h11a2.003 2.003 0 0 0 2-2V5a2.003 2.003 0 0 0-2-2Zm0 6H5V5h22Z"/>
      </svg>
    `,
    [ScreenCategory.Navigation]: `
      <svg class="${classes}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M6 13V7.414l9 9V28h2V16.414l9-9V13h2V4h-9v2h5.586L16 14.586L7.414 6H13V4H4v9h2z"/>
      </svg>
    `,
    [ScreenCategory.Notifications]: `
      <svg class="${classes}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M28.707 19.293L26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v.777a5.152 5.152 0 0 0 4.5 5.199A5.006 5.006 0 0 0 21 25v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707ZM19 25a3 3 0 0 1-6 0v-1h6Zm8-3H5v-1.586l2.707-2.707A1 1 0 0 0 8 17v-4a8 8 0 0 1 16 0v4a1 1 0 0 0 .293.707L27 20.414Z"/>
      </svg>
    `,
    [ScreenCategory.Popover]: `
      <svg class="${classes}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M15.586 10.414L19.166 14l-3.582 3.587L17 19l5-5l-5-5l-1.414 1.414z"/>
        <path fill="currentColor" d="M20.586 10.414L24.166 14l-3.582 3.587L22 19l5-5l-5-5l-1.414 1.414zM10 9l1.593 3l3.407.414l-2.5 2.253L13 18l-3-1.875L7 18l.5-3.333L5 12.414L8.5 12L10 9z"/>
        <path fill="currentColor" d="M17.736 30L16 29l4-7h6a1.997 1.997 0 0 0 2-2V8a1.997 1.997 0 0 0-2-2H6a1.997 1.997 0 0 0-2 2v12a1.997 1.997 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a3.999 3.999 0 0 1 4-4h20a3.999 3.999 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.835Z"/>
      </svg>
    `,
  }[value];
}