import React from "react";
import {
  Search,
  MapPin,
  Book,
  Clock,
  DollarSign,
  Filter,
  Send,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TutorJobListings = () => {
  // Sample job listings
  const jobs = [
    {
      id: 1,
      title: "Mathematics Tutor",
      location: "New York, NY",
      rate: "$40-45/hr",
      subject: "Algebra, Calculus",
      schedule: "Mon-Wed, Evenings",
      description:
        "Looking for an experienced math tutor to help a high school student prepare for SAT and AP Calculus exams. Strong communication skills required.",
    },
    {
      id: 2,
      title: "ESL Instructor",
      location: "Remote",
      rate: "$35-40/hr",
      subject: "English",
      schedule: "Flexible, 10hrs/week",
      description:
        "Seeking an English as a Second Language tutor to work with international professionals. Experience with business English preferred.",
    },
    {
      id: 3,
      title: "Science Tutor",
      location: "Boston, MA",
      rate: "$45-50/hr",
      subject: "Chemistry, Biology",
      schedule: "Weekends",
      description:
        "Need a science tutor for a middle school student struggling with chemistry and biology concepts. Patient and engaging teaching style preferred.",
    },
    {
      id: 4,
      title: "Computer Science Tutor",
      location: "Remote/Hybrid",
      rate: "$55-65/hr",
      subject: "Python, Data Structures",
      schedule: "Tue-Thu, Afternoons",
      description:
        "Seeking a CS tutor to help a college freshman with Python programming fundamentals and basic data structures. Project-based teaching approach preferred.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="bg-blue-100 inline-block px-4 py-2 rounded-full text-blue-800 text-4xl font-bold mb-4">
              Available Tutor Jobs
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Find Your Perfect Teaching Opportunity
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Browse through our curated list of tutoring positions and find
              opportunities that match your expertise, schedule, and career
              goals.
            </p>
          </div>
          {/* Search and Filter Bar */}
          <div className="bg-white p-4 rounded-xl shadow mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by subject, location, or keyword"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg placeholder-gray text-black"
                />
              </div>
              <div className="flex gap-3">
                <select className="px-4 py-2 border border-gray-300 rounded-lg  text-black">
                  <option value="">Any Subject</option>
                  <option value="math">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="english">English</option>
                  <option value="cs">Computer Science</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg  text-black">
                  <option value="">Any Location</option>
                  <option value="remote">Remote</option>
                  <option value="newyork">New York</option>
                  <option value="boston">Boston</option>
                  <option value="chicago">Chicago</option>
                </select>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  <Filter className="w-5 h-5" /> Filter
                </button>
              </div>
            </div>
          </div>
          {/* Job Listings */}
          <div className="grid gap-6 mb-16">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900">
                      {job.title}
                    </h3>
                    <div className="flex items-center mt-2 text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" /> {job.location}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                        <Book className="w-3 h-3 mr-1" /> {job.subject}
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                        <DollarSign className="w-3 h-3 mr-1" /> {job.rate}
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                        <Clock className="w-3 h-3 mr-1" /> {job.schedule}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Apply Now
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">{job.description}</p>
              </div>
            ))}
          </div>
          {/* Application Form Section */}
          <div
            className="bg-white p-8 rounded-xl shadow-lg text-black"
            id="application-form"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Submit Your Application
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1 "
                    >
                      Subject Expertise *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="E.g., Mathematics, English, Science"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray"
                    />
                  </div>
                </div>
                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="experience"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Years of Experience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    >
                      <option value="">Select Experience</option>
                      <option value="0-1">Less than 1 year</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="availability"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Availability *
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    >
                      <option value="">Select Availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="evenings">Evenings</option>
                      <option value="weekends">Weekends</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="resume"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Resume/CV *
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      PDF or DOC format, max 5MB
                    </p>
                  </div>
                </div>
              </div>
              {/* Full Width Fields */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Cover Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your tutoring experience and why you'd be a great fit..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-lg font-medium"
                >
                  <Send className="w-5 h-5" /> Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TutorJobListings;
