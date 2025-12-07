import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { HeroGradient } from "../../components/ui/hero-gradient";
import { Section } from "../../components/ui/custom-section";
import { Container } from "../../components/ui/custom-container";
import { Button } from "../../components/ui/button";
import { FAQ } from "../../components/landing/FAQ";
import { Leaf, Recycle, Users, Droplet, Zap } from "lucide-react";
import { ethicsTexts } from "../../constants/ethics";

const pillars = ethicsTexts.pillars.items.map((item, index) => {
  const icons = [Recycle, Droplet, Zap, Leaf];
  return { ...item, icon: icons[index] };
});

const kpis = ethicsTexts.kpis.items;

const initiatives = ethicsTexts.initiatives.items;

const faqs = ethicsTexts.faqs;

export function Sustainability() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background gradient effect
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.95],
    ["#FFF700", "#ffffff", "#ffffff"]
  );

  // Text color transition
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["#000000", "#000000"]
  );

  return (
    <div ref={containerRef} className="relative">
      {/* Background overlay with gradient */}
      <motion.div
        style={{ backgroundColor: bgColor }}
        className="fixed top-0 left-0 right-0 bottom-0 -z-10"
      />

      {/* Hero Section */}
      <HeroGradient
        subtitle={ethicsTexts.hero.subtitle}
        title={ethicsTexts.hero.title}
        description={ethicsTexts.hero.description}
      />

      {/* Main Content */}
      <Section className="relative bg-transparent pt-20 pb-32">
        <Container>
          {/* Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-32"
          >
            <motion.h2
              className="font-augenblick text-4xl md:text-[56px] leading-[1.1] mb-8"
              style={{ color: textColor }}
            >
              {ethicsTexts.commitment.title}
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl leading-relaxed opacity-70"
              style={{ color: textColor }}
            >
             {ethicsTexts.commitment.description}
            </motion.p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="mb-32">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-augenblick text-3xl md:text-[45px] mb-16 text-center"
              style={{ color: textColor }}
            >
              {ethicsTexts.pillars.title}
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {pillars.map((pil, idx) => {
                const Icon = pil.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative bg-white/80 backdrop-blur-sm p-10 md:p-12 rounded-[40px] border border-black/5 hover:border-black/10 transition-all overflow-hidden"
                  >
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFF700] to-[#5dd3c0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-black" />
                      </div>
                      <h4 className="font-augenblick text-2xl md:text-[28px] mb-4">
                        {pil.title}
                      </h4>
                      <p className="text-lg md:text-xl leading-relaxed opacity-70">
                        {pil.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* KPIs Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative bg-black text-white rounded-[60px] p-12 md:p-20 lg:p-24 mb-32 overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#FFF700]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#5dd3c0]/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative">
              <h3 className="font-augenblick text-3xl md:text-[45px] mb-6 text-center">
                {ethicsTexts.kpis.title}
              </h3>
              <p className="text-lg md:text-xl text-center opacity-80 mb-16 md:mb-20 max-w-4xl mx-auto leading-relaxed">
                {ethicsTexts.kpis.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
                {kpis.map((kpi, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="text-center"
                  >
                    <p className="font-augenblick text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-br from-[#FFF700] to-[#5dd3c0] bg-clip-text text-transparent">
                      {kpi.value}
                    </p>
                    <p className="text-xs md:text-sm lg:text-base opacity-90 leading-snug">
                      {kpi.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Initiatives */}
          <div className="mb-32">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-augenblick text-3xl md:text-[45px] mb-16 text-center"
              style={{ color: textColor }}
            >
              {ethicsTexts.initiatives.title}
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {initiatives.map((init, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="bg-white/80 backdrop-blur-sm border border-black/5 p-8 rounded-[30px] hover:border-black/10 hover:shadow-lg transition-all h-full"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF700] to-[#5dd3c0] mb-5" />
                  <h4 className="font-augenblick text-xl md:text-2xl mb-4">
                    {init.title}
                  </h4>
                  <p className="text-base md:text-lg leading-relaxed opacity-70">
                    {init.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative bg-gradient-to-br from-[#FFF700] via-[#FFE300] to-[#5dd3c0] rounded-[60px] p-12 md:p-20 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)]" />
            <div className="relative">
              <h3 className="font-augenblick text-3xl md:text-[45px] mb-6 text-black">
                {ethicsTexts.cta.title}
              </h3>
              <p className="text-lg md:text-xl text-black/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                {ethicsTexts.cta.description}
              </p>
              <Button className="bg-black text-white px-12 py-6 rounded-full text-lg hover:bg-black/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                {ethicsTexts.cta.buttonText}
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      <FAQ items={ethicsTexts.faqs} />
    </div>
  );
}