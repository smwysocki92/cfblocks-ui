import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ls: LoginService, private router: Router) {}
  ngOnInit() {
    const userSession = this.ls.loadPrevSession();
    if (!userSession) {
      this.router.navigate(['login']);
    }
  }
}
