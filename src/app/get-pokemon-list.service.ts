import { PokemonlistComponentComponent } from './pokemonlist-component/pokemonlist-component.component';
import { IPokemon } from './Pokemons/Pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetPokemonListService {
  public pokedex:IPokemon[];

  constructor(private http:HttpClient) {
    this.pokedex = [];
  }

  public getMenu():Observable<any>{
    return this.http.get('../assets/pokemon.json-master/pokedex.json');
 }

}
