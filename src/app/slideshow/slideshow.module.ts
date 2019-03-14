import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SlideshowComponent } from './slideshow.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
 
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    RouterModule.forChild([
      {
        path: '',
        component: SlideshowComponent
      }
    ])
  ],
  declarations: [SlideshowComponent],
  providers: [ {provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG } ]
})
export class SlideshowComponentModule {}
