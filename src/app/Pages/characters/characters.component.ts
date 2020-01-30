import { Component, OnInit } from '@angular/core';
import {CharactersService} from './services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters$;
  constructor(private charactersService: CharactersService) {
  }

  ngOnInit() {
    this.characters$ = this.charactersService.getCharacters();
  }

}


// .subscribe(res =>{
//   this.characters = res;
// });
