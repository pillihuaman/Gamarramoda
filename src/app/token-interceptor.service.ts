import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from "rxjs";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../environments/environment';
import { UserAUTH } from './Entities/user-auth';
import { catchError, map } from 'rxjs/operators';
import { JwtRequest } from './Entities/Jwt-Request';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  baseUrl = environment.ApiUrl;
  tokenid: string;
  constructor(private service: ApiService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const re = this.baseUrl + "/authenticate";
    if (req.url.search(re) === -1) {
      req = req.clone({
        headers: req.headers
          .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
          //.set('Content-Type', 'multipart/form-data')
          .set('Accept', 'application/json')
          //.set('Accept', 'application/json')
      });
    }
    return next.handle(req);
  }

}
