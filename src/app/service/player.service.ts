import { Injectable } from '@angular/core';
import {Player} from '../model/player';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class PlayerService {
  private url = 'http://localhost:8080/player/';
  constructor(private http: HttpClient) { }

  public getPlayerList():  Observable<Array<Player>> {
    return this.http.get<Player[]>(this.url);
  }

  public createPlayer(player: string): Observable<Player> {
    return this.http.put<Player>(this.url, player);
  }

}
