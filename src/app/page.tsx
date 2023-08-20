import BlogSection from '@/components/BlogSection';
import HeroSection from '@/components/HeroSection';
//import ProjectSection from '@/components/ProjectSection';
import TechStackSection from '@/components/TechStackSection';

export default function Home() {
    return (
        <div className="max-w-screen-lg w-full flex flex-wrap mx-auto">
            <HeroSection />
            <TechStackSection />
            {/* <ProjectSection /> */}
            <BlogSection />
        </div>
    );
}
