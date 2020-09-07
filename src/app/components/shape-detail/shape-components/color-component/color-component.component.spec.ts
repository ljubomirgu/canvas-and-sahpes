import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorComponentComponent } from './color-component.component';

describe('ColorComponentComponent', () => {
  let component: ColorComponentComponent;
  let fixture: ComponentFixture<ColorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
