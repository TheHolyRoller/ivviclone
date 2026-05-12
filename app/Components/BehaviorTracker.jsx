"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const CONSENT_COOKIE = "ivvi_cookie_consent";
const USER_COOKIE = "ivvi_uid";
const BEHAVIOR_COOKIE = "ivvi_behavior";
const MAX_COOKIE_AGE = 60 * 60 * 24 * 365;
const MAX_VISITS_STORED = 20;

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

function setCookie(name, value, maxAge = MAX_COOKIE_AGE) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; samesite=lax`;
}

function deleteCookie(name) {
  document.cookie = `${name}=; path=/; max-age=0; samesite=lax`;
}

function generateAnonymousId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `anon_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function parseBehaviorCookie(value) {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export default function BehaviorTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const trackBehavior = () => {
      const consent = getCookie(CONSENT_COOKIE);

      if (consent === "rejected") {
        deleteCookie(USER_COOKIE);
        deleteCookie(BEHAVIOR_COOKIE);
        return;
      }

      if (consent !== "accepted") {
        return;
      }

      const currentUrl = searchParams?.toString()
        ? `${pathname}?${searchParams.toString()}`
        : pathname;

      let userId = getCookie(USER_COOKIE);

      if (!userId) {
        userId = generateAnonymousId();
        setCookie(USER_COOKIE, userId);
      }

      const existingBehavior = parseBehaviorCookie(getCookie(BEHAVIOR_COOKIE));
      const previousVisits = existingBehavior?.visits || [];
      const previousTotalVisits = existingBehavior?.totalVisits || 0;

      const updatedBehavior = {
        userId,
        totalVisits: previousTotalVisits + 1,
        lastSeenAt: new Date().toISOString(),
        visits: [
          ...previousVisits.slice(-(MAX_VISITS_STORED - 1)),
          {
            path: currentUrl,
            at: new Date().toISOString(),
          },
        ],
      };

      setCookie(BEHAVIOR_COOKIE, JSON.stringify(updatedBehavior));
    };

    trackBehavior();
    window.addEventListener("ivvi-cookie-consent-updated", trackBehavior);

    return () => {
      window.removeEventListener("ivvi-cookie-consent-updated", trackBehavior);
    };
  }, [pathname, searchParams]);

  return null;
}
