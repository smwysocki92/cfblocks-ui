import { Component, OnInit } from '@angular/core';
import { UserSession } from '../model/userSession.model';
import { LoginService } from '../service/login.service';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userSession: UserSession;
  constructor(private ls: LoginService) {}
  ngOnInit() {
    this.userSession = this.ls.getUserSession();
    this.ls.getUserSessionUpdates.subscribe((userSession: UserSession) => {
      this.userSession = userSession;
    });
  }

}
