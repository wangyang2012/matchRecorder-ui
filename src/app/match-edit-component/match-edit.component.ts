import { Component, OnInit } from '@angular/core';
import {Match} from '../model/match';
import {MatchService} from '../service/match.service';
import {Player} from '../model/player';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../service/player.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-match-edit-component',
  templateUrl: './match-edit.component.html',
  styleUrls: ['./match-edit.component.css']
})
export class MatchEditComponent implements OnInit {
  private allPlayers: Player[];
  private playersToFight: Player[];
  private matchForm = new FormGroup({
      player1: new FormControl(''),
      player2: new FormControl(''),
      score1: new FormControl(''),
      score2: new FormControl(''),
      subScore11: new FormControl(''),
      subScore12: new FormControl(''),
      subScore13: new FormControl(''),
      subScore14: new FormControl(''),
      subScore15: new FormControl(''),
      subScore21: new FormControl(''),
      subScore22: new FormControl(''),
      subScore23: new FormControl(''),
      subScore24: new FormControl(''),
      subScore25: new FormControl('')
  });

  constructor(private matchService: MatchService, private playerService: PlayerService/*, private route: ActivatedRoute*/) {
  }

  ngOnInit() {
      // this.route.params.subscribe(params => {
      //     this.idMatch = params['idMatch'];
      //     if (this.idMatch != null) {
      //         this.matchService.getMatch(this.idMatch).subscribe(response => {
      //             this.match = response;
      //         });
      //     }
      // });

      this.playerService.getPlayerList().subscribe(response => {
          this.allPlayers = response;
          this.playersToFight = response;
      });
  }

  private save() {
      this.matchService.saveMatch(this.matchForm.getRawValue()).subscribe(response => {
          confirm('OK');
      });
  }

    showPlayerName(player?: Player) {
      return player ? player.name : '';
    }

    onPlayer1Selected() {
      console.log(JSON.stringify(this.matchForm.get('player1').value));
      this.playerService.findPlayersToFight(this.matchForm.get('player1').value.id).subscribe(response => {
          this.playersToFight = response;
      })
    }

}
