    
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// MDB Angular Free
import { InputsModule, InputUtilitiesModule, WavesModule, ButtonsModule, IconsModule, CheckboxModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
@NgModule({
  declarations: [
    LoginComponent,
    LoginCardComponent
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
  exports: [LoginComponent],
  providers: []
})
export class LoginModule { }