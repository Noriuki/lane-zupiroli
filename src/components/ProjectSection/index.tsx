'use client';

import data from '@/projects.json';
import Image from 'next/image';

interface Project {
  name: string;
  description: string;
  url: string;
  thumbnail: string;
  labels: {
    name: string;
  }[];
}

export default function ProjectSection() {
  return (
    <section className="section-full">
      <h2 className="text-4xl text-purple-900 text-center font-bold md:text-6xl mb-8">Projetos</h2>
      <div className="w-full grid grid-cols-1 gap-x-20 gap-y-8 my-8 justify-items-center">
        {data.projects?.map((project: Project) => (
          <div className="flex flex-wrap w-[100%] h-[580px] md:h-[350px] rounded-md shadow-xl dark:bg-zinc-800">
            <div className="w-full h-3/6  md:w-2/5 md:h-full relative rounded-t-md">
              <Image src={project.thumbnail} alt="post-cover" quality={100} className="rounded-md" fill />
            </div>
            <div className="w-full h-3/6 md:w-3/5 md:h-full p-[15px] gap-y-[10px] flex flex-col justify-between">
              <div className="w-full flex-1 flex flex-col gap-y-[20px]">
                <h3 className="text-xl md:text-2xl text-center">{project.name}</h3>
                <p className="text-xs md:text-sm text-justify">{project.description || ''}</p>
              </div>
              <div className="flex w-full justify-between items-center py-2">
                <div className="flex gap-x-[5px]">
                  {project.labels.map((label) => (
                    <span className="text-xs bg-gray-300 dark:bg-zinc-700 dark:text-white rounded-full px-2 py-1 mr-1">
                      {label.name}
                    </span>
                  ))}
                </div>
                <a href={project.url} target="_blank" className="flex items-center">
                  <img src="/icons/app/link-open.png" alt="link-open" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
