    
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// MDB Angular Free
import { InputsModule, InputUtilitiesModule, WavesModule, ButtonsModule, IconsModule, CheckboxModule, CollapseModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FoodCatalogComponent } from './food-catalog.component';
import { FoodComponent } from './food/food.component';
import { FoodCatalogSideNavComponent } from './catalog-side-nav/catalog-side-nav.component';
import { FoodCatalogFilterComponent } from './food-catalog-filter/food-catalog-filter.component';
import { FoodCatalogSearchComponent } from './food-catalog-search/food-catalog-search.component';
@NgModule({
  declarations: [
    FoodCatalogComponent,
    FoodComponent,
    FoodCatalogSideNavComponent,
    FoodCatalogFilterComponent,
    FoodCatalogSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    InputsModule,
    InputUtilitiesModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    CheckboxModule,
    CollapseModule
  ],
  exports: [FoodCatalogComponent],
  providers: []
})
export class FoodCatalogModule { }