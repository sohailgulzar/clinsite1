import { motion } from "motion/react";
import { ArrowRight, Microscope, ShieldCheck, Users, Globe, Target, Award, HeartPulse, Dna, Stethoscope, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { title: "Integrity", desc: "Unwavering commitment to ethical research and data accuracy.", icon: ShieldCheck },
  { title: "Innovation", desc: "Embracing new technologies to solve complex clinical challenges.", icon: Dna },
  { title: "Excellence", desc: "Striving for the highest standards in every trial we manage.", icon: Microscope },
  { title: "Patient-Centric", desc: "Prioritizing the safety and well-being of trial participants.", icon: HeartPulse },
];

export default function About() {
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
            <span className="mono-label text-accent-500 mb-8 block">About ClinSite</span>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-12">
              Pioneering the <br />
              <span className="text-accent-500 italic font-serif font-normal">Future</span> of Research.
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed text-balance font-light">
              ClinSite is a global Clinical Research Organization (CRO) dedicated to accelerating medical breakthroughs through excellence in clinical trial management.
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

      {/* Mission/Vision */}
      <section className="bg-slate-50 py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="glass-card p-12 rounded-3xl">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide sponsors with unparalleled clinical trial solutions that accelerate the delivery of safe and effective medical products to patients worldwide.
              </p>
            </div>
            <div className="glass-card p-12 rounded-3xl border-accent-500/20">
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be the most trusted global partner in clinical research, recognized for our integrity, innovation, and commitment to improving human health.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">A Global Network of <br />Expertise.</h2>
            <p className="text-slate-600 leading-relaxed">
              With a presence in over 40 countries, ClinSite combines global reach with local insight. Our team of seasoned clinical research professionals understands the nuances of local regulatory environments and site dynamics.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-accent-500 mb-2">15+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-500 mb-2">40+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Countries Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose ClinSite */}
      <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grid-bg brightness-0 invert" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="mono-label text-accent-500 mb-6 block">The ClinSite Advantage</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Why Choose ClinSite <br />Integrated Network?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Integrated Network", desc: "A seamless connection between sponsors, sites, and participants for efficient trial management." },
              { title: "Quality Data", desc: "Rigorous quality control and compliance measures to ensure the highest data integrity." },
              { title: "Cost-Effective", desc: "Optimized processes and a global network that deliver high-quality results within budget." },
            ].map((item, i) => (
              <div key={i} className="space-y-6 p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                  <Dna size={24} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="mono-label text-accent-500 mb-6 block">Core Values</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">The Principles That <br />Guide Us.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-white border border-slate-100 rounded-[40px] hover:shadow-2xl transition-all duration-500 group cursor-default"
            >
              <div className="w-16 h-16 bg-accent-50 text-accent-500 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-accent-500 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <value.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-6 group-hover:text-accent-500 transition-colors duration-300">{value.title}</h4>
              <p className="text-slate-500 text-lg leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team CTA */}
      <section className="bg-slate-900 text-white py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grid-bg brightness-0 invert" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Ready to Start Your <br />Next Project?</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our team of experts is ready to help you navigate the complexities of clinical research.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-accent-500 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-accent-600 transition-all flex items-center gap-3 whitespace-nowrap"
          >
            Request a Proposal <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
