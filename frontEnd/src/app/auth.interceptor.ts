import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthStateService } from './auth-state.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authStateService: AuthStateService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authStateService.getToken();
    if(token) {
      request = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)})
    }
    return next.handle(request);
  }
}
