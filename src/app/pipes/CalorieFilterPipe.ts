// kebab-case.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { FoodInfo } from '../interfaces/food-info';

@Pipe({
  name: 'calorieFilter',
})
export class CalorieFilterPipe implements PipeTransform {
  transform(foods: FoodInfo[], filters: string[]): FoodInfo[] {
    console.log(filters);
    console.log("before : ", foods);
    if (!foods || filters.length === 0){
        return foods;
    }
    return foods.filter((food) => {
        if (filters.includes('low') && food.calories <= 200){
            console.log("after : ", foods);
            return true;
        }
        else if (filters.includes('medium') && food.calories > 200 && food.calories <= 500){
            console.log("after : ", foods);
            return true;
        }
        else if (filters.includes('high') && food.calories > 500){
            console.log("after : ", foods);
            return true;
        }
        else if (filters.length === 0){
            console.log("after : ", foods);
            return true;
        }
        else{
            console.log("after : ", foods);
            return false;
        }
    })
  }
}