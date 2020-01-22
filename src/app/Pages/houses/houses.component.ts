import { Component, OnInit } from '@angular/core';
import {HousesService} from './services/houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.sass']
})
export class HousesComponent implements OnInit {

  constructor(private HousesService: HousesService) {}

  ngOnInit() {
    this.HousesService.getHouses().subscribe(resultHouses => {
      console.log('result', resultHouses);
    });
  }
}
