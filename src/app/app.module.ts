import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list-component/player-list.component';
import {PlayerService} from './service/player.service';
import { PlayerEditComponent } from './player-edit-component/player-edit.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MatchDetailDialogComponent, MatchListComponent} from './match-list-component/match-list.component';
import {MatchService} from './service/match.service';
import {
    MatAutocompleteModule, MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatchEditComponent} from './match-edit-component/match-edit.component';
import {MatchDetailComponent} from './match-detail-component/match-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerEditComponent,
    MatchListComponent,
    MatchEditComponent,
    MatchDetailComponent,
    MatchDetailDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  entryComponents: [MatchDetailDialogComponent],
  providers: [PlayerService, MatchService, MatchDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
