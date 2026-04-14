import { motion } from "motion/react";
import { ArrowRight, Building2, Gavel, Home, Users, ShieldCheck, Heart, Star, Phone, Mail, BookOpen, Tag, CheckCircle, TrendingUp, Award, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

import { Link } from "react-router-dom";
import { ConsultationModal } from "../components/ConsultationModal";
import { blogPosts } from "../data/blogPosts";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Cases Won", value: "120+" },
  { label: "Expert Lawyers", value: "6" },
];

const chartData = [
  { year: '2020', success: 85 },
  { year: '2021', success: 88 },
  { year: '2022', success: 92 },
  { year: '2023', success: 95 },
  { year: '2024', success: 98 },
];

const services = [
  {
    title: "Corporate & Commercial Law",
    description: "Expert guidance in business formation, mergers & acquisitions, and governance.",
    icon: Building2,
    href: "/services#corporate",
  },
  {
    title: "Litigation & Dispute Resolution",
    description: "Aggressive representation in civil litigation, arbitration, and dispute resolution.",
    icon: Gavel,
    href: "/services#litigation",
  },
  {
    title: "Real Estate & Property Law",
    description: "Complete property law services including conveyancing and land transactions.",
    icon: Home,
    href: "/services#real-estate",
  },
  {
    title: "Employment & Labor Law",
    description: "Comprehensive services for employers and employees, including contracts and disputes.",
    icon: Users,
    href: "/services#employment",
  },
  {
    title: "Criminal Defense",
    description: "Skilled representation for all types of criminal charges, from minor to serious.",
    icon: ShieldCheck,
    href: "/services#criminal",
  },
  {
    title: "Family Law",
    description: "Compassionate services including divorce, custody, and adoption matters.",
    icon: Heart,
    href: "/services#family",
  },
];

const testimonials = [
  {
    name: "Sarah Kiprotich",
    role: "CEO, TechCorp Kenya",
    text: "Mohamed Rama Mursal LLP provided exceptional legal representation during our company's merger. Their expertise and attention to detail ensured a smooth transaction.",
  },
  {
    name: "David Mwangi",
    role: "Property Developer",
    text: "The team handled my property dispute with professionalism and expertise. They kept me informed throughout the process and achieved an excellent outcome.",
  },
  {
    name: "Grace Wanjiku",
    role: "HR Director, Manufacturing Ltd",
    text: "Outstanding legal services! They helped us navigate complex employment law issues with clarity and confidence. Their strategic approach saved us significant costs.",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>MRM Advocates | Mohamed Rama Mursal LLP - Premier Law Firm in Kenya</title>
        <meta name="description" content="Mohamed Rama Mursal LLP (MRM Advocates) is a leading law firm in Nairobi, Kenya, specializing in Corporate Law, Litigation, Real Estate, and more. Expert legal solutions for your success." />
        <meta name="keywords" content="Law firm Kenya, MRM Advocates, Mohamed Rama Mursal LLP, Corporate Law Nairobi, Litigation Kenya, Real Estate Law Kenya, Employment Law Kenya" />
        <meta property="og:title" content="MRM Advocates | Mohamed Rama Mursal LLP - Premier Law Firm in Kenya" />
        <meta property="og:description" content="Expert legal representation and strategic advice in Nairobi, Kenya. Protecting your interests with integrity and excellence." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-secondary/40 via-background to-background overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -z-10 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] -z-10" />

        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 text-center lg:text-left z-10"
            >
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-8"
              >
                <Award className="w-4 h-4" />
                <span>Nairobi's Leading Legal Practice</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 leading-[1.1] sm:leading-[1.05]">
                Mastering <br className="hidden sm:block" />
                <span className="text-accent italic font-serif">Legal Mastery.</span> <br className="hidden sm:block" />
                For You.
              </h1>
              
              <p className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At Mohamed Rama Mursal LLP, we don't just practice law; we redefine it. Our elite team transforms complex legal hurdles into clear paths for your success and peace of mind.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <ConsultationModal 
                  trigger={
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl rounded-2xl shadow-2xl shadow-accent/30 group transition-all hover:scale-105">
                      Book Free Consultation
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  }
                />
                <Button
                  variant="outline"
                  size="lg"
                  className="px-12 py-8 text-xl rounded-2xl luxury-border hover:bg-secondary/50 transition-all"
                  nativeButton={false}
                  render={<Link to="/services">Our Expertise</Link>}
                />
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 flex flex-wrap justify-center lg:justify-start items-center gap-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-secondary flex items-center justify-center overflow-hidden">
                      <img src={`https://picsum.photos/seed/lawyer${i}/100/100`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-accent text-white flex items-center justify-center text-xs font-bold">
                    +500
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex text-yellow-500 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm font-bold text-gray-900">Trusted by 500+ Clients</p>
                </div>
              </div>
            </motion.div>

            {/* Right Visuals */}
            <div className="lg:col-span-6 relative mt-20 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
              >
                {/* Main Statue Image */}
                <div className="relative z-10 mx-auto max-w-[500px]">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse" />
                  <img 
                    src="/assets/lady_statue-removebg-preview.png" 
                    alt="Lady Justice" 
                    className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] animate-float"
                  />
                </div>

                {/* Floating Success Chart Card */}
                <motion.div 
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -right-4 top-10 md:right-0 md:top-20 z-20 w-64 md:w-80 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20 hidden sm:block"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Success Rate</p>
                      <h4 className="text-2xl font-black text-gray-900">98.2%</h4>
                    </div>
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div className="h-24 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#C5A059" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#C5A059" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="success" stroke="#C5A059" fillOpacity={1} fill="url(#colorSuccess)" strokeWidth={3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>

                {/* Floating Experience Card */}
                <motion.div 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -left-10 bottom-20 z-20 bg-gray-900 text-white p-6 rounded-3xl shadow-2xl border border-white/10 hidden md:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
                      <Scale className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-black">10+</p>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years of Excellence</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Icons */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 left-0 text-accent/20"><Gavel className="w-12 h-12" /></motion.div>
                  <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-1/4 right-0 text-accent/20"><ShieldCheck className="w-16 h-16" /></motion.div>
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 right-1/4 text-accent/10"><Building2 className="w-20 h-20" /></motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-white/50 backdrop-blur-md p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem] border border-white/50 shadow-xl">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`text-center ${i !== stats.length - 1 ? 'lg:border-r border-gray-200' : ''}`}>
                <p className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{stat.value}</p>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
            <div className="text-center flex flex-col items-center justify-center">
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-accent fill-current" />)}
              </div>
              <p className="text-sm font-bold text-gray-900">Top Rated Firm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
            <span className="text-accent font-bold tracking-widest uppercase text-sm">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Comprehensive Legal Solutions
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Tailored legal strategies across multiple practice areas to meet your unique needs and protect your interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group border-none bg-secondary/30">
                  <CardContent className="p-10">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-colors shadow-sm">
                      <service.icon className="w-8 h-8 text-accent group-hover:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <a href={service.href} className="inline-flex items-center font-bold text-accent group/link">
                      Learn More 
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div 
              data-aos="fade-right"
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden luxury-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Legal Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-accent p-10 rounded-3xl text-white hidden md:block">
                <p className="text-5xl font-bold">10+</p>
                <p className="text-sm uppercase tracking-widest font-medium mt-2">Years of Excellence</p>
              </div>
            </div>

            <div 
              data-aos="fade-left"
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm">About the Firm</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8">
                A Legacy of Trust and <br />
                <span className="text-accent italic font-serif">Legal Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                For over a decade, Mohamed Rama Mursal LLP has been at the forefront of legal excellence in Kenya. Our founding partners established the firm with a vision to provide world-class legal services that combine deep local knowledge with international standards.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  "Proven Track Record",
                  "Client-Centric Approach",
                  "Innovative Solutions",
                  "Transparent Communication"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 h-14 rounded-xl"
                nativeButton={false}
                render={<Link to="/about">Learn More About Us</Link>}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="mt-6 text-lg text-gray-600">
              Trusted by leading businesses and individuals across Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <Card className="h-full hover:shadow-xl transition-all border-gray-100">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-8 leading-relaxed">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-bold text-accent">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 lg:py-32 bg-secondary/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" data-aos="fade-up">
            <div className="max-w-2xl">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Legal Insights</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Latest from our Blog</h2>
              <p className="mt-6 text-lg text-gray-600">
                Expert analysis on the latest legal trends and regulatory changes in Kenya.
              </p>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl px-8 h-14 luxury-border group"
              nativeButton={false}
              render={<Link to="/blog">View All Posts <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, i) => (
              <div
                key={post.id}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <Card className="h-full group border-none bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider mb-4">
                      <Tag className="w-3 h-3" /> {post.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Link to={`/blog/${post.id}`} className="text-accent font-bold text-sm flex items-center gap-1 group/link">
                        Read <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-0" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Secure Your Future?</h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Contact Mohamed Rama Mursal LLP today for a consultation. Let us help you navigate your legal challenges with confidence and achieve the best possible outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <ConsultationModal 
                trigger={
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-10 h-16 text-lg rounded-xl">
                    Schedule Consultation
                  </Button>
                }
              />
              <div className="flex flex-col items-start gap-4">
                <a href="tel:+254702929018" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-lg font-medium">+254 702 929 018</span>
                </a>
                <a href="mailto:info@mrmadvocates.co.ke" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-lg font-medium">info@mrmadvocates.co.ke</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
