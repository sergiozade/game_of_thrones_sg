import { Component, OnInit } from '@angular/core';
import {HousesService} from './services/houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  houses$;

  constructor(private housesService: HousesService) {

  }

  ngOnInit() {
   this.houses$ = this.housesService.getHouses();

  }
}


// ngOnInit() {
//  this.HousesService.getHouses().subscribe(resultHouses => {
//    console.log('result', resultHouses);
//    });
