import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, ArrowRight, Microscope, Dna } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About Us", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { 
    name: "Services", 
    path: "/services",
    dropdown: [
      { name: "Feasibility", path: "/services/feasibility" },
      { name: "Clinical Trial Monitoring", path: "/services/monitoring" },
      { name: "Regulatory Approvals", path: "/services/regulatory" },
      { name: "Quality Assurance", path: "/services/quality" },
      { name: "Recruitment", path: "/services/recruitment" },
      { name: "Compliance", path: "/services/compliance" },
    ]
  },
  { name: "Therapeutic Focus", path: "/therapeutic-focus" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg py-3 border-b border-slate-100" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group relative">
          <div className={`absolute inset-0 bg-white/40 blur-2xl rounded-full transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`} />
          <div className="flex items-center gap-2 relative z-10">
            <div className="w-10 h-10 bg-accent-500 rounded-xl flex items-center justify-center shadow-lg shadow-accent-500/20 group-hover:scale-110 transition-transform">
              <Dna className="text-white" size={24} />
            </div>
            <span className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Clin<span className="text-accent-500">Site</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div 
              key={link.path} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                  location.pathname === link.path ? "text-accent-500" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`} />}
              </Link>
              
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 mt-4 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 overflow-hidden"
                    >
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-3 text-sm font-semibold text-slate-600 hover:text-accent-500 hover:bg-slate-50 rounded-xl transition-all"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="bg-slate-900 text-white px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-accent-600 transition-all duration-300 shadow-xl hover:shadow-accent-500/20 flex items-center gap-2"
          >
            Request a Proposal
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-50 overflow-hidden md:hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-lg font-semibold uppercase tracking-wider ${
                      location.pathname === link.path ? "text-accent-500" : "text-slate-900"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="mt-4 ml-4 flex flex-col gap-4 border-l-2 border-slate-100 pl-4">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="text-slate-500 font-semibold"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="bg-accent-500 text-white px-5 py-4 rounded-2xl text-center text-sm font-semibold uppercase tracking-wider mt-4"
                onClick={() => setIsOpen(false)}
              >
                Request a Proposal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
