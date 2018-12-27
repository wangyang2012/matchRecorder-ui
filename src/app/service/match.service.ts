import { Injectable } from '@angular/core';
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
}
