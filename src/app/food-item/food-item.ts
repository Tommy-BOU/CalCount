import { Component, input, inject, signal } from '@angular/core';
import { FoodInfo } from '../interfaces/food-info';
import { FoodService } from '../services/food-service';
import { DatePipe } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-food-item',
  imports: [DatePipe, NgClass],
  templateUrl: './food-item.html',
  styleUrl: './food-item.scss'
})
export class FoodItem {
  foodService = inject(FoodService);
  food = input.required<FoodInfo>();

  removeFood() {
    if (confirm('Are you sure you want to remove this food?')) {
      this.foodService.removeFromList(this.food().id);
    }
  }
}
