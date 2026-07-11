import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const scrollToAbout = () => {
    document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        className="w-full px-6 md:px-12 py-20 md:py-28"
        style={{ background: "#050505" }}
      >
        <div className="flex flex-col md:flex-row items-start gap-16 max-w-6xl mx-auto">
          {/* Left: heading + nav */}
          <div className="flex-1">
            <h2
              className="text-white font-black leading-tight mb-12"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                whiteSpace: "pre-line",
              }}
            >
              {f.heading}
            </h2>
            <div className="grid grid-cols-2 gap-x-16 gap-y-4">
              <Link
                to="/servicii"
                className="text-white/40 hover:text-white text-[15px] transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t.nav.servicii}
              </Link>
              <Link
                to="/portfolio"
                className="text-white/40 hover:text-white text-[15px] transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t.nav.portofoliu}
              </Link>
              <button
                onClick={scrollToAbout}
                className="text-white/40 hover:text-white text-[15px] transition-colors duration-300 text-left"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t.nav.despreNoi}
              </button>
              <Link
                to="/contact"
                className="text-white/40 hover:text-white text-[15px] transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>

          {/* Right: VALARO image */}
          <div className="flex flex-1 items-center justify-center overflow-hidden w-full">
            <img
              src="https://media.base44.com/images/public/6a341209f510fd74c1fecf1f/3dab2506d_Screenshot2026-07-10at164040.png"
              alt="VALARO"
              className="object-contain"
              style={{ maxHeight: "420px" }}
            />
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <footer
        className="w-full px-6 md:px-12 py-6 border-t border-white/[0.07]"
        style={{ background: "#050505" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <p
            className="text-white/20 text-[12px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {f.copyright}
          </p>
          <div className="flex items-center gap-6">
            <span
              className="text-white/20 text-[12px] cursor-pointer hover:text-white/40 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {f.privacy}
            </span>
            <span
              className="text-white/20 text-[12px] cursor-pointer hover:text-white/40 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {f.terms}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
