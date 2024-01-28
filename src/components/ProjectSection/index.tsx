'use client';

import { gql, useQuery } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const GET_PINNED_REPOS = gql`
  query GetPinnedRepos($username: String!) {
    user(login: $username) {
      pinnedItems(first: 6, types: REPOSITORY) {
        totalCount
        nodes {
          ... on Repository {
            name
            description
            url
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`;

interface Project {
  name: string;
  description: string;
  url: string;
  primaryLanguage: {
    name: string;
    color: string;
  };
}

export default function ProjectSection() {
  const { data } = useQuery(GET_PINNED_REPOS, {
    variables: { username: 'Noriuki' },
  });

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (data) {
      setProjects(data.user.pinnedItems.nodes);
    }
  }, [data]);

  return (
    <section className="section-full">
      <h2 className="text-4xl text-purple-900 text-center font-bold md:text-6xl mb-8">Projetos</h2>
      <div className="w-full grid grid-cols-1 gap-x-20 gap-y-8 my-8 justify-items-center lg:grid-cols-3">
        {projects?.map((project: Project) => (
          <div className="flex flex-wrap w-[100%] h-[200px] rounded-md shadow-xl dark:bg-zinc-800">
            <div
              className="rounded-l-lg flex flex-wrap flex-col justify-center items-center"
              style={{ width: '10%', height: '100%', backgroundColor: project.primaryLanguage.color }}
            >
              <Link href={project.url} target="__blank">
                <Image
                  src="/icons/app/link-open.png"
                  alt="post-cover"
                  width={20}
                  height={20}
                  quality={100}
                  className="m-auto"
                />
              </Link>
            </div>
            <div className="flex-1 flex flex-col p-4">
              <h3 className="text-lg md:text-xl text-center mb-4">{project.name}</h3>
              <p className="text-xs md:text-sm line-clamp-4 text-justify">{project.description || ''}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
