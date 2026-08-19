import { useEffect } from "react";

import { captureEvent } from "@/lib/posthog";

export type TrackedSection =
  | "statement"
  | "preview"
  | "product"
  | "impact"
  | "compliance"
  | "contact";

const viewedSections = new Set<TrackedSection>();

export function useSectionViewed(section: TrackedSection): void {
  useEffect(() => {
    const element = document.getElementById(section);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio >= 0.4 &&
          !viewedSections.has(section)
        ) {
          viewedSections.add(section);
          captureEvent("section_viewed", { section });
          observer.disconnect();
        }
      },
      { threshold: 0.4, rootMargin: "0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [section]);
}

export function SectionViewTracker() {
  useSectionViewed("statement");
  useSectionViewed("preview");
  useSectionViewed("product");
  useSectionViewed("impact");
  useSectionViewed("compliance");
  useSectionViewed("contact");

  return null;
}
