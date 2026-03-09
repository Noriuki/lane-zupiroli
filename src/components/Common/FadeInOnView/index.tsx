"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface IFadeInOnViewProps {
  children: ReactNode;
  className?: string;
}

export default function FadeInOnView({ children, className = "" }: IFadeInOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setHasAnimated(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} ${hasAnimated ? "animate-fade-in-up" : "opacity-0"}`}>
      {children}
    </div>
  );
}
