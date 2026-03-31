import { motion } from "motion/react";
import { ArrowRight, Dna, Activity, Heart, Brain, Microscope, FlaskConical, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const therapeuticAreas = [
  {
    title: "Oncology",
    desc: "Comprehensive expertise in solid tumors and hematological malignancies.",
    icon: Dna,
  },
  {
    title: "Cardiology",
    desc: "Specialized in cardiovascular diseases and medical device trials.",
    icon: Dna,
  },
  {
    title: "Neurology",
    desc: "Expertise in CNS disorders, including Alzheimer's and Parkinson's.",
    icon: Dna,
  },
  {
    title: "Infectious Diseases",
    desc: "Rapid response and global reach for vaccine and anti-infective trials.",
    icon: Dna,
  },
  {
    title: "Rare Diseases",
    desc: "Patient-centric approaches for orphan drug development.",
    icon: Dna,
  },
  {
    title: "Endocrinology",
    desc: "Experience in metabolic disorders and diabetes research.",
    icon: Dna,
  },
];

export default function TherapeuticFocus() {
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
            <span className="mono-label text-accent-500 mb-8 block">Therapeutic Focus</span>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-12">
              Deep Expertise <br />
              Across <span className="text-accent-500 italic font-serif font-normal">Complex</span> Areas.
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed text-balance font-light">
              ClinSite brings specialized knowledge and proven experience to a wide range of therapeutic areas, ensuring the highest quality clinical research.
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

      {/* Areas Grid */}
      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {therapeuticAreas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-white border border-slate-100 rounded-[40px] hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-accent-50 text-accent-500 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-accent-500 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <area.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-6 group-hover:text-accent-500 transition-colors duration-300">{area.title}</h4>
              <p className="text-slate-500 text-lg leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">Discuss Your <br />Therapeutic Needs.</h2>
          <Link
            to="/contact"
            className="inline-flex bg-accent-500 text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-accent-600 transition-all shadow-2xl shadow-accent-500/30 gap-3"
          >
            Contact Our Experts <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
