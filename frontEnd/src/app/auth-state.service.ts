import { Injectable, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Subject } from 'rxjs';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  token: string | null;
  user: {
    id: string, 
    firstName: string,
    lastName: string,
    role: string
  } | null;

  constructor(private userApiService: UserApiService) {
    this.token = localStorage.getItem('token');
    if(this.token) {
      this.user = JSON.parse(localStorage.getItem('user')!);
    }
    else {
      this.user = null;
    }
    console.log("user-state", this.user)
  }

  login(email: string, password: string) {
    let urlSubject = new Subject();
    this.userApiService.login(email, password).subscribe(data => {
      this.saveUserState(data);
      urlSubject.next(this.userHome());
      urlSubject.complete();
    }, error=> {
      urlSubject.error(error.error)
    })
    return urlSubject;
  }

  saveUserState(data:any) {
      console.log(data);
      this.token = data.token;
      this.user = jwt_decode(this.token!);
      localStorage.setItem('user', JSON.stringify(this.user))
      localStorage.setItem('token', this.token!)
  }


  userHome() {
    return this.user?.role.toLowerCase();
  }

  logout() {
    this.token = '';
    this.user = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    if(this.user) {
      return true;
    }
    return false;
  }

  getRole(): string {
    if(this.user) {
      return this.user.role;
    }
    return '';
  }

  getUser() {
    return this.user;
  }

  getToken():string {
    return this.token!;
  }
}
