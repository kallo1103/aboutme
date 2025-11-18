"use client";

import { ExperienceItem } from "@/types/portfolio";
import { motion } from "motion/react";

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
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
      <div className="liquidGlass-text w-full space-y-6 sm:space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2 sm:gap-3"
      >
        <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl md:text-3xl">Career journey</h2>
        <p className="text-sm text-zinc-600 sm:text-base md:text-lg">
          I always seek challenging environments to expand my capabilities and share value with the team.
        </p>
      </motion.div>
      <div className="space-y-4 sm:space-y-6">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="rounded-xl border border-white/40 bg-white/30 p-4 shadow-sm backdrop-blur-sm sm:rounded-2xl sm:p-5 md:p-6"
          >
            <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-zinc-900 sm:text-lg md:text-xl">{experience.company}</h3>
                <p className="text-xs font-medium text-zinc-600 sm:text-sm">{experience.role}</p>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500 sm:text-xs sm:tracking-[0.2em]">
                {experience.time}
              </span>
            </header>
            <ul className="mt-3 space-y-1.5 text-xs leading-5 text-zinc-600 sm:mt-4 sm:space-y-2 sm:text-sm sm:leading-6">
              {experience.achievements.map((achievement, achievementIndex) => (
                <motion.li
                  key={achievement}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.15 + achievementIndex * 0.05 }}
                >
                  • {achievement}
                </motion.li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
      </div>
    </motion.section>
  );
}

