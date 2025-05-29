import React from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Shield } from 'lucide-react'

const MessageSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/roofing-solutions.webp"
          alt="Professional roofing consultation background"
          className="w-full h-full object-cover"
        />
        {/* Black overlay with low opacity */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-semibold mb-2 text-blue-300">CONSULTATION</h2>
        <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
          Message Us To Set Up A Free Consultation
        </h3>
        <p className="text-xl mb-8 text-gray-200">
          Pro Roofing and Construction is part of the Better Business Bureau and adheres to the NRCA pledge and is committed to promoting professionalism.
        </p>

        {/* Better Business Bureau Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          {/* BBB Logo placeholder with icon */}
          <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Shield className="h-8 w-8 text-blue-300" />
            <span className="text-white font-semibold">Better Business Bureau</span>
          </div>
          
          {/* BBB Button */}
          <Link
            href="https://www.bbb.org/us/tx/greenville/profile/roofing-contractors/pro-roofing-and-construction-llc-0875-91342633"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-800 text-white px-6 py-3 font-semibold hover:bg-blue-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span>VIEW BBB PROFILE</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        {/* Contact Button */}
        <Link
          href="/pages/contact"
          className="inline-flex items-center space-x-2 bg-white text-blue-800 px-8 py-4 font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <span>CONTACT US</span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}

export default MessageSection 