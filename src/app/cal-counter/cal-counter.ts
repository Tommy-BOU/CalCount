import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cal-counter',
  imports: [FormsModule],
  templateUrl: './cal-counter.html',
  styleUrl: './cal-counter.scss'
})
export class CalCounter {
  foodName: string = '';
  foodCalories: number = 0;
  foodList: { name: string, calories: number, date: number }[] = [];
  totalCalories: number = 0;
  totalFoods: number = 0;

  constructor() {
    this.foodList = JSON.parse(localStorage.getItem('foodList') ?? '[]');
    this.setupTotal();
  }

  addFood() {
    if (this.foodName === '' || this.foodCalories === 0) {
      return;
    }
    this.foodList.push({ name: this.foodName, calories: this.foodCalories, date: Date.now() });
    localStorage.setItem('foodList', JSON.stringify(this.foodList));
    
    this.foodName = '';
    this.foodCalories = 0;

    this.setupTotal();
  }

  setupTotal(){
    this.totalCalories = this.foodList.reduce((total, food) => total + food.calories, 0);
    this.totalFoods = this.foodList.length;
  }

}
