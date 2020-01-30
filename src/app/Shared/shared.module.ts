import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SearchComponent } from './components/search/search.component';
import { CharactersDetailComponent } from './components/characters-detail/characters-detail.component';


const COMPONENTS = [
  NavComponent,
  SpinnerComponent,
  SearchComponent,
  CharactersDetailComponent
]


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
  ],

  exports: [...COMPONENTS]
})

export class SharedModule { }
