'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { tutors } from '../data';
import Footer from '../components/Footer';

const FindTutor = () => {
  const [subject, setSubject] = useState('');
  const [showResults, setShowResults] = useState(true); // Set to true to show cards initially
  
  // Expanded sample tutor data with more entries to create multiple rows
  

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Find Your Perfect Tutor</h1>
          <p className="text-xl text-gray-600 mb-8">Discover expert tutors who can help you master any subject</p>
          
          {/* Search form */}
          <form 
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto mb-12 bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What subject do you want to learn?"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:opacity-90 transition duration-300 shadow-md"
              >
                Find Tutors
              </button>
            </div>
          </form>
          
          {/* Results */}
          {showResults && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Available Tutors</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {tutors.map(tutor => (
                  <div 
                    key={tutor.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
                  >
                    <div className="relative">
                      <img 
                        src={tutor.image} 
                        alt={tutor.name} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{tutor.name}</h3>
                      <p className="text-blue-600 font-medium mb-4">{tutor.subject}</p>
                      
                      <div className="flex justify-between text-gray-600 text-sm mb-6">
                        <div>
                          <p className="font-medium text-gray-900">Experience</p>
                          <p>{tutor.experience}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Reviews</p>
                          <p>{tutor.reviews} reviews</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Price</p>
                          <p>{tutor.price}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300">
                          Book Session
                        </button>
                        <button className="border border-gray-300 text-gray-600 hover:bg-gray-50 py-2 px-4 rounded-lg transition duration-300">
                          Profile
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FindTutor;