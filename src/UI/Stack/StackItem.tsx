import { cn } from '@/utils/cn';
import React, { DOMAttributes } from 'react';

interface StackItemProps extends DOMAttributes<HTMLButtonElement> {
    playerName: string;
    index: number;
    className?: string;
}

export const StackItem = ({ playerName, index, className = '', ...props }: StackItemProps) => {
    return (
        <button
            {...props}
            className={cn(
                'px-5 py-4 text-center border border-transparent rounded-lg cursor-pointer hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-red-800/30',
                className
            )}
            key={playerName + index}
        >
            {playerName}
        </button>
    );
};
