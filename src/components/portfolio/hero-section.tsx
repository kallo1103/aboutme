"use client";

import { useRef } from "react";
import { HeroContent } from "@/types/portfolio";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { RetroComputerViewer } from "@/components/3d/retro-computer-viewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface HeroSectionProps {
  hero: HeroContent;
}

export function HeroSection({ hero }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = sectionRef.current;
    if (!ctx) return;

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power3.out" },
    });

    tl.from(ctx.querySelector(".hero-tagline"), { y: 20, autoAlpha: 0 })
      .from(ctx.querySelector(".hero-title"), { y: 30, autoAlpha: 0 }, "<0.15")
      .from(ctx.querySelector(".hero-subtitle"), { y: 20, autoAlpha: 0 }, "<0.2")
      .from(ctx.querySelector(".hero-3d"), { x: 40, autoAlpha: 0, duration: 1 }, "<0.1")
      .from(ctx.querySelector(".hero-cta"), { y: 20, autoAlpha: 0 }, "<0.2");

    // Parallax on scroll
    gsap.to(ctx.querySelector(".hero-subtitle"), {
      y: -30,
      scrollTrigger: {
        trigger: ctx,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="liquidGlass-wrapper relative overflow-visible rounded-2xl p-4 sm:rounded-3xl sm:p-6 md:p-8 lg:p-10"
    >
      {/* Liquid Glass layers */}
      <div className="liquidGlass-effect"></div>
      <div className="liquidGlass-tint"></div>
      <div className="liquidGlass-shine"></div>

      {/* Content */}
      <div className="liquidGlass-text w-full flex flex-col gap-6 sm:gap-8 lg:gap-10">
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3 sm:space-y-4">
            <p className="hero-tagline text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 sm:text-sm sm:tracking-[0.35em]">
              {hero.tagline}
            </p>
            <h1 className="hero-title font-heading text-2xl font-bold leading-tight text-zinc-950 sm:text-3xl md:text-4xl lg:text-5xl">
              Hi, I&apos;m <TypingText text={hero.title} />
            </h1>
            <p className="hero-subtitle max-w-2xl text-sm text-zinc-600 sm:text-base md:text-lg leading-relaxed">
              {hero.subtitle}
            </p>
          </div>

          <div className="hero-3d flex w-full justify-center lg:w-auto lg:justify-start">
            <RetroComputerViewer />
          </div>
        </div>
        <div className="hero-cta flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:gap-6">
          {hero.interests && hero.interests.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {hero.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-white/40 bg-white/20 px-3 py-1 text-xs text-zinc-600 backdrop-blur-sm sm:text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
