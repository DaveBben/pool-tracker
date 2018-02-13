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


  constructor(private playerService: PlayerService) { 
   
  }

  ngOnInit() {
    this.createSamplePlayers();
  }

  createSamplePlayers(){
    for(let i = 0; i< 6; i++){
      this.samplePlayers[i] = new SamplePlayer();
    }
  }

}
