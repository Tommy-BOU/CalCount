import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalCounter } from './cal-counter';

describe('CalCounter', () => {
  let component: CalCounter;
  let fixture: ComponentFixture<CalCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
