import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONARRAY } from '../mock-pokemon-array';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemonArray: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    // this.pokemonService.loadPokemons().subscribe(list => 
    //   this.pokemonArray = this.pokemonService.getRandomPokemonArray(list, POKEMONARRAY.length));
    this.pokemonArray = this.pokemonService.getRandomPokemonArray(POKEMONARRAY.length)
  }

  showOnePokemon(p: Pokemon): void {
    this.router.navigate(['/pokemon', p.id]);
  }
}
