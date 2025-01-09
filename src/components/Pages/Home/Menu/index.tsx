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

  return (
    <menu className="hidden md:flex md:flex-col fixed p-4 left-0 top-1/2 transform -translate-y-1/2 gap-y-8">
      {options?.map((item) => (
        <a key={item.id} href={`#${item.anchor}`} aria-label={item.title}>
          {cloneElement(item.icon, {
            size: 32,
            color: activeSection === item.anchor ? "#581c87" : "white",
          })}
        </a>
      ))}
    </menu>
  );
}
