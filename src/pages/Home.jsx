import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import ServiceGrid from "@/components/services/ServiceGrid";
import { useLanguage } from "@/lib/LanguageContext";
import Footer from "@/components/Footer";

export default function Home() {
  const { t } = useLanguage();
  const scrollToServices = () => {
    document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="w-full"
      style={{ background: "#050505", minHeight: "100vh" }}
    >
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section
        className="relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "#050505" }}
        aria-label="Hero"
      >
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
              fontWeight: 700,
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
        className="w-full"
        style={{ background: "#050505" }}
        aria-label="Services"
      >
        <ServiceGrid />
      </section>

      {/* ── ABOUT SECTION ── */}
      <section
        id="about-section"
        className="w-full px-6 md:px-12 py-24 md:py-36"
        style={{ background: "#050505" }}
        aria-label="About"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-14 md:gap-8 w-full">
          {/* Left: text */}
          <div className="flex-1">
            <h2
              className="font-black leading-tight mb-10 text-center md:text-left"
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
          <div className="flex-1 md:flex-[1.4] w-full flex justify-end">
            <img
              src="https://media.base44.com/images/public/6a341209f510fd74c1fecf1f/e9ba15391_f915acfb8_Image.jpg"
              alt="About Valaro"
              className="w-full object-cover max-h-[420px] md:max-h-[840px]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
