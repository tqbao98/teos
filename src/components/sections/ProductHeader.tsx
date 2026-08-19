import { FadeIn } from "@/components/shared/SectionHeader";
import { siteContent } from "@/data/content";

export function ProductHeader() {
  const { product } = siteContent;

  return (
    <FadeIn>
      <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
        <span className="lg:whitespace-nowrap">{product.title}</span>
        <br />
        {product.titleLine2}
      </h2>
    </FadeIn>
  );
}
