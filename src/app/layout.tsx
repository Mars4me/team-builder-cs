import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Cs go team builder',
    description: 'Cs go team builder for fun',
    icons: {
        icon: '/cs-go.svg',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" dir="ltr">
            <body className={inter.className} suppressHydrationWarning={true}>
                <main className="flex min-h-screen flex-col items-center lg:p-24 relative max-w-[1280px] my-0 mx-auto">
                    <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm sm:flex">
                        <Link
                            href="/"
                            className="flex self-start justify-center w-full pt-8 pb-6 border-b border-gray-300 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
                        >
                            <b>CS:GO</b> &nbsp; team builder
                        </Link>
                    </div>
                    {children}
                </main>
            </body>
        </html>
    );
}
