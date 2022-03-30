import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClubCardComponent } from './club-card/club-card.component';
import { ClubListComponent } from './club-list/club-list.component';
import { ClubCardButtonComponent } from './club-card-button/club-card-button.component';

@NgModule({
  declarations: [AppComponent, ClubCardComponent, ClubListComponent, ClubCardButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
