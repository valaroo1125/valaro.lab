import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

const GREEN = "#2da67a";

export default function CookieBanner({ onAcceptAll, onRejectAll, onOpenSettings }) {
  const { t } = useLanguage();
  const c = t.cookies;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[70] shadow-2xl"
      style={{ background: "#ffffff" }}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 md:py-4 flex flex-col md:flex-row md:items-center gap-2.5 md:gap-8">
        <p
          className="flex-1 text-[11px] md:text-[12.5px] leading-snug"
          style={{ color: "#1a1a1a", fontFamily: "'Inter', sans-serif" }}
        >
          {c.banner1}
          <span className="underline cursor-pointer font-medium" style={{ color: GREEN }}>
            {c.policy}
          </span>
          .
        </p>
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <button
            onClick={onOpenSettings}
            className="underline text-[11px] md:text-[12px] px-1 py-1.5 whitespace-nowrap"
            style={{ color: "#1a1a1a", fontFamily: "'Inter', sans-serif" }}
          >
            {c.settings}
          </button>
          <button
            onClick={onRejectAll}
            className="flex-1 md:flex-none px-3.5 md:px-5 py-2 rounded text-[11px] md:text-[12px] font-semibold text-white transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: GREEN, fontFamily: "'Inter', sans-serif" }}
          >
            {c.rejectAll}
          </button>
          <button
            onClick={onAcceptAll}
            className="flex-1 md:flex-none px-3.5 md:px-5 py-2 rounded text-[11px] md:text-[12px] font-semibold text-white transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: GREEN, fontFamily: "'Inter', sans-serif" }}
          >
            {c.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
