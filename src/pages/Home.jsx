import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/lib/LanguageContext";
import Footer from "@/components/Footer";

const SERVICE_IMAGES = [
  "https://media.base44.com/images/public/6a341209f510fd74c1fecf1f/c34d13296_5ojAh1.jpg",
  "https://media.base44.com/images/public/6a341209f510fd74c1fecf1f/436f5d494_Screenshot2026-07-06at200051.png",
  "https://media.base44.com/images/public/6a341209f510fd74c1fecf1f/55db16058_Screenshot2026-04-30at190332.png",
  "https://media.base44.com/images/public/6a341209f510fd74c1fecf1f/ffc4a7f24_Screenshot2026-07-06at200031.png",
  "https://media.base44.com/images/public/6a341209f510fd74c1fecf1f/8fbfcdd32_Screenshot2026-04-30at181610.png",
  "https://media.base44.com/images/public/6a341209f510fd74c1fecf1f/a1d24781c_Screenshot2026-06-18at202823.png",
];

export default function Home() {
  const { t } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mq.matches);
    const handler = (e) => setIsReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (isReducedMotion) return;
      setMousePos({ x: e.clientX, y: e.clientY });
    },
    [isReducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: -1000, y: -1000 });
  }, []);

  const scrollToServices = () => {
    document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="w-full"
      style={{ background: "#050505", minHeight: "100vh" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section
        ref={heroRef}
        className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "#050505" }}
        aria-label="Hero"
      >
        {/* Film grain */}
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
          aria-hidden="true"
        />

        {/* Cursor glow */}
        {!isReducedMotion && (
          <div
            className="absolute pointer-events-none z-20 rounded-full"
            style={{
              width: 500,
              height: 500,
              left: mousePos.x - 250,
              top: mousePos.y - 250,
              background:
                "radial-gradient(circle, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0) 70%)",
              transition: "left 0.12s ease-out, top 0.12s ease-out",
            }}
            aria-hidden="true"
          />
        )}

        {/* Hero content — centered */}
        <div className="relative z-30 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
          <h1
            className="text-white font-black leading-none mb-8 tracking-tight"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(5rem, 14vw, 11rem)",
              letterSpacing: "-0.02em",
              fontWeight: 900,
            }}
          >
            {t.hero.title}
          </h1>

          <p
            className="text-white/80 mb-12 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              fontWeight: 400,
              maxWidth: "520px",
            }}
          >
            {t.hero.subtitle}
          </p>

          <button
            onClick={scrollToServices}
            className="border border-white/70 text-white px-10 py-3.5 text-[15px] font-medium hover:bg-white hover:text-black transition-all duration-300 focus:outline-2 focus:outline-white focus:outline-offset-4"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.01em" }}
          >
            {t.hero.cta}
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white/30 hover:text-white/60 transition-colors duration-300 focus:outline-2 focus:outline-white focus:outline-offset-4"
          aria-label="Scroll to services"
        >
          <ChevronDown size={22} />
        </button>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section
        id="services-section"
        className="w-full px-6 md:px-12"
        style={{ background: "#050505" }}
        aria-label="Services"
      >
        <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: "12px" }}>
          {SERVICE_IMAGES.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden ${["order-1","order-3","order-2","order-4","order-5","order-6"][i]} md:order-none`}
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={src}
                alt={t.serviceCards[i]?.tag || ""}
                className="w-full h-full object-cover"
                style={i === 0 ? { objectPosition: "top" } : undefined}
              />
              {/* Translatable text overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
                <div className="flex justify-start">
                  <span
                    className="font-semibold tracking-[0.06em] uppercase text-[0.55rem] md:text-[1.05rem]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: (i === 0 || i === 2) ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.85)",
                    }}
                  >
                    {t.serviceCards[i]?.tag}
                  </span>
                </div>
                <p
                  className="leading-snug text-[0.6rem] md:text-[1.15rem]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    color: (i === 0 || i === 2) ? "#000000" : "#ffffff",
                  }}
                >
                  {t.serviceCards[i]?.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BUTTON BETWEEN SECTIONS ── */}
      <section
        className="w-full px-6 md:px-12 py-16 md:py-20 flex justify-center"
        style={{ background: "#050505" }}
      >
        <Link
          to="/servicii"
          className="group flex flex-col items-center gap-2 md:flex-row md:gap-4"
        >
          <div className="flex items-center gap-4">
            <span
              className="text-white font-black"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                fontWeight: 900,
                letterSpacing: "-0.01em",
              }}
            >
              <span className="md:hidden">{t.servicesButton.split(" ").slice(0, -1).join(" ")}</span>
              <span className="hidden md:inline">{t.servicesButton}</span>
            </span>
            <img
              src="https://media.base44.com/images/public/6a341209f510fd74c1fecf1f/6e6935123_ChatGPTImageMay7202608_56_02PM.png"
              alt=""
              className="group-hover:translate-x-2 transition-transform duration-300"
              style={{ width: "clamp(28px, 3.5vw, 44px)", height: "auto" }}
            />
          </div>
          <span
            className="text-white font-black md:hidden"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
              fontWeight: 900,
              letterSpacing: "-0.01em",
            }}
          >
            {t.servicesButton.split(" ").pop()}
          </span>
        </Link>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section
        id="about-section"
        className="w-full px-6 md:px-12 py-24 md:py-36"
        style={{ background: "#050505" }}
        aria-label="About"
      >
        <div className="flex flex-col md:flex-row items-center gap-14 md:gap-24 max-w-6xl mx-auto">
          {/* Left: text */}
          <div className="flex-1">
            <h2
              className="font-black leading-tight mb-10"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              {t.about.titleLine1}{" "}
              <span style={{
                background: "linear-gradient(90deg, #7ab8a0, #3dd699)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {t.about.titleHighlight1} {t.about.titleLine2} {t.about.titleHighlight2}
              </span>
            </h2>
            <p
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {t.about.p1a}{" "}
              <strong style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700 }}>
                {t.about.p1Bold}
              </strong>{" "}
              {t.about.p1b}
            </p>
          </div>
          {/* Right: image */}
          <div className="flex-1 w-full">
            <img
              src="https://media.base44.com/images/public/6a341209f510fd74c1fecf1f/e9ba15391_f915acfb8_Image.jpg"
              alt="About Valaro"
              className="w-full object-cover max-h-[420px] md:max-h-[640px]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
