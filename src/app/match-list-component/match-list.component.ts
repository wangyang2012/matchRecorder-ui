import {Component, Inject, OnInit} from '@angular/core';
import {Match} from '../model/match';
import {MatchService} from '../service/match.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {MatchDetailComponent} from '../match-detail-component/match-detail.component';

@Component({
  selector: 'app-match-list-component',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  private matchList: Match[] = [];
  displayedColumns: string[] = ['player1', 'player2', 'score', 'subScore1', 'subScore2', 'subScore3', 'subScore4', 'subScore5', 'matchDateTime'];
  constructor(private matchService: MatchService, public dialog: MatDialog) { }

  ngOnInit() {
    this.matchService.getMatchList().subscribe(response => {
      this.matchList = response;
    });
  }

    openMatchDetail(match) {
        const dialogRef = this.dialog.open(MatchDetailDialogComponent, {
            width: '250px',
            data: match
        });
    }
}

@Component({
    selector: 'app-match-detail-dialog',
    templateUrl: './match-detail-dialog.component.html',
    styleUrls: ['./match-detail-dialog.component.css']
})
export class MatchDetailDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<MatchDetailComponent>, @Inject(MAT_DIALOG_DATA) public match: Match) { }

    ngOnInit() {
    }

    onCloseClick(): void {
        this.dialogRef.close();
    }

}
