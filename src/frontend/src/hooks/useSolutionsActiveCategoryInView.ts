import { useEffect, useState, useRef } from 'react';

interface SectionVisibility {
  categoryId: string;
  intersectionRatio: number;
}

/**
 * Hook that observes solution category sections and determines the active category
 * based on which section is most visible in the viewport, with hysteresis to prevent flicker.
 */
export function useSolutionsActiveCategoryInView(
  categoryIds: string[],
  onActiveCategoryChange: (categoryId: string | null) => void
) {
  const [visibilityMap, setVisibilityMap] = useState<Map<string, number>>(new Map());
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const currentActiveRef = useRef<string | null>(null);

  // Register a section element
  const setSectionRef = (categoryId: string) => (el: HTMLElement | null) => {
    if (el) {
      sectionRefs.current.set(categoryId, el);
    } else {
      sectionRefs.current.delete(categoryId);
    }
  };

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      // Use a balanced margin to detect sections in the middle of viewport
      rootMargin: '-10% 0px -10% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      setVisibilityMap((prev) => {
        const updated = new Map(prev);
        
        entries.forEach((entry) => {
          const categoryId = entry.target.getAttribute('data-category-id');
          if (categoryId) {
            if (entry.isIntersecting) {
              updated.set(categoryId, entry.intersectionRatio);
            } else {
              updated.set(categoryId, 0);
            }
          }
        });

        return updated;
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all registered sections
    sectionRefs.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Determine active category based on visibility with hysteresis
  useEffect(() => {
    if (visibilityMap.size === 0) return;

    // Find the section with highest intersection ratio
    let maxRatio = 0;
    let mostVisibleCategory: string | null = null;

    visibilityMap.forEach((ratio, categoryId) => {
      if (ratio > maxRatio) {
        maxRatio = ratio;
        mostVisibleCategory = categoryId;
      }
    });

    // Apply hysteresis: only switch if the new section is significantly more visible
    // or if current active is not visible at all
    const currentActiveRatio = currentActiveRef.current 
      ? visibilityMap.get(currentActiveRef.current) || 0 
      : 0;

    const HYSTERESIS_THRESHOLD = 0.15; // Require 15% more visibility to switch

    let shouldSwitch = false;

    if (!currentActiveRef.current) {
      // No active category yet, set the most visible one
      shouldSwitch = mostVisibleCategory !== null && maxRatio > 0;
    } else if (currentActiveRatio === 0) {
      // Current active is not visible at all, switch immediately
      shouldSwitch = mostVisibleCategory !== null && maxRatio > 0;
    } else if (mostVisibleCategory && mostVisibleCategory !== currentActiveRef.current) {
      // Only switch if new section is significantly more visible
      shouldSwitch = maxRatio > currentActiveRatio + HYSTERESIS_THRESHOLD;
    }

    if (shouldSwitch && mostVisibleCategory !== currentActiveRef.current) {
      currentActiveRef.current = mostVisibleCategory;
      onActiveCategoryChange(mostVisibleCategory);
    }
  }, [visibilityMap, onActiveCategoryChange]);

  return { setSectionRef };
}
