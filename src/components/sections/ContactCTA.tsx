import { ContactForm } from "@/components/ContactForm";
import { FadeIn, SectionHeader } from "@/components/shared/SectionHeader";
import { siteContent } from "@/data/content";

export function ContactCTA() {
  const { contact } = siteContent;

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow={contact.eyebrow}
              title={contact.title}
              description={contact.description}
              align="left"
            />

            <FadeIn delay={0.1} className="mt-8 space-y-4">
              <div className="rounded-2xl border border-border bg-secondary/60 p-5">
                <p className="text-sm font-medium text-foreground">
                  What to expect
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• A tailored walkthrough of Connect, Understand, Act, and Manage</li>
                  <li>• Discussion of your protocols, deployment constraints, and use cases</li>
                  <li>• Guidance on on-premise rollout for SMEs and enterprise sites</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                Prefer email? Reach us at{" "}
                <a
                  href={`mailto:${siteContent.company.email}`}
                  className="font-medium text-primary hover:underline"
                >
                  {siteContent.company.email}
                </a>
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
