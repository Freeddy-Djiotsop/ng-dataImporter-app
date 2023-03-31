import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}
  ngOnInit(): void {
      this.pokemons$ = this.searchTerms.pipe(
        debounceTime(400),//pr ke la recherche se fasse qnd il ya un intervall de 400ms attente
        distinctUntilChanged(),//pour empecher que xa fasse la mm recherche plusieurs fois
        // map((term) => this.pokemonService.searchPokemons(term)),
        switchMap((term) => this.pokemonService.searchPokemons(term)),
        //permet d'annuler la dernier requette en cours et faire cette nouvelle requette mais en plus ne renvoie pas un observable mais ce que comporte l'observable donc nos donné
      );
  }

  search(term: string){
    this.searchTerms.next(term);
  }
  goToDetail(pokemon: Pokemon){
    const link = ['/pokemon/', pokemon.id];
    this.router.navigate(link);
  }

}
