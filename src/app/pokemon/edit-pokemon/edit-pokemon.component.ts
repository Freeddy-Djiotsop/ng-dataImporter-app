import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <div *ngIf="!pokemon" class="d-flex justify-content-center align-items-center vh-100">
      <h2>{{errorMsg}}</h2>
    </div>
    <app-pokemon-forms *ngIf="pokemon" [pokemon]="pokemon" [msg]="msg"></app-pokemon-forms>

  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon|undefined = undefined;
  msg: string;
  errorMsg: string;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }
  ngOnInit(): void {
    const id: string|null = this.route.snapshot.paramMap.get('id');
    this.errorMsg = "Pokemon not found, Sorry!";

    if(id) {
      this.pokemonService.loadOnePokemonById(+id).subscribe(apidata => this.pokemon = apidata.data[0]);
      this.msg = "Edit " + this.pokemon?.name;
    }
  }


}
