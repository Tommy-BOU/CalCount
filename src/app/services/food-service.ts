import { Injectable } from '@angular/core';
import { FoodInfo } from '../interfaces/food-info';
import { TotalInfo } from '../interfaces/total-info';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foodList: FoodInfo[] = [];
  total: TotalInfo = { totalCalories: 0, totalFoods: 0 };

  constructor() {
    this.setList();
  }

  saveList() {
    localStorage.setItem('foodList', JSON.stringify(this.foodList));
  }

  getList() {
    return this.foodList;
  }

  setList() {
    this.foodList = JSON.parse(localStorage.getItem('foodList') ?? '[]');
    this.setupTotal();
  }

  addToList(food: FoodInfo) {
    this.foodList.push(food);
    this.saveList();
    this.setupTotal();
  }

  removeFromList(id: number) {
    const index = this.foodList.findIndex((food) => food.id === id);
    this.foodList.splice(index, 1);
    this.saveList();
    this.setupTotal();
  }

  setupTotal() {
    this.total.totalCalories = this.foodList.reduce((total, food) => total + food.calories, 0);
    this.total.totalFoods = this.foodList.length;
  }

  getTotal() {
    return this.total
  }

  clearList(){
    this.foodList = [];
    this.saveList();
    this.setupTotal();
  }

}
