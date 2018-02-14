import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  public availablePlayers: Array<Player> = [];
  public selectedPlayers: Array<Player> = [];
  public MAXSIZE: number = 2;


  constructor(public playerService: PlayerService) {

  }

  ngOnInit() {
    this.getAvailablePlayers();
    this.selectedPlayers = this.availablePlayers.filter(p => p.active == true);
  }

  /**
   * When the player is selected, we are going to make them active so they cannot be used again
   * @param p 
   */
  playerSelected(p: Player): void {
    if(this.selectedPlayers.length < this.MAXSIZE){
    this.playerService.togglePlayerActive(p.playerID);
    this.getAvailablePlayers();
    this.selectedPlayers = this.availablePlayers.filter(p => p.active == true);
    }
  }

  removePlayer(p: Player): void {
    this.playerService.togglePlayerActive(p.playerID);
    this.getAvailablePlayers();
    let newPlayerArray = this.selectedPlayers.filter(player => player.playerID != p.playerID);
    this.selectedPlayers = newPlayerArray;
  }


  getAvailablePlayers(): void {
    this.availablePlayers = this.playerService.getPlayers();
  }

}
