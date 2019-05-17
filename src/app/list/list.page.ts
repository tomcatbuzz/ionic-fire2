import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  public messages;

  constructor() {
    this.messages = new Array(100).fill({title: 'Tony is awesome'});
  }
}
