import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Globe, ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const LANGUAGES = [
  { code: "ro", label: "Română" },
  { code: "en", label: "English" },
];

const LOGO = "https://media.base44.com/images/public/6a341209f510fd74c1fecf1f/08758654d_ChatGPTImageMay7202608_56_02PM.png";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [barHidden, setBarHidden] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Mobile / tablet bar: hides while scrolling down, slides back in when scrolling up
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setBarHidden(y > lastY && y > 60);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  const handleDespreNoi = () => {
    setMobileOpen(false);
    if (location.pathname === '/') {
      document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 600);
    }
  };

  const linkClass = "text-[15px] font-medium text-white/80 hover:text-white transition-colors duration-300 focus:outline-2 focus:outline-white focus:outline-offset-4";
  const linkStyle = { fontFamily: "'Inter', sans-serif", letterSpacing: "0.01em" };

  return (
    <>
      {/* Desktop navbar */}
      <nav
        className="hidden lg:flex fixed top-0 left-0 right-0 z-50 items-center justify-end px-14 h-16"
        style={{ background: "transparent" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-10">
          <Link to="/servicii" className={linkClass} style={linkStyle}>{t.nav.servicii}</Link>
          <Link to="/portfolio" className={linkClass} style={linkStyle}>{t.nav.portofoliu}</Link>
          <button onClick={handleDespreNoi} className={linkClass} style={linkStyle}>{t.nav.despreNoi}</button>
          <Link to="/contact" className={linkClass} style={linkStyle}>{t.nav.contact}</Link>

          {/* Language switcher (desktop) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className={`flex items-center gap-2 ${linkClass}`}
              style={linkStyle}
              aria-label={`Language: ${currentLang.label}`}
              aria-expanded={langOpen}
            >
              <Globe size={16} className="text-white/60" />
              <span>{currentLang.label}</span>
              {langOpen ? <ChevronUp size={14} className="text-white/60" /> : <ChevronDown size={14} className="text-white/60" />}
            </button>

            {langOpen && (
              <div
                className="absolute right-0 top-[calc(100%+12px)] min-w-[160px] rounded-lg overflow-hidden z-50"
                style={{ background: "#1a1a1a", boxShadow: "0 8px 32px rgba(0,0,0,0.6)" }}
                role="menu"
                aria-label="Language options"
              >
                {LANGUAGES.map((l, i) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    className={`w-full text-left px-5 py-3.5 text-[15px] transition-colors duration-200 focus:outline-2 focus:outline-white focus:outline-offset-0 ${
                      l.code === lang ? "text-white font-semibold" : "text-white/50 font-normal hover:text-white/80"
                    } ${i > 0 ? "border-t border-white/[0.07]" : ""}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    role="menuitem"
                    aria-current={l.code === lang ? "true" : undefined}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

      </nav>

      {/* Mobile / tablet navbar — black bar, centred logo, menu on the right */}
      <nav
        data-navbar
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-end px-5 transition-transform duration-500 ease-out ${
          barHidden ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ background: "#050505" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <img
          src={LOGO}
          alt="Valaro"
          className="absolute left-1/2 -translate-x-1/2 h-16 w-auto object-contain"
          style={{ mixBlendMode: "screen" }}
        />

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="text-white/80 hover:text-white transition-colors duration-300 focus:outline-2 focus:outline-white focus:outline-offset-4"
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu — full screen overlay */}
      {mobileOpen && (
        <div
          data-navbar
          className="fixed inset-0 z-[60] lg:hidden flex flex-col overflow-y-auto"
          style={{ background: "#000000" }}
        >
          {/* Close button top-right */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white hover:text-white/70 transition-colors focus:outline-2 focus:outline-white focus:outline-offset-4"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          {/* Nav links — centered vertically */}
          <div className="flex-1 flex flex-col justify-center px-8 gap-1">
            <Link to="/servicii" onClick={() => setMobileOpen(false)} className="py-4 text-[28px] font-bold text-white hover:text-white/70 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
              {t.nav.servicii}
            </Link>
            <Link to="/portfolio" onClick={() => setMobileOpen(false)} className="py-4 text-[28px] font-bold text-white hover:text-white/70 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
              {t.nav.portofoliu}
            </Link>
            <button onClick={handleDespreNoi} className="py-4 text-left text-[28px] font-bold text-white hover:text-white/70 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
              {t.nav.despreNoi}
            </button>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="py-4 text-[28px] font-bold text-white hover:text-white/70 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
              {t.nav.contact}
            </Link>
          </div>

          {/* Language selector at bottom — always reachable on mobile and tablet */}
          <div className="shrink-0 px-8 pb-10 pt-6 border-t border-white/[0.08]">
            <div className="flex items-center gap-2 text-[16px] text-white/60 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              <Globe size={16} />
              <span>{currentLang.label}</span>
              <ChevronDown size={14} className="text-white/40" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {LANGUAGES.map(l => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setMobileOpen(false); }}
                  className={`px-4 py-3 text-[15px] rounded border transition-colors ${l.code === lang ? "text-white font-semibold border-white/20 bg-white/5" : "text-white/50 border-white/10 hover:text-white/80"}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
