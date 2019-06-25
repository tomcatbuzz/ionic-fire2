import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../services/theme-switcher.service';
import { ActionSheetController } from '@ionic/angular';

const themes = {
  autumn: {
    primary: '#F78154',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#B89876'
  },
  night: {
    primary: '#8CBA80',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    medium: '#BCC2C7',
    dark: '#F7F7FF',
    light: '#495867'
  },
  neon: {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#F4EDF2',
    medium: '#B682A5',
    dark: '#34162A'
  }
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private theme: ThemeSwitcherService, 
    private actionSheetController: ActionSheetController) {

  }

  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Themes',
      buttons: [{
        text: 'Autumn',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'autumn',
        handler: () => {
          this.changeTheme('autumn');
        }
      }, {
        text: 'Dark',
        icon: 'share',
        cssClass: 'dark',
        handler: () => {
          this.changeTheme('night');
        }
      }, {
        text: 'Neon',
        icon: 'arrow-dropright-circle',
        cssClass: 'neon',
        handler: () => {
          this.changeTheme('neon');
        }
      }, {
        text: 'Default',
        icon: 'heart',
        cssClass: 'default',
        handler: () => {
          this.changeTheme('default');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
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
