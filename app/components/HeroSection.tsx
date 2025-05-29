'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // All JPG images for the slideshow
  const slideImages = [
    '/construction.jpg',
    '/emergency-repairs.jpg', 
    '/fencing.jpg',
    '/roofing-n-gutters.jpg',
    '/big-room.jpg',
    '/small-room.jpg'
  ]

  // Auto-rotate slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % slideImages.length
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [slideImages.length])

  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slideImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Professional roofing and construction work ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center text-white">
            
            {/* Main Title */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Professional Roofing & Construction
              </h1>
              <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-4"></div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-100">
                Pro Roofing and Construction
              </h2>
            </div>

            {/* Subtitle */}
            <div className="mb-8">
              <p className="text-lg md:text-xl text-gray-200 mb-2">
                Based in Caddo Mills, TX
              </p>
              <p className="text-base md:text-lg text-gray-300">
                Serving Greenville and surrounding counties
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex justify-center">
              <Link
                href="/pages/contact"
                className="inline-flex items-center space-x-3 bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
              >
                <span>GET FREE ESTIMATE</span>
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 