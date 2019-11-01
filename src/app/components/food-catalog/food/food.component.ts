import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from 'src/app/model/food.model';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  @Input() food: Food;
  @Output() selected = new EventEmitter<Food>();
  constructor() {}
  ngOnInit() {

  }
  select(food: Food) {
    this.selected.emit(food);
  }
}
