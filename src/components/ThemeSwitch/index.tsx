'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button onClick={() => (currentTheme === 'dark' ? setTheme('light') : setTheme('dark'))}>
      <Image src="/icons/app/moon-icon.png" alt="sun-icon" width={32} height={32} className="dark:hidden" />
      <Image src="/icons/app/sun-icon.png" alt="moon-icon" width={32} height={32} className="hidden dark:block" />
    </button>
  );
};

export default ThemeSwitch;
