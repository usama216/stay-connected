'use client'

import { Shield, ArrowRight } from 'lucide-react'

export default function ServicesHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-brand-red/10 border border-brand-red/20 rounded-full text-brand-red text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Our Services
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">Services</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            We offer a wide range of services tailored to meet the unique needs of our clients, 
            whether it's home automation or comprehensive support, we've got you covered. Our 
            comprehensive approach ensures that we deliver results that drive success and growth 
            for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-brand-red to-brand-red-dark text-white px-8 py-4 rounded-full font-semibold hover:from-brand-red-dark hover:to-brand-red transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
