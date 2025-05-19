import { effect, Injectable, signal } from "@angular/core";
import { Character } from "../../intarfaces/character.interface";

/* UN SERVICIO ES UNA CLASE COMUN Y CORRIENTE, TRABAJA CON DEPENDENCY INJECTIO (DI)
ES DECIR TRABAJA CON PATRON SINGLETON, POR LO QUE SIEMPRE CREA UNA MISMA INSTANCIA DEL SERVICIO
*/

//Esto va a retornar un array de Characters
const loadFromLocalStorage = (): Character[] =>{
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters): [];
}

// @Injectable Decorator that mar ks a class as available to be provided and injected as a dependency.
@Injectable({providedIn: 'root'})
export class AFKService{
  characters = signal<Character[]>(
  //   [
  //   {id:1, name:"LIBERTA", power: 1000},
  //   {id:2, name:"LUCILLA", power: 2500},
  // ]

  //DE ESTA FORMA LOS DATOS PERSISTEN AUNQUE SE REFRESQUE EL NAVEGADOR
  loadFromLocalStorage()
  );

  // EFFECT => Es una operación que se ejecuta al menos una vez usando una señal, si la señal cambia se vuelve a ejecutar
  // No es recomendado usar para hacer peticiones HTTP
  saveToLocalStorage = effect(() => {
    //Ejemplo de uso de effect, con un contador
    // console.log(`Character count ${this.characters().length}`);

    //Guardando informacion en LocalStorage
    localStorage.setItem('characters', JSON.stringify(this.characters()))
    
  })
 
  addCharacter(character: Character){
    this.characters.update((list) => [... list, character])
  }

} 