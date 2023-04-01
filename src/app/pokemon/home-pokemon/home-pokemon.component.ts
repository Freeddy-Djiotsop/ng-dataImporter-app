import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-home-pokemon',
  template: `
    <app-loader *ngIf="!pokemonArray"></app-loader>
    <app-pokemon-card 
      *ngIf="pokemonArray" 
      [pokemonArray]="pokemonArray" 
      [msg]="msg"
      [onPokemons]="false"
      color="red"
      class="m-5"
    ></app-pokemon-card>
  `,
  styles: [
  ]
})
export class HomePokemonComponent {
  
  pokemonArray: Pokemon[];
  length: number;
  msg: string; 

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void{
    this.length = 6;
    this.msg = "You're Welcome";
    this.pokemonArray = this.pokemonService.getRandomPokemonArray(this.length);
  }
}
