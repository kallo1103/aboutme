"use client";

import { ProjectItem } from "@/types/portfolio";
import { motion } from "motion/react";

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <motion.section
      id="projects"
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
      <div className="liquidGlass-text space-y-6 sm:space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2 sm:gap-3"
      >
        <h2 className="text-xl font-semibold text-zinc-950 sm:text-2xl md:text-3xl">Featured projects</h2>
        <p className="text-sm text-zinc-600 sm:text-base md:text-lg">
          Each project is a real problem I&apos;ve worked on, focusing on business value and user experience.
        </p>
      </motion.div>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -8 }}
            className="flex h-full flex-col rounded-xl border border-white/40 bg-white/30 p-4 shadow-sm backdrop-blur-sm sm:rounded-2xl sm:p-5 md:p-6"
          >
            <div className="flex-1 space-y-2 sm:space-y-3">
              <h3 className="text-base font-semibold text-zinc-900 sm:text-lg md:text-xl">{project.title}</h3>
              <p className="text-xs leading-5 text-zinc-600 sm:text-sm sm:leading-6">{project.description}</p>
              <ul className="flex flex-wrap gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500 sm:gap-2 sm:text-xs sm:tracking-[0.2em]">
                {project.stack.map((tech, techIndex) => (
                  <motion.li
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                    className="rounded-full border border-white/50 bg-white/40 px-2 py-0.5 backdrop-blur-sm sm:px-3 sm:py-1"
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 transition hover:text-zinc-900 sm:mt-5 sm:text-sm md:mt-6"
            >
              View details →
            </motion.a>
          </motion.article>
        ))}
      </div>
      </div>
    </motion.section>
  );
}

