import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../players/player.service';
import { Player } from '../players/player';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  private playerList: Array<Player> = [];
  private playerName: string;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
   this.getPlayers();
  }

  addPlayer(){
    if(this.playerName){
      this.playerService.addPlayer(this.playerName);
    }
    this.playerName = null;
    this.getPlayers();
  }

  removePlayer(p: Player){
    this.playerService.removePlayer(p.PlayerID);
    this.getPlayers();
  }

  getPlayers(){
    this.playerList = this.playerService.getPlayers();
  }

}
