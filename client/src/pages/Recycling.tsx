import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Recycle, ShieldCheck, Phone, Car, Truck, Leaf, CheckCircle, Mail, Globe, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Recycling() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#04160a] via-[#0a2a1a] to-[#0a1f4d] z-0" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-600" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-5 py-2 rounded-full text-sm font-semibold mb-8"
          >
            <ShieldCheck className="w-4 h-4" /> Trusted Government Approved Automobile Scrappage Service
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-7xl text-white mb-4 leading-tight"
          >
            Prithvi Auto <span className="text-green-400">Recycling</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-xl mb-2"
          >
            by TrustCars.co.in
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg mt-6"
          >
            We make scrapping your vehicle simple, safe, and eco-responsible. Free pickup, instant processing, and complete paperwork — handled end to end.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
          >
            <a
              href="tel:+918595671156"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-green-500/30 hover:-translate-y-0.5 text-lg"
            >
              <Phone className="w-5 h-5" /> Call Now — Free Pickup
            </a>
            <Link href="/contact">
              <button className="flex items-center justify-center gap-2 border border-green-500/50 text-green-400 hover:bg-green-500/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg">
                Send Enquiry <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to scrap your vehicle legally, quickly, and without any stress.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Car,
                title: "Authorized Car Scrappage",
                desc: "Legally scrap your old petrol or diesel car through our government-registered scrappage process.",
                color: "text-green-400",
                bg: "bg-green-500/10",
                border: "border-green-500/20",
              },
              {
                icon: Truck,
                title: "RC Vehicle Disposal",
                desc: "Dispose of old, damaged, or non-running RC (registered) vehicles safely with full paperwork.",
                color: "text-emerald-400",
                bg: "bg-emerald-500/10",
                border: "border-emerald-500/20",
              },
              {
                icon: Recycle,
                title: "Eco-Friendly Recycling",
                desc: "All materials are recycled responsibly with zero illegal dumping — fully environmentally compliant.",
                color: "text-green-400",
                bg: "bg-green-500/10",
                border: "border-green-500/20",
              },
              {
                icon: Leaf,
                title: "Hassle-Free Process",
                desc: "We handle all the documentation, RTO formalities, and cancellation so you don't have to.",
                color: "text-emerald-400",
                bg: "bg-emerald-500/10",
                border: "border-emerald-500/20",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-2xl border ${service.border} ${service.bg} hover:bg-white/5 transition-all`}
              >
                <div className={`w-14 h-14 rounded-xl ${service.bg} border ${service.border} flex items-center justify-center mb-5`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Why Choose <span className="text-green-400">Prithvi Auto Recycling?</span>
              </h2>
              <div className="space-y-5">
                {[
                  "Government Approved & Certified Facility",
                  "Free Vehicle Pickup from Your Doorstep",
                  "Instant Cash Payment for Your Scrap Vehicle",
                  "Complete RTO De-registration Handled",
                  "Eco-Friendly, Zero Illegal Dumping",
                  "Quick & Transparent Process",
                  "Trusted by Hundreds of Vehicle Owners",
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                    <p className="text-gray-300">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/30 rounded-3xl p-10 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                <Recycle className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-3">Ready to Scrap?</h3>
              <p className="text-gray-400 mb-8">Call us now for a free pickup and instant quote. No paperwork headaches — we handle everything.</p>
              <a
                href="tel:+918595671156"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-green-500/25 hover:-translate-y-0.5 w-full text-lg mb-4"
              >
                <Phone className="w-5 h-5" /> +91 85956 71156
              </a>
              <p className="text-gray-500 text-sm">Mon–Sat, 9 AM – 7 PM</p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
