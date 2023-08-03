export const teamShuffler = (listOfPlayers: string[]): [string[], string[]] => {
    const firstTeam: string[] = [];

    const randomNumbers = randomize(listOfPlayers.length);
    randomNumbers.forEach((number) => firstTeam.push(listOfPlayers[number]));

    const secondTeam: string[] = listOfPlayers.filter((_, index) => !randomNumbers.includes(index));

    return [firstTeam, secondTeam];
};

export const copyToClipboard = (teams: [string[], string[]]): void => {
    navigator.clipboard.writeText(
        `First team: \n${teams[0].join('\n')}\n\nSecond team: \n${teams[1].join('\n')}`
    );
};

export const changePlayerInTeam = (teams: [string[], string[]], playerName: string): [string[], string[]] => {
    let teamOne = teams[0];
    let teamTwo = teams[1];

    if (teamOne.includes(playerName)) {
        teamOne = changer(teamOne, teamTwo, playerName);
    } else {
        teamTwo = changer(teamTwo, teamOne, playerName);
    }

    return [teamOne, teamTwo];
};

const changer = (fromTeam: string[], toTeam: string[], playerName: string) => {
    const random = Math.floor(Math.random() * fromTeam.length);
    const changedElement = toTeam.splice(random, 1, playerName)[0];
    return fromTeam.map((el) => (el === playerName ? changedElement : el));
};

const randomize = (max: number) => {
    const result: number[] = [];

    while (result.length !== Math.round(max / 2)) {
        const randomValue = Math.floor(Math.random() * max);
        if (!result.includes(randomValue)) {
            result.push(randomValue);
        }
    }

    return result;
};
