import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { poolRouting } from './app.routing'
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {PlayerService} from './players/player.service';
import { PlayComponent } from './play/play.component';
import { MenuComponent } from './menu/menu.component';
import { ManageComponent } from './manage/manage.component'


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    HomeComponent,
    PlayComponent,
    MenuComponent,
    ManageComponent,
  ],
  imports: [
    BrowserModule,
    poolRouting
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
