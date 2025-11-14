import portfolioContent from "@/data/portfolio.json";
import {
  HeaderSection,
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
} from "@/components/portfolio";
import { PortfolioContent } from "@/types/portfolio";

const content: PortfolioContent = portfolioContent;

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Video Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/assets/bg-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay tối để đảm bảo text dễ đọc */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Nội dung trang - z-index cao hơn video */}
      <div className="relative z-10">
        <HeaderSection />
        <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-24 px-6 pb-24 pt-16 sm:px-10 lg:px-16">
          <HeroSection hero={content.hero} />
          <AboutSection about={content.about} skills={content.skills} />
          <ProjectsSection projects={content.projects} />
          <ExperienceSection experiences={content.experiences} />
          <ContactSection contacts={content.contacts} />
        </main>
      </div>
    </div>
  );
}
