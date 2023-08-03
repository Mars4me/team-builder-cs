'use client';

import { LocalStorageService } from '@/utils/localStorage';
import { teamShuffler } from '@/utils/teamShuffler';
import Image from 'next/image';
import Link from 'next/link';
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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newPlayerList = playerList.concat(value);

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
    };
    return (
        <>
            <form className="justify-between block w-full p-2 sm:flex sm:p-10" onSubmit={handleSubmit}>
                <h2 className="mx-2 my-4 text-4xl text-center sm:text-left">Players - {playersCounter} </h2>
                <input
                    type="text"
                    placeholder="add new player"
                    className="w-full p-2 text-2xl bg-white border border-transparent rounded-lg dark:text-white md:p-4 md:w-fit dark:bg-neutral-500"
                    value={value}
                    onChange={(event) => setValue(event?.target.value)}
                />
            </form>

            <div className="grid w-full pt-8 pb-6 mt-4 text-center border-gray-300 md:mt-0 lg:mb-0 sm:w-fit sm:grid-cols-3 lg:grid-cols-5 lg:text-left bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                {playerList.map((player, index) => (
                    <button
                        className="px-5 py-4 transition-colors border border-transparent rounded-lg cursor-pointer group hover:border-gray-300 hover:bg-red-100 hover:dark:border-neutral-700 hover:dark:bg-red-800/30"
                        key={player + index}
                        onClick={() => handleDeletePlayer(player)}
                    >
                        {player}
                    </button>
                ))}
            </div>

            <Link
                onClick={handleShuffle}
                href="/teams"
                className="px-5 py-4 m-2 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Shuffle{' '}
                    <Image
                        className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                        src="/shuffle.svg"
                        alt="shuffle"
                        width={24}
                        height={24}
                        priority
                    />
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Divide the players into two teams</p>
            </Link>
        </>
    );
}
