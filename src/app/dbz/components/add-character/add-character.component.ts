import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  character: Character = {name: '', power: 0};

  @Output() onCreateCharacterEmitter: EventEmitter<Character> = new EventEmitter();

  onSubmit(): void {
    if (this.character.name.trim().length > 0) {
      this.onCreateCharacterEmitter.emit(this.character);
    } else {
      alert('Name is required');
    }

    this.clearForm();
  }

  private clearForm(): void {
    this.character = { name: '', power: 0 };
  }
}
