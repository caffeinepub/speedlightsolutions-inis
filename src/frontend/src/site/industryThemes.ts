/**
 * Industry-specific theme configuration
 * Maps industry page IDs to their color schemes for B2B corporate design
 */

export interface IndustryTheme {
  primary_color: string;
  accent_color?: string;
  background_color: string;
}

export const industryThemes: Record<string, IndustryTheme> = {
  'corporate-enterprise': {
    primary_color: '#1E3A8A',
    background_color: '#F1F5F9',
  },
  education: {
    primary_color: '#4F46E5',
    background_color: '#EEF2FF',
  },
  healthcare: {
    primary_color: '#0D9488',
    background_color: '#ECFEFF',
  },
  manufacturing: {
    primary_color: '#2B2B2B',
    accent_color: '#F97316',
    background_color: '#F5F5F5',
  },
  government: {
    primary_color: '#1E40AF',
    background_color: '#EFF6FF',
  },
  hospitality: {
    primary_color: '#D97706',
    background_color: '#FFFBEB',
  },
  banking: {
    primary_color: '#1D4ED8',
    accent_color: '#16A34A',
    background_color: '#F0F9FF',
  },
  'training-centers': {
    primary_color: '#22C55E',
    background_color: '#F0FDF4',
  },
  retail: {
    primary_color: '#EF4444',
    background_color: '#FFF1F2',
  },
  'live-events': {
    primary_color: '#9333EA',
    background_color: '#FAF5FF',
  },
};

/**
 * Get industry theme by page ID
 * Returns undefined if page is not an industry page
 */
export function getIndustryTheme(pageId: string): IndustryTheme | undefined {
  return industryThemes[pageId];
}
