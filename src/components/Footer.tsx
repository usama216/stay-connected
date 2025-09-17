'use client'

import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowRight, Shield } from 'lucide-react'

export default function Footer() {
  const services = [
    'Network & Wireless Design',
    'Managed IT Services',
    'Enterprise LAN/WAN',
    'Security Cameras',
    'Security Lighting',
    'Smart Automation',
    'Alarm Systems',
    'Training & Consultancy'
  ]

  const quickLinks = [
    'Home',
    'Services',
    'About Us',
    'Testimonials',
    'Contact Us',
    'Privacy Policy',
    'Terms of Service',
    'Sitemap'
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative group">
                  <div className="w-16 h-16 bg-white border-2 border-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-lg flex flex-col items-center justify-center">
                        <div className="w-5 h-2 bg-brand-red rounded-sm mb-1"></div>
                        <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    <span className="text-brand-red-light">STAY</span>
                    <span className="text-brand-red">CONNECTED</span>
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Security and Network Solutions
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner for comprehensive security and network solutions. 
                We deliver cutting-edge technology with exceptional service to keep 
                your business connected and secure.
              </p>
              
              {/* Social Media */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white/10 hover:bg-brand-red text-gray-300 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white/10 hover:bg-brand-red text-gray-300 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white/10 hover:bg-brand-red text-gray-300 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-brand-red" />
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-brand-red transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
                      className="text-gray-300 hover:text-brand-red transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a 
                      href="mailto:info@stayconnected.co.uk" 
                      className="text-white hover:text-brand-red transition-colors font-medium"
                    >
                      info@stayconnected.co.uk
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a 
                      href="tel:01212710998" 
                      className="text-white hover:text-brand-red transition-colors font-medium"
                    >
                      0121 271 0998
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <span className="text-white font-medium">Nationwide</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-brand-red to-brand-red-dark text-white px-6 py-3 rounded-full font-semibold hover:from-brand-red-dark hover:to-brand-red transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 STAYCONNECTED Security and Network Solutions. All Rights Reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
