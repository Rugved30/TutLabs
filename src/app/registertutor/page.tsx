"use client";
import React, { ChangeEvent, FormEvent, useState, FocusEvent } from "react";
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
  AlertCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Define types for form data
interface FormData {
  hearAboutUS: string;
  hourlyRate: string;
  teachingMethod: string;
  teachingDesc: string;
  subjects: string;
  graduation: string;
  institution: string;
  fieldOfStudy: string;
  degree: string;
  location: string;
  name: string;
  email: string;
  phone: string;
  experience: string;
  availability: string;
  resume: File | null;
  profilePhoto: File | null;
}

// Define types for form errors and touched fields
interface FormErrors {
  [key: string]: string;
}

interface TouchedFields {
  [key: string]: boolean;
}

const registertutor = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    hearAboutUS: "",
    hourlyRate: "",
    teachingMethod: "",
    teachingDesc: "",
    subjects: "",
    graduation: "",
    institution: "",
    fieldOfStudy: "",
    degree: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    availability: "",
    resume: null,
    profilePhoto: null,
  });

  // Form validation state
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [terms, setTerms] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Handle file input separately
    if (
      name === "resume" &&
      "files" in e.target &&
      e.target.files &&
      e.target.files[0]
    ) {
      setFormData({
        ...formData,
        [name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    //Handle profile photo
    if (
      name === "profilePhoto" &&
      "files" in e.target &&
      e.target.files &&
      e.target.files[0]
    ) {
      setFormData({
        ...formData,
        [name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Mark field as touched
    setTouched({
      ...touched,
      [name]: true,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Handle field blur
  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
    validateField(name, formData[name as keyof FormData]);
  };

  // Validate individual field
  const validateField = (
    name: string,
    value: string | number | File | null | boolean
  ): string => {
    let error = "";

    switch (name) {
      case "hearAboutUS":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Hear About Us is required";
        }
        break;
      case "hourlyRate":
        if (
          !value ||
          (typeof value === "string" && !/^[1-9]\d*$/i.test(value))
        ) {
          error = "Hourly Rate is required";
        }
        break;
      case "teachingMethod":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Teaching Method is required";
        }
        break;
      case "teachingDesc":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Teaching Experience is required";
        }
        break;
      case "subjects":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Subject is required";
        }
        break;
      case "graduation":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Graduation year is required";
        } else if (
          typeof value === "string" &&
          !/^(19|20)\d{2}$/i.test(value)
        ) {
          error = "Invalid graduation year";
        }
        break;
      case "institution":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Institution name is required";
        }
        break;
      case "fieldOfStudy":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Field of Study is required";
        }
        break;
      case "degree":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Degree is required";
        }
        break;
      case "name":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Name is required";
        }
        break;
      case "email":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Email is required";
        } else if (
          typeof value === "string" &&
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ) {
          error = "Invalid email address";
        }
        break;
      case "phone":
        if (
          !value ||
          (value &&
            typeof value === "string" &&
            !/^[0-9+\- ]{10,15}$/i.test(value))
        ) {
          error = "Invalid phone number";
        }
        break;
      case "location":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "City, State is required";
        }
        break;
      case "subjects":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Subject expertise is required";
        }
        break;
      case "experience":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Experience level is required";
        }
        break;
      case "availability":
        if (!value || (typeof value === "string" && !value.trim())) {
          error = "Availability is required";
        }
        break;
      case "resume":
        if (!value) {
          error = "Resume is required";
        } else if (value instanceof File) {
          if (value.size > 5 * 1024 * 1024) {
            error = "File size must be less than 5MB";
          } else if (
            ![
              "application/pdf",
              "application/msword",
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ].includes(value.type)
          ) {
            error = "Only PDF or DOC files are allowed";
          }
        }
        break;
      case "profilePhoto":
        if (!value) {
          error = "Photo is required";
        } else if (value instanceof File) {
          if (value.size > 2 * 1024 * 1024) {
            error = "File size must be less than 2MB";
          } else if (
            !["image/png", "image/jpg", "image/jpeg"].includes(value.type)
          ) {
            error = "Only JPG, JPEG or PNG files are allowed";
          }
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error;
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Mark all fields as touched
    const newTouched: TouchedFields = {};
    Object.keys(formData).forEach((key) => {
      newTouched[key] = true;
    });
    setTouched(newTouched);

    // Validate each field
    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error != "") {
        newErrors[name] = error;
        isValid = false;
      }
    });
    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted successfully:", formData);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          experience: "",
          availability: "",
          resume: null,
          profilePhoto: null,
          hearAboutUS: "",
          hourlyRate: "",
          teachingMethod: "",
          teachingDesc: "",
          subjects: "",
          graduation: "",
          institution: "",
          fieldOfStudy: "",
          degree: "",
        });
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
        setFormSubmitted(true);

        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  // Get input classes based on validation state
  const getInputClasses = (fieldName: string): string => {
    const baseClasses = "w-full px-4 py-2 border border-gray-300 rounded-lg";

    if (!touched[fieldName]) {
      return `${baseClasses} border-gray-300`;
    }

    if (errors[fieldName]) {
      return `${baseClasses} border-red-500 focus:ring-red-500 focus:border-red-500`;
    }

    return `${baseClasses} border-green-500 focus:ring-green-500 focus:border-green-500`;
  };

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
              <form
                className="space-y-6 text-black placeholder-gray"
                onSubmit={handleSubmit}
                noValidate
              >
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
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={getInputClasses("name")}
                      />
                      {touched.name && errors.name && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={getInputClasses("email")}
                      />
                      {touched.email && errors.email && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses("phone")}
                      />
                      {touched.phone && errors.phone && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={getInputClasses("location")}
                        placeholder="City, State/Province"
                      />
                      {touched.location && errors.location && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.location}
                        </p>
                      )}
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
                        id="degree"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={getInputClasses("degree")}
                      >
                        <option value="">Select your highest degree</option>
                        <option value="High School Diploma">
                          High School Diploma
                        </option>
                        <option value="Associate's Degree">
                          Associate's Degree
                        </option>
                        <option value="Bachelor's Degree">
                          Bachelor's Degree
                        </option>
                        <option value="Master's Degree">Master's Degree</option>
                        <option value="Doctoral Degree">Doctoral Degree</option>
                        <option value="Professional Certification">
                          Professional Certification
                        </option>
                      </select>
                      {touched.degree && errors.degree && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.degree}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Field of Study *
                      </label>
                      <input
                        type="text"
                        id="fieldOfStudy"
                        name="fieldOfStudy"
                        value={formData.fieldOfStudy}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={getInputClasses("fieldOfStudy")}
                        placeholder="E.g., Computer Science, Mathematics"
                      />
                      {touched.fieldOfStudy && errors.fieldOfStudy && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.fieldOfStudy}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Institution Name *
                      </label>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={getInputClasses("institution")}
                      />
                      {touched.institution && errors.institution && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.institution}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Graduation Year *
                      </label>
                      <input
                        type="text"
                        id="graduation"
                        name="graduation"
                        inputMode="numeric"
                        value={formData.graduation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses("graduation")}
                        required
                      />
                      {touched.graduation && errors.graduation && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.graduation}
                        </p>
                      )}
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
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={getInputClasses("experience")}
                      >
                        <option value="">Select experience level</option>
                        <option value="Less than 1 year">
                          Less than 1 year
                        </option>
                        <option value="1-2 years">1-2 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="6-10 years">6-10 years</option>
                        <option value="10+ years">10+ years</option>
                      </select>
                      {touched.experience && errors.experience && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.experience}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subjects You Can Teach *
                      </label>
                      <input
                        type="text"
                        id="subjects"
                        name="subjects"
                        value={formData.subjects}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={getInputClasses("subjects")}
                        placeholder="Separate multiple subjects with commas"
                      />
                      {touched.subjects && errors.subjects && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.subjects}
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Brief Description of Teaching Experience *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Describe your teaching experience, style, and any relevant certifications..."
                        required
                        id="teachingDesc"
                        name="teachingDesc"
                        value={formData.teachingDesc}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses("teachingDesc")}
                      />
                      {touched.teachingDesc && errors.teachingDesc && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.teachingDesc}
                        </p>
                      )}
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
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={getInputClasses("availability")}
                      >
                        <option value="">Select your availability</option>
                        <option value="Weekday mornings">
                          Weekday mornings
                        </option>
                        <option value="Weekday afternoons">
                          Weekday afternoons
                        </option>
                        <option value="Weekday evenings">
                          Weekday evenings
                        </option>
                        <option value="Weekends only">Weekends only</option>
                        <option value="Flexible schedule">
                          Flexible schedule
                        </option>
                      </select>
                      {touched.availability && errors.availability && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.availability}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Teaching Method *
                      </label>
                      <select
                        required
                        id="teachingMethod"
                        name="teachingMethod"
                        value={formData.teachingMethod}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses("teachingMethod")}
                      >
                        <option value="">Select teaching preference</option>
                        <option value="In-person only">In-person only</option>
                        <option value="Online only">Online only</option>
                        <option value="Both in-person and online">
                          Both in-person and online
                        </option>
                      </select>
                      {touched.teachingMethod && errors.teachingMethod && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.teachingMethod}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Hourly Rate (USD) *
                      </label>
                      <input
                        type="text"
                        placeholder="E.g., 35"
                        required
                        id="hourlyRate"
                        name="hourlyRate"
                        value={formData.hourlyRate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses("hourlyRate")}
                      />
                      {touched.hourlyRate && errors.hourlyRate && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.hourlyRate}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        How did you hear about us?
                      </label>
                      <select
                        required
                        id="hearAboutUS"
                        name="hearAboutUS"
                        value={formData.hearAboutUS}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses("hearAboutUS")}
                      >
                        <option value="">Select an option</option>
                        <option value="Search Engine">Search Engine</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Friend Referral">Friend Referral</option>
                        <option value="Advertisement">Advertisement</option>
                        <option value="Other">Other</option>
                      </select>
                      {touched.hearAboutUS && errors.hearAboutUS && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.hearAboutUS}
                        </p>
                      )}
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
                        id="resume"
                        name="resume"
                        onChange={
                          handleChange as React.ChangeEventHandler<HTMLInputElement>
                        }
                        onBlur={
                          handleBlur as React.FocusEventHandler<HTMLInputElement>
                        }
                        required
                        className={getInputClasses("resume")}
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        PDF, DOC, or DOCX (max 5MB)
                      </p>
                      {touched.resume && errors.resume && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.resume}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Profile Photo
                      </label>
                      <input
                        type="file"
                        id="profilePhoto"
                        name="profilePhoto"
                        onChange={
                          handleChange as React.ChangeEventHandler<HTMLInputElement>
                        }
                        onBlur={
                          handleBlur as React.FocusEventHandler<HTMLInputElement>
                        }
                        required
                        className={getInputClasses("profilePhoto")}
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        JPEG or PNG (max 2MB)
                      </p>
                      {touched.profilePhoto && errors.profilePhoto && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />{" "}
                          {errors.profilePhoto}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {/* Terms and Conditions */}
                <div className="pt-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={terms}
                      onChange={(e) => setTerms(!terms)}
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
                    disabled={isSubmitting || !terms}
                    className={`w-full bg-blue-600 hover:bg-blue-700 transition text-white font-bold px-6 py-3 rounded-lg text-lg flex items-center justify-center ${
                      isSubmitting
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white
                    ${
                      !terms
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Submitting..." : "Submit Application"}
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
