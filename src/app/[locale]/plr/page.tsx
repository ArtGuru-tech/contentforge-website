"use client"

import { Link } from "@/i18n/routing"
import { useLocale } from 'next-intl'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function PLRPage() {
  const locale = useLocale()
  const isFrench = locale === 'fr'

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white font-sans">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="prose prose-lg prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold gold-text mb-4">
            {isFrench ? "Accord de Licence de Droits de Label Privé (PLR)" : "Private Label Rights (PLR) License Agreement"}
          </h1>
          <p className="text-gray-400 mb-2">
            <strong className="text-[#ffd700]">{isFrench ? "Date d'entrée en vigueur :" : "Effective Date:"}</strong> {isFrench ? "1er janvier 2025" : "January 1, 2025"}
          </p>
          <p className="text-gray-400 mb-2">
            <strong className="text-[#ffd700]">{isFrench ? "Fournisseur de Licence :" : "License Provider:"}</strong> ContentForge.cc
          </p>
          <p className="text-gray-400 mb-8">
            <strong className="text-[#ffd700]">{isFrench ? "Titulaire de Licence :" : "License Holder:"}</strong> {isFrench ? "Acheteur de Produits PLR ContentForge" : "Purchaser of ContentForge PLR Products"}
          </p>

          <hr className="my-8 border-white/10" />

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-6">
              {isFrench ? "1. ATTRIBUTION DE DROITS" : "1. GRANT OF RIGHTS"}
            </h2>
            <p className="text-gray-300 mb-6">
              {isFrench
                ? "En achetant des produits de ContentForge.cc, vous bénéficiez des Droits de Label Privé suivants :"
                : "By purchasing products from ContentForge.cc, you are granted the following Private Label Rights:"}
            </p>

            <div className="glass-card border-l-4 border-green-500 p-6 rounded-r-xl mb-6">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {isFrench ? "VOUS POUVEZ :" : "YOU MAY:"}
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-3">
                  {isFrench ? "✅ Éditer et Rebrandiser" : "✅ Edit and Rebrand"}
                </h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>{isFrench ? "Modifier, éditer ou réécrire complètement le contenu" : "Modify, edit, or completely rewrite the content"}</li>
                  <li>{isFrench ? "Ajouter votre propre nom, marque, logo et coordonnées en tant qu'auteur/créateur" : "Add your own name, brand, logo, and contact information as the author/creator"}</li>
                  <li>{isFrench ? "Modifier les titres, en-têtes, graphiques et mise en forme" : "Change titles, headings, graphics, and formatting"}</li>
                  <li>{isFrench ? "Combiner des produits ou les diviser en plus petites parties" : "Combine products or break them into smaller pieces"}</li>
                  <li>{isFrench ? "Traduire le contenu dans d'autres langues" : "Translate content into other languages"}</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-3">
                  {isFrench ? "✅ Vendre et Distribuer" : "✅ Sell and Distribute"}
                </h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>{isFrench ? "Vendre les produits sous votre propre nom de marque" : "Sell the products under your own brand name"}</li>
                  <li>{isFrench ? "Conserver 100% des bénéfices de toutes les ventes" : "Keep 100% of the profits from all sales"}</li>
                  <li>{isFrench ? "Emballer les produits comme bonus ou aimants à prospects" : "Package products as bonuses or lead magnets"}</li>
                  <li>{isFrench ? "Regrouper plusieurs produits ensemble" : "Bundle multiple products together"}</li>
                  <li>{isFrench ? "Offrir les produits comme matériel de cours ou livrables clients" : "Offer products as course materials or client deliverables"}</li>
                  <li>{isFrench ? "Donner les produits gratuitement pour construire votre liste d'e-mails" : "Give away products for free to build your email list"}</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-3">
                  {isFrench ? "✅ Utiliser dans Votre Entreprise" : "✅ Use in Your Business"}
                </h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>{isFrench ? "Utiliser comme contenu pour votre blog, réseaux sociaux ou newsletters e-mail" : "Use as content for your blog, social media, or email newsletters"}</li>
                  <li>{isFrench ? "Réutiliser en vidéos, podcasts ou autres formats de contenu" : "Repurpose into videos, podcasts, or other content formats"}</li>
                  <li>{isFrench ? "Utiliser comme matériel de formation pour votre équipe ou vos clients" : "Use as training materials for your team or clients"}</li>
                  <li>{isFrench ? "Incorporer dans vos programmes de coaching ou services de conseil" : "Incorporate into your coaching programs or consulting services"}</li>
                  <li>{isFrench ? "Créer des produits physiques (cahiers d'exercices, planificateurs, matériaux imprimés)" : "Create physical products (workbooks, planners, printed materials)"}</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {isFrench ? "✅ Applications Commerciales" : "✅ Commercial Applications"}
                </h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>{isFrench ? "Vendre sur votre propre site Web, plateformes de marché ou via des affiliés" : "Sell on your own website, marketplace platforms, or through affiliates"}</li>
                  <li>{isFrench ? "Utiliser dans des cours payants, ateliers ou sites d'adhésion" : "Use in paid courses, workshops, or membership sites"}</li>
                  <li>{isFrench ? "Offrir comme livrables clients dans votre entreprise de services" : "Offer as client deliverables in your service business"}</li>
                  <li>{isFrench ? "Concéder des licences aux clients avec des restrictions appropriées (voir Section 3)" : "License to clients with appropriate restrictions (see Section 3)"}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-6">
              {isFrench ? "2. RESTRICTIONS - VOUS NE POUVEZ PAS :" : "2. RESTRICTIONS - YOU MAY NOT:"}
            </h2>

            <div className="glass-card border-l-4 border-red-500 p-6 mb-6">
              <h3 className="text-2xl font-bold text-red-400 mb-4">
                {isFrench ? "UTILISATIONS INTERDITES :" : "PROHIBITED USES:"}
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-3">
                  {isFrench ? "❌ Revendre les Droits PLR" : "❌ Resell PLR Rights"}
                </h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>{isFrench ? "Vous NE POUVEZ PAS vendre, partager ou transférer les droits PLR eux-mêmes" : "You CANNOT sell, share, or transfer the PLR rights themselves"}</li>
                  <li>{isFrench ? "Vous NE POUVEZ PAS offrir ces produits comme PLR à d'autres" : "You CANNOT offer these products as PLR to others"}</li>
                  <li>{isFrench ? "Vous NE POUVEZ PAS prétendre être le créateur original du contenu non modifié" : "You CANNOT claim to be the original creator of unmodified content"}</li>
                  <li>{isFrench ? "Vous NE POUVEZ PAS vendre de Droits de Revente Maître (MRR) ou licences de revente à d'autres" : "You CANNOT sell Master Resale Rights (MRR) or resale licenses to others"}</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-3">
                  {isFrench ? "❌ Enregistrer des Droits d'Auteur" : "❌ Register Copyrights"}
                </h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>{isFrench ? "Vous NE POUVEZ PAS enregistrer de droits d'auteur pour tout produit dans sa forme originale" : "You CANNOT register copyright for any product in its original form"}</li>
                  <li>{isFrench ? "Vous NE POUVEZ PAS revendiquer la paternité originale d'un contenu non modifié" : "You CANNOT claim original authorship of unmodified content"}</li>
                  <li>{isFrench ? "Vous NE POUVEZ PAS déposer de plaintes DMCA contre d'autres titulaires de licence ContentForge" : "You CANNOT file DMCA complaints against other ContentForge license holders"}</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-3">
                  {isFrench ? "❌ Partager Votre Licence" : "❌ Share Your License"}
                </h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>{isFrench ? "Vous NE POUVEZ PAS partager vos identifiants de compte ContentForge" : "You CANNOT share your ContentForge account login credentials"}</li>
                  <li>{isFrench ? "Vous NE POUVEZ PAS redistribuer les fichiers sources originaux de ContentForge" : "You CANNOT redistribute the original source files from ContentForge"}</li>
                  <li>{isFrench ? "Vous NE POUVEZ PAS permettre à d'autres de télécharger des produits depuis votre compte" : "You CANNOT allow others to download products from your account"}</li>
                  <li>{isFrench ? "Une licence = Une personne/entité commerciale uniquement" : "One license = One person/business entity only"}</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {isFrench ? "❌ Utilisation Illégale ou Préjudiciable" : "❌ Illegal or Harmful Use"}
                </h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>{isFrench ? "Vous NE POUVEZ PAS utiliser les produits pour promouvoir des activités illégales" : "You CANNOT use products to promote illegal activities"}</li>
                  <li>{isFrench ? "Vous NE POUVEZ PAS utiliser les produits d'une manière qui viole les conditions de service de la plateforme" : "You CANNOT use products in ways that violate platform terms of service"}</li>
                  <li>{isFrench ? "Vous NE POUVEZ PAS utiliser les produits pour créer du spam ou du marketing non sollicité" : "You CANNOT use products to create spam or unsolicited marketing"}</li>
                  <li>{isFrench ? "Vous NE POUVEZ PAS utiliser les produits de manière discriminatoire ou préjudiciable" : "You CANNOT use products in discriminatory or harmful ways"}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-6">
              {isFrench ? "3. ATTRIBUTION ET BRANDING" : "3. ATTRIBUTION & BRANDING"}
            </h2>
            <div className="glass-card p-6 rounded-lg space-y-4">
              <p className="text-gray-300">
                <strong className="text-[#ffd700]">{isFrench ? "Aucune Attribution Requise :" : "No Attribution Required:"}</strong> {isFrench ? "Vous N'ÊTES PAS tenu de créditer ContentForge.cc lors de la vente ou de la distribution de produits modifiés." : "You are NOT required to credit ContentForge.cc when selling or distributing modified products."}
              </p>
              <p className="text-gray-300">
                <strong className="text-[#ffd700]">{isFrench ? "Bonne Pratique Recommandée :" : "Recommended Best Practice:"}</strong> {isFrench ? "Bien que vous puissiez revendiquer la paternité des produits édités/rebrandés, nous recommandons d'ajouter de la valeur par la personnalisation plutôt que de vendre des versions identiques non modifiées." : "While you may claim authorship of edited/rebranded products, we recommend adding value through customization rather than selling identical unmodified versions."}
              </p>
              <p className="text-gray-300">
                <strong className="text-[#ffd700]">{isFrench ? "Suppression du Branding :" : "Branding Removal:"}</strong> {isFrench ? "Vous DEVEZ supprimer tous les éléments de branding, logos et références ContentForge.cc avant de vendre des produits sous votre propre nom." : "You MUST remove all ContentForge.cc branding, logos, and references before selling products under your own name."}
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-6">
              {isFrench ? "4. NIVEAUX DE LICENCE ET RENOUVELLEMENT" : "4. LICENSE TIERS & RENEWAL"}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="glass-card border-2 border-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">
                  {isFrench ? "LICENCE NIVEAU LITE" : "LITE TIER LICENSE"}
                </h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>{isFrench ? "Paiement unique de 97€-197€" : "One-time payment of $97-$197"}</li>
                  <li>{isFrench ? "Accès à vie à tous les produits disponibles au moment de l'achat" : "Lifetime access to all products available at time of purchase"}</li>
                  <li>{isFrench ? "Accès à la bibliothèque de produits (téléchargement pendant la période de licence)" : "Access to product library (download within license period)"}</li>
                  <li>{isFrench ? "Option de Renouvellement : 47€ de renouvellement annuel pour les nouveaux produits ajoutés après l'achat initial" : "Renewal Option: $47 annual renewal for new products added after initial purchase"}</li>
                  <li>{isFrench ? "Les produits téléchargés restent sous licence pour toujours, même si vous ne renouvelez pas" : "Products downloaded remain licensed forever, even if you don't renew"}</li>
                </ul>
              </div>

              <div className="gold-gradient border-2 border-[#ffd700] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">
                  {isFrench ? "LICENCE NIVEAU PRO" : "PRO TIER LICENSE"}
                </h3>
                <ul className="list-disc pl-6 text-white space-y-2">
                  <li>{isFrench ? "Paiement unique de 497€-697€" : "One-time payment of $497-$697"}</li>
                  <li>{isFrench ? "Accès à vie à TOUS les produits actuels et futurs" : "Lifetime access to ALL current and future products"}</li>
                  <li>{isFrench ? "Nouvelles sorties de produits hebdomadaires incluses pour toujours" : "Weekly new product releases included forever"}</li>
                  <li>{isFrench ? "Support prioritaire et accès anticipé aux nouvelles catégories" : "Priority support and early access to new categories"}</li>
                  <li>{isFrench ? "Aucuns frais de renouvellement jamais" : "No renewal fees ever"}</li>
                </ul>
              </div>
            </div>

            <div className="glass-card border-l-4 border-yellow-500 p-6">
              <p className="text-gray-300">
                <strong className="text-white">{isFrench ? "Important :" : "Important:"}</strong> {isFrench ? "Votre type de licence détermine l'accès à la bibliothèque ContentForge, mais tout produit que vous téléchargez vous est concédé sous licence de façon permanente pour une utilisation commerciale selon ces conditions PLR." : "Your license type determines access to the ContentForge library, but any product you download is licensed to you permanently for commercial use under these PLR terms."}
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-6">
              {isFrench ? "5. LICENCE CLIENT AUTORISÉE" : "5. PERMITTED CLIENT LICENSING"}
            </h2>
            <p className="text-gray-300 mb-4">
              {isFrench ? "Si vous êtes un prestataire de services (coach, consultant, agence), vous POUVEZ :" : "If you're a service provider (coach, consultant, agency), you MAY:"}
            </p>

            <div className="glass-card p-4 rounded mb-4">
              <ul className="list-none text-gray-300 space-y-2">
                <li>{isFrench ? "✅ Livrer des produits personnalisés aux clients comme livrables de travail à façon" : "✅ Deliver customized products to clients as work-for-hire deliverables"}</li>
                <li>{isFrench ? "✅ Accorder aux clients des droits d'utilisation standard (ils peuvent utiliser mais pas revendre)" : "✅ Grant clients standard usage rights (they can use but not resell)"}</li>
                <li>{isFrench ? "✅ Inclure les produits dans le cadre de forfaits de services payants" : "✅ Include products as part of paid service packages"}</li>
              </ul>
            </div>

            <p className="text-gray-300 mb-4">
              {isFrench ? "Vous NE POUVEZ PAS :" : "You MAY NOT:"}
            </p>
            <div className="glass-card p-4 rounded mb-4">
              <ul className="list-none text-gray-300 space-y-2">
                <li>{isFrench ? "❌ Donner aux clients des droits PLR sur des produits non modifiés" : "❌ Give clients PLR rights to unmodified products"}</li>
                <li>{isFrench ? "❌ Permettre aux clients de revendre les produits tels quels" : "❌ Allow clients to resell products as-is"}</li>
                <li>{isFrench ? "❌ Partager les fichiers sources ContentForge avec les clients" : "❌ Share ContentForge source files with clients"}</li>
              </ul>
            </div>

            <div className="glass-card border-l-4 border-blue-500 p-6">
              <p className="text-gray-300">
                <strong className="text-[#ffd700]">{isFrench ? "Directive pour Prestataires de Services :" : "Service Provider Guideline:"}</strong> {isFrench ? "Traitez les produits ContentForge comme votre boîte à outils créative. Le livrable final que vous créez pour les clients est le vôtre à concéder sous licence comme bon vous semble, mais vous ne pouvez pas transférer les droits PLR." : "Treat ContentForge products as your creative toolkit. The end deliverable you create for clients is yours to license as you see fit, but you cannot transfer PLR rights."}
              </p>
            </div>
          </section>

          {/* Sections 6-13 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-6">
              {isFrench ? "6. QUALITÉ ET ADÉQUATION" : "6. QUALITY & SUITABILITY"}
            </h2>
            <p className="text-gray-300 mb-4">
              <strong>{isFrench ? "Aucune Garantie :" : "No Warranties:"}</strong> {isFrench ? "Les produits sont fournis « tels quels » sans garanties de qualité marchande ou d'adéquation à un usage particulier." : "Products are provided \"as-is\" without warranties of merchantability or fitness for a particular purpose."}
            </p>
            <p className="text-gray-300 mb-3">
              <strong>{isFrench ? "Votre Responsabilité :" : "Your Responsibility:"}</strong> {isFrench ? "Vous êtes seul responsable de :" : "You are solely responsible for:"}
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
              <li>{isFrench ? "Examiner les produits avant utilisation ou vente" : "Reviewing products before use or sale"}</li>
              <li>{isFrench ? "Vous assurer que les produits répondent à vos normes de qualité" : "Ensuring products meet your quality standards"}</li>
              <li>{isFrench ? "Vérifier l'exactitude des informations avant distribution" : "Verifying accuracy of information before distribution"}</li>
              <li>{isFrench ? "Conformité aux politiques de la plateforme où vous vendez les produits" : "Compliance with platform policies where you sell products"}</li>
              <li>{isFrench ? "Toutes réclamations, représentations ou garanties que vous faites à vos clients" : "Any claims, representations, or guarantees you make to your customers"}</li>
            </ul>
            <p className="text-gray-300">
              <strong>{isFrench ? "Recommandé :" : "Recommended:"}</strong> {isFrench ? "Personnalisez toujours et ajoutez votre propre expertise pour maximiser la valeur et la différenciation." : "Always customize and add your own expertise to maximize value and differentiation."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-6">
              {isFrench ? "7. INTERACTION AVEC LA POLITIQUE DE REMBOURSEMENT" : "7. REFUND POLICY INTERACTION"}
            </h2>
            <p className="text-gray-300 mb-4">
              <strong>{isFrench ? "Garantie de Remboursement de 30 Jours :" : "30-Day Money-Back Guarantee:"}</strong> {isFrench ? "ContentForge offre une fenêtre de remboursement de 30 jours." : "ContentForge offers a 30-day refund window."}
            </p>
            <p className="text-gray-300 mb-3">
              <strong>{isFrench ? "Après le Remboursement :" : "After Refund:"}</strong> {isFrench ? "Si vous demandez et recevez un remboursement, votre licence PLR est immédiatement résiliée. Vous devez :" : "If you request and receive a refund, your PLR license is immediately terminated. You must:"}
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
              <li>{isFrench ? "Cesser de vendre tous les produits obtenus de ContentForge" : "Stop selling any products obtained from ContentForge"}</li>
              <li>{isFrench ? "Retirer tout contenu source ContentForge de vos plateformes" : "Remove all ContentForge-sourced content from your platforms"}</li>
              <li>{isFrench ? "Supprimer tous les fichiers téléchargés" : "Delete all downloaded files"}</li>
            </ul>
            <p className="text-gray-300">
              <strong>{isFrench ? "Exception de Bonne Foi :" : "Good Faith Exception:"}</strong> {isFrench ? "Si vous avez apporté des personnalisations importantes, contactez le support pour discuter de l'utilisation continue de dérivés fortement modifiés." : "If you've made significant customizations, contact support to discuss continued use of heavily modified derivatives."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-6">
              {isFrench ? "8. PROPRIÉTÉ INTELLECTUELLE" : "8. INTELLECTUAL PROPERTY"}
            </h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-3">
              <li>
                <strong>{isFrench ? "Création Originale :" : "Original Creation:"}</strong> {isFrench ? "ContentForge conserve les droits d'auteur sur tous les produits originaux non modifiés." : "ContentForge retains copyright on all original, unmodified products."}
              </li>
              <li>
                <strong>{isFrench ? "Vos Modifications :" : "Your Modifications:"}</strong> {isFrench ? "Toute modification substantielle, ajout ou amélioration créative que vous apportez devient votre propriété intellectuelle, à condition qu'ils transforment l'œuvre originale de manière significative." : "Any substantial modifications, additions, or creative enhancements you make become your intellectual property, provided they transform the original work meaningfully."}
              </li>
              <li>
                <strong>{isFrench ? "Contenu Tiers :" : "Third-Party Content:"}</strong> {isFrench ? "Certains produits peuvent inclure des éléments tiers correctement sous licence (polices, images, templates). Consultez la documentation individuelle du produit pour les exigences d'attribution spécifiques." : "Some products may include properly licensed third-party elements (fonts, images, templates). Check individual product documentation for specific attribution requirements."}
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-6">
              {isFrench ? "9. MISES À JOUR ET RÉVISIONS" : "9. UPDATES & REVISIONS"}
            </h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-3">
              <li>
                <strong>{isFrench ? "Mises à Jour de Produits :" : "Product Updates:"}</strong> {isFrench ? "ContentForge peut mettre à jour ou améliorer les produits au fil du temps. Les titulaires de licence reçoivent les versions mises à jour gratuitement." : "ContentForge may update or improve products over time. License holders receive updated versions at no charge."}
              </li>
              <li>
                <strong>{isFrench ? "Conditions de Licence :" : "License Terms:"}</strong> {isFrench ? "Nous nous réservons le droit de modifier ces conditions de licence pour les futurs produits. Les titulaires de licence existants bénéficient des conditions originales pour les produits déjà achetés." : "We reserve the right to modify these license terms for future products. Existing license holders are grandfathered under original terms for products already purchased."}
              </li>
              <li>
                <strong>{isFrench ? "Notification :" : "Notification:"}</strong> {isFrench ? "Les modifications importantes des conditions PLR seront communiquées par e-mail et reflétées sur ContentForge.cc." : "Material changes to PLR terms will be communicated via email and reflected on ContentForge.cc."}
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-6">
              {isFrench ? "10. RÉSILIATION" : "10. TERMINATION"}
            </h2>
            <p className="text-gray-300 mb-3">
              <strong>{isFrench ? "Votre licence peut être résiliée si vous :" : "Your license may be terminated if you:"}</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
              <li>{isFrench ? "Violez les restrictions de la Section 2" : "Violate the restrictions in Section 2"}</li>
              <li>{isFrench ? "Partagez votre accès au compte avec d'autres" : "Share your account access with others"}</li>
              <li>{isFrench ? "Tentez de revendre les droits PLR" : "Attempt to resell PLR rights"}</li>
              <li>{isFrench ? "Utilisez les produits de manière illégale ou préjudiciable" : "Use products in illegal or harmful ways"}</li>
              <li>{isFrench ? "Commettez une fraude ou des rétrofacturations après avoir téléchargé des produits" : "Commit fraud or chargebacks after downloading products"}</li>
            </ul>
            <p className="text-gray-300 mb-3">
              <strong>{isFrench ? "Effet de la Résiliation :" : "Effect of Termination:"}</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>{isFrench ? "Perte immédiate de l'accès à la bibliothèque" : "Immediate loss of library access"}</li>
              <li>{isFrench ? "Obligation de cesser de vendre les produits" : "Obligation to cease selling products"}</li>
              <li>{isFrench ? "Aucune éligibilité au remboursement si résilié pour violation" : "No refund eligibility if terminated for violation"}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-6">
              {isFrench ? "11. LIMITATION DE RESPONSABILITÉ" : "11. LIMITATION OF LIABILITY"}
            </h2>
            <p className="text-gray-300 mb-4">
              {isFrench
                ? "La responsabilité de ContentForge.cc est limitée au montant que vous avez payé pour votre niveau de licence. Nous ne sommes pas responsables de :"
                : "ContentForge.cc liability is limited to the amount you paid for your license tier. We are not liable for:"}
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>{isFrench ? "Perte de profits ou de revenus de votre utilisation des produits" : "Lost profits or revenue from your use of products"}</li>
              <li>{isFrench ? "Réclamations de tiers liées à vos produits modifiés" : "Third-party claims related to your modified products"}</li>
              <li>{isFrench ? "Suspensions de plateforme ou violations de politique sur des sites externes" : "Platform suspensions or policy violations on external sites"}</li>
              <li>{isFrench ? "Tous dommages indirects, consécutifs ou punitifs" : "Any indirect, consequential, or punitive damages"}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-6">
              {isFrench ? "12. LOI APPLICABLE ET LITIGES" : "12. GOVERNING LAW & DISPUTES"}
            </h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-3">
              <li>
                <strong>{isFrench ? "Juridiction :" : "Jurisdiction:"}</strong> {isFrench ? "Cet accord est régi par les lois de la France." : "This agreement is governed by the laws of France."}
              </li>
              <li>
                <strong>{isFrench ? "Résolution des Litiges :" : "Dispute Resolution:"}</strong> {isFrench ? "Tout litige sera résolu par :" : "Any disputes will be resolved through:"}
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>{isFrench ? "Négociation de bonne foi" : "Good faith negotiation"}</li>
                  <li>{isFrench ? "Arbitrage contraignant (si la négociation échoue)" : "Binding arbitration (if negotiation fails)"}</li>
                  <li>{isFrench ? "Litige uniquement en dernier recours dans la juridiction spécifiée ci-dessus" : "Litigation only as a last resort in the jurisdiction specified above"}</li>
                </ul>
              </li>
              <li>
                <strong>{isFrench ? "Divisibilité :" : "Severability:"}</strong> {isFrench ? "Si une disposition est jugée inapplicable, les conditions restantes restent en vigueur." : "If any provision is found unenforceable, the remaining terms remain in effect."}
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-6">
              {isFrench ? "13. CONTACT ET SUPPORT" : "13. CONTACT & SUPPORT"}
            </h2>
            <div className="glass-card p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                {isFrench ? (
                  <>
                    Pour toute demande incluant des questions sur les licences, le support technique et les questions juridiques, veuillez <a href="contact" className="text-[#ffd700] hover:underline font-semibold">nous contacter via notre formulaire de contact</a>.
                  </>
                ) : (
                  <>
                    For all inquiries including license questions, technical support, and legal matters, please <a href="contact" className="text-[#ffd700] hover:underline font-semibold">contact us through our contact form</a>.
                  </>
                )}
              </p>
              <p className="text-gray-300">
                <strong>{isFrench ? "Temps de Réponse :" : "Response Time:"}</strong> {isFrench ? "Nous visons à répondre dans les 48 heures ouvrables." : "We aim to respond within 48 business hours."}
              </p>
            </div>
          </section>

          <hr className="my-8 border-white/10" />

          {/* Acceptance */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-6">
              {isFrench ? "ACCEPTATION DES CONDITIONS" : "ACCEPTANCE OF TERMS"}
            </h2>
            <div className="glass-card border-l-4 border-blue-500 p-6">
              <p className="text-gray-300 mb-4">
                {isFrench
                  ? "En finalisant votre achat et en téléchargeant tout produit de ContentForge.cc, vous reconnaissez avoir lu, compris et accepté d'être lié par cet Accord de Licence PLR."
                  : "By completing your purchase and downloading any product from ContentForge.cc, you acknowledge that you have read, understood, and agree to be bound by this PLR License Agreement."}
              </p>
              <p className="text-gray-300 mb-2">
                <strong>{isFrench ? "Version de Licence :" : "License Version:"}</strong> 1.0
              </p>
              <p className="text-gray-300">
                <strong>{isFrench ? "Dernière Mise à Jour :" : "Last Updated:"}</strong> {isFrench ? "1er janvier 2025" : "January 1, 2025"}
              </p>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-6">
              {isFrench ? "RÉSUMÉ DE RÉFÉRENCE RAPIDE" : "QUICK REFERENCE SUMMARY"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-400 mb-4">
                  {isFrench ? "VOUS POUVEZ" : "YOU CAN"}
                </h3>
                <ul className="list-none text-gray-300 space-y-2">
                  <li>{isFrench ? "✅ Éditer, rebrandiser et vendre comme vôtre" : "✅ Edit, rebrand, and sell as your own"}</li>
                  <li>{isFrench ? "✅ Conserver 100% des bénéfices" : "✅ Keep 100% of profits"}</li>
                  <li>{isFrench ? "✅ Donner comme aimants à prospects" : "✅ Give away as lead magnets"}</li>
                  <li>{isFrench ? "✅ Utiliser dans les services clients" : "✅ Use in client services"}</li>
                  <li>{isFrench ? "✅ Réutiliser dans n'importe quel format" : "✅ Repurpose into any format"}</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-400 mb-4">
                  {isFrench ? "VOUS NE POUVEZ PAS" : "YOU CANNOT"}
                </h3>
                <ul className="list-none text-gray-300 space-y-2">
                  <li>{isFrench ? "❌ Revendre les droits PLR à d'autres" : "❌ Resell PLR rights to others"}</li>
                  <li>{isFrench ? "❌ Partager votre accès au compte" : "❌ Share your account access"}</li>
                  <li>{isFrench ? "❌ Enregistrer des droits d'auteur sur des produits non modifiés" : "❌ Register copyright on unmodified products"}</li>
                  <li>{isFrench ? "❌ Donner des droits PLR aux clients" : "❌ Give clients PLR rights"}</li>
                  <li>{isFrench ? "❌ Revendiquer la paternité originale sans édition" : "❌ Claim original authorship without editing"}</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="glass-card border-2 border-[#ffd700] p-6 rounded-lg">
            <p className="text-[#ffd700] font-semibold mb-2">
              {isFrench ? "AVERTISSEMENT IMPORTANT :" : "IMPORTANT DISCLAIMER:"}
            </p>
            <p className="text-gray-300">
              {isFrench ? (
                <>
                  Cette licence vous accorde de larges droits commerciaux, mais avec responsabilité. Nous vous faisons confiance pour utiliser ces produits de manière éthique et légale. En cas de doute, <a href="contact" className="text-[#ffd700] hover:underline font-semibold">contactez-nous</a> avant d'agir.
                </>
              ) : (
                <>
                  This license grants you broad commercial rights, but with responsibility. We trust you to use these products ethically and legally. When in doubt, <a href="contact" className="text-[#ffd700] hover:underline font-semibold">contact us</a> before taking action.
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
