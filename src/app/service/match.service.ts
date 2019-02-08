import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Match} from '../model/match';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class MatchService {
  private url = 'http://localhost:8080/match/';
  constructor(private http: HttpClient) { }

  public getMatchList():  Observable<Array<Match>> {
    return this.http.get<Match[]>(this.url);
  }

  public getMatchOfPlayer(playerId: number):  Observable<Array<Match>> {
      return this.http.get<Match[]>(this.url + playerId + '/player');
  }

  public getMatch(id: number): Observable<Match> {
    return this.http.get<Match>(this.url + id);
  }

  public saveMatch(match: Match): Observable<any> {
        console.log('putting...');
      return this.http.put(this.url, match);
    }
}
