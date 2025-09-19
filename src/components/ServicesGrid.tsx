'use client'

import { 
  Settings, 
  Wifi, 
  Home, 
  Shield, 
  Camera,
  Lightbulb,
  Volume2,
  AlertTriangle,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'

export default function ServicesGrid() {
  const serviceCategories = [
    {
      title: 'Network',
      icon: Wifi,
      color: 'from-blue-500 to-blue-600',
      image: '/services/standard-quality-control-concept-m.jpg',
      services: [
        {
          title: 'Complete Network Design',
          description: 'A strong and secure network is the foundation of every modern home and business. We provide complete network design, structured cabling, and Wi-Fi optimisation to ensure reliable connectivity in every corner of your property.',
          features: ['Structured Cabling', 'Wi-Fi Optimisation', 'Scalable Design', 'Future-Ready Solutions'],
          buttonText: 'Learn More'
        },
        {
          title: 'Office & Home Networks',
          description: 'Whether you need a robust office setup, high-speed home network for streaming and gaming, or a system that supports multiple users and devices, we deliver tailored solutions that are stable, scalable, and future-ready.',
          features: ['High-Speed Connectivity', 'Multi-User Support', 'Gaming Optimized', 'Streaming Ready'],
          buttonText: 'Get Quote',
          secondaryButton: 'Contact Us'
        }
      ]
    },
    {
      title: 'Alarm (Ajax Security Systems)',
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600',
      image: '/services/alaram.jpg',
      services: [
        {
          title: 'Ajax Alarm Systems',
          description: 'Security starts with an alarm system you can depend on. We specialise in Ajax — one of the most advanced alarm systems available today. With sleek wireless devices, powerful monitoring features, and instant smartphone alerts.',
          features: ['Wireless Devices', 'Smartphone Alerts', 'Professional Installation', '24/7 Monitoring'],
          buttonText: 'Learn More'
        },
        {
          title: 'Complete Security Package',
          description: 'From motion detectors and door contacts to outdoor sirens, indoor sounders, and keypads, every component is designed for reliability and ease of use. Professionally installed and configured, your Ajax system will protect your home or business around the clock.',
          features: ['Motion Detectors', 'Door Contacts', 'Outdoor Sirens', 'Indoor Sounders'],
          buttonText: 'Get Quote',
          secondaryButton: 'Contact Us'
        }
      ]
    },
    {
      title: 'CCTV',
      icon: Camera,
      color: 'from-purple-500 to-purple-600',
      image: '/services/cctv.jpg',
      services: [
        {
          title: 'HD CCTV Solutions',
          description: 'Protect what matters most with high-definition CCTV solutions from leading brands. We install Hikvision, Uniview, and Ajax cameras, giving you a wide choice of trusted technology for any property size or requirement.',
          features: ['Hikvision Cameras', 'Uniview Technology', 'Ajax Integration', 'HD/4K Quality'],
          buttonText: 'Learn More'
        },
        {
          title: 'AI-Powered Surveillance',
          description: 'From discreet indoor domes to advanced AI-powered outdoor cameras with night vision, motion alerts, and remote mobile viewing, we design systems tailored to your needs. With crystal-clear footage and reliable performance.',
          features: ['AI-Powered Detection', 'Night Vision', 'Motion Alerts', 'Mobile Viewing'],
          buttonText: 'Get Quote',
          secondaryButton: 'Contact Us'
        }
      ]
    },
    {
      title: 'Automation (Loxone)',
      icon: Home,
      color: 'from-green-500 to-green-600',
      image: '/services/automation.jpg',
      services: [
        {
          title: 'Loxone Smart Automation',
          description: 'As an official Loxone Partner, we deliver smart automation systems that transform the way you live and work. From intelligent lighting and heating to blinds, gates, and full building management.',
          features: ['Smart Lighting', 'Climate Control', 'Blinds & Gates', 'Building Management'],
          buttonText: 'Learn More'
        },
        {
          title: 'Energy-Efficient Solutions',
          description: 'Automation not only adds comfort and convenience but also improves security and reduces running costs. With integration into mobile apps and voice assistants, you\'ll have full control of your home or business at the touch of a button.',
          features: ['Energy Efficiency', 'Mobile App Control', 'Voice Integration', 'Cost Reduction'],
          buttonText: 'Get Quote',
          secondaryButton: 'Contact Us'
        }
      ]
    },
    {
      title: 'Audio Visual',
      icon: Volume2,
      color: 'from-orange-500 to-orange-600',
      image: '/services/audio-visuals.jpg',
      services: [
        {
          title: 'Home Theatre Systems',
          description: 'Experience entertainment like never before with bespoke audio-visual solutions. Whether you\'re looking for a cinematic home theatre, multi-room audio, or professional AV systems for offices, retail, or hospitality.',
          features: ['Cinematic Experience', 'Multi-room Audio', 'Professional AV', 'Custom Design'],
          buttonText: 'Learn More'
        },
        {
          title: 'Professional Installation',
          description: 'Our installations cover everything from concealed cabling and precision speaker placement to high-quality projectors and surround-sound systems. With intuitive controls and premium equipment, your AV system will look sleek, sound incredible, and be simple to use.',
          features: ['Concealed Cabling', 'Precision Placement', 'Premium Equipment', 'Intuitive Controls'],
          buttonText: 'Get Quote',
          secondaryButton: 'Contact Us'
        }
      ]
    }
  ]

  return (
    <section id="services-grid" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            {/* Category Header */}
            <div className="text-center mb-12">
              <div className="relative mb-8">
                {/* Background Image */}
                <div className="relative h-48 rounded-3xl overflow-hidden mb-6">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-60`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {category.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                  
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
              ))}
            </div>
          </div>
        ))}

        {/* 24/7 IT Services Operation Center */}
        <div className="mt-20 bg-gradient-to-r from-brand-red to-brand-red-dark rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-32 h-32 bg-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 right-4 w-40 h-40 bg-white rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">24/7 IT Services Operation Center</h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We provide around-the-clock support, ensuring your systems are always monitored, 
                secure, and running smoothly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Network Infrastructure',
                  'Ajax Alarm Systems',
                  'CCTV Solutions',
                  'Loxone Automation',
                  'Audio Visual Systems',
                  'Professional Installation',
                  '24/7 Support',
                  'Free Consultation'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-brand-red px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Get Quote
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-red transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-black rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-brand-red rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">24/7 Support</h4>
                  <p className="text-white/80">Always Here for You</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

