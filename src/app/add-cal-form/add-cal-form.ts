import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FoodService } from '../services/food-service';

@Component({
  selector: 'app-add-cal-form',
  imports: [FormsModule],
  templateUrl: './add-cal-form.html',
  styleUrl: './add-cal-form.scss'
})
export class AddCalForm {
  foodName: string = '';
  foodCalories: number = 0;
  foodService: FoodService = inject(FoodService);
  addFood() {
    if (this.foodName === '' || this.foodCalories === 0) {
      return;
    }
    this.foodService.addToList({ id: this.foodService.getList().length, name: this.foodName, calories: this.foodCalories, date: Date.now() });

    this.foodName = '';
    this.foodCalories = 0;
  }
}
