import { Injectable } from '@angular/core';
import { Player } from './player';
import * as randomProfile from 'random-profile-generator';

@Injectable()
export class PlayerService {

    private gamePlayers: Array<Player> = [];

    constructor() {
        this.gamePlayers = this.retrieveFromDisk();
    }

    private getRandomID(): string {
        return randomProfile.guid();
    }

    private saveToDisk(players: Array<Player>): void {
        localStorage.setItem('players', JSON.stringify(players));
    }

    private retrieveFromDisk(): Array<Player> {
        let playerArray = [];
        if (localStorage.getItem('players')) {
            let tempArray = JSON.parse(localStorage.getItem('players'));
            playerArray = tempArray.map(p => this.serialize(p));
        }
        return playerArray.concat();

    }

    private serialize(p: object): Player {
        const player = new Player(p['_name'], p['_id']);
        player.active = p['_active'];
        player.wins = p['_gamesWon'];
        return player;

    }

    public addPlayer(name: string): void {
        let newArray: Array<Player> = [];
        newArray = [...this.gamePlayers, new Player(name, this.getRandomID())];
        this.gamePlayers = newArray;
        this.saveToDisk(this.gamePlayers);
    }

    public removePlayer(id: string): void {
        let newPlayerArray = this.gamePlayers.filter(p => p.playerID != id);
        this.gamePlayers = newPlayerArray;
        this.saveToDisk(this.gamePlayers);
    }

    public togglePlayerActive(id: string): void {
        let newArray = this.gamePlayers.map(p => {
            if (p.playerID == id) {
                p.active = !p.active;
            }
            return p;
        });
        this.gamePlayers = newArray;
        this.saveToDisk(this.gamePlayers);
    }

    public getPlayers(): Array<Player> {
        return this.gamePlayers.concat();
    }

    public gameWonByPlayer(id: string): void {
        this.gamePlayers.map(p => {
            if (p.playerID == id) {
                p.wins + 1;
            }
            return p;
        })
        this.saveToDisk(this.gamePlayers);
    }

    public resetGame(): void {
        let nullPlayers = [];
        this.gamePlayers = nullPlayers;
        this.saveToDisk(this.gamePlayers);
    }

    public getPlayersByScore(): Array<Player> {
        let players = this.gamePlayers.concat();
        players.sort(function (a, b) {
            return a.wins - b.wins;
        });
        return players;
    }



}