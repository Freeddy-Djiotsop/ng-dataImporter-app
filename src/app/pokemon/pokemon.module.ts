import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { HomePokemonComponent } from './home-pokemon/home-pokemon.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { PokemonCardComponent } from './shared/pokemon-card/pokemon-card.component';
import { PokemonNavbarComponent } from './shared/pokemon-navbar/pokemon-navbar.component';
import { PokemonFormsComponent } from './shared/pokemon-forms/pokemon-forms.component'


  
  const pokemonRoutes: Routes = [
    { path: '', component: HomePokemonComponent},
    { path: 'pokemons', component: ListPokemonComponent},
    { path: 'pokemon/add', component: AddPokemonComponent},
    { path: 'pokemon/:id', component: DetailPokemonComponent},
    { path: 'edit/pokemon/:id', component: EditPokemonComponent},
  ];

@NgModule({
  declarations: [    
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    HomePokemonComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent,
    PokemonCardComponent,
    PokemonNavbarComponent,
    PokemonFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes),
    
  ],
  providers:[
    PokemonService,
  ]
})
export class PokemonModule { }
