import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function EarningsDisclaimerPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-[#003399] mb-8">Earnings and Results Disclaimer</h1>
          <p className="text-gray-600 mb-8">Last updated: October 25, 2025</p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-[#003399]">
            <p className="text-gray-700 font-medium">
              ContentForge.cc provides Private Label Rights (PLR) digital products that can be rebranded and sold by our customers. However, we make no guarantee regarding the income you may or may not earn through the use of our products.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Individual Results Vary</h2>
            <p className="text-gray-700 mb-4">
              Your results will depend on numerous factors including but not limited to: your market knowledge, business experience, work ethic, marketing ability, audience size, niche selection, and economic conditions.
            </p>
            <p className="text-gray-700">
              Building a profitable business requires effort, consistency, and skill development.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">No Guaranteed Income</h2>
            <div className="bg-amber-50 p-6 rounded-lg mb-4 border-l-4 border-amber-500">
              <p className="text-gray-700 mb-4">
                Any testimonials, case studies, or earnings examples shown on this website represent exceptional results and are not typical. These examples should not be interpreted as a promise or guarantee of your earnings or income level.
              </p>
              <p className="text-gray-700 font-semibold">
                The average purchaser of PLR products may not generate any income at all.
              </p>
            </div>
            <p className="text-gray-700">
              Success stories featured on ContentForge.cc are real but represent the upper range of outcomes achieved by customers who applied consistent effort and effective marketing strategies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Product Value vs. Income Claims</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                ContentForge.cc products are provided as business tools and raw materials. We guarantee the quality and commercial license rights of our digital products, but we cannot and do not guarantee that you will successfully sell them or generate revenue.
              </p>
              <p>
                Any references to income potential, revenue examples, or business growth opportunities are illustrative examples only and should not be considered typical results.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Your Responsibility</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                You are solely responsible for your business results. ContentForge.cc is not liable for the success or failure of your business decisions relating to any information presented by our company or our products.
              </p>
              <p className="text-gray-700 font-medium">
                Success in business depends on your own actions, decisions, and dedication.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Legal Compliance</h2>
            <p className="text-gray-700">
              It is your responsibility to ensure that your use of ContentForge.cc products complies with all applicable laws, regulations, and advertising standards in your jurisdiction.
            </p>
          </section>

          <div className="bg-gray-100 p-6 rounded-lg mt-12">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Questions?</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Earnings Disclaimer, please contact us through our <Link href="/contact" className="text-[#003399] hover:underline font-medium">contact page</Link>.
            </p>
            <p className="text-gray-700">
              <strong>Company:</strong> BAKCHICH SAS<br />
              <strong>Address:</strong> 60 RUE FRANCOIS IER, PARIS, 75008, France
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
