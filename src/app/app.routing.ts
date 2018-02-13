import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';
 
export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'players', component: PlayersComponent }
];
 
export const poolRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);