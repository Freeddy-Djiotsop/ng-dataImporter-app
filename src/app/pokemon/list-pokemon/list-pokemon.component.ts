import { Component, OnInit } from '@angular/core';
import { POKEMONARRAY } from '../mock-pokemon-array';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  template: `
    <app-pokemon-card 
      *ngIf="pokemonArray"
      [pokemonArray]="pokemonArray"
      [msg]="msg"
      [onPokemons]="true"
      class="m-5"
    ></app-pokemon-card>

  `,
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemonArray: Pokemon[];
  msg: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.msg = "List of Pokemons";
    this.pokemonArray = this.pokemonService.getRandomPokemonArray(POKEMONARRAY.length)
  }
}
