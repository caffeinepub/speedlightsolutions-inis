import { useEffect } from 'react';
import { BRAND } from '../site/brand';

export function usePageTitle(title: string) {
  useEffect(() => {
    const previousTitle = document.title;
    
    // For home page, use the full title as-is
    // For other pages, append brand name if not already present
    const formattedTitle = title.includes(BRAND.name) 
      ? title 
      : title === BRAND.name 
        ? title 
        : `${title} | ${BRAND.name}`;
    
    document.title = formattedTitle;
    
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
