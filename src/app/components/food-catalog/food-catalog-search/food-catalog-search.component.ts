import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { Food } from 'src/app/model/food.model';
import { CatalogFilter, CatalogFilterType } from 'src/app/model/catalog-filter.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-food-catalog-search',
  templateUrl: './food-catalog-search.component.html',
  styleUrls: ['./food-catalog-search.component.css']
})
export class FoodCatalogSearchComponent implements OnInit {
  @Output() newSearch = new EventEmitter<CatalogFilter>();
  parent: ElementRef;
  constructor(private fb: FormBuilder) {}
  form: FormGroup = new FormGroup({
    search: new FormControl('', Validators.required)
  });
  ngOnInit() {
    this.loadForm();
  }
  loadForm() {
    this.form = this.fb.group({
      search: ['', [Validators.required]]
    });
  }
  onSubmit() {
    console.log(this.search.valid, ' : ', this.form.value.search);
    if (this.search.valid) {
      this.newSearch.emit(new CatalogFilter({
        type: CatalogFilterType.search,
        value: this.form.value.search,
        display: this.form.value.search
      }));
      this.loadForm();
    }
  }
  get search() { return this.form.get('search'); }
  toggle() {
    console.log($('#filterContainer'));
    $('#filterContainer').toggle();
  }
}
