'use client';
import SocialLinks from '@/components/SocialLinks';
import { Player } from '@lottiefiles/react-lottie-player';

export default function HeroSection() {
  return (
    <section className="section-full">
      <div style={{ width: '350px', height: '350px' }}>
        <Player autoplay loop src="/lotties/dev.json" style={{ width: '100%', minWidth: '100%' }} />
      </div>

      <div className="space-y-2 sm:my-8 sm:space-y-4">
        <h1 className="text-4xl md:text-8xl text-purple-900 text-center">Lane Zupiroli</h1>
        <h2 className="text-2xl md:text-4xl text-purple-900 text-center">Full Stack Developer</h2>
      </div>
      <SocialLinks />
    </section>
  );
}
