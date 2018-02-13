import * as randomProfile from 'random-profile-generator';
export class SamplePlayer {

    private _name: string;
    private _image: string;
    private _id: string;
    private _selected: boolean;

    constructor(){
        this._name = this.getRandomName();
        this._image = this.getRandomPhoto();
        this._id = this.getRandomUID();
        this._selected = false;
    }

    private getRandomName(): string {
        return randomProfile.name();
    }

    private getRandomPhoto(): string {
        return randomProfile.avatar();
    }

    private getRandomUID(): string {
        return randomProfile.guid();
    }

    public get name(): string {
        return this._name;
    }

    public get image(): string {
        return this._image;
    }

    public get id(): string {
        return this._id;
    }

    public toggleSelected(): void {
        this._selected = !this._selected;
    }

    public isSelected(): boolean {
        return this._selected;
    }

    
}