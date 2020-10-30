import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseBannerComponent } from './base-banner.component';

describe('BaseBannerComponent', () => {
  let component: BaseBannerComponent;
  let fixture: ComponentFixture<BaseBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
