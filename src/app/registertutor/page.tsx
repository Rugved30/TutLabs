import React from "react";
import {
  BookOpen,
  Clock,
  Award,
  Users,
  PenTool,
  Calendar,
  CheckCircle,
  Shield,
  DollarSign,
  Send,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const registertutor = () => {
  // Benefits of becoming a tutor
  const benefits = [
    {
      icon: <DollarSign className="w-10 h-10 text-green-600" />,
      title: "Competitive Compensation",
      description:
        "Set your own rates based on your expertise and experience. Our tutors earn 20-30% more than industry average.",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: "Flexible Schedule",
      description:
        "Choose when and how often you want to teach. Create a schedule that fits perfectly with your lifestyle.",
    },
    {
      icon: <Shield className="w-10 h-10 text-purple-600" />,
      title: "Secure Platform",
      description:
        "Our secure payment system and verification process ensures a safe and professional environment.",
    },
    {
      icon: <Users className="w-10 h-10 text-orange-600" />,
      title: "Growing Community",
      description:
        "Join thousands of tutors sharing knowledge and best practices in our exclusive tutor community.",
    },
  ];

  // How it works steps
  const steps = [
    {
      number: "01",
      title: "Complete Your Profile",
      description:
        "Fill out your personal information, education, expertise, and teaching experience.",
    },
    {
      number: "02",
      title: "Verification Check",
      description:
        "We verify your credentials and perform a background check for student safety.",
    },
    {
      number: "03",
      title: "Set Your Availability",
      description:
        "Define your schedule and which subjects you're ready to teach.",
    },
    {
      number: "04",
      title: "Start Teaching",
      description:
        "Accept student requests and begin your tutoring journey with Tutlabs.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Share Your Knowledge, <br />
                  <span className="text-yellow-300">
                    Inspire The Next Generation
                  </span>
                </h1>
                <p className="text-xl text-blue-100">
                  Join our growing network of expert tutors and make a
                  meaningful impact while earning on your own terms.
                </p>
                <div className="pt-4">
                  <button className="bg-white text-blue-700 hover:bg-blue-50 transition font-bold px-8 py-4 rounded-lg text-lg shadow-lg">
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-lg shadow-xl text-gray-800 max-w-md">
                  <div className="flex items-center text-blue-600 mb-4">
                    <Award className="w-6 h-6 mr-2" />
                    <span className="font-semibold">
                      Join 5,000+ Professional Tutors
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4 text-center">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-3xl font-bold text-blue-700">
                        95%
                      </div>
                      <div className="text-sm text-gray-600">
                        Tutor Satisfaction
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-3xl font-bold text-green-600">
                        $45/hr
                      </div>
                      <div className="text-sm text-gray-600">Average Rate</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600">
                        15hr
                      </div>
                      <div className="text-sm text-gray-600">
                        Weekly Average
                      </div>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="text-3xl font-bold text-orange-600">
                        48hr
                      </div>
                      <div className="text-sm text-gray-600">Match Time</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    *Based on platform data from active tutors in 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Benefits Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Why Become a Tutlabs Tutor?
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Joining our platform provides unique advantages that help you
                grow professionally while maximizing your earning potential.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* How It Works Section */}
        <div className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Our streamlined process gets you from application to teaching in
                just a few simple steps.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-md z-10 relative h-full">
                    <div className="text-3xl font-bold text-blue-600 mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-blue-200 z-0 -translate-y-1/2 -ml-4 mr-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Tutor Success Stories
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Hear from current tutors about their experiences on our
                platform.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    MS
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">
                      Michael S.
                    </div>
                    <div className="text-sm text-gray-500">
                      Mathematics Tutor • 2 years
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Tutlabs has completely transformed my teaching career. The
                  flexible schedule allows me to maintain my day job while
                  tutoring evenings and weekends. I'm earning more than I ever
                  expected and connecting with amazing students."
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
                    JT
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">
                      Jennifer T.
                    </div>
                    <div className="text-sm text-gray-500">
                      ESL Instructor • 3 years
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "As a former classroom teacher, I was looking for a way to
                  continue teaching on my own terms. Tutlabs provided exactly
                  that. Their platform is easy to use, payments are always on
                  time, and the students are motivated to learn."
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
                    RK
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">Robert K.</div>
                    <div className="text-sm text-gray-500">
                      Computer Science Tutor • 1 year
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "I started tutoring on Tutlabs to share my programming
                  knowledge while in graduate school. What began as a side gig
                  has turned into a fulfilling part-time career that pays better
                  than most tech internships I've had."
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Subjects We Need */}
        <div className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                In-Demand Subjects
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                We're actively seeking qualified tutors in these high-demand
                areas.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-all duration-300">
                <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Mathematics</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-all duration-300">
                <PenTool className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">
                  English & Writing
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-all duration-300">
                <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Sciences</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-all duration-300">
                <PenTool className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Programming</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-all duration-300">
                <BookOpen className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Test Prep</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-all duration-300">
                <PenTool className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">
                  Foreign Languages
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Registration Form */}
        <div className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Register as a Tutor
                </h2>
                <p className="text-gray-600 mt-2">
                  Fill out the form below to start your application process.
                </p>
              </div>
              <form className="space-y-6 text-black placeholder-gray">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-600" /> Personal
                    Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="City, State/Province"
                        required
                      />
                    </div>
                  </div>
                </div>
                {/* Educational Background */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" /> Educational
                    Background
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Highest Degree *
                      </label>
                      <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      >
                        <option value="">Select your highest degree</option>
                        <option>High School Diploma</option>
                        <option>Associate's Degree</option>
                        <option>Bachelor's Degree</option>
                        <option>Master's Degree</option>
                        <option>Doctoral Degree</option>
                        <option>Professional Certification</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Field of Study *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="E.g., Computer Science, Mathematics"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Institution Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Graduation Year *
                      </label>
                      <input
                        type="number"
                        min="1950"
                        max="2025"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                  </div>
                </div>
                {/* Teaching Experience */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <PenTool className="w-5 h-5 mr-2 text-blue-600" /> Teaching
                    Experience
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Years of Experience *
                      </label>
                      <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      >
                        <option value="">Select experience level</option>
                        <option>Less than 1 year</option>
                        <option>1-2 years</option>
                        <option>3-5 years</option>
                        <option>6-10 years</option>
                        <option>10+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subjects You Can Teach *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Separate multiple subjects with commas"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Brief Description of Teaching Experience *
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Describe your teaching experience, style, and any relevant certifications..."
                        required
                      />
                    </div>
                  </div>
                </div>
                {/* Availability */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />{" "}
                    Availability & Preferences
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Availability *
                      </label>
                      <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      >
                        <option value="">Select your availability</option>
                        <option>Weekday mornings</option>
                        <option>Weekday afternoons</option>
                        <option>Weekday evenings</option>
                        <option>Weekends only</option>
                        <option>Flexible schedule</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Teaching Method *
                      </label>
                      <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      >
                        <option value="">Select teaching preference</option>
                        <option>In-person only</option>
                        <option>Online only</option>
                        <option>Both in-person and online</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Hourly Rate (USD) *
                      </label>
                      <input
                        type="number"
                        min="15"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="E.g., 35"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        How did you hear about us?
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                        <option value="">Select an option</option>
                        <option>Search Engine</option>
                        <option>Social Media</option>
                        <option>Friend Referral</option>
                        <option>Advertisement</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* Additional Documents */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />{" "}
                    Additional Documents
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Resume/CV *
                      </label>
                      <input
                        type="file"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        PDF, DOC, or DOCX (max 5MB)
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Profile Photo
                      </label>
                      <input
                        type="file"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        JPEG or PNG (max 2MB)
                      </p>
                    </div>
                  </div>
                </div>
                {/* Terms and Conditions */}
                <div className="pt-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 text-blue-600 rounded"
                      required
                    />
                    <label className="ml-2 block text-sm text-gray-700">
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                      . I understand that background checks may be required
                      before approval.
                    </label>
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-bold px-6 py-3 rounded-lg text-lg flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" /> Submit Application
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Our team will review your application and respond within 48
                    hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="py-16 bg-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Everything you need to know about becoming a Tutlabs tutor.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What qualifications do I need to become a tutor?
                </h3>
                <p className="text-gray-600">
                  We require tutors to have at least a bachelor's degree in
                  their teaching subject or relevant experience. For certain
                  specialized subjects, professional certifications may be
                  sufficient. Strong communication skills and a passion for
                  teaching are essential.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How much can I earn as a tutor?
                </h3>
                <p className="text-gray-600">
                  Earnings vary based on your expertise, experience, and the
                  subjects you teach. Our tutors typically earn between $25-65
                  per hour, with specialized subjects commanding higher rates.
                  You set your own rates, and we take a small platform fee from
                  each session.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does the application process take?
                </h3>
                <p className="text-gray-600">
                  The initial review takes 2-3 business days. If approved,
                  background checks typically take an additional 3-5 business
                  days. Once all verifications are complete, you can start
                  accepting students immediately.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do I need to commit to a minimum number of hours?
                </h3>
                <p className="text-gray-600">
                  No, there's no minimum hour requirement. You choose your own
                  schedule and can adjust it at any time. However, maintaining
                  consistent availability helps build your student base and
                  reputation on the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Tutoring Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of tutors who are sharing their knowledge and
              making a difference.
            </p>
            <button className="bg-white text-blue-700 hover:bg-blue-50 transition font-bold px-8 py-4 rounded-lg text-lg shadow-lg">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default registertutor;
