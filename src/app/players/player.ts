export class Player {
    private name: string;
    private gamesWon: number;

    constructor(name: string, gamesWon: number){
        this.name = name;
        this.gamesWon = gamesWon;
    }

    public get playerName():string {
        return this.name;
    }
}