import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../service/player.service';
import {Player} from '../model/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  private playerList: Player[] = [];
  private player: string;

  displayedColumns: string[] = ['name', 'win', 'lose', 'score'];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayerList();
  }

  getPlayerList() {
    const self = this;
    this.playerService.getPlayerList().subscribe(response => {
      self.playerList = response;
    });
  }

  createPlayer() {
    this.playerService.createPlayer(this.player).subscribe(response => {
      this.getPlayerList();
    });
  }

}
