/**
 * Page banner image resolver
 * Resolves banner images via filename convention with fallback to pageBanners mapping
 */

import { pageBanners, type PageBanner } from './pageBanners';

/**
 * Normalize page ID to filename format (kebab-case)
 */
function normalizePageId(pageId: string): string {
  return pageId.toLowerCase().trim();
}

/**
 * Supported image extensions
 */
const SUPPORTED_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp'];

/**
 * Resolve banner image for a page
 * First tries convention-based path, then falls back to pageBanners mapping
 */
export function resolvePageBanner(pageId: string): PageBanner | undefined {
  const normalizedId = normalizePageId(pageId);
  
  // Try convention-based banner first
  // Format: /assets/page-banners/{pageId}.{ext}
  for (const ext of SUPPORTED_EXTENSIONS) {
    const conventionPath = `/assets/page-banners/${normalizedId}.${ext}`;
    // We'll attempt to use this path; if it fails to load, the fallback will be used
    const conventionBanner: PageBanner = {
      imagePath: conventionPath,
      alt: `${pageId.replace(/-/g, ' ')} banner`,
    };
    
    // Return convention-based banner (will be validated by image onError handler)
    return conventionBanner;
  }
  
  // Fallback to existing pageBanners mapping
  return pageBanners[pageId];
}

/**
 * Get fallback banner from pageBanners mapping
 */
export function getFallbackBanner(pageId: string): PageBanner | undefined {
  return pageBanners[pageId];
}
