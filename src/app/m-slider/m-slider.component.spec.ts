import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSliderComponent } from './m-slider.component';

describe('MSliderComponent', () => {
  let component: MSliderComponent;
  let fixture: ComponentFixture<MSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
