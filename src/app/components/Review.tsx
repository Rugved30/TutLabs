'use client'
import React, { useRef } from 'react';
import { Quote, Star, Trophy } from 'lucide-react';

const Review: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const stories = [
    {
      quote: "From Doubts to Distinctions!",
      description: "Thanks to my tutor from TutLabs, I scored 95% in my CBSE 12th Board Exams! The personalized guidance made all the difference.",
      name: "Aarav Sharma",
      type: "Student",
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      background: "bg-yellow-50"
    },
    {
      quote: "NEET Cracked in First Attempt!",
      description: "TutLabs connected my daughter with the perfect mentor. She not only built her confidence but also secured a great rank in NEET 2024!",
      name: "Pooja Verma",
      type: "Parent",
      icon: <Star className="w-12 h-12 text-blue-500" />,
      background: "bg-blue-50"
    },
    {
      quote: "JEE Advanced – Mission Accomplished!",
      description: "The structured lessons and doubt-solving sessions helped me crack JEE Advanced with a 98 percentile. Forever grateful!",
      name: "Rohan Mehta",
      type: "Student",
      icon: <Trophy className="w-12 h-12 text-green-500" />,
      background: "bg-green-50"
    },
    {
      quote: "Top Rank in UPSC!",
      description: "Finding an expert tutor for UPSC preparation was a game-changer. TutLabs made it possible, and today, my son is living his dream!",
      name: "Rajesh Gupta",
      type: "Parent",
      icon: <Star className="w-12 h-12 text-purple-500" />,
      background: "bg-purple-50"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#0473db]  to-[#cedeed] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🌟 Success Stories from Our Students & Parents 🌟
          </h2>
          <p className="text-lg text-white">
            📖 Real Experiences. Real Results.
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="relative">
          {/* Scroll Left Button */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scroll Right Button */}
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Stories Carousel */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-scroll scrollbar-hide space-x-6 pb-6 scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {stories.map((story, index) => (
              <div 
                key={index}
                className={`flex-shrink-0 w-80 p-6 rounded-xl shadow-lg ${story.background} transform transition-all duration-300 hover:scale-105`}
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="flex items-start mb-4">
                  {story.icon}
                  <Quote className="ml-auto w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {story.quote}
                </h3>
                <p className="text-gray-700 mb-4 italic">
                  "{story.description}"
                </p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {story.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {story.type}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;