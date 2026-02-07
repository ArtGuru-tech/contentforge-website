"use client";

import { useEffect } from "react";
import CookieConsent from "@/components/CookieConsent";
import PaddleInitializer from "@/components/PaddleInitializer";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <>
      <PaddleInitializer />
      <CookieConsent />
      <div className="antialiased">{children}</div>
    </>
  );
}
