'use client';
import SocialLinks from '@/components/SocialLinks';
import { gql, useQuery } from '@apollo/client';

export default function HeroSection() {
  const { data } = useQuery(GET_PROFILE_AVATAR, {
    variables: { username: 'Noriuki' },
  });

  return (
    <section className="section-full">
      <div className="flex justify-center">
        <img src={data?.user.avatarUrl} alt="Lane Zupiroli" className="w-[180px] h-[180px] rounded-full" />
      </div>
      <div className="space-y-2 sm:my-8 sm:space-y-4">
        <h1 className="text-4xl md:text-8xl text-purple-900 text-center">Lane Zupiroli</h1>
        <h2 className="text-2xl md:text-4xl text-purple-900 text-center">Full Stack Developer</h2>
      </div>
      <SocialLinks />
    </section>
  );
}

const GET_PROFILE_AVATAR = gql`
  query GetPinnedRepos($username: String!) {
    user(login: $username) {
      avatarUrl
    }
  }
`;
