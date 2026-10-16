import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

export function getAsset(relPath: string): ImageMetadata {
  const mod = modules[`/src/assets/${relPath}`];
  if (!mod) throw new Error(`תמונה לא נמצאה: src/assets/${relPath}`);
  return mod.default;
}
