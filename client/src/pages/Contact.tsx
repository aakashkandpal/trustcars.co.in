import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col pt-24">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions about a car or need financing help? We're here to assist you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Call Us</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
                <p className="text-muted-foreground">+91 98765 43211</p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Email Us</h3>
                <p className="text-muted-foreground">sales@trustcars.co.in</p>
                <p className="text-muted-foreground">support@trustcars.co.in</p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Visit Us</h3>
                <p className="text-muted-foreground">123 Auto Plaza, Dealer Street</p>
                <p className="text-muted-foreground">Mumbai, Maharashtra 400001</p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Opening Hours</h3>
                <p className="text-muted-foreground">Mon - Sat: 10:00 AM - 8:00 PM</p>
                <p className="text-muted-foreground">Sun: 11:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div className="h-64 rounded-2xl overflow-hidden border border-white/10">
              {/* Placeholder for map - in real app, use Google Maps Embed */}
              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-muted-foreground">
                <MapPin className="w-8 h-8 mb-2 block mx-auto" />
                <span className="block text-center">Interactive Map View</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <EnquiryForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
