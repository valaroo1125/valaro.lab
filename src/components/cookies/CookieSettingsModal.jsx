import React from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const GREEN = "#2da67a";

export default function CookieSettingsModal({
  analytics,
  setAnalytics,
  onAllowAll,
  onRejectAll,
  onConfirm,
  onClose,
}) {
  const { t } = useLanguage();
  const c = t.cookies;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      role="dialog"
      aria-modal="true"
      aria-label={c.title}
    >
      <div
        className="relative w-full max-w-lg rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto"
        style={{ background: "#ffffff" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-black/50 hover:text-black transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div
          className="px-7 md:px-9 pt-8 pb-7"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span
            className="block text-[15px] font-black tracking-tight"
            style={{
              background: "linear-gradient(90deg, #2da67a, #66ff99)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            VALARO LAB
          </span>
          <h2 className="text-black text-[22px] font-bold mt-2 leading-snug">
            {c.title}
          </h2>

          <p className="mt-4 text-[13px] leading-relaxed text-black/70">
            {c.body1}
            <span
              className="underline font-medium cursor-pointer"
              style={{ color: GREEN }}
            >
              {c.policy}
            </span>
            .
          </p>

          <button
            onClick={onAllowAll}
            className="w-full mt-5 py-3 rounded text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: GREEN }}
          >
            {c.allowAll}
          </button>

          <h3 className="mt-7 mb-2 text-[15px] font-bold text-black">
            {c.manage}
          </h3>

          <div className="py-3 border-t border-black/10 flex items-center justify-between gap-4">
            <div>
              <p className="text-[14px] font-semibold text-black">{c.necessary}</p>
              <p className="text-[12px] text-black/50 mt-0.5">{c.necessaryDesc}</p>
            </div>
            <span
              className="text-[12px] font-semibold shrink-0"
              style={{ color: GREEN }}
            >
              {c.alwaysActive}
            </span>
          </div>

          <div className="py-3 border-t border-b border-black/10 flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-[14px] font-semibold text-black">{c.analytics}</p>
              <p className="text-[12px] text-black/50 mt-0.5">{c.analyticsDesc}</p>
            </div>
            <button
              onClick={() => setAnalytics(!analytics)}
              role="switch"
              aria-checked={analytics}
              aria-label={c.analytics}
              className="relative w-11 h-6 rounded-full shrink-0 transition-colors duration-200 focus:outline-2 focus:outline-offset-2"
              style={{ background: analytics ? GREEN : "#d4d4d4" }}
            >
              <span
                className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200"
                style={{ transform: analytics ? "translateX(20px)" : "translateX(0)" }}
              />
            </button>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={onRejectAll}
              className="flex-1 py-3 rounded text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: GREEN }}
            >
              {c.rejectAll}
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 py-3 rounded text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: GREEN }}
            >
              {c.confirm}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
