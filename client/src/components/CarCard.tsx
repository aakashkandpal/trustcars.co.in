import { Car } from "@shared/schema";
import { Gauge, Fuel, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={car.imageUrl}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
        
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
        <div className="grid grid-cols-3 gap-2 mb-6 text-xs text-muted-foreground">
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

        <div className="mt-auto">
          <Link href={`/car/${car.id}`} className="w-full">
            <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-primary hover:text-background border border-white/10 hover:border-primary text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:translate-x-1">
              View Details
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
