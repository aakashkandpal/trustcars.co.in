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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-[#0a192f] to-[#0d1f3d]">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight">
            Trust<span className="text-primary">Cars</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">Premium Used Cars. Certified Quality.</p>
        </motion.div>

        <div className="w-64 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}
