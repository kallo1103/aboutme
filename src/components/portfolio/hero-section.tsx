"use client";

import { HeroContent } from "@/types/portfolio";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { motion } from "motion/react";
import { RetroComputerViewer } from "@/components/3d/retro-computer-viewer";

interface HeroSectionProps {
  hero: HeroContent;
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="liquidGlass-wrapper rounded-2xl p-4 sm:rounded-3xl sm:p-6 md:p-8 lg:p-10"
    >
      {/* Layer 1: Distortion effect */}
      <div className="liquidGlass-effect"></div>
      
      {/* Layer 2: Tint */}
      <div className="liquidGlass-tint"></div>
      
      {/* Layer 3: Shine effect */}
      <div className="liquidGlass-shine"></div>
      
      {/* Layer 4: Content */}
      <div className="liquidGlass-text w-full flex flex-col gap-6 sm:gap-8 lg:gap-10">
      <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3 sm:space-y-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 sm:text-sm sm:tracking-[0.35em]"
          >
            {hero.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-bold leading-tight text-zinc-950 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Hi, I&apos;m <TypingText text={hero.title} />  
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl text-sm text-zinc-600 sm:text-base md:text-lg"
          >
            {hero.subtitle}
          </motion.p>
        </motion.div>
     
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex w-full justify-center lg:w-auto lg:justify-start"
        >
          <RetroComputerViewer />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:gap-6"
      >
     
      </motion.div>
      </div>
    </motion.section>
  );
}

