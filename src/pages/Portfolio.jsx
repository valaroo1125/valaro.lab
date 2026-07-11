import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/lib/LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();
  const p = t.portfolio;

  return (
    <div
      className="min-h-screen w-full flex flex-col relative"
      style={{ background: "#050505", fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />

      <div className="absolute top-20 right-8 md:right-14 z-40">
        <Link
          to="/"
          className="flex items-center gap-2 text-[14px] text-white/50 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft size={14} />
          <span>{p.back}</span>
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        {/* Film grain */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-xl">
          <h1
            className="text-white font-black mb-6 leading-tight"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              letterSpacing: "-0.03em",
              fontWeight: 900,
            }}
          >
            {p.title}
          </h1>
          <p
            className="text-white/40 mb-4 text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {p.subtitle}
          </p>
          <div
            className="inline-block border border-white/10 px-6 py-2 text-[13px] text-white/30 tracking-widest uppercase mb-10"
          >
            {p.comingSoon}
          </div>
          <p className="text-white/25 text-[15px] leading-relaxed">
            {p.comingDesc}
          </p>

        </div>
      </div>
    </div>
  );
}
