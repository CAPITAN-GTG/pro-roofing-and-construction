'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Home, 
  Settings, 
  Wrench, 
  AlertTriangle, 
  Building, 
  Fence,
  FolderOpen,
  HelpCircle,
  Phone,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navigationItems = [
    { name: 'Home', href: '/pages/home', icon: Home },
    { name: 'Projects', href: '/pages/projects', icon: FolderOpen },
    { name: 'FAQ', href: '/pages/faq', icon: HelpCircle },
    { name: 'Contact', href: '/pages/contact', icon: Phone },
  ]

  const serviceItems = [
    { name: 'Roof & Gutters', href: '/pages/roof-gutters', icon: Home },
    { name: 'Emergency Repairs', href: '/pages/emergency-repairs', icon: AlertTriangle },
    { name: 'Construction', href: '/pages/construction', icon: Building },
    { name: 'Fencing', href: '/pages/fencing', icon: Fence },
  ]

  return (
    <nav className="bg-white shadow-lg border-b-4 border-blue-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32 lg:h-36">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="p-2 transition-all duration-300 group-hover:scale-95">
                <Image 
                  src="/logo.png" 
                  alt="Pro Roof & Construction Logo" 
                  width={140} 
                  height={140} 
                  className="object-contain lg:w-44 lg:h-44"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Home */}
            <Link
              href="/pages/home"
              className="flex items-center space-x-2 px-5 py-4 lg:py-5 text-gray-700 hover:text-blue-800 hover:bg-gray-50 transition-all duration-200 group border-l border-gray-200"
            >
              <Home className="h-3 w-3 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium text-xs">Home</span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-2 px-5 py-4 lg:py-5 text-gray-700 hover:text-blue-800 hover:bg-gray-50 transition-all duration-200 group border-l border-gray-200"
              >
                <Settings className="h-3 w-3 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium text-xs">Services</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border border-gray-200 z-50 animate-in slide-in-from-top-2 duration-200">
                  <div className="py-2">
                    {serviceItems.map((service, index) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200 group border-b border-gray-100 last:border-b-0"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <service.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200 text-blue-600" />
                        <span className="font-medium">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Items */}
            {navigationItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-5 py-4 lg:py-5 text-gray-700 hover:text-blue-800 hover:bg-gray-50 transition-all duration-200 group border-l border-gray-200"
              >
                <item.icon className="h-3 w-3 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium text-xs">{item.name}</span>
              </Link>
            ))}

            {/* Contact Us Button */}
            <div className="ml-6 pl-6 border-l-2 border-gray-300">
              <Link
                href="/pages/contact"
                className="bg-blue-800 text-white px-7 py-4 lg:py-5 text-xs font-semibold hover:bg-blue-900 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Phone className="h-3 w-3" />
                <span>CONTACT US</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-800 hover:bg-gray-50 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top-2 duration-200">
            <div className="py-4 space-y-1">
              {/* Home */}
              <Link
                href="/pages/home"
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-800 hover:bg-gray-50 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span className="font-medium">Home</span>
              </Link>

              {/* Services */}
              <div className="px-4 py-2">
                <div className="flex items-center space-x-3 text-gray-900 font-medium py-1">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <span>Services</span>
                </div>
                <div className="ml-8 mt-2 space-y-1">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-3 px-2 py-2 text-gray-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <service.icon className="h-4 w-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Navigation Items */}
              {navigationItems.slice(1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-800 hover:bg-gray-50 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}

              {/* Mobile Contact Button */}
              <div className="px-4 pt-4 border-t border-gray-200 mt-4">
                <Link
                  href="/pages/contact"
                  className="w-full bg-blue-800 text-white px-4 py-3 font-semibold hover:bg-blue-900 transition-all duration-200 flex items-center justify-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  <span>CONTACT US</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar