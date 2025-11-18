import { Suspense } from "react";
import dynamic from "next/dynamic";
import portfolioContent from "@/data/portfolio.json";
import { HeaderSection, HeroSection } from "@/components/portfolio";
import { PortfolioContent } from "@/types/portfolio";
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";

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

const content: PortfolioContent = portfolioContent;

export default function Home() {
  return (
    <AuroraBackground className="min-h-screen h-auto bg-black">
      {/* SVG Filter Definition for liquid glass effect */}
      <svg style={{ display: 'none' }}>
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          {/* Tạo nhiễu fractal để làm méo hình */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          
          {/* Điều chỉnh độ tương phản và màu sắc */}
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          
          {/* Làm mờ để tạo hiệu ứng mượt mà */}
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          
          {/* Thêm ánh sáng phản chiếu (specular lighting) */}
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          
          {/* Kết hợp các hiệu ứng */}
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          
          {/* Áp dụng displacement map để tạo hiệu ứng méo kính */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Nội dung trang */}
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
    </AuroraBackground>
  );
}
