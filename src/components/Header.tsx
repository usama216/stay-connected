'use client'

import { useState } from 'react'
import { Phone, Mail, Facebook, Linkedin, Instagram, Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100 transition-all duration-300">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-gradient-to-r from-brand-red to-brand-red-dark text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
           
              <a 
                href="tel:07984760575"
                className="flex items-center space-x-2 hover:text-white/80 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>0798 476 0575</span>
              </a>
              <a 
                href="mailto:aaqib@stay-connected.co.uk"
                className="flex items-center space-x-2 hover:text-white/80 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>aaqib@stay-connected.co.uk</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Facebook className="w-4 h-4 hover:text-white/80 transition-colors cursor-pointer" />
              <Linkedin className="w-4 h-4 hover:text-white/80 transition-colors cursor-pointer" />
              <Instagram className="w-4 h-4 hover:text-white/80 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="relative group cursor-pointer"
              >
                <div className="w-16 h-16 relative group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/log-white.jpeg"
                    alt="Stay Connected Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </button>
              {/* <div className="hidden sm:block">
                <div className="text-xl lg:text-2xl font-bold">
                  <span className="text-brand-red-light">STAY</span>
                  <span className="text-brand-red">CONNECTED</span>
                </div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">
                  Security and Network Solutions
                </div>
              </div> */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-800 hover:text-brand-red transition-all duration-300 font-medium relative group"
              >
                HOME
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </button>
              <a 
                href="/services"
                className="text-gray-800 hover:text-brand-red transition-all duration-300 font-medium relative group"
              >
                SERVICES
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </a>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-800 hover:text-brand-red transition-all duration-300 font-medium relative group"
              >
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-800 hover:text-brand-red transition-all duration-300 font-medium relative group"
              >
                TESTIMONIALS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-800 hover:text-brand-red transition-all duration-300 font-medium relative group"
              >
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-brand-red to-brand-red-dark text-white px-8 py-3 rounded-full hover:from-brand-red-dark hover:to-brand-red transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Get In Touch
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-brand-red transition-colors p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-3 text-gray-800 hover:text-brand-red transition-colors font-medium text-lg"
            >
              HOME
            </button>
            <a 
              href="/services"
              className="block w-full text-left py-3 text-gray-800 hover:text-brand-red transition-colors font-medium text-lg"
            >
              SERVICES
            </a>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-3 text-gray-800 hover:text-brand-red transition-colors font-medium text-lg"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left py-3 text-gray-800 hover:text-brand-red transition-colors font-medium text-lg"
            >
              TESTIMONIALS
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-3 text-gray-800 hover:text-brand-red transition-colors font-medium text-lg"
            >
              CONTACT
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-brand-red to-brand-red-dark text-white px-6 py-4 rounded-full hover:from-brand-red-dark hover:to-brand-red transition-all duration-300 font-semibold mt-4"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
