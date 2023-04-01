import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

 transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Feu':
        color = 'danger';
        break;
      case 'Eau':
        color = 'info';
        break;
      case 'Plante':
        color = 'success';
        break;
      case 'Insecte':
        color = 'warning';
        break;
      case 'Normal':
        color = 'secondary';
        break;
      case 'Vol':
        color = 'primary';
        break;
      case 'Poison':
        color = 'dark';
        break;
      case 'Fée':
        color = 'outline-success';
        break;
      case 'Psy':
        color = 'outline-danger';
        break;
      case 'Electrik':
        color = 'outline-info';
        break;
      case 'Combat':
        color = 'outline-warning';
        break;
      case 'Sauveur':
        color = 'outline-secondary';
        break;
      default:
        color = 'outline-dark text-dark';
        break;
    }
  
    return 'btn btn-' + color;
  
  }

}
