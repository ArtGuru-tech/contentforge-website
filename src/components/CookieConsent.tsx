"use client"

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

declare global {
  interface Window {
    gtag?: (command: string, action: string, params: Record<string, string>) => void
    dataLayer?: Array<Record<string, unknown>>
  }
}

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  advertising: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    advertising: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent)
        setPreferences(saved)
        applyConsent(saved)
      } catch (e) {
        setShowBanner(true)
      }
    }
  }, [])

  const applyConsent = (prefs: CookiePreferences) => {
    // Analytics consent
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
      })
    }

    if (window.dataLayer && prefs.analytics) {
      window.dataLayer.push({
        'event': 'consent_accepted_analytics',
      })
    }

    // Advertising consent
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: prefs.advertising ? 'granted' : 'denied',
        ad_user_data: prefs.advertising ? 'granted' : 'denied',
        ad_personalization: prefs.advertising ? 'granted' : 'denied',
      })
    }

    if (window.dataLayer && prefs.advertising) {
      window.dataLayer.push({
        'event': 'consent_accepted_advertising',
      })
    }
  }

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs))
    setPreferences(prefs)
    applyConsent(prefs)
    setShowBanner(false)
    setShowPreferences(false)
  }

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      advertising: true
    })
  }

  const rejectNonEssential = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      advertising: false
    })
  }

  const saveCustomPreferences = () => {
    savePreferences(preferences)
  }

  if (!showBanner && !showPreferences) {
    return (
      <button
        onClick={() => setShowPreferences(true)}
        className="fixed bottom-4 left-4 z-50 bg-[#003399] hover:bg-[#002266] text-white rounded-full p-3 shadow-lg transition-colors"
        aria-label="Cookie preferences"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </button>
    )
  }

  return (
    <>
      {/* Background overlay */}
      {showBanner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      )}

      {/* Cookie Banner */}
      {showBanner && !showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-[#003399] shadow-2xl p-6 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">We use cookies</h3>
                <p className="text-gray-700 text-sm">
                  We use cookies on our site to enhance your user experience, provide personalized content, and analyze our traffic.{' '}
                  <a href="/privacy" className="text-[#003399] hover:underline font-semibold">
                    Cookie Policy
                  </a>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={rejectNonEssential}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  Reject non-essential
                </button>
                <button
                  onClick={() => {
                    setShowBanner(false)
                    setShowPreferences(true)
                  }}
                  className="px-6 py-3 border-2 border-[#003399] text-[#003399] rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
                >
                  Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-3 bg-[#003399] hover:bg-[#002266] text-white rounded-lg font-semibold transition-colors whitespace-nowrap"
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowPreferences(false)} />
          <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Customize your cookie preferences</h2>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-700 mb-6">
                We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.
              </p>

              {/* Necessary Cookies */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Necessary</h3>
                    <p className="text-sm text-gray-600">
                      These cookies are necessary for the website to function properly and cannot be switched off. They help with things like logging in and setting your privacy preferences.
                    </p>
                  </div>
                  <div className="ml-4 px-3 py-1 bg-gray-200 text-gray-700 text-sm font-semibold rounded">
                    Always enabled
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h3>
                    <p className="text-sm text-gray-600">
                      These cookies help us improve the site by tracking which pages are most popular and how visitors move around the site.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003399]"></div>
                  </label>
                </div>
              </div>

              {/* Advertising Cookies */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Advertising</h3>
                    <p className="text-sm text-gray-600">
                      These cookies provide extra features and personalization to improve your experience. They may be set by us or by partners whose services we use.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.advertising}
                      onChange={(e) => setPreferences({ ...preferences, advertising: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003399]"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 flex gap-3">
              <button
                onClick={rejectNonEssential}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Reject non-essential
              </button>
              <button
                onClick={saveCustomPreferences}
                className="flex-1 px-6 py-3 bg-[#003399] hover:bg-[#002266] text-white rounded-lg font-semibold transition-colors"
              >
                Save preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
