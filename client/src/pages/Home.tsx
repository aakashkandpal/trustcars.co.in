import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CarCard } from "@/components/CarCard";
import { useCars } from "@/hooks/use-cars";
import { useTestimonials } from "@/hooks/use-testimonials";
import { motion } from "framer-motion";
import { BadgeCheck, Banknote, Truck, ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";
import dealershipImage from "@assets/generated_images/real_indian_dealership_interior_with_two_premium_cars.png";
import { applyFeaturedOverrides, manualCollectionCars } from "@/lib/cars-config";

export default function Home() {
  const { data: cars, isLoading: carsLoading } = useCars();
  const { data: testimonials, isLoading: testimonialsLoading } = useTestimonials();

  // Always show 6 preview cards (fallbacks from manual cards if API returns fewer).
  const previewSeedCars = [
    ...(cars?.slice(0, 6) ?? []),
    ...manualCollectionCars.map((car, i) => ({ ...car, id: 9000 + i })),
  ].slice(0, 6);
  const featuredCars = applyFeaturedOverrides(previewSeedCars);
  const featuredTestimonials = testimonials?.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image - Dealership Garage */}
        <div className="absolute inset-0 z-0">
          <img 
            src={dealershipImage}
            alt="Premium Cars in Dealership" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a192f]/60 z-10" /> {/* Dark Blue Overlay at 60% opacity */}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight max-w-4xl mx-auto"
          >
            Find Your Perfect Ride with <br />
            <span className="text-[#FFD700]">TrustCars</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            We bring you certified, high-quality pre-owned cars at unbeatable prices. 
            Experience premium service and transparent deals.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/collection">
              <button className="px-8 py-4 bg-primary text-background font-bold text-lg rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1">
                View Collection
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 -mt-32">
            {[
              {
                icon: BadgeCheck,
                title: "Verified Listings",
                desc: "Every car passes a 150+ point quality check before listing."
              },
              {
                icon: Banknote,
                title: "Easy Financing",
                desc: "Low interest rates and instant loan approvals from top banks."
              },
              {
                icon: Truck,
                title: "Nationwide Delivery",
                desc: "Doorstep delivery available anywhere in the country."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/95 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories + Premium Sales */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
              Success Stories & Premium Sales
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Celebrating our vehicle sales and the lasting relationships we've built with our valued clients.
            </p>
            <div className="w-36 h-1 bg-primary mx-auto rounded-full mt-8" />
          </div>

          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-display font-bold text-white">Featured Collection</h3>
            <Link href="/collection" className="hidden sm:flex items-center gap-2 text-primary hover:text-white transition-colors font-medium text-lg">
              Full Collection <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {carsLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-[380px] rounded-2xl bg-white/5 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}

          <div className="mt-16">
            <h3 className="text-3xl font-display font-bold text-white mb-8">Client Experiences</h3>
            <div className="space-y-6">
              {testimonialsLoading ? (
                [1, 2, 3].map((i) => (
                  <div key={i} className="h-52 bg-white/5 rounded-3xl animate-pulse" />
                ))
              ) : (
                featuredTestimonials?.map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white/[0.07] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.1] transition-colors"
                  >
                    <div className="flex gap-1 mb-5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{t.content}"</p>
                    <div className="flex items-center gap-4">
                      {t.avatarUrl ? (
                        <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                          {t.name[0]}
                        </div>
                      )}
                      <div>
                        <h4 className="text-white font-bold text-2xl">{t.name}</h4>
                        <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          <div className="mt-10 sm:hidden">
            <Link href="/collection">
              <button className="px-6 py-3 border border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-background transition-colors w-full">
                Full Collection
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
