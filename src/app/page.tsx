import { Suspense } from "react";
import dynamic from "next/dynamic";
import portfolioContent from "@/data/portfolio.json";
import { HeaderSection, HeroSection } from "@/components/portfolio";
import { PortfolioContent } from "@/types/portfolio";
import { BalatroBackground } from "@/components/ui/shadcn-io/balatro-background";

// Dynamic imports for non-critical sections with loading fallbacks
const AboutSection = dynamic(
  () => import("@/components/portfolio").then((mod) => ({ default: mod.AboutSection })),
  { loading: () => <div className="h-64 animate-pulse rounded-3xl bg-white/10" /> }
);

const ProjectsSection = dynamic(
  () => import("@/components/portfolio").then((mod) => ({ default: mod.ProjectsSection })),
  { loading: () => <div className="h-96 animate-pulse rounded-3xl bg-white/10" /> }
);

const ExperienceSection = dynamic(
  () => import("@/components/portfolio").then((mod) => ({ default: mod.ExperienceSection })),
  { loading: () => <div className="h-80 animate-pulse rounded-3xl bg-white/10" /> }
);

const ContactSection = dynamic(
  () => import("@/components/portfolio").then((mod) => ({ default: mod.ContactSection })),
  { loading: () => <div className="h-64 animate-pulse rounded-3xl bg-white/10" /> }
);

import { ClientScrollScene } from "@/components/3d/client-scroll-scene";

const content: PortfolioContent = portfolioContent;

export default function Home() {
  return (
    <BalatroBackground className="min-h-screen h-auto bg-black">
      {/* 3D Background Scene - scroll-interactive (temporarily disabled) */}
      {/* <ClientScrollScene /> */}

      {/* Page Content */}
      <div className="relative z-10 w-full">
        <Suspense fallback={<div className="h-20 bg-transparent" />}>
          <HeaderSection />
        </Suspense>
        <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-4 pb-12 pt-8 sm:gap-16 sm:px-6 sm:pb-16 sm:pt-12 lg:gap-24 lg:px-16 lg:pb-24 lg:pt-16">
          <Suspense fallback={<div className="h-96 animate-pulse rounded-3xl bg-white/10" />}>
            <HeroSection hero={content.hero} />
          </Suspense>
          <Suspense fallback={<div className="h-64 animate-pulse rounded-3xl bg-white/10" />}>
            <AboutSection about={content.about} skills={content.skills} />
          </Suspense>
          <Suspense fallback={<div className="h-96 animate-pulse rounded-3xl bg-white/10" />}>
            <ProjectsSection projects={content.projects} />
          </Suspense>
          <Suspense fallback={<div className="h-80 animate-pulse rounded-3xl bg-white/10" />}>
            <ExperienceSection experiences={content.experiences} />
          </Suspense>
          <Suspense fallback={<div className="h-64 animate-pulse rounded-3xl bg-white/10" />}>
            <ContactSection contacts={content.contacts} />
          </Suspense>
        </main>
      </div>
    </BalatroBackground>
  );
}
