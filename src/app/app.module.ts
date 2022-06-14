import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponentComponent } from './title-component/title-component.component';
import { GetPokemonListService } from './get-pokemon-list.service';
import { PokemonlistComponentComponent } from './pokemonlist-component/pokemonlist-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    TitleComponentComponent,
    PokemonlistComponentComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    GetPokemonListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
