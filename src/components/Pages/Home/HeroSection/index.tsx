"use client";
// Components
import SocialLinks from "@/components/Common/SocialLinks";
import Section from "@/components/Layout/Section";
import Image from "next/image";
// Services
import { gql, useQuery } from "@apollo/client";

export default function HeroSection() {
  const { data } = useQuery(GET_PROFILE_AVATAR, {
    variables: { username: "Noriuki" },
  });

  return (
    <Section id="about">
      <div className="w-full max-w-2xl mx-auto text-center">
        <div className="flex justify-center opacity-0 animate-fade-in-up">
          <div className="relative rounded-full overflow-hidden ring-2 ring-accent/70">
            <Image
              height={0}
              width={0}
              alt="Lane Zupiroli"
              src={data?.user?.avatarUrl || ""}
              sizes="(max-width: 768px) 128px, 200px"
              className="w-28 h-28 md:w-[200px] md:h-[200px] rounded-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-2 mt-6 md:mt-8 opacity-0 animate-fade-in-up delay-200">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight gradient-text">Lane Zupiroli</h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-zinc-400 font-light">Full Stack Developer</h2>
        </div>
        <p className="text-sm md:text-base text-zinc-500 leading-relaxed mt-6 max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-300">
          Desenvolvo aplicações web & mobile de ponta a ponta, do front ao back. Foco em código limpo, boas práticas e
          entregas que fazem diferença para o usuário.
        </p>
        <div className="mt-8 opacity-0 animate-fade-in-up delay-400">
          <SocialLinks />
        </div>
      </div>
    </Section>
  );
}

const GET_PROFILE_AVATAR = gql`
  query GetPinnedRepos($username: String!) {
    user(login: $username) {
      avatarUrl
    }
  }
`;
