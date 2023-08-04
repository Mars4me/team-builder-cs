declare type Locale = string;

interface Meta {
    URL: string | URL;
    siteName: string;
    title?: string;
    description?: string;
    themeColor?: string;
    backgroundColor?: string;
    og: {
        locale?: Locale;
        type?: 'website';
        ogImage: string | URL;
        width?: number;
        height?: number;
    };
    twitter: {
        card?: string;
        site?: string;
    };
}

// Nullish coalescing: the `??` operator is a way to “fall back” to
// a default value when dealing with `null` or `undefined`.

// Best approach: create a config file in your project where you export an
// object containing all configuration values for your project. There, you
// can set default values for variables coming from the environment. In this way,
// you guarantee a value will be present for the execution of your program:

// export const config = {
//   nodeEnv: process.env.NODE_ENV ?? 'development',
//   openAIKey: process.env.OPENAI_API_KEY ?? '',
//   statusPage: process.env.STATUS_PAGE_ID ?? '',
// };

// Our basic SEO data
export const meta: Meta = {
    URL: 'https://www.dreamaweso.me',
    siteName: 'DreamAwesome',
    title: 'Unlock the potential of your dreams using AI',
    description:
        'DreamAwesome helps you analyze your dreams to gain insight into the their meaning to achieve personal growth',
    themeColor: '##F5E1E6',
    backgroundColor: '#F5E1E6',
    og: {
        locale: 'en-US',
        type: 'website',
        ogImage: '/ogimage.jpg',
        width: 1200,
        height: 630,
    },
    twitter: {
        card: 'summary_large_image',
        site: '@dreamawesome',
    },
};

export const menuItems = [
    { path: '/', name: 'Home', new: false },
    { path: '/builder', name: 'Builder', new: false },
    { path: '/teams', name: 'Teams', new: true },
];

export const footerItems = {
    resources: [
        { path: '/', name: 'Documentation', internal: true },
        { path: '/', name: 'Support', internal: true },
        { path: '/', name: 'Contact Us', internal: true },
    ],
    legal: [
        { name: 'Privacy Policy', path: '/privacy', internal: true },
        { name: 'Cookies', path: '/cookies', internal: true },
        { name: 'Terms of Service', path: '/terms', internal: true },
    ],
    app: [
        { name: 'Home', path: '/', internal: true },
        { name: 'Builder', path: '/builder', internal: true },
        { name: 'Teams', path: '/teams', internal: true },
    ],
};
