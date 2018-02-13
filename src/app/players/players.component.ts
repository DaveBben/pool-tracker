import { Component, OnInit } from '@angular/core';
import {Player} from './player';
import {PlayerService} from './player.service';
import {SamplePlayer} from './samplePlayer';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  private samplePlayers: Array<SamplePlayer> = [];
  private selectedPlayers: Array<SamplePlayer> = [];


  constructor(private playerService: PlayerService) { 
   
  }

  ngOnInit() {
    this.createSamplePlayers();
  }

  playerSelected(p: SamplePlayer): void{
    p.toggleSelected();
    this.selectedPlayers = this.samplePlayers.filter(p => p.isSelected() == true);
  }

  removePlayer(p: SamplePlayer): void{
    p.toggleSelected();
    let newPlayerArray = this.selectedPlayers.filter(player => player.id != p.id);
    this.selectedPlayers = newPlayerArray;
  }

  playGame(){
    this.selectedPlayers.map(p => this.playerService.addPlayer(p.name,p.id));
  }

  createSamplePlayers(): void{
    for(let i = 0; i< 6; i++){
      this.samplePlayers[i] = new SamplePlayer();
    }
  }

}
