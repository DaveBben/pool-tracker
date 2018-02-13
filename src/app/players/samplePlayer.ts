import * as randomProfile from 'random-profile-generator';
export class SamplePlayer {

    private _name: string;
    private _image: string;

    constructor(){
        this._name = this.getRandomName();
        this._image = this.getRandomPhoto();
    }

    private getRandomName(): string {
        return randomProfile.name();
    }

    private getRandomPhoto(): string {
        return randomProfile.avatar();
    }

    public get name(): string {
        return this._name;
    }

    public get image(): string {
        return this._image;
    }

    
}