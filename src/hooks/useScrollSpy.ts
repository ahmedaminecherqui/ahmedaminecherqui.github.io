import { useState, useEffect } from 'react';

/**
 * useScrollSpy
 *
 * Tracks which section is currently visible in the viewport using
 * IntersectionObserver. Returns the id of the active section.
 *
 * @param sectionIds  - Array of section id strings (without '#')
 * @param rootMargin  - IntersectionObserver rootMargin (adjust to navbar height)
 */
export function useScrollSpy(
  sectionIds: string[],
  rootMargin = '-72px 0px -80% 0px'
): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}
