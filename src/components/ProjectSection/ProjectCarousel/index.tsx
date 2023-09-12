'use client'
import useCarousel from 'embla-carousel-react';
import Image from 'next/image';
import projects from "./projects.json";

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useCarousel({
    slidesToScroll: 1,
    align: "start"
  });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {
          projects.map((project: {name: string, description: string, image: string, link: string}) => (
            <div className='embla__slide'    key={project.name} >
              <div 
                
                className="w-2/3 mx-auto sm:w-full h-auto my-4 flex flex-wrap flex-col dark:bg-zinc-800 shadow-md rounded-md sm:flex-row"
              >
                        <div className="relative w-full sm:w-2/5 p-8">
                            <Image src={project.image} alt={`${project.name}-logo`} quality={100} width={0} height={0} sizes="100vw" className="w-full h-auto"/>
                        </div>

                        <div className="w-full sm:w-3/5 flex flex-wrap content-start text-justify px-4 py-4 sm:px-8">
                            <h3 className="h-fit text-xl sm:text-3xl mb-4">{project.name}</h3>
                            <p className="text-base sm:text-lg">
                                {project.description}
                            </p>
                        </div>
                      </div>
            </div>
            
          ))
        }
      </div>

    </div>
  )
};
