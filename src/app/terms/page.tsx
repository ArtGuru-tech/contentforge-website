import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsPage() {
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
          <Link href="/" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">Home</Link>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">Resources</a>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">Free Resources</a>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">Blog</a>
          <Link href="/contact" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">Contact</Link>
        </nav>

        <Button className="bg-[#003399] hover:bg-[#002266] text-white border-0">
          Sign In
        </Button>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-[#003399] mb-8">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: April 6, 2025</p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">1. Legal Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Website:</strong> contentforge.app (the "Website") is published by:
              </p>
              <p>
                <strong>BAKCHICH</strong>, société par actions simplifiée with share capital of €100, registered under number 942552274, with registered office at 60 RUE FRANCOIS IER, PARIS, 75008, France.
              </p>
              <p>
                <strong>Website Host:</strong> Cloudflare, Paris<br />
                Postal address only: 6 place de la Madeleine 75008 Paris<br />
                Phone: +44 20 3514 6970<br />
                Website: https://www.cloudflare.com/
              </p>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">2. Scope of Application</h2>
            <p className="text-gray-700 mb-4">
              These General Terms and Conditions are intended to inform the Customer of the terms of online ordering and delivery of Services ordered.
            </p>
            <p className="text-gray-700 mb-4">
              The General Terms and Conditions apply, without restriction or reservation, to all Services offered to Customers by Bakchich on the Website, regardless of any clauses that may appear in any other document.
            </p>
            <p className="text-gray-700">
              Any order for Services implies, on the part of the Customer, full adherence and acceptance without reservation or restriction of these General Terms and Conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">3. Description of Services</h2>
            <p className="text-gray-700 mb-4">Bakchich offers for sale:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Digital content monetization and exclusive content</li>
              <li>Subscription formulas whose execution methods and characteristics are described on the Website</li>
            </ul>
            <p className="text-gray-700 mb-4">
              The essential characteristics of each Service are described on the Website and updated by Bakchich. The technical sheet of a Service may include descriptions, photographs and graphics that are communicated for illustrative purposes only and may be modified/updated on the Website by Bakchich.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">4. Customer Account</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-[#003399] mb-3">4.1 Creating a Customer Account</h3>
              <p className="text-gray-700 mb-4">
                The Customer can create a customer account (hereinafter the "Customer Account") prior to or simultaneously with the purchase of Services online on the Website. Creating a Customer Account is not mandatory to order a Service.
              </p>
              <p className="text-gray-700">
                The Customer Account is created by the Customer by providing the information requested, including their email address and a password.
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#003399] mb-3">4.2 Customer Account Features</h3>
              <p className="text-gray-700 mb-4">The Customer Account allows the Customer to:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Access their registered payment methods and modify them</li>
                <li>Access information on past and/or current orders</li>
                <li>Access and modify their personal information</li>
                <li>Contact Bakchich</li>
                <li>Download and print their payment receipts and order details</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">5. Financial Conditions</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-xl font-semibold text-[#003399]">5.1 Pricing</h3>
              <p>
                The prices indicated are firm and non-revisable during their validity period, the Parties expressly waiving the provisions of Article 1195 of the Civil Code.
              </p>

              <h3 className="text-xl font-semibold text-[#003399] mt-6">5.2 Payment Methods</h3>
              <p>
                The order is payable immediately by credit card, online only. Payment for the order is cash, the Customer will not have the possibility to pay in installments.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">6. Right of Withdrawal</h2>
            <p className="text-gray-700 mb-4">
              In accordance with the provisions of Article L.121-21 of the French Consumer Code, the Customer has a period of fourteen (14) days to exercise their right of withdrawal from a contract concluded at a distance, without charge and without having to justify particular reasons.
            </p>
            <p className="text-gray-700">
              This period begins to run from the day of delivery of the order to the Customer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The Services are protected by intellectual property rights.
            </p>
            <p className="text-gray-700 mb-4">
              The provision of the Website does not in any way transfer the intellectual property rights of the Website and any of its elements, nor of the associated documentation, which remain the exclusive property of Bakchich.
            </p>
            <p className="text-gray-700">
              Under the terms of these General Terms and Conditions, Bakchich authorizes the Customer to access and use the Website exclusively for personal purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">8. Liability</h2>
            <p className="text-gray-700 mb-4">
              Bakchich's liability can only be engaged in case of proven fault or negligence and is limited to direct damages, excluding any indirect damage, of any nature whatsoever.
            </p>
            <p className="text-gray-700">
              Under no circumstances will Bakchich be required to compensate for intangible damages consequent or not to material damage such as, in particular, financial losses, including general costs, loss of profit, activity, contracts, income, customers and production as well as any damage related to damage to the Customer's image.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">9. Applicable Law and Disputes</h2>
            <p className="text-gray-700 mb-4">
              By express agreement between the Parties, these General Terms and Conditions and the purchase operations of Services resulting therefrom are governed by French law. They are written in French.
            </p>
            <p className="text-gray-700">
              In accordance with the provisions of the Consumer Code concerning the amicable settlement of disputes, Bakchich adheres to the e-commerce Mediator Service competent to its sector of activity.
            </p>
          </section>

          <div className="bg-gray-100 p-6 rounded-lg mt-12">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-2">
              <strong>Company:</strong> BAKCHICH SAS
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> 60 RUE FRANCOIS IER, PARIS, 75008, France
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Registration:</strong> 942 552 274 R.C.S. Paris
            </p>
            <p className="text-gray-700">
              <strong>VAT Number:</strong> FR37942552274
            </p>
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
              <h4 className="font-semibold mb-4 text-gray-300">Pages</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-[#FFD700] transition-colors">Home</Link></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Free Resources</a></li>
                <li><Link href="/contact" className="hover:text-[#FFD700] transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Master Library</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Custom Digital Product</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">PLR Digital Products</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/terms" className="hover:text-[#FFD700] transition-colors">Terms & Conditions</a></li>
                <li><a href="/privacy" className="hover:text-[#FFD700] transition-colors">Privacy Policy</a></li>
                <li><a href="/plr" className="hover:text-[#FFD700] transition-colors">Private Label Rights</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Made by ContentForge s.r.o.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
