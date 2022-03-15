import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStateService } from './auth-state.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(private router: Router, private authStateService: AuthStateService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authStateService.isLoggedIn() && this.isAuthorized(route)) {
      return true;
    }
    return this.router.createUrlTree(['/home']);
  }

  isAuthorized(route: ActivatedRouteSnapshot):boolean {
    const userRole:string = this.authStateService.getRole();
    if (route.data['role'] && route.data['role'] === userRole) {
      return true;
    }
    return false;
  }

}
