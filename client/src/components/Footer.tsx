import { Facebook, Instagram, Twitter, MapPin, Mail, Phone, Car } from "lucide-react";
import { contactInfo } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-background">
                <Car className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Trust<span className="text-primary">Cars</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We bring you certified, high-quality pre-owned cars at unbeatable prices. Experience the thrill of driving without the premium price tag.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Collection', 'About Us', 'Contact', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-white text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>{contactInfo.address.street}<br />{contactInfo.address.city}, {contactInfo.address.state}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>{contactInfo.phone[0]}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>{contactInfo.email[0]}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-bold text-white text-lg mb-6">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">Subscribe to our newsletter for the latest arrivals and exclusive offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary w-full"
              />
              <button className="bg-primary text-background px-4 py-2 rounded-lg font-semibold hover:bg-white transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 TrustCars.co.in. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
