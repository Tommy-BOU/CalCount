import { Component, inject } from '@angular/core';
import { FoodService } from '../services/food-service';
import { FoodInfo } from '../interfaces/food-info';
import { FoodItem } from '../food-item/food-item';
import { TotalInfo } from '../interfaces/total-info';
import { CalorieFilterPipe } from '../pipes/CalorieFilterPipe';
@Component({
  selector: 'app-cal-list',
  imports: [FoodItem, CalorieFilterPipe],
  templateUrl: './cal-list.html',
  styleUrl: './cal-list.scss'
})
export class CalList {
  foodService: FoodService = inject(FoodService);
  foodList: FoodInfo[] = this.foodService.getList();
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
  }

  clearList(){
    this.foodService.clearList();
  }
}

