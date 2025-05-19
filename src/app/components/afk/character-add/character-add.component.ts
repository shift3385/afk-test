import { Component, signal, output } from '@angular/core';
import { Character } from '../../../../intarfaces/character.interface';

@Component({
  selector: 'afk-character-add',
  templateUrl: './character-add.component.html',
  styleUrl: './character-add.component.css',
})

export class CharacterAddCComponent {
  name = signal('')
  power = signal(0)

  //You can use outputs to emit values to parent directives and component.
  nweCharacter = output<Character>()

  addCharacter() { 
    if(!this.name() || !this.power() || this.power() <= 0){
      alert("NO PUEDE DEJAR CAMPOS VACIOS")
      return;
    }

    const newCharacter: Character = {
      id:  Math.floor(Math.random() * 1001),
      name: this.name(),
      power: this.power(),
    };

    // this.characters.update((list) => [... list, newCharacter])
    console.log({ newCharacter });

    // Para agregar un nuevo caracter
    this.nweCharacter.emit(newCharacter)
    this.resetField()
  }

  resetField(){
    this.name.set('')
    this.power.set(0)
  }

}
