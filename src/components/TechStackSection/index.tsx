import Image from 'next/image';

export default function TechStackSection() {
    return (
        <section className="section-full">
            <h2 className="text-4xl sm:text-6xl text-purple-900 text-center font-bold">Tech Stack</h2>
            <p className="text-lg sm:text-xl text-purple-900 text-center my-4">Frameworks & Ferramentas</p>

            <div className="w-full grid grid-cols-[repeat(2,5rem)] grid-rows-5 gap-12 my-6 justify-items-center justify-around lg:grid-cols-[repeat(5,5rem)] lg:grid-rows-2 lg:gap-20 lg:my-8 lg:justify-between">
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src="/icons/stack/react-icon.png" alt="react-icon" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src="/icons/stack/vue-icon.png" alt="vue-icon" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src="/icons/stack/tailwind-icon.png" alt="tailwind-icon" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src="/icons/stack/docker-icon.png" alt="docker-icon" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src="/icons/stack/vscode-icon.png" alt="vscode-icon" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                </div>

                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src="/icons/stack/nestjs-icon.png" alt="nestjs-icon" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src="/icons/stack/laravel-icon.png" alt="laravel-icon" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src="/icons/stack/sass-icon.png" alt="sass-icon" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src="/icons/stack/mysql-icon.png" alt="mysql-icon" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src="/icons/stack/git-icon.png" alt="git-icon" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                </div>
            </div>
        </section>
    );
}
