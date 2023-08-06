import React, { version } from 'react';

interface ShuffleIconProps {
    width: number;
    height: number;
    viewBox?: string;
    className?: string;
}

const ShuffleIcon = ({ width, height, viewBox, className }: ShuffleIconProps) => {
    return (
        <svg
            fill={'#000000'}
            width={width}
            height={height}
            className={className}
            viewBox={viewBox || '0 0 49.7 49.7'}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <path
                    d="M27,13.85h9v8.964l13.7-9.964L36,2.886v8.964h-9c-7.168,0-13,5.832-13,13c0,6.065-4.935,11-11,11H1c-0.553,0-1,0.447-1,1
		s0.447,1,1,1h2c7.168,0,13-5.832,13-13C16,18.785,20.935,13.85,27,13.85z M38,6.814l8.3,6.036L38,18.886V6.814z"
                />
                <path
                    d="M1,13.85h2c2.713,0,5.318,0.994,7.336,2.799c0.191,0.171,0.43,0.255,0.667,0.255c0.274,0,0.548-0.112,0.745-0.333
		c0.368-0.412,0.333-1.044-0.078-1.412C9.285,13.025,6.206,11.85,3,11.85H1c-0.553,0-1,0.447-1,1S0.447,13.85,1,13.85z"
                />
                <path
                    d="M36,35.85h-9c-2.685,0-5.27-0.976-7.278-2.748c-0.411-0.365-1.044-0.327-1.411,0.089c-0.365,0.414-0.326,1.046,0.089,1.411
		c2.374,2.095,5.429,3.248,8.601,3.248h9v8.964l13.7-9.964L36,26.886V35.85z M38,30.814l8.3,6.036L38,42.886V30.814z"
                />
            </g>
        </svg>
    );
};

export default ShuffleIcon;