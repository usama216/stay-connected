'use client'

import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowRight, Shield } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const services = [
    'Network Infrastructure',
    'Alarm (Ajax Security Systems)',
    'CCTV Solutions',
    'Automation (Loxone)',
    'Audio Visual Systems'
  ]

  const quickLinks = [
    'Home',
    'Services',
    'About Us',
    'Testimonials',
    'Contact Us'
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
                <button 
                  onClick={() => scrollToSection('home')}
                  className="relative group cursor-pointer"
                >
                  <div className="w-40 h-40 relative group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/log-dark.png"
                      alt="Stay Connected Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </button>
           
              </div>
           
              <div>
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
                      href="mailto: aaqib@stay-connected.co.uk" 
                      className="text-white hover:text-brand-red transition-colors font-medium"
                    >
                       aaqib@stay-connected.co.uk
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
                      href="tel:07984760575" 
                      className="text-white hover:text-brand-red transition-colors font-medium"
                    >
                    
                      0798 476 0575
                    </a>
                  </div>
                </div>
                
                <a 
                  href="https://maps.google.com/?q=3+Whitelands+Way,+High+Wycombe,+Bucks,+HP12+3EH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 hover:text-white/80 transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/30 transition-colors">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <div className="text-white font-medium">
                      <div>3 Whitelands Way</div>
                      <div>High Wycombe, Bucks</div>
                      <div>HP12 3EH</div>
                    </div>
                  </div>
                </a>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
