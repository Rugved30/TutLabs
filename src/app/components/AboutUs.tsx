import React from 'react';
import { Target, Users, BookOpen, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Personalized Learning",
      description: "Tailored tutoring experiences matched to your unique learning style and goals."
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Expert Tutors",
      description: "Carefully vetted professionals with proven expertise in their subjects."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-purple-600" />,
      title: "Comprehensive Support",
      description: "Tutoring across all subjects and skill levels, from academics to professional development."
    },
    {
      icon: <Award className="w-12 h-12 text-orange-600" />,
      title: "Guaranteed Quality",
      description: "Commitment to excellence with verified tutor credentials and student success."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="bg-blue-100 inline-block px-4 py-2 rounded-full text-blue-800 text-4xl font-bold">
              About Tutlabs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Empowering Learning, One Tutor at a Time
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We connect students with the best local tutors, making quality education accessible in your city. Our platform allows you to find expert tutors for any subject, ensuring personalized learning experiences. Whether you need help with academics or skill development, we make tutoring simple and effective. Join us to learn, grow, and achieve your goals with the right guidance!
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-4xl font-bold text-blue-600">5000+</h3>
            <p className="text-gray-600 mt-2">Tutors Registered</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-4xl font-bold text-green-600">95%</h3>
            <p className="text-gray-600 mt-2">Student Satisfaction</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl">
            <h3 className="text-4xl font-bold text-purple-600">50+</h3>
            <p className="text-gray-600 mt-2">Subjects Covered</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-4xl font-bold text-orange-600">10000+</h3>
            <p className="text-gray-600 mt-2">Students Helped</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;