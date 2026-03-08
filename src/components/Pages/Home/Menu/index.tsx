"use client";
// Libs
import { cloneElement, useEffect, useState } from "react";
// Constants
import { options } from "./options";

export default function Menu() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.8 },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const accentColor = "#7c3aed";
  const inactiveColor = "#71717a";

  return (
    <nav
      className="hidden md:flex md:flex-col fixed left-6 top-1/2 -translate-y-1/2 gap-6 z-50"
      aria-label="Navegação principal"
    >
      {options?.map((item) => {
        const isActive = activeSection === item.anchor;
        return (
          <a
            key={item.id}
            href={`#${item.anchor}`}
            aria-label={item.title}
            className="group flex items-center gap-3 text-zinc-500 hover:text-zinc-100 transition-colors duration-200"
          >
            <span
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-zinc-700/40 bg-zinc-800/40 transition-all duration-200 group-hover:border-accent/50 group-hover:bg-zinc-800/60"
              style={{ color: isActive ? accentColor : inactiveColor }}
            >
              {cloneElement(item.icon, { size: 20 })}
            </span>
            <span className="text-sm font-medium opacity-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[120px] transition-all duration-300">
              {item.title}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
