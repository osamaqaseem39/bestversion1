'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-4">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-2">
        {/* Single container with transparent background and full width */}
        <div className="bg-transparent backdrop-blur-sm rounded-2xl w-full">
          <div className="flex items-center justify-between h-16 px-6">
            
            {/* Left Section - Logo only */}
            <div className="flex items-center">
              {/* Logo from public folder - larger size, no border */}
              <Image
                src="/logo.png"
                alt="Best Version 1 Logo"
                width={160}
                height={160}
                className="w-40 h-40"
              />
            </div>

            {/* Center Section - Navigation Bar */}
            <nav className="hidden md:flex items-center space-x-3">
              {/* Home Navigation Container - Dark with white border */}
              <div className="bg-gray-800/60 rounded-full border border-white/30 px-3 py-2 flex items-center space-x-3">
                {/* Hamburger Menu Icon */}
                <button className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                {/* Home Button - Dark background, white text, white arrow */}
                <Link 
                  href="/" 
                  className="bg-gray-700/50 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-600/50 transition-colors"
                >
                  <span className="font-medium text-sm">Home</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Navigation Links Container - Dark background */}
              <div className="bg-gray-800/60 rounded-full border border-gray-400/30 px-3 py-2 space-x-1 flex">
                <Link href="/about" className="text-white bg-gray-700/50 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors text-sm">
                  ABOUT
                </Link>
                <Link href="/programs" className="text-white bg-gray-700/50 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors text-sm">
                  Programs
                </Link>
                <Link href="/method" className="text-white bg-gray-700/50 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors text-sm">
                  Method
                </Link>
                <Link href="/about" className="text-white bg-gray-700/50 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors text-sm">
                  About
                </Link>
                <Link href="/faq" className="text-white bg-gray-700/50 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors text-sm">
                  FAQ
                </Link>
              </div>
            </nav>

            {/* Right Section - Language Flags + Login */}
            <div className="flex items-center space-x-3">
              {/* Language Flags */}
              <div className="flex items-center space-x-2">
                {/* UK Flag */}
                <button className="w-6 h-6 rounded-full overflow-hidden border border-gray-400/30 hover:opacity-80 transition-opacity">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 via-white to-red-600 relative">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600"></div>
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-600"></div>
                  </div>
                </button>
                
                {/* Spain Flag */}
                <button className="w-6 h-6 rounded-full overflow-hidden border border-gray-400/30 hover:opacity-80 transition-opacity">
                  <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-red-600"></div>
                    <div className="absolute top-1/3 left-0 w-full h-1/3 bg-yellow-400"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-red-600"></div>
                  </div>
                </button>
              </div>

              {/* Login Button - WHITE background */}
              <Link 
                href="/login" 
                className="bg-white text-black px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-100 transition-colors text-sm"
              >
                <span>Login</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800/95 border-t border-gray-400/30 rounded-b-2xl">
              <div className="px-4 py-3 space-y-2">
                <Link 
                  href="/" 
                  className="bg-white text-black px-4 py-2 rounded-full flex items-center space-x-2 block font-medium text-sm"
                >
                  <span>Home</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/about" className="text-white bg-gray-700/50 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors block text-sm">
                  ABOUT
                </Link>
                <Link href="/programs" className="text-white bg-gray-700/50 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors block text-sm">
                  Programs
                </Link>
                <Link href="/method" className="text-white bg-gray-700/50 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors block text-sm">
                  Method
                </Link>
                <Link href="/about" className="text-white bg-gray-700/50 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors block text-sm">
                  About
                </Link>
                <Link href="/faq" className="text-white bg-gray-700/50 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors block text-sm">
                  FAQ
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
} 