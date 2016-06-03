import {Directive, ElementRef} from '@angular/core';
import {Renderer} from '@angular/core';

// Simple directve for autofocus
@Directive({
  selector: '[autofocus]' // using [ ] means selecting attributes
})
export class Autofocus {

  constructor(el: ElementRef, renderer: Renderer) {
    renderer.invokeElementMethod(el, 'focus', []);
  }
  
}
