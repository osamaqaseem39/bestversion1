'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showStickyHome, setShowStickyHome] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowStickyHome(true)
      } else {
        setShowStickyHome(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <>
      {/* Sticky Home Section - Appears on scroll */}
      {showStickyHome && (
        <div className="fixed top-2 sm:top-4 left-2 sm:left-4 z-50 mobile-menu-container">
          <div className="bg-gray-800/90 backdrop-blur-md rounded-full border border-white/30 px-1.5 py-1 sm:px-2 md:px-3 md:py-2 flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
            {/* Hamburger Menu Icon */}
            <button 
              className="text-white p-1 sm:p-1.5 md:p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Home Button */}
            <Link 
              href="/" 
              className="bg-gray-700/50 text-white px-1.5 py-1 sm:px-2 sm:py-1.5 md:px-4 md:py-2 rounded-full flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 hover:bg-gray-600/50 transition-colors text-[10px] sm:text-xs md:text-sm"
            >
              <span className="font-medium">Home</span>
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 mt-1 sm:mt-2 bg-gray-800/95 backdrop-blur-md rounded-lg border border-white/30 py-1.5 sm:py-2 min-w-[150px] sm:min-w-[180px] md:min-w-[200px] shadow-xl">
                <Link 
                  href="/about"
                  className="block w-full text-left px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 text-white hover:bg-gray-700/50 transition-colors text-[10px] sm:text-xs md:text-sm"
                >
                  About Us
                </Link>
                <Link 
                  href="/#programs"
                  className="block w-full text-left px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 text-white hover:bg-gray-700/50 transition-colors text-[10px] sm:text-xs md:text-sm"
                >
                  Programs
                </Link>
                <Link 
                  href="/#method"
                  className="block w-full text-left px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 text-white hover:bg-gray-700/50 transition-colors text-[10px] sm:text-xs md:text-sm"
                >
                  Method
                </Link>
                <Link 
                  href="/#faq"
                  className="block w-full text-left px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 text-white hover:bg-gray-700/50 transition-colors text-[10px] sm:text-xs md:text-sm"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Header - Non-sticky */}
      <header className="relative top-0 left-0 right-0 z-40 w-full pt-1 sm:pt-2 md:pt-4">
        <div className="w-full px-1 sm:px-2 md:px-4 lg:px-8 py-1 sm:py-2">
          {/* Single container with transparent background and full width */}
          <div className="bg-transparent backdrop-blur-sm rounded-2xl w-full">
            <div className="flex items-center justify-between h-10 sm:h-12 md:h-16 px-2 sm:px-3 md:px-6">
              
              {/* Left Section - Logo only - Hidden on mobile, shown on md+ */}
              <div className="hidden md:flex items-center">
                {/* Logo from public folder - responsive size */}
                <Image
                  src="/logo.png"
                  alt="Best Version 1 Logo"
                  width={80}
                  height={80}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                />
              </div>

              {/* Center Section - Logo on mobile, Navigation on md+ */}
              <div className="flex md:hidden items-center justify-center flex-1">
                {/* Logo centered on mobile */}
                <Image
                  src="/logo.png"
                  alt="Best Version 1 Logo"
                  width={80}
                  height={80}
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
              </div>

              {/* Center Section - Navigation Bar - Hidden on mobile, shown on md+ */}
              <nav className="hidden md:flex items-center space-x-2 lg:space-x-3">
                {/* Navigation Links Container - Dark background */}
                <div className="bg-gray-800/60 rounded-full border border-gray-400/30 px-2 py-1.5 lg:px-3 lg:py-2 space-x-1 flex">
                  <Link 
                    href="/"
                    className="text-white bg-gray-700/50 px-2 py-1.5 lg:px-3 lg:py-2 rounded-full hover:bg-gray-700 transition-colors text-xs lg:text-sm"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about"
                    className="text-white bg-gray-700/50 px-2 py-1.5 lg:px-3 lg:py-2 rounded-full hover:bg-gray-700 transition-colors text-xs lg:text-sm"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/#programs"
                    className="text-white bg-gray-700/50 px-2 py-1.5 lg:px-3 lg:py-2 rounded-full hover:bg-gray-700 transition-colors text-xs lg:text-sm"
                  >
                    Programs
                  </Link>
                  <Link 
                    href="/#method"
                    className="text-white bg-gray-700/50 px-2 py-1.5 lg:px-3 lg:py-2 rounded-full hover:bg-gray-700 transition-colors text-xs lg:text-sm"
                  >
                    Method
                  </Link>
                  <Link 
                    href="/#faq"
                    className="text-white bg-gray-700/50 px-2 py-1.5 lg:px-3 lg:py-2 rounded-full hover:bg-gray-700 transition-colors text-xs lg:text-sm"
                  >
                    FAQ
                  </Link>
                </div>
              </nav>

              {/* Mobile Menu Button - Only visible on mobile */}
              <button 
                className="md:hidden text-white p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Right Section - Login - Hidden on mobile, shown on md+ */}
              <div className="hidden md:flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
                {/* Login Button - WHITE background */}
                <button 
                  onClick={() => alert('Login functionality coming soon!')}
                  className="bg-white text-black px-1.5 py-1 sm:px-2 sm:py-1.5 md:px-4 md:py-2 rounded-full flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 hover:bg-gray-100 transition-colors text-[10px] sm:text-xs md:text-sm"
                >
                  <span>Login</span>
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay - Full screen on mobile */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
            <div className="flex flex-col h-full">
              {/* Close button */}
              <div className="flex justify-end p-3 sm:p-4">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex-1 flex flex-col justify-center items-center space-y-4 sm:space-y-6 px-3 sm:px-4">
                <Link 
                  href="/"
                  className="text-white text-xl sm:text-2xl font-medium hover:text-blue-400 transition-colors w-full text-center py-3 sm:py-4 border-b border-white/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about"
                  className="text-white text-xl sm:text-2xl font-medium hover:text-blue-400 transition-colors w-full text-center py-3 sm:py-4 border-b border-white/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/#programs"
                  className="text-white text-xl sm:text-2xl font-medium hover:text-blue-400 transition-colors w-full text-center py-3 sm:py-4 border-b border-white/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Programs
                </Link>
                <Link 
                  href="/#method"
                  className="text-white text-xl sm:text-2xl font-medium hover:text-blue-400 transition-colors w-full text-center py-3 sm:py-4 border-b border-white/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Method
                </Link>
                <Link 
                  href="/#faq"
                  className="text-white text-xl sm:text-2xl font-medium hover:text-blue-400 transition-colors w-full text-center py-3 sm:py-4 border-b border-white/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
              </div>

              {/* Mobile Menu Footer - Login */}
              <div className="p-4 sm:p-6 border-t border-white/20">
                {/* Login Button */}
                <div className="flex justify-center">
                  <button 
                    onClick={() => {
                      alert('Login functionality coming soon!')
                      setIsMenuOpen(false)
                    }}
                    className="bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full flex items-center space-x-2 sm:space-x-3 hover:bg-gray-100 transition-colors text-base sm:text-lg font-medium"
                  >
                    <span>Login</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
} 