import LoadingSceleton from '@/components/LoadingSkeleton';
import dynamic from 'next/dynamic';
import React, { ReactNode } from 'react';

const NoSSRWrapper = (props: { children?: ReactNode }) => <React.Fragment>{props.children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NoSSRWrapper), {
    loading: () => <LoadingSceleton />,
    ssr: false,
});

export const NoSSRWrapperWithoutLoader = dynamic(() => Promise.resolve(NoSSRWrapper), {
    ssr: false,
});
