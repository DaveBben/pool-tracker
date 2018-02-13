export class Player {
    private name: string;
    private gamesWon: number;
    private id: number;

    constructor(name: string, gamesWon: number){
        this.name = name;
        this.gamesWon = gamesWon;
        this.id = this.getRandomID();
    }

    public get playerName():string {
        return this.name;
    }

    public get PlayerID(): number {
        return this.id;
    }

    public get Wins(): number {
        return this.gamesWon;
    }

    public gameWon(): void {
        this.gamesWon += 1;
    }

    private getRandomID(): number{
        return Math.floor(Math.random() * (1000 - 1)) + 1;
    }
}