import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {
  }
  token: any;
  httpOPtions: any = {};
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.token = localStorage.getItem('userInfo');
    if (this.token != null) {
      var userToken = JSON.parse(this.token)

    }
    request = request.clone({
      setHeaders: this.token != null ? {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': "Bearer " + userToken.token //`Bearer ${userToken.token}`,
      } : {},
      withCredentials: true
    });

    return next.handle(request);
  }
}
