import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import { User } from '../model/user.model';

@Injectable()
export class RequestService {
  authorization: string;
  api = environment.appAPI;
  constructor(private http: HttpClient) { }

  createAccount(username: string, password: string) {
    console.log("external service request received...");
    console.log(username + " " + password);
    return this.http.post(`${this.api}/createAccount`, {
      username: username,
      password: password
    });
  }
  login(username: string, password: string) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    return new Observable(sub => {
      this.http.post(`${this.api}/authenticate/login`, {
        username: username,
        password: password
      }, {headers}).subscribe(res => {
        this.authorization = res['token'];
        sub.next(res);
        sub.complete();
      }, error => {
        sub.error(error);
        sub.complete();
      });
    });
  }
  signup(username: string, password: string) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    return new Observable(sub => {
      this.http.post(`${this.api}/authenticate/signup`, {
        username: username,
        password: password,
        email: username
      }, {headers}).subscribe(res => {
        sub.next(res);
        sub.complete();
      }, error => {
        sub.error(error);
        sub.complete();
      });
    });
  }
  logout() {
    this.authorization = undefined;
  }
  get(url: string) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.authorization}`);
    return this.http.get(this.formatURL(url), {headers});
  }

  post(url: string, data: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${this.authorization}`);
    console.log(url);
    return this.http.post(this.formatURL(url), data, {headers});
  }
  formatURL(url: string) {
    if (url && url.match(/^http/)) {
      return url;
    } else {
      return `${this.api}${url}`;
    }
  }
}