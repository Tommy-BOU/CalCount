import { Component, inject } from '@angular/core';
import { FoodService } from '../services/food-service';
import { FoodInfo } from '../interfaces/food-info';
import { FoodItem } from '../food-item/food-item';
import { TotalInfo } from '../interfaces/total-info';

@Component({
  selector: 'app-cal-list',
  imports: [FoodItem],
  templateUrl: './cal-list.html',
  styleUrl: './cal-list.scss'
})
export class CalList {
  foodService: FoodService = inject(FoodService);
  originalFoodList: FoodInfo[] = this.foodService.getList();
  foodList: FoodInfo[] = this.originalFoodList;
  total: TotalInfo = this.foodService.getTotal();
  filters: string[] = [];

  /**
   * Called when a filter checkbox is clicked.
   * @param event The click event.
   */
  applyFilter(event: Event){
    console.log((event.target as HTMLInputElement).value);
    console.log((event.target as HTMLInputElement).checked);
    if ((event.target as HTMLInputElement).checked && !this.filters.includes((event.target as HTMLInputElement).value)){
      this.filters.push((event.target as HTMLInputElement).value);
    }
    else{
      this.filters.splice(this.filters.indexOf((event.target as HTMLInputElement).value), 1);
    }
    console.log(this.filters);
    this.foodList = this.originalFoodList;
    this.foodList = this.filterList(this.foodList, this.filters);
  }

  filterList(foods: FoodInfo[], filters: string[]): FoodInfo[]{
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
    });
  }

  clearList(){
    this.foodService.clearList();
  }
}

