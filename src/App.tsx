import { lazy, Suspense } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { DeferredSection } from "@/components/shared/DeferredSection";
import { SectionViewTracker } from "@/hooks/useSectionViewed";
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";

const Preview = lazy(() =>
  import("@/components/sections/Preview").then((module) => ({
    default: module.Preview,
  })),
);
const Product = lazy(() =>
  import("@/components/sections/Product").then((module) => ({
    default: module.Product,
  })),
);
const Impact = lazy(() =>
  import("@/components/sections/Impact").then((module) => ({
    default: module.Impact,
  })),
);
const Compliance = lazy(() =>
  import("@/components/sections/Compliance").then((module) => ({
    default: module.Compliance,
  })),
);
const ContactCTA = lazy(() =>
  import("@/components/sections/ContactCTA").then((module) => ({
    default: module.ContactCTA,
  })),
);

function SectionFallback({ label }: { label: string }) {
  return (
    <div
      aria-hidden="true"
      className="mx-auto flex max-w-7xl items-center justify-center px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="h-48 w-full max-w-4xl animate-pulse rounded-xl bg-muted/40" />
      <span className="sr-only">Loading {label}</span>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SectionViewTracker />
      <Navbar />
      <main>
        <Hero />

        <Statement />

        <DeferredSection
          id="preview"
          minHeight="640px"
          fallback={<SectionFallback label="preview" />}
        >
          <Suspense fallback={<SectionFallback label="preview" />}>
            <Preview />
          </Suspense>
        </DeferredSection>

        <DeferredSection
          id="product"
          minHeight="960px"
          fallback={<SectionFallback label="product" />}
        >
          <Suspense fallback={<SectionFallback label="product" />}>
            <Product />
          </Suspense>
        </DeferredSection>

        <DeferredSection
          id="impact"
          minHeight="920px"
          fallback={<SectionFallback label="impact" />}
        >
          <Suspense fallback={<SectionFallback label="impact" />}>
            <Impact />
          </Suspense>
        </DeferredSection>

        <DeferredSection
          id="compliance"
          minHeight="180px"
          fallback={<SectionFallback label="compliance" />}
        >
          <Suspense fallback={<SectionFallback label="compliance" />}>
            <Compliance />
          </Suspense>
        </DeferredSection>

        <DeferredSection
          id="contact"
          minHeight="720px"
          fallback={<SectionFallback label="contact" />}
        >
          <Suspense fallback={<SectionFallback label="contact" />}>
            <ContactCTA />
          </Suspense>
        </DeferredSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;
