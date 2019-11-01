import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserSession } from 'src/app/model/userSession.model';
@Component({
  selector: 'app-signup-card',
  templateUrl: './signup-card.component.html',
  styleUrls: ['./signup-card.component.css']
})
export class SignupCardComponent implements OnInit {
  constructor(private ls: LoginService, private router: Router, private fb: FormBuilder) {}
  account: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  errorMessage = '';
  ngOnInit() {
    this.loadForm();
  }
  loadForm() {
    this.account = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/)]]
    });
  }
  onSubmit() {
    this.errorMessage = '';
    if (this.username.valid && this.password.valid) {
      this.ls.signup(this.account.value.username, this.account.value.password).subscribe((userSession: UserSession) => {
        this.router.navigate(['/user-profile']);
        // TODO go to New User Signup Flow
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