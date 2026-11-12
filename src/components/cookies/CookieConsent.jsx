import React, { useState, useCallback } from "react";
import CookieBanner from "@/components/cookies/CookieBanner";
import CookieSettingsModal from "@/components/cookies/CookieSettingsModal";

const STORAGE_KEY = "valaro_cookie_consent";

function readStoredConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return typeof parsed.analytics === "boolean" ? parsed : null;
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const [consent, setConsent] = useState(readStoredConsent);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(consent ? consent.analytics : false);

  const save = useCallback((analyticsValue) => {
    const next = {
      necessary: true,
      analytics: analyticsValue,
      date: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // storage unavailable — still dismiss for this visit
    }
    setConsent(next);
    setSettingsOpen(false);
  }, []);

  if (settingsOpen) {
    return (
      <CookieSettingsModal
        analytics={analytics}
        setAnalytics={setAnalytics}
        onAllowAll={() => save(true)}
        onRejectAll={() => save(false)}
        onConfirm={() => save(analytics)}
        onClose={() => setSettingsOpen(false)}
      />
    );
  }

  if (consent) return null;

  return (
    <CookieBanner
      onAcceptAll={() => save(true)}
      onRejectAll={() => save(false)}
      onOpenSettings={() => setSettingsOpen(true)}
    />
  );
}
