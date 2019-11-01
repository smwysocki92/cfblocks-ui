import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, OnChanges, SimpleChanges } from '@angular/core';
import { Food, RawFood, Recipe, RecipeItem } from 'src/app/model/food.model';
import {map, switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { CollapseComponent } from 'angular-bootstrap-md';
@Component({
  selector: 'app-raw-food-ingredient',
  templateUrl: './raw-food-ingredient.component.html',
  styleUrls: ['./raw-food-ingredient.component.css']
})
export class RawFoodIngredientComponent implements OnInit, OnChanges {
  @Input() ingredient: RecipeItem;
  @Output() ingredientUpdate = new EventEmitter<RecipeItem>();
  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];
  servingAmount: number;
  constructor(private request: RequestService) {}
  ngOnInit() {
    this.updateServingAmount();
  }
  calculate(food: Food, amount: number, servingAmount: number) {
    if (amount && servingAmount && food && food.amount) {
      const ratio = servingAmount / food.amount;
      return amount * ratio;
    }
    return 0;
  }
  updateServingAmount() {
    if (this.ingredient && this.ingredient.amount) {
      this.servingAmount = this.ingredient.amount;
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.ingredient) {
      this.updateServingAmount();
    }
  }
}
