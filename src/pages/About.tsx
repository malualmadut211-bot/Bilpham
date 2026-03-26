import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Shield, Target, Eye, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <div className="flex flex-col pt-[80px] lg:pt-[100px]">
      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2080&auto=format&fit=crop"
            alt="About Bilpam Shield"
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
              <Link to="/" className="hover:text-white">Home</Link> &gt; About Us
            </div>
            <h1 className="font-display text-5xl font-bold text-white md:text-6xl">
              About Bilpam Shield Security
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-background-base">
              Your trusted partner in comprehensive security solutions since our founding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">Our Story</h2>
              <div className="space-y-6 text-lg leading-relaxed text-text-dark/80">
                <p>
                  Founded in Juba, South Sudan, Bilpam Shield Security emerged from a critical need for professional, reliable, and highly trained security personnel in a rapidly developing region.
                </p>
                <p>
                  What started as a small team of dedicated security professionals has grown into a premier security firm trusted by businesses, NGOs, and high-profile individuals across the country. Our foundation is built on the principles of integrity, discipline, and an unwavering commitment to protecting what matters most to our clients.
                </p>
                <p>
                  Today, we employ over 100 trained guards and operate a 24/7 monitoring center, ensuring that our clients receive round-the-clock protection and immediate response capabilities.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-6 -top-6 h-full w-full border-4 border-secondary/20 rounded-2xl" />
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop"
                alt="Our History"
                className="relative z-10 aspect-video w-full rounded-2xl object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-background-base py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl bg-white p-10 shadow-lg"
            >
              <Target size={48} className="mb-6 text-primary" />
              <h3 className="mb-4 text-2xl font-bold text-primary">Our Mission</h3>
              <p className="text-text-dark/80">
                To provide unparalleled security services that protect lives, properties, and assets across South Sudan, setting the standard for professionalism and reliability in the security industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl bg-white p-10 shadow-lg"
            >
              <Eye size={48} className="mb-6 text-primary" />
              <h3 className="mb-4 text-2xl font-bold text-primary">Our Vision</h3>
              <p className="text-text-dark/80">
                To be the most trusted and respected security company in East Africa, known for our innovation, integrity, and commitment to client safety.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl bg-white p-10 shadow-lg"
            >
              <Shield size={48} className="mb-6 text-primary" />
              <h3 className="mb-4 text-2xl font-bold text-primary">Our Values</h3>
              <ul className="space-y-3">
                {["Integrity", "Professionalism", "Reliability", "Excellence", "Accountability"].map((value, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-dark/80">
                    <CheckCircle2 size={18} className="text-secondary" />
                    {value}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-bold text-white">Join Our Team</h2>
          <p className="mb-10 text-xl text-background-base">
            We are always looking for dedicated professionals to join our ranks. If you have what it takes to protect and serve, we want to hear from you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-bold text-primary transition-all hover:scale-105 hover:shadow-xl"
          >
            Contact HR Department
          </Link>
        </div>
      </section>
    </div>
  );
}
