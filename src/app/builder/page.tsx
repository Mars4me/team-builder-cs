import NoSSRWrapper from '@/layout/NoSSRWrapper';
import BuilderPage from '@/pages/BuilderPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Builder',
    description: 'Team builder page',
};

export default function Builder() {
    return (
        <>
            <NoSSRWrapper>
                <BuilderPage />
            </NoSSRWrapper>
        </>
    );
}
