import {Component, OnInit} from '@angular/core';
import {Player} from '../model/player';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../service/player.service';
import {MatchService} from '../service/match.service';
import {Match} from '../model/match';

@Component({
  selector: 'app-player-edit-component',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {

  private player: Player;
  private matchList: Match[] = [];
  private playersToFight: Player[] = [];
  private displayedColumns: string[] = ['player1', 'player2', 'score', 'subScore1', 'subScore2', 'subScore3', 'subScore4', 'subScore5', 'matchDateTime'];

  constructor(private route: ActivatedRoute, private playerService: PlayerService, private matchService: MatchService) { }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
          const id = params['id'];
          console.log(JSON.stringify(params));

          this.playerService.getPlayer(id).subscribe(player => {
            this.player = player;

              this.matchService.getMatchOfPlayer(id).subscribe(matches => {
                  this.matchList = matches;
              });

              this.playerService.findPlayersToFight(id).subscribe( players => {
                  this.playersToFight = players;
              });
          });

      });
  }

}
