import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 *ngIf="!pokemon" class="center" style="font-weight: bold;"> 
      Pokemon not found, Sorry!
    </h2>

    <h2 *ngIf="pokemon" class="center" style="font-weight: bold;"> Edit {{pokemon.name}}! </h2>
    <p class="center" *ngIf="pokemon">
      <img [src]="pokemon.picture" alt="{{pokemon.name}}" >
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>

  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon|undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }
  ngOnInit(): void {
    const id: string|null = this.route.snapshot.paramMap.get('id');

    if(id) {
      this.pokemonService.loadOnePokemonById(+id).subscribe(p => this.pokemon = p);
    }
  }


}
