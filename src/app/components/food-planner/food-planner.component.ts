import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/model/food.model';
import { RequestService } from 'src/app/service/request.service';
import { DateService } from 'src/app/service/date.service';
import { LoginService } from 'src/app/service/login.service';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-food-planner',
  templateUrl: './food-planner.component.html',
  styleUrls: ['./food-planner.component.css']
})
export class FoodPlannerComponent implements OnInit {
  date: Date;
  planner: Food[] = [];
  constructor(private router: Router, private route: ActivatedRoute, private request: RequestService, private ds: DateService, private ls: LoginService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.loadParams(params);
    }, error => {
      console.error(error);
    });
  }
  loadParams(params: any) {
  console.log('loading params ', params);
    if (params && params.year && params.month && params.day) {
      this.date = this.ds.createDate(params.year, params.month, params.day);
      this.loadPlanner();
    } else {
      this.loadDate(null);
    }
  }
  loadDate(date: Date) {
    date = date ? date : this.ds.today();
    this.router.navigate([`/planner/${moment(date).format('YYYY')}/${moment(date).format('MM')}/${moment(date).format('DD')}`]);
  }
  loadPlanner() {
  console.log('loading planner ', this.ls.getUserSession().user);
    this.request.get(`/by/user/${this.ls.getUserSession().user._id}`).subscribe(res => {
      console.log(res);
      // this.planner = res;
    }, error => {
      console.error(error);
    });
  }
}
