import { useEffect, useRef, useCallback } from 'react';

interface PointerPosition {
  x: number;
  y: number;
}

/**
 * Custom hook to manage dropdown hover state across trigger and portal-rendered content.
 * Tracks pointer position and determines if pointer is within the combined region of
 * trigger element and dropdown panel (even when panel is rendered via portal).
 */
export function useDropdownHoverRegion(
  isOpen: boolean,
  onShouldClose: () => void
) {
  const triggerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);
  const pointerPosRef = useRef<PointerPosition>({ x: -1, y: -1 });
  const rafIdRef = useRef<number | null>(null);

  const isPointerInRegion = useCallback(() => {
    const trigger = triggerRef.current;
    const panel = panelRef.current;
    const { x, y } = pointerPosRef.current;

    if (x === -1 || y === -1) return false;

    // Check if pointer is over trigger
    if (trigger) {
      const triggerRect = trigger.getBoundingClientRect();
      if (
        x >= triggerRect.left &&
        x <= triggerRect.right &&
        y >= triggerRect.top &&
        y <= triggerRect.bottom
      ) {
        return true;
      }
    }

    // Check if pointer is over panel (portal-rendered dropdown content)
    if (panel) {
      const panelRect = panel.getBoundingClientRect();
      if (
        x >= panelRect.left &&
        x <= panelRect.right &&
        y >= panelRect.top &&
        y <= panelRect.bottom
      ) {
        return true;
      }
    }

    return false;
  }, []);

  // Track global pointer position
  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      pointerPosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
    };
  }, []);

  // Monitor hover region when open using RAF for smooth checking
  useEffect(() => {
    if (!isOpen) {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      return;
    }

    const checkRegion = () => {
      if (!isPointerInRegion()) {
        onShouldClose();
        return;
      }
      rafIdRef.current = requestAnimationFrame(checkRegion);
    };

    rafIdRef.current = requestAnimationFrame(checkRegion);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [isOpen, isPointerInRegion, onShouldClose]);

  const setTriggerElement = useCallback((element: HTMLElement | null) => {
    triggerRef.current = element;
  }, []);

  const setPanelElement = useCallback((element: HTMLElement | null) => {
    panelRef.current = element;
  }, []);

  return {
    setTriggerElement,
    setPanelElement,
  };
}
