import { motion } from "motion/react";
import { ShieldCheck, Target, Eye, Handshake, Globe, Trophy, Medal, Star, UserCheck, Lightbulb, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "../components/ConsultationModal";
import { Helmet } from "react-helmet-async";

const partners = [
  {
    name: "Abdalla Mohamed",
    role: "Senior Partner",
    description: "Specialist in corporate law, mergers, acquisitions, and securities. Abdalla advises blue-chip companies on market-shaping transactions.",
    expertise: ["Corporate Law", "M&A", "Securities"],
  },
  {
    name: "Rama Mwanaidi",
    role: "Senior Partner",
    description: "Renowned litigator representing clients in complex commercial disputes, arbitration, and high-profile litigation across East Africa.",
    expertise: ["Litigation", "Arbitration", "Commercial Disputes"],
  },
  {
    name: "Mursal Abdirahman",
    role: "Senior Partner",
    description: "Trusted adviser on real estate law, property development, and conveyancing, guiding landmark projects from conception to completion.",
    expertise: ["Real Estate", "Development", "Conveyancing"],
  },
];

const associates = [
  {
    name: "Omwoyo Ondari",
    role: "Junior Associate",
    description: "Dedicated legal professional supporting the firm's diverse practice areas with research, client service, and case preparation expertise.",
    expertise: ["Legal Research", "Client Services", "Case Preparation"],
  },
  {
    name: "Godana Hussein Godana",
    role: "Junior Associate",
    description: "Emerging legal talent committed to delivering quality legal services and contributing to the firm's reputation for excellence.",
    expertise: ["Legal Services", "Documentation", "Client Support"],
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>About Us | MRM Advocates - Our Story and Legal Team</title>
        <meta name="description" content="Learn about Mohamed Rama Mursal LLP (MRM Advocates), our mission, vision, and the experienced legal professionals dedicated to serving you in Kenya." />
      </Helmet>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Our Story</span>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mt-6 leading-tight">
                Built on Integrity. <br />
                <span className="text-accent italic font-serif">Driven by Excellence.</span>
              </h1>
              <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                Mohamed Rama Mursal LLP was founded to redefine legal excellence in Kenya. Our partners combine decades of experience, unwavering integrity, and a deep understanding of the Kenyan legal landscape to deliver strategic outcomes that protect and empower our clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden luxury-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Team Meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Our Purpose</span>
              <h2 className="text-4xl font-bold mt-4 mb-8">Guided by Vision, Anchored in Values</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                We believe that transformative legal counsel stems from deep collaboration, strategic insight, and an unwavering commitment to excellence. Every matter we undertake is handled with the utmost care, precision, and dedication to the client’s goals.
              </p>
              <ConsultationModal 
                trigger={
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                    <FileText className="mr-2 w-4 h-4" /> Download Firm Profile
                  </Button>
                }
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Target className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-400 text-sm">To deliver sophisticated, client-centric legal solutions that empower businesses and safeguard individual rights.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Eye className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-400 text-sm">To be the trusted legal partner of choice for organizations navigating complex matters in East Africa.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Handshake className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-4">Client Commitment</h3>
                <p className="text-gray-400 text-sm">We listen, collaborate, and tailor strategies that align with our clients’ vision.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Globe className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-4">Global Perspective</h3>
                <p className="text-gray-400 text-sm">We align local insight with global best practices to solve cross-border challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Meet Our Partners</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                whileHover={{ y: -10 }}
                className="bg-secondary/20 rounded-3xl overflow-hidden luxury-shadow"
              >
                <div className="aspect-[4/5] bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-20 h-20 text-gray-400" />
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-accent font-bold text-xs uppercase tracking-widest">{partner.role}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{partner.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{partner.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {partner.expertise.map((exp) => (
                      <span key={exp} className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-tighter border">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold">Awards & Accolades</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Law Firm of the Year 2023", org: "Kenya Legal Awards", icon: Trophy },
              { title: "Excellence in Corporate Law", org: "East Africa Legal Summit", icon: Star },
              { title: "Best Litigation Practice", org: "African Law Awards", icon: Medal },
              { title: "Client Service Excellence", org: "Legal Services Board", icon: UserCheck },
            ].map((award, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl shadow-sm flex flex-col items-center text-center">
                <award.icon className="w-12 h-12 text-accent mb-6" />
                <h3 className="font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-sm text-gray-500">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
