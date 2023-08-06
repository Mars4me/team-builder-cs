import Link from 'next/link';
import { ReactNode } from 'react';

interface CustomeLinkProps {
    children?: ReactNode;
    title: string;
    description: string;
    href: string;
}

const CustomLink = ({ href, title, description }: CustomeLinkProps) => {
    return (
        <Link
            href={href}
            className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                {title}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{description}</p>
        </Link>
    );
};

export default CustomLink;
