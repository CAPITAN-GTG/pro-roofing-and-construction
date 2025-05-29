"use client"
import React from 'react'
import Link from 'next/link'

const ServicesSection = () => {
  const services = [
    {
      title: 'Roofing & Gutters',
      description: 'If your home requires a new roof due to leaks or age-related issues, we specialize in promptly installing a replacement roof to address your needs efficiently.',
      iconImage: '/roof-icon.png',
      serviceImage: '/roofing-n-gutters.jpg',
      href: '/pages/roof-gutters'
    },
    {
      title: 'Emergency Repairs',
      description: 'In cases of storms or other emergencies, our team can swiftly provide temporary roof patches until we schedule and install a new roof for you.',
      iconImage: '/emergency-icon.png',
      serviceImage: '/emergency-repairs.jpg',
      href: '/pages/emergency-repairs'
    },
    {
      title: 'Construction',
      description: 'Are you considering home expansions, kitchen upgrades, or bathroom renovations? Our skilled team can deliver efficient and high-quality results in no time.',
      iconImage: '/construction-icon.png',
      serviceImage: '/construction.jpg',
      href: '/pages/construction'
    },
    {
      title: 'Fencing',
      description: 'Custom fencing brings a touch of individuality to your property, created to match your needs. It offers both aesthetic appeal and personalized functionality for your space.',
      iconImage: '/fencing-icon.png',
      serviceImage: '/fencing.jpg',
      href: '/pages/fencing'
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-800 mb-2">WHAT WE OFFER</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            One Stop Shop For Roofing And Construction Solutions
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-white border border-gray-200 hover:border-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {/* Service Image - Simple approach */}
              <div className="h-48 w-full">
                <img
                  src={service.serviceImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  onLoad={() => console.log(`✅ Successfully loaded: ${service.serviceImage}`)}
                  onError={(e) => {
                    console.error(`❌ Failed to load: ${service.serviceImage}`)
                    // Show a placeholder color instead
                    e.currentTarget.style.backgroundColor = '#e5e7eb'
                    e.currentTarget.style.display = 'block'
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 p-3 group-hover:bg-blue-900 transition-colors duration-200 flex-shrink-0">
                    <img
                      src={service.iconImage}
                      alt={`${service.title} icon`}
                      className="w-8 h-8 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-200">
                      {service.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 