import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CharactersModule } from './pages/characters/characters.module';
// import { TimelineModule} from './pages/timeline/timeline.module';
// import { HousesModule} from './pages/houses/houses.module';

const routes: Routes = [
  { path:  '',
  loadChildren: () =>
  import('./pages/home/home.module').then(m => m.HomeModule)},

  { path:  'houses',
  loadChildren: () =>
  import('./pages/houses/houses.module').then(m => m.HousesModule)},

  { path:  'characters',
  loadChildren: () =>
  import('./pages/characters/characters.module').then(m => m.CharactersModule)},

  { path:  'timeline',
   loadChildren: () =>
   import('./pages/timeline/timeline.module').then(m => m.TimelineModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






// { path:  'characters', component: CharactersComponent},
