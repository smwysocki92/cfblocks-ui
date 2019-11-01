import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FoodCatalogComponent } from './components/food-catalog/food-catalog.component';
import { FoodViewComponent } from './components/food-view/food-view.component';
import { FoodPlannerComponent } from './components/food-planner/food-planner.component';

const routes: Routes = [
  { path: '', component: FoodPlannerComponent },
  { path: 'planner/:year/:month/:day', component: FoodPlannerComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'catalog', component: FoodCatalogComponent },
  { path: 'food/view/:id', component: FoodViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
