import Image from 'next/image';
import React from 'react';

import reactIcon from '@/assets/icons/react-icon.png';
import vueIcon from '@/assets/icons/vue-icon.png';
import tailwindIcon from '@/assets/icons/tailwind-icon.png';
import dockerIcon from '@/assets/icons/docker-icon.png';
import vscodeIcon from '@/assets/icons/vscode-icon.png';
import nodeIcon from '@/assets/icons/node-icon.png';
import laravelIcon from '@/assets/icons/laravel-icon.png';
import sassIcon from '@/assets/icons/sass-icon.png';
import mysqlIcon from '@/assets/icons/mysql-icon.png';
import gitIcon from '@/assets/icons/git-icon.png';

export default function TechStackSection() {
    return (
        <section className="section-full">
            <h2 className="text-4xl sm:text-6xl text-purple-900 text-center font-bold">Tech Stack</h2>
            <p className="text-lg sm:text-xl text-purple-900 text-center my-4">Frameworks & Ferramentas que utilizo</p>

            <div className="w-full grid grid-cols-[repeat(2,5rem)] grid-rows-5 gap-12 my-6 justify-items-center justify-around lg:grid-cols-[repeat(5,5rem)] lg:grid-rows-2 lg:gap-20 lg:my-8 lg:justify-between">
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src={reactIcon} alt="react-icon" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src={vueIcon} alt="vue-icon" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src={tailwindIcon} alt="tailwind-icon" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src={dockerIcon} alt="docker-icon" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src={vscodeIcon} alt="vscode-icon" className="w-full h-auto" />
                </div>

                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src={nodeIcon} alt="node-icon" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src={laravelIcon} alt="laravel-icon" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src={sassIcon} alt="sass-icon" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src={mysqlIcon} alt="mysql-icon" className="w-full h-auto" />
                </div>
                <div className="shadow-md p-4 rounded-md flex flex-wrap justify-center items-center w-full h-full dark:bg-zinc-800">
                    <Image src={gitIcon} alt="git-icon" className="w-full h-auto" />
                </div>
            </div>
        </section>
    );
}
