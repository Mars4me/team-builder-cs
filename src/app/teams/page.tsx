import NoSSRWrapper from '@/layout/NoSSRWrapper';
import TeamsPage from '@/pages/TeamsPage';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Teams',
    description: 'teams divider page',
};

const getItemsFromFakeDB = () => new Promise((res) => setTimeout(() => res('fafaf'), 3000));

export default async function Teams() {
    const getItems = await getItemsFromFakeDB();

    return (
        <>
            <NoSSRWrapper>
                <TeamsPage />
            </NoSSRWrapper>
        </>
    );
}
