'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Shield } from 'lucide-react'

export default function Partners() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const partners = [
    { name: 'NETGEAR', logo: 'NETGEAR', color: 'text-gray-800' },
    { name: 'Excel Without Compromise', logo: 'excel without compromise.', color: 'text-gray-800' },
    { name: 'LOXONE', logo: 'LOXONE', color: 'text-green-500' },
    { name: 'Cisco', logo: 'Cisco', color: 'text-blue-600' },
    { name: 'Hikvision', logo: 'Hikvision', color: 'text-gray-800' },
    { name: 'Ubiquiti', logo: 'Ubiquiti', color: 'text-gray-800' }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(partners.length / 3)) % Math.ceil(partners.length / 3))
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-brand-red/10 border border-brand-red/20 rounded-full text-brand-red text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Trusted Partners
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We work with industry-leading technology partners to deliver the best solutions for your business. 
            Our partnerships ensure you get access to cutting-edge technology and reliable support.
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(partners.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {partners.slice(slideIndex * 3, (slideIndex + 1) * 3).map((partner, index) => (
                      <div
                        key={index}
                        className="group flex items-center justify-center h-32 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                      >
                        <div className="text-center">
                          {partner.name === 'Excel Without Compromise' ? (
                            <div className="text-2xl font-bold">
                              <span className="text-gray-800">excel</span>
                              <span className="text-green-500">x</span>
                              <span className="text-gray-600 text-sm">without compromise.</span>
                            </div>
                          ) : (
                            <div className={`text-3xl font-bold ${partner.color} group-hover:scale-110 transition-transform duration-300`}>
                              {partner.logo}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: Math.ceil(partners.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-brand-red scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-brand-red/5 to-brand-red/10 rounded-3xl p-12 border border-brand-red/20">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Partner With Us?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our network of trusted partners and help us deliver exceptional solutions to businesses worldwide.
            </p>
            <button className="bg-gradient-to-r from-brand-red to-brand-red-dark text-white px-8 py-4 rounded-full font-semibold hover:from-brand-red-dark hover:to-brand-red transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}