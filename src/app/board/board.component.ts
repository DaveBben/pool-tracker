import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../players/player.service';
import { Player } from '../players/player';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public playerList: Array<Player> = [];

  constructor(public playerService: PlayerService) { }

  ngOnInit() {
    this.playerList = this.playerService.getPlayersByScore();
  }

}
