"use client";

import { useRef } from "react";
import { ProjectItem } from "@/types/portfolio";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = sectionRef.current;
    if (!ctx) return;

    // Section heading
    gsap.fromTo(ctx.querySelector(".projects-header"), 
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ctx, start: "top 80%", once: true } }
    );

    // Project cards batch animation
    ScrollTrigger.batch(ctx.querySelectorAll(".project-card"), {
      onEnter: (elements) => {
        gsap.fromTo(elements, 
          { y: 60, autoAlpha: 0, scale: 0.92 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.7, stagger: 0.15, ease: "back.out(1.2)", overwrite: true }
        );
      },
      once: true,
      start: "top 85%",
    });

    // Tech tags scale in
    ctx.querySelectorAll(".project-card").forEach((card) => {
      gsap.fromTo(card.querySelectorAll(".tech-tag"), 
        { scale: 0, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.3, stagger: 0.05, ease: "back.out(2)", scrollTrigger: { trigger: card, start: "top 80%", once: true } }
      );
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="liquidGlass-wrapper relative overflow-visible rounded-2xl p-4 sm:rounded-3xl sm:p-6 md:p-8 lg:p-10"
    >
      <div className="liquidGlass-effect"></div>
      <div className="liquidGlass-tint"></div>
      <div className="liquidGlass-shine"></div>

      <div className="liquidGlass-text space-y-6 sm:space-y-8">
        <div className="projects-header flex flex-col gap-2 sm:gap-3">
          <h2 className="text-xl font-semibold font-heading text-zinc-950 sm:text-2xl md:text-3xl">
            Featured projects
          </h2>
          <p className="text-sm text-zinc-600 sm:text-base md:text-lg">
            Each project is a real problem I&apos;ve worked on, focusing on business value and user experience.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card flex h-full flex-col rounded-xl border border-white/40 bg-white/30 p-4 shadow-sm backdrop-blur-sm sm:rounded-2xl sm:p-5 md:p-6 transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-2 ${
                index === 2 ? "md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto lg:col-span-1 lg:w-full lg:mx-0" : ""
              }`}
            >
              <div className="flex-1 space-y-2 sm:space-y-3">
                <h3 className="text-base font-semibold text-zinc-900 sm:text-lg md:text-xl">{project.title}</h3>
                <p className="text-xs leading-5 text-zinc-600 sm:text-sm sm:leading-6">{project.description}</p>
                <ul className="flex flex-wrap gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500 sm:gap-2 sm:text-xs sm:tracking-[0.2em]">
                  {project.stack.map((tech) => (
                    <li key={tech} className="tech-tag rounded-full border border-white/50 bg-white/40 px-2 py-0.5 backdrop-blur-sm sm:px-3 sm:py-1">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 transition hover:text-zinc-900 hover:translate-x-1 sm:mt-5 sm:text-sm md:mt-6"
              >
                View details →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
