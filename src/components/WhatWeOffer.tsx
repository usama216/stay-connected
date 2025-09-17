'use client'

import { 
  Settings, 
  Wifi, 
  Home, 
  Shield, 
  Users, 
  GraduationCap,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function WhatWeOffer() {
  const services = [
    {
      icon: Settings,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management solutions to keep your business running smoothly with 24/7 monitoring and support.',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Rapid Response'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Wifi,
      title: 'Network Infrastructure',
      description: 'Professional network infrastructure design and installation for reliable, high-speed connectivity.',
      features: ['Fiber Optic Cabling', 'Wireless Solutions', 'Network Design'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Home,
      title: 'Smart Automation',
      description: 'Transform your home or office with intelligent automation systems for security, lighting, and climate control.',
      features: ['Home Security', 'Smart Lighting', 'Climate Control'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Expert security assessment and implementation to protect your digital assets from cyber threats.',
      features: ['CCTV Systems', 'Access Control', 'Alarm Systems'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Strategic IT consulting to help you make informed decisions about your technology infrastructure.',
      features: ['IT Strategy', 'Technology Assessment', 'Implementation Planning'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: GraduationCap,
      title: 'Training Programs',
      description: 'Professional training programs to develop your team\'s networking and security expertise.',
      features: ['Certification Training', 'Hands-on Labs', 'Ongoing Support'],
      color: 'from-indigo-500 to-indigo-600'
    },
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
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-r ${service.color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8" />
              </div>
              
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
                
                {/* CTA */}
                <a 
                  href="#" 
                  className="inline-flex items-center text-brand-red font-semibold hover:text-brand-red-dark transition-colors group-hover:translate-x-2 transform duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
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
            <a 
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-red transition-all duration-300 inline-block"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
