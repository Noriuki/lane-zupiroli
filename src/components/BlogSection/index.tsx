import Image from 'next/image';
import React from 'react';

async function getPosts() {
    const res = await fetch('https://dev.to/api/articles/latest?username=noriuki&per_page=3&page=1');

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

type Post = {
    id: number;
    url: string;
    title: string;
    description: string;
    cover_image: string;
};

export default async function BlogSection() {
    const posts = await getPosts();

    return (
        <section className="section-full">
            <h2 className="text-4xl text-purple-900 text-center font-bold sm:text-6xl">Blog</h2>
            <p className="text-lg text-purple-900 text-center my-4 sm:text-xl">Artigos & Tutorias mais recentes</p>
            <div className="w-full grid grid-cols-1 gap-x-20 gap-y-8 my-8 justify-items-center lg:grid-cols-3">
                {!!posts.length &&
                    posts.map((post: Post) => {
                        return (
                            <a href={post.url} key={post.id} target="_blank">
                                <div className="flex flex-wrap flex-col w-64 h-80 rounded-md shadow-lg dark:bg-zinc-800 sm:w-72 sm:h-96">
                                    <div className="w-full h-2/5 relative rounded-t-md">
                                        <Image
                                            src={post?.cover_image}
                                            alt="post-cover"
                                            quality={100}
                                            className="rounded-t-md"
                                            fill
                                        />
                                    </div>

                                    <div className="flex-1 text-justify p-4 w-full h-3/5">
                                        <h3 className="text-base sm:text-lg">{post.title}</h3>
                                        <p className="text-xs sm:text-sm line-clamp-5 mt-6">{post.description}</p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
            </div>
        </section>
    );
}
