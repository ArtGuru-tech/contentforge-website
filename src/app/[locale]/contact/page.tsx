"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import LanguageSwitcher from "@/components/LanguageSwitcher"

export default function ContactPage() {
  const t = useTranslations('contact')
  const tNav = useTranslations('nav')
  const tFooter = useTranslations('footer')

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setStatus("error")
      setErrorMessage(t('errorMessage'))
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto bg-white border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 relative">
            <img
              src="/logo.svg"
              alt="ContentForge Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[#003399] font-bold text-lg">CONTENTFORGE</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{tNav('home')}</Link>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{tNav('resources')}</a>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{tNav('freeResources')}</a>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{tNav('blog')}</a>
          <Link href="/contact" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{tNav('contact')}</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Button className="bg-[#003399] hover:bg-[#002266] text-white border-0">
            {tNav('signIn')}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">{t('headline')}</h1>
          <p className="text-gray-600 text-lg">{t('description')}</p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-3xl">✓</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('successTitle')}</h2>
                <p className="text-gray-600 mb-6">{t('successMessage')}</p>
                <Button
                  onClick={() => setStatus("idle")}
                  className="bg-[#003399] hover:bg-[#002266] text-white"
                >
                  {t('sendAnotherButton')}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('nameLabel')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003399] focus:border-transparent"
                      placeholder={t('namePlaceholder')}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('emailLabel')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003399] focus:border-transparent"
                      placeholder={t('emailPlaceholder')}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('subjectLabel')}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003399] focus:border-transparent"
                    >
                      <option value="">Select a subject...</option>
                      <option value="general">{t('subjectGeneral')}</option>
                      <option value="support">{t('subjectSupport')}</option>
                      <option value="billing">{t('subjectBilling')}</option>
                      <option value="partnership">{t('subjectPartnership')}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('messageLabel')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003399] focus:border-transparent resize-none"
                      placeholder={t('messagePlaceholder')}
                    />
                  </div>

                  {/* Error Message */}
                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#003399] hover:bg-[#002266] text-white py-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? t('submitting') : t('submitButton')}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#003399] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">💬</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
            <p className="text-gray-600 text-sm">We typically respond within 48 business hours</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-[#00CED1] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🔒</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Secure & Private</h3>
            <p className="text-gray-600 text-sm">Your information is kept confidential and secure</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">✓</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600 text-sm">Get help from our dedicated support team</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-16 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 relative">
                  <img
                    src="/logo.svg"
                    alt="ContentForge Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white font-bold text-lg">CONTENTFORGE</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">{tFooter('pagesTitle')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-[#FFD700] transition-colors">{tFooter('home')}</Link></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{tFooter('resources')}</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{tFooter('freeResources')}</a></li>
                <li><Link href="/contact" className="hover:text-[#FFD700] transition-colors">{tFooter('contact')}</Link></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{tFooter('blog')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">{tFooter('productsTitle')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{tFooter('masterLibrary')}</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{tFooter('customDigitalProduct')}</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{tFooter('plrProducts')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">{tFooter('legalTitle')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/terms" className="hover:text-[#FFD700] transition-colors">{tFooter('terms')}</a></li>
                <li><a href="/privacy" className="hover:text-[#FFD700] transition-colors">{tFooter('privacy')}</a></li>
                <li><a href="/plr" className="hover:text-[#FFD700] transition-colors">{tFooter('plr')}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>{tFooter('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
