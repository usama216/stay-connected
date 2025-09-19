'use client'

import { 
  Award, 
  Users, 
  Heart, 
  Lightbulb,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react'
import Image from 'next/image'

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Over a decade of successful project delivery with 99.9% client satisfaction rate and zero security breaches.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Tailored Expertise',
      description: 'Our certified professionals customize solutions to match your specific business requirements and industry standards.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: 'We prioritize your success with dedicated support, regular maintenance, and continuous improvement initiatives.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'Stay ahead with cutting-edge technology and future-proof solutions that scale with your business growth.',
      color: 'from-yellow-500 to-yellow-600'
    },
  ]

  const benefits = [
    '24/7 Professional Support',
    'Cutting-edge Technology',
    'Customized Solutions',
    'Rapid Response Times',
    'Comprehensive Monitoring',
    'Expert Consultation'
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
            Why Choose Us
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">STAYCONNECTED</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are committed to delivering exceptional value through our expertise, innovation, 
            and unwavering dedication to your success. Our mission is to provide reliable, 
            secure, and scalable solutions that empower your business to thrive in today's 
            digital landscape.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-red transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              What Makes Us <span className="text-brand-red">Different</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to excellence and innovation sets us apart in the industry. 
              We don't just provide services; we build lasting partnerships that drive your success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 bg-brand-red/10 rounded-full flex items-center justify-center group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 text-brand-red group-hover:text-white" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-brand-red transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 h-80 flex items-center justify-center overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0">
                <div className="absolute top-4 left-4 w-32 h-32 bg-brand-red/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-40 h-40 bg-brand-blue/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/20 rounded-full blur-xl animate-pulse delay-500"></div>
              </div>
              
              {/* Central Content */}
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

        {/* Stats Section */}
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-16 text-white overflow-hidden">
          {/* Modern Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-red/5 via-transparent to-brand-blue/5"></div>
            <div className="absolute top-10 right-10 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-brand-red rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-32 right-32 w-3 h-3 bg-brand-blue rounded-full animate-bounce delay-700"></div>
            <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-white rounded-full animate-bounce delay-1000"></div>
            <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-brand-red rounded-full animate-bounce delay-500"></div>
          </div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-brand-red rounded-full mr-3 animate-pulse"></div>
                Our Impact
              </div>
              <h3 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                Our Impact in Numbers
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Delivering excellence across every project with measurable results that speak for themselves
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="relative">
                    <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      500+
                    </div>
                    <div className="text-white/80 text-lg font-medium">Projects Completed</div>
                    <div className="text-white/60 text-sm mt-2">Successfully delivered</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-red/0 to-brand-red/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="relative">
                    <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-brand-blue to-brand-blue-light bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      99%
                    </div>
                    <div className="text-white/80 text-lg font-medium">Client Satisfaction</div>
                    <div className="text-white/60 text-sm mt-2">Happy customers</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/0 to-brand-blue/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="relative">
                    <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      24/7
                    </div>
                    <div className="text-white/80 text-lg font-medium">Support Available</div>
                    <div className="text-white/60 text-sm mt-2">Always here for you</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="relative">
                    <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      10+
                    </div>
                    <div className="text-white/80 text-lg font-medium">Years Experience</div>
                    <div className="text-white/60 text-sm mt-2">Industry expertise</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
