"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download } from "lucide-react";

export function HeaderSection() {
  // State quản lý menu mobile (mở/đóng)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  // Xử lý click vào link navigation (smooth scroll handled by CSS)
  const handleNavClick = () => {
    setIsMenuOpen(false); // Close mobile menu
  };

  // Danh sách các mục navigation
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  // State to track the hovered nav item for the sliding effect
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300`}
    >
      {/* Navigation Bar */}
      <div className="mx-auto flex w-fit max-w-[1440px] justify-center py-2 sm:py-3 md:py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm"
        >
          {/* Nội dung navigation */}
          <nav className="flex items-center gap-4 justify-between px-4 py-2 sm:gap-6 sm:px-6 sm:py-3 md:gap-8 md:px-8 md:py-4 lg:gap-10 lg:px-16">
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
            <div className="hidden items-center gap-2 md:flex md:gap-4 lg:gap-6" onMouseLeave={() => setHoveredPath(null)}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick()}
                  onMouseEnter={() => setHoveredPath(item.href)}
                  className="relative px-4 py-2 rounded-full transition-colors duration-300"
                >
                  {/* Liquid Glass Hover Effect - Sliding Background */}
                  {hoveredPath === item.href && (
                    <motion.div
                      layoutId="liquid-glass-bg"
                      className="absolute inset-0 rounded-full overflow-hidden"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    >
                      <div className="liquidGlass-effect"></div>
                      <div className="liquidGlass-tint"></div>
                      <div className="liquidGlass-shine"></div>
                    </motion.div>
                  )}
                  
                  <span className={`relative z-10 text-xs font-medium transition-colors duration-300 md:text-xl ${
                    hoveredPath === item.href ? "text-zinc-950" : "text-zinc-600"
                  }`}>
                    {item.label}
                  </span>
                </a>
              ))}
              <a
                href="/assets/myCV.pdf"
                download="Kallo_CV.pdf"
                className="ml-2 flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-zinc-700 md:gap-2 md:px-4 md:py-2 md:text-sm lg:px-5"
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
                    onClick={() => handleNavClick()}
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

