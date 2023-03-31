import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONARRAY } from './pokemon/mock-pokemon-array';
import { Pokemon } from './pokemon/pokemon';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(): {} {
    const pokemons: Pokemon[] = POKEMONARRAY;
    return { pokemons }
  }
}
