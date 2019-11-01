import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from 'src/app/model/food.model';
import { CatalogFilter } from 'src/app/model/catalog-filter.model';
@Component({
  selector: 'app-food-catalog-filter',
  templateUrl: './food-catalog-filter.component.html',
  styleUrls: ['./food-catalog-filter.component.css']
})
export class FoodCatalogFilterComponent implements OnInit {
  @Input() filters: CatalogFilter[] = [] as CatalogFilter[];
  @Output() removeFilter = new EventEmitter<CatalogFilter>();
  constructor() {}
  ngOnInit() {

  }
  rmFilter(filter?: CatalogFilter) {
    this.removeFilter.emit(filter);
  }
}
