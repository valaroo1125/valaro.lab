import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/LanguageContext";
import SocialButtons from "@/components/SocialButtons";
const WORDMARK_IMAGE = "https://media.base44.com/images/public/6a341209f510fd74c1fecf1f/01527db8d_Screenshot2026-11-01at182638.png";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const scrollToAbout = () => {
    document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        className="relative w-full px-6 lg:px-12 py-20 lg:py-24 lg:min-h-[620px] overflow-hidden opacity-100"
        style={{ background: "#050505" }}>
        
        <div className="flex flex-col lg:flex-row lg:items-center gap-14 lg:gap-16 max-w-6xl lg:ml-10">
          {/* Wordmark — background of the section on mobile/tablet, right half on desktop */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none lg:left-auto lg:right-0 lg:w-[62%] lg:px-6 lg:py-4">
            <img
              src={WORDMARK_IMAGE}
              alt=""
              className="w-full h-full object-cover scale-[0.82] md:scale-100 md:-translate-y-10 lg:translate-y-0 lg:object-contain lg:object-right"
              style={{ mixBlendMode: "screen" }} />
            
          </div>

          {/* Links + socials */}
          <div className="relative z-10 w-full lg:w-[44%] lg:flex-none">
            <div className="flex flex-col items-start gap-y-3 lg:gap-y-6">
              <Link
                to="/servicii"
                className="text-white/40 hover:text-white text-[15px] lg:text-[34px] transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                
                {t.nav.servicii}
              </Link>
              <Link
                to="/portfolio"
                className="text-white/40 hover:text-white text-[15px] lg:text-[34px] transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                
                {t.nav.portofoliu}
              </Link>
              <button
                onClick={scrollToAbout}
                className="text-white/40 hover:text-white text-[15px] lg:text-[34px] transition-colors duration-300 text-left"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                
                {t.nav.despreNoi}
              </button>
              <Link
                to="/contact"
                className="text-white/40 hover:text-white text-[15px] lg:text-[34px] transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                
                {t.nav.contact}
              </Link>
              <div className="mt-7">
                <SocialButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <footer
        className="w-full px-6 md:px-12 py-6 border-t border-white/[0.07]"
        style={{ background: "#050505" }}>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <p
            className="text-white/20 text-[12px]"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            
            {f.copyright}
          </p>
          <div className="flex items-center gap-6">
            <span
              className="text-white/20 text-[12px] cursor-pointer hover:text-white/40 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              
              {f.privacy}
            </span>
            <span
              className="text-white/20 text-[12px] cursor-pointer hover:text-white/40 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              
              {f.terms}
            </span>
          </div>
        </div>
      </footer>
    </>);

}
