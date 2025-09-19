'use client'

import { 
  Settings, 
  Wifi, 
  Home, 
  Shield, 
  Users, 
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Camera,
  Volume2,
  AlertTriangle
} from 'lucide-react'

export default function WhatWeOffer() {
  const services = [
    {
      icon: Wifi,
      title: 'Network',
      description: 'A strong and secure network is the foundation of every modern home and business. We provide complete network design, structured cabling, and Wi-Fi optimisation to ensure reliable connectivity in every corner of your property.',
      features: ['Complete Network Design', 'Structured Cabling', 'Wi-Fi Optimisation', 'Scalable Solutions'],
      color: 'from-blue-500 to-blue-600',
      image: '/services/standard-quality-control-concept-m.jpg'
    },
    {
      icon: Shield,
      title: 'Alarm (Ajax Security Systems)',
      description: 'Security starts with an alarm system you can depend on. We specialise in Ajax — one of the most advanced alarm systems available today. With sleek wireless devices, powerful monitoring features, and instant smartphone alerts.',
      features: ['Wireless Devices', 'Smartphone Alerts', 'Professional Installation', '24/7 Monitoring'],
      color: 'from-red-500 to-red-600',
      image: '/services/alaram.jpg'
    },
    {
      icon: Camera,
      title: 'CCTV',
      description: 'Protect what matters most with high-definition CCTV solutions from leading brands. We install Hikvision, Uniview, and Ajax cameras, giving you a wide choice of trusted technology for any property size or requirement.',
      features: ['HD/4K Cameras', 'Night Vision', 'Motion Alerts', 'Remote Viewing'],
      color: 'from-purple-500 to-purple-600',
      image: '/services/cctv.jpg'
    },
    {
      icon: Home,
      title: 'Automation',
      description: 'As an official Loxone Partner, we deliver smart automation systems that transform the way you live and work. From intelligent lighting and heating to blinds, gates, and full building management.',
      features: ['Smart Lighting', 'Climate Control', 'Building Management', 'Voice Integration'],
      color: 'from-green-500 to-green-600',
      image: '/services/automation.jpg'
    },
    {
      icon: Volume2,
      title: 'Audio Visual',
      description: 'Experience entertainment like never before with bespoke audio-visual solutions. Whether you\'re looking for a cinematic home theatre, multi-room audio, or professional AV systems for offices.',
      features: ['Home Theatre', 'Multi-room Audio', 'Professional AV', 'Concealed Cabling'],
      color: 'from-orange-500 to-orange-600',
      image: '/services/audio-visuals.jpg'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-brand-red/10 border border-brand-red/20 rounded-full text-brand-red text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What We <span className="bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide comprehensive security and network solutions tailored to meet your specific needs. 
            From small businesses to large enterprises, our expert team delivers cutting-edge technology 
            and exceptional service to keep you connected and secure.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden rounded-t-3xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
              </div>
              
              {/* Content Section */}
              <div className="p-8">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-red flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-brand-red to-brand-red-dark rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you secure and optimize your business infrastructure with our expert solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-brand-red px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Get Free Consultation
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-red transition-all duration-300 inline-block"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
