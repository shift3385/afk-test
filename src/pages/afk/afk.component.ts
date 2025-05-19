import { Component, signal } from '@angular/core';

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-afk',
  imports: [],
  templateUrl: './afk.component.html',
  styleUrl: './afk.component.css'
})

export class AfkComponent {
  name = signal('')
  power = signal(0)


  characters = signal<Character[]>([
    {id:1, name:"LIBERTA", power: 1000},
    // {id:2, name:"LUCILLA", power: 900},
    // {id:3, name:"ATHALIA", power: 1200},
    // {id:4, name:"LYCA", power: 1500}

  ]);


  addCharacter() {
    const newCharacter: Character = {
      id: this.characters().length+1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [... list, newCharacter])
    this.resetField()
  }

  resetField(){
    this.name.set('')
    this.power.set(0)
  }
}
