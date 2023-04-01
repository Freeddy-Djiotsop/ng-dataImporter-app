import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  template: `
  <app-pokemon-form [pokemon]="pokemon" [msg]="msg"></app-pokemon-form>
`,
  styles: [
  ]
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;
  msg: string;

  ngOnInit(): void {
      this.pokemon = new Pokemon();
      this.msg = "You can add one Pokemon";
  }
}
