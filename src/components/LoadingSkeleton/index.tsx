import React from 'react';

const LoadingSceleton = () => {
    return (
        <div role="status" className="w-full p-4 animate-pulse sm:p-10">
            <div className="h-2.5 bg-slate-300 rounded-full dark:bg-gray-700 mb-4" />
            <div className="h-2 bg-slate-300 rounded-full dark:bg-gray-700  mb-2.5" />
            <div className="h-2 bg-slate-300 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-slate-300 rounded-full dark:bg-gray-700  mb-2.5" />
            <div className="h-2 bg-slate-300 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-slate-300 rounded-full dark:bg-gray-700  mb-2.5" />
            <div className="h-2 bg-slate-300 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-slate-300 rounded-full dark:bg-gray-700  mb-2.5" />
            <div className="h-2 bg-slate-300 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-slate-300 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-slate-300 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 rounded-full bg-slate-300 dark:bg-gray-700 " />
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default LoadingSceleton;
