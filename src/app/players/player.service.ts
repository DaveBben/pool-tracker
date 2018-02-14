/**
 * The Player service handles all the interactions between the games component and the player data.
 */
import { Injectable } from '@angular/core';
import { Player } from './player';
import * as randomProfile from 'random-profile-generator';

@Injectable()
export class PlayerService {

    private gamePlayers: Array<Player> = [];

    constructor() {
        this.gamePlayers = this.retrieveFromDisk();
    }

    /**
     * Gets a GUID for the player
     */
    private getRandomID(): string {
        return randomProfile.guid();
    }

    private saveToDisk(players: Array<Player>): void {
        localStorage.setItem('players', JSON.stringify(players));
    }

    /**
     * Retrieves the players (if any) from local storage
     */
    private retrieveFromDisk(): Array<Player> {
        let playerArray = [];
        if (localStorage.getItem('players')) {
            let tempArray = JSON.parse(localStorage.getItem('players'));
            playerArray = tempArray.map(p => this.deserialize(p));
        }
        return playerArray.concat();

    }

    /**
     * Creates the player object from the JSON
     * @param p  - any object from the array of json data
     */
    private deserialize(p: object): Player {
        const player = new Player(p['_name'], p['_id']);
        player.active = p['_active'];
        player.gamesWon(p['_gamesWon']);
        return player;

    }

    /**
     * Adds player
     * @param  name - player name
     */
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

    /**
     * Determines whether or not the player is involved in an active game.
     * @param id 
     */
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

    
/**
 * Gets the name of the player who won the game.
 * @param id 
 */
    public gameWonByPlayer(id: string): void {
        let newArray = this.gamePlayers.map(p => {
            if (p.playerID == id) {
                p.winGame();
            }
            return p;
        });
        this.gamePlayers = newArray;
      
        this.saveToDisk(this.gamePlayers);
    }

    // public resetGame(): void {
    //     let nullPlayers = [];
    //     this.gamePlayers = nullPlayers;
    //     this.saveToDisk(this.gamePlayers);
    // }

    /**
     * Returns the player by their score in ascending order
     */
    public getPlayersByScore(): Array<Player> {
        let players = this.gamePlayers.concat();
        players.sort(function (a, b) {
            return a.wins - b.wins;
        });
      
        return players.reverse();
    }

    /**
     * Takes all the active players and chooses one to win. This is purely done by a random number
     */
    public playGame(): string{
        let activePlayers = this.gamePlayers.filter(p => p.active == true);
        if(activePlayers.length > 1){
            let num =  Math.floor(Math.random() * (activePlayers.length-1 - 0 + 1)) + 0;
            let winner = activePlayers[num].playerID
            this.gameWonByPlayer(winner);
            return activePlayers[num].playerName;
        }else{
            return null;
        }
    }



}