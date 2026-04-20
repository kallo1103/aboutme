"use client";

import { useRef } from "react";
import { ContactItem } from "@/types/portfolio";
import { Mail, Linkedin, Github, Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ContactSectionProps {
  contacts: ContactItem[];
}

const getContactIcon = (label: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    Email: <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />,
    LinkedIn: <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />,
    GitHub: <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />,
    Schedule: <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />,
  };
  return iconMap[label] || null;
};

export function ContactSection({ contacts }: ContactSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = sectionRef.current;
    if (!ctx) return;

    // Tiêu đề section
    gsap.fromTo(ctx.querySelector(".contact-header"), 
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ctx, start: "top 80%", once: true } }
    );

    // Contact cards slide up with stagger
    gsap.fromTo(ctx.querySelectorAll(".contact-card"), 
      { y: 50, autoAlpha: 0, scale: 0.9 },
      {
        y: 0, autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.4)",
        scrollTrigger: { trigger: ctx.querySelector(".contact-grid"), start: "top 85%", once: true },
      }
    );

    // Icon rotate on enter
    gsap.fromTo(ctx.querySelectorAll(".contact-icon"), 
      { rotate: -15, scale: 0.5, autoAlpha: 0 },
      {
        rotate: 0, scale: 1, autoAlpha: 1, duration: 0.5, stagger: 0.1, ease: "back.out(2)",
        scrollTrigger: { trigger: ctx.querySelector(".contact-grid"), start: "top 85%", once: true },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="liquidGlass-wrapper relative overflow-visible rounded-3xl p-4 sm:p-6 md:p-10"
    >
      <div className="liquidGlass-effect"></div>
      <div className="liquidGlass-tint"></div>
      <div className="liquidGlass-shine"></div>

      <div className="liquidGlass-text flex flex-col w-full gap-4 sm:gap-6 md:gap-8">
        <div className="contact-header space-y-2 sm:space-y-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-heading text-zinc-950">
            Contact me
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-600">
            Ready to discuss products, technologies, and collaboration opportunities.
          </p>
        </div>

        <div className="contact-grid grid gap-3 sm:gap-4 sm:grid-cols-2">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group flex h-full items-center justify-between rounded-xl sm:rounded-2xl border border-white/40 bg-white/30 px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/50 hover:scale-[1.05] hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 flex-1">
                <div className="contact-icon flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-md sm:rounded-lg bg-white/40 text-zinc-600 transition group-hover:bg-white/60 group-hover:text-zinc-900 shrink-0 backdrop-blur-sm">
                  {getContactIcon(contact.label)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-zinc-500">{contact.label}</p>
                  <p className="text-xs sm:text-sm md:text-base font-medium text-zinc-700 group-hover:text-zinc-900 truncate">
                    {contact.value}
                  </p>
                </div>
              </div>
              <span className="text-sm sm:text-base md:text-lg text-zinc-700 shrink-0 ml-1.5 sm:ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
