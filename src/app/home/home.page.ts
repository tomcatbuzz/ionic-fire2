import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../services/theme-switcher.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private themeSwitcher: ThemeSwitcherService) {
    this.themeSwitcher.cycleTheme();
  }
  

  // handlePress() {
  //   console.log("press");
  // }

  // handlePan(ev) {
  //   console.log(ev.center);
  // }

  // handleSwipe() {
  //   console.log("swipe");
  // }

}
