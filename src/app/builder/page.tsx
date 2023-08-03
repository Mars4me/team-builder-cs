import NoSSRWrapper from '@/layout/NoSSRWrapper';
import BuilderPage from '@/pages/BuilderPage';

export default function Builder() {
    return (
        <>
            <NoSSRWrapper>
                <BuilderPage />
            </NoSSRWrapper>
        </>
    );
}
