import { Component, OnInit } from '@angular/core';
/**
 * The manage component allows the user to add and remove players.
 */
import {PlayerService} from '../players/player.service';
import { Player } from '../players/player';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  public playerList: Array<Player> = [];
  public playerName: string;

  constructor(public playerService: PlayerService) { }

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
    this.playerService.removePlayer(p.playerID);
    this.getPlayers();
  }

  getPlayers(){
    this.playerList = this.playerService.getPlayers();
  }

}
