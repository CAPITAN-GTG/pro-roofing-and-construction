import React from 'react'
import { Phone, Mail } from 'lucide-react'

const ContactInfoSection = () => {
  return (
    <section className="py-20 bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Proud Sponsors Section */}
        <div className="text-center mb-16 pb-8 border-b border-blue-700">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
            Proud Sponsors
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-100">Patio Cover Fort Lauderdale</p>
            <p className="text-lg text-gray-100">Best Concrete Patios Fargo, ND</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Chris 903-274-0664</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Steven 972-322-3182</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">WORKING HOURS</h3>
            <p className="text-xl font-semibold">24 HRS A DAY</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">EMAIL</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">Chris@ProRoofAndConstruction.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">Steven@ProRoofAndConstruction.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfoSection 