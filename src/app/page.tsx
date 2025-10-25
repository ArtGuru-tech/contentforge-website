"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import PricingSection from "@/components/PricingSection"

export default function Home() {
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
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">Home</a>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">Resources</a>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">Free Resources</a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-[#003399] transition-colors font-medium"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">Blog</a>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">Contact</a>
        </nav>

        <Button
          className="bg-[#003399] hover:bg-[#002266] text-white border-0"
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Subscribe
        </Button>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center bg-gradient-to-br from-[#003399] to-[#001155] text-white">
        <div className="mb-6">
          <span className="text-blue-200 text-sm">We create digital infoproducts for you</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Done-For-You Digital Products<br />
          <span className="text-[#FFD700]">to Grow Your Business</span>
        </h1>

        <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          You can instantly have your own digital products. Rebrand, sell, or use in any way. Without high investments or months of creation.
        </p>

        <div className="flex flex-col items-center gap-4 mb-12">
          <Button className="bg-[#FFD700] hover:bg-[#E6C200] text-[#003399] px-8 py-3 rounded-full text-lg font-semibold">
            ▶ Learn about Master Library
          </Button>

          {/* 14-Day Money-Back Guarantee Badge */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-[#FFD700] rounded-full px-6 py-3">
            <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center">
              <span className="text-[#003399] font-bold text-lg">✓</span>
            </div>
            <span className="text-white font-semibold">14-Day Money-Back Guarantee</span>
          </div>
        </div>

        {/* Animated Avatars Section */}
        <div className="flex justify-center items-center space-x-4 mb-4">
          <div className="flex -space-x-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00CED1] to-[#40E0D0] border-2 border-white"></div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] border-2 border-white"></div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#003399] to-[#0066CC] border-2 border-white"></div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] border-2 border-white"></div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#A8E6CF] to-[#DCEDC1] border-2 border-white"></div>
          </div>
          <div className="flex items-center space-x-1 text-[#FFD700]">
            <span>★★★★★</span>
          </div>
        </div>
        <p className="text-blue-200 text-sm">Trusted by early adopters</p>

        {/* Product Showcase */}
        <div className="mt-16 relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white text-gray-900 border-0 shadow-lg">
                <CardContent className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-[#003399] to-[#0066CC] rounded mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">EBOOK</span>
                  </div>
                  <h3 className="text-gray-900 font-semibold">Business Guide</h3>
                  <p className="text-gray-600 text-sm">Complete business strategy</p>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900 border-0 shadow-lg">
                <CardContent className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-[#00CED1] to-[#40E0D0] rounded mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">COURSE</span>
                  </div>
                  <h3 className="text-gray-900 font-semibold">Video Training</h3>
                  <p className="text-gray-600 text-sm">Step-by-step tutorials</p>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900 border-0 shadow-lg">
                <CardContent className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">TEMPLATE</span>
                  </div>
                  <h3 className="text-gray-900 font-semibold">Ready Templates</h3>
                  <p className="text-gray-600 text-sm">Professional designs</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto text-center bg-gray-50">
        <p className="text-gray-500 text-sm mb-8 font-medium">TRUSTED BY TOP BRANDS AND INDIVIDUALS WORLDWIDE</p>
        <div className="flex justify-center items-center space-x-12 opacity-60">
          <div className="text-gray-600 font-semibold">CPHERE</div>
          <div className="text-gray-600 font-semibold">CEO MasterMind</div>
          <div className="text-gray-600 font-semibold">Local Pulse</div>
          <div className="text-gray-600 font-semibold">DevCo</div>
        </div>
      </section>

      {/* Sell Digital Products Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Button className="bg-[#00CED1] hover:bg-[#00B8B8] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Discover Master Library
            </Button>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Sell digital products that<br />
              are ready to market
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Imagine you have over 1000 done-for-you digital products. Including video courses, ebooks, templates,
              and more. Sell them as your own products or use the content anywhere. <strong className="text-[#003399]">You set the limits</strong>.
            </p>
          </div>

          {/* Product Preview */}
          <div className="bg-gray-900 rounded-lg p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-2">Demanded Content</h3>
                    <p className="text-gray-400 text-sm">We create best-selling topics only that people buy most of the time.</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-2">Constantly Updated</h3>
                    <p className="text-gray-400 text-sm">The latest trends and strategies, ensuring reliability and accuracy of information.</p>
                  </div>
                </div>
              </div>
              <div>
                <Card className="bg-[#003399] text-white p-8 border-0">
                  <h3 className="text-2xl font-bold mb-4">Private Label Rights</h3>
                  <p className="mb-6">Sell, rebrand, edit, and use as you want, without any restrictions.</p>
                  <div className="bg-[#002266] rounded-lg p-4">
                    <div className="text-3xl font-bold text-[#FFD700]">📋</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 text-white p-8 border-0">
              <div className="text-4xl font-bold text-[#FFD700] mb-2">1000+</div>
              <h3 className="text-xl font-semibold mb-4">Digital Products</h3>
              <p className="text-gray-400">Almost unlimited selection in one of the biggest libraries. Endless options to use.</p>
            </Card>
            <Card className="bg-gray-100 p-8 border-0">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">15 Media Formats</h3>
              <p className="text-gray-600 mb-4">Business, Marketing, Social Media, E-commerce, and Entrepreneurship.</p>
              <div className="mt-6">
                <h4 className="font-semibold mb-2 text-[#003399]">Premium Quality</h4>
                <p className="text-gray-600 text-sm">Interesting content that is inspired by the best brands in the world.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Unlimited Options Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-full inline-block text-sm mb-8">
            You have complete freedom
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Unlimited options to<br />
            use the products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#003399] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Expand product portfolio</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00CED1] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧲</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Offer as free leadmagnet</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Educate your audience</h3>
            </div>
          </div>

          <Button className="bg-[#003399] hover:bg-[#002266] text-white px-8 py-3 rounded-full text-lg font-semibold mt-12">
            ▶ Explore Master Library
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center">
                <span className="text-gray-900 text-sm">★</span>
              </div>
              <span className="text-sm text-gray-400">Rated 4.7/5 overall by our users</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">"Must have content"</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="text-[#FFD700] text-2xl mb-2">★</div>
              <div className="text-lg font-semibold">Trustpilot 4.7/5</div>
              <div className="text-[#FFD700]">★★★★★</div>
            </div>
            <div className="text-center">
              <div className="text-[#00CED1] text-2xl mb-2">f</div>
              <div className="text-lg font-semibold">Facebook 5.0/5</div>
              <div className="text-[#FFD700]">★★★★★</div>
            </div>
            <div className="text-center">
              <div className="text-[#003399] text-2xl mb-2">G</div>
              <div className="text-lg font-semibold">Google 4.5/5</div>
              <div className="text-[#FFD700]">★★★★★</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700 p-6 border-0">
              <div className="text-[#FFD700] text-xl mb-4">"</div>
              <p className="text-gray-300 mb-4">I saved thousands of hours of creation with one investment.</p>
              <p className="text-gray-400 text-sm mb-4">Now I can focus on changing the lives of others with information that not everybody has access to.</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#003399] rounded-full"></div>
                <div>
                  <div className="font-semibold">Emily B.</div>
                  <div className="text-gray-400 text-sm">United Kingdom</div>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-6 border-0">
              <div className="text-[#FFD700] text-xl mb-4">"</div>
              <p className="text-gray-300 mb-4">It saved me so much time! I'm happy to have found it right now.</p>
              <p className="text-gray-400 text-sm mb-4">I believe this package to have saved me 6 months of development time and boosted my credibility instantly.</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#00CED1] rounded-full"></div>
                <div>
                  <div className="font-semibold">James W.</div>
                  <div className="text-gray-400 text-sm">Australia</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Digital Product Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-[#003399] to-[#001155] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="bg-[#FFD700] text-[#003399] px-4 py-2 rounded-full inline-block text-sm mb-8 font-semibold">
              Premium infoproduct from A to Z
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get custom digital product<br />
              <span className="text-[#FFD700]">tailored to your brand</span>
            </h2>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Now you can have fully custom-made, highest-quality infoproduct with complete ownership license.
              Grow your sales, get leads, engage your audience and increase credibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white text-gray-900 p-6 border-0">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-600 font-bold">EBOOK MOCKUP</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Produced by experts</h3>
              <p className="text-gray-600 text-sm">Each part of the resource is created by our experienced team.</p>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-6 border-0">
              <h3 className="text-white text-lg font-semibold mb-4">Professional designs</h3>
              <p className="text-gray-400 text-sm mb-6">We bring your digital products to life with beautiful mockups.</p>
              <div className="w-full h-32 bg-[#003399] rounded-lg flex items-center justify-center">
                <span className="text-[#FFD700]">3D MOCKUP</span>
              </div>
            </Card>

            <div className="space-y-4">
              <Card className="bg-white text-gray-900 p-6 border-0">
                <h3 className="font-semibold mb-2">Engaging content</h3>
                <p className="text-gray-600 text-sm">You'll get content that people actually want to read.</p>
              </Card>
              <Card className="bg-[#00CED1] text-white p-6 border-0">
                <h3 className="font-semibold mb-2">Full Ownership</h3>
                <p className="text-sm">You receive full rights to the product, ensuring it's yours to use.</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-[#FFD700] hover:bg-[#E6C200] text-[#003399] px-8 py-3 rounded-full text-lg font-semibold mb-8">
              ▶ Get Custom Digital Product
            </Button>
            <Button className="bg-[#00CED1] hover:bg-[#00B8B8] text-white px-6 py-2 rounded-full text-sm font-semibold ml-4">
              Up to 6 Formats
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="bg-[#003399] text-white px-4 py-2 rounded-full inline-block text-sm mb-8 font-semibold">
              Grow your business to the next level
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What digital products<br />
              you can get?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Stop wasting time searching for quality content or creating products from scratch.
              Eliminate the barrier of huge initial investments and no product ideas.
            </p>
          </div>

          {/* Ebooks Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gray-900 text-white px-4 py-2 rounded-full inline-block text-sm mb-6 font-semibold">
                  200+ Premium PLR Ebooks
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Ebooks and Guidebooks</h3>
                <p className="text-gray-600 mb-6">
                  Give your audience engaging, quality reading. Only real and useful information.
                  Both, in-depth and straightforward explanations on topics your customers want to consume.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#003399] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-700">Unique content</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#003399] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-700">20-150 Pages per book</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#003399] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-700">Well-structured</span>
                  </div>
                </div>

                <Button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800">
                  🔍 Preview Ebooks
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="w-full h-32 bg-gradient-to-br from-[#003399] to-[#0066CC] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">AI FOR PRODUCTIVITY</span>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#00CED1] to-[#40E0D0] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">FUNNEL STRATEGIES</span>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">MONEY PSYCHOLOGY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Courses Section */}
          <div className="bg-gray-900 text-white rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-3 gap-4">
                <div className="w-full h-32 bg-gradient-to-br from-[#8A2BE2] to-[#9370DB] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">PODCAST LAUNCH</span>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#00CED1] to-[#4169E1] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">META ADS</span>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#FF4500] to-[#FF6347] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">AI FOR PRODUCTIVITY</span>
                </div>
              </div>

              <div>
                <div className="bg-white text-gray-900 px-4 py-2 rounded-full inline-block text-sm mb-6 font-semibold">
                  200+ PLR Videos and Audios
                </div>
                <h3 className="text-3xl font-bold mb-6">Video and Audio Courses</h3>
                <p className="text-gray-300 mb-6">
                  Straight to the point, actionable, and explanatory courses.
                  Highly-demanded visual form of content and also perfect for those who prefer to listen podcasts and learn on the move.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#FFD700] rounded-full flex items-center justify-center">
                      <span className="text-gray-900 text-xs">✓</span>
                    </div>
                    <span className="text-sm">Hands-on courses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#FFD700] rounded-full flex items-center justify-center">
                      <span className="text-gray-900 text-xs">✓</span>
                    </div>
                    <span className="text-sm">With and without face</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#FFD700] rounded-full flex items-center justify-center">
                      <span className="text-gray-900 text-xs">✓</span>
                    </div>
                    <span className="text-sm">Presentation style</span>
                  </div>
                </div>

                <Button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100">
                  🔍 Preview Courses
                </Button>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gray-900 text-white px-4 py-2 rounded-full inline-block text-sm mb-6 font-semibold">
                  1000+ PLR Short Formats
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Actionable Resources</h3>
                <p className="text-gray-600 mb-6">
                  Provide other rich content formats that are increasing in popularity.
                  Mini-courses, Workbooks, Notion Templates, AI prompts, Templates, Articles, Toolstacks, and more.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#00CED1] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-700">Focused learning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#00CED1] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-700">Solution and goal oriented</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#00CED1] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-700">Short-form content</span>
                  </div>
                </div>

                <Button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800">
                  🔍 Preview Resources
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="w-full h-32 bg-gradient-to-br from-[#FF4500] to-[#FF6347] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">6-FIGURE BUSINESS</span>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#00CED1] to-[#20B2AA] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">TIME MANAGEMENT</span>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#DC143C] to-[#B22222] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">COLD CALLS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#003399] hover:bg-[#002266] text-white px-8 py-3 rounded-full text-lg font-semibold">
              ▶ Explore All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="px-6 py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Free Resources</h2>
            <p className="text-gray-400 text-lg">
              All designed to simplify your online business journey, no matter your experience level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 p-8 text-center border-0">
              <div className="w-full h-48 bg-[#003399] rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white font-bold">BUSINESS PLAN</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Online Business Master Plan</h3>
              <p className="text-gray-400 mb-6">
                Access a guide full of actionable steps and tips for growing your online business.
              </p>
              <Button className="bg-[#FFD700] hover:bg-[#E6C200] text-[#003399] px-6 py-2 rounded-full font-semibold">
                Kickstart your business
              </Button>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-8 text-center border-0">
              <div className="w-full h-48 bg-gray-600 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white font-bold">TOOLS</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Tools Collection</h3>
              <p className="text-gray-400 mb-6">
                Explore a curated selection of best tools that will help you achieve your goals.
              </p>
              <Button className="bg-[#00CED1] hover:bg-[#00B8B8] text-white px-6 py-2 rounded-full font-semibold">
                Explore tools repository
              </Button>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-8 text-center border-0">
              <div className="w-full h-48 bg-[#FFD700] rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white font-bold">IDEAS</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Product Ideas</h3>
              <p className="text-gray-400 mb-6">
                Get inspired by 100+ digital product ideas that you can create and offer to your audience.
              </p>
              <Button className="bg-[#003399] hover:bg-[#002266] text-white px-6 py-2 rounded-full font-semibold">
                Explore ideas
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

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
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Free Resources</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Digital Tools Repository</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Master Library</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Custom Book Service</a></li>
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
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">Partner Terms</a></li>
              </ul>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <p className="text-gray-400 text-xs text-center mb-4 uppercase tracking-wide">Secure Payment Methods</p>
            <div className="flex justify-center items-center gap-4 flex-wrap mb-8">
              {/* Stripe */}
              <div className="bg-white px-4 py-2 rounded shadow-sm">
                <span className="text-[#635BFF] font-bold text-sm">stripe</span>
              </div>

              {/* PayPal */}
              <div className="bg-white px-4 py-2 rounded shadow-sm">
                <span className="text-[#0070BA] font-bold text-sm">Pay</span>
                <span className="text-[#003087] font-bold text-sm">Pal</span>
              </div>

              {/* Visa */}
              <div className="bg-white px-4 py-2 rounded shadow-sm">
                <span className="text-[#1434CB] font-bold text-sm">VISA</span>
              </div>

              {/* Mastercard */}
              <div className="bg-white px-4 py-2 rounded shadow-sm">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-[#EB001B] rounded-full opacity-80"></div>
                  <div className="w-3 h-3 bg-[#FF5F00] rounded-full opacity-80 -ml-1.5"></div>
                  <span className="text-gray-800 font-semibold text-xs ml-1">Mastercard</span>
                </div>
              </div>

              {/* Amex */}
              <div className="bg-[#006FCF] px-4 py-2 rounded shadow-sm">
                <span className="text-white font-bold text-sm">AMEX</span>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 Made by ContentForge s.r.o.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
