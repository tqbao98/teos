import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";

import { useReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

function getGlobeQuality() {
  const isMobile = window.innerWidth < 640;
  const isTablet = window.innerWidth < 1024;

  return {
    // cobe reads width/height as the drawing buffer resolution, which phenomenon
    // sizes as clientWidth * devicePixelRatio. Both must derive from this value
    // or the sphere is scaled and centered wrong.
    devicePixelRatio: Math.min(window.devicePixelRatio || 1, isTablet ? 1.5 : 2),
    mapSamples: isMobile ? 6000 : isTablet ? 10000 : 12000,
  };
}

const BASE_GLOBE_CONFIG: Omit<
  COBEOptions,
  "width" | "height" | "devicePixelRatio" | "mapSamples"
> = {
  onRender: () => {},
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [155 / 255, 41 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({
  className,
  config,
}: {
  className?: string;
  config?: Partial<COBEOptions>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteracting.current = clientX;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || reducedMotion) return;

    let globe: ReturnType<typeof createGlobe> | null = null;
    let initScheduled = false;
    let isIntersecting = false;
    let resizeObserver: ResizeObserver | null = null;

    const syncSize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.clientWidth;
      }
    };

    const destroyGlobe = () => {
      if (globe) {
        globe.destroy();
        globe = null;
      }
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "0";
      }
    };

    const createGlobeInstance = () => {
      if (!canvasRef.current || globe || !isIntersecting || document.hidden) {
        return;
      }

      syncSize();
      const quality = getGlobeQuality();
      // Matches the truncation the canvas applies to its width/height attributes.
      const bufferSize = () => Math.floor(widthRef.current * quality.devicePixelRatio);

      globe = createGlobe(canvasRef.current, {
        ...BASE_GLOBE_CONFIG,
        ...config,
        devicePixelRatio: quality.devicePixelRatio,
        mapSamples: quality.mapSamples,
        width: bufferSize(),
        height: bufferSize(),
        onRender: (state) => {
          if (!pointerInteracting.current) phiRef.current += 0.005;
          state.phi = phiRef.current + rs.get();
          state.width = bufferSize();
          state.height = bufferSize();
        },
      });

      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    };

    const ensureGlobe = () => {
      if (globe || initScheduled || !isIntersecting || document.hidden) return;
      initScheduled = true;

      const start = () => {
        initScheduled = false;
        createGlobeInstance();
      };

      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(start, { timeout: 1200 });
      } else {
        globalThis.setTimeout(start, 120);
      }
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        destroyGlobe();
        return;
      }

      if (isIntersecting) {
        ensureGlobe();
      }
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (entry.isIntersecting) {
          ensureGlobe();
        } else {
          destroyGlobe();
        }
      },
      { threshold: 0.05, rootMargin: "120px 0px" },
    );

    resizeObserver = new ResizeObserver(() => {
      syncSize();
    });

    intersectionObserver.observe(container);
    resizeObserver.observe(container);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      intersectionObserver.disconnect();
      resizeObserver?.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      destroyGlobe();
    };
  }, [config, reducedMotion, rs]);

  if (reducedMotion) {
    return (
      <div
        ref={containerRef}
        className={cn("mx-auto aspect-square w-full max-w-[600px]", className)}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("mx-auto aspect-square w-full max-w-[600px]", className)}
    >
      <canvas
        className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) updateMovement(e.clientX);
        }}
        onTouchMove={(e) => {
          if (e.touches[0] && pointerInteracting.current !== null) {
            updateMovement(e.touches[0].clientX);
          }
        }}
      />
    </div>
  );
}
