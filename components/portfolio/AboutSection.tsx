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
} from "@/components/ui/@tech-stack";

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
      className="grid gap-12 rounded-3xl border border-zinc-200 bg-white/80 p-10 shadow-lg backdrop-blur lg:grid-cols-[1.4fr,1fr] lg:items-start"
    >
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-zinc-950"
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
            className="text-lg leading-8 text-zinc-600"
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
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-zinc-900">{focus.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{focus.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-inner"
      >
        <h3 className="text-lg font-semibold text-zinc-900">My Tech Stack</h3>
        <ul className="space-y-5">
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
                  <div className="flex items-center gap-3">
                    {IconComponent && <IconComponent className="h-5 w-5" />}
                    <span className="font-medium text-zinc-700">{skill.name}</span>
                  </div>
                  <span className="text-sm text-zinc-500">{skill.level}</span>
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
    </motion.section>
  );
}

