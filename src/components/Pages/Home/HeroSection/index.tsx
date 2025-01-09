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
      <div className="flex justify-center">
        <Image
          height={0}
          width={0}
          alt="Lane Zupiroli"
          src={data?.user?.avatarUrl || ""}
          sizes="(max-width: 768px) 120px, 180px"
          className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full"
        />
      </div>
      <div className="space-y-2 my-4 md:space-y-4">
        <h1 className="text-4xl md:text-8xl text-purple-900 text-center">Lane Zupiroli</h1>
        <h2 className="text-2xl md:text-4xl text-purple-900 text-center">Full Stack Developer</h2>
      </div>
      <SocialLinks />
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
