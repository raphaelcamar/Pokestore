export interface Status {
  health: number;
  attack: number;
  deffense: number;
  speed: number;
}

export type TypePokemon = 'fire' | 'bug' | 'water' | 'poison';

export class Pokemon {
  public name: string;
  public price: number;
  public status: Status;
  public picture: string;
  public type: TypePokemon;
  public id: string;

  constructor(data: Pokemon.Data) {
    this.id = data.id;
    this.name = data.name;
    this.picture = data.picture;
    this.status = data.status;
    this.price = data.price;
  }
}

export namespace Pokemon {
  export interface Data {
    name: string;
    price: number;
    status: Status;
    id: string;
    picture: string;
  }
}
