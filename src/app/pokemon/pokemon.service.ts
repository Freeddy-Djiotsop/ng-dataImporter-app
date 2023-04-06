import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { POKEMONARRAY } from './mock-pokemon-array';
import { APIdata, Pokemon } from './pokemon';

@Injectable(
  //Si on ne veut pas que notre Service soit disponible ds tte l'app,
  // Alors on l'ajoute slm dans .module.ts dans providers coe fait ds pokemon.module.ts
  // {providedIn: 'root'} 
  )
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }
  

  private loadPokemons(): Observable<APIdata> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemons) => {}),
      catchError((err) => this.handleError(err, []))
    );
  }
  loadOnePokemonById(id: number): Observable<APIdata> {
    return this.http.get<APIdata>('api/pokemons/' + id).pipe(
      tap((apidata) => {}),
      catchError((err) => this.handleError(err, undefined))
    );
  }

  searchPokemons(term: string): Observable<APIdata> {
    if(term.length < 2){
      return of(new APIdata());
    }
    return this.http.get<APIdata>('api/pokemons/?name=' + term).pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, null))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<APIdata> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.http.delete<APIdata>('api/pokemons/' + pokemon.id).pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, null))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<APIdata|undefined> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    // pokemon.modifiedAt = new Date();
    return this.http.put<APIdata>('api/pokemons', pokemon, httpOptions).pipe(
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

    this.loadPokemons().subscribe(apidata =>{
      while (arr.length < length) {
        let num = Math.floor(Math.random() * apidata.data.length);
        if (!arr.includes(num)) {
          arr.push(num);
        }
      }
      arr.forEach( id => tmp.push( apidata.data[id] ));
    });    

    return tmp;
  }

  getTypes(): string[] {
    const types: string[] = [];
    this.loadPokemons().subscribe(apidata => {
      apidata.data.forEach(p => {
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