import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'inner-cmp',
  template: '<button (click)="countUp()">Count Up {{value}}</button>',
})
export class InnerComponent {
  @Input() value: number = 0;
  @Output() counted = new EventEmitter();

  countUp() {
    this.value++;
    this.counted.emit(this.value);
  }
}
