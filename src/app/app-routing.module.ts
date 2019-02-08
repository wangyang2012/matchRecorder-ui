import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerListComponent} from './player-list-component/player-list.component';
import {MatchListComponent} from './match-list-component/match-list.component';
import {MatchEditComponent} from './match-edit-component/match-edit.component';
import {PlayerEditComponent} from './player-edit-component/player-edit.component';

const routes: Routes = [
    { path: '', redirectTo: '/player-list', pathMatch: 'full' },
    { path: 'player-list', component: PlayerListComponent },
    { path: 'player-edit', component: PlayerEditComponent },
    { path: 'match-list', component: MatchListComponent },
    { path: 'match-edit', component: MatchEditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
