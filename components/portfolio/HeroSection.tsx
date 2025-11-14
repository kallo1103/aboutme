"use client";

import { HeroContent } from "@/types/portfolio";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { motion } from "motion/react";
import { RetroComputerViewer } from "@/components/3d/RetroComputerViewer";

interface HeroSectionProps {
  hero: HeroContent;
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-10 rounded-3xl border border-zinc-200 bg-white/80 p-10 shadow-lg backdrop-blur"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500"
          >
            {hero.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl"
          >
            Hi, I&apos;m <TypingText text={hero.title} />  
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl text-lg text-zinc-600"
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
    </motion.section>
  );
}

