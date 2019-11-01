import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/model/food.model';
import {map, switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
@Component({
  selector: 'app-food-view',
  templateUrl: './food-view.component.html',
  styleUrls: ['./food-view.component.css']
})
export class FoodViewComponent implements OnInit {
  // @Input() food: Food;
  food: any;
  constructor(private route: ActivatedRoute, private request: RequestService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.loadFood(params.id);
    }, error => {
      console.error(error);
    });
  }
  loadFood(id: string) {
    this.request.get(`/food/id/${id}`).subscribe((food: Food) => {
      this.food = food;
    }, error => {
      console.error(error);
    });
  }
}
