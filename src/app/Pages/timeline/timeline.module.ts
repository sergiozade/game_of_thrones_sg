import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule,
  ],
  providers: [],
})
export class TimelineModule { }
