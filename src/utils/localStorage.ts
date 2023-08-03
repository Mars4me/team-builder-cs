type LocalStorageData = [] | [[], []] | [string[], string[]] | string[];
type LocalStorageReturnData = string | null;
type InitTeamsReturnData = [string[], string[]] | [[], []];
type InitPlayersReturnData = [] | string[];
export class LocalStorageService {
    static initPlayers(): InitPlayersReturnData {
        const item = this.getItemFromLocalStorage('playerList');

        return item ? JSON.parse(item) : [];
    }

    static initTeams(): InitTeamsReturnData {
        const item = this.getItemFromLocalStorage('teams');

        return item ? JSON.parse(item) : [[], []];
    }

    static setPlayers(players: string[]) {
        this.setItemToLocalStorage('playerList', players);
    }

    static setTeams(teams: [string[], string[]]) {
        this.setItemToLocalStorage('teams', teams);
    }

    private static getItemFromLocalStorage(key: string): LocalStorageReturnData {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(key);
        }
        return null;
    }

    private static setItemToLocalStorage(key: string, data: LocalStorageData) {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(data));
        }
    }
}
