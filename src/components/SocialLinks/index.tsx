import GithubIcon from '@/assets/icons/github-icon.png';
import LinkedinIcon from '@/assets/icons/linkedin-icon.png';
import YoutubeIcon from '@/assets/icons/youtube-icon.png';
import DevIcon from '@/assets/icons/dev-icon.png';
import Image from 'next/image';

const SocialLinks = () => {
    return (
        <div className="flex flex-wrap space-x-10 p-4">
            <a href="https://www.linkedin.com/in/noriuki/" target="_blank">
                <div className="w-8 h-8 sm:w-12 sm:h-12 relative">
                    <Image src={LinkedinIcon} alt="linkedin-icon" fill />
                </div>
            </a>
            <a href="https://github.com/noriuki" target="_blank">
                <div className="w-8 h-8 sm:w-12 sm:h-12 relative">
                    <Image src={GithubIcon} alt="github-icon" fill />
                </div>
            </a>
            <a href="https://www.youtube.com/@noriuki" target="_blank">
                <div className="w-8 h-8 sm:w-12 sm:h-12 relative">
                    <Image src={YoutubeIcon} alt="youtube-icon" fill />
                </div>
            </a>
            <a href="https://dev.to/noriuki" target="_blank">
                <div className="w-8 h-8 sm:w-12 sm:h-12 relative">
                    <Image src={DevIcon} alt="dev-icon" fill />
                </div>
            </a>
        </div>
    );
};

export default SocialLinks;
