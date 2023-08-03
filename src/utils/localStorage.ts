type LocalStorageData = [] |  [[],[]] | 
export class LocalStorageService {
    static initPlayers() {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem('playerList') || '[]');
        }

        return [];
    }

    static initTeams() {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem('teams') || '[[],[]]');
        }
        return [[], []];
    }

    static setPlayers(players: Array<string>) {
        if (typeof window !== 'undefined') {
            localStorage.setItem('playerList', JSON.stringify(players));
        }
    }

    static setTeams(teams: [string[], string[]]) {
        if (typeof window !== 'undefined') {
            localStorage.setItem('teams', JSON.stringify(teams));
        }
    }

    private static getItemFromLocalStorage(key: string) {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(key);
        }
        return null;
    }

    private static setItemToLocalStorage(key: string, data: LocalStorageUnits) {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(data));
        }
    }
}
