import {Component, Inject, Input, OnInit} from '@angular/core';
import {Match} from '../model/match';
import {MatchService} from '../service/match.service';
import {Player} from '../model/player';
import {ActivatedRoute} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-match-detail-component',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

    @Input()
    public match: Match;

    constructor() { }

    ngOnInit() {
        console.log('detail: ' + JSON.stringify(this.match));
    }
}
