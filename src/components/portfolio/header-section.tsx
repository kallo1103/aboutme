"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download } from "lucide-react";

export function HeaderSection() {
  // State quản lý menu mobile (mở/đóng)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  // Xử lý click vào link navigation (smooth scroll với offset để không bị header che)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80; // Chiều cao header khoảng 80px
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false); // Đóng menu mobile sau khi click
    }
  };

  // Danh sách các mục navigation
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300`}
    >
      {/* Liquid Glass Navigation Bar */}
      <div className="mx-auto flex w-fit max-w-[1440px] justify-center py-2 sm:py-3 md:py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="liquidGlass-wrapper rounded-full"
        >
          {/* Layer 1: Distortion effect (blur + SVG filter) */}
          <div className="liquidGlass-effect"></div>
          
          {/* Layer 2: Tint màu trắng bán trong suốt */}
          <div className="liquidGlass-tint"></div>
          
          {/* Layer 3: Shine effect (ánh sáng phản chiếu) */}
          <div className="liquidGlass-shine"></div>
          
          {/* Layer 4: Nội dung navigation */}
          <nav className="liquidGlass-text flex items-center gap-4 justify-between px-4 py-2 sm:gap-6 sm:px-6 sm:py-3 md:gap-8 md:px-8 md:py-4 lg:gap-10 lg:px-16">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-2xl font-bold text-zinc-950 transition hover:text-zinc-700 sm:text-3xl md:text-4xl"
              style={{ fontFamily: "'Mea Culpa', cursive" }}
            >
              Kallo
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-4 md:flex md:gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-xs font-medium text-zinc-600 transition hover:text-zinc-950 md:text-xl"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/assets/myCV.pdf"
                download="Kallo_CV.pdf"
                className="flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-zinc-700 md:gap-2 md:px-4 md:py-2 md:text-sm lg:px-5"
              >
                <Download className="h-3 w-3 md:h-4 md:w-4" />
                Download CV
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-1 p-1.5 md:hidden sm:gap-1.5 sm:p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-5 bg-zinc-950 transition-all duration-300 sm:w-6 ${
                  isMenuOpen ? "translate-y-1.5 rotate-45 sm:translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-zinc-950 transition-all duration-300 sm:w-6 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-zinc-950 transition-all duration-300 sm:w-6 ${
                  isMenuOpen ? "-translate-y-1.5 -rotate-45 sm:-translate-y-2" : ""
                }`}
              />
            </button>
          </nav>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-6 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="liquidGlass-wrapper mx-auto flex w-full rounded-lg flex-col gap-3 border-t border-white/20 px-4 py-4 sm:gap-4 sm:px-6 sm:py-6"
            >
              {/* Layer 1: Distortion effect (blur + SVG filter) */}
              <div className="liquidGlass-effect"></div>
              
              {/* Layer 2: Tint màu trắng bán trong suốt */}
              <div className="liquidGlass-tint"></div>
              
              {/* Layer 3: Shine effect (ánh sáng phản chiếu) */}
              <div className="liquidGlass-shine"></div>
              
              {/* Layer 4: Nội dung menu */}
              <div className="liquidGlass-text relative z-10 flex flex-col gap-3 sm:gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950 sm:text-base"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="/assets/myCV.pdf"
                  download="Kallo_CV.pdf"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  className="mt-1 flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-center text-xs font-semibold text-white transition hover:bg-zinc-700 sm:mt-2 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

