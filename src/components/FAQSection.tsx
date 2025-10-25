"use client"

import { useTranslations } from 'next-intl'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  const t = useTranslations('faq');

  return (
    <section id="faq" className="px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="bg-[#003399] text-white px-4 py-2 rounded-full inline-block text-sm mb-6 font-semibold">
            {t('badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t('headline')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="bg-gray-50 rounded-lg px-6 border-0">
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline">
              {t('question1')}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed">
              {t('answer1')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-gray-50 rounded-lg px-6 border-0">
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline">
              {t('question2')}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed">
              {t('answer2')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-gray-50 rounded-lg px-6 border-0">
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline">
              {t('question3')}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed">
              {t('answer3')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-gray-50 rounded-lg px-6 border-0">
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline">
              {t('question4')}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed">
              {t('answer4')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-gray-50 rounded-lg px-6 border-0">
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline">
              {t('question5')}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed">
              {t('answer5')}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
