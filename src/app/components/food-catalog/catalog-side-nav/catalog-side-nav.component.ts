import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Food } from 'src/app/model/food.model';
import { CatalogFilter, CatalogFilterType } from 'src/app/model/catalog-filter.model';
@Component({
  selector: 'app-food-catalog-side-nav',
  templateUrl: './catalog-side-nav.component.html',
  styleUrls: ['./catalog-side-nav.component.css']
})
export class FoodCatalogSideNavComponent implements OnInit {
  options = [{ name:'All', icon: null }, { name: 'Grain', icon: 'bread-slice' }, { name:'Fruit', icon: 'apple-alt' }, { name: 'Vegetable', icon: 'carrot' },
    { name: 'Dairy', icon: 'cheese' }, { name: 'Meat', icon: 'drumstick-bite' }, { name: 'Sweet', icon: 'cookie' }
    //  { name: 'Carb', icon: null }, { name: 'Fat', icon: null }, { name:'Protein', icon: null }, { name: 'Zero Calories', icon: null }
  ];
  @Input() filters;
  @Output() selection = new EventEmitter<CatalogFilter>();
  constructor() {}
  ngOnInit() {

  }
  selectOption(option: {name: string, icon: string}) {
    this.selection.emit(new CatalogFilter({
      type: CatalogFilterType.catagory,
      value: option.name,
      display: option.name
    }));
  }
  active() {
    return this.filters.find((f: CatalogFilter) => f.type === CatalogFilterType.catagory);
  }
}
