import { useMemo } from "react";

import { useIsMobile, useReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
  paused?: boolean;
}

function buildMeteorStyles({
  number,
  minDelay,
  maxDelay,
  minDuration,
  maxDuration,
  angle,
  viewportWidth,
}: Required<
  Pick<
    MeteorsProps,
    "number" | "minDelay" | "maxDelay" | "minDuration" | "maxDuration" | "angle"
  >
> & { viewportWidth: number }) {
  return Array.from({ length: number }, () => ({
    "--angle": `${-angle}deg`,
    top: "-5%",
    left: `calc(0% + ${Math.floor(Math.random() * viewportWidth)}px)`,
    animationDelay: `${Math.random() * (maxDelay - minDelay) + minDelay}s`,
    animationDuration: `${Math.floor(
      Math.random() * (maxDuration - minDuration) + minDuration,
    )}s`,
  }));
}

export function Meteors({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
  paused = false,
}: MeteorsProps) {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const effectiveNumber = isMobile ? Math.min(number, 10) : number;
  const viewportWidth =
    typeof window !== "undefined" ? window.innerWidth : 1280;

  const meteorStyles = useMemo(
    () =>
      buildMeteorStyles({
        number: effectiveNumber,
        minDelay,
        maxDelay,
        minDuration,
        maxDuration,
        angle,
        viewportWidth,
      }),
    [
      effectiveNumber,
      minDelay,
      maxDelay,
      minDuration,
      maxDuration,
      angle,
      viewportWidth,
    ],
  );

  if (reducedMotion) return null;

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            "animate-meteor pointer-events-none absolute size-0.5 rotate-(--angle) rounded-full bg-foreground/50 shadow-[0_0_0_1px_#ffffff10]",
            paused && "animation-paused",
            className,
          )}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-foreground/40 to-transparent" />
        </span>
      ))}
    </>
  );
}
