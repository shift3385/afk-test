import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 0
  counterSignal = signal(0)

  increaseBy(value: number){
    this.counter += value
    this.counterSignal.update(current => current + value)
  }
  decreaseBy(value: number){
    this.counter -= value
    this.counterSignal.update(current => current - value)
  }
  reset(){
    this.counter = 0
    this.counterSignal.set(0)
  }
}
