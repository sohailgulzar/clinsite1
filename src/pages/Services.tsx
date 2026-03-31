import { motion } from "motion/react";
import { ArrowRight, Microscope, ShieldCheck, Users, Globe, BarChart3, FlaskConical, Database, ClipboardCheck, Scale, Dna, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Feasibility",
    desc: "Comprehensive protocol feasibility and data-driven site selection to ensure trial success.",
    icon: Dna,
    color: "text-accent-500",
    bg: "bg-accent-50",
  },
  {
    title: "Clinical Trial Monitoring",
    desc: "Rigorous oversight and risk-based monitoring to maintain data integrity and patient safety.",
    icon: Dna,
    color: "text-brand-500",
    bg: "bg-brand-50",
  },
  {
    title: "Regulatory Approvals",
    desc: "Expert guidance through complex global regulatory landscapes for faster trial approvals.",
    icon: Dna,
    color: "text-accent-600",
    bg: "bg-accent-50",
  },
  {
    title: "Quality Assurance",
    desc: "Uncompromising commitment to GCP compliance and rigorous internal quality audits.",
    icon: Dna,
    color: "text-brand-600",
    bg: "bg-brand-50",
  },
  {
    title: "Recruitment",
    desc: "Innovative strategies to identify, recruit, and retain the right participants for your study.",
    icon: Dna,
    color: "text-accent-500",
    bg: "bg-accent-50",
  },
  {
    title: "Compliance",
    desc: "Ensuring every aspect of your trial meets the highest ethical and regulatory standards.",
    icon: Dna,
    color: "text-brand-500",
    bg: "bg-brand-50",
  },
];

export default function Services() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Dna size={800} className="text-accent-500 -mr-96 -mt-48 floating" />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mono-label text-accent-500 mb-8 block">Our Services</span>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-12">
              Excellence in Every <br />
              <span className="text-accent-500 italic font-serif font-normal">Clinical</span> Phase.
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed text-balance font-light">
              ClinSite offers a full spectrum of clinical research services, from early-phase feasibility to post-marketing surveillance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-8 bg-accent-500/10 blur-[100px] rounded-full floating" />
            <div className="relative z-10 p-4 bg-white rounded-[40px] shadow-2xl border border-slate-100">
              <div className="rounded-[32px] w-full aspect-video bg-slate-100 flex items-center justify-center">
                <Stethoscope size={100} className="text-accent-500 opacity-20" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-white border border-slate-100 rounded-[40px] hover:shadow-2xl transition-all duration-500 group cursor-default"
            >
              <div className={`w-16 h-16 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 glow-accent`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6 group-hover:text-accent-500 transition-colors duration-300">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-10 text-lg">{service.desc}</p>
              <Link
                to="/contact"
                className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-400 group-hover:text-accent-500 transition-colors duration-300"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-slate-950 text-white py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grid-bg brightness-0 invert" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-12">Therapeutic <br />Expertise.</h2>
            <div className="grid grid-cols-2 gap-8">
              {[
                "Oncology",
                "Cardiology",
                "Rare Diseases",
                "Neurology",
                "Infectious Diseases",
                "Endocrinology",
                "Immunology",
                "Dermatology"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-400">
                  <Dna size={14} className="text-accent-500" />
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="glass-card p-12 rounded-3xl border-white/10 bg-white/5">
              <h3 className="text-3xl font-bold mb-8">Global Reach, Local Impact.</h3>
              <p className="text-slate-400 leading-relaxed mb-10">
                Our services are delivered through a global network of experts who understand the nuances of local regulatory environments and site dynamics.
              </p>
              <div className="flex gap-12">
                <div>
                  <div className="text-4xl font-bold text-accent-500 mb-2">40+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Countries</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent-500 mb-2">1.2k+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Global Sites</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">Partner with ClinSite for <br />Your Next Trial.</h2>
          <Link
            to="/contact"
            className="inline-flex bg-accent-500 text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-accent-600 transition-all shadow-2xl shadow-accent-500/30 gap-3"
          >
            Request a Proposal <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
