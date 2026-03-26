import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Shield, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8"
        >
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Shield size={40} className="text-white" />
              <span className="font-display text-2xl font-bold tracking-tight">BILPAM SHIELD</span>
            </div>
            <p className="text-neutral-support italic">"Ensuring Your Building is Safe"</p>
            <p className="text-background-base/80 leading-relaxed">
              Premier security services provider based in Juba, South Sudan. We specialize in delivering comprehensive protection solutions.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white transition-colors hover:bg-white hover:text-primary"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4, type: "spring" }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-bold text-lg">
              <Shield size={16} className="text-accent-gold" /> Quick Links
            </h3>
            <ul className="flex flex-col gap-4">
              {["Home", "About Us", "Services", "Contact", "Careers", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="group flex items-center text-background-base transition-colors hover:text-white"
                  >
                    <span className="mr-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                      <ArrowRight size={14} />
                    </span>
                    <span className="-ml-4 transition-all duration-300 group-hover:ml-0">
                      {link}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 font-bold text-lg">Our Services</h3>
            <ul className="flex flex-col gap-4">
              {["Personnel Protection", "Asset Security", "Threat Assessment", "Executive Protection", "Surveillance Systems"].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group flex items-center text-background-base transition-colors hover:text-white"
                  >
                    <span className="mr-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                      <ArrowRight size={14} />
                    </span>
                    <span className="-ml-4 transition-all duration-300 group-hover:ml-0">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 font-bold text-lg">Get in Touch</h3>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-secondary" size={20} />
                <span className="text-white">Gudele Block 6, Near Diana Petrol Station, Juba – South Sudan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-secondary" size={20} />
                <a href="tel:+211927776151" className="text-white hover:underline">+211 927 776 151</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-secondary" size={20} />
                <a href="tel:+211912712240" className="text-white hover:underline">+211 912 712 240</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-secondary" size={20} />
                <a href="mailto:bilpamshield@gmail.com" className="text-white hover:underline">bilpamshield@gmail.com</a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-secondary pt-8 text-sm text-neutral-support md:flex-row">
          <p>© {new Date().getFullYear()} Bilpam Shield Security. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed with 🛡️ for your protection</p>
        </div>
      </div>
    </footer>
  );
}
