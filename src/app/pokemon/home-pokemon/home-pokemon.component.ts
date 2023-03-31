import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-home-pokemon',
  templateUrl: './home-pokemon.component.html',
  styles: [
  ]
})
export class HomePokemonComponent {
  
  pokemonArray: Pokemon[] = [];
  length: number = 6;

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void{
    // this.pokemonService.loadPokemons().subscribe(l => {
    //   this.pokemonArray = this.pokemonService.getRandomPokemonArray(l, this.length);
    // });
    this.pokemonArray = this.pokemonService.getRandomPokemonArray(this.length);
  }

  showOnePokemon(p: Pokemon): void {
    this.router.navigate(['/pokemon', p.id]);
  }
}
