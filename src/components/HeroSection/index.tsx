'use client';

import SocialLinks from '@/components/SocialLinks';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
    return (
        <section className="section-full">
            <div className="w-40 h-40 sm:w-52 sm:h-52 relative rounded-full border-4 border-purple-900">
                <Image src="/images/foto.jpeg" alt="selfie" className="rounded-full" quality={100} fill />
            </div>

            <div className="my-6 space-y-2 sm:my-8 sm:space-y-4">
                <TypeAnimation
                    sequence={['Lane Zupiroli', 10000, 'Noriuki', 10000]}
                    speed={50}
                    className="text-4xl sm:text-8xl text-purple-900 text-center font-black"
                    repeat={Infinity}
                    wrapper="h1"
                    preRenderFirstString
                />
                <h2 className="text-2xl sm:text-3xl text-purple-900 text-center">Full Stack Developer</h2>
            </div>
            <SocialLinks />
        </section>
    );
}
