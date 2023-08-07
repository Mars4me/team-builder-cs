'use client';

import { cn } from '@/utils/cn';
import React, { ReactNode } from 'react';

interface StackProps {
    children?: ReactNode;
    className?: string;
}

const Stack = ({ children, className = '' }: StackProps) => {
    return (
        <div
            className={cn(
                'grid w-full pt-8 pb-6 mt-4 text-center border-gray-300 md:mt-0 lg:mb-0 sm:grid-cols-3 lg:grid-cols-5 lg:text-left bg-gradient-to-b dark:shadow-inner dark:shadow-purple-900 from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit md:static lg:w-auto lg:rounded-xl md:border lg:p-4 lg:dark:bg-zinc-800/30',
                className
            )}
        >
            {children}
        </div>
    );
};

export default Stack;
