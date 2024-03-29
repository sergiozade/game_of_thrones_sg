import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule
  ],
  providers: [],
})
export class HomeModule { }
