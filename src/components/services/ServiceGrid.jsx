import React, { useEffect, useRef, useState } from "react";

const BASE = "https://media.base44.com/images/public/6a341209f510fd74c1fecf1f";

const TILES = [
  { src: `${BASE}/8209351bb_SERVICII6.png`, alt: "Creație & producție" },
  { src: `${BASE}/45f0ddff0_SERVICII7.png`, alt: "Prezență online 360°" },
  { src: `${BASE}/13cab3cfd_SERVICII8.png`, alt: "Raportare transparentă" },
  { src: `${BASE}/d9cab853f_SERVICII10.png`, alt: "Website & landing page" },
  { src: `${BASE}/27355dd87_SERVICII11.png`, alt: "Google & Meta Ads" },
  { src: `${BASE}/09fec4d8d_SERVICII1.png`, alt: "Strategie de brand" },
  { src: `${BASE}/c202e48a4_SERVICII2.png`, alt: "Campanii social media" },
  { src: `${BASE}/44fd5aaa8_SERVICII3.png`, alt: "Generare de lead-uri" },
];

const GUTTER = "clamp(12px, 1.8vw, 28px)";
const SIDE = "clamp(16px, 7vw, 145px)";

export default function ServiceGrid() {
  const scrollerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  // Very slow self-scroll on mobile / tablet — stops as soon as the visitor takes control
  useEffect(() => {
    if (!autoScroll) return;
    const el = scrollerRef.current;
    if (!el) return;
    if (window.matchMedia("(min-width: 1024px)").matches) return;

    const id = window.setInterval(() => {
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      if (el.scrollLeft >= max - 1) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollLeft += 1;
      }
    }, 70);

    return () => window.clearInterval(id);
  }, [autoScroll]);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  return (
    <div className="w-full" style={{ paddingLeft: SIDE, paddingRight: SIDE }}>
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        onPointerDown={() => setAutoScroll(false)}
        onTouchStart={() => setAutoScroll(false)}
        onWheel={() => setAutoScroll(false)}
        className="no-scrollbar flex overflow-x-auto lg:grid lg:grid-cols-4 lg:overflow-visible"
        style={{ gap: GUTTER }}
      >
        {TILES.map((tile) => (
          <div
            key={tile.src}
            className="w-[70vw] shrink-0 overflow-hidden sm:w-[42vw] lg:w-auto"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src={tile.src}
              alt={tile.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Scroll progress line — mobile / tablet only */}
      <div className="lg:hidden mt-5 h-px w-full bg-white/15">
        <div
          className="h-px bg-white transition-[width] duration-150 ease-out"
          style={{ width: `${12 + progress * 88}%` }}
        />
      </div>
    </div>
  );
}
