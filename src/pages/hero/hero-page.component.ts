import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {
  name = signal('Ironman')
  age = signal(45)


  getHeroDescription(){
    return `${ this.name() } - ${ this.age() }`;
  }

  capitalizedName = computed(() => this.name().toUpperCase())

  changeHero(){
    this.name.set('Spiderman')
    this.age.set(22)
  }

  resetForm(){
    this.name.set('Ironman')
    this.age.set(45)
  }

  updAge(){
    this.age.set(60)
  }
}
