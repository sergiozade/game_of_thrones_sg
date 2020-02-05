import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersDetailComponent } from './characters-detail.component';
import { CharactersDetailRoutingModule } from './characters-detail-routing.module';



@NgModule({
  declarations: [
    CharactersDetailComponent
  ],

  imports: [
    CommonModule,
    CharactersDetailRoutingModule
  ]
  //provider[], para el servidor
})
export class CharactersDetailModule { }
