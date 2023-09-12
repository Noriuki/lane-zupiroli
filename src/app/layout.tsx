import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Providers from './Providers';
import './globals.css';

export const metadata: Metadata = {
    title: 'Lane Zupiroli',
    description: 'Full Stack Developer',
    icons: {
        icon: '/icons/icon.png',
        shortcut: '/icons/icon.png',
        apple: '/icons/icon.png',
    },
};

const popping = Poppins({
    weight: ['100', '300', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={popping.className}>
            <body className="bg-zinc-50 dark:bg-zinc-900">
                <div className="flex flex-wrap flex-col">
                    <Providers>
                        <Header />
                        <main className="flex-1 flex flex-wrap">{children}</main>
                        <Footer />
                    </Providers>
                </div>
            </body>
        </html>
    );
}
