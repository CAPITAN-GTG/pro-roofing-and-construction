import React from 'react'

const ProjectsSection = () => {
  // All available images for the bento box layout
  const projectImages = [
    { src: '/construction.jpg', alt: 'Construction Project', title: 'Construction' },
    { src: '/emergency-repairs.jpg', alt: 'Emergency Repairs', title: 'Emergency Repairs' },
    { src: '/fencing.jpg', alt: 'Fencing Project', title: 'Fencing' },
    { src: '/roofing-n-gutters.jpg', alt: 'Roofing & Gutters', title: 'Roofing & Gutters' },
    { src: '/big-room.jpg', alt: 'Big Room Renovation', title: 'Room Renovation' },
    { src: '/small-room.jpg', alt: 'Small Room Remodel', title: 'Room Remodel' },
    { src: '/snow-house.jpeg', alt: 'Winter Roofing', title: 'Winter Projects' }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-800 mb-2">RECENT PROJECTS</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            One Project At A Time
          </h3>
        </div>
        
        {/* Bento Box Grid Layout - No Gaps */}
        <div className="grid grid-cols-12 grid-rows-4 h-[600px]">
          {/* Large tall image - Construction */}
          <div className="col-span-5 row-span-4 relative group overflow-hidden bg-gray-200">
            <img
              src={projectImages[0].src}
              alt={projectImages[0].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-xl font-bold">{projectImages[0].title}</h4>
              </div>
            </div>
          </div>

          {/* Medium image - Emergency Repairs */}
          <div className="col-span-4 row-span-2 relative group overflow-hidden bg-gray-200">
            <img
              src={projectImages[1].src}
              alt={projectImages[1].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-bold">{projectImages[1].title}</h4>
              </div>
            </div>
          </div>

          {/* Small square image - Fencing */}
          <div className="col-span-3 row-span-2 relative group overflow-hidden bg-gray-200">
            <img
              src={projectImages[2].src}
              alt={projectImages[2].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-bold">{projectImages[2].title}</h4>
              </div>
            </div>
          </div>

          {/* Medium wide image - Roofing & Gutters */}
          <div className="col-span-7 row-span-2 relative group overflow-hidden bg-gray-200">
            <img
              src={projectImages[3].src}
              alt={projectImages[3].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-bold">{projectImages[3].title}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row - 3 equal images */}
        <div className="grid grid-cols-1 md:grid-cols-3 h-[200px]">
          {/* Big Room */}
          <div className="relative group overflow-hidden bg-gray-200">
            <img
              src={projectImages[4].src}
              alt={projectImages[4].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-bold">{projectImages[4].title}</h4>
              </div>
            </div>
          </div>

          {/* Small Room */}
          <div className="relative group overflow-hidden bg-gray-200">
            <img
              src={projectImages[5].src}
              alt={projectImages[5].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-bold">{projectImages[5].title}</h4>
              </div>
            </div>
          </div>

          {/* Snow House */}
          <div className="relative group overflow-hidden bg-gray-200">
            <img
              src={projectImages[6].src}
              alt={projectImages[6].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-bold">{projectImages[6].title}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection 