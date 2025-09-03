import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalList } from './cal-list';

describe('CalList', () => {
  let component: CalList;
  let fixture: ComponentFixture<CalList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
