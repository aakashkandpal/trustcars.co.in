import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CarCard } from "@/components/CarCard";
import { useCars } from "@/hooks/use-cars";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { applyFeaturedOverrides, manualCollectionCars } from "@/lib/cars-config";

export default function Collection() {
  const { data: cars } = useCars();
  const [searchTerm, setSearchTerm] = useState("");
  const previewSeedCars = [
    ...(cars?.slice(0, 6) ?? []),
    ...manualCollectionCars.map((car, i) => ({ ...car, id: 19000 + i })),
  ].slice(0, 6);
  const homePreviewCars = applyFeaturedOverrides(previewSeedCars);
  const allCollectionCars = [...homePreviewCars, ...manualCollectionCars];

  const filteredCars = allCollectionCars.filter(car =>
    car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col pt-24">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-display font-bold text-white mb-2">Full Collection</h1>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input 
                type="text"
                placeholder="Search make or model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            {/* Filter button - functionality could be added later */}
            <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-primary/50 transition-all">
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {filteredCars.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-white mb-2">No cars found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
