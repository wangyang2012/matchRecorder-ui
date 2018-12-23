import { Component, OnInit } from '@angular/core';
import {Match} from '../model/match';
import {MatchService} from '../service/match.service';

@Component({
  selector: 'app-match-list-component',
  templateUrl: './match-list-component.component.html',
  styleUrls: ['./match-list-component.component.css']
})
export class MatchListComponentComponent implements OnInit {

  private matchList: Match[];
  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getMatchList().subscribe(response => {
      this.matchList = response;
    });
  }

}
