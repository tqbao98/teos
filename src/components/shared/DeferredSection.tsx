import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface DeferredSectionProps {
  id: string;
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  minHeight?: string;
  rootMargin?: string;
}

export function DeferredSection({
  id,
  children,
  fallback = null,
  className,
  minHeight = "720px",
  rootMargin = "240px 0px",
}: DeferredSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-data: reduce)").matches) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn("deferred-section", className)}
      style={{ minHeight: shouldRender ? undefined : minHeight }}
    >
      {shouldRender ? children : fallback}
    </section>
  );
}
