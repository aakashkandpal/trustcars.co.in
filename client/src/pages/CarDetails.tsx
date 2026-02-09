import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";
import { useCar } from "@/hooks/use-cars";
import { useRoute } from "wouter";
import { Calendar, Fuel, Gauge, CheckCircle2, Cog, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function CarDetails() {
  const [, params] = useRoute("/car/:id");
  const id = parseInt(params?.id || "0");
  const { data: car, isLoading, error } = useCar(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Car Not Found</h2>
        <Link href="/collection" className="text-primary hover:underline">Back to Collection</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pt-24">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <Link href="/collection" className="inline-flex items-center gap-2 text-muted-foreground hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative aspect-video">
              {car.imageUrls && car.imageUrls.length > 0 ? (
                <img 
                  src={car.imageUrls[0]} 
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">No Image</span>
                </div>
              )}
               {car.isSold && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="bg-red-600 text-white px-8 py-3 rounded-full text-xl font-bold uppercase tracking-wider transform -rotate-12 border-4 border-white shadow-2xl">
                    Sold Out
                  </span>
                </div>
              )}
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-4xl font-display font-bold text-white mb-2">{car.make} {car.model}</h1>
                <div className="flex gap-4 text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {car.year}</span>
                  <span className="flex items-center gap-1"><Gauge className="w-4 h-4" /> {car.mileage.toLocaleString()} km</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-primary">
                ₹ {car.price.toLocaleString('en-IN')}
              </div>
            </div>

            <hr className="border-white/10" />

            {/* Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Make", value: car.make, icon: CarIcon },
                { label: "Model", value: car.model, icon: CheckCircle2 },
                { label: "Year", value: car.year, icon: Calendar },
                { label: "Fuel", value: car.fuelType, icon: Fuel },
                { label: "Transmission", value: car.transmission, icon: Cog },
                { label: "Mileage", value: `${car.mileage} km`, icon: Gauge },
              ].map((spec, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <spec.icon className="w-5 h-5 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{spec.label}</p>
                  <p className="font-semibold text-white">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-card/50 rounded-2xl p-8 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4">Vehicle Description</h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{car.description}</p>
            </div>
          </div>

          {/* Sidebar - Enquiry Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-card rounded-2xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Interested?</h3>
              <p className="text-muted-foreground mb-6">Fill out the form below and we'll schedule a test drive for you.</p>
              
              <EnquiryForm carId={car.id} />
              
              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-sm text-muted-foreground mb-2">Prefer to call?</p>
                <a href="tel:+919876543210" className="text-xl font-bold text-white hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Simple icon wrapper for the grid above if icon is missing
function CarIcon(props: any) {
  return <div {...props}><Cog /></div>
}
