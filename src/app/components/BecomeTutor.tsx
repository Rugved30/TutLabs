"use client";
import React, { useState } from "react";
import {
  BookOpen,
  DollarSign,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const BecomeTutor: React.FC = () => {
  const [email, setEmail] = useState("");

  const benefitsList = [
    {
      icon: <DollarSign className="w-10 h-10 text-green-600" />,
      title: "Earn Flexibly",
      description:
        "Set your own rates and schedule. Maximize your income on your terms.",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: "Work from Anywhere",
      description:
        "Conduct online or in-person sessions. Complete flexibility in your teaching.",
    },
    {
      icon: <Users className="w-10 h-10 text-purple-600" />,
      title: "Expand Your Network",
      description:
        "Connect with motivated students and build a strong professional community.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-orange-600" />,
      title: "Professional Growth",
      description:
        "Enhance your teaching skills and gain valuable experience across subjects.",
    },
  ];

  const registrationSteps = [
    "Create Your Profile",
    "Upload Qualifications",
    "Verify Credentials",
    "Start Teaching",
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add email submission logic here
    console.log("Email submitted:", email);
    alert("Thank you! We will contact you soon about becoming a tutor.");
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Tutor Benefits */}
          <div>
            <div className="bg-blue-100 inline-block px-4 py-2 rounded-full text-blue-800 text-sm mb-4">
              Become a Tutor
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Lives, Build Your Career with Tutlabs
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our community of passionate educators. Unlock opportunities
              to teach, grow, and make a difference in students' lives.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {benefitsList.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {benefit.icon}
                  <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Registration Process */}
          <div className="bg-white rounded-xl shadow-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Start Your Tutoring Journey
            </h3>

            {/* Registration Steps */}
            <div className="space-y-4 mb-6">
              {registrationSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-50 p-4 rounded-lg"
                >
                  <div className="mr-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <span className="text-gray-800 font-medium">{step}</span>
                  {index < registrationSteps.length - 1 && (
                    <ArrowRight className="ml-auto w-5 h-5 text-gray-400" />
                  )}
                </div>
              ))}
            </div>

            {/* Email Submission Form */}
            <form
              onSubmit={handleEmailSubmit}
              className="space-y-4 group"
              noValidate
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              />
              <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Please enter a valid email address
              </span>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center group-invalid:pointer-events-none"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              Join 500+ tutors empowering students nationwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeTutor;
