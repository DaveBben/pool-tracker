import { Injectable } from '@angular/core';
import {Player} from './player';

@Injectable()
export class PlayerService {

private gamePlayers: Array<Player> = [];

  constructor() { 
     
  }

  public addPlayer(name: string): void{
     let newArray: Array<Player> = [];
     newArray = [...this.gamePlayers, new Player(name)];
     this.gamePlayers = newArray;
  }

  public removePlayer(id: string): void {
      let newPlayerArray = this.gamePlayers.filter(p => p.PlayerID != id);
      this.gamePlayers = newPlayerArray;
  }

  public getPlayers(): Array<Player> {
      return this.gamePlayers.concat();
  }

  public gameWonByPlayer(id: string): void {
      this.gamePlayers.map(p =>{
          if(p.PlayerID == id){
                p.gameWon();
          }
          return p;
      })
  }

  public resetGame(): void {
      let nullPlayers = [];
      this.gamePlayers = nullPlayers;
  }

  public getPlayersByScore(): Array<Player> {
      let players = this.gamePlayers.concat();
      players.sort(function (a, b) {
        return a.Wins - b.Wins;
      });
      return players;
  }

  

}