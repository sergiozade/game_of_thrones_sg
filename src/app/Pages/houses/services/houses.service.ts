import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  private url = 'https://api.got.show/api/show/houses/';
  constructor(private httpclient: HttpClient) {}

  getHouses(): Observable<any> {
    return this.httpclient.get(this.url);
    }
}

/*aquí iría la llamada del navegador de houses*/
