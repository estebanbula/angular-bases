import { Injectable } from '@angular/core';
import {Character} from "../interfaces/character.interface";

import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1500
  },{
    id: uuid(),
    name: 'Goku',
    power: 10000
  },{
    id: uuid(),
    name: 'Vegetta',
    power: 8000
  }];

  public createNewCharacter(character: Character): void {
    let newCharacter: Character = {id: uuid(), name: character.name, power: character.power};
    this.characters.unshift(newCharacter);
  }

  public deleteCharacterByUUID(id: string): void {
    if (!id) return;
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
