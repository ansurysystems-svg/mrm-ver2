import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg">
                <img src="/assets/mrm-logo.png" alt="MRM Logo" className="h-10 w-auto" />
              </div>
              <span className="text-xl font-bold text-white">MRM Advocates</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Delivering exceptional legal services with integrity, precision, and unwavering dedication to our clients' success.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Practice Areas</h3>
            <ul className="space-y-4">
              {[
                "Corporate Law",
                "Litigation",
                "Real Estate",
                "Employment Law",
                "Criminal Defense",
                "Family Law",
              ].map((area) => (
                <li key={area}>
                  <Link to="/services" className="hover:text-accent transition-colors">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent shrink-0" />
                <span>Westlands Business Park, Nairobi, Kenya<br />P.O. Box 67718-00100</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+254 702 929 018</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@mrmadvocates.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Mohamed Rama Mursal LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
