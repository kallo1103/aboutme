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
      className="space-y-8 rounded-3xl border border-zinc-200 bg-white/80 p-10 shadow-lg backdrop-blur"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-3"
      >
        <h2 className="text-3xl font-semibold text-zinc-950">Career journey</h2>
        <p className="text-lg text-zinc-600">
          I always seek challenging environments to expand my capabilities and share value with the team.
        </p>
      </motion.div>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm"
          >
            <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900">{experience.company}</h3>
                <p className="text-sm font-medium text-zinc-600">{experience.role}</p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {experience.time}
              </span>
            </header>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
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
    </motion.section>
  );
}

