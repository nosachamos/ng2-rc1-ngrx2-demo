import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';
import {NameListService} from "../../services/name-list/name-list.service";

@Component({
  selector: 'home-page',
  templateUrl: 'components/home/home.component.html',
  styleUrls: ['components/home/home.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class HomeComponent {
  newName: string;
  constructor(public nameListService: NameListService) {}

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }
}
