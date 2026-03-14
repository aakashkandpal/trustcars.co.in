import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Recycle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isRecyclingPage = location === "/recycling";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Collection", href: "/collection" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isRecyclingPage
          ? "bg-[#111a31]/98 backdrop-blur-md border-b border-white/5 py-5"
          : isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-white/5 py-3"
            : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-xl tracking-tight text-white">
              TrustCars.co.in
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isRecyclingPage
                    ? "hover:text-white"
                    : "hover:text-primary"
                } ${
                  location === link.href
                    ? isRecyclingPage
                      ? "text-white"
                      : "text-primary"
                    : "text-white/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end gap-4">
            <Link
              href="/recycling"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-300 active:scale-95 ${
                location === "/recycling"
                  ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-300 shadow-[0_0_24px_rgba(34,197,94,0.12)]"
                  : "border-emerald-500/35 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-400/50"
              }`}
            >
              <Recycle className="w-4 h-4" />
              <span>Scrap & Recycle</span>
            </Link>

            <a
              href="tel:+918595671156"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-white hover:text-background transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block text-lg font-medium py-2 ${
                    location === link.href ? "text-primary" : "text-white/80"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/recycling"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl border font-bold ${
                  location === "/recycling"
                    ? "border-emerald-400/60 bg-emerald-500/20 text-emerald-300"
                    : "border-emerald-500/35 bg-emerald-500/10 text-emerald-300"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Recycle className="w-4 h-4" />
                Scrap & Recycle
              </Link>
              <a
                href="tel:+918595671156"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
