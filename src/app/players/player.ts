export class Player {
    private _name: string;
    private _gamesWon: number;
    private _id: string;
    private _active: boolean;

    constructor(name: string, id: string){
        this._name = name;
        this._gamesWon = 0;
        this._id = id;
        this._active = false;
    }

    public get active(): boolean {
        return this._active;
    }

    public set active(value: boolean){
        this._active = value;
    }

    public get playerName():string {
        return this._name;
    }

    public get playerID(): string {
        return this._id;
    }

    public get wins(): number {
        return this._gamesWon;
    }


    public set wins(amount: number){
        this._gamesWon += amount;
    }

}