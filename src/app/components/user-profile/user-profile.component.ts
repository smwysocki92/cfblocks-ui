import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserSession } from 'src/app/model/userSession.model';
import { User } from 'src/app/model/user.model';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  constructor(private ls: LoginService) {}
  ngOnInit() {
    this.updateUser(this.ls.getUserSession());
    this.ls.getUserSessionUpdates.subscribe((userSession: UserSession) => {
      this.updateUser(userSession);
    });
  }
  updateUser(userSession: UserSession) {
    console.log(userSession);
    if (userSession && userSession.authenticated) {
      this.user = userSession.user;
    } else {
      this.user = undefined;
    }
  }
  logout() {
    this.ls.logout();
  }
}
