"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Vector from "../../imports/Vector-101-2184";

export function PageTransition() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if we've already shown the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    
    if (hasSeenSplash) {
      setIsVisible(false);
    } else {
      // Mark as seen for next time
      sessionStorage.setItem("hasSeenSplash", "true");
    }
  }, []);

  // Lock body scroll while transitioning
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white mix-blend-screen">
      <motion.div
        className="relative w-16 h-16 md:w-24 md:h-24"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 200, opacity: 1 }}
        transition={{
          opacity: { 
            duration: 1.0, 
             
          },
          scale: { 
            duration: 4.5,
            ease: [0.22, 1, 0.36, 1], // Custom easing
            delay: 1.5 
          }
        }}
        onAnimationComplete={() => setIsVisible(false)}
      >
        <Vector />
      </motion.div>
    </div>
  );
}
