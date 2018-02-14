import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {PlayComponent} from './play/play.component';
import {ManageComponent} from './manage/manage.component';
import {BoardComponent} from './board/board.component';
 
export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'play', component: PlayComponent },
    { path: 'manage', component: ManageComponent },
    { path: 'board', component: BoardComponent },
];
 
export const poolRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);