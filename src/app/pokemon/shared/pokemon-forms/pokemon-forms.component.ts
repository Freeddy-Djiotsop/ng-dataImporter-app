import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIdata, Pokemon } from '../../pokemon';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-forms',
  templateUrl: './pokemon-forms.component.html',
  styleUrls: ['./pokemon-forms.component.css']
})
export class PokemonFormsComponent implements OnInit {

  types: string[];
  @Input() msg: string;
  @Input() pokemon: Pokemon;
  isAddForm: boolean;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.types = this.pokemonService.getTypes();
    console.log(this.router.url);
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: string): boolean{
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string): void {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    
    if(!isChecked) {
      const i: number = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(i,1);
    } else {
      this.pokemon.types.push(type);
    }    
  }

  onSubmit(): void {
    if(this.isAddForm) {
      console.log(this.pokemon)
      this.pokemonService.addPokemon(this.pokemon)
      .subscribe((apidata: APIdata) => this.router.navigate(['/peokemons', apidata.data[0].id]));
    } else {
      this.pokemonService.updatePokemon(this.pokemon)
      .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
    }
    
  }

  isTypesValid(type: string): boolean {

    if(this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }
    if(this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

}

