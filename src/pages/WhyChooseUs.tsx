import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Shield, Target, Clock, Settings, Cpu, FileCheck, Users, CheckCircle2 } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Highly Trained Personnel",
    desc: "All guards undergo rigorous training programs.",
    bullets: ["Defensive tactics, first aid, fire safety, customer service", "Regular refresher courses and evaluations"],
  },
  {
    icon: Clock,
    title: "24/7 Availability & Rapid Response",
    desc: "Round-the-clock security operations center.",
    bullets: ["Rapid deployment capability", "Emergency response coordination"],
  },
  {
    icon: Settings,
    title: "Customized Security Plans",
    desc: "No one-size-fits-all approach.",
    bullets: ["Tailored solutions based on thorough assessment", "Scalable services that grow with your needs"],
  },
  {
    icon: Cpu,
    title: "Advanced Technology Integration",
    desc: "Modern surveillance and monitoring systems.",
    bullets: ["GPS tracking and communication systems", "Digital reporting and incident management"],
  },
  {
    icon: FileCheck,
    title: "Licensed & Compliant",
    desc: "Fully licensed security company in South Sudan.",
    bullets: ["Compliance with all local regulations", "Insurance coverage for peace of mind"],
  },
  {
    icon: Users,
    title: "Client-Centered Approach",
    desc: "Dedicated account managers.",
    bullets: ["Regular security reviews and updates", "Transparent communication and reporting"],
  },
];

const stats = [
  { label: "Years of Service", value: 5, suffix: "+" },
  { label: "Trained Security Guards", value: 100, suffix: "+" },
  { label: "Satisfied Clients", value: 50, suffix: "+" },
  { label: "Properties Protected", value: 75, suffix: "+" },
  { label: "Successful Operations", value: 500, suffix: "+" },
  { label: "Hours of Coverage Monthly", value: 10000, suffix: "+" },
];

export function WhyChooseUs() {
  return (
    <div className="flex flex-col pt-[80px] lg:pt-[100px]">
      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop"
            alt="Why Choose Us"
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
              <Link to="/" className="hover:text-white">Home</Link> &gt; Why Choose Us
            </div>
            <h1 className="font-display text-5xl font-bold text-white md:text-6xl">
              Why Choose Bilpam Shield Security?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-background-base">
              Discover what sets us apart from the rest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="bg-background-base py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((diff, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative flex flex-col rounded-2xl bg-white p-10 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <diff.icon size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-primary">{diff.title}</h3>
                <p className="mb-6 text-text-dark/80">{diff.desc}</p>
                <ul className="mt-auto space-y-3">
                  {diff.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-text-dark/70">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-secondary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">By The Numbers</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-background-base">
              Our track record speaks for itself.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <span className="font-display text-4xl font-bold text-white md:text-5xl">
                  {stat.value}{stat.suffix}
                </span>
                <span className="mt-2 text-sm font-medium text-background-base md:text-base">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-bold text-primary">Experience the Bilpam Shield Difference</h2>
          <p className="mb-10 text-xl text-text-dark/80">
            Don't compromise on your safety. Choose the trusted security partner in South Sudan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-xl"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
