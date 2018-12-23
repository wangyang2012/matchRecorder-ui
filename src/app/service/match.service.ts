import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Match} from '../model/match';

@Injectable()
export class MatchService {
  private url = 'http://localhost:8080/match/';
  constructor(private http: HttpClient) { }

  public getMatchList():  Observable<Array<Match>> {
    return this.http.get<Match[]>(this.url);
  }
}
