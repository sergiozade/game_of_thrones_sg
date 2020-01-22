import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private url = 'https://api.got.show/api/show/characters/';
  constructor(private httpclient: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.httpclient.get(this.url);
    }


/*aquí iría la llamada del navegador de Personajes*/

}
