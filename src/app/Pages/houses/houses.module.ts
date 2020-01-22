import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HousesComponent
  ],
  imports: [
    CommonModule,
    HousesRoutingModule,
  ],
  providers: [],
})
export class HousesModule { }
