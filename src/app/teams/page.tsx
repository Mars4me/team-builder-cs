import NoSSRWrapper from '@/layout/NoSSRWrapper';
import TeamsPage from '@/pages/TeamsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Teams',
    description: 'teams divider page',
};

// for test
// const getItemsFromFakeDB = () => new Promise((res) => setTimeout(() => res('fafaf'), 3000));

export default async function Teams() {
    // for test
    // const getItems = await getItemsFromFakeDB();
    return (
        <>
            <NoSSRWrapper>
                <TeamsPage />
            </NoSSRWrapper>
        </>
    );
}
