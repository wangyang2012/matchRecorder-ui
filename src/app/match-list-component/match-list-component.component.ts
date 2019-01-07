import { Component, OnInit } from '@angular/core';
import {Match} from '../model/match';
import {MatchService} from '../service/match.service';
import {Player} from '../model/player';

@Component({
  selector: 'app-match-list-component',
  templateUrl: './match-list-component.component.html',
  styleUrls: ['./match-list-component.component.css']
})
export class MatchListComponentComponent implements OnInit {

  private matchList: Match[] = [];
  displayedColumns: string[] = ['player1', 'player2', 'score', 'subScore1', 'subScore2', 'subScore3', 'subScore4', 'subScore5', 'matchDateTime'];
  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getMatchList().subscribe(response => {
      this.matchList = response;
    });
  }

}
