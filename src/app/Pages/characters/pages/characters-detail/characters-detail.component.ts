import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    // const name = this.route.snapshot['characterDetail'] // allParams is an object
  }

  ngOnInit() {
  }

}
