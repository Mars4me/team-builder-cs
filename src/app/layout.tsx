import { Header } from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'Cs go team builder',
        template: '%s | Cs go team builder',
    },
    description: 'Cs go team builder for fun',
    icons: {
        icon: '/cs-go.svg',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" dir="ltr" className="mr-scroll-disable">
            <body className={inter.className} suppressHydrationWarning={true}>
                <main className="flex min-h-screen flex-col items-center lg:p-24 relative max-w-[1280px] my-0 mx-auto">
                    <Header />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
