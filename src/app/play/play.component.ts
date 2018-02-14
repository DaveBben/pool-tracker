import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../players/player.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  public winner: String;

  constructor(public playerService: PlayerService) { }

  /**
   * Gets the winner on init. Yes, technically there should probably be more checks involved.
   */
  ngOnInit() {
    this.winner = this.playerService.playGame();
  }

}
