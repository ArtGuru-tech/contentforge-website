import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"

export default function EarningsDisclaimerPage() {
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
          <Link href="" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">Home</Link>
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
                <li><Link href="" className="hover:text-[#FFD700] transition-colors">Home</Link></li>
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
                <li><Link href="/terms" className="hover:text-[#FFD700] transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-[#FFD700] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/plr" className="hover:text-[#FFD700] transition-colors">Private Label Rights</Link></li>
                <li><Link href="/earnings-disclaimer" className="hover:text-[#FFD700] transition-colors">Earnings Disclaimer</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Made by ContentForge s.r.o.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
