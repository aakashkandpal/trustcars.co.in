import { useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

export default function SplashScreen() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocation("/home");
    }, 2500);

    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-[#0a1f4d] to-[#1a3a70]">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="font-display font-bold text-6xl md:text-8xl text-white tracking-tight">
            TrustCars.co.in
          </h1>
        </motion.div>

        <div className="w-72 h-1.5 bg-white/20 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFC107]"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}
