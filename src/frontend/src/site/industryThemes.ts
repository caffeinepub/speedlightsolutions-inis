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
    primary_color: '#1F8DB5',
    background_color: '#F5F7FA',
  },
  education: {
    primary_color: '#5C7594',
    background_color: '#F5F7FA',
  },
  healthcare: {
    primary_color: '#1B9A59',
    background_color: '#F5F7FA',
  },
  manufacturing: {
    primary_color: '#4F6154',
    background_color: '#F5F7FA',
  },
  government: {
    primary_color: '#5C7594',
    background_color: '#F5F7FA',
  },
  hospitality: {
    primary_color: '#D0843C',
    background_color: '#F5F7FA',
  },
  retail: {
    primary_color: '#1F8DB5',
    background_color: '#F5F7FA',
  },
  banking: {
    primary_color: '#5C7594',
    background_color: '#F5F7FA',
  },
  'training-centers': {
    primary_color: '#1B9A59',
    background_color: '#F5F7FA',
  },
  'live-events': {
    primary_color: '#1F8DB5',
    background_color: '#F5F7FA',
  },
};

/**
 * Get industry theme by page ID
 * Returns undefined if page is not an industry page
 */
export function getIndustryTheme(pageId: string): IndustryTheme | undefined {
  return industryThemes[pageId];
}
