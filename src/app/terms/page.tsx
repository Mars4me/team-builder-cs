// types
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms',
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

export default function Terms() {
    return (
        <div className="max-w-4xl p-2 mx-auto">
            <div className="mb-8 prose prose-lg break-words max-w-none dark:prose-invert prose-a:text-blue-700 prose-a:no-underline hover:prose-a:text-blue-500 dark:prose-a:text-blue-300 dark:hover:prose-a:text-blue-500">
                <div className="flex w-full px-4 pt-12 text-center">
                    <div className="w-full">
                        <h1 className="text-5xl font-bold dark:text-gray-200">Terms of Service</h1>
                        <h2 className="px-6 pt-6 pb-12 text-xl leading-relaxed dark:text-gray-300 sm:px-24">
                            If you have any questions, please <a href="mailto:test.test">get in touch.</a>
                        </h2>
                    </div>
                </div>

                <div className="py-8 text-sm text-center text-slate-500">
                    [As of {new Date().getFullYear()}]
                </div>
            </div>
        </div>
    );
}
