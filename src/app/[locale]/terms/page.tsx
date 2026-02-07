"use client"

import { Link } from "@/i18n/routing"
import { useLocale } from 'next-intl'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function TermsPage() {
  const locale = useLocale()
  const isFrench = locale === 'fr'

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white font-sans">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="prose prose-lg prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold gold-text mb-4">
            {isFrench ? "Conditions Générales" : "Terms & Conditions"}
          </h1>
          <p className="text-gray-400 mb-12">
            {isFrench ? "Dernière mise à jour : 6 avril 2025" : "Last updated: April 6, 2025"}
          </p>

          <div className="glass-card p-6 rounded-xl mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "1. Informations Légales" : "1. Legal Information"}
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-[#ffd700]">{isFrench ? "Site Web :" : "Website:"}</strong> {isFrench ? "contentforge.app (le « Site ») est publié par :" : 'contentforge.app (the "Website") is published by:'}
              </p>
              <p>
                <strong className="text-white">BAKCHICH</strong>, société par actions simplifiée {isFrench ? "au capital de 100 €, immatriculée sous le numéro 942552274, dont le siège social est situé au 60 RUE FRANCOIS IER, PARIS, 75008, France." : "with share capital of €100, registered under number 942552274, with registered office at 60 RUE FRANCOIS IER, PARIS, 75008, France."}
              </p>
              <p>
                <strong className="text-[#ffd700]">{isFrench ? "Hébergeur du Site :" : "Website Host:"}</strong> Cloudflare, Paris<br />
                {isFrench ? "Adresse postale uniquement : 6 place de la Madeleine 75008 Paris" : "Postal address only: 6 place de la Madeleine 75008 Paris"}<br />
                {isFrench ? "Téléphone" : "Phone"}: +44 20 3514 6970<br />
                {isFrench ? "Site web" : "Website"}: https://www.cloudflare.com/
              </p>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "2. Champ d'Application" : "2. Scope of Application"}
            </h2>
            <p className="text-gray-300 mb-4">
              {isFrench
                ? "Les présentes Conditions Générales ont pour objet d'informer le Client des conditions de commande en ligne et de livraison des Services commandés."
                : "These General Terms and Conditions are intended to inform the Customer of the terms of online ordering and delivery of Services ordered."}
            </p>
            <p className="text-gray-300 mb-4">
              {isFrench
                ? "Les Conditions Générales s'appliquent, sans restriction ni réserve, à tous les Services proposés aux Clients par Bakchich sur le Site, indépendamment de toute clause pouvant figurer dans tout autre document."
                : "The General Terms and Conditions apply, without restriction or reservation, to all Services offered to Customers by Bakchich on the Website, regardless of any clauses that may appear in any other document."}
            </p>
            <p className="text-gray-300">
              {isFrench
                ? "Toute commande de Services implique, de la part du Client, l'adhésion pleine et entière et l'acceptation sans réserve ni restriction de ces Conditions Générales."
                : "Any order for Services implies, on the part of the Customer, full adherence and acceptance without reservation or restriction of these General Terms and Conditions."}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "3. Description des Services" : "3. Description of Services"}
            </h2>
            <p className="text-gray-300 mb-4">
              {isFrench ? "Bakchich propose à la vente :" : "Bakchich offers for sale:"}
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>{isFrench ? "Monétisation de contenu numérique et contenu exclusif" : "Digital content monetization and exclusive content"}</li>
              <li>{isFrench ? "Formules d'abonnement dont les modalités d'exécution et les caractéristiques sont décrites sur le Site" : "Subscription formulas whose execution methods and characteristics are described on the Website"}</li>
            </ul>
            <p className="text-gray-300 mb-4">
              {isFrench
                ? "Les caractéristiques essentielles de chaque Service sont décrites sur le Site et mises à jour par Bakchich. La fiche technique d'un Service peut inclure des descriptions, des photographies et des graphiques qui sont communiqués à titre illustratif uniquement et peuvent être modifiés/mis à jour sur le Site par Bakchich."
                : "The essential characteristics of each Service are described on the Website and updated by Bakchich. The technical sheet of a Service may include descriptions, photographs and graphics that are communicated for illustrative purposes only and may be modified/updated on the Website by Bakchich."}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "4. Compte Client" : "4. Customer Account"}
            </h2>
            <div className="glass-card p-6 rounded-xl mb-4">
              <h3 className="text-xl font-semibold text-[#ffd700] mb-3">
                {isFrench ? "4.1 Création d'un Compte Client" : "4.1 Creating a Customer Account"}
              </h3>
              <p className="text-gray-300 mb-4">
                {isFrench
                  ? "Le Client peut créer un compte client (ci-après le « Compte Client ») préalablement ou simultanément à l'achat de Services en ligne sur le Site. La création d'un Compte Client n'est pas obligatoire pour commander un Service."
                  : 'The Customer can create a customer account (hereinafter the "Customer Account") prior to or simultaneously with the purchase of Services online on the Website. Creating a Customer Account is not mandatory to order a Service.'}
              </p>
              <p className="text-gray-300">
                {isFrench
                  ? "Le Compte Client est créé par le Client en fournissant les informations demandées, notamment son adresse e-mail et un mot de passe."
                  : "The Customer Account is created by the Customer by providing the information requested, including their email address and a password."}
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#ffd700] mb-3">
                {isFrench ? "4.2 Fonctionnalités du Compte Client" : "4.2 Customer Account Features"}
              </h3>
              <p className="text-gray-300 mb-4">
                {isFrench ? "Le Compte Client permet au Client de :" : "The Customer Account allows the Customer to:"}
              </p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>{isFrench ? "Accéder à ses modes de paiement enregistrés et les modifier" : "Access their registered payment methods and modify them"}</li>
                <li>{isFrench ? "Accéder aux informations sur les commandes passées et/ou en cours" : "Access information on past and/or current orders"}</li>
                <li>{isFrench ? "Accéder et modifier ses informations personnelles" : "Access and modify their personal information"}</li>
                <li>{isFrench ? "Contacter Bakchich" : "Contact Bakchich"}</li>
                <li>{isFrench ? "Télécharger et imprimer ses reçus de paiement et détails de commande" : "Download and print their payment receipts and order details"}</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "5. Conditions Financières" : "5. Financial Conditions"}
            </h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-semibold text-[#ffd700]">
                {isFrench ? "5.1 Tarification" : "5.1 Pricing"}
              </h3>
              <p>
                {isFrench
                  ? "Les prix indiqués sont fermes et non révisables pendant leur période de validité, les Parties renonçant expressément aux dispositions de l'article 1195 du Code civil."
                  : "The prices indicated are firm and non-revisable during their validity period, the Parties expressly waiving the provisions of Article 1195 of the Civil Code."}
              </p>

              <h3 className="text-xl font-semibold text-[#ffd700] mt-6">
                {isFrench ? "5.2 Modes de Paiement" : "5.2 Payment Methods"}
              </h3>
              <p>
                {isFrench
                  ? "La commande est payable immédiatement par carte bancaire, en ligne uniquement. Le paiement de la commande est comptant, le Client n'aura pas la possibilité de payer en plusieurs fois."
                  : "The order is payable immediately by credit card, online only. Payment for the order is cash, the Customer will not have the possibility to pay in installments."}
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "6. Droit de Rétractation" : "6. Right of Withdrawal"}
            </h2>
            <p className="text-gray-300 mb-4">
              {isFrench
                ? "Conformément aux dispositions de l'article L.121-21 du Code de la consommation français, le Client dispose d'un délai de quatorze (14) jours pour exercer son droit de rétractation d'un contrat conclu à distance, sans frais et sans avoir à justifier de motifs particuliers."
                : "In accordance with the provisions of Article L.121-21 of the French Consumer Code, the Customer has a period of fourteen (14) days to exercise their right of withdrawal from a contract concluded at a distance, without charge and without having to justify particular reasons."}
            </p>
            <p className="text-gray-300">
              {isFrench
                ? "Ce délai commence à courir à compter du jour de la livraison de la commande au Client."
                : "This period begins to run from the day of delivery of the order to the Customer."}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "7. Propriété Intellectuelle" : "7. Intellectual Property"}
            </h2>
            <p className="text-gray-300 mb-4">
              {isFrench
                ? "Les Services sont protégés par des droits de propriété intellectuelle."
                : "The Services are protected by intellectual property rights."}
            </p>
            <p className="text-gray-300 mb-4">
              {isFrench
                ? "La mise à disposition du Site ne transfère en aucun cas les droits de propriété intellectuelle du Site et de l'un quelconque de ses éléments, ni de la documentation associée, qui restent la propriété exclusive de Bakchich."
                : "The provision of the Website does not in any way transfer the intellectual property rights of the Website and any of its elements, nor of the associated documentation, which remain the exclusive property of Bakchich."}
            </p>
            <p className="text-gray-300">
              {isFrench
                ? "Aux termes des présentes Conditions Générales, Bakchich autorise le Client à accéder et à utiliser le Site exclusivement à des fins personnelles."
                : "Under the terms of these General Terms and Conditions, Bakchich authorizes the Customer to access and use the Website exclusively for personal purposes."}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "8. Responsabilité" : "8. Liability"}
            </h2>
            <p className="text-gray-300 mb-4">
              {isFrench
                ? "La responsabilité de Bakchich ne peut être engagée qu'en cas de faute ou de négligence prouvée et est limitée aux dommages directs, à l'exclusion de tout dommage indirect, de quelque nature que ce soit."
                : "Bakchich's liability can only be engaged in case of proven fault or negligence and is limited to direct damages, excluding any indirect damage, of any nature whatsoever."}
            </p>
            <p className="text-gray-300">
              {isFrench
                ? "En aucun cas, Bakchich ne sera tenu d'indemniser les dommages immatériels consécutifs ou non à un dommage matériel tels que, notamment, les pertes financières, y compris les frais généraux, la perte de profit, d'activité, de contrats, de revenus, de clients et de production ainsi que tout dommage lié à une atteinte à l'image du Client."
                : "Under no circumstances will Bakchich be required to compensate for intangible damages consequent or not to material damage such as, in particular, financial losses, including general costs, loss of profit, activity, contracts, income, customers and production as well as any damage related to damage to the Customer's image."}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "9. Loi Applicable et Litiges" : "9. Applicable Law and Disputes"}
            </h2>
            <p className="text-gray-300 mb-4">
              {isFrench
                ? "Par accord exprès entre les Parties, les présentes Conditions Générales et les opérations d'achat de Services qui en résultent sont régies par le droit français. Elles sont rédigées en français."
                : "By express agreement between the Parties, these General Terms and Conditions and the purchase operations of Services resulting therefrom are governed by French law. They are written in French."}
            </p>
            <p className="text-gray-300">
              {isFrench
                ? "Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, Bakchich adhère au Service de Médiation du e-commerce compétent pour son secteur d'activité."
                : "In accordance with the provisions of the Consumer Code concerning the amicable settlement of disputes, Bakchich adheres to the e-commerce Mediator Service competent to its sector of activity."}
            </p>
          </section>

          <div className="glass-card p-6 rounded-xl mt-12">
            <h2 className="text-2xl font-bold gold-text mb-4">
              {isFrench ? "Coordonnées" : "Contact Information"}
            </h2>
            <p className="text-gray-300 mb-2">
              <strong className="text-[#ffd700]">{isFrench ? "Société :" : "Company:"}</strong> BAKCHICH SAS
            </p>
            <p className="text-gray-300 mb-2">
              <strong className="text-[#ffd700]">{isFrench ? "Adresse :" : "Address:"}</strong> 60 RUE FRANCOIS IER, PARIS, 75008, France
            </p>
            <p className="text-gray-300 mb-2">
              <strong className="text-[#ffd700]">{isFrench ? "Immatriculation :" : "Registration:"}</strong> 942 552 274 R.C.S. Paris
            </p>
            <p className="text-gray-300">
              <strong className="text-[#ffd700]">{isFrench ? "Numéro de TVA :" : "VAT Number:"}</strong> FR37942552274
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
