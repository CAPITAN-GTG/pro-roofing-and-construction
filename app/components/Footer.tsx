import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Shield, 
  FileText, 
  Home, 
  AlertTriangle, 
  Building, 
  Wrench,
  Fence,
  Calendar,
  Facebook,
  ExternalLink
} from 'lucide-react'

const Footer = () => {
  const serviceLinks = [
    { name: 'Roofing Services', href: '/pages/roof-gutters', icon: Home },
    { name: 'Emergency Repair', href: '/pages/emergency-repairs', icon: AlertTriangle },
    { name: 'Gutters', href: '/pages/roof-gutters', icon: Home },
    { name: 'Construction', href: '/pages/construction', icon: Building },
    { name: 'Remodeling', href: '/pages/construction', icon: Wrench },
    { name: 'Fencing', href: '/pages/fencing', icon: Fence },
  ]

  const recentPosts = [
    {
      title: 'Fixing Drafty Doors and Windows: Why It\'s Essential Before Winter Arrives',
      date: 'November 12, 2024',
      href: '/pages/blog/fixing-drafty-doors-windows',
      image: '/snow-house.jpeg'
    },
    {
      title: 'Expanding Your Home: Adding a Bedroom',
      date: 'August 7, 2024',
      href: '/pages/blog/expanding-home-bedroom',
      image: '/big-room.jpg'
    }
  ]

  const legalLinks = [
    { name: 'Certificate of Liability Insurance', href: '/pages/certificate-liability', icon: Shield },
    { name: 'Privacy Policy', href: '/pages/privacy-policy', icon: FileText },
  ]

  return (
    <footer className="bg-white border-t-4 border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            
            {/* Company Info Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <Link href="/" className="flex items-center space-x-3 group">
                  <div className="p-2 transition-all duration-300 group-hover:scale-90">
                    <Image 
                      src="/logo.webp" 
                      alt="Pro Roof & Construction Logo" 
                      width={60} 
                      height={60} 
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base max-w-md mx-auto md:mx-0">
                  At Pro Roofing and Construction, you're not merely hiring a contractor; you're gaining a valued addition to your family. As a family-owned business, we extend the same care and dedication to you as we do within our own family.
                </p>
                
                {/* Legal Links */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Legal & Policies</h4>
                  <div className="space-y-2">
                    {legalLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center justify-center md:justify-start space-x-2 text-sm text-gray-600 hover:text-blue-800 transition-colors duration-200 group"
                      >
                        <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                        <span>{link.name}</span>
                        <ExternalLink className="h-3 w-3 opacity-50" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="border-l-0 lg:border-l border-gray-200 lg:pl-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center justify-center md:justify-start">
                <Building className="h-5 w-5 text-blue-800 mr-2" />
                Company Services
              </h3>
              <div className="space-y-3">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="flex items-center justify-center md:justify-start space-x-3 text-gray-600 hover:text-blue-800 transition-all duration-200 group"
                  >
                    <service.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200 text-blue-600" />
                    <span className="text-sm font-medium">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Posts Section */}
            <div className="border-l-0 lg:border-l border-gray-200 lg:pl-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center justify-center md:justify-start">
                <Calendar className="h-5 w-5 text-blue-800 mr-2" />
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <Link
                    key={index}
                    href={post.href}
                    className="block group"
                  >
                    <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 transition-colors duration-200 border border-transparent hover:border-gray-200">
                      {/* Small Post Image */}
                      <div className="flex-shrink-0 w-16 h-12 overflow-hidden bg-gray-200">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      
                      {/* Post Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-800 transition-colors duration-200 line-clamp-2 text-left">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 flex items-center mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            
            {/* Copyright */}
            <div className="text-sm text-gray-600">
              <p>&copy; {new Date().getFullYear()} Pro Roof &amp; Construction. All rights reserved.</p>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 font-medium">Follow Us:</span>
              <Link
                href="https://facebook.com/proroofconstruction"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-blue-800 text-white hover:bg-blue-900 transition-all duration-200 group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer