import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Food } from 'src/app/model/food.model';
import {map, switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/model/user.model';
import { UserSession } from 'src/app/model/userSession.model';
@Component({
  selector: 'app-food-view-card',
  templateUrl: './food-view-card.component.html',
  styleUrls: ['./food-view-card.component.css']
})
export class FoodViewCardComponent implements OnInit, OnChanges {
  @Input() food: Food;
  servingAmount: number = 0;
  user: User;
  constructor(private request: RequestService, private ls: LoginService) {}
  ngOnInit() {
    this.user = this.ls.getUserSession().user;
    this.ls.getUserSessionUpdates.subscribe((session: UserSession) => {
      this.user = session.user;
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.food);
    if (this.food) {
      this.servingAmount = changes.food.currentValue.amount;
    }
  }
  calculate(amount: number) {
    if (amount && this.servingAmount && this.food && this.food.amount) {
      const ratio = this.servingAmount / this.food.amount;
      return amount * ratio;
    }
    return 0;
  }
  edit(id?: string) {

  }
  copy(id?: string) {

  }
  delete(id?: string) {
    if (id) {
      console.log('delete ' + id);
    }
  }
}
