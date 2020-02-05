import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses.component';
import { CommonModule } from '@angular/common';
import { HousesDetailComponent } from './pages/houses-detail/houses-detail.component';

@NgModule({
  declarations: [
    HousesComponent,
    HousesDetailComponent
  ],
  imports: [
    CommonModule,
    HousesRoutingModule,
  ],
  providers: [],
})
export class HousesModule { }
