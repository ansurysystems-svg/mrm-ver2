import { motion } from "motion/react";
import { ShieldCheck, Target, Eye, Handshake, Globe, Trophy, Medal, Star, UserCheck, Lightbulb, Users, FileText, Linkedin, Mail, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "../components/ConsultationModal";
import { Helmet } from "react-helmet-async";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";

const partners = [
  {
    name: "Abdalla Mohamed",
    role: "Senior Partner",
    image: "/assets/AbdullahiMohamed.jpeg",
    description: "Specialist in corporate law, mergers, acquisitions, and securities. Abdalla advises blue-chip companies on market-shaping transactions.",
    fullBio: "Abdalla Mohamed is a distinguished legal practitioner with over 20 years of experience in Corporate and Commercial Law. He has been instrumental in some of the largest mergers and acquisitions in East Africa. His strategic approach and deep understanding of regulatory frameworks make him a sought-after advisor for multinational corporations and high-growth startups alike.",
    expertise: ["Corporate Law", "M&A", "Securities", "Tax Law"],
    education: ["LL.M in Corporate Law, University of Nairobi", "LL.B, University of Nairobi", "Post Graduate Diploma, Kenya School of Law"],
    email: "abdalla@mrmadvocates.co.ke",
    linkedin: "#"
  },
  {
    name: "Rama Mwanaidi",
    role: "Senior Partner",
    image: "/assets/Rama.jpeg",
    description: "Renowned litigator representing clients in complex commercial disputes, arbitration, and high-profile litigation across East Africa.",
    fullBio: "Rama Mwanaidi is a formidable force in the courtroom, known for her sharp legal mind and persuasive advocacy. With a career spanning two decades, she has successfully represented clients in landmark commercial disputes and international arbitrations. She is a member of the Chartered Institute of Arbitrators and is frequently called upon to resolve complex cross-border conflicts.",
    expertise: ["Litigation", "Licensed Arbitration", "Commercial Disputes", "Public Law"],
    education: ["LL.B, University of Nairobi", "Chartered Institute of Arbitrators (MCIArb)", "Post Graduate Diploma, Kenya School of Law"],
    email: "rama@mrmadvocates.co.ke",
    linkedin: "#"
  },
  {
    name: "Mursal Abdirahman",
    role: "Senior Partner",
    image: "/assets/AbdirahmanMursal.jpeg",
    description: "Trusted adviser on real estate law, property development, and conveyancing, guiding landmark projects from conception to completion.",
    fullBio: "Mursal Abdirahman is a world-class Sheikh and legal expert specializing in Real Estate and Property Law. He brings a unique blend of ethical leadership and deep legal knowledge to property development and conveyancing. He has advised on numerous multi-billion shilling real estate projects, from residential estates to commercial hubs. His meticulous attention to detail and proactive problem-solving ensure that even the most complex transactions are executed seamlessly.",
    expertise: ["Real Estate", "Development", "Conveyancing", "Banking Law"],
    education: ["LL.B, Osmania University, Hyderabad, India", "Post Graduate Diploma, Kenya School of Law", "Certificate in Real Estate Finance"],
    email: "mursal@mrmadvocates.co.ke",
    linkedin: "#"
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

function TeamMemberModal({ member }: { member: typeof partners[0] }) {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="ghost" className="text-accent font-bold hover:text-accent/80 p-0 h-auto">View Full Profile</Button>} />
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-none rounded-3xl max-h-[90vh] overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 h-full">
          <div className="md:col-span-2 bg-secondary/30 relative aspect-square md:aspect-auto">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=secondary&color=accent&size=400`;
              }}
            />
          </div>
          <div className="md:col-span-3 p-8 bg-white">
            <DialogHeader>
              <span className="text-accent font-bold text-xs uppercase tracking-widest">{member.role}</span>
              <DialogTitle className="text-3xl font-black text-gray-900 mt-2">{member.name}</DialogTitle>
            </DialogHeader>
            
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                  <Briefcase className="w-4 h-4 text-accent" /> Professional Bio
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.fullBio}
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                  <GraduationCap className="w-4 h-4 text-accent" /> Education
                </h4>
                <ul className="space-y-2">
                  {member.education.map((edu, i) => (
                    <li key={i} className="text-gray-600 text-xs flex items-center gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full" /> {edu}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t flex items-center gap-4">
                <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href={member.linkedin} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <ConsultationModal 
                  trigger={
                    <Button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white rounded-xl">
                      Book Consultation
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-20 overflow-hidden">
      <Helmet>
        <title>About Us | MRM Advocates - Our Story and Legal Team</title>
        <meta name="description" content="Learn about Mohamed Rama Mursal LLP (MRM Advocates), our mission, vision, and the experienced legal professionals dedicated to serving you in Kenya." />
      </Helmet>

      {/* Hero */}
      <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Our Story</span>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mt-6 leading-tight">
                Built on Integrity. <br />
                <span className="text-accent italic font-serif">Driven by Excellence.</span>
              </h1>
              <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
                Mohamed Rama Mursal LLP was founded to redefine legal excellence in Kenya. Our partners combine decades of experience, unwavering integrity, and a deep understanding of the Kenyan legal landscape.
              </p>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden luxury-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Team Meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl shadow-2xl luxury-border hidden md:block">
                <p className="text-5xl font-black text-accent">10+</p>
                <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mt-2">Years of Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-0" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-up">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Our Purpose</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">Guided by Vision, <br />Anchored in Values</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
                We believe that transformative legal counsel stems from deep collaboration, strategic insight, and an unwavering commitment to excellence.
              </p>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-6 h-auto rounded-xl">
                <FileText className="mr-2 w-5 h-5" /> Download Firm Profile
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Target, title: "Our Mission", desc: "To deliver sophisticated, client-centric legal solutions that empower businesses." },
                { icon: Eye, title: "Our Vision", desc: "To be the trusted legal partner of choice for organizations in East Africa." },
                { icon: Handshake, title: "Client Commitment", desc: "We listen, collaborate, and tailor strategies that align with our clients’ vision." },
                { icon: Globe, title: "Global Perspective", desc: "We align local insight with global best practices to solve challenges." },
              ].map((item, i) => (
                <div 
                  key={i} 
                  data-aos="zoom-in" 
                  data-aos-delay={i * 100}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <item.icon className="w-10 h-10 text-accent mb-6" />
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Leadership</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-4">Meet Our Partners</h2>
            <p className="mt-6 text-lg text-gray-600">The experienced legal minds driving our firm's success and client satisfaction.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                whileHover={{ y: -10 }}
                className="bg-secondary/20 rounded-[2.5rem] overflow-hidden luxury-shadow group"
              >
                <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=secondary&color=accent&size=400`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-10">
                  <span className="text-accent font-bold text-xs uppercase tracking-widest">{partner.role}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{partner.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 line-clamp-3">{partner.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {partner.expertise.slice(0, 2).map((exp) => (
                        <span key={exp} className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-tighter border">
                          {exp}
                        </span>
                      ))}
                    </div>
                    <TeamMemberModal member={partner} />
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
          <div className="text-center mb-16" data-aos="fade-up">
             <h2 className="text-4xl font-black text-gray-900">Awards & Accolades</h2>
             <p className="mt-4 text-gray-600">Recognized for our commitment to legal excellence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Law Firm of the Year 2023", org: "Kenya Legal Awards", icon: Trophy },
              { title: "Excellence in Corporate Law", org: "East Africa Legal Summit", icon: Star },
              { title: "Best Litigation Practice", org: "African Law Awards", icon: Medal },
              { title: "Client Service Excellence", org: "Legal Services Board", icon: UserCheck },
            ].map((award, i) => (
              <div 
                key={i} 
                data-aos="zoom-in" 
                data-aos-delay={i * 100}
                className="p-10 bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent transition-colors">
                  <award.icon className="w-10 h-10 text-accent group-hover:text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{award.title}</h3>
                <p className="text-sm text-gray-500">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
