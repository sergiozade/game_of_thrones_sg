import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  useLanguage(language: string) {
    this.translate.use(language);
}

}
