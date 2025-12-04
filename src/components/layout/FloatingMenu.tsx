import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="flex flex-col items-end gap-4 mb-2"
          >
            <div className="bg-white shadow-lg rounded-full px-6 py-3 text-xl cursor-pointer hover:bg-gray-50">Tracking</div>
            <Link to="/contacto" className="bg-white shadow-lg rounded-full px-6 py-3 text-xl cursor-pointer hover:bg-gray-50 block">Contacto</Link>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-[68px] h-[68px] rounded-full bg-white/40 backdrop-blur border border-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
         <div className="flex flex-col gap-[6px] items-center justify-center relative">
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-black h-[2px] w-[30px] origin-center" 
            />
            <motion.div 
              animate={isOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-black h-[2px] w-[30px]" 
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-black h-[2px] w-[30px] origin-center" 
            />
         </div>
      </button>
    </div>
  );
}