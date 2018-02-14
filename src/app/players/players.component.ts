import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PlayerService } from './player.service';
import { SamplePlayer } from './samplePlayer';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  private availablePlayers: Array<Player> = [];
  private selectedPlayers: Array<Player> = [];


  constructor(private playerService: PlayerService) {

  }

  ngOnInit() {
    this.getAvailablePlayers();
    this.selectedPlayers = this.availablePlayers.filter(p => p.active == true);
  }

  playerSelected(p: Player): void {
    this.playerService.togglePlayerActive(p.playerID);
    this.getAvailablePlayers();
    this.selectedPlayers = this.availablePlayers.filter(p => p.active == true);
  }

  removePlayer(p: Player): void {
    this.playerService.togglePlayerActive(p.playerID);
    this.getAvailablePlayers();
    let newPlayerArray = this.selectedPlayers.filter(player => player.playerID != p.playerID);
    this.selectedPlayers = newPlayerArray;
  }

  playGame() {
    
  }

  getAvailablePlayers(): void {
    this.availablePlayers = this.playerService.getPlayers();
  }

}
