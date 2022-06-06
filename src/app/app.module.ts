import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErikComponentComponent } from './erik-component/erik-component.component';
import { GetPokemonListService } from './get-pokemon-list.service';
import { PokemonlistComponentComponent } from './pokemonlist-component/pokemonlist-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ErikComponentComponent,
    PokemonlistComponentComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [
    GetPokemonListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
