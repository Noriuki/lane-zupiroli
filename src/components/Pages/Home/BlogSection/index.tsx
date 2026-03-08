import Title from "@/components/Common/Title";
import Section from "@/components/Layout/Section";
import { getLatestPosts } from "@/services/dev-to";
import Image from "next/image";

export default async function BlogSection() {
  const posts = await getLatestPosts("noriuki", 3, 1);

  return (
    <Section id="blog">
      <Title title="Blog" />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {posts?.map((post) => (
          <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
            <div className="h-full section-card rounded-2xl overflow-hidden flex flex-col">
              <div className="relative h-40 flex-shrink-0">
                <Image
                  src={post?.cover_image}
                  alt={post.title}
                  quality={90}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent h-full" />
              </div>
              <div className="flex-1 p-5 flex flex-col min-h-0 relative rounded-t-2xl bg-zinc-900/95 -mt-4 pt-6">
                <div className="absolute left-0 top-5 bottom-5 w-px bg-gradient-to-b from-accent to-accent-light opacity-40 group-hover:opacity-70 transition-opacity rounded-full" />
                <h3 className="text-base md:text-lg font-semibold text-zinc-100 line-clamp-2 pl-3 group-hover:text-white transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-400 line-clamp-3 mt-2 flex-1 pl-3">{post.description}</p>
                <span className="inline-flex items-center justify-center mt-4 py-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-light text-sm font-medium text-white/95 pl-3 transition-opacity group-hover:opacity-90">
                  Ler mais
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
