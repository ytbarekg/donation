import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Subject } from 'rxjs';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  token!: string;
  user!: {
    id: string, 
    firstName: string,
    lastName: string,
    role: string
  } | null;

  constructor(private userApiService: UserApiService) { }

  login(email: string, password: string) {
    let urlSubject = new Subject();
    this.userApiService.login(email, password).subscribe(data => {
      console.log(data);
      this.token = data.token;
      this.decodeToken();
      urlSubject.next(this.userHome());
      urlSubject.complete();
    })
    return urlSubject;
  }

  decodeToken() {
    this.user = jwt_decode(this.token);
    console.log(this.user)
  }

  userHome() {
    return this.user?.role.toLowerCase();
  }

  logout() {
    this.token = '';
    this.user = null;
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
    return this.token;
  }
}
