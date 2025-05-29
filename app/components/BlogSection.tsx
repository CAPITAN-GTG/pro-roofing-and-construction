import React from 'react'
import Link from 'next/link'
import { Calendar, ChevronRight } from 'lucide-react'

const BlogSection = () => {
  const blogPosts = [
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
    },
    {
      title: 'Transform Your Home with a Stunning Kitchen Remodel',
      date: 'July 30, 2024',
      href: '/pages/blog/kitchen-remodel',
      image: '/small-room.jpg'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-800 mb-2">OUR BLOG</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Roofing and Construction Insights and Tips
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={post.href}
              className="bg-white border border-gray-200 hover:border-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group overflow-hidden"
            >
              {/* Blog Post Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Blog Post Content */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-200">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-600 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/pages/blog"
            className="inline-flex items-center space-x-2 bg-blue-800 text-white px-6 py-3 font-semibold hover:bg-blue-900 transition-all duration-200"
          >
            <span>Show More</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogSection 