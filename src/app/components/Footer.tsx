import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { title: "Home", url: "/" },
    { title: "Find Tutor", url: "/find-tutor" },
    { title: "Become a Tutor", url: "/become-tutor" },
    { title: "Subjects", url: "/subjects" },
    { title: "About Us", url: "/about" }
  ];

  const legalLinks = [
    { title: "Privacy Policy", url: "/privacy" },
    { title: "Terms of Service", url: "/terms" },
    { title: "Refund Policy", url: "/refund" },
    { title: "Cancellation Policy", url: "/cancellation" }
  ];

  const supportLinks = [
    { title: "Help Center", url: "/help" },
    { title: "Contact Us", url: "/contact" },
    { title: "FAQ", url: "/faq" },
    { title: "Support Ticket", url: "/support" }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, url: "https://facebook.com/tutlabs" },
    { icon: <Twitter className="w-6 h-6" />, url: "https://twitter.com/tutlabs" },
    { icon: <Instagram className="w-6 h-6" />, url: "https://instagram.com/tutlabs" },
    { icon: <Linkedin className="w-6 h-6" />, url: "https://linkedin.com/company/tutlabs" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-500">Tutlabs</h3>
            <p className="text-gray-400 mb-6">
              Connecting students with expert tutors, making quality education accessible and personalized.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>support@tutlabs.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+91 999-888-7777</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-blue-500 transition duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-blue-500 transition duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-blue-500 transition duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social and Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Tutlabs. All Rights Reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;