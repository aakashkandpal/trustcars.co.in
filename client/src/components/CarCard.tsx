import { Car } from "@shared/schema";
import { Gauge, Fuel, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % car.imageUrls.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + car.imageUrls.length) % car.imageUrls.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden group/image">
        <AnimatePresence mode="wait">
          {car.imageUrls && car.imageUrls.length > 0 ? (
            <motion.img
              key={currentImageIndex}
              src={car.imageUrls[currentImageIndex]}
              alt={`${car.make} ${car.model}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">No Image</span>
            </div>
          )}
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
        
        {/* Navigation Arrows */}
        {car.imageUrls && car.imageUrls.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover/image:opacity-100 transition-opacity">
            <button
              onClick={prevImage}
              className="p-1.5 rounded-full bg-black/50 text-white hover:bg-primary hover:text-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="p-1.5 rounded-full bg-black/50 text-white hover:bg-primary hover:text-background transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {car.isSold && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            Sold Out
          </div>
        )}
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-display font-bold text-white mb-1">
            {car.make} {car.model}
          </h3>
          <div className="text-primary font-bold text-lg">
            ₹ {car.price.toLocaleString('en-IN')}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-muted-foreground">
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{car.year}</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
            <Fuel className="w-4 h-4 text-primary" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
            <Gauge className="w-4 h-4 text-primary" />
            <span>{car.mileage.toLocaleString()} km</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
          {car.description}
        </p>
      </div>
    </motion.div>
  );
}
