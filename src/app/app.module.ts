import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { poolRouting } from './app.routing'
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {PlayerService} from './players/player.service'


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    poolRouting
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
