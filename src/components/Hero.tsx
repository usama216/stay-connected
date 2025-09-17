'use client'

import { Shield, Camera, Home, Wifi, AlertTriangle, GraduationCap, ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const services = [
    { icon: Wifi, label: 'NETWORK', color: 'from-blue-500 to-blue-600' },
    { icon: Camera, label: 'CCTV', color: 'from-purple-500 to-purple-600' },
    { icon: Home, label: 'AUTOMATION', color: 'from-green-500 to-green-600' },
    { icon: Shield, label: 'SECURITY', color: 'from-red-500 to-red-600' },
    { icon: AlertTriangle, label: 'ALARMS', color: 'from-orange-500 to-orange-600' },
    { icon: GraduationCap, label: 'TRAINING', color: 'from-indigo-500 to-indigo-600' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-red/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-brand-red rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-brand-blue rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-white rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-brand-red/10 border border-brand-red/20 rounded-full text-brand-red text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Trusted Security Solutions
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">SMART</span>
                <span className="block bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">
                  BUSINESSES
                </span>
                <span className="block">USE STAYCONNECTED</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Specialists in providing comprehensive security and network solutions 
                that keep your business connected, secure, and future-ready.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/services"
                className="group bg-gradient-to-r from-brand-red to-brand-red-dark text-white px-8 py-4 rounded-full font-semibold hover:from-brand-red-dark hover:to-brand-red transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm">{service.label}</h3>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/0 to-brand-red/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
