import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, ArrowRight, Shield, Building2, Radar, CheckCircle2, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Years of Experience", value: 5, suffix: "+" },
  { label: "Trained Guards", value: 100, suffix: "+" },
  { label: "Clients Protected", value: 50, suffix: "+" },
];

const services = [
  {
    icon: Shield,
    title: "Personnel Protection",
    description: "Our elite team provides discreet yet effective personal protection for executives, dignitaries, and high-profile individuals.",
    features: ["Executive protection", "VIP escort services", "Close protection teams", "Travel security coordination"],
  },
  {
    icon: Building2,
    title: "Asset Security",
    description: "Protect your most valuable assets with comprehensive facility and property security solutions.",
    features: ["Facility security", "Perimeter protection", "Surveillance systems", "Access control management"],
  },
  {
    icon: Radar,
    title: "Threat Assessment",
    description: "Proactive security through thorough threat analysis and risk assessment, with tailored mitigation strategies.",
    features: ["Risk analysis", "Security audits", "Vulnerability assessments", "Strategic planning"],
  },
];

const features = [
  { icon: "🎯", title: "Trained Professionals", desc: "Our guards undergo rigorous training in threat detection, conflict resolution, and emergency response" },
  { icon: "⏰", title: "24/7 Availability", desc: "Round-the-clock security coverage ensuring your property is never unprotected" },
  { icon: "📋", title: "Customized Solutions", desc: "Every security plan is tailored to your specific needs, risks, and budget" },
  { icon: "✅", title: "Proven Track Record", desc: "Trusted by 50+ businesses and residences across Juba and South Sudan" },
];

const testimonials = [
  { quote: "Bilpam Shield Security has transformed how we think about safety. Their professionalism and dedication give us complete peace of mind.", author: "James Akol", role: "Property Manager" },
  { quote: "Reliable, trustworthy, and always on time. The guards are well-trained and courteous. Highly recommended.", author: "Sarah Nyandeng", role: "Business Owner" },
  { quote: "We've been with Bilpam Shield for over two years. Their threat assessment service helped us identify vulnerabilities we never knew existed.", author: "Michael Deng", role: "Hotel Director" },
];

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const incrementTime = (duration * 1000) / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
}

export function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-text-dark pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop"
            alt="Security Professionals"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 to-text-dark/70" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8 flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-sm border border-white/10"
          >
            <Shield size={16} className="text-accent-gold" />
            <span>South Sudan's Trusted Security Partner</span>
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl">
            {["Protect", "What", "Matters", "Most"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4 last:mr-0"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 max-w-2xl text-lg text-background-base md:text-xl"
          >
            Keep your building, tenants, and property safe with professional security services from Bilpam Shield Security.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
          >
            <Link
              to="/services"
              className="group flex items-center justify-center gap-2 rounded-lg bg-white px-9 py-4 font-bold text-primary transition-all hover:scale-[1.02] hover:bg-background-base hover:shadow-xl"
            >
              Our Services
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-9 py-4 font-bold text-white transition-all hover:bg-white/15"
            >
              Contact Us
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-white"
          >
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Licensed & Certified</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> 24/7 Protection</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Trusted by 50+ Clients</span>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-xs text-neutral-support">Scroll to explore</span>
          <ChevronDown size={20} className="text-neutral-support" />
        </motion.div>
      </section>

      {/* Trusted By Bar */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full bg-white py-10"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-8 text-center text-sm font-bold uppercase tracking-[2px] text-neutral-support">
            Trusted by businesses across South Sudan
          </p>
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 whitespace-nowrap"
            >
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center gap-2 text-neutral-support/50 transition-all hover:text-primary hover:opacity-100">
                  <Shield size={24} />
                  <span className="font-display font-bold">PARTNER {i + 1}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Preview */}
      <section className="bg-background-base py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="h-[2px] w-10 bg-secondary" />
                <span className="text-sm font-bold uppercase tracking-[3px] text-secondary">About Us</span>
              </div>
              <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">Your Safety Is Our Mission</h2>
              <div className="mb-10 space-y-4 text-lg leading-relaxed text-text-dark">
                <p>
                  Bilpam Shield Security is a premier security services provider based in Juba, South Sudan. We specialize in delivering comprehensive protection solutions for businesses, residences, and high-profile individuals.
                </p>
                <p>
                  Our trained security professionals bring expertise, discipline, and unwavering commitment to every assignment. From guarding commercial properties to providing executive protection, we are your trusted partner in safety.
                </p>
              </div>

              <div className="mb-10 flex flex-wrap gap-8 border-y border-neutral-support/30 py-8">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-display text-4xl font-bold text-primary">
                      <AnimatedCounter value={stat.value} />{stat.suffix}
                    </span>
                    <span className="mt-1 text-sm text-neutral-support">{stat.label}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="group inline-flex items-center gap-2 font-bold text-primary hover:underline">
                Learn more about us <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -bottom-6 -right-6 h-full w-full bg-primary" />
              <img
                src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2080&auto=format&fit=crop"
                alt="Security Team"
                className="relative z-10 aspect-[4/5] w-full object-cover shadow-2xl"
              />
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-12 z-20 flex items-center gap-3 rounded-xl bg-white p-4 shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="font-bold text-text-dark">Licensed &</p>
                  <p className="text-sm text-neutral-support">Certified</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[3px] text-white/50">Our Services</span>
            <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-bold text-white md:text-5xl">
              Comprehensive Security Solutions Tailored to Your Needs
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-background-base">
              From personal protection to advanced threat assessment, we deliver security you can count on.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="group relative flex flex-col rounded-2xl bg-white p-10 shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-secondary transition-all duration-400 group-hover:w-full rounded-t-2xl" />
                <service.icon size={48} className="mb-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                <h3 className="mb-4 text-2xl font-bold text-primary">{service.title}</h3>
                <p className="mb-8 text-text-dark/80">{service.description}</p>
                <ul className="mb-8 flex-1 space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-text-dark">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-secondary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="mt-auto inline-flex items-center gap-2 font-bold text-secondary transition-colors group-hover:text-primary">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-bold text-primary transition-colors hover:bg-background-base"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM0ODYyOUUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-50" />
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop"
                alt="Monitoring Center"
                className="relative z-10 aspect-square w-full rounded-3xl object-cover shadow-2xl [clip-path:polygon(0_0,100%_10%,100%_100%,10%_100%)]"
              />
            </motion.div>

            <div className="order-1 lg:order-2">
              <div className="mb-6 flex items-center gap-4">
                <span className="text-sm font-bold uppercase tracking-[3px] text-secondary">Why Choose Us</span>
                <div className="h-[2px] w-10 bg-secondary" />
              </div>
              <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">Security You Can Trust</h2>
              <p className="mb-12 text-lg text-text-dark/80">
                We don't just provide guards; we provide peace of mind. Our commitment to excellence, rigorous training, and client-first approach makes us the premier choice for security in South Sudan.
              </p>

              <div className="space-y-8">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="group flex gap-6 rounded-xl p-4 transition-colors hover:bg-background-base/50"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-2xl shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-6">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-primary">{feature.title}</h3>
                      <p className="text-text-dark/70">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background-base py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[3px] text-secondary">Testimonials</span>
            <h2 className="text-4xl font-bold text-primary md:text-5xl">What Our Clients Say</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-lg"
              >
                <div className="mb-6 text-6xl font-serif text-primary/20 leading-none">"</div>
                <p className="mb-8 flex-1 text-lg italic text-text-dark">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 border-t border-neutral-support/20 pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.author}</h4>
                    <p className="text-sm text-neutral-support">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1 text-accent-gold">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-primary py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-secondary blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-secondary blur-3xl" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold text-white md:text-5xl"
          >
            Ready to Secure Your Property?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-10 text-xl text-background-base"
          >
            Get in touch today for a free security consultation. Our team is standing by to protect what matters most to you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <a
              href="tel:+211927776151"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-bold text-primary transition-all hover:scale-105 hover:shadow-xl"
            >
              Call Now: +211 927 776 151
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
