import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginService } from './service/login.service';
import { RequestService } from './service/request.service';
import { HttpClientModule } from '@angular/common/http';
import { SignupModule } from './components/signup/signup.module';
import { ValidationService } from './service/validation.service';
import { DateService } from './service/date.service';
import { LoginModule } from './components/login/login.module';
import { UserProfileModule } from './components/user-profile/user-profile.module';
import { FoodCatalogModule } from './components/food-catalog/food-catalog.module';
import { FoodViewModule } from './components/food-view/food-view.module';
import { FoodPlannerModule } from './components/food-planner/food-planner.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    SignupModule,
    LoginModule,
    UserProfileModule,
    FoodCatalogModule,
    FoodViewModule,
    FoodPlannerModule
  ],
  providers: [
    LoginService,
    RequestService,
    ValidationService,
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
