"use client";

import { ContactItem } from "@/types/portfolio";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, Calendar } from "lucide-react";

interface ContactSectionProps {
  contacts: ContactItem[];
}

// Hàm helper để map icon theo label
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
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-4 sm:gap-6 md:gap-8 rounded-3xl border border-zinc-200 bg-zinc-950 p-4 sm:p-6 md:p-10 text-zinc-50 shadow-xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-2 sm:space-y-3"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Contact me</h2>
        <p className="text-sm sm:text-base md:text-lg text-zinc-300">
          Ready to discuss products, technologies, and collaboration opportunities. You can choose the appropriate channel below.
        </p>
      </motion.div>
      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="group flex items-center justify-between rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900 px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-4 transition hover:border-zinc-500 hover:bg-zinc-800"
          >
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 flex-1">
              {/* Icon với animation */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-md sm:rounded-lg bg-zinc-800 text-zinc-400 transition group-hover:bg-zinc-700 group-hover:text-white shrink-0"
              >
                {getContactIcon(contact.label)}
              </motion.div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-zinc-400">{contact.label}</p>
                <p className="text-xs sm:text-sm md:text-base font-medium text-zinc-100 group-hover:text-white truncate sm:truncate-none">
                  {contact.value}
                </p>
              </div>
            </div>
            <motion.span
              whileHover={{ x: 5, y: -5 }}
              className="text-sm sm:text-base md:text-lg shrink-0 ml-1.5 sm:ml-2"
            >
              ↗
            </motion.span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

