import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import 'gl-ionic-background-video';

import { VideoBgComponent } from './video-bg.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: VideoBgComponent
      }
    ])
  ],
  declarations: [VideoBgComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VideoBgComponentModule {}
