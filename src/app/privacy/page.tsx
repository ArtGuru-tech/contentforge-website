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
          <h1 className="text-4xl font-bold text-[#003399] mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">This privacy policy defines the conditions for processing personal data by BAKCHICH.</p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">
              This privacy policy (hereinafter the "Privacy Policy") defines the conditions for processing personal data by <strong>BAKCHICH</strong>, société par actions simplifiée, registered under number 942552274, with registered office at 60 RUE FRANCOIS IER, PARIS, 75008, France, concerning users browsing the Website and its Customers (hereinafter the "Users").
            </p>
            <p className="text-gray-700">
              Personal data of the User are processed by Bakchich as data controller. Bakchich complies in all circumstances with the regulations applicable to it regarding the protection of personal data, in particular with the provisions of the French Data Protection Act No. 78-17 of January 6, 1978 as amended and EU Regulation 2016/679.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">1. Categories of Data Processed</h2>
            <p className="text-gray-700 mb-4">The personal data concerned by the processing implemented within the framework of these provisions are:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Identification data such as surname, first name, email, address, others</li>
              <li>Data related to User interactions with the Website</li>
              <li>Data related to purchasing behaviors</li>
              <li>Location data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">2. Processing Purposes</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#003399] mb-3">Customer Account Management</h3>
                <p className="text-gray-700 mb-3">
                  Information relating to the Customer Account is processed to create and manage the Customer Account. The legal basis for this processing is consent, which can be withdrawn at any time.
                </p>
                <p className="text-gray-700">
                  The communication of the User's personal data is essential for creating a Customer Account. Refusal to communicate this data results in the impossibility of creating the Customer Account.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#003399] mb-3">Order Processing</h3>
                <p className="text-gray-700 mb-3">
                  Information relating to orders for Products and/or Services is collected for processing and order tracking purposes, as well as for fraud prevention, statistical analysis and customer knowledge.
                </p>
                <p className="text-gray-700">
                  The legal basis for this processing is the terms of sale and use. Communication of the User's personal data is essential to place an order on the Website.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#003399] mb-3">Marketing and Advertising</h3>
                <p className="text-gray-700 mb-3">
                  Bakchich also uses certain personal data of Users for marketing and targeted advertising purposes (sending electronic communications, postal or telephone prospecting and advertising profiling by combining data).
                </p>
                <p className="text-gray-700">
                  The legal basis for this processing is consent, which can be withdrawn at any time, in which case commercial communications directed towards the User will cease.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">3. Data Recipients</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Personal data are hosted by a service provider located in the European Union, whose identity and contact details are specified in the legal notices of the Website.
              </p>
              <p>
                The User is informed that Bakchich may also share their personal data with public bodies or authorities making the request to comply with a legal obligation or protect rights and with potential future acquirers in compliance with Personal Data Regulations.
              </p>
              <p>
                Certain personal data may be transmitted to Bakchich partners (the "Sub-processors"). Bakchich's Sub-processors have their own privacy policies to which the User is invited to refer.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">4. Data Retention Period</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Users' personal data are retained only for the time necessary to achieve the purpose for which Bakchich collected this data, in order to meet the needs of Users or to fulfill its legal or regulatory archiving obligations.
              </p>
              <p className="text-gray-700 mb-4">
                To establish the retention period for personal data, Bakchich applies the following criteria:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>In case of ordering Products and/or Services: personal data are retained for the duration of the contractual relationship and three years after collection or the last contact with the User, for commercial prospecting purposes</li>
                <li>Bakchich is likely to retain certain data in order to fulfill its legal or regulatory archiving obligations to enable it to exercise its rights and/or for statistical or historical purposes</li>
              </ul>
              <p className="text-gray-700">
                At the end of the periods mentioned above, personal data will be deleted or Bakchich will proceed with their anonymization.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">5. Rights of Data Subjects</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                The User has the right to access, rectify, delete (erasure), portability of their personal data, limitation of processing as well as a right to object to the processing of their data collected and processed by Bakchich.
              </p>
              <p className="text-gray-700 mb-4">
                To exercise these rights, contact Bakchich directly at the following email address: <strong>contact@bakchich.com</strong>
              </p>
              <p className="text-gray-700">
                In case of complaint, the User can contact the CNIL, which is the competent authority for the protection of personal data, whose contact details are: 3 Place de Fontenoy, 75007 Paris, telephone: 01 53 73 22 22.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">6. Cookie Management</h2>
            <div className="space-y-6">
              <p className="text-gray-700">
                Cookies are information placed by a website on a user's equipment when they visit the Website. A cookie does not necessarily contain the User's name or email address.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#003399] mb-4">Types of Cookies We Use</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Required/Optional</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Functional</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Required</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Analytics</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Optional</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Personalized Content</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Optional</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Personalized Advertising</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Optional</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Product Development</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Optional</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#003399] mb-3">Cookie Consent</h3>
                <p className="text-gray-700 mb-3">
                  The installation of certain cookies is subject to User consent, when they do not have the exclusive purpose of allowing or facilitating navigation on the Website or when they are not strictly necessary for the provision of Products and/or Services.
                </p>
                <p className="text-gray-700">
                  During the first visit to the Website, the User is informed by a banner of the conditions for depositing cookies on their terminal, they can refuse or accept them freely.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#003399] mb-3">Managing Your Cookie Preferences</h3>
                <p className="text-gray-700 mb-3">
                  The User can always refuse the storage of cookies by configuring their browser. Complete deactivation of essential cookies may prevent the use of all interactive features of the Website.
                </p>
                <p className="text-gray-700">
                  For information on how to manage cookies in your specific browser, please refer to your browser's help documentation or settings menu.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-gray-100 p-6 rounded-lg mt-12">
            <h2 className="text-2xl font-bold text-[#003399] mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-2">
              <strong>Data Controller:</strong> BAKCHICH SAS
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> 60 RUE FRANCOIS IER, PARIS, 75008, France
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> contact@bakchich.com
            </p>
            <p className="text-gray-700">
              <strong>Registration:</strong> 942 552 274 R.C.S. Paris
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
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Private Label Rights</a></li>
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
