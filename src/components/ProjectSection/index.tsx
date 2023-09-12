import ProjectCarousel from './ProjectCarousel';

export default function ProjectSection() {
    return (
        <section className="section-full">
            <h2 className="text-4xl text-purple-900 text-center font-bold sm:text-6xl">Projetos</h2>
            <p className="text-lg text-purple-900 text-center my-4 sm:text-xl">Apps & Códigos</p>

            <ProjectCarousel />
        </section>
    );
}
