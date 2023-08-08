'use client';

import { ThemeProvider } from 'next-themes';
import { LazyMotion, domAnimation } from 'framer-motion';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class">
            <LazyMotion features={domAnimation}>{children}</LazyMotion>
        </ThemeProvider>
    );
};
