'use client'

import React, { useState } from 'react'

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    message: '',
    agreeToTexts: false
  })

  // Phone number formatting function
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, '')
    
    // Format as (xxx) xxx-xxxx
    if (phoneNumber.length < 4) {
      return phoneNumber
    } else if (phoneNumber.length < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    
    if (name === 'phone') {
      // Format phone number
      const formattedPhone = formatPhoneNumber(value)
      setFormData(prev => ({
        ...prev,
        [name]: formattedPhone
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Book A Consultation
          </h2>
          <p className="text-lg text-gray-700">
            Schedule your free consultation today
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 focus:border-blue-800 focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 123-4567"
                maxLength={14}
                className="w-full p-3 border border-gray-300 focus:border-blue-800 focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-900 mb-2">Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 focus:border-blue-800 focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Day:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 focus:border-blue-800 focus:outline-none transition-colors duration-200 text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Approximate Time:</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 focus:border-blue-800 focus:outline-none transition-colors duration-200 text-gray-900"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-900 mb-2">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border border-gray-300 focus:border-blue-800 focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-500"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTexts"
                  checked={formData.agreeToTexts}
                  onChange={handleInputChange}
                  className="mt-1"
                  required
                />
                <span className="text-sm text-gray-900">
                  I agree to receive text messages from Pro Roofing and Construction for business purposes.
                </span>
              </label>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-blue-800 text-white px-8 py-3 font-semibold hover:bg-blue-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              SUBMIT CONSULTATION REQUEST
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ConsultationForm 