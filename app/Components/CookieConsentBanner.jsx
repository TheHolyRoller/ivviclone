"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_COOKIE = "ivvi_cookie_consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 365;

function getCookie(name) {
  const cookieName = `${name}=`;
  const parts = document.cookie.split(";");

  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.startsWith(cookieName)) {
      return decodeURIComponent(trimmed.slice(cookieName.length));
    }
  }

  return "";
}

function setCookie(name, value, maxAge = CONSENT_MAX_AGE) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; samesite=lax`;
}

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const consent = getCookie(CONSENT_COOKIE);
    const hasValidChoice = consent === "accepted" || consent === "rejected";

    if (!hasValidChoice && consent) {
      setCookie(CONSENT_COOKIE, "", 0);
    }

    setIsVisible(!hasValidChoice);
  }, []);

  const setConsent = (decision) => {
    setCookie(CONSENT_COOKIE, decision);
    setIsVisible(false);
    window.dispatchEvent(new Event("ivvi-cookie-consent-updated"));
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookieBanner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p className="cookieBannerText">
        We use optional cookies to understand how people use this site. You can accept or reject
        these cookies. Read more in our <Link href="/cookies">Cookies Policy</Link>.
      </p>
      <div className="cookieBannerActions">
        <button type="button" onClick={() => setConsent("rejected")} className="cookieBannerBtnSecondary">
          Reject
        </button>
        <button type="button" onClick={() => setConsent("accepted")} className="cookieBannerBtnPrimary">
          Accept
        </button>
      </div>
    </div>
  );
}
