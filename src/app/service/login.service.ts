import { Injectable, OnInit, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import { RequestService } from './request.service';
import { UserSession } from '../model/userSession.model';
import * as moment from 'moment';
import { stringify } from '@angular/compiler/src/util';
@Injectable()
export class LoginService implements OnInit {
  private _userSession: UserSession = new UserSession();
  getUserSessionUpdates: EventEmitter<UserSession> = new EventEmitter<UserSession>();
  constructor(private request: RequestService, private router: Router) {}
  ngOnInit() {

  }
  getUserSession(): UserSession {
    return this._userSession;
  }
  private setUserSession(value: UserSession) {
    this._userSession = value;
    this.getUserSessionUpdates.emit(this._userSession);
  }

  loadPrevSession() {
    let cachedSession: UserSession = new UserSession(JSON.parse(localStorage.getItem('CFBlocks')));
    if (cachedSession && cachedSession.authenticated && cachedSession.lastLogin &&
      moment(cachedSession.lastLogin).isSameOrAfter(moment().subtract(1, 'days'))) {
      cachedSession.lastLogin = new Date();
      this.setUserSession(cachedSession);
      localStorage.setItem('CFBlocks', JSON.stringify(cachedSession));
    } else {
      localStorage.removeItem('CFBlocks');
      cachedSession = undefined;
    }
    return cachedSession;
  }
  login(username: string, password: string, rememberMe?: boolean): Observable<UserSession> {
    return new Observable(subscriber => {
      this.request.login(username, password).subscribe((res: any) => {
        if (res && !res.error) {
          const timestamp = new Date();
          const userSession = new UserSession({
            created: timestamp,
            lastLogin: timestamp,
            authenticated: true,
            user: res,
            rememberMe: rememberMe ? rememberMe : false
          });
          this.setUserSession(userSession);
          if (userSession.rememberMe) {
            localStorage.setItem('CFBlocks', JSON.stringify(userSession));
          }
          subscriber.next(userSession);
        } else {
          subscriber.error(res && res.error ? res.error : 'No Response From Server');
        }
        subscriber.complete();
      }, error => {
        subscriber.error(error);
        subscriber.complete();
      });
    });
  }
  signup(username: string, password: string) {
    return new Observable(subscriber => {
      this.request.signup(username, password).subscribe(res => {
        this.login(username, password, false).subscribe((userSession: UserSession) => {
          subscriber.next(userSession);
          subscriber.complete();
        }, error => {
          subscriber.error(error);
          subscriber.complete();
        });
      }, error => {
        subscriber.error(error);
        subscriber.complete();
      });
    });
  }
  logout() {
    localStorage.removeItem('CFBlocks');
    this.setUserSession(new UserSession());
    this.router.navigate(['']);
  }
}
