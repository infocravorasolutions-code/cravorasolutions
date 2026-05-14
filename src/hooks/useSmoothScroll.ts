import { useEffect } from 'react';

/**
 * useSmoothScroll
 * Enables smooth scrolling behaviour for anchor links across the site.
 * Also resets scroll position to the top on route changes when called
 * at the App level.
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Apply smooth scroll to the document
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const id = href.slice(1);
      const element = document.getElementById(id);

      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
}
