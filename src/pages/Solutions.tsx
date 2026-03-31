import { motion } from "motion/react";
import { ArrowRight, Microscope, ShieldCheck, Users, Globe, BarChart3, FlaskConical, Database, Dna, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "For Sponsors",
    desc: "End-to-end clinical trial management for pharmaceutical and biotech companies.",
    icon: Dna,
    features: [
      "Strategic Protocol Design",
      "Global Site Selection & Feasibility",
      "Regulatory & Ethics Submissions",
      "Risk-Based Monitoring & Oversight",
      "Data Management & Biostatistics",
    ],
    color: "text-accent-500",
    bg: "bg-accent-50",
  },
  {
    title: "For Sites",
    desc: "Empowering clinical research sites with resources and support for trial success.",
    icon: Dna,
    features: [
      "Access to Global Clinical Trials",
      "Comprehensive Site Training",
      "Patient Recruitment Support",
      "Quality Assurance & GCP Compliance",
      "Administrative & Financial Support",
    ],
    color: "text-brand-500",
    bg: "bg-brand-50",
  },
  {
    title: "For Participants",
    desc: "Connecting patients with life-changing clinical research opportunities.",
    icon: Dna,
    features: [
      "Access to Innovative Treatments",
      "Expert Medical Oversight",
      "Patient-Centric Trial Design",
      "Secure Health Data Management",
      "Contribution to Medical Progress",
    ],
    color: "text-accent-600",
    bg: "bg-accent-50",
  },
];

export default function Solutions() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-5 pointer-events-none overflow-hidden">
          <Dna className="text-accent-500 -mr-32 -mt-24 lg:-mr-96 lg:-mt-48 floating w-[400px] h-[400px] lg:w-[800px] lg:h-[800px]" />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mono-label text-accent-500 mb-8 block">Our Solutions</span>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-12">
              Solutions for <br />
              <span className="text-accent-500 italic font-serif font-normal">Sponsor, Site,</span> Participant.
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed text-balance font-light">
              ClinSite provides a comprehensive suite of solutions designed to address the unique needs of sponsors, sites, and patients in the clinical research ecosystem.
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
                <Activity size={100} className="text-accent-500 opacity-20" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-16 rounded-[40px] flex flex-col h-full group hover:shadow-accent-500/10 transition-all duration-500"
            >
              <div className={`w-20 h-20 ${sol.bg} ${sol.color} rounded-3xl flex items-center justify-center mb-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 glow-accent`}>
                <sol.icon size={36} />
              </div>
              <h3 className="text-4xl font-bold mb-8 group-hover:text-accent-500 transition-colors duration-300">{sol.title}</h3>
              <p className="text-slate-600 mb-12 text-lg leading-relaxed">{sol.desc}</p>
              
              <ul className="space-y-5 mb-16 flex-grow">
                {sol.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-4 text-slate-500 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className="bg-slate-900 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-accent-500 transition-all duration-500 flex items-center justify-center gap-3 group/btn"
              >
                Learn More <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="bg-slate-50 py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <span className="mono-label text-accent-500">Proven Results</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">Delivering Success Across <br />Therapeutic Areas.</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              From oncology to rare diseases, our solutions have consistently delivered high-quality data and successful trial outcomes for our global partners.
            </p>
            <div className="flex gap-6 pt-8">
              <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 flex-1">
                <div className="text-3xl font-bold text-accent-500 mb-2">30%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Timeline Reduction</div>
              </div>
              <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 flex-1">
                <div className="text-3xl font-bold text-accent-500 mb-2">95%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Site Retention</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-accent-500/10 blur-3xl rounded-full" />
            <div className="relative z-10 w-full aspect-video bg-slate-100 rounded-3xl flex items-center justify-center">
              <BarChart3 size={100} className="text-accent-500 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">Ready to Optimize Your <br />Clinical Trial?</h2>
          <Link
            to="/contact"
            className="inline-flex bg-accent-500 text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-accent-600 transition-all shadow-2xl shadow-accent-500/30 gap-3"
          >
            Get a Custom Solution <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
