/**
 * Centralized page theme helper
 * Provides industry page accents and Solutions pages theme
 */

import { getIndustryTheme, type IndustryTheme } from './industryThemes';

export interface PageTheme {
  primary: string;
  accent?: string;
  background: string;
}

// Solutions pages theme
const SOLUTIONS_THEME: PageTheme = {
  primary: '#0F172A',
  accent: '#1F8DB5',
  background: '#F5F7FA',
};

// Solutions page IDs
const SOLUTIONS_PAGE_IDS = [
  'solutions',
  'workplace-collaboration',
  'professional-sound',
  'display-visualization',
  'networking-connectivity',
  'intelligent-systems',
  'lifecycle-support',
];

/**
 * Get page theme by page ID
 * Returns industry theme, solutions theme, or undefined
 */
export function getPageTheme(pageId: string): PageTheme | undefined {
  // Check if it's a solutions page
  if (SOLUTIONS_PAGE_IDS.includes(pageId)) {
    return SOLUTIONS_THEME;
  }
  
  // Check if it's an industry page
  const industryTheme = getIndustryTheme(pageId);
  if (industryTheme) {
    return {
      primary: industryTheme.primary_color,
      accent: industryTheme.accent_color,
      background: industryTheme.background_color,
    };
  }
  
  return undefined;
}
