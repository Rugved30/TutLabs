import React from "react";
import raunak from "../../../public/raunak.jpg";
import sudhanshu from "../../../public/Sudhanshu.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mission to Transform Education
            </h1>
            <p className="text-xl opacity-90">
              Connecting passionate educators with eager learners to create
              meaningful learning experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="/api/placeholder/500/400"
                alt="Our Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, TutorMatch began with a simple idea: education
                should be personalized, accessible, and transformative. Our
                founders, all former educators, recognized the gap between
                traditional education systems and the individualized attention
                students need to thrive.
              </p>
              <p className="text-gray-600">
                What started as a small network of tutors and students has grown
                into a vibrant community of thousands of educators and learners
                across the globe, united by the belief that knowledge-sharing
                can change lives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-blue-600 text-3xl mb-4">❖</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  We believe in maintaining the highest standards of educational
                  quality and professional integrity.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-green-600 text-3xl mb-4">✦</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Accessibility
                </h3>
                <p className="text-gray-600">
                  We're committed to making quality education accessible to
                  learners from all backgrounds and circumstances.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="text-purple-600 text-3xl mb-4">◈</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We continuously evolve our platform and methods to embrace the
                  future of learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Meet Our Leadership Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={sudhanshu.src}
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Sudhanshu Singh
              </h3>
              <p className="text-blue-600 font-medium mb-3">CEO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Business minded with a passion for educational technology and
                equal access to quality learning.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={raunak.src}
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Raunak Chaudhary
              </h3>
              <p className="text-blue-600 font-medium mb-3">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Tech innovator with a background in both education and software
                development, focused on creating intuitive learning platforms.
              </p>
            </div>

            {/* Team Member 3 */}
            {/*Hrugved and Yash */}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
                <p className="text-blue-100">Qualified Tutors</p>
              </div>

              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
                <p className="text-blue-100">Happy Students</p>
              </div>

              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                <p className="text-blue-100">Subject Areas</p>
              </div>

              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">4.8</div>
                <p className="text-blue-100">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            What People Are Saying
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-6">
                "Working with my tutor has completely transformed my
                understanding of calculus. I went from struggling to excelling
                in just a few months."
              </p>
              <div className="flex items-center">
                <img
                  src="/api/placeholder/50/50"
                  alt="Student"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-medium text-gray-800">Jamie Reynolds</p>
                  <p className="text-gray-500 text-sm">University Student</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-6">
                "As a tutor on this platform, I've been able to connect with
                students who truly value education. The tools provided make
                teaching online a breeze."
              </p>
              <div className="flex items-center">
                <img
                  src="/api/placeholder/50/50"
                  alt="Tutor"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-medium text-gray-800">Dr. Samuel Lee</p>
                  <p className="text-gray-500 text-sm">Physics Tutor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Join Our Educational Community
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you're looking to learn or to share your expertise, we're
              building a place where meaningful education happens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300">
                Find a Tutor
              </button>
              <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300">
                Become a Tutor
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
