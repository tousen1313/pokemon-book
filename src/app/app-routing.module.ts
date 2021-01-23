import { NgModule } from '@angular/core';
import { Routes,RouterModule, Router } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PokemonListComponent
  },
  {
    path: ':id',
    component: PokemonDetailComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
