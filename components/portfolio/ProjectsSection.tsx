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
      className="space-y-8 rounded-3xl border border-zinc-200 bg-white/80 p-10 shadow-lg backdrop-blur"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-3"
      >
        <h2 className="text-3xl font-semibold text-zinc-950">Featured projects</h2>
        <p className="text-lg text-zinc-600">
          Each project is a real problem I&apos;ve worked on, focusing on business value and user experience.
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -8 }}
            className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm"
          >
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-semibold text-zinc-900">{project.title}</h3>
              <p className="text-sm leading-6 text-zinc-600">{project.description}</p>
              <ul className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {project.stack.map((tech, techIndex) => (
                  <motion.li
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                    className="rounded-full border border-zinc-300 bg-white px-3 py-1"
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
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition hover:text-zinc-900"
            >
              View details →
            </motion.a>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

