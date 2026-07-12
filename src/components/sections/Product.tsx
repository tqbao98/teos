import {
  Brain,
  Layers,
  Plug,
  Settings,
  Shield,
  Sparkles,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { FadeIn, SectionHeader } from "@/components/shared/SectionHeader";
import { siteContent } from "@/data/content";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  plug: Plug,
  brain: Brain,
  zap: Zap,
  settings: Settings,
  shield: Shield,
  layers: Layers,
  users: Users,
  sparkles: Sparkles,
};

export function Product() {
  const { product } = siteContent;

  return (
    <section id="product" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={product.eyebrow}
          title={product.title}
          description={product.description}
        />

        <div className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {product.layers.map((layer, index) => {
            const Icon = iconMap[layer.icon];
            const isLarge = layer.span === "large";

            return (
              <FadeIn
                key={layer.id}
                delay={index * 0.06}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                  isLarge ? "md:col-span-2" : "md:col-span-1",
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-2xl bg-secondary p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {layer.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {product.differentiators.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <FadeIn
                key={item.title}
                delay={0.1 + index * 0.05}
                className="rounded-3xl border border-border/80 bg-background p-5"
              >
                <div className="mb-3 inline-flex rounded-xl bg-muted p-2.5 text-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className="text-base font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
