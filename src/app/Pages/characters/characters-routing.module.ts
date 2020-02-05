import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  { path:  '', component: CharactersComponent},

  { path:  ':idCharacter', //wtf ¿Dónde he utilizado ésto?
  loadChildren: () =>
  import('./pages/characters-detail/characters-detail.module').then(m => m.CharactersDetailModule)
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule {}
