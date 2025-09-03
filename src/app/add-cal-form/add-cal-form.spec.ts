import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalForm } from './add-cal-form';

describe('AddCalForm', () => {
  let component: AddCalForm;
  let fixture: ComponentFixture<AddCalForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCalForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCalForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
