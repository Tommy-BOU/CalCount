import { Component, inject } from '@angular/core';
import { FoodService } from '../services/food-service';
import { FoodInterface } from '../interfaces/food-interface';
import { FoodItem } from '../food-item/food-item';
@Component({
  selector: 'app-cal-list',
  imports: [FoodItem],
  templateUrl: './cal-list.html',
  styleUrl: './cal-list.scss'
})
export class CalList {
  totalCalories: number = 0;
  totalFoods: number = 0;
  foodService: FoodService = inject(FoodService);
  foodList: FoodInterface[] = this.foodService.getList();

  constructor() {
    this.setupTotal();
  }

  setupTotal() {
    this.totalCalories = this.foodList.reduce((total, food) => total + food.calories, 0);
    this.totalFoods = this.foodList.length;
  }
}

