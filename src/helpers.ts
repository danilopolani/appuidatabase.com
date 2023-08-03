import type { CollectionEntry } from 'astro:content';
// @ts-ignore
import path from 'node:path';
import { ScreenCategory } from './enums';

export function fetchAppsScreensCount(apps: CollectionEntry<'apps'>[], screens: CollectionEntry<'screens'>[]) {
  return apps.map((app) => ({
    ...app.data,
    id: app.id,
    screensCount: screens
    .filter((screen) => screen.id.endsWith(`${path.sep}${app.id}`))
    .reduce((accumulator, currentValue) => accumulator + currentValue.data.length, 0),
  }));
}

export function getScreenCategoryName(value: ScreenCategory) {
  const manualMapping = {
    [ScreenCategory.ContextMenu]: 'Context Menu',
    [ScreenCategory.Forms]: 'Forms & Inputs',
    [ScreenCategory.Popover]: 'Actions & Popover',
  };

  // @ts-ignore
  return manualMapping[value] || value.replace(/[^a-z0-9]/gi, ' ').replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
}

export function getScreenCategoryIcon(value: ScreenCategory, classes?: string) {
  return {
    [ScreenCategory.ContextMenu]: `
      <svg class="${classes}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M8 26H4a2.002 2.002 0 0 1-2-2v-4h2v4h4zM2 12h2v4H2zm24-4h-2V4h-4V2h4a2.002 2.002 0 0 1 2 2zM12 2h4v2h-4zM4 8H2V4a2.002 2.002 0 0 1 2-2h4v2H4zm23 24a.997.997 0 0 1-.707-.293l-6.138-6.138l-3.323 4.986a1 1 0 0 1-1.79-.268l-6-20a1 1 0 0 1 1.245-1.245l20 6a1 1 0 0 1 .268 1.79l-4.986 3.323l6.138 6.138a1 1 0 0 1 0 1.414l-4 4A.997.997 0 0 1 27 32zm0-2.414L29.586 27l-7.155-7.155l5.246-3.498l-16.185-4.855l4.855 16.185l3.498-5.246z"/>
      </svg>
    `,
    [ScreenCategory.Data]: `
      <svg class="${classes}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M8 14h11v2H8Zm0 5h13v2H8Z"/>
        <path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v2H4V6ZM4 26V10h24v16Z"/>
      </svg>
    `,
    [ScreenCategory.Dialogs]: `
      <svg class="${classes}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8H4zm16 2h4v2h-4zm-4-4h4v2h-4zm4-4h4v2h-4zM8 14h4v2H8z"/>
        <path fill="currentColor" d="M27 3H5a2.003 2.003 0 0 0-2 2v11h2v-5h22v16H16v2h11a2.003 2.003 0 0 0 2-2V5a2.003 2.003 0 0 0-2-2Zm0 6H5V5h22Z"/>
      </svg>
    `,
    [ScreenCategory.Forms]: `
      <svg class="${classes}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M27 22.14V9.86A4 4 0 1 0 22.14 5H9.86A4 4 0 1 0 5 9.86v12.28A4 4 0 1 0 9.86 27h12.28A4 4 0 1 0 27 22.14ZM26 4a2 2 0 1 1-2 2a2 2 0 0 1 2-2ZM4 6a2 2 0 1 1 2 2a2 2 0 0 1-2-2Zm2 22a2 2 0 1 1 2-2a2 2 0 0 1-2 2Zm16.14-3H9.86A4 4 0 0 0 7 22.14V9.86A4 4 0 0 0 9.86 7h12.28A4 4 0 0 0 25 9.86v12.28A4 4 0 0 0 22.14 25ZM26 28a2 2 0 1 1 2-2a2 2 0 0 1-2 2Z"/>
        <path fill="currentColor" d="M21 11H11v2h4v9h2v-9h4v-2z"/>
      </svg>
    `,
    [ScreenCategory.Fullscreen]: `
      <svg class="${classes}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M8 2H2v6h2V4h4V2zm16 0h6v6h-2V4h-4V2zM8 30H2v-6h2v4h4v2zm16 0h6v-6h-2v4h-4v2zm0-6H8a2.002 2.002 0 0 1-2-2V10a2.002 2.002 0 0 1 2-2h16a2.002 2.002 0 0 1 2 2v12a2.002 2.002 0 0 1-2 2zM8 10v12h16V10z"/>
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
    [ScreenCategory.Settings]: `
      <svg class="${classes}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M27 16.76v-1.53l1.92-1.68A2 2 0 0 0 29.3 11l-2.36-4a2 2 0 0 0-1.73-1a2 2 0 0 0-.64.1l-2.43.82a11.35 11.35 0 0 0-1.31-.75l-.51-2.52a2 2 0 0 0-2-1.61h-4.68a2 2 0 0 0-2 1.61l-.51 2.52a11.48 11.48 0 0 0-1.32.75l-2.38-.86A2 2 0 0 0 6.79 6a2 2 0 0 0-1.73 1L2.7 11a2 2 0 0 0 .41 2.51L5 15.24v1.53l-1.89 1.68A2 2 0 0 0 2.7 21l2.36 4a2 2 0 0 0 1.73 1a2 2 0 0 0 .64-.1l2.43-.82a11.35 11.35 0 0 0 1.31.75l.51 2.52a2 2 0 0 0 2 1.61h4.72a2 2 0 0 0 2-1.61l.51-2.52a11.48 11.48 0 0 0 1.32-.75l2.42.82a2 2 0 0 0 .64.1a2 2 0 0 0 1.73-1l2.28-4a2 2 0 0 0-.41-2.51ZM25.21 24l-3.43-1.16a8.86 8.86 0 0 1-2.71 1.57L18.36 28h-4.72l-.71-3.55a9.36 9.36 0 0 1-2.7-1.57L6.79 24l-2.36-4l2.72-2.4a8.9 8.9 0 0 1 0-3.13L4.43 12l2.36-4l3.43 1.16a8.86 8.86 0 0 1 2.71-1.57L13.64 4h4.72l.71 3.55a9.36 9.36 0 0 1 2.7 1.57L25.21 8l2.36 4l-2.72 2.4a8.9 8.9 0 0 1 0 3.13L27.57 20Z"/>
          <path fill="currentColor" d="M16 22a6 6 0 1 1 6-6a5.94 5.94 0 0 1-6 6Zm0-10a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4Z"/>
      </svg>
    `,
  }[value];
}