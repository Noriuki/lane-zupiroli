// Components
import BlogSection from "@/components/Pages/Home/BlogSection";
import HeroSection from "@/components/Pages/Home/HeroSection";
import Menu from "@/components/Pages/Home/Menu";
import ProjectSection from "@/components/Pages/Home/ProjectSection";
import SkillsSection from "@/components/Pages/Home/SkillsSection";

export default function Home() {
  return (
    <div className="max-w-4xl w-full flex flex-wrap mx-auto px-4 sm:px-6 lg:px-8">
      <Menu />
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <BlogSection />
    </div>
  );
}
