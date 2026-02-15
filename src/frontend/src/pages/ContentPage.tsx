import { useEffect } from 'react';
import ContentRenderer from '../components/content/ContentRenderer';
import { pageContents } from '../content/pages';
import { usePageTitle } from '../hooks/usePageTitle';
import { pageBanners } from '../site/pageBanners';
import { getIndustryTheme } from '../site/industryThemes';

interface ContentPageProps {
  pageId: string;
}

export default function ContentPage({ pageId }: ContentPageProps) {
  const content = pageContents[pageId];
  const banner = pageBanners[pageId];
  const industryTheme = getIndustryTheme(pageId);
  usePageTitle(content?.title || 'Page');

  // Apply industry theme CSS variables when theme is present
  useEffect(() => {
    if (industryTheme) {
      document.documentElement.style.setProperty('--industry-primary', industryTheme.primary_color);
      document.documentElement.style.setProperty('--industry-background', industryTheme.background_color);
      if (industryTheme.accent_color) {
        document.documentElement.style.setProperty('--industry-accent', industryTheme.accent_color);
      } else {
        document.documentElement.style.removeProperty('--industry-accent');
      }
    }
    
    return () => {
      // Clean up on unmount
      document.documentElement.style.removeProperty('--industry-primary');
      document.documentElement.style.removeProperty('--industry-background');
      document.documentElement.style.removeProperty('--industry-accent');
    };
  }, [industryTheme]);

  if (!content) {
    if (import.meta.env.DEV) {
      console.warn(`ContentPage: Missing content for pageId "${pageId}"`);
    }
    return (
      <div className="container py-16">
        <h1 className="text-4xl font-bold mb-4">Content Not Found</h1>
        <p className="text-muted-foreground">
          This page is being prepared. Please check back soon.
        </p>
      </div>
    );
  }

  return (
    <article className={industryTheme ? 'industry-themed' : ''}>
      {/* Banner Image */}
      {banner && (
        <div 
          className="w-full border-b border-border/40"
          style={industryTheme ? { backgroundColor: industryTheme.background_color } : undefined}
        >
          <div className="container py-8 md:py-12">
            <img
              src={banner.imagePath}
              alt={banner.alt}
              className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-soft"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            {content.title}
          </h1>
          {industryTheme && (
            <div 
              className="h-1 w-24 rounded-full mb-8"
              style={{ backgroundColor: industryTheme.primary_color }}
            />
          )}
          {!industryTheme && <div className="mb-8" />}
          <ContentRenderer sections={content.sections} />
        </div>
      </div>
    </article>
  );
}
