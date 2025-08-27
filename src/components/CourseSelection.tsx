'use client';

import Link from 'next/link';
import { programs } from '@/config/programs';

export default function CourseSelection() {
  return (
    <div className="bg-black text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-weight-700 mb-2 sm:mb-4">Choose Your Program</h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Select the program that best fits your development goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Video Analysis */}
          <div className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all">
            <div className="text-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">📹</span>
              </div>
              <h3 className="text-lg sm:text-xl font-weight-600 mb-2">{programs.videoAnalysis.title}</h3>
              <p className="text-2xl sm:text-3xl font-weight-700 text-blue-400 mb-2">
                ${programs.videoAnalysis.price.toFixed(2)}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                {programs.videoAnalysis.description}
              </p>
            </div>
            
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {programs.videoAnalysis.categories.slice(0, 3).map((category, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span className="text-xs sm:text-sm text-gray-300">{category.title}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/checkout?course=video-analysis`}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-weight-600 py-2.5 sm:py-3 rounded-lg transition-colors block text-center text-sm sm:text-base"
            >
              Select Video Analysis
            </Link>
          </div>

          {/* Training Program */}
          <div className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-green-500 transition-all">
            <div className="text-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">⚽</span>
              </div>
              <h3 className="text-lg sm:text-xl font-weight-600 mb-2">{programs.trainingProgram.title}</h3>
              <p className="text-2xl sm:text-3xl font-weight-700 text-green-400 mb-2">
                ${programs.trainingProgram.price.toFixed(2)}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                {programs.trainingProgram.description}
              </p>
            </div>
            
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {programs.trainingProgram.categories.slice(0, 3).map((category, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-xs sm:text-sm text-gray-300">{category.title}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/checkout?course=training-program`}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-weight-600 py-2.5 sm:py-3 rounded-lg transition-colors block text-center text-sm sm:text-base"
            >
              Select Training Program
            </Link>
          </div>

          {/* Coaching Session */}
          <div className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-orange-500 transition-all">
            <div className="text-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-lg sm:text-xl font-weight-600 mb-2">{programs.coachingSession.title}</h3>
              <p className="text-2xl sm:text-3xl font-weight-700 text-orange-400 mb-2">
                ${programs.coachingSession.price.toFixed(2)}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                {programs.coachingSession.description}
              </p>
            </div>
            
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {programs.coachingSession.categories.slice(0, 3).map((category, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span className="text-xs sm:text-sm text-gray-300">{category.title}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/checkout?course=coaching-session`}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-weight-600 py-2.5 sm:py-3 rounded-lg transition-colors block text-center text-sm sm:text-base"
            >
              Select Coaching Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 