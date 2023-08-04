'use client';

import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { MarsLogo } from '../MarsLogo';
import { footerItems } from '@/data/constants';

export const Footer = () => {
    const panelLinks =
        'text-sm text-slate-600 dark:text-slate-400 dark:hover:text-gray-100 hover:text-violet-700';
    const gridLinks =
        'block mb-3 text-slate-600 dark:text-slate-400 dark:hover:text-gray-100 hover:text-violet-700';
    const logoLinks =
        'flex items-center space-x-2 text-slate-600 dark:text-slate-400 dark:hover:text-gray-100 hover:text-violet-700';

    // get year for copyright
    const year = new Date().getFullYear();

    return (
        <div className="mt-4 flex items-center justify-center w-full px-4  dark:bg-[#09101F] md:pt-12 border-t dark:border-gray-200 border-gray-800">
            <div className="container px-4 mx-auto">
                {/* 
          Main Grid on Larger Screens, hidden on small screens
        */}
                <div className="hidden grid-cols-2 gap-12 pb-16 md:grid sm:grid-cols-4">
                    <div className="flex flex-col items-start ml-8">
                        <Link
                            aria-label="Home Page"
                            className="flex text-[#656A8C] hover: dark:text-gray-300"
                            href="/"
                        >
                            <MarsLogo width={82} height={82} />
                        </Link>
                        <ul className="flex items-start justify-center mt-1 text-sm pace-x-4 md:flex-col md:space-x-0 md:space-y-3 ">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/mars4me/"
                                    className={logoLinks}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Link to Linkedin profile"
                                >
                                    <span className="inline-block ">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="linkedin"
                                            height="20"
                                            width="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 352 372"
                                        >
                                            <g id="XMLID_801_">
                                                <path
                                                    fill="currentColor"
                                                    d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                                                />
                                                <path
                                                    fill="currentColor"
                                                    id="XMLID_803_"
                                                    d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                                                />
                                                <path
                                                    fill="currentColor"
                                                    d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="inline">Linkedin</span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://github.com/Mars4me"
                                    className={logoLinks}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="inline-block ">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            width="20"
                                            height="20"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className="inline">Github</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* 
            Second Column - Resources
          */}
                    <div className="text-sm">
                        <div className="mb-6 text-slate-900 dark:text-slate-100 font-medium text-[15px]">
                            Resources
                        </div>
                        {footerItems.resources.map((item, index) => {
                            return item.internal ? (
                                <Link key={`${index}`} scroll={true} href={item.path} className={gridLinks}>
                                    {item.name}
                                </Link>
                            ) : (
                                <a key={`${index}`} className={gridLinks} href={item.path}>
                                    {item.name}
                                </a>
                            );
                        })}
                    </div>
                    {/* 
            Third Column - App
          */}
                    <div className="text-sm">
                        <div className="mb-6  dark:text-white font-medium text-[15px]">Functional</div>
                        {footerItems.app.map((item, index) => {
                            return item.internal ? (
                                <Link key={`${index}`} href={item.path} className={gridLinks}>
                                    {item.name}
                                </Link>
                            ) : (
                                <a key={`${index}`} className={gridLinks} href={item.path}>
                                    {item.name}
                                </a>
                            );
                        })}
                    </div>
                    {/* 
            Fourth Column - Legal
          */}
                    <div className="text-sm">
                        <div className="mb-6  dark:text-white font-medium text-[15px]">Legal</div>
                        {footerItems.legal.map((item, index) => {
                            return item.internal ? (
                                <Link key={`${index}`} href={item.path} className={gridLinks}>
                                    {item.name}
                                </Link>
                            ) : (
                                <a key={`${index}`} className={gridLinks} href={item.path}>
                                    {item.name}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* 
          Accordion/Disclosure panels for phones, hidden on large screens 
        */}
                <div className="flex flex-col py-4 sm:py-8 md:hidden">
                    <Disclosure>
                        <Disclosure.Button className="w-full flex justify-between items-center text-base text-left  dark:text-[#ABB3BF] dark:hover:text-gray-100 py-4 border-b  dark:border-gray-800">
                            <h4>Resources</h4>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-5 h-5 ui-open:transform ui-open:rotate-90"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel as="ul" className="flex flex-col py-4 pl-4 space-y-4">
                            {footerItems.resources.map((item, index) => {
                                return item.internal ? (
                                    <li className={panelLinks} key={`${index}`}>
                                        <Disclosure.Button as={Link} href={item.path}>
                                            {item.name}
                                        </Disclosure.Button>
                                    </li>
                                ) : (
                                    <li className={panelLinks} key={`${index}`}>
                                        <Disclosure.Button>
                                            <a href={item.path}>{item.name}</a>
                                        </Disclosure.Button>
                                    </li>
                                );
                            })}
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="w-full flex justify-between items-center text-base text-left  dark:text-[#ABB3BF] dark:hover:text-gray-100 py-4 border-b  dark:border-gray-800">
                            <h4>Company</h4>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-5 h-5 ui-open:transform ui-open:rotate-90"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel as="ul" className="flex flex-col py-4 pl-4 space-y-4">
                            {footerItems.app.map((item, index) => {
                                return item.internal ? (
                                    <li className={panelLinks} key={`${index}`}>
                                        <Disclosure.Button as={Link} href={item.path}>
                                            {item.name}
                                        </Disclosure.Button>
                                    </li>
                                ) : (
                                    <li className={panelLinks} key={`${index}`}>
                                        <Disclosure.Button>
                                            <a href={item.path}>{item.name}</a>
                                        </Disclosure.Button>
                                    </li>
                                );
                            })}
                        </Disclosure.Panel>
                    </Disclosure>

                    <Disclosure>
                        <Disclosure.Button className="w-full flex justify-between items-center text-base text-left  dark:text-[#ABB3BF] dark:hover:text-gray-100 py-4 border-b  dark:border-gray-800">
                            <h4>Legal</h4>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-5 h-5 ui-open:transform ui-open:rotate-90"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel as="ul" className="flex flex-col py-4 pl-4 space-y-4">
                            {footerItems.legal.map((item, index) => {
                                return item.internal ? (
                                    <li className={panelLinks} key={`${index}`}>
                                        <Disclosure.Button as={Link} href={item.path}>
                                            {item.name}
                                        </Disclosure.Button>
                                    </li>
                                ) : (
                                    <li className={panelLinks} key={`${index}`}>
                                        <Disclosure.Button>
                                            <a href={item.path}>{item.name}</a>
                                        </Disclosure.Button>
                                    </li>
                                );
                            })}
                        </Disclosure.Panel>
                    </Disclosure>
                </div>
                {/* 
          Final Bottom Section
        */}
                <div className="flex flex-col flex-wrap items-center justify-between pb-4 space-y-6 md:pt-4 md:space-y-0 md:flex-row md:border-t md:dark:border-gray-800">
                    <div className="block md:hidden">
                        <MarsLogo width={82} height={82} viewBox="0 0 400 400" />
                    </div>

                    <div className="flex flex-col space-y-6 md:space-y-0">
                        {/* 
              Block of Icons on small screens (phone), hidden on larger screens
            */}
                        <div className="block md:hidden">
                            <ul className="flex items-start justify-center space-x-4 text-sm md:flex-col md:space-x-0 md:space-y-3 ">
                                <li>
                                    <a
                                        href=""
                                        className={logoLinks}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Link to linkedin"
                                    >
                                        <span className="inline-block ">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="linkedin"
                                                height="20"
                                                width="20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 352 372"
                                            >
                                                <g id="XMLID_801_">
                                                    <path
                                                        fill="currentColor"
                                                        d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                                                    />
                                                    <path
                                                        fill="currentColor"
                                                        id="XMLID_803_"
                                                        d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                                                    />
                                                    <path
                                                        fill="currentColor"
                                                        d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="hidden">Linkedin</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://github.com/axiomhq"
                                        aria-label="Read more about Seminole tax hike"
                                        className={logoLinks}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className="inline-block ">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                width="20"
                                                height="20"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span className="hidden">Github</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Copyright © {year} Mars4me.
                            <span className="hidden md:inline"> All rights reserved.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
