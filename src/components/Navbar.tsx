"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("nav");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: preserve locale when navigating to homepage anchor from other pages
      const localeMatch = window.location.pathname.match(/^\/(en|fr)(?:\/|$)/);
      const localePrefix = localeMatch?.[1] ? `/${localeMatch[1]}` : "";
      window.location.assign(`${localePrefix}/#${id}`);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="ContentForge" className="w-8 h-8" />
            <span className="text-white font-bold text-lg tracking-tight">CONTENTFORGE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              type="button"
              onClick={() => scrollToSection("concept")}
              className="text-gray-300 hover:text-[#ffd700] transition-colors font-medium"
            >
              {t("concept")}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("use-cases")}
              className="text-gray-300 hover:text-[#ffd700] transition-colors font-medium"
            >
              {t("usages")}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("resources")}
              className="text-gray-300 hover:text-[#ffd700] transition-colors font-medium"
            >
              {t("samples")}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("pricing")}
              className="text-gray-300 hover:text-[#ffd700] transition-colors font-medium"
            >
              {t("pricing")}
            </button>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-[#ffd700] transition-colors font-medium"
            >
              {t("contact")}
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => scrollToSection("pricing")}
              className="gold-gradient text-[#0a0e27] px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide hover:scale-105 transition-transform"
            >
              {t("buyNow")}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-white p-2"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu-drawer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-[#0a0e27] border-l border-white/10 transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-white p-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="mt-12 flex flex-col gap-6">
              <button
                type="button"
                onClick={() => scrollToSection("concept")}
                className="text-white text-lg font-medium text-left hover:text-[#ffd700] transition-colors"
              >
                {t("concept")}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("use-cases")}
                className="text-white text-lg font-medium text-left hover:text-[#ffd700] transition-colors"
              >
                {t("usages")}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("resources")}
                className="text-white text-lg font-medium text-left hover:text-[#ffd700] transition-colors"
              >
                {t("samples")}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("pricing")}
                className="text-white text-lg font-medium text-left hover:text-[#ffd700] transition-colors"
              >
                {t("pricing")}
              </button>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-lg font-medium hover:text-[#ffd700] transition-colors"
              >
                {t("contact")}
              </Link>

              <div className="mt-6 pt-6 border-t border-white/10">
                <LanguageSwitcher />
              </div>

              <button
                type="button"
                onClick={() => scrollToSection("pricing")}
                className="gold-gradient text-[#0a0e27] px-6 py-3 rounded-full font-bold text-center uppercase tracking-wide mt-4"
              >
                {t("buyNow")}
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[72px]" />
    </>
  );
}
