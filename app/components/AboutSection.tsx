import React from 'react'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const AboutSection = () => {
  return (
    <section className="py-20 border-b-4 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-semibold text-blue-800 mb-2">ABOUT US</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Providing All Your Roofing Solutions
            </h3>
            <div className="flex items-center mb-6">
              <div className="text-6xl font-bold text-blue-800 mr-4">16</div>
              <div className="text-lg text-gray-700">
                Years Of Roofing And<br />Construction Services
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              As a family-owned roofing and construction company, we bring a personal touch to every project, treating each client like a member of our own family.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-800" />
                <span className="text-gray-700">Consultations and Estimates</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-800" />
                <span className="text-gray-700">Repairs and Maintenance</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-800" />
                <span className="text-gray-700">Inspections</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-800" />
                <span className="text-gray-700">Convenient Installations</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/roofing-solutions.webp"
              alt="Pro Roofing and Construction Family Team"
              width={600}
              height={400}
              className="object-cover w-full h-96 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 