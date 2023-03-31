export class Pokemon {

  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  types: string[];
  created: Date;

  constructor(
    name: string = 'Please enter a name',
    hp: number = 100,
    cp: number = 10,
    picture: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png",
    types: string[] = ['Normal']
  ) {
    //id: number;
    this.hp = hp;
    this.cp = cp;
    this.name = name;
    this.picture = picture;
    this.types = types;
    this.created = new Date();
  }
}