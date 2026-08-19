import { lazy, Suspense } from "react";

import { FadeIn, SectionHeader } from "@/components/shared/SectionHeader";
import { siteContent } from "@/data/content";

const ContactForm = lazy(() =>
  import("@/components/ContactForm").then((module) => ({
    default: module.ContactForm,
  })),
);

function ContactFormFallback() {
  return (
    <div
      aria-hidden="true"
      className="h-[420px] w-full animate-pulse rounded-xl border border-border/60 bg-muted/30"
    />
  );
}

export function ContactCTA() {
  const { contact } = siteContent;

  return (
    <div className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeader title={contact.title} align="left" />

            <FadeIn delay={0.1} className="space-y-4">
              <p className="text-sm font-medium text-foreground">
                What to expect
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• A tailored walkthrough of Teos</li>
                <li>
                  • Discussion of your protocols, deployment constraints, and
                  use cases
                </li>
                <li>• Guidance on on-premise rollout for your sites</li>
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <Suspense fallback={<ContactFormFallback />}>
              <ContactForm />
            </Suspense>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
