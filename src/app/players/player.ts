export class Player {
    private name: string;
    private gamesWon: number;
    private id: string;

    constructor(name: string, gamesWon: number, id: string){
        this.name = name;
        this.gamesWon = gamesWon;
        this.id = id;
    }

    public get playerName():string {
        return this.name;
    }

    public get PlayerID(): string {
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