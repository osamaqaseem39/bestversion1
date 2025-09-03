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
              <div className="hidden md:flex items-center pl-4 sm:pl-6 md:pl-8 lg:pl-12">
                {/* Logo from public folder - responsive size with home link */}
                <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
                  <Image
                    src="/logo.png"
                    alt="Best Version 1 Logo"
                    width={80}
                    height={80}
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  />
                </Link>
              </div>

              {/* Center Section - Logo on mobile, Navigation on md+ */}
              <div className="flex md:hidden items-center justify-center flex-1">
                {/* Logo centered on mobile with home link */}
                <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
                  <Image
                    src="/logo.png"
                    alt="Best Version 1 Logo"
                    width={80}
                    height={80}
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                </Link>
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
                <a 
                  href="https://portal.bestversion1.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-1.5 py-1 sm:px-2 sm:py-1.5 md:px-4 md:py-2 rounded-full flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 hover:bg-gray-100 transition-colors text-[10px] sm:text-xs md:text-sm"
                >
                  <span>Login</span>
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
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
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="text-white text-xl sm:text-2xl font-medium hover:text-blue-400 transition-colors w-full text-center py-3 sm:py-4 border-b border-white/20"
                >
                  Programs
                </button>
                <button 
                  onClick={() => scrollToSection('method')}
                  className="text-white text-xl sm:text-2xl font-medium hover:text-blue-400 transition-colors w-full text-center py-3 sm:py-4 border-b border-white/20"
                >
                  Method
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-white text-xl sm:text-2xl font-medium hover:text-blue-400 transition-colors w-full text-center py-3 sm:py-4 border-b border-white/20"
                >
                  FAQ
                </button>
              </div>

              {/* Mobile Menu Footer - Login */}
              <div className="p-4 sm:p-6 border-t border-white/20">
                {/* Login Button */}
                <div className="flex justify-center mb-4">
                  <a 
                    href="https://portal.bestversion1.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full flex items-center space-x-2 sm:space-x-3 hover:bg-gray-100 transition-colors text-base sm:text-lg font-medium"
                  >
                    <span>Login</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center items-center space-x-4">
                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/bestversion__1"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                      <svg 
                        className="w-5 h-5 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </a>

                  {/* TikTok */}
                  <a 
                    href="https://www.tiktok.com/@bestversion__1"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
                  >
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center border border-white/20">
                      <svg 
                        className="w-5 h-5 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/company/best-version-1/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg 
                        className="w-5 h-5 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
} 