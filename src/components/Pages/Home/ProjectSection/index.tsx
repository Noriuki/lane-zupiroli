"use client";

import Title from "@/components/Common/Title";
import Section from "@/components/Layout/Section";
import { ExternalLinkIcon } from "lucide-react";
import data from "./projects.json";

export default function ProjectSection() {
  return (
    <Section id="projects">
      <Title title="Projetos" />
      <div className="w-full grid md:grid-cols-2 px-4 md:px-0 gap-6">
        {data.projects?.map((project) => (
          <div
            key={project.id}
            className="w-full flex max-h-[250px] flex-col align-center justify-between flex-wrap p-4 gap-y-4 border border-zinc-500 rounded-lg hover:shadow-purple"
          >
            <div className="w-full flex justify-between">
              <h3 className="text-xl md:text-2xl">{project.name}</h3>
              <a href={project.url} target="_blank" className="flex items-center">
                <ExternalLinkIcon size={24} />
              </a>
            </div>
            <p className="text-xs md:text-sm line-clamp-6 flex-1 text-justify">{project?.description || ""}</p>
            <div className="flex w-full max-h-max gap-x-2">
              {project.labels.map((label, key) => (
                <span
                  key={key}
                  className="flex align-center justify-center text-xs leading-6 bg-zinc-700 rounded-full h-8 px-2 py-1"
                >
                  {label.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
