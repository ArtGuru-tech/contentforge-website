"use client"

import { useEffect } from 'react'

declare global {
  interface Window {
    silktideCookieBannerManager?: {
      updateCookieBannerConfig: (config: unknown) => void
    }
    gtag?: (command: string, action: string, params: Record<string, string>) => void
    dataLayer?: Array<Record<string, unknown>>
  }
}

export default function CookieConsent() {
  useEffect(() => {
    // Load Silktide CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.id = 'silktide-consent-manager-css'
    link.href = 'https://cdn.jsdelivr.net/npm/@silktide/cookie-consent@1/dist/cookie-consent.min.css'
    document.head.appendChild(link)

    // Load Silktide JS
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@silktide/cookie-consent@1/dist/cookie-consent.min.js'
    script.async = true

    script.onload = () => {
      if (window.silktideCookieBannerManager) {
        window.silktideCookieBannerManager.updateCookieBannerConfig({
          background: {
            showBackground: true
          },
          cookieIcon: {
            position: "bottomLeft"
          },
          cookieTypes: [
            {
              id: "necessary",
              name: "Necessary",
              description: "<p>These cookies are necessary for the website to function properly and cannot be switched off. They help with things like logging in and setting your privacy preferences.</p>",
              required: true,
              onAccept: function() {
                console.log('Necessary cookies accepted (always enabled)')
              }
            },
            {
              id: "analytics",
              name: "Analytics",
              description: "<p>These cookies help us improve the site by tracking which pages are most popular and how visitors move around the site.</p>",
              defaultValue: true,
              onAccept: function() {
                if (typeof window.gtag === 'function') {
                  window.gtag('consent', 'update', {
                    analytics_storage: 'granted',
                  })
                }
                if (window.dataLayer) {
                  window.dataLayer.push({
                    'event': 'consent_accepted_analytics',
                  })
                }
              },
              onReject: function() {
                if (typeof window.gtag === 'function') {
                  window.gtag('consent', 'update', {
                    analytics_storage: 'denied',
                  })
                }
              }
            },
            {
              id: "advertising",
              name: "Advertising",
              description: "<p>These cookies provide extra features and personalization to improve your experience. They may be set by us or by partners whose services we use.</p>",
              onAccept: function() {
                if (typeof window.gtag === 'function') {
                  window.gtag('consent', 'update', {
                    ad_storage: 'granted',
                    ad_user_data: 'granted',
                    ad_personalization: 'granted',
                  })
                }
                if (window.dataLayer) {
                  window.dataLayer.push({
                    'event': 'consent_accepted_advertising',
                  })
                }
              },
              onReject: function() {
                if (typeof window.gtag === 'function') {
                  window.gtag('consent', 'update', {
                    ad_storage: 'denied',
                    ad_user_data: 'denied',
                    ad_personalization: 'denied',
                  })
                }
              }
            }
          ],
          text: {
            banner: {
              description: "<p>We use cookies on our site to enhance your user experience, provide personalized content, and analyze our traffic. <a href=\"/privacy\" target=\"_blank\">Cookie Policy.</a></p>",
              acceptAllButtonText: "Accept all",
              acceptAllButtonAccessibleLabel: "Accept all cookies",
              rejectNonEssentialButtonText: "Reject non-essential",
              rejectNonEssentialButtonAccessibleLabel: "Reject non-essential cookies",
              preferencesButtonText: "Preferences",
              preferencesButtonAccessibleLabel: "Toggle preferences"
            },
            preferences: {
              title: "Customize your cookie preferences",
              description: "<p>We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.</p>",
              creditLinkText: "Get this banner for free",
              creditLinkAccessibleLabel: "Get this banner for free from Silktide"
            }
          }
        })
      }
    }

    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return null
}
