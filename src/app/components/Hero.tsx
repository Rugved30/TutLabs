'use client'
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import tutorImg from '../../../public/TutorImg.webp';

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const popularSubjects = [
    'Mathematics', 'Science', 'Computer Science', 
    'Language', 'Physics', 'Chemistry'
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Master Any Subject with the Best Tutors Near You!
          </h1>
          
          <p className="text-lg text-gray-600 mb-6">
            Find your perfect tutor and unlock your full learning potential.
          </p>
          
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search for a subject"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Popular Subjects */}
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Popular Subjects:</p>
            <div className="flex flex-wrap gap-2">
              {popularSubjects.map((subject) => (
                <span 
                  key={subject}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Side - Image */}
        <div className="hidden md:flex justify-center items-center">
          <img 
            src={tutorImg.src} 
            alt="Tutoring Illustration" 
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;