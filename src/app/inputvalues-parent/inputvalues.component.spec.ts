import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputvaluesComponent } from './inputvalues.component';

describe('InputvaluesComponent', () => {
  let component: InputvaluesComponent;
  let fixture: ComponentFixture<InputvaluesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputvaluesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputvaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
