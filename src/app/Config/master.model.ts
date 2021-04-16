import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAUTH } from '../Entities/user-auth';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { JwtRequest } from '../Entities/Jwt-Request';
import { environment } from '../../environments/environment';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Observable, of, throwError } from "rxjs";
import { Product } from '../Entities/product';

export class Master {
  public ngUnsubscribe = new Subject();
  token:string="";
  constructor(public service: ApiService) {
      this.getToken();
   
  }
    getToken(): void {
    try {
      let aut: UserAUTH;
      let Token = "";
      let tokenString: String;
      let idProduct: string;
      let lstproduct: any;
      let jwreqyest = new JwtRequest();
      jwreqyest.password = environment.password;
      jwreqyest.username = environment.username;
      let notfound = false;
      aut = null;
      this.service.getToken(jwreqyest).pipe(takeUntil(this.ngUnsubscribe)).subscribe((responseapi: UserAUTH) => {
        aut = responseapi;
        Token = responseapi.token;
        localStorage.setItem("token", Token);
        console.log(responseapi);
      }, (err: any) => {
        console.error(err);
        notfound = true;
      });
      throw new Error('An error occurred');
    }
    catch (error) {
      console.error('Here is the error message', error);
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
