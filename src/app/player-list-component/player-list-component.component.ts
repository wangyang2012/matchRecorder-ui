import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../service/player.service';
import {Player} from '../model/player';

@Component({
  selector: 'app-player-list-component',
  templateUrl: './player-list-component.component.html',
  styleUrls: ['./player-list-component.component.css']
})
export class PlayerListComponentComponent implements OnInit {

  private playerList: Player[] = [];
  private player: string;

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
