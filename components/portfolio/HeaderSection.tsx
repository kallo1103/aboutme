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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300`}
    >
      {/* Liquid Glass Navigation Bar */}
      <div className="mx-auto flex w-fit max-w-[1440px] justify-center py-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
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
          <nav className="liquidGlass-text flex items-center gap-10 justify-between px-6 py-4 sm:px-10 lg:px-16">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-4xl font-bold text-zinc-950 transition hover:text-zinc-700"
              style={{ fontFamily: "'Mea Culpa', cursive" }}
            >
              Kallo
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/assets/myCV.pdf"
                download="Kallo_CV.pdf"
                className="flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-1.5 p-2 md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-6 bg-zinc-950 transition-all duration-300 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-zinc-950 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-zinc-950 transition-all duration-300 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
              className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 border-t border-zinc-200 bg-white px-6 py-6 sm:px-10"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-base font-medium text-zinc-600 transition hover:text-zinc-950"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="/assets/cv.pdf"
                download="Kallo_CV.pdf"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-zinc-700"
              >
                <Download className="h-4 w-4" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SVG Filter Definition cho liquid glass effect */}
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
    </motion.header>
  );
}

