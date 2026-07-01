import { useLayoutEffect, useRef } from "react";
import "./ViewportFixedBackground.css";

type ViewportFixedBackgroundProps = {
  image: string;
};

export function ViewportFixedBackground({ image }: ViewportFixedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const imageElement = imageRef.current;
    if (!container || !imageElement) return;

    let animationFrame = 0;

    const updateBackgroundPosition = () => {
      animationFrame = 0;
      const { top } = container.getBoundingClientRect();
      imageElement.style.transform = `translate3d(0, ${-top}px, 0)`;
    };

    const scheduleUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateBackgroundPosition);
    };

    updateBackgroundPosition();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.visualViewport?.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.visualViewport?.addEventListener("resize", scheduleUpdate);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.visualViewport?.removeEventListener("scroll", scheduleUpdate);
      window.visualViewport?.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <div ref={containerRef} className="viewport-fixed-background" aria-hidden="true">
      <div ref={imageRef} className="viewport-fixed-background__image" style={{ backgroundImage: `url(${image})` }} />
    </div>
  );
}
