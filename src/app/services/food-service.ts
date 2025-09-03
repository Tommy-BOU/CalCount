import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foodList: { id: number,name: string, calories: number, date: number }[] = [];

  constructor() {
    this.setList();
  }

  saveList(){
        localStorage.setItem('foodList', JSON.stringify(this.foodList));
  }

  getList(){
    return this.foodList;
  }

  setList(){
    this.foodList = JSON.parse(localStorage.getItem('foodList') ?? '[]');
  }

  addToList(food: {id: number, name: string, calories: number, date: number }) {
    this.foodList.push(food);
    this.saveList();
  }

  removeFromList(id: number) {
    const index = this.foodList.findIndex((food) => food.id === id);
    this.foodList.splice(index, 1);
    this.saveList();
  }

}
