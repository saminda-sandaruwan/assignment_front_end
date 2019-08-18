import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SSliderComponent } from './s-slider.component';

describe('SSliderComponent', () => {
  let component: SSliderComponent;
  let fixture: ComponentFixture<SSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
