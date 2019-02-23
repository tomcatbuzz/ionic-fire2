import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  handlePress() {
    console.log("press");
  }

  handlePan(ev) {
    console.log(ev.center);
  }

  handleSwipe() {
    console.log("swipe")
  }

}
