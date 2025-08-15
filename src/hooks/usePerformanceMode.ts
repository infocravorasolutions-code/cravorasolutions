import React from "react";
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PerformanceModeStore {
  isLiteMode: boolean;
  toggleLiteMode: () => void;
  prefersReducedMotion: boolean;
  setPrefersReducedMotion: (value: boolean) => void;
}

export const usePerformanceMode = create<PerformanceModeStore>()(
  persist(
    (set) => ({
      isLiteMode: false,
      toggleLiteMode: () => set((state) => ({ isLiteMode: !state.isLiteMode })),
      prefersReducedMotion: false,
      setPrefersReducedMotion: (value) => set({ prefersReducedMotion: value }),
    }),
    {
      name: 'performance-mode',
    }
  )
);

// Hook to detect reduced motion preference
export const useReducedMotion = () => {
  const { prefersReducedMotion, setPrefersReducedMotion } = usePerformanceMode();
  
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setPrefersReducedMotion]);
  
  return prefersReducedMotion;
};