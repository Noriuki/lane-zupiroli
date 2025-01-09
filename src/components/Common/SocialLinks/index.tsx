import Image from "next/image";
import { twMerge } from "tailwind-merge";

const SocialLinks = () => {
  const linkClasses = "w-8 h-8 sm:w-12 sm:h-12 rounded-md relative hover:scale-110 hover:shadow-purple transition-all";

  return (
    <div className="flex flex-wrap space-x-10 p-4">
      <a href="https://www.linkedin.com/in/noriuki/" target="_blank">
        <div className={linkClasses}>
          <Image src="/icons/social/linkedin-icon.png" alt="linkedin-icon" fill />
        </div>
      </a>
      <a href="https://github.com/noriuki" target="_blank">
        <div className={twMerge(linkClasses, "rounded-full")}>
          <Image src="/icons/social/github-icon.png" alt="github-icon" fill />
        </div>
      </a>
      <a href="https://www.youtube.com/@noriuki" target="_blank">
        <div className={twMerge(linkClasses, "rounded-lg")}>
          <Image src="/icons/social/youtube-icon.png" alt="youtube-icon" fill />
        </div>
      </a>
      <a href="https://dev.to/noriuki" target="_blank">
        <div className={linkClasses}>
          <Image src="/icons/social/dev-icon.png" alt="dev-icon" fill />
        </div>
      </a>
    </div>
  );
};

export default SocialLinks;
