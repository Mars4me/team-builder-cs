'use client';

import ShuffleIcon from '@/UI/ShuffleIcon';
import Stack from '@/UI/Stack';
import { StackItem } from '@/UI/Stack/StackItem';
import { LocalStorageService } from '@/utils/localStorage';
import { teamShuffler } from '@/utils/teamShuffler';
import { useRouter } from 'next/navigation';
import { useState, FormEvent, useMemo } from 'react';

const mockPlayerList: Array<string> = [
    'Артур',
    'Андрій',
    'Богдан',
    'Віталік',
    'Діма Svitlova',
    'Діма Proton',
    'Діма psyho',
    'Саша Ninja',
    'Саша daddy',
    'Сірьожа Cappy',
    'Максім',
    'Ярослав',
];

export default function BuilderPage() {
    const [playerList, setPlayerList] = useState<Array<string>>(() =>
        LocalStorageService.initPlayers()[0] ? LocalStorageService.initPlayers() : mockPlayerList
    );
    const [value, setValue] = useState('');
    const playersCounter = useMemo(() => playerList.length, [playerList]);
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value === '') {
            return;
        }

        const prepearedString = value.length >= 35 ? value.slice(0, 35) + '...' : value;

        const newPlayerList = playerList.concat(prepearedString);

        setPlayerList(newPlayerList);
        LocalStorageService.setPlayers(newPlayerList);
        setValue('');
    };

    const handleDeletePlayer = (player: string) => {
        const newPlayerList = playerList.filter((e) => e !== player);
        setPlayerList(newPlayerList);
        LocalStorageService.setPlayers(newPlayerList);
    };

    const handleShuffle = () => {
        LocalStorageService.setTeams(teamShuffler(playerList));
        router.push('teams');
    };
    return (
        <>
            <form className="justify-between block w-full p-4 sm:flex sm:p-10" onSubmit={handleSubmit}>
                <h2 className="mx-2 my-4 text-4xl text-center">Players - {playersCounter} </h2>
                <input
                    type="text"
                    placeholder="add new player"
                    className="w-full p-4 text-2xl bg-white border border-transparent rounded-lg dark:text-white sm:w-fit dark:bg-transparent hover:bg-cyan-100 hover:dark:bg-neutral-800/30 animate-pulse animate-delay-1000 animate focus:dark:bg-neutral-800/30"
                    value={value}
                    onChange={(event) => setValue(event?.target.value)}
                />
            </form>

            <div className="-z-10 absolute top-0 sm:top-[8%] left-0 sm:left-[35%] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] " />

            <Stack>
                {playerList.map((player, index) => (
                    <StackItem
                        key={player + ' ' + index}
                        playerName={player}
                        index={index}
                        onClick={() => handleDeletePlayer(player)}
                    />
                ))}
            </Stack>

            <button
                onClick={handleShuffle}
                className="px-5 py-4 m-2 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2
                    className={`mb-3 text-2xl font-semibold flex gap-2 items-center justify-center sm:justify-normal`}
                >
                    Shuffle <ShuffleIcon width={24} height={24} className="dark:fill-white" />{' '}
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Divide the players into two teams</p>
            </button>
        </>
    );
}
