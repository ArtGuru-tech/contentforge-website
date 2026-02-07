"use client"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { useTranslations } from 'next-intl'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function RefundPolicyPage() {
  const t = useTranslations('refundPolicy');

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white font-sans">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="prose prose-lg prose-invert max-w-none">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold gold-text mb-4">{t('title')}</h1>
            <p className="text-gray-400 mb-6">{t('lastUpdated')}</p>

            {/* Guarantee Badge */}
            <div className="gold-gradient p-6 rounded-xl text-[#0a0e27] mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#0a0e27] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#ffd700] text-3xl font-bold">✓</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">{t('guaranteeBadge.title')}</h2>
                  <p className="text-[#0a0e27]/80">{t('guaranteeBadge.description')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('introduction')}
            </p>
          </section>

          <hr className="my-8 border-white/10" />

          {/* Our Guarantee */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('ourGuarantee.title')}</h2>
            <div className="glass-card p-6 rounded-xl mb-4">
              <p className="text-gray-300 mb-4">{t('ourGuarantee.description')}</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>{t('ourGuarantee.point1')}</li>
                <li>{t('ourGuarantee.point2')}</li>
                <li>{t('ourGuarantee.point3')}</li>
                <li>{t('ourGuarantee.point4')}</li>
              </ul>
            </div>
          </section>

          <hr className="my-8 border-white/10" />

          {/* How to Request a Refund */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('howToRequest.title')}</h2>
            <p className="text-gray-300 mb-4">{t('howToRequest.description')}</p>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#ffd700] mb-4">{t('howToRequest.stepsTitle')}</h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center flex-shrink-0 text-[#0a0e27] font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('howToRequest.step1.title')}</h4>
                    <p className="text-gray-300">{t('howToRequest.step1.description')}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center flex-shrink-0 text-[#0a0e27] font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('howToRequest.step2.title')}</h4>
                    <p className="text-gray-300">{t('howToRequest.step2.description')}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center flex-shrink-0 text-[#0a0e27] font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('howToRequest.step3.title')}</h4>
                    <p className="text-gray-300">{t('howToRequest.step3.description')}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center flex-shrink-0 text-[#0a0e27] font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('howToRequest.step4.title')}</h4>
                    <p className="text-gray-300">{t('howToRequest.step4.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="my-8 border-white/10" />

          {/* Processing Timeline */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('processingTimeline.title')}</h2>
            <div className="glass-card p-6 rounded-xl">
              <p className="text-gray-300 mb-4">{t('processingTimeline.description')}</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong className="text-[#ffd700]">{t('processingTimeline.item1.label')}</strong> {t('processingTimeline.item1.value')}</li>
                <li><strong className="text-[#ffd700]">{t('processingTimeline.item2.label')}</strong> {t('processingTimeline.item2.value')}</li>
                <li><strong className="text-[#ffd700]">{t('processingTimeline.item3.label')}</strong> {t('processingTimeline.item3.value')}</li>
              </ul>
              <p className="text-gray-400 mt-4 text-sm italic">
                {t('processingTimeline.note')}
              </p>
            </div>
          </section>

          <hr className="my-8 border-white/10" />

          {/* Refund Method */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('refundMethod.title')}</h2>
            <p className="text-gray-300 mb-4">{t('refundMethod.description')}</p>
            <div className="glass-card p-4 rounded-xl">
              <p className="text-[#ffd700] font-semibold">{t('refundMethod.supportedMethods')}</p>
              <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-1">
                <li>{t('refundMethod.method1')}</li>
                <li>{t('refundMethod.method2')}</li>
                <li>{t('refundMethod.method3')}</li>
              </ul>
            </div>
          </section>

          <hr className="my-8 border-white/10" />

          {/* Important Conditions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('conditions.title')}</h2>
            <div className="border-l-4 border-[#ffd700] glass-card p-6 rounded-r-xl">
              <ul className="list-disc pl-6 text-gray-300 space-y-3">
                <li>{t('conditions.condition1')}</li>
                <li>{t('conditions.condition2')}</li>
                <li>{t('conditions.condition3')}</li>
                <li>{t('conditions.condition4')}</li>
                <li>{t('conditions.condition5')}</li>
              </ul>
            </div>
          </section>

          <hr className="my-8 border-white/10" />

          {/* Subscription Cancellations */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('subscriptions.title')}</h2>
            <p className="text-gray-300 mb-4">{t('subscriptions.description')}</p>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-[#ffd700] mb-3">{t('subscriptions.cancellationTitle')}</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>{t('subscriptions.point1')}</li>
                <li>{t('subscriptions.point2')}</li>
                <li>{t('subscriptions.point3')}</li>
              </ul>
            </div>
          </section>

          <hr className="my-8 border-white/10" />

          {/* Exceptions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('exceptions.title')}</h2>
            <p className="text-gray-300 mb-4">{t('exceptions.description')}</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>{t('exceptions.exception1')}</li>
              <li>{t('exceptions.exception2')}</li>
              <li>{t('exceptions.exception3')}</li>
            </ul>
          </section>

          <hr className="my-8 border-white/10" />

          {/* Contact Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t('contact.title')}</h2>
            <p className="text-gray-300 mb-4">{t('contact.description')}</p>

            <div className="glass-card p-6 rounded-xl">
              <div className="space-y-3">
                <p className="text-gray-300">
                  <strong className="text-[#ffd700]">{t('contact.contactFormLabel')}</strong>
                  <br />
                  <Link href="/contact" className="text-[#ffd700] hover:underline text-lg">
                    {t('contact.contactFormLink')}
                  </Link>
                </p>
                <p className="text-gray-300">
                  <strong className="text-[#ffd700]">{t('contact.responseTimeLabel')}</strong> {t('contact.responseTime')}
                </p>
              </div>
            </div>
          </section>

          {/* Final Statement */}
          <div className="gold-gradient text-[#0a0e27] p-8 rounded-xl text-center mt-12">
            <h3 className="text-2xl font-bold mb-3">{t('finalStatement.title')}</h3>
            <p className="text-[#0a0e27]/80 mb-4">{t('finalStatement.description')}</p>
            <Link href="/contact">
              <Button className="bg-[#0a0e27] hover:bg-[#0a0e27]/90 text-[#ffd700] font-semibold">
                {t('finalStatement.contactButton')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
