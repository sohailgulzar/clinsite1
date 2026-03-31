import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight, Microscope, Dna, Stethoscope, HeartPulse } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-brand-500 to-accent-600" />
      
      <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full opacity-5 pointer-events-none overflow-hidden">
        <Dna className="text-accent-500 -mr-24 -mt-12 lg:-mr-48 lg:-mt-24 floating w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-accent-500 rounded-xl flex items-center justify-center shadow-lg shadow-accent-500/20 group-hover:scale-110 transition-transform">
                <Dna className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                Clin<span className="text-accent-500">Site</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              A leading Clinical Research Organization dedicated to accelerating medical breakthroughs through excellence in clinical trial management.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-accent-500 transition-all border border-slate-800"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-500 font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", path: "/about" },
                { name: "Solutions", path: "/solutions" },
                { name: "Therapeutic Focus", path: "/therapeutic-focus" },
                { name: "Contact Us", path: "/contact" },
                { name: "Alliance Site Network", path: "/solutions" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-500 font-bold mb-8">Our Services</h4>
            <ul className="space-y-4">
              {[
                "CRO Services",
                "SMO Services",
                "Functional Services Provider (FSP)",
                "Clinical Trial Monitoring",
                "Regulatory Approvals",
                "Quality Assurance"
              ].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-500 font-bold mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800">
                  <MapPin size={18} className="text-accent-500" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  4B XX, Khayaban-e-Iqbal Road, Street 20,<br />Sector XX DHA, Phase 3, Lahore, 54000 Pakistan
                </span>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800">
                  <Phone size={18} className="text-accent-500" />
                </div>
                <span className="text-slate-400 text-sm">+92 333 240 21 11</span>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800">
                  <Mail size={18} className="text-accent-500" />
                </div>
                <span className="text-slate-400 text-sm">info@clinsite.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} ClinSite. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="#" className="text-slate-500 hover:text-white text-xs">Privacy Policy</Link>
            <Link to="#" className="text-slate-500 hover:text-white text-xs">Terms of Service</Link>
            <Link to="#" className="text-slate-500 hover:text-white text-xs">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
