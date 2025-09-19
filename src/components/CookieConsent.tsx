'use client'

import { useState, useEffect } from 'react'
import { X, Cookie, Shield } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAccepted, setIsAccepted] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      setIsAccepted(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
    setIsAccepted(true)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
    setIsAccepted(true)
  }


  if (!isVisible || isAccepted) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
          {/* Content */}
          <div className="flex items-start space-x-4 flex-1">
            <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-brand-red" />
            </div>
            <div className="flex-1">
              <p className="text-gray-600 text-xs leading-relaxed">
                We use cookies to improve your browsing experience, serve personalized content, 
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                You can manage your preferences at any time.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full lg:w-auto">
            <button
              onClick={handleReject}
              className="flex items-center justify-center px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              <X className="w-3 h-3 mr-1.5" />
              Reject All
            </button>
            
            <button
              onClick={handleAccept}
              className="flex items-center justify-center px-4 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-brand-red to-brand-red-dark hover:from-brand-red-dark hover:to-brand-red rounded-md transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Shield className="w-3 h-3 mr-1.5" />
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
