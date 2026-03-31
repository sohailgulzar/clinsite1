import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin, Globe, Send, CheckCircle2, Dna, HeartPulse, Stethoscope } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [activeLocation, setActiveLocation] = useState<'lahore' | 'singapore'>('lahore');

  const locations = {
    lahore: {
      title: "Head Office (Pakistan)",
      address: "4B XX, Khayaban-e-Iqbal Road, Street 20, Sector XX DHA, Phase 3, Lahore, 54000 Pakistan",
      phone: "+92 333 240 21 11",
      mapUrl: "https://maps.google.com/maps?q=4B%20XX%2C%20Khayaban-e-Iqbal%20Road%2C%20Street%2020%2C%20Sector%20XX%20DHA%2C%20Phase%203%2C%20Lahore%2C%2054000%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    singapore: {
      title: "Singapore Office",
      address: "6001 Beach Road, #19-10, Golden Mile Tower, Singapore 199589",
      phone: "+65 80146416",
      mapUrl: "https://maps.google.com/maps?q=6001%20Beach%20Road%2C%20%2319-10%2C%20Golden%20Mile%20Tower%2C%20Singapore%20199589&t=&z=15&ie=UTF8&iwloc=&output=embed"
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <span className="mono-label text-accent-500 mb-8 block">Contact ClinSite</span>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-12">
              Request a <br />
              <span className="text-accent-500 italic font-serif font-normal">Proposal</span>.
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed text-balance font-light">
              Submit your details and one of our experts will respond to you as soon as possible. ClinSite is committed to protecting your privacy.
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
                <Dna size={100} className="text-accent-500 opacity-20" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Form */}
          <div className="glass-card p-16 md:p-24 rounded-[40px] border-slate-200 shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-24"
              >
                <div className="w-24 h-24 bg-accent-50 text-accent-500 rounded-full flex items-center justify-center mx-auto mb-10 glow-accent">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-4xl font-bold mb-6">Message Sent!</h3>
                <p className="text-slate-600 mb-12 text-lg">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-accent-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2 mx-auto hover:gap-4 transition-all"
                >
                  Send Another Message <ArrowRight size={14} />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="mono-label text-[10px] text-slate-400">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white border border-slate-100 p-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all text-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="mono-label text-[10px] text-slate-400">Job Title</label>
                    <input
                      required
                      type="text"
                      placeholder="Clinical Research Associate"
                      className="w-full bg-white border border-slate-100 p-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all text-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="mono-label text-[10px] text-slate-400">Company Name</label>
                    <input
                      required
                      type="text"
                      placeholder="PharmaCorp"
                      className="w-full bg-white border border-slate-100 p-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all text-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="mono-label text-[10px] text-slate-400">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white border border-slate-100 p-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all text-lg"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="mono-label text-[10px] text-slate-400">Office Contact Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white border border-slate-100 p-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all text-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="mono-label text-[10px] text-slate-400">Country</label>
                    <input
                      required
                      type="text"
                      placeholder="United States"
                      className="w-full bg-white border border-slate-100 p-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="mono-label text-[10px] text-slate-400">Select Service</label>
                  <select className="w-full bg-white border border-slate-100 p-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all appearance-none text-lg">
                    <option>CRO SERVICES</option>
                    <option>SMO SERVICES</option>
                    <option>Functional Services Provider (FSP)</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="mono-label text-[10px] text-slate-400">Message / Project Summary</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white border border-slate-100 p-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all resize-none text-lg"
                  />
                </div>

                <div className="flex items-start gap-4">
                  <input type="checkbox" required className="mt-1.5 w-5 h-5 rounded border-slate-200 text-accent-500 focus:ring-accent-500" />
                  <p className="text-sm text-slate-500 leading-relaxed">
                    ClinSite is committed to protecting your privacy. By submitting this form, you confirm that you have read and agree to our privacy policy terms and conditions.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white p-8 rounded-2xl font-bold uppercase tracking-widest hover:bg-accent-500 transition-all duration-500 flex items-center justify-center gap-3 shadow-xl hover:shadow-accent-500/20 group"
                >
                  Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Offices.</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                ClinSite operates globally with strategic offices to serve our partners across different regions.
              </p>
            </div>

            <div className="space-y-12">
              {/* Head Office */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-accent-500">Head Office (Pakistan)</h3>
                <div className="space-y-6">
                  <div className="flex gap-8">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-accent-500" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-xl">Address</h4>
                      <p className="text-slate-500 leading-relaxed">
                        4B XX, Khayaban-e-Iqbal Road, Street 20,<br />Sector XX DHA, Phase 3, Lahore, 54000 Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-8">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                      <Phone size={24} className="text-accent-500" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-xl">Phone</h4>
                      <p className="text-slate-500 leading-relaxed">+92 333 240 21 11</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Singapore Office */}
              <div className="space-y-6 pt-8 border-t border-slate-100">
                <h3 className="text-2xl font-bold text-accent-500">Singapore Office</h3>
                <div className="space-y-6">
                  <div className="flex gap-8">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-accent-500" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-xl">Address</h4>
                      <p className="text-slate-500 leading-relaxed">
                        6001 Beach Road, #19-10,<br />Golden Mile Tower, Singapore 199589
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-8">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                      <Phone size={24} className="text-accent-500" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-xl">Phone</h4>
                      <p className="text-slate-500 leading-relaxed">+65 80146416</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-8 pt-8 border-t border-slate-100">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-accent-500" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl">Email Address</h4>
                  <p className="text-slate-500 leading-relaxed">info@clinsite.org</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-slate-200 flex gap-8">
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold text-slate-900">40+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Countries</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold text-slate-900">24/7</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Support</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Secure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[700px] bg-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <iframe 
            key={activeLocation}
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src={locations[activeLocation].mapUrl}
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }}
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
        
        <div className="absolute top-12 left-12 z-10 flex gap-4">
          <button 
            onClick={() => setActiveLocation('lahore')}
            className={`px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-xl ${activeLocation === 'lahore' ? 'bg-accent-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
          >
            Lahore Office
          </button>
          <button 
            onClick={() => setActiveLocation('singapore')}
            className={`px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-xl ${activeLocation === 'singapore' ? 'bg-accent-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
          >
            Singapore Office
          </button>
        </div>

        <div className="absolute bottom-12 left-12 z-10 glass-card p-10 rounded-[32px] shadow-2xl border-white/40 max-w-md">
          <motion.div
            key={activeLocation}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent-500 rounded-2xl flex items-center justify-center shadow-lg shadow-accent-500/20">
                <MapPin size={24} className="text-white" />
              </div>
              <h4 className="font-bold text-2xl tracking-tight">{locations[activeLocation].title}</h4>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={20} className="text-accent-500 shrink-0 mt-1" />
                <p className="text-slate-600 leading-relaxed font-medium">
                  {locations[activeLocation].address}
                </p>
              </div>
              <div className="flex gap-4 pt-4 border-t border-slate-100">
                <Phone size={20} className="text-accent-500 shrink-0" />
                <p className="text-slate-600 font-medium">{locations[activeLocation].phone}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
