import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  { path:  '', component: CharactersComponent},
  // { path:  ':characterName', component: CharactersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
