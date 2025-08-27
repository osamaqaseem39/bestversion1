'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [buttonVisible, setButtonVisible] = useState(true)
  const [videoSize, setVideoSize] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Auto-play video after a delay
    const timer = setTimeout(() => {
      setIsPlaying(true)
      setButtonVisible(false)
      
      // Start video playback
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log('Video autoplay failed:', error)
        })
      }
      
      // Animate video size from 0 to full screen
      setTimeout(() => {
        setVideoSize(100)
      }, 100)
    }, 3000) // 3 second delay

    return () => clearTimeout(timer)
  }, [])

  const handlePlayClick = () => {
    setIsPlaying(true)
    setButtonVisible(false)
    
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video play failed:', error)
      })
    }
    
    // Animate video size from 0 to full screen
    setTimeout(() => {
      setVideoSize(100)
    }, 100)
  }

  return (
    <section className="relative bg-transparent overflow-hidden px-0 sm:px-4 md:px-6 lg:px-8" style={{ aspectRatio: '16/9' }}>
      {/* Background with gradient effect */}
     
      {/* Video Background - grows from center */}
      {isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            className="object-cover transition-all duration-1000 ease-in-out"
            style={{
              width: '100%',
              borderRadius: videoSize < 100 ? '50%' : '0%'
            }}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Video Home Page.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video Overlays */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Dark gradient overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50"></div>
            
            {/* Vignette effect */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60"></div>
            
            {/* Subtle color grading overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-black/20 to-purple-900/30"></div>
            
            {/* Top and bottom fade */}
            <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-b from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
            
            {/* Additional dark overlay for overall darkness */}
            <div className="absolute inset-0 bg-black/30"></div>
            
            {/* Subtle film grain effect */}
            <div className="absolute inset-0 opacity-10 bg-noise"></div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-center px-0 sm:px-4 md:px-6 lg:px-8">
        {/* Main Play Button using image from public folder */}
        <button
          onClick={handlePlayClick}
          className={`group relative flex items-center justify-center transition-all duration-1000 ease-in-out shadow-2xl ${
            buttonVisible 
              ? 'w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-100' 
              : 'w-0 h-0 opacity-0'
          }`}
        >
          {/* Play button image */}
          <Image
            src="/Video play Botton.png"
            alt="Play Video"
            width={192}
            height={192}
            className={`object-contain transition-all duration-1000 ease-in-out ${
              buttonVisible 
                ? 'w-full h-full group-hover:scale-110' 
                : 'w-0 h-0'
            }`}
          />
        </button>
      </div>
    </section>
  )
} 