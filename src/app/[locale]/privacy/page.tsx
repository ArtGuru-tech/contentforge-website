"use client"

import { Link } from "@/i18n/routing"
import { useLocale } from 'next-intl'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function PrivacyPage() {
  const locale = useLocale()
  const isFrench = locale === 'fr'

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white font-sans">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="prose prose-lg prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold gold-text mb-4">
            {isFrench ? "Politique de Confidentialité" : "Privacy Policy"}
          </h1>
          <p className="text-gray-400 mb-12">
            <strong>{isFrench ? "Dernière mise à jour :" : "Last updated:"}</strong> {isFrench ? "25 octobre 2025" : "October 25, 2025"}
          </p>

          <p className="text-gray-300 mb-6">
            {isFrench
              ? "Cette Politique de Confidentialité décrit nos politiques et procédures concernant la collecte, l'utilisation et la divulgation de vos informations lorsque vous utilisez le Service et vous informe de vos droits en matière de confidentialité et de la manière dont la loi vous protège."
              : "This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Service and informs you about your privacy rights and how the law protects you."}
          </p>

          <p className="text-gray-300 mb-8">
            {isFrench
              ? "Nous utilisons vos données personnelles pour fournir et améliorer le Service. En utilisant le Service, vous acceptez la collecte et l'utilisation d'informations conformément à cette Politique de Confidentialité."
              : "We use your personal data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy."}
          </p>

          <hr className="my-8 border-white/10" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "Interprétation et Définitions" : "Interpretation and Definitions"}
            </h2>

            <h3 className="text-xl font-semibold text-[#ffd700] mb-3">
              {isFrench ? "Définitions" : "Definitions"}
            </h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>
                <strong className="text-white">{isFrench ? "Société" : "Company"}</strong> {isFrench ? "(désignée par « la Société », « Nous », « Notre » ou « Nos ») fait référence à" : '(referred to as either "the Company", "We", "Us" or "Our") refers to'} <strong className="text-[#ffd700]">Bakchich SAS</strong>, 60 Rue François Ier, 75008 Paris, France.
              </li>
              <li>
                <strong className="text-white">{isFrench ? "Site Web" : "Website"}</strong> {isFrench ? "fait référence à" : "refers to"} <strong className="text-[#ffd700]">CONTENTFORGE</strong>, {isFrench ? "accessible depuis" : "accessible from"} <a href="https://contentforge.cc/" className="text-[#ffd700] hover:underline">https://contentforge.cc/</a>
              </li>
              <li>
                <strong className="text-white">{isFrench ? "Service" : "Service"}</strong> {isFrench ? "fait référence au Site Web." : "refers to the Website."}
              </li>
              <li>
                <strong className="text-white">{isFrench ? "Vous" : "You"}</strong> {isFrench ? "désigne la personne accédant ou utilisant le Service, ou l'entreprise ou autre entité juridique au nom de laquelle cette personne accède ou utilise le Service, selon le cas." : "means the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."}
              </li>
            </ul>
          </section>

          <hr className="my-8 border-white/10" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "Collecte et Utilisation de Vos Données Personnelles" : "Collecting and Using Your Personal Data"}
            </h2>

            <h3 className="text-xl font-semibold text-[#ffd700] mb-3">
              {isFrench ? "Types de Données Collectées" : "Types of Data Collected"}
            </h3>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                {isFrench ? "Données Personnelles" : "Personal Data"}
              </h4>
              <p className="text-gray-300 mb-3">
                {isFrench
                  ? "Lors de l'utilisation de notre Service, nous pouvons vous demander de nous fournir certaines informations personnellement identifiables telles que :"
                  : "While using our Service, we may ask you to provide us with certain personally identifiable information such as:"}
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>{isFrench ? "Adresse e-mail" : "Email address"}</li>
                <li>{isFrench ? "Prénom et nom de famille" : "First and last name"}</li>
                <li>{isFrench ? "Adresse, État, Province, Code postal, Ville" : "Address, State, Province, ZIP/Postal code, City"}</li>
                <li>{isFrench ? "Données d'utilisation" : "Usage Data"}</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                {isFrench ? "Données d'Utilisation" : "Usage Data"}
              </h4>
              <p className="text-gray-300">
                {isFrench
                  ? "Les Données d'Utilisation sont collectées automatiquement lors de l'utilisation du Service, y compris l'adresse IP, le type de navigateur, la version, les pages visitées, le temps passé et des données de diagnostic similaires."
                  : "Usage Data is collected automatically when using the Service, including IP address, browser type, version, pages visited, time spent, and similar diagnostic data."}
              </p>
            </div>
          </section>

          <hr className="my-8 border-white/10" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "Technologies de Suivi et Cookies" : "Tracking Technologies and Cookies"}
            </h2>

            <p className="text-gray-300 mb-4">
              {isFrench
                ? "Nous utilisons des Cookies et des technologies de suivi similaires pour analyser et améliorer notre Service."
                : "We use Cookies and similar tracking technologies to analyze and improve our Service."}
            </p>
            <p className="text-gray-300 mb-4">
              {isFrench ? "Notre pile de suivi comprend :" : "Our tracking stack includes:"}
            </p>

            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
              <li>
                <strong className="text-[#ffd700]">Google Analytics</strong> — {isFrench ? "pour l'analyse du trafic et de l'utilisation" : "for traffic and usage analytics"}
              </li>
              <li>
                <strong className="text-[#ffd700]">Microsoft Clarity</strong> — {isFrench ? "pour les cartes de chaleur et les informations comportementales" : "for heatmaps and behavioral insights"}
              </li>
              <li>
                <strong className="text-[#ffd700]">Google Tag Manager</strong> — {isFrench ? "pour gérer les balises d'analyse et de suivi" : "for managing analytics and tracking tags"}
              </li>
              <li>
                <strong className="text-[#ffd700]">Invisible reCAPTCHA</strong> — {isFrench ? "pour protéger notre site Web contre le spam et les abus" : "to protect our website from spam and abuse"}
              </li>
            </ul>

            <p className="text-gray-300">
              {isFrench
                ? "Vous pouvez gérer vos préférences en matière de cookies dans les paramètres de votre navigateur."
                : "You can manage your cookie preferences in your browser settings."}
            </p>
          </section>

          <hr className="my-8 border-white/10" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "Utilisation de Vos Données Personnelles" : "Use of Your Personal Data"}
            </h2>

            <p className="text-gray-300 mb-3">
              {isFrench
                ? "Nous pouvons utiliser vos données personnelles aux fins suivantes :"
                : "We may use your personal data for the following purposes:"}
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>{isFrench ? "Fournir et maintenir notre Service" : "To provide and maintain our Service"}</li>
              <li>{isFrench ? "Gérer votre compte et votre inscription" : "To manage your account and registration"}</li>
              <li>{isFrench ? "Communiquer avec vous par e-mail, SMS ou notifications" : "To communicate with you via email, SMS, or notifications"}</li>
              <li>
                {isFrench
                  ? "Vous envoyer des e-mails ou des newsletters si vous vous inscrivez, ou lorsque vous avez une relation existante avec nous (Oui, nous envoyons des e-mails aux utilisateurs ou les utilisateurs peuvent s'inscrire pour recevoir des e-mails de notre part.)"
                  : "To send you emails or newsletters if you opt-in, or when you have an existing relationship with us (Yes, we send emails to users or users can opt-in to receive emails from us.)"}
              </li>
              <li>{isFrench ? "Améliorer notre Service, nos fonctionnalités et l'expérience utilisateur" : "To improve our Service, features, and user experience"}</li>
              <li>{isFrench ? "Se conformer aux obligations légales et prévenir la fraude" : "To comply with legal obligations and prevent fraud"}</li>
            </ul>
          </section>

          <hr className="my-8 border-white/10" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "Conservation de Vos Données" : "Retention of Your Data"}
            </h2>

            <p className="text-gray-300">
              {isFrench
                ? "Nous conservons les données personnelles uniquement aussi longtemps que nécessaire pour remplir les objectifs décrits ici, nous conformer aux obligations légales, résoudre les litiges ou faire respecter les accords."
                : "We retain personal data only as long as necessary to fulfill the purposes outlined here, comply with legal obligations, resolve disputes, or enforce agreements."}
            </p>
          </section>

          <hr className="my-8 border-white/10" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "Transfert et Sécurité des Données" : "Data Transfer and Security"}
            </h2>

            <p className="text-gray-300 mb-3">
              {isFrench
                ? "Vos informations peuvent être traitées dans des lieux en dehors de votre pays. Nous veillons à ce que des garanties appropriées soient en place pour la protection des données."
                : "Your information may be processed in locations outside your country. We ensure that appropriate safeguards are in place for data protection."}
            </p>
            <p className="text-gray-300">
              {isFrench
                ? "Bien que nous utilisions des mesures commercialement raisonnables, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée."
                : "While we use commercially reasonable measures, no method of transmission over the Internet or electronic storage is completely secure."}
            </p>
          </section>

          <hr className="my-8 border-white/10" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "Vos Droits en Matière de Données" : "Your Data Rights"}
            </h2>

            <p className="text-gray-300">
              {isFrench ? (
                <>
                  Vous avez le droit d'accéder, de corriger ou de supprimer vos données personnelles. Vous pouvez en faire la demande en <Link href="/contact" className="text-[#ffd700] hover:underline font-semibold">nous contactant</Link>.
                </>
              ) : (
                <>
                  You have the right to access, correct, or delete your personal data. You may request this by <Link href="/contact" className="text-[#ffd700] hover:underline font-semibold">contacting us</Link>.
                </>
              )}
            </p>
          </section>

          <hr className="my-8 border-white/10" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "Confidentialité des Enfants" : "Children's Privacy"}
            </h2>

            <p className="text-gray-300">
              {isFrench
                ? "Notre Service ne s'adresse pas aux personnes de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans."
                : "Our Service does not address anyone under the age of 13. We do not knowingly collect personal information from children under 13."}
            </p>
          </section>

          <hr className="my-8 border-white/10" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "Liens vers d'Autres Sites Web" : "Links to Other Websites"}
            </h2>

            <p className="text-gray-300">
              {isFrench
                ? "Notre Service peut contenir des liens vers d'autres sites Web que nous n'exploitons pas. Nous ne sommes pas responsables de leur contenu ou de leurs pratiques en matière de confidentialité."
                : "Our Service may contain links to other websites not operated by us. We are not responsible for their content or privacy practices."}
            </p>
          </section>

          <hr className="my-8 border-white/10" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "Mises à Jour de Cette Politique de Confidentialité" : "Updates to This Privacy Policy"}
            </h2>

            <p className="text-gray-300">
              {isFrench
                ? "Nous pouvons mettre à jour cette Politique de Confidentialité périodiquement. Les modifications seront publiées sur cette page et reflétées dans la date « Dernière mise à jour » ci-dessus."
                : "We may update this Privacy Policy periodically. Changes will be posted on this page and reflected in the \"Last updated\" date above."}
            </p>
          </section>

          <hr className="my-8 border-white/10" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isFrench ? "Nous Contacter" : "Contact Us"}
            </h2>

            <p className="text-gray-300 mb-4">
              {isFrench ? (
                <>
                  Si vous avez des questions concernant cette Politique de Confidentialité, veuillez <Link href="/contact" className="text-[#ffd700] hover:underline font-semibold">nous contacter via notre formulaire de contact</Link>.
                </>
              ) : (
                <>
                  If you have any questions about this Privacy Policy, please <Link href="/contact" className="text-[#ffd700] hover:underline font-semibold">contact us through our contact form</Link>.
                </>
              )}
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
