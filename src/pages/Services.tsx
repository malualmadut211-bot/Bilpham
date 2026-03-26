import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Shield, Building2, Radar, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    id: "personnel-protection",
    icon: Shield,
    title: "Personnel Protection",
    description: "Our elite team provides discreet yet effective personal protection for executives, dignitaries, and high-profile individuals.",
    features: [
      { title: "Executive Protection", desc: "Dedicated security professionals for corporate leaders, providing 24/7 close protection during business activities, travel, and personal time." },
      { title: "VIP Escort Services", desc: "Professional escort services for dignitaries, celebrities, and high-profile visitors to Juba and South Sudan." },
      { title: "Close Protection Teams", desc: "Highly trained CPO (Close Protection Officer) teams skilled in threat detection, defensive driving, and emergency extraction." },
      { title: "Travel Security Coordination", desc: "Comprehensive travel security planning including route analysis, advance security surveys, and secure transportation arrangements." },
    ],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "asset-security",
    icon: Building2,
    title: "Asset Security",
    description: "Protect your most valuable assets with comprehensive facility and property security solutions.",
    features: [
      { title: "Facility Security", desc: "Armed and unarmed guards stationed at your commercial or residential property with strict access protocols." },
      { title: "Perimeter Protection", desc: "Comprehensive perimeter security including patrol routes, barrier management, and intrusion detection." },
      { title: "Surveillance Systems", desc: "State-of-the-art CCTV monitoring, remote surveillance, and real-time alert systems." },
      { title: "Access Control Management", desc: "Electronic access control, visitor management systems, and identification verification protocols." },
    ],
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2080&auto=format&fit=crop",
  },
  {
    id: "threat-assessment",
    icon: Radar,
    title: "Threat Assessment",
    description: "Proactive security through thorough threat analysis and risk assessment, with tailored mitigation strategies.",
    features: [
      { title: "Risk Analysis", desc: "Comprehensive evaluation of current and potential security threats specific to your location, industry, and operations." },
      { title: "Security Audits", desc: "Thorough inspection of existing security measures, identifying gaps and recommending improvements." },
      { title: "Vulnerability Assessments", desc: "Systematic review of physical, procedural, and personnel vulnerabilities." },
      { title: "Strategic Planning", desc: "Development of comprehensive security strategies, emergency response plans, and crisis management protocols." },
    ],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop",
  },
];

const processSteps = [
  { num: "1", title: "Consultation", desc: "We listen to your security needs and concerns." },
  { num: "2", title: "Assessment", desc: "Our experts evaluate your site and risks." },
  { num: "3", title: "Implementation", desc: "We deploy trained personnel and systems." },
  { num: "4", title: "Monitoring", desc: "Ongoing support and 24/7 protection." },
];

export function Services() {
  return (
    <div className="flex flex-col pt-[80px] lg:pt-[100px]">
      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2080&auto=format&fit=crop"
            alt="Our Services"
            className="h-full w-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 text-sm font-medium text-background-base">
              <Link to="/" className="hover:text-white">Home</Link> &gt; Services
            </div>
            <h1 className="font-display text-5xl font-bold text-white md:text-6xl">
              Our Security Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-background-base">
              Comprehensive security solutions tailored to your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="bg-background-base py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-32">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid gap-16 lg:grid-cols-2 lg:items-center ${
                  i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={i % 2 !== 0 ? "lg:col-start-2" : ""}
                >
                  <service.icon size={64} className="mb-8 text-primary" />
                  <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">{service.title}</h2>
                  <p className="mb-10 text-lg leading-relaxed text-text-dark/80">
                    {service.description}
                  </p>
                  <ul className="mb-10 space-y-6">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <CheckCircle2 size={24} className="mt-1 shrink-0 text-secondary" />
                        <div>
                          <h4 className="font-bold text-primary">{feature.title}</h4>
                          <p className="text-text-dark/70">{feature.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-secondary hover:shadow-lg"
                  >
                    Request {service.title}
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`relative ${i % 2 !== 0 ? "lg:col-start-1" : ""}`}
                >
                  <div className="absolute -bottom-6 -right-6 h-full w-full bg-secondary/20 rounded-3xl" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative z-10 aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-primary md:text-5xl">How We Work</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-dark/80">
              Our proven four-step process ensures comprehensive protection tailored to your specific requirements.
            </p>
          </div>

          <div className="relative grid gap-12 md:grid-cols-4">
            {/* Connecting Line */}
            <div className="absolute top-12 left-0 hidden h-1 w-full bg-background-base md:block">
              <motion.div
                className="h-full bg-secondary"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.3, duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-primary text-3xl font-bold text-white shadow-xl">
                  {step.num}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-primary">{step.title}</h3>
                <p className="text-text-dark/80">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-bold text-white">Secure Your Property Today</h2>
          <p className="mb-10 text-xl text-background-base">
            Get a Free Consultation. Our experts are ready to design a security plan tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-bold text-primary transition-all hover:scale-105 hover:shadow-xl"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
