"use client";

import { useRef } from "react";
import { ExperienceItem } from "@/types/portfolio";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = sectionRef.current;
    if (!ctx) return;

    // Section heading
    gsap.fromTo(ctx.querySelector(".exp-header"), 
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ctx, start: "top 80%", once: true } }
    );

    // Experience cards stagger
    gsap.fromTo(ctx.querySelectorAll(".exp-card"), 
      { y: 50, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ctx.querySelector(".exp-list"), start: "top 80%", once: true },
      }
    );

    // Achievement items within each card
    ctx.querySelectorAll(".exp-card").forEach((card) => {
      gsap.fromTo(card.querySelectorAll(".achievement-item"), 
        { x: -15, autoAlpha: 0 },
        {
          x: 0, autoAlpha: 1, duration: 0.35, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 80%", once: true },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="liquidGlass-wrapper relative overflow-visible rounded-2xl p-4 sm:rounded-3xl sm:p-6 md:p-8 lg:p-10"
    >
      <div className="liquidGlass-effect"></div>
      <div className="liquidGlass-tint"></div>
      <div className="liquidGlass-shine"></div>

      <div className="liquidGlass-text w-full space-y-6 sm:space-y-8">
        <div className="exp-header flex flex-col gap-2 sm:gap-3">
          <h2 className="text-xl font-semibold font-heading text-zinc-950 sm:text-2xl md:text-3xl">
            Career journey
          </h2>
          <p className="text-sm text-zinc-600 sm:text-base md:text-lg">
            I always seek challenging environments to expand my capabilities and share value with the team.
          </p>
        </div>

        <div className="exp-list space-y-4 sm:space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="exp-card rounded-xl border border-white/40 bg-white/30 p-4 shadow-sm backdrop-blur-sm sm:rounded-2xl sm:p-5 md:p-6 transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1"
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
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="achievement-item">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
