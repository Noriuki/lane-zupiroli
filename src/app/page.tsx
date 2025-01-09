// Components
import BlogSection from "@/components/Pages/Home/BlogSection";
import HeroSection from "@/components/Pages/Home/HeroSection";
import Menu from "@/components/Pages/Home/Menu";
import ProjectSection from "@/components/Pages/Home/ProjectSection";

export default function Home() {
  return (
    <div className="max-w-screen-lg w-full flex flex-wrap mx-auto">
      <Menu />
      <HeroSection />
      <ProjectSection />
      <BlogSection />
    </div>
  );
}
