import { Component, OnInit, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { Food, RawFood, Recipe, RecipeItem } from 'src/app/model/food.model';
import {map, switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { CollapseComponent } from 'angular-bootstrap-md';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() food: any;
  @Output() foodChange = new EventEmitter<Food>();
  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];
  servingAmount = {};
  constructor(private route: ActivatedRoute, private request: RequestService) {}
  ngOnInit() {
    if (this.food && this.food.ingredients) {
      const servingAmount = [];
      this.food.ingredients.forEach((ingredient: RecipeItem) => {
        servingAmount.push(ingredient.amount);
      });
      this.servingAmount = servingAmount;
    }
  }
  expanded() {
    return this.collapses && this.collapses.length > 0 && this.collapses.some(c => !c.isCollapsed);
  }
  collapseAll() {
    const expanded = this.expanded();
    this.collapses.forEach((collapse: CollapseComponent) => {
      if ( (expanded && !collapse.isCollapsed) || (!expanded && collapse.isCollapsed) ) {
        collapse.toggle();
      }
    });
  }
  calculate(food: Food, amount: number, servingAmount: number) {
    if (amount && servingAmount && food && food.amount) {
      const ratio = servingAmount / food.amount;
      return amount * ratio;
    }
    return 0;
  }
}
