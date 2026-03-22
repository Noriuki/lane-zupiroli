"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeInOnView from "@/components/Common/FadeInOnView";
import Title from "@/components/Common/Title";
import Section from "@/components/Layout/Section";
import data from "./projects.json";

const ITEMS_PER_PAGE = 3;

export default function ProjectSection() {
  const projects = data.projects ?? [];
  const pageCount = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const [page, setPage] = useState(0);

  const go = (dir: -1 | 1) => {
    setPage((p) => Math.min(pageCount - 1, Math.max(0, p + dir)));
  };

  return (
    <Section id="projects">
      <FadeInOnView className="w-full flex flex-col items-center gap-8 md:gap-10">
        <Title title="Projetos" />
        <div className="w-full relative">
          {/* Viewport: uma “página” por vez — track com largura total = N × 100% do viewport */}
          <div className="w-full overflow-hidden rounded-2xl">
            <div
              className="flex shrink-0 transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{
                width: `${pageCount * 100}%`,
                transform: `translateX(-${(page * 100) / pageCount}%)`,
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
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={page === 0}
                aria-label="Projetos anteriores"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-3 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-600/50 bg-zinc-900/90 text-zinc-200 shadow-lg backdrop-blur-sm transition hover:border-accent/50 hover:bg-zinc-800 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={page === pageCount - 1}
                aria-label="Próximos projetos"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-3 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-600/50 bg-zinc-900/90 text-zinc-200 shadow-lg backdrop-blur-sm transition hover:border-accent/50 hover:bg-zinc-800 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Páginas do carrossel">
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === page}
                    aria-label={`Página ${i + 1}`}
                    onClick={() => setPage(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === page ? "w-8 bg-accent-light" : "w-2 bg-zinc-600 hover:bg-zinc-500"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </FadeInOnView>
    </Section>
  );
}
