import { Component, input } from '@angular/core';
import type { Character } from '../../../../intarfaces/character.interface';

@Component({
  selector: 'afk-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css',
})

//TODO LO QUE REQUIERA QUE SE MUESTRE EN MI LISTAR VA AQUI Y EL NOMBRE DE LA VARIABLE ES USADO EN EL HTML
export class CharactersListComponent {
  characters = input.required<Character[]>()
  listName = input.required<string>()
}
