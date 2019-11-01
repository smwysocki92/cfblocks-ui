
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// MDB Angular Free
import { InputsModule, InputUtilitiesModule, WavesModule, ButtonsModule, IconsModule, CheckboxModule, CollapseModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FoodPlannerComponent } from './food-planner.component';
@NgModule({
  declarations: [
    FoodPlannerComponent
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
    IconsModule
  ],
  exports: [FoodPlannerComponent],
  providers: []
})
export class FoodPlannerModule { }
