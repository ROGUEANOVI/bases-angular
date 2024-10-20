import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() CharactersList: Character[] = [];

  @Output() onDeleteCharacterEmitter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    this.onDeleteCharacterEmitter.emit(id);
  }
}
