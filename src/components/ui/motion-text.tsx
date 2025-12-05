import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, animate, MotionValue } from "motion/react";

export const ScrollRevealText = ({ text, className }: { text: string; className?: string }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.5"],
  });

  const words = text.split(" ");
  const totalChars = words.reduce((acc, word) => acc + word.length, 0);
  const step = 1 / (totalChars + 3);
  let charIndex = 0;

  return (
    <p ref={element} className={`${className} flex flex-wrap`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-[0.3em] whitespace-nowrap">
          {word.split("").map((char, charIdx) => {
            const start = charIndex * step;
            const end = (charIndex + 1) * step;
            charIndex++;
            return (
              <Char key={charIdx} range={[start, end]} progress={scrollYProgress}>
                {char}
              </Char>
            );
          })}
        </span>
      ))}
    </p>
  );
};

export const Char = ({ children, range, progress }: { children: string; range: [number, number]; progress: MotionValue<number> }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const step = range[1] - range[0];
  const colorEnd = range[1] + (step * 5);
  const color = useTransform(progress, 
    [range[0], range[1], colorEnd], 
    ["#000000", "#000000", "#000000"]
  );
  
  return (
    <span className="relative inline-block">
      <span className="absolute opacity-[0.2] font-augenblick">{children}</span>
      <motion.span style={{ opacity, color }}>{children}</motion.span>
    </span>
  );
};

export const AnimatedNumber = ({ value, className }: { value: string, className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-100px 0px" });
  
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''));
  const prefix = value.includes('+') ? '+' : '';
  const suffix = value.toUpperCase().includes('K') ? 'K' : '';

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericPart, {
        duration: 1.5,
        ease: "circOut",
        onUpdate: (latest) => {
          if (ref.current) {
            // Pad with 0 if the original value started with 0 and is less than 10
            // This logic is specific to preserve "01" format if input is "01"
            const isPadded = value.startsWith('0') && value.length > 1;
            const formatted = isPadded 
               ? Math.round(latest).toString().padStart(2, '0') 
               : Math.round(latest).toString();
            
            ref.current.textContent = `${prefix}${formatted}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, numericPart, prefix, suffix, value]);

  return (
    <span ref={inViewRef} className={className}>
      <motion.span 
        ref={ref}
        className="bg-clip-text text-transparent bg-[radial-gradient(circle_at_50%_50%,#59c1e6_0%,#090909_40%,#090909_100%)]"
        style={{ backgroundSize: "200% 200%" }}
        animate={{ backgroundPosition: ["50% 0%", "50% 100%", "50% 0%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        {value}
      </motion.span>
    </span>
  );
};

// Black-only version for specific use cases (no cyan transition)
const CharBlack = ({ children, range, progress }: { children: string; range: [number, number]; progress: MotionValue<number> }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const step = range[1] - range[0];
  const colorEnd = range[1] + (step * 5);
  const color = useTransform(progress, 
    [range[0], range[1], colorEnd], 
    ["#000000", "#000000", "#000000"]
  );
  
  return (
    <span className="relative inline-block">
      <span className="absolute opacity-[0.2] font-augenblick">{children}</span>
      <motion.span style={{ opacity, color }}>{children}</motion.span>
    </span>
  );
};

export const ScrollRevealTextBlack = ({ text, className }: { text: string; className?: string }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.5"],
  });

  const words = text.split(" ");
  const totalChars = words.reduce((acc, word) => acc + word.length, 0);
  const step = 1 / (totalChars + 3);
  let charIndex = 0;

  return (
    <p ref={element} className={`${className} flex flex-wrap`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-[0.3em] whitespace-nowrap">
          {word.split("").map((char, charIdx) => {
            const start = charIndex * step;
            const end = (charIndex + 1) * step;
            charIndex++;
            return (
              <CharBlack key={charIdx} range={[start, end]} progress={scrollYProgress}>
                {char}
              </CharBlack>
            );
          })}
        </span>
      ))}
    </p>
  );
};