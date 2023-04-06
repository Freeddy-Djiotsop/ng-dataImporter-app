import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {

  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private pokemonService: PokemonService
    ) {}

  ngOnInit(): void {
    let id: string|null = this.route.snapshot.paramMap.get('id');
    
    if(id){
      this.pokemonService.loadOnePokemonById(+id).subscribe(apidata => this.pokemon = apidata.data[0]);
    }
  }

  goBackToPokemons(): void {
    this.router.navigate(['/pokemons']);
  }
  editThisPokemon(p: Pokemon): void {
    this.router.navigate(['/edit/pokemon', p.id])
  }
  deleteThisPokemon(p: Pokemon): void {
    this.pokemonService.deletePokemonById(p.id).subscribe(() => {
      this.goBackToPokemons();
    });
  }

}
