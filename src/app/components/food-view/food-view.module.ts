
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// MDB Angular Free
import { InputsModule, InputUtilitiesModule, WavesModule, ButtonsModule, IconsModule, CheckboxModule, CollapseModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FoodViewComponent } from './food-view.component';
import { FoodViewCardComponent } from './food-view-card/food-view-card.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RawFoodIngredientComponent } from './recipe/raw-food-ingredient/raw-food-ingredient.component';
import { RecipeIngredientComponent } from './recipe/recipe-ingredient/recipe-ingredient.component';
@NgModule({
  declarations: [
    FoodViewComponent,
    FoodViewCardComponent,
    RecipeComponent,
    RawFoodIngredientComponent,
    RecipeIngredientComponent
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
  exports: [FoodViewComponent],
  providers: []
})
export class FoodViewModule { }
