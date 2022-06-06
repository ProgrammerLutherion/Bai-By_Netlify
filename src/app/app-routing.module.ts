import { PokemonlistComponentComponent } from './pokemonlist-component/pokemonlist-component.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'pokemonList',pathMatch:'full'},
  {path: 'pokemonList', component: PokemonlistComponentComponent,data :{}},
  {path: 'pokemonDetail/:id', component: PokemonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
