import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { POKEMONARRAY } from './mock-pokemon-array';
import { Pokemon } from './pokemon';

@Injectable(
  //Si on ne veut pas que notre Service soit disponible ds tte l'app,
  // Alors on l'ajoute slm dans .module.ts dans providers coe fait ds pokemon.module.ts
  // {providedIn: 'root'} 
  )
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }
  

  private loadPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemons) => {}),
      catchError((err) => this.handleError(err, []))
    );
  }
  loadOnePokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>('api/pokemons/' + id).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((err) => this.handleError(err, undefined))
    );
  }

  searchPokemons(term: string): Observable<Pokemon[]> {
    if(term.length < 2){
      return of([]);
    }
    return this.http.get<Pokemon[]>('api/pokemons/?name=' + term).pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, null))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, null))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon|undefined> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    pokemon.modifiedAt = new Date();
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, null))
    );
  }

  deletePokemonById(id: number): Observable<Pokemon> {
    return this.http.delete<Pokemon>('api/pokemons/' + id).pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, null))
    );
  }
  private log(res: any): void {
    console.log(res);
  }
  private handleError(err: Error, value: any): Observable<any> {
    console.log(err);
    return of(value);
  }

  getRandomPokemonArray(length: number): Pokemon[] {

    const arr : number[] = [];
    const tmp: Pokemon[] = [];

    this.loadPokemons().subscribe(list =>{
      while (arr.length < length) {
        let num = Math.floor(Math.random() * list.length);
        if (!arr.includes(num)) {
          arr.push(num);
        }
      }
      arr.forEach( id => tmp.push( list[id] ));
    });    

    return tmp;
  }

  getTypes(): string[] {
    const types: string[] = [];
    this.loadPokemons().subscribe(list => {
      list.forEach(p => {
        p.types.forEach( t => {
          if(!types.includes(t)){
            types.push(t);
          }
        });
      });
    });
    
    return types;
  }
}