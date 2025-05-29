import React from 'react'
import { Wrench, Users, Clock } from 'lucide-react'

const WhyUsSection = () => {
  const whyUsFeatures = [
    {
      title: 'Craftsmanship',
      description: 'Our roofing company has expertise, earned through years of industry experience and a dedicated commitment to mastering the intricacies of roofing systems and construction needs.',
      icon: Wrench
    },
    {
      title: 'Customer Satisfaction',
      description: 'Customer satisfaction stands as our top priority, driving us to deliver exceptional service and exceed expectations with every roofing project we undertake.',
      icon: Users
    },
    {
      title: '24/7 Service',
      description: 'Count on us to deliver high-quality services around the clock. Whether it\'s urgent roof installations, swift gutter replacements, or any emergency situation, simply reach out to us for prompt assistance.',
      icon: Clock
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-800 mb-2">WHAT WE DO</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Why People Choose Pro Roofing and Construction
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            At Pro Roofing and Construction, our commitment to quality craftsmanship ensures durable, long-lasting roofing solutions tailored to each customer's unique needs. With a legacy of excellence and a dedicated team, we prioritize customer satisfaction, delivering reliable service backed by years of expertise in both roofing and construction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUsFeatures.map((feature, index) => (
            <div key={index} className="text-center bg-white p-8 shadow-lg border border-gray-200 hover:border-blue-800 transition-all duration-200 transform hover:-translate-y-1">
              <div className="bg-blue-800 p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection 