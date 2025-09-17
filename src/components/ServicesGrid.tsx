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
      title: 'Network & Wireless Infrastructure',
      icon: Wifi,
      color: 'from-blue-500 to-blue-600',
      services: [
        {
          title: 'Managed IT Services',
          description: 'Managed Network Services (MNS) ensure efficient, secure, and reliable network operations, allowing businesses to focus on core activities.',
          features: ['24/7 Monitoring', 'Proactive Maintenance', 'Rapid Response', 'Security Management'],
          buttonText: 'Learn More'
        },
        {
          title: 'Structured Cabling',
          description: 'Delivering high-quality structured cabling solutions to enhance connectivity and performance. More than 20 years of experience in the structured cabling industry.',
          features: ['Fiber Optic Installation', 'Cat6/Cat6a Cabling', 'Cable Management', 'Testing & Certification'],
          buttonText: 'Learn More'
        },
        {
          title: 'Network & Wireless Design',
          description: 'We offer comprehensive network and wireless services, including assessment, design, installation, and optimization for optimal performance and coverage.',
          features: ['Site Survey', 'Network Planning', 'Wireless Optimization', 'Performance Tuning'],
          buttonText: 'Learn More'
        },
        {
          title: 'Enterprise WAN/LAN',
          description: 'We offer tailored WAN and LAN services, including design, optimization, SDWAN solutions, and robust security.',
          features: ['SDWAN Solutions', 'LAN Optimization', 'Security Integration', 'Scalable Design'],
          buttonText: 'Learn More'
        },
        {
          title: 'Consultancy',
          description: 'At STAYCONNECTED, we specialize in providing expert network and security consultancy services to businesses of all sizes. With a team of seasoned professionals and years of industry experience, we are dedicated to helping organizations enhance their network infrastructure and fortify their cybersecurity defenses.',
          features: ['Network Assessment', 'Security Audits', 'Strategic Planning', 'Implementation Support'],
          buttonText: 'Order Services Now',
          secondaryButton: 'Get In Touch'
        }
      ]
    },
    {
      title: 'CCTV',
      icon: Camera,
      color: 'from-purple-500 to-purple-600',
      services: [
        {
          title: 'Security Cameras',
          description: 'At STAYCONNECTED, we provide high-quality security cameras and surveillance systems with advanced technology to protect businesses, homes, and organizations, ensuring the safety of your property, assets, and loved ones.',
          features: ['HD/4K Cameras', 'Night Vision', 'Remote Monitoring', 'Mobile App Access'],
          buttonText: 'Learn More'
        },
        {
          title: 'System Package',
          description: 'Our team of experts works closely with you to understand your security needs and secure more like real-time solutions for your specific requirements and budget.',
          features: ['Custom Packages', 'Professional Installation', 'Training & Support', 'Maintenance Plans'],
          buttonText: 'Learn More'
        },
        {
          title: 'Security Lighting',
          description: 'At STAYCONNECTED, we specialize in providing high-quality security lighting solutions to enhance the safety and security of your property. With our extensive range of products and expertise in lighting technology, we are committed to helping you create a visible environment that deters intruders and improves visibility.',
          features: ['LED Security Lights', 'Motion Sensors', 'Solar Powered', 'Smart Controls'],
          buttonText: 'Order Services Now',
          secondaryButton: 'Get In Touch'
        }
      ]
    },
    {
      title: 'Home & Smart Automation',
      icon: Home,
      color: 'from-green-500 to-green-600',
      services: [
        {
          title: 'Loxone',
          description: 'As a smart home and building automation solution, Loxone integrates a wide range of functions, including lighting, heating, ventilation, air conditioning (HVAC), security, and multimedia, into a single, unified platform. STAYCONNECTED is proud to be a Loxone Silver Partner.',
          features: ['Smart Lighting', 'Climate Control', 'Security Integration', 'Voice Control'],
          buttonText: 'Learn More'
        },
        {
          title: 'Lightwave RF',
          description: 'At STAYCONNECTED, we offer innovative smart home products powered by Lightwave RF technology, leveraging our home automation expertise to create a smarter, more efficient, and comfortable home environment.',
          features: ['Smart Switches', 'Dimmer Controls', 'Smart Sockets', 'Remote Control'],
          buttonText: 'Learn More'
        }
      ]
    },
    {
      title: 'Audio & Visual',
      icon: Volume2,
      color: 'from-orange-500 to-orange-600',
      services: [
        {
          title: 'Home Cinema',
          description: 'At STAYCONNECTED, we provide state-of-the-art home cinema systems for an immersive entertainment experience. With our expertise in audiovisual technology, we help you create the ultimate cinematic experience tailored to your lifestyle.',
          features: ['4K/8K Projectors', 'Surround Sound', 'Acoustic Treatment', 'Smart Integration'],
          buttonText: 'Learn More'
        },
        {
          title: 'Multi Room Audio',
          description: 'Welcome to our Multi Room Audio section, featuring the latest technology to fill every room with your favorite sounds, providing an immersive, seamless experience with a your smart home ecosystem.',
          features: ['Zone Control', 'Wireless Streaming', 'Voice Integration', 'Custom Installation'],
          buttonText: 'Learn More'
        }
      ]
    },
    {
      title: 'Alarms Systems',
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600',
      services: [
        {
          title: 'Wired and Wireless Systems',
          description: 'In today\'s interconnected world, wired and wireless systems are crucial for communication, data transfer, and accessing information. Such systems offer distinct advantages tailored to diverse needs and environments. This introduction explores the fundamentals, benefits, and applications of both wired and wireless systems.',
          features: ['Wired Reliability', 'Wireless Flexibility', 'Hybrid Solutions', 'Remote Monitoring'],
          buttonText: 'Learn More'
        },
        {
          title: 'Smart Alarms',
          description: 'Welcome to our Smart Alarms section, showcasing advanced technology for enhanced home security and peace of mind. Discover features, benefits, and applications to protect your home and loved ones effectively.',
          features: ['Smart Sensors', 'Mobile Alerts', 'Professional Monitoring', 'Integration Ready'],
          buttonText: 'Learn More'
        }
      ]
    },
    {
      title: 'Training',
      icon: GraduationCap,
      color: 'from-indigo-500 to-indigo-600',
      services: [
        {
          title: 'CCNA',
          description: 'The Cisco Certified Network Associate (CCNA) certification by Cisco validates skills in networking fundamentals, equipping candidates to install, configure, operate, and troubleshoot medium-sized routers and switched networks.',
          features: ['Network Fundamentals', 'Routing & Switching', 'Security Basics', 'Troubleshooting'],
          buttonText: 'Learn More'
        },
        {
          title: 'CCNP',
          description: 'The Cisco Certified Network Professional (CCNP) certification program validates advanced skills in planning, implementing, verifying, and troubleshooting enterprise networks. Intended for experienced professionals, CCNP equips candidates to work independently on complex network solutions.',
          features: ['Advanced Routing', 'Enterprise Design', 'Security Implementation', 'Troubleshooting'],
          buttonText: 'Learn More'
        },
        {
          title: 'CCIE',
          description: 'The Cisco Certified Internetwork Expert (CCIE) is Cisco\'s top-tier certification, acknowledging individuals with expert-level knowledge and skills in networking. Widely regarded as one of the most prestigious and challenging certifications in IT.',
          features: ['Expert Level', 'Hands-on Labs', 'Real-world Scenarios', 'Industry Recognition'],
          buttonText: 'Order Services Now',
          secondaryButton: 'Get In Touch'
        },
        {
          title: 'JNCIA',
          description: 'The Juniper Networks Certified Internet Associate (JNCIA) is an entry-level certification that builds on the foundational JNOA, offering knowledge of networking concepts and Juniper\'s technology.',
          features: ['Juniper Basics', 'Network Concepts', 'Configuration', 'Troubleshooting'],
          buttonText: 'Learn More'
        },
        {
          title: 'JNCIS',
          description: 'The Juniper Networks Certified Internet Specialist (JNCIS) is an intermediate certification that builds on the foundational JNOA, offering advanced knowledge of Juniper\'s networking technology.',
          features: ['Advanced Juniper', 'Specialized Tracks', 'Hands-on Labs', 'Professional Level'],
          buttonText: 'Learn More'
        },
        {
          title: 'Fortinet',
          description: 'Fortinet training consists of educational programs and resources provided by Fortinet, a global leader in cybersecurity, designed to equip individuals with the skills to deploy, manage, and troubleshoot Fortinet products and solutions.',
          features: ['Cybersecurity', 'Firewall Management', 'Security Operations', 'FortiGate Training'],
          buttonText: 'Learn More'
        },
        {
          title: 'Data Analytics',
          description: 'Data analytics involves examining raw data to extract insights and make decisions using techniques like statistical analysis, data mining, and machine learning. Training in this field equips individuals with the skills to analyze data effectively.',
          features: ['Statistical Analysis', 'Data Mining', 'Machine Learning', 'Visualization'],
          buttonText: 'Learn More'
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
              <div className="flex items-center justify-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} text-white rounded-2xl flex items-center justify-center mr-4`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {category.title}
                </h2>
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
                    
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="flex-1 bg-gradient-to-r from-brand-red to-brand-red-dark text-white px-6 py-3 rounded-full font-semibold hover:from-brand-red-dark hover:to-brand-red transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center">
                        {service.buttonText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                      {service.secondaryButton && (
                        <button className="flex-1 border-2 border-brand-red text-brand-red px-6 py-3 rounded-full font-semibold hover:bg-brand-red hover:text-white transition-all duration-300">
                          {service.secondaryButton}
                        </button>
                      )}
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
                  'Managed IT Services',
                  'Structured Cabling',
                  'Network & Wireless Design',
                  'Enterprise WAN/LAN',
                  'Consultancy',
                  'CCTV',
                  'Security Lighting',
                  'Home & Smart Automation',
                  'Audio & Visual',
                  'Alarms Systems',
                  'Trainings'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-brand-red px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                  Order Services
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-red transition-all duration-300">
                  Get in Touch
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
