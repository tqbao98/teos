import { ProductHeader } from "@/components/sections/ProductHeader";
import { ValuePropCard } from "@/components/sections/ValuePropCard";
import { FadeIn } from "@/components/shared/SectionHeader";
import { siteContent } from "@/data/content";

export function Product() {
  const { product } = siteContent;
  const [first, second, ...rest] = product.valuePropositions;

  return (
    <div className="bg-gradient-to-b from-background to-white pt-24 pb-12 sm:pt-28 sm:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProductHeader />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {[first, second].map((prop, i) => (
            <FadeIn
              key={prop.id}
              delay={i * 0.08}
              className="h-full sm:col-span-1 lg:col-span-3"
            >
              <ValuePropCard
                title={prop.title}
                description={prop.description}
                eyebrow={prop.eyebrow}
                visual={prop.visual}
                tone={prop.tone}
                size="featured"
              />
            </FadeIn>
          ))}
          {rest.map((prop, i) => (
            <FadeIn
              key={prop.id}
              delay={(i + 2) * 0.08}
              className="h-full lg:col-span-2"
            >
              <ValuePropCard
                title={prop.title}
                description={prop.description}
                eyebrow={prop.eyebrow}
                visual={prop.visual}
                tone={prop.tone}
                size="compact"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
