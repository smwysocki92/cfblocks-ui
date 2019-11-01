import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/model/food.model';
import { CatalogFilter, CatalogFilterType } from 'src/app/model/catalog-filter.model';
import { RequestService } from 'src/app/service/request.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-food-catalog',
  templateUrl: './food-catalog.component.html',
  styleUrls: ['./food-catalog.component.css']
})
export class FoodCatalogComponent implements OnInit {
  filters = [] as CatalogFilter[];
  foods: Food[] = [];
  constructor(private request: RequestService, private router: Router) {}
  ngOnInit() {
    this.filters.push(new CatalogFilter({
      type: CatalogFilterType.catagory,
      value: 'All',
      display: 'All'
    }));
    this.loadData(this.filters);
  }
  updateFilter(filter: CatalogFilter) {
    if (filter) {
      if (!this.filters.some(f => f.type === filter.type && f.display === filter.display && filter.value === filter.value)) {
        if (filter.type === CatalogFilterType.catagory) {
          const index = this.filters.findIndex(f => f.type === CatalogFilterType.catagory);
          this.filters[index] = filter;
        } else {
          this.filters.push(filter);
        }
      }
    }
  }
  removeFilter(filter?: CatalogFilter) {
    if (filter) {
      if (filter.type === CatalogFilterType.catagory) {
        const index = this.filters.findIndex(f => f.type === CatalogFilterType.catagory);
        this.filters[index] = new CatalogFilter({
          type: CatalogFilterType.catagory,
          value: 'All',
          display: 'All'
        });
      } else {
        const index = this.filters.findIndex(f => f.type === filter.type && f.display === filter.display && filter.value === filter.value);
        this.filters.splice(index, 1);
      }
    } else {
      this.filters.filter(f => f.type !== CatalogFilterType.catagory).forEach(f => {
        const index = this.filters.findIndex(f => f.type === filter.type && f.display === filter.display && filter.value === filter.value);
        this.filters.splice(index, 1);
      });
    }
  }
  loadData(filters: CatalogFilter[]) {
    this.request.get('/food/list').subscribe((foods: Food[]) => {
      this.foods = foods;
    });
  }
  goToFood(food: Food) {
    this.router.navigate([`/food/view/${food._id}`]);
  }
}
