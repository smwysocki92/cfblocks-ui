import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { ValidationService } from 'src/app/service/validation.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserSession } from 'src/app/model/userSession.model';
@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html'
})
export class LoginCardComponent implements OnInit {
  constructor(private ls: LoginService, private vs: ValidationService, private router: Router, private fb: FormBuilder) {}
  account: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  errorMessage = '';
  passwordHidden = true;
  ngOnInit() {
    this.loadForm();
  }
  loadForm() {
    this.account = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/)]],
      rememberme: [false]
    });
  }
  onSubmit() {
    this.errorMessage = '';
    if (this.username.valid && this.password.valid) {
      this.ls.login(this.account.value.username, this.account.value.password, this.account.value.rememberme).subscribe((userSession: UserSession) => {
        this.router.navigate(['/planner']);
      }, error => {
        console.error(error);
        this.errorMessage = error.message;
      });
    } else {
      this.errorMessage = 'Email and/or Password is invalid. Please change and try again.';
    }
  }
  get username() { return this.account.get('username'); }
  get password() { return this.account.get('password'); }
}