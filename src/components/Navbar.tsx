import * as React from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, X, ChevronRight, MapPin, Mail as MailIcon, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Practice", href: "/services#practice" },
  { name: "Contact", href: "/contact" },
];

import { ConsultationModal } from "./ConsultationModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-12 overflow-hidden rounded-lg luxury-border bg-white px-2 flex items-center justify-center">
                <img 
                  src="/assets/mrm-logo.png" 
                  alt="MRM Logo" 
                  className="object-contain h-10 w-auto" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=MRM&background=0D1117&color=C5A059";
                  }}
                />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 hidden sm:block">
              MRM <span className="text-accent">Advocates</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-gray-700 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+254702929018"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              +254 702 929 018
            </a>
            <ConsultationModal 
              trigger={
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">
                  Consult Now
                </Button>
              }
            />
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-full sm:max-w-md p-0 border-none" showCloseButton={false}>
              <div className="flex flex-col h-full bg-white">
                {/* Header */}
                <div className="p-6 border-b flex items-center justify-between">
                  <Link to="/" className="flex items-center gap-3">
                    <div className="h-12 bg-white rounded-lg flex items-center justify-center px-2 border border-gray-100">
                      <img 
                        src="/assets/mrm-logo.png" 
                        alt="MRM Logo" 
                        className="object-contain h-10 w-auto"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=MRM&background=0D1117&color=C5A059";
                        }}
                      />
                    </div>
                    <span className="text-xl font-bold text-gray-900">MRM Advocates</span>
                  </Link>
                  <SheetClose render={<Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary"><X className="w-6 h-6" /></Button>} />
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Navigation</p>
                    <div className="grid gap-2">
                      {navLinks.map((link) => (
                        <SheetClose key={link.name} nativeButton={false} render={
                          <Link
                            to={link.href}
                            className="text-xl font-bold text-gray-900 hover:text-accent transition-colors flex items-center justify-between group py-2"
                          >
                            {link.name}
                            <ChevronRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-all" />
                          </Link>
                        } />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 pt-6 border-t">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Get in Touch</p>
                    <div className="space-y-4">
                      <a href="tel:+254702929018" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                          <Phone className="w-5 h-5 text-accent group-hover:text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Call Us</p>
                          <p className="text-sm font-bold text-gray-900">+254 702 929 018</p>
                        </div>
                      </a>
                      <a href="mailto:info@mrmadvocates.co.ke" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                          <MailIcon className="w-5 h-5 text-accent group-hover:text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Email Us</p>
                          <p className="text-sm font-bold text-gray-900">info@mrmadvocates.co.ke</p>
                        </div>
                      </a>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Visit Us</p>
                          <p className="text-sm font-bold text-gray-900">Westlands Business Park, Nairobi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 bg-secondary/30 mt-auto">
                  <ConsultationModal 
                    trigger={
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-7 text-lg rounded-2xl shadow-xl">
                        Book Consultation
                      </Button>
                    }
                  />
                  <div className="flex items-center justify-center gap-6 mt-8">
                    {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                      <a key={i} href="#" className="text-gray-400 hover:text-accent transition-colors">
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
