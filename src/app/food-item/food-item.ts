import { Component, input, inject } from '@angular/core';
import { FoodInfo } from '../interfaces/food-info';
import { FoodService } from '../services/food-service';
@Component({
  selector: 'app-food-item',
  imports: [],
  templateUrl: './food-item.html',
  styleUrl: './food-item.scss'
})
export class FoodItem {
  foodService = inject(FoodService);
  food = input.required<FoodInfo>();
  componentRef = document.getElementById('food-item');

  removeFood() {
    if (confirm('Are you sure you want to remove this food?')) {
      this.foodService.removeFromList(this.food().id);
    }
  }
}
