import { FadeIn } from "@/components/shared/SectionHeader";
import { siteContent } from "@/data/content";

export function Compliance() {
  const { compliance } = siteContent;

  return (
    <div className="bg-black py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-sm font-semibold text-white/80">
            {compliance.title}
          </h2>
        </FadeIn>

        <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-12">
          {compliance.standards.map((standard, index) => (
            <FadeIn key={standard} delay={index * 0.06}>
              <p className="text-center text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {standard}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
