import * as randomProfile from 'random-profile-generator';
export class Player {
    private name: string;
    private gamesWon: number;
    private id: string;

    constructor(name: string){
        this.name = name;
        this.gamesWon = 0;
        this.id = this.getRandomID();
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

    private getRandomID(): string{
        return randomProfile.guid();
    }
}