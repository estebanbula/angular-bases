import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent {

  @Input()
  public characterList: Character[] = [];
  @Output()
  public characterIndex: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(index: number): void {
    let character: Character | undefined = this.characterList.at(index);
    this.characterIndex.emit(character?.id);
  }

}
