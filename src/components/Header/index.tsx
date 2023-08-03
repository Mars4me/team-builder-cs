import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from '../ThemeToggle';

export const Header = () => {
    return (
        <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm sm:flex">
            <Link
                href="/"
                className="flex self-start justify-center w-full pt-8 pb-6 border-b border-gray-300 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
            >
                <b>CS:GO</b> &nbsp; team builder
            </Link>
        </div>
    );
};
