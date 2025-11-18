"use client";

import { AboutContent, SkillItem } from "@/types/portfolio";
import { motion } from "motion/react";
import {
  ReactIcon,
  JavaScriptIcon,
  HTMLIcon,
  CSSIcon,
  TailwindIcon,
  PythonIcon,
  GitIcon,
  PostgreSQLIcon,
  DockerIcon,
  DataIcon,
} from "@/components/ui/tech-stack";

interface AboutSectionProps {
  about: AboutContent;
  skills: SkillItem[];
}

// Mapping giữa tên skill và icon component tương ứng
const skillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  React: ReactIcon,
  JavaScript: JavaScriptIcon,
  HTML: HTMLIcon,
  CSS: CSSIcon,
  Tailwind: TailwindIcon,
  Python: PythonIcon,
  Git: GitIcon,
  PostgreSQL: PostgreSQLIcon,
  Docker: DockerIcon,
  Data: DataIcon,
};

// Mapping level sang % cho progress bar
const levelToPercent: Record<string, number> = {
  Expert: 95,
  Proficient: 85,
  Strong: 75,
  Knowledgeable: 65,
  Applying: 55,
};

export function AboutSection({ about, skills }: AboutSectionProps) {
  return (
    <motion.section
      id="about"
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
      <div className="liquidGlass-text grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-start lg:gap-12">
      <div className="space-y-4 sm:space-y-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-zinc-950 sm:text-2xl md:text-3xl"
        >
          {about.heading}
        </motion.h2>
        {about.paragraphs.map((paragraph, index) => (
          <motion.p
            key={paragraph}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7 md:text-lg md:leading-8"
          >
            {paragraph}
          </motion.p>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {about.focusAreas.map((focus, index) => (
            <motion.div
              key={focus.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-xl p-4 border border-white/40 bg-white/30 shadow-sm backdrop-blur-sm sm:rounded-2xl sm:p-5 md:p-6"
            >
              <h3 className="text-base font-semibold text-zinc-900 sm:text-lg">{focus.title}</h3>
              <p className="mt-1.5 text-xs text-zinc-600 sm:mt-2 sm:text-sm">{focus.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4 rounded-xl border border-white/40 bg-white/30 p-4 shadow-inner backdrop-blur-sm sm:space-y-5 sm:rounded-2xl sm:p-6 md:p-8 md:space-y-6"
      >
        <h3 className="text-base font-semibold text-zinc-900 sm:text-lg">My Tech Stack</h3>
        <ul className="space-y-3 sm:space-y-4 md:space-y-5">
          {skills.map((skill, index) => {
            const IconComponent = skillIconMap[skill.name];
            const percentage = levelToPercent[skill.level] || 50;
            return (
              <motion.li
                key={skill.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="space-y-2"
              >
                {/* Header: Icon + Name + Level */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    {IconComponent && <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />}
                    <span className="text-sm font-medium text-zinc-700 sm:text-base">{skill.name}</span>
                  </div>
                  <span className="text-xs text-zinc-500 sm:text-sm">{skill.level}</span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-zinc-200">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.05, ease: "easeOut" }}
                    className="h-full rounded-full bg-gray-500"
                  />
                </div>
              </motion.li>
            );
          })}
        </ul>
      </motion.aside>
      </div>
    </motion.section>
  );
}

