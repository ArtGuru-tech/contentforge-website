import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PLRPage() {
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
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">Contact</a>
        </nav>

        <Button className="bg-[#003399] hover:bg-[#002266] text-white border-0">
          Sign In
        </Button>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-[#003399] mb-4">Private Label Rights (PLR) License Agreement</h1>
          <p className="text-gray-600 mb-2"><strong>Effective Date:</strong> January 1, 2025</p>
          <p className="text-gray-600 mb-2"><strong>License Provider:</strong> ContentForge.cc</p>
          <p className="text-gray-600 mb-8"><strong>License Holder:</strong> Purchaser of ContentForge PLR Products</p>

          <hr className="my-8 border-gray-300" />

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#003399] mb-6">1. GRANT OF RIGHTS</h2>
            <p className="text-gray-700 mb-6">By purchasing products from ContentForge.cc, you are granted the following Private Label Rights:</p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">YOU MAY:</h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">✅ Edit and Rebrand</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Modify, edit, or completely rewrite the content</li>
                  <li>Add your own name, brand, logo, and contact information as the author/creator</li>
                  <li>Change titles, headings, graphics, and formatting</li>
                  <li>Combine products or break them into smaller pieces</li>
                  <li>Translate content into other languages</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">✅ Sell and Distribute</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Sell the products under your own brand name</li>
                  <li>Keep 100% of the profits from all sales</li>
                  <li>Package products as bonuses or lead magnets</li>
                  <li>Bundle multiple products together</li>
                  <li>Offer products as course materials or client deliverables</li>
                  <li>Give away products for free to build your email list</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">✅ Use in Your Business</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Use as content for your blog, social media, or email newsletters</li>
                  <li>Repurpose into videos, podcasts, or other content formats</li>
                  <li>Use as training materials for your team or clients</li>
                  <li>Incorporate into your coaching programs or consulting services</li>
                  <li>Create physical products (workbooks, planners, printed materials)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">✅ Commercial Applications</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Sell on your own website, marketplace platforms, or through affiliates</li>
                  <li>Use in paid courses, workshops, or membership sites</li>
                  <li>Offer as client deliverables in your service business</li>
                  <li>License to clients with appropriate restrictions (see Section 3)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#003399] mb-6">2. RESTRICTIONS - YOU MAY NOT:</h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">PROHIBITED USES:</h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">❌ Resell PLR Rights</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>You CANNOT sell, share, or transfer the PLR rights themselves</li>
                  <li>You CANNOT offer these products as PLR to others</li>
                  <li>You CANNOT claim to be the original creator of unmodified content</li>
                  <li>You CANNOT sell Master Resale Rights (MRR) or resale licenses to others</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">❌ Register Copyrights</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>You CANNOT register copyright for any product in its original form</li>
                  <li>You CANNOT claim original authorship of unmodified content</li>
                  <li>You CANNOT file DMCA complaints against other ContentForge license holders</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">❌ Share Your License</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>You CANNOT share your ContentForge account login credentials</li>
                  <li>You CANNOT redistribute the original source files from ContentForge</li>
                  <li>You CANNOT allow others to download products from your account</li>
                  <li>One license = One person/business entity only</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">❌ Illegal or Harmful Use</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>You CANNOT use products to promote illegal activities</li>
                  <li>You CANNOT use products in ways that violate platform terms of service</li>
                  <li>You CANNOT use products to create spam or unsolicited marketing</li>
                  <li>You CANNOT use products in discriminatory or harmful ways</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#003399] mb-6">3. ATTRIBUTION & BRANDING</h2>
            <div className="bg-blue-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">
                <strong className="text-[#003399]">No Attribution Required:</strong> You are NOT required to credit ContentForge.cc when selling or distributing modified products.
              </p>
              <p className="text-gray-700">
                <strong className="text-[#003399]">Recommended Best Practice:</strong> While you may claim authorship of edited/rebranded products, we recommend adding value through customization rather than selling identical unmodified versions.
              </p>
              <p className="text-gray-700">
                <strong className="text-[#003399]">Branding Removal:</strong> You MUST remove all ContentForge.cc branding, logos, and references before selling products under your own name.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#003399] mb-6">4. LICENSE TIERS & RENEWAL</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 border-2 border-gray-300 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">LITE TIER LICENSE</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>One-time payment of $97-$197</li>
                  <li>Lifetime access to all products available at time of purchase</li>
                  <li>Access to product library (download within license period)</li>
                  <li>Renewal Option: $47 annual renewal for new products added after initial purchase</li>
                  <li>Products downloaded remain licensed forever, even if you don't renew</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] border-2 border-[#003399] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">PRO TIER LICENSE</h3>
                <ul className="list-disc pl-6 text-gray-900 space-y-2">
                  <li>One-time payment of $497-$697</li>
                  <li>Lifetime access to ALL current and future products</li>
                  <li>Weekly new product releases included forever</li>
                  <li>Priority support and early access to new categories</li>
                  <li>No renewal fees ever</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <p className="text-gray-700">
                <strong className="text-gray-900">Important:</strong> Your license type determines access to the ContentForge library, but any product you download is licensed to you permanently for commercial use under these PLR terms.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#003399] mb-6">5. PERMITTED CLIENT LICENSING</h2>
            <p className="text-gray-700 mb-4">If you're a service provider (coach, consultant, agency), you MAY:</p>

            <div className="bg-green-50 p-4 rounded mb-4">
              <ul className="list-none text-gray-700 space-y-2">
                <li>✅ Deliver customized products to clients as work-for-hire deliverables</li>
                <li>✅ Grant clients standard usage rights (they can use but not resell)</li>
                <li>✅ Include products as part of paid service packages</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-4">You MAY NOT:</p>
            <div className="bg-red-50 p-4 rounded mb-4">
              <ul className="list-none text-gray-700 space-y-2">
                <li>❌ Give clients PLR rights to unmodified products</li>
                <li>❌ Allow clients to resell products as-is</li>
                <li>❌ Share ContentForge source files with clients</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="text-gray-700">
                <strong className="text-[#003399]">Service Provider Guideline:</strong> Treat ContentForge products as your creative toolkit. The end deliverable you create for clients is yours to license as you see fit, but you cannot transfer PLR rights.
              </p>
            </div>
          </section>

          {/* Sections 6-13 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#003399] mb-6">6. QUALITY & SUITABILITY</h2>
            <p className="text-gray-700 mb-4">
              <strong>No Warranties:</strong> Products are provided "as-is" without warranties of merchantability or fitness for a particular purpose.
            </p>
            <p className="text-gray-700 mb-3"><strong>Your Responsibility:</strong> You are solely responsible for:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Reviewing products before use or sale</li>
              <li>Ensuring products meet your quality standards</li>
              <li>Verifying accuracy of information before distribution</li>
              <li>Compliance with platform policies where you sell products</li>
              <li>Any claims, representations, or guarantees you make to your customers</li>
            </ul>
            <p className="text-gray-700">
              <strong>Recommended:</strong> Always customize and add your own expertise to maximize value and differentiation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#003399] mb-6">7. REFUND POLICY INTERACTION</h2>
            <p className="text-gray-700 mb-4">
              <strong>30-Day Money-Back Guarantee:</strong> ContentForge offers a 30-day refund window.
            </p>
            <p className="text-gray-700 mb-3"><strong>After Refund:</strong> If you request and receive a refund, your PLR license is immediately terminated. You must:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Stop selling any products obtained from ContentForge</li>
              <li>Remove all ContentForge-sourced content from your platforms</li>
              <li>Delete all downloaded files</li>
            </ul>
            <p className="text-gray-700">
              <strong>Good Faith Exception:</strong> If you've made significant customizations, contact support to discuss continued use of heavily modified derivatives.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#003399] mb-6">8. INTELLECTUAL PROPERTY</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li><strong>Original Creation:</strong> ContentForge retains copyright on all original, unmodified products.</li>
              <li><strong>Your Modifications:</strong> Any substantial modifications, additions, or creative enhancements you make become your intellectual property, provided they transform the original work meaningfully.</li>
              <li><strong>Third-Party Content:</strong> Some products may include properly licensed third-party elements (fonts, images, templates). Check individual product documentation for specific attribution requirements.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#003399] mb-6">9. UPDATES & REVISIONS</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li><strong>Product Updates:</strong> ContentForge may update or improve products over time. License holders receive updated versions at no charge.</li>
              <li><strong>License Terms:</strong> We reserve the right to modify these license terms for future products. Existing license holders are grandfathered under original terms for products already purchased.</li>
              <li><strong>Notification:</strong> Material changes to PLR terms will be communicated via email and reflected on ContentForge.cc.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#003399] mb-6">10. TERMINATION</h2>
            <p className="text-gray-700 mb-3"><strong>Your license may be terminated if you:</strong></p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Violate the restrictions in Section 2</li>
              <li>Share your account access with others</li>
              <li>Attempt to resell PLR rights</li>
              <li>Use products in illegal or harmful ways</li>
              <li>Commit fraud or chargebacks after downloading products</li>
            </ul>
            <p className="text-gray-700 mb-3"><strong>Effect of Termination:</strong></p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Immediate loss of library access</li>
              <li>Obligation to cease selling products</li>
              <li>No refund eligibility if terminated for violation</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#003399] mb-6">11. LIMITATION OF LIABILITY</h2>
            <p className="text-gray-700 mb-4">
              ContentForge.cc liability is limited to the amount you paid for your license tier. We are not liable for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Lost profits or revenue from your use of products</li>
              <li>Third-party claims related to your modified products</li>
              <li>Platform suspensions or policy violations on external sites</li>
              <li>Any indirect, consequential, or punitive damages</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#003399] mb-6">12. GOVERNING LAW & DISPUTES</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li><strong>Jurisdiction:</strong> This agreement is governed by the laws of France.</li>
              <li><strong>Dispute Resolution:</strong> Any disputes will be resolved through:
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Good faith negotiation</li>
                  <li>Binding arbitration (if negotiation fails)</li>
                  <li>Litigation only as a last resort in the jurisdiction specified above</li>
                </ul>
              </li>
              <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining terms remain in effect.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#003399] mb-6">13. CONTACT & SUPPORT</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                For all inquiries including license questions, technical support, and legal matters, please <a href="contact" className="text-[#003399] hover:underline font-semibold">contact us through our contact form</a>.
              </p>
              <p className="text-gray-700">
                <strong>Response Time:</strong> We aim to respond within 48 business hours.
              </p>
            </div>
          </section>

          <hr className="my-8 border-gray-300" />

          {/* Acceptance */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#003399] mb-6">ACCEPTANCE OF TERMS</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="text-gray-700 mb-4">
                By completing your purchase and downloading any product from ContentForge.cc, you acknowledge that you have read, understood, and agree to be bound by this PLR License Agreement.
              </p>
              <p className="text-gray-700 mb-2"><strong>License Version:</strong> 1.0</p>
              <p className="text-gray-700"><strong>Last Updated:</strong> January 1, 2025</p>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#003399] mb-6">QUICK REFERENCE SUMMARY</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-900 mb-4">YOU CAN</h3>
                <ul className="list-none text-gray-700 space-y-2">
                  <li>✅ Edit, rebrand, and sell as your own</li>
                  <li>✅ Keep 100% of profits</li>
                  <li>✅ Give away as lead magnets</li>
                  <li>✅ Use in client services</li>
                  <li>✅ Repurpose into any format</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-900 mb-4">YOU CANNOT</h3>
                <ul className="list-none text-gray-700 space-y-2">
                  <li>❌ Resell PLR rights to others</li>
                  <li>❌ Share your account access</li>
                  <li>❌ Register copyright on unmodified products</li>
                  <li>❌ Give clients PLR rights</li>
                  <li>❌ Claim original authorship without editing</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-lg">
            <p className="text-gray-800 font-semibold mb-2">IMPORTANT DISCLAIMER:</p>
            <p className="text-gray-700">
              This license grants you broad commercial rights, but with responsibility. We trust you to use these products ethically and legally. When in doubt, <a href="contact" className="text-[#003399] hover:underline font-semibold">contact us</a> before taking action.
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
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Contact</a></li>
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
                <li><a href="terms" className="hover:text-[#FFD700] transition-colors">Terms & Conditions</a></li>
                <li><a href="privacy" className="hover:text-[#FFD700] transition-colors">Privacy Policy</a></li>
                <li><Link href="plr" className="hover:text-[#FFD700] transition-colors">Private Label Rights</Link></li>
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
