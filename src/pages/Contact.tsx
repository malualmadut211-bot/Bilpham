import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <div className="flex flex-col pt-[80px] lg:pt-[100px]">
      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Us"
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
              <Link to="/" className="hover:text-white">Home</Link> &gt; Contact
            </div>
            <h1 className="font-display text-5xl font-bold text-white md:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-background-base">
              Reach out using any of the options below — we'll respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-primary py-8">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-6 md:flex-row"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">🚨 Need Immediate Security Assistance?</h2>
            <a
              href="tel:+211927776151"
              className="relative inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-primary transition-all hover:scale-105"
            >
              Call our 24/7 hotline: +211 927 776 151
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white"
                animate={{ scale: [1, 1.2], opacity: [0.8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="bg-background-base py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left Column - Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="group flex flex-col gap-4 rounded-2xl border-l-4 border-primary bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Our Location</h3>
                <p className="text-text-dark/80">Gudele Block 6, Near Diana Petrol Station, Juba – South Sudan</p>
              </div>

              <div className="group flex flex-col gap-4 rounded-2xl border-l-4 border-primary bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Phone Numbers</h3>
                <div className="flex flex-col gap-2">
                  <a href="tel:+211927776151" className="text-text-dark/80 hover:text-primary hover:underline">+211 927 776 151</a>
                  <a href="tel:+211912712240" className="text-text-dark/80 hover:text-primary hover:underline">+211 912 712 240</a>
                </div>
              </div>

              <div className="group flex flex-col gap-4 rounded-2xl border-l-4 border-primary bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Email Address</h3>
                <div className="flex flex-col gap-2">
                  <a href="mailto:bilpamshield@gmail.com" className="text-text-dark/80 hover:text-primary hover:underline">bilpamshield@gmail.com</a>
                  <a href="mailto:majakthon4@gmail.com" className="text-text-dark/80 hover:text-primary hover:underline">majakthon4@gmail.com</a>
                </div>
              </div>

              <div className="group flex flex-col gap-4 rounded-2xl border-l-4 border-primary bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Operating Hours</h3>
                <div className="flex flex-col gap-2 text-text-dark/80">
                  <p>Monday – Saturday: 7:00 AM – 7:00 PM</p>
                  <p>Sunday: Emergency services only</p>
                  <p className="mt-2 font-bold text-primary">24/7 Hotline Available</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-3xl bg-white p-8 shadow-xl lg:p-12">
                <h2 className="mb-2 text-3xl font-bold text-primary">Send Us a Message</h2>
                <p className="mb-8 text-text-dark/70">Fill in the form below and our team will get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-text-dark">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="John Doe"
                      className="rounded-lg border-2 border-neutral-support/50 px-4 py-3 text-base transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-text-dark">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="your@email.com"
                      className="rounded-lg border-2 border-neutral-support/50 px-4 py-3 text-base transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-text-dark">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="+211 XXX XXX XXX"
                      className="rounded-lg border-2 border-neutral-support/50 px-4 py-3 text-base transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-sm font-semibold text-text-dark">Service Interested In</label>
                    <select
                      id="service"
                      required
                      defaultValue=""
                      className="rounded-lg border-2 border-neutral-support/50 px-4 py-3 text-base transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="personnel">Personnel Protection</option>
                      <option value="asset">Asset Security</option>
                      <option value="threat">Threat Assessment</option>
                      <option value="custom">Custom Security Plan</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-text-dark">Message</label>
                    <textarea
                      id="message"
                      required
                      placeholder="Tell us about your security needs..."
                      className="min-h-[150px] resize-y rounded-lg border-2 border-neutral-support/50 px-4 py-3 text-base transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 font-bold text-white transition-all ${
                      isSuccess
                        ? "bg-green-500"
                        : "bg-primary hover:-translate-y-1 hover:bg-secondary hover:shadow-lg"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle2 size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[300px] w-full bg-neutral-support/20 lg:h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.112444589311!2d31.564999!3d4.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1712810000000001%3A0x0!2sJuba%2C%20South%20Sudan!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bilpam Shield Security Location"
        />
      </section>
    </div>
  );
}
