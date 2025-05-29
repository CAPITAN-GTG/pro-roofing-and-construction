import React from 'react'
import { Search, FileText, Calendar } from 'lucide-react'

const ProcessSection = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Inspection On Current Roof',
      description: 'Schedule a professional roof inspection with us so we can assess the condition of your current roof and determine if replacement is necessary.',
      icon: Search
    },
    {
      number: '02',
      title: 'Receive A Quote',
      description: 'We will provide you with a detailed quote tailored to your needs. We discuss the specifics, so I can offer you an accurate and transparent estimate for a worry-free experience.',
      icon: FileText
    },
    {
      number: '03',
      title: 'Schedule The Installation',
      description: 'Together we schedule the installation date and Pro Roofing and Construction will ensure all necessary permits and agreements are in place before the project begins.',
      icon: Calendar
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-800 mb-2">GET STARTED</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Is The Process On Determining If I Need A New Roof
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-800 p-3 mr-4">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-800">{step.number}</div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
              <p className="text-gray-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection 