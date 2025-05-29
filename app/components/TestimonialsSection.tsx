import React from 'react'
import Link from 'next/link'
import { Star, ExternalLink } from 'lucide-react'

const TestimonialsSection = () => {
  const reviews = [
    {
      name: "bryan bolden",
      rating: 5,
      text: "TOP NOTCH SERVICE",
      date: "10 months ago"
    },
    {
      name: "Melinda Stappenbeck",
      rating: 5,
      text: "Great job roofe looks awesome thanks Steven Atwell and Chris Dumire",
      date: "a year ago"
    },
    {
      name: "cameron jae",
      rating: 5,
      text: "Great communication, and timely service on a roof job. We were able to close on a house in time thanks to Pro Roofing and Construction.",
      date: "a year ago"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers are saying
          </h3>
          <p className="text-lg text-gray-600">
            See what our satisfied customers have to say about our work
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-3">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-600">{review.date}</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>
              <div className="font-semibold text-gray-900">- {review.name}</div>
            </div>
          ))}
        </div>

        {/* Google Reviews Button */}
        <div className="text-center">
          <Link
            href="https://www.google.com/maps/contrib/104274888485674920627/reviews/@33.0089961,-97.0842191,297599m/data=!3m2!1e3!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-800 text-white px-8 py-4 font-semibold hover:bg-blue-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span>VIEW ALL GOOGLE REVIEWS</span>
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 