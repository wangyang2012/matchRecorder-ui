
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerListComponentComponent} from './player-list-component/player-list-component.component';
import {MatchListComponentComponent} from './match-list-component/match-list-component.component';

const routes: Routes = [
    { path: 'player-list', component: PlayerListComponentComponent },
    { path: 'match-list', component: MatchListComponentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
