'use client';
import moonIcon from '@/assets/icons/moon-icon.png';
import sunIcon from '@/assets/icons/sun-icon.png';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const ThemeSwitch = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button onClick={() => (currentTheme == 'dark' ? setTheme('light') : setTheme('dark'))}>
            <Image src={sunIcon} alt="sun-icon" width={32} height={32} className="dark:hidden" />
            <Image src={moonIcon} alt="moon-icon" width={32} height={32} className="hidden dark:block" />
        </button>
    );
};

export default ThemeSwitch;
