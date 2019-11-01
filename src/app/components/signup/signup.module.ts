    
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignupComponent} from './signup.component';
import { SignupCardComponent } from './signup-card/signup-card.component';
// MDB Angular Free
import { InputsModule, InputUtilitiesModule, WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from 'src/app/app-routing.module';
@NgModule({
  declarations: [
    SignupComponent,
    SignupCardComponent
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
    IconsModule
  ],
  exports: [SignupComponent],
  providers: []
})
export class SignupModule { }