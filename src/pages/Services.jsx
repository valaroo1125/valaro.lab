import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const ILLUSTRATION_URL = "https://media.base44.com/images/public/6a341209f510fd74c1fecf1f/8668abfc8_e0f587ba0_Image1.jpg";

export default function Services() {
  const { t } = useLanguage();
  const s = t.serviciiPage;
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCereOferta = (index) => {
    navigate(`/contact?service=${index}`);
  };

  return (
    <div className="min-h-screen w-full" style={{ background: "#050505", fontFamily: "'Inter', sans-serif" }}>
      {/* Top bar */}
      <div className="flex items-center justify-end px-8 md:px-14 py-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-[14px] text-white/50 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft size={14} />
          <span>{t.portfolio?.back}</span>
        </Link>
      </div>

      {/* Header: Image + Title */}
      <div className="px-8 md:px-14 pb-16 flex flex-col md:flex-row gap-10 md:gap-16 items-center max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={ILLUSTRATION_URL} alt="" className="w-full max-w-md object-contain" />
        </div>
        <div className="w-full md:w-1/2">
          <h1
            className="text-white font-black leading-tight"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            {s.title}
            <br />
            {s.subtitle}
          </h1>
        </div>
      </div>

      {/* Service items */}
      <div className="px-8 md:px-14 pb-20 max-w-6xl mx-auto">
        {s.items.map((item, i) => (
          <div
            key={i}
            className="py-5 border-b border-white/10 flex items-center justify-between cursor-pointer"
            onClick={() => setActiveIndex(i)}
            onMouseEnter={() => setActiveIndex(i)}
          >
            <div className="flex items-center gap-4">
              <span
                className="w-2.5 h-2.5 rounded-[2px] flex-shrink-0 transition-colors duration-300"
                style={{ background: i === activeIndex ? "#4ecfa8" : "rgba(255,255,255,0.15)" }}
              />
              <span
                className={`text-[15px] md:text-[17px] transition-colors duration-300 ${
                  i === activeIndex ? "text-white font-semibold" : "text-white/40 font-medium"
                }`}
              >
                {item}
              </span>
            </div>
            {i === activeIndex && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCereOferta(i);
                }}
                className="flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white rounded transition-opacity hover:opacity-80"
                style={{ background: "#2da67a" }}
              >
                {s.cta}
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
