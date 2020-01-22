import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CommonModule } from '@angular/common';
import { CharactersService } from './services/characters.service';

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
  ],
  providers: [CharactersService],
})
export class CharactersModule { }
