"use client";

import Title from "@/components/Common/Title";
import Section from "@/components/Layout/Section";
import data from "./projects.json";

export default function ProjectSection() {
  return (
    <Section id="projects">
      <Title title="Projetos" />
      <div className="w-full grid md:grid-cols-2 gap-5 md:gap-6">
        {data.projects?.map((project) => (
          <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="h-full section-card rounded-2xl p-6 relative overflow-hidden flex flex-col">
              <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-accent to-accent-light opacity-50 rounded-full group-hover:opacity-80 transition-opacity" />
              <div className="pl-4">
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Projeto</span>
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
    </Section>
  );
}
