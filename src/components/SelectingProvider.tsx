'use client'

import { ArrowRight, CheckCircle, Shield, Users, Award, Clock } from 'lucide-react'
import Image from 'next/image'

export default function SelectingProvider() {
  const features = [
    '24/7 Professional Support',
    'Cutting-edge Technology Solutions',
    'Customized Security Strategies',
    'Rapid Response Times',
    'Comprehensive Network Monitoring',
    'Expert Technical Consultation'
  ]

  const stats = [
    { icon: Shield, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '99.9%', label: 'Client Satisfaction' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Support Available' }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-brand-red/10 border border-brand-red/20 rounded-full text-brand-red text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Why Choose Us
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">
            Your Trusted IT Partner
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Choosing the right IT service provider is crucial for your business success. 
                At STAYCONNECTED, we understand that every organization has unique requirements 
                and challenges that demand tailored solutions.
              </p>
              <p>
                Our team of certified professionals brings years of experience in delivering 
                comprehensive security and network solutions. We combine cutting-edge technology 
                with proven methodologies to ensure your infrastructure is robust, secure, and 
                future-ready.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 bg-brand-red/10 rounded-full flex items-center justify-center group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 text-brand-red group-hover:text-white" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-brand-red transition-colors">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
         
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-brand-red to-brand-red-dark text-white px-8 py-4 rounded-full font-semibold hover:from-brand-red-dark hover:to-brand-red transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-center justify-center w-12 h-12 bg-brand-red/10 text-brand-red rounded-xl mb-4">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Visual Element */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 h-80 flex items-center justify-center overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0">
                <div className="absolute top-4 left-4 w-32 h-32 bg-brand-red/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-40 h-40 bg-brand-blue/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/20 rounded-full blur-xl animate-pulse delay-500"></div>
              </div>
              
              {/* Central Logo */}
              <div className="relative z-10 text-center">
                <div className="w-40 h-40 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl group hover:scale-110 transition-transform duration-300">
                
                   <div className="w-28 h-28 relative group-hover:scale-110 transition-transform duration-300">
                                <Image
                                  src="/log-white.jpeg"
                                  alt="Stay Connected Logo"
                                  fill
                                  className="object-contain"
                                  priority
                                />
                              </div>
                </div>
             
              </div>


              

              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-3 h-3 bg-brand-red rounded-full animate-bounce delay-300"></div>
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-white rounded-full animate-bounce delay-700"></div>
              <div className="absolute top-1/2 right-4 w-2 h-2 bg-brand-blue rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
