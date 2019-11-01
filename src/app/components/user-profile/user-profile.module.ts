    
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// MDB Angular Free
import { InputsModule, InputUtilitiesModule, WavesModule, ButtonsModule, IconsModule, CheckboxModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileCardComponent } from './user-profile-card/user-profile-card.component';
@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    InputsModule,
    InputUtilitiesModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    CheckboxModule
  ],
  exports: [UserProfileComponent],
  providers: []
})
export class UserProfileModule { }