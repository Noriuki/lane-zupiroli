import Image from 'next/image';

export default function ProjectSection() {
    return (
        <section className="section-full">
            <h2 className="text-4xl text-purple-900 text-center font-bold sm:text-6xl">Projetos</h2>
            <p className="text-lg text-purple-900 text-center my-4 sm:text-xl">Apps & Sistemas</p>
            <div className="w-full h-auto my-8">
                <div className="block absolute w-36 h-36 -z-10 bg-purple-900  sm:w-44 sm:h-44"></div>
                <div className="w-[calc(100%-1rem)] ml-4 mt-8 flex flex-wrap dark:bg-zinc-800 shadow-md sm:w-[calc(100%-2rem)] sm:ml-8 sm:mt-16">
                    <div className="relative w-2/5">
                        <Image src="" alt="" quality={100} fill />
                    </div>

                    <div className="flex-1 flex flex-wrap text-justify px-4 py-4 sm:px-8 sm:py-16">
                        <h3 className="text-lg sm:text-2xl">lore Impsun</h3>
                        <p className="text-xs sm:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptates incidunt dolorem,
                            blanditiis saepe, cupiditate optio aperiam iste consequuntur autem voluptatibus quam!
                            Consequuntur, modi illo atque cum omnis hic. Sunt!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
