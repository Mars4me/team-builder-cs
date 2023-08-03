// types
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookies',
    // description: 'NextJS + TailwindCSS minimalist starter kit',
    // openGraph: {
    //   title: 'NextJS + TailwindCSS minimalist starter kit',
    //   description: 'The React Framework for the Web',
    //   url: 'https://nextjs.org',
    //   siteName: 'Next.js',
    //   images: [
    //     {
    //       url: 'https://nextjs.org/og.png',
    //       width: 800,
    //       height: 600,
    //     },
    //   ],
    //   locale: 'en-US',
    //   type: 'website',
    // },
};

export default function Cookies() {
    return (
        <div className="max-w-4xl p-2 mx-auto">
            <div className="mb-8 prose prose-lg break-words max-w-none dark:prose-invert prose-a:text-blue-700 prose-a:no-underline hover:prose-a:text-blue-500 dark:prose-a:text-blue-300 dark:hover:prose-a:text-blue-500">
                <div className="flex w-full px-4 pt-12 text-center">
                    <div className="w-full">
                        <h1 className="text-5xl font-bold dark:text-gray-200">Cookies</h1>
                        <h2 className="px-6 pt-6 pb-12 text-xl leading-relaxed dark:text-gray-300 sm:px-24">
                            This policy explains how we use cookies and similar
                            <br className="hidden sm:block" /> tracking technologies on our websites.
                        </h2>
                    </div>
                </div>

                <article className="prose max-w-none dark:prose-invert">
                    <h2>What are cookies?</h2>
                    <p>
                        Cookies are small data files that are placed on your computer when you visit a site.
                        Cookies serve different purposes, like helping us understand how our site is being
                        used, letting you navigate between pages efficiently, remembering your preferences,
                        and generally improving your browsing experience. Cookies can also help ensure
                        advertising you see online is more relevant to you and your interests.
                    </p>
                    <h2>Who places cookies on my device?</h2>
                </article>
                <div className="py-8 text-sm text-center text-slate-500">
                    [As of {new Date().getFullYear()}]
                </div>
            </div>
        </div>
    );
}
