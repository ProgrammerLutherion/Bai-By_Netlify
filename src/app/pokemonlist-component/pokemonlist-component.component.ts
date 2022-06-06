import { IPokemon } from './../Pokemons/Pokemon';
import { GetPokemonListService } from './../get-pokemon-list.service';
import { Component, Inject, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {MatCardModule} from '@angular/material/card';

AppComponent
@Component({
  selector: 'pokemonlist-component',
  templateUrl: './pokemonlist-component.component.html',
  styleUrls: ['./pokemonlist-component.component.css']
})
export class PokemonlistComponentComponent implements OnInit {
  public pokemonList:IPokemon[] = [];


  constructor(private PLS:GetPokemonListService) {
    this.PLS.getMenu().subscribe(async (data:any) =>{
      this.pokemonList = await data;
      console.log(this.pokemonList)
    })

  }

  ngOnInit(): void {
  }

  public getimagepath(idnumber:number){
    let zeroamount:number = 3;
    let path:string = "";

    for (zeroamount; zeroamount > idnumber.toString().length; zeroamount--) {
      path += "0";
    }
    path += idnumber+".png";
    return path;
  }

}
