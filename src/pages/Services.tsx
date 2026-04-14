import { motion } from "motion/react";
import { Building2, Gavel, Home, Users, ShieldCheck, Heart, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ConsultationModal } from "../components/ConsultationModal";
import { Helmet } from "react-helmet-async";

const practiceAreas = [
  {
    id: "corporate",
    title: "Corporate & Commercial Law",
    icon: Building2,
    description: "Structuring Success for Ambitious Businesses",
    longDescription: "We advise startups, established enterprises, and multinational corporations on transactions, compliance, and governance structures that enable sustainable growth across East Africa.",
    features: [
      "Mergers, acquisitions, and joint ventures",
      "Capital raising and securities",
      "Corporate governance frameworks",
      "Contract drafting and negotiation",
    ]
  },
  {
    id: "litigation",
    title: "Litigation & Dispute Resolution",
    icon: Gavel,
    description: "Resolving Disputes with Precision and Strength",
    longDescription: "Our litigators develop pragmatic strategies for complex civil, commercial, and public law disputes. We are licensed and certified specialists in alternative dispute resolution, representing clients in courtrooms and premier arbitration centres.",
    features: [
      "Contract and shareholder disputes",
      "Banking and insolvency claims",
      "Licensed domestic & international arbitration",
      "Certified mediation and ADR services",
    ]
  },
  {
    id: "real-estate",
    title: "Real Estate & Conveyancing",
    icon: Home,
    description: "Trusted Counsel for Property Transactions",
    longDescription: "We partner with developers, financiers, and individuals to manage acquisitions, due diligence, financing, and disputes for all property asset classes.",
    features: [
      "Conveyancing and title registration",
      "Property development structuring",
      "Real estate financing",
      "Leasing and tenant advisory",
    ]
  },
  {
    id: "employment",
    title: "Employment & Labour Law",
    icon: Users,
    description: "Protecting Workplace Rights",
    longDescription: "Guiding employers and employees through regulatory compliance, policy design, and contentious workplace matters.",
    features: [
      "Contracts and HR policies",
      "Disciplinary and redundancy",
      "Collective bargaining",
      "Employment litigation",
    ]
  },
  {
    id: "criminal",
    title: "Criminal Defense",
    icon: ShieldCheck,
    description: "Aggressive & Discreet Representation",
    longDescription: "Full-spectrum defense representation, from investigations to trial and appeal, managed with confidentiality and urgency.",
    features: [
      "White-collar and economic crimes",
      "Anti-corruption offences",
      "Bail and plea negotiations",
      "Regulatory offences",
    ]
  },
  {
    id: "family",
    title: "Family & Private Client",
    icon: Heart,
    description: "Compassionate Personal Solutions",
    longDescription: "Supporting families and high-net-worth individuals with sensitivity and strategic foresight in personal legal matters.",
    features: [
      "Divorce and custody",
      "Succession planning",
      "Estate administration",
      "Wealth preservation",
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Legal Services | MRM Advocates - Corporate, Litigation, Real Estate</title>
        <meta name="description" content="Explore the wide range of legal services offered by MRM Advocates in Kenya. From Corporate Law to Criminal Defense, we provide strategic legal solutions for all your needs." />
      </Helmet>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent font-bold tracking-widest uppercase text-sm"
            >
              Our Services
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black text-gray-900 mt-6 leading-tight"
            >
              Strategic Legal Solutions <br />
              <span className="text-accent italic font-serif">For Every Stage of Growth</span>
            </motion.h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              Whether you are expanding operations, resolving disputes, or safeguarding personal interests, Mohamed Rama Mursal LLP provides the specialist counsel you need.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-32">
            {practiceAreas.map((area, index) => (
              <div 
                key={area.id}
                id={area.id}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-8">
                    <area.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{area.title}</h2>
                  <p className="text-accent font-serif italic text-xl mb-6">{area.description}</p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {area.longDescription}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                    {area.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <ConsultationModal 
                    trigger={
                      <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 h-14 rounded-xl">
                        Discuss Your Case
                      </Button>
                    }
                  />
                </div>
                <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden luxury-shadow bg-secondary/50 flex items-center justify-center">
                    <area.icon className="w-32 h-32 text-accent/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
            <h2 className="text-4xl font-bold">Our Engagement Process</h2>
            <p className="text-gray-400 mt-4">A clear path from consultation to resolution.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your objectives and challenges." },
              { step: "02", title: "Assessment", desc: "Our team analyses documents and precedents." },
              { step: "03", title: "Roadmap", desc: "We co-create a plan with clear milestones." },
              { step: "04", title: "Execution", desc: "Lawyers and specialists collaborate on your matter." },
              { step: "05", title: "Outcome", desc: "We secure the optimal resolution for you." },
            ].map((s, i) => (
              <div 
                key={s.step} 
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <span className="text-accent font-bold">{s.step}</span>
                <h3 className="text-xl font-bold mt-4 mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
