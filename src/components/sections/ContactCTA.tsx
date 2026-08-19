import { ContactForm } from "@/components/ContactForm";
import { FadeIn, SectionHeader } from "@/components/shared/SectionHeader";
import { siteContent } from "@/data/content";

export function ContactCTA() {
  const { contact } = siteContent;

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeader
              title={contact.title}
              align="left"
            />

            <FadeIn delay={0.1} className="space-y-4">
              <p className="text-sm font-medium text-foreground">
                What to expect
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• A tailored walkthrough of Teos</li>
                <li>• Discussion of your protocols, deployment constraints, and use cases</li>
                <li>• Guidance on on-premise rollout for your sites</li>
              </ul>
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
