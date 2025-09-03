import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodButton } from './food-button';

describe('FoodButton', () => {
  let component: FoodButton;
  let fixture: ComponentFixture<FoodButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
