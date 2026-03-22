"use client";

import FadeInOnView from "@/components/Common/FadeInOnView";
import Title from "@/components/Common/Title";
import Section from "@/components/Layout/Section";
import { useCallback, useEffect, useRef, useState } from "react";
import data from "./projects.json";

const ITEMS_PER_PAGE = 3;
const AUTOPLAY_MS = 5000;
const DRAG_THRESHOLD_PX = 48;

export default function ProjectSection() {
  const projects = data.projects ?? [];
  const pageCount = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const suppressClickRef = useRef(false);

  const goNext = useCallback(() => {
    setPage((p) => (p + 1) % pageCount);
  }, [pageCount]);

  const goPrev = useCallback(() => {
    setPage((p) => (p - 1 + pageCount) % pageCount);
  }, [pageCount]);

  useEffect(() => {
    if (pageCount <= 1 || paused) return;
    const id = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [pageCount, paused, goNext]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (pageCount <= 1) return;
    draggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX;
    setDragOffset(0);
    setPaused(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    setDragOffset(e.clientX - startXRef.current);
  };

  const endDrag = (clientX: number) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setIsDragging(false);
    const dx = clientX - startXRef.current;
    setDragOffset(0);

    if (Math.abs(dx) > DRAG_THRESHOLD_PX) {
      suppressClickRef.current = true;
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 400);
      if (dx > 0) goPrev();
      else goNext();
    }

    window.setTimeout(() => setPaused(false), 800);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (e.currentTarget.hasPointerCapture?.(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    endDrag(e.clientX);
  };

  const onPointerCancel = (e: React.PointerEvent) => {
    draggingRef.current = false;
    setIsDragging(false);
    setDragOffset(0);
    setPaused(false);
    if (e.currentTarget.hasPointerCapture?.(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const onLinkClick = (e: React.MouseEvent) => {
    if (suppressClickRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const basePercent = (page * 100) / pageCount;
  const transitionClass =
    isDragging || dragOffset !== 0 ? "" : "transition-transform duration-500 ease-out motion-reduce:transition-none";

  return (
    <Section id="projects">
      <FadeInOnView className="w-full flex flex-col items-center gap-8 md:gap-10">
        <Title title="Projetos" />
        <div className="w-full relative">
          <div
            className="w-full overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing select-none"
            style={{ touchAction: "none" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {
              if (!draggingRef.current) setPaused(false);
            }}
            role="region"
            aria-roledescription="carrossel"
            aria-label="Lista de projetos — arraste para mudar de página"
          >
            <div
              className={`flex shrink-0 ${transitionClass}`}
              style={{
                width: `${pageCount * 100}%`,
                transform: `translateX(calc(-${basePercent}% + ${dragOffset}px))`,
              }}
            >
              {Array.from({ length: pageCount }).map((_, pageIndex) => (
                <div key={pageIndex} className="shrink-0 box-border px-0.5" style={{ width: `${100 / pageCount}%` }}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {projects
                      .slice(pageIndex * ITEMS_PER_PAGE, pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
                      .map((project) => (
                        <a
                          key={project.id}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block"
                          onClickCapture={onLinkClick}
                          draggable={false}
                        >
                          <div className="h-full section-card rounded-2xl p-6 relative overflow-hidden flex flex-col min-h-[280px]">
                            <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-accent to-accent-light opacity-50 rounded-full group-hover:opacity-80 transition-opacity" />
                            <div className="pl-4">
                              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                                Projeto
                              </span>
                              <h3 className="text-xl md:text-2xl font-semibold text-zinc-100 mt-1 group-hover:text-white transition-colors">
                                {project.name}
                              </h3>
                            </div>
                            <p className="text-sm text-zinc-400 line-clamp-4 flex-1 mt-4 leading-relaxed pl-4">
                              {project?.description || ""}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4 pl-4">
                              {project.labels.map((label, key) => (
                                <span
                                  key={key}
                                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-zinc-700/60 text-zinc-300 border border-zinc-600/40"
                                >
                                  {label.name}
                                </span>
                              ))}
                            </div>
                            <p className="mt-4 pl-4 text-xs text-zinc-500 group-hover:text-accent-light/90 transition-colors">
                              Abrir link →
                            </p>
                          </div>
                        </a>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {pageCount > 1 && (
            <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Páginas do carrossel">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === page}
                  aria-label={`Página ${i + 1}`}
                  onClick={() => {
                    setPage(i);
                    setPaused(true);
                    window.setTimeout(() => setPaused(false), AUTOPLAY_MS);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === page ? "w-8 bg-accent-light" : "w-2 bg-zinc-600 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </FadeInOnView>
    </Section>
  );
}
