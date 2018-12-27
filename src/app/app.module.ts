import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerListComponentComponent } from './player-list-component/player-list-component.component';
import {PlayerService} from './service/player.service';
import { PlayerEditComponentComponent } from './player-edit-component/player-edit-component.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { MatchListComponentComponent } from './match-list-component/match-list-component.component';
import {MatchService} from './service/match.service';
import {MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponentComponent,
    PlayerEditComponentComponent,
    MatchListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [PlayerService, MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
