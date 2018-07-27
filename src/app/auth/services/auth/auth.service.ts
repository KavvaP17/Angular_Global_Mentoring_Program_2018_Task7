import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = { login: '', token: ''};

  constructor(private md5: Md5) { }

  login(login: string, password: string): void {
    let hash = this.md5.appendStr(password).end().toString();
    this.user.login = login;
    this.user.token = hash;
    localStorage.setItem('login', login);
    localStorage.setItem('token', hash);
  }

  logout(): void {
    this.user = { login: '', token: ''};
    localStorage.removeItem('login');
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    this.user.login = this.user.login || localStorage.getItem('login');
    this.user.token = this.user.token || localStorage.getItem('token');
    return !!this.user.login && !!this.user.token;
  }

  getUserInfo() {
    return this.user;
  }

}
