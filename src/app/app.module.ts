import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { HousesComponent } from './Pages/houses/houses.component';
import { CharactersComponent } from './Pages/characters/characters.component';
import { TimelineComponent } from './Pages/timeline/timeline.component';
import { CharactersService } from './Core/characters.service';
import { NavComponent } from './Components/nav/nav.component';
import { TranslateComponent } from './Components/translate/translate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousesComponent,
    CharactersComponent,
    TimelineComponent,
    CharactersService,
    NavComponent,
    TranslateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
