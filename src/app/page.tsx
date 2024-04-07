import BlogSection from '@/components/BlogSection';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';

export default function Home() {
  return (
    <div className="max-w-screen-lg w-full flex flex-wrap mx-auto">
      <HeroSection />
      <ProjectSection />
      <BlogSection />
    </div>
  );
}
