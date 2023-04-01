import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styles: [
  ]
})
export class PokemonCardComponent {

  constructor(private router: Router) {}

  @Input() pokemonArray: Pokemon[];
  @Input() msg: string;
  @Input() onPokemons: boolean
  @Input() color: string;

  showOnePokemon(p: Pokemon): void {
    this.router.navigate(['/pokemon', p.id]);
  }

}
