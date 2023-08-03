import Image from 'next/image';
import { ReactNode } from 'react';

interface SliderItemProps {
    children?: ReactNode;
}

const SliderItem = ({}: SliderItemProps) => {
    return (
        <div className="">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert hover:"
                src="/cs-go.svg"
                alt="slider-item"
                width={530}
                height={260}
                priority
            />
        </div>
    );
};

export default SliderItem;
