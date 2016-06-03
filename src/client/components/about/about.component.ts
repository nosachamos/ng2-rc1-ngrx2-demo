import { Component } from '@angular/core';
import {InnerComponent} from './inner.component';
import {OuterComponent} from './outer.component';

@Component({
  selector: 'about-page',
  templateUrl: 'components/about/about.component.html',
  styleUrls: ['components/about/about.component.css'],
  directives: [OuterComponent]
})
export class AboutComponent {}
