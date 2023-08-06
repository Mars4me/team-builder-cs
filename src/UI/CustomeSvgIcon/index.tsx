import React, { version } from 'react';

interface ShuffleIconProps {
    width: number;
    height: number;
    viewBox?: string;
    className?: string;
    ComponentSVG: SVGElement;
}

const CustomeSvgIcon = ({ width, height, viewBox, className, ComponentSVG }: ShuffleIconProps) => {
    console.log(ComponentSVG.src);
    return (
        <>
            <svg
                fill={'#000000'}
                width={width}
                height={height}
                className={className}
                viewBox={viewBox || '0 0 49.7 49.7'}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <use xlinkHref="ComponentSVG.src" x="120" y="100" fill="#FFC700" />
            </svg>
        </>
    );
};

export default CustomeSvgIcon;
