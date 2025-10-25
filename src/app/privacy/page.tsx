import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacyPage() {
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
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">Contact</a>
        </nav>

        <Button className="bg-[#003399] hover:bg-[#002266] text-white border-0">
          Sign In
        </Button>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-[#003399] mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8"><strong>Last updated:</strong> October 25, 2025</p>

          <p className="text-gray-700 mb-6">
            This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Service and informs you about your privacy rights and how the law protects you.
          </p>

          <p className="text-gray-700 mb-8">
            We use your personal data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Interpretation and Definitions</h2>

            <h3 className="text-xl font-semibold text-[#003399] mb-3">Definitions</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our") refers to <strong>Bakchich SAS</strong>, 60 Rue François Ier, 75008 Paris, France.</li>
              <li><strong>Website</strong> refers to <strong>CONTENTFORGE</strong>, accessible from <a href="https://contentforge.cc/" className="text-[#003399] hover:underline">https://contentforge.cc/</a></li>
              <li><strong>Service</strong> refers to the Website.</li>
              <li><strong>You</strong> means the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Collecting and Using Your Personal Data</h2>

            <h3 className="text-xl font-semibold text-[#003399] mb-3">Types of Data Collected</h3>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Personal Data</h4>
              <p className="text-gray-700 mb-3">While using our Service, we may ask you to provide us with certain personally identifiable information such as:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Email address</li>
                <li>First and last name</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Usage Data</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Usage Data</h4>
              <p className="text-gray-700">
                Usage Data is collected automatically when using the Service, including IP address, browser type, version, pages visited, time spent, and similar diagnostic data.
              </p>
            </div>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Tracking Technologies and Cookies</h2>

            <p className="text-gray-700 mb-4">
              We use Cookies and similar tracking technologies to analyze and improve our Service.
            </p>
            <p className="text-gray-700 mb-4">Our tracking stack includes:</p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Google Analytics</strong> — for traffic and usage analytics</li>
              <li><strong>Microsoft Clarity</strong> — for heatmaps and behavioral insights</li>
              <li><strong>Google Tag Manager</strong> — for managing analytics and tracking tags</li>
              <li><strong>Invisible reCAPTCHA</strong> — to protect our website from spam and abuse</li>
            </ul>

            <p className="text-gray-700">
              You can manage your cookie preferences in your browser settings.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Use of Your Personal Data</h2>

            <p className="text-gray-700 mb-3">We may use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To manage your account and registration</li>
              <li>To communicate with you via email, SMS, or notifications</li>
              <li>To send you <strong>emails or newsletters if you opt-in</strong>, or when you have an existing relationship with us (Yes, we send emails to users or users can opt-in to receive emails from us.)</li>
              <li>To improve our Service, features, and user experience</li>
              <li>To comply with legal obligations and prevent fraud</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Retention of Your Data</h2>

            <p className="text-gray-700">
              We retain personal data only as long as necessary to fulfill the purposes outlined here, comply with legal obligations, resolve disputes, or enforce agreements.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Data Transfer and Security</h2>

            <p className="text-gray-700 mb-3">
              Your information may be processed in locations outside your country. We ensure that appropriate safeguards are in place for data protection.
            </p>
            <p className="text-gray-700">
              While we use commercially reasonable measures, no method of transmission over the Internet or electronic storage is completely secure.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Your Data Rights</h2>

            <p className="text-gray-700">
              You have the right to access, correct, or delete your personal data. You may request this by contacting us at <strong>infos@bakchich.app</strong>.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Children's Privacy</h2>

            <p className="text-gray-700">
              Our Service does not address anyone under the age of 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Links to Other Websites</h2>

            <p className="text-gray-700">
              Our Service may contain links to other websites not operated by us. We are not responsible for their content or privacy practices.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Updates to This Privacy Policy</h2>

            <p className="text-gray-700">
              We may update this Privacy Policy periodically. Changes will be posted on this page and reflected in the "Last updated" date above.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Contact Us</h2>

            <p className="text-gray-700 mb-2">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              📧 <strong>infos@bakchich.app</strong>
            </p>
          </section>
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
