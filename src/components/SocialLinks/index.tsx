import Image from 'next/image';

const SocialLinks = () => {
    return (
        <div className="flex flex-wrap space-x-10 p-4">
            <a href="https://www.linkedin.com/in/noriuki/" target="_blank">
                <div className="w-8 h-8 sm:w-12 sm:h-12 relative">
                    <Image src="/icons/social/linkedin-icon.png" alt="linkedin-icon" fill />
                </div>
            </a>
            <a href="https://github.com/noriuki" target="_blank">
                <div className="w-8 h-8 sm:w-12 sm:h-12 relative">
                    <Image src="/icons/social/github-icon.png" alt="github-icon" fill />
                </div>
            </a>
            <a href="https://www.youtube.com/@noriuki" target="_blank">
                <div className="w-8 h-8 sm:w-12 sm:h-12 relative">
                    <Image src="/icons/social/youtube-icon.png" alt="youtube-icon" fill />
                </div>
            </a>
            <a href="https://dev.to/noriuki" target="_blank">
                <div className="w-8 h-8 sm:w-12 sm:h-12 relative">
                    <Image src="/icons/social/dev-icon.png" alt="dev-icon" fill />
                </div>
            </a>
        </div>
    );
};

export default SocialLinks;
