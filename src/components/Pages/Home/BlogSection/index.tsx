import Section from "@/components/Layout/Section";
import Image from "next/image";

interface IPost {
  id: number;
  url: string;
  title: string;
  description: string;
  cover_image: string;
}

export default async function BlogSection() {
  const posts: IPost[] = await getPosts();

  return (
    <Section id="blog">
      <h2 className="text-4xl text-purple-900 text-center font-bold md:text-6xl mb-8">Blog</h2>
      <div className="w-full grid grid-cols-1 px-4 md:px-0 gap-x-20 gap-y-8 my-8 justify-items-center md:grid-cols-3">
        {posts?.map((post) => (
          <div
            key={post.id}
            className="flex flex-wrap flex-col w-[100%] h-[400px] rounded-md shadow-lg bg-zinc-800 transition-all duration-500 easy-in-out hover:scale-110"
          >
            <div className="w-full h-2/5 relative rounded-t-md">
              <Image src={post?.cover_image} alt="post-cover" quality={100} className="rounded-t-md" fill />
            </div>

            <div className="flex-1 p-4 w-full h-3/5 flex flex-col justify-between">
              <h3 className="text-base md:text-lg text-center">{post.title}</h3>
              <p className="text-xs line-clamp-4 flex-1 pt-4 text-justify">{post.description}</p>
              <a
                href={post.url}
                target="_blank"
                className="w-full h-1/5 flex justify-center items-center rounded-md bg-purple-900"
              >
                <p className="text-xs md:text-sm">Ler mais...</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

async function getPosts() {
  const res = await fetch("https://dev.to/api/articles/latest?username=noriuki&per_page=3&page=1");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
