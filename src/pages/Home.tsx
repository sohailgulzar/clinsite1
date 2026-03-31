import { motion } from "motion/react";
import { ArrowRight, Microscope, ShieldCheck, Users, Globe, BarChart3, FlaskConical, Dna, Stethoscope, Syringe, Pill, Activity, Scale, ClipboardCheck } from "lucide-react";
import DNAAnimation from "../components/DNAAnimation";
import { Link } from "react-router-dom";

const stats = [
  { label: "Trials Managed", value: "250+", icon: Microscope },
  { label: "Global Sites", value: "1,200+", icon: Globe },
  { label: "Patient Reach", value: "50k+", icon: Users },
  { label: "Success Rate", value: "98%", icon: ShieldCheck },
];

const features = [
  {
    name: "Feasibility",
    description: "Data-driven site selection and protocol feasibility to ensure trial success from day one.",
    icon: Dna,
    color: "text-accent-500",
    bg: "bg-accent-50",
  },
  {
    name: "Clinical Trial Monitoring",
    description: "Rigorous oversight and risk-based monitoring to maintain data integrity and safety.",
    icon: Dna,
    color: "text-brand-500",
    bg: "bg-brand-50",
  },
  {
    name: "Regulatory Approvals",
    description: "Expert guidance through complex global regulatory landscapes for faster approvals.",
    icon: Dna,
    color: "text-accent-600",
    bg: "bg-accent-50",
  },
  {
    name: "Quality Assurance",
    description: "Uncompromising commitment to GCP compliance and rigorous internal quality audits.",
    icon: Dna,
    color: "text-brand-600",
    bg: "bg-brand-50",
  },
  {
    name: "Recruitment",
    description: "Innovative strategies to identify and retain the right participants for your study.",
    icon: Dna,
    color: "text-accent-500",
    bg: "bg-accent-50",
  },
  {
    name: "Compliance",
    description: "Ensuring every aspect of your trial meets the highest ethical and regulatory standards.",
    icon: Dna,
    color: "text-brand-500",
    bg: "bg-brand-50",
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="section-padding relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-5 pointer-events-none overflow-hidden">
          <Dna className="text-accent-500 -mr-32 -mt-24 lg:-mr-96 lg:-mt-48 floating w-[400px] h-[400px] lg:w-[800px] lg:h-[800px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mono-label text-accent-500 mb-8 block">Unmatched Expertise</span>
              <h1 className="text-7xl md:text-[120px] font-bold leading-[0.85] tracking-tighter mb-10 text-slate-900">
                Cost-Effective <br />
                <span className="text-accent-500 italic font-serif font-normal">Clinical</span> <br />
                Solutions.
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-xl leading-relaxed text-balance font-light">
                ClinSite is a global CRO providing end-to-end solutions from concept to market with quality data and compliance through our extensive network of clinical trial sites.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="bg-slate-900 text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-accent-500 transition-all duration-500 shadow-2xl hover:shadow-accent-500/40 flex items-center justify-center gap-3 group"
                >
                  Start a Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="bg-white/50 backdrop-blur-md text-slate-900 border border-slate-200 px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-500 flex items-center justify-center gap-3"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-8 bg-accent-500/10 blur-[100px] rounded-full floating" />
              <div className="relative z-10">
                <DNAAnimation />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-16 border-t border-slate-100 pt-16"
          >
            {stats.map((stat, i) => (
              <div key={i} className="space-y-3 group cursor-default">
                <div className="text-4xl font-bold text-slate-900 group-hover:text-accent-500 transition-colors duration-300">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding grid-bg">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <span className="mono-label text-accent-500 mb-6 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-8">
              Comprehensive Solutions for <br />
              <span className="text-slate-400 italic font-serif font-normal">Modern Research</span>
            </h2>
          </div>
          <Link to="/services" className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-accent-500 transition-colors mb-4">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>

        <div className="data-grid rounded-[40px] overflow-hidden shadow-2xl border-none">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="data-cell group border-slate-100/50"
            >
              <div className={`w-20 h-20 ${feature.bg} ${feature.color} rounded-3xl flex items-center justify-center mb-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 glow-accent`}>
                <feature.icon size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-6 group-hover:text-accent-500 transition-colors duration-300">{feature.name}</h3>
              <p className="text-slate-500 leading-relaxed mb-10 text-lg">
                {feature.description}
              </p>
              <Link to="/services" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                Explore Service <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Innovation Section */}
      <section className="bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>
        
        <div className="section-padding relative z-10 flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-accent-500/20 blur-[120px] rounded-full" />
              <div className="relative z-10 bg-slate-900 border border-white/10 rounded-3xl p-12 h-full flex flex-col justify-center">
                <FlaskConical size={64} className="text-accent-500 mb-12" />
                <h3 className="text-4xl font-bold mb-6 leading-tight">Concept to Market, <br />Driven by Quality Data.</h3>
                <p className="text-slate-400 leading-relaxed">
                  We leverage cutting-edge technology and deep therapeutic expertise to deliver cost-effective solutions while maintaining the highest standards of compliance.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 space-y-12">
            <span className="mono-label text-accent-500">Why ClinSite</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
              The Standard of <br />
              <span className="text-slate-500 italic font-serif font-normal">Excellence</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {[
                { title: "Global Reach", desc: "Operations in over 40 countries with local experts on the ground." },
                { title: "Speed to Market", desc: "Optimized processes that reduce trial timelines by up to 30%." },
                { title: "Quality First", desc: "Uncompromising commitment to data integrity and GCP compliance." },
                { title: "Patient Centric", desc: "Designing trials that prioritize the participant experience." },
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Dna size={18} className="text-accent-500" />
                    <h4 className="font-bold text-lg">{item.title}</h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="mono-label text-accent-500 mb-8 block">Ready to Begin?</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
            Let's Shape the Future of <br />
            <span className="text-slate-400 italic font-serif font-normal">Medicine Together.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex bg-accent-500 text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-accent-600 transition-all duration-300 shadow-2xl shadow-accent-500/30 gap-3 group"
          >
            Request a Proposal
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
