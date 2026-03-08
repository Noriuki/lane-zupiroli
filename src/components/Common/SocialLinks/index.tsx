import Image from "next/image";
import { twMerge } from "tailwind-merge";

const linkClasses =
  "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-zinc-800/80 border border-zinc-700/50 text-zinc-400 hover:text-white hover:border-accent/50 hover:shadow-accent-glow transition-all duration-300 hover:scale-105 relative overflow-hidden";

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-2">
      <a href="https://www.linkedin.com/in/noriuki/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <div className={twMerge(linkClasses)}>
          <Image src="/icons/social/linkedin-icon.png" alt="LinkedIn" width={24} height={24} />
        </div>
      </a>
      <a href="https://github.com/noriuki" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <div className={twMerge(linkClasses, "rounded-xl")}>
          <Image src="/icons/social/github-icon.png" alt="GitHub" width={24} height={24} />
        </div>
      </a>
      <a href="https://www.youtube.com/@noriuki" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <div className={twMerge(linkClasses)}>
          <Image src="/icons/social/youtube-icon.png" alt="YouTube" width={24} height={24} />
        </div>
      </a>
      <a href="https://dev.to/noriuki" target="_blank" rel="noopener noreferrer" aria-label="Dev.to">
        <div className={linkClasses}>
          <Image src="/icons/social/dev-icon.png" alt="Dev.to" width={24} height={24} />
        </div>
      </a>
    </div>
  );
};

export default SocialLinks;
