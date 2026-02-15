import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook to manage dropdown hover state across trigger and portal-rendered content.
 * Tracks pointer position and closes dropdown immediately when pointer leaves both regions.
 */
export function useDropdownHoverRegion() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const isPointerInRegion = useCallback(() => {
    const trigger = triggerRef.current;
    const panel = panelRef.current;
    
    if (!trigger) return false;

    // Get current pointer position from last known mousemove
    const pointerX = (window as any).__lastPointerX ?? -1;
    const pointerY = (window as any).__lastPointerY ?? -1;

    if (pointerX === -1 || pointerY === -1) return false;

    // Check if pointer is over trigger
    const triggerRect = trigger.getBoundingClientRect();
    const inTrigger = 
      pointerX >= triggerRect.left &&
      pointerX <= triggerRect.right &&
      pointerY >= triggerRect.top &&
      pointerY <= triggerRect.bottom;

    if (inTrigger) return true;

    // Check if pointer is over panel (if it exists)
    if (panel) {
      const panelRect = panel.getBoundingClientRect();
      const inPanel = 
        pointerX >= panelRect.left &&
        pointerX <= panelRect.right &&
        pointerY >= panelRect.top &&
        pointerY <= panelRect.bottom;
      
      if (inPanel) return true;
    }

    return false;
  }, []);

  // Track global pointer position
  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      (window as any).__lastPointerX = e.clientX;
      (window as any).__lastPointerY = e.clientY;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
    };
  }, []);

  // Monitor hover region when open
  useEffect(() => {
    if (isOpen) {
      checkIntervalRef.current = setInterval(() => {
        if (!isPointerInRegion()) {
          setIsOpen(false);
        }
      }, 50); // Check every 50ms for immediate response
    } else {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
        checkIntervalRef.current = null;
      }
    }

    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
        checkIntervalRef.current = null;
      }
    };
  }, [isOpen, isPointerInRegion]);

  const setTriggerElement = useCallback((element: HTMLElement | null) => {
    triggerRef.current = element;
  }, []);

  const setPanelElement = useCallback((element: HTMLElement | null) => {
    panelRef.current = element;
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    open,
    close,
    setTriggerElement,
    setPanelElement,
  };
}
