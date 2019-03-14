import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBgPage } from './video-bg.page';

describe('VideoBgPage', () => {
  let component: VideoBgPage;
  let fixture: ComponentFixture<VideoBgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoBgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
