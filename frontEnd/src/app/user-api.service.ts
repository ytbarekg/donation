import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private URL = "http://localhost:3000/api/users/";
  constructor(private http: HttpClient) {

  }

  login(email: string, password: string) {
    return this.http.post<{token: string}>(this.URL + "login", {email, password});
  }

  signup(user: User) {
    return this.http.post<User>(this.URL + "signup", user);
  }

  signout() {
    return this.http.get<{success: boolean}>(this.URL + "signout");
  }

  getAll() {
    return this.http.get<User[]>(this.URL);
  }

  getById(id: string) {
    return this.http.get<User>(this.URL + id);
  }

  validateEmail(email: string) {
    return this.http.get<{success: boolean}>(this.URL + "email/email=" + email);
  }

}