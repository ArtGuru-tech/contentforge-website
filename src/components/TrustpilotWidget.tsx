"use client"

import { useEffect } from 'react'

interface TrustpilotWidgetProps {
  templateId?: string
  height?: string
  theme?: 'light' | 'dark'
  width?: string
  locale?: string
}

export default function TrustpilotWidget({
  templateId = '56278e9abfbbba0bdcd568bc', // Review Collector
  height = '52px',
  theme = 'dark',
  width = '100%',
  locale = 'en-US'
}: TrustpilotWidgetProps) {
  useEffect(() => {
    // Load Trustpilot widget script
    if (typeof window !== 'undefined') {
      const existingScript = document.querySelector('script[src*="trustpilot"]')

      if (!existingScript) {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
        script.async = true
        document.head.appendChild(script)
      }

      // Reload Trustpilot widgets
      interface WindowWithTrustpilot extends Window {
        Trustpilot?: {
          loadFromElement: (element: Element | null, refresh: boolean) => void
        }
      }

      const windowWithTrustpilot = window as WindowWithTrustpilot
      if (windowWithTrustpilot.Trustpilot) {
        windowWithTrustpilot.Trustpilot.loadFromElement(document.querySelector('.trustpilot-widget'), true)
      }
    }
  }, [])

  return (
    <div
      className="trustpilot-widget"
      data-locale={locale}
      data-template-id={templateId}
      data-businessunit-id="68fd43fc3bbae18328e50608"
      data-style-height={height}
      data-style-width={width}
      data-theme={theme}
      data-token="82e4b065-b47e-4c91-ba4d-661e7dbb08eb"
    >
      <a
        href="https://www.trustpilot.com/review/contentforge.cc"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm"
      >
        Trustpilot
      </a>
    </div>
  )
}
