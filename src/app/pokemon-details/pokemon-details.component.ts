import { IPokemon } from './../Pokemons/Pokemon';
import { GetPokemonListService } from './../get-pokemon-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon = {} as IPokemon;
  error:any;

  constructor(private activatedRoute:ActivatedRoute,private PLS:GetPokemonListService) { }

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(){
    const pokemonId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.PLS.getMenu().subscribe(data =>{
      this.pokemon =  data[pokemonId-1];
    });
  }
}
