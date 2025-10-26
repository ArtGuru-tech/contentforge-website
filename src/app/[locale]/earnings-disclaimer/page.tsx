"use client"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { useLocale } from 'next-intl'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function EarningsDisclaimerPage() {
  const locale = useLocale()
  const isFrench = locale === 'fr'

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-[#003399] mb-8">
            {isFrench ? "Avertissement sur les Revenus et les Résultats" : "Earnings and Results Disclaimer"}
          </h1>
          <p className="text-gray-600 mb-8">
            {isFrench ? "Dernière mise à jour : 25 octobre 2025" : "Last updated: October 25, 2025"}
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-[#003399]">
            <p className="text-gray-700 font-medium">
              {isFrench
                ? "ContentForge.cc fournit des produits numériques à Droits de Label Privé (PLR) qui peuvent être rebrandés et vendus par nos clients. Cependant, nous ne garantissons en aucun cas les revenus que vous pourrez ou ne pourrez pas générer grâce à l'utilisation de nos produits."
                : "ContentForge.cc provides Private Label Rights (PLR) digital products that can be rebranded and sold by our customers. However, we make no guarantee regarding the income you may or may not earn through the use of our products."}
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">
              {isFrench ? "Les Résultats Individuels Varient" : "Individual Results Vary"}
            </h2>
            <p className="text-gray-700 mb-4">
              {isFrench
                ? "Vos résultats dépendront de nombreux facteurs, notamment mais sans s'y limiter : votre connaissance du marché, votre expérience commerciale, votre éthique de travail, votre capacité marketing, la taille de votre audience, le choix de votre niche et les conditions économiques."
                : "Your results will depend on numerous factors including but not limited to: your market knowledge, business experience, work ethic, marketing ability, audience size, niche selection, and economic conditions."}
            </p>
            <p className="text-gray-700">
              {isFrench
                ? "Créer une entreprise rentable nécessite des efforts, de la constance et le développement de compétences."
                : "Building a profitable business requires effort, consistency, and skill development."}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">
              {isFrench ? "Aucun Revenu Garanti" : "No Guaranteed Income"}
            </h2>
            <div className="bg-amber-50 p-6 rounded-lg mb-4 border-l-4 border-amber-500">
              <p className="text-gray-700 mb-4">
                {isFrench
                  ? "Tous les témoignages, études de cas ou exemples de revenus affichés sur ce site Web représentent des résultats exceptionnels et ne sont pas typiques. Ces exemples ne doivent pas être interprétés comme une promesse ou une garantie de vos revenus ou de votre niveau de revenu."
                  : "Any testimonials, case studies, or earnings examples shown on this website represent exceptional results and are not typical. These examples should not be interpreted as a promise or guarantee of your earnings or income level."}
              </p>
              <p className="text-gray-700 font-semibold">
                {isFrench
                  ? "L'acheteur moyen de produits PLR peut ne générer aucun revenu du tout."
                  : "The average purchaser of PLR products may not generate any income at all."}
              </p>
            </div>
            <p className="text-gray-700">
              {isFrench
                ? "Les témoignages de réussite présentés sur ContentForge.cc sont réels mais représentent la fourchette supérieure des résultats obtenus par les clients qui ont appliqué des efforts constants et des stratégies marketing efficaces."
                : "Success stories featured on ContentForge.cc are real but represent the upper range of outcomes achieved by customers who applied consistent effort and effective marketing strategies."}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">
              {isFrench ? "Valeur du Produit vs Allégations de Revenus" : "Product Value vs. Income Claims"}
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                {isFrench
                  ? "Les produits ContentForge.cc sont fournis comme outils commerciaux et matières premières. Nous garantissons la qualité et les droits de licence commerciale de nos produits numériques, mais nous ne pouvons pas et ne garantissons pas que vous les vendrez avec succès ou générerez des revenus."
                  : "ContentForge.cc products are provided as business tools and raw materials. We guarantee the quality and commercial license rights of our digital products, but we cannot and do not guarantee that you will successfully sell them or generate revenue."}
              </p>
              <p>
                {isFrench
                  ? "Toute référence au potentiel de revenus, aux exemples de revenus ou aux opportunités de croissance commerciale ne sont que des exemples illustratifs et ne doivent pas être considérés comme des résultats typiques."
                  : "Any references to income potential, revenue examples, or business growth opportunities are illustrative examples only and should not be considered typical results."}
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">
              {isFrench ? "Votre Responsabilité" : "Your Responsibility"}
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                {isFrench
                  ? "Vous êtes seul responsable de vos résultats commerciaux. ContentForge.cc n'est pas responsable du succès ou de l'échec de vos décisions commerciales liées à toute information présentée par notre entreprise ou nos produits."
                  : "You are solely responsible for your business results. ContentForge.cc is not liable for the success or failure of your business decisions relating to any information presented by our company or our products."}
              </p>
              <p className="text-gray-700 font-medium">
                {isFrench
                  ? "Le succès en affaires dépend de vos propres actions, décisions et dévouement."
                  : "Success in business depends on your own actions, decisions, and dedication."}
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">
              {isFrench ? "Conformité Légale" : "Legal Compliance"}
            </h2>
            <p className="text-gray-700">
              {isFrench
                ? "Il est de votre responsabilité de vous assurer que votre utilisation des produits ContentForge.cc est conforme à toutes les lois, réglementations et normes publicitaires applicables dans votre juridiction."
                : "It is your responsibility to ensure that your use of ContentForge.cc products complies with all applicable laws, regulations, and advertising standards in your jurisdiction."}
            </p>
          </section>

          <div className="bg-gray-100 p-6 rounded-lg mt-12">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">
              {isFrench ? "Des Questions ?" : "Questions?"}
            </h2>
            <p className="text-gray-700 mb-4">
              {isFrench ? (
                <>
                  Si vous avez des questions concernant cet Avertissement sur les Revenus, veuillez nous contacter via notre <Link href="/contact" className="text-[#003399] hover:underline font-medium">page de contact</Link>.
                </>
              ) : (
                <>
                  If you have any questions about this Earnings Disclaimer, please contact us through our <Link href="/contact" className="text-[#003399] hover:underline font-medium">contact page</Link>.
                </>
              )}
            </p>
            <p className="text-gray-700">
              <strong>{isFrench ? "Société :" : "Company:"}</strong> BAKCHICH SAS<br />
              <strong>{isFrench ? "Adresse :" : "Address:"}</strong> 60 RUE FRANCOIS IER, PARIS, 75008, France
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
