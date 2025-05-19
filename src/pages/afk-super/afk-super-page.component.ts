import { Component, inject, signal} from '@angular/core';
import { CharactersListComponent } from "../../app/components/afk/characters-list/characters-list.component";
import { CharacterAddCComponent } from '../../app/components/afk/character-add/character-add.component';
import { AFKService } from '../../app/services/afk-data.service';

@Component({
  selector: 'app-afk-super',
  imports: [CharactersListComponent, CharacterAddCComponent],
  templateUrl: './afk-super-page.component.html',
  styleUrl: './afk-super-page.component.css'
})

/*
PUEDO HACER INYECCION DE DEPENDENCIA PARA USAR UN SERVICIO
IMPORTANDO LA INSTANCIA CREADA
*/

export class AfkSuperPageComponent {
//FORMA 1 DE INYECCION DE DEPENDENCIA (TRADICIONAL)
//  constructor(
//   public afkService: AFKService
//  ){}

//FORMA 2 DE INYECCION DE DEPENDENCIA (RECOMENDADA)
public afkService = inject(AFKService);

}
