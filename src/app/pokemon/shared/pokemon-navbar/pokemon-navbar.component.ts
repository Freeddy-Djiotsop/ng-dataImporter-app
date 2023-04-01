import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-navbar',
  template: `
    <div class="mb-5">
      <nav class="navbar fixed-top navbar-expand-lg" style="background-color: #009688;">
        <a class="navbar-brand btn text-uppercase text-white border" (click)="goHome()">DDF</a>
        <button class="navbar-toggler border" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
          <li class="nav-item ms-auto me-2 mt-2">
              <a class="nav-link btn text-uppercase text-white border" (click)="goToList()">Pokemons</a>
          </li>
          <li class="nav-item ms-auto me-2 mt-2">
              <a class="nav-link btn text-uppercase text-white border" (click)="goToAdd()">Add Pokemon</a>
          </li>
          </ul>
        </div>
      </nav>
    </div>
  `,
  styles: [
  ]
})
export class PokemonNavbarComponent {

  constructor(private router: Router) {
    
  }

  goHome(){
    this.router.navigate(['']);
  }
  goToAdd(){
    this.router.navigate(['/pokemon/add']);
  }
  goToList(){
    this.router.navigate(['/pokemons']);
  }
}
