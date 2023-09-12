import ThemeSwitch from '../ThemeSwitch';

export default function Header() {
    return (
        <header className="w-full">
            <div className="w-full p-4 flex flex-wrap justify-end">
                <ThemeSwitch />
            </div>
        </header>
    );
}
