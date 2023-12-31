'use client';

import { CustomLink } from '@/components';
import React, { useEffect, useState } from 'react';
import { LocalStorageService } from '@/utils/localStorage';
import { changePlayerInTeam, copyToClipboard, teamShuffler } from '@/utils/teamShuffler';
import Stack from '@/UI/Stack';
import { StackItem } from '@/UI/Stack/StackItem';

export default function Teams() {
    const [teams, setTeams] = useState<[string[], string[]]>(() => LocalStorageService.initTeams());
    const [showNotification, setShowNotification] = useState(false);

    const handlePlayerShuffle = (playerName: string) => {
        const result = changePlayerInTeam(teams, playerName);
        LocalStorageService.setTeams(result);
        setTeams(result);
    };

    const handleCopyToCb = () => {
        copyToClipboard(teams);
        setShowNotification(true);
    };

    const shufflePlayers = () => {
        LocalStorageService.setTeams(teamShuffler(teams.flat()));

        setTeams(LocalStorageService.initTeams());
    };

    useEffect(() => {
        let timeout: any = null;
        if (showNotification) {
            timeout = setTimeout(() => {
                setShowNotification(false);
            }, 2000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [showNotification]);

    if (teams[0].length === 0) {
        return (
            <>
                <p className="my-8 text-3xl"> You should shuffle the players</p>
                <CustomLink
                    title="Build team"
                    description="Open team builder. Fill the list and divide players via teams."
                    href="/builder"
                />
            </>
        );
    }

    return (
        <>
            <button
                className="px-24 py-4 my-4 text-2xl font-semibold border rounded-lg sm:my-10 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:bg-slate-200 hover:border-gray-200 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-200"
                onClick={handleCopyToCb}
            >
                Copy
            </button>

            <div className="-z-10 absolute top-0 sm:top-[8%] left-0 sm:left-[35%] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] " />

            <section className="flex flex-col w-full gap-10 p-1 sm:gap-2 sm:w-fit drop-shadow-lg lg:gap-4 sm:mb-6">
                <Stack>
                    {teams[0].map((playerName, index) => (
                        <StackItem
                            key={playerName + index}
                            playerName={playerName}
                            index={index}
                            onClick={() => handlePlayerShuffle(playerName)}
                        />
                    ))}
                </Stack>

                <Stack>
                    {teams[1].map((playerName, index) => (
                        <StackItem
                            key={playerName + index}
                            playerName={playerName}
                            index={index}
                            onClick={() => handlePlayerShuffle(playerName)}
                        />
                    ))}
                </Stack>
            </section>

            {showNotification && (
                <div
                    className="fixed flex top-[10%] ems-center px-4 py-3 text-sm font-bold text-white bg-slate-500 top--10 animate-jump-in"
                    role="alert"
                >
                    <svg
                        className="w-4 h-4 mr-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                    </svg>
                    <p>Teams copied to clipboard</p>
                </div>
            )}

            <button
                onClick={shufflePlayers}
                className="px-5 py-4 my-4 mt-6 transition-colors border border-transparent rounded-lg dark:border-white sm:mt-2 group hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className={` text-2xl font-semibold`}>Shuffle Again </h2>
            </button>
        </>
    );
}
