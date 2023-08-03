import NoSSRWrapper from '@/layout/NoSSRWrapper';
import TeamsPage from '@/pages/TeamsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Teams',
    description: 'teams divider page',
};

export default function Teams() {
    return (
        <>
            <NoSSRWrapper>
                <TeamsPage />
            </NoSSRWrapper>
        </>
    );
}
