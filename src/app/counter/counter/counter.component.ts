import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
})
export class CounterComponent {
    public counter: number = 10;

    public increaseBy(currentValue?: number): void {
      currentValue ? this.counter = currentValue - 1 : this.counter += 1;
    }
  
    public resetCounter(): void {
      this.counter = 10;
    }
}